
// ============================================================
// 🔍 ENTITY TYPE: JASA (Struktur Konstruksi)
// ATURAN: JASA TIDAK BOLEH MENGGUNAKAN MONEY_MASTER
// ✅ Gunakan: MONEY_PAGE (Komersial 60% + Transaksional 40%)
// ❌ Dilarang: MONEY_MASTER untuk JASA
// ============================================================

// ============================================================
// JASA STRUKTUR (SUB2 - LEVEL 2)
// Parent: Jasa Struktur Konstruksi (/p/jasa-struktur-konstruksi.html)
// ============================================================

// ============================================================
// [SUB2] - Jasa Konstruksi Gedung & Hunian (Turunan dari Jasa Struktur Konstruksi)
// ============================================================

const urlMappingStrukturGedungHunianFromSub2MoneyPage = {
/*hapus saja gabung money page ke sub1 struktur
  // ============================================================
  // [MONEY_PAGE] - Jasa Konstruksi Rumah Tinggal
  // 🧠 TYPE: MONEY_PAGE (JASA, bukan MONEY_MASTER)
  // Breadcrumb: Home > Jasa Struktur Konstruksi > Jasa Konstruksi Gedung & Hunian > Jasa Konstruksi Rumah Tinggal (4 level)
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-konstruksi-rumah-tinggal.html": "Jasa Konstruksi Rumah Tinggal",  // TYPE: MONEY_PAGE
  
  // ============================================================
  // [MONEY_PAGE] - Jasa Konstruksi Ruko dan Kios
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-konstruksi-ruko-dan-kios.html": "Jasa Konstruksi Ruko dan Kios",  // TYPE: MONEY_PAGE
  
  // ============================================================
  // [MONEY_PAGE] - Jasa Konstruksi Villa
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-konstruksi-villa.html": "Jasa Konstruksi Villa",  // TYPE: MONEY_PAGE
  
  // ============================================================
  // [MONEY_PAGE] - Jasa Konstruksi Apartemen
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-konstruksi-apartemen.html": "Jasa Konstruksi Apartemen",  // TYPE: MONEY_PAGE
  
  // ============================================================
  // [MONEY_PAGE] - Jasa Konstruksi Hotel
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-konstruksi-hotel.html": "Jasa Konstruksi Hotel",  // TYPE: MONEY_PAGE
  
  // ============================================================
  // [MONEY_PAGE] - Jasa Konstruksi Perkantoran
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-konstruksi-perkantoran.html": "Jasa Konstruksi Perkantoran",  // TYPE: MONEY_PAGE
  
  // ============================================================
  // [MONEY_PAGE] - Jasa Konstruksi Gedung Sekolah
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-konstruksi-gedung-sekolah.html": "Jasa Konstruksi Gedung Sekolah",  // TYPE: MONEY_PAGE
  
  // ============================================================
  // [MONEY_PAGE] - Jasa Konstruksi Gedung Rumah Sakit
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-konstruksi-gedung-rs.html": "Jasa Konstruksi Gedung Rumah Sakit",  // TYPE: MONEY_PAGE
  */
};

// ============================================================
// [SUB2] - Jasa Konstruksi Industri & Gudang (Turunan dari Jasa Struktur Konstruksi)
// ============================================================

const urlMappingStrukturIndustriGudangFromSub2MoneyPage = {
/*
  // ============================================================
  // [MONEY_PAGE] - Jasa Konstruksi Gudang Logistik
  // 🧠 TYPE: MONEY_PAGE (JASA, bukan MONEY_MASTER)
  // Breadcrumb: Home > Jasa Struktur Konstruksi > Jasa Konstruksi Industri & Gudang > Jasa Konstruksi Gudang Logistik (4 level)
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-konstruksi-gudang-logistik.html": "Jasa Konstruksi Gudang Logistik",  // TYPE: MONEY_PAGE
  
  // ============================================================
  // [MONEY_PAGE] - Jasa Konstruksi Pabrik
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-konstruksi-pabrik.html": "Jasa Konstruksi Pabrik",  // TYPE: MONEY_PAGE
  
  // ============================================================
  // [MONEY_PAGE] - Jasa Konstruksi Cold Storage
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-konstruksi-cold-storage.html": "Jasa Konstruksi Cold Storage",  // TYPE: MONEY_PAGE
  
  // ============================================================
  // [MONEY_PAGE] - Jasa Konstruksi Bengkel
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-konstruksi-bengkel.html": "Jasa Konstruksi Bengkel",  // TYPE: MONEY_PAGE
  
  // ============================================================
  // [MONEY_PAGE] - Jasa Konstruksi Workshop
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-konstruksi-workshop.html": "Jasa Konstruksi Workshop",  // TYPE: MONEY_PAGE
  */
};

// ============================================================
// [SUB2] - Jasa Struktur Baja & Rangka Ringan (Turunan dari Jasa Struktur Konstruksi)
// ============================================================

const urlMappingStrukturBajaRangkaFromSub2MoneyPage = {
/*
  // ============================================================
  // [MONEY_PAGE] - Jasa Rangka Atap Baja Ringan
  // 🧠 TYPE: MONEY_PAGE (JASA, bukan MONEY_MASTER)
  // Breadcrumb: Home > Jasa Struktur Konstruksi > Jasa Struktur Baja & Rangka Ringan > Jasa Rangka Atap Baja Ringan (4 level)
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-rangka-atap-baja-ringan.html": "Jasa Rangka Atap Baja Ringan",  // TYPE: MONEY_PAGE
  
  // ============================================================
  // [MONEY_PAGE] - Jasa Konstruksi Baja Konvensional
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-konstruksi-baja-konvensional.html": "Jasa Konstruksi Baja Konvensional",  // TYPE: MONEY_PAGE
  
  // ============================================================
  // [MONEY_PAGE] - Jasa Kanopi Baja dan Besi
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-kanopi-baja-dan-besi.html": "Jasa Kanopi Baja dan Besi",  // TYPE: MONEY_PAGE
  
  // ============================================================
  // [MONEY_PAGE] - Jasa Struktur Baja Gudang
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-struktur-baja-gudang.html": "Jasa Struktur Baja Gudang",  // TYPE: MONEY_PAGE
  */
};

// ============================================================
// [SUB2] - Jasa Struktur Khusus (Turunan dari Jasa Struktur Konstruksi)
// ============================================================

const urlMappingStrukturKhususFromSub2MoneyPage = {
/*hapus saja gabung money page ke sub1 struktur
  // ============================================================
  // [MONEY_PAGE] - Jasa Pembuatan Kolam Renang
  // 🧠 TYPE: MONEY_PAGE (JASA, bukan MONEY_MASTER)
  // Breadcrumb: Home > Jasa Struktur Konstruksi > Jasa Struktur Khusus > Jasa Pembuatan Kolam Renang (4 level)
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-pembuatan-kolam-renang.html": "Jasa Pembuatan Kolam Renang",  // TYPE: MONEY_PAGE
  
  // ============================================================
  // [MONEY_PAGE] - Jasa Pembuatan Kolam Ikan Koi
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-pembuatan-kolam-ikan-koi.html": "Jasa Pembuatan Kolam Ikan Koi",  // TYPE: MONEY_PAGE
  
  // ============================================================
  // [MONEY_PAGE] - Jasa Septic Tank Beton
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-septic-tank-beton.html": "Jasa Septic Tank Beton",  // TYPE: MONEY_PAGE
  
  // ============================================================
  // [MONEY_PAGE] - Jasa Pembuatan Tangki Air
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-pembuatan-tangki-air.html": "Jasa Pembuatan Tangki Air",  // TYPE: MONEY_PAGE
  
  // ============================================================
  // [MONEY_PAGE] - Jasa Pembuatan Bak Penampungan
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-pembuatan-bak-penampungan.html": "Jasa Pembuatan Bak Penampungan",  // TYPE: MONEY_PAGE
  
  // ============================================================
  // [MONEY_PAGE] - Jasa Konstruksi Menara Air
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-konstruksi-menara-air.html": "Jasa Konstruksi Menara Air",  // TYPE: MONEY_PAGE
  */
};

// ============================================================
// [SUB2] - Jasa Konstruksi Lapangan Olahraga (Turunan dari Jasa Struktur Konstruksi)
// ============================================================

const urlMappingStrukturLapanganFromSub2MoneyPage = {
/*
  // ============================================================
  // [MONEY_PAGE] - Jasa Pembuatan Lapangan Futsal
  // 🧠 TYPE: MONEY_PAGE (JASA, bukan MONEY_MASTER)
  // Breadcrumb: Home > Jasa Struktur Konstruksi > Jasa Konstruksi Lapangan Olahraga > Jasa Pembuatan Lapangan Futsal (4 level)
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-pembuatan-lapangan-futsal.html": "Jasa Pembuatan Lapangan Futsal",  // TYPE: MONEY_PAGE
  
  // ============================================================
  // [MONEY_PAGE] - Jasa Pembuatan Lapangan Basket
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-pembuatan-lapangan-basket.html": "Jasa Pembuatan Lapangan Basket",  // TYPE: MONEY_PAGE
  
  // ============================================================
  // [MONEY_PAGE] - Jasa Pembuatan Lapangan Sepakbola
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-pembuatan-lapangan-sepakbola.html": "Jasa Pembuatan Lapangan Sepakbola",  // TYPE: MONEY_PAGE
  
  // ============================================================
  // [MONEY_PAGE] - Jasa Pembuatan Lapangan Voli
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-pembuatan-lapangan-voli.html": "Jasa Pembuatan Lapangan Voli",  // TYPE: MONEY_PAGE
  
  // ============================================================
  // [MONEY_PAGE] - Jasa Pembuatan Lapangan Tenis
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-pembuatan-lapangan-tenis.html": "Jasa Pembuatan Lapangan Tenis",  // TYPE: MONEY_PAGE
  
  // ============================================================
  // [MONEY_PAGE] - Jasa Pembuatan Lapangan Badminton
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-pembuatan-lapangan-badminton.html": "Jasa Pembuatan Lapangan Badminton",  // TYPE: MONEY_PAGE
  
  // ============================================================
  // [MONEY_PAGE] - Jasa Pembuatan Lapangan Serbaguna
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-pembuatan-lapangan-serbaguna.html": "Jasa Pembuatan Lapangan Serbaguna",  // TYPE: MONEY_PAGE
  */
};

// ============================================================
// [SUB2] - Jasa Konstruksi Modular & Precast (Turunan dari Jasa Struktur Konstruksi)
// ============================================================

const urlMappingStrukturModularPrecastFromSub2MoneyPage = {
	/*
  // ============================================================
  // [MONEY_PAGE] - Jasa Panel Beton Precast
  // 🧠 TYPE: MONEY_PAGE (JASA, bukan MONEY_MASTER)
  // Breadcrumb: Home > Jasa Struktur Konstruksi > Jasa Konstruksi Modular & Precast > Jasa Panel Beton Precast (4 level)
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-panel-beton-precast.html": "Jasa Panel Beton Precast",  // TYPE: MONEY_PAGE
  
  // ============================================================
  // [MONEY_PAGE] - Jasa Dinding Precast Bangunan
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-dinding-precast-bangunan.html": "Jasa Dinding Precast Bangunan",  // TYPE: MONEY_PAGE
  
  // ============================================================
  // [MONEY_PAGE] - Jasa Tangga Beton Precast
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-tangga-beton-precast.html": "Jasa Tangga Beton Precast",  // TYPE: MONEY_PAGE
  
  // ============================================================
  // [MONEY_PAGE] - Jasa Balok dan Sloof Precast
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-balok-dan-sloof-precast.html": "Jasa Balok dan Sloof Precast",  // TYPE: MONEY_PAGE
  
  // ============================================================
  // [MONEY_PAGE] - Jasa Toilet Modular Prefab
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-toilet-modular-prefab.html": "Jasa Toilet Modular Prefab",  // TYPE: MONEY_PAGE
  
  // ============================================================
  // [MONEY_PAGE] - Jasa Rumah Modular Prefab
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-rumah-modular-prefab.html": "Jasa Rumah Modular Prefab",  // TYPE: MONEY_PAGE
  */
};

// ============================================================
// [SUB2] - Jasa Struktur Beton & Pengecoran (Turunan dari Jasa Struktur Konstruksi)
// ============================================================

const urlMappingStrukturBetonPengecoranFromSub2MoneyPage = {
	/*
  // ============================================================
  // [MONEY_PAGE] - Jasa Cor Beton
  // 🧠 TYPE: MONEY_PAGE (JASA, bukan MONEY_MASTER)
  // Breadcrumb: Home > Jasa Struktur Konstruksi > Jasa Struktur Beton & Pengecoran > Jasa Cor Beton (4 level)
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-cor-beton.html": "Jasa Cor Beton",  // TYPE: MONEY_PAGE
  
  // ============================================================
  // [MONEY_PAGE] - Jasa Pengecoran Lantai Dak
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-pengecoran-lantai-dak.html": "Jasa Pengecoran Lantai Dak",  // TYPE: MONEY_PAGE
  
  // ============================================================
  // [MONEY_PAGE] - Jasa Pengecoran Lantai Gudang
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-pengecoran-lantai-gudang.html": "Jasa Pengecoran Lantai Gudang",  // TYPE: MONEY_PAGE
  
  // ============================================================
  // [MONEY_PAGE] - Jasa Bekisting dan Pembesian
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-bekisting-dan-pembesian.html": "Jasa Bekisting dan Pembesian",  // TYPE: MONEY_PAGE
  
  // ============================================================
  // [MONEY_PAGE] - Jasa Pengecoran Kolom Beton
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-pengecoran-kolom-beton.html": "Jasa Pengecoran Kolom Beton",  // TYPE: MONEY_PAGE
  */
};

// ============================================================
// 🔴 REDIRECT NOTES - JASA STRUKTUR
// ============================================================
/*
🧠 SEO CANNIBAL FIX:

| No | From URL | To URL | Type | Alasan SEO |
|----|----------|--------|------|------------|
| 1 | /p/jasa-konstruksi-baja-rumah.html | /p/jasa-struktur-baja-dan-rangka-ringan.html | 301 | Duplikasi intent, gabung ke SUB2 master |
| 2 | /p/jasa-bangunan-rumah-tinggal.html | /p/jasa-konstruksi-rumah-tinggal.html | 301 | Redirect ke URL yang sudah ada |

✅ SEMUA URL di atas sudah diperbaiki: MONEY_MASTER → MONEY_PAGE
✅ MONEY_MASTER TIDAK BOLEH digunakan untuk ENTITY JASA
✅ Aman untuk SEO - tidak melanggar aturan EEAT
*/

// ============================================================
// 📋 RINGKASAN PERUBAHAN (SEBELUM vs SESUDAH)
// ============================================================
/*
SEBELUM (SALAH)                      | SESUDAH (BENAR)
--------------------------------------|-------------------------------------
MONEY_MASTER untuk semua Jasa Struktur| MONEY_PAGE untuk semua Jasa Struktur
TYPE: MONEY_MASTER                    | TYPE: MONEY_PAGE

✅ ENTITY TYPE: JASA - semua halaman di atas menggunakan MONEY_PAGE
❌ MONEY_MASTER tidak diperbolehkan untuk JASA
✅ MONEY_PAGE adalah type yang benar untuk JASA (Komersial 60% + Transaksional 40%)
*/
/*

/**
 * generateBreadcrumbForMapping v5.0 — COMPLETE PHASE SYSTEM
 * ✅ PRIORITAS DETEKSI: Entity Type → Intent → Harga → Spesifisitas
 * ✅ SUB-VARIANT: deteksi 2+ parameter (dimensi lengkap, kapasitas, dll)
 * ✅ MONEY_MASTER vs MONEY_PAGE: berdasarkan spesifisitas produk (bukan hanya word count)
 * ✅ VALIDASI INTENT: sesuai PHASE 1.5
 * ✅ EVERGREEN vs NON-EVERGREEN: deteksi wajib tahun di H1
 * ✅ JASA: TIDAK BOLEH MONEY_MASTER (100% terblokir)
 * ✅ SEWA/RENTAL: aturan khusus
 * ✅ Support SEMUA ENTITY TYPE: PRODUK, MATERIAL, JASA, SEWA/RENTAL, ARTIKEL
 * ✅ Breadcrumb tidak loncat level (auto fix)
 * ✅ MAX_LEVEL = 4 (termasuk Home)
 */

function generateBreadcrumbJasaKonstruksiStruktur(mappingObj, currentUrl, breadcrumbItems = [], entityType = 'PRODUK_INTERIOR') {
    
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
    
    const VALID_PAGE_TYPES = [
        'pillar',                    // Level 1 - EVERGREEN
        'sub-pillar-tipe-2',         // Level 2 - EVERGREEN
        'sub-pillar-tipe-1',         // Level 3 - FLEXIBLE
        'money-master',              // Level 4 - NON-EVERGREEN (JASA DILARANG)
        'money-page',                // Level 5 - NON-EVERGREEN (produk) / FLEXIBLE (jasa)
        'money-child',               // Level 6 - NON-EVERGREEN (produk) / FLEXIBLE (jasa)
        'variant',                   // Level 7 - EVERGREEN
        'sub-variant'                // Level 8 - EVERGREEN
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
    // 2. FUNGSI BANTUAN ENTITY TYPE
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
    
    function isArtikelEntity() {
        return entityType === 'ARTIKEL';
    }
    
    function isProdukMaterialSewa() {
        return isProdukEntity() || isMaterialEntity() || isSewaEntity();
    }
    
    // ============================================================
    // 3. WHITELIST LOKASI (300+ KOTA/KABUPATEN)
    // ============================================================
    const LOCATION_WHITELIST = new Set([
        // Jabodetabek
        'jakarta', 'bogor', 'depok', 'tangerang', 'bekasi', 'jabodetabek',
        'jakpus', 'jakbar', 'jaksel', 'jakut', 'jaktim',
        'tangerang selatan', 'tangsel', 'bintaro', 'alam sutera', 'gading serpong',
        'serpong', 'ciputat', 'pamulang', 'cipondoh', 'pinang', 'karawaci',
        
        // Jawa Barat
        'bandung', 'cimahi', 'cirebon', 'tasikmalaya', 'sukabumi', 'garut', 
        'sumedang', 'purwakarta', 'karawang', 'subang', 'indramayu',
        'majalengka', 'kuningan', 'ciamis', 'banjar', 'pangandaran', 'cianjur',
        'bekasi kota', 'bogor kota', 'depok kota', 'cibubur', 'ciputat',
        
        // Jawa Tengah
        'semarang', 'solo', 'surakarta', 'yogyakarta', 'jogja', 'magelang', 
        'salatiga', 'pekalongan', 'tegal', 'brebes', 'cilacap', 'purwokerto', 
        'kebumen', 'banjarnegara', 'wonosobo', 'temanggung', 'kendal', 'demak', 
        'kudus', 'jepara', 'pati', 'rembang', 'blora', 'grobogan', 'sragen', 
        'karanganyar', 'wonogiri', 'sukoharjo', 'klaten', 'boyolali',
        
        // Jawa Timur
        'surabaya', 'malang', 'kediri', 'blitar', 'madiun', 'gresik', 'sidoarjo',
        'ponorogo', 'ngawi', 'magetan', 'trenggalek', 'tulungagung', 'nganjuk',
        'jombang', 'mojokerto', 'pasuruan', 'probolinggo', 'lumajang', 'jember',
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
    ]);
    
    // BLACKLIST kata produk yang TIDAK boleh dianggap sebagai lokasi
    const PRODUCT_BLACKLIST_FOR_LOCATION = new Set([
        // Material bangunan
        'baja', 'ringan', 'galvalum', 'spandek', 'bondek', 'hebel', 'bata', 
        'kayu', 'besi', 'aluminium', 'kaca', 'semen', 'pasir', 'batu', 'kerikil',
        'genteng', 'keramik', 'cat', 'pintu', 'jendela', 'kusen', 'atap', 'plafon',
        'gypsum', 'grc', 'grbk', 'multiplek', 'triplek', 'blockboard', 'partikel',
        'readymix', 'jayamix', 'minimix', 'beton', 'cor', 'paving', 'conblock',
        
        // Produk interior
        'kitchen', 'set', 'lemari', 'meja', 'kursi', 'sofa', 'springbed', 'laci',
        'minimalis', 'modern', 'klasik', 'jati', 'mahoni', 'hpl', 'mdf', 'melamin',
        'duco', 'finishing', 'furniture', 'furnitur', 'interior', 'exterior',
        
        // Jasa
        'pasang', 'service', 'renovasi', 'bangun', 'borongan', 'kontraktor',
        'konsultasi', 'survey', 'estimasi', 'perbaiki', 'instalasi', 'pemasangan',
        'pengerjaan', 'perawatan', 'maintenance', 'konstruksi', 'desain', 'gambar',
        
        // Ukuran (sering false positive)
        'tipis', 'tebal', 'lebar', 'panjang', 'pendek', 'kecil', 'besar', 'sedang',
        'mini', 'maxi', 'jumbo', 'extra', 'super', 'pro', 'max', 'ultra', 'deluxe',
        'premium', 'standar', 'ekonomis', 'grade', 'kw', 'original', 'bekas', 'baru',
        
        // Warna (sering false positive)
        'putih', 'hitam', 'merah', 'biru', 'hijau', 'kuning', 'ungu', 'abu', 'coklat',
        'krem', 'salem', 'tosca', 'navy', 'maroon', 'gold', 'silver', 'kuningan'
    ]);
    
    // ============================================================
    // 4. FUNGSI DETEKSI LOKASI (v5.0 - ENHANCED)
    // ============================================================
    function isLocation(text) {
        const lowerText = text.toLowerCase();
        const words = lowerText.split(/[\s,-]+/);
        
        console.log(`  🔍 isLocation check: "${text.substring(0, 50)}..."`);
        
        // PRIORITAS 1: Cek whitelist kota (lokasi valid)
        for (const word of words) {
            if (LOCATION_WHITELIST.has(word)) {
                console.log(`  ✅ Location found (whitelist): "${word}"`);
                return true;
            }
        }
        
        // PRIORITAS 2: Jika kata ada di blacklist produk → BUKAN lokasi
        for (const word of words) {
            if (PRODUCT_BLACKLIST_FOR_LOCATION.has(word)) {
                console.log(`  ❌ Not location (product blacklist): "${word}"`);
                return false;
            }
        }
        
        // PRIORITAS 3: Jika tidak ada indikator lokasi → BUKAN lokasi
        const hasLocationIndicator = /di |ke |kota |wilayah |daerah |kecamatan |kelurahan|provinsi/i.test(lowerText);
        
        if (!hasLocationIndicator) {
            console.log(`  ❌ Not location (no indicator: di/kota/wilayah)`);
            return false;
        }
        
        // PRIORITAS 4: Deteksi kata dengan pola vokal (hanya jika ada indicator)
        for (const word of words) {
            if (word.length < 4) continue;
            if (word.length > 15) continue;
            if (/\d/.test(word)) continue;
            if (PRODUCT_BLACKLIST_FOR_LOCATION.has(word)) continue;
            
            const vowelCount = (word.match(/[aiueo]/gi) || []).length;
            if (vowelCount >= 2) {
                console.log(`  ✅ Location detected (vowel pattern + indicator): "${word}"`);
                return true;
            }
        }
        
        console.log(`  ❌ Not location (fallback)`);
        return false;
    }
    
    // ============================================================
    // 5. FUNGSI DETEKSI PRODUK SPESIFIK (ENHANCED)
    // ============================================================
    const SPECIFIC_PRODUCT_INDICATORS = new Set([
        'galvalum', 'spandek', 'bondek', 'hpl', 'mdf', 'jati', 'mahoni',
        'excavator', 'bulldozer', 'crane', 'dump truck', 'vibro', 'stamper',
        'minimix', 'jayamix', 'readymix', 'hebel', 'bata ringan', 'bata interlock',
        'multiplek', 'triplek', 'blockboard', 'gypsum', 'grc', 'grbk',
        'albumin', 'zincalume', 'roofing', 'insulation', 'waterproof'
    ]);
    
    function isSpecificProduct(text, wordCountAfterPrice = null) {
        const lowerText = text.toLowerCase();
        
        // Jika jumlah kata setelah harga <= 2, BUKAN specific product
        if (wordCountAfterPrice !== null && wordCountAfterPrice <= 2) {
            return false;
        }
        
        // Cek indicators
        for (const indicator of SPECIFIC_PRODUCT_INDICATORS) {
            if (lowerText.includes(indicator)) return true;
        }
        
        // Cek ukuran/dimensi
        if (/\d+(\.\d+)?\s*(mm|cm|m|inch|meter)/i.test(lowerText)) return true;
        
        // Cek merk/tipe (minimal 2 kata setelah keyword)
        if (wordCountAfterPrice !== null && wordCountAfterPrice >= 3) {
            const words = lowerText.split(/\s+/);
            if (words.length >= 2) {
                const hasMerk = /(brand|merk|tipe|type|seri|serie)/i.test(lowerText);
                if (hasMerk) return true;
            }
        }
        
        return false;
    }
    
    // ============================================================
    // 6. FUNGSI DETEKSI SUB-VARIANT (Level 8 - 2+ parameter)
    // ============================================================
    function isSubVariant(text) {
        const lowerText = text.toLowerCase();
        let score = 0;
        
        // Pola 1: Dimensi lengkap 3 sisi (mm x mm x mm)
        if (/(\d+(\.\d+)?\s*mm\s*x\s*\d+(\.\d+)?\s*mm\s*x\s*\d+(\.\d+)?\s*mm)/i.test(lowerText)) {
            score++;
            console.log(`  ✅ Sub-variant: full 3D dimension (mm)`);
        }
        
        // Pola 2: Dimensi lengkap 3 sisi (cm x cm x cm)
        if (/(\d+(\.\d+)?\s*cm\s*x\s*\d+(\.\d+)?\s*cm\s*x\s*\d+(\.\d+)?\s*cm)/i.test(lowerText)) {
            score++;
            console.log(`  ✅ Sub-variant: full 3D dimension (cm)`);
        }
        
        // Pola 3: Tebal + panjang + lebar dalam satu string
        if (lowerText.includes('tebal') && lowerText.includes('panjang') && lowerText.includes('lebar')) {
            score++;
            console.log(`  ✅ Sub-variant: tebal+panjang+lebar`);
        }
        
        // Pola 4: 3+ ukuran berbeda
        const dimensionMatches = lowerText.match(/\d+(\.\d+)?\s*(mm|cm|m|inch|meter|ton|kg|liter)/gi) || [];
        if (dimensionMatches.length >= 3) {
            score++;
            console.log(`  ✅ Sub-variant: ${dimensionMatches.length} dimensions found`);
        }
        
        // Pola 5: Kapasitas + dimensi
        if (lowerText.includes('kapasitas') && dimensionMatches.length >= 2) {
            score++;
            console.log(`  ✅ Sub-variant: kapasitas + dimensions`);
        }
        
        // Pola 6: Ukuran sangat detail dengan 2+ angka dan 'x'
        const hasMultipleX = (lowerText.match(/x/g) || []).length >= 2;
        const hasNumbers = (lowerText.match(/\d+/g) || []).length >= 3;
        if (hasMultipleX && hasNumbers) {
            score++;
            console.log(`  ✅ Sub-variant: multiple 'x' and numbers`);
        }
        
        return score >= 2;
    }
    
    // ============================================================
    // 7. FUNGSI VALIDASI INTENT (PHASE 1.5)
    // ============================================================
    function validateIntent(pageType, intentDetected) {
        const requiredIntent = getRequiredIntent(pageType);
        
        if (requiredIntent.primary === intentDetected) {
            return { valid: true, message: `Intent ${intentDetected} sesuai dengan ${pageType}` };
        }
        
        if (requiredIntent.secondary === intentDetected) {
            return { valid: true, message: `Intent ${intentDetected} (secondary) sesuai dengan ${pageType}`, isSecondary: true };
        }
        
        return { 
            valid: false, 
            message: `❌ Intent mismatch: ${pageType} seharusnya ${requiredIntent.primary} (${requiredIntent.dominance}%), tapi terdeteksi ${intentDetected}`,
            expected: requiredIntent.primary,
            detected: intentDetected
        };
    }
    
    function getRequiredIntent(pageType) {
        const intentMap = {
            'pillar': { primary: 'informasional', secondary: null, dominance: 90 },
            'sub-pillar-tipe-2': { primary: 'informasional', secondary: 'komersial', dominance: 60 },
            'sub-pillar-tipe-1': { primary: 'komersial', secondary: 'informasional', dominance: 70 },
            'variant': { primary: 'komersial', secondary: 'informasional', dominance: 80 },
            'sub-variant': { primary: 'komersial', secondary: 'informasional', dominance: 70 }
        };
        
        if (intentMap[pageType]) return intentMap[pageType];
        
        // MONEY_MASTER
        if (pageType === 'money-master') {
            if (isJasaEntity()) {
                return { primary: 'komersial', secondary: 'transaksional', dominance: 60 };
            }
            if (isSewaEntity()) {
                return { primary: 'transaksional', secondary: 'komersial', dominance: 80 };
            }
            return { primary: 'transaksional', secondary: 'komersial', dominance: 80 };
        }
        
        // MONEY_PAGE
        if (pageType === 'money-page') {
            if (isJasaEntity() || isSewaEntity()) {
                return { primary: 'komersial', secondary: 'transaksional', dominance: 60 };
            }
            return { primary: 'transaksional', secondary: 'komersial', dominance: 85 };
        }
        
        // MONEY_CHILD
        if (pageType === 'money-child') {
            if (isJasaEntity() || isSewaEntity()) {
                return { primary: 'komersial', secondary: 'transaksional', dominance: 60 };
            }
            return { primary: 'transaksional', secondary: 'komersial', dominance: 90 };
        }
        
        return { primary: 'informasional', secondary: null, dominance: 50 };
    }
    
    // ============================================================
    // 8. FUNGSI DETEKSI INTENT DARI TEXT
    // ============================================================
    function detectIntentFromText(text) {
        const lowerText = text.toLowerCase();
        
        // Cek transaksional (prioritas tertinggi untuk Money Page)
        const transactionalKeywords = ['harga', 'biaya', 'tarif', 'beli', 'jual', 'sewa', 'booking', 'pesan', 'order'];
        for (const kw of transactionalKeywords) {
            if (lowerText.includes(kw)) {
                return 'transaksional';
            }
        }
        
        // Cek komersial
        const commercialKeywords = ['perbandingan', 'vs', 'terbaik', 'rekomendasi', 'spesifikasi', 'ukuran', 'tipe', 'merk'];
        for (const kw of commercialKeywords) {
            if (lowerText.includes(kw)) {
                return 'komersial';
            }
        }
        
        // Default informasional
        return 'informasional';
    }
    
    // ============================================================
    // 9. FUNGSI EVERGREEN STATUS (STEP 6.2)
    // ============================================================
    function getEvergreenStatus(pageType) {
        // EVERGREEN (tidak perlu tahun)
        if (['pillar', 'sub-pillar-tipe-2', 'variant', 'sub-variant'].includes(pageType)) {
            return { evergreen: true, wajibTahun: false, reason: 'EVERGREEN - konten abadi' };
        }
        
        // SUB-PILLAR TIPE 1 (fleksibel)
        if (pageType === 'sub-pillar-tipe-1') {
            return { evergreen: false, wajibTahun: false, reason: 'FLEXIBLE - tergantung topik perbandingan' };
        }
        
        // MONEY_MASTER
        if (pageType === 'money-master') {
            if (isJasaEntity()) {
                return { evergreen: false, wajibTahun: false, reason: 'JASA - tidak wajib tahun' };
            }
            return { evergreen: false, wajibTahun: true, reason: 'NON-EVERGREEN - WAJIB tahun di H1' };
        }
        
        // MONEY_PAGE & MONEY_CHILD
        if (['money-page', 'money-child'].includes(pageType)) {
            if (isJasaEntity() || isSewaEntity()) {
                return { evergreen: false, wajibTahun: false, reason: 'JASA/SEWA - fleksibel, tidak wajib tahun' };
            }
            return { evergreen: false, wajibTahun: true, reason: 'NON-EVERGREEN (PRODUK) - WAJIB tahun di H1' };
        }
        
        return { evergreen: true, wajibTahun: false, reason: 'default' };
    }
    
    // ============================================================
    // 10. FUNGSI DETEKSI PAGE TYPE UTAMA (PRIORITAS PHASE 1)
    // ============================================================
    function detectPageType(pageName) {
        const lowerName = pageName.toLowerCase();
        
        console.log(`🔍 detectPageType: "${pageName}" | Entity: ${entityType}`);
        
        // ============================================================
        // PRIORITAS 1: CEK INTENT KEYWORD (INFORMASIONAL)
        // ============================================================
        const informationalKeywords = ['panduan', 'cara ', 'tips ', 'apa itu', 'pengertian', 'edukasi', 'belajar', 'tutorial'];
        for (const kw of informationalKeywords) {
            if (lowerName.includes(kw)) {
                if (lowerName.includes('jenis') || lowerName.includes('macam')) {
                    console.log(`  → sub-pillar-tipe-2 (jenis/macam + informasional)`);
                    return 'sub-pillar-tipe-2';
                }
                console.log(`  → pillar (informational: ${kw})`);
                return 'pillar';
            }
        }
        
        // ============================================================
        // PRIORITAS 2: CEK KEYWORD HARGA/BIAYA/SEWA
        // ============================================================
        const hasPrice = /harga|biaya|tarif/.test(lowerName);
        const hasRent = /sewa|rental/.test(lowerName);
        
        if (hasPrice || hasRent) {
            console.log(`  → Price/rent keyword detected`);
            
            // 🔥 KRITIS: JASA TIDAK BOLEH MONEY_MASTER
            if (isJasaEntity()) {
                console.log(`  → JASA → money-page (forced, not master)`);
                return 'money-page';
            }
            
            // Ekstrak setelah keyword
            let afterKeyword = '';
            if (lowerName.includes('harga')) afterKeyword = lowerName.substring(lowerName.indexOf('harga') + 5);
            else if (lowerName.includes('biaya')) afterKeyword = lowerName.substring(lowerName.indexOf('biaya') + 5);
            else if (lowerName.includes('sewa')) afterKeyword = lowerName.substring(lowerName.indexOf('sewa') + 4);
            else if (lowerName.includes('rental')) afterKeyword = lowerName.substring(lowerName.indexOf('rental') + 6);
            
            afterKeyword = afterKeyword.trim();
            const words = afterKeyword.split(/\s+/).filter(w => w.length > 0);
            const wordCount = words.length;
            
            console.log(`  → After keyword: "${afterKeyword.substring(0, 50)}" | Words: ${wordCount}`);
            
            // CEK LOKASI (MONEY_CHILD) — PRIORITAS TERTINGGI
            if (isLocation(afterKeyword)) {
                console.log(`  → Location detected → money-child`);
                return 'money-child';
            }
            
            // CEK APAKAH PRODUK SPESIFIK
            const isSpecific = isSpecificProduct(afterKeyword, wordCount);
            
            // MONEY_MASTER: 1-2 kata ATAU 3 kata tapi masih kategori umum (bukan spesifik)
            if (wordCount <= 2 || (wordCount === 3 && !isSpecific)) {
                console.log(`  → money-master (${wordCount} kata, specific=${isSpecific})`);
                return 'money-master';
            }
            
            // MONEY_PAGE: 3+ kata DAN spesifik
            console.log(`  → money-page (${wordCount} kata, specific=${isSpecific})`);
            return 'money-page';
        }
        
        // ============================================================
        // PRIORITAS 3: CEK JASA/SEWA (tanpa keyword harga)
        // ============================================================
        if (isJasaEntity()) {
            const jasaKeywords = ['jasa', 'pasang', 'service', 'kontraktor', 'borongan', 
                                   'renovasi', 'bangun', 'konsultasi', 'survey', 'estimasi',
                                   'perbaiki', 'instalasi', 'pemasangan', 'pengerjaan'];
            for (const kw of jasaKeywords) {
                if (lowerName.includes(kw)) {
                    if (isLocation(lowerName)) {
                        console.log(`  → money-child (JASA + location)`);
                        return 'money-child';
                    }
                    console.log(`  → money-page (JASA)`);
                    return 'money-page';
                }
            }
        }
        
        if (isSewaEntity()) {
            const sewaKeywords = ['sewa', 'rental', 'lease', 'alat berat', 'excavator', 
                                   'bulldozer', 'crane', 'vibro', 'stamper', 'dump truck'];
            for (const kw of sewaKeywords) {
                if (lowerName.includes(kw)) {
                    if (isLocation(lowerName)) {
                        console.log(`  → money-child (SEWA + location)`);
                        return 'money-child';
                    }
                    console.log(`  → money-page (SEWA)`);
                    return 'money-page';
                }
            }
        }
        
        // ============================================================
        // PRIORITAS 4: CEK SUB-VARIANT (Level 8 - 2+ parameter)
        // ============================================================
        if (isSubVariant(lowerName)) {
            console.log(`  → sub-variant (2+ parameters detected)`);
            return 'sub-variant';
        }
        
        // ============================================================
        // PRIORITAS 5: CEK VARIANT (Level 7)
        // ============================================================
        const variantKeywords = ['spesifikasi', 'ukuran', 'tipe ', 'type ', 'model', 
                                  'varian', 'warna', 'merk', 'kapasitas', 'dimensi',
                                  'bahan', 'material', 'finishing'];
        for (const kw of variantKeywords) {
            if (lowerName.includes(kw)) {
                console.log(`  → variant (${kw})`);
                return 'variant';
            }
        }
        
        // Single dimension (tanpa 'x')
        if (/\d+(\.\d+)?\s*(mm|cm|m|kg|ton)/.test(lowerName) && !lowerName.includes('x')) {
            console.log(`  → variant (single dimension)`);
            return 'variant';
        }
        
        // ============================================================
        // PRIORITAS 6: CEK SUB-PILLAR TIPE 1 (perbandingan)
        // ============================================================
        const comparisonKeywords = [' vs ', 'versus', 'perbandingan', 'lebih baik', 
                                     'mana yang', 'kelebihan', 'kekurangan', 'perbedaan',
                                     'dibanding', 'bandingkan'];
        for (const kw of comparisonKeywords) {
            if (lowerName.includes(kw)) {
                console.log(`  → sub-pillar-tipe-1 (comparison: ${kw})`);
                return 'sub-pillar-tipe-1';
            }
        }
        
        // ============================================================
        // PRIORITAS 7: CEK SUB-PILLAR TIPE 2 (jenis/macam)
        // ============================================================
        if (lowerName.startsWith('jenis ') || lowerName.startsWith('macam ') || 
            lowerName.startsWith('tipe ') || lowerName.includes('jenis-jenis') || 
            lowerName.includes('macam-macam') || lowerName.includes('kategori ')) {
            console.log(`  → sub-pillar-tipe-2 (category listing)`);
            return 'sub-pillar-tipe-2';
        }
        
        // ============================================================
        // DEFAULT: PILLAR
        // ============================================================
        console.log(`  → pillar (default)`);
        return 'pillar';
    }
    
    // ============================================================
    // 11. KUMPULKAN DATA DARI MAPPING
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
    // 12. BANGUN LEVELS DARI breadcrumbItems
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
        
        const pageType = detectPageType(name);
        const intentDetected = detectIntentFromText(name);
        const intentValidation = validateIntent(pageType, intentDetected);
        const intentData = getRequiredIntent(pageType);
        const evergreenData = getEvergreenStatus(pageType);
        
        allLevels.push({
            name: name,
            url: url,
            type: pageType,
            level: TYPE_LEVEL_MAP[pageType] || 99,
            intentDetected: intentDetected,
            intentValid: intentValidation.valid,
            intentRequired: intentData,
            evergreen: evergreenData,
            position: i
        });
    }
    
    // ============================================================
    // 13. VALIDASI & PERBAIKI HIERARKI (TIDAK BOLEH LONCAT LEVEL)
    // ============================================================
    for (let i = 0; i < allLevels.length - 1; i++) {
        const current = allLevels[i];
        const next = allLevels[i + 1];
        
        if (next.level - current.level > 1) {
            console.warn(`⚠️ LEVEL JUMP: ${current.name}(${current.type} L${current.level}) → ${next.name}(${next.type} L${next.level})`);
            
            const correctedIndex = Math.min(current.level + 1, 8);
            const correctedType = VALID_PAGE_TYPES[correctedIndex - 1];
            const correctedIntent = detectIntentFromText(next.name);
            const correctedIntentValidation = validateIntent(correctedType, correctedIntent);
            
            next.type = correctedType;
            next.level = correctedIndex;
            next.intentDetected = correctedIntent;
            next.intentValid = correctedIntentValidation.valid;
            next.intentRequired = getRequiredIntent(correctedType);
            next.evergreen = getEvergreenStatus(correctedType);
            
            console.log(`✅ DIPERBAIKI: ${next.name} → ${next.type} L${next.level}`);
        }
    }
    
    // ============================================================
    // 14. VALIDASI KHUSUS: JASA TIDAK BOLEH MONEY_MASTER
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
    // 15. VALIDASI & FALLBACK URL
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
    // 16. TENTUKAN LEVEL YANG DITAMPILKAN (MAX 4 LEVEL)
    // ============================================================
    const selectedLevels = [];
    
    // Home (WAJIB)
    selectedLevels.push({ 
        name: 'Beranda', 
        url: DOMAIN, 
        isHome: true,
        type: 'pillar',
        level: 1,
        intentDetected: 'informasional',
        intentValid: true,
        intentRequired: getRequiredIntent('pillar'),
        evergreen: getEvergreenStatus('pillar')
    });
    
    let remainingSlots = MAX_LEVEL - 2;
    
    console.log(`\n📊 ========================================`);
    console.log(`📊 Breadcrumb Generator v5.0 — COMPLETE PHASE SYSTEM`);
    console.log(`📊 Entity Type: ${entityType}`);
    console.log(`📊 JASA Entity: ${isJasaEntity() ? 'YES (MONEY_MASTER DILARANG)' : 'NO'}`);
    console.log(`📊 SEWA Entity: ${isSewaEntity() ? 'YES' : 'NO'}`);
    console.log(`📊 ========================================`);
    
    // Parent terdekat (WAJIB)
    let parentTerdekat = null;
    if (allLevels.length > 0) {
        parentTerdekat = allLevels[allLevels.length - 1];
        selectedLevels.push(parentTerdekat);
        remainingSlots--;
        console.log(`✅ WAJIB: "${parentTerdekat.name}" → ${parentTerdekat.type} (L${parentTerdekat.level})`);
        if (!parentTerdekat.intentValid) {
            console.warn(`   ⚠️ Intent Warning: ${parentTerdekat.intentRequired.primary} required, got ${parentTerdekat.intentDetected}`);
        }
        if (parentTerdekat.evergreen.wajibTahun) {
            console.log(`   📅 WAJIB contain year ${CURRENT_YEAR} in H1`);
        }
    }
    
    // Level lainnya (prioritaskan level tertinggi yang unik)
    const otherLevels = [...allLevels.slice(0, allLevels.length - 1)]
        .sort((a, b) => b.level - a.level)
        .filter((v, i, self) => self.findIndex(t => t.name === v.name) === i);
    
    for (const level of otherLevels) {
        if (remainingSlots <= 0) {
            console.log(`📌 SKIP: "${level.name}" (${level.type}) - slot habis`);
            continue;
        }
        
        if (selectedLevels.some(s => s.name === level.name)) {
            console.log(`📌 SKIP: "${level.name}" - already in breadcrumb`);
            continue;
        }
        
        selectedLevels.splice(1, 0, level);
        remainingSlots--;
        console.log(`✅ TAMBAH: "${level.name}" → ${level.type} (L${level.level})`);
        if (!level.intentValid) {
            console.warn(`   ⚠️ Intent Warning: ${level.intentRequired.primary} required, got ${level.intentDetected}`);
        }
    }
    
    // ============================================================
    // 17. HALAMAN SAAT INI (WAJIB)
    // ============================================================
    const currentFullUrl = currentUrl.startsWith('http') ? currentUrl : DOMAIN + currentUrl;
    const currentPageTitle = (() => {
        if (mappingObj && mappingObj[currentUrl]) return mappingObj[currentUrl];
        if (parentTerdekat) return parentTerdekat.name;
        return 'Halaman';
    })();
    
    const currentPageType = detectPageType(currentPageTitle);
    const currentIntentDetected = detectIntentFromText(currentPageTitle);
    const currentIntentValidation = validateIntent(currentPageType, currentIntentDetected);
    const currentIntentRequired = getRequiredIntent(currentPageType);
    const currentEvergreen = getEvergreenStatus(currentPageType);
    
    selectedLevels.push({
        name: currentPageTitle,
        url: currentFullUrl,
        isCurrent: true,
        type: currentPageType,
        level: TYPE_LEVEL_MAP[currentPageType] || 99,
        intentDetected: currentIntentDetected,
        intentValid: currentIntentValidation.valid,
        intentRequired: currentIntentRequired,
        evergreen: currentEvergreen
    });
    
    // Update position
    for (let i = 0; i < selectedLevels.length; i++) {
        selectedLevels[i].position = i + 1;
    }
    
    console.log(`\n✅ FINAL (${selectedLevels.length} level):`);
    selectedLevels.forEach((l, i) => {
        console.log(`   ${i+1}. ${l.name} → ${l.type} (L${l.level})`);
        console.log(`      Intent: ${l.intentDetected} | Valid: ${l.intentValid ? '✅' : '❌'}`);
        if (l.evergreen.wajibTahun) {
            console.log(`      📅 HARUS mengandung tahun ${CURRENT_YEAR} di H1`);
        }
    });
    
    console.log(`\n📊 CURRENT PAGE SUMMARY:`);
    console.log(`   Type: ${currentPageType}`);
    console.log(`   Intent Required: ${currentIntentRequired.primary} (${currentIntentRequired.dominance}%)`);
    console.log(`   Intent Detected: ${currentIntentDetected}`);
    console.log(`   Intent Valid: ${currentIntentValidation.valid ? '✅ YES' : '❌ NO'}`);
    console.log(`   Evergreen: ${currentEvergreen.evergreen ? 'YES' : 'NO'}`);
    console.log(`   Wajib Tahun di H1: ${currentEvergreen.wajibTahun ? `✅ WAJIB (${CURRENT_YEAR})` : '❌ TIDAK'}`);
    if (!currentIntentValidation.valid) {
        console.warn(`   ⚠️ INTENT WARNING: ${currentIntentValidation.message}`);
    }
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
    
    // ============================================================
    // 19. INJECT KE DOM
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
    
    // ============================================================
    // 20. RETURN LENGKAP
    // ============================================================
    return {
        html: breadcrumbHtml,
        jsonLd: jsonLd,
        selectedLevels: selectedLevels,
        currentPageType: currentPageType,
        currentIntent: {
            required: currentIntentRequired,
            detected: currentIntentDetected,
            valid: currentIntentValidation.valid,
            message: currentIntentValidation.message
        },
        currentEvergreen: currentEvergreen,
        currentYear: CURRENT_YEAR,
        entityType: entityType,
        isValidType: true,
        version: '5.0'
    };
}

// ============================================================
// RINGKASAN HASIL DETEKSI PER ENTITY TYPE (v5.0)
// ============================================================
/*
| Entity Type | Keyword Contoh | Hasil Deteksi | Intent | Wajib Tahun |
|-------------|----------------|---------------|--------|-------------|
| JASA | "Jasa Pasang Atap Baja Ringan" | money-page | komersial (60%) | TIDAK |
| JASA | "Jasa Pasang Atap Baja Ringan Jakarta" | money-child | komersial (60%) | TIDAK |
| JASA | "Harga Jasa Pasang Atap" | money-page (forced) | komersial (60%) | TIDAK |
| MATERIAL | "Harga Bata Ringan" | money-master | transaksional (80%) | WAJIB |
| MATERIAL | "Harga Bata Ringan Hebel" | money-page | transaksional (85%) | WAJIB |
| MATERIAL | "Harga Bata Ringan di Jakarta" | money-child | transaksional (90%) | WAJIB |
| PRODUK | "Harga Kitchen Set" | money-master | transaksional (80%) | WAJIB |
| PRODUK | "Harga Kitchen Set Minimalis Modern" | money-page | transaksional (85%) | WAJIB |
| PRODUK | "Kitchen Set Minimalis Ukuran 2x3" | variant | komersial (80%) | TIDAK |
| PRODUK | "Kitchen Set HPL 0.8mm x 1.2m x 2.4m" | sub-variant | komersial (70%) | TIDAK |
| SEWA | "Harga Sewa Excavator" | money-master | transaksional (80%) | WAJIB |
| SEWA | "Sewa Excavator Jakarta" | money-child | transaksional (90%) | WAJIB |
| ARTIKEL | "Panduan Memilih Atap Baja Ringan" | pillar | informasional (90%) | TIDAK |
*/

// Menyimpan elemen yang dihapus dalam variabel
let removedElementsJasakonstruksistruktur = {};
function removeCondition(conditionId) {
    const conditionElement = document.getElementById(conditionId);

    if (conditionElement) {
        // Menyimpan elemen yang dihapus dalam objek untuk bisa dikembalikan
        removedElementsJasakonstruksistruktur[conditionId] = conditionElement;
        conditionElement.remove(); // Menghapus elemen tersebut
    }
}

// Fungsi untuk mengembalikan elemen yang telah dihapus
function restoreCondition(conditionId) {
    const breadcrumb = document.querySelector('.breadcrumb');
    const elementToRestore = removedElementsJasakonstruksistruktur[conditionId]; // Mendapatkan elemen yang disimpan

    if (elementToRestore) {
        breadcrumb.appendChild(elementToRestore); // Menambahkan elemen kembali ke dalam breadcrumb
        delete removedElementsJasakonstruksistruktur[conditionId]; // Menghapus elemen dari objek setelah dikembalikan
    } else {
        console.log(`Elemen dengan ID ${conditionId} tidak ditemukan di removedElementsJasakonstruksistruktur.`);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    // var currentUrl = window.location.href;
     //const cleanUrl = currentUrl.split('?')[0]; // Menghapus parameter seperti ?m=1
    const cleanUrlJasaJasaKonsStruktur = window.location.href.split(/[?#]/)[0]; // Menghilangkan parameter seperti ?m=1

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
		urlMappingStrukturGedungHunian,
		urlMappingStrukturIndustriGudang,
		urlMappingStrukturBajaRangka,
		urlMappingStrukturKhusus,
		urlMappingStrukturLapangan,
		urlMappingStrukturModularPrecast,
		urlMappingStrukturBetonPengecoran
    );

    // --- validasi URL terdaftar ---
    if (!urlMappingGabungan[cleanUrlJasaJasaKonsStruktur]) {
      console.log(`[HybridDateModified] URL tidak terdaftar: ${cleanUrlJasaJasaKonsStruktur}`);
      return;
    }

  // === Tanggal nextUpdate1 global ===
	const globalNextUpdate1 = "2026-01-30T00:00:00.000Z";
	console.log(`🌐 [AutoMeta] Detected jasa-konstruksi-struktur: ${cleanUrlJasaJasaKonsStruktur}`);

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

    const hash = stableHash(cleanUrlJasaJasaKonsStruktur);
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
	
	console.log("✅ AEDMetaDates updated jasa-konstruksi-struktur:", window.AEDMetaDates);
    console.log(`✅ [HybridDateModified v2.5] ${cleanUrlJasaJasaKonsStruktur} → ${isoDate} | type=${type || "-"}`);

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
		urlMappingStrukturGedungHunianFromSub2MoneyPage,
		urlMappingStrukturIndustriGudangFromSub2MoneyPage,
		urlMappingStrukturBajaRangkaFromSub2MoneyPage,
		urlMappingStrukturKhususFromSub2MoneyPage,
		urlMappingStrukturLapanganFromSub2MoneyPage,
		urlMappingStrukturModularPrecastFromSub2MoneyPage,
		urlMappingStrukturBetonPengecoranFromSub2MoneyPage
    );

    // --- validasi URL terdaftar ---
    if (!urlMappingGabungan[cleanUrlJasaJasaKonsStruktur]) {
      console.log(`[HybridDateModified] URL tidak terdaftar: ${cleanUrlJasaJasaKonsStruktur}`);
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
		    await loadEvergreenScript("2026-01-03T10:30:00+07:00");
		
		    // ✔ AUTO MODE
		    // await loadEvergreenScript();
		
		  } catch (err) {
		    console.error("[HybridDateModified] Fatal:", err);
		  }
		})();

	
     // Menemukan elemen menggunakan Id
    //var JasaKonsPerbaikan = document.getElementById("JasaKonsPerbaikan");
    var JasaKonsStruktur = document.getElementById("JasaKonsStruktur");

if (!JasaKonsStruktur) {
     console.error("elemen Id JasaKonsPerbaikanSub kondisi terhapus");	
}

	
     var JasaKonstruksiStrukturSubLink = document.getElementById("JasaKonstruksiStrukturSub");
     var JasaStrukturKonstruksiSubLink = document.getElementById("JasaStrukturKonstruksiSub");
    //SUB JasaStrukturKonstruksi
     var JasaKonstruksiGedungdanHunianSubLink = document.getElementById("JasaKonstruksiGedungdanHunianSub");
     var JasaKonstruksiIndustridanGudangSubLink = document.getElementById("JasaKonstruksiIndustridanGudangSub");
     var JasaStrukturBajadanRangkaRinganSubLink = document.getElementById("JasaStrukturBajadanRangkaRinganSub");
     var JasaStrukturKhususLink = document.getElementById("JasaStrukturKhususSub");
     var JasaKonstruksiLapanganOlahragaSubLink = document.getElementById("JasaKonstruksiLapanganOlahragaSub");
     var JasaKonstruksiModulardanPrecastSubLink = document.getElementById("JasaKonstruksiModulardanPrecastSub");
     var JasaStrukturBetondanPengecoranSubLink = document.getElementById("JasaStrukturBetondanPengecoranSub");
	
     var pageNameJasaKonsStruktur = document.getElementById("pageNameJasaKonsStruktur");
    
     // Default untuk menyembunyikan elemen
     JasaKonstruksiStrukturSubLink.style.visibility = 'hidden';
     JasaStrukturKonstruksiSubLink.style.visibility = 'hidden';
    
     //Hide SUB JasaStrukturKonstruksi
     JasaKonstruksiGedungdanHunianSubLink.style.visibility = 'hidden';
     JasaKonstruksiIndustridanGudangSubLink.style.visibility = 'hidden';
     JasaStrukturBajadanRangkaRinganSubLink.style.visibility = 'hidden';
     JasaStrukturKhususLink.style.visibility = 'hidden';
     JasaKonstruksiLapanganOlahragaSubLink.style.visibility = 'hidden';
     JasaKonstruksiModulardanPrecastSubLink.style.visibility = 'hidden';
     JasaStrukturBetondanPengecoranSubLink.style.visibility = 'hidden';
	
     pageNameJasaKonsStruktur.textContent = "";
	
if (urlMappingStrukturGedungHunianFromSub2MoneyPage[cleanUrlJasaJasaKonsStruktur]) {
        restoreCondition('JasaKonsStruktur');
        restoreCondition('JasaKonstruksiGedungdanHunianSub');
           // hapus elemen id DIV Lain
	removeCondition('ProdukInFur');
        removeCondition('MaterialKons');
	removeCondition('ProdukKons');
       // removeCondition('ProdukKonsSaluran');
        //removeCondition('ProdukKonsPembatas');
        removeCondition('JasaKonsPerbaikan');
       	removeCondition('JasaKons');
       	removeCondition('JasaKonsSub');
       	removeCondition('MenuKons');
       	removeCondition('JasaKonsFinishing');
        removeCondition('JasaKonsPembatas');
        removeCondition('JasaKonsJalanPerkerasan');
        removeCondition('JasaKonsPondasiTanah');
/*
JasaKonstruksiGedungdanHunianSub
JasaKonstruksiIndustridanGudangSub
JasaStrukturBajadanRangkaRinganSub
JasaStrukturKhusus
JasaKonstruksiLapanganOlahragaSub
JasaKonstruksiModulardanPrecastSub
JasaStrukturBetondanPengecoranSub
*/
       //HAPUS ELEMEN LAIN DI JasaKonsStruktur SELAIN JasaKonstruksiGedungdanHunian
        removeCondition('JasaKonstruksiIndustridanGudangSub');
        removeCondition('JasaStrukturBajadanRangkaRinganSub');
        removeCondition('JasaStrukturKhususSub');
	removeCondition('JasaKonstruksiLapanganOlahragaSub');
	removeCondition('JasaKonstruksiModulardanPrecastSub');
	removeCondition('JasaStrukturBetondanPengecoranSub');
       
        JasaKonstruksiStrukturSubLink.style.visibility = 'visible';
        JasaStrukturKonstruksiSubLink.style.visibility = 'visible';
	//TAMPILKAN JasaKonstruksiGedungdanHunianSubLink
        JasaKonstruksiGedungdanHunianSubLink.style.visibility = 'visible';
        pageNameJasaKonsStruktur.textContent = urlMappingStrukturGedungHunianFromSub2MoneyPage[cleanUrlJasaJasaKonsStruktur];

		    generateBreadcrumbJasaKonstruksiStruktur(
        urlMappingStrukturGedungHunianFromSub2MoneyPage,
        cleanUrlJasaJasaKonsStruktur,
        [
            //{ name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Struktur Konstruksi', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-struktur-konstruksi.html' },
            { name: 'Jasa Konstruksi Gedung dan Hunian', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi-gedung-dan-hunian.html' }
        ],
        'JASA'
    );
}

if (urlMappingStrukturIndustriGudangFromSub2MoneyPage[cleanUrlJasaJasaKonsStruktur]) {
        restoreCondition('JasaKonsStruktur');
        restoreCondition('JasaKonstruksiIndustridanGudangSub');
           // hapus elemen id DIV Lain
	removeCondition('ProdukInFur');
        removeCondition('MaterialKons');
	removeCondition('ProdukKons');
       // removeCondition('ProdukKonsSaluran');
        //removeCondition('ProdukKonsPembatas');
        removeCondition('JasaKonsPerbaikan');
       	removeCondition('JasaKons');
       	removeCondition('JasaKonsSub');
       	removeCondition('MenuKons');
       	removeCondition('JasaKonsFinishing');
        removeCondition('JasaKonsPembatas');
        removeCondition('JasaKonsJalanPerkerasan');
        removeCondition('JasaKonsPondasiTanah');

       //HAPUS ELEMEN LAIN DI JasaKonsStruktur SELAIN JasaKonstruksiGedungdanHunian
        removeCondition('JasaKonstruksiGedungdanHunianSub');
        removeCondition('JasaStrukturBajadanRangkaRinganSub');
        removeCondition('JasaStrukturKhususSub');
	removeCondition('JasaKonstruksiLapanganOlahragaSub');
	removeCondition('JasaKonstruksiModulardanPrecastSub');
	removeCondition('JasaStrukturBetondanPengecoranSub');
       
        JasaKonstruksiStrukturSubLink.style.visibility = 'visible';
        JasaStrukturKonstruksiSubLink.style.visibility = 'visible';
	//TAMPILKAN urlMappingStrukturIndustriGudang
        JasaKonstruksiIndustridanGudangSubLink.style.visibility = 'visible';
        pageNameJasaKonsStruktur.textContent = urlMappingStrukturIndustriGudangFromSub2MoneyPage[cleanUrlJasaJasaKonsStruktur];
		generateBreadcrumbJasaKonstruksiStruktur(
        urlMappingStrukturIndustriGudangFromSub2MoneyPage,
        cleanUrlJasaJasaKonsStruktur,
        [
            //{ name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
             { name: 'Daftar Jasa Struktur Konstruksi', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-struktur-konstruksi.html' },
            { name: 'Jasa Konstruksi Industri dan Gedung', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi-industri-dan-gudang.html' }
        ],
        'JASA'
    );
}

if (urlMappingStrukturBajaRangkaFromSub2MoneyPage[cleanUrlJasaJasaKonsStruktur]) {
        restoreCondition('JasaKonsStruktur');
        restoreCondition('JasaStrukturBajadanRangkaRinganSub');
           // hapus elemen id DIV Lain
	removeCondition('ProdukInFur');
        removeCondition('MaterialKons');
	removeCondition('ProdukKons');
       // removeCondition('ProdukKonsSaluran');
        //removeCondition('ProdukKonsPembatas');
        removeCondition('JasaKonsPerbaikan');
       	removeCondition('JasaKons');
       	removeCondition('JasaKonsSub');
       	removeCondition('MenuKons');
       	removeCondition('JasaKonsFinishing');
        removeCondition('JasaKonsPembatas');
        removeCondition('JasaKonsJalanPerkerasan');
        removeCondition('JasaKonsPondasiTanah');

       //HAPUS ELEMEN LAIN DI JasaKonsStruktur SELAIN JasaKonstruksiGedungdanHunian
        removeCondition('JasaKonstruksiIndustridanGudangSub');
        removeCondition('JasaKonstruksiGedungdanHunianSub');
        removeCondition('JasaStrukturKhususSub');
	removeCondition('JasaKonstruksiLapanganOlahragaSub');
	removeCondition('JasaKonstruksiModulardanPrecastSub');
	removeCondition('JasaStrukturBetondanPengecoranSub');
       
        JasaKonstruksiStrukturSubLink.style.visibility = 'visible';
        JasaStrukturKonstruksiSubLink.style.visibility = 'visible';
	//TAMPILKAN JasaKonstruksiGedungdanHunianSubLink
        JasaStrukturBajadanRangkaRinganSubLink.style.visibility = 'visible';
        pageNameJasaKonsStruktur.textContent = urlMappingStrukturBajaRangkaFromSub2MoneyPage[cleanUrlJasaJasaKonsStruktur];

		  generateBreadcrumbJasaKonstruksiStruktur(
        urlMappingStrukturBajaRangkaFromSub2MoneyPage,
        cleanUrlJasaJasaKonsStruktur,
        [
            //{ name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
             { name: 'Daftar Jasa Struktur Konstruksi', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-struktur-konstruksi.html' },
            { name: 'Jasa Struktur Baja dan Rangka Ringan', url: 'https://www.betonjayareadymix.com/p/jasa-struktur-baja-dan-rangka-ringan.html' }
        ],
        'JASA'
    );
	
}
   
if (urlMappingStrukturKhususFromSub2MoneyPage[cleanUrlJasaJasaKonsStruktur]) {
        restoreCondition('JasaKonsStruktur');
        restoreCondition('JasaStrukturKhususSub');
           // hapus elemen id DIV Lain
	removeCondition('ProdukInFur');
        removeCondition('MaterialKons');
	removeCondition('ProdukKons');
       // removeCondition('ProdukKonsSaluran');
        //removeCondition('ProdukKonsPembatas');
        removeCondition('JasaKonsPerbaikan');
       	removeCondition('JasaKons');
       	removeCondition('JasaKonsSub');
       	removeCondition('MenuKons');
       	removeCondition('JasaKonsFinishing');
        removeCondition('JasaKonsPembatas');
        removeCondition('JasaKonsJalanPerkerasan');
        removeCondition('JasaKonsPondasiTanah');

       //HAPUS ELEMEN LAIN DI JasaKonsStruktur SELAIN JasaKonstruksiGedungdanHunian
        removeCondition('JasaKonstruksiIndustridanGudangSub');
        removeCondition('JasaStrukturBajadanRangkaRinganSub');
        removeCondition('JasaKonstruksiGedungdanHunianSub');
	removeCondition('JasaKonstruksiLapanganOlahragaSub');
	removeCondition('JasaKonstruksiModulardanPrecastSub');
	removeCondition('JasaStrukturBetondanPengecoranSub');
       
        JasaKonstruksiStrukturSubLink.style.visibility = 'visible';
        JasaStrukturKonstruksiSubLink.style.visibility = 'visible';
	//TAMPILKAN JasaStrukturKhususLink
        JasaStrukturKhususLink.style.visibility = 'visible';
        pageNameJasaKonsStruktur.textContent = urlMappingStrukturKhususFromSub2MoneyPage[cleanUrlJasaJasaKonsStruktur];

		    generateBreadcrumbJasaKonstruksiStruktur(
        urlMappingStrukturKhususFromSub2MoneyPage,
        cleanUrlJasaJasaKonsStruktur,
        [
            //{ name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
             { name: 'Daftar Jasa Struktur Konstruksi', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-struktur-konstruksi.html' },
            { name: 'Jasa Struktur Khusus', url: 'https://www.betonjayareadymix.com/p/jasa-struktur-khusus.html' }
        ],
        'JASA'
    );	
}
  
if (urlMappingStrukturLapanganFromSub2MoneyPage[cleanUrlJasaJasaKonsStruktur]) {
        restoreCondition('JasaKonsStruktur');
        restoreCondition('JasaKonstruksiLapanganOlahragaSub');
           // hapus elemen id DIV Lain
	removeCondition('ProdukInFur');
        removeCondition('MaterialKons');
	removeCondition('ProdukKons');
       // removeCondition('ProdukKonsSaluran');
        //removeCondition('ProdukKonsPembatas');
        removeCondition('JasaKonsPerbaikan');
       	removeCondition('JasaKons');
       	removeCondition('JasaKonsSub');
       	removeCondition('MenuKons');
       	removeCondition('JasaKonsFinishing');
        removeCondition('JasaKonsPembatas');
        removeCondition('JasaKonsJalanPerkerasan');
        removeCondition('JasaKonsPondasiTanah');

       //HAPUS ELEMEN LAIN DI JasaKonsStruktur SELAIN JasaKonstruksiGedungdanHunian
        removeCondition('JasaKonstruksiIndustridanGudangSub');
        removeCondition('JasaStrukturBajadanRangkaRinganSub');
        removeCondition('JasaStrukturKhususSub');
	removeCondition('JasaKonstruksiGedungdanHunianSub');
	removeCondition('JasaKonstruksiModulardanPrecastSub');
	removeCondition('JasaStrukturBetondanPengecoranSub');
       
        JasaKonstruksiStrukturSubLink.style.visibility = 'visible';
        JasaStrukturKonstruksiSubLink.style.visibility = 'visible';
	//TAMPILKAN JasaKonstruksiLapanganOlahragaSubLink
        JasaKonstruksiLapanganOlahragaSubLink.style.visibility = 'visible';
        pageNameJasaKonsStruktur.textContent = urlMappingStrukturLapanganFromSub2MoneyPage[cleanUrlJasaJasaKonsStruktur];

	        generateBreadcrumbJasaKonstruksiStruktur(
        urlMappingStrukturLapanganFromSub2MoneyPage,
        cleanUrlJasaJasaKonsStruktur,
        [
            //{ name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
             { name: 'Daftar Jasa Struktur Konstruksi', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-struktur-konstruksi.html' },
            { name: 'Jasa Konstruksi Lapangan Olahraga', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi-lapangan-olahraga.html' }
        ],
        'JASA'
    );
}
 
if (urlMappingStrukturModularPrecastFromSub2MoneyPage[cleanUrlJasaJasaKonsStruktur]) {
        restoreCondition('JasaKonsStruktur');
        restoreCondition('JasaKonstruksiModulardanPrecastSub');
           // hapus elemen id DIV Lain
	removeCondition('ProdukInFur');
        removeCondition('MaterialKons');
	removeCondition('ProdukKons');
       // removeCondition('ProdukKonsSaluran');
        //removeCondition('ProdukKonsPembatas');
        removeCondition('JasaKonsPerbaikan');
       	removeCondition('JasaKons');
       	removeCondition('JasaKonsSub');
       	removeCondition('MenuKons');
       	removeCondition('JasaKonsFinishing');
        removeCondition('JasaKonsPembatas');
        removeCondition('JasaKonsJalanPerkerasan');
        removeCondition('JasaKonsPondasiTanah');

       //HAPUS ELEMEN LAIN DI JasaKonsStruktur SELAIN JasaKonstruksiGedungdanHunian
        removeCondition('JasaKonstruksiIndustridanGudangSub');
        removeCondition('JasaStrukturBajadanRangkaRinganSub');
        removeCondition('JasaStrukturKhususSub');
	removeCondition('JasaKonstruksiLapanganOlahragaSub');
	removeCondition('JasaKonstruksiGedungdanHunianSub');
	removeCondition('JasaStrukturBetondanPengecoranSub');
       
        JasaKonstruksiStrukturSubLink.style.visibility = 'visible';
        JasaStrukturKonstruksiSubLink.style.visibility = 'visible';
	//TAMPILKAN JasaKonstruksiModulardanPrecastSubLink
        JasaKonstruksiModulardanPrecastSubLink.style.visibility = 'visible';
        pageNameJasaKonsStruktur.textContent = urlMappingStrukturModularPrecastFromSub2MoneyPage[cleanUrlJasaJasaKonsStruktur];

	      generateBreadcrumbJasaKonstruksiStruktur(
        urlMappingStrukturModularPrecastFromSub2MoneyPage,
        cleanUrlJasaJasaKonsStruktur,
        [
            //{ name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
             { name: 'Daftar Jasa Struktur Konstruksi', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-struktur-konstruksi.html' },
            { name: 'Jasa Konstruksi Modular dan Precast', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi-modular-dan-precast.html' }
        ],
        'JASA'
    );
}
   
if (urlMappingStrukturBetonPengecoranFromSub2MoneyPage[cleanUrlJasaJasaKonsStruktur]) {
        restoreCondition('JasaKonsStruktur');
        restoreCondition('JasaStrukturBetondanPengecoranSub');
           // hapus elemen id DIV Lain
	removeCondition('ProdukInFur');
        removeCondition('MaterialKons');
	removeCondition('ProdukKons');
       // removeCondition('ProdukKonsSaluran');
        //removeCondition('ProdukKonsPembatas');
        removeCondition('JasaKonsPerbaikan');
       	removeCondition('JasaKons');
       	removeCondition('JasaKonsSub');
       	removeCondition('MenuKons');
       	removeCondition('JasaKonsFinishing');
        removeCondition('JasaKonsPembatas');
        removeCondition('JasaKonsJalanPerkerasan');
        removeCondition('JasaKonsPondasiTanah');

       //HAPUS ELEMEN LAIN DI JasaKonsStruktur SELAIN JasaKonstruksiGedungdanHunian
        removeCondition('JasaKonstruksiIndustridanGudangSub');
        removeCondition('JasaStrukturBajadanRangkaRinganSub');
        removeCondition('JasaStrukturKhususSub');
	removeCondition('JasaKonstruksiLapanganOlahragaSub');
	removeCondition('JasaKonstruksiModulardanPrecastSub');
	removeCondition('JasaKonstruksiGedungdanHunianSub');
       
        JasaKonstruksiStrukturSubLink.style.visibility = 'visible';
        JasaStrukturKonstruksiSubLink.style.visibility = 'visible';
	//TAMPILKAN JasaStrukturBetondanPengecoranSubLink
        JasaStrukturBetondanPengecoranSubLink.style.visibility = 'visible';
        pageNameJasaKonsStruktur.textContent = urlMappingStrukturBetonPengecoranFromSub2MoneyPage[cleanUrlJasaJasaKonsStruktur];

	       generateBreadcrumbJasaKonstruksiStruktur(
        urlMappingStrukturBetonPengecoranFromSub2MoneyPage,
        cleanUrlJasaJasaKonsStruktur,
        [
           // { name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Struktur Konstruksi', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-struktur-konstruksi.html' },
            { name: 'Jasa Struktur Beton dan Pengecoran', url: 'https://www.betonjayareadymix.com/p/jasa-struktur-beton-dan-pengecoran.html' }
        ],
        'JASA'
    );
}

	
   });
