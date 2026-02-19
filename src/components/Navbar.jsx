import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useScrolledNav } from '../hooks/useScrolledNav';
import { useResume } from '../context/ResumeContext';
import LanguageSwitcher from './LanguageSwitcher';

function Navbar() {
  const { t } = useTranslation();
  const scrolled = useScrolledNav();
  const { open } = useResume();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: '-80px 0px 0px 0px' }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const navItems = ['about', 'experience', 'projects', 'skills', 'volunteering', 'contact'];

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <nav id="navbar" className={scrolled ? 'scrolled' : ''}>
      <div className="nav-container">
        <a href="#hero" className="nav-logo">Kaan Oguzkan</a>
        <button
          className={`hamburger${menuOpen ? ' active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul className={`nav-links${menuOpen ? ' open' : ''}`}>
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                className={activeSection === item ? 'active' : ''}
                onClick={handleLinkClick}
              >
                {t(`nav.${item}`)}
              </a>
            </li>
          ))}
          <li>
            <button className="nav-resume-btn" onClick={() => { open(); handleLinkClick(); }}>
              {t('nav.resume')}
            </button>
          </li>
          <li><LanguageSwitcher /></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
