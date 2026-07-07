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

const urlMappingJasaPondasiFromMoneyMasterMoneyMaster1 = {
// ============================================================
// 📌 MM - JASA PONDASI (LEVEL 4) - INDUK UTAMA
// ============================================================
//"https://www.betonjayareadymix.com/p/jasa-pondasi.html": "Jasa Pondasi",  // ✅ MM (L4)
// ============================================================
// 📌 MM - JASA PONDASI CAKAR AYAM (LEVEL 4)
// ============================================================
"https://www.betonjayareadymix.com/p/jasa-cakar-ayam.html": "Jasa Cakar Ayam",  // ✅ MM (L4)
// ============================================================
// 📌 MM - JASA PONDASI TAPAK (LEVEL 4)
// ============================================================
"https://www.betonjayareadymix.com/p/jasa-pondasi-tapak.html": "Jasa Pondasi Tapak",  // ✅ MM (L4)
	// ============================================================
// 📌 MM - JASA PONDASI TIANG PANCANG (LEVEL 4)
// ============================================================
"https://www.betonjayareadymix.com/p/jasa-tiang-pancang.html": "Jasa Tiang Pancang",  // ✅ MM (L4)
// ============================================================
// 📌 MM - JASA PONDASI SUMURAN (LEVEL 4)
// ============================================================
"https://www.betonjayareadymix.com/p/jasa-pondasi-sumuran.html": "Jasa Pondasi Sumuran",  // ✅ MM (L4)

// ============================================================
// 📌 MP LANGSUNG DI BAWAH JASA PONDASI (LEVEL 5)
// ============================================================
 "https://www.betonjayareadymix.com/p/jasa-persiapan-pondasi.html": "Jasa Persiapan Pondasi",
 "https://www.betonjayareadymix.com/p/jasa-pemadatan-pondasi.html": "Jasa Pemadatan Pondasi",
"https://www.betonjayareadymix.com/p/jasa-pondasi-tanah.html": "Jasa Pondasi Tanah",  
"https://www.betonjayareadymix.com/p/jasa-pondasi-bangunan.html": "Jasa Pondasi Bangunan", 
"https://www.betonjayareadymix.com/p/jasa-borongan-pondasi.html": "Jasa Borongan Pondasi"  
//"https://www.betonjayareadymix.com/p/borongan-pondasi.html": "Borongan Pondasi"
};
const urlMappingJasaBoronganPondasiFromMoneyMaster1MoneyPage = {
// MP (L5)
"https://www.betonjayareadymix.com/p/harga-jasa-borongan-pondasi.html": "Harga Jasa Borongan Pondasi"
};
const urlMappingJasaPondasiTanahFromMoneyMaster1MoneyPage = {

"https://www.betonjayareadymix.com/p/jasa-borongan-pondasi-tanah.html": "Jasa Borongan Pondasi Tanah",  // MP (L5)
"https://www.betonjayareadymix.com/p/harga-borongan-pondasi-tanah.html": "Harga Borongan Pondasi Tanah"
};
const urlMappingJasaPondasiBangunanFromMoneyMaster1MoneyPage = {
"https://www.betonjayareadymix.com/p/jasa-pondasi-bangunan-rumah.html": "Jasa Pondasi Bangunan Rumah"  // MP (L5)

};
const urlMappingJasaCakarAyamFromMoneyMaster1MoneyPage = {
"https://www.betonjayareadymix.com/p/jasa-pondasi-cakar-ayam.html": "Jasa Pondasi Cakar Ayam"  // MP
};
const urlMappingJasaPondasiCakarAyamFromMoneyPageMoneyPage1 = {
 "https://www.betonjayareadymix.com/p/harga-jasa-pondasi-cakar-ayam.html": "Harga Jasa Pondasi Cakar Ayam",  
  "https://www.betonjayareadymix.com/p/jasa-pondasi-cakar-ayam-per-meter.html": "Jasa Pondasi Cakar Ayam Per Meter"
};
const urlMappingHargaJasaPondasiCakarAyamFromMoneyPage1MoneyPage2 = {
 "https://www.betonjayareadymix.com/p/harga-jasa-pondasi-cakar-ayam-per-meter.html": "Jasa Pondasi Cakar Ayam Per Meter"
};
const urlMappingJasaPondasiTapakFromMoneyMaster1MoneyPage = {
 "https://www.betonjayareadymix.com/p/harga-jasa-pondasi-tapak.html": "Harga Jasa Pondasi Tapak",  
 "https://www.betonjayareadymix.com/p/jasa-pondasi-tapak-per-meter.html": "Jasa Pondasi Tapak Per Meter"
};
const urlMappingHargaJasaPondasiTapakFromMoneyPageMoneyPage1 = {
  "https://www.betonjayareadymix.com/p/harga-jasa-pondasi-tapak-per-meter.html": "Harga Jasa Pondasi Tapak Per Meter"
};

const urlMappingJasaTiangPancangFromMoneyMaster1MoneyPage = {
"https://www.betonjayareadymix.com/p/jasa-pondasi-tiang-pancang.html": "Jasa Pondasi Tiang Pancang", // MP (L5)
"https://www.betonjayareadymix.com/p/harga-jasa-pondasi-tiang-pancang.html": "Harga Jasa Pondasi Tiang Pancang",
"https://www.betonjayareadymix.com/p/harga-jasa-pancang-drop-hammer.html": "Harga Jasa Pancang Drop Hammer",  
  "https://www.betonjayareadymix.com/p/harga-jasa-pancang-spun-pile.html": "Harga Jasa Pancang Spun Pile",  
  "https://www.betonjayareadymix.com/p/harga-jasa-pancang-mini-pile.html": "Harga Jasa Pancang Mini Pile",  
  "https://www.betonjayareadymix.com/p/harga-jasa-pemasangan-mini-pile.html": "Harga Jasa Pemasangan Mini Pile",  
  "https://www.betonjayareadymix.com/p/harga-jasa-pancang-hidrolik.html": "Harga Jasa Pancang Hidrolik",  
  "https://www.betonjayareadymix.com/p/harga-jasa-pemasangan-tiang-pancang.html": "Harga Jasa Pemasangan Tiang Pancang"
};
const urlMappingJasaPondasiSumuranFromMoneyMaster1MoneyPage = {
"https://www.betonjayareadymix.com/2019/08/harga-jasa-pondasi-sumuran.html": "Harga Jasa Pondasi Sumuran",  
"https://www.betonjayareadymix.com/2019/08/jasa-pondasi-sumuran-per-meter.html": "Jasa Pondasi Sumuran Per Meter"

};
const urlMappingJasaPemadatanPondasiFromMoneyMaster1MoneyPage = {
  "https://www.betonjayareadymix.com/p/jasa-pemadatan-pondasi-bangunan.html": "Jasa Pemadatan Pondasi Bangunan",  
 "https://www.betonjayareadymix.com/p/jasa-uji-kepadatan-tanah-pondasi.html": "Jasa Uji Kepadatan Tanah Pondasi"  
};
const urlMappingJasaPersiapanPondasiFromMoneyMaster1MoneyPage = {
  "https://www.betonjayareadymix.com/p/jasa-cut-and-fill-pondasi.html": "Jasa Cut and Fill Pondasi",  
  "https://www.betonjayareadymix.com/p/jasa-leveling-tanah-proyek-gedung.html": "Jasa Leveling Tanah Proyek Gedung",  
  "https://www.betonjayareadymix.com/p/jasa-pembersihan-lahan-konstruksi.html": "Jasa Pembersihan Lahan Konstruksi"  
};
const urlMappingJasaPerkuatanTanahFromMoneyMasterMoneyPage = {
  "https://www.betonjayareadymix.com/p/jasa-perkuatan-tanah-longsor.html": "Jasa Perkuatan Tanah Longsor" 
};
const urlMappingPerkuatanTanahLongsorFromMoneyPageMoneyPage1 = {
  "https://www.betonjayareadymix.com/p/jasa-bronjong-penahan-longsor.html": "Jasa Bronjong Penahan Longsor",  
  "https://www.betonjayareadymix.com/p/jasa-soil-nailing-tebing.html": "Jasa Soil Nailing Tebing",  
  "https://www.betonjayareadymix.com/p/jasa-dinding-penahan-tanah-longsor.html": "Jasa Dinding Penahan Tanah Longsor",  
  "https://www.betonjayareadymix.com/p/jasa-geotextile-perkuatan-lereng.html": "Jasa Geotextile Perkuatan Lereng",  
  "https://www.betonjayareadymix.com/p/jasa-sheet-pile-penahan-longsor.html": "Jasa Sheet Pile Penahan Longsor",  
  "https://www.betonjayareadymix.com/p/jasa-stabilisasi-tanah-labil.html": "Jasa Stabilisasi Tanah Labil",  
  "https://www.betonjayareadymix.com/p/jasa-perkuatan-tanah-longsor-rumah.html": "Jasa Perkuatan Tanah Longsor Rumah",  
  "https://www.betonjayareadymix.com/p/jasa-perkuatan-tebing-jalan.html": "Jasa Perkuatan Tebing Jalan",  
  "https://www.betonjayareadymix.com/p/jasa-perkuatan-longsor-perkebunan.html": "Jasa Perkuatan Longsor Perkebunan",  
  "https://www.betonjayareadymix.com/p/jasa-drainase-anti-longsor.html": "Jasa Drainase Anti Longsor"  
};

const urlMappingJasaPerkuatanTanahFromMoneyMasterMoneyMaster1 = {
 "https://www.betonjayareadymix.com/p/jasa-soil-improvement.html": "Jasa Soil Improvement",
 "https://www.betonjayareadymix.com/p/jasa-retrofitting-pondasi.html": "Jasa Retrofitting Pondasi",
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-tanah.html": "Jasa Perbaikan Tanah", 
  "https://www.betonjayareadymix.com/p/jasa-geotextile.html": "Jasa Geotextile", 
  "https://www.betonjayareadymix.com/p/jasa-stone-column.html": "Jasa Stone Column", 
  "https://www.betonjayareadymix.com/p/jasa-vertical-drain.html": "Jasa Vertical Drain",  
  "https://www.betonjayareadymix.com/p/jasa-soil-nailing.html": "Jasa Soil Nailing" 
};

const urlMappingJasaRetrofittingPondasiFromMoneyMaster1MoneyPage = {
  "https://www.betonjayareadymix.com/p/jasa-perkuatan-pondasi-bangunan-lama.html": "Jasa Perkuatan Pondasi Bangunan Lama",  
  "https://www.betonjayareadymix.com/p/jasa-pondasi-untuk-penurunan-tanah.html": "Jasa Pondasi Untuk Penurunan Tanah",  
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-pondasi-penurunan-tanah.html": "Jasa Perbaikan Pondasi Penurunan Tanah",  

  // ============================================================
  "https://www.betonjayareadymix.com/p/retrofitting-pondasi-penambahan-lantai.html": "Retrofitting Pondasi Penambahan Lantai", 
  "https://www.betonjayareadymix.com/p/jasa-underpinning-pondasi-bangunan.html": "Jasa Underpinning Pondasi Bangunan",  
  "https://www.betonjayareadymix.com/p/jasa-grouting-pondasi-beton.html": "Jasa Grouting Pondasi Beton"  
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
  // "https://www.betonjayareadymix.com/2019/08/harga-pondasi-cakar-ayam.html": "Harga Pondasi Cakar Ayam",  
  
  // ============================================================
  // [MONEY_PAGE] - HARGA PONDASI TAPAK
  // ============================================================
  // "https://www.betonjayareadymix.com/2019/08/harga-pondasi-tapak.html": "Harga Pondasi Tapak",  
  
  // ============================================================
  // [MONEY_PAGE] - HARGA TIANG PANCANG
  // ============================================================
  // "https://www.betonjayareadymix.com/2019/08/harga-tiang-pancang.html": "Harga Tiang Pancang",  
  
  // ============================================================
  // [MONEY_PAGE] - HARGA PEMADATAN TANAH
  // ============================================================
  // "https://www.betonjayareadymix.com/2019/08/harga-pemadatan-tanah.html": "Harga Pemadatan Tanah",  
  
  // ============================================================
  // [MONEY_PAGE] - HARGA SOIL IMPROVEMENT
  // ============================================================
  // "https://www.betonjayareadymix.com/2019/08/harga-soil-improvement.html": "Harga Soil Improvement",  
  
  // ============================================================
  // [MONEY_PAGE] - HARGA STONE COLUMN
  // ============================================================
  // "https://www.betonjayareadymix.com/2019/08/harga-stone-column.html": "Harga Stone Column",  
  
  // ============================================================
  // [MONEY_PAGE] - HARGA RETROFITTING PONDASI
  // ⚠️ STATUS: URL 404 - PERLU DIBUAT KONTEN (jika diperlukan)
  // ============================================================
  // "https://www.betonjayareadymix.com/2019/08/harga-retrofitting-pondasi.html": "Harga Retrofitting Pondasi",   (URL 404)
  
  // ============================================================
  // [MONEY_PAGE] - HARGA UNDERPINNING PONDASI
  // ⚠️ STATUS: URL 404 - PERLU DIBUAT KONTEN (jika diperlukan)
  // ============================================================
  // "https://www.betonjayareadymix.com/2019/08/harga-underpinning-pondasi.html": "Harga Underpinning Pondasi",   (URL 404)
  
  // ============================================================
  // [MONEY_PAGE] - HARGA GROUTING PONDASI
  // ⚠️ STATUS: URL 404 - PERLU DIBUAT KONTEN (jika diperlukan)
  // ============================================================
  // "https://www.betonjayareadymix.com/2019/08/harga-grouting-pondasi.html": "Harga Grouting Pondasi",   (URL 404)
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
 * ============================================================
 * generateBreadcrumbJasaKonstruksi v10.10
 * HYBRID: OTOMATIS + MANUAL UNTUK KASUS EDGE
 * ============================================================
 *
 * ✅ UPDATE v10.10
 * ------------------------------------------------------------
 * - FIX: Hybrid detection (otomatis + manual untuk kasus edge)
 * - FIX: JASA_SPEC_WORDS untuk kata pendek yang harus MP (cor, cat, pil, dll)
 * - FIX: PILLAR detection di detectJasaLevelAuto()
 * - FIX: Hanya butuh maintenance minimal
 * - ENHANCED: Logging lebih detail untuk debugging
 *
 * ✅ UPDATE v10.6
 * ------------------------------------------------------------
 * - FIX: Otomatis tidak skip parent terakhir
 *
 * ✅ UPDATE v10.5
 * ------------------------------------------------------------
 * - FIX: Hapus specificKeywords (manual) - murni otomatis
 *
 * ============================================================
 * @version 10.10.0
 * @date 2026-07-07
 * ============================================================
 */

function generateBreadcrumbjasaKonstruksiPondasiPerkuatanTanah(
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
            SCORE: '🎯',
            CLEAN: '🧹',
            SKIP: '⏭️'
        };
        console.log(`${icons[type] || '📘'} [Breadcrumb v10.10] ${message}`);
    }

    // ============================================================
    // 3. ENTITY NORMALIZATION
    // ============================================================

    const ENTITY_TYPE_MAP = {
        'JASA': 'JASA_KONSTRUKSI',
        'JASA_KONSTRUKSI': 'JASA_KONSTRUKSI',
        'JASA_DESAIN': 'JASA_DESAIN',
        'JASA_INTERIOR': 'JASA_KONSTRUKSI',
        'JASA_DESAIN_INTERIOR': 'JASA_DESAIN',
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
        'JASA_DESAIN',
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
        'JASA_DESAIN': ['jasa desain', 'desain'],
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
    function isDesainEntity() { return entityType === 'JASA_DESAIN'; }
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
    // 9. CLEAN PAGE NAME FROM URL
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
    // 11. KEYWORDS
    // ============================================================

    const SP1_KEYWORDS = [
        'vs', 'versus', 'perbandingan', 'lebih baik', 'kelebihan', 'kekurangan'
    ];

    const SP2_KEYWORDS = [
        'jenis', 'kategori', 'daftar', 'macam', 'tipe'
    ];

    const INFORMATIONAL_KEYWORDS = [
        'panduan', 'tutorial', 'cara', 'tips', 'apa itu', 'pengertian'
    ];

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
    // 11b. JASA CLEAN FUNCTION
    // ============================================================

    const JASA_ULTRA_COMMON_WORDS = new Set([
        'jasa', 'kontraktor', 'tukang', 'borongan', 'renovasi',
        'pasang', 'bangun', 'perbaikan', 'instalasi', 'proyek',
        'cor', 'gali', 'urug', 'angkut', 'service', 'servis',
        'desain'
    ]);

    const STOPWORDS = new Set([
        'dan', 'atau', 'serta', 'yang', 'dari', 'ke', 'di', 'untuk', 
        'dengan', 'ini', 'itu', 'akan', 'telah', 'sudah', 'masih',
        'pada', 'oleh', 'karena', 'sehingga', 'setelah', 'sebelum',
        'plus', 'minus', 'tanpa', 'sampai', 'hingga', 'sambil'
    ]);

    const MODIFIER_WORDS = new Set([
        'murah', 'profesional', 'berkualitas', 'terbaik', 'spesialis',
        'ahli', 'berpengalaman', 'resmi', 'terpercaya', 'ekonomis',
        'cepat', 'tepat', 'garansi', 'kualitas', 'harga', 'biaya',
        'tarif', 'ongkos', 'estimasi', 'perhitungan', 'analisa',
        'modern', 'minimalis', 'mewah', 'klasik', 'tradisional',
        'kontemporer', 'sederhana', 'elegan', 'premium', 'luxury'
    ]);

    // ============================================================
    // 11c. JASA SPEC WORDS (FIXED v10.10 - HYBRID)
    // ============================================================

    // ✅ FIX v10.10: Kata pendek yang HARUS dianggap spesifik (MP)
    const JASA_SPEC_WORDS = new Set([
        // Kata pendek (3-4 huruf) yang harus MP
        'cor', 'cat', 'pil', 'bor', 'las', 'dak', 'atap', 'besi',
        'baja', 'kayu', 'batu', 'pasir', 'semen', 'tanah', 'air',
        'listrik', 'pipa', 'kabel', 'lampu', 'stop', 'kontak',
        
        // Kata infrastruktur
        'jalan', 'halte', 'bus', 'taman', 'trotoar', 'terminal',
        'jembatan', 'gorong', 'drainase', 'irigasi', 'kanstin',
        'pembatas', 'pengaman', 'struktur', 'dinding', 'pondasi',
        
        // Kata finishing
        'finishing', 'eksterior', 'interior', 'plafon', 'gypsum',
        'partisi', 'keramik', 'marmer', 'granit', 'epoxy', 'wallpaper',
        'lantai', 'dinding', 'atap', 'genteng', 'kusen', 'pintu',
        'jendela', 'gorden', 'blinds', 'vinyl', 'foam', 'fiber',
        
        // Kata konstruksi
        'konstruksi', 'struktur', 'rangka', 'beton', 'readymix',
        'pile', 'sheet', 'tiang', 'balok', 'kolom', 'sloof',
        'ring', 'balk', 'kuda-kuda', 'box culvert', 'u ditch',
        'paving', 'upah', 'tenaga', 'material', 'bahan'
    ]);

    function cleanJasaText(text) {
        if (!text) return '';
        
        let cleaned = text.toLowerCase();
        
        for (const kw of JASA_ULTRA_COMMON_WORDS) {
            cleaned = cleaned.replace(new RegExp(`\\b${kw}\\b`, 'g'), ' ');
        }
        
        for (const sw of STOPWORDS) {
            cleaned = cleaned.replace(new RegExp(`\\b${sw}\\b`, 'g'), ' ');
        }
        
        cleaned = cleaned.replace(/\s+/g, ' ').trim();
        
        log(`Clean JASA: "${text}" → "${cleaned}"`, 'CLEAN');
        
        return cleaned;
    }

    function countCoreWords(text) {
        if (!text) return 0;
        const words = text.toLowerCase().split(/\s+/).filter(w => w.length >= 2);
        return words.length;
    }

    function hasModifier(text) {
        if (!text) return false;
        const lower = text.toLowerCase();
        for (const mod of MODIFIER_WORDS) {
            if (lower.includes(mod)) return true;
        }
        return false;
    }

    function isSpecificJasa(text) {
        if (!text) return false;
        const lower = text.toLowerCase();
        if (/\d/.test(lower)) return true;
        if (/(k225|k250|k300|k350|k400|k500|k600|m6|m8|m10|m12|sn|sni)/i.test(lower)) return true;
        const specWords = ['spesifikasi', 'mutu', 'dimensi', 'ukuran', 'standar', 'grade', 'tipe', 'type'];
        for (const sw of specWords) {
            if (lower.includes(sw)) return true;
        }
        return false;
    }

    function hasSpecWord(text) {
        if (!text) return false;
        const lower = text.toLowerCase();
        // Cek di JASA_SPEC_WORDS
        if (JASA_SPEC_WORDS.has(lower)) return true;
        // Cek partial match
        for (const kw of JASA_SPEC_WORDS) {
            if (lower.includes(kw)) return true;
        }
        return false;
    }

    // ============================================================
    // 11d. DETEKSI JASA LEVEL OTOMATIS (FIXED v10.10 - HYBRID)
    // ============================================================

    function detectJasaLevelAuto(pageName) {
        const lowerName = pageName.toLowerCase();
        
        // ✅ FIX v10.10: Cek PILLAR terlebih dahulu
        if (isEntityPillarExactMatch(lowerName)) {
            log(`PILLAR detected: "${pageName}"`, 'SUCCESS');
            return 'pillar';
        }
        
        const cleaned = cleanJasaText(lowerName);
        
        const remainingWords = cleaned.split(/\s+/).filter(w => w.length >= 2);
        const wordCount = remainingWords.length;
        
        const hasNumber = /\d/.test(cleaned);
        const hasLocation = isLocation(cleaned);
        const hasModifierWord = hasModifier(cleaned);
        
        // ✅ FIX v10.10: Deteksi kata spesifik (manual + otomatis)
        const hasSpecWordManual = hasSpecWord(cleaned);
        
        // ✅ FIX v10.10: Deteksi kata spesifik otomatis (panjang > 3, bukan modifier)
        const hasSpecWordAuto = cleaned.split(/\s+/).some(word => {
            if (word.length < 4) return false;
            if (STOPWORDS.has(word)) return false;
            if (MODIFIER_WORDS.has(word)) return false;
            if (/\d/.test(word)) return false;
            return true;
        });
        
        const hasSpecWordFinal = hasSpecWordManual || hasSpecWordAuto;
        
        log(`Auto detect JASA: "${pageName}" → remaining: "${cleaned}", words: ${wordCount}, specWord: ${hasSpecWordFinal}`, 'DEBUG');
        
        // ✅ LOGIKA HYBRID v10.10:
        // - MM: wordCount <= 1, tidak ada angka, lokasi, modifier, DAN tidak ada kata spesifik
        // - MP: wordCount >= 2, atau ada angka/lokasi/modifier, atau ada kata spesifik
        if (wordCount <= 1 && !hasNumber && !hasLocation && !hasModifierWord && !hasSpecWordFinal) {
            log(`MM detected (auto): "${pageName}" → remaining words: ${wordCount}`, 'SUCCESS');
            return 'money-master';
        }
        
        log(`MP detected (auto): "${pageName}" → remaining words: ${wordCount}`, 'INFO');
        return 'money-page';
    }

    // ============================================================
    // 11e. VARIANT DETECTION PER ENTITY
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
        
        if (currentEntityType === 'JASA_KONSTRUKSI' || currentEntityType === 'JASA_DESAIN') {
            for (const kw of VARIANT_KEYWORDS_JASA) {
                if (lowerName.includes(kw)) {
                    log(`Variant detected (JASA/DESAIN): "${pageName}" contains "${kw}"`, 'VARIANT');
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
        'bali', 'kabupaten badung', 'kota denpasar', 'denpasar', 'gianyar', 'tabanan', 'bangli', 'karangasem', 'klungkung', 'buleleng', 'jembrana',
        'mataram', 'kupang',
        'terdekat'
    ]);

    function isLocation(text) {
        if (!text) return false;
        const lower = text.toLowerCase();
        for (const city of LOCATION_WHITELIST) {
            if (new RegExp(`\\b${city.replace(/\s+/g, '\\s+')}\\b`, 'i').test(lower)) {
                return true;
            }
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
        /\b(jasa|kontraktor|tukang|borongan|renovasi|pasang|bangun|perbaikan|instalasi|proyek|cor|gali|urug|angkut|desain|interior|eksterior|arsitektur|gedung|rumah|ruko|kantor|apartemen)\b/i;

    // ============================================================
    // 17. PAGE TYPE DETECTION (FIXED v10.10)
    // ============================================================

    function detectPageType(pageName, isHome = false) {
        const lowerName = cleanText(pageName.toLowerCase());

        if (isHome || lowerName === 'home' || lowerName === 'beranda') return 'home';
        if (isEntityPillarExactMatch(lowerName)) return 'pillar';
        if (isSubVariant(lowerName)) return 'sub-variant';

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

        if (HAS_LOCATION) {
            log(`MC detected: "${pageName}" contains location`, 'SUCCESS');
            return 'money-child';
        }

        // ✅ FIX v10.10: JASA_DESAIN dan JASA_KONSTRUKSI
        if ((isJasaEntity() || isDesainEntity()) && HAS_JASA_WORD && !HAS_PRICE_WORD) {
            return detectJasaLevelAuto(lowerName);
        }

        if (isSewaEntity() && HAS_SEWA_WORD && !HAS_PRICE_WORD) {
            const cleaned = lowerName.replace(/\b(sewa|rental)\b/gi, '').trim();
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
            const isDifferentBranch = modifiedLineage.every(existing => {
                const similarity = calculateSimilarity(parent.name, existing.name);
                return similarity < 0.5;
            });
            
            const hasSignificantScore = (parent.relevanceScore || 0) > 50;
            
            if (isDifferentBranch && hasSignificantScore) {
                log(`FORCE PARENT (branch): "${parent.name}" (level ${parent.level}) → "${currentPageTitle}"`, 'SUCCESS');
                modifiedLineage.push(parent);
            } else if (!isDifferentBranch) {
                log(`⏭️ FORCE SKIP: "${parent.name}" (level ${parent.level}) - same branch`, 'SKIP');
            } else {
                log(`⏭️ FORCE SKIP: "${parent.name}" (level ${parent.level}) - low score (${parent.relevanceScore || 0})`, 'SKIP');
            }
        }

        if (modifiedLineage.length === lineageLevels.length) {
            const semanticKeywords = {
                'finishing': ['finishing', 'cat', 'epoxy', 'lampu', 'wallpaper'],
                'bangunan': ['bangunan', 'gedung', 'rumah', 'ruko'],
                'interior': ['interior', 'dalam', 'ruangan'],
                'eksterior': ['eksterior', 'luar', 'halaman'],
                'lantai': ['lantai', 'keramik', 'epoxy lantai', 'marmer', 'granit'],
                'dinding': ['dinding', 'tembok', 'wallpaper'],
                'desain': ['desain', 'arsitektur', 'konsep', 'rencana', 'gambar']
            };
            
            for (const [parentKeyword, childKeywords] of Object.entries(semanticKeywords)) {
                const isChildMatch = childKeywords.some(kw => currentLower.includes(kw));
                if (isChildMatch) {
                    const parentItem = allLevels.find(item => 
                        item.name.toLowerCase().includes(parentKeyword)
                    );
                    if (parentItem && !modifiedLineage.some(l => l.name === parentItem.name)) {
                        const isDifferentBranch = modifiedLineage.every(existing => {
                            const similarity = calculateSimilarity(parentItem.name, existing.name);
                            return similarity < 0.5;
                        });
                        
                        if (isDifferentBranch) {
                            log(`SEMANTIC PARENT: "${parentItem.name}"`, 'SUCCESS');
                            modifiedLineage.push(parentItem);
                        }
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
    // 21. SIMILARITY CALCULATION
    // ============================================================

    function calculateSimilarity(text1, text2) {
        const words1 = text1.toLowerCase().split(/\s+/);
        const words2 = text2.toLowerCase().split(/\s+/);
        
        if (words1.length === 0 || words2.length === 0) return 0;
        
        const commonWords = words1.filter(w => words2.includes(w));
        const union = new Set([...words1, ...words2]);
        const similarity = commonWords.length / union.size;
        
        return similarity;
    }

    // ============================================================
    // 22. GET CURRENT PAGE INFO
    // ============================================================

    const currentFullUrl = currentUrl.startsWith('http')
        ? currentUrl
        : CONFIG.DOMAIN + currentUrl;

    let currentPageTitle = getCleanPageNameFromUrl(currentFullUrl);

    if (!currentPageTitle) {
        currentPageTitle = 'Halaman';
    }

    // ============================================================
    // 23. INJECT CURRENT PAGE & AUTO PARENT
    // ============================================================

    const enhancedBreadcrumbItems = injectCurrentPageAndParent(
        breadcrumbItems,
        currentPageTitle,
        currentFullUrl
    );

    // ============================================================
    // 24. BUILD ALL LEVELS
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
    // 25. URL FALLBACK
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
    // 26. CURRENT PAGE TYPE
    // ============================================================

    const currentPageType = detectPageType(currentPageTitle);
    log(`Current page: "${currentPageTitle}" → type: ${currentPageType} (level ${TYPE_LEVEL_MAP[currentPageType]})`, 'INFO');

    // ============================================================
    // 27. SELECT BREADCRUMB LEVELS
    // ============================================================

    const selectedLevels = [];

    selectedLevels.push({
        name: 'Beranda',
        url: CONFIG.DOMAIN,
        type: 'home',
        level: 0,
        position: 1
    });

    const uniqueByUrl = new Map();
    for (const item of allLevels) {
        const key = item.url || item.name;
        if (!uniqueByUrl.has(key)) {
            uniqueByUrl.set(key, item);
        }
    }
    const uniqueItems = Array.from(uniqueByUrl.values());

    log('=== ALL LEVELS DEBUG ===', 'DEBUG');
    for (const level of allLevels) {
        log(`  ${level.name} → type: ${level.type}, level: ${level.level}`, 'DEBUG');
    }

    log('Unique items (' + uniqueItems.length + '): ' + uniqueItems.map(i => i.name + '(' + i.level + ')').join(' → '), 'INFO');

    // ============================================================
    // FIND NEAREST PARENTS
    // ============================================================

    function findNearestParentsByHierarchy() {
        const lineage = [];
        const currentLevel = TYPE_LEVEL_MAP[currentPageType] || 99;
        const currentPageTitleLower = currentPageTitle.toLowerCase();
        
        const candidates = uniqueItems.filter(item => 
            item.name.toLowerCase() !== currentPageTitleLower
        );
        
        if (candidates.length === 0) {
            const parentCandidates = uniqueItems.filter(item => 
                item.name.toLowerCase() !== currentPageTitleLower
            );
            if (parentCandidates.length > 0) {
                const sortedByLevel = [...parentCandidates].sort((a, b) => b.level - a.level);
                const nearest = sortedByLevel[0];
                lineage.push(nearest);
                log(`⚠️ No candidates, using "${nearest.name}" as fallback`, 'WARN');
            }
            return lineage;
        }
        
        const validCandidates = candidates.filter(item => item.level <= currentLevel);
        
        if (validCandidates.length === 0) {
            const sortedByLevel = [...candidates].sort((a, b) => b.level - a.level);
            const nearest = sortedByLevel[0];
            lineage.push(nearest);
            log(`⚠️ No valid candidates, using "${nearest.name}"`, 'WARN');
            return lineage;
        }
        
        log('Valid candidates: ' + validCandidates.map(i => i.level + ':' + i.name).join(', '), 'DEBUG');
        
        const currentWords = currentPageTitleLower.split(/\s+/);
        const scoredCandidates = validCandidates.map(item => {
            const itemWords = item.name.toLowerCase().split(/\s+/);
            let relevanceScore = 0;
            
            for (const word of currentWords) {
                if (word.length > 2 && itemWords.includes(word)) {
                    relevanceScore += 10;
                }
            }
            
            for (let i = 1; i <= currentWords.length; i++) {
                const prefix = currentWords.slice(0, i).join(' ');
                if (item.name.toLowerCase() === prefix) {
                    relevanceScore += 100;
                    break;
                }
            }
            
            if (currentPageTitleLower.includes(item.name.toLowerCase()) && item.name.length > 3) {
                relevanceScore += 50;
            }
            
            if (item.name.toLowerCase().includes(currentPageTitleLower) && currentPageTitleLower.length > 3) {
                relevanceScore += 40;
            }
            
            const maxWordLength = Math.max(...itemWords.map(w => w.length));
            if (maxWordLength > 6) {
                relevanceScore += 5;
            }
            
            const commonWords = currentWords.filter(w => itemWords.includes(w) && w.length > 2);
            relevanceScore += commonWords.length * 5;
            
            log(`🎯 Score for "${item.name}" (level ${item.level}): ${relevanceScore}`, 'SCORE');
            
            return { ...item, relevanceScore };
        });
        
        scoredCandidates.sort((a, b) => {
            if (a.level !== b.level) return b.level - a.level;
            return b.relevanceScore - a.relevanceScore;
        });
        
        log('Scored candidates (sorted): ' + scoredCandidates.map(i => i.level + ':' + i.name + '(' + i.relevanceScore + ')').join(' → '), 'DEBUG');
        
        const selectedParents = [];
        let highestLevel = -1;
        for (const item of scoredCandidates) {
            if (item.level > highestLevel) {
                highestLevel = item.level;
            }
        }
        
        const topLevelParents = scoredCandidates.filter(item => item.level === highestLevel);
        topLevelParents.sort((a, b) => b.relevanceScore - a.relevanceScore);
        
        for (const item of topLevelParents) {
            const exists = lineage.some(l => l.name === item.name);
            if (!exists) {
                lineage.push(item);
                log(`🎯 Selected: "${item.name}" (level ${item.level}) with score ${item.relevanceScore}`, 'SUCCESS');
            }
        }
        
        if (lineage.length === 0) {
            const currentPageItem = uniqueItems.find(item => 
                item.name.toLowerCase() === currentPageTitleLower
            );
            if (currentPageItem && currentPageItem.level > 0) {
                lineage.push(currentPageItem);
                log(`⚠️ Adding current page as parent (no other parents found): "${currentPageItem.name}"`, 'WARN');
            }
        }
        
        log('Lineage (prioritized): ' + lineage.map(i => i.level + ':' + i.name).join(' → '), 'SUCCESS');
        
        return lineage;
    }

    let lineageLevels = findNearestParentsByHierarchy();

    log('Initial lineage (' + lineageLevels.length + '): ' + lineageLevels.map(i => i.name + '(' + i.type + ')').join(' → '), 'INFO');

    lineageLevels = forceInjectDirectParent(
        lineageLevels, 
        uniqueItems,
        currentPageTitle, 
        entityType,
        enhancedBreadcrumbItems
    );

    log('After force injection (' + lineageLevels.length + '): ' + lineageLevels.map(i => i.name + '(' + i.type + ')').join(' → '), 'INFO');

    const cleanLineage = [];
    const usedLineage = new Set();

    for (const item of lineageLevels) {
        const key = item.name.toLowerCase();
        if (usedLineage.has(key)) continue;
        usedLineage.add(key);
        cleanLineage.push(item);
    }

    const validatedLineage = validateAndFixHierarchy(cleanLineage);

    validatedLineage.sort((a, b) => {
        const idxA = HIERARCHY_ORDER.indexOf(a.type);
        const idxB = HIERARCHY_ORDER.indexOf(b.type);
        if (idxA !== idxB) return idxA - idxB;
        return a.position - b.position;
    });

    // ========================================================
    // AMBIL SEMUA PARENT DENGAN LEVEL TERTINGGI (FINAL)
    // ========================================================
    
    let finalParents = [];

    const parentOnly = validatedLineage.filter(item => 
        item.name.toLowerCase() !== currentPageTitle.toLowerCase()
    );

    log(`Parent candidates (${parentOnly.length}): ` + parentOnly.map(i => i.name + '(' + i.level + ')').join(', '), 'DEBUG');

    if (parentOnly.length > 0) {
        const highestLevel = Math.max(...parentOnly.map(i => i.level));
        finalParents = parentOnly.filter(item => item.level === highestLevel);
        finalParents.sort((a, b) => a.position - b.position);
        
        log(`✅ PARENT FOUND: ${finalParents.length} parent(s) at level ${highestLevel}: ` + finalParents.map(i => i.name).join(', '), 'SUCCESS');
    } else {
        log('⚠️ No parent found (only current page)', 'WARN');
    }

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

    for (const item of finalParents) {
        const exists = selectedLevels.some(l => l.name.toLowerCase() === item.name.toLowerCase());
        if (!exists) {
            selectedLevels.push(item);
            log(`👪 Adding parent: "${item.name}" (level ${item.level})`, 'PARENT');
        }
    }

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
    // 28. FINAL UNIQUE LEVELS
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
    // 29. GENERATE HTML
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
    // 30. JSON LD
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
    // 31. REMOVE OLD
    // ============================================================

    document.querySelectorAll('.breadcrumbs, .breadcrumb-nav, [aria-label="Breadcrumb"]')
        .forEach(el => el.remove());
    document.querySelectorAll('script[data-breadcrumb="true"]')
        .forEach(el => el.remove());

    // ============================================================
    // 32. TARGET ELEMENT
    // ============================================================

    const targetElement = document.querySelector('main, article, .content, #main-content, .post-content');

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

    console.log('📊 BREADCRUMB GENERATION SUMMARY (v10.10):');
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
        version: '10.10.0',
        parentCount: finalParents.length,
        parents: finalParents,
        isVariant: currentPageType === 'variant',
        isMoneyChild: currentPageType === 'money-child'
    };
}

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
		urlMappingJasaPerkuatanTanahFromMoneyMasterMoneyMaster1,
		urlMappingJasaRetrofittingPondasiFromMoneyMaster1MoneyPage,
		urlMappingJasaPerkuatanTanahFromMoneyMasterMoneyPage,
		urlMappingPerkuatanTanahLongsorFromMoneyPageMoneyPage1,
		urlMappingJasaPondasiFromMoneyMasterMoneyMaster1,
		urlMappingJasaBoronganPondasiFromMoneyMaster1MoneyPage,
		urlMappingJasaPondasiTanahFromMoneyMaster1MoneyPage,
		urlMappingJasaPondasiBangunanFromMoneyMaster1MoneyPage,
		urlMappingJasaCakarAyamFromMoneyMaster1MoneyPage,
		urlMappingJasaPondasiCakarAyamFromMoneyPageMoneyPage1,
		urlMappingHargaJasaPondasiCakarAyamFromMoneyPage1MoneyPage2,
		urlMappingJasaPondasiTapakFromMoneyMaster1MoneyPage,
		urlMappingHargaJasaPondasiTapakFromMoneyPageMoneyPage1,
		urlMappingJasaTiangPancangFromMoneyMaster1MoneyPage,
		urlMappingJasaPondasiSumuranFromMoneyMaster1MoneyPage,
		urlMappingJasaPemadatanPondasiFromMoneyMaster1MoneyPage,
		urlMappingJasaPersiapanPondasiFromMoneyMaster1MoneyPage
		
    );

    // --- validasi URL terdaftar ---
    if (!urlMappingGabungan[cleanUrlJasaPondasiPerkuatanTanahKons]) {
      console.log(`[HybridDateModified] URL tidak terdaftar: ${cleanUrlJasaPondasiPerkuatanTanahKons}`);
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

	if (urlMappingJasaPerkuatanTanahFromMoneyMasterMoneyPage[cleanUrlJasaPondasiPerkuatanTanahKons]) {
        generateBreadcrumbjasaKonstruksiPondasiPerkuatanTanah(
        urlMappingJasaPerkuatanTanahFromMoneyMasterMoneyPage,
        cleanUrlJasaPondasiPerkuatanTanahKons,
        [
           // { name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
             { name: 'Daftar Jasa Perkuatan Tanah', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-perkuatan-tanah.html' },
			{ name: 'Perbandingan Jasa Perkuatan Tanah', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-perkuatan-tanah.html' },
			{ name: 'Jasa Perkuatan Tanah', url: 'https://www.betonjayareadymix.com/p/jasa-perkuatan-tanah.html' }
        ],
        'JASA_KONSTRUKSI'
    );
}
if (urlMappingPerkuatanTanahLongsorFromMoneyPageMoneyPage1[cleanUrlJasaPondasiPerkuatanTanahKons]) {
        generateBreadcrumbjasaKonstruksiPondasiPerkuatanTanah(
        urlMappingPerkuatanTanahLongsorFromMoneyPageMoneyPage1,
        cleanUrlJasaPondasiPerkuatanTanahKons,
        [
           // { name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
             { name: 'Daftar Jasa Perkuatan Tanah', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-perkuatan-tanah.html' },
			{ name: 'Perbandingan Jasa Perkuatan Tanah', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-perkuatan-tanah.html' },
			{ name: 'Jasa Perkuatan Tanah', url: 'https://www.betonjayareadymix.com/p/jasa-perkuatan-tanah.html' },
			{ name: 'Jasa Perkuatan Tanah Longsor', url: 'https://www.betonjayareadymix.com/p/jasa-perkuatan-tanah-longsor.html' }
        ],
        'JASA_KONSTRUKSI'
    );
}

if (urlMappingJasaPerkuatanTanahFromMoneyMasterMoneyMaster1[cleanUrlJasaPondasiPerkuatanTanahKons]) {
       generateBreadcrumbjasaKonstruksiPondasiPerkuatanTanah(
        urlMappingJasaPerkuatanTanahFromMoneyMasterMoneyMaster1,
        cleanUrlJasaPondasiPerkuatanTanahKons,
        [
           // { name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
             { name: 'Daftar Jasa Perkuatan Tanah', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-perkuatan-tanah.html' },
			{ name: 'Perbandingan Jasa Perkuatan Tanah', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-perkuatan-tanah.html' },
			{ name: 'Jasa Perkuatan Tanah', url: 'https://www.betonjayareadymix.com/p/jasa-perkuatan-tanah.html' }
        ],
        'JASA_KONSTRUKSI'
    );
    }
	  if (urlMappingJasaRetrofittingPondasiFromMoneyMaster1MoneyPage[cleanUrlJasaPondasiPerkuatanTanahKons]) {
        generateBreadcrumbjasaKonstruksiPondasiPerkuatanTanah(
        urlMappingJasaRetrofittingPondasiFromMoneyMaster1MoneyPage,
        cleanUrlJasaPondasiPerkuatanTanahKons,
        [
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
             { name: 'Daftar Jasa Perkuatan Tanah', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-perkuatan-tanah.html' },
			{ name: 'Perbandingan Jasa Perkuatan Tanah', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-perkuatan-tanah.html' },
			{ name: 'Jasa Perkuatan Tanah', url: 'https://www.betonjayareadymix.com/p/jasa-perkuatan-tanah.html' },
			{ name: 'Jasa Retrofitting Pondasi', url: 'https://www.betonjayareadymix.com/p/jasa-retrofitting-pondasi.html' }
        ],
        'JASA_KONSTRUKSI'
    );
    }

	
	if (urlMappingJasaPondasiFromMoneyMasterMoneyMaster1[cleanUrlJasaPondasiPerkuatanTanahKons]) {
        generateBreadcrumbjasaKonstruksiPondasiPerkuatanTanah(
        urlMappingJasaPondasiFromMoneyMasterMoneyMaster1,
        cleanUrlJasaPondasiPerkuatanTanahKons,
        [
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
             { name: 'Daftar Jasa Pondasi', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-pondasi.html' },
			{ name: 'Perbandingan Jasa Pondasi', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-pondasi.html' },
			{ name: 'Jasa Pondasi', url: 'https://www.betonjayareadymix.com/p/jasa-pondasi.html' }
        ],
        'JASA_KONSTRUKSI'
    );
}
if (urlMappingJasaBoronganPondasiFromMoneyMaster1MoneyPage[cleanUrlJasaPondasiPerkuatanTanahKons]) {
        generateBreadcrumbjasaKonstruksiPondasiPerkuatanTanah(
        urlMappingJasaBoronganPondasiFromMoneyMaster1MoneyPage,
        cleanUrlJasaPondasiPerkuatanTanahKons,
        [
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
             { name: 'Daftar Jasa Pondasi', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-pondasi.html' },
			{ name: 'Perbandingan Jasa Pondasi', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-pondasi.html' },
			{ name: 'Jasa Pondasi', url: 'https://www.betonjayareadymix.com/p/jasa-pondasi.html' },
			{ name: 'Jasa Borongan Pondasi', url: 'https://www.betonjayareadymix.com/p/jasa-borongan-pondasi.html' }
        ],
        'JASA_KONSTRUKSI'
    );

}
if (urlMappingJasaPondasiTanahFromMoneyMaster1MoneyPage[cleanUrlJasaPondasiPerkuatanTanahKons]) {
        generateBreadcrumbjasaKonstruksiPondasiPerkuatanTanah(
        urlMappingJasaPondasiTanahFromMoneyMaster1MoneyPage,
        cleanUrlJasaPondasiPerkuatanTanahKons,
        [
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
             { name: 'Daftar Jasa Pondasi', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-pondasi.html' },
			{ name: 'Perbandingan Jasa Pondasi', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-pondasi.html' },
			{ name: 'Jasa Pondasi', url: 'https://www.betonjayareadymix.com/p/jasa-pondasi.html' },
			{ name: 'Jasa Pondasi Tanah', url: 'https://www.betonjayareadymix.com/p/jasa-pondasi-tanah.html' }
        ],
        'JASA_KONSTRUKSI'
    );
}
if (urlMappingJasaPondasiBangunanFromMoneyMaster1MoneyPage[cleanUrlJasaPondasiPerkuatanTanahKons]) {
        generateBreadcrumbjasaKonstruksiPondasiPerkuatanTanah(
        urlMappingJasaPondasiBangunanFromMoneyMaster1MoneyPage,
        cleanUrlJasaPondasiPerkuatanTanahKons,
        [
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
             { name: 'Daftar Jasa Pondasi', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-pondasi.html' },
			{ name: 'Perbandingan Jasa Pondasi', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-pondasi.html' },
			{ name: 'Jasa Pondasi', url: 'https://www.betonjayareadymix.com/p/jasa-pondasi.html' },
			{ name: 'Jasa Pondasi Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-pondasi-bangunan.html' }
        ],
        'JASA_KONSTRUKSI'
    );
}
if (urlMappingJasaCakarAyamFromMoneyMaster1MoneyPage[cleanUrlJasaPondasiPerkuatanTanahKons]) {
        generateBreadcrumbjasaKonstruksiPondasiPerkuatanTanah(
        urlMappingJasaCakarAyamFromMoneyMaster1MoneyPage,
        cleanUrlJasaPondasiPerkuatanTanahKons,
        [
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
             { name: 'Daftar Jasa Pondasi', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-pondasi.html' },
			{ name: 'Perbandingan Jasa Pondasi', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-pondasi.html' },
			{ name: 'Jasa Pondasi', url: 'https://www.betonjayareadymix.com/p/jasa-pondasi.html' },
			{ name: 'Jasa Cakar Ayam', url: 'https://www.betonjayareadymix.com/p/jasa-cakar-ayam.html' }
        ],
        'JASA_KONSTRUKSI'
    );
}
if (urlMappingJasaPondasiCakarAyamFromMoneyPageMoneyPage1[cleanUrlJasaPondasiPerkuatanTanahKons]) {
        generateBreadcrumbjasaKonstruksiPondasiPerkuatanTanah(
        urlMappingJasaPondasiCakarAyamFromMoneyPageMoneyPage1,
        cleanUrlJasaPondasiPerkuatanTanahKons,
        [
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
             { name: 'Daftar Jasa Pondasi', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-pondasi.html' },
			{ name: 'Perbandingan Jasa Pondasi', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-pondasi.html' },
			{ name: 'Jasa Pondasi', url: 'https://www.betonjayareadymix.com/p/jasa-pondasi.html' },
			{ name: 'Jasa Cakar Ayam', url: 'https://www.betonjayareadymix.com/p/jasa-cakar-ayam.html' },
			{ name: 'Jasa Pondasi Cakar Ayam', url: 'https://www.betonjayareadymix.com/p/jasa-pondasi-cakar-ayam.html' }
        ],
        'JASA_KONSTRUKSI'
    );
}
if (urlMappingHargaJasaPondasiCakarAyamFromMoneyPage1MoneyPage2[cleanUrlJasaPondasiPerkuatanTanahKons]) {
        generateBreadcrumbjasaKonstruksiPondasiPerkuatanTanah(
        urlMappingHargaJasaPondasiCakarAyamFromMoneyPage1MoneyPage2,
        cleanUrlJasaPondasiPerkuatanTanahKons,
        [
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
             { name: 'Daftar Jasa Pondasi', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-pondasi.html' },
			{ name: 'Perbandingan Jasa Pondasi', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-pondasi.html' },
			{ name: 'Jasa Pondasi', url: 'https://www.betonjayareadymix.com/p/jasa-pondasi.html' },
			{ name: 'Jasa Cakar Ayam', url: 'https://www.betonjayareadymix.com/p/jasa-cakar-ayam.html' },
			{ name: 'Jasa Pondasi Cakar Ayam', url: 'https://www.betonjayareadymix.com/p/jasa-pondasi-cakar-ayam.html' },
			{ name: 'Harga Jasa Pondasi Cakar Ayam', url: 'https://www.betonjayareadymix.com/p/harga-jasa-pondasi-cakar-ayam.html' }
        ],
        'JASA_KONSTRUKSI'
    );
}
	
	
if (urlMappingJasaPondasiTapakFromMoneyMaster1MoneyPage[cleanUrlJasaPondasiPerkuatanTanahKons]) {
        generateBreadcrumbjasaKonstruksiPondasiPerkuatanTanah(
        urlMappingJasaPondasiTapakFromMoneyMaster1MoneyPage,
        cleanUrlJasaPondasiPerkuatanTanahKons,
        [
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
             { name: 'Daftar Jasa Pondasi', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-pondasi.html' },
			{ name: 'Perbandingan Jasa Pondasi', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-pondasi.html' },
			{ name: 'Jasa Pondasi', url: 'https://www.betonjayareadymix.com/p/jasa-pondasi.html' },
			{ name: 'Jasa Pondasi Tapak', url: 'https://www.betonjayareadymix.com/p/jasa-pondasi-tapak.html' }
        ],
        'JASA_KONSTRUKSI'
    );
}	
if (urlMappingHargaJasaPondasiTapakFromMoneyPageMoneyPage1[cleanUrlJasaPondasiPerkuatanTanahKons]) {
        generateBreadcrumbjasaKonstruksiPondasiPerkuatanTanah(
        urlMappingHargaJasaPondasiTapakFromMoneyPageMoneyPage1,
        cleanUrlJasaPondasiPerkuatanTanahKons,
        [
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
             { name: 'Daftar Jasa Pondasi', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-pondasi.html' },
			{ name: 'Perbandingan Jasa Pondasi', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-pondasi.html' },
			{ name: 'Jasa Pondasi', url: 'https://www.betonjayareadymix.com/p/jasa-pondasi.html' },
			{ name: 'Jasa Pondasi Tapak', url: 'https://www.betonjayareadymix.com/p/jasa-pondasi-tapak.html' },
			{ name: 'Harga Jasa Pondasi Tapak', url: 'https://www.betonjayareadymix.com/p/harga-jasa-pondasi-tapak.html' }
        ],
        'JASA_KONSTRUKSI'
    );
}
	
if (urlMappingJasaTiangPancangFromMoneyMaster1MoneyPage[cleanUrlJasaPondasiPerkuatanTanahKons]) {
        generateBreadcrumbjasaKonstruksiPondasiPerkuatanTanah(
        urlMappingJasaTiangPancangFromMoneyMaster1MoneyPage,
        cleanUrlJasaPondasiPerkuatanTanahKons,
        [
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
             { name: 'Daftar Jasa Pondasi', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-pondasi.html' },
			{ name: 'Perbandingan Jasa Pondasi', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-pondasi.html' },
			{ name: 'Jasa Pondasi', url: 'https://www.betonjayareadymix.com/p/jasa-pondasi.html' },
			{ name: 'Jasa Tiang Pancang', url: 'https://www.betonjayareadymix.com/p/jasa-tiang-pancang.html' }
        ],
        'JASA_KONSTRUKSI'
    );
}
if (urlMappingJasaPondasiSumuranFromMoneyMaster1MoneyPage[cleanUrlJasaPondasiPerkuatanTanahKons]) {
        generateBreadcrumbjasaKonstruksiPondasiPerkuatanTanah(
        urlMappingJasaPondasiSumuranFromMoneyMaster1MoneyPage,
        cleanUrlJasaPondasiPerkuatanTanahKons,
        [
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
             { name: 'Daftar Jasa Pondasi', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-pondasi.html' },
			{ name: 'Perbandingan Jasa Pondasi', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-pondasi.html' },
			{ name: 'Jasa Pondasi', url: 'https://www.betonjayareadymix.com/p/jasa-pondasi.html' },
			{ name: 'Jasa Pondasi Sumuran', url: 'https://www.betonjayareadymix.com/p/jasa-pondasi-sumuran.html' }
        ],
        'JASA_KONSTRUKSI'
    );
}
   if (urlMappingJasaPemadatanPondasiFromMoneyMaster1MoneyPage[cleanUrlJasaPondasiPerkuatanTanahKons]) {
	     generateBreadcrumbjasaKonstruksiPondasiPerkuatanTanah(
        urlMappingJasaPemadatanPondasiFromMoneyMaster1MoneyPage,
        cleanUrlJasaPondasiPerkuatanTanahKons,
        [
           { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
             { name: 'Daftar Jasa Pondasi', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-pondasi.html' },
			{ name: 'Perbandingan Jasa Pondasi', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-pondasi.html' },
			{ name: 'Jasa Pondasi', url: 'https://www.betonjayareadymix.com/p/jasa-pondasi.html' },
			{ name: 'Jasa Pemadatan Pondasi', url: 'https://www.betonjayareadymix.com/p/jasa-pemadatan-pondasi.html' }
        ],
        'JASA_KONSTRUKSI'
    );
    }
if (urlMappingJasaPersiapanPondasiFromMoneyMaster1MoneyPage[cleanUrlJasaPondasiPerkuatanTanahKons]) {
        generateBreadcrumbjasaKonstruksiPondasiPerkuatanTanah(
        urlMappingJasaPersiapanPondasiFromMoneyMaster1MoneyPage,
        cleanUrlJasaPondasiPerkuatanTanahKons,
        [
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
             { name: 'Daftar Jasa Pondasi', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-pondasi.html' },
			{ name: 'Perbandingan Jasa Pondasi', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-pondasi.html' },
			{ name: 'Jasa Pondasi', url: 'https://www.betonjayareadymix.com/p/jasa-pondasi.html' },
			{ name: 'Jasa Persiapan Pondasi', url: 'https://www.betonjayareadymix.com/p/jasa-persiapan-pondasi.html' }
        ],
        'JASA_KONSTRUKSI'
    );
}
   
   });
