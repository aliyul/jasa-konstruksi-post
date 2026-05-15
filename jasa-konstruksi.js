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
  "https://www.betonjayareadymix.com/p/harga-sewa-alat-proyek.html": "Harga Sewa Alat Proyek"  // TYPE: MoneyMaster
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
  "https://www.betonjayareadymix.com/p/harga-sewa-alat-berat.html": "Harga Sewa Alat Berat",  // TYPE: MoneyMaster PARENT
  "https://www.betonjayareadymix.com/p/harga-sewa-excavator.html": "Harga Sewa Excavator",  // TYPE: MoneyMaster PARENT
 // "https://www.betonjayareadymix.com/p/harga-sewa-beko.html": "Harga Sewa Beko",  // TYPE: MoneyMaster PARENT
  "https://www.betonjayareadymix.com/p/harga-sewa-forklift.html": "Harga Sewa Forklift",  // TYPE: MoneyMaster PARENT
  "https://www.betonjayareadymix.com/p/harga-sewa-bulldozer.html": "Harga Sewa Bulldozer",  // TYPE: MoneyMaster PARENT
  "https://www.betonjayareadymix.com/p/harga-sewa-vibro-roller.html": "Harga Sewa Vibro Roller",  // TYPE: MoneyMaster PARENT
  "https://www.betonjayareadymix.com/p/harga-sewa-wales-stoom.html": "Harga Sewa Wales Stoom",  // TYPE: MoneyMaster PARENT
  "https://www.betonjayareadymix.com/p/harga-sewa-crane.html": "Harga Sewa Crane",  // TYPE: MoneyMaster PARENT
  "https://www.betonjayareadymix.com/p/harga-sewa-self-loader.html": "Harga Sewa Self Loader",  // TYPE: MoneyMaster PARENT
  "https://www.betonjayareadymix.com/p/harga-sewa-wheel-loader.html": "Harga Sewa Wheel Loader",  // TYPE: MoneyMaster PARENT
  "https://www.betonjayareadymix.com/p/harga-tandem-roller.html": "Harga Sewa Tandem Roller",  // TYPE: MoneyMaster PARENT
  "https://www.betonjayareadymix.com/p/harga-backhoe-loader.html": "Harga Sewa Backhoe Loader",  // TYPE: MoneyMaster PARENT
  "https://www.betonjayareadymix.com/p/harga-sewa-baby-roller.html": "Harga Sewa Baby Roller",  // TYPE: MoneyMaster PARENT
  "https://www.betonjayareadymix.com/p/harga-sewa-motor-grader.html": "Harga Sewa Motor Grader",  // TYPE: MoneyMaster PARENT
  "https://www.betonjayareadymix.com/p/harga-sewa-alat-pancang.html": "Harga Sewa Alat Pancang",  // TYPE: MoneyMaster PARENT
  "https://www.betonjayareadymix.com/p/harga-sewa-trencher.html": "Harga Sewa Trencher",  // TYPE: MoneyMaster PARENT
  "https://www.betonjayareadymix.com/p/harga-sewa-concrete-paver.html": "Harga Sewa Concrete Paver"  // TYPE: MoneyMaster PARENT
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
  "https://www.betonjayareadymix.com/p/harga-sewa-alat-ringan.html": "Harga Sewa Alat Ringan"  // TYPE: MoneyMaster PARENT
};
const urlMappingSewaAlatPendukungFromSub2Sub1 = {
  "https://www.betonjayareadymix.com/p/perbandingan-sewa-alat-pendukung.html": "Perbandingan Sewa Alat Pendukung"  // TYPE: SUB1 PARENT
};
const urlMappingSewaAlatPendukungFromSub1MoneyMaster = {
  "https://www.betonjayareadymix.com/p/harga-sewa-alat-pendukung.html": "Harga Sewa Alat Pendukung"  // TYPE: MoneyMaster
};
// [MONEY_PAGE] - SEWA PER JENIS ALAT BERAT (ENTITY SEWA/RENTAL - MONEY_PAGE)
const urlMappingSewaAlatBeratFromSub1MoneyPage = {
	/*hapus pindah ke post aja
  "https://www.betonjayareadymix.com/p/sewa-forklift.html": "Sewa Forklift",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/p/sewa-crane.html": "Sewa Crane",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/p/sewa-self-loader.html": "Sewa Self Loader",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/p/sewa-wheel-loader.html": "Sewa Wheel Loader",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/p/sewa-vibro-roller.html": "Sewa Vibro Roller",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/p/sewa-wales-stoom.html": "Sewa Wales Stoom",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/p/sewa-tandem-roller.html": "Sewa Tandem Roller",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/p/sewa-bulldozer.html": "Sewa Bulldozer",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/p/sewa-excavator.html": "Sewa Excavator",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/p/sewa-backhoe-loader.html": "Sewa Backhoe Loader",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/p/sewa-trencher.html": "Sewa Trencher",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/p/sewa-concrete-paver.html": "Sewa Concrete Paver",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/p/sewa-baby-roller.html": "Sewa Baby Roller",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/p/sewa-motor-grader.html": "Sewa Motor Grader",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/p/sewa-alat-pancang.html": "Sewa Alat Pancang"  // TYPE: MONEY_PAGE
  */
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

const urlMappingInfrastrukturFromSub1MoneyPage = {
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-jalan.html": "Jasa Perbaikan Jalan",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-jembatan.html": "Jasa Perbaikan Jembatan",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-drainase.html": "Jasa Perbaikan Drainase",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-trotoar.html": "Jasa Perbaikan Trotoar",  // TYPE: MONEY_PAGE
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
  "https://www.betonjayareadymix.com/p/jasa-bor-air-sumur.html": "Jasa Bor Air Sumur",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/p/jasa-bore-pile.html": "Jasa Bore Pile",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/p/jasa-coring-beton.html": "Jasa Coring Beton",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/p/jasa-bor-beton.html": "Jasa Bor Beton",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/p/jasa-bor-tanah.html": "Jasa Bor Tanah",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/p/jasa-bor-horizontal.html": "Jasa Bor Horizontal",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/p/jasa-bor-tembok.html": "Jasa Bor Tembok"  // TYPE: MONEY_PAGE
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
 * generateBreadcrumbForMapping v5.6 — COMPLETE PHASE SYSTEM WITH ENTITY PILLAR EXACT MATCH
 * ✅ FIX: ENTITY PILLAR hanya EXACT MATCH (BUKAN partial match)
 * ✅ FIX: "jasa konstruksi" → PILLAR (L1)
 * ✅ FIX: "jasa konstruksi gedung sekolah" → MONEY_PAGE (L5) BUKAN pillar
 * ✅ FIX: "Sewa Alat Konstruksi" → PILLAR (L1)
 * ✅ FIX: "Produk Konstruksi", "Produk Interior" → PILLAR (L1)
 * ✅ FIX: "Material Konstruksi" → PILLAR (L1)
 * ✅ ENTITY PILLAR KEYWORDS untuk setiap entity type (EXACT MATCH)
 * ✅ SINKRON DENGAN Page Level Detector v18.5 dan AUTO-SCHEMA v5.7
 * ✅ PRIORITAS DETEKSI:
 *    0. HOMEPAGE
 *    1. ENTITY PILLAR (EXACT MATCH) 🔥
 *    2. INFORMASIONAL (panduan, cara, tips) → PILLAR
 *    3. PERBANDINGAN (vs, versus) → SP1
 *    4. JENIS/MACAM/DAFTAR (jenis, macam, daftar) → SP2
 *    5. KEYWORD HARGA/SEWA → MONEY (dengan cek lokasi terlebih dahulu)
 *    6. JASA/SEWA (tanpa keyword harga & bukan entity pillar) → MONEY_PAGE
 *    7. SUB-VARIANT
 *    8. VARIANT
 *    9. DEFAULT → PILLAR
 * 
 * @version 5.6.0
 * @date 2026-01-15
 */

function generateBreadcrumbJasaKonstruksi(mappingObj, currentUrl, breadcrumbItems = [], entityType = 'PRODUK_INTERIOR') {
    
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
        path = path.replace(/\/\d{4}\/\d{2}\/\d{2}\//g, '/');
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
    // 4. ENTITY PILLAR KEYWORDS (EXACT MATCH ONLY) 🔥
    // ============================================================
    const ENTITY_PILLAR_KEYWORDS = {
        'JASA_KONSTRUKSI': ['jasa konstruksi', 'layanan konstruksi', 'jasa bangunan', 'jasa kontraktor', 'jasa pemborong', 'jasa renovasi'],
        'JASA_DESAIN_INTERIOR': ['jasa desain interior', 'jasa interior', 'desain interior'],
        'JASA': ['jasa konstruksi', 'layanan konstruksi', 'jasa bangunan', 'jasa kontraktor', 'jasa pemborong', 'jasa renovasi'],
        
        'SEWA': ['sewa alat konstruksi', 'sewa alat berat', 'rental alat berat', 'sewa alat bangunan', 'rental konstruksi', 'sewa excavator'],
        'RENTAL': ['rental alat berat', 'sewa alat konstruksi'],
        'SEWA_RENTAL': ['sewa alat konstruksi', 'rental alat berat'],
        'SEWA_ALAT': ['sewa alat konstruksi', 'sewa alat berat'],
        'RENTAL_ALAT': ['rental alat berat', 'sewa alat konstruksi'],
        
        'PRODUK_KONSTRUKSI': ['produk konstruksi', 'produk bangunan', 'produk interior'],
        'PRODUK_INTERIOR': ['produk interior', 'furniture', 'perabot rumah', 'perabot interior'],
        'PRODUK': ['produk konstruksi', 'produk bangunan'],
        
        'MATERIAL_KONSTRUKSI': ['material konstruksi', 'bahan bangunan', 'material bangunan'],
        'MATERIAL': ['material konstruksi', 'bahan bangunan', 'material bangunan'],
        
        'ARTIKEL': ['artikel konstruksi', 'tips konstruksi', 'info bangunan']
    };
    
    // ============================================================
    // 5. FUNGSI DETEKSI ENTITY PILLAR (EXACT MATCH ONLY) 🔥
    // ============================================================
    function isEntityPillarExactMatch(pageName, entityTypeParam) {
        const useEntityType = entityTypeParam || entityType;
        const lowerName = pageName.toLowerCase().trim();
        const pillarKeywords = ENTITY_PILLAR_KEYWORDS[useEntityType] || [];
        
        for (const kw of pillarKeywords) {
            // 🔥 EXACT MATCH (tanpa tambahan kata apapun)
            if (lowerName === kw) {
                console.log(`  🏛️ ENTITY PILLAR detected (exact match): "${kw}" → pillar (L1)`);
                return true;
            }
        }
        return false;
    }
    
    // ============================================================
    // 6. KEYWORD CIRI PER LEVEL
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
    // 7. LOCATION WHITELIST
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
    // 8. SPECIFIC PRODUCT & SUB-VARIANT DETECTION
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
    // 9. INTENT VALIDATION (PHASE 1.5)
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
    // 10. EVERGREEN STATUS (STEP 6.2)
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
    // 11. DETEKSI HOMEPAGE
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
    // 12. PAGE TYPE DETECTION (PRIORITAS LENGKAP) 🔥
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
        // PRIORITAS 1: ENTITY PILLAR (EXACT MATCH ONLY) 🔥
        // ============================================================
        if (isEntityPillarExactMatch(pageName, useEntityType)) {
            return 'pillar';
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
        // PRIORITAS 5: MONEY LEVEL (HARGA/SEWA) - DENGAN CEK LOKASI DULU 🔥
        // ============================================================
        for (const kw of MONEY_KEYWORDS) {
            if (lowerName.includes(kw)) {
                console.log(`  💰 Money keyword detected: ${kw} (from ${isFromUrl ? 'URL' : 'title/H1'})`);
                
                // Ekstrak setelah keyword (maksimal 5 kata pertama)
                let afterKw = '';
                const kwIndex = lowerName.indexOf(kw);
                afterKw = lowerName.substring(kwIndex + kw.length).trim();
                
                // Bersihkan dari tahun dan karakter khusus
                afterKw = afterKw.replace(/\b\d{4}\b/g, '').replace(/[-–—]/g, ' ').replace(/\s+/g, ' ').trim();
                const words = afterKw.split(/\s+/).filter(w => w.length > 0);
                const first5Words = words.slice(0, 5);
                afterKw = first5Words.join(' ');
                const wordCount = first5Words.length;
                
                console.log(`  → After keyword (first 5 words): "${afterKw}" | Words: ${wordCount}`);
                
                // 🔥 PRIORITAS: CEK LOKASI DULU (UNTUK SEMUA ENTITY TYPE)
                if (isLocation(afterKw)) {
                    console.log(`  → Location detected → money-child (L6)`);
                    return 'money-child';
                }
                
                // JIKA JASA DAN TIDAK ADA LOKASI → money-page
                if (isJasaEntity()) {
                    console.log(`  → JASA + harga (no location) → money-page (L5)`);
                    return 'money-page';
                }
                
                // CEK SPESIFISITAS PRODUK
                const isSpecific = isSpecificProduct(afterKw, wordCount);
                
                // MONEY_MASTER: 1-2 kata ATAU 3 kata tapi masih umum
                if (wordCount <= 2 || (wordCount === 3 && !isSpecific)) {
                    console.log(`  → money-master (${wordCount} kata) → money-master (L4)`);
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
        // PRIORITAS 7: SUB-VARIANT (Level 8)
        // ============================================================
        if (isSubVariant(lowerName)) {
            console.log(`  🔬 SUB-VARIANT detected → sub-variant (L8)`);
            return 'sub-variant';
        }
        
        // ============================================================
        // PRIORITAS 8: VARIANT (Level 7)
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
    // 13. BUILD LEVELS FROM BREADCRUMB ITEMS
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
    // 14. VALIDASI HIERARKI (TIDAK BOLEH LONCAT LEVEL)
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
    // 15. JASA TIDAK BOLEH MONEY_MASTER
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
    // 16. FALLBACK URL
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
    // 17. SELECT LEVELS FOR BREADCRUMB (MAX 4 LEVELS)
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
    console.log(`📊 Breadcrumb Generator v5.6 — ENTITY PILLAR EXACT MATCH`);
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
    // 18. CURRENT PAGE - DETEKSI DARI URL CLEAN 🔥
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
    // 19. GENERATE HTML BREADCRUMB + JSON-LD
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
    // 20. RETURN LENGKAP
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
| Keyword | Entity Type | Hasil Deteksi | Level |
|---------|-------------|---------------|-------|
| jasa konstruksi | JASA_KONSTRUKSI | pillar | L1 ✅ |
| jasa konstruksi gedung sekolah | JASA_KONSTRUKSI | money-page | L5 ✅ |
| sewa alat konstruksi | SEWA | pillar | L1 ✅ |
| sewa alat konstruksi jakarta | SEWA | money-child | L6 ✅ |
| produk konstruksi | PRODUK_KONSTRUKSI | pillar | L1 ✅ |
| produk konstruksi terbaru | PRODUK_KONSTRUKSI | money-page | L5 ✅ |
| produk interior | PRODUK_INTERIOR | pillar | L1 ✅ |
| material konstruksi | MATERIAL_KONSTRUKSI | pillar | L1 ✅ |
| harga sewa alat proyek | SEWA | money-master | L4 ✅ |
| harga jasa cutting beton jakarta | JASA_KONSTRUKSI | money-child | L6 ✅ |
| jenis jasa konstruksi | JASA_KONSTRUKSI | sub-pillar-tipe-2 | L2 ✅ |
| perbandingan jasa konstruksi | JASA_KONSTRUKSI | sub-pillar-tipe-1 | L3 ✅ |
*/
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
		
        urlMappingInfrastrukturFromSub1MoneyPage,
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
 🔥 Hybrid Date Modified v7.3 — UNTUK betonjayareadymix.com
    ✅ FIX: 'home' TIDAK termasuk EVERGREEN_LEVELS (homepage dinamis)
    ✅ FIX: Page Level Detector v18.2 (sinkron dengan sistem terbaru)
    ✅ FIX: Event listener untuk v18
    ✅ FIX: KATEGORISASI YANG BENAR:
        - EVERGREEN: pillar, sub-pillar-tipe-2, variant, sub-variant
        - FLEXIBLE: sub-pillar-tipe-1 (perbandingan)
        - MONEY: money-master, money-page, money-child, money-leadgen
        - DINAMIS: home (AUTO mode)
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
    // 📌 KONSTANTA PAGE LEVELS (KATEGORISASI YANG BENAR)
    // ============================================================
    // EVERGREEN: konten abadi, jarang update (manual mode)
    const EVERGREEN_LEVELS = ['pillar', 'sub-pillar-tipe-2', 'variant', 'sub-variant'];
    
    // FLEXIBLE: sub-pillar-tipe-1 (Perbandingan) - semi evergreen
    const FLEXIBLE_LEVELS = ['sub-pillar-tipe-1'];
    
    // MONEY: perlu update berkala (auto mode)
    const MONEY_LEVELS = ['money-master', 'money-page', 'money-child', 'money-leadgen'];
    
    // DINAMIS: 'home' tidak masuk kategori manapun → AUTO mode

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
    // 📌 TUNGGU PAGE LEVEL DETECTOR v18 READY
    // ============================================================
    function waitForPageLevelDetector() {
      return new Promise((resolve) => {
        // Cek v18
        if (window.__pageLevelDetectorV18Ready && window.pageLevelDetectorV18) {
          console.log("✅ Page Level Detector v18 already ready");
          resolve(true);
          return;
        }
        // Cek v17 (fallback)
        if (window.__pageLevelDetectorV17Ready && window.pageLevelDetectorV17) {
          console.log("✅ Page Level Detector v17 already ready");
          resolve(true);
          return;
        }
        // Event listener untuk v18
        window.addEventListener("pageLevelDetectorV18Ready", () => {
          console.log("✅ Page Level Detector v18 ready (event)");
          resolve(true);
        }, { once: true });
        // Fallback timeout 5 detik
        setTimeout(() => {
          if (window.pageLevelDetectorV18 || window.pageLevelDetectorV17 || window.pageLevelDetector) {
            console.log("✅ Page Level Detector ready (timeout fallback)");
            resolve(true);
          } else {
            console.warn("⚠️ PageLevelDetector timeout, using defaults");
            resolve(false);
          }
        }, 5000);
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
      // Gunakan Page Level Detector v18.2 (terbaru)
      const PAGE_LEVEL_DETECTOR_URL = "https://raw.githack.com/aliyul/solution-blogger/main/PageLevelDetector.js";
      const EVERGREEN_DETECTOR_URL = "https://raw.githack.com/aliyul/solution-blogger/main/SmartEvergreenDetector.js";
      
      if (typeof window.pageLevelDetectorV18 === "undefined" && 
          typeof window.pageLevelDetectorV17 === "undefined" &&
          typeof window.pageLevelDetector === "undefined") {
        console.log("⏳ Loading Page Level Detector v18.2...");
        await loadExternalJS(PAGE_LEVEL_DETECTOR_URL);
        await waitForPageLevelDetector();
        console.log("✅ Page Level Detector v18.2 READY");
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
    // 📌 FUNGSI MENENTUKAN CUSTOM DATE BERDASARKAN PAGE LEVEL
    // ============================================================
    function getCustomDateByPageLevel(pageLevel, entityType) {
      // ============================================================
      // LEVEL 1: EVERGREEN (pillar, sub-pillar-tipe-2, variant, sub-variant)
      // Konten abadi, jarang update → MANUAL mode dengan tanggal stabil
      // ============================================================
      if (EVERGREEN_LEVELS.includes(pageLevel)) {
        if (pageLevel === 'pillar') {
          return "2026-04-01T10:30:00+07:00";
        }
        // sub-pillar-tipe-2, variant, sub-variant

        return "2026-05-08T00:00:00+07:00";
      }
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
		  // JASA KONSTRUKSI STRUKTUR POST: Sub-Pillar Tipe 2, Sub-Pillar Tipe 1, Variant, Sub-Variant 
        return "2026-04-10T00:00:00+07:00";
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

		  // JASA KONSTRUKSI BONGKAR BANGUNAN POST: Sub-Pillar Tipe 2, Sub-Pillar Tipe 1, Variant, Sub-Variant 
        return "2026-04-17T00:00:00+07:00";
		  */
      // ============================================================
      // LEVEL 2: FLEXIBLE (sub-pillar-tipe-1 - Perbandingan)
      // Semi evergreen, update lebih sering dari pillar
      // ============================================================
      if (FLEXIBLE_LEVELS.includes(pageLevel)) {
           		  // JASA KONSTRUKSI CUTTING BETON POST: Sub-Pillar Tipe 2, Sub-Pillar Tipe 1, Variant, Sub-Variant 
		
        return "2026-05-08T00:00:00+07:00";
      }
      
      // ============================================================
      // LEVEL 3: MONEY PAGES (perlu update berkala)
      // Kembalikan null agar SmartEvergreenDetector menghitung otomatis
      // money-master, money-page, money-child, money-leadgen
      // ============================================================
      if (MONEY_LEVELS.includes(pageLevel)) {
        return null; // AUTO mode
      }
      
      // ============================================================
      // LEVEL 4: HOMEPAGE & LAINNYA
      // 'home' (Beranda) dinamis, butuh update lebih sering
      // ============================================================
      if (pageLevel === 'home') {
        return null; // AUTO mode (biar dinamis)
      }
      
      // ============================================================
      // DEFAULT: AUTO mode
      // ============================================================
      return null;
    }

    // ============================================================
    // 📌 FUNGSI GET CATEGORY LABEL (UNTUK LOGGING)
    // ============================================================
    function getCategoryLabel(pageLevel) {
      if (EVERGREEN_LEVELS.includes(pageLevel)) return 'EVERGREEN';
      if (FLEXIBLE_LEVELS.includes(pageLevel)) return 'FLEXIBLE';
      if (MONEY_LEVELS.includes(pageLevel)) return 'MONEY';
      if (pageLevel === 'home') return 'HOMEPAGE (DYNAMIC)';
      return 'UNKNOWN';
    }

    // ============================================================
    // 📌 EKSEKUSI UTAMA
    // ============================================================
    
    await loadAllScripts();
    
    // Tunggu sebentar agar pageLevelDetector selesai deteksi
    await new Promise(resolve => setTimeout(resolve, 200));
    
    // ============================================================
    // 🔥 DAPATKAN PAGE LEVEL DARI DETECTOR (PRIORITAS v18 > v17 > legacy)
    // ============================================================
    let pageLevel = 'pillar';
    let entityType = 'produk';
    let detectorVersion = 'unknown';
    
    if (window.pageLevelDetectorV18) {
      pageLevel = window.pageLevelDetectorV18.detect();
      entityType = window.pageLevelDetectorV18.detectEntityType();
      detectorVersion = 'v18.2';
      console.log(`📌 [${detectorVersion}] Detected Page Level: ${pageLevel}, Entity Type: ${entityType}`);
    } else if (window.pageLevelDetectorV17) {
      pageLevel = window.pageLevelDetectorV17.detect();
      entityType = window.pageLevelDetectorV17.detectEntityType();
      detectorVersion = 'v17.0';
      console.log(`📌 [${detectorVersion}] Detected Page Level: ${pageLevel}, Entity Type: ${entityType}`);
    } else if (window.pageLevelDetector) {
      pageLevel = window.pageLevelDetector.detect();
      entityType = window.pageLevelDetector.detectEntityType();
      detectorVersion = 'legacy';
      console.log(`📌 [${detectorVersion}] Detected Page Level: ${pageLevel}, Entity Type: ${entityType}`);
    } else {
      console.warn("⚠️ PageLevelDetector not ready, using defaults (pillar/produk)");
    }
    
    // ============================================================
    // 🔥 VALIDASI PAGE LEVEL
    // ============================================================
    const ALL_KNOWN_LEVELS = [...EVERGREEN_LEVELS, ...FLEXIBLE_LEVELS, ...MONEY_LEVELS, 'home'];
    if (!ALL_KNOWN_LEVELS.includes(pageLevel)) {
      console.warn(`⚠️ Unknown page level: ${pageLevel}, defaulting to pillar`);
      pageLevel = 'pillar';
    }
    
    // ============================================================
    // 🔥 STEP 2: TENTUKAN CUSTOM DATE BERDASARKAN HASIL DETEKSI
    // ============================================================
    let customDate = getCustomDateByPageLevel(pageLevel, entityType);
    let manualMode = customDate !== null;
    let categoryLabel = getCategoryLabel(pageLevel);
    
    if (manualMode) {
      console.log(`📌 [CUSTOM DATE] PageLevel=${pageLevel}, EntityType=${entityType}, Category=${categoryLabel}`);
      console.log(`   → Using custom date: ${customDate}`);
    } else {
      console.log(`📌 [AUTO MODE] PageLevel=${pageLevel}, EntityType=${entityType}, Category=${categoryLabel}`);
      console.log(`   → No custom date, using auto calculation (SmartEvergreenDetector)`);
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
    // 📌 HITUNG VARIASI TANGGAL (UNIQUE PER HALAMAN)
    // ============================================================
    const uniquePageIdentifier = window.location.pathname;
    let hashSource = uniquePageIdentifier;
    
    if (EVERGREEN_LEVELS.includes(detectedPageLevel)) {
      hashSource = 'evergreen-' + hashSource;
      console.log(`📌 Evergreen content (${detectedPageLevel}) → using evergreen hash prefix`);
    } else if (FLEXIBLE_LEVELS.includes(detectedPageLevel)) {
      hashSource = 'flexible-' + hashSource;
      console.log(`📌 Flexible content (${detectedPageLevel}) → using flexible hash prefix`);
    } else if (detectedEntityType === 'jasa') {
      hashSource = 'jasa-' + hashSource;
      console.log(`📌 Jasa content (${detectedPageLevel}) → using jasa hash prefix`);
    } else if (MONEY_LEVELS.includes(detectedPageLevel)) {
      hashSource = 'money-' + hashSource;
      console.log(`📌 Money page (${detectedPageLevel}) → using money hash prefix`);
    } else if (detectedPageLevel === 'home') {
      hashSource = 'home-' + hashSource;
      console.log(`📌 Homepage (${detectedPageLevel}) → using home hash prefix`);
    }
    
    const hash = stableHash(hashSource);
    const offsetSeconds = hash % 86400; // maksimal 24 jam
    const finalDate = new Date(new Date(dateModified).getTime() + offsetSeconds * 1000);
    const isoDate = toISOWithTimezoneLocal(finalDate);

    // ============================================================
    // 📌 UPDATE META DATEMODIFIED
    // ============================================================
    updateMetaDateModified(isoDate);

    window.AEDMetaDates = {
      ...window.AEDMetaDates,
      dateModified: isoDate,
      hashOffset: offsetSeconds,
      detectorVersion: detectorVersion,
      category: categoryLabel,
      mode: manualMode ? 'MANUAL' : 'AUTO'
    };

    console.log(`✅ [HybridDateModified] ${uniquePageIdentifier} → ${isoDate}`);
    console.log(`   - offsetSeconds: ${offsetSeconds} detik (${Math.floor(offsetSeconds / 3600)} jam ${Math.floor((offsetSeconds % 3600) / 60)} menit)`);
    console.log(`   - Mode: ${manualMode ? 'MANUAL (custom date based on page level)' : 'AUTO (SmartEvergreenDetector)'}`);
    console.log(`   - Category: ${categoryLabel}`);
    console.log(`   - Detector: ${detectorVersion}`);
    console.log(`📋 Custom config for betonjayareadymix.com applied successfully`);

  } catch (err) {
    console.error("[HybridDateModified] Fatal:", err);
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
        'SEWA_RENTAL'
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
        'SEWA_RENTAL'
    );
)
	if (urlMappingSewaAlatPendukungFromSub2Sub1[cleanUrlJasaKons]) {
   	   generateBreadcrumbJasaKonstruksi(
        urlMappingSewaAlatPendukungFromSub2Sub1,
        cleanUrlJasaKons,
       [
           // { name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Sewa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/sewa-alat-konstruksi.html' },
            { name: 'Daftar Sewa Alat Pendukung', url: 'https://www.betonjayareadymix.com/p/daftar-sewa-alat-pendukung.html' }
        ],
        'SEWA_RENTAL'
    );
)
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
        'SEWA_RENTAL'
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
        'SEWA_RENTAL'
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
        'SEWA_RENTAL'
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
        'SEWA_RENTAL'
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
        'SEWA_RENTAL'
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


if (urlMappingInfrastrukturFromSub1MoneyPage[cleanUrlJasaKons]) {
        restoreCondition('JasaKonsSub');
	restoreCondition('JasaPerbaikanInfrastruktur');
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
	removeCondition('JasaPerawatanPerbaikanBangunan');
	  
       // removeCondition('JasaKonstruksiCustom');
        JasaKonstruksiSubLink.style.visibility = 'visible';
        JasaPerbaikanInfrastrukturLink.style.visibility = 'visible';
        pageNameKonstruksiSub.textContent = urlMappingInfrastrukturFromSub1MoneyPage[cleanUrlJasaKons];

	    generateBreadcrumbJasaKonstruksi(
        urlMappingInfrastrukturFromSub1MoneyPage,
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
        restoreCondition('JasaKonsSub');
	restoreCondition('JasaPengeboran');
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
	   
    //SUB JASA PENGEBORAN
		removeCondition('JasaBorAirSumur');
		removeCondition('JasaBorPile');
		removeCondition('JasaCoringBeton');
		removeCondition('JasaBorBeton');
		removeCondition('JasaBorTanah');
		removeCondition('JasaBorHorizontal');
		removeCondition('JasaBorTembok');

       // removeCondition('JasaKonstruksiCustom');
	JasaPengeboranLink.style.visibility = 'hidden';
	
        JasaKonstruksiSubLink.style.visibility = 'visible';
        JasaPengeboranLink.style.visibility = 'visible';
        pageNameKonstruksiSub.textContent = urlMappingPengeboranFromSub1MoneyPage[cleanUrlJasaKons];
	
	generateBreadcrumbJasaKonstruksi(
        urlMappingStrukturFromSub1MoneyPage,
        cleanUrlJasaKons,
        [
            //{ name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Pengeboran', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-pengeboran.html'},
            { name: 'Perbandingan Jasa Pengeboran', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-pengeboran.html'}
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
