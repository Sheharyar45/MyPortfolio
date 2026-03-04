import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { to: '/', label: 'About' },
  { to: '/experience', label: 'Experience' },
  { to: '/projects', label: 'Projects' },
  { to: '/contact', label: 'Contact' },
];

const Header = () => {
  const location = useLocation();

  return (
    <nav className="fixed top-0 z-50 w-full bg-black/90 backdrop-blur-md border-b border-teal-900/40 font-mono">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-8 h-16">
        {/* Logo / Name */}
        <Link to="/" className="text-white font-bold text-lg md:text-xl tracking-wide hover:text-teal-400 transition-colors">
          Sheharyar<span className="text-teal-400">.</span>
        </Link>

        {/* Nav Links */}
        <div className="flex items-center gap-1 md:gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`relative px-2 md:px-3 py-1 text-sm md:text-base transition-colors duration-300 ${
                location.pathname === link.to
                  ? 'text-teal-400'
                  : 'text-gray-300 hover:text-white'
              } nav-link`}
            >
              {link.label}
              <span
                className={`absolute bottom-0 left-0 h-0.5 bg-teal-400 transition-all duration-300 ${
                  location.pathname === link.to ? 'w-full' : 'w-0'
                } nav-underline`}
              />
            </Link>
          ))}

          {/* Resume Button */}
          <a
            href="/Sheharyar_Resume_MLE (1).pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 md:ml-4 px-4 py-1.5 text-sm font-medium text-teal-400 border border-teal-400 rounded-lg hover:bg-teal-400 hover:text-black transition-all duration-300"
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
