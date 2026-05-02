// All site content lifted from your i18n/en.json
window.SITE_DATA = {
  hero: {
    name: "S. Kaan Oguzkan",
    location: "Ankara, Turkey",
    typingPhrases: [
      "Full-Stack Developer",
      "DevOps Enthusiast",
      "Problem Solver",
      "Software Engineer",
    ],
  },
  about: {
    paragraphs: [
      `I'm a Computer Science student at <strong>Bilkent University</strong> with hands-on experience building full-stack web applications. I enjoy designing backend systems that are reliable, performant, and easy to maintain.`,
      `Currently working as a Software Engineer at <strong>Look & Cash</strong>, building full-stack & devops solutions using React, TypeScript, JavaScript, MongoDB and AWS.`,
    ],
    location: "Ankara, Turkey",
    languages: "Turkish (Native), English (Full Professional)",
    education: [
      {
        school: "Bilkent University",
        degree: "B.S. Computer Science",
        period: "Sep 2023 – Jun 2027",
        detail: "Activity: Formula Bilkent",
      },
      {
        school: "Meram Fen Lisesi",
        degree: "High School Diploma",
        period: "Sep 2019 – Jun 2023",
        detail: "GPA: 97.3/100 — Established the school's MUN branch",
      },
    ],
  },
  experience: [
    {
      role: "Software Engineer",
      company: "Look & Cash",
      city: "Ankara, Turkey",
      date: "Feb 2025 – Present",
      tags: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "AWS", "React Native"],
      bullets: [
        {
          head: "Ticket-Based Support System",
          desc: "Built a ticket workflow for web/mobile with priority, comments, attachments, and statuses. Shipped 13 REST endpoints, 4 ticket states, and 5 admin actions.",
          metrics: ["−25% admin handling time", "13 REST endpoints"],
        },
        {
          head: "Real-Time Mobile Support Chat",
          desc: "Implemented real-time ticket chat on mobile with backend persistence and state sync.",
          metrics: ["300 ms p95 delivery", "99.5% delivery rate", "150 concurrent sessions"],
        },
        {
          head: "Reporting & Graph Generation",
          desc: "Built KPI reporting APIs over MongoDB with date-range and campaign filters. Generated 14 dashboard datasets powering 4 chart types.",
          metrics: ["6.2s → 1.9s report time", "14 datasets"],
        },
        {
          head: "Admin Landing Page Dashboard",
          desc: "Built an admin dashboard showing 12 KPIs with a sidebar linking to 9 admin pages.",
          metrics: ["5 → 2 clicks", "12 KPIs surfaced"],
        },
      ],
    },
  ],
  projects: [
    {
      online: true,
      name: "Artifactum",
      label: "CS319 — Software Engineering Project",
      description:
        "Owned artifact ingestion and LLM features for a MERN application. Integrated Gemini for artifact generation/analysis with 6 prompt workflows and 1% LLM-call failure rate.",
      detailed:
        "Led the design and implementation of the artifact ingestion pipeline and all LLM-powered features for Artifactum, a full-stack MERN application built as part of CS319 Software Engineering. The platform allows users to upload, manage, and analyze artifacts using AI. Integrated Google Gemini for artifact generation and analysis across 6 distinct prompt workflows, achieving a 1% LLM-call failure rate. Built a robust S3-based file upload system supporting multi-file and ZIP bulk uploads of up to 50 MB / 200 files per batch.",
      highlights: [
        "6 prompt workflows with Gemini API integration",
        "1% LLM-call failure rate in production",
        "S3 multi-file and ZIP bulk uploads (50 MB / 200 files)",
        "p95 query latency reduced from 420 ms to 90 ms",
        "8 MongoDB indexes designed for optimal performance",
      ],
      tags: ["Node.js", "Express", "TypeScript", "MongoDB", "AWS S3", "Gemini API"],
      github: "",
      linkText:
        "Private due to university policies — reach out to see it.",
      year: "2025",
    },
    {
      online: false,
      name: "Immune Wars",
      label: "CS102 — Intro to Programming II",
      description:
        "Educational game about the immune system. Graph-based body model where players defend against pathogens using immune cells.",
      detailed:
        "Immune Wars is an educational game about the human immune system, built as a semester-long group project for CS102. Features a graph-based body model where players strategically deploy immune cells to defend against various pathogens. Designed core mechanics including pathogen AI behavior, immune cell interactions, and visual feedback systems.",
      highlights: [
        "Graph-based body model with realistic pathogen spread",
        "Pathogen AI with adaptive difficulty",
        "Multiple immune cell types with unique abilities",
        "Visual feedback systems for player actions",
        "Educational content integrated into gameplay",
      ],
      tags: ["Java", "OOP", "Game Development", "Graph Data Structures"],
      github: "https://github.com/kaanoguzkan/CS102-ImmuneWars",
      linkText: "View on GitHub",
      year: "2024",
    },
    {
      online: true,
      name: "NutriApp",
      label: "Amazon University Engagement Program",
      description:
        "Built backend services for a meal-planning app. Implemented 16 serverless REST endpoints on AWS Lambda with p95 latency of 450 ms. Won People's Choice Award — 1 of 7 teams.",
      detailed:
        "NutriApp is a meal-planning application built during the Amazon University Engagement Program. Responsible for the entire backend architecture: 16 serverless REST endpoints on AWS Lambda with DynamoDB. The APIs handle authentication, meal plan generation, nutritional analysis, and dietary preference management. Team won People's Choice Award, ranking first among 7 competing teams.",
      highlights: [
        "16 serverless REST API endpoints on AWS Lambda",
        "p95 latency of 450 ms across all endpoints",
        "People's Choice Award — 1st of 7 teams",
        "DynamoDB-backed data persistence",
        "Serverless architecture for zero-maintenance scaling",
      ],
      tags: ["Node.js", "AWS Lambda", "DynamoDB", "REST"],
      github: "https://github.com/arcmrt/NutriTech",
      linkText: "View on GitHub",
      year: "2024",
    },
  ],
  skills: [
    { name: "Languages", items: ["C++", "Java", "JavaScript", "TypeScript"] },
    { name: "Frontend", items: ["React.js", "React Native", "HTML/CSS"] },
    { name: "Backend", items: ["Node.js", "Express", "AWS Lambda", "AWS"] },
    { name: "Databases", items: ["MongoDB", "DynamoDB"] },
    { name: "Tools & Practices", items: ["Git", "GitHub", "OOP", "Software Design", "Project Management"] },
    { name: "Other", items: ["Game Development", "DevOps"] },
  ],
  volunteering: [
    {
      role: "Advisory Board President",
      org: "Formula Bilkent",
      date: "Sep 2024 – Present",
      desc: "Leading the advisory board and guiding strategic direction of the Formula Student team.",
    },
    {
      role: "Editor in Chief",
      org: "Mercek Dergi",
      date: "Jul 2024 – Apr 2025",
      desc: "Led editorial team and managed publication of the university magazine.",
    },
    {
      role: "Founding Member",
      org: "Bilkent Data Science and Analytics Society",
      date: "May 2024 – Feb 2025",
      desc: "Organized a 6-part Data Science workshop series for the university community.",
    },
    {
      role: "Board Member",
      org: "Formula Bilkent",
      date: "Sep 2023 – Sep 2024",
      desc: "Organized 20+ events and contributed to team operations and outreach.",
    },
    {
      role: "Active Member",
      org: "IEEE Bilkent",
      date: "Sep 2023 – Jul 2024",
      desc: "Organized career summit and Mercedes Career Talks events.",
    },
  ],
  academics: {
    orcid: "0009-0000-3272-7333",
    orcidUrl: "https://orcid.org/0009-0000-3272-7333",
    scholarUrl: "https://scholar.google.com.tr/citations?user=923Fx2MAAAAJ&hl=tr",
  },
  contact: {
    email: "kaan@oguzkan.com",
    github: "https://github.com/kaanoguzkan",
    linkedin: "https://linkedin.com/in/kaan-oguzkan",
    orcid: "https://orcid.org/0009-0000-3272-7333",
    scholar: "https://scholar.google.com.tr/citations?user=923Fx2MAAAAJ",
  },
};


// tweaks-panel.jsx
// Reusable Tweaks shell + form-control helpers.
//
// Owns the host protocol (listens for __activate_edit_mode / __deactivate_edit_mode,
// posts __edit_mode_available / __edit_mode_set_keys / __edit_mode_dismissed) so
// individual prototypes don't re-roll it. Ships a consistent set of controls so you
// don't hand-draw <input type="range">, segmented radios, steppers, etc.
//
// Usage (in an HTML file that loads React + Babel):
//
//   const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
//     "primaryColor": "#D97757",
//     "fontSize": 16,
//     "density": "regular",
//     "dark": false
//   }/*EDITMODE-END*/;
//
//   function App() {
//     const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
//     return (
//       <div style={{ fontSize: t.fontSize, color: t.primaryColor }}>
//         Hello
//         <TweaksPanel>
//           <TweakSection label="Typography" />
//           <TweakSlider label="Font size" value={t.fontSize} min={10} max={32} unit="px"
//                        onChange={(v) => setTweak('fontSize', v)} />
//           <TweakRadio  label="Density" value={t.density}
//                        options={['compact', 'regular', 'comfy']}
//                        onChange={(v) => setTweak('density', v)} />
//           <TweakSection label="Theme" />
//           <TweakColor  label="Primary" value={t.primaryColor}
//                        onChange={(v) => setTweak('primaryColor', v)} />
//           <TweakToggle label="Dark mode" value={t.dark}
//                        onChange={(v) => setTweak('dark', v)} />
//         </TweaksPanel>
//       </div>
//     );
//   }
//
// ─────────────────────────────────────────────────────────────────────────────

const __TWEAKS_STYLE = `
  .twk-panel{position:fixed;right:16px;bottom:16px;z-index:2147483646;width:280px;
    max-height:calc(100vh - 32px);display:flex;flex-direction:column;
    background:rgba(250,249,247,.78);color:#29261b;
    -webkit-backdrop-filter:blur(24px) saturate(160%);backdrop-filter:blur(24px) saturate(160%);
    border:.5px solid rgba(255,255,255,.6);border-radius:14px;
    box-shadow:0 1px 0 rgba(255,255,255,.5) inset,0 12px 40px rgba(0,0,0,.18);
    font:11.5px/1.4 ui-sans-serif,system-ui,-apple-system,sans-serif;overflow:hidden}
  .twk-hd{display:flex;align-items:center;justify-content:space-between;
    padding:10px 8px 10px 14px;cursor:move;user-select:none}
  .twk-hd b{font-size:12px;font-weight:600;letter-spacing:.01em}
  .twk-x{appearance:none;border:0;background:transparent;color:rgba(41,38,27,.55);
    width:22px;height:22px;border-radius:6px;cursor:default;font-size:13px;line-height:1}
  .twk-x:hover{background:rgba(0,0,0,.06);color:#29261b}
  .twk-body{padding:2px 14px 14px;display:flex;flex-direction:column;gap:10px;
    overflow-y:auto;overflow-x:hidden;min-height:0;
    scrollbar-width:thin;scrollbar-color:rgba(0,0,0,.15) transparent}
  .twk-body::-webkit-scrollbar{width:8px}
  .twk-body::-webkit-scrollbar-track{background:transparent;margin:2px}
  .twk-body::-webkit-scrollbar-thumb{background:rgba(0,0,0,.15);border-radius:4px;
    border:2px solid transparent;background-clip:content-box}
  .twk-body::-webkit-scrollbar-thumb:hover{background:rgba(0,0,0,.25);
    border:2px solid transparent;background-clip:content-box}
  .twk-row{display:flex;flex-direction:column;gap:5px}
  .twk-row-h{flex-direction:row;align-items:center;justify-content:space-between;gap:10px}
  .twk-lbl{display:flex;justify-content:space-between;align-items:baseline;
    color:rgba(41,38,27,.72)}
  .twk-lbl>span:first-child{font-weight:500}
  .twk-val{color:rgba(41,38,27,.5);font-variant-numeric:tabular-nums}

  .twk-sect{font-size:10px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;
    color:rgba(41,38,27,.45);padding:10px 0 0}
  .twk-sect:first-child{padding-top:0}

  .twk-field{appearance:none;width:100%;height:26px;padding:0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;
    background:rgba(255,255,255,.6);color:inherit;font:inherit;outline:none}
  .twk-field:focus{border-color:rgba(0,0,0,.25);background:rgba(255,255,255,.85)}
  select.twk-field{padding-right:22px;
    background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'><path fill='rgba(0,0,0,.5)' d='M0 0h10L5 6z'/></svg>");
    background-repeat:no-repeat;background-position:right 8px center}

  .twk-slider{appearance:none;-webkit-appearance:none;width:100%;height:4px;margin:6px 0;
    border-radius:999px;background:rgba(0,0,0,.12);outline:none}
  .twk-slider::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;
    width:14px;height:14px;border-radius:50%;background:#fff;
    border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}
  .twk-slider::-moz-range-thumb{width:14px;height:14px;border-radius:50%;
    background:#fff;border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}

  .twk-seg{position:relative;display:flex;padding:2px;border-radius:8px;
    background:rgba(0,0,0,.06);user-select:none}
  .twk-seg-thumb{position:absolute;top:2px;bottom:2px;border-radius:6px;
    background:rgba(255,255,255,.9);box-shadow:0 1px 2px rgba(0,0,0,.12);
    transition:left .15s cubic-bezier(.3,.7,.4,1),width .15s}
  .twk-seg.dragging .twk-seg-thumb{transition:none}
  .twk-seg button{appearance:none;position:relative;z-index:1;flex:1;border:0;
    background:transparent;color:inherit;font:inherit;font-weight:500;min-height:22px;
    border-radius:6px;cursor:default;padding:4px 6px;line-height:1.2;
    overflow-wrap:anywhere}

  .twk-toggle{position:relative;width:32px;height:18px;border:0;border-radius:999px;
    background:rgba(0,0,0,.15);transition:background .15s;cursor:default;padding:0}
  .twk-toggle[data-on="1"]{background:#34c759}
  .twk-toggle i{position:absolute;top:2px;left:2px;width:14px;height:14px;border-radius:50%;
    background:#fff;box-shadow:0 1px 2px rgba(0,0,0,.25);transition:transform .15s}
  .twk-toggle[data-on="1"] i{transform:translateX(14px)}

  .twk-num{display:flex;align-items:center;height:26px;padding:0 0 0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;background:rgba(255,255,255,.6)}
  .twk-num-lbl{font-weight:500;color:rgba(41,38,27,.6);cursor:ew-resize;
    user-select:none;padding-right:8px}
  .twk-num input{flex:1;min-width:0;height:100%;border:0;background:transparent;
    font:inherit;font-variant-numeric:tabular-nums;text-align:right;padding:0 8px 0 0;
    outline:none;color:inherit;-moz-appearance:textfield}
  .twk-num input::-webkit-inner-spin-button,.twk-num input::-webkit-outer-spin-button{
    -webkit-appearance:none;margin:0}
  .twk-num-unit{padding-right:8px;color:rgba(41,38,27,.45)}

  .twk-btn{appearance:none;height:26px;padding:0 12px;border:0;border-radius:7px;
    background:rgba(0,0,0,.78);color:#fff;font:inherit;font-weight:500;cursor:default}
  .twk-btn:hover{background:rgba(0,0,0,.88)}
  .twk-btn.secondary{background:rgba(0,0,0,.06);color:inherit}
  .twk-btn.secondary:hover{background:rgba(0,0,0,.1)}

  .twk-swatch{appearance:none;-webkit-appearance:none;width:56px;height:22px;
    border:.5px solid rgba(0,0,0,.1);border-radius:6px;padding:0;cursor:default;
    background:transparent;flex-shrink:0}
  .twk-swatch::-webkit-color-swatch-wrapper{padding:0}
  .twk-swatch::-webkit-color-swatch{border:0;border-radius:5.5px}
  .twk-swatch::-moz-color-swatch{border:0;border-radius:5.5px}
`;

// ── useTweaks ───────────────────────────────────────────────────────────────
// Single source of truth for tweak values. setTweak persists via the host
// (__edit_mode_set_keys → host rewrites the EDITMODE block on disk).
function useTweaks(defaults) {
  const [values, setValues] = React.useState(defaults);
  // Accepts either setTweak('key', value) or setTweak({ key: value, ... }) so a
  // useState-style call doesn't write a "[object Object]" key into the persisted
  // JSON block.
  const setTweak = React.useCallback((keyOrEdits, val) => {
    const edits = typeof keyOrEdits === 'object' && keyOrEdits !== null
      ? keyOrEdits : { [keyOrEdits]: val };
    setValues((prev) => ({ ...prev, ...edits }));
    window.parent.postMessage({ type: '__edit_mode_set_keys', edits }, '*');
  }, []);
  return [values, setTweak];
}

// ── TweaksPanel ─────────────────────────────────────────────────────────────
// Floating shell. Registers the protocol listener BEFORE announcing
// availability — if the announce ran first, the host's activate could land
// before our handler exists and the toolbar toggle would silently no-op.
// The close button posts __edit_mode_dismissed so the host's toolbar toggle
// flips off in lockstep; the host echoes __deactivate_edit_mode back which
// is what actually hides the panel.
function TweaksPanel({ title = 'Tweaks', children }) {
  const [open, setOpen] = React.useState(false);
  const dragRef = React.useRef(null);
  const offsetRef = React.useRef({ x: 16, y: 16 });
  const PAD = 16;

  const clampToViewport = React.useCallback(() => {
    const panel = dragRef.current;
    if (!panel) return;
    const w = panel.offsetWidth, h = panel.offsetHeight;
    const maxRight = Math.max(PAD, window.innerWidth - w - PAD);
    const maxBottom = Math.max(PAD, window.innerHeight - h - PAD);
    offsetRef.current = {
      x: Math.min(maxRight, Math.max(PAD, offsetRef.current.x)),
      y: Math.min(maxBottom, Math.max(PAD, offsetRef.current.y)),
    };
    panel.style.right = offsetRef.current.x + 'px';
    panel.style.bottom = offsetRef.current.y + 'px';
  }, []);

  React.useEffect(() => {
    if (!open) return;
    clampToViewport();
    if (typeof ResizeObserver === 'undefined') {
      window.addEventListener('resize', clampToViewport);
      return () => window.removeEventListener('resize', clampToViewport);
    }
    const ro = new ResizeObserver(clampToViewport);
    ro.observe(document.documentElement);
    return () => ro.disconnect();
  }, [open, clampToViewport]);

  React.useEffect(() => {
    const onMsg = (e) => {
      const t = e?.data?.type;
      if (t === '__activate_edit_mode') setOpen(true);
      else if (t === '__deactivate_edit_mode') setOpen(false);
    };
    window.addEventListener('message', onMsg);
    window.parent.postMessage({ type: '__edit_mode_available' }, '*');
    return () => window.removeEventListener('message', onMsg);
  }, []);

  const dismiss = () => {
    setOpen(false);
    window.parent.postMessage({ type: '__edit_mode_dismissed' }, '*');
  };

  const onDragStart = (e) => {
    const panel = dragRef.current;
    if (!panel) return;
    const r = panel.getBoundingClientRect();
    const sx = e.clientX, sy = e.clientY;
    const startRight = window.innerWidth - r.right;
    const startBottom = window.innerHeight - r.bottom;
    const move = (ev) => {
      offsetRef.current = {
        x: startRight - (ev.clientX - sx),
        y: startBottom - (ev.clientY - sy),
      };
      clampToViewport();
    };
    const up = () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseup', up);
    };
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseup', up);
  };

  if (!open) return null;
  return (
    <>
      <style>{__TWEAKS_STYLE}</style>
      <div ref={dragRef} className="twk-panel" data-noncommentable=""
           style={{ right: offsetRef.current.x, bottom: offsetRef.current.y }}>
        <div className="twk-hd" onMouseDown={onDragStart}>
          <b>{title}</b>
          <button className="twk-x" aria-label="Close tweaks"
                  onMouseDown={(e) => e.stopPropagation()}
                  onClick={dismiss}>✕</button>
        </div>
        <div className="twk-body">{children}</div>
      </div>
    </>
  );
}

// ── Layout helpers ──────────────────────────────────────────────────────────

function TweakSection({ label, children }) {
  return (
    <>
      <div className="twk-sect">{label}</div>
      {children}
    </>
  );
}

function TweakRow({ label, value, children, inline = false }) {
  return (
    <div className={inline ? 'twk-row twk-row-h' : 'twk-row'}>
      <div className="twk-lbl">
        <span>{label}</span>
        {value != null && <span className="twk-val">{value}</span>}
      </div>
      {children}
    </div>
  );
}

// ── Controls ────────────────────────────────────────────────────────────────

function TweakSlider({ label, value, min = 0, max = 100, step = 1, unit = '', onChange }) {
  return (
    <TweakRow label={label} value={`${value}${unit}`}>
      <input type="range" className="twk-slider" min={min} max={max} step={step}
             value={value} onChange={(e) => onChange(Number(e.target.value))} />
    </TweakRow>
  );
}

function TweakToggle({ label, value, onChange }) {
  return (
    <div className="twk-row twk-row-h">
      <div className="twk-lbl"><span>{label}</span></div>
      <button type="button" className="twk-toggle" data-on={value ? '1' : '0'}
              role="switch" aria-checked={!!value}
              onClick={() => onChange(!value)}><i /></button>
    </div>
  );
}

function TweakRadio({ label, value, options, onChange }) {
  const trackRef = React.useRef(null);
  const [dragging, setDragging] = React.useState(false);
  const opts = options.map((o) => (typeof o === 'object' ? o : { value: o, label: o }));
  const idx = Math.max(0, opts.findIndex((o) => o.value === value));
  const n = opts.length;

  // The active value is read by pointer-move handlers attached for the lifetime
  // of a drag — ref it so a stale closure doesn't fire onChange for every move.
  const valueRef = React.useRef(value);
  valueRef.current = value;

  const segAt = (clientX) => {
    const r = trackRef.current.getBoundingClientRect();
    const inner = r.width - 4;
    const i = Math.floor(((clientX - r.left - 2) / inner) * n);
    return opts[Math.max(0, Math.min(n - 1, i))].value;
  };

  const onPointerDown = (e) => {
    setDragging(true);
    const v0 = segAt(e.clientX);
    if (v0 !== valueRef.current) onChange(v0);
    const move = (ev) => {
      if (!trackRef.current) return;
      const v = segAt(ev.clientX);
      if (v !== valueRef.current) onChange(v);
    };
    const up = () => {
      setDragging(false);
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };

  return (
    <TweakRow label={label}>
      <div ref={trackRef} role="radiogroup" onPointerDown={onPointerDown}
           className={dragging ? 'twk-seg dragging' : 'twk-seg'}>
        <div className="twk-seg-thumb"
             style={{ left: `calc(2px + ${idx} * (100% - 4px) / ${n})`,
                      width: `calc((100% - 4px) / ${n})` }} />
        {opts.map((o) => (
          <button key={o.value} type="button" role="radio" aria-checked={o.value === value}>
            {o.label}
          </button>
        ))}
      </div>
    </TweakRow>
  );
}

function TweakSelect({ label, value, options, onChange }) {
  return (
    <TweakRow label={label}>
      <select className="twk-field" value={value} onChange={(e) => onChange(e.target.value)}>
        {options.map((o) => {
          const v = typeof o === 'object' ? o.value : o;
          const l = typeof o === 'object' ? o.label : o;
          return <option key={v} value={v}>{l}</option>;
        })}
      </select>
    </TweakRow>
  );
}

function TweakText({ label, value, placeholder, onChange }) {
  return (
    <TweakRow label={label}>
      <input className="twk-field" type="text" value={value} placeholder={placeholder}
             onChange={(e) => onChange(e.target.value)} />
    </TweakRow>
  );
}

function TweakNumber({ label, value, min, max, step = 1, unit = '', onChange }) {
  const clamp = (n) => {
    if (min != null && n < min) return min;
    if (max != null && n > max) return max;
    return n;
  };
  const startRef = React.useRef({ x: 0, val: 0 });
  const onScrubStart = (e) => {
    e.preventDefault();
    startRef.current = { x: e.clientX, val: value };
    const decimals = (String(step).split('.')[1] || '').length;
    const move = (ev) => {
      const dx = ev.clientX - startRef.current.x;
      const raw = startRef.current.val + dx * step;
      const snapped = Math.round(raw / step) * step;
      onChange(clamp(Number(snapped.toFixed(decimals))));
    };
    const up = () => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return (
    <div className="twk-num">
      <span className="twk-num-lbl" onPointerDown={onScrubStart}>{label}</span>
      <input type="number" value={value} min={min} max={max} step={step}
             onChange={(e) => onChange(clamp(Number(e.target.value)))} />
      {unit && <span className="twk-num-unit">{unit}</span>}
    </div>
  );
}

function TweakColor({ label, value, onChange }) {
  return (
    <div className="twk-row twk-row-h">
      <div className="twk-lbl"><span>{label}</span></div>
      <input type="color" className="twk-swatch" value={value}
             onChange={(e) => onChange(e.target.value)} />
    </div>
  );
}

function TweakButton({ label, onClick, secondary = false }) {
  return (
    <button type="button" className={secondary ? 'twk-btn secondary' : 'twk-btn'}
            onClick={onClick}>{label}</button>
  );
}

Object.assign(window, {
  useTweaks, TweaksPanel, TweakSection, TweakRow,
  TweakSlider, TweakToggle, TweakRadio, TweakSelect,
  TweakText, TweakNumber, TweakColor, TweakButton,
});

const { useState, useEffect, useRef } = React;
const D = window.SITE_DATA;

// ---------- Hooks ----------
function useTyping(phrases, speed = 80, pause = 1600) {
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [del, setDel] = useState(false);
  useEffect(() => {
    const cur = phrases[i];
    if (!del && text === cur) {
      const t = setTimeout(() => setDel(true), pause);
      return () => clearTimeout(t);
    }
    if (del && text === "") {
      setDel(false);
      setI((i + 1) % phrases.length);
      return;
    }
    const t = setTimeout(() => {
      setText(del ? cur.slice(0, text.length - 1) : cur.slice(0, text.length + 1));
    }, del ? speed / 2 : speed);
    return () => clearTimeout(t);
  }, [text, del, i, phrases, speed, pause]);
  return text;
}

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("in")),
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

// ---------- Top bar ----------
function TopBar() {
  return (
    <div className="topbar">
      <div className="shell topbar-inner">
        <a href="#top" className="brand">
          <span className="dot"></span>
          <span>S. Kaan Oguzkan</span>
        </a>
        <nav className="nav">
          <a href="#about">About</a>
          <a href="#work">Work</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#github">GitHub</a>
          <a href="#community">Community</a>
          <a href="#contact" className="cta-mini">Get in touch ↗</a>
          <span className="now">Available · Spring '26</span>
        </nav>
      </div>
    </div>
  );
}

// ---------- Hero ----------
function Hero() {
  const typed = useTyping(D.hero.typingPhrases);
  return (
    <header className="hero shell" id="top">
      <div className="hero-grid">
        <div>
          <div className="mono" style={{ marginBottom: 24 }}>
            ⌘ Index — 01 / Personal site · v.2026
          </div>
          <h1>
            Building<br/>
            clean, scalable<br/>
            software<span style={{ color: "var(--accent)" }}>.</span>
          </h1>
          <p className="hero-meta">
            CS student at <strong>Bilkent University</strong>, Software Engineer at <strong>Look & Cash</strong>. I design backend systems that are reliable, performant, and easy to maintain.
          </p>
        </div>
        <div className="hero-side">
          <div className="photo-frame">
            <img src="public/assets/profile.webp" alt="S. Kaan Oguzkan" onError={(e) => e.target.style.display = 'none'} />
          </div>
          <div className="photo-cap">
            FIG. 01 — Ankara, TR
          </div>
        </div>
      </div>
      <div className="hero-row">
        <div className="roles">
          <span>Full-Stack</span>
          <span>Backend Systems</span>
          <span>DevOps</span>
          <span>LLM Integrations</span>
        </div>
        <div>↓ Scroll</div>
      </div>
    </header>
  );
}

// ---------- Marquee ----------
function Marquee() {
  const items = ["React", "TypeScript", "Node.js", "MongoDB", "AWS", "Express", "AWS Lambda", "DynamoDB", "Gemini", "React Native"];
  const Row = () => (
    <span>
      {items.map((it, i) => (
        <React.Fragment key={i}>
          <span>{it}</span>
          <span className="star">✦</span>
        </React.Fragment>
      ))}
    </span>
  );
  return (
    <div className="marq" data-screen-label="marquee">
      <div className="marq-track">
        <Row /><Row />
      </div>
    </div>
  );
}

// ---------- About ----------
function About() {
  return (
    <section className="block reveal" id="about" data-screen-label="About">
      <div className="shell">
        <div className="block-head">
          <div className="block-num"><span className="n">02</span> &nbsp;/ About</div>
          <h2 className="block-title">About</h2>
        </div>
        <div className="about-grid">
          <div className="about-side">
            <div className="meta-row">
              <span className="k">Based</span>
              <span className="v">{D.about.location}</span>
            </div>
            <div className="meta-row">
              <span className="k">Languages</span>
              <span className="v">{D.about.languages}</span>
            </div>
            <div className="meta-row">
              <span className="k">Status</span>
              <span className="v">Available for collaborations & internships</span>
            </div>
            <div className="meta-row">
              <span className="k">Focus</span>
              <span className="v">Backend systems · DevOps · LLM workflows</span>
            </div>
          </div>
          <div className="about-body">
            {D.about.paragraphs.map((p, i) => (
              <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
            ))}
            <div className="edu-list">
              {D.about.education.map((e, i) => (
                <div key={i} className="edu-row">
                  <div>
                    <div className="school">{e.school}</div>
                    <div className="deg">{e.degree}</div>
                  </div>
                  <div className="right">
                    <div className="period">{e.period}</div>
                    <div className="detail">{e.detail}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------- Experience ----------
function Experience() {
  return (
    <section className="block reveal" id="work" data-screen-label="Experience">
      <div className="shell">
        <div className="block-head">
          <div className="block-num"><span className="n">03</span> &nbsp;/ Experience</div>
          <h2 className="block-title">Experience</h2>
        </div>
        {D.experience.map((job, i) => (
          <div key={i} className="exp">
            <div className="exp-side">
              <div className="when">{job.date}</div>
              <div className="org">{job.company}</div>
              <div className="role">{job.role} · {job.city}</div>
              <div className="tags">
                {job.tags.map((t, j) => <span key={j} className="tag">{t}</span>)}
              </div>
            </div>
            <div className="exp-list">
              {job.bullets.map((b, j) => (
                <div key={j} className="exp-item">
                  <div className="idx">0{j+1}</div>
                  <div className="body">
                    <div className="head">{b.head}</div>
                    <div className="desc">{b.desc}</div>
                    <div className="metric-row">
                      {b.metrics.map((m, k) => <span key={k} className="metric">{m}</span>)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ---------- Projects ----------
function Projects({ onOpen }) {
  return (
    <section className="block reveal" id="projects" data-screen-label="Projects">
      <div className="shell">
        <div className="block-head">
          <div className="block-num"><span className="n">04</span> &nbsp;/ Projects</div>
          <h2 className="block-title">Projects</h2>
        </div>
        <div className="proj-list">
          {D.projects.map((p, i) => (
            <div key={i} className="proj" onClick={() => onOpen(p)}>
              <div className="proj-meta">
                <span className="num">P / {String(i+1).padStart(2,"0")} · {p.year}</span>
                <span className={"status " + (p.online ? "live" : "")}>
                  <span className="dot"></span> {p.online ? "Live / In production" : "Archived"}
                </span>
              </div>
              <div>
                <div className="proj-name">{p.name}</div>
                <div className="proj-label">{p.label}</div>
                <div className="proj-desc">{p.description}</div>
                <div className="proj-tags">
                  {p.tags.map((t, j) => <span key={j} className="tag">{t}</span>)}
                </div>
              </div>
              <div className="proj-side">
                <span className="arrow">↗</span>
                <span className="mono">View case</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- Skills ----------
function Skills() {
  return (
    <section className="block reveal" id="skills" data-screen-label="Skills">
      <div className="shell">
        <div className="block-head">
          <div className="block-num"><span className="n">05</span> &nbsp;/ Skills</div>
          <h2 className="block-title">Skills</h2>
        </div>
        <div className="skills-grid">
          {D.skills.map((cat, i) => (
            <div key={i} className="skill-cat">
              <div className="name">{String(i+1).padStart(2,"0")} — {cat.name}</div>
              <div className="skill-list">
                {cat.items.map((it, j) => <span key={j} className="chip">{it}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- Academics ----------
function Academics() {
  return (
    <section className="block reveal" id="research" data-screen-label="Research">
      <div className="shell">
        <div className="block-head">
          <div className="block-num"><span className="n">06</span> &nbsp;/ Research</div>
          <h2 className="block-title">Research</h2>
        </div>
        <div className="ac-grid">
          <a className="ac-card" href={D.academics.orcidUrl} target="_blank" rel="noopener">
            <div className="label">Researcher ID</div>
            <div className="name">ORCID</div>
            <div className="id">{D.academics.orcid}</div>
            <div className="note">Verified researcher record. Publications and affiliations are tracked here.</div>
            <div className="go">Open ORCID profile →</div>
          </a>
          <a className="ac-card" href={D.academics.scholarUrl} target="_blank" rel="noopener">
            <div className="label">Citation Index</div>
            <div className="name">Google Scholar</div>
            <div className="id">S. Kaan Oğuzkan</div>
            <div className="note">Publications coming soon — follow my ORCID for updates.</div>
            <div className="go">Open Scholar profile →</div>
          </a>
        </div>
      </div>
    </section>
  );
}

// ---------- Volunteering ----------
function Volunteering() {
  return (
    <section className="block reveal" id="community" data-screen-label="Community">
      <div className="shell">
        <div className="block-head">
          <div className="block-num"><span className="n">07</span> &nbsp;/ Community</div>
          <h2 className="block-title">Community</h2>
        </div>
        <div className="vol-list">
          {D.volunteering.map((v, i) => (
            <div key={i} className="vol">
              <div className="when">{v.date}</div>
              <div>
                <div className="role">{v.role}</div>
                <div className="org">{v.org}</div>
              </div>
              <div className="desc">{v.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- Contact ----------
function Contact() {
  return (
    <section className="block reveal" id="contact" data-screen-label="Contact">
      <div className="shell">
        <div className="block-head">
          <div className="block-num"><span className="n">08</span> &nbsp;/ Contact</div>
          <h2 className="block-title" style={{ visibility: "hidden" }}>—</h2>
        </div>
        <div className="contact-grid">
          <div>
            <h3 className="contact-big">Get in touch.</h3>
            <p className="contact-text">
              Open to internships, full-stack collaborations, and conversations about backend systems, LLM integrations, and DevOps. I usually reply within 24 hours.
            </p>
          </div>
          <div className="contact-side">
            <a className="contact-link" href={`mailto:${D.contact.email}`}>
              <span><span className="lbl">Email</span><br/>{D.contact.email}</span>
              <span className="val"><span className="arr">→</span></span>
            </a>
            <a className="contact-link" href={D.contact.github} target="_blank" rel="noopener">
              <span><span className="lbl">GitHub</span><br/>@kaanoguzkan</span>
              <span className="val"><span className="arr">↗</span></span>
            </a>
            <a className="contact-link" href={D.contact.linkedin} target="_blank" rel="noopener">
              <span><span className="lbl">LinkedIn</span><br/>kaan-oguzkan</span>
              <span className="val"><span className="arr">↗</span></span>
            </a>
            <a className="contact-link" href={D.contact.orcid} target="_blank" rel="noopener">
              <span><span className="lbl">ORCID</span><br/>{D.academics.orcid}</span>
              <span className="val"><span className="arr">↗</span></span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------- Footer ----------
function Footer() {
  return (
    <footer className="shell">
      <div className="colophon">
        <strong>© 2026 S. Kaan Oguzkan.</strong> All rights reserved.<br/>
        Set in Space Grotesk, Inter & JetBrains Mono.<br/>
        Last updated · {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
      </div>
      <div className="sig">SKO<span style={{ color: 'var(--accent)' }}>.</span></div>
    </footer>
  );
}

// ---------- Project Modal ----------
function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const k = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", k);
    document.body.style.overflow = "hidden";
    return () => { window.removeEventListener("keydown", k); document.body.style.overflow = ""; };
  }, [onClose]);
  if (!project) return null;
  return (
    <div className="modal-bg" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-head">
          <div>
            <div className="label">{project.label} · {project.year}</div>
            <h3>{project.name}</h3>
          </div>
          <button className="modal-close" onClick={onClose}>×</button>
        </div>
        <p>{project.detailed}</p>
        <h4>Key Highlights</h4>
        <ul>
          {project.highlights.map((h, i) => <li key={i}>{h}</li>)}
        </ul>
        <div className="modal-tags">
          {project.tags.map((t, i) => <span key={i} className="tag">{t}</span>)}
        </div>
        <div className="modal-foot">
          {project.github ? (
            <a href={project.github} target="_blank" rel="noopener">{project.linkText} ↗</a>
          ) : (
            <span style={{ fontFamily: 'var(--mono)', fontSize: 12, color: 'var(--ink-3)' }}>{project.linkText}</span>
          )}
        </div>
      </div>
    </div>
  );
}

// ---------- GitHub Activity ----------
function GitHub() {
  const username = "kaanoguzkan";
  return (
    <section className="block reveal" id="github" data-screen-label="GitHub">
      <div className="shell">
        <div className="block-head">
          <div className="block-num"><span className="n">09</span> &nbsp;/ GitHub</div>
          <h2 className="block-title">GitHub Activity</h2>
        </div>
        <div className="gh-wrap">
          <div className="gh-label">Contributions · last 12 months</div>
          <a href={`https://github.com/${username}`} target="_blank" rel="noopener" className="gh-chart">
            <img
              src={`https://ghchart.rshah.org/161513/${username}`}
              alt={`${username} GitHub contribution chart`}
              onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'block'; }}
            />
            <div className="gh-fallback" style={{display:'none'}}>Unable to load contribution graph. <span className="link-u">View on GitHub →</span></div>
          </a>
          <a href={`https://github.com/${username}`} target="_blank" rel="noopener" className="gh-cta">
            View full profile @{username} ↗
          </a>
        </div>
      </div>
    </section>
  );
}

// Expose
Object.assign(window, { TopBar, Hero, Marquee, About, Experience, Projects, Skills, Academics, Volunteering, Contact, Footer, ProjectModal, GitHub, useReveal });

function TweaksController({ tweaks, setTweak }) {
  React.useEffect(() => {
    document.documentElement.setAttribute("data-theme", tweaks.theme || "bone");
  }, [tweaks.theme]);

  React.useEffect(() => {
    const h = tweaks.accentHue || 40;
    document.documentElement.style.setProperty("--accent", `oklch(0.62 0.12 ${h})`);
    document.documentElement.style.setProperty("--accent-soft", `oklch(0.62 0.12 ${h} / 0.12)`);
  }, [tweaks.accentHue]);

  return (
    <TweaksPanel title="Tweaks">
      <TweakSection label="Theme">
        <TweakRadio
          label="Palette"
          value={tweaks.theme}
          onChange={(v) => setTweak("theme", v)}
          options={[
            { value: "bone", label: "Bone" },
            { value: "paper", label: "Paper" },
            { value: "ink", label: "Ink" },
          ]}
        />
        <TweakRadio
          label="Accent"
          value={String(tweaks.accentHue)}
          onChange={(v) => setTweak("accentHue", Number(v))}
          options={[
            { value: "40", label: "Terracotta" },
            { value: "150", label: "Moss" },
            { value: "240", label: "Slate" },
            { value: "320", label: "Plum" },
          ]}
        />
      </TweakSection>
      <TweakSection label="Effects">
        <TweakToggle
          label="Cursor glow"
          value={tweaks.showCursorGlow}
          onChange={(v) => setTweak("showCursorGlow", v)}
        />
      </TweakSection>
    </TweaksPanel>
  );
}

function CursorGlow({ enabled }) {
  const ref = React.useRef();
  React.useEffect(() => {
    if (!enabled) { if (ref.current) ref.current.style.opacity = "0"; return; }
    const el = ref.current;
    const move = (e) => {
      el.style.opacity = "1";
      el.style.transform = `translate(${e.clientX - 200}px, ${e.clientY - 200}px)`;
    };
    const leave = () => { el.style.opacity = "0"; };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseleave", leave);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseleave", leave);
    };
  }, [enabled]);
  return <div ref={ref} className="cursor-glow"></div>;
}

function App() {
  const [tweaks, setTweak] = useTweaks(window.__TWEAKS_DEFAULTS);
  const [openProj, setOpenProj] = React.useState(null);
  useReveal();

  return (
    <>
      <CursorGlow enabled={tweaks.showCursorGlow} />
      <TopBar />
      <Hero />
      <About />
      <Experience />
      <Projects onOpen={setOpenProj} />
      <Skills />
      <Academics />
      <Volunteering />
      <GitHub />
      <Contact />
      <Footer />
      {openProj && <ProjectModal project={openProj} onClose={() => setOpenProj(null)} />}
      <TweaksController tweaks={tweaks} setTweak={setTweak} />
    </>
  );
}

window.App = App;
ReactDOM.createRoot(document.getElementById("root")).render(<App />);
