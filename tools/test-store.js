/**
 * store.js v3 迁移测试（零依赖，node tools/test-store.js）。
 *
 * 用伪造的 localStorage 直接加载 store.js，验证：
 * 1) v2 → v3 后，卡片标记 / 做题记录 / 收藏 / 草稿 / 今日计数 / 打卡 / 目标一个不丢
 * 2) 新增字段全部按规则补齐（卡片 interval/dueAt/reps/lapses；题目 streak/graduated；daily right/wrong/history）
 * 3) 迁移幂等：migrateFromV2 跑两次结果一致；二次启动不再迁移
 * 4) quiz:v2 原 key 原样保留（回滚兜底）
 * 5) 更老的两个 key（uecpp-quiz-v1 / uecpp-exam-v1）也能迁进来
 */
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const CODE = fs.readFileSync(path.join(__dirname, '..', 'store.js'), 'utf8');
const today = new Date().toLocaleDateString('sv-SE');
const DAY = 86400000;
const TS = new Date(today + 'T10:00:00+08:00').getTime();

let pass = 0, fail = 0;
function ok(name, cond, extra) {
  if (cond) { pass++; console.log('PASS ' + name); }
  else { fail++; console.error('FAIL ' + name + (extra ? '\n  ' + extra : '')); }
}
function eq(name, got, want) {
  const a = JSON.stringify(got), b = JSON.stringify(want);
  ok(name, a === b, '期望 ' + b + '\n  实际 ' + a);
}

function fakeStorage(init) {
  const map = new Map(Object.entries(init || {}));
  return {
    map,
    getItem(k) { return map.has(k) ? map.get(k) : null; },
    setItem(k, v) { map.set(k, String(v)); },
    removeItem(k) { map.delete(k); }
  };
}

function loadStore(storage) {
  const sandbox = { window: {}, localStorage: storage, console };
  vm.runInNewContext(CODE, sandbox);
  return sandbox.window.Store;
}

/* ---------------- 用例 1：v2 全字段迁移 ---------------- */
const v2 = {
  version: 2,
  theme: 'light',
  lastDir: 'ue-cpp',
  dirs: {
    'ue-cpp': {
      cards: {
        'cpp-01': { mark: 2, ts: TS - 30 * DAY },
        'cpp-02': { mark: 0, ts: TS - 2 * DAY },
        'cpp-03': { mark: 1, ts: TS - DAY }
      },
      quiz: {
        'd1-001': { r: 3, w: 2, last: 'wrong', ans: 'B', ts: TS - 2 * DAY, interval: 1, dueAt: TS - 2 * DAY },
        'd1-002': { r: 4, w: 1, last: 'right', ans: 'AC', ts: TS - 3 * DAY, interval: 7, dueAt: TS + 4 * DAY }
      },
      cardFav: ['cpp-01', 'cpp-03'],
      quizFav: ['d1-002'],
      drafts: { 'd1-010': 'int main() { return 0; }' },
      daily: { date: today, count: 7, ids: ['cpp-01', 'cpp-02'] },
      streak: { days: 4, last: today },
      goal: 30
    }
  }
};

const st1 = fakeStorage({ 'quiz:v2': JSON.stringify(v2) });
const Store1 = loadStore(st1);
const d1 = Store1.dir('ue-cpp');

ok('迁移后版本号为 3', Store1.data.version === 3);
eq('主题保留', Store1.data.theme, 'light');
eq('上次方向保留', Store1.data.lastDir, 'ue-cpp');
ok('二次启动标记为已迁移', Store1.migrated === true);

/* 旧字段逐项不丢 */
eq('卡片标记与时间戳不丢', [d1.cards['cpp-01'].mark, d1.cards['cpp-01'].ts], [2, TS - 30 * DAY]);
eq('卡片数量一致', Object.keys(d1.cards).length, 3);
eq('做题记录 r/w/last/ans/ts 不丢',
  [d1.quiz['d1-001'].r, d1.quiz['d1-001'].w, d1.quiz['d1-001'].last, d1.quiz['d1-001'].ans, d1.quiz['d1-001'].ts],
  [3, 2, 'wrong', 'B', TS - 2 * DAY]);
eq('做题记录 interval/dueAt 不丢',
  [d1.quiz['d1-002'].interval, d1.quiz['d1-002'].dueAt], [7, TS + 4 * DAY]);
eq('卡片收藏不丢', d1.cardFav, ['cpp-01', 'cpp-03']);
eq('题目收藏不丢', d1.quizFav, ['d1-002']);
eq('代码草稿不丢', d1.drafts, { 'd1-010': 'int main() { return 0; }' });
eq('今日计数不丢', [d1.daily.date, d1.daily.count, d1.daily.ids], [today, 7, ['cpp-01', 'cpp-02']]);
eq('连续打卡不丢', d1.streak, { days: 4, last: today });
eq('每日目标不丢', d1.goal, 30);

/* 新增字段 */
ok('卡片补出 interval', d1.cards['cpp-02'].interval === 1, JSON.stringify(d1.cards['cpp-02']));
ok('卡片补出 dueAt 且迁移时即到期（不晚于现在）', d1.cards['cpp-02'].dueAt <= Date.now());
ok('卡片补出 reps', d1.cards['cpp-03'].reps === 1);
ok('卡片补出 lapses（不会=1，其余=0）', d1.cards['cpp-02'].lapses === 1 && d1.cards['cpp-03'].lapses === 0);
eq('题目 最近答错 → 未毕业、连对 0', [d1.quiz['d1-001'].streak, d1.quiz['d1-001'].graduated], [0, false]);
eq('题目 最近答对 → 视为已毕业、连对 2（错题本与改前一致）', [d1.quiz['d1-002'].streak, d1.quiz['d1-002'].graduated], [2, true]);
eq('today 补出 right/wrong/history', [d1.daily.right, d1.daily.wrong, d1.daily.history], [0, 0, []]);

/* key 行为 */
ok('v3 key 已写入', st1.getItem('quiz:v3') !== null);
eq('v2 key 原样保留（回滚兜底）', JSON.parse(st1.getItem('quiz:v2')), v2);

/* ---------------- 用例 2：幂等 ---------------- */
const once = JSON.parse(JSON.stringify(Store1.migrateFromV2(v2)));
const twice = JSON.parse(JSON.stringify(Store1.migrateFromV2(v2)));
eq('migrateFromV2 重复执行结果一致（幂等）', twice, once);
const again = JSON.parse(JSON.stringify(Store1.migrateFromV2(once)));
eq('把 v3 结果再喂一次也稳定', again, once);

const StoreReload = loadStore(st1);
ok('二次启动直接读 v3，不再迁移', StoreReload.migrated === false);
const dReload = StoreReload.dir('ue-cpp');
eq('二次启动记录不丢', Object.keys(dReload.quiz).length, 2);
eq('二次启动打卡不丢', dReload.streak, { days: 4, last: today });
eq('二次启动目标不丢', dReload.goal, 30);

/* 连跑两次 dir() 不改变数据 */
const before = JSON.stringify(dReload);
StoreReload.dir('ue-cpp');
eq('重复调用 dir() 不产生变化', JSON.stringify(dReload), before);

/* ---------------- 用例 3：更老的 v1 / exam key ---------------- */
const legacyStorage = fakeStorage({
  'uecpp-quiz-v1': JSON.stringify({
    marks: { 'cpp-01': 2, 'cpp-02': 1, 'bad': 9 },
    fav: ['cpp-01'],
    today: { date: today, ids: ['cpp-01'] },
    theme: 'dark'
  }),
  'uecpp-exam-v1': JSON.stringify({
    records: { 'd1-001': { r: 1, w: 0, last: 'right', ans: 'A', ts: TS, interval: 3, dueAt: TS + 3 * DAY } },
    fav: ['d1-001'],
    drafts: { 'd1-002': 'draft' },
    daily: { date: today, count: 5 },
    streak: { days: 2, last: today },
    goal: 25,
    theme: 'light'
  })
});
const StoreL = loadStore(legacyStorage);
const dL = StoreL.dir('ue-cpp');
eq('旧 key：卡片标记迁入（非法标记被忽略）', Object.keys(dL.cards).sort(), ['cpp-01', 'cpp-02']);
eq('旧 key：卡片 / 题目收藏迁入', [dL.cardFav, dL.quizFav], [['cpp-01'], ['d1-001']]);
eq('旧 key：草稿迁入', dL.drafts, { 'd1-002': 'draft' });
eq('旧 key：今日计数取题目侧', dL.daily.count, 5);
eq('旧 key：打卡 / 目标迁入', [dL.streak, dL.goal], [{ days: 2, last: today }, 25]);
eq('旧 key：主题以题目侧优先', StoreL.data.theme, 'light');
ok('旧 key：也已写入 v3', legacyStorage.getItem('quiz:v3') !== null);

/* ---------------- 用例 4：跨天归档 ---------------- */
const y = new Date(Date.now() - DAY).toLocaleDateString('sv-SE');
const crossStorage = fakeStorage({
  'quiz:v3': JSON.stringify({
    version: 3, theme: 'dark', lastDir: 'ue-cpp',
    dirs: { 'ue-cpp': {
      cards: {}, quiz: {}, cardFav: [], quizFav: [], drafts: {},
      daily: { date: y, count: 6, ids: ['a'], right: 4, wrong: 2, history: [] },
      streak: { days: 1, last: y }, goal: 20
    } }
  })
});
const StoreC = loadStore(crossStorage);
const dC = StoreC.dir('ue-cpp');
eq('跨天：昨日归档进 history', dC.daily.history, [{ date: y, count: 6, right: 4, wrong: 2 }]);
eq('跨天：今日计数归零', [dC.daily.date, dC.daily.count, dC.daily.ids], [today, 0, []]);

console.log('\n' + pass + ' passed, ' + fail + ' failed');
process.exit(fail ? 1 : 0);
