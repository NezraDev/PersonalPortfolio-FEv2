import { useEffect } from 'react';

/** Hover-only perspective for project previews; scrolling stays flat. */
export function useProjectDepth(page: string) {
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    const pointer = window.matchMedia('(hover: hover) and (pointer: fine)');
    const selector = '.editorial-project-image, .route-content--projects .project-gallery-image';
    const tracked = new Map<HTMLElement, () => void>();
    let mutations: MutationObserver | undefined;
    const reset = () => {
      mutations?.disconnect();
      tracked.forEach(cleanup => cleanup());
      tracked.clear();
    };
    const start = () => {
      reset();
      if (reduced.matches || !pointer.matches) return;
      const refresh = () => {
        tracked.forEach((cleanup, element) => {
          if (!element.isConnected) { cleanup(); tracked.delete(element); }
        });
        document.querySelectorAll<HTMLElement>(selector).forEach(element => {
          if (tracked.has(element)) return;
          element.classList.add('project-depth');
          let frame = 0;
          let x = 0;
          let y = 0;
          const leave = () => {
            cancelAnimationFrame(frame);
            frame = 0;
            element.style.setProperty('--pointer-x', '0deg');
            element.style.setProperty('--pointer-y', '0deg');
          };
          const move = (event: PointerEvent) => {
            if (event.pointerType !== 'mouse') return;
            const rect = element.getBoundingClientRect();
            x = Math.max(-.5, Math.min(.5, (event.clientX - rect.left) / rect.width - .5));
            y = Math.max(-.5, Math.min(.5, (event.clientY - rect.top) / rect.height - .5));
            if (!frame) frame = requestAnimationFrame(() => {
              frame = 0;
              element.style.setProperty('--pointer-x', `${-y * 24}deg`);
              element.style.setProperty('--pointer-y', `${x * 24}deg`);
            });
          };
          element.addEventListener('pointermove', move);
          element.addEventListener('pointerleave', leave);
          element.addEventListener('blur', leave);
          tracked.set(element, () => {
            leave();
            element.removeEventListener('pointermove', move);
            element.removeEventListener('pointerleave', leave);
            element.removeEventListener('blur', leave);
            element.classList.remove('project-depth');
            ['--pointer-x', '--pointer-y'].forEach(key => element.style.removeProperty(key));
          });
        });
      };
      refresh();
      const content = document.querySelector('#main');
      if (content) {
        mutations = new MutationObserver(refresh);
        mutations.observe(content, { childList: true, subtree: true });
      }
    };
    start();
    reduced.addEventListener('change', start);
    pointer.addEventListener('change', start);
    return () => {
      reset();
      reduced.removeEventListener('change', start);
      pointer.removeEventListener('change', start);
    };
  }, [page]);
}
