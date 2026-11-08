import React, { useState, useEffect, useCallback, useMemo } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ProjectStudio from './components/ProjectStudio';
import ProjectStream from './components/ProjectStream';
import TechDock from './components/TechDock';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';
import CommandPalette from './components/CommandPalette';
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

  const featuredProject = useMemo(() => {
    return projects.find((p) => p.featured) || projects[0];
  }, []);

  const secondaryProjects = useMemo(() => {
    return projects.filter((p) => !p.featured);
  }, []);

  const filteredStream = useMemo(() => {
    if (filter === 'all') return secondaryProjects;
    return secondaryProjects.filter((p) => p.type === filter);
  }, [filter, secondaryProjects]);

  const filterCounts = useMemo(() => {
    return {
      all: secondaryProjects.length,
      python: secondaryProjects.filter((p) => p.type === 'python').length,
      web: secondaryProjects.filter((p) => p.type === 'web').length,
    };
  }, [secondaryProjects]);

  return (
    <div className="app-shell">
      <Header
        theme={theme}
        onToggleTheme={toggleTheme}
        onOpenCommandPalette={() => setIsCmdOpen(true)}
      />

      <main className="container" id="main">
        {/* 1. Open Canvas Hero with Integrated Live Clock & Status Strip */}
        <HeroSection />

        {/* 2. Studio Application Window: Featured Project with Interactive Terminal */}
        <ProjectStudio project={featuredProject} />

        {/* 3. Asymmetrical Project Stream with Category Filtering */}
        <ProjectStream
          projects={filteredStream}
          filter={filter}
          onFilterChange={setFilter}
          filterCounts={filterCounts}
        />

        {/* 4. Categorized Developer Tool Dock */}
        <TechDock />

        {/* 5. Editorial Split-Column Narrative: Real Human Story */}
        <AboutSection />
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
