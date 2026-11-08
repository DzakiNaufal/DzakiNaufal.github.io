import React, { useState } from 'react';

export default function HeroTile() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('dzakinaufal976@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="bento-card col-span-8 hero-tile" id="top">
      <div className="hero-top">
        <span className="badge badge-status">
          <span className="status-indicator"></span>
          Terbuka untuk proyek
        </span>
        <span className="kicker">Portofolio · 2026</span>
      </div>

      <div className="hero-content">
        <span className="hero-greeting kicker">Halo, saya</span>
        <h1 className="hero-name">Dzaki Naufal</h1>
        <p className="hero-role">Web Developer &amp; Pemrogram Python</p>
        <p className="hero-lede">
          Saya merancang antarmuka web yang rapi, cepat, dan mudah digunakan — sembari mendalami pemrograman Python serta konsep dasar pembelajaran mesin melalui perkuliahan dan proyek terapan.
        </p>
      </div>

      <div className="hero-footer-actions">
        <a href="#projects" className="btn btn-primary">
          Lihat Proyek <span aria-hidden="true">↘</span>
        </a>
        <button
          type="button"
          className="btn btn-ghost"
          onClick={copyEmail}
          title="Salin alamat email"
        >
          {copied ? 'Email Disalin ✓' : 'Salin Email ✉'}
        </button>
        <a
          href="https://github.com/DzakiNaufal"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-ghost"
        >
          GitHub <span aria-hidden="true">↗</span>
        </a>
      </div>
    </section>
  );
}
