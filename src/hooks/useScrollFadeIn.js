import { useEffect, useRef } from 'react';

export function useScrollFadeIn(direction = 'up') {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (direction !== 'up') {
      el.classList.add(`fade-in-${direction}`);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible');
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [direction]);

  return ref;
}
