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

function generateBreadcrumbJasaBongkarBangunanPost(mappingObj, currentUrl, breadcrumbItems = [], entityType = 'PRODUK_INTERIOR') {
    
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
*/// Menyimpan elemen yang dihapus dalam variabel
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
