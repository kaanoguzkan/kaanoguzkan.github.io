import { test, expect } from '@playwright/test';

const SLUGS = ['osguide', 'artifactum', 'nutriapp'];
const SECTIONS = ['about', 'experience', 'academics', 'projects', 'skills', 'volunteering', 'contact'];

// Keep tests deterministic and offline: stub every third-party request (GitHub API,
// ORCID, contribution chart) so failures mean *our* code broke.
test.beforeEach(async ({ page, baseURL }) => {
  await page.route('**/*', (route) => {
    const request = route.request();
    if (request.url().startsWith(baseURL)) return route.continue();
    if (request.resourceType() === 'image') {
      return route.fulfill({ contentType: 'image/svg+xml', body: '<svg xmlns="http://www.w3.org/2000/svg"/>' });
    }
    return route.fulfill({
      contentType: 'application/json',
      headers: { 'access-control-allow-origin': '*' },
      body: '[]',
    });
  });
});

// Fails the test on uncaught errors and on real console errors (React, CSP violations…).
function watchErrors(page) {
  const errors = [];
  page.on('pageerror', (e) => errors.push(`pageerror: ${e.message}`));
  page.on('console', (m) => {
    if (m.type() === 'error' && !/Failed to load resource/.test(m.text())) errors.push(`console: ${m.text()}`);
  });
  return errors;
}

async function setLang(page, lang) {
  await page.addInitScript((l) => localStorage.setItem('lang', l), lang);
}

test('home renders every section and the Now strip', async ({ page }) => {
  const errors = watchErrors(page);
  await page.goto('/');
  await expect(page.locator('h1').first()).toContainText('clean, scalable');
  await expect(page.locator('.now-item')).toHaveCount(4);
  for (const id of SECTIONS) await expect(page.locator(`section#${id}`)).toBeAttached();
  await expect(page.locator('.exp-org').first()).toContainText('JotForm');
  expect(errors).toEqual([]);
});

for (const [lang, word] of [['tr', 'Deneyim'], ['de', 'Erfahrung']]) {
  test(`home is translated (${lang})`, async ({ page }) => {
    const errors = watchErrors(page);
    await setLang(page, lang);
    await page.goto('/');
    await expect(page.locator('html')).toHaveAttribute('lang', lang);
    await expect(page.locator('#experience .block-title')).toHaveText(word);
    expect(errors).toEqual([]);
  });
}

for (const slug of SLUGS) {
  test(`case study ${slug} renders with its own title`, async ({ page }) => {
    const errors = watchErrors(page);
    await page.goto(`/projects/${slug}/`);
    await expect(page.locator('h1.cs-title')).toBeVisible();
    await expect(page.locator('.cs-step')).not.toHaveCount(0);
    await expect(page).toHaveTitle(/Case study \| S\. Kaan Oguzkan/);
    expect(errors).toEqual([]);
  });
}

test('unknown case study shows a not-found message', async ({ page }) => {
  await page.goto('/projects/does-not-exist');
  await expect(page.locator('.cs-notfound')).toBeVisible();
});

test('resume page renders and links the PDF for the active language', async ({ page }) => {
  const errors = watchErrors(page);
  await setLang(page, 'de');
  await page.goto('/resume/');
  await expect(page.locator('h1')).toHaveText('S. Kaan Oğuzkan');
  await expect(page.locator('.rp-h').first()).toHaveText('Ausbildung');
  await expect(page.locator('a[download]')).toHaveAttribute('href', '/assets/resume-de.pdf');
  expect(errors).toEqual([]);
});

for (const lang of ['en', 'tr', 'de']) {
  test(`resume PDF exists (${lang})`, async ({ request }) => {
    const res = await request.get(`/assets/resume-${lang}.pdf`);
    expect(res.status()).toBe(200);
    expect(res.headers()['content-type']).toContain('pdf');
  });
}

test('command palette: Ctrl+K, filter, Enter navigates to a case study', async ({ page }) => {
  const errors = watchErrors(page);
  await page.goto('/');
  await page.waitForLoadState('networkidle'); // the palette is a lazy chunk
  await page.keyboard.press('Control+k');
  const input = page.getByRole('combobox');
  await expect(input).toBeFocused();
  await input.fill('nutri');
  await expect(page.getByRole('option')).toHaveCount(1);
  await page.keyboard.press('Enter');
  await expect(page).toHaveURL(/\/projects\/nutriapp$/);
  await expect(page.locator('h1.cs-title')).toContainText('NutriApp');
  expect(errors).toEqual([]);
});

test('command palette closes on Escape and restores focus', async ({ page }) => {
  await page.goto('/');
  const trigger = page.getByRole('button', { name: 'Open command palette' });
  await trigger.focus();
  await trigger.press('Enter');
  await expect(page.getByRole('dialog')).toBeVisible();
  await page.keyboard.press('Escape');
  await expect(page.getByRole('dialog')).toHaveCount(0);
  await expect(trigger).toBeFocused();
});

test('palette can jump to a home section from another route', async ({ page }) => {
  await page.goto('/resume/');
  await page.waitForLoadState('networkidle');
  await page.keyboard.press('Control+k');
  await page.getByRole('combobox').fill('contact');
  await page.keyboard.press('Enter');
  await expect(page).toHaveURL(/\/#contact$/);
  await expect(page.locator('#contact')).toBeInViewport();
});

test('theme toggle switches the data-theme attribute', async ({ page }) => {
  await page.goto('/');
  const before = await page.locator('html').getAttribute('data-theme');
  await page.getByRole('button', { name: /Switch to (dark|light) theme/ }).click();
  await expect(page.locator('html')).not.toHaveAttribute('data-theme', before);
});

test('blog is disabled and telemetry is gone', async ({ page, request }) => {
  const home = await (await request.get('/')).text();
  expect(home).not.toContain('umami');
  expect((await request.get('/umami.js')).headers()['content-type'] ?? '').not.toContain('javascript');
  await page.goto('/blog');
  await expect(page.locator('.blog-list, .blog-post')).toHaveCount(0);
});

test.describe('static route pages (what crawlers see)', () => {
  for (const slug of SLUGS) {
    test(`/projects/${slug}/ has its own meta`, async ({ request }) => {
      const html = await (await request.get(`/projects/${slug}/`)).text();
      expect(html).toMatch(/<title>[^<]+ — Case study \| S\. Kaan Oguzkan<\/title>/);
      expect(html).toContain(`<link rel="canonical" href="https://kaanoguzkan.com/projects/${slug}/"`);
      expect(html).toContain(`<meta property="og:url" content="https://kaanoguzkan.com/projects/${slug}/"`);
    });
  }

  test('sitemap lists every case study and the resume', async ({ request }) => {
    const xml = await (await request.get('/sitemap.xml')).text();
    for (const slug of SLUGS) expect(xml).toContain(`https://kaanoguzkan.com/projects/${slug}/`);
    expect(xml).toContain('https://kaanoguzkan.com/resume/');
  });
});

test.describe('mobile layout', () => {
  test.use({ viewport: { width: 390, height: 844 } });
  for (const path of ['/', '/projects/osguide/', '/resume/']) {
    test(`no horizontal overflow on ${path}`, async ({ page }) => {
      await page.goto(path);
      await page.locator('h1').first().waitFor();
      await page.waitForTimeout(800); // lazy sections
      const overflow = await page.evaluate(
        () => document.documentElement.scrollWidth > document.documentElement.clientWidth
      );
      expect(overflow).toBe(false);
    });
  }
});
