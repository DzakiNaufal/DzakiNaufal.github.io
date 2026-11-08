import React, { useState, useEffect, useCallback, useMemo } from 'react';
import Header from './components/Header';
import HeroTile from './components/HeroTile';
import ClockTile from './components/ClockTile';
import FocusTile from './components/FocusTile';
import TechStackTile from './components/TechStackTile';
import MetricsTile from './components/MetricsTile';
import ProjectCard from './components/ProjectCard';
import PhilosophyTile from './components/PhilosophyTile';
import CommandPalette from './components/CommandPalette';
import Footer from './components/Footer';
import { projects } from './data/projects';

export default function App() {
  const [theme, setTheme] = useState(() => {
    return document.documentElement.dataset.theme || 'dark';
  });
  const [isCmdOpen, setIsCmdOpen] = useState(false);
  const [filter, setFilter] = useState('all');

  const applyTheme = useCallback((nextTheme) => {
    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
    try {
      localStorage.setItem('dzakk-p2-theme', nextTheme);
      const meta = document.querySelector('meta[name="theme-color"]');
      if (meta) {
        meta.setAttribute('content', nextTheme === 'dark' ? '#09090b' : '#fafafa');
      }
    } catch (e) {}
  }, []);

  const toggleTheme = useCallback(() => {
    applyTheme(theme === 'dark' ? 'light' : 'dark');
  }, [theme, applyTheme]);

  // Global keyboard shortcut for Command Palette (K or Cmd+K / Ctrl+K)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (['INPUT', 'TEXTAREA'].includes(document.activeElement?.tagName)) return;

      if ((e.key === 'k' || e.key === 'K') && !e.metaKey && !e.ctrlKey) {
        e.preventDefault();
        setIsCmdOpen((prev) => !prev);
      } else if ((e.metaKey || e.ctrlKey) && (e.key === 'k' || e.key === 'K')) {
        e.preventDefault();
        setIsCmdOpen((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const filteredProjects = useMemo(() => {
    if (filter === 'all') return projects;
    return projects.filter((p) => p.type === filter);
  }, [filter]);

  const filterCounts = useMemo(() => {
    return {
      all: projects.length,
      python: projects.filter((p) => p.type === 'python').length,
      web: projects.filter((p) => p.type === 'web').length,
    };
  }, []);

  return (
    <div className="app-shell">
      <Header
        theme={theme}
        onToggleTheme={toggleTheme}
        onOpenCommandPalette={() => setIsCmdOpen(true)}
      />

      <main className="container" id="main">
        <div className="bento-grid">
          {/* Row 1: Profile & Realtime Workstation Clock */}
          <HeroTile />
          <ClockTile />

          {/* Row 2: ML Research Focus, Technical Stack, & System Metrics */}
          <FocusTile />
          <TechStackTile />
          <MetricsTile />

          {/* Row 3: Projects Filter Bar */}
          <div className="project-section-head">
            <h2 className="project-section-title">Koleksi Proyek Terapan</h2>
            <div className="project-filters" role="tablist" aria-label="Saring kategori proyek">
              <button
                type="button"
                className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
                onClick={() => setFilter('all')}
                role="tab"
                aria-selected={filter === 'all'}
              >
                Semua ({filterCounts.all})
              </button>
              <button
                type="button"
                className={`filter-btn ${filter === 'python' ? 'active' : ''}`}
                onClick={() => setFilter('python')}
                role="tab"
                aria-selected={filter === 'python'}
              >
                Python ({filterCounts.python})
              </button>
              <button
                type="button"
                className={`filter-btn ${filter === 'web' ? 'active' : ''}`}
                onClick={() => setFilter('web')}
                role="tab"
                aria-selected={filter === 'web'}
              >
                Web ({filterCounts.web})
              </button>
            </div>
          </div>

          {/* Row 4: Filtered Projects Cards with Interactive Terminal */}
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}

          {/* Row 5: Engineering Principles & Philosophy */}
          <PhilosophyTile />
        </div>
      </main>

      <Footer />

      <CommandPalette
        isOpen={isCmdOpen}
        onClose={() => setIsCmdOpen(false)}
        theme={theme}
        onToggleTheme={toggleTheme}
      />
    </div>
  );
}
