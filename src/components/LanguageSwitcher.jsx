import { useTranslation } from 'react-i18next';

const languages = [
  { code: 'en', label: 'EN' },
  { code: 'tr', label: 'TR' },
  { code: 'de', label: 'DE' },
];

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const change = (code) => {
    i18n.changeLanguage(code);
    localStorage.setItem('lang', code);
  };

  return (
    <div className="lang-switcher">
      {languages.map(({ code, label }) => (
        <button
          key={code}
          className={`lang-btn${i18n.language === code ? ' active' : ''}`}
          onClick={() => change(code)}
        >
          {label}
        </button>
      ))}
    </div>
  );
}

export default LanguageSwitcher;
