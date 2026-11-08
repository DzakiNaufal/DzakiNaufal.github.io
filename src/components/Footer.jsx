import React, { useState } from 'react';
import { content } from '../data/content';

export default function Footer({ lang }) {
  const [copied, setCopied] = useState(false);
  const t = content[lang].footer;

  const copyEmail = () => {
    navigator.clipboard.writeText('dzakinaufal976@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer className="site-footer" id="contact">
      <div className="container footer-inner">
        <div className="footer-left">
          <p className="footer-copy">{t.copy}</p>
        </div>

        <div className="footer-links">
          <button
            type="button"
            className="footer-link-btn"
            onClick={copyEmail}
            title="Salin alamat email"
          >
            {copied ? t.emailCopied : 'dzakinaufal976@gmail.com'}
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
            {t.backToTop}
          </a>
        </div>
      </div>
    </footer>
  );
}
