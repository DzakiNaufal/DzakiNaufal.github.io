import React, { useState } from 'react';

export default function Footer() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('dzakinaufal976@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer className="site-footer" id="contact">
      <div className="container footer-inner">
        <div className="footer-left">
          <p className="footer-copy">© 2026 Dzaki Naufal</p>
          <p className="footer-sub">Vite · React · Dark Tech Architecture</p>
        </div>

        <div className="footer-links">
          <button
            type="button"
            className="footer-link-btn"
            onClick={copyEmail}
            title="Klik untuk menyalin email"
          >
            {copied ? 'Tersalin ✓' : 'dzakinaufal976@gmail.com'}
          </button>
          <span className="footer-divider" aria-hidden="true">·</span>
          <a
            href="https://github.com/DzakiNaufal"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            GitHub <span aria-hidden="true">↗</span>
          </a>
          <span className="footer-divider" aria-hidden="true">·</span>
          <a href="#top" className="footer-link">
            Ke Atas ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
