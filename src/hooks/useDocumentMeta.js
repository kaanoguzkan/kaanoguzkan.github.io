import { useEffect } from 'react';

const SITE = 'https://kaanoguzkan.com';

// Sets title/description/social tags for the current route and restores the
// previous values on unmount. Crawlers that don't run JS get the same tags from
// the static route pages emitted at build time (see vite.config.js).
export function useDocumentMeta({ title, description, path }) {
  useEffect(() => {
    if (!title) return;
    const url = `${SITE}${path}`;
    const targets = [
      ['meta[name="description"]', 'content', description],
      ['meta[property="og:title"]', 'content', title],
      ['meta[property="og:description"]', 'content', description],
      ['meta[property="og:url"]', 'content', url],
      ['meta[name="twitter:title"]', 'content', title],
      ['meta[name="twitter:description"]', 'content', description],
      ['link[rel="canonical"]', 'href', url],
    ];
    const previousTitle = document.title;
    const previous = [];
    for (const [selector, attr, value] of targets) {
      const el = document.head.querySelector(selector);
      if (!el || value == null) continue;
      previous.push([el, attr, el.getAttribute(attr)]);
      el.setAttribute(attr, value);
    }
    document.title = title;
    return () => {
      document.title = previousTitle;
      for (const [el, attr, value] of previous) el.setAttribute(attr, value);
    };
  }, [title, description, path]);
}
