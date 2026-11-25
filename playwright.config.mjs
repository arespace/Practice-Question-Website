import { defineConfig } from '@playwright/test';

// 回归测试跑在 build/site（即真正要发布的产物）上，用系统 Edge，无需下载浏览器。
export default defineConfig({
  testDir: './tests',
  timeout: 45000,
  fullyParallel: false,
  workers: 1,
  reporter: [['list']],
  use: {
    baseURL: 'http://127.0.0.1:8126',
    channel: 'msedge',
    headless: true,
    viewport: { width: 1200, height: 900 }
  },
  webServer: {
    command: 'node tools/serve.js 8126 build/site',
    url: 'http://127.0.0.1:8126/index.html',
    reuseExistingServer: false,
    timeout: 30000
  }
});
