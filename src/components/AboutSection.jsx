import React from 'react';

export default function AboutSection() {
  return (
    <section className="about-split-section" id="about">
      <div className="about-split-grid">
        {/* Left Column: Editorial Statement & Highlights */}
        <div className="about-left-col">
          <span className="kicker">Tentang Pengembang</span>
          <h2 className="about-quote">
            Menyukai pemrograman yang berakar pada kesederhanaan logika, arsitektur bersih, dan kejujuran teknis.
          </h2>

          <div className="about-facts-list">
            <div className="fact-row">
              <span className="fact-label font-mono">Fokus</span>
              <span className="fact-value">Web &amp; Python Programming</span>
            </div>
            <div className="fact-row">
              <span className="fact-label font-mono">Studi</span>
              <span className="fact-value">Pembelajaran Mesin (Matkul ML)</span>
            </div>
            <div className="fact-row">
              <span className="fact-label font-mono">Lingkungan</span>
              <span className="fact-value font-mono">Linux Workstation</span>
            </div>
          </div>
        </div>

        {/* Right Column: Grounded Human Narrative */}
        <div className="about-right-col">
          <div className="about-prose">
            <p>
              Saya Dzaki Naufal. Ketertarikan saya pada dunia komputasi bermula dari rasa penasaran terhadap bagaimana baris-baris kode di balik layar bekerja menghubungkan ide menjadi perangkat lunak nyata.
            </p>
            <p>
              Dalam keseharian, saya terbiasa bekerja di lingkungan terminal Linux, menulis skrip Python untuk menyelesaikan persoalan komputasi praktis, serta merancang antarmuka web yang rapi dan nyaman digunakan tanpa kerumitan yang tidak perlu.
            </p>
            <p>
              Saat ini saya juga aktif mendalami materi dasar pembelajaran mesin (machine learning) di bangku perkuliahan — mengeksplorasi konsep pemodelan matematis berbasis data, operasi array NumPy, serta analisis data tabular menggunakan Pandas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
