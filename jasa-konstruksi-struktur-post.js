// ============================================================
// JASA KONSTRUKSI STRUKTUR — POST
// v2.2.0 — Early Exit v2.0.0 + Fix v2.1.0 + Pendekatan C
// ============================================================

console.log('[jasa-konstruksi-struktur-post] 📄 File loaded, waiting for DOM...');

// ═══════════════════════════════════════════════════════════
// [BAGIAN 1] DEFINISI SEMUA MAPPING
// ═══════════════════════════════════════════════════════════

/*
const urlMappingStrukturBajaRangka = {
"https://www.betonjayareadymix.com/p/jasa-rangka-atap-baja-ringan.html": "Jasa Rangka Atap Baja Ringan",
  "https://www.betonjayareadymix.com/p/jasa-konstruksi-baja-konvensional.html": "Jasa Konstruksi Baja Konvensional",
  "https://www.betonjayareadymix.com/p/jasa-kanopi-baja-dan-besi.html": "Jasa Kanopi Baja dan Besi",
  "https://www.betonjayareadymix.com/p/jasa-struktur-baja-gudang.html": "Jasa Struktur Baja Gudang"
};
*/

// ============================================================
// JASA KONSTRUKSI BANGUNAN (MONEY_CHILD)
// ============================================================

const urlMappingJasaKonstruksiBangunanFromMoneyMasterMoneyChild = {
  "https://www.betonjayareadymix.com/2018/09/jasa-konstruksi-bangunan-terdekat.html": "Jasa Konstruksi Bangunan Terdekat",
  "https://www.betonjayareadymix.com/2018/09/jasa-konstruksi-bangunan-jakarta.html": "Jasa Konstruksi Bangunan Jakarta",
  "https://www.betonjayareadymix.com/2018/09/jasa-konstruksi-bangunan-bogor.html": "Jasa Konstruksi Bangunan Bogor",
  "https://www.betonjayareadymix.com/2018/09/jasa-konstruksi-bangunan-depok.html": "Jasa Konstruksi Bangunan Depok",
  "https://www.betonjayareadymix.com/2018/09/jasa-konstruksi-bangunan-tangerang.html": "Jasa Konstruksi Bangunan Tangerang",
  "https://www.betonjayareadymix.com/2018/09/jasa-konstruksi-bangunan-bekasi.html": "Jasa Konstruksi Bangunan Bekasi",
  "https://www.betonjayareadymix.com/2018/09/jasa-konstruksi-bangunan-karawang.html": "Jasa Konstruksi Bangunan Karawang"
};

// ============================================================
// JASA KONSTRUKSI BAJA RINGAN
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
  "https://www.betonjayareadymix.com/2018/09/harga-jasa-pasang-atap-baja-ringan.html": "Harga Jasa Pasang Atap Baja Ringan",
  "https://www.betonjayareadymix.com/2018/09/jasa-pasang-baja-ringan-terdekat.html": "Jasa Pasang Baja Ringan Terdekat"
};

const urlMappingJasaPasangKanopiBajaRinganFromMoneyPage3MoneyPage4 = {
  "https://www.betonjayareadymix.com/2018/09/harga-jasa-pasang-kanopi-baja-ringan.html": "Harga Jasa Pasang Kanopi Baja Ringan",
  "https://www.betonjayareadymix.com/2018/09/jasa-pasang-kanopi-baja-ringan-terdekat.html": "Jasa Pasang Kanopi Baja Ringan Terdekat"
};

const urlMappingHargaJasaPasangBajaRinganFromMoneyPage3MoneyPage4 = {
  "https://www.betonjayareadymix.com/2019/05/harga-jasa-pasang-baja-ringan-per-meter.html": "Harga Jasa Pasang Baja Ringan Per Meter",
  "https://www.betonjayareadymix.com/2019/04/harga-jasa-borongan-baja-ringan.html": "Harga Jasa Borongan Baja Ringan"
};

const urlMappingHargaJasaBoronganBajaRinganFromMoneyPage4MoneyPage5 = {
  "https://www.betonjayareadymix.com/2019/05/harga-jasa-borongan-rangka-atap-baja-ringan.html": "Harga Jasa Borongan Rangka Atap Baja Ringan",
  "https://www.betonjayareadymix.com/2019/05/harga-jasa-borongan-tenaga-pasang-baja-ringan.html": "Harga Jasa Borongan Tenaga Pasang Baja Ringan",
  "https://www.betonjayareadymix.com/2019/04/harga-jasa-borongan-baja-ringan-plus-material.html": "Harga Jasa Borongan Baja Ringan Plus Material"
};

const urlMappingHargaJasaBoronganBajaRinganPlusMaterialFromMoneyPage5MoneyChild = {
  "https://www.betonjayareadymix.com/2019/05/harga-jasa-borongan-baja-ringan-plus-material-bandung.html": "Harga Jasa Borongan Baja Ringan Plus Material Bandung",
  "https://www.betonjayareadymix.com/2019/05/harga-jasa-borongan-baja-ringan-plus-material-karawang.html": "Harga Jasa Borongan Baja Ringan Plus Material Karawang",
  "https://www.betonjayareadymix.com/2019/05/harga-jasa-borongan-baja-ringan-plus-material-tangerang.html": "Harga Jasa Borongan Baja Ringan Plus Material Tangerang",
  "https://www.betonjayareadymix.com/2019/05/harga-jasa-borongan-baja-ringan-plus-material-bogor.html": "Harga Jasa Borongan Baja Ringan Plus Material Bogor",
  "https://www.betonjayareadymix.com/2019/05/harga-jasa-borongan-baja-ringan-plus-material-jakarta.html": "Harga Jasa Borongan Baja Ringan Plus Material Jakarta",
  "https://www.betonjayareadymix.com/2019/05/harga-jasa-borongan-baja-ringan-plus-material-depok.html": "Harga Jasa Borongan Baja Ringan Plus Material Depok",
  "https://www.betonjayareadymix.com/2019/05/harga-jasa-borongan-baja-ringan-plus-material-bekasi.html": "Harga Jasa Borongan Baja Ringan Plus Material Bekasi"
};

const urlMappingJasaTukangBajaRinganFromMoneyPage3MoneyPage4 = {
  "https://www.betonjayareadymix.com/2018/09/jasa-tukang-baja-ringan-murah.html": "Jasa Tukang Baja Ringan Murah",
  "https://www.betonjayareadymix.com/2018/09/jasa-tukang-baja-ringan-terdekat.html": "Jasa Tukang Baja Ringan Terdekat"
};

// ============================================================
// JASA KONSTRUKSI BAJA KONVENSIONAL
// ============================================================

const urlMappingJasaKonstruksiBajaKonvensionalFromMoneyPage1MoneyPage2 = {
  "https://www.betonjayareadymix.com/2018/09/harga-jasa-konstruksi-baja-konvensional.html": "Harga Jasa Konstruksi Baja Konvensional",
  "https://www.betonjayareadymix.com/2018/09/jasa-konstruksi-baja-gudang.html": "Jasa Konstruksi Baja Gudang",
  "https://www.betonjayareadymix.com/2018/09/jasa-konstruksi-baja-pabrik.html": "Jasa Konstruksi Baja Pabrik",
  "https://www.betonjayareadymix.com/2018/09/jasa-konstruksi-baja-ruko.html": "Jasa Konstruksi Baja Ruko",
  "https://www.betonjayareadymix.com/2018/09/jasa-konstruksi-baja-rumah.html": "Jasa Konstruksi Baja Rumah",
  "https://www.betonjayareadymix.com/2018/09/jasa-konstruksi-baja-gedung.html": "Jasa Konstruksi Baja Gedung",
  "https://www.betonjayareadymix.com/2018/09/jasa-pembangunan-tower-baja.html": "Jasa Pembangunan Tower Baja"
};

const urlMappingHargaJasaKonstruksiBajaKonvensionalFromMoneyPage2MoneyPage3 = {
  "https://www.betonjayareadymix.com/2018/09/harga-jasa-konstruksi-besi-wf.html": "Harga Jasa Konstruksi Besi WF",
  "https://www.betonjayareadymix.com/2018/09/harga-jasa-konstruksi-baja-wf.html": "Harga Jasa Konstruksi Baja WF",
  "https://www.betonjayareadymix.com/2018/09/harga-konstruksi-baja-wf-per-m2.html": "Harga Konstruksi Baja WF Per M2",
  "https://www.betonjayareadymix.com/2018/09/harga-jasa-konstruksi-rumah-baja": "Harga Jasa Konstruksi Rumah Baja",
  "https://www.betonjayareadymix.com/2018/09/harga-borongan-jasa-konstruksi-besi.html": "Harga Borongan Jasa Konstruksi Besi",
  "https://www.betonjayareadymix.com/2018/09/harga-borongan-konstruksi-besi.html": "Harga Borongan Konstruksi Besi",
  "https://www.betonjayareadymix.com/2018/09/harga-borongan-konstruksi-baja-wf.html": "Harga Borongan Konstruksi Baja WF",
  "https://www.betonjayareadymix.com/2018/09/harga-borongan-konstruksi-baja-per-meter.html": "Harga Borongan Konstruksi Baja Per Meter"
};

const urlMappingJasaPembangunanTowerBajaFromMoneyPage2MoneyPage3 = {
  "https://www.betonjayareadymix.com/2018/09/harga-jasa-pembangunan-tower-baja.html": "Harga Jasa Pembangunan Tower Baja",
  "https://www.betonjayareadymix.com/2018/09/jasa-pemasangan-tower-bts.html": "Jasa Pemasangan Tower BTS",
  "https://www.betonjayareadymix.com/2018/09/jasa-pemasangan-tower-triangle.html": "Jasa Pemasangan Tower Triangle"
};

const urlMappingHargaJasaPembangunanTowerBajaFromMoneyPage3MoneyPage4 = {
  "https://www.betonjayareadymix.com/2018/09/harga-jasa-pasang-tower.html": "Harga Jasa Pasang Tower",
  "https://www.betonjayareadymix.com/2018/09/harga-jasa-borongan-pasang-tower.html": "Harga Jasa Borongan Pasang Tower"
};

// ============================================================
// JASA KANOPI BAJA DAN BESI
// ============================================================

const urlMappingJasaKanopiBajadanBesiFromMoneyPage1MoneyPage2 = {};

// ============================================================
// JASA STRUKTUR BAJA GUDANG
// ============================================================

const urlMappingJasaStrukturBajaGudangFromMoneyPage1MoneyPage2 = {};

// ============================================================
// JASA COR BETON (Struktur Beton & Pengecoran)
// ============================================================

const urlMappingJasaCorRingBalokFromMoneyPage1MoneyPage2 = {
  "https://www.betonjayareadymix.com/2018/09/harga-jasa-borongan-cor-ring-balok.html": "Harga Jasa Borongan Cor Ring Balok"
};

const urlMappingJasaSloofBetonFromMoneyPage1MoneyPage2 = {
  "https://www.betonjayareadymix.com/2018/09/harga-jasa-cor-beton-sloof.html": "Harga Jasa Cor Beton Sloof",
  "https://www.betonjayareadymix.com/2018/09/harga-jasa-borongan-sloof-beton.html": "Harga Jasa Borongan Sloof Beton"
};

const urlMappingHargaJasaBoronganSloofBetonFromMoneyPage2MoneyPage3 = {
  "https://www.betonjayareadymix.com/2018/09/harga-jasa-borongan-sloof-beton-per-meter.html": "Harga Jasa Borongan Sloof Beton Per Meter"
};

const urlMappingHargaJasaBoronganSloofBetonPerMeterFromMoneyPage3MoneyChild = {
  "https://www.betonjayareadymix.com/2019/01/harga-jasa-sloof-beton-per-meter-kuningan.html": "Harga Jasa Sloof Beton Per Meter Kuningan",
  "https://www.betonjayareadymix.com/2019/01/harga-jasa-sloof-beton-per-meter-ciamis.html": "Harga Jasa Sloof Beton Per Meter Ciamis",
  "https://www.betonjayareadymix.com/2019/01/harga-jasa-sloof-beton-per-meter-cianjur.html": "Harga Jasa Sloof Beton Per Meter Cianjur",
  "https://www.betonjayareadymix.com/2019/01/harga-jasa-sloof-beton-per-meter-cirebon.html": "Harga Jasa Sloof Beton Per Meter Cirebon",
  "https://www.betonjayareadymix.com/2019/01/harga-jasa-sloof-beton-per-meter-indramayu.html": "Harga Jasa Sloof Beton Per Meter Indramayu",
  "https://www.betonjayareadymix.com/2019/01/harga-jasa-sloof-beton-per-meter-bandung.html": "Harga Jasa Sloof Beton Per Meter Bandung",
  "https://www.betonjayareadymix.com/2019/01/harga-jasa-sloof-beton-per-meter-sukabumi.html": "Harga Jasa Sloof Beton Per Meter Sukabumi",
  "https://www.betonjayareadymix.com/2019/01/harga-jasa-sloof-beton-per-meter-sumedang.html": "Harga Jasa Sloof Beton Per Meter Sumedang",
  "https://www.betonjayareadymix.com/2019/01/harga-jasa-sloof-beton-per-meter-tasikmalaya.html": "Harga Jasa Sloof Beton Per Meter Tasikmalaya",
  "https://www.betonjayareadymix.com/2019/01/harga-jasa-sloof-beton-per-meter-garut.html": "Harga Jasa Sloof Beton Per Meter Garut",
  "https://www.betonjayareadymix.com/2019/01/harga-jasa-sloof-beton-per-meter-karawang.html": "Harga Jasa Sloof Beton Per Meter Karawang",
  "https://www.betonjayareadymix.com/2019/01/harga-jasa-sloof-beton-per-meter-majalengka.html": "Harga Jasa Sloof Beton Per Meter Majalengka",
  "https://www.betonjayareadymix.com/2019/01/harga-jasa-sloof-beton-per-meter-purwakarta.html": "Harga Jasa Sloof Beton Per Meter Purwakarta",
  "https://www.betonjayareadymix.com/2019/01/harga-jasa-sloof-beton-per-meter-subang.html": "Harga Jasa Sloof Beton Per Meter Subang",
  "https://www.betonjayareadymix.com/2019/01/harga-jasa-sloof-beton-per-meter-depok.html": "Harga Jasa Sloof Beton Per Meter Depok",
  "https://www.betonjayareadymix.com/2019/01/harga-jasa-sloof-beton-per-meter-tangerang.html": "Harga Jasa Sloof Beton Per Meter Tangerang",
  "https://www.betonjayareadymix.com/2019/01/harga-jasa-sloof-beton-per-meter-jakarta.html": "Harga Jasa Sloof Beton Per Meter Jakarta",
  "https://www.betonjayareadymix.com/2019/01/harga-jasa-sloof-beton-per-meter-bekasi.html": "Harga Jasa Sloof Beton Per Meter Bekasi",
  "https://www.betonjayareadymix.com/2019/01/harga-jasa-sloof-beton-per-meter-bogor.html": "Harga Jasa Sloof Beton Per Meter Bogor"
};

const urlMappingJasaCorBetonReadyMixFromMoneyPage1MoneyPage2 = {
  "https://www.betonjayareadymix.com/2018/09/harga-jasa-cor-beton-ready-mix.html": "Harga Jasa Cor Beton Ready Mix",
  "https://www.betonjayareadymix.com/2018/09/harga-jasa-borongan-cor-beton.html": "Harga Jasa Borongan Cor Beton"
};

const urlMappingHargaJasaBoronganCorBetonFromMoneyPage2MoneyPage3 = {
  "https://www.betonjayareadymix.com/2018/09/harga-jasa-borongan-cor-beton-bangunan.html": "Harga Jasa Borongan Cor Beton Bangunan"
};

const urlMappingHargaJasaBoronganCorBetonFromMoneyPage2MoneyChild = {
  "https://www.betonjayareadymix.com/2018/09/harga-jasa-borongan-cor-beton-tangerang.html": "Harga Jasa Borongan Cor Beton Tangerang",
  "https://www.betonjayareadymix.com/2018/09/harga-jasa-borongan-cor-beton-jakarta.html": "Harga Jasa Borongan Cor Beton Jakarta",
  "https://www.betonjayareadymix.com/2018/09/harga-jasa-borongan-cor-beton-depok.html": "Harga Jasa Borongan Cor Beton Depok",
  "https://www.betonjayareadymix.com/2018/09/harga-jasa-borongan-cor-beton-bogor.html": "Harga Jasa Borongan Cor Beton Bogor",
  "https://www.betonjayareadymix.com/2018/09/harga-jasa-borongan-cor-beton-bekasi.html": "Harga Jasa Borongan Cor Beton Bekasi",
  "https://www.betonjayareadymix.com/2018/09/harga-jasa-borongan-cor-beton-terdekat.html": "Harga Jasa Borongan Cor Beton Terdekat"
};

const urlMappingHargaJasaBoronganCorBetonBangunanFromMoneyPage3MoneyPage4 = {
  "https://www.betonjayareadymix.com/2018/09/harga-jasa-borongan-cor-beton-townhouse.html": "Harga Jasa Borongan Cor Beton Townhouse",
  "https://www.betonjayareadymix.com/2018/09/harga-jasa-borongan-cor-beton-villa.html": "Harga Jasa Borongan Cor Beton Villa",
  "https://www.betonjayareadymix.com/2018/09/harga-jasa-borongan-cor-beton-pabrik.html": "Harga Jasa Borongan Cor Beton Pabrik",
  "https://www.betonjayareadymix.com/2018/09/harga-jasa-borongan-cor-beton-gedung.html": "Harga Jasa Borongan Cor Beton Gedung",
  "https://www.betonjayareadymix.com/2018/09/harga-jasa-borongan-cor-beton-gudang.html": "Harga Jasa Borongan Cor Beton Gudang",
  "https://www.betonjayareadymix.com/2018/09/harga-jasa-borongan-cor-beton-masjid.html": "Harga Jasa Borongan Cor Beton Masjid",
  "https://www.betonjayareadymix.com/2018/09/harga-jasa-borongan-cor-beton-yayasan.html": "Harga Jasa Borongan Cor Beton Yayasan",
  "https://www.betonjayareadymix.com/2018/09/harga-jasa-borongan-cor-beton-mall.html": "Harga Jasa Borongan Cor Beton Mall",
  "https://www.betonjayareadymix.com/2018/09/harga-jasa-borongan-cor-beton-stadion.html": "Harga Jasa Borongan Cor Beton Stadion",
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

const urlMappingJasaPengecoranLantaiDakFromMoneyPage1MoneyPage2 = {
  "https://www.betonjayareadymix.com/2018/10/harga-jasa-cor-dak-beton.html": "Harga Jasa Cor Dak Beton"
};

const urlMappingHargaJasaCorDakBetonFromMoneyPage2MoneyPage3 = {
  "https://www.betonjayareadymix.com/2018/09/harga-jasa-borongan-cor-dak-beton.html": "Harga Jasa Borongan Cor Dak Beton"
};

// ═══════════════════════════════════════════════════════════
// (lanjut PART 2)
// ═══════════════════════════════════════════════════════════

console.log('═══════════════════════════════════════════════════════════');
console.log('📦 PART 1 SELESAI — Lanjut ke PART 2');
console.log('═══════════════════════════════════════════════════════════');

// ═══════════════════════════════════════════════════════════
// [BAGIAN 1 - LANJUTAN] SISA MAPPING
// ═══════════════════════════════════════════════════════════

const urlMappingJasaPengecoranLantaiGudangFromMoneyPage1MoneyPage2 = {};

const urlMappingJasaBekistingdanPembesianFromMoneyPage1MoneyPage2 = {
  "https://www.betonjayareadymix.com/2021/12/jasa-bekisting-sloof-per-m2.html": "Jasa Bekisting Sloof per m2",
  "https://www.betonjayareadymix.com/2021/08/jasa-bekisting-rumah.html": "Jasa Bekisting Rumah"
};

const urlMappingJasaPengecoranKolomBetonFromMoneyPage1MoneyPage2 = {
  "https://www.betonjayareadymix.com/2018/09/harga-jasa-borongan-kolom-beton.html": "Harga Jasa Borongan Kolom Beton"
};

// ============================================================
// JASA KONSTRUKSI GEDUNG HUNIAN
// ============================================================

const urlMappingJasaKonstruksiGedungHunianFromMoneyPageMoneyPage1 = {};

// ============================================================
// JASA KONSTRUKSI RUMAH TINGGAL
// ============================================================

const urlMappingHargaJasaBoronganBangunanFromMoneyPage1MoneyPage2 = {
  "https://www.betonjayareadymix.com/2018/09/harga-jasa-upah-tenaga-borongan-bangunan-per-m2.html": "Harga Jasa Upah Tenaga Borongan Bangunan Per M2",
  "https://www.betonjayareadymix.com/2018/09/harga-jasa-borongan-konstruksi-per-meter.html": "Harga Jasa Borongan Konstruksi Per Meter",
  "https://www.betonjayareadymix.com/2018/09/harga-jasa-borongan-tukang-bangunan-per-meter.html": "Harga Jasa Borongan Tukang Bangunan Per Meter",
  "https://www.betonjayareadymix.com/2018/09/harga-jasa-borongan-bangunan-plus-material.html": "Harga Jasa Borongan Bangunan Plus Material"
};

const urlMappingHargaJasaBoronganBangunanFromMoneyPage1MoneyChild = {
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
  "https://www.betonjayareadymix.com/2018/09/harga-jasa-borongan-bangunan-rumah.html": "Harga Jasa Borongan Bangunan Rumah",
  "https://www.betonjayareadymix.com/2018/09/harga-jasa-borongan-rumah-per-meter-plus-material.html": "Harga Jasa Borongan Rumah Per Meter Plus Material",
  "https://www.betonjayareadymix.com/2018/09/harga-jasa-borongan-rumah-per-meter-terima-kunci.html": "Harga Jasa Borongan Rumah Per Meter Terima Kunci",
  "https://www.betonjayareadymix.com/2018/09/harga-jasa-borongan-rumah-1-lantai-per-meter.html": "Harga Jasa Borongan Rumah 1 Lantai Per Meter",
  "https://www.betonjayareadymix.com/2018/09/harga-jasa-borongan-tenaga-bangunan-rumah.html": "Harga Jasa Borongan Tenaga Bangunan Rumah",
  "https://www.betonjayareadymix.com/2018/09/harga-jasa-borongan-rumah-2-lantai-per-m2.html": "Harga Jasa Borongan Rumah 2 Lantai Per M2"
};

const urlMappingHargaJasaBoronganRumahFromMoneyPage1MoneyChild = {
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
  "https://www.betonjayareadymix.com/2018/11/jasa-bangun-rumah-depok.html": "Jasa Bangun Rumah Depok",
  "https://www.betonjayareadymix.com/2018/11/jasa-bangun-rumah-tangerang.html": "Jasa Bangun Rumah Tangerang",
  "https://www.betonjayareadymix.com/2018/11/jasa-bangun-rumah-jakarta.html": "Jasa Bangun Rumah Jakarta",
  "https://www.betonjayareadymix.com/2018/11/jasa-bangun-rumah-bogor.html": "Jasa Bangun Rumah Bogor",
  "https://www.betonjayareadymix.com/2018/11/jasa-bangun-rumah-bekasi.html": "Jasa Bangun Rumah Bekasi"
};

// ============================================================
// JASA KONSTRUKSI RUKO / VILLA / APARTEMEN / HOTEL / PERKANTORAN
// ============================================================

const urlMappingJasaPembuatanRukoFromMoneyMaster2MoneyPage = {};
const urlMappingJasaPembuatanVillaFromMoneyMaster2MoneyPage = {};
const urlMappingJasaPembuatanApartemenFromMoneyMaster2MoneyPage = {};
const urlMappingJasaPembuatanHotelFromMoneyMaster2MoneyPage = {};
const urlMappingJasaPembuatanPerkantoranFromMoneyMaster2MoneyPage = {};
const urlMappingJasaPembuatanSekolahFromMoneyMaster2MoneyPage = {};
const urlMappingJasaPembuatanRSFromFromMoneyMaster2MoneyPage = {};

// ============================================================
// JASA KONSTRUKSI GUDANG LOGISTIK
// ============================================================

const urlMappingJasaPembuatanGudangFromFromMoneyMaster2MoneyPage = {
  "https://www.betonjayareadymix.com/2018/09/jasa-pembuatan-konstruksi-gudang.html": "Jasa Pembuatan Konstruksi Gudang",
  "https://www.betonjayareadymix.com/2018/09/harga-jasa-pembuatan-gudang.html": "Harga Jasa Pembuatan Gudang"
};

const urlMappingHargaJasaPembuatanGudangFromFromMoneyPageMoneyPage1 = {
  "https://www.betonjayareadymix.com/2018/09/biaya-jasa-pembuatan-gudang-baja-ringan.html": "Biaya Jasa Pembuatan Gudang Baja Ringan",
  "https://www.betonjayareadymix.com/2018/09/harga-jasa-konstruksi-gudang-per-meter.html": "Harga Jasa Konstruksi Gudang per Meter",
  "https://www.betonjayareadymix.com/2018/09/harga-jasa-borong-tenaga-bikin-gudang.html": "Harga Jasa Borong Tenaga Bikin Gudang",
  "https://www.betonjayareadymix.com/2018/09/harga-jasa-borongan-gudang-per-m2.html": "Harga Jasa Borongan Gudang per M2",
  "https://www.betonjayareadymix.com/2018/09/harga-jasa-bangun-gudang.html": "Harga Jasa Bangun Gudang",
  "https://www.betonjayareadymix.com/2018/09/harga-jasa-pembuatan-gudang-rangka-baja.html": "Harga Jasa Pembuatan Gudang Rangka Baja",
  "https://www.betonjayareadymix.com/2018/09/biaya-jasa-pembuatan-gudang-per-meter.html": "Biaya Jasa Pembuatan Gudang per Meter",
  "https://www.betonjayareadymix.com/2018/09/harga-jasa-pembuatan-gudang-per-m2.html": "Harga Jasa Pembuatan Gudang per M2"
};

// ============================================================
// JASA KONSTRUKSI PABRIK / COLD STORAGE / BENGKEL / WORKSHOP
// ============================================================

const urlMappingJasaKonstruksiPabrikIndustriFromMoneyPageMoneyPage1 = {};
const urlMappingJasaKonstruksiColdStorageModernFromMoneyPageMoneyPage1 = {};
const urlMappingJasaKonstruksiBengkelModernFromMoneyPageMoneyPage1 = {};
const urlMappingJasaKonstruksiWorkshopModernFromMoneyPageMoneyPage1 = {};

// ============================================================
// JASA LAPANGAN OLAHRAGA
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

const urlMappingJasaPembuatanLapanganFutsalFromMoneyPage1MoneyPage2 = {
  "https://www.betonjayareadymix.com/2018/09/harga-jasa-pembuatan-lapangan-futsal.html": "Harga Jasa Pembuatan Lapangan Futsal"
};

const urlMappingJasaPembuatanLapanganFutsalFromMoneyPage1MoneyChild = {
  "https://www.betonjayareadymix.com/2018/11/jasa-pembuatan-lapangan-futsal-bekasi.html": "Jasa Pembuatan Lapangan Futsal Bekasi",
  "https://www.betonjayareadymix.com/2018/11/jasa-pembuatan-lapangan-futsal-depok.html": "Jasa Pembuatan Lapangan Futsal Depok",
  "https://www.betonjayareadymix.com/2018/11/jasa-pembuatan-lapangan-futsal-jakarta.html": "Jasa Pembuatan Lapangan Futsal Jakarta",
  "https://www.betonjayareadymix.com/2018/11/jasa-pembuatan-lapangan-futsal-tangerang.html": "Jasa Pembuatan Lapangan Futsal Tangerang",
  "https://www.betonjayareadymix.com/2018/11/jasa-pembuatan-lapangan-futsal-bogor.html": "Jasa Pembuatan Lapangan Futsal Bogor"
};

const urlMappingJasaPembuatanLapanganBasketFromMoneyPage1MoneyPage2 = {
  "https://www.betonjayareadymix.com/2018/09/harga-buat-lapangan-basket.html": "Harga Jasa Pembuatan Lapangan Basket"
};

const urlMappingJasaPembuatanLapanganSepakbolaFromMoneyPage1MoneyPage2 = {
  "https://www.betonjayareadymix.com/2018/09/harga-jasa-pembuatan-lapangan-mini-soccer.html": "Harga Jasa Pembuatan Lapangan Mini Soccer",
  "https://www.betonjayareadymix.com/2018/09/jasa-pembuatan-lapangan-mini-soccer.html": "Jasa Pembuatan Lapangan Mini Soccer"
};

const urlMappingJasaPembuatanLapanganTenisFromMoneyPage1MoneyPage2 = {
  "https://www.betonjayareadymix.com/2018/09/harga-jasa-pembuatan-lapangan-tenis.html": "Harga Jasa Pembuatan Lapangan Tenis"
};

const urlMappingJasaPembuatanLapanganBadmintonFromMoneyPage1MoneyPage2 = {
  "https://www.betonjayareadymix.com/2018/09/harga-jasa-pembuatan-lapangan-badminton.html": "Harga Jasa Pembuatan Lapangan Badminton"
};

const urlMappingJasaPembuatanLapanganVoliFromMoneyPage1MoneyPage2 = {
  "https://www.betonjayareadymix.com/2018/09/harga-jasa-pembuatan-lapangan-voli.html": "Harga Jasa Pembuatan Lapangan Voli"
};

const urlMappingJasaPembuatanLapanganVoliFromMoneyPage1MoneyChild = {
  "https://www.betonjayareadymix.com/2018/11/jasa-pembuatan-lapangan-voli-depok.html": "Jasa Pembuatan Lapangan Voli Depok",
  "https://www.betonjayareadymix.com/2018/11/jasa-pembuatan-lapangan-voli-tangerang.html": "Jasa Pembuatan Lapangan Voli Tangerang",
  "https://www.betonjayareadymix.com/2018/11/jasa-pembuatan-lapangan-voli-jakarta.html": "Jasa Pembuatan Lapangan Voli Jakarta",
  "https://www.betonjayareadymix.com/2018/11/jasa-pembuatan-lapangan-voli-bekasi.html": "Jasa Pembuatan Lapangan Voli Bekasi",
  "https://www.betonjayareadymix.com/2018/11/jasa-pembuatan-lapangan-voli-bogor.html": "Jasa Pembuatan Lapangan Voli Bogor"
};

const urlMappingJasaPembuatanLapanganSerbagunaFromMoneyPage1MoneyPage2 = {
  "https://www.betonjayareadymix.com/2018/09/harga-jasa-pembuatan-lapangan-serbaguna.html": "Harga Jasa Pembuatan Lapangan  Serbaguna"
};

// ============================================================
// JASA STRUKTUR KHUSUS (Kolam Renang, Septic Tank, dll)
// ============================================================

const urlMappingKontraktorKolamRenangFromMoneyPageMoneyPage1 = {
  "https://www.betonjayareadymix.com/2018/09/kontraktor-waterpark-indonesia.html": "Kontraktor Waterpark Indonesia"
};

const urlMappingJasaPembuatanKolamRenangFromMoneyPageMoneyPage1 = {
  "https://www.betonjayareadymix.com/2018/09/harga-jasa-pembuatan-kolam-renang.html": "Harga Jasa Pembuatan Kolam Renang"
};

const urlMappingHargaJasaPembuatanKolamRenangFromMoneyPage1MoneyPage2 = {
  "https://www.betonjayareadymix.com/2018/09/biaya-jasa-bangun-kolam-renang-per-meter.html": "Biaya Jasa Bangun Kolam Renang Per Meter",
  "https://www.betonjayareadymix.com/2018/09/harga-jasa-pembuatan-waterpark-kolam-renang.html": "Harga Jasa Pembuatan Waterpark Kolam Renang",
  "https://www.betonjayareadymix.com/2018/09/harga-jasa-pembuatan-wahana-kolam-renang.html": "Harga Jasa Pembuatan Wahana Kolam Renang",
  "https://www.betonjayareadymix.com/2018/09/harga-jasa-pembuatan-kolam-renang-per-m2..html": "Harga Jasa Pembuatan Kolam Renang Per M2",
  "https://www.betonjayareadymix.com/2018/09/harga-jasa-borongan-tenaga-bikin-kolam-renang.html": "Harga Jasa Borongan Tenaga Bikin Kolam Renang"
};

const urlMappingJasaPembuatanKolamRenangFromMoneyPageMoneyChild = {
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

const urlMappingJasaPembuatanKolamIkanFromSub2MoneyPage = {};
const urlMappingJasaSepticTankBetonFromSub2MoneyPage = {};
const urlMappingJasaPembuatanTangkiAirFromSub2MoneyPage = {};
const urlMappingJasaPembuatanBakPenampunganFromSub2MoneyPage = {};
const urlMappingJasaKonstruksiMenaraAirFromSub2MoneyPage = {};

console.log('═══════════════════════════════════════════════════════════');
console.log('📦 PART 2 SELESAI — Lanjut ke PART 3 (Early Exit + Fungsi Utama)');
console.log('═══════════════════════════════════════════════════════════');

// ═══════════════════════════════════════════════════════════
// [BAGIAN 2] EARLY EXIT v2.0.0 — PENDEKATAN C
// ═══════════════════════════════════════════════════════════
// STRATEGI:
//   - Loop + foundIndex + foundMappingName + break (paling cepat)
//   - TIDAK bikin MERGED_MAP (hemat memori ~10KB)
//   - Simpan ALL_MAPPINGS + foundIndex + foundMappingName untuk debug
// ═══════════════════════════════════════════════════════════

(function() {
    'use strict';
    
    var cleanUrl = window.location.href.split(/[?#]/)[0];
    console.log('[jasa-konstruksi-struktur-post] 🔍 Check URL: ' + cleanUrl);
    
    // Kumpulkan SEMUA mapping ke array (TANPA Object.assign)
    var ALL_MAPPINGS = [
        urlMappingJasaKonstruksiBangunanFromMoneyMasterMoneyChild,
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
        urlMappingJasaCorRingBalokFromMoneyPage1MoneyPage2,
        urlMappingJasaSloofBetonFromMoneyPage1MoneyPage2,
        urlMappingHargaJasaBoronganSloofBetonFromMoneyPage2MoneyPage3,
        urlMappingHargaJasaBoronganSloofBetonPerMeterFromMoneyPage3MoneyChild,
        urlMappingJasaCorBetonReadyMixFromMoneyPage1MoneyPage2,
        urlMappingHargaJasaBoronganCorBetonFromMoneyPage2MoneyPage3,
        urlMappingHargaJasaBoronganCorBetonFromMoneyPage2MoneyChild,
        urlMappingHargaJasaBoronganCorBetonBangunanFromMoneyPage3MoneyPage4,
        urlMappingJasaPengecoranLantaiDakFromMoneyPage1MoneyPage2,
        urlMappingHargaJasaCorDakBetonFromMoneyPage2MoneyPage3,
        urlMappingJasaPengecoranLantaiGudangFromMoneyPage1MoneyPage2,
        urlMappingJasaBekistingdanPembesianFromMoneyPage1MoneyPage2,
        urlMappingJasaPengecoranKolomBetonFromMoneyPage1MoneyPage2,
        urlMappingJasaKonstruksiGedungHunianFromMoneyPageMoneyPage1,
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
    ];
    
    // ✅ PENDEKATAN C: Loop + foundIndex + foundMappingName + break
    var foundIndex = -1;
    var foundMappingName = '';
    
    for (var i = 0; i < ALL_MAPPINGS.length; i++) {
        if (!ALL_MAPPINGS[i] || typeof ALL_MAPPINGS[i] !== 'object') {
            console.warn('[jasa-konstruksi-struktur-post] ⚠️ Mapping #' + (i + 1) + ' bukan object — skip');
            continue;
        }
        if (ALL_MAPPINGS[i][cleanUrl]) {
            foundIndex = i;
            foundMappingName = ALL_MAPPINGS[i][cleanUrl];
            break;
        }
    }
    
    if (foundIndex === -1) {
        console.log('[jasa-konstruksi-struktur-post] ⏭️ SKIP — URL tidak cocok di semua cluster');
        window.__jasaKonsStrukturPostActive = false;
        return;
    }
    
    // ✅ Cocok — set flag + simpan info untuk debug
    window.__jasaKonsStrukturPostActive = true;
    window.__jasaKonsStrukturPostMatchIndex = foundIndex;
    window.__jasaKonsStrukturPostMatchMappingName = foundMappingName;
    window.__jasaKonsStrukturPostMappings = ALL_MAPPINGS;
    
    console.log(
        '[jasa-konstruksi-struktur-post] ✅ Match di mapping #' + (foundIndex + 1) +
        ' — Label: "' + foundMappingName + '"' +
        ' — EXECUTE flag set'
    );
})();

// ═══════════════════════════════════════════════════════════
// [BAGIAN 3] FUNGSI UTAMA — Pembuka
// ═══════════════════════════════════════════════════════════

function initJasaKonsStrukturPost() {
    // ⚡ Guard flag
    if (!window.__jasaKonsStrukturPostActive) {
        console.log('[jasa-konstruksi-struktur-post] ⏭️ Execute SKIP — URL tidak cocok');
        return;
    }
    
    console.log('[jasa-konstruksi-struktur-post] 🚀 Execute — URL cocok');
    
    var cleanUrlJasaJasaKonsStrukturPost = window.location.href.split(/[?#]/)[0];
    
    // ✅ Guard elemen DOM
    var JasaKonsStrukturPost = document.getElementById("JasaKonsStrukturPost");
    if (!JasaKonsStrukturPost) {
        console.error("[jasa-konstruksi-struktur-post] ❌ elemen Id JasaKonsStrukturPost kondisi terhapus");
        return;
    }
    
    // ═══════════════════════════════════════════════════════
    // ⚠️ SEMUA IF BREADCRUMB DI BAWAH INI
    // (COPY dari PART 4 & PART 5)
    // ═══════════════════════════════════════════════════════

console.log('═══════════════════════════════════════════════════════════');
console.log('📦 PART 3 SELESAI — Lanjut ke PART 4 (If Breadcrumb Bagian 1)');
console.log('═══════════════════════════════════════════════════════════');

    // ═══════════════════════════════════════════════════════
    // [BLOK 1] JASA KONSTRUKSI BANGUNAN (MONEY_CHILD)
    // ═══════════════════════════════════════════════════════

    if (urlMappingJasaKonstruksiBangunanFromMoneyMasterMoneyChild[cleanUrlJasaJasaKonsStrukturPost]) {
        generateBreadcrumbShared(
            urlMappingJasaKonstruksiBangunanFromMoneyMasterMoneyChild,
            cleanUrlJasaJasaKonsStrukturPost,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Konstruksi Bangunan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-konstruksi-bangunan.html' },
                { name: 'Perbandingan Jasa Konstruksi Bangunan', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-konstruksi-bangunan.html' },
                { name: 'Jasa Konstruksi Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi-bangunan.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }

    // ═══════════════════════════════════════════════════════
    // [BLOK 2] JASA PASANG BAJA RINGAN
    // ═══════════════════════════════════════════════════════

    if (urlMappingJasaPasangBajaRinganFromMoneyPage2MoneyPage3[cleanUrlJasaJasaKonsStrukturPost]) {
        generateBreadcrumbShared(
            urlMappingJasaPasangBajaRinganFromMoneyPage2MoneyPage3,
            cleanUrlJasaJasaKonsStrukturPost,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Struktur Konstruksi', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-struktur-konstruksi.html' },
                { name: 'Perbandingan Jasa Struktur Konstruksi', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-struktur-konstruksi.html' },
                { name: 'Jasa Konstruksi Struktur', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi-struktur.html' },
                { name: 'Jasa Struktur Baja dan Rangka Ringan', url: 'https://www.betonjayareadymix.com/p/jasa-struktur-baja-dan-rangka-ringan.html' },
                { name: 'Jasa Konstruksi Baja Ringan', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi-baja-ringan.html' },
                { name: 'Jasa Pasang Baja Ringan', url: 'https://www.betonjayareadymix.com/p/jasa-pasang-baja-ringan.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }

    if (urlMappingJasaPasangAtapBajaRinganFromMoneyPage3MoneyPage4[cleanUrlJasaJasaKonsStrukturPost]) {
        generateBreadcrumbShared(
            urlMappingJasaPasangAtapBajaRinganFromMoneyPage3MoneyPage4,
            cleanUrlJasaJasaKonsStrukturPost,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Struktur Konstruksi', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-struktur-konstruksi.html' },
                { name: 'Perbandingan Jasa Struktur Konstruksi', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-struktur-konstruksi.html' },
                { name: 'Jasa Konstruksi Struktur', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi-struktur.html' },
                { name: 'Jasa Struktur Baja dan Rangka Ringan', url: 'https://www.betonjayareadymix.com/p/jasa-struktur-baja-dan-rangka-ringan.html' },
                { name: 'Jasa Konstruksi Baja Ringan', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi-baja-ringan.html' },
                { name: 'Jasa Pasang Baja Ringan', url: 'https://www.betonjayareadymix.com/p/jasa-pasang-baja-ringan.html' },
                { name: 'Jasa Pasang Atap Baja Ringan', url: 'https://www.betonjayareadymix.com/2018/09/jasa-pasang-atap-baja-ringan.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }

    if (urlMappingJasaPasangKanopiBajaRinganFromMoneyPage3MoneyPage4[cleanUrlJasaJasaKonsStrukturPost]) {
        generateBreadcrumbShared(
            urlMappingJasaPasangKanopiBajaRinganFromMoneyPage3MoneyPage4,
            cleanUrlJasaJasaKonsStrukturPost,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Struktur Konstruksi', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-struktur-konstruksi.html' },
                { name: 'Perbandingan Jasa Struktur Konstruksi', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-struktur-konstruksi.html' },
                { name: 'Jasa Konstruksi Struktur', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi-struktur.html' },
                { name: 'Jasa Struktur Baja dan Rangka Ringan', url: 'https://www.betonjayareadymix.com/p/jasa-struktur-baja-dan-rangka-ringan.html' },
                { name: 'Jasa Konstruksi Baja Ringan', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi-baja-ringan.html' },
                { name: 'Jasa Pasang Baja Ringan', url: 'https://www.betonjayareadymix.com/p/jasa-pasang-baja-ringan.html' },
                { name: 'Jasa Pasang Kanopi Baja Ringan', url: 'https://www.betonjayareadymix.com/2018/09/jasa-pasang-kanopi-baja-ringan.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }

    if (urlMappingHargaJasaPasangBajaRinganFromMoneyPage3MoneyPage4[cleanUrlJasaJasaKonsStrukturPost]) {
        generateBreadcrumbShared(
            urlMappingHargaJasaPasangBajaRinganFromMoneyPage3MoneyPage4,
            cleanUrlJasaJasaKonsStrukturPost,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Struktur Konstruksi', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-struktur-konstruksi.html' },
                { name: 'Perbandingan Jasa Struktur Konstruksi', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-struktur-konstruksi.html' },
                { name: 'Jasa Konstruksi Struktur', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi-struktur.html' },
                { name: 'Jasa Struktur Baja dan Rangka Ringan', url: 'https://www.betonjayareadymix.com/p/jasa-struktur-baja-dan-rangka-ringan.html' },
                { name: 'Jasa Konstruksi Baja Ringan', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi-baja-ringan.html' },
                { name: 'Jasa Pasang Baja Ringan', url: 'https://www.betonjayareadymix.com/p/jasa-pasang-baja-ringan.html' },
                { name: 'Harga Jasa Pasang Baja Ringan', url: 'https://www.betonjayareadymix.com/2018/09/harga-jasa-pasang-baja-ringan.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }

    if (urlMappingHargaJasaBoronganBajaRinganFromMoneyPage4MoneyPage5[cleanUrlJasaJasaKonsStrukturPost]) {
        generateBreadcrumbShared(
            urlMappingHargaJasaBoronganBajaRinganFromMoneyPage4MoneyPage5,
            cleanUrlJasaJasaKonsStrukturPost,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Struktur Konstruksi', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-struktur-konstruksi.html' },
                { name: 'Perbandingan Jasa Struktur Konstruksi', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-struktur-konstruksi.html' },
                { name: 'Jasa Konstruksi Struktur', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi-struktur.html' },
                { name: 'Jasa Struktur Baja dan Rangka Ringan', url: 'https://www.betonjayareadymix.com/p/jasa-struktur-baja-dan-rangka-ringan.html' },
                { name: 'Jasa Konstruksi Baja Ringan', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi-baja-ringan.html' },
                { name: 'Jasa Pasang Baja Ringan', url: 'https://www.betonjayareadymix.com/p/jasa-pasang-baja-ringan.html' },
                { name: 'Harga Jasa Pasang Baja Ringan', url: 'https://www.betonjayareadymix.com/2018/09/harga-jasa-pasang-baja-ringan.html' },
                { name: 'Harga Jasa Borongan Baja Ringan', url: 'https://www.betonjayareadymix.com/2019/04/harga-jasa-borongan-baja-ringan.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }

    if (urlMappingHargaJasaBoronganBajaRinganPlusMaterialFromMoneyPage5MoneyChild[cleanUrlJasaJasaKonsStrukturPost]) {
        generateBreadcrumbShared(
            urlMappingHargaJasaBoronganBajaRinganPlusMaterialFromMoneyPage5MoneyChild,
            cleanUrlJasaJasaKonsStrukturPost,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Struktur Konstruksi', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-struktur-konstruksi.html' },
                { name: 'Perbandingan Jasa Struktur Konstruksi', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-struktur-konstruksi.html' },
                { name: 'Jasa Konstruksi Struktur', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi-struktur.html' },
                { name: 'Jasa Struktur Baja dan Rangka Ringan', url: 'https://www.betonjayareadymix.com/p/jasa-struktur-baja-dan-rangka-ringan.html' },
                { name: 'Jasa Konstruksi Baja Ringan', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi-baja-ringan.html' },
                { name: 'Jasa Pasang Baja Ringan', url: 'https://www.betonjayareadymix.com/p/jasa-pasang-baja-ringan.html' },
                { name: 'Harga Jasa Pasang Baja Ringan', url: 'https://www.betonjayareadymix.com/2018/09/harga-jasa-pasang-baja-ringan.html' },
                { name: 'Harga Jasa Borongan Baja Ringan', url: 'https://www.betonjayareadymix.com/2019/04/harga-jasa-borongan-baja-ringan.html' },
                { name: 'Harga Jasa Borongan Baja Ringan Plus Material', url: 'https://www.betonjayareadymix.com/2019/04/harga-jasa-borongan-baja-ringan-plus-material.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }

    if (urlMappingJasaTukangBajaRinganFromMoneyPage3MoneyPage4[cleanUrlJasaJasaKonsStrukturPost]) {
        generateBreadcrumbShared(
            urlMappingJasaTukangBajaRinganFromMoneyPage3MoneyPage4,
            cleanUrlJasaJasaKonsStrukturPost,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Struktur Konstruksi', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-struktur-konstruksi.html' },
                { name: 'Perbandingan Jasa Struktur Konstruksi', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-struktur-konstruksi.html' },
                { name: 'Jasa Konstruksi Struktur', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi-struktur.html' },
                { name: 'Jasa Struktur Baja dan Rangka Ringan', url: 'https://www.betonjayareadymix.com/p/jasa-struktur-baja-dan-rangka-ringan.html' },
                { name: 'Jasa Konstruksi Baja Ringan', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi-baja-ringan.html' },
                { name: 'Jasa Pasang Baja Ringan', url: 'https://www.betonjayareadymix.com/p/jasa-pasang-baja-ringan.html' },
                { name: 'Jasa Tukang Baja Ringan', url: 'https://www.betonjayareadymix.com/2018/09/jasa-tukang-baja-ringan.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }

    // ═══════════════════════════════════════════════════════
    // [BLOK 3] JASA KONSTRUKSI BAJA KONVENSIONAL
    // ═══════════════════════════════════════════════════════

    if (urlMappingJasaKonstruksiBajaKonvensionalFromMoneyPage1MoneyPage2[cleanUrlJasaJasaKonsStrukturPost]) {
        generateBreadcrumbShared(
            urlMappingJasaKonstruksiBajaKonvensionalFromMoneyPage1MoneyPage2,
            cleanUrlJasaJasaKonsStrukturPost,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Struktur Konstruksi', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-struktur-konstruksi.html' },
                { name: 'Perbandingan Jasa Struktur Konstruksi', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-struktur-konstruksi.html' },
                { name: 'Jasa Konstruksi Struktur', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi-struktur.html' },
                { name: 'Jasa Struktur Baja dan Rangka Ringan', url: 'https://www.betonjayareadymix.com/p/jasa-struktur-baja-dan-rangka-ringan.html' },
                { name: 'Jasa Konstruksi Baja Konvensional', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi-baja-konvensional.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }

    if (urlMappingHargaJasaKonstruksiBajaKonvensionalFromMoneyPage2MoneyPage3[cleanUrlJasaJasaKonsStrukturPost]) {
        generateBreadcrumbShared(
            urlMappingHargaJasaKonstruksiBajaKonvensionalFromMoneyPage2MoneyPage3,
            cleanUrlJasaJasaKonsStrukturPost,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Struktur Konstruksi', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-struktur-konstruksi.html' },
                { name: 'Perbandingan Jasa Struktur Konstruksi', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-struktur-konstruksi.html' },
                { name: 'Jasa Konstruksi Struktur', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi-struktur.html' },
                { name: 'Jasa Struktur Baja dan Rangka Ringan', url: 'https://www.betonjayareadymix.com/p/jasa-struktur-baja-dan-rangka-ringan.html' },
                { name: 'Jasa Konstruksi Baja Konvensional', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi-baja-konvensional.html' },
                { name: 'Harga Jasa Konstruksi Baja Konvensional', url: 'https://www.betonjayareadymix.com/p/harga-jasa-konstruksi-baja-konvensional.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }

    if (urlMappingJasaPembangunanTowerBajaFromMoneyPage2MoneyPage3[cleanUrlJasaJasaKonsStrukturPost]) {
        generateBreadcrumbShared(
            urlMappingJasaPembangunanTowerBajaFromMoneyPage2MoneyPage3,
            cleanUrlJasaJasaKonsStrukturPost,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Struktur Konstruksi', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-struktur-konstruksi.html' },
                { name: 'Perbandingan Jasa Struktur Konstruksi', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-struktur-konstruksi.html' },
                { name: 'Jasa Konstruksi Struktur', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi-struktur.html' },
                { name: 'Jasa Struktur Baja dan Rangka Ringan', url: 'https://www.betonjayareadymix.com/p/jasa-struktur-baja-dan-rangka-ringan.html' },
                { name: 'Jasa Konstruksi Baja Konvensional', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi-baja-konvensional.html' },
                { name: 'Jasa Pembangunan Tower Baja', url: 'https://www.betonjayareadymix.com/2018/09/jasa-pembangunan-tower-baja.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }

    if (urlMappingHargaJasaPembangunanTowerBajaFromMoneyPage3MoneyPage4[cleanUrlJasaJasaKonsStrukturPost]) {
        generateBreadcrumbShared(
            urlMappingHargaJasaPembangunanTowerBajaFromMoneyPage3MoneyPage4,
            cleanUrlJasaJasaKonsStrukturPost,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Struktur Konstruksi', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-struktur-konstruksi.html' },
                { name: 'Perbandingan Jasa Struktur Konstruksi', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-struktur-konstruksi.html' },
                { name: 'Jasa Konstruksi Struktur', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi-struktur.html' },
                { name: 'Jasa Struktur Baja dan Rangka Ringan', url: 'https://www.betonjayareadymix.com/p/jasa-struktur-baja-dan-rangka-ringan.html' },
                { name: 'Jasa Konstruksi Baja Konvensional', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi-baja-konvensional.html' },
                { name: 'Jasa Pembangunan Tower Baja', url: 'https://www.betonjayareadymix.com/2018/09/jasa-pembangunan-tower-baja.html' },
                { name: 'Harga Jasa Pembangunan Tower Baja', url: 'https://www.betonjayareadymix.com/2018/09/harga-jasa-pembangunan-tower-baja.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }

    if (urlMappingJasaKanopiBajadanBesiFromMoneyPage1MoneyPage2[cleanUrlJasaJasaKonsStrukturPost]) {
        generateBreadcrumbShared(
            urlMappingJasaKanopiBajadanBesiFromMoneyPage1MoneyPage2,
            cleanUrlJasaJasaKonsStrukturPost,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Struktur Konstruksi', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-struktur-konstruksi.html' },
                { name: 'Perbandingan Jasa Struktur Konstruksi', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-struktur-konstruksi.html' },
                { name: 'Jasa Konstruksi Struktur', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi-struktur.html' },
                { name: 'Jasa Struktur Baja dan Rangka Ringan', url: 'https://www.betonjayareadymix.com/p/jasa-struktur-baja-dan-rangka-ringan.html' },
                { name: 'Jasa Kanopi Baja dan Besi', url: 'https://www.betonjayareadymix.com/p/jasa-kanopi-baja-dan-besi.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }

    // ⚠️ FIX: Hapus duplikat — urlMappingJasaStrukturBajaGudang hanya 1x
    if (urlMappingJasaStrukturBajaGudangFromMoneyPage1MoneyPage2[cleanUrlJasaJasaKonsStrukturPost]) {
        generateBreadcrumbShared(
            urlMappingJasaStrukturBajaGudangFromMoneyPage1MoneyPage2,
            cleanUrlJasaJasaKonsStrukturPost,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Struktur Konstruksi', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-struktur-konstruksi.html' },
                { name: 'Perbandingan Jasa Struktur Konstruksi', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-struktur-konstruksi.html' },
                { name: 'Jasa Konstruksi Struktur', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi-struktur.html' },
                { name: 'Jasa Struktur Baja dan Rangka Ringan', url: 'https://www.betonjayareadymix.com/p/jasa-struktur-baja-dan-rangka-ringan.html' },
                { name: 'Jasa Struktur Baja Gudang', url: 'https://www.betonjayareadymix.com/p/jasa-struktur-baja-gudang.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }

    // ═══════════════════════════════════════════════════════
    // [BLOK 4] JASA COR BETON (Struktur Beton & Pengecoran)
    // ═══════════════════════════════════════════════════════

    if (urlMappingJasaCorRingBalokFromMoneyPage1MoneyPage2[cleanUrlJasaJasaKonsStrukturPost]) {
        generateBreadcrumbShared(
            urlMappingJasaCorRingBalokFromMoneyPage1MoneyPage2,
            cleanUrlJasaJasaKonsStrukturPost,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Konstruksi Struktur', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-konstruksi-struktur.html' },
                { name: 'Perbandingan Jasa Konstruksi Struktur', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-konstruksi-struktur.html' },
                { name: 'Jasa Konstruksi Struktur', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi-struktur.html' },
                { name: 'Jasa Struktur Beton Dan Pengecoran', url: 'https://www.betonjayareadymix.com/p/jasa-struktur-beton-dan-pengecoran.html' },
                { name: 'Jasa Cor Ring Balok', url: 'https://www.betonjayareadymix.com/p/jasa-cor-ring-balok.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }

    if (urlMappingJasaSloofBetonFromMoneyPage1MoneyPage2[cleanUrlJasaJasaKonsStrukturPost]) {
        generateBreadcrumbShared(
            urlMappingJasaSloofBetonFromMoneyPage1MoneyPage2,
            cleanUrlJasaJasaKonsStrukturPost,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Konstruksi Struktur', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-konstruksi-struktur.html' },
                { name: 'Perbandingan Jasa Konstruksi Struktur', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-konstruksi-struktur.html' },
                { name: 'Jasa Konstruksi Struktur', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi-struktur.html' },
                { name: 'Jasa Struktur Beton Dan Pengecoran', url: 'https://www.betonjayareadymix.com/p/jasa-struktur-beton-dan-pengecoran.html' },
                { name: 'Jasa Sloof Beton', url: 'https://www.betonjayareadymix.com/p/jasa-sloof-beton.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }

    if (urlMappingHargaJasaBoronganSloofBetonFromMoneyPage2MoneyPage3[cleanUrlJasaJasaKonsStrukturPost]) {
        generateBreadcrumbShared(
            urlMappingHargaJasaBoronganSloofBetonFromMoneyPage2MoneyPage3,
            cleanUrlJasaJasaKonsStrukturPost,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Konstruksi Struktur', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-konstruksi-struktur.html' },
                { name: 'Perbandingan Jasa Konstruksi Struktur', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-konstruksi-struktur.html' },
                { name: 'Jasa Konstruksi Struktur', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi-struktur.html' },
                { name: 'Jasa Struktur Beton Dan Pengecoran', url: 'https://www.betonjayareadymix.com/p/jasa-struktur-beton-dan-pengecoran.html' },
                { name: 'Jasa Sloof Beton', url: 'https://www.betonjayareadymix.com/p/jasa-sloof-beton.html' },
                { name: 'Harga Jasa Borongan Sloof Beton', url: 'https://www.betonjayareadymix.com/p/harga-jasa-borongan-sloof-beton.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }

    if (urlMappingHargaJasaBoronganSloofBetonPerMeterFromMoneyPage3MoneyChild[cleanUrlJasaJasaKonsStrukturPost]) {
        generateBreadcrumbShared(
            urlMappingHargaJasaBoronganSloofBetonPerMeterFromMoneyPage3MoneyChild,
            cleanUrlJasaJasaKonsStrukturPost,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Konstruksi Struktur', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-konstruksi-struktur.html' },
                { name: 'Perbandingan Jasa Konstruksi Struktur', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-konstruksi-struktur.html' },
                { name: 'Jasa Konstruksi Struktur', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi-struktur.html' },
                { name: 'Jasa Struktur Beton Dan Pengecoran', url: 'https://www.betonjayareadymix.com/p/jasa-struktur-beton-dan-pengecoran.html' },
                { name: 'Jasa Sloof Beton', url: 'https://www.betonjayareadymix.com/p/jasa-sloof-beton.html' },
                { name: 'Harga Jasa Borongan Sloof Beton', url: 'https://www.betonjayareadymix.com/p/harga-jasa-borongan-sloof-beton.html' },
                { name: 'Harga Jasa Borongan Sloof Beton Per Meter', url: 'https://www.betonjayareadymix.com/p/harga-jasa-borongan-sloof-beton-per-meter.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }

    if (urlMappingJasaCorBetonReadyMixFromMoneyPage1MoneyPage2[cleanUrlJasaJasaKonsStrukturPost]) {
        generateBreadcrumbShared(
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
        generateBreadcrumbShared(
            urlMappingHargaJasaBoronganCorBetonFromMoneyPage2MoneyPage3,
            cleanUrlJasaJasaKonsStrukturPost,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Konstruksi Struktur', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-konstruksi-struktur.html' },
                { name: 'Perbandingan Jasa Konstruksi Struktur', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-konstruksi-struktur.html' },
                { name: 'Jasa Konstruksi Struktur', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi-struktur.html' },
                { name: 'Jasa Struktur Beton Dan Pengecoran', url: 'https://www.betonjayareadymix.com/p/jasa-struktur-beton-dan-pengecoran.html' },
                { name: 'Jasa Cor Beton Ready Mix', url: 'https://www.betonjayareadymix.com/p/jasa-cor-beton-ready-mix.html' },
                { name: 'Harga Jasa Borongan Cor Beton', url: 'https://www.betonjayareadymix.com/2018/09/harga-jasa-borongan-cor-beton.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }

    if (urlMappingHargaJasaBoronganCorBetonFromMoneyPage2MoneyChild[cleanUrlJasaJasaKonsStrukturPost]) {
        generateBreadcrumbShared(
            urlMappingHargaJasaBoronganCorBetonFromMoneyPage2MoneyChild,
            cleanUrlJasaJasaKonsStrukturPost,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Konstruksi Struktur', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-konstruksi-struktur.html' },
                { name: 'Perbandingan Jasa Konstruksi Struktur', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-konstruksi-struktur.html' },
                { name: 'Jasa Konstruksi Struktur', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi-struktur.html' },
                { name: 'Jasa Struktur Beton Dan Pengecoran', url: 'https://www.betonjayareadymix.com/p/jasa-struktur-beton-dan-pengecoran.html' },
                { name: 'Jasa Cor Beton Ready Mix', url: 'https://www.betonjayareadymix.com/p/jasa-cor-beton-ready-mix.html' },
                { name: 'Harga Jasa Borongan Cor Beton', url: 'https://www.betonjayareadymix.com/2018/09/harga-jasa-borongan-cor-beton.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }

    if (urlMappingHargaJasaBoronganCorBetonBangunanFromMoneyPage3MoneyPage4[cleanUrlJasaJasaKonsStrukturPost]) {
        generateBreadcrumbShared(
            urlMappingHargaJasaBoronganCorBetonBangunanFromMoneyPage3MoneyPage4,
            cleanUrlJasaJasaKonsStrukturPost,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Konstruksi Struktur', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-konstruksi-struktur.html' },
                { name: 'Perbandingan Jasa Konstruksi Struktur', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-konstruksi-struktur.html' },
                { name: 'Jasa Konstruksi Struktur', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi-struktur.html' },
                { name: 'Jasa Struktur Beton Dan Pengecoran', url: 'https://www.betonjayareadymix.com/p/jasa-struktur-beton-dan-pengecoran.html' },
                { name: 'Jasa Cor Beton Ready Mix', url: 'https://www.betonjayareadymix.com/p/jasa-cor-beton-ready-mix.html' },
                { name: 'Harga Jasa Borongan Cor Beton', url: 'https://www.betonjayareadymix.com/2018/09/harga-jasa-borongan-cor-beton.html' },
                { name: 'Harga Jasa Borongan Cor Beton Bangunan', url: 'https://www.betonjayareadymix.com/2018/09/harga-jasa-borongan-cor-beton-bangunan.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }

    if (urlMappingJasaPengecoranLantaiDakFromMoneyPage1MoneyPage2[cleanUrlJasaJasaKonsStrukturPost]) {
        generateBreadcrumbShared(
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
        generateBreadcrumbShared(
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

    // ⚠️ FIX: Hapus duplikat — urlMappingJasaPengecoranLantaiGudang hanya 1x
    if (urlMappingJasaPengecoranLantaiGudangFromMoneyPage1MoneyPage2[cleanUrlJasaJasaKonsStrukturPost]) {
        generateBreadcrumbShared(
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
        generateBreadcrumbShared(
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
        generateBreadcrumbShared(
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

console.log('═══════════════════════════════════════════════════════════');
console.log('📦 PART 4 SELESAI — Lanjut ke PART 5 (If Breadcrumb Bagian 2 + Fix v2.1.0)');
console.log('═══════════════════════════════════════════════════════════');

// ═══════════════════════════════════════════════════════
// [BLOK 5] JASA KONSTRUKSI GEDUNG HUNIAN & RUMAH TINGGAL
// ═══════════════════════════════════════════════════════

if (urlMappingJasaKonstruksiGedungHunianFromMoneyPageMoneyPage1[cleanUrlJasaJasaKonsStrukturPost]) {
    generateBreadcrumbShared(
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

if (urlMappingHargaJasaBoronganBangunanFromMoneyPage1MoneyPage2[cleanUrlJasaJasaKonsStrukturPost]) {
    generateBreadcrumbShared(
        urlMappingHargaJasaBoronganBangunanFromMoneyPage1MoneyPage2,
        cleanUrlJasaJasaKonsStrukturPost,
        [
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Pembuatan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-pembuatan.html' },
            { name: 'Perbandingan Jasa Pembuatan', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-pembuatan.html' },
            { name: 'Jasa Pembuatan', url: 'https://www.betonjayareadymix.com/p/jasa-pembuatan.html' },
            { name: 'Jasa Pembuatan Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-pembuatan-bangunan.html' },
            { name: 'Harga Jasa Pembuatan Bangunan', url: 'https://www.betonjayareadymix.com/2018/09/harga-jasa-pembuatan-bangunan.html' },
            { name: 'Harga Jasa Borongan Bangunan', url: 'https://www.betonjayareadymix.com/2018/09/harga-jasa-borongan-bangunan.html' }
        ],
        'JASA_KONSTRUKSI'
    );
}

if (urlMappingHargaJasaBoronganBangunanFromMoneyPage1MoneyChild[cleanUrlJasaJasaKonsStrukturPost]) {
    generateBreadcrumbShared(
        urlMappingHargaJasaBoronganBangunanFromMoneyPage1MoneyChild,
        cleanUrlJasaJasaKonsStrukturPost,
        [
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Pembuatan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-pembuatan.html' },
            { name: 'Perbandingan Jasa Pembuatan', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-pembuatan.html' },
            { name: 'Jasa Pembuatan', url: 'https://www.betonjayareadymix.com/p/jasa-pembuatan.html' },
            { name: 'Jasa Pembuatan Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-pembuatan-bangunan.html' },
            { name: 'Harga Jasa Pembuatan Bangunan', url: 'https://www.betonjayareadymix.com/2018/09/harga-jasa-pembuatan-bangunan.html' },
            { name: 'Harga Jasa Borongan Bangunan', url: 'https://www.betonjayareadymix.com/2018/09/harga-jasa-borongan-bangunan.html' }
        ],
        'JASA_KONSTRUKSI'
    );
}

if (urlMappingJasaPembuatanRumahFromMoneyMaster2MoneyPage[cleanUrlJasaJasaKonsStrukturPost]) {
    generateBreadcrumbShared(
        urlMappingJasaPembuatanRumahFromMoneyMaster2MoneyPage,
        cleanUrlJasaJasaKonsStrukturPost,
        [
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Pembuatan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-pembuatan.html' },
            { name: 'Perbandingan Jasa Pembuatan', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-pembuatan.html' },
            { name: 'Jasa Pembuatan', url: 'https://www.betonjayareadymix.com/p/jasa-pembuatan.html' },
            { name: 'Jasa Pembuatan Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-pembuatan-bangunan.html' },
            { name: 'Jasa Pembuatan Rumah', url: 'https://www.betonjayareadymix.com/p/jasa-pembuatan-rumah.html' }
        ],
        'JASA_KONSTRUKSI'
    );
}

if (urlMappingHargaJasaPembuatanRumahFromMoneyPageMoneyPage1[cleanUrlJasaJasaKonsStrukturPost]) {
    generateBreadcrumbShared(
        urlMappingHargaJasaPembuatanRumahFromMoneyPageMoneyPage1,
        cleanUrlJasaJasaKonsStrukturPost,
        [
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Pembuatan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-pembuatan.html' },
            { name: 'Perbandingan Jasa Pembuatan', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-pembuatan.html' },
            { name: 'Jasa Pembuatan', url: 'https://www.betonjayareadymix.com/p/jasa-pembuatan.html' },
            { name: 'Jasa Pembuatan Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-pembuatan-bangunan.html' },
            { name: 'Jasa Pembuatan Rumah', url: 'https://www.betonjayareadymix.com/p/jasa-pembuatan-rumah.html' },
            { name: 'Harga Jasa Pembuatan Rumah', url: 'https://www.betonjayareadymix.com/2018/09/harga-jasa-pembuatan-rumah.html' }
        ],
        'JASA_KONSTRUKSI'
    );
}

if (urlMappingHargaJasaBoronganRumahFromMoneyPage1MoneyPage2[cleanUrlJasaJasaKonsStrukturPost]) {
    generateBreadcrumbShared(
        urlMappingHargaJasaBoronganRumahFromMoneyPage1MoneyPage2,
        cleanUrlJasaJasaKonsStrukturPost,
        [
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Pembuatan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-pembuatan.html' },
            { name: 'Perbandingan Jasa Pembuatan', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-pembuatan.html' },
            { name: 'Jasa Pembuatan', url: 'https://www.betonjayareadymix.com/p/jasa-pembuatan.html' },
            { name: 'Jasa Pembuatan Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-pembuatan-bangunan.html' },
            { name: 'Jasa Pembuatan Rumah', url: 'https://www.betonjayareadymix.com/p/jasa-pembuatan-rumah.html' },
            { name: 'Harga Jasa Pembuatan Rumah', url: 'https://www.betonjayareadymix.com/2018/09/harga-jasa-pembuatan-rumah.html' },
            { name: 'Harga Jasa Borongan Rumah', url: 'https://www.betonjayareadymix.com/2018/09/harga-jasa-borongan-rumah.html' }
        ],
        'JASA_KONSTRUKSI'
    );
}

if (urlMappingHargaJasaBoronganRumahFromMoneyPage1MoneyChild[cleanUrlJasaJasaKonsStrukturPost]) {
    generateBreadcrumbShared(
        urlMappingHargaJasaBoronganRumahFromMoneyPage1MoneyChild,
        cleanUrlJasaJasaKonsStrukturPost,
        [
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Pembuatan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-pembuatan.html' },
            { name: 'Perbandingan Jasa Pembuatan', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-pembuatan.html' },
            { name: 'Jasa Pembuatan', url: 'https://www.betonjayareadymix.com/p/jasa-pembuatan.html' },
            { name: 'Jasa Pembuatan Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-pembuatan-bangunan.html' },
            { name: 'Jasa Pembuatan Rumah', url: 'https://www.betonjayareadymix.com/p/jasa-pembuatan-rumah.html' },
            { name: 'Harga Jasa Pembuatan Rumah', url: 'https://www.betonjayareadymix.com/2018/09/harga-jasa-pembuatan-rumah.html' },
            { name: 'Harga Jasa Borongan Rumah', url: 'https://www.betonjayareadymix.com/2018/09/harga-jasa-borongan-rumah.html' }
        ],
        'JASA_KONSTRUKSI'
    );
}

if (urlMappingJasaBangunRumahFromMoneyMaster3MoneyPage[cleanUrlJasaJasaKonsStrukturPost]) {
    generateBreadcrumbShared(
        urlMappingJasaBangunRumahFromMoneyMaster3MoneyPage,
        cleanUrlJasaJasaKonsStrukturPost,
        [
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Pembuatan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-pembuatan.html' },
            { name: 'Perbandingan Jasa Pembuatan', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-pembuatan.html' },
            { name: 'Jasa Pembuatan', url: 'https://www.betonjayareadymix.com/p/jasa-pembuatan.html' },
            { name: 'Jasa Pembuatan Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-pembuatan-bangunan.html' },
            { name: 'Jasa Pembuatan Rumah', url: 'https://www.betonjayareadymix.com/p/jasa-pembuatan-rumah.html' },
            { name: 'Jasa Bangun Rumah', url: 'https://www.betonjayareadymix.com/p/jasa-bangun-rumah.html' }
        ],
        'JASA_KONSTRUKSI'
    );
}

if (urlMappingJasaBangunRumahFromMoneyMaster3MoneyChild[cleanUrlJasaJasaKonsStrukturPost]) {
    generateBreadcrumbShared(
        urlMappingJasaBangunRumahFromMoneyMaster3MoneyChild,
        cleanUrlJasaJasaKonsStrukturPost,
        [
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Pembuatan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-pembuatan.html' },
            { name: 'Perbandingan Jasa Pembuatan', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-pembuatan.html' },
            { name: 'Jasa Pembuatan', url: 'https://www.betonjayareadymix.com/p/jasa-pembuatan.html' },
            { name: 'Jasa Pembuatan Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-pembuatan-bangunan.html' },
            { name: 'Jasa Pembuatan Rumah', url: 'https://www.betonjayareadymix.com/p/jasa-pembuatan-rumah.html' },
            { name: 'Jasa Bangun Rumah', url: 'https://www.betonjayareadymix.com/p/jasa-bangun-rumah.html' }
        ],
        'JASA_KONSTRUKSI'
    );
}

// ═══════════════════════════════════════════════════════
// [BLOK 6] JASA KONSTRUKSI GUDANG LOGISTIK
// ═══════════════════════════════════════════════════════

if (urlMappingJasaPembuatanGudangFromFromMoneyMaster2MoneyPage[cleanUrlJasaJasaKonsStrukturPost]) {
    generateBreadcrumbShared(
        urlMappingJasaPembuatanGudangFromFromMoneyMaster2MoneyPage,
        cleanUrlJasaJasaKonsStrukturPost,
        [
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Pembuatan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-pembuatan.html' },
            { name: 'Perbandingan Jasa Pembuatan', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-pembuatan.html' },
            { name: 'Jasa Pembuatan', url: 'https://www.betonjayareadymix.com/p/jasa-pembuatan.html' },
            { name: 'Jasa Pembuatan Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-pembuatan-bangunan.html' },
            { name: 'Jasa Pembuatan Gudang', url: 'https://www.betonjayareadymix.com/p/jasa-pembuatan-gudang.html' }
        ],
        'JASA_KONSTRUKSI'
    );
}

if (urlMappingHargaJasaPembuatanGudangFromFromMoneyPageMoneyPage1[cleanUrlJasaJasaKonsStrukturPost]) {
    generateBreadcrumbShared(
        urlMappingHargaJasaPembuatanGudangFromFromMoneyPageMoneyPage1,
        cleanUrlJasaJasaKonsStrukturPost,
        [
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Pembuatan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-pembuatan.html' },
            { name: 'Perbandingan Jasa Pembuatan', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-pembuatan.html' },
            { name: 'Jasa Pembuatan', url: 'https://www.betonjayareadymix.com/p/jasa-pembuatan.html' },
            { name: 'Jasa Pembuatan Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-pembuatan-bangunan.html' },
            { name: 'Jasa Pembuatan Gudang', url: 'https://www.betonjayareadymix.com/p/jasa-pembuatan-gudang.html' },
            { name: 'Harga Jasa Pembuatan Gudang', url: 'https://www.betonjayareadymix.com/2018/09/harga-jasa-pembuatan-gudang.html' }
        ],
        'JASA_KONSTRUKSI'
    );
}

// ═══════════════════════════════════════════════════════
// [BLOK 7] JASA KONSTRUKSI PABRIK / COLD STORAGE / BENGKEL / WORKSHOP
// ═══════════════════════════════════════════════════════

if (urlMappingJasaKonstruksiPabrikIndustriFromMoneyPageMoneyPage1[cleanUrlJasaJasaKonsStrukturPost]) {
    generateBreadcrumbShared(
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

if (urlMappingJasaKonstruksiColdStorageModernFromMoneyPageMoneyPage1[cleanUrlJasaJasaKonsStrukturPost]) {
    generateBreadcrumbShared(
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
    generateBreadcrumbShared(
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
    generateBreadcrumbShared(
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

// ═══════════════════════════════════════════════════════
// [BLOK 8] JASA LAPANGAN OLAHRAGA
// ═══════════════════════════════════════════════════════

if (urlMappingJasaPembuatanLapanganOlahRagaFromMoneyPageMoneyChild[cleanUrlJasaJasaKonsStrukturPost]) {
    generateBreadcrumbShared(
        urlMappingJasaPembuatanLapanganOlahRagaFromMoneyPageMoneyChild,
        cleanUrlJasaJasaKonsStrukturPost,
        [
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Lapangan Olahraga', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-lapangan-olahraga.html' },
            { name: 'Perbandingan Jasa Lapangan Olahraga', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-lapangan-olahraga.html' },
            { name: 'Jasa Lapangan Olahraga', url: 'https://www.betonjayareadymix.com/p/jasa-lapangan-olahraga.html' },
            { name: 'Jasa Pembuatan Lapangan Olahraga', url: 'https://www.betonjayareadymix.com/p/jasa-pembuatan-lapangan-olahraga.html' }
        ],
        'JASA_KONSTRUKSI'
    );
}

if (urlMappingJasaPembuatanLapanganFutsalFromMoneyPage1MoneyPage2[cleanUrlJasaJasaKonsStrukturPost]) {
    generateBreadcrumbShared(
        urlMappingJasaPembuatanLapanganFutsalFromMoneyPage1MoneyPage2,
        cleanUrlJasaJasaKonsStrukturPost,
        [
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Lapangan Olahraga', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-lapangan-olahraga.html' },
            { name: 'Perbandingan Jasa Lapangan Olahraga', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-lapangan-olahraga.html' },
            { name: 'Jasa Lapangan Olahraga', url: 'https://www.betonjayareadymix.com/p/jasa-lapangan-olahraga.html' },
            { name: 'Jasa Pembuatan Lapangan Olahraga', url: 'https://www.betonjayareadymix.com/p/jasa-pembuatan-lapangan-olahraga.html' },
            { name: 'Jasa Pembuatan Lapangan Futsal', url: 'https://www.betonjayareadymix.com/p/jasa-pembuatan-lapangan-futsal.html' }
        ],
        'JASA_KONSTRUKSI'
    );
}

if (urlMappingJasaPembuatanLapanganFutsalFromMoneyPage1MoneyChild[cleanUrlJasaJasaKonsStrukturPost]) {
    generateBreadcrumbShared(
        urlMappingJasaPembuatanLapanganFutsalFromMoneyPage1MoneyChild,
        cleanUrlJasaJasaKonsStrukturPost,
        [
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Lapangan Olahraga', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-lapangan-olahraga.html' },
            { name: 'Perbandingan Jasa Lapangan Olahraga', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-lapangan-olahraga.html' },
            { name: 'Jasa Lapangan Olahraga', url: 'https://www.betonjayareadymix.com/p/jasa-lapangan-olahraga.html' },
            { name: 'Jasa Pembuatan Lapangan Olahraga', url: 'https://www.betonjayareadymix.com/p/jasa-pembuatan-lapangan-olahraga.html' },
            { name: 'Jasa Pembuatan Lapangan Futsal', url: 'https://www.betonjayareadymix.com/p/jasa-pembuatan-lapangan-futsal.html' }
        ],
        'JASA_KONSTRUKSI'
    );
}

if (urlMappingJasaPembuatanLapanganBasketFromMoneyPage1MoneyPage2[cleanUrlJasaJasaKonsStrukturPost]) {
    generateBreadcrumbShared(
        urlMappingJasaPembuatanLapanganBasketFromMoneyPage1MoneyPage2,
        cleanUrlJasaJasaKonsStrukturPost,
        [
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Lapangan Olahraga', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-lapangan-olahraga.html' },
            { name: 'Perbandingan Jasa Lapangan Olahraga', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-lapangan-olahraga.html' },
            { name: 'Jasa Lapangan Olahraga', url: 'https://www.betonjayareadymix.com/p/jasa-lapangan-olahraga.html' },
            { name: 'Jasa Pembuatan Lapangan Olahraga', url: 'https://www.betonjayareadymix.com/p/jasa-pembuatan-lapangan-olahraga.html' },
            { name: 'Jasa Pembuatan Lapangan Basket', url: 'https://www.betonjayareadymix.com/p/jasa-pembuatan-lapangan-basket.html' }
        ],
        'JASA_KONSTRUKSI'
    );
}

if (urlMappingJasaPembuatanLapanganSepakbolaFromMoneyPage1MoneyPage2[cleanUrlJasaJasaKonsStrukturPost]) {
    generateBreadcrumbShared(
        urlMappingJasaPembuatanLapanganSepakbolaFromMoneyPage1MoneyPage2,
        cleanUrlJasaJasaKonsStrukturPost,
        [
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Lapangan Olahraga', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-lapangan-olahraga.html' },
            { name: 'Perbandingan Jasa Lapangan Olahraga', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-lapangan-olahraga.html' },
            { name: 'Jasa Lapangan Olahraga', url: 'https://www.betonjayareadymix.com/p/jasa-lapangan-olahraga.html' },
            { name: 'Jasa Pembuatan Lapangan Olahraga', url: 'https://www.betonjayareadymix.com/p/jasa-pembuatan-lapangan-olahraga.html' },
            { name: 'Jasa Pembuatan Lapangan Sepakbola', url: 'https://www.betonjayareadymix.com/p/jasa-pembuatan-lapangan-sepakbola.html' }
        ],
        'JASA_KONSTRUKSI'
    );
}

if (urlMappingJasaPembuatanLapanganTenisFromMoneyPage1MoneyPage2[cleanUrlJasaJasaKonsStrukturPost]) {
    generateBreadcrumbShared(
        urlMappingJasaPembuatanLapanganTenisFromMoneyPage1MoneyPage2,
        cleanUrlJasaJasaKonsStrukturPost,
        [
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Lapangan Olahraga', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-lapangan-olahraga.html' },
            { name: 'Perbandingan Jasa Lapangan Olahraga', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-lapangan-olahraga.html' },
            { name: 'Jasa Lapangan Olahraga', url: 'https://www.betonjayareadymix.com/p/jasa-lapangan-olahraga.html' },
            { name: 'Jasa Pembuatan Lapangan Olahraga', url: 'https://www.betonjayareadymix.com/p/jasa-pembuatan-lapangan-olahraga.html' },
            { name: 'Jasa Pembuatan Lapangan Tenis', url: 'https://www.betonjayareadymix.com/p/jasa-pembuatan-lapangan-tenis.html' }
        ],
        'JASA_KONSTRUKSI'
    );
}

if (urlMappingJasaPembuatanLapanganBadmintonFromMoneyPage1MoneyPage2[cleanUrlJasaJasaKonsStrukturPost]) {
    generateBreadcrumbShared(
        urlMappingJasaPembuatanLapanganBadmintonFromMoneyPage1MoneyPage2,
        cleanUrlJasaJasaKonsStrukturPost,
        [
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Lapangan Olahraga', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-lapangan-olahraga.html' },
            { name: 'Perbandingan Jasa Lapangan Olahraga', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-lapangan-olahraga.html' },
            { name: 'Jasa Lapangan Olahraga', url: 'https://www.betonjayareadymix.com/p/jasa-lapangan-olahraga.html' },
            { name: 'Jasa Pembuatan Lapangan Olahraga', url: 'https://www.betonjayareadymix.com/p/jasa-pembuatan-lapangan-olahraga.html' },
            { name: 'Jasa Pembuatan Lapangan Badminton', url: 'https://www.betonjayareadymix.com/p/jasa-pembuatan-lapangan-badminton.html' }
        ],
        'JASA_KONSTRUKSI'
    );
}

if (urlMappingJasaPembuatanLapanganVoliFromMoneyPage1MoneyPage2[cleanUrlJasaJasaKonsStrukturPost]) {
    generateBreadcrumbShared(
        urlMappingJasaPembuatanLapanganVoliFromMoneyPage1MoneyPage2,
        cleanUrlJasaJasaKonsStrukturPost,
        [
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Lapangan Olahraga', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-lapangan-olahraga.html' },
            { name: 'Perbandingan Jasa Lapangan Olahraga', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-lapangan-olahraga.html' },
            { name: 'Jasa Lapangan Olahraga', url: 'https://www.betonjayareadymix.com/p/jasa-lapangan-olahraga.html' },
            { name: 'Jasa Pembuatan Lapangan Olahraga', url: 'https://www.betonjayareadymix.com/p/jasa-pembuatan-lapangan-olahraga.html' },
            { name: 'Jasa Pembuatan Lapangan Voli', url: 'https://www.betonjayareadymix.com/p/jasa-pembuatan-lapangan-voli.html' }
        ],
        'JASA_KONSTRUKSI'
    );
}

if (urlMappingJasaPembuatanLapanganVoliFromMoneyPage1MoneyChild[cleanUrlJasaJasaKonsStrukturPost]) {
    generateBreadcrumbShared(
        urlMappingJasaPembuatanLapanganVoliFromMoneyPage1MoneyChild,
        cleanUrlJasaJasaKonsStrukturPost,
        [
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Lapangan Olahraga', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-lapangan-olahraga.html' },
            { name: 'Perbandingan Jasa Lapangan Olahraga', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-lapangan-olahraga.html' },
            { name: 'Jasa Lapangan Olahraga', url: 'https://www.betonjayareadymix.com/p/jasa-lapangan-olahraga.html' },
            { name: 'Jasa Pembuatan Lapangan Olahraga', url: 'https://www.betonjayareadymix.com/p/jasa-pembuatan-lapangan-olahraga.html' },
            { name: 'Jasa Pembuatan Lapangan Voli', url: 'https://www.betonjayareadymix.com/p/jasa-pembuatan-lapangan-voli.html' }
        ],
        'JASA_KONSTRUKSI'
    );
}

if (urlMappingJasaPembuatanLapanganSerbagunaFromMoneyPage1MoneyPage2[cleanUrlJasaJasaKonsStrukturPost]) {
    generateBreadcrumbShared(
        urlMappingJasaPembuatanLapanganSerbagunaFromMoneyPage1MoneyPage2,
        cleanUrlJasaJasaKonsStrukturPost,
        [
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Lapangan Olahraga', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-lapangan-olahraga.html' },
            { name: 'Perbandingan Jasa Lapangan Olahraga', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-lapangan-olahraga.html' },
            { name: 'Jasa Lapangan Olahraga', url: 'https://www.betonjayareadymix.com/p/jasa-lapangan-olahraga.html' },
            { name: 'Jasa Pembuatan Lapangan Olahraga', url: 'https://www.betonjayareadymix.com/p/jasa-pembuatan-lapangan-olahraga.html' },
            { name: 'Jasa Pembuatan Lapangan Serbaguna', url: 'https://www.betonjayareadymix.com/p/jasa-pembuatan-lapangan-serbaguna.html' }
        ],
        'JASA_KONSTRUKSI'
    );
}

// ═══════════════════════════════════════════════════════
// [BLOK 9] JASA STRUKTUR KHUSUS (Kolam Renang, dll)
// ═══════════════════════════════════════════════════════

if (urlMappingKontraktorKolamRenangFromMoneyPageMoneyPage1[cleanUrlJasaJasaKonsStrukturPost]) {
    generateBreadcrumbShared(
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
    generateBreadcrumbShared(
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
    generateBreadcrumbShared(
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
    generateBreadcrumbShared(
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

// ═══════════════════════════════════════════════════════
// Penutup fungsi initJasaKonsStrukturPost
} // <-- penutup function initJasaKonsStrukturPost
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initJasaKonsStrukturPost);
} else {
    initJasaKonsStrukturPost();
}
