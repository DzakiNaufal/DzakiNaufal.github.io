# Dzaki Naufal — Portfolio

Situs web portofolio personal: **[https://dzakinaufal.github.io/](https://dzakinaufal.github.io/)**

Portofolio statis yang memuat dokumentasi proyek pengembangan web, pemrograman Python, dan eksplorasi dasar pembelajaran mesin.

## Ringkasan Teknis

* **Teknologi**: HTML5 Semantik, CSS3 murni, dan Vanilla JavaScript.
* **Fitur Antarmuka**: Mode gelap & terang otomatis, opsi dwibahasa (ID/EN), ramah aksesibilitas (WCAG AA/AAA), dan tata letak responsif.
* **PWA**: Dilengkapi Web App Manifest (`manifest.webmanifest`) untuk pemasangan di perangkat seluler.
* **Hosting**: GitHub Pages via branch `main`.

## Struktur Direktori

```text
├── index.html           # Halaman utama portofolio
├── 404.html             # Halaman penanganan galat (error)
├── manifest.webmanifest # Konfigurasi PWA (Web App Manifest)
├── sitemap.xml          # Peta situs peramban
├── robots.txt           # Kebijakan perayap web
├── assets/
│   ├── css/style.css    # Lembar gaya terpusat
│   ├── js/main.js       # Logika tema, bahasa, dan interaksi antarmuka
│   └── img/             # Berkas grafis, ikon favicon, dan pratinjau OG
├── projects/            # Studi kasus dan berkas sumber latihan
└── tools/               # Utilitas audit mandiri (check.py)
```

## Menjalankan Server Lokal

Jalankan perintah ini di direktori proyek:

```bash
python3 -m http.server 8000
```

Buka `http://localhost:8000` di peramban.

## Pengujian & Validasi

Sebelum melakukan komit atau publikasi, jalankan skrip validator mandiri:

```bash
python3 tools/check.py
```

Skrip ini memeriksa kelengkapan berkas, integritas tautan lokal, validitas HTML/CSS/JS, dan spesifikasi aset visual.
