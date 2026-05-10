// ============================================================
// 🔍 ENTITY TYPE: JASA (Bongkar Bangunan & Perbaikan Bangunan)
// ATURAN: JASA TIDAK BOLEH MENGGUNAKAN MONEY_MASTER
// ✅ Gunakan: MONEY_PAGE (Komersial 60% + Transaksional 40%)
// ❌ Dilarang: MONEY_MASTER
// ============================================================

// ============================================================
// 📁 LEVEL 2 - SUB2 (Turunan dari PILLAR Jasa Konstruksi)
// ============================================================
/*
const urlMappingJasaBongkarBangunanFromPillarSub2 = {
  // [SUB2] - Jasa Bongkar Bangunan (KATEGORI UTAMA)
  "https://www.betonjayareadymix.com/p/jasa-bongkar-bangunan.html": "Jasa Bongkar Bangunan",  // TYPE: SUB2
};
*/
// ============================================================
// 📁 JASA BONGKAR BANGUNAN - MONEY PAGE (BUKAN MONEY MASTER)
// 🧠 ENTITY: JASA → TYPE: MONEY_PAGE
// Parent: Jasa Bongkar Bangunan (SUB2)
// Breadcrumb: Home > Jasa Konstruksi > Jasa Bongkar Bangunan > Harga Jasa Bongkar Bangunan (4 level)
// ============================================================

const urlMappingJasaBongkarBangunanFromSub2MoneyPage = {
  // ============================================================
  // [MONEY_PAGE] - HARGA JASA BONGKAR BANGUNAN
  // 🧠 TYPE: MONEY_PAGE (JASA, bukan MONEY_MASTER)
  // ============================================================
  "https://www.betonjayareadymix.com/2018/09/harga-jasa-bongkar-bangunan.html": "Harga Jasa Bongkar Bangunan",  // TYPE: MONEY_PAGE
};

// ============================================================
// 📁 JASA BONGKAR TOWER - MONEY PAGE & CHILD
// ============================================================

const urlMappingJasaBongkarTowerFromSub2MoneyPage = {
  // ============================================================
  // [MONEY_PAGE] - HARGA JASA BONGKAR TOWER
  // 🧠 TYPE: MONEY_PAGE (JASA, bukan MONEY_MASTER)
  // ============================================================
  "https://www.betonjayareadymix.com/2018/09/harga-jasa-bongkar-tower.html": "Harga Jasa Bongkar Tower",  // TYPE: MONEY_PAGE
  
  // ============================================================
  // [MONEY_CHILD] - JASA BONGKAR TOWER TRIANGLE
  // ============================================================
  "https://www.betonjayareadymix.com/2018/09/jasa-bongkar-tower-triangle.html": "Jasa Bongkar Tower Triangle",  // TYPE: MONEY_CHILD
  
  // ============================================================
  // 🟡 SARAN ITEM TAMBAHAN (BELUM AKTIF - PERLU DIBUAT KONTEN)
  // ============================================================
  // "https://www.betonjayareadymix.com/2019/08/harga-bongkar-tower-bts.html": "Harga Bongkar Tower BTS",  // TYPE: MONEY_CHILD
  // "https://www.betonjayareadymix.com/2019/08/jasa-bongkar-tower-jakarta.html": "Jasa Bongkar Tower Jakarta",  // TYPE: MONEY_CHILD
};

// ============================================================
// 📁 JASA BONGKAR RUMAH - SARAN ITEM (BELUM AKTIF)
// ============================================================

const urlMappingJasaBongkarRumahFromSub2MoneyPage = {
  // 🟡 SARAN ITEM (BELUM AKTIF - PERLU DIBUAT KONTEN)
  // "https://www.betonjayareadymix.com/p/jasa-bongkar-rumah.html": "Jasa Bongkar Rumah",  // TYPE: SUB2
  // "https://www.betonjayareadymix.com/2019/08/harga-bongkar-rumah-tinggal.html": "Harga Bongkar Rumah Tinggal",  // TYPE: MONEY_PAGE
  // "https://www.betonjayareadymix.com/2019/08/jasa-bongkar-rumah-2-lantai.html": "Jasa Bongkar Rumah 2 Lantai",  // TYPE: MONEY_PAGE
  // "https://www.betonjayareadymix.com/2019/08/jasa-bongkar-rumah-permanen.html": "Jasa Bongkar Rumah Permanen",  // TYPE: MONEY_PAGE
  // "https://www.betonjayareadymix.com/2019/08/jasa-bongkar-rumah-semi-permanen.html": "Jasa Bongkar Rumah Semi Permanen",  // TYPE: MONEY_PAGE
};

// ============================================================
// 📁 JASA BONGKAR BETON - MONEY PAGE (BUKAN MONEY MASTER)
// ============================================================

const urlMappingJasaBongkarBetonFromSub2MoneyPage = {
  // ============================================================
  // [MONEY_PAGE] - HARGA BONGKAR BETON
  // 🧠 TYPE: MONEY_PAGE (JASA, bukan MONEY_MASTER)
  // ============================================================
  "https://www.betonjayareadymix.com/2019/06/harga-bongkar-beton.html": "Harga Bongkar Beton",  // TYPE: MONEY_PAGE
  
  // ============================================================
  // [REDIRECT] - DUPLIKASI (301 redirect ke harga-bongkar-beton.html)
  // ============================================================
  "https://www.betonjayareadymix.com/2019/06/harga-bongkar-beton-per-m3.html": "Harga Bongkar Beton Per m3",  // TYPE: REDIRECT
  "https://www.betonjayareadymix.com/2019/06/harga-bobok-beton-per-m2.html": "Harga Bobok Beton per m2",  // TYPE: REDIRECT
  "https://www.betonjayareadymix.com/2018/06/harga-jasa-bobok-beton.html": "Harga Jasa Bobok Beton",  // TYPE: REDIRECT
};

// ============================================================
// JASA BONGKAR ATAP - MONEY PAGE
// 🧠 ENTITY: JASA → TYPE: MONEY_PAGE (bukan MONEY_MASTER)
// Parent: Jasa Bongkar Bangunan (SUB2)
// Intent: Komersial (60%) + Transaksional (40%)
// CTA: Konsultasi, Survey, Hubungi, Estimasi
// Breadcrumb: Home > Jasa Konstruksi > Jasa Bongkar Bangunan > Harga Jasa Bongkar Atap (4 level)
// ============================================================

const urlMappingJasaBongkarAtapFromSub2MoneyPage = {
  // ============================================================
  // [MONEY_PAGE] - HARGA BONGKAR ATAP PER METER
  // ============================================================
  "https://www.betonjayareadymix.com/2019/06/harga-bongkar-atap-per-meter.html": "Harga Bongkar Atap Per Meter",  // TYPE: MONEY_PAGE
  
  // ============================================================
  // [MONEY_CHILD] - BONGKAR ATAP PER LOKASI (JIKA ADA)
  // ============================================================
  // "https://www.betonjayareadymix.com/2019/06/jasa-bongkar-atap-jakarta.html": "Jasa Bongkar Atap Jakarta",  // TYPE: MONEY_CHILD
  // "https://www.betonjayareadymix.com/2019/06/jasa-bongkar-atap-bekasi.html": "Jasa Bongkar Atap Bekasi",  // TYPE: MONEY_CHILD
  // "https://www.betonjayareadymix.com/2019/06/jasa-bongkar-atap-bogor.html": "Jasa Bongkar Atap Bogor",  // TYPE: MONEY_CHILD
  // "https://www.betonjayareadymix.com/2019/06/jasa-bongkar-atap-depok.html": "Jasa Bongkar Atap Depok",  // TYPE: MONEY_CHILD
  // "https://www.betonjayareadymix.com/2019/06/jasa-bongkar-atap-tangerang.html": "Jasa Bongkar Atap Tangerang",  // TYPE: MONEY_CHILD
};

// ============================================================
// JASA BONGKAR KERAMIK - MONEY PAGE
// 🧠 ENTITY: JASA → TYPE: MONEY_PAGE (bukan MONEY_MASTER)
// Parent: Jasa Bongkar Lantai (MONEY_PAGE) atau langsung di bawah Jasa Bongkar Bangunan (SUB2)
// Intent: Komersial (60%) + Transaksional (40%)
// CTA: Konsultasi, Survey, Hubungi, Estimasi
// Breadcrumb: Home > Jasa Konstruksi > Jasa Bongkar Bangunan > Harga Bongkar Keramik (4 level)
// ============================================================

const urlMappingJasaBongkarKeramikFromSub2MoneyPage = {
  // ============================================================
  // [MONEY_PAGE] - HARGA JASA BONGKAR KERAMIK (MASTER)
  // ============================================================
  "https://www.betonjayareadymix.com/2019/06/harga-jasa-bongkar-keramik.html": "Harga Jasa Bongkar Keramik",  // TYPE: MONEY_PAGE
  
  // ============================================================
  // [MONEY_PAGE] - HARGA BONGKAR KERAMIK PER M2
  // ============================================================
  "https://www.betonjayareadymix.com/2019/06/harga-bongkar-keramik-per-m2.html": "Harga Bongkar Keramik Per M2",  // TYPE: MONEY_PAGE
  
  // ============================================================
  // [MONEY_CHILD] - BONGKAR KERAMIK PER LOKASI
  // ============================================================
  "https://www.betonjayareadymix.com/2019/06/jasa-bongkar-keramik-jakarta.html": "Jasa Bongkar Keramik Jakarta",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/06/jasa-bongkar-keramik-bekasi.html": "Jasa Bongkar Keramik Bekasi",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/06/jasa-bongkar-keramik-tangerang.html": "Jasa Bongkar Keramik Tangerang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/06/jasa-bongkar-keramik-depok.html": "Jasa Bongkar Keramik Depok",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/06/jasa-bongkar-keramik-bogor.html": "Jasa Bongkar Keramik Bogor",  // TYPE: MONEY_CHILD
  
  // ============================================================
  // [MONEY_CHILD] - BONGKAR KERAMIK LANTAI vs DINDING
  // ============================================================
  "https://www.betonjayareadymix.com/2019/06/harga-bongkar-keramik-lantai.html": "Harga Bongkar Keramik Lantai",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/06/harga-bongkar-keramik-dinding.html": "Harga Bongkar Keramik Dinding",  // TYPE: MONEY_CHILD
};

// ============================================================
// 📁 JASA BONGKAR TEMBOK - MONEY PAGE & CHILD
// ============================================================

const urlMappingJasaBongkarTembokFromSub2MoneyPage = {
  // ============================================================
  // [MONEY_PAGE] - JASA BOBOK TEMBOK PER METER
  // 🧠 TYPE: MONEY_PAGE (JASA, bukan MONEY_MASTER)
  // ============================================================
  "https://www.betonjayareadymix.com/2019/06/jasa-bobok-tembok-per-meter.html": "Jasa Bobok Tembok Per Meter",  // TYPE: MONEY_PAGE
  
  // ============================================================
  // [MONEY_CHILD] - VARIASI HARGA & LAYANAN
  // ============================================================
  "https://www.betonjayareadymix.com/2019/06/harga-jasa-bobok-tembok.html": "Harga Jasa Bobok Tembok",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/06/jasa-tukang-bobok-tembok.html": "Jasa Tukang Bobok Tembok",  // TYPE: MONEY_CHILD
};

// ============================================================
// 📁 JASA BONGKAR DINDING - MONEY PAGE & CHILD
// ============================================================

const urlMappingJasaBongkarDindingFromSub2MoneyPage = {
  // ============================================================
  // [MONEY_PAGE] - HARGA JASA BONGKAR DINDING
  // ============================================================
  "https://www.betonjayareadymix.com/2019/06/harga-jasa-bongkar-dinding.html": "Harga Jasa Bongkar Dinding",  // TYPE: MONEY_PAGE
  
  // ============================================================
  // [MONEY_CHILD] - BONGKAR DINDING BATA PER M2
  // ============================================================
  "https://www.betonjayareadymix.com/2019/06/harga-bongkar-dinding-bata-per-m2.html": "Harga Jasa Bongkar Dinding Bata Per M2",  // TYPE: MONEY_CHILD
};

// ============================================================
// 📁 JASA BONGKAR LANTAI - MONEY PAGE & CHILD
// ============================================================

const urlMappingJasaBongkarLantaiFromSub2MoneyPage = {
  // ============================================================
  // [MONEY_PAGE] - HARGA JASA BONGKAR LANTAI (UMUM)
  // ============================================================
  "https://www.betonjayareadymix.com/2019/06/harga-jasa-bongkar-lantai.html": "Harga Jasa Bongkar Lantai",  // TYPE: MONEY_PAGE
  
  // ============================================================
  // [MONEY_PAGE] - HARGA JASA BOBOK LANTAI BETON
  // ============================================================
  "https://www.betonjayareadymix.com/2019/06/harga-jasa-bobok-lantai-beton.html": "Harga Jasa Bobok Lantai Beton",  // TYPE: MONEY_PAGE
  
  // ============================================================
  // [MONEY_CHILD] - SPESIFIK LANTAI KERAMIK
  // ============================================================
  "https://www.betonjayareadymix.com/2019/06/biaya-bongkar-lantai-keramik.html": "Biaya Bongkar Lantai Keramik",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/06/harga-bongkar-lantai-keramik.html": "Harga Bongkar Lantai Keramik",  // TYPE: MONEY_CHILD
  
  // ============================================================
  // [REDIRECT] - DUPLIKASI (301 redirect)
  // ============================================================
  "https://www.betonjayareadymix.com/2019/06/jasa-bobok-lantai-beton.html": "Jasa Bobok Lantai Beton",  // TYPE: REDIRECT
  "https://www.betonjayareadymix.com/2019/06/jasa-bobok-lantai-lama.html": "Jasa Bobok Lantai Lama",  // TYPE: REDIRECT
  "https://www.betonjayareadymix.com/2019/06/harga-borongan-bongkar-keramik-lantai.html": "Harga Borongan Bongkar Keramik Lantai",  // TYPE: REDIRECT
  "https://www.betonjayareadymix.com/2019/06/harga-bobok-lantai-keramik.html": "Harga Bobok Lantai Keramik",  // TYPE: REDIRECT
  "https://www.betonjayareadymix.com/2019/06/harga-bobok-lantai.html": "Harga Bobok Lantai",  // TYPE: REDIRECT
  "https://www.betonjayareadymix.com/2019/06/harga-bobok-lantai-beton-per-m2.html": "Harga Bobok Lantai Beton per M2",  // TYPE: REDIRECT
  "https://www.betonjayareadymix.com/2019/06/harga-borongan-bobok-lantai-beton.html": "Harga Borongan Bobok Lantai Beton",  // TYPE: REDIRECT
  "https://www.betonjayareadymix.com/2018/06/harga-upah-bobok-lantai-beton.html": "Harga Upah Bobok Lantai Beton",  // TYPE: REDIRECT
  "https://www.betonjayareadymix.com/2019/06/harga-bongkar-lantai-beton.html": "Harga Bongkar Lantai Beton",  // TYPE: REDIRECT
};

// ============================================================
// JASA BONGKAR PLAFON - MONEY PAGE
// 🧠 ENTITY: JASA → TYPE: MONEY_PAGE (bukan MONEY_MASTER)
// Parent: Jasa Bongkar Bangunan (SUB2)
// Intent: Komersial (60%) + Transaksional (40%)
// CTA: Konsultasi, Survey, Hubungi, Estimasi
// Breadcrumb: Home > Jasa Konstruksi > Jasa Bongkar Bangunan > Harga Jasa Bongkar Plafon (4 level)
// ============================================================

const urlMappingJasaBongkarPlafonFromSub2MoneyPage = {
  // ============================================================
  // [MONEY_PAGE] - HARGA BONGKAR PLAFON PER M2
  // ============================================================
  "https://www.betonjayareadymix.com/2019/06/harga-bongkar-plafon-per-m2.html": "Harga Bongkar Plafon Per M2",  // TYPE: MONEY_PAGE
  
  // ============================================================
  // [MONEY_CHILD] - BONGKAR PLAFON PER JENIS MATERIAL
  // ============================================================
  "https://www.betonjayareadymix.com/2019/06/jasa-bongkar-plafon-gypsum.html": "Jasa Bongkar Plafon Gypsum",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/06/jasa-bongkar-plafon-pvc.html": "Jasa Bongkar Plafon PVC",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/06/jasa-bongkar-plafon-grc.html": "Jasa Bongkar Plafon GRC",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/06/jasa-bongkar-plafon-kayu.html": "Jasa Bongkar Plafon Kayu",  // TYPE: MONEY_CHILD
  
  // ============================================================
  // [MONEY_CHILD] - BONGKAR PLAFON PER LOKASI
  // ============================================================
  "https://www.betonjayareadymix.com/2019/06/jasa-bongkar-plafon-jakarta.html": "Jasa Bongkar Plafon Jakarta",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/06/jasa-bongkar-plafon-bekasi.html": "Jasa Bongkar Plafon Bekasi",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/06/jasa-bongkar-plafon-tangerang.html": "Jasa Bongkar Plafon Tangerang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/06/jasa-bongkar-plafon-depok.html": "Jasa Bongkar Plafon Depok",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/06/jasa-bongkar-plafon-bogor.html": "Jasa Bongkar Plafon Bogor",  // TYPE: MONEY_CHILD
  
  // ============================================================
  // [MONEY_CHILD] - BONGKAR RANGKA PLAFON
  // ============================================================
  "https://www.betonjayareadymix.com/2019/06/harga-bongkar-rangka-plafon.html": "Harga Bongkar Rangka Plafon",  // TYPE: MONEY_CHILD
  
  // ============================================================
  // 🟡 SARAN ITEM TAMBAHAN (BELUM AKTIF - PERLU DIBUAT KONTEN)
  // ============================================================
  // "https://www.betonjayareadymix.com/2019/06/jasa-bongkar-plafon-bandung.html": "Jasa Bongkar Plafon Bandung",  // TYPE: MONEY_CHILD
  // "https://www.betonjayareadymix.com/2019/06/harga-bongkar-plafon-drop-ceiling.html": "Harga Bongkar Plafon Drop Ceiling",  // TYPE: MONEY_CHILD
};

// ============================================================
// JASA BONGKAR PARTISI - MONEY PAGE
// 🧠 ENTITY: JASA → TYPE: MONEY_PAGE (bukan MONEY_MASTER)
// Parent: Jasa Bongkar Bangunan (SUB2)
// Intent: Komersial (60%) + Transaksional (40%)
// CTA: Konsultasi, Survey, Hubungi, Estimasi
// Breadcrumb: Home > Jasa Konstruksi > Jasa Bongkar Bangunan > Harga Jasa Bongkar Partisi (4 level)
// ============================================================

const urlMappingJasaBongkarPartisiFromSub2MoneyPage = {
  // ============================================================
  // [MONEY_PAGE] - HARGA JASA BONGKAR PARTISI
  // ============================================================
  /*"https://www.betonjayareadymix.com/p/jasa-bongkar-partisi.html": "Jasa Bongkar Partisi",  // TYPE: MONEY_PAGE*/
  "https://www.betonjayareadymix.com/2019/06/harga-jasa-bongkar-partisi.html": "Harga Jasa Bongkar Partisi",  // TYPE: MONEY_PAGE
  
  // ============================================================
  // [MONEY_CHILD] - BONGKAR PARTISI PER JENIS MATERIAL
  // ============================================================
  "https://www.betonjayareadymix.com/2019/06/jasa-bongkar-partisi-gypsum.html": "Jasa Bongkar Partisi Gypsum",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/06/jasa-bongkar-partisi-kayu.html": "Jasa Bongkar Partisi Kayu",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/06/jasa-bongkar-partisi-kaca.html": "Jasa Bongkar Partisi Kaca",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/06/jasa-bongkar-partisi-hollow.html": "Jasa Bongkar Partisi Hollow",  // TYPE: MONEY_CHILD
  
  // ============================================================
  // [MONEY_CHILD] - BONGKAR PARTISI PER LOKASI
  // ============================================================
  "https://www.betonjayareadymix.com/2019/06/jasa-bongkar-partisi-jakarta.html": "Jasa Bongkar Partisi Jakarta",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/06/jasa-bongkar-partisi-bekasi.html": "Jasa Bongkar Partisi Bekasi",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/06/jasa-bongkar-partisi-tangerang.html": "Jasa Bongkar Partisi Tangerang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/06/jasa-bongkar-partisi-depok.html": "Jasa Bongkar Partisi Depok",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/06/jasa-bongkar-partisi-bogor.html": "Jasa Bongkar Partisi Bogor",  // TYPE: MONEY_CHILD
  
  // ============================================================
  // 🟡 SARAN ITEM TAMBAHAN (BELUM AKTIF - PERLU DIBUAT KONTEN)
  // ============================================================
  // "https://www.betonjayareadymix.com/2019/06/harga-bongkar-partisi-per-m2.html": "Harga Bongkar Partisi Per M2",  // TYPE: MONEY_CHILD
  // "https://www.betonjayareadymix.com/2019/06/jasa-bongkar-partisi-kantor.html": "Jasa Bongkar Partisi Kantor",  // TYPE: MONEY_CHILD
  // "https://www.betonjayareadymix.com/2019/06/jasa-bongkar-sekat-ruangan.html": "Jasa Bongkar Sekat Ruangan",  // TYPE: MONEY_CHILD
};


// ============================================================
// JASA BONGKAR PAGAR - MONEY PAGE
// 🧠 ENTITY: JASA → TYPE: MONEY_PAGE (bukan MONEY_MASTER)
// Parent: Jasa Bongkar Bangunan (SUB2)
// Intent: Komersial (60%) + Transaksional (40%)
// CTA: Konsultasi, Survey, Hubungi, Estimasi
// Breadcrumb: Home > Jasa Konstruksi > Jasa Bongkar Bangunan > Harga Jasa Bongkar Pagar (4 level)
// ============================================================

const urlMappingJasaBongkarPagarFromSub2MoneyPage = {
  // ============================================================
  // [MONEY_PAGE] - HARGA JASA BONGKAR PAGAR
  // ============================================================
  /*"https://www.betonjayareadymix.com/p/jasa-bongkar-pagar.html": "Jasa Bongkar Pagar",  // TYPE: MONEY_PAGE*/
  "https://www.betonjayareadymix.com/2019/06/harga-jasa-bongkar-pagar.html": "Harga Jasa Bongkar Pagar",  // TYPE: MONEY_PAGE
  
  // ============================================================
  // [MONEY_CHILD] - BONGKAR PAGAR PER JENIS MATERIAL
  // ============================================================
  "https://www.betonjayareadymix.com/2019/06/jasa-bongkar-pagar-besi.html": "Jasa Bongkar Pagar Besi",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/06/jasa-bongkar-pagar-beton.html": "Jasa Bongkar Pagar Beton",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/06/jasa-bongkar-pagar-kayu.html": "Jasa Bongkar Pagar Kayu",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/06/jasa-bongkar-pagar-tembok.html": "Jasa Bongkar Pagar Tembok",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/06/jasa-bongkar-pagar-bambu.html": "Jasa Bongkar Pagar Bambu",  // TYPE: MONEY_CHILD
  
  // ============================================================
  // [MONEY_CHILD] - BONGKAR PAGAR PER LOKASI
  // ============================================================
  "https://www.betonjayareadymix.com/2019/06/jasa-bongkar-pagar-jakarta.html": "Jasa Bongkar Pagar Jakarta",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/06/jasa-bongkar-pagar-bekasi.html": "Jasa Bongkar Pagar Bekasi",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/06/jasa-bongkar-pagar-tangerang.html": "Jasa Bongkar Pagar Tangerang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/06/jasa-bongkar-pagar-depok.html": "Jasa Bongkar Pagar Depok",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/06/jasa-bongkar-pagar-bogor.html": "Jasa Bongkar Pagar Bogor",  // TYPE: MONEY_CHILD
  
  // ============================================================
  // 🟡 SARAN ITEM TAMBAHAN (BELUM AKTIF - PERLU DIBUAT KONTEN)
  // ============================================================
  // "https://www.betonjayareadymix.com/2019/06/harga-bongkar-pagar-per-meter.html": "Harga Bongkar Pagar Per Meter",  // TYPE: MONEY_CHILD
  // "https://www.betonjayareadymix.com/2019/06/jasa-bongkar-pagar-rumah.html": "Jasa Bongkar Pagar Rumah",  // TYPE: MONEY_CHILD
  // "https://www.betonjayareadymix.com/2019/06/jasa-bongkar-pagar-pabrik.html": "Jasa Bongkar Pagar Pabrik",  // TYPE: MONEY_CHILD
};

// ============================================================
// 📁 JASA BUANG PUING - MONEY CHILD (PER LOKASI)
// 🧠 ENTITY: JASA → TYPE: MONEY_CHILD
// Parent: Jasa Bongkar Bangunan (SUB2)
// ============================================================

const urlMappingJasaBuangPuingFromSub2MoneyChild = {
  // ============================================================
  // [MONEY_CHILD] - JASA BUANG PUING PER LOKASI
  // ============================================================
  "https://www.betonjayareadymix.com/2019/10/jasa-buang-puing-surabaya.html": "Jasa Buang Puing Surabaya",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/10/jasa-buang-puing-karawang.html": "Jasa Buang Puing Karawang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/10/jasa-buang-puing-bekasi.html": "Jasa Buang Puing Bekasi",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/10/jasa-buang-puing-tangerang.html": "Jasa Buang Puing Tangerang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/10/jasa-buang-puing-depok.html": "Jasa Buang Puing Depok",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/10/jasa-buang-puing-bogor.html": "Jasa Buang Puing Bogor",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/10/jasa-buang-puing-jakarta.html": "Jasa Buang Puing Jakarta",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/10/jasa-buang-puing-terdekat.html": "Jasa Buang Puing Terdekat",  // TYPE: MONEY_CHILD
  
  // ============================================================
  // 🟡 SARAN ITEM TAMBAHAN (BELUM AKTIF - PERLU DIBUAT KONTEN)
  // ============================================================
  // "https://www.betonjayareadymix.com/2019/10/jasa-buang-puing-bandung.html": "Jasa Buang Puing Bandung",  // TYPE: MONEY_CHILD
  // "https://www.betonjayareadymix.com/2019/10/jasa-buang-puing-semarang.html": "Jasa Buang Puing Semarang",  // TYPE: MONEY_CHILD
  // "https://www.betonjayareadymix.com/2019/10/harga-buang-puing-per-truk.html": "Harga Buang Puing Per Truk",  // TYPE: MONEY_PAGE (jika ada konten)
};

// ============================================================
// 📁 SUB MAPPING JASA PERAWATAN & PERBAIKAN BANGUNAN
// ============================================================

// ============================================================
// 📁 LEVEL 2 - SUB2 (Turunan dari PILLAR Jasa Konstruksi)
// ============================================================

const urlMappingJasaPerawatanPerbaikanBangunanFromPillarSub2 = {
  // [SUB2] - Jasa Perawatan Perbaikan Bangunan
  "https://www.betonjayareadymix.com/p/jasa-perawatan-perbaikan-bangunan.html": "Jasa Perawatan Perbaikan Bangunan",  // TYPE: SUB2
};

// ============================================================
// 📁 JASA PERBAIKAN ATAP BOCOR - SARAN ITEM (BELUM AKTIF)
// ============================================================

const urlMappingJasaPerbaikanAtapBocorFromSub2MoneyPage = {
  // 🟡 SARAN ITEM (BELUM AKTIF - PERLU DIBUAT KONTEN)
  // "https://www.betonjayareadymix.com/2019/07/harga-perbaikan-atap-bocor.html": "Harga Perbaikan Atap Bocor",  // TYPE: MONEY_PAGE
  // "https://www.betonjayareadymix.com/2019/07/jasa-perbaikan-atap-bocor-jakarta.html": "Jasa Perbaikan Atap Bocor Jakarta",  // TYPE: MONEY_CHILD
};

// ============================================================
// 📁 JASA PERBAIKAN DINDING RETAK - SARAN ITEM (BELUM AKTIF)
// ============================================================

const urlMappingJasaPerbaikanDindingRetakFromSub2MoneyPage = {
  // 🟡 SARAN ITEM (BELUM AKTIF - PERLU DIBUAT KONTEN)
  // "https://www.betonjayareadymix.com/2019/07/harga-perbaikan-dinding-retak.html": "Harga Perbaikan Dinding Retak",  // TYPE: MONEY_PAGE
  // "https://www.betonjayareadymix.com/2019/07/jasa-perbaikan-dinding-retak-jakarta.html": "Jasa Perbaikan Dinding Retak Jakarta",  // TYPE: MONEY_CHILD
};

// ============================================================
// 📁 JASA PERBAIKAN REMBESAN AIR - SARAN ITEM (BELUM AKTIF)
// ============================================================

const urlMappingJasaPerbaikanRembesanAirFromSub2MoneyPage = {
  // 🟡 SARAN ITEM (BELUM AKTIF - PERLU DIBUAT KONTEN)
  // "https://www.betonjayareadymix.com/2019/07/jasa-perbaikan-rembesan-air.html": "Jasa Perbaikan Rembesan Air",  // TYPE: MONEY_PAGE
  // "https://www.betonjayareadymix.com/2019/07/jasa-perbaikan-rembesan-air-jakarta.html": "Jasa Perbaikan Rembesan Air Jakarta",  // TYPE: MONEY_CHILD
};

// ============================================================
// 📁 JASA PERBAIKAN PLAFON RUSAK - SARAN ITEM (BELUM AKTIF)
// ============================================================

const urlMappingJasaPerbaikanPlafonRusakFromSub2MoneyPage = {
  // 🟡 SARAN ITEM (BELUM AKTIF - PERLU DIBUAT KONTEN)
  // "https://www.betonjayareadymix.com/2019/07/harga-perbaikan-plafon-rusak.html": "Harga Perbaikan Plafon Rusak",  // TYPE: MONEY_PAGE
  // "https://www.betonjayareadymix.com/2019/07/jasa-perbaikan-plafon-rusak-jakarta.html": "Jasa Perbaikan Plafon Rusak Jakarta",  // TYPE: MONEY_CHILD
};

// ============================================================
// 📁 JASA PERBAIKAN DAK BETON BOCOR - SARAN ITEM (BELUM AKTIF)
// ============================================================

const urlMappingJasaPerbaikanDakBetonBocorFromSub2MoneyPage = {
  // 🟡 SARAN ITEM (BELUM AKTIF - PERLU DIBUAT KONTEN)
  // "https://www.betonjayareadymix.com/2019/07/jasa-perbaikan-dak-beton-bocor.html": "Jasa Perbaikan Dak Beton Bocor",  // TYPE: MONEY_PAGE
  // "https://www.betonjayareadymix.com/2019/07/jasa-perbaikan-dak-beton-bocor-jakarta.html": "Jasa Perbaikan Dak Beton Bocor Jakarta",  // TYPE: MONEY_CHILD
};

// ============================================================
// 📁 JASA PERBAIKAN TALANG BOCOR - URL 404, PERLU DIBUAT
// 🧠 STATUS: URL https://www.betonjayareadymix.com/2019/07/harga-perbaikan-talang-bocor.html → 404 NOT FOUND
// ============================================================

const urlMappingJasaPerbaikanTalangBocorFromSub2MoneyPage = {
  // ============================================================
  // 🔴 STATUS: URL 404 - KONTEN TIDAK DITEMUKAN
  // 🧠 REKOMENDASI: Buat halaman baru dengan URL berikut
  // ============================================================
  // "https://www.betonjayareadymix.com/2019/07/harga-perbaikan-talang-bocor.html": "Harga Perbaikan Talang Bocor",  // TYPE: MONEY_PAGE (PERLU DIBUAT)
  // "https://www.betonjayareadymix.com/2019/07/jasa-perbaikan-talang-bocor-jakarta.html": "Jasa Perbaikan Talang Bocor Jakarta",  // TYPE: MONEY_CHILD (PERLU DIBUAT)
  
  // 📌 CATATAN: Halaman ini sangat penting untuk SEO karena talang bocor adalah masalah umum pada bangunan.
};

// ============================================================
// 🔴 BREADCRUMB SKIP LEVEL NOTES
// ============================================================
/*
📌 BREADCRUMB SKIP LEVEL YANG DIPERBOLEHKAN:

Untuk semua MONEY_PAGE dan MONEY_CHILD di atas:
- Skip: "Jasa Bongkar Bangunan" (SUB2) jika tidak perlu
- Karena halaman tersebut hanya sebagai pengelompokan

Breadcrumb yang benar:
Home > Jasa Konstruksi > Jasa Bongkar Bangunan > Harga Jasa Bongkar Bangunan (4 level)
Home > Jasa Konstruksi > Jasa Bongkar Bangunan > Harga Jasa Bongkar Tower (4 level)
Home > Jasa Konstruksi > Jasa Bongkar Bangunan > Jasa Buang Puing Jakarta (4 level)

✅ SEMUA URL di atas sudah diperbaiki: MONEY_MASTER → MONEY_PAGE
✅ MONEY_MASTER TIDAK BOLEH digunakan untuk ENTITY JASA
✅ Aman untuk SEO - tidak melanggar aturan EEAT
*/

// ============================================================
// 📋 RINGKASAN PERUBAHAN (SEBELUM vs SESUDAH)
// ============================================================
/*
SEBELUM (SALAH)				| SESUDAH (BENAR)
MONEY_MASTER				| MONEY_PAGE (untuk JASA)
harga-jasa-bongkar-*.html	| Tetap MONEY_PAGE (bukan MASTER)

✅ ENTITY TYPE: JASA - semua halaman di atas adalah JASA
❌ MONEY_MASTER tidak diperbolehkan untuk JASA
✅ MONEY_PAGE adalah type yang benar untuk JASA (Komersial 60% + Transaksional 40%)
*/

// ============================================================
// CATATAN: ITEM DI ATAS HANYA SARAN, BELUM AKTIF
// ============================================================

/**
 * generateBreadcrumbJasaBongkarBangunanPost v4.1 — FIXED LOCATION DETECTION
 * ✅ FIX: "ringan", "baja", "pasang" TIDAK terdeteksi sebagai lokasi
 * ✅ FIX: JASA TIDAK BOLEH MONEY_MASTER (100% terblokir)
 * ✅ FIX: MONEY_MASTER vs MONEY_PAGE berdasarkan jumlah kata (≤2 = MASTER)
 * ✅ Support SEMUA ENTITY TYPE: PRODUK, MATERIAL, JASA, SEWA/RENTAL, ARTIKEL
 * ✅ PRIORITAS DETEKSI SESUAI PHASE 1
 * ✅ Breadcrumb tidak loncat level (auto fix)
 * ✅ MAX_LEVEL = 4 (termasuk Home)
 */

function generateBreadcrumbJasaBongkarBangunanPost(mappingObj, currentUrl, breadcrumbItems = [], entityType = 'PRODUK_INTERIOR') {
    
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
		urlMappingJasaBongkarBangunanFromSub2MoneyPage,
		urlMappingJasaBongkarTowerFromSub2MoneyPage,
		urlMappingJasaBongkarRumahFromSub2MoneyPage,
		urlMappingJasaBongkarBetonFromSub2MoneyPage,
		urlMappingJasaBongkarAtapFromSub2MoneyPage,
		urlMappingJasaBongkarKeramikFromSub2MoneyPage,
		urlMappingJasaBongkarTembokFromSub2MoneyPage,
		urlMappingJasaBongkarDindingFromSub2MoneyPage,
		urlMappingJasaBongkarPlafonFromSub2MoneyPage,
		urlMappingJasaBongkarPartisiFromSub2MoneyPage,
		urlMappingJasaBongkarPagarFromSub2MoneyPage,
		urlMappingJasaBongkarLantaiFromSub2MoneyPage,
		urlMappingJasaBuangPuingFromSub2MoneyChild,
		urlMappingJasaPerbaikanAtapBocorFromSub2MoneyPage,
		urlMappingJasaPerbaikanDindingRetakFromSub2MoneyPage,
		urlMappingJasaPerbaikanRembesanAirFromSub2MoneyPage,
		urlMappingJasaPerbaikanPlafonRusakFromSub2MoneyPage,
		urlMappingJasaPerbaikanDakBetonBocorFromSub2MoneyPage,
		urlMappingJasaPerbaikanTalangBocorFromSub2MoneyPage
	
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
if (urlMappingJasaBongkarBangunanFromSub2MoneyPage[cleanUrlJasaKonsBongkarBangunanPost]) {   
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

	     // Jika sudah di-remove, restore
        restoreCondition('JasaKonsBongkarBangunanPost');
	    restoreCondition('JasaKonstruksiBongkarBangunanPost');  // PILLAR (Jasa Konstruksi)
	    restoreCondition('JasaBongkarBangunanPost');
    
        JasaKonstruksiBongkarBangunanPostLink.style.visibility = 'visible';
	//TAMPILKAN JasaBongkarBangunanPost
        JasaBongkarBangunanPostLink.style.visibility = 'visible';
		pageNameJasaKonsBongkarBangunanPost.textContent = urlMappingJasaBongkarBangunanFromSub2MoneyPage[cleanUrlJasaKonsBongkarBangunanPost];
	
		generateBreadcrumbJasaBongkarBangunanPost(
        urlMappingJasaBongkarBangunanFromSub2MoneyPage,
        cleanUrlJasaKonsBongkarBangunanPost,
        [
           // { name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Bongkar Bangunan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-bongkar-bangunan.html' }
        ],
        'JASA_KONSTRUKSI'
    );

}
 
	
if (urlMappingJasaBongkarTowerFromSub2MoneyPage[cleanUrlJasaKonsBongkarBangunanPost]) {
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

	      // Jika sudah di-remove, restore
        restoreCondition('JasaKonsBongkarBangunanPost');
	    restoreCondition('JasaKonstruksiBongkarBangunanPost');  // PILLAR (Jasa Konstruksi)
	     restoreCondition('JasaBongkarBangunanPost');
         restoreCondition('JasaBongkarTowerPost');
	
        JasaKonstruksiBongkarBangunanPostLink.style.visibility = 'visible';
	//TAMPILKAN JasaBongkarBangunanPost
        JasaBongkarBangunanPostLink.style.visibility = 'visible';
	//TAMPILKAN JasaBongkarTowerPost
	JasaBongkarTowerPostLink.style.visibility = 'visible';
	
	pageNameJasaKonsBongkarBangunanPost.textContent = urlMappingJasaBongkarTowerFromSub2MoneyPage[cleanUrlJasaKonsBongkarBangunanPost];

	    generateBreadcrumbJasaBongkarBangunanPost(
        urlMappingJasaBongkarTowerFromSub2MoneyPage,
        cleanUrlJasaKonsBongkarBangunanPost,
        [
           //{ name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
             { name: 'Daftar Jasa Bongkar Bangunan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-bongkar-bangunan.html' },
            { name: 'Jasa Bongkar Tower', url: 'https://www.betonjayareadymix.com/p/jasa-bongkar-tower.html' }
        ],
         'JASA_KONSTRUKSI'
    );
}

if (urlMappingJasaBongkarRumahFromSub2MoneyPage[cleanUrlJasaKonsBongkarBangunanPost]) {
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

	      // Jika sudah di-remove, restore
        restoreCondition('JasaKonsBongkarBangunanPost');
	    restoreCondition('JasaKonstruksiBongkarBangunanPost');  // PILLAR (Jasa Konstruksi)
		restoreCondition('JasaBongkarBangunanPost');
	    restoreCondition('JasaBongkarRumahPost');

	
        JasaKonstruksiBongkarBangunanPostLink.style.visibility = 'visible';
	//TAMPILKAN JasaBongkarBangunanPost
        JasaBongkarBangunanPostLink.style.visibility = 'visible';
	//TAMPILKAN JasaBongkarRumahPost
     JasaBongkarRumahPostLink.style.visibility = 'visible';
	
	pageNameJasaKonsBongkarBangunanPost.textContent = urlMappingJasaBongkarRumahFromSub2MoneyPage[cleanUrlJasaKonsBongkarBangunanPost];

       generateBreadcrumbJasaBongkarBangunanPost(
        urlMappingJasaBongkarRumahFromSub2MoneyPage,
        cleanUrlJasaKonsBongkarBangunanPost,
        [
            //{ name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
             { name: 'Daftar Jasa Bongkar Bangunan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-bongkar-bangunan.html' },
            { name: 'Jasa Bongkar Rumah', url: 'https://www.betonjayareadymix.com/p/jasa-bongkar-rumah.html' }
        ],
        'JASA_KONSTRUKSI'
    );
	
}

if (urlMappingJasaBongkarBetonFromSub2MoneyPage[cleanUrlJasaKonsBongkarBangunanPost]) {
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

	    // Jika sudah di-remove, restore
        restoreCondition('JasaKonsBongkarBangunanPost');
	    restoreCondition('JasaKonstruksiBongkarBangunanPost');  // PILLAR (Jasa Konstruksi)
		restoreCondition('JasaBongkarBangunanPost');
	    restoreCondition('JasaBongkarBetonPost');

	
        JasaKonstruksiBongkarBangunanPostLink.style.visibility = 'visible';
	//TAMPILKAN JasaBongkarBangunanPost
        JasaBongkarBangunanPostLink.style.visibility = 'visible';
	//TAMPILKAN JasaBongkarBetonPost
	JasaBongkarBetonPostLink.style.visibility = 'visible';
	
	pageNameJasaKonsBongkarBangunanPost.textContent = urlMappingJasaBongkarBetonFromSub2MoneyPage[cleanUrlJasaKonsBongkarBangunanPost];

	    generateBreadcrumbJasaBongkarBangunanPost(
        urlMappingJasaBongkarBetonFromSub2MoneyPage,
        cleanUrlJasaKonsBongkarBangunanPost,
        [
            //{ name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Bongkar Bangunan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-bongkar-bangunan.html' },
            { name: 'Jasa Bongkar Beton', url: 'https://www.betonjayareadymix.com/p/jasa-bongkar-beton.html' }
        ],
        'JASA_KONSTRUKSI'
    );

}

if (urlMappingJasaBongkarAtapFromSub2MoneyPage[cleanUrlJasaKonsBongkarBangunanPost]) {
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

	       // Jika sudah di-remove, restore
        restoreCondition('JasaKonsBongkarBangunanPost');
	   restoreCondition('JasaKonstruksiBongkarBangunanPost');  // PILLAR (Jasa Konstruksi)
	   restoreCondition('JasaBongkarBangunanPost');
       restoreCondition('JasaBongkarAtapPost');
	
        JasaKonstruksiBongkarBangunanPostLink.style.visibility = 'visible';
	//TAMPILKAN JasaBongkarBangunanPost
        JasaBongkarBangunanPostLink.style.visibility = 'visible';
	//TAMPILKAN JasaBongkarAtapPost
	JasaBongkarAtapPostLink.style.visibility = 'visible';
	
	pageNameJasaKonsBongkarBangunanPost.textContent = urlMappingJasaBongkarAtapFromSub2MoneyPage[cleanUrlJasaKonsBongkarBangunanPost];

	   generateBreadcrumbJasaBongkarBangunanPost(
        urlMappingJasaBongkarAtapFromSub2MoneyPage,
        cleanUrlJasaKonsBongkarBangunanPost,
        [
            //{ name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
             { name: 'Daftar Jasa Bongkar Bangunan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-bongkar-bangunan.html' },
            { name: 'Jasa Bongkar Atap', url: 'https://www.betonjayareadymix.com/p/jasa-bongkar-atap.html' }
        ],
        'JASA_KONSTRUKSI'
    );
}

if (urlMappingJasaBongkarKeramikFromSub2MoneyPage[cleanUrlJasaKonsBongkarBangunanPost]) {
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

                // Jika sudah di-remove, restore
        restoreCondition('JasaBongkarBangunanPost');
	    restoreCondition('JasaKonstruksiBongkarBangunanPost');  // PILLAR (Jasa Konstruksi) 
	    restoreCondition('JasaKonsBongkarBangunanPost');
	     restoreCondition('JasaBongkarKeramikPost');
	   
        JasaKonstruksiBongkarBangunanPostLink.style.visibility = 'visible';
	//TAMPILKAN JasaBongkarBangunanPost
        JasaBongkarBangunanPostLink.style.visibility = 'visible';
	//TAMPILKAN JasaBongkarKeramikPost
	JasaBongkarKeramikPostLink.style.visibility = 'visible';
	
	pageNameJasaKonsBongkarBangunanPost.textContent = urlMappingJasaBongkarKeramikFromSub2MoneyPage[cleanUrlJasaKonsBongkarBangunanPost];

	    generateBreadcrumbJasaBongkarBangunanPost(
        urlMappingJasaBongkarKeramikFromSub2MoneyPage,
        cleanUrlJasaKonsBongkarBangunanPost,
        [
            //{ name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
             { name: 'Daftar Jasa Bongkar Bangunan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-bongkar-bangunan.html' },
            { name: 'Jasa Bongkar Keramik', url: 'https://www.betonjayareadymix.com/p/jasa-bongkar-keramik.html' }
        ],
        'JASA_KONSTRUKSI'
    );
}

if (urlMappingJasaBongkarTembokFromSub2MoneyPage[cleanUrlJasaKonsBongkarBangunanPost]) {
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

        // Jika sudah di-remove, restore
        restoreCondition('JasaKonsBongkarBangunanPost');
	    restoreCondition('JasaKonstruksiBongkarBangunanPost');  // PILLAR (Jasa Konstruksi)
	    restoreCondition('JasaBongkarBangunanPost');
        restoreCondition('JasaBongkarTembokPost');
	
        JasaKonstruksiBongkarBangunanPostLink.style.visibility = 'visible';
	//TAMPILKAN JasaBongkarBangunanPost
        JasaBongkarBangunanPostLink.style.visibility = 'visible';
	//TAMPILKAN JasaBongkarTembokPost
	JasaBongkarTembokPostLink.style.visibility = 'visible';
	
	pageNameJasaKonsBongkarBangunanPost.textContent = urlMappingJasaBongkarTembokFromSub2MoneyPage[cleanUrlJasaKonsBongkarBangunanPost];

        generateBreadcrumbJasaBongkarBangunanPost(
        urlMappingJasaBongkarTembokFromSub2MoneyPage,
        cleanUrlJasaKonsBongkarBangunanPost,
        [
            //{ name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Bongkar Bangunan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-bongkar-bangunan.html' },
            { name: 'Jasa Bongkar Tembok', url: 'https://www.betonjayareadymix.com/p/jasa-bongkar-tembok.html' }
        ],
        'JASA_KONSTRUKSI'
    );
}

if (urlMappingJasaBongkarDindingFromSub2MoneyPage[cleanUrlJasaKonsBongkarBangunanPost]) {
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

	           // Jika sudah di-remove, restore
        restoreCondition('JasaKonsBongkarBangunanPost');
	    restoreCondition('JasaKonstruksiBongkarBangunanPost');  // PILLAR (Jasa Konstruksi)
	    restoreCondition('JasaBongkarBangunanPost');
        restoreCondition('JasaBongkarDindingPost');
	
        JasaKonstruksiBongkarBangunanPostLink.style.visibility = 'visible';
	//TAMPILKAN JasaBongkarBangunanPost
        JasaBongkarBangunanPostLink.style.visibility = 'visible';
	//TAMPILKAN JasaBongkarDindingPost
	JasaBongkarDindingPostLink.style.visibility = 'visible';
	
	pageNameJasaKonsBongkarBangunanPost.textContent = urlMappingJasaBongkarDindingFromSub2MoneyPage[cleanUrlJasaKonsBongkarBangunanPost];

	  generateBreadcrumbJasaBongkarBangunanPost(
        urlMappingJasaBongkarDindingFromSub2MoneyPage,
        cleanUrlJasaKonsBongkarBangunanPost,
        [
            //{ name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Bongkar Bangunan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-bongkar-bangunan.html' },
            { name: 'Jasa Bongkar Dinding', url: 'https://www.betonjayareadymix.com/p/jasa-bongkar-dinding.html' }
        ],
        'JASA_KONSTRUKSI'
    );
}

if (urlMappingJasaBongkarPlafonFromSub2MoneyPage[cleanUrlJasaKonsBongkarBangunanPost]) {

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

	           	           // Jika sudah di-remove, restore
        restoreCondition('JasaKonsBongkarBangunanPost');
	    restoreCondition('JasaKonstruksiBongkarBangunanPost');  // PILLAR (Jasa Konstruksi)
	    restoreCondition('JasaBongkarBangunanPost');
        restoreCondition('JasaBongkarPlafonPost');
	
        JasaKonstruksiBongkarBangunanPostLink.style.visibility = 'visible';
	//TAMPILKAN JasaBongkarBangunanPost
        JasaBongkarBangunanPostLink.style.visibility = 'visible';
	//TAMPILKAN JasaBongkarPlafonPost
	JasaBongkarPlafonPostLink.style.visibility = 'visible';
	
	pageNameJasaKonsBongkarBangunanPost.textContent = urlMappingJasaBongkarPlafonFromSub2MoneyPage[cleanUrlJasaKonsBongkarBangunanPost];
	
	generateBreadcrumbJasaBongkarBangunanPost(
        urlMappingJasaBongkarPlafonFromSub2MoneyPage,
        cleanUrlJasaKonsBongkarBangunanPost,
        [
           // { name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Bongkar Bangunan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-bongkar-bangunan.html' },
            { name: 'Jasa Bongkar Plafon', url: 'https://www.betonjayareadymix.com/p/jasa-bongkar-plafon.html' }
        ],
        'JASA_KONSTRUKSI'
    );
}

if (urlMappingJasaBongkarPartisiFromSub2MoneyPage[cleanUrlJasaKonsBongkarBangunanPost]) {
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

        // Jika sudah di-remove, restore
        restoreCondition('JasaKonsBongkarBangunanPost');
	    restoreCondition('JasaKonstruksiBongkarBangunanPost');  // PILLAR (Jasa Konstruksi)
	    restoreCondition('JasaBongkarBangunanPost');
	    restoreCondition('JasaBongkarPartisiPost');
	
        JasaKonstruksiBongkarBangunanPostLink.style.visibility = 'visible';
	//TAMPILKAN JasaBongkarBangunanPost
        JasaBongkarBangunanPostLink.style.visibility = 'visible';
	//TAMPILKAN JasaBongkarPartisiPost
	JasaBongkarPartisiPostLink.style.visibility = 'visible';
	
	pageNameJasaKonsBongkarBangunanPost.textContent = urlMappingJasaBongkarPartisiFromSub2MoneyPage[cleanUrlJasaKonsBongkarBangunanPost];

	    generateBreadcrumbJasaBongkarBangunanPost(
        urlMappingJasaBongkarPartisiFromSub2MoneyPage,
        cleanUrlJasaKonsBongkarBangunanPost,
        [
            //{ name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
             { name: 'Daftar Jasa Bongkar Bangunan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-bongkar-bangunan.html' },
            { name: 'Jasa Bongkar Partisi', url: 'https://www.betonjayareadymix.com/p/jasa-bongkar-partisi.html' }
        ],
        'JASA_KONSTRUKSI'
    );
}

if (urlMappingJasaBongkarPagarFromSub2MoneyPage[cleanUrlJasaKonsBongkarBangunanPost]) { 
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

	           // Jika sudah di-remove, restore
        restoreCondition('JasaKonsBongkarBangunanPost');
	    restoreCondition('JasaKonstruksiBongkarBangunanPost');  // PILLAR (Jasa Konstruksi)
	    restoreCondition('JasaBongkarBangunanPost');
	  	restoreCondition('JasaBongkarPagarPost');
        JasaKonstruksiBongkarBangunanPostLink.style.visibility = 'visible';
	//TAMPILKAN JasaBongkarBangunanPost
        JasaBongkarBangunanPostLink.style.visibility = 'visible';
	//TAMPILKAN JasaBongkarPagarPost
	JasaBongkarPagarPostLink.style.visibility = 'visible';
	
	pageNameJasaKonsBongkarBangunanPost.textContent = urlMappingJasaBongkarPagarFromSub2MoneyPage[cleanUrlJasaKonsBongkarBangunanPost];
	    generateBreadcrumbJasaBongkarBangunanPost(
        urlMappingJasaBongkarPagarFromSub2MoneyPage,
        cleanUrlJasaKonsBongkarBangunanPost,
        [
            //{ name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
             { name: 'Daftar Jasa Bongkar Bangunan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-bongkar-bangunan.html' },
            { name: 'Jasa Bongkar Pagar', url: 'https://www.betonjayareadymix.com/p/jasa-bongkar-pagar.html' }
        ],
        'JASA_KONSTRUKSI'
    );

}

if (urlMappingJasaBongkarLantaiFromSub2MoneyPage[cleanUrlJasaKonsBongkarBangunanPost]) {
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

	    	           // Jika sudah di-remove, restore
        restoreCondition('JasaKonsBongkarBangunanPost');
	    restoreCondition('JasaKonstruksiBongkarBangunanPost');  // PILLAR (Jasa Konstruksi)
	    restoreCondition('JasaBongkarBangunanPost');
        restoreCondition('JasaBongkarLantaiPost');
	
        JasaKonstruksiBongkarBangunanPostLink.style.visibility = 'visible';
	//TAMPILKAN JasaBongkarBangunanPost
        JasaBongkarBangunanPostLink.style.visibility = 'visible';
	//TAMPILKAN JasaBongkarLantaiPost
	JasaBongkarLantaiPostLink.style.visibility = 'visible';
	
	pageNameJasaKonsBongkarBangunanPost.textContent = urlMappingJasaBongkarLantaiFromSub2MoneyPage[cleanUrlJasaKonsBongkarBangunanPost];
         generateBreadcrumbJasaBongkarBangunanPost(
        urlMappingJasaBongkarLantaiFromSub2MoneyPage,
        cleanUrlJasaKonsBongkarBangunanPost,
        [
           // { name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Bongkar Bangunan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-bongkar-bangunan.html' },
            { name: 'Jasa Bongkar Lantai', url: 'https://www.betonjayareadymix.com/p/jasa-bongkar-lantai.html' }
        ],
        'JASA_KONSTRUKSI'
    );

}


//SUB urlMappingJasaBuangPuing
if (urlMappingJasaBuangPuingFromSub2MoneyChild[cleanUrlJasaKonsBongkarBangunanPost]) {

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

	       	           // Jika sudah di-remove, restore
        restoreCondition('JasaKonsBongkarBangunanPost');
	    restoreCondition('JasaKonstruksiBongkarBangunanPost');  // PILLAR (Jasa Konstruksi)
	    restoreCondition('JasaBuangPuingPost');
	
        JasaKonstruksiBongkarBangunanPostLink.style.visibility = 'visible';
	//TAMPILKAN JasaBongkarBangunanPost
      JasaBuangPuingPostLink.style.visibility = 'visible';

	pageNameJasaKonsBongkarBangunanPost.textContent = urlMappingJasaBuangPuingFromSub2MoneyChild[cleanUrlJasaKonsBongkarBangunanPost];

	    generateBreadcrumbJasaBongkarBangunanPost(
        urlMappingJasaBuangPuingFromSub2MoneyChild,
        cleanUrlJasaKonsBongkarBangunanPost,
        [
            //{ name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Buang Puing', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-buang-puing.html' }
        ],
        'JASA_KONSTRUKSI'
    );
}
	
//SUB urlMappingJasaPerawatanPerbaikanBangunanPost
//JasaPerbaikanAtapBocorPost
if (urlMappingJasaPerbaikanAtapBocorFromSub2MoneyPage[cleanUrlJasaKonsBongkarBangunanPost]) {
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
	
	pageNameJasaKonsBongkarBangunanPost.textContent = urlMappingJasaPerbaikanAtapBocorFromSub2MoneyPage[cleanUrlJasaKonsBongkarBangunanPost];

	   generateBreadcrumbJasaBongkarBangunanPost(
        urlMappingJasaPerbaikanAtapBocorFromSub2MoneyPage,
        cleanUrlJasaKonsBongkarBangunanPost,
        [
            //{ name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Perawatan & Perbaikan Bangunan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-perawatan-perbaikan-bangunan.html' },
            { name: 'Jasa Perbaikan Atap & Drainase Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-atap-drainase-bangunan.html' },
            { name: 'Jasa Perbaikan Atap Bocor', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-atap-bocor.html' }
        ],
        'JASA_KONSTRUKSI'
    );

}
  
	//JasaPerbaikanDindingRetakPost
 if (urlMappingJasaPerbaikanDindingRetakFromSub2MoneyPage[cleanUrlJasaKonsBongkarBangunanPost]) {
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
	
	pageNameJasaKonsBongkarBangunanPost.textContent = urlMappingJasaPerbaikanDindingRetakFromSub2MoneyPage[cleanUrlJasaKonsBongkarBangunanPost];

	    generateBreadcrumbJasaBongkarBangunanPost(
        urlMappingJasaPerbaikanDindingRetakFromSub2MoneyPage,
        cleanUrlJasaKonsBongkarBangunanPost,
        [
           // { name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Perawatan & Perbaikan Bangunan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-perawatan-perbaikan-bangunan.html' },
            { name: 'Jasa Perbaikan Elemen Arsitektural Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-elemen-arsitektural.html' },
            { name: 'Jasa Perbaikan Dinding Retak', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-dinding-retak.html' }
        ],
        'JASA_KONSTRUKSI'
    );
 
 }
 
 //JasaPerbaikanRembesanAirPost
 if (urlMappingJasaPerbaikanRembesanAirFromSub2MoneyPage[cleanUrlJasaKonsBongkarBangunanPost]) {
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
	
	pageNameJasaKonsBongkarBangunanPost.textContent = urlMappingJasaPerbaikanRembesanAirFromSub2MoneyPage[cleanUrlJasaKonsBongkarBangunanPost];
    
 	generateBreadcrumbJasaBongkarBangunanPost(
        urlMappingJasaPerbaikanRembesanAirFromSub2MoneyPage,
        cleanUrlJasaKonsBongkarBangunanPost,
        [
            //{ name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
           { name: 'Daftar Jasa Perawatan & Perbaikan Bangunan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-perawatan-perbaikan-bangunan.html' },
            { name: 'Jasa Perbaikan Kebocoran & Waterproofing', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-kebocoran-waterproofing.html' },
            { name: 'Jasa Perbaikan Rembesan Air', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-rembesan-air.html' }
        ],
        'JASA_KONSTRUKSI'
    );
 }


	 //JasaPerbaikanRembesanAirPost
 if (urlMappingJasaPerbaikanPlafonRusakFromSub2MoneyPage[cleanUrlJasaKonsBongkarBangunanPost]) {
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
	
	pageNameJasaKonsBongkarBangunanPost.textContent = urlMappingJasaPerbaikanPlafonRusakFromSub2MoneyPage[cleanUrlJasaKonsBongkarBangunanPost];

	   generateBreadcrumbJasaBongkarBangunanPost(
        urlMappingJasaPerbaikanPlafonRusakFromSub2MoneyPage,
        cleanUrlJasaKonsBongkarBangunanPost,
        [
            //{ name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Perawatan & Perbaikan Bangunan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-perawatan-perbaikan-bangunan.html' },
            { name: 'Jasa Perbaikan Elemen Arsitektural', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-elemen-arsitektural.html' },
            { name: 'Jasa Perbaikan Plafon Rusak', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-plafon-rusak.html' }
        ],
        'JASA_KONSTRUKSI'
    );
 
 }

	 //JasaPerbaikanDakBetonBocor
 if (urlMappingJasaPerbaikanDakBetonBocorFromSub2MoneyPage[cleanUrlJasaKonsBongkarBangunanPost]) {
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
	
	pageNameJasaKonsBongkarBangunanPost.textContent = urlMappingJasaPerbaikanDakBetonBocorFromSub2MoneyPage[cleanUrlJasaKonsBongkarBangunanPost];
 	    generateBreadcrumbJasaBongkarBangunanPost(
        urlMappingJasaPerbaikanDakBetonBocorFromSub2MoneyPage,
        cleanUrlJasaKonsBongkarBangunanPost,
        [
            //{ name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Perawatan & Perbaikan Bangunan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-perawatan-perbaikan-bangunan.html' },
            { name: 'Jasa Perbaikan Kebocoran Waterproofing', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-kebocoran-waterproofing.html' },
            { name: 'Jasa Perbaikan Dak Beton Bocor', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-dak-beton-bocor.html' }
        ],
        'JASA_KONSTRUKSI'
    );  
 }
   
	 //JasaPerbaikanTalangBocorPost
 if (urlMappingJasaPerbaikanTalangBocorFromSub2MoneyPage[cleanUrlJasaKonsBongkarBangunanPost]) {
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
	
	pageNameJasaKonsBongkarBangunanPost.textContent = urlMappingJasaPerbaikanTalangBocorFromSub2MoneyPage[cleanUrlJasaKonsBongkarBangunanPost];
    
 	    generateBreadcrumbJasaBongkarBangunanPost(
        urlMappingJasaPerbaikanTalangBocorFromSub2MoneyPage,
        cleanUrlJasaKonsBongkarBangunanPost,
        [
            //{ name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Perawatan & Perbaikan Bangunan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-perawatan-perbaikan-bangunan.html' },
            { name: 'Jasa Perbaikan Kebocoran Waterproofing', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-kebocoran-waterproofing.html' },
            { name: 'Jasa Perbaikan Talang Bocor', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-talang-bocor.html' }
        ],
        'JASA_KONSTRUKSI'
    );
 }
    
});
