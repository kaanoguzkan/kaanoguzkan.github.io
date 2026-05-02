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
