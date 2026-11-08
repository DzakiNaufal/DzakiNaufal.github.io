import React from 'react';

export default function PhilosophyTile() {
  const principles = [
    {
      num: '01',
      title: 'Arsitektur Minimalis',
      desc: 'Mengutamakan struktur kode yang bersih dan terukur daripada lapisan abstraksi yang rumit.',
    },
    {
      num: '02',
      title: 'Kejujuran Teknis',
      desc: 'Menampilkan data dan spesifikasi proyek nyata apa adanya tanpa klaim pemasaran berlebih.',
    },
    {
      num: '03',
      title: 'Kemandirian Pustaka',
      desc: 'Memanfaatkan standar web native secara maksimal sebelum mempertimbangkan dependensi pihak ketiga.',
    },
  ];

  return (
    <div className="bento-card col-span-12 philosophy-tile">
      <div className="tile-header">
        <span className="kicker">Prinsip Kerja</span>
        <h2 className="tile-title">Filosofi Rekayasa Perangkat Lunak</h2>
      </div>

      <div className="principles-grid">
        {principles.map((p) => (
          <div key={p.num} className="principle-card">
            <span className="principle-num font-mono">{p.num}</span>
            <h3 className="principle-title">{p.title}</h3>
            <p className="principle-desc">{p.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
