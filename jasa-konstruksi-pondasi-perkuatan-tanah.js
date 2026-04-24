/*
const urlMappingJasaPondasiBangunan = {
//"https://www.betonjayareadymix.com/p/jasa-borongan-pondasi.html": "Jasa Borongan Pondasi",
"https://www.betonjayareadymix.com/p/jasa-pondasi-cakar-ayam.html": "Jasa Pondasi Cakar Ayam",
  "https://www.betonjayareadymix.com/p/jasa-pondasi-tapak.html": "Jasa Pondasi Tapak",
  //ga usah karna udah ada di jasa pengeboran 
  //"https://www.betonjayareadymix.com/p/jasa-pondasi-bore-pile.html": "Jasa Pondasi Bore Pile",
  "https://www.betonjayareadymix.com/p/jasa-tiang-pancang.html": "Jasa Tiang Pancang",
  "https://www.betonjayareadymix.com/p/jasa-pondasi-sumuran.html": "Jasa Pondasi Sumuran"

};

const urlMappingJasaPemadatanPersiapanPondasi = {
"https://www.betonjayareadymix.com/p/jasa-pemadatan-pondasi-bangunan.html": "Jasa pemadatan pondasi bangunan",
  "https://www.betonjayareadymix.com/p/jasa-cut-and-fill-pondasi.html": "Jasa cut and fill pondasi",
  "https://www.betonjayareadymix.com/p/jasa-leveling-tanah-proyek-gedung.html": "Jasa leveling tanah proyek gedung",
  "https://www.betonjayareadymix.com/p/jasa-pembersihan-lahan-konstruksi.html": "Jasa pembersihan lahan konstruksi",
  "https://www.betonjayareadymix.com/p/jasa-uji-kepadatan-tanah-pondasi.html": "Jasa uji kepadatan tanah pondasi"

};

const urlMappingJasaPerkuatanTanah = {
"https://www.betonjayareadymix.com/p/jasa-soil-improvement.html": "Jasa Soil Improvement",
  "https://www.betonjayareadymix.com/p/jasa-perkuatan-tanah-geotextile.html": "Jasa Perkuatan Tanah Geotextile",
  "https://www.betonjayareadymix.com/p/jasa-perkuatan-tanah-stone-column.html": "Jasa Perkuatan Tanah Stone Column",
  "https://www.betonjayareadymix.com/p/jasa-vertical-drain.html": "Jasa Vertical Drain",
  "https://www.betonjayareadymix.com/p/jasa-soil-nailing.html": "Jasa Soil Nailing"

};

const urlMappingJasaRetrofittingPondasi = {
"https://www.betonjayareadymix.com/p/jasa-perkuatan-pondasi-bangunan-lama.html": "Jasa Perkuatan Pondasi Bangunan Lama",
  "https://www.betonjayareadymix.com/p/jasa-pondasi-untuk-penurunan-tanah.html": "Jasa Pondasi Untuk Penurunan Tanah",
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-pondasi-penurunan-tanah.html": "Jasa Perbaikan Pondasi Penurunan Tanah",
  "https://www.betonjayareadymix.com/p/retrofitting-pondasi-penambahan-lantai.html": "Retrofitting Pondasi Penambahan Lantai",
  "https://www.betonjayareadymix.com/p/jasa-underpinning-pondasi.html": "Jasa Underpinning Pondasi",
  "https://www.betonjayareadymix.com/p/jasa-grouting-pondasi.html": "Jasa Grouting Pondasi"
	
};
*/
// ============================================================
// 🔍 ENTITY TYPE: JASA (Pondasi & Perkuatan Tanah)
// ATURAN: JASA TIDAK BOLEH MENGGUNAKAN MONEY_MASTER
// ✅ Gunakan: SUB2 (Informasional 60%) atau MONEY_PAGE (Komersial+Transaksional)
// ✅ Gunakan: VARIANT (Komersial 80%) UNTUK SPESIFIKASI TEKNIS YANG SANGAT DETAIL
// ❌ Dilarang: MONEY_MASTER untuk JASA
//
// ⚠️ KOREKSI UTAMA:
// 1. Halaman dengan konten INFORMASIONAL/EDUKASI → TYPE: SUB2
// 2. Halaman dengan konten HARGA/TRANSAKSIONAL → TYPE: MONEY_PAGE
// 3. Halaman dengan SPESIFIKASI TEKNIS SANGAT DETAIL → TYPE: VARIANT
// 4. SUB2 (Level 2) → SUB2 (Level 3) → MONEY_PAGE (Level 5)
// 5. SUB2 TIDAK BOLEH LANGSUNG KE VARIANT
// ============================================================

// ============================================================
// 📁 LEVEL 2 - SUB2 (Kategori Utama - Turunan dari PILLAR Jasa Konstruksi)
// ============================================================

const urlMappingPondasiPerkuatanTanahFromPillarSub2 = {
  "https://www.betonjayareadymix.com/p/jasa-pondasi-perkuatan-tanah.html": "Jasa Pondasi & Perkuatan Tanah",  // TYPE: SUB2
};

// ============================================================
// 📁 LEVEL 3 - SUB2 (Sub-Kategori - BUKAN VARIANT!)
// 🧠 TYPE: SUB2 (Intent Informasional 60%)
// ALASAN: Konten bersifat edukasi/panduan, bukan spesifikasi teknis detail
// ============================================================

const urlMappingJasaPondasiBangunanFromSub2Sub2 = {
  // [SUB2] - Jasa Pondasi Bangunan (KATEGORI, BUKAN VARIANT)
  "https://www.betonjayareadymix.com/p/jasa-pondasi-bangunan.html": "Jasa Pondasi Bangunan",  // TYPE: SUB2
  
  // [SUB2] - Jasa Pondasi Cakar Ayam (EDUKASI, BUKAN VARIANT)
  "https://www.betonjayareadymix.com/p/jasa-pondasi-cakar-ayam.html": "Jasa Pondasi Cakar Ayam",  // TYPE: SUB2

  // [SUB2] - Jasa Pondasi Tapak (EDUKASI)
  "https://www.betonjayareadymix.com/p/jasa-pondasi-tapak.html": "Jasa Pondasi Tapak",  // TYPE: SUB2

  // [SUB2] - Jasa Tiang Pancang (EDUKASI)
  "https://www.betonjayareadymix.com/p/jasa-tiang-pancang.html": "Jasa Tiang Pancang",  // TYPE: SUB2

  // [SUB2] - Jasa Pondasi Sumuran (EDUKASI)
  "https://www.betonjayareadymix.com/p/jasa-pondasi-sumuran.html": "Jasa Pondasi Sumuran",  // TYPE: SUB2
};

const urlMappingJasaPemadatanPersiapanPondasiFromSub2Sub2 = {
  // [SUB2] - Jasa Pemadatan & Persiapan Pondasi (KATEGORI)
  "https://www.betonjayareadymix.com/p/jasa-pemadatan-persiapan-pondasi.html": "Jasa Pemadatan & Persiapan Pondasi",  // TYPE: SUB2
  
  // [SUB2] - Jasa Pemadatan Pondasi Bangunan (EDUKASI)
  "https://www.betonjayareadymix.com/p/jasa-pemadatan-pondasi-bangunan.html": "Jasa Pemadatan Pondasi Bangunan",  // TYPE: SUB2

  // [SUB2] - Jasa Cut and Fill Pondasi (EDUKASI)
  "https://www.betonjayareadymix.com/p/jasa-cut-and-fill-pondasi.html": "Jasa Cut and Fill Pondasi",  // TYPE: SUB2

  // [SUB2] - Jasa Leveling Tanah Proyek Gedung (EDUKASI)
  "https://www.betonjayareadymix.com/p/jasa-leveling-tanah-proyek-gedung.html": "Jasa Leveling Tanah Proyek Gedung",  // TYPE: SUB2

  // [SUB2] - Jasa Pembersihan Lahan Konstruksi (EDUKASI)
  "https://www.betonjayareadymix.com/p/jasa-pembersihan-lahan-konstruksi.html": "Jasa Pembersihan Lahan Konstruksi",  // TYPE: SUB2

  // [SUB2] - Jasa Uji Kepadatan Tanah Pondasi (EDUKASI)
  "https://www.betonjayareadymix.com/p/jasa-uji-kepadatan-tanah-pondasi.html": "Jasa Uji Kepadatan Tanah Pondasi",  // TYPE: SUB2
};

const urlMappingJasaPerkuatanTanahFromSub2Sub2 = {
  // [SUB2] - Jasa Perkuatan Tanah (KATEGORI)
  "https://www.betonjayareadymix.com/p/jasa-perkuatan-tanah.html": "Jasa Perkuatan Tanah",  // TYPE: SUB2
  
  // [SUB2] - Jasa Soil Improvement (EDUKASI - BUKAN VARIANT)
  "https://www.betonjayareadymix.com/p/jasa-soil-improvement.html": "Jasa Soil Improvement",  // TYPE: SUB2

  // [SUB2] - Jasa Perkuatan Tanah Geotextile (EDUKASI)
  "https://www.betonjayareadymix.com/p/jasa-perkuatan-tanah-geotextile.html": "Jasa Perkuatan Tanah Geotextile",  // TYPE: SUB2

  // [SUB2] - Jasa Perkuatan Tanah Stone Column (EDUKASI)
  "https://www.betonjayareadymix.com/p/jasa-perkuatan-tanah-stone-column.html": "Jasa Perkuatan Tanah Stone Column",  // TYPE: SUB2

  // [SUB2] - Jasa Vertical Drain (EDUKASI)
  "https://www.betonjayareadymix.com/p/jasa-vertical-drain.html": "Jasa Vertical Drain",  // TYPE: SUB2

  // [SUB2] - Jasa Soil Nailing (EDUKASI)
  "https://www.betonjayareadymix.com/p/jasa-soil-nailing.html": "Jasa Soil Nailing",  // TYPE: SUB2
};

const urlMappingJasaRetrofittingPondasiFromSub2Sub2 = {
  // [SUB2] - Jasa Retrofitting Pondasi (KATEGORI)
  "https://www.betonjayareadymix.com/p/jasa-retrofitting-pondasi.html": "Jasa Retrofitting Pondasi",  // TYPE: SUB2
  
  // [SUB2] - Jasa Perkuatan Pondasi Bangunan Lama (EDUKASI)
  "https://www.betonjayareadymix.com/p/jasa-perkuatan-pondasi-bangunan-lama.html": "Jasa Perkuatan Pondasi Bangunan Lama",  // TYPE: SUB2

  // [SUB2] - Jasa Pondasi Untuk Penurunan Tanah (EDUKASI)
  "https://www.betonjayareadymix.com/p/jasa-pondasi-untuk-penurunan-tanah.html": "Jasa Pondasi Untuk Penurunan Tanah",  // TYPE: SUB2

  // [SUB2] - Jasa Perbaikan Pondasi Penurunan Tanah (EDUKASI)
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-pondasi-penurunan-tanah.html": "Jasa Perbaikan Pondasi Penurunan Tanah",  // TYPE: SUB2

  // ============================================================
  // ⚠️ KONTEN TIPIS (Kemungkinan hanya breadcrumb)
  // SARAN: Perbaiki konten atau redirect ke halaman SUB2 yang lebih relevan
  // ============================================================
  "https://www.betonjayareadymix.com/p/retrofitting-pondasi-penambahan-lantai.html": "Retrofitting Pondasi Penambahan Lantai",  // TYPE: SUB2 - KONTEN TIPIS
  "https://www.betonjayareadymix.com/p/jasa-underpinning-pondasi.html": "Jasa Underpinning Pondasi",  // TYPE: SUB2 - KONTEN TIPIS
  "https://www.betonjayareadymix.com/p/jasa-grouting-pondasi.html": "Jasa Grouting Pondasi",  // TYPE: SUB2 - KONTEN TIPIS
};

// ============================================================
// 📁 LEVEL 5 - MONEY_PAGE (Harga Jasa) - BRIDGE antara SUB2 dan VARIANT
// 🧠 TYPE: MONEY_PAGE (Komersial 60% + Transaksional 40%)
// 🟡 STATUS: SEMUA URL BELUM AKTIF (404 atau perlu dibuat)
// ============================================================

const urlMappingHargaPondasiFromSub2MoneyPage = {
  // ============================================================
  // [MONEY_PAGE] - HARGA PONDASI CAKAR AYAM
  // 🟡 STATUS: PERLU DIBUAT KONTEN
  // ============================================================
  // "https://www.betonjayareadymix.com/2019/08/harga-pondasi-cakar-ayam.html": "Harga Pondasi Cakar Ayam",  // TYPE: MONEY_PAGE
  
  // ============================================================
  // [MONEY_PAGE] - HARGA PONDASI TAPAK
  // ============================================================
  // "https://www.betonjayareadymix.com/2019/08/harga-pondasi-tapak.html": "Harga Pondasi Tapak",  // TYPE: MONEY_PAGE
  
  // ============================================================
  // [MONEY_PAGE] - HARGA TIANG PANCANG
  // ============================================================
  // "https://www.betonjayareadymix.com/2019/08/harga-tiang-pancang.html": "Harga Tiang Pancang",  // TYPE: MONEY_PAGE
  
  // ============================================================
  // [MONEY_PAGE] - HARGA PEMADATAN TANAH
  // ============================================================
  // "https://www.betonjayareadymix.com/2019/08/harga-pemadatan-tanah.html": "Harga Pemadatan Tanah",  // TYPE: MONEY_PAGE
  
  // ============================================================
  // [MONEY_PAGE] - HARGA SOIL IMPROVEMENT
  // ============================================================
  // "https://www.betonjayareadymix.com/2019/08/harga-soil-improvement.html": "Harga Soil Improvement",  // TYPE: MONEY_PAGE
  
  // ============================================================
  // [MONEY_PAGE] - HARGA STONE COLUMN
  // ============================================================
  // "https://www.betonjayareadymix.com/2019/08/harga-stone-column.html": "Harga Stone Column",  // TYPE: MONEY_PAGE
  
  // ============================================================
  // [MONEY_PAGE] - HARGA RETROFITTING PONDASI
  // ⚠️ STATUS: URL 404 - PERLU DIBUAT KONTEN (jika diperlukan)
  // ============================================================
  // "https://www.betonjayareadymix.com/2019/08/harga-retrofitting-pondasi.html": "Harga Retrofitting Pondasi",  // TYPE: MONEY_PAGE (URL 404)
  
  // ============================================================
  // [MONEY_PAGE] - HARGA UNDERPINNING PONDASI
  // ⚠️ STATUS: URL 404 - PERLU DIBUAT KONTEN (jika diperlukan)
  // ============================================================
  // "https://www.betonjayareadymix.com/2019/08/harga-underpinning-pondasi.html": "Harga Underpinning Pondasi",  // TYPE: MONEY_PAGE (URL 404)
  
  // ============================================================
  // [MONEY_PAGE] - HARGA GROUTING PONDASI
  // ⚠️ STATUS: URL 404 - PERLU DIBUAT KONTEN (jika diperlukan)
  // ============================================================
  // "https://www.betonjayareadymix.com/2019/08/harga-grouting-pondasi.html": "Harga Grouting Pondasi",  // TYPE: MONEY_PAGE (URL 404)
};

// ============================================================
// 📁 LEVEL 7 - VARIANT (Spesifikasi Teknis Detail)
// 🧠 TYPE: VARIANT (Komersial 80%)
// ⚠️ HANYA untuk halaman dengan SPESIFIKASI TEKNIS YANG SANGAT DETAIL
// Contoh: "Spesifikasi Pondasi Cakar Ayam untuk Rumah 2 Lantai" (VARIANT)
// ============================================================

const urlMappingPondasiVariantFromMoneyPageVariant = {
  // 🟡 SARAN ITEM VARIANT (jika diperlukan - BELUM AKTIF)
  // "https://www.betonjayareadymix.com/p/spesifikasi-pondasi-cakar-ayam-2-lantai.html": "Spesifikasi Pondasi Cakar Ayam untuk Rumah 2 Lantai",  // TYPE: VARIANT
  // "https://www.betonjayareadymix.com/p/metode-soil-improvement-vacuum-consolidation.html": "Metode Soil Improvement Vacuum Consolidation",  // TYPE: VARIANT
};

// ============================================================
// 🔴 BREADCRUMB YANG BENAR (SETELAH KOREKSI)
// ============================================================

/*
📌 BREADCRUMB UNTUK HALAMAN SUB2 (LEVEL 2)

Halaman: Jasa Pondasi & Perkuatan Tanah
Breadcrumb (3 level):
Home > Jasa Konstruksi > Jasa Pondasi & Perkuatan Tanah

📌 BREADCRUMB UNTUK HALAMAN SUB2 (LEVEL 3)

Halaman: Jasa Pondasi Cakar Ayam, Jasa Soil Improvement, dll
Breadcrumb (4 level):
Home > Jasa Konstruksi > Jasa Pondasi & Perkuatan Tanah > Jasa Pondasi Cakar Ayam

📌 BREADCRUMB UNTUK HALAMAN MONEY_PAGE (jika dibuat nanti)

Halaman: Harga Pondasi Cakar Ayam
Breadcrumb (4 level):
Home > Jasa Konstruksi > Jasa Pondasi & Perkuatan Tanah > Harga Pondasi Cakar Ayam

📌 BREADCRUMB UNTUK HALAMAN VARIANT (jika dibuat nanti)

Halaman: Spesifikasi Pondasi Cakar Ayam untuk Rumah 2 Lantai
Breadcrumb (5 level - skip MONEY_PAGE jika perlu):
Home > Jasa Konstruksi > Jasa Pondasi & Perkuatan Tanah > Jasa Pondasi Cakar Ayam > Spesifikasi Pondasi Cakar Ayam 2 Lantai
*/

// ============================================================
// 📋 RINGKASAN KOREKSI TYPE
// ============================================================

/*
SEBELUM (SALAH)                    | SESUDAH (BENAR)
------------------------------------|-------------------------------------
TYPE: VARIANT untuk semua halaman   | TYPE: SUB2 untuk konten edukasi
Parent: SUB2 (Level 2) → VARIANT    | Parent: SUB2 (Level 2) → SUB2 (Level 3)
Loncat 5 level                      | Turun 1 level (sesuai aturan)
MONEY_MASTER dalam saran item       | MONEY_PAGE dalam saran item (karena JASA)

✅ KESIMPULAN:
1. Semua halaman dengan konten INFORMASIONAL/EDUKASI → TYPE: SUB2
2. VARIANT hanya untuk SPESIFIKASI TEKNIS YANG SANGAT DETAIL
3. MONEY_PAGE untuk harga JASA (bukan MONEY_MASTER)
4. SUB2 → MONEY_PAGE → VARIANT (jika VARIANT diperlukan nanti)
*/

// ============================================================
// 🔴 STATUS KONTEN YANG PERLU DIPERHATIKAN
// ============================================================

/*
| URL | Status | Rekomendasi |
|-----|--------|--------------|
| /p/jasa-pondasi-cakar-ayam.html | AKTIF ✅ | SUB2 - sudah benar |
| /p/jasa-pondasi-tapak.html | AKTIF ✅ | SUB2 - sudah benar |
| /p/jasa-perkuatan-tanah.html | AKTIF ✅ | SUB2 - sudah benar |
| /p/jasa-soil-improvement.html | Perlu dicek ⚠️ | Pastikan konten cukup sebagai SUB2 |
| /p/retrofitting-pondasi-penambahan-lantai.html | Konten tipis ⚠️ | Perbaiki konten atau redirect |
| /p/jasa-underpinning-pondasi.html | Konten tipis ⚠️ | Perbaiki konten atau redirect |
| /p/jasa-grouting-pondasi.html | Konten tipis ⚠️ | Perbaiki konten atau redirect |
| /2019/08/harga-*.html | 404 ❌ | Buat konten MONEY_PAGE jika diperlukan |
*/
// ============================================================
// FUNGSI GENERATE BREADCRUMB - VERSI FINAL
// UNTUK SEMUA ENTITY TYPE (PRODUK, MATERIAL, JASA, SEWA/RENTAL)
// SUPPORT: Produk Konstruksi, Material Konstruksi, Jasa Konstruksi, 
//          Produk Interior, Jasa Desain Interior, Sewa/Rental
// MAX_LEVEL = 4 (TERMASUK HOME)
// SKIP LEVEL BEKERJA UNTUK PILLAR & SUB2
// ============================================================

function generateBreadcrumbForMapping(mappingObj, currentUrl, breadcrumbItems = [], entityType = 'PRODUK_INTERIOR') {
    
    const MAX_LEVEL = 4;
    const DOMAIN = 'https://www.betonjayareadymix.com';
    
    // ============================================================
    // 1. VALIDASI ENTITY TYPE (SEMUA TYPE DIDUKUNG)
    // ============================================================
    const validEntityTypes = [
        // PRODUK
        'PRODUK_KONSTRUKSI', 
        'PRODUK_INTERIOR',
        'PRODUK',
        // MATERIAL
        'MATERIAL_KONSTRUKSI',
        'MATERIAL',
        // JASA
        'JASA_KONSTRUKSI',
        'JASA_DESAIN_INTERIOR',
        'JASA',
        // SEWA/RENTAL
        'SEWA',
        'RENTAL',
        'SEWA_RENTAL',
        'SEWA_ALAT',
        'RENTAL_ALAT'
    ];
    
    if (!validEntityTypes.includes(entityType)) {
        console.error(`❌ ERROR: "${entityType}" BUKAN ENTITY TYPE yang valid!`);
        console.error(`   Gunakan salah satu dari: ${validEntityTypes.join(', ')}`);
        return null;
    }
    
    // Ambil page title dari mappingObj atau dari breadcrumbItems terakhir
    let pageTitle = mappingObj?.[currentUrl];
    if (!pageTitle && breadcrumbItems.length > 0) {
        const lastItem = breadcrumbItems[breadcrumbItems.length - 1];
        pageTitle = typeof lastItem === 'object' ? lastItem.name : lastItem;
    }
    
    if (!pageTitle) {
        console.error(`❌ ERROR: Page title tidak ditemukan untuk URL "${currentUrl}"`);
        return null;
    }
    
    // ============================================================
    // 2. KUMPULKAN SEMUA NAMA HALAMAN DARI MAPPING
    // ============================================================
    const allPageNames = [];
    if (mappingObj) {
        for (const [url, name] of Object.entries(mappingObj)) {
            if (name && typeof name === 'string') {
                allPageNames.push(name.toLowerCase());
            }
        }
    }
    
    // ============================================================
    // 3. DETEKSI TYPE OTOMATIS (SESUAI STANDAR PHASE 1)
    // DENGAN DUKUNGAN SEMUA ENTITY TYPE
    // ============================================================
    function detectPageType(pageName, position, totalLevels) {
        const lowerName = pageName.toLowerCase();
        const words = lowerName.split(' ');
        const firstWord = words[0];
        const lastWord = words[words.length - 1];
        
        // ============================================================
        // PRIORITAS 1: PILLAR (level terluas, posisi pertama)
        // ============================================================
        if (position === 0) {
            return 'PILLAR';
        }
        
        // ============================================================
        // PRIORITAS 2: MONEY_LEADGEN (khusus JASA & SEWA)
        // ============================================================
        const leadgenWords = ['konsultasi', 'survey', 'hubungi', 'contact', 'estimasi', 'penawaran'];
        for (const word of leadgenWords) {
            if (lowerName.startsWith(word + ' ') || lowerName === word) {
                return 'MONEY_LEADGEN';
            }
        }
        
        // ============================================================
        // PRIORITAS 3: MONEY_MASTER (harga NASIONAL/UMUM)
        // KHUSUS PRODUK, MATERIAL, SEWA (JASA TIDAK BOLEH)
        // ============================================================
        function isMoneyMaster(name) {
            const lower = name.toLowerCase();
            
            // JASA tidak boleh menggunakan MONEY_MASTER
            const isJasaEntity = ['JASA_KONSTRUKSI', 'JASA_DESAIN_INTERIOR', 'JASA'].includes(entityType);
            if (isJasaEntity) {
                return false;
            }
            
            // Harus diawali "harga" atau "sewa" (untuk rental)
            const hasPriceKeyword = lower.startsWith('harga ') || lower.startsWith('sewa ') || lower.startsWith('biaya ');
            if (!hasPriceKeyword) return false;
            
            // Cek apakah ada produk spesifik (bukan kategori umum)
            let afterKeyword = '';
            if (lower.startsWith('harga ')) afterKeyword = lower.substring(6);
            if (lower.startsWith('sewa ')) afterKeyword = lower.substring(5);
            if (lower.startsWith('biaya ')) afterKeyword = lower.substring(6);
            
            // Kata kunci yang menandakan produk SPESIFIK (bukan umum)
            const specificProductIndicators = [
                'pabrikan', 'minimalis', 'modern', 'modular', 'siap pakai',
                'hpl', 'mdf', 'jati', 'bigland', 'pengantin', 'murah',
                'premium', 'ekonomis', 'standar', 'custom', 'bespoke',
                '0.', '0,', '1.', '2.', '3.', 'mm', 'cm', 'meter', 'inch',
                'putih', 'hitam', 'merah', 'biru', 'hijau', 'kuning',
                'kecil', 'besar', 'sedang', 'mini', 'maxi', 'jumbo',
                // Untuk sewa/rental
                'excavator', 'bulldozer', 'crane', 'dump truck', 'vibro',
                'alat berat', 'alat konstruksi'
            ];
            
            for (const indicator of specificProductIndicators) {
                if (afterKeyword.includes(indicator)) {
                    return false; // Ini MONEY_PAGE, bukan MONEY_MASTER
                }
            }
            
            // Jika hanya "harga [kategori]" atau "sewa [kategori]" -> MONEY_MASTER
            return true;
        }
        
        if (isMoneyMaster(pageName)) {
            return 'MONEY_MASTER';
        }
        
        // ============================================================
        // PRIORITAS 4: MONEY_PAGE (harga PRODUK SPESIFIK)
        // ============================================================
        const hasPriceOrRent = lowerName.includes('harga ') || 
                                lowerName.includes('sewa ') || 
                                lowerName.includes('biaya ') ||
                                lowerName.includes('jual ') ||
                                lowerName.includes('beli ') ||
                                lowerName.includes('rental ');
        
        if (hasPriceOrRent && !isMoneyMaster(pageName)) {
            return 'MONEY_PAGE';
        }
        
        // ============================================================
        // PRIORITAS 5: MONEY_PAGE (jual/beli/sewa produk spesifik)
        // ============================================================
        const transactionWords = ['jual', 'beli', 'sewa', 'pesan', 'booking', 'rental', 'order'];
        for (const word of transactionWords) {
            if (lowerName.startsWith(word + ' ')) {
                return 'MONEY_PAGE';
            }
        }
        
        // ============================================================
        // PRIORITAS 6: MONEY_CHILD (harga + lokasi ATAU sewa + lokasi)
        // DETEKSI LOKASI DENGAN WHITELIST + POLA (HYBRID METHOD)
        // ============================================================
        
        // Whitelist kota/kabupaten di Indonesia
        const locationIndicators = [
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
            'surabaya', 'malang', 'kediri', 'blitar', 'madiun', 'ponorogo', 'ngawi', 
            'magetan', 'trenggalek', 'tulungagung', 'nganjuk', 'jombang', 'mojokerto', 
            'gresik', 'sidoarjo', 'pasuruan', 'probolinggo', 'lumajang', 'jember', 
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
        
        // Pola akhiran kota (untuk mendeteksi kota yang tidak ada di whitelist)
        const citySuffixes = ['karta', 'jaya', 'pura', 'sari', 'mulya', 'agung', 'asih', 'ayem', 'luhur'];
        
        // Blacklist kata yang mirip lokasi tapi sebenarnya produk
        const notLocationWords = [
            'mini', 'maxi', 'super', 'extra', 'plus', 'pro', 'max', 'ultra',
            'baru', 'lama', 'bekas', 'second', 'original', 'kw', 'grade', 
            'murah', 'mahal', 'hemat', 'premium', 'standar', 'ekonomis', 
            'kecil', 'besar', 'sedang', 'panjang', 'pendek', 'tebal', 'tipis',
            'putih', 'hitam', 'merah', 'biru', 'hijau', 'kuning', 'ungu', 'abu', 'coklat',
            'minimalis', 'modern', 'klasik', 'industrial', 'skandinavia', 'jepang'
        ];
        
        function isLocation(word) {
            const lowerWord = word.toLowerCase();
            
            // LEVEL 1: Cek whitelist kota
            if (locationIndicators.includes(lowerWord)) return true;
            
            // LEVEL 2: Cek blacklist kata produk
            if (notLocationWords.includes(lowerWord)) return false;
            
            // LEVEL 3: Cek apakah kata tersebut dikenal sebagai produk (dari mapping)
            const isKnownProduct = allPageNames.some(known => 
                known === lowerWord || 
                known.includes(lowerWord) || 
                lowerWord.includes(known)
            );
            if (isKnownProduct) return false;
            
            // LEVEL 4: Cek pola akhiran kota
            for (const suffix of citySuffixes) {
                if (lowerWord.endsWith(suffix) && lowerWord.length >= 4) {
                    return true;
                }
            }
            
            // LEVEL 5: Cek pola kata dengan 2+ vokal (untuk kata yang panjang)
            if (lowerWord.length >= 5 && lowerWord.length <= 12) {
                const vowelCount = (lowerWord.match(/[aiueo]/g) || []).length;
                if (vowelCount >= 2) {
                    // Pastikan bukan kata produk umum
                    const commonProductWords = ['furniture', 'furnitur', 'meja', 'kursi', 'lemari', 'sofa'];
                    if (!commonProductWords.includes(lowerWord)) {
                        return true;
                    }
                }
            }
            
            return false;
        }
        
        // Cek apakah last word adalah lokasi (minimal 2 kata)
        if (words.length >= 2 && isLocation(lastWord)) {
            return 'MONEY_CHILD';
        }
        
        // ============================================================
        // PRIORITAS 7: SUB1 (perbandingan/evaluasi) - SEMUA ENTITY
        // ============================================================
        const comparisonWords = ['vs', 'versus', 'atau', 'lebih baik', 'perbandingan', 
                                  'banding', 'mana yang', 'kelebihan', 'kekurangan',
                                  'lebih bagus', 'lebih murah', 'lebih tahan', 'lebih awet',
                                  'plus minus', 'keunggulan', 'kelemahan'];
        for (const word of comparisonWords) {
            if (lowerName.includes(word)) {
                return 'SUB1';
            }
        }
        
        // ============================================================
        // PRIORITAS 8: SUB1 (panduan/cara/tips) - EDUKASI SEMUA ENTITY
        // ============================================================
        const guideWords = ['panduan', 'cara', 'tips', 'tutorial', 'langkah', 
                             'petunjuk', 'pedoman', 'strategi', 'metode', 'teknik',
                             'rahasia', 'kunci', 'wajib tahu', 'perlu diketahui'];
        for (const word of guideWords) {
            if (lowerName.startsWith(word + ' ') || lowerName.includes(' ' + word + ' ')) {
                return 'SUB1';
            }
        }
        
        // ============================================================
        // PRIORITAS 9: VARIANT (spesifikasi teknis) - PRODUK/MATERIAL/SEWA
        // ============================================================
        const variantIndicators = [
            'tipe', 'type', 'ukuran', 'model', 'varian', 'warna', 'bentuk', 'seri', 'versi',
            'spesifikasi', 'detail', 'rinci', 'bahan', 'material', 'komposisi', 'kualitas',
            'mutu', 'grade', 'kelas', 'standar', 'kode', 'kapasitas', 'tonase', 'daya'
        ];
        
        for (const word of variantIndicators) {
            if (lowerName.includes(' ' + word + ' ') || lowerName.endsWith(' ' + word)) {
                return 'VARIANT';
            }
        }
        
        // Deteksi angka (ukuran dimensi, tebal, kapasitas, dll)
        if (/\d+(\.\d+)?\s*(mm|cm|m|inch|meter|kg|gram|ton|liter|cc|pk|hp)/.test(lowerName)) {
            return 'VARIANT';
        }
        
        // ============================================================
        // PRIORITAS 10: SUB-VARIANT (sangat detail, level terbawah)
        // ============================================================
        if (lowerName.includes('tebal') || 
            lowerName.includes('ketebalan') ||
            lowerName.includes('lebar') ||
            lowerName.includes('panjang') ||
            lowerName.includes('tinggi') ||
            /\d+(\.\d+)?\s*mm\s*x\s*\d+(\.\d+)?\s*mm/.test(lowerName)) {
            return 'SUB_VARIANT';
        }
        
        // ============================================================
        // PRIORITAS 11: SUB2 (jenis/macam/tipe - konten informasional)
        // ============================================================
        if (lowerName.startsWith('jenis ') || 
            lowerName.startsWith('macam ') || 
            lowerName.startsWith('tipe ')) {
            return 'SUB2';
        }
        
        // ============================================================
        // DEFAULT: SUB2 untuk konten informasional biasa
        // ============================================================
        return 'SUB2';
    }
    
    // ============================================================
    // 4. FUNGSI BANTUAN
    // ============================================================
    function generateIdFromName(name) {
        return name.replace(/[^a-zA-Z0-9]/g, '') + 'Post';
    }
    
    function slugify(text) {
        return text.toLowerCase()
            .replace(/[^\w\s-]/g, '')
            .replace(/\s+/g, '-')
            .replace(/--+/g, '-')
            .trim();
    }
    
    // ============================================================
    // 5. BANGUN LEVELS DARI breadcrumbItems (SUPPORT OBJECT & STRING)
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
        
        allLevels.push({
            name: name,
            url: url,
            type: detectPageType(name, i, breadcrumbItems.length),
            id: generateIdFromName(name),
            position: i
        });
    }
    
    // ============================================================
    // 6. VALIDASI & FALLBACK URL
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
    // 7. TENTUKAN LEVEL YANG AKAN DITAMPILKAN (MAX 4 LEVEL)
    // ============================================================
    const selectedLevels = [];
    
    // Level 1: Home (WAJIB)
    selectedLevels.push({ 
        name: 'BJR', 
        url: DOMAIN, 
        isHome: true,
        type: 'HOME'
    });
    
    // Hitung slot tersisa (MAX_LEVEL - 1 untuk home - 1 untuk halaman saat ini)
    let remainingSlots = MAX_LEVEL - 2;
    
    console.log(`📊 ========================================`);
    console.log(`📊 Breadcrumb Generator - SEO Tercanggih`);
    console.log(`📊 Entity Type: ${entityType}`);
    console.log(`📊 Max level: ${MAX_LEVEL}, slot untuk parent: ${remainingSlots}`);
    console.log(`📊 Input levels: ${allLevels.map(l => `${l.name}(${l.type})`).join(' → ')}`);
    console.log(`📊 ========================================`);
    
    // Parent terdekat (level terakhir sebelum current page) - WAJIB tampil
    let parentTerdekat = null;
    if (allLevels.length > 0) {
        parentTerdekat = allLevels[allLevels.length - 1];
        selectedLevels.push(parentTerdekat);
        remainingSlots--;
        console.log(`✅ WAJIB: "${parentTerdekat.name}" (${parentTerdekat.type}) - sisa slot: ${remainingSlots}`);
    }
    
    // Level lainnya (dari awal sampai sebelum parent terdekat)
    // Di-reverse agar yang terdekat dengan parent diprioritaskan
    const otherLevels = [...allLevels.slice(0, allLevels.length - 1)].reverse();
    const canSkipTypes = ['PILLAR', 'SUB2'];
    
    for (const level of otherLevels) {
        if (remainingSlots <= 0) {
            console.log(`📌 SKIP: "${level.name}" (${level.type}) - tidak ada slot tersisa`);
            continue;
        }
        
        if (canSkipTypes.includes(level.type)) {
            console.log(`📌 SKIP: "${level.name}" (${level.type}) - type boleh skip`);
            continue;
        }
        
        // Tambahkan di posisi setelah Home (index 1)
        selectedLevels.splice(1, 0, level);
        remainingSlots--;
        console.log(`✅ TAMBAH: "${level.name}" (${level.type}) - sisa slot: ${remainingSlots}`);
    }
    
    // Halaman saat ini (WAJIB)
    const currentFullUrl = currentUrl.startsWith('http') ? currentUrl : DOMAIN + currentUrl;
    const currentPageType = detectPageType(pageTitle, allLevels.length, allLevels.length);
    
    selectedLevels.push({
        name: pageTitle,
        url: currentFullUrl,
        isCurrent: true,
        type: currentPageType
    });
    
    // Update position
    for (let i = 0; i < selectedLevels.length; i++) {
        selectedLevels[i].position = i + 1;
    }
    
    console.log(`✅ FINAL (${selectedLevels.length} level): ${selectedLevels.map(l => l.name).join(' → ')}`);
    console.log(`📊 Current page type: ${currentPageType}`);
    console.log(`📊 Entity Type: ${entityType}`);
    
    // ============================================================
    // 8. GENERATE HTML BREADCRUMB
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
    
    // ============================================================
    // 9. GENERATE JSON-LD SCHEMA
    // ============================================================
    const jsonLdItems = [];
    for (let i = 0; i < selectedLevels.length; i++) {
        const level = selectedLevels[i];
        jsonLdItems.push({
            "@type": "ListItem",
            "position": i + 1,
            "name": level.name,
            "item": level.url
        });
    }
    
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": jsonLdItems
    };
    
    // ============================================================
    // 10. HAPUS BREADCRUMB LAMA & INJECT YANG BARU
    // ============================================================
    
    // Hapus semua breadcrumb lama (manual)
    const oldBreadcrumbs = document.querySelectorAll('.breadcrumbs, .breadcrumb-nav, [aria-label="Breadcrumb"]');
    oldBreadcrumbs.forEach(el => el.remove());
    
    // Hapus JSON-LD breadcrumb lama
    const oldJsonLd = document.querySelector('script[data-breadcrumb="true"]');
    if (oldJsonLd) oldJsonLd.remove();
    
    // Inject HTML breadcrumb baru
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
    
    // Inject JSON-LD baru
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-breadcrumb', 'true');
    script.textContent = JSON.stringify(jsonLd);
    document.head.appendChild(script);
    
    console.log(`✅ Breadcrumb injected to DOM for entity: ${entityType}`);
    console.log(`📊 ========================================`);
    console.log(`✅ Breadcrumb generated and injected successfully!`);
    console.log(`📊 Entity Type: ${entityType} | Page Type: ${currentPageType}`);
    console.log(`📊 ========================================`);
    
    // ============================================================
    // 11. RETURN OUTPUT (LENGKAP)
    // ============================================================
    return {
        html: breadcrumbHtml,
        jsonLd: jsonLd,
        selectedLevels: selectedLevels,
        currentPageType: currentPageType,
        entityType: entityType,
        isValidType: true
    };
}

// ============================================================
// CONTOH PANGGILAN DENGAN URL MANUAL PER LEVEL
// ============================================================

/*
// MATERIAL KONSTRUKSI - READY MIX LOKASI
const result = generateBreadcrumbForMapping(
    urlMappingReadyMixLokasiPost,
    cleanUrl,
    [
        { name: 'Material Konstruksi', url: 'https://www.betonjayareadymix.com/p/material-konstruksi.html' },
        { name: 'Material Struktur Bangunan', url: 'https://www.betonjayareadymix.com/p/material-struktur-bangunan.html' },
        { name: 'Ready Mix Beton Cor Jayamix Minimix', url: 'https://www.betonjayareadymix.com/p/ready-mix-beton-cor-jayamix-minimix.html' },
        { name: 'Ready Mix Lokasi', url: 'https://www.betonjayareadymix.com/p/ready-mix-lokasi.html' }
    ],
    'MATERIAL_KONSTRUKSI'
);

// PRODUK INTERIOR - KITCHEN SET
const result2 = generateBreadcrumbForMapping(
    urlMappingKitchenSetPost,
    currentUrl,
    [
        { name: 'Produk Interior', url: 'https://www.betonjayareadymix.com/p/produk-interior.html' },
        { name: 'Jenis Kitchen Set', url: 'https://www.betonjayareadymix.com/p/jenis-kitchen-set.html' }
    ],
    'PRODUK_INTERIOR'
);

// JASA KONSTRUKSI - KONSULTASI
const result3 = generateBreadcrumbForMapping(
    urlMappingJasaPost,
    currentUrl,
    [
        { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
        { name: 'Jasa Borongan', url: 'https://www.betonjayareadymix.com/p/jasa-borongan.html' }
    ],
    'JASA_KONSTRUKSI'
);

// SEWA ALAT BERAT - EXCAVATOR
const result4 = generateBreadcrumbForMapping(
    urlMappingSewaPost,
    currentUrl,
    [
        { name: 'Sewa Alat Berat', url: 'https://www.betonjayareadymix.com/p/sewa-alat-berat.html' },
        { name: 'Jenis Excavator', url: 'https://www.betonjayareadymix.com/p/jenis-excavator.html' }
    ],
    'SEWA_RENTAL'
);
*/
// Menyimpan elemen yang dihapus dalam variabel
let removedElementsJasapondasiPerkuatanTanahKons = {};
// Fungsi untuk menghapus elemen berdasarkan ID
function removeCondition(conditionId) {
    const conditionElement = document.getElementById(conditionId);

    if (conditionElement) {
        // Menyimpan elemen yang dihapus dalam objek untuk bisa dikembalikan
        removedElementsJasapondasiPerkuatanTanahKons[conditionId] = conditionElement;
        conditionElement.remove(); // Menghapus elemen tersebut
    }
}

// Fungsi untuk mengembalikan elemen yang telah dihapus
function restoreCondition(conditionId) {
    const breadcrumb = document.querySelector('.breadcrumb');
    const elementToRestore = removedElementsJasapondasiPerkuatanTanahKons[conditionId]; // Mendapatkan elemen yang disimpan

    if (elementToRestore) {
        breadcrumb.appendChild(elementToRestore); // Menambahkan elemen kembali ke dalam breadcrumb
        delete removedElementsJasapondasiPerkuatanTanahKons[conditionId]; // Menghapus elemen dari objek setelah dikembalikan
    } else {
        console.log(`Elemen dengan ID ${conditionId} tidak ditemukan di removedElementsJasapondasiPerkuatanTanahKons.`);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    // var currentUrl = window.location.href;
     //const cleanUrl = currentUrl.split('?')[0]; // Menghapus parameter seperti ?m=1
    const cleanUrlJasaPondasiPerkuatanTanahKons = window.location.href.split(/[?#]/)[0]; // Menghilangkan parameter seperti ?m=1

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
		urlMappingJasaPondasiBangunan,
		urlMappingJasaPemadatanPersiapanPondasi,
		urlMappingJasaPerkuatanTanah,
		urlMappingJasaRetrofittingPondasi
    );

    // --- validasi URL terdaftar ---
    if (!urlMappingGabungan[cleanUrlJasaPondasiPerkuatanTanahKons]) {
      console.log(`[HybridDateModified] URL tidak terdaftar: ${cleanUrlJasaPondasiPerkuatanTanahKons}`);
      return;
    }

  // === Tanggal nextUpdate1 global ===
		const globalNextUpdate1 = "2026-01-31T00:00:00.000Z";
	console.log(`🌐 [AutoMeta] Detected jasa-konstruksi-pondasi-perkuatan-tanah: ${cleanUrlJasaPondasiPerkuatanTanahKons}`);

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

    const hash = stableHash(cleanUrlJasaPondasiPerkuatanTanahKons);
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
	
	console.log("✅ AEDMetaDates updated jasa-konstruksi-pondasi-perkuatan-tanah:", window.AEDMetaDates);
    console.log(`✅ [HybridDateModified v2.5] ${cleanUrlJasaPondasiPerkuatanTanahKons} → ${isoDate} | type=${type || "-"}`);

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
		urlMappingJasaPondasiBangunanFromSub2Sub2,
		urlMappingJasaPemadatanPersiapanPondasiFromSub2Sub2,
		urlMappingJasaPerkuatanTanahFromSub2Sub2,
		urlMappingJasaRetrofittingPondasiFromSub2Sub2
    );

    // --- validasi URL terdaftar ---
    if (!urlMappingGabungan[cleanUrlJasaPondasiPerkuatanTanahKons]) {
      console.log(`[HybridDateModified] URL tidak terdaftar: ${cleanUrlJasaPondasiPerkuatanTanahKons}`);
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
		    await loadEvergreenScript("2026-01-04T10:30:00+07:00");
		
		    // ✔ AUTO MODE
		    // await loadEvergreenScript();
		
		  } catch (err) {
		    console.error("[HybridDateModified] Fatal:", err);
		  }
		})();

	
     // Menemukan elemen menggunakan Id
    var JasaKonsPondasiTanah = document.getElementById("JasaKonsPondasiTanah");

    if (!JasaKonsPondasiTanah) {
        console.error("elemen Id JasaKonsPondasiTanah kondisi terhapus");
        return;
    }

     var JasaKonstruksiPondasiTanahSubLink = document.getElementById("JasaKonstruksiPondasiTanahSub");
     var JasaPondasiTanahSub = document.getElementById("JasaPondasiTanahSub");

     //SUB Jasa Pondasi Tanah
     var JasaPondasiBangunanSubLink = document.getElementById("JasaPondasiBangunanSub");
     var JasaPemadatanPersiapanPondasiSubLink = document.getElementById("JasaPemadatanPersiapanPondasiSub");
     var JasaPerkuatanTanahSubLink = document.getElementById("JasaPerkuatanTanahSub");
     var JasaRetrofittingPondasiSubLink = document.getElementById("JasaRetrofittingPondasiSub");

	
     var pageNameJasaKonsPondasiTanah = document.getElementById("pageNameJasaKonsPondasiTanah");
    

     // Default untuk menyembunyikan elemen
     JasaKonstruksiPondasiTanahSubLink.style.visibility = 'hidden';
     JasaPondasiTanahSub.style.visibility = 'hidden';
	
     //SUB JASA PEMBATAS
     JasaPondasiBangunanSubLink.style.visibility = 'hidden';
     JasaPemadatanPersiapanPondasiSubLink.style.visibility = 'hidden';
     JasaPerkuatanTanahSubLink.style.visibility = 'hidden';
     JasaRetrofittingPondasiSubLink.style.visibility = 'hidden';

     pageNameJasaKonsPondasiTanah.textContent = "";

    if (urlMappingJasaPondasiBangunanFromSub2Sub2[cleanUrlJasaPondasiPerkuatanTanahKons]) {
        restoreCondition('JasaKonsPondasiTanah');
        restoreCondition('JasaPondasiBangunanSub');
     
        //hapus elemen div id lain
	removeCondition('ProdukInFur');
        removeCondition('MaterialKons');
	removeCondition('ProdukKons');
        //removeCondition('ProdukKonsSaluran');
        //removeCondition('ProdukKonsPembatas');
        removeCondition('JasaKonsPerbaikan');
       	removeCondition('JasaKons');
       	removeCondition('JasaKonsSub');
       	removeCondition('MenuKons');
       	removeCondition('JasaKonsFinishing');
        removeCondition('JasaKonsStruktur');
        removeCondition('JasaKonsPembatas');
        removeCondition('JasaKonsJalanPerkerasan');


        //hapus elemen SUB jasa pembatas lain
        removeCondition('JasaPemadatanPersiapanPondasiSub');
        removeCondition('JasaPerkuatanTanahSub');
        removeCondition('JasaRetrofittingPondasiSub');
/*
	JasaPondasiBangunanSubLink.style.visibility = 'hidden';
     JasaPemadatanPersiapanPondasiSubLink.style.visibility = 'hidden';
     JasaPerkuatanTanahSubLink.style.visibility = 'hidden';
     JasaRetrofittingPondasiSubLink.style.visibility = 'hidden';
	*/
        JasaKonstruksiPondasiTanahSubLink.style.visibility = 'visible';
        JasaPondasiTanahSub.style.visibility = 'visible';
        JasaPondasiBangunanSubLink.style.visibility = 'visible';
        pageNameJasaKonsPondasiTanah.textContent = urlMappingJasaPondasiBangunanFromSub2Sub2[cleanUrlJasaPondasiPerkuatanTanahKons];
    }
// ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaPondasiBangunanFromSub2Sub2[cleanUrlJasaPondasiPerkuatanTanahKons]) {
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
                   "name": urlMappingJasaPondasiBangunanFromSub2Sub2[cleanUrlJasaPondasiPerkuatanTanahKons],
                   "item": cleanUrlJasaPondasiPerkuatanTanahKons
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }	
   if (urlMappingJasaPemadatanPersiapanPondasiFromSub2Sub2[cleanUrlJasaPondasiPerkuatanTanahKons]) {
        restoreCondition('JasaKonsPondasiTanah');
        restoreCondition('JasaPemadatanPersiapanPondasiSub');
     
        //hapus elemen div id lain
	removeCondition('ProdukInFur');
        removeCondition('MaterialKons');
	removeCondition('ProdukKons');
        //removeCondition('ProdukKonsSaluran');
        //removeCondition('ProdukKonsPembatas');
        removeCondition('JasaKonsPerbaikan');
       	removeCondition('JasaKons');
       	removeCondition('JasaKonsSub');
       	removeCondition('MenuKons');
       	removeCondition('JasaKonsFinishing');
        removeCondition('JasaKonsStruktur');
        removeCondition('JasaKonsPembatas');
        removeCondition('JasaKonsJalanPerkerasan');


        //hapus elemen SUB jasa pembatas lain
        removeCondition('JasaPondasiBangunanSub');
        removeCondition('JasaPerkuatanTanahSub');
        removeCondition('JasaRetrofittingPondasiSub');
/*
	JasaPondasiBangunanSubLink.style.visibility = 'hidden';
     JasaPemadatanPersiapanPondasiSubLink.style.visibility = 'hidden';
     JasaPerkuatanTanahSubLink.style.visibility = 'hidden';
     JasaRetrofittingPondasiSubLink.style.visibility = 'hidden';
	*/
        JasaKonstruksiPondasiTanahSubLink.style.visibility = 'visible';
        JasaPondasiTanahSub.style.visibility = 'visible';
        JasaPemadatanPersiapanPondasiSubLink.style.visibility = 'visible';
        pageNameJasaKonsPondasiTanah.textContent = urlMappingJasaPemadatanPersiapanPondasiFromSub2Sub2[cleanUrlJasaPondasiPerkuatanTanahKons];
    }
	
if (urlMappingJasaPerkuatanTanahFromSub2Sub2[cleanUrlJasaPondasiPerkuatanTanahKons]) {
        restoreCondition('JasaKonsPondasiTanah');
        restoreCondition('JasaPerkuatanTanahSub');
     
        //hapus elemen div id lain
	removeCondition('ProdukInFur');
        removeCondition('MaterialKons');
	removeCondition('ProdukKons');
        //removeCondition('ProdukKonsSaluran');
        //removeCondition('ProdukKonsPembatas');
        removeCondition('JasaKonsPerbaikan');
       	removeCondition('JasaKons');
       	removeCondition('JasaKonsSub');
       	removeCondition('MenuKons');
       	removeCondition('JasaKonsFinishing');
        removeCondition('JasaKonsStruktur');
        removeCondition('JasaKonsPembatas');
        removeCondition('JasaKonsJalanPerkerasan');


        //hapus elemen SUB jasa pembatas lain
        removeCondition('JasaPemadatanPersiapanPondasiSub');
        removeCondition('JasaPondasiBangunanSub');
        removeCondition('JasaRetrofittingPondasiSub');
/*
	JasaPondasiBangunanSubLink.style.visibility = 'hidden';
     JasaPemadatanPersiapanPondasiSubLink.style.visibility = 'hidden';
     JasaPerkuatanTanahSubLink.style.visibility = 'hidden';
     JasaRetrofittingPondasiSubLink.style.visibility = 'hidden';
	*/
        JasaKonstruksiPondasiTanahSubLink.style.visibility = 'visible';
        JasaPondasiTanahSub.style.visibility = 'visible';
        JasaPerkuatanTanahSubLink.style.visibility = 'visible';
	pageNameJasaKonsPondasiTanah.textContent = urlMappingJasaPerkuatanTanahFromSub2Sub2[cleanUrlJasaPondasiPerkuatanTanahKons];
    }

// ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaPerkuatanTanahFromSub2Sub2[cleanUrlJasaPondasiPerkuatanTanahKons]) {
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
                   "name": "Jasa Perkuatan Tanah",
                   "item": "https://www.betonjayareadymix.com/p/jasa-perkuatan-tanah.html"
               },
               {
                   "@type": "ListItem",
                   "position": 5,
                   "name": urlMappingJasaPerkuatanTanahFromSub2Sub2[cleanUrlJasaPondasiPerkuatanTanahKons],
                   "item": cleanUrlJasaPondasiPerkuatanTanahKons
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
   if (urlMappingJasaRetrofittingPondasiFromSub2Sub2[cleanUrlJasaPondasiPerkuatanTanahKons]) {
        restoreCondition('JasaKonsPondasiTanah');
        restoreCondition('JasaRetrofittingPondasiSub');
     
        //hapus elemen div id lain
	removeCondition('ProdukInFur');
        removeCondition('MaterialKons');
	removeCondition('ProdukKons');
        //removeCondition('ProdukKonsSaluran');
        //removeCondition('ProdukKonsPembatas');
        removeCondition('JasaKonsPerbaikan');
       	removeCondition('JasaKons');
       	removeCondition('JasaKonsSub');
       	removeCondition('MenuKons');
       	removeCondition('JasaKonsFinishing');
        removeCondition('JasaKonsStruktur');
        removeCondition('JasaKonsPembatas');
        removeCondition('JasaKonsJalanPerkerasan');


        //hapus elemen SUB jasa pembatas lain
        removeCondition('JasaPemadatanPersiapanPondasiSub');
        removeCondition('JasaPerkuatanTanahSub');
        removeCondition('JasaPondasiBangunanSub');
/*
	JasaPondasiBangunanSubLink.style.visibility = 'hidden';
     JasaPemadatanPersiapanPondasiSubLink.style.visibility = 'hidden';
     JasaPerkuatanTanahSubLink.style.visibility = 'hidden';
     JasaRetrofittingPondasiSubLink.style.visibility = 'hidden';
	*/
        JasaKonstruksiPondasiTanahSubLink.style.visibility = 'visible';
        JasaPondasiTanahSub.style.visibility = 'visible';
        JasaRetrofittingPondasiSubLink.style.visibility = 'visible';
        pageNameJasaKonsPondasiTanah.textContent = urlMappingJasaRetrofittingPondasiFromSub2Sub2[cleanUrlJasaPondasiPerkuatanTanahKons];
    }
// ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaRetrofittingPondasiFromSub2Sub2[cleanUrlJasaPondasiPerkuatanTanahKons]) {
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
                   "name": "Jasa Retrofitting Pondasi",
                   "item": "https://www.betonjayareadymix.com/p/jasa-retrofitting-pondasi.html"
               },
               {
                   "@type": "ListItem",
                   "position": 5,
                   "name": urlMappingJasaRetrofittingPondasiFromSub2Sub2[cleanUrlJasaPondasiPerkuatanTanahKons],
                   "item": cleanUrlJasaPondasiPerkuatanTanahKons
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
    //SUB urlMappingPembuatanPagarDinding
   
   });
