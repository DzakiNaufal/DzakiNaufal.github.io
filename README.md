# Dzaki Naufal — Personal Developer Portfolio

[![Live Site](https://img.shields.io/badge/Live_Demo-dzakinaufal.github.io-2563eb?style=flat-square&logo=githubpages&logoColor=white)](https://dzakinaufal.github.io/)
[![React](https://img.shields.io/badge/React-18.x-61dafb?style=flat-square&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-6.x-bd34fe?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![CI/CD](https://img.shields.io/badge/Deploy-GitHub_Actions-22c55e?style=flat-square&logo=githubactions&logoColor=white)](https://github.com/DzakiNaufal/DzakiNaufal.github.io/actions)

Portofolio rekayasa perangkat lunak modern yang menampilkan proyek teknis, eksplorasi komputasi matematis/kriptografi, dan arsitektur web performa tinggi. Dibangun dengan fokus pada kesederhanaan, transparansi kode, dan tanpa dependensi UI berat.

---

## ⚡ Fitur Utama

- **Hill Cipher 2x2 CLI Sandbox**: Simulasi enkripsi dan dekripsi matriks modulo 26 secara real-time langsung di browser dengan prompt shell interaktif dan verifikasi pemulihan data (*lossless recovery*).
- **Kurasi Proyek Nyata**:
  - `Hill Cipher Cryptography Engine`: Enkripsi & dekripsi matriks invers dengan Python & NumPy.
  - `Sistem Pakar Fuzzy Tsukamoto`: Diagnosa klinis penyakit anemia berbasis aturan inferensi fuzzy (Python Flask).
  - `Weather Check Application`: Aplikasi cuaca real-time dengan OpenWeatherMap API.
  - `Time Series Sales Forecasting`: Pemodelan prediksi penjualan historis (Pandas & Scikit-Learn).
  - `Currency Converter Utility`: Konversi nilai tukar multi-mata uang berbasis asynchronous JavaScript.
- **Official Browser Icons**: Menggunakan aset vektor resmi Devicon (`/public/icons/`), bersih dari rendering SVG hasil AI.
- **Bilingual & Dual Theme**: Dukungan penuh Bahasa Indonesia & Bahasa Inggris, serta tema Gelap/Terang dengan sinkronisasi instan ke `localStorage`.
- **Command Palette (`⌘K`)**: Menu pintasan cepat keyboard untuk navigasi instan dan aksi cepat.
- **100% Responsif**: Tata letak fleksibel bebas *horizontal overflow* di semua ukuran layar mobile (320px – 480px) hingga desktop.

---

## 🛠️ Tech Stack

| Layer | Teknologi |
| :--- | :--- |
| **Framework** | [React 18](https://react.dev/) |
| **Build Tool** | [Vite 6](https://vitejs.dev/) |
| **Styling** | Native Modern CSS (CSS Grid, Custom Properties, Responsive Media Queries) |
| **Icons** | [Devicon](https://devicon.dev/) (Aset SVG resmi) |
| **Deployment** | [GitHub Pages](https://pages.github.com/) via GitHub Actions CI/CD |

---

## 🚀 Panduan Menjalankan Lokal

Pastikan Anda telah menginstal **Node.js** (v18+ disarankan) dan **npm**.

```bash
# 1. Clone repositori
git clone https://github.com/DzakiNaufal/DzakiNaufal.github.io.git
cd DzakiNaufal.github.io

# 2. Instal dependensi
npm install

# 3. Jalankan server lokal
npm run dev
```

Aplikasi akan berjalan di `http://localhost:5173`.

### Build Produksi

```bash
npm run build
npm run preview
```

---

## 📄 Lisensi & Hak Cipta

Proyek ini dirilis di bawah lisensi terbuka untuk keperluan portofolio dan pembelajaran.

Dikembangkan oleh **[Dzaki Naufal](https://github.com/DzakiNaufal)** (Mahasiswa D4 Rekayasa Perangkat Lunak, Politeknik Negeri Padang).
