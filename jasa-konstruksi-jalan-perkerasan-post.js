// ============================================================
// JASA JALAN & PERKERASAN - BLOG POST (MONEY PAGE)
// Pattern: Early Exit v2.0.0 + Fix v2.1.0 + Pendekatan C
// ============================================================

console.log('[jasa-jalan-perkerasan-post] 📄 File loaded, waiting for DOM...');


// ═════════════════════════════════════════════════════════════════════
// 📂 PARENT: jasa-pengecoran-jalan-beton (MP) ➔ CHILD: Money Child
// Cluster: Cor Beton Jalan — 13 location pages (Jawa Barat + DKI)
// ═════════════════════════════════════════════════════════════════════
const urlMappingJasaPengecoranJalanBetonFromMoneyPageMoneyChild = {
  "https://www.betonjayareadymix.com/2019/01/harga-cor-beton-jalan-tasikmalaya.html":"Harga Cor Beton Jalan Tasikmalaya",
  "https://www.betonjayareadymix.com/2019/01/harga-cor-beton-jalan-sukabumi.html":"Harga Cor Beton Jalan Sukabumi",
  "https://www.betonjayareadymix.com/2019/01/harga-cor-beton-jalan-kuningan.html": "Harga Cor Beton Jalan Kuningan",
  "https://www.betonjayareadymix.com/2019/01/harga-cor-beton-jalan-karawang.html": "Harga Cor Beton Jalan Karawang",
  "https://www.betonjayareadymix.com/2019/01/harga-cor-beton-jalan-majalengka.html": "Harga Cor Beton Jalan Majalengka",
  "https://www.betonjayareadymix.com/2019/01/harga-cor-beton-jalan-subang.html": "Harga Cor Beton Jalan Subang",
  "https://www.betonjayareadymix.com/2019/01/harga-cor-beton-jalan-ciamis.html": "Harga Cor Beton Jalan Ciamis",
  "https://www.betonjayareadymix.com/2019/01/harga-cor-beton-jalan-jakarta.html": "Harga Cor Beton Jalan Jakarta",
  "https://www.betonjayareadymix.com/2019/01/harga-cor-beton-jalan-bogor.html": "Harga Cor Beton Jalan Bogor",
  "https://www.betonjayareadymix.com/2019/01/harga-cor-beton-jalan-tangerang.html": "Harga Cor Beton Jalan Tangerang",
  "https://www.betonjayareadymix.com/2019/01/harga-cor-beton-jalan-bekasi.html": "Harga Cor Beton Jalan Bekasi",
  "https://www.betonjayareadymix.com/2019/01/harga-cor-beton-jalan-depok.html": "Harga Cor Beton Jalan Depok",
  "https://www.betonjayareadymix.com/2019/01/harga-cor-beton-jalan-cirebon.html": "Harga Cor Beton Jalan Cirebon"
};
// ═════════════════════════════════════════════════════════════════════
// 📂 PARENT: jasa-pengecoran-jalan-beton (MP) ➔ CHILD: Variant
// Target-based (desa, tol, raya) + Specifier (per-meter)
// ═════════════════════════════════════════════════════════════════════
const urlMappingJasaPengecoranJalanBetonFromMoneyPageVariant = {
  "https://www.betonjayareadymix.com/2018/09/borongan-cor-beton-jalan-desa.html":      "Borongan Cor Beton Jalan Desa",
  "https://www.betonjayareadymix.com/2018/09/borongan-cor-beton-jalan-tol.html":       "Borongan Cor Beton Jalan Tol",
  "https://www.betonjayareadymix.com/2018/09/borongan-cor-beton-jalan-raya.html":      "Borongan Cor Beton Jalan Raya",
  "https://www.betonjayareadymix.com/2018/05/harga-cor-beton-jalan-per-meter.html":    "Harga Cor Beton Jalan per Meter"
};
// ═════════════════════════════════════════════════════════════════════
// 📂 PARENT: jasa-pasang-paving (MP) ➔ CHILD: Money Child
// Cluster: Paving — 7 location pages
// ═════════════════════════════════════════════════════════════════════
const urlMappingJasaPasangPavingFromMoneyPageMoneyChild = {
  "https://www.betonjayareadymix.com/2018/09/harga-jasa-pasang-paving-jakarta.html":   "Harga Jasa Pasang Paving Jakarta",
  "https://www.betonjayareadymix.com/2018/09/harga-jasa-pasang-paving-bogor.html":     "Harga Jasa Pasang Paving Bogor",
  "https://www.betonjayareadymix.com/2018/09/harga-jasa-pasang-paving-depok.html":     "Harga Jasa Pasang Paving Depok",
  "https://www.betonjayareadymix.com/2018/09/harga-jasa-pasang-paving-tangerang.html": "Harga Jasa Pasang Paving Tangerang",
  "https://www.betonjayareadymix.com/2018/09/harga-jasa-pasang-paving-bekasi.html":    "Harga Jasa Pasang Paving Bekasi",
  "https://www.betonjayareadymix.com/2018/09/harga-jasa-pasang-paving-karawang.html":  "Harga Jasa Pasang Paving Karawang",
  "https://www.betonjayareadymix.com/2018/09/harga-jasa-pasang-paving-surabaya.html":  "Harga Jasa Pasang Paving Surabaya"
};

// ═════════════════════════════════════════════════════════════════════
// 📂 PARENT: jasa-pengaspalan-jalan (MP) ➔ CHILD: Money Child
// Cluster: Pengaspalan — 7 location pages
// ═════════════════════════════════════════════════════════════════════
const urlMappingJasaPengaspalanJalanFromMoneyPageMoneyChild = {
  "https://www.betonjayareadymix.com/2018/10/harga-jasa-pengaspalan-jalan-jakarta.html":   "Harga Jasa Pengaspalan Jalan Jakarta",
  "https://www.betonjayareadymix.com/2018/10/harga-jasa-pengaspalan-jalan-bogor.html":     "Harga Jasa Pengaspalan Jalan Bogor",
  "https://www.betonjayareadymix.com/2018/10/harga-jasa-pengaspalan-jalan-depok.html":     "Harga Jasa Pengaspalan Jalan Depok",
  "https://www.betonjayareadymix.com/2018/10/harga-jasa-pengaspalan-jalan-tangerang.html": "Harga Jasa Pengaspalan Jalan Tangerang",
  "https://www.betonjayareadymix.com/2018/10/harga-jasa-pengaspalan-jalan-bekasi.html":    "Harga Jasa Pengaspalan Jalan Bekasi",
  "https://www.betonjayareadymix.com/2018/10/harga-jasa-pengaspalan-jalan-karawang.html":  "Harga Jasa Pengaspalan Jalan Karawang",
  "https://www.betonjayareadymix.com/2018/10/harga-jasa-pengaspalan-jalan-surabaya.html":  "Harga Jasa Pengaspalan Jalan Surabaya"
};

// Menyimpan elemen yang dihapus dalam variabel
let removedElementsJasaJalanPerkerasanKonsPost = {};
// Fungsi untuk menghapus elemen berdasarkan ID
function removeCondition(conditionId) {
    const conditionElement = document.getElementById(conditionId);

    if (conditionElement) {
        // Menyimpan elemen yang dihapus dalam objek untuk bisa dikembalikan
        removedElementsJasaJalanPerkerasanKonsPost[conditionId] = conditionElement;
        conditionElement.remove(); // Menghapus elemen tersebut
    }
}

// Fungsi untuk mengembalikan elemen yang telah dihapus
function restoreCondition(conditionId) {
    const breadcrumb = document.querySelector('.breadcrumb');
    const elementToRestore = removedElementsJasaJalanPerkerasanKonsPost[conditionId]; // Mendapatkan elemen yang disimpan

    if (elementToRestore) {
        breadcrumb.appendChild(elementToRestore); // Menambahkan elemen kembali ke dalam breadcrumb
        delete removedElementsJasaJalanPerkerasanKonsPost[conditionId]; // Menghapus elemen dari objek setelah dikembalikan
    } else {
        console.log(`Elemen dengan ID ${conditionId} tidak ditemukan di removedElementsJasaJalanPerkerasanKonsPost.`);
    }
}

// ═══════════════════════════════════════════════════════════
// EARLY EXIT v2.0.0 — DI LUAR DOMContentLoaded
// ═══════════════════════════════════════════════════════════
(function() {
    'use strict';
    
    var cleanUrl = window.location.href.split(/[?#]/)[0];
    console.log('[jasa-jalan-perkerasan-post] 🔍 Check: ' + cleanUrl);
    
    var ALL_MAPPINGS = [
        urlMappingJasaPengecoranJalanBetonFromMoneyPageMoneyChild,
        urlMappingJasaPasangPavingFromMoneyPageMoneyChild,
        urlMappingJasaPengaspalanJalanFromMoneyPageMoneyChild,
        urlMappingJasaPengecoranJalanBetonFromMoneyPageVariant
      
    ];
    
    // ✅ PENDEKATAN C: Loop + foundIndex + break
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
    
    console.log(
        '[jasa-jalan-perkerasan-post] ✅ Match di mapping #' + (foundIndex + 1) +
        ' — Label: "' + foundMappingName + '"' +
        ' — EXECUTE flag set'
    );
})();

// ═══════════════════════════════════════════════════════════
// FUNGSI UTAMA — Semua logic breadcrumb
// ═══════════════════════════════════════════════════════════
function initJasaJalanPerkerasanPost() {
    // ⚡ Guard flag
    if (!window.__jasaJalanPerkerasanPostActive) {
        console.log('[jasa-jalan-perkerasan-post] ⏭️ Execute SKIP — URL tidak cocok');
        return;
    }
    
    console.log('[jasa-jalan-perkerasan-post] 🚀 Execute — URL cocok');
    
    var cleanUrlJasaJalanPerkerasanKonsPost = window.location.href.split(/[?#]/)[0];
    
    // ✅ Guard elemen DOM
    var JasaKonsJalanPerkerasanPost = document.getElementById("JasaKonsJalanPerkerasanPost");
    if (!JasaKonsJalanPerkerasanPost) {
        console.error('[jasa-jalan-perkerasan-post] ❌ elemen Id JasaKonsJalanPerkerasanPost kondisi terhapus');
        return;
    }
    
    // ═══════════════════════════════════════════════════════
    // SEMUA IF BREADCRUMB
    // ═══════════════════════════════════════════════════════
    
    if (urlMappingJasaPengecoranJalanBetonFromMoneyPageMoneyChild[cleanUrlJasaJalanPerkerasanKonsPost]) {
        generateBreadcrumbShared(
            urlMappingJasaPengecoranJalanBetonFromMoneyPageMoneyChild,
            cleanUrlJasaJalanPerkerasanKonsPost,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Jalan & Perkerasan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-jalan-perkerasan.html' },
                { name: 'Perbandingan Jasa Jalan & Perkerasan', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-jalan-perkerasan.html' },
                { name: 'Jasa Jalan & Perkerasan', url: 'https://www.betonjayareadymix.com/p/jasa-jalan-perkerasan.html' },
                { name: 'Jasa Pengecoran Jalan Beton', url: 'https://www.betonjayareadymix.com/p/jasa-pengecoran-jalan-beton.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }
    if (urlMappingJasaPengecoranJalanBetonFromMoneyPageVariant[cleanUrlJasaJalanPerkerasanKonsPost]) {
        generateBreadcrumbShared(
            urlMappingJasaPengecoranJalanBetonFromMoneyPageVariant,
            cleanUrlJasaJalanPerkerasanKonsPost,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Jalan & Perkerasan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-jalan-perkerasan.html' },
                { name: 'Perbandingan Jasa Jalan & Perkerasan', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-jalan-perkerasan.html' },
                { name: 'Jasa Jalan & Perkerasan', url: 'https://www.betonjayareadymix.com/p/jasa-jalan-perkerasan.html' },
                { name: 'Jasa Pengecoran Jalan Beton', url: 'https://www.betonjayareadymix.com/p/jasa-pengecoran-jalan-beton.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }
    
    if (urlMappingJasaPasangPavingFromMoneyPageMoneyChild[cleanUrlJasaJalanPerkerasanKonsPost]) {
        generateBreadcrumbShared(
            urlMappingJasaPasangPavingFromMoneyPageMoneyChild,
            cleanUrlJasaJalanPerkerasanKonsPost,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Jalan & Perkerasan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-jalan-perkerasan.html' },
                { name: 'Perbandingan Jasa Jalan & Perkerasan', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-jalan-perkerasan.html' },
                { name: 'Jasa Jalan & Perkerasan', url: 'https://www.betonjayareadymix.com/p/jasa-jalan-perkerasan.html' },
                { name: 'Jasa Pasang Paving', url: 'https://www.betonjayareadymix.com/p/jasa-pasang-paving.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }
    if (urlMappingJasaPengaspalanJalanFromMoneyPageMoneyChild[cleanUrlJasaJalanPerkerasanKonsPost]) {
        generateBreadcrumbShared(
            urlMappingJasaPengaspalanJalanFromMoneyPageMoneyChild,
            cleanUrlJasaJalanPerkerasanKonsPost,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Jalan & Perkerasan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-jalan-perkerasan.html' },
                { name: 'Perbandingan Jasa Jalan & Perkerasan', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-jalan-perkerasan.html' },
                { name: 'Jasa Jalan & Perkerasan', url: 'https://www.betonjayareadymix.com/p/jasa-jalan-perkerasan.html' },
                { name: 'Jasa Pengaspalan Jalan', url: 'https://www.betonjayareadymix.com/p/jasa-pengaspalan-jalan.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }
    

    
    console.log('[jasa-jalan-perkerasan-post] ✅ Semua breadcrumb selesai diproses');
}

// ═══════════════════════════════════════════════════════════
// FIX v2.1.0 — readyState check
// ═══════════════════════════════════════════════════════════
if (document.readyState === 'loading') {
    console.log('[jasa-jalan-perkerasan-post] ⏳ DOM loading, tunggu event');
    document.addEventListener('DOMContentLoaded', initJasaJalanPerkerasanPost);
} else {
    console.log('[jasa-jalan-perkerasan-post] ⚡ DOM ready, langsung execute');
    initJasaJalanPerkerasanPost();
}
