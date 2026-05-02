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
