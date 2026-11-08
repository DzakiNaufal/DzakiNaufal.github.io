import React from 'react';
import { content } from '../data/content';

export default function ProjectStream({ projects, filter, onFilterChange, filterCounts, lang }) {
  const t = content[lang].projectsHeader;

  return (
    <section className="project-stream-section">
      <div className="stream-header">
        <div className="stream-header-text">
          <span className="kicker">{t.kicker}</span>
          <h2 className="stream-section-title">{t.title}</h2>
          <p className="stream-section-desc">{t.desc}</p>
        </div>

        <div className="stream-filters" role="tablist" aria-label="Saring kategori proyek">
          <button
            type="button"
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => onFilterChange('all')}
            role="tab"
            aria-selected={filter === 'all'}
          >
            {t.filterAll} ({filterCounts.all})
          </button>
          <button
            type="button"
            className={`filter-btn ${filter === 'python' ? 'active' : ''}`}
            onClick={() => onFilterChange('python')}
            role="tab"
            aria-selected={filter === 'python'}
          >
            {t.filterPython} ({filterCounts.python})
          </button>
          <button
            type="button"
            className={`filter-btn ${filter === 'web' ? 'active' : ''}`}
            onClick={() => onFilterChange('web')}
            role="tab"
            aria-selected={filter === 'web'}
          >
            {t.filterWeb} ({filterCounts.web})
          </button>
        </div>
      </div>

      <div className="stream-list">
        {projects.map((proj) => (
          <article key={proj.id} className="stream-card">
            <div className="stream-card-meta">
              <span className="stream-num font-mono">{proj.id}</span>
              <span className="kicker">{proj.category[lang]}</span>
            </div>

            <div className="stream-card-body">
              <h3 className="stream-card-title">{proj.title[lang]}</h3>
              <p className="stream-card-desc">{proj.description[lang]}</p>

              <div className="stream-card-tags">
                {proj.tags.map((tag) => (
                  <span key={tag} className="badge badge-blue">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="stream-card-actions">
              <a
                href={proj.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost"
              >
                {t.btnDemo} <span aria-hidden="true">→</span>
              </a>
              {proj.sourceUrl && (
                <a
                  href={proj.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-ghost"
                  title="Lihat berkas sumber di GitHub"
                >
                  {t.btnSource} <span aria-hidden="true">↗</span>
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
