/**
 * 间隔重复调度（纯函数，不碰 DOM、不碰存储）。
 * 两个页面共用：速背卡自评、检测题作答。
 *
 * 卡片间隔（依据：与检测题现有 1/3/7/30/60 节奏对齐；0/1 用来高频回炉，2 逐级拉长）
 *   不会   mark=0 → 1 天
 *   模糊   mark=1 → 3 天
 *   掌握   mark=2 → 7 天；连续掌握再答对则 7 → 14 → 30 → 60 天封顶
 *   任何一次降级（0 或 1）都会把下一次拉回 1/3 天，并从 7 天重新起跳
 *
 * 题目间隔（沿用改造前的 1/3/7/30/60，不改动既有节奏）
 *   答对：interval 0→1、1→3、3→7、7→30、其余→60 天
 *   答错：当天到期（dueAt = now），间隔归 1
 *
 * 毕业规则（B 方案新增）
 *   连续答对 2 次才移出错题本（graduated=true）；
 *   答错一次 streak 归 0、graduated 归 false；手动“标记已掌握”直接毕业。
 */
(function (root) {
  'use strict';

  const DAY = 86400000;
  const CARD_LADDER = [7, 14, 30, 60];
  const GRADUATE_STREAK = 2;

  function num(v, dft) {
    return typeof v === 'number' && isFinite(v) ? v : dft;
  }

  /** 卡片下一次间隔（天） */
  function nextCardInterval(prev, mark) {
    if (mark <= 0) return 1;
    if (mark === 1) return 3;
    // mark === 2：只有上一次也是“掌握”才升级，否则从 7 天起跳
    if (!prev || prev.mark !== 2) return CARD_LADDER[0];
    const i = CARD_LADDER.indexOf(num(prev.interval, 0));
    return CARD_LADDER[Math.min(CARD_LADDER.length - 1, Math.max(0, i + 1))];
  }

  /** 生成卡片新记录：{mark,ts,interval,dueAt,reps,lapses} */
  function scheduleCard(prev, mark, now) {
    const p = prev && typeof prev === 'object' ? prev : null;
    const t = num(now, Date.now());
    const interval = nextCardInterval(p, mark);
    return {
      mark: num(mark, 0),
      ts: t,
      interval: interval,
      dueAt: t + interval * DAY,
      reps: num(p && p.reps, 0) + 1,
      lapses: num(p && p.lapses, 0) + (mark === 0 ? 1 : 0)
    };
  }

  /** 题目下一次间隔（天），沿用旧节奏 */
  function nextQuizInterval(prevInterval) {
    const p = num(prevInterval, 0);
    return p <= 0 ? 1 : p <= 1 ? 3 : p <= 3 ? 7 : p <= 7 ? 30 : 60;
  }

  /** 生成题目新记录：在旧字段上补 streak / graduated */
  function scheduleQuiz(prev, ok, now) {
    const p = Object.assign(
      { r: 0, w: 0, last: null, ans: '', ts: 0, interval: 0, dueAt: 0, streak: 0, graduated: false },
      prev && typeof prev === 'object' ? prev : {}
    );
    const t = num(now, Date.now());
    const r = Object.assign({}, p);
    if (ok) {
      r.r = num(p.r, 0) + 1;
      // 连续答对计数：上一次也是答对才累加
      r.streak = (p.last === 'right' ? num(p.streak, 1) : 0) + 1;
      r.graduated = r.streak >= GRADUATE_STREAK || !!p.graduated;
      r.interval = nextQuizInterval(p.interval);
      r.dueAt = t + r.interval * DAY;
    } else {
      r.w = num(p.w, 0) + 1;
      r.streak = 0;
      r.graduated = false;
      r.interval = 1;
      r.dueAt = t;
    }
    r.last = ok ? 'right' : 'wrong';
    r.ts = t;
    return r;
  }

  const api = {
    DAY: DAY,
    GRADUATE_STREAK: GRADUATE_STREAK,
    CARD_LADDER: CARD_LADDER.slice(),
    nextCardInterval: nextCardInterval,
    scheduleCard: scheduleCard,
    nextQuizInterval: nextQuizInterval,
    scheduleQuiz: scheduleQuiz
  };

  root.SRS = api;
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
})(typeof window !== 'undefined' ? window : globalThis);
