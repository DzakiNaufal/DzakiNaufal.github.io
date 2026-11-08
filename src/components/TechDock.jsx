import React from 'react';
import { skillCategories } from '../data/projects';
import { content } from '../data/content';

export default function TechDock({ lang }) {
  const t = content[lang].skills;

  return (
    <section className="tech-dock-section" id="skills">
      <div className="dock-header">
        <span className="kicker">{t.kicker}</span>
        <h2 className="dock-title">{t.title}</h2>
        <p className="dock-desc">{t.desc}</p>
      </div>

      <div className="dock-grid">
        {skillCategories.map((cat, idx) => (
          <div key={idx} className="dock-column">
            <div className="dock-col-head">
              <span className="dock-cat-icon font-mono" aria-hidden="true">{cat.icon}</span>
              <span className="dock-cat-name font-mono">{cat.title[lang]}</span>
            </div>

            <div className="dock-items">
              {cat.items.map((item) => (
                <div key={item.name} className="dock-item">
                  <div className="dock-item-top">
                    <span className="dock-item-name">{item.name}</span>
                    <span className="badge badge-blue">{t.statusActive}</span>
                  </div>
                  <span className="dock-item-role">{item.role[lang]}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
