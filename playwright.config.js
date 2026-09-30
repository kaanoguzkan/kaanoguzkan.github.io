import { defineConfig } from '@playwright/test';

// Smoke tests run against the production build served by `vite preview`.
// They use the system Google Chrome (preinstalled on GitHub's ubuntu runners), so CI
// doesn't download a browser and spends almost no extra Actions minutes.
export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  reporter: process.env.CI ? 'github' : 'list',
  use: {
    baseURL: 'http://localhost:4173',
    channel: 'chrome',
  },
  webServer: {
    command: 'npm run preview -- --port 4173 --strictPort',
    url: 'http://localhost:4173',
    reuseExistingServer: !process.env.CI,
  },
});
