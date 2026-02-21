import { useEffect, useRef } from 'react';

function getThemeColors() {
  const isLight = document.documentElement.getAttribute('data-theme') === 'light';
  return {
    primary: isLight ? '2, 132, 199' : '56, 189, 248',
    accent: isLight ? '124, 58, 237' : '167, 139, 250',
    maxOpacity: isLight ? 0.15 : 0.3,
    baseOpacity: isLight ? 0.05 : 0.1,
    connectionOpacity: isLight ? 0.04 : 0.06,
  };
}

function ParticleBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const ctx = canvas.getContext('2d');
    let animationId = null;
    let particles = [];
    let colors = getThemeColors();

    const isMobile = window.matchMedia('(max-width: 767px)').matches;
    const MAX_PARTICLES = isMobile ? 20 : 50;
    const CONNECTION_DISTANCE = 120;
    const CONNECTION_DISTANCE_SQ = CONNECTION_DISTANCE * CONNECTION_DISTANCE;

    const resize = () => {
      canvas.width = canvas.parentElement.offsetWidth;
      canvas.height = canvas.parentElement.offsetHeight;
      createParticles();
    };

    const createParticles = () => {
      particles = [];
      const count = Math.min(MAX_PARTICLES, Math.floor((canvas.width * canvas.height) / 15000));
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 1,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          color: Math.random() > 0.5 ? colors.primary : colors.accent,
          opacity: Math.random() * colors.maxOpacity + colors.baseOpacity,
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color}, ${p.opacity})`;
        ctx.fill();

        if (!isMobile) {
          for (let j = i + 1; j < particles.length; j++) {
            const p2 = particles[j];
            const dx = p.x - p2.x;
            const dy = p.y - p2.y;
            const distSq = dx * dx + dy * dy;

            if (distSq < CONNECTION_DISTANCE_SQ) {
              const dist = Math.sqrt(distSq);
              ctx.beginPath();
              ctx.moveTo(p.x, p.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.strokeStyle = `rgba(${colors.primary}, ${colors.connectionOpacity * (1 - dist / CONNECTION_DISTANCE)})`;
              ctx.lineWidth = 0.5;
              ctx.stroke();
            }
          }
        }
      }

      animationId = requestAnimationFrame(draw);
    };

    const startDraw = () => {
      if (!animationId) {
        animationId = requestAnimationFrame(draw);
      }
    };

    const stopDraw = () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
        animationId = null;
      }
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        stopDraw();
      } else {
        startDraw();
      }
    };

    // Watch for theme changes
    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        if (mutation.attributeName === 'data-theme') {
          colors = getThemeColors();
          createParticles();
        }
      }
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });

    const init = () => {
      resize();
      startDraw();
      window.addEventListener('resize', resize);
      document.addEventListener('visibilitychange', handleVisibilityChange);
    };

    // Defer particle init so hero text paints first
    if (typeof requestIdleCallback === 'function') {
      requestIdleCallback(init);
    } else {
      setTimeout(init, 100);
    }

    return () => {
      stopDraw();
      observer.disconnect();
      window.removeEventListener('resize', resize);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return <canvas ref={canvasRef} className="particle-canvas" />;
}

export default ParticleBackground;
