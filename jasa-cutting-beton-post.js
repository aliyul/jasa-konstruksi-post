// ============================================================
// JASA CUTTING BETON - BLOG POST
// ============================================================
// 🧠 SEO NOTE: Cluster ini berisi 1 artikel informasional + 8 money page harga per lokasi.
// Parent: Jasa Cutting Beton (/p/jasa-cutting-beton.html)
// ============================================================

const urlMappingJasaCuttingBeton = {
  // ============================================================
  // [SUB2] - SUB-PILLAR TIPE 2 (INFORMASIONAL / EDUKASI)
  // 🧠 SEO NOTE: Artikel ini adalah panduan teknis pemotongan jalan beton.
  // Intent: Informational + Commercial Investigation.
  // Breadcrumb: Home > Jasa Konstruksi > Jasa Cutting Beton > Jasa Pemotongan Jalan Beton (4 level)
  // ============================================================
  "https://www.betonjayareadymix.com/2019/06/jasa-pemotongan-jalan-beton.html": "Jasa Pemotongan Jalan Beton",
  
  // ============================================================
  // [MONEY PAGE] - MASTER HARGA (TRANSACTIONAL)
  // 🧠 SEO NOTE: Halaman master untuk semua harga cutting beton.
  // Intent: Transactional (user mencari harga).
  // Breadcrumb: Home > Jasa Konstruksi > Harga Jasa Cutting Beton (3 level)
  // ============================================================
  "https://www.betonjayareadymix.com/2019/06/harga-jasa-cutting-beton.html": "Harga Jasa Cutting Beton",
  
  // ============================================================
  // [MONEY PAGE] - HARGA PER LOKASI (TRANSACTIONAL)
  // 🧠 SEO NOTE: Masing-masing URL menarget keyword "harga cutting beton" + lokasi.
  // Intent: Transactional (user mencari harga di lokasi tertentu).
  // Breadcrumb: Home > Jasa Konstruksi > Harga Jasa Cutting Beton [Kota] (3 level)
  // ============================================================
  "https://www.betonjayareadymix.com/2019/06/harga-jasa-cutting-beton-jakarta.html": "Harga Jasa Cutting Beton Jakarta",
  "https://www.betonjayareadymix.com/2019/06/harga-jasa-cutting-beton-bogor.html": "Harga Jasa Cutting Beton Bogor",
  "https://www.betonjayareadymix.com/2019/06/harga-jasa-cutting-beton-depok.html": "Harga Jasa Cutting Beton Depok",
  "https://www.betonjayareadymix.com/2019/06/harga-jasa-cutting-beton-tangerang.html": "Harga Jasa Cutting Beton Tangerang",
  "https://www.betonjayareadymix.com/2019/06/harga-jasa-cutting-beton-bekasi.html": "Harga Jasa Cutting Beton Bekasi",
  "https://www.betonjayareadymix.com/2019/06/harga-jasa-cutting-beton-karawang.html": "Harga Jasa Cutting Beton Karawang",
  
  // ============================================================
  // [MONEY PAGE] - HARGA CUTTING EXPANSION JOINT (TRANSACTIONAL)
  // 🧠 SEO NOTE: Halaman spesifik untuk harga cutting expansion joint.
  // Intent: Transactional.
  // Breadcrumb: Home > Jasa Konstruksi > Harga Jasa Cutting Expansion Joint Beton (3 level)
  // ============================================================
  "https://www.betonjayareadymix.com/2019/06/harga-jasa-cutting-expansion-joint.html": "Harga Jasa Cutting Expansion Joint Beton"
};

// ============================================================
// 🟡 SARAN TAMBAHAN URL (OPTIONAL)
// ============================================================
/*
📌 URL YANG DISARANKAN UNTUK DITAMBAHKAN (JIKA KONTEN MEMADAI):

| URL | Nama Halaman | Status | Parent | Alasan SEO |
|-----|--------------|--------|--------|------------|
| /2019/06/harga-jasa-cutting-beton-cikarang.html | Harga Jasa Cutting Beton Cikarang | ⚠️ SARAN | Jasa Cutting Beton | Cikarang adalah kawasan industri besar, potensi volume pencarian tinggi |
| /2019/06/harga-jasa-cutting-beton-cibitung.html | Harga Jasa Cutting Beton Cibitung | ⚠️ SARAN | Jasa Cutting Beton | Kawasan industri strategis |
| /2019/06/harga-jasa-cutting-beton-purwakarta.html | Harga Jasa Cutting Beton Purwakarta | ⚠️ SARAN | Jasa Cutting Beton | Wilayah dengan proyek industri berkembang |
| /2019/06/harga-jasa-cutting-beton-subang.html | Harga Jasa Cutting Beton Subang | ⚠️ SARAN | Jasa Cutting Beton | Kawasan industri baru |

📌 CATATAN: URL di atas disarankan hanya jika kontennya memadai.
Jika konten tipis, lebih baik digabung ke halaman induk harga cutting beton.
*/

// ============================================================
// 🟢 SEO NOTE - STATUS SEMUA URL
// ============================================================
/*
✅ SEMUA URL di atas sudah valid dan memiliki konten substansial.

📌 KLASIFIKASI:
- 'jasa-pemotongan-jalan-beton.html' → [SUB2] (informasional/edukasi)
- 'harga-jasa-cutting-beton.html' → [MONEY PAGE] (master harga)
- 'harga-jasa-cutting-beton-[kota].html' → [MONEY PAGE] (harga per lokasi)
- 'harga-jasa-cutting-expansion-joint.html' → [MONEY PAGE] (harga spesifik)

📌 BREADCRUMB:
Untuk money page per lokasi, breadcrumb cukup 3 level:
Home > Jasa Konstruksi > Harga Jasa Cutting Beton Jakarta

Alasan skip level tengah: User yang mencari "harga cutting beton Jakarta"
tidak perlu melihat "Jasa Cutting Beton" di breadcrumb karena sudah spesifik lokasi.

📌 INTERNAL LINK YANG DISARANKAN:
1. Dari 'harga-jasa-cutting-beton.html' (master) → link ke semua harga per lokasi
2. Dari setiap halaman harga per lokasi → link balik ke master
3. Dari 'jasa-pemotongan-jalan-beton.html' → link ke 'harga-jasa-cutting-beton.html'

✅ TIDAK ADA REDIRECT YANG DIPERLUKAN - SEMUA URL VALID
*/

// ============================================================
// JASA SONDIR TANAH - SUB2 (MONEY PAGE / LAYANAN SPESIFIK)
// ============================================================
// 🧠 SEO NOTE: Cluster ini fokus ke layanan sondir tanah (uji tanah) untuk berbagai jenis proyek.
// Intent: Transactional (user mencari jasa sondir untuk proyek spesifik).
// Parent: Jasa Uji Tanah (/p/jasa-uji-tanah.html)
// Breadcrumb: Home > Jasa Konstruksi > Jasa Uji Tanah > Jasa Sondir [Nama Layanan] (4 level)
// ============================================================

const urlMappingJasaSondir = {
  // ============================================================
  // [MONEY PAGE] - LAYANAN SONDIR PER KEBUTUHAN/LOKASI PROYEK
  // 🧠 SEO NOTE: Masing-masing URL menarget keyword spesifik jenis proyek.
  // Breadcrumb: Home > Jasa Konstruksi > Jasa Uji Tanah > Jasa Sondir [Nama]
  // ============================================================
  
  // ✅ VALID - SEMUA URL MEMILIKI KONTEN
  "https://www.betonjayareadymix.com/2019/09/jasa-sondir-cepat-jadwal-fleksibel.html": "Jasa Sondir Cepat dengan Jadwal Fleksibel",
  "https://www.betonjayareadymix.com/2019/09/jasa-sondir-area-perumahan.html": "Jasa Sondir Area Perumahan",
  "https://www.betonjayareadymix.com/2019/09/jasa-sondir-lahan-sempit-padat.html": "Jasa Sondir Lahan Sempit & Padat",
  "https://www.betonjayareadymix.com/2019/09/jasa-sondir-laporan-grafik-interpretasi.html": "Jasa Sondir dengan Laporan Grafik & Interpretasi",
  "https://www.betonjayareadymix.com/2019/09/jasa-sondir-analisis-lapisan-tanah.html": "Jasa Sondir Analisis Lapisan Tanah",
  "https://www.betonjayareadymix.com/2019/09/jasa-sondir-pondasi-dangkal.html": "Jasa Sondir untuk Pondasi Dangkal",
  "https://www.betonjayareadymix.com/2019/09/jasa-sondir-daya-dukung-tanah.html": "Jasa Sondir Daya Dukung Tanah",
  "https://www.betonjayareadymix.com/2019/09/jasa-sondir-portable-akses-terbatas.html": "Jasa Sondir Portable Akses Terbatas",
  "https://www.betonjayareadymix.com/2019/09/jasa-sondir-tanah-hidrolik.html": "Jasa Sondir Tanah Hidrolik",
  "https://www.betonjayareadymix.com/2019/09/jasa-sondir-tanah-manual.html": "Jasa Sondir Tanah Manual",
  "https://www.betonjayareadymix.com/2019/09/jasa-sondir-renovasi-bangunan.html": "Jasa Sondir untuk Renovasi Bangunan",
  "https://www.betonjayareadymix.com/2019/09/jasa-sondir-proyek-skala-kecil.html": "Jasa Sondir Proyek Skala Kecil",
  "https://www.betonjayareadymix.com/2019/09/jasa-sondir-ruko-komersial.html": "Jasa Sondir Ruko & Bangunan Komersial",
  "https://www.betonjayareadymix.com/2019/09/jasa-sondir-gedung-bertingkat.html": "Jasa Sondir Gedung Bertingkat",
  "https://www.betonjayareadymix.com/2019/09/jasa-sondir-rumah-tinggal.html": "Jasa Sondir Rumah Tinggal"
};

// ============================================================
// 🟡 SARAN TAMBAHAN URL (OPTIONAL)
// ============================================================
/*
📌 URL YANG DISARANKAN UNTUK DITAMBAHKAN (JIKA KONTEN MEMADAI):

| URL | Nama Halaman | Status | Parent | Alasan SEO |
|-----|--------------|--------|--------|------------|
| /2019/09/jasa-sondir-jakarta.html | Jasa Sondir Jakarta | ⚠️ SARAN DITAMBAHKAN | Jasa Uji Tanah | Menarget keyword lokasi (capital city) |
| /2019/09/jasa-sondir-jabodetabek.html | Jasa Sondir Jabodetabek | ⚠️ SARAN DITAMBAHKAN | Jasa Uji Tanah | Menarget keyword wilayah |
| /2019/09/jasa-sondir-murah.html | Jasa Sondir Murah | ⚠️ SARAN DITAMBAHKAN | Jasa Uji Tanah | Menarget keyword harga |

📌 CATATAN: URL di atas disarankan hanya jika kontennya memadai.
Jika konten tipis, lebih baik digabung ke halaman induk.
*/
// ============================================================
// 🟢 SEO NOTE - STATUS SEMUA URL
// ============================================================
/*
✅ SEMUA URL di atas sudah valid dengan status [MONEY PAGE] - LAYANAN SPESIFIK.
✅ Masing-masing menarget keyword spesifik (perumahan, gedung, ruko, dll).
✅ Tidak ada duplikasi intent karena jenis proyek berbeda.
✅ Breadcrumb maksimal 4 level.

📌 REKOMENDASI:
1. Pastikan setiap halaman memiliki konten minimal 500 kata (dari data, kontennya panjang)
2. Tambahkan internal link antar sesama jenis sondir
3. Pastikan ada CTA ke form pemesanan jasa sondir
*/

// ============================================================
// JASA CPT (CONE PENETRATION TEST) - SUB2
// ============================================================
// 🧠 SEO NOTE: CPT adalah metode uji tanah yang lebih modern dari sondir.
// Intent: Commercial Investigation + Transactional.
// Parent: Jasa Uji Tanah (/p/jasa-uji-tanah.html)
// Breadcrumb: Home > Jasa Konstruksi > Jasa Uji Tanah > Jasa CPT (3-4 level)
// ============================================================

const urlMappingJasaCpt = {
  // ============================================================
  // 🔴 KOSONG - PERLU DIBUAT
  // ============================================================
  
  // 📌 SARAN URL YANG HARUS DIBUAT:
  // "https://www.betonjayareadymix.com/2019/09/jasa-cpt-uji-tanah.html": "Jasa CPT Uji Tanah",
  // "https://www.betonjayareadymix.com/2019/09/jasa-cpt-gedung-bertingkat.html": "Jasa CPT Gedung Bertingkat",
  // "https://www.betonjayareadymix.com/2019/09/jasa-cpt-perumahan.html": "Jasa CPT Perumahan",
  // "https://www.betonjayareadymix.com/2019/09/jasa-cpt-jalan-tol.html": "Jasa CPT Jalan Tol",
  // "https://www.betonjayareadymix.com/2019/09/jasa-cpt-infrastruktur.html": "Jasa CPT Infrastruktur"
};

// ============================================================
// 🔴 SARAN PEMBUATAN URL UNTUK JASA CPT
// ============================================================
/*
📌 PRIORITAS URL YANG HARUS DIBUAT (MONEY PAGE):

| No | URL | Nama Halaman | Prioritas | Alasan SEO |
|----|-----|--------------|-----------|------------|
| 1 | /2019/09/jasa-cpt-uji-tanah.html | Jasa CPT Uji Tanah | 🔴 HIGH | Halaman utama untuk layanan CPT |
| 2 | /2019/09/jasa-cpt-gedung-bertingkat.html | Jasa CPT Gedung Bertingkat | 🟡 MEDIUM | Menarget proyek gedung |
| 3 | /2019/09/jasa-cpt-perumahan.html | Jasa CPT Perumahan | 🟡 MEDIUM | Menarget proyek perumahan |
| 4 | /2019/09/jasa-cpt-jalan-tol.html | Jasa CPT Jalan Tol | 🟡 MEDIUM | Menarget proyek infrastruktur |
| 5 | /2019/09/jasa-cpt-murah.html | Jasa CPT Murah | 🟢 LOW | Menarget keyword harga |

📌 STATUS SEO UNTUK URL DI ATAS:
- Page Type: [MONEY PAGE]
- Intent: Transactional
- Parent: Jasa Uji Tanah
- Breadcrumb: Home > Jasa Konstruksi > Jasa Uji Tanah > Jasa CPT [Nama]

📌 CATATAN: CPT adalah metode yang berbeda dengan sondir.
Konten harus menjelaskan perbedaan CPT vs Sondir, keunggulan CPT, dan aplikasinya.
*/

// ============================================================
// JASA BORING TANAH - SUB2
// ============================================================
// 🧠 SEO NOTE: Boring tanah adalah metode pengambilan sampel tanah untuk uji laboratorium.
// Intent: Commercial Investigation + Transactional.
// Parent: Jasa Uji Tanah (/p/jasa-uji-tanah.html)
// Breadcrumb: Home > Jasa Konstruksi > Jasa Uji Tanah > Jasa Boring Tanah (3-4 level)
// ============================================================

const urlMappingJasaBoringTanah = {
  // ============================================================
  // 🔴 KOSONG - PERLU DIBUAT
  // ============================================================
  
  // 📌 SARAN URL YANG HARUS DIBUAT:
  // "https://www.betonjayareadymix.com/2019/09/jasa-boring-tanah.html": "Jasa Boring Tanah",
  // "https://www.betonjayareadymix.com/2019/09/jasa-boring-tanah-rumah-tinggal.html": "Jasa Boring Tanah Rumah Tinggal",
  // "https://www.betonjayareadymix.com/2019/09/jasa-boring-tanah-gedung.html": "Jasa Boring Tanah Gedung",
  // "https://www.betonjayareadymix.com/2019/09/jasa-boring-tanah-infrastruktur.html": "Jasa Boring Tanah Infrastruktur"
};

// ============================================================
// 🔴 SARAN PEMBUATAN URL UNTUK JASA BORING TANAH
// ============================================================
/*
📌 PRIORITAS URL YANG HARUS DIBUAT (MONEY PAGE):

| No | URL | Nama Halaman | Prioritas | Alasan SEO |
|----|-----|--------------|-----------|------------|
| 1 | /2019/09/jasa-boring-tanah.html | Jasa Boring Tanah | 🔴 HIGH | Halaman utama untuk layanan boring tanah |
| 2 | /2019/09/jasa-boring-tanah-rumah-tinggal.html | Jasa Boring Tanah Rumah Tinggal | 🟡 MEDIUM | Menarget proyek rumah |
| 3 | /2019/09/jasa-boring-tanah-gedung.html | Jasa Boring Tanah Gedung | 🟡 MEDIUM | Menarget proyek gedung |
| 4 | /2019/09/jasa-boring-tanah-jembatan.html | Jasa Boring Tanah Jembatan | 🟡 MEDIUM | Menarget proyek infrastruktur |

📌 STATUS SEO UNTUK URL DI ATAS:
- Page Type: [MONEY PAGE]
- Intent: Transactional
- Parent: Jasa Uji Tanah
- Breadcrumb: Home > Jasa Konstruksi > Jasa Uji Tanah > Jasa Boring Tanah [Nama]

📌 CATATAN: Boring tanah berbeda dengan sondir.
Konten harus menjelaskan metode boring, alat yang digunakan, dan jenis sampel yang diambil.
*/

// ============================================================
// JASA LAB TANAH - SUB2
// ============================================================
// 🧠 SEO NOTE: Lab tanah adalah layanan pengujian sampel tanah di laboratorium.
// Intent: Commercial Investigation + Transactional.
// Parent: Jasa Uji Tanah (/p/jasa-uji-tanah.html)
// Breadcrumb: Home > Jasa Konstruksi > Jasa Uji Tanah > Jasa Lab Tanah (3-4 level)
// ============================================================

const urlMappingJasaLabTanah = {
  // ============================================================
  // 🔴 KOSONG - PERLU DIBUAT
  // ============================================================
  
  // 📌 SARAN URL YANG HARUS DIBUAT:
  // "https://www.betonjayareadymix.com/2019/09/jasa-lab-tanah.html": "Jasa Lab Tanah",
  // "https://www.betonjayareadymix.com/2019/09/jasa-uji-kuat-tekan-tanah.html": "Jasa Uji Kuat Tekan Tanah",
  // "https://www.betonjayareadymix.com/2019/09/jasa-uji-kadar-air-tanah.html": "Jasa Uji Kadar Air Tanah",
  // "https://www.betonjayareadymix.com/2019/09/jasa-uji-kepadatan-tanah.html": "Jasa Uji Kepadatan Tanah"
};

// ============================================================
// 🔴 SARAN PEMBUATAN URL UNTUK JASA LAB TANAH
// ============================================================
/*
📌 PRIORITAS URL YANG HARUS DIBUAT (MONEY PAGE):

| No | URL | Nama Halaman | Prioritas | Alasan SEO |
|----|-----|--------------|-----------|------------|
| 1 | /2019/09/jasa-lab-tanah.html | Jasa Lab Tanah | 🔴 HIGH | Halaman utama untuk layanan lab tanah |
| 2 | /2019/09/jasa-uji-kuat-tekan-tanah.html | Jasa Uji Kuat Tekan Tanah | 🟡 MEDIUM | Menarget jenis uji spesifik |
| 3 | /2019/09/jasa-uji-kadar-air-tanah.html | Jasa Uji Kadar Air Tanah | 🟡 MEDIUM | Menarget jenis uji spesifik |
| 4 | /2019/09/jasa-uji-kepadatan-tanah.html | Jasa Uji Kepadatan Tanah | 🟡 MEDIUM | Menarget jenis uji spesifik |

📌 STATUS SEO UNTUK URL DI ATAS:
- Page Type: [MONEY PAGE]
- Intent: Transactional
- Parent: Jasa Uji Tanah
- Breadcrumb: Home > Jasa Konstruksi > Jasa Uji Tanah > Jasa Lab Tanah [Nama]

📌 CATATAN: Lab tanah adalah layanan lanjutan setelah boring tanah.
Konten harus menjelaskan jenis-jenis pengujian laboratorium yang tersedia.
*/

// ============================================================
// JASA UJI PENETRASI - SUB2
// ============================================================
// 🧠 SEO NOTE: Uji penetrasi (SPT) adalah metode uji tanah standar.
// Intent: Commercial Investigation + Transactional.
// Parent: Jasa Uji Tanah (/p/jasa-uji-tanah.html)
// Breadcrumb: Home > Jasa Konstruksi > Jasa Uji Tanah > Jasa Uji Penetrasi (3-4 level)
// ============================================================

const urlMappingJasaUjiPenetrasi = {
  // ============================================================
  // 🔴 KOSONG - PERLU DIBUAT
  // ============================================================
  
  // 📌 SARAN URL YANG HARUS DIBUAT:
  // "https://www.betonjayareadymix.com/2019/09/jasa-uji-penetrasi-spt.html": "Jasa Uji Penetrasi Standar (SPT)",
  // "https://www.betonjayareadymix.com/2019/09/jasa-spt-gedung-bertingkat.html": "Jasa SPT Gedung Bertingkat",
  // "https://www.betonjayareadymix.com/2019/09/jasa-spt-perumahan.html": "Jasa SPT Perumahan",
  // "https://www.betonjayareadymix.com/2019/09/jasa-spt-jembatan.html": "Jasa SPT Jembatan"
};

// ============================================================
// 🔴 SARAN PEMBUATAN URL UNTUK JASA UJI PENETRASI (SPT)
// ============================================================
/*
📌 PRIORITAS URL YANG HARUS DIBUAT (MONEY PAGE):

| No | URL | Nama Halaman | Prioritas | Alasan SEO |
|----|-----|--------------|-----------|------------|
| 1 | /2019/09/jasa-uji-penetrasi-spt.html | Jasa Uji Penetrasi Standar (SPT) | 🔴 HIGH | Halaman utama untuk layanan SPT |
| 2 | /2019/09/jasa-spt-gedung-bertingkat.html | Jasa SPT Gedung Bertingkat | 🟡 MEDIUM | Menarget proyek gedung |
| 3 | /2019/09/jasa-spt-perumahan.html | Jasa SPT Perumahan | 🟡 MEDIUM | Menarget proyek perumahan |
| 4 | /2019/09/jasa-spt-jembatan.html | Jasa SPT Jembatan | 🟡 MEDIUM | Menarget proyek infrastruktur |

📌 STATUS SEO UNTUK URL DI ATAS:
- Page Type: [MONEY PAGE]
- Intent: Transactional
- Parent: Jasa Uji Tanah
- Breadcrumb: Home > Jasa Konstruksi > Jasa Uji Tanah > Jasa SPT [Nama]

📌 CATATAN: SPT adalah metode standar untuk uji daya dukung tanah.
Konten harus menjelaskan prosedur SPT, alat yang digunakan, dan interpretasi hasil.
*/
/*
📋 RINGKASAN SARAN & TINDAKAN
No	Tindakan	                                    Target	                       Prioritas
1	Buat halaman utama jasa-cpt-uji-tanah.html	    urlMappingJasaCpt	           🔴 HIGH
2	Buat halaman utama jasa-boring-tanah.html	    urlMappingJasaBoringTanah	   🔴 HIGH
3	Buat halaman utama jasa-lab-tanah.html	        urlMappingJasaLabTanah	       🔴 HIGH
4	Buat halaman utama jasa-uji-penetrasi-spt.html	urlMappingJasaUjiPenetrasi	   🔴 HIGH
5	Buat halaman turunan untuk CPT, Boring, Lab, SPT 
    (sesuai tabel)	                                 Masing-masing const	        🟡 MEDIUM
6	Tambahkan internal link dari jasa-sondir-*.html ke halaman CPT, Boring, Lab, SPT	Semua URL	🟡 MEDIUM
7	Pastikan setiap halaman memiliki CTA ke form pemesanan jasa uji tanah	Semua URL	🟡 MEDIUM
*/

// ============================================================
// JASA PEMOTONGAN BUKIT LAHAN - MONEY PAGE
// ============================================================
// 🧠 SEO NOTE: Semua URL di bawah adalah MONEY PAGE dengan intent transaksional.
// Parent: Jasa Pemotongan Bukit Lahan (/p/jasa-pemotongan-bukit-lahan.html)
// Breadcrumb: Home > Jasa Konstruksi > Jasa Pematangan Lahan > Jasa Pemotongan Bukit Lahan > [Nama Layanan]
// ============================================================

//SUB JASA PEMATANGAN LAHAN
const urlMappingJasaPemotonganBukitLahan = {
  // [MONEY PAGE] - HARGA & JASA PEMOTONGAN BUKIT LAHAN
  "https://www.betonjayareadymix.com/2019/09/harga-jasa-pemotongan-bukit-lahan.html": "Harga Jasa Pemotongan Bukit Lahan",
  "https://www.betonjayareadymix.com/2019/09/jasa-pemotongan-bukit-lahan-borongan.html": "Jasa Pemotongan Bukit Lahan Borongan",
  "https://www.betonjayareadymix.com/2019/09/jasa-pemotongan-bukit-lahan-parkir-lapangan.html": "Jasa Pemotongan Bukit Lahan Parkir & Lapangan",
  "https://www.betonjayareadymix.com/2019/09/jasa-pemotongan-bukit-lahan-kavling.html": "Jasa Pemotongan Bukit Lahan Kavling",
  "https://www.betonjayareadymix.com/2019/09/jasa-pemotongan-bukit-lahan-jalan-akses.html": "Jasa Pemotongan Bukit Lahan Jalan Akses",
  "https://www.betonjayareadymix.com/2019/09/jasa-pemotongan-bukit-lahan-luas.html": "Jasa Pemotongan Bukit Lahan Luas",
  "https://www.betonjayareadymix.com/2019/09/jasa-pemotongan-bukit-lahan-rawan-longsor.html": "Jasa Pemotongan Bukit Lahan Rawan Longsor",
  "https://www.betonjayareadymix.com/2019/09/jasa-pemotongan-bukit-lahan-curam-terjal.html": "Jasa Pemotongan Bukit Lahan Curam & Terjal",
  "https://www.betonjayareadymix.com/2019/09/jasa-cut-fill-bukit-lahan.html": "Jasa Cut & Fill Bukit Lahan",
  "https://www.betonjayareadymix.com/2019/09/jasa-pemotongan-bukit-lahan-dengan-alat.html": "Jasa Pemotongan Bukit Lahan dengan Alat",
  "https://www.betonjayareadymix.com/2019/09/jasa-pemotongan-bukit-lahan-manual-semi.html": "Jasa Pemotongan Bukit Lahan Manual & Semi Manual"
};

// ============================================================
// 🟢 SEO NOTE - STATUS SEMUA URL
// ============================================================
/*
✅ SEMUA URL di atas sudah valid dengan status [MONEY PAGE].
✅ Masing-masing menarget keyword spesifik (borongan, kavling, jalan akses, dll).
✅ Breadcrumb maksimal 5 level, tetapi karena ini adalah blog post (bukan page),
   breadcrumb yang ditampilkan cukup 3-4 level.

📌 REKOMENDASI BREADCRUMB (4 level):
   Home > Jasa Konstruksi > Jasa Pematangan Lahan > Harga Jasa Pemotongan Bukit Lahan

📌 REKOMENDASI TAMBAHAN:
   Tidak ada URL yang perlu di-redirect. Semua sudah optimal.
*/
// ============================================================
// JASA PENGUPASAN LAHAN TANAH - MONEY PAGE
// ============================================================
// 🧠 SEO NOTE: Semua URL di bawah adalah MONEY PAGE dengan intent transaksional.
// Parent: Jasa Pengupasan Lahan Tanah (/p/jasa-pengupasan-lahan-tanah.html)
// Breadcrumb: Home > Jasa Konstruksi > Jasa Pematangan Lahan > Jasa Pengupasan Lahan Tanah > [Nama Layanan]
// ============================================================

const urlMappingJasaPengupasanLahanTanah = {
  "https://www.betonjayareadymix.com/2019/09/jasa-pengupasan-lahan-tanah-proyek-perumahan.html": "Jasa Pengupasan Lahan Tanah Proyek Perumahan",
  "https://www.betonjayareadymix.com/2019/09/jasa-pengupasan-lahan-tanah-proyek-komersial.html": "Jasa Pengupasan Lahan Tanah Proyek Komersial",
  "https://www.betonjayareadymix.com/2019/09/jasa-pengupasan-lahan-tanah-proyek-infrastruktur.html": "Jasa Pengupasan Lahan Tanah Proyek Infrastruktur",
  "https://www.betonjayareadymix.com/2019/09/jasa-pengupasan-lahan-tanah-kawasan-estate.html": "Jasa Pengupasan Lahan Tanah Kawasan Estate",
  "https://www.betonjayareadymix.com/2019/09/jasa-pengupasan-lahan-tanah-siap-bangun.html": "Jasa Pengupasan Lahan Tanah Siap Bangun",
  "https://www.betonjayareadymix.com/2019/09/jasa-pengupasan-lahan-tanah-siap-pondasi.html": "Jasa Pengupasan Lahan Tanah Siap Pondasi",
  "https://www.betonjayareadymix.com/2019/09/jasa-pengupasan-lahan-tanah-tahap-awal.html": "Jasa Pengupasan Lahan Tanah Tahap Awal",
  "https://www.betonjayareadymix.com/2019/09/jasa-pengupasan-lahan-tanah-untuk-pematangan.html": "Jasa Pengupasan Lahan Tanah untuk Pematangan"
};

// ============================================================
// 🟢 SEO NOTE - STATUS SEMUA URL
// ============================================================
/*
✅ SEMUA URL di atas sudah valid dengan status [MONEY PAGE].
✅ Masing-masing menarget keyword spesifik (perumahan, komersial, infrastruktur, dll).

📌 REKOMENDASI BREADCRUMB (4 level):
   Home > Jasa Konstruksi > Jasa Pematangan Lahan > Jasa Pengupasan Lahan Tanah Proyek Perumahan

✅ AMAN - TIDAK PERLU REDIRECT
*/
// ============================================================
// JASA TEBANG POHON - MONEY PAGE
// ============================================================
// 🧠 SEO NOTE: Semua URL di bawah adalah MONEY PAGE dengan intent transaksional.
// Parent: Jasa Tebang Pohon (/p/jasa-tebang-pohon.html)
// Breadcrumb: Home > Jasa Konstruksi > Jasa Pematangan Lahan > Jasa Tebang Pohon > [Nama Layanan]
// ============================================================

const urlMappingJasaTebangPohon = {
  "https://www.betonjayareadymix.com/2019/09/jasa-tebang-pohon-besar.html": "Jasa Tebang Pohon Besar",
  "https://www.betonjayareadymix.com/2019/09/jasa-tebang-pohon-dekat-bangunan.html": "Jasa Tebang Pohon Dekat Bangunan",
  "https://www.betonjayareadymix.com/2019/09/jasa-tebang-pohon-pematangan-lahan.html": "Jasa Tebang Pohon untuk Pematangan Lahan",
  "https://www.betonjayareadymix.com/2019/09/jasa-tebang-pohon-cabut-akar.html": "Jasa Tebang Pohon + Cabut Akar",
  "https://www.betonjayareadymix.com/2019/09/jasa-tebang-pohon-proyek-konstruksi.html": "Jasa Tebang Pohon Proyek Konstruksi",
  "https://www.betonjayareadymix.com/2019/09/jasa-tebang-pohon-aman-bersertifikat.html": "Jasa Tebang Pohon Aman & Bersertifikat",
  "https://www.betonjayareadymix.com/2019/09/jasa-tebang-pohon-darurat.html": "Jasa Tebang Pohon Darurat",
  "https://www.betonjayareadymix.com/2019/09/jasa-tebang-pohon-pembuangan-limbah.html": "Jasa Tebang Pohon & Pembuangan Limbah",
  "https://www.betonjayareadymix.com/2019/09/jasa-tebang-pohon-area-perkotaan.html": "Jasa Tebang Pohon Area Perkotaan"
};

// ============================================================
// 🟢 SEO NOTE - STATUS SEMUA URL
// ============================================================
/*
✅ SEMUA URL di atas sudah valid dengan status [MONEY PAGE].
✅ Masing-masing menarget keyword spesifik (pohon besar, dekat bangunan, darurat, dll).

📌 REKOMENDASI BREADCRUMB (4 level):
   Home > Jasa Konstruksi > Jasa Pematangan Lahan > Jasa Tebang Pohon Besar

✅ AMAN - TIDAK PERLU REDIRECT
*/
// ============================================================
// JASA PERATAAN DAN GRADING LAHAN - MONEY PAGE
// ============================================================
// 🧠 SEO NOTE: Semua URL di bawah adalah MONEY PAGE dengan intent transaksional.
// Parent: Jasa Perataan dan Grading Lahan (/p/jasa-perataan-dan-grading-lahan.html)
// Breadcrumb: Home > Jasa Konstruksi > Jasa Pematangan Lahan > Jasa Perataan dan Grading Lahan > [Nama Layanan]
// ============================================================

const urlMappingJasaPerataandanGradingLahan = {
  "https://www.betonjayareadymix.com/2019/09/jasa-rough-grading-lahan.html": "Jasa Rough Grading Lahan",
  "https://www.betonjayareadymix.com/2019/09/jasa-fine-grading-lahan.html": "Jasa Fine Grading Lahan",
  "https://www.betonjayareadymix.com/2019/09/jasa-perataan-akhir-lahan.html": "Jasa Perataan Akhir Lahan",
  "https://www.betonjayareadymix.com/2019/09/jasa-pembentukan-elevasi-leveling-lahan.html": "Jasa Pembentukan Elevasi & Leveling Lahan",
  "https://www.betonjayareadymix.com/2019/09/jasa-pembentukan-kontur-grading-lahan.html": "Jasa Pembentukan Kontur & Grading Lahan",
  "https://www.betonjayareadymix.com/2019/09/jasa-perataan-dan-grading-lahan-presisi.html": "Jasa Perataan dan Grading Lahan Presisi",
  "https://www.betonjayareadymix.com/2019/09/jasa-perataan-dan-grading-lahan-kavling.html": "Jasa Perataan dan Grading Lahan Kavling",
  "https://www.betonjayareadymix.com/2019/09/jasa-grading-lahan-perumahan.html": "Jasa Grading Lahan Perumahan",
  "https://www.betonjayareadymix.com/2019/09/jasa-grading-lahan-komersial.html": "Jasa Grading Lahan Komersial",
  "https://www.betonjayareadymix.com/2019/09/jasa-grading-lahan-lahan-kosong.html": "Jasa Grading Lahan Lahan Kosong",
  "https://www.betonjayareadymix.com/2019/09/jasa-grading-lahan-alat-berat.html": "Jasa Grading Lahan Alat Berat",
  "https://www.betonjayareadymix.com/2019/09/jasa-grading-lahan-skala-kecil.html": "Jasa Grading Lahan Skala Kecil",
  "https://www.betonjayareadymix.com/2019/09/jasa-grading-lahan-miring.html": "Jasa Grading Lahan Miring",
  "https://www.betonjayareadymix.com/2019/09/jasa-perataan-dan-grading-lahan-cepat.html": "Jasa Perataan dan Grading Lahan Cepat",
  "https://www.betonjayareadymix.com/2019/09/jasa-grading-lahan-siap-jual.html": "Jasa Grading Lahan Siap Jual"
};

// ============================================================
// 🟢 SEO NOTE - STATUS SEMUA URL
// ============================================================
/*
✅ SEMUA URL di atas sudah valid dengan status [MONEY PAGE].

📌 REKOMENDASI BREADCRUMB (4 level):
   Home > Jasa Konstruksi > Jasa Pematangan Lahan > Jasa Rough Grading Lahan

✅ AMAN - TIDAK PERLU REDIRECT
*/
// ============================================================
// JASA ELEVASI LAHAN - MONEY PAGE
// ============================================================
// 🧠 SEO NOTE: Semua URL di bawah adalah MONEY PAGE dengan intent transaksional.
// Parent: Jasa Elevasi Lahan (/p/jasa-elevasi-lahan.html)
// Breadcrumb: Home > Jasa Konstruksi > Jasa Pematangan Lahan > Jasa Elevasi Lahan > [Nama Layanan]
// ============================================================

const urlMappingJasaElevasiLahan = {
  "https://www.betonjayareadymix.com/2019/09/harga-jasa-elevasi-lahan-terbaru.html": "Harga Jasa Elevasi Lahan Terbaru",
  "https://www.betonjayareadymix.com/2019/09/jasa-elevasi-lahan-borongan.html": "Jasa Elevasi Lahan Borongan",
  "https://www.betonjayareadymix.com/2019/09/jasa-elevasi-lahan-gudang-area-industri.html": "Jasa Elevasi Lahan Gudang & Area Industri",
  "https://www.betonjayareadymix.com/2019/09/jasa-elevasi-lahan-kavling.html": "Jasa Elevasi Lahan Kavling",
  "https://www.betonjayareadymix.com/2019/09/jasa-elevasi-lahan-area-parkir-lapangan.html": "Jasa Elevasi Lahan Area Parkir & Lapangan",
  "https://www.betonjayareadymix.com/2019/09/jasa-elevasi-lahan-jalan-akses-proyek.html": "Jasa Elevasi Lahan Jalan Akses Proyek",
  "https://www.betonjayareadymix.com/2019/09/jasa-elevasi-lahan-lunak-bekas-timbunan.html": "Jasa Elevasi Lahan Lunak Bekas Timbunan",
  "https://www.betonjayareadymix.com/2019/09/jasa-elevasi-lahan-miring-tidak-rata.html": "Jasa Elevasi Lahan Miring & Tidak Rata",
  "https://www.betonjayareadymix.com/2019/09/jasa-elevasi-lahan-rata-siap-bangun.html": "Jasa Elevasi Lahan Rata Siap Bangun",
  "https://www.betonjayareadymix.com/2019/09/jasa-elevasi-lahan-urugan-pemadatan.html": "Jasa Elevasi Lahan Urugan & Pemadatan",
  "https://www.betonjayareadymix.com/2019/09/jasa-elevasi-lahan-alat-berat.html": "Jasa Elevasi Lahan Alat Berat",
  "https://www.betonjayareadymix.com/2019/09/jasa-elevasi-lahan-manual-semi-mekanis.html": "Jasa Elevasi Lahan Manual & Semi Mekanis"
};

// ============================================================
// 🟢 SEO NOTE - STATUS SEMUA URL
// ============================================================
/*
✅ SEMUA URL di atas sudah valid dengan status [MONEY PAGE].

📌 CATATAN KHUSUS:
   'harga-jasa-elevasi-lahan-terbaru.html' adalah MASTER MONEY PAGE untuk cluster ini.
   Sebaiknya halaman ini menjadi yang paling komprehensif di antara yang lain.

✅ AMAN - TIDAK PERLU REDIRECT
*/
// ============================================================
// JASA BADAN LAHAN - MONEY PAGE
// ============================================================
// 🧠 SEO NOTE: Semua URL di bawah adalah MONEY PAGE dengan intent transaksional.
// Parent: Jasa Badan Lahan (/p/jasa-badan-lahan.html)
// Breadcrumb: Home > Jasa Konstruksi > Jasa Pematangan Lahan > Jasa Badan Lahan > [Nama Layanan]
// ============================================================

const urlMappingJasaBadanLahan = {
  "https://www.betonjayareadymix.com/2019/09/jasa-perataan-badan-lahan.html": "Jasa Perataan Badan Lahan",
  "https://www.betonjayareadymix.com/2019/09/jasa-pemadatan-badan-lahan.html": "Jasa Pemadatan Badan Lahan",
  "https://www.betonjayareadymix.com/2019/09/jasa-pengurugan-badan-lahan.html": "Jasa Pengurugan Badan Lahan",
  "https://www.betonjayareadymix.com/2019/09/jasa-penyesuaian-elevasi-badan-lahan.html": "Jasa Penyesuaian Elevasi Badan Lahan",
  "https://www.betonjayareadymix.com/2019/09/jasa-pembentukan-kontur-badan-lahan.html": "Jasa Pembentukan Kontur Badan Lahan",
  "https://www.betonjayareadymix.com/2019/09/jasa-badan-lahan-kavling-perumahan.html": "Jasa Badan Lahan Kavling Perumahan",
  "https://www.betonjayareadymix.com/2019/09/jasa-badan-lahan-lahan-kosong.html": "Jasa Badan Lahan Lahan Kosong",
  "https://www.betonjayareadymix.com/2019/09/jasa-badan-lahan-area-komersial.html": "Jasa Badan Lahan Area Komersial",
  "https://www.betonjayareadymix.com/2019/09/jasa-badan-lahan-kawasan-industri-ringan.html": "Jasa Badan Lahan Kawasan Industri Ringan",
  "https://www.betonjayareadymix.com/2019/09/jasa-badan-lahan-dengan-alat-berat.html": "Jasa Badan Lahan dengan Alat Berat",
  "https://www.betonjayareadymix.com/2019/09/jasa-badan-lahan-skala-kecil-menengah.html": "Jasa Badan Lahan Skala Kecil & Menengah",
  "https://www.betonjayareadymix.com/2019/09/jasa-badan-lahan-area-miring-tidak-rata.html": "Jasa Badan Lahan Area Miring & Tidak Rata",
  "https://www.betonjayareadymix.com/2019/09/jasa-badan-lahan-cepat-siap-bangun.html": "Jasa Badan Lahan Cepat Siap Bangun",
  "https://www.betonjayareadymix.com/2019/09/jasa-badan-lahan-siap-jual.html": "Jasa Badan Lahan Siap Jual"
};

// ============================================================
// 🟢 SEO NOTE - STATUS SEMUA URL
// ============================================================
/*
✅ SEMUA URL di atas sudah valid dengan status [MONEY PAGE].

📌 CATATAN:
   Perhatikan perbedaan antara 'jasa-badan-lahan' dan 'jasa-pematangan-lahan'.
   Badan lahan adalah tahap setelah pembersihan lahan, sebelum pondasi.

✅ AMAN - TIDAK PERLU REDIRECT
*/
// ============================================================
// JASA CUT AND FILL LAHAN - MONEY PAGE
// ============================================================
// 🧠 SEO NOTE: Semua URL di bawah adalah MONEY PAGE dengan intent transaksional.
// Parent: Jasa Cut and Fill Lahan (/p/jasa-cut-and-fill-lahan.html)
// Breadcrumb: Home > Jasa Konstruksi > Jasa Pematangan Lahan > Jasa Cut and Fill Lahan > [Nama Layanan]
// ============================================================

const urlMappingJasaCutandFillLahan = {
  "https://www.betonjayareadymix.com/2019/09/jasa-monitoring-lahan-cut-and-fill.html": "Jasa Monitoring Lahan Cut and Fill",
  "https://www.betonjayareadymix.com/2019/09/jasa-pematangan-lahan-pertanian.html": "Jasa Pematangan Lahan Pertanian",
  "https://www.betonjayareadymix.com/2019/09/jasa-pengelolaan-lahan-berbatu-tebing.html": "Jasa Pengelolaan Lahan Berbatu & Tebing",
  "https://www.betonjayareadymix.com/2019/09/jasa-cut-and-fill-lahan-komersial.html": "Jasa Cut and Fill Lahan Komersial",
  "https://www.betonjayareadymix.com/2019/09/jasa-cut-and-fill-lahan-perumahan.html": "Jasa Cut and Fill Lahan Perumahan",
  "https://www.betonjayareadymix.com/2019/09/jasa-pengerukan-pemindahan-tanah.html": "Jasa Pengerukan & Pemindahan Tanah",
  "https://www.betonjayareadymix.com/2019/09/jasa-perencanaan-drainase-erosi-lahan.html": "Jasa Perencanaan Drainase & Erosi Lahan",
  "https://www.betonjayareadymix.com/2019/09/jasa-pemodelan-kontur-topografi-lahan.html": "Jasa Pemodelan Kontur & Topografi Lahan",
  "https://www.betonjayareadymix.com/2019/09/jasa-konsultan-cut-and-fill-lahan.html": "Jasa Konsultan Cut and Fill Lahan",
  "https://www.betonjayareadymix.com/2019/09/jasa-analisis-struktur-kualitas-tanah.html": "Jasa Analisis Struktur & Kualitas Tanah"
};

// ============================================================
// 🟢 SEO NOTE - STATUS SEMUA URL
// ============================================================
/*
✅ SEMUA URL di atas sudah valid dengan status [MONEY PAGE].

📌 CATATAN:
   'jasa-pematangan-lahan-pertanian.html' memiliki keyword "pertanian" yang berbeda
   dengan cluster pematangan lahan untuk konstruksi. Ini aman karena intent berbeda.

✅ AMAN - TIDAK PERLU REDIRECT
*/
// ============================================================
// JASA URUGAN TANAH LAHAN - MONEY PAGE
// ============================================================
// 🧠 SEO NOTE: Semua URL di bawah adalah MONEY PAGE dengan intent transaksional.
// Parent: Jasa Urugan Tanah Lahan (/p/jasa-urugan-tanah-lahan.html)
// Breadcrumb: Home > Jasa Konstruksi > Jasa Pematangan Lahan > Jasa Urugan Tanah Lahan > [Nama Layanan]
// ============================================================

const urlMappingJasaUruganTanahLahan = {
  "https://www.betonjayareadymix.com/2019/09/jasa-urugan-tanah-lahan-hemat.html": "Jasa Urugan Tanah Lahan Hemat",
  "https://www.betonjayareadymix.com/2019/09/jasa-urugan-tanah-lahan-stabilitas.html": "Jasa Urugan Tanah Lahan Stabilitas",
  "https://www.betonjayareadymix.com/2019/09/jasa-urugan-tanah-lahan-developer.html": "Jasa Urugan Tanah Lahan Developer",
  "https://www.betonjayareadymix.com/2019/09/jasa-urugan-tanah-lahan-cepat.html": "Jasa Urugan Tanah Lahan Cepat",
  "https://www.betonjayareadymix.com/2019/09/jasa-urugan-tanah-lahan-konstruksi.html": "Jasa Urugan Tanah Lahan Konstruksi",
  "https://www.betonjayareadymix.com/2019/09/jasa-urugan-tanah-lahan-bergaransi.html": "Jasa Urugan Tanah Lahan Bergaransi",
  "https://www.betonjayareadymix.com/2019/09/jasa-urugan-tanah-lahan-alat-berat.html": "Jasa Urugan Tanah Lahan Alat Berat",
  "https://www.betonjayareadymix.com/2019/09/jasa-urugan-tanah-lahan-infrastruktur.html": "Jasa Urugan Tanah Lahan Infrastruktur",
  "https://www.betonjayareadymix.com/2019/09/jasa-urugan-tanah-lahan-perkebunan.html": "Jasa Urugan Tanah Lahan Perkebunan",
  "https://www.betonjayareadymix.com/2019/09/jasa-urugan-tanah-lahan-perumahan.html": "Jasa Urugan Tanah Lahan Perumahan"
};

// ============================================================
// 🟢 SEO NOTE - STATUS SEMUA URL
// ============================================================
/*
✅ SEMUA URL di atas sudah valid dengan status [MONEY PAGE].

📌 CATATAN:
   Perhatikan perbedaan antara 'jasa-urugan-tanah-lahan' dan 'jasa-urugan-tanah-jalan'.
   Keduanya berbeda konteks (lahan vs jalan), tidak ada cannibal.

✅ AMAN - TIDAK PERLU REDIRECT
*/
// ============================================================
// JASA PEMADATAN TANAH LAHAN - MONEY PAGE
// ============================================================
// 🧠 SEO NOTE: Semua URL di bawah adalah MONEY PAGE dengan intent transaksional.
// Parent: Jasa Pemadatan Tanah Lahan (/p/jasa-pemadatan-tanah-lahan.html)
// Breadcrumb: Home > Jasa Konstruksi > Jasa Pematangan Lahan > Jasa Pemadatan Tanah Lahan > [Nama Layanan]
// ============================================================

const urlMappingJasaPemadatanTanahLahan = {
  "https://www.betonjayareadymix.com/2019/09/jasa-pemadatan-tanah-proyek-konstruksi.html": "Jasa Pemadatan Tanah Proyek Konstruksi",
  "https://www.betonjayareadymix.com/2019/09/jasa-pemadatan-lahan-sebelum-pembangunan.html": "Jasa Pemadatan Lahan Sebelum Pembangunan",
  "https://www.betonjayareadymix.com/2019/09/jasa-pemadatan-tanah-pondasi-bangunan.html": "Jasa Pemadatan Tanah Pondasi Bangunan",
  "https://www.betonjayareadymix.com/2019/09/jasa-pemadatan-tanah-jalan-infrastruktur.html": "Jasa Pemadatan Tanah Jalan & Infrastruktur",
  "https://www.betonjayareadymix.com/2019/09/jasa-pemadatan-tanah-perumahan-kavling.html": "Jasa Pemadatan Tanah Perumahan & Kavling",
  "https://www.betonjayareadymix.com/2019/09/jasa-pemadatan-tanah-vibro-roller.html": "Jasa Pemadatan Tanah Vibro Roller",
  "https://www.betonjayareadymix.com/2019/09/jasa-pemadatan-tanah-stamper-kodok.html": "Jasa Pemadatan Tanah Stamper Kodok",
  "https://www.betonjayareadymix.com/2019/09/jasa-pemadatan-tanah-manual-alat-berat.html": "Jasa Pemadatan Tanah Manual & Alat Berat",
  "https://www.betonjayareadymix.com/2019/09/jasa-pemadatan-lahan-perkebunan-pertanian.html": "Jasa Pemadatan Lahan Perkebunan & Pertanian",
  "https://www.betonjayareadymix.com/2019/09/jasa-pemadatan-lahan-gudang-industri.html": "Jasa Pemadatan Lahan Gudang & Industri",
  "https://www.betonjayareadymix.com/2019/09/jasa-pemadatan-tanah-area-parkir-lapangan.html": "Jasa Pemadatan Tanah Area Parkir & Lapangan",
  "https://www.betonjayareadymix.com/2019/09/jasa-pemadatan-tanah-bergaransi.html": "Jasa Pemadatan Tanah Bergaransi",
  "https://www.betonjayareadymix.com/2019/09/jasa-pemadatan-tanah-tanah-lunak.html": "Jasa Pemadatan Tanah Lunak"
};

// ============================================================
// 🟢 SEO NOTE - STATUS SEMUA URL
// ============================================================
/*
✅ SEMUA URL di atas sudah valid dengan status [MONEY PAGE].

📌 CATATAN:
   Perhatikan perbedaan dengan 'jasa-pemadatan-tanah-jalan.html' (yang sudah dianalisa sebelumnya).
   'jasa-pemadatan-tanah-jalan.html' lebih spesifik ke jalan,
   sedangkan cluster ini lebih ke lahan secara umum.

✅ AMAN - TIDAK PERLU REDIRECT
*/
// ============================================================
// JASA PEMBERSIHAN LAHAN - MONEY PAGE
// ============================================================
// 🧠 SEO NOTE: Semua URL di bawah adalah MONEY PAGE dengan intent transaksional.
// Parent: Jasa Pembersihan Lahan (/p/jasa-pembersihan-lahan.html)
// Breadcrumb: Home > Jasa Konstruksi > Jasa Pematangan Lahan > Jasa Pembersihan Lahan > [Nama Layanan]
// ============================================================

const urlMappingJasaPembersihanLahan = {
  "https://www.betonjayareadymix.com/2019/09/jasa-pembersihan-lahan-sebelum-dijual.html": "Jasa Pembersihan Lahan Sebelum Dijual",
  "https://www.betonjayareadymix.com/2019/09/jasa-pembersihan-lahan-terlantar.html": "Jasa Pembersihan Lahan Terlantar",
  "https://www.betonjayareadymix.com/2019/09/jasa-pembersihan-lahan-darurat.html": "Jasa Pembersihan Lahan Darurat",
  "https://www.betonjayareadymix.com/2019/09/jasa-pembersihan-lahan-skala-kecil.html": "Jasa Pembersihan Lahan Skala Kecil",
  "https://www.betonjayareadymix.com/2019/09/jasa-pembersihan-lahan-cepat-efisien.html": "Jasa Pembersihan Lahan Cepat & Efisien",
  "https://www.betonjayareadymix.com/2019/09/jasa-pembersihan-lahan-alat-berat.html": "Jasa Pembersihan Lahan Menggunakan Alat Berat",
  "https://www.betonjayareadymix.com/2019/09/jasa-pembersihan-lahan-kavling.html": "Jasa Pembersihan Lahan Kavling",
  "https://www.betonjayareadymix.com/2019/09/jasa-pembersihan-lahan-komersial-gudang.html": "Jasa Pembersihan Lahan Komersial & Gudang",
  "https://www.betonjayareadymix.com/2019/09/jasa-pembersihan-lahan-industri-ringan.html": "Jasa Pembersihan Lahan Industri Ringan",
  "https://www.betonjayareadymix.com/2019/09/jasa-pembersihan-lahan-pertanian.html": "Jasa Pembersihan Lahan Pertanian",
  "https://www.betonjayareadymix.com/2019/09/jasa-pembersihan-lahan-kebun-perkebunan.html": "Jasa Pembersihan Lahan Kebun & Perkebunan",
  "https://www.betonjayareadymix.com/2019/09/jasa-pembersihan-lahan-perumahan-kavling.html": "Jasa Pembersihan Lahan Perumahan & Kavling",
  "https://www.betonjayareadymix.com/2019/09/jasa-cut-fill-lahan-non-konstruksi.html": "Jasa Cut and Fill Lahan Non Konstruksi",
  "https://www.betonjayareadymix.com/2019/09/jasa-perataan-awal-lahan.html": "Jasa Perataan Awal Lahan",
  "https://www.betonjayareadymix.com/2019/09/jasa-pembersihan-lahan-sampah-puing.html": "Jasa Pembersihan Lahan dari Sampah & Puing",
  "https://www.betonjayareadymix.com/2019/09/jasa-cabut-akar-pembersihan-lahan.html": "Jasa Cabut Akar & Pembersihan Lahan",
  "https://www.betonjayareadymix.com/2019/09/jasa-pembersihan-semak-rumput-liar.html": "Jasa Pembersihan Semak & Rumput Liar",
  "https://www.betonjayareadymix.com/2019/09/jasa-land-clearing-lahan.html": "Jasa Land Clearing Lahan"
};

// ============================================================
// 🟢 SEO NOTE - STATUS SEMUA URL
// ============================================================
/*
✅ SEMUA URL di atas sudah valid dengan status [MONEY PAGE].

📌 CATATAN:
   'jasa-land-clearing-lahan.html' adalah istilah teknis yang baik untuk SEO.
   Pastikan kontennya membahas land clearing secara profesional.

✅ AMAN - TIDAK PERLU REDIRECT
*/
// ============================================================
// JASA BASE COURSE LAHAN - MONEY PAGE
// ============================================================
// 🧠 SEO NOTE: Semua URL di bawah adalah MONEY PAGE dengan intent transaksional.
// Parent: Jasa Base Course Lahan (/p/jasa-base-course-lahan.html)
// Breadcrumb: Home > Jasa Konstruksi > Jasa Pematangan Lahan > Jasa Base Course Lahan > [Nama Layanan]
// ============================================================

const urlMappingJasaBaseCourseLahan = {
  "https://www.betonjayareadymix.com/2019/09/harga-jasa-base-course-lahan-terbaru.html": "Harga Jasa Base Course Lahan Terbaru",
  "https://www.betonjayareadymix.com/2019/09/jasa-base-course-borongan.html": "Jasa Base Course Borongan",
  "https://www.betonjayareadymix.com/2019/09/jasa-base-course-lahan-miring-tidak-rata.html": "Jasa Base Course Lahan Miring & Tidak Rata",
  "https://www.betonjayareadymix.com/2019/09/jasa-base-course-lahan-lunak.html": "Jasa Base Course Lahan Lunak",
  "https://www.betonjayareadymix.com/2019/09/jasa-base-course-gudang-area-industri.html": "Jasa Base Course Gudang & Area Industri",
  "https://www.betonjayareadymix.com/2019/09/jasa-base-course-kavling-lahan-bangunan.html": "Jasa Base Course Kavling & Lahan Bangunan",
  "https://www.betonjayareadymix.com/2019/09/jasa-base-course-area-parkir-lapangan.html": "Jasa Base Course Area Parkir & Lapangan",
  "https://www.betonjayareadymix.com/2019/09/jasa-base-course-jalan-akses.html": "Jasa Base Course Jalan Akses",
  "https://www.betonjayareadymix.com/2019/09/jasa-base-course-alat-berat.html": "Jasa Base Course Alat Berat",
  "https://www.betonjayareadymix.com/2019/09/jasa-base-course-manual-semi-mekanis.html": "Jasa Base Course Manual & Semi Mekanis",
  "https://www.betonjayareadymix.com/2019/09/jasa-base-course-agregat-kelas-c.html": "Jasa Base Course Agregat Kelas C",
  "https://www.betonjayareadymix.com/2019/09/jasa-base-course-agregat-kelas-b.html": "Jasa Base Course Agregat Kelas B",
  "https://www.betonjayareadymix.com/2019/09/jasa-base-course-agregat-kelas-a.html": "Jasa Base Course Agregat Kelas A",
  "https://www.betonjayareadymix.com/2019/09/jasa-base-course-lpb.html": "Jasa Base Course LPB",
  "https://www.betonjayareadymix.com/2019/09/jasa-base-course-lpa.html": "Jasa Base Course LPA"
};

// ============================================================
// 🟢 SEO NOTE - STATUS SEMUA URL
// ============================================================
/*
✅ SEMUA URL di atas sudah valid dengan status [MONEY PAGE].

📌 CATATAN KHUSUS:
   - 'jasa-base-course-lpb.html' (Lapis Pondasi Bawah) dan 'jasa-base-course-lpa.html' (Lapis Pondasi Atas)
     adalah istilah teknis yang sangat baik untuk SEO di bidang konstruksi jalan.
   - Pastikan konten kedua halaman ini menjelaskan perbedaan LPB dan LPA secara teknis.

📌 REKOMENDASI TAMBAHAN:
   Tidak ada URL yang perlu di-redirect. Semua sudah optimal.
*/
/*
📋 RINGKASAN SARAN & TINDAKAN
No	Tindakan	 																	Target							Prioritas
1	Pastikan halaman harga-jasa-elevasi-lahan-terbaru.html 
    menjadi master MONEY page yang paling komprehensif	  							urlMappingJasaElevasiLahan		🟡 MEDIUM
2	Pastikan konten jasa-base-course-lpb.html dan jasa-base-course-lpa.html 
    menjelaskan perbedaan teknis													urlMappingJasaBaseCourseLahan	🟡 MEDIUM
3	Perhatikan perbedaan antara cluster lahan dan cluster jalan 
   (tidak boleh tumpang tindih)														Semua cluster					🟢 LOW
4	Tambahkan internal link antar sesama URL dalam satu cluster						Semua URL						🟢 LOW
*/

// ============================================================
// JASA STABILISASI TANAH LAHAN - SUB2 (MONEY PAGE)
// ============================================================
// 🧠 SEO NOTE: Cluster ini fokus ke layanan stabilisasi tanah untuk berbagai kondisi/skala.
// Intent: Commercial Investigation + Transactional (karena ada kata "jasa").
// Parent: Jasa Stabilisasi Tanah Lahan (dari urlMappingJasaStabilisasiTanahLahan)
// Breadcrumb: Home > Jasa Konstruksi > Jasa Pematangan Lahan > Jasa Stabilisasi Tanah Lahan > [Nama Layanan] (4-5 level, perlu disederhanakan)
// ============================================================

const urlMappingJasaStabilisasiTanahLahan = {
  // ============================================================
  // [MONEY PAGE] - STABILISASI TANAH PER SKALA & METODE
  // 🧠 SEO NOTE: Masing-masing URL menarget keyword spesifik stabilisasi tanah.
  // ============================================================
  
  // ✅ VALID - KONTEN ADA
  "https://www.betonjayareadymix.com/2019/09/jasa-stabilisasi-tanah-skala-kecil.html": "Jasa Stabilisasi Tanah Skala Kecil",
  "https://www.betonjayareadymix.com/2019/09/jasa-stabilisasi-tanah-manual-semi-mekanis.html": "Jasa Stabilisasi Tanah Manual & Semi Mekanis",
  "https://www.betonjayareadymix.com/2019/09/jasa-stabilisasi-tanah-dengan-alat-berat.html": "Jasa Stabilisasi Tanah dengan Alat Berat",
  "https://www.betonjayareadymix.com/2019/09/jasa-stabilisasi-tanah-kawasan-industri.html": "Jasa Stabilisasi Tanah Kawasan Industri",
  "https://www.betonjayareadymix.com/2019/09/jasa-stabilisasi-tanah-area-komersial.html": "Jasa Stabilisasi Tanah Area Komersial",
  "https://www.betonjayareadymix.com/2019/09/jasa-stabilisasi-tanah-lahan-kavling.html": "Jasa Stabilisasi Tanah Lahan Kavling",
  "https://www.betonjayareadymix.com/2019/09/jasa-stabilisasi-tanah-lahan-perumahan.html": "Jasa Stabilisasi Tanah Lahan Perumahan",
  "https://www.betonjayareadymix.com/2019/09/jasa-stabilisasi-tanah-basah.html": "Jasa Stabilisasi Tanah Basah",
  "https://www.betonjayareadymix.com/2019/09/jasa-stabilisasi-tanah-rawan-longsor.html": "Jasa Stabilisasi Tanah Rawan Longsor",
  "https://www.betonjayareadymix.com/2019/09/jasa-stabilisasi-tanah-berpasir.html": "Jasa Stabilisasi Tanah Berpasir",
  "https://www.betonjayareadymix.com/2019/09/jasa-stabilisasi-tanah-lunak-lembek.html": "Jasa Stabilisasi Tanah Lunak & Lembek",
  "https://www.betonjayareadymix.com/2019/09/jasa-stabilisasi-tanah-geotekstil.html": "Jasa Stabilisasi Tanah dengan Geotekstil",
  "https://www.betonjayareadymix.com/2019/09/jasa-stabilisasi-tanah-mekanis.html": "Jasa Stabilisasi Tanah Mekanis",
  "https://www.betonjayareadymix.com/2019/09/jasa-stabilisasi-tanah-kimia.html": "Jasa Stabilisasi Tanah Kimia",
  "https://www.betonjayareadymix.com/2019/09/jasa-stabilisasi-tanah-dengan-kapur.html": "Jasa Stabilisasi Tanah dengan Kapur",
  "https://www.betonjayareadymix.com/2019/09/jasa-stabilisasi-tanah-dengan-semen.html": "Jasa Stabilisasi Tanah dengan Semen"
};

// ============================================================
// 🔴 PERBAIKAN URL - BROKEN LINK & REDIRECT
// ============================================================
/*
🧠 SEO CANNIBAL & TECHNICAL FIX:

| No | URL | Masalah | Solusi | Prioritas |
|----|-----|---------|--------|-----------|
| 1 | /2019/09/jasa-stabilisasi-tanah-dengan-ala | ❌ 404 (broken link) | ⚠️ HAPUS dari const atau PERBAIKI URL menjadi /2019/09/jasa-stabilisasi-tanah-dengan-alat-berat.html (sudah ada) | 🔴 HIGH |

📌 REKOMENDASI:
URL 'jasa-stabilisasi-tanah-dengan-ala' adalah URL yang tidak lengkap/typo.
Kemungkinan yang dimaksud adalah 'jasa-stabilisasi-tanah-dengan-alat-berat.html'
yang sudah ada di const. Hapus URL yang broken dari const.

📌 BREADCRUMB SKIP LEVEL:
Jika breadcrumb asli: Home > Jasa Konstruksi > Jasa Pematangan Lahan > Jasa Stabilisasi Tanah Lahan > Jasa Stabilisasi Tanah Skala Kecil (5 level)
Menjadi: Home > Jasa Konstruksi > Jasa Stabilisasi Tanah > Jasa Stabilisasi Tanah Skala Kecil (4 level)

Alasan skip: "Jasa Pematangan Lahan" di-skip karena halaman tersebut terlalu umum,
tidak perlu muncul di breadcrumb untuk layanan stabilisasi tanah yang sudah spesifik.
*/
// ============================================================
// JASA DRAINASE LAHAN - SUB2 (MONEY PAGE)
// ============================================================
// 🧠 SEO NOTE: Cluster ini fokus ke layanan drainase lahan untuk berbagai kondisi.
// Intent: Commercial Investigation + Transactional.
// Parent: Jasa Drainase Lahan
// Breadcrumb: Home > Jasa Konstruksi > Jasa Pematangan Lahan > Jasa Drainase Lahan > [Nama Layanan] (4-5 level, perlu disederhanakan)
// ============================================================

const urlMappingJasaDrainaseLahan = {
  // ============================================================
  // [MONEY PAGE] - DRAINASE LAHAN PER JENIS & LOKASI
  // ============================================================
  
  "https://www.betonjayareadymix.com/2019/09/jasa-pembuatan-saluran-drainase-lahan.html": "Jasa Pembuatan Saluran Drainase Lahan",
  "https://www.betonjayareadymix.com/2019/09/jasa-drainase-lahan-terbuka.html": "Jasa Drainase Lahan Terbuka",
  "https://www.betonjayareadymix.com/2019/09/jasa-drainase-lahan-tertutup.html": "Jasa Drainase Lahan Tertutup",
  "https://www.betonjayareadymix.com/2019/09/jasa-subdrain-drainase-lahan.html": "Jasa Subdrain Drainase Lahan",
  "https://www.betonjayareadymix.com/2019/09/jasa-sistem-drainase-air-hujan-lahan.html": "Jasa Sistem Drainase Air Hujan Lahan",
  "https://www.betonjayareadymix.com/2019/09/jasa-pembuatan-sumur-resapan.html": "Jasa Pembuatan Sumur Resapan",
  "https://www.betonjayareadymix.com/2019/09/jasa-pembuatan-parit-gorong-gorong-lahan.html": "Jasa Pembuatan Parit & Gorong-Gorong Lahan",
  "https://www.betonjayareadymix.com/2019/09/jasa-kolam-resapan-lahan.html": "Jasa Pembuatan Kolam Resapan Lahan",
  "https://www.betonjayareadymix.com/2019/09/jasa-normalisasi-drainase-lahan.html": "Jasa Normalisasi Drainase Lahan",
  "https://www.betonjayareadymix.com/2019/09/jasa-drainase-lahan-perumahan.html": "Jasa Drainase Lahan Perumahan",
  "https://www.betonjayareadymix.com/2019/09/jasa-drainase-lahan-kavling-lahan-kosong.html": "Jasa Drainase Lahan Kavling & Lahan Kosong",
  "https://www.betonjayareadymix.com/2019/09/jasa-drainase-lahan-area-komersial.html": "Jasa Drainase Lahan Area Komersial",
  "https://www.betonjayareadymix.com/2019/09/jasa-drainase-lahan-kawasan-industri.html": "Jasa Drainase Lahan Kawasan Industri",
  "https://www.betonjayareadymix.com/2019/09/jasa-drainase-lahan-dengan-alat-berat.html": "Jasa Drainase Lahan Dengan Alat Berat",
  "https://www.betonjayareadymix.com/2019/09/jasa-drainase-lahan-manual-semi-mekanis.html": "Jasa Drainase Lahan Manual & Semi Mekanis",
  "https://www.betonjayareadymix.com/2019/09/jasa-drainase-lahan-rawan-banjir.html": "Jasa Drainase Lahan Rawan Banjir",
  "https://www.betonjayareadymix.com/2019/09/jasa-drainase-lahan-cepat-siap-digunakan.html": "Jasa Drainase Lahan Cepat Siap Digunakan"
};

// ============================================================
// 🟡 SARAN TAMBAHAN URL (OPTIONAL)
// ============================================================
/*
📌 URL YANG DISARANKAN UNTUK DITAMBAHKAN (JIKA KONTEN MEMADAI):

| URL | Nama Halaman | Status | Parent | Alasan SEO |
|-----|--------------|--------|--------|------------|
| /2019/09/jasa-drainase-lahan-pertanian.html | Jasa Drainase Lahan Pertanian | ⚠️ SARAN DITAMBAHKAN | Jasa Drainase Lahan | Menarget keyword spesifik lahan pertanian |
| /2019/09/jasa-drainase-lahan-perkebunan.html | Jasa Drainase Lahan Perkebunan | ⚠️ SARAN DITAMBAHKAN | Jasa Drainase Lahan | Menarget keyword spesifik perkebunan |

📌 CATATAN: URL di atas disarankan hanya jika kontennya memadai.
Jika konten tipis, lebih baik digabung ke halaman induk.
*/

// ============================================================
// 🟢 SEO NOTE - STATUS SEMUA URL
// ============================================================
/*
✅ SEMUA URL di atas sudah valid dengan status [MONEY PAGE].
✅ Masing-masing menarget keyword spesifik (drainase terbuka, tertutup, subdrain, dll).
✅ Tidak ada duplikasi intent karena jenis drainase berbeda.
✅ Breadcrumb perlu disederhanakan dari 5 level menjadi 4 level.

📌 REKOMENDASI BREADCRUMB:
Home > Jasa Konstruksi > Jasa Drainase Lahan > Jasa Drainase Lahan Terbuka (4 level)
(Skip "Jasa Pematangan Lahan" karena terlalu umum)
*/
// ============================================================
// JASA GEOTEKSTIL LAHAN - SUB2 (MONEY PAGE)
// ============================================================
// 🧠 SEO NOTE: Cluster ini fokus ke layanan geotekstil untuk berbagai aplikasi.
// Intent: Commercial Investigation + Transactional (ada kata "harga" dan "jasa").
// Parent: Jasa Geotekstil Lahan
// Breadcrumb: Home > Jasa Konstruksi > Jasa Pematangan Lahan > Jasa Geotekstil Lahan > [Nama Layanan] (4-5 level)
// ============================================================

const urlMappingJasaGeotekstilLahan = {
  // ============================================================
  // [MONEY PAGE] - GEOTEKSTIL PER JENIS & APLIKASI
  // ============================================================
  
  "https://www.betonjayareadymix.com/2019/09/harga-jasa-geotekstil-lahan-terbaru.html": "Harga Jasa Geotekstil Lahan Terbaru",
  "https://www.betonjayareadymix.com/2019/09/jasa-geotekstil-borongan.html": "Jasa Geotekstil Borongan",
  "https://www.betonjayareadymix.com/2019/09/jasa-geotekstil-stabilisasi-subgrade.html": "Jasa Geotekstil Stabilisasi Subgrade",
  "https://www.betonjayareadymix.com/2019/09/jasa-pemasangan-geotekstil-base-course.html": "Jasa Pemasangan Geotekstil Base Course",
  "https://www.betonjayareadymix.com/2019/09/jasa-geotekstil-lahan-lunak.html": "Jasa Geotekstil Lahan Lunak",
  "https://www.betonjayareadymix.com/2019/09/jasa-geotekstil-fondasi-bangunan-gudang.html": "Jasa Geotekstil Fondasi Bangunan & Gudang",
  "https://www.betonjayareadymix.com/2019/09/jasa-geotekstil-area-parkir-lapangan.html": "Jasa Geotekstil Area Parkir & Lapangan",
  "https://www.betonjayareadymix.com/2019/09/jasa-geotekstil-jalan-akses.html": "Jasa Geotekstil Jalan Akses",
  "https://www.betonjayareadymix.com/2019/09/jasa-geotekstil-separator.html": "Jasa Geotekstil Separator",
  "https://www.betonjayareadymix.com/2019/09/jasa-geotekstil-non-woven.html": "Jasa Geotekstil Non Woven",
  "https://www.betonjayareadymix.com/2019/09/jasa-geotekstil-woven.html": "Jasa Geotekstil Woven"
};

// ============================================================
// 🟡 SARAN TAMBAHAN URL (OPTIONAL)
// ============================================================
/*
📌 URL YANG DISARANKAN UNTUK DITAMBAHKAN (JIKA KONTEN MEMADAI):

| URL | Nama Halaman | Status | Parent | Alasan SEO |
|-----|--------------|--------|--------|------------|
| /2019/09/jasa-geotekstil-untuk-drainase.html | Jasa Geotekstil untuk Drainase | ⚠️ SARAN DITAMBAHKAN | Jasa Geotekstil Lahan | Menarget aplikasi spesifik |
| /2019/09/jasa-geotekstil-untuk-pondasi.html | Jasa Geotekstil untuk Pondasi | ⚠️ SARAN DITAMBAHKAN | Jasa Geotekstil Lahan | Menarget aplikasi spesifik |

📌 CATATAN: URL di atas disarankan hanya jika kontennya memadai.
*/

// ============================================================
// 🟢 SEO NOTE - STATUS SEMUA URL
// ============================================================
/*
✅ SEMUA URL di atas sudah valid dengan status [MONEY PAGE].
✅ Ada 1 URL dengan kata "harga" di awal - ini adalah master price page yang bagus.
✅ Masing-masing menarget keyword spesifik (woven, non-woven, separator, dll).

📌 REKOMENDASI BREADCRUMB:
Home > Jasa Konstruksi > Jasa Geotekstil Lahan > Jasa Geotekstil Woven (4 level)
*/
// ============================================================
// JASA PERSIAPAN PONDASI LAHAN - SUB2 (MONEY PAGE)
// ============================================================
// 🧠 SEO NOTE: Cluster ini fokus ke layanan persiapan lahan untuk pondasi.
// Intent: Commercial Investigation + Transactional.
// Parent: Jasa Persiapan Pondasi Lahan
// Breadcrumb: Home > Jasa Konstruksi > Jasa Persiapan Pondasi Lahan > [Nama Layanan] (3-4 level)
// ============================================================

const urlMappingJasaPersiapanPondasiLahan = {
  // ============================================================
  // [MONEY PAGE] - PERSIAPAN PONDASI PER JENIS PROYEK & METODE
  // ============================================================
  
  "https://www.betonjayareadymix.com/2019/09/harga-jasa-persiapan-pondasi-lahan.html": "Harga Jasa Persiapan Pondasi Lahan",
  "https://www.betonjayareadymix.com/2019/09/jasa-persiapan-pondasi-borongan.html": "Jasa Persiapan Pondasi Borongan",
  "https://www.betonjayareadymix.com/2019/09/jasa-persiapan-pondasi-gedung-bertingkat.html": "Jasa Persiapan Pondasi Gedung Bertingkat",
  "https://www.betonjayareadymix.com/2019/09/jasa-persiapan-pondasi-gudang-pabrik.html": "Jasa Persiapan Pondasi Gudang & Pabrik",
  "https://www.betonjayareadymix.com/2019/09/jasa-persiapan-pondasi-rumah-tinggal.html": "Jasa Persiapan Pondasi Rumah Tinggal",
  "https://www.betonjayareadymix.com/2019/09/jasa-persiapan-pondasi-lahan-miring.html": "Jasa Persiapan Pondasi Lahan Miring",
  "https://www.betonjayareadymix.com/2019/09/jasa-persiapan-pondasi-lahan-lunak.html": "Jasa Persiapan Pondasi Lahan Lunak",
  "https://www.betonjayareadymix.com/2019/09/jasa-stabilisasi-tanah-untuk-pondasi.html": "Jasa Stabilisasi Tanah untuk Pondasi",
  "https://www.betonjayareadymix.com/2019/09/jasa-pemasangan-geotekstil-pondasi.html": "Jasa Pemasangan Geotekstil Pondasi",
  "https://www.betonjayareadymix.com/2019/09/jasa-base-course-pondasi-bangunan.html": "Jasa Base Course Pondasi Bangunan",
  "https://www.betonjayareadymix.com/2019/09/jasa-galian-urugan-pondasi.html": "Jasa Galian & Urugan Pondasi",
  "https://www.betonjayareadymix.com/2019/09/jasa-pemadatan-tanah-pondasi.html": "Jasa Pemadatan Tanah Pondasi",
  "https://www.betonjayareadymix.com/2019/09/jasa-perataan-grading-lahan-pondasi.html": "Jasa Perataan & Grading Lahan Pondasi",
  "https://www.betonjayareadymix.com/2019/09/jasa-pembersihan-clearing-lahan-pondasi.html": "Jasa Pembersihan & Clearing Lahan Pondasi"
};

// ============================================================
// 🟡 SARAN TAMBAHAN URL (OPTIONAL)
// ============================================================
/*
📌 URL YANG DISARANKAN UNTUK DITAMBAHKAN (JIKA KONTEN MEMADAI):

| URL | Nama Halaman | Status | Parent | Alasan SEO |
|-----|--------------|--------|--------|------------|
| /2019/09/jasa-persiapan-pondasi-tiang-pancang.html | Jasa Persiapan Pondasi Tiang Pancang | ⚠️ SARAN DITAMBAHKAN | Jasa Persiapan Pondasi Lahan | Menarget metode pondasi spesifik |
| /2019/09/jasa-persiapan-pondasi-bore-pile.html | Jasa Persiapan Pondasi Bore Pile | ⚠️ SARAN DITAMBAHKAN | Jasa Persiapan Pondasi Lahan | Menarget metode pondasi spesifik |

📌 CATATAN: URL di atas disarankan hanya jika kontennya memadai.
*/

// ============================================================
// 🟢 SEO NOTE - STATUS SEMUA URL
// ============================================================
/*
✅ SEMUA URL di atas sudah valid dengan status [MONEY PAGE].
✅ Ada 1 URL dengan kata "harga" di awal - ini adalah master price page yang bagus.
✅ Masing-masing menarget keyword spesifik (per jenis proyek dan metode).

📌 REKOMENDASI BREADCRUMB:
Home > Jasa Konstruksi > Jasa Persiapan Pondasi Lahan > Jasa Persiapan Pondasi Rumah Tinggal (4 level)

📌 CATATAN: Halaman 'jasa-perataan-grading-lahan-pondasi.html' dan 
'jasa-pembersihan-clearing-lahan-pondasi.html' memiliki konten (dari data yang diberikan),
jadi tetap dipertahankan.
*/
/*
📋 RINGKASAN SARAN & TINDAKAN
No	Tindakan																Target								Prioritas
1	Hapus URL broken jasa-stabilisasi-tanah-dengan-ala dari const			urlMappingJasaStabilisasiTanahLahan	🔴 HIGH
2	Sederhanakan breadcrumb dari 5 level menjadi 4 level					Semua cluster						🟡 MEDIUM
3	Pastikan setiap halaman memiliki internal link ke parent dan MONEY page	Semua URL							🟡 MEDIUM
4	Pertimbangkan tambahan URL untuk drainase pertanian/perkebunan			urlMappingJasaDrainaseLahan			🟢 LOW
5	Pertimbangkan tambahan URL untuk geotekstil drainase/pondasi			urlMappingJasaGeotekstilLahan		🟢 LOW
*/

// Menyimpan elemen yang dihapus dalam variabel
let removedElementsJasaCuttingBetonPost = {};
// Fungsi untuk menghapus elemen berdasarkan ID
function removeCondition(conditionId) {
    const conditionElement = document.getElementById(conditionId);

    if (conditionElement) {
        // Menyimpan elemen yang dihapus dalam objek untuk bisa dikembalikan
        removedElementsJasaCuttingBetonPost[conditionId] = conditionElement;
        conditionElement.remove(); // Menghapus elemen tersebut
    }
}

// Fungsi untuk mengembalikan elemen yang telah dihapus
function restoreCondition(conditionId) {
    const breadcrumb = document.querySelector('.breadcrumb');
    const elementToRestore = removedElementsJasaCuttingBetonPost[conditionId]; // Mendapatkan elemen yang disimpan

    if (elementToRestore) {
        breadcrumb.appendChild(elementToRestore); // Menambahkan elemen kembali ke dalam breadcrumb
        delete removedElementsJasaCuttingBetonPost[conditionId]; // Menghapus elemen dari objek setelah dikembalikan
    } else {
        console.log(`Elemen dengan ID ${conditionId} tidak ditemukan di removedElementsJasaCuttingBetonPost.`);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    // var currentUrl = window.location.href;
     //const cleanUrl = currentUrl.split('?')[0]; // Menghapus parameter seperti ?m=1
    const cleanUrlJasaCuttingBetonPost = window.location.href.split(/[?#]/)[0]; // Menghilangkan parameter seperti ?m=1


		/* ==========================================================
   🧩 HybridDateModified v2.5 — StableHash + Safe Load Order
   Fitur:
   - Menjamin detect-evergreen.js dimuat lebih dulu
   - Update <meta dateModified> hanya jika URL terdaftar
   - Stable hash → hasil dateModified konsisten
   ========================================================== */
/*
(async function runHybridDateModified() {
  try {
    // --- helper untuk load eksternal JS secara promise ---
    function loadExternalJSAsync(src) {
      return new Promise((resolve, reject) => {
        const s = document.createElement("script");
        s.src = src;
        s.async = true;
        s.onload = () => resolve(src);
        s.onerror = () => reject(new Error("Gagal load " + src));
        document.head.appendChild(s);
      });
    }

         // --- loader evergreen JS dengan sessionStorage (anti 429) ---
    async function loadEvergreenScript() {
      const KEY = "evergreenScriptLoaded";

      const needReload =
        !sessionStorage.getItem(KEY) ||
        !window.AEDMetaDates ||
        !window.detectEvergreenReady;

      if (!needReload) {
        console.log("⚡ detect-evergreen.js sudah aktif & variable ready — SKIP load");
      } else {
        console.log("⏳ load detect-evergreen.js dari GitHack…");
        try {
          await loadExternalJSAsync(
            "https://raw.githack.com/aliyul/solution-blogger/main/detect-evergreen.js"
          );
          window.detectEvergreenReady = true;
          sessionStorage.setItem(KEY, "true");
          console.log("✅ detect-evergreen.js LOADED & READY");
        } catch (err) {
          console.error("❌ Gagal load detect-evergreen.js", err);
          sessionStorage.removeItem(KEY);
        }
      }

      // --- ALWAYS run evergreen check tiap halaman ---
      if (typeof window.runEvergreenCheck === "function") {
        console.log("🔁 Running evergreen check for this page...");
        window.runEvergreenCheck();
      } else {
        console.warn("⚠️ runEvergreenCheck tidak ditemukan!");
      }
    }

	
    // --- validasi URL terdaftar ---
    if (!urlMappingJasaCuttingBeton[cleanUrlJasaCuttingBetonPost]) {
      console.log(`[HybridDateModified] URL tidak terdaftar: ${cleanUrlJasaCuttingBetonPost}`);
      return;
    }


  // === Tanggal nextUpdate1 global ===
	const globalNextUpdate1 = "2026-02-14T00:00:00.000Z";
	console.log(`🌐 [AutoMeta] Detected jasa-cutting-beton-post: ${cleanUrlJasaCuttingBetonPost}`);

    // --- pastikan meta nextUpdate1 ada ---
    let metaNextUpdate1 = document.querySelector('meta[name="nextUpdate1"]');
    if (!metaNextUpdate1) {
      metaNextUpdate1 = document.createElement("meta");
      metaNextUpdate1.setAttribute("name", "nextUpdate1");
      metaNextUpdate1.setAttribute("content", globalNextUpdate1);
      document.head.appendChild(metaNextUpdate1);
      console.log(`🆕 [AutoMeta] Meta nextUpdate1 ditambahkan → ${globalNextUpdate1}`);
    } else {
      console.log("✅ [AutoMeta] Meta nextUpdate1 sudah ada, tidak dibuat ulang.");
    }

// ✅ Load evergreen JS (anti 429)
    await loadEvergreenScript();

    console.log("✅ detect-evergreen.js selesai dimuat.");

    // --- pastikan AEDMetaDates sudah tersedia ---
    if (!window.AEDMetaDates || !window.AEDMetaDates.dateModified) {
      console.warn("[HybridDateModified] AEDMetaDates tidak ditemukan, skip update.");
      return;
    }

    const { dateModified, nextUpdate, type } = window.AEDMetaDates;

    // 🔒 Stable hash untuk variasi waktu stabil
    function stableHash(str) {
      let hash = 0;
      for (let i = 0; i < str.length; i++) {
        hash = (hash << 5) - hash + str.charCodeAt(i);
        hash |= 0;
      }
      return Math.abs(hash);
    }

    const hash = stableHash(cleanUrlJasaCuttingBetonPost);
    const offsetSeconds = hash % 86400;
    const finalDate = new Date(new Date(dateModified).getTime() + offsetSeconds * 1000);
    const isoDate = finalDate.toISOString();

    // 🧱 Update meta dateModified
    [
      ['meta[itemprop="dateModified"]', 'itemprop', 'dateModified'],
      ['meta[name="dateModified"]', 'name', 'dateModified'],
      ['meta[property="article:modified_time"]', 'property', 'article:modified_time']
    ].forEach(([selector, attr, val]) => {
      let meta = document.querySelector(selector);
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute(attr, val);
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", isoDate);
    });

		// Pastikan AEDMetaDates sudah ada minimal sebagai objek kosong
	window.AEDMetaDates = window.AEDMetaDates || {};
	
	// Update hanya properti dateModified tanpa menghapus lainnya
	window.AEDMetaDates = {
	  ...window.AEDMetaDates,
	  dateModified: isoDate
	};
	
	console.log("✅ AEDMetaDates updated jasa-cutting-beton-post:", window.AEDMetaDates);
    console.log(`✅ [HybridDateModified v2.5] ${cleanUrlJasaCuttingBetonPost} → ${isoDate} | type=${type || "-"}`);

    // 🧩 Perbarui schema jika ada
    const schemaEl = document.querySelector('script[data-schema="evergreen-maintenance"]');
    if (schemaEl) {
      try {
        const data = JSON.parse(schemaEl.textContent.trim());
        data.dateModified = isoDate;
        if (data.maintenanceSchedule) data.maintenanceSchedule.scheduledTime = nextUpdate;
        schemaEl.textContent = JSON.stringify(data, null, 2);
        console.log(`🔄 Schema maintenance diperbarui → dateModified: ${isoDate}`);
      } catch (err) {
        console.error("❌ Gagal update schema:", err);
      }
    }

  } catch (err) {
    console.error("[HybridDateModified] Fatal error:", err);
  }
})();
*/
    // --- gabungkan semua mapping ---
    const urlMappingGabungan = Object.assign(
      {},
		urlMappingJasaCuttingBeton ,
		urlMappingJasaSondir,
		urlMappingJasaCpt,
		urlMappingJasaBoringTanah,
		urlMappingJasaLabTanah,
		urlMappingJasaUjiPenetrasi,
		urlMappingJasaPemotonganBukitLahan,
		urlMappingJasaPengupasanLahanTanah,
		urlMappingJasaTebangPohon,
		urlMappingJasaPerataandanGradingLahan,
		urlMappingJasaElevasiLahan,
		urlMappingJasaBadanLahan,
		urlMappingJasaCutandFillLahan,
		urlMappingJasaUruganTanahLahan,
		urlMappingJasaPemadatanTanahLahan,
		urlMappingJasaPembersihanLahan,
		urlMappingJasaBaseCourseLahan ,
		urlMappingJasaStabilisasiTanahLahan ,
		urlMappingJasaDrainaseLahan,
		urlMappingJasaGeotekstilLahan,
		urlMappingJasaPersiapanPondasiLahan
    );

    // --- validasi URL terdaftar ---
	 // --- validasi URL terdaftar ---
    if (!urlMappingGabungan[cleanUrlJasaCuttingBetonPost]) {
      console.log(`[HybridDateModified] URL tidak terdaftar: ${cleanUrlJasaCuttingBetonPost}`);
      return;
    }

	(async function runHybridDateModified() {
		  try {
		
		    function loadExternalJS(src) {
		      return new Promise((resolve) => {
		        if (document.querySelector(`script[src="${src}"]`)) {
		          resolve();
		          return;
		        }
		
		        const s = document.createElement("script");
		        s.src = src;
		        s.defer = true; // 🔥 PENTING
		        s.onload = resolve;
		        s.onerror = () => {
		          console.warn("[Evergreen] Gagal load:", src);
		          resolve(); // ❗ jangan reject
		        };
		        document.head.appendChild(s);
		      });
		    }
		
		    function waitForDetectEvergreen() {
		      return new Promise((resolve) => {
		        if (
		          window.__detectEvergreenReady &&
		          typeof window.detectEvergreen === "function"
		        ) {
		          resolve(true);
		        } else {
		          window.addEventListener(
		            "detectEvergreenReady",
		            () => resolve(true),
		            { once: true }
		          );
		        }
		      });
		    }
		
		    async function loadEvergreenScript(manualDate = null) {
		
		      if (typeof window.detectEvergreen !== "function") {
		        console.log("⏳ Loading detectEvergreen...");
		
		        await loadExternalJS(
		          "https://raw.githack.com/aliyul/solution-blogger/main/detect-evergreen.js"
		        );
		
		        await waitForDetectEvergreen();
		        console.log("✅ detectEvergreen READY");
		      } else {
		        console.log("⚡ detectEvergreen already available");
		      }
		
		      const config = manualDate
		        ? { customDateModified: manualDate }
		        : {};
		
		      console.log("🧠 detectEvergreen config:", config);
		
		      try {
		        window.detectEvergreen(config);
		      } catch (e) {
		        console.error("[Evergreen] Execution failed:", e);
		      }
		    }
		
		    // =============================
		    // MODE PEMANGGILAN
		    // =============================
		
		    // ✔ MANUAL (ONCE UPDATE EVERGREEN)
		    await loadEvergreenScript("2026-01-15T10:30:00+07:00");
		
		    // ✔ AUTO MODE
		    // await loadEvergreenScript();
		              console.log("✅ detect-evergreen.js selesai dimuat.");

			 function toISOWithTimezoneLocal(date, offset = "+07:00") {
				  if (!date) return null;
				  const d = new Date(date);
				  if (isNaN(d.getTime())) return null;
				
				  const pad = (n) => n.toString().padStart(2, "0");
				  const yyyy = d.getFullYear();
				  const mm = pad(d.getMonth() + 1);
				  const dd = pad(d.getDate());
				  const hh = pad(d.getHours());
				  const min = pad(d.getMinutes());
				  const ss = pad(d.getSeconds());
				
				  return `${yyyy}-${mm}-${dd}T${hh}:${min}:${ss}${offset}`;
				}
			    // --- pastikan AEDMetaDates sudah tersedia ---
			    if (!window.AEDMetaDates || !window.AEDMetaDates.dateModified) {
			      console.warn("[HybridDateModified] AEDMetaDates tidak ditemukan, skip update.");
			      return;
			    }
			
			    const { dateModified, nextUpdate, type } = window.AEDMetaDates;
			
			    // 🔒 Stable hash untuk variasi waktu stabil
			    function stableHash(str) {
			      let hash = 0;
			      for (let i = 0; i < str.length; i++) {
			        hash = (hash << 5) - hash + str.charCodeAt(i);
			        hash |= 0;
			      }
			      return Math.abs(hash);
			    }
			
			    const hash = stableHash(cleanUrlJasaCuttingBetonPost);
			    const offsetSeconds = hash % 86400;
			    const finalDate = new Date(new Date(dateModified).getTime() + offsetSeconds * 1000);
			    const isoDate = toISOWithTimezoneLocal(finalDate);
			
			    // 🧱 Update meta dateModified
			    [
			      ['meta[itemprop="dateModified"]', 'itemprop', 'dateModified'],
			      ['meta[name="dateModified"]', 'name', 'dateModified'],
			      ['meta[property="article:modified_time"]', 'property', 'article:modified_time']
			    ].forEach(([selector, attr, val]) => {
			      let meta = document.querySelector(selector);
			      if (!meta) {
			        meta = document.createElement("meta");
			        meta.setAttribute(attr, val);
			        document.head.appendChild(meta);
			      }
			      meta.setAttribute("content", isoDate);
			    });
			
				
							// Pastikan AEDMetaDates sudah ada minimal sebagai objek kosong
				window.AEDMetaDates = window.AEDMetaDates || {};
				
				// Update hanya properti dateModified tanpa menghapus lainnya
				window.AEDMetaDates = {
				  ...window.AEDMetaDates,
				  dateModified: isoDate
				};
				
				console.log("✅ AEDMetaDates updated jasa-pengeboran-post:", window.AEDMetaDates);
			    console.log(`✅ [HybridDateModified v2.5] ${cleanUrlJasaCuttingBetonPost} → ${isoDate} | type=${type || "-"}`);
			
			    // 🧩 Perbarui schema jika ada
			    const schemaEl = document.querySelector('script[data-schema="evergreen-maintenance"]');
			    if (schemaEl) {
			      try {
			        const data = JSON.parse(schemaEl.textContent.trim());
			        data.dateModified = isoDate;
			        if (data.maintenanceSchedule) data.maintenanceSchedule.scheduledTime = nextUpdate;
			        schemaEl.textContent = JSON.stringify(data, null, 2);
			        console.log(`🔄 Schema maintenance diperbarui → dateModified: ${isoDate}`);
			      } catch (err) {
			        console.error("❌ Gagal update schema:", err);
			      }
			    }
			  
		  } catch (err) {
		    console.error("[HybridDateModified] Fatal:", err);
		  }
		})();
	
	
     // Menemukan elemen menggunakan Id
    var JasaKonsCuttingBetonPost = document.getElementById("JasaKonsCuttingBetonPost");

    if (!JasaKonsCuttingBetonPost) {
        console.error("elemen Id JasaKonsCuttingBetonPost kondisi terhapus");
        return;
    }
   
     var JasaKonstruksiCuttingBetonPostLink = document.getElementById("JasaKonstruksiCuttingBetonPost");
     var JasaCuttingBetonPostLink = document.getElementById("JasaCuttingBetonPost");
     var JasaPematanganLahanPostLink = document.getElementById("JasaPematanganLahanPost");
     var JasaUjiTanahPostLink = document.getElementById("JasaUjiTanahPost");
	
 //SUB JasaPematanganLahanPostLink
	var JasaPemotonganBukitLahanPostLink = document.getElementById("JasaPemotonganBukitLahanPost");
	var JasaPengupasanLahanTanahPostLink = document.getElementById("JasaPengupasanLahanTanahPost");
	var JasaTebangPohonPostLink = document.getElementById("JasaTebangPohonPost");
	var JasaPerataandanGradingLahanPostLink = document.getElementById("JasaPerataandanGradingLahanPost");
	var JasaElevasiLahanPostLink = document.getElementById("JasaElevasiLahanPost");
	var JasaBadanLahanPostLink = document.getElementById("JasaBadanLahanPost");
	var JasaCutandFillLahanPostLink = document.getElementById("JasaCutandFillLahanPost");
	var JasaUruganTanahLahanPostLink = document.getElementById("JasaUruganTanahLahanPost");
	var JasaPemadatanTanahLahanPostLink = document.getElementById("JasaPemadatanTanahLahanPost");
	var JasaBaseCourseLahanPostLink = document.getElementById("JasaBaseCourseLahanPost");
	var JasaStabilisasiTanahLahanPostLink = document.getElementById("JasaStabilisasiTanahLahanPost");
	var JasaDrainaseLahanPostLink = document.getElementById("JasaDrainaseLahanPost");
	var JasaGeotekstilLahanPostLink = document.getElementById("JasaGeotekstilLahanPost");
	var JasaPersiapanPondasiLahanPostLink = document.getElementById("JasaPersiapanPondasiLahanPost");

//SUB JasaPematanganLahanPostLink
	var JasaCptPostLink = document.getElementById("JasaCptPost");
	var JasaBoringTanahPostLink = document.getElementById("JasaBoringTanahPost");
	var JasaLabTanahPostLink = document.getElementById("JasaLabTanahPost");
	var JasaUjiPenetrasiPostLink = document.getElementById("JasaUjiPenetrasiPost");
	var JasaSondirPostLink = document.getElementById("JasaSondirPost");

    
     /*var JasaBorAirPostLink = document.getElementById("JasaBorAirPost");
     var JasaBorePilePostLink = document.getElementById("JasaBorePilePost");
     var JasaCoringBetonPostLink = document.getElementById("JasaCoringBetonPost");
     var JasaBorTembokPostLink = document.getElementById("JasaBorTembokPost");
     var JasaBorBetonPostLink = document.getElementById("JasaBorBetonPost");
     var JasaBorTanahPostLink = document.getElementById("JasaBorTanahPost");
     var JasaBorHorizontalPostLink = document.getElementById("JasaBorHorizontalPost");
    */
    	
     var pageNameJasaKonsCuttingBetonPost = document.getElementById("pageNameJasaKonsCuttingBetonPost");
    

     // Default untuk menyembunyikan elemen
     JasaKonstruksiCuttingBetonPostLink.style.visibility = 'hidden';
     JasaCuttingBetonPostLink.style.visibility = 'hidden';
	
     //SUB JasaPengeboranPost
     /*JasaBorAirPostLink.style.visibility = 'hidden';
     JasaBorePilePostLink.style.visibility = 'hidden';
     JasaCoringBetonPostLink.style.visibility = 'hidden';
     JasaBorTembokPostLink.style.visibility = 'hidden';
     JasaBorBetonPostLink.style.visibility = 'hidden';
     JasaBorTanahPostLink.style.visibility = 'hidden';
     JasaBorHorizontalPostLink.style.visibility = 'hidden';
    */
     pageNameJasaKonsCuttingBetonPost.textContent = "";
	
    //SUB urlMappingBangunan
 if (urlMappingJasaCuttingBeton[cleanUrlJasaCuttingBetonPost]) {
        restoreCondition('JasaKonsCuttingBetonPost');
        restoreCondition('JasaCuttingBetonPost');
       // restoreCondition('JasaBorAirPost');
     
        //hapus elemen div id lain KECUALI JasaPengeboranPost
	removeCondition('JasaDesInPost');
        removeCondition('ProdukInFurPost');
        removeCondition('ProdukKonsSaluranPost');
        removeCondition('ProdukKonsPembatasPost');
        removeCondition('ProdukKonsDindingModularPost');
        removeCondition('ProdukKonsPost');
        removeCondition('MaterialKonsStukturPost');
        removeCondition('MaterialKonsFasadPelapisEksteriorPost');
        removeCondition('MaterialKonsAtapPenutupPost');
        removeCondition('JasaKonsPondasiTanahPost');
        removeCondition('JasaKonsPerkuatanTanahLongsorPost');
        removeCondition('JasaKonsPengeboranPost');
        removeCondition('JasaKonsPembatasPost');
        removeCondition('JasaKonsPerbaikanPost');
	//removeCondition('JasaKonsCuttingBetonPost');
	removeCondition('JasaKonsBongkarBangunanPost');
        removeCondition('JasaKonsFinishingPost');
        removeCondition('JasaKonsStrukturPost');
        removeCondition('JasaKonsAlatKonstruksiPost');
        removeCondition('JasaKonsJalanPerkerasanPost');
	
	 //hapus elemen JasaPematanganLahanPost SEMUA
        removeCondition('JasaPematanganLahanPost');

	    
	    removeCondition('JasaPemotonganBukitLahanPost');
	    removeCondition('JasaPembersihanLahanPost');
        removeCondition('JasaPengupasanLahanTanahPost');
        removeCondition('JasaTebangPohonPost');
        removeCondition('JasaPerataandanGradingLahanPost');
        removeCondition('JasaElevasiLahanPost');
        removeCondition('JasaBadanLahanPost');
        removeCondition('JasaCutandFillLahanPost');
        removeCondition('JasaUruganTanahLahanPost');
        removeCondition('JasaPemadatanTanahLahanPost');
        removeCondition('JasaBaseCourseLahanPost');
        removeCondition('JasaStabilisasiTanahLahanPost');
        removeCondition('JasaDrainaseLahanPost');
        removeCondition('JasaGeotekstilLahanPost');
        removeCondition('JasaPersiapanPondasiLahanPost');

	 //hapus elemen JasaPematanganLahanPost SEMUA
        removeCondition('JasaUjiTanahPost');
	
        removeCondition('JasaCptPost');
        removeCondition('JasaBoringTanahPost');
        removeCondition('JasaLabTanahPost');
        removeCondition('JasaUjiPenetrasiPost');
        removeCondition('JasaSondirPost');
     
	
        JasaKonstruksiCuttingBetonPostLink.style.visibility = 'visible';
       //TAMPILKAN PONDASI BANGUNAN
        JasaCuttingBetonPostLink.style.visibility = 'visible';
	//TAMPILKAN JasaBorAirPost
       // JasaBorAirPostLink.style.visibility = 'visible';
        pageNameJasaKonsCuttingBetonPost.textContent = urlMappingJasaCuttingBeton[cleanUrlJasaCuttingBetonPost];
    }
      // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaCuttingBeton[cleanUrlJasaCuttingBetonPost]) {
       const jsonLDBreadcrumb = {
           "@context": "https://schema.org",
           "@type": "BreadcrumbList",
           "itemListElement": [
	    {
	      "@type": "ListItem",
	      "position": 1,
	      "name": "Beton Jaya Readymix",
	      "item": "https://www.betonjayareadymix.com/"
	    },
               {
                   "@type": "ListItem",
                   "position": 2,
                   "name": "Jasa Konstruksi",
                   "item": "https://www.betonjayareadymix.com/p/jasa-konstruksi.html"
               },
               {
                   "@type": "ListItem",
                   "position": 3,
                   "name": "Jasa Cutting Beton",
                   "item": "https://www.betonjayareadymix.com/p/jasa-cutting-beton.html"
               },
               {
                   "@type": "ListItem",
                   "position": 4,
                   "name": urlMappingJasaCuttingBeton[cleanUrlJasaCuttingBetonPost],
                   "item": cleanUrlJasaCuttingBetonPost
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }

//SUB JasaPematanganLahanPost
 if (urlMappingJasaTebangPohon[cleanUrlJasaCuttingBetonPost]) {
        restoreCondition('JasaKonsCuttingBetonPost');
        restoreCondition('JasaPematanganLahanPost');
        restoreCondition('JasaTebangPohonPost');
     
        //hapus elemen div id lain KECUALI JasaPengeboranPost
	    removeCondition('JasaDesInPost');
        removeCondition('ProdukInFurPost');
        removeCondition('ProdukKonsSaluranPost');
        removeCondition('ProdukKonsPembatasPost');
        removeCondition('ProdukKonsDindingModularPost');
        removeCondition('ProdukKonsPost');
        removeCondition('MaterialKonsStukturPost');
        removeCondition('MaterialKonsFasadPelapisEksteriorPost');
        removeCondition('MaterialKonsAtapPenutupPost');
        removeCondition('JasaKonsPondasiTanahPost');
        removeCondition('JasaKonsPerkuatanTanahLongsorPost');
        removeCondition('JasaKonsPengeboranPost');
        removeCondition('JasaKonsPembatasPost');
        removeCondition('JasaKonsPerbaikanPost');
	//removeCondition('JasaKonsCuttingBetonPost');
	removeCondition('JasaKonsBongkarBangunanPost');
        removeCondition('JasaKonsFinishingPost');
        removeCondition('JasaKonsStrukturPost');
        removeCondition('JasaKonsAlatKonstruksiPost');
        removeCondition('JasaKonsJalanPerkerasanPost');

	//hapus elemen JasaCuttingBetonPost SEMUA
	   removeCondition('JasaCuttingBetonPost');
	   
	 //hapus elemen JasaPematanganLahanPost SEMUA
        //removeCondition('');
	
        removeCondition('JasaPengupasanLahanTanahPost');
           removeCondition('JasaPemotonganBukitLahanPost');
	    removeCondition('JasaPembersihanLahanPost');
        removeCondition('JasaPerataandanGradingLahanPost');
        removeCondition('JasaElevasiLahanPost');
        removeCondition('JasaBadanLahanPost');
        removeCondition('JasaCutandFillLahanPost');
        removeCondition('JasaUruganTanahLahanPost');
        removeCondition('JasaPemadatanTanahLahanPost');
        removeCondition('JasaBaseCourseLahanPost');
        removeCondition('JasaStabilisasiTanahLahanPost');
        removeCondition('JasaDrainaseLahanPost');
        removeCondition('JasaGeotekstilLahanPost');
        removeCondition('JasaPersiapanPondasiLahanPost');

	 //hapus elemen JasaPematanganLahanPost SEMUA
        removeCondition('JasaUjiTanahPost');
	
        removeCondition('JasaCptPost');
        removeCondition('JasaBoringTanahPost');
        removeCondition('JasaLabTanahPost');
        removeCondition('JasaUjiPenetrasiPost');
        removeCondition('JasaSondirPost');
     
	
        JasaKonstruksiCuttingBetonPostLink.style.visibility = 'visible';
       //TAMPILKAN PONDASI BANGUNAN
        JasaPematanganLahanPostLink.style.visibility = 'visible';
	   //TAMPILKAN JasaTebangPohonPost
        JasaTebangPohonPostLink.style.visibility = 'visible';
        pageNameJasaKonsCuttingBetonPost.textContent = urlMappingJasaTebangPohon[cleanUrlJasaCuttingBetonPost];
    }
      // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaTebangPohon[cleanUrlJasaCuttingBetonPost]) {
       const jsonLDBreadcrumb = {
           "@context": "https://schema.org",
           "@type": "BreadcrumbList",
           "itemListElement": [
	    {
	      "@type": "ListItem",
	      "position": 1,
	      "name": "Beton Jaya Readymix",
	      "item": "https://www.betonjayareadymix.com/"
	    },
               {
                   "@type": "ListItem",
                   "position": 2,
                   "name": "Jasa Konstruksi",
                   "item": "https://www.betonjayareadymix.com/p/jasa-konstruksi.html"
               },
               {
                   "@type": "ListItem",
                   "position": 3,
                   "name": "Jasa Pematangan Lahan",
                   "item": "https://www.betonjayareadymix.com/p/jasa-pematangan-lahan.html"
               },        
			   {
                   "@type": "ListItem",
                   "position": 4,
                   "name": "Jasa Tebang Pohon",
                   "item": "https://www.betonjayareadymix.com/p/jasa-tebang-pohon.html"
               },
               {
                   "@type": "ListItem",
                   "position": 5,
                   "name": urlMappingJasaTebangPohon[cleanUrlJasaCuttingBetonPost],
                   "item": cleanUrlJasaCuttingBetonPost
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
	
  //JasaPemotonganBukitLahanPost
   if (urlMappingJasaPemotonganBukitLahan[cleanUrlJasaCuttingBetonPost]) {
        restoreCondition('JasaKonsCuttingBetonPost');
        restoreCondition('JasaPematanganLahanPost');
        restoreCondition('JasaPemotonganBukitLahanPost');
     
        //hapus elemen div id lain KECUALI JasaPengeboranPost
	    removeCondition('JasaDesInPost');
        removeCondition('ProdukInFurPost');
        removeCondition('ProdukKonsSaluranPost');
        removeCondition('ProdukKonsPembatasPost');
        removeCondition('ProdukKonsDindingModularPost');
        removeCondition('ProdukKonsPost');
        removeCondition('MaterialKonsStukturPost');
        removeCondition('MaterialKonsFasadPelapisEksteriorPost');
        removeCondition('MaterialKonsAtapPenutupPost');
        removeCondition('JasaKonsPondasiTanahPost');
        removeCondition('JasaKonsPerkuatanTanahLongsorPost');
        removeCondition('JasaKonsPengeboranPost');
        removeCondition('JasaKonsPembatasPost');
        removeCondition('JasaKonsPerbaikanPost');
	//removeCondition('JasaKonsCuttingBetonPost');
	removeCondition('JasaKonsBongkarBangunanPost');
        removeCondition('JasaKonsFinishingPost');
        removeCondition('JasaKonsStrukturPost');
        removeCondition('JasaKonsAlatKonstruksiPost');
        removeCondition('JasaKonsJalanPerkerasanPost');

	//hapus elemen JasaCuttingBetonPost SEMUA
	   removeCondition('JasaCuttingBetonPost');
	   
	 //hapus elemen JasaPemotonganBukitLahanPost SEMUA
        removeCondition('JasaPengupasanLahanTanahPost');
	
        removeCondition('JasaTebangPohonPost');
	    removeCondition('JasaPembersihanLahanPost');
        removeCondition('JasaPerataandanGradingLahanPost');
        removeCondition('JasaElevasiLahanPost');
        removeCondition('JasaBadanLahanPost');
        removeCondition('JasaCutandFillLahanPost');
        removeCondition('JasaUruganTanahLahanPost');
        removeCondition('JasaPemadatanTanahLahanPost');
        removeCondition('JasaBaseCourseLahanPost');
        removeCondition('JasaStabilisasiTanahLahanPost');
        removeCondition('JasaDrainaseLahanPost');
        removeCondition('JasaGeotekstilLahanPost');
        removeCondition('JasaPersiapanPondasiLahanPost');

	 //hapus elemen JasaPematanganLahanPost SEMUA
        removeCondition('JasaUjiTanahPost');
	
        removeCondition('JasaCptPost');
        removeCondition('JasaBoringTanahPost');
        removeCondition('JasaLabTanahPost');
        removeCondition('JasaUjiPenetrasiPost');
        removeCondition('JasaSondirPost');
     
	
        JasaKonstruksiCuttingBetonPostLink.style.visibility = 'visible';
       //TAMPILKAN PONDASI BANGUNAN
        JasaPematanganLahanPostLink.style.visibility = 'visible';
	   //TAMPILKAN JasaTebangPohonPost
        JasaPemotonganBukitLahanPostLink.style.visibility = 'visible';
        pageNameJasaKonsCuttingBetonPost.textContent = urlMappingJasaPemotonganBukitLahan[cleanUrlJasaCuttingBetonPost];
    }
      // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaPemotonganBukitLahan[cleanUrlJasaCuttingBetonPost]) {
       const jsonLDBreadcrumb = {
           "@context": "https://schema.org",
           "@type": "BreadcrumbList",
           "itemListElement": [
	    {
	      "@type": "ListItem",
	      "position": 1,
	      "name": "Beton Jaya Readymix",
	      "item": "https://www.betonjayareadymix.com/"
	    },
               {
                   "@type": "ListItem",
                   "position": 2,
                   "name": "Jasa Konstruksi",
                   "item": "https://www.betonjayareadymix.com/p/jasa-konstruksi.html"
               },
               {
                   "@type": "ListItem",
                   "position": 3,
                   "name": "Jasa Pematangan Lahan",
                   "item": "https://www.betonjayareadymix.com/p/jasa-pematangan-lahan.html"
               },        
			   {
                   "@type": "ListItem",
                   "position": 4,
                   "name": "Jasa Pemotongan Bukit Lahan",
                   "item": "https://www.betonjayareadymix.com/p/jasa-pemotongan-bukit-lahan.html"
               },
               {
                   "@type": "ListItem",
                   "position": 5,
                   "name": urlMappingJasaPemotonganBukitLahan[cleanUrlJasaCuttingBetonPost],
                   "item": cleanUrlJasaCuttingBetonPost
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }


  //JasaPengupasanLahanTanahPost
   if (urlMappingJasaPengupasanLahanTanah[cleanUrlJasaCuttingBetonPost]) {
        restoreCondition('JasaKonsCuttingBetonPost');
        restoreCondition('JasaPematanganLahanPost');
        restoreCondition('JasaPengupasanLahanTanahPost');
     
        //hapus elemen div id lain KECUALI JasaPengeboranPost
	    removeCondition('JasaDesInPost');
        removeCondition('ProdukInFurPost');
        removeCondition('ProdukKonsSaluranPost');
        removeCondition('ProdukKonsPembatasPost');
        removeCondition('ProdukKonsDindingModularPost');
        removeCondition('ProdukKonsPost');
        removeCondition('MaterialKonsStukturPost');
        removeCondition('MaterialKonsFasadPelapisEksteriorPost');
        removeCondition('MaterialKonsAtapPenutupPost');
        removeCondition('JasaKonsPondasiTanahPost');
        removeCondition('JasaKonsPerkuatanTanahLongsorPost');
        removeCondition('JasaKonsPengeboranPost');
        removeCondition('JasaKonsPembatasPost');
        removeCondition('JasaKonsPerbaikanPost');
	//removeCondition('JasaKonsCuttingBetonPost');
	removeCondition('JasaKonsBongkarBangunanPost');
        removeCondition('JasaKonsFinishingPost');
        removeCondition('JasaKonsStrukturPost');
        removeCondition('JasaKonsAlatKonstruksiPost');
        removeCondition('JasaKonsJalanPerkerasanPost');

	//hapus elemen JasaCuttingBetonPost SEMUA
	   removeCondition('JasaCuttingBetonPost');
	   
	 //hapus elemen JasaPematanganLahanPost SEMUA
        //removeCondition('');
	 removeCondition('JasaPembersihanLahanPost');
        removeCondition('JasaTebangPohonPost');
      removeCondition('JasaPemotonganBukitLahanPost');
	
        removeCondition('JasaPerataandanGradingLahanPost');
        removeCondition('JasaElevasiLahanPost');
        removeCondition('JasaBadanLahanPost');
        removeCondition('JasaCutandFillLahanPost');
        removeCondition('JasaUruganTanahLahanPost');
        removeCondition('JasaPemadatanTanahLahanPost');
        removeCondition('JasaBaseCourseLahanPost');
        removeCondition('JasaStabilisasiTanahLahanPost');
        removeCondition('JasaDrainaseLahanPost');
        removeCondition('JasaGeotekstilLahanPost');
        removeCondition('JasaPersiapanPondasiLahanPost');

	 //hapus elemen JasaPematanganLahanPost SEMUA
        removeCondition('JasaUjiTanahPost');
	
        removeCondition('JasaCptPost');
        removeCondition('JasaBoringTanahPost');
        removeCondition('JasaLabTanahPost');
        removeCondition('JasaUjiPenetrasiPost');
        removeCondition('JasaSondirPost');
     
	
        JasaKonstruksiCuttingBetonPostLink.style.visibility = 'visible';
       //TAMPILKAN PONDASI BANGUNAN
        JasaPematanganLahanPostLink.style.visibility = 'visible';
	   //TAMPILKAN JasaTebangPohonPost
        JasaPengupasanLahanTanahPostLink.style.visibility = 'visible';
        pageNameJasaKonsCuttingBetonPost.textContent = urlMappingJasaPengupasanLahanTanah[cleanUrlJasaCuttingBetonPost];
    }
      // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaPengupasanLahanTanah[cleanUrlJasaCuttingBetonPost]) {
       const jsonLDBreadcrumb = {
           "@context": "https://schema.org",
           "@type": "BreadcrumbList",
           "itemListElement": [
	    {
	      "@type": "ListItem",
	      "position": 1,
	      "name": "Beton Jaya Readymix",
	      "item": "https://www.betonjayareadymix.com/"
	    },
               {
                   "@type": "ListItem",
                   "position": 2,
                   "name": "Jasa Konstruksi",
                   "item": "https://www.betonjayareadymix.com/p/jasa-konstruksi.html"
               },
               {
                   "@type": "ListItem",
                   "position": 3,
                   "name": "Jasa Pematangan Lahan",
                   "item": "https://www.betonjayareadymix.com/p/jasa-pematangan-lahan.html"
               },        
			   {
                   "@type": "ListItem",
                   "position": 4,
                   "name": "Jasa Pengupasan Lahan Tanah",
                   "item": "https://www.betonjayareadymix.com/p/jasa-pengupasan-lahan-tanah.html"
               },
               {
                   "@type": "ListItem",
                   "position": 5,
                   "name": urlMappingJasaPengupasanLahanTanah[cleanUrlJasaCuttingBetonPost],
                   "item": cleanUrlJasaCuttingBetonPost
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }

	  //JasaUruganTanahLahan
   if (urlMappingJasaUruganTanahLahan[cleanUrlJasaCuttingBetonPost]) {
        restoreCondition('JasaKonsCuttingBetonPost');
        restoreCondition('JasaPematanganLahanPost');
        restoreCondition('JasaUruganTanahLahanPost');
     
        //hapus elemen div id lain KECUALI JasaPengeboranPost
	    removeCondition('JasaDesInPost');
        removeCondition('ProdukInFurPost');
        removeCondition('ProdukKonsSaluranPost');
        removeCondition('ProdukKonsPembatasPost');
        removeCondition('ProdukKonsDindingModularPost');
        removeCondition('ProdukKonsPost');
        removeCondition('MaterialKonsStukturPost');
        removeCondition('MaterialKonsFasadPelapisEksteriorPost');
        removeCondition('MaterialKonsAtapPenutupPost');
        removeCondition('JasaKonsPondasiTanahPost');
        removeCondition('JasaKonsPerkuatanTanahLongsorPost');
        removeCondition('JasaKonsPengeboranPost');
        removeCondition('JasaKonsPembatasPost');
        removeCondition('JasaKonsPerbaikanPost');
	//removeCondition('JasaKonsCuttingBetonPost');
	removeCondition('JasaKonsBongkarBangunanPost');
        removeCondition('JasaKonsFinishingPost');
        removeCondition('JasaKonsStrukturPost');
        removeCondition('JasaKonsAlatKonstruksiPost');
        removeCondition('JasaKonsJalanPerkerasanPost');

	//hapus elemen JasaCuttingBetonPost SEMUA
	   removeCondition('JasaCuttingBetonPost');
	   
	 //hapus elemen JasaPematanganLahanPost SEMUA
        //removeCondition('');
	removeCondition('JasaPembersihanLahanPost');
        removeCondition('JasaTebangPohonPost');
        removeCondition('JasaPengupasanLahanTanahPost');
      removeCondition('JasaPemotonganBukitLahanPost');
        removeCondition('JasaPerataandanGradingLahanPost');
        removeCondition('JasaElevasiLahanPost');
        removeCondition('JasaBadanLahanPost');
        removeCondition('JasaCutandFillLahanPost');
        removeCondition('JasaPemadatanTanahLahanPost');
        removeCondition('JasaBaseCourseLahanPost');
        removeCondition('JasaStabilisasiTanahLahanPost');
        removeCondition('JasaDrainaseLahanPost');
        removeCondition('JasaGeotekstilLahanPost');
        removeCondition('JasaPersiapanPondasiLahanPost');

	 //hapus elemen JasaPematanganLahanPost SEMUA
        removeCondition('JasaUjiTanahPost');
	
        removeCondition('JasaCptPost');
        removeCondition('JasaBoringTanahPost');
        removeCondition('JasaLabTanahPost');
        removeCondition('JasaUjiPenetrasiPost');
        removeCondition('JasaSondirPost');
     
	
        JasaKonstruksiCuttingBetonPostLink.style.visibility = 'visible';
       //TAMPILKAN PONDASI BANGUNAN
        JasaPematanganLahanPostLink.style.visibility = 'visible';
	   //TAMPILKAN JasaTebangPohonPost
        JasaUruganTanahLahanPostLink.style.visibility = 'visible';
        pageNameJasaKonsCuttingBetonPost.textContent = urlMappingJasaUruganTanahLahan[cleanUrlJasaCuttingBetonPost];
    }
      // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaUruganTanahLahan[cleanUrlJasaCuttingBetonPost]) {
       const jsonLDBreadcrumb = {
           "@context": "https://schema.org",
           "@type": "BreadcrumbList",
           "itemListElement": [
	    {
	      "@type": "ListItem",
	      "position": 1,
	      "name": "Beton Jaya Readymix",
	      "item": "https://www.betonjayareadymix.com/"
	    },
               {
                   "@type": "ListItem",
                   "position": 2,
                   "name": "Jasa Konstruksi",
                   "item": "https://www.betonjayareadymix.com/p/jasa-konstruksi.html"
               },
               {
                   "@type": "ListItem",
                   "position": 3,
                   "name": "Jasa Pematangan Lahan",
                   "item": "https://www.betonjayareadymix.com/p/jasa-pematangan-lahan.html"
               },        
			   {
                   "@type": "ListItem",
                   "position": 4,
                   "name": "Jasa Urugan Tanah Lahan",
                   "item": "https://www.betonjayareadymix.com/p/jasa-urugan-tanah-lahan.html"
               },
               {
                   "@type": "ListItem",
                   "position": 5,
                   "name": urlMappingJasaUruganTanahLahan[cleanUrlJasaCuttingBetonPost],
                   "item": cleanUrlJasaCuttingBetonPost
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }

	 //JasaUruganTanahLahan
   if (urlMappingJasaBadanLahan[cleanUrlJasaCuttingBetonPost]) {
        restoreCondition('JasaKonsCuttingBetonPost');
        restoreCondition('JasaPematanganLahanPost');
        restoreCondition('JasaBadanLahanPost');
     
        //hapus elemen div id lain KECUALI JasaPengeboranPost
	    removeCondition('JasaDesInPost');
        removeCondition('ProdukInFurPost');
        removeCondition('ProdukKonsSaluranPost');
        removeCondition('ProdukKonsPembatasPost');
        removeCondition('ProdukKonsDindingModularPost');
        removeCondition('ProdukKonsPost');
        removeCondition('MaterialKonsStukturPost');
        removeCondition('MaterialKonsFasadPelapisEksteriorPost');
        removeCondition('MaterialKonsAtapPenutupPost');
        removeCondition('JasaKonsPondasiTanahPost');
        removeCondition('JasaKonsPerkuatanTanahLongsorPost');
        removeCondition('JasaKonsPengeboranPost');
        removeCondition('JasaKonsPembatasPost');
        removeCondition('JasaKonsPerbaikanPost');
	//removeCondition('JasaKonsCuttingBetonPost');
	removeCondition('JasaKonsBongkarBangunanPost');
        removeCondition('JasaKonsFinishingPost');
        removeCondition('JasaKonsStrukturPost');
        removeCondition('JasaKonsAlatKonstruksiPost');
        removeCondition('JasaKonsJalanPerkerasanPost');

	//hapus elemen JasaCuttingBetonPost SEMUA
	   removeCondition('JasaCuttingBetonPost');
	   
  
	 //hapus elemen JasaPematanganLahanPost SEMUA
        //removeCondition('');
	
        removeCondition('JasaTebangPohonPost');
        removeCondition('JasaPengupasanLahanTanahPost');
           removeCondition('JasaPemotonganBukitLahanPost');
	    removeCondition('JasaPembersihanLahanPost');
        removeCondition('JasaPerataandanGradingLahanPost');
        removeCondition('JasaElevasiLahanPost');
        removeCondition('JasaUruganTanahLahanPost');
        removeCondition('JasaCutandFillLahanPost');
        removeCondition('JasaPemadatanTanahLahanPost');
        removeCondition('JasaBaseCourseLahanPost');
        removeCondition('JasaStabilisasiTanahLahanPost');
        removeCondition('JasaDrainaseLahanPost');
        removeCondition('JasaGeotekstilLahanPost');
        removeCondition('JasaPersiapanPondasiLahanPost');

	 //hapus elemen JasaPematanganLahanPost SEMUA
        removeCondition('JasaUjiTanahPost');
	
        removeCondition('JasaCptPost');
        removeCondition('JasaBoringTanahPost');
        removeCondition('JasaLabTanahPost');
        removeCondition('JasaUjiPenetrasiPost');
        removeCondition('JasaSondirPost');
     
	
        JasaKonstruksiCuttingBetonPostLink.style.visibility = 'visible';
       //TAMPILKAN PONDASI BANGUNAN
        JasaPematanganLahanPostLink.style.visibility = 'visible';
	   //TAMPILKAN JasaTebangPohonPost
        JasaBadanLahanPostLink.style.visibility = 'visible';
        pageNameJasaKonsCuttingBetonPost.textContent = urlMappingJasaBadanLahan[cleanUrlJasaCuttingBetonPost];
    }
      // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaBadanLahan[cleanUrlJasaCuttingBetonPost]) {
       const jsonLDBreadcrumb = {
           "@context": "https://schema.org",
           "@type": "BreadcrumbList",
           "itemListElement": [
	    {
	      "@type": "ListItem",
	      "position": 1,
	      "name": "Beton Jaya Readymix",
	      "item": "https://www.betonjayareadymix.com/"
	    },
               {
                   "@type": "ListItem",
                   "position": 2,
                   "name": "Jasa Konstruksi",
                   "item": "https://www.betonjayareadymix.com/p/jasa-konstruksi.html"
               },
               {
                   "@type": "ListItem",
                   "position": 3,
                   "name": "Jasa Pematangan Lahan",
                   "item": "https://www.betonjayareadymix.com/p/jasa-pematangan-lahan.html"
               },        
			   {
                   "@type": "ListItem",
                   "position": 4,
                   "name": "Jasa Badan Lahan",
                   "item": "https://www.betonjayareadymix.com/p/jasa-badan-lahan.html"
               },
               {
                   "@type": "ListItem",
                   "position": 5,
                   "name": urlMappingJasaBadanLahan[cleanUrlJasaCuttingBetonPost],
                   "item": cleanUrlJasaCuttingBetonPost
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
	
  //JasaCutandFillLahanPost
   if (urlMappingJasaCutandFillLahan[cleanUrlJasaCuttingBetonPost]) {
        restoreCondition('JasaKonsCuttingBetonPost');
        restoreCondition('JasaPematanganLahanPost');
        restoreCondition('JasaCutandFillLahanPost');
     
        //hapus elemen div id lain KECUALI JasaPengeboranPost
	    removeCondition('JasaDesInPost');
        removeCondition('ProdukInFurPost');
        removeCondition('ProdukKonsSaluranPost');
        removeCondition('ProdukKonsPembatasPost');
        removeCondition('ProdukKonsDindingModularPost');
        removeCondition('ProdukKonsPost');
        removeCondition('MaterialKonsStukturPost');
        removeCondition('MaterialKonsFasadPelapisEksteriorPost');
        removeCondition('MaterialKonsAtapPenutupPost');
        removeCondition('JasaKonsPondasiTanahPost');
        removeCondition('JasaKonsPerkuatanTanahLongsorPost');
        removeCondition('JasaKonsPengeboranPost');
        removeCondition('JasaKonsPembatasPost');
        removeCondition('JasaKonsPerbaikanPost');
	//removeCondition('JasaKonsCuttingBetonPost');
	removeCondition('JasaKonsBongkarBangunanPost');
        removeCondition('JasaKonsFinishingPost');
        removeCondition('JasaKonsStrukturPost');
        removeCondition('JasaKonsAlatKonstruksiPost');
        removeCondition('JasaKonsJalanPerkerasanPost');

	//hapus elemen JasaCuttingBetonPost SEMUA
	   removeCondition('JasaCuttingBetonPost');
	   
	 //hapus elemen JasaPematanganLahanPost SEMUA
        //removeCondition('');
	       removeCondition('JasaPemotonganBukitLahanPost');
	    removeCondition('JasaPembersihanLahanPost');
        removeCondition('JasaTebangPohonPost');
        removeCondition('JasaPengupasanLahanTanahPost');
       // removeCondition('');
        removeCondition('JasaPerataandanGradingLahanPost');
        removeCondition('JasaElevasiLahanPost');
        removeCondition('JasaBadanLahanPost');
        removeCondition('JasaUruganTanahLahanPost');
        removeCondition('JasaPemadatanTanahLahanPost');
        removeCondition('JasaBaseCourseLahanPost');
        removeCondition('JasaStabilisasiTanahLahanPost');
        removeCondition('JasaDrainaseLahanPost');
        removeCondition('JasaGeotekstilLahanPost');
        removeCondition('JasaPersiapanPondasiLahanPost');

	 //hapus elemen JasaPematanganLahanPost SEMUA
        removeCondition('JasaUjiTanahPost');
	
        removeCondition('JasaCptPost');
        removeCondition('JasaBoringTanahPost');
        removeCondition('JasaLabTanahPost');
        removeCondition('JasaUjiPenetrasiPost');
        removeCondition('JasaSondirPost');
     
	
        JasaKonstruksiCuttingBetonPostLink.style.visibility = 'visible';
       //TAMPILKAN PONDASI BANGUNAN
        JasaPematanganLahanPostLink.style.visibility = 'visible';
	   //TAMPILKAN JasaTebangPohonPost
        JasaCutandFillLahanPostLink.style.visibility = 'visible';
        pageNameJasaKonsCuttingBetonPost.textContent = urlMappingJasaCutandFillLahan[cleanUrlJasaCuttingBetonPost];
    }
      // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaCutandFillLahan[cleanUrlJasaCuttingBetonPost]) {
       const jsonLDBreadcrumb = {
           "@context": "https://schema.org",
           "@type": "BreadcrumbList",
           "itemListElement": [
	    {
	      "@type": "ListItem",
	      "position": 1,
	      "name": "Beton Jaya Readymix",
	      "item": "https://www.betonjayareadymix.com/"
	    },
               {
                   "@type": "ListItem",
                   "position": 2,
                   "name": "Jasa Konstruksi",
                   "item": "https://www.betonjayareadymix.com/p/jasa-konstruksi.html"
               },
               {
                   "@type": "ListItem",
                   "position": 3,
                   "name": "Jasa Pematangan Lahan",
                   "item": "https://www.betonjayareadymix.com/p/jasa-pematangan-lahan.html"
               },        
			   {
                   "@type": "ListItem",
                   "position": 4,
                   "name": "Jasa Cut and Fill Lahan",
                   "item": "https://www.betonjayareadymix.com/p/jasa-cut-and-fill-lahan.html"
               },
               {
                   "@type": "ListItem",
                   "position": 5,
                   "name": urlMappingJasaCutandFillLahan[cleanUrlJasaCuttingBetonPost],
                   "item": cleanUrlJasaCuttingBetonPost
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
  
    //JasaPemadatanTanahLahanPost
   if (urlMappingJasaPemadatanTanahLahan[cleanUrlJasaCuttingBetonPost]) {
        restoreCondition('JasaKonsCuttingBetonPost');
        restoreCondition('JasaPematanganLahanPost');
        restoreCondition('JasaPemadatanTanahLahanPost');
     
        //hapus elemen div id lain KECUALI JasaPengeboranPost
	    removeCondition('JasaDesInPost');
        removeCondition('ProdukInFurPost');
        removeCondition('ProdukKonsSaluranPost');
        removeCondition('ProdukKonsPembatasPost');
        removeCondition('ProdukKonsDindingModularPost');
        removeCondition('ProdukKonsPost');
        removeCondition('MaterialKonsStukturPost');
        removeCondition('MaterialKonsFasadPelapisEksteriorPost');
        removeCondition('MaterialKonsAtapPenutupPost');
        removeCondition('JasaKonsPondasiTanahPost');
        removeCondition('JasaKonsPerkuatanTanahLongsorPost');
        removeCondition('JasaKonsPengeboranPost');
        removeCondition('JasaKonsPembatasPost');
        removeCondition('JasaKonsPerbaikanPost');
	//removeCondition('JasaKonsCuttingBetonPost');
	removeCondition('JasaKonsBongkarBangunanPost');
        removeCondition('JasaKonsFinishingPost');
        removeCondition('JasaKonsStrukturPost');
        removeCondition('JasaKonsAlatKonstruksiPost');
        removeCondition('JasaKonsJalanPerkerasanPost');

	//hapus elemen JasaCuttingBetonPost SEMUA
	   removeCondition('JasaCuttingBetonPost');
	   
	 //hapus elemen JasaPematanganLahanPost SEMUA
        //removeCondition('');
	        removeCondition('JasaPemotonganBukitLahanPost');
	    removeCondition('JasaPembersihanLahanPost');
        removeCondition('JasaTebangPohonPost');
        removeCondition('JasaPengupasanLahanTanahPost');
        removeCondition('JasaCutandFillLahanPost');
        removeCondition('JasaUruganTanahLahanPost');
       // removeCondition('');
        removeCondition('JasaPerataandanGradingLahanPost');
        removeCondition('JasaElevasiLahanPost');
        removeCondition('JasaBadanLahanPost');
        removeCondition('JasaBaseCourseLahanPost');
        removeCondition('JasaStabilisasiTanahLahanPost');
        removeCondition('JasaDrainaseLahanPost');
        removeCondition('JasaGeotekstilLahanPost');
        removeCondition('JasaPersiapanPondasiLahanPost');

	 //hapus elemen JasaPematanganLahanPost SEMUA
        removeCondition('JasaUjiTanahPost');
	
        removeCondition('JasaCptPost');
        removeCondition('JasaBoringTanahPost');
        removeCondition('JasaLabTanahPost');
        removeCondition('JasaUjiPenetrasiPost');
        removeCondition('JasaSondirPost');
     
	
        JasaKonstruksiCuttingBetonPostLink.style.visibility = 'visible';
       //TAMPILKAN PONDASI BANGUNAN
        JasaPematanganLahanPostLink.style.visibility = 'visible';
	   //TAMPILKAN JasaTebangPohonPost
        JasaPemadatanTanahLahanPostLink.style.visibility = 'visible';
        pageNameJasaKonsCuttingBetonPost.textContent = urlMappingJasaPemadatanTanahLahan[cleanUrlJasaCuttingBetonPost];
    }
      // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaPemadatanTanahLahan[cleanUrlJasaCuttingBetonPost]) {
       const jsonLDBreadcrumb = {
           "@context": "https://schema.org",
           "@type": "BreadcrumbList",
           "itemListElement": [
	    {
	      "@type": "ListItem",
	      "position": 1,
	      "name": "Beton Jaya Readymix",
	      "item": "https://www.betonjayareadymix.com/"
	    },
               {
                   "@type": "ListItem",
                   "position": 2,
                   "name": "Jasa Konstruksi",
                   "item": "https://www.betonjayareadymix.com/p/jasa-konstruksi.html"
               },
               {
                   "@type": "ListItem",
                   "position": 3,
                   "name": "Jasa Pematangan Lahan",
                   "item": "https://www.betonjayareadymix.com/p/jasa-pematangan-lahan.html"
               },        
			   {
                   "@type": "ListItem",
                   "position": 4,
                   "name": "Jasa Pemadatan Tanah Lahan",
                   "item": "https://www.betonjayareadymix.com/p/jasa-pemadatan-tanah-lahan.html"
               },
               {
                   "@type": "ListItem",
                   "position": 5,
                   "name": urlMappingJasaPemadatanTanahLahan[cleanUrlJasaCuttingBetonPost],
                   "item": cleanUrlJasaCuttingBetonPost
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }

	 //JasaPemadatanTanahLahanPost
   if (urlMappingJasaPembersihanLahan[cleanUrlJasaCuttingBetonPost]) {
        restoreCondition('JasaKonsCuttingBetonPost');
        restoreCondition('JasaPematanganLahanPost');
        restoreCondition('JasaPembersihanLahanPost');
     
        //hapus elemen div id lain KECUALI JasaPengeboranPost
	    removeCondition('JasaDesInPost');
        removeCondition('ProdukInFurPost');
        removeCondition('ProdukKonsSaluranPost');
        removeCondition('ProdukKonsPembatasPost');
        removeCondition('ProdukKonsDindingModularPost');
        removeCondition('ProdukKonsPost');
        removeCondition('MaterialKonsStukturPost');
        removeCondition('MaterialKonsFasadPelapisEksteriorPost');
        removeCondition('MaterialKonsAtapPenutupPost');
        removeCondition('JasaKonsPondasiTanahPost');
        removeCondition('JasaKonsPerkuatanTanahLongsorPost');
        removeCondition('JasaKonsPengeboranPost');
        removeCondition('JasaKonsPembatasPost');
        removeCondition('JasaKonsPerbaikanPost');
	//removeCondition('JasaKonsCuttingBetonPost');
	removeCondition('JasaKonsBongkarBangunanPost');
        removeCondition('JasaKonsFinishingPost');
        removeCondition('JasaKonsStrukturPost');
        removeCondition('JasaKonsAlatKonstruksiPost');
        removeCondition('JasaKonsJalanPerkerasanPost');

	//hapus elemen JasaCuttingBetonPost SEMUA
	   removeCondition('JasaCuttingBetonPost');
	   
	 //hapus elemen JasaPematanganLahanPost SEMUA
        //removeCondition('');
	    removeCondition('JasaPemotonganBukitLahanPost');
        removeCondition('JasaTebangPohonPost');
        removeCondition('JasaPengupasanLahanTanahPost');
        removeCondition('JasaCutandFillLahanPost');
        removeCondition('JasaUruganTanahLahanPost');
        removeCondition('JasaPemadatanTanahLahanPost');
        removeCondition('JasaPerataandanGradingLahanPost');
        removeCondition('JasaElevasiLahanPost');
        removeCondition('JasaBadanLahanPost');
        removeCondition('JasaBaseCourseLahanPost');
        removeCondition('JasaStabilisasiTanahLahanPost');
        removeCondition('JasaDrainaseLahanPost');
        removeCondition('JasaGeotekstilLahanPost');
        removeCondition('JasaPersiapanPondasiLahanPost');

	 //hapus elemen JasaPematanganLahanPost SEMUA
        removeCondition('JasaUjiTanahPost');
	
        removeCondition('JasaCptPost');
        removeCondition('JasaBoringTanahPost');
        removeCondition('JasaLabTanahPost');
        removeCondition('JasaUjiPenetrasiPost');
        removeCondition('JasaSondirPost');
     
	
        JasaKonstruksiCuttingBetonPostLink.style.visibility = 'visible';
       //TAMPILKAN PONDASI BANGUNAN
        JasaPematanganLahanPostLink.style.visibility = 'visible';
	   //TAMPILKAN JasaPembersihanLahanPost
        JasaPembersihanLahanPostLink.style.visibility = 'visible';
        pageNameJasaKonsCuttingBetonPost.textContent = urlMappingJasaPembersihanLahan[cleanUrlJasaCuttingBetonPost];
    }
      // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaPembersihanLahan[cleanUrlJasaCuttingBetonPost]) {
       const jsonLDBreadcrumb = {
           "@context": "https://schema.org",
           "@type": "BreadcrumbList",
           "itemListElement": [
	    {
	      "@type": "ListItem",
	      "position": 1,
	      "name": "Beton Jaya Readymix",
	      "item": "https://www.betonjayareadymix.com/"
	    },
               {
                   "@type": "ListItem",
                   "position": 2,
                   "name": "Jasa Konstruksi",
                   "item": "https://www.betonjayareadymix.com/p/jasa-konstruksi.html"
               },
               {
                   "@type": "ListItem",
                   "position": 3,
                   "name": "Jasa Pematangan Lahan",
                   "item": "https://www.betonjayareadymix.com/p/jasa-pematangan-lahan.html"
               },        
			   {
                   "@type": "ListItem",
                   "position": 4,
                   "name": "Jasa Pembersihan Lahan",
                   "item": "https://www.betonjayareadymix.com/p/jasa-pembersihan-lahan.html"
               },
               {
                   "@type": "ListItem",
                   "position": 5,
                   "name": urlMappingJasaPembersihanLahan[cleanUrlJasaCuttingBetonPost],
                   "item": cleanUrlJasaCuttingBetonPost
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }

//SUB JasaPerataandanGradingLahan
 if (urlMappingJasaPerataandanGradingLahan[cleanUrlJasaCuttingBetonPost]) {
        restoreCondition('JasaKonsCuttingBetonPost');
        restoreCondition('JasaPematanganLahanPost');
        restoreCondition('JasaPerataandanGradingLahanPost');
     
        //hapus elemen div id lain KECUALI JasaPengeboranPost
	    removeCondition('JasaDesInPost');
        removeCondition('ProdukInFurPost');
        removeCondition('ProdukKonsSaluranPost');
        removeCondition('ProdukKonsPembatasPost');
        removeCondition('ProdukKonsDindingModularPost');
        removeCondition('ProdukKonsPost');
        removeCondition('MaterialKonsStukturPost');
        removeCondition('MaterialKonsFasadPelapisEksteriorPost');
        removeCondition('MaterialKonsAtapPenutupPost');
        removeCondition('JasaKonsPondasiTanahPost');
        removeCondition('JasaKonsPerkuatanTanahLongsorPost');
        removeCondition('JasaKonsPengeboranPost');
        removeCondition('JasaKonsPembatasPost');
        removeCondition('JasaKonsPerbaikanPost');
	//removeCondition('JasaKonsCuttingBetonPost');
	removeCondition('JasaKonsBongkarBangunanPost');
        removeCondition('JasaKonsFinishingPost');
        removeCondition('JasaKonsStrukturPost');
        removeCondition('JasaKonsAlatKonstruksiPost');
        removeCondition('JasaKonsJalanPerkerasanPost');

	//hapus elemen JasaCuttingBetonPost SEMUA
	   removeCondition('JasaCuttingBetonPost');
	   
	 //hapus elemen JasaPematanganLahanPost SEMUA
        //removeCondition('');
	
        removeCondition('JasaPengupasanLahanTanahPost');
           removeCondition('JasaPemotonganBukitLahanPost');
	    removeCondition('JasaPembersihanLahanPost');
        removeCondition('JasaTebangPohonPost');
        removeCondition('JasaElevasiLahanPost');
        removeCondition('JasaBadanLahanPost');
        removeCondition('JasaCutandFillLahanPost');
        removeCondition('JasaUruganTanahLahanPost');
        removeCondition('JasaPemadatanTanahLahanPost');
        removeCondition('JasaBaseCourseLahanPost');
        removeCondition('JasaStabilisasiTanahLahanPost');
        removeCondition('JasaDrainaseLahanPost');
        removeCondition('JasaGeotekstilLahanPost');
        removeCondition('JasaPersiapanPondasiLahanPost');

	 //hapus elemen JasaPematanganLahanPost SEMUA
        removeCondition('JasaUjiTanahPost');
	
        removeCondition('JasaCptPost');
        removeCondition('JasaBoringTanahPost');
        removeCondition('JasaLabTanahPost');
        removeCondition('JasaUjiPenetrasiPost');
        removeCondition('JasaSondirPost');
     
	
        JasaKonstruksiCuttingBetonPostLink.style.visibility = 'visible';
       //TAMPILKAN PONDASI BANGUNAN
        JasaPematanganLahanPostLink.style.visibility = 'visible';
	   //TAMPILKAN JasaTebangPohonPost
        JasaPerataandanGradingLahanPostLink.style.visibility = 'visible';
        pageNameJasaKonsCuttingBetonPost.textContent = urlMappingJasaPerataandanGradingLahan[cleanUrlJasaCuttingBetonPost];
    }
      // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaPerataandanGradingLahan[cleanUrlJasaCuttingBetonPost]) {
       const jsonLDBreadcrumb = {
           "@context": "https://schema.org",
           "@type": "BreadcrumbList",
           "itemListElement": [
	    {
	      "@type": "ListItem",
	      "position": 1,
	      "name": "Beton Jaya Readymix",
	      "item": "https://www.betonjayareadymix.com/"
	    },
               {
                   "@type": "ListItem",
                   "position": 2,
                   "name": "Jasa Konstruksi",
                   "item": "https://www.betonjayareadymix.com/p/jasa-konstruksi.html"
               },
               {
                   "@type": "ListItem",
                   "position": 3,
                   "name": "Jasa Pematangan Lahan",
                   "item": "https://www.betonjayareadymix.com/p/jasa-pematangan-lahan.html"
               },        
			   {
                   "@type": "ListItem",
                   "position": 4,
                   "name": "Jasa Perataan dan Grading Lahan",
                   "item": "https://www.betonjayareadymix.com/p/jasa-perataan-dan-grading-lahan.html"
               },
               {
                   "@type": "ListItem",
                   "position": 5,
                   "name": urlMappingJasaPerataandanGradingLahan[cleanUrlJasaCuttingBetonPost],
                   "item": cleanUrlJasaCuttingBetonPost
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }

//SUB JasaElevasiLahan
 if (urlMappingJasaElevasiLahan[cleanUrlJasaCuttingBetonPost]) {
        restoreCondition('JasaKonsCuttingBetonPost');
        restoreCondition('JasaPematanganLahanPost');
        restoreCondition('JasaElevasiLahanPost');
     
        //hapus elemen div id lain KECUALI JasaPengeboranPost
	    removeCondition('JasaDesInPost');
        removeCondition('ProdukInFurPost');
        removeCondition('ProdukKonsSaluranPost');
        removeCondition('ProdukKonsPembatasPost');
        removeCondition('ProdukKonsDindingModularPost');
        removeCondition('ProdukKonsPost');
        removeCondition('MaterialKonsStukturPost');
        removeCondition('MaterialKonsFasadPelapisEksteriorPost');
        removeCondition('MaterialKonsAtapPenutupPost');
        removeCondition('JasaKonsPondasiTanahPost');
        removeCondition('JasaKonsPerkuatanTanahLongsorPost');
        removeCondition('JasaKonsPengeboranPost');
        removeCondition('JasaKonsPembatasPost');
        removeCondition('JasaKonsPerbaikanPost');
	//removeCondition('JasaKonsCuttingBetonPost');
	removeCondition('JasaKonsBongkarBangunanPost');
        removeCondition('JasaKonsFinishingPost');
        removeCondition('JasaKonsStrukturPost');
        removeCondition('JasaKonsAlatKonstruksiPost');
        removeCondition('JasaKonsJalanPerkerasanPost');

	//hapus elemen JasaCuttingBetonPost SEMUA
	   removeCondition('JasaCuttingBetonPost');
	   
	 //hapus elemen JasaPematanganLahanPost SEMUA
        //removeCondition('');
	
        removeCondition('JasaPengupasanLahanTanahPost');
           removeCondition('JasaPemotonganBukitLahanPost');
	    removeCondition('JasaPembersihanLahanPost');
        removeCondition('JasaTebangPohonPost');
        removeCondition('JasaPerataandanGradingLahanPost');
        removeCondition('JasaBadanLahanPost');
        removeCondition('JasaCutandFillLahanPost');
        removeCondition('JasaUruganTanahLahanPost');
        removeCondition('JasaPemadatanTanahLahanPost');
        removeCondition('JasaBaseCourseLahanPost');
        removeCondition('JasaStabilisasiTanahLahanPost');
        removeCondition('JasaDrainaseLahanPost');
        removeCondition('JasaGeotekstilLahanPost');
        removeCondition('JasaPersiapanPondasiLahanPost');

	 //hapus elemen JasaPematanganLahanPost SEMUA
        removeCondition('JasaUjiTanahPost');
	
        removeCondition('JasaCptPost');
        removeCondition('JasaBoringTanahPost');
        removeCondition('JasaLabTanahPost');
        removeCondition('JasaUjiPenetrasiPost');
        removeCondition('JasaSondirPost');
     
	
        JasaKonstruksiCuttingBetonPostLink.style.visibility = 'visible';
       //TAMPILKAN PONDASI BANGUNAN
        JasaPematanganLahanPostLink.style.visibility = 'visible';
	   //TAMPILKAN JasaTebangPohonPost
        JasaElevasiLahanPostLink.style.visibility = 'visible';
        pageNameJasaKonsCuttingBetonPost.textContent = urlMappingJasaElevasiLahan[cleanUrlJasaCuttingBetonPost];
    }
      // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaElevasiLahan[cleanUrlJasaCuttingBetonPost]) {
       const jsonLDBreadcrumb = {
           "@context": "https://schema.org",
           "@type": "BreadcrumbList",
           "itemListElement": [
	    {
	      "@type": "ListItem",
	      "position": 1,
	      "name": "Beton Jaya Readymix",
	      "item": "https://www.betonjayareadymix.com/"
	    },
               {
                   "@type": "ListItem",
                   "position": 2,
                   "name": "Jasa Konstruksi",
                   "item": "https://www.betonjayareadymix.com/p/jasa-konstruksi.html"
               },
               {
                   "@type": "ListItem",
                   "position": 3,
                   "name": "Jasa Pematangan Lahan",
                   "item": "https://www.betonjayareadymix.com/p/jasa-pematangan-lahan.html"
               },        
			   {
                   "@type": "ListItem",
                   "position": 4,
                   "name": "Jasa Elevasi Lahan",
                   "item": "https://www.betonjayareadymix.com/p/jasa-elevasi-lahan.html"
               },
               {
                   "@type": "ListItem",
                   "position": 5,
                   "name": urlMappingJasaElevasiLahan[cleanUrlJasaCuttingBetonPost],
                   "item": cleanUrlJasaCuttingBetonPost
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }

	//SUB JasaBaseCourseLahan
 if (urlMappingJasaBaseCourseLahan[cleanUrlJasaCuttingBetonPost]) {
        restoreCondition('JasaKonsCuttingBetonPost');
        restoreCondition('JasaPematanganLahanPost');
        restoreCondition('JasaBaseCourseLahanPost');
     
        //hapus elemen div id lain KECUALI JasaPengeboranPost
	    removeCondition('JasaDesInPost');
        removeCondition('ProdukInFurPost');
        removeCondition('ProdukKonsSaluranPost');
        removeCondition('ProdukKonsPembatasPost');
        removeCondition('ProdukKonsDindingModularPost');
        removeCondition('ProdukKonsPost');
        removeCondition('MaterialKonsStukturPost');
        removeCondition('MaterialKonsFasadPelapisEksteriorPost');
        removeCondition('MaterialKonsAtapPenutupPost');
        removeCondition('JasaKonsPondasiTanahPost');
        removeCondition('JasaKonsPerkuatanTanahLongsorPost');
        removeCondition('JasaKonsPengeboranPost');
        removeCondition('JasaKonsPembatasPost');
        removeCondition('JasaKonsPerbaikanPost');
	//removeCondition('JasaKonsCuttingBetonPost');
	removeCondition('JasaKonsBongkarBangunanPost');
        removeCondition('JasaKonsFinishingPost');
        removeCondition('JasaKonsStrukturPost');
        removeCondition('JasaKonsAlatKonstruksiPost');
        removeCondition('JasaKonsJalanPerkerasanPost');

	//hapus elemen JasaCuttingBetonPost SEMUA
	   removeCondition('JasaCuttingBetonPost');
	   
	 //hapus elemen JasaPematanganLahanPost SEMUA
        //removeCondition('');
	
        removeCondition('JasaPengupasanLahanTanahPost');
           removeCondition('JasaPemotonganBukitLahanPost');
	    removeCondition('JasaPembersihanLahanPost');
        removeCondition('JasaTebangPohonPost');
        removeCondition('JasaPerataandanGradingLahanPost');
        removeCondition('JasaBadanLahanPost');
        removeCondition('JasaCutandFillLahanPost');
        removeCondition('JasaUruganTanahLahanPost');
        removeCondition('JasaPemadatanTanahLahanPost');
        removeCondition('JasaElevasiLahanPost');
        removeCondition('JasaStabilisasiTanahLahanPost');
        removeCondition('JasaDrainaseLahanPost');
        removeCondition('JasaGeotekstilLahanPost');
        removeCondition('JasaPersiapanPondasiLahanPost');

	 //hapus elemen JasaPematanganLahanPost SEMUA
        removeCondition('JasaUjiTanahPost');
	
        removeCondition('JasaCptPost');
        removeCondition('JasaBoringTanahPost');
        removeCondition('JasaLabTanahPost');
        removeCondition('JasaUjiPenetrasiPost');
        removeCondition('JasaSondirPost');
     
	
        JasaKonstruksiCuttingBetonPostLink.style.visibility = 'visible';
       //TAMPILKAN PONDASI BANGUNAN
        JasaPematanganLahanPostLink.style.visibility = 'visible';
	   //TAMPILKAN JasaTebangPohonPost
        JasaBaseCourseLahanPostLink.style.visibility = 'visible';
        pageNameJasaKonsCuttingBetonPost.textContent = urlMappingJasaBaseCourseLahan[cleanUrlJasaCuttingBetonPost];
    }
      // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaBaseCourseLahan[cleanUrlJasaCuttingBetonPost]) {
       const jsonLDBreadcrumb = {
           "@context": "https://schema.org",
           "@type": "BreadcrumbList",
           "itemListElement": [
	    {
	      "@type": "ListItem",
	      "position": 1,
	      "name": "Beton Jaya Readymix",
	      "item": "https://www.betonjayareadymix.com/"
	    },
               {
                   "@type": "ListItem",
                   "position": 2,
                   "name": "Jasa Konstruksi",
                   "item": "https://www.betonjayareadymix.com/p/jasa-konstruksi.html"
               },
               {
                   "@type": "ListItem",
                   "position": 3,
                   "name": "Jasa Pematangan Lahan",
                   "item": "https://www.betonjayareadymix.com/p/jasa-pematangan-lahan.html"
               },        
			   {
                   "@type": "ListItem",
                   "position": 4,
                   "name": "Jasa Base Course Lahan",
                   "item": "https://www.betonjayareadymix.com/p/jasa-base-course-lahan.html"
               },
               {
                   "@type": "ListItem",
                   "position": 5,
                   "name": urlMappingJasaBaseCourseLahan[cleanUrlJasaCuttingBetonPost],
                   "item": cleanUrlJasaCuttingBetonPost
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }

//SUB JasaStabilisasiTanahLahan
 if (urlMappingJasaStabilisasiTanahLahan[cleanUrlJasaCuttingBetonPost]) {
        restoreCondition('JasaKonsCuttingBetonPost');
        restoreCondition('JasaPematanganLahanPost');
        restoreCondition('JasaStabilisasiTanahLahanPost');
     
        //hapus elemen div id lain KECUALI JasaPengeboranPost
	    removeCondition('JasaDesInPost');
        removeCondition('ProdukInFurPost');
        removeCondition('ProdukKonsSaluranPost');
        removeCondition('ProdukKonsPembatasPost');
        removeCondition('ProdukKonsDindingModularPost');
        removeCondition('ProdukKonsPost');
        removeCondition('MaterialKonsStukturPost');
        removeCondition('MaterialKonsFasadPelapisEksteriorPost');
        removeCondition('MaterialKonsAtapPenutupPost');
        removeCondition('JasaKonsPondasiTanahPost');
        removeCondition('JasaKonsPerkuatanTanahLongsorPost');
        removeCondition('JasaKonsPengeboranPost');
        removeCondition('JasaKonsPembatasPost');
        removeCondition('JasaKonsPerbaikanPost');
	//removeCondition('JasaKonsCuttingBetonPost');
	removeCondition('JasaKonsBongkarBangunanPost');
        removeCondition('JasaKonsFinishingPost');
        removeCondition('JasaKonsStrukturPost');
        removeCondition('JasaKonsAlatKonstruksiPost');
        removeCondition('JasaKonsJalanPerkerasanPost');

	//hapus elemen JasaCuttingBetonPost SEMUA
	   removeCondition('JasaCuttingBetonPost');
	   
	 //hapus elemen JasaPematanganLahanPost SEMUA
        //removeCondition('');
	
        removeCondition('JasaPengupasanLahanTanahPost');
           removeCondition('JasaPemotonganBukitLahanPost');
	    removeCondition('JasaPembersihanLahanPost');
        removeCondition('JasaTebangPohonPost');
        removeCondition('JasaPerataandanGradingLahanPost');
        removeCondition('JasaBadanLahanPost');
        removeCondition('JasaCutandFillLahanPost');
        removeCondition('JasaUruganTanahLahanPost');
        removeCondition('JasaPemadatanTanahLahanPost');
        removeCondition('JasaElevasiLahanPost');
        removeCondition('JasaBaseCourseLahanPost');
        removeCondition('JasaDrainaseLahanPost');
        removeCondition('JasaGeotekstilLahanPost');
        removeCondition('JasaPersiapanPondasiLahanPost');

	 //hapus elemen JasaPematanganLahanPost SEMUA
        removeCondition('JasaUjiTanahPost');
	
        removeCondition('JasaCptPost');
        removeCondition('JasaBoringTanahPost');
        removeCondition('JasaLabTanahPost');
        removeCondition('JasaUjiPenetrasiPost');
        removeCondition('JasaSondirPost');
     
	
        JasaKonstruksiCuttingBetonPostLink.style.visibility = 'visible';
       //TAMPILKAN PONDASI BANGUNAN
        JasaPematanganLahanPostLink.style.visibility = 'visible';
	   //TAMPILKAN JasaTebangPohonPost
        JasaStabilisasiTanahLahanPostLink.style.visibility = 'visible';
        pageNameJasaKonsCuttingBetonPost.textContent = urlMappingJasaStabilisasiTanahLahan[cleanUrlJasaCuttingBetonPost];
    }
      // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaStabilisasiTanahLahan[cleanUrlJasaCuttingBetonPost]) {
       const jsonLDBreadcrumb = {
           "@context": "https://schema.org",
           "@type": "BreadcrumbList",
           "itemListElement": [
	    {
	      "@type": "ListItem",
	      "position": 1,
	      "name": "Beton Jaya Readymix",
	      "item": "https://www.betonjayareadymix.com/"
	    },
               {
                   "@type": "ListItem",
                   "position": 2,
                   "name": "Jasa Konstruksi",
                   "item": "https://www.betonjayareadymix.com/p/jasa-konstruksi.html"
               },
               {
                   "@type": "ListItem",
                   "position": 3,
                   "name": "Jasa Pematangan Lahan",
                   "item": "https://www.betonjayareadymix.com/p/jasa-pematangan-lahan.html"
               },        
			   {
                   "@type": "ListItem",
                   "position": 4,
                   "name": "Jasa Stabilisasi Tanah Lahan",
                   "item": "https://www.betonjayareadymix.com/p/jasa-stabilisasi-tanah-lahan.html"
               },
               {
                   "@type": "ListItem",
                   "position": 5,
                   "name": urlMappingJasaStabilisasiTanahLahan[cleanUrlJasaCuttingBetonPost],
                   "item": cleanUrlJasaCuttingBetonPost
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }

		//SUB JasaDrainaseLahanPost
 if (urlMappingJasaDrainaseLahan[cleanUrlJasaCuttingBetonPost]) {
        restoreCondition('JasaKonsCuttingBetonPost');
        restoreCondition('JasaPematanganLahanPost');
        restoreCondition('JasaDrainaseLahanPost');
     
        //hapus elemen div id lain KECUALI JasaPengeboranPost
	    removeCondition('JasaDesInPost');
        removeCondition('ProdukInFurPost');
        removeCondition('ProdukKonsSaluranPost');
        removeCondition('ProdukKonsPembatasPost');
        removeCondition('ProdukKonsDindingModularPost');
        removeCondition('ProdukKonsPost');
        removeCondition('MaterialKonsStukturPost');
        removeCondition('MaterialKonsFasadPelapisEksteriorPost');
        removeCondition('MaterialKonsAtapPenutupPost');
        removeCondition('JasaKonsPondasiTanahPost');
        removeCondition('JasaKonsPerkuatanTanahLongsorPost');
        removeCondition('JasaKonsPengeboranPost');
        removeCondition('JasaKonsPembatasPost');
        removeCondition('JasaKonsPerbaikanPost');
	//removeCondition('JasaKonsCuttingBetonPost');
	removeCondition('JasaKonsBongkarBangunanPost');
        removeCondition('JasaKonsFinishingPost');
        removeCondition('JasaKonsStrukturPost');
        removeCondition('JasaKonsAlatKonstruksiPost');
        removeCondition('JasaKonsJalanPerkerasanPost');

	//hapus elemen JasaCuttingBetonPost SEMUA
	   removeCondition('JasaCuttingBetonPost');
	   
	 //hapus elemen JasaPematanganLahanPost SEMUA
        //removeCondition('');
	
        removeCondition('JasaPengupasanLahanTanahPost');
           removeCondition('JasaPemotonganBukitLahanPost');
	    removeCondition('JasaPembersihanLahanPost');
        removeCondition('JasaTebangPohonPost');
        removeCondition('JasaPerataandanGradingLahanPost');
        removeCondition('JasaBadanLahanPost');
        removeCondition('JasaCutandFillLahanPost');
        removeCondition('JasaUruganTanahLahanPost');
        removeCondition('JasaPemadatanTanahLahanPost');
        removeCondition('JasaElevasiLahanPost');
        removeCondition('JasaBaseCourseLahanPost');
        removeCondition('JasaStabilisasiTanahLahanPost');
        removeCondition('JasaGeotekstilLahanPost');
        removeCondition('JasaPersiapanPondasiLahanPost');

	 //hapus elemen JasaPematanganLahanPost SEMUA
        removeCondition('JasaUjiTanahPost');
	
        removeCondition('JasaCptPost');
        removeCondition('JasaBoringTanahPost');
        removeCondition('JasaLabTanahPost');
        removeCondition('JasaUjiPenetrasiPost');
        removeCondition('JasaSondirPost');
     
	
        JasaKonstruksiCuttingBetonPostLink.style.visibility = 'visible';
       //TAMPILKAN PONDASI BANGUNAN
        JasaPematanganLahanPostLink.style.visibility = 'visible';
	   //TAMPILKAN JasaDrainaseLahanPost
        JasaDrainaseLahanPostLink.style.visibility = 'visible';
        pageNameJasaKonsCuttingBetonPost.textContent = urlMappingJasaDrainaseLahan[cleanUrlJasaCuttingBetonPost];
    }
      // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaDrainaseLahan[cleanUrlJasaCuttingBetonPost]) {
       const jsonLDBreadcrumb = {
           "@context": "https://schema.org",
           "@type": "BreadcrumbList",
           "itemListElement": [
	    {
	      "@type": "ListItem",
	      "position": 1,
	      "name": "Beton Jaya Readymix",
	      "item": "https://www.betonjayareadymix.com/"
	    },
               {
                   "@type": "ListItem",
                   "position": 2,
                   "name": "Jasa Konstruksi",
                   "item": "https://www.betonjayareadymix.com/p/jasa-konstruksi.html"
               },
               {
                   "@type": "ListItem",
                   "position": 3,
                   "name": "Jasa Pematangan Lahan",
                   "item": "https://www.betonjayareadymix.com/p/jasa-pematangan-lahan.html"
               },        
			   {
                   "@type": "ListItem",
                   "position": 4,
                   "name": "Jasa Drainase Lahan",
                   "item": "https://www.betonjayareadymix.com/p/jasa-drainase-lahan.html"
               },
               {
                   "@type": "ListItem",
                   "position": 5,
                   "name": urlMappingJasaDrainaseLahan[cleanUrlJasaCuttingBetonPost],
                   "item": cleanUrlJasaCuttingBetonPost
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }

		//SUB JasaGeotekstilLahan
 if (urlMappingJasaGeotekstilLahan[cleanUrlJasaCuttingBetonPost]) {
        restoreCondition('JasaKonsCuttingBetonPost');
        restoreCondition('JasaPematanganLahanPost');
        restoreCondition('JasaGeotekstilLahanPost');
     
        //hapus elemen div id lain KECUALI JasaPengeboranPost
	    removeCondition('JasaDesInPost');
        removeCondition('ProdukInFurPost');
        removeCondition('ProdukKonsSaluranPost');
        removeCondition('ProdukKonsPembatasPost');
        removeCondition('ProdukKonsDindingModularPost');
        removeCondition('ProdukKonsPost');
        removeCondition('MaterialKonsStukturPost');
        removeCondition('MaterialKonsFasadPelapisEksteriorPost');
        removeCondition('MaterialKonsAtapPenutupPost');
        removeCondition('JasaKonsPondasiTanahPost');
        removeCondition('JasaKonsPerkuatanTanahLongsorPost');
        removeCondition('JasaKonsPengeboranPost');
        removeCondition('JasaKonsPembatasPost');
        removeCondition('JasaKonsPerbaikanPost');
	//removeCondition('JasaKonsCuttingBetonPost');
	removeCondition('JasaKonsBongkarBangunanPost');
        removeCondition('JasaKonsFinishingPost');
        removeCondition('JasaKonsStrukturPost');
        removeCondition('JasaKonsAlatKonstruksiPost');
        removeCondition('JasaKonsJalanPerkerasanPost');

	//hapus elemen JasaCuttingBetonPost SEMUA
	   removeCondition('JasaCuttingBetonPost');
	   
	 //hapus elemen JasaPematanganLahanPost SEMUA
        //removeCondition('');
	
        removeCondition('JasaPengupasanLahanTanahPost');
           removeCondition('JasaPemotonganBukitLahanPost');
	    removeCondition('JasaPembersihanLahanPost');
        removeCondition('JasaTebangPohonPost');
        removeCondition('JasaPerataandanGradingLahanPost');
        removeCondition('JasaBadanLahanPost');
        removeCondition('JasaCutandFillLahanPost');
        removeCondition('JasaUruganTanahLahanPost');
        removeCondition('JasaPemadatanTanahLahanPost');
        removeCondition('JasaElevasiLahanPost');
        removeCondition('JasaBaseCourseLahanPost');
        removeCondition('JasaStabilisasiTanahLahanPost');
        removeCondition('JasaDrainaseLahanPost');
        removeCondition('JasaPersiapanPondasiLahanPost');

	 //hapus elemen JasaPematanganLahanPost SEMUA
        removeCondition('JasaUjiTanahPost');
	
        removeCondition('JasaCptPost');
        removeCondition('JasaBoringTanahPost');
        removeCondition('JasaLabTanahPost');
        removeCondition('JasaUjiPenetrasiPost');
        removeCondition('JasaSondirPost');
     
	
        JasaKonstruksiCuttingBetonPostLink.style.visibility = 'visible';
       //TAMPILKAN PONDASI BANGUNAN
        JasaPematanganLahanPostLink.style.visibility = 'visible';
	   //TAMPILKAN JasaDrainaseLahanPost
        JasaGeotekstilLahanPostLink.style.visibility = 'visible';
        pageNameJasaKonsCuttingBetonPost.textContent = urlMappingJasaGeotekstilLahan[cleanUrlJasaCuttingBetonPost];
    }
      // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaGeotekstilLahan[cleanUrlJasaCuttingBetonPost]) {
       const jsonLDBreadcrumb = {
           "@context": "https://schema.org",
           "@type": "BreadcrumbList",
           "itemListElement": [
	    {
	      "@type": "ListItem",
	      "position": 1,
	      "name": "Beton Jaya Readymix",
	      "item": "https://www.betonjayareadymix.com/"
	    },
               {
                   "@type": "ListItem",
                   "position": 2,
                   "name": "Jasa Konstruksi",
                   "item": "https://www.betonjayareadymix.com/p/jasa-konstruksi.html"
               },
               {
                   "@type": "ListItem",
                   "position": 3,
                   "name": "Jasa Pematangan Lahan",
                   "item": "https://www.betonjayareadymix.com/p/jasa-pematangan-lahan.html"
               },        
			   {
                   "@type": "ListItem",
                   "position": 4,
                   "name": "Jasa Geotekstil Lahan",
                   "item": "https://www.betonjayareadymix.com/p/jasa-geotekstil-lahan.html"
               },
               {
                   "@type": "ListItem",
                   "position": 5,
                   "name": urlMappingJasaGeotekstilLahan[cleanUrlJasaCuttingBetonPost],
                   "item": cleanUrlJasaCuttingBetonPost
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }

		//SUB JasaGeotekstilLahan
 if (urlMappingJasaPersiapanPondasiLahan[cleanUrlJasaCuttingBetonPost]) {
        restoreCondition('JasaKonsCuttingBetonPost');
        restoreCondition('JasaPematanganLahanPost');
        restoreCondition('JasaPersiapanPondasiLahanPost');
     
        //hapus elemen div id lain KECUALI JasaPengeboranPost
	    removeCondition('JasaDesInPost');
        removeCondition('ProdukInFurPost');
        removeCondition('ProdukKonsSaluranPost');
        removeCondition('ProdukKonsPembatasPost');
        removeCondition('ProdukKonsDindingModularPost');
        removeCondition('ProdukKonsPost');
        removeCondition('MaterialKonsStukturPost');
        removeCondition('MaterialKonsFasadPelapisEksteriorPost');
        removeCondition('MaterialKonsAtapPenutupPost');
        removeCondition('JasaKonsPondasiTanahPost');
        removeCondition('JasaKonsPerkuatanTanahLongsorPost');
        removeCondition('JasaKonsPengeboranPost');
        removeCondition('JasaKonsPembatasPost');
        removeCondition('JasaKonsPerbaikanPost');
	//removeCondition('JasaKonsCuttingBetonPost');
	removeCondition('JasaKonsBongkarBangunanPost');
        removeCondition('JasaKonsFinishingPost');
        removeCondition('JasaKonsStrukturPost');
        removeCondition('JasaKonsAlatKonstruksiPost');
        removeCondition('JasaKonsJalanPerkerasanPost');

	//hapus elemen JasaCuttingBetonPost SEMUA
	   removeCondition('JasaCuttingBetonPost');
	   
	 //hapus elemen JasaPematanganLahanPost SEMUA
        //removeCondition('');
	
        removeCondition('JasaPengupasanLahanTanahPost');
           removeCondition('JasaPemotonganBukitLahanPost');
	    removeCondition('JasaPembersihanLahanPost');
        removeCondition('JasaTebangPohonPost');
        removeCondition('JasaPerataandanGradingLahanPost');
        removeCondition('JasaBadanLahanPost');
        removeCondition('JasaCutandFillLahanPost');
        removeCondition('JasaUruganTanahLahanPost');
        removeCondition('JasaPemadatanTanahLahanPost');
        removeCondition('JasaElevasiLahanPost');
        removeCondition('JasaBaseCourseLahanPost');
        removeCondition('JasaStabilisasiTanahLahanPost');
        removeCondition('JasaDrainaseLahanPost');
        removeCondition('JasaGeotekstilLahanPost');

	 //hapus elemen JasaPematanganLahanPost SEMUA
        removeCondition('JasaUjiTanahPost');
	
        removeCondition('JasaCptPost');
        removeCondition('JasaBoringTanahPost');
        removeCondition('JasaLabTanahPost');
        removeCondition('JasaUjiPenetrasiPost');
        removeCondition('JasaSondirPost');
     
	
        JasaKonstruksiCuttingBetonPostLink.style.visibility = 'visible';
       //TAMPILKAN PONDASI BANGUNAN
        JasaPematanganLahanPostLink.style.visibility = 'visible';
	   //TAMPILKAN JasaDrainaseLahanPost
        JasaPersiapanPondasiLahanPostLink.style.visibility = 'visible';
        pageNameJasaKonsCuttingBetonPost.textContent = urlMappingJasaPersiapanPondasiLahan[cleanUrlJasaCuttingBetonPost];
    }
      // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaPersiapanPondasiLahan[cleanUrlJasaCuttingBetonPost]) {
       const jsonLDBreadcrumb = {
           "@context": "https://schema.org",
           "@type": "BreadcrumbList",
           "itemListElement": [
	    {
	      "@type": "ListItem",
	      "position": 1,
	      "name": "Beton Jaya Readymix",
	      "item": "https://www.betonjayareadymix.com/"
	    },
               {
                   "@type": "ListItem",
                   "position": 2,
                   "name": "Jasa Konstruksi",
                   "item": "https://www.betonjayareadymix.com/p/jasa-konstruksi.html"
               },
               {
                   "@type": "ListItem",
                   "position": 3,
                   "name": "Jasa Pematangan Lahan",
                   "item": "https://www.betonjayareadymix.com/p/jasa-pematangan-lahan.html"
               },        
			   {
                   "@type": "ListItem",
                   "position": 4,
                   "name": "Jasa Persiapan Pondasi Lahan",
                   "item": "https://www.betonjayareadymix.com/p/jasa-persiapan-pondasi-lahan.html"
               },
               {
                   "@type": "ListItem",
                   "position": 5,
                   "name": urlMappingJasaPersiapanPondasiLahan[cleanUrlJasaCuttingBetonPost],
                   "item": cleanUrlJasaCuttingBetonPost
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
	
 //SUB JasaUjiTanahPost
 if (urlMappingJasaSondir[cleanUrlJasaCuttingBetonPost]) {
        restoreCondition('JasaKonsCuttingBetonPost');
        restoreCondition('JasaUjiTanahPost');
        restoreCondition('JasaSondirPost');
     
        //hapus elemen div id lain KECUALI JasaPengeboranPost
	    removeCondition('JasaDesInPost');
        removeCondition('ProdukInFurPost');
        removeCondition('ProdukKonsSaluranPost');
        removeCondition('ProdukKonsPembatasPost');
        removeCondition('ProdukKonsDindingModularPost');
        removeCondition('ProdukKonsPost');
        removeCondition('MaterialKonsStukturPost');
        removeCondition('MaterialKonsFasadPelapisEksteriorPost');
        removeCondition('MaterialKonsAtapPenutupPost');
        removeCondition('JasaKonsPondasiTanahPost');
        removeCondition('JasaKonsPerkuatanTanahLongsorPost');
        removeCondition('JasaKonsPengeboranPost');
        removeCondition('JasaKonsPembatasPost');
        removeCondition('JasaKonsPerbaikanPost');
	//removeCondition('JasaKonsCuttingBetonPost');
	removeCondition('JasaKonsBongkarBangunanPost');
        removeCondition('JasaKonsFinishingPost');
        removeCondition('JasaKonsStrukturPost');
        removeCondition('JasaKonsAlatKonstruksiPost');
        removeCondition('JasaKonsJalanPerkerasanPost');

	//hapus elemen JasaCuttingBetonPost SEMUA
	   removeCondition('JasaCuttingBetonPost');
	   
	 //hapus elemen JasaPematanganLahanPost SEMUA
        removeCondition('JasaPematanganLahanPost');
	        removeCondition('JasaPemotonganBukitLahanPost');
	    removeCondition('JasaPembersihanLahanPost');
	
        removeCondition('JasaPengupasanLahanTanahPost');
        removeCondition('JasaTebangPohonPost');
        removeCondition('JasaPerataandanGradingLahanPost');
        removeCondition('JasaElevasiLahanPost');
        removeCondition('JasaBadanLahanPost');
        removeCondition('JasaCutandFillLahanPost');
        removeCondition('JasaUruganTanahLahanPost');
        removeCondition('JasaPemadatanTanahLahanPost');
        removeCondition('JasaBaseCourseLahanPost');
        removeCondition('JasaStabilisasiTanahLahanPost');
        removeCondition('JasaDrainaseLahanPost');
        removeCondition('JasaGeotekstilLahanPost');
        removeCondition('JasaPersiapanPondasiLahanPost');

	 //hapus elemen JasaPematanganLahanPost SEMUA Selain JasaSondirPost
        //removeCondition('JasaUjiTanahPost');
	
        removeCondition('JasaCptPost');
        removeCondition('JasaBoringTanahPost');
        removeCondition('JasaLabTanahPost');
        removeCondition('JasaUjiPenetrasiPost');
       // removeCondition('JasaSondirPost');
     
	
        JasaKonstruksiCuttingBetonPostLink.style.visibility = 'visible';
       //TAMPILKAN PONDASI BANGUNAN
        JasaUjiTanahPostLink.style.visibility = 'visible';
	   //TAMPILKAN JasaTebangPohonPost
        JasaSondirPostLink.style.visibility = 'visible';
        pageNameJasaKonsCuttingBetonPost.textContent = urlMappingJasaSondir[cleanUrlJasaCuttingBetonPost];
    }
      // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaSondir[cleanUrlJasaCuttingBetonPost]) {
       const jsonLDBreadcrumb = {
           "@context": "https://schema.org",
           "@type": "BreadcrumbList",
           "itemListElement": [
	    {
	      "@type": "ListItem",
	      "position": 1,
	      "name": "Beton Jaya Readymix",
	      "item": "https://www.betonjayareadymix.com/"
	    },
               {
                   "@type": "ListItem",
                   "position": 2,
                   "name": "Jasa Konstruksi",
                   "item": "https://www.betonjayareadymix.com/p/jasa-konstruksi.html"
               },
               {
                   "@type": "ListItem",
                   "position": 3,
                   "name": "Jasa Uji Tanah",
                   "item": "https://www.betonjayareadymix.com/p/jasa-uji-tanah.html"
               },        
			   {
                   "@type": "ListItem",
                   "position": 4,
                   "name": "Jasa Sondir",
                   "item": "https://www.betonjayareadymix.com/p/jasa-sondir.html"
               },
               {
                   "@type": "ListItem",
                   "position": 5,
                   "name": urlMappingJasaSondir[cleanUrlJasaCuttingBetonPost],
                   "item": cleanUrlJasaCuttingBetonPost
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }

   });
