import React from 'react';
import InteractiveTerminal from './InteractiveTerminal';

export default function ProjectStudio({ project }) {
  if (!project) return null;

  return (
    <section className="studio-window" id="projects">
      {/* Studio Window Header Bar */}
      <div className="studio-header">
        <div className="studio-header-left">
          <div className="window-dots" aria-hidden="true">
            <span className="dot dot-red"></span>
            <span className="dot dot-yellow"></span>
            <span className="dot dot-green"></span>
          </div>
          <span className="studio-file-tab font-mono">
            <span className="file-icon" aria-hidden="true">py</span>
            kalkulator.py
          </span>
          <span className="badge badge-blue">{project.category}</span>
        </div>

        <div className="studio-header-right">
          <span className="badge font-mono">01 · Unggulan</span>
        </div>
      </div>

      {/* Studio Window Body: Split Panels */}
      <div className="studio-body">
        {/* Left: Project Architecture & Technical Notes */}
        <div className="studio-spec-panel">
          <div className="studio-title-group">
            <span className="kicker">Proyek Pilihan 01</span>
            <h2 className="studio-title">{project.title}</h2>
          </div>

          <p className="studio-desc">{project.description}</p>

          <div className="studio-highlights">
            <div className="highlight-item">
              <span className="highlight-bullet font-mono">01</span>
              <div className="highlight-text">
                <span className="highlight-title">Modularitas Fungsi</span>
                <span className="highlight-sub">Operasi terpisah ke dalam def tambah, kurang, kali, bagi, dan akar.</span>
              </div>
            </div>
            <div className="highlight-item">
              <span className="highlight-bullet font-mono">02</span>
              <div className="highlight-text">
                <span className="highlight-title">Penanganan Tipe Data</span>
                <span className="highlight-sub">Input dikonversi eksplisit ke float dan int dengan modul math standar.</span>
              </div>
            </div>
            <div className="highlight-item">
              <span className="highlight-bullet font-mono">03</span>
              <div className="highlight-text">
                <span className="highlight-title">Catatan Pengembangan</span>
                <span className="highlight-sub">Evaluasi penanganan ZeroDivisionError dan ValueError dengan try-except.</span>
              </div>
            </div>
          </div>

          <div className="studio-tags">
            {project.tags.map((tag) => (
              <span key={tag} className="badge badge-blue">
                {tag}
              </span>
            ))}
          </div>

          <div className="studio-actions">
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Buka Studi Kasus <span aria-hidden="true">→</span>
            </a>
            {project.sourceUrl && (
              <a
                href={project.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost"
              >
                Kode Sumber <span aria-hidden="true">↗</span>
              </a>
            )}
          </div>
        </div>

        {/* Right: Live Interactive Terminal Sandbox */}
        <div className="studio-terminal-panel">
          <InteractiveTerminal />
        </div>
      </div>
    </section>
  );
}
