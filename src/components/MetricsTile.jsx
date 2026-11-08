import React from 'react';

export default function MetricsTile() {
  const metrics = [
    { value: '< 200 KB', label: 'Ukuran Bundle Total', detail: 'Kompilasi Vite' },
    { value: '60 FPS', label: 'Transisi Taktil GPU', detail: 'Murni CSS Transform' },
    { value: '0 KB', label: 'Pustaka Eksternal Bloat', detail: 'React Murni' },
  ];

  return (
    <div className="bento-card col-span-4 metrics-tile">
      <div className="tile-header">
        <span className="kicker">Efisiensi</span>
        <h2 className="tile-title">Metrik Rekayasa</h2>
      </div>

      <div className="metrics-grid">
        {metrics.map((m, idx) => (
          <div key={idx} className="metric-box">
            <span className="metric-val font-mono">{m.value}</span>
            <span className="metric-label">{m.label}</span>
            <span className="metric-detail font-mono">{m.detail}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
