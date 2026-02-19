import { useEffect, useRef } from 'react';

export function useStaggeredFadeIn(itemSelector = '.stagger-item', baseDelay = 100) {
  const ref = useRef(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const items = container.querySelectorAll(itemSelector);
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          items.forEach((item, i) => {
            item.style.transitionDelay = `${i * baseDelay}ms`;
            item.classList.add('stagger-visible');
          });
          observer.unobserve(container);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, [itemSelector, baseDelay]);

  return ref;
}
