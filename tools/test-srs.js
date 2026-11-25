/**
 * srs.js 单测（零依赖，node tools/test-srs.js）。
 * 覆盖：卡片首评/升级/降级/封顶，题目首错/连对/断连，时间边界。
 */
const SRS = require('../srs.js');

const DAY = SRS.DAY;
const NOW = new Date('2026-11-25T10:00:00+08:00').getTime();
let pass = 0, fail = 0;

function eq(name, got, want) {
  const ok = JSON.stringify(got) === JSON.stringify(want);
  if (ok) { pass++; console.log('PASS ' + name); }
  else { fail++; console.error('FAIL ' + name + '\n  期望 ' + JSON.stringify(want) + '\n  实际 ' + JSON.stringify(got)); }
}

/* ---------- 卡片 ---------- */
const c0 = SRS.scheduleCard(null, 0, NOW);
eq('卡片 首次答不会：间隔 1 天', c0.interval, 1);
eq('卡片 首次答不会：次日到期', c0.dueAt, NOW + DAY);
eq('卡片 首次答不会：lapses=1', c0.lapses, 1);
eq('卡片 首次答不会：reps=1', c0.reps, 1);

const cM = SRS.scheduleCard(null, 2, NOW);
eq('卡片 首次掌握：7 天', cM.interval, 7);

const cM2 = SRS.scheduleCard(cM, 2, NOW + 7 * DAY);
eq('卡片 连续掌握第二次：14 天', cM2.interval, 14);
const cM3 = SRS.scheduleCard(cM2, 2, NOW);
eq('卡片 连续掌握第三次：30 天', cM3.interval, 30);
const cM4 = SRS.scheduleCard(cM3, 2, NOW);
eq('卡片 连续掌握第四次：60 天', cM4.interval, 60);
const cM5 = SRS.scheduleCard(cM4, 2, NOW);
eq('卡片 连续掌握封顶：60 天', cM5.interval, 60);

const cBack = SRS.scheduleCard(cM2, 1, NOW);
eq('卡片 掌握后降为模糊：3 天', cBack.interval, 3);
const cLapse = SRS.scheduleCard(cM3, 0, NOW);
eq('卡片 掌握后降为不会：1 天', cLapse.interval, 1);
eq('卡片 降级累计 lapses', cLapse.lapses, 1);
const cBackUp = SRS.scheduleCard(cBack, 2, NOW);
eq('卡片 降级后重新掌握：回到 7 天', cBackUp.interval, 7);

/* ---------- 题目 ---------- */
const qWrong = SRS.scheduleQuiz(null, false, NOW);
eq('题目 首次答错：streak=0', qWrong.streak, 0);
eq('题目 首次答错：未毕业', qWrong.graduated, false);
eq('题目 首次答错：当天到期', qWrong.dueAt, NOW);

const qRight1 = SRS.scheduleQuiz(qWrong, true, NOW);
eq('题目 错后答对 1 次：streak=1', qRight1.streak, 1);
eq('题目 错后答对 1 次：未毕业', qRight1.graduated, false);
eq('题目 错后答对 1 次：间隔 3 天（沿用旧节奏）', qRight1.interval, 3);

const qRight2 = SRS.scheduleQuiz(qRight1, true, NOW + DAY);
eq('题目 连对 2 次：streak=2', qRight2.streak, 2);
eq('题目 连对 2 次：已毕业', qRight2.graduated, true);
eq('题目 连对 2 次：间隔 7 天', qRight2.interval, 7);

const qBroken = SRS.scheduleQuiz(qRight2, false, NOW + 4 * DAY);
eq('题目 毕业后再答错：streak 归零', qBroken.streak, 0);
eq('题目 毕业后再答错：退出毕业', qBroken.graduated, false);
eq('题目 毕业后再答错：回到当天复习', qBroken.dueAt, NOW + 4 * DAY);

const ladder = [];
let acc = null;
for (let i = 0; i < 5; i++) {
  acc = SRS.scheduleQuiz(acc, true, NOW);
  ladder.push(acc.interval);
}
eq('题目 连对间隔序列 1/3/7/30/60', ladder, [1, 3, 7, 30, 60]);
const cap = SRS.scheduleQuiz(acc, true, NOW);
eq('题目 间隔 60 天封顶', cap.interval, 60);

const qFirstRight = SRS.scheduleQuiz(null, true, NOW);
eq('题目 首次答对：streak=1、不毕业', [qFirstRight.streak, qFirstRight.graduated], [1, false]);

/* ---------- 边界 ---------- */
const zeroPrev = SRS.scheduleCard({ mark: 2, interval: 0 }, 2, NOW);
eq('卡片 记录间隔为 0 时从 7 天起跳', zeroPrev.interval, 7);
eq('卡片 未传 now 时使用当前时间（dueAt 未来）', SRS.scheduleCard(null, 1).dueAt > Date.now(), true);

console.log('\n' + pass + ' passed, ' + fail + ' failed');
process.exit(fail ? 1 : 0);
