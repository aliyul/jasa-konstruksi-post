// ============================================================
// 🔍 ENTITY TYPE: JASA (Pondasi Bangunan)
// ATURAN: JASA TIDAK BOLEH MENGGUNAKAN MONEY_MASTER
// ✅ Gunakan: MONEY_PAGE (Komersial 60% + Transaksional 40%)
// ✅ Gunakan: MONEY_CHILD (spesifik lokasi)
// ❌ Dilarang: MONEY_MASTER
// ============================================================

// ============================================================
// 📁 LEVEL 2 - SUB2 (Turunan dari PILLAR Jasa Konstruksi)
// Parent: Jasa Pondasi & Perkuatan Tanah (/p/jasa-pondasi-perkuatan-tanah.html)
// ============================================================
/*
const urlMappingJasaPondasiFromPillarSub2 = {
  // [SUB2] - Jasa Pondasi Bangunan
  "https://www.betonjayareadymix.com/p/jasa-pondasi-bangunan.html": "Jasa Pondasi Bangunan",  // TYPE: SUB2
};
*/

// ============================================================
// 📁 JASA PONDASI (BORONGAN PONDASI) - MONEY PAGE & CHILD
// 🧠 ENTITY: JASA → TYPE: MONEY_PAGE & MONEY_CHILD
// Parent: Jasa Pondasi Bangunan (SUB2)
// Breadcrumb: Home > Jasa Konstruksi > Jasa Pondasi Bangunan > [Nama Layanan] (4 level)
// ============================================================

const urlMappingJasaPondasiFromSub2MoneyPage = {
  // ============================================================
  // [MONEY_PAGE] - BORONGAN PONDASI (LAYANAN UMUM)
  // 🧠 TYPE: MONEY_PAGE (JASA, bukan MONEY_MASTER)
  // Intent: Komersial (60%) + Transaksional (40%)
  // ============================================================
  "https://www.betonjayareadymix.com/2018/09/borongan-pondasi.html": "Borongan Pondasi",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2019/08/jasa-borongan-pondasi.html": "Jasa Borongan Pondasi",  // TYPE: MONEY_PAGE
  
  // ============================================================
  // [MONEY_PAGE] - HARGA JASA BORONGAN PONDASI
  // ============================================================
  "https://www.betonjayareadymix.com/2019/08/harga-jasa-borongan-pondasi.html": "Harga Jasa Borongan Pondasi",  // TYPE: MONEY_PAGE
  
  // ============================================================
  // [MONEY_CHILD] - JASA BORONGAN PONDASI PER LOKASI (TERDEKAT & MURAH)
  // 🧠 TYPE: MONEY_CHILD (spesifik lokasi)
  // ============================================================
  "https://www.betonjayareadymix.com/2019/08/jasa-borongan-pondasi-terdekat.html": "Jasa Borongan Pondasi Terdekat",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/08/jasa-borongan-pondasi-murah.html": "Jasa Borongan Pondasi Murah",  // TYPE: MONEY_CHILD
  
  // ============================================================
  // [MONEY_CHILD] - JASA BORONGAN PONDASI PER LOKASI (JAWA BARAT)
  // ============================================================
  "https://www.betonjayareadymix.com/2019/08/jasa-borongan-pondasi-sumedang.html": "Jasa Borongan Pondasi Sumedang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/08/jasa-borongan-pondasi-subang.html": "Jasa Borongan Pondasi Subang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/08/jasa-borongan-pondasi-purwakarta.html": "Jasa Borongan Pondasi Purwakarta",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/08/jasa-borongan-pondasi-pangandaran.html": "Jasa Borongan Pondasi Pangandaran",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/08/jasa-borongan-pondasi-majalengka.html": "Jasa Borongan Pondasi Majalengka",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/08/jasa-borongan-pondasi-kuningan.html": "Jasa Borongan Pondasi Kuningan",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/08/jasa-borongan-pondasi-indramayu.html": "Jasa Borongan Pondasi Indramayu",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/08/jasa-borongan-pondasi-cirebon.html": "Jasa Borongan Pondasi Cirebon",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/08/jasa-borongan-pondasi-cianjur.html": "Jasa Borongan Pondasi Cianjur",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/08/jasa-borongan-pondasi-ciamis.html": "Jasa Borongan Pondasi Ciamis",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/08/jasa-borongan-pondasi-garut.html": "Jasa Borongan Pondasi Garut",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/08/jasa-borongan-pondasi-tasikmalaya.html": "Jasa Borongan Pondasi Tasikmalaya",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/08/jasa-borongan-pondasi-sukabumi.html": "Jasa Borongan Pondasi Sukabumi",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/08/jasa-borongan-pondasi-bandung.html": "Jasa Borongan Pondasi Bandung",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/08/jasa-borongan-pondasi-karawang.html": "Jasa Borongan Pondasi Karawang",  // TYPE: MONEY_CHILD
  
  // ============================================================
  // [MONEY_CHILD] - JASA BORONGAN PONDASI PER LOKASI (JABODETABEK)
  // ============================================================
  "https://www.betonjayareadymix.com/2019/08/jasa-borongan-pondasi-bekasi.html": "Jasa Borongan Pondasi Bekasi",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/08/jasa-borongan-pondasi-tangerang.html": "Jasa Borongan Pondasi Tangerang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/08/jasa-borongan-pondasi-depok.html": "Jasa Borongan Pondasi Depok",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/08/jasa-borongan-pondasi-bogor.html": "Jasa Borongan Pondasi Bogor",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/08/jasa-borongan-pondasi-jakarta.html": "Jasa Borongan Pondasi Jakarta",  // TYPE: MONEY_CHILD
};

// ============================================================
// 📁 JASA PONDASI CAKAR AYAM - KOSONG (SARAN ITEM)
// 🧠 ENTITY: JASA → TYPE: MONEY_PAGE & MONEY_CHILD
// Parent: Jasa Pondasi Bangunan (SUB2)
// ============================================================

const urlMappingJasaPondasiCakarAyamFromSub2MoneyPage = {
  // 🟡 SARAN ITEM (BELUM AKTIF - PERLU DIBUAT KONTEN)
  // "https://www.betonjayareadymix.com/2019/08/jasa-pondasi-cakar-ayam.html": "Jasa Pondasi Cakar Ayam",  // TYPE: MONEY_PAGE
  // "https://www.betonjayareadymix.com/2019/08/harga-jasa-pondasi-cakar-ayam.html": "Harga Jasa Pondasi Cakar Ayam",  // TYPE: MONEY_PAGE
  // "https://www.betonjayareadymix.com/2019/08/jasa-pondasi-cakar-ayam-per-meter.html": "Jasa Pondasi Cakar Ayam Per Meter",  // TYPE: MONEY_CHILD
  // "https://www.betonjayareadymix.com/2019/08/jasa-pondasi-cakar-ayam-jakarta.html": "Jasa Pondasi Cakar Ayam Jakarta",  // TYPE: MONEY_CHILD
  // "https://www.betonjayareadymix.com/2019/08/jasa-pondasi-cakar-ayam-bandung.html": "Jasa Pondasi Cakar Ayam Bandung",  // TYPE: MONEY_CHILD
  // "https://www.betonjayareadymix.com/2019/08/jasa-pondasi-cakar-ayam-terdekat.html": "Jasa Pondasi Cakar Ayam Terdekat",  // TYPE: MONEY_CHILD
};

// ============================================================
// 📁 JASA PONDASI TAPAK - KOSONG (SARAN ITEM)
// 🧠 ENTITY: JASA → TYPE: MONEY_PAGE & MONEY_CHILD
// Parent: Jasa Pondasi Bangunan (SUB2)
// ============================================================

const urlMappingJasaPondasiTapakFromSub2MoneyPage = {
  // 🟡 SARAN ITEM (BELUM AKTIF - PERLU DIBUAT KONTEN)
  // "https://www.betonjayareadymix.com/2019/08/jasa-pondasi-tapak.html": "Jasa Pondasi Tapak",  // TYPE: MONEY_PAGE
  // "https://www.betonjayareadymix.com/2019/08/harga-jasa-pondasi-tapak.html": "Harga Jasa Pondasi Tapak",  // TYPE: MONEY_PAGE
  // "https://www.betonjayareadymix.com/2019/08/jasa-pondasi-tapak-per-meter.html": "Jasa Pondasi Tapak Per Meter",  // TYPE: MONEY_CHILD
  // "https://www.betonjayareadymix.com/2019/08/jasa-pondasi-tapak-jakarta.html": "Jasa Pondasi Tapak Jakarta",  // TYPE: MONEY_CHILD
  // "https://www.betonjayareadymix.com/2019/08/jasa-pondasi-tapak-bandung.html": "Jasa Pondasi Tapak Bandung",  // TYPE: MONEY_CHILD
};

// ============================================================
// 📁 JASA PONDASI TIANG PANCANG - MONEY PAGE & CHILD
// 🧠 ENTITY: JASA → TYPE: MONEY_PAGE & MONEY_CHILD
// Parent: Jasa Pondasi Bangunan (SUB2)
// ============================================================

const urlMappingJasaPondasiTiangPancangFromSub2MoneyPage = {
  // ============================================================
  // [MONEY_PAGE] - HARGA JASA PANCANG (BERBAGAI METODE)
  // 🧠 TYPE: MONEY_PAGE (JASA, bukan MONEY_MASTER)
  // ============================================================
  "https://www.betonjayareadymix.com/2019/08/harga-jasa-pancang-drop-hammer.html": "Harga Jasa Pancang Drop Hammer",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2019/08/harga-jasa-pancang-spun-pile.html": "Harga Jasa Pancang Spun Pile",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2019/08/harga-jasa-pancang-mini-pile.html": "Harga Jasa Pancang Mini Pile",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2019/08/harga-jasa-pemasangan-mini-pile.html": "Harga Jasa Pemasangan Mini Pile",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2019/08/harga-jasa-pancang-hidrolik.html": "Harga Jasa Pancang Hidrolik",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2019/08/harga-jasa-pemasangan-tiang-pancang.html": "Harga Jasa Pemasangan Tiang Pancang",  // TYPE: MONEY_PAGE
  
  // ============================================================
  // [MONEY_PAGE] - HARGA JASA PONDASI TIANG PANCANG
  // ============================================================
  "https://www.betonjayareadymix.com/2019/08/harga-jasa-pondasi-tiang-pancang.html": "Harga Jasa Pondasi Tiang Pancang",  // TYPE: MONEY_PAGE
  
  // ============================================================
  // [MONEY_CHILD] - JASA PONDASI TIANG PANCANG PER LOKASI
  // 🧠 TYPE: MONEY_CHILD (spesifik lokasi)
  // ============================================================
  "https://www.betonjayareadymix.com/2019/08/harga-jasa-pondasi-tiang-pancang-terdekat.html": "Harga Jasa Pondasi Tiang Pancang Terdekat",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/08/harga-jasa-pondasi-tiang-pancang-murah.html": "Harga Jasa Pondasi Tiang Pancang Murah",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/08/harga-jasa-pondasi-tiang-pancang-karawang.html": "Harga Jasa Pondasi Tiang Pancang Karawang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/08/harga-jasa-pondasi-tiang-pancang-bekasi.html": "Harga Jasa Pondasi Tiang Pancang Bekasi",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/08/harga-jasa-pondasi-tiang-pancang-tangerang.html": "Harga Jasa Pondasi Tiang Pancang Tangerang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/08/harga-jasa-pondasi-tiang-pancang-depok.html": "Harga Jasa Pondasi Tiang Pancang Depok",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/08/harga-jasa-pondasi-tiang-pancang-bogor.html": "Harga Jasa Pondasi Tiang Pancang Bogor",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/08/harga-jasa-pondasi-tiang-pancang-jakarta.html": "Harga Jasa Pondasi Tiang Pancang Jakarta",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/08/harga-jasa-pondasi-tiang-pancang-surabaya.html": "Harga Jasa Pondasi Tiang Pancang Surabaya",  // TYPE: MONEY_CHILD
};

// ============================================================
// 📁 JASA PONDASI SUMURAN - KOSONG (SARAN ITEM)
// 🧠 ENTITY: JASA → TYPE: MONEY_PAGE & MONEY_CHILD
// Parent: Jasa Pondasi Bangunan (SUB2)
// ============================================================

const urlMappingJasaPondasiSumuranFromSub2MoneyPage = {
  // 🟡 SARAN ITEM (BELUM AKTIF - PERLU DIBUAT KONTEN)
  // "https://www.betonjayareadymix.com/2019/08/jasa-pondasi-sumuran.html": "Jasa Pondasi Sumuran",  // TYPE: MONEY_PAGE
  // "https://www.betonjayareadymix.com/2019/08/harga-jasa-pondasi-sumuran.html": "Harga Jasa Pondasi Sumuran",  // TYPE: MONEY_PAGE
  // "https://www.betonjayareadymix.com/2019/08/jasa-pondasi-sumuran-per-meter.html": "Jasa Pondasi Sumuran Per Meter",  // TYPE: MONEY_CHILD
  // "https://www.betonjayareadymix.com/2019/08/jasa-pondasi-sumuran-jakarta.html": "Jasa Pondasi Sumuran Jakarta",  // TYPE: MONEY_CHILD
  // "https://www.betonjayareadymix.com/2019/08/jasa-pondasi-sumuran-bandung.html": "Jasa Pondasi Sumuran Bandung",  // TYPE: MONEY_CHILD
  // "https://www.betonjayareadymix.com/2019/08/jasa-pondasi-sumuran-terdekat.html": "Jasa Pondasi Sumuran Terdekat",  // TYPE: MONEY_CHILD
};

// ============================================================
// 📁 CATATAN: JASA PONDASI BORED PILE
// 🧠 SUDAH ADA DI PENGEBORAN (urlMappingJasaPengeboranFromSub2MoneyPage)
// Tidak perlu duplikasi di sini
// ============================================================

// ============================================================
// 🔴 BREADCRUMB SKIP LEVEL NOTES
// ============================================================
/*
📌 BREADCRUMB SKIP LEVEL YANG DIPERBOLEHKAN:

Untuk semua MONEY_PAGE dan MONEY_CHILD di atas:
- Skip: "Jasa Pondasi & Perkuatan Tanah" (SUB2)
- Karena halaman tersebut hanya sebagai pengelompokan

Breadcrumb yang benar:
Home > Jasa Konstruksi > Jasa Pondasi Bangunan > Borongan Pondasi (4 level)
Home > Jasa Konstruksi > Jasa Pondasi Bangunan > Borongan Pondasi Jakarta (4 level)
Home > Jasa Konstruksi > Jasa Pondasi Bangunan > Harga Jasa Pancang Mini Pile (4 level)

✅ SEMUA URL di atas sudah valid sebagai MONEY_PAGE / MONEY_CHILD
✅ Tidak ada MONEY_MASTER (karena ENTITY JASA)
✅ Tidak ada duplikasi konten berisiko tinggi
✅ Aman untuk SEO
*/

// ============================================================
// 📋 RINGKASAN TYPE YANG DIGUNAKAN
// ============================================================
/*
Type			Jumlah Item	Keterangan
SUB2			1			Jasa Pondasi Bangunan (kategori)
MONEY_PAGE		~10			Harga & layanan jasa pondasi umum
MONEY_CHILD		~30			Jasa pondasi per lokasi (Jakarta, Bandung, dll)

✅ ENTITY TYPE: JASA - semua MONEY_PAGE dan MONEY_CHILD VALID
❌ MONEY_MASTER - TIDAK ADA (karena JASA tidak boleh)
*/

// ============================================================
// 🟡 REKOMENDASI URL TAMBAHAN (GLOBAL)
// ============================================================
/*
🧠 URL YANG DISARANKAN UNTUK DITAMBAHKAN:

| No | URL Saran | Type | Prioritas | Keterangan |
|----|-----------|------|-----------|-------------|
| 1 | /2019/08/jasa-borongan-pondasi-surabaya.html | MONEY_CHILD | 🟡 MEDIUM | Lokasi Surabaya |
| 2 | /2019/08/jasa-borongan-pondasi-semarang.html | MONEY_CHILD | 🟡 MEDIUM | Lokasi Semarang |
| 3 | /2019/08/jasa-borongan-pondasi-medan.html | MONEY_CHILD | 🟡 MEDIUM | Lokasi Medan |
| 4 | /2019/08/jasa-borongan-pondasi-makassar.html | MONEY_CHILD | 🟡 MEDIUM | Lokasi Makassar |
| 5 | /2019/08/jasa-pondasi-cakar-ayam.html | MONEY_PAGE | 🔴 HIGH | Perlu dibuat konten |
| 6 | /2019/08/jasa-pondasi-tapak.html | MONEY_PAGE | 🔴 HIGH | Perlu dibuat konten |
| 7 | /2019/08/jasa-pondasi-sumuran.html | MONEY_PAGE | 🔴 HIGH | Perlu dibuat konten |
| 8 | /2019/08/jasa-pondasi-batu-kali.html | MONEY_PAGE | 🟡 MEDIUM | Pondasi batu kali |
| 9 | /2019/08/harga-borongan-pondasi-per-meter.html | MONEY_PAGE | 🟡 MEDIUM | Harga per meter |
| 10 | /2019/08/jasa-pondasi-rumah-2-lantai.html | MONEY_CHILD | 🟡 MEDIUM | Spesifikasi rumah 2 lantai |
*/ 

/**
 * generateBreadcrumbForMapping v5.6 — COMPLETE PHASE SYSTEM WITH URL CLEAN DETECTION
 * ✅ FIX: Deteksi utama berdasarkan URL clean (tanpa domain, tanpa /p/, tanpa tahun/bulan)
 * ✅ FIX: "harga-sewa-alat-proyek" → MONEY_MASTER (L4), BUKAN money-page
 * ✅ FIX: "Jasa Konstruksi" → PILLAR (L1), BUKAN money-page
 * ✅ FIX: "Sewa Alat Konstruksi" → PILLAR (L1)
 * ✅ FIX: "Produk Konstruksi", "Produk Interior" → PILLAR (L1)
 * ✅ FIX: "Material Konstruksi" → PILLAR (L1)
 * ✅ ENTITY PILLAR KEYWORDS untuk setiap entity type
 * ✅ PRIORITAS DETEKSI:
 *    0. HOMEPAGE
 *    1. ENTITY PILLAR (Jasa Konstruksi, Sewa Alat, dll) 🔥
 *    2. INFORMASIONAL (panduan, cara, tips) → PILLAR
 *    3. PERBANDINGAN (vs, versus) → SP1
 *    4. JENIS/MACAM/DAFTAR (jenis, macam, daftar) → SP2
 *    5. KEYWORD HARGA/SEWA → MONEY (berdasarkan URL clean)
 *    6. JASA/SEWA (tanpa keyword harga & bukan pillar) → MONEY_PAGE
 *    7. SUB-VARIANT
 *    8. VARIANT
 *    9. DEFAULT → PILLAR
 * 
 * @version 5.6.0
 * @date 2026-01-15
 */

function generateBreadcrumbJasaKonstruksiPondasiPerkuatanTanahPost(mappingObj, currentUrl, breadcrumbItems = [], entityType = 'PRODUK_INTERIOR') {
    
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
        'sub-pillar-tipe-2',         // Level 2 - JENIS/MACAM/DAFTAR
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
    // 2. ENTITY TYPE HELPERS
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
    // 3. FUNGSI GET CLEAN PAGE NAME FROM URL 🔥
    // ============================================================
    function getCleanPageNameFromUrl(url) {
        if (!url) return '';
        
        let path = url;
        
        // Hapus domain jika ada
        path = path.replace(/^https?:\/\/[^\/]+/, '');
        
        // Hapus parameter query
        path = path.split('?')[0];
        
        // Hapus ekstensi .html, .php, .asp, .jsp
        path = path.replace(/\.(html|php|asp|jsp)$/i, '');
        
        // Hapus /p/ prefix (blogspot style)
        path = path.replace(/^\/p\//, '');
        
        // Hapus pola tanggal (tahun/bulan) seperti /2025/03/ atau /2025/
        path = path.replace(/\/\d{4}\/\d{2}\//g, '/');
        path = path.replace(/\/\d{4}\//g, '/');
        path = path.replace(/\/\d{2}\//g, '/');
        
        // Split path dan filter
        const pathParts = path.split('/');
        const cleanedParts = pathParts.filter(part => {
            // Hapus angka tahun (4 digit)
            if (/^\d{4}$/.test(part)) return false;
            // Hapus angka bulan (2 digit)
            if (/^\d{2}$/.test(part)) return false;
            // Hapus part kosong atau index
            if (part === '' || part === 'index') return false;
            return true;
        });
        
        // Ambil bagian terakhir dari path (nama halaman)
        let pageName = cleanedParts.pop() || '';
        
        // Konversi tanda hubung ke spasi
        pageName = pageName.replace(/-/g, ' ');
        
        // Hapus karakter yang tidak perlu (hanya huruf, angka, spasi)
        pageName = pageName.replace(/[^a-z0-9\s]/gi, '');
        
        // Hapus multiple spaces
        pageName = pageName.replace(/\s+/g, ' ').trim();
        
        return pageName;
    }
    
    // ============================================================
    // 4. ENTITY PILLAR KEYWORDS (UTAMA UNTUK MASING-MASING ENTITY) 🔥
    // ============================================================
    const ENTITY_PILLAR_KEYWORDS = {
        'JASA_KONSTRUKSI': ['jasa konstruksi', 'layanan konstruksi', 'jasa bangunan', 'kontraktor konstruksi'],
        'JASA_DESAIN_INTERIOR': ['jasa desain interior', 'jasa interior', 'desain interior'],
        'JASA': ['jasa konstruksi', 'layanan konstruksi', 'jasa bangunan'],
        
        'SEWA': ['sewa alat konstruksi', 'rental alat berat', 'sewa alat bangunan', 'sewa alat berat'],
        'RENTAL': ['rental alat berat', 'sewa alat konstruksi'],
        'SEWA_RENTAL': ['sewa alat konstruksi', 'rental alat berat'],
        'SEWA_ALAT': ['sewa alat konstruksi', 'sewa alat berat'],
        'RENTAL_ALAT': ['rental alat berat', 'sewa alat konstruksi'],
        
        'PRODUK_KONSTRUKSI': ['produk konstruksi', 'produk bangunan', 'material konstruksi'],
        'PRODUK_INTERIOR': ['produk interior', 'furniture', 'perabot rumah', 'perabot interior'],
        'PRODUK': ['produk konstruksi', 'produk bangunan'],
        
        'MATERIAL_KONSTRUKSI': ['material konstruksi', 'bahan bangunan', 'material bangunan'],
        'MATERIAL': ['material konstruksi', 'bahan bangunan', 'material bangunan'],
        
        'ARTIKEL': ['artikel konstruksi', 'tips konstruksi', 'info bangunan']
    };
    
    // ============================================================
    // 5. KEYWORD CIRI PER LEVEL
    // ============================================================
    
    // LEVEL 0: HOMEPAGE
    const HOME_KEYWORDS = ['beranda', 'home', 'halaman utama', 'homepage', 'index'];
    
    // LEVEL 1: PILLAR (Informasional 90%) - untuk konten edukasi umum
    const PILLAR_INFORMATIONAL_KEYWORDS = [
        'panduan', 'panduan lengkap', 'cara', 'tips', 'tips dan trik',
        'apa itu', 'pengertian', 'definisi', 'edukasi', 'belajar', 
        'tutorial', 'materi', 'penjelasan', 'kenapa', 'mengapa',
        'bagaimana', 'contoh', 'rekomendasi', 'lengkap', 'komprehensif'
    ];
    
    // LEVEL 2: SUB-PILLAR TIPE 2 (Jenis/Macam/Daftar)
    const SP2_KEYWORDS = [
        'jenis', 'jenis-jenis', 'macam', 'macam-macam', 'tipe', 
        'kategori', 'ragam', 'berbagai', 'klasifikasi', 'golongan',
        'daftar', 'list', 'koleksi', 'varian'
    ];
    
    // LEVEL 3: SUB-PILLAR TIPE 1 (Perbandingan)
    const SP1_KEYWORDS = [
        'vs', 'versus', 'perbandingan', 'bandingkan', 'dibanding',
        'lebih baik', 'mana yang', 'kelebihan', 'kekurangan',
        'perbedaan', 'beda', 'persamaan', 'sama', 'unggul',
        'lebih unggul', 'lebih bagus', 'lebih tahan', 'lebih awet',
        'lebih murah', 'lebih mahal', 'lebih hemat', 'lebih efisien'
    ];
    
    // LEVEL 4-6: MONEY KEYWORDS
    const MONEY_KEYWORDS = ['harga', 'biaya', 'tarif', 'sewa', 'rental'];
    
    // LEVEL 7: VARIANT
    const VARIANT_KEYWORDS = [
        'spesifikasi', 'ukuran', 'tipe', 'type', 'model', 
        'varian', 'warna', 'merk', 'brand', 'kapasitas', 
        'dimensi', 'bahan', 'material', 'finishing', 'grade',
        'seri', 'serie', 'versi', 'generasi', 'detail teknis'
    ];
    
    // ============================================================
    // 6. LOCATION WHITELIST
    // ============================================================
    const LOCATION_WHITELIST = new Set([
        'jakarta', 'bogor', 'depok', 'tangerang', 'bekasi', 'jabodetabek',
        'jakpus', 'jakbar', 'jaksel', 'jakut', 'jaktim', 'tangsel',
        'bandung', 'cimahi', 'cirebon', 'tasikmalaya', 'sukabumi', 'garut',
        'semarang', 'solo', 'surakarta', 'yogyakarta', 'jogja', 'magelang',
        'surabaya', 'malang', 'kediri', 'blitar', 'madiun', 'gresik', 'sidoarjo',
        'medan', 'binjai', 'deli serdang', 'padang', 'pekanbaru', 'batam',
        'palembang', 'bandar lampung', 'pontianak', 'balikpapan', 'samarinda',
        'banjarmasin', 'makassar', 'manado', 'palu', 'denpasar', 'bali', 'mataram'
    ]);
    
    const PRODUCT_BLACKLIST = new Set([
        'baja', 'ringan', 'galvalum', 'spandek', 'bondek', 'hebel', 'bata',
        'pasang', 'service', 'kontraktor', 'renovasi', 'borongan',
        'kayu', 'besi', 'aluminium', 'kaca', 'semen', 'pasir', 'batu',
        'hpl', 'mdf', 'jati', 'mahoni', 'multiplek', 'triplek'
    ]);
    
    function isLocation(text) {
        const lowerText = text.toLowerCase();
        const words = lowerText.split(/[\s,-]+/);
        
        for (const word of words) {
            if (LOCATION_WHITELIST.has(word)) return true;
            if (PRODUCT_BLACKLIST.has(word)) return false;
        }
        
        const hasIndicator = /di |ke |kota |wilayah |daerah /.test(lowerText);
        if (!hasIndicator) return false;
        
        for (const word of words) {
            if (word.length >= 4 && word.length <= 12 && /[aiueo]{2,}/.test(word)) {
                if (!PRODUCT_BLACKLIST.has(word)) return true;
            }
        }
        return false;
    }
    
    // ============================================================
    // 7. SPECIFIC PRODUCT & SUB-VARIANT DETECTION
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
    
    function isSubVariant(text) {
        const lowerText = text.toLowerCase();
        let score = 0;
        
        if (/(\d+(\.\d+)?\s*mm\s*x\s*\d+(\.\d+)?\s*mm\s*x\s*\d+(\.\d+)?\s*mm)/i.test(lowerText)) score++;
        if (/(\d+(\.\d+)?\s*cm\s*x\s*\d+(\.\d+)?\s*cm\s*x\s*\d+(\.\d+)?\s*cm)/i.test(lowerText)) score++;
        if (lowerText.includes('tebal') && lowerText.includes('panjang') && lowerText.includes('lebar')) score++;
        
        const dimensions = lowerText.match(/\d+(\.\d+)?\s*(mm|cm|m|ton|kg|liter)/gi) || [];
        if (dimensions.length >= 3) score++;
        if (lowerText.includes('kapasitas') && dimensions.length >= 2) score++;
        
        const hasMultipleX = (lowerText.match(/x/g) || []).length >= 2;
        const hasManyNumbers = (lowerText.match(/\d+/g) || []).length >= 3;
        if (hasMultipleX && hasManyNumbers) score++;
        
        return score >= 2;
    }
    
    // ============================================================
    // 8. INTENT VALIDATION
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
    // 9. EVERGREEN STATUS
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
            if (isSewaEntity()) return { evergreen: false, wajibTahun: false };
            return { evergreen: false, wajibTahun: true };
        }
        if (['money-page', 'money-child'].includes(pageType)) {
            if (isJasaEntity() || isSewaEntity()) return { evergreen: false, wajibTahun: false };
            return { evergreen: false, wajibTahun: true };
        }
        return { evergreen: true, wajibTahun: false };
    }
    
    // ============================================================
    // 10. DETEKSI HOMEPAGE
    // ============================================================
    function isHomePage() {
        const url = window.location.href.toLowerCase();
        const path = url.replace(/https?:\/\/[^\/]+/, '');
        const isRoot = path === '' || path === '/' || path === '/index.html' || path === '/home';
        
        if (isRoot) return true;
        
        const h1 = (document.querySelector("h1")?.innerText || "").toLowerCase();
        const title = document.title.toLowerCase();
        
        return HOME_KEYWORDS.some(kw => h1 === kw || title === kw);
    }
    
    // ============================================================
    // 11. PAGE TYPE DETECTION (PRIORITAS LENGKAP DENGAN URL CLEAN) 🔥
    // ============================================================
    function detectPageType(pageName, isHome = false, entityTypeParam = null, isFromUrl = false) {
        const useEntityType = entityTypeParam || entityType;
        let lowerName = pageName.toLowerCase();
        
        // PRIORITAS 0: HOMEPAGE
        if (isHome || HOME_KEYWORDS.includes(lowerName)) {
            console.log(`  🏠 HOMEPAGE detected → home (L0)`);
            return 'home';
        }
        
        // ============================================================
        // PRIORITAS 1: ENTITY PILLAR 🔥
        // ============================================================
        const pillarKeywords = ENTITY_PILLAR_KEYWORDS[useEntityType] || [];
        for (const kw of pillarKeywords) {
            if (lowerName === kw || 
                lowerName.startsWith(kw + ' ') || 
                lowerName.includes(' ' + kw + ' ') ||
                lowerName.endsWith(' ' + kw)) {
                console.log(`  🏛️ ENTITY PILLAR detected: "${kw}" → pillar (L1)`);
                return 'pillar';
            }
        }
        
        // ============================================================
        // PRIORITAS 2: INFORMASIONAL KEYWORDS → PILLAR atau SP2
        // ============================================================
        for (const kw of PILLAR_INFORMATIONAL_KEYWORDS) {
            if (lowerName.includes(kw)) {
                for (const sp2kw of SP2_KEYWORDS) {
                    if (lowerName.includes(sp2kw)) {
                        console.log(`  📚 SP2 detected (${kw} + ${sp2kw}) → sub-pillar-tipe-2 (L2)`);
                        return 'sub-pillar-tipe-2';
                    }
                }
                console.log(`  🏛️ PILLAR detected (${kw}) → pillar (L1)`);
                return 'pillar';
            }
        }
        
        // ============================================================
        // PRIORITAS 3: PERBANDINGAN (SP1)
        // ============================================================
        for (const kw of SP1_KEYWORDS) {
            if (lowerName.includes(kw)) {
                console.log(`  ⚖️ SP1 detected (${kw}) → sub-pillar-tipe-1 (L3)`);
                return 'sub-pillar-tipe-1';
            }
        }
        
        // ============================================================
        // PRIORITAS 4: JENIS/MACAM/DAFTAR (SP2)
        // ============================================================
        for (const kw of SP2_KEYWORDS) {
            if (lowerName.startsWith(kw) || lowerName.includes(kw + ' ') || lowerName.includes(kw + '-')) {
                console.log(`  📚 SP2 detected (${kw}) → sub-pillar-tipe-2 (L2)`);
                return 'sub-pillar-tipe-2';
            }
        }
        
        // ============================================================
        // PRIORITAS 5: MONEY LEVEL (HARGA/SEWA) - BERDASARKAN URL CLEAN 🔥
        // ============================================================
        for (const kw of MONEY_KEYWORDS) {
            if (lowerName.includes(kw)) {
                console.log(`  💰 Money keyword detected: ${kw} (from ${isFromUrl ? 'URL' : 'title/H1'})`);
                
                if (isJasaEntity()) {
                    console.log(`  → JASA + harga → money-page (L5)`);
                    return 'money-page';
                }
                
                // Ekstrak setelah keyword
                let afterKw = '';
                const kwIndex = lowerName.indexOf(kw);
                afterKw = lowerName.substring(kwIndex + kw.length).trim();
                
                // Ambil maksimal 5 kata pertama (bersihkan dari tahun)
                afterKw = afterKw.replace(/\b\d{4}\b/g, '').replace(/\s+/g, ' ').trim();
                const words = afterKw.split(/\s+/).filter(w => w.length > 0);
                const first5Words = words.slice(0, 5);
                afterKw = first5Words.join(' ');
                const wordCount = first5Words.length;
                
                console.log(`  → After keyword (first 5 words): "${afterKw}" | Words: ${wordCount}`);
                
                // CEK LOKASI (MONEY_CHILD)
                if (isLocation(afterKw)) {
                    console.log(`  → Location detected → money-child (L6)`);
                    return 'money-child';
                }
                
                // CEK SPESIFISITAS PRODUK
                const isSpecific = isSpecificProduct(afterKw, wordCount);
                
                // MONEY_MASTER: 1-2 kata ATAU 3 kata tapi masih umum
                if (wordCount <= 2 || (wordCount === 3 && !isSpecific)) {
                    console.log(`  → money-master (${wordCount} kata, specific=${isSpecific}) → money-master (L4)`);
                    return 'money-master';
                }
                
                // MONEY_PAGE: 4+ kata ATAU 3 kata tapi spesifik
                console.log(`  → money-page (${wordCount} kata, specific=${isSpecific}) → money-page (L5)`);
                return 'money-page';
            }
        }
        
        // ============================================================
        // PRIORITAS 6: JASA/SEWA (tanpa keyword harga & bukan entity pillar)
        // ============================================================
        if (isJasaEntity()) {
            const jasaKeywords = ['jasa', 'pasang', 'service', 'kontraktor', 'borongan', 
                                   'renovasi', 'bangun', 'konsultasi', 'survey', 'estimasi'];
            for (const kw of jasaKeywords) {
                if (lowerName.includes(kw)) {
                    // Double-check SP2
                    for (const sp2kw of SP2_KEYWORDS) {
                        if (lowerName.includes(sp2kw)) {
                            console.log(`  📚 JASA + SP2 (${sp2kw}) → sub-pillar-tipe-2 (L2)`);
                            return 'sub-pillar-tipe-2';
                        }
                    }
                    // Double-check perbandingan
                    for (const cmp of SP1_KEYWORDS) {
                        if (lowerName.includes(cmp)) {
                            console.log(`  ⚖️ JASA + perbandingan → sub-pillar-tipe-1 (L3)`);
                            return 'sub-pillar-tipe-1';
                        }
                    }
                    if (isLocation(lowerName)) {
                        console.log(`  → JASA + location → money-child (L6)`);
                        return 'money-child';
                    }
                    console.log(`  → JASA detected (specific service) → money-page (L5)`);
                    return 'money-page';
                }
            }
        }
        
        if (isSewaEntity()) {
            const sewaKeywords = ['sewa', 'rental', 'alat berat', 'excavator', 'bulldozer', 'crane'];
            for (const kw of sewaKeywords) {
                if (lowerName.includes(kw)) {
                    for (const sp2kw of SP2_KEYWORDS) {
                        if (lowerName.includes(sp2kw)) {
                            console.log(`  📚 SEWA + SP2 (${sp2kw}) → sub-pillar-tipe-2 (L2)`);
                            return 'sub-pillar-tipe-2';
                        }
                    }
                    for (const cmp of SP1_KEYWORDS) {
                        if (lowerName.includes(cmp)) {
                            console.log(`  ⚖️ SEWA + perbandingan → sub-pillar-tipe-1 (L3)`);
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
        // PRIORITAS 7: SUB-VARIANT
        // ============================================================
        if (isSubVariant(lowerName)) {
            console.log(`  🔬 SUB-VARIANT detected → sub-variant (L8)`);
            return 'sub-variant';
        }
        
        // ============================================================
        // PRIORITAS 8: VARIANT
        // ============================================================
        for (const kw of VARIANT_KEYWORDS) {
            if (lowerName.includes(kw)) {
                console.log(`  🔧 VARIANT detected (${kw}) → variant (L7)`);
                return 'variant';
            }
        }
        
        if (/\d+(\.\d+)?\s*(mm|cm|m|kg|ton)/.test(lowerName) && !lowerName.includes('x')) {
            console.log(`  🔧 VARIANT detected (single dimension) → variant (L7)`);
            return 'variant';
        }
        
        // ============================================================
        // DEFAULT: PILLAR
        // ============================================================
        console.log(`  🏛️ PILLAR (default) → pillar (L1)`);
        return 'pillar';
    }
    
    // ============================================================
    // 12. BUILD LEVELS FROM BREADCRUMB ITEMS
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
        
        const isHomePageName = (name.toLowerCase() === 'beranda' || name.toLowerCase() === 'home');
        const pageType = detectPageType(name, isHomePageName, entityType, false);
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
    // 13. VALIDASI HIERARKI
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
    // 14. JASA TIDAK BOLEH MONEY_MASTER
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
    // 15. FALLBACK URL
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
    // 16. SELECT LEVELS FOR BREADCRUMB (MAX 4 LEVELS)
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
    console.log(`📊 Breadcrumb Generator v5.6 — URL CLEAN DETECTION`);
    console.log(`📊 Entity Type: ${entityType}`);
    console.log(`📊 JASA Entity: ${isJasaEntity() ? 'YES' : 'NO'}`);
    console.log(`📊 SEWA Entity: ${isSewaEntity() ? 'YES' : 'NO'}`);
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
    
    // Level lainnya (prioritaskan level tertinggi yang unik)
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
    // 17. CURRENT PAGE - DETEKSI DARI URL CLEAN 🔥
    // ============================================================
    const currentFullUrl = currentUrl.startsWith('http') ? currentUrl : DOMAIN + currentUrl;
    
    // PRIORITAS: URL clean > mappingObj > parentTerdekat
    let currentPageTitle = getCleanPageNameFromUrl(currentFullUrl);
    
    if (!currentPageTitle || currentPageTitle === '') {
        if (mappingObj && mappingObj[currentUrl]) {
            currentPageTitle = mappingObj[currentUrl];
        } else if (parentTerdekat) {
            currentPageTitle = parentTerdekat.name;
        } else {
            currentPageTitle = 'Halaman';
        }
    }
    
    console.log(`\n🔍 CURRENT PAGE DETECTION:`);
    console.log(`   URL: ${currentFullUrl}`);
    console.log(`   Clean URL: "${currentPageTitle}"`);
    
    const isCurrentHome = (currentPageTitle.toLowerCase() === 'beranda' || currentPageTitle.toLowerCase() === 'home');
    // Deteksi dari URL clean (isFromUrl = true)
    const currentPageType = detectPageType(currentPageTitle, isCurrentHome, entityType, true);
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
        evergreen: currentEvergreen,
        fromUrl: true
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
        console.log(`   ${i+1}. ${icon} ${l.name} → ${l.type} (L${l.level})${l.fromUrl ? ' [from URL]' : ''}`);
    });
    
    console.log(`\n📊 CURRENT PAGE SUMMARY:`);
    console.log(`   Source: URL Clean`);
    console.log(`   Name: "${currentPageTitle}"`);
    console.log(`   Type: ${currentPageType} (L${TYPE_LEVEL_MAP[currentPageType] || '?'})`);
    console.log(`   Intent Detected: ${currentIntentDetected}`);
    console.log(`   Intent Valid: ${currentIntentValidation.valid ? '✅' : '❌'}`);
    console.log(`   Wajib Tahun di H1: ${currentEvergreen.wajibTahun ? `✅ WAJIB ${CURRENT_YEAR}` : '❌ TIDAK'}`);
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
    
    // Inject ke DOM
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
    script.textContent = JSON.stringify(jsonLd, null, 2);
    document.head.appendChild(script);
    
    console.log(`✅ Breadcrumb injected for entity: ${entityType}`);
    
    // ============================================================
    // 19. RETURN LENGKAP
    // ============================================================
    return {
        html: breadcrumbHtml,
        jsonLd: jsonLd,
        selectedLevels: selectedLevels,
        currentPageType: currentPageType,
        currentIntent: {
            required: getRequiredIntent(currentPageType),
            detected: currentIntentDetected,
            valid: currentIntentValidation.valid,
            message: currentIntentValidation.message
        },
        currentEvergreen: currentEvergreen,
        currentYear: CURRENT_YEAR,
        entityType: entityType,
        isValidType: true,
        version: '5.6'
    };
}

// ============================================================
// RINGKASAN HASIL DETEKSI v5.6
// ============================================================
/*
| URL | Clean Name | Hasil Deteksi | Level |
|-----|------------|---------------|-------|
| /jasa-konstruksi | jasa konstruksi | pillar | L1 ✅ |
| /sewa-alat-konstruksi | sewa alat konstruksi | pillar | L1 ✅ |
| /produk-konstruksi | produk konstruksi | pillar | L1 ✅ |
| /material-konstruksi | material konstruksi | pillar | L1 ✅ |
| /harga-sewa-alat-proyek | harga sewa alat proyek | money-master | L4 ✅ |
| /harga-sewa-excavator-mini | harga sewa excavator mini | money-page | L5 ✅ |
| /harga-sewa-alat-jakarta | harga sewa alat jakarta | money-child | L6 ✅ |
| /jenis-jasa-konstruksi | jenis jasa konstruksi | sub-pillar-tipe-2 | L2 ✅ |
| /daftar-jasa-konstruksi | daftar jasa konstruksi | sub-pillar-tipe-2 | L2 ✅ |
| /perbandingan-jasa-konstruksi | perbandingan jasa konstruksi | sub-pillar-tipe-1 | L3 ✅ |
*/
// Menyimpan elemen yang dihapus dalam variabel
let removedElementsJasaPondasiPerkuatanTanahKonsPost = {};
// Fungsi untuk menghapus elemen berdasarkan ID
function removeCondition(conditionId) {
    const conditionElement = document.getElementById(conditionId);

    if (conditionElement) {
        // Menyimpan elemen yang dihapus dalam objek untuk bisa dikembalikan
        removedElementsJasaPondasiPerkuatanTanahKonsPost[conditionId] = conditionElement;
        conditionElement.remove(); // Menghapus elemen tersebut
    }
}

// Fungsi untuk mengembalikan elemen yang telah dihapus
function restoreCondition(conditionId) {
    const breadcrumb = document.querySelector('.breadcrumb');
    const elementToRestore = removedElementsJasaPondasiPerkuatanTanahKonsPost[conditionId]; // Mendapatkan elemen yang disimpan

    if (elementToRestore) {
        breadcrumb.appendChild(elementToRestore); // Menambahkan elemen kembali ke dalam breadcrumb
        delete removedElementsJasaPondasiPerkuatanTanahKonsPost[conditionId]; // Menghapus elemen dari objek setelah dikembalikan
    } else {
        console.log(`Elemen dengan ID ${conditionId} tidak ditemukan di removedElementsJasaPondasiPerkuatanTanahKonsPost.`);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    // var currentUrl = window.location.href;
     //const cleanUrl = currentUrl.split('?')[0]; // Menghapus parameter seperti ?m=1
    const cleanUrlJasaPondasiPerkuatanTanahKonsPost = window.location.href.split(/[?#]/)[0]; // Menghilangkan parameter seperti ?m=1

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
		urlMappingJasaPondasi,
		urlMappingJasaPondasiCakarAyam,
		urlMappingJasaPondasiTapak,
		urlMappingJasaPondasiTiangPancang,
		urlMappingJasaPondasiSumuran		
    );
   
    // --- validasi URL terdaftar ---
    if (!urlMappingGabungan[cleanUrlJasaPondasiPerkuatanTanahKonsPost]) {
      console.log(`[HybridDateModified] URL tidak terdaftar: ${cleanUrlJasaPondasiPerkuatanTanahKonsPost}`);
      return;
    }

  // === Tanggal nextUpdate1 global ===
		const globalNextUpdate1 = "2026-02-08T00:00:00.000Z";
	console.log(`🌐 [AutoMeta] Detected jasa-konstruksi-pondasi-perkuatan-tanah-post : ${cleanUrlJasaPondasiPerkuatanTanahKonsPost}`);

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

    const hash = stableHash(cleanUrlJasaPondasiPerkuatanTanahKonsPost);
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
	
	console.log("✅ AEDMetaDates updated jasa-konstruksi-pondasi-perkuatan-tanah-post:", window.AEDMetaDates);
    console.log(`✅ [HybridDateModified v2.5] ${cleanUrlJasaPondasiPerkuatanTanahKonsPost} → ${isoDate} | type=${type || "-"}`);

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
		urlMappingJasaPondasiFromSub2MoneyPage,
		urlMappingJasaPondasiCakarAyamFromSub2MoneyPage,
		urlMappingJasaPondasiTapakFromSub2MoneyPage,
		urlMappingJasaPondasiTiangPancangFromSub2MoneyPage,
		urlMappingJasaPondasiSumuranFromSub2MoneyPage		
    );
   
    // --- validasi URL terdaftar ---
    if (!urlMappingGabungan[cleanUrlJasaPondasiPerkuatanTanahKonsPost]) {
      console.log(`[HybridDateModified] URL tidak terdaftar: ${cleanUrlJasaPondasiPerkuatanTanahKonsPost}`);
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
		    await loadEvergreenScript("2026-01-21T10:30:00+07:00");
		
		    // ✔ AUTO MODE
		    // await loadEvergreenScript();
		
		  } catch (err) {
		    console.error("[HybridDateModified] Fatal:", err);
		  }
		})();
     // Menemukan elemen menggunakan Id
    var JasaKonsPondasiTanahPost = document.getElementById("JasaKonsPondasiTanahPost");

    if (!JasaKonsPondasiTanahPost) {
        console.error("elemen Id JasaKonsPondasiTanahPost kondisi terhapus");
        return;
    }
    
     var JasaKonstruksiPondasiTanahSubPostLink = document.getElementById("JasaKonstruksiPondasiTanahSubPost");
     var JasaPondasiTanahSubPostLink = document.getElementById("JasaPondasiTanahSubPost");

     //SUB Jasa Pondasi Tanah
     var JasaPondasiBangunanSubPostLink = document.getElementById("JasaPondasiBangunanSubPost");
     var JasaPemadatanPersiapanPondasiSubPostLink = document.getElementById("JasaPemadatanPersiapanPondasiSubPost");
     var JasaPerkuatanTanahSubPostLink = document.getElementById("JasaPerkuatanTanahSubPost");
     var JasaRetrofittingPondasiSubPostLink = document.getElementById("JasaRetrofittingPondasiSubPost");
	
    //SUB JasaPondasiBangunanSubPost
     var JasaPondasiCakarAyamPostLink = document.getElementById("JasaPondasiCakarAyamPost");
     var JasaPondasiTapakPostLink = document.getElementById("JasaPondasiTapakPost");
    // var JasaPondasiBoredPilePostLink = document.getElementById("JasaPondasiBoredPilePost");
     var JasaPondasiTiangPancangPostLink = document.getElementById("JasaPondasiTiangPancangPost");
     var JasaPondasiSumuranPostLink = document.getElementById("JasaPondasiSumuranPost");
	
     var pageNameJasaKonsPondasiTanahPost = document.getElementById("pageNameJasaKonsPondasiTanahPost");
    

     // Default untuk menyembunyikan elemen
     JasaKonstruksiPondasiTanahSubPostLink.style.visibility = 'hidden';
     JasaPondasiTanahSubPost.style.visibility = 'hidden';
	
     //SUB PONDASI TANAH
     JasaPondasiBangunanSubPostLink.style.visibility = 'hidden';
     JasaPemadatanPersiapanPondasiSubPostLink.style.visibility = 'hidden';
     JasaPerkuatanTanahSubPostLink.style.visibility = 'hidden';
     JasaRetrofittingPondasiSubPostLink.style.visibility = 'hidden';

    //SUB JasaPondasiBangunanSubPost
     JasaPondasiCakarAyamPostLink.style.visibility = 'hidden';
     JasaPondasiTapakPostLink.style.visibility = 'hidden';
     //JasaPondasiBoredPilePostLink.style.visibility = 'hidden';
     JasaPondasiTiangPancangPostLink.style.visibility = 'hidden';
     JasaPondasiSumuranPostLink.style.visibility = 'hidden';
	
     pageNameJasaKonsPondasiTanahPost.textContent = "";
	
    //SUB urlMappingBangunan
if (urlMappingJasaPondasiFromSub2MoneyPage[cleanUrlJasaPondasiPerkuatanTanahKonsPost]) {
        restoreCondition('JasaKonsPondasiTanahPost');
        restoreCondition('JasaPondasiBangunanSubPost');
        //restoreCondition('JasaPondasiCakarAyamPost');
     
        //hapus elemen div id lain
	removeCondition('JasaDesInPost');
	removeCondition('ProdukInFurPost');
	removeCondition('ProdukKonsSaluranPost');
        removeCondition('ProdukKonsPembatasPost');
	    removeCondition('ProdukKonsDindingModularPost');
        removeCondition('ProdukKonsPost');
        removeCondition('MaterialKonsStukturPost');
        removeCondition('MaterialKonsFasadPelapisEksteriorPost');
        removeCondition('JasaKonsPerkuatanTanahLongsorPost');
	removeCondition('MaterialKonsAtapPenutupPost');
        removeCondition('JasaKonsPembatasPost');
        removeCondition('JasaKonsPerbaikanPost');
	removeCondition('JasaKonsCuttingBetonPost');
	removeCondition('JasaKonsBongkarBangunanPost');
        removeCondition('JasaKonsPengeboranPost');
        removeCondition('JasaKonsFinishingPost');
        removeCondition('JasaKonsStrukturPost');
        removeCondition('JasaKonsAlatKonstruksiPost');
        removeCondition('JasaKonsJalanPerkerasanPost');
	
	/*
        removeCondition('materialKonsReadymix');
        removeCondition('ProdukKonsSaluranPost');
        removeCondition('ProdukKonsPembatasPost');
        removeCondition('JasaKonsPerbaikan');
       	removeCondition('JasaKons');
       	removeCondition('JasaKonsSub');
       	removeCondition('MenuKons');
       	removeCondition('JasaKonsFinishing');
        removeCondition('JasaKonsStruktur');
        removeCondition('JasaKonsPembatas');
        removeCondition('JasaKonsPembatasPost');
        removeCondition('JasaKonsPerkuatanTanahLongsorPost');
*/

        //hapus elemen SUB jasa pembatas lain selain JasaPondasiBangunanSubPost
        removeCondition('JasaPemadatanPersiapanPondasiSubPost');
        removeCondition('JasaPerkuatanTanahSubPost');
        removeCondition('JasaRetrofittingPondasiSubPost');

	 //hapus elemen sub JasaPembuatanPagarDindingPembatas SEMUA
	removeCondition('JasaPondasiCakarAyamPost');
        removeCondition('JasaPondasiTapakPost');
        
	removeCondition('JasaPondasiTiangPancangPost');
	removeCondition('JasaPondasiSumuranPost');
	/*
 JasaPondasiBangunanSubPostLink.style.visibility = 'hidden';
     JasaPemadatanPersiapanPondasiSubPostLink.style.visibility = 'hidden';
     JasaPerkuatanTanahSubPostLink.style.visibility = 'hidden';
     JasaRetrofittingPondasiSubPostLink.style.visibility = 'hidden';
*/
       
        JasaKonstruksiPondasiTanahSubPostLink.style.visibility = 'visible';
        JasaPondasiTanahSubPostLink.style.visibility = 'visible';
	//TAMPILKAN PONDASI BANGUNAN
        JasaPondasiBangunanSubPostLink.style.visibility = 'visible';
	//TAMPILKAN JasaPondasiCakarAyam
       // JasaPondasiCakarAyamPostLink.style.visibility = 'visible';
        pageNameJasaKonsPondasiTanahPost.textContent = urlMappingJasaPondasiFromSub2MoneyPage[cleanUrlJasaPondasiPerkuatanTanahKonsPost];
    }
// ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaPondasiFromSub2MoneyPage[cleanUrlJasaPondasiPerkuatanTanahKonsPost]) {
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
                   "name": urlMappingJasaPondasiFromSub2MoneyPage[cleanUrlJasaPondasiPerkuatanTanahKonsPost],
                   "item": cleanUrlJasaPondasiPerkuatanTanahKonsPost
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
if (urlMappingJasaPondasiCakarAyamFromSub2MoneyPage[cleanUrlJasaPondasiPerkuatanTanahKonsPost]) {
        restoreCondition('JasaKonsPondasiTanahPost');
        restoreCondition('JasaPondasiBangunanSubPost');
        restoreCondition('JasaPondasiCakarAyamPost');
     
        //hapus elemen div id lain
	removeCondition('JasaDesInPost');
	removeCondition('ProdukInFurPost');
	removeCondition('ProdukKonsSaluranPost');
        removeCondition('ProdukKonsPembatasPost');
	    removeCondition('ProdukKonsDindingModularPost');
        removeCondition('ProdukKonsPost');
        removeCondition('MaterialKonsStukturPost');
        removeCondition('MaterialKonsFasadPelapisEksteriorPost');
        removeCondition('JasaKonsPerkuatanTanahLongsorPost');
	removeCondition('MaterialKonsAtapPenutupPost');
        removeCondition('JasaKonsPembatasPost');
        removeCondition('JasaKonsPerbaikanPost');
	removeCondition('JasaKonsCuttingBetonPost');
	removeCondition('JasaKonsBongkarBangunanPost');
        removeCondition('JasaKonsPengeboranPost');
        removeCondition('JasaKonsFinishingPost');
        removeCondition('JasaKonsStrukturPost');
        removeCondition('JasaKonsAlatKonstruksiPost');
        removeCondition('JasaKonsJalanPerkerasanPost');
	
	/*
        removeCondition('materialKonsReadymix');
        removeCondition('ProdukKonsSaluranPost');
        removeCondition('ProdukKonsPembatasPost');
        removeCondition('JasaKonsPerbaikan');
       	removeCondition('JasaKons');
       	removeCondition('JasaKonsSub');
       	removeCondition('MenuKons');
       	removeCondition('JasaKonsFinishing');
        removeCondition('JasaKonsStruktur');
        removeCondition('JasaKonsPembatas');
        removeCondition('JasaKonsPembatasPost');
        removeCondition('JasaKonsPerkuatanTanahLongsorPost');
*/

        //hapus elemen SUB jasa pembatas lain selain JasaPondasiBangunanSubPost
        removeCondition('JasaPemadatanPersiapanPondasiSubPost');
        removeCondition('JasaPerkuatanTanahSubPost');
        removeCondition('JasaRetrofittingPondasiSubPost');

	 //hapus elemen sub JasaPembuatanPagarDindingPembatas SELAIN JasaPondasiCakarAyamPost
        removeCondition('JasaPondasiTapakPost');
         
	removeCondition('JasaPondasiTiangPancangPost');
	removeCondition('JasaPondasiSumuranPost');
	/*
 JasaPondasiBangunanSubPostLink.style.visibility = 'hidden';
     JasaPemadatanPersiapanPondasiSubPostLink.style.visibility = 'hidden';
     JasaPerkuatanTanahSubPostLink.style.visibility = 'hidden';
     JasaRetrofittingPondasiSubPostLink.style.visibility = 'hidden';
*/
       
        JasaKonstruksiPondasiTanahSubPostLink.style.visibility = 'visible';
        JasaPondasiTanahSubPostLink.style.visibility = 'visible';
	//TAMPILKAN PONDASI BANGUNAN
        JasaPondasiBangunanSubPostLink.style.visibility = 'visible';
	//TAMPILKAN JasaPondasiCakarAyam
        JasaPondasiCakarAyamPostLink.style.visibility = 'visible';
        pageNameJasaKonsPondasiTanahPost.textContent = urlMappingJasaPondasiCakarAyamFromSub2MoneyPage[cleanUrlJasaPondasiPerkuatanTanahKonsPost];
    }
    
// ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaPondasiCakarAyamFromSub2MoneyPage[cleanUrlJasaPondasiPerkuatanTanahKonsPost]) {
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
                   "name": "Jasa Pondasi Cakar Ayam",
                   "item": "https://www.betonjayareadymix.com/p/jasa-pondasi-cakar-ayam.html"
               },
               {
                   "@type": "ListItem",
                   "position": 6,
                   "name": urlMappingJasaPondasiCakarAyamFromSub2MoneyPage[cleanUrlJasaPondasiPerkuatanTanahKonsPost],
                   "item": cleanUrlJasaPondasiPerkuatanTanahKonsPost
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
	
    if (urlMappingJasaPondasiTapakFromSub2MoneyPage[cleanUrlJasaPondasiPerkuatanTanahKonsPost]) {
        restoreCondition('JasaKonsPondasiTanahPost');
        restoreCondition('JasaPondasiBangunanSubPost');
        restoreCondition('JasaPondasiTapakPost');
     
        //hapus elemen div id lain
	removeCondition('JasaDesInPost');
	removeCondition('ProdukInFurPost');
        removeCondition('ProdukKonsSaluranPost');
        removeCondition('ProdukKonsPembatasPost');
	    removeCondition('ProdukKonsDindingModularPost');
        removeCondition('ProdukKonsPost');
        removeCondition('MaterialKonsStukturPost');
        removeCondition('MaterialKonsFasadPelapisEksteriorPost');
	removeCondition('MaterialKonsAtapPenutupPost');
        removeCondition('JasaKonsPerkuatanTanahLongsorPost');
        removeCondition('JasaKonsPembatasPost');
        removeCondition('JasaKonsPerbaikanPost');
	removeCondition('JasaKonsCuttingBetonPost');
	removeCondition('JasaKonsBongkarBangunanPost');
        removeCondition('JasaKonsPengeboranPost');
        removeCondition('JasaKonsFinishingPost');
        removeCondition('JasaKonsStrukturPost');
        removeCondition('JasaKonsAlatKonstruksiPost');
        removeCondition('JasaKonsJalanPerkerasanPost');

        //hapus elemen SUB jasa pembatas lain
        removeCondition('JasaPemadatanPersiapanPondasiSubPost');
        removeCondition('JasaPerkuatanTanahSubPost');
        removeCondition('JasaRetrofittingPondasiSubPost');

	 //hapus elemen sub JasaPembuatanPagarDindingPembatas SELAIN JasaPagarPanelBeton
        removeCondition('JasaPondasiCakarAyamPost');
         
	removeCondition('JasaPondasiTiangPancangPost');
	removeCondition('JasaPondasiSumuranPost');
	/*
 JasaPondasiBangunanSubPostLink.style.visibility = 'hidden';
     JasaPemadatanPersiapanPondasiSubPostLink.style.visibility = 'hidden';
     JasaPerkuatanTanahSubPostLink.style.visibility = 'hidden';
     JasaRetrofittingPondasiSubPostLink.style.visibility = 'hidden';
*/
       
        JasaKonstruksiPondasiTanahSubPostLink.style.visibility = 'visible';
        JasaPondasiTanahSubPostLink.style.visibility = 'visible';
	//TAMPILKAN PONDASI BANGUNAN
        JasaPondasiBangunanSubPostLink.style.visibility = 'visible';
	//TAMPILKAN JasaPondasiCakarAyam
        JasaPondasiTapakPostLink.style.visibility = 'visible';
        pageNameJasaKonsPondasiTanahPost.textContent = urlMappingJasaPondasiTapakFromSub2MoneyPage[cleanUrlJasaPondasiPerkuatanTanahKonsPost];
    }

// ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaPondasiTapakFromSub2MoneyPage[cleanUrlJasaPondasiPerkuatanTanahKonsPost]) {
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
                   "name": "Jasa Pondasi Tapak",
                   "item": "https://www.betonjayareadymix.com/p/jasa-pondasi-tapak.html"
               },
               {
                   "@type": "ListItem",
                   "position": 6,
                   "name": urlMappingJasaPondasiTapakFromSub2MoneyPage[cleanUrlJasaPondasiPerkuatanTanahKonsPost],
                   "item": cleanUrlJasaPondasiPerkuatanTanahKonsPost
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
 
if (urlMappingJasaPondasiTiangPancangFromSub2MoneyPage[cleanUrlJasaPondasiPerkuatanTanahKonsPost]) {
        restoreCondition('JasaKonsPondasiTanahPost');
        restoreCondition('JasaPondasiBangunanSubPost');
        restoreCondition('JasaPondasiTiangPancangPost');
     
        //hapus elemen div id lain
	removeCondition('JasaDesInPost');
	removeCondition('ProdukInFurPost');
        removeCondition('ProdukKonsSaluranPost');
        removeCondition('ProdukKonsPembatasPost');
	    removeCondition('ProdukKonsDindingModularPost');
        removeCondition('ProdukKonsPost');
        removeCondition('MaterialKonsStukturPost');
        removeCondition('MaterialKonsFasadPelapisEksteriorPost');
        removeCondition('MaterialKonsAtapPenutupPost');
        removeCondition('JasaKonsPerkuatanTanahLongsorPost');
        removeCondition('JasaKonsPembatasPost');
        removeCondition('JasaKonsPerbaikanPost');
	removeCondition('JasaKonsCuttingBetonPost');
	removeCondition('JasaKonsBongkarBangunanPost');
        removeCondition('JasaKonsPengeboranPost');
        removeCondition('JasaKonsFinishingPost');
        removeCondition('JasaKonsStrukturPost');
        removeCondition('JasaKonsAlatKonstruksiPost');
        removeCondition('JasaKonsJalanPerkerasanPost');
	
        //hapus elemen SUB jasa pembatas lain
        removeCondition('JasaPemadatanPersiapanPondasiSubPost');
        removeCondition('JasaPerkuatanTanahSubPost');
        removeCondition('JasaRetrofittingPondasiSubPost');

	 //hapus elemen sub JasaPembuatanPagarDindingPembatas SELAIN JasaPagarPanelBeton
        removeCondition('JasaPondasiTapakPost');
         
	removeCondition('JasaPondasiCakarAyamPost');
	removeCondition('JasaPondasiSumuranPost');
	/*
 JasaPondasiBangunanSubPostLink.style.visibility = 'hidden';
     JasaPemadatanPersiapanPondasiSubPostLink.style.visibility = 'hidden';
     JasaPerkuatanTanahSubPostLink.style.visibility = 'hidden';
     JasaRetrofittingPondasiSubPostLink.style.visibility = 'hidden';
*/
       
        JasaKonstruksiPondasiTanahSubPostLink.style.visibility = 'visible';
        JasaPondasiTanahSubPostLink.style.visibility = 'visible';
	//TAMPILKAN PONDASI BANGUNAN
        JasaPondasiBangunanSubPostLink.style.visibility = 'visible';
	//TAMPILKAN JasaPondasiCakarAyam
        JasaPondasiTiangPancangPostLink.style.visibility = 'visible';
        pageNameJasaKonsPondasiTanahPost.textContent = urlMappingJasaPondasiTiangPancangFromSub2MoneyPage[cleanUrlJasaPondasiPerkuatanTanahKonsPost];
   }
// ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaPondasiTiangPancangFromSub2MoneyPage[cleanUrlJasaPondasiPerkuatanTanahKonsPost]) {
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
                   "name": "Jasa Pondasi Tiang Pancang",
                   "item": "https://www.betonjayareadymix.com/p/jasa-pondasi-tiang-pancang.html"
               },
               {
                   "@type": "ListItem",
                   "position": 6,
                   "name": urlMappingJasaPondasiTiangPancangFromSub2MoneyPage[cleanUrlJasaPondasiPerkuatanTanahKonsPost],
                   "item": cleanUrlJasaPondasiPerkuatanTanahKonsPost
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
	
if (urlMappingJasaPondasiSumuranFromSub2MoneyPage[cleanUrlJasaPondasiPerkuatanTanahKonsPost]) {
        restoreCondition('JasaKonsPondasiTanahPost');
        restoreCondition('JasaPondasiBangunanSubPost');
        restoreCondition('JasaPondasiSumuranPost');
     
        //hapus elemen div id lain
	removeCondition('JasaDesInPost');
	removeCondition('ProdukInFurPost');
        removeCondition('ProdukKonsSaluranPost');
        removeCondition('ProdukKonsPembatasPost');
	    removeCondition('ProdukKonsDindingModularPost');
        removeCondition('ProdukKonsPost');
        removeCondition('MaterialKonsStukturPost');
        removeCondition('MaterialKonsFasadPelapisEksteriorPost');
        removeCondition('MaterialKonsAtapPenutupPost');
        removeCondition('JasaKonsPerkuatanTanahLongsorPost');
        removeCondition('JasaKonsPembatasPost');
        removeCondition('JasaKonsPerbaikanPost');
	removeCondition('JasaKonsCuttingBetonPost');
	removeCondition('JasaKonsBongkarBangunanPost');
        removeCondition('JasaKonsPengeboranPost');
        removeCondition('JasaKonsFinishingPost');
        removeCondition('JasaKonsStrukturPost');
        removeCondition('JasaKonsAlatKonstruksiPost');
        removeCondition('JasaKonsJalanPerkerasanPost');
	
        //hapus elemen SUB jasa pembatas lain
        removeCondition('JasaPemadatanPersiapanPondasiSubPost');
        removeCondition('JasaPerkuatanTanahSubPost');
        removeCondition('JasaRetrofittingPondasiSubPost');

	 //hapus elemen sub JasaPembuatanPagarDindingPembatas SELAIN JasaPagarPanelBeton
        removeCondition('JasaPondasiTapakPost');
         
	removeCondition('JasaPondasiTiangPancangPost');
	removeCondition('JasaPondasiCakarAyamPost');
	/*
 JasaPondasiBangunanSubPostLink.style.visibility = 'hidden';
     JasaPemadatanPersiapanPondasiSubPostLink.style.visibility = 'hidden';
     JasaPerkuatanTanahSubPostLink.style.visibility = 'hidden';
     JasaRetrofittingPondasiSubPostLink.style.visibility = 'hidden';
*/
       
        JasaKonstruksiPondasiTanahSubPostLink.style.visibility = 'visible';
        JasaPondasiTanahSubPostLink.style.visibility = 'visible';
	//TAMPILKAN PONDASI BANGUNAN
        JasaPondasiBangunanSubPostLink.style.visibility = 'visible';
	//TAMPILKAN JasaPondasiCakarAyam
        JasaPondasiSumuranPostLink.style.visibility = 'visible';
        pageNameJasaKonsPondasiTanahPost.textContent = urlMappingJasaPondasiSumuranFromSub2MoneyPage[cleanUrlJasaPondasiPerkuatanTanahKonsPost];
   }

// ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaPondasiSumuranFromSub2MoneyPage[cleanUrlJasaPondasiPerkuatanTanahKonsPost]) {
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
                   "name": "Jasa Pondasi Sumuran",
                   "item": "https://www.betonjayareadymix.com/p/jasa-pondasi-sumuran.html"
               },
               {
                   "@type": "ListItem",
                   "position": 6,
                   "name": urlMappingJasaPondasiSumuranFromSub2MoneyPage[cleanUrlJasaPondasiPerkuatanTanahKonsPost],
                   "item": cleanUrlJasaPondasiPerkuatanTanahKonsPost
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }

   });
