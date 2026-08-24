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

const urlMappingJasaBongkarBangunanFromMoneyMasterMoneyPage = {
  // ============================================================
  // [MONEY_PAGE] - HARGA JASA BONGKAR BANGUNAN
  // ============================================================
  "https://www.betonjayareadymix.com/2018/09/harga-jasa-bongkar-bangunan.html": "Harga Jasa Bongkar Bangunan"  
};
const urlMappingJasaBongkarBangunanFromMoneyMasterMoneyChild = {
 "https://www.betonjayareadymix.com/2019/06/jasa-bongkar-bangunan-terdekat.html": "Jasa Bongkar Bangunan Terdekat",
 "https://www.betonjayareadymix.com/2019/06/jasa-bongkar-bangunan-jakarta.html": "Jasa Bongkar Bangunan Jakarta",
 "https://www.betonjayareadymix.com/2019/06/jasa-bongkar-bangunan-bogor.html": "Jasa Bongkar Bangunan Bogor",
 "https://www.betonjayareadymix.com/2019/06/jasa-bongkar-bangunan-depok.html": "Jasa Bongkar Bangunan Depok",
 "https://www.betonjayareadymix.com/2019/06/jasa-bongkar-bangunan-tangerang.html": "Jasa Bongkar Bangunan Tangerang",
 "https://www.betonjayareadymix.com/2019/06/jasa-bongkar-bangunan-bekasi.html": "Jasa Bongkar Bangunan Bekasi",
 "https://www.betonjayareadymix.com/2019/06/jasa-bongkar-bangunan-karawang.html": "Jasa Bongkar Bangunan Karawang"
};
// ============================================================
// 📁 JASA BONGKAR TOWER - MONEY PAGE & CHILD
// ============================================================

const urlMappingJasaBongkarTowerFromMoneyMaster1MoneyPage = {
  "https://www.betonjayareadymix.com/2018/09/harga-jasa-bongkar-tower.html": "Harga Jasa Bongkar Tower",  
  "https://www.betonjayareadymix.com/2018/09/jasa-bongkar-tower-triangle.html": "Jasa Bongkar Tower Triangle"  
  
  // ============================================================
  // 🟡 SARAN ITEM TAMBAHAN (BELUM AKTIF - PERLU DIBUAT KONTEN)
  // ============================================================
  // "https://www.betonjayareadymix.com/2019/08/harga-bongkar-tower-bts.html": "Harga Bongkar Tower BTS",  
  // "https://www.betonjayareadymix.com/2019/08/jasa-bongkar-tower-jakarta.html": "Jasa Bongkar Tower Jakarta",  
};
const urlMappingJasaBongkarTowerFromMoneyMaster1MoneyChild = {
  "https://www.betonjayareadymix.com/2018/09/jasa-bongkar-tower-terdekat.html": "Jasa Bongkar Tower Terdekat", 
  "https://www.betonjayareadymix.com/2018/09/jasa-bongkar-tower-jakarta.html": "Jasa Bongkar Tower Jakarta",  
  "https://www.betonjayareadymix.com/2018/09/jasa-bongkar-tower-bogor.html": "Jasa Bongkar Tower Bogor", 
  "https://www.betonjayareadymix.com/2018/09/jasa-bongkar-tower-depok.html": "Jasa Bongkar Tower Depok", 
  "https://www.betonjayareadymix.com/2018/09/jasa-bongkar-tower-tangerang.html": "Jasa Bongkar Tower Tangerang", 
  "https://www.betonjayareadymix.com/2018/09/jasa-bongkar-tower-bekasi.html": "Jasa Bongkar Tower Bekasi", 
  "https://www.betonjayareadymix.com/2018/09/jasa-bongkar-tower-karawang.html": "Jasa Bongkar Tower Karawang", 
  "https://www.betonjayareadymix.com/2018/09/jasa-bongkar-tower-surabaya.html": "Jasa Bongkar Tower Surabaya"
};
// ============================================================
// 📁 JASA BONGKAR RUMAH - SARAN ITEM (BELUM AKTIF)
// ============================================================

const urlMappingJasaBongkarRumahFromMoneyMaster1MoneyPage = {
  // 🟡 SARAN ITEM (BELUM AKTIF - PERLU DIBUAT KONTEN)
  // "https://www.betonjayareadymix.com/p/jasa-bongkar-rumah.html": "Jasa Bongkar Rumah", 
   "https://www.betonjayareadymix.com/2018/09/harga-jasa-bongkar-rumah.html": "Harga Jasa Bongkar Rumah",  
  "https://www.betonjayareadymix.com/2019/08/jasa-bongkar-rumah-2-lantai.html": "Jasa Bongkar Rumah 2 Lantai",  
   "https://www.betonjayareadymix.com/2019/08/jasa-bongkar-rumah-permanen.html": "Jasa Bongkar Rumah Permanen",  
   "https://www.betonjayareadymix.com/2019/08/jasa-bongkar-rumah-semi-permanen.html": "Jasa Bongkar Rumah Semi Permanen"
};
const urlMappingJasaBongkarRumahFromMoneyMaster1MoneyChild = {
   "https://www.betonjayareadymix.com/2018/09/jasa-bongkar-rumah-terdekat.html": "Jasa Bongkar Rumah Terdekat",
   "https://www.betonjayareadymix.com/2018/09/jasa-bongkar-rumah-jakarta.html": "Jasa Bongkar Rumah Jakarta",
   "https://www.betonjayareadymix.com/2018/09/jasa-bongkar-rumah-bogor.html": "Jasa Bongkar Rumah Bogor",
   "https://www.betonjayareadymix.com/2018/09/jasa-bongkar-rumah-depok.html": "Jasa Bongkar Rumah Depok",
   "https://www.betonjayareadymix.com/2018/09/jasa-bongkar-rumah-tangerang.html": "Jasa Bongkar Rumah Tangerang",
   "https://www.betonjayareadymix.com/2018/09/jasa-bongkar-rumah-bekasi.html": "Jasa Bongkar Rumah Bekasi",
   "https://www.betonjayareadymix.com/2018/09/jasa-bongkar-rumah-karawang.html": "Jasa Bongkar Rumah Karawang",
   "https://www.betonjayareadymix.com/2018/09/jasa-bongkar-rumah-surabaya.html": "Jasa Bongkar Rumah Surabaya"
};
const urlMappingHargaJasaBongkarRumahFromMoneyPageMoneyChild = {
   "https://www.betonjayareadymix.com/2018/09/harga-jasa-bongkar-rumah-jakarta.html": "Harga Jasa Bongkar Rumah Jakarta",
   "https://www.betonjayareadymix.com/2018/09/harga-jasa-bongkar-rumah-bogor.html": "Harga Jasa Bongkar Rumah Bogor",
   "https://www.betonjayareadymix.com/2018/09/harga-jasa-bongkar-rumah-depok.html": "Harga Jasa Bongkar Rumah Depok",
   "https://www.betonjayareadymix.com/2018/09/harga-jasa-bongkar-rumah-tangerang.html": "Harga Jasa Bongkar Rumah Tangerang",
   "https://www.betonjayareadymix.com/2018/09/harga-jasa-bongkar-rumah-bekasi.html": "Harga Jasa Bongkar Rumah Bekasi",
   "https://www.betonjayareadymix.com/2018/09/harga-jasa-bongkar-rumah-karawang.html": "Harga Jasa Bongkar Rumah Karawang",
   "https://www.betonjayareadymix.com/2018/09/harga-jasa-bongkar-rumah-surabaya.html": "Harga Jasa Bongkar Rumah Surabaya"
};
// ============================================================
// 📁 JASA BONGKAR BETON - MONEY PAGE (BUKAN MONEY MASTER)
// ============================================================

const urlMappingJasaBongkarBetonFromMoneyMaster1MoneyPage = {
  "https://www.betonjayareadymix.com/2019/06/harga-jasa-bongkar-beton.html": "Harga Jasa Bongkar Beton" 

};
const urlMappingJasaBongkarBetonFromMoneyMaster1MoneyChild = {
  "https://www.betonjayareadymix.com/2019/06/jasa-bongkar-beton-terdekat.html": "Jasa Bongkar Beton Terdekat",
  "https://www.betonjayareadymix.com/2019/06/jasa-bongkar-beton-jakarta.html": "Jasa Bongkar Beton Jakarta",
  "https://www.betonjayareadymix.com/2019/06/jasa-bongkar-beton-bogor.html": "Jasa Bongkar Beton Bogor",
  "https://www.betonjayareadymix.com/2019/06/jasa-bongkar-beton-depok.html": "Jasa Bongkar Beton Depok",
  "https://www.betonjayareadymix.com/2019/06/jasa-bongkar-beton-tangerang.html": "Jasa Bongkar Beton Tangerang",
  "https://www.betonjayareadymix.com/2019/06/jasa-bongkar-beton-bekasi.html": "Jasa Bongkar Beton Bekasi",
  "https://www.betonjayareadymix.com/2019/06/jasa-bongkar-beton-karawang.html": "Jasa Bongkar Beton Karawang",
  "https://www.betonjayareadymix.com/2019/06/jasa-bongkar-beton-surabaya.html": "Jasa Bongkar Beton Surabaya"

};
const urlMappingHargaJasaBongkarBetonFromMoneyPageMoneyPage1 = {
	  // ============================================================
  "https://www.betonjayareadymix.com/2019/06/harga-jasa-bongkar-beton-per-m3.html": "Harga Jasa Bongkar Beton Per m3"
};
const urlMappingHargaJasaBongkarBetonFromMoneyPageMoneyChild = {
  "https://www.betonjayareadymix.com/2019/06/harga-jasa-bongkar-beton-jakarta.html": "Harga Jasa Bongkar Beton Jakarta",
  "https://www.betonjayareadymix.com/2019/06/harga-jasa-bongkar-beton-bogor.html": "Harga Jasa Bongkar Beton Bogor",
  "https://www.betonjayareadymix.com/2019/06/harga-jasa-bongkar-beton-depok.html": "Harga Jasa Bongkar Beton Depok",
  "https://www.betonjayareadymix.com/2019/06/harga-jasa-bongkar-beton-tangerang.html": "Harga Jasa Bongkar Beton Tangerang",
  "https://www.betonjayareadymix.com/2019/06/harga-jasa-bongkar-beton-bekasi.html": "Harga Jasa Bongkar Beton Bekasi",
  "https://www.betonjayareadymix.com/2019/06/harga-jasa-bongkar-beton-karawang.html": "Harga Jasa Bongkar Beton Karawang",
  "https://www.betonjayareadymix.com/2019/06/harga-jasa-bongkar-beton-surabaya.html": "Harga Jasa Bongkar Beton Surabaya"

};
const urlMappingJasaBongkarBetonFromMoneyMaster1Variant = {
  "https://www.betonjayareadymix.com/2019/06/ukuran-bongkar-beton.html": "Ukuran Bongkar Beton",
  "https://www.betonjayareadymix.com/2019/06/metode-bongkar-beton.html": "Metode Bongkar Beton"

};
// ============================================================
// JASA BONGKAR ATAP - MONEY PAGE
// 🧠 ENTITY: JASA → TYPE: MONEY_PAGE (bukan MONEY_MASTER)
// Parent: Jasa Bongkar Bangunan (SUB2)
// Intent: Komersial (60%) + Transaksional (40%)
// CTA: Konsultasi, Survey, Hubungi, Estimasi
// Breadcrumb: Home > Jasa Konstruksi > Jasa Bongkar Bangunan > Harga Jasa Bongkar Atap (4 level)
// ============================================================

const urlMappingJasaBongkarAtapFromMoneyMaster1MoneyPage = {
  "https://www.betonjayareadymix.com/2019/06/jasa-bongkar-atap-per-meter.html": "Jasa Bongkar Atap Per Meter",
  "https://www.betonjayareadymix.com/2019/06/jasa-bongkar-atap-rumah.html": "Jasa Bongkar Atap Rumah",
  "https://www.betonjayareadymix.com/2019/06/harga-jasa-bongkar-atap.html": "Harga Jasa Bongkar Atap"
 };
const urlMappingJasaBongkarAtapFromMoneyMaster1MoneyChild = {
	"https://www.betonjayareadymix.com/2019/06/jasa-bongkar-atap-terdekat.html": "Jasa Bongkar Atap Terdekat", 
	"https://www.betonjayareadymix.com/2019/06/jasa-bongkar-atap-jakarta.html": "Jasa Bongkar Atap Jakarta",  
    "https://www.betonjayareadymix.com/2019/06/jasa-bongkar-atap-bekasi.html": "Jasa Bongkar Atap Bekasi",  
    "https://www.betonjayareadymix.com/2019/06/jasa-bongkar-atap-bogor.html": "Jasa Bongkar Atap Bogor",  
     "https://www.betonjayareadymix.com/2019/06/jasa-bongkar-atap-depok.html": "Jasa Bongkar Atap Depok",  
     "https://www.betonjayareadymix.com/2019/06/jasa-bongkar-atap-tangerang.html": "Jasa Bongkar Atap Tangerang",  
     "https://www.betonjayareadymix.com/2019/06/jasa-bongkar-atap-karawang.html": "Jasa Bongkar Atap Karawang",  
     "https://www.betonjayareadymix.com/2019/06/jasa-bongkar-atap-surabaya.html": "Jasa Bongkar Atap Surabaya"
};
const urlMappingHargaJasaBongkarAtapFromMoneyPageMoneyPage1 = {
	// ============================================================
  // [MONEY_PAGE] - HARGA BONGKAR ATAP PER METER
  // ============================================================
  "https://www.betonjayareadymix.com/2019/06/harga-jasa-bongkar-atap-per-meter.html": "Harga Jasa Bongkar Atap Per Meter"  
};
const urlMappingJasaBongkarAtapFromMoneyMaster1Variant = {
  "https://www.betonjayareadymix.com/2019/06/spesifikasi-jasa-bongkar-atap.html": "Spesifikasi Jasa Bongkar Atap",
  "https://www.betonjayareadymix.com/2019/06/metode-jasa-bongkar-atap.html": "Metode Jasa Bongkar Atap"
 };
// ============================================================
// JASA BONGKAR KERAMIK - MONEY PAGE
// 🧠 ENTITY: JASA → TYPE: MONEY_PAGE (bukan MONEY_MASTER)
// Parent: Jasa Bongkar Lantai (MONEY_PAGE) atau langsung di bawah Jasa Bongkar Bangunan (SUB2)
// Intent: Komersial (60%) + Transaksional (40%)
// CTA: Konsultasi, Survey, Hubungi, Estimasi
// Breadcrumb: Home > Jasa Konstruksi > Jasa Bongkar Bangunan > Harga Bongkar Keramik (4 level)
// ============================================================

const urlMappingJasaBongkarKeramikFromMoneyMaster1MoneyPage = {
  "https://www.betonjayareadymix.com/2019/06/harga-jasa-bongkar-keramik.html": "Harga Jasa Bongkar Keramik",
  "https://www.betonjayareadymix.com/2019/06/jasa-bongkar-keramik-per-meter.html": "Jasa Bongkar Keramik Per Meter",
  "https://www.betonjayareadymix.com/2019/06/jasa-bongkar-keramik-lantai.html": "Jasa Bongkar Keramik Lantai"  
  
};
const urlMappingHargaJasaBongkarKeramikFromMoneyPageMoneyPage1 = {

  "https://www.betonjayareadymix.com/2019/06/harga-jasa-bongkar-keramik-per-m2.html": "Harga Jasa Bongkar Keramik Per M2",  
   "https://www.betonjayareadymix.com/2019/06/harga-jasa-bongkar-keramik-lantai.html": "Harga Jasa Bongkar Keramik Lantai",  
  "https://www.betonjayareadymix.com/2019/06/harga-jasa-bongkar-keramik-dinding.html": "Harga Jasa Bongkar Keramik Dinding",  
    "https://www.betonjayareadymix.com/2019/06/harga-jasa-borongan-bongkar-keramik-lantai.html": "Harga Jasa Borongan Bongkar Keramik Lantai",
  "https://www.betonjayareadymix.com/2019/06/harga-jasa-borongan-bongkar-pasang-keramik.html": "Harga Jasa Borongan Bongkar Pasang Keramik Kamar Mandi" 
};
const urlMappingJasaBongkarKeramikFromMoneyMaster1MoneyChild = {
  "https://www.betonjayareadymix.com/2019/06/jasa-bongkar-keramik-terdekat.html": "Jasa Bongkar Keramik Terdekat",  
  "https://www.betonjayareadymix.com/2019/06/jasa-bongkar-keramik-jakarta.html": "Jasa Bongkar Keramik Jakarta",  
  "https://www.betonjayareadymix.com/2019/06/jasa-bongkar-keramik-bekasi.html": "Jasa Bongkar Keramik Bekasi",  
  "https://www.betonjayareadymix.com/2019/06/jasa-bongkar-keramik-tangerang.html": "Jasa Bongkar Keramik Tangerang",  
  "https://www.betonjayareadymix.com/2019/06/jasa-bongkar-keramik-depok.html": "Jasa Bongkar Keramik Depok",  
  "https://www.betonjayareadymix.com/2019/06/jasa-bongkar-keramik-bogor.html": "Jasa Bongkar Keramik Bogor",  
  "https://www.betonjayareadymix.com/2019/06/jasa-bongkar-keramik-karawang.html": "Jasa Bongkar Keramik Karawang",  
  "https://www.betonjayareadymix.com/2019/06/jasa-bongkar-keramik-surabaya.html": "Jasa Bongkar Keramik Surabaya" 
  
};
const urlMappingJasaBongkarKeramikFromMoneyMaster1Variant = {
  "https://www.betonjayareadymix.com/2019/06/spesifikasi-jasa-bongkar-keramik.html": "Spesifikasi Jasa Bongkar Keramik", 
  "https://www.betonjayareadymix.com/2019/06/metode-jasa-bongkar-keramik.html": "Metode Jasa Bongkar Keramik"
  
};
// ============================================================
// 📁 JASA BONGKAR TEMBOK - MONEY PAGE
// ============================================================

const urlMappingJasaBongkarTembokFromMoneyMaster1MoneyPage  = {
 "https://www.betonjayareadymix.com/2019/06/harga-jasa-bongkar-tembok.html": "Harga Jasa Bongkar Tembok",  
  "https://www.betonjayareadymix.com/2019/06/jasa-bobok-tembok-per-meter.html": "Jasa Bobok Tembok Per Meter",  
 "https://www.betonjayareadymix.com/2019/06/harga-jasa-bobok-tembok.html": "Harga Jasa Bobok Tembok",  
  "https://www.betonjayareadymix.com/2019/06/jasa-tukang-bobok-tembok.html": "Jasa Tukang Bobok Tembok" 
};
const urlMappingJasaBongkarTembokFromMoneyMaster1MoneyChild  = {
 "https://www.betonjayareadymix.com/2019/06/jasa-bongkar-tembok-terdekat.html": "Jasa Bongkar Tembok Terdekat",
 "https://www.betonjayareadymix.com/2019/06/jasa-bongkar-tembok-jakarta.html": "Jasa Bongkar Tembok Jakarta",
 "https://www.betonjayareadymix.com/2019/06/jasa-bongkar-tembok-bogor.html": "Jasa Bongkar Tembok Bogor",
 "https://www.betonjayareadymix.com/2019/06/jasa-bongkar-tembok-bekasi.html": "Jasa Bongkar Tembok Bekasi",
 "https://www.betonjayareadymix.com/2019/06/jasa-bongkar-tembok-depok.html": "Jasa Bongkar Tembok Depok",
 "https://www.betonjayareadymix.com/2019/06/jasa-bongkar-tembok-tangerang.html": "Jasa Bongkar Tembok Tangerang",
 "https://www.betonjayareadymix.com/2019/06/jasa-bongkar-tembok-karawang.html": "Jasa Bongkar Tembok Karawang",
 "https://www.betonjayareadymix.com/2019/06/jasa-bongkar-tembok-surabaya.html": "Jasa Bongkar Tembok Surabaya"
	
};
const urlMappingHargaJasaBongkarTembokFromMoneyPageMoneyPage1  = {
 "https://www.betonjayareadymix.com/2019/06/harga-jasa-bongkar-tembok-per-meter.html": "Harga Jasa Bongkar Tembok Per Meter"

};
const urlMappingHargaJasaBongkarTembokFromMoneyPageMoneyChild  = {
 "https://www.betonjayareadymix.com/2019/06/harga-jasa-bongkar-tembok-jakarta.html": "Harga Jasa Bongkar Tembok Jakarta", 
 "https://www.betonjayareadymix.com/2019/06/harga-jasa-bongkar-tembok-bogor.html": "Harga Jasa Bongkar Tembok Bogor",
 "https://www.betonjayareadymix.com/2019/06/harga-jasa-bongkar-tembok-bekasi.html": "Harga Jasa Bongkar Tembok Bekasi",
 "https://www.betonjayareadymix.com/2019/06/harga-jasa-bongkar-tembok-depok.html": "Harga Jasa Bongkar Tembok Depok",
 "https://www.betonjayareadymix.com/2019/06/harga-jasa-bongkar-tembok-tangerang.html": "Harga Jasa Bongkar Tembok Tangerang",
 "https://www.betonjayareadymix.com/2019/06/harga-jasa-bongkar-tembok-karawang.html": "Harga Jasa Bongkar Tembok Karawang",
 "https://www.betonjayareadymix.com/2019/06/harga-jasa-bongkar-tembok-surabaya.html": "Harga Jasa Bongkar Tembok Surabaya"

};
const urlMappingJasaBongkarTembokFromMoneyMaster1Variant  = {
 "https://www.betonjayareadymix.com/2019/06/spesifikasi-jasa-bongkar-tembok.html": "Spesifikasi Jasa Bongkar Tembok",  
  "https://www.betonjayareadymix.com/2019/06/metode-jasa-bongkar-tembok.html": "Metode Jasa Bongkar Tembok"
};
// ============================================================
// 📁 JASA BONGKAR DINDING - MONEY PAGE & CHILD
// ============================================================

const urlMappingJasaBongkarDindingFromMoneyMaster1MoneyPage = {
  "https://www.betonjayareadymix.com/2019/06/harga-jasa-bongkar-dinding.html": "Harga Jasa Bongkar Dinding",
  "https://www.betonjayareadymix.com/2019/06/jasa-bongkar-dinding-per-meter.html": "Jasa Bongkar Dinding Per Meter",
  "https://www.betonjayareadymix.com/2019/06/jasa-bongkar-dinding-beton.html": "Jasa Bongkar Dinding Beton"  
  
 };
const urlMappingJasaBongkarDindingFromMoneyMaster1MoneyChild = {
  "https://www.betonjayareadymix.com/2019/06/jasa-bongkar-dinding-terdekat.html": "Harga Jasa Bongkar Terdekat",
  "https://www.betonjayareadymix.com/2019/06/jasa-bongkar-dinding-jakarta.html": "Jasa Bongkar Dinding Jakarta",
  "https://www.betonjayareadymix.com/2019/06/jasa-bongkar-dinding-bogor.html": "Jasa Bongkar Dinding Bogor",
  "https://www.betonjayareadymix.com/2019/06/jasa-bongkar-dinding-depok.html": "Jasa Bongkar Dinding Depok",
  "https://www.betonjayareadymix.com/2019/06/jasa-bongkar-dinding-tangerang.html": "Jasa Bongkar Dinding Tangerang",
  "https://www.betonjayareadymix.com/2019/06/jasa-bongkar-dinding-bekasi.html": "Jasa Bongkar Dinding Bekasi",
  "https://www.betonjayareadymix.com/2019/06/jasa-bongkar-dinding-karawang.html": "Jasa Bongkar Dinding Karawang",
  "https://www.betonjayareadymix.com/2019/06/jasa-bongkar-dinding-surabaya.html": "Jasa Bongkar Dinding Surabaya"
 };
const urlMappingHargaJasaBongkarDindingFromMoneyPageMoneyPage1 = {
  "https://www.betonjayareadymix.com/2019/06/harga-jasa-bongkar-dinding-bata-per-m2.html": "Harga Jasa Bongkar Dinding Bata Per M2"  
};
const urlMappingJasaBongkarDindingFromMoneyMaster1Variant = {
  "https://www.betonjayareadymix.com/2019/06/spesifikasi-jasa-bongkar-dinding.html": "Spesifikasi Jasa Bongkar Dinding",
  "https://www.betonjayareadymix.com/2019/06/metode-jasa-bongkar-dinding.html": "Metode Jasa Bongkar Dinding"
 };
// ============================================================
// 📁 JASA BONGKAR LANTAI - MONEY PAGE & CHILD
// ============================================================

const urlMappingJasaBongkarLantaiFromMoneyMaster1MoneyPage = {
  "https://www.betonjayareadymix.com/2019/06/harga-jasa-bongkar-lantai.html": "Harga Jasa Bongkar Lantai",  
  "https://www.betonjayareadymix.com/2019/06/jasa-bobok-lantai-lama.html": "Jasa Bobok Lantai Lama",  
  "https://www.betonjayareadymix.com/2019/06/jasa-bongkar-lantai-per-meter.html": "Jasa Bongkar Lantai Per Meter",  
  "https://www.betonjayareadymix.com/2019/06/jasa-bongkar-lantai-keramik.html": "Jasa Bongkar Lantai Keramik"
};
const urlMappingHargaJasaBongkarLantaiFromMoneyPageMoneyPage1 = {
  "https://www.betonjayareadymix.com/2019/06/harga-jasa-bobok-lantai-keramik.html": "Harga Jasa Bobok Lantai Keramik",  
  "https://www.betonjayareadymix.com/2019/06/harga-jasa-bobok-lantai.html": "Harga Jasa Bobok Lantai",  
  "https://www.betonjayareadymix.com/2019/06/harga-jasa-bongkar-lantai-beton.html": "Harga Jasa Bongkar Lantai Beton", 

  "https://www.betonjayareadymix.com/2019/06/biaya-jasa-bongkar-lantai-keramik.html": "Biaya Jasa Bongkar Lantai Keramik",  
  "https://www.betonjayareadymix.com/2019/06/harga-jasa-bongkar-lantai-keramik.html": "Harga Jasa Bongkar Lantai Keramik"
  
};
const urlMappingJasaBongkarLantaiFromMoneyMaster1MoneyChild = {
  "https://www.betonjayareadymix.com/2019/06/jasa-bongkar-lantai-terdekat.html": "Jasa Bongkar Lantai Terdekat",
  "https://www.betonjayareadymix.com/2019/06/jasa-bongkar-lantai-jakarta.html": "Jasa Bongkar Lantai Jakarta",
  "https://www.betonjayareadymix.com/2019/06/jasa-bongkar-lantai-bogor.html": "Jasa Bongkar Lantai Bogor",
  "https://www.betonjayareadymix.com/2019/06/jasa-bongkar-lantai-depok.html": "Jasa Bongkar Lantai Depok",
  "https://www.betonjayareadymix.com/2019/06/jasa-bongkar-lantai-tangerang.html": "Jasa Bongkar Lantai Tangerang",
  "https://www.betonjayareadymix.com/2019/06/jasa-bongkar-lantai-bekasi.html": "Jasa Bongkar Lantai Bekasi",
  "https://www.betonjayareadymix.com/2019/06/jasa-bongkar-lantai-karawang.html": "Jasa Bongkar Lantai Karawang",
  "https://www.betonjayareadymix.com/2019/06/jasa-bongkar-lantai-surabaya.html": "Jasa Bongkar Lantai Surabaya"
};
const urlMappingJasaBongkarLantaiFromMoneyMaster1Variant = {
  "https://www.betonjayareadymix.com/2019/06/metode-jasa-bongkar-lantai.html": "Metode Jasa Bongkar Lantai",
  "https://www.betonjayareadymix.com/2019/06/spesifikasi-jasa-bongkar-lantai.html": "Spesifikasi Jasa Bongkar Lantai"
};
// ============================================================
// JASA BONGKAR PLAFON - MONEY PAGE
// 🧠 ENTITY: JASA → TYPE: MONEY_PAGE (bukan MONEY_MASTER)
// Parent: Jasa Bongkar Bangunan (SUB2)
// Intent: Komersial (60%) + Transaksional (40%)
// CTA: Konsultasi, Survey, Hubungi, Estimasi
// Breadcrumb: Home > Jasa Konstruksi > Jasa Bongkar Bangunan > Harga Jasa Bongkar Plafon (4 level)
// ============================================================

const urlMappingJasaBongkarPlafonFromMoneyMaster1MoneyPage = {
  "https://www.betonjayareadymix.com/2019/06/harga-jasa-bongkar-plafon.html": "Harga Jasa Bongkar Plafon",   
  // BONGKAR PLAFON PER JENIS MATERIAL
  "https://www.betonjayareadymix.com/2019/06/jasa-bongkar-plafon-gypsum.html": "Jasa Bongkar Plafon Gypsum",  
  "https://www.betonjayareadymix.com/2019/06/jasa-bongkar-plafon-pvc.html": "Jasa Bongkar Plafon PVC",  
  "https://www.betonjayareadymix.com/2019/06/jasa-bongkar-plafon-grc.html": "Jasa Bongkar Plafon GRC",  
  "https://www.betonjayareadymix.com/2019/06/jasa-bongkar-plafon-kayu.html": "Jasa Bongkar Plafon Kayu"    
};
const urlMappingJasaBongkarPlafonFromMoneyMaster1MoneyChild = {
  "https://www.betonjayareadymix.com/2019/06/jasa-bongkar-plafon-terdekat.html": "Jasa Bongkar Plafon Terdekat",
  "https://www.betonjayareadymix.com/2019/06/jasa-bongkar-plafon-jakarta.html": "Jasa Bongkar Plafon Jakarta",  
  "https://www.betonjayareadymix.com/2019/06/jasa-bongkar-plafon-bekasi.html": "Jasa Bongkar Plafon Bekasi",  
  "https://www.betonjayareadymix.com/2019/06/jasa-bongkar-plafon-tangerang.html": "Jasa Bongkar Plafon Tangerang",  
  "https://www.betonjayareadymix.com/2019/06/jasa-bongkar-plafon-depok.html": "Jasa Bongkar Plafon Depok",  
  "https://www.betonjayareadymix.com/2019/06/jasa-bongkar-plafon-bogor.html": "Jasa Bongkar Plafon Bogor",
  "https://www.betonjayareadymix.com/2019/06/jasa-bongkar-plafon-karawang.html": "Jasa Bongkar Plafon Karawang",
  "https://www.betonjayareadymix.com/2019/06/jasa-bongkar-plafon-surabaya.html": "Jasa Bongkar Plafon Surabaya"  
  
  
  // ============================================================
  // 🟡 SARAN ITEM TAMBAHAN (BELUM AKTIF - PERLU DIBUAT KONTEN)
  // ============================================================
  // "https://www.betonjayareadymix.com/2019/06/jasa-bongkar-plafon-bandung.html": "Jasa Bongkar Plafon Bandung",  
  
};
const urlMappingHargaJasaBongkarPlafonFromMoneyPageMoneyPage1 = {
  "https://www.betonjayareadymix.com/2019/06/harga-jasa-bongkar-rangka-plafon.html": "Harga Jasa Bongkar Rangka Plafon",
  "https://www.betonjayareadymix.com/2019/06/harga-jasa-bongkar-plafon-per-m2.html": "Harga Jasa Bongkar Plafon Per M2",  
   "https://www.betonjayareadymix.com/2019/06/harga-jasa-bongkar-plafon-drop-ceiling.html": "Harga Jasa Bongkar Plafon Drop Ceiling"
};
const urlMappingJasaBongkarPlafonFromMoneyMaster1Variant = {
  "https://www.betonjayareadymix.com/2019/06/spesifikasi-jasa-bongkar-plafon.html": "Spesifikasi Jasa Bongkar Plafon",  
  "https://www.betonjayareadymix.com/2019/06/metode-jasa-bongkar-plafon.html": "Metode Jasa Bongkar Plafon" 
};

// ============================================================
// JASA BONGKAR PARTISI - MONEY PAGE
// 🧠 ENTITY: JASA → TYPE: MONEY_PAGE (bukan MONEY_MASTER)
// Parent: Jasa Bongkar Bangunan (SUB2)
// Intent: Komersial (60%) + Transaksional (40%)
// CTA: Konsultasi, Survey, Hubungi, Estimasi
// Breadcrumb: Home > Jasa Konstruksi > Jasa Bongkar Bangunan > Harga Jasa Bongkar Partisi (4 level)
// ============================================================

const urlMappingJasaBongkarPartisiFromMoneyMaster1MoneyPage = {
  // ============================================================
  // [MONEY_PAGE] - HARGA JASA BONGKAR PARTISI
  // ============================================================
  /*"https://www.betonjayareadymix.com/p/jasa-bongkar-partisi.html": "Jasa Bongkar Partisi",  */
  "https://www.betonjayareadymix.com/2019/06/harga-jasa-bongkar-partisi.html": "Harga Jasa Bongkar Partisi",
  "https://www.betonjayareadymix.com/2019/06/jasa-bongkar-partisi-per-meter.html": "Jasa Bongkar Partisi Per Meter",  
  
  // ============================================================
  //BONGKAR PARTISI PER JENIS MATERIAL
  // ============================================================
  "https://www.betonjayareadymix.com/2019/06/jasa-bongkar-partisi-gypsum.html": "Jasa Bongkar Partisi Gypsum",  
  "https://www.betonjayareadymix.com/2019/06/jasa-bongkar-partisi-kayu.html": "Jasa Bongkar Partisi Kayu",  
  "https://www.betonjayareadymix.com/2019/06/jasa-bongkar-partisi-kaca.html": "Jasa Bongkar Partisi Kaca",  
  "https://www.betonjayareadymix.com/2019/06/jasa-bongkar-partisi-hollow.html": "Jasa Bongkar Partisi Hollow",   
  "https://www.betonjayareadymix.com/2019/06/jasa-bongkar-partisi-kantor.html": "Jasa Bongkar Partisi Kantor",  
   "https://www.betonjayareadymix.com/2019/06/jasa-bongkar-sekat-ruangan.html": "Jasa Bongkar Sekat Ruangan"

};
const urlMappingJasaBongkarPartisiFromMoneyMaster1MoneyChild = {
  // ============================================================
  // [MONEY_CHILD] - BONGKAR PARTISI PER LOKASI
  // ============================================================
  "https://www.betonjayareadymix.com/2019/06/jasa-bongkar-partisi-terdekat.html": "Jasa Bongkar Partisi Terdekat", 
  "https://www.betonjayareadymix.com/2019/06/jasa-bongkar-partisi-jakarta.html": "Jasa Bongkar Partisi Jakarta",  
  "https://www.betonjayareadymix.com/2019/06/jasa-bongkar-partisi-bekasi.html": "Jasa Bongkar Partisi Bekasi",  
  "https://www.betonjayareadymix.com/2019/06/jasa-bongkar-partisi-tangerang.html": "Jasa Bongkar Partisi Tangerang",  
  "https://www.betonjayareadymix.com/2019/06/jasa-bongkar-partisi-depok.html": "Jasa Bongkar Partisi Depok",  
  "https://www.betonjayareadymix.com/2019/06/jasa-bongkar-partisi-bogor.html": "Jasa Bongkar Partisi Bogor",  
  "https://www.betonjayareadymix.com/2019/06/jasa-bongkar-partisi-karawang.html": "Jasa Bongkar Partisi Karawang",  
  "https://www.betonjayareadymix.com/2019/06/jasa-bongkar-partisi-surabaya.html": "Jasa Bongkar Partisi Surabaya"   

};
	
const urlMappingHargaJasaBongkarPartisiFromMoneyPageMoneyPage1 = {
    "https://www.betonjayareadymix.com/2019/06/harga-jasa-bongkar-partisi-per-m2.html": "Harga Jasa Bongkar Partisi Per M2"
};
const urlMappingJasaBongkarPartisiFromMoneyMaster1Variant = {
    "https://www.betonjayareadymix.com/2019/06/spesifikasi-jasa-bongkar-partisi.html": "Spesifikasi Jasa Bongkar Partisi",
    "https://www.betonjayareadymix.com/2019/06/metode-jasa-bongkar-partisi.html": "Metode Jasa Bongkar Partisi"
};
// ============================================================
// JASA BONGKAR PAGAR - MONEY PAGE
// 🧠 ENTITY: JASA → TYPE: MONEY_PAGE (bukan MONEY_MASTER)
// Parent: Jasa Bongkar Bangunan (SUB2)
// Intent: Komersial (60%) + Transaksional (40%)
// CTA: Konsultasi, Survey, Hubungi, Estimasi
// Breadcrumb: Home > Jasa Konstruksi > Jasa Bongkar Bangunan > Harga Jasa Bongkar Pagar (4 level)
// ============================================================

const urlMappingJasaBongkarPagarFromMoneyMaster1MoneyPage = {
  /*"https://www.betonjayareadymix.com/p/jasa-bongkar-pagar.html": "Jasa Bongkar Pagar",  */
  "https://www.betonjayareadymix.com/2019/06/harga-jasa-bongkar-pagar.html": "Harga Jasa Bongkar Pagar",
  "https://www.betonjayareadymix.com/2019/06/jasa-bongkar-pagar-per-meter.html": "Jasa Bongkar Pagar Per Meter",
 
  "https://www.betonjayareadymix.com/2019/06/jasa-bongkar-pagar-besi.html": "Jasa Bongkar Pagar Besi",  
  "https://www.betonjayareadymix.com/2019/06/jasa-bongkar-pagar-beton.html": "Jasa Bongkar Pagar Beton",  
  "https://www.betonjayareadymix.com/2019/06/jasa-bongkar-pagar-kayu.html": "Jasa Bongkar Pagar Kayu",  
  "https://www.betonjayareadymix.com/2019/06/jasa-bongkar-pagar-tembok.html": "Jasa Bongkar Pagar Tembok",  
  "https://www.betonjayareadymix.com/2019/06/jasa-bongkar-pagar-bambu.html": "Jasa Bongkar Pagar Bambu",  
  "https://www.betonjayareadymix.com/2019/06/jasa-bongkar-pagar-rumah.html": "Jasa Bongkar Pagar Rumah",  
  "https://www.betonjayareadymix.com/2019/06/jasa-bongkar-pagar-pabrik.html": "Jasa Bongkar Pagar Pabrik",  
  "https://www.betonjayareadymix.com/2019/06/jasa-bongkar-pagar-pembatas.html": "Jasa Bongkar Pagar Pembatas"
  
  // ============================================================
  // 🟡 SARAN ITEM TAMBAHAN (BELUM AKTIF - PERLU DIBUAT KONTEN)
  // ============================================================
  // "https://www.betonjayareadymix.com/2019/06/harga-bongkar-pagar-per-meter.html": "Harga Bongkar Pagar Per Meter",  
  // "https://www.betonjayareadymix.com/2019/06/jasa-bongkar-pagar-rumah.html": "Jasa Bongkar Pagar Rumah",  
  // "https://www.betonjayareadymix.com/2019/06/jasa-bongkar-pagar-pabrik.html": "Jasa Bongkar Pagar Pabrik",  
};
const urlMappingJasaBongkarPagarFromMoneyMaster1MoneyChild = {
  "https://www.betonjayareadymix.com/2019/06/jasa-bongkar-pagar-terdekat.html": "Jasa Bongkar Pagar Terdekat",  
  "https://www.betonjayareadymix.com/2019/06/jasa-bongkar-pagar-jakarta.html": "Jasa Bongkar Pagar Jakarta",  
  "https://www.betonjayareadymix.com/2019/06/jasa-bongkar-pagar-bekasi.html": "Jasa Bongkar Pagar Bekasi",  
  "https://www.betonjayareadymix.com/2019/06/jasa-bongkar-pagar-tangerang.html": "Jasa Bongkar Pagar Tangerang",  
  "https://www.betonjayareadymix.com/2019/06/jasa-bongkar-pagar-depok.html": "Jasa Bongkar Pagar Depok",  
  "https://www.betonjayareadymix.com/2019/06/jasa-bongkar-pagar-bogor.html": "Jasa Bongkar Pagar Bogor",  
  "https://www.betonjayareadymix.com/2019/06/jasa-bongkar-pagar-karawang.html": "Jasa Bongkar Pagar Karawang",  
  "https://www.betonjayareadymix.com/2019/06/jasa-bongkar-pagar-surabaya.html": "Jasa Bongkar Pagar Surabaya"
};

// ============================================================
// 📁 JASA BUANG PUING - MONEY CHILD (PER LOKASI)
// 🧠 ENTITY: JASA → TYPE: MONEY_CHILD
// Parent: Jasa Bongkar Bangunan (SUB2)
// ============================================================

const urlMappingJasaBuangPuingFromMoneyMasterMoneyChild = {
  // ============================================================
  // [MONEY_CHILD] - JASA BUANG PUING PER LOKASI
  // ============================================================
  "https://www.betonjayareadymix.com/2019/10/jasa-buang-puing-surabaya.html": "Jasa Buang Puing Surabaya",  
  "https://www.betonjayareadymix.com/2019/10/jasa-buang-puing-karawang.html": "Jasa Buang Puing Karawang",  
  "https://www.betonjayareadymix.com/2019/10/jasa-buang-puing-bekasi.html": "Jasa Buang Puing Bekasi",  
  "https://www.betonjayareadymix.com/2019/10/jasa-buang-puing-tangerang.html": "Jasa Buang Puing Tangerang",  
  "https://www.betonjayareadymix.com/2019/10/jasa-buang-puing-depok.html": "Jasa Buang Puing Depok",  
  "https://www.betonjayareadymix.com/2019/10/jasa-buang-puing-bogor.html": "Jasa Buang Puing Bogor",  
  "https://www.betonjayareadymix.com/2019/10/jasa-buang-puing-jakarta.html": "Jasa Buang Puing Jakarta",  
  "https://www.betonjayareadymix.com/2019/10/jasa-buang-puing-terdekat.html": "Jasa Buang Puing Terdekat"  
  
  // ============================================================
  // 🟡 SARAN ITEM TAMBAHAN (BELUM AKTIF - PERLU DIBUAT KONTEN)
  // ============================================================
  // "https://www.betonjayareadymix.com/2019/10/jasa-buang-puing-bandung.html": "Jasa Buang Puing Bandung",  
  // "https://www.betonjayareadymix.com/2019/10/jasa-buang-puing-semarang.html": "Jasa Buang Puing Semarang",  
  // "https://www.betonjayareadymix.com/2019/10/harga-buang-puing-per-truk.html": "Harga Buang Puing Per Truk",   (jika ada konten)
};

// ============================================================
// 📁 JASA PERBAIKAN ATAP BOCOR - SARAN ITEM (BELUM AKTIF)
// ============================================================

const urlMappingJasaPerbaikanAtapBocorFromSub2MoneyPage = {
  // 🟡 SARAN ITEM (BELUM AKTIF - PERLU DIBUAT KONTEN)
  // "https://www.betonjayareadymix.com/2019/07/harga-perbaikan-atap-bocor.html": "Harga Perbaikan Atap Bocor",  
  // "https://www.betonjayareadymix.com/2019/07/jasa-perbaikan-atap-bocor-jakarta.html": "Jasa Perbaikan Atap Bocor Jakarta",  
};

// ============================================================
// 📁 JASA PERBAIKAN DINDING RETAK - SARAN ITEM (BELUM AKTIF)
// ============================================================

const urlMappingJasaPerbaikanDindingRetakFromSub2MoneyPage = {
  // 🟡 SARAN ITEM (BELUM AKTIF - PERLU DIBUAT KONTEN)
  // "https://www.betonjayareadymix.com/2019/07/harga-perbaikan-dinding-retak.html": "Harga Perbaikan Dinding Retak",  
  // "https://www.betonjayareadymix.com/2019/07/jasa-perbaikan-dinding-retak-jakarta.html": "Jasa Perbaikan Dinding Retak Jakarta",  
};

// ============================================================
// 📁 JASA PERBAIKAN REMBESAN AIR - SARAN ITEM (BELUM AKTIF)
// ============================================================

const urlMappingJasaPerbaikanRembesanAirFromSub2MoneyPage = {
  // 🟡 SARAN ITEM (BELUM AKTIF - PERLU DIBUAT KONTEN)
  // "https://www.betonjayareadymix.com/2019/07/jasa-perbaikan-rembesan-air.html": "Jasa Perbaikan Rembesan Air",  
  // "https://www.betonjayareadymix.com/2019/07/jasa-perbaikan-rembesan-air-jakarta.html": "Jasa Perbaikan Rembesan Air Jakarta",  
};

// ============================================================
// 📁 JASA PERBAIKAN PLAFON RUSAK - SARAN ITEM (BELUM AKTIF)
// ============================================================

const urlMappingJasaPerbaikanPlafonRusakFromSub2MoneyPage = {
  // 🟡 SARAN ITEM (BELUM AKTIF - PERLU DIBUAT KONTEN)
  // "https://www.betonjayareadymix.com/2019/07/harga-perbaikan-plafon-rusak.html": "Harga Perbaikan Plafon Rusak",  
  // "https://www.betonjayareadymix.com/2019/07/jasa-perbaikan-plafon-rusak-jakarta.html": "Jasa Perbaikan Plafon Rusak Jakarta",  
};

// ============================================================
// 📁 JASA PERBAIKAN DAK BETON BOCOR - SARAN ITEM (BELUM AKTIF)
// ============================================================

const urlMappingJasaPerbaikanDakBetonBocorFromSub2MoneyPage = {
  // 🟡 SARAN ITEM (BELUM AKTIF - PERLU DIBUAT KONTEN)
  // "https://www.betonjayareadymix.com/2019/07/jasa-perbaikan-dak-beton-bocor.html": "Jasa Perbaikan Dak Beton Bocor",  
  // "https://www.betonjayareadymix.com/2019/07/jasa-perbaikan-dak-beton-bocor-jakarta.html": "Jasa Perbaikan Dak Beton Bocor Jakarta",  
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
  // "https://www.betonjayareadymix.com/2019/07/harga-perbaikan-talang-bocor.html": "Harga Perbaikan Talang Bocor",   (PERLU DIBUAT)
  // "https://www.betonjayareadymix.com/2019/07/jasa-perbaikan-talang-bocor-jakarta.html": "Jasa Perbaikan Talang Bocor Jakarta",   (PERLU DIBUAT)
  
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
 * ============================================================
 * generateBreadcrumbJasaKonstruksi v12.1
 * FIXED: PARENT TERDEKAT TIDAK PERNAH DI-SKIP (v12.1)
 * FIXED: PILLAR HANYA NAMA YANG SUDAH DITENTUKAN
 * FIXED: SUB-PILLAR-2 & SUB-PILLAR-1 TIDAK JADI MM/MP
 * FIXED: HIERARCHY WAJIB: PILLAR → SP2 → SP1 → MM → MP → MC → VARIANT
 * ============================================================
 *
 * ✅ UPDATE v12.1
 * ------------------------------------------------------------
 * - FIX: Parent terdekat TIDAK PERNAH di-skip (MAIN FIX)
 * - FIX: Hierarchy validator TIDAK menghapus item karena gap
 * - FIX: Force inject TIDAK override dengan entity pillar
 * - FIX: Scoring ditingkatkan untuk parent langsung
 * - FIX: Semua top-level parents diambil (bukan hanya 1)
 *
 * ============================================================
 * @version 12.1.0
 * @date 2026-08-23
 * ============================================================
 */

function generateBreadcrumbJasaBongkarBangunanPost(
    mappingObj,
    currentUrl,
    breadcrumbItems = [],
    entityType = 'PRODUK_KONSTRUKSI'
) {

    // ============================================================
    // 1. GLOBAL CONFIG
    // ============================================================

    const CONFIG = {
        DOMAIN: 'https://www.betonjayareadymix.com',
        DEBUG: true,
        CURRENT_YEAR: new Date().getFullYear()
    };

    // ============================================================
    // 2. LOGGER
    // ============================================================

    function log(message, type = 'INFO') {
        if (!CONFIG.DEBUG && type === 'INFO') return;
        const icons = { 
            INFO: '📘', 
            SUCCESS: '✅', 
            WARN: '⚠️', 
            ERROR: '❌', 
            DEBUG: '🔍', 
            VARIANT: '🔬', 
            PARENT: '👪', 
            URL: '🔗',
            SCORE: '🎯',
            CLEAN: '🧹',
            SKIP: '⏭️',
            PLD: '🔄',
            HIERARCHY: '🏛️'
        };
        console.log(`${icons[type] || '📘'} [Breadcrumb v12.1] ${message}`);
    }

    // ============================================================
    // 3. ENTITY NORMALIZATION
    // ============================================================

    const ENTITY_TYPE_MAP = {
        'JASA': 'JASA_KONSTRUKSI',
        'JASA_KONSTRUKSI': 'JASA_KONSTRUKSI',
        'JASA_DESAIN': 'JASA_DESAIN',
        'JASA_INTERIOR': 'JASA_KONSTRUKSI',
        'JASA_DESAIN_INTERIOR': 'JASA_DESAIN',
        'SEWA': 'SEWA_ALAT_KONSTRUKSI',
        'RENTAL': 'SEWA_ALAT_KONSTRUKSI',
        'SEWA_ALAT': 'SEWA_ALAT_KONSTRUKSI',
        'RENTAL_ALAT': 'SEWA_ALAT_KONSTRUKSI',
        'SEWA_RENTAL': 'SEWA_ALAT_KONSTRUKSI',
        'SEWA_ALAT_KONSTRUKSI': 'SEWA_ALAT_KONSTRUKSI',
        'PRODUK': 'PRODUK_KONSTRUKSI',
        'PRODUK_KONSTRUKSI': 'PRODUK_KONSTRUKSI',
        'PRODUK_INTERIOR': 'PRODUK_INTERIOR',
        'MATERIAL': 'MATERIAL_KONSTRUKSI',
        'MATERIAL_KONSTRUKSI': 'MATERIAL_KONSTRUKSI',
        'ARTIKEL': 'ARTIKEL'
    };

    entityType = ENTITY_TYPE_MAP[entityType] || entityType;

    // ============================================================
    // 4. VALID ENTITY TYPES
    // ============================================================

    const VALID_ENTITY_TYPES = [
        'JASA_KONSTRUKSI',
        'JASA_DESAIN',
        'SEWA_ALAT_KONSTRUKSI',
        'PRODUK_KONSTRUKSI',
        'PRODUK_INTERIOR',
        'MATERIAL_KONSTRUKSI',
        'ARTIKEL'
    ];

    // ============================================================
    // 5. VALID LEVELS
    // ============================================================

    const VALID_LEVELS = [
        'home', 'pillar', 'sub-pillar-tipe-2', 'sub-pillar-tipe-1',
        'money-master', 'money-page', 'money-child', 'variant', 'sub-variant'
    ];

    // ============================================================
    // 6. HIERARCHY ORDER (WAJIB - TIDAK BOLEH DIUBAH)
    // ============================================================

    const HIERARCHY_ORDER = [
        'home',
        'pillar',
        'sub-pillar-tipe-2',
        'sub-pillar-tipe-1',
        'money-master',
        'money-page',
        'money-child',
        'variant',
        'sub-variant'
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
    // 7. ENTITY PILLAR NAMES (HANYA INI YANG BISA JADI PILLAR)
    // ============================================================

    const ENTITY_PILLAR_NAMES = {
        'JASA_KONSTRUKSI': ['jasa konstruksi'],
        'JASA_DESAIN': ['jasa desain interior'],
        'SEWA_ALAT_KONSTRUKSI': ['sewa alat konstruksi', 'rental alat konstruksi'],
        'PRODUK_KONSTRUKSI': ['produk konstruksi'],
        'PRODUK_INTERIOR': ['produk interior', 'interior produk'],
        'MATERIAL_KONSTRUKSI': ['material konstruksi', 'bahan konstruksi'],
        'ARTIKEL': ['artikel konstruksi', 'blog konstruksi', 'tips konstruksi']
    };

    // ============================================================
    // 8. PLD ENTITY MAP
    // ============================================================

    const PLD_ENTITY_MAP = {
        'produk': 'PRODUK_KONSTRUKSI',
        'material': 'MATERIAL_KONSTRUKSI',
        'jasa': 'JASA_KONSTRUKSI',
        'desain': 'JASA_DESAIN',
        'sewa': 'SEWA_ALAT_KONSTRUKSI',
        'artikel': 'ARTIKEL'
    };

    // ============================================================
    // 9. GET PAGE LEVEL FROM PLD
    // ============================================================

    function getPageLevelFromPLD() {
        const pldVersions = [
            'pageLevelDetectorv22',
            'pageLevelDetectorv20', 
            'pageLevelDetectorv19',
            'pageLevelDetectorV18',
            'pageLevelDetectorV17',
            'pageLevelDetector'
        ];
        
        for (const pldName of pldVersions) {
            if (window[pldName] && typeof window[pldName].detect === 'function') {
                try {
                    const level = window[pldName].detect();
                    if (level && VALID_LEVELS.includes(level)) {
                        log(`PLD ${pldName}: "${level}" (${TYPE_LEVEL_MAP[level]})`, 'PLD');
                        return level;
                    }
                } catch(e) {
                    log(`Error calling ${pldName}: ${e.message}`, 'WARN');
                }
            }
        }
        
        const bodyLevel = document.body.getAttribute('data-page-level') || 
                          document.body.getAttribute('data-schema-page-level');
        if (bodyLevel && VALID_LEVELS.includes(bodyLevel)) {
            log(`PLD from body: "${bodyLevel}" (${TYPE_LEVEL_MAP[bodyLevel]})`, 'PLD');
            return bodyLevel;
        }
        
        log('PLD not available, using fallback', 'WARN');
        return null;
    }

    function getEntityTypeFromPLD() {
        const pldVersions = [
            'pageLevelDetectorv22',
            'pageLevelDetectorv20', 
            'pageLevelDetectorv19',
            'pageLevelDetectorV18',
            'pageLevelDetectorV17',
            'pageLevelDetector'
        ];
        
        for (const pldName of pldVersions) {
            if (window[pldName] && typeof window[pldName].detectEntityType === 'function') {
                try {
                    const entity = window[pldName].detectEntityType();
                    if (entity && PLD_ENTITY_MAP[entity]) {
                        log(`PLD Entity: ${entity} → ${PLD_ENTITY_MAP[entity]}`, 'PLD');
                        return PLD_ENTITY_MAP[entity];
                    }
                } catch(e) {
                    log(`Error getting entity from ${pldName}: ${e.message}`, 'WARN');
                }
            }
        }
        
        const bodyEntity = document.body.getAttribute('data-entity-type');
        if (bodyEntity && PLD_ENTITY_MAP[bodyEntity]) {
            log(`Entity from body: ${bodyEntity} → ${PLD_ENTITY_MAP[bodyEntity]}`, 'PLD');
            return PLD_ENTITY_MAP[bodyEntity];
        }
        
        return null;
    }

    // ============================================================
    // 10. HELPERS
    // ============================================================

    function isJasaEntity() { return entityType === 'JASA_KONSTRUKSI'; }
    function isDesainEntity() { return entityType === 'JASA_DESAIN'; }
    function isSewaEntity() { return entityType === 'SEWA_ALAT_KONSTRUKSI'; }
    function isProdukEntity() { return entityType === 'PRODUK_KONSTRUKSI'; }
    function isMaterialEntity() { return entityType === 'MATERIAL_KONSTRUKSI'; }
    function isInteriorEntity() { return entityType === 'PRODUK_INTERIOR'; }

    // ============================================================
    // 11. CLEAN TEXT
    // ============================================================

    function cleanText(text) {
        if (!text) return '';
        return text.replace(/\s+/g, ' ').trim();
    }

    // ============================================================
    // 12. CLEAN PAGE NAME FROM URL
    // ============================================================

    function getCleanPageNameFromUrl(url) {
        if (!url) return '';

        let path = url;
        path = path.replace(/^https?:\/\/[^\/]+/i, '');
        path = path.split('?')[0];
        path = path.replace(/\.(html|php|asp|jsp)$/i, '');
        
        path = path.replace(/\/\d{4}\/\d{2}\/\d{2}\//g, '/');
        path = path.replace(/\/\d{4}\/\d{2}\//g, '/');
        path = path.replace(/\/\d{4}\//g, '/');
        
        path = path.replace(/^\/p\//, '/');
        path = path.replace(/\/p\//g, '/');
        
        const parts = path.split('/').filter(Boolean);
        let last = parts.pop() || '';
        
        if (!last && parts.length > 0) {
            last = parts.pop() || '';
        }
        
        last = last.replace(/-/g, ' ');
        last = last.replace(/[^a-z0-9\s]/gi, '');
        
        if (last.length < 3 && parts.length > 0) {
            const lastTwo = parts.slice(-2).join(' ');
            if (lastTwo.length > last.length) {
                last = lastTwo;
            }
        }
        
        const cleanResult = cleanText(last.toLowerCase());
        log(`Cleaned URL: "${url}" → "${cleanResult}"`, 'URL');
        
        return cleanResult;
    }

    // ============================================================
    // 13. SLUGIFY
    // ============================================================

    function slugify(text) {
        return cleanText(text)
            .toLowerCase()
            .replace(/[^\w\s-]/g, '')
            .replace(/\s+/g, '-')
            .replace(/--+/g, '-');
    }

    // ============================================================
    // 14. KEYWORDS
    // ============================================================

    const SP1_KEYWORDS = [
        'vs', 'versus', 'perbandingan', 'lebih baik', 'kelebihan', 'kekurangan'
    ];

    const SP2_KEYWORDS = [
        'jenis', 'kategori', 'daftar', 'macam', 'tipe'
    ];

    const INFORMATIONAL_KEYWORDS = [
        'panduan', 'tutorial', 'cara', 'tips', 'apa itu', 'pengertian'
    ];

    const METHOD_KEYWORDS = ['metode', 'cara', 'tahapan', 'langkah', 'analisa'];

    // ============================================================
    // 15. VARIANT KEYWORDS PER ENTITY
    // ============================================================
    
    const VARIANT_KEYWORDS_PRODUK = [
        'spesifikasi', 'spec', 'detail spesifikasi',
        'mutu', 'kualitas', 'quality',
        'ukuran', 'dimensi',
        'grade', 'type', 'tipe', 'model',
        'standar', 'merk', 'brand', 'seri'
    ];

    const VARIANT_KEYWORDS_JASA = [
        'standar pelayanan', 'sop', 'metode kerja',
        'prosedur', 'tahapan', 'cara kerja',
        'durasi', 'waktu pengerjaan', 'garansi',
        'standar pengerjaan'
    ];

    const VARIANT_KEYWORDS_SEWA = [
        'spesifikasi alat', 'kapasitas alat',
        'spek alat', 'detail alat', 'spesifikasi'
    ];

    const TECHNICAL_SPECS = ['k225', 'k250', 'k300', 'k350', 'k400', 'k500', 'k600', 'fc', 'm6', 'm8', 'm10', 'm12'];
    
    const SPECIFIC_MODIFIERS = [
        'k225', 'k250', 'k300', 'm6', 'm8', 'm10',
        'diesel', 'hidrolik', 'mini pile', 'sheet pile', 'drop hammer',
        'breaker', 'long arm', 'vibrator', 'per jam', 'per hari',
        'per meter', 'per m2', 'terdekat', 'murah', 'kapasitas besar'
    ];

    // ============================================================
    // 16. JASA CLEAN FUNCTION
    // ============================================================

    const JASA_ULTRA_COMMON_WORDS = new Set([
        'jasa', 'kontraktor', 'tukang', 'borongan', 'renovasi',
        'pasang', 'bangun', 'perbaikan', 'instalasi', 'proyek',
        'cor', 'gali', 'urug', 'angkut', 'service', 'servis',
        'desain'
    ]);

    const STOPWORDS = new Set([
        'dan', 'atau', 'serta', 'yang', 'dari', 'ke', 'di', 'untuk', 
        'dengan', 'ini', 'itu', 'akan', 'telah', 'sudah', 'masih',
        'pada', 'oleh', 'karena', 'sehingga', 'setelah', 'sebelum',
        'plus', 'minus', 'tanpa', 'sampai', 'hingga', 'sambil'
    ]);

    const MATERIAL_SPEC_WORDS = new Set([
        'baja ringan', 'baja', 'ringan', 'beton', 'readymix', 
        'kanstin', 'pembatas', 'pengaman', 'struktur', 'dinding',
        'pondasi', 'atap', 'genteng', 'keramik', 'marmer', 'granit',
        'plafon', 'gypsum', 'partisi', 'dak', 'cor', 'pile', 'sheet',
        'tiang', 'balok', 'kolom', 'sloof', 'ring', 'balk', 'kuda-kuda',
        'drainase', 'irigasi', 'box culvert', 'u ditch', 'paving',
        'konstruksi', 'rangka', 'material', 'upah', 'tenaga'
    ]);

    const MODIFIER_WORDS = new Set([
        'murah', 'profesional', 'berkualitas', 'terbaik', 'spesialis',
        'ahli', 'berpengalaman', 'resmi', 'terpercaya', 'ekonomis',
        'cepat', 'tepat', 'garansi', 'kualitas', 'harga', 'biaya',
        'tarif', 'ongkos', 'estimasi', 'perhitungan', 'analisa',
        'modern', 'minimalis', 'mewah', 'klasik', 'tradisional',
        'kontemporer', 'sederhana', 'elegan', 'premium', 'luxury'
    ]);

    function cleanJasaText(text) {
        if (!text) return '';
        
        let cleaned = text.toLowerCase();
        
        for (const kw of JASA_ULTRA_COMMON_WORDS) {
            cleaned = cleaned.replace(new RegExp(`\\b${kw}\\b`, 'g'), ' ');
        }
        
        for (const sw of STOPWORDS) {
            cleaned = cleaned.replace(new RegExp(`\\b${sw}\\b`, 'g'), ' ');
        }
        
        cleaned = cleaned.replace(/\s+/g, ' ').trim();
        
        log(`Clean JASA: "${text}" → "${cleaned}"`, 'CLEAN');
        
        return cleaned;
    }

    function countCoreWords(text) {
        if (!text) return 0;
        const words = text.toLowerCase().split(/\s+/).filter(w => w.length >= 2);
        return words.length;
    }

    function hasModifier(text) {
        if (!text) return false;
        const lower = text.toLowerCase();
        for (const mod of MODIFIER_WORDS) {
            if (lower.includes(mod)) return true;
        }
        return false;
    }

    function isSpecificJasa(text) {
        if (!text) return false;
        const lower = text.toLowerCase();
        if (/\d/.test(lower)) return true;
        if (/(k225|k250|k300|k350|k400|k500|k600|m6|m8|m10|m12|sn|sni)/i.test(lower)) return true;
        const specWords = ['spesifikasi', 'mutu', 'dimensi', 'ukuran', 'standar', 'grade', 'tipe', 'type'];
        for (const sw of specWords) {
            if (lower.includes(sw)) return true;
        }
        return false;
    }

    function hasMaterialSpec(text) {
        if (!text) return false;
        const lower = text.toLowerCase();
        for (const kw of MATERIAL_SPEC_WORDS) {
            if (lower.includes(kw)) return true;
        }
        return false;
    }

    // ============================================================
    // 17. DETEKSI JASA LEVEL OTOMATIS
    // ============================================================

    function detectJasaLevelAuto(pageName) {
        const lowerName = pageName.toLowerCase();
        
        const cleaned = cleanJasaText(lowerName);
        
        const remainingWords = cleaned.split(/\s+/).filter(w => w.length >= 2);
        const wordCount = remainingWords.length;
        
        const hasNumber = /\d/.test(cleaned);
        const hasLocation = isLocation(cleaned);
        const hasModifierWord = hasModifier(cleaned);
        const hasMaterialSpecWord = hasMaterialSpec(cleaned);
        
        log(`Auto detect JASA: "${pageName}" → remaining: "${cleaned}", words: ${wordCount}`, 'DEBUG');
        
        if (wordCount <= 1 && !hasNumber && !hasLocation && !hasModifierWord && !hasMaterialSpecWord) {
            log(`MM detected (auto): "${pageName}" → remaining words: ${wordCount}`, 'SUCCESS');
            return 'money-master';
        }
        
        log(`MP detected (auto): "${pageName}" → remaining words: ${wordCount}`, 'INFO');
        return 'money-page';
    }

    // ============================================================
    // 18. VARIANT DETECTION PER ENTITY
    // ============================================================
    
    function isVariantPage(pageName, currentEntityType) {
        const lowerName = pageName.toLowerCase();
        
        for (const spec of TECHNICAL_SPECS) {
            if (lowerName.includes(spec)) {
                return false;
            }
        }
        
        if (currentEntityType === 'PRODUK_KONSTRUKSI' || currentEntityType === 'MATERIAL_KONSTRUKSI') {
            for (const kw of VARIANT_KEYWORDS_PRODUK) {
                if (lowerName.includes(kw)) {
                    log(`Variant detected (PRODUK/MATERIAL): "${pageName}" contains "${kw}"`, 'VARIANT');
                    return true;
                }
            }
        }
        
        if (currentEntityType === 'JASA_KONSTRUKSI' || currentEntityType === 'JASA_DESAIN') {
            for (const kw of VARIANT_KEYWORDS_JASA) {
                if (lowerName.includes(kw)) {
                    log(`Variant detected (JASA/DESAIN): "${pageName}" contains "${kw}"`, 'VARIANT');
                    return true;
                }
            }
            return false;
        }
        
        if (currentEntityType === 'SEWA_ALAT_KONSTRUKSI') {
            for (const kw of VARIANT_KEYWORDS_SEWA) {
                if (lowerName.includes(kw)) {
                    log(`Variant detected (SEWA): "${pageName}" contains "${kw}"`, 'VARIANT');
                    return true;
                }
            }
            if (lowerName.includes('spesifikasi') && (lowerName.includes('alat') || lowerName.includes('excavator') || lowerName.includes('dump') || lowerName.includes('alat berat'))) {
                log(`Variant detected (SEWA): "${pageName}" contains spesifikasi + alat`, 'VARIANT');
                return true;
            }
            return false;
        }
        
        return false;
    }

    // ============================================================
    // 19. LOCATION DETECTION
    // ============================================================

    const LOCATION_WHITELIST = new Set([
        'jakarta', 'jakarta pusat', 'jakarta barat', 'jakarta selatan', 'jakarta timur', 'jakarta utara',
        'bogor', 'kota bogor', 'kabupaten bogor',
        'depok', 'kota depok',
        'tangerang', 'kota tangerang', 'kota tangerang selatan', 'kabupaten tangerang',
        'bekasi', 'kota bekasi', 'kabupaten bekasi',
        'bandung', 'kota bandung', 'kabupaten bandung',
        'karawang', 'kabupaten karawang',
        'purwakarta', 'kabupaten purwakarta',
        'cikarang', 'cikarang barat', 'cikarang pusat', 'cikarang selatan', 'cikarang timur', 'cikarang utara',
        'subang', 'kabupaten subang',
        'cirebon', 'kota cirebon', 'kabupaten cirebon',
        'semarang', 'kota semarang', 'kabupaten semarang',
        'solo', 'surakarta', 'kota surakarta',
        'pekalongan', 'tegal', 'magelang', 'sukoharjo', 'boyolali', 'klaten',
        'jogja', 'yogyakarta', 'kota yogyakarta', 'kabupaten sleman', 'bantul', 'gunungkidul', 'kulon progo',
        'surabaya', 'kota surabaya',
        'malang', 'kota malang', 'kabupaten malang',
        'kediri', 'kota kediri', 'kabupaten kediri',
        'gresik', 'sidoarjo', 'mojokerto', 'pasuruan', 'probolinggo', 'jember', 'banyuwangi', 'madiun',
        'medan', 'kota medan',
        'palembang', 'pekanbaru', 'padang', 'lampung', 'bandar lampung', 'batam', 'tanjungpinang',
        'aceh', 'banda aceh', 'jambi', 'bengkulu', 'pangkal pinang',
        'pontianak', 'balikpapan', 'samarinda', 'banjarmasin', 'palangkaraya',
        'makassar', 'kota makassar',
        'manado', 'palu', 'kendari', 'gorontalo',
        'bali', 'kabupaten badung', 'kota denpasar', 'denpasar', 'gianyar', 'tabanan', 'bangli', 'karangasem', 'klungkung', 'buleleng', 'jembrana',
        'mataram', 'kupang',
        'terdekat'
    ]);

    function isLocation(text) {
        if (!text) return false;
        const lower = text.toLowerCase();
        for (const city of LOCATION_WHITELIST) {
            if (new RegExp(`\\b${city.replace(/\s+/g, '\\s+')}\\b`, 'i').test(lower)) {
                return true;
            }
        }
        return false;
    }

    // ============================================================
    // 20. SPECIFIC PRODUCT
    // ============================================================

    function isSpecificProduct(text) {
        if (!text) return false;
        const lower = text.toLowerCase();
        for (const mod of SPECIFIC_MODIFIERS) {
            if (lower.includes(mod)) return true;
        }
        return /\d/.test(lower);
    }

    // ============================================================
    // 21. SUB VARIANT
    // ============================================================

    function isSubVariant(text) {
        if (!text) return false;
        let score = 0;
        if ((text.match(/\d+/g) || []).length >= 3) score++;
        if ((text.match(/x/g) || []).length >= 2) score++;
        if (/mm|cm|meter|kg|ton/i.test(text)) score++;
        return score >= 2;
    }

    // ============================================================
    // 22. ENTITY PILLAR EXACT MATCH (FIX v12.0)
    // ============================================================

    function isEntityPillarExactMatch(pageName) {
        const cleanName = cleanText(pageName.toLowerCase());
        const valid = ENTITY_PILLAR_NAMES[entityType] || [];
        return valid.includes(cleanName);
    }

    // ============================================================
    // 23. JASA KEYWORDS
    // ============================================================

    const JASA_KEYWORDS_PATTERN = 
        /\b(jasa|kontraktor|tukang|borongan|renovasi|pasang|bangun|perbaikan|instalasi|proyek|cor|gali|urug|angkut|desain|interior|eksterior|arsitektur|gedung|rumah|ruko|kantor|apartemen)\b/i;

    // ============================================================
    // 24. PAGE TYPE DETECTION (FIX v12.0)
    // ============================================================

    function detectPageTypeFallback(pageName, isHome = false) {
        const lowerName = cleanText(pageName.toLowerCase());

        if (isHome || lowerName === 'home' || lowerName === 'beranda') return 'home';
        
        // 🔥 FIX v12.0: PILLAR hanya nama yang sudah ditentukan
        if (isEntityPillarExactMatch(lowerName)) {
            log(`PILLAR detected (exact match): "${pageName}"`, 'HIERARCHY');
            return 'pillar';
        }
        
        // 🔥 FIX v12.0: Cek apakah ini PILLAR berdasarkan ENTITY_PILLAR_NAMES lain
        for (const [entity, names] of Object.entries(ENTITY_PILLAR_NAMES)) {
            if (names.some(name => lowerName === name)) {
                log(`PILLAR detected (other entity): "${pageName}" → ${entity}`, 'HIERARCHY');
                return 'pillar';
            }
        }
        
        // 🔥 FIX v12.0: SUB-VARIANT
        if (isSubVariant(lowerName)) {
            log(`SUB-VARIANT detected: "${pageName}"`, 'HIERARCHY');
            return 'sub-variant';
        }

        // 🔥 FIX v12.0: VARIANT
        if (isVariantPage(lowerName, entityType)) {
            log(`VARIANT detected: "${pageName}"`, 'HIERARCHY');
            return 'variant';
        }

        // 🔥 FIX v12.0: SUB-PILLAR-1 (perbandingan)
        for (const kw of SP1_KEYWORDS) {
            if (lowerName.includes(kw)) {
                log(`SUB-PILLAR-1 detected: "${pageName}"`, 'HIERARCHY');
                return 'sub-pillar-tipe-1';
            }
        }
        
        // 🔥 FIX v12.0: SUB-PILLAR-2 (daftar/jenis)
        for (const kw of SP2_KEYWORDS) {
            if (lowerName.includes(kw)) {
                log(`SUB-PILLAR-2 detected: "${pageName}"`, 'HIERARCHY');
                return 'sub-pillar-tipe-2';
            }
        }

        // 🔥 FIX v12.0: MONEY CHILD (lokasi)
        if (isLocation(lowerName)) {
            log(`MONEY-CHILD detected (location): "${pageName}"`, 'HIERARCHY');
            return 'money-child';
        }

        // 🔥 FIX v12.0: MONEY PAGE (harga)
        const HAS_PRICE_WORD = /\b(harga|biaya|tarif)\b/i.test(lowerName);
        if (HAS_PRICE_WORD) {
            const cleaned = lowerName.replace(/\b(harga|biaya|tarif)\b/gi, '').trim();
            const words = cleaned.split(/\s+/).filter(Boolean);
            const specific = isSpecificProduct(cleaned);
            if (words.length <= 2 && !specific && !isLocation(cleaned)) {
                log(`MONEY-MASTER detected (price + short): "${pageName}"`, 'HIERARCHY');
                return 'money-master';
            }
            log(`MONEY-PAGE detected (price): "${pageName}"`, 'HIERARCHY');
            return 'money-page';
        }

        // 🔥 FIX v12.0: JASA Auto Detect
        const HAS_JASA_WORD = JASA_KEYWORDS_PATTERN.test(lowerName);
        if ((isJasaEntity() || isDesainEntity()) && HAS_JASA_WORD) {
            const result = detectJasaLevelAuto(lowerName);
            log(`JASA auto detect: "${pageName}" → ${result}`, 'HIERARCHY');
            return result;
        }

        // 🔥 FIX v12.0: SEWA Auto Detect
        if (isSewaEntity()) {
            const HAS_SEWA_WORD = /\b(sewa|rental)\b/i.test(lowerName);
            if (HAS_SEWA_WORD) {
                const cleaned = lowerName.replace(/\b(sewa|rental)\b/gi, '').trim();
                const words = cleaned.split(/\s+/).filter(Boolean);
                const specific = isSpecificProduct(cleaned);
                if (words.length <= 2 && !specific && !isLocation(cleaned)) {
                    log(`MONEY-MASTER detected (sewa + short): "${pageName}"`, 'HIERARCHY');
                    return 'money-master';
                }
                log(`MONEY-PAGE detected (sewa): "${pageName}"`, 'HIERARCHY');
                return 'money-page';
            }
        }

        // 🔥 FIX v12.0: PRODUK/MATERIAL
        if (isProdukEntity() || isMaterialEntity()) {
            const words = lowerName.split(/\s+/).filter(Boolean);
            if (words.length <= 2 && !isSpecificProduct(lowerName)) {
                log(`MONEY-MASTER detected (produk + short): "${pageName}"`, 'HIERARCHY');
                return 'money-master';
            }
            log(`MONEY-PAGE detected (produk): "${pageName}"`, 'HIERARCHY');
            return 'money-page';
        }

        // 🔥 FIX v12.0: DEFAULT - MONEY_MASTER
        log(`DEFAULT MONEY-MASTER: "${pageName}"`, 'HIERARCHY');
        return 'money-master';
    }

    // ============================================================
    // 25. AUTO DETECT PARENT (FIX v12.1 - TIDAK PERNAH SKIP)
    // ============================================================

    function findNearestParentFromItems(items, currentPageName) {
        if (!items || items.length === 0) return null;

        const currentLower = currentPageName.toLowerCase();
        const currentWords = currentLower.split(/\s+/);
        const currentLevel = TYPE_LEVEL_MAP[detectPageTypeFallback(currentPageName)] || 99;

        let bestMatch = null;
        let bestScore = 0;
        let bestLevelDiff = Infinity;

        for (const item of items) {
            const itemName = item.name?.toLowerCase() || '';
            if (itemName === currentLower) continue;

            const itemLevel = item.level || TYPE_LEVEL_MAP[detectPageTypeFallback(itemName)] || 99;
            
            // 🔥 FIX v12.1: Parent harus memiliki level yang lebih rendah (LEBIH TINGGI dalam hierarchy)
            // home(0) < pillar(1) < sp2(2) < sp1(3) < mm(4) < mp(5) < mc(6) < variant(7)
            if (itemLevel >= currentLevel) {
                log(`⏭️ SKIP: "${itemName}" (level ${itemLevel}) not higher than current (${currentLevel})`, 'SKIP');
                continue;
            }

            let score = 0;

            // Exact match dalam teks
            if (currentLower.includes(itemName) && itemName.length > 3) {
                score += itemName.length * 10;
            }

            // Word overlap
            const itemWords = itemName.split(/\s+/);
            for (const word of currentWords) {
                if (word.length > 2 && itemWords.includes(word)) {
                    score += 5;
                }
            }

            // Prefix match
            for (let i = 1; i <= currentWords.length; i++) {
                const prefix = currentWords.slice(0, i).join(' ');
                if (itemName === prefix) {
                    score += 100;
                    break;
                }
            }

            // URL slug match
            if (item.url) {
                const urlSlug = item.url.split('/').pop()?.replace('.html', '').replace(/-/g, ' ');
                if (urlSlug && currentLower.includes(urlSlug)) {
                    score += 50;
                }
            }

            // Semantic match
            const semanticGroups = {
                'pagar': ['pagar', 'pagar panel', 'pagar beton', 'panel beton'],
                'pondasi': ['pondasi', 'tiang', 'pile', 'bored pile', 'strauss pile'],
                'cor': ['cor', 'readymix', 'ready mix', 'beton cor'],
                'bangunan': ['bangunan', 'gedung', 'rumah', 'ruko', 'kantor'],
                'interior': ['interior', 'dalam', 'ruangan', 'finishing'],
                'eksterior': ['eksterior', 'luar', 'fasad', 'taman']
            };
            
            for (const [group, keywords] of Object.entries(semanticGroups)) {
                const hasCurrent = keywords.some(kw => currentLower.includes(kw));
                const hasItem = keywords.some(kw => itemName.includes(kw));
                if (hasCurrent && hasItem) {
                    score += 20;
                }
            }

            // 🔥 FIX v12.1: Level difference bonus (semakin dekat levelnya, semakin baik)
            const levelDiff = currentLevel - itemLevel;
            if (levelDiff > 0 && levelDiff <= 2) {
                score += (3 - levelDiff) * 15; // diff 1 → +30, diff 2 → +15
            }

            // 🔥 FIX v12.1: Priority berdasarkan level
            if (itemLevel < bestLevelDiff) {
                bestLevelDiff = itemLevel;
            }

            log(`Score for "${itemName}" (level ${itemLevel}): ${score} (diff: ${levelDiff})`, 'SCORE');

            if (score > bestScore) {
                bestScore = score;
                bestMatch = item;
            }
        }

        // 🔥 FIX v12.1: Jika tidak ada match dengan score > 20, ambil yang levelnya paling tinggi (terdekat)
        if (!bestMatch || bestScore <= 20) {
            const sortedByLevel = [...items]
                .filter(item => {
                    const itemName = item.name?.toLowerCase() || '';
                    if (itemName === currentLower) return false;
                    const itemLevel = item.level || TYPE_LEVEL_MAP[detectPageTypeFallback(itemName)] || 99;
                    return itemLevel < currentLevel;
                })
                .sort((a, b) => {
                    const levelA = a.level || TYPE_LEVEL_MAP[detectPageTypeFallback(a.name)] || 99;
                    const levelB = b.level || TYPE_LEVEL_MAP[detectPageTypeFallback(b.name)] || 99;
                    return levelB - levelA; // level tertinggi dulu (terdekat)
                });
            
            if (sortedByLevel.length > 0) {
                bestMatch = sortedByLevel[0];
                log(`⚠️ FALLBACK parent: "${bestMatch.name}" (level ${bestMatch.level || 'unknown'})`, 'WARN');
            }
        }

        log(`Parent detection result: "${bestMatch?.name || 'none'}" with score ${bestScore}`, 'PARENT');
        return bestMatch;
    }

    function injectCurrentPageAndParent(breadcrumbItems, currentPageName, currentFullUrl) {
        let items = [...breadcrumbItems];
        const currentLower = currentPageName.toLowerCase();

        const hasCurrent = items.some(item => 
            item.name?.toLowerCase() === currentLower
        );

        if (!hasCurrent) {
            items.push({
                name: currentPageName,
                url: currentFullUrl
            });
        }

        // 🔥 FIX v12.1: SELALU cari parent, JANGAN PERNAH SKIP
        const detectedParent = findNearestParentFromItems(items, currentPageName);

        if (detectedParent) {
            const hasParent = items.some(item => 
                item.name?.toLowerCase() === detectedParent.name?.toLowerCase()
            );

            if (!hasParent) {
                log(`✅ AUTO-INJECTED PARENT: "${detectedParent.name}" → "${currentPageName}"`, 'SUCCESS');
                const currentIndex = items.findIndex(item => 
                    item.name?.toLowerCase() === currentLower
                );
                if (currentIndex > -1) {
                    items.splice(currentIndex, 0, detectedParent);
                } else {
                    items.push(detectedParent);
                }
            } else {
                log(`Parent already exists: "${detectedParent.name}"`, 'INFO');
            }
        } else {
            // 🔥 FIX v12.1: Jika tidak ada parent, coba cari dari entity pillar
            const entityPillarNames = ENTITY_PILLAR_NAMES[entityType] || [];
            if (entityPillarNames.length > 0) {
                const pillarName = entityPillarNames[0];
                const pillarExists = items.some(item => 
                    item.name?.toLowerCase() === pillarName
                );
                if (!pillarExists) {
                    items.unshift({
                        name: pillarName,
                        url: `${CONFIG.DOMAIN}/p/${slugify(pillarName)}.html`
                    });
                    log(`✅ INJECTED ENTITY PILLAR: "${pillarName}"`, 'SUCCESS');
                }
            }
        }

        return items;
    }

    // ============================================================
    // 26. FORCE PARENT INJECTION (FIX v12.1 - TIDAK OVERRIDE)
    // ============================================================

    function forceInjectDirectParent(lineageLevels, allLevels, currentPageTitle, entityType, breadcrumbItems) {
        const currentLower = currentPageTitle.toLowerCase();
        let modifiedLineage = [...lineageLevels];
        const words = currentLower.split(/\s+/);

        // 🔥 FIX v12.1: Cari parent terdekat dari breadcrumbItems
        const autoParent = findNearestParentFromItems(breadcrumbItems, currentPageTitle);
        if (autoParent && !modifiedLineage.some(l => l.name?.toLowerCase() === autoParent.name?.toLowerCase())) {
            const parentFromAll = allLevels.find(item => 
                item.name?.toLowerCase() === autoParent.name?.toLowerCase()
            );
            if (parentFromAll) {
                log(`✅ AUTO PARENT FROM ITEMS: "${parentFromAll.name}" (level ${parentFromAll.level})`, 'SUCCESS');
                modifiedLineage.push(parentFromAll);
            } else {
                // Buat parent baru
                const newParent = {
                    name: autoParent.name,
                    url: autoParent.url || `${CONFIG.DOMAIN}/p/${slugify(autoParent.name)}.html`,
                    type: detectPageTypeFallback(autoParent.name),
                    level: TYPE_LEVEL_MAP[detectPageTypeFallback(autoParent.name)] || 99,
                    position: modifiedLineage.length + 1
                };
                log(`✅ AUTO PARENT (new): "${newParent.name}" (level ${newParent.level})`, 'SUCCESS');
                modifiedLineage.push(newParent);
            }
        }

        // 🔥 FIX v12.1: Jika masih kosong, coba dari kata pertama
        if (modifiedLineage.length === lineageLevels.length && words.length >= 2) {
            for (let i = words.length - 1; i >= 1; i--) {
                const potentialParent = words.slice(0, i).join(' ');
                const parentItem = allLevels.find(item => 
                    item.name?.toLowerCase() === potentialParent
                );
                if (parentItem && !modifiedLineage.some(l => l.name?.toLowerCase() === parentItem.name?.toLowerCase())) {
                    log(`✅ PATTERN PARENT: "${parentItem.name}"`, 'SUCCESS');
                    modifiedLineage.push(parentItem);
                    break;
                }
            }
        }

        // 🔥 FIX v12.1: Jika masih kosong, cari dari semantic groups
        if (modifiedLineage.length === lineageLevels.length) {
            const semanticKeywords = {
                'pagar': ['pagar', 'pagar panel', 'pagar beton', 'panel beton'],
                'pondasi': ['pondasi', 'tiang', 'pile', 'bored pile', 'strauss pile'],
                'cor': ['cor', 'readymix', 'ready mix', 'beton cor'],
                'bangunan': ['bangunan', 'gedung', 'rumah', 'ruko', 'kantor'],
                'interior': ['interior', 'dalam', 'ruangan', 'finishing'],
                'eksterior': ['eksterior', 'luar', 'fasad', 'taman']
            };
            
            for (const [parentKeyword, childKeywords] of Object.entries(semanticKeywords)) {
                const isChildMatch = childKeywords.some(kw => currentLower.includes(kw));
                if (isChildMatch) {
                    const parentItem = allLevels.find(item => 
                        item.name?.toLowerCase().includes(parentKeyword)
                    );
                    if (parentItem && !modifiedLineage.some(l => l.name?.toLowerCase() === parentItem.name?.toLowerCase())) {
                        log(`✅ SEMANTIC PARENT: "${parentItem.name}"`, 'SUCCESS');
                        modifiedLineage.push(parentItem);
                        break;
                    }
                }
            }
        }

        // 🔥 FIX v12.1: HANYA GUNAKAN ENTITY PILLAR JIKA TIDAK ADA PARENT SAMA SEKALI
        // TIDAK OVERRIDE PARENT YANG SUDAH ADA DENGAN ENTITY PILLAR
        if (modifiedLineage.length === 0 || modifiedLineage.every(l => l.name?.toLowerCase() === currentLower)) {
            const entityPillarNames = ENTITY_PILLAR_NAMES[entityType] || [];
            if (entityPillarNames.length > 0) {
                const pillarName = entityPillarNames[0];
                const pillarItem = allLevels.find(item => 
                    item.name?.toLowerCase() === pillarName
                );
                if (pillarItem && !modifiedLineage.some(l => l.name?.toLowerCase() === pillarName)) {
                    log(`✅ ENTITY PILLAR (fallback): "${pillarName}"`, 'WARN');
                    modifiedLineage.push(pillarItem);
                }
            }
        }
        
        return modifiedLineage;
    }

    // ============================================================
    // 27. HIERARCHY VALIDATOR (FIX v12.1 - TIDAK HAPUS GAP)
    // ============================================================
    
    function validateAndFixHierarchy(lineage) {
        if (lineage.length <= 1) return lineage;
        
        const fixed = [];
        const sorted = [...lineage].sort((a, b) => {
            const levelA = a.level || TYPE_LEVEL_MAP[detectPageTypeFallback(a.name)] || 99;
            const levelB = b.level || TYPE_LEVEL_MAP[detectPageTypeFallback(b.name)] || 99;
            return levelA - levelB;
        });
        
        const uniqueNames = new Set();
        for (const item of sorted) {
            const key = item.name?.toLowerCase() || '';
            if (!uniqueNames.has(key)) {
                uniqueNames.add(key);
                // Pastikan levelnya benar
                if (!item.level) {
                    item.level = TYPE_LEVEL_MAP[detectPageTypeFallback(item.name)] || 99;
                }
                fixed.push(item);
            }
        }
        
        // 🔥 FIX v12.1: JANGAN HAPUS ITEM KARENA GAP
        // Jika ada gap, catat warning tapi tetap pertahankan
        for (let i = 1; i < fixed.length; i++) {
            const prevLevel = fixed[i-1].level || TYPE_LEVEL_MAP[detectPageTypeFallback(fixed[i-1].name)] || 99;
            const currLevel = fixed[i].level || TYPE_LEVEL_MAP[detectPageTypeFallback(fixed[i].name)] || 99;
            
            if (currLevel - prevLevel > 2) {
                log(`⚠️ Hierarchy gap detected: ${fixed[i-1].name}(${prevLevel}) → ${fixed[i].name}(${currLevel}) - KEEPING`, 'WARN');
                // 🔥 FIX v12.1: TIDAK HAPUS - tetap pertahankan
            }
        }
        
        return fixed;
    }

    // ============================================================
    // 28. SIMILARITY CALCULATION
    // ============================================================

    function calculateSimilarity(text1, text2) {
        const words1 = text1.toLowerCase().split(/\s+/);
        const words2 = text2.toLowerCase().split(/\s+/);
        
        if (words1.length === 0 || words2.length === 0) return 0;
        
        const commonWords = words1.filter(w => words2.includes(w));
        const union = new Set([...words1, ...words2]);
        const similarity = commonWords.length / union.size;
        
        return similarity;
    }

    // ============================================================
    // 29. GET CURRENT PAGE INFO
    // ============================================================

    const currentFullUrl = currentUrl.startsWith('http')
        ? currentUrl
        : CONFIG.DOMAIN + currentUrl;

    let currentPageTitle = getCleanPageNameFromUrl(currentFullUrl);

    if (!currentPageTitle) {
        currentPageTitle = 'Halaman';
    }

    // ============================================================
    // 30. GET PAGE LEVEL & ENTITY FROM PLD
    // ============================================================

    const pldLevel = getPageLevelFromPLD();
    const pldEntity = getEntityTypeFromPLD();
    
    let finalPageLevel = pldLevel;
    let finalEntityType = entityType;
    
    if (pldEntity && VALID_ENTITY_TYPES.includes(pldEntity)) {
        finalEntityType = pldEntity;
        log(`Entity from PLD: ${pldEntity} (override from ${entityType})`, 'PLD');
    }
    
    entityType = finalEntityType;
    
    const isPLDSynced = !!pldLevel;
    log(`PLD Sync Status: ${isPLDSynced ? '✅ SINKRON' : '❌ FALLBACK'}`, 'PLD');
    if (pldLevel) {
        log(`PLD Level: "${pldLevel}" (${TYPE_LEVEL_MAP[pldLevel]})`, 'PLD');
    }

    // ============================================================
    // 31. INJECT CURRENT PAGE & AUTO PARENT (FIX v12.1)
    // ============================================================

    const enhancedBreadcrumbItems = injectCurrentPageAndParent(
        breadcrumbItems,
        currentPageTitle,
        currentFullUrl
    );

    // ============================================================
    // 32. BUILD ALL LEVELS
    // ============================================================

    const allLevels = [];

    for (let i = 0; i < enhancedBreadcrumbItems.length; i++) {
        const item = enhancedBreadcrumbItems[i];
        let name, url;

        if (typeof item === 'object') {
            name = item.name;
            url = item.url || null;
        } else {
            name = item;
            url = null;
        }

        const type = detectPageTypeFallback(name);
        allLevels.push({
            name,
            url,
            type,
            level: TYPE_LEVEL_MAP[type] || 99,
            position: i + 1
        });
    }

    // ============================================================
    // 33. URL FALLBACK
    // ============================================================

    for (const level of allLevels) {
        if (!level.url) {
            let foundUrl = null;
            if (mappingObj) {
                for (const [url, title] of Object.entries(mappingObj)) {
                    if (title === level.name) {
                        foundUrl = url.startsWith('http') ? url : CONFIG.DOMAIN + url;
                        break;
                    }
                }
            }
            if (!foundUrl) {
                foundUrl = `${CONFIG.DOMAIN}/p/${slugify(level.name)}.html`;
            }
            level.url = foundUrl;
        } else if (!level.url.startsWith('http')) {
            level.url = CONFIG.DOMAIN + level.url;
        }
    }

    // ============================================================
    // 34. CURRENT PAGE TYPE
    // ============================================================

    const currentPageType = pldLevel || detectPageTypeFallback(currentPageTitle);
    log(`Current page: "${currentPageTitle}" → type: ${currentPageType} (level ${TYPE_LEVEL_MAP[currentPageType]})`, 'INFO');

    // ============================================================
    // 35. SELECT BREADCRUMB LEVELS
    // ============================================================

    const selectedLevels = [];

    selectedLevels.push({
        name: 'Beranda',
        url: CONFIG.DOMAIN,
        type: 'home',
        level: 0,
        position: 1
    });

    const uniqueByUrl = new Map();
    for (const item of allLevels) {
        const key = item.url || item.name;
        if (!uniqueByUrl.has(key)) {
            uniqueByUrl.set(key, item);
        }
    }
    const uniqueItems = Array.from(uniqueByUrl.values());

    log('=== ALL LEVELS DEBUG ===', 'DEBUG');
    for (const level of allLevels) {
        log(`  ${level.name} → type: ${level.type}, level: ${level.level}`, 'DEBUG');
    }

    log('Unique items (' + uniqueItems.length + '): ' + uniqueItems.map(i => i.name + '(' + i.level + ')').join(' → '), 'INFO');

    // ============================================================
    // 36. FIND NEAREST PARENTS BY HIERARCHY (FIX v12.1 - TIDAK PERNAH SKIP)
    // ============================================================

    function findNearestParentsByHierarchy() {
        const lineage = [];
        const currentLevel = pldLevel ? TYPE_LEVEL_MAP[pldLevel] : (TYPE_LEVEL_MAP[currentPageType] || 99);
        const currentPageTitleLower = currentPageTitle.toLowerCase();
        
        const candidates = uniqueItems.filter(item => 
            item.name.toLowerCase() !== currentPageTitleLower
        );
        
        if (candidates.length === 0) {
            log('⚠️ No candidates found', 'WARN');
            return lineage;
        }
        
        // 🔥 FIX v12.1: Ambil SEMUA yang levelnya lebih rendah (LEBIH TINGGI)
        // TIDAK ADA FILTER YANG MEMBUANG CANDIDATES
        const validCandidates = candidates.filter(item => item.level < currentLevel);
        
        // 🔥 FIX v12.1: JANGAN PERNAH GUNAKAN "LAST RESORT" yang memaksa entity pillar
        // Entity pillar hanya digunakan jika TIDAK ADA candidates sama sekali
        
        if (validCandidates.length === 0) {
            // 🔥 FIX v12.1: Jika tidak ada candidates, gunakan entity pillar
            const entityPillarNames = ENTITY_PILLAR_NAMES[entityType] || [];
            if (entityPillarNames.length > 0) {
                const pillarName = entityPillarNames[0];
                const pillarItem = uniqueItems.find(item => 
                    item.name.toLowerCase() === pillarName
                );
                if (pillarItem) {
                    lineage.push(pillarItem);
                    log(`✅ ENTITY PILLAR as parent: "${pillarName}"`, 'SUCCESS');
                }
            }
            return lineage;
        }
        
        log('Valid candidates: ' + validCandidates.map(i => i.level + ':' + i.name).join(', '), 'DEBUG');
        
        const currentWords = currentPageTitleLower.split(/\s+/);
        const scoredCandidates = validCandidates.map(item => {
            const itemWords = item.name.toLowerCase().split(/\s+/);
            let relevanceScore = 0;
            
            // Word overlap
            for (const word of currentWords) {
                if (word.length > 2 && itemWords.includes(word)) {
                    relevanceScore += 10;
                }
            }
            
            // 🔥 FIX v12.1: Jika item name ada di current title, score tinggi
            if (currentPageTitleLower.includes(item.name.toLowerCase()) && item.name.length > 3) {
                relevanceScore += 100; // ← DITINGKATKAN DARI 50 MENJADI 100
            }
            
            // 🔥 FIX v12.1: Parent langsung (1 level di atas) → bonus besar
            if (item.level === currentLevel - 1) {
                relevanceScore += 80; // ← DITINGKATKAN DARI 30 MENJADI 80
            }
            
            // 🔥 FIX v12.1: Level diff bonus
            const levelDiff = currentLevel - item.level;
            if (levelDiff > 0 && levelDiff <= 2) {
                relevanceScore += (3 - levelDiff) * 30; // diff 1 → +60, diff 2 → +30
            }
            
            // 🔥 FIX v12.1: Priority untuk level yang lebih tinggi (terdekat)
            const maxLevel = Math.max(...validCandidates.map(c => c.level));
            if (item.level === maxLevel) {
                relevanceScore += 50; // Bonus untuk level tertinggi
            }
            
            log(`🎯 Score for "${item.name}" (level ${item.level}): ${relevanceScore}`, 'SCORE');
            
            return { ...item, relevanceScore };
        });
        
        // Sort by level (descending) then score (descending)
        scoredCandidates.sort((a, b) => {
            if (a.level !== b.level) return b.level - a.level;
            return b.relevanceScore - a.relevanceScore;
        });
        
        log('Scored candidates (sorted): ' + scoredCandidates.map(i => i.level + ':' + i.name + '(' + i.relevanceScore + ')').join(' → '), 'DEBUG');
        
        // 🔥 FIX v12.1: Ambil SEMUA yang memiliki level tertinggi
        const highestLevel = scoredCandidates.length > 0 ? scoredCandidates[0].level : -1;
        const topLevelParents = scoredCandidates.filter(item => item.level === highestLevel);
        
        // 🔥 FIX v12.1: Tambahkan SEMUA top level parents (tidak hanya 1)
        for (const item of topLevelParents) {
            const exists = lineage.some(l => l.name === item.name);
            if (!exists) {
                lineage.push(item);
                log(`🎯 Selected: "${item.name}" (level ${item.level}) with score ${item.relevanceScore}`, 'SUCCESS');
            }
        }
        
        // 🔥 FIX v12.1: JIKA TIDAK ADA LINEAGE, ambil yang score tertinggi
        if (lineage.length === 0 && scoredCandidates.length > 0) {
            const best = scoredCandidates[0];
            lineage.push(best);
            log(`⚠️ FALLBACK: Using "${best.name}" as nearest parent`, 'WARN');
        }
        
        log('Lineage (prioritized): ' + lineage.map(i => i.level + ':' + i.name).join(' → '), 'SUCCESS');
        
        return lineage;
    }

    let lineageLevels = findNearestParentsByHierarchy();

    log('Initial lineage (' + lineageLevels.length + '): ' + lineageLevels.map(i => i.name + '(' + i.type + ')').join(' → '), 'INFO');

    // 🔥 FIX v12.1: Force inject parent - SELALU
    lineageLevels = forceInjectDirectParent(
        lineageLevels, 
        uniqueItems,
        currentPageTitle, 
        entityType,
        enhancedBreadcrumbItems
    );

    log('After force injection (' + lineageLevels.length + '): ' + lineageLevels.map(i => i.name + '(' + i.type + ')').join(' → '), 'INFO');

    const cleanLineage = [];
    const usedLineage = new Set();

    for (const item of lineageLevels) {
        const key = item.name.toLowerCase();
        if (usedLineage.has(key)) continue;
        usedLineage.add(key);
        cleanLineage.push(item);
    }

    const validatedLineage = validateAndFixHierarchy(cleanLineage);

    validatedLineage.sort((a, b) => {
        const idxA = HIERARCHY_ORDER.indexOf(a.type);
        const idxB = HIERARCHY_ORDER.indexOf(b.type);
        if (idxA !== idxB) return idxA - idxB;
        return a.position - b.position;
    });

    // ========================================================
    // 37. AMBIL SEMUA PARENT DENGAN LEVEL TERTINGGI (FIX v12.1)
    // ========================================================
    
    let finalParents = [];

    const parentOnly = validatedLineage.filter(item => 
        item.name.toLowerCase() !== currentPageTitle.toLowerCase()
    );

    log(`Parent candidates (${parentOnly.length}): ` + parentOnly.map(i => i.name + '(' + i.level + ')').join(', '), 'DEBUG');

    if (parentOnly.length > 0) {
        // 🔥 FIX v12.1: Ambil parent dengan level tertinggi (terdekat dengan current)
        const highestLevel = Math.max(...parentOnly.map(i => i.level));
        finalParents = parentOnly.filter(item => item.level === highestLevel);
        finalParents.sort((a, b) => a.position - b.position);
        
        log(`✅ PARENT FOUND: ${finalParents.length} parent(s) at level ${highestLevel}: ` + finalParents.map(i => i.name).join(', '), 'SUCCESS');
    } else {
        log('⚠️ No parent found (only current page)', 'WARN');
    }

    // 🔥 FIX v12.1: Jika tidak ada parent, cari dari entity pillar
    if (finalParents.length === 0) {
        const entityPillarNames = ENTITY_PILLAR_NAMES[entityType] || [];
        if (entityPillarNames.length > 0) {
            const pillarName = entityPillarNames[0];
            const pillarItem = uniqueItems.find(item => 
                item.name.toLowerCase() === pillarName
            );
            if (pillarItem) {
                finalParents.push(pillarItem);
                log(`✅ ENTITY PILLAR as parent: "${pillarName}"`, 'SUCCESS');
            }
        }
    }

    for (const item of finalParents) {
        const exists = selectedLevels.some(l => l.name.toLowerCase() === item.name.toLowerCase());
        if (!exists) {
            selectedLevels.push(item);
            log(`👪 Adding parent: "${item.name}" (level ${item.level})`, 'PARENT');
        }
    }

    const hasCurrentAlready = selectedLevels.some(item =>
        item.name.toLowerCase() === currentPageTitle.toLowerCase()
    );

    if (!hasCurrentAlready) {
        selectedLevels.push({
            name: currentPageTitle,
            url: currentFullUrl,
            type: currentPageType,
            level: pldLevel ? TYPE_LEVEL_MAP[pldLevel] : (TYPE_LEVEL_MAP[currentPageType] || 99),
            isCurrent: true,
            pldLevel: pldLevel
        });
    }

    // ============================================================
    // 38. FINAL UNIQUE LEVELS
    // ============================================================

    const uniqueLevels = [];
    const usedNames = new Set();

    for (const item of selectedLevels) {
        const key = item.name.toLowerCase();
        if (usedNames.has(key)) continue;
        usedNames.add(key);
        uniqueLevels.push(item);
    }

    uniqueLevels.forEach((item, index) => {
        item.position = index + 1;
    });

    log('Final breadcrumb (' + uniqueLevels.length + ' levels): ' + uniqueLevels.map(i => i.name + '(' + i.level + ')').join(' › '), 'SUCCESS');

    // ============================================================
    // 39. GENERATE HTML
    // ============================================================

    let breadcrumbHtml = `<div class="breadcrumbs" itemscope itemtype="https://schema.org/BreadcrumbList">\n`;

    for (let i = 0; i < uniqueLevels.length; i++) {
        const item = uniqueLevels[i];
        const isLast = i === uniqueLevels.length - 1;

        if (!isLast) {
            breadcrumbHtml +=
                `<span itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
<a href="${item.url}" itemprop="item" title="${item.name}">
<span itemprop="name">${item.name}</span>
</a>
<meta itemprop="position" content="${item.position}" />
</span>
<span class="separator"> › </span>\n`;
        } else {
            breadcrumbHtml +=
                `<span itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
<span itemprop="name">${item.name}</span>
<meta itemprop="position" content="${item.position}" />
</span>\n`;
        }
    }

    breadcrumbHtml += `</div>\n`;

    // ============================================================
    // 40. JSON LD
    // ============================================================

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": uniqueLevels.map((item, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": item.name,
            "item": item.url
        }))
    };

    // ============================================================
    // 41. REMOVE OLD
    // ============================================================

    document.querySelectorAll('.breadcrumbs, .breadcrumb-nav, [aria-label="Breadcrumb"]')
        .forEach(el => el.remove());
    document.querySelectorAll('script[data-breadcrumb="true"]')
        .forEach(el => el.remove());

    // ============================================================
    // 42. TARGET ELEMENT
    // ============================================================

    const targetElement = document.querySelector('main, article, .content, #main-content, .post-content');

    if (targetElement) {
        targetElement.insertAdjacentHTML('afterbegin', breadcrumbHtml);
    } else {
        document.body.insertAdjacentHTML('afterbegin', breadcrumbHtml);
    }

    // ============================================================
    // 43. INJECT JSON LD
    // ============================================================

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-breadcrumb', 'true');
    script.textContent = JSON.stringify(jsonLd, null, 2);
    document.head.appendChild(script);

    // ============================================================
    // 44. LOG SUMMARY
    // ============================================================

    console.log('📊 BREADCRUMB GENERATION SUMMARY (v12.1):');
    console.log(`   Page: "${currentPageTitle}"`);
    console.log(`   URL: "${currentFullUrl}"`);
    console.log(`   Type: ${currentPageType} (level ${TYPE_LEVEL_MAP[currentPageType]})`);
    console.log(`   Entity: ${entityType}`);
    console.log(`   🔄 PLD Sync: ${isPLDSynced ? '✅ SINKRON' : '❌ FALLBACK'}`);
    if (pldLevel) {
        console.log(`   📌 PLD Level: ${pldLevel} (${TYPE_LEVEL_MAP[pldLevel]})`);
    }
    if (currentPageType === 'variant') {
        console.log(`   🔬 Variant detected for entity: ${entityType}`);
    }
    if (currentPageType === 'money-child') {
        console.log(`   📍 Money Child with location detected`);
    }
    console.log(`   👪 Parents found: ${finalParents.length} at level ${finalParents.length > 0 ? finalParents[0].level : 'N/A'}`);
    console.log(`   📊 Total breadcrumb levels: ${uniqueLevels.length}`);
    console.log(`   🏛️ Hierarchy: ${uniqueLevels.map(i => i.type).join(' → ')}`);

    // ============================================================
    // 45. RETURN
    // ============================================================

    return {
        html: breadcrumbHtml,
        jsonLd,
        selectedLevels: uniqueLevels,
        currentPageType,
        entityType,
        version: '12.1.0',
        parentCount: finalParents.length,
        parents: finalParents,
        isVariant: currentPageType === 'variant',
        isMoneyChild: currentPageType === 'money-child',
        pldSync: isPLDSynced,
        pldLevel: pldLevel,
        pldEntity: pldEntity,
        hierarchy: uniqueLevels.map(i => i.type)
    };
}


// Fungsi untuk menghapus elemen breadcrumb navigation
    function removeBreadcrumbNavigation() {
        // Selector umum untuk breadcrumb navigation
        const selectors = [
            '.breadcrumb',
            '.breadcrumbs',
            '.breadcrumb-nav',
            'nav[aria-label="Breadcrumb"]',
            'nav.breadcrumb',
            'div.breadcrumb',
            'ul.breadcrumb',
            'ol.breadcrumb'
        ];
        
        let removedCount = 0;
        
        selectors.forEach(selector => {
            const elements = document.querySelectorAll(selector);
            elements.forEach(el => {
                if (el && el.remove) {
                    el.remove();
                    removedCount++;
                    console.log(`✅ Breadcrumb removed: ${selector}`);
                }
            });
        });
        
        return removedCount;
    }
    
    // Fungsi untuk menghapus JSON-LD BreadcrumbList (tanpa menghapus schema lain)
    function removeBreadcrumbJsonLd() {
        const scripts = document.querySelectorAll('script[type="application/ld+json"]');
        let removedCount = 0;
        
        scripts.forEach(script => {
            try {
                const jsonData = JSON.parse(script.textContent);
                // Hanya hapus jika @type adalah BreadcrumbList
                if (jsonData && (jsonData['@type'] === 'BreadcrumbList' || 
                    (jsonData['@type'] && jsonData['@type'].includes('BreadcrumbList')))) {
                    script.remove();
                    removedCount++;
                    console.log(`✅ BreadcrumbList JSON-LD removed`);
                }
            } catch(e) {
                // Jika parsing gagal, skip
                console.warn('⚠️ Could not parse JSON-LD, skipping:', e.message);
            }
        });
        
        return removedCount;
    }
    
    // Fungsi untuk menyembunyikan breadcrumb dengan CSS (fallback)
    function hideBreadcrumbWithCss() {
        const style = document.createElement('style');
        style.id = 'variant-breadcrumb-hider';
        style.textContent = `
            .breadcrumb, .breadcrumbs, .breadcrumb-nav,
            nav[aria-label="Breadcrumb"], nav.breadcrumb,
            div.breadcrumb, ul.breadcrumb, ol.breadcrumb {
                display: none !important;
                visibility: hidden !important;
                height: 0 !important;
                overflow: hidden !important;
                margin: 0 !important;
                padding: 0 !important;
            }
        `;
        
        // Cek apakah style sudah ada
        if (!document.getElementById('variant-breadcrumb-hider')) {
            document.head.appendChild(style);
            console.log(`✅ CSS hider added`);
        }
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
		urlMappingJasaBongkarBangunanFromMoneyMasterMoneyPage,
		urlMappingJasaBongkarBangunanFromMoneyMasterMoneyChild,
		urlMappingJasaBongkarTowerFromMoneyMaster1MoneyPage,
		urlMappingJasaBongkarTowerFromMoneyMaster1MoneyChild,
		
		urlMappingJasaBongkarRumahFromMoneyMaster1MoneyPage,
        urlMappingJasaBongkarRumahFromMoneyMaster1MoneyChild,
		urlMappingHargaJasaBongkarRumahFromMoneyPageMoneyChild,
		
		urlMappingJasaBongkarBetonFromMoneyMaster1MoneyPage,
		urlMappingJasaBongkarBetonFromMoneyMaster1MoneyChild,
		urlMappingHargaJasaBongkarBetonFromMoneyPageMoneyPage1,
        urlMappingHargaJasaBongkarBetonFromMoneyPageMoneyChild,
        urlMappingJasaBongkarBetonFromMoneyMaster1Variant,
		
		urlMappingJasaBongkarAtapFromMoneyMaster1MoneyPage,
        urlMappingJasaBongkarAtapFromMoneyMaster1MoneyChild,
		urlMappingHargaJasaBongkarAtapFromMoneyPageMoneyPage1,
		urlMappingJasaBongkarAtapFromMoneyMaster1Variant,
		
		urlMappingJasaBongkarKeramikFromMoneyMaster1MoneyPage,
		urlMappingHargaJasaBongkarKeramikFromMoneyPageMoneyPage1,
		urlMappingJasaBongkarKeramikFromMoneyMaster1MoneyChild,
		urlMappingJasaBongkarKeramikFromMoneyMaster1Variant,
		
		urlMappingJasaBongkarTembokFromMoneyMaster1MoneyPage,
        urlMappingJasaBongkarTembokFromMoneyMaster1MoneyChild,
		urlMappingHargaJasaBongkarTembokFromMoneyPageMoneyPage1,
        urlMappingHargaJasaBongkarTembokFromMoneyPageMoneyChild,
		urlMappingJasaBongkarTembokFromMoneyMaster1Variant,
		
		urlMappingJasaBongkarDindingFromMoneyMaster1MoneyPage,
		urlMappingJasaBongkarDindingFromMoneyMaster1MoneyChild,
		urlMappingHargaJasaBongkarDindingFromMoneyPageMoneyPage1,
		urlMappingJasaBongkarDindingFromMoneyMaster1Variant,
		
		urlMappingJasaBongkarLantaiFromMoneyMaster1MoneyPage,
		urlMappingHargaJasaBongkarLantaiFromMoneyPageMoneyPage1,
		urlMappingJasaBongkarLantaiFromMoneyMaster1MoneyChild,
		urlMappingJasaBongkarLantaiFromMoneyMaster1Variant,
		
		urlMappingJasaBongkarPlafonFromMoneyMaster1MoneyPage,
		urlMappingJasaBongkarPlafonFromMoneyMaster1MoneyChild,
        urlMappingHargaJasaBongkarPlafonFromMoneyPageMoneyPage1,
		urlMappingJasaBongkarPlafonFromMoneyMaster1Variant,
		
		urlMappingJasaBongkarPartisiFromMoneyMaster1MoneyPage,
		urlMappingJasaBongkarPartisiFromMoneyMaster1MoneyChild,
		urlMappingHargaJasaBongkarPartisiFromMoneyPageMoneyPage1,
        urlMappingJasaBongkarPartisiFromMoneyMaster1Variant,
		
		urlMappingJasaBongkarPagarFromMoneyMaster1MoneyPage,
		urlMappingJasaBongkarPagarFromMoneyMaster1MoneyChild,
		
		urlMappingJasaBuangPuingFromMoneyMasterMoneyChild,
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

/* ============================================================
 🔥 Hybrid Date Modified v7.9 — UNTUK betonjayareadymix.com
    ✅ SINKRON dengan Page Level Detector v22.1
    ✅ FIXED: Support PLD v22.0, v22.1, v20.x, v19.x
    ✅ FIXED: Variable name konsisten dengan PLD v22.x
    ✅ FULL COMPATIBLE: Page Level Detector v22.x, v20.x, v19.x, v18, v17
    ✅ FIX: Support JASA MONEY-MASTER detection
    ✅ FIX: 'home' TIDAK termasuk EVERGREEN_LEVELS
    ✅ ENHANCED: Mendapatkan confidence score dari PLD v22.x
    ✅ ENHANCED: Enhanced logging dengan confidence dan strategy
    ✅ Better error handling
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
// 1. EVERGREEN: Halaman yang jarang berubah (authority tinggi)
const EVERGREEN_LEVELS = ['home', 'pillar', 'sub-pillar-tipe-2', 'variant', 'sub-variant'];

// 2. FLEXIBLE: Halaman yang sesekali perlu di-update
const FLEXIBLE_LEVELS = ['sub-pillar-tipe-1'];

// 3. MONEY: Halaman yang harus selalu fresh (harga, biaya, lokasi)
const MONEY_LEVELS = ['money-master', 'money-page', 'money-child', 'money-leadgen'];


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
    // 📌 TUNGGU PAGE LEVEL DETECTOR READY (SUPPORT v22.x, v20.x, v19.x, v18, v17)
    // ============================================================
    function waitForPageLevelDetector() {
      return new Promise((resolve) => {
        // ✅ SUPPORT v22.x (v22.0, v22.1)
        if (window.pageLevelDetectorv22 && window.pageLevelDetectorv22Ready) {
          console.log("✅ Page Level Detector v22.x already ready");
          resolve(true);
          return;
        }
        
        // ✅ SUPPORT v20.x (v20.0, v20.1, v20.2)
        if (window.pageLevelDetectorv20 && window.pageLevelDetectorv20Ready) {
          console.log("✅ Page Level Detector v20.x already ready");
          resolve(true);
          return;
        }
        
        // ✅ SUPPORT v19.0
        if (window.pageLevelDetectorv19 && window.pageLevelDetectorv19Ready) {
          console.log("✅ Page Level Detector v19 already ready");
          resolve(true);
          return;
        }
        
        // ✅ SUPPORT v18
        if (window.pageLevelDetectorV18 && window.pageLevelDetectorv18Ready) {
          console.log("✅ Page Level Detector v18 already ready");
          resolve(true);
          return;
        }
        
        // ✅ SUPPORT v17
        if (window.pageLevelDetectorV17 && window.pageLevelDetectorv17Ready) {
          console.log("✅ Page Level Detector v17 already ready");
          resolve(true);
          return;
        }
        
        // ✅ SUPPORT legacy
        if (window.pageLevelDetector && window.__pageLevelDetectorReady) {
          console.log("✅ Page Level Detector legacy already ready");
          resolve(true);
          return;
        }
        
        // ✅ Event listener untuk semua versi
        const onReadyV22 = () => {
          console.log("✅ Page Level Detector v22.x ready (event)");
          resolve(true);
        };
        
        const onReadyV20 = () => {
          console.log("✅ Page Level Detector v20.x ready (event)");
          resolve(true);
        };
        
        const onReadyV19 = () => {
          console.log("✅ Page Level Detector v19 ready (event)");
          resolve(true);
        };
        
        const onReadyV18 = () => {
          console.log("✅ Page Level Detector v18 ready (event fallback)");
          resolve(true);
        };
        
        const onReadyLegacy = () => {
          console.log("✅ Page Level Detector legacy ready (event fallback)");
          resolve(true);
        };
        
        window.addEventListener("pageLevelDetectorv22Ready", onReadyV22, { once: true });
        window.addEventListener("pageLevelDetectorv20Ready", onReadyV20, { once: true });
        window.addEventListener("pageLevelDetectorv19Ready", onReadyV19, { once: true });
        window.addEventListener("pageLevelDetectorV19Ready", onReadyV19, { once: true });
        window.addEventListener("pageLevelDetectorv18Ready", onReadyV18, { once: true });
        window.addEventListener("pageLevelDetectorReady", onReadyLegacy, { once: true });
        
        // Fallback timeout 10 detik
        setTimeout(() => {
          if (window.pageLevelDetectorv22 || window.pageLevelDetectorv20 || 
              window.pageLevelDetectorv19 || window.pageLevelDetectorV18 || 
              window.pageLevelDetector) {
            console.log("✅ Page Level Detector ready (timeout fallback)");
            resolve(true);
          } else {
            console.warn("⚠️ PageLevelDetector timeout, using defaults");
            resolve(false);
          }
        }, 10000);
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
      // Gunakan PLD v22.x (terbaru, weighted voting system)
      const PAGE_LEVEL_DETECTOR_URL = "https://raw.githack.com/aliyul/solution-blogger/main/PageLevelDetector.js";
      const EVERGREEN_DETECTOR_URL = "https://raw.githack.com/aliyul/solution-blogger/main/SmartEvergreenDetector.js";
      
      if (typeof window.pageLevelDetectorv22 === "undefined" && 
          typeof window.pageLevelDetectorv20 === "undefined" &&
          typeof window.pageLevelDetectorv19 === "undefined" &&
          typeof window.pageLevelDetectorV18 === "undefined" &&
          typeof window.pageLevelDetectorV17 === "undefined" &&
          typeof window.pageLevelDetector === "undefined") {
        console.log("⏳ Loading Page Level Detector v22.x...");
        await loadExternalJS(PAGE_LEVEL_DETECTOR_URL);
        await waitForPageLevelDetector();
        console.log("✅ Page Level Detector v22.x READY");
      }
      
      if (typeof window.detectEvergreen !== "function") {
        console.log("⏳ Loading Smart Evergreen Detector...");
        await loadExternalJS(EVERGREEN_DETECTOR_URL);
        await waitForDetectEvergreen();
        console.log("✅ Smart Evergreen Detector READY");
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
      if (EVERGREEN_LEVELS.includes(pageLevel)) {
        if (pageLevel === 'pillar') {
          return "2026-04-01T10:30:00+07:00";
        }
        return "2026-04-02T00:00:00+07:00";
      }
      
      if (FLEXIBLE_LEVELS.includes(pageLevel)) {
        return "2026-04-15T00:00:00+07:00";
      }
      
      if (MONEY_LEVELS.includes(pageLevel)) {
        return null;
      }
      
      if (pageLevel === 'home') {
        return null;
      }
      
      return null;
    }

    // ============================================================
    // 📌 FUNGSI GET CATEGORY LABEL
    // ============================================================
    function getCategoryLabel(pageLevel) {
      if (EVERGREEN_LEVELS.includes(pageLevel)) return 'EVERGREEN';
      if (FLEXIBLE_LEVELS.includes(pageLevel)) return 'FLEXIBLE';
      if (MONEY_LEVELS.includes(pageLevel)) return 'MONEY';
      if (pageLevel === 'home') return 'HOMEPAGE (DYNAMIC)';
      return 'UNKNOWN';
    }

    // ============================================================
    // 📌 GET PAGE LEVEL FROM DETECTOR (SUPPORT v22.x, v20.x, v19.x, v18, v17)
    // ============================================================
    async function getPageLevelFromDetector() {
      await new Promise(resolve => setTimeout(resolve, 300));
      
      let pageLevel = 'pillar';
      let entityType = 'produk';
      let detectorVersion = 'unknown';
      let confidence = null;
      let strategies = null;
      let strategyCount = null;
      
      // ✅ PRIORITAS v22.x (weighted voting system - 100% accuracy)
      if (window.pageLevelDetectorv22 && typeof window.pageLevelDetectorv22.detect === 'function') {
        try {
          pageLevel = window.pageLevelDetectorv22.detect();
          entityType = window.pageLevelDetectorv22.detectEntityType();
          detectorVersion = 'v22.x';
          
          // Dapatkan confidence score jika tersedia
          if (typeof window.pageLevelDetectorv22.getConfidenceScore === 'function') {
            const confidenceScore = window.pageLevelDetectorv22.getConfidenceScore();
            confidence = confidenceScore.confidence;
            strategies = confidenceScore.strategies;
            strategyCount = confidenceScore.strategyCount;
          }
          
          console.log(`📌 [${detectorVersion}] Detected Page Level: ${pageLevel}, Entity Type: ${entityType}`);
          if (confidence) {
            console.log(`   🎯 Confidence: ${confidence}% (${strategyCount} strategies: ${strategies?.join(", ")})`);
          }
        } catch (e) {
          console.warn(`⚠️ Error calling pageLevelDetectorv22:`, e);
        }
      } 
      // FALLBACK v20.x
      else if (window.pageLevelDetectorv20 && typeof window.pageLevelDetectorv20.detect === 'function') {
        try {
          pageLevel = window.pageLevelDetectorv20.detect();
          entityType = window.pageLevelDetectorv20.detectEntityType();
          detectorVersion = 'v20.x';
          console.log(`📌 [${detectorVersion}] Detected Page Level: ${pageLevel}, Entity Type: ${entityType}`);
        } catch (e) {
          console.warn(`⚠️ Error calling pageLevelDetectorv20:`, e);
        }
      } 
      // FALLBACK v19.0
      else if (window.pageLevelDetectorv19 && typeof window.pageLevelDetectorv19.detect === 'function') {
        try {
          pageLevel = window.pageLevelDetectorv19.detect();
          entityType = window.pageLevelDetectorv19.detectEntityType();
          detectorVersion = 'v19.0';
          console.log(`📌 [${detectorVersion}] Detected Page Level: ${pageLevel}, Entity Type: ${entityType}`);
        } catch (e) {
          console.warn(`⚠️ Error calling pageLevelDetectorv19:`, e);
        }
      } 
      // FALLBACK v18
      else if (window.pageLevelDetectorV18 && typeof window.pageLevelDetectorV18.detect === 'function') {
        try {
          pageLevel = window.pageLevelDetectorV18.detect();
          entityType = window.pageLevelDetectorV18.detectEntityType();
          detectorVersion = 'v18.7';
          console.log(`📌 [${detectorVersion}] Detected Page Level: ${pageLevel}, Entity Type: ${entityType}`);
        } catch (e) {
          console.warn(`⚠️ Error calling pageLevelDetectorV18:`, e);
        }
      } 
      // FALLBACK v17
      else if (window.pageLevelDetectorV17 && typeof window.pageLevelDetectorV17.detect === 'function') {
        try {
          pageLevel = window.pageLevelDetectorV17.detect();
          entityType = window.pageLevelDetectorV17.detectEntityType();
          detectorVersion = 'v17.0';
          console.log(`📌 [${detectorVersion}] Detected Page Level: ${pageLevel}, Entity Type: ${entityType}`);
        } catch (e) {
          console.warn(`⚠️ Error calling pageLevelDetectorV17:`, e);
        }
      } 
      // FALLBACK legacy
      else if (window.pageLevelDetector && typeof window.pageLevelDetector.detect === 'function') {
        try {
          pageLevel = window.pageLevelDetector.detect();
          entityType = window.pageLevelDetector.detectEntityType();
          detectorVersion = 'legacy';
          console.log(`📌 [${detectorVersion}] Detected Page Level: ${pageLevel}, Entity Type: ${entityType}`);
        } catch (e) {
          console.warn(`⚠️ Error calling pageLevelDetector legacy:`, e);
        }
      } 
      else {
        console.warn("⚠️ PageLevelDetector not ready, using defaults (pillar/produk)");
      }
      
      return { pageLevel, entityType, detectorVersion, confidence, strategies, strategyCount };
    }

    // ============================================================
    // 📌 EKSEKUSI UTAMA
    // ============================================================
    
    console.log("🔥 Hybrid Date Modified v7.9 - Starting...");
    
    await loadAllScripts();
    
    const { pageLevel, entityType, detectorVersion, confidence, strategies, strategyCount } = await getPageLevelFromDetector();
    
    // Validasi page level
    const ALL_KNOWN_LEVELS = [...EVERGREEN_LEVELS, ...FLEXIBLE_LEVELS, ...MONEY_LEVELS, 'home'];
    let finalPageLevel = pageLevel;
    if (!ALL_KNOWN_LEVELS.includes(finalPageLevel)) {
      console.warn(`⚠️ Unknown page level: ${finalPageLevel}, defaulting to pillar`);
      finalPageLevel = 'pillar';
    }
    
    // Tentukan custom date
    let customDate = getCustomDateByPageLevel(finalPageLevel, entityType);
    let manualMode = customDate !== null;
    let categoryLabel = getCategoryLabel(finalPageLevel);
    
    console.log(`📋 PAGE CLASSIFICATION:`);
    console.log(`   - Page Level: ${finalPageLevel}`);
    console.log(`   - Entity Type: ${entityType}`);
    console.log(`   - Category: ${categoryLabel}`);
    console.log(`   - Detector: ${detectorVersion}`);
    if (confidence) {
      console.log(`   - Confidence: ${confidence}%`);
    }
    if (strategies && strategyCount) {
      console.log(`   - Strategies: ${strategyCount} strategies (${strategies.join(", ")})`);
    }
    console.log(`   - Mode: ${manualMode ? 'MANUAL (custom date)' : 'AUTO'}`);
    
    if (manualMode && customDate) {
      console.log(`   - Custom Date: ${customDate}`);
    }
    
    // Jalankan detectEvergreen
    if (window.detectEvergreen) {
      if (manualMode && customDate) {
        await window.detectEvergreen({ customDateModified: customDate });
        console.log(`✅ MANUAL mode executed with custom date: ${customDate}`);
      } else {
        await window.detectEvergreen();
        console.log(`✅ AUTO mode executed`);
      }
    } else {
      console.warn("⚠️ detectEvergreen function not available");
    }
    
    // Pastikan AEDMetaDates tersedia
    if (!window.AEDMetaDates || !window.AEDMetaDates.dateModified) {
      console.warn("[HybridDateModified] AEDMetaDates tidak ditemukan, skip update.");
      return;
    }

    const { dateModified, nextUpdate, type: aedType, entityType: detectedEntityType, pageLevel: detectedPageLevel } = window.AEDMetaDates;

    console.log(`📊 betonjayareadymix.com Page Info:`);
    console.log(`   - type: ${aedType}`);
    console.log(`   - entityType: ${detectedEntityType}`);
    console.log(`   - pageLevel: ${detectedPageLevel}`);
    console.log(`   - dateModified: ${dateModified}`);
    console.log(`   - nextUpdate: ${nextUpdate}`);

    // Hitung variasi tanggal
    const uniquePageIdentifier = window.location.pathname;
    let hashSource = uniquePageIdentifier;
    
    if (EVERGREEN_LEVELS.includes(detectedPageLevel)) {
      hashSource = 'evergreen-' + hashSource;
    } else if (FLEXIBLE_LEVELS.includes(detectedPageLevel)) {
      hashSource = 'flexible-' + hashSource;
    } else if (detectedEntityType === 'jasa') {
      hashSource = 'jasa-' + hashSource;
    } else if (MONEY_LEVELS.includes(detectedPageLevel)) {
      hashSource = 'money-' + hashSource;
    } else if (detectedPageLevel === 'home') {
      hashSource = 'home-' + hashSource;
    }
    
    const hash = stableHash(hashSource);
    const offsetSeconds = hash % 86400;
    const finalDate = new Date(new Date(dateModified).getTime() + offsetSeconds * 1000);
    const isoDate = toISOWithTimezoneLocal(finalDate);

    updateMetaDateModified(isoDate);

    window.AEDMetaDates = {
      ...window.AEDMetaDates,
      dateModified: isoDate,
      hashOffset: offsetSeconds,
      detectorVersion: detectorVersion,
      category: categoryLabel,
      mode: manualMode ? 'MANUAL' : 'AUTO',
      originalDateModified: dateModified,
      hybridVersion: '7.9',
      detectionConfidence: confidence,
      detectionStrategies: strategies,
      detectionStrategyCount: strategyCount
    };

    console.log(`✅ [HybridDateModified] ${uniquePageIdentifier}`);
    console.log(`   → Final Date Modified: ${isoDate}`);
    console.log(`   → Offset: ${offsetSeconds} detik (${Math.floor(offsetSeconds / 3600)} jam ${Math.floor((offsetSeconds % 3600) / 60)} menit)`);
    console.log(`   → Mode: ${manualMode ? 'MANUAL' : 'AUTO'}`);
    console.log(`   → Category: ${categoryLabel}`);
    console.log(`   → Detector: ${detectorVersion}`);
    if (confidence) {
      console.log(`   → Detection Confidence: ${confidence}%`);
    }
    console.log(`📋 Hybrid Date Modified v7.9 applied successfully`);

  } catch (err) {
    console.error("[HybridDateModified] Fatal error:", err);
  }
})();
	
	// Menemukan elemen menggunakan Id
    var JasaKonsBongkarBangunanPost = document.getElementById("JasaKonsBongkarBangunanPost");

    if (!JasaKonsBongkarBangunanPost) {
        console.error("elemen Id JasaKonsBongkarBangunanPost kondisi terhapus");
        return;
    }
	
	
//SUB urlMappingJasaKonsBongkarBangunanPost

if (urlMappingJasaBongkarBangunanFromMoneyMasterMoneyPage[cleanUrlJasaKonsBongkarBangunanPost]) {   
		generateBreadcrumbJasaBongkarBangunanPost(
        urlMappingJasaBongkarBangunanFromMoneyMasterMoneyPage,
        cleanUrlJasaKonsBongkarBangunanPost,
        [
           // { name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Bongkar Bangunan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-bongkar-bangunan.html' },
            { name: 'Perbandingan Jasa Bongkar Bangunan', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-bongkar-bangunan.html' },
            { name: 'Jasa Bongkar Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-bongkar-bangunan.html' }
        ],
        'JASA_KONSTRUKSI'
    );
}

if (urlMappingJasaBongkarBangunanFromMoneyMasterMoneyChild[cleanUrlJasaKonsBongkarBangunanPost]) {   
		generateBreadcrumbJasaBongkarBangunanPost(
        urlMappingJasaBongkarBangunanFromMoneyMasterMoneyChild,
        cleanUrlJasaKonsBongkarBangunanPost,
        [
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Bongkar Bangunan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-bongkar-bangunan.html' },
            { name: 'Perbandingan Jasa Bongkar Bangunan', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-bongkar-bangunan.html' },
            { name: 'Jasa Bongkar Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-bongkar-bangunan.html' }
        ],
        'JASA_KONSTRUKSI'
    );
}
 
if (urlMappingJasaBongkarTowerFromMoneyMaster1MoneyPage[cleanUrlJasaKonsBongkarBangunanPost]) {
	    generateBreadcrumbJasaBongkarBangunanPost(
        urlMappingJasaBongkarTowerFromMoneyMaster1MoneyPage,
        cleanUrlJasaKonsBongkarBangunanPost,
        [
           //{ name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
             { name: 'Daftar Jasa Bongkar Bangunan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-bongkar-bangunan.html' },
            { name: 'Perbandingan Jasa Bongkar Bangunan', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-bongkar-bangunan.html' },
             { name: 'Jasa Bongkar Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-bongkar-bangunan.html' },
            { name: 'Jasa Bongkar Tower', url: 'https://www.betonjayareadymix.com/p/jasa-bongkar-tower.html' }
        ],
         'JASA_KONSTRUKSI'
    );
}
if (urlMappingJasaBongkarTowerFromMoneyMaster1MoneyChild[cleanUrlJasaKonsBongkarBangunanPost]) {
	    generateBreadcrumbJasaBongkarBangunanPost(
        urlMappingJasaBongkarTowerFromMoneyMaster1MoneyChild,
        cleanUrlJasaKonsBongkarBangunanPost,
        [
           //{ name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
             { name: 'Daftar Jasa Bongkar Bangunan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-bongkar-bangunan.html' },
            { name: 'Perbandingan Jasa Bongkar Bangunan', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-bongkar-bangunan.html' },
             { name: 'Jasa Bongkar Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-bongkar-bangunan.html' },
            { name: 'Jasa Bongkar Tower', url: 'https://www.betonjayareadymix.com/p/jasa-bongkar-tower.html' }
        ],
         'JASA_KONSTRUKSI'
    );
}

if (urlMappingJasaBongkarRumahFromMoneyMaster1MoneyPage[cleanUrlJasaKonsBongkarBangunanPost]) {
       generateBreadcrumbJasaBongkarBangunanPost(
        urlMappingJasaBongkarRumahFromMoneyMaster1MoneyPage,
        cleanUrlJasaKonsBongkarBangunanPost,
        [
            //{ name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
             { name: 'Daftar Jasa Bongkar Bangunan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-bongkar-bangunan.html' },
            { name: 'Perbandingan Jasa Bongkar Bangunan', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-bongkar-bangunan.html' },
             { name: 'Jasa Bongkar Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-bongkar-bangunan.html' },
            { name: 'Jasa Bongkar Rumah', url: 'https://www.betonjayareadymix.com/p/jasa-bongkar-rumah.html' }
        ],
        'JASA_KONSTRUKSI'
    );
	
}
if (urlMappingJasaBongkarRumahFromMoneyMaster1MoneyChild[cleanUrlJasaKonsBongkarBangunanPost]) {
       generateBreadcrumbJasaBongkarBangunanPost(
        urlMappingJasaBongkarRumahFromMoneyMaster1MoneyChild,
        cleanUrlJasaKonsBongkarBangunanPost,
        [
            //{ name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
             { name: 'Daftar Jasa Bongkar Bangunan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-bongkar-bangunan.html' },
            { name: 'Perbandingan Jasa Bongkar Bangunan', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-bongkar-bangunan.html' },
             { name: 'Jasa Bongkar Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-bongkar-bangunan.html' },
            { name: 'Jasa Bongkar Rumah', url: 'https://www.betonjayareadymix.com/p/jasa-bongkar-rumah.html' }
        ],
        'JASA_KONSTRUKSI'
    );
	
}
if (urlMappingHargaJasaBongkarRumahFromMoneyPageMoneyChild[cleanUrlJasaKonsBongkarBangunanPost]) {
       generateBreadcrumbJasaBongkarBangunanPost(
        urlMappingHargaJasaBongkarRumahFromMoneyPageMoneyChild,
        cleanUrlJasaKonsBongkarBangunanPost,
        [
            //{ name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
             { name: 'Daftar Jasa Bongkar Bangunan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-bongkar-bangunan.html' },
            { name: 'Perbandingan Jasa Bongkar Bangunan', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-bongkar-bangunan.html' },
             { name: 'Jasa Bongkar Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-bongkar-bangunan.html' },
            { name: 'Jasa Bongkar Rumah', url: 'https://www.betonjayareadymix.com/p/jasa-bongkar-rumah.html' },
            { name: 'Harga Jasa Bongkar Rumah', url: 'https://www.betonjayareadymix.com/2018/09/harga-jasa-bongkar-rumah.html' }
        ],
        'JASA_KONSTRUKSI'
    );
	
}

if (urlMappingJasaBongkarBetonFromMoneyMaster1MoneyPage[cleanUrlJasaKonsBongkarBangunanPost]) {
	    generateBreadcrumbJasaBongkarBangunanPost(
        urlMappingJasaBongkarBetonFromMoneyMaster1MoneyPage,
        cleanUrlJasaKonsBongkarBangunanPost,
        [
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Bongkar Bangunan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-bongkar-bangunan.html' },
            { name: 'Perbandingan Jasa Bongkar Bangunan', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-bongkar-bangunan.html' },
            { name: 'Jasa Bongkar Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-bongkar-bangunan.html' },
            { name: 'Jasa Bongkar Beton', url: 'https://www.betonjayareadymix.com/p/jasa-bongkar-beton.html' }
        ],
        'JASA_KONSTRUKSI'
    );

}
if (urlMappingJasaBongkarBetonFromMoneyMaster1MoneyChild[cleanUrlJasaKonsBongkarBangunanPost]) {
	    generateBreadcrumbJasaBongkarBangunanPost(
        urlMappingJasaBongkarBetonFromMoneyMaster1MoneyChild,
        cleanUrlJasaKonsBongkarBangunanPost,
        [
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Bongkar Bangunan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-bongkar-bangunan.html' },
            { name: 'Perbandingan Jasa Bongkar Bangunan', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-bongkar-bangunan.html' },
            { name: 'Jasa Bongkar Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-bongkar-bangunan.html' },
            { name: 'Jasa Bongkar Beton', url: 'https://www.betonjayareadymix.com/p/jasa-bongkar-beton.html' }
        ],
        'JASA_KONSTRUKSI'
    );

}	
if (urlMappingHargaJasaBongkarBetonFromMoneyPageMoneyPage1[cleanUrlJasaKonsBongkarBangunanPost]) {
	    generateBreadcrumbJasaBongkarBangunanPost(
        urlMappingHargaJasaBongkarBetonFromMoneyPageMoneyPage1,
        cleanUrlJasaKonsBongkarBangunanPost,
        [
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Bongkar Bangunan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-bongkar-bangunan.html' },
            { name: 'Perbandingan Jasa Bongkar Bangunan', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-bongkar-bangunan.html' },
            { name: 'Jasa Bongkar Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-bongkar-bangunan.html' },
            { name: 'Jasa Bongkar Beton', url: 'https://www.betonjayareadymix.com/p/jasa-bongkar-beton.html' },
            { name: 'Harga Jasa Bongkar Beton', url: 'https://www.betonjayareadymix.com/2019/06/harga-jasa-bongkar-beton.html' }
        ],
        'JASA_KONSTRUKSI'
    );
}
if (urlMappingHargaJasaBongkarBetonFromMoneyPageMoneyChild[cleanUrlJasaKonsBongkarBangunanPost]) {
	    generateBreadcrumbJasaBongkarBangunanPost(
        urlMappingHargaJasaBongkarBetonFromMoneyPageMoneyChild,
        cleanUrlJasaKonsBongkarBangunanPost,
        [
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Bongkar Bangunan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-bongkar-bangunan.html' },
            { name: 'Perbandingan Jasa Bongkar Bangunan', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-bongkar-bangunan.html' },
            { name: 'Jasa Bongkar Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-bongkar-bangunan.html' },
            { name: 'Jasa Bongkar Beton', url: 'https://www.betonjayareadymix.com/p/jasa-bongkar-beton.html' },
            { name: 'Harga Jasa Bongkar Beton', url: 'https://www.betonjayareadymix.com/2019/06/harga-jasa-bongkar-beton.html' }
        ],
        'JASA_KONSTRUKSI'
    );
}
if (urlMappingJasaBongkarBetonFromMoneyMaster1Variant[cleanUrlJasaKonsBongkarBangunanPost]) {
     // Eksekusi semua fungsi
		    function init() {
		        console.log('🔧 Variant page detected - removing breadcrumbs...');
		        
		        const removedNav = removeBreadcrumbNavigation();
		        const removedJson = removeBreadcrumbJsonLd();
		        
		        // Fallback: tetap tambahkan CSS untuk memastikan tidak terlihat
		        hideBreadcrumbWithCss();
		        
		        console.log(`📊 Summary: ${removedNav} navigation element(s) removed, ${removedJson} JSON-LD(s) removed`);
		    }
		    
		    // Jalankan saat DOM sudah siap
		    if (document.readyState === 'loading') {
		        document.addEventListener('DOMContentLoaded', init);
		    } else {
		        init();
		    }
}

if (urlMappingJasaBongkarAtapFromMoneyMaster1MoneyPage[cleanUrlJasaKonsBongkarBangunanPost]) {
	   generateBreadcrumbJasaBongkarBangunanPost(
        urlMappingJasaBongkarAtapFromMoneyMaster1MoneyPage,
        cleanUrlJasaKonsBongkarBangunanPost,
        [
            //{ name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
             { name: 'Daftar Jasa Bongkar Bangunan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-bongkar-bangunan.html' },
            { name: 'Perbandingan Jasa Bongkar Bangunan', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-bongkar-bangunan.html' },
             { name: 'Jasa Bongkar Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-bongkar-bangunan.html' },
            { name: 'Jasa Bongkar Atap', url: 'https://www.betonjayareadymix.com/p/jasa-bongkar-atap.html' }
        ],
        'JASA_KONSTRUKSI'
    );
}
if (urlMappingJasaBongkarAtapFromMoneyMaster1MoneyChild[cleanUrlJasaKonsBongkarBangunanPost]) {
	   generateBreadcrumbJasaBongkarBangunanPost(
        urlMappingJasaBongkarAtapFromMoneyMaster1MoneyChild,
        cleanUrlJasaKonsBongkarBangunanPost,
        [
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
             { name: 'Daftar Jasa Bongkar Bangunan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-bongkar-bangunan.html' },
            { name: 'Perbandingan Jasa Bongkar Bangunan', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-bongkar-bangunan.html' },
             { name: 'Jasa Bongkar Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-bongkar-bangunan.html' },
            { name: 'Jasa Bongkar Atap', url: 'https://www.betonjayareadymix.com/p/jasa-bongkar-atap.html' }
        ],
        'JASA_KONSTRUKSI'
    );
}
if (urlMappingHargaJasaBongkarAtapFromMoneyPageMoneyPage1[cleanUrlJasaKonsBongkarBangunanPost]) {
	   generateBreadcrumbJasaBongkarBangunanPost(
        urlMappingHargaJasaBongkarAtapFromMoneyPageMoneyPage1,
        cleanUrlJasaKonsBongkarBangunanPost,
        [
            //{ name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
             { name: 'Daftar Jasa Bongkar Bangunan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-bongkar-bangunan.html' },
            { name: 'Perbandingan Jasa Bongkar Bangunan', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-bongkar-bangunan.html' },
             { name: 'Jasa Bongkar Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-bongkar-bangunan.html' },
            { name: 'Jasa Bongkar Atap', url: 'https://www.betonjayareadymix.com/p/jasa-bongkar-atap.html' },
            { name: 'Harga Jasa Bongkar Atap', url: 'https://www.betonjayareadymix.com/2019/06/harga-jasa-bongkar-atap.html' }
        ],
        'JASA_KONSTRUKSI'
    );
}
if (urlMappingJasaBongkarAtapFromMoneyMaster1Variant[cleanUrlJasaKonsBongkarBangunanPost]) {
	    // Eksekusi semua fungsi
		    function init() {
		        console.log('🔧 Variant page detected - removing breadcrumbs...');
		        
		        const removedNav = removeBreadcrumbNavigation();
		        const removedJson = removeBreadcrumbJsonLd();
		        
		        // Fallback: tetap tambahkan CSS untuk memastikan tidak terlihat
		        hideBreadcrumbWithCss();
		        
		        console.log(`📊 Summary: ${removedNav} navigation element(s) removed, ${removedJson} JSON-LD(s) removed`);
		    }
		    
		    // Jalankan saat DOM sudah siap
		    if (document.readyState === 'loading') {
		        document.addEventListener('DOMContentLoaded', init);
		    } else {
		        init();
		    }
}

if (urlMappingJasaBongkarKeramikFromMoneyMaster1MoneyPage[cleanUrlJasaKonsBongkarBangunanPost]) {
	    generateBreadcrumbJasaBongkarBangunanPost(
        urlMappingJasaBongkarKeramikFromMoneyMaster1MoneyPage,
        cleanUrlJasaKonsBongkarBangunanPost,
        [
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
             { name: 'Daftar Jasa Bongkar Bangunan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-bongkar-bangunan.html' },
            { name: 'Perbandingan Jasa Bongkar Bangunan', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-bongkar-bangunan.html' },
             { name: 'Jasa Bongkar Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-bongkar-bangunan.html' },
            { name: 'Jasa Bongkar Keramik', url: 'https://www.betonjayareadymix.com/p/jasa-bongkar-keramik.html' }
        ],
        'JASA_KONSTRUKSI'
    );
}
if (urlMappingHargaJasaBongkarKeramikFromMoneyPageMoneyPage1[cleanUrlJasaKonsBongkarBangunanPost]) {
	    generateBreadcrumbJasaBongkarBangunanPost(
        urlMappingHargaJasaBongkarKeramikFromMoneyPageMoneyPage1,
        cleanUrlJasaKonsBongkarBangunanPost,
        [
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
             { name: 'Daftar Jasa Bongkar Bangunan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-bongkar-bangunan.html' },
            { name: 'Perbandingan Jasa Bongkar Bangunan', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-bongkar-bangunan.html' },
             { name: 'Jasa Bongkar Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-bongkar-bangunan.html' },
            { name: 'Jasa Bongkar Keramik', url: 'https://www.betonjayareadymix.com/p/jasa-bongkar-keramik.html' },
            { name: 'Harga Jasa Bongkar Keramik', url: 'https://www.betonjayareadymix.com/2019/06/harga-jasa-bongkar-keramik.html' }
        ],
        'JASA_KONSTRUKSI'
    );
}
if (urlMappingJasaBongkarKeramikFromMoneyMaster1MoneyChild[cleanUrlJasaKonsBongkarBangunanPost]) {
	    generateBreadcrumbJasaBongkarBangunanPost(
        urlMappingJasaBongkarKeramikFromMoneyMaster1MoneyChild,
        cleanUrlJasaKonsBongkarBangunanPost,
        [
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
             { name: 'Daftar Jasa Bongkar Bangunan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-bongkar-bangunan.html' },
            { name: 'Perbandingan Jasa Bongkar Bangunan', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-bongkar-bangunan.html' },
             { name: 'Jasa Bongkar Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-bongkar-bangunan.html' },
            { name: 'Jasa Bongkar Keramik', url: 'https://www.betonjayareadymix.com/p/jasa-bongkar-keramik.html' }
        ],
        'JASA_KONSTRUKSI'
    );
}
if (urlMappingJasaBongkarKeramikFromMoneyMaster1Variant[cleanUrlJasaKonsBongkarBangunanPost]) {
	   	    // Eksekusi semua fungsi
		    function init() {
		        console.log('🔧 Variant page detected - removing breadcrumbs...');
		        
		        const removedNav = removeBreadcrumbNavigation();
		        const removedJson = removeBreadcrumbJsonLd();
		        
		        // Fallback: tetap tambahkan CSS untuk memastikan tidak terlihat
		        hideBreadcrumbWithCss();
		        
		        console.log(`📊 Summary: ${removedNav} navigation element(s) removed, ${removedJson} JSON-LD(s) removed`);
		    }
		    
		    // Jalankan saat DOM sudah siap
		    if (document.readyState === 'loading') {
		        document.addEventListener('DOMContentLoaded', init);
		    } else {
		        init();
		    }
}

if (urlMappingJasaBongkarTembokFromMoneyMaster1MoneyPage[cleanUrlJasaKonsBongkarBangunanPost]) {
        generateBreadcrumbJasaBongkarBangunanPost(
        urlMappingJasaBongkarTembokFromMoneyMaster1MoneyPage,
        cleanUrlJasaKonsBongkarBangunanPost,
        [
             { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
             { name: 'Daftar Jasa Bongkar Bangunan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-bongkar-bangunan.html' },
            { name: 'Perbandingan Jasa Bongkar Bangunan', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-bongkar-bangunan.html' },
             { name: 'Jasa Bongkar Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-bongkar-bangunan.html' },
            { name: 'Jasa Bongkar Tembok', url: 'https://www.betonjayareadymix.com/p/jasa-bongkar-tembok.html' }
        ],
        'JASA_KONSTRUKSI'
    );
}
if (urlMappingJasaBongkarTembokFromMoneyMaster1MoneyChild[cleanUrlJasaKonsBongkarBangunanPost]) {
        generateBreadcrumbJasaBongkarBangunanPost(
        urlMappingJasaBongkarTembokFromMoneyMaster1MoneyChild,
        cleanUrlJasaKonsBongkarBangunanPost,
        [
             { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
             { name: 'Daftar Jasa Bongkar Bangunan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-bongkar-bangunan.html' },
            { name: 'Perbandingan Jasa Bongkar Bangunan', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-bongkar-bangunan.html' },
             { name: 'Jasa Bongkar Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-bongkar-bangunan.html' },
            { name: 'Jasa Bongkar Tembok', url: 'https://www.betonjayareadymix.com/p/jasa-bongkar-tembok.html' }
        ],
        'JASA_KONSTRUKSI'
    );
}
if (urlMappingHargaJasaBongkarTembokFromMoneyPageMoneyPage1[cleanUrlJasaKonsBongkarBangunanPost]) {
        generateBreadcrumbJasaBongkarBangunanPost(
        urlMappingHargaJasaBongkarTembokFromMoneyPageMoneyPage1,
        cleanUrlJasaKonsBongkarBangunanPost,
        [
             { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
             { name: 'Daftar Jasa Bongkar Bangunan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-bongkar-bangunan.html' },
            { name: 'Perbandingan Jasa Bongkar Bangunan', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-bongkar-bangunan.html' },
             { name: 'Jasa Bongkar Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-bongkar-bangunan.html' },
            { name: 'Jasa Bongkar Tembok', url: 'https://www.betonjayareadymix.com/p/jasa-bongkar-tembok.html' },
            { name: 'Harga Jasa Bongkar Tembok', url: 'https://www.betonjayareadymix.com/2019/06/harga-jasa-bongkar-tembok.html' }
        ],
        'JASA_KONSTRUKSI'
    );
}
if (urlMappingHargaJasaBongkarTembokFromMoneyPageMoneyChild[cleanUrlJasaKonsBongkarBangunanPost]) {
        generateBreadcrumbJasaBongkarBangunanPost(
        urlMappingHargaJasaBongkarTembokFromMoneyPageMoneyChild,
        cleanUrlJasaKonsBongkarBangunanPost,
        [
             { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
             { name: 'Daftar Jasa Bongkar Bangunan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-bongkar-bangunan.html' },
            { name: 'Perbandingan Jasa Bongkar Bangunan', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-bongkar-bangunan.html' },
             { name: 'Jasa Bongkar Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-bongkar-bangunan.html' },
            { name: 'Jasa Bongkar Tembok', url: 'https://www.betonjayareadymix.com/p/jasa-bongkar-tembok.html' },
            { name: 'Harga Jasa Bongkar Tembok', url: 'https://www.betonjayareadymix.com/2019/06/harga-jasa-bongkar-tembok.html' }
        ],
        'JASA_KONSTRUKSI'
    );
}
if (urlMappingJasaBongkarTembokFromMoneyMaster1Variant[cleanUrlJasaKonsBongkarBangunanPost]) {
 // Eksekusi semua fungsi
		    function init() {
		        console.log('🔧 Variant page detected - removing breadcrumbs...');
		        
		        const removedNav = removeBreadcrumbNavigation();
		        const removedJson = removeBreadcrumbJsonLd();
		        
		        // Fallback: tetap tambahkan CSS untuk memastikan tidak terlihat
		        hideBreadcrumbWithCss();
		        
		        console.log(`📊 Summary: ${removedNav} navigation element(s) removed, ${removedJson} JSON-LD(s) removed`);
		    }
		    
		    // Jalankan saat DOM sudah siap
		    if (document.readyState === 'loading') {
		        document.addEventListener('DOMContentLoaded', init);
		    } else {
		        init();
		    }      
}

	
if (urlMappingJasaBongkarDindingFromMoneyMaster1MoneyPage[cleanUrlJasaKonsBongkarBangunanPost]) {
	  generateBreadcrumbJasaBongkarBangunanPost(
        urlMappingJasaBongkarDindingFromMoneyMaster1MoneyPage,
        cleanUrlJasaKonsBongkarBangunanPost,
        [
           { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
             { name: 'Daftar Jasa Bongkar Bangunan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-bongkar-bangunan.html' },
            { name: 'Perbandingan Jasa Bongkar Bangunan', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-bongkar-bangunan.html' },
             { name: 'Jasa Bongkar Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-bongkar-bangunan.html' },
            { name: 'Jasa Bongkar Dinding', url: 'https://www.betonjayareadymix.com/p/jasa-bongkar-dinding.html' }
        ],
        'JASA_KONSTRUKSI'
    );
}
if (urlMappingJasaBongkarDindingFromMoneyMaster1MoneyChild[cleanUrlJasaKonsBongkarBangunanPost]) {
	  generateBreadcrumbJasaBongkarBangunanPost(
        urlMappingJasaBongkarDindingFromMoneyMaster1MoneyChild,
        cleanUrlJasaKonsBongkarBangunanPost,
        [
           { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
             { name: 'Daftar Jasa Bongkar Bangunan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-bongkar-bangunan.html' },
            { name: 'Perbandingan Jasa Bongkar Bangunan', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-bongkar-bangunan.html' },
             { name: 'Jasa Bongkar Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-bongkar-bangunan.html' },
            { name: 'Jasa Bongkar Dinding', url: 'https://www.betonjayareadymix.com/p/jasa-bongkar-dinding.html' }
        ],
        'JASA_KONSTRUKSI'
    );
}
if (urlMappingHargaJasaBongkarDindingFromMoneyPageMoneyPage1[cleanUrlJasaKonsBongkarBangunanPost]) {
	  generateBreadcrumbJasaBongkarBangunanPost(
        urlMappingHargaJasaBongkarDindingFromMoneyPageMoneyPage1,
        cleanUrlJasaKonsBongkarBangunanPost,
        [
           { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
             { name: 'Daftar Jasa Bongkar Bangunan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-bongkar-bangunan.html' },
            { name: 'Perbandingan Jasa Bongkar Bangunan', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-bongkar-bangunan.html' },
             { name: 'Jasa Bongkar Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-bongkar-bangunan.html' },
            { name: 'Jasa Bongkar Dinding', url: 'https://www.betonjayareadymix.com/p/jasa-bongkar-dinding.html' },
            { name: 'Harga Jasa Bongkar Dinding', url: 'https://www.betonjayareadymix.com/2019/06/harga-jasa-bongkar-dinding.html' }
        ],
        'JASA_KONSTRUKSI'
    );
}
if (urlMappingJasaBongkarDindingFromMoneyMaster1Variant[cleanUrlJasaKonsBongkarBangunanPost]) {
	  // Eksekusi semua fungsi
		    function init() {
		        console.log('🔧 Variant page detected - removing breadcrumbs...');
		        
		        const removedNav = removeBreadcrumbNavigation();
		        const removedJson = removeBreadcrumbJsonLd();
		        
		        // Fallback: tetap tambahkan CSS untuk memastikan tidak terlihat
		        hideBreadcrumbWithCss();
		        
		        console.log(`📊 Summary: ${removedNav} navigation element(s) removed, ${removedJson} JSON-LD(s) removed`);
		    }
		    
		    // Jalankan saat DOM sudah siap
		    if (document.readyState === 'loading') {
		        document.addEventListener('DOMContentLoaded', init);
		    } else {
		        init();
		    }      
}

if (urlMappingJasaBongkarLantaiFromMoneyMaster1MoneyPage[cleanUrlJasaKonsBongkarBangunanPost]) {
	  generateBreadcrumbJasaBongkarBangunanPost(
        urlMappingJasaBongkarLantaiFromMoneyMaster1MoneyPage,
        cleanUrlJasaKonsBongkarBangunanPost,
        [
           { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
             { name: 'Daftar Jasa Bongkar Bangunan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-bongkar-bangunan.html' },
            { name: 'Perbandingan Jasa Bongkar Bangunan', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-bongkar-bangunan.html' },
             { name: 'Jasa Bongkar Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-bongkar-bangunan.html' },
            { name: 'Jasa Bongkar Lantai', url: 'https://www.betonjayareadymix.com/p/jasa-bongkar-lantai.html' }
        ],
        'JASA_KONSTRUKSI'
    );
}
if (urlMappingHargaJasaBongkarLantaiFromMoneyPageMoneyPage1[cleanUrlJasaKonsBongkarBangunanPost]) {
	  generateBreadcrumbJasaBongkarBangunanPost(
        urlMappingHargaJasaBongkarLantaiFromMoneyPageMoneyPage1,
        cleanUrlJasaKonsBongkarBangunanPost,
        [
           { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
             { name: 'Daftar Jasa Bongkar Bangunan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-bongkar-bangunan.html' },
            { name: 'Perbandingan Jasa Bongkar Bangunan', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-bongkar-bangunan.html' },
             { name: 'Jasa Bongkar Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-bongkar-bangunan.html' },
            { name: 'Jasa Bongkar Lantai', url: 'https://www.betonjayareadymix.com/p/jasa-bongkar-lantai.html' },
            { name: 'Harga Jasa Bongkar Lantai', url: 'https://www.betonjayareadymix.com/2019/06/harga-jasa-bongkar-lantai.html' }
        ],
        'JASA_KONSTRUKSI'
    );
}
if (urlMappingJasaBongkarLantaiFromMoneyMaster1MoneyChild[cleanUrlJasaKonsBongkarBangunanPost]) {
	  generateBreadcrumbJasaBongkarBangunanPost(
        urlMappingJasaBongkarLantaiFromMoneyMaster1MoneyChild,
        cleanUrlJasaKonsBongkarBangunanPost,
        [
           { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
             { name: 'Daftar Jasa Bongkar Bangunan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-bongkar-bangunan.html' },
            { name: 'Perbandingan Jasa Bongkar Bangunan', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-bongkar-bangunan.html' },
             { name: 'Jasa Bongkar Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-bongkar-bangunan.html' },
            { name: 'Jasa Bongkar Lantai', url: 'https://www.betonjayareadymix.com/p/jasa-bongkar-lantai.html' }
        ],
        'JASA_KONSTRUKSI'
    );
}
if (urlMappingJasaBongkarLantaiFromMoneyMaster1Variant[cleanUrlJasaKonsBongkarBangunanPost]) {
// Eksekusi semua fungsi
		    function init() {
		        console.log('🔧 Variant page detected - removing breadcrumbs...');
		        
		        const removedNav = removeBreadcrumbNavigation();
		        const removedJson = removeBreadcrumbJsonLd();
		        
		        // Fallback: tetap tambahkan CSS untuk memastikan tidak terlihat
		        hideBreadcrumbWithCss();
		        
		        console.log(`📊 Summary: ${removedNav} navigation element(s) removed, ${removedJson} JSON-LD(s) removed`);
		    }
		    
		    // Jalankan saat DOM sudah siap
		    if (document.readyState === 'loading') {
		        document.addEventListener('DOMContentLoaded', init);
		    } else {
		        init();
		    }     	
}

if (urlMappingJasaBongkarPlafonFromMoneyMaster1MoneyPage[cleanUrlJasaKonsBongkarBangunanPost]) {
	generateBreadcrumbJasaBongkarBangunanPost(
        urlMappingJasaBongkarPlafonFromMoneyMaster1MoneyPage,
        cleanUrlJasaKonsBongkarBangunanPost,
        [
           { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
             { name: 'Daftar Jasa Bongkar Bangunan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-bongkar-bangunan.html' },
            { name: 'Perbandingan Jasa Bongkar Bangunan', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-bongkar-bangunan.html' },
             { name: 'Jasa Bongkar Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-bongkar-bangunan.html' },
            { name: 'Jasa Bongkar Plafon', url: 'https://www.betonjayareadymix.com/p/jasa-bongkar-plafon.html' }
        ],
        'JASA_KONSTRUKSI'
    );
}
if (urlMappingJasaBongkarPlafonFromMoneyMaster1MoneyChild[cleanUrlJasaKonsBongkarBangunanPost]) {
	generateBreadcrumbJasaBongkarBangunanPost(
        urlMappingJasaBongkarPlafonFromMoneyMaster1MoneyChild,
        cleanUrlJasaKonsBongkarBangunanPost,
        [
           { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
             { name: 'Daftar Jasa Bongkar Bangunan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-bongkar-bangunan.html' },
            { name: 'Perbandingan Jasa Bongkar Bangunan', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-bongkar-bangunan.html' },
             { name: 'Jasa Bongkar Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-bongkar-bangunan.html' },
            { name: 'Jasa Bongkar Plafon', url: 'https://www.betonjayareadymix.com/p/jasa-bongkar-plafon.html' }
        ],
        'JASA_KONSTRUKSI'
    );
}
if (urlMappingHargaJasaBongkarPlafonFromMoneyPageMoneyPage1[cleanUrlJasaKonsBongkarBangunanPost]) {
	generateBreadcrumbJasaBongkarBangunanPost(
        urlMappingHargaJasaBongkarPlafonFromMoneyPageMoneyPage1,
        cleanUrlJasaKonsBongkarBangunanPost,
        [
           { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
             { name: 'Daftar Jasa Bongkar Bangunan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-bongkar-bangunan.html' },
            { name: 'Perbandingan Jasa Bongkar Bangunan', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-bongkar-bangunan.html' },
             { name: 'Jasa Bongkar Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-bongkar-bangunan.html' },
            { name: 'Jasa Bongkar Plafon', url: 'https://www.betonjayareadymix.com/p/jasa-bongkar-plafon.html' },
            { name: 'Harga Jasa Bongkar Plafon', url: 'https://www.betonjayareadymix.com/2019/06/harga-jasa-bongkar-plafon.html' }
        ],
        'JASA_KONSTRUKSI'
    );
}
if (urlMappingJasaBongkarPlafonFromMoneyMaster1Variant[cleanUrlJasaKonsBongkarBangunanPost]) {
	// Eksekusi semua fungsi
		    function init() {
		        console.log('🔧 Variant page detected - removing breadcrumbs...');
		        
		        const removedNav = removeBreadcrumbNavigation();
		        const removedJson = removeBreadcrumbJsonLd();
		        
		        // Fallback: tetap tambahkan CSS untuk memastikan tidak terlihat
		        hideBreadcrumbWithCss();
		        
		        console.log(`📊 Summary: ${removedNav} navigation element(s) removed, ${removedJson} JSON-LD(s) removed`);
		    }
		    
		    // Jalankan saat DOM sudah siap
		    if (document.readyState === 'loading') {
		        document.addEventListener('DOMContentLoaded', init);
		    } else {
		        init();
		    }     	
}


if (urlMappingJasaBongkarPartisiFromMoneyMaster1MoneyPage[cleanUrlJasaKonsBongkarBangunanPost]) {
	    generateBreadcrumbJasaBongkarBangunanPost(
        urlMappingJasaBongkarPartisiFromMoneyMaster1MoneyPage,
        cleanUrlJasaKonsBongkarBangunanPost,
        [
           { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
             { name: 'Daftar Jasa Bongkar Bangunan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-bongkar-bangunan.html' },
            { name: 'Perbandingan Jasa Bongkar Bangunan', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-bongkar-bangunan.html' },
             { name: 'Jasa Bongkar Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-bongkar-bangunan.html' },
            { name: 'Jasa Bongkar Partisi', url: 'https://www.betonjayareadymix.com/p/jasa-bongkar-partisi.html' }
        ],
        'JASA_KONSTRUKSI'
    );
}
if (urlMappingJasaBongkarPartisiFromMoneyMaster1MoneyChild[cleanUrlJasaKonsBongkarBangunanPost]) {
	    generateBreadcrumbJasaBongkarBangunanPost(
        urlMappingJasaBongkarPartisiFromMoneyMaster1MoneyChild,
        cleanUrlJasaKonsBongkarBangunanPost,
        [
           { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
             { name: 'Daftar Jasa Bongkar Bangunan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-bongkar-bangunan.html' },
            { name: 'Perbandingan Jasa Bongkar Bangunan', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-bongkar-bangunan.html' },
             { name: 'Jasa Bongkar Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-bongkar-bangunan.html' },
            { name: 'Jasa Bongkar Partisi', url: 'https://www.betonjayareadymix.com/p/jasa-bongkar-partisi.html' }
        ],
        'JASA_KONSTRUKSI'
    );
}
if (urlMappingHargaJasaBongkarPartisiFromMoneyPageMoneyPage1[cleanUrlJasaKonsBongkarBangunanPost]) {
	    generateBreadcrumbJasaBongkarBangunanPost(
        urlMappingHargaJasaBongkarPartisiFromMoneyPageMoneyPage1,
        cleanUrlJasaKonsBongkarBangunanPost,
        [
           { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
             { name: 'Daftar Jasa Bongkar Bangunan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-bongkar-bangunan.html' },
            { name: 'Perbandingan Jasa Bongkar Bangunan', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-bongkar-bangunan.html' },
             { name: 'Jasa Bongkar Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-bongkar-bangunan.html' },
            { name: 'Jasa Bongkar Partisi', url: 'https://www.betonjayareadymix.com/p/jasa-bongkar-partisi.html' },
            { name: 'Harga Jasa Bongkar Partisi', url: 'https://www.betonjayareadymix.com/2019/06/harga-jasa-bongkar-partisi.html' }
        ],
        'JASA_KONSTRUKSI'
    );
}
if (urlMappingJasaBongkarPartisiFromMoneyMaster1Variant[cleanUrlJasaKonsBongkarBangunanPost]) {
		// Eksekusi semua fungsi
		    function init() {
		        console.log('🔧 Variant page detected - removing breadcrumbs...');
		        
		        const removedNav = removeBreadcrumbNavigation();
		        const removedJson = removeBreadcrumbJsonLd();
		        
		        // Fallback: tetap tambahkan CSS untuk memastikan tidak terlihat
		        hideBreadcrumbWithCss();
		        
		        console.log(`📊 Summary: ${removedNav} navigation element(s) removed, ${removedJson} JSON-LD(s) removed`);
		    }
		    
		    // Jalankan saat DOM sudah siap
		    if (document.readyState === 'loading') {
		        document.addEventListener('DOMContentLoaded', init);
		    } else {
		        init();
		    }  
}

if (urlMappingJasaBongkarPagarFromMoneyMaster1MoneyPage[cleanUrlJasaKonsBongkarBangunanPost]) { 
	generateBreadcrumbJasaBongkarBangunanPost(
        urlMappingJasaBongkarPagarFromMoneyMaster1MoneyPage,
        cleanUrlJasaKonsBongkarBangunanPost,
        [
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
             { name: 'Daftar Jasa Bongkar Bangunan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-bongkar-bangunan.html' },
            { name: 'Perbandingan Jasa Bongkar Bangunan', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-bongkar-bangunan.html' },
             { name: 'Jasa Bongkar Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-bongkar-bangunan.html' },
            { name: 'Jasa Bongkar Pagar', url: 'https://www.betonjayareadymix.com/p/jasa-bongkar-pagar.html' }
        ],
        'JASA_KONSTRUKSI'
    );

}
if (urlMappingJasaBongkarPagarFromMoneyMaster1MoneyChild[cleanUrlJasaKonsBongkarBangunanPost]) { 
	generateBreadcrumbJasaBongkarBangunanPost(
        urlMappingJasaBongkarPagarFromMoneyMaster1MoneyChild,
        cleanUrlJasaKonsBongkarBangunanPost,
        [
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
             { name: 'Daftar Jasa Bongkar Bangunan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-bongkar-bangunan.html' },
            { name: 'Perbandingan Jasa Bongkar Bangunan', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-bongkar-bangunan.html' },
             { name: 'Jasa Bongkar Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-bongkar-bangunan.html' },
            { name: 'Jasa Bongkar Pagar', url: 'https://www.betonjayareadymix.com/p/jasa-bongkar-pagar.html' }
        ],
        'JASA_KONSTRUKSI'
    );

}


//SUB urlMappingJasaBuangPuing
if (urlMappingJasaBuangPuingFromMoneyMasterMoneyChild[cleanUrlJasaKonsBongkarBangunanPost]) {
	    generateBreadcrumbJasaBongkarBangunanPost(
        urlMappingJasaBuangPuingFromMoneyMasterMoneyChild,
        cleanUrlJasaKonsBongkarBangunanPost,
        [
            //{ name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Buang Puing', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-buang-puing.html' },
            { name: 'Perbandingan Jasa Buang Puing', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-buang-puing.html'},
            { name: 'Jasa Buang Puing', url: 'https://www.betonjayareadymix.com/p/jasa-buang-puing.html' }
        ],
        'JASA_KONSTRUKSI'
    );
}
	
//SUB urlMappingJasaPerawatanPerbaikanBangunanPost
//JasaPerbaikanAtapBocorPost
if (urlMappingJasaPerbaikanAtapBocorFromSub2MoneyPage[cleanUrlJasaKonsBongkarBangunanPost]) {
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
