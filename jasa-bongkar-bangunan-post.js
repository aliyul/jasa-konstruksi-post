// ============================================================
// SUB MAPPING JASA BONGKAR BANGUNAN
// ============================================================

// ============================================================
// JASA BONGKAR BANGUNAN (SUB2) - DENGAN MASTER HARGA
// ============================================================

const urlMappingJasaBongkarBangunan = {
  // ============================================================
  // [SUB2] - MASTER PAGE (PANDUAN TEKNIS)
  // 🧠 TYPE: SUB2 (boleh skip, konten edukasi)
  // Breadcrumb: Home > Jasa Konstruksi > Jasa Bongkar Bangunan (3 level)
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-bongkar-bangunan.html": "Jasa Bongkar Bangunan",  // TYPE: SUB2
  
  // ============================================================
  // [MONEY_MASTER] - HARGA JASA BONGKAR BANGUNAN
  // 🧠 TYPE: MONEY_MASTER (WAJIB tampil)
  // Breadcrumb: Home > Jasa Konstruksi > Harga Jasa Bongkar Bangunan (3 level, skip SUB2)
  // ============================================================
  "https://www.betonjayareadymix.com/2018/09/harga-jasa-bongkar-bangunan.html": "Harga Jasa Bongkar Bangunan"  // TYPE: MONEY_MASTER
};

// ============================================================
// JASA BONGKAR TOWER - MONEY PAGE
// ============================================================

const urlMappingJasaBongkarTower = {
  // ============================================================
  // [MONEY_MASTER] - HARGA BONGKAR TOWER
  // 🧠 TYPE: MONEY_MASTER
  // Parent: Jasa Bongkar Bangunan (SUB2)
  // Breadcrumb: Home > Jasa Konstruksi > Jasa Bongkar Bangunan > Harga Jasa Bongkar Tower (4 level)
  // ============================================================
  "https://www.betonjayareadymix.com/2018/09/harga-jasa-bongkar-tower.html": "Harga Jasa Bongkar Tower",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/2018/09/jasa-bongkar-tower-triangle.html": "Jasa Bongkar Tower Triangle"  // TYPE: MONEY_CHILD
};

// ============================================================
// 🟡 SARAN TAMBAHAN URL - JASA BONGKAR TOWER
// ============================================================
/*
📌 URL YANG DISARANKAN UNTUK DITAMBAHKAN (JIKA KONTEN MEMADAI):

| URL | Nama Halaman | Type | Parent | Alasan SEO |
|-----|--------------|------|--------|------------|
| /2019/08/harga-bongkar-tower-bts.html | Harga Bongkar Tower BTS | MONEY_CHILD | Jasa Bongkar Tower | Menarget keyword spesifik tower BTS |

📌 BREADCRUMB (jika halaman dibuat):
Home > Jasa Konstruksi > Jasa Bongkar Bangunan > Harga Bongkar Tower BTS (4 level, skip "Jasa Bongkar Tower")
*/

// ============================================================
// JASA BONGKAR RUMAH - SARAN ITEM BARU
// ============================================================

const urlMappingJasaBongkarRumah = {
  // ============================================================
  // [SUB2] - JASA BONGKAR RUMAH (PAGE)
  // 🧠 TYPE: SUB2 (boleh skip)
  // ============================================================
  // "https://www.betonjayareadymix.com/p/jasa-bongkar-rumah.html": "Jasa Bongkar Rumah",  // TYPE: SUB2 (belum aktif)
  
  // ============================================================
  // SARAN ITEM BARU (MONEY PAGE) - LANGSUNG DI BAWAH JASA BONGKAR BANGUNAN
  // ============================================================
  // "https://www.betonjayareadymix.com/2019/08/harga-bongkar-rumah-tinggal.html": "Harga Bongkar Rumah Tinggal",  // TYPE: MONEY_CHILD
  // "https://www.betonjayareadymix.com/2019/08/jasa-bongkar-rumah-2-lantai.html": "Jasa Bongkar Rumah 2 Lantai",  // TYPE: MONEY_CHILD
  // "https://www.betonjayareadymix.com/2019/08/jasa-bongkar-rumah-permanen.html": "Jasa Bongkar Rumah Permanen",  // TYPE: MONEY_CHILD
  // "https://www.betonjayareadymix.com/2019/08/jasa-bongkar-rumah-semi-permanen.html": "Jasa Bongkar Rumah Semi Permanen"  // TYPE: MONEY_CHILD
};

// ============================================================
// JASA BONGKAR BETON - MONEY PAGE
// ============================================================

const urlMappingJasaBongkarBeton = {
  // ============================================================
  // [MONEY_MASTER] - HARGA BONGKAR BETON (MASTER)
  // 🧠 TYPE: MONEY_MASTER
  // Breadcrumb: Home > Jasa Konstruksi > Jasa Bongkar Bangunan > Harga Bongkar Beton (4 level)
  // ============================================================
  "https://www.betonjayareadymix.com/2019/06/harga-bongkar-beton.html": "Harga Bongkar Beton",  // TYPE: MONEY_MASTER
  
  // ============================================================
  // [REDIRECT] - DUPLIKASI DARI MASTER
  // ============================================================
  "https://www.betonjayareadymix.com/2019/06/harga-bongkar-beton-per-m3.html": "Harga Bongkar Beton Per m3",  // TYPE: REDIRECT (ke harga-bongkar-beton.html)
  "https://www.betonjayareadymix.com/2019/06/harga-bobok-beton-per-m2.html": "Harga Bobok Beton per m2",  // TYPE: REDIRECT (ke harga-bongkar-beton.html)
  "https://www.betonjayareadymix.com/2018/06/harga-jasa-bobok-beton.html": "Harga Jasa Bobok Beton"  // TYPE: REDIRECT (ke harga-bongkar-beton.html)
};

// ============================================================
// JASA BONGKAR TEMBOK - MONEY PAGE
// ============================================================

const urlMappingJasaBongkarTembok = {
  // ============================================================
  // [MONEY_MASTER] - JASA BOBOK TEMBOK (MASTER)
  // 🧠 TYPE: MONEY_MASTER
  // ============================================================
  "https://www.betonjayareadymix.com/2019/06/jasa-bobok-tembok-per-meter.html": "Jasa Bobok Tembok Per Meter",  // TYPE: MONEY_MASTER
  
  // ============================================================
  // [MONEY_CHILD] - VARIASI HARGA
  // ============================================================
  "https://www.betonjayareadymix.com/2019/06/harga-jasa-bobok-tembok.html": "Harga Jasa Bobok Tembok",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/06/jasa-tukang-bobok-tembok.html": "Jasa Tukang Bobok Tembok"  // TYPE: MONEY_CHILD
};

// ============================================================
// JASA BONGKAR DINDING - MONEY PAGE
// ============================================================

const urlMappingJasaBongkarDinding = {
  // ============================================================
  // [MONEY_MASTER] - HARGA BONGKAR DINDING
  // 🧠 TYPE: MONEY_MASTER
  // ============================================================
  "https://www.betonjayareadymix.com/2019/06/harga-jasa-bongkar-dinding.html": "Harga Jasa Bongkar Dinding",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/2019/06/harga-bongkar-dinding-bata-per-m2.html": "Harga Jasa Bongkar Dinding Bata Per M2"  // TYPE: MONEY_CHILD
};

// ============================================================
// JASA BONGKAR LANTAI - MONEY PAGE
// ============================================================

const urlMappingJasaBongkarLantai = {
  // ============================================================
  // [MONEY_MASTER] - MASTER BONGKAR LANTAI (UMUM)
  // ============================================================
  "https://www.betonjayareadymix.com/2019/06/harga-jasa-bongkar-lantai.html": "Harga Jasa Bongkar Lantai",  // TYPE: MONEY_MASTER
  
  // ============================================================
  // [MONEY_MASTER] - MASTER BOBOK LANTAI BETON
  // ============================================================
  "https://www.betonjayareadymix.com/2019/06/harga-jasa-bobok-lantai-beton.html": "Harga Jasa Bobok Lantai Beton",  // TYPE: MONEY_MASTER
  
  // ============================================================
  // [MONEY_CHILD] - SPESIFIK LANTAI KERAMIK
  // ============================================================
  "https://www.betonjayareadymix.com/2019/06/biaya-bongkar-lantai-keramik.html": "Biaya Bongkar Lantai Keramik",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/06/harga-bongkar-lantai-keramik.html": "Harga Bongkar Lantai Keramik",  // TYPE: MONEY_CHILD
  
  // ============================================================
  // [REDIRECT] - DUPLIKASI (redirect ke master)
  // ============================================================
  "https://www.betonjayareadymix.com/2019/06/jasa-bobok-lantai-beton.html": "Jasa Bobok Lantai Beton",  // TYPE: REDIRECT (ke harga-jasa-bobok-lantai-beton.html)
  "https://www.betonjayareadymix.com/2019/06/jasa-bobok-lantai-lama.html": "Jasa Bobok Lantai Lama",  // TYPE: REDIRECT (ke harga-jasa-bobok-lantai-beton.html)
  "https://www.betonjayareadymix.com/2019/06/harga-borongan-bongkar-keramik-lantai.html": "Harga Borongan Bongkar Keramik Lantai",  // TYPE: REDIRECT (ke harga-jasa-bongkar-lantai.html)
  "https://www.betonjayareadymix.com/2019/06/harga-bobok-lantai-keramik.html": "Harga Bobok Lantai Keramik",  // TYPE: REDIRECT (ke harga-jasa-bongkar-lantai.html)
  "https://www.betonjayareadymix.com/2019/06/harga-bobok-lantai.html": "Harga Bobok Lantai",  // TYPE: REDIRECT (ke harga-jasa-bobok-lantai-beton.html)
  "https://www.betonjayareadymix.com/2019/06/harga-bobok-lantai-beton-per-m2.html": "Harga Bobok Lantai Beton per M2",  // TYPE: REDIRECT (ke harga-jasa-bobok-lantai-beton.html)
  "https://www.betonjayareadymix.com/2019/06/harga-borongan-bobok-lantai-beton.html": "Harga Borongan Bobok Lantai Beton",  // TYPE: REDIRECT (ke harga-jasa-bobok-lantai-beton.html)
  "https://www.betonjayareadymix.com/2018/06/harga-upah-bobok-lantai-beton.html": "Harga Upah Bobok Lantai Beton",  // TYPE: REDIRECT (ke harga-jasa-bobok-lantai-beton.html)
  "https://www.betonjayareadymix.com/2019/06/harga-bongkar-lantai-beton.html": "Harga Bongkar Lantai Beton"  // TYPE: REDIRECT (ke harga-jasa-bongkar-lantai.html)
};

// ============================================================
// JASA BUANG PUING - MONEY PAGE (PER LOKASI)
// ============================================================

const urlMappingJasaBuangPuing = {
  // ============================================================
  // [MONEY_CHILD] - JASA BUANG PUING PER LOKASI
  // 🧠 TYPE: MONEY_CHILD (WAJIB tampil, spesifik lokasi)
  // Breadcrumb: Home > Jasa Konstruksi > Jasa Bongkar Bangunan > Jasa Buang Puing [Kota] (4 level)
  // ============================================================
  "https://www.betonjayareadymix.com/2019/10/jasa-buang-puing-surabaya.html": "Jasa Buang Puing Surabaya",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/10/jasa-buang-puing-karawang.html": "Jasa Buang Puing Karawang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/10/jasa-buang-puing-bekasi.html": "Jasa Buang Puing Bekasi",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/10/jasa-buang-puing-tangerang.html": "Jasa Buang Puing Tangerang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/10/jasa-buang-puing-depok.html": "Jasa Buang Puing Depok",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/10/jasa-buang-puing-bogor.html": "Jasa Buang Puing Bogor",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/10/jasa-buang-puing-jakarta.html": "Jasa Buang Puing Jakarta",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/10/jasa-buang-puing-terdekat.html": "Jasa Buang Puing Terdekat"  // TYPE: MONEY_CHILD
};

// ============================================================
// 🟡 SARAN ITEM BARU - JASA BUANG PUING
// ============================================================
/*
📌 SARAN ITEM BARU (MONEY_MASTER):
// "https://www.betonjayareadymix.com/2019/10/harga-buang-puing-per-truk.html": "Harga Buang Puing Per Truk",
// TYPE: MONEY_MASTER - master page untuk harga buang puing
*/

// ============================================================
// SUB MAPPING JASA PERAWATAN & PERBAIKAN BANGUNAN
// ============================================================

// ============================================================
// JASA PERBAIKAN ATAP BOCOR - SARAN ITEM
// ============================================================
const urlMappingJasaPerbaikanAtapBocor = {
  // SARAN: Buat halaman untuk perbaikan atap bocor
  // "https://www.betonjayareadymix.com/2019/07/harga-perbaikan-atap-bocor.html": "Harga Perbaikan Atap Bocor",  // TYPE: MONEY_MASTER
  // Status: [MONEY_MASTER] - di bawah Jasa Perawatan Perbaikan Bangunan
};

// ============================================================
// JASA PERBAIKAN DINDING RETAK - SARAN ITEM
// ============================================================
const urlMappingJasaPerbaikanDindingRetak = {
  // SARAN: Buat halaman untuk perbaikan dinding retak
  // "https://www.betonjayareadymix.com/2019/07/harga-perbaikan-dinding-retak.html": "Harga Perbaikan Dinding Retak",  // TYPE: MONEY_MASTER
  // Status: [MONEY_MASTER] - di bawah Jasa Perawatan Perbaikan Bangunan
};

// ============================================================
// JASA PERBAIKAN REMBESAN AIR - SARAN ITEM
// ============================================================
const urlMappingJasaPerbaikanRembesanAir = {
  // SARAN: Buat halaman untuk perbaikan rembesan air
  // "https://www.betonjayareadymix.com/2019/07/jasa-perbaikan-rembesan-air.html": "Jasa Perbaikan Rembesan Air",  // TYPE: MONEY_MASTER
  // Status: [MONEY_MASTER] - di bawah Jasa Perbaikan Kebocoran Waterproofing
};

// ============================================================
// JASA PERBAIKAN PLAFON RUSAK - SARAN ITEM
// ============================================================
const urlMappingJasaPerbaikanPlafonRusak = {
  // SARAN: Buat halaman untuk perbaikan plafon rusak
  // "https://www.betonjayareadymix.com/2019/07/harga-perbaikan-plafon-rusak.html": "Harga Perbaikan Plafon Rusak",  // TYPE: MONEY_MASTER
  // Status: [MONEY_MASTER] - di bawah Jasa Perawatan Perbaikan Bangunan
};

// ============================================================
// JASA PERBAIKAN DAK BETON BOCOR - SARAN ITEM
// ============================================================
const urlMappingJasaPerbaikanDakBetonBocor = {
  // SARAN: Buat halaman untuk perbaikan dak beton bocor
  // "https://www.betonjayareadymix.com/2019/07/jasa-perbaikan-dak-beton-bocor.html": "Jasa Perbaikan Dak Beton Bocor",  // TYPE: MONEY_MASTER
  // Status: [MONEY_MASTER] - di bawah Jasa Perbaikan Kebocoran Waterproofing
};

// ============================================================
// JASA PERBAIKAN TALANG BOCOR - SARAN ITEM
// 🧠 STATUS: URL 404 (perlu dibuat)
// ============================================================
const urlMappingJasaPerbaikanTalangBocor = {
  // SARAN: Buat halaman untuk perbaikan talang bocor (URL saat ini 404)
  // "https://www.betonjayareadymix.com/2019/07/harga-perbaikan-talang-bocor.html": "Harga Perbaikan Talang Bocor",  // TYPE: MONEY_MASTER
  // Status: [MONEY_MASTER] - di bawah Jasa Perbaikan Atap Drainase Bangunan
};

// ============================================================
// CATATAN: ITEM DI ATAS HANYA SARAN, BELUM AKTIF
// ============================================================

// ============================================================
// FUNGSI GENERATE BREADCRUMB - VERSI FINAL
// UNTUK SEMUA PILLAR (PRODUK, MATERIAL, JASA, INTERIOR, DLL)
// MAX_LEVEL = 4 (TERMASUK HOME)
// SKIP LEVEL BEKERJA UNTUK PILLAR & SUB2
// ============================================================

function generateBreadcrumbForMapping(mappingObj, currentUrl, breadcrumbItems = [], pillarType = 'JASA_KONSTRUKSI') {
    
    const MAX_LEVEL = 4;
    const DOMAIN = 'https://www.betonjayareadymix.com';
    
    // ============================================================
    // 1. VALIDASI PILLAR TYPE
    // ============================================================
    const validPillarTypes = ['PRODUK_KONSTRUKSI', 'MATERIAL_KONSTRUKSI', 'JASA_KONSTRUKSI', 
                               'PRODUK_INTERIOR', 'JASA_DESAIN_INTERIOR'];
    if (!validPillarTypes.includes(pillarType)) {
        console.error(`❌ ERROR: "${pillarType}" BUKAN PILLAR TYPE yang valid!`);
        console.error(`   Gunakan salah satu dari: ${validPillarTypes.join(', ')}`);
        return null;
    }
    
    const pageTitle = mappingObj[currentUrl];
    if (!pageTitle) {
        console.error(`❌ ERROR: URL "${currentUrl}" tidak ditemukan di mapping`);
        return null;
    }
    
    // ============================================================
    // 2. KUMPULKAN SEMUA NAMA HALAMAN DARI MAPPING (UNTUK REFERENSI)
    // ============================================================
    const knownPages = [];
    for (const [url, name] of Object.entries(mappingObj)) {
        if (name && typeof name === 'string') {
            knownPages.push(name.toLowerCase());
        }
    }
    
    // ============================================================
    // 3. DETEKSI TYPE OTOMATIS
    // ============================================================
    function detectPageType(pageName, position, totalLevels) {
        const lowerName = pageName.toLowerCase();
        const parts = pageName.split(' ');
        const lastWord = parts[parts.length - 1].toLowerCase();
        const firstWord = parts[0].toLowerCase();
        const wordCount = parts.length;
        
        // PILLAR: posisi pertama
        if (position === 0) return 'PILLAR';
        
        // MONEY_LEADGEN
        if (lowerName.startsWith('konsultasi')) return 'MONEY_LEADGEN';
        
        // MONEY_MASTER (deteksi transaksi)
        const transactionWords = ['harga', 'sewa', 'jual', 'beli', 'pesan', 'booking', 'order', 'rental',
            'biaya', 'tarif', 'rate', 'cost', 'price', 'fee', 'charge', 'promo', 'diskon', 'obral',
            'gratis', 'voucher', 'cashback', 'cicilan', 'kredit', 'dp', 'angsuran', 'quote', 'penawaran', 'estimasi'];
        
        for (const word of transactionWords) {
            if (lowerName.startsWith(word + ' ') || lowerName.includes(' ' + word + ' ') || lowerName.endsWith(' ' + word)) {
                return 'MONEY_MASTER';
            }
        }
        
        // SUB1 (deteksi panduan)
        const guideWords = ['panduan', 'cara', 'tips', 'tutorial', 'langkah', 'petunjuk', 'pedoman', 'instruksi',
            'guide', 'how to', 'step by step', 'strategi', 'metode', 'teknik', 'rahasia', 'kunci sukses',
            'wajib tahu', 'perlu diketahui', 'edukasi', 'belajar', 'mempelajari', 'pemahaman', 'solusi', 'jawaban'];
        
        for (const word of guideWords) {
            if (lowerName.startsWith(word + ' ') || lowerName.includes(' ' + word + ' ')) {
                return 'SUB1';
            }
        }
        
        // VARIANT (deteksi angka atau kata kunci)
        if (/\d/.test(lowerName)) return 'VARIANT';
        
        const variantWords = ['tipe', 'type', 'ukuran', 'model', 'varian', 'warna', 'bentuk', 'seri', 'versi',
            'grade', 'kelas', 'standar', 'jenis', 'macam', 'ragam', 'kategori', 'spesifikasi', 'detail', 'rinci',
            'kapasitas', 'volume', 'berat', 'panjang', 'lebar', 'tinggi', 'tebal', 'diameter', 'radius', 'luas',
            'bahan', 'material', 'komposisi', 'kualitas', 'mutu', 'kode', 'plus', 'minus', 'kelebihan', 'kekurangan',
            'baru', 'lama', 'bekas', 'second', 'original', 'kw', 'putih', 'hitam', 'merah', 'biru', 'hijau',
            'kecil', 'besar', 'sedang', 'mini', 'maxi', 'jumbo', 'extra', 'super'];
        
        for (const word of variantWords) {
            if (lowerName.includes(' ' + word + ' ') || lowerName.endsWith(' ' + word)) {
                return 'VARIANT';
            }
        }
        
        // MONEY_CHILD (deteksi lokasi)
        function isLikelyLocation(word) {
            if (word.length < 3 || word.length > 25) return false;
            if (!/^[a-zA-Z]+$/.test(word)) return false;
            if (word === firstWord) return false;
            
            const notLocationWords = ['mini', 'maxi', 'super', 'extra', 'plus', 'pro', 'max', 'ultra',
                'baru', 'lama', 'bekas', 'second', 'original', 'kw', 'grade', 'murah', 'mahal', 'hemat',
                'premium', 'standar', 'ekonomis', 'kecil', 'besar', 'sedang', 'panjang', 'pendek', 'tebal', 'tipis',
                'putih', 'hitam', 'merah', 'biru', 'hijau', 'kuning', 'ungu', 'abu', 'coklat'];
            if (notLocationWords.includes(word)) return false;
            
            const isKnownProduct = knownPages.some(known => known === word || (known.includes(word) && word.length > 3));
            if (isKnownProduct) return false;
            
            if (word.length >= 4 && word.length <= 12) return true;
            if (/[aiueo]$/.test(word) && word.length >= 4) return true;
            
            const locationPatterns = ['ang', 'ung', 'eng', 'ong', 'an', 'in', 'un', 'en', 
                'ap', 'ip', 'op', 'ar', 'ur', 'er', 'or', 'karta', 'jaya', 'pura', 'sari', 'mulya', 'agung', 'asih', 'ayem'];
            for (const pattern of locationPatterns) {
                if (word.endsWith(pattern) && word.length >= 4) return true;
            }
            
            if (word.length >= 5 && /[aiueo].*[aiueo]/.test(word)) return true;
            return false;
        }
        
        if (wordCount >= 2 && isLikelyLocation(lastWord)) return 'MONEY_CHILD';
        
        return 'SUB2';
    }
    
    // ============================================================
    // 4. FUNGSI BANTUAN
    // ============================================================
    function generateIdFromName(name) {
        return name.replace(/[^a-zA-Z0-9]/g, '') + 'Post';
    }
    
    // ============================================================
    // 5. BANGUN LEVELS DARI ARRAY OBJECT (NAMA + URL)
    // ============================================================
    const allLevels = [];
    for (let i = 0; i < breadcrumbItems.length; i++) {
        const item = breadcrumbItems[i];
        const name = typeof item === 'string' ? item : item.name;
        const url = typeof item === 'string' ? null : item.url;
        
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
            for (const [url, name] of Object.entries(mappingObj)) {
                if (name === level.name) {
                    foundUrl = url.startsWith('http') ? url : DOMAIN + url;
                    break;
                }
            }
            if (!foundUrl) {
                const slug = level.name.toLowerCase().replace(/ /g, '-');
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
    selectedLevels.push({ name: 'BJR', url: DOMAIN, isHome: true });
    
    // Hitung slot tersisa (MAX_LEVEL - 1 untuk home - 1 untuk halaman saat ini)
    let remainingSlots = MAX_LEVEL - 2;
    
    console.log(`📊 ========================================`);
    console.log(`📊 Breadcrumb Generator - SEO Tercanggih`);
    console.log(`📊 Max level: ${MAX_LEVEL}, slot untuk parent: ${remainingSlots}`);
    console.log(`📊 Breadcrumb items: ${allLevels.map(l => l.name).join(' → ')}`);
    console.log(`📊 ========================================`);
    
    // Parent terdekat (level terakhir) - WAJIB tampil
    let parentTerdekat = null;
    if (allLevels.length > 0) {
        parentTerdekat = allLevels[allLevels.length - 1];
        selectedLevels.push(parentTerdekat);
        remainingSlots--;
        console.log(`✅ WAJIB: "${parentTerdekat.name}" (${parentTerdekat.type}) - sisa slot: ${remainingSlots}`);
    }
    
    // Level lainnya (dari awal sampai sebelum parent terdekat)
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
        
        selectedLevels.splice(1, 0, level);
        remainingSlots--;
        console.log(`✅ TAMBAH: "${level.name}" (${level.type}) - sisa slot: ${remainingSlots}`);
    }
    
    // Halaman saat ini (WAJIB)
    const currentFullUrl = currentUrl.startsWith('http') ? currentUrl : DOMAIN + currentUrl;
    selectedLevels.push({
        name: pageTitle,
        url: currentFullUrl,
        isCurrent: true
    });
    
    // Update position
    for (let i = 0; i < selectedLevels.length; i++) {
        selectedLevels[i].position = i + 1;
    }
    
    console.log(`✅ FINAL (${selectedLevels.length} level): ${selectedLevels.map(l => l.name).join(' → ')}`);
    
    // ============================================================
    // 8. GENERATE HTML BREADCRUMB
    // ============================================================
    let breadcrumbHtml = `<div class="breadcrumbs">\n<span>\n`;
    breadcrumbHtml += `<a href="${DOMAIN}/" itemprop="item" title="Beton Jaya Readymix">`;
    breadcrumbHtml += `<meta content="1" itemprop="position">`;
    breadcrumbHtml += `<span itemprop="name">BJR</span></a>\n`;
    breadcrumbHtml += `</span>\n &nbsp;›&nbsp;\n\n`;
    breadcrumbHtml += `<span>\n<div id="breadcrumbContainer" style="display: inline;">\n`;
    
    for (let i = 1; i < selectedLevels.length; i++) {
        const level = selectedLevels[i];
        const isLast = (i === selectedLevels.length - 1);
        
        if (!isLast) {
            breadcrumbHtml += `<a href="${level.url}" id="${level.id}" title="${level.name.toUpperCase()}" style="visibility: visible;">`;
            breadcrumbHtml += `<span id="${level.id}Name">${level.name}</span>&nbsp;›&nbsp;\n`;
            breadcrumbHtml += `</a>\n`;
        } else {
            breadcrumbHtml += `<span id="pageNameBreadcrumb">${level.name}</span>\n`;
        }
    }
    
    breadcrumbHtml += `</div>\n</span>\n</div>`;
    
    // ============================================================
    // 9. GENERATE JSON-LD SCHEMA
    // ============================================================
    const jsonLdItems = [];
    jsonLdItems.push({ "@type": "ListItem", "position": 1, "name": "Beton Jaya Readymix", "item": DOMAIN });
    
    for (let i = 1; i < selectedLevels.length; i++) {
        jsonLdItems.push({
            "@type": "ListItem",
            "position": i + 1,
            "name": selectedLevels[i].name,
            "item": selectedLevels[i].url
        });
    }
    
    // ============================================================
    // 10. HAPUS BREADCRUMB LAMA & INJECT YANG BARU
    // ============================================================
    // Hapus semua breadcrumb lama (manual)
    const oldBreadcrumbs = document.querySelectorAll('.breadcrumbs, .breadcrumb-nav, [aria-label="Breadcrumb"]');
    oldBreadcrumbs.forEach(el => el.remove());
    
    // Hapus JSON-LD lama
    const oldJsonLd = document.querySelector('script[data-breadcrumb="true"]');
    if (oldJsonLd) oldJsonLd.remove();
    
    // Inject HTML breadcrumb baru
    const mainContent = document.querySelector('main, article, .content, #main-content, .post-content');
    if (mainContent?.firstChild) {
        mainContent.insertAdjacentHTML('afterbegin', breadcrumbHtml);
    } else {
        document.body.insertAdjacentHTML('afterbegin', breadcrumbHtml);
    }
    
    // Inject JSON-LD baru
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-breadcrumb', 'true');
    script.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": jsonLdItems
    });
    document.head.appendChild(script);
    
    console.log(`✅ Breadcrumb injected ke DOM`);
    return breadcrumbHtml;
}
// Menyimpan elemen yang dihapus dalam variabel
let removedElementsJasaKonsBongkarBangunanPost = {};
// Fungsi untuk menghapus elemen berdasarkan ID
function removeCondition(conditionId) {
    const conditionElement = document.getElementById(conditionId);

    if (conditionElement) {
        // Menyimpan elemen yang dihapus dalam objek untuk bisa dikembalikan
        removedElementsJasaKonsBongkarBangunanPost[conditionId] = conditionElement;
        conditionElement.remove(); // Menghapus elemen tersebut
    }
}

// Fungsi untuk mengembalikan elemen yang telah dihapus
function restoreCondition(conditionId) {
    const breadcrumb = document.querySelector('.breadcrumb');
    const elementToRestore = removedElementsJasaKonsBongkarBangunanPost[conditionId]; // Mendapatkan elemen yang disimpan

    if (elementToRestore) {
        breadcrumb.appendChild(elementToRestore); // Menambahkan elemen kembali ke dalam breadcrumb
        delete removedElementsJasaKonsBongkarBangunanPost[conditionId]; // Menghapus elemen dari objek setelah dikembalikan
    } else {
        console.log(`Elemen dengan ID ${conditionId} tidak ditemukan di removedElementsJasaKonsBongkarBangunanPost.`);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    // var currentUrl = window.location.href;
     //const cleanUrl = currentUrl.split('?')[0]; // Menghapus parameter seperti ?m=1
    const cleanUrlJasaKonsBongkarBangunanPost = window.location.href.split(/[?#]/)[0]; // Menghilangkan parameter seperti ?m=1

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

	    // ✅ Anti Spam GitHack (session based)
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
		,
		urlMappingJasaBongkarRumah,
		urlMappingJasaBongkarBeton,
		urlMappingJasaBongkarAtap,
		urlMappingJasaBongkarKeramik,
		urlMappingJasaBongkarTembok,
		urlMappingJasaBongkarDinding,
		urlMappingJasaBongkarPlafon,
		urlMappingJasaBongkarPartisi,
		urlMappingJasaBongkarPagar,
		urlMappingJasaBongkarLantai
	
    );

    // --- validasi URL terdaftar ---
    if (!urlMappingGabungan[cleanUrlJasaKonsBongkarBangunanPost]) {
      console.log(`[HybridDateModified] URL tidak terdaftar: ${cleanUrlJasaKonsBongkarBangunanPost}`);
      return;
    }
	  
  // === Tanggal nextUpdate1 global ===
	const globalNextUpdate1 = "2026-02-15T00:00:00.000Z";
	console.log(`🌐 [AutoMeta] Detected jasa-bongkar-bangunan-post: ${cleanUrlJasaKonsBongkarBangunanPost}`);

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
    // ✅ Load evergreen JS (anti 429)
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

    const hash = stableHash(cleanUrlJasaKonsBongkarBangunanPost);
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
	
	console.log("✅ AEDMetaDates updated jasa-bongkar-bangunan-post:", window.AEDMetaDates);

    console.log(`✅ [HybridDateModified v2.5] ${cleanUrlJasaKonsBongkarBangunanPost} → ${isoDate} | type=${type || "-"}`);

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
		urlMappingJasaBongkarBangunan,
		urlMappingJasaBongkarTower,
		urlMappingJasaBongkarRumah,
		urlMappingJasaBongkarBeton,
		urlMappingJasaBongkarAtap,
		urlMappingJasaBongkarKeramik,
		urlMappingJasaBongkarTembok,
		urlMappingJasaBongkarDinding,
		urlMappingJasaBongkarPlafon,
		urlMappingJasaBongkarPartisi,
		urlMappingJasaBongkarPagar,
		urlMappingJasaBongkarLantai,
		urlMappingJasaBuangPuing,
		urlMappingJasaPerbaikanAtapBocor,
		urlMappingJasaPerbaikanDindingRetak,
		urlMappingJasaPerbaikanRembesanAir,
		urlMappingJasaPerbaikanPlafonRusak,
		urlMappingJasaPerbaikanDakBetonBocor,
		urlMappingJasaPerbaikanTalangBocor
	
    );

    // --- validasi URL terdaftar ---
    if (!urlMappingGabungan[cleanUrlJasaKonsBongkarBangunanPost]) {
      console.log(`[HybridDateModified] URL tidak terdaftar: ${cleanUrlJasaKonsBongkarBangunanPost}`);
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
		    await loadEvergreenScript("2026-01-14T10:30:00+07:00");
		
		    // ✔ AUTO MODE
		    // await loadEvergreenScript();
		
		  } catch (err) {
		    console.error("[HybridDateModified] Fatal:", err);
		  }
		})();
     // Menemukan elemen menggunakan Id
    var JasaKonsBongkarBangunanPost = document.getElementById("JasaKonsBongkarBangunanPost");

    if (!JasaKonsBongkarBangunanPost) {
        console.error("elemen Id JasaKonsBongkarBangunanPost kondisi terhapus");
        return;
    }
	
     var JasaKonstruksiBongkarBangunanPostLink = document.getElementById("JasaKonstruksiBongkarBangunanPost");
     var JasaBongkarBangunanPostLink = document.getElementById("JasaBongkarBangunanPost");
	 var JasaBuangPuingPostLink = document.getElementById("JasaBuangPuingPost");
	 var JasaPerawatanPerbaikanBangunanPostLink = document.getElementById("JasaPerawatanPerbaikanBangunanPost");
     
     //SUB JasaKonsBongkarBangunanPost
    var JasaBongkarTowerPostLink = document.getElementById("JasaBongkarTowerPost");
     var JasaBongkarRumahPostLink = document.getElementById("JasaBongkarRumahPost");
     var JasaBongkarBetonPostLink = document.getElementById("JasaBongkarBetonPost");
     var JasaBongkarAtapPostLink = document.getElementById("JasaBongkarAtapPost");
     var JasaBongkarKeramikPostLink = document.getElementById("JasaBongkarKeramikPost");
     var JasaBongkarTembokPostLink = document.getElementById("JasaBongkarTembokPost");
     var JasaBongkarDindingPostLink = document.getElementById("JasaBongkarDindingPost");
     var JasaBongkarPlafonPostLink = document.getElementById("JasaBongkarPlafonPost");
     var JasaBongkarPartisiPostLink = document.getElementById("JasaBongkarPartisiPost");
     var JasaBongkarPagarPostLink = document.getElementById("JasaBongkarPagarPost");
     var JasaBongkarLantaiPostLink = document.getElementById("JasaBongkarLantaiPost");

	//SUB JasaPerawatanPerbaikanBangunanPost
	var JasaPerbaikanAtapDrainaseBangunanPostLink = document.getElementById("JasaPerbaikanAtapDrainaseBangunanPost");
     var JasaPerbaikanElemenArsitekturalPostLink = document.getElementById("JasaPerbaikanElemenArsitekturalPost");
     var JasaPerbaikanKebocoranWaterproofingPostLink = document.getElementById("JasaPerbaikanKebocoranWaterproofingPost");
    var JasaPerbaikanAtapBocorPostLink = document.getElementById("JasaPerbaikanAtapBocorPost");
     var JasaPerbaikanDindingRetakPostLink = document.getElementById("JasaPerbaikanDindingRetakPost");
     var JasaPerbaikanRembesanAirPostLink = document.getElementById("JasaPerbaikanRembesanAirPost");
     var JasaPerbaikanPlafonRusakPostLink = document.getElementById("JasaPerbaikanPlafonRusakPost");
     var JasaPerbaikanDakBetonBocorPostLink = document.getElementById("JasaPerbaikanDakBetonBocorPost");
     var JasaPerbaikanTalangBocorPostLink = document.getElementById("JasaPerbaikanTalangBocorPost");
    
     // Default untuk menyembunyikan elemen
     JasaKonstruksiBongkarBangunanPostLink.style.visibility = 'hidden';
     JasaBongkarBangunanPostLink.style.visibility = 'hidden';
	 JasaBuangPuingPostLink.style.visibility = 'hidden';
	 JasaPerawatanPerbaikanBangunanPostLink.style.visibility = 'hidden';
	
     //SUB JasaBongkarBangunanPost
     JasaBongkarTowerPostLink.style.visibility = 'hidden';
     JasaBongkarRumahPostLink.style.visibility = 'hidden';
     JasaBongkarBetonPostLink.style.visibility = 'hidden';
     JasaBongkarAtapPostLink.style.visibility = 'hidden';
     JasaBongkarKeramikPostLink.style.visibility = 'hidden';
     JasaBongkarTembokPostLink.style.visibility = 'hidden';
     JasaBongkarDindingPostLink.style.visibility = 'hidden';
     JasaBongkarPlafonPostLink.style.visibility = 'hidden';
     JasaBongkarPartisiPostLink.style.visibility = 'hidden';
     JasaBongkarPagarPostLink.style.visibility = 'hidden';
     JasaBongkarLantaiPostLink.style.visibility = 'hidden';

	 //SUB JasaPerawatanPerbaikanBangunanPost
	JasaPerbaikanAtapDrainaseBangunanPostLink.style.visibility = 'hidden';
	JasaPerbaikanElemenArsitekturalPostLink.style.visibility = 'hidden';
	JasaPerbaikanKebocoranWaterproofingPostLink.style.visibility = 'hidden';
	
     JasaPerbaikanAtapBocorPostLink.style.visibility = 'hidden';
     JasaPerbaikanDindingRetakPostLink.style.visibility = 'hidden';
     JasaPerbaikanRembesanAirPostLink.style.visibility = 'hidden';
     JasaPerbaikanPlafonRusakPostLink.style.visibility = 'hidden';
     JasaPerbaikanDakBetonBocorPostLink.style.visibility = 'hidden';
     JasaPerbaikanTalangBocorPostLink.style.visibility = 'hidden';
	
     pageNameJasaKonsBongkarBangunanPost.textContent = "";
	
//SUB urlMappingJasaKonsBongkarBangunanPost
if (urlMappingJasaBongkarBangunan[cleanUrlJasaKonsBongkarBangunanPost]) {
	  // ============================================================
    // 1. SEMBUNYIKAN ELEMEN YANG TIDAK DIPERLUKAN (REMOVE)
    // ============================================================
    
    // HIDE PILLAR & GRANDPARENT (jangan hapus container!)
    removeCondition('JasaBongkarRumahPost'); 
        
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
        removeCondition('JasaKonsPondasiTanahPost');
        removeCondition('JasaKonsPembatasPost');
        removeCondition('JasaKonsPerbaikanPost');
        removeCondition('JasaKonsCuttingBetonPost');
        removeCondition('JasaKonsPengeboranPost');
        removeCondition('JasaKonsFinishingPost');
        removeCondition('JasaKonsStrukturPost');
        removeCondition('JasaKonsAlatKonstruksiPost');
        removeCondition('JasaKonsJalanPerkerasanPost');
	
	
	
        //hapus elemen SUB jasa JasaBongkarBangunanPost semua hapus juga JasaBongkarRumahPost
        removeCondition('JasaBongkarRumahPost');
        removeCondition('JasaBongkarTowerPost');
        removeCondition('JasaBongkarBetonPost');
        removeCondition('JasaBongkarAtapPost');
        removeCondition('JasaBongkarKeramikPost');
        removeCondition('JasaBongkarTembokPost');
        removeCondition('JasaBongkarDindingPost');
        removeCondition('JasaBongkarPlafonPost');
        removeCondition('JasaBongkarPartisiPost');
        removeCondition('JasaBongkarPagarPost');
        removeCondition('JasaBongkarLantaiPost');

		//hapus JasaBuangPuingPost
	removeCondition('JasaBuangPuingPost');
	
//hapus SEMUA elemen SUB jasa JasaPerawatanPerbaikanBangunanPost
        removeCondition('JasaPerawatanPerbaikanBangunanPost');
	    	    removeCondition('JasaPerbaikanAtapDrainaseBangunanPost');
	   removeCondition('JasaPerbaikanElemenArsitekturalPost');
	    removeCondition('JasaPerbaikanKebocoranWaterproofingPost');
	
        removeCondition('JasaPerbaikanAtapBocorPost');
        removeCondition('JasaPerbaikanDindingRetakPost');
        removeCondition('JasaPerbaikanRembesanAirPost');
        removeCondition('JasaPerbaikanPlafonRusakPost');
        removeCondition('JasaPerbaikanDakBetonBocorPost');
        removeCondition('JasaPerbaikanTalangBocorPost');
    /*
        JasaKonstruksiBongkarBangunanPostLink.style.visibility = 'visible';
	//TAMPILKAN JasaBongkarBangunanPost
        JasaBongkarBangunanPostLink.style.visibility = 'visible';
	//TAMPILKAN JasaBongkarRumahPost
	//skip level 4 JasaBongkarRumahPostLink.style.visibility = 'visible';
	
	pageNameJasaKonsBongkarBangunanPost.textContent = urlMappingJasaBongkarBangunan[cleanUrlJasaKonsBongkarBangunanPost];
	*/
	 // ============================================================
    // 2. TAMPILKAN ELEMEN YANG DIPERLUKAN (RESTORE JIKA PERLU)
    // ============================================================
    
    // Pastikan container utama visible
    const container = document.getElementById('JasaKonsBongkarBangunanPost');
    if (container) {
        container.style.display = 'inline';
        container.style.visibility = 'visible';
     } else {
        // Jika sudah di-remove, restore
        restoreCondition('JasaKonsBongkarBangunanPost');
    }
    
    let jasaVariable1 = document.getElementById('JasaKonstruksiBongkarBangunanPost');
    if (jasaVariable1) {
        jasaVariable1.style.display = 'inline';
        jasaVariable1.style.visibility = 'visible';
    } else {
        // Jika sudah di-remove, restore
        restoreCondition('JasaKonstruksiBongkarBangunanPost');
    }
    
    // Tampilkan Jasa Finishing Dak Beton (parent terdekat)
    let jasaVariable2 = document.getElementById('JasaBongkarBangunanPost');
    if (jasaVariable2) {
        jasaVariable2.style.display = 'inline';
        jasaVariable2.style.visibility = 'visible';
    } else {
        restoreCondition('JasaBongkarBangunanPost');
    }
    
    // Update page name
    const pageNameElement = document.getElementById("pageNameJasaKonsBongkarBangunanPost");
    if (pageNameElement) {
        pageNameElement.textContent = urlMappingJasaBongkarBangunan[cleanUrlJasaKonsBongkarBangunanPost];
        pageNameElement.style.display = 'inline';
    }
}
  // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaBongkarBangunan[cleanUrlJasaKonsBongkarBangunanPost]) {
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
                   "name": "Jasa Bongkar Bangunan",
                   "item": "https://www.betonjayareadymix.com/p/jasa-bongkar-bangunan.html"
               },
			   /*
               {
                   "@type": "ListItem",
                   "position": 4,
                   "name": "Jasa Bongkar Rumah",
                   "item": "https://www.betonjayareadymix.com/p/jasa-bongkar-rumah.html"
               },
			   */
               {
                   "@type": "ListItem",
                   "position": 4,
                   "name": urlMappingJasaBongkarBangunan[cleanUrlJasaKonsBongkarBangunanPost],
                   "item": cleanUrlJasaKonsBongkarBangunanPost
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
	
if (urlMappingJasaBongkarTower[cleanUrlJasaKonsBongkarBangunanPost]) {
	   // ============================================================
    // 1. SEMBUNYIKAN ELEMEN YANG TIDAK DIPERLUKAN (REMOVE)
    // ============================================================
    
    // HIDE PILLAR & GRANDPARENT (jangan hapus container!)
    removeCondition('JasaKonstruksiBongkarBangunanPost');  // PILLAR (Jasa Konstruksi)

     
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
        removeCondition('JasaKonsPondasiTanahPost');
        removeCondition('JasaKonsPembatasPost');
        removeCondition('JasaKonsPerbaikanPost');
        removeCondition('JasaKonsCuttingBetonPost');
        removeCondition('JasaKonsPengeboranPost');
        removeCondition('JasaKonsFinishingPost');
        removeCondition('JasaKonsStrukturPost');
        removeCondition('JasaKonsAlatKonstruksiPost');
        removeCondition('JasaKonsJalanPerkerasanPost');

	    
        //hapus elemen SUB jasa JasaBongkarBangunanPost semua JasaBongkarTowerPost hapus juga
        //removeCondition('JasaBongkarTowerPost');
        removeCondition('JasaBongkarRumahPost');
        removeCondition('JasaBongkarBetonPost');
        removeCondition('JasaBongkarAtapPost');
        removeCondition('JasaBongkarKeramikPost');
        removeCondition('JasaBongkarTembokPost');
        removeCondition('JasaBongkarDindingPost');
        removeCondition('JasaBongkarPlafonPost');
        removeCondition('JasaBongkarPartisiPost');
        removeCondition('JasaBongkarPagarPost');
        removeCondition('JasaBongkarLantaiPost');

	//hapus JasaBuangPuingPost
	removeCondition('JasaBuangPuingPost');
	//hapus SEMUA elemen SUB jasa JasaPerawatanPerbaikanBangunanPost
        removeCondition('JasaPerawatanPerbaikanBangunanPost');
	    removeCondition('JasaPerbaikanAtapDrainaseBangunanPost');
	   removeCondition('JasaPerbaikanElemenArsitekturalPost');
	    removeCondition('JasaPerbaikanKebocoranWaterproofingPost');
        removeCondition('JasaPerbaikanAtapBocorPost');
        removeCondition('JasaPerbaikanDindingRetakPost');
        removeCondition('JasaPerbaikanRembesanAirPost');
        removeCondition('JasaPerbaikanPlafonRusakPost');
        removeCondition('JasaPerbaikanDakBetonBocorPost');
        removeCondition('JasaPerbaikanTalangBocorPost');
       /*
        JasaKonstruksiBongkarBangunanPostLink.style.visibility = 'visible';
	//TAMPILKAN JasaBongkarBangunanPost
        JasaBongkarBangunanPostLink.style.visibility = 'visible';
	//TAMPILKAN JasaBongkarTowerPost
	//JasaBongkarTowerPostLink.style.visibility = 'visible';
	
	pageNameJasaKonsBongkarBangunanPost.textContent = urlMappingJasaBongkarTower[cleanUrlJasaKonsBongkarBangunanPost];
	*/
	 // ============================================================
    // 2. TAMPILKAN ELEMEN YANG DIPERLUKAN (RESTORE JIKA PERLU)
    // ============================================================
    
    // Pastikan container utama visible
    const container = document.getElementById('JasaKonsBongkarBangunanPost');
    if (container) {
        container.style.display = 'inline';
        container.style.visibility = 'visible';
     } else {
        // Jika sudah di-remove, restore
        restoreCondition('JasaKonsBongkarBangunanPost');
    }
    
    // Tampilkan Jasa Finishing (level 2)
    let jasaVariable1 = document.getElementById('JasaBongkarBangunanPost');
    if (jasaVariable1) {
        jasaVariable1.style.display = 'inline';
        jasaVariable1.style.visibility = 'visible';
    } else {
        // Jika sudah di-remove, restore
        restoreCondition('JasaBongkarBangunanPost');
    }
    
    // Tampilkan Jasa Finishing Dak Beton (parent terdekat)
    let jasaVariable2 = document.getElementById('JasaBongkarTowerPost');
    if (jasaVariable2) {
        jasaVariable2.style.display = 'inline';
        jasaVariable2.style.visibility = 'visible';
    } else {
        restoreCondition('JasaBongkarTowerPost');
    }
    
    // Update page name
    const pageNameElement = document.getElementById("pageNameJasaKonsBongkarBangunanPost");
    if (pageNameElement) {
        pageNameElement.textContent = urlMappingJasaBongkarTower[cleanUrlJasaKonsBongkarBangunanPost];
        pageNameElement.style.display = 'inline';
    }
}
      // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaBongkarTower[cleanUrlJasaKonsBongkarBangunanPost]) {
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
			   /*
               {
                   "@type": "ListItem",
                   "position": 2,
                   "name": "Jasa Konstruksi",
                   "item": "https://www.betonjayareadymix.com/p/jasa-konstruksi.html"
               },*/
               {
                   "@type": "ListItem",
                   "position": 2,
                   "name": "Jasa Bongkar Bangunan",
                   "item": "https://www.betonjayareadymix.com/p/jasa-bongkar-bangunan.html"
               },
			
               {
                   "@type": "ListItem",
                   "position": 3,
                   "name": "Jasa Bongkar Tower",
                   "item": "https://www.betonjayareadymix.com/p/jasa-bongkar-tower.html"
               },
			
               {
                   "@type": "ListItem",
                   "position": 4,
                   "name": urlMappingJasaBongkarTower[cleanUrlJasaKonsBongkarBangunanPost],
                   "item": cleanUrlJasaKonsBongkarBangunanPost
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }

if (urlMappingJasaBongkarRumah[cleanUrlJasaKonsBongkarBangunanPost]) {
	  // ============================================================
    // 1. SEMBUNYIKAN ELEMEN YANG TIDAK DIPERLUKAN (REMOVE)
    // ============================================================
    
    // HIDE PILLAR & GRANDPARENT (jangan hapus container!)
    removeCondition('JasaKonstruksiBongkarBangunanPost');  // PILLAR (Jasa Konstruksi)
        
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
        removeCondition('JasaKonsPondasiTanahPost');
        removeCondition('JasaKonsPembatasPost');
        removeCondition('JasaKonsPerbaikanPost');
        removeCondition('JasaKonsCuttingBetonPost');
        removeCondition('JasaKonsPengeboranPost');
        removeCondition('JasaKonsFinishingPost');
        removeCondition('JasaKonsStrukturPost');
        removeCondition('JasaKonsAlatKonstruksiPost');
        removeCondition('JasaKonsJalanPerkerasanPost');
	
	
	
        //hapus elemen SUB jasa JasaBongkarBangunanPost semua hapus juga JasaBongkarRumahPost
        //removeCondition('JasaBongkarRumahPost');
	
        removeCondition('JasaBongkarTowerPost');
        removeCondition('JasaBongkarBetonPost');
        removeCondition('JasaBongkarAtapPost');
        removeCondition('JasaBongkarKeramikPost');
        removeCondition('JasaBongkarTembokPost');
        removeCondition('JasaBongkarDindingPost');
        removeCondition('JasaBongkarPlafonPost');
        removeCondition('JasaBongkarPartisiPost');
        removeCondition('JasaBongkarPagarPost');
        removeCondition('JasaBongkarLantaiPost');

		//hapus JasaBuangPuingPost
	removeCondition('JasaBuangPuingPost');
	
//hapus SEMUA elemen SUB jasa JasaPerawatanPerbaikanBangunanPost
        removeCondition('JasaPerawatanPerbaikanBangunanPost');
	    	    removeCondition('JasaPerbaikanAtapDrainaseBangunanPost');
	   removeCondition('JasaPerbaikanElemenArsitekturalPost');
	    removeCondition('JasaPerbaikanKebocoranWaterproofingPost');
	
        removeCondition('JasaPerbaikanAtapBocorPost');
        removeCondition('JasaPerbaikanDindingRetakPost');
        removeCondition('JasaPerbaikanRembesanAirPost');
        removeCondition('JasaPerbaikanPlafonRusakPost');
        removeCondition('JasaPerbaikanDakBetonBocorPost');
        removeCondition('JasaPerbaikanTalangBocorPost');
    /*
        JasaKonstruksiBongkarBangunanPostLink.style.visibility = 'visible';
	//TAMPILKAN JasaBongkarBangunanPost
        JasaBongkarBangunanPostLink.style.visibility = 'visible';
	//TAMPILKAN JasaBongkarRumahPost
	//skip level 4 JasaBongkarRumahPostLink.style.visibility = 'visible';
	
	pageNameJasaKonsBongkarBangunanPost.textContent = urlMappingJasaBongkarRumah[cleanUrlJasaKonsBongkarBangunanPost];
	*/
	 // ============================================================
    // 2. TAMPILKAN ELEMEN YANG DIPERLUKAN (RESTORE JIKA PERLU)
    // ============================================================
    
    // Pastikan container utama visible
    const container = document.getElementById('JasaKonsBongkarBangunanPost');
    if (container) {
        container.style.display = 'inline';
        container.style.visibility = 'visible';
     } else {
        // Jika sudah di-remove, restore
        restoreCondition('JasaKonsBongkarBangunanPost');
    }
    
    // Tampilkan Jasa Finishing (level 2)
    let jasaVariable1 = document.getElementById('JasaBongkarBangunanPost');
    if (jasaVariable1) {
        jasaVariable1.style.display = 'inline';
        jasaVariable1.style.visibility = 'visible';
    } else {
        // Jika sudah di-remove, restore
        restoreCondition('JasaBongkarBangunanPost');
    }
    
    // Tampilkan Jasa Finishing Dak Beton (parent terdekat)
    let jasaVariable2 = document.getElementById('JasaBongkarRumahPost');
    if (jasaVariable2) {
        jasaVariable2.style.display = 'inline';
        jasaVariable2.style.visibility = 'visible';
    } else {
        restoreCondition('JasaBongkarRumahPost');
    }
    
    // Update page name
    const pageNameElement = document.getElementById("pageNameJasaKonsBongkarBangunanPost");
    if (pageNameElement) {
        pageNameElement.textContent = urlMappingJasaBongkarRumah[cleanUrlJasaKonsBongkarBangunanPost];
        pageNameElement.style.display = 'inline';
    }
}
  // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaBongkarRumah[cleanUrlJasaKonsBongkarBangunanPost]) {
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
			   /*
               {
                   "@type": "ListItem",
                   "position": 2,
                   "name": "Jasa Konstruksi",
                   "item": "https://www.betonjayareadymix.com/p/jasa-konstruksi.html"
               },*/
               {
                   "@type": "ListItem",
                   "position": 2,
                   "name": "Jasa Bongkar Bangunan",
                   "item": "https://www.betonjayareadymix.com/p/jasa-bongkar-bangunan.html"
               },
               {
                   "@type": "ListItem",
                   "position": 3,
                   "name": "Jasa Bongkar Rumah",
                   "item": "https://www.betonjayareadymix.com/p/jasa-bongkar-rumah.html"
               },
               {
                   "@type": "ListItem",
                   "position": 4,
                   "name": urlMappingJasaBongkarRumah[cleanUrlJasaKonsBongkarBangunanPost],
                   "item": cleanUrlJasaKonsBongkarBangunanPost
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
	
if (urlMappingJasaBongkarBeton[cleanUrlJasaKonsBongkarBangunanPost]) {
	   // ============================================================
    // 1. SEMBUNYIKAN ELEMEN YANG TIDAK DIPERLUKAN (REMOVE)
    // ============================================================
    
    // HIDE PILLAR & GRANDPARENT (jangan hapus container!)
    removeCondition('JasaKonstruksiBongkarBangunanPost');  // PILLAR (Jasa Konstruksi)

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
        removeCondition('JasaKonsPondasiTanahPost');
        removeCondition('JasaKonsPembatasPost');
        removeCondition('JasaKonsPerbaikanPost');
        removeCondition('JasaKonsCuttingBetonPost');
        removeCondition('JasaKonsPengeboranPost');
        removeCondition('JasaKonsFinishingPost');
        removeCondition('JasaKonsStrukturPost');
        removeCondition('JasaKonsAlatKonstruksiPost');
        removeCondition('JasaKonsJalanPerkerasanPost');

			//hapus JasaBuangPuingPost
	removeCondition('JasaBuangPuingPost');
		
        //hapus elemen SUB jasa JasaBongkarBangunanPost semua skip dg hapus JasaBongkarBetonPost
	//removeCondition('JasaBongkarBetonPost');
	removeCondition('JasaBongkarTowerPost');
        removeCondition('JasaBongkarRumahPost');
        removeCondition('JasaBongkarAtapPost');
        removeCondition('JasaBongkarKeramikPost');
        removeCondition('JasaBongkarTembokPost');
        removeCondition('JasaBongkarDindingPost');
        removeCondition('JasaBongkarPlafonPost');
        removeCondition('JasaBongkarPartisiPost');
        removeCondition('JasaBongkarPagarPost');
        removeCondition('JasaBongkarLantaiPost');

		//hapus SEMUA elemen SUB jasa JasaPerawatanPerbaikanBangunanPost
        removeCondition('JasaPerawatanPerbaikanBangunanPost');
	     	    removeCondition('JasaPerbaikanAtapDrainaseBangunanPost');
	   removeCondition('JasaPerbaikanElemenArsitekturalPost');
	    removeCondition('JasaPerbaikanKebocoranWaterproofingPost');
		
        removeCondition('JasaPerbaikanAtapBocorPost');
        removeCondition('JasaPerbaikanDindingRetakPost');
        removeCondition('JasaPerbaikanRembesanAirPost');
        removeCondition('JasaPerbaikanPlafonRusakPost');
        removeCondition('JasaPerbaikanDakBetonBocorPost');
        removeCondition('JasaPerbaikanTalangBocorPost');

	 /*
        JasaKonstruksiBongkarBangunanPostLink.style.visibility = 'visible';
	//TAMPILKAN JasaBongkarBangunanPost
        JasaBongkarBangunanPostLink.style.visibility = 'visible';
	//TAMPILKAN JasaBongkarBetonPost
	//skip level 4 JasaBongkarBetonPostLink.style.visibility = 'visible';
	
	pageNameJasaKonsBongkarBangunanPost.textContent = urlMappingJasaBongkarBeton[cleanUrlJasaKonsBongkarBangunanPost];
	*/
	 // ============================================================
    // 2. TAMPILKAN ELEMEN YANG DIPERLUKAN (RESTORE JIKA PERLU)
    // ============================================================
    
    // Pastikan container utama visible
    const container = document.getElementById('JasaKonsBongkarBangunanPost');
    if (container) {
        container.style.display = 'inline';
        container.style.visibility = 'visible';
     } else {
        // Jika sudah di-remove, restore
        restoreCondition('JasaKonsBongkarBangunanPost');
    }
    
   
    let jasaVariable1 = document.getElementById('JasaBongkarBangunanPost');
    if (jasaVariable1) {
        jasaVariable1.style.display = 'inline';
        jasaVariable1.style.visibility = 'visible';
    } else {
        // Jika sudah di-remove, restore
        restoreCondition('JasaBongkarBangunanPost');
    }
    
    // Tampilkan Jasa Finishing Dak Beton (parent terdekat)
    let jasaVariable2 = document.getElementById('JasaBongkarBetonPost');
    if (jasaVariable2) {
        jasaVariable2.style.display = 'inline';
        jasaVariable2.style.visibility = 'visible';
    } else {
        restoreCondition('JasaBongkarBetonPost');
    }
    
    // Update page name
    const pageNameElement = document.getElementById("pageNameJasaKonsBongkarBangunanPost");
    if (pageNameElement) {
        pageNameElement.textContent = urlMappingJasaBongkarBeton[cleanUrlJasaKonsBongkarBangunanPost];
        pageNameElement.style.display = 'inline';
    }
}
  // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaBongkarBeton[cleanUrlJasaKonsBongkarBangunanPost]) {
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
			   /*
               {
                   "@type": "ListItem",
                   "position": 2,
                   "name": "Jasa Konstruksi",
                   "item": "https://www.betonjayareadymix.com/p/jasa-konstruksi.html"
               },
			   */
               {
                   "@type": "ListItem",
                   "position": 2,
                   "name": "Jasa Bongkar Bangunan",
                   "item": "https://www.betonjayareadymix.com/p/jasa-bongkar-bangunan.html"
               },
               {
                   "@type": "ListItem",
                   "position": 3,
                   "name": "Jasa Bongkar Beton",
                   "item": "https://www.betonjayareadymix.com/p/jasa-bongkar-beton.html"
               },
               {
                   "@type": "ListItem",
                   "position": 4,
                   "name": urlMappingJasaBongkarBeton[cleanUrlJasaKonsBongkarBangunanPost],
                   "item": cleanUrlJasaKonsBongkarBangunanPost
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
if (urlMappingJasaBongkarAtap[cleanUrlJasaKonsBongkarBangunanPost]) {
 // 1. SEMBUNYIKAN ELEMEN YANG TIDAK DIPERLUKAN (REMOVE)
    // ============================================================
    
    // HIDE PILLAR & GRANDPARENT (jangan hapus container!)
    removeCondition('JasaKonstruksiBongkarBangunanPost');  // PILLAR (Jasa Konstruksi)
	
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
        removeCondition('JasaKonsPondasiTanahPost');
        removeCondition('JasaKonsPembatasPost');
        removeCondition('JasaKonsPerbaikanPost');
        removeCondition('JasaKonsCuttingBetonPost');
        removeCondition('JasaKonsPengeboranPost');
        removeCondition('JasaKonsFinishingPost');
        removeCondition('JasaKonsStrukturPost');
        removeCondition('JasaKonsAlatKonstruksiPost');
        removeCondition('JasaKonsJalanPerkerasanPost');

		//hapus JasaBuangPuingPost
	removeCondition('JasaBuangPuingPost');
	
        //hapus elemen SUB jasa JasaBongkarBangunanPost semua SELAIN JasaBongkarAtapPost
	removeCondition('JasaBongkarTowerPost');
        removeCondition('JasaBongkarBetonPost');
        removeCondition('JasaBongkarRumahPost');
        removeCondition('JasaBongkarKeramikPost');
        removeCondition('JasaBongkarTembokPost');
        removeCondition('JasaBongkarDindingPost');
        removeCondition('JasaBongkarPlafonPost');
        removeCondition('JasaBongkarPartisiPost');
        removeCondition('JasaBongkarPagarPost');
        removeCondition('JasaBongkarLantaiPost');

	//hapus SEMUA elemen SUB jasa JasaPerawatanPerbaikanBangunanPost
        removeCondition('JasaPerawatanPerbaikanBangunanPost');
	    	    removeCondition('JasaPerbaikanAtapDrainaseBangunanPost');
	   removeCondition('JasaPerbaikanElemenArsitekturalPost');
	    removeCondition('JasaPerbaikanKebocoranWaterproofingPost');
	
        removeCondition('JasaPerbaikanAtapBocorPost');
        removeCondition('JasaPerbaikanDindingRetakPost');
        removeCondition('JasaPerbaikanRembesanAirPost');
        removeCondition('JasaPerbaikanPlafonRusakPost');
        removeCondition('JasaPerbaikanDakBetonBocorPost');
        removeCondition('JasaPerbaikanTalangBocorPost');

	/*
        JasaKonstruksiBongkarBangunanPostLink.style.visibility = 'visible';
	//TAMPILKAN JasaBongkarBangunanPost
        JasaBongkarBangunanPostLink.style.visibility = 'visible';
	//TAMPILKAN JasaBongkarAtapPost
	JasaBongkarAtapPostLink.style.visibility = 'visible';
	
	pageNameJasaKonsBongkarBangunanPost.textContent = urlMappingJasaBongkarAtap[cleanUrlJasaKonsBongkarBangunanPost];
	*/
	// ============================================================
    // 2. TAMPILKAN ELEMEN YANG DIPERLUKAN (RESTORE JIKA PERLU)
    // ============================================================
    
    // Pastikan container utama visible
    const container = document.getElementById('JasaKonsBongkarBangunanPost');
    if (container) {
        container.style.display = 'inline';
        container.style.visibility = 'visible';
     } else {
        // Jika sudah di-remove, restore
        restoreCondition('JasaKonsBongkarBangunanPost');
    }
    
    // Tampilkan Jasa Finishing (level 2)
    let jasaVariable1 = document.getElementById('JasaBongkarBangunanPost');
    if (jasaVariable1) {
        jasaVariable1.style.display = 'inline';
        jasaVariable1.style.visibility = 'visible';
    } else {
        // Jika sudah di-remove, restore
        restoreCondition('JasaBongkarBangunanPost');
    }
    
    // Tampilkan (parent terdekat)
    let jasaVariable2 = document.getElementById('JasaBongkarAtapPost');
    if (jasaVariable2) {
        jasaVariable2.style.display = 'inline';
        jasaVariable2.style.visibility = 'visible';
    } else {
        restoreCondition('JasaBongkarAtapPost');
    }
    
    // Update page name
    const pageNameElement = document.getElementById("pageNameJasaKonsBongkarBangunanPost");
    if (pageNameElement) {
        pageNameElement.textContent = urlMappingJasaBongkarAtap[cleanUrlJasaKonsBongkarBangunanPost];
        pageNameElement.style.display = 'inline';
    }
}

  // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaBongkarAtap[cleanUrlJasaKonsBongkarBangunanPost]) {
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
			   /*
               {
                   "@type": "ListItem",
                   "position": 2,
                   "name": "Jasa Konstruksi",
                   "item": "https://www.betonjayareadymix.com/p/jasa-konstruksi.html"
               },
			   */
               {
                   "@type": "ListItem",
                   "position": 2,
                   "name": "Jasa Bongkar Bangunan",
                   "item": "https://www.betonjayareadymix.com/p/jasa-bongkar-bangunan.html"
               },
               {
                   "@type": "ListItem",
                   "position": 3,
                   "name": "Jasa Bongkar Atap",
                   "item": "https://www.betonjayareadymix.com/p/jasa-bongkar-atap.html"
               },
               {
                   "@type": "ListItem",
                   "position": 4,
                   "name": urlMappingJasaBongkarAtap[cleanUrlJasaKonsBongkarBangunanPost],
                   "item": cleanUrlJasaKonsBongkarBangunanPost
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
if (urlMappingJasaBongkarKeramik[cleanUrlJasaKonsBongkarBangunanPost]) {
 // 1. SEMBUNYIKAN ELEMEN YANG TIDAK DIPERLUKAN (REMOVE)
    // ============================================================
    
    // HIDE PILLAR & GRANDPARENT (jangan hapus container!)
    removeCondition('JasaKonstruksiBongkarBangunanPost');  // PILLAR (Jasa Konstruksi)

     
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
        removeCondition('JasaKonsPondasiTanahPost');
        removeCondition('JasaKonsPembatasPost');
        removeCondition('JasaKonsPerbaikanPost');
        removeCondition('JasaKonsCuttingBetonPost');
        removeCondition('JasaKonsPengeboranPost');
        removeCondition('JasaKonsFinishingPost');
        removeCondition('JasaKonsStrukturPost');
        removeCondition('JasaKonsAlatKonstruksiPost');
        removeCondition('JasaKonsJalanPerkerasanPost');
	
        //hapus elemen SUB jasa JasaBongkarBangunanPost semua SELAIN JasaBongkarKeramikPost
	removeCondition('JasaBongkarTowerPost');
        removeCondition('JasaBongkarBetonPost');
        removeCondition('JasaBongkarAtapPost');
        removeCondition('JasaBongkarRumahPost');
        removeCondition('JasaBongkarTembokPost');
        removeCondition('JasaBongkarDindingPost');
        removeCondition('JasaBongkarPlafonPost');
        removeCondition('JasaBongkarPartisiPost');
        removeCondition('JasaBongkarPagarPost');
        removeCondition('JasaBongkarLantaiPost');

		//hapus JasaBuangPuingPost
	removeCondition('JasaBuangPuingPost');
	
	//hapus SEMUA elemen SUB jasa JasaPerawatanPerbaikanBangunanPost
        removeCondition('JasaPerawatanPerbaikanBangunanPost');
	    	    removeCondition('JasaPerbaikanAtapDrainaseBangunanPost');
	   removeCondition('JasaPerbaikanElemenArsitekturalPost');
	    removeCondition('JasaPerbaikanKebocoranWaterproofingPost');
	
        removeCondition('JasaPerbaikanAtapBocorPost');
        removeCondition('JasaPerbaikanDindingRetakPost');
        removeCondition('JasaPerbaikanRembesanAirPost');
        removeCondition('JasaPerbaikanPlafonRusakPost');
        removeCondition('JasaPerbaikanDakBetonBocorPost');
        removeCondition('JasaPerbaikanTalangBocorPost');

	/*
        JasaKonstruksiBongkarBangunanPostLink.style.visibility = 'visible';
	//TAMPILKAN JasaBongkarBangunanPost
        JasaBongkarBangunanPostLink.style.visibility = 'visible';
	//TAMPILKAN JasaBongkarKeramikPost
	JasaBongkarKeramikPostLink.style.visibility = 'visible';
	
	pageNameJasaKonsBongkarBangunanPost.textContent = urlMappingJasaBongkarKeramik[cleanUrlJasaKonsBongkarBangunanPost];
	*/
		// ============================================================
    // 2. TAMPILKAN ELEMEN YANG DIPERLUKAN (RESTORE JIKA PERLU)
    // ============================================================
    
    // Pastikan container utama visible
    const container = document.getElementById('JasaKonsBongkarBangunanPost');
    if (container) {
        container.style.display = 'inline';
        container.style.visibility = 'visible';
     } else {
        // Jika sudah di-remove, restore
        restoreCondition('JasaKonsBongkarBangunanPost');
    }
    
    // Tampilkan Jasa Finishing (level 2)
    let jasaVariable1 = document.getElementById('JasaBongkarBangunanPost');
    if (jasaVariable1) {
        jasaVariable1.style.display = 'inline';
        jasaVariable1.style.visibility = 'visible';
    } else {
        // Jika sudah di-remove, restore
        restoreCondition('JasaBongkarBangunanPost');
    }
    
    // Tampilkan (parent terdekat)
    let jasaVariable2 = document.getElementById('JasaBongkarKeramikPost');
    if (jasaVariable2) {
        jasaVariable2.style.display = 'inline';
        jasaVariable2.style.visibility = 'visible';
    } else {
        restoreCondition('JasaBongkarKeramikPost');
    }
    
    // Update page name
    const pageNameElement = document.getElementById("pageNameJasaKonsBongkarBangunanPost");
    if (pageNameElement) {
        pageNameElement.textContent = urlMappingJasaBongkarKeramik[cleanUrlJasaKonsBongkarBangunanPost];
        pageNameElement.style.display = 'inline';
    }
	
}
 // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaBongkarKeramik[cleanUrlJasaKonsBongkarBangunanPost]) {
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
			   /*
               {
                   "@type": "ListItem",
                   "position": 2,
                   "name": "Jasa Konstruksi",
                   "item": "https://www.betonjayareadymix.com/p/jasa-konstruksi.html"
               },*/
			   
               {
                   "@type": "ListItem",
                   "position": 2,
                   "name": "Jasa Bongkar Bangunan",
                   "item": "https://www.betonjayareadymix.com/p/jasa-bongkar-bangunan.html"
               },
               {
                   "@type": "ListItem",
                   "position": 3,
                   "name": "Jasa Bongkar Keramik",
                   "item": "https://www.betonjayareadymix.com/p/jasa-bongkar-keramik.html"
               },
               {
                   "@type": "ListItem",
                   "position": 4,
                   "name": urlMappingJasaBongkarKeramik[cleanUrlJasaKonsBongkarBangunanPost],
                   "item": cleanUrlJasaKonsBongkarBangunanPost
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
if (urlMappingJasaBongkarTembok[cleanUrlJasaKonsBongkarBangunanPost]) {
 // 1. SEMBUNYIKAN ELEMEN YANG TIDAK DIPERLUKAN (REMOVE)
    // ============================================================
    
    // HIDE PILLAR & GRANDPARENT (jangan hapus container!)
    removeCondition('JasaKonstruksiBongkarBangunanPost');  // PILLAR (Jasa Konstruksi)

     
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
        removeCondition('JasaKonsPondasiTanahPost');
        removeCondition('JasaKonsPembatasPost');
        removeCondition('JasaKonsPerbaikanPost');
        removeCondition('JasaKonsCuttingBetonPost');
        removeCondition('JasaKonsPengeboranPost');
        removeCondition('JasaKonsFinishingPost');
        removeCondition('JasaKonsStrukturPost');
        removeCondition('JasaKonsAlatKonstruksiPost');
        removeCondition('JasaKonsJalanPerkerasanPost');
	
        //hapus elemen SUB jasa JasaBongkarBangunanPost semua SELAIN JasaBongkarTembokPost
	removeCondition('JasaBongkarTowerPost');
        removeCondition('JasaBongkarBetonPost');
        removeCondition('JasaBongkarAtapPost');
        removeCondition('JasaBongkarKeramikPost');
        removeCondition('JasaBongkarRumahPost');
        removeCondition('JasaBongkarDindingPost');
        removeCondition('JasaBongkarPlafonPost');
        removeCondition('JasaBongkarPartisiPost');
        removeCondition('JasaBongkarPagarPost');
        removeCondition('JasaBongkarLantaiPost');

		//hapus JasaBuangPuingPost
	removeCondition('JasaBuangPuingPost');
	
	//hapus SEMUA elemen SUB jasa JasaPerawatanPerbaikanBangunanPost
        removeCondition('JasaPerawatanPerbaikanBangunanPost');
	    	    removeCondition('JasaPerbaikanAtapDrainaseBangunanPost');
	   removeCondition('JasaPerbaikanElemenArsitekturalPost');
	    removeCondition('JasaPerbaikanKebocoranWaterproofingPost');
	
        removeCondition('JasaPerbaikanAtapBocorPost');
        removeCondition('JasaPerbaikanDindingRetakPost');
        removeCondition('JasaPerbaikanRembesanAirPost');
        removeCondition('JasaPerbaikanPlafonRusakPost');
        removeCondition('JasaPerbaikanDakBetonBocorPost');
        removeCondition('JasaPerbaikanTalangBocorPost');
    /*
        JasaKonstruksiBongkarBangunanPostLink.style.visibility = 'visible';
	//TAMPILKAN JasaBongkarBangunanPost
        JasaBongkarBangunanPostLink.style.visibility = 'visible';
	//TAMPILKAN JasaBongkarTembokPost
	JasaBongkarTembokPostLink.style.visibility = 'visible';
	
	pageNameJasaKonsBongkarBangunanPost.textContent = urlMappingJasaBongkarTembok[cleanUrlJasaKonsBongkarBangunanPost];
	*/
			// ============================================================
    // 2. TAMPILKAN ELEMEN YANG DIPERLUKAN (RESTORE JIKA PERLU)
    // ============================================================
    
    // Pastikan container utama visible
    const container = document.getElementById('JasaKonsBongkarBangunanPost');
    if (container) {
        container.style.display = 'inline';
        container.style.visibility = 'visible';
     } else {
        // Jika sudah di-remove, restore
        restoreCondition('JasaKonsBongkarBangunanPost');
    }
    
    // Tampilkan Jasa Finishing (level 2)
    let jasaVariable1 = document.getElementById('JasaBongkarBangunanPost');
    if (jasaVariable1) {
        jasaVariable1.style.display = 'inline';
        jasaVariable1.style.visibility = 'visible';
    } else {
        // Jika sudah di-remove, restore
        restoreCondition('JasaBongkarBangunanPost');
    }
    
    // Tampilkan (parent terdekat)
    let jasaVariable2 = document.getElementById('JasaBongkarTembokPost');
    if (jasaVariable2) {
        jasaVariable2.style.display = 'inline';
        jasaVariable2.style.visibility = 'visible';
    } else {
        restoreCondition('JasaBongkarTembokPost');
    }
    
    // Update page name
    const pageNameElement = document.getElementById("pageNameJasaKonsBongkarBangunanPost");
    if (pageNameElement) {
        pageNameElement.textContent = urlMappingJasaBongkarTembok[cleanUrlJasaKonsBongkarBangunanPost];
        pageNameElement.style.display = 'inline';
    }
}
// ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaBongkarTembok[cleanUrlJasaKonsBongkarBangunanPost]) {
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
			   /*
               {
                   "@type": "ListItem",
                   "position": 2,
                   "name": "Jasa Konstruksi",
                   "item": "https://www.betonjayareadymix.com/p/jasa-konstruksi.html"
               },*/
               {
                   "@type": "ListItem",
                   "position": 2,
                   "name": "Jasa Bongkar Bangunan",
                   "item": "https://www.betonjayareadymix.com/p/jasa-bongkar-bangunan.html"
               },
               {
                   "@type": "ListItem",
                   "position": 3,
                   "name": "Jasa Bongkar Tembok",
                   "item": "https://www.betonjayareadymix.com/p/jasa-bongkar-tembok.html"
               },
               {
                   "@type": "ListItem",
                   "position": 4,
                   "name": urlMappingJasaBongkarTembok[cleanUrlJasaKonsBongkarBangunanPost],
                   "item": cleanUrlJasaKonsBongkarBangunanPost
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
if (urlMappingJasaBongkarDinding[cleanUrlJasaKonsBongkarBangunanPost]) {
 // 1. SEMBUNYIKAN ELEMEN YANG TIDAK DIPERLUKAN (REMOVE)
    // ============================================================
    
    // HIDE PILLAR & GRANDPARENT (jangan hapus container!)
    removeCondition('JasaKonstruksiBongkarBangunanPost');  // PILLAR (Jasa Konstruksi)

     
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
        removeCondition('JasaKonsPondasiTanahPost');
        removeCondition('JasaKonsPembatasPost');
        removeCondition('JasaKonsPerbaikanPost');
        removeCondition('JasaKonsCuttingBetonPost');
        removeCondition('JasaKonsPengeboranPost');
        removeCondition('JasaKonsFinishingPost');
        removeCondition('JasaKonsStrukturPost');
        removeCondition('JasaKonsAlatKonstruksiPost');
        removeCondition('JasaKonsJalanPerkerasanPost');

		//hapus JasaBuangPuingPost
	removeCondition('JasaBuangPuingPost');
	
        //hapus elemen SUB jasa JasaBongkarBangunanPost semua SELAIN JasaBongkarDindingPost
	removeCondition('JasaBongkarTowerPost');
        removeCondition('JasaBongkarBetonPost');
        removeCondition('JasaBongkarAtapPost');
        removeCondition('JasaBongkarKeramikPost');
        removeCondition('JasaBongkarTembokPost');
        removeCondition('JasaBongkarRumahPost');
        removeCondition('JasaBongkarPlafonPost');
        removeCondition('JasaBongkarPartisiPost');
        removeCondition('JasaBongkarPagarPost');
        removeCondition('JasaBongkarLantaiPost');

	//hapus SEMUA elemen SUB jasa JasaPerawatanPerbaikanBangunanPost
        removeCondition('JasaPerawatanPerbaikanBangunanPost');
	    	    removeCondition('JasaPerbaikanAtapDrainaseBangunanPost');
	   removeCondition('JasaPerbaikanElemenArsitekturalPost');
	    removeCondition('JasaPerbaikanKebocoranWaterproofingPost');
	
        removeCondition('JasaPerbaikanAtapBocorPost');
        removeCondition('JasaPerbaikanDindingRetakPost');
        removeCondition('JasaPerbaikanRembesanAirPost');
        removeCondition('JasaPerbaikanPlafonRusakPost');
        removeCondition('JasaPerbaikanDakBetonBocorPost');
        removeCondition('JasaPerbaikanTalangBocorPost');
    /*
        JasaKonstruksiBongkarBangunanPostLink.style.visibility = 'visible';
	//TAMPILKAN JasaBongkarBangunanPost
        JasaBongkarBangunanPostLink.style.visibility = 'visible';
	//TAMPILKAN JasaBongkarDindingPost
	JasaBongkarDindingPostLink.style.visibility = 'visible';
	
	pageNameJasaKonsBongkarBangunanPost.textContent = urlMappingJasaBongkarDinding[cleanUrlJasaKonsBongkarBangunanPost];
	*/
			// ============================================================
    // 2. TAMPILKAN ELEMEN YANG DIPERLUKAN (RESTORE JIKA PERLU)
    // ============================================================
    
    // Pastikan container utama visible
    const container = document.getElementById('JasaKonsBongkarBangunanPost');
    if (container) {
        container.style.display = 'inline';
        container.style.visibility = 'visible';
     } else {
        // Jika sudah di-remove, restore
        restoreCondition('JasaKonsBongkarBangunanPost');
    }
    
    // Tampilkan Jasa Finishing (level 2)
    let jasaVariable1 = document.getElementById('JasaBongkarBangunanPost');
    if (jasaVariable1) {
        jasaVariable1.style.display = 'inline';
        jasaVariable1.style.visibility = 'visible';
    } else {
        // Jika sudah di-remove, restore
        restoreCondition('JasaBongkarBangunanPost');
    }
    
    // Tampilkan (parent terdekat)
    let jasaVariable2 = document.getElementById('JasaBongkarDindingPost');
    if (jasaVariable2) {
        jasaVariable2.style.display = 'inline';
        jasaVariable2.style.visibility = 'visible';
    } else {
        restoreCondition('JasaBongkarDindingPost');
    }
    
    // Update page name
    const pageNameElement = document.getElementById("pageNameJasaKonsBongkarBangunanPost");
    if (pageNameElement) {
        pageNameElement.textContent = urlMappingJasaBongkarDinding[cleanUrlJasaKonsBongkarBangunanPost];
        pageNameElement.style.display = 'inline';
    }
}
// ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaBongkarDinding[cleanUrlJasaKonsBongkarBangunanPost]) {
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
			   /*
               {
                   "@type": "ListItem",
                   "position": 2,
                   "name": "Jasa Konstruksi",
                   "item": "https://www.betonjayareadymix.com/p/jasa-konstruksi.html"
               },
			   */
               {
                   "@type": "ListItem",
                   "position": 2,
                   "name": "Jasa Bongkar Bangunan",
                   "item": "https://www.betonjayareadymix.com/p/jasa-bongkar-bangunan.html"
               },
               {
                   "@type": "ListItem",
                   "position": 3,
                   "name": "Jasa Bongkar Dinding",
                   "item": "https://www.betonjayareadymix.com/p/jasa-bongkar-dinding.html"
               },
               {
                   "@type": "ListItem",
                   "position": 4,
                   "name": urlMappingJasaBongkarDinding[cleanUrlJasaKonsBongkarBangunanPost],
                   "item": cleanUrlJasaKonsBongkarBangunanPost
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
if (urlMappingJasaBongkarPlafon[cleanUrlJasaKonsBongkarBangunanPost]) {
 // 1. SEMBUNYIKAN ELEMEN YANG TIDAK DIPERLUKAN (REMOVE)
    // ============================================================
    
    // HIDE PILLAR & GRANDPARENT (jangan hapus container!)
    removeCondition('JasaKonstruksiBongkarBangunanPost');  // PILLAR (Jasa Konstruksi)

     
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
        removeCondition('JasaKonsPondasiTanahPost');
        removeCondition('JasaKonsPembatasPost');
        removeCondition('JasaKonsPerbaikanPost');
        removeCondition('JasaKonsCuttingBetonPost');
        removeCondition('JasaKonsPengeboranPost');
        removeCondition('JasaKonsFinishingPost');
        removeCondition('JasaKonsStrukturPost');
        removeCondition('JasaKonsAlatKonstruksiPost');
        removeCondition('JasaKonsJalanPerkerasanPost');
	
        //hapus elemen SUB jasa JasaBongkarBangunanPost semua SELAIN JasaBongkarPlafonPost
	removeCondition('JasaBongkarTowerPost');
        removeCondition('JasaBongkarBetonPost');
        removeCondition('JasaBongkarAtapPost');
        removeCondition('JasaBongkarKeramikPost');
        removeCondition('JasaBongkarTembokPost');
        removeCondition('JasaBongkarDindingPost');
        removeCondition('JasaBongkarRumahPost');
        removeCondition('JasaBongkarPartisiPost');
        removeCondition('JasaBongkarPagarPost');
        removeCondition('JasaBongkarLantaiPost');

		//hapus JasaBuangPuingPost
	removeCondition('JasaBuangPuingPost');
	
	//hapus SEMUA elemen SUB jasa JasaPerawatanPerbaikanBangunanPost
        removeCondition('JasaPerawatanPerbaikanBangunanPost');
	    	    removeCondition('JasaPerbaikanAtapDrainaseBangunanPost');
	   removeCondition('JasaPerbaikanElemenArsitekturalPost');
	    removeCondition('JasaPerbaikanKebocoranWaterproofingPost');
	
        removeCondition('JasaPerbaikanAtapBocorPost');
        removeCondition('JasaPerbaikanDindingRetakPost');
        removeCondition('JasaPerbaikanRembesanAirPost');
        removeCondition('JasaPerbaikanPlafonRusakPost');
        removeCondition('JasaPerbaikanDakBetonBocorPost');
        removeCondition('JasaPerbaikanTalangBocorPost');
    /*
        JasaKonstruksiBongkarBangunanPostLink.style.visibility = 'visible';
	//TAMPILKAN JasaBongkarBangunanPost
        JasaBongkarBangunanPostLink.style.visibility = 'visible';
	//TAMPILKAN JasaBongkarPlafonPost
	JasaBongkarPlafonPostLink.style.visibility = 'visible';
	
	pageNameJasaKonsBongkarBangunanPost.textContent = urlMappingJasaBongkarPlafon[cleanUrlJasaKonsBongkarBangunanPost];
	*/
			// ============================================================
    // 2. TAMPILKAN ELEMEN YANG DIPERLUKAN (RESTORE JIKA PERLU)
    // ============================================================
    
    // Pastikan container utama visible
    const container = document.getElementById('JasaKonsBongkarBangunanPost');
    if (container) {
        container.style.display = 'inline';
        container.style.visibility = 'visible';
     } else {
        // Jika sudah di-remove, restore
        restoreCondition('JasaKonsBongkarBangunanPost');
    }
    
    // Tampilkan Jasa Finishing (level 2)
    let jasaVariable1 = document.getElementById('JasaBongkarBangunanPost');
    if (jasaVariable1) {
        jasaVariable1.style.display = 'inline';
        jasaVariable1.style.visibility = 'visible';
    } else {
        // Jika sudah di-remove, restore
        restoreCondition('JasaBongkarBangunanPost');
    }
    
    // Tampilkan (parent terdekat)
    let jasaVariable2 = document.getElementById('JasaBongkarPlafonPost');
    if (jasaVariable2) {
        jasaVariable2.style.display = 'inline';
        jasaVariable2.style.visibility = 'visible';
    } else {
        restoreCondition('JasaBongkarPlafonPost');
    }
    
    // Update page name
    const pageNameElement = document.getElementById("pageNameJasaKonsBongkarBangunanPost");
    if (pageNameElement) {
        pageNameElement.textContent = urlMappingJasaBongkarPlafon[cleanUrlJasaKonsBongkarBangunanPost];
        pageNameElement.style.display = 'inline';
    }
}
// ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaBongkarPlafon[cleanUrlJasaKonsBongkarBangunanPost]) {
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
			   /*
               {
                   "@type": "ListItem",
                   "position": 2,
                   "name": "Jasa Konstruksi",
                   "item": "https://www.betonjayareadymix.com/p/jasa-konstruksi.html"
               },*/
               {
                   "@type": "ListItem",
                   "position": 2,
                   "name": "Jasa Bongkar Bangunan",
                   "item": "https://www.betonjayareadymix.com/p/jasa-bongkar-bangunan.html"
               },
               {
                   "@type": "ListItem",
                   "position": 3,
                   "name": "Jasa Bongkar Plafon",
                   "item": "https://www.betonjayareadymix.com/p/jasa-bongkar-plafon.html"
               },
               {
                   "@type": "ListItem",
                   "position": 4,
                   "name": urlMappingJasaBongkarPlafon[cleanUrlJasaKonsBongkarBangunanPost],
                   "item": cleanUrlJasaKonsBongkarBangunanPost
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
if (urlMappingJasaBongkarPartisi[cleanUrlJasaKonsBongkarBangunanPost]) {
 // 1. SEMBUNYIKAN ELEMEN YANG TIDAK DIPERLUKAN (REMOVE)
    // ============================================================
    
    // HIDE PILLAR & GRANDPARENT (jangan hapus container!)
    removeCondition('JasaKonstruksiBongkarBangunanPost');  // PILLAR (Jasa Konstruksi)

     
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
        removeCondition('JasaKonsPondasiTanahPost');
        removeCondition('JasaKonsPembatasPost');
        removeCondition('JasaKonsPerbaikanPost');
        removeCondition('JasaKonsCuttingBetonPost');
        removeCondition('JasaKonsPengeboranPost');
        removeCondition('JasaKonsFinishingPost');
        removeCondition('JasaKonsStrukturPost');
        removeCondition('JasaKonsAlatKonstruksiPost');
        removeCondition('JasaKonsJalanPerkerasanPost');

		//hapus JasaBuangPuingPost
	removeCondition('JasaBuangPuingPost');
	
        //hapus elemen SUB jasa JasaBongkarBangunanPost semua SELAIN JasaBongkarPartisiPost
	removeCondition('JasaBongkarTowerPost');
        removeCondition('JasaBongkarBetonPost');
        removeCondition('JasaBongkarAtapPost');
        removeCondition('JasaBongkarKeramikPost');
        removeCondition('JasaBongkarTembokPost');
        removeCondition('JasaBongkarDindingPost');
        removeCondition('JasaBongkarPlafonPost');
        removeCondition('JasaBongkarRumahPost');
        removeCondition('JasaBongkarPagarPost');
        removeCondition('JasaBongkarLantaiPost');

	//hapus SEMUA elemen SUB jasa JasaPerawatanPerbaikanBangunanPost
        removeCondition('JasaPerawatanPerbaikanBangunanPost');
	    	    removeCondition('JasaPerbaikanAtapDrainaseBangunanPost');
	   removeCondition('JasaPerbaikanElemenArsitekturalPost');
	    removeCondition('JasaPerbaikanKebocoranWaterproofingPost');
	
        removeCondition('JasaPerbaikanAtapBocorPost');
        removeCondition('JasaPerbaikanDindingRetakPost');
        removeCondition('JasaPerbaikanRembesanAirPost');
        removeCondition('JasaPerbaikanPlafonRusakPost');
        removeCondition('JasaPerbaikanDakBetonBocorPost');
        removeCondition('JasaPerbaikanTalangBocorPost');
    /*
        JasaKonstruksiBongkarBangunanPostLink.style.visibility = 'visible';
	//TAMPILKAN JasaBongkarBangunanPost
        JasaBongkarBangunanPostLink.style.visibility = 'visible';
	//TAMPILKAN JasaBongkarPartisiPost
	JasaBongkarPartisiPostLink.style.visibility = 'visible';
	
	pageNameJasaKonsBongkarBangunanPost.textContent = urlMappingJasaBongkarPartisi[cleanUrlJasaKonsBongkarBangunanPost];
	*/
			// ============================================================
    // 2. TAMPILKAN ELEMEN YANG DIPERLUKAN (RESTORE JIKA PERLU)
    // ============================================================
    
    // Pastikan container utama visible
    const container = document.getElementById('JasaKonsBongkarBangunanPost');
    if (container) {
        container.style.display = 'inline';
        container.style.visibility = 'visible';
     } else {
        // Jika sudah di-remove, restore
        restoreCondition('JasaKonsBongkarBangunanPost');
    }
    
    // Tampilkan Jasa Finishing (level 2)
    let jasaVariable1 = document.getElementById('JasaBongkarBangunanPost');
    if (jasaVariable1) {
        jasaVariable1.style.display = 'inline';
        jasaVariable1.style.visibility = 'visible';
    } else {
        // Jika sudah di-remove, restore
        restoreCondition('JasaBongkarBangunanPost');
    }
    
    // Tampilkan (parent terdekat)
    let jasaVariable2 = document.getElementById('JasaBongkarPartisiPost');
    if (jasaVariable2) {
        jasaVariable2.style.display = 'inline';
        jasaVariable2.style.visibility = 'visible';
    } else {
        restoreCondition('JasaBongkarPartisiPost');
    }
    
    // Update page name
    const pageNameElement = document.getElementById("pageNameJasaKonsBongkarBangunanPost");
    if (pageNameElement) {
        pageNameElement.textContent = urlMappingJasaBongkarPartisi[cleanUrlJasaKonsBongkarBangunanPost];
        pageNameElement.style.display = 'inline';
    }
}
// ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaBongkarPartisi[cleanUrlJasaKonsBongkarBangunanPost]) {
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
			   /*
               {
                   "@type": "ListItem",
                   "position": 2,
                   "name": "Jasa Konstruksi",
                   "item": "https://www.betonjayareadymix.com/p/jasa-konstruksi.html"
               },*/
               {
                   "@type": "ListItem",
                   "position": 2,
                   "name": "Jasa Bongkar Bangunan",
                   "item": "https://www.betonjayareadymix.com/p/jasa-bongkar-bangunan.html"
               },
               {
                   "@type": "ListItem",
                   "position": 3,
                   "name": "Jasa Bongkar Partisi",
                   "item": "https://www.betonjayareadymix.com/p/jasa-bongkar-partisi.html"
               },
               {
                   "@type": "ListItem",
                   "position": 4,
                   "name": urlMappingJasaBongkarPartisi[cleanUrlJasaKonsBongkarBangunanPost],
                   "item": cleanUrlJasaKonsBongkarBangunanPost
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
if (urlMappingJasaBongkarPagar[cleanUrlJasaKonsBongkarBangunanPost]) {
 // 1. SEMBUNYIKAN ELEMEN YANG TIDAK DIPERLUKAN (REMOVE)
    // ============================================================
    
    // HIDE PILLAR & GRANDPARENT (jangan hapus container!)
    removeCondition('JasaKonstruksiBongkarBangunanPost');  // PILLAR (Jasa Konstruksi)

     
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
        removeCondition('JasaKonsPondasiTanahPost');
        removeCondition('JasaKonsPembatasPost');
        removeCondition('JasaKonsPerbaikanPost');
        removeCondition('JasaKonsCuttingBetonPost');
        removeCondition('JasaKonsPengeboranPost');
        removeCondition('JasaKonsFinishingPost');
        removeCondition('JasaKonsStrukturPost');
        removeCondition('JasaKonsAlatKonstruksiPost');
        removeCondition('JasaKonsJalanPerkerasanPost');

		//hapus JasaBuangPuingPost
	removeCondition('JasaBuangPuingPost');
	
        //hapus elemen SUB jasa JasaBongkarBangunanPost semua SELAIN JasaBongkarPagarPost
	removeCondition('JasaBongkarTowerPost');
        removeCondition('JasaBongkarBetonPost');
        removeCondition('JasaBongkarAtapPost');
        removeCondition('JasaBongkarKeramikPost');
        removeCondition('JasaBongkarTembokPost');
        removeCondition('JasaBongkarDindingPost');
        removeCondition('JasaBongkarPlafonPost');
        removeCondition('JasaBongkarPartisiPost');
        removeCondition('JasaBongkarRumahPost');
        removeCondition('JasaBongkarLantaiPost');

	//hapus SEMUA elemen SUB jasa JasaPerawatanPerbaikanBangunanPost
        removeCondition('JasaPerawatanPerbaikanBangunanPost');
	    	    removeCondition('JasaPerbaikanAtapDrainaseBangunanPost');
	   removeCondition('JasaPerbaikanElemenArsitekturalPost');
	    removeCondition('JasaPerbaikanKebocoranWaterproofingPost');
	
        removeCondition('JasaPerbaikanAtapBocorPost');
        removeCondition('JasaPerbaikanDindingRetakPost');
        removeCondition('JasaPerbaikanRembesanAirPost');
        removeCondition('JasaPerbaikanPlafonRusakPost');
        removeCondition('JasaPerbaikanDakBetonBocorPost');
        removeCondition('JasaPerbaikanTalangBocorPost');
    /*
        JasaKonstruksiBongkarBangunanPostLink.style.visibility = 'visible';
	//TAMPILKAN JasaBongkarBangunanPost
        JasaBongkarBangunanPostLink.style.visibility = 'visible';
	//TAMPILKAN JasaBongkarPagarPost
	JasaBongkarPagarPostLink.style.visibility = 'visible';
	
	pageNameJasaKonsBongkarBangunanPost.textContent = urlMappingJasaBongkarPagar[cleanUrlJasaKonsBongkarBangunanPost];
	*/
   		// ============================================================
    // 2. TAMPILKAN ELEMEN YANG DIPERLUKAN (RESTORE JIKA PERLU)
    // ============================================================
    
    // Pastikan container utama visible
    const container = document.getElementById('JasaKonsBongkarBangunanPost');
    if (container) {
        container.style.display = 'inline';
        container.style.visibility = 'visible';
     } else {
        // Jika sudah di-remove, restore
        restoreCondition('JasaKonsBongkarBangunanPost');
    }
    
    // Tampilkan Jasa Finishing (level 2)
    let jasaVariable1 = document.getElementById('JasaBongkarBangunanPost');
    if (jasaVariable1) {
        jasaVariable1.style.display = 'inline';
        jasaVariable1.style.visibility = 'visible';
    } else {
        // Jika sudah di-remove, restore
        restoreCondition('JasaBongkarBangunanPost');
    }
    
    // Tampilkan (parent terdekat)
    let jasaVariable2 = document.getElementById('JasaBongkarPagarPost');
    if (jasaVariable2) {
        jasaVariable2.style.display = 'inline';
        jasaVariable2.style.visibility = 'visible';
    } else {
        restoreCondition('JasaBongkarPagarPost');
    }
    
    // Update page name
    const pageNameElement = document.getElementById("pageNameJasaKonsBongkarBangunanPost");
    if (pageNameElement) {
        pageNameElement.textContent = urlMappingJasaBongkarPagar[cleanUrlJasaKonsBongkarBangunanPost];
        pageNameElement.style.display = 'inline';
    }	
}
// ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaBongkarPagar[cleanUrlJasaKonsBongkarBangunanPost]) {
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
			   /*
               {
                   "@type": "ListItem",
                   "position": 2,
                   "name": "Jasa Konstruksi",
                   "item": "https://www.betonjayareadymix.com/p/jasa-konstruksi.html"
               },*/
               {
                   "@type": "ListItem",
                   "position": 2,
                   "name": "Jasa Bongkar Bangunan",
                   "item": "https://www.betonjayareadymix.com/p/jasa-bongkar-bangunan.html"
               },
               {
                   "@type": "ListItem",
                   "position": 3,
                   "name": "Jasa Bongkar Pagar",
                   "item": "https://www.betonjayareadymix.com/p/jasa-bongkar-pagar.html"
               },
               {
                   "@type": "ListItem",
                   "position": 4,
                   "name": urlMappingJasaBongkarPagar[cleanUrlJasaKonsBongkarBangunanPost],
                   "item": cleanUrlJasaKonsBongkarBangunanPost
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
if (urlMappingJasaBongkarLantai[cleanUrlJasaKonsBongkarBangunanPost]) {
 // 1. SEMBUNYIKAN ELEMEN YANG TIDAK DIPERLUKAN (REMOVE)
    // ============================================================
    
    // HIDE PILLAR & GRANDPARENT (jangan hapus container!)
    removeCondition('JasaKonstruksiBongkarBangunanPost');  // PILLAR (Jasa Konstruksi)

     
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
        removeCondition('JasaKonsPondasiTanahPost');
        removeCondition('JasaKonsPembatasPost');
        removeCondition('JasaKonsPerbaikanPost');
        removeCondition('JasaKonsCuttingBetonPost');
        removeCondition('JasaKonsPengeboranPost');
        removeCondition('JasaKonsFinishingPost');
        removeCondition('JasaKonsStrukturPost');
        removeCondition('JasaKonsAlatKonstruksiPost');
        removeCondition('JasaKonsJalanPerkerasanPost');
	
        //hapus elemen SUB jasa JasaBongkarBangunanPost semua SELAIN JasaBongkarLantaiPost
	removeCondition('JasaBongkarTowerPost');
        removeCondition('JasaBongkarBetonPost');
        removeCondition('JasaBongkarAtapPost');
        removeCondition('JasaBongkarKeramikPost');
        removeCondition('JasaBongkarTembokPost');
        removeCondition('JasaBongkarDindingPost');
        removeCondition('JasaBongkarPlafonPost');
        removeCondition('JasaBongkarPartisiPost');
        removeCondition('JasaBongkarPagarPost');
        removeCondition('JasaBongkarRumahPost');

		//hapus JasaBuangPuingPost
	removeCondition('JasaBuangPuingPost');
	
	//hapus SEMUA elemen SUB jasa JasaPerawatanPerbaikanBangunanPost
        removeCondition('JasaPerawatanPerbaikanBangunanPost');
	    	    removeCondition('JasaPerbaikanAtapDrainaseBangunanPost');
	   removeCondition('JasaPerbaikanElemenArsitekturalPost');
	    removeCondition('JasaPerbaikanKebocoranWaterproofingPost');
	
        removeCondition('JasaPerbaikanAtapBocorPost');
        removeCondition('JasaPerbaikanDindingRetakPost');
        removeCondition('JasaPerbaikanRembesanAirPost');
        removeCondition('JasaPerbaikanPlafonRusakPost');
        removeCondition('JasaPerbaikanDakBetonBocorPost');
        removeCondition('JasaPerbaikanTalangBocorPost');
    /*
        JasaKonstruksiBongkarBangunanPostLink.style.visibility = 'visible';
	//TAMPILKAN JasaBongkarBangunanPost
        JasaBongkarBangunanPostLink.style.visibility = 'visible';
	//TAMPILKAN JasaBongkarLantaiPost
	JasaBongkarLantaiPostLink.style.visibility = 'visible';
	
	pageNameJasaKonsBongkarBangunanPost.textContent = urlMappingJasaBongkarLantai[cleanUrlJasaKonsBongkarBangunanPost];
	*/
			// ============================================================
    // 2. TAMPILKAN ELEMEN YANG DIPERLUKAN (RESTORE JIKA PERLU)
    // ============================================================
    
    // Pastikan container utama visible
    const container = document.getElementById('JasaKonsBongkarBangunanPost');
    if (container) {
        container.style.display = 'inline';
        container.style.visibility = 'visible';
     } else {
        // Jika sudah di-remove, restore
        restoreCondition('JasaKonsBongkarBangunanPost');
    }
    
    // Tampilkan Jasa Finishing (level 2)
    let jasaVariable1 = document.getElementById('JasaBongkarBangunanPost');
    if (jasaVariable1) {
        jasaVariable1.style.display = 'inline';
        jasaVariable1.style.visibility = 'visible';
    } else {
        // Jika sudah di-remove, restore
        restoreCondition('JasaBongkarBangunanPost');
    }
    
    // Tampilkan (parent terdekat)
    let jasaVariable2 = document.getElementById('JasaBongkarLantaiPost');
    if (jasaVariable2) {
        jasaVariable2.style.display = 'inline';
        jasaVariable2.style.visibility = 'visible';
    } else {
        restoreCondition('JasaBongkarLantaiPost');
    }
    
    // Update page name
    const pageNameElement = document.getElementById("pageNameJasaKonsBongkarBangunanPost");
    if (pageNameElement) {
        pageNameElement.textContent = urlMappingJasaBongkarLantai[cleanUrlJasaKonsBongkarBangunanPost];
        pageNameElement.style.display = 'inline';
    }
}
// ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaBongkarLantai[cleanUrlJasaKonsBongkarBangunanPost]) {
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
			   /*
               {
                   "@type": "ListItem",
                   "position": 2,
                   "name": "Jasa Konstruksi",
                   "item": "https://www.betonjayareadymix.com/p/jasa-konstruksi.html"
               },*/
               {
                   "@type": "ListItem",
                   "position": 2,
                   "name": "Jasa Bongkar Bangunan",
                   "item": "https://www.betonjayareadymix.com/p/jasa-bongkar-bangunan.html"
               },
               {
                   "@type": "ListItem",
                   "position": 3,
                   "name": "Jasa Bongkar Lantai",
                   "item": "https://www.betonjayareadymix.com/p/jasa-bongkar-lantai.html"
               },
               {
                   "@type": "ListItem",
                   "position": 4,
                   "name": urlMappingJasaBongkarLantai[cleanUrlJasaKonsBongkarBangunanPost],
                   "item": cleanUrlJasaKonsBongkarBangunanPost
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }

//SUB urlMappingJasaBuangPuing
if (urlMappingJasaBuangPuing[cleanUrlJasaKonsBongkarBangunanPost]) {

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
        removeCondition('JasaKonsPondasiTanahPost');
        removeCondition('JasaKonsPembatasPost');
        removeCondition('JasaKonsPerbaikanPost');
        removeCondition('JasaKonsCuttingBetonPost');
        removeCondition('JasaKonsPengeboranPost');
        removeCondition('JasaKonsFinishingPost');
        removeCondition('JasaKonsStrukturPost');
        removeCondition('JasaKonsAlatKonstruksiPost');
        removeCondition('JasaKonsJalanPerkerasanPost');

	//hapus SEMUA elemen SUB jasa JasaPerawatanPerbaikanBangunanPost 
        removeCondition('JasaPerawatanPerbaikanBangunanPost');
	   	removeCondition('JasaPerbaikanAtapDrainaseBangunanPost');
	   removeCondition('JasaPerbaikanElemenArsitekturalPost');
	    removeCondition('JasaPerbaikanKebocoranWaterproofingPost');
        removeCondition('JasaPerbaikanAtapBocorPost');
        removeCondition('JasaPerbaikanDindingRetakPost');
        removeCondition('JasaPerbaikanRembesanAirPost');
        removeCondition('JasaPerbaikanPlafonRusakPost');
        removeCondition('JasaPerbaikanDakBetonBocorPost');
        removeCondition('JasaPerbaikanTalangBocorPost');
	
        //hapus elemen SUB jasa JasaBongkarBangunanPost semua 
        removeCondition('JasaBongkarBangunanPost');
	
        removeCondition('JasaBongkarRumahPost');
        removeCondition('JasaBongkarTowerPost');
        removeCondition('JasaBongkarBetonPost');
        removeCondition('JasaBongkarAtapPost');
        removeCondition('JasaBongkarKeramikPost');
        removeCondition('JasaBongkarTembokPost');
        removeCondition('JasaBongkarDindingPost');
        removeCondition('JasaBongkarPlafonPost');
        removeCondition('JasaBongkarPartisiPost');
        removeCondition('JasaBongkarPagarPost');
        removeCondition('JasaBongkarLantaiPost');

	/*
        JasaKonstruksiBongkarBangunanPostLink.style.visibility = 'visible';
	//TAMPILKAN JasaBongkarBangunanPost
      JasaBuangPuingPostLink.style.visibility = 'visible';

	pageNameJasaKonsBongkarBangunanPost.textContent = urlMappingJasaBuangPuing[cleanUrlJasaKonsBongkarBangunanPost];
	*/
	// ============================================================
    // 2. TAMPILKAN ELEMEN YANG DIPERLUKAN (RESTORE JIKA PERLU)
    // ============================================================
    
    // Pastikan container utama visible
    const container = document.getElementById('JasaKonsBongkarBangunanPost');
    if (container) {
        container.style.display = 'inline';
        container.style.visibility = 'visible';
     } else {
        // Jika sudah di-remove, restore
        restoreCondition('JasaKonsBongkarBangunanPost');
    }
    

    let jasaVariable1 = document.getElementById('JasaKonstruksiBongkarBangunanPost');
    if (jasaVariable1) {
        jasaVariable1.style.display = 'inline';
        jasaVariable1.style.visibility = 'visible';
    } else {
        // Jika sudah di-remove, restore
        restoreCondition('JasaKonstruksiBongkarBangunanPost');
    }
     let jasaVariable2 = document.getElementById('JasaBuangPuingPost');
    if (jasaVariable2) {
        jasaVariable2.style.display = 'inline';
        jasaVariable2.style.visibility = 'visible';
    } else {
        // Jika sudah di-remove, restore
        restoreCondition('JasaBuangPuingPost');
    }
    // Update page name
    const pageNameElement = document.getElementById("pageNameJasaKonsBongkarBangunanPost");
    if (pageNameElement) {
        pageNameElement.textContent = urlMappingJasaBongkarRumah[cleanUrlJasaKonsBongkarBangunanPost];
        pageNameElement.style.display = 'inline';
    }
}
      // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaBuangPuing[cleanUrlJasaKonsBongkarBangunanPost]) {
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
                   "name": "Jasa Buang Puing",
                   "item": "https://www.betonjayareadymix.com/p/jasa-buang-puing.html"
               },
               {
                   "@type": "ListItem",
                   "position": 4,
                   "name": urlMappingJasaBuangPuing[cleanUrlJasaKonsBongkarBangunanPost],
                   "item": cleanUrlJasaKonsBongkarBangunanPost
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }

//SUB urlMappingJasaPerawatanPerbaikanBangunanPost
//JasaPerbaikanAtapBocorPost
if (urlMappingJasaPerbaikanAtapBocor[cleanUrlJasaKonsBongkarBangunanPost]) {
        restoreCondition('JasaKonsBongkarBangunanPost');
	
        restoreCondition('JasaPerawatanPerbaikanBangunanPost');
	    restoreCondition('JasaPerbaikanAtapDrainaseBangunanPost');
	    
        restoreCondition('JasaPerbaikanAtapBocorPost');
     
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
        removeCondition('JasaKonsPondasiTanahPost');
        removeCondition('JasaKonsPembatasPost');
        removeCondition('JasaKonsPerbaikanPost');
        removeCondition('JasaKonsCuttingBetonPost');
        removeCondition('JasaKonsPengeboranPost');
        removeCondition('JasaKonsFinishingPost');
        removeCondition('JasaKonsStrukturPost');
        removeCondition('JasaKonsAlatKonstruksiPost');
        removeCondition('JasaKonsJalanPerkerasanPost');

		//hapus JasaBuangPuingPost
	removeCondition('JasaBuangPuingPost');
	
	//hapus SEMUA elemen SUB jasa JasaPerawatanPerbaikanBangunanPost SELAIN JasaPerbaikanAtapBocorPost
        //removeCondition('JasaPerawatanPerbaikanBangunanPost');
	   	    //removeCondition('JasaPerbaikanAtapDrainaseBangunanPost');
	   removeCondition('JasaPerbaikanElemenArsitekturalPost');
	    removeCondition('JasaPerbaikanKebocoranWaterproofingPost');
        //removeCondition('JasaPerbaikanAtapBocorPost');
        removeCondition('JasaPerbaikanDindingRetakPost');
        removeCondition('JasaPerbaikanRembesanAirPost');
        removeCondition('JasaPerbaikanPlafonRusakPost');
        removeCondition('JasaPerbaikanDakBetonBocorPost');
        removeCondition('JasaPerbaikanTalangBocorPost');
	
        //hapus elemen SUB jasa JasaBongkarBangunanPost semua 
        removeCondition('JasaBongkarBangunanPost');
	
        removeCondition('JasaBongkarRumahPost');
        removeCondition('JasaBongkarTowerPost');
        removeCondition('JasaBongkarBetonPost');
        removeCondition('JasaBongkarAtapPost');
        removeCondition('JasaBongkarKeramikPost');
        removeCondition('JasaBongkarTembokPost');
        removeCondition('JasaBongkarDindingPost');
        removeCondition('JasaBongkarPlafonPost');
        removeCondition('JasaBongkarPartisiPost');
        removeCondition('JasaBongkarPagarPost');
        removeCondition('JasaBongkarLantaiPost');

	
       
        JasaKonstruksiBongkarBangunanPostLink.style.visibility = 'visible';
	//TAMPILKAN JasaBongkarBangunanPost
     JasaPerawatanPerbaikanBangunanPostLink.style.visibility = 'visible';
	//TAMPILKAN JasaJasaPerbaikanAtapBocorPost
	JasaPerbaikanAtapBocorPostLink.style.visibility = 'visible';
	
	pageNameJasaKonsBongkarBangunanPost.textContent = urlMappingJasaPerbaikanAtapBocor[cleanUrlJasaKonsBongkarBangunanPost];
    }
      // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaPerbaikanAtapBocor[cleanUrlJasaKonsBongkarBangunanPost]) {
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
                   "name": "Jasa Perawatan & Perbaikan Bangunan",
                   "item": "https://www.betonjayareadymix.com/p/jasa-perawatan-perbaikan-bangunan.html"
               },
			 {
                   "@type": "ListItem",
                   "position": 4,
                   "name": "Jasa Perbaikan Atap & Drainase Bangunan",
                   "item": "https://www.betonjayareadymix.com/p/jasa-perbaikan-atap-drainase-bangunan.html"
               },
               {
                   "@type": "ListItem",
                   "position": 5,
                   "name": "Jasa Perbaikan Atap Bocor",
                   "item": "https://www.betonjayareadymix.com/p/jasa-perbaikan-atap-bocor.html"
               },
               {
                   "@type": "ListItem",
                   "position": 6,
                   "name": urlMappingJasaPerbaikanAtapBocor[cleanUrlJasaKonsBongkarBangunanPost],
                   "item": cleanUrlJasaKonsBongkarBangunanPost
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }

	//JasaPerbaikanDindingRetakPost
 if (urlMappingJasaPerbaikanDindingRetak[cleanUrlJasaKonsBongkarBangunanPost]) {
        restoreCondition('JasaKonsBongkarBangunanPost');
	
        restoreCondition('JasaPerawatanPerbaikanBangunanPost');
        restoreCondition('JasaPerbaikanDindingRetakPost');
     
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
        removeCondition('JasaKonsPondasiTanahPost');
        removeCondition('JasaKonsPembatasPost');
        removeCondition('JasaKonsPerbaikanPost');
        removeCondition('JasaKonsCuttingBetonPost');
        removeCondition('JasaKonsPengeboranPost');
        removeCondition('JasaKonsFinishingPost');
        removeCondition('JasaKonsStrukturPost');
        removeCondition('JasaKonsAlatKonstruksiPost');
        removeCondition('JasaKonsJalanPerkerasanPost');

	 	//hapus JasaBuangPuingPost
	removeCondition('JasaBuangPuingPost');
	 
	//hapus SEMUA elemen SUB jasa JasaPerawatanPerbaikanBangunanPost SELAIN JasaPerbaikanAtapBocorPost
        //removeCondition('JasaPerawatanPerbaikanBangunanPost');
	    removeCondition('JasaPerbaikanAtapDrainaseBangunanPost');
	     //removeCondition('JasaPerbaikanElemenArsitekturalPost');
	    removeCondition('JasaPerbaikanKebocoranWaterproofingPost');
        //removeCondition('JasaPerbaikanAtapBocorPost');
        removeCondition('JasaPerbaikanAtapBocorPost');
        removeCondition('JasaPerbaikanRembesanAirPost');
        removeCondition('JasaPerbaikanPlafonRusakPost');
        removeCondition('JasaPerbaikanDakBetonBocorPost');
        removeCondition('JasaPerbaikanTalangBocorPost');
	
        //hapus elemen SUB jasa JasaBongkarBangunanPost semua 
        removeCondition('JasaBongkarBangunanPost');
	
        removeCondition('JasaBongkarRumahPost');
        removeCondition('JasaBongkarTowerPost');
        removeCondition('JasaBongkarBetonPost');
        removeCondition('JasaBongkarAtapPost');
        removeCondition('JasaBongkarKeramikPost');
        removeCondition('JasaBongkarTembokPost');
        removeCondition('JasaBongkarDindingPost');
        removeCondition('JasaBongkarPlafonPost');
        removeCondition('JasaBongkarPartisiPost');
        removeCondition('JasaBongkarPagarPost');
        removeCondition('JasaBongkarLantaiPost');

	
       
        JasaKonstruksiBongkarBangunanPostLink.style.visibility = 'visible';
	//TAMPILKAN JasaBongkarBangunanPost
      JasaPerawatanPerbaikanBangunanPostLink.style.visibility = 'visible';
	//TAMPILKAN JasaBongkarTowerPost
	JasaPerbaikanDindingRetakPostLink.style.visibility = 'visible';
	
	pageNameJasaKonsBongkarBangunanPost.textContent = urlMappingJasaPerbaikanDindingRetak[cleanUrlJasaKonsBongkarBangunanPost];
    }
      // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaPerbaikanDindingRetak[cleanUrlJasaKonsBongkarBangunanPost]) {
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
                   "name": "Jasa Perawatan & Perbaikan Bangunan",
                   "item": "https://www.betonjayareadymix.com/p/jasa-perawatan-perbaikan-bangunan.html"
               },
			   {
                   "@type": "ListItem",
                   "position": 4,
                   "name": "Jasa Perbaikan Elemen Arsitektural Bangunan",
                   "item": "https://www.betonjayareadymix.com/p/jasa-perbaikan-elemen-arsitektural.html"
               },
               {
                   "@type": "ListItem",
                   "position": 5,
                   "name": "Jasa Perbaikan Dinding Retak",
                   "item": "https://www.betonjayareadymix.com/p/jasa-perbaikan-dinding-retak.html"
               },
               {
                   "@type": "ListItem",
                   "position": 6,
                   "name": urlMappingJasaPerbaikanDindingRetak[cleanUrlJasaKonsBongkarBangunanPost],
                   "item": cleanUrlJasaKonsBongkarBangunanPost
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }

 //JasaPerbaikanRembesanAirPost
 if (urlMappingJasaPerbaikanRembesanAir[cleanUrlJasaKonsBongkarBangunanPost]) {
        restoreCondition('JasaKonsBongkarBangunanPost');
	
        restoreCondition('JasaPerawatanPerbaikanBangunanPost');
        restoreCondition('JasaPerbaikanRembesanAirPost');
     
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
        removeCondition('JasaKonsPondasiTanahPost');
        removeCondition('JasaKonsPembatasPost');
        removeCondition('JasaKonsPerbaikanPost');
        removeCondition('JasaKonsCuttingBetonPost');
        removeCondition('JasaKonsPengeboranPost');
        removeCondition('JasaKonsFinishingPost');
        removeCondition('JasaKonsStrukturPost');
        removeCondition('JasaKonsAlatKonstruksiPost');
        removeCondition('JasaKonsJalanPerkerasanPost');

	 	//hapus JasaBuangPuingPost
	removeCondition('JasaBuangPuingPost');
	 
	//hapus SEMUA elemen SUB jasa JasaPerawatanPerbaikanBangunanPost SELAIN JasaPerbaikanAtapBocorPost
        //removeCondition('JasaPerawatanPerbaikanBangunanPost');
	    	    removeCondition('JasaPerbaikanAtapDrainaseBangunanPost');
	     removeCondition('JasaPerbaikanElemenArsitekturalPost');
	    //removeCondition('JasaPerbaikanKebocoranWaterproofingPost');
	 
        //removeCondition('JasaPerbaikanAtapBocorPost');
        removeCondition('JasaPerbaikanAtapBocorPost');
        removeCondition('JasaPerbaikanDindingRetakPost');
        removeCondition('JasaPerbaikanPlafonRusakPost');
        removeCondition('JasaPerbaikanDakBetonBocorPost');
        removeCondition('JasaPerbaikanTalangBocorPost');
	
        //hapus elemen SUB jasa JasaBongkarBangunanPost semua 
        removeCondition('JasaBongkarBangunanPost');
	
        removeCondition('JasaBongkarRumahPost');
        removeCondition('JasaBongkarTowerPost');
        removeCondition('JasaBongkarBetonPost');
        removeCondition('JasaBongkarAtapPost');
        removeCondition('JasaBongkarKeramikPost');
        removeCondition('JasaBongkarTembokPost');
        removeCondition('JasaBongkarDindingPost');
        removeCondition('JasaBongkarPlafonPost');
        removeCondition('JasaBongkarPartisiPost');
        removeCondition('JasaBongkarPagarPost');
        removeCondition('JasaBongkarLantaiPost');

	
       
        JasaKonstruksiBongkarBangunanPostLink.style.visibility = 'visible';
	//TAMPILKAN JasaBongkarBangunanPost
       JasaPerawatanPerbaikanBangunanPostLink.style.visibility = 'visible';
	//TAMPILKAN JasaBongkarTowerPost
	JasaPerbaikanRembesanAirPostLink.style.visibility = 'visible';
	
	pageNameJasaKonsBongkarBangunanPost.textContent = urlMappingJasaPerbaikanRembesanAir[cleanUrlJasaKonsBongkarBangunanPost];
    }
      // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaPerbaikanRembesanAir[cleanUrlJasaKonsBongkarBangunanPost]) {
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
                   "name": "Jasa Perawatan & Perbaikan Bangunan",
                   "item": "https://www.betonjayareadymix.com/p/jasa-perawatan-perbaikan-bangunan.html"
               },
			   {
                   "@type": "ListItem",
                   "position": 4,
                   "name": "Jasa Perbaikan Kebocoran & Waterproofing",
                   "item": "https://www.betonjayareadymix.com/p/jasa-perbaikan-kebocoran-waterproofing.html"
               },
               {
                   "@type": "ListItem",
                   "position": 5,
                   "name": "Jasa Perbaikan Rembesan Air",
                   "item": "https://www.betonjayareadymix.com/p/jasa-perbaikan-rembesan-air.html"
               },
               {
                   "@type": "ListItem",
                   "position": 6,
                   "name": urlMappingJasaPerbaikanRembesanAir[cleanUrlJasaKonsBongkarBangunanPost],
                   "item": cleanUrlJasaKonsBongkarBangunanPost
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }

	 //JasaPerbaikanRembesanAirPost
 if (urlMappingJasaPerbaikanPlafonRusak[cleanUrlJasaKonsBongkarBangunanPost]) {
        restoreCondition('JasaKonsBongkarBangunanPost');
	
        restoreCondition('JasaPerawatanPerbaikanBangunanPost');
        restoreCondition('JasaPerbaikanPlafonRusakPost');
     
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
        removeCondition('JasaKonsPondasiTanahPost');
        removeCondition('JasaKonsPembatasPost');
        removeCondition('JasaKonsPerbaikanPost');
        removeCondition('JasaKonsCuttingBetonPost');
        removeCondition('JasaKonsPengeboranPost');
        removeCondition('JasaKonsFinishingPost');
        removeCondition('JasaKonsStrukturPost');
        removeCondition('JasaKonsAlatKonstruksiPost');
        removeCondition('JasaKonsJalanPerkerasanPost');

	 	//hapus JasaBuangPuingPost
	removeCondition('JasaBuangPuingPost');
	 
	//hapus SEMUA elemen SUB jasa JasaPerawatanPerbaikanBangunanPost SELAIN JasaPerbaikanAtapBocorPost
        //removeCondition('JasaPerawatanPerbaikanBangunanPost');
	    removeCondition('JasaPerbaikanAtapDrainaseBangunanPost');
	      //removeCondition('JasaPerbaikanElemenArsitekturalPost');
	   removeCondition('JasaPerbaikanKebocoranWaterproofingPost');
        //removeCondition('JasaPerbaikanAtapBocorPost');
        removeCondition('JasaPerbaikanAtapBocorPost');
        removeCondition('JasaPerbaikanDindingRetakPost');
        removeCondition('JasaPerbaikanRembesanAirPost');
        removeCondition('JasaPerbaikanDakBetonBocorPost');
        removeCondition('JasaPerbaikanTalangBocorPost');
	
        //hapus elemen SUB jasa JasaBongkarBangunanPost semua 
        removeCondition('JasaBongkarBangunanPost');
	
        removeCondition('JasaBongkarRumahPost');
        removeCondition('JasaBongkarTowerPost');
        removeCondition('JasaBongkarBetonPost');
        removeCondition('JasaBongkarAtapPost');
        removeCondition('JasaBongkarKeramikPost');
        removeCondition('JasaBongkarTembokPost');
        removeCondition('JasaBongkarDindingPost');
        removeCondition('JasaBongkarPlafonPost');
        removeCondition('JasaBongkarPartisiPost');
        removeCondition('JasaBongkarPagarPost');
        removeCondition('JasaBongkarLantaiPost');

	
       
        JasaKonstruksiBongkarBangunanPostLink.style.visibility = 'visible';
	//TAMPILKAN JasaBongkarBangunanPost
     JasaPerawatanPerbaikanBangunanPostLink.style.visibility = 'visible';
	//TAMPILKAN JasaPerbaikanPlafonRusakPost
	JasaPerbaikanPlafonRusakPostLink.style.visibility = 'visible';
	
	pageNameJasaKonsBongkarBangunanPost.textContent = urlMappingJasaPerbaikanPlafonRusak[cleanUrlJasaKonsBongkarBangunanPost];
    }
      // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaPerbaikanPlafonRusak[cleanUrlJasaKonsBongkarBangunanPost]) {
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
                   "name": "Jasa Perawatan & Perbaikan Bangunan",
                   "item": "https://www.betonjayareadymix.com/p/jasa-perawatan-perbaikan-bangunan.html"
               },
			  {
                   "@type": "ListItem",
                   "position": 4,
                   "name": "Jasa Perbaikan Elemen Arsitektural",
                   "item": "https://www.betonjayareadymix.com/p/jasa-perbaikan-elemen-arsitektural.html"
               },
               {
                   "@type": "ListItem",
                   "position": 5,
                   "name": "Jasa Perbaikan Plafon Rusak",
                   "item": "https://www.betonjayareadymix.com/p/jasa-perbaikan-plafon-rusak.html"
               },
               {
                   "@type": "ListItem",
                   "position": 6,
                   "name": urlMappingJasaPerbaikanPlafonRusak[cleanUrlJasaKonsBongkarBangunanPost],
                   "item": cleanUrlJasaKonsBongkarBangunanPost
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }

	 //JasaPerbaikanDakBetonBocor
 if (urlMappingJasaPerbaikanDakBetonBocor[cleanUrlJasaKonsBongkarBangunanPost]) {
        restoreCondition('JasaKonsBongkarBangunanPost');
	
        restoreCondition('JasaPerawatanPerbaikanBangunanPost');
        restoreCondition('JasaPerbaikanDakBetonBocorPost');
     
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
        removeCondition('JasaKonsPondasiTanahPost');
        removeCondition('JasaKonsPembatasPost');
        removeCondition('JasaKonsPerbaikanPost');
        removeCondition('JasaKonsCuttingBetonPost');
        removeCondition('JasaKonsPengeboranPost');
        removeCondition('JasaKonsFinishingPost');
        removeCondition('JasaKonsStrukturPost');
        removeCondition('JasaKonsAlatKonstruksiPost');
        removeCondition('JasaKonsJalanPerkerasanPost');

	 	//hapus JasaBuangPuingPost
	removeCondition('JasaBuangPuingPost');
	 
	//hapus SEMUA elemen SUB jasa JasaPerawatanPerbaikanBangunanPost SELAIN JasaPerbaikanAtapBocorPost
        //removeCondition('JasaPerawatanPerbaikanBangunanPost');
	   	    removeCondition('JasaPerbaikanAtapDrainaseBangunanPost');
	      removeCondition('JasaPerbaikanElemenArsitekturalPost');
	   //removeCondition('JasaPerbaikanKebocoranWaterproofingPost');
        //removeCondition('JasaPerbaikanAtapBocorPost');
        removeCondition('JasaPerbaikanAtapBocorPost');
        removeCondition('JasaPerbaikanDindingRetakPost');
        removeCondition('JasaPerbaikanRembesanAirPost');
        removeCondition('JasaPerbaikanPlafonRusakPost');
        removeCondition('JasaPerbaikanTalangBocorPost');
	
        //hapus elemen SUB jasa JasaBongkarBangunanPost semua 
        removeCondition('JasaBongkarBangunanPost');
	
        removeCondition('JasaBongkarRumahPost');
        removeCondition('JasaBongkarTowerPost');
        removeCondition('JasaBongkarBetonPost');
        removeCondition('JasaBongkarAtapPost');
        removeCondition('JasaBongkarKeramikPost');
        removeCondition('JasaBongkarTembokPost');
        removeCondition('JasaBongkarDindingPost');
        removeCondition('JasaBongkarPlafonPost');
        removeCondition('JasaBongkarPartisiPost');
        removeCondition('JasaBongkarPagarPost');
        removeCondition('JasaBongkarLantaiPost');
  
        JasaKonstruksiBongkarBangunanPostLink.style.visibility = 'visible';
	//TAMPILKAN JasaBongkarBangunanPost
    JasaPerawatanPerbaikanBangunanPostLink.style.visibility = 'visible';
	//TAMPILKAN JasaPerbaikanPlafonRusakPost
	JasaPerbaikanDakBetonBocorPostLink.style.visibility = 'visible';
	
	pageNameJasaKonsBongkarBangunanPost.textContent = urlMappingJasaPerbaikanDakBetonBocor[cleanUrlJasaKonsBongkarBangunanPost];
    }
      // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaPerbaikanDakBetonBocor[cleanUrlJasaKonsBongkarBangunanPost]) {
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
                   "name": "Jasa Perawatan & Perbaikan Bangunan",
                   "item": "https://www.betonjayareadymix.com/p/jasa-perawatan-perbaikan-bangunan.html"
               },
			                  {
                   "@type": "ListItem",
                   "position": 4,
                   "name": "Jasa Perbaikan Kebocoran Waterproofing",
                   "item": "https://www.betonjayareadymix.com/p/jasa-perbaikan-kebocoran-waterproofing.html"
               },
               {
                   "@type": "ListItem",
                   "position": 5,
                   "name": "Jasa Perbaikan Dak Beton Bocor",
                   "item": "https://www.betonjayareadymix.com/p/jasa-perbaikan-dak-beton-bocor.html"
               },
               {
                   "@type": "ListItem",
                   "position": 6,
                   "name": urlMappingJasaPerbaikanDakBetonBocor[cleanUrlJasaKonsBongkarBangunanPost],
                   "item": cleanUrlJasaKonsBongkarBangunanPost
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }

	 //JasaPerbaikanTalangBocorPost
 if (urlMappingJasaPerbaikanTalangBocor[cleanUrlJasaKonsBongkarBangunanPost]) {
        restoreCondition('JasaKonsBongkarBangunanPost');
	
        restoreCondition('JasaPerawatanPerbaikanBangunanPost');
        restoreCondition('JasaPerbaikanTalangBocorPost');
     
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
        removeCondition('JasaKonsPondasiTanahPost');
        removeCondition('JasaKonsPembatasPost');
        removeCondition('JasaKonsPerbaikanPost');
        removeCondition('JasaKonsCuttingBetonPost');
        removeCondition('JasaKonsPengeboranPost');
        removeCondition('JasaKonsFinishingPost');
        removeCondition('JasaKonsStrukturPost');
        removeCondition('JasaKonsAlatKonstruksiPost');
        removeCondition('JasaKonsJalanPerkerasanPost');

	 	//hapus JasaBuangPuingPost
	removeCondition('JasaBuangPuingPost');
	 
	//hapus SEMUA elemen SUB jasa JasaPerawatanPerbaikanBangunanPost SELAIN JasaPerbaikanAtapBocorPost
        //removeCondition('JasaPerawatanPerbaikanBangunanPost');
	  	   	    removeCondition('JasaPerbaikanAtapDrainaseBangunanPost');
	      removeCondition('JasaPerbaikanElemenArsitekturalPost');
	   //removeCondition('JasaPerbaikanKebocoranWaterproofingPost');
	 
        //removeCondition('JasaPerbaikanAtapBocorPost');
        removeCondition('JasaPerbaikanAtapBocorPost');
        removeCondition('JasaPerbaikanDindingRetakPost');
        removeCondition('JasaPerbaikanRembesanAirPost');
        removeCondition('JasaPerbaikanPlafonRusakPost');
        removeCondition('JasaPerbaikanDakBetonBocorPost');
	
        //hapus elemen SUB jasa JasaBongkarBangunanPost semua 
        removeCondition('JasaBongkarBangunanPost');
	
        removeCondition('JasaBongkarRumahPost');
        removeCondition('JasaBongkarTowerPost');
        removeCondition('JasaBongkarBetonPost');
        removeCondition('JasaBongkarAtapPost');
        removeCondition('JasaBongkarKeramikPost');
        removeCondition('JasaBongkarTembokPost');
        removeCondition('JasaBongkarDindingPost');
        removeCondition('JasaBongkarPlafonPost');
        removeCondition('JasaBongkarPartisiPost');
        removeCondition('JasaBongkarPagarPost');
        removeCondition('JasaBongkarLantaiPost');

	
       
        JasaKonstruksiBongkarBangunanPostLink.style.visibility = 'visible';
	//TAMPILKAN JasaBongkarBangunanPost
     JasaPerawatanPerbaikanBangunanPostLink.style.visibility = 'visible';
	//TAMPILKAN JasaPerbaikanTalangBocorPost
	JasaPerbaikanTalangBocorPostLink.style.visibility = 'visible';
	
	pageNameJasaKonsBongkarBangunanPost.textContent = urlMappingJasaPerbaikanTalangBocor[cleanUrlJasaKonsBongkarBangunanPost];
    }
      // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaPerbaikanTalangBocor[cleanUrlJasaKonsBongkarBangunanPost]) {
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
                   "name": "Jasa Perawatan & Perbaikan Bangunan",
                   "item": "https://www.betonjayareadymix.com/p/jasa-perawatan-perbaikan-bangunan.html"
               },
               {
                   "@type": "ListItem",
                   "position": 4,
                   "name": "Jasa Perbaikan Kebocoran Waterproofing",
                   "item": "https://www.betonjayareadymix.com/p/jasa-perbaikan-kebocoran-waterproofing.html"
               },
			{
                   "@type": "ListItem",
                   "position": 5,
                   "name": "Jasa Perbaikan Talang Bocor",
                   "item": "https://www.betonjayareadymix.com/p/jasa-perbaikan-talang-bocor.html"
               },
               {
                   "@type": "ListItem",
                   "position": 6,
                   "name": urlMappingJasaPerbaikanTalangBocor[cleanUrlJasaKonsBongkarBangunanPost],
                   "item": cleanUrlJasaKonsBongkarBangunanPost
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }

   });
