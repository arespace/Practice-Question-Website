import { test, expect } from '@playwright/test';
import fs from 'node:fs';

const LONG = '// ' + 'LongIdentifierWithoutSpaces'.repeat(8) + ' tail comment';
const DRAFT = 'int main() {\n' + LONG + '\n    return 0;\n}';

function watchConsole(page) {
  const errs = [];
  page.on('pageerror', e => errs.push('pageerror: ' + e.message));
  page.on('console', m => { if (m.type() === 'error') errs.push(m.text()); });
  return errs;
}

test('三页加载：导航三项、内容计数、无 JS 报错', async ({ page }) => {
  const errs = watchConsole(page);
  for (const p of ['/index.html', '/quiz.html', '/deep.html']) {
    await page.goto(p);
    await page.waitForLoadState('networkidle');
  }

  await page.goto('/index.html');
  const nav = (await page.locator('.page-switch a').allTextContents()).map(s => s.trim());
  expect(nav).toEqual(expect.arrayContaining(['速背卡', '深读', '检测题']));
  await expect(page.locator('#deckPos')).toContainText('/ 135');

  await page.goto('/quiz.html');
  await expect(page.locator('#progressText')).toContainText('/ 366');

  expect(errs).toEqual([]);
});

test('速背卡：揭晓答案后可见，自评后进入下一张', async ({ page }) => {
  await page.goto('/index.html');
  await expect(page.locator('#revealBtn')).toBeVisible();
  await page.locator('#revealBtn').click();
  await expect(page.locator('#answer')).toBeVisible();
  await expect(page.locator('#selfRate')).toBeVisible();

  await page.locator('#selfRate .rate[data-mark="1"]').click();
  await expect(page.locator('#answer')).toBeHidden();
  await expect(page.locator('#revealBtn')).toBeVisible();
});

test('检测题：选择选项后可判分并展示反馈', async ({ page }) => {
  await page.goto('/quiz.html');
  await expect(page.locator('#deckPos')).toContainText('/ 366');
  await page.evaluate(() => document.querySelector('#typeFilter .chip[data-type="single"]').click());
  await expect(page.locator('#deckPos')).toContainText('/ 44');

  await page.locator('.opt').first().click();
  await page.locator('#submitBtn').click();
  await expect(page.locator('#feedback')).toBeVisible();
  const fb = await page.locator('#feedback').innerText();
  expect(fb).toMatch(/正确|错误|答案/);
});

test('记忆：编程筛选下停在第 5 题，刷新后筛选与位置都还原', async ({ page }) => {
  await page.goto('/quiz.html');
  await expect(page.locator('#deckPos')).toContainText('/ 366');
  await page.evaluate(() => document.querySelector('#typeFilter .chip[data-type="code"]').click());
  await expect(page.locator('#deckPos')).toHaveText('1 / 209');

  for (let i = 2; i <= 5; i++) {
    await page.locator('#nextNav').click();
    await expect(page.locator('#deckPos')).toHaveText(`${i} / 209`);
  }
  await expect(page.locator('#deckPos')).toHaveText('5 / 209');
  const q = await page.locator('#qText').innerText();

  // 位置/筛选写盘有 120ms 防抖，等落盘后再刷新
  await expect.poll(() => page.evaluate(() =>
    JSON.parse(localStorage.getItem('quiz:v3') || '{}').dirs?.['ue-cpp']?.pos?.idx
  )).toBe(4);

  await page.reload();
  await expect(page.locator('#deckPos')).toHaveText('5 / 209');
  const q2 = await page.locator('#qText').innerText();
  await expect(q2.replace(/\s+/g, '')).toBe(q.replace(/\s+/g, ''));
  await expect(page.locator('#typeFilter .chip.active')).toHaveAttribute('data-type', 'code');
});

test('深读：单元 12 可打开，下一单元可跳转', async ({ page }) => {
  await page.goto('/deep.html?dir=ue-cpp&sec=cpp&unit=12');
  const h1 = page.locator('#deepArticle h1');
  await expect(h1).toBeVisible();
  const first = await h1.innerText();

  await page.locator('#nextUnit').click();
  await expect(page).toHaveURL(/unit=13/);
  await expect(h1).not.toHaveText(first);
});

for (const [w, stacked] of [[375, true], [1440, false]]) {  test.describe(`参考答案对比布局 ${w}px`, () => {
    test.use({
      viewport: { width: w, height: 900 },
      ...(w < 821 ? { isMobile: true, hasTouch: true, deviceScaleFactor: 3 } : {})
    });

    test(`无横向滚动、可完整阅读（${stacked ? '单栏堆叠' : '左右并排'}）`, async ({ page }) => {
      await page.goto('/quiz.html');
      await expect(page.locator('#deckPos')).toContainText('/ 366');
      await page.evaluate(() => document.querySelector('#typeFilter .chip[data-type="code"]').click());
      await page.evaluate(draft => {
        const ta = document.getElementById('codeInput');
        ta.value = draft;
        ta.dispatchEvent(new Event('input', { bubbles: true }));
        document.getElementById('submitBtn').click();
      }, DRAFT);

      await expect(page.locator('.code-diff')).toBeVisible();
      const m = await page.evaluate(() => {
        const cols = document.querySelector('.diff-cols');
        const pres = Array.from(document.querySelectorAll('.diff-col pre'));
        const dl = document.querySelector('.diff-col .dl');
        return {
          tracks: getComputedStyle(cols).gridTemplateColumns.split(' ').length,
          noScroll: pres.every(p => p.scrollWidth === p.clientWidth),
          wrap: dl ? getComputedStyle(dl).whiteSpace : '',
          overflow: document.documentElement.scrollWidth - innerWidth
        };
      });

      expect(m.noScroll).toBe(true);
      expect(m.wrap).toBe('pre-wrap');
      expect(m.overflow).toBe(0);
      expect(m.tracks).toBe(stacked ? 1 : 2);
    });
  });
}

/* ---------------- 今日队列 / 深读已读 / 导出 / 备份提醒 ---------------- */

function seedWrong(exportAt) {
  return {
    version: 3,
    theme: 'dark',
    dirs: {
      'ue-cpp': {
        quiz: { 'd1-025': { r: 0, w: 1, last: 'wrong', streak: 0, graduated: false, dueAt: Date.now() - 1000 } },
        exportAt: exportAt
      }
    }
  };
}

test('今日队列：到期错题、剩余量估算、薄弱单元可跳转', async ({ page }) => {
  await page.addInitScript(data => localStorage.setItem('quiz:v3', JSON.stringify(data)), seedWrong(0));
  await page.goto('/index.html');

  await expect(page.locator('#todayQueue')).toBeVisible();
  await expect(page.locator('#qWrongNum')).toHaveText('1');
  await expect(page.locator('#queueEst')).toContainText('约 2 分钟');
  await expect(page.locator('#queueEst')).toContainText('估算');
  await expect(page.locator('#queueWrong')).toHaveAttribute('href', /stat=due/);
  await expect(page.locator('#qWeakList a')).toHaveCount(1);
  await expect(page.locator('#qWeakList a').first()).toContainText('%');

  await page.locator('#qWeakList a').first().click();
  await expect(page).toHaveURL(/quiz\.html\?.*unit=/);
  await expect(page.locator('#deckPos')).toHaveText('1 / 3');

  // 窄屏不横向溢出
  await page.setViewportSize({ width: 375, height: 800 });
  await page.goto('/index.html');
  await expect(page.locator('#todayQueue')).toBeVisible();
  const overflow = await page.evaluate(() => document.documentElement.scrollWidth - innerWidth);
  expect(overflow).toBe(0);
});

test('深读：标记已读、章节进度、继续上次读到', async ({ page }) => {
  await page.goto('/deep.html?sec=cpp&unit=12');
  await expect(page.locator('#deepArticle h1')).toBeVisible();
  await page.locator('#deepReadBtn').click();
  await expect(page.locator('#deepReadBtn')).toHaveText('✓ 已读');

  const saved = await page.evaluate(() => JSON.parse(localStorage.getItem('quiz:v3')).dirs['ue-cpp'].read);
  expect(saved.ids.length).toBe(1);
  expect(saved.last).toBeTruthy();

  const cnt = await page.locator('.deep-ch.active .deep-ch-cnt').innerText();
  expect(cnt).toMatch(/1\/\d+/);

  await page.reload();
  await expect(page.locator('#deepReadBtn')).toHaveText('✓ 已读');
  await expect(page.locator('#deepResume')).toBeVisible();
  await expect(page.locator('#deepResume')).toContainText('继续上次');
  await page.locator('#deepResume').click();
  await expect(page.locator('#deepArticle h1')).toBeVisible();
});

test('导出复习包：Markdown 下载成功并记录导出时间', async ({ page }) => {
  await page.addInitScript(data => localStorage.setItem('quiz:v3', JSON.stringify(data)), seedWrong(0));
  await page.goto('/index.html');

  const dl = page.waitForEvent('download');
  await page.locator('#exportBtn').click();
  const download = await dl;
  expect(download.suggestedFilename()).toMatch(/^review-pack-.+\.md$/);

  const file = await download.path();
  const md = fs.readFileSync(file, 'utf8');
  expect(md).toContain('# 复习包');
  expect(md).toContain('## 错题（1）');
  expect(md).toContain('## 薄弱单元');

  const at = await page.evaluate(() => JSON.parse(localStorage.getItem('quiz:v3')).dirs['ue-cpp'].exportAt);
  expect(at).toBeGreaterThan(0);
});

test('备份提醒：超过 7 天未导出时轻提示且不打断', async ({ page }) => {
  await page.addInitScript(data => localStorage.setItem('quiz:v3', JSON.stringify(data)), seedWrong(Date.now() - 8 * 86400000));
  await page.goto('/index.html');

  await expect(page.locator('#backupHint')).toBeVisible();
  await expect(page.locator('#backupHint')).toContainText('8 天');
  await expect(page.locator('#backupHint')).toContainText('建议导出');
});

test('数据保险：整体覆盖前备份旧值，且只留最近一份', async ({ page }) => {
  // 旧值不是合法 v3（version=2），启动时会走迁移并整体重写 quiz:v3
  const oldRaw = JSON.stringify({ version: 2, theme: 'light', dirs: { 'ue-cpp': { cards: { 'cpp-01': { mark: 2, ts: 1 } } } } });
  const v2 = JSON.stringify({ version: 2, theme: 'dark', lastDir: 'ue-cpp', dirs: { 'ue-cpp': { cards: { 'cpp-01': { mark: 2, ts: 1 } }, quiz: {} } } });
  await page.addInitScript(({ a, b }) => {
    localStorage.setItem('quiz:v3', a);
    localStorage.setItem('quiz:v2', b);
  }, { a: oldRaw, b: v2 });

  await page.goto('/quiz.html');
  await page.waitForFunction(() => document.getElementById('qText').textContent.trim().length > 10);

  const st = await page.evaluate(() => ({
    backup: localStorage.getItem('quiz:v3:backup'),
    version: JSON.parse(localStorage.getItem('quiz:v3')).version,
    cards: Object.keys(JSON.parse(localStorage.getItem('quiz:v3')).dirs['ue-cpp'].cards),
    keys: Object.keys(localStorage).filter(k => k.indexOf('quiz:v3') === 0).sort()
  }));
  expect(st.backup).toBe(oldRaw);
  expect(st.version).toBe(3);
  expect(st.cards).toContain('cpp-01');
  expect(st.keys).toEqual(['quiz:v3', 'quiz:v3:backup']);

  // 正常增量写入（翻题写位置）不应改动备份
  await page.locator('#nextNav').click();
  await page.waitForTimeout(400);
  const after = await page.evaluate(() => localStorage.getItem('quiz:v3:backup'));
  expect(after).toBe(oldRaw);
});

test('错因归类：答错后可标记，错题本按错因筛选，统计展示分布', async ({ page }) => {
  await page.goto('/quiz.html');
  await expect(page.locator('#deckPos')).toContainText('/ 366');
  await page.evaluate(() => document.querySelector('#typeFilter .chip[data-type="code"]').click());
  await page.waitForFunction(() => !!document.getElementById('codeInput'));
  await page.evaluate(() => {
    const ta = document.getElementById('codeInput');
    ta.value = 'int main() { return 0; }';
    ta.dispatchEvent(new Event('input', { bubbles: true }));
    document.getElementById('submitBtn').click();
  });
  await page.locator('#selfGrade .sg-no').click();
  await expect(page.locator('#fbCause')).toBeVisible();
  await page.locator('#fbCause .cause-chip', { hasText: '概念不清' }).click();

  const rec = await page.evaluate(() => {
    const st = JSON.parse(localStorage.getItem('quiz:v3')).dirs['ue-cpp'].quiz;
    const id = Object.keys(st).find(k => st[k] && st[k].cause);
    return id ? { id, cause: st[id].cause } : null;
  });
  expect(rec && rec.cause).toBe('concept');

  await page.evaluate(() => document.querySelector('#topNav button[data-view="wrong"]').click());
  await expect(page.locator('#wrongCauseFilter .chip.active')).toContainText('全部错因');
  const causeChip = page.locator('#wrongCauseFilter .chip', { hasText: '概念不清' });
  await expect(causeChip).toBeVisible();
  await causeChip.click();
  await expect(page.locator('#wrongList .wrong-card')).toHaveCount(1);
  await expect(page.locator('#wrongList .cause-badge').first()).toHaveText('概念不清');

  await page.evaluate(() => document.querySelector('#topNav button[data-view="stats"]').click());
  await expect(page.locator('#statsBody')).toContainText('错因分布');
  await expect(page.locator('#statsBody')).toContainText('概念不清');
});

test('回炉：从错题卡进入单元回炉并记录次数', async ({ page }) => {
  await page.addInitScript(() => {
    const now = Date.now();
    localStorage.setItem('quiz:v3', JSON.stringify({ version: 3, theme: 'dark', dirs: { 'ue-cpp': {
      quiz: { 'd1-001': { r: 1, w: 1, last: 'right', streak: 1, graduated: false, ts: now } }
    } } }));
  });
  await page.goto('/quiz.html');
  await page.waitForFunction(() => document.getElementById('qText').textContent.trim().length > 10);
  await page.evaluate(() => document.querySelector('#topNav button[data-view="wrong"]').click());
  await expect(page.locator('#wrongList .retest-btn').first()).toBeVisible();
  await expect(page.locator('#wrongList .wrong-deep').first()).toHaveAttribute('href', /deep\.html\?dir=ue-cpp&sec=.*&unit=/);

  await page.locator('#wrongList .retest-btn').first().click();
  await expect(page.locator('#retestBar')).toBeVisible();
  await expect(page.locator('#retestText')).toContainText('单元回炉');
  const deckPos = await page.locator('#deckPos').innerText();
  expect(deckPos).not.toContain('/ 366');

  await page.locator('#retestFinish').click();
  await expect(page.locator('#retestSummary')).toBeVisible();
  await expect(page.locator('#retestSummary')).toContainText('次回炉');

  const rt = await page.evaluate(() => {
    const st = JSON.parse(localStorage.getItem('quiz:v3')).dirs['ue-cpp'].retest || {};
    const k = Object.keys(st)[0];
    return k ? st[k] : null;
  });
  expect(rt && rt.count).toBe(1);
  expect(typeof rt.total).toBe('number');
});

test('默写模式：必默写筛选、计时与交卷后结构检查定位到行', async ({ page }) => {
  await page.goto('/quiz.html');
  await page.evaluate(() => document.querySelector('#stateFilter .chip[data-state="mustwrite"]').click());
  await page.waitForFunction(() => document.getElementById('qText').textContent.trim().length > 10);
  expect(await page.locator('#deckPos').innerText()).not.toContain('/ 366');
  await expect(page.locator('#qMust')).toBeVisible();
  await expect(page.locator('#dictBar')).toBeVisible();

  await page.locator('#dictTimerBtn').click();
  await page.waitForTimeout(1200);
  expect(await page.locator('#dictClock').innerText()).not.toBe('00:00');

  const bad = ['struct S { virtual void f(); };', 'int main() { int* p = new int[3]; return 0; }'].join('\n');
  await page.evaluate(code => {
    const ta = document.getElementById('codeInput');
    ta.value = code;
    ta.dispatchEvent(new Event('input', { bubbles: true }));
    document.getElementById('submitBtn').click();
  }, bad);

  await expect(page.locator('.struct-check')).toBeVisible();
  await expect(page.locator('.struct-check')).toContainText('delete[]');
  const lines = await page.locator('.struct-check li b').allInnerTexts();
  expect(lines.join(' ')).toContain('第 2 行');
});

test('深读：仅打开页面不改写“继续上次读到”', async ({ page }) => {
  await page.addInitScript(() => {
    localStorage.setItem('quiz:v3', JSON.stringify({ version: 3, theme: 'dark', dirs: { 'ue-cpp': { read: { ids: ['unit-5'], last: 'unit-5' } } } }));
  });
  await page.goto('/deep.html');
  await page.waitForFunction(() => document.getElementById('deepArticle').textContent.trim().length > 200);
  const last = await page.evaluate(() => JSON.parse(localStorage.getItem('quiz:v3')).dirs['ue-cpp'].read.last);
  expect(last).toBe('unit-5');
  await expect(page.locator('#deepResume')).toContainText('继续上次');
});

test('旧数据兼容：缺少口述/高亮/笔记等新字段也能正常启动', async ({ page }) => {
  await page.addInitScript(() => {
    localStorage.setItem('quiz:v3', JSON.stringify({
      version: 3, theme: 'dark',
      dirs: { 'ue-cpp': { quiz: { 'd1-001': { r: 1, w: 0, last: 'right', streak: 1, graduated: false, ts: 1 } }, cardFav: [], quizFav: [] } }
    }));
  });
  await page.goto('/quiz.html');
  await expect(page.locator('#deckPos')).toContainText('/ 366');
  await expect(page.locator('#statDone')).toContainText('1');
  const st = await page.evaluate(() => {
    const d = JSON.parse(localStorage.getItem('quiz:v3'));
    return { version: d.version, hasNew: ['speech', 'retest', 'deepMarks', 'notes', 'algo'].map(k => typeof d.dirs['ue-cpp'][k]) };
  });
  expect(st.version).toBe(3);
  expect(st.hasNew.every(t => t === 'object' || t === 'undefined')).toBe(true);
});

test('算法练习：专题分组、掌握状态、默写对照与结构检查', async ({ page }) => {
  const errs = watchConsole(page);
  await page.goto('/algo.html');
  await expect(page.locator('.algo-group')).toHaveCount(9);
  await expect(page.locator('.algo-card')).toHaveCount(44);
  await expect(page.locator('#algoProgressText')).toHaveText('0 / 44');
  await expect(page.locator('.page-switch a')).toHaveCount(4);

  // 专题筛选
  await page.evaluate(() => document.querySelector('#algoTopics .cat-item[data-topic="hand"]').click());
  await expect(page.locator('.algo-card')).toHaveCount(7);
  await expect(page.locator('.algo-group h2').first()).toContainText('手撕 C++ 基础');
  await page.evaluate(() => document.querySelector('#algoTopics .cat-item[data-topic="all"]').click());

  // 必默写筛选
  await page.evaluate(() => document.querySelector('#mustFilter .chip[data-must="must"]').click());
  await expect(page.locator('.algo-card')).toHaveCount(11);

  // 掌握状态落盘并能在刷新后恢复
  const first = page.locator('.algo-card .ac-mark-btn[data-mark="ok"]').first();
  const id = await first.getAttribute('data-id');
  await first.click();
  await expect(page.locator('#algoDone')).toHaveText('1');
  await expect.poll(() => page.evaluate(i =>
    JSON.parse(localStorage.getItem('quiz:v3')).dirs['ue-cpp'].algo?.[i]?.mark, id)).toBe('ok');
  await page.reload();
  await expect(page.locator('#algoDone')).toHaveText('1');
  await page.evaluate(() => document.querySelector('#mustFilter .chip[data-must="all"]').click());

  // 默写：交卷后出现逐行对照与结构检查（命中项定位到行）
  await page.locator('.ac-practice').first().click();
  await expect(page.locator('#algoPractice')).toBeVisible();
  await expect(page.locator('#apInput')).toBeVisible();
  await page.evaluate(() => {
    const ta = document.getElementById('apInput');
    ta.value = ['struct S {', '  virtual void f();', '};', 'int main() {', '  int* p = new int[3];', '  return 0;', '}'].join('\n');
    ta.dispatchEvent(new Event('input', { bubbles: true }));
  });
  await page.locator('#apSubmit').click();
  await expect(page.locator('.code-diff')).toBeVisible();
  await expect(page.locator('.code-diff .diff-head')).toContainText('参考实现对照');
  const issues = await page.locator('.struct-check li').allInnerTexts();
  expect(issues.join(' ')).toMatch(/delete\[\]/);
  expect(issues.join(' ')).toContain('第 5 行');
  expect(errs).toEqual([]);
});

test('算法练习 375px：列表与默写页都不横向溢出', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 800 });
  await page.goto('/algo.html');
  await expect(page.locator('.algo-card').first()).toBeVisible();
  expect(await page.evaluate(() => document.documentElement.scrollWidth - innerWidth)).toBe(0);

  await page.locator('.ac-practice').first().click();
  await expect(page.locator('#apInput')).toBeVisible();
  expect(await page.evaluate(() => document.documentElement.scrollWidth - innerWidth)).toBe(0);

  await page.evaluate(() => {
    const ta = document.getElementById('apInput');
    ta.value = 'int main() { return 0; }';
    ta.dispatchEvent(new Event('input', { bubbles: true }));
  });
  await page.locator('#apSubmit').click();
  await expect(page.locator('.code-diff')).toBeVisible();
  expect(await page.evaluate(() => document.documentElement.scrollWidth - innerWidth)).toBe(0);
});
