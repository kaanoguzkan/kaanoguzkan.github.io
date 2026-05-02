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

  // Chart is rendered with a fixed dark hex; CSS handles theme inversion.
  const chartHex = '161513';

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
        if (!res.ok) throw new Error('pinned');
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
    <section id="github" className="block reveal" ref={ref}>
      <div className="shell">
        <div className="block-head">
          <div className="block-num">
            <span className="n">09</span> &nbsp;/ {t('nav.github')}
          </div>
          <h2 className="block-title">{t('github.title')}</h2>
        </div>

        <div className="gh-wrap">
          <div className="gh-label">{t('github.contributions')} · last 12 months</div>

          {chartError ? (
            <div className="gh-fallback">
              {t('github.chartError')}{' '}
              <a
                href={`https://github.com/${GITHUB_USERNAME}`}
                target="_blank"
                rel="noopener noreferrer"
                className="link-u"
              >
                View on GitHub →
              </a>
            </div>
          ) : (
            <a
              href={`https://github.com/${GITHUB_USERNAME}`}
              target="_blank"
              rel="noopener noreferrer"
              className="gh-chart"
              aria-label={`Open ${GITHUB_USERNAME}'s GitHub profile`}
            >
              <img
                key={chartHex}
                src={`https://ghchart.rshah.org/${chartHex}/${GITHUB_USERNAME}`}
                alt="GitHub contribution graph"
                width="800"
                height="112"
                loading="lazy"
                onError={() => setChartError(true)}
              />
            </a>
          )}

          <a
            href={`https://github.com/${GITHUB_USERNAME}`}
            target="_blank"
            rel="noopener noreferrer"
            className="gh-cta"
          >
            View full profile @{GITHUB_USERNAME} ↗
          </a>
        </div>

        <div className="gh-pinned">
          <div className="gh-label">{t('github.pinnedTitle')}</div>

          {pinnedLoading && (
            <p className="gh-pinned-empty">{t('github.pinnedLoading')}</p>
          )}
          {!pinnedLoading && pinnedError && (
            <p className="gh-pinned-empty">{t('github.pinnedError')}</p>
          )}
          {!pinnedLoading && !pinnedError && pinned.length === 0 && (
            <p className="gh-pinned-empty">{t('github.pinnedEmpty')}</p>
          )}
          {!pinnedLoading && !pinnedError && pinned.length > 0 && (
            <div className="gh-pinned-grid">
              {pinned.map((repo) => (
                <a
                  key={repo.name}
                  href={`https://github.com/${repo.author}/${repo.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gh-pinned-card"
                >
                  <div className="gh-pinned-name">{repo.name}</div>
                  {repo.description && (
                    <p className="gh-pinned-desc">{repo.description}</p>
                  )}
                  <div className="gh-pinned-meta">
                    {repo.language && (
                      <span className="gh-pinned-lang">
                        <span
                          className="gh-pinned-dot"
                          style={{ background: repo.languageColor || 'var(--ink-3)' }}
                          aria-hidden="true"
                        />
                        {repo.language}
                      </span>
                    )}
                    {typeof repo.stars === 'number' && repo.stars > 0 && (
                      <span className="gh-pinned-stat">★ {repo.stars}</span>
                    )}
                    {typeof repo.forks === 'number' && repo.forks > 0 && (
                      <span className="gh-pinned-stat">⑂ {repo.forks}</span>
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
