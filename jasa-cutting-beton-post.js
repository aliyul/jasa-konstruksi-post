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
// ============================================================
// FUNGSI GENERATE BREADCRUMB - VERSI FINAL
// UNTUK SEMUA PILLAR (PRODUK, MATERIAL, JASA, INTERIOR, DLL)
// MAX_LEVEL = 4 (TERMASUK HOME)
// SKIP LEVEL BEKERJA UNTUK PILLAR & SUB2
// ============================================================

function generateBreadcrumbForMapping(mappingObj, currentUrl, breadcrumbItems = [], pillarType = 'JASA_KONSTRUKSI') {
    
    const MAX_LEVEL = 4;
    const DOMAIN = 'https://www.betonjayareadymix.com';
    
    // ============================================================
    // 1. VALIDASI PILLAR TYPE
    // ============================================================
    const validPillarTypes = ['PRODUK_KONSTRUKSI', 'MATERIAL_KONSTRUKSI', 'JASA_KONSTRUKSI', 
                               'PRODUK_INTERIOR', 'JASA_DESAIN_INTERIOR'];
    if (!validPillarTypes.includes(pillarType)) {
        console.error(`❌ ERROR: "${pillarType}" BUKAN PILLAR TYPE yang valid!`);
        console.error(`   Gunakan salah satu dari: ${validPillarTypes.join(', ')}`);
        return null;
    }
    
    const pageTitle = mappingObj[currentUrl];
    if (!pageTitle) {
        console.error(`❌ ERROR: URL "${currentUrl}" tidak ditemukan di mapping`);
        return null;
    }
    
    // ============================================================
    // 2. KUMPULKAN SEMUA NAMA HALAMAN DARI MAPPING (UNTUK REFERENSI)
    // ============================================================
    const knownPages = [];
    for (const [url, name] of Object.entries(mappingObj)) {
        if (name && typeof name === 'string') {
            knownPages.push(name.toLowerCase());
        }
    }
    
    // ============================================================
    // 3. DETEKSI TYPE OTOMATIS
    // ============================================================
    function detectPageType(pageName, position, totalLevels) {
        const lowerName = pageName.toLowerCase();
        const parts = pageName.split(' ');
        const lastWord = parts[parts.length - 1].toLowerCase();
        const firstWord = parts[0].toLowerCase();
        const wordCount = parts.length;
        
        // PILLAR: posisi pertama
        if (position === 0) return 'PILLAR';
        
        // MONEY_LEADGEN
        if (lowerName.startsWith('konsultasi')) return 'MONEY_LEADGEN';
        
        // MONEY_MASTER (deteksi transaksi)
        const transactionWords = ['harga', 'sewa', 'jual', 'beli', 'pesan', 'booking', 'order', 'rental',
            'biaya', 'tarif', 'rate', 'cost', 'price', 'fee', 'charge', 'promo', 'diskon', 'obral',
            'gratis', 'voucher', 'cashback', 'cicilan', 'kredit', 'dp', 'angsuran', 'quote', 'penawaran', 'estimasi'];
        
        for (const word of transactionWords) {
            if (lowerName.startsWith(word + ' ') || lowerName.includes(' ' + word + ' ') || lowerName.endsWith(' ' + word)) {
                return 'MONEY_MASTER';
            }
        }
        
        // SUB1 (deteksi panduan)
        const guideWords = ['panduan', 'cara', 'tips', 'tutorial', 'langkah', 'petunjuk', 'pedoman', 'instruksi',
            'guide', 'how to', 'step by step', 'strategi', 'metode', 'teknik', 'rahasia', 'kunci sukses',
            'wajib tahu', 'perlu diketahui', 'edukasi', 'belajar', 'mempelajari', 'pemahaman', 'solusi', 'jawaban'];
        
        for (const word of guideWords) {
            if (lowerName.startsWith(word + ' ') || lowerName.includes(' ' + word + ' ')) {
                return 'SUB1';
            }
        }
        
        // VARIANT (deteksi angka atau kata kunci)
        if (/\d/.test(lowerName)) return 'VARIANT';
        
        const variantWords = ['tipe', 'type', 'ukuran', 'model', 'varian', 'warna', 'bentuk', 'seri', 'versi',
            'grade', 'kelas', 'standar', 'jenis', 'macam', 'ragam', 'kategori', 'spesifikasi', 'detail', 'rinci',
            'kapasitas', 'volume', 'berat', 'panjang', 'lebar', 'tinggi', 'tebal', 'diameter', 'radius', 'luas',
            'bahan', 'material', 'komposisi', 'kualitas', 'mutu', 'kode', 'plus', 'minus', 'kelebihan', 'kekurangan',
            'baru', 'lama', 'bekas', 'second', 'original', 'kw', 'putih', 'hitam', 'merah', 'biru', 'hijau',
            'kecil', 'besar', 'sedang', 'mini', 'maxi', 'jumbo', 'extra', 'super'];
        
        for (const word of variantWords) {
            if (lowerName.includes(' ' + word + ' ') || lowerName.endsWith(' ' + word)) {
                return 'VARIANT';
            }
        }
        
        // MONEY_CHILD (deteksi lokasi)
        function isLikelyLocation(word) {
            if (word.length < 3 || word.length > 25) return false;
            if (!/^[a-zA-Z]+$/.test(word)) return false;
            if (word === firstWord) return false;
            
            const notLocationWords = ['mini', 'maxi', 'super', 'extra', 'plus', 'pro', 'max', 'ultra',
                'baru', 'lama', 'bekas', 'second', 'original', 'kw', 'grade', 'murah', 'mahal', 'hemat',
                'premium', 'standar', 'ekonomis', 'kecil', 'besar', 'sedang', 'panjang', 'pendek', 'tebal', 'tipis',
                'putih', 'hitam', 'merah', 'biru', 'hijau', 'kuning', 'ungu', 'abu', 'coklat'];
            if (notLocationWords.includes(word)) return false;
            
            const isKnownProduct = knownPages.some(known => known === word || (known.includes(word) && word.length > 3));
            if (isKnownProduct) return false;
            
            if (word.length >= 4 && word.length <= 12) return true;
            if (/[aiueo]$/.test(word) && word.length >= 4) return true;
            
            const locationPatterns = ['ang', 'ung', 'eng', 'ong', 'an', 'in', 'un', 'en', 
                'ap', 'ip', 'op', 'ar', 'ur', 'er', 'or', 'karta', 'jaya', 'pura', 'sari', 'mulya', 'agung', 'asih', 'ayem'];
            for (const pattern of locationPatterns) {
                if (word.endsWith(pattern) && word.length >= 4) return true;
            }
            
            if (word.length >= 5 && /[aiueo].*[aiueo]/.test(word)) return true;
            return false;
        }
        
        if (wordCount >= 2 && isLikelyLocation(lastWord)) return 'MONEY_CHILD';
        
        return 'SUB2';
    }
    
    // ============================================================
    // 4. FUNGSI BANTUAN
    // ============================================================
    function generateIdFromName(name) {
        return name.replace(/[^a-zA-Z0-9]/g, '') + 'Post';
    }
    
    // ============================================================
    // 5. BANGUN LEVELS DARI ARRAY OBJECT (NAMA + URL)
    // ============================================================
    const allLevels = [];
    for (let i = 0; i < breadcrumbItems.length; i++) {
        const item = breadcrumbItems[i];
        const name = typeof item === 'string' ? item : item.name;
        const url = typeof item === 'string' ? null : item.url;
        
        allLevels.push({
            name: name,
            url: url,
            type: detectPageType(name, i, breadcrumbItems.length),
            id: generateIdFromName(name),
            position: i
        });
    }
    
    // ============================================================
    // 6. VALIDASI & FALLBACK URL
    // ============================================================
    for (const level of allLevels) {
        if (!level.url) {
            let foundUrl = null;
            for (const [url, name] of Object.entries(mappingObj)) {
                if (name === level.name) {
                    foundUrl = url.startsWith('http') ? url : DOMAIN + url;
                    break;
                }
            }
            if (!foundUrl) {
                const slug = level.name.toLowerCase().replace(/ /g, '-');
                foundUrl = `${DOMAIN}/p/${slug}.html`;
            }
            level.url = foundUrl;
        } else if (!level.url.startsWith('http')) {
            level.url = DOMAIN + level.url;
        }
    }
    
    // ============================================================
    // 7. TENTUKAN LEVEL YANG AKAN DITAMPILKAN (MAX 4 LEVEL)
    // ============================================================
    const selectedLevels = [];
    
    // Level 1: Home (WAJIB)
    selectedLevels.push({ name: 'BJR', url: DOMAIN, isHome: true });
    
    // Hitung slot tersisa (MAX_LEVEL - 1 untuk home - 1 untuk halaman saat ini)
    let remainingSlots = MAX_LEVEL - 2;
    
    console.log(`📊 ========================================`);
    console.log(`📊 Breadcrumb Generator - SEO Tercanggih`);
    console.log(`📊 Max level: ${MAX_LEVEL}, slot untuk parent: ${remainingSlots}`);
    console.log(`📊 Breadcrumb items: ${allLevels.map(l => l.name).join(' → ')}`);
    console.log(`📊 ========================================`);
    
    // Parent terdekat (level terakhir) - WAJIB tampil
    let parentTerdekat = null;
    if (allLevels.length > 0) {
        parentTerdekat = allLevels[allLevels.length - 1];
        selectedLevels.push(parentTerdekat);
        remainingSlots--;
        console.log(`✅ WAJIB: "${parentTerdekat.name}" (${parentTerdekat.type}) - sisa slot: ${remainingSlots}`);
    }
    
    // Level lainnya (dari awal sampai sebelum parent terdekat)
    const otherLevels = [...allLevels.slice(0, allLevels.length - 1)].reverse();
    const canSkipTypes = ['PILLAR', 'SUB2'];
    
    for (const level of otherLevels) {
        if (remainingSlots <= 0) {
            console.log(`📌 SKIP: "${level.name}" (${level.type}) - tidak ada slot tersisa`);
            continue;
        }
        
        if (canSkipTypes.includes(level.type)) {
            console.log(`📌 SKIP: "${level.name}" (${level.type}) - type boleh skip`);
            continue;
        }
        
        selectedLevels.splice(1, 0, level);
        remainingSlots--;
        console.log(`✅ TAMBAH: "${level.name}" (${level.type}) - sisa slot: ${remainingSlots}`);
    }
    
    // Halaman saat ini (WAJIB)
    const currentFullUrl = currentUrl.startsWith('http') ? currentUrl : DOMAIN + currentUrl;
    selectedLevels.push({
        name: pageTitle,
        url: currentFullUrl,
        isCurrent: true
    });
    
    // Update position
    for (let i = 0; i < selectedLevels.length; i++) {
        selectedLevels[i].position = i + 1;
    }
    
    console.log(`✅ FINAL (${selectedLevels.length} level): ${selectedLevels.map(l => l.name).join(' → ')}`);
    
    // ============================================================
    // 8. GENERATE HTML BREADCRUMB
    // ============================================================
    let breadcrumbHtml = `<div class="breadcrumbs">\n<span>\n`;
    breadcrumbHtml += `<a href="${DOMAIN}/" itemprop="item" title="Beton Jaya Readymix">`;
    breadcrumbHtml += `<meta content="1" itemprop="position">`;
    breadcrumbHtml += `<span itemprop="name">BJR</span></a>\n`;
    breadcrumbHtml += `</span>\n &nbsp;›&nbsp;\n\n`;
    breadcrumbHtml += `<span>\n<div id="breadcrumbContainer" style="display: inline;">\n`;
    
    for (let i = 1; i < selectedLevels.length; i++) {
        const level = selectedLevels[i];
        const isLast = (i === selectedLevels.length - 1);
        
        if (!isLast) {
            breadcrumbHtml += `<a href="${level.url}" id="${level.id}" title="${level.name.toUpperCase()}" style="visibility: visible;">`;
            breadcrumbHtml += `<span id="${level.id}Name">${level.name}</span>&nbsp;›&nbsp;\n`;
            breadcrumbHtml += `</a>\n`;
        } else {
            breadcrumbHtml += `<span id="pageNameBreadcrumb">${level.name}</span>\n`;
        }
    }
    
    breadcrumbHtml += `</div>\n</span>\n</div>`;
    
    // ============================================================
    // 9. GENERATE JSON-LD SCHEMA
    // ============================================================
    const jsonLdItems = [];
    jsonLdItems.push({ "@type": "ListItem", "position": 1, "name": "Beton Jaya Readymix", "item": DOMAIN });
    
    for (let i = 1; i < selectedLevels.length; i++) {
        jsonLdItems.push({
            "@type": "ListItem",
            "position": i + 1,
            "name": selectedLevels[i].name,
            "item": selectedLevels[i].url
        });
    }
    
    // ============================================================
    // 10. HAPUS BREADCRUMB LAMA & INJECT YANG BARU
    // ============================================================
    // Hapus semua breadcrumb lama (manual)
    const oldBreadcrumbs = document.querySelectorAll('.breadcrumbs, .breadcrumb-nav, [aria-label="Breadcrumb"]');
    oldBreadcrumbs.forEach(el => el.remove());
    
    // Hapus JSON-LD lama
    const oldJsonLd = document.querySelector('script[data-breadcrumb="true"]');
    if (oldJsonLd) oldJsonLd.remove();
    
    // Inject HTML breadcrumb baru
    const mainContent = document.querySelector('main, article, .content, #main-content, .post-content');
    if (mainContent?.firstChild) {
        mainContent.insertAdjacentHTML('afterbegin', breadcrumbHtml);
    } else {
        document.body.insertAdjacentHTML('afterbegin', breadcrumbHtml);
    }
    
    // Inject JSON-LD baru
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-breadcrumb', 'true');
    script.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": jsonLdItems
    });
    document.head.appendChild(script);
    
    console.log(`✅ Breadcrumb injected ke DOM`);
    return breadcrumbHtml;
}

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
