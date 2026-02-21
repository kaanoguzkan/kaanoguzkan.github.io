const REPO_OWNER = 'kaanoguzkan';
const REPO_NAME = 'kaanoguzkan.github.io';
const BLOG_LABEL = 'blog';
const CACHE_KEY = 'blog_posts_cache';
const CACHE_TTL = 5 * 60 * 1000; // 5 minutes

/**
 * Fetch blog posts from GitHub Issues.
 * Issues must have the "blog" label.
 * Language is determined by "lang:en", "lang:tr", "lang:de" labels.
 * All other labels (except "blog" and "lang:*") become tags.
 */
export async function fetchBlogPosts() {
  // Check sessionStorage cache
  const cached = sessionStorage.getItem(CACHE_KEY);
  if (cached) {
    const { posts, timestamp } = JSON.parse(cached);
    if (Date.now() - timestamp < CACHE_TTL) {
      return posts;
    }
  }

  const url = `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/issues?labels=${BLOG_LABEL}&state=open&per_page=100&sort=created&direction=desc`;

  const res = await fetch(url);
  if (!res.ok) {
    // If rate limited or error, return cached data if available
    if (cached) return JSON.parse(cached).posts;
    return [];
  }

  const issues = await res.json();

  const posts = issues.map((issue) => {
    const labels = issue.labels.map((l) => l.name);
    const langLabel = labels.find((l) => l.startsWith('lang:'));
    const lang = langLabel ? langLabel.replace('lang:', '') : 'en';
    const tags = labels.filter((l) => l !== BLOG_LABEL && !l.startsWith('lang:'));

    return {
      id: issue.number,
      slug: String(issue.number),
      title: issue.title,
      date: new Date(issue.created_at).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }),
      tags,
      summary: issue.body ? issue.body.slice(0, 200).replace(/[#*`>\[\]]/g, '').trim() + '...' : '',
      lang,
      content: issue.body || '',
    };
  });

  // Cache the results
  sessionStorage.setItem(CACHE_KEY, JSON.stringify({ posts, timestamp: Date.now() }));

  return posts;
}
