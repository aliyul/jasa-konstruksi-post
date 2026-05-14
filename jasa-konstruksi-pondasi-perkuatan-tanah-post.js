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

const urlMappingJasaBoronganPondasiFromMoneyPageMoneyChild = {
  // ============================================================
  // [MONEY_PAGE] - BORONGAN PONDASI (LAYANAN UMUM)
  // 🧠 TYPE: MONEY_PAGE (JASA, bukan MONEY_MASTER)
  // Intent: Komersial (60%) + Transaksional (40%)
  // ============================================================
 // "https://www.betonjayareadymix.com/2018/09/borongan-pondasi.html": "Borongan Pondasi",  // TYPE: MONEY_PAGE
 // "https://www.betonjayareadymix.com/2019/08/jasa-borongan-pondasi.html": "Jasa Borongan Pondasi",  // TYPE: MONEY_PAGE
  
  // ============================================================
  // [MONEY_PAGE] - HARGA JASA BORONGAN PONDASI
  // ============================================================
  //"https://www.betonjayareadymix.com/2019/08/harga-jasa-borongan-pondasi.html": "Harga Jasa Borongan Pondasi",  // TYPE: MONEY_PAGE
  
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

const urlMappingJasaPondasiCakarAyamFromMoneyPageMoneyChild = {
  // 🟡 SARAN ITEM (BELUM AKTIF - PERLU DIBUAT KONTEN)
  // "https://www.betonjayareadymix.com/2019/08/jasa-pondasi-cakar-ayam.html": "Jasa Pondasi Cakar Ayam",  // TYPE: MONEY_PAGE
  // "https://www.betonjayareadymix.com/2019/08/harga-jasa-pondasi-cakar-ayam.html": "Harga Jasa Pondasi Cakar Ayam",  // TYPE: MONEY_PAGE
  // "https://www.betonjayareadymix.com/2019/08/jasa-pondasi-cakar-ayam-per-meter.html": "Jasa Pondasi Cakar Ayam Per Meter",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/08/jasa-pondasi-cakar-ayam-jakarta.html": "Jasa Pondasi Cakar Ayam Jakarta",  // TYPE: MONEY_CHILD
	 "https://www.betonjayareadymix.com/2019/08/jasa-pondasi-cakar-ayam-bogor.html": "Jasa Pondasi Cakar Ayam Bogor",  // TYPE: MONEY_CHILD
	 "https://www.betonjayareadymix.com/2019/08/jasa-pondasi-cakar-ayam-depok.html": "Jasa Pondasi Cakar Ayam Depok",  // TYPE: MONEY_CHILD
	 "https://www.betonjayareadymix.com/2019/08/jasa-pondasi-cakar-ayam-tangerang.html": "Jasa Pondasi Cakar Ayam Tangerang",  // TYPE: MONEY_CHILD
	 "https://www.betonjayareadymix.com/2019/08/jasa-pondasi-cakar-ayam-bekasi.html": "Jasa Pondasi Cakar Ayam Bekasi",  // TYPE: MONEY_CHILD
	 "https://www.betonjayareadymix.com/2019/08/jasa-pondasi-cakar-ayam-karawang.html": "Jasa Pondasi Cakar Ayam Karawang",  // TYPE: MONEY_CHILD
	 "https://www.betonjayareadymix.com/2019/08/jasa-pondasi-cakar-ayam-cianjur.html": "Jasa Pondasi Cakar Ayam Cianjur",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/08/jasa-pondasi-cakar-ayam-bandung.html": "Jasa Pondasi Cakar Ayam Bandung",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/08/jasa-pondasi-cakar-ayam-terdekat.html": "Jasa Pondasi Cakar Ayam Terdekat"  // TYPE: MONEY_CHILD
};

// ============================================================
// 📁 JASA PONDASI TAPAK - KOSONG (SARAN ITEM)
// 🧠 ENTITY: JASA → TYPE: MONEY_PAGE & MONEY_CHILD
// Parent: Jasa Pondasi Bangunan (SUB2)
// ============================================================

const urlMappingJasaPondasiTapakFromMoneyPageMoneyChild = {
  // 🟡 SARAN ITEM (BELUM AKTIF - PERLU DIBUAT KONTEN)
  // "https://www.betonjayareadymix.com/2019/08/jasa-pondasi-tapak.html": "Jasa Pondasi Tapak",  // TYPE: MONEY_PAGE
  // "https://www.betonjayareadymix.com/2019/08/harga-jasa-pondasi-tapak.html": "Harga Jasa Pondasi Tapak",  // TYPE: MONEY_PAGE
  // "https://www.betonjayareadymix.com/2019/08/jasa-pondasi-tapak-per-meter.html": "Jasa Pondasi Tapak Per Meter",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/08/jasa-pondasi-tapak-jakarta.html": "Jasa Pondasi Tapak Jakarta",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/08/jasa-pondasi-tapak-bogor.html": "Jasa Pondasi Tapak Bogor",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/08/jasa-pondasi-tapak-depok.html": "Jasa Pondasi Tapak Depok",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/08/jasa-pondasi-tapak-Tangerang.html": "Jasa Pondasi Tapak Tangerang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/08/jasa-pondasi-tapak-bekasi.html": "Jasa Pondasi Tapak Bekasi",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/08/jasa-pondasi-tapak-karawang.html": "Jasa Pondasi Tapak Karawang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/08/jasa-pondasi-tapak-cianjur.html": "Jasa Pondasi Tapak Cianjur",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/08/jasa-pondasi-tapak-bandung.html": "Jasa Pondasi Tapak Bandung",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/08/jasa-pondasi-tapak-terdekat.html": "Jasa Pondasi Tapak Terdekat"  // TYPE: MONEY_CHILD
};

// ============================================================
// 📁 JASA PONDASI TIANG PANCANG - MONEY PAGE & CHILD
// 🧠 ENTITY: JASA → TYPE: MONEY_PAGE & MONEY_CHILD
// Parent: Jasa Pondasi Bangunan (SUB2)
// ============================================================

const urlMappingJasaPondasiTiangPancangFromMoneyPageMoneyChild = {
  // ============================================================
  // [MONEY_PAGE] - HARGA JASA PANCANG (BERBAGAI METODE)
  // 🧠 TYPE: MONEY_PAGE (JASA, bukan MONEY_MASTER)
  // ============================================================
	/*
  "https://www.betonjayareadymix.com/2019/08/harga-jasa-pancang-drop-hammer.html": "Harga Jasa Pancang Drop Hammer",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2019/08/harga-jasa-pancang-spun-pile.html": "Harga Jasa Pancang Spun Pile",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2019/08/harga-jasa-pancang-mini-pile.html": "Harga Jasa Pancang Mini Pile",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2019/08/harga-jasa-pemasangan-mini-pile.html": "Harga Jasa Pemasangan Mini Pile",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2019/08/harga-jasa-pancang-hidrolik.html": "Harga Jasa Pancang Hidrolik",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2019/08/harga-jasa-pemasangan-tiang-pancang.html": "Harga Jasa Pemasangan Tiang Pancang",  // TYPE: MONEY_PAGE
  */
  // ============================================================
  // [MONEY_PAGE] - HARGA JASA PONDASI TIANG PANCANG
  // ============================================================
 // "https://www.betonjayareadymix.com/2019/08/harga-jasa-pondasi-tiang-pancang.html": "Harga Jasa Pondasi Tiang Pancang",  // TYPE: MONEY_PAGE
  
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
 * generateBreadcrumbForMapping v5.7 — COMPLETE PHASE SYSTEM WITH ENTITY PILLAR EXACT MATCH
 * ✅ FIX: ENTITY PILLAR hanya EXACT MATCH berdasarkan CLEAN URL
 * ✅ FIX: "produk konstruksi" → PILLAR (L1)
 * ✅ FIX: "standar mutu produk konstruksi" → VARIANT (L7) BUKAN pillar
 * ✅ FIX: "jasa konstruksi" → PILLAR (L1)
 * ✅ FIX: "jasa konstruksi gedung sekolah" → MONEY_PAGE (L5) BUKAN pillar
 * ✅ FIX: "Sewa Alat Konstruksi" → PILLAR (L1)
 * ✅ FIX: "Produk Konstruksi", "Produk Interior" → PILLAR (L1)
 * ✅ FIX: "Material Konstruksi" → PILLAR (L1)
 * ✅ ENTITY PILLAR KEYWORDS untuk setiap entity type (EXACT MATCH)
 * ✅ VARIANT_KEYWORDS ditambah: standar, mutu, kualitas, quality, spec
 * ✅ SINKRON DENGAN Page Level Detector v18.6 dan AUTO-SCHEMA v5.8
 * ✅ PRIORITAS DETEKSI:
 *    0. HOMEPAGE
 *    1. ENTITY PILLAR (EXACT MATCH dari CLEAN URL) 🔥
 *    2. INFORMASIONAL (panduan, cara, tips) → PILLAR
 *    3. PERBANDINGAN (vs, versus) → SP1
 *    4. JENIS/MACAM/DAFTAR (jenis, macam, daftar) → SP2
 *    5. MONEY (harga, biaya, tarif, sewa, rental) → cek lokasi dulu
 *    6. JASA/SEWA (tanpa keyword harga & bukan entity pillar) → MONEY_PAGE
 *    7. SUB-VARIANT (2+ parameter spesifikasi)
 *    8. VARIANT (spesifikasi, ukuran, standar, mutu, dll)
 *    9. DEFAULT → PILLAR
 * 
 * @version 5.7.0
 * @date 2026-01-15
 */

function generateBreadcrumbjasaKonstruksiPondasiPerkuatanTanahPost(mappingObj, currentUrl, breadcrumbItems = [], entityType = 'PRODUK_INTERIOR') {
    
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
        path = path.replace(/\/\d{4}\/\d{2}\/\d{2}\//g, '/');
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
    // 4. ENTITY PILLAR KEYWORDS (EXACT MATCH ONLY) 🔥
    // ============================================================
    const ENTITY_PILLAR_KEYWORDS = {
        'JASA_KONSTRUKSI': ['jasa konstruksi', 'layanan konstruksi', 'jasa bangunan', 'jasa kontraktor', 'jasa pemborong', 'jasa renovasi'],
        'JASA_DESAIN_INTERIOR': ['jasa desain interior', 'jasa interior', 'desain interior'],
        'JASA': ['jasa konstruksi', 'layanan konstruksi', 'jasa bangunan', 'jasa kontraktor', 'jasa pemborong', 'jasa renovasi'],
        
        'SEWA': ['sewa alat konstruksi', 'sewa alat berat', 'rental alat berat', 'sewa alat bangunan', 'rental konstruksi', 'sewa excavator'],
        'RENTAL': ['rental alat berat', 'sewa alat konstruksi'],
        'SEWA_RENTAL': ['sewa alat konstruksi', 'rental alat berat'],
        'SEWA_ALAT': ['sewa alat konstruksi', 'sewa alat berat'],
        'RENTAL_ALAT': ['rental alat berat', 'sewa alat konstruksi'],
        
        'PRODUK_KONSTRUKSI': ['produk konstruksi', 'produk bangunan', 'produk interior'],
        'PRODUK_INTERIOR': ['produk interior', 'furniture', 'perabot rumah', 'perabot interior'],
        'PRODUK': ['produk konstruksi', 'produk bangunan'],
        
        'MATERIAL_KONSTRUKSI': ['material konstruksi', 'bahan bangunan', 'material bangunan'],
        'MATERIAL': ['material konstruksi', 'bahan bangunan', 'material bangunan'],
        
        'ARTIKEL': ['artikel konstruksi', 'tips konstruksi', 'info bangunan']
    };
    
    // ============================================================
    // 5. FUNGSI DETEKSI ENTITY PILLAR (EXACT MATCH DARI CLEAN URL) 🔥
    // ============================================================
    function isEntityPillarExactMatch(pageName, entityTypeParam) {
        const useEntityType = entityTypeParam || entityType;
        const lowerName = pageName.toLowerCase().trim();
        const pillarKeywords = ENTITY_PILLAR_KEYWORDS[useEntityType] || [];
        
        for (const kw of pillarKeywords) {
            // 🔥 EXACT MATCH (tanpa tambahan kata apapun)
            if (lowerName === kw) {
                console.log(`  🏛️ ENTITY PILLAR detected (exact match from clean URL): "${kw}" → pillar (L1)`);
                return true;
            }
        }
        return false;
    }
    
    // ============================================================
    // 6. KEYWORD CIRI PER LEVEL
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
    
    // LEVEL 7: VARIANT (Spesifikasi umum - 1 parameter) 🔥 DITAMBAH standar, mutu, kualitas
    const VARIANT_KEYWORDS = [
        'spesifikasi', 'ukuran', 'tipe', 'type', 'model', 
        'varian', 'warna', 'merk', 'brand', 'kapasitas', 
        'dimensi', 'bahan', 'material', 'finishing', 'grade',
        'seri', 'serie', 'versi', 'generasi', 'detail teknis',
        'standar', 'mutu', 'kualitas', 'quality', 'spec'
    ];
    
    // ============================================================
    // 7. LOCATION WHITELIST
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
    // 8. SPECIFIC PRODUCT & SUB-VARIANT DETECTION
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
    // 9. INTENT VALIDATION (PHASE 1.5)
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
    // 10. EVERGREEN STATUS (STEP 6.2)
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
    // 11. DETEKSI HOMEPAGE
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
    // 12. PAGE TYPE DETECTION (PRIORITAS LENGKAP) 🔥
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
        // PRIORITAS 1: ENTITY PILLAR (EXACT MATCH DARI CLEAN URL) 🔥
        // ============================================================
        if (isEntityPillarExactMatch(pageName, useEntityType)) {
            return 'pillar';
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
        // PRIORITAS 5: MONEY LEVEL (HARGA/SEWA) - DENGAN CEK LOKASI DULU 🔥
        // ============================================================
        for (const kw of MONEY_KEYWORDS) {
            if (lowerName.includes(kw)) {
                console.log(`  💰 Money keyword detected: ${kw} (from ${isFromUrl ? 'URL' : 'title/H1'})`);
                
                // Ekstrak setelah keyword (maksimal 5 kata pertama)
                let afterKw = '';
                const kwIndex = lowerName.indexOf(kw);
                afterKw = lowerName.substring(kwIndex + kw.length).trim();
                
                // Bersihkan dari tahun dan karakter khusus
                afterKw = afterKw.replace(/\b\d{4}\b/g, '').replace(/[-–—]/g, ' ').replace(/\s+/g, ' ').trim();
                const words = afterKw.split(/\s+/).filter(w => w.length > 0);
                const first5Words = words.slice(0, 5);
                afterKw = first5Words.join(' ');
                const wordCount = first5Words.length;
                
                console.log(`  → After keyword (first 5 words): "${afterKw}" | Words: ${wordCount}`);
                
                // 🔥 PRIORITAS: CEK LOKASI DULU (UNTUK SEMUA ENTITY TYPE)
                if (isLocation(afterKw)) {
                    console.log(`  → Location detected → money-child (L6)`);
                    return 'money-child';
                }
                
                // JIKA JASA DAN TIDAK ADA LOKASI → money-page
                if (isJasaEntity()) {
                    console.log(`  → JASA + harga (no location) → money-page (L5)`);
                    return 'money-page';
                }
                
                // CEK SPESIFISITAS PRODUK
                const isSpecific = isSpecificProduct(afterKw, wordCount);
                
                // MONEY_MASTER: 1-2 kata ATAU 3 kata tapi masih umum
                if (wordCount <= 2 || (wordCount === 3 && !isSpecific)) {
                    console.log(`  → money-master (${wordCount} kata) → money-master (L4)`);
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
        // PRIORITAS 7: SUB-VARIANT (Level 8)
        // ============================================================
        if (isSubVariant(lowerName)) {
            console.log(`  🔬 SUB-VARIANT detected → sub-variant (L8)`);
            return 'sub-variant';
        }
        
        // ============================================================
        // PRIORITAS 8: VARIANT (Level 7) - termasuk standar, mutu, kualitas 🔥
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
    // 13. BUILD LEVELS FROM BREADCRUMB ITEMS
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
    // 14. VALIDASI HIERARKI (TIDAK BOLEH LONCAT LEVEL)
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
    // 15. JASA TIDAK BOLEH MONEY_MASTER
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
    // 16. FALLBACK URL
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
    // 17. SELECT LEVELS FOR BREADCRUMB (MAX 4 LEVELS)
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
    console.log(`📊 Breadcrumb Generator v5.7 — ENTITY PILLAR EXACT MATCH`);
    console.log(`📊 Entity Type: ${entityType}`);
    console.log(`📊 JASA Entity: ${isJasaEntity() ? 'YES' : 'NO'}`);
    console.log(`📊 SEWA Entity: ${isSewaEntity() ? 'YES' : 'NO'}`);
    console.log(`📊 RULE: ENTITY PILLAR hanya EXACT MATCH dari CLEAN URL`);
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
    // 18. CURRENT PAGE - DETEKSI DARI URL CLEAN 🔥
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
    // 19. GENERATE HTML BREADCRUMB + JSON-LD
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
    // 20. RETURN LENGKAP
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
        version: '5.7'
    };
}

// ============================================================
// RINGKASAN HASIL DETEKSI v5.7
// ============================================================
/*
| Clean URL | Hasil Deteksi | Level |
|-----------|---------------|-------|
| produk konstruksi | pillar | L1 ✅ |
| standar mutu produk konstruksi | variant | L7 ✅ |
| spesifikasi produk konstruksi | variant | L7 ✅ |
| jenis produk konstruksi | sub-pillar-tipe-2 | L2 ✅ |
| perbandingan produk konstruksi | sub-pillar-tipe-1 | L3 ✅ |
| harga produk konstruksi | money-master | L4 ✅ |
| jasa konstruksi | pillar | L1 ✅ |
| jasa konstruksi gedung sekolah | money-page | L5 ✅ |
| sewa alat konstruksi | pillar | L1 ✅ |
| sewa alat konstruksi jakarta | money-child | L6 ✅ |
| material konstruksi | pillar | L1 ✅ |
| produk interior | pillar | L1 ✅ |
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
		urlMappingJasaBoronganPondasiFromMoneyPageMoneyChild,
		urlMappingJasaPondasiCakarAyamFromMoneyPageMoneyChild,
		urlMappingJasaPondasiTapakFromMoneyPageMoneyChild,
		urlMappingJasaPondasiTiangPancangFromSub2MoneyPage,
		urlMappingJasaPondasiSumuranFromSub2MoneyPage		
    );
   
    // --- validasi URL terdaftar ---
    if (!urlMappingGabungan[cleanUrlJasaPondasiPerkuatanTanahKonsPost]) {
      console.log(`[HybridDateModified] URL tidak terdaftar: ${cleanUrlJasaPondasiPerkuatanTanahKonsPost}`);
      return;
    }

		/* ============================================================
 🔥 Hybrid Date Modified v7.3 — UNTUK betonjayareadymix.com
    ✅ FIX: 'home' TIDAK termasuk EVERGREEN_LEVELS (homepage dinamis)
    ✅ FIX: Page Level Detector v18.2 (sinkron dengan sistem terbaru)
    ✅ FIX: Event listener untuk v18
    ✅ FIX: KATEGORISASI YANG BENAR:
        - EVERGREEN: pillar, sub-pillar-tipe-2, variant, sub-variant
        - FLEXIBLE: sub-pillar-tipe-1 (perbandingan)
        - MONEY: money-master, money-page, money-child, money-leadgen
        - DINAMIS: home (AUTO mode)
    ✅ Support MONEY_LEADGEN
============================================================ */

(async function runHybridDateModified() {
  try {
    const CURRENT_DOMAIN = window.location.hostname;
    
    // Khusus untuk betonjayareadymix.com
    if (CURRENT_DOMAIN !== 'www.betonjayareadymix.com' && !CURRENT_DOMAIN.includes('localhost')) {
      console.log(`⏸️ Domain ${CURRENT_DOMAIN} not targeted. Script skipped.`);
      return;
    }

    // ============================================================
    // 📌 KONSTANTA PAGE LEVELS (KATEGORISASI YANG BENAR)
    // ============================================================
    // EVERGREEN: konten abadi, jarang update (manual mode)
    const EVERGREEN_LEVELS = ['pillar', 'sub-pillar-tipe-2', 'variant', 'sub-variant'];
    
    // FLEXIBLE: sub-pillar-tipe-1 (Perbandingan) - semi evergreen
    const FLEXIBLE_LEVELS = ['sub-pillar-tipe-1'];
    
    // MONEY: perlu update berkala (auto mode)
    const MONEY_LEVELS = ['money-master', 'money-page', 'money-child', 'money-leadgen'];
    
    // DINAMIS: 'home' tidak masuk kategori manapun → AUTO mode

    // ============================================================
    // 📌 FUNGSI LOAD EXTERNAL JS
    // ============================================================
    function loadExternalJS(src) {
      return new Promise((resolve) => {
        if (document.querySelector(`script[src="${src}"]`)) {
          resolve();
          return;
        }
        const s = document.createElement("script");
        s.src = src;
        s.defer = true;
        s.onload = resolve;
        s.onerror = () => {
          console.warn("[HybridDateModified] Gagal load:", src);
          resolve();
        };
        document.head.appendChild(s);
      });
    }

    // ============================================================
    // 📌 TUNGGU PAGE LEVEL DETECTOR v18 READY
    // ============================================================
    function waitForPageLevelDetector() {
      return new Promise((resolve) => {
        // Cek v18
        if (window.__pageLevelDetectorV18Ready && window.pageLevelDetectorV18) {
          console.log("✅ Page Level Detector v18 already ready");
          resolve(true);
          return;
        }
        // Cek v17 (fallback)
        if (window.__pageLevelDetectorV17Ready && window.pageLevelDetectorV17) {
          console.log("✅ Page Level Detector v17 already ready");
          resolve(true);
          return;
        }
        // Event listener untuk v18
        window.addEventListener("pageLevelDetectorV18Ready", () => {
          console.log("✅ Page Level Detector v18 ready (event)");
          resolve(true);
        }, { once: true });
        // Fallback timeout 5 detik
        setTimeout(() => {
          if (window.pageLevelDetectorV18 || window.pageLevelDetectorV17 || window.pageLevelDetector) {
            console.log("✅ Page Level Detector ready (timeout fallback)");
            resolve(true);
          } else {
            console.warn("⚠️ PageLevelDetector timeout, using defaults");
            resolve(false);
          }
        }, 5000);
      });
    }

    // ============================================================
    // 📌 TUNGGU DETECT EVERGREEN READY
    // ============================================================
    function waitForDetectEvergreen() {
      return new Promise((resolve) => {
        if (window.__detectEvergreenReady && typeof window.detectEvergreen === "function") {
          resolve(true);
          return;
        }
        window.addEventListener("detectEvergreenReady", () => resolve(true), { once: true });
        setTimeout(() => {
          if (typeof window.detectEvergreen === "function") {
            resolve(true);
          } else {
            console.warn("⚠️ detectEvergreen timeout");
            resolve(false);
          }
        }, 5000);
      });
    }

    // ============================================================
    // 📌 LOAD ALL SCRIPTS
    // ============================================================
    async function loadAllScripts() {
      // Gunakan Page Level Detector v18.2 (terbaru)
      const PAGE_LEVEL_DETECTOR_URL = "https://raw.githack.com/aliyul/solution-blogger/main/PageLevelDetector.js";
      const EVERGREEN_DETECTOR_URL = "https://raw.githack.com/aliyul/solution-blogger/main/SmartEvergreenDetector.js";
      
      if (typeof window.pageLevelDetectorV18 === "undefined" && 
          typeof window.pageLevelDetectorV17 === "undefined" &&
          typeof window.pageLevelDetector === "undefined") {
        console.log("⏳ Loading Page Level Detector v18.2...");
        await loadExternalJS(PAGE_LEVEL_DETECTOR_URL);
        await waitForPageLevelDetector();
        console.log("✅ Page Level Detector v18.2 READY");
      }
      
      if (typeof window.detectEvergreen !== "function") {
        console.log("⏳ Loading Smart Evergreen Detector v13.0...");
        await loadExternalJS(EVERGREEN_DETECTOR_URL);
        await waitForDetectEvergreen();
        console.log("✅ Smart Evergreen Detector v13.0 READY");
      }
    }

    // ============================================================
    // 📌 TO ISO WITH TIMEZONE LOCAL
    // ============================================================
    function toISOWithTimezoneLocal(date, offset = "+07:00") {
      if (!date) return null;
      const d = new Date(date);
      if (isNaN(d.getTime())) return null;
      const pad = (n) => n.toString().padStart(2, "0");
      const yyyy = d.getFullYear();
      const mm = pad(d.getMonth() + 1);
      const dd = pad(d.getDate());
      const hh = pad(d.getHours());
      const min = pad(d.getMinutes());
      const ss = pad(d.getSeconds());
      return `${yyyy}-${mm}-${dd}T${hh}:${min}:${ss}${offset}`;
    }

    // ============================================================
    // 📌 STABLE HASH
    // ============================================================
    function stableHash(str) {
      let hash = 0;
      for (let i = 0; i < str.length; i++) {
        hash = (hash << 5) - hash + str.charCodeAt(i);
        hash |= 0;
      }
      return Math.abs(hash);
    }

    // ============================================================
    // 📌 UPDATE META DATE MODIFIED
    // ============================================================
    function updateMetaDateModified(isoDate) {
      const selectors = [
        ['meta[itemprop="dateModified"]', 'itemprop', 'dateModified'],
        ['meta[name="dateModified"]', 'name', 'dateModified'],
        ['meta[property="article:modified_time"]', 'property', 'article:modified_time']
      ];
      
      selectors.forEach(([selector, attr, val]) => {
        let meta = document.querySelector(selector);
        if (!meta) {
          meta = document.createElement("meta");
          meta.setAttribute(attr, val);
          document.head.appendChild(meta);
        }
        meta.setAttribute("content", isoDate);
      });
    }

    // ============================================================
    // 📌 FUNGSI MENENTUKAN CUSTOM DATE BERDASARKAN PAGE LEVEL
    // ============================================================
    function getCustomDateByPageLevel(pageLevel, entityType) {
      // ============================================================
      // LEVEL 1: EVERGREEN (pillar, sub-pillar-tipe-2, variant, sub-variant)
      // Konten abadi, jarang update → MANUAL mode dengan tanggal stabil
      // ============================================================
      if (EVERGREEN_LEVELS.includes(pageLevel)) {
        if (pageLevel === 'pillar') {
          return "2026-04-01T10:30:00+07:00";
        }
        // sub-pillar-tipe-2, variant, sub-variant
       		  // JASA KONSTRUKSI CUTTING BETON POST: Sub-Pillar Tipe 2, Sub-Pillar Tipe 1, Variant, Sub-Variant 
		
        return "2026-04-16T00:00:00+07:00";
      }
              /*
		        // JASA ALAT KONSTRUKSI POST : Sub-Pillar Tipe 2, Sub-Pillar Tipe 1, Variant, Sub-Variant 
        return "2026-04-03T00:00:00+07:00";
		          // JASA KONSTRUKSI STRUKTUR: Sub-Pillar Tipe 2, Sub-Pillar Tipe 1, Variant, Sub-Variant 
        return "2026-04-04T00:00:00+07:00";
		          // JASA KONSTRUKSI PERBAIKAN: Sub-Pillar Tipe 2, Sub-Pillar Tipe 1, Variant, Sub-Variant 
        return "2026-04-05T00:00:00+07:00";
		          // JASA KONSTRUKSI PEMBATAS: Sub-Pillar Tipe 2, Sub-Pillar Tipe 1, Variant, Sub-Variant 
        return "2026-04-06T00:00:00+07:00";
		          // JASA KONSTRUKSI FINISHING: Sub-Pillar Tipe 2, Sub-Pillar Tipe 1, Variant, Sub-Variant 
        return "2026-04-07T00:00:00+07:00";
		          // JASA KONSTRUKSI PONDASI PERKUATAN TANAH: Sub-Pillar Tipe 2, Sub-Pillar Tipe 1, Variant, Sub-Variant 
        return "2026-04-08T00:00:00+07:00";
		  // JASA KONSTRUKSI JALAN PERKERASAN: Sub-Pillar Tipe 2, Sub-Pillar Tipe 1, Variant, Sub-Variant 
        return "2026-04-09T00:00:00+07:00";
		  // JASA KONSTRUKSI STRUKTUR POST: Sub-Pillar Tipe 2, Sub-Pillar Tipe 1, Variant, Sub-Variant 
        return "2026-04-10T00:00:00+07:00";
		  // JASA KONSTRUKSI PONDASI PERKUATAN TANAH POST: Sub-Pillar Tipe 2, Sub-Pillar Tipe 1, Variant, Sub-Variant 
        return "2026-04-11T00:00:00+07:00";
		  // JASA KONSTRUKSI PERBAIKAN POST: Sub-Pillar Tipe 2, Sub-Pillar Tipe 1, Variant, Sub-Variant 
        return "2026-04-12T00:00:00+07:00";
		  // JASA KONSTRUKSI PEMBATAS POST: Sub-Pillar Tipe 2, Sub-Pillar Tipe 1, Variant, Sub-Variant 
        return "2026-04-13T00:00:00+07:00";
		  // JASA KONSTRUKSI JALAN PERKERASAN POST: Sub-Pillar Tipe 2, Sub-Pillar Tipe 1, Variant, Sub-Variant 
        return "2026-04-14T00:00:00+07:00";
		  // JASA KONSTRUKSI FINISHING POST: Sub-Pillar Tipe 2, Sub-Pillar Tipe 1, Variant, Sub-Variant 
        return "2026-04-15T00:00:00+07:00";

		  // JASA KONSTRUKSI BONGKAR BANGUNAN POST: Sub-Pillar Tipe 2, Sub-Pillar Tipe 1, Variant, Sub-Variant 
        return "2026-04-17T00:00:00+07:00";
		  */
      // ============================================================
      // LEVEL 2: FLEXIBLE (sub-pillar-tipe-1 - Perbandingan)
      // Semi evergreen, update lebih sering dari pillar
      // ============================================================
      if (FLEXIBLE_LEVELS.includes(pageLevel)) {
           		  // JASA KONSTRUKSI CUTTING BETON POST: Sub-Pillar Tipe 2, Sub-Pillar Tipe 1, Variant, Sub-Variant 
		
        return "2026-04-16T00:00:00+07:00";
      }
      
      // ============================================================
      // LEVEL 3: MONEY PAGES (perlu update berkala)
      // Kembalikan null agar SmartEvergreenDetector menghitung otomatis
      // money-master, money-page, money-child, money-leadgen
      // ============================================================
      if (MONEY_LEVELS.includes(pageLevel)) {
        return null; // AUTO mode
      }
      
      // ============================================================
      // LEVEL 4: HOMEPAGE & LAINNYA
      // 'home' (Beranda) dinamis, butuh update lebih sering
      // ============================================================
      if (pageLevel === 'home') {
        return null; // AUTO mode (biar dinamis)
      }
      
      // ============================================================
      // DEFAULT: AUTO mode
      // ============================================================
      return null;
    }

    // ============================================================
    // 📌 FUNGSI GET CATEGORY LABEL (UNTUK LOGGING)
    // ============================================================
    function getCategoryLabel(pageLevel) {
      if (EVERGREEN_LEVELS.includes(pageLevel)) return 'EVERGREEN';
      if (FLEXIBLE_LEVELS.includes(pageLevel)) return 'FLEXIBLE';
      if (MONEY_LEVELS.includes(pageLevel)) return 'MONEY';
      if (pageLevel === 'home') return 'HOMEPAGE (DYNAMIC)';
      return 'UNKNOWN';
    }

    // ============================================================
    // 📌 EKSEKUSI UTAMA
    // ============================================================
    
    await loadAllScripts();
    
    // Tunggu sebentar agar pageLevelDetector selesai deteksi
    await new Promise(resolve => setTimeout(resolve, 200));
    
    // ============================================================
    // 🔥 DAPATKAN PAGE LEVEL DARI DETECTOR (PRIORITAS v18 > v17 > legacy)
    // ============================================================
    let pageLevel = 'pillar';
    let entityType = 'produk';
    let detectorVersion = 'unknown';
    
    if (window.pageLevelDetectorV18) {
      pageLevel = window.pageLevelDetectorV18.detect();
      entityType = window.pageLevelDetectorV18.detectEntityType();
      detectorVersion = 'v18.2';
      console.log(`📌 [${detectorVersion}] Detected Page Level: ${pageLevel}, Entity Type: ${entityType}`);
    } else if (window.pageLevelDetectorV17) {
      pageLevel = window.pageLevelDetectorV17.detect();
      entityType = window.pageLevelDetectorV17.detectEntityType();
      detectorVersion = 'v17.0';
      console.log(`📌 [${detectorVersion}] Detected Page Level: ${pageLevel}, Entity Type: ${entityType}`);
    } else if (window.pageLevelDetector) {
      pageLevel = window.pageLevelDetector.detect();
      entityType = window.pageLevelDetector.detectEntityType();
      detectorVersion = 'legacy';
      console.log(`📌 [${detectorVersion}] Detected Page Level: ${pageLevel}, Entity Type: ${entityType}`);
    } else {
      console.warn("⚠️ PageLevelDetector not ready, using defaults (pillar/produk)");
    }
    
    // ============================================================
    // 🔥 VALIDASI PAGE LEVEL
    // ============================================================
    const ALL_KNOWN_LEVELS = [...EVERGREEN_LEVELS, ...FLEXIBLE_LEVELS, ...MONEY_LEVELS, 'home'];
    if (!ALL_KNOWN_LEVELS.includes(pageLevel)) {
      console.warn(`⚠️ Unknown page level: ${pageLevel}, defaulting to pillar`);
      pageLevel = 'pillar';
    }
    
    // ============================================================
    // 🔥 STEP 2: TENTUKAN CUSTOM DATE BERDASARKAN HASIL DETEKSI
    // ============================================================
    let customDate = getCustomDateByPageLevel(pageLevel, entityType);
    let manualMode = customDate !== null;
    let categoryLabel = getCategoryLabel(pageLevel);
    
    if (manualMode) {
      console.log(`📌 [CUSTOM DATE] PageLevel=${pageLevel}, EntityType=${entityType}, Category=${categoryLabel}`);
      console.log(`   → Using custom date: ${customDate}`);
    } else {
      console.log(`📌 [AUTO MODE] PageLevel=${pageLevel}, EntityType=${entityType}, Category=${categoryLabel}`);
      console.log(`   → No custom date, using auto calculation (SmartEvergreenDetector)`);
    }
    
    // ============================================================
    // 🔥 STEP 3: JALANKAN DETEKTOR DENGAN ATAU TANPA CUSTOM DATE
    // ============================================================
    if (manualMode && customDate) {
      await window.detectEvergreen({ customDateModified: customDate });
      console.log(`✅ MANUAL mode executed with custom date: ${customDate}`);
    } else {
      await window.detectEvergreen();
      console.log(`✅ AUTO mode executed`);
    }
    
    // ============================================================
    // 📌 PASTIKAN AEDMetaDates TERSEDIA
    // ============================================================
    if (!window.AEDMetaDates || !window.AEDMetaDates.dateModified) {
      console.warn("[HybridDateModified] AEDMetaDates tidak ditemukan, skip update.");
      return;
    }

    const { dateModified, nextUpdate, type, entityType: detectedEntityType, pageLevel: detectedPageLevel } = window.AEDMetaDates;

    console.log(`📊 betonjayareadymix.com Page Info:`);
    console.log(`   - type: ${type}`);
    console.log(`   - entityType: ${detectedEntityType}`);
    console.log(`   - pageLevel: ${detectedPageLevel}`);
    console.log(`   - dateModified: ${dateModified}`);
    console.log(`   - nextUpdate: ${nextUpdate}`);

    // ============================================================
    // 📌 HITUNG VARIASI TANGGAL (UNIQUE PER HALAMAN)
    // ============================================================
    const uniquePageIdentifier = window.location.pathname;
    let hashSource = uniquePageIdentifier;
    
    if (EVERGREEN_LEVELS.includes(detectedPageLevel)) {
      hashSource = 'evergreen-' + hashSource;
      console.log(`📌 Evergreen content (${detectedPageLevel}) → using evergreen hash prefix`);
    } else if (FLEXIBLE_LEVELS.includes(detectedPageLevel)) {
      hashSource = 'flexible-' + hashSource;
      console.log(`📌 Flexible content (${detectedPageLevel}) → using flexible hash prefix`);
    } else if (detectedEntityType === 'jasa') {
      hashSource = 'jasa-' + hashSource;
      console.log(`📌 Jasa content (${detectedPageLevel}) → using jasa hash prefix`);
    } else if (MONEY_LEVELS.includes(detectedPageLevel)) {
      hashSource = 'money-' + hashSource;
      console.log(`📌 Money page (${detectedPageLevel}) → using money hash prefix`);
    } else if (detectedPageLevel === 'home') {
      hashSource = 'home-' + hashSource;
      console.log(`📌 Homepage (${detectedPageLevel}) → using home hash prefix`);
    }
    
    const hash = stableHash(hashSource);
    const offsetSeconds = hash % 86400; // maksimal 24 jam
    const finalDate = new Date(new Date(dateModified).getTime() + offsetSeconds * 1000);
    const isoDate = toISOWithTimezoneLocal(finalDate);

    // ============================================================
    // 📌 UPDATE META DATEMODIFIED
    // ============================================================
    updateMetaDateModified(isoDate);

    window.AEDMetaDates = {
      ...window.AEDMetaDates,
      dateModified: isoDate,
      hashOffset: offsetSeconds,
      detectorVersion: detectorVersion,
      category: categoryLabel,
      mode: manualMode ? 'MANUAL' : 'AUTO'
    };

    console.log(`✅ [HybridDateModified] ${uniquePageIdentifier} → ${isoDate}`);
    console.log(`   - offsetSeconds: ${offsetSeconds} detik (${Math.floor(offsetSeconds / 3600)} jam ${Math.floor((offsetSeconds % 3600) / 60)} menit)`);
    console.log(`   - Mode: ${manualMode ? 'MANUAL (custom date based on page level)' : 'AUTO (SmartEvergreenDetector)'}`);
    console.log(`   - Category: ${categoryLabel}`);
    console.log(`   - Detector: ${detectorVersion}`);
    console.log(`📋 Custom config for betonjayareadymix.com applied successfully`);

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
if (urlMappingJasaBoronganPondasiFromMoneyPageMoneyChild[cleanUrlJasaPondasiPerkuatanTanahKonsPost]) {
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
        pageNameJasaKonsPondasiTanahPost.textContent = urlMappingJasaBoronganPondasiFromMoneyPageMoneyChild[cleanUrlJasaPondasiPerkuatanTanahKonsPost];

	generateBreadcrumbjasaKonstruksiPondasiPerkuatanTanahPost(
        urlMappingJasaBoronganPondasiFromMoneyPageMoneyChild,
        cleanUrlJasaPondasiPerkuatanTanahKonsPost,
        [
           // { name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
             { name: 'Daftar Jasa Pondasi & Perkuatan Tanah', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-pondasi-perkuatan-tanah.html' },
			{ name: 'Perbandingan Jasa Pondasi & Perkuatan Tanah', url: 'https://www.betonjayareadymix.com/p/perbandingan-pondasi-perkuatan-tanah.html' },
			{ name: 'Jasa Borongan Pondasi', url: 'https://www.betonjayareadymix.com/p/jasa-borongan-pondasi.html' }
        ],
        'JASA_KONSTRUKSI'
    );
}
	/*
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
   */
	
if (urlMappingJasaPondasiCakarAyamFromMoneyPageMoneyChild[cleanUrlJasaPondasiPerkuatanTanahKonsPost]) {
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
        pageNameJasaKonsPondasiTanahPost.textContent = urlMappingJasaPondasiCakarAyamFromMoneyPageMoneyChild[cleanUrlJasaPondasiPerkuatanTanahKonsPost];
	
	generateBreadcrumbjasaKonstruksiPondasiPerkuatanTanahPost(
        urlMappingJasaPondasiCakarAyamFromMoneyPageMoneyChild,
        cleanUrlJasaPondasiPerkuatanTanahKonsPost,
        [
           // { name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
             { name: 'Daftar Jasa Pondasi & Perkuatan Tanah', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-pondasi-perkuatan-tanah.html' },
			{ name: 'Perbandingan Jasa Pondasi & Perkuatan Tanah', url: 'https://www.betonjayareadymix.com/p/perbandingan-pondasi-perkuatan-tanah.html' },
			{ name: 'Jasa Pondasi Cakar Ayam', url: 'https://www.betonjayareadymix.com/p/jasa-pondasi-cakar-ayam.html' }
        ],
        'JASA_KONSTRUKSI'
    );
}
    /*
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
   */
	
    if (urlMappingJasaPondasiTapakFromMoneyPageMoneyChild[cleanUrlJasaPondasiPerkuatanTanahKonsPost]) {
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
        pageNameJasaKonsPondasiTanahPost.textContent = urlMappingJasaPondasiTapakFromMoneyPageMoneyChild[cleanUrlJasaPondasiPerkuatanTanahKonsPost];
		
	generateBreadcrumbjasaKonstruksiPondasiPerkuatanTanahPost(
        urlMappingJasaPondasiTapakFromMoneyPageMoneyChild,
        cleanUrlJasaPondasiPerkuatanTanahKonsPost,
        [
           // { name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
             { name: 'Daftar Jasa Pondasi & Perkuatan Tanah', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-pondasi-perkuatan-tanah.html' },
			{ name: 'Perbandingan Jasa Pondasi & Perkuatan Tanah', url: 'https://www.betonjayareadymix.com/p/perbandingan-pondasi-perkuatan-tanah.html' },
			{ name: 'Jasa Pondasi Tapak', url: 'https://www.betonjayareadymix.com/p/jasa-pondasi-tapak.html' }
        ],
        'JASA_KONSTRUKSI'
    );
	
    }
/*
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
 */
	
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
