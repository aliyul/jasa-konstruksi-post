// ============================================================
// JASA PONDASI & PERKUATAN TANAH — POST
// v2.2.0 — Early Exit v2.0.0 + Fix v2.1.0 + Pendekatan C
// ============================================================

console.log('[jasa-pondasi-perkuatan-tanah-post] 📄 File loaded, waiting for DOM...');

// ============================================================
// 🔍 ENTITY TYPE: JASA (Pondasi Bangunan)
// ============================================================
// 📁 JASA PONDASI (BORONGAN PONDASI) - MONEY PAGE & CHILD
// 🧠 ENTITY: JASA → TYPE: MONEY_PAGE & MONEY_CHILD
// Parent: Jasa Pondasi Bangunan (SUB2)
// Breadcrumb: Home > Jasa Konstruksi > Jasa Pondasi Bangunan > [Nama Layanan] (4 level)
// ============================================================

// ═══════════════════════════════════════════════════════════
// [BAGIAN 1] DEFINISI SEMUA MAPPING
// ═══════════════════════════════════════════════════════════

const urlMappingJasaBoronganPondasiFromMoneyPageMoneyChild = {
  "https://www.betonjayareadymix.com/2019/08/jasa-borongan-pondasi-terdekat.html": "Jasa Borongan Pondasi Terdekat",
  "https://www.betonjayareadymix.com/2019/08/jasa-borongan-pondasi-murah.html": "Jasa Borongan Pondasi Murah",
  "https://www.betonjayareadymix.com/2019/08/jasa-borongan-pondasi-sumedang.html": "Jasa Borongan Pondasi Sumedang",
  "https://www.betonjayareadymix.com/2019/08/jasa-borongan-pondasi-subang.html": "Jasa Borongan Pondasi Subang",
  "https://www.betonjayareadymix.com/2019/08/jasa-borongan-pondasi-purwakarta.html": "Jasa Borongan Pondasi Purwakarta",
  "https://www.betonjayareadymix.com/2019/08/jasa-borongan-pondasi-pangandaran.html": "Jasa Borongan Pondasi Pangandaran",
  "https://www.betonjayareadymix.com/2019/08/jasa-borongan-pondasi-majalengka.html": "Jasa Borongan Pondasi Majalengka",
  "https://www.betonjayareadymix.com/2019/08/jasa-borongan-pondasi-kuningan.html": "Jasa Borongan Pondasi Kuningan",
  "https://www.betonjayareadymix.com/2019/08/jasa-borongan-pondasi-indramayu.html": "Jasa Borongan Pondasi Indramayu",
  "https://www.betonjayareadymix.com/2019/08/jasa-borongan-pondasi-cirebon.html": "Jasa Borongan Pondasi Cirebon",
  "https://www.betonjayareadymix.com/2019/08/jasa-borongan-pondasi-cianjur.html": "Jasa Borongan Pondasi Cianjur",
  "https://www.betonjayareadymix.com/2019/08/jasa-borongan-pondasi-ciamis.html": "Jasa Borongan Pondasi Ciamis",
  "https://www.betonjayareadymix.com/2019/08/jasa-borongan-pondasi-garut.html": "Jasa Borongan Pondasi Garut",
  "https://www.betonjayareadymix.com/2019/08/jasa-borongan-pondasi-tasikmalaya.html": "Jasa Borongan Pondasi Tasikmalaya",
  "https://www.betonjayareadymix.com/2019/08/jasa-borongan-pondasi-sukabumi.html": "Jasa Borongan Pondasi Sukabumi",
  "https://www.betonjayareadymix.com/2019/08/jasa-borongan-pondasi-bandung.html": "Jasa Borongan Pondasi Bandung",
  "https://www.betonjayareadymix.com/2019/08/jasa-borongan-pondasi-karawang.html": "Jasa Borongan Pondasi Karawang",
  "https://www.betonjayareadymix.com/2019/08/jasa-borongan-pondasi-bekasi.html": "Jasa Borongan Pondasi Bekasi",
  "https://www.betonjayareadymix.com/2019/08/jasa-borongan-pondasi-tangerang.html": "Jasa Borongan Pondasi Tangerang",
  "https://www.betonjayareadymix.com/2019/08/jasa-borongan-pondasi-depok.html": "Jasa Borongan Pondasi Depok",
  "https://www.betonjayareadymix.com/2019/08/jasa-borongan-pondasi-bogor.html": "Jasa Borongan Pondasi Bogor",
  "https://www.betonjayareadymix.com/2019/08/jasa-borongan-pondasi-jakarta.html": "Jasa Borongan Pondasi Jakarta"
};

const urlMappingJasaPondasiCakarAyamFromMoneyPageMoneyChild = {
  "https://www.betonjayareadymix.com/2019/08/jasa-pondasi-cakar-ayam-jakarta.html": "Jasa Pondasi Cakar Ayam Jakarta",
  "https://www.betonjayareadymix.com/2019/08/jasa-pondasi-cakar-ayam-bogor.html": "Jasa Pondasi Cakar Ayam Bogor",
  "https://www.betonjayareadymix.com/2019/08/jasa-pondasi-cakar-ayam-depok.html": "Jasa Pondasi Cakar Ayam Depok",
  "https://www.betonjayareadymix.com/2019/08/jasa-pondasi-cakar-ayam-tangerang.html": "Jasa Pondasi Cakar Ayam Tangerang",
  "https://www.betonjayareadymix.com/2019/08/jasa-pondasi-cakar-ayam-bekasi.html": "Jasa Pondasi Cakar Ayam Bekasi",
  "https://www.betonjayareadymix.com/2019/08/jasa-pondasi-cakar-ayam-karawang.html": "Jasa Pondasi Cakar Ayam Karawang",
  "https://www.betonjayareadymix.com/2019/08/jasa-pondasi-cakar-ayam-cianjur.html": "Jasa Pondasi Cakar Ayam Cianjur",
  "https://www.betonjayareadymix.com/2019/08/jasa-pondasi-cakar-ayam-bandung.html": "Jasa Pondasi Cakar Ayam Bandung",
  "https://www.betonjayareadymix.com/2019/08/jasa-pondasi-cakar-ayam-terdekat.html": "Jasa Pondasi Cakar Ayam Terdekat"
};

const urlMappingJasaPondasiTapakFromMoneyPageMoneyChild = {
  "https://www.betonjayareadymix.com/2019/08/jasa-pondasi-tapak-jakarta.html": "Jasa Pondasi Tapak Jakarta",
  "https://www.betonjayareadymix.com/2019/08/jasa-pondasi-tapak-bogor.html": "Jasa Pondasi Tapak Bogor",
  "https://www.betonjayareadymix.com/2019/08/jasa-pondasi-tapak-depok.html": "Jasa Pondasi Tapak Depok",
  // ✅ FIX: URL typo "Tangerang" → "tangerang" (lowercase)
  "https://www.betonjayareadymix.com/2019/08/jasa-pondasi-tapak-tangerang.html": "Jasa Pondasi Tapak Tangerang",
  "https://www.betonjayareadymix.com/2019/08/jasa-pondasi-tapak-bekasi.html": "Jasa Pondasi Tapak Bekasi",
  "https://www.betonjayareadymix.com/2019/08/jasa-pondasi-tapak-karawang.html": "Jasa Pondasi Tapak Karawang",
  "https://www.betonjayareadymix.com/2019/08/jasa-pondasi-tapak-cianjur.html": "Jasa Pondasi Tapak Cianjur",
  "https://www.betonjayareadymix.com/2019/08/jasa-pondasi-tapak-bandung.html": "Jasa Pondasi Tapak Bandung",
  "https://www.betonjayareadymix.com/2019/08/jasa-pondasi-tapak-terdekat.html": "Jasa Pondasi Tapak Terdekat"
};

const urlMappingJasaPondasiTiangPancangFromMoneyPageMoneyChild = {
  // ✅ FIX: Hapus "Harga" dari label (URL-nya "jasa-...", bukan "harga-...")
  "https://www.betonjayareadymix.com/2019/08/jasa-pondasi-tiang-pancang-terdekat.html": "Jasa Pondasi Tiang Pancang Terdekat",
  "https://www.betonjayareadymix.com/2019/08/jasa-pondasi-tiang-pancang-karawang.html": "Jasa Pondasi Tiang Pancang Karawang",
  "https://www.betonjayareadymix.com/2019/08/jasa-pondasi-tiang-pancang-bekasi.html": "Jasa Pondasi Tiang Pancang Bekasi",
  "https://www.betonjayareadymix.com/2019/08/jasa-pondasi-tiang-pancang-tangerang.html": "Jasa Pondasi Tiang Pancang Tangerang",
  "https://www.betonjayareadymix.com/2019/08/jasa-pondasi-tiang-pancang-depok.html": "Jasa Pondasi Tiang Pancang Depok",
  "https://www.betonjayareadymix.com/2019/08/jasa-pondasi-tiang-pancang-bogor.html": "Jasa Pondasi Tiang Pancang Bogor",
  "https://www.betonjayareadymix.com/2019/08/jasa-pondasi-tiang-pancang-jakarta.html": "Jasa Pondasi Tiang Pancang Jakarta",
  "https://www.betonjayareadymix.com/2019/08/jasa-pondasi-tiang-pancang-surabaya.html": "Jasa Pondasi Tiang Pancang Surabaya"
};

const urlMappingJasaTiangPancangFromMoneyMaster1Variant = {
  "https://www.betonjayareadymix.com/2019/08/spesifikasi-jasa-tiang-pancang.html": "Spesifikasi Jasa Tiang Pancang",
  "https://www.betonjayareadymix.com/2019/08/mutu-jasa-tiang-pancang.html": "Mutu Jasa Tiang Pancang",
  "https://www.betonjayareadymix.com/2019/08/metode-jasa-tiang-pancang.html": "Metode Jasa Tiang Pancang"
};

const urlMappingHargaJasaPondasiTiangPancangFromMoneyPageMoneyPage1 = {
  "https://www.betonjayareadymix.com/2019/08/harga-jasa-pondasi-tiang-pancang-murah.html": "Harga Jasa Pondasi Tiang Pancang Murah",
  "https://www.betonjayareadymix.com/2019/08/harga-jasa-pancang-drop-hammer.html": "Harga Jasa Pancang Drop Hammer",
  "https://www.betonjayareadymix.com/2019/08/harga-jasa-pancang-spun-pile.html": "Harga Jasa Pancang Spun Pile",
  "https://www.betonjayareadymix.com/2019/08/harga-jasa-pancang-mini-pile.html": "Harga Jasa Pancang Mini Pile",
  "https://www.betonjayareadymix.com/2019/08/harga-jasa-pemasangan-mini-pile.html": "Harga Jasa Pemasangan Mini Pile",
  "https://www.betonjayareadymix.com/2019/08/harga-jasa-pancang-hidrolik.html": "Harga Jasa Pancang Hidrolik",
  "https://www.betonjayareadymix.com/2019/08/harga-jasa-pemasangan-tiang-pancang.html": "Harga Jasa Pemasangan Tiang Pancang"
};

const urlMappingHargaJasaPondasiTiangPancangFromMoneyPageMoneyChild = {
  "https://www.betonjayareadymix.com/2019/08/harga-jasa-pondasi-tiang-pancang-terdekat.html": "Harga Jasa Pondasi Tiang Pancang Terdekat",
  "https://www.betonjayareadymix.com/2019/08/harga-jasa-pondasi-tiang-pancang-karawang.html": "Harga Jasa Pondasi Tiang Pancang Karawang",
  "https://www.betonjayareadymix.com/2019/08/harga-jasa-pondasi-tiang-pancang-bekasi.html": "Harga Jasa Pondasi Tiang Pancang Bekasi",
  "https://www.betonjayareadymix.com/2019/08/harga-jasa-pondasi-tiang-pancang-tangerang.html": "Harga Jasa Pondasi Tiang Pancang Tangerang",
  "https://www.betonjayareadymix.com/2019/08/harga-jasa-pondasi-tiang-pancang-depok.html": "Harga Jasa Pondasi Tiang Pancang Depok",
  "https://www.betonjayareadymix.com/2019/08/harga-jasa-pondasi-tiang-pancang-bogor.html": "Harga Jasa Pondasi Tiang Pancang Bogor",
  "https://www.betonjayareadymix.com/2019/08/harga-jasa-pondasi-tiang-pancang-jakarta.html": "Harga Jasa Pondasi Tiang Pancang Jakarta",
  "https://www.betonjayareadymix.com/2019/08/harga-jasa-pondasi-tiang-pancang-surabaya.html": "Harga Jasa Pondasi Tiang Pancang Surabaya"
};

const urlMappingJasaPondasiSumuranFromMoneyMaster1MoneyChild = {
  "https://www.betonjayareadymix.com/2019/08/jasa-pondasi-sumuran-jakarta.html": "Jasa Pondasi Sumuran Jakarta",
  "https://www.betonjayareadymix.com/2019/08/jasa-pondasi-sumuran-bogor.html": "Jasa Pondasi Sumuran Bogor",
  "https://www.betonjayareadymix.com/2019/08/jasa-pondasi-sumuran-depok.html": "Jasa Pondasi Sumuran Depok",
  "https://www.betonjayareadymix.com/2019/08/jasa-pondasi-sumuran-tangerang.html": "Jasa Pondasi Sumuran Tangerang",
  "https://www.betonjayareadymix.com/2019/08/jasa-pondasi-sumuran-bekasi.html": "Jasa Pondasi Sumuran Bekasi",
  "https://www.betonjayareadymix.com/2019/08/jasa-pondasi-sumuran-karawang.html": "Jasa Pondasi Sumuran Karawang",
  "https://www.betonjayareadymix.com/2019/08/jasa-pondasi-sumuran-bandung.html": "Jasa Pondasi Sumuran Bandung",
  "https://www.betonjayareadymix.com/2019/08/jasa-pondasi-sumuran-terdekat.html": "Jasa Pondasi Sumuran Terdekat"
};

// ═══════════════════════════════════════════════════════════
// [BAGIAN 2] EARLY EXIT v2.0.0 — PENDEKATAN C
// ═══════════════════════════════════════════════════════════

(function() {
    'use strict';
    
    var cleanUrl = window.location.href.split(/[?#]/)[0];
    console.log('[jasa-pondasi-perkuatan-tanah-post] 🔍 Check URL: ' + cleanUrl);
    
    // Kumpulkan SEMUA mapping ke array
    var ALL_MAPPINGS = [
        urlMappingJasaBoronganPondasiFromMoneyPageMoneyChild,
        urlMappingJasaPondasiCakarAyamFromMoneyPageMoneyChild,
        urlMappingJasaPondasiTapakFromMoneyPageMoneyChild,
        urlMappingJasaTiangPancangFromMoneyMaster1Variant,
        urlMappingHargaJasaPondasiTiangPancangFromMoneyPageMoneyPage1,
        urlMappingHargaJasaPondasiTiangPancangFromMoneyPageMoneyChild,
        urlMappingJasaPondasiTiangPancangFromMoneyPageMoneyChild,
        urlMappingJasaPondasiSumuranFromMoneyMaster1MoneyChild
    ];
    
    // ✅ PENDEKATAN C: Loop + foundIndex + foundMappingName + break
    var foundIndex = -1;
    var foundMappingName = '';
    
    for (var i = 0; i < ALL_MAPPINGS.length; i++) {
        if (!ALL_MAPPINGS[i] || typeof ALL_MAPPINGS[i] !== 'object') {
            console.warn('[jasa-pondasi-perkuatan-tanah-post] ⚠️ Mapping #' + (i + 1) + ' bukan object — skip');
            continue;
        }
        if (ALL_MAPPINGS[i][cleanUrl]) {
            foundIndex = i;
            foundMappingName = ALL_MAPPINGS[i][cleanUrl];
            break;
        }
    }
    
    if (foundIndex === -1) {
        console.log('[jasa-pondasi-perkuatan-tanah-post] ⏭️ SKIP — URL tidak cocok di semua cluster');
        window.__jasaPondasiPerkuatanTanahPostActive = false;
        return;
    }
    
    // ✅ Cocok — set flag + simpan info untuk debug
    window.__jasaPondasiPerkuatanTanahPostActive = true;
    window.__jasaPondasiPerkuatanTanahPostMatchIndex = foundIndex;
    window.__jasaPondasiPerkuatanTanahPostMatchMappingName = foundMappingName;
    window.__jasaPondasiPerkuatanTanahPostMappings = ALL_MAPPINGS;
    
    console.log(
        '[jasa-pondasi-perkuatan-tanah-post] ✅ Match di mapping #' + (foundIndex + 1) +
        ' — Label: "' + foundMappingName + '"' +
        ' — EXECUTE flag set'
    );
})();

// ═══════════════════════════════════════════════════════════
// [BAGIAN 3] FUNGSI UTAMA
// ═══════════════════════════════════════════════════════════

function initJasaPondasiPerkuatanTanah() {
    // ⚡ Guard flag
    if (!window.__jasaPondasiPerkuatanTanahPostActive) {
        console.log('[jasa-pondasi-perkuatan-tanah-post] ⏭️ Execute SKIP — URL tidak cocok');
        return;
    }
    
    console.log('[jasa-pondasi-perkuatan-tanah-post] 🚀 Execute — URL cocok');
    
    var cleanUrlJasaPondasiPerkuatanTanahKonsPost = window.location.href.split(/[?#]/)[0];
    
    // ✅ Guard elemen DOM
    var JasaKonsPondasiTanahPost = document.getElementById("JasaKonsPondasiTanahPost");
    if (!JasaKonsPondasiTanahPost) {
        console.error("[jasa-pondasi-perkuatan-tanah-post] ❌ elemen Id JasaKonsPondasiTanahPost kondisi terhapus");
        return;
    }
    
    // ═══════════════════════════════════════════════════════
    // [BLOK 1] JASA BORONGAN PONDASI
    // ═══════════════════════════════════════════════════════
    
    if (urlMappingJasaBoronganPondasiFromMoneyPageMoneyChild[cleanUrlJasaPondasiPerkuatanTanahKonsPost]) {
        generateBreadcrumbShared(
            urlMappingJasaBoronganPondasiFromMoneyPageMoneyChild,
            cleanUrlJasaPondasiPerkuatanTanahKonsPost,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Pondasi & Perkuatan Tanah', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-pondasi-perkuatan-tanah.html' },
                { name: 'Perbandingan Jasa Pondasi & Perkuatan Tanah', url: 'https://www.betonjayareadymix.com/p/perbandingan-pondasi-perkuatan-tanah.html' },
                { name: 'Jasa Borongan Pondasi', url: 'https://www.betonjayareadymix.com/p/jasa-borongan-pondasi.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }
    
    // ═══════════════════════════════════════════════════════
    // [BLOK 2] JASA PONDASI CAKAR AYAM
    // ═══════════════════════════════════════════════════════
    
    if (urlMappingJasaPondasiCakarAyamFromMoneyPageMoneyChild[cleanUrlJasaPondasiPerkuatanTanahKonsPost]) {
        generateBreadcrumbShared(
            urlMappingJasaPondasiCakarAyamFromMoneyPageMoneyChild,
            cleanUrlJasaPondasiPerkuatanTanahKonsPost,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Pondasi & Perkuatan Tanah', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-pondasi-perkuatan-tanah.html' },
                { name: 'Perbandingan Jasa Pondasi & Perkuatan Tanah', url: 'https://www.betonjayareadymix.com/p/perbandingan-pondasi-perkuatan-tanah.html' },
                { name: 'Jasa Pondasi Cakar Ayam', url: 'https://www.betonjayareadymix.com/p/jasa-pondasi-cakar-ayam.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }
    
    // ═══════════════════════════════════════════════════════
    // [BLOK 3] JASA PONDASI TAPAK
    // ═══════════════════════════════════════════════════════
    
    if (urlMappingJasaPondasiTapakFromMoneyPageMoneyChild[cleanUrlJasaPondasiPerkuatanTanahKonsPost]) {
        generateBreadcrumbShared(
            urlMappingJasaPondasiTapakFromMoneyPageMoneyChild,
            cleanUrlJasaPondasiPerkuatanTanahKonsPost,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Pondasi & Perkuatan Tanah', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-pondasi-perkuatan-tanah.html' },
                { name: 'Perbandingan Jasa Pondasi & Perkuatan Tanah', url: 'https://www.betonjayareadymix.com/p/perbandingan-pondasi-perkuatan-tanah.html' },
                { name: 'Jasa Pondasi Tapak', url: 'https://www.betonjayareadymix.com/p/jasa-pondasi-tapak.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }
    
    // ═══════════════════════════════════════════════════════
    // [BLOK 4] JASA TIANG PANCANG (Variant)
    // ═══════════════════════════════════════════════════════
    
    if (urlMappingJasaTiangPancangFromMoneyMaster1Variant[cleanUrlJasaPondasiPerkuatanTanahKonsPost]) {
        generateBreadcrumbShared(
            urlMappingJasaTiangPancangFromMoneyMaster1Variant,
            cleanUrlJasaPondasiPerkuatanTanahKonsPost,
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
    // [BLOK 5] HARGA JASA PONDASI TIANG PANCANG (Money Page)
    // ═══════════════════════════════════════════════════════
    
    if (urlMappingHargaJasaPondasiTiangPancangFromMoneyPageMoneyPage1[cleanUrlJasaPondasiPerkuatanTanahKonsPost]) {
        generateBreadcrumbShared(
            urlMappingHargaJasaPondasiTiangPancangFromMoneyPageMoneyPage1,
            cleanUrlJasaPondasiPerkuatanTanahKonsPost,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Pondasi', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-pondasi.html' },
                { name: 'Perbandingan Jasa Pondasi', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-pondasi.html' },
                { name: 'Jasa Pondasi', url: 'https://www.betonjayareadymix.com/p/jasa-pondasi.html' },
                { name: 'Jasa Tiang Pancang', url: 'https://www.betonjayareadymix.com/p/jasa-tiang-pancang.html' },
                { name: 'Harga Jasa Pondasi Tiang Pancang', url: 'https://www.betonjayareadymix.com/p/harga-jasa-pondasi-tiang-pancang.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }
    
    // ═══════════════════════════════════════════════════════
    // [BLOK 6] HARGA JASA PONDASI TIANG PANCANG (Money Child)
    // ═══════════════════════════════════════════════════════
    
    if (urlMappingHargaJasaPondasiTiangPancangFromMoneyPageMoneyChild[cleanUrlJasaPondasiPerkuatanTanahKonsPost]) {
        generateBreadcrumbShared(
            urlMappingHargaJasaPondasiTiangPancangFromMoneyPageMoneyChild,
            cleanUrlJasaPondasiPerkuatanTanahKonsPost,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Pondasi', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-pondasi.html' },
                { name: 'Perbandingan Jasa Pondasi', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-pondasi.html' },
                { name: 'Jasa Pondasi', url: 'https://www.betonjayareadymix.com/p/jasa-pondasi.html' },
                { name: 'Jasa Tiang Pancang', url: 'https://www.betonjayareadymix.com/p/jasa-tiang-pancang.html' },
                { name: 'Harga Jasa Pondasi Tiang Pancang', url: 'https://www.betonjayareadymix.com/p/harga-jasa-pondasi-tiang-pancang.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }
    
    // ═══════════════════════════════════════════════════════
    // [BLOK 7] JASA PONDASI TIANG PANCANG (Money Child)
    // ═══════════════════════════════════════════════════════
    
    if (urlMappingJasaPondasiTiangPancangFromMoneyPageMoneyChild[cleanUrlJasaPondasiPerkuatanTanahKonsPost]) {
        generateBreadcrumbShared(
            urlMappingJasaPondasiTiangPancangFromMoneyPageMoneyChild,
            cleanUrlJasaPondasiPerkuatanTanahKonsPost,
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
    // [BLOK 8] JASA PONDASI SUMURAN
    // ═══════════════════════════════════════════════════════
    
    if (urlMappingJasaPondasiSumuranFromMoneyMaster1MoneyChild[cleanUrlJasaPondasiPerkuatanTanahKonsPost]) {
        generateBreadcrumbShared(
            urlMappingJasaPondasiSumuranFromMoneyMaster1MoneyChild,
            cleanUrlJasaPondasiPerkuatanTanahKonsPost,
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
    
    console.log('[jasa-pondasi-perkuatan-tanah-post] ✅ Semua breadcrumb selesai diproses');
}

// ═══════════════════════════════════════════════════════════
// [BAGIAN 4] FIX v2.1.0 — Handle DOMContentLoaded race condition
// ═══════════════════════════════════════════════════════════

if (document.readyState === 'loading') {
    console.log('[jasa-pondasi-perkuatan-tanah-post] ⏳ DOM loading, tunggu event');
    document.addEventListener('DOMContentLoaded', initJasaPondasiPerkuatanTanah);
} else {
    console.log('[jasa-pondasi-perkuatan-tanah-post] ⚡ DOM ready, langsung execute');
    initJasaPondasiPerkuatanTanah();
}

// ============================================================
// AKHIR FILE — TIDAK ADA KARAKTER TAMBAHAN
// ============================================================
