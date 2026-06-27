/*
const urlMappingStrukturBajaRangka = {
"https://www.betonjayareadymix.com/p/jasa-rangka-atap-baja-ringan.html": "Jasa Rangka Atap Baja Ringan",
  "https://www.betonjayareadymix.com/p/jasa-konstruksi-baja-konvensional.html": "Jasa Konstruksi Baja Konvensional",
  "https://www.betonjayareadymix.com/p/jasa-kanopi-baja-dan-besi.html": "Jasa Kanopi Baja dan Besi",
  "https://www.betonjayareadymix.com/p/jasa-struktur-baja-gudang.html": "Jasa Struktur Baja Gudang"

};
*/
/*
// ============================================================
// 🔍 ENTITY TYPE: JASA (Struktur Baja, Beton, Gedung, Industri, Olahraga, Khusus)
// ATURAN: JASA TIDAK BOLEH MENGGUNAKAN MONEY_MASTER
// ✅ Gunakan: MONEY_PAGE (Komersial 60% + Transaksional 40%)
// ✅ Gunakan: MONEY_CHILD untuk spesifik lokasi
// ============================================================

// ============================================================
// 📁 LEVEL 2 - SUB2 (Turunan dari PILLAR Jasa Struktur Konstruksi)
// 🧠 SUB2: Informasional (60%), boleh skip di breadcrumb
// ============================================================

const urlMappingJasaStrukturBajaRangkaRinganFromPillarSub2 = {
  // [SUB2] - Jasa Rangka Atap Baja Ringan (KATEGORI)
  "https://www.betonjayareadymix.com/p/jasa-rangka-atap-baja-ringan.html": "Jasa Rangka Atap Baja Ringan",  // TYPE: SUB2
  
  // [SUB2] - Jasa Konstruksi Baja Konvensional (KATEGORI)
  "https://www.betonjayareadymix.com/p/jasa-konstruksi-baja-konvensional.html": "Jasa Konstruksi Baja Konvensional",  // TYPE: SUB2
  
  // [SUB2] - Jasa Kanopi Baja dan Besi (KATEGORI)
  "https://www.betonjayareadymix.com/p/jasa-kanopi-baja-dan-besi.html": "Jasa Kanopi Baja dan Besi",  // TYPE: SUB2
  
  // [SUB2] - Jasa Struktur Baja Gudang (KATEGORI)
  "https://www.betonjayareadymix.com/p/jasa-struktur-baja-gudang.html": "Jasa Struktur Baja Gudang",  // TYPE: SUB2
};
*/
// ============================================================
// 📁 JasaKonstruksiBajaRingan
// 🧠 ENTITY: JASA → TYPE: MONEY_PAGE & MONEY_CHILD
// Parent: JasaKonstruksiBajaRingan
// ============================================================
const urlMappingJasaPasangBajaRinganFromMoneyPage2MoneyPage3 = { 
	"https://www.betonjayareadymix.com/2018/09/jasa-konstruksi-baja-ringan-ruko.html": "Jasa Konstruksi Baja Ringan Ruko",
	
	"https://www.betonjayareadymix.com/2018/09/harga-jasa-pasang-baja-ringan.html": "Harga Jasa Pasang Baja Ringan", 
	  "https://www.betonjayareadymix.com/2018/09/jasa-pasang-atap-baja-ringan.html": "Jasa Pasang Atap Baja Ringan",  
      "https://www.betonjayareadymix.com/2018/09/jasa-pasang-kanopi-baja-ringan.html": "Jasa Pasang Kanopi Baja Ringan",
	    "https://www.betonjayareadymix.com/2019/04/jasa-borongan-baja-ringan.html": "Jasa Borongan Baja Ringan", 
	"https://www.betonjayareadymix.com/2018/09/jasa-tukang-baja-ringan.html": "Jasa Tukang Baja Ringan"
	
};
const urlMappingJasaPasangAtapBajaRinganFromMoneyPage3MoneyPage4 = { 
    
    // Harga & layanan turunan (L5 - MP)
    "https://www.betonjayareadymix.com/2018/09/harga-jasa-pasang-atap-baja-ringan.html": "Harga Jasa Pasang Atap Baja Ringan",
    
    // Halaman dengan lokasi (L6 - MC)
    "https://www.betonjayareadymix.com/2018/09/jasa-pasang-baja-ringan-terdekat.html": "Jasa Pasang Baja Ringan Terdekat"
};
const urlMappingJasaPasangKanopiBajaRinganFromMoneyPage3MoneyPage4 = { 
	  // Halaman utama (L4 - MM)
    "https://www.betonjayareadymix.com/2018/09/harga-jasa-pasang-kanopi-baja-ringan.html": "Harga Jasa Pasang Kanopi Baja Ringan",
    
    // Halaman turunan dengan lokasi (L5 - MP)
    "https://www.betonjayareadymix.com/2018/09/jasa-pasang-kanopi-baja-ringan-terdekat.html": "Jasa Pasang Kanopi Baja Ringan Terdekat"
    
    // Halaman terkait atap kanopi (⚠️ perlu redirect atau re-klasifikasi)
   // "https://www.betonjayareadymix.com/2018/09/harga-jasa-pasang-atap-kanopi.html": "Harga Jasa Pasang Atap Kanopi",
};
const urlMappingHargaJasaPasangBajaRinganFromMoneyPage3MoneyPage4 = {
	 "https://www.betonjayareadymix.com/2019/05/harga-jasa-pasang-baja-ringan-per-meter.html": "Harga Jasa Pasang Baja Ringan Per Meter",
    "https://www.betonjayareadymix.com/2019/04/harga-jasa-borongan-baja-ringan.html": "Harga Jasa Borongan Baja Ringan"
};
const urlMappingHargaJasaBoronganBajaRinganFromMoneyPage4MoneyPage5 = {
    "https://www.betonjayareadymix.com/2019/05/harga-jasa-borongan-rangka-atap-baja-ringan.html": "Harga Jasa Borongan Rangka Atap Baja Ringan",
    "https://www.betonjayareadymix.com/2019/05/harga-jasa-borongan-tenaga-pasang-baja-ringan.html": "Harga Jasa Borongan Tenaga Pasang Baja Ringan",
    // Halaman borongan plus material (L5 - MP)
    "https://www.betonjayareadymix.com/2019/04/harga-jasa-borongan-baja-ringan-plus-material.html": "Harga Jasa Borongan Baja Ringan Plus Material"
   
}; 
const urlMappingHargaJasaBoronganBajaRinganPlusMaterialFromMoneyPage5MoneyChild = {
    // Halaman borongan plus material per lokasi (L6 - MC)
    "https://www.betonjayareadymix.com/2019/05/harga-jasa-borongan-baja-ringan-plus-material-bandung.html": "Harga Jasa Borongan Baja Ringan Plus Material Bandung",
    "https://www.betonjayareadymix.com/2019/05/harga-jasa-borongan-baja-ringan-plus-material-karawang.html": "Harga Jasa Borongan Baja Ringan Plus Material Karawang",
    "https://www.betonjayareadymix.com/2019/05/harga-jasa-borongan-baja-ringan-plus-material-tangerang.html": "Harga Jasa Borongan Baja Ringan Plus Material Tangerang",
    "https://www.betonjayareadymix.com/2019/05/harga-jasa-borongan-baja-ringan-plus-material-bogor.html": "Harga Jasa Borongan Baja Ringan Plus Material Bogor",
    "https://www.betonjayareadymix.com/2019/05/harga-jasa-borongan-baja-ringan-plus-material-jakarta.html": "Harga Jasa Borongan Baja Ringan Plus Material Jakarta",
    "https://www.betonjayareadymix.com/2019/05/harga-jasa-borongan-baja-ringan-plus-material-depok.html": "Harga Jasa Borongan Baja Ringan Plus Material Depok",
    "https://www.betonjayareadymix.com/2019/05/harga-jasa-borongan-baja-ringan-plus-material-bekasi.html": "Harga Jasa Borongan Baja Ringan Plus Material Bekasi"
    
    // ⚠️ Perlu redirect atau re-klasifikasi
    //"https://www.betonjayareadymix.com/2019/04/borongan-baja-ringan.html": "Borongan Baja Ringan",
    //"https://www.betonjayareadymix.com/2018/09/harga-borongan-jasa-konstruksi-baja-ringan.html": "Harga Borongan Jasa Konstruksi Baja Ringan"
		
};
const urlMappingJasaTukangBajaRinganFromMoneyPage3MoneyPage4 = {
    
    // Varian harga (L6 - MC)
    "https://www.betonjayareadymix.com/2018/09/jasa-tukang-baja-ringan-murah.html": "Jasa Tukang Baja Ringan Murah",
    
    // Varian lokasi (L6 - MC)
    "https://www.betonjayareadymix.com/2018/09/jasa-tukang-baja-ringan-terdekat.html": "Jasa Tukang Baja Ringan Terdekat"
};

// ============================================================
// 📌 GROUP 5: REDIRECT YANG DISARANKAN
// ============================================================
// Halaman yang perlu di-redirect 301 ke URL yang lebih tepat:

// 1. "Harga Jasa Pasang Atap Kanopi" → Redirect ke "Harga Jasa Pasang Kanopi Baja Ringan"
// 2. "Borongan Baja Ringan" → Redirect ke "Harga Borongan Baja Ringan"
// 3. "Harga Borongan Jasa Konstruksi Baja Ringan" → Redirect ke "Harga Borongan Baja Ringan Plus Material"
// ============================================================
// 📁 JASA KONSTRUKSI BAJA KONVENSIONAL - MONEY PAGE
// 🧠 ENTITY: JASA → TYPE: MONEY_PAGE
// Parent: Jasa Konstruksi Baja Konvensional (SUB2)
// ============================================================

const urlMappingJasaKonstruksiBajaKonvensionalFromMoneyPage1MoneyPage2 = {
  // ============================================================
  // [MONEY_PAGE] - JASA KONSTRUKSI BAJA & BESI
  // ============================================================
  "https://www.betonjayareadymix.com/2018/09/harga-jasa-konstruksi-baja-konvensional.html": "Harga Jasa Konstruksi Baja Konvensional",

  "https://www.betonjayareadymix.com/2018/09/jasa-konstruksi-baja-gudang.html": "Jasa Konstruksi Baja Gudang", 
	  "https://www.betonjayareadymix.com/2018/09/jasa-konstruksi-baja-pabrik.html": "Jasa Konstruksi Baja Pabrik",
	"https://www.betonjayareadymix.com/2018/09/jasa-konstruksi-baja-ruko.html": "Jasa Konstruksi Baja Ruko", 
	
	  "https://www.betonjayareadymix.com/2018/09/jasa-konstruksi-baja-rumah.html": "Jasa Konstruksi Baja Rumah", 

  // karna ada jasa-konstruksi-baja-rumah hapus "https://www.betonjayareadymix.com/2018/09/jasa-pembuatan-rumah-rangka-baja.html": "Jasa Pembuatan Rumah Rangka Baja",
  
  "https://www.betonjayareadymix.com/2018/09/jasa-konstruksi-baja-gedung.html": "Jasa Konstruksi Baja Gedung",  // TYPE: MONEY_PAGE
  //"https://www.betonjayareadymix.com/2018/09/jasa-konstruksi-baja.html": "Jasa Konstruksi Baja",  // redirect ke JasaStrukturBajadanRangkaRingan
  
  // ============================================================
  // [MONEY_PAGE] - JASA PEMBANGUNAN TOWER
  // ============================================================
  "https://www.betonjayareadymix.com/2018/09/jasa-pembangunan-tower-baja.html": "Jasa Pembangunan Tower Baja",  
 };
const urlMappingHargaJasaKonstruksiBajaKonvensionalFromMoneyPage2MoneyPage3 = {
    // ============================================================
  // [MONEY_PAGE] - HARGA KONSTRUKSI BAJA WF
  // ============================================================
  "https://www.betonjayareadymix.com/2018/09/harga-jasa-konstruksi-besi-wf.html": "Harga Jasa Konstruksi Besi WF",
  "https://www.betonjayareadymix.com/2018/09/harga-jasa-konstruksi-baja-wf.html": "Harga Jasa Konstruksi Baja WF", 
  "https://www.betonjayareadymix.com/2018/09/harga-konstruksi-baja-wf-per-m2.html": "Harga Konstruksi Baja WF Per M2", 

  "https://www.betonjayareadymix.com/2018/09/harga-jasa-konstruksi-rumah-baja": "Harga Jasa Konstruksi Rumah Baja",  
   
	 // ============================================================
  // [MONEY_PAGE] - HARGA BORONGAN KONSTRUKSI BESI & BAJA
  // ============================================================
  "https://www.betonjayareadymix.com/2018/09/harga-borongan-jasa-konstruksi-besi.html": "Harga Borongan Jasa Konstruksi Besi",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/09/harga-borongan-konstruksi-besi.html": "Harga Borongan Konstruksi Besi",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/09/harga-borongan-konstruksi-baja-wf.html": "Harga Borongan Konstruksi Baja WF",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/09/harga-borongan-konstruksi-baja-per-meter.html": "Harga Borongan Konstruksi Baja Per Meter"  // TYPE: MONEY_PAGE
  
};
const urlMappingJasaPembangunanTowerBajaFromMoneyPage2MoneyPage3 = {
 "https://www.betonjayareadymix.com/2018/09/harga-jasa-pasang-tower.html": "Harga Jasa Pasang Tower",
 "https://www.betonjayareadymix.com/2018/09/harga-borongan-pasang-tower.html": "Harga Jasa Borongan Pasang Tower",  
  "https://www.betonjayareadymix.com/2018/09/jasa-pemasangan-tower-bts.html": "Jasa Pemasangan Tower BTS",  
  "https://www.betonjayareadymix.com/2018/09/jasa-pemasangan-tower-triangle.html": "Jasa Pemasangan Tower Triangle" 
};
const urlMappingHargaJasaPembangunanTowerBajaFromMoneyPage3MoneyPage4 = {
 "https://www.betonjayareadymix.com/2018/09/harga-borongan-pasang-tower.html": "Harga Jasa Borongan Pasang Tower"
};
// ============================================================
// 📁 JASA KANOPI BAJA DAN BESI - KOSONG (SARAN ITEM)
// ============================================================

const urlMappingJasaKanopiBajadanBesiFromMoneyPage1MoneyPage2 = {
  // 🟡 SARAN ITEM (BELUM AKTIF - PERLU DIBUAT KONTEN)
  // "https://www.betonjayareadymix.com/2018/09/jasa-kanopi-baja-ringan.html": "Jasa Kanopi Baja Ringan",  // TYPE: MONEY_PAGE
  // "https://www.betonjayareadymix.com/2018/09/jasa-kanopi-besi-tempa.html": "Jasa Kanopi Besi Tempa",  // TYPE: MONEY_PAGE
  // "https://www.betonjayareadymix.com/2018/09/harga-jasa-kanopi-baja-per-meter.html": "Harga Jasa Kanopi Baja Per Meter",  // TYPE: MONEY_PAGE
  // "https://www.betonjayareadymix.com/2018/09/jasa-kanopi-baja-jakarta.html": "Jasa Kanopi Baja Jakarta",  
};

// ============================================================
// 📁 JASA STRUKTUR BAJA GUDANG - KOSONG (SARAN ITEM)
// ============================================================

const urlMappingJasaStrukturBajaGudangFromMoneyPage1MoneyPage2 = {
  // 🟡 SARAN ITEM (BELUM AKTIF - PERLU DIBUAT KONTEN)
  // "https://www.betonjayareadymix.com/2018/09/jasa-struktur-baja-gudang.html": "Jasa Struktur Baja Gudang",  // TYPE: MONEY_PAGE
  // "https://www.betonjayareadymix.com/2018/09/harga-struktur-baja-gudang-per-m2.html": "Harga Struktur Baja Gudang Per M2",  // TYPE: MONEY_PAGE
  // "https://www.betonjayareadymix.com/2018/09/jasa-struktur-baja-gudang-jakarta.html": "Jasa Struktur Baja Gudang Jakarta",  
};

// ============================================================
// 📁 JASA COR BETON - MONEY PAGE & CHILD
// 🧠 ENTITY: JASA → TYPE: MONEY_PAGE & MONEY_CHILD
// Parent: Jasa Struktur Beton dan Pengecoran (SUB2)
// ============================================================

const urlMappingJasaCorBetonReadyMixFromMoneyPage1MoneyPage2  = {
  // ============================================================
  // [MONEY_PAGE] - HARGA BORONGAN COR BETON (NASIONAL)
  // ============================================================
  "https://www.betonjayareadymix.com/2018/09/harga-jasa-cor-beton-ready-mix.html": "Harga Jasa Cor Beton Ready Mix",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/09/harga-jasa-borongan-cor-beton.html": "Harga Jasa Borongan Cor Beton",  // TYPE: MONEY_PAGE
 // "https://www.betonjayareadymix.com/2018/09/borongan-cor-beton.html": "Borongan Cor Beton",  // TYPE: MONEY_PAGE
  
  // ============================================================
  // [MONEY_CHILD] - BORONGAN COR BETON PER LOKASI
  // ============================================================
  "https://www.betonjayareadymix.com/2018/09/borongan-cor-beton-tangerang.html": "Borongan Cor Beton Tangerang",  
  "https://www.betonjayareadymix.com/2018/09/borongan-cor-beton-jakarta.html": "Borongan Cor Beton Jakarta",  
  "https://www.betonjayareadymix.com/2018/09/borongan-cor-beton-depok.html": "Borongan Cor Beton Depok",  
  "https://www.betonjayareadymix.com/2018/09/borongan-cor-beton-bogor.html": "Borongan Cor Beton Bogor",  
  "https://www.betonjayareadymix.com/2018/09/borongan-cor-beton-bekasi.html": "Borongan Cor Beton Bekasi",  
  "https://www.betonjayareadymix.com/2018/09/borongan-cor-beton-terdekat.html": "Borongan Cor Beton Terdekat",  

  // ============================================================
  // [MONEY_PAGE] - JASA & HARGA SLOOF
  // ============================================================
  "https://www.betonjayareadymix.com/2018/09/jasa-sloof-beton.html": "Jasa Sloof Beton",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2021/12/harga-cor-beton-sloof.html": "Harga Cor Beton Sloof",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/09/harga-sloof-per-meter.html": "Harga Sloof Per Meter",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/09/borongan-sloof.html": "Borongan Sloof",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/09/harga-borongan-sloof-per-meter-kubik.html": "Harga Borongan Sloof Per Meter Kubik",  // TYPE: MONEY_PAGE
  
  // ============================================================
  // [MONEY_CHILD] - HARGA SLOOF PER M3 PER LOKASI
  // ============================================================
  "https://www.betonjayareadymix.com/2019/01/harga-sloof-per-m3-kuningan.html": "Harga Sloof Per m3 Kuningan",  
  "https://www.betonjayareadymix.com/2019/01/harga-sloof-per-m3-ciamis.html": "Harga Sloof Per m3 Ciamis",  
  "https://www.betonjayareadymix.com/2019/01/harga-sloof-per-m3-cianjur.html": "Harga Sloof Per m3 Cianjur",  
  "https://www.betonjayareadymix.com/2019/01/harga-sloof-per-m3-cirebon.html": "Harga Sloof Per m3 Cirebon",  
  "https://www.betonjayareadymix.com/2019/01/harga-sloof-per-m3-indramayu.html": "Harga Sloof Per m3 Indramayu",  
  "https://www.betonjayareadymix.com/2019/01/harga-sloof-per-m3-bandung.html": "Harga Sloof Per m3 Bandung",  
  "https://www.betonjayareadymix.com/2019/01/harga-sloof-per-m3-sukabumi.html": "Harga Sloof Per m3 Sukabumi",  
  "https://www.betonjayareadymix.com/2019/01/harga-sloof-per-m3-sumedang.html": "Harga Sloof Per m3 Sumedang",  
  "https://www.betonjayareadymix.com/2019/01/harga-sloof-per-m3-tasikmalaya.html": "Harga Sloof Per m3 Tasikmalaya",  
  "https://www.betonjayareadymix.com/2019/01/harga-sloof-per-m3-garut.html": "Harga Sloof Per m3 Garut",  
  "https://www.betonjayareadymix.com/2019/01/harga-sloof-per-m3-karawang.html": "Harga Sloof Per m3 Karawang",  
  "https://www.betonjayareadymix.com/2019/01/harga-sloof-per-m3-majalengka.html": "Harga Sloof Per m3 Majalengka",  
  "https://www.betonjayareadymix.com/2019/01/harga-sloof-per-m3-purwakarta.html": "Harga Sloof Per m3 Purwakarta",  
  "https://www.betonjayareadymix.com/2019/01/harga-sloof-per-m3-subang.html": "Harga Sloof Per m3 Subang",  
  "https://www.betonjayareadymix.com/2019/01/harga-sloof-per-m3-depok.html": "Harga Sloof Per m3 Depok",  
  "https://www.betonjayareadymix.com/2019/01/harga-sloof-per-m3-tangerang.html": "Harga Sloof Per m3 Tangerang",  
  "https://www.betonjayareadymix.com/2019/01/harga-sloof-per-m3-jakarta.html": "Harga Sloof Per m3 Jakarta",  
  "https://www.betonjayareadymix.com/2019/01/harga-sloof-per-m3-bekasi.html": "Harga Sloof Per m3 Bekasi",  
  "https://www.betonjayareadymix.com/2019/01/harga-sloof-per-m3-bogor.html": "Harga Sloof Per m3 Bogor",  

  // ============================================================
  // [MONEY_PAGE] - JASA STRUKTUR BETON LAINNYA
  // ============================================================
  "https://www.betonjayareadymix.com/2018/09/jasa-ring-balok.html": "Jasa Ring Balok",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/09/jasa-kolom.html": "Jasa Kolom",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/09/jasa-cor-tiang.html": "Jasa Cor Tiang",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/09/jasa-gelar-beton.html": "Jasa Gelar Beton",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/09/jasa-rabat-beton-per-meter.html": "Jasa Rabat Beton per Meter",  // TYPE: MONEY_PAGE
};
const urlMappingHargaJasaBoronganCorBetonFromMoneyPage2MoneyPage3  = {
"https://www.betonjayareadymix.com/2018/09/harga-jasa-borongan-cor-beton-bangunan.html": "Harga Jasa Borongan Cor Beton Bangunan"
};
const urlMappingHargaJasaBoronganCorBetonBangunanFromMoneyPage3MoneyPage4  = {
 "https://www.betonjayareadymix.com/2018/09/harga-jasa-borongan-cor-beton-townhouse.html": "Harga Jasa Borongan Cor Beton Townhouse",  
  "https://www.betonjayareadymix.com/2018/09/harga-jasa-borongan-cor-beton-villa.html": "Harga Jasa Borongan Cor Beton Villa",  
  "https://www.betonjayareadymix.com/2018/09/harga-jasa-borongan-cor-beton-pabrik.html": "Harga Jasa Borongan Cor Beton Pabrik",  
  "https://www.betonjayareadymix.com/2018/09/harga-jasa-borongan-cor-beton-gedung.html": "Harga Jasa Borongan Cor Beton Gedung",  
  "https://www.betonjayareadymix.com/2018/09/harga-jasa-borongan-cor-beton-gudang.html": "Harga Jasa Borongan Cor Beton Gudang",  
  "https://www.betonjayareadymix.com/2018/09/harga-jasa-borongan-cor-beton-masjid.html": "Harga Jasa Borongan Cor Beton Masjid",  
  "https://www.betonjayareadymix.com/2018/09/harga-jasa-borongan-cor-beton-yayasan.html": "Harga Jasa Borongan Cor Beton Yayasan",  
  "https://www.betonjayareadymix.com/2018/09/harga-jasa-borongan-cor-beton-mall.html": "Harga Jasa Borongan Cor Beton Mall",  
  "https://www.betonjayareadymix.com/2018/09/2018/09/harga-jasa-borongan-cor-beton-stadion.html": "Harga Jasa Borongan Cor Beton Stadion",  
  "https://www.betonjayareadymix.com/2018/09/harga-jasa-borongan-cor-beton-stasiun.html": "Harga Jasa Borongan Cor Beton Stasiun",  
  "https://www.betonjayareadymix.com/2018/09/harga-jasa-borongan-cor-beton-sekolah.html": "Harga Jasa Borongan Cor Beton Sekolah",  
  "https://www.betonjayareadymix.com/2018/09/harga-jasa-borongan-cor-beton-pelabuhan.html": "Harga Jasa Borongan Cor Beton Pelabuhan",  
  "https://www.betonjayareadymix.com/2018/09/harga-jasa-borongan-cor-beton-bandara.html": "Harga Jasa Borongan Cor Beton Bandara",  
  "https://www.betonjayareadymix.com/2018/09/harga-jasa-borongan-cor-beton-apartemen.html": "Harga Jasa Borongan Cor Beton Apartemen",  
  "https://www.betonjayareadymix.com/2018/09/harga-jasa-borongan-cor-beton-hotel.html": "Harga Jasa Borongan Cor Beton Hotel",  
  "https://www.betonjayareadymix.com/2018/09/harga-jasa-borongan-cor-beton-kontrakan.html": "Harga Jasa Borongan Cor Beton Kontrakan",  
  "https://www.betonjayareadymix.com/2018/09/harga-jasa-borongan-cor-beton-ruko-toko.html": "Harga Jasa Borongan Cor Beton Ruko Toko",  
  "https://www.betonjayareadymix.com/2018/09/harga-jasa-borongan-cor-beton-rukan-kantor.html": "Harga Jasa Borongan Cor Beton Rukan Kantor",  
  "https://www.betonjayareadymix.com/2018/09/harga-jasa-borongan-cor-beton-rumah.html": "Harga Jasa Borongan Cor Beton Rumah"  
  
};
// ============================================================
// 📁 JASA PENGECORAN LANTAI DAK - MONEY PAGE
// ============================================================

const urlMappingJasaPengecoranLantaiDakFromMoneyPage1MoneyPage2 = {
  // ============================================================
  // [MONEY_PAGE] - COR DAK & LANTAI
  // ============================================================
  "https://www.betonjayareadymix.com/2018/10/harga-jasa-cor-dak-beton.html": "Harga Jasa Cor Dak Beton"
  
 };
const urlMappingHargaJasaCorDakBetonFromMoneyPage2MoneyPage3 = {

  "https://www.betonjayareadymix.com/2018/09/harga-jasa-borongan-cor-dak-beton.html": "Harga Jasa Borongan Cor Dak Beton"
 };
// ============================================================
// 📁 JASA PENGECORAN LANTAI GUDANG - KOSONG (SARAN ITEM)
// ============================================================

const urlMappingJasaPengecoranLantaiGudangFromMoneyPage1MoneyPage2 = {
  // 🟡 SARAN ITEM (BELUM AKTIF - PERLU DIBUAT KONTEN)
  // "https://www.betonjayareadymix.com/2018/09/jasa-cor-lantai-gudang.html": "Jasa Cor Lantai Gudang",  // TYPE: MONEY_PAGE
  // "https://www.betonjayareadymix.com/2018/09/harga-cor-lantai-gudang-per-m2.html": "Harga Cor Lantai Gudang Per M2",  // TYPE: MONEY_PAGE
};

// ============================================================
// 📁 JASA BEKISTING DAN PEMBESIAN - MONEY PAGE
// ============================================================

const urlMappingJasaBekistingdanPembesianFromMoneyPage1MoneyPage2 = {
  // ============================================================
  // [MONEY_PAGE] - JASA BEKISTING
  // ============================================================
  "https://www.betonjayareadymix.com/2021/12/jasa-bekisting-sloof-per-m2.html": "Jasa Bekisting Sloof per m2",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2021/08/jasa-bekisting-rumah.html": "Jasa Bekisting Rumah",  // TYPE: MONEY_PAGE
};

// ============================================================
// 📁 JASA PENGECORAN KOLOM BETON - MONEY PAGE
// ============================================================

const urlMappingJasaPengecoranKolomBetonFromMoneyPage1MoneyPage2 = {
  // ============================================================
  // [MONEY_PAGE] - BORONGAN KOLOM
  // ============================================================
  "https://www.betonjayareadymix.com/2018/09/borongan-kolom.html": "Borongan Kolom",  // TYPE: MONEY_PAGE
};

// ============================================================
// 📁 JASA KONSTRUKSI GEDUNG HUNIAN - MONEY PAGE
// 🧠 ENTITY: JASA → TYPE: MONEY_PAGE
// Parent: Jasa Konstruksi Gedung dan Hunian (SUB2)
// ============================================================

const urlMappingJasaKonstruksiGedungHunianFromMoneyPageMoneyPage1 = {

};

// ============================================================
// 📁 JASA KONSTRUKSI RUMAH TINGGAL - MONEY PAGE & CHILD
// Parent: Jasa Konstruksi Gedung dan Hunian (SUB2)
// ============================================================
const urlMappingJasaPembuatanBangunanFromMoneyMaster1MoneyPage = {
 "https://www.betonjayareadymix.com/2018/09/harga-jasa-pembuatan-bangunan.html": "Harga Jasa Pembuatan Bangunan"  // TYPE: MONEY_PAGE
};
const urlMappingHargaJasaPembuatanBangunanFromMoneyPageMoneyPage1 = {
   "https://www.betonjayareadymix.com/2018/09/harga-jasa-borongan-bangunan.html": "Harga Jasa Borongan Bangunan" 
};
const urlMappingHargaJasaBoronganBangunanFromMoneyPage1MoneyPage2 = {
 // [MONEY_PAGE] - HARGA BORONGAN KONSTRUKSI PER METER (NASIONAL)
  // ============================================================
   "https://www.betonjayareadymix.com/2018/09/harga-jasa-upah-tenaga-borongan-bangunan-per-m2.html": "Harga Jasa Upah Tenaga Borongan Bangunan Per M2",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/09/harga-jasa-borongan-konstruksi-per-meter.html": "Harga Jasa Borongan Konstruksi Per Meter",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/09/harga-jasa-borongan-tukang-bangunan-per-meter.html": "Harga Jasa Borongan Tukang Bangunan Per Meter",  // TYPE: MONEY_PAGE
"https://www.betonjayareadymix.com/2018/09/harga-jasa-borongan-bangunan-plus-material.html": "Harga Jasa Borongan Bangunan Plus Material"  // TYPE: MONEY_PAGE
};
const urlMappingHargaJasaBoronganBangunanFromMoneyPage1MoneyChild = {
 // ============================================================
  // [MONEY_CHILD] - HARGA BORONGAN BANGUNAN PER LOKASI
  // ============================================================
  "https://www.betonjayareadymix.com/2018/11/harga-jasa-borongan-bangunan-dki-jakarta.html": "Harga Jasa Borongan Bangunan DKI Jakarta",  
  "https://www.betonjayareadymix.com/2018/11/harga-jasa-borongan-bangunan-tangerang.html": "Harga Jasa Borongan Bangunan Tangerang",  
  "https://www.betonjayareadymix.com/2018/11/harga-jasa-borongan-bangunan-bekasi.html": "Harga Jasa Borongan Bangunan Bekasi",  
  "https://www.betonjayareadymix.com/2018/11/harga-jasa-borongan-bangunan-depok.html": "Harga Jasa Borongan Bangunan Depok",  
  "https://www.betonjayareadymix.com/2018/11/harga-jasa-borongan-bangunan-bogor.html": "Harga Jasa Borongan Bangunan Bogor"


};
const urlMappingJasaPembuatanRumahFromMoneyMaster2MoneyPage = {
	"https://www.betonjayareadymix.com/2018/09/harga-jasa-pembuatan-rumah.html": "Harga Jasa Pembuatan Rumah"
};
const urlMappingHargaJasaPembuatanRumahFromMoneyPageMoneyPage1 = {
	  "https://www.betonjayareadymix.com/2018/09/harga-jasa-borongan-rumah.html": "Harga Jasa Borongan Rumah",
	 "https://www.betonjayareadymix.com/2018/09/harga-jasa-konstruksi-rumah-per-m2": "Harga Jasa Konstruksi Rumah Per M2"
	
};		  
const urlMappingHargaJasaBoronganRumahFromMoneyPage1MoneyPage2 = {
 "https://www.betonjayareadymix.com/2018/09/harga-jasa-borongan-bangunan-rumah.html": "Harga Jasa Borongan Bangunan Rumah",  // TYPE: MONEY_PAGE

  "https://www.betonjayareadymix.com/2018/09/harga-jasa-borongan-rumah-per-meter-plus-material.html": "Harga Jasa Borongan Rumah Per Meter Plus Material",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/09/harga-jasa-borongan-rumah-per-meter-terima-kunci.html": "Harga Jasa Borongan Rumah Per Meter Terima Kunci",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/09/harga-jasa-borongan-rumah-1-lantai-per-meter.html": "Harga Jasa Borongan Rumah 1 Lantai Per Meter",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/09/harga-jasa-borongan-tenaga-bangunan-rumah.html": "Harga Jasa Borongan Tenaga Bangunan Rumah",  // TYPE: MONEY_PAGE
   "https://www.betonjayareadymix.com/2018/09/harga-jasa-borongan-rumah-2-lantai-per-m2.html": "Harga Jasa Borongan Rumah 2 Lantai Per M2"

 };

const urlMappingHargaJasaBoronganRumahFromMoneyPage1MoneyChild = {

  // ============================================================
  // [MONEY_CHILD] - HARGA BORONGAN RUMAH TERIMA KUNCI PER LOKASI
  // ============================================================
  "https://www.betonjayareadymix.com/2018/11/harga-jasa-borongan-rumah-per-meter-terima-kunci-cirebon.html": "Harga Jasa Borongan Rumah Per Meter Terima Kunci Cirebon",  
  "https://www.betonjayareadymix.com/2018/11/harga-jasa-borongan-rumah-per-meter-terima-kunci-cianjur.html": "Harga Jasa Borongan Rumah Per Meter Terima Kunci Cianjur",  
  "https://www.betonjayareadymix.com/2018/11/harga-jasa-borongan-rumah-per-meter-terima-kunci-jakarta.html": "Harga Jasa Borongan Rumah Per Meter Terima Kunci Jakarta",  
  "https://www.betonjayareadymix.com/2018/11/harga-jasa-borongan-rumah-per-meter-terima-kunci-bogor.html": "Harga Jasa Borongan Rumah Per Meter Terima Kunci Bogor",  
  "https://www.betonjayareadymix.com/2018/11/harga-jasa-borongan-rumah-per-meter-terima-kunci-depok.html": "Harga Jasa Borongan Rumah Per Meter Terima Kunci Depok",  
  "https://www.betonjayareadymix.com/2018/11/harga-jasa-borongan-rumah-per-meter-terima-kunci-tangerang.html": "Harga Jasa Borongan Rumah Per Meter Terima Kunci Tangerang",  
  "https://www.betonjayareadymix.com/2018/11/harga-jasa-borongan-rumah-per-meter-terima-kunci-bekasi.html": "Harga Jasa Borongan Rumah Per Meter Terima Kunci Bekasi",  
  "https://www.betonjayareadymix.com/2018/11/harga-jasa-borongan-rumah-per-meter-terima-kunci-karawang.html": "Harga Jasa Borongan Rumah Per Meter Terima Kunci Karawang",  
  "https://www.betonjayareadymix.com/2018/11/harga-jasa-borongan-rumah-per-meter-terima-kunci-terdekat.html": "Harga Jasa Borongan Rumah Per Meter Terima Kunci Terdekat"
};
const urlMappingJasaBangunRumahFromMoneyMaster3MoneyPage = {
  "https://www.betonjayareadymix.com/2018/09/jasa-bangun-rumah-borongan.html": "Jasa Bangun Rumah Borongan"
};
const urlMappingJasaBangunRumahFromMoneyMaster3MoneyChild = {
    // ============================================================
  // [MONEY_CHILD] - JASA BANGUN RUMAH PER LOKASI
  // ============================================================
  "https://www.betonjayareadymix.com/2018/11/jasa-bangun-rumah-depok.html": "Jasa Bangun Rumah Depok",  
  "https://www.betonjayareadymix.com/2018/11/jasa-bangun-rumah-tangerang.html": "Jasa Bangun Rumah Tangerang",  
  "https://www.betonjayareadymix.com/2018/11/jasa-bangun-rumah-jakarta.html": "Jasa Bangun Rumah Jakarta",  
  "https://www.betonjayareadymix.com/2018/11/jasa-bangun-rumah-bogor.html": "Jasa Bangun Rumah Bogor",  
  "https://www.betonjayareadymix.com/2018/11/jasa-bangun-rumah-bekasi.html": "Jasa Bangun Rumah Bekasi"  

};
// ============================================================
// 📁 JASA KONSTRUKSI RUKO DAN KIOS - MONEY PAGE
// ============================================================

const urlMappingJasaPembuatanRukoFromMoneyMaster2MoneyPage= {
  // ============================================================
  // [MONEY_PAGE] - JASA KONSTRUKSI BAJA RUKO
  // ============================================================
  //"https://www.betonjayareadymix.com/2018/09/jasa-konstruksi-baja-ruko.html": "Jasa Konstruksi Baja Ruko",  // TYPE: MONEY_PAGE
  //"https://www.betonjayareadymix.com/2018/09/jasa-konstruksi-baja-ringan-ruko.html": "Jasa Konstruksi Baja Ringan Ruko",  // TYPE: MONEY_PAGE
};

// ============================================================
// 📁 JASA KONSTRUKSI VILLA - KOSONG (SARAN ITEM)
// ============================================================

const urlMappingJasaPembuatanVillaFromMoneyMaster2MoneyPage = {
  // 🟡 SARAN ITEM (BELUM AKTIF - PERLU DIBUAT KONTEN)
  // "https://www.betonjayareadymix.com/2018/09/jasa-konstruksi-villa.html": "Jasa Konstruksi Villa",  // TYPE: MONEY_PAGE
  // "https://www.betonjayareadymix.com/2018/09/harga-borongan-villa-per-m2.html": "Harga Borongan Villa Per M2",  // TYPE: MONEY_PAGE
};

// ============================================================
// 📁 JASA KONSTRUKSI APARTEMEN - KOSONG (SARAN ITEM)
// ============================================================

const urlMappingJasaPembuatanApartemenFromMoneyMaster2MoneyPage = {
  // 🟡 SARAN ITEM (BELUM AKTIF - PERLU DIBUAT KONTEN)
  // "https://www.betonjayareadymix.com/2018/09/jasa-konstruksi-apartemen.html": "Jasa Konstruksi Apartemen",  // TYPE: MONEY_PAGE
  // "https://www.betonjayareadymix.com/2018/09/harga-borongan-apartemen-per-m2.html": "Harga Borongan Apartemen Per M2",  // TYPE: MONEY_PAGE
};

// ============================================================
// 📁 JASA KONSTRUKSI HOTEL - KOSONG (SARAN ITEM)
// ============================================================

const urlMappingJasaPembuatanHotelFromMoneyMaster2MoneyPage = {
  // 🟡 SARAN ITEM (BELUM AKTIF - PERLU DIBUAT KONTEN)
  // "https://www.betonjayareadymix.com/2018/09/jasa-konstruksi-hotel.html": "Jasa Konstruksi Hotel",  // TYPE: MONEY_PAGE
  // "https://www.betonjayareadymix.com/2018/09/harga-borongan-hotel-per-m2.html": "Harga Borongan Hotel Per M2",  // TYPE: MONEY_PAGE
};

// ============================================================
// 📁 JASA KONSTRUKSI PERKANTORAN - KOSONG (SARAN ITEM)
// ============================================================

const urlMappingJasaPembuatanPerkantoranFromMoneyMaster2MoneyPage = {
  // 🟡 SARAN ITEM (BELUM AKTIF - PERLU DIBUAT KONTEN)
  // "https://www.betonjayareadymix.com/2018/09/jasa-konstruksi-perkantoran.html": "Jasa Konstruksi Perkantoran",  // TYPE: MONEY_PAGE
  // "https://www.betonjayareadymix.com/2018/09/harga-borongan-kantor-per-m2.html": "Harga Borongan Kantor Per M2",  // TYPE: MONEY_PAGE
};

// ============================================================
// 📁 JASA KONSTRUKSI GEDUNG SEKOLAH - MONEY PAGE
// ============================================================

const urlMappingJasaPembuatanSekolahFromMoneyMaster2MoneyPage = {
 
};

// ============================================================
// 📁 JASA KONSTRUKSI GEDUNG RUMAH SAKIT - KOSONG (SARAN ITEM)
// ============================================================

const urlMappingJasaPembuatanRSFromFromMoneyMaster2MoneyPage = {
  // 🟡 SARAN ITEM (BELUM AKTIF - PERLU DIBUAT KONTEN)
  // "https://www.betonjayareadymix.com/2018/09/jasa-konstruksi-rumah-sakit.html": "Jasa Konstruksi Rumah Sakit",  // TYPE: MONEY_PAGE
  // "https://www.betonjayareadymix.com/2018/09/harga-borongan-rumah-sakit-per-m2.html": "Harga Borongan Rumah Sakit Per M2",  // TYPE: MONEY_PAGE
};

// ============================================================
// 📁 JASA KONSTRUKSI GUDANG LOGISTIK - MONEY PAGE
// 🧠 ENTITY: JASA → TYPE: MONEY_PAGE
// Parent: Jasa Konstruksi Industri dan Gudang (SUB2)
// ============================================================

const urlMappingJasaPembuatanGudangFromFromMoneyMaster2MoneyPage = {
 
  "https://www.betonjayareadymix.com/2018/09/jasa-pembuatan-konstruksi-gudang.html": "Jasa Pembuatan Konstruksi Gudang",
  "https://www.betonjayareadymix.com/2018/09/harga-jasa-pembuatan-gudang.html": "Harga Jasa Pembuatan Gudang"

};
const urlMappingHargaJasaPembuatanGudangFromFromMoneyPageMoneyPage1 = {
	 // ============================================================
  // [MONEY_PAGE] - HARGA PEMBANGUNAN GUDANG
  // ============================================================
  "https://www.betonjayareadymix.com/2018/09/biaya-jasa-pembuatan-gudang-baja-ringan.html": "Biaya Jasa Pembuatan Gudang Baja Ringan",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/09/harga-jasa-konstruksi-gudang-per-meter.html": "Harga Jasa Konstruksi Gudang per Meter",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/09/harga-jasa-borong-tenaga-bikin-gudang.html": "Harga Jasa Borong Tenaga Bikin Gudang",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/09/harga-jasa-borongan-gudang-per-m2.html": "Harga Jasa Borongan Gudang per M2",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/09/harga-jasa-bangun-gudang.html": "Harga Jasa Bangun Gudang",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/09/harga-jasa-pembuatan-gudang-rangka-baja.html": "Harga Jasa Pembuatan Gudang Rangka Baja",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/09/biaya-jasa-pembuatan-gudang-per-meter.html": "Biaya Jasa Pembuatan Gudang per Meter",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/09/harga-jasa-pembuatan-gudang-per-m2.html": "Harga Jasa Pembuatan Gudang per M2"  // TYPE: MONEY_PAGE

};
// ============================================================
// 📁 JASA KONSTRUKSI PABRIK - MONEY PAGE
// ============================================================

const urlMappingJasaKonstruksiPabrikIndustriFromMoneyPageMoneyPage1 = {
  // ============================================================
  // [MONEY_PAGE] - KONSTRUKSI BAJA PABRIK
  // ============================================================
// TYPE: MONEY_PAGE
};

// ============================================================
// 📁 JASA KONSTRUKSI COLD STORAGE - KOSONG (SARAN ITEM)
// ============================================================

const urlMappingJasaKonstruksiColdStorageModernFromMoneyPageMoneyPage1 = {
  // 🟡 SARAN ITEM (BELUM AKTIF - PERLU DIBUAT KONTEN)
  // "https://www.betonjayareadymix.com/2018/09/jasa-konstruksi-cold-storage.html": "Jasa Konstruksi Cold Storage",  // TYPE: MONEY_PAGE
  // "https://www.betonjayareadymix.com/2018/09/harga-borongan-cold-storage-per-m2.html": "Harga Borongan Cold Storage Per M2",  // TYPE: MONEY_PAGE
};

// ============================================================
// 📁 JASA KONSTRUKSI BENGKEL - KOSONG (SARAN ITEM)
// ============================================================

const urlMappingJasaKonstruksiBengkelModernFromMoneyPageMoneyPage1 = {
  // 🟡 SARAN ITEM (BELUM AKTIF - PERLU DIBUAT KONTEN)
  // "https://www.betonjayareadymix.com/2018/09/jasa-konstruksi-bengkel.html": "Jasa Konstruksi Bengkel",  // TYPE: MONEY_PAGE
  // "https://www.betonjayareadymix.com/2018/09/harga-borongan-bengkel-per-m2.html": "Harga Borongan Bengkel Per M2",  // TYPE: MONEY_PAGE
};

// ============================================================
// 📁 JASA KONSTRUKSI WORKSHOP - KOSONG (SARAN ITEM)
// ============================================================

const urlMappingJasaKonstruksiWorkshopModernFromMoneyPageMoneyPage1 = {
  // 🟡 SARAN ITEM (BELUM AKTIF - PERLU DIBUAT KONTEN)
  // "https://www.betonjayareadymix.com/2018/09/jasa-konstruksi-workshop.html": "Jasa Konstruksi Workshop",  // TYPE: MONEY_PAGE
  // "https://www.betonjayareadymix.com/2018/09/harga-borongan-workshop-per-m2.html": "Harga Borongan Workshop Per M2",  // TYPE: MONEY_PAGE
};

// ============================================================
// 📁 JASA PEMBUATAN LAPANGAN OLAHRAGA - MONEY PAGE
// 🧠 ENTITY: JASA → TYPE: MONEY_PAGE
// Parent: Jasa Konstruksi Lapangan Olahraga (SUB2)
// ============================================================

const urlMappingJasaPembuatanLapanganOlahRagaFromMoneyPageMoneyChild = {
 "https://www.betonjayareadymix.com/2018/09/jasa-pembuatan-lapangan-olahraga-jakarta.html": "Jasa Pembuatan Lapangan OlahRaga Jakarta",
 "https://www.betonjayareadymix.com/2018/09/jasa-pembuatan-lapangan-olahraga-bogor.html": "Jasa Pembuatan Lapangan OlahRaga Bogor",
 "https://www.betonjayareadymix.com/2018/09/jasa-pembuatan-lapangan-olahraga-depok.html": "Jasa Pembuatan Lapangan OlahRaga Depok",
 "https://www.betonjayareadymix.com/2018/09/jasa-pembuatan-lapangan-olahraga-tangerang.html": "Jasa Pembuatan Lapangan OlahRaga Tangerang",
 "https://www.betonjayareadymix.com/2018/09/jasa-pembuatan-lapangan-olahraga-bekasi.html": "Jasa Pembuatan Lapangan OlahRaga Bekasi",
 "https://www.betonjayareadymix.com/2018/09/jasa-pembuatan-lapangan-olahraga-karawang.html": "Jasa Pembuatan Lapangan OlahRaga Karawang",
 "https://www.betonjayareadymix.com/2018/09/jasa-pembuatan-lapangan-olahraga-terdekat.html": "Jasa Pembuatan Lapangan OlahRaga Terdekat"
  
	
};

// ============================================================
// 📁 JASA PEMBUATAN LAPANGAN FUTSAL - MONEY PAGE & CHILD
// ============================================================
const urlMappingJasaPembuatanLapanganFutsalFromMoneyPage1MoneyPage2 = {
  // ============================================================
  // [MONEY_PAGE] - HARGA BUAT LAPANGAN FUTSAL
  // ============================================================
  "https://www.betonjayareadymix.com/2018/09/harga-jasa-pembuatan-lapangan-futsal.html": "Harga Jasa Pembuatan Lapangan Futsal"
};	
const urlMappingJasaPembuatanLapanganFutsalFromMoneyPage1MoneyChild = {


  // ============================================================
  // [MONEY_CHILD] - JASA PEMBUATAN LAPANGAN FUTSAL PER LOKASI
  // ============================================================
  "https://www.betonjayareadymix.com/2018/11/jasa-pembuatan-lapangan-futsal-bekasi.html": "Jasa Pembuatan Lapangan Futsal Bekasi",  
  "https://www.betonjayareadymix.com/2018/11/jasa-pembuatan-lapangan-futsal-depok.html": "Jasa Pembuatan Lapangan Futsal Depok",  
  "https://www.betonjayareadymix.com/2018/11/jasa-pembuatan-lapangan-futsal-jakarta.html": "Jasa Pembuatan Lapangan Futsal Jakarta",  
  "https://www.betonjayareadymix.com/2018/11/jasa-pembuatan-lapangan-futsal-tangerang.html": "Jasa Pembuatan Lapangan Futsal Tangerang",  
  "https://www.betonjayareadymix.com/2018/11/jasa-pembuatan-lapangan-futsal-bogor.html": "Jasa Pembuatan Lapangan Futsal Bogor"  
};

// ============================================================
// 📁 JASA PEMBUATAN LAPANGAN BASKET - MONEY PAGE
// ============================================================

const urlMappingJasaPembuatanLapanganBasketFromMoneyPage1MoneyPage2 = {
  // ============================================================
  // [MONEY_PAGE] - JASA & HARGA LAPANGAN BASKET
  // ============================================================
  "https://www.betonjayareadymix.com/2018/09/harga-buat-lapangan-basket.html": "Harga Jasa Pembuatan Lapangan Basket"
};

// ============================================================
// 📁 JASA PEMBUATAN LAPANGAN SEPAKBOLA - MONEY PAGE
// ============================================================

const urlMappingJasaPembuatanLapanganSepakbolaFromMoneyPage1MoneyPage2 = {
  // ============================================================
  // [MONEY_PAGE] - JASA & HARGA LAPANGAN MINI SOCCER
  // ============================================================
  "https://www.betonjayareadymix.com/2018/09/harga-jasa-pembuatan-lapangan-mini-soccer.html": "Harga Jasa Pembuatan Lapangan Mini Soccer",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/09/jasa-pembuatan-lapangan-mini-soccer.html": "Jasa Pembuatan Lapangan Mini Soccer"  // TYPE: MONEY_PAGE
};

// ============================================================
// 📁 JASA PEMBUATAN LAPANGAN TENIS - MONEY PAGE
// ============================================================

const urlMappingJasaPembuatanLapanganTenisFromMoneyPage1MoneyPage2 = {
  // ============================================================
  // [MONEY_PAGE] - HARGA BUAT LAPANGAN TENIS
  // ============================================================
  "https://www.betonjayareadymix.com/2018/09/harga-jasa-pembuatan-lapangan-tenis.html": "Harga Jasa Pembuatan Lapangan Tenis"
};

// ============================================================
// 📁 JASA PEMBUATAN LAPANGAN BADMINTON - MONEY PAGE
// ============================================================

const urlMappingJasaPembuatanLapanganBadmintonFromMoneyPage1MoneyPage2 = {
  // ============================================================
  // [MONEY_PAGE] - HARGA BUAT LAPANGAN BADMINTON
  // ============================================================
  "https://www.betonjayareadymix.com/2018/09/harga-jasa-pembuatan-lapangan-badminton.html": "Harga Jasa Pembuatan Lapangan Badminton"
};

// ============================================================
// 📁 JASA PEMBUATAN LAPANGAN VOLI - MONEY PAGE & CHILD
// ============================================================

const urlMappingJasaPembuatanLapanganVoliFromMoneyPage1MoneyPage2 = {
  // ============================================================
  // [MONEY_PAGE] - JASA & HARGA LAPANGAN VOLI
  // ============================================================
  "https://www.betonjayareadymix.com/2018/09/harga-jasa-pembuatan-lapangan-voli.html": "Harga Jasa Pembuatan Lapangan Voli"  // TYPE: MONEY_PAGE
  //"https://www.betonjayareadymix.com/2018/09/jasa-pembuatan-lapangan-voli.html": "Jasa Pembuatan Lapangan Voli"
};

const urlMappingJasaPembuatanLapanganVoliFromMoneyPage1MoneyChild = {
  // ============================================================
  // [MONEY_CHILD] - JASA PEMBUATAN LAPANGAN VOLI PER LOKASI
  // ============================================================
  "https://www.betonjayareadymix.com/2018/11/jasa-pembuatan-lapangan-voli-depok.html": "Jasa Pembuatan Lapangan Voli Depok",  
  "https://www.betonjayareadymix.com/2018/11/jasa-pembuatan-lapangan-voli-tangerang.html": "Jasa Pembuatan Lapangan Voli Tangerang",  
  "https://www.betonjayareadymix.com/2018/11/jasa-pembuatan-lapangan-voli-jakarta.html": "Jasa Pembuatan Lapangan Voli Jakarta",  
  "https://www.betonjayareadymix.com/2018/11/jasa-pembuatan-lapangan-voli-bekasi.html": "Jasa Pembuatan Lapangan Voli Bekasi",  
  "https://www.betonjayareadymix.com/2018/11/jasa-pembuatan-lapangan-voli-bogor.html": "Jasa Pembuatan Lapangan Voli Bogor"
};
// ============================================================
// 📁 JASA PEMBUATAN LAPANGAN SERBAGUNA - KOSONG (SARAN ITEM)
// ============================================================

const urlMappingJasaPembuatanLapanganSerbagunaFromMoneyPage1MoneyPage2 = {
  // 🟡 SARAN ITEM (BELUM AKTIF - PERLU DIBUAT KONTEN)
  "https://www.betonjayareadymix.com/2018/09/harga-jasa-pembuatan-lapangan-serbaguna.html": "Harga Jasa Pembuatan Lapangan  Serbaguna"
};
// ============================================================
// 📁 JASA PEMBUATAN KOLAM RENANG - MONEY PAGE & CHILD
// 🧠 ENTITY: JASA → TYPE: MONEY_PAGE & MONEY_CHILD
// Parent: Jasa Struktur Khusus (SUB2)
// ============================================================
const urlMappingKontraktorKolamRenangFromMoneyPageMoneyPage1 = {
  // ============================================================
  // [MONEY_PAGE] - JASA & KONTRAKTOR KOLAM RENANG
  // ============================================================
  //"https://www.betonjayareadymix.com/2018/09/kontraktor-kolam-renang.html": "Kontraktor Kolam Renang",  // TYPE: MONEY_PAGE
  //"https://www.betonjayareadymix.com/2018/09/jasa-kolam-renang.html": "Jasa Kolam Renang",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/09/kontraktor-waterpark-indonesia.html": "Kontraktor Waterpark Indonesia"
 
};
const urlMappingJasaPembuatanKolamRenangFromMoneyPageMoneyPage1 = {
 "https://www.betonjayareadymix.com/2018/09/harga-jasa-pembuatan-kolam-renang.html": "Harga Jasa Pembuatan Kolam Renang"
 
};
const urlMappingHargaJasaPembuatanKolamRenangFromMoneyPage1MoneyPage2 = {
 
  // ============================================================
  // [MONEY_PAGE] - HARGA PEMBUATAN KOLAM RENANG
  // ============================================================
  "https://www.betonjayareadymix.com/2018/09/biaya-jasa-bangun-kolam-renang-per-meter.html": "Biaya Jasa Bangun Kolam Renang Per Meter",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/09/harga-jasa-pembuatan-waterpark-kolam-renang.html": "Harga Jasa Pembuatan Waterpark Kolam Renang",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/09/harga-jasa-pembuatan-wahana-kolam-renang.html": "Harga Jasa Pembuatan Wahana Kolam Renang",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/09/harga-jasa-pembuatan-kolam-renang-per-m2..html": "Harga Jasa Pembuatan Kolam Renang Per M2",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/09/harga-jasa-borongan-tenaga-bikin-kolam-renang.html": "Harga Jasa Borongan Tenaga Bikin Kolam Renang"
};
const urlMappingJasaPembuatanKolamRenangFromMoneyPageMoneyChild = {
	// ============================================================
  // [MONEY_CHILD] - JASA KOLAM RENANG PER LOKASI
  // ============================================================
  "https://www.betonjayareadymix.com/2018/11/jasa-kolam-renang-ciamis.html": "Jasa Kolam Renang Ciamis",  
  "https://www.betonjayareadymix.com/2018/11/jasa-kolam-renang-kuningan.html": "Jasa Kolam Renang Kuningan",  
  "https://www.betonjayareadymix.com/2018/11/jasa-kolam-renang-cirebon.html": "Jasa Kolam Renang Cirebon",  
  "https://www.betonjayareadymix.com/2018/11/jasa-kolam-renang-garut.html": "Jasa Kolam Renang Garut",  
  "https://www.betonjayareadymix.com/2018/11/jasa-kolam-renang-purwakarta.html": "Jasa Kolam Renang Purwakarta",  
  "https://www.betonjayareadymix.com/2018/11/jasa-kolam-renang-sukabumi.html": "Jasa Kolam Renang Sukabumi",  
  "https://www.betonjayareadymix.com/2018/11/jasa-kolam-renang-cianjur.html": "Jasa Kolam Renang Cianjur",  
  "https://www.betonjayareadymix.com/2018/11/jasa-kolam-renang-bandung.html": "Jasa Kolam Renang Bandung",  
  "https://www.betonjayareadymix.com/2018/11/jasa-kolam-renang-depok.html": "Jasa Kolam Renang Depok",  
  "https://www.betonjayareadymix.com/2018/11/jasa-kolam-renang-tangerang.html": "Jasa Kolam Renang Tangerang",  
  "https://www.betonjayareadymix.com/2018/11/jasa-kolam-renang-jakarta.html": "Jasa Kolam Renang Jakarta",  
  "https://www.betonjayareadymix.com/2018/11/jasa-kolam-renang-bekasi.html": "Jasa Kolam Renang Bekasi",  
  "https://www.betonjayareadymix.com/2018/11/jasa-kolam-renang-bogor.html": "Jasa Kolam Renang Bogor"

};
// ============================================================
// 📁 JASA PEMBUATAN KOLAM IKAN - KOSONG (SARAN ITEM)
// ============================================================

const urlMappingJasaPembuatanKolamIkanFromSub2MoneyPage = {
  // 🟡 SARAN ITEM (BELUM AKTIF - PERLU DIBUAT KONTEN)
  // "https://www.betonjayareadymix.com/2018/09/jasa-pembuatan-kolam-ikan.html": "Jasa Pembuatan Kolam Ikan",  // TYPE: MONEY_PAGE
  // "https://www.betonjayareadymix.com/2018/09/harga-buat-kolam-ikan-per-meter.html": "Harga Buat Kolam Ikan Per Meter",  // TYPE: MONEY_PAGE
};

// ============================================================
// 📁 JASA SEPTIC TANK BETON - KOSONG (SARAN ITEM)
// ============================================================

const urlMappingJasaSepticTankBetonFromSub2MoneyPage = {
  // 🟡 SARAN ITEM (BELUM AKTIF - PERLU DIBUAT KONTEN)
  // "https://www.betonjayareadymix.com/2018/09/jasa-septic-tank-beton.html": "Jasa Septic Tank Beton",  // TYPE: MONEY_PAGE
  // "https://www.betonjayareadymix.com/2018/09/harga-buat-septic-tank-beton.html": "Harga Buat Septic Tank Beton",  // TYPE: MONEY_PAGE
};

// ============================================================
// 📁 JASA PEMBUATAN TANGKI AIR - KOSONG (SARAN ITEM)
// ============================================================

const urlMappingJasaPembuatanTangkiAirFromSub2MoneyPage = {
  // 🟡 SARAN ITEM (BELUM AKTIF - PERLU DIBUAT KONTEN)
  // "https://www.betonjayareadymix.com/2018/09/jasa-pembuatan-tangki-air.html": "Jasa Pembuatan Tangki Air",  // TYPE: MONEY_PAGE
  // "https://www.betonjayareadymix.com/2018/09/harga-buat-tangki-air-beton.html": "Harga Buat Tangki Air Beton",  // TYPE: MONEY_PAGE
};

// ============================================================
// 📁 JASA PEMBUATAN BAK PENAMPUNGAN - KOSONG (SARAN ITEM)
// ============================================================

const urlMappingJasaPembuatanBakPenampunganFromSub2MoneyPage = {
  // 🟡 SARAN ITEM (BELUM AKTIF - PERLU DIBUAT KONTEN)
  // "https://www.betonjayareadymix.com/2018/09/jasa-pembuatan-bak-penampungan.html": "Jasa Pembuatan Bak Penampungan",  // TYPE: MONEY_PAGE
  // "https://www.betonjayareadymix.com/2018/09/harga-buat-bak-penampungan-beton.html": "Harga Buat Bak Penampungan Beton",  // TYPE: MONEY_PAGE
};

// ============================================================
// 📁 JASA KONSTRUKSI MENARA AIR - KOSONG (SARAN ITEM)
// ============================================================

const urlMappingJasaKonstruksiMenaraAirFromSub2MoneyPage = {
  // 🟡 SARAN ITEM (BELUM AKTIF - PERLU DIBUAT KONTEN)
  // "https://www.betonjayareadymix.com/2018/09/jasa-konstruksi-menara-air.html": "Jasa Konstruksi Menara Air",  // TYPE: MONEY_PAGE
  // "https://www.betonjayareadymix.com/2018/09/harga-buat-menara-air-beton.html": "Harga Buat Menara Air Beton",  // TYPE: MONEY_PAGE
};

// ============================================================
// 🔴 BREADCRUMB SKIP LEVEL NOTES
// ============================================================
/*
📌 BREADCRUMB SKIP LEVEL YANG DIPERBOLEHKAN:

Untuk semua MONEY_PAGE, MONEY_CHILD di atas:
- Skip: Jasa Struktur Konstruksi (SUB2)
- Skip: Jasa Konstruksi Gedung dan Hunian (SUB2)
- Skip: Jasa Konstruksi Industri dan Gudang (SUB2)

Breadcrumb yang benar:
Home > Jasa Struktur Baja > Harga Borongan Baja Ringan (3 level)
Home > Jasa Beton > Harga Borongan Cor Beton Jakarta (3 level)
Home > Jasa Gedung > Jasa Bangun Rumah Depok (3 level)

✅ SEMUA URL di atas sudah valid sebagai MONEY_PAGE / MONEY_CHILD
✅ Tidak ada duplikasi konten berisiko tinggi
✅ Aman untuk SEO
*/

// ============================================================
// 📋 RINGKASAN TYPE YANG DIGUNAKAN
// ============================================================
/*
Type            Jumlah Item   Keterangan
SUB2             4            Halaman kategori (Jasa Struktur Baja, Beton, dll)
MONEY_PAGE       ~80          Halaman jasa transaksional umum
MONEY_CHILD      ~70          Halaman jasa spesifik lokasi
KOSONG (saran)   ~15          Perlu dibuat kontennya

✅ ENTITY TYPE: JASA - semua MONEY_PAGE dan MONEY_CHILD VALID
❌ Tidak ada MONEY_MASTER (JASA tidak boleh pakai MONEY_MASTER)
*/


/**
 * ============================================================
 * generateBreadcrumbJasaKonstruksi v10.2
 * FIXED: AUTO DETECTION JASA LEVEL + MC LOCATION
 * ============================================================
 *
 * ✅ UPDATE v10.2
 * ------------------------------------------------------------
 * - FIX: Deteksi MM/MP otomatis tanpa daftar kata spesifik
 * - FIX: MM jika kata tersisa <= 1, MP jika >= 2
 * - FIX: MC hanya untuk halaman dengan lokasi
 * - FIX: "terdekat" dianggap sebagai lokasi
 * - ENHANCED: Tidak perlu tambah keyword manual untuk kasus baru
 * - ENHANCED: Deteksi angka otomatis (3d, k250, dll)
 *
 * ✅ UPDATE v10.0
 * ------------------------------------------------------------
 * - FIX: forceInjectDirectParent() branch-aware
 *
 * ============================================================
 * @version 10.2.0
 * @date 2026-06-26
 * ============================================================
 */

function generateBreadcrumbJasaKonstruksiStrukturPost(
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
            BRANCH: '🌿'
        };
        console.log(`${icons[type] || '📘'} [Breadcrumb v10.2] ${message}`);
    }

    // ============================================================
    // 3. ENTITY NORMALIZATION
    // ============================================================

    const ENTITY_TYPE_MAP = {
        'JASA': 'JASA_KONSTRUKSI',
        'JASA_KONSTRUKSI': 'JASA_KONSTRUKSI',
        'JASA_INTERIOR': 'JASA_KONSTRUKSI',
        'JASA_DESAIN_INTERIOR': 'JASA_KONSTRUKSI',
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
        'SEWA_ALAT_KONSTRUKSI',
        'PRODUK_KONSTRUKSI',
        'PRODUK_INTERIOR',
        'MATERIAL_KONSTRUKSI',
        'ARTIKEL'
    ];

    if (!VALID_ENTITY_TYPES.includes(entityType)) {
        console.error(`❌ INVALID ENTITY TYPE: ${entityType}`);
        return null;
    }

    // ============================================================
    // 5. TYPE LEVEL MAP & PRIORITAS
    // ============================================================

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

    const HIERARCHY_ORDER = [
        'home', 'pillar', 'sub-pillar-tipe-2', 'sub-pillar-tipe-1',
        'money-master', 'money-page', 'money-child', 'variant', 'sub-variant'
    ];

    // ============================================================
    // 6. ROOT ENTITY PILLARS
    // ============================================================

    const ROOT_ENTITY_PILLARS = {
        'JASA_KONSTRUKSI': ['jasa konstruksi'],
        'SEWA_ALAT_KONSTRUKSI': ['sewa alat konstruksi'],
        'PRODUK_KONSTRUKSI': ['produk konstruksi'],
        'PRODUK_INTERIOR': ['produk interior'],
        'MATERIAL_KONSTRUKSI': ['material konstruksi'],
        'ARTIKEL': ['artikel konstruksi']
    };

    // ============================================================
    // 7. HELPERS
    // ============================================================

    function isJasaEntity() { return entityType === 'JASA_KONSTRUKSI'; }
    function isSewaEntity() { return entityType === 'SEWA_ALAT_KONSTRUKSI'; }
    function isProdukEntity() { return entityType === 'PRODUK_KONSTRUKSI'; }
    function isMaterialEntity() { return entityType === 'MATERIAL_KONSTRUKSI'; }
    function isInteriorEntity() { return entityType === 'PRODUK_INTERIOR'; }

    // ============================================================
    // 8. CLEAN TEXT
    // ============================================================

    function cleanText(text) {
        if (!text) return '';
        return text.replace(/\s+/g, ' ').trim();
    }

    // ============================================================
    // 9. CLEAN PAGE NAME FROM URL
    // ============================================================

    function getCleanPageNameFromUrl(url) {
        if (!url) return '';

        let path = url;
        path = path.replace(/^https?:\/\/[^\/]+/i, '');
        path = path.split('?')[0];
        path = path.replace(/\.(html|php|asp|jsp)$/i, '');
        
        // Hapus pola tanggal
        path = path.replace(/\/\d{4}\/\d{2}\/\d{2}\//g, '/');
        path = path.replace(/\/\d{4}\/\d{2}\//g, '/');
        path = path.replace(/\/\d{4}\//g, '/');
        
        // Hapus /p/
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
    // 10. SLUGIFY
    // ============================================================

    function slugify(text) {
        return cleanText(text)
            .toLowerCase()
            .replace(/[^\w\s-]/g, '')
            .replace(/\s+/g, '-')
            .replace(/--+/g, '-');
    }

    // ============================================================
    // 11. KEYWORDS
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
    // 11a. VARIANT KEYWORDS PER ENTITY
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
    // 11b. JASA CLEAN FUNCTION (FIXED v10.2 - OTOMATIS)
    // ============================================================

    // Hanya daftar kata yang SANGAT UMUM dan HARUS dihapus
    const JASA_ULTRA_COMMON_WORDS = new Set([
        'jasa', 'kontraktor', 'tukang', 'borongan', 'renovasi',
        'pasang', 'bangun', 'perbaikan', 'instalasi', 'proyek',
        'cor', 'gali', 'urug', 'angkut', 'service', 'servis'
    ]);

    // Stopwords (kata penghubung)
    const STOPWORDS = new Set([
        'dan', 'atau', 'serta', 'yang', 'dari', 'ke', 'di', 'untuk', 
        'dengan', 'ini', 'itu', 'akan', 'telah', 'sudah', 'masih',
        'pada', 'oleh', 'karena', 'sehingga', 'setelah', 'sebelum',
        'plus', 'minus', 'tanpa', 'sampai', 'hingga', 'sambil'
    ]);

    // Daftar kata yang menunjukkan spesifikasi material (untuk variant)
    const MATERIAL_SPEC_WORDS = new Set([
        'baja ringan', 'baja', 'ringan', 'beton', 'readymix', 
        'kanstin', 'pembatas', 'pengaman', 'struktur', 'dinding',
        'pondasi', 'atap', 'genteng', 'keramik', 'marmer', 'granit',
        'plafon', 'gypsum', 'partisi', 'dak', 'cor', 'pile', 'sheet',
        'tiang', 'balok', 'kolom', 'sloof', 'ring', 'balk', 'kuda-kuda',
        'drainase', 'irigasi', 'box culvert', 'u ditch', 'paving',
        'konstruksi', 'rangka', 'material', 'upah', 'tenaga'
    ]);

    // Daftar modifier (kata yang menunjukkan spesifikasi/harga)
    const MODIFIER_WORDS = new Set([
        'murah', 'profesional', 'berkualitas', 'terbaik', 'spesialis',
        'ahli', 'berpengalaman', 'resmi', 'terpercaya', 'ekonomis',
        'cepat', 'tepat', 'garansi', 'kualitas', 'harga', 'biaya',
        'tarif', 'ongkos', 'estimasi', 'perhitungan', 'analisa'
    ]);

    function cleanJasaText(text) {
        if (!text) return '';
        
        let cleaned = text.toLowerCase();
        
        // 1. Hapus kata ultra-common
        for (const kw of JASA_ULTRA_COMMON_WORDS) {
            cleaned = cleaned.replace(new RegExp(`\\b${kw}\\b`, 'g'), ' ');
        }
        
        // 2. Hapus stopwords
        for (const sw of STOPWORDS) {
            cleaned = cleaned.replace(new RegExp(`\\b${sw}\\b`, 'g'), ' ');
        }
        
        // 3. Normalisasi spasi
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
    // 11c. DETEKSI JASA LEVEL OTOMATIS (FIXED v10.2)
    // ============================================================

    function detectJasaLevelAuto(pageName) {
        const lowerName = pageName.toLowerCase();
        
        // 1. Bersihkan teks
        const cleaned = cleanJasaText(lowerName);
        
        // 2. Hitung kata yang tersisa (minimal 2 karakter)
        const remainingWords = cleaned.split(/\s+/).filter(w => w.length >= 2);
        const wordCount = remainingWords.length;
        
        // 3. Cek apakah ada angka (indikasi spesifikasi)
        const hasNumber = /\d/.test(cleaned);
        
        // 4. Cek apakah ada kata yang menunjukkan lokasi
        const hasLocation = isLocation(cleaned);
        
        // 5. Cek apakah ada modifier
        const hasModifierWord = hasModifier(cleaned);
        
        // 6. Cek apakah ada material spec
        const hasMaterialSpecWord = hasMaterialSpec(cleaned);
        
        log(`Auto detect JASA: "${pageName}" → remaining: "${cleaned}", words: ${wordCount}, hasNumber: ${hasNumber}, hasLocation: ${hasLocation}`, 'DEBUG');
        
        // ✅ LOGIKA OTOMATIS v10.2:
        // - Jika remaining words <= 1 DAN tidak ada angka DAN tidak ada lokasi → MM
        // - Selain itu → MP
        if (wordCount <= 1 && !hasNumber && !hasLocation && !hasModifierWord && !hasMaterialSpecWord) {
            log(`MM detected (auto): "${pageName}" → remaining words: ${wordCount}`, 'SUCCESS');
            return 'money-master';
        }
        
        log(`MP detected (auto): "${pageName}" → remaining words: ${wordCount}`, 'INFO');
        return 'money-page';
    }

    // ============================================================
    // 11d. VARIANT DETECTION PER ENTITY
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
        
        if (currentEntityType === 'JASA_KONSTRUKSI') {
            for (const kw of VARIANT_KEYWORDS_JASA) {
                if (lowerName.includes(kw)) {
                    log(`Variant detected (JASA): "${pageName}" contains "${kw}"`, 'VARIANT');
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
    // 12. LOCATION DETECTION (UPDATED v10.2 - OTOMATIS MC)
    // ============================================================

    const LOCATION_WHITELIST = new Set([
        // Jabodetabek
        'jakarta', 'jakarta pusat', 'jakarta barat', 'jakarta selatan', 'jakarta timur', 'jakarta utara',
        'bogor', 'kota bogor', 'kabupaten bogor',
        'depok', 'kota depok',
        'tangerang', 'kota tangerang', 'kota tangerang selatan', 'kabupaten tangerang',
        'bekasi', 'kota bekasi', 'kabupaten bekasi',
        
        // Jawa Barat
        'bandung', 'kota bandung', 'kabupaten bandung',
        'karawang', 'kabupaten karawang',
        'purwakarta', 'kabupaten purwakarta',
        'cikarang', 'cikarang barat', 'cikarang pusat', 'cikarang selatan', 'cikarang timur', 'cikarang utara',
        'subang', 'kabupaten subang',
        'cirebon', 'kota cirebon', 'kabupaten cirebon',
        
        // Jawa Tengah & DIY
        'semarang', 'kota semarang', 'kabupaten semarang',
        'solo', 'surakarta', 'kota surakarta',
        'pekalongan', 'tegal', 'magelang', 'sukoharjo', 'boyolali', 'klaten',
        'jogja', 'yogyakarta', 'kota yogyakarta', 'kabupaten sleman', 'bantul', 'gunungkidul', 'kulon progo',
        
        // Jawa Timur
        'surabaya', 'kota surabaya',
        'malang', 'kota malang', 'kabupaten malang',
        'kediri', 'kota kediri', 'kabupaten kediri',
        'gresik', 'sidoarjo', 'mojokerto', 'pasuruan', 'probolinggo', 'jember', 'banyuwangi', 'madiun',
        
        // Sumatera
        'medan', 'kota medan',
        'palembang', 'pekanbaru', 'padang', 'lampung', 'bandar lampung', 'batam', 'tanjungpinang',
        'aceh', 'banda aceh', 'jambi', 'bengkulu', 'pangkal pinang',
        
        // Kalimantan
        'pontianak', 'balikpapan', 'samarinda', 'banjarmasin', 'palangkaraya',
        
        // Sulawesi
        'makassar', 'kota makassar',
        'manado', 'palu', 'kendari', 'gorontalo',
        
        // Bali & Nusa Tenggara
        'bali', 'kabupaten badung', 'kota denpasar', 'denpasar', 'gianyar', 'tabanan', 'bangli', 'karangasem', 'klungkung', 'buleleng', 'jembrana',
        'mataram', 'kupang',
        
        // Lainnya
        'terdekat' // ← "terdekat" dianggap lokasi
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
    // 13. SPECIFIC PRODUCT
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
    // 14. SUB VARIANT
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
    // 15. ENTITY PILLAR EXACT MATCH
    // ============================================================

    function isEntityPillarExactMatch(pageName) {
        const cleanName = cleanText(pageName.toLowerCase());
        const valid = ROOT_ENTITY_PILLARS[entityType] || [];
        return valid.includes(cleanName);
    }

    // ============================================================
    // 16. JASA KEYWORDS
    // ============================================================

    const JASA_KEYWORDS_PATTERN = 
        /\b(jasa|kontraktor|tukang|borongan|renovasi|pasang|bangun|perbaikan|instalasi|proyek|cor|gali|urug|angkut)\b/i;

    // ============================================================
    // 17. PAGE TYPE DETECTION (FIXED v10.2)
    // ============================================================

    function detectPageType(pageName, isHome = false) {
        const lowerName = cleanText(pageName.toLowerCase());

        if (isHome || lowerName === 'home' || lowerName === 'beranda') return 'home';
        if (isEntityPillarExactMatch(lowerName)) return 'pillar';
        if (isSubVariant(lowerName)) return 'sub-variant';

        // Method keywords detection
        for (const kw of METHOD_KEYWORDS) {
            if (lowerName.includes(kw)) {
                const HAS_JASA_WORD = JASA_KEYWORDS_PATTERN.test(lowerName);
                const HAS_SEWA_WORD = /\b(sewa|rental)\b/i.test(lowerName);
                const HAS_PRODUK_WORD = /\b(beton|readymix|material|produk)\b/i.test(lowerName);
                
                if (HAS_JASA_WORD || HAS_SEWA_WORD || HAS_PRODUK_WORD) {
                    return 'money-page';
                }
                return 'sub-pillar-tipe-2';
            }
        }

        // Variant detection per entity
        if (isVariantPage(lowerName, entityType)) {
            return 'variant';
        }

        for (const kw of INFORMATIONAL_KEYWORDS) {
            if (lowerName.includes(kw)) return 'pillar';
        }
        for (const kw of SP1_KEYWORDS) {
            if (lowerName.includes(kw)) return 'sub-pillar-tipe-1';
        }
        for (const kw of SP2_KEYWORDS) {
            if (lowerName.includes(kw)) return 'sub-pillar-tipe-2';
        }

        const HAS_PRICE_WORD = /\b(harga|biaya|tarif)\b/i.test(lowerName);
        const HAS_SEWA_WORD = /\b(sewa|rental)\b/i.test(lowerName);
        const HAS_JASA_WORD = JASA_KEYWORDS_PATTERN.test(lowerName);
        const HAS_LOCATION = isLocation(lowerName);

        // ✅ MC DETECTION: Hanya jika ada lokasi
        if (HAS_LOCATION) {
            log(`MC detected: "${pageName}" contains location`, 'SUCCESS');
            return 'money-child';
        }

        // ✅ FIX v10.2: JASA ENTITY dengan deteksi otomatis
        if (isJasaEntity() && HAS_JASA_WORD && !HAS_PRICE_WORD) {
            return detectJasaLevelAuto(lowerName);
        }

        // SEWA ENTITY
        if (isSewaEntity() && HAS_SEWA_WORD && !HAS_PRICE_WORD) {
            const cleaned = lowerName.replace(/\b(sewa|rental)\b/gi, '').trim();
            const words = cleaned.split(/\s+/).filter(Boolean);
            const specific = isSpecificProduct(cleaned);
            if (words.length <= 2 && !specific && !isLocation(cleaned)) {
                return 'money-master';
            }
            return 'money-page';
        }

        // PRICE PAGE
        if (HAS_PRICE_WORD) {
            const cleaned = lowerName.replace(/\b(harga|biaya|tarif)\b/gi, '').trim();
            const words = cleaned.split(/\s+/).filter(Boolean);
            const specific = isSpecificProduct(cleaned);
            if (words.length <= 2 && !specific && !isLocation(cleaned)) {
                return 'money-master';
            }
            return 'money-page';
        }

        // PRODUK / MATERIAL
        if ((isProdukEntity() || isMaterialEntity()) && !HAS_PRICE_WORD) {
            const words = lowerName.split(/\s+/).filter(Boolean);
            if (words.length <= 2) return 'pillar';
            return 'sub-pillar-tipe-2';
        }

        return 'pillar';
    }

    // ============================================================
    // 18. AUTO DETECT PARENT
    // ============================================================

    function findNearestParentFromItems(items, currentPageName) {
        if (!items || items.length === 0) return null;

        const currentLower = currentPageName.toLowerCase();
        const currentWords = currentLower.split(/\s+/);

        let bestMatch = null;
        let bestScore = 0;

        for (const item of items) {
            const itemName = item.name?.toLowerCase() || '';
            if (itemName === currentLower) continue;

            let score = 0;

            if (currentLower.includes(itemName) && itemName.length > 3) {
                score = itemName.length * 10;
            }

            const itemWords = itemName.split(/\s+/);
            for (const word of currentWords) {
                if (word.length > 2 && itemWords.includes(word)) {
                    score += 5;
                }
            }

            for (let i = 1; i <= currentWords.length; i++) {
                const prefix = currentWords.slice(0, i).join(' ');
                if (itemName === prefix) {
                    score += 100;
                    break;
                }
            }

            if (item.url) {
                const urlSlug = item.url.split('/').pop()?.replace('.html', '').replace(/-/g, ' ');
                if (urlSlug && currentLower.includes(urlSlug)) {
                    score += 50;
                }
            }

            const specificPatterns = ['finishing', 'bangunan', 'interior', 'eksterior', 'lantai', 'dinding'];
            for (const pattern of specificPatterns) {
                if (currentLower.includes(pattern) && itemName.includes(pattern)) {
                    score += 30;
                    break;
                }
            }

            if (score > bestScore) {
                bestScore = score;
                bestMatch = item;
            }
        }

        log(`Parent detection score: ${bestScore}`, 'INFO');
        return bestScore > 20 ? bestMatch : null;
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

        const detectedParent = findNearestParentFromItems(items, currentPageName);

        if (detectedParent) {
            const hasParent = items.some(item => 
                item.name?.toLowerCase() === detectedParent.name?.toLowerCase()
            );

            if (!hasParent) {
                log(`Auto-injected parent: "${detectedParent.name}" → "${currentPageName}"`, 'SUCCESS');
                const currentIndex = items.findIndex(item => 
                    item.name?.toLowerCase() === currentLower
                );
                if (currentIndex > -1) {
                    items.splice(currentIndex, 0, detectedParent);
                } else {
                    items.push(detectedParent);
                }
            }
        }

        return items;
    }

    // ============================================================
    // 19. FORCE PARENT INJECTION (BRANCH AWARE)
    // ============================================================

    function forceInjectDirectParent(lineageLevels, allLevels, currentPageTitle, entityType, breadcrumbItems) {
        const currentLower = currentPageTitle.toLowerCase();
        let modifiedLineage = [...lineageLevels];
        const words = currentLower.split(/\s+/);

        // STRATEGI 1: Auto parent dari breadcrumbItems
        const autoParent = findNearestParentFromItems(breadcrumbItems, currentPageTitle);
        if (autoParent && !modifiedLineage.some(l => l.name === autoParent.name)) {
            const parentFromAll = allLevels.find(item => 
                item.name?.toLowerCase() === autoParent.name?.toLowerCase()
            );
            if (parentFromAll) {
                log(`AUTO PARENT: "${parentFromAll.name}"`, 'SUCCESS');
                modifiedLineage.push(parentFromAll);
            }
        }

        // STRATEGI 2: Pattern-based (prefix match)
        if (modifiedLineage.length === lineageLevels.length && words.length >= 2) {
            for (let i = words.length - 1; i >= 1; i--) {
                const potentialParent = words.slice(0, i).join(' ');
                const parentItem = allLevels.find(item => 
                    item.name.toLowerCase() === potentialParent
                );
                if (parentItem && !modifiedLineage.some(l => l.name === parentItem.name)) {
                    log(`PATTERN PARENT: "${parentItem.name}"`, 'SUCCESS');
                    modifiedLineage.push(parentItem);
                    break;
                }
            }
        }

        const currentLevel = TYPE_LEVEL_MAP[detectPageType(currentPageTitle)] || 99;
        
        const allPotentialParents = allLevels.filter(item => 
            item.level <= currentLevel && 
            item.name.toLowerCase() !== currentLower &&
            !modifiedLineage.some(l => l.name === item.name)
        );
        
        // ✅ Filter berdasarkan branch + score
        for (const parent of allPotentialParents) {
            const isDifferentBranch = modifiedLineage.every(existing => {
                const similarity = calculateSimilarity(parent.name, existing.name);
                return similarity < 0.5;
            });
            
            const hasSignificantScore = (parent.relevanceScore || 0) > 50;
            
            if (isDifferentBranch && hasSignificantScore) {
                log(`FORCE PARENT (branch): "${parent.name}" (level ${parent.level}) → "${currentPageTitle}"`, 'SUCCESS');
                modifiedLineage.push(parent);
            } else if (!isDifferentBranch) {
                log(`⏭️ FORCE SKIP: "${parent.name}" (level ${parent.level}) - same branch`, 'SKIP');
            } else {
                log(`⏭️ FORCE SKIP: "${parent.name}" (level ${parent.level}) - low score (${parent.relevanceScore || 0})`, 'SKIP');
            }
        }

        // STRATEGI 3: Semantic similarity
        if (modifiedLineage.length === lineageLevels.length) {
            const semanticKeywords = {
                'finishing': ['finishing', 'cat', 'epoxy', 'lampu', 'wallpaper'],
                'bangunan': ['bangunan', 'gedung', 'rumah', 'ruko'],
                'interior': ['interior', 'dalam', 'ruangan'],
                'eksterior': ['eksterior', 'luar', 'halaman'],
                'lantai': ['lantai', 'keramik', 'epoxy lantai', 'marmer', 'granit'],
                'dinding': ['dinding', 'tembok', 'wallpaper']
            };
            
            for (const [parentKeyword, childKeywords] of Object.entries(semanticKeywords)) {
                const isChildMatch = childKeywords.some(kw => currentLower.includes(kw));
                if (isChildMatch) {
                    const parentItem = allLevels.find(item => 
                        item.name.toLowerCase().includes(parentKeyword)
                    );
                    if (parentItem && !modifiedLineage.some(l => l.name === parentItem.name)) {
                        const isDifferentBranch = modifiedLineage.every(existing => {
                            const similarity = calculateSimilarity(parentItem.name, existing.name);
                            return similarity < 0.5;
                        });
                        
                        if (isDifferentBranch) {
                            log(`SEMANTIC PARENT: "${parentItem.name}"`, 'SUCCESS');
                            modifiedLineage.push(parentItem);
                        }
                    }
                }
            }
        }

        // STRATEGI 4: Last resort
        if (modifiedLineage.length === lineageLevels.length && allLevels.length > 0) {
            const lowerLevelItems = allLevels.filter(item => 
                item.level <= currentLevel && 
                item.name.toLowerCase() !== currentLower
            );
            if (lowerLevelItems.length > 0) {
                const sortedByLevel = [...lowerLevelItems].sort((a, b) => b.level - a.level);
                const highestLevelParent = sortedByLevel[0];
                if (highestLevelParent && !modifiedLineage.some(l => l.name === highestLevelParent.name)) {
                    log(`LAST RESORT: "${highestLevelParent.name}"`, 'WARN');
                    modifiedLineage.push(highestLevelParent);
                }
            }
        }
        
        return modifiedLineage;
    }

    // ============================================================
    // 20. HIERARCHY VALIDATOR
    // ============================================================
    
    function validateAndFixHierarchy(lineage) {
        if (lineage.length <= 1) return lineage;
        const fixed = [];
        const sorted = [...lineage].sort((a, b) => a.level - b.level);
        const uniqueNames = new Set();
        for (const item of sorted) {
            if (!uniqueNames.has(item.name.toLowerCase())) {
                uniqueNames.add(item.name.toLowerCase());
                fixed.push(item);
            }
        }
        return fixed;
    }

    // ============================================================
    // 21. SIMILARITY CALCULATION
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
    // 22. GET CURRENT PAGE INFO
    // ============================================================

    const currentFullUrl = currentUrl.startsWith('http')
        ? currentUrl
        : CONFIG.DOMAIN + currentUrl;

    let currentPageTitle = getCleanPageNameFromUrl(currentFullUrl);

    if (!currentPageTitle) {
        currentPageTitle = 'Halaman';
    }

    // ============================================================
    // 23. INJECT CURRENT PAGE & AUTO PARENT
    // ============================================================

    const enhancedBreadcrumbItems = injectCurrentPageAndParent(
        breadcrumbItems,
        currentPageTitle,
        currentFullUrl
    );

    // ============================================================
    // 24. BUILD ALL LEVELS
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

        const type = detectPageType(name);
        allLevels.push({
            name,
            url,
            type,
            level: TYPE_LEVEL_MAP[type] || 99,
            position: i + 1
        });
    }

    // ============================================================
    // 25. URL FALLBACK
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
    // 26. CURRENT PAGE TYPE
    // ============================================================

    const currentPageType = detectPageType(currentPageTitle);
    log(`Current page: "${currentPageTitle}" → type: ${currentPageType} (level ${TYPE_LEVEL_MAP[currentPageType]})`, 'INFO');

    // ============================================================
    // 27. SELECT BREADCRUMB LEVELS
    // ============================================================

    const selectedLevels = [];

    // HOME
    selectedLevels.push({
        name: 'Beranda',
        url: CONFIG.DOMAIN,
        type: 'home',
        level: 0,
        position: 1
    });

    // Buat unique items berdasarkan URL (bukan nama)
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
    // FIND NEAREST PARENTS (BRANCH DETECTION)
    // ============================================================

    function findNearestParentsByHierarchy() {
        const lineage = [];
        const currentLevel = TYPE_LEVEL_MAP[currentPageType] || 99;
        const currentPageTitleLower = currentPageTitle.toLowerCase();
        
        // Ambil SEMUA candidate (kecuali current page)
        const candidates = uniqueItems.filter(item => 
            item.name.toLowerCase() !== currentPageTitleLower
        );
        
        if (candidates.length === 0) return lineage;
        
        // Hanya ambil candidate dengan level <= currentLevel
        const validCandidates = candidates.filter(item => item.level <= currentLevel);
        
        if (validCandidates.length === 0) {
            const sortedByLevel = [...candidates].sort((a, b) => b.level - a.level);
            const nearest = sortedByLevel[0];
            lineage.push(nearest);
            log(`⚠️ No valid candidates, using "${nearest.name}"`, 'WARN');
            return lineage;
        }
        
        log('Valid candidates: ' + validCandidates.map(i => i.level + ':' + i.name).join(', '), 'DEBUG');
        
        // Hitung relevansi score
        const currentWords = currentPageTitleLower.split(/\s+/);
        const scoredCandidates = validCandidates.map(item => {
            const itemWords = item.name.toLowerCase().split(/\s+/);
            let relevanceScore = 0;
            
            // 1. Kata yang sama dengan current page (bobot 10)
            for (const word of currentWords) {
                if (word.length > 2 && itemWords.includes(word)) {
                    relevanceScore += 10;
                }
            }
            
            // 2. Keyword spesifik (bobot 30)
            const specificKeywords = [
                'kanstin', 'pembatas', 'pengaman', 'tukang', 'baja', 'ringan',
                'struktur', 'konstruksi', 'pasang', 'dinding', 'pondasi',
                'beton', 'readymix', 'cor', 'pile', 'sheet', 'tiang',
                'harga', 'biaya', 'borongan', 'material', 'upah', 'tenaga',
                'wallpaper', 'custom', '3d', 'interior', 'dekorasi'
            ];
            for (const kw of specificKeywords) {
                if (currentPageTitleLower.includes(kw) && item.name.toLowerCase().includes(kw)) {
                    relevanceScore += 30;
                }
            }
            
            // 3. Bonus jika parent adalah bagian dari current page (bobot 50)
            if (currentPageTitleLower.includes(item.name.toLowerCase()) && item.name.length > 3) {
                relevanceScore += 50;
            }
            
            // 4. Bonus panjang kata (lebih spesifik) (bobot 5)
            const maxWordLength = Math.max(...itemWords.map(w => w.length));
            if (maxWordLength > 6) {
                relevanceScore += 5;
            }
            
            log(`🎯 Score for "${item.name}" (level ${item.level}): ${relevanceScore}`, 'SCORE');
            
            return { ...item, relevanceScore };
        });
        
        // Urutkan berdasarkan level (descending) lalu relevanceScore (descending)
        scoredCandidates.sort((a, b) => {
            if (a.level !== b.level) return b.level - a.level;
            return b.relevanceScore - a.relevanceScore;
        });
        
        log('Scored candidates (sorted): ' + scoredCandidates.map(i => i.level + ':' + i.name + '(' + i.relevanceScore + ')').join(' → '), 'DEBUG');
        
        // Ambil parent berdasarkan BRANCH + SIMILARITY
        const selectedParents = [];
        
        for (const item of scoredCandidates) {
            const levelKey = item.level;
            
            // Cek apakah sudah ada parent dengan level yang sama
            const existingParents = selectedParents.filter(p => p.level === levelKey);
            
            if (existingParents.length === 0) {
                // Belum ada parent di level ini → ambil
                selectedParents.push(item);
                log(`🎯 Selected: "${item.name}" (level ${item.level}) with score ${item.relevanceScore}`, 'SUCCESS');
            } else {
                // Cek apakah ini cabang yang berbeda (similarity < 50%)
                const isDifferentBranch = existingParents.every(existing => {
                    const similarity = calculateSimilarity(item.name, existing.name);
                    const isSameBranch = similarity >= 0.5;
                    log(`🌿 Similarity "${item.name}" vs "${existing.name}": ${Math.round(similarity * 100)}%`, 'BRANCH');
                    return !isSameBranch;
                });
                
                if (isDifferentBranch) {
                    // Cabang berbeda → tambahkan sebagai parent tambahan
                    selectedParents.push(item);
                    log(`🌿 Branch parent: "${item.name}" (level ${item.level}) with score ${item.relevanceScore}`, 'BRANCH');
                } else {
                    // Cabang sama → skip
                    log(`⏭️ Skipped: "${item.name}" (level ${item.level}) - same branch as existing parent`, 'SKIP');
                }
            }
        }
        
        // Tambahkan ke lineage
        for (const item of selectedParents) {
            lineage.push(item);
        }
        
        // Jika lineage kosong, fallback
        if (lineage.length === 0 && validCandidates.length > 0) {
            const sortedByLevel = [...validCandidates].sort((a, b) => b.level - a.level);
            const highestLevel = sortedByLevel[0].level;
            const topCandidates = sortedByLevel.filter(item => item.level === highestLevel);
            const bestParent = topCandidates.sort((a, b) => b.relevanceScore - a.relevanceScore)[0];
            lineage.push(bestParent);
            log(`⚠️ FALLBACK: Using "${bestParent.name}" as nearest parent`, 'WARN');
        }
        
        log('Lineage (prioritized): ' + lineage.map(i => i.level + ':' + i.name).join(' → '), 'SUCCESS');
        
        return lineage;
    }

    let lineageLevels = findNearestParentsByHierarchy();

    log('Initial lineage (' + lineageLevels.length + '): ' + lineageLevels.map(i => i.name + '(' + i.type + ')').join(' → '), 'INFO');

    lineageLevels = forceInjectDirectParent(
        lineageLevels, 
        uniqueItems,
        currentPageTitle, 
        entityType,
        enhancedBreadcrumbItems
    );

    log('After force injection (' + lineageLevels.length + '): ' + lineageLevels.map(i => i.name + '(' + i.type + ')').join(' → '), 'INFO');

    // REMOVE DUPLICATE
    const cleanLineage = [];
    const usedLineage = new Set();

    for (const item of lineageLevels) {
        const key = item.name.toLowerCase();
        if (usedLineage.has(key)) continue;
        usedLineage.add(key);
        cleanLineage.push(item);
    }

    // VALIDATE HIERARCHY
    const validatedLineage = validateAndFixHierarchy(cleanLineage);

    // SORT NATURAL ORDER
    validatedLineage.sort((a, b) => {
        const idxA = HIERARCHY_ORDER.indexOf(a.type);
        const idxB = HIERARCHY_ORDER.indexOf(b.type);
        if (idxA !== idxB) return idxA - idxB;
        return a.position - b.position;
    });

    // ========================================================
    // SOLUSI v9.0: AMBIL SEMUA PARENT DENGAN LEVEL TERTINGGI
    // ========================================================
    
    let finalParents = [];

    const parentOnly = validatedLineage.filter(item => 
        item.name.toLowerCase() !== currentPageTitle.toLowerCase()
    );

    log(`Parent candidates (${parentOnly.length}): ` + parentOnly.map(i => i.name + '(' + i.level + ')').join(', '), 'DEBUG');

    if (parentOnly.length > 0) {
        const highestLevel = Math.max(...parentOnly.map(i => i.level));
        finalParents = parentOnly.filter(item => item.level === highestLevel);
        finalParents.sort((a, b) => a.position - b.position);
        
        log(`✅ PARENT FOUND: ${finalParents.length} parent(s) at level ${highestLevel}: ` + finalParents.map(i => i.name).join(', '), 'SUCCESS');
    } else {
        log('⚠️ No parent found (only current page)', 'WARN');
    }

    if (finalParents.length === 0 && validatedLineage.length > 1) {
        const filtered = validatedLineage.filter(item => 
            item.name.toLowerCase() !== currentPageTitle.toLowerCase()
        );
        if (filtered.length > 0) {
            const highestLevel = Math.max(...filtered.map(i => i.level));
            finalParents = filtered.filter(item => item.level === highestLevel);
            log(`⚠️ FALLBACK PARENT: Using ${finalParents.length} nearest parent(s) at level ${highestLevel}`, 'WARN');
        }
    }

    // Inject ALL parents
    for (const item of finalParents) {
        const exists = selectedLevels.some(l => l.name.toLowerCase() === item.name.toLowerCase());
        if (!exists) {
            selectedLevels.push(item);
            log(`👪 Adding parent: "${item.name}" (level ${item.level})`, 'PARENT');
        }
    }

    // ADD CURRENT PAGE
    const hasCurrentAlready = selectedLevels.some(item =>
        item.name.toLowerCase() === currentPageTitle.toLowerCase()
    );

    if (!hasCurrentAlready) {
        selectedLevels.push({
            name: currentPageTitle,
            url: currentFullUrl,
            type: currentPageType,
            level: TYPE_LEVEL_MAP[currentPageType] || 99,
            isCurrent: true
        });
    }

    // ============================================================
    // 28. FINAL UNIQUE LEVELS
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
    // 29. GENERATE HTML
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
    // 30. JSON LD
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
    // 31. REMOVE OLD
    // ============================================================

    document.querySelectorAll('.breadcrumbs, .breadcrumb-nav, [aria-label="Breadcrumb"]')
        .forEach(el => el.remove());
    document.querySelectorAll('script[data-breadcrumb="true"]')
        .forEach(el => el.remove());

    // ============================================================
    // 32. TARGET ELEMENT
    // ============================================================

    const targetElement = document.querySelector('main, article, .content, #main-content, .post-content');

    if (targetElement) {
        targetElement.insertAdjacentHTML('afterbegin', breadcrumbHtml);
    } else {
        document.body.insertAdjacentHTML('afterbegin', breadcrumbHtml);
    }

    // ============================================================
    // 33. INJECT JSON LD
    // ============================================================

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-breadcrumb', 'true');
    script.textContent = JSON.stringify(jsonLd, null, 2);
    document.head.appendChild(script);

    // ============================================================
    // 34. LOG SUMMARY
    // ============================================================

    console.log('📊 BREADCRUMB GENERATION SUMMARY (v10.2):');
    console.log(`   Page: "${currentPageTitle}"`);
    console.log(`   URL: "${currentFullUrl}"`);
    console.log(`   Type: ${currentPageType} (level ${TYPE_LEVEL_MAP[currentPageType]})`);
    console.log(`   Entity: ${entityType}`);
    if (currentPageType === 'variant') {
        console.log(`   🔬 Variant detected for entity: ${entityType}`);
    }
    if (currentPageType === 'money-child') {
        console.log(`   📍 Money Child with location detected`);
    }
    console.log(`   👪 Parents found: ${finalParents.length} at level ${finalParents.length > 0 ? finalParents[0].level : 'N/A'}`);
    console.log(`   📊 Total breadcrumb levels: ${uniqueLevels.length}`);

    // ============================================================
    // 35. RETURN
    // ============================================================

    return {
        html: breadcrumbHtml,
        jsonLd,
        selectedLevels: uniqueLevels,
        currentPageType,
        entityType,
        version: '10.2.0',
        parentCount: finalParents.length,
        parents: finalParents,
        isVariant: currentPageType === 'variant',
        isMoneyChild: currentPageType === 'money-child'
    };
}


// Menyimpan elemen yang dihapus dalam variabel
let removedElementsJasakonstruksistrukturPost = {};
function removeCondition(conditionId) {
    const conditionElement = document.getElementById(conditionId);

    if (conditionElement) {
        // Menyimpan elemen yang dihapus dalam objek untuk bisa dikembalikan
        removedElementsJasakonstruksistrukturPost[conditionId] = conditionElement;
        conditionElement.remove(); // Menghapus elemen tersebut
    }
}

// Fungsi untuk mengembalikan elemen yang telah dihapus
function restoreCondition(conditionId) {
    const breadcrumb = document.querySelector('.breadcrumb');
    const elementToRestore = removedElementsJasakonstruksistrukturPost[conditionId]; // Mendapatkan elemen yang disimpan

    if (elementToRestore) {
        breadcrumb.appendChild(elementToRestore); // Menambahkan elemen kembali ke dalam breadcrumb
        delete removedElementsJasakonstruksistrukturPost[conditionId]; // Menghapus elemen dari objek setelah dikembalikan
    } else {
        console.log(`Elemen dengan ID ${conditionId} tidak ditemukan di removedElementsJasakonstruksistrukturPost.`);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    // var currentUrl = window.location.href;
     //const cleanUrl = currentUrl.split('?')[0]; // Menghapus parameter seperti ?m=1
    const cleanUrlJasaJasaKonsStrukturPost = window.location.href.split(/[?#]/)[0]; // Menghilangkan parameter seperti ?m=1

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
		urlMappingJasaRangkaAtapBajaRingan,
		urlMappingJasaKonstruksiBajaKonvensional,
		urlMappingJasaKanopiBajadanBesi,
		urlMappingJasaStrukturBajaGudang,
		urlMappingJasaCorBeton,
		urlMappingJasaPengecoranLantaiDak,
		urlMappingJasaPengecoranLantaiGudang,
		urlMappingJasaBekistingdanPembesian,
		urlMappingJasaPengecoranKolomBeton,
		urlMappingJasaKonstruksiGedungHunian,
		urlMappingJasaKonstruksiRumahTinggal,
		urlMappingJasaKonstruksiRukodanKios,
		urlMappingJasaKonstruksiVilla,
		urlMappingJasaKonstruksiApartemen,
		urlMappingJasaKonstruksiHotel,
		urlMappingJasaKonstruksiPerkantoran,
		urlMappingJasaKonstruksiGedungSekolah,
		urlMappingJasaKonstruksiGedungRumahSakit,
		urlMappingJasaKonstruksiGudangLogistik,
		urlMappingJasaKonstruksiPabrik,
		urlMappingJasaKonstruksiColdStorage,
		urlMappingJasaKonstruksiBengkel,
		urlMappingJasaKonstruksiWorkshop,
		urlMappingJasaPembuatanLapanganOlahRaga,
		urlMappingJasaPembuatanLapanganFutsal,
		urlMappingJasaPembuatanLapanganBasket,
		urlMappingJasaPembuatanLapanganSepakbola,
		urlMappingJasaPembuatanLapanganTenis,
		urlMappingJasaPembuatanLapanganBadminton,
		urlMappingJasaPembuatanLapanganVoli,
		urlMappingJasaPembuatanLapanganSerbaguna,
		urlMappingJasaPembuatanKolamRenang,
		urlMappingJasaPembuatanKolamIkan,
		urlMappingJasaSepticTankBeton,
		urlMappingJasaPembuatanTangkiAir,
		urlMappingJasaPembuatanBakPenampungan,
		urlMappingJasaKonstruksiMenaraAir
		
    );

    // --- validasi URL terdaftar ---
    if (!urlMappingGabungan[cleanUrlJasaJasaKonsStrukturPost]) {
      console.log(`[HybridDateModified] URL tidak terdaftar: ${cleanUrlJasaJasaKonsStrukturPost}`);
      return;
    }
  
  // === Tanggal nextUpdate1 global ===
		const globalNextUpdate1 = "2026-02-07T00:00:00.000Z";
	console.log(`🌐 [AutoMeta] Detected jasa-konstruksi-struktur-post : ${cleanUrlJasaJasaKonsStrukturPost}`);

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

    const hash = stableHash(cleanUrlJasaJasaKonsStrukturPost);
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
	
	console.log("✅ AEDMetaDates updated jasa-konstruksi-struktur-post:", window.AEDMetaDates);
    console.log(`✅ [HybridDateModified v2.5] ${cleanUrlJasaJasaKonsStrukturPost} → ${isoDate} | type=${type || "-"}`);

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
		urlMappingJasaPasangBajaRinganFromMoneyPage2MoneyPage3,
		urlMappingJasaPasangAtapBajaRinganFromMoneyPage3MoneyPage4,
        urlMappingJasaPasangKanopiBajaRinganFromMoneyPage3MoneyPage4,

		urlMappingHargaJasaPasangBajaRinganFromMoneyPage3MoneyPage4,
		urlMappingHargaJasaBoronganBajaRinganFromMoneyPage4MoneyPage5,
		urlMappingHargaJasaBoronganBajaRinganPlusMaterialFromMoneyPage5MoneyChild,
		
		urlMappingJasaTukangBajaRinganFromMoneyPage3MoneyPage4,
        
		
		urlMappingJasaKonstruksiBajaKonvensionalFromMoneyPage1MoneyPage2,
		urlMappingHargaJasaKonstruksiBajaKonvensionalFromMoneyPage2MoneyPage3,
		urlMappingJasaPembangunanTowerBajaFromMoneyPage2MoneyPage3,
		urlMappingHargaJasaPembangunanTowerBajaFromMoneyPage3MoneyPage4,

		
		urlMappingJasaKanopiBajadanBesiFromMoneyPage1MoneyPage2,
		urlMappingJasaStrukturBajaGudangFromMoneyPage1MoneyPage2,
		
		urlMappingJasaCorBetonReadyMixFromMoneyPage1MoneyPage2,
		urlMappingHargaJasaBoronganCorBetonFromMoneyPage2MoneyPage3,
        urlMappingHargaJasaBoronganCorBetonBangunanFromMoneyPage3MoneyPage4,
		
		urlMappingJasaPengecoranLantaiDakFromMoneyPage1MoneyPage2,
		urlMappingHargaJasaCorDakBetonFromMoneyPage2MoneyPage3,
		
		urlMappingJasaPengecoranLantaiGudangFromMoneyPage1MoneyPage2,
		urlMappingJasaBekistingdanPembesianFromMoneyPage1MoneyPage2,
		urlMappingJasaPengecoranKolomBetonFromMoneyPage1MoneyPage2,
		urlMappingJasaKonstruksiGedungHunianFromMoneyPageMoneyPage1,

		urlMappingJasaPembuatanBangunanFromMoneyMaster1MoneyPage,
		urlMappingHargaJasaPembuatanBangunanFromMoneyPageMoneyPage1,
		urlMappingHargaJasaBoronganBangunanFromMoneyPage1MoneyPage2,
		urlMappingHargaJasaBoronganBangunanFromMoneyPage1MoneyChild,
		urlMappingJasaPembuatanRumahFromMoneyMaster2MoneyPage,
		urlMappingHargaJasaPembuatanRumahFromMoneyPageMoneyPage1,
       urlMappingHargaJasaBoronganRumahFromMoneyPage1MoneyPage2,
		urlMappingHargaJasaBoronganRumahFromMoneyPage1MoneyChild,
        urlMappingJasaBangunRumahFromMoneyMaster3MoneyPage,
		urlMappingJasaBangunRumahFromMoneyMaster3MoneyChild,
		
		
		urlMappingJasaPembuatanRukoFromMoneyMaster2MoneyPage,
		urlMappingJasaPembuatanVillaFromMoneyMaster2MoneyPage,
		urlMappingJasaPembuatanApartemenFromMoneyMaster2MoneyPage,
		urlMappingJasaPembuatanHotelFromMoneyMaster2MoneyPage,
		urlMappingJasaPembuatanPerkantoranFromMoneyMaster2MoneyPage,
		urlMappingJasaPembuatanSekolahFromMoneyMaster2MoneyPage,
		urlMappingJasaPembuatanRSFromFromMoneyMaster2MoneyPage,
		urlMappingJasaPembuatanGudangFromFromMoneyMaster2MoneyPage,
		urlMappingHargaJasaPembuatanGudangFromFromMoneyPageMoneyPage1,
		
		urlMappingJasaKonstruksiPabrikIndustriFromMoneyPageMoneyPage1,
		urlMappingJasaKonstruksiColdStorageModernFromMoneyPageMoneyPage1,
		urlMappingJasaKonstruksiBengkelModernFromMoneyPageMoneyPage1,
		urlMappingJasaKonstruksiWorkshopModernFromMoneyPageMoneyPage1,
		
		urlMappingJasaPembuatanLapanganOlahRagaFromMoneyPageMoneyChild,

		urlMappingJasaPembuatanLapanganFutsalFromMoneyPage1MoneyPage2,
		urlMappingJasaPembuatanLapanganFutsalFromMoneyPage1MoneyChild,
		urlMappingJasaPembuatanLapanganBasketFromMoneyPage1MoneyPage2,
		urlMappingJasaPembuatanLapanganSepakbolaFromMoneyPage1MoneyPage2,
		urlMappingJasaPembuatanLapanganTenisFromMoneyPage1MoneyPage2,
		urlMappingJasaPembuatanLapanganBadmintonFromMoneyPage1MoneyPage2,
		urlMappingJasaPembuatanLapanganVoliFromMoneyPage1MoneyPage2,
		urlMappingJasaPembuatanLapanganVoliFromMoneyPage1MoneyChild,
		urlMappingJasaPembuatanLapanganSerbagunaFromMoneyPage1MoneyPage2,

		urlMappingKontraktorKolamRenangFromMoneyPageMoneyPage1,
		urlMappingJasaPembuatanKolamRenangFromMoneyPageMoneyPage1,
        urlMappingHargaJasaPembuatanKolamRenangFromMoneyPage1MoneyPage2,
		urlMappingJasaPembuatanKolamRenangFromMoneyPageMoneyChild,
		 
		urlMappingJasaPembuatanKolamIkanFromSub2MoneyPage,
		urlMappingJasaSepticTankBetonFromSub2MoneyPage,
		urlMappingJasaPembuatanTangkiAirFromSub2MoneyPage,
		urlMappingJasaPembuatanBakPenampunganFromSub2MoneyPage,
		urlMappingJasaKonstruksiMenaraAirFromSub2MoneyPage
		
    );

    // --- validasi URL terdaftar ---
    if (!urlMappingGabungan[cleanUrlJasaJasaKonsStrukturPost]) {
      console.log(`[HybridDateModified] URL tidak terdaftar: ${cleanUrlJasaJasaKonsStrukturPost}`);
      return;
    }

	/* ============================================================
 🔥 Hybrid Date Modified v7.1 — UNTUK betonjayareadymix.com
    Custom date berdasarkan hasil deteksi page level
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
          console.warn("[Evergreen] Gagal load:", src);
          resolve();
        };
        document.head.appendChild(s);
      });
    }

    // ============================================================
    // 📌 TUNGGU PAGE LEVEL DETECTOR READY
    // ============================================================
    function waitForPageLevelDetector() {
      return new Promise((resolve) => {
        if (window.__pageLevelDetectorReady && window.pageLevelDetector) {
          resolve(true);
        } else {
          window.addEventListener("pageLevelDetectorReady", () => resolve(true), { once: true });
        }
      });
    }

    // ============================================================
    // 📌 TUNGGU DETECT EVERGREEN READY
    // ============================================================
    function waitForDetectEvergreen() {
      return new Promise((resolve) => {
        if (window.__detectEvergreenReady && typeof window.detectEvergreen === "function") {
          resolve(true);
        } else {
          window.addEventListener("detectEvergreenReady", () => resolve(true), { once: true });
        }
      });
    }

    // ============================================================
    // 📌 LOAD ALL SCRIPTS
    // ============================================================
    async function loadAllScripts() {
      const PAGE_LEVEL_DETECTOR_URL = "https://raw.githack.com/aliyul/solution-blogger/main/PageLevelDetector.js";
      const EVERGREEN_DETECTOR_URL = "https://raw.githack.com/aliyul/solution-blogger/main/SmartEvergreenDetector.js";
      
      if (typeof window.pageLevelDetector === "undefined") {
        console.log("⏳ Loading Page Level Detector v15.0...");
        await loadExternalJS(PAGE_LEVEL_DETECTOR_URL);
        await waitForPageLevelDetector();
        console.log("✅ Page Level Detector v15.0 READY");
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
    // 📌 DAFTAR EVERGREEN LEVELS & MONEY LEVELS (LENGKAP)
    // ============================================================
    const EVERGREEN_LEVELS = ['pillar', 'sub-pillar-tipe-2', 'sub-pillar-tipe-1', 'variant', 'sub-variant'];
    const MONEY_LEVELS = ['money-master', 'money-page', 'money-child', 'money-leadgen'];

    // ============================================================
    // 📌 FUNGSI MENENTUKAN CUSTOM DATE BERDASARKAN PAGE LEVEL
    // ============================================================
    function getCustomDateByPageLevel(pageLevel, entityType) {
      // ============================================================
      // LEVEL 1: EVERGREEN (tidak perlu update sering)
      // ============================================================
      if (EVERGREEN_LEVELS.includes(pageLevel)) {
        // Pillar (level tertinggi) - paling stabil
        if (pageLevel === 'pillar') {
          return "2026-04-01T10:30:00+07:00";
        }
        // Sub-Pillar Tipe 2, Sub-Pillar Tipe 1, Variant, Sub-Variant
        //return "2026-04-02T00:00:00+07:00";
		  		  // JASA KONSTRUKSI STRUKTUR POST: Sub-Pillar Tipe 2, Sub-Pillar Tipe 1, Variant, Sub-Variant 
        return "2026-04-10T00:00:00+07:00";
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
		  // JASA KONSTRUKSI CUTTING BETON POST: Sub-Pillar Tipe 2, Sub-Pillar Tipe 1, Variant, Sub-Variant 
        return "2026-04-16T00:00:00+07:00";
		  // JASA KONSTRUKSI BONGKAR BANGUNAN POST: Sub-Pillar Tipe 2, Sub-Pillar Tipe 1, Variant, Sub-Variant 
        return "2026-04-17T00:00:00+07:00";
		  */
      }
      
      // ============================================================
      // LEVEL 2: MONEY PAGES (perlu update berkala)
      // Kembalikan null agar SmartEvergreenDetector menghitung otomatis
      // money-master, money-page, money-child, money-leadgen
      // ============================================================
      if (MONEY_LEVELS.includes(pageLevel)) {
        return null; // AUTO mode
      }
      
      // ============================================================
      // DEFAULT: AUTO mode
      // ============================================================
      return null;
    }

    // ============================================================
    // 📌 EKSEKUSI UTAMA
    // ============================================================
    
    await loadAllScripts();
    
    // Tunggu sebentar agar pageLevelDetector selesai deteksi
    await new Promise(resolve => setTimeout(resolve, 100));
    
    // Dapatkan page level dan entity type dari detector yang sudah ready
    let pageLevel = 'pillar'; // default
    let entityType = 'produk'; // default
    
    if (window.pageLevelDetector) {
      pageLevel = window.pageLevelDetector.detect();
      entityType = window.pageLevelDetector.detectEntityType();
      console.log(`📌 Detected Page Level: ${pageLevel}, Entity Type: ${entityType}`);
    } else {
      console.warn("⚠️ PageLevelDetector not ready, using defaults");
    }
    
    // ============================================================
    // 🔥 STEP 2: TENTUKAN CUSTOM DATE BERDASARKAN HASIL DETEKSI
    // ============================================================
    let customDate = getCustomDateByPageLevel(pageLevel, entityType);
    let manualMode = customDate !== null;
    
    if (manualMode) {
      console.log(`📌 [CUSTOM DATE] PageLevel=${pageLevel}, EntityType=${entityType} → Using custom date: ${customDate}`);
    } else {
      console.log(`📌 [AUTO MODE] PageLevel=${pageLevel}, EntityType=${entityType} → No custom date, using auto calculation`);
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
    // 📌 HITUNG VARIASI TANGGAL
    // ============================================================
    const uniquePageIdentifier = window.location.pathname;
    let hashSource = uniquePageIdentifier;
    
    if (EVERGREEN_LEVELS.includes(detectedPageLevel)) {
      hashSource = 'evergreen-' + hashSource;
      console.log(`📌 Evergreen content (${detectedPageLevel}) → using evergreen hash prefix`);
    } else if (detectedEntityType === 'jasa') {
      hashSource = 'jasa-' + hashSource;
      console.log(`📌 Jasa content (${detectedPageLevel}) → using jasa hash prefix`);
    } else if (MONEY_LEVELS.includes(detectedPageLevel)) {
      hashSource = 'money-' + hashSource;
      console.log(`📌 Money page (${detectedPageLevel}) → using money hash prefix`);
    }
    
    const hash = stableHash(hashSource);
    const offsetSeconds = hash % 86400;
    const finalDate = new Date(new Date(dateModified).getTime() + offsetSeconds * 1000);
    const isoDate = toISOWithTimezoneLocal(finalDate);

    // ============================================================
    // 📌 UPDATE META DATEMODIFIED
    // ============================================================
    updateMetaDateModified(isoDate);

    window.AEDMetaDates = {
      ...window.AEDMetaDates,
      dateModified: isoDate,
      hashOffset: offsetSeconds
    };

    console.log(`✅ [HybridDateModified] ${uniquePageIdentifier} → ${isoDate}`);
    console.log(`   - offsetSeconds: ${offsetSeconds} detik`);
    console.log(`   - Mode: ${manualMode ? 'MANUAL (custom date based on page level)' : 'AUTO'}`);
    console.log(`📋 Custom config for betonjayareadymix.com applied successfully`);

  } catch (err) {
    console.error("[HybridDateModified] Fatal:", err);
  }
})();
	
     // Menemukan elemen menggunakan Id
    //var JasaKonsPerbaikan = document.getElementById("JasaKonsPerbaikan");
    var JasaKonsStrukturPost = document.getElementById("JasaKonsStrukturPost");

if (!JasaKonsStrukturPost) {
     console.error("elemen Id JasaKonsPerbaikanPost kondisi terhapus");	
} else {


     var JasaKonstruksiStrukturPostLink = document.getElementById("JasaKonstruksiStrukturPost");
     var JasaStrukturKonstruksiPostLink = document.getElementById("JasaStrukturKonstruksiPost");
    //SUB JasaStrukturKonstruksi
     var JasaKonstruksiGedungdanHunianPostLink = document.getElementById("JasaKonstruksiGedungdanHunianPost");
     var JasaKonstruksiIndustridanGudangPostLink = document.getElementById("JasaKonstruksiIndustridanGudangPost");
     var JasaStrukturBajadanRangkaRinganPostLink = document.getElementById("JasaStrukturBajadanRangkaRinganPost");
     var JasaStrukturKhususPostLink = document.getElementById("JasaStrukturKhususPost");
     var JasaKonstruksiLapanganOlahragaPostLink = document.getElementById("JasaKonstruksiLapanganOlahragaPost");
     var JasaKonstruksiModulardanPrecastPostLink = document.getElementById("JasaKonstruksiModulardanPrecastPost");
     var JasaStrukturBetondanPengecoranPostLink = document.getElementById("JasaStrukturBetondanPengecoranPost");
	
     //SUB JasaKonstruksiStrukturPost
     var JasaRangkaAtapBajaRinganPostLink = document.getElementById("JasaRangkaAtapBajaRinganPost");
     var JasaKonstruksiBajaKonvensionalPostLink = document.getElementById("JasaKonstruksiBajaKonvensionalPost");
     var JasaKanopiBajadanBesiPostLink = document.getElementById("JasaKanopiBajadanBesiPost");
     var JasaStrukturBajaGudangPostLink = document.getElementById("JasaStrukturBajaGudangPost");
     //SUB JasaStrukturBetondanPengecoranPost
     var JasaCorBetonPostLink = document.getElementById("JasaCorBetonPost");
     var JasaPengecoranLantaiDakPostLink = document.getElementById("JasaPengecoranLantaiDakPost");
     var JasaPengecoranKolomBetonPostLink = document.getElementById("JasaPengecoranKolomBetonPost");
     var JasaPengecoranLantaiGudangPostLink = document.getElementById("JasaPengecoranLantaiGudangPost");
     var JasaBekistingdanPembesianPostLink = document.getElementById("JasaBekistingdanPembesianPost");
   //SUB JasaKonstruksiGedungdanHunianPost
     var JasaKonstruksiRumahTinggalPostLink = document.getElementById("JasaKonstruksiRumahTinggalPost");
     var JasaKonstruksiRukodanKiosPostLink = document.getElementById("JasaKonstruksiRukodanKiosPost");
     var JasaKonstruksiVillaPostLink = document.getElementById("JasaKonstruksiVillaPost");
     var JasaKonstruksiApartemenPostLink = document.getElementById("JasaKonstruksiApartemenPost");
     var JasaKonstruksiHotelPostLink = document.getElementById("JasaKonstruksiHotelPost");
     var JasaKonstruksiPerkantoranPostLink = document.getElementById("JasaKonstruksiPerkantoranPost");
     var JasaKonstruksiGedungSekolahPostLink = document.getElementById("JasaKonstruksiGedungSekolahPost");
     var JasaKonstruksiGedungRumahSakitPostLink = document.getElementById("JasaKonstruksiGedungRumahSakitPost");
	//SUB JasaKonstruksiIndustridanGudangPost
     var JasaKonstruksiGudangLogistikPostLink = document.getElementById("JasaKonstruksiGudangLogistikPost");
     var JasaKonstruksiPabrikPostLink = document.getElementById("JasaKonstruksiPabrikPost");
     var JasaKonstruksiColdStoragePostLink = document.getElementById("JasaKonstruksiColdStoragePost");
     var JasaKonstruksiBengkelPostLink = document.getElementById("JasaKonstruksiBengkelPost");
     var JasaKonstruksiWorkshopPostLink = document.getElementById("JasaKonstruksiWorkshopPost");
     var JasaKonstruksiPabrikPostLink = document.getElementById("JasaKonstruksiPabrikPost");
	//SUB JasaKonstruksiLapanganOlahragaPost
     var JasaPembuatanLapanganFutsalPostLink = document.getElementById("JasaPembuatanLapanganFutsalPost");
     var JasaPembuatanLapanganTenisPostLink = document.getElementById("JasaPembuatanLapanganTenisPost");
     var JasaPembuatanLapanganBadmintonPostLink = document.getElementById("JasaPembuatanLapanganBadmintonPost");
     var JasaPembuatanLapanganBasketPostLink = document.getElementById("JasaPembuatanLapanganBasketPost");
     var JasaPembuatanLapanganSepakbolaPostLink = document.getElementById("JasaPembuatanLapanganSepakbolaPost");
     var JasaPembuatanLapanganVoliPostLink = document.getElementById("JasaPembuatanLapanganVoliPost");
     var JasaPembuatanLapanganSerbagunaPostLink = document.getElementById("JasaPembuatanLapanganSerbagunaPost");
    //SUB JasaStrukturKhususPost
     var JasaPembuatanKolamRenangPostLink = document.getElementById("JasaPembuatanKolamRenangPost");
     var JasaPembuatanKolamIkanPostLink = document.getElementById("JasaPembuatanKolamIkanPost");
     var JasaSepticTankBetonPostLink = document.getElementById("JasaSepticTankBetonPost");
     var JasaPembuatanTangkiAirPostLink = document.getElementById("JasaPembuatanTangkiAirPost");
     var JasaPembuatanBakPenampunganPostLink = document.getElementById("JasaPembuatanBakPenampunganPost");
     var JasaKonstruksiMenaraAirPostLink = document.getElementById("JasaKonstruksiMenaraAirPost");
    	
     var pageNameJasaKonsStrukturPost = document.getElementById("pageNameJasaKonsStrukturPost");
    
     //hide SUB JasaKonstruksiStrukturPost     
      JasaRangkaAtapBajaRinganPostLink.style.visibility = 'hidden';
      JasaKonstruksiBajaKonvensionalPostLink.style.visibility = 'hidden';
      JasaKanopiBajadanBesiPostLink.style.visibility = 'hidden';
      JasaStrukturBajaGudangPostLink.style.visibility = 'hidden';
      //hide SUB JasaStrukturBetondanPengecoranPost  
      JasaCorBetonPostLink.style.visibility = 'hidden';
      JasaPengecoranLantaiDakPostLink.style.visibility = 'hidden';
      JasaPengecoranKolomBetonPostLink.style.visibility = 'hidden';
      JasaPengecoranLantaiGudangPostLink.style.visibility = 'hidden';
      JasaBekistingdanPembesianPostLink.style.visibility = 'hidden';
     //hide SUB JasaKonstruksiGedungdanHunianPost
      JasaKonstruksiRumahTinggalPostLink.style.visibility = 'hidden';
      JasaKonstruksiRukodanKiosPostLink.style.visibility = 'hidden';
      JasaKonstruksiVillaPostLink.style.visibility = 'hidden';
      JasaKonstruksiApartemenPostLink.style.visibility = 'hidden';
      JasaKonstruksiHotelPostLink.style.visibility = 'hidden';
      JasaKonstruksiPerkantoranPostLink.style.visibility = 'hidden';
      JasaKonstruksiGedungSekolahPostLink.style.visibility = 'hidden';
      JasaKonstruksiGedungRumahSakitPostLink.style.visibility = 'hidden';
    //hide SUB JasaKonstruksiIndustridanGudangPost
     JasaKonstruksiGudangLogistikPostLink.style.visibility = 'hidden';
     JasaKonstruksiPabrikPostLink.style.visibility = 'hidden';
     JasaKonstruksiColdStoragePostLink.style.visibility = 'hidden';
     JasaKonstruksiBengkelPostLink.style.visibility = 'hidden';
     JasaKonstruksiWorkshopPostLink.style.visibility = 'hidden';
     JasaKonstruksiPabrikPostLink.style.visibility = 'hidden';

      //SUB JasaKonstruksiLapanganOlahragaPost
    JasaPembuatanLapanganFutsalPostLink.style.visibility = 'hidden';
    JasaPembuatanLapanganTenisPostLink.style.visibility = 'hidden';
   JasaPembuatanLapanganBadmintonPostLink.style.visibility = 'hidden';
    JasaPembuatanLapanganBasketPostLink.style.visibility = 'hidden';
    JasaPembuatanLapanganSepakbolaPostLink.style.visibility = 'hidden';
    JasaPembuatanLapanganVoliPostLink.style.visibility = 'hidden';
    JasaPembuatanLapanganSerbagunaPostLink.style.visibility = 'hidden';
      //SUB JasaStrukturKhususPost
    JasaPembuatanKolamRenangPostLink.style.visibility = 'hidden';
    JasaPembuatanKolamIkanPostLink.style.visibility = 'hidden';
    JasaSepticTankBetonPostLink.style.visibility = 'hidden';
    JasaPembuatanTangkiAirPostLink.style.visibility = 'hidden';
    JasaPembuatanBakPenampunganPostLink.style.visibility = 'hidden';
    JasaKonstruksiMenaraAirPostLink.style.visibility = 'hidden';
      
	
     // Default untuk menyembunyikan elemen
     JasaKonstruksiStrukturPostLink.style.visibility = 'hidden';
     JasaStrukturKonstruksiPostLink.style.visibility = 'hidden';
    
     //Hide SUB JasaStrukturKonstruksi
     JasaKonstruksiGedungdanHunianPostLink.style.visibility = 'hidden';
     JasaKonstruksiIndustridanGudangPostLink.style.visibility = 'hidden';
     JasaStrukturBajadanRangkaRinganPostLink.style.visibility = 'hidden';
     JasaStrukturKhususPostLink.style.visibility = 'hidden';
     JasaKonstruksiLapanganOlahragaPostLink.style.visibility = 'hidden';
     JasaKonstruksiModulardanPrecastPostLink.style.visibility = 'hidden';
     JasaStrukturBetondanPengecoranPostLink.style.visibility = 'hidden';
	
     pageNameJasaKonsStrukturPost.textContent = "";


//SUB JasaStrukturBajadanRangkaRinganPos
if (urlMappingJasaPasangBajaRinganFromMoneyPage2MoneyPage3[cleanUrlJasaJasaKonsStrukturPost]) {
	generateBreadcrumbJasaKonstruksiStrukturPost(
        urlMappingJasaPasangBajaRinganFromMoneyPage2MoneyPage3,
        cleanUrlJasaJasaKonsStrukturPost,
        [
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html'},
            { name: 'Daftar Jasa Struktur Konstruksi', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-struktur-konstruksi.html'},
            { name: 'Perbandingan Jasa Struktur Konstruksi', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-struktur-konstruksi.html'},
			 { name: 'Jasa Konstruksi Struktur', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi-struktur.html' },
            { name: 'Jasa Struktur Baja dan Rangka Ringan', url: 'https://www.betonjayareadymix.com/p/jasa-struktur-baja-dan-rangka-ringan.html' },
            { name: 'Jasa Konstruksi Baja Ringan', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi-baja-ringan.html' },
            { name: 'Jasa Pasang Baja Ringan', url: 'https://www.betonjayareadymix.com/p/jasa-pasang-baja-ringan.html'}
        ],
        'JASA_KONSTRUKSI'
    );
    }
	if (urlMappingJasaPasangAtapBajaRinganFromMoneyPage3MoneyPage4[cleanUrlJasaJasaKonsStrukturPost]) {
	generateBreadcrumbJasaKonstruksiStrukturPost(
        urlMappingJasaPasangAtapBajaRinganFromMoneyPage3MoneyPage4,
        cleanUrlJasaJasaKonsStrukturPost,
        [
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html'},
            { name: 'Daftar Jasa Struktur Konstruksi', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-struktur-konstruksi.html'},
            { name: 'Perbandingan Jasa Struktur Konstruksi', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-struktur-konstruksi.html'},
			 { name: 'Jasa Konstruksi Struktur', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi-struktur.html' },
            { name: 'Jasa Struktur Baja dan Rangka Ringan', url: 'https://www.betonjayareadymix.com/p/jasa-struktur-baja-dan-rangka-ringan.html' },
            { name: 'Jasa Konstruksi Baja Ringan', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi-baja-ringan.html' },
            { name: 'Jasa Pasang Baja Ringan', url: 'https://www.betonjayareadymix.com/p/jasa-pasang-baja-ringan.html'},
            { name: 'Jasa Pasang Atap Baja Ringan', url: 'https://www.betonjayareadymix.com/2018/09/jasa-pasang-atap-baja-ringan.html'}
        ],
        'JASA_KONSTRUKSI'
    );
    }
	if (urlMappingJasaPasangKanopiBajaRinganFromMoneyPage3MoneyPage4[cleanUrlJasaJasaKonsStrukturPost]) {
	generateBreadcrumbJasaKonstruksiStrukturPost(
        urlMappingJasaPasangKanopiBajaRinganFromMoneyPage3MoneyPage4,
        cleanUrlJasaJasaKonsStrukturPost,
        [
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html'},
            { name: 'Daftar Jasa Struktur Konstruksi', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-struktur-konstruksi.html'},
            { name: 'Perbandingan Jasa Struktur Konstruksi', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-struktur-konstruksi.html'},
			 { name: 'Jasa Konstruksi Struktur', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi-struktur.html' },
            { name: 'Jasa Struktur Baja dan Rangka Ringan', url: 'https://www.betonjayareadymix.com/p/jasa-struktur-baja-dan-rangka-ringan.html' },
            { name: 'Jasa Konstruksi Baja Ringan', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi-baja-ringan.html' },
            { name: 'Jasa Pasang Baja Ringan', url: 'https://www.betonjayareadymix.com/p/jasa-pasang-baja-ringan.html'},
            { name: 'Jasa Pasang Kanopi Baja Ringan', url: 'https://www.betonjayareadymix.com/2018/09/jasa-pasang-kanopi-baja-ringan.html'}
        ],
        'JASA_KONSTRUKSI'
    );
    }
	if (urlMappingHargaJasaPasangBajaRinganFromMoneyPage3MoneyPage4[cleanUrlJasaJasaKonsStrukturPost]) {
	generateBreadcrumbJasaKonstruksiStrukturPost(
        urlMappingHargaJasaPasangBajaRinganFromMoneyPage3MoneyPage4,
        cleanUrlJasaJasaKonsStrukturPost,
        [
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html'},
            { name: 'Daftar Jasa Struktur Konstruksi', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-struktur-konstruksi.html'},
            { name: 'Perbandingan Jasa Struktur Konstruksi', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-struktur-konstruksi.html'},
			 { name: 'Jasa Konstruksi Struktur', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi-struktur.html' },
            { name: 'Jasa Struktur Baja dan Rangka Ringan', url: 'https://www.betonjayareadymix.com/p/jasa-struktur-baja-dan-rangka-ringan.html' },
            { name: 'Jasa Konstruksi Baja Ringan', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi-baja-ringan.html' },
            { name: 'Jasa Pasang Baja Ringan', url: 'https://www.betonjayareadymix.com/p/jasa-pasang-baja-ringan.html'},
            { name: 'Harga Jasa Pasang Baja Ringan', url: 'https://www.betonjayareadymix.com/2018/09/harga-jasa-pasang-baja-ringan.html'}
        ],
        'JASA_KONSTRUKSI'
    );
    }
	if (urlMappingHargaJasaBoronganBajaRinganFromMoneyPage4MoneyPage5[cleanUrlJasaJasaKonsStrukturPost]) {
	generateBreadcrumbJasaKonstruksiStrukturPost(
        urlMappingHargaJasaBoronganBajaRinganFromMoneyPage4MoneyPage5,
        cleanUrlJasaJasaKonsStrukturPost,
        [
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html'},
            { name: 'Daftar Jasa Struktur Konstruksi', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-struktur-konstruksi.html'},
            { name: 'Perbandingan Jasa Struktur Konstruksi', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-struktur-konstruksi.html'},
			 { name: 'Jasa Konstruksi Struktur', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi-struktur.html' },
            { name: 'Jasa Struktur Baja dan Rangka Ringan', url: 'https://www.betonjayareadymix.com/p/jasa-struktur-baja-dan-rangka-ringan.html' },
            { name: 'Jasa Konstruksi Baja Ringan', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi-baja-ringan.html' },
            { name: 'Jasa Pasang Baja Ringan', url: 'https://www.betonjayareadymix.com/p/jasa-pasang-baja-ringan.html'},
            { name: 'Harga Jasa Pasang Baja Ringan', url: 'https://www.betonjayareadymix.com/2018/09/harga-jasa-pasang-baja-ringan.html'},
            { name: 'Harga Jasa Borongan Baja Ringan', url: 'https://www.betonjayareadymix.com/2019/04/harga-jasa-borongan-baja-ringan.html'}
        ],
        'JASA_KONSTRUKSI'
    );
    }
	if (urlMappingHargaJasaBoronganBajaRinganPlusMaterialFromMoneyPage5MoneyChild[cleanUrlJasaJasaKonsStrukturPost]) {
	generateBreadcrumbJasaKonstruksiStrukturPost(
        urlMappingHargaJasaBoronganBajaRinganPlusMaterialFromMoneyPage5MoneyChild,
        cleanUrlJasaJasaKonsStrukturPost,
        [
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html'},
            { name: 'Daftar Jasa Struktur Konstruksi', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-struktur-konstruksi.html'},
            { name: 'Perbandingan Jasa Struktur Konstruksi', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-struktur-konstruksi.html'},
			 { name: 'Jasa Konstruksi Struktur', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi-struktur.html' },
            { name: 'Jasa Struktur Baja dan Rangka Ringan', url: 'https://www.betonjayareadymix.com/p/jasa-struktur-baja-dan-rangka-ringan.html' },
            { name: 'Jasa Konstruksi Baja Ringan', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi-baja-ringan.html' },
            { name: 'Jasa Pasang Baja Ringan', url: 'https://www.betonjayareadymix.com/p/jasa-pasang-baja-ringan.html'},
            { name: 'Harga Jasa Pasang Baja Ringan', url: 'https://www.betonjayareadymix.com/2018/09/harga-jasa-pasang-baja-ringan.html'},
            { name: 'Harga Jasa Borongan Baja Ringan', url: 'https://www.betonjayareadymix.com/2019/04/harga-jasa-borongan-baja-ringan.html'},
            { name: 'Harga Jasa Borongan Baja Ringan Plus Material', url: 'https://www.betonjayareadymix.com/2019/04/harga-jasa-borongan-baja-ringan-plus-material.html'}
        ],
        'JASA_KONSTRUKSI'
    );
    }
	
	
	if (urlMappingJasaTukangBajaRinganFromMoneyPage3MoneyPage4[cleanUrlJasaJasaKonsStrukturPost]) {
	generateBreadcrumbJasaKonstruksiStrukturPost(
        urlMappingJasaTukangBajaRinganFromMoneyPage3MoneyPage4,
        cleanUrlJasaJasaKonsStrukturPost,
        [
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html'},
            { name: 'Daftar Jasa Struktur Konstruksi', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-struktur-konstruksi.html'},
            { name: 'Perbandingan Jasa Struktur Konstruksi', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-struktur-konstruksi.html'},
			 { name: 'Jasa Konstruksi Struktur', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi-struktur.html' },
            { name: 'Jasa Struktur Baja dan Rangka Ringan', url: 'https://www.betonjayareadymix.com/p/jasa-struktur-baja-dan-rangka-ringan.html' },
            { name: 'Jasa Konstruksi Baja Ringan', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi-baja-ringan.html' },
            { name: 'Jasa Pasang Baja Ringan', url: 'https://www.betonjayareadymix.com/p/jasa-pasang-baja-ringan.html'},
            { name: 'Jasa Tukang Baja Ringan', url: 'https://www.betonjayareadymix.com/2018/09/jasa-tukang-baja-ringan.html'}
        ],
        'JASA_KONSTRUKSI'
    );
    }
	
if (urlMappingJasaKonstruksiBajaKonvensionalFromMoneyPage1MoneyPage2[cleanUrlJasaJasaKonsStrukturPost]) {
      generateBreadcrumbJasaKonstruksiStrukturPost(
        urlMappingJasaKonstruksiBajaKonvensionalFromMoneyPage1MoneyPage2,
        cleanUrlJasaJasaKonsStrukturPost,
        [
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html'},
            { name: 'Daftar Jasa Struktur Konstruksi', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-struktur-konstruksi.html'},
            { name: 'Perbandingan Jasa Struktur Konstruksi', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-struktur-konstruksi.html'},
			 { name: 'Jasa Konstruksi Struktur', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi-struktur.html' },
            { name: 'Jasa Struktur Baja dan Rangka Ringan', url: 'https://www.betonjayareadymix.com/p/jasa-struktur-baja-dan-rangka-ringan.html' },
            { name: 'Jasa Konstruksi Baja Konvensional', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi-baja-konvensional.html' }

        ],
        'JASA_KONSTRUKSI'
    );  
   }
 if (urlMappingHargaJasaKonstruksiBajaKonvensionalFromMoneyPage2MoneyPage3[cleanUrlJasaJasaKonsStrukturPost]) {
      generateBreadcrumbJasaKonstruksiStrukturPost(
        urlMappingHargaJasaKonstruksiBajaKonvensionalFromMoneyPage2MoneyPage3,
        cleanUrlJasaJasaKonsStrukturPost,
        [
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html'},
            { name: 'Daftar Jasa Struktur Konstruksi', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-struktur-konstruksi.html'},
            { name: 'Perbandingan Jasa Struktur Konstruksi', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-struktur-konstruksi.html'},
			 { name: 'Jasa Konstruksi Struktur', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi-struktur.html' },
            { name: 'Jasa Struktur Baja dan Rangka Ringan', url: 'https://www.betonjayareadymix.com/p/jasa-struktur-baja-dan-rangka-ringan.html' },
            { name: 'Jasa Konstruksi Baja Konvensional', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi-baja-konvensional.html' },
            { name: 'Harga Jasa Konstruksi Baja Konvensional', url: 'https://www.betonjayareadymix.com/p/harga-jasa-konstruksi-baja-konvensional.html' }

        ],
        'JASA_KONSTRUKSI'
    );  
   }
 if (urlMappingJasaPembangunanTowerBajaFromMoneyPage2MoneyPage3[cleanUrlJasaJasaKonsStrukturPost]) {
      generateBreadcrumbJasaKonstruksiStrukturPost(
        urlMappingJasaPembangunanTowerBajaFromMoneyPage2MoneyPage3,
        cleanUrlJasaJasaKonsStrukturPost,
        [
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html'},
            { name: 'Daftar Jasa Struktur Konstruksi', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-struktur-konstruksi.html'},
            { name: 'Perbandingan Jasa Struktur Konstruksi', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-struktur-konstruksi.html'},
			 { name: 'Jasa Konstruksi Struktur', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi-struktur.html' },
            { name: 'Jasa Struktur Baja dan Rangka Ringan', url: 'https://www.betonjayareadymix.com/p/jasa-struktur-baja-dan-rangka-ringan.html' },
            { name: 'Jasa Konstruksi Baja Konvensional', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi-baja-konvensional.html' },
            { name: 'Jasa Pembangunan Tower Baja', url: 'https://www.betonjayareadymix.com/p/jasa-pembangunan-tower-baja.html' }

        ],
        'JASA_KONSTRUKSI'
    );  
   }
	 if (urlMappingHargaJasaPembangunanTowerBajaFromMoneyPage3MoneyPage4[cleanUrlJasaJasaKonsStrukturPost]) {
      generateBreadcrumbJasaKonstruksiStrukturPost(
        urlMappingHargaJasaPembangunanTowerBajaFromMoneyPage3MoneyPage4,
        cleanUrlJasaJasaKonsStrukturPost,
        [
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html'},
            { name: 'Daftar Jasa Struktur Konstruksi', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-struktur-konstruksi.html'},
            { name: 'Perbandingan Jasa Struktur Konstruksi', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-struktur-konstruksi.html'},
			 { name: 'Jasa Konstruksi Struktur', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi-struktur.html' },
            { name: 'Jasa Struktur Baja dan Rangka Ringan', url: 'https://www.betonjayareadymix.com/p/jasa-struktur-baja-dan-rangka-ringan.html' },
            { name: 'Jasa Konstruksi Baja Konvensional', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi-baja-konvensional.html' },
            { name: 'Jasa Pembangunan Tower Baja', url: 'https://www.betonjayareadymix.com/p/jasa-pembangunan-tower-baja.html' },
            { name: 'Harga Jasa Pembangunan Tower Baja', url: 'https://www.betonjayareadymix.com/p/harga-jasa-pembangunan-tower-baja.html' }

        ],
        'JASA_KONSTRUKSI'
    );  
   }
	
  if (urlMappingJasaKanopiBajadanBesiFromMoneyPage1MoneyPage2[cleanUrlJasaJasaKonsStrukturPost]) {
      generateBreadcrumbJasaKonstruksiStrukturPost(
        urlMappingJasaKanopiBajadanBesiFromMoneyPage1MoneyPage2,
        cleanUrlJasaJasaKonsStrukturPost,
        [
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html'},
            { name: 'Daftar Jasa Struktur Konstruksi', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-struktur-konstruksi.html'},
            { name: 'Perbandingan Jasa Struktur Konstruksi', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-struktur-konstruksi.html'},
			 { name: 'Jasa Konstruksi Struktur', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi-struktur.html' },
            { name: 'Jasa Struktur Baja dan Rangka Ringan', url: 'https://www.betonjayareadymix.com/p/jasa-struktur-baja-dan-rangka-ringan.html' },
            { name: 'Jasa Kanopi Baja dan Besi', url: 'https://www.betonjayareadymix.com/p/jasa-kanopi-baja-dan-besi.html' }

        ],
        'JASA_KONSTRUKSI'
    );  
   }
if (urlMappingJasaStrukturBajaGudangFromMoneyPage1MoneyPage2[cleanUrlJasaJasaKonsStrukturPost]) {
      generateBreadcrumbJasaKonstruksiStrukturPost(
        urlMappingJasaStrukturBajaGudangFromMoneyPage1MoneyPage2,
        cleanUrlJasaJasaKonsStrukturPost,
        [
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html'},
            { name: 'Daftar Jasa Struktur Konstruksi', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-struktur-konstruksi.html'},
            { name: 'Perbandingan Jasa Struktur Konstruksi', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-struktur-konstruksi.html'},
			 { name: 'Jasa Konstruksi Struktur', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi-struktur.html' },
            { name: 'Jasa Struktur Baja dan Rangka Ringan', url: 'https://www.betonjayareadymix.com/p/jasa-struktur-baja-dan-rangka-ringan.html' },
            { name: 'Jasa Struktur Baja Gudang', url: 'https://www.betonjayareadymix.com/p/jasa-struktur-baja-gudang.html' }

        ],
        'JASA_KONSTRUKSI'
    );  
   }
if (urlMappingJasaStrukturBajaGudangFromMoneyPage1MoneyPage2[cleanUrlJasaJasaKonsStrukturPost]) {
      generateBreadcrumbJasaKonstruksiStrukturPost(
        urlMappingJasaStrukturBajaGudangFromMoneyPage1MoneyPage2,
        cleanUrlJasaJasaKonsStrukturPost,
        [
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html'},
            { name: 'Daftar Jasa Struktur Konstruksi', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-struktur-konstruksi.html'},
            { name: 'Perbandingan Jasa Struktur Konstruksi', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-struktur-konstruksi.html'},
			 { name: 'Jasa Konstruksi Struktur', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi-struktur.html' },
            { name: 'Jasa Struktur Baja dan Rangka Ringan', url: 'https://www.betonjayareadymix.com/p/jasa-struktur-baja-dan-rangka-ringan.html' },
            { name: 'Jasa Struktur Baja Gudang', url: 'https://www.betonjayareadymix.com/p/jasa-struktur-baja-gudang.html' }

        ],
        'JASA_KONSTRUKSI'
    );  
   }
	
//AKHIR SUB JasaStrukturBajadanRangkaRinganPost
	
//SUB JasaStrukturBetondanPengecoranPost
if (urlMappingJasaCorBetonReadyMixFromMoneyPage1MoneyPage2[cleanUrlJasaJasaKonsStrukturPost]) {
              generateBreadcrumbJasaKonstruksiStrukturPost(
        urlMappingJasaCorBetonReadyMixFromMoneyPage1MoneyPage2,
        cleanUrlJasaJasaKonsStrukturPost,
        [
             { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
             { name: 'Daftar Jasa Konstruksi Struktur', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-konstruksi-struktur.html' },
             { name: 'Perbandingan Jasa Konstruksi Struktur', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-konstruksi-struktur.html' },
            { name: 'Jasa Konstruksi Struktur', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi-struktur.html' },
            { name: 'Jasa Struktur Beton Dan Pengecoran', url: 'https://www.betonjayareadymix.com/p/jasa-struktur-beton-dan-pengecoran.html' },
            { name: 'Jasa Cor Beton Ready Mix', url: 'https://www.betonjayareadymix.com/p/jasa-cor-beton-ready-mix.html' }

        ],
        'JASA_KONSTRUKSI'
    );  
} 
if (urlMappingHargaJasaBoronganCorBetonFromMoneyPage2MoneyPage3[cleanUrlJasaJasaKonsStrukturPost]) {
              generateBreadcrumbJasaKonstruksiStrukturPost(
        urlMappingHargaJasaBoronganCorBetonFromMoneyPage2MoneyPage3,
        cleanUrlJasaJasaKonsStrukturPost,
        [
             { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
             { name: 'Daftar Jasa Konstruksi Struktur', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-konstruksi-struktur.html' },
             { name: 'Perbandingan Jasa Konstruksi Struktur', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-konstruksi-struktur.html' },
            { name: 'Jasa Konstruksi Struktur', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi-struktur.html' },
            { name: 'Jasa Struktur Beton Dan Pengecoran', url: 'https://www.betonjayareadymix.com/p/jasa-struktur-beton-dan-pengecoran.html' },
            { name: 'Jasa Cor Beton Ready Mix', url: 'https://www.betonjayareadymix.com/p/jasa-cor-beton-ready-mix.html' },
            { name: 'Harga Jasa Borongan Cor Beton', url: 'https://www.betonjayareadymix.com/p/harga-jasa-borongan-cor-beton.html' }

        ],
        'JASA_KONSTRUKSI'
    );  
}
if (urlMappingHargaJasaBoronganCorBetonBangunanFromMoneyPage3MoneyPage4[cleanUrlJasaJasaKonsStrukturPost]) {
              generateBreadcrumbJasaKonstruksiStrukturPost(
        urlMappingHargaJasaBoronganCorBetonBangunanFromMoneyPage3MoneyPage4,
        cleanUrlJasaJasaKonsStrukturPost,
        [
             { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
             { name: 'Daftar Jasa Konstruksi Struktur', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-konstruksi-struktur.html' },
             { name: 'Perbandingan Jasa Konstruksi Struktur', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-konstruksi-struktur.html' },
            { name: 'Jasa Konstruksi Struktur', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi-struktur.html' },
            { name: 'Jasa Struktur Beton Dan Pengecoran', url: 'https://www.betonjayareadymix.com/p/jasa-struktur-beton-dan-pengecoran.html' },
            { name: 'Jasa Cor Beton Ready Mix', url: 'https://www.betonjayareadymix.com/p/jasa-cor-beton-ready-mix.html' },
            { name: 'Harga Jasa Borongan Cor Beton', url: 'https://www.betonjayareadymix.com/p/harga-jasa-borongan-cor-beton.html' },
            { name: 'Harga Jasa Borongan Cor Beton Bangunan', url: 'https://www.betonjayareadymix.com/p/harga-jasa-borongan-cor-beton-bangunan.html' }

        ],
        'JASA_KONSTRUKSI'
    );  
}	
if (urlMappingJasaPengecoranLantaiDakFromMoneyPage1MoneyPage2[cleanUrlJasaJasaKonsStrukturPost]) {
    generateBreadcrumbJasaKonstruksiStrukturPost(
        urlMappingJasaPengecoranLantaiDakFromMoneyPage1MoneyPage2,
        cleanUrlJasaJasaKonsStrukturPost,
        [
             { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
             { name: 'Daftar Jasa Konstruksi Struktur', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-konstruksi-struktur.html' },
             { name: 'Perbandingan Jasa Konstruksi Struktur', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-konstruksi-struktur.html' },
            { name: 'Jasa Konstruksi Struktur', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi-struktur.html' },
            { name: 'Jasa Struktur Beton Dan Pengecoran', url: 'https://www.betonjayareadymix.com/p/jasa-struktur-beton-dan-pengecoran.html' },
            { name: 'Jasa Pengecoran Lantai Dak', url: 'https://www.betonjayareadymix.com/p/jasa-pengecoran-lantai-dak.html' }

        ],
        'JASA_KONSTRUKSI'
    );  	
}
if (urlMappingHargaJasaCorDakBetonFromMoneyPage2MoneyPage3[cleanUrlJasaJasaKonsStrukturPost]) {
    generateBreadcrumbJasaKonstruksiStrukturPost(
        urlMappingHargaJasaCorDakBetonFromMoneyPage2MoneyPage3,
        cleanUrlJasaJasaKonsStrukturPost,
        [
             { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
             { name: 'Daftar Jasa Konstruksi Struktur', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-konstruksi-struktur.html' },
             { name: 'Perbandingan Jasa Konstruksi Struktur', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-konstruksi-struktur.html' },
            { name: 'Jasa Konstruksi Struktur', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi-struktur.html' },
            { name: 'Jasa Struktur Beton Dan Pengecoran', url: 'https://www.betonjayareadymix.com/p/jasa-struktur-beton-dan-pengecoran.html' },
            { name: 'Jasa Pengecoran Lantai Dak', url: 'https://www.betonjayareadymix.com/p/jasa-pengecoran-lantai-dak.html' },
            { name: 'Harga Jasa Cor Dak Beton', url: 'https://www.betonjayareadymix.com/2018/10/harga-jasa-cor-dak-beton.html' }

        ],
        'JASA_KONSTRUKSI'
    );  	
}
	
	
if (urlMappingJasaPengecoranLantaiGudangFromMoneyPage1MoneyPage2[cleanUrlJasaJasaKonsStrukturPost]) {
    generateBreadcrumbJasaKonstruksiStrukturPost(
        urlMappingJasaPengecoranLantaiGudangFromMoneyPage1MoneyPage2,
        cleanUrlJasaJasaKonsStrukturPost,
        [
             { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
             { name: 'Daftar Jasa Konstruksi Struktur', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-konstruksi-struktur.html' },
             { name: 'Perbandingan Jasa Konstruksi Struktur', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-konstruksi-struktur.html' },
            { name: 'Jasa Konstruksi Struktur', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi-struktur.html' },
            { name: 'Jasa Struktur Beton Dan Pengecoran', url: 'https://www.betonjayareadymix.com/p/jasa-struktur-beton-dan-pengecoran.html' },
            { name: 'Jasa Pengecoran Lantai Gudang', url: 'https://www.betonjayareadymix.com/p/jasa-pengecoran-lantai-gudang.html' }

        ],
        'JASA_KONSTRUKSI'
    );  	
}
if (urlMappingJasaPengecoranLantaiGudangFromMoneyPage1MoneyPage2[cleanUrlJasaJasaKonsStrukturPost]) {
    generateBreadcrumbJasaKonstruksiStrukturPost(
        urlMappingJasaPengecoranLantaiGudangFromMoneyPage1MoneyPage2,
        cleanUrlJasaJasaKonsStrukturPost,
        [
             { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
             { name: 'Daftar Jasa Konstruksi Struktur', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-konstruksi-struktur.html' },
             { name: 'Perbandingan Jasa Konstruksi Struktur', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-konstruksi-struktur.html' },
            { name: 'Jasa Konstruksi Struktur', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi-struktur.html' },
            { name: 'Jasa Struktur Beton Dan Pengecoran', url: 'https://www.betonjayareadymix.com/p/jasa-struktur-beton-dan-pengecoran.html' },
            { name: 'Jasa Pengecoran Lantai Gudang', url: 'https://www.betonjayareadymix.com/p/jasa-pengecoran-lantai-gudang.html' }

        ],
        'JASA_KONSTRUKSI'
    );  	
}
	
if (urlMappingJasaPengecoranKolomBetonFromMoneyPage1MoneyPage2[cleanUrlJasaJasaKonsStrukturPost]) {
      generateBreadcrumbJasaKonstruksiStrukturPost(
        urlMappingJasaPengecoranKolomBetonFromMoneyPage1MoneyPage2,
        cleanUrlJasaJasaKonsStrukturPost,
        [
             { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
             { name: 'Daftar Jasa Konstruksi Struktur', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-konstruksi-struktur.html' },
             { name: 'Perbandingan Jasa Konstruksi Struktur', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-konstruksi-struktur.html' },
            { name: 'Jasa Konstruksi Struktur', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi-struktur.html' },
            { name: 'Jasa Struktur Beton Dan Pengecoran', url: 'https://www.betonjayareadymix.com/p/jasa-struktur-beton-dan-pengecoran.html' },
            { name: 'Jasa Pengecoran Kolom Beton', url: 'https://www.betonjayareadymix.com/p/jasa-pengecoran-kolom-beton.html' }

        ],
        'JASA_KONSTRUKSI'
    );  
   
}
if (urlMappingJasaBekistingdanPembesianFromMoneyPage1MoneyPage2[cleanUrlJasaJasaKonsStrukturPost]) {
generateBreadcrumbJasaKonstruksiStrukturPost(
        urlMappingJasaBekistingdanPembesianFromMoneyPage1MoneyPage2,
        cleanUrlJasaJasaKonsStrukturPost,
        [
             { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
             { name: 'Daftar Jasa Konstruksi Struktur', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-konstruksi-struktur.html' },
             { name: 'Perbandingan Jasa Konstruksi Struktur', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-konstruksi-struktur.html' },
            { name: 'Jasa Konstruksi Struktur', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi-struktur.html' },
            { name: 'Jasa Struktur Beton Dan Pengecoran', url: 'https://www.betonjayareadymix.com/p/jasa-struktur-beton-dan-pengecoran.html' },
            { name: 'Jasa Bekisting dan Pembesian', url: 'https://www.betonjayareadymix.com/p/jasa-bekisting-dan-pembesian.html' }

        ],
        'JASA_KONSTRUKSI'
    );  
}
//akhir SUB JasaStrukturBetondanPengecoranPost

if (urlMappingJasaKonstruksiGedungHunianFromMoneyPageMoneyPage1[cleanUrlJasaJasaKonsStrukturPost]) {
	generateBreadcrumbJasaKonstruksiStrukturPost(
        urlMappingJasaKonstruksiGedungHunianFromMoneyPageMoneyPage1,
        cleanUrlJasaJasaKonsStrukturPost,
        [
           { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Konstruksi Bangunan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-konstruksi-bangunan.html' },
            { name: 'Perbandingan Jasa Konstruksi Bangunan', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-konstruksi-bangunan.html' },
            { name: 'Jasa Konstruksi Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi-bangunan.html' },
            { name: 'Jasa Konstruksi Gedung dan Hunian', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi-gedung-dan-hunian.html' }
      
        ],
        'JASA_KONSTRUKSI'
    );      
}
//SUB JasaKonstruksiGedungdanHunianPost
if (urlMappingJasaPembuatanBangunanFromMoneyMaster1MoneyPage[cleanUrlJasaJasaKonsStrukturPost]) {
  generateBreadcrumbJasaKonstruksiStrukturPost(
        urlMappingJasaPembuatanBangunanFromMoneyMaster1MoneyPage,
        cleanUrlJasaJasaKonsStrukturPost,
        [
           { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Pembuatan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-pembuatan.html'},
            { name: 'Perbandingan Jasa Pembuatan', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-pembuatan.html'},
            { name: 'Jasa Pembuatan', url: 'https://www.betonjayareadymix.com/p/jasa-pembuatan.html'},
            { name: 'Jasa Pembuatan Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-pembuatan-bangunan.html'}

        ],
        'JASA_KONSTRUKSI'
    );      
}
if (urlMappingHargaJasaPembuatanBangunanFromMoneyPageMoneyPage1[cleanUrlJasaJasaKonsStrukturPost]) {
  generateBreadcrumbJasaKonstruksiStrukturPost(
        urlMappingHargaJasaPembuatanBangunanFromMoneyPageMoneyPage1,
        cleanUrlJasaJasaKonsStrukturPost,
        [
           { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Pembuatan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-pembuatan.html'},
            { name: 'Perbandingan Jasa Pembuatan', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-pembuatan.html'},
            { name: 'Jasa Pembuatan', url: 'https://www.betonjayareadymix.com/p/jasa-pembuatan.html'},
            { name: 'Jasa Pembuatan Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-pembuatan-bangunan.html'},
            { name: 'Harga Jasa Pembuatan Bangunan', url: 'https://www.betonjayareadymix.com/2018/09/harga-jasa-pembuatan-bangunan.html'}

        ],
        'JASA_KONSTRUKSI'
    );      
}
if (urlMappingHargaJasaBoronganBangunanFromMoneyPage1MoneyPage2[cleanUrlJasaJasaKonsStrukturPost]) {
  generateBreadcrumbJasaKonstruksiStrukturPost(
        urlMappingHargaJasaBoronganBangunanFromMoneyPage1MoneyPage2,
        cleanUrlJasaJasaKonsStrukturPost,
        [
           { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Pembuatan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-pembuatan.html'},
            { name: 'Perbandingan Jasa Pembuatan', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-pembuatan.html'},
            { name: 'Jasa Pembuatan', url: 'https://www.betonjayareadymix.com/p/jasa-pembuatan.html'},
            { name: 'Jasa Pembuatan Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-pembuatan-bangunan.html'},
            { name: 'Harga Jasa Pembuatan Bangunan', url: 'https://www.betonjayareadymix.com/2018/09/harga-jasa-pembuatan-bangunan.html'},
            { name: 'Harga Jasa Borongan Bangunan', url: 'https://www.betonjayareadymix.com/2018/09/harga-jasa-borongan-bangunan.html'}

        ],
        'JASA_KONSTRUKSI'
    );      
}
if (urlMappingHargaJasaBoronganBangunanFromMoneyPage1MoneyChild[cleanUrlJasaJasaKonsStrukturPost]) {
  generateBreadcrumbJasaKonstruksiStrukturPost(
        urlMappingHargaJasaBoronganBangunanFromMoneyPage1MoneyChild,
        cleanUrlJasaJasaKonsStrukturPost,
        [
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Pembuatan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-pembuatan.html'},
            { name: 'Perbandingan Jasa Pembuatan', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-pembuatan.html'},
            { name: 'Jasa Pembuatan', url: 'https://www.betonjayareadymix.com/p/jasa-pembuatan.html'},
            { name: 'Jasa Pembuatan Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-pembuatan-bangunan.html'},
            { name: 'Harga Jasa Pembuatan Bangunan', url: 'https://www.betonjayareadymix.com/2018/09/harga-jasa-pembuatan-bangunan.html'},
            { name: 'Harga Jasa Borongan Bangunan', url: 'https://www.betonjayareadymix.com/2018/09/harga-jasa-borongan-bangunan.html'}
        ],
        'JASA_KONSTRUKSI'
    );      
}
if (urlMappingJasaPembuatanRumahFromMoneyMaster2MoneyPage[cleanUrlJasaJasaKonsStrukturPost]) {
  generateBreadcrumbJasaKonstruksiStrukturPost(
        urlMappingJasaPembuatanRumahFromMoneyMaster2MoneyPage,
        cleanUrlJasaJasaKonsStrukturPost,
        [
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Pembuatan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-pembuatan.html'},
            { name: 'Perbandingan Jasa Pembuatan', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-pembuatan.html'},
            { name: 'Jasa Pembuatan', url: 'https://www.betonjayareadymix.com/p/jasa-pembuatan.html'},
            { name: 'Jasa Pembuatan Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-pembuatan-bangunan.html'},
            { name: 'Jasa Pembuatan Rumah', url: 'https://www.betonjayareadymix.com/p/jasa-pembuatan-rumah.html'}
        ],
        'JASA_KONSTRUKSI'
    );      
}
if (urlMappingHargaJasaPembuatanRumahFromMoneyPageMoneyPage1[cleanUrlJasaJasaKonsStrukturPost]) {
  generateBreadcrumbJasaKonstruksiStrukturPost(
        urlMappingHargaJasaPembuatanRumahFromMoneyPageMoneyPage1,
        cleanUrlJasaJasaKonsStrukturPost,
        [
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Pembuatan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-pembuatan.html'},
            { name: 'Perbandingan Jasa Pembuatan', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-pembuatan.html'},
            { name: 'Jasa Pembuatan', url: 'https://www.betonjayareadymix.com/p/jasa-pembuatan.html'},
            { name: 'Jasa Pembuatan Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-pembuatan-bangunan.html'},
            { name: 'Jasa Pembuatan Rumah', url: 'https://www.betonjayareadymix.com/p/jasa-pembuatan-rumah.html'},
            { name: 'Harga Jasa Pembuatan Rumah', url: 'https://www.betonjayareadymix.com/2018/09/harga-jasa-pembuatan-rumah.html'}
        ],
        'JASA_KONSTRUKSI'
    );      
}
if (urlMappingHargaJasaBoronganRumahFromMoneyPage1MoneyPage2[cleanUrlJasaJasaKonsStrukturPost]) {
  generateBreadcrumbJasaKonstruksiStrukturPost(
        urlMappingHargaJasaBoronganRumahFromMoneyPage1MoneyPage2,
        cleanUrlJasaJasaKonsStrukturPost,
        [
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Pembuatan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-pembuatan.html'},
            { name: 'Perbandingan Jasa Pembuatan', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-pembuatan.html'},
            { name: 'Jasa Pembuatan', url: 'https://www.betonjayareadymix.com/p/jasa-pembuatan.html'},
            { name: 'Jasa Pembuatan Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-pembuatan-bangunan.html'},
            { name: 'Jasa Pembuatan Rumah', url: 'https://www.betonjayareadymix.com/p/jasa-pembuatan-rumah.html'},
            { name: 'Harga Jasa Pembuatan Rumah', url: 'https://www.betonjayareadymix.com/2018/09/harga-jasa-pembuatan-rumah.html'},
            { name: 'Harga Jasa Borongan Rumah', url: 'https://www.betonjayareadymix.com/2018/09/harga-jasa-borongan-rumah.html'}
        ],
        'JASA_KONSTRUKSI'
    );      
}
if (urlMappingHargaJasaBoronganRumahFromMoneyPage1MoneyChild[cleanUrlJasaJasaKonsStrukturPost]) {
  generateBreadcrumbJasaKonstruksiStrukturPost(
        urlMappingHargaJasaBoronganRumahFromMoneyPage1MoneyChild,
        cleanUrlJasaJasaKonsStrukturPost,
        [
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Pembuatan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-pembuatan.html'},
            { name: 'Perbandingan Jasa Pembuatan', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-pembuatan.html'},
            { name: 'Jasa Pembuatan', url: 'https://www.betonjayareadymix.com/p/jasa-pembuatan.html'},
            { name: 'Jasa Pembuatan Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-pembuatan-bangunan.html'},
            { name: 'Jasa Pembuatan Rumah', url: 'https://www.betonjayareadymix.com/p/jasa-pembuatan-rumah.html'},
            { name: 'Harga Jasa Pembuatan Rumah', url: 'https://www.betonjayareadymix.com/2018/09/harga-jasa-pembuatan-rumah.html'},
            { name: 'Harga Jasa Borongan Rumah', url: 'https://www.betonjayareadymix.com/2018/09/harga-jasa-borongan-rumah.html'}
        ],
        'JASA_KONSTRUKSI'
    );      
}

if (urlMappingJasaBangunRumahFromMoneyMaster3MoneyPage[cleanUrlJasaJasaKonsStrukturPost]) {
  generateBreadcrumbJasaKonstruksiStrukturPost(
        urlMappingJasaBangunRumahFromMoneyMaster3MoneyPage,
        cleanUrlJasaJasaKonsStrukturPost,
        [
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Pembuatan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-pembuatan.html'},
            { name: 'Perbandingan Jasa Pembuatan', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-pembuatan.html'},
            { name: 'Jasa Pembuatan', url: 'https://www.betonjayareadymix.com/p/jasa-pembuatan.html'},
            { name: 'Jasa Pembuatan Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-pembuatan-bangunan.html'},
            { name: 'Jasa Pembuatan Rumah', url: 'https://www.betonjayareadymix.com/p/jasa-pembuatan-rumah.html'},
            { name: 'Jasa Bangun Rumah', url: 'https://www.betonjayareadymix.com/p/jasa-bangun-rumah.html'}
        ],
        'JASA_KONSTRUKSI'
    );      
}
if (urlMappingJasaBangunRumahFromMoneyMaster3MoneyChild[cleanUrlJasaJasaKonsStrukturPost]) {
  generateBreadcrumbJasaKonstruksiStrukturPost(
        urlMappingJasaBangunRumahFromMoneyMaster3MoneyChild,
        cleanUrlJasaJasaKonsStrukturPost,
        [
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Pembuatan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-pembuatan.html'},
            { name: 'Perbandingan Jasa Pembuatan', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-pembuatan.html'},
            { name: 'Jasa Pembuatan', url: 'https://www.betonjayareadymix.com/p/jasa-pembuatan.html'},
            { name: 'Jasa Pembuatan Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-pembuatan-bangunan.html'},
            { name: 'Jasa Pembuatan Rumah', url: 'https://www.betonjayareadymix.com/p/jasa-pembuatan-rumah.html'},
             { name: 'Jasa Bangun Rumah', url: 'https://www.betonjayareadymix.com/p/jasa-bangun-rumah.html'}
        ],
        'JASA_KONSTRUKSI'
    );      
}
	
if (urlMappingJasaPembuatanRukoFromMoneyMaster2MoneyPage[cleanUrlJasaJasaKonsStrukturPost]) {
   generateBreadcrumbJasaKonstruksiStrukturPost(
        urlMappingJasaPembuatanRukoFromMoneyMaster2MoneyPage,
        cleanUrlJasaJasaKonsStrukturPost,
        [
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Pembuatan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-pembuatan.html'},
            { name: 'Perbandingan Jasa Pembuatan', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-pembuatan.html'},
            { name: 'Jasa Pembuatan', url: 'https://www.betonjayareadymix.com/p/jasa-pembuatan.html'},
            { name: 'Jasa Pembuatan Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-pembuatan-bangunan.html'},
            { name: 'Jasa Pembuatan Ruko', url: 'https://www.betonjayareadymix.com/p/jasa-pembuatan-ruko.html'}
        ],
        'JASA_KONSTRUKSI'
    );
   
}
//AKHIR SUB JasaKonstruksiGedungdanHunianPost

//SUB JasaKonstruksiGudangLogistikPost
if (urlMappingJasaPembuatanGudangFromFromMoneyMaster2MoneyPage[cleanUrlJasaJasaKonsStrukturPost]) {
     generateBreadcrumbJasaKonstruksiStrukturPost(
        urlMappingJasaPembuatanGudangFromFromMoneyMaster2MoneyPage,
        cleanUrlJasaJasaKonsStrukturPost,
        [
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Pembuatan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-pembuatan.html'},
            { name: 'Perbandingan Jasa Pembuatan', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-pembuatan.html'},
            { name: 'Jasa Pembuatan', url: 'https://www.betonjayareadymix.com/p/jasa-pembuatan.html'},
            { name: 'Jasa Pembuatan Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-pembuatan-bangunan.html'},
            { name: 'Jasa Pembuatan Gudang', url: 'https://www.betonjayareadymix.com/p/jasa-pembuatan-gudang.html'}
        
        
        ],
        'JASA_KONSTRUKSI'
    );
}
if (urlMappingHargaJasaPembuatanGudangFromFromMoneyPageMoneyPage1[cleanUrlJasaJasaKonsStrukturPost]) {
     generateBreadcrumbJasaKonstruksiStrukturPost(
        urlMappingHargaJasaPembuatanGudangFromFromMoneyPageMoneyPage1,
        cleanUrlJasaJasaKonsStrukturPost,
        [
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Pembuatan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-pembuatan.html'},
            { name: 'Perbandingan Jasa Pembuatan', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-pembuatan.html'},
            { name: 'Jasa Pembuatan', url: 'https://www.betonjayareadymix.com/p/jasa-pembuatan.html'},
            { name: 'Jasa Pembuatan Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-pembuatan-bangunan.html'},
            { name: 'Jasa Pembuatan Gudang', url: 'https://www.betonjayareadymix.com/p/jasa-pembuatan-gudang.html'},
            { name: 'Harga Jasa Pembuatan Gudang', url: 'https://www.betonjayareadymix.com/2018/09/harga-jasa-pembuatan-gudang.html'}
        
        
        ],
        'JASA_KONSTRUKSI'
    );
}
//AKHIR SUB JasaKonstruksiGudangLogistikPost

//SUB JasaKonstruksiPabrikPost
if (urlMappingJasaKonstruksiPabrikIndustriFromMoneyPageMoneyPage1[cleanUrlJasaJasaKonsStrukturPost]) {
   generateBreadcrumbJasaKonstruksiStrukturPost(
        urlMappingJasaKonstruksiPabrikIndustriFromMoneyPageMoneyPage1,
        cleanUrlJasaJasaKonsStrukturPost,
        [
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Konstruksi Bangunan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-konstruksi-bangunan.html' },
            { name: 'Perbandingan Jasa Konstruksi Bangunan', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-konstruksi-bangunan.html' },
            { name: 'Jasa Konstruksi Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi-bangunan.html' },
            { name: 'Jasa Konstruksi Pabrik Industri', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi-pabrik-industri.html' }
        
        ],
        'JASA_KONSTRUKSI'
    );
}
//AKHIR SUB JasaKonstruksiPabrikPost
if (urlMappingJasaKonstruksiColdStorageModernFromMoneyPageMoneyPage1[cleanUrlJasaJasaKonsStrukturPost]) {
   generateBreadcrumbJasaKonstruksiStrukturPost(
        urlMappingJasaKonstruksiColdStorageModernFromMoneyPageMoneyPage1,
        cleanUrlJasaJasaKonsStrukturPost,
        [
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Konstruksi Bangunan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-konstruksi-bangunan.html' },
            { name: 'Perbandingan Jasa Konstruksi Bangunan', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-konstruksi-bangunan.html' },
            { name: 'Jasa Konstruksi Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi-bangunan.html' },
            { name: 'Jasa Konstruksi Cold Storage Modern', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi-cold-storage-modern.html' }
        
        ],
        'JASA_KONSTRUKSI'
    );
}
if (urlMappingJasaKonstruksiBengkelModernFromMoneyPageMoneyPage1[cleanUrlJasaJasaKonsStrukturPost]) {
   generateBreadcrumbJasaKonstruksiStrukturPost(
        urlMappingJasaKonstruksiBengkelModernFromMoneyPageMoneyPage1,
        cleanUrlJasaJasaKonsStrukturPost,
        [
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Konstruksi Bangunan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-konstruksi-bangunan.html' },
            { name: 'Perbandingan Jasa Konstruksi Bangunan', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-konstruksi-bangunan.html' },
            { name: 'Jasa Konstruksi Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi-bangunan.html' },
            { name: 'Jasa Konstruksi Bengkel Modern', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi-bengkel-modern.html' }
        
        ],
        'JASA_KONSTRUKSI'
    );
}
if (urlMappingJasaKonstruksiWorkshopModernFromMoneyPageMoneyPage1[cleanUrlJasaJasaKonsStrukturPost]) {
   generateBreadcrumbJasaKonstruksiStrukturPost(
        urlMappingJasaKonstruksiWorkshopModernFromMoneyPageMoneyPage1,
        cleanUrlJasaJasaKonsStrukturPost,
        [
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Konstruksi Bangunan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-konstruksi-bangunan.html' },
            { name: 'Perbandingan Jasa Konstruksi Bangunan', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-konstruksi-bangunan.html' },
            { name: 'Jasa Konstruksi Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi-bangunan.html' },
            { name: 'Jasa Konstruksi Workshop Modern', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi-workshop-modern.html' }
        
        ],
        'JASA_KONSTRUKSI'
    );
}

//SUB JasaKonstruksiLapanganOlahragaPost
if (urlMappingJasaPembuatanLapanganOlahRagaFromMoneyPageMoneyChild[cleanUrlJasaJasaKonsStrukturPost]) {
  generateBreadcrumbJasaKonstruksiStrukturPost(
        urlMappingJasaPembuatanLapanganOlahRagaFromMoneyPageMoneyChild,
        cleanUrlJasaJasaKonsStrukturPost,
        [
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html'},
             { name: 'Daftar Jasa Lapangan Olahraga', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-lapangan-olahraga.html'},
             { name: 'Perbandingan Jasa Lapangan Olahraga', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-lapangan-olahraga.html' },
            { name: 'Jasa Lapangan Olahraga', url: 'https://www.betonjayareadymix.com/p/jasa-lapangan-olahraga.html'},
            { name: 'Jasa Pembuatan Lapangan Olahraga', url: 'https://www.betonjayareadymix.com/p/jasa-pembuatan-lapangan-olahraga.html'}
        ],
        'JASA_KONSTRUKSI'
    ); 
	
}
	
if (urlMappingJasaPembuatanLapanganFutsalFromMoneyPage1MoneyPage2[cleanUrlJasaJasaKonsStrukturPost]) {
          generateBreadcrumbJasaKonstruksiStrukturPost(
        urlMappingJasaPembuatanLapanganFutsalFromMoneyPage1MoneyPage2,
        cleanUrlJasaJasaKonsStrukturPost,
        [
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html'},
             { name: 'Daftar Jasa Lapangan Olahraga', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-lapangan-olahraga.html'},
             { name: 'Perbandingan Jasa Lapangan Olahraga', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-lapangan-olahraga.html' },
            { name: 'Jasa Lapangan Olahraga', url: 'https://www.betonjayareadymix.com/p/jasa-lapangan-olahraga.html'},
            { name: 'Jasa Pembuatan Lapangan Olahraga', url: 'https://www.betonjayareadymix.com/p/jasa-pembuatan-lapangan-olahraga.html'},
            { name: 'Jasa Pembuatan Lapangan Futsal', url: 'https://www.betonjayareadymix.com/p/jasa-pembuatan-lapangan-futsal.html'}
        ],
        'JASA_KONSTRUKSI'
    ); 
   }
	if (urlMappingJasaPembuatanLapanganFutsalFromMoneyPage1MoneyChild[cleanUrlJasaJasaKonsStrukturPost]) {
          generateBreadcrumbJasaKonstruksiStrukturPost(
        urlMappingJasaPembuatanLapanganFutsalFromMoneyPage1MoneyChild,
        cleanUrlJasaJasaKonsStrukturPost,
        [
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html'},
             { name: 'Daftar Jasa Lapangan Olahraga', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-lapangan-olahraga.html'},
             { name: 'Perbandingan Jasa Lapangan Olahraga', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-lapangan-olahraga.html' },
            { name: 'Jasa Lapangan Olahraga', url: 'https://www.betonjayareadymix.com/p/jasa-lapangan-olahraga.html'},
            { name: 'Jasa Pembuatan Lapangan Olahraga', url: 'https://www.betonjayareadymix.com/p/jasa-pembuatan-lapangan-olahraga.html'},
            { name: 'Jasa Pembuatan Lapangan Futsal', url: 'https://www.betonjayareadymix.com/p/jasa-pembuatan-lapangan-futsal.html'}
        ],
        'JASA_KONSTRUKSI'
    ); 
   }
if (urlMappingJasaPembuatanLapanganTenisFromMoneyPage1MoneyPage2[cleanUrlJasaJasaKonsStrukturPost]) {
              generateBreadcrumbJasaKonstruksiStrukturPost(
        urlMappingJasaPembuatanLapanganTenisFromMoneyPage1MoneyPage2,
        cleanUrlJasaJasaKonsStrukturPost,
        [
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html'},
             { name: 'Daftar Jasa Lapangan Olahraga', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-lapangan-olahraga.html'},
             { name: 'Perbandingan Jasa Lapangan Olahraga', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-lapangan-olahraga.html' },
            { name: 'Jasa Lapangan Olahraga', url: 'https://www.betonjayareadymix.com/p/jasa-lapangan-olahraga.html'},
            { name: 'Jasa Pembuatan Lapangan Olahraga', url: 'https://www.betonjayareadymix.com/p/jasa-pembuatan-lapangan-olahraga.html'},
            { name: 'Jasa Pembuatan Lapangan Tenis', url: 'https://www.betonjayareadymix.com/p/jasa-pembuatan-lapangan-tenis.html'}
        ],
        'JASA_KONSTRUKSI'
    );    
}
	
if (urlMappingJasaPembuatanLapanganBadmintonFromMoneyPage1MoneyPage2[cleanUrlJasaJasaKonsStrukturPost]) {
	 generateBreadcrumbJasaKonstruksiStrukturPost(
        urlMappingJasaPembuatanLapanganBadmintonFromMoneyPage1MoneyPage2,
        cleanUrlJasaJasaKonsStrukturPost,
        [
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html'},
             { name: 'Daftar Jasa Lapangan Olahraga', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-lapangan-olahraga.html'},
             { name: 'Perbandingan Jasa Lapangan Olahraga', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-lapangan-olahraga.html' },
            { name: 'Jasa Lapangan Olahraga', url: 'https://www.betonjayareadymix.com/p/jasa-lapangan-olahraga.html'},
            { name: 'Jasa Pembuatan Lapangan Olahraga', url: 'https://www.betonjayareadymix.com/p/jasa-pembuatan-lapangan-olahraga.html'},
            { name: 'Jasa Pembuatan Lapangan Badminton', url: 'https://www.betonjayareadymix.com/p/jasa-pembuatan-lapangan-badminton.html'}
        ],
        'JASA_KONSTRUKSI'
    );    
}
if (urlMappingJasaPembuatanLapanganBasketFromMoneyPage1MoneyPage2[cleanUrlJasaJasaKonsStrukturPost]) {
      generateBreadcrumbJasaKonstruksiStrukturPost(
        urlMappingJasaPembuatanLapanganBasketFromMoneyPage1MoneyPage2,
        cleanUrlJasaJasaKonsStrukturPost,
        [
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html'},
             { name: 'Daftar Jasa Lapangan Olahraga', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-lapangan-olahraga.html'},
             { name: 'Perbandingan Jasa Lapangan Olahraga', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-lapangan-olahraga.html' },
            { name: 'Jasa Lapangan Olahraga', url: 'https://www.betonjayareadymix.com/p/jasa-lapangan-olahraga.html'},
            { name: 'Jasa Pembuatan Lapangan Olahraga', url: 'https://www.betonjayareadymix.com/p/jasa-pembuatan-lapangan-olahraga.html'},
            { name: 'Jasa Pembuatan Lapangan Basket', url: 'https://www.betonjayareadymix.com/p/jasa-pembuatan-lapangan-basket.html'}
        ],
        'JASA_KONSTRUKSI'
    );    
}
if (urlMappingJasaPembuatanLapanganSepakbolaFromMoneyPage1MoneyPage2[cleanUrlJasaJasaKonsStrukturPost]) {
     generateBreadcrumbJasaKonstruksiStrukturPost(
        urlMappingJasaPembuatanLapanganSepakbolaFromMoneyPage1MoneyPage2,
        cleanUrlJasaJasaKonsStrukturPost,
        [
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html'},
             { name: 'Daftar Jasa Lapangan Olahraga', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-lapangan-olahraga.html'},
             { name: 'Perbandingan Jasa Lapangan Olahraga', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-lapangan-olahraga.html' },
            { name: 'Jasa Lapangan Olahraga', url: 'https://www.betonjayareadymix.com/p/jasa-lapangan-olahraga.html'},
            { name: 'Jasa Pembuatan Lapangan Olahraga', url: 'https://www.betonjayareadymix.com/p/jasa-pembuatan-lapangan-olahraga.html'},
            { name: 'Jasa Pembuatan Lapangan Sepakbola', url: 'https://www.betonjayareadymix.com/p/jasa-pembuatan-lapangan-sepakbola.html'}
        ],
        'JASA_KONSTRUKSI'
    );    
}
if (urlMappingJasaPembuatanLapanganVoliFromMoneyPage1MoneyPage2[cleanUrlJasaJasaKonsStrukturPost]) {
         generateBreadcrumbJasaKonstruksiStrukturPost(
        urlMappingJasaPembuatanLapanganVoliFromMoneyPage1MoneyPage2,
        cleanUrlJasaJasaKonsStrukturPost,
        [
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html'},
             { name: 'Daftar Jasa Lapangan Olahraga', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-lapangan-olahraga.html'},
             { name: 'Perbandingan Jasa Lapangan Olahraga', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-lapangan-olahraga.html' },
            { name: 'Jasa Lapangan Olahraga', url: 'https://www.betonjayareadymix.com/p/jasa-lapangan-olahraga.html'},
            { name: 'Jasa Pembuatan Lapangan Olahraga', url: 'https://www.betonjayareadymix.com/p/jasa-pembuatan-lapangan-olahraga.html'},
            { name: 'Jasa Pembuatan Lapangan Voli', url: 'https://www.betonjayareadymix.com/p/jasa-pembuatan-lapangan-voli.html'}
        ],
        'JASA_KONSTRUKSI'
    );    
}
if (urlMappingJasaPembuatanLapanganVoliFromMoneyPage1MoneyChild[cleanUrlJasaJasaKonsStrukturPost]) {
         generateBreadcrumbJasaKonstruksiStrukturPost(
        urlMappingJasaPembuatanLapanganVoliFromMoneyPage1MoneyChild,
        cleanUrlJasaJasaKonsStrukturPost,
        [
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html'},
             { name: 'Daftar Jasa Lapangan Olahraga', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-lapangan-olahraga.html'},
             { name: 'Perbandingan Jasa Lapangan Olahraga', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-lapangan-olahraga.html' },
            { name: 'Jasa Lapangan Olahraga', url: 'https://www.betonjayareadymix.com/p/jasa-lapangan-olahraga.html'},
            { name: 'Jasa Pembuatan Lapangan Olahraga', url: 'https://www.betonjayareadymix.com/p/jasa-pembuatan-lapangan-olahraga.html'},
            { name: 'Jasa Pembuatan Lapangan Voli', url: 'https://www.betonjayareadymix.com/p/jasa-pembuatan-lapangan-voli.html'}
        ],
        'JASA_KONSTRUKSI'
    );    
}
	
if (urlMappingJasaPembuatanLapanganSerbagunaFromMoneyPage1MoneyPage2[cleanUrlJasaJasaKonsStrukturPost]) {
	         generateBreadcrumbJasaKonstruksiStrukturPost(
        urlMappingJasaPembuatanLapanganSerbagunaFromMoneyPage1MoneyPage2,
        cleanUrlJasaJasaKonsStrukturPost,
        [
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html'},
             { name: 'Daftar Jasa Lapangan Olahraga', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-lapangan-olahraga.html'},
             { name: 'Perbandingan Jasa Lapangan Olahraga', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-lapangan-olahraga.html' },
            { name: 'Jasa Lapangan Olahraga', url: 'https://www.betonjayareadymix.com/p/jasa-lapangan-olahraga.html'},
            { name: 'Jasa Pembuatan Lapangan Olahraga', url: 'https://www.betonjayareadymix.com/p/jasa-pembuatan-lapangan-olahraga.html'},
            { name: 'Jasa Pembuatan Lapangan Serbaguna', url: 'https://www.betonjayareadymix.com/p/jasa-pembuatan-lapangan-serbaguna.html'}
        ],
        'JASA_KONSTRUKSI'
    );  
}
//AKHIR SUB JasaKonstruksiLapanganOlahragaPost

//SUB Jasa Struktur Khusus
if (urlMappingKontraktorKolamRenangFromMoneyPageMoneyPage1[cleanUrlJasaJasaKonsStrukturPost]) {
   generateBreadcrumbJasaKonstruksiStrukturPost(
        urlMappingKontraktorKolamRenangFromMoneyPageMoneyPage1,
        cleanUrlJasaJasaKonsStrukturPost,
        [
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
             { name: 'Daftar Jasa Struktur Khusus', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-struktur-khusus.html' },
             { name: 'Perbandingan Jasa Struktur Khusus', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-struktur-khusus.html' },
            { name: 'Jasa Struktur Khusus', url: 'https://www.betonjayareadymix.com/p/jasa-struktur-khusus.html' },
            { name: 'Jasa Kolam Renang', url: 'https://www.betonjayareadymix.com/p/jasa-kolam-renang.html' },
            { name: 'Kontraktor Kolam Renang', url: 'https://www.betonjayareadymix.com/p/kontraktor-kolam-renang.html' }
        ],
        'JASA_KONSTRUKSI'
    );	   
}
if (urlMappingJasaPembuatanKolamRenangFromMoneyPageMoneyPage1[cleanUrlJasaJasaKonsStrukturPost]) {
   generateBreadcrumbJasaKonstruksiStrukturPost(
        urlMappingJasaPembuatanKolamRenangFromMoneyPageMoneyPage1,
        cleanUrlJasaJasaKonsStrukturPost,
        [
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
             { name: 'Daftar Jasa Struktur Khusus', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-struktur-khusus.html' },
             { name: 'Perbandingan Jasa Struktur Khusus', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-struktur-khusus.html' },
            { name: 'Jasa Struktur Khusus', url: 'https://www.betonjayareadymix.com/p/jasa-struktur-khusus.html' },
            { name: 'Jasa Kolam Renang', url: 'https://www.betonjayareadymix.com/p/jasa-kolam-renang.html' },
            { name: 'Jasa Pembuatan Kolam Renang', url: 'https://www.betonjayareadymix.com/p/jasa-pembuatan-kolam-renang.html' }
        ],
        'JASA_KONSTRUKSI'
    );	   
}	
if (urlMappingHargaJasaPembuatanKolamRenangFromMoneyPage1MoneyPage2[cleanUrlJasaJasaKonsStrukturPost]) {
   generateBreadcrumbJasaKonstruksiStrukturPost(
        urlMappingHargaJasaPembuatanKolamRenangFromMoneyPage1MoneyPage2,
        cleanUrlJasaJasaKonsStrukturPost,
        [
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
             { name: 'Daftar Jasa Struktur Khusus', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-struktur-khusus.html' },
             { name: 'Perbandingan Jasa Struktur Khusus', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-struktur-khusus.html' },
            { name: 'Jasa Struktur Khusus', url: 'https://www.betonjayareadymix.com/p/jasa-struktur-khusus.html' },
            { name: 'Jasa Kolam Renang', url: 'https://www.betonjayareadymix.com/p/jasa-kolam-renang.html' },
            { name: 'Jasa Pembuatan Kolam Renang', url: 'https://www.betonjayareadymix.com/p/jasa-pembuatan-kolam-renang.html' },
            { name: 'Harga Jasa Pembuatan Kolam Renang', url: 'https://www.betonjayareadymix.com/p/harga-jasa-pembuatan-kolam-renang.html' }
        ],
        'JASA_KONSTRUKSI'
    );	   
}	
if (urlMappingJasaPembuatanKolamRenangFromMoneyPageMoneyChild[cleanUrlJasaJasaKonsStrukturPost]) {
   generateBreadcrumbJasaKonstruksiStrukturPost(
        urlMappingJasaPembuatanKolamRenangFromMoneyPageMoneyChild,
        cleanUrlJasaJasaKonsStrukturPost,
        [
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
             { name: 'Daftar Jasa Struktur Khusus', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-struktur-khusus.html' },
             { name: 'Perbandingan Jasa Struktur Khusus', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-struktur-khusus.html' },
            { name: 'Jasa Struktur Khusus', url: 'https://www.betonjayareadymix.com/p/jasa-struktur-khusus.html' },
            { name: 'Jasa Kolam Renang', url: 'https://www.betonjayareadymix.com/p/jasa-kolam-renang.html' },
            { name: 'Jasa Pembuatan Kolam Renang', url: 'https://www.betonjayareadymix.com/p/jasa-pembuatan-kolam-renang.html' }
        ],
        'JASA_KONSTRUKSI'
    );	   
}	

	
//AKHIR SUB Jasa Struktur Khusus
}
   });
