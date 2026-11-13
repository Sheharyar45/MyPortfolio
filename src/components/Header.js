import React, { useEffect, useState } from 'react';

const sections = ['about', 'experience', 'projects', 'contact'];

export default function Header() {
  const [theme, setTheme] = useState(() => document.documentElement.dataset.theme || 'light');
  const [active, setActive] = useState('about');

  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)');
    const followSystem = () => {
      let saved;
      try { saved = localStorage.getItem('portfolio-theme'); } catch {}
      if (saved !== 'light' && saved !== 'dark') {
        const next = media.matches ? 'dark' : 'light';
        document.documentElement.dataset.theme = next;
        setTheme(next);
      }
    };
    media.addEventListener('change', followSystem);
    return () => media.removeEventListener('change', followSystem);
  }, []);

  useEffect(() => {
    let frame;
    const update = () => {
      let current = 'about';
      for (const id of sections) {
        if (document.getElementById(id)?.getBoundingClientRect().top <= 160) current = id;
      }
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 10) current = 'contact';
      setActive(current);
    };
    const onScroll = () => { cancelAnimationFrame(frame); frame = requestAnimationFrame(update); };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => { window.removeEventListener('scroll', onScroll); cancelAnimationFrame(frame); };
  }, []);

  const toggleTheme = () => {
    const next = theme === 'light' ? 'dark' : 'light';
    document.documentElement.dataset.theme = next;
    setTheme(next);
    try { localStorage.setItem('portfolio-theme', next); } catch {}
  };

  return (
    <header className="site-header">
      <nav className="page-shell nav-inner" aria-label="Main navigation">
        <a className="wordmark" href="#about" aria-label="Sheharyar Meghani, home">sm<span>.</span></a>
        <div className="nav-links">
          {sections.map(id => <a key={id} href={`#${id}`} aria-current={active === id ? 'location' : undefined}>{id[0].toUpperCase() + id.slice(1)}{id === 'contact' && <span aria-hidden="true"> ↗</span>}</a>)}
          <button className="theme-toggle" type="button" onClick={toggleTheme} aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`} title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}>
            {theme === 'light' ? <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="M20.8 13A9 9 0 0 1 11 3.2 9 9 0 1 0 20.8 13Z" /></svg> : <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><circle cx="12" cy="12" r="4" /><path d="M12 2v2m0 16v2M2 12h2m16 0h2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></svg>}
          </button>
        </div>
      </nav>
    </header>
  );
}
