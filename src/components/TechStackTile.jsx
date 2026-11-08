import React from 'react';
import { techStack } from '../data/projects';

export default function TechStackTile() {
  return (
    <div className="bento-card col-span-4 tech-tile">
      <div className="tile-header">
        <span className="kicker">Spesifikasi</span>
        <h2 className="tile-title">Keahlian &amp; Lingkungan</h2>
      </div>

      <div className="stack-badges">
        {techStack.map((tech) => (
          <span key={tech.name} className="badge badge-blue">
            {tech.name}
          </span>
        ))}
      </div>

      <div className="meta-list">
        <div className="meta-item">
          <span className="meta-key">Fokus</span>
          <span className="meta-val">Web · Python · ML</span>
        </div>
        <div className="meta-item">
          <span className="meta-key">Workstation</span>
          <span className="meta-val">Linux &amp; VS Code</span>
        </div>
        <div className="meta-item">
          <span className="meta-key">Lokasi</span>
          <span className="meta-val">Indonesia</span>
        </div>
      </div>
    </div>
  );
}
