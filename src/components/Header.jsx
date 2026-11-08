import React from 'react';

export default function Header({ theme, onToggleTheme, onOpenCommandPalette }) {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a href="#top" className="brand" aria-label="Dzaki Naufal — Beranda">
          <span className="brand-mark">D</span>
          <span className="brand-title">Dzaki Naufal</span>
        </a>

        <div className="header-actions">
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

          <button
            type="button"
            className="theme-btn"
            onClick={onToggleTheme}
            aria-label={theme === 'dark' ? 'Beralih ke mode terang' : 'Beralih ke mode gelap'}
            title={theme === 'dark' ? 'Mode Terang' : 'Mode Gelap'}
          >
            {theme === 'dark' ? (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
