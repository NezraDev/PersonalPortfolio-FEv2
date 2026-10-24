import { useEffect, useState } from 'react';

const readRoute = () => window.location.pathname.replace(/^\/+|\/+$/g, '') || 'home';

export function useRoute() {
  const [route, setRoute] = useState(readRoute);
  useEffect(() => {
    const update = () => {
      if (window.location.hash.startsWith('#/')) {
        const path = window.location.hash.slice(1);
        window.history.replaceState(null, '', path === '/home' ? '/' : path);
      }
      setRoute(readRoute());
    };
    update();
    const click = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const link = event.target instanceof Element ? event.target.closest('a') : null;
      if (!link || link.hasAttribute('download') || (link.target && link.target !== '_self')) return;
      const url = new URL(link.href);
      if (url.origin !== window.location.origin || url.hash || /\.[a-z0-9]+$/i.test(url.pathname)) return;
      event.preventDefault();
      window.history.pushState(null, '', url.pathname + url.search);
      setRoute(readRoute());
    };
    window.addEventListener('popstate', update);
    window.addEventListener('hashchange', update);
    document.addEventListener('click', click);
    return () => {
      window.removeEventListener('popstate', update);
      window.removeEventListener('hashchange', update);
      document.removeEventListener('click', click);
    };
  }, []);
  return { route };
}
