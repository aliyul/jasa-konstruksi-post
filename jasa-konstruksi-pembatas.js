// ============================================================
// [SUB MAPPING] jasa-pembatas-pengaman.js — v2.2.0
// Pattern: Early Exit v2.0.0 + Fix v2.1.0 + Pendekatan C (NO MERGED_MAP)
// Container: #JasaKonsPembatas
// ============================================================

console.log('[jasa-pembatas-pengaman] 📄 File loaded, waiting for DOM...');

// ═══════════════════════════════════════════════════════════
// [BAGIAN 1] DEFINISI SEMUA MAPPING
// ═══════════════════════════════════════════════════════════

// --- SUB1: Pengamanan Area Proyek ---
const urlMappingJasaPengamananAreaProyekFromMoneyPageMoneyPage1 = {
  "https://www.betonjayareadymix.com/p/jasa-pemasangan-safety-net-proyek.html": "Jasa Pemasangan Safety Net Proyek",
  "https://www.betonjayareadymix.com/p/jasa-pemasangan-scaffolding-guard.html": "Jasa Pemasangan Scaffolding Guard",
  "https://www.betonjayareadymix.com/p/jasa-pagar-sementara-proyek.html": "Jasa Pagar Sementara Proyek",
  "https://www.betonjayareadymix.com/p/jasa-sistem-keamanan-perimeter-proyek.html": "Jasa Sistem Keamanan Perimeter Proyek"
};

// --- SUB1: Rambu & Sistem Keamanan Visual ---
const urlMappingJasaRambudanSistemKeamananVisualFromMoneyPageMoneyPage1 = {
  "https://www.betonjayareadymix.com/p/jasa-pemasangan-rambu-lalu-lintas.html": "Jasa Pemasangan Rambu Lalu Lintas",
  "https://www.betonjayareadymix.com/p/jasa-pemasangan-cermin-tikungan.html": "Jasa Pemasangan Cermin Tikungan",
  "https://www.betonjayareadymix.com/p/jasa-pemasangan-cat-marka-jalan.html": "Jasa Pemasangan Cat Marka Jalan",
  "https://www.betonjayareadymix.com/p/jasa-pemasangan-warning-light.html": "Jasa Pemasangan Warning Light"
};

// --- SUB1: Pengamanan Sisi Jalan ---
const urlMappingJasaPengamananSisiJalanInfrastrukturFromMoneyPageMoneyPage1 = {
  "https://www.betonjayareadymix.com/p/jasa-pemasangan-guardrail-besi.html": "Jasa Pemasangan Guardrail Besi",
  "https://www.betonjayareadymix.com/p/jasa-pemasangan-railing-jalan.html": "Jasa Pemasangan Railing Jalan",
  "https://www.betonjayareadymix.com/p/jasa-bollard-tiang-pengaman-jalan.html": "Jasa Bollard & Tiang Pengaman Jalan",
  "https://www.betonjayareadymix.com/p/jasa-pagar-pembatas-flyover-jembatan.html": "Jasa Pagar Pembatas Flyover & Jembatan",
  "https://www.betonjayareadymix.com/p/jasa-pemasangan-kanstin-jalan.html": "Jasa Pemasangan Kanstin Jalan"
};

// --- MONEY_MASTER: Jasa Pembuatan Pagar (Level 4) ---
const urlMappingJasaPembuatanPagarFromMoneyMaster1MoneyPage = {
  // "https://www.betonjayareadymix.com/p/jasa-pembuatan-pagar.html": "Jasa Pembuatan Pagar",  // MM (2 kata)
  "https://www.betonjayareadymix.com/p/jasa-pembuatan-pagar-brc.html": "Jasa Pembuatan Pagar BRC",
  "https://www.betonjayareadymix.com/p/jasa-pembuatan-pagar-besi-hollow.html": "Jasa Pembuatan Pagar Besi Hollow",
  "https://www.betonjayareadymix.com/p/jasa-pembuatan-pagar-plat-laser.html": "Jasa Pembuatan Pagar Plat Laser",
  "https://www.betonjayareadymix.com/p/jasa-pembuatan-pagar-rumah.html": "Jasa Pembuatan Pagar Rumah",
  "https://www.betonjayareadymix.com/p/jasa-pembuatan-pagar-custom.html": "Jasa Pembuatan Pagar Custom",
  "https://www.betonjayareadymix.com/p/jasa-pembuatan-pagar-minimalis.html": "Jasa Pembuatan Pagar Minimalis",
  "https://www.betonjayareadymix.com/p/jasa-pembuatan-pagar-industrial.html": "Jasa Pembuatan Pagar Industrial",
  "https://www.betonjayareadymix.com/p/jasa-pembuatan-pagar-stainless.html": "Jasa Pembuatan Pagar Stainless",
  "https://www.betonjayareadymix.com/p/jasa-pembuatan-pagar-galvanis.html": "Jasa Pembuatan Pagar Galvanis",
  "https://www.betonjayareadymix.com/p/jasa-pembuatan-pagar-aluminium.html": "Jasa Pembuatan Pagar Aluminium"
};

// --- MONEY_MASTER: Jasa Pasang Pagar — FOKUS INFORMASI (Level 4) ---
const urlMappingPasangPagarFromMoneyMaster1MoneyPage = {
  // "https://www.betonjayareadymix.com/p/jasa-pasang-pagar.html": "Jasa Pasang Pagar",  // MM (2 kata)
  "https://www.betonjayareadymix.com/p/jasa-pasang-dinding-pembatas-bata.html": "Jasa Pasang Dinding Pembatas Bata",
  "https://www.betonjayareadymix.com/p/jasa-pasang-pagar-panel-beton.html": "Jasa Pasang Pagar Panel Beton",
  "https://www.betonjayareadymix.com/p/jasa-pasang-pagar-brc.html": "Jasa Pasang Pagar BRC",
  "https://www.betonjayareadymix.com/p/jasa-pasang-pagar-besi-hollow.html": "Jasa Pasang Pagar Besi Hollow",
  "https://www.betonjayareadymix.com/p/jasa-pasang-pagar-kawat-harmonika.html": "Jasa Pasang Pagar Kawat Harmonika",
  "https://www.betonjayareadymix.com/p/jasa-pasang-pagar-beton-precast.html": "Jasa Pasang Pagar Beton Precast",
  "https://www.betonjayareadymix.com/p/jasa-pasang-pagar-plat-laser.html": "Jasa Pasang Pagar Plat Laser",
  "https://www.betonjayareadymix.com/p/jasa-pasang-pagar-rumah.html": "Jasa Pasang Pagar Rumah",
  "https://www.betonjayareadymix.com/p/jasa-pasang-pagar-bangunan.html": "Jasa Pasang Pagar Bangunan"
};

// --- MONEY_MASTER: Harga Pasang Pagar — FOKUS HARGA ---
const urlMappingHargaPasangPagarFromMoneyMaster1MoneyPage = {
  "https://www.betonjayareadymix.com/p/harga-jasa-pasang-dinding-pembatas-bata.html": "Harga Jasa Pasang Dinding Pembatas Bata",
  "https://www.betonjayareadymix.com/p/harga-jasa-pasang-pagar-panel-beton.html": "Harga Jasa Pasang Pagar Panel Beton",
  "https://www.betonjayareadymix.com/p/harga-jasa-pasang-pagar-brc.html": "Harga Jasa Pasang Pagar BRC",
  "https://www.betonjayareadymix.com/p/harga-jasa-pasang-pagar-besi-hollow.html": "Harga Jasa Pasang Pagar Besi Hollow",
  "https://www.betonjayareadymix.com/p/harga-jasa-pasang-pagar-kawat-harmonika.html": "Harga Jasa Pasang Pagar Kawat Harmonika",
  "https://www.betonjayareadymix.com/p/harga-jasa-pasang-pagar-beton-precast.html": "Harga Jasa Pasang Pagar Beton Precast",
  "https://www.betonjayareadymix.com/p/harga-jasa-pasang-pagar-plat-laser.html": "Harga Jasa Pasang Pagar Plat Laser",
  "https://www.betonjayareadymix.com/p/harga-jasa-pasang-pagar-rumah.html": "Harga Jasa Pasang Pagar Rumah",
  "https://www.betonjayareadymix.com/p/harga-jasa-pasang-pagar-bangunan.html": "Harga Jasa Pasang Pagar Bangunan"
};

// --- MoneyPage → MoneyPage (BRC Panel) ---
const urlMappingJasaPasangPagarBRCFromMoneyPageMoneyPage1 = {
  "https://www.betonjayareadymix.com/p/jasa-pasang-pagar-brc-panel.html": "Jasa Pasang Pagar BRC Panel"
};

// ═══════════════════════════════════════════════════════════
// [BAGIAN 2] FUNGSI HELPER
// ═══════════════════════════════════════════════════════════

var removedElementsJasaPembatasKons = {};

function removeCondition(conditionId) {
    // Guard: jangan hapus container utama
    if (conditionId === 'JasaKonsPembatas') {
        console.warn('[jasa-pembatas-pengaman] ⚠️ Tidak boleh menghapus container utama: ' + conditionId);
        return;
    }

    var conditionElement = document.getElementById(conditionId);
    if (conditionElement) {
        removedElementsJasaPembatasKons[conditionId] = conditionElement;
        conditionElement.remove();
        console.log('[jasa-pembatas-pengaman] 🔧 Removed: ' + conditionId);
    }
}

function restoreCondition(conditionId) {
    var elementToRestore = removedElementsJasaPembatasKons[conditionId];

    if (elementToRestore) {
        var container = document.getElementById('JasaKonsPembatas');
        if (container) {
            container.appendChild(elementToRestore);
            delete removedElementsJasaPembatasKons[conditionId];
            console.log('[jasa-pembatas-pengaman] 🔧 Restored: ' + conditionId);
        } else {
            console.error('[jasa-pembatas-pengaman] ❌ Container #JasaKonsPembatas not found for restore: ' + conditionId);
        }
    } else {
        console.warn('[jasa-pembatas-pengaman] ⚠️ Element ' + conditionId + ' not found in removedElements');
    }
}

// ═══════════════════════════════════════════════════════════
// [BAGIAN 3] EARLY EXIT v2.0.0 — PENDEKATAN C (TANPA MERGED_MAP)
// ═══════════════════════════════════════════════════════════

(function() {
    'use strict';

    var cleanUrl = window.location.href.split(/[?#]/)[0];
    console.log('[jasa-pembatas-pengaman] 🔍 Check: ' + cleanUrl);

    // Kumpulkan SEMUA mapping ke array (urutan = prioritas match)
    var ALL_MAPPINGS = [
        urlMappingJasaPengamananAreaProyekFromMoneyPageMoneyPage1,
        urlMappingJasaRambudanSistemKeamananVisualFromMoneyPageMoneyPage1,
        urlMappingJasaPengamananSisiJalanInfrastrukturFromMoneyPageMoneyPage1,
        urlMappingJasaPembuatanPagarFromMoneyMaster1MoneyPage,
        urlMappingPasangPagarFromMoneyMaster1MoneyPage,
        urlMappingHargaPasangPagarFromMoneyMaster1MoneyPage,
        urlMappingJasaPasangPagarBRCFromMoneyPageMoneyPage1
    ];

    // Nama mapping untuk log detail (paralel dengan ALL_MAPPINGS)
    var MAPPING_NAMES = [
        'urlMappingJasaPengamananAreaProyekFromMoneyPageMoneyPage1',
        'urlMappingJasaRambudanSistemKeamananVisualFromMoneyPageMoneyPage1',
        'urlMappingJasaPengamananSisiJalanInfrastrukturFromMoneyPageMoneyPage1',
        'urlMappingJasaPembuatanPagarFromMoneyMaster1MoneyPage',
        'urlMappingPasangPagarFromMoneyMaster1MoneyPage',
        'urlMappingHargaPasangPagarFromMoneyMaster1MoneyPage',
        'urlMappingJasaPasangPagarBRCFromMoneyPageMoneyPage1'
    ];

    // ✅ PENDEKATAN C: Loop + foundIndex + break
    var foundIndex = -1;
    var foundMappingName = '';

    for (var i = 0; i < ALL_MAPPINGS.length; i++) {
        if (!ALL_MAPPINGS[i] || typeof ALL_MAPPINGS[i] !== 'object') {
            console.warn('[jasa-pembatas-pengaman] ⚠️ Mapping #' + (i + 1) + ' bukan object — skip');
            continue;
        }

        if (ALL_MAPPINGS[i][cleanUrl]) {
            foundIndex = i;
            foundMappingName = ALL_MAPPINGS[i][cleanUrl];
            break;  // ⚡ SHORT-CIRCUIT
        }
    }

    // Cek hasil
    if (foundIndex === -1) {
        console.log('[jasa-pembatas-pengaman] ⏭️ SKIP — URL tidak cocok');
        window.__jasaPembatasActive = false;
        return;
    }

    // ✅ Match! Set flag + simpan info
    window.__jasaPembatasActive = true;
    window.__jasaPembatasMatchIndex = foundIndex;
    window.__jasaPembatasMatchMapping = MAPPING_NAMES[foundIndex];
    window.__jasaPembatasMatchLabel = foundMappingName;
    window.__jasaPembatasMappings = ALL_MAPPINGS;

    console.log(
        '[jasa-pembatas-pengaman] ✅ Match di mapping #' + (foundIndex + 1) +
        ' — ' + MAPPING_NAMES[foundIndex] +
        ' — Label: "' + foundMappingName + '"' +
        ' — EXECUTE flag set'
    );
})();

// ═══════════════════════════════════════════════════════════
// [BAGIAN 4] FUNGSI UTAMA — Semua logic breadcrumb
// ═══════════════════════════════════════════════════════════

function initJasaPembatasPengaman() {
    // ⚡ Guard: skip kalau flag tidak aktif
    if (!window.__jasaPembatasActive) {
        console.log('[jasa-pembatas-pengaman] ⏭️ Execute SKIP — URL tidak cocok');
        return;
    }

    console.log('[jasa-pembatas-pengaman] 🚀 Execute — URL cocok');

    var cleanUrlJasaPembatasKons = window.location.href.split(/[?#]/)[0];

    // ✅ Guard elemen DOM
    var JasaKonsPembatas = document.getElementById("JasaKonsPembatas");
    if (!JasaKonsPembatas) {
        console.error('[jasa-pembatas-pengaman] ❌ elemen Id JasaKonsPembatas kondisi terhapus');
        return;
    }

    // ═══════════════════════════════════════════════════════
    // MONEY_MASTER: Jasa Pembuatan Pagar
    // ═══════════════════════════════════════════════════════
    if (urlMappingJasaPembuatanPagarFromMoneyMaster1MoneyPage[cleanUrlJasaPembatasKons]) {
        generateBreadcrumbShared(
            urlMappingJasaPembuatanPagarFromMoneyMaster1MoneyPage,
            cleanUrlJasaPembatasKons,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Pembuatan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-pembuatan.html' },
                { name: 'Perbandingan Jasa Pembuatan', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-pembuatan.html' },
                { name: 'Jasa Pembuatan', url: 'https://www.betonjayareadymix.com/p/jasa-pembuatan.html' },
                { name: 'Jasa Pembuatan Pagar', url: 'https://www.betonjayareadymix.com/p/jasa-pembuatan-pagar.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }

    // ═══════════════════════════════════════════════════════
    // MONEY_MASTER: Jasa Pasang Pagar (Fokus Informasi)
    // ═══════════════════════════════════════════════════════
    if (urlMappingPasangPagarFromMoneyMaster1MoneyPage[cleanUrlJasaPembatasKons]) {
        generateBreadcrumbShared(
            urlMappingPasangPagarFromMoneyMaster1MoneyPage,
            cleanUrlJasaPembatasKons,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Pasang', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-pasang.html' },
                { name: 'Perbandingan Jasa Pasang', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-pasang.html' },
                { name: 'Jasa Pasang Pagar', url: 'https://www.betonjayareadymix.com/p/jasa-pasang-pagar.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }

    // ═══════════════════════════════════════════════════════
    // MONEY_MASTER: Harga Pasang Pagar (Fokus Harga)
    // ═══════════════════════════════════════════════════════
    if (urlMappingHargaPasangPagarFromMoneyMaster1MoneyPage[cleanUrlJasaPembatasKons]) {
        generateBreadcrumbShared(
            urlMappingHargaPasangPagarFromMoneyMaster1MoneyPage,
            cleanUrlJasaPembatasKons,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Pasang', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-pasang.html' },
                { name: 'Perbandingan Jasa Pasang', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-pasang.html' },
                { name: 'Harga Jasa Pasang Pagar', url: 'https://www.betonjayareadymix.com/p/harga-jasa-pasang-pagar.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }

    // ═══════════════════════════════════════════════════════
    // MoneyPage → MoneyPage: Jasa Pasang Pagar BRC Panel
    // ═══════════════════════════════════════════════════════
    if (urlMappingJasaPasangPagarBRCFromMoneyPageMoneyPage1[cleanUrlJasaPembatasKons]) {
        generateBreadcrumbShared(
            urlMappingJasaPasangPagarBRCFromMoneyPageMoneyPage1,
            cleanUrlJasaPembatasKons,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Pasang', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-pasang.html' },
                { name: 'Perbandingan Jasa Pasang', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-pasang.html' },
                { name: 'Jasa Pasang Pagar', url: 'https://www.betonjayareadymix.com/p/jasa-pasang-pagar.html' },
                { name: 'Jasa Pasang Pagar BRC', url: 'https://www.betonjayareadymix.com/p/jasa-pasang-pagar-brc.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }

    // ═══════════════════════════════════════════════════════
    // SUB1: Pengamanan Sisi Jalan Infrastruktur
    // ═══════════════════════════════════════════════════════
    if (urlMappingJasaPengamananSisiJalanInfrastrukturFromMoneyPageMoneyPage1[cleanUrlJasaPembatasKons]) {
        generateBreadcrumbShared(
            urlMappingJasaPengamananSisiJalanInfrastrukturFromMoneyPageMoneyPage1,
            cleanUrlJasaPembatasKons,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Pembatas Pengaman', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-pembatas-pengaman.html' },
                { name: 'Perbandingan Jasa Pembatas Pengaman', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-pembatas-pengaman.html' },
                { name: 'Jasa Pembatas Pengaman', url: 'https://www.betonjayareadymix.com/p/jasa-pembatas-pengaman.html' },
                { name: 'Jasa Pengaman Sisi Jalan Infrastruktur', url: 'https://www.betonjayareadymix.com/p/jasa-pengaman-sisi-jalan-infrastruktur.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }

    // ═══════════════════════════════════════════════════════
    // SUB1: Rambu & Sistem Keamanan Visual
    // ═══════════════════════════════════════════════════════
    if (urlMappingJasaRambudanSistemKeamananVisualFromMoneyPageMoneyPage1[cleanUrlJasaPembatasKons]) {
        generateBreadcrumbShared(
            urlMappingJasaRambudanSistemKeamananVisualFromMoneyPageMoneyPage1,
            cleanUrlJasaPembatasKons,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Pembatas Pengaman', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-pembatas-pengaman.html' },
                { name: 'Perbandingan Jasa Pembatas Pengaman', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-pembatas-pengaman.html' },
                { name: 'Jasa Pembatas Pengaman', url: 'https://www.betonjayareadymix.com/p/jasa-pembatas-pengaman.html' },
                { name: 'Jasa Rambu dan Sistem Keamanan Visual', url: 'https://www.betonjayareadymix.com/p/jasa-rambu-dan-sistem-keamanan-visual.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }

    // ═══════════════════════════════════════════════════════
    // SUB1: Pengamanan Area Proyek
    // ═══════════════════════════════════════════════════════
    if (urlMappingJasaPengamananAreaProyekFromMoneyPageMoneyPage1[cleanUrlJasaPembatasKons]) {
        generateBreadcrumbShared(
            urlMappingJasaPengamananAreaProyekFromMoneyPageMoneyPage1,
            cleanUrlJasaPembatasKons,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Pembatas Pengaman', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-pembatas-pengaman.html' },
                { name: 'Perbandingan Jasa Pembatas Pengaman', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-pembatas-pengaman.html' },
                { name: 'Jasa Pembatas Pengaman', url: 'https://www.betonjayareadymix.com/p/jasa-pembatas-pengaman.html' },
                { name: 'Jasa Pengamanan Area Proyek', url: 'https://www.betonjayareadymix.com/p/jasa-pengamanan-area-proyek.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }

    console.log('[jasa-pembatas-pengaman] ✅ Semua breadcrumb selesai diproses');
}

// ═══════════════════════════════════════════════════════════
// [BAGIAN 5] FIX v2.1.0 — Handle DOMContentLoaded race condition
// ═══════════════════════════════════════════════════════════

if (document.readyState === 'loading') {
    console.log('[jasa-pembatas-pengaman] ⏳ DOM loading, tunggu event');
    document.addEventListener('DOMContentLoaded', initJasaPembatasPengaman);
} else {
    console.log('[jasa-pembatas-pengaman] ⚡ DOM ready, langsung execute');
    initJasaPembatasPengaman();
}
