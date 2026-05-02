import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useScrollFadeIn } from '../hooks/useScrollFadeIn';

const GITHUB_USERNAME = 'kaanoguzkan';

function GitHubActivity() {
  const { t } = useTranslation();
  const ref = useScrollFadeIn();
  const [chartError, setChartError] = useState(false);

  // Chart is always rendered on a light paper-card background, so use the
  // dark ink hex in both themes for proper contrast.
  const chartHex = '161513';

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
      </div>
    </section>
  );
}

export default GitHubActivity;
