import React, { useState } from 'react';

export default function InteractiveTerminal() {
  const initialLogs = [
    {
      cmd: 'python3 kalkulator.py',
      banner: '==== Kalkulator Sederhana ====',
      lines: ['Masukkan nilai a = 12', 'Masukkan nilai b = 4', 'Pilihan [1-5]    = 4 (Bagi)'],
      result: 'Hasil dari 12.0 / 4.0 = 3.0',
    },
  ];

  const [logs, setLogs] = useState(initialLogs);

  const runSimulation = (scenario) => {
    let newEntry;
    if (scenario === 'sqrt') {
      newEntry = {
        cmd: 'python3 kalkulator.py',
        banner: '==== Kalkulator Sederhana ====',
        lines: ['Masukkan nilai a = 25', 'Pilihan [1-5]    = 5 (Akar a)'],
        result: 'Akar kuadrat dari 25.0 = 5.0',
      };
    } else if (scenario === 'add') {
      newEntry = {
        cmd: 'python3 kalkulator.py',
        banner: '==== Kalkulator Sederhana ====',
        lines: ['Masukkan nilai a = 18', 'Masukkan nilai b = 7', 'Pilihan [1-5]    = 1 (Tambah)'],
        result: 'Hasil dari 18.0 + 7.0 = 25.0',
      };
    } else {
      newEntry = {
        cmd: 'python3 kalkulator.py',
        banner: '==== Kalkulator Sederhana ====',
        lines: ['Masukkan nilai a = 48', 'Masukkan nilai b = 6', 'Pilihan [1-5]    = 4 (Bagi)'],
        result: 'Hasil dari 48.0 / 6.0 = 8.0',
      };
    }

    setLogs((prev) => [...prev.slice(-2), newEntry]);
  };

  const clearTerminal = () => {
    setLogs(initialLogs);
  };

  return (
    <div className="terminal-preview" aria-label="Simulasi Terminal Interaktif">
      <div className="terminal-bar">
        <div className="terminal-bar-left">
          <span className="terminal-dot red" aria-hidden="true"></span>
          <span className="terminal-dot yellow" aria-hidden="true"></span>
          <span className="terminal-dot green" aria-hidden="true"></span>
          <span className="terminal-title">cli-sandbox · python3</span>
        </div>
        <div className="terminal-actions-quick">
          <button
            type="button"
            className="term-quick-btn"
            onClick={() => runSimulation('div')}
            title="Uji coba pembagian"
          >
            48 / 6
          </button>
          <button
            type="button"
            className="term-quick-btn"
            onClick={() => runSimulation('sqrt')}
            title="Uji coba akar"
          >
            √ 25
          </button>
          <button
            type="button"
            className="term-quick-btn"
            onClick={() => runSimulation('add')}
            title="Uji coba penjumlahan"
          >
            18 + 7
          </button>
          <button
            type="button"
            className="term-quick-btn term-clear-btn"
            onClick={clearTerminal}
            title="Bersihkan layar"
          >
            ⟲
          </button>
        </div>
      </div>

      <div className="terminal-content" role="region" aria-live="polite">
        {logs.map((entry, idx) => (
          <div key={idx} className="terminal-log-block">
            <div className="term-cmd-line">
              <span className="term-prompt" aria-hidden="true">$</span>
              <span className="term-cmd">{entry.cmd}</span>
            </div>
            <div className="term-dim">{entry.banner}</div>
            {entry.lines.map((line, lIdx) => (
              <div key={lIdx} className="term-input-line">{line}</div>
            ))}
            <div className="term-res">{entry.result}</div>
          </div>
        ))}

        <div className="term-active-line">
          <span className="term-prompt" aria-hidden="true">$</span>
          <span className="terminal-cursor" aria-hidden="true">█</span>
        </div>
      </div>
    </div>
  );
}
