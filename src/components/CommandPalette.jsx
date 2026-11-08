import React, { useState, useEffect, useRef } from 'react';

export default function CommandPalette({ isOpen, onClose, theme, onToggleTheme }) {
  const [query, setQuery] = useState('');
  const [copied, setCopied] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setCopied(false);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('dzakinaufal976@gmail.com');
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
      onClose();
    }, 1200);
  };

  const commands = [
    {
      id: 'copy-email',
      icon: '✉',
      title: copied ? 'Email Berhasil Disalin! ✓' : 'Salin Alamat Email',
      subtitle: 'dzakinaufal976@gmail.com',
      action: handleCopyEmail,
    },
    {
      id: 'github',
      icon: '↗',
      title: 'Kunjungi Profil GitHub',
      subtitle: 'github.com/DzakiNaufal',
      action: () => {
        window.open('https://github.com/DzakiNaufal', '_blank');
        onClose();
      },
    },
    {
      id: 'toggle-theme',
      icon: theme === 'dark' ? '☼' : '☾',
      title: theme === 'dark' ? 'Beralih ke Mode Terang (Crisp Light)' : 'Beralih ke Mode Gelap (Dark Zinc)',
      subtitle: 'Pengaturan tema antarmuka',
      action: () => {
        onToggleTheme();
        onClose();
      },
    },
    {
      id: 'goto-projects',
      icon: '↘',
      title: 'Lompat ke Daftar Proyek',
      subtitle: 'Kalkulator, Cek Bilangan, Tabel HTML',
      action: () => {
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      },
    },
  ];

  const filtered = commands.filter((cmd) =>
    (cmd.title + ' ' + cmd.subtitle).toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="cmd-backdrop" onClick={onClose}>
      <div
        className="cmd-dialog"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label="Menu Perintah Cepat"
      >
        <div className="cmd-search-bar">
          <span className="cmd-search-icon" aria-hidden="true">⌘</span>
          <input
            ref={inputRef}
            type="text"
            className="cmd-input"
            placeholder="Cari perintah atau tindakan..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <span className="kbd">ESC</span>
        </div>

        <ul className="cmd-list">
          {filtered.length === 0 ? (
            <li className="cmd-empty">Tidak ada perintah yang cocok.</li>
          ) : (
            filtered.map((cmd) => (
              <li key={cmd.id}>
                <button
                  type="button"
                  className="cmd-item"
                  onClick={cmd.action}
                >
                  <span className="cmd-item-icon" aria-hidden="true">{cmd.icon}</span>
                  <div className="cmd-item-text">
                    <span className="cmd-item-title">{cmd.title}</span>
                    <span className="cmd-item-sub">{cmd.subtitle}</span>
                  </div>
                </button>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
}
