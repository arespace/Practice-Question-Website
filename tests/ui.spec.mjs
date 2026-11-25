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
