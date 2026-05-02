import { useTranslation, Trans } from 'react-i18next';

function Hero() {
  const { t } = useTranslation();

  return (
    <header id="hero" className="hero shell">
      <div className="hero-grid">
        <div className="hero-main">
          <div className="mono hero-index">{t('hero.indexLabel')}</div>
          <h1 className="hero-headline">
            {t('hero.headline.line1')}<br />
            {t('hero.headline.line2')}<br />
            {t('hero.headline.line3')}<span className="hero-period">.</span>
          </h1>
          <p className="hero-meta-text">
            <Trans
              i18nKey="hero.metaText"
              components={{ strong: <strong /> }}
            />
          </p>
        </div>

        <div className="hero-side">
          <div className="photo-frame">
            <picture>
              <source srcSet="/assets/profile.avif" type="image/avif" />
              <source srcSet="/assets/profile.webp" type="image/webp" />
              <img src="/assets/profile.jpg" alt={t('hero.name')} loading="eager" />
            </picture>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Hero;
