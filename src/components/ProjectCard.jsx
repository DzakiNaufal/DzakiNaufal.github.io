import React from 'react';
import InteractiveTerminal from './InteractiveTerminal';

export default function ProjectCard({ project }) {
  if (project.featured) {
    return (
      <article className="bento-card col-span-12 project-card-featured" id="projects">
        <div className="card-top">
          <span className="font-mono project-num">{project.id}</span>
          <span className="kicker">{project.category}</span>
        </div>

        <div className="featured-layout">
          <div className="featured-info">
            <h2 className="project-title-lg">{project.title}</h2>
            <p className="project-desc">{project.description}</p>

            <div className="project-tags">
              {project.tags.map((tag) => (
                <span key={tag} className="badge badge-blue">
                  {tag}
                </span>
              ))}
            </div>

            <div className="project-actions">
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

          <InteractiveTerminal />
        </div>
      </article>
    );
  }

  return (
    <article className="bento-card col-span-6 project-card-standard">
      <div className="card-top">
        <span className="font-mono project-num">{project.id}</span>
        <span className="kicker">{project.category}</span>
      </div>

      <div className="standard-info">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-desc">{project.description}</p>
      </div>

      <div className="standard-foot">
        <div className="project-tags">
          {project.tags.map((tag) => (
            <span key={tag} className="badge badge-blue">
              {tag}
            </span>
          ))}
        </div>

        <div className="project-actions">
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost"
          >
            Buka Studi Kasus <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </article>
  );
}
