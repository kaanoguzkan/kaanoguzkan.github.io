import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import compression from 'vite-plugin-compression';
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const SITE = 'https://kaanoguzkan.com';

const esc = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');

// GitHub Pages serves static files only, so crawlers (LinkedIn, Slack, ...) never run the
// SPA. Emit dist/<route>/index.html with that route's own title/description/canonical so
// shared links preview correctly, and generate the sitemap from the same route list.
function staticRoutes() {
  let outDir = 'dist';
  return {
    name: 'static-route-pages',
    apply: 'build',
    configResolved(config) {
      outDir = config.build.outDir;
    },
    closeBundle() {
      const en = JSON.parse(readFileSync('src/i18n/en.json', 'utf-8'));
      const routes = [
        ...en.projects.items
          .filter((p) => p.slug && p.online !== false)
          .map((p) => ({
            path: `/projects/${p.slug}/`,
            title: `${p.name} — ${en.caseStudy.eyebrow} | S. Kaan Oguzkan`,
            description: p.description,
          })),
        {
          path: '/resume/',
          title: `${en.resumePage.title} | S. Kaan Oguzkan`,
          description: en.resumePage.subtitle,
        },
      ];

      const template = readFileSync(join(outDir, 'index.html'), 'utf-8');
      const swap = (html, pattern, replacement) => {
        if (!pattern.test(html)) throw new Error(`static-route-pages: pattern not found: ${pattern}`);
        return html.replace(pattern, replacement);
      };

      for (const route of routes) {
        const url = `${SITE}${route.path}`;
        const title = esc(route.title);
        const description = esc(route.description);
        let html = template;
        html = swap(html, /<title>[^<]*<\/title>/, `<title>${title}</title>`);
        html = swap(html, /(<meta name="description" content=")[^"]*"/, `$1${description}"`);
        html = swap(html, /(<meta property="og:title" content=")[^"]*"/, `$1${title}"`);
        html = swap(html, /(<meta property="og:description" content=")[^"]*"/, `$1${description}"`);
        html = swap(html, /(<meta property="og:url" content=")[^"]*"/, `$1${url}"`);
        html = swap(html, /(<meta name="twitter:title" content=")[^"]*"/, `$1${title}"`);
        html = swap(html, /(<meta name="twitter:description" content=")[^"]*"/, `$1${description}"`);
        html = swap(html, /(<link rel="canonical" href=")[^"]*"/, `$1${url}"`);
        html = html.replace(
          /(<link rel="alternate" hreflang="[^"]+" href=")https:\/\/kaanoguzkan\.com\/(\?lang=[a-z]+)?"/g,
          (_, head, lang = '') => `${head}${url}${lang}"`
        );
        const dir = join(outDir, route.path);
        mkdirSync(dir, { recursive: true });
        writeFileSync(join(dir, 'index.html'), html);
      }

      const today = new Date().toISOString().slice(0, 10);
      const entries = [
        { loc: `${SITE}/`, priority: '1.0' },
        ...routes.map((r) => ({ loc: `${SITE}${r.path}`, priority: '0.8' })),
      ];
      const sitemap =
        `<?xml version="1.0" encoding="UTF-8"?>\n` +
        `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
        entries
          .map(
            (e) =>
              `  <url>\n    <loc>${e.loc}</loc>\n    <lastmod>${today}</lastmod>\n` +
              `    <changefreq>monthly</changefreq>\n    <priority>${e.priority}</priority>\n  </url>\n`
          )
          .join('') +
        `</urlset>\n`;
      writeFileSync(join(outDir, 'sitemap.xml'), sitemap);
    },
  };
}

export default defineConfig({
  plugins: [
    react(),
    compression({ algorithm: 'gzip' }),
    compression({ algorithm: 'brotliCompress' }),
    staticRoutes(),
  ],
  base: '/',
});
