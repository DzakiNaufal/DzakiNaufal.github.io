import React, { useState, useEffect } from 'react';
import { content } from '../data/content';

export default function HeroSection({ lang }) {
  const [copied, setCopied] = useState(false);
  const [time, setTime] = useState('');
  const t = content[lang].hero;

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = {
        timeZone: 'Asia/Jakarta',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      };
      setTime(new Intl.DateTimeFormat('id-ID', options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const copyEmail = () => {
    navigator.clipboard.writeText('dzakinaufal976@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="hero-open-section" id="top">
      {/* Live Status Strip */}
      <div className="hero-status-strip">
        <span className="badge badge-status">
          <span className="status-indicator"></span>
          {t.status}
        </span>
        <span className="hero-status-divider" aria-hidden="true">·</span>
        <span className="hero-time-badge font-mono">
          <span className="hero-clock-icon" aria-hidden="true">⏱</span>
          {time || '00:00:00'} WIB
        </span>
        <span className="hero-status-divider" aria-hidden="true">·</span>
        <span className="hero-loc-badge font-mono">Jakarta, ID</span>
      </div>

      {/* Main Open Hero Content */}
      <div className="hero-open-content">
        <div className="hero-profile-row">
          <div className="hero-monogram-badge font-mono" aria-hidden="true">
            DN
          </div>
          <div className="hero-profile-titles">
            <h1 className="hero-open-name">{t.name}</h1>
            <p className="hero-open-role">{t.role}</p>
          </div>
        </div>

        <p className="hero-open-lede">{t.bio}</p>

        <div className="hero-open-actions">
          <a href="#projects" className="btn btn-primary">
            {t.ctaProjects} <span aria-hidden="true">↘</span>
          </a>
          <button
            type="button"
            className="btn btn-ghost"
            onClick={copyEmail}
            title="Salin alamat email"
          >
            {copied ? t.emailCopied : `${t.ctaEmail} ✉`}
          </button>
          <a
            href="https://github.com/DzakiNaufal"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost"
          >
            {t.ctaGithub} <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
