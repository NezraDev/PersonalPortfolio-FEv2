import { useEffect } from 'react';

/** Progressive enhancement: content stays visible when motion is unavailable. */
export function usePortfolioMotion(page: string) {
  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const animations = new Set<Animation>();
    let observer: IntersectionObserver | undefined;
    const reset = () => {
      observer?.disconnect();
      animations.forEach(animation => animation.cancel());
      animations.clear();
    };
    const start = () => {
      reset();
      if (preference.matches || !('IntersectionObserver' in window)) return;
      const items = document.querySelectorAll<HTMLElement>([
        '.route-heading-copy', '.editorial-intro-heading', '.editorial-bio > img',
        '.editorial-section-heading', '.editorial-project-image', '.editorial-project-copy',
        '.route-content--projects .project-gallery-image',
        '.editorial-disciplines > article', '.editorial-career-heading', '.editorial-outro > div',
      ].join(','));
      observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;
          const element = entry.target as HTMLElement;
          observer?.unobserve(element);
          if (!element.getClientRects().length) return;
          const image = element.matches('.editorial-project-image, .editorial-bio > img, .project-gallery-image');
          const description = element.matches('.editorial-project-copy');
          const discipline = element.matches('.editorial-disciplines > article');
          const siblingIndex = discipline ? Array.from(element.parentElement!.children).indexOf(element) : 0;
          const keyframes = image
            ? [{ clipPath: 'inset(0 0 12% 0)', opacity: .6 }, { clipPath: 'inset(0 0 0% 0)', opacity: 1 }]
            : [{ translate: '0 30px', opacity: .3 }, { translate: '0 0', opacity: 1 }];
          const animation = element.animate(keyframes, {
            duration: image ? 720 : 700,
            delay: description ? 150 : Math.min(siblingIndex * 70, 140),
            easing: 'cubic-bezier(0.16, 1, 0.3, 1)',
            fill: 'backwards',
          });
          animations.add(animation);
          animation.finished.then(() => animations.delete(animation)).catch(() => {});
        });
      }, { threshold: .15, rootMargin: '0px 0px -48px 0px' });
      items.forEach(element => observer?.observe(element));
    };
    start();
    preference.addEventListener('change', start);
    return () => { reset(); preference.removeEventListener('change', start); };
  }, [page]);
}
