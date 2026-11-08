import React from 'react';
import { techStack } from '../data/projects';

export default function TechStackTile() {
  return (
    <div className="bento-card col-span-5 tech-tile" id="skills">
      <div className="tile-header">
        <span className="kicker">Teknologi</span>
        <h2 className="tile-title">Alat yang Sering Dipakai</h2>
      </div>

      <p className="tech-desc">
        Bahasa pemrograman, pustaka antarmuka, dan perangkat kerja yang aktif saya gunakan.
      </p>

      <div className="stack-badges">
        {techStack.map((tech) => (
          <span key={tech.name} className="badge badge-blue">
            {tech.name}
          </span>
        ))}
      </div>

      <div className="meta-list">
        <div className="meta-item">
          <span className="meta-key">Sistem Kerja</span>
          <span className="meta-val">Linux &amp; Terminal</span>
        </div>
        <div className="meta-item">
          <span className="meta-key">Editor Kode</span>
          <span className="meta-val">VS Code &amp; Acode</span>
        </div>
        <div className="meta-item">
          <span className="meta-key">Version Control</span>
          <span className="meta-val">Git &amp; GitHub</span>
        </div>
      </div>
    </div>
  );
}
