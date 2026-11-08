/**
 * Pusat Data Proyek & Keahlian (Bilingual Project Data)
 */

export const projects = [
  {
    id: "01",
    type: "python",
    featured: true,
    title: {
      id: "Kalkulator Sederhana",
      en: "CLI Calculator",
    },
    category: {
      id: "Python CLI",
      en: "Python CLI",
    },
    description: {
      id: "Kalkulator antarmuka baris perintah untuk operasi aritmetika dan akar kuadrat. Melatih pemisahan fungsi modular, percabangan alur logika, dan penanganan masukan pengguna.",
      en: "A command-line calculator for arithmetic and square root operations. Demonstrating modular function separation, branching logic flow, and user input handling.",
    },
    highlights: [
      {
        title: { id: "Modularitas Fungsi", en: "Modular Functions" },
        sub: { id: "Pemisahan operasi ke fungsi def tambah, kurang, kali, bagi, dan akar.", en: "Separated operations into clean def functions." },
      },
      {
        title: { id: "Penanganan Masukan", en: "Input Handling" },
        sub: { id: "Konversi nilai eksplisit ke float dan int dengan modul math standar.", en: "Explicit casting to float and int with standard math module." },
      },
      {
        title: { id: "Catatan Evaluasi", en: "Evaluation Notes" },
        sub: { id: "Evaluasi penanganan ZeroDivisionError dan ValueError dengan try-except.", en: "Evaluation of ZeroDivisionError and ValueError handling via try-except." },
      },
    ],
    tags: ["Python", "CLI", "38 Baris", "Math Module"],
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
    type: "python",
    featured: false,
    title: {
      id: "Cek Bilangan",
      en: "Number Classifier",
    },
    category: {
      id: "Python Logika",
      en: "Python Logic",
    },
    description: {
      id: "Fungsi penentu kategori angka untuk menguji apakah suatu bilangan bernilai netral (nol), positif, atau negatif. Latihan evaluasi kondisi batas bertingkat secara terstruktur.",
      en: "A categorization function evaluating whether a number is neutral (zero), positive, or negative. Practice in structured boundary condition testing.",
    },
    tags: ["Python", "Logika", "8 Baris"],
    demoUrl: "https://dzakinaufal.github.io/projects/cek-bilangan.html",
    sourceUrl: "https://github.com/DzakiNaufal/DzakiNaufal.github.io/blob/main/projects/cek-bilangan.py",
  },
  {
    id: "03",
    type: "web",
    featured: false,
    title: {
      id: "Tabel Semantik & Grafis Vektor",
      en: "Semantic Table & Vector Graphics",
    },
    category: {
      id: "HTML5 Semantik",
      en: "Semantic HTML5",
    },
    description: {
      id: "Penyusunan dokumen web semantik: penyajian grafis vektor mandiri (inline SVG) serta perancangan tabel data terstruktur dengan caption, thead, tbody, dan atribut scope.",
      en: "Semantic web document construction: standalone vector graphics presentation (inline SVG) and accessible table design with caption, thead, tbody, and scope attributes.",
    },
    tags: ["HTML5", "Semantik", "SVG Vektor"],
    demoUrl: "https://dzakinaufal.github.io/projects/tabel-gambar.html",
    sourceUrl: "https://github.com/DzakiNaufal/DzakiNaufal.github.io/blob/main/projects/tabel-gambar.html",
  },
];

export const skillCategories = [
  {
    title: { id: "Bahasa Pemrograman", en: "Programming Languages" },
    icon: "⚡",
    items: [
      { name: "Python", role: { id: "Skrip CLI & Komputasi", en: "CLI Scripts & Computing" } },
      { name: "JavaScript", role: { id: "Logika & Interaktivitas Web", en: "Web Logic & Interactivity" } },
    ],
  },
  {
    title: { id: "Pengembangan Web", en: "Web Development" },
    icon: "◈",
    items: [
      { name: "React", role: { id: "Komponen Modular & State", en: "Modular Components & State" } },
      { name: "Vite", role: { id: "Modern Tooling & Bundling", en: "Modern Tooling & Bundling" } },
      { name: "HTML5 & CSS3", role: { id: "Semantik & Layout Responsif", en: "Semantics & Responsive Layout" } },
    ],
  },
  {
    title: { id: "Sistem & Tools", en: "Systems & Tools" },
    icon: "⚙",
    items: [
      { name: "Linux Terminal", role: { id: "Lingkungan Baris Perintah", en: "Command-Line Environments" } },
      { name: "Git & GitHub", role: { id: "Version Control & Workflow", en: "Version Control & Workflow" } },
    ],
  },
  {
    title: { id: "Data & Komputasi", en: "Data & Computing" },
    icon: "📊",
    items: [
      { name: "NumPy", role: { id: "Komputasi Array Data", en: "Array Computations" } },
      { name: "Pandas", role: { id: "Manipulasi Data Tabular", en: "Tabular Data Manipulation" } },
    ],
  },
];
