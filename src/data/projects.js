/**
 * Pusat Data Proyek & Keahlian (Bilingual Project Data)
 */

export const projects = [
  {
    id: "01",
    type: "python",
    featured: true,
    fileName: "kriptografi.py",
    title: {
      id: "Hill Cipher Cryptography Engine",
      en: "Hill Cipher Cryptography Engine",
    },
    category: {
      id: "Python & Kriptografi",
      en: "Python & Cryptography",
    },
    description: {
      id: "Implementasi algoritma kriptografi klasik Hill Cipher untuk enkripsi dan dekripsi pesan menggunakan transformasi perkalian dot matriks 2x2 dan aritmetika modular 26.",
      en: "Implementation of the polygraphic Hill Cipher algorithm for message encryption and decryption using 2x2 matrix dot products and modulo 26 arithmetic.",
    },
    highlights: [
      {
        title: { id: "Transformasi Matriks & Dot Product", en: "Matrix Transformation & Dot Product" },
        sub: { id: "Pemecahan teks ke dalam blok vektor 2x1 dan komputasi perkalian dot dengan matriks kunci NumPy modulo 26.", en: "Splits plaintext into 2x1 block vectors and computes dot products with NumPy key matrices modulo 26." },
      },
      {
        title: { id: "Invers Matriks & Aritmetika Modular", en: "Matrix Inversion & Modular Arithmetic" },
        sub: { id: "Pencarian determinan, evaluasi invers perkalian modulo 26, serta perhitungan matriks adjoin untuk proses dekripsi.", en: "Calculates determinants, modular multiplicative inverses mod 26, and adjugate matrices for decryption." },
      },
      {
        title: { id: "Validasi Singularitas & Padding", en: "Singularity Checks & Padding" },
        sub: { id: "Penanganan otomatis panjang teks ganjil dengan padding 'X' dan deteksi matriks kunci singular yang tidak dapat dibalik.", en: "Handles odd-length text with 'X' padding and validates non-invertible singular key matrices." },
      },
    ],
    tags: ["Python", "NumPy", "Hill Cipher", "Aritmetika Modular", "Security"],
    terminal: {
      command: "python3 kriptografi.py",
      banner: "=== Program Hill Cipher 2x2 ===",
      inputs: ["Masukkan plaintext: TEKNIK", "Matriks Kunci K: [[7, 8], [11, 11]]", "Determinan: -11 ≡ 15 mod 26 | Invers Det: 7"],
      result: "Ciphertext: JTSTGQ | Dekripsi: TEKNIK (Lossless)",
    },
    demoUrl: "https://github.com/DzakiNaufal/Kriptografi",
    sourceUrl: "https://github.com/DzakiNaufal/Kriptografi",
  },
  {
    id: "02",
    type: "python",
    featured: false,
    title: {
      id: "Sistem Pakar Diagnosa Penyakit",
      en: "Clinical Expert System",
    },
    category: {
      id: "Python & Flask",
      en: "Python & Flask",
    },
    description: {
      id: "Aplikasi berbasis web untuk mendiagnosis penyakit berdasarkan penalaran gejala menggunakan metode Forward Chaining dan basis pengetahuan terstruktur dari Excel.",
      en: "A web-based clinical diagnostic expert system powered by a Forward Chaining inference engine and structured Excel knowledge base.",
    },
    tags: ["Python", "Flask", "Forward Chaining", "Expert System", "Excel KB"],
    demoUrl: "https://github.com/DzakiNaufal/Sistem_Pakar_Fuzzy",
    sourceUrl: "https://github.com/DzakiNaufal/Sistem_Pakar_Fuzzy",
  },
  {
    id: "03",
    type: "web",
    featured: false,
    title: {
      id: "Weather Check Dashboard",
      en: "Weather Check Dashboard",
    },
    category: {
      id: "JavaScript & REST API",
      en: "JavaScript & REST API",
    },
    description: {
      id: "Aplikasi pemantau cuaca global memanfaatkan OpenWeather REST API dengan pengambilan data asinkronus (Fetch API), penanganan error jaringan, dan antarmuka dinamis.",
      en: "Real-time global weather monitoring dashboard consuming OpenWeather REST API with asynchronous fetch, network error handling, and a responsive forecast UI.",
    },
    tags: ["JavaScript ES6+", "REST API", "Async/Await", "Responsive CSS", "DOM"],
    demoUrl: "https://github.com/DzakiNaufal/Weather-check",
    sourceUrl: "https://github.com/DzakiNaufal/Weather-check",
  },
  {
    id: "04",
    type: "python",
    featured: false,
    title: {
      id: "Peramalan Deret Waktu (Holt's Method)",
      en: "Time-Series Forecasting (Holt's Method)",
    },
    category: {
      id: "Data Science & Statistika",
      en: "Data Science & Statistics",
    },
    description: {
      id: "Pemodelan prediksi data berkala dengan algoritma Holt's Double Exponential Smoothing untuk data deret waktu yang memiliki tren linier serta komputasi evaluasi galat.",
      en: "Time-series predictive modeling using Holt's Double Exponential Smoothing algorithm to capture linear trends with statistical error metric evaluation.",
    },
    tags: ["Python", "Jupyter", "Pandas", "Time-Series", "Holt Smoothing"],
    demoUrl: "https://github.com/DzakiNaufal/Forcasting",
    sourceUrl: "https://github.com/DzakiNaufal/Forcasting",
  },
  {
    id: "05",
    type: "web",
    featured: false,
    title: {
      id: "Currency Exchange Converter",
      en: "Currency Exchange Converter",
    },
    category: {
      id: "Frontend Web Utility",
      en: "Frontend Web Utility",
    },
    description: {
      id: "Aplikasi konversi nilai tukar mata uang instan dengan validasi presisi input angka, penanganan kurs multi-negara, dan arsitektur kartu modular yang ringkas.",
      en: "Instant currency conversion tool with precise numerical input validation, multi-currency exchange rates, and a clean card-based layout.",
    },
    tags: ["JavaScript", "HTML5 Semantik", "CSS3", "DOM Utility"],
    demoUrl: "https://github.com/DzakiNaufal/Money-converter",
    sourceUrl: "https://github.com/DzakiNaufal/Money-converter",
  },
];

export const skillCategories = [
  {
    title: { id: "Bahasa Pemrograman", en: "Programming Languages" },
    tag: "01",
    items: [
      { name: "Python", role: { id: "Skrip CLI, Algoritma & Komputasi", en: "CLI Scripts, Algorithms & Computing" } },
      { name: "JavaScript", role: { id: "Logika ES6+, DOM & Interaktivitas Web", en: "ES6+ Logic, DOM & Web Interactivity" } },
    ],
  },
  {
    title: { id: "Pengembangan Web", en: "Web Development" },
    tag: "02",
    items: [
      { name: "React", role: { id: "Komponen Modular & Reaktivitas State", en: "Modular Components & State Reactivity" } },
      { name: "Flask", role: { id: "Backend MVC & Integrasi Servis Python", en: "MVC Backend & Python Services" } },
      { name: "Vite", role: { id: "Modern Tooling & Fast Bundling", en: "Modern Tooling & Fast Bundling" } },
      { name: "HTML5 & CSS3", role: { id: "Semantik Web & Tata Letak Responsif", en: "Semantic Web & Responsive Layout" } },
    ],
  },
  {
    title: { id: "Sistem & Alat Kerja", en: "Systems & Tools" },
    tag: "03",
    items: [
      { name: "Linux Terminal", role: { id: "Lingkungan Baris Perintah & Shell", en: "Command-Line & Shell Environments" } },
      { name: "Git & GitHub", role: { id: "Kontrol Versi & Manajemen Repositori", en: "Version Control & Repository Workflow" } },
    ],
  },
  {
    title: { id: "Data & Komputasi", en: "Data & Computing" },
    tag: "04",
    items: [
      { name: "NumPy", role: { id: "Komputasi Matriks & Aritmetika Numerik", en: "Matrix Computations & Numerical Arrays" } },
      { name: "Pandas", role: { id: "Manipulasi & Analisis Data Tabular", en: "Tabular Data Analysis & Processing" } },
      { name: "Jupyter", role: { id: "Eksplorasi Model & Analisis Statistik", en: "Model Exploration & Statistical Notebooks" } },
    ],
  },
];
