/**
 * Applies the stored theme before first paint.
 *
 * This runs synchronously in <head>, ahead of hydration, which is what stops
 * the light-theme flash the previous build had (it hardcoded
 * data-theme="dark" during SSR and then suppressed the hydration warning).
 */
const script = `
(function () {
  try {
    var stored = localStorage.getItem('theme');
    var theme = stored === 'light' || stored === 'dark'
      ? stored
      : (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
    document.documentElement.setAttribute('data-theme', theme);
  } catch (e) {
    document.documentElement.setAttribute('data-theme', 'dark');
  }
})();
`;

export function ThemeScript() {
  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}
