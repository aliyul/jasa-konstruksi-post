
// ============================================================
// JASA PEMBANGUNAN INFRASTRUKTUR JALAN - SUB2 (MASTER/HUB PAGE)
// ============================================================
// 🧠 SEO NOTE: Halaman ini adalah MASTER/HUB PAGE untuk semua layanan pembangunan jalan.
// Konten: Penjelasan lengkap, daftar harga, jenis layanan, material, metode, FAQ.
// Intent: Commercial Investigation + Transactional (karena ada harga & CTA).
// Parent: Jasa Jalan & Perkerasan (/p/jasa-jalan-perkerasan.html)
// Breadcrumb: Home > Jasa Konstruksi > Jasa Jalan & Perkerasan > Jasa Pembangunan Infrastruktur Jalan (4 level)
// ============================================================

const urlMappingJasaPembangunanInfrastrukturJalan = {
  // ============================================================
  // [SUB2] - MASTER / HUB PAGE (WAJIB ADA) sudah ada di urlMappingJalan di jasa konstruksi
  // TYPE: SUB2 (HUB PAGE) - boleh skip di breadcrumb
  // ============================================================
 // "https://www.betonjayareadymix.com/p/jasa-pembangunan-infrastruktur-jalan.html": "Jasa Pembangunan Infrastruktur Jalan",  // TYPE: SUB2 (HUB PAGE)
  
  // ============================================================
  // [SUB2] - SUB-PILLAR TIPE 2 (LAYANAN PEMBANGUNAN JALAN PER JENIS LOKASI)
  // 🧠 TYPE: SUB2 (WAJIB tampil di breadcrumb karena spesifik)
  // Breadcrumb (4 level, skip HUB PAGE): Home > Jasa Konstruksi > Jasa Jalan & Perkerasan > Jasa Pembangunan Jalan Lingkungan
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-pembangunan-jalan-lingkungan.html": "Jasa Pembangunan Jalan Lingkungan",  // TYPE: SUB2
  "https://www.betonjayareadymix.com/p/jasa-pembangunan-jalan-perdesaan.html": "Jasa Pembangunan Jalan Perdesaan",  // TYPE: SUB2
  "https://www.betonjayareadymix.com/p/jasa-pembangunan-jalan-raya.html": "Jasa Pembangunan Jalan Raya",  // TYPE: SUB2
  "https://www.betonjayareadymix.com/p/jasa-pembangunan-jalan-kawasan-industri.html": "Jasa Pembangunan Jalan Kawasan Industri",  // TYPE: SUB2
  "https://www.betonjayareadymix.com/p/jasa-pembangunan-jalan-perumahan.html": "Jasa Pembangunan Jalan Perumahan",  // TYPE: SUB2
  "https://www.betonjayareadymix.com/p/jasa-pembangunan-jalan-akses-proyek.html": "Jasa Pembangunan Jalan Akses Proyek",  // TYPE: SUB2
  "https://www.betonjayareadymix.com/p/jasa-pembangunan-jalan-trotoar.html": "Jasa Pembangunan Jalan Trotoar",  // TYPE: SUB2
  "https://www.betonjayareadymix.com/p/jasa-pembangunan-jalan-setapak.html": "Jasa Pembangunan Jalan Setapak",  // TYPE: SUB2
  "https://www.betonjayareadymix.com/p/jasa-pembangunan-jalan-setapak-trotoar.html": "Jasa Pembangunan Jalan Setapak Trotoar",  // TYPE: SUB2
  "https://www.betonjayareadymix.com/p/jasa-pembangunan-area-pejalan-kaki.html": "Jasa Pembangunan Area Pejalan Kaki"  // TYPE: SUB2
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

const urlMappingJasaPemadatanPersiapanTanahJalan = {
  // ============================================================
  // [SUB2] - MASTER PAGE (HALAMAN INDUK) - sudah ada di urlMappingJalan
  // TYPE: SUB2 (HUB PAGE) - boleh skip di breadcrumb
  // ============================================================
  // "https://www.betonjayareadymix.com/p/jasa-pemadatan-dan-persiapan-tanah-jalan.html": "Jasa Pemadatan & Persiapan Tanah Jalan",  // TYPE: SUB2 (HUB PAGE)
  
  // ============================================================
  // [SUB2] - TURUNAN (LAYANAN SPESIFIK)
  // 🧠 TYPE: SUB2 (WAJIB tampil di breadcrumb karena spesifik)
  // Breadcrumb (4 level, skip HUB PAGE): Home > Jasa Konstruksi > Jasa Jalan & Perkerasan > Jasa Pengupasan Lahan Jalan
  // ============================================================
  
  // ✅ VALID - KONTEN ADA
  "https://www.betonjayareadymix.com/p/jasa-pengupasan-lahan-jalan.html": "Jasa Pengupasan Lahan Jalan",  // TYPE: SUB2
  "https://www.betonjayareadymix.com/p/jasa-cut-and-fill-jalan.html": "Jasa Cut and Fill Jalan",  // TYPE: SUB2
  "https://www.betonjayareadymix.com/p/jasa-urugan-tanah-jalan.html": "Jasa Urugan Tanah Jalan",  // TYPE: SUB2
  "https://www.betonjayareadymix.com/p/jasa-stabilisasi-tanah-jalan.html": "Jasa Stabilisasi Tanah Jalan",  // TYPE: SUB2
  
  // ============================================================
  // ⚠️ PERLU PERHATIAN - KONTEN KOSONG (HANYA TEMPLATE)
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-pemadatan-tanah-jalan.html": "Jasa Pemadatan Tanah Jalan",  // TYPE: SUB2 (⚠️ konten kosong)
  "https://www.betonjayareadymix.com/p/jasa-perkerasan-tanah-subgrade.html": "Jasa Perkerasan Tanah Subgrade"  // TYPE: SUB2 (⚠️ konten kosong)
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

const urlMappingJasaPerkerasanJalan = {
  // ============================================================
  // [SUB2] - HUB PAGE (MASTER PERKERASAN JALAN) - sudah ada di urlMappingJalan
  // TYPE: SUB2 (HUB PAGE) - boleh skip di breadcrumb
  // ============================================================
  // "https://www.betonjayareadymix.com/p/jasa-perkerasan-jalan.html": "Jasa Perkerasan Jalan",  // TYPE: SUB2 (HUB PAGE)

  // ============================================================
  // [SUB2] - JENIS PERKERASAN JALAN (LAYANAN UTAMA)
  // 🧠 TYPE: SUB2 (WAJIB tampil di breadcrumb karena spesifik)
  // Breadcrumb (4 level, skip HUB PAGE): Home > Jasa Konstruksi > Jasa Jalan & Perkerasan > Jasa Perkerasan Jalan Beton
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-perkerasan-jalan-beton.html": "Jasa Perkerasan Jalan Beton",  // TYPE: SUB2
  "https://www.betonjayareadymix.com/p/jasa-perkerasan-jalan-aspal.html": "Jasa Perkerasan Jalan Aspal",  // TYPE: SUB2
  "https://www.betonjayareadymix.com/p/jasa-perkerasan-jalan-komposit.html": "Jasa Perkerasan Jalan Komposit",  // TYPE: SUB2
  "https://www.betonjayareadymix.com/p/jasa-perkerasan-jalan-semi-rigid.html": "Jasa Perkerasan Jalan Semi Rigid",  // TYPE: SUB2

  // ============================================================
  // [SUB2] - METODE & MATERIAL PERKERASAN
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-perkerasan-base-course-jalan.html": "Jasa Perkerasan Base Course Jalan",  // TYPE: SUB2
  "https://www.betonjayareadymix.com/p/jasa-perkerasan-agregat-jalan.html": "Jasa Perkerasan Agregat Jalan",  // TYPE: SUB2
  "https://www.betonjayareadymix.com/p/jasa-perkerasan-jalan-kerikil.html": "Jasa Perkerasan Jalan Kerikil",  // TYPE: SUB2

  // ============================================================
  // [SUB2] - PROSES & TEKNIK PERKERASAN
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-pengaspalan-jalan.html": "Jasa Pengaspalan Jalan",  // TYPE: SUB2
  "https://www.betonjayareadymix.com/p/jasa-pengecoran-jalan-beton.html": "Jasa Pengecoran Jalan Beton",  // TYPE: SUB2
  "https://www.betonjayareadymix.com/p/jasa-paving-block-jalan.html": "Jasa Paving Block Jalan",  // TYPE: SUB2

  // ============================================================
  // [SUB2] - LAPISAN & STRUKTUR JALAN
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-timbunan-subbase-jalan.html": "Jasa Timbunan Subbase Jalan",  // TYPE: SUB2
  "https://www.betonjayareadymix.com/p/jasa-perkuatan-dasar-tanah-jalan.html": "Jasa Perkuatan Dasar Tanah Jalan"  // TYPE: SUB2
};

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

const urlMappingJasaPengerasanJalan = {
  // ============================================================
  // [SUB2] - MASTER PENGERASAN JALAN
  // 🧠 TYPE: SUB2 (boleh skip di breadcrumb)
  // ============================================================
  // "https://www.betonjayareadymix.com/p/jasa-pengerasan-jalan.html": "Jasa Pengerasan Jalan",  // TYPE: SUB2 [MASTER]
  
  // ============================================================
  // [SUB2] - PENGERASAN PER LOKASI/FUNGSI
  // 🧠 TYPE: SUB2 (boleh skip di breadcrumb)
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-pengerasan-jalan-proyek.html": "Jasa Pengerasan Jalan Proyek",  // TYPE: SUB2
  "https://www.betonjayareadymix.com/p/jasa-pengerasan-jalan-akses.html": "Jasa Pengerasan Jalan Akses",  // TYPE: SUB2
  "https://www.betonjayareadymix.com/p/jasa-pengerasan-jalan-perumahan.html": "Jasa Pengerasan Jalan Perumahan",  // TYPE: SUB2
  "https://www.betonjayareadymix.com/p/jasa-pengerasan-jalan-lingkungan.html": "Jasa Pengerasan Jalan Lingkungan",  // TYPE: SUB2
  "https://www.betonjayareadymix.com/p/jasa-pengerasan-jalan-perdesaan.html": "Jasa Pengerasan Jalan Perdesaan",  // TYPE: SUB2
  "https://www.betonjayareadymix.com/p/jasa-pengerasan-jalan-industri.html": "Jasa Pengerasan Jalan Industri",  // TYPE: SUB2
  "https://www.betonjayareadymix.com/p/jasa-pengerasan-area-parkir.html": "Jasa Pengerasan Area Parkir",  // TYPE: SUB2
  "https://www.betonjayareadymix.com/p/jasa-pengerasan-jalan-tahan-beban-berat.html": "Jasa Pengerasan Jalan Tahan Beban Berat",  // TYPE: SUB2
  
  // ============================================================
  // [SUB2] - PENGERASAN BERDASARKAN MATERIAL
  // 🧠 TYPE: SUB2 (boleh skip di breadcrumb)
  // ⚠️ PERHATIAN: Bedakan dengan perkerasan agregat/base course
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-pengerasan-jalan-tanah.html": "Jasa Pengerasan Jalan Tanah",  // TYPE: SUB2
  "https://www.betonjayareadymix.com/p/jasa-pengerasan-jalan-batu.html": "Jasa Pengerasan Jalan Batu",  // TYPE: SUB2
  "https://www.betonjayareadymix.com/p/jasa-pengerasan-jalan-kerikil.html": "Jasa Pengerasan Jalan Kerikil",  // TYPE: SUB2
  "https://www.betonjayareadymix.com/p/jasa-pengerasan-jalan-sirtu.html": "Jasa Pengerasan Jalan Sirtu",  // TYPE: SUB2
  "https://www.betonjayareadymix.com/p/jasa-pengerasan-jalan-agregat.html": "Jasa Pengerasan Jalan Agregat",  // TYPE: SUB2
  "https://www.betonjayareadymix.com/p/jasa-pengerasan-jalan-makadam.html": "Jasa Pengerasan Jalan Makadam",  // TYPE: SUB2
  
  // ============================================================
  // [SUB2] - PENGERASAN BERDASARKAN LAPISAN
  // 🧠 TYPE: SUB2 (boleh skip di breadcrumb)
  // ⚠️ PERHATIAN: Fokus ke base course sebagai LAPISAN PENGERASAN (bukan perkerasan)
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-pengerasan-jalan-base-course.html": "Jasa Pengerasan Jalan Base Course",  // TYPE: SUB2
  "https://www.betonjayareadymix.com/p/jasa-pengerasan-jalan-subbase.html": "Jasa Pengerasan Jalan Sub Base",  // TYPE: SUB2
  "https://www.betonjayareadymix.com/p/jasa-pengerasan-jalan-lapis-penetrasi.html": "Jasa Pengerasan Jalan Lapis Penetrasi",  // TYPE: SUB2
  
  // ============================================================
  // [SUB2] - METODE PENGERASAN LAINNYA
  // 🧠 TYPE: SUB2 (boleh skip di breadcrumb)
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-pengerasan-jalan-urugan-material.html": "Jasa Pengerasan Jalan Urugan Material",  // TYPE: SUB2
  "https://www.betonjayareadymix.com/p/jasa-pengerasan-jalan-urugan-tanah.html": "Jasa Pengerasan Jalan Urugan Tanah",  // TYPE: SUB2
  "https://www.betonjayareadymix.com/p/jasa-pengerasan-jalan-ekonomis.html": "Jasa Pengerasan Jalan Ekonomis"  // TYPE: SUB2
};
/**
 * generateBreadcrumbForMapping v5.6 — COMPLETE PHASE SYSTEM WITH URL CLEAN DETECTION
 * ✅ FIX: Deteksi utama berdasarkan URL clean (tanpa domain, tanpa /p/, tanpa tahun/bulan)
 * ✅ FIX: "harga-sewa-alat-proyek" → MONEY_MASTER (L4), BUKAN money-page
 * ✅ FIX: "Jasa Konstruksi" → PILLAR (L1), BUKAN money-page
 * ✅ FIX: "Sewa Alat Konstruksi" → PILLAR (L1)
 * ✅ FIX: "Produk Konstruksi", "Produk Interior" → PILLAR (L1)
 * ✅ FIX: "Material Konstruksi" → PILLAR (L1)
 * ✅ ENTITY PILLAR KEYWORDS untuk setiap entity type
 * ✅ PRIORITAS DETEKSI:
 *    0. HOMEPAGE
 *    1. ENTITY PILLAR (Jasa Konstruksi, Sewa Alat, dll) 🔥
 *    2. INFORMASIONAL (panduan, cara, tips) → PILLAR
 *    3. PERBANDINGAN (vs, versus) → SP1
 *    4. JENIS/MACAM/DAFTAR (jenis, macam, daftar) → SP2
 *    5. KEYWORD HARGA/SEWA → MONEY (berdasarkan URL clean)
 *    6. JASA/SEWA (tanpa keyword harga & bukan pillar) → MONEY_PAGE
 *    7. SUB-VARIANT
 *    8. VARIANT
 *    9. DEFAULT → PILLAR
 * 
 * @version 5.6.0
 * @date 2026-01-15
 */

function generateBreadcrumbJasaKonstruksiJalanPerkerasan(mappingObj, currentUrl, breadcrumbItems = [], entityType = 'PRODUK_INTERIOR') {
    
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
    // 4. ENTITY PILLAR KEYWORDS (UTAMA UNTUK MASING-MASING ENTITY) 🔥
    // ============================================================
    const ENTITY_PILLAR_KEYWORDS = {
        'JASA_KONSTRUKSI': ['jasa konstruksi', 'layanan konstruksi', 'jasa bangunan', 'kontraktor konstruksi'],
        'JASA_DESAIN_INTERIOR': ['jasa desain interior', 'jasa interior', 'desain interior'],
        'JASA': ['jasa konstruksi', 'layanan konstruksi', 'jasa bangunan'],
        
        'SEWA': ['sewa alat konstruksi', 'rental alat berat', 'sewa alat bangunan', 'sewa alat berat'],
        'RENTAL': ['rental alat berat', 'sewa alat konstruksi'],
        'SEWA_RENTAL': ['sewa alat konstruksi', 'rental alat berat'],
        'SEWA_ALAT': ['sewa alat konstruksi', 'sewa alat berat'],
        'RENTAL_ALAT': ['rental alat berat', 'sewa alat konstruksi'],
        
        'PRODUK_KONSTRUKSI': ['produk konstruksi', 'produk bangunan', 'material konstruksi'],
        'PRODUK_INTERIOR': ['produk interior', 'furniture', 'perabot rumah', 'perabot interior'],
        'PRODUK': ['produk konstruksi', 'produk bangunan'],
        
        'MATERIAL_KONSTRUKSI': ['material konstruksi', 'bahan bangunan', 'material bangunan'],
        'MATERIAL': ['material konstruksi', 'bahan bangunan', 'material bangunan'],
        
        'ARTIKEL': ['artikel konstruksi', 'tips konstruksi', 'info bangunan']
    };
    
    // ============================================================
    // 5. KEYWORD CIRI PER LEVEL
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
    // 6. LOCATION WHITELIST
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
    // 7. SPECIFIC PRODUCT & SUB-VARIANT DETECTION
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
    // 8. INTENT VALIDATION
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
    // 9. EVERGREEN STATUS
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
    // 10. DETEKSI HOMEPAGE
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
    // 11. PAGE TYPE DETECTION (PRIORITAS LENGKAP DENGAN URL CLEAN) 🔥
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
        // PRIORITAS 1: ENTITY PILLAR 🔥
        // ============================================================
        const pillarKeywords = ENTITY_PILLAR_KEYWORDS[useEntityType] || [];
        for (const kw of pillarKeywords) {
            if (lowerName === kw || 
                lowerName.startsWith(kw + ' ') || 
                lowerName.includes(' ' + kw + ' ') ||
                lowerName.endsWith(' ' + kw)) {
                console.log(`  🏛️ ENTITY PILLAR detected: "${kw}" → pillar (L1)`);
                return 'pillar';
            }
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
        // PRIORITAS 5: MONEY LEVEL (HARGA/SEWA) - BERDASARKAN URL CLEAN 🔥
        // ============================================================
        for (const kw of MONEY_KEYWORDS) {
            if (lowerName.includes(kw)) {
                console.log(`  💰 Money keyword detected: ${kw} (from ${isFromUrl ? 'URL' : 'title/H1'})`);
                
                if (isJasaEntity()) {
                    console.log(`  → JASA + harga → money-page (L5)`);
                    return 'money-page';
                }
                
                // Ekstrak setelah keyword
                let afterKw = '';
                const kwIndex = lowerName.indexOf(kw);
                afterKw = lowerName.substring(kwIndex + kw.length).trim();
                
                // Ambil maksimal 5 kata pertama (bersihkan dari tahun)
                afterKw = afterKw.replace(/\b\d{4}\b/g, '').replace(/\s+/g, ' ').trim();
                const words = afterKw.split(/\s+/).filter(w => w.length > 0);
                const first5Words = words.slice(0, 5);
                afterKw = first5Words.join(' ');
                const wordCount = first5Words.length;
                
                console.log(`  → After keyword (first 5 words): "${afterKw}" | Words: ${wordCount}`);
                
                // CEK LOKASI (MONEY_CHILD)
                if (isLocation(afterKw)) {
                    console.log(`  → Location detected → money-child (L6)`);
                    return 'money-child';
                }
                
                // CEK SPESIFISITAS PRODUK
                const isSpecific = isSpecificProduct(afterKw, wordCount);
                
                // MONEY_MASTER: 1-2 kata ATAU 3 kata tapi masih umum
                if (wordCount <= 2 || (wordCount === 3 && !isSpecific)) {
                    console.log(`  → money-master (${wordCount} kata, specific=${isSpecific}) → money-master (L4)`);
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
        // PRIORITAS 7: SUB-VARIANT
        // ============================================================
        if (isSubVariant(lowerName)) {
            console.log(`  🔬 SUB-VARIANT detected → sub-variant (L8)`);
            return 'sub-variant';
        }
        
        // ============================================================
        // PRIORITAS 8: VARIANT
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
    // 12. BUILD LEVELS FROM BREADCRUMB ITEMS
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
    // 13. VALIDASI HIERARKI
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
    // 14. JASA TIDAK BOLEH MONEY_MASTER
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
    // 15. FALLBACK URL
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
    // 16. SELECT LEVELS FOR BREADCRUMB (MAX 4 LEVELS)
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
    console.log(`📊 Breadcrumb Generator v5.6 — URL CLEAN DETECTION`);
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
    // 17. CURRENT PAGE - DETEKSI DARI URL CLEAN 🔥
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
    // 18. GENERATE HTML BREADCRUMB + JSON-LD
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
    // 19. RETURN LENGKAP
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
| URL | Clean Name | Hasil Deteksi | Level |
|-----|------------|---------------|-------|
| /jasa-konstruksi | jasa konstruksi | pillar | L1 ✅ |
| /sewa-alat-konstruksi | sewa alat konstruksi | pillar | L1 ✅ |
| /produk-konstruksi | produk konstruksi | pillar | L1 ✅ |
| /material-konstruksi | material konstruksi | pillar | L1 ✅ |
| /harga-sewa-alat-proyek | harga sewa alat proyek | money-master | L4 ✅ |
| /harga-sewa-excavator-mini | harga sewa excavator mini | money-page | L5 ✅ |
| /harga-sewa-alat-jakarta | harga sewa alat jakarta | money-child | L6 ✅ |
| /jenis-jasa-konstruksi | jenis jasa konstruksi | sub-pillar-tipe-2 | L2 ✅ |
| /daftar-jasa-konstruksi | daftar jasa konstruksi | sub-pillar-tipe-2 | L2 ✅ |
| /perbandingan-jasa-konstruksi | perbandingan jasa konstruksi | sub-pillar-tipe-1 | L3 ✅ |
*/

// Menyimpan elemen yang dihapus dalam variabel
let removedElementsJasaJalanPerkerasanKons = {};
// Fungsi untuk menghapus elemen berdasarkan ID
function removeCondition(conditionId) {
    const conditionElement = document.getElementById(conditionId);

    if (conditionElement) {
        // Menyimpan elemen yang dihapus dalam objek untuk bisa dikembalikan
        removedElementsJasaJalanPerkerasanKons[conditionId] = conditionElement;
        conditionElement.remove(); // Menghapus elemen tersebut
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
        console.log(`Elemen dengan ID ${conditionId} tidak ditemukan di removedElementsJasaJalanPerkerasanKons.`);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    // var currentUrl = window.location.href;
     //const cleanUrl = currentUrl.split('?')[0]; // Menghapus parameter seperti ?m=1
    const cleanUrlJasaJalanPerkerasanKons = window.location.href.split(/[?#]/)[0]; // Menghilangkan parameter seperti ?m=1

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

	  
    // --- gabungkan semua mapping ---
    const urlMappingGabungan = Object.assign(
      {},
		urlMappingJasaPembangunanInfrastrukturJalan,
		urlMappingJasaPemadatanPersiapanTanahJalan,
		urlMappingJasaPerkerasanJalan,
		urlMappingJasaPengerasanJalan
		
    );

    // --- validasi URL terdaftar ---
    if (!urlMappingGabungan[cleanUrlJasaJalanPerkerasanKons]) {
      console.log(`[HybridDateModified] URL tidak terdaftar: ${cleanUrlJasaJalanPerkerasanKons}`);
      return;
    }

  // === Tanggal nextUpdate1 global ===
		const globalNextUpdate1 = "2026-02-03T00:00:00.000Z";
	console.log(`🌐 [AutoMeta] Detected jasa-konstruksi-jalan-perkerasan: ${cleanUrlJasaJalanPerkerasanKons}`);

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

    // --- pastikan detect-evergreen.js selesai dimuat ---
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

    const hash = stableHash(cleanUrlJasaJalanPerkerasanKons);
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
	
	console.log("✅ AEDMetaDates updated jasa-konstruksi-jalan-perkerasan:", window.AEDMetaDates);

    console.log(`✅ [HybridDateModified v2.5] ${cleanUrlJasaKons} → ${isoDate} | type=${type || "-"}`);

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
		urlMappingJasaPembangunanInfrastrukturJalan,
		urlMappingJasaPemadatanPersiapanTanahJalan,
		urlMappingJasaPerkerasanJalan,
		urlMappingJasaPengerasanJalan
		
    );

    // --- validasi URL terdaftar ---
    if (!urlMappingGabungan[cleanUrlJasaJalanPerkerasanKons]) {
      console.log(`[HybridDateModified] URL tidak terdaftar: ${cleanUrlJasaJalanPerkerasanKons}`);
      return;
    }

	 /* ============================================================
 🔥 Hybrid Date Modified v7.1 — UNTUK betonjayareadymix.com
    Custom date berdasarkan hasil deteksi page level
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
          console.warn("[Evergreen] Gagal load:", src);
          resolve();
        };
        document.head.appendChild(s);
      });
    }

    // ============================================================
    // 📌 TUNGGU PAGE LEVEL DETECTOR READY
    // ============================================================
    function waitForPageLevelDetector() {
      return new Promise((resolve) => {
        if (window.__pageLevelDetectorReady && window.pageLevelDetector) {
          resolve(true);
        } else {
          window.addEventListener("pageLevelDetectorReady", () => resolve(true), { once: true });
        }
      });
    }

    // ============================================================
    // 📌 TUNGGU DETECT EVERGREEN READY
    // ============================================================
    function waitForDetectEvergreen() {
      return new Promise((resolve) => {
        if (window.__detectEvergreenReady && typeof window.detectEvergreen === "function") {
          resolve(true);
        } else {
          window.addEventListener("detectEvergreenReady", () => resolve(true), { once: true });
        }
      });
    }

    // ============================================================
    // 📌 LOAD ALL SCRIPTS
    // ============================================================
    async function loadAllScripts() {
      const PAGE_LEVEL_DETECTOR_URL = "https://raw.githack.com/aliyul/solution-blogger/main/PageLevelDetector.js";
      const EVERGREEN_DETECTOR_URL = "https://raw.githack.com/aliyul/solution-blogger/main/SmartEvergreenDetector.js";
      
      if (typeof window.pageLevelDetector === "undefined") {
        console.log("⏳ Loading Page Level Detector v15.0...");
        await loadExternalJS(PAGE_LEVEL_DETECTOR_URL);
        await waitForPageLevelDetector();
        console.log("✅ Page Level Detector v15.0 READY");
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
    // 📌 DAFTAR EVERGREEN LEVELS & MONEY LEVELS (LENGKAP)
    // ============================================================
    const EVERGREEN_LEVELS = ['pillar', 'sub-pillar-tipe-2', 'sub-pillar-tipe-1', 'variant', 'sub-variant'];
    const MONEY_LEVELS = ['money-master', 'money-page', 'money-child', 'money-leadgen'];

    // ============================================================
    // 📌 FUNGSI MENENTUKAN CUSTOM DATE BERDASARKAN PAGE LEVEL
    // ============================================================
    function getCustomDateByPageLevel(pageLevel, entityType) {
      // ============================================================
      // LEVEL 1: EVERGREEN (tidak perlu update sering)
      // ============================================================
      if (EVERGREEN_LEVELS.includes(pageLevel)) {
        // Pillar (level tertinggi) - paling stabil
        if (pageLevel === 'pillar') {
          return "2026-04-01T10:30:00+07:00";
        }
        // Sub-Pillar Tipe 2, Sub-Pillar Tipe 1, Variant, Sub-Variant
        //return "2026-04-02T00:00:00+07:00";
		  		  // JASA KONSTRUKSI JALAN PERKERASAN: Sub-Pillar Tipe 2, Sub-Pillar Tipe 1, Variant, Sub-Variant 
        return "2026-04-09T00:00:00+07:00";
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
		  // JASA KONSTRUKSI CUTTING BETON POST: Sub-Pillar Tipe 2, Sub-Pillar Tipe 1, Variant, Sub-Variant 
        return "2026-04-16T00:00:00+07:00";
		  // JASA KONSTRUKSI BONGKAR BANGUNAN POST: Sub-Pillar Tipe 2, Sub-Pillar Tipe 1, Variant, Sub-Variant 
        return "2026-04-17T00:00:00+07:00";
		  */
      }
      
      // ============================================================
      // LEVEL 2: MONEY PAGES (perlu update berkala)
      // Kembalikan null agar SmartEvergreenDetector menghitung otomatis
      // money-master, money-page, money-child, money-leadgen
      // ============================================================
      if (MONEY_LEVELS.includes(pageLevel)) {
        return null; // AUTO mode
      }
      
      // ============================================================
      // DEFAULT: AUTO mode
      // ============================================================
      return null;
    }

    // ============================================================
    // 📌 EKSEKUSI UTAMA
    // ============================================================
    
    await loadAllScripts();
    
    // Tunggu sebentar agar pageLevelDetector selesai deteksi
    await new Promise(resolve => setTimeout(resolve, 100));
    
    // Dapatkan page level dan entity type dari detector yang sudah ready
    let pageLevel = 'pillar'; // default
    let entityType = 'produk'; // default
    
    if (window.pageLevelDetector) {
      pageLevel = window.pageLevelDetector.detect();
      entityType = window.pageLevelDetector.detectEntityType();
      console.log(`📌 Detected Page Level: ${pageLevel}, Entity Type: ${entityType}`);
    } else {
      console.warn("⚠️ PageLevelDetector not ready, using defaults");
    }
    
    // ============================================================
    // 🔥 STEP 2: TENTUKAN CUSTOM DATE BERDASARKAN HASIL DETEKSI
    // ============================================================
    let customDate = getCustomDateByPageLevel(pageLevel, entityType);
    let manualMode = customDate !== null;
    
    if (manualMode) {
      console.log(`📌 [CUSTOM DATE] PageLevel=${pageLevel}, EntityType=${entityType} → Using custom date: ${customDate}`);
    } else {
      console.log(`📌 [AUTO MODE] PageLevel=${pageLevel}, EntityType=${entityType} → No custom date, using auto calculation`);
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
    // 📌 HITUNG VARIASI TANGGAL
    // ============================================================
    const uniquePageIdentifier = window.location.pathname;
    let hashSource = uniquePageIdentifier;
    
    if (EVERGREEN_LEVELS.includes(detectedPageLevel)) {
      hashSource = 'evergreen-' + hashSource;
      console.log(`📌 Evergreen content (${detectedPageLevel}) → using evergreen hash prefix`);
    } else if (detectedEntityType === 'jasa') {
      hashSource = 'jasa-' + hashSource;
      console.log(`📌 Jasa content (${detectedPageLevel}) → using jasa hash prefix`);
    } else if (MONEY_LEVELS.includes(detectedPageLevel)) {
      hashSource = 'money-' + hashSource;
      console.log(`📌 Money page (${detectedPageLevel}) → using money hash prefix`);
    }
    
    const hash = stableHash(hashSource);
    const offsetSeconds = hash % 86400;
    const finalDate = new Date(new Date(dateModified).getTime() + offsetSeconds * 1000);
    const isoDate = toISOWithTimezoneLocal(finalDate);

    // ============================================================
    // 📌 UPDATE META DATEMODIFIED
    // ============================================================
    updateMetaDateModified(isoDate);

    window.AEDMetaDates = {
      ...window.AEDMetaDates,
      dateModified: isoDate,
      hashOffset: offsetSeconds
    };

    console.log(`✅ [HybridDateModified] ${uniquePageIdentifier} → ${isoDate}`);
    console.log(`   - offsetSeconds: ${offsetSeconds} detik`);
    console.log(`   - Mode: ${manualMode ? 'MANUAL (custom date based on page level)' : 'AUTO'}`);
    console.log(`📋 Custom config for betonjayareadymix.com applied successfully`);

  } catch (err) {
    console.error("[HybridDateModified] Fatal:", err);
  }
})();
	
     // Menemukan elemen menggunakan Id
    var JasaKonsJalanPerkerasan = document.getElementById("JasaKonsJalanPerkerasan");

    if (!JasaKonsJalanPerkerasan) {
        console.error("elemen Id JasaKonsJalanPerkerasan kondisi terhapus");
        return;
    }


     var JasaKonstruksiJalanPerkerasanSubLink = document.getElementById("JasaKonstruksiJalanPerkerasanSub");
     var JasaJalanPerkerasanSubLink = document.getElementById("JasaJalanPerkerasanSub");

     //SUB JASA JALAN & PERKERASAN
     var JasaPembangunanInfrastrukturJalanSubLink = document.getElementById("JasaPembangunanInfrastrukturJalanSub");
     var JasaPemadatanPersiapanTanahJalanSubLink = document.getElementById("JasaPemadatanPersiapanTanahJalanSub");
     var JasaPerkerasanJalanSubLink = document.getElementById("JasaPerkerasanJalanSub");

	
	 //SUB JASA PERKERASAN JALAN
     var JasaPengerasanJalanSubLink = document.getElementById("JasaPengerasanJalanSub");
     var JasaPavingBlockJalanSubLink = document.getElementById("JasaPavingBlockJalanSub");
     var JasaPengaspalanJalanSubLink = document.getElementById("JasaPengaspalanJalanSub");
     var JasaPengecoranJalanBetonSubLink = document.getElementById("JasaPengecoranJalanBetonSub");

     
     var JasaPerkerasanAgregatJalanSubLink = document.getElementById("JasaPerkerasanAgregatJalanSub");

     var JasaTimbunanSubbaseJalanSubLink = document.getElementById("JasaTimbunanSubbaseJalanSub");
     var JasaPerkerasanBaseCourseJalanSubLink = document.getElementById("JasaPerkerasanBaseCourseJalanSub");
     var JasaPerkerasanJalanKerikilSubLink = document.getElementById("JasaPerkerasanJalanKerikilSub");
     var JasaPerkuatanDasarTanahJalanSubLink = document.getElementById("JasaPerkuatanDasarTanahJalanSub");
     var JasaPerkerasanJalanBetonSubLink = document.getElementById("JasaPerkerasanJalanBetonSub");
     var JasaPerkerasanJalanAspalSubLink = document.getElementById("JasaPerkerasanJalanAspalSub");
     var JasaPerkerasanJalanKompositSubLink = document.getElementById("JasaPerkerasanJalanKompositSub");
	
     var pageNameJasaKonsJalanPerkerasan = document.getElementById("pageNameJasaKonsJalanPerkerasan");
    

     // Default untuk menyembunyikan elemen
     JasaKonstruksiJalanPerkerasanSubLink.style.visibility = 'hidden';
     JasaJalanPerkerasanSubLink.style.visibility = 'hidden';
	
     //SUB JASA JALAN & PERKERASAN
     JasaPembangunanInfrastrukturJalanSubLink.style.visibility = 'hidden';
     JasaPemadatanPersiapanTanahJalanSubLink.style.visibility = 'hidden';
     JasaPerkerasanJalanSubLink.style.visibility = 'hidden';

    //SUB JASA PERKERASAN JALAN
     JasaPengerasanJalanSubLink.style.visibility = 'hidden';
     JasaPavingBlockJalanSubLink.style.visibility = 'hidden';
     JasaPengaspalanJalanSubLink.style.visibility = 'hidden';
     JasaPengecoranJalanBetonSubLink.style.visibility = 'hidden';
	
     JasaPerkerasanAgregatJalanSubLink.style.visibility = 'hidden';
	
     JasaTimbunanSubbaseJalanSubLink.style.visibility = 'hidden';
     JasaPerkerasanBaseCourseJalanSubLink.style.visibility = 'hidden';
     JasaPerkerasanJalanKerikilSubLink.style.visibility = 'hidden';
     JasaPerkuatanDasarTanahJalanSubLink.style.visibility = 'hidden';
     JasaPerkerasanJalanBetonSubLink.style.visibility = 'hidden';
     JasaPerkerasanJalanAspalSubLink.style.visibility = 'hidden';
     JasaPerkerasanJalanKompositSubLink.style.visibility = 'hidden';
	
     pageNameJasaKonsJalanPerkerasan.textContent = "";

   //SUB MAPPING JASA JALAN & PERKERASAN
  if (urlMappingJasaPembangunanInfrastrukturJalan[cleanUrlJasaJalanPerkerasanKons]) {
        restoreCondition('JasaKonsJalanPerkerasan');
		 //restoreCondition('JasaJalanPerkerasanSub');
		
        restoreCondition('JasaPembangunanInfrastrukturJalanSub');
     
        //hapus elemen div id lain
	removeCondition('ProdukInFur');
        removeCondition('MaterialKons');
	removeCondition('ProdukKons');
        //removeCondition('ProdukKonsSaluran');
        //removeCondition('ProdukKonsSaluran');
        removeCondition('JasaKonsPerbaikan');
       	removeCondition('JasaKons');
       	removeCondition('JasaKonsSub');
       	removeCondition('MenuKons');
       	removeCondition('JasaKonsFinishing');
        removeCondition('JasaKonsStruktur');
        removeCondition('JasaKonsPondasiTanah');
        removeCondition('JasaKonsPembatas');
/*
JasaKonsJalanPerkerasan
JasaKonstruksiJalanPerkerasanSub
JasaJalanPerkerasanSub


JasaPembangunanInfrastrukturJalanSub
JasaPemadatanPersiapanTanahJalanSub
JasaPerkerasanJalanSub
*/
	//skip breadcrumbs level 3 nya atau hapus, jadi level 4 JasaPembangunanInfrastrukturJalanSub  turun ke 3
    	removeCondition('JasaJalanPerkerasanSub');
		
        //hapus elemen SUB jasa jalan & perkerasan lain
        removeCondition('JasaPemadatanPersiapanTanahJalanSub');
        removeCondition('JasaPerkerasanJalanSub');
        removeCondition('JasaPengerasanJalanSub');

	//hapus elemen SUB JASA PERKERASAN LAIN SEMUA NYA
	removeCondition('JasaPavingBlockJalanSub');
        removeCondition('JasaPengaspalanJalanSub');
        removeCondition('JasaPengecoranJalanBetonSub');

	
        removeCondition('JasaPerkerasanAgregatJalanSub');

	
        removeCondition('JasaTimbunanSubbaseJalanSub');
        removeCondition('JasaPerkerasanBaseCourseJalanSub');
        removeCondition('JasaPerkerasanJalanKerikilSub');
        removeCondition('JasaPerkuatanDasarTanahJalanSub');
        removeCondition('JasaPerkerasanJalanBetonSub');
        removeCondition('JasaPerkerasanJalanAspalSub');
        removeCondition('JasaPerkerasanJalanKompositSub');
    	
	
        JasaKonstruksiJalanPerkerasanSubLink.style.visibility = 'visible';
        JasaPembangunanInfrastrukturJalanSubLink.style.visibility = 'visible';
	    
        //skip level 3 JasaJalanPerkerasanSubLink.style.visibility = 'visible';
        pageNameJasaKonsJalanPerkerasan.textContent = urlMappingJasaPembangunanInfrastrukturJalan[cleanUrlJasaJalanPerkerasanKons];
    }
   // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaPembangunanInfrastrukturJalan[cleanUrlJasaJalanPerkerasanKons]) {
const jsonLDBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Beton Jaya Readymix", "item": "https://www.betonjayareadymix.com/" },
        { "@type": "ListItem", "position": 2, "name": "Jasa Konstruksi", "item": "https://www.betonjayareadymix.com/p/jasa-konstruksi.html" },
        //{ "@type": "ListItem", "position": 3, "name": "Jasa Jalan & Perkerasan", "item": "https://www.betonjayareadymix.com/p/jasa-jalan-perkerasan.html" },
        { "@type": "ListItem", "position": 3, "name": "Jasa Pembangunan Infrastruktur Jalan", "item": "https://www.betonjayareadymix.com/p/jasa-pembangunan-infrastruktur-jalan.html" },
        { "@type": "ListItem", "position": 4, "name": urlMappingJasaPembangunanInfrastrukturJalan[cleanUrlJasaJalanPerkerasanKons], "item": cleanUrlJasaJalanPerkerasanKons }
    ]
};

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
       
   if (urlMappingJasaPemadatanPersiapanTanahJalan[cleanUrlJasaJalanPerkerasanKons]) {
        restoreCondition('JasaKonsJalanPerkerasan');
	   restoreCondition('JasaPemadatanPersiapanTanahJalanSub');
	   
        // skip level 3 restoreCondition('JasaJalanPerkerasanSub');
     
        //hapus elemen div id lain
	removeCondition('ProdukInFur');
        removeCondition('MaterialKons');
	removeCondition('ProdukKons');
        //removeCondition('ProdukKonsSaluran');
        //removeCondition('ProdukKonsSaluran');
        removeCondition('JasaKonsPerbaikan');
       	removeCondition('JasaKons');
       	removeCondition('JasaKonsSub');
       	removeCondition('MenuKons');
       	removeCondition('JasaKonsFinishing');
        removeCondition('JasaKonsStruktur');
        removeCondition('JasaKonsPondasiTanah');
        removeCondition('JasaKonsPembatas');

        //hapus elemen SUB jasa jalan & perkerasan lain
        removeCondition('JasaPembangunanInfrastrukturJalanSub');
        removeCondition('JasaPerkerasanJalanSub');
     removeCondition('JasaJalanPerkerasanSub');
	//hapus elemen SUB JASA PERKERASAN LAIN SEMUA NYA
	
	removeCondition('JasaPengerasanJalanSub');
	removeCondition('JasaPavingBlockJalanSub');
        removeCondition('JasaPengaspalanJalanSub');
        removeCondition('JasaPengecoranJalanBetonSub');

	
        removeCondition('JasaPerkerasanAgregatJalanSub');

	
        removeCondition('JasaTimbunanSubbaseJalanSub');
        removeCondition('JasaPerkerasanBaseCourseJalanSub');
        removeCondition('JasaPerkerasanJalanKerikilSub');
        removeCondition('JasaPerkuatanDasarTanahJalanSub');
        removeCondition('JasaPerkerasanJalanBetonSub');
        removeCondition('JasaPerkerasanJalanAspalSub');
        removeCondition('JasaPerkerasanJalanKompositSub');
    	
	
        JasaKonstruksiJalanPerkerasanSubLink.style.visibility = 'visible';
        JasaPemadatanPersiapanTanahJalanSubLink.style.visibility = 'visible';
	    
        //level 3 breadcrumbs di skip JasaJalanPerkerasanSubLink.style.visibility = 'visible';
        pageNameJasaKonsJalanPerkerasan.textContent = urlMappingJasaPemadatanPersiapanTanahJalan[cleanUrlJasaJalanPerkerasanKons];
    }
 // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaPemadatanPersiapanTanahJalan[cleanUrlJasaJalanPerkerasanKons]) {
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
			     /*skip aja 
               {
                   "@type": "ListItem",
                   "position": 3,
                   "name": "Jasa Jalan & Perkerasan",
                   "item": "https://www.betonjayareadymix.com/p/jasa-jalan-perkerasan.html"
               },
			 */
               {
                   "@type": "ListItem",
                   "position": 3,
                   "name": "Jasa Pemadatan dan Persiapan Tanah Jalan",
                   "item": "https://www.betonjayareadymix.com/p/jasa-pemadatan-dan-persiapan-tanah-jalan.html"
               },
               {
                   "@type": "ListItem",
                   "position": 4,
                   "name": urlMappingJasaPemadatanPersiapanTanahJalan[cleanUrlJasaJalanPerkerasanKons],
                   "item": cleanUrlJasaJalanPerkerasanKons
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }    
   if (urlMappingJasaPerkerasanJalan[cleanUrlJasaJalanPerkerasanKons]) {
        restoreCondition('JasaKonsJalanPerkerasan');
        restoreCondition('JasaPerkerasanJalanSub');
     
        //hapus elemen div id lain
	removeCondition('ProdukInFur');
        removeCondition('MaterialKons');
	removeCondition('ProdukKons');
        //removeCondition('ProdukKonsSaluran');
        //removeCondition('ProdukKonsSaluran');
        removeCondition('JasaKonsPerbaikan');
       	removeCondition('JasaKons');
       	removeCondition('JasaKonsSub');
       	removeCondition('MenuKons');
       	removeCondition('JasaKonsFinishing');
        removeCondition('JasaKonsStruktur');
        removeCondition('JasaKonsPondasiTanah');
        removeCondition('JasaKonsPembatas');

        //hapus elemen SUB jasa jalan & perkerasan lain
        removeCondition('JasaPemadatanPersiapanTanahJalanSub');
        removeCondition('JasaPembangunanInfrastrukturJalanSub');
    //skip level 3 JasaJalanPerkerasanSub
	removeCondition('JasaJalanPerkerasanSub');
	//hapus elemen SUB JASA PERKERASAN LAIN SEMUA NYA
	removeCondition('JasaPengerasanJalanSub');
	removeCondition('JasaPavingBlockJalanSub');
        removeCondition('JasaPengaspalanJalanSub');
        removeCondition('JasaPengecoranJalanBetonSub');

	
        removeCondition('JasaPerkerasanAgregatJalanSub');

	
        removeCondition('JasaTimbunanSubbaseJalanSub');
        removeCondition('JasaPerkerasanBaseCourseJalanSub');
        removeCondition('JasaPerkerasanJalanKerikilSub');
        removeCondition('JasaPerkuatanDasarTanahJalanSub');
        removeCondition('JasaPerkerasanJalanBetonSub');
        removeCondition('JasaPerkerasanJalanAspalSub');
        removeCondition('JasaPerkerasanJalanKompositSub');
    	
	
        JasaKonstruksiJalanPerkerasanSubLink.style.visibility = 'visible';
        //JasaJalanPerkerasanSubLink.style.visibility = 'visible';
	  
        JasaPerkerasanJalanSubLink.style.visibility = 'visible';
        pageNameJasaKonsJalanPerkerasan.textContent = urlMappingJasaPerkerasanJalan[cleanUrlJasaJalanPerkerasanKons];
    }
 // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaPerkerasanJalan[cleanUrlJasaJalanPerkerasanKons]) {
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
			    /*skip level
               {
                   "@type": "ListItem",
                   "position": 3,
                   "name": "Jasa Jalan & Perkerasan",
                   "item": "https://www.betonjayareadymix.com/p/jasa-jalan-perkerasan.html"
               },
			  */
               {
                   "@type": "ListItem",
                   "position": 3,
                   "name": "Jasa Perkerasan Jalan",
                   "item": "https://www.betonjayareadymix.com/p/jasa-perkerasan-jalan.html"
               },
               {
                   "@type": "ListItem",
                   "position": 4,
                   "name": urlMappingJasaPerkerasanJalan[cleanUrlJasaJalanPerkerasanKons],
                   "item": cleanUrlJasaJalanPerkerasanKons
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }  
/*SUB MAPPING Jasa Perkerasan Jalan : 
   "https://www.betonjayareadymix.com/p/jasa-perkerasan-agregat-jalan.html": "Jasa Perkerasan Agregat Jalan",
  "https://www.betonjayareadymix.com/p/jasa-pengerasan-jalan.html": "Jasa Pengerasan Jalan",
  "https://www.betonjayareadymix.com/p/jasa-pengecoran-jalan-beton.html": "Jasa Pengecoran Jalan Beton",
  "https://www.betonjayareadymix.com/p/jasa-pengaspalan-jalan.html": "Jasa Pengaspalan Jalan",
  "https://www.betonjayareadymix.com/p/jasa-paving-block-jalan.html": "Jasa Paving Block Jalan" */

if (urlMappingJasaPengerasanJalan[cleanUrlJasaJalanPerkerasanKons]) {
        restoreCondition('JasaKonsJalanPerkerasan');
	   restoreCondition('JasaPengerasanJalanSub');

        //hapus elemen div id lain
	removeCondition('ProdukInFur');
        removeCondition('MaterialKons');
	removeCondition('ProdukKons');
        //removeCondition('ProdukKonsSaluran');
        //removeCondition('ProdukKonsSaluran');
        removeCondition('JasaKonsPerbaikan');
       	removeCondition('JasaKons');
       	removeCondition('JasaKonsSub');
       	removeCondition('MenuKons');
       	removeCondition('JasaKonsFinishing');
        removeCondition('JasaKonsStruktur');
        removeCondition('JasaKonsPondasiTanah');
        removeCondition('JasaKonsPembatas');

        //hapus elemen SUB jasa JALAN & PERKERASAN lain SELAIN JasaPerkerasanJalanSub
        removeCondition('JasaPemadatanPersiapanTanahJalanSub');
        removeCondition('JasaPembangunanInfrastrukturJalanSub');
	 removeCondition('JasaPerkerasanJalanSub');
	 // skip level 3
	removeCondition('JasaJalanPerkerasanSub');
    
	//hapus elemen SUB JASA PERKERASAN LAIN SEMUA NYA SELAIN JasaPengerasanJalanSub
        removeCondition('JasaPavingBlockJalanSub');
        removeCondition('JasaPengaspalanJalanSub');
        removeCondition('JasaPengecoranJalanBetonSub');

	
        removeCondition('JasaPerkerasanAgregatJalanSub');

	
        removeCondition('JasaTimbunanSubbaseJalanSub');
        removeCondition('JasaPerkerasanBaseCourseJalanSub');
        removeCondition('JasaPerkerasanJalanKerikilSub');
        removeCondition('JasaPerkuatanDasarTanahJalanSub');
        removeCondition('JasaPerkerasanJalanBetonSub');
        removeCondition('JasaPerkerasanJalanAspalSub');
        removeCondition('JasaPerkerasanJalanKompositSub');
    	
	
        JasaKonstruksiJalanPerkerasanSubLink.style.visibility = 'visible';
	   //pengerasan jalan bagian dari jasa jalan & perkerasan
        JasaPengerasanJalanSubLink.style.visibility = 'visible';
	    
	    //skip level 3 JasaJalanPerkerasanSubLink.style.visibility = 'visible';
        pageNameJasaKonsJalanPerkerasan.textContent = urlMappingJasaPengerasanJalan[cleanUrlJasaJalanPerkerasanKons];
    }
	
   // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaPengerasanJalan[cleanUrlJasaJalanPerkerasanKons]) {
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
			   /* skip level
               {
                   "@type": "ListItem",
                   "position": 3,
                   "name": "Jasa Jalan & Perkerasan",
                   "item": "https://www.betonjayareadymix.com/p/jasa-jalan-perkerasan.html"
               },
			   */
			    {
                   "@type": "ListItem",
                   "position": 3,
                   "name": "Jasa Pengerasan Jalan",
                   "item": "https://www.betonjayareadymix.com/p/jasa-pengerasan-jalan.html"
               },
               {
                   "@type": "ListItem",
                   "position": 4,
                   "name": urlMappingJasaPengerasanJalan[cleanUrlJasaJalanPerkerasanKons],
                   "item": cleanUrlJasaJalanPerkerasanKons
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   } 
/*
if (urlMappingJasaPerkerasanJalanBeton[cleanUrlJasaJalanPerkerasanKons]) {
        restoreCondition('JasaKonsJalanPerkerasan');
        restoreCondition('JasaPerkerasanJalanSub');

	restoreCondition('JasaPerkerasanJalanBetonSub');
     
        //hapus elemen div id lain
	removeCondition('ProdukInFur');
        removeCondition('MaterialKons');
	removeCondition('ProdukKons');
        //removeCondition('ProdukKonsSaluran');
        //removeCondition('ProdukKonsSaluran');
        removeCondition('JasaKonsPerbaikan');
       	removeCondition('JasaKons');
       	removeCondition('JasaKonsSub');
       	removeCondition('MenuKons');
       	removeCondition('JasaKonsFinishing');
        removeCondition('JasaKonsStruktur');
        removeCondition('JasaKonsPondasiTanah');
        removeCondition('JasaKonsPembatas');
	
        //hapus elemen SUB jasa JALAN & PERKERASAN lain SELAIN JasaPerkerasanJalanSub
        removeCondition('JasaPemadatanPersiapanTanahJalanSub');
        removeCondition('JasaPembangunanInfrastrukturJalanSub');

	//hapus elemen SUB JASA PERKERASAN LAIN SEMUA NYA SELAIN JasaPengerasanJalanSub
        removeCondition('JasaPavingBlockJalanSub');
        removeCondition('JasaPengaspalanJalanSub');
        removeCondition('JasaPengecoranJalanBetonSub');

	
        removeCondition('JasaPerkerasanAgregatJalanSub');

	
        removeCondition('JasaTimbunanSubbaseJalanSub');
        removeCondition('JasaPerkerasanBaseCourseJalanSub');
        removeCondition('JasaPerkerasanJalanKerikilSub');
        removeCondition('JasaPerkuatanDasarTanahJalanSub');
        removeCondition('JasaPengerasanJalanSub');
        removeCondition('JasaPerkerasanJalanAspalSub');
        removeCondition('JasaPerkerasanJalanKompositSub');
    	
	
        JasaKonstruksiJalanPerkerasanSubLink.style.visibility = 'visible';
        JasaJalanPerkerasanSubLink.style.visibility = 'visible';
	    
        JasaPerkerasanJalanSubLink.style.visibility = 'visible';

	JasaPerkerasanJalanBetonSubLink.style.visibility = 'visible';
        pageNameJasaKonsJalanPerkerasan.textContent = urlMappingJasaPerkerasanJalanBeton[cleanUrlJasaJalanPerkerasanKons];
    }

// ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaPerkerasanJalanBeton[cleanUrlJasaJalanPerkerasanKons]) {
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
                   "name": "Jasa Jalan & Perkerasan",
                   "item": "https://www.betonjayareadymix.com/p/jasa-jalan-perkerasan.html"
               },
               {
                   "@type": "ListItem",
                   "position": 4,
                   "name": "Jasa Perkerasan Jalan",
                   "item": "https://www.betonjayareadymix.com/p/jasa-perkerasan-jalan.html"
               },
	       
               {
                   "@type": "ListItem",
                   "position": 5,
                   "name": "Jasa Perkerasan Jalan Beton",
                   "item": "https://www.betonjayareadymix.com/p/jasa-perkerasan-jalan-beton.html"
               },
		   
               {
                   "@type": "ListItem",
                   "position": 6,
                   "name": urlMappingJasaPerkerasanJalanBeton[cleanUrlJasaJalanPerkerasanKons],
                   "item": cleanUrlJasaJalanPerkerasanKons
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   } 
if (urlMappingJasaPerkerasanJalanAspal[cleanUrlJasaJalanPerkerasanKons]) {
        restoreCondition('JasaKonsJalanPerkerasan');
        restoreCondition('JasaPerkerasanJalanSub');

	restoreCondition('JasaPerkerasanJalanAspalSub');
     
        //hapus elemen div id lain
	removeCondition('ProdukInFur');
        removeCondition('MaterialKons');
	removeCondition('ProdukKons');
        //removeCondition('ProdukKonsSaluran');
        //removeCondition('ProdukKonsSaluran');
        removeCondition('JasaKonsPerbaikan');
       	removeCondition('JasaKons');
       	removeCondition('JasaKonsSub');
       	removeCondition('MenuKons');
       	removeCondition('JasaKonsFinishing');
        removeCondition('JasaKonsStruktur');
        removeCondition('JasaKonsPondasiTanah');
        removeCondition('JasaKonsPembatas');

        //hapus elemen SUB jasa JALAN & PERKERASAN lain SELAIN JasaPerkerasanJalanSub
        removeCondition('JasaPemadatanPersiapanTanahJalanSub');
        removeCondition('JasaPembangunanInfrastrukturJalanSub');

	//hapus elemen SUB JASA PERKERASAN LAIN SEMUA NYA SELAIN JasaPengerasanJalanSub
        removeCondition('JasaPavingBlockJalanSub');
        removeCondition('JasaPengaspalanJalanSub');
        removeCondition('JasaPengecoranJalanBetonSub');

	
        removeCondition('JasaPerkerasanAgregatJalanSub');

	
        removeCondition('JasaTimbunanSubbaseJalanSub');
        removeCondition('JasaPerkerasanBaseCourseJalanSub');
        removeCondition('JasaPerkerasanJalanKerikilSub');
        removeCondition('JasaPerkuatanDasarTanahJalanSub');
        removeCondition('JasaPerkerasanJalanBetonSub');
        removeCondition('JasaPengerasanJalanSub');
        removeCondition('JasaPerkerasanJalanKompositSub');
    	
	
        JasaKonstruksiJalanPerkerasanSubLink.style.visibility = 'visible';
        JasaJalanPerkerasanSubLink.style.visibility = 'visible';
	    
        JasaPerkerasanJalanSubLink.style.visibility = 'visible';

	JasaPerkerasanJalanAspalSubLink.style.visibility = 'visible';
        pageNameJasaKonsJalanPerkerasan.textContent = urlMappingJasaPerkerasanJalanAspal[cleanUrlJasaJalanPerkerasanKons];
    }
// ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaPerkerasanJalanAspal[cleanUrlJasaJalanPerkerasanKons]) {
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
                   "name": "Jasa Jalan & Perkerasan",
                   "item": "https://www.betonjayareadymix.com/p/jasa-jalan-perkerasan.html"
               },
               {
                   "@type": "ListItem",
                   "position": 4,
                   "name": "Jasa Perkerasan Jalan",
                   "item": "https://www.betonjayareadymix.com/p/jasa-perkerasan-jalan.html"
               },
	       
               {
                   "@type": "ListItem",
                   "position": 5,
                   "name": "Jasa Perkerasan Jalan Aspal",
                   "item": "https://www.betonjayareadymix.com/p/jasa-perkerasan-jalan-aspal.html"
               },
		   
               {
                   "@type": "ListItem",
                   "position": 6,
                   "name": urlMappingJasaPerkerasanJalanAspal[cleanUrlJasaJalanPerkerasanKons],
                   "item": cleanUrlJasaJalanPerkerasanKons
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   } 
   
if (urlMappingJasaPerkerasanJalanKomposit[cleanUrlJasaJalanPerkerasanKons]) {
        restoreCondition('JasaKonsJalanPerkerasan');
        restoreCondition('JasaPerkerasanJalanSub');

	restoreCondition('JasaPerkerasanJalanKompositSub');
     
        //hapus elemen div id lain
	removeCondition('ProdukInFur');
        removeCondition('MaterialKons');
	removeCondition('ProdukKons');
        //removeCondition('ProdukKonsSaluran');
        //removeCondition('ProdukKonsSaluran');
        removeCondition('JasaKonsPerbaikan');
       	removeCondition('JasaKons');
       	removeCondition('JasaKonsSub');
       	removeCondition('MenuKons');
       	removeCondition('JasaKonsFinishing');
        removeCondition('JasaKonsStruktur');
        removeCondition('JasaKonsPondasiTanah');
        removeCondition('JasaKonsPembatas');
	
JasaKonsJalanPerkerasan
JasaKonstruksiJalanPerkerasanSub
JasaJalanPerkerasanSub


JasaPembangunanInfrastrukturJalanSub
JasaPemadatanPersiapanTanahJalanSub
JasaPerkerasanJalanSub


        //hapus elemen SUB jasa JALAN & PERKERASAN lain SELAIN JasaPerkerasanJalanSub
        removeCondition('JasaPemadatanPersiapanTanahJalanSub');
        removeCondition('JasaPembangunanInfrastrukturJalanSub');

	//hapus elemen SUB JASA PERKERASAN LAIN SEMUA NYA SELAIN JasaPengerasanJalanSub
        removeCondition('JasaPavingBlockJalanSub');
        removeCondition('JasaPengaspalanJalanSub');
        removeCondition('JasaPengecoranJalanBetonSub');

	
        removeCondition('JasaPerkerasanAgregatJalanSub');

	
        removeCondition('JasaTimbunanSubbaseJalanSub');
        removeCondition('JasaPerkerasanBaseCourseJalanSub');
        removeCondition('JasaPerkerasanJalanKerikilSub');
        removeCondition('JasaPerkuatanDasarTanahJalanSub');
        removeCondition('JasaPerkerasanJalanBetonSub');
        removeCondition('JasaPerkerasanJalanAspalSub');
        removeCondition('JasaPengerasanJalanSub');
    	
	
        JasaKonstruksiJalanPerkerasanSubLink.style.visibility = 'visible';
        JasaJalanPerkerasanSubLink.style.visibility = 'visible';
	    
        JasaPerkerasanJalanSubLink.style.visibility = 'visible';

	JasaPerkerasanJalanKompositSubLink.style.visibility = 'visible';
        pageNameJasaKonsJalanPerkerasan.textContent = urlMappingJasaPerkerasanJalanKomposit[cleanUrlJasaJalanPerkerasanKons];
    }
// ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaPerkerasanJalanKomposit[cleanUrlJasaJalanPerkerasanKons]) {
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
                   "name": "Jasa Jalan & Perkerasan",
                   "item": "https://www.betonjayareadymix.com/p/jasa-jalan-perkerasan.html"
               },
               {
                   "@type": "ListItem",
                   "position": 4,
                   "name": "Jasa Perkerasan Jalan",
                   "item": "https://www.betonjayareadymix.com/p/jasa-perkerasan-jalan.html"
               },
	       
               {
                   "@type": "ListItem",
                   "position": 5,
                   "name": "Jasa Perkerasan Jalan Komposit",
                   "item": "https://www.betonjayareadymix.com/p/jasa-perkerasan-jalan-komposit.html"
               },
		   
               {
                   "@type": "ListItem",
                   "position": 6,
                   "name": urlMappingJasaPerkerasanJalanKomposit[cleanUrlJasaJalanPerkerasanKons],
                   "item": cleanUrlJasaJalanPerkerasanKons
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   } */
       
   });
