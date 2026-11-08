import React from 'react';

export default function HeroTile() {
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
        <h1 className="hero-headline">
          Membangun antarmuka web dan sistem logika dengan arsitektur yang terukur.
        </h1>
        <p className="hero-lede">
          Fokus pada kerapian struktur, modularitas komponen, serta pendalaman pemrograman Python dan dasar pembelajaran mesin melalui pendekatan yang bersahaja.
        </p>
      </div>

      <div className="hero-footer-actions">
        <a href="#projects" className="btn btn-primary">
          Lihat Proyek <span aria-hidden="true">↘</span>
        </a>
        <a href="#contact" className="btn btn-ghost">
          Hubungi Saya
        </a>
      </div>
    </section>
  );
}
