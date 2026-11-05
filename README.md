# Dzaki Naufal — Portfolio

Portofolio statis berbasis HTML, CSS, dan JavaScript murni.

## Menjalankan Server Pengembangan Lokal

```bash
python3 -m http.server 8000
```

Buka `http://localhost:8000` di browser. Hentikan server dengan `Ctrl+C`.

## Struktur

```
index.html                  Halaman utama, semua section
404.html                    Halaman error statis
manifest.webmanifest        PWA manifest (Add to Home Screen di Android)
.nojekyll                   Konfigurasi bypass engine Jekyll di GitHub Pages
robots.txt                  Aturan crawler (ganti domain)
sitemap.xml                 Sitemap (ganti domain)
assets/css/style.css        Seluruh desain + token warna + print style
assets/js/main.js           Tema, bahasa, menu, scrollspy, copy email
assets/img/favicon.svg      Ikon situs (SVG)
assets/img/favicon.ico      Ikon fallback 16/32/48
assets/img/apple-touch-icon.png  Ikon 180x180
assets/img/icon-192.png     Ikon PWA 192x192
assets/img/icon-512.png     Ikon PWA 512x512
assets/img/og.png           Gambar Open Graph 1200x630
projects/                   Kode & showcase proyek yang ditampilkan
  kalkulator.py             Salinan script dari ../test.py
  kalkulator.html           Showcase web & bedah alur kalkulator
  cek-bilangan.py           Salinan script dari ../test2.py
  cek-bilangan.html         Showcase web & bedah alur cek bilangan
  tabel-gambar.html         Versi rapi dari ../Table.html (asli tetap utuh)
content/notes/              Tempat draf catatan (opsional)
tools/generate-og.py        Generator og.png (Python stdlib)
tools/generate-icons.py     Generator favicon.ico + apple-touch-icon.png + icon PWA
tools/check.py              Validator HTML, aset, JSON-LD, XML, JS
```

## Pemeriksaan

Jalankan sebelum deploy:

```bash
python3 tools/check.py
```

Script ini mengecek keseimbangan tag HTML, ID ganda, aset lokal yang hilang, pasangan `data-i18n-aria-*`, JSON-LD, brace CSS, sintaks JS, XML sitemap, dan dimensi gambar. Keluar dengan kode 1 jika ada error.

## Status

Fase A selesai: layout, tema, bilingual (termasuk `aria-label`), auto-detect bahasa, kontras, 404, SEO meta, ikon, dan validator. Yang tersisa hanya **data pribadi** di checklist bawah.

## Yang perlu diganti (checklist)

- [ ] Nama dan inisial: `Dzakk` (header, hero, footer, `<title>`, JSON-LD).
- [ ] Email: `hello@example.com` (bagian kontak + `mailto:` + `data-copy`).
- [ ] GitHub: `https://github.com/` dan `@username`.
- [ ] Instagram: `https://www.instagram.com/` dan `@username`.
- [ ] LinkedIn: `https://www.linkedin.com/` dan `/in/username`.
- [ ] Bio di section Tentang — sesuaikan dengan pengalaman nyata.
- [ ] Skill — hapus yang belum benar-benar dipakai, tambah bukti.
- [ ] Proyek — ganti/isi dengan proyek nyata; perbarui link di `projects/`.
- [ ] Catatan — ganti draf dengan tulisan sungguhan atau hapus section-nya.
- [ ] Lokasi/status di hero.
- [ ] Domain: ganti `example.com` di `robots.txt` dan `sitemap.xml`.
- [ ] Setelah punya domain, ubah `og:image` dan `twitter:image` menjadi URL absolut.
- [ ] Jika di-deploy ke GitHub Pages subpath, sesuaikan link balik `index.html` di `404.html`.

## Cara Mengubah & Mengembangkan Proyek

- **Teks bilingual**: setiap teks punya dua versi:
  ```html
  <span class="lang lang-id">Teks Indonesia</span>
  <span class="lang lang-en">English text</span>
  ```
  Untuk paragraf, gunakan `<p class="lang lang-id">` dan `<p class="lang lang-en">`.
- **Warna aksen**: ubah `--accent` (terakota/emas) dan `--accent-blue` (biru cetak biru) di `:root` dan `html[data-theme="dark"]` pada `style.css`.
- **Membuat ulang gambar OG**: `python3 tools/generate-og.py` (hanya butuh Python standar).

### Panduan Cepat Menambah Proyek Baru (3 Menit)

1. **Buat Halaman Showcase**:
   Salin `projects/cek-bilangan.html` menjadi `projects/proyek-baru.html`, lalu sesuaikan judul, kode di dalam tag `<pre><code>`, dan bedah logikanya. Letakkan skrip sumber di `projects/proyek-baru.py` jika ada.
2. **Pasang Kartu di `index.html`**:
   Salin satu blok `<article class="project-card reveal">` di dalam `<div class="project-list">`. Atur nomor urut, judul, tag teknologi (otomatis beraksen biru), dan arahkan tombol ke `projects/proyek-baru.html`. (Gunakan kelas `.project-card-featured` jika ingin menjadikannya kartu lebar penuh).
3. **Daftarkan & Verifikasi**:
   Buka `tools/check.py`, tambahkan nama berkas baru ke daftar `required`, lalu jalankan:
   ```bash
   python3 tools/check.py
   ```
   Jika muncul `OK — 0 errors`, proyek barumu sudah terintegrasi dengan sempurna tanpa tautan rusak.

## Catatan desain

- Tipografi: serif editorial + sans untuk isi + monospace untuk label.
- Tanpa font eksternal, tanpa CDN, tanpa gambar stok.
- Mode terang/gelap mengikuti sistem, bisa diubah manual (tersimpan di `localStorage`).
- Bahasa default mengikuti `navigator.language`; pilihan manual tersimpan di `localStorage`.
- Kontras teks muted minimal 5.18:1 di semua latar mode terang.
- Animasi dimatikan otomatis jika perangkat memakai `prefers-reduced-motion`.
- Ada style khusus print dan mode kontras paksa.

## Deploy

Karena ini statis, tidak perlu perintah build.

**GitHub Pages**

1. Buat repository baru, lalu unggah isi folder ini.
2. Buka **Settings → Pages**, pilih branch `main` dan folder `/ (root)`.
3. Situs akan tersedia di `https://username.github.io/repo/`.

**Netlify**

1. Buka [app.netlify.com/drop](https://app.netlify.com/drop).
2. Tarik seluruh folder ini ke halaman tersebut.
3. Ganti domain di `robots.txt`/`sitemap.xml`, lalu deploy ulang.

Setelah punya domain, jadikan URL `og:image` absolut agar preview media sosial bekerja.
