import React, { useEffect } from 'react';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function App() {
  useEffect(() => {
    const section = { '/experience': 'experience', '/projects': 'projects', '/contact': 'contact' }[window.location.pathname];
    if (section) window.history.replaceState(null, '', `/#${section}`);
    const target = section || window.location.hash.slice(1);
    if (target) document.getElementById(target)?.scrollIntoView({ behavior: 'instant' });
  }, []);
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Header />
      <main id="main" className="page-shell"><About /><Experience /><Projects /><Contact /></main>
      <footer className="site-footer page-shell">
        <a className="footer-name" href="#about">Sheharyar Meghani</a>
        <p>Software engineer · Toronto, Canada</p>
        <a href="#about">Back to top <span aria-hidden="true">↑</span></a>
      </footer>
    </>
  );
}
