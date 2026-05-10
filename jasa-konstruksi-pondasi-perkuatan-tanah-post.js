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
 * generateBreadcrumbForMapping v4.1 — FIXED LOCATION DETECTION
 * ✅ FIX: "ringan", "baja", "pasang" TIDAK terdeteksi sebagai lokasi
 * ✅ FIX: JASA TIDAK BOLEH MONEY_MASTER (100% terblokir)
 * ✅ FIX: MONEY_MASTER vs MONEY_PAGE berdasarkan jumlah kata (≤2 = MASTER)
 * ✅ Support SEMUA ENTITY TYPE: PRODUK, MATERIAL, JASA, SEWA/RENTAL, ARTIKEL
 * ✅ PRIORITAS DETEKSI SESUAI PHASE 1
 * ✅ Breadcrumb tidak loncat level (auto fix)
 * ✅ MAX_LEVEL = 4 (termasuk Home)
 */

function generateBreadcrumbJasaKonstruksiPondasiPerkuatanTanahPost.js(mappingObj, currentUrl, breadcrumbItems = [], entityType = 'PRODUK_INTERIOR') {
    
    // ============================================================
    // 1. KONSTANTA & VALIDASI
    // ============================================================
    const MAX_LEVEL = 4;
    const DOMAIN = 'https://www.betonjayareadymix.com';
    
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
        'pillar',                    // Level 1
        'sub-pillar-tipe-2',         // Level 2
        'sub-pillar-tipe-1',         // Level 3
        'money-master',              // Level 4 (JASA DILARANG)
        'money-page',                // Level 5
        'money-child',               // Level 6
        'variant',                   // Level 7
        'sub-variant'                // Level 8
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
    
    function isProdukMaterialSewaArtikel() {
        return isProdukEntity() || isMaterialEntity() || isSewaEntity() || isArtikelEntity();
    }
    
    // ============================================================
    // 3. WHITELIST LOKASI (200+ KOTA)
    // ============================================================
    const LOCATION_WHITELIST = [
        // Jabodetabek
        'jakarta', 'bogor', 'depok', 'tangerang', 'bekasi', 'jabodetabek',
        'jakpus', 'jakbar', 'jaksel', 'jakut', 'jaktim',
        'tangerang selatan', 'tangsel', 'bintaro', 'alam sutera', 'gading serpong',
        // Jawa Barat
        'bandung', 'cimahi', 'cirebon', 'tasikmalaya', 'sukabumi', 'garut', 
        'sumedang', 'purwakarta', 'karawang', 'subang', 'indramayu',
        'majalengka', 'kuningan', 'ciamis', 'banjar', 'pangandaran', 'cianjur',
        // Jawa Tengah
        'semarang', 'solo', 'surakarta', 'yogyakarta', 'jogja', 'magelang', 
        'salatiga', 'pekalongan', 'tegal', 'brebes', 'cilacap', 'purwokerto', 
        'kebumen', 'banjarnegara', 'wonosobo', 'temanggung', 'kendal', 'demak', 
        'kudus', 'jepara', 'pati', 'rembang', 'blora', 'grobagan', 'sragen', 
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
    ];
    
    // BLACKLIST kata produk yang TIDAK boleh dianggap sebagai lokasi
    const PRODUCT_BLACKLIST_FOR_LOCATION = [
        // Material bangunan
        'baja', 'ringan', 'galvalum', 'spandek', 'bondek', 'hebel', 'bata', 
        'kayu', 'besi', 'aluminium', 'kaca', 'semen', 'pasir', 'batu', 'kerikil',
        'genteng', 'keramik', 'cat', 'pintu', 'jendela', 'kusen', 'atap', 'plafon',
        'gypsum', 'grbk', 'multiplek', 'triplek', 'blockboard', 'partikel',
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
    ];
    
    // ============================================================
    // 4. FUNGSI DETEKSI LOKASI (FIXED v4.1)
    // ============================================================
    function isLocation(text) {
        const lowerText = text.toLowerCase();
        const words = lowerText.split(/[\s,-]+/);
        
        console.log(`  🔍 isLocation check: "${text.substring(0, 50)}..."`);
        
        // PRIORITAS 1: Cek whitelist kota (lokasi valid)
        for (const word of words) {
            if (LOCATION_WHITELIST.includes(word)) {
                console.log(`  ✅ Location found (whitelist): "${word}"`);
                return true;
            }
        }
        
        // PRIORITAS 2: Jika kata ada di blacklist produk → BUKAN lokasi
        for (const word of words) {
            if (PRODUCT_BLACKLIST_FOR_LOCATION.includes(word)) {
                console.log(`  ❌ Not location (product blacklist): "${word}"`);
                return false;
            }
        }
        
        // PRIORITAS 3: Jika tidak ada indikator lokasi (di, ke, kota, wilayah) → BUKAN lokasi
        const hasLocationIndicator = lowerText.includes('di ') || 
                                      lowerText.includes('ke ') || 
                                      lowerText.includes('kota ') || 
                                      lowerText.includes('wilayah ') ||
                                      lowerText.includes('daerah ') ||
                                      lowerText.includes('kecamatan ');
        
        if (!hasLocationIndicator) {
            console.log(`  ❌ Not location (no indicator: di/kota/wilayah)`);
            return false;
        }
        
        // PRIORITAS 4: Deteksi dengan pola vokal (hanya jika ada indicator)
        for (const word of words) {
            // Skip kata pendek
            if (word.length < 4) continue;
            if (word.length > 12) continue;
            
            // Skip jika mengandung angka
            if (word.match(/[0-9]/)) continue;
            
            const vowelCount = (word.match(/[aiueo]/g) || []).length;
            if (vowelCount >= 2) {
                console.log(`  ✅ Location detected (vowel pattern + indicator): "${word}"`);
                return true;
            }
        }
        
        console.log(`  ❌ Not location (fallback)`);
        return false;
    }
    
    // ============================================================
    // 5. FUNGSI CEK PRODUK SPESIFIK
    // ============================================================
    const SPECIFIC_PRODUCT_INDICATORS = [
        'galvalum', 'spandek', 'bondek', 'hpl', 'mdf', 'jati', 'mahoni',
        'excavator', 'bulldozer', 'crane', 'dump truck', 'vibro', 'stamper',
        'minimix', 'jayamix', 'readymix', 'hebel', 'bata ringan', 'bata interlock',
        'multiplek', 'triplek', 'blockboard', 'gypsum', 'grc', 'grbk'
    ];
    
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
        if (/\d+(\.\d+)?\s*(mm|cm|m|inch|meter)/.test(lowerText)) return true;
        
        // Cek merk/tipe (minimal 2 kata)
        const words = lowerText.split(/\s+/);
        if (words.length >= 2) {
            const hasMerk = ['brand', 'merk', 'tipe', 'type', 'seri'].some(kw => lowerText.includes(kw));
            if (hasMerk) return true;
        }
        
        return false;
    }
    
    // ============================================================
    // 6. FUNGSI DETEKSI PAGE TYPE (PRIORITAS SESUAI PHASE 1)
    // ============================================================
    function detectPageType(pageName, position, totalLevels, entityTypeParam = null) {
        const lowerName = pageName.toLowerCase();
        const useEntityType = entityTypeParam || entityType;
        const isJasa = ['JASA_KONSTRUKSI', 'JASA_DESAIN_INTERIOR', 'JASA'].includes(useEntityType);
        const isSewa = ['SEWA', 'RENTAL', 'SEWA_RENTAL', 'SEWA_ALAT', 'RENTAL_ALAT'].includes(useEntityType);
        
        console.log(`🔍 Detecting: "${pageName}" | Entity: ${useEntityType} | Position: ${position}`);
        
        // ============================================================
        // PRIORITAS 1: PILLAR jika posisi pertama dan bukan satu-satunya
        // ============================================================
        if (position === 0 && totalLevels > 1) {
            console.log(`  → PILLAR (posisi pertama)`);
            return 'pillar';
        }
        
        // ============================================================
        // PRIORITAS 2: CEK INTENT KEYWORD (PANDUAN, CARA, TIPS, APA ITU)
        // ============================================================
        const informationalKeywords = ['panduan', 'cara ', 'tips ', 'apa itu', 'pengertian', 'edukasi'];
        for (const kw of informationalKeywords) {
            if (lowerName.includes(kw)) {
                if (lowerName.includes('jenis') || lowerName.includes('macam')) {
                    console.log(`  → SUB-PILLAR-TIPE-2 (jenis/macam)`);
                    return 'sub-pillar-tipe-2';
                }
                console.log(`  → PILLAR (informational keyword: ${kw})`);
                return 'pillar';
            }
        }
        
        // ============================================================
        // PRIORITAS 3: CEK KEYWORD HARGA/SEWA/BIAYA
        // ============================================================
        const hasPrice = lowerName.includes('harga ') || lowerName.includes('biaya ') || lowerName.includes('tarif ');
        const hasRent = lowerName.includes('sewa ') || lowerName.includes('rental ');
        
        if (hasPrice || hasRent) {
            console.log(`  → Price/rent keyword detected`);
            
            // 🔥 KRITIS: JASA TIDAK BOLEH MONEY_MASTER
            if (isJasa) {
                console.log(`  → JASA detected → MONEY-PAGE (forced, not master)`);
                return 'money-page';
            }
            
            // Ekstrak teks setelah keyword
            let afterKeyword = '';
            if (lowerName.includes('harga ')) afterKeyword = lowerName.substring(lowerName.indexOf('harga ') + 6);
            else if (lowerName.includes('biaya ')) afterKeyword = lowerName.substring(lowerName.indexOf('biaya ') + 6);
            else if (lowerName.includes('sewa ')) afterKeyword = lowerName.substring(lowerName.indexOf('sewa ') + 5);
            else if (lowerName.includes('rental ')) afterKeyword = lowerName.substring(lowerName.indexOf('rental ') + 7);
            
            afterKeyword = afterKeyword.trim();
            const wordCount = afterKeyword.split(/\s+/).filter(w => w.length > 0).length;
            
            console.log(`  → After keyword: "${afterKeyword.substring(0, 50)}" | Word count: ${wordCount}`);
            
            // CEK LOKASI (MONEY_CHILD) — PRIORITAS TERTINGGI
            if (isLocation(afterKeyword)) {
                console.log(`  → Location detected → MONEY-CHILD`);
                return 'money-child';
            }
            
            // CEK JUMLAH KATA
            // wordCount <= 2 → MONEY_MASTER (contoh: "harga bata ringan" = 2 kata)
            if (wordCount <= 2) {
                console.log(`  → ${wordCount} kata → MONEY-MASTER`);
                return 'money-master';
            }
            
            // wordCount >= 3 → cek apakah specific product
            if (isSpecificProduct(afterKeyword, wordCount)) {
                console.log(`  → ${wordCount} kata + specific product → MONEY-PAGE`);
                return 'money-page';
            }
            
            // Default untuk 3+ kata tanpa specific indicator → tetap MONEY_PAGE
            console.log(`  → ${wordCount} kata → MONEY-PAGE`);
            return 'money-page';
        }
        
        // ============================================================
        // PRIORITAS 4: CEK ENTITY TYPE KHUSUS (tanpa keyword harga)
        // ============================================================
        
        // JASA tanpa keyword harga
        if (isJasa) {
            const jasaKeywords = ['jasa', 'pasang', 'service', 'kontraktor', 'borongan', 
                                   'renovasi', 'bangun', 'konsultasi', 'survey', 'estimasi',
                                   'perbaiki', 'instalasi', 'pemasangan', 'pengerjaan'];
            for (const kw of jasaKeywords) {
                if (lowerName.includes(kw)) {
                    // Cek apakah mengandung lokasi
                    if (isLocation(lowerName)) {
                        console.log(`  → JASA + location → MONEY-CHILD`);
                        return 'money-child';
                    }
                    console.log(`  → JASA detected (no location) → MONEY-PAGE`);
                    return 'money-page';
                }
            }
        }
        
        // SEWA tanpa keyword harga
        if (isSewa) {
            const sewaKeywords = ['sewa', 'rental', 'lease', 'alat berat', 'excavator', 
                                   'bulldozer', 'crane', 'vibro', 'stamper', 'dump truck'];
            for (const kw of sewaKeywords) {
                if (lowerName.includes(kw)) {
                    if (isLocation(lowerName)) {
                        console.log(`  → SEWA + location → MONEY-CHILD`);
                        return 'money-child';
                    }
                    console.log(`  → SEWA detected → MONEY-PAGE`);
                    return 'money-page';
                }
            }
        }
        
        // ============================================================
        // PRIORITAS 5: SUB-VARIANT (level 8 - paling detail)
        // ============================================================
        if (/(\d+(\.\d+)?\s*mm\s*x\s*\d+(\.\d+)?\s*mm)/.test(lowerName) ||
            (lowerName.includes('tebal') && /\d+\s*mm/.test(lowerName) && lowerName.includes('x')) ||
            (lowerName.includes('ukuran') && lowerName.includes('panjang') && /\d+\s*m/.test(lowerName))) {
            console.log(`  → SUB-VARIANT (very detailed specs)`);
            return 'sub-variant';
        }
        
        // ============================================================
        // PRIORITAS 6: VARIANT (level 7)
        // ============================================================
        const variantKeywords = ['spesifikasi', 'ukuran', 'tipe ', 'type ', 'model', 
                                  'varian', 'warna', 'merk', 'kapasitas', 'dimensi'];
        for (const kw of variantKeywords) {
            if (lowerName.includes(kw)) {
                console.log(`  → VARIANT (${kw})`);
                return 'variant';
            }
        }
        
        if (/\d+(\.\d+)?\s*(mm|cm|m|kg|ton)/.test(lowerName) && !lowerName.includes('x')) {
            console.log(`  → VARIANT (dimension)`);
            return 'variant';
        }
        
        // ============================================================
        // PRIORITAS 7: SUB-PILLAR TIPE 1 (level 3 - perbandingan)
        // ============================================================
        const comparisonKeywords = [' vs ', 'versus', 'perbandingan', 'lebih baik', 
                                     'mana yang', 'kelebihan', 'kekurangan', 'perbedaan'];
        for (const kw of comparisonKeywords) {
            if (lowerName.includes(kw)) {
                console.log(`  → SUB-PILLAR-TIPE-1 (comparison: ${kw})`);
                return 'sub-pillar-tipe-1';
            }
        }
        
        // ============================================================
        // PRIORITAS 8: SUB-PILLAR TIPE 2 (level 2 - jenis/macam)
        // ============================================================
        if (lowerName.startsWith('jenis ') || lowerName.startsWith('macam ') || 
            lowerName.startsWith('tipe ') || lowerName.includes('jenis-jenis') || 
            lowerName.includes('macam-macam') || lowerName.includes('kategori ')) {
            console.log(`  → SUB-PILLAR-TIPE-2 (category listing)`);
            return 'sub-pillar-tipe-2';
        }
        
        // ============================================================
        // DEFAULT: PILLAR
        // ============================================================
        console.log(`  → PILLAR (default)`);
        return 'pillar';
    }
    
    // ============================================================
    // 7. INTENT DOMINANCE (SESUAI PHASE 1.5)
    // ============================================================
    function getIntentForPageType(pageType, entityTypeParam = null) {
        const useEntityType = entityTypeParam || entityType;
        const isJasa = ['JASA_KONSTRUKSI', 'JASA_DESAIN_INTERIOR', 'JASA'].includes(useEntityType);
        const isSewa = ['SEWA', 'RENTAL', 'SEWA_RENTAL', 'SEWA_ALAT', 'RENTAL_ALAT'].includes(useEntityType);
        
        const intentMap = {
            'pillar': { primary: 'informasional', secondary: 'komersial', dominance: 90 },
            'sub-pillar-tipe-2': { primary: 'informasional', secondary: 'komersial', dominance: 60 },
            'sub-pillar-tipe-1': { primary: 'komersial', secondary: 'informasional', dominance: 70 },
            'variant': { primary: 'komersial', secondary: 'informasional', dominance: 80 },
            'sub-variant': { primary: 'komersial', secondary: 'informasional', dominance: 70 }
        };
        
        if (intentMap[pageType]) return intentMap[pageType];
        
        // MONEY_MASTER
        if (pageType === 'money-master') {
            if (isJasa) return { primary: 'komersial', secondary: 'transaksional', dominance: 60 };
            if (isSewa) return { primary: 'transaksional', secondary: 'komersial', dominance: 80 };
            return { primary: 'transaksional', secondary: 'komersial', dominance: 80 };
        }
        
        // MONEY_PAGE
        if (pageType === 'money-page') {
            if (isJasa || isSewa) return { primary: 'komersial', secondary: 'transaksional', dominance: 60 };
            return { primary: 'transaksional', secondary: 'komersial', dominance: 85 };
        }
        
        // MONEY_CHILD
        if (pageType === 'money-child') {
            if (isJasa || isSewa) return { primary: 'komersial', secondary: 'transaksional', dominance: 60 };
            return { primary: 'transaksional', secondary: 'komersial', dominance: 90 };
        }
        
        return { primary: 'informasional', secondary: null, dominance: 50 };
    }
    
    // ============================================================
    // 8. EVERGREEN vs NON-EVERGREEN
    // ============================================================
    function getEvergreenStatus(pageType, entityTypeParam = null) {
        const useEntityType = entityTypeParam || entityType;
        const isJasa = ['JASA_KONSTRUKSI', 'JASA_DESAIN_INTERIOR', 'JASA'].includes(useEntityType);
        const isSewa = ['SEWA', 'RENTAL', 'SEWA_RENTAL', 'SEWA_ALAT', 'RENTAL_ALAT'].includes(useEntityType);
        
        // EVERGREEN (tidak perlu tahun)
        if (['pillar', 'sub-pillar-tipe-2', 'variant', 'sub-variant'].includes(pageType)) {
            return { evergreen: true, wajibTahun: false };
        }
        
        // SUB-PILLAR TIPE 1 (fleksibel)
        if (pageType === 'sub-pillar-tipe-1') {
            return { evergreen: false, wajibTahun: false, catatan: 'tergantung topik perbandingan' };
        }
        
        // MONEY_MASTER
        if (pageType === 'money-master') {
            if (isJasa) return { evergreen: false, wajibTahun: false, catatan: 'JASA tidak boleh money-master' };
            return { evergreen: false, wajibTahun: true };
        }
        
        // MONEY_PAGE & MONEY_CHILD
        if (['money-page', 'money-child'].includes(pageType)) {
            if (isJasa || isSewa) return { evergreen: false, wajibTahun: false, catatan: 'fleksibel, tidak wajib tahun' };
            return { evergreen: false, wajibTahun: true };
        }
        
        return { evergreen: true, wajibTahun: false };
    }
    
    // ============================================================
    // 9. KUMPULKAN DATA DARI MAPPING
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
    // 10. BANGUN LEVELS DARI breadcrumbItems
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
        
        const pageType = detectPageType(name, i, breadcrumbItems.length, entityType);
        const intentData = getIntentForPageType(pageType, entityType);
        const evergreenData = getEvergreenStatus(pageType, entityType);
        
        allLevels.push({
            name: name,
            url: url,
            type: pageType,
            level: TYPE_LEVEL_MAP[pageType] || 99,
            intent: intentData,
            evergreen: evergreenData,
            position: i
        });
    }
    
    // ============================================================
    // 11. VALIDASI & PERBAIKI HIERARKI (TIDAK BOLEH LONCAT LEVEL)
    // ============================================================
    for (let i = 0; i < allLevels.length - 1; i++) {
        const current = allLevels[i];
        const next = allLevels[i + 1];
        
        if (next.level - current.level > 1) {
            console.warn(`⚠️ LEVEL JUMP: ${current.name}(${current.type} L${current.level}) → ${next.name}(${next.type} L${next.level})`);
            
            const correctedIndex = Math.min(current.level + 1, 8);
            const correctedType = VALID_PAGE_TYPES[correctedIndex - 1];
            next.type = correctedType;
            next.level = correctedIndex;
            next.intent = getIntentForPageType(correctedType, entityType);
            next.evergreen = getEvergreenStatus(correctedType, entityType);
            
            console.log(`✅ DIPERBAIKI: ${next.name} → ${next.type} L${next.level}`);
        }
    }
    
    // ============================================================
    // 12. VALIDASI KHUSUS: JASA TIDAK BOLEH MONEY_MASTER
    // ============================================================
    for (const level of allLevels) {
        if (isJasaEntity() && level.type === 'money-master') {
            console.warn(`⚠️ JASA cannot be money-master: ${level.name} → forced to money-page`);
            level.type = 'money-page';
            level.level = 5;
            level.intent = getIntentForPageType('money-page', entityType);
            level.evergreen = getEvergreenStatus('money-page', entityType);
        }
    }
    
    // ============================================================
    // 13. VALIDASI & FALLBACK URL
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
    // 14. TENTUKAN LEVEL YANG DITAMPILKAN (MAX 4 LEVEL)
    // ============================================================
    const selectedLevels = [];
    
    // Home (WAJIB)
    selectedLevels.push({ 
        name: 'Beranda', 
        url: DOMAIN, 
        isHome: true,
        type: 'pillar',
        level: 1,
        intent: getIntentForPageType('pillar', entityType),
        evergreen: getEvergreenStatus('pillar', entityType)
    });
    
    let remainingSlots = MAX_LEVEL - 2;
    
    console.log(`\n📊 ========================================`);
    console.log(`📊 Breadcrumb Generator v4.1 — FIXED LOCATION DETECTION`);
    console.log(`📊 Entity Type: ${entityType}`);
    console.log(`📊 JASA Entity: ${isJasaEntity() ? 'YES (MONEY_MASTER DILARANG)' : 'NO'}`);
    console.log(`📊 ========================================`);
    
    // Parent terdekat (WAJIB)
    let parentTerdekat = null;
    if (allLevels.length > 0) {
        parentTerdekat = allLevels[allLevels.length - 1];
        selectedLevels.push(parentTerdekat);
        remainingSlots--;
        console.log(`✅ WAJIB: "${parentTerdekat.name}" → ${parentTerdekat.type} (L${parentTerdekat.level})`);
    }
    
    // Level lainnya (prioritaskan level tertinggi yang unik)
    const otherLevels = [...allLevels.slice(0, allLevels.length - 1)]
        .sort((a, b) => b.level - a.level)
        .filter((v, i, self) => self.findIndex(t => t.name === v.name) === i); // unique by name
    
    for (const level of otherLevels) {
        if (remainingSlots <= 0) {
            console.log(`📌 SKIP: "${level.name}" (${level.type}) - slot habis`);
            continue;
        }
        
        // Hindari duplikasi dengan parent atau home
        if (selectedLevels.some(s => s.name === level.name)) {
            console.log(`📌 SKIP: "${level.name}" - already in breadcrumb`);
            continue;
        }
        
        selectedLevels.splice(1, 0, level);
        remainingSlots--;
        console.log(`✅ TAMBAH: "${level.name}" → ${level.type} (L${level.level})`);
    }
    
    // Halaman saat ini (WAJIB)
    const currentFullUrl = currentUrl.startsWith('http') ? currentUrl : DOMAIN + currentUrl;
    const currentPageTitle = (() => {
        if (mappingObj && mappingObj[currentUrl]) return mappingObj[currentUrl];
        if (parentTerdekat) return parentTerdekat.name;
        return 'Halaman';
    })();
    
    const currentPageType = detectPageType(currentPageTitle, allLevels.length, allLevels.length, entityType);
    const currentIntent = getIntentForPageType(currentPageType, entityType);
    const currentEvergreen = getEvergreenStatus(currentPageType, entityType);
    
    selectedLevels.push({
        name: currentPageTitle,
        url: currentFullUrl,
        isCurrent: true,
        type: currentPageType,
        level: TYPE_LEVEL_MAP[currentPageType] || 99,
        intent: currentIntent,
        evergreen: currentEvergreen
    });
    
    // Update position
    for (let i = 0; i < selectedLevels.length; i++) {
        selectedLevels[i].position = i + 1;
    }
    
    console.log(`\n✅ FINAL (${selectedLevels.length} level):`);
    selectedLevels.forEach((l, i) => {
        console.log(`   ${i+1}. ${l.name} → ${l.type} (L${l.level})`);
    });
    console.log(`\n📊 Current page type: ${currentPageType}`);
    console.log(`📊 Intent: ${currentIntent.primary} (${currentIntent.dominance}%)`);
    console.log(`📊 Wajib Tahun di H1: ${currentEvergreen.wajibTahun ? 'YES' : 'NO'}`);
    console.log(`📊 ========================================\n`);
    
    // ============================================================
    // 15. GENERATE HTML BREADCRUMB + JSON-LD
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
    // 16. INJECT KE DOM
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
    // 17. RETURN LENGKAP
    // ============================================================
    return {
        html: breadcrumbHtml,
        jsonLd: jsonLd,
        selectedLevels: selectedLevels,
        currentPageType: currentPageType,
        currentIntent: currentIntent,
        currentEvergreen: currentEvergreen,
        entityType: entityType,
        isValidType: true,
        version: '4.1'
    };
}

// ============================================================
// RINGKASAN HASIL DETEKSI PER ENTITY TYPE (v4.1)
// ============================================================
/*
| Entity Type | Keyword Contoh | Hasil Deteksi | Alasan |
|-------------|----------------|---------------|--------|
| JASA | "Jasa Pasang Atap Baja Ringan" | money-page ✅ | Tidak ada lokasi, "ringan" di blacklist |
| JASA | "Jasa Pasang Atap Baja Ringan Jakarta" | money-child ✅ | Mengandung whitelist kota "jakarta" |
| JASA | "Jasa Pasang Atap Baja Ringan di Bandung" | money-child ✅ | Indicator "di" + whitelist "bandung" |
| MATERIAL | "Harga Bata Ringan" | money-master ✅ | 2 kata setelah keyword |
| MATERIAL | "Harga Bata Ringan Hebel" | money-page ✅ | 3 kata + specific product |
| MATERIAL | "Harga Bata Ringan di Jakarta" | money-child ✅ | mengandung lokasi |
| PRODUK | "Harga Kitchen Set" | money-master ✅ | 2 kata setelah keyword |
| PRODUK | "Harga Kitchen Set Minimalis" | money-page ✅ | 3+ kata |
| SEWA | "Harga Sewa Excavator" | money-master ✅ | 2 kata setelah keyword |
| SEWA | "Sewa Excavator Jakarta" | money-child ✅ | mengandung lokasi |
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
