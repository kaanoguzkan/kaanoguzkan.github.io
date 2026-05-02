import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useScrollFadeIn } from '../hooks/useScrollFadeIn';

const GITHUB_USERNAME = 'kaanoguzkan';
const PINNED_API = `https://pinned.berrysauce.dev/get/${GITHUB_USERNAME}`;
const PINNED_CACHE_KEY = 'pinned_repos_cache';
const PINNED_CACHE_TTL = 60 * 60 * 1000;

function GitHubActivity() {
  const { t } = useTranslation();
  const ref = useScrollFadeIn();
  const [chartError, setChartError] = useState(false);
  const [pinned, setPinned] = useState([]);
  const [pinnedLoading, setPinnedLoading] = useState(true);
  const [pinnedError, setPinnedError] = useState(false);

  useEffect(() => {
    let cancelled = false;

    const load = async () => {
      try {
        const cached = sessionStorage.getItem(PINNED_CACHE_KEY);
        if (cached) {
          const { data, timestamp } = JSON.parse(cached);
          if (Date.now() - timestamp < PINNED_CACHE_TTL) {
            if (!cancelled) {
              setPinned(data);
              setPinnedLoading(false);
            }
            return;
          }
        }

        const res = await fetch(PINNED_API);
        if (!res.ok) throw new Error('Failed to fetch pinned repos');
        const data = await res.json();

        if (!cancelled) {
          setPinned(Array.isArray(data) ? data : []);
          setPinnedLoading(false);
          sessionStorage.setItem(
            PINNED_CACHE_KEY,
            JSON.stringify({ data, timestamp: Date.now() })
          );
        }
      } catch {
        if (!cancelled) {
          setPinnedError(true);
          setPinnedLoading(false);
        }
      }
    };

    load();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section id="github" className="fade-in" ref={ref}>
      <div className="container">
        <h2 className="section-title">{t('github.title')}</h2>

        <div className="github-chart-wrapper glass-card">
          <h3>{t('github.contributions')}</h3>
          {chartError ? (
            <p className="muted">{t('github.chartError')}</p>
          ) : (
            <img
              src={`https://ghchart.rshah.org/${GITHUB_USERNAME}`}
              alt="GitHub contribution graph"
              className="github-chart"
              width="800"
              height="112"
              loading="lazy"
              onError={() => setChartError(true)}
            />
          )}
        </div>

        <div className="pinned-repos">
          <h3 className="pinned-repos-title">{t('github.pinnedTitle')}</h3>
          {pinnedLoading && (
            <p className="muted">{t('github.pinnedLoading')}</p>
          )}
          {!pinnedLoading && pinnedError && (
            <p className="muted">{t('github.pinnedError')}</p>
          )}
          {!pinnedLoading && !pinnedError && pinned.length === 0 && (
            <p className="muted">{t('github.pinnedEmpty')}</p>
          )}
          {!pinnedLoading && !pinnedError && pinned.length > 0 && (
            <div className="pinned-grid">
              {pinned.map((repo) => (
                <a
                  key={repo.name}
                  href={`https://github.com/${repo.author}/${repo.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pinned-card glass-card"
                  aria-label={`${repo.name} on GitHub`}
                >
                  <div className="pinned-card-header">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="18"
                      height="18"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.9 1.3 1.9 1.3 1.1 1.9 2.9 1.3 3.6 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.3.5-2.4 1.3-3.2-.1-.4-.6-1.6.1-3.3 0 0 1-.3 3.4 1.2a11.5 11.5 0 0 1 6 0c2.4-1.5 3.4-1.2 3.4-1.2.7 1.7.2 2.9.1 3.3.8.8 1.3 1.9 1.3 3.2 0 4.7-2.8 5.7-5.5 6 .4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .3" />
                    </svg>
                    <span className="pinned-card-name">{repo.name}</span>
                  </div>
                  {repo.description && (
                    <p className="pinned-card-desc">{repo.description}</p>
                  )}
                  <div className="pinned-card-meta">
                    {repo.language && (
                      <span className="pinned-card-lang">
                        <span
                          className="pinned-lang-dot"
                          style={{ background: repo.languageColor || 'var(--muted)' }}
                          aria-hidden="true"
                        />
                        {repo.language}
                      </span>
                    )}
                    {typeof repo.stars === 'number' && repo.stars > 0 && (
                      <span className="pinned-card-stat" aria-label={`${repo.stars} stars`}>
                        ★ {repo.stars}
                      </span>
                    )}
                    {typeof repo.forks === 'number' && repo.forks > 0 && (
                      <span className="pinned-card-stat" aria-label={`${repo.forks} forks`}>
                        ⑂ {repo.forks}
                      </span>
                    )}
                  </div>
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default GitHubActivity;
