import React from 'react';

export default function FocusTile() {
  const topics = [
    { title: 'Regresi & Klasifikasi', sub: 'Model Prediksi Dasar' },
    { title: 'Manipulasi Data Tabular', sub: 'NumPy & Pandas Array' },
    { title: 'Evaluasi Metrik Model', sub: 'Akurasi, Presisi, MSE' },
  ];

  return (
    <div className="bento-card col-span-4 focus-tile">
      <div className="tile-header">
        <span className="kicker">Fokus Kajian</span>
        <h2 className="tile-title">Pembelajaran Mesin</h2>
      </div>

      <p className="focus-desc">
        Pendalaman materi kuliah dan eksplorasi mandiri model komputasi berbasis data.
      </p>

      <ul className="focus-list">
        {topics.map((t, idx) => (
          <li key={idx} className="focus-item">
            <span className="focus-num font-mono">0{idx + 1}</span>
            <div className="focus-text">
              <span className="focus-topic-title">{t.title}</span>
              <span className="focus-topic-sub">{t.sub}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
