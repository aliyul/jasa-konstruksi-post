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
  "https://www.betonjayareadymix.com/p/jasa-alat-konstruksi.html": "Jasa Alat Konstruksi",  // TYPE: SUB2
  "https://www.betonjayareadymix.com/p/jasa-struktur-konstruksi.html": "Jasa Struktur Konstruksi",  // TYPE: SUB2
  "https://www.betonjayareadymix.com/p/jasa-pondasi-perkuatan-tanah.html": "Jasa Pondasi & Perkuatan Tanah",  // TYPE: SUB2
  "https://www.betonjayareadymix.com/p/jasa-saluran-drainase.html": "Jasa Saluran & Drainase",  // TYPE: SUB2
  "https://www.betonjayareadymix.com/p/jasa-jalan-perkerasan.html": "Jasa Jalan & Perkerasan",  // TYPE: SUB2
  "https://www.betonjayareadymix.com/p/jasa-pematangan-lahan.html": "Jasa Pematangan Lahan",  // TYPE: SUB2
  "https://www.betonjayareadymix.com/p/jasa-uji-tanah.html": "Jasa Uji Tanah",  // TYPE: SUB2
  "https://www.betonjayareadymix.com/p/jasa-cutting-beton.html": "Jasa Cutting Beton",  // TYPE: SUB2
  "https://www.betonjayareadymix.com/p/jasa-bongkar-bangunan.html": "Jasa Bongkar Bangunan",  // TYPE: SUB2
  "https://www.betonjayareadymix.com/p/jasa-buang-puing.html": "Jasa Buang Puing",  // TYPE: SUB2
  "https://www.betonjayareadymix.com/p/jasa-pengeboran.html": "Jasa Pengeboran",  // TYPE: SUB2
  "https://www.betonjayareadymix.com/p/jasa-perkuatan-tanah-longsor.html": "Jasa Perkuatan Tanah Longsor",  // TYPE: SUB2
  "https://www.betonjayareadymix.com/p/jasa-pembatas-pengaman.html": "Jasa Pembatas Pengaman",  // TYPE: SUB2
  "https://www.betonjayareadymix.com/p/jasa-renovasi.html": "Jasa Renovasi",  // TYPE: SUB2
  "https://www.betonjayareadymix.com/p/jasa-finishing.html": "Jasa Finishing",  // TYPE: SUB2
  "https://www.betonjayareadymix.com/p/jasa-instalasi-listrik.html": "Jasa Instalasi Listrik",  // TYPE: SUB2
  "https://www.betonjayareadymix.com/p/jasa-perawatan-perbaikan-bangunan.html": "Jasa Perawatan Perbaikan Bangunan",  // TYPE: SUB2
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
  "https://www.betonjayareadymix.com/p/panduan-membangun-bangunan.html": "Panduan Membangun Bangunan"  // TYPE: SUB1
};

const urlMappingRenovasiBridgeFromSub2Sub1 = {
  "https://www.betonjayareadymix.com/p/panduan-renovasi-bangunan.html": "Panduan Renovasi Bangunan",  // TYPE: SUB1
  "https://www.betonjayareadymix.com/p/panduan-renovasi-infrastruktur.html": "Panduan Renovasi Infrastruktur",  // TYPE: SUB1
};

const urlMappingFinishingBridgeFromSub2Sub1 = {
  "https://www.betonjayareadymix.com/p/panduan-finishing-bangunan.html": "Panduan Finishing Bangunan",  // TYPE: SUB1
  "https://www.betonjayareadymix.com/p/panduan-finishing-infrastruktur.html": "Panduan Finishing Infrastruktur"  // TYPE: SUB1
};

const urlMappingPerawatanPerbaikanBridgeFromSub2Sub1 = {
  "https://www.betonjayareadymix.com/p/panduan-perbaikan-bangunan.html": "Panduan Perbaikan Bangunan"  // TYPE: SUB1
};

const urlMappingJalanPerkerasanBridgeFromSub2Sub1 = {
  "https://www.betonjayareadymix.com/p/panduan-pembuatan-infrastruktur.html": "Panduan Pembuatan Infrastruktur"  // TYPE: SUB1
};

const urlMappingPerbaikanInfrastrukturBridgeFromSub2Sub1 = {
  "https://www.betonjayareadymix.com/p/panduan-perbaikan-infrastruktur.html": "Panduan Perbaikan Infrastruktur"  // TYPE: SUB1
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
  "https://www.betonjayareadymix.com/p/sewa-alat-proyek.html": "Sewa Alat Proyek",  // TYPE: SUB2 PARENT
  "https://www.betonjayareadymix.com/p/sewa-alat-berat.html": "Sewa Alat Berat",  // TYPE: SUB2 PARENT
  "https://www.betonjayareadymix.com/p/sewa-alat-konstruksi-ringan.html": "Sewa Alat Konstruksi Ringan",  // TYPE: SUB2 PARENT
};
const urlMappingSewaAlatProyekFromSub2Sub1 = {
  "https://www.betonjayareadymix.com/p/perbandingan-sewa-alat-proyek.html": "Perbandingan Sewa Alat Proyek"  // TYPE: SUB1 PARENT
};
const urlMappingSewaAlatProyekFromSub1MoneyMaster = {
  "https://www.betonjayareadymix.com/p/harga-sewa-alat-proyek.html": "Harga Sewa Alat Proyek"  // TYPE: MoneyMaster
};

const urlMappingSewaAlatBeratFromSub2Sub1 = {
  "https://www.betonjayareadymix.com/p/perbandingan-sewa-alat-berat.html": "Perbandingan Sewa Alat Berat",  // TYPE: SUB1 PARENT
   "https://www.betonjayareadymix.com/p/durasi-sewa-alat-berat.html": "Durasi Sewa Alat Berat"  // TYPE: SUB1 pendukung
};
const urlMappingSewaAlatBeratFromSub1MoneyMaster = {
  "https://www.betonjayareadymix.com/p/harga-sewa-alat-berat.html": "Harga Sewa Alat Berat",  // TYPE: MoneyMaster PARENT
  "https://www.betonjayareadymix.com/p/harga-sewa-excavator.html": "Harga Sewa Excavator",  // TYPE: MoneyMaster PARENT
  "https://www.betonjayareadymix.com/p/harga-sewa-beko.html": "Harga Sewa Beko",  // TYPE: MoneyMaster PARENT
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

const urlMappingSewaAlatRinganFromSub2Sub1 = {
  "https://www.betonjayareadymix.com/p/perbandingan-sewa-alat-ringan.html": "Perbandingan Sewa Alat Ringan"  // TYPE: SUB1
};
const urlMappingSewaAlatRinganFromSub1MoneyMaster = {
  "https://www.betonjayareadymix.com/p/harga-sewa-alat-ringan.html": "Harga Sewa Alat Ringan"  // TYPE: MoneyMaster PARENT
};

// [MONEY_PAGE] - SEWA PER JENIS ALAT BERAT (ENTITY SEWA/RENTAL - MONEY_PAGE)
const urlMappingSewaAlatBeratFromSub2MoneyPage = {
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
const urlMappingSewaAlatKonstruksiRinganFromSub2MoneyPage = {
  // 🟡 SARAN ITEM (BELUM AKTIF - PERLU DIBUAT KONTEN)
  // "https://www.betonjayareadymix.com/p/sewa-gerbang-tangan.html": "Sewa Gerbang Tangan",  // TYPE: MONEY_PAGE
  // "https://www.betonjayareadymix.com/p/sewa-concrete-mixer.html": "Sewa Concrete Mixer",  // TYPE: MONEY_PAGE
};

// ============================================================
// 📁 JASA PERBAIKAN INFRASTRUKTUR (ENTITY: JASA)
// 🧠 TYPE: MONEY_PAGE (bukan MONEY_MASTER)
// ============================================================

const urlMappingPerbaikanInfrastrukturFromSub2MoneyPage = {
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-jalan.html": "Jasa Renovasi Perbaikan Jalan",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-jembatan.html": "Jasa Perbaikan Jembatan",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-drainase.html": "Jasa Perbaikan Drainase",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-trotoar.html": "Jasa Perbaikan Trotoar",  // TYPE: MONEY_PAGE
};

// ============================================================
// 📁 JASA FINISHING - SUB2 (LEVEL 2)
// ============================================================

const urlMappingFinishingFromPillarSub2 = {
  "https://www.betonjayareadymix.com/p/jasa-finishing-bangunan.html": "Jasa Finishing Bangunan",  // TYPE: SUB2
  "https://www.betonjayareadymix.com/p/jasa-finishing-infrastruktur.html": "Jasa Finishing Infrastruktur",  // TYPE: SUB2
};

// ============================================================
// 📁 JASA STRUKTUR KONSTRUKSI - SUB2 (LEVEL 2)
// ============================================================

const urlMappingStrukturFromPillarSub2 = {
  "https://www.betonjayareadymix.com/p/jasa-konstruksi-gedung-dan-hunian.html": "Jasa Konstruksi Gedung dan Hunian",  // TYPE: SUB2
  "https://www.betonjayareadymix.com/p/jasa-konstruksi-industri-dan-gudang.html": "Jasa Konstruksi Industri dan Gudang",  // TYPE: SUB2
  "https://www.betonjayareadymix.com/p/jasa-struktur-baja-dan-rangka-ringan.html": "Jasa Struktur Baja dan Rangka Ringan",  // TYPE: SUB2
  "https://www.betonjayareadymix.com/p/jasa-struktur-khusus.html": "Jasa Struktur Khusus",  // TYPE: SUB2
  "https://www.betonjayareadymix.com/p/jasa-konstruksi-lapangan-olahraga.html": "Jasa Konstruksi Lapangan Olahraga",  // TYPE: SUB2
  "https://www.betonjayareadymix.com/p/jasa-konstruksi-modular-dan-precast.html": "Jasa Konstruksi Modular dan Precast",  // TYPE: SUB2
  "https://www.betonjayareadymix.com/p/jasa-struktur-beton-dan-pengecoran.html": "Jasa Struktur Beton dan Pengecoran",  // TYPE: SUB2
};

// ============================================================
// 📁 JASA PONDASI & PERKUATAN TANAH - SUB2 (LEVEL 2)
// ============================================================

const urlMappingPondasiFromPillarSub2 = {
  "https://www.betonjayareadymix.com/p/jasa-pondasi-bangunan.html": "Jasa Pondasi Bangunan",  // TYPE: SUB2
  "https://www.betonjayareadymix.com/p/jasa-pemadatan-persiapan-pondasi.html": "Jasa Pemadatan & Persiapan Pondasi",  // TYPE: SUB2
  "https://www.betonjayareadymix.com/p/jasa-perkuatan-tanah.html": "Jasa Perkuatan Tanah",  // TYPE: SUB2
  "https://www.betonjayareadymix.com/p/jasa-retrofitting-pondasi.html": "Jasa Retrofitting Pondasi",  // TYPE: SUB2
};

// ============================================================
// 📁 BONGKAR BANGUNAN - SUB2 (LEVEL 2)
// ============================================================

const urlMappingBongkarBangunanFromPillarSub2 = {
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
  "https://www.betonjayareadymix.com/p/jasa-bongkar-lantai.html": "Jasa Bongkar Lantai",  // TYPE: SUB2
};

// ============================================================
// 📁 JASA RENOVASI - SUB2 (LEVEL 2)
// ============================================================

const urlMappingRenovasiFromPillarSub2 = {
  "https://www.betonjayareadymix.com/p/jasa-renovasi-fasilitas-umum.html": "Jasa Renovasi Fasilitas Umum",  // TYPE: SUB2
  "https://www.betonjayareadymix.com/p/jasa-renovasi-bangunan.html": "Jasa Renovasi Bangunan",  // TYPE: SUB2
  "https://www.betonjayareadymix.com/p/jasa-renovasi-interior.html": "Jasa Renovasi Interior",  // TYPE: SUB2
  "https://www.betonjayareadymix.com/p/jasa-renovasi-eksterior-bangunan.html": "Jasa Renovasi Eksterior Bangunan",  // TYPE: SUB2
};

// ============================================================
// 📁 JASA PERAWATAN & PERBAIKAN BANGUNAN - SUB2 (LEVEL 2)
// ============================================================

const urlMappingPerawatanPerbaikanBangunanFromPillarSub2 = {
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-struktur.html": "Jasa Perbaikan Struktur",  // TYPE: SUB2
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-kebocoran-waterproofing.html": "Jasa Perbaikan Kebocoran Waterproofing",  // TYPE: SUB2
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-elemen-arsitektural.html": "Jasa Perbaikan Elemen Arsitektural",  // TYPE: SUB2
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-atap-drainase-bangunan.html": "Jasa Perbaikan Atap Drainase Bangunan",  // TYPE: SUB2
};

// ============================================================
// 📁 JASA PENGEBORAN - SUB2 (LEVEL 2) & MONEY_PAGE (LEVEL 4)
// 🧠 ENTITY: JASA → TYPE: MONEY_PAGE (bukan MONEY_MASTER)
// ============================================================
/*
const urlMappingPengeboranFromPillarSub2 = {
  "https://www.betonjayareadymix.com/p/jasa-pengeboran.html": "Jasa Pengeboran",  // TYPE: SUB2
};*/

const urlMappingPengeboranFromSub2MoneyPage = {
  // [MONEY_PAGE] - JENIS PENGEBORAN SPESIFIK (JASA)
  "https://www.betonjayareadymix.com/p/jasa-bor-air-sumur.html": "Jasa Bor Air Sumur",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/p/jasa-bore-pile.html": "Jasa Bore Pile",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/p/jasa-coring-beton.html": "Jasa Coring Beton",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/p/jasa-bor-beton.html": "Jasa Bor Beton",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/p/jasa-bor-tanah.html": "Jasa Bor Tanah",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/p/jasa-bor-horizontal.html": "Jasa Bor Horizontal",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/p/jasa-bor-tembok.html": "Jasa Bor Tembok",  // TYPE: MONEY_PAGE
};

// ============================================================
// 📁 JASA SALURAN & DRAINASE - SUB2 (LEVEL 2) & MONEY_PAGE
// 🧠 ENTITY: JASA → TYPE: MONEY_PAGE
// ⚠️ STATUS: KONTEN KOSONG - PERLU DIBUAT
// ============================================================

/*const urlMappingSaluranFromPillarSub2 = {
  "https://www.betonjayareadymix.com/p/jasa-saluran-drainase.html": "Jasa Saluran & Drainase",  // TYPE: SUB2
};*/

const urlMappingSaluranFromSub2MoneyPage = {
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

const urlMappingJalanFromSub2MoneyPage = {
  "https://www.betonjayareadymix.com/p/jasa-pembangunan-infrastruktur-jalan.html": "Jasa Pembangunan Infrastruktur Jalan",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/p/jasa-pemadatan-dan-persiapan-tanah-jalan.html": "Jasa Pemadatan dan Persiapan Tanah Jalan",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/p/jasa-perkerasan-jalan.html": "Jasa Perkerasan Jalan",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/p/jasa-pengerasan-jalan.html": "Jasa Pengerasan Jalan",  // TYPE: MONEY_PAGE
};

// ============================================================
// 📁 JASA PEMATANGAN LAHAN - SUB2 (LEVEL 2) & MONEY_PAGE
// 🧠 ENTITY: JASA → TYPE: MONEY_PAGE
// ============================================================
/*
const urlMappingPematanganLahanFromPillarSub2 = {
  "https://www.betonjayareadymix.com/p/jasa-pematangan-lahan.html": "Jasa Pematangan Lahan",  // TYPE: SUB2
};*/

const urlMappingPematanganLahanFromSub2MoneyPage = {
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
  "https://www.betonjayareadymix.com/p/jasa-tebang-pohon.html": "Jasa Tebang Pohon",  // TYPE: MONEY_PAGE
};

// ============================================================
// 📁 JASA UJI TANAH - SUB2 (LEVEL 2) & MONEY_PAGE
// 🧠 ENTITY: JASA → TYPE: MONEY_PAGE
// ============================================================
/*
const urlMappingUjiTanahFromPillarSub2 = {
  "https://www.betonjayareadymix.com/p/jasa-uji-tanah.html": "Jasa Uji Tanah",  // TYPE: SUB2
};*/

const urlMappingUjiTanahFromSub2MoneyPage = {
  "https://www.betonjayareadymix.com/p/jasa-sondir.html": "Jasa Sondir",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/p/jasa-cpt.html": "Jasa CPT",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/p/jasa-lab-tanah.html": "Jasa Lab Tanah",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/p/jasa-boring-tanah.html": "Jasa Boring Tanah",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/p/jasa-uji-penetrasi.html": "Jasa Uji Penetrasi",  // TYPE: MONEY_PAGE
};

// ============================================================
// 📁 JASA PERKUATAN TANAH LONGSOR - SUB2 (LEVEL 2) & MONEY_PAGE
// 🧠 ENTITY: JASA → TYPE: MONEY_PAGE
// ============================================================
/*
const urlMappingPerkuatanTanahLongsorFromPillarSub2 = {
  "https://www.betonjayareadymix.com/p/jasa-perkuatan-tanah-longsor.html": "Jasa Perkuatan Tanah Longsor",  // TYPE: SUB2
};*/

const urlMappingPerkuatanTanahLongsorFromSub2MoneyPage = {
  "https://www.betonjayareadymix.com/p/jasa-bronjong-penahan-longsor.html": "Jasa Bronjong Penahan Longsor",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/p/jasa-soil-nailing-tebing.html": "Jasa Soil Nailing Tebing",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/p/jasa-dinding-penahan-tanah-longsor.html": "Jasa Dinding Penahan Tanah Longsor",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/p/jasa-geotextile-perkuatan-lereng.html": "Jasa Geotextile Perkuatan Lereng",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/p/jasa-sheet-pile-penahan-longsor.html": "Jasa Sheet Pile Penahan Longsor",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/p/jasa-stabilisasi-tanah-labil.html": "Jasa Stabilisasi Tanah Labil",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/p/jasa-perkuatan-tanah-longsor-rumah.html": "Jasa Perkuatan Tanah Longsor Rumah",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/p/jasa-perkuatan-tebing-jalan.html": "Jasa Perkuatan Tebing Jalan",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/p/jasa-perkuatan-longsor-perkebunan.html": "Jasa Perkuatan Longsor Perkebunan",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/p/jasa-drainase-anti-longsor.html": "Jasa Drainase Anti Longsor",  // TYPE: MONEY_PAGE
};

// ============================================================
// 📁 JASA PEMBATAS & PENGAMAN - SUB2 (LEVEL 2) & MONEY_PAGE
// 🧠 ENTITY: JASA → TYPE: MONEY_PAGE
// ============================================================
/*
const urlMappingPembatasFromPillarSub2 = {
  "https://www.betonjayareadymix.com/p/jasa-pembatas-pengaman.html": "Jasa Pembatas Pengaman",  // TYPE: SUB2
};*/

const urlMappingPembatasFromSub2MoneyPage = {
  "https://www.betonjayareadymix.com/p/jasa-pengamanan-area-proyek.html": "Jasa Pengamanan Area Proyek",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/p/jasa-rambu-dan-sistem-keamanan-visual.html": "Jasa Rambu dan Sistem Keamanan Visual",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/p/jasa-pengaman-sisi-jalan-infrastruktur.html": "Jasa Pengaman Sisi Jalan Infrastruktur",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/p/jasa-pembuatan-pagar-dinding-pembatas.html": "Jasa Pembuatan Pagar Dinding Pembatas",  // TYPE: MONEY_PAGE
};

// ============================================================
// 📁 JASA INSTALASI LISTRIK - SUB2 (LEVEL 2) & MONEY_PAGE
// 🧠 ENTITY: JASA → TYPE: MONEY_PAGE
// ============================================================
/*
const urlMappingJasaInstalasiListrikFromPillarSub2 = {
  "https://www.betonjayareadymix.com/p/jasa-instalasi-listrik.html": "Jasa Instalasi Listrik",  // TYPE: SUB2
};*/

const urlMappingJasaInstalasiListrikFromSub2MoneyPage = {
  "https://www.betonjayareadymix.com/p/jasa-instalasi-solar-panel.html": "Jasa Instalasi Solar Panel",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/p/jasa-instalasi-listrik-rumah.html": "Jasa Instalasi Listrik Rumah",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/p/jasa-instalasi-listrik-komersial.html": "Jasa Instalasi Listrik Komersial",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/p/jasa-pemasangan-panel-listrik.html": "Jasa Pemasangan Panel Listrik",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/p/jasa-keamanan-proteksi-listrik.html": "Jasa Keamanan & Proteksi Listrik",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/p/jasa-maintenance-perbaikan-listrik.html": "Jasa Maintenance & Perbaikan Listrik",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/p/jasa-konsultasi-listrik.html": "Jasa Konsultasi Listrik",  // TYPE: MONEY_PAGE
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

// ============================================================
// FUNGSI GENERATE BREADCRUMB - VERSI FINAL
// UNTUK SEMUA ENTITY TYPE (PRODUK, MATERIAL, JASA, SEWA/RENTAL)
// SUPPORT: Produk Konstruksi, Material Konstruksi, Jasa Konstruksi, 
//          Produk Interior, Jasa Desain Interior, Sewa/Rental
// MAX_LEVEL = 4 (TERMASUK HOME)
// SKIP LEVEL BEKERJA UNTUK PILLAR & SUB2
// ============================================================

function generateBreadcrumbForMapping(mappingObj, currentUrl, breadcrumbItems = [], entityType = 'PRODUK_INTERIOR') {
    
    const MAX_LEVEL = 4;
    const DOMAIN = 'https://www.betonjayareadymix.com';
    
    // ============================================================
    // 1. VALIDASI ENTITY TYPE (SEMUA TYPE DIDUKUNG)
    // ============================================================
    const validEntityTypes = [
        // PRODUK
        'PRODUK_KONSTRUKSI', 
        'PRODUK_INTERIOR',
        'PRODUK',
        // MATERIAL
        'MATERIAL_KONSTRUKSI',
        'MATERIAL',
        // JASA
        'JASA_KONSTRUKSI',
        'JASA_DESAIN_INTERIOR',
        'JASA',
        // SEWA/RENTAL
        'SEWA',
        'RENTAL',
        'SEWA_RENTAL',
        'SEWA_ALAT',
        'RENTAL_ALAT'
    ];
    
    if (!validEntityTypes.includes(entityType)) {
        console.error(`❌ ERROR: "${entityType}" BUKAN ENTITY TYPE yang valid!`);
        console.error(`   Gunakan salah satu dari: ${validEntityTypes.join(', ')}`);
        return null;
    }
    
    // Ambil page title dari mappingObj atau dari breadcrumbItems terakhir
    let pageTitle = mappingObj?.[currentUrl];
    if (!pageTitle && breadcrumbItems.length > 0) {
        const lastItem = breadcrumbItems[breadcrumbItems.length - 1];
        pageTitle = typeof lastItem === 'object' ? lastItem.name : lastItem;
    }
    
    if (!pageTitle) {
        console.error(`❌ ERROR: Page title tidak ditemukan untuk URL "${currentUrl}"`);
        return null;
    }
    
    // ============================================================
    // 2. KUMPULKAN SEMUA NAMA HALAMAN DARI MAPPING
    // ============================================================
    const allPageNames = [];
    if (mappingObj) {
        for (const [url, name] of Object.entries(mappingObj)) {
            if (name && typeof name === 'string') {
                allPageNames.push(name.toLowerCase());
            }
        }
    }
    
    // ============================================================
    // 3. DETEKSI TYPE OTOMATIS (SESUAI STANDAR PHASE 1)
    // DENGAN DUKUNGAN SEMUA ENTITY TYPE
    // ============================================================
    function detectPageType(pageName, position, totalLevels) {
        const lowerName = pageName.toLowerCase();
        const words = lowerName.split(' ');
        const firstWord = words[0];
        const lastWord = words[words.length - 1];
        
        // ============================================================
        // PRIORITAS 1: PILLAR (level terluas, posisi pertama)
        // ============================================================
        if (position === 0) {
            return 'PILLAR';
        }
        
        // ============================================================
        // PRIORITAS 2: MONEY_LEADGEN (khusus JASA & SEWA)
        // ============================================================
        const leadgenWords = ['konsultasi', 'survey', 'hubungi', 'contact', 'estimasi', 'penawaran'];
        for (const word of leadgenWords) {
            if (lowerName.startsWith(word + ' ') || lowerName === word) {
                return 'MONEY_LEADGEN';
            }
        }
        
        // ============================================================
        // PRIORITAS 3: MONEY_MASTER (harga NASIONAL/UMUM)
        // KHUSUS PRODUK, MATERIAL, SEWA (JASA TIDAK BOLEH)
        // ============================================================
        function isMoneyMaster(name) {
            const lower = name.toLowerCase();
            
            // JASA tidak boleh menggunakan MONEY_MASTER
            const isJasaEntity = ['JASA_KONSTRUKSI', 'JASA_DESAIN_INTERIOR', 'JASA'].includes(entityType);
            if (isJasaEntity) {
                return false;
            }
            
            // Harus diawali "harga" atau "sewa" (untuk rental)
            const hasPriceKeyword = lower.startsWith('harga ') || lower.startsWith('sewa ') || lower.startsWith('biaya ');
            if (!hasPriceKeyword) return false;
            
            // Cek apakah ada produk spesifik (bukan kategori umum)
            let afterKeyword = '';
            if (lower.startsWith('harga ')) afterKeyword = lower.substring(6);
            if (lower.startsWith('sewa ')) afterKeyword = lower.substring(5);
            if (lower.startsWith('biaya ')) afterKeyword = lower.substring(6);
            
            // Kata kunci yang menandakan produk SPESIFIK (bukan umum)
            const specificProductIndicators = [
                'pabrikan', 'minimalis', 'modern', 'modular', 'siap pakai',
                'hpl', 'mdf', 'jati', 'bigland', 'pengantin', 'murah',
                'premium', 'ekonomis', 'standar', 'custom', 'bespoke',
                '0.', '0,', '1.', '2.', '3.', 'mm', 'cm', 'meter', 'inch',
                'putih', 'hitam', 'merah', 'biru', 'hijau', 'kuning',
                'kecil', 'besar', 'sedang', 'mini', 'maxi', 'jumbo',
                // Untuk sewa/rental
                'excavator', 'bulldozer', 'crane', 'dump truck', 'vibro',
                'alat berat', 'alat konstruksi'
            ];
            
            for (const indicator of specificProductIndicators) {
                if (afterKeyword.includes(indicator)) {
                    return false; // Ini MONEY_PAGE, bukan MONEY_MASTER
                }
            }
            
            // Jika hanya "harga [kategori]" atau "sewa [kategori]" -> MONEY_MASTER
            return true;
        }
        
        if (isMoneyMaster(pageName)) {
            return 'MONEY_MASTER';
        }
        
        // ============================================================
        // PRIORITAS 4: MONEY_PAGE (harga PRODUK SPESIFIK)
        // ============================================================
        const hasPriceOrRent = lowerName.includes('harga ') || 
                                lowerName.includes('sewa ') || 
                                lowerName.includes('biaya ') ||
                                lowerName.includes('jual ') ||
                                lowerName.includes('beli ') ||
                                lowerName.includes('rental ');
        
        if (hasPriceOrRent && !isMoneyMaster(pageName)) {
            return 'MONEY_PAGE';
        }
        
        // ============================================================
        // PRIORITAS 5: MONEY_PAGE (jual/beli/sewa produk spesifik)
        // ============================================================
        const transactionWords = ['jual', 'beli', 'sewa', 'pesan', 'booking', 'rental', 'order'];
        for (const word of transactionWords) {
            if (lowerName.startsWith(word + ' ')) {
                return 'MONEY_PAGE';
            }
        }
        
        // ============================================================
        // PRIORITAS 6: MONEY_CHILD (harga + lokasi ATAU sewa + lokasi)
        // DETEKSI LOKASI DENGAN WHITELIST + POLA (HYBRID METHOD)
        // ============================================================
        
        // Whitelist kota/kabupaten di Indonesia
        const locationIndicators = [
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
            'surabaya', 'malang', 'kediri', 'blitar', 'madiun', 'ponorogo', 'ngawi', 
            'magetan', 'trenggalek', 'tulungagung', 'nganjuk', 'jombang', 'mojokerto', 
            'gresik', 'sidoarjo', 'pasuruan', 'probolinggo', 'lumajang', 'jember', 
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
        
        // Pola akhiran kota (untuk mendeteksi kota yang tidak ada di whitelist)
        const citySuffixes = ['karta', 'jaya', 'pura', 'sari', 'mulya', 'agung', 'asih', 'ayem', 'luhur'];
        
        // Blacklist kata yang mirip lokasi tapi sebenarnya produk
        const notLocationWords = [
            'mini', 'maxi', 'super', 'extra', 'plus', 'pro', 'max', 'ultra',
            'baru', 'lama', 'bekas', 'second', 'original', 'kw', 'grade', 
            'murah', 'mahal', 'hemat', 'premium', 'standar', 'ekonomis', 
            'kecil', 'besar', 'sedang', 'panjang', 'pendek', 'tebal', 'tipis',
            'putih', 'hitam', 'merah', 'biru', 'hijau', 'kuning', 'ungu', 'abu', 'coklat',
            'minimalis', 'modern', 'klasik', 'industrial', 'skandinavia', 'jepang'
        ];
        
        function isLocation(word) {
            const lowerWord = word.toLowerCase();
            
            // LEVEL 1: Cek whitelist kota
            if (locationIndicators.includes(lowerWord)) return true;
            
            // LEVEL 2: Cek blacklist kata produk
            if (notLocationWords.includes(lowerWord)) return false;
            
            // LEVEL 3: Cek apakah kata tersebut dikenal sebagai produk (dari mapping)
            const isKnownProduct = allPageNames.some(known => 
                known === lowerWord || 
                known.includes(lowerWord) || 
                lowerWord.includes(known)
            );
            if (isKnownProduct) return false;
            
            // LEVEL 4: Cek pola akhiran kota
            for (const suffix of citySuffixes) {
                if (lowerWord.endsWith(suffix) && lowerWord.length >= 4) {
                    return true;
                }
            }
            
            // LEVEL 5: Cek pola kata dengan 2+ vokal (untuk kata yang panjang)
            if (lowerWord.length >= 5 && lowerWord.length <= 12) {
                const vowelCount = (lowerWord.match(/[aiueo]/g) || []).length;
                if (vowelCount >= 2) {
                    // Pastikan bukan kata produk umum
                    const commonProductWords = ['furniture', 'furnitur', 'meja', 'kursi', 'lemari', 'sofa'];
                    if (!commonProductWords.includes(lowerWord)) {
                        return true;
                    }
                }
            }
            
            return false;
        }
        
        // Cek apakah last word adalah lokasi (minimal 2 kata)
        if (words.length >= 2 && isLocation(lastWord)) {
            return 'MONEY_CHILD';
        }
        
        // ============================================================
        // PRIORITAS 7: SUB1 (perbandingan/evaluasi) - SEMUA ENTITY
        // ============================================================
        const comparisonWords = ['vs', 'versus', 'atau', 'lebih baik', 'perbandingan', 
                                  'banding', 'mana yang', 'kelebihan', 'kekurangan',
                                  'lebih bagus', 'lebih murah', 'lebih tahan', 'lebih awet',
                                  'plus minus', 'keunggulan', 'kelemahan'];
        for (const word of comparisonWords) {
            if (lowerName.includes(word)) {
                return 'SUB1';
            }
        }
        
        // ============================================================
        // PRIORITAS 8: SUB1 (panduan/cara/tips) - EDUKASI SEMUA ENTITY
        // ============================================================
        const guideWords = ['panduan', 'cara', 'tips', 'tutorial', 'langkah', 
                             'petunjuk', 'pedoman', 'strategi', 'metode', 'teknik',
                             'rahasia', 'kunci', 'wajib tahu', 'perlu diketahui'];
        for (const word of guideWords) {
            if (lowerName.startsWith(word + ' ') || lowerName.includes(' ' + word + ' ')) {
                return 'SUB1';
            }
        }
        
        // ============================================================
        // PRIORITAS 9: VARIANT (spesifikasi teknis) - PRODUK/MATERIAL/SEWA
        // ============================================================
        const variantIndicators = [
            'tipe', 'type', 'ukuran', 'model', 'varian', 'warna', 'bentuk', 'seri', 'versi',
            'spesifikasi', 'detail', 'rinci', 'bahan', 'material', 'komposisi', 'kualitas',
            'mutu', 'grade', 'kelas', 'standar', 'kode', 'kapasitas', 'tonase', 'daya'
        ];
        
        for (const word of variantIndicators) {
            if (lowerName.includes(' ' + word + ' ') || lowerName.endsWith(' ' + word)) {
                return 'VARIANT';
            }
        }
        
        // Deteksi angka (ukuran dimensi, tebal, kapasitas, dll)
        if (/\d+(\.\d+)?\s*(mm|cm|m|inch|meter|kg|gram|ton|liter|cc|pk|hp)/.test(lowerName)) {
            return 'VARIANT';
        }
        
        // ============================================================
        // PRIORITAS 10: SUB-VARIANT (sangat detail, level terbawah)
        // ============================================================
        if (lowerName.includes('tebal') || 
            lowerName.includes('ketebalan') ||
            lowerName.includes('lebar') ||
            lowerName.includes('panjang') ||
            lowerName.includes('tinggi') ||
            /\d+(\.\d+)?\s*mm\s*x\s*\d+(\.\d+)?\s*mm/.test(lowerName)) {
            return 'SUB_VARIANT';
        }
        
        // ============================================================
        // PRIORITAS 11: SUB2 (jenis/macam/tipe - konten informasional)
        // ============================================================
        if (lowerName.startsWith('jenis ') || 
            lowerName.startsWith('macam ') || 
            lowerName.startsWith('tipe ')) {
            return 'SUB2';
        }
        
        // ============================================================
        // DEFAULT: SUB2 untuk konten informasional biasa
        // ============================================================
        return 'SUB2';
    }
    
    // ============================================================
    // 4. FUNGSI BANTUAN
    // ============================================================
    function generateIdFromName(name) {
        return name.replace(/[^a-zA-Z0-9]/g, '') + 'Post';
    }
    
    function slugify(text) {
        return text.toLowerCase()
            .replace(/[^\w\s-]/g, '')
            .replace(/\s+/g, '-')
            .replace(/--+/g, '-')
            .trim();
    }
    
    // ============================================================
    // 5. BANGUN LEVELS DARI breadcrumbItems (SUPPORT OBJECT & STRING)
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
    // 7. TENTUKAN LEVEL YANG AKAN DITAMPILKAN (MAX 4 LEVEL)
    // ============================================================
    const selectedLevels = [];
    
    // Level 1: Home (WAJIB)
    selectedLevels.push({ 
        name: 'BJR', 
        url: DOMAIN, 
        isHome: true,
        type: 'HOME'
    });
    
    // Hitung slot tersisa (MAX_LEVEL - 1 untuk home - 1 untuk halaman saat ini)
    let remainingSlots = MAX_LEVEL - 2;
    
    console.log(`📊 ========================================`);
    console.log(`📊 Breadcrumb Generator - SEO Tercanggih`);
    console.log(`📊 Entity Type: ${entityType}`);
    console.log(`📊 Max level: ${MAX_LEVEL}, slot untuk parent: ${remainingSlots}`);
    console.log(`📊 Input levels: ${allLevels.map(l => `${l.name}(${l.type})`).join(' → ')}`);
    console.log(`📊 ========================================`);
    
    // Parent terdekat (level terakhir sebelum current page) - WAJIB tampil
    let parentTerdekat = null;
    if (allLevels.length > 0) {
        parentTerdekat = allLevels[allLevels.length - 1];
        selectedLevels.push(parentTerdekat);
        remainingSlots--;
        console.log(`✅ WAJIB: "${parentTerdekat.name}" (${parentTerdekat.type}) - sisa slot: ${remainingSlots}`);
    }
    
    // Level lainnya (dari awal sampai sebelum parent terdekat)
    // Di-reverse agar yang terdekat dengan parent diprioritaskan
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
        
        // Tambahkan di posisi setelah Home (index 1)
        selectedLevels.splice(1, 0, level);
        remainingSlots--;
        console.log(`✅ TAMBAH: "${level.name}" (${level.type}) - sisa slot: ${remainingSlots}`);
    }
    
    // Halaman saat ini (WAJIB)
    const currentFullUrl = currentUrl.startsWith('http') ? currentUrl : DOMAIN + currentUrl;
    const currentPageType = detectPageType(pageTitle, allLevels.length, allLevels.length);
    
    selectedLevels.push({
        name: pageTitle,
        url: currentFullUrl,
        isCurrent: true,
        type: currentPageType
    });
    
    // Update position
    for (let i = 0; i < selectedLevels.length; i++) {
        selectedLevels[i].position = i + 1;
    }
    
    console.log(`✅ FINAL (${selectedLevels.length} level): ${selectedLevels.map(l => l.name).join(' → ')}`);
    console.log(`📊 Current page type: ${currentPageType}`);
    console.log(`📊 Entity Type: ${entityType}`);
    
    // ============================================================
    // 8. GENERATE HTML BREADCRUMB
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
    
    // ============================================================
    // 9. GENERATE JSON-LD SCHEMA
    // ============================================================
    const jsonLdItems = [];
    for (let i = 0; i < selectedLevels.length; i++) {
        const level = selectedLevels[i];
        jsonLdItems.push({
            "@type": "ListItem",
            "position": i + 1,
            "name": level.name,
            "item": level.url
        });
    }
    
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": jsonLdItems
    };
    
    // ============================================================
    // 10. HAPUS BREADCRUMB LAMA & INJECT YANG BARU
    // ============================================================
    
    // Hapus semua breadcrumb lama (manual)
    const oldBreadcrumbs = document.querySelectorAll('.breadcrumbs, .breadcrumb-nav, [aria-label="Breadcrumb"]');
    oldBreadcrumbs.forEach(el => el.remove());
    
    // Hapus JSON-LD breadcrumb lama
    const oldJsonLd = document.querySelector('script[data-breadcrumb="true"]');
    if (oldJsonLd) oldJsonLd.remove();
    
    // Inject HTML breadcrumb baru
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
    
    // Inject JSON-LD baru
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-breadcrumb', 'true');
    script.textContent = JSON.stringify(jsonLd);
    document.head.appendChild(script);
    
    console.log(`✅ Breadcrumb injected to DOM for entity: ${entityType}`);
    console.log(`📊 ========================================`);
    console.log(`✅ Breadcrumb generated and injected successfully!`);
    console.log(`📊 Entity Type: ${entityType} | Page Type: ${currentPageType}`);
    console.log(`📊 ========================================`);
    
    // ============================================================
    // 11. RETURN OUTPUT (LENGKAP)
    // ============================================================
    return {
        html: breadcrumbHtml,
        jsonLd: jsonLd,
        selectedLevels: selectedLevels,
        currentPageType: currentPageType,
        entityType: entityType,
        isValidType: true
    };
}

// ============================================================
// CONTOH PANGGILAN DENGAN URL MANUAL PER LEVEL
// ============================================================

/*
// MATERIAL KONSTRUKSI - READY MIX LOKASI
const result = generateBreadcrumbForMapping(
    urlMappingReadyMixLokasiPost,
    cleanUrl,
    [
        { name: 'Material Konstruksi', url: 'https://www.betonjayareadymix.com/p/material-konstruksi.html' },
        { name: 'Material Struktur Bangunan', url: 'https://www.betonjayareadymix.com/p/material-struktur-bangunan.html' },
        { name: 'Ready Mix Beton Cor Jayamix Minimix', url: 'https://www.betonjayareadymix.com/p/ready-mix-beton-cor-jayamix-minimix.html' },
        { name: 'Ready Mix Lokasi', url: 'https://www.betonjayareadymix.com/p/ready-mix-lokasi.html' }
    ],
    'MATERIAL_KONSTRUKSI'
);

// PRODUK INTERIOR - KITCHEN SET
const result2 = generateBreadcrumbForMapping(
    urlMappingKitchenSetPost,
    currentUrl,
    [
        { name: 'Produk Interior', url: 'https://www.betonjayareadymix.com/p/produk-interior.html' },
        { name: 'Jenis Kitchen Set', url: 'https://www.betonjayareadymix.com/p/jenis-kitchen-set.html' }
    ],
    'PRODUK_INTERIOR'
);

// JASA KONSTRUKSI - KONSULTASI
const result3 = generateBreadcrumbForMapping(
    urlMappingJasaPost,
    currentUrl,
    [
        { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
        { name: 'Jasa Borongan', url: 'https://www.betonjayareadymix.com/p/jasa-borongan.html' }
    ],
    'JASA_KONSTRUKSI'
);

// SEWA ALAT BERAT - EXCAVATOR
const result4 = generateBreadcrumbForMapping(
    urlMappingSewaPost,
    currentUrl,
    [
        { name: 'Sewa Alat Berat', url: 'https://www.betonjayareadymix.com/p/sewa-alat-berat.html' },
        { name: 'Jenis Excavator', url: 'https://www.betonjayareadymix.com/p/jenis-excavator.html' }
    ],
    'SEWA_RENTAL'
);
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
		urlMappingPerbaikanInfrastrukturBridgeFromSub2Sub1,
		urlMappingSewaAlatFromPillarSub2,
		urlMappingSewaAlatProyekFromSub2Sub1,
		urlMappingSewaAlatProyekFromSub1MoneyMaster,
		//urlMappingSewaAlatBeratFromSub2MoneyPage,
		urlMappingSewaAlatBeratFromSub2Sub1,
		urlMappingSewaAlatBeratFromSub1MoneyMaster,
		urlMappingSewaAlatRinganFromSub2Sub1,
		urlMappingSewaAlatRinganFromSub1MoneyMaster,
		
		urlMappingSewaAlatKonstruksiRinganFromSub2MoneyPage,
        urlMappingPerbaikanInfrastrukturFromSub2MoneyPage,
		urlMappingPerawatanPerbaikanBangunanFromPillarSub2,
		urlMappingRenovasiFromPillarSub2,
		urlMappingFinishingFromPillarSub2,
		urlMappingStrukturFromPillarSub2,
		urlMappingPondasiFromPillarSub2,
		urlMappingSaluranFromSub2MoneyPage,
		urlMappingJalanFromSub2MoneyPage,
		urlMappingPematanganLahanFromSub2MoneyPage,
		urlMappingUjiTanahFromSub2MoneyPage,
		urlMappingPerkuatanTanahLongsorFromSub2MoneyPage,
		urlMappingBongkarBangunanFromPillarSub2,
		urlMappingPengeboranFromSub2MoneyPage,
		urlMappingPembatasFromSub2MoneyPage,
		urlMappingJasaInstalasiListrikFromSub2MoneyPage
    );

    // --- validasi URL terdaftar ---
    if (!urlMappingGabungan[cleanUrlJasaKons]) {
      console.log(`[HybridDateModified] URL tidak terdaftar: ${cleanUrlJasaKons}`);
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
        // JASA KONSTRUKSI : Sub-Pillar Tipe 2, Sub-Pillar Tipe 1, Variant, Sub-Variant 
        return "2026-04-02T00:00:00+07:00";
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
    }
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
	generateBreadcrumbForMapping(
        urlMappingStrukturBridgeFromSub2Sub1,
        cleanUrlJasaKons,
       [
            { name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Jasa Struktur Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-struktur-konstruksi.html' }
        ],
        'JASA'
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

	   generateBreadcrumbForMapping(
        urlMappingSewaAlatProyekFromSub2Sub1,
        cleanUrlJasaKons,
       [
            { name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Sewa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/sewa-alat-konstruksi.html' },
            { name: 'Sewa Alat Proyek', url: 'https://www.betonjayareadymix.com/p/sewa-alat-proyek.html' }
        ],
        'SEWA_RENTAL'
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

	   generateBreadcrumbForMapping(
        urlMappingSewaAlatProyekFromSub1MoneyMaster,
        cleanUrlJasaKons,
       [
            { name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Sewa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/sewa-alat-konstruksi.html' },
            { name: 'Sewa Alat Proyek', url: 'https://www.betonjayareadymix.com/p/sewa-alat-proyek.html' },
            { name: 'Perbandingan Sewa Alat Proyek', url: 'https://www.betonjayareadymix.com/p/perbandingan-sewa-alat-proyek.html' }
        ],
        'SEWA_RENTAL'
    );
 }
	
if (urlMappingSewaAlatBeratFromSub2MoneyPage[cleanUrlJasaKons]) {
    //RESTORE CONTAINER NYA
	restoreCondition('JasaKonsSub');
	//restoreCondition('JasaKonstruksi');
	restoreCondition('SewaAlatKonstruksi');
	restoreCondition('SewaAlatBerat');
	  
	//hapus pillar PILLAR LAIN
           // hapus elemen id DIV Lain
	removeCondition('ProdukInFur');
        removeCondition('MaterialKons');
	removeCondition('ProdukKons');
        //removeCondition('ProdukKonsSaluran');
        //removeCondition('ProdukKonsPembatas');
	  //hapus pillar jasa konstruksi
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

	// hapus elemen id DIV Lain selain SewaAlatKonstruksi dan JasaAlatKonstruksi dan SewaAlatBerat
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
        //JasaAlatKonstruksiLink.style.visibility = 'visible';
        SewaAlatKonstruksiLink.style.visibility = 'visible';
        SewaAlatBeratLink.style.visibility = 'visible';
        pageNameKonstruksiSub.textContent = urlMappingSewaAlatBeratFromSub2MoneyPage[cleanUrlJasaKons];
    }
 // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingSewaAlatBeratFromSub2MoneyPage[cleanUrlJasaKons]) {
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
                   "name": "Sewa Alat Konstruksi",
                   "item": "https://www.betonjayareadymix.com/p/sewa-alat-berat.html"
               },
               {
                   "@type": "ListItem",
                   "position": 4,
                   "name": urlMappingSewaAlatBeratFromSub2MoneyPage[cleanUrlJasaKons],
                   "item": cleanUrlJasaKons
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
	
 if (urlMappingSewaAlatKonstruksiRinganFromSub2MoneyPage[cleanUrlJasaKons]) {
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
        pageNameKonstruksiSub.textContent = urlMappingSewaAlatKonstruksiRinganFromSub2MoneyPage[cleanUrlJasaKons];
    }
 // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingSewaAlatKonstruksiRinganFromSub2MoneyPage[cleanUrlJasaKons]) {
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
                   "name": urlMappingSewaAlatKonstruksiRinganFromSub2MoneyPage[cleanUrlJasaKons],
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
	
    if (urlMappingRenovasiFromPillarSub2[cleanUrlJasaKons]) {
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
	    
        pageNameKonstruksiSub.textContent = urlMappingRenovasiFromPillarSub2[cleanUrlJasaKons];
    }
 // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingRenovasiFromPillarSub2[cleanUrlJasaKons]) {
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
                   "name": "Jasa Renovasi",
                   "item": "https://www.betonjayareadymix.com/p/jasa-renovasi.html"
               },
	       {
                   "@type": "ListItem",
                   "position": 4,
                   "name": urlMappingRenovasiFromPillarSub2[cleanUrlJasaKons],
                   "item": cleanUrlJasaKons
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
	
if (urlMappingStrukturFromPillarSub2[cleanUrlJasaKons]) {
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
        pageNameKonstruksiSub.textContent = urlMappingStrukturFromPillarSub2[cleanUrlJasaKons];
    }
   // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingStrukturFromPillarSub2[cleanUrlJasaKons]) {
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
                   "name": "Jasa Struktur Konstruksi",
                   "item": "https://www.betonjayareadymix.com/p/jasa-struktur-konstruksi.html"
               },
	       {
                   "@type": "ListItem",
                   "position": 4,
                   "name": urlMappingStrukturFromPillarSub2[cleanUrlJasaKons],
                   "item": cleanUrlJasaKons
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
	
if (urlMappingFinishingFromPillarSub2[cleanUrlJasaKons]) {
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
        pageNameKonstruksiSub.textContent = urlMappingFinishingFromPillarSub2[cleanUrlJasaKons];
    }
  // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingFinishingFromPillarSub2[cleanUrlJasaKons]) {
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
                   "name": "Jasa Finishing",
                   "item": "https://www.betonjayareadymix.com/p/jasa-finishing.html"
               },
	       {
                   "@type": "ListItem",
                   "position": 4,
                   "name": urlMappingFinishingFromPillarSub2[cleanUrlJasaKons],
                   "item": cleanUrlJasaKons
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
	
if (urlMappingPondasiFromPillarSub2[cleanUrlJasaKons]) {
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
        pageNameKonstruksiSub.textContent = urlMappingPondasiFromPillarSub2[cleanUrlJasaKons];
    }
  // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingPondasiFromPillarSub2[cleanUrlJasaKons]) {
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
                   "name": "Jasa Pondasi & Perkuatan Tanah",
                   "item": "https://www.betonjayareadymix.com/p/jasa-pondasi-perkuatan-tanah.html"
               },
	       {
                   "@type": "ListItem",
                   "position": 4,
                   "name": urlMappingPondasiFromPillarSub2[cleanUrlJasaKons],
                   "item": cleanUrlJasaKons
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
	
if (urlMappingSaluranFromSub2MoneyPage[cleanUrlJasaKons]) {
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
        pageNameKonstruksiSub.textContent = urlMappingSaluranFromSub2MoneyPage[cleanUrlJasaKons];
    }
  
  // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingSaluranFromSub2MoneyPage[cleanUrlJasaKons]) {
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
                   "name": "Jasa Saluran & Drainase",
                   "item": "https://www.betonjayareadymix.com/p/jasa-saluran-drainase.html"
               },
	       {
                   "@type": "ListItem",
                   "position": 4,
                   "name": urlMappingSaluranFromSub2MoneyPage[cleanUrlJasaKons],
                   "item": cleanUrlJasaKons
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
	
if (urlMappingJalanFromSub2MoneyPage[cleanUrlJasaKons]) {
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
        pageNameKonstruksiSub.textContent = urlMappingJalanFromSub2MoneyPage[cleanUrlJasaKons];
    }
  // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJalanFromSub2MoneyPage[cleanUrlJasaKons]) {
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
                   "name": "Jasa Jalan & Perkerasan",
                   "item": "https://www.betonjayareadymix.com/p/jasa-jalan-perkerasan.html"
               },
	       {
                   "@type": "ListItem",
                   "position": 4,
                   "name": urlMappingJalanFromSub2MoneyPage[cleanUrlJasaKons],
                   "item": cleanUrlJasaKons
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
	
if (urlMappingPembatasFromSub2MoneyPage[cleanUrlJasaKons]) {
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
        pageNameKonstruksiSub.textContent = urlMappingPembatasFromSub2MoneyPage[cleanUrlJasaKons];
    }
  // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingPembatasFromSub2MoneyPage[cleanUrlJasaKons]) {
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
                   "name": "Jasa Pembatas & Pengaman",
                   "item": "https://www.betonjayareadymix.com/p/jasa-pembatas-pengaman.html"
               },
	       {
                   "@type": "ListItem",
                   "position": 4,
                   "name": urlMappingPembatasFromSub2MoneyPage[cleanUrlJasaKons],
                   "item": cleanUrlJasaKons
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
	
  if (urlMappingPematanganLahanFromSub2MoneyPage[cleanUrlJasaKons]) {
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
        pageNameKonstruksiSub.textContent = urlMappingPematanganLahanFromSub2MoneyPage[cleanUrlJasaKons];
    }

  // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingPematanganLahanFromSub2MoneyPage[cleanUrlJasaKons]) {
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
                   "name": "Jasa Pematangan Lahan",
                   "item": "https://www.betonjayareadymix.com/p/jasa-pematangan-lahan.html"
               },
	       {
                   "@type": "ListItem",
                   "position": 4,
                   "name": urlMappingPematanganLahanFromSub2MoneyPage[cleanUrlJasaKons],
                   "item": cleanUrlJasaKons
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
	
   if (urlMappingUjiTanahFromSub2MoneyPage[cleanUrlJasaKons]) {
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
        pageNameKonstruksiSub.textContent = urlMappingUjiTanahFromSub2MoneyPage[cleanUrlJasaKons];
    }
   
  // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingUjiTanahFromSub2MoneyPage[cleanUrlJasaKons]) {
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
                   "name": "Jasa Uji Tanah",
                   "item": "https://www.betonjayareadymix.com/p/jasa-uji-tanah.html"
               },
	       {
                   "@type": "ListItem",
                   "position": 4,
                   "name": urlMappingUjiTanahFromSub2MoneyPage[cleanUrlJasaKons],
                   "item": cleanUrlJasaKons
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }

if (urlMappingPerkuatanTanahLongsorFromSub2MoneyPage[cleanUrlJasaKons]) {
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
        pageNameKonstruksiSub.textContent = urlMappingPerkuatanTanahLongsorFromSub2MoneyPage[cleanUrlJasaKons];
    }
  
  // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingPerkuatanTanahLongsorFromSub2MoneyPage[cleanUrlJasaKons]) {
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
                   "name": "Jasa Perkuatan Tanah Longsor",
                   "item": "https://www.betonjayareadymix.com/p/jasa-perkuatan-tanah-longsor.html"
               },
	       {
                   "@type": "ListItem",
                   "position": 4,
                   "name": urlMappingPerkuatanTanahLongsorFromSub2MoneyPage[cleanUrlJasaKons],
                   "item": cleanUrlJasaKons
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
	
if (urlMappingBongkarBangunanFromPillarSub2[cleanUrlJasaKons]) {
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
        pageNameKonstruksiSub.textContent = urlMappingBongkarBangunanFromPillarSub2[cleanUrlJasaKons];
    }
 
  // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingBongkarBangunanFromPillarSub2[cleanUrlJasaKons]) {
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
	       {
                   "@type": "ListItem",
                   "position": 4,
                   "name": urlMappingBongkarBangunanFromPillarSub2[cleanUrlJasaKons],
                   "item": cleanUrlJasaKons
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }

  if (urlMappingPerawatanPerbaikanBangunanFromPillarSub2[cleanUrlJasaKons]) {
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
        pageNameKonstruksiSub.textContent = urlMappingPerawatanPerbaikanBangunanFromPillarSub2[cleanUrlJasaKons];
    }
 
  // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingPerawatanPerbaikanBangunanFromPillarSub2[cleanUrlJasaKons]) {
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
                   "name": urlMappingPerawatanPerbaikanBangunanFromPillarSub2[cleanUrlJasaKons],
                   "item": cleanUrlJasaKons
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }

if (urlMappingPerbaikanInfrastrukturFromSub2MoneyPage[cleanUrlJasaKons]) {
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
        pageNameKonstruksiSub.textContent = urlMappingPerbaikanInfrastrukturFromSub2MoneyPage[cleanUrlJasaKons];
    }
 
  // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingPerbaikanInfrastrukturFromSub2MoneyPage[cleanUrlJasaKons]) {
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
                   "name": "Jasa Perbaikan Infrastruktur",
                   "item": "https://www.betonjayareadymix.com/p/jasa-perbaikan-infrastruktur.html"
               },
	       {
                   "@type": "ListItem",
                   "position": 4,
                   "name": urlMappingPerbaikanInfrastrukturFromSub2MoneyPage[cleanUrlJasaKons],
                   "item": cleanUrlJasaKons
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
	
if (urlMappingPengeboranFromSub2MoneyPage[cleanUrlJasaKons]) {
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
        pageNameKonstruksiSub.textContent = urlMappingPengeboranFromSub2MoneyPage[cleanUrlJasaKons];
    }
   // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingPengeboranFromSub2MoneyPage[cleanUrlJasaKons]) {
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
                   "name": urlMappingPengeboranFromSub2MoneyPage[cleanUrlJasaKons],
                   "item": cleanUrlJasaKons
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
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
if (urlMappingJasaInstalasiListrikFromSub2MoneyPage[cleanUrlJasaKons]) {
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
        pageNameKonstruksiSub.textContent = urlMappingJasaInstalasiListrikFromSub2MoneyPage[cleanUrlJasaKons];
    }

  // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaInstalasiListrikFromSub2MoneyPage[cleanUrlJasaKons]) {
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
                   "name": "Jasa Instalasi Listrik",
                   "item": "https://www.betonjayareadymix.com/p/jasa-instalasi-listrik.html"
               },
	       {
                   "@type": "ListItem",
                   "position": 4,
                   "name": urlMappingJasaInstalasiListrikFromSub2MoneyPage[cleanUrlJasaKons],
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
