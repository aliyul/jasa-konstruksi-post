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
