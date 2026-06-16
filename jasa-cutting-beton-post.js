// ============================================================
// JASA CUTTING BETON - BLOG POST
// ============================================================
// 🧠 SEO NOTE: Cluster ini berisi 1 artikel informasional + 8 money page harga per lokasi.
// Parent: Jasa Cutting Beton (/p/jasa-cutting-beton.html)
// ============================================================

const urlMappingJasaCuttingBetonFromMoneyMasterMoneyPage = {
  // ============================================================
  // [SUB1] - PANDUAN TEKNIS (INFORMASIONAL / EDUKASI)
  // 🧠 TYPE: SUB1 (WAJIB tampil, bridge ke money page)
  // 🧠 INTENT: Informational + Commercial Investigation
  // Breadcrumb: Home > Jasa Konstruksi > Jasa Cutting Beton > Jasa Pemotongan Jalan Beton (4 level)
  // ============================================================
  "https://www.betonjayareadymix.com/2019/06/jasa-pemotongan-jalan-beton.html": "Jasa Pemotongan Jalan Beton", 
  
  // ============================================================
  // [MONEY_MASTER] - MASTER HARGA (TRANSACTIONAL)
  // 🧠 TYPE: MONEY_MASTER (WAJIB tampil)
  // 🧠 INTENT: Transactional (user mencari harga nasional/general)
  // Breadcrumb: Home > Jasa Konstruksi > Harga Jasa Cutting Beton (3 level - skip "Jasa Cutting Beton")
  // ============================================================
  "https://www.betonjayareadymix.com/2019/06/harga-jasa-cutting-beton.html": "Harga Jasa Cutting Beton", 
  "https://www.betonjayareadymix.com/2019/06/jasa-cutting-beton-lantai.html": "Jasa Cutting Beton Lantai",
"https://www.betonjayareadymix.com/2019/06/jasa-cutting-beton-dinding.html": "Jasa Cutting Beton Dinding",
"https://www.betonjayareadymix.com/2019/06/jasa-cutting-beton-jalan.html": "Jasa Cutting Beton Jalan",
"https://www.betonjayareadymix.com/2019/06/jasa-cutting-beton-bertulang.html": "Jasa Cutting Beton Bertulang"

};
const urlMappingHargaJasaCuttingBetonFromMoneyPageMoneyPage1 = {
 // ============================================================
  // [MONEY_MASTER] - HARGA CUTTING EXPANSION JOINT (TRANSACTIONAL)
  // 🧠 TYPE: MONEY_MASTER (WAJIB tampil)
  // 🧠 INTENT: Transactional (spesifik layanan expansion joint)
  // Breadcrumb: Home > Jasa Konstruksi > Harga Jasa Cutting Expansion Joint Beton (3 level)
  // ============================================================
  "https://www.betonjayareadymix.com/2019/06/harga-jasa-cutting-expansion-joint.html": "Harga Jasa Cutting Expansion Joint Beton",
	"https://www.betonjayareadymix.com/2019/06/harga-jasa-cutting-beton-per-meter.html": "Harga Jasa Cutting Beton Per Meter"
};
const urlMappingHargaJasaCuttingBetonFromMoneyPageMoneyChild = {
  
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
  "https://www.betonjayareadymix.com/2019/06/harga-jasa-cutting-beton-karawang.html": "Harga Jasa Cutting Beton Karawang"  // TYPE: MONEY_CHILD
  
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

const urlMappingJasaSondirTanahFromMoneyMaster1MoneyPage = {
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

const urlMappingJasaCptTanahFromMoneyMaster1MoneyPage = {
  // ============================================================
  // [MONEY_MASTER] - HALAMAN UTAMA CPT
  // 🔴 PRIORITAS HIGH - HARUS DIBUAT
  // ============================================================
  // "https://www.betonjayareadymix.com/2019/09/jasa-cpt-uji-tanah.html": "Jasa CPT Uji Tanah",  // TYPE: MONEY_MASTER
  
  // ============================================================
  // [MONEY_CHILD] - CPT PER JENIS PROYEK
  // 🟡 PRIORITAS MEDIUM - DISARANKAN DIBUAT
  // ============================================================
  // "https://www.betonjayareadymix.com/2019/09/jasa-cpt-gedung-bertingkat.html": "Jasa CPT Gedung Bertingkat",  
 // Nama diubah menjadi 3 kata setelah "Jasa" (total 4 kata) agar menjadi MP
    "https://www.betonjayareadymix.com/2019/09/jasa-cpt-perumahan-baru.html": "Jasa CPT Perumahan Baru",  // + Baru
    "https://www.betonjayareadymix.com/2019/09/jasa-cpt-jalan-tol-baru.html": "Jasa CPT Jalan Tol Baru",  // + Baru
    "https://www.betonjayareadymix.com/2019/09/jasa-cpt-infrastruktur-kritis.html": "Jasa CPT Infrastruktur Kritis",  // + Kritis
    "https://www.betonjayareadymix.com/2019/09/jasa-cpt-jembatan-beton.html": "Jasa CPT Jembatan Beton",  // + Beton
    "https://www.betonjayareadymix.com/2019/09/jasa-cpt-bandara-internasional.html": "Jasa CPT Bandara Internasional"  // + 
  
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

const urlMappingJasaBoringTanahFromMoneyMaster1MoneyPage = {
  // ============================================================
  // [MONEY_MASTER] - HALAMAN UTAMA BORING TANAH
  // 🔴 PRIORITAS HIGH - HARUS DIBUAT
  // ============================================================
  // "https://www.betonjayareadymix.com/2019/09/jasa-boring-tanah.html": "Jasa Boring Tanah",  // TYPE: MONEY_MASTER
  
  // ============================================================
  // [MONEY_CHILD] - BORING TANAH PER JENIS PROYEK
  // 🟡 PRIORITAS MEDIUM - DISARANKAN DIBUAT
  // ============================================================
   "https://www.betonjayareadymix.com/2019/09/jasa-boring-tanah-rumah-tinggal.html": "Jasa Boring Tanah Rumah Tinggal", 
  "https://www.betonjayareadymix.com/2019/09/jasa-boring-tanah-gedung.html": "Jasa Boring Tanah Gedung", 
  "https://www.betonjayareadymix.com/2019/09/jasa-boring-tanah-jembatan.html": "Jasa Boring Tanah Jembatan",  
  "https://www.betonjayareadymix.com/2019/09/jasa-boring-tanah-jalan-tol.html": "Jasa Boring Tanah Jalan Tol",  
   "https://www.betonjayareadymix.com/2019/09/jasa-boring-tanah-perumahan.html": "Jasa Boring Tanah Perumahan" 
  
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

const urlMappingJasaLabTanahFromMoneyMaster1MoneyPage = {
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

const urlMappingJasaUjiPenetrasiFromMoneyMaster1MoneyPage = {
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

const urlMappingJasaPemotonganBukitLahanFromMoneyPageMoneyPage1 = {
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

const urlMappingJasaPengupasanLahanTanahFromMoneyPageMoneyPage1 = {
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

const urlMappingJasaTebangPohonPematanganLahanFromMoneyPageMoneyPage1 = {
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

const urlMappingJasaPerataandanGradingLahanFromMoneyPageMoneyPage1  = {
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

const urlMappingJasaPekerjaanElevasiLahanFromMoneyPageMoneyPage1 = {
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

const urlMappingJasaPembentukanBadanLahanFromMoneyPageMoneyPage1 = {
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

const urlMappingJasaCutandFillLahanFromMoneyPageMoneyPage1 = {
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

const urlMappingJasaUruganTanahLahanFromMoneyPageMoneyPage1 = {
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

const urlMappingJasaPemadatanTanahLahanFromMoneyPageMoneyPage1  = {
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

const urlMappingJasaPembersihanLahanPematanganFromMoneyPageMoneyPage1 = {
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

const urlMappingJasaBaseCourseLahanFromMoneyPageMoneyPage1  = {
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

const urlMappingJasaStabilisasiTanahLahanFromMoneyPageMoneyPage1 = {
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

const urlMappingJasaPemasanganDrainaseLahanFromMoneyPageMoneyPage1 = {
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

const urlMappingJasaPemasanganGeotekstilLahanFromMoneyPageMoneyPage1 = {
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

const urlMappingJasaPersiapanPondasiLahanFromMoneyPageMoneyPage1 = {
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
 * ============================================================
 * generateBreadcrumbJasaKonstruksi v9.3
 * SMART PARENT SELECTION - RELEVANCE BASED PRIORITY
 * ============================================================
 *
 * ✅ UPDATE v9.3
 * ------------------------------------------------------------
 * - FIX: Parent terdekat dipilih berdasarkan RELEVANSI konten
 * - FIX: Parent dengan kata yang sama dengan current page diprioritaskan
 * - FIX: Keyword spesifik (kanstin, pembatas, dll) mendapat bonus
 * - FIX: Parent dengan level sama, yang lebih relevan dipilih
 * - ENHANCED: findNearestParentsByHierarchy() dengan scoring system
 * - ENHANCED: Logging detail untuk debugging relevansi
 *
 * ✅ UPDATE v9.2
 * ------------------------------------------------------------
 * - FIX: "metode" tidak lagi terdeteksi sebagai "pillar"
 * - FIX: findNearestParentsByHierarchy() mengambil SEMUA parent
 *
 * ✅ UPDATE v9.1
 * ------------------------------------------------------------
 * - FIX: getCleanPageNameFromUrl() menangani /2021/04/ dan /p/
 *
 * ✅ UPDATE v9.0
 * ------------------------------------------------------------
 * - FIX: Ambil SEMUA parent dengan level tertinggi
 *
 * ============================================================
 * @version 9.3.0
 * @date 2026-06-16
 * ============================================================
 */

function generateBreadcrumbJasaCuttingBetonPost(
    mappingObj,
    currentUrl,
    breadcrumbItems = [],
    entityType = 'PRODUK_KONSTRUKSI'
) {

    // ============================================================
    // 1. GLOBAL CONFIG
    // ============================================================

    const CONFIG = {
        DOMAIN: 'https://www.betonjayareadymix.com',
        DEBUG: true,
        CURRENT_YEAR: new Date().getFullYear()
    };

    // ============================================================
    // 2. LOGGER
    // ============================================================

    function log(message, type = 'INFO') {
        if (!CONFIG.DEBUG && type === 'INFO') return;
        const icons = { 
            INFO: '📘', 
            SUCCESS: '✅', 
            WARN: '⚠️', 
            ERROR: '❌', 
            DEBUG: '🔍', 
            VARIANT: '🔬', 
            PARENT: '👪', 
            URL: '🔗',
            SCORE: '🎯'
        };
        console.log(`${icons[type] || '📘'} [Breadcrumb v9.3] ${message}`);
    }

    // ============================================================
    // 3. ENTITY NORMALIZATION
    // ============================================================

    const ENTITY_TYPE_MAP = {
        'JASA': 'JASA_KONSTRUKSI',
        'JASA_KONSTRUKSI': 'JASA_KONSTRUKSI',
        'JASA_INTERIOR': 'JASA_KONSTRUKSI',
        'JASA_DESAIN_INTERIOR': 'JASA_KONSTRUKSI',
        'SEWA': 'SEWA_ALAT_KONSTRUKSI',
        'RENTAL': 'SEWA_ALAT_KONSTRUKSI',
        'SEWA_ALAT': 'SEWA_ALAT_KONSTRUKSI',
        'RENTAL_ALAT': 'SEWA_ALAT_KONSTRUKSI',
        'SEWA_RENTAL': 'SEWA_ALAT_KONSTRUKSI',
        'SEWA_ALAT_KONSTRUKSI': 'SEWA_ALAT_KONSTRUKSI',
        'PRODUK': 'PRODUK_KONSTRUKSI',
        'PRODUK_KONSTRUKSI': 'PRODUK_KONSTRUKSI',
        'PRODUK_INTERIOR': 'PRODUK_INTERIOR',
        'MATERIAL': 'MATERIAL_KONSTRUKSI',
        'MATERIAL_KONSTRUKSI': 'MATERIAL_KONSTRUKSI',
        'ARTIKEL': 'ARTIKEL'
    };

    entityType = ENTITY_TYPE_MAP[entityType] || entityType;

    // ============================================================
    // 4. VALID ENTITY TYPES
    // ============================================================

    const VALID_ENTITY_TYPES = [
        'JASA_KONSTRUKSI',
        'SEWA_ALAT_KONSTRUKSI',
        'PRODUK_KONSTRUKSI',
        'PRODUK_INTERIOR',
        'MATERIAL_KONSTRUKSI',
        'ARTIKEL'
    ];

    if (!VALID_ENTITY_TYPES.includes(entityType)) {
        console.error(`❌ INVALID ENTITY TYPE: ${entityType}`);
        return null;
    }

    // ============================================================
    // 5. TYPE LEVEL MAP & PRIORITAS
    // ============================================================

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

    const HIERARCHY_ORDER = [
        'home', 'pillar', 'sub-pillar-tipe-2', 'sub-pillar-tipe-1',
        'money-master', 'money-page', 'money-child', 'variant', 'sub-variant'
    ];

    // ============================================================
    // 6. ROOT ENTITY PILLARS
    // ============================================================

    const ROOT_ENTITY_PILLARS = {
        'JASA_KONSTRUKSI': ['jasa konstruksi'],
        'SEWA_ALAT_KONSTRUKSI': ['sewa alat konstruksi'],
        'PRODUK_KONSTRUKSI': ['produk konstruksi'],
        'PRODUK_INTERIOR': ['produk interior'],
        'MATERIAL_KONSTRUKSI': ['material konstruksi'],
        'ARTIKEL': ['artikel konstruksi']
    };

    // ============================================================
    // 7. HELPERS
    // ============================================================

    function isJasaEntity() { return entityType === 'JASA_KONSTRUKSI'; }
    function isSewaEntity() { return entityType === 'SEWA_ALAT_KONSTRUKSI'; }
    function isProdukEntity() { return entityType === 'PRODUK_KONSTRUKSI'; }
    function isMaterialEntity() { return entityType === 'MATERIAL_KONSTRUKSI'; }
    function isInteriorEntity() { return entityType === 'PRODUK_INTERIOR'; }

    // ============================================================
    // 8. CLEAN TEXT
    // ============================================================

    function cleanText(text) {
        if (!text) return '';
        return text.replace(/\s+/g, ' ').trim();
    }

    // ============================================================
    // 9. CLEAN PAGE NAME FROM URL (FIXED v9.1)
    // ============================================================

    function getCleanPageNameFromUrl(url) {
        if (!url) return '';

        let path = url;
        path = path.replace(/^https?:\/\/[^\/]+/i, '');
        path = path.split('?')[0];
        path = path.replace(/\.(html|php|asp|jsp)$/i, '');
        
        // Hapus pola tanggal
        path = path.replace(/\/\d{4}\/\d{2}\/\d{2}\//g, '/');
        path = path.replace(/\/\d{4}\/\d{2}\//g, '/');
        path = path.replace(/\/\d{4}\//g, '/');
        
        // Hapus /p/
        path = path.replace(/^\/p\//, '/');
        path = path.replace(/\/p\//g, '/');
        
        const parts = path.split('/').filter(Boolean);
        let last = parts.pop() || '';
        
        if (!last && parts.length > 0) {
            last = parts.pop() || '';
        }
        
        last = last.replace(/-/g, ' ');
        last = last.replace(/[^a-z0-9\s]/gi, '');
        
        if (last.length < 3 && parts.length > 0) {
            const lastTwo = parts.slice(-2).join(' ');
            if (lastTwo.length > last.length) {
                last = lastTwo;
            }
        }
        
        const cleanResult = cleanText(last.toLowerCase());
        log(`Cleaned URL: "${url}" → "${cleanResult}"`, 'URL');
        
        return cleanResult;
    }

    // ============================================================
    // 10. SLUGIFY
    // ============================================================

    function slugify(text) {
        return cleanText(text)
            .toLowerCase()
            .replace(/[^\w\s-]/g, '')
            .replace(/\s+/g, '-')
            .replace(/--+/g, '-');
    }

    // ============================================================
    // 11. KEYWORDS (FIXED v9.2)
    // ============================================================

    const SP1_KEYWORDS = [
        'vs', 'versus', 'perbandingan', 'lebih baik', 'kelebihan', 'kekurangan'
    ];

    const SP2_KEYWORDS = [
        'jenis', 'kategori', 'daftar', 'macam', 'tipe'
    ];

    // ✅ FIX v9.2: Hapus "metode" dari INFORMATIONAL_KEYWORDS
    const INFORMATIONAL_KEYWORDS = [
        'panduan', 'tutorial', 'cara', 'tips', 'apa itu', 'pengertian'
    ];

    // ✅ FIX v9.2: Tambahkan "metode" ke keyword khusus untuk blog posts
    const METHOD_KEYWORDS = ['metode', 'cara', 'tahapan', 'langkah', 'analisa'];

    // ============================================================
    // 11a. VARIANT KEYWORDS PER ENTITY
    // ============================================================
    
    const VARIANT_KEYWORDS_PRODUK = [
        'spesifikasi', 'spec', 'detail spesifikasi',
        'mutu', 'kualitas', 'quality',
        'ukuran', 'dimensi',
        'grade', 'type', 'tipe', 'model',
        'standar', 'merk', 'brand', 'seri'
    ];

    const VARIANT_KEYWORDS_JASA = [
        'standar pelayanan', 'sop', 'metode kerja',
        'prosedur', 'tahapan', 'cara kerja',
        'durasi', 'waktu pengerjaan', 'garansi',
        'standar pengerjaan'
    ];

    const VARIANT_KEYWORDS_SEWA = [
        'spesifikasi alat', 'kapasitas alat',
        'spek alat', 'detail alat', 'spesifikasi'
    ];

    const TECHNICAL_SPECS = ['k225', 'k250', 'k300', 'k350', 'k400', 'k500', 'k600', 'fc', 'm6', 'm8', 'm10', 'm12'];
    const SPECIFIC_MODIFIERS = [
        'k225', 'k250', 'k300', 'm6', 'm8', 'm10',
        'diesel', 'hidrolik', 'mini pile', 'sheet pile', 'drop hammer',
        'breaker', 'long arm', 'vibrator', 'per jam', 'per hari',
        'per meter', 'per m2', 'terdekat', 'murah', 'kapasitas besar'
    ];

    // ============================================================
    // 11b. VARIANT DETECTION PER ENTITY
    // ============================================================
    
    function isVariantPage(pageName, currentEntityType) {
        const lowerName = pageName.toLowerCase();
        
        for (const spec of TECHNICAL_SPECS) {
            if (lowerName.includes(spec)) {
                return false;
            }
        }
        
        if (currentEntityType === 'PRODUK_KONSTRUKSI' || currentEntityType === 'MATERIAL_KONSTRUKSI') {
            for (const kw of VARIANT_KEYWORDS_PRODUK) {
                if (lowerName.includes(kw)) {
                    log(`Variant detected (PRODUK/MATERIAL): "${pageName}" contains "${kw}"`, 'VARIANT');
                    return true;
                }
            }
        }
        
        if (currentEntityType === 'JASA_KONSTRUKSI') {
            for (const kw of VARIANT_KEYWORDS_JASA) {
                if (lowerName.includes(kw)) {
                    log(`Variant detected (JASA): "${pageName}" contains "${kw}"`, 'VARIANT');
                    return true;
                }
            }
            return false;
        }
        
        if (currentEntityType === 'SEWA_ALAT_KONSTRUKSI') {
            for (const kw of VARIANT_KEYWORDS_SEWA) {
                if (lowerName.includes(kw)) {
                    log(`Variant detected (SEWA): "${pageName}" contains "${kw}"`, 'VARIANT');
                    return true;
                }
            }
            if (lowerName.includes('spesifikasi') && (lowerName.includes('alat') || lowerName.includes('excavator') || lowerName.includes('dump') || lowerName.includes('alat berat'))) {
                log(`Variant detected (SEWA): "${pageName}" contains spesifikasi + alat`, 'VARIANT');
                return true;
            }
            return false;
        }
        
        return false;
    }

    // ============================================================
    // 12. LOCATION DETECTION
    // ============================================================

    const LOCATION_WHITELIST = new Set([
        'jakarta', 'jakarta pusat', 'jakarta barat', 'jakarta selatan', 'jakarta timur', 'jakarta utara',
        'bogor', 'kota bogor', 'kabupaten bogor',
        'depok', 'kota depok',
        'tangerang', 'kota tangerang', 'kota tangerang selatan', 'kabupaten tangerang',
        'bekasi', 'kota bekasi', 'kabupaten bekasi',
        'bandung', 'kota bandung', 'kabupaten bandung',
        'karawang', 'kabupaten karawang',
        'purwakarta', 'kabupaten purwakarta',
        'cikarang', 'cikarang barat', 'cikarang pusat', 'cikarang selatan', 'cikarang timur', 'cikarang utara',
        'subang', 'kabupaten subang',
        'cirebon', 'kota cirebon', 'kabupaten cirebon',
        'semarang', 'kota semarang', 'kabupaten semarang',
        'solo', 'surakarta', 'kota surakarta',
        'pekalongan', 'tegal', 'magelang', 'sukoharjo', 'boyolali', 'klaten',
        'jogja', 'yogyakarta', 'kota yogyakarta', 'kabupaten sleman', 'bantul', 'gunungkidul', 'kulon progo',
        'surabaya', 'kota surabaya',
        'malang', 'kota malang', 'kabupaten malang',
        'kediri', 'kota kediri', 'kabupaten kediri',
        'gresik', 'sidoarjo', 'mojokerto', 'pasuruan', 'probolinggo', 'jember', 'banyuwangi', 'madiun',
        'medan', 'kota medan',
        'palembang', 'pekanbaru', 'padang', 'lampung', 'bandar lampung', 'batam', 'tanjungpinang',
        'aceh', 'banda aceh', 'jambi', 'bengkulu', 'pangkal pinang',
        'pontianak', 'balikpapan', 'samarinda', 'banjarmasin', 'palangkaraya',
        'makassar', 'kota makassar',
        'manado', 'palu', 'kendari', 'gorontalo',
        'bali', 'kabupaten badung', 'kota denpasar', 'gianyar', 'tabanan', 'bangli', 'karangasem', 'klungkung', 'buleleng', 'jembrana',
        'mataram', 'kupang',
        'terdekat'
    ]);

    function isLocation(text) {
        if (!text) return false;
        const lower = text.toLowerCase();
        for (const city of LOCATION_WHITELIST) {
            if (new RegExp(`\\b${city.replace(/\s+/g, '\\s+')}\\b`, 'i').test(lower)) return true;
        }
        return false;
    }

    // ============================================================
    // 13. SPECIFIC PRODUCT
    // ============================================================

    function isSpecificProduct(text) {
        if (!text) return false;
        const lower = text.toLowerCase();
        for (const mod of SPECIFIC_MODIFIERS) {
            if (lower.includes(mod)) return true;
        }
        return /\d/.test(lower);
    }

    // ============================================================
    // 14. SUB VARIANT
    // ============================================================

    function isSubVariant(text) {
        if (!text) return false;
        let score = 0;
        if ((text.match(/\d+/g) || []).length >= 3) score++;
        if ((text.match(/x/g) || []).length >= 2) score++;
        if (/mm|cm|meter|kg|ton/i.test(text)) score++;
        return score >= 2;
    }

    // ============================================================
    // 15. ENTITY PILLAR EXACT MATCH
    // ============================================================

    function isEntityPillarExactMatch(pageName) {
        const cleanName = cleanText(pageName.toLowerCase());
        const valid = ROOT_ENTITY_PILLARS[entityType] || [];
        return valid.includes(cleanName);
    }

    // ============================================================
    // 16. JASA KEYWORDS
    // ============================================================

    const JASA_KEYWORDS_PATTERN = 
        /\b(jasa|kontraktor|tukang|borongan|renovasi|pasang|bangun|perbaikan|instalasi|proyek|cor|gali|urug|angkut)\b/i;

    // ============================================================
    // 17. PAGE TYPE DETECTION (FIXED v9.2)
    // ============================================================

    function detectPageType(pageName, isHome = false) {
        const lowerName = cleanText(pageName.toLowerCase());

        if (isHome || lowerName === 'home' || lowerName === 'beranda') return 'home';
        if (isEntityPillarExactMatch(lowerName)) return 'pillar';
        if (isSubVariant(lowerName)) return 'sub-variant';

        // ✅ FIX v9.2: Deteksi "metode", "analisa" sebagai money-page
        for (const kw of METHOD_KEYWORDS) {
            if (lowerName.includes(kw)) {
                const HAS_JASA_WORD = JASA_KEYWORDS_PATTERN.test(lowerName);
                const HAS_SEWA_WORD = /\b(sewa|rental)\b/i.test(lowerName);
                const HAS_PRODUK_WORD = /\b(beton|readymix|material|produk)\b/i.test(lowerName);
                
                if (HAS_JASA_WORD || HAS_SEWA_WORD || HAS_PRODUK_WORD) {
                    return 'money-page';
                }
                return 'sub-pillar-tipe-2';
            }
        }

        // Variant detection per entity
        if (isVariantPage(lowerName, entityType)) {
            return 'variant';
        }

        for (const kw of INFORMATIONAL_KEYWORDS) {
            if (lowerName.includes(kw)) return 'pillar';
        }
        for (const kw of SP1_KEYWORDS) {
            if (lowerName.includes(kw)) return 'sub-pillar-tipe-1';
        }
        for (const kw of SP2_KEYWORDS) {
            if (lowerName.includes(kw)) return 'sub-pillar-tipe-2';
        }

        const HAS_PRICE_WORD = /\b(harga|biaya|tarif)\b/i.test(lowerName);
        const HAS_SEWA_WORD = /\b(sewa|rental)\b/i.test(lowerName);
        const HAS_JASA_WORD = JASA_KEYWORDS_PATTERN.test(lowerName);
        const HAS_LOCATION = isLocation(lowerName);

        if (HAS_LOCATION) return 'money-child';

        if (isSewaEntity() && HAS_SEWA_WORD && !HAS_PRICE_WORD) {
            const cleaned = lowerName.replace(/\b(sewa|rental)\b/gi, '').trim();
            const words = cleaned.split(/\s+/).filter(Boolean);
            const specific = isSpecificProduct(cleaned);
            if (words.length <= 2 && !specific && !isLocation(cleaned)) {
                return 'money-master';
            }
            return 'money-page';
        }

        if (isJasaEntity() && HAS_JASA_WORD && !HAS_PRICE_WORD) {
            let cleaned = lowerName;
            const jasaCleanList = ['jasa', 'kontraktor', 'tukang', 'borongan', 'renovasi', 'pasang', 'bangun', 'perbaikan', 'instalasi', 'proyek', 'cor', 'gali', 'urug', 'angkut'];
            for (const kw of jasaCleanList) {
                cleaned = cleaned.replace(new RegExp(`\\b${kw}\\b`, 'gi'), '');
            }
            cleaned = cleaned.trim();
            const words = cleaned.split(/\s+/).filter(Boolean);
            const specific = isSpecificProduct(cleaned);
            if (words.length <= 2 && !specific && !isLocation(cleaned)) {
                return 'money-master';
            }
            return 'money-page';
        }

        if (HAS_PRICE_WORD) {
            const cleaned = lowerName.replace(/\b(harga|biaya|tarif)\b/gi, '').trim();
            const words = cleaned.split(/\s+/).filter(Boolean);
            const specific = isSpecificProduct(cleaned);
            if (words.length <= 2 && !specific && !isLocation(cleaned)) {
                return 'money-master';
            }
            return 'money-page';
        }

        if ((isProdukEntity() || isMaterialEntity()) && !HAS_PRICE_WORD) {
            const words = lowerName.split(/\s+/).filter(Boolean);
            if (words.length <= 2) return 'pillar';
            return 'sub-pillar-tipe-2';
        }

        return 'pillar';
    }

    // ============================================================
    // 18. AUTO DETECT PARENT
    // ============================================================

    function findNearestParentFromItems(items, currentPageName) {
        if (!items || items.length === 0) return null;

        const currentLower = currentPageName.toLowerCase();
        const currentWords = currentLower.split(/\s+/);

        let bestMatch = null;
        let bestScore = 0;

        for (const item of items) {
            const itemName = item.name?.toLowerCase() || '';
            if (itemName === currentLower) continue;

            let score = 0;

            if (currentLower.includes(itemName) && itemName.length > 3) {
                score = itemName.length * 10;
            }

            const itemWords = itemName.split(/\s+/);
            for (const word of currentWords) {
                if (word.length > 2 && itemWords.includes(word)) {
                    score += 5;
                }
            }

            for (let i = 1; i <= currentWords.length; i++) {
                const prefix = currentWords.slice(0, i).join(' ');
                if (itemName === prefix) {
                    score += 100;
                    break;
                }
            }

            if (item.url) {
                const urlSlug = item.url.split('/').pop()?.replace('.html', '').replace(/-/g, ' ');
                if (urlSlug && currentLower.includes(urlSlug)) {
                    score += 50;
                }
            }

            const specificPatterns = ['finishing', 'bangunan', 'interior', 'eksterior', 'lantai', 'dinding'];
            for (const pattern of specificPatterns) {
                if (currentLower.includes(pattern) && itemName.includes(pattern)) {
                    score += 30;
                    break;
                }
            }

            if (score > bestScore) {
                bestScore = score;
                bestMatch = item;
            }
        }

        log(`Parent detection score: ${bestScore}`, 'INFO');
        return bestScore > 20 ? bestMatch : null;
    }

    function injectCurrentPageAndParent(breadcrumbItems, currentPageName, currentFullUrl) {
        let items = [...breadcrumbItems];
        const currentLower = currentPageName.toLowerCase();

        const hasCurrent = items.some(item => 
            item.name?.toLowerCase() === currentLower
        );

        if (!hasCurrent) {
            items.push({
                name: currentPageName,
                url: currentFullUrl
            });
        }

        const detectedParent = findNearestParentFromItems(items, currentPageName);

        if (detectedParent) {
            const hasParent = items.some(item => 
                item.name?.toLowerCase() === detectedParent.name?.toLowerCase()
            );

            if (!hasParent) {
                log(`Auto-injected parent: "${detectedParent.name}" → "${currentPageName}"`, 'SUCCESS');
                const currentIndex = items.findIndex(item => 
                    item.name?.toLowerCase() === currentLower
                );
                if (currentIndex > -1) {
                    items.splice(currentIndex, 0, detectedParent);
                } else {
                    items.push(detectedParent);
                }
            }
        }

        return items;
    }

    // ============================================================
    // 19. FORCE PARENT INJECTION
    // ============================================================

    function forceInjectDirectParent(lineageLevels, allLevels, currentPageTitle, entityType, breadcrumbItems) {
        const currentLower = currentPageTitle.toLowerCase();
        let modifiedLineage = [...lineageLevels];
        const words = currentLower.split(/\s+/);

        const autoParent = findNearestParentFromItems(breadcrumbItems, currentPageTitle);
        if (autoParent && !modifiedLineage.some(l => l.name === autoParent.name)) {
            const parentFromAll = allLevels.find(item => 
                item.name?.toLowerCase() === autoParent.name?.toLowerCase()
            );
            if (parentFromAll) {
                log(`AUTO PARENT: "${parentFromAll.name}"`, 'SUCCESS');
                modifiedLineage.push(parentFromAll);
            }
        }

        if (modifiedLineage.length === lineageLevels.length && words.length >= 2) {
            for (let i = words.length - 1; i >= 1; i--) {
                const potentialParent = words.slice(0, i).join(' ');
                const parentItem = allLevels.find(item => 
                    item.name.toLowerCase() === potentialParent
                );
                if (parentItem && !modifiedLineage.some(l => l.name === parentItem.name)) {
                    log(`PATTERN PARENT: "${parentItem.name}"`, 'SUCCESS');
                    modifiedLineage.push(parentItem);
                    break;
                }
            }
        }

        const currentLevel = TYPE_LEVEL_MAP[detectPageType(currentPageTitle)] || 99;
        
        const allPotentialParents = allLevels.filter(item => 
            item.level <= currentLevel && 
            item.name.toLowerCase() !== currentLower &&
            !modifiedLineage.some(l => l.name === item.name)
        );
        
        for (const parent of allPotentialParents) {
            log(`FORCE PARENT: "${parent.name}" (level ${parent.level}) → "${currentPageTitle}"`, 'SUCCESS');
            modifiedLineage.push(parent);
        }

        if (modifiedLineage.length === lineageLevels.length) {
            const semanticKeywords = {
                'finishing': ['finishing', 'cat', 'epoxy', 'lampu', 'wallpaper'],
                'bangunan': ['bangunan', 'gedung', 'rumah', 'ruko'],
                'interior': ['interior', 'dalam', 'ruangan'],
                'eksterior': ['eksterior', 'luar', 'halaman'],
                'lantai': ['lantai', 'keramik', 'epoxy lantai', 'marmer', 'granit'],
                'dinding': ['dinding', 'tembok', 'wallpaper']
            };
            
            for (const [parentKeyword, childKeywords] of Object.entries(semanticKeywords)) {
                const isChildMatch = childKeywords.some(kw => currentLower.includes(kw));
                if (isChildMatch) {
                    const parentItem = allLevels.find(item => 
                        item.name.toLowerCase().includes(parentKeyword)
                    );
                    if (parentItem && !modifiedLineage.some(l => l.name === parentItem.name)) {
                        log(`SEMANTIC PARENT: "${parentItem.name}"`, 'SUCCESS');
                        modifiedLineage.push(parentItem);
                        break;
                    }
                }
            }
        }

        if (modifiedLineage.length === lineageLevels.length && allLevels.length > 0) {
            const lowerLevelItems = allLevels.filter(item => 
                item.level <= currentLevel && 
                item.name.toLowerCase() !== currentLower
            );
            if (lowerLevelItems.length > 0) {
                const sortedByLevel = [...lowerLevelItems].sort((a, b) => b.level - a.level);
                const highestLevelParent = sortedByLevel[0];
                if (highestLevelParent && !modifiedLineage.some(l => l.name === highestLevelParent.name)) {
                    log(`LAST RESORT: "${highestLevelParent.name}"`, 'WARN');
                    modifiedLineage.push(highestLevelParent);
                }
            }
        }
        
        return modifiedLineage;
    }

    // ============================================================
    // 20. HIERARCHY VALIDATOR
    // ============================================================
    
    function validateAndFixHierarchy(lineage) {
        if (lineage.length <= 1) return lineage;
        const fixed = [];
        const sorted = [...lineage].sort((a, b) => a.level - b.level);
        const uniqueNames = new Set();
        for (const item of sorted) {
            if (!uniqueNames.has(item.name.toLowerCase())) {
                uniqueNames.add(item.name.toLowerCase());
                fixed.push(item);
            }
        }
        return fixed;
    }

    // ============================================================
    // 21. GET CURRENT PAGE INFO
    // ============================================================

    const currentFullUrl = currentUrl.startsWith('http')
        ? currentUrl
        : CONFIG.DOMAIN + currentUrl;

    let currentPageTitle = getCleanPageNameFromUrl(currentFullUrl);

    if (!currentPageTitle) {
        currentPageTitle = 'Halaman';
    }

    // ============================================================
    // 22. INJECT CURRENT PAGE & AUTO PARENT
    // ============================================================

    const enhancedBreadcrumbItems = injectCurrentPageAndParent(
        breadcrumbItems,
        currentPageTitle,
        currentFullUrl
    );

    // ============================================================
    // 23. BUILD ALL LEVELS
    // ============================================================

    const allLevels = [];

    for (let i = 0; i < enhancedBreadcrumbItems.length; i++) {
        const item = enhancedBreadcrumbItems[i];
        let name, url;

        if (typeof item === 'object') {
            name = item.name;
            url = item.url || null;
        } else {
            name = item;
            url = null;
        }

        const type = detectPageType(name);
        allLevels.push({
            name,
            url,
            type,
            level: TYPE_LEVEL_MAP[type] || 99,
            position: i + 1
        });
    }

    // ============================================================
    // 24. URL FALLBACK
    // ============================================================

    for (const level of allLevels) {
        if (!level.url) {
            let foundUrl = null;
            if (mappingObj) {
                for (const [url, title] of Object.entries(mappingObj)) {
                    if (title === level.name) {
                        foundUrl = url.startsWith('http') ? url : CONFIG.DOMAIN + url;
                        break;
                    }
                }
            }
            if (!foundUrl) {
                foundUrl = `${CONFIG.DOMAIN}/p/${slugify(level.name)}.html`;
            }
            level.url = foundUrl;
        } else if (!level.url.startsWith('http')) {
            level.url = CONFIG.DOMAIN + level.url;
        }
    }

    // ============================================================
    // 25. CURRENT PAGE TYPE
    // ============================================================

    const currentPageType = detectPageType(currentPageTitle);
    log(`Current page: "${currentPageTitle}" → type: ${currentPageType} (level ${TYPE_LEVEL_MAP[currentPageType]})`, 'INFO');

    // ============================================================
    // 26. SELECT BREADCRUMB LEVELS
    // ============================================================

    const selectedLevels = [];

    // HOME
    selectedLevels.push({
        name: 'Beranda',
        url: CONFIG.DOMAIN,
        type: 'home',
        level: 0,
        position: 1
    });

    // UNIQUE HIERARCHY
    const uniqueHierarchy = [];
    const usedHierarchy = new Set();

    for (const item of allLevels) {
        const key = item.name.toLowerCase();
        if (usedHierarchy.has(key)) continue;
        usedHierarchy.add(key);
        uniqueHierarchy.push(item);
    }

    log('=== ALL LEVELS DEBUG ===', 'DEBUG');
    for (const level of allLevels) {
        log(`  ${level.name} → type: ${level.type}, level: ${level.level}`, 'DEBUG');
    }

    log('Unique hierarchy items (' + uniqueHierarchy.length + '): ' + uniqueHierarchy.map(i => i.name + '(' + i.type + ')').join(' → '), 'INFO');

    // ========================================================
    // FIND NEAREST PARENTS (FIXED v9.3 - RELEVANCE BASED)
    // ========================================================
    
    function findNearestParentsByHierarchy() {
        const lineage = [];
        const currentLevel = TYPE_LEVEL_MAP[currentPageType] || 99;
        
        log(`Current level: ${currentLevel}`, 'DEBUG');
        
        // Ambil SEMUA candidate (tidak hanya level <= currentLevel)
        const allCandidates = uniqueHierarchy.filter(item => 
            item.name.toLowerCase() !== currentPageTitle.toLowerCase()
        );
        
        // Pisahkan berdasarkan level
        const lowerOrEqual = allCandidates.filter(item => item.level <= currentLevel);
        const higher = allCandidates.filter(item => item.level > currentLevel);
        
        // Gabungkan: prioritaskan yang level <= currentLevel, lalu yang > currentLevel
        const candidates = [...lowerOrEqual, ...higher];
        
        log('Candidates (all): ' + candidates.map(i => i.level + ':' + i.name).join(', '), 'DEBUG');
        
        if (candidates.length === 0) return lineage;
        
        // ============================================================
        // ✅ FIX v9.3: Hitung RELEVANSI SCORE untuk setiap parent
        // ============================================================
        
        const currentWords = currentPageTitle.toLowerCase().split(/\s+/);
        
        const scoredCandidates = candidates.map(item => {
            const itemWords = item.name.toLowerCase().split(/\s+/);
            let relevanceScore = 0;
            
            // 1. Hitung kata yang sama antara current page dan parent
            for (const word of currentWords) {
                if (word.length > 2 && itemWords.includes(word)) {
                    relevanceScore += 10;
                }
            }
            
            // 2. Bonus jika parent mengandung kata yang lebih spesifik
            const specificKeywords = [
                'kanstin', 'pembatas', 'pengaman', 'ditch', 'box', 'culvert',
                'jalan', 'trotoar', 'drainase', 'irigasi', 'beton', 'readymix'
            ];
            
            for (const kw of specificKeywords) {
                if (currentPageTitle.toLowerCase().includes(kw) && item.name.toLowerCase().includes(kw)) {
                    relevanceScore += 30;
                }
            }
            
            // 3. Bonus jika parent adalah bagian dari nama current page
            if (currentPageTitle.toLowerCase().includes(item.name.toLowerCase()) && item.name.length > 3) {
                relevanceScore += 50;
            }
            
            // 4. Bonus jika parent memiliki kata yang lebih panjang (lebih spesifik)
            const maxWordLength = Math.max(...itemWords.map(w => w.length));
            if (maxWordLength > 6) {
                relevanceScore += 5;
            }
            
            // 5. Logging score
            log(`🎯 Score for "${item.name}" (level ${item.level}): ${relevanceScore}`, 'SCORE');
            
            return { ...item, relevanceScore };
        });
        
        // Urutkan berdasarkan level (descending) lalu relevanceScore (descending)
        scoredCandidates.sort((a, b) => {
            if (a.level !== b.level) return b.level - a.level;
            return b.relevanceScore - a.relevanceScore;
        });
        
        log('Scored candidates (sorted): ' + scoredCandidates.map(i => i.level + ':' + i.name + '(' + i.relevanceScore + ')').join(' → '), 'DEBUG');
        
        // Ambil 1 parent per level (prioritaskan yang relevance-nya tinggi)
        const seenLevels = new Set();
        for (const item of scoredCandidates) {
            if (!seenLevels.has(item.level)) {
                seenLevels.add(item.level);
                lineage.push(item);
                log(`🎯 Selected: "${item.name}" (level ${item.level}) with score ${item.relevanceScore}`, 'SUCCESS');
            }
        }
        
        log('Lineage (prioritized): ' + lineage.map(i => i.level + ':' + i.name).join(' → '), 'SUCCESS');
        
        return lineage;
    }

    let lineageLevels = findNearestParentsByHierarchy();

    log('Initial lineage (' + lineageLevels.length + '): ' + lineageLevels.map(i => i.name + '(' + i.type + ')').join(' → '), 'INFO');

    lineageLevels = forceInjectDirectParent(
        lineageLevels, 
        uniqueHierarchy, 
        currentPageTitle, 
        entityType,
        enhancedBreadcrumbItems
    );

    log('After force injection (' + lineageLevels.length + '): ' + lineageLevels.map(i => i.name + '(' + i.type + ')').join(' → '), 'INFO');

    // REMOVE DUPLICATE
    const cleanLineage = [];
    const usedLineage = new Set();

    for (const item of lineageLevels) {
        const key = item.name.toLowerCase();
        if (usedLineage.has(key)) continue;
        usedLineage.add(key);
        cleanLineage.push(item);
    }

    // VALIDATE HIERARCHY
    const validatedLineage = validateAndFixHierarchy(cleanLineage);

    // SORT NATURAL ORDER
    validatedLineage.sort((a, b) => {
        const idxA = HIERARCHY_ORDER.indexOf(a.type);
        const idxB = HIERARCHY_ORDER.indexOf(b.type);
        if (idxA !== idxB) return idxA - idxB;
        return a.position - b.position;
    });

    // ========================================================
    // SOLUSI v9.0: AMBIL SEMUA PARENT DENGAN LEVEL TERTINGGI
    // ========================================================
    
    let finalParents = [];

    // Filter untuk menghilangkan current page dari lineage
    const parentOnly = validatedLineage.filter(item => 
        item.name.toLowerCase() !== currentPageTitle.toLowerCase()
    );

    log(`Parent candidates (${parentOnly.length}): ` + parentOnly.map(i => i.name + '(' + i.level + ')').join(', '), 'DEBUG');

    if (parentOnly.length > 0) {
        // Cari level tertinggi dari parent (bukan current page)
        const highestLevel = Math.max(...parentOnly.map(i => i.level));
        
        // Ambil SEMUA parent dengan level tertinggi
        finalParents = parentOnly.filter(item => item.level === highestLevel);
        
        // Urutkan berdasarkan posisi
        finalParents.sort((a, b) => a.position - b.position);
        
        log(`✅ PARENT FOUND: ${finalParents.length} parent(s) at level ${highestLevel}: ` + finalParents.map(i => i.name).join(', '), 'SUCCESS');
    } else {
        log('⚠️ No parent found (only current page)', 'WARN');
    }

    // FALLBACK - Jika masih tidak ada parent
    if (finalParents.length === 0 && validatedLineage.length > 1) {
        const filtered = validatedLineage.filter(item => 
            item.name.toLowerCase() !== currentPageTitle.toLowerCase()
        );
        if (filtered.length > 0) {
            const highestLevel = Math.max(...filtered.map(i => i.level));
            finalParents = filtered.filter(item => item.level === highestLevel);
            log(`⚠️ FALLBACK PARENT: Using ${finalParents.length} nearest parent(s) at level ${highestLevel}`, 'WARN');
        }
    }

    // Inject ALL parents
    for (const item of finalParents) {
        const exists = selectedLevels.some(l => l.name.toLowerCase() === item.name.toLowerCase());
        if (!exists) {
            selectedLevels.push(item);
            log(`👪 Adding parent: "${item.name}" (level ${item.level})`, 'PARENT');
        }
    }

    // ADD CURRENT PAGE
    const hasCurrentAlready = selectedLevels.some(item =>
        item.name.toLowerCase() === currentPageTitle.toLowerCase()
    );

    if (!hasCurrentAlready) {
        selectedLevels.push({
            name: currentPageTitle,
            url: currentFullUrl,
            type: currentPageType,
            level: TYPE_LEVEL_MAP[currentPageType] || 99,
            isCurrent: true
        });
    }

    // ============================================================
    // 27. FINAL UNIQUE LEVELS
    // ============================================================

    const uniqueLevels = [];
    const usedNames = new Set();

    for (const item of selectedLevels) {
        const key = item.name.toLowerCase();
        if (usedNames.has(key)) continue;
        usedNames.add(key);
        uniqueLevels.push(item);
    }

    uniqueLevels.forEach((item, index) => {
        item.position = index + 1;
    });

    log('Final breadcrumb (' + uniqueLevels.length + ' levels): ' + uniqueLevels.map(i => i.name + '(' + i.level + ')').join(' › '), 'SUCCESS');

    // ============================================================
    // 28. GENERATE HTML
    // ============================================================

    let breadcrumbHtml = `<div class="breadcrumbs" itemscope itemtype="https://schema.org/BreadcrumbList">\n`;

    for (let i = 0; i < uniqueLevels.length; i++) {
        const item = uniqueLevels[i];
        const isLast = i === uniqueLevels.length - 1;

        if (!isLast) {
            breadcrumbHtml +=
                `<span itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
<a href="${item.url}" itemprop="item" title="${item.name}">
<span itemprop="name">${item.name}</span>
</a>
<meta itemprop="position" content="${item.position}" />
</span>
<span class="separator"> › </span>\n`;
        } else {
            breadcrumbHtml +=
                `<span itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
<span itemprop="name">${item.name}</span>
<meta itemprop="position" content="${item.position}" />
</span>\n`;
        }
    }

    breadcrumbHtml += `</div>\n`;

    // ============================================================
    // 29. JSON LD
    // ============================================================

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": uniqueLevels.map((item, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": item.name,
            "item": item.url
        }))
    };

    // ============================================================
    // 30. REMOVE OLD
    // ============================================================

    document.querySelectorAll('.breadcrumbs, .breadcrumb-nav, [aria-label="Breadcrumb"]')
        .forEach(el => el.remove());
    document.querySelectorAll('script[data-breadcrumb="true"]')
        .forEach(el => el.remove());

    // ============================================================
    // 31. TARGET ELEMENT
    // ============================================================

    const targetElement = document.querySelector('main, article, .content, #main-content, .post-content');

    // ============================================================
    // 32. INJECT HTML
    // ============================================================

    if (targetElement) {
        targetElement.insertAdjacentHTML('afterbegin', breadcrumbHtml);
    } else {
        document.body.insertAdjacentHTML('afterbegin', breadcrumbHtml);
    }

    // ============================================================
    // 33. INJECT JSON LD
    // ============================================================

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-breadcrumb', 'true');
    script.textContent = JSON.stringify(jsonLd, null, 2);
    document.head.appendChild(script);

    // ============================================================
    // 34. LOG SUMMARY
    // ============================================================

    console.log('📊 BREADCRUMB GENERATION SUMMARY (v9.3):');
    console.log(`   Page: "${currentPageTitle}"`);
    console.log(`   URL: "${currentFullUrl}"`);
    console.log(`   Type: ${currentPageType} (level ${TYPE_LEVEL_MAP[currentPageType]})`);
    console.log(`   Entity: ${entityType}`);
    if (currentPageType === 'variant') {
        console.log(`   🔬 Variant detected for entity: ${entityType}`);
    }
    if (currentPageType === 'money-child') {
        console.log(`   📍 Money Child with location detected`);
    }
    console.log(`   👪 Parents found: ${finalParents.length} at level ${finalParents.length > 0 ? finalParents[0].level : 'N/A'}`);
    console.log(`   📊 Total breadcrumb levels: ${uniqueLevels.length}`);

    // ============================================================
    // 35. RETURN
    // ============================================================

    return {
        html: breadcrumbHtml,
        jsonLd,
        selectedLevels: uniqueLevels,
        currentPageType,
        entityType,
        version: '9.3.0',
        parentCount: finalParents.length,
        parents: finalParents,
        isVariant: currentPageType === 'variant',
        isMoneyChild: currentPageType === 'money-child'
    };
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
		urlMappingJasaCuttingBetonFromMoneyMasterMoneyPage,
		urlMappingHargaJasaCuttingBetonFromMoneyPageMoneyPage1,
		urlMappingHargaJasaCuttingBetonFromMoneyPageMoneyChild,
		urlMappingJasaSondirTanahFromMoneyMaster1MoneyPage,
		urlMappingJasaCptTanahFromMoneyMaster1MoneyPage,
		urlMappingJasaBoringTanahFromMoneyMaster1MoneyPage,
		urlMappingJasaLabTanahFromMoneyMaster1MoneyPage,
		urlMappingJasaUjiPenetrasiFromMoneyMaster1MoneyPage,
		urlMappingJasaPemotonganBukitLahanFromMoneyPageMoneyPage1,
		urlMappingJasaPengupasanLahanTanahFromMoneyPageMoneyPage1,
		urlMappingJasaTebangPohonPematanganLahanFromMoneyPageMoneyPage1,
		urlMappingJasaPerataandanGradingLahanFromMoneyPageMoneyPage1,
		urlMappingJasaPekerjaanElevasiLahanFromMoneyPageMoneyPage1,
		urlMappingJasaPembentukanBadanLahanFromMoneyPageMoneyPage1,
		urlMappingJasaCutandFillLahanFromMoneyPageMoneyPage1,
		urlMappingJasaUruganTanahLahanFromMoneyPageMoneyPage1,
		urlMappingJasaPemadatanTanahLahanFromMoneyPageMoneyPage1,
		urlMappingJasaPembersihanLahanPematanganFromMoneyPageMoneyPage1,
		urlMappingJasaBaseCourseLahanFromMoneyPageMoneyPage1,
		urlMappingJasaStabilisasiTanahLahanFromMoneyPageMoneyPage1,
		urlMappingJasaPemasanganDrainaseLahanFromMoneyPageMoneyPage1,
		urlMappingJasaPemasanganGeotekstilLahanFromMoneyPageMoneyPage1,
		urlMappingJasaPersiapanPondasiLahanFromMoneyPageMoneyPage1
    );

    // --- validasi URL terdaftar ---
	 // --- validasi URL terdaftar ---
    if (!urlMappingGabungan[cleanUrlJasaCuttingBetonPost]) {
      console.log(`[HybridDateModified] URL tidak terdaftar: ${cleanUrlJasaCuttingBetonPost}`);
      return;
    }

	/* ============================================================
 🔥 Hybrid Date Modified v7.9 — UNTUK betonjayareadymix.com
    ✅ SINKRON dengan Page Level Detector v22.1
    ✅ FIXED: Support PLD v22.0, v22.1, v20.x, v19.x
    ✅ FIXED: Variable name konsisten dengan PLD v22.x
    ✅ FULL COMPATIBLE: Page Level Detector v22.x, v20.x, v19.x, v18, v17
    ✅ FIX: Support JASA MONEY-MASTER detection
    ✅ FIX: 'home' TIDAK termasuk EVERGREEN_LEVELS
    ✅ ENHANCED: Mendapatkan confidence score dari PLD v22.x
    ✅ ENHANCED: Enhanced logging dengan confidence dan strategy
    ✅ Better error handling
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
    const EVERGREEN_LEVELS = ['pillar', 'sub-pillar-tipe-2', 'variant', 'sub-variant'];
    const FLEXIBLE_LEVELS = ['sub-pillar-tipe-1'];
    const MONEY_LEVELS = ['money-master', 'money-page', 'money-child', 'money-leadgen'];

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
    // 📌 TUNGGU PAGE LEVEL DETECTOR READY (SUPPORT v22.x, v20.x, v19.x, v18, v17)
    // ============================================================
    function waitForPageLevelDetector() {
      return new Promise((resolve) => {
        // ✅ SUPPORT v22.x (v22.0, v22.1)
        if (window.pageLevelDetectorv22 && window.pageLevelDetectorv22Ready) {
          console.log("✅ Page Level Detector v22.x already ready");
          resolve(true);
          return;
        }
        
        // ✅ SUPPORT v20.x (v20.0, v20.1, v20.2)
        if (window.pageLevelDetectorv20 && window.pageLevelDetectorv20Ready) {
          console.log("✅ Page Level Detector v20.x already ready");
          resolve(true);
          return;
        }
        
        // ✅ SUPPORT v19.0
        if (window.pageLevelDetectorv19 && window.pageLevelDetectorv19Ready) {
          console.log("✅ Page Level Detector v19 already ready");
          resolve(true);
          return;
        }
        
        // ✅ SUPPORT v18
        if (window.pageLevelDetectorV18 && window.pageLevelDetectorv18Ready) {
          console.log("✅ Page Level Detector v18 already ready");
          resolve(true);
          return;
        }
        
        // ✅ SUPPORT v17
        if (window.pageLevelDetectorV17 && window.pageLevelDetectorv17Ready) {
          console.log("✅ Page Level Detector v17 already ready");
          resolve(true);
          return;
        }
        
        // ✅ SUPPORT legacy
        if (window.pageLevelDetector && window.__pageLevelDetectorReady) {
          console.log("✅ Page Level Detector legacy already ready");
          resolve(true);
          return;
        }
        
        // ✅ Event listener untuk semua versi
        const onReadyV22 = () => {
          console.log("✅ Page Level Detector v22.x ready (event)");
          resolve(true);
        };
        
        const onReadyV20 = () => {
          console.log("✅ Page Level Detector v20.x ready (event)");
          resolve(true);
        };
        
        const onReadyV19 = () => {
          console.log("✅ Page Level Detector v19 ready (event)");
          resolve(true);
        };
        
        const onReadyV18 = () => {
          console.log("✅ Page Level Detector v18 ready (event fallback)");
          resolve(true);
        };
        
        const onReadyLegacy = () => {
          console.log("✅ Page Level Detector legacy ready (event fallback)");
          resolve(true);
        };
        
        window.addEventListener("pageLevelDetectorv22Ready", onReadyV22, { once: true });
        window.addEventListener("pageLevelDetectorv20Ready", onReadyV20, { once: true });
        window.addEventListener("pageLevelDetectorv19Ready", onReadyV19, { once: true });
        window.addEventListener("pageLevelDetectorV19Ready", onReadyV19, { once: true });
        window.addEventListener("pageLevelDetectorv18Ready", onReadyV18, { once: true });
        window.addEventListener("pageLevelDetectorReady", onReadyLegacy, { once: true });
        
        // Fallback timeout 10 detik
        setTimeout(() => {
          if (window.pageLevelDetectorv22 || window.pageLevelDetectorv20 || 
              window.pageLevelDetectorv19 || window.pageLevelDetectorV18 || 
              window.pageLevelDetector) {
            console.log("✅ Page Level Detector ready (timeout fallback)");
            resolve(true);
          } else {
            console.warn("⚠️ PageLevelDetector timeout, using defaults");
            resolve(false);
          }
        }, 10000);
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
      // Gunakan PLD v22.x (terbaru, weighted voting system)
      const PAGE_LEVEL_DETECTOR_URL = "https://raw.githack.com/aliyul/solution-blogger/main/PageLevelDetector.js";
      const EVERGREEN_DETECTOR_URL = "https://raw.githack.com/aliyul/solution-blogger/main/SmartEvergreenDetector.js";
      
      if (typeof window.pageLevelDetectorv22 === "undefined" && 
          typeof window.pageLevelDetectorv20 === "undefined" &&
          typeof window.pageLevelDetectorv19 === "undefined" &&
          typeof window.pageLevelDetectorV18 === "undefined" &&
          typeof window.pageLevelDetectorV17 === "undefined" &&
          typeof window.pageLevelDetector === "undefined") {
        console.log("⏳ Loading Page Level Detector v22.x...");
        await loadExternalJS(PAGE_LEVEL_DETECTOR_URL);
        await waitForPageLevelDetector();
        console.log("✅ Page Level Detector v22.x READY");
      }
      
      if (typeof window.detectEvergreen !== "function") {
        console.log("⏳ Loading Smart Evergreen Detector...");
        await loadExternalJS(EVERGREEN_DETECTOR_URL);
        await waitForDetectEvergreen();
        console.log("✅ Smart Evergreen Detector READY");
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
      if (EVERGREEN_LEVELS.includes(pageLevel)) {
        if (pageLevel === 'pillar') {
          return "2026-04-01T10:30:00+07:00";
        }
        return "2026-04-02T00:00:00+07:00";
      }
      
      if (FLEXIBLE_LEVELS.includes(pageLevel)) {
        return "2026-04-15T00:00:00+07:00";
      }
      
      if (MONEY_LEVELS.includes(pageLevel)) {
        return null;
      }
      
      if (pageLevel === 'home') {
        return null;
      }
      
      return null;
    }

    // ============================================================
    // 📌 FUNGSI GET CATEGORY LABEL
    // ============================================================
    function getCategoryLabel(pageLevel) {
      if (EVERGREEN_LEVELS.includes(pageLevel)) return 'EVERGREEN';
      if (FLEXIBLE_LEVELS.includes(pageLevel)) return 'FLEXIBLE';
      if (MONEY_LEVELS.includes(pageLevel)) return 'MONEY';
      if (pageLevel === 'home') return 'HOMEPAGE (DYNAMIC)';
      return 'UNKNOWN';
    }

    // ============================================================
    // 📌 GET PAGE LEVEL FROM DETECTOR (SUPPORT v22.x, v20.x, v19.x, v18, v17)
    // ============================================================
    async function getPageLevelFromDetector() {
      await new Promise(resolve => setTimeout(resolve, 300));
      
      let pageLevel = 'pillar';
      let entityType = 'produk';
      let detectorVersion = 'unknown';
      let confidence = null;
      let strategies = null;
      let strategyCount = null;
      
      // ✅ PRIORITAS v22.x (weighted voting system - 100% accuracy)
      if (window.pageLevelDetectorv22 && typeof window.pageLevelDetectorv22.detect === 'function') {
        try {
          pageLevel = window.pageLevelDetectorv22.detect();
          entityType = window.pageLevelDetectorv22.detectEntityType();
          detectorVersion = 'v22.x';
          
          // Dapatkan confidence score jika tersedia
          if (typeof window.pageLevelDetectorv22.getConfidenceScore === 'function') {
            const confidenceScore = window.pageLevelDetectorv22.getConfidenceScore();
            confidence = confidenceScore.confidence;
            strategies = confidenceScore.strategies;
            strategyCount = confidenceScore.strategyCount;
          }
          
          console.log(`📌 [${detectorVersion}] Detected Page Level: ${pageLevel}, Entity Type: ${entityType}`);
          if (confidence) {
            console.log(`   🎯 Confidence: ${confidence}% (${strategyCount} strategies: ${strategies?.join(", ")})`);
          }
        } catch (e) {
          console.warn(`⚠️ Error calling pageLevelDetectorv22:`, e);
        }
      } 
      // FALLBACK v20.x
      else if (window.pageLevelDetectorv20 && typeof window.pageLevelDetectorv20.detect === 'function') {
        try {
          pageLevel = window.pageLevelDetectorv20.detect();
          entityType = window.pageLevelDetectorv20.detectEntityType();
          detectorVersion = 'v20.x';
          console.log(`📌 [${detectorVersion}] Detected Page Level: ${pageLevel}, Entity Type: ${entityType}`);
        } catch (e) {
          console.warn(`⚠️ Error calling pageLevelDetectorv20:`, e);
        }
      } 
      // FALLBACK v19.0
      else if (window.pageLevelDetectorv19 && typeof window.pageLevelDetectorv19.detect === 'function') {
        try {
          pageLevel = window.pageLevelDetectorv19.detect();
          entityType = window.pageLevelDetectorv19.detectEntityType();
          detectorVersion = 'v19.0';
          console.log(`📌 [${detectorVersion}] Detected Page Level: ${pageLevel}, Entity Type: ${entityType}`);
        } catch (e) {
          console.warn(`⚠️ Error calling pageLevelDetectorv19:`, e);
        }
      } 
      // FALLBACK v18
      else if (window.pageLevelDetectorV18 && typeof window.pageLevelDetectorV18.detect === 'function') {
        try {
          pageLevel = window.pageLevelDetectorV18.detect();
          entityType = window.pageLevelDetectorV18.detectEntityType();
          detectorVersion = 'v18.7';
          console.log(`📌 [${detectorVersion}] Detected Page Level: ${pageLevel}, Entity Type: ${entityType}`);
        } catch (e) {
          console.warn(`⚠️ Error calling pageLevelDetectorV18:`, e);
        }
      } 
      // FALLBACK v17
      else if (window.pageLevelDetectorV17 && typeof window.pageLevelDetectorV17.detect === 'function') {
        try {
          pageLevel = window.pageLevelDetectorV17.detect();
          entityType = window.pageLevelDetectorV17.detectEntityType();
          detectorVersion = 'v17.0';
          console.log(`📌 [${detectorVersion}] Detected Page Level: ${pageLevel}, Entity Type: ${entityType}`);
        } catch (e) {
          console.warn(`⚠️ Error calling pageLevelDetectorV17:`, e);
        }
      } 
      // FALLBACK legacy
      else if (window.pageLevelDetector && typeof window.pageLevelDetector.detect === 'function') {
        try {
          pageLevel = window.pageLevelDetector.detect();
          entityType = window.pageLevelDetector.detectEntityType();
          detectorVersion = 'legacy';
          console.log(`📌 [${detectorVersion}] Detected Page Level: ${pageLevel}, Entity Type: ${entityType}`);
        } catch (e) {
          console.warn(`⚠️ Error calling pageLevelDetector legacy:`, e);
        }
      } 
      else {
        console.warn("⚠️ PageLevelDetector not ready, using defaults (pillar/produk)");
      }
      
      return { pageLevel, entityType, detectorVersion, confidence, strategies, strategyCount };
    }

    // ============================================================
    // 📌 EKSEKUSI UTAMA
    // ============================================================
    
    console.log("🔥 Hybrid Date Modified v7.9 - Starting...");
    
    await loadAllScripts();
    
    const { pageLevel, entityType, detectorVersion, confidence, strategies, strategyCount } = await getPageLevelFromDetector();
    
    // Validasi page level
    const ALL_KNOWN_LEVELS = [...EVERGREEN_LEVELS, ...FLEXIBLE_LEVELS, ...MONEY_LEVELS, 'home'];
    let finalPageLevel = pageLevel;
    if (!ALL_KNOWN_LEVELS.includes(finalPageLevel)) {
      console.warn(`⚠️ Unknown page level: ${finalPageLevel}, defaulting to pillar`);
      finalPageLevel = 'pillar';
    }
    
    // Tentukan custom date
    let customDate = getCustomDateByPageLevel(finalPageLevel, entityType);
    let manualMode = customDate !== null;
    let categoryLabel = getCategoryLabel(finalPageLevel);
    
    console.log(`📋 PAGE CLASSIFICATION:`);
    console.log(`   - Page Level: ${finalPageLevel}`);
    console.log(`   - Entity Type: ${entityType}`);
    console.log(`   - Category: ${categoryLabel}`);
    console.log(`   - Detector: ${detectorVersion}`);
    if (confidence) {
      console.log(`   - Confidence: ${confidence}%`);
    }
    if (strategies && strategyCount) {
      console.log(`   - Strategies: ${strategyCount} strategies (${strategies.join(", ")})`);
    }
    console.log(`   - Mode: ${manualMode ? 'MANUAL (custom date)' : 'AUTO'}`);
    
    if (manualMode && customDate) {
      console.log(`   - Custom Date: ${customDate}`);
    }
    
    // Jalankan detectEvergreen
    if (window.detectEvergreen) {
      if (manualMode && customDate) {
        await window.detectEvergreen({ customDateModified: customDate });
        console.log(`✅ MANUAL mode executed with custom date: ${customDate}`);
      } else {
        await window.detectEvergreen();
        console.log(`✅ AUTO mode executed`);
      }
    } else {
      console.warn("⚠️ detectEvergreen function not available");
    }
    
    // Pastikan AEDMetaDates tersedia
    if (!window.AEDMetaDates || !window.AEDMetaDates.dateModified) {
      console.warn("[HybridDateModified] AEDMetaDates tidak ditemukan, skip update.");
      return;
    }

    const { dateModified, nextUpdate, type: aedType, entityType: detectedEntityType, pageLevel: detectedPageLevel } = window.AEDMetaDates;

    console.log(`📊 betonjayareadymix.com Page Info:`);
    console.log(`   - type: ${aedType}`);
    console.log(`   - entityType: ${detectedEntityType}`);
    console.log(`   - pageLevel: ${detectedPageLevel}`);
    console.log(`   - dateModified: ${dateModified}`);
    console.log(`   - nextUpdate: ${nextUpdate}`);

    // Hitung variasi tanggal
    const uniquePageIdentifier = window.location.pathname;
    let hashSource = uniquePageIdentifier;
    
    if (EVERGREEN_LEVELS.includes(detectedPageLevel)) {
      hashSource = 'evergreen-' + hashSource;
    } else if (FLEXIBLE_LEVELS.includes(detectedPageLevel)) {
      hashSource = 'flexible-' + hashSource;
    } else if (detectedEntityType === 'jasa') {
      hashSource = 'jasa-' + hashSource;
    } else if (MONEY_LEVELS.includes(detectedPageLevel)) {
      hashSource = 'money-' + hashSource;
    } else if (detectedPageLevel === 'home') {
      hashSource = 'home-' + hashSource;
    }
    
    const hash = stableHash(hashSource);
    const offsetSeconds = hash % 86400;
    const finalDate = new Date(new Date(dateModified).getTime() + offsetSeconds * 1000);
    const isoDate = toISOWithTimezoneLocal(finalDate);

    updateMetaDateModified(isoDate);

    window.AEDMetaDates = {
      ...window.AEDMetaDates,
      dateModified: isoDate,
      hashOffset: offsetSeconds,
      detectorVersion: detectorVersion,
      category: categoryLabel,
      mode: manualMode ? 'MANUAL' : 'AUTO',
      originalDateModified: dateModified,
      hybridVersion: '7.9',
      detectionConfidence: confidence,
      detectionStrategies: strategies,
      detectionStrategyCount: strategyCount
    };

    console.log(`✅ [HybridDateModified] ${uniquePageIdentifier}`);
    console.log(`   → Final Date Modified: ${isoDate}`);
    console.log(`   → Offset: ${offsetSeconds} detik (${Math.floor(offsetSeconds / 3600)} jam ${Math.floor((offsetSeconds % 3600) / 60)} menit)`);
    console.log(`   → Mode: ${manualMode ? 'MANUAL' : 'AUTO'}`);
    console.log(`   → Category: ${categoryLabel}`);
    console.log(`   → Detector: ${detectorVersion}`);
    if (confidence) {
      console.log(`   → Detection Confidence: ${confidence}%`);
    }
    console.log(`📋 Hybrid Date Modified v7.9 applied successfully`);

  } catch (err) {
    console.error("[HybridDateModified] Fatal error:", err);
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
if (urlMappingJasaCuttingBetonFromMoneyMasterMoneyPage[cleanUrlJasaCuttingBetonPost]) {
    generateBreadcrumbJasaCuttingBetonPost(
        urlMappingJasaCuttingBetonFromMoneyMasterMoneyPage,
        cleanUrlJasaCuttingBetonPost,
       [
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Cutting Beton', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-cutting-beton.html' },
            { name: 'Perbandingan Jasa Cutting Beton', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-cutting-beton.html' },
            { name: 'Jasa Cutting Beton', url: 'https://www.betonjayareadymix.com/p/jasa-cutting-beton.html' }
        ],
        'JASA_KONSTRUKSI'
    );
}
if (urlMappingHargaJasaCuttingBetonFromMoneyPageMoneyPage1[cleanUrlJasaCuttingBetonPost]) {
    generateBreadcrumbJasaCuttingBetonPost(
        urlMappingHargaJasaCuttingBetonFromMoneyPageMoneyPage1,
        cleanUrlJasaCuttingBetonPost,
       [
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html'},
            { name: 'Daftar Jasa Cutting Beton', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-cutting-beton.html'},
            { name: 'Perbandingan Jasa Cutting Beton', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-cutting-beton.html'},
            { name: 'Jasa Cutting Beton', url: 'https://www.betonjayareadymix.com/p/jasa-cutting-beton.html'},
            { name: 'Harga Jasa Cutting Beton', url: 'https://www.betonjayareadymix.com/2019/06/harga-jasa-cutting-beton.html'}
        ],
        'JASA_KONSTRUKSI'
    );
}
if (urlMappingHargaJasaCuttingBetonFromMoneyPageMoneyChild[cleanUrlJasaCuttingBetonPost]) {
    generateBreadcrumbJasaCuttingBetonPost(
        urlMappingHargaJasaCuttingBetonFromMoneyPageMoneyChild,
        cleanUrlJasaCuttingBetonPost,
       [
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html'},
            { name: 'Daftar Jasa Cutting Beton', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-cutting-beton.html'},
            { name: 'Perbandingan Jasa Cutting Beton', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-cutting-beton.html'},
            { name: 'Jasa Cutting Beton', url: 'https://www.betonjayareadymix.com/p/jasa-cutting-beton.html'},
            { name: 'Harga Jasa Cutting Beton', url: 'https://www.betonjayareadymix.com/2019/06/harga-jasa-cutting-beton.html'}
        ],
        'JASA_KONSTRUKSI'
    );
}
//SUB JasaPematanganLahanPost
 if (urlMappingJasaTebangPohonPematanganLahanFromMoneyPageMoneyPage1[cleanUrlJasaCuttingBetonPost]) {
      generateBreadcrumbJasaCuttingBetonPost(
        urlMappingJasaTebangPohonPematanganLahanFromMoneyPageMoneyPage1,
        cleanUrlJasaCuttingBetonPost,
       [
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Pematangan Lahan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-pematangan-lahan.html' },
            { name: 'Perbandingan Jasa Pematangan Lahan', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-pematangan-lahan.html' },
            { name: 'Jasa Pematangan Lahan', url: 'https://www.betonjayareadymix.com/p/jasa-pematangan-lahan.html' },
            { name: 'Jasa Tebang Pohon Pematangan Lahan', url: 'https://www.betonjayareadymix.com/p/jasa-tebang-pohon-pematangan-lahan.html' }
        ],
        'JASA_KONSTRUKSI'
    );   
   }
	
  //JasaPemotonganBukitLahanPost
   if (urlMappingJasaPemotonganBukitLahanFromMoneyPageMoneyPage1[cleanUrlJasaCuttingBetonPost]) {
	   generateBreadcrumbJasaCuttingBetonPost(
        urlMappingJasaPemotonganBukitLahanFromMoneyPageMoneyPage1,
        cleanUrlJasaCuttingBetonPost,
       [
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Pematangan Lahan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-pematangan-lahan.html' },
            { name: 'Perbandingan Jasa Pematangan Lahan', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-pematangan-lahan.html' },
            { name: 'Jasa Pematangan Lahan', url: 'https://www.betonjayareadymix.com/p/jasa-pematangan-lahan.html' },
            { name: 'Jasa Pemotongan Bukit Lahan', url: 'https://www.betonjayareadymix.com/p/jasa-pemotongan-bukit-lahan.html' }
        ],
        'JASA_KONSTRUKSI'
    );
   }

  //JasaPengupasanLahanTanahPost
   if (urlMappingJasaPengupasanLahanTanahFromMoneyPageMoneyPage1[cleanUrlJasaCuttingBetonPost]) {
	   	   generateBreadcrumbJasaCuttingBetonPost(
        urlMappingJasaPengupasanLahanTanahFromMoneyPageMoneyPage1,
        cleanUrlJasaCuttingBetonPost,
       [
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Pematangan Lahan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-pematangan-lahan.html' },
            { name: 'Perbandingan Jasa Pematangan Lahan', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-pematangan-lahan.html' },
            { name: 'Jasa Pematangan Lahan', url: 'https://www.betonjayareadymix.com/p/jasa-pematangan-lahan.html' },
            { name: 'Jasa Pengupasan Lahan Tanah', url: 'https://www.betonjayareadymix.com/p/jasa-pengupasan-lahan-tanah.html' }
        ],
        'JASA_KONSTRUKSI'
    );
   }

	  //JasaUruganTanahLahan
   if (urlMappingJasaUruganTanahLahanFromMoneyPageMoneyPage1[cleanUrlJasaCuttingBetonPost]) {
        generateBreadcrumbJasaCuttingBetonPost(
        urlMappingJasaUruganTanahLahanFromMoneyPageMoneyPage1,
        cleanUrlJasaCuttingBetonPost,
       [
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Pematangan Lahan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-pematangan-lahan.html' },
            { name: 'Perbandingan Jasa Pematangan Lahan', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-pematangan-lahan.html' },
            { name: 'Jasa Pematangan Lahan', url: 'https://www.betonjayareadymix.com/p/jasa-pematangan-lahan.html' },
            { name: 'Jasa Urugan Tanah Lahan', url: 'https://www.betonjayareadymix.com/p/jasa-urugan-tanah-lahan.html' }
        ],
        'JASA_KONSTRUKSI'
    );
   }

	 //JasaUruganTanahLahan
   if (urlMappingJasaPembentukanBadanLahanFromMoneyPageMoneyPage1[cleanUrlJasaCuttingBetonPost]) {
         generateBreadcrumbJasaCuttingBetonPost(
        urlMappingJasaPembentukanBadanLahanFromMoneyPageMoneyPage1,
        cleanUrlJasaCuttingBetonPost,
       [
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Pematangan Lahan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-pematangan-lahan.html' },
            { name: 'Perbandingan Jasa Pematangan Lahan', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-pematangan-lahan.html' },
            { name: 'Jasa Pematangan Lahan', url: 'https://www.betonjayareadymix.com/p/jasa-pematangan-lahan.html' },
            { name: 'Jasa Pembentukan Badan Lahan', url: 'https://www.betonjayareadymix.com/p/jasa-pembentukan-badan-lahan.html' }
        ],
        'JASA_KONSTRUKSI'
    );
   }
	
  //JasaCutandFillLahanPost
   if (urlMappingJasaCutandFillLahanFromMoneyPageMoneyPage1[cleanUrlJasaCuttingBetonPost]) {
       generateBreadcrumbJasaCuttingBetonPost(
        urlMappingJasaCutandFillLahanFromMoneyPageMoneyPage1,
        cleanUrlJasaCuttingBetonPost,
       [
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Pematangan Lahan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-pematangan-lahan.html' },
            { name: 'Perbandingan Jasa Pematangan Lahan', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-pematangan-lahan.html' },
            { name: 'Jasa Pematangan Lahan', url: 'https://www.betonjayareadymix.com/p/jasa-pematangan-lahan.html' },
            { name: 'Jasa Cut and Fill Lahan', url: 'https://www.betonjayareadymix.com/p/jasa-cut-and-fill-lahan.html' }
        ],
        'JASA_KONSTRUKSI'
    );
   }
  
    //JasaPemadatanTanahLahanPost
   if (urlMappingJasaPemadatanTanahLahanFromMoneyPageMoneyPage1[cleanUrlJasaCuttingBetonPost]) {
	   generateBreadcrumbJasaCuttingBetonPost(
        urlMappingJasaPemadatanTanahLahanFromMoneyPageMoneyPage1,
        cleanUrlJasaCuttingBetonPost,
       [
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Pematangan Lahan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-pematangan-lahan.html' },
            { name: 'Perbandingan Jasa Pematangan Lahan', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-pematangan-lahan.html' },
            { name: 'Jasa Pematangan Lahan', url: 'https://www.betonjayareadymix.com/p/jasa-pematangan-lahan.html' },
            { name: 'Jasa Pemadatan Tanah Lahan', url: 'https://www.betonjayareadymix.com/p/jasa-pemadatan-tanah-lahan.html' }
        ],
        'JASA_KONSTRUKSI'
    );
   }

	 //JasaPemadatanTanahLahanPost
   if (urlMappingJasaPembersihanLahanPematanganFromMoneyPageMoneyPage1[cleanUrlJasaCuttingBetonPost]) {
     generateBreadcrumbJasaCuttingBetonPost(
        urlMappingJasaPembersihanLahanPematanganFromMoneyPageMoneyPage1,
        cleanUrlJasaCuttingBetonPost,
       [
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Pematangan Lahan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-pematangan-lahan.html' },
            { name: 'Perbandingan Jasa Pematangan Lahan', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-pematangan-lahan.html' },
            { name: 'Jasa Pematangan Lahan', url: 'https://www.betonjayareadymix.com/p/jasa-pematangan-lahan.html' },
            { name: 'Jasa Pembersihan Lahan Pematangan', url: 'https://www.betonjayareadymix.com/p/jasa-pembersihan-lahan-pematangan.html' }
        ],
        'JASA_KONSTRUKSI'
    );
   }

//SUB JasaPerataandanGradingLahan
if (urlMappingJasaPerataandanGradingLahanFromMoneyPageMoneyPage1[cleanUrlJasaCuttingBetonPost]) {
   	   	   generateBreadcrumbJasaCuttingBetonPost(
        urlMappingJasaPerataandanGradingLahanFromMoneyPageMoneyPage1,
        cleanUrlJasaCuttingBetonPost,
       [
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Pematangan Lahan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-pematangan-lahan.html' },
            { name: 'Perbandingan Jasa Pematangan Lahan', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-pematangan-lahan.html' },
            { name: 'Jasa Pematangan Lahan', url: 'https://www.betonjayareadymix.com/p/jasa-pematangan-lahan.html' },
            { name: 'Jasa Perataan dan Grading Lahan', url: 'https://www.betonjayareadymix.com/p/jasa-perataan-dan-grading-lahan.html' }
        ],
        'JASA_KONSTRUKSI'
    );
}

//SUB JasaElevasiLahan
 if (urlMappingJasaPekerjaanElevasiLahanFromMoneyPageMoneyPage1[cleanUrlJasaCuttingBetonPost]) {
   generateBreadcrumbJasaCuttingBetonPost(
        urlMappingJasaPekerjaanElevasiLahanFromMoneyPageMoneyPage1,
        cleanUrlJasaCuttingBetonPost,
       [
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Pematangan Lahan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-pematangan-lahan.html' },
            { name: 'Perbandingan Jasa Pematangan Lahan', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-pematangan-lahan.html' },
            { name: 'Jasa Pematangan Lahan', url: 'https://www.betonjayareadymix.com/p/jasa-pematangan-lahan.html' },
            { name: 'Jasa Pekerjaan Elevasi Lahan', url: 'https://www.betonjayareadymix.com/p/jasa-pekerjaan-elevasi-lahan.html' }
        ],
        'JASA_KONSTRUKSI'
    );
 }

	//SUB JasaBaseCourseLahan
 if (urlMappingJasaBaseCourseLahanFromMoneyPageMoneyPage1[cleanUrlJasaCuttingBetonPost]) {
       generateBreadcrumbJasaCuttingBetonPost(
        urlMappingJasaBaseCourseLahanFromMoneyPageMoneyPage1,
        cleanUrlJasaCuttingBetonPost,
       [
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Pematangan Lahan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-pematangan-lahan.html' },
            { name: 'Perbandingan Jasa Pematangan Lahan', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-pematangan-lahan.html' },
            { name: 'Jasa Pematangan Lahan', url: 'https://www.betonjayareadymix.com/p/jasa-pematangan-lahan.html' },
            { name: 'Jasa Base Course Lahan', url: 'https://www.betonjayareadymix.com/p/jasa-base-course-lahan.html' }
        ],
        'JASA_KONSTRUKSI'
    ); 
   }

//SUB JasaStabilisasiTanahLahan
 if (urlMappingJasaStabilisasiTanahLahanFromMoneyPageMoneyPage1[cleanUrlJasaCuttingBetonPost]) {
     generateBreadcrumbJasaCuttingBetonPost(
        urlMappingJasaStabilisasiTanahLahanFromMoneyPageMoneyPage1,
        cleanUrlJasaCuttingBetonPost,
       [
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Pematangan Lahan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-pematangan-lahan.html' },
            { name: 'Perbandingan Jasa Pematangan Lahan', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-pematangan-lahan.html' },
            { name: 'Jasa Pematangan Lahan', url: 'https://www.betonjayareadymix.com/p/jasa-pematangan-lahan.html' },
            { name: 'Jasa Stabilisasi Tanah Lahan', url: 'https://www.betonjayareadymix.com/p/jasa-stabilisasi-tanah-lahan.html' }
        ],
        'JASA_KONSTRUKSI'
    ); 
   }

		//SUB JasaDrainaseLahanPost
 if (urlMappingJasaPemasanganDrainaseLahanFromMoneyPageMoneyPage1[cleanUrlJasaCuttingBetonPost]) {
	 generateBreadcrumbJasaCuttingBetonPost(
        urlMappingJasaPemasanganDrainaseLahanFromMoneyPageMoneyPage1,
        cleanUrlJasaCuttingBetonPost,
       [
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Pematangan Lahan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-pematangan-lahan.html' },
            { name: 'Perbandingan Jasa Pematangan Lahan', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-pematangan-lahan.html' },
            { name: 'Jasa Pematangan Lahan', url: 'https://www.betonjayareadymix.com/p/jasa-pematangan-lahan.html' },
            { name: 'Jasa Pemasangan Drainase Lahan', url: 'https://www.betonjayareadymix.com/p/jasa-pemasangan-drainase-lahan.html' }
        ],
        'JASA_KONSTRUKSI'
    ); 
   }

		//SUB JasaGeotekstilLahan
 if (urlMappingJasaPemasanganGeotekstilLahanFromMoneyPageMoneyPage1[cleanUrlJasaCuttingBetonPost]) {
        generateBreadcrumbJasaCuttingBetonPost(
        urlMappingJasaPemasanganGeotekstilLahanFromMoneyPageMoneyPage1,
        cleanUrlJasaCuttingBetonPost,
       [
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Pematangan Lahan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-pematangan-lahan.html' },
            { name: 'Perbandingan Jasa Pematangan Lahan', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-pematangan-lahan.html' },
            { name: 'Jasa Pematangan Lahan', url: 'https://www.betonjayareadymix.com/p/jasa-pematangan-lahan.html' },
            { name: 'Jasa Pemasangan Geotekstil Lahan', url: 'https://www.betonjayareadymix.com/p/jasa-pemasangan-geotekstil-lahan.html' }
        ],
        'JASA_KONSTRUKSI'
    ); 
   }

		//SUB JasaGeotekstilLahan
 if (urlMappingJasaPersiapanPondasiLahanFromMoneyPageMoneyPage1[cleanUrlJasaCuttingBetonPost]) {
 generateBreadcrumbJasaCuttingBetonPost(
        urlMappingJasaPersiapanPondasiLahanFromMoneyPageMoneyPage1,
        cleanUrlJasaCuttingBetonPost,
       [
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Pematangan Lahan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-pematangan-lahan.html' },
            { name: 'Perbandingan Jasa Pematangan Lahan', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-pematangan-lahan.html' },
            { name: 'Jasa Pematangan Lahan', url: 'https://www.betonjayareadymix.com/p/jasa-pematangan-lahan.html' },
            { name: 'Jasa Persiapan Pondasi Lahan', url: 'https://www.betonjayareadymix.com/p/jasa-persiapan-pondasi-lahan.html' }
        ],
        'JASA_KONSTRUKSI'
    ); 
   }
	
 //SUB JasaUjiTanahPost
 if (urlMappingJasaSondirTanahFromMoneyMaster1MoneyPage[cleanUrlJasaCuttingBetonPost]) {
         generateBreadcrumbJasaKonstruksi(
        urlMappingJasaSondirTanahFromMoneyMaster1MoneyPage,
        cleanUrlJasaCuttingBetonPost,
        [
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Uji Tanah', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-uji-tanah.html' },
            { name: 'Perbandingan Jasa Uji Tanah', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-uji-tanah.html' },
            { name: 'Jasa Uji Tanah', url: 'https://www.betonjayareadymix.com/p/jasa-uji-tanah.html' },
            { name: 'Jasa Sondir Tanah', url: 'https://www.betonjayareadymix.com/p/jasa-sondir-tanah.html' }
        ],
        'JASA_KONSTRUKSI'
    );
   }
if (urlMappingJasaCptTanahFromMoneyMaster1MoneyPage[cleanUrlJasaCuttingBetonPost]) {
         generateBreadcrumbJasaKonstruksi(
        urlMappingJasaCptTanahFromMoneyMaster1MoneyPage,
        cleanUrlJasaCuttingBetonPost,
        [
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Uji Tanah', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-uji-tanah.html' },
            { name: 'Perbandingan Jasa Uji Tanah', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-uji-tanah.html' },
            { name: 'Jasa Uji Tanah', url: 'https://www.betonjayareadymix.com/p/jasa-uji-tanah.html' },
            { name: 'Jasa Cpt Tanah', url: 'https://www.betonjayareadymix.com/p/jasa-cpt-tanah.html' }
        ],
        'JASA_KONSTRUKSI'
    );
   }
  if (urlMappingJasaBoringTanahFromMoneyMaster1MoneyPage[cleanUrlJasaCuttingBetonPost]) {
         generateBreadcrumbJasaKonstruksi(
        urlMappingJasaBoringTanahFromMoneyMaster1MoneyPage,
        cleanUrlJasaCuttingBetonPost,
        [
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Uji Tanah', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-uji-tanah.html' },
            { name: 'Perbandingan Jasa Uji Tanah', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-uji-tanah.html' },
            { name: 'Jasa Uji Tanah', url: 'https://www.betonjayareadymix.com/p/jasa-uji-tanah.html' },
            { name: 'Jasa Boring Tanah', url: 'https://www.betonjayareadymix.com/p/jasa-boring-tanah.html' }
        ],
        'JASA_KONSTRUKSI'
    );
   }
  if (urlMappingJasaLabTanahFromMoneyMaster1MoneyPage[cleanUrlJasaCuttingBetonPost]) {
         generateBreadcrumbJasaKonstruksi(
        urlMappingJasaLabTanahFromMoneyMaster1MoneyPage,
        cleanUrlJasaCuttingBetonPost,
        [
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Uji Tanah', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-uji-tanah.html' },
            { name: 'Perbandingan Jasa Uji Tanah', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-uji-tanah.html' },
            { name: 'Jasa Uji Tanah', url: 'https://www.betonjayareadymix.com/p/jasa-uji-tanah.html' },
            { name: 'Jasa Lab Tanah', url: 'https://www.betonjayareadymix.com/p/jasa-lab-tanah.html' }
        ],
        'JASA_KONSTRUKSI'
    );
   }
if (urlMappingJasaUjiPenetrasiFromMoneyMaster1MoneyPage[cleanUrlJasaCuttingBetonPost]) {
         generateBreadcrumbJasaKonstruksi(
        urlMappingJasaUjiPenetrasiFromMoneyMaster1MoneyPage,
        cleanUrlJasaCuttingBetonPost,
        [
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Uji Tanah', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-uji-tanah.html' },
            { name: 'Perbandingan Jasa Uji Tanah', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-uji-tanah.html' },
            { name: 'Jasa Uji Tanah', url: 'https://www.betonjayareadymix.com/p/jasa-uji-tanah.html' },
            { name: 'Jasa Lab Tanah', url: 'https://www.betonjayareadymix.com/p/jasa-lab-tanah.html' }
        ],
        'JASA_KONSTRUKSI'
    );
   }
if (urlMappingJasaUjiPenetrasiFromMoneyMaster1MoneyPage[cleanUrlJasaCuttingBetonPost]) {
         generateBreadcrumbJasaKonstruksi(
        urlMappingJasaUjiPenetrasiFromMoneyMaster1MoneyPage,
        cleanUrlJasaCuttingBetonPost,
        [
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Uji Tanah', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-uji-tanah.html' },
            { name: 'Perbandingan Jasa Uji Tanah', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-uji-tanah.html' },
            { name: 'Jasa Uji Tanah', url: 'https://www.betonjayareadymix.com/p/jasa-uji-tanah.html' },
            { name: 'Jasa Lab Tanah', url: 'https://www.betonjayareadymix.com/p/jasa-lab-tanah.html' }
        ],
        'JASA_KONSTRUKSI'
    );
   }
	
});
