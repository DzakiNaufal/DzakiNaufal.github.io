import React, { useState } from 'react';
import { content } from '../data/content';

export default function Header({ theme, onToggleTheme, lang, onToggleLang, onOpenCommandPalette }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const t = content[lang].nav;

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="site-header">
      <div className="container header-inner">
        {/* Brand */}
        <a href="#top" className="brand" aria-label="Dzaki Naufal — Beranda">
          <span className="brand-mark font-mono">DN</span>
          <span className="brand-title">Dzaki Naufal</span>
        </a>

        {/* Desktop Direct Navigation */}
        <nav className="site-nav" aria-label="Navigasi Utama">
          <a href="#projects" className="nav-link" onClick={handleNavClick}>
            {t.projects}
          </a>
          <a href="#skills" className="nav-link" onClick={handleNavClick}>
            {t.skills}
          </a>
          <a href="#about" className="nav-link" onClick={handleNavClick}>
            {t.about}
          </a>
          <a href="#contact" className="nav-link" onClick={handleNavClick}>
            {t.contact}
          </a>
        </nav>

        {/* Right Actions */}
        <div className="header-actions">
          {/* Language Switcher */}
          <button
            type="button"
            className="lang-btn font-mono"
            onClick={onToggleLang}
            aria-label={lang === 'id' ? 'Switch to English' : 'Ganti ke Bahasa Indonesia'}
            title={lang === 'id' ? 'Switch to English' : 'Ganti ke Bahasa Indonesia'}
          >
            {lang === 'id' ? 'EN' : 'ID'}
          </button>

          {/* Theme Toggle */}
          <button
            type="button"
            className="theme-btn"
            onClick={onToggleTheme}
            aria-label={theme === 'dark' ? 'Mode Terang' : 'Mode Gelap'}
            title={theme === 'dark' ? 'Mode Terang' : 'Mode Gelap'}
          >
            {theme === 'dark' ? (
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
              </svg>
            ) : (
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>

          {/* Command Palette Trigger */}
          <button
            type="button"
            className="cmd-trigger"
            onClick={onOpenCommandPalette}
            aria-label="Buka menu perintah cepat"
            title="Pintasan keyboard: K"
          >
            <span className="cmd-icon">⌘</span>
            <span className="cmd-label">Menu</span>
            <span className="kbd">K</span>
          </button>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            className={`mobile-menu-btn ${isMobileMenuOpen ? 'open' : ''}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Buka menu navigasi ponsel"
            aria-expanded={isMobileMenuOpen}
          >
            <span className="ham-line"></span>
            <span className="ham-line"></span>
          </button>
        </div>
      </div>

      {/* Mobile Slide-Down Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="mobile-dropdown-menu">
          <nav className="mobile-nav-links">
            <a href="#projects" className="mobile-nav-item" onClick={handleNavClick}>
              {t.projects}
            </a>
            <a href="#skills" className="mobile-nav-item" onClick={handleNavClick}>
              {t.skills}
            </a>
            <a href="#about" className="mobile-nav-item" onClick={handleNavClick}>
              {t.about}
            </a>
            <a href="#contact" className="mobile-nav-item" onClick={handleNavClick}>
              {t.contact}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
