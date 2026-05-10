/*
const urlMappingJasaPondasiBangunan = {
//"https://www.betonjayareadymix.com/p/jasa-borongan-pondasi.html": "Jasa Borongan Pondasi",
"https://www.betonjayareadymix.com/p/jasa-pondasi-cakar-ayam.html": "Jasa Pondasi Cakar Ayam",
  "https://www.betonjayareadymix.com/p/jasa-pondasi-tapak.html": "Jasa Pondasi Tapak",
  //ga usah karna udah ada di jasa pengeboran 
  //"https://www.betonjayareadymix.com/p/jasa-pondasi-bore-pile.html": "Jasa Pondasi Bore Pile",
  "https://www.betonjayareadymix.com/p/jasa-tiang-pancang.html": "Jasa Tiang Pancang",
  "https://www.betonjayareadymix.com/p/jasa-pondasi-sumuran.html": "Jasa Pondasi Sumuran"

};

const urlMappingJasaPemadatanPersiapanPondasi = {
"https://www.betonjayareadymix.com/p/jasa-pemadatan-pondasi-bangunan.html": "Jasa pemadatan pondasi bangunan",
  "https://www.betonjayareadymix.com/p/jasa-cut-and-fill-pondasi.html": "Jasa cut and fill pondasi",
  "https://www.betonjayareadymix.com/p/jasa-leveling-tanah-proyek-gedung.html": "Jasa leveling tanah proyek gedung",
  "https://www.betonjayareadymix.com/p/jasa-pembersihan-lahan-konstruksi.html": "Jasa pembersihan lahan konstruksi",
  "https://www.betonjayareadymix.com/p/jasa-uji-kepadatan-tanah-pondasi.html": "Jasa uji kepadatan tanah pondasi"

};

const urlMappingJasaPerkuatanTanah = {
"https://www.betonjayareadymix.com/p/jasa-soil-improvement.html": "Jasa Soil Improvement",
  "https://www.betonjayareadymix.com/p/jasa-perkuatan-tanah-geotextile.html": "Jasa Perkuatan Tanah Geotextile",
  "https://www.betonjayareadymix.com/p/jasa-perkuatan-tanah-stone-column.html": "Jasa Perkuatan Tanah Stone Column",
  "https://www.betonjayareadymix.com/p/jasa-vertical-drain.html": "Jasa Vertical Drain",
  "https://www.betonjayareadymix.com/p/jasa-soil-nailing.html": "Jasa Soil Nailing"

};

const urlMappingJasaRetrofittingPondasi = {
"https://www.betonjayareadymix.com/p/jasa-perkuatan-pondasi-bangunan-lama.html": "Jasa Perkuatan Pondasi Bangunan Lama",
  "https://www.betonjayareadymix.com/p/jasa-pondasi-untuk-penurunan-tanah.html": "Jasa Pondasi Untuk Penurunan Tanah",
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-pondasi-penurunan-tanah.html": "Jasa Perbaikan Pondasi Penurunan Tanah",
  "https://www.betonjayareadymix.com/p/retrofitting-pondasi-penambahan-lantai.html": "Retrofitting Pondasi Penambahan Lantai",
  "https://www.betonjayareadymix.com/p/jasa-underpinning-pondasi.html": "Jasa Underpinning Pondasi",
  "https://www.betonjayareadymix.com/p/jasa-grouting-pondasi.html": "Jasa Grouting Pondasi"
	
};
*/
// ============================================================
// 🔍 ENTITY TYPE: JASA (Pondasi & Perkuatan Tanah)
// ATURAN: JASA TIDAK BOLEH MENGGUNAKAN MONEY_MASTER
// ✅ Gunakan: SUB2 (Informasional 60%) atau MONEY_PAGE (Komersial+Transaksional)
// ✅ Gunakan: VARIANT (Komersial 80%) UNTUK SPESIFIKASI TEKNIS YANG SANGAT DETAIL
// ❌ Dilarang: MONEY_MASTER untuk JASA
//
// ⚠️ KOREKSI UTAMA:
// 1. Halaman dengan konten INFORMASIONAL/EDUKASI → TYPE: SUB2
// 2. Halaman dengan konten HARGA/TRANSAKSIONAL → TYPE: MONEY_PAGE
// 3. Halaman dengan SPESIFIKASI TEKNIS SANGAT DETAIL → TYPE: VARIANT
// 4. SUB2 (Level 2) → SUB2 (Level 3) → MONEY_PAGE (Level 5)
// 5. SUB2 TIDAK BOLEH LANGSUNG KE VARIANT
// ============================================================

// ============================================================
// 📁 LEVEL 2 - SUB2 (Kategori Utama - Turunan dari PILLAR Jasa Konstruksi)
// ============================================================

const urlMappingPondasiPerkuatanTanahFromPillarSub2 = {
  "https://www.betonjayareadymix.com/p/jasa-pondasi-perkuatan-tanah.html": "Jasa Pondasi & Perkuatan Tanah",  // TYPE: SUB2
};

// ============================================================
// 📁 LEVEL 3 - SUB2 (Sub-Kategori - BUKAN VARIANT!)
// 🧠 TYPE: SUB2 (Intent Informasional 60%)
// ALASAN: Konten bersifat edukasi/panduan, bukan spesifikasi teknis detail
// ============================================================

const urlMappingJasaPondasiBangunanFromSub2Sub2 = {
  // [SUB2] - Jasa Pondasi Bangunan (KATEGORI, BUKAN VARIANT)
  "https://www.betonjayareadymix.com/p/jasa-pondasi-bangunan.html": "Jasa Pondasi Bangunan",  // TYPE: SUB2
  
  // [SUB2] - Jasa Pondasi Cakar Ayam (EDUKASI, BUKAN VARIANT)
  "https://www.betonjayareadymix.com/p/jasa-pondasi-cakar-ayam.html": "Jasa Pondasi Cakar Ayam",  // TYPE: SUB2

  // [SUB2] - Jasa Pondasi Tapak (EDUKASI)
  "https://www.betonjayareadymix.com/p/jasa-pondasi-tapak.html": "Jasa Pondasi Tapak",  // TYPE: SUB2

  // [SUB2] - Jasa Tiang Pancang (EDUKASI)
  "https://www.betonjayareadymix.com/p/jasa-tiang-pancang.html": "Jasa Tiang Pancang",  // TYPE: SUB2

  // [SUB2] - Jasa Pondasi Sumuran (EDUKASI)
  "https://www.betonjayareadymix.com/p/jasa-pondasi-sumuran.html": "Jasa Pondasi Sumuran",  // TYPE: SUB2
};

const urlMappingJasaPemadatanPersiapanPondasiFromSub2Sub2 = {
  // [SUB2] - Jasa Pemadatan & Persiapan Pondasi (KATEGORI)
  "https://www.betonjayareadymix.com/p/jasa-pemadatan-persiapan-pondasi.html": "Jasa Pemadatan & Persiapan Pondasi",  // TYPE: SUB2
  
  // [SUB2] - Jasa Pemadatan Pondasi Bangunan (EDUKASI)
  "https://www.betonjayareadymix.com/p/jasa-pemadatan-pondasi-bangunan.html": "Jasa Pemadatan Pondasi Bangunan",  // TYPE: SUB2

  // [SUB2] - Jasa Cut and Fill Pondasi (EDUKASI)
  "https://www.betonjayareadymix.com/p/jasa-cut-and-fill-pondasi.html": "Jasa Cut and Fill Pondasi",  // TYPE: SUB2

  // [SUB2] - Jasa Leveling Tanah Proyek Gedung (EDUKASI)
  "https://www.betonjayareadymix.com/p/jasa-leveling-tanah-proyek-gedung.html": "Jasa Leveling Tanah Proyek Gedung",  // TYPE: SUB2

  // [SUB2] - Jasa Pembersihan Lahan Konstruksi (EDUKASI)
  "https://www.betonjayareadymix.com/p/jasa-pembersihan-lahan-konstruksi.html": "Jasa Pembersihan Lahan Konstruksi",  // TYPE: SUB2

  // [SUB2] - Jasa Uji Kepadatan Tanah Pondasi (EDUKASI)
  "https://www.betonjayareadymix.com/p/jasa-uji-kepadatan-tanah-pondasi.html": "Jasa Uji Kepadatan Tanah Pondasi",  // TYPE: SUB2
};

const urlMappingJasaPerkuatanTanahFromSub2Sub2 = {
  // [SUB2] - Jasa Perkuatan Tanah (KATEGORI)
  "https://www.betonjayareadymix.com/p/jasa-perkuatan-tanah.html": "Jasa Perkuatan Tanah",  // TYPE: SUB2
  
  // [SUB2] - Jasa Soil Improvement (EDUKASI - BUKAN VARIANT)
  "https://www.betonjayareadymix.com/p/jasa-soil-improvement.html": "Jasa Soil Improvement",  // TYPE: SUB2

  // [SUB2] - Jasa Perkuatan Tanah Geotextile (EDUKASI)
  "https://www.betonjayareadymix.com/p/jasa-perkuatan-tanah-geotextile.html": "Jasa Perkuatan Tanah Geotextile",  // TYPE: SUB2

  // [SUB2] - Jasa Perkuatan Tanah Stone Column (EDUKASI)
  "https://www.betonjayareadymix.com/p/jasa-perkuatan-tanah-stone-column.html": "Jasa Perkuatan Tanah Stone Column",  // TYPE: SUB2

  // [SUB2] - Jasa Vertical Drain (EDUKASI)
  "https://www.betonjayareadymix.com/p/jasa-vertical-drain.html": "Jasa Vertical Drain",  // TYPE: SUB2

  // [SUB2] - Jasa Soil Nailing (EDUKASI)
  "https://www.betonjayareadymix.com/p/jasa-soil-nailing.html": "Jasa Soil Nailing",  // TYPE: SUB2
};

const urlMappingJasaRetrofittingPondasiFromSub2Sub2 = {
  // [SUB2] - Jasa Retrofitting Pondasi (KATEGORI)
  "https://www.betonjayareadymix.com/p/jasa-retrofitting-pondasi.html": "Jasa Retrofitting Pondasi",  // TYPE: SUB2
  
  // [SUB2] - Jasa Perkuatan Pondasi Bangunan Lama (EDUKASI)
  "https://www.betonjayareadymix.com/p/jasa-perkuatan-pondasi-bangunan-lama.html": "Jasa Perkuatan Pondasi Bangunan Lama",  // TYPE: SUB2

  // [SUB2] - Jasa Pondasi Untuk Penurunan Tanah (EDUKASI)
  "https://www.betonjayareadymix.com/p/jasa-pondasi-untuk-penurunan-tanah.html": "Jasa Pondasi Untuk Penurunan Tanah",  // TYPE: SUB2

  // [SUB2] - Jasa Perbaikan Pondasi Penurunan Tanah (EDUKASI)
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-pondasi-penurunan-tanah.html": "Jasa Perbaikan Pondasi Penurunan Tanah",  // TYPE: SUB2

  // ============================================================
  // ⚠️ KONTEN TIPIS (Kemungkinan hanya breadcrumb)
  // SARAN: Perbaiki konten atau redirect ke halaman SUB2 yang lebih relevan
  // ============================================================
  "https://www.betonjayareadymix.com/p/retrofitting-pondasi-penambahan-lantai.html": "Retrofitting Pondasi Penambahan Lantai",  // TYPE: SUB2 - KONTEN TIPIS
  "https://www.betonjayareadymix.com/p/jasa-underpinning-pondasi.html": "Jasa Underpinning Pondasi",  // TYPE: SUB2 - KONTEN TIPIS
  "https://www.betonjayareadymix.com/p/jasa-grouting-pondasi.html": "Jasa Grouting Pondasi",  // TYPE: SUB2 - KONTEN TIPIS
};

// ============================================================
// 📁 LEVEL 5 - MONEY_PAGE (Harga Jasa) - BRIDGE antara SUB2 dan VARIANT
// 🧠 TYPE: MONEY_PAGE (Komersial 60% + Transaksional 40%)
// 🟡 STATUS: SEMUA URL BELUM AKTIF (404 atau perlu dibuat)
// ============================================================

const urlMappingHargaPondasiFromSub2MoneyPage = {
  // ============================================================
  // [MONEY_PAGE] - HARGA PONDASI CAKAR AYAM
  // 🟡 STATUS: PERLU DIBUAT KONTEN
  // ============================================================
  // "https://www.betonjayareadymix.com/2019/08/harga-pondasi-cakar-ayam.html": "Harga Pondasi Cakar Ayam",  // TYPE: MONEY_PAGE
  
  // ============================================================
  // [MONEY_PAGE] - HARGA PONDASI TAPAK
  // ============================================================
  // "https://www.betonjayareadymix.com/2019/08/harga-pondasi-tapak.html": "Harga Pondasi Tapak",  // TYPE: MONEY_PAGE
  
  // ============================================================
  // [MONEY_PAGE] - HARGA TIANG PANCANG
  // ============================================================
  // "https://www.betonjayareadymix.com/2019/08/harga-tiang-pancang.html": "Harga Tiang Pancang",  // TYPE: MONEY_PAGE
  
  // ============================================================
  // [MONEY_PAGE] - HARGA PEMADATAN TANAH
  // ============================================================
  // "https://www.betonjayareadymix.com/2019/08/harga-pemadatan-tanah.html": "Harga Pemadatan Tanah",  // TYPE: MONEY_PAGE
  
  // ============================================================
  // [MONEY_PAGE] - HARGA SOIL IMPROVEMENT
  // ============================================================
  // "https://www.betonjayareadymix.com/2019/08/harga-soil-improvement.html": "Harga Soil Improvement",  // TYPE: MONEY_PAGE
  
  // ============================================================
  // [MONEY_PAGE] - HARGA STONE COLUMN
  // ============================================================
  // "https://www.betonjayareadymix.com/2019/08/harga-stone-column.html": "Harga Stone Column",  // TYPE: MONEY_PAGE
  
  // ============================================================
  // [MONEY_PAGE] - HARGA RETROFITTING PONDASI
  // ⚠️ STATUS: URL 404 - PERLU DIBUAT KONTEN (jika diperlukan)
  // ============================================================
  // "https://www.betonjayareadymix.com/2019/08/harga-retrofitting-pondasi.html": "Harga Retrofitting Pondasi",  // TYPE: MONEY_PAGE (URL 404)
  
  // ============================================================
  // [MONEY_PAGE] - HARGA UNDERPINNING PONDASI
  // ⚠️ STATUS: URL 404 - PERLU DIBUAT KONTEN (jika diperlukan)
  // ============================================================
  // "https://www.betonjayareadymix.com/2019/08/harga-underpinning-pondasi.html": "Harga Underpinning Pondasi",  // TYPE: MONEY_PAGE (URL 404)
  
  // ============================================================
  // [MONEY_PAGE] - HARGA GROUTING PONDASI
  // ⚠️ STATUS: URL 404 - PERLU DIBUAT KONTEN (jika diperlukan)
  // ============================================================
  // "https://www.betonjayareadymix.com/2019/08/harga-grouting-pondasi.html": "Harga Grouting Pondasi",  // TYPE: MONEY_PAGE (URL 404)
};

// ============================================================
// 📁 LEVEL 7 - VARIANT (Spesifikasi Teknis Detail)
// 🧠 TYPE: VARIANT (Komersial 80%)
// ⚠️ HANYA untuk halaman dengan SPESIFIKASI TEKNIS YANG SANGAT DETAIL
// Contoh: "Spesifikasi Pondasi Cakar Ayam untuk Rumah 2 Lantai" (VARIANT)
// ============================================================

const urlMappingPondasiVariantFromMoneyPageVariant = {
  // 🟡 SARAN ITEM VARIANT (jika diperlukan - BELUM AKTIF)
  // "https://www.betonjayareadymix.com/p/spesifikasi-pondasi-cakar-ayam-2-lantai.html": "Spesifikasi Pondasi Cakar Ayam untuk Rumah 2 Lantai",  // TYPE: VARIANT
  // "https://www.betonjayareadymix.com/p/metode-soil-improvement-vacuum-consolidation.html": "Metode Soil Improvement Vacuum Consolidation",  // TYPE: VARIANT
};

// ============================================================
// 🔴 BREADCRUMB YANG BENAR (SETELAH KOREKSI)
// ============================================================

/*
📌 BREADCRUMB UNTUK HALAMAN SUB2 (LEVEL 2)

Halaman: Jasa Pondasi & Perkuatan Tanah
Breadcrumb (3 level):
Home > Jasa Konstruksi > Jasa Pondasi & Perkuatan Tanah

📌 BREADCRUMB UNTUK HALAMAN SUB2 (LEVEL 3)

Halaman: Jasa Pondasi Cakar Ayam, Jasa Soil Improvement, dll
Breadcrumb (4 level):
Home > Jasa Konstruksi > Jasa Pondasi & Perkuatan Tanah > Jasa Pondasi Cakar Ayam

📌 BREADCRUMB UNTUK HALAMAN MONEY_PAGE (jika dibuat nanti)

Halaman: Harga Pondasi Cakar Ayam
Breadcrumb (4 level):
Home > Jasa Konstruksi > Jasa Pondasi & Perkuatan Tanah > Harga Pondasi Cakar Ayam

📌 BREADCRUMB UNTUK HALAMAN VARIANT (jika dibuat nanti)

Halaman: Spesifikasi Pondasi Cakar Ayam untuk Rumah 2 Lantai
Breadcrumb (5 level - skip MONEY_PAGE jika perlu):
Home > Jasa Konstruksi > Jasa Pondasi & Perkuatan Tanah > Jasa Pondasi Cakar Ayam > Spesifikasi Pondasi Cakar Ayam 2 Lantai
*/

// ============================================================
// 📋 RINGKASAN KOREKSI TYPE
// ============================================================

/*
SEBELUM (SALAH)                    | SESUDAH (BENAR)
------------------------------------|-------------------------------------
TYPE: VARIANT untuk semua halaman   | TYPE: SUB2 untuk konten edukasi
Parent: SUB2 (Level 2) → VARIANT    | Parent: SUB2 (Level 2) → SUB2 (Level 3)
Loncat 5 level                      | Turun 1 level (sesuai aturan)
MONEY_MASTER dalam saran item       | MONEY_PAGE dalam saran item (karena JASA)

✅ KESIMPULAN:
1. Semua halaman dengan konten INFORMASIONAL/EDUKASI → TYPE: SUB2
2. VARIANT hanya untuk SPESIFIKASI TEKNIS YANG SANGAT DETAIL
3. MONEY_PAGE untuk harga JASA (bukan MONEY_MASTER)
4. SUB2 → MONEY_PAGE → VARIANT (jika VARIANT diperlukan nanti)
*/

// ============================================================
// 🔴 STATUS KONTEN YANG PERLU DIPERHATIKAN
// ============================================================

/*
| URL | Status | Rekomendasi |
|-----|--------|--------------|
| /p/jasa-pondasi-cakar-ayam.html | AKTIF ✅ | SUB2 - sudah benar |
| /p/jasa-pondasi-tapak.html | AKTIF ✅ | SUB2 - sudah benar |
| /p/jasa-perkuatan-tanah.html | AKTIF ✅ | SUB2 - sudah benar |
| /p/jasa-soil-improvement.html | Perlu dicek ⚠️ | Pastikan konten cukup sebagai SUB2 |
| /p/retrofitting-pondasi-penambahan-lantai.html | Konten tipis ⚠️ | Perbaiki konten atau redirect |
| /p/jasa-underpinning-pondasi.html | Konten tipis ⚠️ | Perbaiki konten atau redirect |
| /p/jasa-grouting-pondasi.html | Konten tipis ⚠️ | Perbaiki konten atau redirect |
| /2019/08/harga-*.html | 404 ❌ | Buat konten MONEY_PAGE jika diperlukan |
*/
/**
 * generateBreadcrumbForMapping v3.0 — FULL REVISI
 * ✅ Sesuai dengan hierarki 8 level (PHASE 1)
 * ✅ Validasi entity type (JASA tidak boleh MONEY_MASTER)
 * ✅ Deteksi bertahap sesuai PRIORITAS PHASE 1
 * ✅ Support semua entity type: PRODUK, JASA, MATERIAL, SEWA
 * ✅ Breadcrumb tidak loncat level (auto fix)
 * ✅ Intent detection bawaan
 * ✅ Evergreen vs Non-Evergreen detection
 * ✅ Clean code, siap produksi
 */
(function() {
    'use strict';
function generateBreadcrumbForMapping(mappingObj, currentUrl, breadcrumbItems = [], entityType = 'PRODUK_INTERIOR') {
    
    // ============================================================
    // 1. KONSTANTA & VALIDASI
    // ============================================================
    const MAX_LEVEL = 4;
    const DOMAIN = 'https://www.betonjayareadymix.com';
    
    const validEntityTypes = [
        'PRODUK_KONSTRUKSI', 'PRODUK_INTERIOR', 'PRODUK',
        'MATERIAL_KONSTRUKSI', 'MATERIAL',
        'JASA_KONSTRUKSI', 'JASA_DESAIN_INTERIOR', 'JASA',
        'SEWA', 'RENTAL', 'SEWA_RENTAL', 'SEWA_ALAT', 'RENTAL_ALAT'
    ];
    
    if (!validEntityTypes.includes(entityType)) {
        console.error(`❌ ERROR: "${entityType}" BUKAN ENTITY TYPE yang valid!`);
        console.error(`   Gunakan: ${validEntityTypes.join(', ')}`);
        return null;
    }
    
    // ============================================================
    // 2. HIERARKI 8 LEVEL (SESUAI PHASE 1)
    // ============================================================
    const VALID_PAGE_TYPES = [
        'pillar',                    // Level 1 - terluas
        'sub-pillar-tipe-2',         // Level 2
        'sub-pillar-tipe-1',         // Level 3
        'money-master',              // Level 4 (JASA DILARANG)
        'money-page',                // Level 5
        'money-child',               // Level 6
        'variant',                   // Level 7
        'sub-variant'                // Level 8 - terdalam
    ];
    
    const TYPE_LEVEL_MAP = {
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
    // 3. INTENT DOMINANCE (SESUAI PHASE 1.5)
    // ============================================================
    const INTENT_MAP = {
        'pillar': { primary: 'informasional', secondary: 'komersial', dominance: 90 },
        'sub-pillar-tipe-2': { primary: 'informasional', secondary: 'komersial', dominance: 60 },
        'sub-pillar-tipe-1': { primary: 'komersial', secondary: 'informasional', dominance: 70 },
        'money-master': { primary: 'transaksional', secondary: 'komersial', dominance: 80 },
        'money-page-produk': { primary: 'transaksional', secondary: 'komersial', dominance: 85 },
        'money-page-jasa': { primary: 'komersial', secondary: 'transaksional', dominance: 60 },
        'money-child-produk': { primary: 'transaksional', secondary: 'komersial', dominance: 90 },
        'money-child-jasa': { primary: 'komersial', secondary: 'transaksional', dominance: 60 },
        'variant': { primary: 'komersial', secondary: 'informasional', dominance: 80 },
        'sub-variant': { primary: 'komersial', secondary: 'informasional', dominance: 70 }
    };
    
    // ============================================================
    // 4. EVERGREEN vs NON-EVERGREEN (SESUAI PHASE 1)
    // ============================================================
    const EVERGREEN_STATUS = {
        'pillar': { evergreen: true, wajibTahun: false },
        'sub-pillar-tipe-2': { evergreen: true, wajibTahun: false },
        'sub-pillar-tipe-1': { evergreen: false, wajibTahun: false, catatan: 'tergantung topik' },
        'money-master': { evergreen: false, wajibTahun: true },
        'money-page-produk': { evergreen: false, wajibTahun: true },
        'money-page-jasa': { evergreen: false, wajibTahun: false, catatan: 'fleksibel' },
        'money-child-produk': { evergreen: false, wajibTahun: true },
        'money-child-jasa': { evergreen: false, wajibTahun: false, catatan: 'fleksibel' },
        'variant': { evergreen: true, wajibTahun: false },
        'sub-variant': { evergreen: true, wajibTahun: false }
    };
    
    // ============================================================
    // 5. WHITELIST LOKASI (200+ KOTA)
    // ============================================================
    const LOCATION_WHITELIST = [
        // Jabodetabek
        'jakarta', 'bogor', 'depok', 'tangerang', 'bekasi', 'jabodetabek',
        'jakpus', 'jakbar', 'jaksel', 'jakut', 'jaktim',
        'tangerang selatan', 'tangsel', 'bintaro', 'alam sutera', 'gading serpong',
        // Jawa Barat
        'bandung', 'cimahi', 'cirebon', 'tasikmalaya', 'sukabumi', 'garut', 
        'sumedang', 'purwakarta', 'karawang', 'subang', 'indramayu',
        'majalengka', 'kuningan', 'ciamis', 'banjar', 'pangandaran', 'cianjur',
        // Jawa Tengah
        'semarang', 'solo', 'surakarta', 'yogyakarta', 'jogja', 'magelang', 
        'salatiga', 'pekalongan', 'tegal', 'brebes', 'cilacap', 'purwokerto', 
        'kebumen', 'banjarnegara', 'wonosobo', 'temanggung', 'kendal', 'demak', 
        'kudus', 'jepara', 'pati', 'rembang', 'blora', 'grobagan', 'sragen', 
        'karanganyar', 'wonogiri', 'sukoharjo', 'klaten', 'boyolali',
        // Jawa Timur
        'surabaya', 'malang', 'kediri', 'blitar', 'madiun', 'ponorogo', 'ngawi', 
        'magetan', 'trenggalek', 'tulungagung', 'nganjuk', 'jombang', 'mojokerto', 
        'gresik', 'sidoarjo', 'pasuruan', 'probolinggo', 'lumajang', 'jember', 
        'banyuwangi', 'bondowoso', 'situbondo', 'pamekasan', 'sampang', 'sumenep', 
        'bangkalan', 'bojonegoro', 'tuban', 'lamongan',
        // Sumatera
        'medan', 'binjai', 'pematangsiantar', 'tanjungbalai', 'tebingtinggi', 'deli serdang',
        'padang', 'bukittinggi', 'payakumbuh', 'solok', 'sawahlunto', 'padang panjang',
        'pekanbaru', 'dumai', 'bengkalis', 'kampar', 'riau', 'batam', 'tanjungpinang',
        'palembang', 'lubuklinggau', 'prabumulih', 'ogan ilir', 'ogan komering',
        'bandar lampung', 'metro', 'lampung', 'jambi', 'sungai penuh', 'bengkulu',
        'pangkalpinang', 'tanjung pandan', 'aceh', 'banda aceh', 'lhonga', 'sigli',
        // Kalimantan
        'pontianak', 'singkawang', 'ketapang', 'sambas', 'kalimantan barat',
        'balikpapan', 'samarinda', 'bontang', 'kutai', 'penajam', 'kalimantan timur',
        'banjarmasin', 'banjarbaru', 'kalimantan selatan', 'palangkaraya', 'kalimantan tengah',
        'tanjung selor', 'kalimantan utara',
        // Sulawesi
        'makassar', 'parepare', 'palopo', 'sulawesi selatan', 'manado', 'bitung', 'tomohon',
        'kotamobagu', 'sulawesi utara', 'palu', 'sulawesi tengah', 'kendari', 'baubau',
        'sulawesi tenggara', 'gorontalo', 'sulawesi barat', 'mamuju',
        // Bali & Nusa Tenggara
        'denpasar', 'badung', 'gianyar', 'tabanan', 'bangli', 'klungkung', 'karangasem',
        'buleleng', 'jembrana', 'bali', 'mataram', 'bima', 'dompu', 'sumbawa', 'lombok',
        'kupang', 'soe', 'atambua', 'ntt', 'ntb',
        // Maluku & Papua
        'ambon', 'tual', 'maluku', 'ternate', 'tidore', 'maluku utara',
        'jayapura', 'wamena', 'timika', 'merauke', 'biak', 'sorong', 'manokwari', 'nabire',
        'papua', 'papua barat'
    ];
    
    const NOT_LOCATION_WORDS = [
        'mini', 'maxi', 'super', 'extra', 'plus', 'pro', 'max', 'ultra', 'deluxe',
        'baru', 'lama', 'bekas', 'second', 'original', 'kw', 'grade', 
        'murah', 'mahal', 'hemat', 'premium', 'standar', 'ekonomis', 
        'kecil', 'besar', 'sedang', 'panjang', 'pendek', 'tebal', 'tipis', 'lebar',
        'putih', 'hitam', 'merah', 'biru', 'hijau', 'kuning', 'ungu', 'abu', 'coklat',
        'minimalis', 'modern', 'klasik', 'industrial', 'skandinavia', 'jepang',
        'hpl', 'mdf', 'jati', 'kayu', 'besi', 'baja', 'aluminium', 'kaca'
    ];
    
    const SPECIFIC_PRODUCT_INDICATORS = [
        'galvalum', 'spandek', 'bondek', 'hpl', 'mdf', 'jati', 'mahoni',
        'excavator', 'bulldozer', 'crane', 'dump truck', 'vibro', 'stamper',
        'minimix', 'jayamix', 'readymix', 'beton cor', 'bata ringan', 'hebel',
        'pabrikan', 'minimalis', 'modern', 'premium', 'custom', 'bespoke'
    ];
    
    // ============================================================
    // 6. FUNGSI BANTUAN DETEKSI
    // ============================================================
    function isLocation(text) {
        const words = text.toLowerCase().split(/[\s,-]+/);
        for (const word of words) {
            if (NOT_LOCATION_WORDS.includes(word)) continue;
            if (LOCATION_WHITELIST.includes(word)) return true;
            if (word.length >= 5 && word.length <= 12) {
                const vowelCount = (word.match(/[aiueo]/g) || []).length;
                if (vowelCount >= 2 && !word.match(/[0-9]/)) return true;
            }
        }
        return false;
    }
    
    function isSpecificProduct(text) {
        const lowerText = text.toLowerCase();
        for (const indicator of SPECIFIC_PRODUCT_INDICATORS) {
            if (lowerText.includes(indicator)) return true;
        }
        // Deteksi ukuran/dimensi
        if (/\d+(\.\d+)?\s*(mm|cm|m|inch|meter)/.test(lowerText)) return true;
        return false;
    }
    
    function getIntentForPageType(pageType, entityType) {
        const isJasa = ['JASA_KONSTRUKSI', 'JASA_DESAIN_INTERIOR', 'JASA'].includes(entityType);
        
        if (pageType === 'pillar') return INTENT_MAP.pillar;
        if (pageType === 'sub-pillar-tipe-2') return INTENT_MAP['sub-pillar-tipe-2'];
        if (pageType === 'sub-pillar-tipe-1') return INTENT_MAP['sub-pillar-tipe-1'];
        if (pageType === 'money-master') return INTENT_MAP['money-master'];
        if (pageType === 'money-page') return isJasa ? INTENT_MAP['money-page-jasa'] : INTENT_MAP['money-page-produk'];
        if (pageType === 'money-child') return isJasa ? INTENT_MAP['money-child-jasa'] : INTENT_MAP['money-child-produk'];
        if (pageType === 'variant') return INTENT_MAP.variant;
        if (pageType === 'sub-variant') return INTENT_MAP['sub-variant'];
        
        return { primary: 'informasional', secondary: null, dominance: 50 };
    }
    
    function getEvergreenStatus(pageType, entityType) {
        const isJasa = ['JASA_KONSTRUKSI', 'JASA_DESAIN_INTERIOR', 'JASA'].includes(entityType);
        
        if (pageType === 'money-page' && isJasa) return EVERGREEN_STATUS['money-page-jasa'];
        if (pageType === 'money-child' && isJasa) return EVERGREEN_STATUS['money-child-jasa'];
        return EVERGREEN_STATUS[pageType] || { evergreen: true, wajibTahun: false };
    }
    
    // ============================================================
    // 7. DETEKSI PAGE TYPE (PRIORITAS SESUAI PHASE 1)
    // ============================================================
    function detectPageType(pageName, position, totalLevels, entityType) {
        const lowerName = pageName.toLowerCase();
        const isJasa = ['JASA_KONSTRUKSI', 'JASA_DESAIN_INTERIOR', 'JASA'].includes(entityType);
        
        // PRIORITAS 1: PILLAR (level 1, posisi pertama)
        if (position === 0) {
            return 'pillar';
        }
        
        // PRIORITAS 2: CEK KEYWORD HARGA/SEWA/BIAYA
        const hasPrice = lowerName.includes('harga ') || lowerName.includes('biaya ') || lowerName.includes('tarif ');
        const hasRent = lowerName.includes('sewa ') || lowerName.includes('rental ');
        
        if (hasPrice || hasRent) {
            // JASA TIDAK BOLEH MONEY_MASTER
            if (isJasa) {
                return 'money-page';
            }
            
            let afterKeyword = '';
            if (lowerName.includes('harga ')) afterKeyword = lowerName.substring(lowerName.indexOf('harga ') + 6);
            else if (lowerName.includes('biaya ')) afterKeyword = lowerName.substring(lowerName.indexOf('biaya ') + 6);
            else if (lowerName.includes('sewa ')) afterKeyword = lowerName.substring(lowerName.indexOf('sewa ') + 5);
            else if (lowerName.includes('rental ')) afterKeyword = lowerName.substring(lowerName.indexOf('rental ') + 7);
            
            // CEK LOKASI (MONEY_CHILD)
            if (isLocation(afterKeyword)) {
                return 'money-child';
            }
            
            // CEK PRODUK SPESIFIK (MONEY_PAGE)
            if (isSpecificProduct(afterKeyword)) {
                return 'money-page';
            }
            
            // CEK JUMLAH KATA
            const wordCount = afterKeyword.split(/\s+/).filter(w => w.length > 0).length;
            if (wordCount <= 2) {
                return 'money-master';
            }
            
            return 'money-page';
        }
        
        // PRIORITAS 3: SUB-VARIANT (level 8 - paling detail)
        if (/(\d+(\.\d+)?\s*mm\s*x\s*\d+(\.\d+)?\s*mm)/.test(lowerName) ||
            (lowerName.includes('tebal') && /\d+\s*mm/.test(lowerName)) ||
            (lowerName.includes('panjang') && /\d+\s*m/.test(lowerName))) {
            return 'sub-variant';
        }
        
        // PRIORITAS 4: VARIANT (level 7)
        const variantKeywords = ['spesifikasi', 'ukuran', 'tipe', 'type', 'model', 'varian', 'warna', 'merk', 'kapasitas'];
        for (const kw of variantKeywords) {
            if (lowerName.includes(kw)) return 'variant';
        }
        if (/\d+(\.\d+)?\s*(mm|cm|m|kg|ton)/.test(lowerName)) return 'variant';
        
        // PRIORITAS 5: SUB-PILLAR TIPE 1 (level 3 - perbandingan)
        const comparisonKeywords = ['vs', 'versus', 'perbandingan', 'lebih baik', 'mana yang', 'kelebihan', 'kekurangan'];
        for (const kw of comparisonKeywords) {
            if (lowerName.includes(kw)) return 'sub-pillar-tipe-1';
        }
        
        // PRIORITAS 6: SUB-PILLAR TIPE 2 (level 2 - jenis/macam)
        if (lowerName.startsWith('jenis ') || lowerName.startsWith('macam ') || lowerName.startsWith('tipe ') ||
            lowerName.includes('jenis-jenis') || lowerName.includes('macam-macam')) {
            return 'sub-pillar-tipe-2';
        }
        
        // DEFAULT: PILLAR
        return 'pillar';
    }
    
    // ============================================================
    // 8. KUMPULKAN DATA DARI MAPPING
    // ============================================================
    const allPageNames = [];
    if (mappingObj) {
        for (const [url, name] of Object.entries(mappingObj)) {
            if (name && typeof name === 'string') {
                allPageNames.push(name.toLowerCase());
            }
        }
    }
    
    function slugify(text) {
        return text.toLowerCase()
            .replace(/[^\w\s-]/g, '')
            .replace(/\s+/g, '-')
            .replace(/--+/g, '-')
            .trim();
    }
    
    // ============================================================
    // 9. BANGUN LEVELS DARI breadcrumbItems
    // ============================================================
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
        
        const pageType = detectPageType(name, i, breadcrumbItems.length, entityType);
        const intentData = getIntentForPageType(pageType, entityType);
        const evergreenData = getEvergreenStatus(pageType, entityType);
        
        allLevels.push({
            name: name,
            url: url,
            type: pageType,
            level: TYPE_LEVEL_MAP[pageType] || 99,
            intent: intentData,
            evergreen: evergreenData,
            position: i
        });
    }
    
    // ============================================================
    // 10. VALIDASI & PERBAIKI HIERARKI (TIDAK BOLEH LONCAT LEVEL)
    // ============================================================
    for (let i = 0; i < allLevels.length - 1; i++) {
        const current = allLevels[i];
        const next = allLevels[i + 1];
        
        if (next.level - current.level > 1) {
            console.warn(`⚠️ LEVEL JUMP: ${current.name}(${current.type} L${current.level}) → ${next.name}(${next.type} L${next.level})`);
            
            // Perbaiki dengan menaikkan level next
            const correctedIndex = Math.min(current.level + 1, 8);
            const correctedType = VALID_PAGE_TYPES[correctedIndex - 1];
            next.type = correctedType;
            next.level = correctedIndex;
            next.intent = getIntentForPageType(correctedType, entityType);
            next.evergreen = getEvergreenStatus(correctedType, entityType);
            
            console.log(`✅ DIPERBAIKI: ${next.name} → ${next.type} L${next.level}`);
        }
    }
    
    // ============================================================
    // 11. VALIDASI & FALLBACK URL
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
    // 12. TENTUKAN LEVEL YANG DITAMPILKAN (MAX 4 LEVEL)
    // ============================================================
    const selectedLevels = [];
    
    // Home (WAJIB)
    selectedLevels.push({ 
        name: 'Beranda', 
        url: DOMAIN, 
        isHome: true,
        type: 'pillar',
        level: 1,
        intent: INTENT_MAP.pillar,
        evergreen: EVERGREEN_STATUS.pillar
    });
    
    let remainingSlots = MAX_LEVEL - 2;
    
    console.log(`📊 ========================================`);
    console.log(`📊 Breadcrumb Generator v3.0 — FULL REVISI`);
    console.log(`📊 Entity Type: ${entityType}`);
    console.log(`📊 Max level: ${MAX_LEVEL}`);
    console.log(`📊 ========================================`);
    
    // Parent terdekat (WAJIB)
    let parentTerdekat = null;
    if (allLevels.length > 0) {
        parentTerdekat = allLevels[allLevels.length - 1];
        selectedLevels.push(parentTerdekat);
        remainingSlots--;
        console.log(`✅ WAJIB: "${parentTerdekat.name}" (${parentTerdekat.type} L${parentTerdekat.level})`);
    }
    
    // Level lainnya (prioritaskan level tertinggi)
    const otherLevels = [...allLevels.slice(0, allLevels.length - 1)].sort((a, b) => b.level - a.level);
    
    for (const level of otherLevels) {
        if (remainingSlots <= 0) {
            console.log(`📌 SKIP: "${level.name}" (${level.type} L${level.level}) - slot habis`);
            continue;
        }
        
        selectedLevels.splice(1, 0, level);
        remainingSlots--;
        console.log(`✅ TAMBAH: "${level.name}" (${level.type} L${level.level})`);
    }
    
    // Halaman saat ini (WAJIB)
    const currentFullUrl = currentUrl.startsWith('http') ? currentUrl : DOMAIN + currentUrl;
    const currentPageTitle = (() => {
        if (mappingObj && mappingObj[currentUrl]) return mappingObj[currentUrl];
        if (parentTerdekat) return parentTerdekat.name;
        return 'Halaman';
    })();
    
    const currentPageType = detectPageType(currentPageTitle, allLevels.length, allLevels.length, entityType);
    const currentIntent = getIntentForPageType(currentPageType, entityType);
    const currentEvergreen = getEvergreenStatus(currentPageType, entityType);
    
    selectedLevels.push({
        name: currentPageTitle,
        url: currentFullUrl,
        isCurrent: true,
        type: currentPageType,
        level: TYPE_LEVEL_MAP[currentPageType] || 99,
        intent: currentIntent,
        evergreen: currentEvergreen
    });
    
    // Update position
    for (let i = 0; i < selectedLevels.length; i++) {
        selectedLevels[i].position = i + 1;
    }
    
    console.log(`✅ FINAL (${selectedLevels.length} level): ${selectedLevels.map(l => `${l.name}(${l.type})`).join(' → ')}`);
    console.log(`📊 Current page type: ${currentPageType}`);
    console.log(`📊 Intent: ${currentIntent.primary} (${currentIntent.dominance}%)`);
    console.log(`📊 Evergreen: ${currentEvergreen.evergreen ? 'YES' : 'NO'} | Wajib Tahun: ${currentEvergreen.wajibTahun ? 'YES' : 'NO'}`);
    
    // ============================================================
    // 13. GENERATE HTML BREADCRUMB + JSON-LD
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
    
    // ============================================================
    // 14. INJECT KE DOM
    // ============================================================
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
    script.textContent = JSON.stringify(jsonLd);
    document.head.appendChild(script);
    
    console.log(`✅ Breadcrumb injected for entity: ${entityType}`);
    console.log(`📊 ========================================`);
    
    // ============================================================
    // 15. RETURN LENGKAP
    // ============================================================
    return {
        html: breadcrumbHtml,
        jsonLd: jsonLd,
        selectedLevels: selectedLevels,
        currentPageType: currentPageType,
        currentIntent: currentIntent,
        currentEvergreen: currentEvergreen,
        entityType: entityType,
        isValidType: true,
        version: '3.0'
    };
}
})
// ============================================================
// CONTOH PENGGUNAAN
// ============================================================

/*
// Contoh 1: MATERIAL KONSTRUKSI
const result1 = generateBreadcrumbForMapping(
    urlMapping,
    '/p/ready-mix-beton-cor-jayamix-minimix.html',
    [
        { name: 'Material Konstruksi', url: '/p/material-konstruksi.html' },
        { name: 'Material Struktur Bangunan', url: '/p/material-struktur-bangunan.html' },
        { name: 'Ready Mix Beton Cor Jayamix Minimix', url: null }
    ],
    'MATERIAL_KONSTRUKSI'
);

// Contoh 2: JASA KONSTRUKSI (otomatis tidak akan jadi money-master)
const result2 = generateBreadcrumbForMapping(
    urlMapping,
    '/p/harga-jasa-konstruksi.html',
    [
        { name: 'Jasa Konstruksi', url: '/p/jasa-konstruksi.html' },
        { name: 'Harga Jasa Konstruksi', url: null }
    ],
    'JASA_KONSTRUKSI'
);

// Contoh 3: PRODUK INTERIOR dengan lokasi (money-child)
const result3 = generateBreadcrumbForMapping(
    urlMapping,
    '/p/harga-kitchen-set-jakarta.html',
    [
        { name: 'Produk Interior', url: '/p/produk-interior.html' },
        { name: 'Kitchen Set', url: '/p/kitchen-set.html' },
        { name: 'Harga Kitchen Set Jakarta', url: null }
    ],
    'PRODUK_INTERIOR'
);

// Output akan berisi:
// - html: string HTML breadcrumb
// - jsonLd: object untuk schema.org
// - selectedLevels: array level yang ditampilkan
// - currentPageType: 'money-child'
// - currentIntent: { primary: 'transaksional', secondary: 'komersial', dominance: 90 }
// - currentEvergreen: { evergreen: false, wajibTahun: true }
*/

// ============================================================
// CONTOH PANGGILAN DENGAN URL MANUAL PER LEVEL
// ============================================================

/*
// MATERIAL KONSTRUKSI - READY MIX LOKASI
const result = generateBreadcrumbForMapping(
    urlMappingReadyMixLokasiPost,
    cleanUrl,
    [
        { name: 'Material Konstruksi', url: 'https://www.betonjayareadymix.com/p/material-konstruksi.html' },
        { name: 'Material Struktur Bangunan', url: 'https://www.betonjayareadymix.com/p/material-struktur-bangunan.html' },
        { name: 'Ready Mix Beton Cor Jayamix Minimix', url: 'https://www.betonjayareadymix.com/p/ready-mix-beton-cor-jayamix-minimix.html' },
        { name: 'Ready Mix Lokasi', url: 'https://www.betonjayareadymix.com/p/ready-mix-lokasi.html' }
    ],
    'MATERIAL_KONSTRUKSI'
);

// PRODUK INTERIOR - KITCHEN SET
const result2 = generateBreadcrumbForMapping(
    urlMappingKitchenSetPost,
    currentUrl,
    [
        { name: 'Produk Interior', url: 'https://www.betonjayareadymix.com/p/produk-interior.html' },
        { name: 'Jenis Kitchen Set', url: 'https://www.betonjayareadymix.com/p/jenis-kitchen-set.html' }
    ],
    'PRODUK_INTERIOR'
);

// JASA KONSTRUKSI - KONSULTASI
const result3 = generateBreadcrumbForMapping(
    urlMappingJasaPost,
    currentUrl,
    [
        { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
        { name: 'Jasa Borongan', url: 'https://www.betonjayareadymix.com/p/jasa-borongan.html' }
    ],
    'JASA_KONSTRUKSI'
);

// SEWA ALAT BERAT - EXCAVATOR
const result4 = generateBreadcrumbForMapping(
    urlMappingSewaPost,
    currentUrl,
    [
        { name: 'Sewa Alat Berat', url: 'https://www.betonjayareadymix.com/p/sewa-alat-berat.html' },
        { name: 'Jenis Excavator', url: 'https://www.betonjayareadymix.com/p/jenis-excavator.html' }
    ],
    'SEWA_RENTAL'
);
*/
// Menyimpan elemen yang dihapus dalam variabel
let removedElementsJasapondasiPerkuatanTanahKons = {};
// Fungsi untuk menghapus elemen berdasarkan ID
function removeCondition(conditionId) {
    const conditionElement = document.getElementById(conditionId);

    if (conditionElement) {
        // Menyimpan elemen yang dihapus dalam objek untuk bisa dikembalikan
        removedElementsJasapondasiPerkuatanTanahKons[conditionId] = conditionElement;
        conditionElement.remove(); // Menghapus elemen tersebut
    }
}

// Fungsi untuk mengembalikan elemen yang telah dihapus
function restoreCondition(conditionId) {
    const breadcrumb = document.querySelector('.breadcrumb');
    const elementToRestore = removedElementsJasapondasiPerkuatanTanahKons[conditionId]; // Mendapatkan elemen yang disimpan

    if (elementToRestore) {
        breadcrumb.appendChild(elementToRestore); // Menambahkan elemen kembali ke dalam breadcrumb
        delete removedElementsJasapondasiPerkuatanTanahKons[conditionId]; // Menghapus elemen dari objek setelah dikembalikan
    } else {
        console.log(`Elemen dengan ID ${conditionId} tidak ditemukan di removedElementsJasapondasiPerkuatanTanahKons.`);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    // var currentUrl = window.location.href;
     //const cleanUrl = currentUrl.split('?')[0]; // Menghapus parameter seperti ?m=1
    const cleanUrlJasaPondasiPerkuatanTanahKons = window.location.href.split(/[?#]/)[0]; // Menghilangkan parameter seperti ?m=1

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
		urlMappingJasaPondasiBangunan,
		urlMappingJasaPemadatanPersiapanPondasi,
		urlMappingJasaPerkuatanTanah,
		urlMappingJasaRetrofittingPondasi
    );

    // --- validasi URL terdaftar ---
    if (!urlMappingGabungan[cleanUrlJasaPondasiPerkuatanTanahKons]) {
      console.log(`[HybridDateModified] URL tidak terdaftar: ${cleanUrlJasaPondasiPerkuatanTanahKons}`);
      return;
    }

  // === Tanggal nextUpdate1 global ===
		const globalNextUpdate1 = "2026-01-31T00:00:00.000Z";
	console.log(`🌐 [AutoMeta] Detected jasa-konstruksi-pondasi-perkuatan-tanah: ${cleanUrlJasaPondasiPerkuatanTanahKons}`);

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

    const hash = stableHash(cleanUrlJasaPondasiPerkuatanTanahKons);
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
	
	console.log("✅ AEDMetaDates updated jasa-konstruksi-pondasi-perkuatan-tanah:", window.AEDMetaDates);
    console.log(`✅ [HybridDateModified v2.5] ${cleanUrlJasaPondasiPerkuatanTanahKons} → ${isoDate} | type=${type || "-"}`);

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
		urlMappingJasaPondasiBangunanFromSub2Sub2,
		urlMappingJasaPemadatanPersiapanPondasiFromSub2Sub2,
		urlMappingJasaPerkuatanTanahFromSub2Sub2,
		urlMappingJasaRetrofittingPondasiFromSub2Sub2
    );

    // --- validasi URL terdaftar ---
    if (!urlMappingGabungan[cleanUrlJasaPondasiPerkuatanTanahKons]) {
      console.log(`[HybridDateModified] URL tidak terdaftar: ${cleanUrlJasaPondasiPerkuatanTanahKons}`);
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
		    await loadEvergreenScript("2026-01-04T10:30:00+07:00");
		
		    // ✔ AUTO MODE
		    // await loadEvergreenScript();
		
		  } catch (err) {
		    console.error("[HybridDateModified] Fatal:", err);
		  }
		})();

	
     // Menemukan elemen menggunakan Id
    var JasaKonsPondasiTanah = document.getElementById("JasaKonsPondasiTanah");

    if (!JasaKonsPondasiTanah) {
        console.error("elemen Id JasaKonsPondasiTanah kondisi terhapus");
        return;
    }

     var JasaKonstruksiPondasiTanahSubLink = document.getElementById("JasaKonstruksiPondasiTanahSub");
     var JasaPondasiTanahSub = document.getElementById("JasaPondasiTanahSub");

     //SUB Jasa Pondasi Tanah
     var JasaPondasiBangunanSubLink = document.getElementById("JasaPondasiBangunanSub");
     var JasaPemadatanPersiapanPondasiSubLink = document.getElementById("JasaPemadatanPersiapanPondasiSub");
     var JasaPerkuatanTanahSubLink = document.getElementById("JasaPerkuatanTanahSub");
     var JasaRetrofittingPondasiSubLink = document.getElementById("JasaRetrofittingPondasiSub");

	
     var pageNameJasaKonsPondasiTanah = document.getElementById("pageNameJasaKonsPondasiTanah");
    

     // Default untuk menyembunyikan elemen
     JasaKonstruksiPondasiTanahSubLink.style.visibility = 'hidden';
     JasaPondasiTanahSub.style.visibility = 'hidden';
	
     //SUB JASA PEMBATAS
     JasaPondasiBangunanSubLink.style.visibility = 'hidden';
     JasaPemadatanPersiapanPondasiSubLink.style.visibility = 'hidden';
     JasaPerkuatanTanahSubLink.style.visibility = 'hidden';
     JasaRetrofittingPondasiSubLink.style.visibility = 'hidden';

     pageNameJasaKonsPondasiTanah.textContent = "";

    if (urlMappingJasaPondasiBangunanFromSub2Sub2[cleanUrlJasaPondasiPerkuatanTanahKons]) {
        restoreCondition('JasaKonsPondasiTanah');
        restoreCondition('JasaPondasiBangunanSub');
     
        //hapus elemen div id lain
	removeCondition('ProdukInFur');
        removeCondition('MaterialKons');
	removeCondition('ProdukKons');
        //removeCondition('ProdukKonsSaluran');
        //removeCondition('ProdukKonsPembatas');
        removeCondition('JasaKonsPerbaikan');
       	removeCondition('JasaKons');
       	removeCondition('JasaKonsSub');
       	removeCondition('MenuKons');
       	removeCondition('JasaKonsFinishing');
        removeCondition('JasaKonsStruktur');
        removeCondition('JasaKonsPembatas');
        removeCondition('JasaKonsJalanPerkerasan');


        //hapus elemen SUB jasa pembatas lain
        removeCondition('JasaPemadatanPersiapanPondasiSub');
        removeCondition('JasaPerkuatanTanahSub');
        removeCondition('JasaRetrofittingPondasiSub');
/*
	JasaPondasiBangunanSubLink.style.visibility = 'hidden';
     JasaPemadatanPersiapanPondasiSubLink.style.visibility = 'hidden';
     JasaPerkuatanTanahSubLink.style.visibility = 'hidden';
     JasaRetrofittingPondasiSubLink.style.visibility = 'hidden';
	*/
        JasaKonstruksiPondasiTanahSubLink.style.visibility = 'visible';
        JasaPondasiTanahSub.style.visibility = 'visible';
        JasaPondasiBangunanSubLink.style.visibility = 'visible';
        pageNameJasaKonsPondasiTanah.textContent = urlMappingJasaPondasiBangunanFromSub2Sub2[cleanUrlJasaPondasiPerkuatanTanahKons];
    }
// ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaPondasiBangunanFromSub2Sub2[cleanUrlJasaPondasiPerkuatanTanahKons]) {
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
                   "name": "Jasa Pondasi & Perkuatan Tanah",
                   "item": "https://www.betonjayareadymix.com/p/jasa-pondasi-perkuatan-tanah.html"
               },
		{
                   "@type": "ListItem",
                   "position": 4,
                   "name": "Jasa Pondasi Bangunan",
                   "item": "https://www.betonjayareadymix.com/p/jasa-pondasi-bangunan.html"
               },
               {
                   "@type": "ListItem",
                   "position": 5,
                   "name": urlMappingJasaPondasiBangunanFromSub2Sub2[cleanUrlJasaPondasiPerkuatanTanahKons],
                   "item": cleanUrlJasaPondasiPerkuatanTanahKons
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }	
   if (urlMappingJasaPemadatanPersiapanPondasiFromSub2Sub2[cleanUrlJasaPondasiPerkuatanTanahKons]) {
        restoreCondition('JasaKonsPondasiTanah');
        restoreCondition('JasaPemadatanPersiapanPondasiSub');
     
        //hapus elemen div id lain
	removeCondition('ProdukInFur');
        removeCondition('MaterialKons');
	removeCondition('ProdukKons');
        //removeCondition('ProdukKonsSaluran');
        //removeCondition('ProdukKonsPembatas');
        removeCondition('JasaKonsPerbaikan');
       	removeCondition('JasaKons');
       	removeCondition('JasaKonsSub');
       	removeCondition('MenuKons');
       	removeCondition('JasaKonsFinishing');
        removeCondition('JasaKonsStruktur');
        removeCondition('JasaKonsPembatas');
        removeCondition('JasaKonsJalanPerkerasan');


        //hapus elemen SUB jasa pembatas lain
        removeCondition('JasaPondasiBangunanSub');
        removeCondition('JasaPerkuatanTanahSub');
        removeCondition('JasaRetrofittingPondasiSub');
/*
	JasaPondasiBangunanSubLink.style.visibility = 'hidden';
     JasaPemadatanPersiapanPondasiSubLink.style.visibility = 'hidden';
     JasaPerkuatanTanahSubLink.style.visibility = 'hidden';
     JasaRetrofittingPondasiSubLink.style.visibility = 'hidden';
	*/
        JasaKonstruksiPondasiTanahSubLink.style.visibility = 'visible';
        JasaPondasiTanahSub.style.visibility = 'visible';
        JasaPemadatanPersiapanPondasiSubLink.style.visibility = 'visible';
        pageNameJasaKonsPondasiTanah.textContent = urlMappingJasaPemadatanPersiapanPondasiFromSub2Sub2[cleanUrlJasaPondasiPerkuatanTanahKons];
    }
	
if (urlMappingJasaPerkuatanTanahFromSub2Sub2[cleanUrlJasaPondasiPerkuatanTanahKons]) {
        restoreCondition('JasaKonsPondasiTanah');
        restoreCondition('JasaPerkuatanTanahSub');
     
        //hapus elemen div id lain
	removeCondition('ProdukInFur');
        removeCondition('MaterialKons');
	removeCondition('ProdukKons');
        //removeCondition('ProdukKonsSaluran');
        //removeCondition('ProdukKonsPembatas');
        removeCondition('JasaKonsPerbaikan');
       	removeCondition('JasaKons');
       	removeCondition('JasaKonsSub');
       	removeCondition('MenuKons');
       	removeCondition('JasaKonsFinishing');
        removeCondition('JasaKonsStruktur');
        removeCondition('JasaKonsPembatas');
        removeCondition('JasaKonsJalanPerkerasan');


        //hapus elemen SUB jasa pembatas lain
        removeCondition('JasaPemadatanPersiapanPondasiSub');
        removeCondition('JasaPondasiBangunanSub');
        removeCondition('JasaRetrofittingPondasiSub');
/*
	JasaPondasiBangunanSubLink.style.visibility = 'hidden';
     JasaPemadatanPersiapanPondasiSubLink.style.visibility = 'hidden';
     JasaPerkuatanTanahSubLink.style.visibility = 'hidden';
     JasaRetrofittingPondasiSubLink.style.visibility = 'hidden';
	*/
        JasaKonstruksiPondasiTanahSubLink.style.visibility = 'visible';
        JasaPondasiTanahSub.style.visibility = 'visible';
        JasaPerkuatanTanahSubLink.style.visibility = 'visible';
	pageNameJasaKonsPondasiTanah.textContent = urlMappingJasaPerkuatanTanahFromSub2Sub2[cleanUrlJasaPondasiPerkuatanTanahKons];
    }

// ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaPerkuatanTanahFromSub2Sub2[cleanUrlJasaPondasiPerkuatanTanahKons]) {
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
                   "name": "Jasa Pondasi & Perkuatan Tanah",
                   "item": "https://www.betonjayareadymix.com/p/jasa-pondasi-perkuatan-tanah.html"
               },
		{
                   "@type": "ListItem",
                   "position": 4,
                   "name": "Jasa Perkuatan Tanah",
                   "item": "https://www.betonjayareadymix.com/p/jasa-perkuatan-tanah.html"
               },
               {
                   "@type": "ListItem",
                   "position": 5,
                   "name": urlMappingJasaPerkuatanTanahFromSub2Sub2[cleanUrlJasaPondasiPerkuatanTanahKons],
                   "item": cleanUrlJasaPondasiPerkuatanTanahKons
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
   if (urlMappingJasaRetrofittingPondasiFromSub2Sub2[cleanUrlJasaPondasiPerkuatanTanahKons]) {
        restoreCondition('JasaKonsPondasiTanah');
        restoreCondition('JasaRetrofittingPondasiSub');
     
        //hapus elemen div id lain
	removeCondition('ProdukInFur');
        removeCondition('MaterialKons');
	removeCondition('ProdukKons');
        //removeCondition('ProdukKonsSaluran');
        //removeCondition('ProdukKonsPembatas');
        removeCondition('JasaKonsPerbaikan');
       	removeCondition('JasaKons');
       	removeCondition('JasaKonsSub');
       	removeCondition('MenuKons');
       	removeCondition('JasaKonsFinishing');
        removeCondition('JasaKonsStruktur');
        removeCondition('JasaKonsPembatas');
        removeCondition('JasaKonsJalanPerkerasan');


        //hapus elemen SUB jasa pembatas lain
        removeCondition('JasaPemadatanPersiapanPondasiSub');
        removeCondition('JasaPerkuatanTanahSub');
        removeCondition('JasaPondasiBangunanSub');
/*
	JasaPondasiBangunanSubLink.style.visibility = 'hidden';
     JasaPemadatanPersiapanPondasiSubLink.style.visibility = 'hidden';
     JasaPerkuatanTanahSubLink.style.visibility = 'hidden';
     JasaRetrofittingPondasiSubLink.style.visibility = 'hidden';
	*/
        JasaKonstruksiPondasiTanahSubLink.style.visibility = 'visible';
        JasaPondasiTanahSub.style.visibility = 'visible';
        JasaRetrofittingPondasiSubLink.style.visibility = 'visible';
        pageNameJasaKonsPondasiTanah.textContent = urlMappingJasaRetrofittingPondasiFromSub2Sub2[cleanUrlJasaPondasiPerkuatanTanahKons];
    }
// ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaRetrofittingPondasiFromSub2Sub2[cleanUrlJasaPondasiPerkuatanTanahKons]) {
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
                   "name": "Jasa Pondasi & Perkuatan Tanah",
                   "item": "https://www.betonjayareadymix.com/p/jasa-pondasi-perkuatan-tanah.html"
               },
		{
                   "@type": "ListItem",
                   "position": 4,
                   "name": "Jasa Retrofitting Pondasi",
                   "item": "https://www.betonjayareadymix.com/p/jasa-retrofitting-pondasi.html"
               },
               {
                   "@type": "ListItem",
                   "position": 5,
                   "name": urlMappingJasaRetrofittingPondasiFromSub2Sub2[cleanUrlJasaPondasiPerkuatanTanahKons],
                   "item": cleanUrlJasaPondasiPerkuatanTanahKons
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
    //SUB urlMappingPembuatanPagarDinding
   
   });
