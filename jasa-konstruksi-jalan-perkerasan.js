console.log('[jasa-jalan-perkerasan-post] 📄 File loaded, waiting for DOM...');

const urlMappingJasaPerkerasanJalanFromMoneyMaster1MoneyPage = {
 // ============================================================
// 📌 MP PARENT - JASA PERKERASAN JALAN METODE (LEVEL 5)
// ============================================================
"https://www.betonjayareadymix.com/p/jasa-perkerasan-jalan-metode.html": "Jasa Perkerasan Jalan Metode",  // MP Parent (L5)
// ============================================================
// 📌 MP PARENT - JASA PERKERASAN JALAN LAYANAN (LEVEL 5)
// ============================================================
"https://www.betonjayareadymix.com/p/jasa-perkerasan-jalan-layanan.html": "Jasa Perkerasan Jalan Layanan",  // MP Parent (L5)
// ============================================================
// 📌 MP LANGSUNG - JASA PEMBANGUNAN INFRASTRUKTUR JALAN (LEVEL 5)
// ============================================================
"https://www.betonjayareadymix.com/p/jasa-pembangunan-infrastruktur-jalan.html": "Jasa Pembangunan Infrastruktur Jalan"
};
const urlMappingJasaPengerasanJalanFromMoneyMaster1MoneyPage = {
// ============================================================
// 📌 MP PARENT - JASA LOKASI PENGERASAN JALAN (LEVEL 5)
// ============================================================
"https://www.betonjayareadymix.com/p/jasa-lokasi-pengerasan-jalan.html": "Jasa Lokasi Pengerasan Jalan",  // MP Parent (L5)
// ============================================================
// 📌 MP PARENT - JASA MATERIAL PENGERASAN JALAN (LEVEL 5)
// ============================================================
"https://www.betonjayareadymix.com/p/jasa-material-pengerasan-jalan.html": "Jasa Material Pengerasan Jalan",  // MP Parent (L5)
// ============================================================
// 📌 MP PARENT - JASA TUJUAN PENGERASAN JALAN (LEVEL 5)
// ============================================================
"https://www.betonjayareadymix.com/p/jasa-tujuan-pengerasan-jalan.html": "Jasa Tujuan Pengerasan Jalan",  // MP Parent (L5)

// ============================================================
// 📌 MP LANGSUNG - JASA PEMADATAN DAN PERSIAPAN TANAH JALAN (LEVEL 5)
// ============================================================
"https://www.betonjayareadymix.com/p/jasa-pemadatan-dan-persiapan-tanah-jalan.html": "Jasa Pemadatan dan Persiapan Tanah Jalan"
};
// ============================================================
// JASA PEMBANGUNAN INFRASTRUKTUR JALAN - SUB2 (MASTER/HUB PAGE)
// ============================================================
// 🧠 SEO NOTE: Halaman ini adalah MASTER/HUB PAGE untuk semua layanan pembangunan jalan.
// Konten: Penjelasan lengkap, daftar harga, jenis layanan, material, metode, FAQ.
// Intent: Commercial Investigation + Transactional (karena ada harga & CTA).
// Parent: Jasa Jalan & Perkerasan (/p/jasa-jalan-perkerasan.html)
// Breadcrumb: Home > Jasa Konstruksi > Jasa Jalan & Perkerasan > Jasa Pembangunan Infrastruktur Jalan (4 level)
// ============================================================

const urlMappingJasaPembangunanInfrastrukturJalanFromMoneyPageMoneyPage1 = {
  // ============================================================
  // [SUB2] - MASTER / HUB PAGE (WAJIB ADA) sudah ada di urlMappingJalan di jasa konstruksi
  // ============================================================
 // "https://www.betonjayareadymix.com/p/jasa-pembangunan-infrastruktur-jalan.html": "Jasa Pembangunan Infrastruktur Jalan",   (HUB PAGE)
  
  // ============================================================
  // [SUB2] - SUB-PILLAR TIPE 2 (LAYANAN PEMBANGUNAN JALAN PER JENIS LOKASI)
  // 🧠 TYPE: SUB2 (WAJIB tampil di breadcrumb karena spesifik)
  // Breadcrumb (4 level, skip HUB PAGE): Home > Jasa Konstruksi > Jasa Jalan & Perkerasan > Jasa Pembangunan Jalan Lingkungan
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-pembangunan-jalan-lingkungan.html": "Jasa Pembangunan Jalan Lingkungan",  
  "https://www.betonjayareadymix.com/p/jasa-pembangunan-jalan-perdesaan.html": "Jasa Pembangunan Jalan Perdesaan",  
  "https://www.betonjayareadymix.com/p/jasa-pembangunan-jalan-raya.html": "Jasa Pembangunan Jalan Raya",  
  "https://www.betonjayareadymix.com/p/jasa-pembangunan-jalan-kawasan-industri.html": "Jasa Pembangunan Jalan Kawasan Industri",  
  "https://www.betonjayareadymix.com/p/jasa-pembangunan-jalan-perumahan.html": "Jasa Pembangunan Jalan Perumahan",  
  "https://www.betonjayareadymix.com/p/jasa-pembangunan-jalan-akses-proyek.html": "Jasa Pembangunan Jalan Akses Proyek",  
  "https://www.betonjayareadymix.com/p/jasa-pembangunan-jalan-trotoar.html": "Jasa Pembangunan Jalan Trotoar",  
  "https://www.betonjayareadymix.com/p/jasa-pembangunan-jalan-setapak.html": "Jasa Pembangunan Jalan Setapak",  
  "https://www.betonjayareadymix.com/p/jasa-pembangunan-jalan-setapak-trotoar.html": "Jasa Pembangunan Jalan Setapak Trotoar",  
  "https://www.betonjayareadymix.com/p/jasa-pembangunan-area-pejalan-kaki.html": "Jasa Pembangunan Area Pejalan Kaki"  
};

// ============================================================
// 🟡 SARAN TAMBAHAN URL (OPTIONAL)
// ============================================================
/*
📌 URL YANG DISARANKAN UNTUK DITAMBAHKAN (JIKA KONTEN MEMADAI):

| URL | Nama Halaman | TYPE | Parent | Alasan SEO |
|-----|--------------|------|--------|------------|
| /p/jasa-pembangunan-jalan-aspal.html | Jasa Pembangunan Jalan Aspal | SUB2 | Jasa Pembangunan Infrastruktur Jalan | Menarget keyword spesifik jenis perkerasan aspal |
| /p/jasa-pembangunan-jalan-beton.html | Jasa Pembangunan Jalan Beton | SUB2 | Jasa Pembangunan Infrastruktur Jalan | Menarget keyword spesifik jenis perkerasan beton |
| /p/jasa-pembangunan-jalan-hotmix.html | Jasa Pembangunan Jalan Hotmix | SUB2 | Jasa Pembangunan Infrastruktur Jalan | Menarget keyword populer "hotmix" |

📌 CATATAN: URL di atas disarankan hanya jika kontennya memadai.
Jika konten tipis, lebih baik digabung ke halaman induk.
*/

// ============================================================
// 🔴 CATATAN PENTING - STATUS HUB PAGE
// ============================================================
/*
📌 MENGAPA HUB PAGE TIDAK MASUK SEBAGAI SUB1?

| Kriteria | SUB1 (Bridge) | HUB PAGE (Master) | Status Halaman Ini |
|----------|---------------|-------------------|-------------------|
| Fungsi | Jembatan ke MONEY page | Pintu masuk ke layanan turunan | ✅ HUB PAGE |
| Konten | 40% edukasi, 30% evaluasi, 30% decision | Komprehensif, daftar layanan, harga | ✅ HUB PAGE |
| CTA | Soft ke MONEY page | Hard (langsung konsultasi) | ✅ HUB PAGE |
| Parent | Bisa langsung dari PILLAR | Di bawah SUB2 (Jasa Jalan & Perkerasan) | ✅ HUB PAGE |

📌 KESIMPULAN: Halaman ini adalah [SUB2] - MASTER / HUB PAGE, BUKAN SUB1.
*/

// ============================================================
// JASA PEMADATAN & PERSIAPAN TANAH JALAN - SUB2 MASTER & TURUNAN
// ============================================================
// 🧠 SEO NOTE: Cluster ini fokus ke layanan persiapan tanah untuk konstruksi jalan.
// Intent: Commercial Investigation (user riset jasa persiapan tanah jalan).
// Parent: Jasa Jalan & Perkerasan (/p/jasa-jalan-perkerasan.html)
// ============================================================

const urlMappingJasaPemadatanPersiapanTanahJalanFromMoneyPageMoneyPage1 = {
  // ============================================================
  // [SUB2] - MASTER PAGE (HALAMAN INDUK) - sudah ada di urlMappingJalan
  // ============================================================
  // "https://www.betonjayareadymix.com/p/jasa-pemadatan-dan-persiapan-tanah-jalan.html": "Jasa Pemadatan & Persiapan Tanah Jalan",   (HUB PAGE)
  
  // ============================================================
  // [SUB2] - TURUNAN (LAYANAN SPESIFIK)
  // 🧠 TYPE: SUB2 (WAJIB tampil di breadcrumb karena spesifik)
  // Breadcrumb (4 level, skip HUB PAGE): Home > Jasa Konstruksi > Jasa Jalan & Perkerasan > Jasa Pengupasan Lahan Jalan
  // ============================================================
  
  // ✅ VALID - KONTEN ADA
  "https://www.betonjayareadymix.com/p/jasa-pengupasan-lahan-jalan.html": "Jasa Pengupasan Lahan Jalan",  
  "https://www.betonjayareadymix.com/p/jasa-cut-and-fill-jalan.html": "Jasa Cut and Fill Jalan",  
  "https://www.betonjayareadymix.com/p/jasa-urugan-tanah-jalan.html": "Jasa Urugan Tanah Jalan",  
  "https://www.betonjayareadymix.com/p/jasa-stabilisasi-tanah-jalan.html": "Jasa Stabilisasi Tanah Jalan",  
  

  "https://www.betonjayareadymix.com/p/jasa-pemadatan-tanah-jalan.html": "Jasa Pemadatan Tanah Jalan",  
  "https://www.betonjayareadymix.com/p/jasa-perkerasan-tanah-subgrade.html": "Jasa Perkerasan Tanah Subgrade" 
};

// ============================================================
// 🧠 SEO NOTE - MASALAH BREADCRUMB (5 LEVEL)
// ============================================================
/*
⚠️ PERHATIAN: Breadcrumb untuk halaman turunan mencapai 5 level JIKA menggunakan master page.

📌 SOLUSI BREADCRUMB (SKIP HUB PAGE):

Untuk halaman turunan (seperti Jasa Pemadatan Tanah Jalan), gunakan breadcrumb 4 level:
Home > Jasa Konstruksi > Jasa Jalan & Perkerasan > Jasa Pemadatan Tanah Jalan

Alasan skip: "Jasa Pemadatan & Persiapan Tanah Jalan" di-skip karena halaman tersebut hanya sebagai hub/pengelompokan.

📌 ATURAN BREADCRUMB YANG DITERAPKAN:
- Master page: 4 level (Home > Jasa Konstruksi > Jasa Jalan & Perkerasan > Master)
- Turunan: 4 level (skip master, langsung ke turunan)
*/

// ============================================================
// 🔴 SARAN PERBAIKAN - UNTUK URL KONTEN KOSONG
// ============================================================
/*
🧠 SEO CANNIBAL & CONTENT FIX:

| No | URL | Masalah | Solusi | Prioritas |
|----|-----|---------|--------|-----------|
| 1 | /p/jasa-pemadatan-tanah-jalan.html | Konten kosong (hanya template) | ⚠️ OPSI A: Isi konten minimal 500 kata ⚠️ OPSI B: Redirect ke master page | 🟡 MEDIUM |
| 2 | /p/jasa-perkerasan-tanah-subgrade.html | Konten kosong (hanya template) | ⚠️ OPSI A: Isi konten tentang subgrade ⚠️ OPSI B: Redirect ke /p/jasa-perkerasan-jalan.html | 🟡 MEDIUM |

📌 REKOMENDASI TERBAIK: ISIKAN KONTEN untuk kedua halaman tersebut.
*/

// ============================================================
// JASA PERKERASAN JALAN - SUB2 (HUB PAGE & CHILD PAGES)
// ============================================================
// 🧠 SEO NOTE: Cluster ini fokus ke layanan perkerasan jalan (lapisan permukaan).
// Intent: Commercial Investigation (user riset jenis perkerasan jalan).
// Parent: Jasa Jalan & Perkerasan (/p/jasa-jalan-perkerasan.html)
// ============================================================

const urlMappingJasaPerkerasanJalanMetodeFromMoneyPageMoneyPage1 = {
 // Child di bawah MP Parent Metode
"https://www.betonjayareadymix.com/p/jasa-timbunan-subbase-jalan.html": "Jasa Timbunan Subbase Jalan",
"https://www.betonjayareadymix.com/p/jasa-perkerasan-base-course-jalan.html": "Jasa Perkerasan Base Course Jalan",
"https://www.betonjayareadymix.com/p/jasa-perkerasan-jalan-kerikil.html": "Jasa Perkerasan Jalan Kerikil",
"https://www.betonjayareadymix.com/p/jasa-perkuatan-dasar-tanah-jalan.html": "Jasa Perkuatan Dasar Tanah Jalan",
"https://www.betonjayareadymix.com/p/jasa-perkerasan-jalan-beton.html": "Jasa Perkerasan Jalan Beton",
"https://www.betonjayareadymix.com/p/jasa-perkerasan-jalan-aspal.html": "Jasa Perkerasan Jalan Aspal",
"https://www.betonjayareadymix.com/p/jasa-perkerasan-jalan-komposit.html": "Jasa Perkerasan Jalan Komposit",
"https://www.betonjayareadymix.com/p/jasa-perkerasan-agregat-jalan.html": "Jasa Perkerasan Agregat Jalan",
"https://www.betonjayareadymix.com/p/jasa-perkerasan-jalan-semi-rigid.html": "Jasa Perkerasan Jalan Semi Rigid"
};
const urlMappingJasaPerkerasanJalanLayananFromMoneyPageMoneyPage1 = {
// Child di bawah MP Parent Layanan
"https://www.betonjayareadymix.com/p/jasa-pengecoran-jalan-beton.html": "Jasa Pengecoran Jalan Beton",
"https://www.betonjayareadymix.com/p/jasa-pengaspalan-jalan.html": "Jasa Pengaspalan Jalan",
    "https://www.betonjayareadymix.com/p/jasa-pasang-paving.html": "Jasa Pasang Paving"
//"https://www.betonjayareadymix.com/p/jasa-paving-block-jalan.html": "Jasa Paving Block Jalan"
};

const urlMappingJasaPengaspalanJalanBetonFromMoneyPage1MoneyPage2 = {
"https://www.betonjayareadymix.com/p/harga-jasa-pengaspalan-jalan.html": "Harga Jasa Pengaspalan Jalan",
"https://www.betonjayareadymix.com/p/jasa-pengaspalan-jalan-per-meter.html": "Jasa Pengaspalan Jalan Per Meter",
"https://www.betonjayareadymix.com/p/jasa-pengaspalan-jalan-hotmix.html": "Jasa Pengaspalan Jalan Hotmix"
};
const urlMappingJasaPengecoranJalanBetonFromMoneyPage1MoneyPage2 = {
"https://www.betonjayareadymix.com/p/harga-jasa-pengecoran-jalan-beton.html": "Harga Jasa Pengecoran Jalan Beton",
"https://www.betonjayareadymix.com/p/jasa-pengecoran-jalan-beton-per-meter.html": "Jasa Pengecoran Jalan Beton Per Meter",
"https://www.betonjayareadymix.com/p/jasa-pengecoran-jalan-beton-ready-mix.html": "Jasa Pengecoran Jalan Beton Ready Mix"
};
const urlMappingJasaPasangPavingFromMoneyPage1MoneyPage2 = {
"https://www.betonjayareadymix.com/p/harga-jasa-pasang-paving.html": "Harga Jasa Pasang Paving",
"https://www.betonjayareadymix.com/p/jasa-pasang-paving-per-meter.html": "Jasa Pasang Paving Per Meter",
"https://www.betonjayareadymix.com/p/jasa-pasang-paving-block.html": "Jasa Pasang Paving Block"
};
/*
const urlMappingJasaPerkerasanJalan = {
  // ============================================================
  // [SUB2] - HUB PAGE (MASTER PERKERASAN JALAN) - sudah ada di urlMappingJalan
  // ============================================================
  // "https://www.betonjayareadymix.com/p/jasa-perkerasan-jalan.html": "Jasa Perkerasan Jalan",   (HUB PAGE)

  // ============================================================
  // [SUB2] - JENIS PERKERASAN JALAN (LAYANAN UTAMA)
  // 🧠 TYPE: SUB2 (WAJIB tampil di breadcrumb karena spesifik)
  // Breadcrumb (4 level, skip HUB PAGE): Home > Jasa Konstruksi > Jasa Jalan & Perkerasan > Jasa Perkerasan Jalan Beton
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-perkerasan-jalan-beton.html": "Jasa Perkerasan Jalan Beton",  
  "https://www.betonjayareadymix.com/p/jasa-perkerasan-jalan-aspal.html": "Jasa Perkerasan Jalan Aspal",  
  "https://www.betonjayareadymix.com/p/jasa-perkerasan-jalan-komposit.html": "Jasa Perkerasan Jalan Komposit",  
  "https://www.betonjayareadymix.com/p/jasa-perkerasan-jalan-semi-rigid.html": "Jasa Perkerasan Jalan Semi Rigid",  

  // ============================================================
  // [SUB2] - METODE & MATERIAL PERKERASAN
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-perkerasan-base-course-jalan.html": "Jasa Perkerasan Base Course Jalan",  
  "https://www.betonjayareadymix.com/p/jasa-perkerasan-agregat-jalan.html": "Jasa Perkerasan Agregat Jalan",  
  "https://www.betonjayareadymix.com/p/jasa-perkerasan-jalan-kerikil.html": "Jasa Perkerasan Jalan Kerikil",  

  // ============================================================
  // [SUB2] - PROSES & TEKNIK PERKERASAN
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-pengaspalan-jalan.html": "Jasa Pengaspalan Jalan",  
  "https://www.betonjayareadymix.com/p/jasa-pengecoran-jalan-beton.html": "Jasa Pengecoran Jalan Beton",  
  "https://www.betonjayareadymix.com/p/jasa-paving-block-jalan.html": "Jasa Paving Block Jalan",  

  // ============================================================
  // [SUB2] - LAPISAN & STRUKTUR JALAN
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-timbunan-subbase-jalan.html": "Jasa Timbunan Subbase Jalan",  
  "https://www.betonjayareadymix.com/p/jasa-perkuatan-dasar-tanah-jalan.html": "Jasa Perkuatan Dasar Tanah Jalan"  
};
*/

// ============================================================
// 🔴 CATATAN PENTING - REDUNDANSI DENGAN JASA PENGERASAN JALAN
// ============================================================
/*
🧠 SEO NOTE - PERBEDAAN INTENT:

| Halaman | Fokus Utama | Status |
|---------|-------------|--------|
| Jasa Perkerasan Jalan | Lapisan PERMUKAAN jalan (aspal, beton, komposit) | ✅ PERTAHANKAN di const ini |
| Jasa Pengerasan Jalan | Proses PENGERASAN lapisan BAWAH (base course, subbase, agregat) | ✅ PERTAHANKAN di const terpisah |

📌 YANG TIDAK DIMASUKKAN KE CONST INI:
- /p/jasa-pengerasan-jalan.html → sudah ada di urlMappingJasaPengerasanJalan
- /p/jasa-pengerasan-jalan-*.html → semua sudah ada di urlMappingJasaPengerasanJalan

📌 BREADCRUMB UNTUK CHILD PAGES (4 level, skip HUB PAGE):
Home > Jasa Konstruksi > Jasa Jalan & Perkerasan > Jasa Perkerasan Jalan Beton

📌 REKOMENDASI BREADCRUMB (SKIP HUB PAGE):
HUB PAGE "Jasa Perkerasan Jalan" di-skip karena hanya sebagai pengelompokan.

/*  jadi sub post Jasa Paving Block Jalan
  "https://www.betonjayareadymix.com/p/jasa-pemasangan-paving-block.html": "Jasa Pemasangan Paving Block" */
	
/* jadi sub post Perkerasan jalan Beton
  "https://www.betonjayareadymix.com/p/jasa-perkerasan-jalan-komposit.html": "Jasa Perkerasan Jalan Komposit",
  */
	
/* jadi sub post Jasa Perkerasan Jalan Beton
  "https://www.betonjayareadymix.com/p/jasa-perkerasan-jalan-rabat-beton.html": "Jasa Perkerasan Jalan Rabat Beton"
  */
/* jadi sub post Jasa Perkerasan Jalan Aspal
  "https://www.betonjayareadymix.com/p/jasa-perkerasan-jalan-aspal-hotmix.html": "Jasa Perkerasan Jalan Aspal Hotmix"
  */

// ============================================================
// JASA PENGERASAN JALAN - SUB2
// ============================================================
// 🧠 SEO NOTE: Cluster ini fokus ke layanan pengerasan jalan (metode & material).
// Intent: Commercial Investigation (user riset metode pengerasan jalan).
// Parent: Jasa Jalan & Perkerasan (/p/jasa-jalan-perkerasan.html)
// Breadcrumb: Home > Jasa Konstruksi > Jasa Jalan & Perkerasan > [Nama Layanan] (4 level)
// ============================================================

const urlMappingJasaLokasiPengerasanJalanFromMoneyPageMoneyPage1 = {
// Child di bawah MP Parent Lokasi
"https://www.betonjayareadymix.com/p/jasa-pengerasan-jalan-proyek.html": "Jasa Pengerasan Jalan Proyek",
"https://www.betonjayareadymix.com/p/jasa-pengerasan-jalan-akses.html": "Jasa Pengerasan Jalan Akses",
"https://www.betonjayareadymix.com/p/jasa-pengerasan-jalan-perumahan.html": "Jasa Pengerasan Jalan Perumahan",
"https://www.betonjayareadymix.com/p/jasa-pengerasan-jalan-lingkungan.html": "Jasa Pengerasan Jalan Lingkungan",
"https://www.betonjayareadymix.com/p/jasa-pengerasan-jalan-perdesaan.html": "Jasa Pengerasan Jalan Perdesaan",
"https://www.betonjayareadymix.com/p/jasa-pengerasan-jalan-industri.html": "Jasa Pengerasan Jalan Industri",
"https://www.betonjayareadymix.com/p/jasa-pengerasan-jalan-area-parkir.html": "Jasa Pengerasan Jalan Area Parkir"
};
const urlMappingJasaMaterialPengerasanJalanFromMoneyPageMoneyPage1 = {
// Child di bawah MP Parent Material
"https://www.betonjayareadymix.com/p/jasa-pengerasan-jalan-tanah.html": "Jasa Pengerasan Jalan Tanah",
"https://www.betonjayareadymix.com/p/jasa-pengerasan-jalan-batu.html": "Jasa Pengerasan Jalan Batu",
"https://www.betonjayareadymix.com/p/jasa-pengerasan-jalan-kerikil.html": "Jasa Pengerasan Jalan Kerikil",
"https://www.betonjayareadymix.com/p/jasa-pengerasan-jalan-base-course.html": "Jasa Pengerasan Jalan Base Course",
"https://www.betonjayareadymix.com/p/jasa-pengerasan-jalan-sub-base.html": "Jasa Pengerasan Jalan Sub Base",
"https://www.betonjayareadymix.com/p/jasa-pengerasan-jalan-agregat.html": "Jasa Pengerasan Jalan Agregat",
"https://www.betonjayareadymix.com/p/jasa-pengerasan-jalan-makadam.html": "Jasa Pengerasan Jalan Makadam",
"https://www.betonjayareadymix.com/p/jasa-pengerasan-jalan-urugan-material.html": "Jasa Pengerasan Jalan Urugan Material",
"https://www.betonjayareadymix.com/p/jasa-pengerasan-jalan-urugan-tanah.html": "Jasa Pengerasan Jalan Urugan Tanah",
"https://www.betonjayareadymix.com/p/jasa-pengerasan-jalan-sirtu.html": "Jasa Pengerasan Jalan Sirtu",
"https://www.betonjayareadymix.com/p/jasa-pengerasan-jalan-lapisan-penetrasi.html": "Jasa Pengerasan Jalan Lapisan Penetrasi"
};
const urlMappingJasaTujuanPengerasanJalanFromMoneyPageMoneyPage1 = {
// Child di bawah MP Parent Tujuan
"https://www.betonjayareadymix.com/p/jasa-pengerasan-jalan-tahan-beban-berat.html": "Jasa Pengerasan Jalan Tahan Beban Berat",
"https://www.betonjayareadymix.com/p/jasa-pengerasan-jalan-ekonomis.html": "Jasa Pengerasan Jalan Ekonomis"
};
/*
const urlMappingJasaPengerasanJalan = {
  // ============================================================
  // ============================================================
  // "https://www.betonjayareadymix.com/p/jasa-pengerasan-jalan.html": "Jasa Pengerasan Jalan",   [MASTER]
  
  // ============================================================
  // [SUB2] - PENGERASAN PER LOKASI/FUNGSI
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-pengerasan-jalan-proyek.html": "Jasa Pengerasan Jalan Proyek",  
  "https://www.betonjayareadymix.com/p/jasa-pengerasan-jalan-akses.html": "Jasa Pengerasan Jalan Akses",  
  "https://www.betonjayareadymix.com/p/jasa-pengerasan-jalan-perumahan.html": "Jasa Pengerasan Jalan Perumahan",  
  "https://www.betonjayareadymix.com/p/jasa-pengerasan-jalan-lingkungan.html": "Jasa Pengerasan Jalan Lingkungan",  
  "https://www.betonjayareadymix.com/p/jasa-pengerasan-jalan-perdesaan.html": "Jasa Pengerasan Jalan Perdesaan",  
  "https://www.betonjayareadymix.com/p/jasa-pengerasan-jalan-industri.html": "Jasa Pengerasan Jalan Industri",  
  "https://www.betonjayareadymix.com/p/jasa-pengerasan-area-parkir.html": "Jasa Pengerasan Area Parkir",  
  "https://www.betonjayareadymix.com/p/jasa-pengerasan-jalan-tahan-beban-berat.html": "Jasa Pengerasan Jalan Tahan Beban Berat",  
  
  // ============================================================
  // [SUB2] - PENGERASAN BERDASARKAN MATERIAL
  // ⚠️ PERHATIAN: Bedakan dengan perkerasan agregat/base course
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-pengerasan-jalan-tanah.html": "Jasa Pengerasan Jalan Tanah",  
  "https://www.betonjayareadymix.com/p/jasa-pengerasan-jalan-batu.html": "Jasa Pengerasan Jalan Batu",  
  "https://www.betonjayareadymix.com/p/jasa-pengerasan-jalan-kerikil.html": "Jasa Pengerasan Jalan Kerikil",  
  "https://www.betonjayareadymix.com/p/jasa-pengerasan-jalan-sirtu.html": "Jasa Pengerasan Jalan Sirtu",  
  "https://www.betonjayareadymix.com/p/jasa-pengerasan-jalan-agregat.html": "Jasa Pengerasan Jalan Agregat",  
  "https://www.betonjayareadymix.com/p/jasa-pengerasan-jalan-makadam.html": "Jasa Pengerasan Jalan Makadam",  
  
  // ============================================================
  // [SUB2] - PENGERASAN BERDASARKAN LAPISAN
  // ⚠️ PERHATIAN: Fokus ke base course sebagai LAPISAN PENGERASAN (bukan perkerasan)
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-pengerasan-jalan-base-course.html": "Jasa Pengerasan Jalan Base Course",  
  "https://www.betonjayareadymix.com/p/jasa-pengerasan-jalan-subbase.html": "Jasa Pengerasan Jalan Sub Base",  
  "https://www.betonjayareadymix.com/p/jasa-pengerasan-jalan-lapis-penetrasi.html": "Jasa Pengerasan Jalan Lapis Penetrasi",  
  
  // ============================================================
  // [SUB2] - METODE PENGERASAN LAINNYA
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-pengerasan-jalan-urugan-material.html": "Jasa Pengerasan Jalan Urugan Material",  
  "https://www.betonjayareadymix.com/p/jasa-pengerasan-jalan-urugan-tanah.html": "Jasa Pengerasan Jalan Urugan Tanah",  
  "https://www.betonjayareadymix.com/p/jasa-pengerasan-jalan-ekonomis.html": "Jasa Pengerasan Jalan Ekonomis"  
};
*/


// Menyimpan elemen yang dihapus dalam variabel
let removedElementsJasaJalanPerkerasanKons = {};
// Fungsi untuk menghapus elemen berdasarkan ID
function removeCondition(conditionId) {
    // ✅ GUARD: Jangan hapus container utama
    if (conditionId === 'JasaKonsJalanPerkerasan') {
        console.warn('[jasa-jalan-perkerasan-post] ⚠️ Tidak boleh menghapus container utama: ' + conditionId);
        return;
    }

    const conditionElement = document.getElementById(conditionId);

    if (conditionElement) {
        removedElementsJasaJalanPerkerasanKons[conditionId] = conditionElement;
        conditionElement.remove();
        console.log('[jasa-jalan-perkerasan-post] 🔧 Removed: ' + conditionId);
    }
}

// Fungsi untuk mengembalikan elemen yang telah dihapus
function restoreCondition(conditionId) {
    const breadcrumb = document.querySelector('.breadcrumb');
    const elementToRestore = removedElementsJasaJalanPerkerasanKons[conditionId]; // Mendapatkan elemen yang disimpan

    if (elementToRestore) {
        breadcrumb.appendChild(elementToRestore); // Menambahkan elemen kembali ke dalam breadcrumb
        delete removedElementsJasaJalanPerkerasanKons[conditionId]; // Menghapus elemen dari objek setelah dikembalikan
    } else {
       console.warn(`[jasa-jalan-perkerasan-post] ⚠️ Elemen dengan ID ${conditionId} tidak ditemukan di removedElementsJasaJalanPerkerasanKons.`);

    }
}

// ═══════════════════════════════════════════════════════════
// [BAGIAN A] EARLY EXIT v2.0.0 — Pendekatan C
// ═══════════════════════════════════════════════════════════
(function() {
    'use strict';
    
    var cleanUrl = window.location.href.split(/[?#]/)[0];
    console.log('[jasa-jalan-perkerasan-post] 🔍 Check: ' + cleanUrl);
    
    var ALL_MAPPINGS = [
        urlMappingJasaPembangunanInfrastrukturJalanFromMoneyPageMoneyPage1,
        urlMappingJasaPemadatanPersiapanTanahJalanFromMoneyPageMoneyPage1,
        urlMappingJasaPerkerasanJalanFromMoneyMaster1MoneyPage,
        urlMappingJasaPerkerasanJalanMetodeFromMoneyPageMoneyPage1,
        urlMappingJasaPerkerasanJalanLayananFromMoneyPageMoneyPage1,
        urlMappingJasaPengaspalanJalanBetonFromMoneyPage1MoneyPage2,
        urlMappingJasaPengecoranJalanBetonFromMoneyPage1MoneyPage2,
        urlMappingJasaPasangPavingFromMoneyPage1MoneyPage2,
        urlMappingJasaPengerasanJalanFromMoneyMaster1MoneyPage,
        urlMappingJasaLokasiPengerasanJalanFromMoneyPageMoneyPage1,
        urlMappingJasaMaterialPengerasanJalanFromMoneyPageMoneyPage1,
        urlMappingJasaTujuanPengerasanJalanFromMoneyPageMoneyPage1
    ];
    
    // ✅ Pendekatan C: Loop + foundIndex + break
    var foundIndex = -1;
    var foundMappingName = '';
    
    for (var i = 0; i < ALL_MAPPINGS.length; i++) {
        if (!ALL_MAPPINGS[i] || typeof ALL_MAPPINGS[i] !== 'object') {
            console.warn('[jasa-jalan-perkerasan-post] ⚠️ Mapping #' + (i + 1) + ' bukan object — skip');
            continue;
        }
        if (ALL_MAPPINGS[i][cleanUrl]) {
            foundIndex = i;
            foundMappingName = ALL_MAPPINGS[i][cleanUrl];
            break;
        }
    }
    
    if (foundIndex === -1) {
        console.log('[jasa-jalan-perkerasan-post] ⏭️ SKIP — URL tidak cocok');
        window.__jasaJalanPerkerasanPostActive = false;
        return;
    }
    
    window.__jasaJalanPerkerasanPostActive = true;
    window.__jasaJalanPerkerasanPostMatchIndex = foundIndex;
    window.__jasaJalanPerkerasanPostMatchMappingName = foundMappingName;
    window.__jasaJalanPerkerasanPostMappings = ALL_MAPPINGS;
    
    console.log(
        '[jasa-jalan-perkerasan-post] ✅ Match di mapping #' + (foundIndex + 1) +
        ' — Label: "' + foundMappingName + '"' +
        ' — EXECUTE flag set'
    );
})();

// ═══════════════════════════════════════════════════════════
// [BAGIAN B] FUNGSI UTAMA
// ═══════════════════════════════════════════════════════════
function initJasaJalanPerkerasanPost() {
    // ⚡ Guard flag
    if (!window.__jasaJalanPerkerasanPostActive) {
        console.log('[jasa-jalan-perkerasan-post] ⏭️ Execute SKIP — URL tidak cocok');
        return;
    }
    
    console.log('[jasa-jalan-perkerasan-post] 🚀 Execute — URL cocok');
    
    var cleanUrlJasaJalanPerkerasanKons = window.location.href.split(/[?#]/)[0];
    var currentUrl = cleanUrlJasaJalanPerkerasanKons;
    
    // Cek elemen DOM
    var JasaKonsJalanPerkerasan = document.getElementById("JasaKonsJalanPerkerasan");
    if (!JasaKonsJalanPerkerasan) {
        console.error("[jasa-jalan-perkerasan-post] ❌ elemen Id JasaKonsJalanPerkerasan kondisi terhapus");
        return;
    }

   //SUB MAPPING JASA JALAN & PERKERASAN
if (urlMappingJasaPembangunanInfrastrukturJalanFromMoneyPageMoneyPage1[cleanUrlJasaJalanPerkerasanKons]) {
    generateBreadcrumbShared(
        urlMappingJasaPerkerasanJalanFromMoneyMaster1MoneyPage,
        cleanUrlJasaJalanPerkerasanKons,
       [
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Jalan & Perkerasan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-jalan-perkerasan.html' },
            { name: 'Perbandingan Jasa Jalan & Perkerasan', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-jalan-perkerasan.html' },
            { name: 'Jasa Jalan & Perkerasan', url: 'https://www.betonjayareadymix.com/p/jasa-jalan-perkerasan.html' },
            { name: 'Jasa Perkerasan Jalan', url: 'https://www.betonjayareadymix.com/p/jasa-perkerasan-jalan.html' },
            { name: 'Jasa Pembangunan Infrastruktur Jalan', url: 'https://www.betonjayareadymix.com/p/jasa-pembangunan-infrastruktur-jalan.html' }
        ],
        'JASA_KONSTRUKSI'
    );
}
       
   if (urlMappingJasaPemadatanPersiapanTanahJalanFromMoneyPageMoneyPage1[cleanUrlJasaJalanPerkerasanKons]) {
        generateBreadcrumbShared(
        urlMappingJasaPerkerasanJalanFromMoneyMaster1MoneyPage,
        cleanUrlJasaJalanPerkerasanKons,
       [
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Jalan & Perkerasan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-jalan-perkerasan.html' },
            { name: 'Perbandingan Jasa Jalan & Perkerasan', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-jalan-perkerasan.html' },
            { name: 'Jasa Jalan & Perkerasan', url: 'https://www.betonjayareadymix.com/p/jasa-jalan-perkerasan.html' },
            { name: 'Jasa Pengerasan Jalan', url: 'https://www.betonjayareadymix.com/p/jasa-pengerasan-jalan.html' },
            { name: 'Jasa Pemadatan dan Persiapan Tanah Jalan', url: 'https://www.betonjayareadymix.com/p/jasa-pemadatan-dan-persiapan-tanah-jalan.html' }
        ],
        'JASA_KONSTRUKSI'
    );
 }
	
   if (urlMappingJasaPerkerasanJalanFromMoneyMaster1MoneyPage[cleanUrlJasaJalanPerkerasanKons]) {
      generateBreadcrumbShared(
        urlMappingJasaPerkerasanJalanFromMoneyMaster1MoneyPage,
        cleanUrlJasaJalanPerkerasanKons,
       [
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Jalan & Perkerasan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-jalan-perkerasan.html' },
            { name: 'Perbandingan Jasa Jalan & Perkerasan', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-jalan-perkerasan.html' },
            { name: 'Jasa Jalan & Perkerasan', url: 'https://www.betonjayareadymix.com/p/jasa-jalan-perkerasan.html' },
            { name: 'Jasa Perkerasan Jalan', url: 'https://www.betonjayareadymix.com/p/jasa-perkerasan-jalan.html' }
        ],
        'JASA_KONSTRUKSI'
    );
}
if (urlMappingJasaPerkerasanJalanMetodeFromMoneyPageMoneyPage1[cleanUrlJasaJalanPerkerasanKons]) {
      generateBreadcrumbShared(
        urlMappingJasaPerkerasanJalanMetodeFromMoneyPageMoneyPage1,
        cleanUrlJasaJalanPerkerasanKons,
       [
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Jalan & Perkerasan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-jalan-perkerasan.html' },
            { name: 'Perbandingan Jasa Jalan & Perkerasan', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-jalan-perkerasan.html' },
            { name: 'Jasa Jalan & Perkerasan', url: 'https://www.betonjayareadymix.com/p/jasa-jalan-perkerasan.html' },
            { name: 'Jasa Perkerasan Jalan', url: 'https://www.betonjayareadymix.com/p/jasa-perkerasan-jalan.html' },
            { name: 'Jasa Perkerasan Jalan Metode', url: 'https://www.betonjayareadymix.com/p/jasa-perkerasan-jalan-metode.html' }
        ],
        'JASA_KONSTRUKSI'
    );
}
if (urlMappingJasaPerkerasanJalanLayananFromMoneyPageMoneyPage1[cleanUrlJasaJalanPerkerasanKons]) {
      generateBreadcrumbShared(
        urlMappingJasaPerkerasanJalanLayananFromMoneyPageMoneyPage1,
        cleanUrlJasaJalanPerkerasanKons,
       [
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Jalan & Perkerasan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-jalan-perkerasan.html' },
            { name: 'Perbandingan Jasa Jalan & Perkerasan', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-jalan-perkerasan.html' },
            { name: 'Jasa Jalan & Perkerasan', url: 'https://www.betonjayareadymix.com/p/jasa-jalan-perkerasan.html' },
            { name: 'Jasa Perkerasan Jalan', url: 'https://www.betonjayareadymix.com/p/jasa-perkerasan-jalan.html' },
            { name: 'Jasa Perkerasan Jalan Layanan', url: 'https://www.betonjayareadymix.com/p/jasa-perkerasan-jalan-layanan.html' }
        ],
        'JASA_KONSTRUKSI'
    );
}
	
if (urlMappingJasaPengaspalanJalanBetonFromMoneyPage1MoneyPage2[cleanUrlJasaJalanPerkerasanKons]) {
      generateBreadcrumbShared(
        urlMappingJasaPengaspalanJalanBetonFromMoneyPage1MoneyPage2,
        cleanUrlJasaJalanPerkerasanKons,
       [
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Jalan & Perkerasan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-jalan-perkerasan.html' },
            { name: 'Perbandingan Jasa Jalan & Perkerasan', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-jalan-perkerasan.html' },
            { name: 'Jasa Jalan & Perkerasan', url: 'https://www.betonjayareadymix.com/p/jasa-jalan-perkerasan.html' },
            { name: 'Jasa Perkerasan Jalan', url: 'https://www.betonjayareadymix.com/p/jasa-perkerasan-jalan.html' },
            { name: 'Jasa Perkerasan Jalan Layanan', url: 'https://www.betonjayareadymix.com/p/jasa-perkerasan-jalan-layanan.html' },
            { name: 'Jasa Pengaspalan Jalan', url: 'https://www.betonjayareadymix.com/p/jasa-pengaspalan-jalan.html' }
        ],
        'JASA_KONSTRUKSI'
    );
}
if (urlMappingJasaPengecoranJalanBetonFromMoneyPage1MoneyPage2[cleanUrlJasaJalanPerkerasanKons]) {
      generateBreadcrumbShared(
        urlMappingJasaPengecoranJalanBetonFromMoneyPage1MoneyPage2,
        cleanUrlJasaJalanPerkerasanKons,
       [
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Jalan & Perkerasan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-jalan-perkerasan.html' },
            { name: 'Perbandingan Jasa Jalan & Perkerasan', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-jalan-perkerasan.html' },
            { name: 'Jasa Jalan & Perkerasan', url: 'https://www.betonjayareadymix.com/p/jasa-jalan-perkerasan.html' },
            { name: 'Jasa Perkerasan Jalan', url: 'https://www.betonjayareadymix.com/p/jasa-perkerasan-jalan.html' },
            { name: 'Jasa Perkerasan Jalan Layanan', url: 'https://www.betonjayareadymix.com/p/jasa-perkerasan-jalan-layanan.html' },
            { name: 'Jasa Pengecoran Jalan Beton', url: 'https://www.betonjayareadymix.com/p/jasa-pengecoran-jalan-beton.html' }
        ],
        'JASA_KONSTRUKSI'
    );
}
if (urlMappingJasaPasangPavingFromMoneyPage1MoneyPage2[cleanUrlJasaJalanPerkerasanKons]) {
      generateBreadcrumbShared(
        urlMappingJasaPasangPavingFromMoneyPage1MoneyPage2,
        cleanUrlJasaJalanPerkerasanKons,
       [
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Jalan & Perkerasan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-jalan-perkerasan.html' },
            { name: 'Perbandingan Jasa Jalan & Perkerasan', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-jalan-perkerasan.html' },
            { name: 'Jasa Jalan & Perkerasan', url: 'https://www.betonjayareadymix.com/p/jasa-jalan-perkerasan.html' },
            { name: 'Jasa Perkerasan Jalan', url: 'https://www.betonjayareadymix.com/p/jasa-perkerasan-jalan.html' },
            { name: 'Jasa Perkerasan Jalan Layanan', url: 'https://www.betonjayareadymix.com/p/jasa-perkerasan-jalan-layanan.html' },
            { name: 'Jasa Pasang Paving', url: 'https://www.betonjayareadymix.com/p/jasa-pasang-paving.html' }
        ],
        'JASA_KONSTRUKSI'
    );
}

/*SUB MAPPING Jasa Perkerasan Jalan : 
   "https://www.betonjayareadymix.com/p/jasa-perkerasan-agregat-jalan.html": "Jasa Perkerasan Agregat Jalan",
  "https://www.betonjayareadymix.com/p/jasa-pengerasan-jalan.html": "Jasa Pengerasan Jalan",
  "https://www.betonjayareadymix.com/p/jasa-pengecoran-jalan-beton.html": "Jasa Pengecoran Jalan Beton",
  "https://www.betonjayareadymix.com/p/jasa-pengaspalan-jalan.html": "Jasa Pengaspalan Jalan",
  "https://www.betonjayareadymix.com/p/jasa-paving-block-jalan.html": "Jasa Paving Block Jalan" */
	
if (urlMappingJasaPengerasanJalanFromMoneyMaster1MoneyPage[cleanUrlJasaJalanPerkerasanKons]) {
	generateBreadcrumbShared(
        urlMappingJasaPengerasanJalanFromMoneyMaster1MoneyPage,
        cleanUrlJasaJalanPerkerasanKons,
       [
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Jalan & Perkerasan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-jalan-perkerasan.html' },
            { name: 'Perbandingan Jasa Jalan & Perkerasan', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-jalan-perkerasan.html' },
            { name: 'Jasa Jalan & Perkerasan', url: 'https://www.betonjayareadymix.com/p/jasa-jalan-perkerasan.html' },
            { name: 'Jasa Pengerasan Jalan', url: 'https://www.betonjayareadymix.com/p/jasa-pengerasan-jalan.html' }
        ],
        'JASA_KONSTRUKSI'
    );
} 
if (urlMappingJasaLokasiPengerasanJalanFromMoneyPageMoneyPage1[cleanUrlJasaJalanPerkerasanKons]) {
	generateBreadcrumbShared(
        urlMappingJasaLokasiPengerasanJalanFromMoneyPageMoneyPage1,
        cleanUrlJasaJalanPerkerasanKons,
       [
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Jalan & Perkerasan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-jalan-perkerasan.html' },
            { name: 'Perbandingan Jasa Jalan & Perkerasan', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-jalan-perkerasan.html' },
            { name: 'Jasa Jalan & Perkerasan', url: 'https://www.betonjayareadymix.com/p/jasa-jalan-perkerasan.html' },
            { name: 'Jasa Pengerasan Jalan', url: 'https://www.betonjayareadymix.com/p/jasa-pengerasan-jalan.html' },
            { name: 'Jasa Lokasi Pengerasan Jalan', url: 'https://www.betonjayareadymix.com/p/jasa-lokasi-pengerasan-jalan.html' }
        ],
        'JASA_KONSTRUKSI'
    );
} 
if (urlMappingJasaMaterialPengerasanJalanFromMoneyPageMoneyPage1[cleanUrlJasaJalanPerkerasanKons]) {
	generateBreadcrumbShared(
        urlMappingJasaMaterialPengerasanJalanFromMoneyPageMoneyPage1,
        cleanUrlJasaJalanPerkerasanKons,
       [
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Jalan & Perkerasan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-jalan-perkerasan.html' },
            { name: 'Perbandingan Jasa Jalan & Perkerasan', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-jalan-perkerasan.html' },
            { name: 'Jasa Jalan & Perkerasan', url: 'https://www.betonjayareadymix.com/p/jasa-jalan-perkerasan.html' },
            { name: 'Jasa Pengerasan Jalan', url: 'https://www.betonjayareadymix.com/p/jasa-pengerasan-jalan.html' },
            { name: 'Jasa Material Pengerasan Jalan', url: 'https://www.betonjayareadymix.com/p/jasa-material-pengerasan-jalan.html' }
        ],
        'JASA_KONSTRUKSI'
    );
} 
if (urlMappingJasaTujuanPengerasanJalanFromMoneyPageMoneyPage1[cleanUrlJasaJalanPerkerasanKons]) {
	generateBreadcrumbShared(
        urlMappingJasaTujuanPengerasanJalanFromMoneyPageMoneyPage1,
        cleanUrlJasaJalanPerkerasanKons,
       [
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Jalan & Perkerasan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-jalan-perkerasan.html' },
            { name: 'Perbandingan Jasa Jalan & Perkerasan', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-jalan-perkerasan.html' },
            { name: 'Jasa Jalan & Perkerasan', url: 'https://www.betonjayareadymix.com/p/jasa-jalan-perkerasan.html' },
            { name: 'Jasa Pengerasan Jalan', url: 'https://www.betonjayareadymix.com/p/jasa-pengerasan-jalan.html' },
            { name: 'Jasa Tujuan Pengerasan Jalan', url: 'https://www.betonjayareadymix.com/p/jasa-tujuan-pengerasan-jalan.html' }
        ],
        'JASA_KONSTRUKSI'
    );
} 

    console.log('[jasa-jalan-perkerasan-post] ✅ Semua breadcrumb selesai diproses');
}

// ═══════════════════════════════════════════════════════════
// [BAGIAN C] FIX v2.1.0 — Handle DOMContentLoaded race condition
// ═══════════════════════════════════════════════════════════
if (document.readyState === 'loading') {
    console.log('[jasa-jalan-perkerasan-post] ⏳ DOM loading, tunggu event');
    document.addEventListener('DOMContentLoaded', initJasaJalanPerkerasanPost);
} else {
    console.log('[jasa-jalan-perkerasan-post] ⚡ DOM ready, langsung execute');
    initJasaJalanPerkerasanPost();
}
