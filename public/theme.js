// Locale links carry the theme once; System still delegates to CSS and live OS changes.
(() => {
  const root = document.documentElement;
  const url = new URL(document.URL);
  const incomingTheme = url.searchParams.get('theme');
  if (incomingTheme === 'light' || incomingTheme === 'dark') {
    root.dataset.theme = incomingTheme;
  }
  if (url.searchParams.has('theme')) {
    url.searchParams.delete('theme');
    history.replaceState(history.state, '', `${url.pathname}${url.search}${url.hash}`);
  }

  document.addEventListener('DOMContentLoaded', () => {
    const control = document.querySelector('.site-header');
    if (!control) return;

    const buttons = control.querySelectorAll('[data-theme-choice]');
    const cycle = control.querySelector('[data-theme-cycle]');
    const localeLinks = control.querySelectorAll('[data-locale-choice], [data-locale-cycle]');
    const modes = ['system', 'light', 'dark'];
    let requestedTheme = root.dataset.theme ?? 'system';
    let themeTransition;

    const updateControls = () => {
      for (const item of buttons) {
        item.setAttribute('aria-pressed', String(item.dataset.themeChoice === requestedTheme));
      }
      cycle.dataset.themeMode = requestedTheme;
      const label = cycle.getAttribute(`data-label-${requestedTheme}`);
      cycle.setAttribute('aria-label', label);
      cycle.title = label;
      for (const link of localeLinks) {
        const target = new URL(link.href);
        if (requestedTheme === 'system') {
          target.searchParams.delete('theme');
        } else {
          target.searchParams.set('theme', requestedTheme);
        }
        link.setAttribute('href', `${target.pathname}${target.search}${target.hash}`);
      }
    };

    updateControls();
    control.querySelector('.theme-control').hidden = false;
    cycle.hidden = false;

    control.addEventListener('click', (event) => {
      const button = event.target.closest('button[data-theme-choice], button[data-theme-cycle]');
      if (!button || !control.contains(button)) return;
      const choice = button.hasAttribute('data-theme-cycle')
        ? modes[(modes.indexOf(requestedTheme) + 1) % modes.length]
        : button.dataset.themeChoice;
      if (!themeTransition && choice === requestedTheme) return;
      requestedTheme = choice;
      updateControls();

      const updateTheme = () => {
        if (choice === 'system') {
          root.removeAttribute('data-theme');
        } else {
          root.dataset.theme = choice;
        }
      };

      themeTransition?.skipTransition();
      if (!document.startViewTransition || matchMedia('(prefers-reduced-motion: reduce)').matches) {
        updateTheme();
        return;
      }

      // Include the header in the page snapshot so all theme surfaces fade together.
      root.classList.add('theme-transition');
      const transition = document.startViewTransition(updateTheme);
      themeTransition = transition;
      // Superseded theme transitions intentionally reject ready; other failures remain visible.
      transition.ready.catch((error) => {
        if (error.name !== 'AbortError') throw error;
      });
      transition.finished.then(() => {
        if (themeTransition === transition) {
          themeTransition = undefined;
          root.classList.remove('theme-transition');
        }
      });
    });
  });
})();
