// ============================================================
// [SUB MAPPING] jasa-perbaikan-post.js — v2.2.0
// Pattern: Early Exit v2.0.0 + Fix v2.1.0 + Pendekatan C (NO MERGED_MAP)
// Container: #JasaKonsPerbaikanPost
// ============================================================

console.log('[jasa-perbaikan-post] 📄 File loaded, waiting for DOM...');


// ═════════════════════════════════════════════════════════════════════
// 📂 PARENT: MM → Money Child (30) — 6 services × 5 kota
// MC = location parallel (bukan child Variant)
// ═════════════════════════════════════════════════════════════════════
const urlMappingJasaPlumbingFromMoneyPageMoneyChild = {

  // ─── MC: Instalasi Pipa Air (5) ───
  "https://www.betonjayareadymix.com/p/jasa-instalasi-pipa-air-jakarta.html":   "Jasa Instalasi Pipa Air Jakarta",
  "https://www.betonjayareadymix.com/p/jasa-instalasi-pipa-air-bogor.html":     "Jasa Instalasi Pipa Air Bogor",
  "https://www.betonjayareadymix.com/p/jasa-instalasi-pipa-air-depok.html":     "Jasa Instalasi Pipa Air Depok",
  "https://www.betonjayareadymix.com/p/jasa-instalasi-pipa-air-tangerang.html": "Jasa Instalasi Pipa Air Tangerang",
  "https://www.betonjayareadymix.com/p/jasa-instalasi-pipa-air-bekasi.html":    "Jasa Instalasi Pipa Air Bekasi",

  // ─── MC: Perbaikan Pipa Air Bocor (5) ───
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-pipa-air-bocor-jakarta.html":   "Jasa Perbaikan Pipa Air Bocor Jakarta",
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-pipa-air-bocor-bogor.html":     "Jasa Perbaikan Pipa Air Bocor Bogor",
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-pipa-air-bocor-depok.html":     "Jasa Perbaikan Pipa Air Bocor Depok",
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-pipa-air-bocor-tangerang.html": "Jasa Perbaikan Pipa Air Bocor Tangerang",
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-pipa-air-bocor-bekasi.html":    "Jasa Perbaikan Pipa Air Bocor Bekasi",

  // ─── MC: Service Pompa Air (5) ───
  "https://www.betonjayareadymix.com/p/jasa-service-pompa-air-jakarta.html":   "Jasa Service Pompa Air Jakarta",
  "https://www.betonjayareadymix.com/p/jasa-service-pompa-air-bogor.html":     "Jasa Service Pompa Air Bogor",
  "https://www.betonjayareadymix.com/p/jasa-service-pompa-air-depok.html":     "Jasa Service Pompa Air Depok",
  "https://www.betonjayareadymix.com/p/jasa-service-pompa-air-tangerang.html": "Jasa Service Pompa Air Tangerang",
  "https://www.betonjayareadymix.com/p/jasa-service-pompa-air-bekasi.html":    "Jasa Service Pompa Air Bekasi",

  // ─── MC: Instalasi Sanitair (5) ───
  "https://www.betonjayareadymix.com/p/jasa-instalasi-sanitair-jakarta.html":   "Jasa Instalasi Sanitair Jakarta",
  "https://www.betonjayareadymix.com/p/jasa-instalasi-sanitair-bogor.html":     "Jasa Instalasi Sanitair Bogor",
  "https://www.betonjayareadymix.com/p/jasa-instalasi-sanitair-depok.html":     "Jasa Instalasi Sanitair Depok",
  "https://www.betonjayareadymix.com/p/jasa-instalasi-sanitair-tangerang.html": "Jasa Instalasi Sanitair Tangerang",
  "https://www.betonjayareadymix.com/p/jasa-instalasi-sanitair-bekasi.html":    "Jasa Instalasi Sanitair Bekasi",

  // ─── MC: Instalasi Toren Tandon (5) ───
  "https://www.betonjayareadymix.com/p/jasa-instalasi-toren-tandon-jakarta.html":   "Jasa Instalasi Toren Tandon Jakarta",
  "https://www.betonjayareadymix.com/p/jasa-instalasi-toren-tandon-bogor.html":     "Jasa Instalasi Toren Tandon Bogor",
  "https://www.betonjayareadymix.com/p/jasa-instalasi-toren-tandon-depok.html":     "Jasa Instalasi Toren Tandon Depok",
  "https://www.betonjayareadymix.com/p/jasa-instalasi-toren-tandon-tangerang.html": "Jasa Instalasi Toren Tandon Tangerang",
  "https://www.betonjayareadymix.com/p/jasa-instalasi-toren-tandon-bekasi.html":    "Jasa Instalasi Toren Tandon Bekasi",

  // ─── MC: Perbaikan Kran Air (5) ───
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-kran-air-jakarta.html":   "Jasa Perbaikan Kran Air Jakarta",
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-kran-air-bogor.html":     "Jasa Perbaikan Kran Air Bogor",
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-kran-air-depok.html":     "Jasa Perbaikan Kran Air Depok",
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-kran-air-tangerang.html": "Jasa Perbaikan Kran Air Tangerang",
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-kran-air-bekasi.html":    "Jasa Perbaikan Kran Air Bekasi"
};

// ═════════════════════════════════════════════════════════════════════
// 📂 PARENT: Variant → Sub-variant (6) — metode/teknik deep spec
// ═════════════════════════════════════════════════════════════════════
const urlMappingJasaPlumbingFromVariantSubVariant = {

  // ─── SV under: jasa-perbaikan-pipa-bocor-dalam-dinding ───
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-pipa-bocor-tanpa-bongkar.html":        "Jasa Perbaikan Pipa Bocor Tanpa Bongkar",
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-pipa-bocor-dengan-bongkar.html":       "Jasa Perbaikan Pipa Bocor Dengan Bongkar",

  // ─── SV under: jasa-perbaikan-pipa-bocor-tanah ───
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-pipa-bocor-tanah-tanpa-gali.html":     "Jasa Perbaikan Pipa Bocor Tanah Tanpa Gali",
  "https://www.betonjayareadymix.com/p/jasa-deteksi-pipa-bocor-tanah.html":                  "Jasa Deteksi Pipa Bocor Tanah",

  // ─── SV under: jasa-instalasi-pipa-ppr ───
  "https://www.betonjayareadymix.com/p/jasa-instalasi-pipa-ppr-panas.html":                  "Jasa Instalasi Pipa PPR Panas",
  "https://www.betonjayareadymix.com/p/jasa-instalasi-pipa-ppr-dingin.html":                 "Jasa Instalasi Pipa PPR Dingin"
};

// ═══════════════════════════════════════════════════════════
// [BAGIAN 1] DEFINISI SEMUA MAPPING (TIDAK DIUBAH)
// ═══════════════════════════════════════════════════════════

const urlMappingJasaPerbaikanBangunanFromMoneyPageMoneyChild = {
  "https://www.betonjayareadymix.com/2019/07/jasa-perbaikan-bangunan-terdekat.html": "Jasa Perbaikan Bangunan Terdekat",
  "https://www.betonjayareadymix.com/2019/07/jasa-perbaikan-bangunan-jakarta.html": "Jasa Perbaikan Bangunan Jakarta",
  "https://www.betonjayareadymix.com/2019/07/jasa-perbaikan-bangunan-bogor.html": "Jasa Perbaikan Bangunan Bogor",
  "https://www.betonjayareadymix.com/2019/07/jasa-perbaikan-bangunan-depok.html": "Jasa Perbaikan Bangunan Depok",
  "https://www.betonjayareadymix.com/2019/07/jasa-perbaikan-bangunan-tangerang.html": "Jasa Perbaikan Bangunan Tangerang",
  "https://www.betonjayareadymix.com/2019/07/jasa-perbaikan-bangunan-bekasi.html": "Jasa Perbaikan Bangunan Bekasi",
  "https://www.betonjayareadymix.com/2019/07/jasa-perbaikan-bangunan-karawang.html": "Jasa Perbaikan Bangunan Karawang"
};

const urlMappingJasaPerbaikanStrukturBetonFromMoneyPage1MoneyPage2 = {
  "https://www.betonjayareadymix.com/2018/09/jasa-perbaikan-retak-struktural-beton.html": "Jasa Perbaikan Retak Struktural Beton",
  "https://www.betonjayareadymix.com/2018/09/jasa-perbaikan-beton-delaminasi.html": "Jasa Perbaikan Beton Delaminasi",
  "https://www.betonjayareadymix.com/2018/09/jasa-perbaikan-beton-mengelupas.html": "Jasa Perbaikan Beton Mengelupas",
  "https://www.betonjayareadymix.com/2018/09/jasa-perbaikan-beton-akibat-korosi.html": "Jasa Perbaikan Beton Akibat Korosi",
  "https://www.betonjayareadymix.com/2018/09/jasa-perbaikan-beton-akibat-overload.html": "Jasa Perbaikan Beton Akibat Overload",
  "https://www.betonjayareadymix.com/2018/09/jasa-perbaikan-beton-akibat-asr.html": "Jasa Perbaikan Beton Akibat ASR",
  "https://www.betonjayareadymix.com/2018/09/jasa-perbaikan-beton-serangan-sulfat.html": "Jasa Perbaikan Beton Akibat Serangan Sulfat",
  "https://www.betonjayareadymix.com/2018/09/jasa-rehabilitasi-struktur-beton-lama.html": "Jasa Rehabilitasi Struktur Beton Lama",
  "https://www.betonjayareadymix.com/2018/09/jasa-retrofit-struktur-beton-eksisting.html": "Jasa Retrofit Struktur Beton Eksisting",
  "https://www.betonjayareadymix.com/2018/09/jasa-peningkatan-kapasitas-struktur-beton.html": "Jasa Peningkatan Kapasitas Struktur Beton",
  "https://www.betonjayareadymix.com/2018/09/jasa-perpanjangan-umur-struktur-beton.html": "Jasa Perpanjangan Umur Struktur Beton",
  "https://www.betonjayareadymix.com/2018/09/jasa-perbaikan-beton-area-pesisir.html": "Jasa Perbaikan Beton Area Pesisir",
  "https://www.betonjayareadymix.com/2018/09/jasa-perbaikan-beton-area-industri.html": "Jasa Perbaikan Beton Area Industri"
};

const urlMappingJasaPerbaikanStrukturBetonFromMoneyPage1MoneyChild = {
  "https://www.betonjayareadymix.com/2018/09/jasa-perbaikan-struktur-beton-jakarta.html": "Jasa Perbaikan Struktur Beton Jakarta",
  "https://www.betonjayareadymix.com/2018/09/jasa-perbaikan-struktur-beton-bogor.html": "Jasa Perbaikan Struktur Beton Bogor",
  "https://www.betonjayareadymix.com/2018/09/jasa-perbaikan-struktur-beton-depok.html": "Jasa Perbaikan Struktur Beton Depok",
  "https://www.betonjayareadymix.com/2018/09/jasa-perbaikan-struktur-beton-tangerang.html": "Jasa Perbaikan Struktur Beton Tangerang",
  "https://www.betonjayareadymix.com/2018/09/jasa-perbaikan-struktur-beton-bekasi.html": "Jasa Perbaikan Struktur Beton Bekasi",
  "https://www.betonjayareadymix.com/2018/09/jasa-perbaikan-struktur-beton-karawang.html": "Jasa Perbaikan Struktur Beton Karawang",
  "https://www.betonjayareadymix.com/2018/09/jasa-perbaikan-struktur-beton-bandung.html": "Jasa Perbaikan Struktur Beton Bandung"
};

const urlMappingJasaPerbaikanStrukturKolomBetonFromMoneyPage2MoneyChild = {};
const urlMappingJasaPerbaikanStrukturBalokBetonFromMoneyPage2MoneyChild = {};
const urlMappingJasaPerkuatanKolomBetonFromMoneyPage2MoneyChild = {};
const urlMappingJasaPerkuatanBalokBetonFromMoneyPage2MoneyChild = {};
const urlMappingJasaJacketingKolomBalokFromMoneyPage2MoneyChild = {};
const urlMappingPerbaikanBalokGantungFromMoneyPage2MoneyChild = {};

const urlMappingPerbaikanStrukturTiangBetonFromMoneyPage2MoneyChild = {
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-struktur-tiang-beton.html": "Jasa Perbaikan Struktur Tiang Beton"
};

const urlMappingJasaPenguatanPondasiBangunanFromMoneyPage2MoneyChild = {};
const urlMappingJasaPerbaikanPondasiBangunanFromMoneyPage2MoneyChild = {};
const urlMappingJasaPerbaikanPondasiRumahFromMoneyPage2MoneyChild = {};
const urlMappingJasaInjeksiDindingRetakFromMoneyPage2MoneyChild = {};
const urlMappingJasaPerbaikanDindingRetakStrukturFromMoneyPage2MoneyChild = {};
const urlMappingJasaPerbaikanStrukturDindingRetakFromMoneyPage2MoneyChild = {};
const urlMappingJasaBobokDindingInstalasiFromMoneyPage2MoneyChild = {};
const urlMappingJasaPerbaikanStrukturDindingLembabFromMoneyPage2MoneyChild = {};
const urlMappingJasaPenggantianDindingBataFromMoneyPage2MoneyChild = {};
const urlMappingJasaPerbaikanLantaiStrukturFromMoneyPage1MoneyChild = {};
const urlMappingJasaPerbaikanStrukturLantaiBetonFromMoneyPage2MoneyChild = {};
const urlMappingJasaPerbaikanRetakanLantaiBetonFromMoneyPage2MoneyChild = {};
const urlMappingJasaPerkuatanLantaiBetonFromMoneyPage2MoneyChild = {};
const urlMappingJasaPerbaikanLantaiRusakFromMoneyPage1MoneyChild = {};
const urlMappingJasaPerbaikanLantaiAmblesFromMoneyPage1MoneyChild = {};
const urlMappingJasaGantiLantaiAmblesFromMoneyPage1MoneyChild = {};
const urlMappingJasaRenovasiLantaiBangunanFromMoneyPageMoneyChild = {};
const urlMappingJasaRenovasiLantaiRusakFromMoneyPage1MoneyChild = {};

const urlMappingJasaBobokBetonChippingFromMoneyPage2MoneyPage3 = {
  "https://www.betonjayareadymix.com/2018/06/harga-jasa-bobok-beton.html": "Harga Jasa Bobok Beton",
  "https://www.betonjayareadymix.com/2019/06/jasa-bobok-lantai-beton.html": "Jasa Bobok Lantai Beton"
};

const urlMappingHargaJasaBobokBetonFromMoneyPage3MoneyPage4 = {
  "https://www.betonjayareadymix.com/2019/06/harga-jasa-bobok-beton-per-m2.html": "Harga Jasa Bobok Beton per m2",
  "https://www.betonjayareadymix.com/2019/06/harga-jasa-bobok-beton-per-m3.html": "Harga Jasa Bobok Beton per m3",
  "https://www.betonjayareadymix.com/2019/06/harga-jasa-bobok-lantai-beton.html": "Harga Jasa Bobok Lantai Beton"
};

const urlMappingHargaJasaBobokLantaiBetonFromMoneyPage4MoneyPage5 = {
  "https://www.betonjayareadymix.com/2019/06/harga-jasa-bobok-lantai-beton-per-m2.html": "Harga Jasa Bobok Lantai Beton per M2",
  "https://www.betonjayareadymix.com/2019/06/harga-jasa-borongan-bobok-lantai-beton.html": "Harga Jasa Borongan Bobok Lantai Beton",
  "https://www.betonjayareadymix.com/2018/06/harga-upah-jasa-bobok-lantai-beton.html": "Harga Upah Jasa Bobok Lantai Beton"
};

const urlMappingJasaInjeksiBetonRetakFromMoneyPage2MoneyPage3 = {
  "https://www.betonjayareadymix.com/2018/09/borongan-injeksi-beton.html": "Borongan Injeksi Beton",
  "https://www.betonjayareadymix.com/2018/09/harga-jasa-injeksi-beton.html": "Harga Jasa Injeksi Beton"
};

const urlMappingJasaInjeksiBetonRetakFromMoneyPage2MoneyChild = {
  "https://www.betonjayareadymix.com/2018/12/jasa-injeksi-beton-depok.html": "Jasa Injeksi Beton Depok",
  "https://www.betonjayareadymix.com/2018/12/jasa-injeksi-beton-tangerang.html": "Jasa Injeksi Beton Tangerang",
  "https://www.betonjayareadymix.com/2018/12/jasa-injeksi-beton-bekasi.html": "Jasa Injeksi Beton Bekasi",
  "https://www.betonjayareadymix.com/2018/12/jasa-injeksi-beton-jakarta.html": "Jasa Injeksi Beton Jakarta",
  "https://www.betonjayareadymix.com/2018/12/jasa-injeksi-beton-bogor.html": "Jasa Injeksi Beton Bogor",
  "https://www.betonjayareadymix.com/2018/12/injeksi-beton-kuningan.html": "Injeksi Beton Kuningan",
  "https://www.betonjayareadymix.com/2018/12/injeksi-beton-ciamis.html": "Injeksi Beton Ciamis",
  "https://www.betonjayareadymix.com/2018/12/injeksi-beton-cianjur.html": "Injeksi Beton Cianjur",
  "https://www.betonjayareadymix.com/2018/12/injeksi-beton-sukabumi.html": "Injeksi Beton Sukabumi",
  "https://www.betonjayareadymix.com/2018/12/injeksi-beton-karawang.html": "Injeksi Beton Karawang",
  "https://www.betonjayareadymix.com/2018/12/injeksi-beton-sumedang.html": "Injeksi Beton Sumedang",
  "https://www.betonjayareadymix.com/2018/12/injeksi-beton-indramayu.html": "Injeksi Beton Indramayu",
  "https://www.betonjayareadymix.com/2018/12/injeksi-beton-cirebon.html": "Injeksi Beton Cirebon",
  "https://www.betonjayareadymix.com/2018/12/injeksi-beton-majalengka.html": "Injeksi Beton Majalengka",
  "https://www.betonjayareadymix.com/2018/12/injeksi-beton-garut.html": "Injeksi Beton Garut",
  "https://www.betonjayareadymix.com/2018/12/injeksi-beton-tasikmalaya.html": "Injeksi Beton Tasikmalaya",
  "https://www.betonjayareadymix.com/2018/12/injeksi-beton-bandung.html": "Injeksi Beton Bandung"
};

const urlMappingJasaPatchingBetonRetakFromMoneyPage2MoneyPage3 = {
  "https://www.betonjayareadymix.com/2018/09/jasa-tambal-beton-retak.html": "Jasa Tambal Beton Retak",
  "https://www.betonjayareadymix.com/2018/09/borongan-tambal-beton.html": "Borongan Tambal Beton"
};

const urlMappingJasaAplikasiShotcreteBetonFromMoneyPage2MoneyPage3 = {
  "https://www.betonjayareadymix.com/2018/09/borongan-semprot-beton.html": "Borongan Semprot Beton",
  "https://www.betonjayareadymix.com/2018/09/harga-jasa-shotcrete-beton..html": "Harga Jasa Shotcrete Beton",
  "https://www.betonjayareadymix.com/2018/09/harga-jasa-semprot-beton.html": "Harga Jasa Semprot Beton"
};

const urlMappingJasaGroutingStrukturBetonFromMoneyPage2MoneyPage3 = {
  "https://www.betonjayareadymix.com/2018/09/harga-jasa-grouting-beton.html": "Harga Jasa Grouting Beton"
};

const urlMappingJasaGroutingStrukturBetonFromMoneyPage2MoneyChild = {
  "https://www.betonjayareadymix.com/2018/12/grouting-beton-bekasi.html": "Grouting Beton Bekasi",
  "https://www.betonjayareadymix.com/2018/12/grouting-beton-depok.html": "Grouting Beton Depok",
  "https://www.betonjayareadymix.com/2018/12/grouting-beton-tangerang.html": "Grouting Beton Tangerang",
  "https://www.betonjayareadymix.com/2018/12/grouting-beton-jakarta.html": "Grouting Beton Jakarta",
  "https://www.betonjayareadymix.com/2018/12/grouting-beton-bogor.html": "Grouting Beton Bogor"
};

const urlMappingJasaChippingBetonBobokFromMoneyPage2MoneyPage3 = {
  "https://www.betonjayareadymix.com/2019/06/harga-jasa-chipping-beton.html": "Harga Jasa Chipping Beton",
  "https://www.betonjayareadymix.com/2019/06/harga-chipping-beton-per-m3.html": "Harga Chipping Beton Per M3",
  "https://www.betonjayareadymix.com/2019/06/harga-chipping-beton-murah.html": "Harga Chipping Beton Murah",
  "https://www.betonjayareadymix.com/2019/06/harga-chipping-beton-per-m2.html": "Harga Chipping Beton Per M2",
  "https://www.betonjayareadymix.com/2019/06/harga-pekerjaan-chipping-beton.html": "Harga Pekerjaan Chipping Beton"
};

// ═════════════════════════════════════════════════════════════════════
// 📂 PARENT: jasa-renovasi-bangunan-rumah (MP) ➔ CHILD: Money Child (8 kota)
// MC Location — Jakarta, Bogor, Depok, Tangerang, Bekasi, Jogja, Semarang, Surabaya
// ═════════════════════════════════════════════════════════════════════
const urlMappingJasaRenovasiBangunanRumahFromMoneyPageMoneyChild = {
  "https://www.betonjayareadymix.com/2019/07/harga-jasa-renovasi-rumah-jakarta.html":   "Harga Jasa Renovasi Rumah Jakarta",
  "https://www.betonjayareadymix.com/2019/07/harga-jasa-renovasi-rumah-bogor.html":     "Harga Jasa Renovasi Rumah Bogor",
  "https://www.betonjayareadymix.com/2019/07/harga-jasa-renovasi-rumah-depok.html":     "Harga Jasa Renovasi Rumah Depok",
  "https://www.betonjayareadymix.com/2019/07/harga-jasa-renovasi-rumah-tangerang.html": "Harga Jasa Renovasi Rumah Tangerang",
  "https://www.betonjayareadymix.com/2019/07/harga-jasa-renovasi-rumah-bekasi.html":    "Harga Jasa Renovasi Rumah Bekasi",
  "https://www.betonjayareadymix.com/2019/07/harga-jasa-renovasi-rumah-jogja.html":     "Harga Jasa Renovasi Rumah Jogja",
  "https://www.betonjayareadymix.com/2019/07/harga-jasa-renovasi-rumah-semarang.html":  "Harga Jasa Renovasi Rumah Semarang",
  "https://www.betonjayareadymix.com/2019/07/harga-jasa-renovasi-rumah-surabaya.html":  "Harga Jasa Renovasi Rumah Surabaya"
};


// Mapping kosong (placeholder — aman, otomatis di-skip loop)
const urlMappingJasaRenovasiRumahMinimalis = {};
const urlMappingJasaRenovasiRumahType36 = {};
const urlMappingJasaRenovasiRumahType45 = {};
const urlMappingJasaRenovasiRumah2Lantai = {};
const urlMappingJasaRenovasiPerbaikanAtapRumahPost = {};
const urlMappingJasaRenovasiDindingRumah = {};
const urlMappingJasaPerbaikanStrukturRumah = {};
const urlMappingJasaRenovasiKosmetikRumah = {};
const urlMappingJasaRenovasiRumahTumbuh = {};

// ═══════════════════════════════════════════════════════════
// [BAGIAN 2] FUNGSI HELPER
// ═══════════════════════════════════════════════════════════

var removedElementsJasaPerbaikanPost = {};

function removeCondition(conditionId) {
    if (conditionId === 'JasaKonsPerbaikanPost') {
        console.warn('[jasa-perbaikan-post] ⚠️ Tidak boleh menghapus container utama: ' + conditionId);
        return;
    }
    var el = document.getElementById(conditionId);
    if (el) {
        removedElementsJasaPerbaikanPost[conditionId] = el;
        el.remove();
        console.log('[jasa-perbaikan-post] 🔧 Removed: ' + conditionId);
    }
}

function restoreCondition(conditionId) {
    var el = removedElementsJasaPerbaikanPost[conditionId];
    if (el) {
        var container = document.getElementById('JasaKonsPerbaikanPost');
        if (container) {
            container.appendChild(el);
            delete removedElementsJasaPerbaikanPost[conditionId];
            console.log('[jasa-perbaikan-post] 🔧 Restored: ' + conditionId);
        } else {
            console.error('[jasa-perbaikan-post] ❌ Container not found for restore: ' + conditionId);
        }
    } else {
        console.warn('[jasa-perbaikan-post] ⚠️ Element ' + conditionId + ' not found in removedElements');
    }
}

// ═══════════════════════════════════════════════════════════
// [BAGIAN 3] EARLY EXIT v2.2.0 — PENDEKATAN C (NO MERGED_MAP)
// ═══════════════════════════════════════════════════════════

(function() {
    'use strict';

    var cleanUrl = window.location.href.split(/[?#]/)[0];
    console.log('[jasa-perbaikan-post] 🔍 Check: ' + cleanUrl);

    var ALL_MAPPINGS = [
        urlMappingJasaPerbaikanBangunanFromMoneyPageMoneyChild,
        urlMappingJasaPerbaikanStrukturBetonFromMoneyPage1MoneyPage2,
        urlMappingJasaPerbaikanStrukturBetonFromMoneyPage1MoneyChild,
        urlMappingJasaPerbaikanStrukturKolomBetonFromMoneyPage2MoneyChild,
        urlMappingJasaPerbaikanStrukturBalokBetonFromMoneyPage2MoneyChild,
        urlMappingJasaPerkuatanKolomBetonFromMoneyPage2MoneyChild,
        urlMappingJasaPerkuatanBalokBetonFromMoneyPage2MoneyChild,
        urlMappingJasaJacketingKolomBalokFromMoneyPage2MoneyChild,
        urlMappingPerbaikanBalokGantungFromMoneyPage2MoneyChild,
        urlMappingPerbaikanStrukturTiangBetonFromMoneyPage2MoneyChild,
        urlMappingJasaPerbaikanPondasiBangunanFromMoneyPage2MoneyChild,
        urlMappingJasaPenguatanPondasiBangunanFromMoneyPage2MoneyChild,
        urlMappingJasaPerbaikanPondasiRumahFromMoneyPage2MoneyChild,
        urlMappingJasaInjeksiDindingRetakFromMoneyPage2MoneyChild,
        urlMappingJasaPerbaikanDindingRetakStrukturFromMoneyPage2MoneyChild,
        urlMappingJasaPerbaikanStrukturDindingRetakFromMoneyPage2MoneyChild,
        urlMappingJasaBobokDindingInstalasiFromMoneyPage2MoneyChild,
        urlMappingJasaPerbaikanStrukturDindingLembabFromMoneyPage2MoneyChild,
        urlMappingJasaPenggantianDindingBataFromMoneyPage2MoneyChild,
        urlMappingJasaPerbaikanLantaiStrukturFromMoneyPage1MoneyChild,
        urlMappingJasaPerbaikanStrukturLantaiBetonFromMoneyPage2MoneyChild,
        urlMappingJasaPerbaikanRetakanLantaiBetonFromMoneyPage2MoneyChild,
        urlMappingJasaPerkuatanLantaiBetonFromMoneyPage2MoneyChild,
        urlMappingJasaPerbaikanLantaiRusakFromMoneyPage1MoneyChild,
        urlMappingJasaPerbaikanLantaiAmblesFromMoneyPage1MoneyChild,
        urlMappingJasaGantiLantaiAmblesFromMoneyPage1MoneyChild,
        urlMappingJasaRenovasiLantaiBangunanFromMoneyPageMoneyChild,
        urlMappingJasaRenovasiLantaiRusakFromMoneyPage1MoneyChild,
        urlMappingJasaInjeksiBetonRetakFromMoneyPage2MoneyPage3,
        urlMappingJasaInjeksiBetonRetakFromMoneyPage2MoneyChild,
        urlMappingJasaPatchingBetonRetakFromMoneyPage2MoneyPage3,
        urlMappingJasaAplikasiShotcreteBetonFromMoneyPage2MoneyPage3,
        urlMappingJasaGroutingStrukturBetonFromMoneyPage2MoneyPage3,
        urlMappingJasaGroutingStrukturBetonFromMoneyPage2MoneyChild,
        urlMappingJasaChippingBetonBobokFromMoneyPage2MoneyPage3,
        urlMappingJasaBobokBetonChippingFromMoneyPage2MoneyPage3,
        urlMappingHargaJasaBobokBetonFromMoneyPage3MoneyPage4,
        urlMappingHargaJasaBobokLantaiBetonFromMoneyPage4MoneyPage5,
        urlMappingJasaRenovasiBangunanRumahFromMoneyPageMoneyChild,
        urlMappingJasaRenovasiRumahMinimalis,
        urlMappingJasaRenovasiRumahType36,
        urlMappingJasaRenovasiRumahType45,
        urlMappingJasaRenovasiRumah2Lantai,
        urlMappingJasaRenovasiPerbaikanAtapRumahPost,
        urlMappingJasaRenovasiDindingRumah,
        urlMappingJasaPerbaikanStrukturRumah,
        urlMappingJasaRenovasiKosmetikRumah,
        urlMappingJasaRenovasiRumahTumbuh
    ];

    var MAPPING_NAMES = [
        'urlMappingJasaPerbaikanBangunanFromMoneyPageMoneyChild',
        'urlMappingJasaPerbaikanStrukturBetonFromMoneyPage1MoneyPage2',
        'urlMappingJasaPerbaikanStrukturBetonFromMoneyPage1MoneyChild',
        'urlMappingJasaPerbaikanStrukturKolomBetonFromMoneyPage2MoneyChild',
        'urlMappingJasaPerbaikanStrukturBalokBetonFromMoneyPage2MoneyChild',
        'urlMappingJasaPerkuatanKolomBetonFromMoneyPage2MoneyChild',
        'urlMappingJasaPerkuatanBalokBetonFromMoneyPage2MoneyChild',
        'urlMappingJasaJacketingKolomBalokFromMoneyPage2MoneyChild',
        'urlMappingPerbaikanBalokGantungFromMoneyPage2MoneyChild',
        'urlMappingPerbaikanStrukturTiangBetonFromMoneyPage2MoneyChild',
        'urlMappingJasaPerbaikanPondasiBangunanFromMoneyPage2MoneyChild',
        'urlMappingJasaPenguatanPondasiBangunanFromMoneyPage2MoneyChild',
        'urlMappingJasaPerbaikanPondasiRumahFromMoneyPage2MoneyChild',
        'urlMappingJasaInjeksiDindingRetakFromMoneyPage2MoneyChild',
        'urlMappingJasaPerbaikanDindingRetakStrukturFromMoneyPage2MoneyChild',
        'urlMappingJasaPerbaikanStrukturDindingRetakFromMoneyPage2MoneyChild',
        'urlMappingJasaBobokDindingInstalasiFromMoneyPage2MoneyChild',
        'urlMappingJasaPerbaikanStrukturDindingLembabFromMoneyPage2MoneyChild',
        'urlMappingJasaPenggantianDindingBataFromMoneyPage2MoneyChild',
        'urlMappingJasaPerbaikanLantaiStrukturFromMoneyPage1MoneyChild',
        'urlMappingJasaPerbaikanStrukturLantaiBetonFromMoneyPage2MoneyChild',
        'urlMappingJasaPerbaikanRetakanLantaiBetonFromMoneyPage2MoneyChild',
        'urlMappingJasaPerkuatanLantaiBetonFromMoneyPage2MoneyChild',
        'urlMappingJasaPerbaikanLantaiRusakFromMoneyPage1MoneyChild',
        'urlMappingJasaPerbaikanLantaiAmblesFromMoneyPage1MoneyChild',
        'urlMappingJasaGantiLantaiAmblesFromMoneyPage1MoneyChild',
        'urlMappingJasaRenovasiLantaiBangunanFromMoneyPageMoneyChild',
        'urlMappingJasaRenovasiLantaiRusakFromMoneyPage1MoneyChild',
        'urlMappingJasaInjeksiBetonRetakFromMoneyPage2MoneyPage3',
        'urlMappingJasaInjeksiBetonRetakFromMoneyPage2MoneyChild',
        'urlMappingJasaPatchingBetonRetakFromMoneyPage2MoneyPage3',
        'urlMappingJasaAplikasiShotcreteBetonFromMoneyPage2MoneyPage3',
        'urlMappingJasaGroutingStrukturBetonFromMoneyPage2MoneyPage3',
        'urlMappingJasaGroutingStrukturBetonFromMoneyPage2MoneyChild',
        'urlMappingJasaChippingBetonBobokFromMoneyPage2MoneyPage3',
        'urlMappingJasaBobokBetonChippingFromMoneyPage2MoneyPage3',
        'urlMappingHargaJasaBobokBetonFromMoneyPage3MoneyPage4',
        'urlMappingHargaJasaBobokLantaiBetonFromMoneyPage4MoneyPage5',
        'urlMappingJasaRenovasiBangunanRumahFromMoneyPageMoneyChild',
        'urlMappingJasaRenovasiRumahMinimalis',
        'urlMappingJasaRenovasiRumahType36',
        'urlMappingJasaRenovasiRumahType45',
        'urlMappingJasaRenovasiRumah2Lantai',
        'urlMappingJasaRenovasiPerbaikanAtapRumahPost',
        'urlMappingJasaRenovasiDindingRumah',
        'urlMappingJasaPerbaikanStrukturRumah',
        'urlMappingJasaRenovasiKosmetikRumah',
        'urlMappingJasaRenovasiRumahTumbuh'
    ];

    var foundIndex = -1;
    var foundMappingLabel = '';

    for (var i = 0; i < ALL_MAPPINGS.length; i++) {
        if (!ALL_MAPPINGS[i] || typeof ALL_MAPPINGS[i] !== 'object') {
            continue;
        }
        if (ALL_MAPPINGS[i][cleanUrl]) {
            foundIndex = i;
            foundMappingLabel = ALL_MAPPINGS[i][cleanUrl];
            break;  // ⚡ SHORT-CIRCUIT
        }
    }

    if (foundIndex === -1) {
        console.log('[jasa-perbaikan-post] ⏭️ SKIP — URL tidak cocok');
        window.__jasaPerbaikanPostActive = false;
        return;
    }

    window.__jasaPerbaikanPostActive = true;
    window.__jasaPerbaikanPostMatchIndex = foundIndex;
    window.__jasaPerbaikanPostMatchMapping = MAPPING_NAMES[foundIndex];
    window.__jasaPerbaikanPostMatchLabel = foundMappingLabel;
    window.__jasaPerbaikanPostMappings = ALL_MAPPINGS;

    console.log(
        '[jasa-perbaikan-post] ✅ Match di mapping #' + (foundIndex + 1) +
        ' — ' + MAPPING_NAMES[foundIndex] +
        ' — Label: "' + foundMappingLabel + '"' +
        ' — EXECUTE flag set'
    );
})();

// ═══════════════════════════════════════════════════════════
// [BAGIAN 4] FUNGSI UTAMA — Semua logic breadcrumb
// ═══════════════════════════════════════════════════════════

function initJasaPerbaikanPost() {

    // ⚡ Guard: skip kalau flag tidak aktif
    if (!window.__jasaPerbaikanPostActive) {
        console.log('[jasa-perbaikan-post] ⏭️ Execute SKIP — URL tidak cocok');
        return;
    }

    console.log('[jasa-perbaikan-post] 🚀 Execute — URL cocok');

    var cleanUrlJasaKonsPerbaikanPost = window.location.href.split(/[?#]/)[0];

    // ✅ Guard container
    var JasaKonsPerbaikanPost = document.getElementById("JasaKonsPerbaikanPost");
    if (!JasaKonsPerbaikanPost) {
        console.error('[jasa-perbaikan-post] ❌ elemen Id JasaKonsPerbaikanPost kondisi terhapus');
        return;
    }

    // ───────────────────────────────────────────────────────────
    // SUB JasaRenovasiPerbaikanStrukturTeknikBeton
    // ───────────────────────────────────────────────────────────

    if (urlMappingJasaInjeksiBetonRetakFromMoneyPage2MoneyPage3[cleanUrlJasaKonsPerbaikanPost]) {
        generateBreadcrumbShared(
            urlMappingJasaInjeksiBetonRetakFromMoneyPage2MoneyPage3,
            cleanUrlJasaKonsPerbaikanPost,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Perbaikan Bangunan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-perbaikan-bangunan.html' },
                { name: 'Perbandingan Jasa Perbaikan Bangunan', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-perbaikan-bangunan.html' },
                { name: 'Jasa Perbaikan Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-bangunan.html' },
                { name: 'Jasa Perbaikan Struktur Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-struktur-bangunan.html' },
                { name: 'Jasa Rehabilitasi Beton Struktur', url: 'https://www.betonjayareadymix.com/p/jasa-rehabilitasi-beton-struktur.html' },
                { name: 'Jasa Injeksi Beton Retak', url: 'https://www.betonjayareadymix.com/p/jasa-injeksi-beton-retak.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }

    if (urlMappingJasaInjeksiBetonRetakFromMoneyPage2MoneyChild[cleanUrlJasaKonsPerbaikanPost]) {
        generateBreadcrumbShared(
            urlMappingJasaInjeksiBetonRetakFromMoneyPage2MoneyChild,
            cleanUrlJasaKonsPerbaikanPost,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Perbaikan Bangunan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-perbaikan-bangunan.html' },
                { name: 'Perbandingan Jasa Perbaikan Bangunan', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-perbaikan-bangunan.html' },
                { name: 'Jasa Perbaikan Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-bangunan.html' },
                { name: 'Jasa Perbaikan Struktur Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-struktur-bangunan.html' },
                { name: 'Jasa Rehabilitasi Beton Struktur', url: 'https://www.betonjayareadymix.com/p/jasa-rehabilitasi-beton-struktur.html' },
                { name: 'Jasa Injeksi Beton Retak', url: 'https://www.betonjayareadymix.com/p/jasa-injeksi-beton-retak.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }

    if (urlMappingJasaPatchingBetonRetakFromMoneyPage2MoneyPage3[cleanUrlJasaKonsPerbaikanPost]) {
        generateBreadcrumbShared(
            urlMappingJasaPatchingBetonRetakFromMoneyPage2MoneyPage3,
            cleanUrlJasaKonsPerbaikanPost,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Perbaikan Bangunan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-perbaikan-bangunan.html' },
                { name: 'Perbandingan Jasa Perbaikan Bangunan', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-perbaikan-bangunan.html' },
                { name: 'Jasa Perbaikan Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-bangunan.html' },
                { name: 'Jasa Perbaikan Struktur Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-struktur-bangunan.html' },
                { name: 'Jasa Rehabilitasi Beton Struktur', url: 'https://www.betonjayareadymix.com/p/jasa-rehabilitasi-beton-struktur.html' },
                { name: 'Jasa Patching Beton Retak', url: 'https://www.betonjayareadymix.com/p/jasa-patching-beton-retak.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }

    if (urlMappingJasaAplikasiShotcreteBetonFromMoneyPage2MoneyPage3[cleanUrlJasaKonsPerbaikanPost]) {
        generateBreadcrumbShared(
            urlMappingJasaAplikasiShotcreteBetonFromMoneyPage2MoneyPage3,
            cleanUrlJasaKonsPerbaikanPost,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Perbaikan Bangunan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-perbaikan-bangunan.html' },
                { name: 'Perbandingan Jasa Perbaikan Bangunan', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-perbaikan-bangunan.html' },
                { name: 'Jasa Perbaikan Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-bangunan.html' },
                { name: 'Jasa Perbaikan Struktur Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-struktur-bangunan.html' },
                { name: 'Jasa Rehabilitasi Beton Struktur', url: 'https://www.betonjayareadymix.com/p/jasa-rehabilitasi-beton-struktur.html' },
                { name: 'Jasa Aplikasi Shotcrete Beton', url: 'https://www.betonjayareadymix.com/p/jasa-aplikasi-shotcrete-beton.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }

    if (urlMappingJasaGroutingStrukturBetonFromMoneyPage2MoneyPage3[cleanUrlJasaKonsPerbaikanPost]) {
        generateBreadcrumbShared(
            urlMappingJasaGroutingStrukturBetonFromMoneyPage2MoneyPage3,
            cleanUrlJasaKonsPerbaikanPost,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Perbaikan Bangunan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-perbaikan-bangunan.html' },
                { name: 'Perbandingan Jasa Perbaikan Bangunan', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-perbaikan-bangunan.html' },
                { name: 'Jasa Perbaikan Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-bangunan.html' },
                { name: 'Jasa Perbaikan Struktur Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-struktur-bangunan.html' },
                { name: 'Jasa Rehabilitasi Beton Struktur', url: 'https://www.betonjayareadymix.com/p/jasa-rehabilitasi-beton-struktur.html' },
                { name: 'Jasa Grouting Struktur Beton', url: 'https://www.betonjayareadymix.com/p/jasa-grouting-struktur-beton.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }

    if (urlMappingJasaGroutingStrukturBetonFromMoneyPage2MoneyChild[cleanUrlJasaKonsPerbaikanPost]) {
        generateBreadcrumbShared(
            urlMappingJasaGroutingStrukturBetonFromMoneyPage2MoneyChild,
            cleanUrlJasaKonsPerbaikanPost,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Perbaikan Bangunan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-perbaikan-bangunan.html' },
                { name: 'Perbandingan Jasa Perbaikan Bangunan', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-perbaikan-bangunan.html' },
                { name: 'Jasa Perbaikan Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-bangunan.html' },
                { name: 'Jasa Perbaikan Struktur Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-struktur-bangunan.html' },
                { name: 'Jasa Rehabilitasi Beton Struktur', url: 'https://www.betonjayareadymix.com/p/jasa-rehabilitasi-beton-struktur.html' },
                { name: 'Jasa Grouting Struktur Beton', url: 'https://www.betonjayareadymix.com/p/jasa-grouting-struktur-beton.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }

    if (urlMappingJasaChippingBetonBobokFromMoneyPage2MoneyPage3[cleanUrlJasaKonsPerbaikanPost]) {
        generateBreadcrumbShared(
            urlMappingJasaChippingBetonBobokFromMoneyPage2MoneyPage3,
            cleanUrlJasaKonsPerbaikanPost,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Perbaikan Bangunan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-perbaikan-bangunan.html' },
                { name: 'Perbandingan Jasa Perbaikan Bangunan', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-perbaikan-bangunan.html' },
                { name: 'Jasa Perbaikan Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-bangunan.html' },
                { name: 'Jasa Perbaikan Struktur Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-struktur-bangunan.html' },
                { name: 'Jasa Rehabilitasi Beton Struktur', url: 'https://www.betonjayareadymix.com/p/jasa-rehabilitasi-beton-struktur.html' },
                { name: 'Jasa Chipping Beton Bobok', url: 'https://www.betonjayareadymix.com/p/jasa-chipping-beton-bobok.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }

    if (urlMappingJasaBobokBetonChippingFromMoneyPage2MoneyPage3[cleanUrlJasaKonsPerbaikanPost]) {
        generateBreadcrumbShared(
            urlMappingJasaBobokBetonChippingFromMoneyPage2MoneyPage3,
            cleanUrlJasaKonsPerbaikanPost,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Perbaikan Bangunan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-perbaikan-bangunan.html' },
                { name: 'Perbandingan Jasa Perbaikan Bangunan', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-perbaikan-bangunan.html' },
                { name: 'Jasa Perbaikan Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-bangunan.html' },
                { name: 'Jasa Perbaikan Struktur Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-struktur-bangunan.html' },
                { name: 'Jasa Rehabilitasi Beton Struktur', url: 'https://www.betonjayareadymix.com/p/jasa-rehabilitasi-beton-struktur.html' },
                { name: 'Jasa Bobok Beton Chipping', url: 'https://www.betonjayareadymix.com/p/jasa-bobok-beton-chipping.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }

    if (urlMappingHargaJasaBobokBetonFromMoneyPage3MoneyPage4[cleanUrlJasaKonsPerbaikanPost]) {
        generateBreadcrumbShared(
            urlMappingHargaJasaBobokBetonFromMoneyPage3MoneyPage4,
            cleanUrlJasaKonsPerbaikanPost,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Perbaikan Bangunan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-perbaikan-bangunan.html' },
                { name: 'Perbandingan Jasa Perbaikan Bangunan', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-perbaikan-bangunan.html' },
                { name: 'Jasa Perbaikan Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-bangunan.html' },
                { name: 'Jasa Perbaikan Struktur Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-struktur-bangunan.html' },
                { name: 'Jasa Rehabilitasi Beton Struktur', url: 'https://www.betonjayareadymix.com/p/jasa-rehabilitasi-beton-struktur.html' },
                { name: 'Jasa Bobok Beton Chipping', url: 'https://www.betonjayareadymix.com/p/jasa-bobok-beton-chipping.html' },
                { name: 'Harga Jasa Bobok Beton', url: 'https://www.betonjayareadymix.com/2018/06/harga-jasa-bobok-beton.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }

    if (urlMappingHargaJasaBobokLantaiBetonFromMoneyPage4MoneyPage5[cleanUrlJasaKonsPerbaikanPost]) {
        generateBreadcrumbShared(
            urlMappingHargaJasaBobokLantaiBetonFromMoneyPage4MoneyPage5,
            cleanUrlJasaKonsPerbaikanPost,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Perbaikan Bangunan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-perbaikan-bangunan.html' },
                { name: 'Perbandingan Jasa Perbaikan Bangunan', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-perbaikan-bangunan.html' },
                { name: 'Jasa Perbaikan Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-bangunan.html' },
                { name: 'Jasa Perbaikan Struktur Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-struktur-bangunan.html' },
                { name: 'Jasa Rehabilitasi Beton Struktur', url: 'https://www.betonjayareadymix.com/p/jasa-rehabilitasi-beton-struktur.html' },
                { name: 'Jasa Bobok Beton Chipping', url: 'https://www.betonjayareadymix.com/p/jasa-bobok-beton-chipping.html' },
                { name: 'Harga Jasa Bobok Beton', url: 'https://www.betonjayareadymix.com/2018/06/harga-jasa-bobok-beton.html' },
                { name: 'Harga Jasa Bobok Lantai Beton', url: 'https://www.betonjayareadymix.com/2019/06/harga-jasa-bobok-lantai-beton.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }

    // ───────────────────────────────────────────────────────────
    // SUB JasaPerbaikanBangunan
    // ───────────────────────────────────────────────────────────

    if (urlMappingJasaPerbaikanBangunanFromMoneyPageMoneyChild[cleanUrlJasaKonsPerbaikanPost]) {
        generateBreadcrumbShared(
            urlMappingJasaPerbaikanBangunanFromMoneyPageMoneyChild,
            cleanUrlJasaKonsPerbaikanPost,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Perbaikan Bangunan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-perbaikan-bangunan.html' },
                { name: 'Perbandingan Jasa Perbaikan Bangunan', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-perbaikan-bangunan.html' },
                { name: 'Jasa Perbaikan Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-bangunan.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }

    // ───────────────────────────────────────────────────────────
    // SUB JasaRenovasiPerbaikanStrukturUmum
    // ───────────────────────────────────────────────────────────

    if (urlMappingJasaPerbaikanStrukturBetonFromMoneyPage1MoneyPage2[cleanUrlJasaKonsPerbaikanPost]) {
        generateBreadcrumbShared(
            urlMappingJasaPerbaikanStrukturBetonFromMoneyPage1MoneyPage2,
            cleanUrlJasaKonsPerbaikanPost,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Perbaikan Bangunan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-perbaikan-bangunan.html' },
                { name: 'Perbandingan Jasa Perbaikan Bangunan', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-perbaikan-bangunan.html' },
                { name: 'Jasa Perbaikan Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-bangunan.html' },
                { name: 'Jasa Perbaikan Struktur Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-struktur-bangunan.html' },
                { name: 'Jasa Perbaikan Struktur Beton', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-struktur-beton.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }

    if (urlMappingJasaPerbaikanStrukturBetonFromMoneyPage1MoneyChild[cleanUrlJasaKonsPerbaikanPost]) {
        generateBreadcrumbShared(
            urlMappingJasaPerbaikanStrukturBetonFromMoneyPage1MoneyChild,
            cleanUrlJasaKonsPerbaikanPost,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Perbaikan Bangunan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-perbaikan-bangunan.html' },
                { name: 'Perbandingan Jasa Perbaikan Bangunan', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-perbaikan-bangunan.html' },
                { name: 'Jasa Perbaikan Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-bangunan.html' },
                { name: 'Jasa Perbaikan Struktur Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-struktur-bangunan.html' },
                { name: 'Jasa Perbaikan Struktur Beton', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-struktur-beton.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }

    if (urlMappingJasaPerbaikanStrukturKolomBetonFromMoneyPage2MoneyChild[cleanUrlJasaKonsPerbaikanPost]) {
        generateBreadcrumbShared(
            urlMappingJasaPerbaikanStrukturKolomBetonFromMoneyPage2MoneyChild,
            cleanUrlJasaKonsPerbaikanPost,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Perbaikan Bangunan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-perbaikan-bangunan.html' },
                { name: 'Perbandingan Jasa Perbaikan Bangunan', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-perbaikan-bangunan.html' },
                { name: 'Jasa Perbaikan Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-bangunan.html' },
                { name: 'Jasa Perbaikan Struktur Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-struktur-bangunan.html' },
                { name: 'Jasa Perbaikan Struktur Kolom Balok', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-struktur-kolom-balok.html' },
                { name: 'Jasa Perbaikan Struktur Kolom Beton', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-struktur-kolom-beton.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }

    if (urlMappingJasaPerbaikanStrukturBalokBetonFromMoneyPage2MoneyChild[cleanUrlJasaKonsPerbaikanPost]) {
        generateBreadcrumbShared(
            urlMappingJasaPerbaikanStrukturBalokBetonFromMoneyPage2MoneyChild,
            cleanUrlJasaKonsPerbaikanPost,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Perbaikan Bangunan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-perbaikan-bangunan.html' },
                { name: 'Perbandingan Jasa Perbaikan Bangunan', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-perbaikan-bangunan.html' },
                { name: 'Jasa Perbaikan Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-bangunan.html' },
                { name: 'Jasa Perbaikan Struktur Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-struktur-bangunan.html' },
                { name: 'Jasa Perbaikan Struktur Kolom Balok', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-struktur-kolom-balok.html' },
                { name: 'Jasa Perbaikan Struktur Balok Beton', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-struktur-balok-beton.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }

    if (urlMappingJasaPerkuatanKolomBetonFromMoneyPage2MoneyChild[cleanUrlJasaKonsPerbaikanPost]) {
        generateBreadcrumbShared(
            urlMappingJasaPerkuatanKolomBetonFromMoneyPage2MoneyChild,
            cleanUrlJasaKonsPerbaikanPost,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Perbaikan Bangunan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-perbaikan-bangunan.html' },
                { name: 'Perbandingan Jasa Perbaikan Bangunan', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-perbaikan-bangunan.html' },
                { name: 'Jasa Perbaikan Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-bangunan.html' },
                { name: 'Jasa Perbaikan Struktur Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-struktur-bangunan.html' },
                { name: 'Jasa Perbaikan Struktur Kolom Balok', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-struktur-kolom-balok.html' },
                { name: 'Jasa Perkuatan Kolom Beton', url: 'https://www.betonjayareadymix.com/p/jasa-perkuatan-kolom-beton.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }

    if (urlMappingJasaPerkuatanBalokBetonFromMoneyPage2MoneyChild[cleanUrlJasaKonsPerbaikanPost]) {
        generateBreadcrumbShared(
            urlMappingJasaPerkuatanBalokBetonFromMoneyPage2MoneyChild,
            cleanUrlJasaKonsPerbaikanPost,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Perbaikan Bangunan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-perbaikan-bangunan.html' },
                { name: 'Perbandingan Jasa Perbaikan Bangunan', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-perbaikan-bangunan.html' },
                { name: 'Jasa Perbaikan Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-bangunan.html' },
                { name: 'Jasa Perbaikan Struktur Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-struktur-bangunan.html' },
                { name: 'Jasa Perbaikan Struktur Kolom Balok', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-struktur-kolom-balok.html' },
                { name: 'Jasa Perkuatan Balok Beton', url: 'https://www.betonjayareadymix.com/p/jasa-perkuatan-balok-beton.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }

    if (urlMappingJasaJacketingKolomBalokFromMoneyPage2MoneyChild[cleanUrlJasaKonsPerbaikanPost]) {
        generateBreadcrumbShared(
            urlMappingJasaJacketingKolomBalokFromMoneyPage2MoneyChild,
            cleanUrlJasaKonsPerbaikanPost,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Perbaikan Bangunan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-perbaikan-bangunan.html' },
                { name: 'Perbandingan Jasa Perbaikan Bangunan', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-perbaikan-bangunan.html' },
                { name: 'Jasa Perbaikan Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-bangunan.html' },
                { name: 'Jasa Perbaikan Struktur Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-struktur-bangunan.html' },
                { name: 'Jasa Perbaikan Struktur Kolom Balok', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-struktur-kolom-balok.html' },
                { name: 'Jasa Jacketing Kolom Balok', url: 'https://www.betonjayareadymix.com/p/jasa-jacketing-kolom-balok.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }

    if (urlMappingPerbaikanBalokGantungFromMoneyPage2MoneyChild[cleanUrlJasaKonsPerbaikanPost]) {
        generateBreadcrumbShared(
            urlMappingPerbaikanBalokGantungFromMoneyPage2MoneyChild,
            cleanUrlJasaKonsPerbaikanPost,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Perbaikan Bangunan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-perbaikan-bangunan.html' },
                { name: 'Perbandingan Jasa Perbaikan Bangunan', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-perbaikan-bangunan.html' },
                { name: 'Jasa Perbaikan Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-bangunan.html' },
                { name: 'Jasa Perbaikan Struktur Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-struktur-bangunan.html' },
                { name: 'Jasa Perbaikan Struktur Kolom Balok', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-struktur-kolom-balok.html' },
                { name: 'Jasa Perbaikan Balok Gantung', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-balok-gantung.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }

    if (urlMappingPerbaikanStrukturTiangBetonFromMoneyPage2MoneyChild[cleanUrlJasaKonsPerbaikanPost]) {
        generateBreadcrumbShared(
            urlMappingPerbaikanStrukturTiangBetonFromMoneyPage2MoneyChild,
            cleanUrlJasaKonsPerbaikanPost,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Perbaikan Bangunan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-perbaikan-bangunan.html' },
                { name: 'Perbandingan Jasa Perbaikan Bangunan', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-perbaikan-bangunan.html' },
                { name: 'Jasa Perbaikan Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-bangunan.html' },
                { name: 'Jasa Perbaikan Struktur Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-struktur-bangunan.html' },
                { name: 'Jasa Perbaikan Struktur Kolom Balok', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-struktur-kolom-balok.html' },
                { name: 'Jasa Perbaikan Struktur Tiang Beton', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-struktur-tiang-beton.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }

    // ───────────────────────────────────────────────────────────
    // SUB PerbaikanStrukturPondasi
    // ───────────────────────────────────────────────────────────

    if (urlMappingJasaPenguatanPondasiBangunanFromMoneyPage2MoneyChild[cleanUrlJasaKonsPerbaikanPost]) {
        generateBreadcrumbShared(
            urlMappingJasaPenguatanPondasiBangunanFromMoneyPage2MoneyChild,
            cleanUrlJasaKonsPerbaikanPost,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Perbaikan Bangunan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-perbaikan-bangunan.html' },
                { name: 'Perbandingan Jasa Perbaikan Bangunan', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-perbaikan-bangunan.html' },
                { name: 'Jasa Perbaikan Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-bangunan.html' },
                { name: 'Jasa Perbaikan Struktur Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-struktur-bangunan.html' },
                { name: 'Jasa Perbaikan Pondasi Struktur', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-pondasi-struktur.html' },
                { name: 'Jasa Penguatan Pondasi Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-penguatan-pondasi-bangunan.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }

    if (urlMappingJasaPerbaikanPondasiBangunanFromMoneyPage2MoneyChild[cleanUrlJasaKonsPerbaikanPost]) {
        generateBreadcrumbShared(
            urlMappingJasaPerbaikanPondasiBangunanFromMoneyPage2MoneyChild,
            cleanUrlJasaKonsPerbaikanPost,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Perbaikan Bangunan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-perbaikan-bangunan.html' },
                { name: 'Perbandingan Jasa Perbaikan Bangunan', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-perbaikan-bangunan.html' },
                { name: 'Jasa Perbaikan Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-bangunan.html' },
                { name: 'Jasa Perbaikan Struktur Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-struktur-bangunan.html' },
                { name: 'Jasa Perbaikan Pondasi Struktur', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-pondasi-struktur.html' },
                { name: 'Jasa Perbaikan Pondasi Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-pondasi-bangunan.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }

    if (urlMappingJasaPerbaikanPondasiRumahFromMoneyPage2MoneyChild[cleanUrlJasaKonsPerbaikanPost]) {
        generateBreadcrumbShared(
            urlMappingJasaPerbaikanPondasiRumahFromMoneyPage2MoneyChild,
            cleanUrlJasaKonsPerbaikanPost,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Perbaikan Bangunan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-perbaikan-bangunan.html' },
                { name: 'Perbandingan Jasa Perbaikan Bangunan', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-perbaikan-bangunan.html' },
                { name: 'Jasa Perbaikan Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-bangunan.html' },
                { name: 'Jasa Perbaikan Struktur Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-struktur-bangunan.html' },
                { name: 'Jasa Perbaikan Pondasi Struktur', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-pondasi-struktur.html' },
                { name: 'Jasa Perbaikan Pondasi Rumah', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-pondasi-rumah.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }

    // ───────────────────────────────────────────────────────────
    // SUB PerbaikanStrukturDinding
    // ───────────────────────────────────────────────────────────

    if (urlMappingJasaInjeksiDindingRetakFromMoneyPage2MoneyChild[cleanUrlJasaKonsPerbaikanPost]) {
        generateBreadcrumbShared(
            urlMappingJasaInjeksiDindingRetakFromMoneyPage2MoneyChild,
            cleanUrlJasaKonsPerbaikanPost,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Perbaikan Bangunan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-perbaikan-bangunan.html' },
                { name: 'Perbandingan Jasa Perbaikan Bangunan', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-perbaikan-bangunan.html' },
                { name: 'Jasa Perbaikan Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-bangunan.html' },
                { name: 'Jasa Perbaikan Struktur Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-struktur-bangunan.html' },
                { name: 'Jasa Perbaikan Struktur Dinding', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-struktur-dinding.html' },
                { name: 'Jasa Injeksi Dinding Retak', url: 'https://www.betonjayareadymix.com/p/jasa-injeksi-dinding-retak.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }

    if (urlMappingJasaPerbaikanDindingRetakStrukturFromMoneyPage2MoneyChild[cleanUrlJasaKonsPerbaikanPost]) {
        generateBreadcrumbShared(
            urlMappingJasaPerbaikanDindingRetakStrukturFromMoneyPage2MoneyChild,
            cleanUrlJasaKonsPerbaikanPost,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Perbaikan Bangunan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-perbaikan-bangunan.html' },
                { name: 'Perbandingan Jasa Perbaikan Bangunan', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-perbaikan-bangunan.html' },
                { name: 'Jasa Perbaikan Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-bangunan.html' },
                { name: 'Jasa Perbaikan Struktur Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-struktur-bangunan.html' },
                { name: 'Jasa Perbaikan Struktur Dinding', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-struktur-dinding.html' },
                { name: 'Jasa Perbaikan Dinding Retak Struktur', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-dinding-retak-struktur.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }

    if (urlMappingJasaPerbaikanStrukturDindingRetakFromMoneyPage2MoneyChild[cleanUrlJasaKonsPerbaikanPost]) {
        generateBreadcrumbShared(
            urlMappingJasaPerbaikanStrukturDindingRetakFromMoneyPage2MoneyChild,
            cleanUrlJasaKonsPerbaikanPost,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Perbaikan Bangunan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-perbaikan-bangunan.html' },
                { name: 'Perbandingan Jasa Perbaikan Bangunan', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-perbaikan-bangunan.html' },
                { name: 'Jasa Perbaikan Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-bangunan.html' },
                { name: 'Jasa Perbaikan Struktur Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-struktur-bangunan.html' },
                { name: 'Jasa Perbaikan Struktur Dinding', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-struktur-dinding.html' },
                { name: 'Jasa Perbaikan Struktur Dinding Retak', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-struktur-dinding-retak.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }

    // ───────────────────────────────────────────────────────────
    // SUB JasaRenovasiPerbaikanBangunanRumahPost
    // ───────────────────────────────────────────────────────────
    if (urlMappingJasaRenovasiBangunanRumahFromMoneyPageMoneyChild[cleanUrlJasaKonsPerbaikanPost]) {
        generateBreadcrumbShared(
            urlMappingJasaRenovasiBangunanRumahFromMoneyPageMoneyChild,
            cleanUrlJasaKonsPerbaikanPost,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Renovasi', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-renovasi.html' },
                { name: 'Perbandingan Jasa Renovasi', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-renovasi.html' },
                { name: 'Jasa Renovasi', url: 'https://www.betonjayareadymix.com/p/jasa-renovasi.html' },
                { name: 'Jasa Renovasi Bangunan Rumah', url: 'https://www.betonjayareadymix.com/p/jasa-renovasi-bangunan-rumah.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }

    // Mapping kosong — otomatis skip, tapi tetap ditulis untuk konsistensi
    // if (urlMappingJasaRenovasiRumahMinimalis[cleanUrlJasaKonsPerbaikanPost]) { /* ... */ }
    // if (urlMappingJasaRenovasiRumahType36[cleanUrlJasaKonsPerbaikanPost]) { /* ... */ }
    // if (urlMappingJasaRenovasiRumahType45[cleanUrlJasaKonsPerbaikanPost]) { /* ... */ }

    console.log('[jasa-perbaikan-post] ✅ Semua breadcrumb selesai diproses');
}

// ═══════════════════════════════════════════════════════════
// [BAGIAN 5] FIX v2.1.0 — Handle DOMContentLoaded race condition
// ═══════════════════════════════════════════════════════════

if (document.readyState === 'loading') {
    console.log('[jasa-perbaikan-post] ⏳ DOM loading, tunggu event');
    document.addEventListener('DOMContentLoaded', initJasaPerbaikanPost);
} else {
    console.log('[jasa-perbaikan-post] ⚡ DOM ready, langsung execute');
    initJasaPerbaikanPost();
}
