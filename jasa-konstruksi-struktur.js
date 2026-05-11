
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
 * generateBreadcrumbForMapping v5.3 — COMPLETE PHASE SYSTEM WITH FULL KEYWORD CIRI
 * ✅ FIX: Keyword Ciri lengkap untuk setiap level (Home, Pillar, SP2, SP1, MoneyMaster, MoneyPage, MoneyChild, Variant, SubVariant)
 * ✅ PRIORITAS DETEKSI YANG BENAR:
 *    0. HOMEPAGE (root domain)
 *    1. INFORMASIONAL (panduan, cara, tips, apa itu, pengertian, edukasi, belajar, tutorial, lengkap, komprehensif)
 *    2. PERBANDINGAN (vs, versus, perbandingan, lebih baik, mana yang, kelebihan, kekurangan, perbedaan, dibanding, bandingkan)
 *    3. KEYWORD HARGA/SEWA (harga, biaya, tarif, sewa, rental) + wordCount & lokasi
 *    4. JASA/SEWA (tanpa keyword harga) - jasa, pasang, service, kontraktor, borongan, renovasi, bangun, konsultasi, survey
 *    5. SUB-VARIANT (2+ parameter: Xmm x Ymm x Zmm, tebal+panjang+lebar, kapasitas+dimensi, 3+ ukuran)
 *    6. VARIANT (spesifikasi, ukuran, tipe, type, model, varian, warna, merk, kapasitas, dimensi, bahan, material, finishing)
 *    7. JENIS/MACAM (jenis, macam, tipe, kategori, varian, daftar, list) → SUB-PILLAR TIPE 2
 *    8. DEFAULT → PILLAR
 * ✅ VALIDASI INTENT: sesuai PHASE 1.5
 * ✅ EVERGREEN vs NON-EVERGREEN: deteksi wajib tahun di H1
 * ✅ JASA: TIDAK BOLEH MONEY_MASTER (100% terblokir)
 * ✅ HIERARKI LEVEL: Home(0) → Pillar(1) → SP2(2) → SP1(3) → MoneyMaster(4) → MoneyPage(5) → MoneyChild(6) → Variant(7) → SubVariant(8)
 * 
 * @version 5.3.0
 * @date 2026-01-15
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
    
    // HIERARKI LEVEL (9 level termasuk Home)
    const VALID_PAGE_TYPES = [
        'home',                      // Level 0 - HOMEPAGE
        'pillar',                    // Level 1 - PILLAR
        'sub-pillar-tipe-2',         // Level 2 - JENIS/MACAM
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
    // 2. ENTITY TYPE DETECTION HELPERS
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
    // 3. KEYWORD CIRI PER LEVEL (LENGKAP)
    // ============================================================
    
    // LEVEL 0: HOMEPAGE
    const HOME_KEYWORDS = ['beranda', 'home', 'halaman utama'];
    
    // LEVEL 1: PILLAR (Informasional 90%)
    const PILLAR_KEYWORDS = [
        'panduan', 'panduan lengkap', 'cara ', 'tips ', 'tips dan trik',
        'apa itu', 'pengertian', 'definisi', 'edukasi', 'belajar', 
        'tutorial', 'materi', 'penjelasan', 'kenapa', 'mengapa',
        'bagaimana', 'contoh', 'rekomendasi', 'lengkap', 'komprehensif',
        'ultimate guide', 'complete guide', 'semua tentang', 'overview'
    ];
    
    // LEVEL 2: SUB-PILLAR TIPE 2 (Jenis/Macam)
    const SP2_KEYWORDS = [
        'jenis', 'jenis-jenis', 'macam', 'macam-macam', 'tipe ', 
        'kategori', 'varian', 'daftar ', 'list ', 'koleksi', 
        'ragam', 'berbagai', 'klasifikasi', 'golongan'
    ];
    
    // LEVEL 3: SUB-PILLAR TIPE 1 (Perbandingan) 🔥 PRIORITAS TERTINGGI
    const SP1_KEYWORDS = [
        ' vs ', 'versus', 'perbandingan', 'bandingkan', 'dibanding',
        'lebih baik', 'mana yang', 'kelebihan', 'kekurangan',
        'perbedaan', 'beda', 'persamaan', 'sama', 'unggul',
        'lebih unggul', 'lebih bagus', 'lebih tahan', 'lebih awet',
        'lebih murah', 'lebih mahal', 'lebih hemat', 'lebih efisien'
    ];
    
    // LEVEL 4-6: MONEY KEYWORDS (Harga/Sewa)
    const MONEY_KEYWORDS = ['harga', 'biaya', 'tarif', 'sewa', 'rental'];
    
    // LEVEL 4: MONEY_MASTER (Harga Nasional - 1-2 kata setelah keyword)
    // LEVEL 5: MONEY_PAGE (Harga Produk Spesifik - 3+ kata atau specific product)
    // LEVEL 6: MONEY_CHILD (Harga + Lokasi)
    
    // LEVEL 7: VARIANT (Spesifikasi umum - 1 parameter)
    const VARIANT_KEYWORDS = [
        'spesifikasi', 'ukuran', 'tipe ', 'type ', 'model', 
        'varian', 'warna', 'merk', 'brand', 'kapasitas', 
        'dimensi', 'bahan', 'material', 'finishing', 'grade',
        'seri', 'serie', 'versi', 'generasi'
    ];
    
    // LEVEL 8: SUB-VARIANT (Detail Teknis - 2+ parameter)
    // Dideteksi oleh isSubVariant() function
    
    // ============================================================
    // 4. LOCATION WHITELIST (300+ KOTA)
    // ============================================================
    const LOCATION_WHITELIST = new Set([
        'jakarta', 'bogor', 'depok', 'tangerang', 'bekasi', 'jabodetabek',
        'jakpus', 'jakbar', 'jaksel', 'jakut', 'jaktim',
        'tangerang selatan', 'tangsel', 'bintaro', 'alam sutera', 'gading serpong',
        'serpong', 'ciputat', 'pamulang', 'cipondoh', 'pinang', 'karawaci',
        'bandung', 'cimahi', 'cirebon', 'tasikmalaya', 'sukabumi', 'garut', 
        'sumedang', 'purwakarta', 'karawang', 'subang', 'indramayu',
        'semarang', 'solo', 'surakarta', 'yogyakarta', 'jogja', 'magelang', 
        'salatiga', 'pekalongan', 'tegal', 'brebes', 'cilacap', 'purwokerto',
        'surabaya', 'malang', 'kediri', 'blitar', 'madiun', 'gresik', 'sidoarjo',
        'medan', 'binjai', 'deli serdang', 'padang', 'pekanbaru', 'batam',
        'palembang', 'bandar lampung', 'pontianak', 'balikpapan', 'samarinda',
        'banjarmasin', 'makassar', 'manado', 'palu', 'denpasar', 'bali', 'mataram',
        'kupang', 'ambon', 'jayapura', 'sorong'
    ]);
    
    const PRODUCT_BLACKLIST = new Set([
        'baja', 'ringan', 'galvalum', 'spandek', 'bondek', 'hebel', 'bata',
        'kayu', 'besi', 'aluminium', 'kaca', 'semen', 'pasir', 'batu',
        'pasang', 'service', 'kontraktor', 'renovasi', 'borongan',
        'tipis', 'tebal', 'lebar', 'panjang', 'pendek', 'kecil', 'besar',
        'premium', 'standar', 'ekonomis', 'mini', 'maxi', 'pro', 'max'
    ]);
    
    function isLocation(text) {
        const lowerText = text.toLowerCase();
        const words = lowerText.split(/[\s,-]+/);
        
        for (const word of words) {
            if (LOCATION_WHITELIST.has(word)) return true;
        }
        
        for (const word of words) {
            if (PRODUCT_BLACKLIST.has(word)) return false;
        }
        
        const hasIndicator = /di |ke |kota |wilayah |daerah /.test(lowerText);
        if (!hasIndicator) return false;
        
        for (const word of words) {
            if (word.length >= 4 && word.length <= 12 && /[aiueo]{2,}/.test(word)) {
                return true;
            }
        }
        return false;
    }
    
    // ============================================================
    // 5. SPECIFIC PRODUCT DETECTION
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
    
    // ============================================================
    // 6. SUB-VARIANT DETECTION (2+ PARAMETER)
    // ============================================================
    function isSubVariant(text) {
        const lowerText = text.toLowerCase();
        let score = 0;
        
        // Pola dimensi lengkap (Xmm x Ymm x Zmm)
        if (/(\d+(\.\d+)?\s*mm\s*x\s*\d+(\.\d+)?\s*mm\s*x\s*\d+(\.\d+)?\s*mm)/i.test(lowerText)) score++;
        if (/(\d+(\.\d+)?\s*cm\s*x\s*\d+(\.\d+)?\s*cm\s*x\s*\d+(\.\d+)?\s*cm)/i.test(lowerText)) score++;
        
        // Tebal + panjang + lebar
        if (lowerText.includes('tebal') && lowerText.includes('panjang') && lowerText.includes('lebar')) score++;
        
        // 3+ ukuran berbeda
        const dimensions = lowerText.match(/\d+(\.\d+)?\s*(mm|cm|m|ton|kg)/gi) || [];
        if (dimensions.length >= 3) score++;
        
        // Kapasitas + dimensi
        if (lowerText.includes('kapasitas') && dimensions.length >= 2) score++;
        
        // Multiple 'x' dan 3+ angka
        const hasMultipleX = (lowerText.match(/x/g) || []).length >= 2;
        const hasManyNumbers = (lowerText.match(/\d+/g) || []).length >= 3;
        if (hasMultipleX && hasManyNumbers) score++;
        
        return score >= 2;
    }
    
    // ============================================================
    // 7. INTENT VALIDATION (PHASE 1.5)
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
    // 8. EVERGREEN STATUS (STEP 6.2)
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
            return { evergreen: false, wajibTahun: true };
        }
        if (['money-page', 'money-child'].includes(pageType)) {
            if (isJasaEntity() || isSewaEntity()) return { evergreen: false, wajibTahun: false };
            return { evergreen: false, wajibTahun: true };
        }
        return { evergreen: true, wajibTahun: false };
    }
    
    // ============================================================
    // 9. PAGE TYPE DETECTION (PRIORITAS LENGKAP DENGAN KEYWORD CIRI)
    // ============================================================
    function detectPageType(pageName, isHome = false) {
        // PRIORITAS 0: HOMEPAGE
        if (isHome || HOME_KEYWORDS.includes(pageName.toLowerCase())) {
            console.log(`  🏠 HOMEPAGE detected → home (L0)`);
            return 'home';
        }
        
        const lowerName = pageName.toLowerCase();
        
        // ============================================================
        // PRIORITAS 1: PILLAR / SUB-PILLAR TIPE 2 (Informasional)
        // ============================================================
        for (const kw of PILLAR_KEYWORDS) {
            if (lowerName.includes(kw)) {
                // Cek apakah ini JENIS/MACAM (SP2)
                for (const sp2kw of SP2_KEYWORDS) {
                    if (lowerName.includes(sp2kw)) {
                        console.log(`  📚 SUB-PILLAR TIPE 2 detected (${kw} + ${sp2kw}) → sub-pillar-tipe-2 (L2)`);
                        return 'sub-pillar-tipe-2';
                    }
                }
                console.log(`  🏛️ PILLAR detected (${kw}) → pillar (L1)`);
                return 'pillar';
            }
        }
        
        // ============================================================
        // PRIORITAS 2: SUB-PILLAR TIPE 1 (Perbandingan) 🔥 PRIORITAS TERTINGGI
        // ============================================================
        for (const kw of SP1_KEYWORDS) {
            if (lowerName.includes(kw)) {
                console.log(`  ⚖️ SUB-PILLAR TIPE 1 detected (${kw}) → sub-pillar-tipe-1 (L3)`);
                return 'sub-pillar-tipe-1';
            }
        }
        
        // ============================================================
        // PRIORITAS 3: MONEY LEVEL (Harga/Sewa)
        // ============================================================
        for (const kw of MONEY_KEYWORDS) {
            if (lowerName.includes(kw)) {
                console.log(`  💰 Money keyword detected: ${kw}`);
                
                // JASA tidak boleh MONEY_MASTER
                if (isJasaEntity()) {
                    console.log(`  → JASA + harga → money-page (L5)`);
                    return 'money-page';
                }
                
                // Ekstrak setelah keyword
                let afterKw = '';
                const kwIndex = lowerName.indexOf(kw);
                afterKw = lowerName.substring(kwIndex + kw.length).trim();
                const words = afterKw.split(/\s+/).filter(w => w.length > 0);
                const wordCount = words.length;
                
                console.log(`  → After keyword: "${afterKw.substring(0, 50)}" | Words: ${wordCount}`);
                
                // CEK LOKASI (MONEY_CHILD)
                if (isLocation(afterKw)) {
                    console.log(`  → Location detected → money-child (L6)`);
                    return 'money-child';
                }
                
                // CEK SPESIFISITAS
                const isSpecific = isSpecificProduct(afterKw, wordCount);
                
                // MONEY_MASTER: 1-2 kata ATAU 3 kata tapi masih umum
                if (wordCount <= 2 || (wordCount === 3 && !isSpecific)) {
                    console.log(`  → money-master (${wordCount} kata) → money-master (L4)`);
                    return 'money-master';
                }
                
                // MONEY_PAGE: 3+ kata dan spesifik
                console.log(`  → money-page (${wordCount} kata, specific=${isSpecific}) → money-page (L5)`);
                return 'money-page';
            }
        }
        
        // ============================================================
        // PRIORITAS 4: JASA/SEWA (tanpa keyword harga)
        // ============================================================
        if (isJasaEntity()) {
            const jasaKeywords = ['jasa', 'pasang', 'service', 'kontraktor', 'borongan', 
                                   'renovasi', 'bangun', 'konsultasi', 'survey', 'estimasi'];
            for (const kw of jasaKeywords) {
                if (lowerName.includes(kw)) {
                    // Double-check perbandingan
                    for (const cmp of SP1_KEYWORDS) {
                        if (lowerName.includes(cmp)) {
                            console.log(`  ⚠️ JASA + perbandingan → sub-pillar-tipe-1 (L3)`);
                            return 'sub-pillar-tipe-1';
                        }
                    }
                    if (isLocation(lowerName)) {
                        console.log(`  → JASA + location → money-child (L6)`);
                        return 'money-child';
                    }
                    console.log(`  → JASA detected → money-page (L5)`);
                    return 'money-page';
                }
            }
        }
        
        if (isSewaEntity()) {
            const sewaKeywords = ['sewa', 'rental', 'alat berat', 'excavator', 'bulldozer', 'crane'];
            for (const kw of sewaKeywords) {
                if (lowerName.includes(kw)) {
                    for (const cmp of SP1_KEYWORDS) {
                        if (lowerName.includes(cmp)) {
                            console.log(`  ⚠️ SEWA + perbandingan → sub-pillar-tipe-1 (L3)`);
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
        // PRIORITAS 5: SUB-VARIANT (Level 8 - 2+ parameter)
        // ============================================================
        if (isSubVariant(lowerName)) {
            console.log(`  🔬 SUB-VARIANT detected (2+ parameters) → sub-variant (L8)`);
            return 'sub-variant';
        }
        
        // ============================================================
        // PRIORITAS 6: VARIANT (Level 7 - Spesifikasi umum)
        // ============================================================
        for (const kw of VARIANT_KEYWORDS) {
            if (lowerName.includes(kw)) {
                console.log(`  🔧 VARIANT detected (${kw}) → variant (L7)`);
                return 'variant';
            }
        }
        
        // Single dimension (tanpa 'x')
        if (/\d+(\.\d+)?\s*(mm|cm|m|kg|ton)/.test(lowerName) && !lowerName.includes('x')) {
            console.log(`  🔧 VARIANT detected (single dimension) → variant (L7)`);
            return 'variant';
        }
        
        // ============================================================
        // PRIORITAS 7: SUB-PILLAR TIPE 2 (Jenis/Macam)
        // ============================================================
        for (const kw of SP2_KEYWORDS) {
            if (lowerName.startsWith(kw) || lowerName.includes(kw + ' ') || lowerName.includes(kw + '-')) {
                console.log(`  📚 SUB-PILLAR TIPE 2 detected (${kw}) → sub-pillar-tipe-2 (L2)`);
                return 'sub-pillar-tipe-2';
            }
        }
        
        // ============================================================
        // DEFAULT: PILLAR
        // ============================================================
        console.log(`  🏛️ PILLAR (default) → pillar (L1)`);
        return 'pillar';
    }
    
    // ============================================================
    // 10. BUILD LEVELS FROM BREADCRUMB ITEMS
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
        
        const isHomePage = (name.toLowerCase() === 'beranda' || name.toLowerCase() === 'home');
        const pageType = detectPageType(name, isHomePage);
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
    // 11. VALIDASI HIERARKI (TIDAK BOLEH LONCAT LEVEL)
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
    // 12. JASA TIDAK BOLEH MONEY_MASTER
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
    // 13. FALLBACK URL
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
    // 14. SELECT LEVELS FOR BREADCRUMB (MAX 4 LEVELS)
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
    console.log(`📊 Breadcrumb Generator v5.3 — FULL KEYWORD CIRI`);
    console.log(`📊 Entity Type: ${entityType}`);
    console.log(`📊 JASA Entity: ${isJasaEntity() ? 'YES' : 'NO'}`);
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
    
    // Level lainnya (prioritaskan level tertinggi)
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
    // 15. CURRENT PAGE
    // ============================================================
    const currentFullUrl = currentUrl.startsWith('http') ? currentUrl : DOMAIN + currentUrl;
    const currentPageTitle = (() => {
        if (mappingObj && mappingObj[currentUrl]) return mappingObj[currentUrl];
        if (parentTerdekat) return parentTerdekat.name;
        return 'Halaman';
    })();
    
    const isCurrentHome = (currentPageTitle.toLowerCase() === 'beranda' || currentPageTitle.toLowerCase() === 'home');
    const currentPageType = detectPageType(currentPageTitle, isCurrentHome);
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
        evergreen: currentEvergreen
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
        console.log(`   ${i+1}. ${icon} ${l.name} → ${l.type} (L${l.level})`);
    });
    
    console.log(`\n📊 CURRENT PAGE: ${currentPageType} (L${TYPE_LEVEL_MAP[currentPageType] || '?'})`);
    console.log(`   Intent: ${currentIntentDetected} | Valid: ${currentIntentValidation.valid ? '✅' : '❌'}`);
    console.log(`   Wajib Tahun: ${currentEvergreen.wajibTahun ? `✅ WAJIB ${CURRENT_YEAR}` : '❌ TIDAK'}`);
    console.log(`📊 ========================================\n`);
    
    // ============================================================
    // 16. GENERATE HTML + JSON-LD
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
    const oldBreadcrumbs = document.querySelectorAll('.breadcrumbs, .breadcrumb-nav');
    oldBreadcrumbs.forEach(el => el.remove());
    
    const oldJsonLd = document.querySelector('script[data-breadcrumb="true"]');
    if (oldJsonLd) oldJsonLd.remove();
    
    const targetElement = document.querySelector('main, article, .content, #main-content');
    if (targetElement && targetElement.firstChild) {
        targetElement.insertAdjacentHTML('afterbegin', breadcrumbHtml);
    } else {
        document.body.insertAdjacentHTML('afterbegin', breadcrumbHtml);
    }
    
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-breadcrumb', 'true');
    script.textContent = JSON.stringify(jsonLd);
    document.head.appendChild(script);
    
    console.log(`✅ Breadcrumb injected for ${entityType}`);
    
    return {
        html: breadcrumbHtml,
        jsonLd: jsonLd,
        selectedLevels: selectedLevels,
        currentPageType: currentPageType,
        currentIntent: {
            required: getRequiredIntent(currentPageType),
            detected: currentIntentDetected,
            valid: currentIntentValidation.valid
        },
        currentEvergreen: currentEvergreen,
        currentYear: CURRENT_YEAR,
        entityType: entityType,
        version: '5.3'
    };
}

// ============================================================
// RINGKASAN HASIL DETEKSI v5.3
// ============================================================
/*
| Keyword Contoh | Hasil Deteksi | Level | Keyword Ciri yang Dipakai |
|----------------|---------------|-------|---------------------------|
| Beranda | home | L0 | HOME_KEYWORDS |
| Panduan Lengkap Konstruksi | pillar | L1 | PILLAR_KEYWORDS |
| Jenis Bata Ringan | sub-pillar-tipe-2 | L2 | SP2_KEYWORDS |
| Perbandingan Jasa Struktur Konstruksi | sub-pillar-tipe-1 | L3 | SP1_KEYWORDS |
| Harga Bata Ringan | money-master | L4 | MONEY_KEYWORDS + wordCount≤2 |
| Harga Bata Ringan Hebel | money-page | L5 | MONEY_KEYWORDS + specific product |
| Harga Bata Ringan Jakarta | money-child | L6 | MONEY_KEYWORDS + location |
| Jasa Pasang Atap | money-page | L5 | Jasa detection |
| Spesifikasi Bata Ringan | variant | L7 | VARIANT_KEYWORDS |
| Bata Ringan 10x20x60cm | sub-variant | L8 | isSubVariant() |
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
