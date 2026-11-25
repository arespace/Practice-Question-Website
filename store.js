/**
 * 统一进度存储 v3（速背卡 + 检测题共用）。
 *
 * - 单 key：quiz:v3
 * - 方向隔离：data.dirs[dirKey] 下各存各的 cards / quiz / 收藏 / 草稿 / 今日 / 打卡
 * - 读取顺序：quiz:v3 → quiz:v2（迁移）→ 旧版两个 key（迁移）
 * - v2 原 key 只读不删，作为回滚兜底；迁移是纯函数、可重复执行（幂等）
 *
 * v3 相对 v2 的增量（迁移时补齐，不丢任何旧字段）：
 *   cards[id]  {mark, ts} → 增加 interval（天）/ dueAt（到期时间戳）/ reps / lapses
 *   quiz[id]   {r,w,last,ans,ts,interval,dueAt} → 增加 streak（连对次数）/ graduated（是否已毕业）
 *   daily      {date,count,ids} → 增加 right / wrong（当日答对答错数）/ history（按天的历史，上限 90 天）
 */
(function () {
  'use strict';

  const KEY = 'quiz:v3';
  const KEY_V2 = 'quiz:v2';
  const LEGACY_CARDS = 'uecpp-quiz-v1';
  const LEGACY_QUIZ = 'uecpp-exam-v1';
  const LEGACY_DIR = 'ue-cpp';
  const DAY = 86400000;
  const HISTORY_MAX = 90;

  const todayStr = () => new Date().toLocaleDateString('sv-SE');

  function read(key) {
    try { return JSON.parse(localStorage.getItem(key) || 'null'); } catch (e) { return null; }
  }
  function write(key, val) {
    try { localStorage.setItem(key, JSON.stringify(val)); } catch (e) { /* 存储不可用时静默降级 */ }
  }
  function num(v, dft) { return typeof v === 'number' && isFinite(v) ? v : dft; }

  function blankDaily() {
    return { date: todayStr(), count: 0, ids: [], right: 0, wrong: 0, history: [] };
  }
  function blankDir() {
    return {
      cards: {},
      quiz: {},
      cardFav: [],
      quizFav: [],
      drafts: {},
      daily: blankDaily(),
      streak: { days: 0, last: '' },
      goal: 20,
      pos: null,
      filters: null,
      read: null,
      exportAt: 0
    };
  }

  /* ---------------- 归一化 / 迁移 ---------------- */

  // 卡片：补齐调度字段。dueAt 取“原节奏到期”和“现在”的较早者，
  // 保证迁移那一刻“待复习”集合与旧版（标记 0/1 即待复习）一致。
  function normalizeCard(rec) {
    if (!rec || typeof rec !== 'object') return null;
    if (typeof rec.mark !== 'number' || rec.mark < 0 || rec.mark > 2) return null;
    const r = Object.assign({}, rec);
    r.ts = num(r.ts, 0);
    if (!(r.interval > 0)) r.interval = r.mark === 2 ? 7 : r.mark === 1 ? 3 : 1;
    if (!(r.dueAt > 0)) {
      const base = r.ts || Date.now();
      r.dueAt = Math.min(base + r.interval * DAY, Date.now());
    }
    if (typeof r.reps !== 'number') r.reps = 1;
    if (typeof r.lapses !== 'number') r.lapses = r.mark === 0 ? 1 : 0;
    return r;
  }

  // 题目：补齐 streak / graduated。
  // 迁移规则：最近一次答对 → 视为已毕业（错题本与改前一致）；答错 → 0/2 继续留在错题本。
  function normalizeQuiz(rec) {
    if (!rec || typeof rec !== 'object') return null;
    const r = Object.assign({}, rec);
    r.r = num(r.r, 0);
    r.w = num(r.w, 0);
    r.ts = num(r.ts, 0);
    if (r.last !== 'right' && r.last !== 'wrong') r.last = r.w > 0 ? 'wrong' : 'right';
    if (typeof r.interval !== 'number') r.interval = r.last === 'right' ? 1 : 1;
    if (typeof r.dueAt !== 'number') {
      if (r.last === 'wrong') r.dueAt = r.ts || 0;
      else r.dueAt = (r.ts || Date.now()) + Math.max(1, r.interval) * DAY;
    }
    if (typeof r.ans !== 'string') r.ans = '';
    if (typeof r.streak !== 'number') r.streak = r.last === 'right' ? 2 : 0;
    if (typeof r.graduated !== 'boolean') r.graduated = r.last === 'right';
    return r;
  }

  function normalizeDaily(dl) {
    const d = Object.assign({}, dl || {});
    if (typeof d.date !== 'string' || !d.date) d.date = todayStr();
    d.count = num(d.count, 0);
    d.ids = Array.isArray(d.ids) ? d.ids.filter(id => typeof id === 'string') : [];
    d.right = num(d.right, 0);
    d.wrong = num(d.wrong, 0);
    d.history = Array.isArray(d.history)
      ? d.history.filter(h => h && typeof h.date === 'string').slice(-HISTORY_MAX)
      : [];
    return d;
  }

  function normalizeDir(src) {
    const d = Object.assign(blankDir(), src && typeof src === 'object' ? src : {});
    const cards = {};
    Object.keys(d.cards || {}).forEach(id => {
      const c = normalizeCard(d.cards[id]);
      if (c) cards[id] = c;
    });
    const quiz = {};
    Object.keys(d.quiz || {}).forEach(id => {
      const q = normalizeQuiz(d.quiz[id]);
      if (q) quiz[id] = q;
    });
    d.cards = cards;
    d.quiz = quiz;
    d.cardFav = Array.isArray(d.cardFav) ? d.cardFav.filter(id => typeof id === 'string') : [];
    d.quizFav = Array.isArray(d.quizFav) ? d.quizFav.filter(id => typeof id === 'string') : [];
    d.drafts = d.drafts && typeof d.drafts === 'object' ? d.drafts : {};
    d.daily = normalizeDaily(d.daily);
    d.streak = d.streak && typeof d.streak === 'object'
      ? { days: num(d.streak.days, 0), last: typeof d.streak.last === 'string' ? d.streak.last : '' }
      : { days: 0, last: '' };
    d.goal = num(d.goal, 20) > 0 ? num(d.goal, 20) : 20;
    // 位置记忆（v3 新增字段，旧数据缺省为 null，无需升版本）
    d.pos = d.pos && typeof d.pos === 'object' && typeof d.pos.id === 'string'
      ? { id: d.pos.id, idx: num(d.pos.idx, 0), ts: num(d.pos.ts, 0) }
      : null;
    // 筛选记忆（v3 新增字段，旧数据缺省为 null，读取时按「全部」处理）
    const TYPES = ['all', 'single', 'multi', 'fill', 'code'];
    const PRIOS = ['all', 'P0', 'P1', 'P2'];
    const STATES = ['all', 'todo', 'wrong', 'right', 'due', 'fav'];
    d.filters = d.filters && typeof d.filters === 'object'
      ? {
          cat: typeof d.filters.cat === 'string' && d.filters.cat ? d.filters.cat : 'all',
          prio: PRIOS.indexOf(d.filters.prio) >= 0 ? d.filters.prio : 'all',
          type: TYPES.indexOf(d.filters.type) >= 0 ? d.filters.type : 'all',
          stat: STATES.indexOf(d.filters.stat) >= 0 ? d.filters.stat : 'all'
        }
      : null;
    // 深读已读（v3 新增字段，旧数据缺省为 null）
    d.read = d.read && typeof d.read === 'object'
      ? {
          ids: Array.isArray(d.read.ids) ? d.read.ids.filter(id => typeof id === 'string') : [],
          last: typeof d.read.last === 'string' && d.read.last ? d.read.last : null
        }
      : null;
    // 上次导出复习包的时间戳（毫秒，0 = 从未导出）
    d.exportAt = num(d.exportAt, 0);
    return d;
  }

  /** v2 → v3：纯函数，重复调用结果一致（幂等） */
  function migrateFromV2(v2) {
    const out = { version: 3, theme: 'dark', lastDir: LEGACY_DIR, dirs: {} };
    if (!v2 || typeof v2 !== 'object') return out;
    out.theme = v2.theme === 'light' ? 'light' : 'dark';
    out.lastDir = typeof v2.lastDir === 'string' ? v2.lastDir : '';
    Object.keys(v2.dirs || {}).forEach(k => { out.dirs[k] = normalizeDir(v2.dirs[k]); });
    return out;
  }

  /** 旧版两个 key → v3（先按 v2 结构拼装，再统一归一化） */
  function migrateLegacy() {
    const cs = read(LEGACY_CARDS);
    const qz = read(LEGACY_QUIZ);
    if (!cs && !qz) return { version: 3, theme: 'dark', lastDir: LEGACY_DIR, dirs: {} };

    const v2 = { version: 2, theme: 'dark', lastDir: LEGACY_DIR, dirs: {} };
    if (qz && (qz.theme === 'light' || qz.theme === 'dark')) v2.theme = qz.theme;
    else if (cs && (cs.theme === 'light' || cs.theme === 'dark')) v2.theme = cs.theme;

    const d = {
      cards: {}, quiz: {}, cardFav: [], quizFav: [], drafts: {},
      daily: { date: todayStr(), count: 0, ids: [] },
      streak: { days: 0, last: '' }, goal: 20
    };
    if (cs && typeof cs === 'object') {
      Object.keys(cs.marks || {}).forEach(id => {
        const m = cs.marks[id];
        if (m === 0 || m === 1 || m === 2) d.cards[id] = { mark: m, ts: 0 };
      });
      (Array.isArray(cs.fav) ? cs.fav : []).forEach(id => {
        if (typeof id === 'string' && d.cardFav.indexOf(id) < 0) d.cardFav.push(id);
      });
      if (cs.today && Array.isArray(cs.today.ids)) {
        d.daily.date = cs.today.date || d.daily.date;
        d.daily.ids = cs.today.ids.filter(id => typeof id === 'string');
      }
    }
    if (qz && typeof qz === 'object') {
      Object.keys(qz.records || {}).forEach(id => {
        if (qz.records[id] && typeof qz.records[id] === 'object') d.quiz[id] = qz.records[id];
      });
      (Array.isArray(qz.fav) ? qz.fav : []).forEach(id => {
        if (typeof id === 'string' && d.quizFav.indexOf(id) < 0) d.quizFav.push(id);
      });
      if (qz.drafts && typeof qz.drafts === 'object') d.drafts = Object.assign({}, qz.drafts);
      if (qz.daily && typeof qz.daily.count === 'number') {
        d.daily.date = qz.daily.date || d.daily.date;
        d.daily.count = qz.daily.count;
      }
      if (qz.streak && typeof qz.streak === 'object') {
        d.streak = { days: qz.streak.days || 0, last: qz.streak.last || '' };
      }
      if (typeof qz.goal === 'number' && qz.goal > 0) d.goal = qz.goal;
    }
    v2.dirs[LEGACY_DIR] = d;
    return migrateFromV2(v2);
  }

  /* ---------------- 每日滚动 / 打卡 ---------------- */

  /** 跨天时把昨天归档进 history（上限 90 天），返回是否发生了滚动 */
  function rollDay(d) {
    const t = todayStr();
    if (d.daily.date === t) return false;
    if (d.daily.count > 0 || d.daily.ids.length) {
      d.daily.history.push({
        date: d.daily.date,
        count: d.daily.count,
        right: d.daily.right || 0,
        wrong: d.daily.wrong || 0
      });
      if (d.daily.history.length > HISTORY_MAX) d.daily.history = d.daily.history.slice(-HISTORY_MAX);
    }
    d.daily = { date: t, count: 0, ids: [], right: 0, wrong: 0, history: d.daily.history };
    return true;
  }

  /**
   * 记一次完成：count++、可选去重记 id、ok 时累加当日对错、更新连续打卡。
   * ok 传 null 表示速背卡（无对错概念）。
   */
  function bumpDaily(d, id, ok) {
    rollDay(d);
    d.daily.count++;
    if (id && d.daily.ids.indexOf(id) < 0) d.daily.ids.push(id);
    if (ok === true) d.daily.right++;
    else if (ok === false) d.daily.wrong++;
    const t = todayStr();
    const st = d.streak;
    if (st.last !== t) {
      const y = new Date(Date.now() - DAY).toLocaleDateString('sv-SE');
      st.days = st.last === y ? (st.days || 0) + 1 : 1;
      st.last = t;
    }
  }

  /* ---------------- 载入 ---------------- */

  let migrated = false;
  let data = read(KEY);
  if (data && data.version === 3 && data.dirs && typeof data.dirs === 'object') {
    // 已是 v3：只做字段容错
    Object.keys(data.dirs).forEach(k => { data.dirs[k] = normalizeDir(data.dirs[k]); });
  } else {
    const v2 = read(KEY_V2);
    data = v2 && v2.dirs ? migrateFromV2(v2) : migrateLegacy();
    migrated = true;
    write(KEY, data); // v2 key 保持原样，不删除，作为回滚兜底
  }
  if (data.theme !== 'light' && data.theme !== 'dark') data.theme = 'dark';
  if (typeof data.lastDir !== 'string') data.lastDir = '';

  window.Store = {
    key: KEY,
    version: 3,
    data: data,
    migrated: migrated,
    save() { write(KEY, data); },
    dir(key) {
      let changed = false;
      if (!data.dirs[key]) {
        data.dirs[key] = blankDir();
        changed = true;
      }
      const d = data.dirs[key];
      // 容错：补齐可能缺失的字段
      if (!d.cards || typeof d.cards !== 'object') { d.cards = {}; changed = true; }
      if (!d.quiz || typeof d.quiz !== 'object') { d.quiz = {}; changed = true; }
      if (!Array.isArray(d.cardFav)) { d.cardFav = []; changed = true; }
      if (!Array.isArray(d.quizFav)) { d.quizFav = []; changed = true; }
      if (!d.drafts || typeof d.drafts !== 'object') { d.drafts = {}; changed = true; }
      d.daily = normalizeDaily(d.daily);
      if (rollDay(d)) changed = true;
      if (!d.streak || typeof d.streak !== 'object') { d.streak = { days: 0, last: '' }; changed = true; }
      if (typeof d.goal !== 'number' || d.goal <= 0) { d.goal = 20; changed = true; }
      if (changed) write(KEY, data);
      return d;
    },
    setLastDir(key) {
      data.lastDir = key;
      write(KEY, data);
    },
    todayStr: todayStr,
    rollDay: rollDay,
    bumpDaily: bumpDaily,
    // 供测试与将来的数据修复使用
    blankDir: blankDir,
    normalizeDir: normalizeDir,
    migrateFromV2: migrateFromV2
  };
})();
