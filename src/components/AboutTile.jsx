import React from 'react';

export default function AboutTile() {
  return (
    <div className="bento-card col-span-7 about-tile" id="about">
      <div className="tile-header">
        <span className="kicker">Tentang Saya</span>
        <h2 className="tile-title">Perjalanan &amp; Minat Pemrograman</h2>
      </div>

      <div className="about-narrative">
        <p>
          Saya Dzaki Naufal, mahasiswa yang menyukai eksplorasi pemrograman. Ketertarikan saya bermula dari rasa ingin tahu tentang bagaimana data dan logika di balik layar bekerja menghubungkan ide menjadi perangkat lunak nyata.
        </p>
        <p>
          Saya terbiasa bekerja di lingkungan terminal Linux, menulis skrip Python untuk menyelesaikan persoalan komputasi praktis, serta merancang antarmuka web yang rapi dan nyaman digunakan. Saat ini saya juga aktif mendalami materi dasar pembelajaran mesin (machine learning) di bangku perkuliahan.
        </p>
      </div>

      <div className="about-meta-row">
        <span className="badge">Fokus: Web &amp; Python</span>
        <span className="badge">Eksplorasi: Machine Learning</span>
        <span className="badge">Prinsip: Sederhana &amp; Berbobot</span>
      </div>
    </div>
  );
}
