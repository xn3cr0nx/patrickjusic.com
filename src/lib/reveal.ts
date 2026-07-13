/**
 * Reveal-on-scroll helper.
 *
 * Adds the `.in` class to every `[data-reveal]` element as it enters the
 * viewport, driving the CSS transition defined in globals.css. If the user
 * prefers reduced motion, all elements are settled immediately (no observer).
 *
 * Usage (in any Astro page, after markup):
 *
 *   <script>
 *     import { initReveal } from '../lib/reveal';
 *     initReveal();
 *   </script>
 *
 * Idempotent and safe to call multiple times. Re-run it after injecting new
 * `[data-reveal]` nodes to observe them too.
 *
 * @param options.threshold  IntersectionObserver threshold (default 0.12)
 * @param options.rootMargin IntersectionObserver rootMargin (default "0px 0px -8% 0px")
 * @returns the IntersectionObserver, or null when motion is reduced / SSR.
 */
export function initReveal(options?: {
  threshold?: number;
  rootMargin?: string;
}): IntersectionObserver | null {
  if (typeof window === 'undefined' || typeof document === 'undefined') {
    return null;
  }

  const nodes = Array.from(
    document.querySelectorAll<HTMLElement>('[data-reveal]:not(.in)')
  );
  if (nodes.length === 0) return null;

  const prefersReduced = window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  ).matches;

  if (prefersReduced || !('IntersectionObserver' in window)) {
    nodes.forEach((el) => el.classList.add('in'));
    return null;
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          obs.unobserve(entry.target);
        }
      }
    },
    {
      threshold: options?.threshold ?? 0.12,
      rootMargin: options?.rootMargin ?? '0px 0px -8% 0px',
    }
  );

  nodes.forEach((el) => observer.observe(el));
  return observer;
}

/** Alias kept for convenience. */
export const init = initReveal;

export default initReveal;
