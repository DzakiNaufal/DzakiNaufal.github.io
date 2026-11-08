import React from 'react';

export default function TechDock() {
  const categories = [
    {
      title: 'Bahasa Inti',
      icon: '⚡',
      items: [
        { name: 'Python', role: 'Skrip CLI & Komputasi' },
        { name: 'JavaScript', role: 'Logika & Interaktivitas Web' },
      ],
    },
    {
      title: 'Antarmuka Web',
      icon: '◈',
      items: [
        { name: 'React', role: 'Komponen Modular & State' },
        { name: 'Vite', role: 'Modern Tooling & Bundling' },
        { name: 'HTML5 & CSS3', role: 'Semantik & Layout Responsif' },
      ],
    },
    {
      title: 'Sistem & Alur',
      icon: '⚙',
      items: [
        { name: 'Linux Terminal', role: 'Lingkungan Baris Perintah' },
        { name: 'Git & GitHub', role: 'Version Control & Workflow' },
      ],
    },
    {
      title: 'Eksplorasi Data',
      icon: '📊',
      items: [
        { name: 'NumPy', role: 'Komputasi Array Data' },
        { name: 'Pandas', role: 'Manipulasi Data Tabular' },
      ],
    },
  ];

  return (
    <section className="tech-dock-section" id="skills">
      <div className="dock-header">
        <span className="kicker">Keahlian &amp; Lingkungan</span>
        <h2 className="dock-title">Teknologi yang Digunakan</h2>
        <p className="dock-desc">
          Alat, bahasa pemrograman, dan pustaka yang aktif digunakan dalam perancangan antarmuka serta penulisan skrip.
        </p>
      </div>

      <div className="dock-grid">
        {categories.map((cat) => (
          <div key={cat.title} className="dock-column">
            <div className="dock-col-head">
              <span className="dock-cat-icon font-mono" aria-hidden="true">{cat.icon}</span>
              <span className="dock-cat-name font-mono">{cat.title}</span>
            </div>

            <div className="dock-items">
              {cat.items.map((item) => (
                <div key={item.name} className="dock-item">
                  <div className="dock-item-top">
                    <span className="dock-item-name">{item.name}</span>
                    <span className="badge badge-blue">Aktif</span>
                  </div>
                  <span className="dock-item-role">{item.role}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
