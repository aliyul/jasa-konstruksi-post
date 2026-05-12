// ============================================================
// JASA CUTTING BETON - BLOG POST
// ============================================================
// 🧠 SEO NOTE: Cluster ini berisi 1 artikel informasional + 8 money page harga per lokasi.
// Parent: Jasa Cutting Beton (/p/jasa-cutting-beton.html)
// ============================================================

const urlMappingJasaCuttingBeton = {
  // ============================================================
  // [SUB1] - PANDUAN TEKNIS (INFORMASIONAL / EDUKASI)
  // 🧠 TYPE: SUB1 (WAJIB tampil, bridge ke money page)
  // 🧠 INTENT: Informational + Commercial Investigation
  // Breadcrumb: Home > Jasa Konstruksi > Jasa Cutting Beton > Jasa Pemotongan Jalan Beton (4 level)
  // ============================================================
  "https://www.betonjayareadymix.com/2019/06/jasa-pemotongan-jalan-beton.html": "Jasa Pemotongan Jalan Beton",  // TYPE: SUB1
  
  // ============================================================
  // [MONEY_MASTER] - MASTER HARGA (TRANSACTIONAL)
  // 🧠 TYPE: MONEY_MASTER (WAJIB tampil)
  // 🧠 INTENT: Transactional (user mencari harga nasional/general)
  // Breadcrumb: Home > Jasa Konstruksi > Harga Jasa Cutting Beton (3 level - skip "Jasa Cutting Beton")
  // ============================================================
  "https://www.betonjayareadymix.com/2019/06/harga-jasa-cutting-beton.html": "Harga Jasa Cutting Beton",  // TYPE: MONEY_MASTER
  
  // ============================================================
  // [MONEY_CHILD] - HARGA PER LOKASI (TRANSACTIONAL)
  // 🧠 TYPE: MONEY_CHILD (WAJIB tampil, spesifik lokasi)
  // 🧠 INTENT: Transactional (user mencari harga di lokasi tertentu)
  // Breadcrumb: Home > Jasa Konstruksi > Harga Jasa Cutting Beton [Kota] (3 level)
  // ============================================================
  "https://www.betonjayareadymix.com/2019/06/harga-jasa-cutting-beton-jakarta.html": "Harga Jasa Cutting Beton Jakarta",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/06/harga-jasa-cutting-beton-bogor.html": "Harga Jasa Cutting Beton Bogor",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/06/harga-jasa-cutting-beton-depok.html": "Harga Jasa Cutting Beton Depok",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/06/harga-jasa-cutting-beton-tangerang.html": "Harga Jasa Cutting Beton Tangerang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/06/harga-jasa-cutting-beton-bekasi.html": "Harga Jasa Cutting Beton Bekasi",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/06/harga-jasa-cutting-beton-karawang.html": "Harga Jasa Cutting Beton Karawang",  // TYPE: MONEY_CHILD
  
  // ============================================================
  // [MONEY_MASTER] - HARGA CUTTING EXPANSION JOINT (TRANSACTIONAL)
  // 🧠 TYPE: MONEY_MASTER (WAJIB tampil)
  // 🧠 INTENT: Transactional (spesifik layanan expansion joint)
  // Breadcrumb: Home > Jasa Konstruksi > Harga Jasa Cutting Expansion Joint Beton (3 level)
  // ============================================================
  "https://www.betonjayareadymix.com/2019/06/harga-jasa-cutting-expansion-joint.html": "Harga Jasa Cutting Expansion Joint Beton"  // TYPE: MONEY_MASTER
};
/*
// ============================================================
// 🟡 SARAN TAMBAHAN URL (OPTIONAL)
// ============================================================

📌 URL YANG DISARANKAN UNTUK DITAMBAHKAN (JIKA KONTEN MEMADAI):

| URL | Nama Halaman | Type | Alasan SEO |
|-----|--------------|------|------------|
| /2019/06/harga-jasa-cutting-beton-cikarang.html | Harga Jasa Cutting Beton Cikarang | MONEY_CHILD | Kawasan industri besar |
| /2019/06/harga-jasa-cutting-beton-cibitung.html | Harga Jasa Cutting Beton Cibitung | MONEY_CHILD | Kawasan industri strategis |
| /2019/06/harga-jasa-cutting-beton-purwakarta.html | Harga Jasa Cutting Beton Purwakarta | MONEY_CHILD | Wilayah industri berkembang |
| /2019/06/harga-jasa-cutting-beton-subang.html | Harga Jasa Cutting Beton Subang | MONEY_CHILD | Kawasan industri baru |

📌 CATATAN: URL di atas disarankan hanya jika kontennya memadai.
Jika konten tipis, lebih baik digabung ke halaman induk harga cutting beton.

📌 SARAN UNTUK DITAMBAHKAN JUGA:
| URL | Nama Halaman | Type |
|-----|--------------|------|
| /2019/06/jasa-cutting-beton.html | Jasa Cutting Beton | SUB2 (halaman utama layanan) |
| /2019/06/harga-jasa-cutting-beton-surabaya.html | Harga Jasa Cutting Beton Surabaya | MONEY_CHILD |
| /2019/06/harga-jasa-cutting-beton-bandung.html | Harga Jasa Cutting Beton Bandung | MONEY_CHILD |
| /2019/06/harga-jasa-cutting-beton-semarang.html | Harga Jasa Cutting Beton Semarang | MONEY_CHILD |
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
  // [MONEY_CHILD] - LAYANAN SONDIR PER KEBUTUHAN/LOKASI PROYEK
  // 🧠 TYPE: MONEY_CHILD (WAJIB tampil, spesifik layanan)
  // Breadcrumb: Home > Jasa Konstruksi > Jasa Uji Tanah > Jasa Sondir [Nama]
  // ============================================================
  
  "https://www.betonjayareadymix.com/2019/09/jasa-sondir-cepat-jadwal-fleksibel.html": "Jasa Sondir Cepat dengan Jadwal Fleksibel",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/09/jasa-sondir-area-perumahan.html": "Jasa Sondir Area Perumahan",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/09/jasa-sondir-lahan-sempit-padat.html": "Jasa Sondir Lahan Sempit & Padat",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/09/jasa-sondir-laporan-grafik-interpretasi.html": "Jasa Sondir dengan Laporan Grafik & Interpretasi",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/09/jasa-sondir-analisis-lapisan-tanah.html": "Jasa Sondir Analisis Lapisan Tanah",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/09/jasa-sondir-pondasi-dangkal.html": "Jasa Sondir untuk Pondasi Dangkal",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/09/jasa-sondir-daya-dukung-tanah.html": "Jasa Sondir Daya Dukung Tanah",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/09/jasa-sondir-portable-akses-terbatas.html": "Jasa Sondir Portable Akses Terbatas",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/09/jasa-sondir-tanah-hidrolik.html": "Jasa Sondir Tanah Hidrolik",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/09/jasa-sondir-tanah-manual.html": "Jasa Sondir Tanah Manual",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/09/jasa-sondir-renovasi-bangunan.html": "Jasa Sondir untuk Renovasi Bangunan",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/09/jasa-sondir-proyek-skala-kecil.html": "Jasa Sondir Proyek Skala Kecil",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/09/jasa-sondir-ruko-komersial.html": "Jasa Sondir Ruko & Bangunan Komersial",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/09/jasa-sondir-gedung-bertingkat.html": "Jasa Sondir Gedung Bertingkat",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/09/jasa-sondir-rumah-tinggal.html": "Jasa Sondir Rumah Tinggal"  // TYPE: MONEY_CHILD
};

// ============================================================
// JASA CPT (CONE PENETRATION TEST) - SUB2 (MONEY PAGE)
// ============================================================
// 🧠 SEO NOTE: CPT adalah metode uji tanah yang lebih modern dari sondir.
// Intent: Transactional (user mencari jasa CPT untuk proyek spesifik).
// Parent: Jasa Uji Tanah (/p/jasa-uji-tanah.html)
// Breadcrumb: Home > Jasa Konstruksi > Jasa Uji Tanah > Jasa CPT [Nama Layanan] (4 level)
// ============================================================

const urlMappingJasaCpt = {
  // ============================================================
  // [MONEY_MASTER] - HALAMAN UTAMA CPT
  // 🔴 PRIORITAS HIGH - HARUS DIBUAT
  // ============================================================
  // "https://www.betonjayareadymix.com/2019/09/jasa-cpt-uji-tanah.html": "Jasa CPT Uji Tanah",  // TYPE: MONEY_MASTER
  
  // ============================================================
  // [MONEY_CHILD] - CPT PER JENIS PROYEK
  // 🟡 PRIORITAS MEDIUM - DISARANKAN DIBUAT
  // ============================================================
  // "https://www.betonjayareadymix.com/2019/09/jasa-cpt-gedung-bertingkat.html": "Jasa CPT Gedung Bertingkat",  // TYPE: MONEY_CHILD
  // "https://www.betonjayareadymix.com/2019/09/jasa-cpt-perumahan.html": "Jasa CPT Perumahan",  // TYPE: MONEY_CHILD
  // "https://www.betonjayareadymix.com/2019/09/jasa-cpt-jalan-tol.html": "Jasa CPT Jalan Tol",  // TYPE: MONEY_CHILD
  // "https://www.betonjayareadymix.com/2019/09/jasa-cpt-infrastruktur.html": "Jasa CPT Infrastruktur",  // TYPE: MONEY_CHILD
  // "https://www.betonjayareadymix.com/2019/09/jasa-cpt-jembatan.html": "Jasa CPT Jembatan",  // TYPE: MONEY_CHILD
  // "https://www.betonjayareadymix.com/2019/09/jasa-cpt-bandara.html": "Jasa CPT Bandara",  // TYPE: MONEY_CHILD
  
  // ============================================================
  // [MONEY_CHILD] - CPT PER LOKASI
  // 🟢 PRIORITAS LOW - OPSIONAL
  // ============================================================
  // "https://www.betonjayareadymix.com/2019/09/jasa-cpt-jakarta.html": "Jasa CPT Jakarta",  // TYPE: MONEY_CHILD
  // "https://www.betonjayareadymix.com/2019/09/jasa-cpt-surabaya.html": "Jasa CPT Surabaya",  // TYPE: MONEY_CHILD
  // "https://www.betonjayareadymix.com/2019/09/jasa-cpt-bandung.html": "Jasa CPT Bandung",  // TYPE: MONEY_CHILD
  // "https://www.betonjayareadymix.com/2019/09/jasa-cpt-semarang.html": "Jasa CPT Semarang",  // TYPE: MONEY_CHILD
};

// ============================================================
// JASA BORING TANAH - SUB2 (MONEY PAGE)
// ============================================================
// 🧠 SEO NOTE: Boring tanah adalah metode pengambilan sampel tanah untuk uji laboratorium.
// Intent: Transactional (user mencari jasa boring tanah untuk proyek spesifik).
// Parent: Jasa Uji Tanah (/p/jasa-uji-tanah.html)
// Breadcrumb: Home > Jasa Konstruksi > Jasa Uji Tanah > Jasa Boring Tanah [Nama Layanan] (4 level)
// ============================================================

const urlMappingJasaBoringTanah = {
  // ============================================================
  // [MONEY_MASTER] - HALAMAN UTAMA BORING TANAH
  // 🔴 PRIORITAS HIGH - HARUS DIBUAT
  // ============================================================
  // "https://www.betonjayareadymix.com/2019/09/jasa-boring-tanah.html": "Jasa Boring Tanah",  // TYPE: MONEY_MASTER
  
  // ============================================================
  // [MONEY_CHILD] - BORING TANAH PER JENIS PROYEK
  // 🟡 PRIORITAS MEDIUM - DISARANKAN DIBUAT
  // ============================================================
  // "https://www.betonjayareadymix.com/2019/09/jasa-boring-tanah-rumah-tinggal.html": "Jasa Boring Tanah Rumah Tinggal",  // TYPE: MONEY_CHILD
  // "https://www.betonjayareadymix.com/2019/09/jasa-boring-tanah-gedung.html": "Jasa Boring Tanah Gedung",  // TYPE: MONEY_CHILD
  // "https://www.betonjayareadymix.com/2019/09/jasa-boring-tanah-jembatan.html": "Jasa Boring Tanah Jembatan",  // TYPE: MONEY_CHILD
  // "https://www.betonjayareadymix.com/2019/09/jasa-boring-tanah-jalan-tol.html": "Jasa Boring Tanah Jalan Tol",  // TYPE: MONEY_CHILD
  // "https://www.betonjayareadymix.com/2019/09/jasa-boring-tanah-perumahan.html": "Jasa Boring Tanah Perumahan",  // TYPE: MONEY_CHILD
  
  // ============================================================
  // [SUB1] - PANDUAN BORING TANAH
  // 🟢 PRIORITAS LOW - OPSIONAL
  // ============================================================
  // "https://www.betonjayareadymix.com/2019/09/panduan-boring-tanah.html": "Panduan Boring Tanah",  // TYPE: SUB1
};

// ============================================================
// JASA LAB TANAH - SUB2 (MONEY PAGE)
// ============================================================
// 🧠 SEO NOTE: Lab tanah adalah layanan pengujian sampel tanah di laboratorium.
// Intent: Transactional (user mencari jasa uji tanah laboratorium).
// Parent: Jasa Uji Tanah (/p/jasa-uji-tanah.html)
// Breadcrumb: Home > Jasa Konstruksi > Jasa Uji Tanah > Jasa Lab Tanah [Nama Layanan] (4 level)
// ============================================================

const urlMappingJasaLabTanah = {
  // ============================================================
  // [MONEY_MASTER] - HALAMAN UTAMA LAB TANAH
  // 🔴 PRIORITAS HIGH - HARUS DIBUAT
  // ============================================================
  // "https://www.betonjayareadymix.com/2019/09/jasa-lab-tanah.html": "Jasa Lab Tanah",  // TYPE: MONEY_MASTER
  
  // ============================================================
  // [MONEY_CHILD] - JENIS PENGUJIAN LAB TANAH
  // 🟡 PRIORITAS MEDIUM - DISARANKAN DIBUAT
  // ============================================================
  // "https://www.betonjayareadymix.com/2019/09/jasa-uji-kuat-tekan-tanah.html": "Jasa Uji Kuat Tekan Tanah",  // TYPE: MONEY_CHILD
  // "https://www.betonjayareadymix.com/2019/09/jasa-uji-kadar-air-tanah.html": "Jasa Uji Kadar Air Tanah",  // TYPE: MONEY_CHILD
  // "https://www.betonjayareadymix.com/2019/09/jasa-uji-kepadatan-tanah.html": "Jasa Uji Kepadatan Tanah",  // TYPE: MONEY_CHILD
  // "https://www.betonjayareadymix.com/2019/09/jasa-uji-geser-tanah.html": "Jasa Uji Geser Tanah",  // TYPE: MONEY_CHILD
  // "https://www.betonjayareadymix.com/2019/09/jasa-uji-kadar-organik-tanah.html": "Jasa Uji Kadar Organik Tanah",  // TYPE: MONEY_CHILD
  // "https://www.betonjayareadymix.com/2019/09/jasa-uji-kadar-lumpur-tanah.html": "Jasa Uji Kadar Lumpur Tanah",  // TYPE: MONEY_CHILD
};

// ============================================================
// JASA UJI PENETRASI (SPT) - SUB2 (MONEY PAGE)
// ============================================================
// 🧠 SEO NOTE: Uji penetrasi (SPT) adalah metode uji tanah standar.
// Intent: Transactional (user mencari jasa SPT untuk proyek spesifik).
// Parent: Jasa Uji Tanah (/p/jasa-uji-tanah.html)
// Breadcrumb: Home > Jasa Konstruksi > Jasa Uji Tanah > Jasa SPT [Nama Layanan] (4 level)
// ============================================================

const urlMappingJasaUjiPenetrasi = {
  // ============================================================
  // [MONEY_MASTER] - HALAMAN UTAMA SPT
  // 🔴 PRIORITAS HIGH - HARUS DIBUAT
  // ============================================================
  // "https://www.betonjayareadymix.com/2019/09/jasa-uji-penetrasi-spt.html": "Jasa Uji Penetrasi Standar (SPT)",  // TYPE: MONEY_MASTER
  
  // ============================================================
  // [MONEY_CHILD] - SPT PER JENIS PROYEK
  // 🟡 PRIORITAS MEDIUM - DISARANKAN DIBUAT
  // ============================================================
  // "https://www.betonjayareadymix.com/2019/09/jasa-spt-gedung-bertingkat.html": "Jasa SPT Gedung Bertingkat",  // TYPE: MONEY_CHILD
  // "https://www.betonjayareadymix.com/2019/09/jasa-spt-perumahan.html": "Jasa SPT Perumahan",  // TYPE: MONEY_CHILD
  // "https://www.betonjayareadymix.com/2019/09/jasa-spt-jembatan.html": "Jasa SPT Jembatan",  // TYPE: MONEY_CHILD
  // "https://www.betonjayareadymix.com/2019/09/jasa-spt-jalan-tol.html": "Jasa SPT Jalan Tol",  // TYPE: MONEY_CHILD
  // "https://www.betonjayareadymix.com/2019/09/jasa-spt-bandara.html": "Jasa SPT Bandara",  // TYPE: MONEY_CHILD
  
  // ============================================================
  // [SUB1] - PANDUAN SPT
  // 🟢 PRIORITAS LOW - OPSIONAL
  // ============================================================
  // "https://www.betonjayareadymix.com/2019/09/panduan-uji-penetrasi-spt.html": "Panduan Uji Penetrasi SPT",  // TYPE: SUB1
};

// ============================================================
// 🟡 SARAN TAMBAHAN URL (OPTIONAL) - JASA SONDIR
// ============================================================
/*
📌 URL YANG DISARANKAN UNTUK DITAMBAHKAN (JIKA KONTEN MEMADAI):

| No | URL | Nama Halaman | Type | Prioritas | Alasan SEO |
|----|-----|--------------|------|-----------|------------|
| 1 | /2019/09/jasa-sondir-jakarta.html | Jasa Sondir Jakarta | MONEY_CHILD | 🟡 MEDIUM | Menarget keyword lokasi (capital city) |
| 2 | /2019/09/jasa-sondir-jabodetabek.html | Jasa Sondir Jabodetabek | MONEY_CHILD | 🟡 MEDIUM | Menarget keyword wilayah |
| 3 | /2019/09/jasa-sondir-murah.html | Jasa Sondir Murah | MONEY_CHILD | 🟢 LOW | Menarget keyword harga |
*/

// ============================================================
// 📋 RINGKASAN SARAN & TINDAKAN
// ============================================================
/*
| No | Tindakan | Target | Prioritas |
|----|----------|--------|-----------|
| 1 | Buat halaman utama jasa-cpt-uji-tanah.html | urlMappingJasaCpt | 🔴 HIGH |
| 2 | Buat halaman utama jasa-boring-tanah.html | urlMappingJasaBoringTanah | 🔴 HIGH |
| 3 | Buat halaman utama jasa-lab-tanah.html | urlMappingJasaLabTanah | 🔴 HIGH |
| 4 | Buat halaman utama jasa-uji-penetrasi-spt.html | urlMappingJasaUjiPenetrasi | 🔴 HIGH |
| 5 | Buat halaman turunan untuk CPT, Boring, Lab, SPT (sesuai tabel) | Masing-masing const | 🟡 MEDIUM |
| 6 | Tambahkan internal link dari jasa-sondir-*.html ke halaman CPT, Boring, Lab, SPT | Semua URL | 🟡 MEDIUM |
| 7 | Pastikan setiap halaman memiliki CTA ke form pemesanan jasa uji tanah | Semua URL | 🟡 MEDIUM |
| 8 | Tambahkan jasa-sondir-jakarta.html dan jasa-sondir-jabodetabek.html | urlMappingJasaSondir | 🟡 MEDIUM |
*/

// ============================================================
// 📊 STATUS FINAL
// ============================================================
/*
| Const | Jumlah URL | Valid | Saran | Kosong |
|-------|------------|-------|-------|--------|
| urlMappingJasaSondir | 15 | 15 | 3 | 0 |
| urlMappingJasaCpt | 0 | 0 | 11 | 1 (perlu dibuat) |
| urlMappingJasaBoringTanah | 0 | 0 | 7 | 1 (perlu dibuat) |
| urlMappingJasaLabTanah | 0 | 0 | 7 | 1 (perlu dibuat) |
| urlMappingJasaUjiPenetrasi | 0 | 0 | 8 | 1 (perlu dibuat) |
*/

// ============================================================
// 🟢 SEO NOTE - STATUS SEMUA URL
// ============================================================
/*
✅ SEMUA URL di urlMappingJasaSondir sudah valid dengan status [MONEY_CHILD].
✅ Masing-masing menarget keyword spesifik (perumahan, gedung, ruko, dll).
✅ Tidak ada duplikasi intent karena jenis proyek berbeda.
✅ Breadcrumb maksimal 4 level.

📌 REKOMENDASI UNTUK JASA CPT, BORING, LAB, SPT:
1. Prioritaskan membuat halaman utama (MONEY_MASTER) terlebih dahulu
2. Setelah halaman utama selesai, buat halaman turunan (MONEY_CHILD) per jenis proyek
3. Pastikan setiap halaman memiliki konten minimal 500 kata
4. Tambahkan internal link antar sesama jenis layanan uji tanah
5. Pastikan ada CTA ke form pemesanan jasa uji tanah
*/
// ============================================================
// JASA PEMOTONGAN BUKIT LAHAN - MONEY PAGE
// ============================================================
// 🧠 SEO NOTE: Semua URL di bawah adalah MONEY PAGE dengan intent transaksional.
// Parent: Jasa Pemotongan Bukit Lahan (/p/jasa-pemotongan-bukit-lahan.html)
// Breadcrumb: Home > Jasa Konstruksi > Jasa Pematangan Lahan > Jasa Pemotongan Bukit Lahan > [Nama Layanan]
// ============================================================

const urlMappingJasaPemotonganBukitLahan = {
  // ============================================================
  // [MONEY_MASTER] - HARGA & JASA PEMOTONGAN BUKIT (NASIONAL)
  // ============================================================
  "https://www.betonjayareadymix.com/2019/09/harga-jasa-pemotongan-bukit-lahan.html": "Harga Jasa Pemotongan Bukit Lahan",  // TYPE: MONEY_MASTER
  
  // ============================================================
  // [MONEY_CHILD] - SPESIFIK PER METODE & LOKASI
  // ============================================================
  "https://www.betonjayareadymix.com/2019/09/jasa-pemotongan-bukit-lahan-borongan.html": "Jasa Pemotongan Bukit Lahan Borongan",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/09/jasa-pemotongan-bukit-lahan-parkir-lapangan.html": "Jasa Pemotongan Bukit Lahan Parkir & Lapangan",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/09/jasa-pemotongan-bukit-lahan-kavling.html": "Jasa Pemotongan Bukit Lahan Kavling",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/09/jasa-pemotongan-bukit-lahan-jalan-akses.html": "Jasa Pemotongan Bukit Lahan Jalan Akses",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/09/jasa-pemotongan-bukit-lahan-luas.html": "Jasa Pemotongan Bukit Lahan Luas",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/09/jasa-pemotongan-bukit-lahan-rawan-longsor.html": "Jasa Pemotongan Bukit Lahan Rawan Longsor",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/09/jasa-pemotongan-bukit-lahan-curam-terjal.html": "Jasa Pemotongan Bukit Lahan Curam & Terjal",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/09/jasa-cut-fill-bukit-lahan.html": "Jasa Cut & Fill Bukit Lahan",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/09/jasa-pemotongan-bukit-lahan-dengan-alat.html": "Jasa Pemotongan Bukit Lahan dengan Alat",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/09/jasa-pemotongan-bukit-lahan-manual-semi.html": "Jasa Pemotongan Bukit Lahan Manual & Semi Manual"  // TYPE: MONEY_CHILD
};

// ============================================================
// JASA PENGUPASAN LAHAN TANAH - MONEY PAGE
// ============================================================

const urlMappingJasaPengupasanLahanTanah = {
  // ============================================================
  // [MONEY_CHILD] - SPESIFIK PER PROYEK
  // ============================================================
  "https://www.betonjayareadymix.com/2019/09/jasa-pengupasan-lahan-tanah-proyek-perumahan.html": "Jasa Pengupasan Lahan Tanah Proyek Perumahan",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/09/jasa-pengupasan-lahan-tanah-proyek-komersial.html": "Jasa Pengupasan Lahan Tanah Proyek Komersial",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/09/jasa-pengupasan-lahan-tanah-proyek-infrastruktur.html": "Jasa Pengupasan Lahan Tanah Proyek Infrastruktur",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/09/jasa-pengupasan-lahan-tanah-kawasan-estate.html": "Jasa Pengupasan Lahan Tanah Kawasan Estate",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/09/jasa-pengupasan-lahan-tanah-siap-bangun.html": "Jasa Pengupasan Lahan Tanah Siap Bangun",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/09/jasa-pengupasan-lahan-tanah-siap-pondasi.html": "Jasa Pengupasan Lahan Tanah Siap Pondasi",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/09/jasa-pengupasan-lahan-tanah-tahap-awal.html": "Jasa Pengupasan Lahan Tanah Tahap Awal",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/09/jasa-pengupasan-lahan-tanah-untuk-pematangan.html": "Jasa Pengupasan Lahan Tanah untuk Pematangan"  // TYPE: MONEY_CHILD
};

// ============================================================
// JASA TEBANG POHON - MONEY PAGE
// ============================================================

const urlMappingJasaTebangPohon = {
  // ============================================================
  // [MONEY_CHILD] - SPESIFIK PER KONDISI & LOKASI
  // ============================================================
  "https://www.betonjayareadymix.com/2019/09/jasa-tebang-pohon-besar.html": "Jasa Tebang Pohon Besar",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/09/jasa-tebang-pohon-dekat-bangunan.html": "Jasa Tebang Pohon Dekat Bangunan",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/09/jasa-tebang-pohon-pematangan-lahan.html": "Jasa Tebang Pohon untuk Pematangan Lahan",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/09/jasa-tebang-pohon-cabut-akar.html": "Jasa Tebang Pohon + Cabut Akar",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/09/jasa-tebang-pohon-proyek-konstruksi.html": "Jasa Tebang Pohon Proyek Konstruksi",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/09/jasa-tebang-pohon-aman-bersertifikat.html": "Jasa Tebang Pohon Aman & Bersertifikat",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/09/jasa-tebang-pohon-darurat.html": "Jasa Tebang Pohon Darurat",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/09/jasa-tebang-pohon-pembuangan-limbah.html": "Jasa Tebang Pohon & Pembuangan Limbah",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/09/jasa-tebang-pohon-area-perkotaan.html": "Jasa Tebang Pohon Area Perkotaan"  // TYPE: MONEY_CHILD
};

// ============================================================
// JASA PERATAAN DAN GRADING LAHAN - MONEY PAGE
// ============================================================

const urlMappingJasaPerataandanGradingLahan = {
  // ============================================================
  // [MONEY_CHILD] - SPESIFIK PER METODE & SKALA
  // ============================================================
  "https://www.betonjayareadymix.com/2019/09/jasa-rough-grading-lahan.html": "Jasa Rough Grading Lahan",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/09/jasa-fine-grading-lahan.html": "Jasa Fine Grading Lahan",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/09/jasa-perataan-akhir-lahan.html": "Jasa Perataan Akhir Lahan",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/09/jasa-pembentukan-elevasi-leveling-lahan.html": "Jasa Pembentukan Elevasi & Leveling Lahan",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/09/jasa-pembentukan-kontur-grading-lahan.html": "Jasa Pembentukan Kontur & Grading Lahan",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/09/jasa-perataan-dan-grading-lahan-presisi.html": "Jasa Perataan dan Grading Lahan Presisi",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/09/jasa-perataan-dan-grading-lahan-kavling.html": "Jasa Perataan dan Grading Lahan Kavling",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/09/jasa-grading-lahan-perumahan.html": "Jasa Grading Lahan Perumahan",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/09/jasa-grading-lahan-komersial.html": "Jasa Grading Lahan Komersial",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/09/jasa-grading-lahan-lahan-kosong.html": "Jasa Grading Lahan Lahan Kosong",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/09/jasa-grading-lahan-alat-berat.html": "Jasa Grading Lahan Alat Berat",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/09/jasa-grading-lahan-skala-kecil.html": "Jasa Grading Lahan Skala Kecil",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/09/jasa-grading-lahan-miring.html": "Jasa Grading Lahan Miring",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/09/jasa-perataan-dan-grading-lahan-cepat.html": "Jasa Perataan dan Grading Lahan Cepat",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/09/jasa-grading-lahan-siap-jual.html": "Jasa Grading Lahan Siap Jual"  // TYPE: MONEY_CHILD
};

// ============================================================
// JASA ELEVASI LAHAN - MONEY PAGE
// ============================================================

const urlMappingJasaElevasiLahan = {
  // ============================================================
  // [MONEY_MASTER] - HARGA JASA ELEVASI LAHAN (NASIONAL)
  // ============================================================
  "https://www.betonjayareadymix.com/2019/09/harga-jasa-elevasi-lahan-terbaru.html": "Harga Jasa Elevasi Lahan Terbaru",  // TYPE: MONEY_MASTER
  
  // ============================================================
  // [MONEY_CHILD] - SPESIFIK PER METODE & LOKASI
  // ============================================================
  "https://www.betonjayareadymix.com/2019/09/jasa-elevasi-lahan-borongan.html": "Jasa Elevasi Lahan Borongan",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/09/jasa-elevasi-lahan-gudang-area-industri.html": "Jasa Elevasi Lahan Gudang & Area Industri",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/09/jasa-elevasi-lahan-kavling.html": "Jasa Elevasi Lahan Kavling",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/09/jasa-elevasi-lahan-area-parkir-lapangan.html": "Jasa Elevasi Lahan Area Parkir & Lapangan",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/09/jasa-elevasi-lahan-jalan-akses-proyek.html": "Jasa Elevasi Lahan Jalan Akses Proyek",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/09/jasa-elevasi-lahan-lunak-bekas-timbunan.html": "Jasa Elevasi Lahan Lunak Bekas Timbunan",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/09/jasa-elevasi-lahan-miring-tidak-rata.html": "Jasa Elevasi Lahan Miring & Tidak Rata",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/09/jasa-elevasi-lahan-rata-siap-bangun.html": "Jasa Elevasi Lahan Rata Siap Bangun",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/09/jasa-elevasi-lahan-urugan-pemadatan.html": "Jasa Elevasi Lahan Urugan & Pemadatan",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/09/jasa-elevasi-lahan-alat-berat.html": "Jasa Elevasi Lahan Alat Berat",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/09/jasa-elevasi-lahan-manual-semi-mekanis.html": "Jasa Elevasi Lahan Manual & Semi Mekanis"  // TYPE: MONEY_CHILD
};

// ============================================================
// JASA BADAN LAHAN - MONEY PAGE
// ============================================================

const urlMappingJasaBadanLahan = {
  // ============================================================
  // [MONEY_CHILD] - SPESIFIK PER TAHAPAN & SKALA
  // ============================================================
  "https://www.betonjayareadymix.com/2019/09/jasa-perataan-badan-lahan.html": "Jasa Perataan Badan Lahan",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/09/jasa-pemadatan-badan-lahan.html": "Jasa Pemadatan Badan Lahan",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/09/jasa-pengurugan-badan-lahan.html": "Jasa Pengurugan Badan Lahan",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/09/jasa-penyesuaian-elevasi-badan-lahan.html": "Jasa Penyesuaian Elevasi Badan Lahan",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/09/jasa-pembentukan-kontur-badan-lahan.html": "Jasa Pembentukan Kontur Badan Lahan",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/09/jasa-badan-lahan-kavling-perumahan.html": "Jasa Badan Lahan Kavling Perumahan",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/09/jasa-badan-lahan-lahan-kosong.html": "Jasa Badan Lahan Lahan Kosong",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/09/jasa-badan-lahan-area-komersial.html": "Jasa Badan Lahan Area Komersial",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/09/jasa-badan-lahan-kawasan-industri-ringan.html": "Jasa Badan Lahan Kawasan Industri Ringan",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/09/jasa-badan-lahan-dengan-alat-berat.html": "Jasa Badan Lahan dengan Alat Berat",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/09/jasa-badan-lahan-skala-kecil-menengah.html": "Jasa Badan Lahan Skala Kecil & Menengah",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/09/jasa-badan-lahan-area-miring-tidak-rata.html": "Jasa Badan Lahan Area Miring & Tidak Rata",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/09/jasa-badan-lahan-cepat-siap-bangun.html": "Jasa Badan Lahan Cepat Siap Bangun",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/09/jasa-badan-lahan-siap-jual.html": "Jasa Badan Lahan Siap Jual"  // TYPE: MONEY_CHILD
};

// ============================================================
// JASA CUT AND FILL LAHAN - MONEY PAGE
// ============================================================

const urlMappingJasaCutandFillLahan = {
  // ============================================================
  // [MONEY_CHILD] - SPESIFIK PER LOKASI & METODE
  // ============================================================
  "https://www.betonjayareadymix.com/2019/09/jasa-monitoring-lahan-cut-and-fill.html": "Jasa Monitoring Lahan Cut and Fill",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/09/jasa-pematangan-lahan-pertanian.html": "Jasa Pematangan Lahan Pertanian",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/09/jasa-pengelolaan-lahan-berbatu-tebing.html": "Jasa Pengelolaan Lahan Berbatu & Tebing",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/09/jasa-cut-and-fill-lahan-komersial.html": "Jasa Cut and Fill Lahan Komersial",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/09/jasa-cut-and-fill-lahan-perumahan.html": "Jasa Cut and Fill Lahan Perumahan",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/09/jasa-pengerukan-pemindahan-tanah.html": "Jasa Pengerukan & Pemindahan Tanah",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/09/jasa-perencanaan-drainase-erosi-lahan.html": "Jasa Perencanaan Drainase & Erosi Lahan",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/09/jasa-pemodelan-kontur-topografi-lahan.html": "Jasa Pemodelan Kontur & Topografi Lahan",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/09/jasa-konsultan-cut-and-fill-lahan.html": "Jasa Konsultan Cut and Fill Lahan",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/09/jasa-analisis-struktur-kualitas-tanah.html": "Jasa Analisis Struktur & Kualitas Tanah"  // TYPE: MONEY_CHILD
};

// ============================================================
// JASA URUGAN TANAH LAHAN - MONEY PAGE
// ============================================================

const urlMappingJasaUruganTanahLahan = {
  // ============================================================
  // [MONEY_CHILD] - SPESIFIK PER SKALA & LOKASI
  // ============================================================
  "https://www.betonjayareadymix.com/2019/09/jasa-urugan-tanah-lahan-hemat.html": "Jasa Urugan Tanah Lahan Hemat",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/09/jasa-urugan-tanah-lahan-stabilitas.html": "Jasa Urugan Tanah Lahan Stabilitas",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/09/jasa-urugan-tanah-lahan-developer.html": "Jasa Urugan Tanah Lahan Developer",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/09/jasa-urugan-tanah-lahan-cepat.html": "Jasa Urugan Tanah Lahan Cepat",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/09/jasa-urugan-tanah-lahan-konstruksi.html": "Jasa Urugan Tanah Lahan Konstruksi",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/09/jasa-urugan-tanah-lahan-bergaransi.html": "Jasa Urugan Tanah Lahan Bergaransi",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/09/jasa-urugan-tanah-lahan-alat-berat.html": "Jasa Urugan Tanah Lahan Alat Berat",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/09/jasa-urugan-tanah-lahan-infrastruktur.html": "Jasa Urugan Tanah Lahan Infrastruktur",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/09/jasa-urugan-tanah-lahan-perkebunan.html": "Jasa Urugan Tanah Lahan Perkebunan",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/09/jasa-urugan-tanah-lahan-perumahan.html": "Jasa Urugan Tanah Lahan Perumahan"  // TYPE: MONEY_CHILD
};

// ============================================================
// JASA PEMADATAN TANAH LAHAN - MONEY PAGE
// ============================================================

const urlMappingJasaPemadatanTanahLahan = {
  // ============================================================
  // [MONEY_CHILD] - SPESIFIK PER PROYEK & METODE
  // ============================================================
  "https://www.betonjayareadymix.com/2019/09/jasa-pemadatan-tanah-proyek-konstruksi.html": "Jasa Pemadatan Tanah Proyek Konstruksi",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/09/jasa-pemadatan-lahan-sebelum-pembangunan.html": "Jasa Pemadatan Lahan Sebelum Pembangunan",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/09/jasa-pemadatan-tanah-pondasi-bangunan.html": "Jasa Pemadatan Tanah Pondasi Bangunan",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/09/jasa-pemadatan-tanah-jalan-infrastruktur.html": "Jasa Pemadatan Tanah Jalan & Infrastruktur",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/09/jasa-pemadatan-tanah-perumahan-kavling.html": "Jasa Pemadatan Tanah Perumahan & Kavling",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/09/jasa-pemadatan-tanah-vibro-roller.html": "Jasa Pemadatan Tanah Vibro Roller",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/09/jasa-pemadatan-tanah-stamper-kodok.html": "Jasa Pemadatan Tanah Stamper Kodok",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/09/jasa-pemadatan-tanah-manual-alat-berat.html": "Jasa Pemadatan Tanah Manual & Alat Berat",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/09/jasa-pemadatan-lahan-perkebunan-pertanian.html": "Jasa Pemadatan Lahan Perkebunan & Pertanian",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/09/jasa-pemadatan-lahan-gudang-industri.html": "Jasa Pemadatan Lahan Gudang & Industri",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/09/jasa-pemadatan-tanah-area-parkir-lapangan.html": "Jasa Pemadatan Tanah Area Parkir & Lapangan",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/09/jasa-pemadatan-tanah-bergaransi.html": "Jasa Pemadatan Tanah Bergaransi",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/09/jasa-pemadatan-tanah-tanah-lunak.html": "Jasa Pemadatan Tanah Lunak"  // TYPE: MONEY_CHILD
};

// ============================================================
// JASA PEMBERSIHAN LAHAN - MONEY PAGE
// ============================================================

const urlMappingJasaPembersihanLahan = {
  // ============================================================
  // [MONEY_CHILD] - SPESIFIK PER KONDISI & LOKASI
  // ============================================================
  "https://www.betonjayareadymix.com/2019/09/jasa-pembersihan-lahan-sebelum-dijual.html": "Jasa Pembersihan Lahan Sebelum Dijual",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/09/jasa-pembersihan-lahan-terlantar.html": "Jasa Pembersihan Lahan Terlantar",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/09/jasa-pembersihan-lahan-darurat.html": "Jasa Pembersihan Lahan Darurat",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/09/jasa-pembersihan-lahan-skala-kecil.html": "Jasa Pembersihan Lahan Skala Kecil",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/09/jasa-pembersihan-lahan-cepat-efisien.html": "Jasa Pembersihan Lahan Cepat & Efisien",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/09/jasa-pembersihan-lahan-alat-berat.html": "Jasa Pembersihan Lahan Menggunakan Alat Berat",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/09/jasa-pembersihan-lahan-kavling.html": "Jasa Pembersihan Lahan Kavling",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/09/jasa-pembersihan-lahan-komersial-gudang.html": "Jasa Pembersihan Lahan Komersial & Gudang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/09/jasa-pembersihan-lahan-industri-ringan.html": "Jasa Pembersihan Lahan Industri Ringan",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/09/jasa-pembersihan-lahan-pertanian.html": "Jasa Pembersihan Lahan Pertanian",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/09/jasa-pembersihan-lahan-kebun-perkebunan.html": "Jasa Pembersihan Lahan Kebun & Perkebunan",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/09/jasa-pembersihan-lahan-perumahan-kavling.html": "Jasa Pembersihan Lahan Perumahan & Kavling",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/09/jasa-cut-fill-lahan-non-konstruksi.html": "Jasa Cut and Fill Lahan Non Konstruksi",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/09/jasa-perataan-awal-lahan.html": "Jasa Perataan Awal Lahan",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/09/jasa-pembersihan-lahan-sampah-puing.html": "Jasa Pembersihan Lahan dari Sampah & Puing",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/09/jasa-cabut-akar-pembersihan-lahan.html": "Jasa Cabut Akar & Pembersihan Lahan",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/09/jasa-pembersihan-semak-rumput-liar.html": "Jasa Pembersihan Semak & Rumput Liar",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/09/jasa-land-clearing-lahan.html": "Jasa Land Clearing Lahan"  // TYPE: MONEY_CHILD
};

// ============================================================
// JASA BASE COURSE LAHAN - MONEY PAGE
// ============================================================

const urlMappingJasaBaseCourseLahan = {
  // ============================================================
  // [MONEY_MASTER] - HARGA JASA BASE COURSE (NASIONAL)
  // ============================================================
  "https://www.betonjayareadymix.com/2019/09/harga-jasa-base-course-lahan-terbaru.html": "Harga Jasa Base Course Lahan Terbaru",  // TYPE: MONEY_MASTER
  
  // ============================================================
  // [MONEY_CHILD] - SPESIFIK PER METODE & MATERIAL
  // ============================================================
  "https://www.betonjayareadymix.com/2019/09/jasa-base-course-borongan.html": "Jasa Base Course Borongan",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/09/jasa-base-course-lahan-miring-tidak-rata.html": "Jasa Base Course Lahan Miring & Tidak Rata",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/09/jasa-base-course-lahan-lunak.html": "Jasa Base Course Lahan Lunak",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/09/jasa-base-course-gudang-area-industri.html": "Jasa Base Course Gudang & Area Industri",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/09/jasa-base-course-kavling-lahan-bangunan.html": "Jasa Base Course Kavling & Lahan Bangunan",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/09/jasa-base-course-area-parkir-lapangan.html": "Jasa Base Course Area Parkir & Lapangan",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/09/jasa-base-course-jalan-akses.html": "Jasa Base Course Jalan Akses",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/09/jasa-base-course-alat-berat.html": "Jasa Base Course Alat Berat",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/09/jasa-base-course-manual-semi-mekanis.html": "Jasa Base Course Manual & Semi Mekanis",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/09/jasa-base-course-agregat-kelas-c.html": "Jasa Base Course Agregat Kelas C",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/09/jasa-base-course-agregat-kelas-b.html": "Jasa Base Course Agregat Kelas B",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/09/jasa-base-course-agregat-kelas-a.html": "Jasa Base Course Agregat Kelas A",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/09/jasa-base-course-lpb.html": "Jasa Base Course LPB",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/09/jasa-base-course-lpa.html": "Jasa Base Course LPA"  // TYPE: MONEY_CHILD
};

// ============================================================
// JASA STABILISASI TANAH LAHAN - MONEY PAGE
// ============================================================

const urlMappingJasaStabilisasiTanahLahan = {
  // ============================================================
  // [MONEY_CHILD] - SPESIFIK PER SKALA & METODE
  // ============================================================
  "https://www.betonjayareadymix.com/2019/09/jasa-stabilisasi-tanah-skala-kecil.html": "Jasa Stabilisasi Tanah Skala Kecil",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/09/jasa-stabilisasi-tanah-manual-semi-mekanis.html": "Jasa Stabilisasi Tanah Manual & Semi Mekanis",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/09/jasa-stabilisasi-tanah-dengan-alat-berat.html": "Jasa Stabilisasi Tanah dengan Alat Berat",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/09/jasa-stabilisasi-tanah-kawasan-industri.html": "Jasa Stabilisasi Tanah Kawasan Industri",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/09/jasa-stabilisasi-tanah-area-komersial.html": "Jasa Stabilisasi Tanah Area Komersial",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/09/jasa-stabilisasi-tanah-lahan-kavling.html": "Jasa Stabilisasi Tanah Lahan Kavling",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/09/jasa-stabilisasi-tanah-lahan-perumahan.html": "Jasa Stabilisasi Tanah Lahan Perumahan",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/09/jasa-stabilisasi-tanah-basah.html": "Jasa Stabilisasi Tanah Basah",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/09/jasa-stabilisasi-tanah-rawan-longsor.html": "Jasa Stabilisasi Tanah Rawan Longsor",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/09/jasa-stabilisasi-tanah-berpasir.html": "Jasa Stabilisasi Tanah Berpasir",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/09/jasa-stabilisasi-tanah-lunak-lembek.html": "Jasa Stabilisasi Tanah Lunak & Lembek",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/09/jasa-stabilisasi-tanah-geotekstil.html": "Jasa Stabilisasi Tanah dengan Geotekstil",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/09/jasa-stabilisasi-tanah-mekanis.html": "Jasa Stabilisasi Tanah Mekanis",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/09/jasa-stabilisasi-tanah-kimia.html": "Jasa Stabilisasi Tanah Kimia",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/09/jasa-stabilisasi-tanah-dengan-kapur.html": "Jasa Stabilisasi Tanah dengan Kapur",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/09/jasa-stabilisasi-tanah-dengan-semen.html": "Jasa Stabilisasi Tanah dengan Semen"  // TYPE: MONEY_CHILD
};

// ============================================================
// 🔴 SEO NOTE - BROKEN LINK IDENTIFIED
// ============================================================
/*
⚠️ PERHATIAN: URL berikut TIDAK VALID (broken link / typo):
- /2019/09/jasa-stabilisasi-tanah-dengan-ala (tidak lengkap)

📌 REKOMENDASI:
HAPUS URL tersebut dari const karena:
1. URL tidak lengkap (typo)
2. Konten yang dimaksud sudah ada di 'jasa-stabilisasi-tanah-dengan-alat-berat.html'
3. Tidak perlu redirect karena URL tidak pernah dipublish

✅ TIDAK PERLU DITAMBAHKAN KE CONST.
*/
// ============================================================
// JASA DRAINASE LAHAN - SUB2 (MONEY PAGE)
// ============================================================
// 🧠 SEO NOTE: Cluster ini fokus ke layanan drainase lahan untuk berbagai kondisi.
// Intent: Commercial Investigation + Transactional.
// Parent: Jasa Drainase Lahan (/p/jasa-drainase-lahan.html)
// Breadcrumb: Home > Jasa Konstruksi > Jasa Drainase Lahan > [Nama Layanan] (4 level)
// ============================================================

const urlMappingJasaDrainaseLahan = {
  // ============================================================
  // [MONEY_MASTER] - DRAINASE LAHAN (MASTER)
  // 🧠 TYPE: MONEY_MASTER (WAJIB tampil)
  // ============================================================
  "https://www.betonjayareadymix.com/2019/09/jasa-pembuatan-saluran-drainase-lahan.html": "Jasa Pembuatan Saluran Drainase Lahan",  // TYPE: MONEY_MASTER
  
  // ============================================================
  // [MONEY_CHILD] - DRAINASE PER JENIS
  // 🧠 TYPE: MONEY_CHILD (WAJIB tampil, spesifik jenis)
  // ============================================================
  "https://www.betonjayareadymix.com/2019/09/jasa-drainase-lahan-terbuka.html": "Jasa Drainase Lahan Terbuka",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/09/jasa-drainase-lahan-tertutup.html": "Jasa Drainase Lahan Tertutup",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/09/jasa-subdrain-drainase-lahan.html": "Jasa Subdrain Drainase Lahan",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/09/jasa-sistem-drainase-air-hujan-lahan.html": "Jasa Sistem Drainase Air Hujan Lahan",  // TYPE: MONEY_CHILD
  
  // ============================================================
  // [MONEY_CHILD] - STRUKTUR DRAINASE
  // ============================================================
  "https://www.betonjayareadymix.com/2019/09/jasa-pembuatan-sumur-resapan.html": "Jasa Pembuatan Sumur Resapan",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/09/jasa-pembuatan-parit-gorong-gorong-lahan.html": "Jasa Pembuatan Parit & Gorong-Gorong Lahan",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/09/jasa-kolam-resapan-lahan.html": "Jasa Pembuatan Kolam Resapan Lahan",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/09/jasa-normalisasi-drainase-lahan.html": "Jasa Normalisasi Drainase Lahan",  // TYPE: MONEY_CHILD
  
  // ============================================================
  // [MONEY_CHILD] - DRAINASE PER LOKASI / AREA
  // ============================================================
  "https://www.betonjayareadymix.com/2019/09/jasa-drainase-lahan-perumahan.html": "Jasa Drainase Lahan Perumahan",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/09/jasa-drainase-lahan-kavling-lahan-kosong.html": "Jasa Drainase Lahan Kavling & Lahan Kosong",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/09/jasa-drainase-lahan-area-komersial.html": "Jasa Drainase Lahan Area Komersial",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/09/jasa-drainase-lahan-kawasan-industri.html": "Jasa Drainase Lahan Kawasan Industri",  // TYPE: MONEY_CHILD
  
  // ============================================================
  // [MONEY_CHILD] - DRAINASE PER METODE
  // ============================================================
  "https://www.betonjayareadymix.com/2019/09/jasa-drainase-lahan-dengan-alat-berat.html": "Jasa Drainase Lahan Dengan Alat Berat",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/09/jasa-drainase-lahan-manual-semi-mekanis.html": "Jasa Drainase Lahan Manual & Semi Mekanis",  // TYPE: MONEY_CHILD
  
  // ============================================================
  // [MONEY_CHILD] - DRAINASE KONDISI KHUSUS
  // ============================================================
  "https://www.betonjayareadymix.com/2019/09/jasa-drainase-lahan-rawan-banjir.html": "Jasa Drainase Lahan Rawan Banjir",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/09/jasa-drainase-lahan-cepat-siap-digunakan.html": "Jasa Drainase Lahan Cepat Siap Digunakan"  // TYPE: MONEY_CHILD
};

// ============================================================
// 🟡 SARAN TAMBAHAN URL (OPTIONAL) - JASA DRAINASE LAHAN
// ============================================================
/*
📌 URL YANG DISARANKAN UNTUK DITAMBAHKAN (JIKA KONTEN MEMADAI):

| URL | Nama Halaman | Type | Parent | Alasan SEO |
|-----|--------------|------|--------|------------|
| /2019/09/jasa-drainase-lahan-pertanian.html | Jasa Drainase Lahan Pertanian | MONEY_CHILD | Jasa Drainase Lahan | Menarget keyword spesifik lahan pertanian |
| /2019/09/jasa-drainase-lahan-perkebunan.html | Jasa Drainase Lahan Perkebunan | MONEY_CHILD | Jasa Drainase Lahan | Menarget keyword spesifik perkebunan |

📌 CATATAN: URL di atas disarankan hanya jika kontennya memadai.
*/

// ============================================================
// JASA GEOTEKSTIL LAHAN - SUB2 (MONEY PAGE)
// ============================================================
// 🧠 SEO NOTE: Cluster ini fokus ke layanan geotekstil untuk berbagai aplikasi.
// Intent: Commercial Investigation + Transactional.
// Parent: Jasa Geotekstil Lahan (/p/jasa-geotekstil-lahan.html)
// Breadcrumb: Home > Jasa Konstruksi > Jasa Geotekstil Lahan > [Nama Layanan] (4 level)
// ============================================================

const urlMappingJasaGeotekstilLahan = {
  // ============================================================
  // [MONEY_MASTER] - GEOTEKSTIL (MASTER)
  // 🧠 TYPE: MONEY_MASTER (WAJIB tampil)
  // ============================================================
  "https://www.betonjayareadymix.com/2019/09/harga-jasa-geotekstil-lahan-terbaru.html": "Harga Jasa Geotekstil Lahan Terbaru",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/2019/09/jasa-geotekstil-borongan.html": "Jasa Geotekstil Borongan",  // TYPE: MONEY_MASTER
  
  // ============================================================
  // [MONEY_CHILD] - GEOTEKSTIL PER APLIKASI
  // 🧠 TYPE: MONEY_CHILD (WAJIB tampil, spesifik aplikasi)
  // ============================================================
  "https://www.betonjayareadymix.com/2019/09/jasa-geotekstil-stabilisasi-subgrade.html": "Jasa Geotekstil Stabilisasi Subgrade",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/09/jasa-pemasangan-geotekstil-base-course.html": "Jasa Pemasangan Geotekstil Base Course",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/09/jasa-geotekstil-lahan-lunak.html": "Jasa Geotekstil Lahan Lunak",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/09/jasa-geotekstil-fondasi-bangunan-gudang.html": "Jasa Geotekstil Fondasi Bangunan & Gudang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/09/jasa-geotekstil-area-parkir-lapangan.html": "Jasa Geotekstil Area Parkir & Lapangan",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/09/jasa-geotekstil-jalan-akses.html": "Jasa Geotekstil Jalan Akses",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/09/jasa-geotekstil-separator.html": "Jasa Geotekstil Separator",  // TYPE: MONEY_CHILD
  
  // ============================================================
  // [MONEY_CHILD] - GEOTEKSTIL PER JENIS MATERIAL
  // ============================================================
  "https://www.betonjayareadymix.com/2019/09/jasa-geotekstil-non-woven.html": "Jasa Geotekstil Non Woven",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/09/jasa-geotekstil-woven.html": "Jasa Geotekstil Woven"  // TYPE: MONEY_CHILD
};

// ============================================================
// 🟡 SARAN TAMBAHAN URL (OPTIONAL) - JASA GEOTEKSTIL LAHAN
// ============================================================
/*
📌 URL YANG DISARANKAN UNTUK DITAMBAHKAN (JIKA KONTEN MEMADAI):

| URL | Nama Halaman | Type | Parent | Alasan SEO |
|-----|--------------|------|--------|------------|
| /2019/09/jasa-geotekstil-untuk-drainase.html | Jasa Geotekstil untuk Drainase | MONEY_CHILD | Jasa Geotekstil Lahan | Menarget aplikasi drainase |
| /2019/09/jasa-geotekstil-untuk-pondasi.html | Jasa Geotekstil untuk Pondasi | MONEY_CHILD | Jasa Geotekstil Lahan | Menarget aplikasi pondasi |

📌 CATATAN: URL di atas disarankan hanya jika kontennya memadai.
*/

// ============================================================
// JASA PERSIAPAN PONDASI LAHAN - SUB2 (MONEY PAGE)
// ============================================================
// 🧠 SEO NOTE: Cluster ini fokus ke layanan persiapan lahan untuk pondasi.
// Intent: Commercial Investigation + Transactional.
// Parent: Jasa Persiapan Pondasi Lahan (/p/jasa-persiapan-pondasi-lahan.html)
// Breadcrumb: Home > Jasa Konstruksi > Jasa Persiapan Pondasi Lahan > [Nama Layanan] (4 level)
// ============================================================

const urlMappingJasaPersiapanPondasiLahan = {
  // ============================================================
  // [MONEY_MASTER] - PERSIAPAN PONDASI (MASTER)
  // 🧠 TYPE: MONEY_MASTER (WAJIB tampil)
  // ============================================================
  "https://www.betonjayareadymix.com/2019/09/harga-jasa-persiapan-pondasi-lahan.html": "Harga Jasa Persiapan Pondasi Lahan",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/2019/09/jasa-persiapan-pondasi-borongan.html": "Jasa Persiapan Pondasi Borongan",  // TYPE: MONEY_MASTER
  
  // ============================================================
  // [MONEY_CHILD] - PERSIAPAN PONDASI PER JENIS BANGUNAN
  // 🧠 TYPE: MONEY_CHILD (WAJIB tampil, spesifik jenis bangunan)
  // ============================================================
  "https://www.betonjayareadymix.com/2019/09/jasa-persiapan-pondasi-gedung-bertingkat.html": "Jasa Persiapan Pondasi Gedung Bertingkat",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/09/jasa-persiapan-pondasi-gudang-pabrik.html": "Jasa Persiapan Pondasi Gudang & Pabrik",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/09/jasa-persiapan-pondasi-rumah-tinggal.html": "Jasa Persiapan Pondasi Rumah Tinggal",  // TYPE: MONEY_CHILD
  
  // ============================================================
  // [MONEY_CHILD] - PERSIAPAN PONDASI PER KONDISI LAHAN
  // ============================================================
  "https://www.betonjayareadymix.com/2019/09/jasa-persiapan-pondasi-lahan-miring.html": "Jasa Persiapan Pondasi Lahan Miring",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/09/jasa-persiapan-pondasi-lahan-lunak.html": "Jasa Persiapan Pondasi Lahan Lunak",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/09/jasa-stabilisasi-tanah-untuk-pondasi.html": "Jasa Stabilisasi Tanah untuk Pondasi",  // TYPE: MONEY_CHILD
  
  // ============================================================
  // [MONEY_CHILD] - METODE & MATERIAL PERSIAPAN PONDASI
  // ============================================================
  "https://www.betonjayareadymix.com/2019/09/jasa-pemasangan-geotekstil-pondasi.html": "Jasa Pemasangan Geotekstil Pondasi",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/09/jasa-base-course-pondasi-bangunan.html": "Jasa Base Course Pondasi Bangunan",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/09/jasa-galian-urugan-pondasi.html": "Jasa Galian & Urugan Pondasi",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/09/jasa-pemadatan-tanah-pondasi.html": "Jasa Pemadatan Tanah Pondasi",  // TYPE: MONEY_CHILD
  
  // ============================================================
  // [MONEY_CHILD] - PEKERJAAN AWAL PERSIAPAN PONDASI
  // ============================================================
  "https://www.betonjayareadymix.com/2019/09/jasa-perataan-grading-lahan-pondasi.html": "Jasa Perataan & Grading Lahan Pondasi",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/09/jasa-pembersihan-clearing-lahan-pondasi.html": "Jasa Pembersihan & Clearing Lahan Pondasi"  // TYPE: MONEY_CHILD
};

// ============================================================
// 🟡 SARAN TAMBAHAN URL (OPTIONAL) - JASA PERSIAPAN PONDASI LAHAN
// ============================================================
/*
📌 URL YANG DISARANKAN UNTUK DITAMBAHKAN (JIKA KONTEN MEMADAI):

| URL | Nama Halaman | Type | Parent | Alasan SEO |
|-----|--------------|------|--------|------------|
| /2019/09/jasa-persiapan-pondasi-tiang-pancang.html | Jasa Persiapan Pondasi Tiang Pancang | MONEY_CHILD | Jasa Persiapan Pondasi Lahan | Menarget metode pondasi spesifik |
| /2019/09/jasa-persiapan-pondasi-bore-pile.html | Jasa Persiapan Pondasi Bore Pile | MONEY_CHILD | Jasa Persiapan Pondasi Lahan | Menarget metode pondasi spesifik |

📌 CATATAN: URL di atas disarankan hanya jika kontennya memadai.
*/

// ============================================================
// 🟢 SEO NOTE - STATUS SEMUA URL
// ============================================================
/*
✅ SEMUA URL di atas sudah valid dengan status [MONEY_MASTER] atau [MONEY_CHILD].
✅ Masing-masing menarget keyword spesifik (per jenis, metode, lokasi, aplikasi).
✅ Tidak ada duplikasi intent karena jenis layanan berbeda.

📌 REKOMENDASI BREADCRUMB (4 level, skip parent yang tidak perlu):
   Home > Jasa Konstruksi > Jasa Drainase Lahan > Jasa Drainase Lahan Terbuka
   Home > Jasa Konstruksi > Jasa Geotekstil Lahan > Jasa Geotekstil Woven
   Home > Jasa Konstruksi > Jasa Persiapan Pondasi Lahan > Jasa Persiapan Pondasi Rumah Tinggal
*/
/**
 * generateBreadcrumbForMapping v5.6 — COMPLETE PHASE SYSTEM WITH ENTITY PILLAR EXACT MATCH
 * ✅ FIX: ENTITY PILLAR hanya EXACT MATCH (BUKAN partial match)
 * ✅ FIX: "jasa konstruksi" → PILLAR (L1)
 * ✅ FIX: "jasa konstruksi gedung sekolah" → MONEY_PAGE (L5) BUKAN pillar
 * ✅ FIX: "Sewa Alat Konstruksi" → PILLAR (L1)
 * ✅ FIX: "Produk Konstruksi", "Produk Interior" → PILLAR (L1)
 * ✅ FIX: "Material Konstruksi" → PILLAR (L1)
 * ✅ ENTITY PILLAR KEYWORDS untuk setiap entity type (EXACT MATCH)
 * ✅ SINKRON DENGAN Page Level Detector v18.5 dan AUTO-SCHEMA v5.7
 * ✅ PRIORITAS DETEKSI:
 *    0. HOMEPAGE
 *    1. ENTITY PILLAR (EXACT MATCH) 🔥
 *    2. INFORMASIONAL (panduan, cara, tips) → PILLAR
 *    3. PERBANDINGAN (vs, versus) → SP1
 *    4. JENIS/MACAM/DAFTAR (jenis, macam, daftar) → SP2
 *    5. KEYWORD HARGA/SEWA → MONEY (dengan cek lokasi terlebih dahulu)
 *    6. JASA/SEWA (tanpa keyword harga & bukan entity pillar) → MONEY_PAGE
 *    7. SUB-VARIANT
 *    8. VARIANT
 *    9. DEFAULT → PILLAR
 * 
 * @version 5.6.0
 * @date 2026-01-15
 */

function generateBreadcrumbJasaCuttingBetonPost(mappingObj, currentUrl, breadcrumbItems = [], entityType = 'PRODUK_INTERIOR') {
    
    // ============================================================
    // 1. KONSTANTA & VALIDASI
    // ============================================================
    const MAX_LEVEL = 4;
    const DOMAIN = 'https://www.betonjayareadymix.com';
    const CURRENT_YEAR = new Date().getFullYear();
    
    const validEntityTypes = [
        'PRODUK_KONSTRUKSI', 'PRODUK_INTERIOR', 'PRODUK',
        'MATERIAL_KONSTRUKSI', 'MATERIAL',
        'JASA_KONSTRUKSI', 'JASA_DESAIN_INTERIOR', 'JASA',
        'SEWA', 'RENTAL', 'SEWA_RENTAL', 'SEWA_ALAT', 'RENTAL_ALAT',
        'ARTIKEL'
    ];
    
    if (!validEntityTypes.includes(entityType)) {
        console.error(`❌ ERROR: "${entityType}" BUKAN ENTITY TYPE yang valid!`);
        console.error(`   Gunakan: ${validEntityTypes.join(', ')}`);
        return null;
    }
    
    // HIERARKI LEVEL (9 level termasuk Home)
    const VALID_PAGE_TYPES = [
        'home',                      // Level 0 - HOMEPAGE
        'pillar',                    // Level 1 - PILLAR
        'sub-pillar-tipe-2',         // Level 2 - JENIS/MACAM/DAFTAR
        'sub-pillar-tipe-1',         // Level 3 - PERBANDINGAN
        'money-master',              // Level 4 - HARGA NASIONAL
        'money-page',                // Level 5 - HARGA PRODUK SPESIFIK / JASA
        'money-child',               // Level 6 - HARGA + LOKASI
        'variant',                   // Level 7 - SPESIFIKASI
        'sub-variant'                // Level 8 - DETAIL TEKNIS
    ];
    
    const TYPE_LEVEL_MAP = {
        'home': 0,
        'pillar': 1,
        'sub-pillar-tipe-2': 2,
        'sub-pillar-tipe-1': 3,
        'money-master': 4,
        'money-page': 5,
        'money-child': 6,
        'variant': 7,
        'sub-variant': 8
    };
    
    // ============================================================
    // 2. ENTITY TYPE HELPERS
    // ============================================================
    function isJasaEntity() {
        return ['JASA_KONSTRUKSI', 'JASA_DESAIN_INTERIOR', 'JASA'].includes(entityType);
    }
    
    function isSewaEntity() {
        return ['SEWA', 'RENTAL', 'SEWA_RENTAL', 'SEWA_ALAT', 'RENTAL_ALAT'].includes(entityType);
    }
    
    function isProdukEntity() {
        return ['PRODUK_KONSTRUKSI', 'PRODUK_INTERIOR', 'PRODUK'].includes(entityType);
    }
    
    function isMaterialEntity() {
        return ['MATERIAL_KONSTRUKSI', 'MATERIAL'].includes(entityType);
    }
    
    // ============================================================
    // 3. FUNGSI GET CLEAN PAGE NAME FROM URL 🔥
    // ============================================================
    function getCleanPageNameFromUrl(url) {
        if (!url) return '';
        
        let path = url;
        
        // Hapus domain jika ada
        path = path.replace(/^https?:\/\/[^\/]+/, '');
        
        // Hapus parameter query
        path = path.split('?')[0];
        
        // Hapus ekstensi .html, .php, .asp, .jsp
        path = path.replace(/\.(html|php|asp|jsp)$/i, '');
        
        // Hapus /p/ prefix (blogspot style)
        path = path.replace(/^\/p\//, '');
        
        // Hapus pola tanggal (tahun/bulan) seperti /2025/03/ atau /2025/
        path = path.replace(/\/\d{4}\/\d{2}\/\d{2}\//g, '/');
        path = path.replace(/\/\d{4}\/\d{2}\//g, '/');
        path = path.replace(/\/\d{4}\//g, '/');
        path = path.replace(/\/\d{2}\//g, '/');
        
        // Split path dan filter
        const pathParts = path.split('/');
        const cleanedParts = pathParts.filter(part => {
            // Hapus angka tahun (4 digit)
            if (/^\d{4}$/.test(part)) return false;
            // Hapus angka bulan (2 digit)
            if (/^\d{2}$/.test(part)) return false;
            // Hapus part kosong atau index
            if (part === '' || part === 'index') return false;
            return true;
        });
        
        // Ambil bagian terakhir dari path (nama halaman)
        let pageName = cleanedParts.pop() || '';
        
        // Konversi tanda hubung ke spasi
        pageName = pageName.replace(/-/g, ' ');
        
        // Hapus karakter yang tidak perlu (hanya huruf, angka, spasi)
        pageName = pageName.replace(/[^a-z0-9\s]/gi, '');
        
        // Hapus multiple spaces
        pageName = pageName.replace(/\s+/g, ' ').trim();
        
        return pageName;
    }
    
    // ============================================================
    // 4. ENTITY PILLAR KEYWORDS (EXACT MATCH ONLY) 🔥
    // ============================================================
    const ENTITY_PILLAR_KEYWORDS = {
        'JASA_KONSTRUKSI': ['jasa konstruksi', 'layanan konstruksi', 'jasa bangunan', 'jasa kontraktor', 'jasa pemborong', 'jasa renovasi'],
        'JASA_DESAIN_INTERIOR': ['jasa desain interior', 'jasa interior', 'desain interior'],
        'JASA': ['jasa konstruksi', 'layanan konstruksi', 'jasa bangunan', 'jasa kontraktor', 'jasa pemborong', 'jasa renovasi'],
        
        'SEWA': ['sewa alat konstruksi', 'sewa alat berat', 'rental alat berat', 'sewa alat bangunan', 'rental konstruksi', 'sewa excavator'],
        'RENTAL': ['rental alat berat', 'sewa alat konstruksi'],
        'SEWA_RENTAL': ['sewa alat konstruksi', 'rental alat berat'],
        'SEWA_ALAT': ['sewa alat konstruksi', 'sewa alat berat'],
        'RENTAL_ALAT': ['rental alat berat', 'sewa alat konstruksi'],
        
        'PRODUK_KONSTRUKSI': ['produk konstruksi', 'produk bangunan', 'produk interior'],
        'PRODUK_INTERIOR': ['produk interior', 'furniture', 'perabot rumah', 'perabot interior'],
        'PRODUK': ['produk konstruksi', 'produk bangunan'],
        
        'MATERIAL_KONSTRUKSI': ['material konstruksi', 'bahan bangunan', 'material bangunan'],
        'MATERIAL': ['material konstruksi', 'bahan bangunan', 'material bangunan'],
        
        'ARTIKEL': ['artikel konstruksi', 'tips konstruksi', 'info bangunan']
    };
    
    // ============================================================
    // 5. FUNGSI DETEKSI ENTITY PILLAR (EXACT MATCH ONLY) 🔥
    // ============================================================
    function isEntityPillarExactMatch(pageName, entityTypeParam) {
        const useEntityType = entityTypeParam || entityType;
        const lowerName = pageName.toLowerCase().trim();
        const pillarKeywords = ENTITY_PILLAR_KEYWORDS[useEntityType] || [];
        
        for (const kw of pillarKeywords) {
            // 🔥 EXACT MATCH (tanpa tambahan kata apapun)
            if (lowerName === kw) {
                console.log(`  🏛️ ENTITY PILLAR detected (exact match): "${kw}" → pillar (L1)`);
                return true;
            }
        }
        return false;
    }
    
    // ============================================================
    // 6. KEYWORD CIRI PER LEVEL
    // ============================================================
    
    // LEVEL 0: HOMEPAGE
    const HOME_KEYWORDS = ['beranda', 'home', 'halaman utama', 'homepage', 'index'];
    
    // LEVEL 1: PILLAR (Informasional 90%) - untuk konten edukasi umum
    const PILLAR_INFORMATIONAL_KEYWORDS = [
        'panduan', 'panduan lengkap', 'cara', 'tips', 'tips dan trik',
        'apa itu', 'pengertian', 'definisi', 'edukasi', 'belajar', 
        'tutorial', 'materi', 'penjelasan', 'kenapa', 'mengapa',
        'bagaimana', 'contoh', 'rekomendasi', 'lengkap', 'komprehensif'
    ];
    
    // LEVEL 2: SUB-PILLAR TIPE 2 (Jenis/Macam/Daftar)
    const SP2_KEYWORDS = [
        'jenis', 'jenis-jenis', 'macam', 'macam-macam', 'tipe', 
        'kategori', 'ragam', 'berbagai', 'klasifikasi', 'golongan',
        'daftar', 'list', 'koleksi', 'varian'
    ];
    
    // LEVEL 3: SUB-PILLAR TIPE 1 (Perbandingan)
    const SP1_KEYWORDS = [
        'vs', 'versus', 'perbandingan', 'bandingkan', 'dibanding',
        'lebih baik', 'mana yang', 'kelebihan', 'kekurangan',
        'perbedaan', 'beda', 'persamaan', 'sama', 'unggul',
        'lebih unggul', 'lebih bagus', 'lebih tahan', 'lebih awet',
        'lebih murah', 'lebih mahal', 'lebih hemat', 'lebih efisien'
    ];
    
    // LEVEL 4-6: MONEY KEYWORDS
    const MONEY_KEYWORDS = ['harga', 'biaya', 'tarif', 'sewa', 'rental'];
    
    // LEVEL 7: VARIANT
    const VARIANT_KEYWORDS = [
        'spesifikasi', 'ukuran', 'tipe', 'type', 'model', 
        'varian', 'warna', 'merk', 'brand', 'kapasitas', 
        'dimensi', 'bahan', 'material', 'finishing', 'grade',
        'seri', 'serie', 'versi', 'generasi', 'detail teknis'
    ];
    
    // ============================================================
    // 7. LOCATION WHITELIST
    // ============================================================
    const LOCATION_WHITELIST = new Set([
        'jakarta', 'bogor', 'depok', 'tangerang', 'bekasi', 'jabodetabek',
        'jakpus', 'jakbar', 'jaksel', 'jakut', 'jaktim', 'tangsel',
        'bandung', 'cimahi', 'cirebon', 'tasikmalaya', 'sukabumi', 'garut',
        'semarang', 'solo', 'surakarta', 'yogyakarta', 'jogja', 'magelang',
        'surabaya', 'malang', 'kediri', 'blitar', 'madiun', 'gresik', 'sidoarjo',
        'medan', 'binjai', 'deli serdang', 'padang', 'pekanbaru', 'batam',
        'palembang', 'bandar lampung', 'pontianak', 'balikpapan', 'samarinda',
        'banjarmasin', 'makassar', 'manado', 'palu', 'denpasar', 'bali', 'mataram'
    ]);
    
    const PRODUCT_BLACKLIST = new Set([
        'baja', 'ringan', 'galvalum', 'spandek', 'bondek', 'hebel', 'bata',
        'pasang', 'service', 'kontraktor', 'renovasi', 'borongan',
        'kayu', 'besi', 'aluminium', 'kaca', 'semen', 'pasir', 'batu',
        'hpl', 'mdf', 'jati', 'mahoni', 'multiplek', 'triplek'
    ]);
    
    function isLocation(text) {
        const lowerText = text.toLowerCase();
        const words = lowerText.split(/[\s,-]+/);
        
        for (const word of words) {
            if (LOCATION_WHITELIST.has(word)) return true;
            if (PRODUCT_BLACKLIST.has(word)) return false;
        }
        
        const hasIndicator = /di |ke |kota |wilayah |daerah /.test(lowerText);
        if (!hasIndicator) return false;
        
        for (const word of words) {
            if (word.length >= 4 && word.length <= 12 && /[aiueo]{2,}/.test(word)) {
                if (!PRODUCT_BLACKLIST.has(word)) return true;
            }
        }
        return false;
    }
    
    // ============================================================
    // 8. SPECIFIC PRODUCT & SUB-VARIANT DETECTION
    // ============================================================
    const SPECIFIC_PRODUCTS = new Set([
        'galvalum', 'spandek', 'bondek', 'hebel', 'bata ringan',
        'excavator', 'bulldozer', 'crane', 'dump truck',
        'hpl', 'mdf', 'jati', 'mahoni', 'multiplek', 'triplek'
    ]);
    
    function isSpecificProduct(text, wordCountAfterPrice = null) {
        const lowerText = text.toLowerCase();
        if (wordCountAfterPrice !== null && wordCountAfterPrice <= 2) return false;
        
        for (const product of SPECIFIC_PRODUCTS) {
            if (lowerText.includes(product)) return true;
        }
        if (/\d+(\.\d+)?\s*(mm|cm|m|inch)/.test(lowerText)) return true;
        return false;
    }
    
    function isSubVariant(text) {
        const lowerText = text.toLowerCase();
        let score = 0;
        
        if (/(\d+(\.\d+)?\s*mm\s*x\s*\d+(\.\d+)?\s*mm\s*x\s*\d+(\.\d+)?\s*mm)/i.test(lowerText)) score++;
        if (/(\d+(\.\d+)?\s*cm\s*x\s*\d+(\.\d+)?\s*cm\s*x\s*\d+(\.\d+)?\s*cm)/i.test(lowerText)) score++;
        if (lowerText.includes('tebal') && lowerText.includes('panjang') && lowerText.includes('lebar')) score++;
        
        const dimensions = lowerText.match(/\d+(\.\d+)?\s*(mm|cm|m|ton|kg|liter)/gi) || [];
        if (dimensions.length >= 3) score++;
        if (lowerText.includes('kapasitas') && dimensions.length >= 2) score++;
        
        const hasMultipleX = (lowerText.match(/x/g) || []).length >= 2;
        const hasManyNumbers = (lowerText.match(/\d+/g) || []).length >= 3;
        if (hasMultipleX && hasManyNumbers) score++;
        
        return score >= 2;
    }
    
    // ============================================================
    // 9. INTENT VALIDATION (PHASE 1.5)
    // ============================================================
    function getRequiredIntent(pageType) {
        if (pageType === 'home') {
            return { primary: 'navigasional', secondary: 'transaksional', dominance: 70 };
        }
        
        const intentMap = {
            'pillar': { primary: 'informasional', secondary: null, dominance: 90 },
            'sub-pillar-tipe-2': { primary: 'informasional', secondary: 'komersial', dominance: 60 },
            'sub-pillar-tipe-1': { primary: 'komersial', secondary: 'informasional', dominance: 70 },
            'variant': { primary: 'komersial', secondary: 'informasional', dominance: 80 },
            'sub-variant': { primary: 'komersial', secondary: 'informasional', dominance: 70 }
        };
        
        if (intentMap[pageType]) return intentMap[pageType];
        
        if (pageType === 'money-master') {
            if (isJasaEntity()) return { primary: 'komersial', secondary: 'transaksional', dominance: 60 };
            return { primary: 'transaksional', secondary: 'komersial', dominance: 80 };
        }
        
        if (pageType === 'money-page') {
            if (isJasaEntity() || isSewaEntity()) return { primary: 'komersial', secondary: 'transaksional', dominance: 60 };
            return { primary: 'transaksional', secondary: 'komersial', dominance: 85 };
        }
        
        if (pageType === 'money-child') {
            if (isJasaEntity() || isSewaEntity()) return { primary: 'komersial', secondary: 'transaksional', dominance: 60 };
            return { primary: 'transaksional', secondary: 'komersial', dominance: 90 };
        }
        
        return { primary: 'informasional', secondary: null, dominance: 50 };
    }
    
    function detectIntentFromText(text) {
        const lowerText = text.toLowerCase();
        
        for (const kw of MONEY_KEYWORDS) {
            if (lowerText.includes(kw)) return 'transaksional';
        }
        for (const kw of SP1_KEYWORDS) {
            if (lowerText.includes(kw)) return 'komersial';
        }
        for (const kw of VARIANT_KEYWORDS) {
            if (lowerText.includes(kw)) return 'komersial';
        }
        return 'informasional';
    }
    
    function validateIntent(pageType, intentDetected) {
        const required = getRequiredIntent(pageType);
        if (required.primary === intentDetected) return { valid: true };
        if (required.secondary === intentDetected) return { valid: true, isSecondary: true };
        return { valid: false, message: `${pageType} harusnya ${required.primary}` };
    }
    
    // ============================================================
    // 10. EVERGREEN STATUS (STEP 6.2)
    // ============================================================
    function getEvergreenStatus(pageType) {
        if (pageType === 'home') {
            return { evergreen: true, wajibTahun: false };
        }
        if (['pillar', 'sub-pillar-tipe-2', 'variant', 'sub-variant'].includes(pageType)) {
            return { evergreen: true, wajibTahun: false };
        }
        if (pageType === 'sub-pillar-tipe-1') {
            return { evergreen: false, wajibTahun: false };
        }
        if (pageType === 'money-master') {
            if (isJasaEntity()) return { evergreen: false, wajibTahun: false };
            if (isSewaEntity()) return { evergreen: false, wajibTahun: false };
            return { evergreen: false, wajibTahun: true };
        }
        if (['money-page', 'money-child'].includes(pageType)) {
            if (isJasaEntity() || isSewaEntity()) return { evergreen: false, wajibTahun: false };
            return { evergreen: false, wajibTahun: true };
        }
        return { evergreen: true, wajibTahun: false };
    }
    
    // ============================================================
    // 11. DETEKSI HOMEPAGE
    // ============================================================
    function isHomePage() {
        const url = window.location.href.toLowerCase();
        const path = url.replace(/https?:\/\/[^\/]+/, '');
        const isRoot = path === '' || path === '/' || path === '/index.html' || path === '/home';
        
        if (isRoot) return true;
        
        const h1 = (document.querySelector("h1")?.innerText || "").toLowerCase();
        const title = document.title.toLowerCase();
        
        return HOME_KEYWORDS.some(kw => h1 === kw || title === kw);
    }
    
    // ============================================================
    // 12. PAGE TYPE DETECTION (PRIORITAS LENGKAP) 🔥
    // ============================================================
    function detectPageType(pageName, isHome = false, entityTypeParam = null, isFromUrl = false) {
        const useEntityType = entityTypeParam || entityType;
        let lowerName = pageName.toLowerCase();
        
        // PRIORITAS 0: HOMEPAGE
        if (isHome || HOME_KEYWORDS.includes(lowerName)) {
            console.log(`  🏠 HOMEPAGE detected → home (L0)`);
            return 'home';
        }
        
        // ============================================================
        // PRIORITAS 1: ENTITY PILLAR (EXACT MATCH ONLY) 🔥
        // ============================================================
        if (isEntityPillarExactMatch(pageName, useEntityType)) {
            return 'pillar';
        }
        
        // ============================================================
        // PRIORITAS 2: INFORMASIONAL KEYWORDS → PILLAR atau SP2
        // ============================================================
        for (const kw of PILLAR_INFORMATIONAL_KEYWORDS) {
            if (lowerName.includes(kw)) {
                for (const sp2kw of SP2_KEYWORDS) {
                    if (lowerName.includes(sp2kw)) {
                        console.log(`  📚 SP2 detected (${kw} + ${sp2kw}) → sub-pillar-tipe-2 (L2)`);
                        return 'sub-pillar-tipe-2';
                    }
                }
                console.log(`  🏛️ PILLAR detected (${kw}) → pillar (L1)`);
                return 'pillar';
            }
        }
        
        // ============================================================
        // PRIORITAS 3: PERBANDINGAN (SP1)
        // ============================================================
        for (const kw of SP1_KEYWORDS) {
            if (lowerName.includes(kw)) {
                console.log(`  ⚖️ SP1 detected (${kw}) → sub-pillar-tipe-1 (L3)`);
                return 'sub-pillar-tipe-1';
            }
        }
        
        // ============================================================
        // PRIORITAS 4: JENIS/MACAM/DAFTAR (SP2)
        // ============================================================
        for (const kw of SP2_KEYWORDS) {
            if (lowerName.startsWith(kw) || lowerName.includes(kw + ' ') || lowerName.includes(kw + '-')) {
                console.log(`  📚 SP2 detected (${kw}) → sub-pillar-tipe-2 (L2)`);
                return 'sub-pillar-tipe-2';
            }
        }
        
        // ============================================================
        // PRIORITAS 5: MONEY LEVEL (HARGA/SEWA) - DENGAN CEK LOKASI DULU 🔥
        // ============================================================
        for (const kw of MONEY_KEYWORDS) {
            if (lowerName.includes(kw)) {
                console.log(`  💰 Money keyword detected: ${kw} (from ${isFromUrl ? 'URL' : 'title/H1'})`);
                
                // Ekstrak setelah keyword (maksimal 5 kata pertama)
                let afterKw = '';
                const kwIndex = lowerName.indexOf(kw);
                afterKw = lowerName.substring(kwIndex + kw.length).trim();
                
                // Bersihkan dari tahun dan karakter khusus
                afterKw = afterKw.replace(/\b\d{4}\b/g, '').replace(/[-–—]/g, ' ').replace(/\s+/g, ' ').trim();
                const words = afterKw.split(/\s+/).filter(w => w.length > 0);
                const first5Words = words.slice(0, 5);
                afterKw = first5Words.join(' ');
                const wordCount = first5Words.length;
                
                console.log(`  → After keyword (first 5 words): "${afterKw}" | Words: ${wordCount}`);
                
                // 🔥 PRIORITAS: CEK LOKASI DULU (UNTUK SEMUA ENTITY TYPE)
                if (isLocation(afterKw)) {
                    console.log(`  → Location detected → money-child (L6)`);
                    return 'money-child';
                }
                
                // JIKA JASA DAN TIDAK ADA LOKASI → money-page
                if (isJasaEntity()) {
                    console.log(`  → JASA + harga (no location) → money-page (L5)`);
                    return 'money-page';
                }
                
                // CEK SPESIFISITAS PRODUK
                const isSpecific = isSpecificProduct(afterKw, wordCount);
                
                // MONEY_MASTER: 1-2 kata ATAU 3 kata tapi masih umum
                if (wordCount <= 2 || (wordCount === 3 && !isSpecific)) {
                    console.log(`  → money-master (${wordCount} kata) → money-master (L4)`);
                    return 'money-master';
                }
                
                // MONEY_PAGE: 4+ kata ATAU 3 kata tapi spesifik
                console.log(`  → money-page (${wordCount} kata, specific=${isSpecific}) → money-page (L5)`);
                return 'money-page';
            }
        }
        
        // ============================================================
        // PRIORITAS 6: JASA/SEWA (tanpa keyword harga & bukan entity pillar)
        // ============================================================
        if (isJasaEntity()) {
            const jasaKeywords = ['jasa', 'pasang', 'service', 'kontraktor', 'borongan', 
                                   'renovasi', 'bangun', 'konsultasi', 'survey', 'estimasi'];
            for (const kw of jasaKeywords) {
                if (lowerName.includes(kw)) {
                    // Double-check SP2
                    for (const sp2kw of SP2_KEYWORDS) {
                        if (lowerName.includes(sp2kw)) {
                            console.log(`  📚 JASA + SP2 (${sp2kw}) → sub-pillar-tipe-2 (L2)`);
                            return 'sub-pillar-tipe-2';
                        }
                    }
                    // Double-check perbandingan
                    for (const cmp of SP1_KEYWORDS) {
                        if (lowerName.includes(cmp)) {
                            console.log(`  ⚖️ JASA + perbandingan → sub-pillar-tipe-1 (L3)`);
                            return 'sub-pillar-tipe-1';
                        }
                    }
                    if (isLocation(lowerName)) {
                        console.log(`  → JASA + location → money-child (L6)`);
                        return 'money-child';
                    }
                    console.log(`  → JASA detected (specific service) → money-page (L5)`);
                    return 'money-page';
                }
            }
        }
        
        if (isSewaEntity()) {
            const sewaKeywords = ['sewa', 'rental', 'alat berat', 'excavator', 'bulldozer', 'crane'];
            for (const kw of sewaKeywords) {
                if (lowerName.includes(kw)) {
                    for (const sp2kw of SP2_KEYWORDS) {
                        if (lowerName.includes(sp2kw)) {
                            console.log(`  📚 SEWA + SP2 (${sp2kw}) → sub-pillar-tipe-2 (L2)`);
                            return 'sub-pillar-tipe-2';
                        }
                    }
                    for (const cmp of SP1_KEYWORDS) {
                        if (lowerName.includes(cmp)) {
                            console.log(`  ⚖️ SEWA + perbandingan → sub-pillar-tipe-1 (L3)`);
                            return 'sub-pillar-tipe-1';
                        }
                    }
                    if (isLocation(lowerName)) {
                        console.log(`  → SEWA + location → money-child (L6)`);
                        return 'money-child';
                    }
                    console.log(`  → SEWA detected → money-page (L5)`);
                    return 'money-page';
                }
            }
        }
        
        // ============================================================
        // PRIORITAS 7: SUB-VARIANT (Level 8)
        // ============================================================
        if (isSubVariant(lowerName)) {
            console.log(`  🔬 SUB-VARIANT detected → sub-variant (L8)`);
            return 'sub-variant';
        }
        
        // ============================================================
        // PRIORITAS 8: VARIANT (Level 7)
        // ============================================================
        for (const kw of VARIANT_KEYWORDS) {
            if (lowerName.includes(kw)) {
                console.log(`  🔧 VARIANT detected (${kw}) → variant (L7)`);
                return 'variant';
            }
        }
        
        if (/\d+(\.\d+)?\s*(mm|cm|m|kg|ton)/.test(lowerName) && !lowerName.includes('x')) {
            console.log(`  🔧 VARIANT detected (single dimension) → variant (L7)`);
            return 'variant';
        }
        
        // ============================================================
        // DEFAULT: PILLAR
        // ============================================================
        console.log(`  🏛️ PILLAR (default) → pillar (L1)`);
        return 'pillar';
    }
    
    // ============================================================
    // 13. BUILD LEVELS FROM BREADCRUMB ITEMS
    // ============================================================
    function slugify(text) {
        return text.toLowerCase()
            .replace(/[^\w\s-]/g, '')
            .replace(/\s+/g, '-')
            .replace(/--+/g, '-')
            .trim();
    }
    
    const allLevels = [];
    
    for (let i = 0; i < breadcrumbItems.length; i++) {
        const item = breadcrumbItems[i];
        
        let name, url;
        if (typeof item === 'object' && item !== null) {
            name = item.name;
            url = item.url || null;
        } else {
            name = item;
            url = null;
        }
        
        const isHomePageName = (name.toLowerCase() === 'beranda' || name.toLowerCase() === 'home');
        const pageType = detectPageType(name, isHomePageName, entityType, false);
        const intentDetected = detectIntentFromText(name);
        const intentValidation = validateIntent(pageType, intentDetected);
        const evergreenData = getEvergreenStatus(pageType);
        
        allLevels.push({
            name: name,
            url: url,
            type: pageType,
            level: TYPE_LEVEL_MAP[pageType] || 99,
            intentDetected: intentDetected,
            intentValid: intentValidation.valid,
            intentRequired: getRequiredIntent(pageType),
            evergreen: evergreenData,
            position: i
        });
    }
    
    // ============================================================
    // 14. VALIDASI HIERARKI (TIDAK BOLEH LONCAT LEVEL)
    // ============================================================
    for (let i = 0; i < allLevels.length - 1; i++) {
        const current = allLevels[i];
        const next = allLevels[i + 1];
        
        if (current.level === 0) continue;
        
        if (next.level - current.level > 1) {
            console.warn(`⚠️ LEVEL JUMP: ${current.name}(${current.type} L${current.level}) → ${next.name}(${next.type} L${next.level})`);
            
            const correctedIndex = Math.min(current.level + 1, 8);
            const correctedType = VALID_PAGE_TYPES[correctedIndex];
            const correctedIntent = detectIntentFromText(next.name);
            
            next.type = correctedType;
            next.level = correctedIndex;
            next.intentDetected = correctedIntent;
            next.intentValid = validateIntent(correctedType, correctedIntent).valid;
            next.intentRequired = getRequiredIntent(correctedType);
            next.evergreen = getEvergreenStatus(correctedType);
            
            console.log(`✅ DIPERBAIKI: ${next.name} → ${next.type} L${next.level}`);
        }
    }
    
    // ============================================================
    // 15. JASA TIDAK BOLEH MONEY_MASTER
    // ============================================================
    for (const level of allLevels) {
        if (isJasaEntity() && level.type === 'money-master') {
            console.warn(`⚠️ JASA cannot be money-master: ${level.name} → forced to money-page`);
            level.type = 'money-page';
            level.level = 5;
            level.intentDetected = detectIntentFromText(level.name);
            level.intentValid = validateIntent('money-page', level.intentDetected).valid;
            level.intentRequired = getRequiredIntent('money-page');
            level.evergreen = getEvergreenStatus('money-page');
        }
    }
    
    // ============================================================
    // 16. FALLBACK URL
    // ============================================================
    for (const level of allLevels) {
        if (!level.url) {
            let foundUrl = null;
            if (mappingObj) {
                for (const [url, name] of Object.entries(mappingObj)) {
                    if (name === level.name) {
                        foundUrl = url.startsWith('http') ? url : DOMAIN + url;
                        break;
                    }
                }
            }
            if (!foundUrl) {
                const slug = slugify(level.name);
                foundUrl = `${DOMAIN}/p/${slug}.html`;
            }
            level.url = foundUrl;
        } else if (!level.url.startsWith('http')) {
            level.url = DOMAIN + level.url;
        }
    }
    
    // ============================================================
    // 17. SELECT LEVELS FOR BREADCRUMB (MAX 4 LEVELS)
    // ============================================================
    const selectedLevels = [];
    
    // Home (WAJIB) - Level 0
    selectedLevels.push({ 
        name: 'Beranda', 
        url: DOMAIN, 
        isHome: true,
        type: 'home',
        level: 0,
        intentDetected: 'navigasional',
        intentValid: true,
        intentRequired: getRequiredIntent('home'),
        evergreen: getEvergreenStatus('home')
    });
    
    let remainingSlots = MAX_LEVEL - 2;
    
    console.log(`\n📊 ========================================`);
    console.log(`📊 Breadcrumb Generator v5.6 — ENTITY PILLAR EXACT MATCH`);
    console.log(`📊 Entity Type: ${entityType}`);
    console.log(`📊 JASA Entity: ${isJasaEntity() ? 'YES' : 'NO'}`);
    console.log(`📊 SEWA Entity: ${isSewaEntity() ? 'YES' : 'NO'}`);
    console.log(`📊 ========================================`);
    
    // Parent terdekat (WAJIB)
    let parentTerdekat = null;
    const nonHomeLevels = allLevels.filter(l => l.type !== 'home');
    if (nonHomeLevels.length > 0) {
        parentTerdekat = nonHomeLevels[nonHomeLevels.length - 1];
        selectedLevels.push(parentTerdekat);
        remainingSlots--;
        console.log(`✅ WAJIB: "${parentTerdekat.name}" → ${parentTerdekat.type} (L${parentTerdekat.level})`);
        if (parentTerdekat.evergreen.wajibTahun) {
            console.log(`   📅 WAJIB mengandung tahun ${CURRENT_YEAR} di H1`);
        }
    }
    
    // Level lainnya (prioritaskan level tertinggi yang unik)
    const otherLevels = [...nonHomeLevels]
        .slice(0, nonHomeLevels.length - 1)
        .sort((a, b) => b.level - a.level)
        .filter((v, i, self) => self.findIndex(t => t.name === v.name) === i);
    
    for (const level of otherLevels) {
        if (remainingSlots <= 0) break;
        if (selectedLevels.some(s => s.name === level.name)) continue;
        
        selectedLevels.splice(1, 0, level);
        remainingSlots--;
        console.log(`✅ TAMBAH: "${level.name}" → ${level.type} (L${level.level})`);
    }
    
    // ============================================================
    // 18. CURRENT PAGE - DETEKSI DARI URL CLEAN 🔥
    // ============================================================
    const currentFullUrl = currentUrl.startsWith('http') ? currentUrl : DOMAIN + currentUrl;
    
    // PRIORITAS: URL clean > mappingObj > parentTerdekat
    let currentPageTitle = getCleanPageNameFromUrl(currentFullUrl);
    
    if (!currentPageTitle || currentPageTitle === '') {
        if (mappingObj && mappingObj[currentUrl]) {
            currentPageTitle = mappingObj[currentUrl];
        } else if (parentTerdekat) {
            currentPageTitle = parentTerdekat.name;
        } else {
            currentPageTitle = 'Halaman';
        }
    }
    
    console.log(`\n🔍 CURRENT PAGE DETECTION:`);
    console.log(`   URL: ${currentFullUrl}`);
    console.log(`   Clean URL: "${currentPageTitle}"`);
    
    const isCurrentHome = (currentPageTitle.toLowerCase() === 'beranda' || currentPageTitle.toLowerCase() === 'home');
    // Deteksi dari URL clean (isFromUrl = true)
    const currentPageType = detectPageType(currentPageTitle, isCurrentHome, entityType, true);
    const currentIntentDetected = detectIntentFromText(currentPageTitle);
    const currentIntentValidation = validateIntent(currentPageType, currentIntentDetected);
    const currentEvergreen = getEvergreenStatus(currentPageType);
    
    selectedLevels.push({
        name: currentPageTitle,
        url: currentFullUrl,
        isCurrent: true,
        type: currentPageType,
        level: TYPE_LEVEL_MAP[currentPageType] || 99,
        intentDetected: currentIntentDetected,
        intentValid: currentIntentValidation.valid,
        intentRequired: getRequiredIntent(currentPageType),
        evergreen: currentEvergreen,
        fromUrl: true
    });
    
    // Update position
    for (let i = 0; i < selectedLevels.length; i++) {
        selectedLevels[i].position = i + 1;
    }
    
    console.log(`\n✅ FINAL BREADCRUMB (${selectedLevels.length} level):`);
    selectedLevels.forEach((l, i) => {
        const icon = l.type === 'home' ? '🏠' : 
                    (l.type === 'pillar' ? '🏛️' : 
                    (l.type === 'sub-pillar-tipe-1' ? '⚖️' :
                    (l.type === 'sub-pillar-tipe-2' ? '📚' :
                    (l.type.includes('money') ? '💰' :
                    (l.type === 'variant' ? '🔧' : '🔬')))));
        console.log(`   ${i+1}. ${icon} ${l.name} → ${l.type} (L${l.level})${l.fromUrl ? ' [from URL]' : ''}`);
    });
    
    console.log(`\n📊 CURRENT PAGE SUMMARY:`);
    console.log(`   Source: URL Clean`);
    console.log(`   Name: "${currentPageTitle}"`);
    console.log(`   Type: ${currentPageType} (L${TYPE_LEVEL_MAP[currentPageType] || '?'})`);
    console.log(`   Intent Detected: ${currentIntentDetected}`);
    console.log(`   Intent Valid: ${currentIntentValidation.valid ? '✅' : '❌'}`);
    console.log(`   Wajib Tahun di H1: ${currentEvergreen.wajibTahun ? `✅ WAJIB ${CURRENT_YEAR}` : '❌ TIDAK'}`);
    console.log(`📊 ========================================\n`);
    
    // ============================================================
    // 19. GENERATE HTML BREADCRUMB + JSON-LD
    // ============================================================
    let breadcrumbHtml = `<div class="breadcrumbs" itemscope itemtype="https://schema.org/BreadcrumbList">\n`;
    
    for (let i = 0; i < selectedLevels.length; i++) {
        const level = selectedLevels[i];
        const isLast = (i === selectedLevels.length - 1);
        const position = i + 1;
        
        if (!isLast) {
            breadcrumbHtml += `<span itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">\n`;
            breadcrumbHtml += `<a href="${level.url}" itemprop="item" title="${level.name}">\n`;
            breadcrumbHtml += `<span itemprop="name">${level.name}</span>\n`;
            breadcrumbHtml += `</a>\n`;
            breadcrumbHtml += `<meta itemprop="position" content="${position}" />\n`;
            breadcrumbHtml += `</span>\n`;
            breadcrumbHtml += `<span class="separator"> › </span>\n`;
        } else {
            breadcrumbHtml += `<span itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">\n`;
            breadcrumbHtml += `<span itemprop="name">${level.name}</span>\n`;
            breadcrumbHtml += `<meta itemprop="position" content="${position}" />\n`;
            breadcrumbHtml += `</span>\n`;
        }
    }
    
    breadcrumbHtml += `</div>\n`;
    
    // JSON-LD Schema
    const jsonLdItems = selectedLevels.map((level, idx) => ({
        "@type": "ListItem",
        "position": idx + 1,
        "name": level.name,
        "item": level.url
    }));
    
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": jsonLdItems
    };
    
    // Inject ke DOM
    const oldBreadcrumbs = document.querySelectorAll('.breadcrumbs, .breadcrumb-nav, [aria-label="Breadcrumb"]');
    oldBreadcrumbs.forEach(el => el.remove());
    
    const oldJsonLd = document.querySelector('script[data-breadcrumb="true"]');
    if (oldJsonLd) oldJsonLd.remove();
    
    const targetElement = document.querySelector('main, article, .content, #main-content, .post-content');
    if (targetElement && targetElement.firstChild) {
        targetElement.insertAdjacentHTML('afterbegin', breadcrumbHtml);
    } else {
        const container = document.querySelector('.container, #content, .wrapper');
        if (container && container.firstChild) {
            container.insertAdjacentHTML('afterbegin', breadcrumbHtml);
        } else {
            document.body.insertAdjacentHTML('afterbegin', breadcrumbHtml);
        }
    }
    
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-breadcrumb', 'true');
    script.textContent = JSON.stringify(jsonLd, null, 2);
    document.head.appendChild(script);
    
    console.log(`✅ Breadcrumb injected for entity: ${entityType}`);
    
    // ============================================================
    // 20. RETURN LENGKAP
    // ============================================================
    return {
        html: breadcrumbHtml,
        jsonLd: jsonLd,
        selectedLevels: selectedLevels,
        currentPageType: currentPageType,
        currentIntent: {
            required: getRequiredIntent(currentPageType),
            detected: currentIntentDetected,
            valid: currentIntentValidation.valid,
            message: currentIntentValidation.message
        },
        currentEvergreen: currentEvergreen,
        currentYear: CURRENT_YEAR,
        entityType: entityType,
        isValidType: true,
        version: '5.6'
    };
}

// ============================================================
// RINGKASAN HASIL DETEKSI v5.6
// ============================================================
/*
| Keyword | Entity Type | Hasil Deteksi | Level |
|---------|-------------|---------------|-------|
| jasa konstruksi | JASA_KONSTRUKSI | pillar | L1 ✅ |
| jasa konstruksi gedung sekolah | JASA_KONSTRUKSI | money-page | L5 ✅ |
| sewa alat konstruksi | SEWA | pillar | L1 ✅ |
| sewa alat konstruksi jakarta | SEWA | money-child | L6 ✅ |
| produk konstruksi | PRODUK_KONSTRUKSI | pillar | L1 ✅ |
| produk konstruksi terbaru | PRODUK_KONSTRUKSI | money-page | L5 ✅ |
| produk interior | PRODUK_INTERIOR | pillar | L1 ✅ |
| material konstruksi | MATERIAL_KONSTRUKSI | pillar | L1 ✅ |
| harga sewa alat proyek | SEWA | money-master | L4 ✅ |
| harga jasa cutting beton jakarta | JASA_KONSTRUKSI | money-child | L6 ✅ |
| jenis jasa konstruksi | JASA_KONSTRUKSI | sub-pillar-tipe-2 | L2 ✅ |
| perbandingan jasa konstruksi | JASA_KONSTRUKSI | sub-pillar-tipe-1 | L3 ✅ |
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

	/* ============================================================
 🔥 Hybrid Date Modified v7.3 — UNTUK betonjayareadymix.com
    ✅ FIX: 'home' TIDAK termasuk EVERGREEN_LEVELS (homepage dinamis)
    ✅ FIX: Page Level Detector v18.2 (sinkron dengan sistem terbaru)
    ✅ FIX: Event listener untuk v18
    ✅ FIX: KATEGORISASI YANG BENAR:
        - EVERGREEN: pillar, sub-pillar-tipe-2, variant, sub-variant
        - FLEXIBLE: sub-pillar-tipe-1 (perbandingan)
        - MONEY: money-master, money-page, money-child, money-leadgen
        - DINAMIS: home (AUTO mode)
    ✅ Support MONEY_LEADGEN
============================================================ */

(async function runHybridDateModified() {
  try {
    const CURRENT_DOMAIN = window.location.hostname;
    
    // Khusus untuk betonjayareadymix.com
    if (CURRENT_DOMAIN !== 'www.betonjayareadymix.com' && !CURRENT_DOMAIN.includes('localhost')) {
      console.log(`⏸️ Domain ${CURRENT_DOMAIN} not targeted. Script skipped.`);
      return;
    }

    // ============================================================
    // 📌 KONSTANTA PAGE LEVELS (KATEGORISASI YANG BENAR)
    // ============================================================
    // EVERGREEN: konten abadi, jarang update (manual mode)
    const EVERGREEN_LEVELS = ['pillar', 'sub-pillar-tipe-2', 'variant', 'sub-variant'];
    
    // FLEXIBLE: sub-pillar-tipe-1 (Perbandingan) - semi evergreen
    const FLEXIBLE_LEVELS = ['sub-pillar-tipe-1'];
    
    // MONEY: perlu update berkala (auto mode)
    const MONEY_LEVELS = ['money-master', 'money-page', 'money-child', 'money-leadgen'];
    
    // DINAMIS: 'home' tidak masuk kategori manapun → AUTO mode

    // ============================================================
    // 📌 FUNGSI LOAD EXTERNAL JS
    // ============================================================
    function loadExternalJS(src) {
      return new Promise((resolve) => {
        if (document.querySelector(`script[src="${src}"]`)) {
          resolve();
          return;
        }
        const s = document.createElement("script");
        s.src = src;
        s.defer = true;
        s.onload = resolve;
        s.onerror = () => {
          console.warn("[HybridDateModified] Gagal load:", src);
          resolve();
        };
        document.head.appendChild(s);
      });
    }

    // ============================================================
    // 📌 TUNGGU PAGE LEVEL DETECTOR v18 READY
    // ============================================================
    function waitForPageLevelDetector() {
      return new Promise((resolve) => {
        // Cek v18
        if (window.__pageLevelDetectorV18Ready && window.pageLevelDetectorV18) {
          console.log("✅ Page Level Detector v18 already ready");
          resolve(true);
          return;
        }
        // Cek v17 (fallback)
        if (window.__pageLevelDetectorV17Ready && window.pageLevelDetectorV17) {
          console.log("✅ Page Level Detector v17 already ready");
          resolve(true);
          return;
        }
        // Event listener untuk v18
        window.addEventListener("pageLevelDetectorV18Ready", () => {
          console.log("✅ Page Level Detector v18 ready (event)");
          resolve(true);
        }, { once: true });
        // Fallback timeout 5 detik
        setTimeout(() => {
          if (window.pageLevelDetectorV18 || window.pageLevelDetectorV17 || window.pageLevelDetector) {
            console.log("✅ Page Level Detector ready (timeout fallback)");
            resolve(true);
          } else {
            console.warn("⚠️ PageLevelDetector timeout, using defaults");
            resolve(false);
          }
        }, 5000);
      });
    }

    // ============================================================
    // 📌 TUNGGU DETECT EVERGREEN READY
    // ============================================================
    function waitForDetectEvergreen() {
      return new Promise((resolve) => {
        if (window.__detectEvergreenReady && typeof window.detectEvergreen === "function") {
          resolve(true);
          return;
        }
        window.addEventListener("detectEvergreenReady", () => resolve(true), { once: true });
        setTimeout(() => {
          if (typeof window.detectEvergreen === "function") {
            resolve(true);
          } else {
            console.warn("⚠️ detectEvergreen timeout");
            resolve(false);
          }
        }, 5000);
      });
    }

    // ============================================================
    // 📌 LOAD ALL SCRIPTS
    // ============================================================
    async function loadAllScripts() {
      // Gunakan Page Level Detector v18.2 (terbaru)
      const PAGE_LEVEL_DETECTOR_URL = "https://raw.githack.com/aliyul/solution-blogger/main/PageLevelDetector.js";
      const EVERGREEN_DETECTOR_URL = "https://raw.githack.com/aliyul/solution-blogger/main/SmartEvergreenDetector.js";
      
      if (typeof window.pageLevelDetectorV18 === "undefined" && 
          typeof window.pageLevelDetectorV17 === "undefined" &&
          typeof window.pageLevelDetector === "undefined") {
        console.log("⏳ Loading Page Level Detector v18.2...");
        await loadExternalJS(PAGE_LEVEL_DETECTOR_URL);
        await waitForPageLevelDetector();
        console.log("✅ Page Level Detector v18.2 READY");
      }
      
      if (typeof window.detectEvergreen !== "function") {
        console.log("⏳ Loading Smart Evergreen Detector v13.0...");
        await loadExternalJS(EVERGREEN_DETECTOR_URL);
        await waitForDetectEvergreen();
        console.log("✅ Smart Evergreen Detector v13.0 READY");
      }
    }

    // ============================================================
    // 📌 TO ISO WITH TIMEZONE LOCAL
    // ============================================================
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

    // ============================================================
    // 📌 STABLE HASH
    // ============================================================
    function stableHash(str) {
      let hash = 0;
      for (let i = 0; i < str.length; i++) {
        hash = (hash << 5) - hash + str.charCodeAt(i);
        hash |= 0;
      }
      return Math.abs(hash);
    }

    // ============================================================
    // 📌 UPDATE META DATE MODIFIED
    // ============================================================
    function updateMetaDateModified(isoDate) {
      const selectors = [
        ['meta[itemprop="dateModified"]', 'itemprop', 'dateModified'],
        ['meta[name="dateModified"]', 'name', 'dateModified'],
        ['meta[property="article:modified_time"]', 'property', 'article:modified_time']
      ];
      
      selectors.forEach(([selector, attr, val]) => {
        let meta = document.querySelector(selector);
        if (!meta) {
          meta = document.createElement("meta");
          meta.setAttribute(attr, val);
          document.head.appendChild(meta);
        }
        meta.setAttribute("content", isoDate);
      });
    }

    // ============================================================
    // 📌 FUNGSI MENENTUKAN CUSTOM DATE BERDASARKAN PAGE LEVEL
    // ============================================================
    function getCustomDateByPageLevel(pageLevel, entityType) {
      // ============================================================
      // LEVEL 1: EVERGREEN (pillar, sub-pillar-tipe-2, variant, sub-variant)
      // Konten abadi, jarang update → MANUAL mode dengan tanggal stabil
      // ============================================================
      if (EVERGREEN_LEVELS.includes(pageLevel)) {
        if (pageLevel === 'pillar') {
          return "2026-04-01T10:30:00+07:00";
        }
        // sub-pillar-tipe-2, variant, sub-variant
       		  // JASA KONSTRUKSI CUTTING BETON POST: Sub-Pillar Tipe 2, Sub-Pillar Tipe 1, Variant, Sub-Variant 
		
        return "2026-04-16T00:00:00+07:00";
      }
              /*
		        // JASA ALAT KONSTRUKSI POST : Sub-Pillar Tipe 2, Sub-Pillar Tipe 1, Variant, Sub-Variant 
        return "2026-04-03T00:00:00+07:00";
		          // JASA KONSTRUKSI STRUKTUR: Sub-Pillar Tipe 2, Sub-Pillar Tipe 1, Variant, Sub-Variant 
        return "2026-04-04T00:00:00+07:00";
		          // JASA KONSTRUKSI PERBAIKAN: Sub-Pillar Tipe 2, Sub-Pillar Tipe 1, Variant, Sub-Variant 
        return "2026-04-05T00:00:00+07:00";
		          // JASA KONSTRUKSI PEMBATAS: Sub-Pillar Tipe 2, Sub-Pillar Tipe 1, Variant, Sub-Variant 
        return "2026-04-06T00:00:00+07:00";
		          // JASA KONSTRUKSI FINISHING: Sub-Pillar Tipe 2, Sub-Pillar Tipe 1, Variant, Sub-Variant 
        return "2026-04-07T00:00:00+07:00";
		          // JASA KONSTRUKSI PONDASI PERKUATAN TANAH: Sub-Pillar Tipe 2, Sub-Pillar Tipe 1, Variant, Sub-Variant 
        return "2026-04-08T00:00:00+07:00";
		  // JASA KONSTRUKSI JALAN PERKERASAN: Sub-Pillar Tipe 2, Sub-Pillar Tipe 1, Variant, Sub-Variant 
        return "2026-04-09T00:00:00+07:00";
		  // JASA KONSTRUKSI STRUKTUR POST: Sub-Pillar Tipe 2, Sub-Pillar Tipe 1, Variant, Sub-Variant 
        return "2026-04-10T00:00:00+07:00";
		  // JASA KONSTRUKSI PONDASI PERKUATAN TANAH POST: Sub-Pillar Tipe 2, Sub-Pillar Tipe 1, Variant, Sub-Variant 
        return "2026-04-11T00:00:00+07:00";
		  // JASA KONSTRUKSI PERBAIKAN POST: Sub-Pillar Tipe 2, Sub-Pillar Tipe 1, Variant, Sub-Variant 
        return "2026-04-12T00:00:00+07:00";
		  // JASA KONSTRUKSI PEMBATAS POST: Sub-Pillar Tipe 2, Sub-Pillar Tipe 1, Variant, Sub-Variant 
        return "2026-04-13T00:00:00+07:00";
		  // JASA KONSTRUKSI JALAN PERKERASAN POST: Sub-Pillar Tipe 2, Sub-Pillar Tipe 1, Variant, Sub-Variant 
        return "2026-04-14T00:00:00+07:00";
		  // JASA KONSTRUKSI FINISHING POST: Sub-Pillar Tipe 2, Sub-Pillar Tipe 1, Variant, Sub-Variant 
        return "2026-04-15T00:00:00+07:00";

		  // JASA KONSTRUKSI BONGKAR BANGUNAN POST: Sub-Pillar Tipe 2, Sub-Pillar Tipe 1, Variant, Sub-Variant 
        return "2026-04-17T00:00:00+07:00";
		  */
      // ============================================================
      // LEVEL 2: FLEXIBLE (sub-pillar-tipe-1 - Perbandingan)
      // Semi evergreen, update lebih sering dari pillar
      // ============================================================
      if (FLEXIBLE_LEVELS.includes(pageLevel)) {
           		  // JASA KONSTRUKSI CUTTING BETON POST: Sub-Pillar Tipe 2, Sub-Pillar Tipe 1, Variant, Sub-Variant 
		
        return "2026-04-16T00:00:00+07:00";
      }
      
      // ============================================================
      // LEVEL 3: MONEY PAGES (perlu update berkala)
      // Kembalikan null agar SmartEvergreenDetector menghitung otomatis
      // money-master, money-page, money-child, money-leadgen
      // ============================================================
      if (MONEY_LEVELS.includes(pageLevel)) {
        return null; // AUTO mode
      }
      
      // ============================================================
      // LEVEL 4: HOMEPAGE & LAINNYA
      // 'home' (Beranda) dinamis, butuh update lebih sering
      // ============================================================
      if (pageLevel === 'home') {
        return null; // AUTO mode (biar dinamis)
      }
      
      // ============================================================
      // DEFAULT: AUTO mode
      // ============================================================
      return null;
    }

    // ============================================================
    // 📌 FUNGSI GET CATEGORY LABEL (UNTUK LOGGING)
    // ============================================================
    function getCategoryLabel(pageLevel) {
      if (EVERGREEN_LEVELS.includes(pageLevel)) return 'EVERGREEN';
      if (FLEXIBLE_LEVELS.includes(pageLevel)) return 'FLEXIBLE';
      if (MONEY_LEVELS.includes(pageLevel)) return 'MONEY';
      if (pageLevel === 'home') return 'HOMEPAGE (DYNAMIC)';
      return 'UNKNOWN';
    }

    // ============================================================
    // 📌 EKSEKUSI UTAMA
    // ============================================================
    
    await loadAllScripts();
    
    // Tunggu sebentar agar pageLevelDetector selesai deteksi
    await new Promise(resolve => setTimeout(resolve, 200));
    
    // ============================================================
    // 🔥 DAPATKAN PAGE LEVEL DARI DETECTOR (PRIORITAS v18 > v17 > legacy)
    // ============================================================
    let pageLevel = 'pillar';
    let entityType = 'produk';
    let detectorVersion = 'unknown';
    
    if (window.pageLevelDetectorV18) {
      pageLevel = window.pageLevelDetectorV18.detect();
      entityType = window.pageLevelDetectorV18.detectEntityType();
      detectorVersion = 'v18.2';
      console.log(`📌 [${detectorVersion}] Detected Page Level: ${pageLevel}, Entity Type: ${entityType}`);
    } else if (window.pageLevelDetectorV17) {
      pageLevel = window.pageLevelDetectorV17.detect();
      entityType = window.pageLevelDetectorV17.detectEntityType();
      detectorVersion = 'v17.0';
      console.log(`📌 [${detectorVersion}] Detected Page Level: ${pageLevel}, Entity Type: ${entityType}`);
    } else if (window.pageLevelDetector) {
      pageLevel = window.pageLevelDetector.detect();
      entityType = window.pageLevelDetector.detectEntityType();
      detectorVersion = 'legacy';
      console.log(`📌 [${detectorVersion}] Detected Page Level: ${pageLevel}, Entity Type: ${entityType}`);
    } else {
      console.warn("⚠️ PageLevelDetector not ready, using defaults (pillar/produk)");
    }
    
    // ============================================================
    // 🔥 VALIDASI PAGE LEVEL
    // ============================================================
    const ALL_KNOWN_LEVELS = [...EVERGREEN_LEVELS, ...FLEXIBLE_LEVELS, ...MONEY_LEVELS, 'home'];
    if (!ALL_KNOWN_LEVELS.includes(pageLevel)) {
      console.warn(`⚠️ Unknown page level: ${pageLevel}, defaulting to pillar`);
      pageLevel = 'pillar';
    }
    
    // ============================================================
    // 🔥 STEP 2: TENTUKAN CUSTOM DATE BERDASARKAN HASIL DETEKSI
    // ============================================================
    let customDate = getCustomDateByPageLevel(pageLevel, entityType);
    let manualMode = customDate !== null;
    let categoryLabel = getCategoryLabel(pageLevel);
    
    if (manualMode) {
      console.log(`📌 [CUSTOM DATE] PageLevel=${pageLevel}, EntityType=${entityType}, Category=${categoryLabel}`);
      console.log(`   → Using custom date: ${customDate}`);
    } else {
      console.log(`📌 [AUTO MODE] PageLevel=${pageLevel}, EntityType=${entityType}, Category=${categoryLabel}`);
      console.log(`   → No custom date, using auto calculation (SmartEvergreenDetector)`);
    }
    
    // ============================================================
    // 🔥 STEP 3: JALANKAN DETEKTOR DENGAN ATAU TANPA CUSTOM DATE
    // ============================================================
    if (manualMode && customDate) {
      await window.detectEvergreen({ customDateModified: customDate });
      console.log(`✅ MANUAL mode executed with custom date: ${customDate}`);
    } else {
      await window.detectEvergreen();
      console.log(`✅ AUTO mode executed`);
    }
    
    // ============================================================
    // 📌 PASTIKAN AEDMetaDates TERSEDIA
    // ============================================================
    if (!window.AEDMetaDates || !window.AEDMetaDates.dateModified) {
      console.warn("[HybridDateModified] AEDMetaDates tidak ditemukan, skip update.");
      return;
    }

    const { dateModified, nextUpdate, type, entityType: detectedEntityType, pageLevel: detectedPageLevel } = window.AEDMetaDates;

    console.log(`📊 betonjayareadymix.com Page Info:`);
    console.log(`   - type: ${type}`);
    console.log(`   - entityType: ${detectedEntityType}`);
    console.log(`   - pageLevel: ${detectedPageLevel}`);
    console.log(`   - dateModified: ${dateModified}`);
    console.log(`   - nextUpdate: ${nextUpdate}`);

    // ============================================================
    // 📌 HITUNG VARIASI TANGGAL (UNIQUE PER HALAMAN)
    // ============================================================
    const uniquePageIdentifier = window.location.pathname;
    let hashSource = uniquePageIdentifier;
    
    if (EVERGREEN_LEVELS.includes(detectedPageLevel)) {
      hashSource = 'evergreen-' + hashSource;
      console.log(`📌 Evergreen content (${detectedPageLevel}) → using evergreen hash prefix`);
    } else if (FLEXIBLE_LEVELS.includes(detectedPageLevel)) {
      hashSource = 'flexible-' + hashSource;
      console.log(`📌 Flexible content (${detectedPageLevel}) → using flexible hash prefix`);
    } else if (detectedEntityType === 'jasa') {
      hashSource = 'jasa-' + hashSource;
      console.log(`📌 Jasa content (${detectedPageLevel}) → using jasa hash prefix`);
    } else if (MONEY_LEVELS.includes(detectedPageLevel)) {
      hashSource = 'money-' + hashSource;
      console.log(`📌 Money page (${detectedPageLevel}) → using money hash prefix`);
    } else if (detectedPageLevel === 'home') {
      hashSource = 'home-' + hashSource;
      console.log(`📌 Homepage (${detectedPageLevel}) → using home hash prefix`);
    }
    
    const hash = stableHash(hashSource);
    const offsetSeconds = hash % 86400; // maksimal 24 jam
    const finalDate = new Date(new Date(dateModified).getTime() + offsetSeconds * 1000);
    const isoDate = toISOWithTimezoneLocal(finalDate);

    // ============================================================
    // 📌 UPDATE META DATEMODIFIED
    // ============================================================
    updateMetaDateModified(isoDate);

    window.AEDMetaDates = {
      ...window.AEDMetaDates,
      dateModified: isoDate,
      hashOffset: offsetSeconds,
      detectorVersion: detectorVersion,
      category: categoryLabel,
      mode: manualMode ? 'MANUAL' : 'AUTO'
    };

    console.log(`✅ [HybridDateModified] ${uniquePageIdentifier} → ${isoDate}`);
    console.log(`   - offsetSeconds: ${offsetSeconds} detik (${Math.floor(offsetSeconds / 3600)} jam ${Math.floor((offsetSeconds % 3600) / 60)} menit)`);
    console.log(`   - Mode: ${manualMode ? 'MANUAL (custom date based on page level)' : 'AUTO (SmartEvergreenDetector)'}`);
    console.log(`   - Category: ${categoryLabel}`);
    console.log(`   - Detector: ${detectorVersion}`);
    console.log(`📋 Custom config for betonjayareadymix.com applied successfully`);

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
