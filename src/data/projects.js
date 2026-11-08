/**
 * Pusat Data Proyek (Single Source of Truth)
 * Menambah proyek baru di masa depan cukup menambahkan satu objek ke dalam array ini.
 */

export const projects = [
  {
    id: "01",
    title: "Kalkulator Sederhana",
    type: "python",
    category: "Python CLI",
    description:
      "Kalkulator antarmuka baris perintah untuk operasi aritmetika dan akar kuadrat. Melatih pemisahan fungsi modular, percabangan alur logika, dan validasi masukan terminal.",
    tags: ["Python", "CLI", "38 Baris", "Math Module"],
    featured: true,
    terminal: {
      command: "python3 kalkulator.py",
      banner: "==== Kalkulator Sederhana ====",
      inputs: ["Masukkan nilai a = 12", "Masukkan nilai b = 4", "Pilihan [1-5] = 4"],
      result: "Hasil: 12.0 / 4.0 = 3.0",
    },
    demoUrl: "https://dzakinaufal.github.io/projects/kalkulator.html",
    sourceUrl: "https://github.com/DzakiNaufal/DzakiNaufal.github.io/blob/main/projects/kalkulator.py",
  },
  {
    id: "02",
    title: "Cek Bilangan",
    type: "python",
    category: "Python Logika",
    description:
      "Fungsi penentu klasifikasi angka untuk menguji apakah suatu bilangan bernilai netral (nol), positif, atau negatif. Latihan evaluasi kondisi batas bertingkat secara terstruktur.",
    tags: ["Python", "Logika", "8 Baris"],
    featured: false,
    demoUrl: "https://dzakinaufal.github.io/projects/cek-bilangan.html",
    sourceUrl: "https://github.com/DzakiNaufal/DzakiNaufal.github.io/blob/main/projects/cek-bilangan.py",
  },
  {
    id: "03",
    title: "Tabel Semantik & Grafis Vektor",
    type: "web",
    category: "HTML5 Semantik",
    description:
      "Penyusunan dokumen web semantik: penyajian grafis vektor mandiri (inline SVG) serta perancangan tabel data terstruktur dengan caption, thead, tbody, dan atribut scope.",
    tags: ["HTML5", "Semantik", "SVG Vektor"],
    featured: false,
    demoUrl: "https://dzakinaufal.github.io/projects/tabel-gambar.html",
    sourceUrl: "https://github.com/DzakiNaufal/DzakiNaufal.github.io/blob/main/projects/tabel-gambar.html",
  },
];

export const techStack = [
  { name: "Python", category: "Core" },
  { name: "JavaScript", category: "Core" },
  { name: "React", category: "Frontend" },
  { name: "Vite", category: "Tooling" },
  { name: "HTML5", category: "Web" },
  { name: "CSS3", category: "Web" },
  { name: "Linux", category: "OS" },
  { name: "Git", category: "VCS" },
  { name: "NumPy", category: "ML" },
  { name: "Pandas", category: "ML" },
];
