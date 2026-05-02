import { useTranslation } from 'react-i18next';

function Footer() {
  const { t, i18n } = useTranslation();

  const lastUpdated = new Date().toLocaleDateString(i18n.language || 'en', {
    month: 'long',
    year: 'numeric',
  });

  return (
    <footer className="site-footer shell">
      <div className="footer-colophon">
        <strong>{t('footer.copyright')}</strong>
        <br />
        {t('footer.lastUpdated')} · {lastUpdated}
      </div>
    </footer>
  );
}

export default Footer;
