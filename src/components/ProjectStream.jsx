import React from 'react';

export default function ProjectStream({ projects, filter, onFilterChange, filterCounts }) {
  return (
    <section className="project-stream-section">
      <div className="stream-header">
        <div className="stream-header-text">
          <span className="kicker">Koleksi Proyek</span>
          <h2 className="stream-section-title">Eksplorasi &amp; Kode Sumber</h2>
          <p className="stream-section-desc">
            Dokumentasi berkas latihan logika dan tata letak dokumen yang telah diselesaikan.
          </p>
        </div>

        <div className="stream-filters" role="tablist" aria-label="Saring kategori proyek">
          <button
            type="button"
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => onFilterChange('all')}
            role="tab"
            aria-selected={filter === 'all'}
          >
            Semua ({filterCounts.all})
          </button>
          <button
            type="button"
            className={`filter-btn ${filter === 'python' ? 'active' : ''}`}
            onClick={() => onFilterChange('python')}
            role="tab"
            aria-selected={filter === 'python'}
          >
            Python ({filterCounts.python})
          </button>
          <button
            type="button"
            className={`filter-btn ${filter === 'web' ? 'active' : ''}`}
            onClick={() => onFilterChange('web')}
            role="tab"
            aria-selected={filter === 'web'}
          >
            Web ({filterCounts.web})
          </button>
        </div>
      </div>

      <div className="stream-list">
        {projects.map((proj) => (
          <article key={proj.id} className="stream-card">
            <div className="stream-card-meta">
              <span className="stream-num font-mono">{proj.id}</span>
              <span className="kicker">{proj.category}</span>
            </div>

            <div className="stream-card-body">
              <h3 className="stream-card-title">{proj.title}</h3>
              <p className="stream-card-desc">{proj.description}</p>

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
                Buka Studi Kasus <span aria-hidden="true">→</span>
              </a>
              {proj.sourceUrl && (
                <a
                  href={proj.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-ghost"
                  title="Lihat berkas sumber di GitHub"
                >
                  Kode <span aria-hidden="true">↗</span>
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
