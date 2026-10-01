/** Mobile menu, header shadow on scroll, and active-section highlighting. */
export function initNav() {
  const header = document.querySelector<HTMLElement>('[data-header]');
  const btn = document.querySelector<HTMLButtonElement>('[data-menu-btn]');
  const nav = document.querySelector<HTMLElement>('[data-nav]');
  if (!header || !btn || !nav) return;

  const setOpen = (open: boolean) => {
    btn.setAttribute('aria-expanded', String(open));
    nav.classList.toggle('is-open', open);
  };
  btn.addEventListener('click', () => setOpen(btn.getAttribute('aria-expanded') !== 'true'));
  nav.addEventListener('click', (e) => {
    if ((e.target as HTMLElement).closest('a')) setOpen(false);
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && btn.getAttribute('aria-expanded') === 'true') {
      setOpen(false);
      btn.focus();
    }
  });
  document.addEventListener('click', (e) => {
    if (!header.contains(e.target as Node)) setOpen(false);
  });

  const onScroll = () => header.classList.toggle('is-scrolled', window.scrollY > 8);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  // Highlight the link of the section currently in view
  const links = Array.from(nav.querySelectorAll<HTMLAnchorElement>('[data-nav-link]'));
  const map = new Map<string, HTMLAnchorElement>();
  links.forEach((l) => map.set(l.hash.slice(1), l));
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        links.forEach((l) => l.removeAttribute('aria-current'));
        map.get(entry.target.id)?.setAttribute('aria-current', 'true');
      });
    },
    { rootMargin: '-45% 0px -50% 0px' },
  );
  map.forEach((_, id) => {
    const section = document.getElementById(id);
    if (section) io.observe(section);
  });
}
