import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useScrollFadeIn } from '../hooks/useScrollFadeIn';

const GITHUB_USERNAME = 'kaanoguzkan';

function GitHubActivity() {
  const { t } = useTranslation();
  const ref = useScrollFadeIn();
  const [chartError, setChartError] = useState(false);

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
      </div>
    </section>
  );
}

export default GitHubActivity;
