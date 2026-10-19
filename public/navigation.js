// Native anchor scrolling stays below the pinned header as its rows and fonts resize.
(() => {
  const header = document.querySelector('.site-header');
  if (!header) return;
  const root = document.documentElement;
  root.style.setProperty('--header-height', `${header.getBoundingClientRect().height}px`);
  new ResizeObserver(() => {
    root.style.setProperty('--header-height', `${header.getBoundingClientRect().height}px`);
  }).observe(header);
})();
