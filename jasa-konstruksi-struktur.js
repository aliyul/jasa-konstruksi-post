// ============================================================
// 🔍 ENTITY TYPE: JASA (Struktur Konstruksi) — PILLAR PAGE
// v2.0.0 — Fix Duplikasi + Early Exit Guard + Slug Fix
// ============================================================

console.log('[jasa-konstruksi-struktur] 📄 File loaded, waiting for DOM...');

// ═══════════════════════════════════════════════════════════
// [BAGIAN 1] DEFINISI SEMUA MAPPING
// ═══════════════════════════════════════════════════════════

// ============================================================
// 📁 JASA KONSTRUKSI BANGUNAN (MONEY_MASTER)
// ============================================================
const urlMappingJasaKonstruksiBangunanFromMoneyMasterMoneyPage = {
    "https://www.betonjayareadymix.com/p/jasa-konstruksi-gedung-dan-hunian.html": "Jasa Konstruksi Gedung dan Hunian",
    "https://www.betonjayareadymix.com/p/jasa-konstruksi-rumah-tinggal.html": "Jasa Konstruksi Rumah Tinggal",
    "https://www.betonjayareadymix.com/p/jasa-konstruksi-ruko-dan-kios.html": "Jasa Konstruksi Ruko dan Kios",
    "https://www.betonjayareadymix.com/p/jasa-konstruksi-villa-modern.html": "Jasa Konstruksi Villa Modern",
    "https://www.betonjayareadymix.com/p/jasa-konstruksi-apartemen-mewah.html": "Jasa Konstruksi Apartemen Mewah",
    "https://www.betonjayareadymix.com/p/jasa-konstruksi-hotel-bintang.html": "Jasa Konstruksi Hotel Bintang",
    "https://www.betonjayareadymix.com/p/jasa-konstruksi-gedung-perkantoran.html": "Jasa Konstruksi Gedung Perkantoran",
    "https://www.betonjayareadymix.com/p/jasa-konstruksi-gedung-sekolah.html": "Jasa Konstruksi Gedung Sekolah",
    "https://www.betonjayareadymix.com/p/jasa-konstruksi-gedung-rs.html": "Jasa Konstruksi Gedung Rumah Sakit",
    "https://www.betonjayareadymix.com/p/jasa-konstruksi-industri-dan-gudang.html": "Jasa Konstruksi Industri dan Gudang",
    "https://www.betonjayareadymix.com/p/jasa-konstruksi-gudang-logistik.html": "Jasa Konstruksi Gudang Logistik",
    "https://www.betonjayareadymix.com/p/jasa-konstruksi-pabrik-industri.html": "Jasa Konstruksi Pabrik Industri",
    "https://www.betonjayareadymix.com/p/jasa-konstruksi-cold-storage-modern.html": "Jasa Konstruksi Cold Storage Modern",
    "https://www.betonjayareadymix.com/p/jasa-konstruksi-bengkel-modern.html": "Jasa Konstruksi Bengkel Modern",
    "https://www.betonjayareadymix.com/p/jasa-konstruksi-workshop-modern.html": "Jasa Konstruksi Workshop Modern"
};

// ============================================================
// 📁 JASA KONSTRUKSI STRUKTUR (MONEY_MASTER)
// ============================================================
const urlMappingJasaKonstruksiStrukturFromMoneyMasterMoneyPage = {
    "https://www.betonjayareadymix.com/p/jasa-struktur-baja-dan-rangka-ringan.html": "Jasa Struktur Baja dan Rangka Ringan",
    "https://www.betonjayareadymix.com/p/jasa-struktur-beton-dan-pengecoran.html": "Jasa Struktur Beton dan Pengecoran",
    "https://www.betonjayareadymix.com/p/jasa-konstruksi-modular-dan-precast.html": "Jasa Konstruksi Modular dan Precast"
};

// ============================================================
// 📁 JASA STRUKTUR BAJA DAN RANGKA RINGAN (MONEY_PAGE)
// ============================================================
const urlMappingJasaStrukturBajaRangkaRinganFromMoneyPageMoneyPage1 = {
    "https://www.betonjayareadymix.com/p/jasa-konstruksi-baja-ringan.html": "Jasa Konstruksi Baja Ringan",
    "https://www.betonjayareadymix.com/p/jasa-rangka-atap-baja-ringan.html": "Jasa Rangka Atap Baja Ringan",
    "https://www.betonjayareadymix.com/p/jasa-konstruksi-baja-konvensional.html": "Jasa Konstruksi Baja Konvensional",
    "https://www.betonjayareadymix.com/p/jasa-kanopi-baja-dan-besi.html": "Jasa Kanopi Baja dan Besi",
    "https://www.betonjayareadymix.com/p/jasa-struktur-baja-gudang.html": "Jasa Struktur Baja Gudang"
};

// ============================================================
// 📁 JASA KONSTRUKSI BAJA RINGAN (MONEY_PAGE)
// ============================================================
const urlMappingJasaKonstruksiBajaRinganFromMoneyPage1MoneyPage2 = {
    "https://www.betonjayareadymix.com/p/jasa-pasang-baja-ringan.html": "Jasa Pasang Baja Ringan"
};

// ============================================================
// 📁 JASA STRUKTUR BETON DAN PENGECORAN (MONEY_PAGE)
// ============================================================
const urlMappingJasaStrukturBetonDanPengecoranFromMoneyPageMoneyPage1 = {
    "https://www.betonjayareadymix.com/p/jasa-rabat-beton.html": "Jasa Rabat Beton",
    "https://www.betonjayareadymix.com/p/jasa-gelar-beton.html": "Jasa Gelar Beton",
    "https://www.betonjayareadymix.com/p/jasa-cor-tiang-beton.html": "Jasa Cor Tiang Beton",
    "https://www.betonjayareadymix.com/p/jasa-cor-ring-balok.html": "Jasa Cor Ring Balok",
    "https://www.betonjayareadymix.com/p/jasa-sloof-beton.html": "Jasa Sloof Beton",
    "https://www.betonjayareadymix.com/p/jasa-cor-beton-ready-mix.html": "Jasa Cor Beton Ready Mix",
    "https://www.betonjayareadymix.com/p/jasa-pengecoran-lantai-dak.html": "Jasa Pengecoran Lantai Dak",
    "https://www.betonjayareadymix.com/p/jasa-pengecoran-lantai-gudang.html": "Jasa Pengecoran Lantai Gudang",
    "https://www.betonjayareadymix.com/p/jasa-bekisting-dan-pembesian.html": "Jasa Bekisting dan Pembesian",
    "https://www.betonjayareadymix.com/p/jasa-pengecoran-kolom-beton.html": "Jasa Pengecoran Kolom Beton"
};

// ============================================================
// 📁 JASA KONSTRUKSI MODULAR DAN PRECAST (MONEY_PAGE)
// ============================================================
const urlMappingJasaKonstruksiModularDanPrecastFromMoneyPageMoneyPage1 = {
    "https://www.betonjayareadymix.com/p/jasa-panel-beton-precast.html": "Jasa Panel Beton Precast",
    "https://www.betonjayareadymix.com/p/jasa-dinding-precast-bangunan.html": "Jasa Dinding Precast Bangunan",
    "https://www.betonjayareadymix.com/p/jasa-tangga-beton-precast.html": "Jasa Tangga Beton Precast",
    "https://www.betonjayareadymix.com/p/jasa-balok-dan-sloof-precast.html": "Jasa Balok dan Sloof Precast",
    "https://www.betonjayareadymix.com/p/jasa-toilet-modular-prefab.html": "Jasa Toilet Modular Prefab",
    "https://www.betonjayareadymix.com/p/jasa-rumah-modular-prefab.html": "Jasa Rumah Modular Prefab"
};

// ============================================================
// 📁 JASA STRUKTUR KHUSUS (MONEY_MASTER)
// ============================================================
const urlMappingJasaStrukturKhususFromMoneyMasterMoneyMaster1 = {
    "https://www.betonjayareadymix.com/p/jasa-kolam-renang.html": "Jasa Kolam Renang",
    "https://www.betonjayareadymix.com/p/jasa-kolam-ikan.html": "Jasa Kolam Ikan",
    "https://www.betonjayareadymix.com/p/jasa-septic-tank.html": "Jasa Septic Tank",
    "https://www.betonjayareadymix.com/p/jasa-tangki-air.html": "Jasa Tangki Air",
    "https://www.betonjayareadymix.com/p/jasa-bak-penampungan.html": "Jasa Bak Penampungan",
    "https://www.betonjayareadymix.com/p/jasa-menara-air.html": "Jasa Menara Air"
};

// ============================================================
// 📁 JASA KOLAM RENANG (MONEY_PAGE)
// ============================================================
const urlMappingJasaKolamRenangFromMoneyMaster1MoneyPage = {
    "https://www.betonjayareadymix.com/p/jasa-pembuatan-kolam-renang.html": "Jasa Pembuatan Kolam Renang",
    "https://www.betonjayareadymix.com/p/jasa-renovasi-kolam-renang.html": "Jasa Renovasi Kolam Renang",
    "https://www.betonjayareadymix.com/p/jasa-perawatan-kolam-renang.html": "Jasa Perawatan Kolam Renang",
    "https://www.betonjayareadymix.com/p/kontraktor-kolam-renang.html": "Kontraktor Kolam Renang"
};

// ============================================================
// 📁 JASA KOLAM IKAN (MONEY_PAGE)
// ============================================================
const urlMappingJasaKolamIkanFromMoneyMaster1MoneyPage = {
    "https://www.betonjayareadymix.com/p/jasa-pembuatan-kolam-ikan-koi.html": "Jasa Pembuatan Kolam Ikan Koi"
};

// ============================================================
// 📁 JASA SEPTIC TANK (MONEY_PAGE)
// ============================================================
const urlMappingJasaSepticTankFromMoneyMaster1MoneyPage = {
    "https://www.betonjayareadymix.com/p/jasa-pembuatan-septic-tank.html": "Jasa Pembuatan Septic Tank",
    "https://www.betonjayareadymix.com/p/jasa-perbaikan-septic-tank.html": "Jasa Perbaikan Septic Tank",
    "https://www.betonjayareadymix.com/p/jasa-sedot-septic-tank.html": "Jasa Sedot Septic Tank"
};

// ============================================================
// 📁 JASA PEMBUATAN SEPTIC TANK (MONEY_PAGE)
// ============================================================
const urlMappingJasaPembuatanSepticTankFromMoneyPageMoneyPage1 = {
    "https://www.betonjayareadymix.com/p/harga-jasa-pembuatan-septic-tank.html": "Harga Jasa Pembuatan Septic Tank",
    "https://www.betonjayareadymix.com/p/jasa-pembuatan-septic-tank-beton.html": "Jasa Pembuatan Septic Tank Beton",
    "https://www.betonjayareadymix.com/p/jasa-pembuatan-septic-tank-biofilter.html": "Jasa Pembuatan Septic Tank Biofilter"
};

// ============================================================
// 📁 JASA TANGKI AIR (MONEY_PAGE)
// ============================================================
const urlMappingJasaTangkiAirFromMoneyMaster1MoneyPage = {
    "https://www.betonjayareadymix.com/p/jasa-pembuatan-tangki-air.html": "Jasa Pembuatan Tangki Air"
};

// ============================================================
// 📁 JASA BAK PENAMPUNGAN (MONEY_PAGE)
// ============================================================
const urlMappingJasaBakPenampunganFromMoneyMaster1MoneyPage = {
    "https://www.betonjayareadymix.com/p/jasa-pembuatan-bak-penampungan.html": "Jasa Pembuatan Bak Penampungan"
};

// ============================================================
// 📁 JASA MENARA AIR (MONEY_PAGE)
// ============================================================
const urlMappingJasaMenaraAirFromMoneyMaster1MoneyPage = {
    "https://www.betonjayareadymix.com/p/jasa-konstruksi-menara-air.html": "Jasa Konstruksi Menara Air"
};

// ============================================================
// 📁 JASA PEMBUATAN LAPANGAN OLAHRAGA (MONEY_PAGE)
// ============================================================
const urlMappingJasaPembuatanLapanganOlahragaFromMoneyPageMoneyPage1 = {
    "https://www.betonjayareadymix.com/p/jasa-pembuatan-lapangan-futsal.html": "Jasa Pembuatan Lapangan Futsal",
    "https://www.betonjayareadymix.com/p/jasa-pembuatan-lapangan-basket.html": "Jasa Pembuatan Lapangan Basket",
    "https://www.betonjayareadymix.com/p/jasa-pembuatan-lapangan-sepakbola.html": "Jasa Pembuatan Lapangan Sepakbola",
    "https://www.betonjayareadymix.com/p/jasa-pembuatan-lapangan-voli.html": "Jasa Pembuatan Lapangan Voli",
    "https://www.betonjayareadymix.com/p/jasa-pembuatan-lapangan-tenis.html": "Jasa Pembuatan Lapangan Tenis",
    "https://www.betonjayareadymix.com/p/jasa-pembuatan-lapangan-badminton.html": "Jasa Pembuatan Lapangan Badminton",
    "https://www.betonjayareadymix.com/p/jasa-pembuatan-lapangan-serbaguna.html": "Jasa Pembuatan Lapangan Serbaguna"
};

// ═══════════════════════════════════════════════════════════
// [BAGIAN 2] EARLY EXIT — PENDEKATAN C (Guard Flag)
// ═══════════════════════════════════════════════════════════

(function() {
    'use strict';

    var cleanUrl = window.location.href.split(/[?#]/)[0];
    console.log('[jasa-konstruksi-struktur] 🔍 Check URL: ' + cleanUrl);

    // Kumpulkan SEMUA mapping ke array
    var ALL_MAPPINGS = [
        urlMappingJasaKonstruksiBangunanFromMoneyMasterMoneyPage,
        urlMappingJasaKonstruksiStrukturFromMoneyMasterMoneyPage,
        urlMappingJasaStrukturBajaRangkaRinganFromMoneyPageMoneyPage1,
        urlMappingJasaKonstruksiBajaRinganFromMoneyPage1MoneyPage2,
        urlMappingJasaStrukturBetonDanPengecoranFromMoneyPageMoneyPage1,
        urlMappingJasaKonstruksiModularDanPrecastFromMoneyPageMoneyPage1,
        urlMappingJasaStrukturKhususFromMoneyMasterMoneyMaster1,
        urlMappingJasaKolamRenangFromMoneyMaster1MoneyPage,
        urlMappingJasaKolamIkanFromMoneyMaster1MoneyPage,
        urlMappingJasaSepticTankFromMoneyMaster1MoneyPage,
        urlMappingJasaPembuatanSepticTankFromMoneyPageMoneyPage1,
        urlMappingJasaTangkiAirFromMoneyMaster1MoneyPage,
        urlMappingJasaBakPenampunganFromMoneyMaster1MoneyPage,
        urlMappingJasaMenaraAirFromMoneyMaster1MoneyPage,
        urlMappingJasaPembuatanLapanganOlahragaFromMoneyPageMoneyPage1
    ];

    // Loop + foundIndex + break (early exit)
    var foundIndex = -1;
    var foundMappingName = '';

    for (var i = 0; i < ALL_MAPPINGS.length; i++) {
        if (!ALL_MAPPINGS[i] || typeof ALL_MAPPINGS[i] !== 'object') {
            console.warn('[jasa-konstruksi-struktur] ⚠️ Mapping #' + (i + 1) + ' bukan object — skip');
            continue;
        }
        if (ALL_MAPPINGS[i][cleanUrl]) {
            foundIndex = i;
            foundMappingName = ALL_MAPPINGS[i][cleanUrl];
            break;
        }
    }

    if (foundIndex === -1) {
        console.log('[jasa-konstruksi-struktur] ⏭️ SKIP — URL tidak cocok di semua cluster');
        window.__jasaKonsStrukturActive = false;
        return;
    }

    // ✅ Cocok — set flag + simpan info untuk debug
    window.__jasaKonsStrukturActive = true;
    window.__jasaKonsStrukturMatchIndex = foundIndex;
    window.__jasaKonsStrukturMatchMappingName = foundMappingName;

    console.log(
        '[jasa-konstruksi-struktur] ✅ Match di mapping #' + (foundIndex + 1) +
        ' — Label: "' + foundMappingName + '"' +
        ' — EXECUTE flag set'
    );
})();

// ═══════════════════════════════════════════════════════════
// [BAGIAN 3] FUNGSI UTAMA — Pembuka
// ═══════════════════════════════════════════════════════════

function initJasaKonsStrukturPillar() {
    // ⚡ Guard flag
    if (!window.__jasaKonsStrukturActive) {
        console.log('[jasa-konstruksi-struktur] ⏭️ Execute SKIP — URL tidak cocok');
        return;
    }

    console.log('[jasa-konstruksi-struktur] 🚀 Execute — URL cocok');

    var cleanUrlJasaJasaKonsStruktur = window.location.href.split(/[?#]/)[0];

    // ✅ Guard elemen DOM
    var JasaKonsStruktur = document.getElementById("JasaKonsStruktur");
    if (!JasaKonsStruktur) {
        console.error("[jasa-konstruksi-struktur] ❌ elemen Id JasaKonsStruktur kondisi terhapus");
        return;
    }

    // ═══════════════════════════════════════════════════════
    // [BLOK 1] JASA KONSTRUKSI BANGUNAN (MONEY_MASTER)
    // ═══════════════════════════════════════════════════════
    if (urlMappingJasaKonstruksiBangunanFromMoneyMasterMoneyPage[cleanUrlJasaJasaKonsStruktur]) {
        generateBreadcrumbShared(
            urlMappingJasaKonstruksiBangunanFromMoneyMasterMoneyPage,
            cleanUrlJasaJasaKonsStruktur,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Konstruksi Bangunan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-konstruksi-bangunan.html' },
                { name: 'Perbandingan Jasa Konstruksi Bangunan', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-konstruksi-bangunan.html' },
                { name: 'Jasa Konstruksi Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi-bangunan.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }

    // ═══════════════════════════════════════════════════════
    // [BLOK 2] JASA KONSTRUKSI STRUKTUR (MONEY_MASTER)
    // ═══════════════════════════════════════════════════════
    if (urlMappingJasaKonstruksiStrukturFromMoneyMasterMoneyPage[cleanUrlJasaJasaKonsStruktur]) {
        generateBreadcrumbShared(
            urlMappingJasaKonstruksiStrukturFromMoneyMasterMoneyPage,
            cleanUrlJasaJasaKonsStruktur,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Konstruksi Struktur', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-konstruksi-struktur.html' },
                { name: 'Perbandingan Jasa Konstruksi Struktur', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-konstruksi-struktur.html' },
                { name: 'Jasa Konstruksi Struktur', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi-struktur.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }

    // ═══════════════════════════════════════════════════════
    // [BLOK 3] JASA STRUKTUR BAJA DAN RANGKA RINGAN (MONEY_PAGE)
    // ═══════════════════════════════════════════════════════
    if (urlMappingJasaStrukturBajaRangkaRinganFromMoneyPageMoneyPage1[cleanUrlJasaJasaKonsStruktur]) {
        generateBreadcrumbShared(
            urlMappingJasaStrukturBajaRangkaRinganFromMoneyPageMoneyPage1,
            cleanUrlJasaJasaKonsStruktur,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Konstruksi Struktur', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-konstruksi-struktur.html' },
                { name: 'Perbandingan Jasa Konstruksi Struktur', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-konstruksi-struktur.html' },
                { name: 'Jasa Konstruksi Struktur', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi-struktur.html' },
                { name: 'Jasa Struktur Baja dan Rangka Ringan', url: 'https://www.betonjayareadymix.com/p/jasa-struktur-baja-dan-rangka-ringan.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }

    // ═══════════════════════════════════════════════════════
    // [BLOK 4] JASA KONSTRUKSI BAJA RINGAN (MONEY_PAGE)
    // ═══════════════════════════════════════════════════════
    if (urlMappingJasaKonstruksiBajaRinganFromMoneyPage1MoneyPage2[cleanUrlJasaJasaKonsStruktur]) {
        generateBreadcrumbShared(
            urlMappingJasaKonstruksiBajaRinganFromMoneyPage1MoneyPage2,
            cleanUrlJasaJasaKonsStruktur,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Konstruksi Struktur', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-konstruksi-struktur.html' },
                { name: 'Perbandingan Jasa Konstruksi Struktur', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-konstruksi-struktur.html' },
                { name: 'Jasa Konstruksi Struktur', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi-struktur.html' },
                { name: 'Jasa Struktur Baja dan Rangka Ringan', url: 'https://www.betonjayareadymix.com/p/jasa-struktur-baja-dan-rangka-ringan.html' },
                { name: 'Jasa Konstruksi Baja Ringan', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi-baja-ringan.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }

    // ═══════════════════════════════════════════════════════
    // [BLOK 5] JASA STRUKTUR BETON DAN PENGECORAN (MONEY_PAGE)
    // ═══════════════════════════════════════════════════════
    if (urlMappingJasaStrukturBetonDanPengecoranFromMoneyPageMoneyPage1[cleanUrlJasaJasaKonsStruktur]) {
        generateBreadcrumbShared(
            urlMappingJasaStrukturBetonDanPengecoranFromMoneyPageMoneyPage1,
            cleanUrlJasaJasaKonsStruktur,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Konstruksi Struktur', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-konstruksi-struktur.html' },
                { name: 'Perbandingan Jasa Konstruksi Struktur', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-konstruksi-struktur.html' },
                { name: 'Jasa Konstruksi Struktur', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi-struktur.html' },
                { name: 'Jasa Struktur Beton dan Pengecoran', url: 'https://www.betonjayareadymix.com/p/jasa-struktur-beton-dan-pengecoran.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }

    // ═══════════════════════════════════════════════════════
    // [BLOK 6] JASA KONSTRUKSI MODULAR DAN PRECAST (MONEY_PAGE)
    // ═══════════════════════════════════════════════════════
    if (urlMappingJasaKonstruksiModularDanPrecastFromMoneyPageMoneyPage1[cleanUrlJasaJasaKonsStruktur]) {
        generateBreadcrumbShared(
            urlMappingJasaKonstruksiModularDanPrecastFromMoneyPageMoneyPage1,
            cleanUrlJasaJasaKonsStruktur,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Konstruksi Struktur', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-konstruksi-struktur.html' },
                { name: 'Perbandingan Jasa Konstruksi Struktur', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-konstruksi-struktur.html' },
                { name: 'Jasa Konstruksi Struktur', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi-struktur.html' },
                { name: 'Jasa Konstruksi Modular dan Precast', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi-modular-dan-precast.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }

    // ═══════════════════════════════════════════════════════
    // [BLOK 7] JASA STRUKTUR KHUSUS (MONEY_MASTER)
    // ═══════════════════════════════════════════════════════
    if (urlMappingJasaStrukturKhususFromMoneyMasterMoneyMaster1[cleanUrlJasaJasaKonsStruktur]) {
        generateBreadcrumbShared(
            urlMappingJasaStrukturKhususFromMoneyMasterMoneyMaster1,
            cleanUrlJasaJasaKonsStruktur,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Struktur Khusus', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-struktur-khusus.html' },
                { name: 'Perbandingan Jasa Struktur Khusus', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-struktur-khusus.html' },
                { name: 'Jasa Struktur Khusus', url: 'https://www.betonjayareadymix.com/p/jasa-struktur-khusus.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }

    // ═══════════════════════════════════════════════════════
    // [BLOK 8] JASA KOLAM RENANG (MONEY_PAGE)
    // ═══════════════════════════════════════════════════════
    if (urlMappingJasaKolamRenangFromMoneyMaster1MoneyPage[cleanUrlJasaJasaKonsStruktur]) {
        generateBreadcrumbShared(
            urlMappingJasaKolamRenangFromMoneyMaster1MoneyPage,
            cleanUrlJasaJasaKonsStruktur,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Struktur Khusus', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-struktur-khusus.html' },
                { name: 'Perbandingan Jasa Struktur Khusus', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-struktur-khusus.html' },
                { name: 'Jasa Struktur Khusus', url: 'https://www.betonjayareadymix.com/p/jasa-struktur-khusus.html' },
                { name: 'Jasa Kolam Renang', url: 'https://www.betonjayareadymix.com/p/jasa-kolam-renang.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }

    // ═══════════════════════════════════════════════════════
    // [BLOK 9] JASA KOLAM IKAN (MONEY_PAGE)
    // ═══════════════════════════════════════════════════════
    if (urlMappingJasaKolamIkanFromMoneyMaster1MoneyPage[cleanUrlJasaJasaKonsStruktur]) {
        generateBreadcrumbShared(
            urlMappingJasaKolamIkanFromMoneyMaster1MoneyPage,
            cleanUrlJasaJasaKonsStruktur,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Struktur Khusus', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-struktur-khusus.html' },
                { name: 'Perbandingan Jasa Struktur Khusus', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-struktur-khusus.html' },
                { name: 'Jasa Struktur Khusus', url: 'https://www.betonjayareadymix.com/p/jasa-struktur-khusus.html' },
                { name: 'Jasa Kolam Ikan', url: 'https://www.betonjayareadymix.com/p/jasa-kolam-ikan.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }

    // ═══════════════════════════════════════════════════════
    // [BLOK 10] JASA SEPTIC TANK (MONEY_PAGE)
    // ═══════════════════════════════════════════════════════
    if (urlMappingJasaSepticTankFromMoneyMaster1MoneyPage[cleanUrlJasaJasaKonsStruktur]) {
        generateBreadcrumbShared(
            urlMappingJasaSepticTankFromMoneyMaster1MoneyPage,
            cleanUrlJasaJasaKonsStruktur,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Struktur Khusus', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-struktur-khusus.html' },
                { name: 'Perbandingan Jasa Struktur Khusus', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-struktur-khusus.html' },
                { name: 'Jasa Struktur Khusus', url: 'https://www.betonjayareadymix.com/p/jasa-struktur-khusus.html' },
                { name: 'Jasa Septic Tank', url: 'https://www.betonjayareadymix.com/p/jasa-septic-tank.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }

    // ═══════════════════════════════════════════════════════
    // [BLOK 11] JASA PEMBUATAN SEPTIC TANK (MONEY_PAGE)
    // ═══════════════════════════════════════════════════════
    if (urlMappingJasaPembuatanSepticTankFromMoneyPageMoneyPage1[cleanUrlJasaJasaKonsStruktur]) {
        generateBreadcrumbShared(
            urlMappingJasaPembuatanSepticTankFromMoneyPageMoneyPage1,
            cleanUrlJasaJasaKonsStruktur,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Struktur Khusus', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-struktur-khusus.html' },
                { name: 'Perbandingan Jasa Struktur Khusus', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-struktur-khusus.html' },
                { name: 'Jasa Struktur Khusus', url: 'https://www.betonjayareadymix.com/p/jasa-struktur-khusus.html' },
                { name: 'Jasa Septic Tank', url: 'https://www.betonjayareadymix.com/p/jasa-septic-tank.html' },
                { name: 'Jasa Pembuatan Septic Tank', url: 'https://www.betonjayareadymix.com/p/jasa-pembuatan-septic-tank.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }

    // ═══════════════════════════════════════════════════════
    // [BLOK 12] JASA TANGKI AIR (MONEY_PAGE)
    // ═══════════════════════════════════════════════════════
    if (urlMappingJasaTangkiAirFromMoneyMaster1MoneyPage[cleanUrlJasaJasaKonsStruktur]) {
        generateBreadcrumbShared(
            urlMappingJasaTangkiAirFromMoneyMaster1MoneyPage,
            cleanUrlJasaJasaKonsStruktur,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Struktur Khusus', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-struktur-khusus.html' },
                { name: 'Perbandingan Jasa Struktur Khusus', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-struktur-khusus.html' },
                { name: 'Jasa Struktur Khusus', url: 'https://www.betonjayareadymix.com/p/jasa-struktur-khusus.html' },
                { name: 'Jasa Tangki Air', url: 'https://www.betonjayareadymix.com/p/jasa-tangki-air.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }

    // ═══════════════════════════════════════════════════════
    // [BLOK 13] JASA BAK PENAMPUNGAN (MONEY_PAGE)
    // ═══════════════════════════════════════════════════════
    if (urlMappingJasaBakPenampunganFromMoneyMaster1MoneyPage[cleanUrlJasaJasaKonsStruktur]) {
        generateBreadcrumbShared(
            urlMappingJasaBakPenampunganFromMoneyMaster1MoneyPage,
            cleanUrlJasaJasaKonsStruktur,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Struktur Khusus', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-struktur-khusus.html' },
                { name: 'Perbandingan Jasa Struktur Khusus', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-struktur-khusus.html' },
                { name: 'Jasa Struktur Khusus', url: 'https://www.betonjayareadymix.com/p/jasa-struktur-khusus.html' },
                { name: 'Jasa Bak Penampungan', url: 'https://www.betonjayareadymix.com/p/jasa-bak-penampungan.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }

    // ═══════════════════════════════════════════════════════
    // [BLOK 14] JASA MENARA AIR (MONEY_PAGE)
    // ═══════════════════════════════════════════════════════
    if (urlMappingJasaMenaraAirFromMoneyMaster1MoneyPage[cleanUrlJasaJasaKonsStruktur]) {
        generateBreadcrumbShared(
            urlMappingJasaMenaraAirFromMoneyMaster1MoneyPage,
            cleanUrlJasaJasaKonsStruktur,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Struktur Khusus', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-struktur-khusus.html' },
                { name: 'Perbandingan Jasa Struktur Khusus', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-struktur-khusus.html' },
                { name: 'Jasa Struktur Khusus', url: 'https://www.betonjayareadymix.com/p/jasa-struktur-khusus.html' },
                { name: 'Jasa Menara Air', url: 'https://www.betonjayareadymix.com/p/jasa-menara-air.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }

    // ═══════════════════════════════════════════════════════
    // [BLOK 15] JASA PEMBUATAN LAPANGAN OLAHRAGA (MONEY_PAGE)
    // ═══════════════════════════════════════════════════════
    if (urlMappingJasaPembuatanLapanganOlahragaFromMoneyPageMoneyPage1[cleanUrlJasaJasaKonsStruktur]) {
        generateBreadcrumbShared(
            urlMappingJasaPembuatanLapanganOlahragaFromMoneyPageMoneyPage1,
            cleanUrlJasaJasaKonsStruktur,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Lapangan Olahraga', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-lapangan-olahraga.html' },
                { name: 'Perbandingan Jasa Lapangan Olahraga', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-lapangan-olahraga.html' },
                { name: 'Jasa Lapangan Olahraga', url: 'https://www.betonjayareadymix.com/p/jasa-lapangan-olahraga.html' },
                { name: 'Jasa Pembuatan Lapangan Olahraga', url: 'https://www.betonjayareadymix.com/p/jasa-pembuatan-lapangan-olahraga.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }
}

// ═══════════════════════════════════════════════════════════
// [BAGIAN 4] AUTO-INIT saat DOM siap
// ═══════════════════════════════════════════════════════════

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initJasaKonsStrukturPillar);
} else {
    initJasaKonsStrukturPillar();
}
