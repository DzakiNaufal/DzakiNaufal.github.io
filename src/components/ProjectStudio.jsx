import React from 'react';
import InteractiveTerminal from './InteractiveTerminal';
import { content } from '../data/content';

export default function ProjectStudio({ project, lang }) {
  if (!project) return null;
  const t = content[lang].projectsHeader;

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
          <span className="badge badge-blue">{project.category[lang]}</span>
        </div>

        <div className="studio-header-right">
          <span className="badge font-mono">01</span>
        </div>
      </div>

      {/* Studio Window Body: Split Panels */}
      <div className="studio-body">
        {/* Left: Project Architecture & Technical Notes */}
        <div className="studio-spec-panel">
          <div className="studio-title-group">
            <span className="kicker">01 · {project.category[lang]}</span>
            <h2 className="studio-title">{project.title[lang]}</h2>
          </div>

          <p className="studio-desc">{project.description[lang]}</p>

          <div className="studio-highlights">
            {project.highlights.map((h, idx) => (
              <div key={idx} className="highlight-item">
                <span className="highlight-bullet font-mono">0{idx + 1}</span>
                <div className="highlight-text">
                  <span className="highlight-title">{h.title[lang]}</span>
                  <span className="highlight-sub">{h.sub[lang]}</span>
                </div>
              </div>
            ))}
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
              {t.btnDemo} <span aria-hidden="true">→</span>
            </a>
            {project.sourceUrl && (
              <a
                href={project.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost"
              >
                {t.btnSource} <span aria-hidden="true">↗</span>
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
