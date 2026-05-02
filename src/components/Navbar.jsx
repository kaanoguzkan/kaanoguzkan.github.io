import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import { useScrollProgress } from '../hooks/useScrollProgress';
import { useResume } from '../context/ResumeContext';
import { useTheme } from '../context/ThemeContext';
import LanguageSwitcher from './LanguageSwitcher';

const SunIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
  </svg>
);

const MoonIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
  </svg>
);

function Navbar() {
  const { t } = useTranslation();
  const location = useLocation();
  const isHome = location.pathname === '/';
  const progress = useScrollProgress();
  const { open } = useResume();
  const { theme, toggle } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    if (!isHome) return;
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.3, rootMargin: '-80px 0px 0px 0px' }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [isHome]);

  const navItems = [
    { id: 'about', key: 'about' },
    { id: 'experience', key: 'work' },
    { id: 'projects', key: 'projects' },
    { id: 'skills', key: 'skills' },
    { id: 'github', key: 'github' },
    { id: 'volunteering', key: 'community' },
  ];

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <>
      <div
        className="scroll-progress"
        style={{ transform: `scaleX(${progress})` }}
        role="progressbar"
        aria-valuenow={Math.round(progress * 100)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Page scroll progress"
      />
      <div className="topbar">
        <div className="shell topbar-inner">
          <Link to="/" className="brand" onClick={handleLinkClick}>
            <span className="brand-dot" />
            <span>S. Kaan Oguzkan</span>
          </Link>

          <button
            className={`hamburger${menuOpen ? ' active' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
          >
            <span></span><span></span><span></span>
          </button>

          <nav className={`topnav${menuOpen ? ' open' : ''}`}>
            {isHome ? (
              navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`topnav-link${activeSection === item.id ? ' is-active' : ''}`}
                  onClick={handleLinkClick}
                >
                  {t(`nav.${item.key}`)}
                </a>
              ))
            ) : (
              <Link to="/" className="topnav-link" onClick={handleLinkClick}>
                {t('nav.home')}
              </Link>
            )}
            <div className="topnav-tools">
              <LanguageSwitcher />
              <button
                className="topnav-icon-btn"
                onClick={toggle}
                aria-label={theme === 'ink' ? 'Switch to light theme' : 'Switch to dark theme'}
              >
                {theme === 'ink' ? <SunIcon /> : <MoonIcon />}
              </button>
              <button
                className="topnav-link topnav-link--btn"
                onClick={() => { open(); handleLinkClick(); }}
              >
                {t('nav.resume')}
              </button>
              {isHome ? (
                <a href="#contact" className="cta-mini" onClick={handleLinkClick}>
                  {t('nav.getInTouch')} ↗
                </a>
              ) : (
                <Link to="/#contact" className="cta-mini" onClick={handleLinkClick}>
                  {t('nav.getInTouch')} ↗
                </Link>
              )}
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Navbar;
