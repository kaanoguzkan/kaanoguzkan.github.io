import { useTranslation } from 'react-i18next';

function Hero() {
  const { t } = useTranslation();

  return (
    <section id="hero">
      <div className="hero-content">
        <h1>{t('hero.name')}</h1>
        <p className="hero-subtitle">{t('hero.subtitle')}</p>
        <p className="hero-tagline">{t('hero.tagline')}</p>
        <a href="#projects" className="btn">{t('hero.cta')}</a>
      </div>
    </section>
  );
}

export default Hero;
