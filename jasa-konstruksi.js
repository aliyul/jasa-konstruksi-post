 // Cek URL saat ini dan sesuaikan dengan kondisi yang diinginkan
// ============================================================
// 🔍 ENTITY TYPE: JASA
// ATURAN: JASA TIDAK BOLEH MENGGUNAKAN MONEY_MASTER
// ✅ Gunakan: MONEY_PAGE (Komersial 60% + Transaksional 40%) atau SUB1/SUB2
// ❌ Dilarang: MONEY_MASTER untuk JASA
// ============================================================

// ============================================================
// JASA KONSTRUKSI - PILLAR (LEVEL 1)
// ============================================================
// 🧠 SEO NOTE: PILLAR ini adalah halaman utama untuk semua layanan jasa konstruksi.
// Intent: Informasional (90%)
// Breadcrumb: Home > Jasa Konstruksi (2 level)
// ============================================================
/*
const urlMappingJasaKonsPillar = {
  // ============================================================
  // [PILLAR] - TOPICAL AUTHORITY
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-konstruksi.html": "Jasa Konstruksi",  // TYPE: PILLAR
};*/

// ============================================================
// 📁 LEVEL 2 - SUB2 (Turunan dari PILLAR Jasa Konstruksi)
// ============================================================

const urlMappingJasaKonsFromPillarSub2 = {
  // ============================================================
  // [SUB2] - SUB-PILLAR TIPE 2 (KATEGORI LAYANAN UTAMA)
  // 🧠 TYPE: SUB2 (Intent Informasional 60%)
  // Breadcrumb: Home > Jasa Konstruksi > [Nama Layanan] (3 level)
  // ============================================================
  "https://www.betonjayareadymix.com/p/daftar-jasa-alat-konstruksi.html": "Daftar Jasa Alat Konstruksi",  // TYPE: SUB2
  "https://www.betonjayareadymix.com/p/daftar-jasa-struktur-konstruksi.html": "Daftar Jasa Struktur Konstruksi",  // TYPE: SUB2
  "https://www.betonjayareadymix.com/p/daftar-jasa-pondasi-perkuatan-tanah.html": "Daftar Jasa Pondasi & Perkuatan Tanah",  // TYPE: SUB2
  "https://www.betonjayareadymix.com/p/daftar-jasa-saluran-drainase.html": "Daftar Jasa Saluran & Drainase",  // TYPE: SUB2
  "https://www.betonjayareadymix.com/p/daftar-jasa-jalan-perkerasan.html": "Daftar Jasa Jalan & Perkerasan",  // TYPE: SUB2
  "https://www.betonjayareadymix.com/p/daftar-jasa-pematangan-lahan.html": "Daftar Jasa Pematangan Lahan",  // TYPE: SUB2
  "https://www.betonjayareadymix.com/p/daftar-jasa-uji-tanah.html": "Daftar Jasa Uji Tanah",  // TYPE: SUB2
  "https://www.betonjayareadymix.com/p/daftar-jasa-cutting-beton.html": "Daftar Jasa Cutting Beton",  // TYPE: SUB2
  "https://www.betonjayareadymix.com/p/daftar-jasa-bongkar-bangunan.html": "Daftar Jasa Bongkar Bangunan",  // TYPE: SUB2
  "https://www.betonjayareadymix.com/p/daftar-jasa-buang-puing.html": "Daftar Jasa Buang Puing",  // TYPE: SUB2
  "https://www.betonjayareadymix.com/p/daftar-jasa-pengeboran.html": "Daftar Jasa Pengeboran",  // TYPE: SUB2
  "https://www.betonjayareadymix.com/p/daftar-jasa-perkuatan-tanah-longsor.html": "Daftar Jasa Perkuatan Tanah Longsor",  // TYPE: SUB2
  "https://www.betonjayareadymix.com/p/daftar-jasa-pembatas-pengaman.html": "Daftar Jasa Pembatas Pengaman",  // TYPE: SUB2
  "https://www.betonjayareadymix.com/p/daftar-jasa-renovasi.html": "Daftar Jasa Renovasi",  // TYPE: SUB2
  "https://www.betonjayareadymix.com/p/daftar-jasa-finishing.html": "Daftar Jasa Finishing",  // TYPE: SUB2
  "https://www.betonjayareadymix.com/p/daftar-jasa-instalasi-listrik.html": "Daftar Jasa Instalasi Listrik",  // TYPE: SUB2
  "https://www.betonjayareadymix.com/p/daftar-jasa-perawatan-perbaikan-bangunan.html": "Daftar Jasa Perawatan Perbaikan Bangunan",  // TYPE: SUB2
  "https://www.betonjayareadymix.com/p/daftar-jasa-perbaikan-infrastruktur.html": "Daftar Jasa Perbaikan Infrastruktur"  // TYPE: SUB2
};

// ============================================================
// 🔴 REDIRECT NOTES - JASA KONSTRUKSI (PILLAR)
// ============================================================
/*
🧠 SEO CANNIBAL FIX - REDIRECT PLAN:

| No | From URL | To URL | Type | Alasan SEO |
|----|----------|--------|------|------------|
| 1 | /p/jasa-konstruksi-bangunan.html | /p/jasa-konstruksi.html | 301 | Duplikasi intent dengan PILLAR utama |
| 2 | /p/jasa-konstruksi-infrastruktur.html | /p/jasa-konstruksi.html | 301 | Intent sama, gabung ke PILLAR |
| 3 | /p/jasa-konstruksi-indonesia.html | /p/jasa-konstruksi.html | 301 | Terlalu umum, cukup PILLAR utama |
*/

// ============================================================
// 📁 LEVEL 3 - SUB1 (Turunan dari SUB2 - PANDUAN / BRIDGE KE MONEY_PAGE)
// 🧠 TYPE: SUB1 (Intent Komersial 70%)
// Breadcrumb: Home > Jasa Konstruksi > [SUB2] > [Panduan] (4 level)
// ============================================================
const urlMappingJasaAlatKonstruksiBridgeFromSub2Sub1 = {
  "https://www.betonjayareadymix.com/p/perbandingan-jasa-alat-konstruksi.html": "Perbandingan Jasa Alat Konstruksi", // (Tipe: Sub-Pillar Tipe 1)
"https://www.betonjayareadymix.com/p/cara-memilih-jasa-alat-konstruksi.html": "Cara Memilih Jasa Alat Konstruksi",  //(Tipe: Sub-Pillar Tipe 1)
"https://www.betonjayareadymix.com/p/kelebihan-kekurangan-jasa-alat-konstruksi.html": "Kelebihan & Kekurangan Jasa Alat Konstruksi" //(Tipe: Sub-Pillar Tipe 1)
};

const urlMappingJasaAlatKonstruksiBridgeFromSub2Sub1MoneyPage = {
  "https://www.betonjayareadymix.com/p/estimasi-biaya-jasa-alat-konstruksi.html": "Estimasi Biaya Jasa Alat Konstruksi"  // TYPE: MoneyPage
};

const urlMappingStrukturBridgeFromSub2Sub1 = {
  //"https://www.betonjayareadymix.com/p/panduan-membangun-bangunan.html": "Panduan Membangun Bangunan"  // TYPE: SUB1
   "https://www.betonjayareadymix.com/p/perbandingan-jasa-struktur-konstruksi.html": "Perbandingan Jasa Struktur Konstruksi"  // TYPE: SUB1
};

const urlMappingRenovasiBridgeFromSub2Sub1 = {
/*
  "https://www.betonjayareadymix.com/p/panduan-renovasi-bangunan.html": "Panduan Renovasi Bangunan",  // TYPE: SUB1
  "https://www.betonjayareadymix.com/p/panduan-renovasi-infrastruktur.html": "Panduan Renovasi Infrastruktur",  // TYPE: SUB1
  */
   "https://www.betonjayareadymix.com/p/perbandingan-jasa-renovasi.html": "Perbandingan Jasa Renovasi"  // TYPE: SUB1
};

const urlMappingFinishingBridgeFromSub2Sub1 = {
  //"https://www.betonjayareadymix.com/p/panduan-finishing-bangunan.html": "Panduan Finishing Bangunan",  // TYPE: SUB1
  //"https://www.betonjayareadymix.com/p/panduan-finishing-infrastruktur.html": "Panduan Finishing Infrastruktur"  // TYPE: SUB1
   "https://www.betonjayareadymix.com/p/perbandingan-jasa-finishing.html": "Perbandingan Jasa Finishing"  // TYPE: SUB1
};

const urlMappingPerawatanPerbaikanBridgeFromSub2Sub1 = {
  //"https://www.betonjayareadymix.com/p/panduan-perbaikan-bangunan.html": "Panduan Perbaikan Bangunan"  // TYPE: SUB1
   "https://www.betonjayareadymix.com/p/perawatan-vs-perbaikan-bangunan.html": "Perbandingan Jasa Perawatan & Perbaikan Bangunan"  // TYPE: SUB1
};

const urlMappingJalanPerkerasanBridgeFromSub2Sub1 = {
  //"https://www.betonjayareadymix.com/p/panduan-pembuatan-infrastruktur.html": "Panduan Pembuatan Infrastruktur"  // TYPE: SUB1
 "https://www.betonjayareadymix.com/p/perbandingan-jasa-jalan-perkerasan.html": "Perbandingan Jasa Jalan & Perkerasan"  // TYPE: SUB1
};

const urlMappingInfrastrukturBridgeFromSub2Sub1 = {
  //"https://www.betonjayareadymix.com/p/panduan-perbaikan-infrastruktur.html": "Panduan Perbaikan Infrastruktur"  // TYPE: SUB1
  "https://www.betonjayareadymix.com/p/perbandingan-perbaikan-infrastruktur.html": "Perbandingan Jasa Perbaikan Infrastruktur"  // TYPE: SUB1
};

const urlMappingJasaPondasiBridgeFromSub2Sub1 = {
  //"https://www.betonjayareadymix.com/p/panduan-perbaikan-infrastruktur.html": "Panduan Perbaikan Infrastruktur"  // TYPE: SUB1
  "https://www.betonjayareadymix.com/p/perbandingan-pondasi-perkuatan-tanah.html": "Perbandingan Jasa Pondasi & Perkuatan Tanah"  // TYPE: SUB1
};
const urlMappingJasaSaluranDrainaseBridgeFromSub2Sub1 = {
  //"https://www.betonjayareadymix.com/p/panduan-perbaikan-infrastruktur.html": "Panduan Perbaikan Infrastruktur"  // TYPE: SUB1
  "https://www.betonjayareadymix.com/p/perbandingan-jasa-saluran-drainase.html": "Perbandingan Jasa Saluran & Drainase"  // TYPE: SUB1
};

const urlMappingJasaPematanganLahanBridgeFromSub2Sub1 = {
  //"https://www.betonjayareadymix.com/p/panduan-perbaikan-infrastruktur.html": "Panduan Perbaikan Infrastruktur"  // TYPE: SUB1
  "https://www.betonjayareadymix.com/p/perbandingan-jasa-pematangan-lahan.html": "Perbandingan Jasa Pematangan Lahan"  // TYPE: SUB1
};
const urlMappingJasaJasaUjiTanahBridgeFromSub2Sub1 = {
  //"https://www.betonjayareadymix.com/p/panduan-perbaikan-infrastruktur.html": "Panduan Perbaikan Infrastruktur"  // TYPE: SUB1
  "https://www.betonjayareadymix.com/p/perbandingan-jasa-uji-tanah.html": "Perbandingan Jasa Jasa Uji Tanah"  // TYPE: SUB1
};
const urlMappingJasaCuttingBetonBridgeFromSub2Sub1 = {
  //"https://www.betonjayareadymix.com/p/panduan-perbaikan-infrastruktur.html": "Panduan Perbaikan Infrastruktur"  // TYPE: SUB1
  "https://www.betonjayareadymix.com/p/perbandingan-jasa-saluran-drainase.html": "Perbandingan Jasa Cutting Beton"  // TYPE: SUB1
};
const urlMappingJasaBongkarBangunanBridgeFromSub2Sub1 = {
  //"https://www.betonjayareadymix.com/p/panduan-perbaikan-infrastruktur.html": "Panduan Perbaikan Infrastruktur"  // TYPE: SUB1
  "https://www.betonjayareadymix.com/p/perbandingan-jasa-bongkar-bangunan.html": "Perbandingan Jasa Bongkar Bangunan"  // TYPE: SUB1
};
const urlMappingJasaBuangPuingBridgeFromSub2Sub1 = {
  //"https://www.betonjayareadymix.com/p/panduan-perbaikan-infrastruktur.html": "Panduan Perbaikan Infrastruktur"  // TYPE: SUB1
  "https://www.betonjayareadymix.com/p/perbandingan-jasa-buang-puing.html": "Perbandingan Jasa Buang Puing"  // TYPE: SUB1
};
const urlMappingJasaPengeboranBridgeFromSub2Sub1 = {
  //"https://www.betonjayareadymix.com/p/panduan-perbaikan-infrastruktur.html": "Panduan Perbaikan Infrastruktur"  // TYPE: SUB1
  "https://www.betonjayareadymix.com/p/perbandingan-jasa-pengeboran.html": "Perbandingan Jasa Pengeboran"  // TYPE: SUB1
};
const urlMappingJasaPerkuatanTanahLongsorBridgeFromSub2Sub1 = {
  //"https://www.betonjayareadymix.com/p/panduan-perbaikan-infrastruktur.html": "Panduan Perbaikan Infrastruktur"  // TYPE: SUB1
  "https://www.betonjayareadymix.com/p/perbandingan-jasa-perkuatan-tanah.html": "Perbandingan Jasa Perkuatan Tanah Longsor"  // TYPE: SUB1
};
const urlMappingJasaPembatasPengamanBridgeFromSub2Sub1 = {
  //"https://www.betonjayareadymix.com/p/panduan-perbaikan-infrastruktur.html": "Panduan Perbaikan Infrastruktur"  // TYPE: SUB1
  "https://www.betonjayareadymix.com/p/perbandingan-jasa-pembatas-pengaman.html": "Perbandingan Jasa Pembatas Pengaman"  // TYPE: SUB1
};
const urlMappingJasaInstalasiListrikBridgeFromSub2Sub1 = {
  //"https://www.betonjayareadymix.com/p/panduan-perbaikan-infrastruktur.html": "Panduan Perbaikan Infrastruktur"  // TYPE: SUB1
  "https://www.betonjayareadymix.com/p/perbandingan-jasa-instalasi-listrik.html": "Perbandingan Jasa Instalasi Listrik"  // TYPE: SUB1
};
// ============================================================
// 📁 JASA ALAT KONSTRUKSI (ENTITY: SEWA/RENTAL - BUKAN JASA)
// ⚠️ PERHATIAN: Ini adalah ENTITY SEWA/RENTAL, BUKAN JASA
// Maka TYPE MONEY_MASTER diperbolehkan
// ============================================================

// [PILLAR] - Sewa Alat Konstruksi (LEVEL 1 - ENTITY TERPISAH)
/*const urlMappingSewaAlatKonstruksiPillar = {
  "https://www.betonjayareadymix.com/p/sewa-alat-konstruksi.html": "Sewa Alat Konstruksi",  // TYPE: PILLAR
};*/

// [SUB2] - KATEGORI SEWA SPESIFIK (ENTITY SEWA/RENTAL)
const urlMappingSewaAlatFromPillarSub2 = {
  "https://www.betonjayareadymix.com/p/daftar-sewa-alat-proyek.html": "Daftar Sewa Alat Proyek",  // TYPE: SUB2 PARENT
  "https://www.betonjayareadymix.com/p/daftar-sewa-alat-berat.html": "Daftar Sewa Alat Berat",  // TYPE: SUB2 PARENT
  "https://www.betonjayareadymix.com/p/daftar-sewa-alat-ringan.html": "Daftar Sewa Alat Ringan",  // TYPE: SUB2 PARENT
  "https://www.betonjayareadymix.com/p/daftar-sewa-alat-pendukung.html": "Daftar Sewa Alat Pendukung"  // TYPE: SUB2 PARENT
};
const urlMappingSewaAlatProyekFromSub2Sub1 = {
  "https://www.betonjayareadymix.com/p/perbandingan-sewa-alat-proyek.html": "Perbandingan Sewa Alat Proyek"  // TYPE: SUB1 PARENT
};

const urlMappingSewaAlatProyekFromSub1MoneyMaster = {
  //"https://www.betonjayareadymix.com/p/harga-sewa-alat-proyek.html": "Harga Sewa Alat Proyek"  // TYPE: MoneyMaster
   "https://www.betonjayareadymix.com/p/sewa-alat-proyek.html": "Sewa Alat Proyek"  // TYPE: MoneyMaster
};

const urlMappingSewaAlatBeratFromSub2Sub1 = {
  "https://www.betonjayareadymix.com/p/perbandingan-sewa-alat-berat.html": "Perbandingan Sewa Alat Berat",  // TYPE: SUB1 PARENT
  "https://www.betonjayareadymix.com/p/perbandingan-sewa-excavator.html": "Perbandingan Sewa Excavator",  // TYPE: SUB1 PARENT
  "https://www.betonjayareadymix.com/p/perbandingan-sewa-bulldozer.html": "Perbandingan Sewa Bulldozer",  // TYPE: SUB1 PARENT
  "https://www.betonjayareadymix.com/p/perbandingan-sewa-crane.html": "Perbandingan Sewa Crane",  // TYPE: SUB1 PARENT
  "https://www.betonjayareadymix.com/p/perbandingan-sewa-conrete-paver.html": "Perbandingan Concrete Paver",  // TYPE: SUB1 PARENT
  "https://www.betonjayareadymix.com/p/perbandingan-sewa-forklift.html": "Perbandingan Sewa Forklift",  // TYPE: SUB1 PARENT
  "https://www.betonjayareadymix.com/p/perbandingan-sewa-wales-stoom.html": "Perbandingan Sewa Wales Stoom",  // TYPE: SUB1 PARENT
  "https://www.betonjayareadymix.com/p/perbandingan-sewa-wheel-loader.html": "Perbandingan Sewa Wheel Loader",  // TYPE: SUB1 PARENT
  "https://www.betonjayareadymix.com/p/perbandingan-sewa-backhoe-loader.html": "Perbandingan Sewa Backhoe Loader",  // TYPE: SUB1 PARENT
  "https://www.betonjayareadymix.com/p/perbandingan-sewa-alat-pancang.html": "Perbandingan Sewa Alat Pancang",  // TYPE: SUB1 PARENT
  "https://www.betonjayareadymix.com/p/perbandingan-sewa-trencher.html": "Perbandingan Sewa Trencher",  // TYPE: SUB1 PARENT
  "https://www.betonjayareadymix.com/p/perbandingan-sewa-vibro-roller.html": "Perbandingan Sewa Vibro Roller",  // TYPE: SUB1 PARENT
	
   "https://www.betonjayareadymix.com/p/durasi-sewa-alat-berat.html": "Durasi Sewa Alat Berat"  // TYPE: SUB1 pendukung
};
const urlMappingSewaAlatBeratFromSub1MoneyMaster = {
   "https://www.betonjayareadymix.com/p/sewa-alat-berat.html": "Sewa Alat Berat",  // TYPE: MoneyMaster PARENT
  "https://www.betonjayareadymix.com/p/sewa-excavator.html": "Sewa Excavator",  // TYPE: MoneyMaster PARENT
 // "https://www.betonjayareadymix.com/p/sewa-beko.html": "Sewa Beko",  // TYPE: MoneyMaster PARENT
  "https://www.betonjayareadymix.com/p/sewa-forklift.html": "Sewa Forklift",  // TYPE: MoneyMaster PARENT
  "https://www.betonjayareadymix.com/p/sewa-bulldozer.html": "Sewa Bulldozer",  // TYPE: MoneyMaster PARENT
  "https://www.betonjayareadymix.com/p/sewa-vibro-roller.html": "Sewa Vibro Roller",  // TYPE: MoneyMaster PARENT
  "https://www.betonjayareadymix.com/p/sewa-wales-stoom.html": "Sewa Wales Stoom",  // TYPE: MoneyMaster PARENT
  "https://www.betonjayareadymix.com/p/sewa-crane.html": "Sewa Crane",  // TYPE: MoneyMaster PARENT
  "https://www.betonjayareadymix.com/p/sewa-self-loader.html": "Sewa Self Loader",  // TYPE: MoneyMaster PARENT
  "https://www.betonjayareadymix.com/p/sewa-wheel-loader.html": "Sewa Wheel Loader",  // TYPE: MoneyMaster PARENT
  "https://www.betonjayareadymix.com/p/sewa-tandem-roller.html": "Sewa Tandem Roller",  // TYPE: MoneyMaster PARENT
  "https://www.betonjayareadymix.com/p/sewa-backhoe-loader.html": "Sewa Backhoe Loader",  // TYPE: MoneyMaster PARENT
  "https://www.betonjayareadymix.com/p/sewa-baby-roller.html": "Sewa Baby Roller",  // TYPE: MoneyMaster PARENT
  "https://www.betonjayareadymix.com/p/sewa-motor-grader.html": "Sewa Motor Grader",  // TYPE: MoneyMaster PARENT
  "https://www.betonjayareadymix.com/p/sewa-alat-pancang.html": "Sewa Alat Pancang",  // TYPE: MoneyMaster PARENT
  "https://www.betonjayareadymix.com/p/sewa-trencher.html": "Sewa Trencher",  // TYPE: MoneyMaster PARENT
  "https://www.betonjayareadymix.com/p/sewa-concrete-paver.html": "Sewa Concrete Paver"  // TYPE: MoneyMaster PARENT
	// ganti ke page
	/*
	"https://www.betonjayareadymix.com/2019/02/sewa-pile-driver.html": "Sewa Pile Driver",  // TYPE: MONEY_MASTER
"https://www.betonjayareadymix.com/2019/02/sewa-diesel-hammer.html": "Sewa Diesel Hammer",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/2019/02/sewa-alat-pancang-hidrolik.html": "Sewa Alat Pancang Hidrolik",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/2019/02/sewa-alat-pancang-hspd.html": "Sewa Alat Pancang HSPD",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/2019/02/sewa-alat-pancang-sheet-pile.html": "Sewa Alat Pancang Sheet Pile",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/2019/02/sewa-alat-pancang-mini-pile.html": "Sewa Alat Pancang Mini Pile",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/2019/02/sewa-alat-pancang-diesel-hammer.html": "Sewa Alat Pancang Diesel Hammer",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/2019/02/sewa-alat-pancang-drop-hammer.html": "Sewa Alat Pancang Drop Hammer",  // TYPE: MONEY_MASTER
  */
	
};
/*
const urlMappingSewaExcavatorFromSub2Sub1 = {
  "https://www.betonjayareadymix.com/p/perbandingan-sewa-excavator.html": "Perbandingan Sewa Excavator"  // TYPE: SUB1
};
const urlMappingSewaBulldozerFromSub2Sub1 = {
  "https://www.betonjayareadymix.com/p/perbandingan-sewa-bulldozer.html": "Perbandingan Sewa Bulldozer"  // TYPE: SUB1
};
const urlMappingSewaCraneFromSub2Sub1 = {
  "https://www.betonjayareadymix.com/p/perbandingan-sewa-crane.html": "Perbandingan Sewa Crane"  // TYPE: SUB1
};
const urlMappingSewaBekoFromSub2Sub1 = {
  "https://www.betonjayareadymix.com/p/perbandingan-sewa-beko.html": "Perbandingan Sewa Beko"  // TYPE: SUB1
};
const urlMappingSewaForkliftFromSub2Sub1 = {
  "https://www.betonjayareadymix.com/p/perbandingan-sewa-forklift.html": "Perbandingan Sewa Forklift"  // TYPE: SUB1
};
const urlMappingSewaWalesStoomFromSub2Sub1 = {
  "https://www.betonjayareadymix.com/p/perbandingan-sewa-wales-stoom.html": "Perbandingan Sewa Wales Stoom"  // TYPE: SUB1
};
const urlMappingSewaWheelLoaderFromSub2Sub1 = {
  "https://www.betonjayareadymix.com/p/perbandingan-sewa-wheel-loader.html": "Perbandingan Sewa Wheel Loader"  // TYPE: SUB1
};
const urlMappingSewaBackhoeLoaderFromSub2Sub1 = {
  "https://www.betonjayareadymix.com/p/perbandingan-sewa-backhoe-loader.html": "Perbandingan Sewa Backhoe Loader"  // TYPE: SUB1
};
*/

const urlMappingSewaAlatRinganFromSub2Sub1 = {
  "https://www.betonjayareadymix.com/p/perbandingan-sewa-alat-ringan.html": "Perbandingan Sewa Alat Ringan"  // TYPE: SUB1
};
const urlMappingSewaAlatRinganFromSub1MoneyMaster = {
 // "https://www.betonjayareadymix.com/p/harga-sewa-alat-ringan.html": "Harga Sewa Alat Ringan"  // TYPE: MoneyMaster PARENT
 // ============================================================
// MONEY MASTER (MM)
// ROOT COMMERCIAL ENTITY
// ============================================================

"https://www.betonjayareadymix.com/p/sewa-alat-cleaning.html":
  "Sewa Alat Cleaning",

"https://www.betonjayareadymix.com/p/sewa-mesin-polisher.html":
  "Sewa Mesin Polisher",

"https://www.betonjayareadymix.com/p/sewa-concrete-cutter.html":
  "Sewa Concrete Cutter",

"https://www.betonjayareadymix.com/p/sewa-jack-hammer.html":
  "Sewa Jack Hammer",

"https://www.betonjayareadymix.com/p/sewa-vibrator-beton.html":
  "Sewa Vibrator Beton",

"https://www.betonjayareadymix.com/p/sewa-mesin-molen.html":
  "Sewa Mesin Molen",

"https://www.betonjayareadymix.com/p/sewa-genset.html":
  "Sewa Genset",

"https://www.betonjayareadymix.com/p/sewa-mesin-compressor.html":
  "Sewa Mesin Compressor",

"https://www.betonjayareadymix.com/p/sewa-cutting-beton.html":
  "Sewa Cutting Beton",

"https://www.betonjayareadymix.com/p/sewa-mesin-potong-rumput.html":
  "Sewa Mesin Potong Rumput",

"https://www.betonjayareadymix.com/p/sewa-screed.html":
  "Sewa Screed",

"https://www.betonjayareadymix.com/p/sewa-trowel.html":
  "Sewa Trowel",

"https://www.betonjayareadymix.com/p/sewa-stamper.html":
  "Sewa Stamper"
};
const urlMappingSewaAlatPendukungFromSub2Sub1 = {
  "https://www.betonjayareadymix.com/p/perbandingan-sewa-alat-pendukung.html": "Perbandingan Sewa Alat Pendukung"  // TYPE: SUB1 PARENT
};
const urlMappingSewaAlatPendukungFromSub1MoneyMaster = {
  //"https://www.betonjayareadymix.com/p/harga-sewa-alat-pendukung.html": "Harga Sewa Alat Pendukung"  // TYPE: MoneyMaster
"https://www.betonjayareadymix.com/p/sewa-akses-keamanan-proyek.html": "Sewa Akses Keamanan Proyek",
  "https://www.betonjayareadymix.com/p/sewa-alat-survey.html": "Sewa Alat Survey",
//  "https://www.betonjayareadymix.com/p/sewa-alat-pendukung.html": "Sewa Alat Pendukung",  // TYPE: MoneyMaster
    "https://www.betonjayareadymix.com/p/sewa-pencahayaan-proyek.html": "Sewa Pencahayaan Proyek",
// "https://www.betonjayareadymix.com/p/sewa-bekisting-scaffolding.html": "Sewa Bekisting Scaffolding",
 //   "https://www.betonjayareadymix.com/p/sewa-pencahayaan-utilitas.html": "Sewa Pencahayaan Utilitas",
	"https://www.betonjayareadymix.com/p/sewa-bekisting.html": "Sewa Bekisting",
	"https://www.betonjayareadymix.com/p/sewa-scaffolding.html": "Sewa Scaffolding",
	"https://www.betonjayareadymix.com/p/sewa-pompa-dewatering.html": "Sewa Pompa Dewatering",
	"https://www.betonjayareadymix.com/p/sewa-pompa-air.html": "Sewa Pompa Air",
    "https://www.betonjayareadymix.com/p/sewa-pompa-lumpur.html": "Sewa Pompa Lumpur",
	"https://www.betonjayareadymix.com/p/sewa-alat-bor.html": "Sewa Alat Bor",
    "https://www.betonjayareadymix.com/p/sewa-tangki-air.html": "Sewa Tangki Air",
    "https://www.betonjayareadymix.com/p/sewa-selang-proyek.html": "Sewa Selang Proyek",
    "https://www.betonjayareadymix.com/p/sewa-pipa-proyek.html": "Sewa Pipa Proyek"
};

// [MONEY_PAGE] - SEWA ALAT KONSTRUKSI RINGAN (SARAN ITEM)
const urlMappingSewaAlatKonstruksiRinganFromSub1MoneyPage = {
  // 🟡 SARAN ITEM (BELUM AKTIF - PERLU DIBUAT KONTEN)
  // "https://www.betonjayareadymix.com/p/sewa-gerbang-tangan.html": "Sewa Gerbang Tangan",  // TYPE: MONEY_PAGE
  // "https://www.betonjayareadymix.com/p/sewa-concrete-mixer.html": "Sewa Concrete Mixer",  // TYPE: MONEY_PAGE
};

// ============================================================
// 📁 JASA PERBAIKAN INFRASTRUKTUR (ENTITY: JASA)
// 🧠 TYPE: MONEY_PAGE (bukan MONEY_MASTER)
// ============================================================

const urlMappingInfrastrukturFromSub1MoneyMaster = {
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-jalan.html": "Jasa Perbaikan Jalan",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-jembatan.html": "Jasa Perbaikan Jembatan",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-drainase.html": "Jasa Perbaikan Drainase",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-trotoar.html": "Jasa Perbaikan Trotoar"  // TYPE: MONEY_PAGE
};

// ============================================================
// 📁 JASA FINISHING - SUB2 (LEVEL 2)
// ============================================================

const urlMappingFinishingFromSub1MoneyPage = {
  "https://www.betonjayareadymix.com/p/jasa-finishing-bangunan.html": "Jasa Finishing Bangunan",  
  "https://www.betonjayareadymix.com/p/jasa-finishing-infrastruktur.html": "Jasa Finishing Infrastruktur"
};

// ============================================================
// 📁 JASA STRUKTUR KONSTRUKSI - SUB2 (LEVEL 2)
// ============================================================

const urlMappingStrukturFromSub1MoneyPage = {
   "https://www.betonjayareadymix.com/p/jasa-konstruksi-gedung-dan-hunian.html": "Jasa Konstruksi Gedung dan Hunian",
	  // Breadcrumb: Home > Jasa Struktur Konstruksi > Jasa Konstruksi Gedung & Hunian > Jasa Konstruksi Rumah Tinggal (4 level)
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-konstruksi-rumah-tinggal.html": "Jasa Konstruksi Rumah Tinggal",  // TYPE: MONEY_PAGE
  
  // ============================================================
  // [MONEY_PAGE] - Jasa Konstruksi Ruko dan Kios
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-konstruksi-ruko-dan-kios.html": "Jasa Konstruksi Ruko dan Kios",  // TYPE: MONEY_PAGE
  
  // ============================================================
  // [MONEY_PAGE] - Jasa Konstruksi Villa
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-konstruksi-villa.html": "Jasa Konstruksi Villa",  // TYPE: MONEY_PAGE
  
  // ============================================================
  // [MONEY_PAGE] - Jasa Konstruksi Apartemen
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-konstruksi-apartemen.html": "Jasa Konstruksi Apartemen",  // TYPE: MONEY_PAGE
  
  // ============================================================
  // [MONEY_PAGE] - Jasa Konstruksi Hotel
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-konstruksi-hotel.html": "Jasa Konstruksi Hotel",  // TYPE: MONEY_PAGE
  
  // ============================================================
  // [MONEY_PAGE] - Jasa Konstruksi Perkantoran
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-konstruksi-perkantoran.html": "Jasa Konstruksi Perkantoran",  // TYPE: MONEY_PAGE
  
  // ============================================================
  // [MONEY_PAGE] - Jasa Konstruksi Gedung Sekolah
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-konstruksi-gedung-sekolah.html": "Jasa Konstruksi Gedung Sekolah",  // TYPE: MONEY_PAGE
  
  // ============================================================
  // [MONEY_PAGE] - Jasa Konstruksi Gedung Rumah Sakit
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-konstruksi-gedung-rs.html": "Jasa Konstruksi Gedung Rumah Sakit",  // TYPE: MONEY_PAGE
	
  "https://www.betonjayareadymix.com/p/jasa-konstruksi-industri-dan-gudang.html": "Jasa Konstruksi Industri dan Gudang",
  // [MONEY_PAGE] - Jasa Konstruksi Gudang Logistik
  // 🧠 TYPE: MONEY_PAGE (JASA, bukan MONEY_MASTER)
  // Breadcrumb: Home > Jasa Struktur Konstruksi > Jasa Konstruksi Industri & Gudang > Jasa Konstruksi Gudang Logistik (4 level)
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-konstruksi-gudang-logistik.html": "Jasa Konstruksi Gudang Logistik",  // TYPE: MONEY_PAGE
  
  // ============================================================
  // [MONEY_PAGE] - Jasa Konstruksi Pabrik
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-konstruksi-pabrik.html": "Jasa Konstruksi Pabrik",  // TYPE: MONEY_PAGE
  
  // ============================================================
  // [MONEY_PAGE] - Jasa Konstruksi Cold Storage
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-konstruksi-cold-storage.html": "Jasa Konstruksi Cold Storage",  // TYPE: MONEY_PAGE
  
  // ============================================================
  // [MONEY_PAGE] - Jasa Konstruksi Bengkel
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-konstruksi-bengkel.html": "Jasa Konstruksi Bengkel",  // TYPE: MONEY_PAGE
  
  // ============================================================
  // [MONEY_PAGE] - Jasa Konstruksi Workshop
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-konstruksi-workshop.html": "Jasa Konstruksi Workshop",  // TYPE: MONEY_PAGE
	
  "https://www.betonjayareadymix.com/p/jasa-struktur-baja-dan-rangka-ringan.html": "Jasa Struktur Baja dan Rangka Ringan", 
   // [MONEY_PAGE] - Jasa Rangka Atap Baja Ringan
  // 🧠 TYPE: MONEY_PAGE (JASA, bukan MONEY_MASTER)
  // Breadcrumb: Home > Jasa Struktur Konstruksi > Jasa Struktur Baja & Rangka Ringan > Jasa Rangka Atap Baja Ringan (4 level)
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-rangka-atap-baja-ringan.html": "Jasa Rangka Atap Baja Ringan",  // TYPE: MONEY_PAGE
  
  // ============================================================
  // [MONEY_PAGE] - Jasa Konstruksi Baja Konvensional
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-konstruksi-baja-konvensional.html": "Jasa Konstruksi Baja Konvensional",  // TYPE: MONEY_PAGE
  
  // ============================================================
  // [MONEY_PAGE] - Jasa Kanopi Baja dan Besi
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-kanopi-baja-dan-besi.html": "Jasa Kanopi Baja dan Besi",  // TYPE: MONEY_PAGE
  
  // ============================================================
  // [MONEY_PAGE] - Jasa Struktur Baja Gudang
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-struktur-baja-gudang.html": "Jasa Struktur Baja Gudang",  // TYPE: MONEY_PAGE
	
  "https://www.betonjayareadymix.com/p/jasa-struktur-khusus.html": "Jasa Struktur Khusus", 
   // [MONEY_PAGE] - Jasa Pembuatan Kolam Renang
  // 🧠 TYPE: MONEY_PAGE (JASA, bukan MONEY_MASTER)
  // Breadcrumb: Home > Jasa Struktur Konstruksi > Jasa Struktur Khusus > Jasa Pembuatan Kolam Renang (4 level)
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-pembuatan-kolam-renang.html": "Jasa Pembuatan Kolam Renang",  // TYPE: MONEY_PAGE
  
  // ============================================================
  // [MONEY_PAGE] - Jasa Pembuatan Kolam Ikan Koi
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-pembuatan-kolam-ikan-koi.html": "Jasa Pembuatan Kolam Ikan Koi",  // TYPE: MONEY_PAGE
  
  // ============================================================
  // [MONEY_PAGE] - Jasa Septic Tank Beton
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-septic-tank-beton.html": "Jasa Septic Tank Beton",  // TYPE: MONEY_PAGE
  
  // ============================================================
  // [MONEY_PAGE] - Jasa Pembuatan Tangki Air
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-pembuatan-tangki-air.html": "Jasa Pembuatan Tangki Air",  // TYPE: MONEY_PAGE
  
  // ============================================================
  // [MONEY_PAGE] - Jasa Pembuatan Bak Penampungan
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-pembuatan-bak-penampungan.html": "Jasa Pembuatan Bak Penampungan",  // TYPE: MONEY_PAGE
  
  // ============================================================
  // [MONEY_PAGE] - Jasa Konstruksi Menara Air
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-konstruksi-menara-air.html": "Jasa Konstruksi Menara Air",  // TYPE: MONEY_PAGE
	
  "https://www.betonjayareadymix.com/p/jasa-konstruksi-lapangan-olahraga.html": "Jasa Konstruksi Lapangan Olahraga", 
   // [MONEY_PAGE] - Jasa Pembuatan Lapangan Futsal
  // 🧠 TYPE: MONEY_PAGE (JASA, bukan MONEY_MASTER)
  // Breadcrumb: Home > Jasa Struktur Konstruksi > Jasa Konstruksi Lapangan Olahraga > Jasa Pembuatan Lapangan Futsal (4 level)
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-pembuatan-lapangan-futsal.html": "Jasa Pembuatan Lapangan Futsal",  // TYPE: MONEY_PAGE
  
  // ============================================================
  // [MONEY_PAGE] - Jasa Pembuatan Lapangan Basket
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-pembuatan-lapangan-basket.html": "Jasa Pembuatan Lapangan Basket",  // TYPE: MONEY_PAGE
  
  // ============================================================
  // [MONEY_PAGE] - Jasa Pembuatan Lapangan Sepakbola
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-pembuatan-lapangan-sepakbola.html": "Jasa Pembuatan Lapangan Sepakbola",  // TYPE: MONEY_PAGE
  
  // ============================================================
  // [MONEY_PAGE] - Jasa Pembuatan Lapangan Voli
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-pembuatan-lapangan-voli.html": "Jasa Pembuatan Lapangan Voli",  // TYPE: MONEY_PAGE
  
  // ============================================================
  // [MONEY_PAGE] - Jasa Pembuatan Lapangan Tenis
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-pembuatan-lapangan-tenis.html": "Jasa Pembuatan Lapangan Tenis",  // TYPE: MONEY_PAGE
  
  // ============================================================
  // [MONEY_PAGE] - Jasa Pembuatan Lapangan Badminton
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-pembuatan-lapangan-badminton.html": "Jasa Pembuatan Lapangan Badminton",  // TYPE: MONEY_PAGE
  
  // ============================================================
  // [MONEY_PAGE] - Jasa Pembuatan Lapangan Serbaguna
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-pembuatan-lapangan-serbaguna.html": "Jasa Pembuatan Lapangan Serbaguna",  // TYPE: MONEY_PAGE
	
  "https://www.betonjayareadymix.com/p/jasa-konstruksi-modular-dan-precast.html": "Jasa Konstruksi Modular dan Precast", 
   // [MONEY_PAGE] - Jasa Panel Beton Precast
  // 🧠 TYPE: MONEY_PAGE (JASA, bukan MONEY_MASTER)
  // Breadcrumb: Home > Jasa Struktur Konstruksi > Jasa Konstruksi Modular & Precast > Jasa Panel Beton Precast (4 level)
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-panel-beton-precast.html": "Jasa Panel Beton Precast",  // TYPE: MONEY_PAGE
  
  // ============================================================
  // [MONEY_PAGE] - Jasa Dinding Precast Bangunan
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-dinding-precast-bangunan.html": "Jasa Dinding Precast Bangunan",  // TYPE: MONEY_PAGE
  
  // ============================================================
  // [MONEY_PAGE] - Jasa Tangga Beton Precast
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-tangga-beton-precast.html": "Jasa Tangga Beton Precast",  // TYPE: MONEY_PAGE
  
  // ============================================================
  // [MONEY_PAGE] - Jasa Balok dan Sloof Precast
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-balok-dan-sloof-precast.html": "Jasa Balok dan Sloof Precast",  // TYPE: MONEY_PAGE
  
  // ============================================================
  // [MONEY_PAGE] - Jasa Toilet Modular Prefab
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-toilet-modular-prefab.html": "Jasa Toilet Modular Prefab",  // TYPE: MONEY_PAGE
  
  // ============================================================
  // [MONEY_PAGE] - Jasa Rumah Modular Prefab
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-rumah-modular-prefab.html": "Jasa Rumah Modular Prefab",  // TYPE: MONEY_PAGE
	
  "https://www.betonjayareadymix.com/p/jasa-struktur-beton-dan-pengecoran.html": "Jasa Struktur Beton dan Pengecoran",
   // [MONEY_PAGE] - Jasa Cor Beton
  // 🧠 TYPE: MONEY_PAGE (JASA, bukan MONEY_MASTER)
  // Breadcrumb: Home > Jasa Struktur Konstruksi > Jasa Struktur Beton & Pengecoran > Jasa Cor Beton (4 level)
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-cor-beton.html": "Jasa Cor Beton",  // TYPE: MONEY_PAGE
  
  // ============================================================
  // [MONEY_PAGE] - Jasa Pengecoran Lantai Dak
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-pengecoran-lantai-dak.html": "Jasa Pengecoran Lantai Dak",  // TYPE: MONEY_PAGE
  
  // ============================================================
  // [MONEY_PAGE] - Jasa Pengecoran Lantai Gudang
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-pengecoran-lantai-gudang.html": "Jasa Pengecoran Lantai Gudang",  // TYPE: MONEY_PAGE
  
  // ============================================================
  // [MONEY_PAGE] - Jasa Bekisting dan Pembesian
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-bekisting-dan-pembesian.html": "Jasa Bekisting dan Pembesian",  // TYPE: MONEY_PAGE
  
  // ============================================================
  // [MONEY_PAGE] - Jasa Pengecoran Kolom Beton
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-pengecoran-kolom-beton.html": "Jasa Pengecoran Kolom Beton"  // TYPE: MONEY_PAGE
	
};

// ============================================================
// 📁 JASA PONDASI & PERKUATAN TANAH - SUB2 (LEVEL 2)
// ============================================================

const urlMappingPondasiFromSub1MoneyPage = {
  "https://www.betonjayareadymix.com/p/jasa-pondasi-bangunan.html": "Jasa Pondasi Bangunan",  
  "https://www.betonjayareadymix.com/p/jasa-pemadatan-persiapan-pondasi.html": "Jasa Pemadatan & Persiapan Pondasi",  
  "https://www.betonjayareadymix.com/p/jasa-perkuatan-tanah.html": "Jasa Perkuatan Tanah", 
  "https://www.betonjayareadymix.com/p/jasa-retrofitting-pondasi.html": "Jasa Retrofitting Pondasi"
};

// ============================================================
// 📁 BONGKAR BANGUNAN - SUB2 (LEVEL 2)
// ============================================================

const urlMappingBongkarBangunanFromSub1MoneyPage = {
  "https://www.betonjayareadymix.com/p/jasa-bongkar-tower.html": "Jasa Bongkar Tower",  // TYPE: SUB2
  "https://www.betonjayareadymix.com/p/jasa-bongkar-rumah.html": "Jasa Bongkar Rumah",  // TYPE: SUB2
  "https://www.betonjayareadymix.com/p/jasa-bongkar-beton.html": "Jasa Bongkar Beton",  // TYPE: SUB2
  "https://www.betonjayareadymix.com/p/jasa-bongkar-atap.html": "Jasa Bongkar Atap",  // TYPE: SUB2
  "https://www.betonjayareadymix.com/p/jasa-bongkar-keramik.html": "Jasa Bongkar Keramik",  // TYPE: SUB2
  "https://www.betonjayareadymix.com/p/jasa-bongkar-tembok.html": "Jasa Bongkar Tembok",  // TYPE: SUB2
  "https://www.betonjayareadymix.com/p/jasa-bongkar-dinding.html": "Jasa Bongkar Dinding",  // TYPE: SUB2
  "https://www.betonjayareadymix.com/p/jasa-bongkar-plafon.html": "Jasa Bongkar Plafon",  // TYPE: SUB2
  "https://www.betonjayareadymix.com/p/jasa-bongkar-partisi.html": "Jasa Bongkar Partisi",  // TYPE: SUB2
  "https://www.betonjayareadymix.com/p/jasa-bongkar-pagar.html": "Jasa Bongkar Pagar",  // TYPE: SUB2
  "https://www.betonjayareadymix.com/p/jasa-bongkar-lantai.html": "Jasa Bongkar Lantai"  // TYPE: SUB2
};

// ============================================================
// 📁 JASA RENOVASI - SUB2 (LEVEL 2)
// ============================================================

const urlMappingRenovasiFromSub1MoneyPage = {
  "https://www.betonjayareadymix.com/p/jasa-renovasi-fasilitas-umum.html": "Jasa Renovasi Fasilitas Umum", 
  "https://www.betonjayareadymix.com/p/jasa-renovasi-bangunan.html": "Jasa Renovasi Bangunan", 
  "https://www.betonjayareadymix.com/p/jasa-renovasi-interior.html": "Jasa Renovasi Interior",  
  "https://www.betonjayareadymix.com/p/jasa-renovasi-eksterior-bangunan.html": "Jasa Renovasi Eksterior Bangunan"
};

// ============================================================
// 📁 JASA PERAWATAN & PERBAIKAN BANGUNAN - SUB2 (LEVEL 2)
// ============================================================

const urlMappingPerawatanPerbaikanBangunanFromSub1MoneyPage = {
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-struktur.html": "Jasa Perbaikan Struktur", 
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-kebocoran-waterproofing.html": "Jasa Perbaikan Kebocoran Waterproofing",
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-elemen-arsitektural.html": "Jasa Perbaikan Elemen Arsitektural",  
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-atap-drainase-bangunan.html": "Jasa Perbaikan Atap Drainase Bangunan"
};

// ============================================================
// 📁 JASA PENGEBORAN - SUB2 (LEVEL 2) & MONEY_PAGE (LEVEL 4)
// 🧠 ENTITY: JASA → TYPE: MONEY_PAGE (bukan MONEY_MASTER)
// ============================================================
/*
const urlMappingPengeboranFromPillarSub2 = {
  "https://www.betonjayareadymix.com/p/jasa-pengeboran.html": "Jasa Pengeboran",  // TYPE: SUB2
};*/

const urlMappingPengeboranFromSub1MoneyPage = {
  // [MONEY_PAGE] - JENIS PENGEBORAN SPESIFIK (JASA)
  //"https://www.betonjayareadymix.com/p/jasa-bor-air-sumur.html": "Jasa Bor Air Sumur",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/p/jasa-bor-sumur.html": "Jasa Bor Sumur",  //MONEY_MASTER1
  "https://www.betonjayareadymix.com/p/jasa-bore-pile.html": "Jasa Bore Pile",  // TYPE: MONEY_MASTER1
  "https://www.betonjayareadymix.com/p/jasa-coring-beton.html": "Jasa Coring Beton",  // TYPE: MONEY_MASTER1
  "https://www.betonjayareadymix.com/p/jasa-bor-beton.html": "Jasa Bor Beton",  // TYPE: MONEY_MASTER1
  "https://www.betonjayareadymix.com/p/jasa-bor-tanah.html": "Jasa Bor Tanah",  // TYPE: MONEY_MASTER1
  "https://www.betonjayareadymix.com/p/jasa-bor-horizontal.html": "Jasa Bor Horizontal",  // TYPE: MONEY_MASTER1
  "https://www.betonjayareadymix.com/p/jasa-bor-tembok.html": "Jasa Bor Tembok"  // TYPE: MONEY_MASTER1
};

// ============================================================
// 📁 JASA SALURAN & DRAINASE - SUB2 (LEVEL 2) & MONEY_PAGE
// 🧠 ENTITY: JASA → TYPE: MONEY_PAGE
// ⚠️ STATUS: KONTEN KOSONG - PERLU DIBUAT
// ============================================================

/*const urlMappingSaluranFromPillarSub2 = {
  "https://www.betonjayareadymix.com/p/jasa-saluran-drainase.html": "Jasa Saluran & Drainase",  // TYPE: SUB2
};*/

const urlMappingSaluranFromSub1MoneyPage = {
  // 🟡 SARAN ITEM (BELUM AKTIF - PERLU DIBUAT KONTEN)
  // "https://www.betonjayareadymix.com/p/jasa-saluran-air-hujan.html": "Jasa Saluran Air Hujan",  // TYPE: MONEY_PAGE
  // "https://www.betonjayareadymix.com/p/jasa-pemasangan-u-ditch.html": "Jasa Pemasangan U Ditch",  // TYPE: MONEY_PAGE
  // "https://www.betonjayareadymix.com/p/jasa-pemasangan-box-culvert.html": "Jasa Pemasangan Box Culvert",  // TYPE: MONEY_PAGE
  // "https://www.betonjayareadymix.com/p/jasa-saluran-irigasi-air-limbah.html": "Jasa Saluran Irigasi & Air Limbah",  // TYPE: MONEY_PAGE
  // "https://www.betonjayareadymix.com/p/jasa-pembuatan-sumur-resapan.html": "Jasa Pembuatan Sumur Resapan",  // TYPE: MONEY_PAGE
};

// ============================================================
// 📁 JASA JALAN & PERKERASAN - SUB2 (LEVEL 2) & MONEY_PAGE
// 🧠 ENTITY: JASA → TYPE: MONEY_PAGE
// ============================================================
/*
const urlMappingJalanFromPillarSub2 = {
  "https://www.betonjayareadymix.com/p/jasa-jalan-perkerasan.html": "Jasa Jalan & Perkerasan",  // TYPE: SUB2
};*/

const urlMappingJalanFromSub1MoneyPage = {
  "https://www.betonjayareadymix.com/p/jasa-pembangunan-infrastruktur-jalan.html": "Jasa Pembangunan Infrastruktur Jalan",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/p/jasa-pemadatan-dan-persiapan-tanah-jalan.html": "Jasa Pemadatan dan Persiapan Tanah Jalan",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/p/jasa-perkerasan-jalan.html": "Jasa Perkerasan Jalan",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/p/jasa-pengerasan-jalan.html": "Jasa Pengerasan Jalan" // TYPE: MONEY_PAGE
};

// ============================================================
// 📁 JASA PEMATANGAN LAHAN - SUB2 (LEVEL 2) & MONEY_PAGE
// 🧠 ENTITY: JASA → TYPE: MONEY_PAGE
// ============================================================
/*
const urlMappingPematanganLahanFromPillarSub2 = {
  "https://www.betonjayareadymix.com/p/jasa-pematangan-lahan.html": "Jasa Pematangan Lahan",  // TYPE: SUB2
};*/

const urlMappingPematanganLahanFromSub1MoneyPage = {
  "https://www.betonjayareadymix.com/p/jasa-galian-tanah.html": "Jasa Galian Tanah",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/p/jasa-pengupasan-lahan-tanah.html": "Jasa Pengupasan Lahan Tanah",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/p/jasa-pembersihan-lahan.html": "Jasa Pembersihan Lahan",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/p/jasa-perataan-dan-grading-lahan.html": "Jasa Perataan dan Grading Lahan",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/p/jasa-elevasi-lahan.html": "Jasa Elevasi Lahan",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/p/jasa-badan-lahan.html": "Jasa Badan Lahan",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/p/jasa-cut-and-fill-lahan.html": "Jasa Cut and Fill Lahan",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/p/jasa-pemotongan-bukit-lahan.html": "Jasa Pemotongan Bukit Lahan",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/p/jasa-urugan-tanah-lahan.html": "Jasa Urugan Tanah Lahan",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/p/jasa-pemadatan-tanah-lahan.html": "Jasa Pemadatan Tanah Lahan",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/p/jasa-base-course-lahan.html": "Jasa Base Course Lahan",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/p/jasa-stabilisasi-tanah-lahan.html": "Jasa Stabilisasi Tanah Lahan",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/p/jasa-drainase-lahan.html": "Jasa Drainase Lahan",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/p/jasa-geotekstil-lahan.html": "Jasa Geotekstil Lahan",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/p/jasa-persiapan-pondasi-lahan.html": "Jasa Persiapan Pondasi Lahan",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/p/jasa-tebang-pohon.html": "Jasa Tebang Pohon" // TYPE: MONEY_PAGE
};

// ============================================================
// 📁 JASA UJI TANAH - SUB2 (LEVEL 2) & MONEY_PAGE
// 🧠 ENTITY: JASA → TYPE: MONEY_PAGE
// ============================================================
/*
const urlMappingUjiTanahFromPillarSub2 = {
  "https://www.betonjayareadymix.com/p/jasa-uji-tanah.html": "Jasa Uji Tanah",  // TYPE: SUB2
};*/

const urlMappingUjiTanahFromSub1MoneyPage = {
  "https://www.betonjayareadymix.com/p/jasa-sondir.html": "Jasa Sondir",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/p/jasa-cpt.html": "Jasa CPT",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/p/jasa-lab-tanah.html": "Jasa Lab Tanah",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/p/jasa-boring-tanah.html": "Jasa Boring Tanah",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/p/jasa-uji-penetrasi.html": "Jasa Uji Penetrasi"  // TYPE: MONEY_PAGE
};

// ============================================================
// 📁 JASA PERKUATAN TANAH LONGSOR - SUB2 (LEVEL 2) & MONEY_PAGE
// 🧠 ENTITY: JASA → TYPE: MONEY_PAGE
// ============================================================
/*
const urlMappingPerkuatanTanahLongsorFromPillarSub2 = {
  "https://www.betonjayareadymix.com/p/jasa-perkuatan-tanah-longsor.html": "Jasa Perkuatan Tanah Longsor",  // TYPE: SUB2
};*/

const urlMappingPerkuatanTanahLongsorFromSub1MoneyPage = {
  "https://www.betonjayareadymix.com/p/jasa-bronjong-penahan-longsor.html": "Jasa Bronjong Penahan Longsor",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/p/jasa-soil-nailing-tebing.html": "Jasa Soil Nailing Tebing",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/p/jasa-dinding-penahan-tanah-longsor.html": "Jasa Dinding Penahan Tanah Longsor",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/p/jasa-geotextile-perkuatan-lereng.html": "Jasa Geotextile Perkuatan Lereng",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/p/jasa-sheet-pile-penahan-longsor.html": "Jasa Sheet Pile Penahan Longsor",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/p/jasa-stabilisasi-tanah-labil.html": "Jasa Stabilisasi Tanah Labil",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/p/jasa-perkuatan-tanah-longsor-rumah.html": "Jasa Perkuatan Tanah Longsor Rumah",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/p/jasa-perkuatan-tebing-jalan.html": "Jasa Perkuatan Tebing Jalan",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/p/jasa-perkuatan-longsor-perkebunan.html": "Jasa Perkuatan Longsor Perkebunan",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/p/jasa-drainase-anti-longsor.html": "Jasa Drainase Anti Longsor"  // TYPE: MONEY_PAGE
};

// ============================================================
// 📁 JASA PEMBATAS & PENGAMAN - SUB2 (LEVEL 2) & MONEY_PAGE
// 🧠 ENTITY: JASA → TYPE: MONEY_PAGE
// ============================================================
/*
const urlMappingPembatasFromPillarSub2 = {
  "https://www.betonjayareadymix.com/p/jasa-pembatas-pengaman.html": "Jasa Pembatas Pengaman",  // TYPE: SUB2
};*/

const urlMappingPembatasFromSub1MoneyPage = {
  "https://www.betonjayareadymix.com/p/jasa-pengamanan-area-proyek.html": "Jasa Pengamanan Area Proyek",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/p/jasa-rambu-dan-sistem-keamanan-visual.html": "Jasa Rambu dan Sistem Keamanan Visual",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/p/jasa-pengaman-sisi-jalan-infrastruktur.html": "Jasa Pengaman Sisi Jalan Infrastruktur",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/p/jasa-pembuatan-pagar-dinding-pembatas.html": "Jasa Pembuatan Pagar Dinding Pembatas"  // TYPE: MONEY_PAGE
};

// ============================================================
// 📁 JASA INSTALASI LISTRIK - SUB2 (LEVEL 2) & MONEY_PAGE
// 🧠 ENTITY: JASA → TYPE: MONEY_PAGE
// ============================================================
/*
const urlMappingJasaInstalasiListrikFromPillarSub2 = {
  "https://www.betonjayareadymix.com/p/jasa-instalasi-listrik.html": "Jasa Instalasi Listrik",  // TYPE: SUB2
};*/

const urlMappingJasaInstalasiListrikFromSub1MoneyPage = {
  "https://www.betonjayareadymix.com/p/jasa-instalasi-solar-panel.html": "Jasa Instalasi Solar Panel",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/p/jasa-instalasi-listrik-rumah.html": "Jasa Instalasi Listrik Rumah",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/p/jasa-instalasi-listrik-komersial.html": "Jasa Instalasi Listrik Komersial",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/p/jasa-pemasangan-panel-listrik.html": "Jasa Pemasangan Panel Listrik",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/p/jasa-keamanan-proteksi-listrik.html": "Jasa Keamanan & Proteksi Listrik",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/p/jasa-maintenance-perbaikan-listrik.html": "Jasa Maintenance & Perbaikan Listrik",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/p/jasa-konsultasi-listrik.html": "Jasa Konsultasi Listrik"  // TYPE: MONEY_PAGE
};

// ============================================================
// 🔴 BREADCRUMB SKIP LEVEL NOTES
// ============================================================
/*
📌 BREADCRUMB SKIP LEVEL YANG DIPERBOLEHKAN:

Untuk semua MONEY_PAGE di atas (ENTITY JASA):
- Skip SUB2 (kategori) jika tidak perlu muncul di breadcrumb
- Breadcrumb maksimal 4 level termasuk Home

Contoh Breadcrumb yang benar:
Home > Jasa Konstruksi > Jasa Pengeboran > Jasa Bor Air Sumur (4 level)
Home > Jasa Konstruksi > Jasa Jalan Perkerasan > Jasa Perkerasan Jalan (4 level)

✅ SEMUA URL di atas sudah diperbaiki: MONEY_MASTER → MONEY_PAGE untuk ENTITY JASA
✅ MONEY_MASTER TIDAK BOLEH digunakan untuk ENTITY JASA
✅ ENTITY SEWA/RENTAL tetap boleh menggunakan MONEY_MASTER (terpisah)
✅ Aman untuk SEO - tidak melanggar aturan EEAT
*/

// ============================================================
// 📋 RINGKASAN PERUBAHAN (SEBELUM vs SESUDAH)
// ============================================================
/*
SEBELUM (SALAH)                      | SESUDAH (BENAR)
--------------------------------------|-------------------------------------
MONEY_MASTER untuk JASA               | MONEY_PAGE untuk JASA
urlMappingJasaKons (PILLAR di-comment)| urlMappingJasaKonsPillar (AKTIF)
urlMappingJasaAlatKonstruksi (SUB2)   | Dipisah ke ENTITY SEWA/RENTAL
Semua MONEY_MASTER di JASA            | Diubah menjadi MONEY_PAGE

✅ ENTITY TYPE: JASA - semua halaman JASA menggunakan MONEY_PAGE
✅ ENTITY TYPE: SEWA/RENTAL - tetap boleh menggunakan MONEY_MASTER
❌ MONEY_MASTER tidak diperbolehkan untuk JASA
✅ MONEY_PAGE adalah type yang benar untuk JASA (Komersial 60% + Transaksional 40%)
*/
/*
const urlMappingCustom = {

};
*/

/**
 * ============================================================
 * generateBreadcrumbJasaKonstruksi v7.2 FINAL
 * UNIVERSAL ENTITY HIERARCHY ENGINE
 * ============================================================
 *
 * ✅ UPDATE v7.2
 * ------------------------------------------------------------
 * - MAX LEVEL upgraded menjadi 5
 * - Hierarchy breadcrumb lebih natural
 * - Parent terdekat lebih stabil
 * - SP1/SP2 tidak mudah ter-skip
 * - Money-child bisa langsung turun dari MM
 * - Better SEO hierarchy sequence
 * - Better current page handling
 * - Better duplicate prevention
 * - Better hierarchy preservation
 * - Better level limiting
 * - Better parent ordering
 * - Exact match pillar tetap dipertahankan
 * - Semua logic lama tetap dipertahankan
 *
 * ✅ FIX FINAL:
 * ------------------------------------------------------------
 * - Parent terdekat WAJIB tidak boleh skip
 * - Direct commercial parent diprioritaskan
 * - Money-master diproteksi
 * - Money-page diproteksi
 * - Ancestor lineage lebih natural
 * - Tidak lagi hanya sort level asc
 * - Hierarchy berbasis nearest lineage
 * - isPartOf hierarchy lebih SEO-safe
 * - Breadcrumb lebih sinkron dengan webpage graph
 *
 * ============================================================
 * @version 7.2.1 FINAL
 * @date 2026-05-19
 * ============================================================
 */

function generateBreadcrumbJasaKonstruksi(
    mappingObj,
    currentUrl,
    breadcrumbItems = [],
    entityType = 'PRODUK_KONSTRUKSI'
) {

    //"use strict";

    // ============================================================
    // 1. GLOBAL CONFIG
    // ============================================================

    const CONFIG = {

        DOMAIN:
            'https://www.betonjayareadymix.com',

        MAX_LEVEL:
            5,

        DEBUG:
            false,

        CURRENT_YEAR:
            new Date().getFullYear()
    };

    // ============================================================
    // 2. LOGGER
    // ============================================================

    function log(message, type = 'INFO') {

        if (!CONFIG.DEBUG && type === 'INFO') {
            return;
        }

        const icons = {

            INFO: '📘',
            SUCCESS: '✅',
            WARN: '⚠️',
            ERROR: '❌'
        };

        console.log(
            `${icons[type] || '📘'} [Breadcrumb v7.2] ${message}`
        );
    }

    // ============================================================
    // 3. ENTITY NORMALIZATION
    // ============================================================

    const ENTITY_TYPE_MAP = {

        'JASA':
            'JASA_KONSTRUKSI',

        'JASA_KONSTRUKSI':
            'JASA_KONSTRUKSI',

        'JASA_INTERIOR':
            'JASA_KONSTRUKSI',

        'JASA_DESAIN_INTERIOR':
            'JASA_KONSTRUKSI',

        'SEWA':
            'SEWA_ALAT_KONSTRUKSI',

        'RENTAL':
            'SEWA_ALAT_KONSTRUKSI',

        'SEWA_ALAT':
            'SEWA_ALAT_KONSTRUKSI',

        'RENTAL_ALAT':
            'SEWA_ALAT_KONSTRUKSI',

        'SEWA_RENTAL':
            'SEWA_ALAT_KONSTRUKSI',

        'SEWA_ALAT_KONSTRUKSI':
            'SEWA_ALAT_KONSTRUKSI',

        'PRODUK':
            'PRODUK_KONSTRUKSI',

        'PRODUK_KONSTRUKSI':
            'PRODUK_KONSTRUKSI',

        'PRODUK_INTERIOR':
            'PRODUK_INTERIOR',

        'MATERIAL':
            'MATERIAL_KONSTRUKSI',

        'MATERIAL_KONSTRUKSI':
            'MATERIAL_KONSTRUKSI',

        'ARTIKEL':
            'ARTIKEL'
    };

    entityType =
        ENTITY_TYPE_MAP[entityType] ||
        entityType;

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

        console.error(
            `❌ INVALID ENTITY TYPE: ${entityType}`
        );

        return null;
    }

    // ============================================================
    // 5. TYPE LEVEL MAP
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

    // ============================================================
    // 6. ROOT ENTITY PILLARS
    // ============================================================

    const ROOT_ENTITY_PILLARS = {

        'JASA_KONSTRUKSI': [
            'jasa konstruksi'
        ],

        'SEWA_ALAT_KONSTRUKSI': [
            'sewa alat konstruksi'
        ],

        'PRODUK_KONSTRUKSI': [
            'produk konstruksi'
        ],

        'PRODUK_INTERIOR': [
            'produk interior'
        ],

        'MATERIAL_KONSTRUKSI': [
            'material konstruksi'
        ],

        'ARTIKEL': [
            'artikel konstruksi'
        ]
    };

    // ============================================================
    // 7. HELPERS
    // ============================================================

    function isJasaEntity() {

        return entityType === 'JASA_KONSTRUKSI';
    }

    function isSewaEntity() {

        return entityType === 'SEWA_ALAT_KONSTRUKSI';
    }

    function isProdukEntity() {

        return entityType === 'PRODUK_KONSTRUKSI';
    }

    function isMaterialEntity() {

        return entityType === 'MATERIAL_KONSTRUKSI';
    }

    function isInteriorEntity() {

        return entityType === 'PRODUK_INTERIOR';
    }

    // ============================================================
    // 8. CLEAN TEXT
    // ============================================================

    function cleanText(text) {

        if (!text) return '';

        return text
            .replace(/\s+/g, ' ')
            .trim();
    }

    // ============================================================
    // 9. CLEAN PAGE NAME
    // ============================================================

    function getCleanPageNameFromUrl(url) {

        if (!url) return '';

        let path = url;

        path =
            path.replace(
                /^https?:\/\/[^\/]+/i,
                ''
            );

        path =
            path.split('?')[0];

        path =
            path.replace(
                /\.(html|php|asp|jsp)$/i,
                ''
            );

        path =
            path.replace(/^\/p\//, '');

        path =
            path.replace(
                /\/\d{4}\/\d{2}\/\d{2}\//g,
                '/'
            );

        path =
            path.replace(
                /\/\d{4}\/\d{2}\//g,
                '/'
            );

        path =
            path.replace(
                /\/\d{4}\//g,
                '/'
            );

        const parts =
            path.split('/').filter(Boolean);

        let last =
            parts.pop() || '';

        last =
            last.replace(/-/g, ' ');

        last =
            last.replace(
                /[^a-z0-9\s]/gi,
                ''
            );

        return cleanText(
            last.toLowerCase()
        );
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

        'vs',
        'versus',
        'perbandingan',
        'lebih baik',
        'kelebihan',
        'kekurangan'
    ];

    const SP2_KEYWORDS = [

        'jenis',
        'kategori',
        'daftar',
        'macam',
        'tipe'
    ];

    const INFORMATIONAL_KEYWORDS = [

        'panduan',
        'tutorial',
        'cara',
        'tips',
        'apa itu',
        'pengertian'
    ];

    const VARIANT_KEYWORDS = [

        'spesifikasi',
        'spec',
        'kapasitas',
        'dimensi',
        'ukuran',
        'mutu',
        'grade',
        'type',
        'tipe'
    ];

    const SPECIFIC_MODIFIERS = [

        'k225',
        'k250',
        'k300',

        'm6',
        'm8',
        'm10',

        'diesel',
        'hidrolik',
        'mini pile',
        'sheet pile',
        'drop hammer',
        'breaker',
        'long arm',
        'vibrator',

        'per jam',
        'per hari',
        'per meter',
        'per m2',

        'terdekat',
        'murah',
        'kapasitas besar'
    ];

    // ============================================================
    // 12. LOCATION DETECTION
    // ============================================================

    const LOCATION_WHITELIST = new Set([

        'jakarta',
        'bogor',
        'depok',
        'tangerang',
        'bekasi',
        'bandung',
        'karawang',
        'purwakarta',
        'cikarang',
        'subang',
        'cirebon',
        'semarang',
        'surabaya',
        'solo',
        'jogja',
        'yogyakarta',
        'medan',
        'makassar',
        'bali',
        'denpasar',
        'terdekat'
    ]);

    function isLocation(text) {

        if (!text) return false;

        const lower =
            text.toLowerCase();

        for (const city of LOCATION_WHITELIST) {

            const regex =
                new RegExp(
                    `\\b${city}\\b`,
                    'i'
                );

            if (regex.test(lower)) {

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

        const lower =
            text.toLowerCase();

        for (const mod of SPECIFIC_MODIFIERS) {

            if (lower.includes(mod)) {

                return true;
            }
        }

        return /\d/.test(lower);
    }

    // ============================================================
    // 14. SUB VARIANT
    // ============================================================

    function isSubVariant(text) {

        if (!text) return false;

        let score = 0;

        if (
            (text.match(/\d+/g) || []).length >= 3
        ) {
            score++;
        }

        if (
            (text.match(/x/g) || []).length >= 2
        ) {
            score++;
        }

        if (
            /mm|cm|meter|kg|ton/i.test(text)
        ) {
            score++;
        }

        return score >= 2;
    }

    // ============================================================
    // 15. ENTITY PILLAR EXACT MATCH
    // ============================================================

    function isEntityPillarExactMatch(pageName) {

        const cleanName =
            cleanText(
                pageName.toLowerCase()
            );

        const valid =
            ROOT_ENTITY_PILLARS[entityType] || [];

        return valid.includes(cleanName);
    }

    // ============================================================
    // 16. PAGE TYPE DETECTION
    // ============================================================

    function detectPageType(
        pageName,
        isHome = false
    ) {

        const lowerName =
            cleanText(
                pageName.toLowerCase()
            );

        if (
            isHome ||
            lowerName === 'home' ||
            lowerName === 'beranda'
        ) {

            return 'home';
        }

        if (
            isEntityPillarExactMatch(lowerName)
        ) {

            return 'pillar';
        }

        if (isSubVariant(lowerName)) {

            return 'sub-variant';
        }

        for (const kw of VARIANT_KEYWORDS) {

            if (lowerName.includes(kw)) {

                return 'variant';
            }
        }

        for (const kw of INFORMATIONAL_KEYWORDS) {

            if (lowerName.includes(kw)) {

                return 'pillar';
            }
        }

        for (const kw of SP1_KEYWORDS) {

            if (lowerName.includes(kw)) {

                return 'sub-pillar-tipe-1';
            }
        }

        for (const kw of SP2_KEYWORDS) {

            if (lowerName.includes(kw)) {

                return 'sub-pillar-tipe-2';
            }
        }

        const HAS_PRICE_WORD =
            /\b(harga|biaya|tarif)\b/i
            .test(lowerName);

        const HAS_SEWA_WORD =
            /\b(sewa|rental)\b/i
            .test(lowerName);

        if (
            HAS_PRICE_WORD ||
            HAS_SEWA_WORD
        ) {

            if (isLocation(lowerName)) {

                return 'money-child';
            }

            if (isJasaEntity()) {

                return 'money-page';
            }

            if (isSewaEntity()) {

                if (
                    HAS_PRICE_WORD &&
                    HAS_SEWA_WORD
                ) {

                    return 'money-page';
                }

                if (
                    !HAS_PRICE_WORD &&
                    HAS_SEWA_WORD
                ) {

                    const cleaned =
                        lowerName
                            .replace(
                                /\b(sewa|rental)\b/gi,
                                ''
                            )
                            .trim();

                    const words =
                        cleaned
                            .split(/\s+/)
                            .filter(Boolean);

                    const wordCount =
                        words.length;

                    const specific =
                        isSpecificProduct(cleaned);

                    if (
                        wordCount <= 2 &&
                        !specific
                    ) {

                        return 'money-master';
                    }

                    return 'money-page';
                }
            }

            if (HAS_PRICE_WORD) {

                const cleaned =
                    lowerName
                        .replace(
                            /\b(harga|biaya|tarif)\b/gi,
                            ''
                        )
                        .trim();

                const words =
                    cleaned
                        .split(/\s+/)
                        .filter(Boolean);

                const wordCount =
                    words.length;

                const specific =
                    isSpecificProduct(cleaned);

                if (
                    wordCount <= 2 &&
                    !specific
                ) {

                    return 'money-master';
                }

                return 'money-page';
            }
        }

        if (isJasaEntity()) {

            const jasaKeywords = [

                'jasa',
                'kontraktor',
                'renovasi',
                'pasang',
                'borongan'
            ];

            for (const kw of jasaKeywords) {

                if (lowerName.includes(kw)) {

                    return isLocation(lowerName)
                        ? 'money-child'
                        : 'money-page';
                }
            }
        }

        if (isSewaEntity()) {

            if (
                lowerName.includes('sewa') ||
                lowerName.includes('rental')
            ) {

                return isLocation(lowerName)
                    ? 'money-child'
                    : 'money-page';
            }
        }

        return 'pillar';
    }

    // ============================================================
    // 17. BUILD ALL LEVELS
    // ============================================================

    const allLevels = [];

    for (
        let i = 0;
        i < breadcrumbItems.length;
        i++
    ) {

        const item =
            breadcrumbItems[i];

        let name;
        let url;

        if (typeof item === 'object') {

            name =
                item.name;

            url =
                item.url || null;

        } else {

            name = item;
            url = null;
        }

        const type =
            detectPageType(name);

        allLevels.push({

            name,
            url,
            type,

            level:
                TYPE_LEVEL_MAP[type] || 99,

            position:
                i + 1
        });
    }

    // ============================================================
    // 18. URL FALLBACK
    // ============================================================

    for (const level of allLevels) {

        if (!level.url) {

            let foundUrl = null;

            if (mappingObj) {

                for (
                    const [url, title]
                    of Object.entries(mappingObj)
                ) {

                    if (title === level.name) {

                        foundUrl =
                            url.startsWith('http')
                                ? url
                                : CONFIG.DOMAIN + url;

                        break;
                    }
                }
            }

            if (!foundUrl) {

                foundUrl =
`${CONFIG.DOMAIN}/p/${slugify(level.name)}.html`;
            }

            level.url = foundUrl;

        } else if (
            !level.url.startsWith('http')
        ) {

            level.url =
                CONFIG.DOMAIN + level.url;
        }
    }

    // ============================================================
    // 19. CURRENT PAGE
    // ============================================================

    const currentFullUrl =
        currentUrl.startsWith('http')
            ? currentUrl
            : CONFIG.DOMAIN + currentUrl;

    let currentPageTitle =
        getCleanPageNameFromUrl(
            currentFullUrl
        );

    if (!currentPageTitle) {

        currentPageTitle =
            'Halaman';
    }

    const currentPageType =
        detectPageType(currentPageTitle);

    // ============================================================
    // 20. SELECT BREADCRUMB LEVELS
    // ============================================================

    const selectedLevels = [];

    // ========================================================
    // HOME
    // ========================================================

    selectedLevels.push({

        name:
            'Beranda',

        url:
            CONFIG.DOMAIN,

        type:
            'home',

        level:
            0,

        position:
            1
    });

    // ========================================================
    // REMOVE DUPLICATE
    // ========================================================

    const uniqueHierarchy = [];

    const usedHierarchy = new Set();

    for (const item of allLevels) {

        const key =
            item.name.toLowerCase();

        if (usedHierarchy.has(key)) {
            continue;
        }

        usedHierarchy.add(key);

        uniqueHierarchy.push(item);
    }

    // ========================================================
    // FIND DIRECT PARENTS
    // ========================================================

    function findNearestParents() {

        const lineage = [];

        const currentLevel =
            TYPE_LEVEL_MAP[currentPageType] || 99;

        let lastAcceptedLevel =
            currentLevel;

        for (
            let i = uniqueHierarchy.length - 1;
            i >= 0;
            i--
        ) {

            const item =
                uniqueHierarchy[i];

            if (
                item.level < lastAcceptedLevel
            ) {

                lineage.unshift(item);

                lastAcceptedLevel =
                    item.level;
            }
        }

        return lineage;
    }

    // ========================================================
    // BUILD LINEAGE
    // ========================================================

    let lineageLevels =
        findNearestParents();

    // ========================================================
    // PRIORITIZE ROOT PILLAR
    // ========================================================

    const rootPillar =
        lineageLevels.find(
            item => item.type === 'pillar'
        );

    // ========================================================
    // ENSURE DIRECT COMMERCIAL PARENT
    // ========================================================

    const hasCommercialParent =
        lineageLevels.some(item =>
            item.type === 'money-master' ||
            item.type === 'money-page'
        );

    if (
        (
            currentPageType === 'money-child' ||
            currentPageType === 'money-page'
        ) &&
        !hasCommercialParent
    ) {

        const nearestCommercial =
            [...uniqueHierarchy]
                .reverse()
                .find(item =>
                    item.type === 'money-master' ||
                    item.type === 'money-page'
                );

        if (nearestCommercial) {

            lineageLevels.push(
                nearestCommercial
            );
        }
    }

    // ========================================================
    // REMOVE DUPLICATE AFTER LINEAGE
    // ========================================================

    const cleanLineage = [];

    const usedLineage = new Set();

    for (const item of lineageLevels) {

        const key =
            item.name.toLowerCase();

        if (usedLineage.has(key)) {
            continue;
        }

        usedLineage.add(key);

        cleanLineage.push(item);
    }

    // ========================================================
    // SORT NATURAL ORDER
    // ========================================================

    cleanLineage.sort((a, b) => {

        if (a.level !== b.level) {

            return a.level - b.level;
        }

        return a.position - b.position;
    });

    // ========================================================
    // MAX LEVEL SAFE
    // HOME + 3 PARENT + CURRENT
    // ========================================================

    const MAX_PARENT_LEVELS =
        CONFIG.MAX_LEVEL - 2;

    let finalParents =
        cleanLineage;

    // ========================================================
    // IMPORTANT:
    // NEVER SKIP NEAREST PARENT
    // ========================================================

    if (
        cleanLineage.length >
        MAX_PARENT_LEVELS
    ) {

        const nearestParent =
            cleanLineage[
                cleanLineage.length - 1
            ];

        const rootParents =
            cleanLineage.slice(
                0,
                MAX_PARENT_LEVELS - 1
            );

        finalParents = [

            ...rootParents,
            nearestParent
        ];
    }

    // ========================================================
    // INSERT PARENTS
    // ========================================================

    for (const item of finalParents) {

        selectedLevels.push(item);
    }

    // ========================================================
    // ADD CURRENT PAGE
    // ========================================================

    const hasCurrentAlready =
        selectedLevels.some(
            item =>
                item.name.toLowerCase() ===
                currentPageTitle.toLowerCase()
        );

    if (!hasCurrentAlready) {

        selectedLevels.push({

            name:
                currentPageTitle,

            url:
                currentFullUrl,

            type:
                currentPageType,

            level:
                TYPE_LEVEL_MAP[currentPageType] || 99,

            isCurrent:
                true
        });
    }

    // ============================================================
    // 21. FINAL UNIQUE LEVELS
    // ============================================================

    const uniqueLevels = [];

    const usedNames = new Set();

    for (const item of selectedLevels) {

        const key =
            item.name.toLowerCase();

        if (usedNames.has(key)) {
            continue;
        }

        usedNames.add(key);

        uniqueLevels.push(item);
    }

    // ============================================================
    // 22. POSITION FIX
    // ============================================================

    uniqueLevels.forEach((item, index) => {

        item.position =
            index + 1;
    });

    // ============================================================
    // 23. GENERATE HTML
    // ============================================================

    let breadcrumbHtml =
`<div class="breadcrumbs" itemscope itemtype="https://schema.org/BreadcrumbList">\n`;

    for (
        let i = 0;
        i < uniqueLevels.length;
        i++
    ) {

        const item =
            uniqueLevels[i];

        const isLast =
            i === uniqueLevels.length - 1;

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
    // 24. JSON LD
    // ============================================================

    const jsonLd = {

        "@context":
            "https://schema.org",

        "@type":
            "BreadcrumbList",

        "itemListElement":
            uniqueLevels.map((item, index) => ({

                "@type":
                    "ListItem",

                "position":
                    index + 1,

                "name":
                    item.name,

                "item":
                    item.url
            }))
    };

    // ============================================================
    // 25. REMOVE OLD
    // ============================================================

    document
        .querySelectorAll(
            '.breadcrumbs, .breadcrumb-nav, [aria-label="Breadcrumb"]'
        )
        .forEach(el => el.remove());

    document
        .querySelectorAll(
            'script[data-breadcrumb="true"]'
        )
        .forEach(el => el.remove());

    // ============================================================
    // 26. TARGET ELEMENT
    // ============================================================

    const targetElement =
        document.querySelector(
            'main, article, .content, #main-content, .post-content'
        );

    // ============================================================
    // 27. INJECT HTML
    // ============================================================

    if (targetElement) {

        targetElement.insertAdjacentHTML(
            'afterbegin',
            breadcrumbHtml
        );

    } else {

        document.body.insertAdjacentHTML(
            'afterbegin',
            breadcrumbHtml
        );
    }

    // ============================================================
    // 28. INJECT JSON LD
    // ============================================================

    const script =
        document.createElement('script');

    script.type =
        'application/ld+json';

    script.setAttribute(
        'data-breadcrumb',
        'true'
    );

    script.textContent =
        JSON.stringify(
            jsonLd,
            null,
            2
        );

    document.head.appendChild(script);

    // ============================================================
    // 29. RETURN
    // ============================================================

    return {

        html:
            breadcrumbHtml,

        jsonLd,

        selectedLevels:
            uniqueLevels,

        currentPageType,

        entityType,

        version:
            '7.2.1 FINAL',

        maxLevel:
            CONFIG.MAX_LEVEL
    };
}
// Menyimpan elemen yang dihapus dalam variabel
let removedElementsJasaPerbaikanKons = {};
// Fungsi untuk menghapus elemen berdasarkan ID
function removeCondition(conditionId) {
    const conditionElement = document.getElementById(conditionId);

    if (conditionElement) {
        // Menyimpan elemen yang dihapus dalam objek untuk bisa dikembalikan
        removedElementsJasaPerbaikanKons[conditionId] = conditionElement;
        conditionElement.remove(); // Menghapus elemen tersebut
    }
}

// Fungsi untuk mengembalikan elemen yang telah dihapus
function restoreCondition(conditionId) {
    const breadcrumb = document.querySelector('.breadcrumb');
    const elementToRestore = removedElementsJasaPerbaikanKons[conditionId]; // Mendapatkan elemen yang disimpan

    if (elementToRestore) {
        breadcrumb.appendChild(elementToRestore); // Menambahkan elemen kembali ke dalam breadcrumb
        delete removedElementsJasaPerbaikanKons[conditionId]; // Menghapus elemen dari objek setelah dikembalikan
    } else {
        console.log(`Elemen dengan ID ${conditionId} tidak ditemukan di removedElementsJasaPerbaikanKons.`);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    // var currentUrl = window.location.href;
     //const cleanUrl = currentUrl.split('?')[0]; // Menghapus parameter seperti ?m=1
    const cleanUrlJasaKons = window.location.href.split(/[?#]/)[0]; // Menghilangkan parameter seperti ?m=1

	// --- gabungkan semua mapping ---
    const urlMappingGabungan = Object.assign(
      {},
		urlMappingJasaKonsFromPillarSub2,
		urlMappingJasaAlatKonstruksiBridgeFromSub2Sub1,
		urlMappingJasaAlatKonstruksiBridgeFromSub2Sub1MoneyPage,
		//urlMappingJasaAlatKonstruksi, hapus karna isi nya sewa jadi pisahkan 
		urlMappingStrukturBridgeFromSub2Sub1,
		urlMappingRenovasiBridgeFromSub2Sub1,
		urlMappingFinishingBridgeFromSub2Sub1,
		urlMappingPerawatanPerbaikanBridgeFromSub2Sub1,
		urlMappingJalanPerkerasanBridgeFromSub2Sub1,
		urlMappingInfrastrukturBridgeFromSub2Sub1,
        urlMappingJasaPondasiBridgeFromSub2Sub1,
		urlMappingJasaSaluranDrainaseBridgeFromSub2Sub1,
        urlMappingJasaPematanganLahanBridgeFromSub2Sub1,
		urlMappingJasaJasaUjiTanahBridgeFromSub2Sub1,
        urlMappingJasaCuttingBetonBridgeFromSub2Sub1,
		urlMappingJasaBongkarBangunanBridgeFromSub2Sub1,
        urlMappingJasaBuangPuingBridgeFromSub2Sub1,
		urlMappingJasaPengeboranBridgeFromSub2Sub1,
		urlMappingJasaPerkuatanTanahLongsorBridgeFromSub2Sub1,
        urlMappingJasaPembatasPengamanBridgeFromSub2Sub1,
		urlMappingJasaInstalasiListrikBridgeFromSub2Sub1,
		
		urlMappingSewaAlatFromPillarSub2,
		urlMappingSewaAlatProyekFromSub2Sub1,
		urlMappingSewaAlatProyekFromSub1MoneyMaster,
		//urlMappingSewaAlatBeratFromSub1MoneyPage,
		urlMappingSewaAlatBeratFromSub2Sub1,
		urlMappingSewaAlatBeratFromSub1MoneyMaster,
		
		urlMappingSewaAlatRinganFromSub2Sub1,
		urlMappingSewaAlatRinganFromSub1MoneyMaster,
		
		urlMappingSewaAlatKonstruksiRinganFromSub1MoneyPage,

		urlMappingSewaAlatPendukungFromSub2Sub1,
		urlMappingSewaAlatPendukungFromSub1MoneyMaster,
		
        urlMappingInfrastrukturFromSub1MoneyMaster,
		urlMappingPerawatanPerbaikanBangunanFromSub1MoneyPage,
		urlMappingRenovasiFromSub1MoneyPage,
		urlMappingFinishingFromSub1MoneyPage,
		urlMappingStrukturFromSub1MoneyPage,
		urlMappingPondasiFromSub1MoneyPage,
		urlMappingSaluranFromSub1MoneyPage,
		urlMappingJalanFromSub1MoneyPage,
		urlMappingPematanganLahanFromSub1MoneyPage,
		urlMappingUjiTanahFromSub1MoneyPage,
		urlMappingPerkuatanTanahLongsorFromSub1MoneyPage,
		urlMappingBongkarBangunanFromSub1MoneyPage,
		urlMappingPengeboranFromSub1MoneyPage,
		urlMappingPembatasFromSub1MoneyPage,
		urlMappingJasaInstalasiListrikFromSub1MoneyPage
    );

    // --- validasi URL terdaftar ---
    if (!urlMappingGabungan[cleanUrlJasaKons]) {
      console.log(`[HybridDateModified] URL tidak terdaftar: ${cleanUrlJasaKons}`);
      return;
    }
	
/* ============================================================
 🔥 Hybrid Date Modified v7.6 — UNTUK betonjayareadymix.com
    ✅ FIXED: Variable name konsisten dengan PLD v19.0
    ✅ FIXED: pageLevelDetectorv19Ready (huruf kecil 'v')
    ✅ FULL COMPATIBLE: Page Level Detector v19.0, v18, v17
    ✅ FIX: Support JASA MONEY-MASTER detection
    ✅ FIX: 'home' TIDAK termasuk EVERGREEN_LEVELS
    ✅ Enhanced logging untuk debug
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
    const EVERGREEN_LEVELS = ['pillar', 'sub-pillar-tipe-2', 'variant', 'sub-variant'];
    const FLEXIBLE_LEVELS = ['sub-pillar-tipe-1'];
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
    // 📌 TUNGGU PAGE LEVEL DETECTOR READY (FIXED v7.6)
    // ============================================================
    function waitForPageLevelDetector() {
      return new Promise((resolve) => {
        // ✅ FIXED: Cek v19 dengan variable name yang benar
        if (window.pageLevelDetectorv19 && window.pageLevelDetectorv19Ready) {
          console.log("✅ Page Level Detector v19 already ready");
          resolve(true);
          return;
        }
        
        // ✅ FIXED: Cek v18 dengan variable name yang benar
        if (window.pageLevelDetectorV18 && window.pageLevelDetectorv18Ready) {
          console.log("✅ Page Level Detector v18 already ready");
          resolve(true);
          return;
        }
        
        // ✅ FIXED: Cek v17 dengan variable name yang benar
        if (window.pageLevelDetectorV17 && window.pageLevelDetectorv17Ready) {
          console.log("✅ Page Level Detector v17 already ready");
          resolve(true);
          return;
        }
        
        // ✅ FIXED: Cek legacy
        if (window.pageLevelDetector && window.__pageLevelDetectorReady) {
          console.log("✅ Page Level Detector legacy already ready");
          resolve(true);
          return;
        }
        
        // ✅ FIXED: Event listener dengan case yang benar
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
        
        window.addEventListener("pageLevelDetectorv19Ready", onReadyV19, { once: true });
        window.addEventListener("pageLevelDetectorV19Ready", onReadyV19, { once: true }); // backup
        window.addEventListener("pageLevelDetectorv18Ready", onReadyV18, { once: true });
        window.addEventListener("pageLevelDetectorReady", onReadyLegacy, { once: true });
        
        // Fallback timeout 10 detik (diperpanjang)
        setTimeout(() => {
          if (window.pageLevelDetectorv19 || window.pageLevelDetectorV18 || window.pageLevelDetector) {
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
      const PAGE_LEVEL_DETECTOR_URL = "https://raw.githack.com/aliyul/solution-blogger/main/PageLevelDetector.js";
      const EVERGREEN_DETECTOR_URL = "https://raw.githack.com/aliyul/solution-blogger/main/SmartEvergreenDetector.js";
      
      if (typeof window.pageLevelDetectorv19 === "undefined" && 
          typeof window.pageLevelDetectorV18 === "undefined" &&
          typeof window.pageLevelDetectorV17 === "undefined" &&
          typeof window.pageLevelDetector === "undefined") {
        console.log("⏳ Loading Page Level Detector v19.0...");
        await loadExternalJS(PAGE_LEVEL_DETECTOR_URL);
        await waitForPageLevelDetector();
        console.log("✅ Page Level Detector v19.0 READY");
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
    // 📌 GET PAGE LEVEL FROM DETECTOR (FIXED v7.6)
    // ============================================================
    async function getPageLevelFromDetector() {
      await new Promise(resolve => setTimeout(resolve, 300));
      
      let pageLevel = 'pillar';
      let entityType = 'produk';
      let detectorVersion = 'unknown';
      
      // ✅ PRIORITAS v19.0 (variable name yang benar)
      if (window.pageLevelDetectorv19 && typeof window.pageLevelDetectorv19.detect === 'function') {
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
      
      return { pageLevel, entityType, detectorVersion };
    }

    // ============================================================
    // 📌 EKSEKUSI UTAMA
    // ============================================================
    
    console.log("🔥 Hybrid Date Modified v7.6 - Starting...");
    
    await loadAllScripts();
    
    const { pageLevel, entityType, detectorVersion } = await getPageLevelFromDetector();
    
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
      hybridVersion: '7.6'
    };

    console.log(`✅ [HybridDateModified] ${uniquePageIdentifier}`);
    console.log(`   → Final Date Modified: ${isoDate}`);
    console.log(`   → Offset: ${offsetSeconds} detik (${Math.floor(offsetSeconds / 3600)} jam ${Math.floor((offsetSeconds % 3600) / 60)} menit)`);
    console.log(`   → Mode: ${manualMode ? 'MANUAL' : 'AUTO'}`);
    console.log(`   → Category: ${categoryLabel}`);
    console.log(`   → Detector: ${detectorVersion}`);
    console.log(`📋 Hybrid Date Modified v7.6 applied successfully`);

  } catch (err) {
    console.error("[HybridDateModified] Fatal error:", err);
  }
})();
	
     // Menemukan elemen menggunakan Id
    var JasaKons = document.getElementById("JasaKons");
    var JasaKonsSub = document.getElementById("JasaKonsSub");
    //var JasaKonsPerbaikanSub = document.getElementById("JasaKonsPerbaikanSub");
/*
    if (!JasaKonsPerbaikan) {
	if (!JasaKonsPerbaikanSub) {
	console.error("elemen Id JasaKonsPerbaikan kondisi terhapus");
	console.error("elemen Id JasaKonsPerbaikanSub kondisi terhapus");
        return;
    	} else {
       	console.error("elemen Id JasaKonsPerbaikanSub kondisi terhapus");
	}
    } else if (!JasaKonsPerbaikanSub) {
	console.error("elemen Id JasaKonsPerbaikan kondisi terhapus");
    } else {
    
    }
    */
	
if (!JasaKons && !JasaKonsSub) {
console.error("elemen Id JasaKons dan Id JasaKonsSub kondisi terhapus");
        return;
}
if (!JasaKons || !JasaKonsSub) {
	if (!JasaKons) {
	console.error("elemen Id JasaKons kondisi terhapus");
	}
	if (!JasaKonsSub) {
	console.error("elemen Id JasaKonsSub kondisi terhapus");
}
}

	//bagian2 dari jasa konstruksi umum dan panduan
	var JasaKonstruksiLink = document.getElementById("JasaKonstruksi");
     	var JasaKonstruksiSubLink = document.getElementById("JasaKonstruksiSub");
	
	//bagian2 dari jasa konstruksi aplikasi
	
	var JasaAlatKonstruksiLink = document.getElementById("JasaAlatKonstruksi");

	var SewaAlatKonstruksiLink = document.getElementById("SewaAlatKonstruksi");
	var SewaAlatBeratLink = document.getElementById("SewaAlatBerat");
	var SewaAlatKonstruksiRinganLink = document.getElementById("SewaAlatKonstruksiRingan");
	
	var JasaInstalasiListrikLink = document.getElementById("JasaInstalasiListrik");
	var JasaRenovasiPerbaikanLink = document.getElementById("JasaRenovasiPerbaikan");
        var JasaStrukturKonstruksiLink = document.getElementById("JasaStrukturKonstruksi");
	var JasaFinishingLink = document.getElementById("JasaFinishing");
	var JasaPondasiPerkuatanLink = document.getElementById("JasaPondasiPerkuatan");
	var JasaSaluranDrainaseLink = document.getElementById("JasaSaluranDrainase");
	var JasaJalanPerkerasanLink = document.getElementById("JasaJalanPerkerasan");
	var JasaPematanganLahanLink = document.getElementById("JasaPematanganLahan");
	var JasaUjiTanahLink = document.getElementById("JasaUjiTanah");
	var JasaPembatasPengamanLink = document.getElementById("JasaPembatasPengaman");
	var JasaBongkarBangunanLink = document.getElementById("JasaBongkarBangunan");
	var JasaPerawatanPerbaikanBangunanLink = document.getElementById("JasaPerawatanPerbaikanBangunan");
	var JasaPerbaikanInfrastrukturLink = document.getElementById("JasaPerbaikanInfrastruktur");
	var JasaPengeboranLink = document.getElementById("JasaPengeboran");
	   // var JasaBorTeknikLink = document.getElementById("JasaBorTeknik");
		var JasaBorAirSumurLink = document.getElementById("JasaBorAirSumur");
		var JasaBorPileLink = document.getElementById("JasaBorPile");
		var JasaCoringBetonLink = document.getElementById("JasaCoringBeton");
		var JasaBorBetonLink = document.getElementById("JasaBorBeton");
		var JasaBorTanahLink = document.getElementById("JasaBorTanah");
		var JasaBorHorizontalLink = document.getElementById("JasaBorHorizontal");
		var JasaBorTembokLink = document.getElementById("JasaBorTembok");
		
	//var JasaKonstruksiCustomLink = document.getElementById("JasaKonstruksiCustom");
	
     var pageNameKonstruksi = document.getElementById("pageNameKonstruksi");
     var pageNameKonstruksiSub = document.getElementById("pageNameKonstruksiSub");
    	
     // Default untuk menyembunyikan elemen
     JasaKonstruksiLink.style.visibility = 'hidden';
     JasaKonstruksiSubLink.style.visibility = 'hidden';
	JasaAlatKonstruksiLink.style.visibility = 'hidden';
	SewaAlatKonstruksiLink.style.visibility = 'hidden';
	SewaAlatBeratLink.style.visibility = 'hidden';
	SewaAlatKonstruksiRinganLink.style.visibility = 'hidden';

	JasaInstalasiListrikLink.style.visibility = 'hidden';
     	JasaRenovasiPerbaikanLink.style.visibility = 'hidden';
	JasaStrukturKonstruksiLink.style.visibility = 'hidden';
	JasaFinishingLink.style.visibility = 'hidden';
	JasaPondasiPerkuatanLink.style.visibility = 'hidden';
	JasaSaluranDrainaseLink.style.visibility = 'hidden';
	JasaJalanPerkerasanLink.style.visibility = 'hidden';
	JasaPematanganLahanLink.style.visibility = 'hidden';
	JasaUjiTanahLink.style.visibility = 'hidden';
	JasaPembatasPengamanLink.style.visibility = 'hidden';
	JasaBongkarBangunanLink.style.visibility = 'hidden';
	JasaPengeboranLink.style.visibility = 'hidden';
	JasaPerawatanPerbaikanBangunanLink.style.visibility = 'hidden';
	JasaPerbaikanInfrastrukturLink.style.visibility = 'hidden';
		JasaBorAirSumurLink.style.visibility = 'hidden';
	    //JasaBorTeknikLink.style.visibility = 'hidden';
		JasaBorPileLink.style.visibility = 'hidden';
		JasaCoringBetonLink.style.visibility = 'hidden';
		JasaBorBetonLink.style.visibility = 'hidden';
		JasaBorTanahLink.style.visibility = 'hidden';
		JasaBorHorizontalLink.style.visibility = 'hidden';
		JasaBorTembokLink.style.visibility = 'hidden';
	
	//JasaKonstruksiCustomLink.style.visibility = 'hidden';
    pageNameKonstruksi.textContent = "";
    pageNameKonstruksiSub.textContent = "";

if (urlMappingJasaKonsFromPillarSub2[cleanUrlJasaKons]) {
        restoreCondition('JasaKons');
	restoreCondition('JasaKonstruksi');
           // hapus elemen id DIV Lain
	removeCondition('ProdukInFur');
        removeCondition('MaterialKons');
	removeCondition('ProdukKons');
        //removeCondition('ProdukKonsSaluran');
        //removeCondition('ProdukKonsPembatasPost');
        removeCondition('JasaKonsPondasiTanah');
        removeCondition('JasaKonsJalanPerkerasan');
        removeCondition('JasaKonsPembatas');
        removeCondition('JasaKonsPerbaikan');
        removeCondition('JasaKonsFinishing');
        removeCondition('JasaKonsStruktur');
	removeCondition('JasaKonsSub');
	removeCondition('MenuKons');
	
	    
       // hapus elemen id DIV Lain

        JasaKonstruksiLink.style.visibility = 'visible';
        pageNameKonstruksi.textContent = urlMappingJasaKonsFromPillarSub2[cleanUrlJasaKons];
	
	   generateBreadcrumbJasaKonstruksi(
        urlMappingJasaKonsFromPillarSub2,
        cleanUrlJasaKons,
       [
           // { name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' }
           // { name: 'Daftar Jasa Struktur Konstruksi', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-struktur-konstruksi.html' }
        ],
        'JASA_KONSTRUKSI'
    );
	
    }
	/*
   // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaKonsFromPillarSub2[cleanUrlJasaKons]) {
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
                   "name": urlMappingJasaKonsFromPillarSub2[cleanUrlJasaKons],
                   "item": cleanUrlJasaKons
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
	*/
	
//AWAL JASA KONTRUKSI ALAT
	
if (urlMappingJasaAlatKonstruksiBridgeFromSub2Sub1[cleanUrlJasaKons]) {
		restoreCondition('JasaKonsSub');
		restoreCondition('JasaAlatKonstruksi');
           // hapus elemen id DIV Lain
		removeCondition('ProdukInFur');
        removeCondition('MaterialKons');
	removeCondition('ProdukKons');
        //removeCondition('ProdukKonsSaluran');
        //removeCondition('ProdukKonsPembatas');
        removeCondition('JasaKonsPondasiTanah');
        removeCondition('JasaKonsPembatas');
        removeCondition('JasaKonsJalanPerkerasan');
        removeCondition('JasaKonsPerbaikan');
	removeCondition('JasaKonsFinishing');
        removeCondition('JasaKonsStruktur');
	removeCondition('JasaKons');
	removeCondition('MenuKons');

	// hapus elemen id DIV Lain
	removeCondition('SewaAlatKonstruksi');
	removeCondition('SewaAlatBerat');
	removeCondition('SewaAlatKonstruksiRingan');

		removeCondition('JasaInstalasiListrik');
	removeCondition('JasaRenovasiPerbaikan');
	removeCondition('JasaStrukturKonstruksi');
        removeCondition('JasaFinishing');
        removeCondition('JasaPondasiPerkuatan');
        removeCondition('JasaSaluranDrainase');
        removeCondition('JasaJalanPerkerasan');
	removeCondition('JasaPematanganLahan');
	removeCondition('JasaUjiTanah');
        removeCondition('JasaPembatasPengaman');
	removeCondition('JasaPerkuatanTanahLongsor');
	removeCondition('JasaBongkarBangunan');
	removeCondition('JasaPerawatanPerbaikanBangunan');
	removeCondition('JasaPerbaikanInfrastruktur');
	removeCondition('JasaPengeboran');
		removeCondition('JasaBorAirSumur');
		removeCondition('JasaBorPile');
		removeCondition('JasaCoringBeton');
		removeCondition('JasaBorBeton');
		removeCondition('JasaBorTanah');
		removeCondition('JasaBorHorizontal');
		removeCondition('JasaBorTembok');

        JasaKonstruksiSubLink.style.visibility = 'visible';
        JasaAlatKonstruksiLink.style.visibility = 'visible';
	    
        pageNameKonstruksiSub.textContent = urlMappingJasaAlatKonstruksiBridgeFromSub2Sub1[cleanUrlJasaKons];
    }
// ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaAlatKonstruksiBridgeFromSub2Sub1[cleanUrlJasaKons]) {
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
                   "name": "Jasa Alat Konstruksi",
                   "item": "https://www.betonjayareadymix.com/p/jasa-alat-konstruksi.html"
               },
               {
                   "@type": "ListItem",
                   "position": 4,
                   "name": urlMappingJasaAlatKonstruksiBridgeFromSub2Sub1[cleanUrlJasaKons],
                   "item": cleanUrlJasaKons
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
	
if (urlMappingJasaAlatKonstruksiBridgeFromSub2Sub1MoneyPage[cleanUrlJasaKons]) {
		restoreCondition('JasaKonsSub');
		restoreCondition('JasaAlatKonstruksi');
           // hapus elemen id DIV Lain
		removeCondition('ProdukInFur');
        removeCondition('MaterialKons');
	removeCondition('ProdukKons');
        //removeCondition('ProdukKonsSaluran');
        //removeCondition('ProdukKonsPembatas');
        removeCondition('JasaKonsPondasiTanah');
        removeCondition('JasaKonsPembatas');
        removeCondition('JasaKonsJalanPerkerasan');
        removeCondition('JasaKonsPerbaikan');
	removeCondition('JasaKonsFinishing');
        removeCondition('JasaKonsStruktur');
	removeCondition('JasaKons');
	removeCondition('MenuKons');

	// hapus elemen id DIV Lain
	removeCondition('SewaAlatKonstruksi');
	removeCondition('SewaAlatBerat');
	removeCondition('SewaAlatKonstruksiRingan');

		removeCondition('JasaInstalasiListrik');
	removeCondition('JasaRenovasiPerbaikan');
	removeCondition('JasaStrukturKonstruksi');
        removeCondition('JasaFinishing');
        removeCondition('JasaPondasiPerkuatan');
        removeCondition('JasaSaluranDrainase');
        removeCondition('JasaJalanPerkerasan');
	removeCondition('JasaPematanganLahan');
	removeCondition('JasaUjiTanah');
        removeCondition('JasaPembatasPengaman');
	removeCondition('JasaPerkuatanTanahLongsor');
	removeCondition('JasaBongkarBangunan');
	removeCondition('JasaPerawatanPerbaikanBangunan');
	removeCondition('JasaPerbaikanInfrastruktur');
	removeCondition('JasaPengeboran');
		removeCondition('JasaBorAirSumur');
		removeCondition('JasaBorPile');
		removeCondition('JasaCoringBeton');
		removeCondition('JasaBorBeton');
		removeCondition('JasaBorTanah');
		removeCondition('JasaBorHorizontal');
		removeCondition('JasaBorTembok');

        JasaKonstruksiSubLink.style.visibility = 'visible';
        JasaAlatKonstruksiLink.style.visibility = 'visible';
	    
        pageNameKonstruksiSub.textContent = urlMappingJasaAlatKonstruksiBridgeFromSub2Sub1MoneyPage[cleanUrlJasaKons];
    }
// ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaAlatKonstruksiBridgeFromSub2Sub1MoneyPage[cleanUrlJasaKons]) {
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
                   "name": "Jasa Alat Konstruksi",
                   "item": "https://www.betonjayareadymix.com/p/jasa-alat-konstruksi.html"
               },
               {
                   "@type": "ListItem",
                   "position": 4,
                   "name": urlMappingJasaAlatKonstruksiBridgeFromSub2Sub1MoneyPage[cleanUrlJasaKons],
                   "item": cleanUrlJasaKons
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }

	if (urlMappingStrukturBridgeFromSub2Sub1[cleanUrlJasaKons]) {
        //pageNameKonstruksiSub.textContent = urlMappingStrukturBridgeFromSub2Sub1[cleanUrlJasaKons];
	generateBreadcrumbJasaKonstruksi(
        urlMappingStrukturBridgeFromSub2Sub1,
        cleanUrlJasaKons,
       [
           // { name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Struktur Konstruksi', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-struktur-konstruksi.html' }
        ],
        'JASA_KONSTRUKSI'
    );
	
    }

	if (urlMappingRenovasiBridgeFromSub2Sub1[cleanUrlJasaKons]) {
        //pageNameKonstruksiSub.textContent = urlMappingRenovasiBridgeFromSub2Sub1[cleanUrlJasaKons];
	
	generateBreadcrumbJasaKonstruksi(
        urlMappingRenovasiBridgeFromSub2Sub1,
        cleanUrlJasaKons,
       [
           // { name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Renovasi', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-removasi.html' }
        ],
        'JASA_KONSTRUKSI'
    );
	
    }

 	if (urlMappingFinishingBridgeFromSub2Sub1[cleanUrlJasaKons]) {
        //pageNameKonstruksiSub.textContent = urlMappingFinishingBridgeFromSub2Sub1[cleanUrlJasaKons];
	
	generateBreadcrumbJasaKonstruksi(
        urlMappingFinishingBridgeFromSub2Sub1,
        cleanUrlJasaKons,
       [
            //{ name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Finishing', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-finishing.html' }
        ],
        'JASA_KONSTRUKSI'
    );
	
    }

if (urlMappingPerawatanPerbaikanBridgeFromSub2Sub1[cleanUrlJasaKons]) {
        //pageNameKonstruksiSub.textContent = urlMappingPerawatanPerbaikanBridgeFromSub2Sub1[cleanUrlJasaKons];
	generateBreadcrumbJasaKonstruksi(
        urlMappingPerawatanPerbaikanBridgeFromSub2Sub1,
        cleanUrlJasaKons,
       [
            //{ name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Perawatan Perbaikan Bangunan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-perawatan-perbaikan-bangunan.html' }
        ],
        'JASA_KONSTRUKSI'
    );
	
    }
	
	if (urlMappingJalanPerkerasanBridgeFromSub2Sub1[cleanUrlJasaKons]) {
        //pageNameKonstruksiSub.textContent = urlMappingJalanPerkerasanBridgeFromSub2Sub1[cleanUrlJasaKons];
	generateBreadcrumbJasaKonstruksi(
        urlMappingJalanPerkerasanBridgeFromSub2Sub1,
        cleanUrlJasaKons,
       [
           // { name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Jalan & Perkerasan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-jalan-perkerasan.html' }
        ],
        'JASA_KONSTRUKSI'
    );
	
    }

	if (urlMappingInfrastrukturBridgeFromSub2Sub1[cleanUrlJasaKons]) {
        //pageNameKonstruksiSub.textContent = urlMappingInfrastrukturBridgeFromSub2Sub1[cleanUrlJasaKons];
	generateBreadcrumbJasaKonstruksi(
        urlMappingInfrastrukturBridgeFromSub2Sub1,
        cleanUrlJasaKons,
       [
            //{ name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Perbaikan Infrastruktur', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-perbaikan-infrastruktur.html' }
        ],
        'JASA_KONSTRUKSI'
    );
	
    }
 
	if (urlMappingJasaPondasiBridgeFromSub2Sub1[cleanUrlJasaKons]) {
        //pageNameKonstruksiSub.textContent = urlMappingJasaPondasiBridgeFromSub2Sub1[cleanUrlJasaKons];
	generateBreadcrumbJasaKonstruksi(
        urlMappingJasaPondasiBridgeFromSub2Sub1,
        cleanUrlJasaKons,
       [
            //{ name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Pondasi & Perkuatan Tanah', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-pondasi-perkuatan-tanah.html' }
        ],
        'JASA_KONSTRUKSI'
    );
	
    }

		if (urlMappingJasaSaluranDrainaseBridgeFromSub2Sub1[cleanUrlJasaKons]) {
        //pageNameKonstruksiSub.textContent = urlMappingJasaSaluranDrainaseBridgeFromSub2Sub1[cleanUrlJasaKons];
	generateBreadcrumbJasaKonstruksi(
        urlMappingJasaSaluranDrainaseBridgeFromSub2Sub1,
        cleanUrlJasaKons,
       [
            //{ name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Saluran & Drainase', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-saluran-drainase.html' }
        ],
        'JASA_KONSTRUKSI'
    );
	
    }
		if (urlMappingJasaPematanganLahanBridgeFromSub2Sub1[cleanUrlJasaKons]) {
        //pageNameKonstruksiSub.textContent = urlMappingJasaPematanganLahanBridgeFromSub2Sub1[cleanUrlJasaKons];
	generateBreadcrumbJasaKonstruksi(
        urlMappingJasaPematanganLahanBridgeFromSub2Sub1,
        cleanUrlJasaKons,
       [
           // { name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Pematangan Lahan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-pematangan-lahan.html' }
        ],
        'JASA_KONSTRUKSI'
    );
	
    }
		if (urlMappingJasaJasaUjiTanahBridgeFromSub2Sub1[cleanUrlJasaKons]) {
        //pageNameKonstruksiSub.textContent = urlMappingJasaJasaUjiTanahBridgeFromSub2Sub1[cleanUrlJasaKons];
	generateBreadcrumbJasaKonstruksi(
        urlMappingJasaJasaUjiTanahBridgeFromSub2Sub1,
        cleanUrlJasaKons,
       [
            //{ name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Uji Tanah', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-uji-tanah.html' }
        ],
        'JASA_KONSTRUKSI'
    );
	
    }
		if (urlMappingJasaCuttingBetonBridgeFromSub2Sub1[cleanUrlJasaKons]) {
        //pageNameKonstruksiSub.textContent = urlMappingJasaCuttingBetonBridgeFromSub2Sub1[cleanUrlJasaKons];
	generateBreadcrumbJasaKonstruksi(
        urlMappingJasaCuttingBetonBridgeFromSub2Sub1,
        cleanUrlJasaKons,
       [
           // { name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Cutting Beton', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-cutting-beton.html' }
        ],
        'JASA_KONSTRUKSI'
    );
	}
	
	if (urlMappingJasaPengeboranBridgeFromSub2Sub1[cleanUrlJasaKons]) {
        //pageNameKonstruksiSub.textContent = urlMappingJasaPengeboranBridgeFromSub2Sub1[cleanUrlJasaKons];
	generateBreadcrumbJasaKonstruksi(
        urlMappingJasaPengeboranBridgeFromSub2Sub1,
        cleanUrlJasaKons,
       [
           // { name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Pengeboran', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-pengeboran.html' }
        ],
        'JASA_KONSTRUKSI'
    );
	
    }
		if (urlMappingJasaPerkuatanTanahLongsorBridgeFromSub2Sub1[cleanUrlJasaKons]) {
        //pageNameKonstruksiSub.textContent = urlMappingJasaPerkuatanTanahLongsorBridgeFromSub2Sub1[cleanUrlJasaKons];
	generateBreadcrumbJasaKonstruksi(
        urlMappingJasaPerkuatanTanahLongsorBridgeFromSub2Sub1,
        cleanUrlJasaKons,
       [
            //{ name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Perkuatan Tanah Longsor', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-perkuatan-tanah-longsor.html' }
        ],
        'JASA_KONSTRUKSI'
    );
	
    }
	
	if (urlMappingJasaPembatasPengamanBridgeFromSub2Sub1[cleanUrlJasaKons]) {
        //pageNameKonstruksiSub.textContent = urlMappingJasaPembatasPengamanBridgeFromSub2Sub1[cleanUrlJasaKons];
	generateBreadcrumbJasaKonstruksi(
        urlMappingJasaPembatasPengamanBridgeFromSub2Sub1,
        cleanUrlJasaKons,
       [
            //{ name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Pembatas Pengaman', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-pembatas-pengaman.html' }
        ],
        'JASA_KONSTRUKSI'
    );
	
    }

if (urlMappingJasaInstalasiListrikBridgeFromSub2Sub1[cleanUrlJasaKons]) {
	
	generateBreadcrumbJasaKonstruksi(
        urlMappingJasaInstalasiListrikBridgeFromSub2Sub1,
        cleanUrlJasaKons,
       [
            //{ name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Instalasi Listrik', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-instalasi-listrik.html' }
        ],
        'JASA_KONSTRUKSI'
    );
	
    }
	
 
/*
  //AWAL JASA KONTRUKSI ALAT
if (urlMappingJasaAlatKonstruksi[cleanUrlJasaKons]) {
        restoreCondition('JasaKonsSub');
	restoreCondition('JasaAlatKonstruksi');
           // hapus elemen id DIV Lain
	removeCondition('ProdukInFur');
        removeCondition('MaterialKons');
	removeCondition('ProdukKons');
        //removeCondition('ProdukKonsSaluran');
        //removeCondition('ProdukKonsPembatas');
        removeCondition('JasaKonsPondasiTanah');
        removeCondition('JasaKonsPembatas');
        removeCondition('JasaKonsJalanPerkerasan');
        removeCondition('JasaKonsPerbaikan');
	removeCondition('JasaKonsFinishing');
        removeCondition('JasaKonsStruktur');
	removeCondition('JasaKons');
	removeCondition('MenuKons');

	// hapus elemen id DIV Lain
	removeCondition('SewaAlatKonstruksi');
	removeCondition('SewaAlatBerat');
	removeCondition('SewaAlatKonstruksiRingan');

		removeCondition('JasaInstalasiListrik');
	removeCondition('JasaRenovasiPerbaikan');
	removeCondition('JasaStrukturKonstruksi');
        removeCondition('JasaFinishing');
        removeCondition('JasaPondasiPerkuatan');
        removeCondition('JasaSaluranDrainase');
        removeCondition('JasaJalanPerkerasan');
	removeCondition('JasaPematanganLahan');
	removeCondition('JasaUjiTanah');
        removeCondition('JasaPembatasPengaman');
	removeCondition('JasaPerkuatanTanahLongsor');
	removeCondition('JasaBongkarBangunan');
	removeCondition('JasaPerawatanPerbaikanBangunan');
	removeCondition('JasaPerbaikanInfrastruktur');
	removeCondition('JasaPengeboran');
		removeCondition('JasaBorAirSumur');
		removeCondition('JasaBorPile');
		removeCondition('JasaCoringBeton');
		removeCondition('JasaBorBeton');
		removeCondition('JasaBorTanah');
		removeCondition('JasaBorHorizontal');
		removeCondition('JasaBorTembok');

        JasaKonstruksiSubLink.style.visibility = 'visible';
        JasaAlatKonstruksiLink.style.visibility = 'visible';
	    
        pageNameKonstruksiSub.textContent = urlMappingJasaAlatKonstruksi[cleanUrlJasaKons];
    }
// ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaAlatKonstruksi[cleanUrlJasaKons]) {
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
                   "name": "Jasa Alat Konstruksi",
                   "item": "https://www.betonjayareadymix.com/p/jasa-alat-konstruksi.html"
               },
               {
                   "@type": "ListItem",
                   "position": 4,
                   "name": urlMappingJasaAlatKonstruksi[cleanUrlJasaKons],
                   "item": cleanUrlJasaKons
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
*/
	
	//SUB DARI PILLAR SEWA ALAT KONSTRUKSI
if (urlMappingSewaAlatFromPillarSub2[cleanUrlJasaKons]) {
        restoreCondition('JasaKonsSub');
	//restoreCondition('JasaKonstruksi');
	restoreCondition('SewaAlatKonstruksi');

	//hapus pillar jasa konstruksi
	removeCondition('JasaKonstruksiSub');
           // hapus elemen id DIV Lain
	removeCondition('ProdukInFur');
        removeCondition('MaterialKons');
	removeCondition('JasaAlatKonstruksi');
	removeCondition('ProdukKons');
        //removeCondition('ProdukKonsSaluran');
        //removeCondition('ProdukKonsPembatas');
        removeCondition('JasaKonsPondasiTanah');
        removeCondition('JasaKonsPembatas');
        removeCondition('JasaKonsJalanPerkerasan');
        removeCondition('JasaKonsPerbaikan');
	removeCondition('JasaKonsFinishing');
        removeCondition('JasaKonsStruktur');
	removeCondition('JasaKons');
	removeCondition('MenuKons');

	// hapus elemen id DIV Lain selain SewaAlatKonstruksi dan JasaAlatKonstruksi
	removeCondition('SewaAlatBerat');
	removeCondition('SewaAlatKonstruksiRingan');

	   	removeCondition('JasaInstalasiListrik');
	removeCondition('JasaRenovasiPerbaikan');
	removeCondition('JasaStrukturKonstruksi');
        removeCondition('JasaFinishing');
        removeCondition('JasaPondasiPerkuatan');
        removeCondition('JasaSaluranDrainase');
        removeCondition('JasaJalanPerkerasan');
	removeCondition('JasaPematanganLahan');
	removeCondition('JasaUjiTanah');
        removeCondition('JasaPembatasPengaman');
	removeCondition('JasaPerkuatanTanahLongsor');
	removeCondition('JasaBongkarBangunan');
	removeCondition('JasaPerawatanPerbaikanBangunan');
	removeCondition('JasaPerbaikanInfrastruktur');
	removeCondition('JasaPengeboran');
		removeCondition('JasaBorAirSumur');
		removeCondition('JasaBorPile');
		removeCondition('JasaCoringBeton');
		removeCondition('JasaBorBeton');
		removeCondition('JasaBorTanah');
		removeCondition('JasaBorHorizontal');
		removeCondition('JasaBorTembok');

        //JasaKonstruksiSubLink.style.visibility = 'visible';
       // JasaAlatKonstruksiLink.style.visibility = 'visible';
        SewaAlatKonstruksiLink.style.visibility = 'visible';
	    
        pageNameKonstruksiSub.textContent = urlMappingSewaAlatFromPillarSub2[cleanUrlJasaKons];
    }
 // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingSewaAlatFromPillarSub2[cleanUrlJasaKons]) {
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
                   "name": "Sewa Alat Konstruksi",
                   "item": "https://www.betonjayareadymix.com/p/sewa-alat-konstruksi.html"
               },
               {
                   "@type": "ListItem",
                   "position": 3,
                   "name": urlMappingSewaAlatFromPillarSub2[cleanUrlJasaKons],
                   "item": cleanUrlJasaKons
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }

if (urlMappingSewaAlatProyekFromSub2Sub1[cleanUrlJasaKons]) {
        restoreCondition('JasaKonsSub');
	//restoreCondition('JasaKonstruksi');
	restoreCondition('SewaAlatKonstruksi');

	//hapus pillar jasa konstruksi
	removeCondition('JasaKonstruksiSub');
           // hapus elemen id DIV Lain
	removeCondition('ProdukInFur');
        removeCondition('MaterialKons');
	removeCondition('JasaAlatKonstruksi');
	removeCondition('ProdukKons');
        //removeCondition('ProdukKonsSaluran');
        //removeCondition('ProdukKonsPembatas');
        removeCondition('JasaKonsPondasiTanah');
        removeCondition('JasaKonsPembatas');
        removeCondition('JasaKonsJalanPerkerasan');
        removeCondition('JasaKonsPerbaikan');
	removeCondition('JasaKonsFinishing');
        removeCondition('JasaKonsStruktur');
	removeCondition('JasaKons');
	removeCondition('MenuKons');

	// hapus elemen id DIV Lain selain SewaAlatKonstruksi dan JasaAlatKonstruksi
	removeCondition('SewaAlatBerat');
	removeCondition('SewaAlatKonstruksiRingan');

	   	removeCondition('JasaInstalasiListrik');
	removeCondition('JasaRenovasiPerbaikan');
	removeCondition('JasaStrukturKonstruksi');
        removeCondition('JasaFinishing');
        removeCondition('JasaPondasiPerkuatan');
        removeCondition('JasaSaluranDrainase');
        removeCondition('JasaJalanPerkerasan');
	removeCondition('JasaPematanganLahan');
	removeCondition('JasaUjiTanah');
        removeCondition('JasaPembatasPengaman');
	removeCondition('JasaPerkuatanTanahLongsor');
	removeCondition('JasaBongkarBangunan');
	removeCondition('JasaPerawatanPerbaikanBangunan');
	removeCondition('JasaPerbaikanInfrastruktur');
	removeCondition('JasaPengeboran');
		removeCondition('JasaBorAirSumur');
		removeCondition('JasaBorPile');
		removeCondition('JasaCoringBeton');
		removeCondition('JasaBorBeton');
		removeCondition('JasaBorTanah');
		removeCondition('JasaBorHorizontal');
		removeCondition('JasaBorTembok');

        //JasaKonstruksiSubLink.style.visibility = 'visible';
       // JasaAlatKonstruksiLink.style.visibility = 'visible';
        SewaAlatKonstruksiLink.style.visibility = 'visible';
	    
        pageNameKonstruksiSub.textContent = urlMappingSewaAlatProyekFromSub2Sub1[cleanUrlJasaKons];

	   generateBreadcrumbJasaKonstruksi(
        urlMappingSewaAlatProyekFromSub2Sub1,
        cleanUrlJasaKons,
       [
           // { name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Sewa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/sewa-alat-konstruksi.html' },
            { name: 'Daftar Sewa Alat Proyek', url: 'https://www.betonjayareadymix.com/p/daftar-sewa-alat-proyek.html' }
        ],
        'SEWA_ALAT_KONSTRUKSI'
    );
 }
if (urlMappingSewaAlatRinganFromSub2Sub1[cleanUrlJasaKons]) {
   	   generateBreadcrumbJasaKonstruksi(
        urlMappingSewaAlatRinganFromSub2Sub1,
        cleanUrlJasaKons,
       [
           // { name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Sewa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/sewa-alat-konstruksi.html' },
            { name: 'Daftar Sewa Alat Ringan', url: 'https://www.betonjayareadymix.com/p/daftar-sewa-alat-ringan.html' }
        ],
        'SEWA_ALAT_KONSTRUKSI'
    );
 }
	if (urlMappingSewaAlatPendukungFromSub2Sub1[cleanUrlJasaKons]) {
   	   generateBreadcrumbJasaKonstruksi(
        urlMappingSewaAlatPendukungFromSub2Sub1,
        cleanUrlJasaKons,
       [
           // { name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Sewa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/sewa-alat-konstruksi.html' },
            { name: 'Daftar Sewa Alat Pendukung', url: 'https://www.betonjayareadymix.com/p/daftar-sewa-alat-pendukung.html' }
        ],
        'SEWA_ALAT_KONSTRUKSI'
    );
 }
if (urlMappingSewaAlatProyekFromSub1MoneyMaster[cleanUrlJasaKons]) {
        restoreCondition('JasaKonsSub');
	//restoreCondition('JasaKonstruksi');
	restoreCondition('SewaAlatKonstruksi');

	//hapus pillar jasa konstruksi
	removeCondition('JasaKonstruksiSub');
           // hapus elemen id DIV Lain
	removeCondition('ProdukInFur');
        removeCondition('MaterialKons');
	removeCondition('JasaAlatKonstruksi');
	removeCondition('ProdukKons');
        //removeCondition('ProdukKonsSaluran');
        //removeCondition('ProdukKonsPembatas');
        removeCondition('JasaKonsPondasiTanah');
        removeCondition('JasaKonsPembatas');
        removeCondition('JasaKonsJalanPerkerasan');
        removeCondition('JasaKonsPerbaikan');
	removeCondition('JasaKonsFinishing');
        removeCondition('JasaKonsStruktur');
	removeCondition('JasaKons');
	removeCondition('MenuKons');

	// hapus elemen id DIV Lain selain SewaAlatKonstruksi dan JasaAlatKonstruksi
	removeCondition('SewaAlatBerat');
	removeCondition('SewaAlatKonstruksiRingan');

	   	removeCondition('JasaInstalasiListrik');
	removeCondition('JasaRenovasiPerbaikan');
	removeCondition('JasaStrukturKonstruksi');
        removeCondition('JasaFinishing');
        removeCondition('JasaPondasiPerkuatan');
        removeCondition('JasaSaluranDrainase');
        removeCondition('JasaJalanPerkerasan');
	removeCondition('JasaPematanganLahan');
	removeCondition('JasaUjiTanah');
        removeCondition('JasaPembatasPengaman');
	removeCondition('JasaPerkuatanTanahLongsor');
	removeCondition('JasaBongkarBangunan');
	removeCondition('JasaPerawatanPerbaikanBangunan');
	removeCondition('JasaPerbaikanInfrastruktur');
	removeCondition('JasaPengeboran');
		removeCondition('JasaBorAirSumur');
		removeCondition('JasaBorPile');
		removeCondition('JasaCoringBeton');
		removeCondition('JasaBorBeton');
		removeCondition('JasaBorTanah');
		removeCondition('JasaBorHorizontal');
		removeCondition('JasaBorTembok');

        //JasaKonstruksiSubLink.style.visibility = 'visible';
       // JasaAlatKonstruksiLink.style.visibility = 'visible';
        SewaAlatKonstruksiLink.style.visibility = 'visible';
	    
        pageNameKonstruksiSub.textContent = urlMappingSewaAlatProyekFromSub1MoneyMaster[cleanUrlJasaKons];

	   generateBreadcrumbJasaKonstruksi(
        urlMappingSewaAlatProyekFromSub1MoneyMaster,
        cleanUrlJasaKons,
       [
           // { name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Sewa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/sewa-alat-konstruksi.html' },
            { name: 'Daftar Sewa Alat Proyek', url: 'https://www.betonjayareadymix.com/p/daftar-sewa-alat-proyek.html' },
            { name: 'Perbandingan Sewa Alat Proyek', url: 'https://www.betonjayareadymix.com/p/perbandingan-sewa-alat-proyek.html' }
        ],
        'SEWA_ALAT_KONSTRUKSI'
    );
 }
if (urlMappingSewaAlatRinganFromSub1MoneyMaster[cleanUrlJasaKons]) {
    generateBreadcrumbJasaKonstruksi(
        urlMappingSewaAlatRinganFromSub1MoneyMaster,
        cleanUrlJasaKons,
       [
           // { name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Sewa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/sewa-alat-konstruksi.html' },
            { name: 'Daftar Sewa Alat Ringan', url: 'https://www.betonjayareadymix.com/p/daftar-sewa-alat-ringan.html' },
            { name: 'Perbandingan Sewa Alat Ringan', url: 'https://www.betonjayareadymix.com/p/perbandingan-sewa-alat-ringan.html' }
        ],
        'SEWA_ALAT_KONSTRUKSI'
    );

}
if (urlMappingSewaAlatPendukungFromSub1MoneyMaster[cleanUrlJasaKons]) {
    generateBreadcrumbJasaKonstruksi(
        urlMappingSewaAlatPendukungFromSub1MoneyMaster,
        cleanUrlJasaKons,
       [
           // { name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Sewa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/sewa-alat-konstruksi.html' },
            { name: 'Daftar Sewa Alat Pendukung', url: 'https://www.betonjayareadymix.com/p/daftar-sewa-alat-pendukung.html' },
            { name: 'Perbandingan Sewa Alat Pendukung', url: 'https://www.betonjayareadymix.com/p/perbandingan-sewa-alat-pendukung.html' }
        ],
        'SEWA_ALAT_KONSTRUKSI'
    );

}
if (urlMappingSewaAlatBeratFromSub2Sub1[cleanUrlJasaKons]) {
        //pageNameKonstruksiSub.textContent = urlMappingSewaAlatBeratFromSub2Sub1[cleanUrlJasaKons];

	   generateBreadcrumbJasaKonstruksi(
        urlMappingSewaAlatBeratFromSub2Sub1,
        cleanUrlJasaKons,
       [
           // { name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Sewa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/sewa-alat-konstruksi.html' },
            { name: 'Daftar Sewa Alat Berat', url: 'https://www.betonjayareadymix.com/p/daftar-sewa-alat-berat.html' }
          //  { name: 'Perbandingan Sewa Alat Berat', url: 'https://www.betonjayareadymix.com/p/perbandingan-sewa-alat-berat.html' }
        ],
        'SEWA_ALAT_KONSTRUKSI'
    );
 }

if (urlMappingSewaAlatBeratFromSub1MoneyMaster[cleanUrlJasaKons]) {
  
	   generateBreadcrumbJasaKonstruksi(
        urlMappingSewaAlatBeratFromSub1MoneyMaster,
        cleanUrlJasaKons,
       [
           // { name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Sewa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/sewa-alat-konstruksi.html' },
            { name: 'Daftar Sewa Alat Berat', url: 'https://www.betonjayareadymix.com/p/daftar-sewa-alat-berat.html' },
           	{ name: 'Perbandingan Sewa Alat Berat', url: 'https://www.betonjayareadymix.com/p/perbandingan-sewa-alat-berat.html' }
        ],
        'SEWA_ALAT_KONSTRUKSI'
    );
   
}


 if (urlMappingSewaAlatKonstruksiRinganFromSub1MoneyPage[cleanUrlJasaKons]) {
	 //CONTAINER
    restoreCondition('JasaKonsSub');
	restoreCondition('SewaAlatKonstruksi');
	restoreCondition('SewaAlatKonstruksiRingan');
	   
           // hapus elemen id DIV Lain
	removeCondition('ProdukInFur');
        removeCondition('MaterialKons');
	removeCondition('ProdukKons');
        //removeCondition('ProdukKonsSaluran');
        //removeCondition('ProdukKonsPembatas');
	//HAPUS PILLAR JASA KONSTRUKSI 
        removeCondition('JasaKonstruksiSub');
		removeCondition('JasaAlatKonstruksi'); 
        removeCondition('JasaKonsPondasiTanah');
        removeCondition('JasaKonsPembatas');
        removeCondition('JasaKonsJalanPerkerasan');
        removeCondition('JasaKonsPerbaikan');
	removeCondition('JasaKonsFinishing');
        removeCondition('JasaKonsStruktur');
	removeCondition('JasaKons');
	removeCondition('MenuKons');

	// hapus elemen id DIV Lain selain SewaAlatKonstruksi dan JasaAlatKonstruksi dan SewaAlatKonstruksiRingan
	removeCondition('SewaAlatBerat');

	 	removeCondition('JasaInstalasiListrik');
	removeCondition('JasaRenovasiPerbaikan');
	removeCondition('JasaStrukturKonstruksi');
        removeCondition('JasaFinishing');
        removeCondition('JasaPondasiPerkuatan');
        removeCondition('JasaSaluranDrainase');
        removeCondition('JasaJalanPerkerasan');
	removeCondition('JasaPematanganLahan');
	removeCondition('JasaUjiTanah');
        removeCondition('JasaPembatasPengaman');
	removeCondition('JasaPerkuatanTanahLongsor');
	removeCondition('JasaBongkarBangunan');
	removeCondition('JasaPerawatanPerbaikanBangunan');
	removeCondition('JasaPerbaikanInfrastruktur');
	removeCondition('JasaPengeboran');
		removeCondition('JasaBorAirSumur');
		removeCondition('JasaBorPile');
		removeCondition('JasaCoringBeton');
		removeCondition('JasaBorBeton');
		removeCondition('JasaBorTanah');
		removeCondition('JasaBorHorizontal');
		removeCondition('JasaBorTembok');

        //JasaKonstruksiSubLink.style.visibility = 'visible';
        //JasaAlatKonstruksiLink.style.visibility = 'visible';
        SewaAlatKonstruksiLink.style.visibility = 'visible';
        SewaAlatKonstruksiRinganLink.style.visibility = 'visible';
        pageNameKonstruksiSub.textContent = urlMappingSewaAlatKonstruksiRinganFromSub1MoneyPage[cleanUrlJasaKons];
    }
 // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingSewaAlatKonstruksiRinganFromSub1MoneyPage[cleanUrlJasaKons]) {
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
                   "name": "Sewa Alat Konstruksi",
                   "item": "https://www.betonjayareadymix.com/p/sewa-alat-konstruksi.html"
               },
	      {
                   "@type": "ListItem",
                   "position": 3,
                   "name": "Sewa Alat Konstruksi Ringan",
                   "item": "https://www.betonjayareadymix.com/p/sewa-alat-konstruksi-ringan.html"
               },
               {
                   "@type": "ListItem",
                   "position": 4,
                   "name": urlMappingSewaAlatKonstruksiRinganFromSub1MoneyPage[cleanUrlJasaKons],
                   "item": cleanUrlJasaKons
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
  //AKHIR JASA KONTRUKSI ALAT
	
    if (urlMappingRenovasiFromSub1MoneyPage[cleanUrlJasaKons]) {
        restoreCondition('JasaKonsSub');
	//restoreCondition('JasaKonstruksi');
	restoreCondition('JasaRenovasiPerbaikan');
           // hapus elemen id DIV Lain
	removeCondition('ProdukInFur');
        removeCondition('MaterialKons');
	removeCondition('ProdukKons');
        //removeCondition('ProdukKonsSaluran');
        //removeCondition('ProdukKonsPembatas');
        removeCondition('JasaKonsPondasiTanah');
        removeCondition('JasaKonsPembatas');
        removeCondition('JasaKonsJalanPerkerasan');
        removeCondition('JasaKonsPerbaikan');
	removeCondition('JasaKonsFinishing');
        removeCondition('JasaKonsStruktur');
	removeCondition('JasaKons');
	removeCondition('MenuKons');

	// hapus elemen id DIV Lain
	removeCondition('JasaAlatKonstruksi');
	removeCondition('SewaAlatKonstruksi');
	removeCondition('SewaAlatBerat');
	removeCondition('SewaAlatKonstruksiRingan');
	
	 	removeCondition('JasaInstalasiListrik');   
	removeCondition('JasaStrukturKonstruksi');
        removeCondition('JasaFinishing');
        removeCondition('JasaPondasiPerkuatan');
        removeCondition('JasaSaluranDrainase');
        removeCondition('JasaJalanPerkerasan');
	removeCondition('JasaPematanganLahan');
	removeCondition('JasaUjiTanah');
        removeCondition('JasaPembatasPengaman');
	removeCondition('JasaPerkuatanTanahLongsor');
	removeCondition('JasaBongkarBangunan');
	removeCondition('JasaPerawatanPerbaikanBangunan');
	removeCondition('JasaPerbaikanInfrastruktur');
	removeCondition('JasaPengeboran');
		removeCondition('JasaBorAirSumur');
		removeCondition('JasaBorPile');
		removeCondition('JasaCoringBeton');
		removeCondition('JasaBorBeton');
		removeCondition('JasaBorTanah');
		removeCondition('JasaBorHorizontal');
		removeCondition('JasaBorTembok');

        JasaKonstruksiSubLink.style.visibility = 'visible';
        JasaRenovasiPerbaikanLink.style.visibility = 'visible';
	    
        pageNameKonstruksiSub.textContent = urlMappingRenovasiFromSub1MoneyPage[cleanUrlJasaKons];
    }
 // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingRenovasiFromSub1MoneyPage[cleanUrlJasaKons]) {
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
                   "name": "Daftar Jasa Renovasi",
                   "item": "https://www.betonjayareadymix.com/p/daftar-jasa-renovasi.html"
               },
	       {
                   "@type": "ListItem",
                   "position": 4,
                   "name": urlMappingRenovasiFromSub1MoneyPage[cleanUrlJasaKons],
                   "item": cleanUrlJasaKons
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
	
if (urlMappingStrukturFromSub1MoneyPage[cleanUrlJasaKons]) {
        restoreCondition('JasaKonsSub');
	restoreCondition('JasaStrukturKonstruksi');
           // hapus elemen id DIV Lain
	removeCondition('ProdukInFur');
        removeCondition('MaterialKons');
	removeCondition('ProdukKons');
        //removeCondition('ProdukKonsSaluran');
        //removeCondition('ProdukKonsPembatas');
        removeCondition('JasaKonsPondasiTanah');
        removeCondition('JasaKonsJalanPerkerasan');
        removeCondition('JasaKonsPembatas');
        removeCondition('JasaKonsPerbaikan');
	removeCondition('JasaKonsFinishing');
        removeCondition('JasaKonsStruktur');
	removeCondition('JasaKons');
	removeCondition('MenuKons');

	// hapus elemen id DIV Lain
	removeCondition('JasaAlatKonstruksi');
	removeCondition('SewaAlatKonstruksi');
	removeCondition('SewaAlatBerat');
	removeCondition('SewaAlatKonstruksiRingan');
	
		removeCondition('JasaInstalasiListrik');    
	removeCondition('JasaRenovasiPerbaikan');
        removeCondition('JasaFinishing');
        removeCondition('JasaPondasiPerkuatan');
        removeCondition('JasaSaluranDrainase');
        removeCondition('JasaJalanPerkerasan');
	removeCondition('JasaPematanganLahan');
	removeCondition('JasaUjiTanah');
        removeCondition('JasaPembatasPengaman');
	removeCondition('JasaPerkuatanTanahLongsor');
	removeCondition('JasaBongkarBangunan');
	removeCondition('JasaPerawatanPerbaikanBangunan');
	removeCondition('JasaPerbaikanInfrastruktur');
	removeCondition('JasaPengeboran');
		removeCondition('JasaBorAirSumur');
		removeCondition('JasaBorPile');
		removeCondition('JasaCoringBeton');
		removeCondition('JasaBorBeton');
		removeCondition('JasaBorTanah');
		removeCondition('JasaBorHorizontal');
		removeCondition('JasaBorTembok');
       // removeCondition('JasaKonstruksiCustom');

        JasaKonstruksiSubLink.style.visibility = 'visible';
        JasaStrukturKonstruksiLink.style.visibility = 'visible';
        pageNameKonstruksiSub.textContent = urlMappingStrukturFromSub1MoneyPage[cleanUrlJasaKons];

	    generateBreadcrumbJasaKonstruksi(
        urlMappingStrukturFromSub1MoneyPage,
        cleanUrlJasaKons,
        [
           // { name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html'},
            { name: 'Daftar Jasa Struktur Konstruksi', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-struktur-konstruksi.html'},
            { name: 'Perbandingan Jasa Struktur Konstruksi', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-struktur-konstruksi.html'}
        ],
        'JASA_KONSTRUKSI'
    );
    }
	
if (urlMappingFinishingFromSub1MoneyPage[cleanUrlJasaKons]) {
        restoreCondition('JasaKonsSub');
	restoreCondition('JasaFinishing');
           // hapus elemen id DIV Lain
	removeCondition('ProdukInFur');
        removeCondition('MaterialKons');
	removeCondition('ProdukKons');
        //removeCondition('ProdukKonsSaluran');
        //removeCondition('ProdukKonsPembatas');
        removeCondition('JasaKonsPondasiTanah');
        removeCondition('JasaKonsJalanPerkerasan');
        removeCondition('JasaKonsPembatas');
        removeCondition('JasaKonsPerbaikan');
	removeCondition('JasaKonsFinishing');
        removeCondition('JasaKonsStruktur');
	removeCondition('JasaKons');
	removeCondition('MenuKons');

	// hapus elemen id DIV Lain
	removeCondition('JasaAlatKonstruksi');
	removeCondition('SewaAlatKonstruksi');
	removeCondition('SewaAlatBerat');
	removeCondition('SewaAlatKonstruksiRingan');
	
	 	removeCondition('JasaInstalasiListrik');   
	removeCondition('JasaRenovasiPerbaikan');
        removeCondition('JasaStrukturKonstruksi');
        removeCondition('JasaPondasiPerkuatan');
        removeCondition('JasaSaluranDrainase');
        removeCondition('JasaJalanPerkerasan');
	removeCondition('JasaPematanganLahan');
	removeCondition('JasaUjiTanah');
        removeCondition('JasaPembatasPengaman');
	removeCondition('JasaPerkuatanTanahLongsor');
	removeCondition('JasaBongkarBangunan');
	removeCondition('JasaPerawatanPerbaikanBangunan');
	removeCondition('JasaPerbaikanInfrastruktur');
	removeCondition('JasaPengeboran');
		removeCondition('JasaBorAirSumur');
		removeCondition('JasaBorPile');
		removeCondition('JasaCoringBeton');
		removeCondition('JasaBorBeton');
		removeCondition('JasaBorTanah');
		removeCondition('JasaBorHorizontal');
		removeCondition('JasaBorTembok');
       // removeCondition('JasaKonstruksiCustom');

        JasaKonstruksiSubLink.style.visibility = 'visible';
        JasaFinishingLink.style.visibility = 'visible';
        pageNameKonstruksiSub.textContent = urlMappingFinishingFromSub1MoneyPage[cleanUrlJasaKons];

	    generateBreadcrumbJasaKonstruksi(
        urlMappingFinishingFromSub1MoneyPage,
        cleanUrlJasaKons,
        [
           // { name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Finishing', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-finishing.html'},
            { name: 'Perbandingan Jasa Finishing', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-finishing.html'}
        ],
        'JASA_KONSTRUKSI'
    );
    }
	
if (urlMappingPondasiFromSub1MoneyPage[cleanUrlJasaKons]) {
        restoreCondition('JasaKonsSub');
	restoreCondition('JasaPondasiPerkuatan');
           // hapus elemen id DIV Lain
	removeCondition('ProdukInFur');
        removeCondition('MaterialKons');
	removeCondition('ProdukKons');
        //removeCondition('ProdukKonsSaluran');
        //removeCondition('ProdukKonsPembatas');
        removeCondition('JasaKonsPondasiTanah');
        removeCondition('JasaKonsJalanPerkerasan');
        removeCondition('JasaKonsPembatas');
        removeCondition('JasaKonsPerbaikan');
	removeCondition('JasaKonsFinishing');
        removeCondition('JasaKonsStruktur');
	removeCondition('JasaKons');
	removeCondition('MenuKons');
	    
       // hapus elemen id DIV Lain
	removeCondition('JasaAlatKonstruksi');
	removeCondition('SewaAlatKonstruksi');
	removeCondition('SewaAlatBerat');
	removeCondition('SewaAlatKonstruksiRingan');
	
	 	removeCondition('JasaInstalasiListrik');   
	removeCondition('JasaRenovasiPerbaikan');
        removeCondition('JasaStrukturKonstruksi');
        removeCondition('JasaFinishing');
        removeCondition('JasaSaluranDrainase');
        removeCondition('JasaJalanPerkerasan');
	removeCondition('JasaPematanganLahan');
	removeCondition('JasaUjiTanah');
        removeCondition('JasaPembatasPengaman');
	removeCondition('JasaPerkuatanTanahLongsor');
	removeCondition('JasaBongkarBangunan');
	removeCondition('JasaPerawatanPerbaikanBangunan');
	removeCondition('JasaPerbaikanInfrastruktur');
	removeCondition('JasaPengeboran');
		removeCondition('JasaBorAirSumur');
		removeCondition('JasaBorPile');
		removeCondition('JasaCoringBeton');
		removeCondition('JasaBorBeton');
		removeCondition('JasaBorTanah');
		removeCondition('JasaBorHorizontal');
		removeCondition('JasaBorTembok');

       // removeCondition('JasaKonstruksiCustom');

        JasaKonstruksiSubLink.style.visibility = 'visible';
        JasaPondasiPerkuatanLink.style.visibility = 'visible';
        pageNameKonstruksiSub.textContent = urlMappingPondasiFromSub1MoneyPage[cleanUrlJasaKons];
	 generateBreadcrumbJasaKonstruksi(
        urlMappingPondasiFromSub1MoneyPage,
        cleanUrlJasaKons,
        [
            //{ name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Pondasi & Perkuatan Tanah', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-pondasi-perkuatan-tanah.html' },
            { name: 'Perbandingan Jasa Pondasi & Perkuatan Tanah', url: 'https://www.betonjayareadymix.com/p/perbandingan-pondasi-perkuatan-tanah.html' }
        ],
        'JASA_KONSTRUKSI'
    );
    }

	
if (urlMappingSaluranFromSub1MoneyPage[cleanUrlJasaKons]) {
        restoreCondition('JasaKonsSub');
	 restoreCondition('JasaSaluranDrainase');
           // hapus elemen id DIV Lain
	removeCondition('ProdukInFur');
        removeCondition('MaterialKons');
	removeCondition('ProdukKons');
        //removeCondition('ProdukKonsSaluran');
        //removeCondition('ProdukKonsPembatas');
        removeCondition('JasaKonsPondasiTanah');
        removeCondition('JasaKonsJalanPerkerasan');
        removeCondition('JasaKonsPembatas');
        removeCondition('JasaKonsPerbaikan');
	removeCondition('JasaKonsFinishing');
        removeCondition('JasaKonsStruktur');
	removeCondition('JasaKons');
	removeCondition('MenuKons');
	    
       // hapus elemen id DIV Lain
	removeCondition('JasaAlatKonstruksi');
	removeCondition('SewaAlatKonstruksi');
	removeCondition('SewaAlatBerat');
	removeCondition('SewaAlatKonstruksiRingan');
	
	  	removeCondition('JasaInstalasiListrik');  
	removeCondition('JasaRenovasiPerbaikan');
        removeCondition('JasaStrukturKonstruksi');
        removeCondition('JasaFinishing');
        removeCondition('JasaPondasiPerkuatan');
        removeCondition('JasaJalanPerkerasan');
	removeCondition('JasaPematanganLahan');
	removeCondition('JasaUjiTanah');
        removeCondition('JasaPembatasPengaman');
	removeCondition('JasaPerkuatanTanahLongsor');
	removeCondition('JasaBongkarBangunan');
	removeCondition('JasaPerawatanPerbaikanBangunan');
	removeCondition('JasaPerbaikanInfrastruktur');
	removeCondition('JasaPengeboran');
		removeCondition('JasaBorAirSumur');
		removeCondition('JasaBorPile');
		removeCondition('JasaCoringBeton');
		removeCondition('JasaBorBeton');
		removeCondition('JasaBorTanah');
		removeCondition('JasaBorHorizontal');
		removeCondition('JasaBorTembok');

       // removeCondition('JasaKonstruksiCustom');

        JasaKonstruksiSubLink.style.visibility = 'visible';
        JasaSaluranDrainaseLink.style.visibility = 'visible';
        pageNameKonstruksiSub.textContent = urlMappingSaluranFromSub1MoneyPage[cleanUrlJasaKons];
	   generateBreadcrumbJasaKonstruksi(
        urlMappingSaluranFromSub1MoneyPage,
        cleanUrlJasaKons,
        [
            //{ name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Saluran & Drainase', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-saluran-drainase.html' },
            { name: 'Perbandingan Jasa Saluran & Drainase', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-saluran-drainase.html' }
        ],
        'JASA_KONSTRUKSI'
    );
    }
	
if (urlMappingJalanFromSub1MoneyPage[cleanUrlJasaKons]) {
        restoreCondition('JasaKonsSub');
	restoreCondition('JasaJalanPerkerasan');
           // hapus elemen id DIV Lain
	removeCondition('ProdukInFur');
        removeCondition('MaterialKons');
	removeCondition('ProdukKons');
        //removeCondition('ProdukKonsSaluran');
        //removeCondition('ProdukKonsPembatas');
        removeCondition('JasaKonsPondasiTanah');
        removeCondition('JasaKonsJalanPerkerasan');
        removeCondition('JasaKonsPembatas');
        removeCondition('JasaKonsPerbaikan');
	removeCondition('JasaKonsFinishing');
        removeCondition('JasaKonsStruktur');
	removeCondition('JasaKons');
	removeCondition('MenuKons');
	    
       // hapus elemen id DIV Lain
	removeCondition('JasaAlatKonstruksi');
	removeCondition('SewaAlatKonstruksi');
	removeCondition('SewaAlatBerat');
	removeCondition('SewaAlatKonstruksiRingan');
	
	  	removeCondition('JasaInstalasiListrik');  
	removeCondition('JasaRenovasiPerbaikan');
        removeCondition('JasaStrukturKonstruksi');
        removeCondition('JasaFinishing');
        removeCondition('JasaPondasiPerkuatan');
        removeCondition('JasaSaluranDrainase');
        removeCondition('JasaPembatasPengaman');
	removeCondition('JasaPematanganLahan');
	removeCondition('JasaUjiTanah');
	removeCondition('JasaPerkuatanTanahLongsor');
	removeCondition('JasaBongkarBangunan');
	removeCondition('JasaPerawatanPerbaikanBangunan');
	removeCondition('JasaPerbaikanInfrastruktur');
	removeCondition('JasaPengeboran');
		removeCondition('JasaBorAirSumur');
		removeCondition('JasaBorPile');
		removeCondition('JasaCoringBeton');
		removeCondition('JasaBorBeton');
		removeCondition('JasaBorTanah');
		removeCondition('JasaBorHorizontal');
		removeCondition('JasaBorTembok');
        //removeCondition('JasaKonstruksiCustom');

        JasaKonstruksiSubLink.style.visibility = 'visible';
        JasaJalanPerkerasanLink.style.visibility = 'visible';
        pageNameKonstruksiSub.textContent = urlMappingJalanFromSub1MoneyPage[cleanUrlJasaKons];

	 generateBreadcrumbJasaKonstruksi(
        urlMappingJalanFromSub1MoneyPage,
        cleanUrlJasaKons,
        [
           // { name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Jalan & Perkerasan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-jalan-perkerasan.html' },
            { name: 'Perbandingan Jasa Jalan & Perkerasan', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-jalan-perkerasan.html' }
        ],
        'JASA_KONSTRUKSI'
    );
	
    }
  
	
if (urlMappingPembatasFromSub1MoneyPage[cleanUrlJasaKons]) {
        restoreCondition('JasaKonsSub');
	restoreCondition('JasaPembatasPengaman');
           // hapus elemen id DIV Lain
	removeCondition('ProdukInFur');
        removeCondition('MaterialKons');
	removeCondition('ProdukKons');
        //removeCondition('ProdukKonsSaluran');
        //removeCondition('ProdukKonsPembatas');
        removeCondition('JasaKonsPondasiTanah');
        removeCondition('JasaKonsJalanPerkerasan');
        removeCondition('JasaKonsPembatas');
        removeCondition('JasaKonsPerbaikan');
	removeCondition('JasaKonsFinishing');
        removeCondition('JasaKonsStruktur');
	removeCondition('JasaKons');
	removeCondition('MenuKons');
	    
       // hapus elemen id DIV Lain
	removeCondition('JasaAlatKonstruksi');
	removeCondition('SewaAlatKonstruksi');
	removeCondition('SewaAlatBerat');
	removeCondition('SewaAlatKonstruksiRingan');
	
	 	removeCondition('JasaInstalasiListrik');   
	removeCondition('JasaRenovasiPerbaikan');
        removeCondition('JasaStrukturKonstruksi');
        removeCondition('JasaFinishing');
        removeCondition('JasaPondasiPerkuatan');
        removeCondition('JasaSaluranDrainase');
        removeCondition('JasaJalanPerkerasan');
	removeCondition('JasaPematanganLahan');
	removeCondition('JasaUjiTanah');
	removeCondition('JasaPerkuatanTanahLongsor');
	removeCondition('JasaBongkarBangunan');
	removeCondition('JasaPerawatanPerbaikanBangunan');
	removeCondition('JasaPerbaikanInfrastruktur');
	removeCondition('JasaPengeboran');
		removeCondition('JasaBorAirSumur');
		removeCondition('JasaBorPile');
		removeCondition('JasaCoringBeton');
		removeCondition('JasaBorBeton');
		removeCondition('JasaBorTanah');
		removeCondition('JasaBorHorizontal');
		removeCondition('JasaBorTembok');

       // removeCondition('JasaKonstruksiCustom');

        JasaKonstruksiSubLink.style.visibility = 'visible';
        JasaPembatasPengamanLink.style.visibility = 'visible';
        pageNameKonstruksiSub.textContent = urlMappingPembatasFromSub1MoneyPage[cleanUrlJasaKons];
    }
  // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingPembatasFromSub1MoneyPage[cleanUrlJasaKons]) {
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
                   "name": "Daftar Jasa Pembatas & Pengaman",
                   "item": "https://www.betonjayareadymix.com/p/daftar-jasa-pembatas-pengaman.html"
               },
	       {
                   "@type": "ListItem",
                   "position": 4,
                   "name": urlMappingPembatasFromSub1MoneyPage[cleanUrlJasaKons],
                   "item": cleanUrlJasaKons
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
	
  if (urlMappingPematanganLahanFromSub1MoneyPage[cleanUrlJasaKons]) {
        restoreCondition('JasaKonsSub');
	restoreCondition('JasaPematanganLahan');
           // hapus elemen id DIV Lain
	removeCondition('ProdukInFur');
        removeCondition('MaterialKons');
	removeCondition('ProdukKons');
        //removeCondition('ProdukKonsSaluran');
        //removeCondition('ProdukKonsPembatas');
        removeCondition('JasaKonsPondasiTanah');
        removeCondition('JasaKonsJalanPerkerasan');
        removeCondition('JasaKonsPembatas');
        removeCondition('JasaKonsPerbaikan');
	removeCondition('JasaKonsFinishing');
        removeCondition('JasaKonsStruktur');
	removeCondition('JasaKons');
	removeCondition('MenuKons');
	    
       // hapus elemen id DIV Lain
	removeCondition('JasaAlatKonstruksi');
	removeCondition('SewaAlatKonstruksi');
	removeCondition('SewaAlatBerat');
	removeCondition('SewaAlatKonstruksiRingan');

	  	removeCondition('JasaInstalasiListrik');
	removeCondition('JasaRenovasiPerbaikan');
        removeCondition('JasaStrukturKonstruksi');
        removeCondition('JasaFinishing');
        removeCondition('JasaPondasiPerkuatan');
        removeCondition('JasaSaluranDrainase');
        removeCondition('JasaJalanPerkerasan');
	removeCondition('JasaPembatasPengaman');
	removeCondition('JasaUjiTanah');
	removeCondition('JasaPerkuatanTanahLongsor');
	removeCondition('JasaBongkarBangunan');
	removeCondition('JasaPerawatanPerbaikanBangunan');
	removeCondition('JasaPerbaikanInfrastruktur');
	removeCondition('JasaPengeboran');
		removeCondition('JasaBorAirSumur');
		removeCondition('JasaBorPile');
		removeCondition('JasaCoringBeton');
		removeCondition('JasaBorBeton');
		removeCondition('JasaBorTanah');
		removeCondition('JasaBorHorizontal');
		removeCondition('JasaBorTembok');

       // removeCondition('JasaKonstruksiCustom');

        JasaKonstruksiSubLink.style.visibility = 'visible';
        JasaPematanganLahanLink.style.visibility = 'visible';
        pageNameKonstruksiSub.textContent = urlMappingPematanganLahanFromSub1MoneyPage[cleanUrlJasaKons];
    }

  // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingPematanganLahanFromSub1MoneyPage[cleanUrlJasaKons]) {
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
                   "name": "Daftar Jasa Pematangan Lahan",
                   "item": "https://www.betonjayareadymix.com/p/daftar-jasa-pematangan-lahan.html"
               },
	       {
                   "@type": "ListItem",
                   "position": 4,
                   "name": urlMappingPematanganLahanFromSub1MoneyPage[cleanUrlJasaKons],
                   "item": cleanUrlJasaKons
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
	
   if (urlMappingUjiTanahFromSub1MoneyPage[cleanUrlJasaKons]) {
        restoreCondition('JasaKonsSub');
	restoreCondition('JasaUjiTanah');
           // hapus elemen id DIV Lain
	removeCondition('ProdukInFur');
        removeCondition('MaterialKons');
	removeCondition('ProdukKons');
        //removeCondition('ProdukKonsSaluran');
        //removeCondition('ProdukKonsPembatas');
        removeCondition('JasaKonsPondasiTanah');
        removeCondition('JasaKonsJalanPerkerasan');
        removeCondition('JasaKonsPembatas');
        removeCondition('JasaKonsPerbaikan');
	removeCondition('JasaKonsFinishing');
        removeCondition('JasaKonsStruktur');
	removeCondition('JasaKons');
	removeCondition('MenuKons');
	   
       // hapus elemen id DIV Lain
	removeCondition('JasaAlatKonstruksi');
	removeCondition('SewaAlatKonstruksi');
	removeCondition('SewaAlatBerat');
	removeCondition('SewaAlatKonstruksiRingan');

	   	removeCondition('JasaInstalasiListrik');
	removeCondition('JasaRenovasiPerbaikan');
        removeCondition('JasaStrukturKonstruksi');
        removeCondition('JasaFinishing');
        removeCondition('JasaPondasiPerkuatan');
        removeCondition('JasaSaluranDrainase');
        removeCondition('JasaJalanPerkerasan');
	removeCondition('JasaPembatasPengaman');
	removeCondition('JasaPematanganLahan');
	removeCondition('JasaPerkuatanTanahLongsor');
	removeCondition('JasaBongkarBangunan');
	removeCondition('JasaPerawatanPerbaikanBangunan');
	removeCondition('JasaPerbaikanInfrastruktur');
	removeCondition('JasaPengeboran');
		removeCondition('JasaBorAirSumur');
		removeCondition('JasaBorPile');
		removeCondition('JasaCoringBeton');
		removeCondition('JasaBorBeton');
		removeCondition('JasaBorTanah');
		removeCondition('JasaBorHorizontal');
		removeCondition('JasaBorTembok');

       // removeCondition('JasaKonstruksiCustom');

        JasaKonstruksiSubLink.style.visibility = 'visible';
        JasaUjiTanahLink.style.visibility = 'visible';
        pageNameKonstruksiSub.textContent = urlMappingUjiTanahFromSub1MoneyPage[cleanUrlJasaKons];
    }
   
  // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingUjiTanahFromSub1MoneyPage[cleanUrlJasaKons]) {
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
                   "name": "Daftar Jasa Uji Tanah",
                   "item": "https://www.betonjayareadymix.com/p/daftar-jasa-uji-tanah.html"
               },
	       {
                   "@type": "ListItem",
                   "position": 4,
                   "name": urlMappingUjiTanahFromSub1MoneyPage[cleanUrlJasaKons],
                   "item": cleanUrlJasaKons
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }

if (urlMappingPerkuatanTanahLongsorFromSub1MoneyPage[cleanUrlJasaKons]) {
        restoreCondition('JasaKonsSub');
	restoreCondition('JasaPerkuatanTanahLongsor');
           // hapus elemen id DIV Lain
	removeCondition('ProdukInFur');
        removeCondition('MaterialKons');
	removeCondition('ProdukKons');
        //removeCondition('ProdukKonsSaluran');
        //removeCondition('ProdukKonsPembatas');
        removeCondition('JasaKonsPondasiTanah');
        removeCondition('JasaKonsJalanPerkerasan');
        removeCondition('JasaKonsPembatas');
        removeCondition('JasaKonsPerbaikan');
	removeCondition('JasaKonsFinishing');
        removeCondition('JasaKonsStruktur');
	removeCondition('JasaKons');
	removeCondition('MenuKons');
	   
       // hapus elemen id DIV Lain
	removeCondition('JasaAlatKonstruksi');
	removeCondition('SewaAlatKonstruksi');
	removeCondition('SewaAlatBerat');
	removeCondition('SewaAlatKonstruksiRingan');

	   	removeCondition('JasaInstalasiListrik');
	removeCondition('JasaRenovasiPerbaikan');
        removeCondition('JasaStrukturKonstruksi');
        removeCondition('JasaFinishing');
        removeCondition('JasaPondasiPerkuatan');
        removeCondition('JasaSaluranDrainase');
        removeCondition('JasaJalanPerkerasan');
	removeCondition('JasaPembatasPengaman');
	removeCondition('JasaPematanganLahan');
	removeCondition('JasaUjiTanah');
	removeCondition('JasaBongkarBangunan');
	removeCondition('JasaPerawatanPerbaikanBangunan');
	removeCondition('JasaPerbaikanInfrastruktur');
	removeCondition('JasaPengeboran');
		removeCondition('JasaBorAirSumur');
		removeCondition('JasaBorPile');
		removeCondition('JasaCoringBeton');
		removeCondition('JasaBorBeton');
		removeCondition('JasaBorTanah');
		removeCondition('JasaBorHorizontal');
		removeCondition('JasaBorTembok');

       // removeCondition('JasaKonstruksiCustom');

        JasaKonstruksiSubLink.style.visibility = 'visible';
        JasaUjiTanahLink.style.visibility = 'visible';
        pageNameKonstruksiSub.textContent = urlMappingPerkuatanTanahLongsorFromSub1MoneyPage[cleanUrlJasaKons];
    }
  
  // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingPerkuatanTanahLongsorFromSub1MoneyPage[cleanUrlJasaKons]) {
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
                   "name": "Daftar Jasa Perkuatan Tanah Longsor",
                   "item": "https://www.betonjayareadymix.com/p/daftar-jasa-perkuatan-tanah-longsor.html"
               },
	       {
                   "@type": "ListItem",
                   "position": 4,
                   "name": urlMappingPerkuatanTanahLongsorFromSub1MoneyPage[cleanUrlJasaKons],
                   "item": cleanUrlJasaKons
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
	
if (urlMappingBongkarBangunanFromSub1MoneyPage[cleanUrlJasaKons]) {
        restoreCondition('JasaKonsSub');
	restoreCondition('JasaBongkarBangunan');
           // hapus elemen id DIV Lain
	removeCondition('ProdukInFur');
        removeCondition('MaterialKons');
	removeCondition('ProdukKons');
        //removeCondition('ProdukKonsSaluran');
        //removeCondition('ProdukKonsPembatas');
        removeCondition('JasaKonsPondasiTanah');
        removeCondition('JasaKonsJalanPerkerasan');
        removeCondition('JasaKonsPembatas');
        removeCondition('JasaKonsPerbaikan');
	removeCondition('JasaKonsFinishing');
        removeCondition('JasaKonsStruktur');
	removeCondition('JasaKons');
	removeCondition('MenuKons');
	   
       // hapus elemen id DIV Lain
	removeCondition('JasaAlatKonstruksi');
	removeCondition('SewaAlatKonstruksi');
	removeCondition('SewaAlatBerat');
	removeCondition('SewaAlatKonstruksiRingan');

		removeCondition('JasaInstalasiListrik');
	removeCondition('JasaRenovasiPerbaikan');
        removeCondition('JasaStrukturKonstruksi');
        removeCondition('JasaFinishing');
        removeCondition('JasaPondasiPerkuatan');
        removeCondition('JasaSaluranDrainase');
        removeCondition('JasaJalanPerkerasan');
	removeCondition('JasaPembatasPengaman');
	removeCondition('JasaPematanganLahan');
	removeCondition('JasaUjiTanah');
	removeCondition('JasaPerkuatanTanahLongsor');
	removeCondition('JasaPerawatanPerbaikanBangunan');
	removeCondition('JasaPerbaikanInfrastruktur');
	
	removeCondition('JasaPengeboran');
		removeCondition('JasaBorAirSumur');
		removeCondition('JasaBorPile');
		removeCondition('JasaCoringBeton');
		removeCondition('JasaBorBeton');
		removeCondition('JasaBorTanah');
		removeCondition('JasaBorHorizontal');
		removeCondition('JasaBorTembok');

       // removeCondition('JasaKonstruksiCustom');
        JasaKonstruksiSubLink.style.visibility = 'visible';
        JasaBongkarBangunanLink.style.visibility = 'visible';
        pageNameKonstruksiSub.textContent = urlMappingBongkarBangunanFromSub1MoneyPage[cleanUrlJasaKons];
    }
 
  // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingBongkarBangunanFromSub1MoneyPage[cleanUrlJasaKons]) {
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
                   "name": "Daftar Jasa Bongkar Bangunan",
                   "item": "https://www.betonjayareadymix.com/p/daftar-jasa-bongkar-bangunan.html"
               },
	       {
                   "@type": "ListItem",
                   "position": 4,
                   "name": urlMappingBongkarBangunanFromSub1MoneyPage[cleanUrlJasaKons],
                   "item": cleanUrlJasaKons
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }

  if (urlMappingPerawatanPerbaikanBangunanFromSub1MoneyPage[cleanUrlJasaKons]) {
        restoreCondition('JasaKonsSub');
	restoreCondition('JasaPerawatanPerbaikanBangunan');
           // hapus elemen id DIV Lain
	removeCondition('ProdukInFur');
        removeCondition('MaterialKons');
	removeCondition('ProdukKons');
        //removeCondition('ProdukKonsSaluran');
        //removeCondition('ProdukKonsPembatas');
        removeCondition('JasaKonsPondasiTanah');
        removeCondition('JasaKonsJalanPerkerasan');
        removeCondition('JasaKonsPembatas');
        removeCondition('JasaKonsPerbaikan');
	removeCondition('JasaKonsFinishing');
        removeCondition('JasaKonsStruktur');
	removeCondition('JasaKons');
	removeCondition('MenuKons');
	   
       // hapus elemen id DIV Lain
	removeCondition('JasaBongkarBangunan');
	removeCondition('JasaAlatKonstruksi');
	removeCondition('SewaAlatKonstruksi');
	removeCondition('SewaAlatBerat');
	removeCondition('SewaAlatKonstruksiRingan');

		removeCondition('JasaInstalasiListrik');
	removeCondition('JasaRenovasiPerbaikan');
        removeCondition('JasaStrukturKonstruksi');
        removeCondition('JasaFinishing');
        removeCondition('JasaPondasiPerkuatan');
        removeCondition('JasaSaluranDrainase');
        removeCondition('JasaJalanPerkerasan');
	removeCondition('JasaPembatasPengaman');
	removeCondition('JasaPematanganLahan');
	removeCondition('JasaUjiTanah');
	removeCondition('JasaPerkuatanTanahLongsor');
	removeCondition('JasaPengeboran');
		removeCondition('JasaBorAirSumur');
		removeCondition('JasaBorPile');
		removeCondition('JasaCoringBeton');
		removeCondition('JasaBorBeton');
		removeCondition('JasaBorTanah');
		removeCondition('JasaBorHorizontal');
		removeCondition('JasaBorTembok');
	removeCondition('JasaPerbaikanInfrastruktur');
	  
       // removeCondition('JasaKonstruksiCustom');
        JasaKonstruksiSubLink.style.visibility = 'visible';
        JasaPerawatanPerbaikanBangunanLink.style.visibility = 'visible';
        pageNameKonstruksiSub.textContent = urlMappingPerawatanPerbaikanBangunanFromSub1MoneyPage[cleanUrlJasaKons];
        generateBreadcrumbJasaKonstruksi(
        urlMappingPerawatanPerbaikanBangunanFromSub1MoneyPage,
        cleanUrlJasaKons,
        [
           // { name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Perawatan & Perbaikan Bangunan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-perawatan-perbaikan-bangunan.html' },
            { name: 'Perbandingan Jasa Perawatan vs Perbaikan Bangunan', url: 'https://www.betonjayareadymix.com/p/perawatan-vs-perbaikan-bangunan.html' }
        ],
        'JASA_KONSTRUKSI'
    );
    }


if (urlMappingInfrastrukturFromSub1MoneyMaster[cleanUrlJasaKons]) {

	    generateBreadcrumbJasaKonstruksi(
        urlMappingInfrastrukturFromSub1MoneyMaster,
        cleanUrlJasaKons,
        [
            //{ name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Perbaikan Infrastruktur', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-perbaikan-infrastruktur.html'},
            { name: 'Perbandingan Jasa Perbaikan Infrastruktur', url: 'https://www.betonjayareadymix.com/p/perbandingan-perbaikan-infrastruktur.html'}
        ],
        'JASA_KONSTRUKSI'
    );
    }

if (urlMappingPengeboranFromSub1MoneyPage[cleanUrlJasaKons]) {
	
	generateBreadcrumbJasaKonstruksi(
        urlMappingStrukturFromSub1MoneyPage,
        cleanUrlJasaKons,
        [
            //{ name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Pengeboran', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-pengeboran.html'},
            { name: 'Perbandingan Jasa Pengeboran', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-pengeboran.html'},
            { name: 'Jasa Pengeboran', url: 'https://www.betonjayareadymix.com/p/jasa-pengeboran.html'}
        ],
        'JASA_KONSTRUKSI'
    );
    }
	
//SUB JASA PENGEBORAN
/*
if (urlMappingJasaBorAirSumur[cleanUrlJasaKons]) {
        restoreCondition('JasaKonsSub');
	restoreCondition('JasaPengeboran');
	
	restoreCondition('JasaBorAirSumur');
           // hapus elemen id DIV Lain
	removeCondition('ProdukInFur');
        removeCondition('MaterialKons');
	removeCondition('ProdukKons');
        //removeCondition('ProdukKonsSaluran');
        //removeCondition('ProdukKonsPembatas');
        removeCondition('JasaKonsPondasiTanah');
        removeCondition('JasaKonsJalanPerkerasan');
        removeCondition('JasaKonsPembatas');
        removeCondition('JasaKonsPerbaikan');
	removeCondition('JasaKonsFinishing');
        removeCondition('JasaKonsStruktur');
	removeCondition('JasaKons');
	removeCondition('MenuKons');
	   
       // hapus elemen id DIV Lain
	removeCondition('JasaAlatKonstruksi');
	removeCondition('SewaAlatKonstruksi');
	removeCondition('SewaAlatBerat');
	removeCondition('SewaAlatKonstruksiRingan');
	   
	removeCondition('JasaInstalasiListrik');
	removeCondition('JasaRenovasiPerbaikan');
        removeCondition('JasaStrukturKonstruksi');
        removeCondition('JasaFinishing');
        removeCondition('JasaPondasiPerkuatan');
        removeCondition('JasaSaluranDrainase');
        removeCondition('JasaJalanPerkerasan');
	removeCondition('JasaPembatasPengaman');
	removeCondition('JasaPematanganLahan');
	removeCondition('JasaUjiTanah');
	removeCondition('JasaPerkuatanTanahLongsor');
	removeCondition('JasaBongkarBangunan');
    removeCondition('JasaPerawatanPerbaikanBangunan');
    removeCondition('JasaPerbaikanInfrastruktur'); 
	//SUB JASA PENGEBORAN selain JasaBorAirSumur
		//removeCondition('JasaBorAirSumur');
		removeCondition('JasaBorPile');
		removeCondition('JasaCoringBeton');
		removeCondition('JasaBorBeton');
		removeCondition('JasaBorTanah');
		removeCondition('JasaBorHorizontal');
		removeCondition('JasaBorTembok');
       // removeCondition('JasaKonstruksiCustom');
	
        JasaKonstruksiSubLink.style.visibility = 'visible';
        JasaPengeboranLink.style.visibility = 'visible';
	     
        JasaBorAirSumurLink.style.visibility = 'visible';
        pageNameKonstruksiSub.textContent = urlMappingJasaBorAirSumur[cleanUrlJasaKons];
    }
   // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaBorAirSumur[cleanUrlJasaKons]) {
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
                   "name": "Jasa Pengeboran",
                   "item": "https://www.betonjayareadymix.com/p/jasa-pengeboran.html"
               },
	       {
                   "@type": "ListItem",
                   "position": 4,
                   "name": urlMappingJasaBorAirSumur[cleanUrlJasaKons],
                   "item": cleanUrlJasaKons
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
   */
	
//JASA INSTALASI LISTRIK
if (urlMappingJasaInstalasiListrikFromSub1MoneyPage[cleanUrlJasaKons]) {
        restoreCondition('JasaKonsSub');
	restoreCondition('JasaInstalasiListrik');
           // hapus elemen id DIV Lain
	removeCondition('ProdukInFur');
        removeCondition('MaterialKons');
	removeCondition('ProdukKons');
        //removeCondition('ProdukKonsSaluran');
        //removeCondition('ProdukKonsPembatas');
        removeCondition('JasaKonsPondasiTanah');
        removeCondition('JasaKonsJalanPerkerasan');
        removeCondition('JasaKonsPembatas');
        removeCondition('JasaKonsPerbaikan');
	removeCondition('JasaKonsFinishing');
        removeCondition('JasaKonsStruktur');
	removeCondition('JasaKons');
	removeCondition('MenuKons');
	    
       // hapus elemen id DIV Lain
	removeCondition('JasaAlatKonstruksi');
	removeCondition('SewaAlatKonstruksi');
	removeCondition('SewaAlatBerat');
	removeCondition('SewaAlatKonstruksiRingan');

	removeCondition('JasaPematanganLahan');
	removeCondition('JasaRenovasiPerbaikan');
        removeCondition('JasaStrukturKonstruksi');
        removeCondition('JasaFinishing');
        removeCondition('JasaPondasiPerkuatan');
        removeCondition('JasaSaluranDrainase');
        removeCondition('JasaJalanPerkerasan');
	removeCondition('JasaPembatasPengaman');
	removeCondition('JasaUjiTanah');
	removeCondition('JasaPerkuatanTanahLongsor');
	removeCondition('JasaBongkarBangunan');
	removeCondition('JasaPerawatanPerbaikanBangunan');
    removeCondition('JasaPerbaikanInfrastruktur'); 
	removeCondition('JasaPengeboran');
		removeCondition('JasaBorAirSumur');
		removeCondition('JasaBorPile');
		removeCondition('JasaCoringBeton');
		removeCondition('JasaBorBeton');
		removeCondition('JasaBorTanah');
		removeCondition('JasaBorHorizontal');
		removeCondition('JasaBorTembok');

       // removeCondition('JasaKonstruksiCustom');

        JasaKonstruksiSubLink.style.visibility = 'visible';
        JasaInstalasiListrikLink.style.visibility = 'visible';
        pageNameKonstruksiSub.textContent = urlMappingJasaInstalasiListrikFromSub1MoneyPage[cleanUrlJasaKons];
    }

  // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaInstalasiListrikFromSub1MoneyPage[cleanUrlJasaKons]) {
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
                   "name": "Daftar Jasa Instalasi Listrik",
                   "item": "https://www.betonjayareadymix.com/p/daftar-jasa-instalasi-listrik.html"
               },
	       {
                   "@type": "ListItem",
                   "position": 4,
                   "name": urlMappingJasaInstalasiListrikFromSub1MoneyPage[cleanUrlJasaKons],
                   "item": cleanUrlJasaKons
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
/*
    if (urlMappingCustom[cleanUrlJasaKons]) {
        restoreCondition('JasaKonsSub');
	restoreCondition('JasaKonstruksiCustom');
           // hapus elemen id DIV Lain
        removeCondition('MaterialKons');
        //removeCondition('ProdukKonsSaluran');
        //removeCondition('ProdukKonsPembatas');
        removeCondition('JasaKonsPembatas');
        removeCondition('JasaKonsPerbaikanSub');
	removeCondition('JasaKons');
       // hapus elemen id DIV Lain
	removeCondition('JasaRenovasiPerbaikan');
        removeCondition('JasaStrukturKonstruksi');
        removeCondition('JasaFinishing');
        removeCondition('JasaPondasiPerkuatan');
        removeCondition('JasaSaluranDrainase');
        removeCondition('JasaJalanPerkerasan');
        removeCondition('JasaPembatasPengaman');

        JasaKonstruksiSubLink.style.visibility = 'visible';
        JasaKonstruksiCustomLink.style.visibility = 'visible';
        pageNameKonstruksiSub.textContent = urlMappingCustom[cleanUrlJasaKons];
    }
    */
   });
