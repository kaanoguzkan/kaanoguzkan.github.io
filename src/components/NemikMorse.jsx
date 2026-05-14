import { useEffect, useMemo, useRef, useState } from 'react';
import manifesto from '../data/nemik-manifesto.txt?raw';

const MORSE = {
  A: '.-', B: '-...', C: '-.-.', D: '-..', E: '.', F: '..-.', G: '--.',
  H: '....', I: '..', J: '.---', K: '-.-', L: '.-..', M: '--', N: '-.',
  O: '---', P: '.--.', Q: '--.-', R: '.-.', S: '...', T: '-', U: '..-',
  V: '...-', W: '.--', X: '-..-', Y: '-.--', Z: '--..',
  0: '-----', 1: '.----', 2: '..---', 3: '...--', 4: '....-',
  5: '.....', 6: '-....', 7: '--...', 8: '---..', 9: '----.',
  '.': '.-.-.-', ',': '--..--', '?': '..--..', "'": '.----.',
};

const UNIT_MS = 90;
const DOT_GLYPH = '•';   // •
const DASH_GLYPH = '▬';  // ▬
const WORD_SEP = '│';    // │

function wordToMorse(word) {
  return [...word.toUpperCase()]
    .map((ch) => MORSE[ch] || '')
    .filter(Boolean)
    .join(' ');
}

function buildTimeline(words) {
  const events = [];
  words.forEach((w, wi) => {
    const chars = [...w.plain.toUpperCase()].filter((c) => MORSE[c]);
    chars.forEach((ch, ci) => {
      const m = MORSE[ch];
      [...m].forEach((sym, si) => {
        events.push({ on: true, ms: (sym === '.' ? 1 : 3) * UNIT_MS });
        if (si < m.length - 1) events.push({ on: false, ms: UNIT_MS });
      });
      if (ci < chars.length - 1) events.push({ on: false, ms: 3 * UNIT_MS });
    });
    if (wi < words.length - 1) events.push({ on: false, ms: 7 * UNIT_MS });
  });
  events.push({ on: false, ms: 20 * UNIT_MS });
  return events;
}

function buildMorseTokens(words) {
  const tokens = [];
  words.forEach((w, wi) => {
    const chars = [...w.plain.toUpperCase()].filter((c) => MORSE[c]);
    chars.forEach((ch, ci) => {
      const m = MORSE[ch];
      [...m].forEach((sym, si) => {
        tokens.push({ type: sym === '.' ? 'dot' : 'dash' });
        if (si < m.length - 1) tokens.push({ type: 'gap-sym' });
      });
      if (ci < chars.length - 1) tokens.push({ type: 'gap-char' });
    });
    if (wi < words.length - 1) tokens.push({ type: 'gap-word' });
  });
  return tokens;
}

function setBeacon(dot, tx, level) {
  // level: 0 (off), 1 (dot), 2 (dash)
  if (!dot) return;
  if (level === 0) {
    dot.style.opacity = '0.18';
    dot.style.boxShadow = 'none';
    if (tx) tx.style.opacity = '0.55';
    return;
  }
  dot.style.opacity = '1';
  dot.style.boxShadow =
    level === 2
      ? '0 0 14px 3px var(--accent), 0 0 3px 1px var(--accent)'
      : '0 0 8px 2px var(--accent)';
  if (tx) tx.style.opacity = '1';
}

function NemikMorse() {
  const [state, setState] = useState('collapsed');
  const dotRef = useRef(null);
  const txRef = useRef(null);
  const barRef = useRef(null);

  const words = useMemo(
    () =>
      manifesto
        .replace(/\s+/g, ' ')
        .trim()
        .split(' ')
        .filter(Boolean)
        .map((w) => ({ plain: w, morse: wordToMorse(w) })),
    []
  );

  const events = useMemo(() => buildTimeline(words), [words]);
  const tokens = useMemo(() => buildMorseTokens(words), [words]);

  useEffect(() => {
    if (!events.length) return undefined;
    let raf;

    if (state === 'collapsed') {
      let idx = 0;
      let eventStart = performance.now();
      let lastOn = false;
      const tick = (now) => {
        while (now - eventStart >= events[idx].ms) {
          eventStart += events[idx].ms;
          idx = (idx + 1) % events.length;
        }
        const ev = events[idx];
        if (ev.on !== lastOn) {
          setBeacon(dotRef.current, txRef.current, ev.on ? (ev.ms > UNIT_MS * 1.5 ? 2 : 1) : 0);
          lastOn = ev.on;
        }
        raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    } else if (state === 'morse') {
      let lastSym = null;
      const tick = () => {
        const bar = barRef.current;
        if (bar) {
          const r = bar.getBoundingClientRect();
          const cx = r.left + r.width / 2;
          const cy = r.top + r.height / 2;
          const hit = document.elementFromPoint(cx, cy);
          const sym = hit?.dataset?.sym || null;
          if (sym !== lastSym) {
            const level = sym === 'dash' ? 2 : sym === 'dot' ? 1 : 0;
            setBeacon(dotRef.current, txRef.current, level);
            lastSym = sym;
          }
        }
        raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    } else {
      // decoded — beacon paused
      setBeacon(dotRef.current, txRef.current, 0);
    }

    return () => raf && cancelAnimationFrame(raf);
  }, [events, state]);

  if (!words.length) return null;

  const cycle = () =>
    setState((s) => (s === 'collapsed' ? 'morse' : s === 'morse' ? 'decoded' : 'collapsed'));

  const onKey = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      cycle();
    } else if (e.key === 'Escape') {
      setState('collapsed');
    }
  };

  const renderPairs = () =>
    words.map((w, i) => (
      <span key={i} className="nemik-morse__pair">
        <span className="nemik-morse__pair-plain">{w.plain}</span>
        <span className="nemik-morse__pair-morse">{w.morse}</span>
      </span>
    ));

  const renderMorseTokens = () =>
    tokens.map((t, i) => {
      if (t.type === 'dot') return <span key={i} className="nemik-morse__sym nemik-morse__sym--dot" data-sym="dot">{DOT_GLYPH}</span>;
      if (t.type === 'dash') return <span key={i} className="nemik-morse__sym nemik-morse__sym--dash" data-sym="dash">{DASH_GLYPH}</span>;
      if (t.type === 'gap-sym') return <span key={i} className="nemik-morse__gap nemik-morse__gap--sym" />;
      if (t.type === 'gap-char') return <span key={i} className="nemik-morse__gap nemik-morse__gap--char" />;
      return <span key={i} className="nemik-morse__gap nemik-morse__gap--word">{WORD_SEP}</span>;
    });

  const label =
    state === 'collapsed' ? 'Open transmission' :
    state === 'morse' ? 'Decode transmission' :
    'Close transmission';

  return (
    <button
      ref={barRef}
      type="button"
      className={`nemik-morse nemik-morse--${state}`}
      onClick={cycle}
      onKeyDown={onKey}
      aria-label={label}
      title={label}
    >
      <span className="nemik-morse__beacon" aria-hidden="true">
        <span ref={dotRef} className="nemik-morse__dot" />
        <span ref={txRef} className="nemik-morse__tx">TX</span>
      </span>

      {state !== 'collapsed' && (
        <>
          <div className="nemik-morse__spotlight" aria-hidden="true" />
          <div className="nemik-morse__layer nemik-morse__layer--morse" aria-hidden="true">
            <div className="nemik-morse__track">
              <span className="nemik-morse__chunk">{renderMorseTokens()}</span>
              <span className="nemik-morse__chunk">{renderMorseTokens()}</span>
            </div>
          </div>
          <div className="nemik-morse__layer nemik-morse__layer--plain">
            <div className="nemik-morse__track">
              <span className="nemik-morse__chunk nemik-morse__pairs">{renderPairs()}</span>
              <span className="nemik-morse__chunk nemik-morse__pairs">{renderPairs()}</span>
            </div>
          </div>
        </>
      )}
    </button>
  );
}

export default NemikMorse;
