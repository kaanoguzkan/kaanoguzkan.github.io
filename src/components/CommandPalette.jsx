import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useResume } from '../context/ResumeContext';
import { useTheme } from '../context/ThemeContext';
import { OPEN_PALETTE_EVENT, consumePendingOpen } from '../utils/palette';

const SECTIONS = [
  ['about', 'nav.about'],
  ['academics', 'nav.research'],
  ['experience', 'nav.experience'],
  ['projects', 'nav.projects'],
  ['github', 'nav.github'],
  ['skills', 'nav.skills'],
  ['volunteering', 'nav.community'],
  ['contact', 'nav.contact'],
];

const LANGS = ['en', 'tr', 'de'];

function CommandPalette() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const { open: openResume } = useResume();
  const { toggle: toggleTheme } = useTheme();

  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [active, setActive] = useState(0);
  const inputRef = useRef(null);
  const listRef = useRef(null);
  const previousFocusRef = useRef(null);

  const close = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    const show = () => {
      consumePendingOpen();
      previousFocusRef.current = document.activeElement;
      setQuery('');
      setActive(0);
      setIsOpen(true);
    };
    const onKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        show();
      }
    };
    document.addEventListener('keydown', onKey);
    window.addEventListener(OPEN_PALETTE_EVENT, show);
    if (consumePendingOpen()) show();
    return () => {
      document.removeEventListener('keydown', onKey);
      window.removeEventListener(OPEN_PALETTE_EVENT, show);
    };
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = 'hidden';
    inputRef.current?.focus();
    return () => {
      document.body.style.overflow = '';
      previousFocusRef.current?.focus?.({ preventScroll: true });
    };
  }, [isOpen]);

  const projects = t('projects.items', { returnObjects: true });

  const commands = useMemo(() => {
    const go = (hash) => () => navigate({ pathname: '/', hash });
    const external = (url) => () => window.open(url, '_blank', 'noopener,noreferrer');
    const list = [];

    SECTIONS.forEach(([id, key]) =>
      list.push({ id: `nav-${id}`, group: 'navigate', label: t(key), run: go(`#${id}`) })
    );

    if (Array.isArray(projects)) {
      projects
        .filter((p) => p.slug && p.online !== false)
        .forEach((p) =>
          list.push({
            id: `case-${p.slug}`,
            group: 'projects',
            label: `${p.name} · ${t('caseStudy.eyebrow')}`,
            keywords: `${p.label} ${p.tags.join(' ')}`,
            run: () => navigate(`/projects/${p.slug}`),
          })
        );
    }

    list.push(
      { id: 'act-home', group: 'actions', label: t('palette.actions.home'), run: () => navigate('/') },
      { id: 'act-theme', group: 'actions', label: t('palette.actions.theme'), keywords: 'dark light ink bone', run: toggleTheme },
      { id: 'act-resume-pdf', group: 'actions', label: t('palette.actions.resumePdf'), keywords: 'cv', run: openResume },
      { id: 'act-resume-page', group: 'actions', label: t('palette.actions.resumePage'), keywords: 'cv', run: () => navigate('/resume') }
    );
    LANGS.filter((code) => code !== i18n.language).forEach((code) =>
      list.push({
        id: `lang-${code}`,
        group: 'actions',
        label: t(`palette.actions.lang.${code}`),
        keywords: 'language dil sprache',
        run: () => {
          i18n.changeLanguage(code);
          localStorage.setItem('lang', code);
        },
      })
    );

    list.push(
      { id: 'link-github', group: 'links', label: t('palette.links.github'), run: external('https://github.com/kaanoguzkan') },
      { id: 'link-linkedin', group: 'links', label: t('palette.links.linkedin'), run: external('https://linkedin.com/in/kaan-oguzkan') },
      { id: 'link-email', group: 'links', label: t('palette.links.email'), run: () => { window.location.href = 'mailto:kaan.oguzkan@ug.bilkent.edu.tr'; } }
    );
    return list;
  }, [t, i18n, navigate, projects, toggleTheme, openResume]);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return commands;
    return commands
      .map((c) => {
        const label = c.label.toLowerCase();
        const hay = `${label} ${(c.keywords || '').toLowerCase()}`;
        if (!hay.includes(q)) return null;
        return { c, score: label.startsWith(q) ? 0 : label.includes(q) ? 1 : 2 };
      })
      .filter(Boolean)
      .sort((a, b) => a.score - b.score)
      .map((r) => r.c);
  }, [commands, query]);

  useEffect(() => {
    setActive(0);
  }, [query]);

  useEffect(() => {
    listRef.current?.querySelector('[aria-selected="true"]')?.scrollIntoView({ block: 'nearest' });
  }, [active, isOpen]);

  if (!isOpen) return null;

  const run = (command) => {
    close();
    // Let focus restoration finish before the command moves focus/scroll.
    setTimeout(command.run, 0);
  };

  const onKeyDown = (e) => {
    if (e.key === 'Escape') {
      e.preventDefault();
      close();
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (results.length) setActive((a) => (a + 1) % results.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (results.length) setActive((a) => (a - 1 + results.length) % results.length);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (results[active]) run(results[active]);
    } else if (e.key === 'Tab') {
      e.preventDefault(); // focus stays on the input; arrows move through results
    }
  };

  let lastGroup = null;

  return (
    <div className="palette-overlay" onMouseDown={close}>
      <div
        className="palette"
        role="dialog"
        aria-modal="true"
        aria-label={t('palette.searchLabel')}
        onMouseDown={(e) => e.stopPropagation()}
        onKeyDown={onKeyDown}
      >
        <input
          ref={inputRef}
          className="palette-input"
          type="text"
          role="combobox"
          aria-expanded="true"
          aria-controls="palette-list"
          aria-activedescendant={results[active] ? `palette-opt-${results[active].id}` : undefined}
          aria-autocomplete="list"
          autoComplete="off"
          spellCheck={false}
          placeholder={t('palette.placeholder')}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <ul id="palette-list" className="palette-list" role="listbox" ref={listRef} aria-label={t('palette.searchLabel')}>
          {results.length === 0 && <li className="palette-empty" role="presentation">{t('palette.empty')}</li>}
          {results.map((c, i) => {
            const heading = c.group !== lastGroup ? c.group : null;
            lastGroup = c.group;
            return (
              <li key={c.id} role="presentation">
                {heading && <div className="palette-group mono" aria-hidden="true">{t(`palette.groups.${heading}`)}</div>}
                <div
                  id={`palette-opt-${c.id}`}
                  role="option"
                  aria-selected={i === active}
                  className={`palette-item${i === active ? ' is-active' : ''}`}
                  onMouseMove={() => setActive(i)}
                  onClick={() => run(c)}
                >
                  {c.label}
                </div>
              </li>
            );
          })}
        </ul>
        <div className="palette-hint mono">{t('palette.hint')}</div>
      </div>
    </div>
  );
}

export default CommandPalette;
