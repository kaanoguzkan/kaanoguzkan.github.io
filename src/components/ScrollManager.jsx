import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

// Scrolls to the top on route changes and to #section targets, including ones
// that live in lazily loaded sections and don't exist in the DOM yet.
function ScrollManager() {
  const { pathname, hash } = useLocation();
  const previousPath = useRef(pathname);

  useEffect(() => {
    const routeChanged = previousPath.current !== pathname;
    previousPath.current = pathname;

    if (!hash) {
      if (routeChanged) window.scrollTo(0, 0);
      return;
    }

    const id = decodeURIComponent(hash.slice(1));
    let tries = 0;
    let timer;
    const seek = () => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView();
      } else if (tries++ < 30) {
        timer = setTimeout(seek, 100);
      }
    };
    seek();
    return () => clearTimeout(timer);
  }, [pathname, hash]);

  return null;
}

export default ScrollManager;
