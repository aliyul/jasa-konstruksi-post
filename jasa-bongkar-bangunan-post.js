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
  "https://www.betonjayareadymix.com/2019/06/ukuran-jasa-bongkar-beton.html": "Ukuran Jasa Bongkar Beton",
  "https://www.betonjayareadymix.com/2019/06/metode-jasa-bongkar-beton.html": "Metode Jasa Bongkar Beton"

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


// Fungsi untuk menghapus elemen breadcrumb navigation
/*
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
	// Menemukan elemen menggunakan Id
    var JasaKonsBongkarBangunanPost = document.getElementById("JasaKonsBongkarBangunanPost");

    if (!JasaKonsBongkarBangunanPost) {
        console.error("elemen Id JasaKonsBongkarBangunanPost kondisi terhapus");
        return;
    }
	
	
//SUB urlMappingJasaKonsBongkarBangunanPost

if (urlMappingJasaBongkarBangunanFromMoneyMasterMoneyPage[cleanUrlJasaKonsBongkarBangunanPost]) {   
		generateBreadcrumbShared(
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
		generateBreadcrumbShared(
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
	    generateBreadcrumbShared(
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
	    generateBreadcrumbShared(
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
       generateBreadcrumbShared(
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
       generateBreadcrumbShared(
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
       generateBreadcrumbShared(
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
	    generateBreadcrumbShared(
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
	    generateBreadcrumbShared(
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
	    generateBreadcrumbShared(
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
	    generateBreadcrumbShared(
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
	/*
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
	*/
	  generateBreadcrumbShared(
        urlMappingJasaBongkarBetonFromMoneyMaster1Variant,
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

if (urlMappingJasaBongkarAtapFromMoneyMaster1MoneyPage[cleanUrlJasaKonsBongkarBangunanPost]) {
	   generateBreadcrumbShared(
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
	   generateBreadcrumbShared(
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
	   generateBreadcrumbShared(
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
	    generateBreadcrumbShared(
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
	    generateBreadcrumbShared(
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
	    generateBreadcrumbShared(
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
        generateBreadcrumbShared(
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
        generateBreadcrumbShared(
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
        generateBreadcrumbShared(
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
        generateBreadcrumbShared(
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
	  generateBreadcrumbShared(
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
	  generateBreadcrumbShared(
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
	  generateBreadcrumbShared(
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
	  generateBreadcrumbShared(
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
	  generateBreadcrumbShared(
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
	  generateBreadcrumbShared(
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
	generateBreadcrumbShared(
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
	generateBreadcrumbShared(
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
	generateBreadcrumbShared(
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
	    generateBreadcrumbShared(
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
	    generateBreadcrumbShared(
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
	    generateBreadcrumbShared(
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
	generateBreadcrumbShared(
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
	generateBreadcrumbShared(
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
	    generateBreadcrumbShared(
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
	   generateBreadcrumbShared(
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
	    generateBreadcrumbShared(
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
 	generateBreadcrumbShared(
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
	   generateBreadcrumbShared(
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
       generateBreadcrumbShared(
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
 	    generateBreadcrumbShared(
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
