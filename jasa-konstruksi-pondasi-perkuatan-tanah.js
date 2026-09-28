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
"https://www.betonjayareadymix.com/p/jasa-pondasi-tiang-pancang.html": "Jasa Pondasi Tiang Pancang"
};
const urlMappingJasaPondasiTiangPancangFromMoneyPageMoneyPage1 = {
"https://www.betonjayareadymix.com/p/harga-jasa-pondasi-tiang-pancang.html": "Harga Jasa Pondasi Tiang Pancang"
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


// ═══════════════════════════════════════════════════════════
// [BAGIAN 2] EARLY EXIT v2.0.0 — PENDEKATAN C
// ═══════════════════════════════════════════════════════════

(function() {
    'use strict';
    
    var cleanUrl = window.location.href.split(/[?#]/)[0];
    console.log('[jasa-pondasi-perkuatan-tanah] 🔍 Check URL: ' + cleanUrl);
    
    // Kumpulkan SEMUA mapping ke array
    var ALL_MAPPINGS = [
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
        urlMappingJasaPondasiTiangPancangFromMoneyPageMoneyPage1,
        urlMappingJasaPondasiSumuranFromMoneyMaster1MoneyPage,
        urlMappingJasaPemadatanPondasiFromMoneyMaster1MoneyPage,
        urlMappingJasaPersiapanPondasiFromMoneyMaster1MoneyPage,
        urlMappingJasaPerkuatanTanahFromMoneyMasterMoneyPage,
        urlMappingPerkuatanTanahLongsorFromMoneyPageMoneyPage1,
        urlMappingJasaPerkuatanTanahFromMoneyMasterMoneyMaster1,
        urlMappingJasaRetrofittingPondasiFromMoneyMaster1MoneyPage
    ];
    
    // ✅ PENDEKATAN C: Loop + foundIndex + foundMappingName + break
    var foundIndex = -1;
    var foundMappingName = '';
    
    for (var i = 0; i < ALL_MAPPINGS.length; i++) {
        if (!ALL_MAPPINGS[i] || typeof ALL_MAPPINGS[i] !== 'object') {
            console.warn('[jasa-pondasi-perkuatan-tanah] ⚠️ Mapping #' + (i + 1) + ' bukan object — skip');
            continue;
        }
        if (ALL_MAPPINGS[i][cleanUrl]) {
            foundIndex = i;
            foundMappingName = ALL_MAPPINGS[i][cleanUrl];
            break;
        }
    }
    
    if (foundIndex === -1) {
        console.log('[jasa-pondasi-perkuatan-tanah] ⏭️ SKIP — URL tidak cocok di semua cluster');
        window.__jasaPondasiPerkuatanTanahActive = false;
        return;
    }
    
    window.__jasaPondasiPerkuatanTanahActive = true;
    window.__jasaPondasiPerkuatanTanahMatchIndex = foundIndex;
    window.__jasaPondasiPerkuatanTanahMatchMappingName = foundMappingName;
    window.__jasaPondasiPerkuatanTanahMappings = ALL_MAPPINGS;
    
    console.log(
        '[jasa-pondasi-perkuatan-tanah] ✅ Match di mapping #' + (foundIndex + 1) +
        ' — Label: "' + foundMappingName + '"' +
        ' — EXECUTE flag set'
    );
})();

// ═══════════════════════════════════════════════════════════
// [BAGIAN 3] FUNGSI UTAMA — Semua logic breadcrumb
// ═══════════════════════════════════════════════════════════

function initJasaPondasiPerkuatanTanah() {
    // ⚡ Guard flag
    if (!window.__jasaPondasiPerkuatanTanahActive) {
        console.log('[jasa-pondasi-perkuatan-tanah] ⏭️ Execute SKIP — URL tidak cocok');
        return;
    }
    
    console.log('[jasa-pondasi-perkuatan-tanah] 🚀 Execute — URL cocok');
    
    var cleanUrlJasaPondasiPerkuatanTanahKons = window.location.href.split(/[?#]/)[0];
    
    // ✅ Guard elemen DOM
    var JasaKonsPondasiTanah = document.getElementById("JasaKonsPondasiTanah");
    if (!JasaKonsPondasiTanah) {
        console.error("[jasa-pondasi-perkuatan-tanah] ❌ elemen Id JasaKonsPondasiTanah kondisi terhapus");
        return;
    }

    // ═══════════════════════════════════════════════════════
    // [BLOK 1] JASA PERKUATAN TANAH
    // ═══════════════════════════════════════════════════════
	
    if (urlMappingJasaPerkuatanTanahFromMoneyMasterMoneyPage[cleanUrlJasaPondasiPerkuatanTanahKons]) {
        generateBreadcrumbShared(
            urlMappingJasaPerkuatanTanahFromMoneyMasterMoneyPage,
            cleanUrlJasaPondasiPerkuatanTanahKons,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Perkuatan Tanah', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-perkuatan-tanah.html' },
                { name: 'Perbandingan Jasa Perkuatan Tanah', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-perkuatan-tanah.html' },
                { name: 'Jasa Perkuatan Tanah', url: 'https://www.betonjayareadymix.com/p/jasa-perkuatan-tanah.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }

    // ═══════════════════════════════════════════════════════
    // [BLOK 2] PERKUATAN TANAH LONGSOR
    // ═══════════════════════════════════════════════════════
	
    if (urlMappingPerkuatanTanahLongsorFromMoneyPageMoneyPage1[cleanUrlJasaPondasiPerkuatanTanahKons]) {
        generateBreadcrumbShared(
            urlMappingPerkuatanTanahLongsorFromMoneyPageMoneyPage1,
            cleanUrlJasaPondasiPerkuatanTanahKons,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Perkuatan Tanah', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-perkuatan-tanah.html' },
                { name: 'Perbandingan Jasa Perkuatan Tanah', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-perkuatan-tanah.html' },
                { name: 'Jasa Perkuatan Tanah', url: 'https://www.betonjayareadymix.com/p/jasa-perkuatan-tanah.html' },
                { name: 'Jasa Perkuatan Tanah Longsor', url: 'https://www.betonjayareadymix.com/p/jasa-perkuatan-tanah-longsor.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }

    // ═══════════════════════════════════════════════════════
    // [BLOK 3] JASA PERKUATAN TANAH (MM)
    // ═══════════════════════════════════════════════════════
	
    if (urlMappingJasaPerkuatanTanahFromMoneyMasterMoneyMaster1[cleanUrlJasaPondasiPerkuatanTanahKons]) {
        generateBreadcrumbShared(
            urlMappingJasaPerkuatanTanahFromMoneyMasterMoneyMaster1,
            cleanUrlJasaPondasiPerkuatanTanahKons,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Perkuatan Tanah', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-perkuatan-tanah.html' },
                { name: 'Perbandingan Jasa Perkuatan Tanah', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-perkuatan-tanah.html' },
                { name: 'Jasa Perkuatan Tanah', url: 'https://www.betonjayareadymix.com/p/jasa-perkuatan-tanah.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }

    // ═══════════════════════════════════════════════════════
    // [BLOK 4] JASA RETROFITTING PONDASI
    // ═══════════════════════════════════════════════════════
	
    if (urlMappingJasaRetrofittingPondasiFromMoneyMaster1MoneyPage[cleanUrlJasaPondasiPerkuatanTanahKons]) {
        generateBreadcrumbShared(
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

    // ═══════════════════════════════════════════════════════
    // [BLOK 5] JASA PONDASI (MM)
    // ═══════════════════════════════════════════════════════
	
    if (urlMappingJasaPondasiFromMoneyMasterMoneyMaster1[cleanUrlJasaPondasiPerkuatanTanahKons]) {
        generateBreadcrumbShared(
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

    // ═══════════════════════════════════════════════════════
    // [BLOK 6] JASA BORONGAN PONDASI
    // ═══════════════════════════════════════════════════════
	
    if (urlMappingJasaBoronganPondasiFromMoneyMaster1MoneyPage[cleanUrlJasaPondasiPerkuatanTanahKons]) {
        generateBreadcrumbShared(
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

    // ═══════════════════════════════════════════════════════
    // [BLOK 7] JASA PONDASI TANAH
    // ═══════════════════════════════════════════════════════
	
    if (urlMappingJasaPondasiTanahFromMoneyMaster1MoneyPage[cleanUrlJasaPondasiPerkuatanTanahKons]) {
        generateBreadcrumbShared(
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

    // ═══════════════════════════════════════════════════════
    // [BLOK 8] JASA PONDASI BANGUNAN
    // ═══════════════════════════════════════════════════════
	
    if (urlMappingJasaPondasiBangunanFromMoneyMaster1MoneyPage[cleanUrlJasaPondasiPerkuatanTanahKons]) {
        generateBreadcrumbShared(
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

    // ═══════════════════════════════════════════════════════
    // [BLOK 9] JASA CAKAR AYAM
    // ═══════════════════════════════════════════════════════
	
    if (urlMappingJasaCakarAyamFromMoneyMaster1MoneyPage[cleanUrlJasaPondasiPerkuatanTanahKons]) {
        generateBreadcrumbShared(
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

    // ═══════════════════════════════════════════════════════
    // [BLOK 10] JASA PONDASI CAKAR AYAM
    // ═══════════════════════════════════════════════════════
	
    if (urlMappingJasaPondasiCakarAyamFromMoneyPageMoneyPage1[cleanUrlJasaPondasiPerkuatanTanahKons]) {
        generateBreadcrumbShared(
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

    // ═══════════════════════════════════════════════════════
    // [BLOK 11] HARGA JASA PONDASI CAKAR AYAM
    // ═══════════════════════════════════════════════════════
	
    if (urlMappingHargaJasaPondasiCakarAyamFromMoneyPage1MoneyPage2[cleanUrlJasaPondasiPerkuatanTanahKons]) {
        generateBreadcrumbShared(
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

    // ═══════════════════════════════════════════════════════
    // [BLOK 12] JASA PONDASI TAPAK
    // ═══════════════════════════════════════════════════════
	
    if (urlMappingJasaPondasiTapakFromMoneyMaster1MoneyPage[cleanUrlJasaPondasiPerkuatanTanahKons]) {
        generateBreadcrumbShared(
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

    // ═══════════════════════════════════════════════════════
    // [BLOK 13] HARGA JASA PONDASI TAPAK
    // ═══════════════════════════════════════════════════════
	
    if (urlMappingHargaJasaPondasiTapakFromMoneyPageMoneyPage1[cleanUrlJasaPondasiPerkuatanTanahKons]) {
        generateBreadcrumbShared(
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

    // ═══════════════════════════════════════════════════════
    // [BLOK 14] JASA TIANG PANCANG
    // ═══════════════════════════════════════════════════════
	
    if (urlMappingJasaTiangPancangFromMoneyMaster1MoneyPage[cleanUrlJasaPondasiPerkuatanTanahKons]) {
        generateBreadcrumbShared(
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

    // ═══════════════════════════════════════════════════════
    // [BLOK 15] JASA PONDASI TIANG PANCANG
    // ═══════════════════════════════════════════════════════
	
    if (urlMappingJasaPondasiTiangPancangFromMoneyPageMoneyPage1[cleanUrlJasaPondasiPerkuatanTanahKons]) {
        generateBreadcrumbShared(
            urlMappingJasaPondasiTiangPancangFromMoneyPageMoneyPage1,
            cleanUrlJasaPondasiPerkuatanTanahKons,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Pondasi', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-pondasi.html' },
                { name: 'Perbandingan Jasa Pondasi', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-pondasi.html' },
                { name: 'Jasa Pondasi', url: 'https://www.betonjayareadymix.com/p/jasa-pondasi.html' },
                { name: 'Jasa Tiang Pancang', url: 'https://www.betonjayareadymix.com/p/jasa-tiang-pancang.html' },
                { name: 'Jasa Pondasi Tiang Pancang', url: 'https://www.betonjayareadymix.com/p/jasa-pondasi-tiang-pancang.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }

    // ═══════════════════════════════════════════════════════
    // [BLOK 16] JASA PONDASI SUMURAN
    // ═══════════════════════════════════════════════════════
	
    if (urlMappingJasaPondasiSumuranFromMoneyMaster1MoneyPage[cleanUrlJasaPondasiPerkuatanTanahKons]) {
        generateBreadcrumbShared(
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

    // ═══════════════════════════════════════════════════════
    // [BLOK 17] JASA PEMADATAN PONDASI
    // ═══════════════════════════════════════════════════════
	
    if (urlMappingJasaPemadatanPondasiFromMoneyMaster1MoneyPage[cleanUrlJasaPondasiPerkuatanTanahKons]) {
        generateBreadcrumbShared(
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

    // ═══════════════════════════════════════════════════════
    // [BLOK 18] JASA PERSIAPAN PONDASI
    // ═══════════════════════════════════════════════════════
	
    if (urlMappingJasaPersiapanPondasiFromMoneyMaster1MoneyPage[cleanUrlJasaPondasiPerkuatanTanahKons]) {
        generateBreadcrumbShared(
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

    console.log('[jasa-pondasi-perkuatan-tanah] ✅ Semua breadcrumb selesai diproses');
}

// ═══════════════════════════════════════════════════════════
// [BAGIAN 4] FIX v2.1.0 — Handle DOMContentLoaded race condition
// ═══════════════════════════════════════════════════════════

if (document.readyState === 'loading') {
    console.log('[jasa-pondasi-perkuatan-tanah] ⏳ DOM loading, tunggu event');
    document.addEventListener('DOMContentLoaded', initJasaPondasiPerkuatanTanah);
} else {
    console.log('[jasa-pondasi-perkuatan-tanah] ⚡ DOM ready, langsung execute');
    initJasaPondasiPerkuatanTanah();
}

// ============================================================
// AKHIR FILE — TIDAK ADA KARAKTER TAMBAHAN
// ============================================================
