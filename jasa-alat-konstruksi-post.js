// 🔍 ENTITY TYPE: Jasa Alat Konstruksi MoneyChild
const urlMappingJasaAlatKonstruksiBridgeFromSub2Sub1MoneyPageMoneyChild = {
  "https://www.betonjayareadymix.com/2019/06/estimasi-biaya-jasa-alat-konstruksi-surabaya.html": "Estimasi Biaya Jasa Alat Konstruksi Surabaya",
  "https://www.betonjayareadymix.com/2019/06/estimasi-biaya-jasa-alat-konstruksi-bandung.html": "Estimasi Biaya Jasa Alat Konstruksi Bandung",
  "https://www.betonjayareadymix.com/2019/06/estimasi-biaya-jasa-alat-konstruksi-karawang.html": "Estimasi Biaya Jasa Alat Konstruksi Karawang",
  "https://www.betonjayareadymix.com/2019/06/estimasi-biaya-jasa-alat-konstruksi-bekasi.html": "Estimasi Biaya Jasa Alat Konstruksi Bekasi",
  "https://www.betonjayareadymix.com/2019/06/estimasi-biaya-jasa-alat-konstruksi-tangerang.html": "Estimasi Biaya Jasa Alat Konstruksi Tangerang",
  "https://www.betonjayareadymix.com/2019/06/estimasi-biaya-jasa-alat-konstruksi-depok.html": "Estimasi Biaya Jasa Alat Konstruksi Depok",
  "https://www.betonjayareadymix.com/2019/06/estimasi-biaya-jasa-alat-konstruksi-bogor.html": "Estimasi Biaya Jasa Alat Konstruksi Bogor",
  "https://www.betonjayareadymix.com/2019/06/estimasi-biaya-jasa-alat-konstruksi-jakarta.html": "Estimasi Biaya Jasa Alat Konstruksi Jakarta"
};

const urlMappingJasaAlatKonstruksiBridgeFromSub2Sub1MoneyPageMoneyChildVariant = {
  "https://www.betonjayareadymix.com/2019/06/jasa-alat-konstruksi-operator-bersertifikat.html": "Jasa Alat Konstruksi Operator Bersertifikat",
  "https://www.betonjayareadymix.com/2019/06/jasa-alat-konstruksi-metode-lembur.html": "Jasa Alat Konstruksi Metode Lembur",
  "https://www.betonjayareadymix.com/2019/06/jasa-alat-konstruksi-termasuk-bahan-bakar.html": "Jasa Alat Konstruksi Termasuk Bahan Bakar"
};

const urlMappingJasaAlatKonstruksiBridgeFromSub2Sub1MoneyPageMoneyChildVariantSubVariant = {
  "https://www.betonjayareadymix.com/2019/06/jasa-alat-konstruksi-operator-sio-alat-berat-besar.html": "Jasa Alat Konstruksi Operator SIO Alat Berat Besar",
  "https://www.betonjayareadymix.com/2019/06/jasa-alat-konstruksi-lembur-shift-malam.html": "Jasa Alat Konstruksi Lembur Shift Malam",
  "https://www.betonjayareadymix.com/2019/06/jasa-alat-konstruksi-termasuk-bbm-proyek-panjang.html": "Jasa Alat Konstruksi Termasuk BBM Proyek Panjang"
};
// ============================================================
// 🔍 ENTITY TYPE: SEWA/RENTAL (Alat Konstruksi & Alat Berat)
// ATURAN: SEWA/RENTAL BOLEH menggunakan MONEY_MASTER untuk harga nasional
// ✅ Gunakan: MONEY_MASTER (Transaksional 80%) untuk harga umum
// ✅ Gunakan: MONEY_PAGE (Transaksional 85%) untuk produk spesifik
// ✅ Gunakan: MONEY_CHILD (Transaksional 90%) untuk spesifik lokasi
// ============================================================

// ============================================================
// 📁 LEVEL 1 - PILLAR (SEWA ALAT KONSTRUKSI)
// ============================================================
/*
const urlMappingSewaAlatKonstruksiPillar = {
  // [PILLAR] - Sewa Alat Konstruksi
  "https://www.betonjayareadymix.com/p/sewa-alat-konstruksi.html": "Sewa Alat Konstruksi"  // TYPE: PILLAR
};

// ============================================================
// 📁 LEVEL 2 - SUB2 (Turunan dari PILLAR Sewa Alat Konstruksi)
// ============================================================

const urlMappingSewaAlatKonstruksiFromPillarSub2 = {
  // [SUB2] - Sewa Alat Proyek
  "https://www.betonjayareadymix.com/p/sewa-alat-proyek.html": "Sewa Alat Proyek",  // TYPE: SUB2
  
  // [SUB2] - Sewa Alat Berat
  "https://www.betonjayareadymix.com/p/sewa-alat-berat.html": "Sewa Alat Berat",  // TYPE: SUB2
  
  // [SUB2] - Sewa Alat Konstruksi Ringan
  "https://www.betonjayareadymix.com/p/sewa-alat-konstruksi-ringan.html": "Sewa Alat Konstruksi Ringan"  // TYPE: SUB2
};
*/
//MONEY MASTER1 TURUNAN PARENT TERDEKAT TETAP MONEY MASTER TETAPI MONEY PAGE TURUNAN PARENT TERDEKAT TETAP MONEY MASTER BUKAN KE  MONEY PAGE LAIN
const urlMappingSewaPompaDewateringFromMoneyMaster1MoneyPage = {
 "https://www.betonjayareadymix.com/2019/02/sewa-pompa-dewatering-proyek.html": "Sewa Pompa Dewatering Proyek",
  "https://www.betonjayareadymix.com/2019/03/sewa-pompa-dewatering-basement.html": "Sewa Pompa Dewatering Basement", //belum dibuat
  "https://www.betonjayareadymix.com/2019/03/sewa-pompa-dewatering-tambang.html": "Sewa Pompa Dewatering Tambang" //belum dibuat
};
const urlMappingSewaPompaAirFromMoneyMaster1MoneyPage = {
    "https://www.betonjayareadymix.com/2019/03/sewa-mesin-pompa-air.html": "Sewa Mesin Pompa Air",
    "https://www.betonjayareadymix.com/2019/03/sewa-pompa-air-diesel.html": "Sewa Pompa Air Diesel",
    "https://www.betonjayareadymix.com/2019/03/sewa-pompa-air-kapasitas-besar.html": "Sewa Pompa Air Kapasitas Besar",
    "https://www.betonjayareadymix.com/2019/03/sewa-pompa-air-banjir.html": "Sewa Pompa Air Banjir",
  "https://www.betonjayareadymix.com/2019/03/sewa-pompa-air-irigasi.html": "Sewa Pompa Air Irigasi" //belum dibuat
};
const urlMappingSewaPompaLumpurFromMoneyMaster1MoneyPage = {
	  /* CIRI MM TURUNAN
  Walau tanpa harga, tetap MM bila:
entity alat berbeda
market berbeda
bisa berdiri sendiri
punya turunan sendiri
*/
    "https://www.betonjayareadymix.com/2019/03/sewa-pompa-lumpur-diesel.html": "Sewa Pompa Lumpur Diesel",
    "https://www.betonjayareadymix.com/2019/03/sewa-pompa-sedot-lumpur.html": "Sewa Pompa Sedot Lumpur",
   // "https://www.betonjayareadymix.com/2019/03/sewa-pompa-sedot-lumpur.html": "Sewa Pompa Sedot Lumpur",

  "https://www.betonjayareadymix.com/2019/03/sewa-pompa-lumpur-proyek.html": "Sewa Pompa Lumpur Proyek", //belum dibuat
    "https://www.betonjayareadymix.com/2019/03/sewa-pompa-lumpur-tambang.html": "Sewa Pompa Lumpur Tambang"  //belum dibuat
};
// ============================================================
// 📁 SUB Jasa Alat Konstruksi - SEWA BEKISTING & SCAFFOLDING
// 🧠 ENTITY: SEWA/RENTAL → TYPE: MONEY_PAGE & MONEY_MASTER
// ============================================================

const urlMappingSewaBekistingFromMoneyMasterMoneyPage = {
  /*bukan MM TURUNANAN KARNA GA ADA CIRI MM TURUNAN
  Walau tanpa harga, tetap MM bila:
entity alat berbeda
market berbeda
bisa berdiri sendiri
punya turunan sendiri
*/
/*CIRI MP:
MP → biasanya mulai mengandung:
harga
biaya
tarif
per jam
per hari
per m2
modifier detail/specifik
*/
	
  // ============================================================
  // [MONEY_MASTER] - HARGA SEWA SCAFFOLDING (NASIONAL)
  // 🧠 TYPE: MONEY_MASTER (khusus SEWA, diperbolehkan)
  // ============================================================
   // MONEY PAGE
	
  "https://www.betonjayareadymix.com/2019/02/sewa-bekisting-scaffolding.html": "Sewa Bekisting Scaffolding",
  "https://www.betonjayareadymix.com/2019/03/sewa-bekisting-cor-jalan.html": "Sewa Bekisting Cor Jalan",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2019/03/sewa-bekisting-kolom-balok.html": "Sewa Bekisting Kolom Balok",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2019/03/sewa-bekisting-kolom.html": "Sewa Bekisting Kolom",  //belum dibuat
  "https://www.betonjayareadymix.com/2019/03/sewa-bekisting-balok.html": "Sewa Bekisting Balok",  //belum dibuat
  "https://www.betonjayareadymix.com/2019/03/sewa-bekisting-plat-lantai.html": "Sewa Bekisting Plat Lantai",  //belum dibuat
  "https://www.betonjayareadymix.com/2019/03/harga-jasa-sewa-bekisting.html": "Harga Jasa Sewa Bekisting",  
  "https://www.betonjayareadymix.com/2019/03/harga-sewa-bekisting.html": "Harga Sewa Bekisting", 
"https://www.betonjayareadymix.com/2019/03/sewa-bekisting-per-meter.html": "Sewa Bekisting Per Meter"  
  
};
const urlMappingSewaBekistingFromMoneyMasterMoneyChild = {
  // ============================================================
  // [MONEY_CHILD] - SEWA SCAFFOLDING PER LOKASI
  // ============================================================

  // ============================================================
  // 🟡 SARAN ITEM TAMBAHAN (BELUM AKTIF - PERLU DIBUAT KONTEN)
  // ============================================================
  // "https://www.betonjayareadymix.com/2019/03/sewa-bekisting-jakarta.html": "Sewa Bekisting Jakarta",  // TYPE: MONEY_CHILD
 
  
  // "https://www.betonjayareadymix.com/2019/03/sewa-scaffolding-per-meter.html": "Sewa Scaffolding Per Meter",  // TYPE: MONEY_CHILD
};
const urlMappingSewaScaffoldingFromMoneyMasterMoneyPage = {
  
  // ============================================================
  // [MONEY_MASTER] - HARGA SEWA SCAFFOLDING (NASIONAL)
  // 🧠 TYPE: MONEY_MASTER (khusus SEWA, diperbolehkan)
  // ============================================================
  "https://www.betonjayareadymix.com/2019/03/harga-jasa-sewa-scaffolding.html": "Harga Jasa Sewa Scaffolding",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/2019/03/harga-sewa-scaffolding.html": "Harga Sewa Scaffolding"  // TYPE: MONEY_MASTER
	
  
};
const urlMappingSewaScaffoldingFromMoneyMasterMoneyChild = {
    "https://www.betonjayareadymix.com/2019/03/sewa-scaffolding-terdekat.html": "Sewa Scaffolding Terdekat",  // TYPE: MONEY_CHILD
	// "https://www.betonjayareadymix.com/2019/03/sewa-scaffolding-jakarta.html": "Sewa Scaffolding Jakarta",  // TYPE: MONEY_CHILD
};

const urlMappingSewaPencahayaanProyekFromMoneyMasterMoneyMaster1 = {
// MONEY PAGE
  "https://www.betonjayareadymix.com/2019/02/sewa-pencahayaan-utilitas.html": "Sewa Pencahayaan Utilitas",
"https://www.betonjayareadymix.com/2019/03/sewa-tower-lamp.html": "Sewa Tower Lamp",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2019/03/sewa-lampu-proyek.html": "Sewa Lampu Proyek",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2019/03/sewa-lampu-sorot.html": "Sewa Lampu Sorot",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2019/03/sewa-lampu-tembak.html": "Sewa Lampu Tembak",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2019/03/sewa-panel-listrik.html": "Sewa Panel Listrik",  // TYPE: MONEY_PAGE
    "https://www.betonjayareadymix.com/2019/03/sewa-lampu-penerangan-jalan.html": "Sewa Lampu Penerangan Jalan" //belum dibuat 
};
const urlMappingSewaAlatSurveyFromMoneyMasterMoneyMaster1 = {
  "https://www.betonjayareadymix.com/2019/02/sewa-alat-survey-pengukuran.html": "Sewa Alat Survey Pengukuran",
  "https://www.betonjayareadymix.com/2019/03/sewa-total-station.html": "Sewa Total Station", 
  "https://www.betonjayareadymix.com/2019/03/sewa-waterpass.html": "Sewa Waterpass",  
  "https://www.betonjayareadymix.com/2019/03/sewa-theodolite.html": "Sewa Theodolite",
	
  "https://www.betonjayareadymix.com/2019/03/sewa-laser-level.html": "Sewa Laser Level"  // TYPE: MONEY_PAGE
};
const urlMappingSewaAlatBorFromMoneyMasterMoneyMaster1 = {
  // MONEY PAGE
  "https://www.betonjayareadymix.com/2019/02/sewa-alat-bor-ground-work.html": "Sewa Alat Bor Ground Work",
  "https://www.betonjayareadymix.com/2019/03/sewa-alat-bor-tanah.html": "Sewa Alat Bor Tanah",  // TYPE: MONEY_PAGE
    "https://www.betonjayareadymix.com/2019/03/sewa-alat-bor-sumur.html": "Sewa Alat Bor Sumur", // TYPE: MONEY_PAGE 
  "https://www.betonjayareadymix.com/2019/03/sewa-alst-bor-beton.html": "Sewa Alat Bor Beton",  //belum dibuat 
  "https://www.betonjayareadymix.com/2019/03/sewa-alst-bor-pancang.html": "Sewa Alat Bor Pancang"  //belum dibuat 

};
const urlMappingSewaTangkiAirFromMoneyMasterMoneyMaster1 = {
  // MONEY PAGE
  "https://www.betonjayareadymix.com/2019/03/sewa-bak-air-proyek.html": "Sewa Bak Air Proyek",
  "https://www.betonjayareadymix.com/2019/03/sewa-tandon-air.html": "Sewa Tandon Air",   
  "https://www.betonjayareadymix.com/2019/03/sewa-tangki-air-proyek.html": "Sewa Tangki Air Proyek", //belum dibuat 
  "https://www.betonjayareadymix.com/2019/03/sewa-tangki-air-industri.html": "Sewa Tangki Air Industri" //belum dibuat

};
const urlMappingSewaAksesKeamananProyekFromMoneyMasterMoneyMaster1 = {
  "https://www.betonjayareadymix.com/2019/03/sewa-tangga-proyek.html": "Sewa Tangga Proyek",  // TYPE: MONEY_MASTER TURUNAN
  "https://www.betonjayareadymix.com/2019/03/sewa-mobile-scaffold.html": "Sewa Mobile Scaffold",  // TYPE: MONEY_MASTER TURUNAN
  "https://www.betonjayareadymix.com/2019/03/sewa-safety-barrier.html": "Sewa Safety Barrier",  // TYPE: MONEY_MASTER TURUNAN 
  "https://www.betonjayareadymix.com/2019/03/sewa-traffic-cone.html": "Sewa Traffic Cone",  // TYPE: MONEY_MASTER TURUNAN
  "https://www.betonjayareadymix.com/2019/03/sewa-jaring-pengaman.html": "Sewa Jaring Pengaman",  // TYPE: MONEY_MASTER TURUNAN
  "https://www.betonjayareadymix.com/2019/03/sewa-barrier-proyek.html": "Sewa Barrier Proyek",  //belum dibuat
  "https://www.betonjayareadymix.com/2019/03/sewa-pagar-proyek.html": "Sewa Pagar Proyek",  //belum dibuat
  "https://www.betonjayareadymix.com/2019/03/sewa-gerbang-proyek.html":  "Sewa Gerbang Proyek",  //belum dibuat
  "https://www.betonjayareadymix.com/2019/03/sewa-pos-keamanan-proyek.html": "Sewa Pos Keamanan Proyek"  //belum dibuat
};
const urlMappingSewaSelangProyekFromMoneyMasterMoneyMaster1 = {
 // MONEY PAGE
  "https://www.betonjayareadymix.com/2019/03/sewa-selang-air.html": "Sewa Selang Air",  //belum dibuat
  "https://www.betonjayareadymix.com/2019/03/sewa-selang-pompa.html": "Sewa Selang Pompa",  //belum dibuat
  "https://www.betonjayareadymix.com/2019/03/sewa-selang-lumpur.html": "Sewa Selang Lumpur",  //belum dibuat
  "https://www.betonjayareadymix.com/2019/03/sewa-selang-industrial.html": "Sewa Selang Industrial"  //belum dibuat
};
const urlMappingSewaPipaProyekFromMoneyMasterMoneyMaster1 = {
// MONEY PAGE
  "https://www.betonjayareadymix.com/2019/03/sewa-pipa-air.html": "Sewa Pipa Air",  //belum dibuat
  "https://www.betonjayareadymix.com/2019/03/sewa-pipa-dewatering.html": "Sewa Pipa Dewatering",  //belum dibuat
  "https://www.betonjayareadymix.com/2019/03/sewa-pipa-hdpe.html": "Sewa Pipa HDPE",  //belum dibuat
  "https://www.betonjayareadymix.com/2019/03/sewa-pipa-industrial.html": "Sewa Pipa Industrial"  //belum dibuat
};

// ============================================================
// 📁 SUB Jasa Alat Konstruksi - SEWA ALAT PROYEK (MONEY PAGE & CHILD)
// 🧠 ENTITY: SEWA/RENTAL → TYPE: MONEY_PAGE & MONEY_CHILD
// Parent: Sewa Alat Proyek (SUB2)
// Breadcrumb: Home > Sewa Alat Konstruksi > Sewa Alat Proyek > [Nama Alat] (4 level)
// ============================================================
/*
const urlMappingSewaAlatPendukungFromMoneyMasterMoneyPage = {
 "https://www.betonjayareadymix.com/2019/02/sewa-pompa-dewatering-proyek.html": "Sewa Pompa Dewatering Proyek",
    "https://www.betonjayareadymix.com/2019/02/sewa-alat-survey-pengukuran.html": "Sewa Alat Survey Pengukuran",
    "https://www.betonjayareadymix.com/2019/02/sewa-akses-keamanan-proyek.html": "Sewa Akses Keamanan Proyek",
    "https://www.betonjayareadymix.com/2019/02/sewa-alat-bor-ground-work.html": "Sewa Alat Bor Ground Work",
    "https://www.betonjayareadymix.com/2019/02/sewa-mesin-pompa-air.html": "Sewa Mesin Pompa Air",
    "https://www.betonjayareadymix.com/2019/02/sewa-pompa-air-diesel.html": "Sewa Pompa Air Diesel",
    "https://www.betonjayareadymix.com/2019/02/sewa-pompa-air-kapasitas-besar.html": "Sewa Pompa Air Kapasitas Besar",
    "https://www.betonjayareadymix.com/2019/02/sewa-pompa-air-banjir.html": "Sewa Pompa Air Banjir",
    "https://www.betonjayareadymix.com/2019/02/sewa-pompa-lumpur-diesel.html": "Sewa Pompa Lumpur Diesel",
    "https://www.betonjayareadymix.com/2019/02/sewa-pompa-sedot-lumpur.html": "Sewa Pompa Sedot Lumpur",
    "https://www.betonjayareadymix.com/2019/02/sewa-bak-air-proyek.html": "Sewa Bak Air Proyek"

/*
 // ============================================================
  // [MONEY_PAGE] - SEWA ALAT PROYEK PER JENIS
  // 🧠 TYPE: MONEY_PAGE (WAJIB tampil, intent transaksional 85%)
  // ============================================================
  "https://www.betonjayareadymix.com/2019/02/sewa-pompa-dewatering-proyek.html": "Sewa Pompa Dewatering Proyek",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2019/02/sewa-bekisting-scaffolding.html": "Sewa Bekisting Scaffolding",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2019/02/sewa-pencahayaan-utilitas.html": "Sewa Pencahayaan Utilitas",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2019/02/sewa-alat-survey-pengukuran.html": "Sewa Alat Survey Pengukuran",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2019/02/sewa-akses-keamanan-proyek.html": "Sewa Akses Keamanan Proyek",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2019/02/sewa-alat-bor-ground-work.html": "Sewa Alat Bor Ground Work",  // TYPE: MONEY_PAGE

   // [MONEY_PAGE] - SEWA POMPA AIR (BERBAGAI JENIS)
  // 🧠 TYPE: MONEY_PAGE
  // ============================================================
  "https://www.betonjayareadymix.com/2019/03/sewa-mesin-pompa-air.html": "Sewa Mesin Pompa Air",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2019/03/sewa-pompa-air-diesel.html": "Sewa Pompa Air Diesel",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2019/03/sewa-pompa-air-kapasitas-besar.html": "Sewa Pompa Air Kapasitas Besar",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2019/03/sewa-pompa-air-banjir.html": "Sewa Pompa Air Banjir",  // TYPE: MONEY_PAGE

  // [MONEY_PAGE] - SEWA POMPA LUMPUR
  // ============================================================
  "https://www.betonjayareadymix.com/2019/03/sewa-pompa-lumpur.html": "Sewa Pompa Lumpur",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2019/03/sewa-pompa-lumpur-diesel.html": "Sewa Pompa Lumpur Diesel",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2019/03/sewa-pompa-sedot-lumpur.html": "Sewa Pompa Sedot Lumpur",  // TYPE: MONEY_PAGE
  
   // [MONEY_PAGE] - SEWA SISTEM PENDUKUNG PROYEK
  // ============================================================
  "https://www.betonjayareadymix.com/2019/03/sewa-bak-air-proyek.html": "Sewa Bak Air Proyek",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2019/03/sewa-tangki-air.html": "Sewa Tangki Air",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2019/03/sewa-selang-proyek.html": "Sewa Selang Proyek",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2019/03/sewa-pipa-proyek.html": "Sewa Pipa Proyek"  // TYPE: MONEY_PAGE
 
};
	*/
const urlMappingSewaAlatProyekFromMoneyMasterMoneyPage = {
 
 // hapus saja "https://www.betonjayareadymix.com/2019/02/sewa-sistem-pendukung-proyek.html": "Sewa Sistem Pendukung Proyek",  // TYPE: MONEY_PAGE

 // ============================================================
  // [MONEY_CHILD] - SEWA ALAT PROYEK PER LOKASI
  // 🧠 TYPE: MONEY_CHILD (spesifik lokasi, intent transaksional 90%)
  // ============================================================
  "https://www.betonjayareadymix.com/2019/02/harga-sewa-alat-proyek.html": "Harga Sewa Alat Proyek"  // TYPE: MONEY_PAGE PARENT

 
};
const urlMappingSewaAlatProyekFromMoneyMasterMoneyChild = {
 // ============================================================
  // [MONEY_CHILD] - SEWA ALAT PROYEK PER LOKASI
  // 🧠 TYPE: MONEY_CHILD (spesifik lokasi, intent transaksional 90%)
  // ============================================================
  //"https://www.betonjayareadymix.com/2019/02/sewa-alat-proyek.html": "Sewa Alat Proyek",  // TYPE: MONEY_PAGE PARENT
  "https://www.betonjayareadymix.com/2019/02/sewa-alat-proyek-tangerang.html": "Sewa Alat Proyek Tangerang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/02/sewa-alat-proyek-depok.html": "Sewa Alat Proyek Depok",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/02/sewa-alat-proyek-jakarta.html": "Sewa Alat Proyek Jakarta",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/02/sewa-alat-proyek-bekasi.html": "Sewa Alat Proyek Bekasi",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/02/sewa-alat-proyek-bogor.html": "Sewa Alat Proyek Bogor",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/02/sewa-alat-proyek-terdekat.html": "Sewa Alat Proyek Terdekat",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/02/sewa-alat-proyek-karawang.html": "Sewa Alat Proyek Karawang"  // TYPE: MONEY_CHILD
  
  // ============================================================
  // 🟡 SARAN ITEM TAMBAHAN (BELUM AKTIF - PERLU DIBUAT KONTEN)
  // ============================================================
  // "https://www.betonjayareadymix.com/2019/02/sewa-alat-proyek-bandung.html": "Sewa Alat Proyek Bandung",  // TYPE: MONEY_CHILD
  // "https://www.betonjayareadymix.com/2019/02/sewa-alat-proyek-surabaya.html": "Sewa Alat Proyek Surabaya",  // TYPE: MONEY_CHILD
  // "https://www.betonjayareadymix.com/2019/02/sewa-alat-proyek-semarang.html": "Sewa Alat Proyek Semarang",  // TYPE: MONEY_CHILD
  // "https://www.betonjayareadymix.com/2019/02/sewa-alat-proyek-medan.html": "Sewa Alat Proyek Medan",  // TYPE: MONEY_CHILD
  // "https://www.betonjayareadymix.com/2019/02/sewa-alat-proyek-makassar.html": "Sewa Alat Proyek Makassar",  // TYPE: MONEY_CHILD
};

const urlMappingSewaPompaDewateringFromMoneyPageMoneyChild = {
"https://www.betonjayareadymix.com/2019/03/sewa-pompa-dewatering-jakarta.html": "Sewa Pompa Dewatering Jakarta"  // TYPE: MONEY_CHILD
};
const urlMappingSewaPompaDewateringFromMoneyChildVariant = {
"https://www.betonjayareadymix.com/2019/03/spesifikasi-pompa-dewatering-jakarta.html": "Spesifikasi Pompa Dewatering Jakarta",  // TYPE: VARIANT
"https://www.betonjayareadymix.com/2019/03/perbandingan-harga-pompa-dewatering-jakarta.html": "Perbandingan Harga Pompa Dewatering Jakarta"  // TYPE: VARIANT
};

const urlMappingSewaPompaAirDieselFromMoneyMaster1MoneyPage = {
// MONEY PAGE (MP)
// =========================================

"https://www.betonjayareadymix.com/2019/03/diskon-sewa-pompa-diesel.html":
  "Diskon Sewa Pompa Diesel",

"https://www.betonjayareadymix.com/2019/03/daftar-harga-pompa-diesel.html":
  "Daftar Harga Pompa Diesel",
};
const urlMappingSewaPompaAirDieselFromMoneyMaster1MoneyChild = {
"https://www.betonjayareadymix.com/2019/03/sewa-pompa-air-diesel-jakarta.html": "Sewa Pompa Air Diesel Jakarta", 
"https://www.betonjayareadymix.com/2019/03/sewa-pompa-air-diesel-bekasi.html": "Sewa Pompa Air Diesel Bekasi", 
"https://www.betonjayareadymix.com/2019/03/sewa-pompa-air-diesel-tangerang.html": "Sewa Pompa Air Diesel Tangerang"  // TYPE: MONEY_CHILD
};
const urlMappingSewaPompaAirDieselFromMoneyMaster1Variant = {
// VARIANT
// =========================================

"https://www.betonjayareadymix.com/2019/03/spesifikasi-pompa-air-diesel.html":
  "Spesifikasi Pompa Air Diesel"
};
// ============================================================
// 📁 SUB Jasa Alat Konstruksi - SEWA POMPA DEWATERING (MONEY PAGE & CHILD)
// 🧠 ENTITY: SEWA/RENTAL → TYPE: MONEY_PAGE & MONEY_CHILD
// Parent: Sewa Alat Proyek (SUB2)
// ============================================================

const urlMappingSewaPompaAirFromMoneyMasterMoneyChild = {
 // ============================================================
  // [MONEY_CHILD] - SEWA POMPA AIR PER LOKASI
  // ============================================================
  "https://www.betonjayareadymix.com/2019/03/sewa-pompa-air-terdekat.html": "Sewa Pompa Air Terdekat",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/03/sewa-pompa-air-bogor.html": "Sewa Pompa Air Bogor",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/03/sewa-pompa-air-jakarta.html": "Sewa Pompa Air Jakarta",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/03/sewa-pompa-air-depok.html": "Sewa Pompa Air Depok",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/03/sewa-pompa-air-tangerang.html": "Sewa Pompa Air Tangerang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/03/sewa-pompa-air-bekasi.html": "Sewa Pompa Air Bekasi",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/03/sewa-pompa-air-karawang.html": "Sewa Pompa Air Karawang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/03/sewa-pompa-air-bandung.html": "Sewa Pompa Air Bandung",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/03/sewa-pompa-air-surabaya.html": "Sewa Pompa Air Surabaya",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/03/sewa-pompa-air-semarang.html": "Sewa Pompa Air Semarang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/03/sewa-pompa-air-jogja.html": "Sewa Pompa Air Jogja",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/03/sewa-pompa-air-solo.html": "Sewa Pompa Air Solo",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/03/sewa-pompa-air-sidoarjo.html": "Sewa Pompa Air Sidoarjo",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/03/sewa-pompa-air-bali.html": "Sewa Pompa Air Bali",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/03/sewa-pompa-air-batam.html": "Sewa Pompa Air Batam",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/03/sewa-pompa-air-medan.html": "Sewa Pompa Air Medan" // TYPE: MONEY_CHILD

  // ============================================================
  // 🟡 SARAN ITEM TAMBAHAN (BELUM AKTIF - PERLU DIBUAT KONTEN)
  // ============================================================
  // "https://www.betonjayareadymix.com/2019/03/sewa-mesin-pompa-air-terdekat.html": "Sewa Mesin Pompa Air Terdekat",  // TYPE: MONEY_CHILD
  // "https://www.betonjayareadymix.com/2019/03/sewa-pompa-air-cirebon.html": "Sewa Pompa Air Cirebon",  // TYPE: MONEY_CHILD
  // "https://www.betonjayareadymix.com/2019/03/sewa-pompa-air-pekanbaru.html": "Sewa Pompa Air Pekanbaru",  // TYPE: MONEY_CHILD

};
const urlMappingSewaMesinPompaAirFromMoneyChildVariant = {
"https://www.betonjayareadymix.com/2019/03/spesifikasi-pompa-air.html": "Spesifikasi Pompa Air",  // TYPE: VARIANT
"https://www.betonjayareadymix.com/2019/03/daftar-harga-pompa-air.html": "Daftar Harga Pompa Air"
};

const urlMappingSewaPompaLumpurFromMoneyMasterMoneyChild = {
  // ============================================================
  // [MONEY_CHILD] - SEWA POMPA LUMPUR PER LOKASI
  // ============================================================
   "https://www.betonjayareadymix.com/2019/03/sewa-pompa-lumpur-jakarta.html": "Sewa Pompa Lumpur Jakarta",  // TYPE: MONEY_CHILD
   "https://www.betonjayareadymix.com/2019/03/sewa-pompa-lumpur-bogor.html": "Sewa Pompa Lumpur Bekasi",  // TYPE: MONEY_CHILD
   "https://www.betonjayareadymix.com/2019/03/sewa-pompa-lumpur-tangerang.html": "Sewa Pompa Lumpur Tangerang",  // TYPE: MONEY_CHILD
   "https://www.betonjayareadymix.com/2019/03/sewa-pompa-lumpur-bekasi.html": "Sewa Pompa Lumpur Bekasi",  // TYPE: MONEY_CHILD
   "https://www.betonjayareadymix.com/2019/03/sewa-pompa-lumpur-karawang.html": "Sewa Pompa Lumpur Karawang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/03/sewa-pompa-lumpur-depok.html": "Sewa Pompa Lumpur Depok",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/03/sewa-pompa-lumpur-terdekat.html": "Sewa Pompa Lumpur Terdekat",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/03/sewa-pompa-lumpur-surabaya.html": "Sewa Pompa Lumpur Surabaya",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/03/sewa-pompa-lumpur-bandung.html": "Sewa Pompa Lumpur Bandung"  // TYPE: MONEY_CHILD
  
};
const urlMappingSewaPompaLumpurFromMoneyChildVariant = {
"https://www.betonjayareadymix.com/2019/03/spesifikasi-pompa-lumpur.html": "Spesifikasi Pompa Lumpur",  // TYPE: VARIANT
"https://www.betonjayareadymix.com/2019/03/perbandingan-pompa-lumpur-vs-pompa-air-biasa.html": "Perbandingan Pompa Lumpur VS Pompa Air Biasa"
};

const urlMappingSewaPompaSedotLumpurFromMoneyMaster1MoneyChild = {
  // ============================================================
  // [MONEY_CHILD] - SEWA POMPA LUMPUR PER LOKASI
  // ============================================================
   "https://www.betonjayareadymix.com/2019/03/sewa-pompa-sedot-lumpur-jakarta.html": "Sewa Pompa Sedot Lumpur Jakarta"  // TYPE: MONEY_CHILD
   /*"https://www.betonjayareadymix.com/2019/03/sewa-pompa-sedot-lumpur-bogor.html": "Sewa Pompa Sedot Lumpur Bekasi",  // TYPE: MONEY_CHILD
   "https://www.betonjayareadymix.com/2019/03/sewa-pompa-sedot-lumpur-tangerang.html": "Sewa Pompa Sedot Lumpur Tangerang",  // TYPE: MONEY_CHILD
   "https://www.betonjayareadymix.com/2019/03/sewa-pompa-sedot-lumpur-bekasi.html": "Sewa Pompa Sedot Lumpur Bekasi",  // TYPE: MONEY_CHILD
   "https://www.betonjayareadymix.com/2019/03/sewa-pompa-sedot-lumpur-karawang.html": "Sewa Pompa Sedot Lumpur Karawang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/03/sewa-pompa-sedot-lumpur-depok.html": "Sewa Pompa Sedot Lumpur Depok",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/03/sewa-pompa-sedot-lumpur-terdekat.html": "Sewa Pompa Sedot Lumpur Terdekat",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/03/sewa-pompa-sedot-lumpur-surabaya.html": "Sewa Pompa Sedot Lumpur Surabaya",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/03/sewa-pompa-sedot-lumpur-bandung.html": "Sewa Pompa Sedot Lumpur Bandung"  // TYPE: MONEY_CHILD
  */
};
const urlMappingSewaPompaSedotLumpurFromMoneyChildVariant = {
"https://www.betonjayareadymix.com/2019/03/spesifikasi-pompa-sedot-lumpur.html": "Spesifikasi Pompa Sedot Lumpur",  // TYPE: VARIANT
"https://www.betonjayareadymix.com/2019/03/perbandingan-pompa-sedot-lumpur-vs-biasa.html": "Perbandingan Pompa Sedot Lumpur VS Biasa"
};

const urlMappingSewaPompaBanjirFromMoneyMaster1MoneyChild = {
  // ============================================================
  // [MONEY_CHILD] - SEWA POMPA LUMPUR PER LOKASI
  // ============================================================
   "https://www.betonjayareadymix.com/2019/03/sewa-pompa-banjir-jakarta.html": "Sewa Pompa Banjir Jakarta"  // TYPE: MONEY_CHILD
   /*"https://www.betonjayareadymix.com/2019/03/sewa-pompa-banjir-bogor.html": "Sewa Pompa Banjir Bekasi",  // TYPE: MONEY_CHILD
   "https://www.betonjayareadymix.com/2019/03/sewa-pompa-banjir-tangerang.html": "Sewa Pompa Banjir Tangerang",  // TYPE: MONEY_CHILD
   "https://www.betonjayareadymix.com/2019/03/sewa-pompa-banjir-bekasi.html": "Sewa Pomp Banjir Bekasi",  // TYPE: MONEY_CHILD
   "https://www.betonjayareadymix.com/2019/03/sewa-pompa-banjir-karawang.html": "Sewa Pompa Banjir Karawang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/03/sewa-pompa-banjir-depok.html": "Sewa Pompa Banjir Depok",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/03/sewa-pompa-banjir-terdekat.html": "Sewa Pompa Banjir Terdekat",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/03/sewa-pompa-banjir-surabaya.html": "Sewa Pompa Banjir Surabaya",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/03/sewa-pompa-banjir-bandung.html": "Sewa Pompa Banjir Bandung"  // TYPE: MONEY_CHILD
  */
};
const urlMappingSewaPompaBanjirFromMoneyChildVariant = {
"https://www.betonjayareadymix.com/2019/03/spesifikasi-pompa-banjir.html": "Spesifikasi Pompa Banjir",  // TYPE: VARIANT
"https://www.betonjayareadymix.com/2019/03/perbandingan-pompa-banjir-diesel-vs-listrik.html": "Perbandingan Pompa Banjir VS Listrik"
};

const urlMappingSewaPompaKapasitasBesarFromMoneyMaster1MoneyChild = {
  // ============================================================
  // [MONEY_CHILD] - SEWA POMPA KAPASITAS BESAR PER LOKASI
  // ============================================================
   "https://www.betonjayareadymix.com/2019/03/sewa-pompa-kapasitas-besar-jakarta.html": "Sewa Pompa Kapasitas Besar Jakarta"  // TYPE: MONEY_CHILD
   /*"https://www.betonjayareadymix.com/2019/03/sewa-pompa-kapasitas-besar-bogor.html": "Sewa Pompa Kapasitas Besar Bekasi",  // TYPE: MONEY_CHILD
   "https://www.betonjayareadymix.com/2019/03/sewa-pompa-kapasitas-besar-tangerang.html": "Sewa Pompa Kapasitas Besar Tangerang",  // TYPE: MONEY_CHILD
   "https://www.betonjayareadymix.com/2019/03/sewa-pompa-kapasitas-besar-bekasi.html": "Sewa Pomp Kapasitas Besar Bekasi",  // TYPE: MONEY_CHILD
   "https://www.betonjayareadymix.com/2019/03/sewa-pompa-kapasitas-besar-karawang.html": "Sewa Pompa Kapasitas Besar Karawang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/03/sewa-pompa-kapasitas-besar-depok.html": "Sewa Pompa Kapasitas Besar Depok",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/03/sewa-pompa-kapasitas-besar-terdekat.html": "Sewa Pompa Kapasitas Besar Terdekat",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/03/sewa-pompa-kapasitas-besar-surabaya.html": "Sewa Pompa Kapasitas Besar Surabaya",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/03/sewa-pompa-kapasitas-besar-bandung.html": "Sewa Pompa Kapasitas Besar Bandung"  // TYPE: MONEY_CHILD
  */
};
const urlMappingSewaPompaKapasitasBesarFromMoneyChildVariant = {
"https://www.betonjayareadymix.com/2019/03/spesifikasi-pompa-kapasitas-besar.html": "Spesifikasi Pompa Kapasitas Besar",  // TYPE: VARIANT
"https://www.betonjayareadymix.com/2019/03/perbandingan-pompa-6-inch-vs-8-inch.html": "Perbandingan Pompa 6 Inch VS 8 Inch"
};

const urlMappingSewaBakAirProyekFromMoneyMaster1MoneyChild = {
  // ============================================================
  // [MONEY_CHILD] - SEWA BakAirProyek PER LOKASI
  // ============================================================
   "https://www.betonjayareadymix.com/2019/03/sewa-bak-air-proyek-jakarta.html": "Sewa Bak Air Proyek Jakarta"  // TYPE: MONEY_CHILD
   /*"https://www.betonjayareadymix.com/2019/03/sewa-pompa-kapasitas-besar-bogor.html": "Sewa Bak Air Proyek Bekasi",  // TYPE: MONEY_CHILD
   "https://www.betonjayareadymix.com/2019/03/sewa-pompa-kapasitas-besar-tangerang.html": "Sewa Bak Air Proyek Tangerang",  // TYPE: MONEY_CHILD
   "https://www.betonjayareadymix.com/2019/03/sewa-pompa-kapasitas-besar-bekasi.html": "Sewa Bak Air Proyek Bekasi",  // TYPE: MONEY_CHILD
   "https://www.betonjayareadymix.com/2019/03/sewa-pompa-kapasitas-besar-karawang.html": "Sewa Bak Air Proyek Karawang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/03/sewa-pompa-kapasitas-besar-depok.html": "Sewa Bak Air Proyek Depok",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/03/sewa-pompa-kapasitas-besar-terdekat.html": "Sewa Bak Air Proyek Terdekat",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/03/sewa-pompa-kapasitas-besar-surabaya.html": "Sewa Bak Air Proyek Surabaya",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/03/sewa-pompa-kapasitas-besar-bandung.html": "Sewa Bak Air Proyek Bandung"  // TYPE: MONEY_CHILD
  */
};
const urlMappingSewaBakAirProyekFromMoneyChildVariant = {
"https://www.betonjayareadymix.com/2019/03/spesifikasi-bak-air-proyek.html": "Spesifikasi Bak Air Proyek",  // TYPE: VARIANT
"https://www.betonjayareadymix.com/2019/03/perbandingan-bak-air-plastik-vs-fiber.html": "Perbandingan Bak Air Plastik VS Viber"
};

const urlMappingSewaTangkiAirFromMoneyMasterMoneyChild = {
  // ============================================================
  // [MONEY_CHILD] - SEWA BakAirProyek PER LOKASI
  // ============================================================
   "https://www.betonjayareadymix.com/2019/03/sewa-tangki-air-jakarta.html": "Sewa Tangki Air Jakarta"  // TYPE: MONEY_CHILD
   /*"https://www.betonjayareadymix.com/2019/03/sewa-pompa-kapasitas-besar-bogor.html": "Sewa Bak Air Proyek Bekasi",  // TYPE: MONEY_CHILD
   "https://www.betonjayareadymix.com/2019/03/sewa-pompa-kapasitas-besar-tangerang.html": "Sewa Bak Air Proyek Tangerang",  // TYPE: MONEY_CHILD
   "https://www.betonjayareadymix.com/2019/03/sewa-pompa-kapasitas-besar-bekasi.html": "Sewa Bak Air Proyek Bekasi",  // TYPE: MONEY_CHILD
   "https://www.betonjayareadymix.com/2019/03/sewa-pompa-kapasitas-besar-karawang.html": "Sewa Bak Air Proyek Karawang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/03/sewa-pompa-kapasitas-besar-depok.html": "Sewa Bak Air Proyek Depok",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/03/sewa-pompa-kapasitas-besar-terdekat.html": "Sewa Bak Air Proyek Terdekat",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/03/sewa-pompa-kapasitas-besar-surabaya.html": "Sewa Bak Air Proyek Surabaya",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/03/sewa-pompa-kapasitas-besar-bandung.html": "Sewa Bak Air Proyek Bandung"  // TYPE: MONEY_CHILD
  */
};
const urlMappingSewaTangkiAirFromMoneyChildVariant = {
"https://www.betonjayareadymix.com/2019/03/spesifikasi-tangki-air.html": "Spesifikasi Tangki Air",  // TYPE: VARIANT
"https://www.betonjayareadymix.com/2019/03/perbandingan-tangki-air-plastik-vs-stainless.html": "Perbandingan Tangki Air Plastik VS Stainless"
};

const urlMappingSewaPipaProyekFromMoneyMasterMoneyChild = {
  // ============================================================
  // [MONEY_CHILD] - SEWA BakAirProyek PER LOKASI
  // ============================================================
   "https://www.betonjayareadymix.com/2019/03/sewa-pipa-proyek-jakarta.html": "Sewa Pipa Proyek Jakarta"  // TYPE: MONEY_CHILD
   /*"https://www.betonjayareadymix.com/2019/03/sewa-pompa-kapasitas-besar-bogor.html": "Sewa Bak Air Proyek Bekasi",  // TYPE: MONEY_CHILD
   "https://www.betonjayareadymix.com/2019/03/sewa-pompa-kapasitas-besar-tangerang.html": "Sewa Bak Air Proyek Tangerang",  // TYPE: MONEY_CHILD
   "https://www.betonjayareadymix.com/2019/03/sewa-pompa-kapasitas-besar-bekasi.html": "Sewa Bak Air Proyek Bekasi",  // TYPE: MONEY_CHILD
   "https://www.betonjayareadymix.com/2019/03/sewa-pompa-kapasitas-besar-karawang.html": "Sewa Bak Air Proyek Karawang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/03/sewa-pompa-kapasitas-besar-depok.html": "Sewa Bak Air Proyek Depok",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/03/sewa-pompa-kapasitas-besar-terdekat.html": "Sewa Bak Air Proyek Terdekat",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/03/sewa-pompa-kapasitas-besar-surabaya.html": "Sewa Bak Air Proyek Surabaya",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/03/sewa-pompa-kapasitas-besar-bandung.html": "Sewa Bak Air Proyek Bandung"  // TYPE: MONEY_CHILD
  */
};
const urlMappingSewaPipaProyekFromMoneyChildVariant = {
"https://www.betonjayareadymix.com/2019/03/spesifikasi-pipa-proyek.html": "Spesifikasi Pipa Proyek",  // TYPE: VARIANT
"https://www.betonjayareadymix.com/2019/03/perbandingan-pipa-hdpe-vs-pvc.html": "Perbandingan Pipa HDPE VS PVC"
};

const urlMappingSewaSelangProyekFromMoneyMasterMoneyChild = {
  // ============================================================
  // [MONEY_CHILD] - SEWA BakAirProyek PER LOKASI
  // ============================================================
   "https://www.betonjayareadymix.com/2019/03/sewa-selang-proyek-jakarta.html": "Sewa Selang Proyek Jakarta"  // TYPE: MONEY_CHILD
   /*"https://www.betonjayareadymix.com/2019/03/sewa-pompa-kapasitas-besar-bogor.html": "Sewa Bak Air Proyek Bekasi",  // TYPE: MONEY_CHILD
   "https://www.betonjayareadymix.com/2019/03/sewa-pompa-kapasitas-besar-tangerang.html": "Sewa Bak Air Proyek Tangerang",  // TYPE: MONEY_CHILD
   "https://www.betonjayareadymix.com/2019/03/sewa-pompa-kapasitas-besar-bekasi.html": "Sewa Bak Air Proyek Bekasi",  // TYPE: MONEY_CHILD
   "https://www.betonjayareadymix.com/2019/03/sewa-pompa-kapasitas-besar-karawang.html": "Sewa Bak Air Proyek Karawang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/03/sewa-pompa-kapasitas-besar-depok.html": "Sewa Bak Air Proyek Depok",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/03/sewa-pompa-kapasitas-besar-terdekat.html": "Sewa Bak Air Proyek Terdekat",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/03/sewa-pompa-kapasitas-besar-surabaya.html": "Sewa Bak Air Proyek Surabaya",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/03/sewa-pompa-kapasitas-besar-bandung.html": "Sewa Bak Air Proyek Bandung"  // TYPE: MONEY_CHILD
  */
};
const urlMappingSewaSelangProyekFromMoneyChildVariant = {
"https://www.betonjayareadymix.com/2019/03/spesifikasi-selang-proyek.html": "Spesifikasi Selang Proyek",  // TYPE: VARIANT
"https://www.betonjayareadymix.com/2019/03/perbandingan-selang-karet-vs-pvc.html": "Perbandingan Selang Proyek VS PVC"
};
// ============================================================
// 📁 SUB Jasa Alat Konstruksi - SEWA PENCAHAYAAN UTILITAS
// 🧠 ENTITY: SEWA/RENTAL → TYPE: MONEY_PAGE & MONEY_CHILD
// ============================================================

const urlMappingSewaTowerLampFromMoneyMaster1MoneyChild = {
  // ============================================================
  // [MONEY_CHILD] - SEWA TOWER LAMP PER LOKASI
  // ============================================================
  "https://www.betonjayareadymix.com/2019/03/sewa-tower-lamp-terdekat.html": "Sewa Tower Lamp Terdekat",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/03/sewa-tower-lamp-jakarta.html": "Sewa Tower Lamp Jakarta",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/03/sewa-tower-lamp-bogor.html": "Sewa Tower Lamp Bogor",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/03/sewa-tower-lamp-depok.html": "Sewa Tower Lamp Depok",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/03/sewa-tower-lamp-tangerang.html": "Sewa Tower Lamp Tangerang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/03/sewa-tower-lamp-bekasi.html": "Sewa Tower Lamp Bekasi",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/03/sewa-tower-lamp-karawang.html": "Sewa Tower Lamp Karawang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/03/sewa-tower-lamp-balikpapan.html": "Sewa Tower Lamp Balikpapan",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/03/sewa-tower-lamp-palembang.html": "Sewa Tower Lamp Palembang"  // TYPE: MONEY_CHILD
// ============================================================
  // 🟡 SARAN ITEM TAMBAHAN (BELUM AKTIF - PERLU DIBUAT KONTEN)
  // ============================================================
  // "https://www.betonjayareadymix.com/2019/03/sewa-tower-lamp-bandung.html": "Sewa Tower Lamp Bandung",  // TYPE: MONEY_CHILD
  // "https://www.betonjayareadymix.com/2019/03/sewa-tower-lamp-surabaya.html": "Sewa Tower Lamp Surabaya",  // TYPE: MONEY_CHILD
  // "https://www.betonjayareadymix.com/2019/03/sewa-lampu-proyek-jakarta.html": "Sewa Lampu Proyek Jakarta",  // TYPE: MONEY_CHILD
  

};
const urlMappingSewaLampuSorotFromMoneyMaster1MoneyChild = {
  // ============================================================
  // [MONEY_CHILD] - SEWA LAMPU SOROT PER LOKASI
  // ============================================================
  "https://www.betonjayareadymix.com/2019/03/sewa-lampu-sorot-terdekat.html": "Sewa Lampu Sorot Terdekat",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/03/sewa-lampu-sorot-jakarta.html": "Sewa Lampu Sorot Jakarta",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/03/sewa-lampu-sorot-bogor.html": "Sewa Lampu Sorot Bogor",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/03/sewa-lampu-sorot-depok.html": "Sewa Lampu Sorot Depok",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/03/sewa-lampu-sorot-tangerang.html": "Sewa Lampu Sorot Tangerang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/03/sewa-lampu-sorot-bekasi.html": "Sewa Lampu Sorot Bekasi",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/03/sewa-lampu-sorot-karawang.html": "Sewa Lampu Sorot Karawang",  // TYPE: MONEY_CHILD
};
const urlMappingSewaLampuTembakFromMoneyMaster1MoneyChild = {
  // ============================================================
  // [MONEY_CHILD] - SEWA LAMPU TEMBAK PER LOKASI
  // ============================================================
  "https://www.betonjayareadymix.com/2019/03/sewa-lampu-tembak-terdekat.html": "Sewa Lampu Tembak Terdekat",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/03/sewa-lampu-tembak-jakarta.html": "Sewa Lampu Tembak Jakarta",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/03/sewa-lampu-tembak-bogor.html": "Sewa Lampu Tembak Bogor",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/03/sewa-lampu-tembak-depok.html": "Sewa Lampu Tembak Depok",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/03/sewa-lampu-tembak-tangerang.html": "Sewa Lampu Tembak Tangerang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/03/sewa-lampu-tembak-bekasi.html": "Sewa Lampu Tembak Bekasi",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/03/sewa-lampu-tembak-karawang.html": "Sewa Lampu Tembak Karawang"  // TYPE: MONEY_CHILD
};
const urlMappingSewaLampuProyekFromMoneyMaster1MoneyChild = {
 // ============================================================
  // [MONEY_CHILD] - SEWA LAMPU PROYEK & PANEL LISTRIK PER LOKASI
  // ============================================================
  "https://www.betonjayareadymix.com/2019/03/sewa-lampu-proyek-terdekat.html": "Sewa Lampu Proyek Terdekat"  // TYPE: MONEY_CHILD
// ============================================================
  // 🟡 SARAN ITEM TAMBAHAN (BELUM AKTIF - PERLU DIBUAT KONTEN)
  // ============================================================
  // "https://www.betonjayareadymix.com/2019/03/sewa-lampu-proyek-jakarta.html": "Sewa Lampu Proyek Jakarta",  // TYPE: MONEY_CHILD	
};
const urlMappingSewaPanelListrikFromMoneyMaster1MoneyChild = {
	  "https://www.betonjayareadymix.com/2019/03/sewa-panel-listrik-terdekat.html": "Sewa Panel Listrik Terdekat"  // TYPE: MONEY_CHILD
  
};
// ============================================================
// 📁 SUB Jasa Alat Konstruksi - SEWA ALAT SURVEY PENGUKURAN
// 🧠 ENTITY: SEWA/RENTAL → TYPE: MONEY_PAGE & MONEY_CHILD
// ============================================================

const urlMappingSewaAlatSurveyFromMoneyMasterMoneyChild = {
  // ============================================================
  // [MONEY_CHILD] - SEWA ALAT SURVEY PER LOKASI
  // ============================================================
  "https://www.betonjayareadymix.com/2019/03/sewa-alat-survey-terdekat.html": "Sewa Alat Survey Terdekat",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/03/sewa-alat-survey-jakarta.html": "Sewa Alat Survey Jakarta",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/03/sewa-alat-survey-bogor.html": "Sewa Alat Survey Bogor",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/03/sewa-alat-survey-depok.html": "Sewa Alat Survey Depok",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/03/sewa-alat-survey-tangerang.html": "Sewa Alat Survey Tangerang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/03/sewa-alat-survey-bekasi.html": "Sewa Alat Survey Bekasi",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/03/sewa-alat-survey-karawang.html": "Sewa Alat Survey Karawang"  // TYPE: MONEY_CHILD
};

// ============================================================
// 📁 SUB Jasa Alat Konstruksi - SEWA TOTAL STATION (DETAIL LOKASI)
// 🧠 ENTITY: SEWA/RENTAL → TYPE: MONEY_CHILD
// ============================================================

const urlMappingSewaTotalStationFromMoneyMaster1MoneyChild = {
  // ============================================================
  // [MONEY_CHILD] - SEWA TOTAL STATION PER LOKASI
  // ============================================================
  "https://www.betonjayareadymix.com/2019/03/sewa-total-station-terdekat.html": "Sewa Total Station Terdekat",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/03/sewa-total-station-jakarta.html": "Sewa Total Station Jakarta",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/03/sewa-total-station-bogor.html": "Sewa Total Station Bogor",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/03/sewa-total-station-depok.html": "Sewa Total Station Depok",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/03/sewa-total-station-tangerang.html": "Sewa Total Station Tangerang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/03/sewa-total-station-bekasi.html": "Sewa Total Station Bekasi",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/03/sewa-total-station-karawang.html": "Sewa Total Station Karawang"  // TYPE: MONEY_CHILD
};

// ============================================================
// 📁 SUB Jasa Alat Konstruksi - SEWA WATERPASS (DETAIL LOKASI)
// 🧠 ENTITY: SEWA/RENTAL → TYPE: MONEY_CHILD
// ============================================================

const urlMappingSewaWaterpassFromMoneyMaster1MoneyChild  = {
  // ============================================================
  // [MONEY_CHILD] - SEWA WATERPASS PER LOKASI
  // ============================================================
  "https://www.betonjayareadymix.com/2019/03/sewa-waterpass-terdekat.html": "Sewa Waterpass Terdekat",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/03/sewa-waterpass-jakarta.html": "Sewa Waterpass Jakarta",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/03/sewa-waterpass-bogor.html": "Sewa Waterpass Bogor",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/03/sewa-waterpass-depok.html": "Sewa Waterpass Depok",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/03/sewa-waterpass-tangerang.html": "Sewa Waterpass Tangerang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/03/sewa-waterpass-bekasi.html": "Sewa Waterpass Bekasi",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/03/sewa-waterpass-karawang.html": "Sewa Waterpass Karawang"  // TYPE: MONEY_CHILD
};

// ============================================================
// 📁 SUB Jasa Alat Konstruksi - SEWA THEODOLITE (DETAIL LOKASI)
// 🧠 ENTITY: SEWA/RENTAL → TYPE: MONEY_CHILD
// ============================================================

const urlMappingSewaTheodoliteFromMoneyMaster1MoneyChild = {
  // ============================================================
  // [MONEY_CHILD] - SEWA THEODOLITE PER LOKASI
  // ============================================================
  "https://www.betonjayareadymix.com/2019/03/sewa-theodolite-terdekat.html": "Sewa Theodolite Terdekat",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/03/sewa-theodolite-jakarta.html": "Sewa Theodolite Jakarta",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/03/sewa-theodolite-bogor.html": "Sewa Theodolite Bogor",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/03/sewa-theodolite-depok.html": "Sewa Theodolite Depok",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/03/sewa-theodolite-tangerang.html": "Sewa Theodolite Tangerang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/03/sewa-theodolite-bekasi.html": "Sewa Theodolite Bekasi",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/03/sewa-theodolite-karawang.html": "Sewa Theodolite Karawang",  // TYPE: MONEY_CHILD
};

// ============================================================
// 📁 SUB Jasa Alat Konstruksi - SEWA AKSES KEAMANAN PROYEK
// 🧠 ENTITY: SEWA/RENTAL → TYPE: MONEY_PAGE
// ============================================================


// ============================================================
// 📁 SUB Jasa Alat Konstruksi - SEWA ALAT BOR GROUND WORK
// 🧠 ENTITY: SEWA/RENTAL → TYPE: MONEY_PAGE & MONEY_CHILD
// ============================================================

const urlMappingSewaAlatBorFromMoneyMasterMoneyPage = {
  // ============================================================
  // [MONEY_PAGE] - SEWA ALAT BOR
  // ============================================================
   "https://www.betonjayareadymix.com/2019/03/harga-sewa-alat-bor-sumur.html": "Harga Sewa Alat Bor Sumur"  // TYPE: MONEY_PAGE

};
const urlMappingSewaAlatBorFromMoneyMasterMoneyChild = {
 // ============================================================
  // [MONEY_CHILD] - SEWA ALAT BOR PER LOKASI
  // ============================================================
  "https://www.betonjayareadymix.com/2019/03/sewa-alat-bor-sumur-terdekat.html": "Sewa Alat Bor Sumur Terdekat"  // TYPE: MONEY_CHILD
};
const urlMappingSewaBorTanahFromMoneyMaster1MoneyChild = {
 // ============================================================
  // [MONEY_CHILD] - SEWA ALAT BOR PER LOKASI
  "https://www.betonjayareadymix.com/2019/03/sewa-bor-tanah-terdekat.html": "Sewa Bor Tanah Terdekat"  // TYPE: MONEY_CHILD
};
// ============================================================
// 📁 SUB Jasa Alat Konstruksi - SEWA ALAT BERAT (MONEY PAGE, CHILD & MASTER)
// 🧠 ENTITY: SEWA/RENTAL → TYPE: MONEY_PAGE, MONEY_CHILD, MONEY_MASTER
// Parent: Sewa Alat Berat (SUB2)
// Breadcrumb: Home > Sewa Alat Konstruksi > Sewa Alat Berat > [Jenis Alat / Lokasi] (4 level)
// ============================================================

const urlMappingSewaAlatBeratPostFromMoneyMasterMoneyMaster1 = { 
  "https://www.betonjayareadymix.com/2019/02/sewa-alat-berat-trakindo.html": "Sewa Alat Berat Trakindo"  // TYPE: MONEY_PAGE
};

//MONEY PAGE DAN MONEY PAGE TURUNAN PARENT TERDEKAT TETAP MONEY MASTER
const urlMappingSewaAlatBeratPostFromMoneyMasterMoneyPage = { 
// ============================================================
  // [MONEY_PAGE] - INFORMASI & HARGA UMUM
  // ============================================================
 // "https://www.betonjayareadymix.com/2019/02/sewa-alat-berat.html": "Sewa Alat Berat",  // TYPE: MONEY_PAGE PARENT
// ============================================================
"https://www.betonjayareadymix.com/2019/02/standar-harga-sewa-alat-berat.html": "Standar Harga Sewa Alat Berat", 
"https://www.betonjayareadymix.com/2019/02/daftar-harga-sewa-alat-berat-per-jam.html": "Daftar Harga Sewa Alat Berat Per Jam", 
  "https://www.betonjayareadymix.com/2019/02/sewa-alat-berat-murah.html": "Sewa Alat Berat Murah",  // TYPE: MONEY_PAGE
   "https://www.betonjayareadymix.com/2019/02/harga-sewa-alat-berat.html": "Harga Sewa Alat Berat",
	// [MONEY_MASTER] - HARGA SEWA ALAT BERAT (PER DURASI, PAKET HARGA)
// ============================================================
"https://www.betonjayareadymix.com/2019/02/sewa-alat-berat-per-hari.html": "Sewa Alat Berat per Hari",  // TYPE: MONEY_MASTER ✅ (fokus harga per durasi)
"https://www.betonjayareadymix.com/2019/02/sewa-alat-berat-per-jam.html": "Sewa Alat Berat per Jam",  // TYPE: MONEY_MASTER ✅ (fokus harga per durasi)
"https://www.betonjayareadymix.com/2019/02/sewa-alat-berat-all-in.html": "Sewa Alat Berat All In",  // TYPE: MONEY_MASTER ✅ (fokus paket harga)

"https://www.betonjayareadymix.com/2019/02/harga-sewa-roller-alat-berat.html": "Harga Sewa Roller Alat Berat",  // TYPE: MONEY_MASTER ✅
"https://www.betonjayareadymix.com/2019/02/harga-sewa-alat-berat-beko.html": "Harga Sewa Alat Berat Beko",  // TYPE: MONEY_MASTER ✅
"https://www.betonjayareadymix.com/2019/02/harga-sewa-alat-berat-bego.html": "Harga Sewa Alat Berat Bego",  // TYPE: MONEY_MASTER ✅
"https://www.betonjayareadymix.com/2019/02/harga-sewa-alat-berat-breaker.html": "Harga Sewa Alat Berat Breaker",  // TYPE: MONEY_MASTER ✅
"https://www.betonjayareadymix.com/2019/02/harga-sewa-alat-berat-backhoe-loader.html": "Harga Sewa Alat Berat Backhoe Loader",  // TYPE: MONEY_MASTER ✅
"https://www.betonjayareadymix.com/2019/02/harga-sewa-alat-berat-crane.html": "Harga Sewa Alat Berat Crane",  // TYPE: MONEY_MASTER ✅
"https://www.betonjayareadymix.com/2019/02/harga-sewa-alat-berat-wales.html": "Harga Sewa Alat Berat Wales",  // TYPE: MONEY_MASTER ✅
"https://www.betonjayareadymix.com/2019/02/harga-sewa-alat-berat-tandem-roller.html": "Harga Sewa Alat Berat Tandem Roller",  // TYPE: MONEY_MASTER ✅
"https://www.betonjayareadymix.com/2019/02/harga-sewa-alat-berat-vibro.html": "Harga Sewa Alat Berat Vibro",  // TYPE: MONEY_MASTER ✅
"https://www.betonjayareadymix.com/2019/02/harga-sewa-alat-berat-wheel-loader.html": "Harga Sewa Alat Berat Wheel Loader",  // TYPE: MONEY_MASTER ✅
"https://www.betonjayareadymix.com/2019/02/harga-sewa-alat-berat-dozer.html": "Harga Sewa Alat Berat Dozer",  // TYPE: MONEY_MASTER ✅
"https://www.betonjayareadymix.com/2019/02/harga-sewa-alat-berat-dump-truck.html": "Harga Sewa Alat Berat Dump Truck",  // TYPE: MONEY_MASTER ✅
"https://www.betonjayareadymix.com/2019/02/harga-sewa-alat-berat-excavator.html": "Harga Sewa Alat Berat Excavator",  // TYPE: MONEY_MASTER ✅
"https://www.betonjayareadymix.com/2019/02/harga-sewa-alat-berat-komatsu.html": "Harga Sewa Alat Berat Komatsu",  // TYPE: MONEY_MASTER ✅
"https://www.betonjayareadymix.com/2019/02/harga-sewa-paver-alat-berat.html": "Harga Sewa Paver Alat Berat"  // TYPE: MONEY_MASTER ✅

};

const urlMappingSewaforkliftPostFromMoneyMasterMoneyPage = { 
  "https://www.betonjayareadymix.com/2019/02/harga-sewa-forklift.html": "Harga Sewa Forklift"  // TYPE: MONEY_PAGE PARENT
};
const urlMappingSewaCranePostFromMoneyMasterMoneyPage = { 
   "https://www.betonjayareadymix.com/2019/02/harga-sewa-crane.html": "Harga Sewa Crane" // TYPE: MONEY_PAGE PARENT
};
const urlMappingSewaSelfLoaderPostFromMoneyMasterMoneyPage = { 
  "https://www.betonjayareadymix.com/2019/02/harga-sewa-self-loader.html": "Harga Sewa Self Loader"  // TYPE: MONEY_PAGE PARENT
	  // "https://www.betonjayareadymix.com/2019/02/sewa-self-loader.html": "Sewa Self Loader",  // TYPE: MONEY_MASTER
  // "https://www.betonjayareadymix.com/2019/02/harga-sewa-self-loader.html": "Harga Sewa Self Loader",  // TYPE: MONEY_MASTER
  // "https://www.betonjayareadymix.com/2019/02/sewa-self-loader-jakarta.html": "Sewa Self Loader Jakarta",  // TYPE: MONEY_CHILD
  // "https://www.betonjayareadymix.com/2019/02/sewa-self-loader-per-hari.html": "Sewa Self Loader Per Hari",  // TYPE: MONEY_CHILD
};
const urlMappingSewaWheelLoaderPostFromMoneyMasterMoneyPage = { 
   "https://www.betonjayareadymix.com/2019/02/harga-sewa-wheel-loader.html": "Harga Sewa Wheel Loader" // TYPE: MONEY_PAGE PARENT
};
const urlMappingSewaVibroRollerPostFromMoneyMasterMoneyPage = { 
   "https://www.betonjayareadymix.com/2019/02/harga-sewa-vibro-roller.html": "Harga Sewa Vibro Roller"  // TYPE: MONEY_PAGE PARENT
};
const urlMappingSewaWalesStoomPostFromMoneyMasterMoneyPage = { 
  "https://www.betonjayareadymix.com/2019/02/harga-sewa-wales-stoom.html": "Harga Sewa Wales Stoom"  // TYPE: MONEY_PAGE PARENT
};
const urlMappingSewaTandemRollerPostFromMoneyMasterMoneyPage = { 
  "https://www.betonjayareadymix.com/2019/02/harga-sewa-tandem-roller.html": "Harga Sewa Tandem Roller"  // TYPE: MONEY_PAGE PARENT
};
const urlMappingSewaBulldozerPostFromMoneyMasterMoneyPage = { 
  "https://www.betonjayareadymix.com/2019/02/harga-sewa-bulldozer.html": "Harga Sewa Bulldozer"  // TYPE: MONEY_PAGE PARENT
};
const urlMappingSewaExcavatorPostFromMoneyMasterMoneyMaster1 = { 
 //"https://www.betonjayareadymix.com/p/sewa-excavator.html": "Sewa Excavator",  // TYPE: MONEY_PAGE PARENT
   "https://www.betonjayareadymix.com/2019/02/sewa-excavator-mini.html": "Sewa Excavator Mini"  // TYPE: MONEY_PAGE
  //"https://www.betonjayareadymix.com/2019/02/sewa-beko.html": "Sewa Beko"  // TYPE: MONEY_PAGE
};
const urlMappingSewaExcavatorPostFromMoneyMasterMoneyPage = { 
  "https://www.betonjayareadymix.com/2019/02/harga-sewa-excavator.html": "Harga Sewa Excavator"  // TYPE: MONEY_PAGE
};
const urlMappingSewaBackhoeLoaderPostFromMoneyMasterMoneyPage = { 
// "https://www.betonjayareadymix.com/2019/02/sewa-backhoe-loader.html": "Sewa Backhoe Loader"  // TYPE: MONEY_PAGE PARENT
 "https://www.betonjayareadymix.com/2019/02/harga-sewa-backhoe-loader.html": "Harga Sewa Backhoe Loader"  
};
const urlMappingSewaBabyRollerPostFromMoneyMasterMoneyPage = { 
  "https://www.betonjayareadymix.com/2019/02/harga-sewa-baby-roller.html": "Harga Sewa Baby Roller"  // TYPE: MONEY_PAGE PARENT
	
};
const urlMappingSewaMotorGraderPostFromMoneyMasterMoneyPage = { 
 "https://www.betonjayareadymix.com/2019/02/harga-sewa-motor-grader.html": "Harga Sewa Motor Grader" // TYPE: MONEY_PAGE PARENT
};

const urlMappingSewaAlatPancangPostFromMoneyMasterMoneyPage = { 
  // "https://www.betonjayareadymix.com/2019/02/sewa-alat-pancang.html": "Sewa Alat Pancang"  // TYPE: MONEY_PAGE PARENT
	  // ============================================================
   "https://www.betonjayareadymix.com/2019/02/harga-sewa-alat-pancang.html": "Harga Sewa Alat Pancang", // MONEY PAGE
  "https://www.betonjayareadymix.com/2019/02/biaya-sewa-alat-pancang-per-hari.html": "Biaya Sewa Alat Pancang per Hari", // MONEY PAGE
  "https://www.betonjayareadymix.com/2019/02/tarif-sewa-alat-pancang-murah.html": "Tarif Sewa Alat Pancang Murah", // MONEY PAGE
	/*
  "https://www.betonjayareadymix.com/2019/02/harga-sewa-pile-driver.html": "Harga Sewa Pile Driver",  
  "https://www.betonjayareadymix.com/2019/02/harga-sewa-diesel-hammer.html": "Harga Sewa Diesel Hammer",  
  "https://www.betonjayareadymix.com/2019/02/harga-sewa-drop-hammer.html": "Harga Sewa Drop Hammer", 
  "https://www.betonjayareadymix.com/2019/02/harga-sewa-alat-pancang-drop-hammer.html": "Harga Sewa Alat Pancang Drop Hammer",  
  "https://www.betonjayareadymix.com/2019/02/harga-sewa-alat-pancang-hspd.html": "Harga Sewa Alat Pancang HSPD"
  */

};
const urlMappingSewaPileDriverPostFromMoneyMasterMoneyPage = { 
  "https://www.betonjayareadymix.com/2019/02/harga-sewa-pile-driver.html": "Harga Sewa Pile Driver", 
    "https://www.betonjayareadymix.com/2019/02/biaya-sewa-pile-driver-per-hari.html": "Biaya Sewa Pile Driver per Hari", // BELUM DIBUAT
  "https://www.betonjayareadymix.com/2019/02/tarif-sewa-pile-driver-bulanan.html": "Tarif Sewa Pile Driver Bulanan" // BELUM DIBUAT
};
const urlMappingSewaDieselHammerPostFromMoneyMasterMoneyPage = {  
  "https://www.betonjayareadymix.com/2019/02/harga-sewa-diesel-hammer.html": "Harga Sewa Diesel Hammer",  
 "https://www.betonjayareadymix.com/2019/02/biaya-sewa-diesel-hammer-per-hari.html": "Biaya Sewa Diesel Hammer per Hari", // BELUM DIBUAT
  "https://www.betonjayareadymix.com/2019/02/tarif-sewa-diesel-hammer-murah.html": "Tarif Sewa Diesel Hammer Murah" // BELUM DIBUAT
};
const urlMappingSewaAlatPancangHidrolikPostFromMoneyMasterMoneyPage = {   
  "https://www.betonjayareadymix.com/2019/02/harga-sewa-alat-pancang-hidrolik.html": "Harga Sewa Alat Pancang Hidrolik", // BELUM DIBUAT
  "https://www.betonjayareadymix.com/2019/02/biaya-sewa-alat-pancang-hidrolik.html": "Biaya Sewa Alat Pancang Hidrolik", // BELUM DIBUAT
  "https://www.betonjayareadymix.com/2019/02/tarif-sewa-alat-pancang-hidrolik-per-hari.html": "Tarif Sewa Alat Pancang Hidrolik per Hari" // BELUM DIBUAT
};
const urlMappingSewaAlatPancangHSPDPostFromMoneyMasterMoneyPage = { 
  "https://www.betonjayareadymix.com/2019/02/harga-sewa-alat-pancang-hspd.html": "Harga Sewa Alat Pancang HSPD",
  "https://www.betonjayareadymix.com/2019/02/biaya-sewa-alat-pancang-hspd.html": "Biaya Sewa Alat Pancang HSPD", // BELUM DIBUAT
  "https://www.betonjayareadymix.com/2019/02/tarif-sewa-alat-pancang-hspd-murah.html": "Tarif Sewa Alat Pancang HSPD Murah" // BELUM DIBUAT

};
const urlMappingSewaAlatPancangSheetPilePostFromMoneyMasterMoneyPage = { 
  "https://www.betonjayareadymix.com/2019/02/harga-sewa-alat-pancang-sheet-pile.html": "Harga Sewa Alat Pancang Sheet Pile", // BELUM DIBUAT
  "https://www.betonjayareadymix.com/2019/02/biaya-sewa-alat-pancang-sheet-pile.html": "Biaya Sewa Alat Pancang Sheet Pile", // BELUM DIBUAT
  "https://www.betonjayareadymix.com/2019/02/tarif-sewa-alat-pancang-sheet-pile-per-hari.html": "Tarif Sewa Alat Pancang Sheet Pile per Hari" // BELUM DIBUAT
};
const urlMappingSewaAlatPancangMiniPilePostFromMoneyMasterMoneyPage = { 
  "https://www.betonjayareadymix.com/2019/02/harga-sewa-alat-pancang-mini-pile.html": "Harga Sewa Alat Pancang Mini Pile", // BELUM DIBUAT
  "https://www.betonjayareadymix.com/2019/02/biaya-sewa-alat-pancang-mini-pile.html": "Biaya Sewa Alat Pancang Mini Pile", // BELUM DIBUAT
  "https://www.betonjayareadymix.com/2019/02/tarif-sewa-alat-pancang-mini-pile-murah.html": "Tarif Sewa Alat Pancang Mini Pile Murah" // BELUM DIBUAT
};
const urlMappingSewaAlatPancangDieselHammerPostFromMoneyMasterMoneyPage = { 
  "https://www.betonjayareadymix.com/2019/02/harga-sewa-alat-pancang-diesel-hammer.html": "Harga Sewa Alat Pancang Diesel Hammer", // BELUM DIBUAT
  "https://www.betonjayareadymix.com/2019/02/biaya-sewa-alat-pancang-diesel-hammer.html": "Biaya Sewa Alat Pancang Diesel Hammer", // BELUM DIBUAT
  "https://www.betonjayareadymix.com/2019/02/tarif-sewa-alat-pancang-diesel-hammer-per-hari.html": "Tarif Sewa Alat Pancang Diesel Hammer per Hari" // BELUM DIBUAT
};
const urlMappingSewaAlatPancangDropHammerPostFromMoneyMasterMoneyPage = { 
  "https://www.betonjayareadymix.com/2019/02/harga-sewa-alat-pancang-drop-hammer.html": "Harga Sewa Alat Pancang Drop Hammer", // MONEY PAGE
  "https://www.betonjayareadymix.com/2019/02/biaya-sewa-alat-pancang-drop-hammer.html": "Biaya Sewa Alat Pancang Drop Hammer", // MONEY PAGE
  "https://www.betonjayareadymix.com/2019/02/tarif-sewa-alat-pancang-drop-hammer-murah.html": "Tarif Sewa Alat Pancang Drop Hammer Murah" // MONEY PAGE
};

const urlMappingSewaConcretePaverPostFromMoneyMasterMoneyPage = { 
  //"https://www.betonjayareadymix.com/2019/02/sewa-concrete-paver.html": "Sewa Concrete Paver"  // TYPE: MONEY_PAGE PARENT
 "https://www.betonjayareadymix.com/2019/02/harga-sewa-concrete-paver.html": "Harga Sewa Concrete Paver"
};
const urlMappingSewaTrencherPostFromMoneyMasterMoneyPage = { 
   //"https://www.betonjayareadymix.com/2019/02/sewa-trencher.html": "Sewa Trencher"  // TYPE: MONEY_PAGE PARENT
	 "https://www.betonjayareadymix.com/2019/02/harga-sewa-trencher-mesin.html": "Harga Sewa Trencher Mesin"
};
//MoneyMaster bisa ke MoneyChild jika relevan
const urlMappingSewaAlatBeratPostFromMoneyMasterMoneyChild = {
  // ============================================================
  // [MONEY_CHILD] - SEWA ALAT BERAT PER LOKASI (JABODETABEK + JAWA BARAT)
  // ============================================================
  "https://www.betonjayareadymix.com/2019/02/sewa-alat-berat-subang.html": "Sewa Alat Berat Subang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/02/sewa-alat-berat-bandung.html": "Sewa Alat Berat Bandung",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/02/sewa-alat-berat-purwakarta.html": "Sewa Alat Berat Purwakarta",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/02/sewa-alat-berat-jawa-barat.html": "Sewa Alat Berat Jawa Barat",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/02/sewa-alat-berat-jabodetabek.html": "Sewa Alat Berat Jabodetabek",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/02/sewa-alat-berat-cikampek.html": "Sewa Alat Berat Cikampek",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/02/sewa-alat-berat-cikarang.html": "Sewa Alat Berat Cikarang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/02/sewa-alat-berat-cileungsi.html": "Sewa Alat Berat Cileungsi",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/02/sewa-alat-berat-karawang.html": "Sewa Alat Berat Karawang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/02/sewa-alat-berat-bekasi.html": "Sewa Alat Berat Bekasi",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/02/sewa-alat-berat-tangerang.html": "Sewa Alat Berat Tangerang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/02/sewa-alat-berat-depok.html": "Sewa Alat Berat Depok",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/02/sewa-alat-berat-bogor.html": "Sewa Alat Berat Bogor",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/02/sewa-alat-berat-jakarta.html": "Sewa Alat Berat Jakarta",  // TYPE: MONEY_CHILD
  
  // ============================================================
  // [MONEY_CHILD] - SEWA ALAT BERAT TERDEKAT
  // ============================================================
  "https://www.betonjayareadymix.com/2019/02/sewa-alat-berat-terdekat.html": "Sewa Alat Berat Terdekat",  // TYPE: MONEY_CHILD
  

  // ============================================================
  // [MONEY_CHILD] - HARGA SEWA ALAT BERAT PER LOKASI
  // ============================================================
  "https://www.betonjayareadymix.com/2019/02/harga-sewa-alat-berat-jakarta.html": "Harga Sewa Alat Berat Jakarta"  // TYPE: MONEY_CHILD


};


// ============================================================
// 📁 SUB Jasa Alat Konstruksi - SEWA CONCRETE PAVER (MONEY MASTER)
// ============================================================
// ============================================================
// 📁 SUB Jasa Alat Konstruksi - SEWA EXCAVATOR (DETAIL LOKASI)
// 🧠 ENTITY: SEWA/RENTAL → TYPE: MONEY_MASTER & MONEY_CHILD
// ============================================================

const urlMappingSewaExcavatorPostFromMoneyPageMoneyChild = {
// ============================================================
  // [MONEY_CHILD] - SEWA EXCAVATOR PER LOKASI (JAWA TENGAH)
  // ============================================================
  "https://www.betonjayareadymix.com/2019/02/sewa-excavator-surakarta.html": "Sewa Excavator Surakarta",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/02/sewa-excavator-salatiga.html": "Sewa Excavator Salatiga",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/02/sewa-excavator-wonosobo.html": "Sewa Excavator Wonosobo",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/02/sewa-excavator-wonogiri.html": "Sewa Excavator Wonogiri",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/02/sewa-excavator-tegal.html": "Sewa Excavator Tegal",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/02/sewa-excavator-temanggung.html": "Sewa Excavator Temanggung",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/02/sewa-excavator-sukoharjo.html": "Sewa Excavator Sukoharjo",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/02/sewa-excavator-sragen.html": "Sewa Excavator Sragen",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/02/sewa-excavator-rembang.html": "Sewa Excavator Rembang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/02/sewa-excavator-purworejo.html": "Sewa Excavator Purworejo",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/02/sewa-excavator-purbalingga.html": "Sewa Excavator Purbalingga",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/02/sewa-excavator-pemalang.html": "Sewa Excavator Pemalang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/02/sewa-excavator-pekalongan.html": "Sewa Excavator Pekalongan",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/02/sewa-excavator-pati.html": "Sewa Excavator Pati",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/02/sewa-excavator-magelang.html": "Sewa Excavator Magelang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/02/sewa-excavator-kudus.html": "Sewa Excavator Kudus",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/02/sewa-excavator-klaten.html": "Sewa Excavator Klaten",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/02/sewa-excavator-kendal.html": "Sewa Excavator Kendal",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/02/sewa-excavator-kebumen.html": "Sewa Excavator Kebumen",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/02/sewa-excavator-karanganyar.html": "Sewa Excavator Karanganyar",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/02/sewa-excavator-jepara.html": "Sewa Excavator Jepara",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/02/sewa-excavator-grobogan.html": "Sewa Excavator Grobogan",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/02/sewa-excavator-demak.html": "Sewa Excavator Demak",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/02/sewa-excavator-cilacap.html": "Sewa Excavator Cilacap",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/02/sewa-excavator-brebes.html": "Sewa Excavator Brebes",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/02/sewa-excavator-boyolali.html": "Sewa Excavator Boyolali",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/02/sewa-excavator-blora.html": "Sewa Excavator Blora",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/02/sewa-excavator-batang.html": "Sewa Excavator Batang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/02/sewa-excavator-banyumas.html": "Sewa Excavator Banyumas",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/02/sewa-excavator-banjarnegara.html": "Sewa Excavator Banjarnegara",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/02/sewa-excavator-semarang.html": "Sewa Excavator Semarang",  // TYPE: MONEY_CHILD
  
  // ============================================================
  // [MONEY_CHILD] - SEWA EXCAVATOR PER LOKASI (JAWA BARAT)
  // ============================================================
  "https://www.betonjayareadymix.com/2019/02/sewa-excavator-kuningan.html": "Sewa Excavator Kuningan",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/02/sewa-excavator-ciamis.html": "Sewa Excavator Ciamis",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/02/sewa-excavator-cirebon.html": "Sewa Excavator Cirebon",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/02/sewa-excavator-purwakarta.html": "Sewa Excavator Purwakarta",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/02/sewa-excavator-majalengka.html": "Sewa Excavator Majalengka",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/02/sewa-excavator-sukabumi.html": "Sewa Excavator Sukabumi",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/02/sewa-excavator-sumedang.html": "Sewa Excavator Sumedang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/02/sewa-excavator-bandung.html": "Sewa Excavator Bandung",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/02/sewa-excavator-subang.html": "Sewa Excavator Subang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/02/sewa-excavator-tasikmalaya.html": "Sewa Excavator Tasikmalaya",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/02/sewa-excavator-karawang.html": "Sewa Excavator Karawang",  // TYPE: MONEY_CHILD
  
  // ============================================================
  // [MONEY_CHILD] - SEWA EXCAVATOR PER LOKASI (JABODETABEK)
  // ============================================================
  "https://www.betonjayareadymix.com/2019/02/sewa-excavator-tangerang.html": "Sewa Excavator Tangerang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/02/sewa-excavator-jakarta.html": "Sewa Excavator Jakarta",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/02/sewa-excavator-depok.html": "Sewa Excavator Depok",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/02/sewa-excavator-bekasi.html": "Sewa Excavator Bekasi",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/02/sewa-excavator-bogor.html": "Sewa Excavator Bogor",  // TYPE: MONEY_CHILD
};

// ============================================================
// 📁 SUB Jasa Alat Konstruksi - SEWA BULLDOZER (MONEY MASTER)
// ============================================================


// ============================================================
// 📁 SUB Jasa Alat Konstruksi - SEWA FORKLIFT (MONEY MASTER)
// ============================================================
// ============================================================
// 📁 SEWA ALAT PANCANG - MONEY PAGE & MASTER
// 🧠 ENTITY: SEWA/RENTAL → TYPE: MONEY_MASTER
// Breadcrumb: Home > Sewa Alat Konstruksi > Sewa Alat Berat > Sewa Alat Pancang (4 level)
// ============================================================

// ============================================================
// 📁 SEWA ALAT KONSTRUKSI RINGAN - MONEY PAGE & MASTER
// 🧠 ENTITY: SEWA/RENTAL → TYPE: MONEY_MASTER & MONEY_CHILD
// Parent: Sewa Alat Konstruksi Ringan (SUB2)
// Breadcrumb: Home > Sewa Alat Konstruksi > Sewa Alat Ringan > [Nama Alat] (4 level)
// ============================================================
/*
const urlMappingSewaAlatRinganFromMoneyMasterMoneyMaster1 = {
  // ============================================================
// MONEY MASTER (MM)
// ROOT COMMERCIAL ENTITY
// ============================================================

"https://www.betonjayareadymix.com/2019/02/jasa-sewa-alat-cleaning.html":
  "Jasa Sewa Alat Cleaning",

"https://www.betonjayareadymix.com/2019/02/sewa-mesin-polisher.html":
  "Sewa Mesin Polisher",

"https://www.betonjayareadymix.com/2019/02/sewa-concrete-cutter.html":
  "Sewa Concrete Cutter",

"https://www.betonjayareadymix.com/2019/02/sewa-jack-hammer.html":
  "Sewa Jack Hammer",

"https://www.betonjayareadymix.com/2019/02/sewa-vibrator-beton.html":
  "Sewa Vibrator Beton",

"https://www.betonjayareadymix.com/2019/02/sewa-mesin-molen.html":
  "Sewa Mesin Molen",

"https://www.betonjayareadymix.com/2019/02/sewa-genset.html":
  "Sewa Genset",

"https://www.betonjayareadymix.com/2019/02/sewa-mesin-compressor.html":
  "Sewa Mesin Compressor",

"https://www.betonjayareadymix.com/2019/02/sewa-cutting-beton.html":
  "Sewa Cutting Beton",

"https://www.betonjayareadymix.com/2019/02/sewa-mesin-potong-rumput.html":
  "Sewa Mesin Potong Rumput",

"https://www.betonjayareadymix.com/2019/02/sewa-screed.html":
  "Sewa Screed",

"https://www.betonjayareadymix.com/2019/02/sewa-trowel.html":
  "Sewa Trowel",

"https://www.betonjayareadymix.com/2019/02/sewa-stamper.html":
  "Sewa Stamper"

};
*/
const urlMappingSewaConcreteCutterFromMoneyMasterMoneyPage = {
// ============================================================
// MONEY PAGE (MP)
// DETAIL COMMERCIAL / PRICING / DETAIL INTENT
// ============================================================

"https://www.betonjayareadymix.com/2019/02/harga-sewa-concrete-cutter.html":
  "Harga Sewa Concrete Cutter"

};
const urlMappingSewaJackHammerFromMoneyMaster1MoneyPage = {
// ============================================================
// MONEY PAGE (MP)
// DETAIL COMMERCIAL / PRICING / DETAIL INTENT
// ============================================================

"https://www.betonjayareadymix.com/2019/02/harga-sewa-jack-hammer.html":
  "Harga Sewa Jack Hammer"

};
const urlMappingSewaVibratorBetonFromMoneyMaster1MoneyPage = {
// ============================================================
// MONEY PAGE (MP)
// DETAIL COMMERCIAL / PRICING / DETAIL INTENT
// ============================================================
"https://www.betonjayareadymix.com/2019/02/harga-sewa-mesin-vibrator-beton.html":
  "Harga Sewa Mesin Vibrator Beton"

};
const urlMappingSewaMesinMolenFromMoneyMaster1MoneyPage = {
// ============================================================
// MONEY PAGE (MP)
// DETAIL COMMERCIAL / PRICING / DETAIL INTENT
// ============================================================

"https://www.betonjayareadymix.com/2019/02/harga-sewa-mesin-molen.html":
  "Harga Sewa Mesin Molen"
};
const urlMappingSewaGensetFromMoneyMaster1MoneyPage = {
// ============================================================
// MONEY PAGE (MP)
// DETAIL COMMERCIAL / PRICING / DETAIL INTENT
// ============================================================
"https://www.betonjayareadymix.com/2019/02/harga-sewa-mesin-genset.html":
  "Harga Sewa Mesin Genset"

};
const urlMappingSewaMesinCompressorFromMoneyMaster1MoneyPage = {
// ============================================================
// MONEY PAGE (MP)
// DETAIL COMMERCIAL / PRICING / DETAIL INTENT
// ============================================================
"https://www.betonjayareadymix.com/2019/02/harga-sewa-mesin-compressor.html":
  "Harga Sewa Mesin Compressor"

};
const urlMappingSewaCuttingBetonFromMoneyMaster1MoneyPage = {
// ============================================================
// MONEY PAGE (MP)
// DETAIL COMMERCIAL / PRICING / DETAIL INTENT
// ============================================================
"https://www.betonjayareadymix.com/2019/02/harga-sewa-mesin-cutting-beton.html":
  "Harga Sewa Mesin Cutting Beton"
};
const urlMappingSewaMesinPotongRumputFromMoneyMaster1MoneyPage = {
// ============================================================
// MONEY PAGE (MP)
// DETAIL COMMERCIAL / PRICING / DETAIL INTENT
// ============================================================
"https://www.betonjayareadymix.com/2019/02/harga-sewa-mesin-potong-rumput.html":
  "Harga Sewa Mesin Potong Rumput"
};
const urlMappingSewaMesinTrowelFromMoneyMaster1MoneyPage = {
// ============================================================
// MONEY PAGE (MP)
// DETAIL COMMERCIAL / PRICING / DETAIL INTENT
// ============================================================
"https://www.betonjayareadymix.com/2019/02/harga-sewa-mesin-trowel.html":
  "Harga Sewa Mesin Trowel"

};
const urlMappingSewaMesinScreedFromMoneyMaster1MoneyPage = {
// ============================================================
// MONEY PAGE (MP)
// DETAIL COMMERCIAL / PRICING / DETAIL INTENT
// ============================================================

"https://www.betonjayareadymix.com/2019/02/harga-sewa-mesin-screed.html":
  "Harga Sewa Mesin Screed"

};
const urlMappingSewaStamperFromMoneyMaster1MoneyPage = {
// ============================================================
// MONEY PAGE (MP)
// DETAIL COMMERCIAL / PRICING / DETAIL INTENT
// ============================================================
"https://www.betonjayareadymix.com/2019/02/harga-sewa-stamper.html":
  "Harga Sewa Stamper"

};

const urlMappingSewaCuttingBetonFromMoneyMaster1MoneyChild = {
  "https://www.betonjayareadymix.com/2019/02/sewa-cutting-beton-terdekat.html":
  "Sewa Cutting Beton Terdekat"
};
// ============================================================
// 🔴 BREADCRUMB SKIP LEVEL NOTES
// ============================================================
/*
📌 BREADCRUMB SKIP LEVEL YANG DIPERBOLEHKAN:

Untuk semua MONEY_PAGE, MONEY_CHILD, dan MONEY_MASTER di atas:
- Skip: "Sewa Alat Konstruksi" (PILLAR) dan "Sewa Alat Proyek" (SUB2)
- Karena halaman tersebut hanya sebagai pengelompokan, tidak perlu muncul di breadcrumb

Breadcrumb yang benar:
Home > Sewa Alat Proyek > Pompa Dewatering (3 level)
Home > Sewa Alat Berat > Excavator (3 level)
Home > Sewa Alat Berat > Jakarta (3 level)
Home > Sewa Alat Ringan > Stamper (3 level)

✅ SEMUA URL di atas sudah valid sesuai entity type SEWA/RENTAL
✅ MONEY_MASTER diperbolehkan untuk SEWA (berbeda dengan JASA)
✅ Tidak ada duplikasi konten berisiko tinggi
✅ Aman untuk SEO
*/

// ============================================================
// 📋 RINGKASAN TYPE YANG DIGUNAKAN (SELURUH FILE)
// ============================================================
/*
Type			Jumlah Item	Keterangan
PILLAR			1			Halaman utama Sewa Alat Konstruksi
SUB2			3			Kategori (Proyek, Berat, Ringan)
MONEY_PAGE		~40			Sewa alat spesifik (transaksional 85%)
MONEY_CHILD		~80			Sewa alat per lokasi (transaksional 90%)
MONEY_MASTER	~45			Harga sewa nasional (transaksional 80%) - BOLEH untuk SEWA
REDIRECT		5			Duplikasi, perlu 301 redirect

✅ ENTITY TYPE: SEWA/RENTAL - semua type di atas VALID
❌ JASA - tidak ada di file ini (berbeda entity)
*/ 

/**
 * ============================================================
 * generateBreadcrumbJasaKonstruksi v8.7 FINAL
 * UNIVERSAL ENTITY HIERARCHY ENGINE - FIXED SAME LEVEL PARENT
 * ============================================================
 *
 * ✅ UPDATE v8.7
 * ------------------------------------------------------------
 * - FIX: Parent dengan level SAMA dengan current page TIDAK SKIP
 * - FIX: MM → MM (level 4→4) sekarang berfungsi
 * - FIX: MP → MP (level 5→5) sekarang berfungsi
 * - Hapus filter level yang membatasi parent dengan level sama
 * - Enhanced logging untuk debugging
 *
 * ✅ UPDATE v8.6
 * ------------------------------------------------------------
 * - FIX: Current page TIDAK ikut terpilih sebagai parent
 * - Filter current page dari lineage sebelum cari parent terdekat
 *
 * ============================================================
 * @version 8.7.0 FINAL
 * @date 2026-05-24
 * ============================================================
 */

function generateBreadcrumbJasaAlatKonstruksiPost(
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
        const icons = { INFO: '📘', SUCCESS: '✅', WARN: '⚠️', ERROR: '❌', DEBUG: '🔍' };
        console.log(`${icons[type] || '📘'} [Breadcrumb v8.7] ${message}`);
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
        path = path.replace(/^\/p\//, '');
        path = path.replace(/\/\d{4}\/\d{2}\/\d{2}\//g, '/');
        path = path.replace(/\/\d{4}\/\d{2}\//g, '/');
        path = path.replace(/\/\d{4}\//g, '/');

        const parts = path.split('/').filter(Boolean);
        let last = parts.pop() || '';
        last = last.replace(/-/g, ' ');
        last = last.replace(/[^a-z0-9\s]/gi, '');

        return cleanText(last.toLowerCase());
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

    const VARIANT_KEYWORDS = [
        'spesifikasi', 'spec', 'kapasitas', 'dimensi', 'ukuran', 'mutu', 'grade', 'type', 'tipe'
    ];

    const SPECIFIC_MODIFIERS = [
        'k225', 'k250', 'k300', 'm6', 'm8', 'm10',
        'diesel', 'hidrolik', 'mini pile', 'sheet pile', 'drop hammer',
        'breaker', 'long arm', 'vibrator', 'per jam', 'per hari',
        'per meter', 'per m2', 'terdekat', 'murah', 'kapasitas besar'
    ];

    // ============================================================
    // 12. LOCATION DETECTION
    // ============================================================

    const LOCATION_WHITELIST = new Set([
        'jakarta', 'bogor', 'depok', 'tangerang', 'bekasi',
        'bandung', 'karawang', 'purwakarta', 'cikarang', 'subang',
        'cirebon', 'semarang', 'surabaya', 'solo', 'jogja',
        'yogyakarta', 'medan', 'makassar', 'bali', 'denpasar', 'terdekat'
    ]);

    function isLocation(text) {
        if (!text) return false;
        const lower = text.toLowerCase();
        for (const city of LOCATION_WHITELIST) {
            if (new RegExp(`\\b${city}\\b`, 'i').test(lower)) return true;
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
    // 17. PAGE TYPE DETECTION
    // ============================================================

    function detectPageType(pageName, isHome = false) {
        const lowerName = cleanText(pageName.toLowerCase());

        if (isHome || lowerName === 'home' || lowerName === 'beranda') return 'home';
        if (isEntityPillarExactMatch(lowerName)) return 'pillar';
        if (isSubVariant(lowerName)) return 'sub-variant';

        for (const kw of VARIANT_KEYWORDS) {
            if (lowerName.includes(kw)) return 'variant';
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

        if (HAS_LOCATION) return 'money-child';

        if (isSewaEntity() && HAS_SEWA_WORD && !HAS_PRICE_WORD) {
            const cleaned = lowerName.replace(/\b(sewa|rental)\b/gi, '').trim();
            const words = cleaned.split(/\s+/).filter(Boolean);
            const specific = isSpecificProduct(cleaned);
            if (words.length <= 2 && !specific && !isLocation(cleaned)) {
                return 'money-master';
            }
            return 'money-page';
        }

        if (isJasaEntity() && HAS_JASA_WORD && !HAS_PRICE_WORD) {
            let cleaned = lowerName;
            const jasaCleanList = ['jasa', 'kontraktor', 'tukang', 'borongan', 'renovasi', 'pasang', 'bangun', 'perbaikan', 'instalasi', 'proyek', 'cor', 'gali', 'urug', 'angkut'];
            for (const kw of jasaCleanList) {
                cleaned = cleaned.replace(new RegExp(`\\b${kw}\\b`, 'gi'), '');
            }
            cleaned = cleaned.trim();
            const words = cleaned.split(/\s+/).filter(Boolean);
            const specific = isSpecificProduct(cleaned);
            if (words.length <= 2 && !specific && !isLocation(cleaned)) {
                return 'money-master';
            }
            return 'money-page';
        }

        if (HAS_PRICE_WORD) {
            const cleaned = lowerName.replace(/\b(harga|biaya|tarif)\b/gi, '').trim();
            const words = cleaned.split(/\s+/).filter(Boolean);
            const specific = isSpecificProduct(cleaned);
            if (words.length <= 2 && !specific && !isLocation(cleaned)) {
                return 'money-master';
            }
            return 'money-page';
        }

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
    // 19. FORCE PARENT INJECTION
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

        // FORCE PARENT UNTUK MP (Level 5)
        const currentLevel = TYPE_LEVEL_MAP[detectPageType(currentPageTitle)] || 99;
        if (currentLevel === 5) {
            const allMMParents = allLevels.filter(item => 
                item.level === 4 && !modifiedLineage.some(l => l.name === item.name)
            );
            for (const mmParent of allMMParents) {
                log(`FORCE MP PARENT: "${mmParent.name}" (level 4) → MP "${currentPageTitle}"`, 'SUCCESS');
                modifiedLineage.push(mmParent);
            }
        }

        // STRATEGI 3: Semantic similarity (opsional)
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
                        log(`SEMANTIC PARENT: "${parentItem.name}"`, 'SUCCESS');
                        modifiedLineage.push(parentItem);
                        break;
                    }
                }
            }
        }

        // STRATEGI 4: Last resort
        if (modifiedLineage.length === lineageLevels.length && allLevels.length > 0) {
            const lowerLevelItems = allLevels.filter(item => 
                item.level < currentLevel && 
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
    // 21. GET CURRENT PAGE INFO
    // ============================================================

    const currentFullUrl = currentUrl.startsWith('http')
        ? currentUrl
        : CONFIG.DOMAIN + currentUrl;

    let currentPageTitle = getCleanPageNameFromUrl(currentFullUrl);

    if (!currentPageTitle) {
        currentPageTitle = 'Halaman';
    }

    // ============================================================
    // 22. INJECT CURRENT PAGE & AUTO PARENT
    // ============================================================

    const enhancedBreadcrumbItems = injectCurrentPageAndParent(
        breadcrumbItems,
        currentPageTitle,
        currentFullUrl
    );

    // ============================================================
    // 23. BUILD ALL LEVELS
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
    // 24. URL FALLBACK
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
    // 25. CURRENT PAGE TYPE
    // ============================================================

    const currentPageType = detectPageType(currentPageTitle);
    log(`Current page: "${currentPageTitle}" → type: ${currentPageType} (level ${TYPE_LEVEL_MAP[currentPageType]})`, 'INFO');

    // ============================================================
    // 26. SELECT BREADCRUMB LEVELS
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

    // UNIQUE HIERARCHY
    const uniqueHierarchy = [];
    const usedHierarchy = new Set();

    for (const item of allLevels) {
        const key = item.name.toLowerCase();
        if (usedHierarchy.has(key)) continue;
        usedHierarchy.add(key);
        uniqueHierarchy.push(item);
    }

    log('=== ALL LEVELS DEBUG ===', 'DEBUG');
    for (const level of allLevels) {
        log(`  ${level.name} → type: ${level.type}, level: ${level.level}`, 'DEBUG');
    }

    log('Unique hierarchy items (' + uniqueHierarchy.length + '): ' + uniqueHierarchy.map(i => i.name + '(' + i.type + ')').join(' → '), 'INFO');

    // ========================================================
    // FIND NEAREST PARENTS (FIXED v8.7 - IZINKAN LEVEL SAMA)
    // ========================================================
    
    function findNearestParentsByHierarchy() {
        const lineage = [];
        const currentLevel = TYPE_LEVEL_MAP[currentPageType] || 99;
        
        log(`Current level: ${currentLevel}`, 'DEBUG');
        
        // Ambil SEMUA candidate dengan level <= currentLevel
        const candidates = uniqueHierarchy.filter(item => item.level <= currentLevel);
        
        log('Candidates (level <= current): ' + candidates.map(i => i.level + ':' + i.name).join(', '), 'DEBUG');
        
        if (candidates.length === 0) return lineage;
        
        // Prioritaskan level tertinggi
        const sortedByLevelDesc = [...candidates].sort((a, b) => b.level - a.level);
        
        const seenLevels = new Set();
        const prioritized = [];
        
        for (const item of sortedByLevelDesc) {
            if (!seenLevels.has(item.level)) {
                seenLevels.add(item.level);
                prioritized.push(item);
            }
        }
        
        const sortedLineage = prioritized.sort((a, b) => a.level - b.level);
        
        // ✅ FIX v8.7: Langsung tambahkan semua, tanpa filter level
        // Parent dengan level SAMA dengan current page TETAP MASUK
        for (const item of sortedLineage) {
            // Hindari duplikat nama
            if (!lineage.some(l => l.name === item.name)) {
                lineage.push(item);
            }
        }
        
        log('Lineage (prioritized): ' + lineage.map(i => i.level + ':' + i.name).join(' → '), 'SUCCESS');
        
        return lineage;
    }

    let lineageLevels = findNearestParentsByHierarchy();

    log('Initial lineage (' + lineageLevels.length + '): ' + lineageLevels.map(i => i.name + '(' + i.type + ')').join(' → '), 'INFO');

    lineageLevels = forceInjectDirectParent(
        lineageLevels, 
        uniqueHierarchy, 
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
    // SOLUSI v8.7: HANYA PARENT (BUKAN CURRENT PAGE)
    // ========================================================
    
    let finalParents = [];

    // Filter untuk menghilangkan current page dari lineage
    const parentOnly = validatedLineage.filter(item => 
        item.name.toLowerCase() !== currentPageTitle.toLowerCase()
    );

    if (parentOnly.length > 0) {
        // Cari level tertinggi dari parent (bukan current page)
        const highestLevel = Math.max(...parentOnly.map(i => i.level));
        
        // Ambil hanya parent dengan level tertinggi
        finalParents = parentOnly.filter(item => item.level === highestLevel);
        
        // Urutkan berdasarkan posisi
        finalParents.sort((a, b) => a.position - b.position);
        
        log('Nearest parent(s) level ' + highestLevel + ': ' + finalParents.map(i => i.name).join(', '), 'SUCCESS');
    } else {
        log('No parent found (only current page)', 'WARN');
    }

    // INSERT PARENTS (hanya parent terdekat)
    for (const item of finalParents) {
        selectedLevels.push(item);
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
    // 27. FINAL UNIQUE LEVELS
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

    log('Final breadcrumb (' + uniqueLevels.length + ' levels): ' + uniqueLevels.map(i => i.name).join(' › '), 'SUCCESS');

    // ============================================================
    // 28. GENERATE HTML
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
    // 29. JSON LD
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
    // 30. REMOVE OLD
    // ============================================================

    document.querySelectorAll('.breadcrumbs, .breadcrumb-nav, [aria-label="Breadcrumb"]')
        .forEach(el => el.remove());
    document.querySelectorAll('script[data-breadcrumb="true"]')
        .forEach(el => el.remove());

    // ============================================================
    // 31. TARGET ELEMENT
    // ============================================================

    const targetElement = document.querySelector('main, article, .content, #main-content, .post-content');

    // ============================================================
    // 32. INJECT HTML
    // ============================================================

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
    // 34. RETURN
    // ============================================================

    return {
        html: breadcrumbHtml,
        jsonLd,
        selectedLevels: uniqueLevels,
        currentPageType,
        entityType,
        version: '8.7.0 FINAL',
        maxLevel: 'NONE (nearest parent only)'
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
let removedElementsJasaKonsAlatKonstruksiPost = {};
// Fungsi untuk menghapus elemen berdasarkan ID
function removeCondition(conditionId) {
    const conditionElement = document.getElementById(conditionId);

    if (conditionElement) {
        // Menyimpan elemen yang dihapus dalam objek untuk bisa dikembalikan
        removedElementsJasaKonsAlatKonstruksiPost[conditionId] = conditionElement;
        conditionElement.remove(); // Menghapus elemen tersebut
    }
}

// Fungsi untuk mengembalikan elemen yang telah dihapus
function restoreCondition(conditionId) {
    const breadcrumb = document.querySelector('.breadcrumb');
    const elementToRestore = removedElementsJasaKonsAlatKonstruksiPost[conditionId]; // Mendapatkan elemen yang disimpan

    if (elementToRestore) {
        breadcrumb.appendChild(elementToRestore); // Menambahkan elemen kembali ke dalam breadcrumb
        delete removedElementsJasaKonsAlatKonstruksiPost[conditionId]; // Menghapus elemen dari objek setelah dikembalikan
    } else {
        console.log(`Elemen dengan ID ${conditionId} tidak ditemukan di removedElementsJasaKonsAlatKonstruksiPost.`);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    // var currentUrl = window.location.href;
     //const cleanUrl = currentUrl.split('?')[0]; // Menghapus parameter seperti ?m=1
    const cleanUrlJasaKonsAlatKonstruksiPost = window.location.href.split(/[?#]/)[0]; // Menghilangkan parameter seperti ?m=1
    // Ambil nama dari URL (panggil fungsi yang sama)
let currentPageTitle = cleanUrlJasaKonsAlatKonstruksiPost
    .split('/').pop()
    .replace('.html', '')
    .replace(/-/g, ' ');
// Hasil: 'sewa bor tanah'
	 // --- gabungkan semua mapping ---
    const urlMappingGabungan = Object.assign(
      {},
		urlMappingJasaAlatKonstruksiBridgeFromSub2Sub1MoneyPageMoneyChild,
		urlMappingJasaAlatKonstruksiBridgeFromSub2Sub1MoneyPageMoneyChildVariant,
		urlMappingJasaAlatKonstruksiBridgeFromSub2Sub1MoneyPageMoneyChildVariantSubVariant,
		urlMappingSewaAlatProyekFromMoneyMasterMoneyPage,
		urlMappingSewaPompaDewateringFromMoneyMaster1MoneyPage,
		urlMappingSewaPompaAirFromMoneyMaster1MoneyPage,
		urlMappingSewaPompaLumpurFromMoneyMaster1MoneyPage,
		urlMappingSewaBekistingFromMoneyMasterMoneyPage,
		urlMappingSewaPencahayaanProyekFromMoneyMasterMoneyMaster1,
		urlMappingSewaAlatSurveyFromMoneyMasterMoneyMaster1,
		urlMappingSewaAlatBorFromMoneyMasterMoneyMaster1,
		urlMappingSewaTangkiAirFromMoneyMasterMoneyMaster1,
		urlMappingSewaAksesKeamananProyekFromMoneyMasterMoneyMaster1,
		urlMappingSewaSelangProyekFromMoneyMasterMoneyMaster1,
		urlMappingSewaPipaProyekFromMoneyMasterMoneyMaster1,
		
		
		urlMappingSewaAlatProyekFromMoneyMasterMoneyChild,
		urlMappingSewaPompaDewateringFromMoneyPageMoneyChild,
		urlMappingSewaPompaDewateringFromMoneyChildVariant,
		urlMappingSewaPompaAirDieselFromMoneyMaster1MoneyChild,
		urlMappingSewaPompaAirDieselFromMoneyMaster1Variant,
		urlMappingSewaPompaAirFromMoneyMasterMoneyChild,
		urlMappingSewaMesinPompaAirFromMoneyChildVariant,
		urlMappingSewaPompaLumpurFromMoneyMasterMoneyChild,
		urlMappingSewaPompaLumpurFromMoneyChildVariant,
		urlMappingSewaPompaSedotLumpurFromMoneyMaster1MoneyChild,
		urlMappingSewaPompaSedotLumpurFromMoneyChildVariant,
		urlMappingSewaPompaBanjirFromMoneyMaster1MoneyChild,
		urlMappingSewaPompaBanjirFromMoneyChildVariant,
		urlMappingSewaPompaKapasitasBesarFromMoneyMaster1MoneyChild,
		urlMappingSewaPompaKapasitasBesarFromMoneyChildVariant,
		urlMappingSewaBakAirProyekFromMoneyMaster1MoneyChild,
		urlMappingSewaBakAirProyekFromMoneyChildVariant,
		urlMappingSewaTangkiAirFromMoneyMasterMoneyChild,
		urlMappingSewaTangkiAirFromMoneyChildVariant,
		urlMappingSewaPipaProyekFromMoneyMasterMoneyChild,
		urlMappingSewaPipaProyekFromMoneyChildVariant,
		urlMappingSewaSelangProyekFromMoneyMasterMoneyChild,
		urlMappingSewaSelangProyekFromMoneyChildVariant,
		
		urlMappingSewaScaffoldingFromMoneyMasterMoneyPage,
		urlMappingSewaTowerLampFromMoneyMaster1MoneyChild,
		urlMappingSewaAlatSurveyFromMoneyMasterMoneyChild,
		urlMappingSewaTotalStationFromMoneyMaster1MoneyChild,
		urlMappingSewaWaterpassFromMoneyMaster1MoneyChild,
		urlMappingSewaTheodoliteFromMoneyMaster1MoneyChild,
	
		urlMappingSewaAlatBorFromMoneyMasterMoneyPage,
		
        urlMappingSewaAlatBeratPostFromMoneyMasterMoneyMaster1,
		urlMappingSewaAlatBeratPostFromMoneyMasterMoneyPage,
		urlMappingSewaAlatBeratPostFromMoneyMasterMoneyChild,
		
		urlMappingSewaforkliftPostFromMoneyMasterMoneyPage,
		urlMappingSewaCranePostFromMoneyMasterMoneyPage,
		urlMappingSewaSelfLoaderPostFromMoneyMasterMoneyPage,
		urlMappingSewaWheelLoaderPostFromMoneyMasterMoneyPage,
        urlMappingSewaVibroRollerPostFromMoneyMasterMoneyPage,
		urlMappingSewaWalesStoomPostFromMoneyMasterMoneyPage,
		urlMappingSewaTandemRollerPostFromMoneyMasterMoneyPage,
        urlMappingSewaBulldozerPostFromMoneyMasterMoneyPage,
		urlMappingSewaExcavatorPostFromMoneyMasterMoneyPage,
		urlMappingSewaExcavatorPostFromMoneyPageMoneyChild,
		
        urlMappingSewaBackhoeLoaderPostFromMoneyMasterMoneyPage,
		urlMappingSewaBabyRollerPostFromMoneyMasterMoneyPage,
        urlMappingSewaMotorGraderPostFromMoneyMasterMoneyPage,
		urlMappingSewaAlatPancangPostFromMoneyMasterMoneyPage,
		urlMappingSewaConcretePaverPostFromMoneyMasterMoneyPage,
		urlMappingSewaTrencherPostFromMoneyMasterMoneyPage,

		urlMappingSewaConcreteCutterFromMoneyMasterMoneyPage
	
    );
	
    // --- validasi URL terdaftar ---
    if (!urlMappingGabungan[cleanUrlJasaKonsAlatKonstruksiPost]) {
      console.log(`[DateModified] URL jasa-alat-konstruksi-post.js tidak terdaftar: ${cleanUrlJasaKonsAlatKonstruksiPost}`);
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
    var JasaKonsAlatKonstruksiPost = document.getElementById("JasaKonsAlatKonstruksiPost");

    if (!JasaKonsAlatKonstruksiPost) {
        console.error("elemen Id JasaKonsAlatKonstruksiPost kondisi terhapus");
        return;
    }
     var JasaKonstruksiAlatKonstruksiPostLink = document.getElementById("JasaKonstruksiAlatKonstruksiPost");
     var JasaAlatKonstruksiPostLink = document.getElementById("JasaAlatKonstruksiPost");
var EstimasiBiayaJasaAlatKonstruksiPostLink  = document.getElementById("EstimasiBiayaJasaAlatKonstruksiPost");
var EstimasiBiayaJasaAlatKonstruksiJakartaPostLink  = document.getElementById("EstimasiBiayaJasaAlatKonstruksiJakartaPost");
var EstimasiBiayaasaAlatKonstruksiBogorPostLink  = document.getElementById("EstimasiBiayaasaAlatKonstruksiBogorPost");
var EstimasiBiayaJasaAlatKonstruksiDepokPostLink  = document.getElementById("EstimasiBiayaJasaAlatKonstruksiDepokPost");
var EstimasiBiayaJasaAlatKonstruksiTangerangPostLink  = document.getElementById("EstimasiBiayaJasaAlatKonstruksiTangerangPost");
var EstimasiBiayaJasaAlatKonstruksiBekasiPostLink  = document.getElementById("EstimasiBiayaJasaAlatKonstruksiBekasiPost");
var EstimasiBiayaJasaAlatKonstruksiKarawangPostLink  = document.getElementById("EstimasiBiayaJasaAlatKonstruksiKarawangPost");
var EstimasiBiayaJasaAlatKonstruksiBandungPostLink  = document.getElementById("EstimasiBiayaJasaAlatKonstruksiBandungPost");
var EstimasiBiayaJasaAlatKonstruksiSurabayaPostLink  = document.getElementById("EstimasiBiayaJasaAlatKonstruksiSurabayaPost");

var JasaAlatKonstruksiOperatorBersertifikatPostLink  = document.getElementById("JasaAlatKonstruksiOperatorBersertifikatPost");
var JasaAlatKonstruksiMetodeLemburPostLink  = document.getElementById("JasaAlatKonstruksiMetodeLemburPost");
var JasaAlatKonstruksiTermasukBahanBakarPostLink  = document.getElementById("JasaAlatKonstruksiTermasukBahanBakarPost");
	
     var SewaAlatProyekPostLink = document.getElementById("SewaAlatProyekPost");
		 var SewaAlatProyekPompaDewateringPostLink = document.getElementById("SewaAlatProyekPompaDewateringPost");
		 var SewaAlatProyekBekistingScaffoldingPostLink = document.getElementById("SewaAlatProyekBekistingScaffoldingPost");
		 var SewaAlatProyekPencahayaanUtilitasPostLink = document.getElementById("SewaAlatProyekPencahayaanUtilitasPost");
		 var SewaAlatProyekSurveyPengukuranPostLink = document.getElementById("SewaAlatProyekSurveyPengukuranPost");
	         	var SewaAlatProyekSurveyPengukuranTotalStationPostLink = document.getElementById("SewaAlatProyekSurveyPengukuranTotalStationPost");
				var SewaAlatProyekSurveyPengukuranWaterpassPostLink = document.getElementById("SewaAlatProyekSurveyPengukuranWaterpassPost");
				var SewaAlatProyekSurveyPengukuranTheodolitePostLink = document.getElementById("SewaAlatProyekSurveyPengukuranTheodolitePost");
		 var SewaAlatProyekAksesKeamananPostLink = document.getElementById("SewaAlatProyekAksesKeamananPost");
		 var SewaAlatProyekBorGroundWorkPostLink = document.getElementById("SewaAlatProyekBorGroundWorkPost");
		 var SewaAlatProyekSistemPendukungPostLink = document.getElementById("SewaAlatProyekSistemPendukungPost");

     var SewaAlatKonstruksiPostLink = document.getElementById("SewaAlatKonstruksiPost");
     var SewaAlatBeratPostLink = document.getElementById("SewaAlatBeratPost");
        var SewaForkliftPostLink = document.getElementById("SewaForkliftPost");
        var SewaCranePostLink = document.getElementById("SewaCranePost");
        var SewaSelfLoaderPostLink = document.getElementById("SewaSelfLoaderPost");
        var SewaWheelLoaderPostLink = document.getElementById("SewaWheelLoaderPost");
        var SewaVibroRollerPostLink = document.getElementById("SewaVibroRollerPost");
        var SewaWalesStoomPostLink = document.getElementById("SewaWalesStoomPost");
        var SewaTandemRollerPostLink = document.getElementById("SewaTandemRollerPost");
        var SewaBulldozerPostLink = document.getElementById("SewaBulldozerPost");
        var SewaExcavatorPostLink = document.getElementById("SewaExcavatorPost");
        var SewaBackhoeLoaderPostLink = document.getElementById("SewaBackhoeLoaderPost");
        var SewaConcretePaverPostLink = document.getElementById("SewaConcretePaverPost");
        var SewaTrencherPostLink = document.getElementById("SewaTrencherPost");
	var SewaBabyRollerPostLink = document.getElementById("SewaBabyRollerPost");
	var SewaAlatPancangPostLink = document.getElementById("SewaAlatPancangPost");
	var SewaMotorGraderPostLink = document.getElementById("SewaMotorGraderPost");
	
        
     var SewaAlatKonstruksiRinganPostLink = document.getElementById("SewaAlatKonstruksiRinganPost");

     var pageNameJasaKonsAlatKonstruksiPost = document.getElementById("pageNameJasaKonsAlatKonstruksiPost");
    

     // Default untuk menyembunyikan elemen
     JasaKonstruksiAlatKonstruksiPostLink.style.visibility = 'hidden';
     JasaAlatKonstruksiPostLink.style.visibility = 'hidden';
     SewaAlatProyekPostLink.style.visibility = 'hidden';
		SewaAlatProyekPompaDewateringPostLink.style.visibility = 'hidden';
		SewaAlatProyekBekistingScaffoldingPostLink.style.visibility = 'hidden';
		SewaAlatProyekPencahayaanUtilitasPostLink.style.visibility = 'hidden';
		SewaAlatProyekSurveyPengukuranPostLink.style.visibility = 'hidden';
		SewaAlatProyekAksesKeamananPostLink.style.visibility = 'hidden';
		SewaAlatProyekBorGroundWorkPostLink.style.visibility = 'hidden';
		SewaAlatProyekSistemPendukungPostLink.style.visibility = 'hidden';
     SewaAlatKonstruksiPostLink.style.visibility = 'hidden';
     SewaAlatBeratPostLink.style.visibility = 'hidden';
	SewaForkliftPostLink.style.visibility = 'hidden';
        SewaCranePostLink.style.visibility = 'hidden';
        SewaSelfLoaderPostLink.style.visibility = 'hidden';
        SewaWheelLoaderPostLink.style.visibility = 'hidden';
        SewaVibroRollerPostLink.style.visibility = 'hidden';
        SewaWalesStoomPostLink.style.visibility = 'hidden';
        SewaTandemRollerPostLink.style.visibility = 'hidden';
        SewaBulldozerPostLink.style.visibility = 'hidden';
        SewaExcavatorPostLink.style.visibility = 'hidden';
	SewaBackhoeLoaderPostLink.style.visibility = 'hidden';
        SewaConcretePaverPostLink.style.visibility = 'hidden';
        SewaTrencherPostLink.style.visibility = 'hidden';
        SewaBabyRollerPostLink.style.visibility = 'hidden';
	SewaAlatPancangPostLink.style.visibility = 'hidden';
	SewaMotorGraderPostLink.style.visibility = 'hidden';
	
     SewaAlatKonstruksiRinganPostLink.style.visibility = 'hidden';
	
     pageNameJasaKonsAlatKonstruksiPost.textContent = "";


   //SUB JasaAlatKonstruksiPost
if (urlMappingJasaAlatKonstruksiBridgeFromSub2Sub1MoneyPageMoneyChild[cleanUrlJasaKonsAlatKonstruksiPost]) {
	//RESTORE CONTAINER
     restoreCondition('JasaKonsAlatKonstruksiPost');
	
	restoreCondition('JasaKonstruksiAlatKonstruksiPost');
    restoreCondition('JasaAlatKonstruksiPost');
    
    restoreCondition('EstimasiBiayaJasaAlatKonstruksiPost');
	//hapus pillar jasa konstruksi
	removeCondition('SewaAlatKonstruksiPost');
	removeCondition('SewaAlatProyekPost');

	//hapus semua entity jasa alat konstruksi
     //removeCondition('EstimasiBiayaJasaAlatKonstruksiPost');
     removeCondition('EstimasiBiayaJasaAlatKonstruksiJakartaPost');
     removeCondition('EstimasiBiayaasaAlatKonstruksiBogorPost');
     removeCondition('EstimasiBiayaJasaAlatKonstruksiDepokPost');
     removeCondition('EstimasiBiayaJasaAlatKonstruksiTangerangPost');
     removeCondition('EstimasiBiayaJasaAlatKonstruksiBekasiPost');
     removeCondition('EstimasiBiayaJasaAlatKonstruksiKarawangPost');
     removeCondition('EstimasiBiayaJasaAlatKonstruksiBandungPost');
     removeCondition('EstimasiBiayaJasaAlatKonstruksiSurabayaPost');
	
     removeCondition('JasaAlatKonstruksiOperatorBersertifikatPost');
     removeCondition('JasaAlatKonstruksiMetodeLemburPost');
     removeCondition('JasaAlatKonstruksiTermasukBahanBakarPost');
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
        removeCondition('JasaKonsPondasiTanahPost');
        removeCondition('JasaKonsPerkuatanTanahLongsorPost');
        removeCondition('JasaKonsPerbaikanPost');
        removeCondition('JasaKonsCuttingBetonPost');
        removeCondition('JasaKonsBongkarBangunanPost');
        removeCondition('JasaKonsPengeboranPost');
        removeCondition('JasaKonsFinishingPost');
        removeCondition('JasaKonsStrukturPost');
        removeCondition('JasaKonsPembatasPost');
        removeCondition('JasaKonsJalanPerkerasanPost');
	
	 //hapus elemen SUB SewaAlatProyekPost 
	  removeCondition('SewaAlatProyekPompaDewateringPost');
	  removeCondition('SewaAlatProyekBekistingScaffoldingPost');
	  removeCondition('SewaAlatProyekPencahayaanUtilitasPost');
	  removeCondition('SewaAlatProyekSurveyPengukuranPost');
	  removeCondition('SewaAlatProyekAksesKeamananPost');
	  removeCondition('SewaAlatProyekBorGroundWorkPost');
	  removeCondition('SewaAlatProyekSistemPendukungPost');

	  		 //HAPUS SEMUA SUB SewaAlatProyekSurveyPengukuranPost
     removeCondition('SewaAlatProyekSurveyPengukuranTotalStationPost');
	 removeCondition('SewaAlatProyekSurveyPengukuranWaterpassPost');
     removeCondition('SewaAlatProyekSurveyPengukuranTheodolitePost');
	
        //hapus elemen SUB JasaAlatKonstruksiPost lain selain SewaAlatProyekPost
        removeCondition('SewaAlatBeratPost');
		 removeCondition('SewaForkliftPost');
		 removeCondition('SewaCranePost');
		 removeCondition('SewaSelfLoaderPost');
		 removeCondition('SewaWheelLoaderPost');
		 removeCondition('SewaVibroRollerPost');
		 removeCondition('SewaWalesStoomPost');
		 removeCondition('SewaTandemRollerPost');
		 removeCondition('SewaBulldozerPost');
		 removeCondition('SewaExcavatorPost');
		 removeCondition('SewaBackhoeLoaderPost');
		 removeCondition('SewaConcretePaverPost');
		 removeCondition('SewaTrencherPost');
		 removeCondition('SewaBabyRollerPost');
		 removeCondition('SewaAlatPancangPost');
		 removeCondition('SewaMotorGraderPost');
	
	
        removeCondition('SewaAlatKonstruksiRinganPost');
	
  
	JasaKonstruksiAlatKonstruksiPostLink.style.visibility = 'visible';
    JasaAlatKonstruksiPostLink.style.visibility = 'visible';
	//TAMPILKAN EstimasiBiayaJasaAlatKonstruksiPost
    EstimasiBiayaJasaAlatKonstruksiPostLink.style.visibility = 'visible';
        pageNameJasaKonsAlatKonstruksiPost.textContent = urlMappingJasaAlatKonstruksiBridgeFromSub2Sub1MoneyPageMoneyChild[cleanUrlJasaKonsAlatKonstruksiPost];
    
		generateBreadcrumbJasaAlatKonstruksiPost(
        urlMappingJasaAlatKonstruksiBridgeFromSub2Sub1MoneyPageMoneyChild,
        cleanUrlJasaKonsAlatKonstruksiPost,
        [
           // { name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Jasa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-alat-konstruksi.html' },
            { name: 'Perbandingan Jasa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-alat-konstruksi.html' },
            { name: 'Estimasi Biaya Jasa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/estimasi-biaya-jasa-alat-konstruksi.html' }
   
		],
        'JASA_KONSTRUKSI'
    );
}

if (urlMappingJasaAlatKonstruksiBridgeFromSub2Sub1MoneyPageMoneyChildVariant[cleanUrlJasaKonsAlatKonstruksiPost]) {
	//RESTORE CONTAINER
     restoreCondition('JasaKonsAlatKonstruksiPost');
	
	restoreCondition('JasaKonstruksiAlatKonstruksiPost');
    restoreCondition('JasaAlatKonstruksiPost');
    
    restoreCondition('EstimasiBiayaJasaAlatKonstruksiPost');
	//hapus pillar jasa konstruksi
	removeCondition('SewaAlatKonstruksiPost');
	removeCondition('SewaAlatProyekPost');

	//hapus semua entity jasa alat konstruksi
     //removeCondition('EstimasiBiayaJasaAlatKonstruksiPost');
     removeCondition('EstimasiBiayaJasaAlatKonstruksiJakartaPost');
     removeCondition('EstimasiBiayaasaAlatKonstruksiBogorPost');
     removeCondition('EstimasiBiayaJasaAlatKonstruksiDepokPost');
     removeCondition('EstimasiBiayaJasaAlatKonstruksiTangerangPost');
     removeCondition('EstimasiBiayaJasaAlatKonstruksiBekasiPost');
     removeCondition('EstimasiBiayaJasaAlatKonstruksiKarawangPost');
     removeCondition('EstimasiBiayaJasaAlatKonstruksiBandungPost');
     removeCondition('EstimasiBiayaJasaAlatKonstruksiSurabayaPost');
	
     removeCondition('JasaAlatKonstruksiOperatorBersertifikatPost');
     removeCondition('JasaAlatKonstruksiMetodeLemburPost');
     removeCondition('JasaAlatKonstruksiTermasukBahanBakarPost');
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
        removeCondition('JasaKonsPondasiTanahPost');
        removeCondition('JasaKonsPerkuatanTanahLongsorPost');
        removeCondition('JasaKonsPerbaikanPost');
        removeCondition('JasaKonsCuttingBetonPost');
        removeCondition('JasaKonsBongkarBangunanPost');
        removeCondition('JasaKonsPengeboranPost');
        removeCondition('JasaKonsFinishingPost');
        removeCondition('JasaKonsStrukturPost');
        removeCondition('JasaKonsPembatasPost');
        removeCondition('JasaKonsJalanPerkerasanPost');
	
	 //hapus elemen SUB SewaAlatProyekPost 
	  removeCondition('SewaAlatProyekPompaDewateringPost');
	  removeCondition('SewaAlatProyekBekistingScaffoldingPost');
	  removeCondition('SewaAlatProyekPencahayaanUtilitasPost');
	  removeCondition('SewaAlatProyekSurveyPengukuranPost');
	  removeCondition('SewaAlatProyekAksesKeamananPost');
	  removeCondition('SewaAlatProyekBorGroundWorkPost');
	  removeCondition('SewaAlatProyekSistemPendukungPost');

	  		 //HAPUS SEMUA SUB SewaAlatProyekSurveyPengukuranPost
     removeCondition('SewaAlatProyekSurveyPengukuranTotalStationPost');
	 removeCondition('SewaAlatProyekSurveyPengukuranWaterpassPost');
     removeCondition('SewaAlatProyekSurveyPengukuranTheodolitePost');
	
        //hapus elemen SUB JasaAlatKonstruksiPost lain selain SewaAlatProyekPost
        removeCondition('SewaAlatBeratPost');
		 removeCondition('SewaForkliftPost');
		 removeCondition('SewaCranePost');
		 removeCondition('SewaSelfLoaderPost');
		 removeCondition('SewaWheelLoaderPost');
		 removeCondition('SewaVibroRollerPost');
		 removeCondition('SewaWalesStoomPost');
		 removeCondition('SewaTandemRollerPost');
		 removeCondition('SewaBulldozerPost');
		 removeCondition('SewaExcavatorPost');
		 removeCondition('SewaBackhoeLoaderPost');
		 removeCondition('SewaConcretePaverPost');
		 removeCondition('SewaTrencherPost');
		 removeCondition('SewaBabyRollerPost');
		 removeCondition('SewaAlatPancangPost');
		 removeCondition('SewaMotorGraderPost');
	
	
        removeCondition('SewaAlatKonstruksiRinganPost');
	
  
	JasaKonstruksiAlatKonstruksiPostLink.style.visibility = 'visible';
    JasaAlatKonstruksiPostLink.style.visibility = 'visible';
	//TAMPILKAN EstimasiBiayaJasaAlatKonstruksiPost
    EstimasiBiayaJasaAlatKonstruksiPostLink.style.visibility = 'visible';
        pageNameJasaKonsAlatKonstruksiPost.textContent = urlMappingJasaAlatKonstruksiBridgeFromSub2Sub1MoneyPageMoneyChildVariant[cleanUrlJasaKonsAlatKonstruksiPost];
   /* Variant ga penting buat seo
		generateBreadcrumbJasaAlatKonstruksiPost(
        urlMappingJasaAlatKonstruksiBridgeFromSub2Sub1MoneyPageMoneyChildVariant,
        cleanUrlJasaKonsAlatKonstruksiPost,
        [
           // { name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Jasa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-alat-konstruksi.html' },
            { name: 'Estimasi Biaya Jasa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/estimasi-biaya-jasa-alat-konstruksi.html' }
        ],
        'JASA_KONSTRUKSI'
    );*/
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

if (urlMappingJasaAlatKonstruksiBridgeFromSub2Sub1MoneyPageMoneyChildVariantSubVariant[cleanUrlJasaKonsAlatKonstruksiPost]) {
	//RESTORE CONTAINER
     restoreCondition('JasaKonsAlatKonstruksiPost');
	
	restoreCondition('JasaKonstruksiAlatKonstruksiPost');
    restoreCondition('JasaAlatKonstruksiPost');
    restoreCondition('EstimasiBiayaJasaAlatKonstruksiPost');
    restoreCondition('EstimasiBiayaJasaAlatKonstruksiPost');
	
    restoreCondition('EstimasiBiayaJasaAlatKonstruksiPost');
	//hapus pillar jasa konstruksi
	removeCondition('SewaAlatKonstruksiPost');
	removeCondition('SewaAlatProyekPost');

	//hapus semua entity jasa alat konstruksi
     //removeCondition('EstimasiBiayaJasaAlatKonstruksiPost');
     removeCondition('EstimasiBiayaJasaAlatKonstruksiJakartaPost');
     removeCondition('EstimasiBiayaasaAlatKonstruksiBogorPost');
     removeCondition('EstimasiBiayaJasaAlatKonstruksiDepokPost');
     removeCondition('EstimasiBiayaJasaAlatKonstruksiTangerangPost');
     removeCondition('EstimasiBiayaJasaAlatKonstruksiBekasiPost');
     removeCondition('EstimasiBiayaJasaAlatKonstruksiKarawangPost');
     removeCondition('EstimasiBiayaJasaAlatKonstruksiBandungPost');
     removeCondition('EstimasiBiayaJasaAlatKonstruksiSurabayaPost');
	
     removeCondition('JasaAlatKonstruksiOperatorBersertifikatPost');
     removeCondition('JasaAlatKonstruksiMetodeLemburPost');
     removeCondition('JasaAlatKonstruksiTermasukBahanBakarPost');
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
        removeCondition('JasaKonsPondasiTanahPost');
        removeCondition('JasaKonsPerkuatanTanahLongsorPost');
        removeCondition('JasaKonsPerbaikanPost');
        removeCondition('JasaKonsCuttingBetonPost');
        removeCondition('JasaKonsBongkarBangunanPost');
        removeCondition('JasaKonsPengeboranPost');
        removeCondition('JasaKonsFinishingPost');
        removeCondition('JasaKonsStrukturPost');
        removeCondition('JasaKonsPembatasPost');
        removeCondition('JasaKonsJalanPerkerasanPost');
	
	 //hapus elemen SUB SewaAlatProyekPost 
	  removeCondition('SewaAlatProyekPompaDewateringPost');
	  removeCondition('SewaAlatProyekBekistingScaffoldingPost');
	  removeCondition('SewaAlatProyekPencahayaanUtilitasPost');
	  removeCondition('SewaAlatProyekSurveyPengukuranPost');
	  removeCondition('SewaAlatProyekAksesKeamananPost');
	  removeCondition('SewaAlatProyekBorGroundWorkPost');
	  removeCondition('SewaAlatProyekSistemPendukungPost');

	  		 //HAPUS SEMUA SUB SewaAlatProyekSurveyPengukuranPost
     removeCondition('SewaAlatProyekSurveyPengukuranTotalStationPost');
	 removeCondition('SewaAlatProyekSurveyPengukuranWaterpassPost');
     removeCondition('SewaAlatProyekSurveyPengukuranTheodolitePost');
	
        //hapus elemen SUB JasaAlatKonstruksiPost lain selain SewaAlatProyekPost
        removeCondition('SewaAlatBeratPost');
		 removeCondition('SewaForkliftPost');
		 removeCondition('SewaCranePost');
		 removeCondition('SewaSelfLoaderPost');
		 removeCondition('SewaWheelLoaderPost');
		 removeCondition('SewaVibroRollerPost');
		 removeCondition('SewaWalesStoomPost');
		 removeCondition('SewaTandemRollerPost');
		 removeCondition('SewaBulldozerPost');
		 removeCondition('SewaExcavatorPost');
		 removeCondition('SewaBackhoeLoaderPost');
		 removeCondition('SewaConcretePaverPost');
		 removeCondition('SewaTrencherPost');
		 removeCondition('SewaBabyRollerPost');
		 removeCondition('SewaAlatPancangPost');
		 removeCondition('SewaMotorGraderPost');
	
	
        removeCondition('SewaAlatKonstruksiRinganPost');
	
  
	JasaKonstruksiAlatKonstruksiPostLink.style.visibility = 'visible';
    JasaAlatKonstruksiPostLink.style.visibility = 'visible';
	//TAMPILKAN EstimasiBiayaJasaAlatKonstruksiPost
    EstimasiBiayaJasaAlatKonstruksiPostLink.style.visibility = 'visible';
        pageNameJasaKonsAlatKonstruksiPost.textContent = urlMappingJasaAlatKonstruksiBridgeFromSub2Sub1MoneyPageMoneyChildVariantSubVariant[cleanUrlJasaKonsAlatKonstruksiPost];
    /*SubVariant ga penting buat seo
		generateBreadcrumbJasaAlatKonstruksiPost(
        urlMappingJasaAlatKonstruksiBridgeFromSub2Sub1MoneyPageMoneyChildVariantSubVariant,
        cleanUrlJasaKonsAlatKonstruksiPost,
        [
            //{ name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Jasa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-alat-konstruksi.html' },
            { name: 'Estimasi Biaya Jasa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/estimasi-biaya-jasa-alat-konstruksi.html' }
        ],
        'JASA_KONSTRUKSI'
    );
	*/
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
    //SUB SewaAlatKonstruksiPost
if (urlMappingSewaAlatProyekFromMoneyMasterMoneyPage[cleanUrlJasaKonsAlatKonstruksiPost]) {
		generateBreadcrumbJasaAlatKonstruksiPost(
        urlMappingSewaAlatProyekFromMoneyMasterMoneyPage,
        cleanUrlJasaKonsAlatKonstruksiPost,
        [
            //{ name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Sewa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/sewa-alat-konstruksi.html' },
            { name: 'Daftar Sewa Alat Proyek', url: 'https://www.betonjayareadymix.com/p/daftar-sewa-alat-proyek.html' },
            { name: 'Perbandingan Sewa Alat Proyek', url: 'https://www.betonjayareadymix.com/p/perbandingan-sewa-alat-proyek.html' },
            { name: 'Sewa Alat Proyek', url: 'https://www.betonjayareadymix.com/p/sewa-alat-proyek.html' }
        ],
        'SEWA_RENTAL'
    );
}
if (urlMappingSewaPompaDewateringFromMoneyMaster1MoneyPage[cleanUrlJasaKonsAlatKonstruksiPost]) {

			generateBreadcrumbJasaAlatKonstruksiPost(
        urlMappingSewaPompaDewateringFromMoneyMaster1MoneyPage,
        cleanUrlJasaKonsAlatKonstruksiPost,
        [
            //{ name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Sewa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/sewa-alat-konstruksi.html' },
             { name: 'Daftar Sewa Alat Pendukung', url: 'https://www.betonjayareadymix.com/p/daftar-sewa-alat-pendukung.html' },
            { name: 'Perbandingan Sewa Alat Pendukung', url: 'https://www.betonjayareadymix.com/p/perbandingan-sewa-alat-pendukung.html' },
			{ name: 'Sewa Alat Pendukung', url: 'https://www.betonjayareadymix.com/p/sewa-alat-pendukung.html' },
            { name: 'Sewa Pompa Dewatering', url: 'https://www.betonjayareadymix.com/p/sewa-pompa-dewatering.html' }
        ],
        'SEWA_RENTAL'
    );
}
	if (urlMappingSewaPompaAirFromMoneyMaster1MoneyPage[cleanUrlJasaKonsAlatKonstruksiPost]) {

			generateBreadcrumbJasaAlatKonstruksiPost(
        urlMappingSewaPompaAirFromMoneyMaster1MoneyPage,
        cleanUrlJasaKonsAlatKonstruksiPost,
        [
            //{ name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Sewa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/sewa-alat-konstruksi.html' },
             { name: 'Daftar Sewa Alat Pendukung', url: 'https://www.betonjayareadymix.com/p/daftar-sewa-alat-pendukung.html' },
            { name: 'Perbandingan Sewa Alat Pendukung', url: 'https://www.betonjayareadymix.com/p/perbandingan-sewa-alat-pendukung.html' },
			{ name: 'Sewa Alat Pendukung', url: 'https://www.betonjayareadymix.com/p/sewa-alat-pendukung.html' },
            { name: 'Sewa Pompa Air', url: 'https://www.betonjayareadymix.com/p/sewa-pompa-air.html' }
        ],
        'SEWA_RENTAL'
    );
}
		if (urlMappingSewaPompaLumpurFromMoneyMaster1MoneyPage[cleanUrlJasaKonsAlatKonstruksiPost]) {

			generateBreadcrumbJasaAlatKonstruksiPost(
        urlMappingSewaPompaLumpurFromMoneyMaster1MoneyPage,
        cleanUrlJasaKonsAlatKonstruksiPost,
        [
            //{ name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Sewa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/sewa-alat-konstruksi.html' },
            { name: 'Daftar Sewa Alat Pendukung', url: 'https://www.betonjayareadymix.com/p/daftar-sewa-alat-pendukung.html' },
            { name: 'Perbandingan Sewa Alat Pendukung', url: 'https://www.betonjayareadymix.com/p/perbandingan-sewa-alat-pendukung.html' },
			{ name: 'Sewa Alat Pendukung', url: 'https://www.betonjayareadymix.com/p/sewa-alat-pendukung.html' },
            { name: 'Sewa Pompa Lumpur', url: 'https://www.betonjayareadymix.com/p/sewa-pompa-lumpur.html' }
        ],
        'SEWA_RENTAL'
    );
}
	if (urlMappingSewaBekistingFromMoneyMasterMoneyPage[cleanUrlJasaKonsAlatKonstruksiPost]) {

			generateBreadcrumbJasaAlatKonstruksiPost(
        urlMappingSewaBekistingFromMoneyMasterMoneyPage,
        cleanUrlJasaKonsAlatKonstruksiPost,
        [
            //{ name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Sewa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/sewa-alat-konstruksi.html' },
            { name: 'Daftar Sewa Alat Pendukung', url: 'https://www.betonjayareadymix.com/p/daftar-sewa-alat-pendukung.html' },
            { name: 'Perbandingan Sewa Alat Pendukung', url: 'https://www.betonjayareadymix.com/p/perbandingan-sewa-alat-pendukung.html' },
			{ name: 'Sewa Alat Pendukung', url: 'https://www.betonjayareadymix.com/p/sewa-alat-pendukung.html' },
            { name: 'Sewa Bekisting', url: 'https://www.betonjayareadymix.com/p/sewa-bekisting.html' }
        ],
        'SEWA_RENTAL'
    );
}
		if (urlMappingSewaPencahayaanProyekFromMoneyMasterMoneyMaster1[cleanUrlJasaKonsAlatKonstruksiPost]) {

			generateBreadcrumbJasaAlatKonstruksiPost(
        urlMappingSewaPencahayaanProyekFromMoneyMasterMoneyMaster1,
        cleanUrlJasaKonsAlatKonstruksiPost,
        [
            //{ name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Sewa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/sewa-alat-konstruksi.html' },
             { name: 'Daftar Sewa Alat Pendukung', url: 'https://www.betonjayareadymix.com/p/daftar-sewa-alat-pendukung.html' },
            { name: 'Perbandingan Sewa Alat Pendukung', url: 'https://www.betonjayareadymix.com/p/perbandingan-sewa-alat-pendukung.html' },
			{ name: 'Sewa Alat Pendukung', url: 'https://www.betonjayareadymix.com/p/sewa-alat-pendukung.html' },
            { name: 'Sewa Pencahayaan Proyek', url: 'https://www.betonjayareadymix.com/p/sewa-pencahayaan-proyek.html' }
        ],
        'SEWA_RENTAL'
    );
}
	if (urlMappingSewaAlatSurveyFromMoneyMasterMoneyMaster1[cleanUrlJasaKonsAlatKonstruksiPost]) {

			generateBreadcrumbJasaAlatKonstruksiPost(
        urlMappingSewaAlatSurveyFromMoneyMasterMoneyMaster1,
        cleanUrlJasaKonsAlatKonstruksiPost,
        [
            //{ name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Sewa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/sewa-alat-konstruksi.html' },
            { name: 'Daftar Sewa Alat Pendukung', url: 'https://www.betonjayareadymix.com/p/daftar-sewa-alat-pendukung.html' },
            { name: 'Perbandingan Sewa Alat Pendukung', url: 'https://www.betonjayareadymix.com/p/perbandingan-sewa-alat-pendukung.html' },
			{ name: 'Sewa Alat Pendukung', url: 'https://www.betonjayareadymix.com/p/sewa-alat-pendukung.html' },
            { name: 'Sewa Alat Survey', url: 'https://www.betonjayareadymix.com/p/sewa-alat-survey.html' }
        ],
        'SEWA_RENTAL'
    );
}
		
if (urlMappingSewaAlatBorFromMoneyMasterMoneyMaster1[cleanUrlJasaKonsAlatKonstruksiPost]) {
  
	// Cukup ganti URL dan tambahkan di mappingObj
generateBreadcrumbJasaAlatKonstruksiPost(
	urlMappingSewaAlatBorFromMoneyMasterMoneyMaster1,
    cleanUrlJasaKonsAlatKonstruksiPost,
    [
            { name: 'Sewa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/sewa-alat-konstruksi.html' },
             { name: 'Daftar Sewa Alat Pendukung', url: 'https://www.betonjayareadymix.com/p/daftar-sewa-alat-pendukung.html' },
            { name: 'Perbandingan Sewa Alat Pendukung', url: 'https://www.betonjayareadymix.com/p/perbandingan-sewa-alat-pendukung.html' },
		    { name: 'Sewa Alat Pendukung', url: 'https://www.betonjayareadymix.com/p/sewa-alat-pendukung.html' },
            { name: 'Sewa Alat Bor', url: 'https://www.betonjayareadymix.com/p/sewa-alat-bor.html' }
        // Tidak perlu tambah "Sewa Bor Tanah" di sini (auto-inject)
    ],
    'SEWA_ALAT_KONSTRUKSI'
);
}
	if (urlMappingSewaTangkiAirFromMoneyMasterMoneyMaster1[cleanUrlJasaKonsAlatKonstruksiPost]) {

			generateBreadcrumbJasaAlatKonstruksiPost(
        urlMappingSewaTangkiAirFromMoneyMasterMoneyMaster1,
        cleanUrlJasaKonsAlatKonstruksiPost,
        [
            //{ name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Sewa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/sewa-alat-konstruksi.html' },
              { name: 'Daftar Sewa Alat Pendukung', url: 'https://www.betonjayareadymix.com/p/daftar-sewa-alat-pendukung.html' },
            { name: 'Perbandingan Sewa Alat Pendukung', url: 'https://www.betonjayareadymix.com/p/perbandingan-sewa-alat-pendukung.html' },
			{ name: 'Sewa Alat Pendukung', url: 'https://www.betonjayareadymix.com/p/sewa-alat-pendukung.html' },
            { name: 'Sewa Tangki Air', url: 'https://www.betonjayareadymix.com/p/sewa-tangki-air.html' }
        ],
        'SEWA_RENTAL'
    );
}
				
	if (urlMappingSewaAksesKeamananProyekFromMoneyMasterMoneyMaster1[cleanUrlJasaKonsAlatKonstruksiPost]) {

			generateBreadcrumbJasaAlatKonstruksiPost(
        urlMappingSewaAksesKeamananProyekFromMoneyMasterMoneyMaster1,
        cleanUrlJasaKonsAlatKonstruksiPost,
        [
            //{ name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Sewa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/sewa-alat-konstruksi.html' },
              { name: 'Daftar Sewa Alat Pendukung', url: 'https://www.betonjayareadymix.com/p/daftar-sewa-alat-pendukung.html' },
            { name: 'Perbandingan Sewa Alat Pendukung', url: 'https://www.betonjayareadymix.com/p/perbandingan-sewa-alat-pendukung.html' },
			{ name: 'Sewa Alat Pendukung', url: 'https://www.betonjayareadymix.com/p/sewa-alat-pendukung.html' },
            { name: 'Sewa Akses Keamanan', url: 'https://www.betonjayareadymix.com/p/sewa-akses-keamanan.html' }
        ],
        'SEWA_RENTAL'
    );
}
		if (urlMappingSewaSelangProyekFromMoneyMasterMoneyMaster1[cleanUrlJasaKonsAlatKonstruksiPost]) {

			generateBreadcrumbJasaAlatKonstruksiPost(
        urlMappingSewaSelangProyekFromMoneyMasterMoneyMaster1,
        cleanUrlJasaKonsAlatKonstruksiPost,
        [
            //{ name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Sewa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/sewa-alat-konstruksi.html' },
              { name: 'Daftar Sewa Alat Pendukung', url: 'https://www.betonjayareadymix.com/p/daftar-sewa-alat-pendukung.html' },
            { name: 'Perbandingan Sewa Alat Pendukung', url: 'https://www.betonjayareadymix.com/p/perbandingan-sewa-alat-pendukung.html' },
			{ name: 'Sewa Alat Pendukung', url: 'https://www.betonjayareadymix.com/p/sewa-alat-pendukung.html' },
            { name: 'Sewa Selang Proyek', url: 'https://www.betonjayareadymix.com/p/sewa-selang-proyek.html' }
        ],
        'SEWA_RENTAL'
    );
}
	if (urlMappingSewaPipaProyekFromMoneyMasterMoneyMaster1[cleanUrlJasaKonsAlatKonstruksiPost]) {

			generateBreadcrumbJasaAlatKonstruksiPost(
        urlMappingSewaPipaProyekFromMoneyMasterMoneyMaster1,
        cleanUrlJasaKonsAlatKonstruksiPost,
        [
            //{ name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Sewa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/sewa-alat-konstruksi.html' },
            { name: 'Daftar Sewa Alat Pendukung', url: 'https://www.betonjayareadymix.com/p/daftar-sewa-alat-pendukung.html' },
            { name: 'Perbandingan Sewa Alat Pendukung', url: 'https://www.betonjayareadymix.com/p/perbandingan-sewa-alat-pendukung.html' },
			{ name: 'Sewa Alat Pendukung', url: 'https://www.betonjayareadymix.com/p/sewa-alat-pendukung.html' },
            { name: 'Sewa Pipa Proyek', url: 'https://www.betonjayareadymix.com/p/sewa-pipa-proyek.html' }
        ],
        'SEWA_RENTAL'
    );
}	
	
if (urlMappingSewaAlatProyekFromMoneyMasterMoneyChild[cleanUrlJasaKonsAlatKonstruksiPost]) {
		generateBreadcrumbJasaAlatKonstruksiPost(
        urlMappingSewaAlatProyekFromMoneyMasterMoneyChild,
        cleanUrlJasaKonsAlatKonstruksiPost,
        [
            //{ name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Sewa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/sewa-alat-konstruksi.html' },
            { name: 'Daftar Sewa Alat Proyek', url: 'https://www.betonjayareadymix.com/p/daftar-sewa-alat-proyek.html' },
            { name: 'Perbandingan Sewa Alat Proyek', url: 'https://www.betonjayareadymix.com/p/perbandingan-sewa-alat-proyek.html' },
            { name: 'Sewa Alat Proyek', url: 'https://www.betonjayareadymix.com/p/sewa-alat-proyek.html'}
            //{ name: 'Sewa Alat Proyek', url: 'https://www.betonjayareadymix.com/2019/02/sewa-alat-proyek.html'}
        ],
        'SEWA_RENTAL'
    );
}
//SUB SEWA ALAT PROYEK POST
  if (urlMappingSewaPompaDewateringFromMoneyPageMoneyChild[cleanUrlJasaKonsAlatKonstruksiPost]) {
          generateBreadcrumbJasaAlatKonstruksiPost(
        urlMappingSewaPompaDewateringFromMoneyPageMoneyChild,
        cleanUrlJasaKonsAlatKonstruksiPost,
        [
           { name: 'Sewa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/sewa-alat-konstruksi.html' },
            { name: 'Daftar Sewa Alat Pendukung', url: 'https://www.betonjayareadymix.com/p/daftar-sewa-alat-pendukung.html' },
            { name: 'Perbandingan Sewa Alat Pendukung', url: 'https://www.betonjayareadymix.com/p/perbandingan-sewa-alat-pendukung.html' },
			{ name: 'Sewa Alat Pendukung', url: 'https://www.betonjayareadymix.com/p/sewa-alat-pendukung.html' },
			 { name: 'Sewa Pompa Dewatering', url: 'https://www.betonjayareadymix.com/p/sewa-pompa-dewatering.html' }
           // { name: 'Sewa Pompa Dewatering Proyek', url: 'https://www.betonjayareadymix.com/2019/02/sewa-pompa-dewatering-proyek.html' }
        ],
        'SEWA_RENTAL'
    );
  }

if (urlMappingSewaPompaDewateringFromMoneyChildVariant[cleanUrlJasaKonsAlatKonstruksiPost]) {
        pageNameJasaKonsAlatKonstruksiPost.textContent = urlMappingSewaPompaDewateringFromMoneyChildVariant[cleanUrlJasaKonsAlatKonstruksiPost];
    /*
          generateBreadcrumbJasaAlatKonstruksiPost(
        urlMappingSewaPompaDewateringFromMoneyChildVariant,
        cleanUrlJasaKonsAlatKonstruksiPost,
        [
           // { name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Sewa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/sewa-alat-konstruksi.html' },
            { name: 'Sewa Alat Proyek', url: 'https://www.betonjayareadymix.com/p/sewa-alat-proyek.html' },
			{ name: 'Perbandingan Sewa Alat Proyek', url: 'https://www.betonjayareadymix.com/p/perbandingan-sewa-alat-proyek.html' },
            { name: 'Harga Sewa Alat Proyek', url: 'https://www.betonjayareadymix.com/p/harga-sewa-alat-proyek.html' },
            { name: 'Sewa Pompa Dewatering Proyek', url: 'https://www.betonjayareadymix.com/2019/02/sewa-pompa-dewatering-proyek.html' },
            { name: 'Sewa Pompa Dewatering Jakarta', url: 'https://www.betonjayareadymix.com/2019/03/sewa-pompa-dewatering-jakarta.html' }
		],
        'SEWA_RENTAL'
    );*/
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

  if (urlMappingSewaPompaAirDieselFromMoneyMaster1MoneyChild[cleanUrlJasaKonsAlatKonstruksiPost]) {
        //pageNameJasaKonsAlatKonstruksiPost.textContent = urlMappingSewaPompaAirDieselFromMoneyPageMoneyChild[cleanUrlJasaKonsAlatKonstruksiPost];
    
          generateBreadcrumbJasaAlatKonstruksiPost(
        urlMappingSewaPompaAirDieselFromMoneyMaster1MoneyChild,
        cleanUrlJasaKonsAlatKonstruksiPost,
        [
           { name: 'Sewa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/sewa-alat-konstruksi.html' },
            { name: 'Daftar Sewa Alat Pendukung', url: 'https://www.betonjayareadymix.com/p/daftar-sewa-alat-pendukung.html' },
            { name: 'Perbandingan Sewa Alat Pendukung', url: 'https://www.betonjayareadymix.com/p/perbandingan-sewa-alat-pendukung.html' },
			{ name: 'Sewa Alat Pendukung', url: 'https://www.betonjayareadymix.com/p/sewa-alat-pendukung.html' },
			 { name: 'Sewa Pompa Air', url: 'https://www.betonjayareadymix.com/p/sewa-pompa-air.html' },
            { name: 'Sewa Pompa Air Diesel', url: 'https://www.betonjayareadymix.com/2019/03/sewa-pompa-air-diesel.html' }
        ],
        'SEWA_RENTAL'
    );
  }
	
if (urlMappingSewaPompaAirDieselFromMoneyMaster1Variant[cleanUrlJasaKonsAlatKonstruksiPost]) {
    /*
          generateBreadcrumbJasaAlatKonstruksiPost(
        urlMappingSewaompaAirDieselFromMoneyChildVariant,
        cleanUrlJasaKonsAlatKonstruksiPost,
        [
            //{ name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Sewa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/sewa-alat-konstruksi.html' },
            { name: 'Sewa Alat Proyek', url: 'https://www.betonjayareadymix.com/p/sewa-alat-proyek.html' },
			{ name: 'Perbandingan Sewa Alat Proyek', url: 'https://www.betonjayareadymix.com/p/perbandingan-sewa-alat-proyek.html' },
            { name: 'Harga Sewa Alat Proyek', url: 'https://www.betonjayareadymix.com/p/harga-sewa-alat-proyek.html' },
            { name: 'Sewa Pompa Air Diesel', url: 'https://www.betonjayareadymix.com/2019/03/sewa-pompa-air-diesel.html' }
		],
        'SEWA_RENTAL'
    );*/
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

 if (urlMappingSewaPompaBanjirFromMoneyMaster1MoneyChild[cleanUrlJasaKonsAlatKonstruksiPost]) {
    
          generateBreadcrumbJasaAlatKonstruksiPost(
        urlMappingSewaPompaBanjirFromMoneyMaster1MoneyChild,
        cleanUrlJasaKonsAlatKonstruksiPost,
        [
           { name: 'Sewa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/sewa-alat-konstruksi.html' },
            { name: 'Daftar Sewa Alat Pendukung', url: 'https://www.betonjayareadymix.com/p/daftar-sewa-alat-pendukung.html' },
            { name: 'Perbandingan Sewa Alat Pendukung', url: 'https://www.betonjayareadymix.com/p/perbandingan-sewa-alat-pendukung.html' },
			{ name: 'Sewa Alat Pendukung', url: 'https://www.betonjayareadymix.com/p/sewa-alat-pendukung.html' },
			 { name: 'Sewa Pompa Air', url: 'https://www.betonjayareadymix.com/p/sewa-pompa-air.html' },
            { name: 'Sewa Pompa Air Banjir', url: 'https://www.betonjayareadymix.com/2019/03/sewa-pompa-air-banjir.html' }
		],
        'SEWA_RENTAL'
    );
  }

if (urlMappingSewaPompaBanjirFromMoneyChildVariant[cleanUrlJasaKonsAlatKonstruksiPost]) {
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

 if (urlMappingSewaPompaKapasitasBesarFromMoneyMaster1MoneyChild[cleanUrlJasaKonsAlatKonstruksiPost]) {
          generateBreadcrumbJasaAlatKonstruksiPost(
        urlMappingSewaPompaKapasitasBesarFromMoneyMaster1MoneyChild,
        cleanUrlJasaKonsAlatKonstruksiPost,
        [
           { name: 'Sewa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/sewa-alat-konstruksi.html' },
            { name: 'Daftar Sewa Alat Pendukung', url: 'https://www.betonjayareadymix.com/p/daftar-sewa-alat-pendukung.html' },
            { name: 'Perbandingan Sewa Alat Pendukung', url: 'https://www.betonjayareadymix.com/p/perbandingan-sewa-alat-pendukung.html' },
			{ name: 'Sewa Alat Pendukung', url: 'https://www.betonjayareadymix.com/p/sewa-alat-pendukung.html' },
			 { name: 'Sewa Pompa Air', url: 'https://www.betonjayareadymix.com/p/sewa-pompa-air.html' },
            { name: 'Sewa Pompa Air Kapasitas Besar', url: 'https://www.betonjayareadymix.com/2019/03/sewa-pompa-air-kapasitas-besar.html' }
		],
        'SEWA_RENTAL'
    );
  }

if (urlMappingSewaPompaKapasitasBesarFromMoneyChildVariant[cleanUrlJasaKonsAlatKonstruksiPost]) {
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

 if (urlMappingSewaBakAirProyekFromMoneyMaster1MoneyChild[cleanUrlJasaKonsAlatKonstruksiPost]) {
       // pageNameJasaKonsAlatKonstruksiPost.textContent = urlMappingSewaBakAirProyekFromMoneyPageMoneyChild[cleanUrlJasaKonsAlatKonstruksiPost];
    
          generateBreadcrumbJasaAlatKonstruksiPost(
        urlMappingSewaBakAirProyekFromMoneyMaster1MoneyChild,
        cleanUrlJasaKonsAlatKonstruksiPost,
        [
           { name: 'Sewa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/sewa-alat-konstruksi.html' },
            { name: 'Daftar Sewa Alat Pendukung', url: 'https://www.betonjayareadymix.com/p/daftar-sewa-alat-pendukung.html' },
            { name: 'Perbandingan Sewa Alat Pendukung', url: 'https://www.betonjayareadymix.com/p/perbandingan-sewa-alat-pendukung.html' },
			{ name: 'Sewa Alat Pendukung', url: 'https://www.betonjayareadymix.com/p/sewa-alat-pendukung.html' },
			{ name: 'Sewa Tangki Air', url: 'https://www.betonjayareadymix.com/p/sewa-tangki-air.html' },
            { name: 'Sewa Bak Air Proyek', url: 'https://www.betonjayareadymix.com/p/sewa-bak-air-proyek.html' }
			
		],
        'SEWA_RENTAL'
    );
  }

if (urlMappingSewaBakAirProyekFromMoneyChildVariant[cleanUrlJasaKonsAlatKonstruksiPost]) {
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

 if (urlMappingSewaTangkiAirFromMoneyMasterMoneyChild[cleanUrlJasaKonsAlatKonstruksiPost]) {
        //pageNameJasaKonsAlatKonstruksiPost.textContent = urlMappingSewaTangkiAirFromMoneyPageMoneyChild[cleanUrlJasaKonsAlatKonstruksiPost];
    
          generateBreadcrumbJasaAlatKonstruksiPost(
        urlMappingSewaTangkiAirFromMoneyMasterMoneyChild,
        cleanUrlJasaKonsAlatKonstruksiPost,
        [
            { name: 'Sewa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/sewa-alat-konstruksi.html' },
            { name: 'Daftar Sewa Alat Pendukung', url: 'https://www.betonjayareadymix.com/p/daftar-sewa-alat-pendukung.html' },
            { name: 'Perbandingan Sewa Alat Pendukung', url: 'https://www.betonjayareadymix.com/p/perbandingan-sewa-alat-pendukung.html' },
			{ name: 'Sewa Alat Pendukung', url: 'https://www.betonjayareadymix.com/p/sewa-alat-pendukung.html' },
            { name: 'Sewa Tangki Air', url: 'https://www.betonjayareadymix.com/p/sewa-tangki-air.html' }
		],
        'SEWA_RENTAL'
    );
  }

if (urlMappingSewaTangkiAirFromMoneyChildVariant[cleanUrlJasaKonsAlatKonstruksiPost]) {
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
	
 if (urlMappingSewaPipaProyekFromMoneyMasterMoneyChild[cleanUrlJasaKonsAlatKonstruksiPost]) {

          generateBreadcrumbJasaAlatKonstruksiPost(
        urlMappingSewaPipaProyekFromMoneyMasterMoneyChild,
        cleanUrlJasaKonsAlatKonstruksiPost,
        [
           { name: 'Sewa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/sewa-alat-konstruksi.html' },
            { name: 'Daftar Sewa Alat Pendukung', url: 'https://www.betonjayareadymix.com/p/daftar-sewa-alat-pendukung.html' },
            { name: 'Perbandingan Sewa Alat Pendukung', url: 'https://www.betonjayareadymix.com/p/perbandingan-sewa-alat-pendukung.html' },
			{ name: 'Sewa Alat Pendukung', url: 'https://www.betonjayareadymix.com/p/sewa-alat-pendukung.html' },
            { name: 'Sewa Pipa Proyek', url: 'https://www.betonjayareadymix.com/p/sewa-pipa-proyek.html' }
		],
        'SEWA_RENTAL'
    );
  }

if (urlMappingSewaPipaProyekFromMoneyChildVariant[cleanUrlJasaKonsAlatKonstruksiPost]) {
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
	
 if (urlMappingSewaSelangProyekFromMoneyMasterMoneyChild[cleanUrlJasaKonsAlatKonstruksiPost]) {
    
          generateBreadcrumbJasaAlatKonstruksiPost(
        urlMappingSewaSelangProyekFromMoneyMasterMoneyChild,
        cleanUrlJasaKonsAlatKonstruksiPost,
        [
            { name: 'Sewa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/sewa-alat-konstruksi.html' },
            { name: 'Daftar Sewa Alat Pendukung', url: 'https://www.betonjayareadymix.com/p/daftar-sewa-alat-pendukung.html' },
            { name: 'Perbandingan Sewa Alat Pendukung', url: 'https://www.betonjayareadymix.com/p/perbandingan-sewa-alat-pendukung.html' },
			{ name: 'Sewa Alat Pendukung', url: 'https://www.betonjayareadymix.com/p/sewa-alat-pendukung.html' },
            { name: 'Sewa Selang Proyek', url: 'https://www.betonjayareadymix.com/p/sewa-selang-proyek.html' }
		],
        'SEWA_RENTAL'
    );
  }

if (urlMappingSewaSelangProyekFromMoneyChildVariant[cleanUrlJasaKonsAlatKonstruksiPost]) {
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
	
if (urlMappingSewaPompaAirFromMoneyMasterMoneyChild[cleanUrlJasaKonsAlatKonstruksiPost]) {
          generateBreadcrumbJasaAlatKonstruksiPost(
        urlMappingSewaPompaAirFromMoneyMasterMoneyChild,
        cleanUrlJasaKonsAlatKonstruksiPost,
        [
            { name: 'Sewa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/sewa-alat-konstruksi.html' },
            { name: 'Daftar Sewa Alat Pendukung', url: 'https://www.betonjayareadymix.com/p/daftar-sewa-alat-pendukung.html' },
            { name: 'Perbandingan Sewa Alat Pendukung', url: 'https://www.betonjayareadymix.com/p/perbandingan-sewa-alat-pendukung.html' },
			{ name: 'Sewa Alat Pendukung', url: 'https://www.betonjayareadymix.com/p/sewa-alat-pendukung.html' },
            { name: 'Sewa Pompa Air', url: 'https://www.betonjayareadymix.com/p/sewa-pompa-air.html' }
        ],
        'SEWA_RENTAL'
    );
  }

  if (urlMappingSewaMesinPompaAirFromMoneyChildVariant[cleanUrlJasaKonsAlatKonstruksiPost]) {
        pageNameJasaKonsAlatKonstruksiPost.textContent = urlMappingSewaMesinPompaAirFromMoneyChildVariant[cleanUrlJasaKonsAlatKonstruksiPost];
    /*
        generateBreadcrumbJasaAlatKonstruksiPost(
        urlMappingSewaMesinPompaAirFromMoneyPageMoneyChild,
        cleanUrlJasaKonsAlatKonstruksiPost,
        [
            //{ name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Sewa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/sewa-alat-konstruksi.html' },
            { name: 'Sewa Alat Proyek', url: 'https://www.betonjayareadymix.com/p/sewa-alat-proyek.html' },
			{ name: 'Perbandingan Sewa Alat Proyek', url: 'https://www.betonjayareadymix.com/p/perbandingan-sewa-alat-proyek.html' },
            { name: 'Harga Sewa Alat Proyek', url: 'https://www.betonjayareadymix.com/p/harga-sewa-alat-proyek.html' },
            { name: 'Sewa Mesin Pompa Air', url: 'https://www.betonjayareadymix.com/2019/03/sewa-mesin-pompa-air.html' }
        ],
        'SEWA_RENTAL'
    );
	*/
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
	
  if (urlMappingSewaPompaLumpurFromMoneyMasterMoneyChild[cleanUrlJasaKonsAlatKonstruksiPost]) {
          generateBreadcrumbJasaAlatKonstruksiPost(
        urlMappingSewaPompaLumpurFromMoneyMasterMoneyChild,
        cleanUrlJasaKonsAlatKonstruksiPost,
        [
 			{ name: 'Sewa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/sewa-alat-konstruksi.html' },
            { name: 'Daftar Sewa Alat Pendukung', url: 'https://www.betonjayareadymix.com/p/daftar-sewa-alat-pendukung.html' },
            { name: 'Perbandingan Sewa Alat Pendukung', url: 'https://www.betonjayareadymix.com/p/perbandingan-sewa-alat-pendukung.html' },
			{ name: 'Sewa Alat Pendukung', url: 'https://www.betonjayareadymix.com/p/sewa-alat-pendukung.html' },
			{ name: 'Sewa Pompa Lumpur', url: 'https://www.betonjayareadymix.com/p/sewa-pompa-lumpur.html' }
            //{ name: 'Sewa Pompa Lumpur', url: 'https://www.betonjayareadymix.com/2019/03/sewa-pompa-lumpur.html' }
        ],
        'SEWA_RENTAL'
    );
  }

  if (urlMappingSewaPompaLumpurFromMoneyChildVariant[cleanUrlJasaKonsAlatKonstruksiPost]) {
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

  if (urlMappingSewaPompaSedotLumpurFromMoneyMaster1MoneyChild[cleanUrlJasaKonsAlatKonstruksiPost]) {
          generateBreadcrumbJasaAlatKonstruksiPost(
        urlMappingSewaPompaSedotLumpurFromMoneyMaster1MoneyChild,
        cleanUrlJasaKonsAlatKonstruksiPost,
        [
 			{ name: 'Sewa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/sewa-alat-konstruksi.html' },
            { name: 'Daftar Sewa Alat Pendukung', url: 'https://www.betonjayareadymix.com/p/daftar-sewa-alat-pendukung.html' },
            { name: 'Perbandingan Sewa Alat Pendukung', url: 'https://www.betonjayareadymix.com/p/perbandingan-sewa-alat-pendukung.html' },
			{ name: 'Sewa Alat Pendukung', url: 'https://www.betonjayareadymix.com/p/sewa-alat-pendukung.html' },
			{ name: 'Sewa Pompa Lumpur', url: 'https://www.betonjayareadymix.com/p/sewa-pompa-lumpur.html' },
            { name: 'Sewa Pompa Sedot Lumpur', url: 'https://www.betonjayareadymix.com/2019/03/sewa-pompa-sedot-lumpur.html' }
        ],
        'SEWA_RENTAL'
    );
  }

  if (urlMappingSewaPompaSedotLumpurFromMoneyChildVariant[cleanUrlJasaKonsAlatKonstruksiPost]) {
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

if (urlMappingSewaScaffoldingFromMoneyMasterMoneyPage[cleanUrlJasaKonsAlatKonstruksiPost]) {
           generateBreadcrumbJasaAlatKonstruksiPost(
        urlMappingSewaScaffoldingFromMoneyMasterMoneyPage,
        cleanUrlJasaKonsAlatKonstruksiPost,
        [
            //{ name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
 			{ name: 'Sewa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/sewa-alat-konstruksi.html' },
            { name: 'Daftar Sewa Alat Pendukung', url: 'https://www.betonjayareadymix.com/p/daftar-sewa-alat-pendukung.html' },
            { name: 'Perbandingan Sewa Alat Pendukung', url: 'https://www.betonjayareadymix.com/p/perbandingan-sewa-alat-pendukung.html' },
			{ name: 'Sewa Alat Pendukung', url: 'https://www.betonjayareadymix.com/p/sewa-alat-pendukung.html' },
            { name: 'Sewa Scaffolding', url: 'https://www.betonjayareadymix.com/p/sewa-scaffolding.html' }
        ],
        'SEWA_RENTAL'
    );
 }
   

 if (urlMappingSewaTowerLampFromMoneyMaster1MoneyChild[cleanUrlJasaKonsAlatKonstruksiPost]) {
	 generateBreadcrumbJasaAlatKonstruksiPost(
        urlMappingSewaTowerLampFromMoneyMaster1MoneyChild,
        cleanUrlJasaKonsAlatKonstruksiPost,
        [
            { name: 'Sewa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/sewa-alat-konstruksi.html' },
             { name: 'Daftar Sewa Alat Pendukung', url: 'https://www.betonjayareadymix.com/p/daftar-sewa-alat-pendukung.html' },
            { name: 'Perbandingan Sewa Alat Pendukung', url: 'https://www.betonjayareadymix.com/p/perbandingan-sewa-alat-pendukung.html' },
			{ name: 'Sewa Alat Pendukung', url: 'https://www.betonjayareadymix.com/p/sewa-alat-pendukung.html' },
            { name: 'Sewa Pencahayaan Proyek', url: 'https://www.betonjayareadymix.com/p/sewa-pencahayaan-proyek.html' },
            { name: 'Sewa Tower Lamp', url: 'https://www.betonjayareadymix.com/2019/03/sewa-tower-lamp.html' }
			
        ],
        'SEWA_RENTAL'
    );
 }
   
if (urlMappingSewaAlatSurveyFromMoneyMasterMoneyChild[cleanUrlJasaKonsAlatKonstruksiPost]) {
        generateBreadcrumbJasaAlatKonstruksiPost(
        urlMappingSewaAlatSurveyFromMoneyMasterMoneyChild,
        cleanUrlJasaKonsAlatKonstruksiPost,
        [
            { name: 'Sewa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/sewa-alat-konstruksi.html' },
            { name: 'Daftar Sewa Alat Pendukung', url: 'https://www.betonjayareadymix.com/p/daftar-sewa-alat-pendukung.html' },
            { name: 'Perbandingan Sewa Alat Pendukung', url: 'https://www.betonjayareadymix.com/p/perbandingan-sewa-alat-pendukung.html' },
			{ name: 'Sewa Alat Pendukung', url: 'https://www.betonjayareadymix.com/p/sewa-alat-pendukung.html' },
            { name: 'Sewa Alat Survey', url: 'https://www.betonjayareadymix.com/p/sewa-alat-survey.html' }
        ],
        'SEWA_RENTAL'
    );
}
   
 //SUB SEWA  ALAT SURVEY
if (urlMappingSewaTotalStationFromMoneyMaster1MoneyChild[cleanUrlJasaKonsAlatKonstruksiPost]) {
     generateBreadcrumbJasaAlatKonstruksiPost(
        urlMappingSewaTotalStationFromMoneyMaster1MoneyChild,
        cleanUrlJasaKonsAlatKonstruksiPost,
        [
 			{ name: 'Sewa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/sewa-alat-konstruksi.html' },
            { name: 'Daftar Sewa Alat Pendukung', url: 'https://www.betonjayareadymix.com/p/daftar-sewa-alat-pendukung.html' },
            { name: 'Perbandingan Sewa Alat Pendukung', url: 'https://www.betonjayareadymix.com/p/perbandingan-sewa-alat-pendukung.html' },
			{ name: 'Sewa Alat Pendukung', url: 'https://www.betonjayareadymix.com/p/sewa-alat-pendukung.html' },
            { name: 'Sewa Alat Survey', url: 'https://www.betonjayareadymix.com/p/sewa-alat-survey.html' },
            { name: 'Sewa Total Station', url: 'https://www.betonjayareadymix.com/2019/03/sewa-total-station.html' }
        ],
        'SEWA_RENTAL'
    );
}
  
if (urlMappingSewaWaterpassFromMoneyMaster1MoneyChild[cleanUrlJasaKonsAlatKonstruksiPost]) {
		generateBreadcrumbJasaAlatKonstruksiPost(
        urlMappingSewaWaterpassFromMoneyMaster1MoneyChild,
        cleanUrlJasaKonsAlatKonstruksiPost,
        [
 			{ name: 'Sewa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/sewa-alat-konstruksi.html' },
            { name: 'Daftar Sewa Alat Pendukung', url: 'https://www.betonjayareadymix.com/p/daftar-sewa-alat-pendukung.html' },
            { name: 'Perbandingan Sewa Alat Pendukung', url: 'https://www.betonjayareadymix.com/p/perbandingan-sewa-alat-pendukung.html' },
			{ name: 'Sewa Alat Pendukung', url: 'https://www.betonjayareadymix.com/p/sewa-alat-pendukung.html' },
			{ name: 'Sewa Alat Survey', url: 'https://www.betonjayareadymix.com/p/sewa-alat-survey.html' },
            { name: 'Sewa Waterpass', url: 'https://www.betonjayareadymix.com/2019/03/sewa-waterpass.html' }
        ],
        'SEWA_RENTAL'
    );
}
  
if (urlMappingSewaTheodoliteFromMoneyMaster1MoneyChild[cleanUrlJasaKonsAlatKonstruksiPost]) {
    
		   generateBreadcrumbJasaAlatKonstruksiPost(
        urlMappingSewaTheodoliteFromMoneyMaster1MoneyChild,
        cleanUrlJasaKonsAlatKonstruksiPost,
        [
            { name: 'Sewa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/sewa-alat-konstruksi.html' },
            { name: 'Daftar Sewa Alat Pendukung', url: 'https://www.betonjayareadymix.com/p/daftar-sewa-alat-pendukung.html' },
            { name: 'Perbandingan Sewa Alat Pendukung', url: 'https://www.betonjayareadymix.com/p/perbandingan-sewa-alat-pendukung.html' },
			{ name: 'Sewa Alat Pendukung', url: 'https://www.betonjayareadymix.com/p/sewa-alat-pendukung.html' },
            { name: 'Sewa Alat Survey', url: 'https://www.betonjayareadymix.com/p/sewa-alat-survey.html' },
            { name: 'Sewa Theodolite', url: 'https://www.betonjayareadymix.com/2019/03/sewa-theodolite.html' }
        ],
        'SEWA_RENTAL'
    );
}
   
  if (urlMappingSewaAlatBorFromMoneyMasterMoneyPage[cleanUrlJasaKonsAlatKonstruksiPost]) {
  		    generateBreadcrumbJasaAlatKonstruksiPost(
        urlMappingSewaAlatBorFromMoneyMasterMoneyPage,
        cleanUrlJasaKonsAlatKonstruksiPost,
        [
            { name: 'Sewa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/sewa-alat-konstruksi.html' },
             { name: 'Daftar Sewa Alat Pendukung', url: 'https://www.betonjayareadymix.com/p/daftar-sewa-alat-pendukung.html' },
            { name: 'Perbandingan Sewa Alat Pendukung', url: 'https://www.betonjayareadymix.com/p/perbandingan-sewa-alat-pendukung.html' },
            { name: 'Sewa Alat Bor', url: 'https://www.betonjayareadymix.com/p/sewa-alat-bor.html' }
        ],
        'SEWA_RENTAL'
    );
  }
	
	//AKHIR SUB SEWA ALAT PROYEK

if (urlMappingSewaAlatBeratPostFromMoneyMasterMoneyPage[cleanUrlJasaKonsAlatKonstruksiPost]) {
		    generateBreadcrumbJasaAlatKonstruksiPost(
        urlMappingSewaAlatBeratPostFromMoneyMasterMoneyPage,
        cleanUrlJasaKonsAlatKonstruksiPost,
        [
            //{ name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Sewa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/sewa-alat-konstruksi.html' },
            { name: 'Sewa Alat Berat', url: 'https://www.betonjayareadymix.com/p/sewa-alat-berat.html' },
            { name: 'Perbandingan Sewa Alat Berat', url: 'https://www.betonjayareadymix.com/p/perbandingan-sewa-alat-berat.html'},
            { name: 'Sewa Alat Berat', url: 'https://www.betonjayareadymix.com/p/sewa-alat-berat.html'}

        ],
        'SEWA_RENTAL'
    );
    }
	
	if (urlMappingSewaAlatBeratPostFromMoneyMasterMoneyChild[cleanUrlJasaKonsAlatKonstruksiPost]) {
		    generateBreadcrumbJasaAlatKonstruksiPost(
        urlMappingSewaAlatBeratPostFromMoneyMasterMoneyChild,
        cleanUrlJasaKonsAlatKonstruksiPost,
        [
            //{ name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Sewa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/sewa-alat-konstruksi.html' },
            { name: 'Daftar Sewa Alat Berat', url: 'https://www.betonjayareadymix.com/p/daftar-sewa-alat-berat.html' },
            { name: 'Perbandingan Sewa Alat Berat', url: 'https://www.betonjayareadymix.com/p/perbandingan-sewa-alat-berat.html'},
            { name: 'Sewa Alat Berat', url: 'https://www.betonjayareadymix.com/p/sewa-alat-berat.html'}
           // { name: 'Harga Sewa Alat Berat', url: 'https://www.betonjayareadymix.com/2019/02/harga-sewa-alat-berat.html'}

        ],
        'SEWA_RENTAL'
    );
	}
		
   //AWAL SUB PAGE SEWA ALAT BERAT
		if (urlMappingSewaforkliftPostFromMoneyMasterMoneyPage[cleanUrlJasaKonsAlatKonstruksiPost]) {
		    generateBreadcrumbJasaAlatKonstruksiPost(
        urlMappingSewaforkliftPostFromMoneyMasterMoneyPage,
        cleanUrlJasaKonsAlatKonstruksiPost,
        [
            //{ name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Sewa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/sewa-alat-konstruksi.html' },
            { name: 'Daftar Sewa Alat Berat', url: 'https://www.betonjayareadymix.com/p/daftar-sewa-alat-berat.html' },
            { name: 'Perbandingan Sewa Forklift', url: 'https://www.betonjayareadymix.com/p/perbandingan-sewa-forklift.html'},
            { name: 'Sewa Forklift', url: 'https://www.betonjayareadymix.com/p/sewa-forklift.html'}

        ],
        'SEWA_RENTAL'
    );
	}
	if (urlMappingSewaCranePostFromMoneyMasterMoneyPage[cleanUrlJasaKonsAlatKonstruksiPost]) {
		    generateBreadcrumbJasaAlatKonstruksiPost(
        urlMappingSewaCranePostFromMoneyMasterMoneyPage,
        cleanUrlJasaKonsAlatKonstruksiPost,
        [
            //{ name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Sewa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/sewa-alat-konstruksi.html' },
           { name: 'Daftar Sewa Alat Berat', url: 'https://www.betonjayareadymix.com/p/daftar-sewa-alat-berat.html' },
            { name: 'Perbandingan Sewa Crane', url: 'https://www.betonjayareadymix.com/p/perbandingan-sewa-crane.html'},
            { name: 'Sewa Crane', url: 'https://www.betonjayareadymix.com/p/sewa-crane.html'}

        ],
        'SEWA_RENTAL'
    );
	}
	if (urlMappingSewaSelfLoaderPostFromMoneyMasterMoneyPage[cleanUrlJasaKonsAlatKonstruksiPost]) {
		    generateBreadcrumbJasaAlatKonstruksiPost(
        urlMappingSewaSelfLoaderPostFromMoneyMasterMoneyPage,
        cleanUrlJasaKonsAlatKonstruksiPost,
        [
            //{ name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Sewa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/sewa-alat-konstruksi.html' },
            { name: 'Daftar Sewa Alat Berat', url: 'https://www.betonjayareadymix.com/p/daftar-sewa-alat-berat.html' },
            { name: 'Perbandingan Sewa Self Loader', url: 'https://www.betonjayareadymix.com/p/perbandingan-sewa-self-loader.html'},
            { name: 'Sewa Self Loader', url: 'https://www.betonjayareadymix.com/p/sewa-self-loader.html'}

        ],
        'SEWA_RENTAL'
    );
	}
	if (urlMappingSewaWheelLoaderPostFromMoneyMasterMoneyPage[cleanUrlJasaKonsAlatKonstruksiPost]) {
		    generateBreadcrumbJasaAlatKonstruksiPost(
        urlMappingSewaWheelLoaderPostFromMoneyMasterMoneyPage,
        cleanUrlJasaKonsAlatKonstruksiPost,
        [
            //{ name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Sewa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/sewa-alat-konstruksi.html' },
            { name: 'Daftar Sewa Alat Berat', url: 'https://www.betonjayareadymix.com/p/daftar-sewa-alat-berat.html' },
            { name: 'Perbandingan Sewa Wheel Loader', url: 'https://www.betonjayareadymix.com/p/perbandingan-sewa-wheel-loader.html'},
            { name: 'Sewa Wheel Loader', url: 'https://www.betonjayareadymix.com/p/sewa-wheel-loader.html'}

        ],
        'SEWA_RENTAL'
    );
	}
	if (urlMappingSewaVibroRollerPostFromMoneyMasterMoneyPage[cleanUrlJasaKonsAlatKonstruksiPost]) {
		    generateBreadcrumbJasaAlatKonstruksiPost(
        urlMappingSewaVibroRollerPostFromMoneyMasterMoneyPage,
        cleanUrlJasaKonsAlatKonstruksiPost,
        [
            //{ name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Sewa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/sewa-alat-konstruksi.html' },
            { name: 'Daftar Sewa Alat Berat', url: 'https://www.betonjayareadymix.com/p/daftar-sewa-alat-berat.html' },
            { name: 'Perbandingan Sewa Vibro Roller', url: 'https://www.betonjayareadymix.com/p/perbandingan-sewa-vibro-roller.html'},
            { name: 'Sewa Vibro Roller', url: 'https://www.betonjayareadymix.com/p/sewa-vibro-roller.html'}

        ],
        'SEWA_RENTAL'
    );
	}
	if (urlMappingSewaWalesStoomPostFromMoneyMasterMoneyPage[cleanUrlJasaKonsAlatKonstruksiPost]) {
		    generateBreadcrumbJasaAlatKonstruksiPost(
        urlMappingSewaWalesStoomPostFromMoneyMasterMoneyPage,
        cleanUrlJasaKonsAlatKonstruksiPost,
        [
            //{ name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Sewa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/sewa-alat-konstruksi.html' },
            { name: 'Daftar Sewa Alat Berat', url: 'https://www.betonjayareadymix.com/p/daftar-sewa-alat-berat.html' },
            { name: 'Perbandingan Sewa Wales Stoom', url: 'https://www.betonjayareadymix.com/p/perbandingan-sewa-wales-stoom.html'},
            { name: 'Sewa Wales Stoom', url: 'https://www.betonjayareadymix.com/p/sewa-wales-stoom.html'}

        ],
        'SEWA_RENTAL'
    );
	}
		if (urlMappingSewaTandemRollerPostFromMoneyMasterMoneyPage[cleanUrlJasaKonsAlatKonstruksiPost]) {
		    generateBreadcrumbJasaAlatKonstruksiPost(
        urlMappingSewaTandemRollerPostFromMoneyMasterMoneyPage,
        cleanUrlJasaKonsAlatKonstruksiPost,
        [
            //{ name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Sewa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/sewa-alat-konstruksi.html' },
            { name: 'Daftar Sewa Alat Berat', url: 'https://www.betonjayareadymix.com/p/daftar-sewa-alat-berat.html' },
            { name: 'Perbandingan Sewa Tandem Roller', url: 'https://www.betonjayareadymix.com/p/perbandingan-sewa-tandem-roller.html'},
            { name: 'Sewa Tandem Roller', url: 'https://www.betonjayareadymix.com/p/sewa-tandem-roller.html'}

        ],
        'SEWA_RENTAL'
    );
	}
    if (urlMappingSewaBulldozerPostFromMoneyMasterMoneyPage[cleanUrlJasaKonsAlatKonstruksiPost]) {
		    generateBreadcrumbJasaAlatKonstruksiPost(
        urlMappingSewaBulldozerPostFromMoneyMasterMoneyPage,
        cleanUrlJasaKonsAlatKonstruksiPost,
        [
            //{ name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Sewa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/sewa-alat-konstruksi.html' },
            { name: 'Daftar Sewa Alat Berat', url: 'https://www.betonjayareadymix.com/p/daftar-sewa-alat-berat.html' },
            { name: 'Perbandingan Sewa Bulldozer', url: 'https://www.betonjayareadymix.com/p/perbandingan-sewa-bulldozer.html'},
            { name: 'Sewa Bulldozer', url: 'https://www.betonjayareadymix.com/p/sewa-bulldozer.html'}

        ],
        'SEWA_RENTAL'
    );
	}	
	if (urlMappingSewaExcavatorPostFromMoneyMasterMoneyPage[cleanUrlJasaKonsAlatKonstruksiPost]) {
		    generateBreadcrumbJasaAlatKonstruksiPost(
        urlMappingSewaExcavatorPostFromMoneyMasterMoneyPage,
        cleanUrlJasaKonsAlatKonstruksiPost,
        [
            //{ name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Sewa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/sewa-alat-konstruksi.html' },
           { name: 'Daftar Sewa Alat Berat', url: 'https://www.betonjayareadymix.com/p/daftar-sewa-alat-berat.html' },
            { name: 'Perbandingan Sewa Excavator', url: 'https://www.betonjayareadymix.com/p/perbandingan-sewa-excavator.html'},
            { name: 'Sewa Excavator', url: 'https://www.betonjayareadymix.com/p/sewa-excavator.html'}

        ],
        'SEWA_RENTAL'
    );
	}	
   	if (urlMappingSewaExcavatorPostFromMoneyPageMoneyChild[cleanUrlJasaKonsAlatKonstruksiPost]) {
		    generateBreadcrumbJasaAlatKonstruksiPost(
        urlMappingSewaExcavatorPostFromMoneyPageMoneyChild,
        cleanUrlJasaKonsAlatKonstruksiPost,
        [
            //{ name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Sewa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/sewa-alat-konstruksi.html' },
            { name: 'Daftar Sewa Alat Berat', url: 'https://www.betonjayareadymix.com/p/daftar-sewa-alat-berat.html' },
            { name: 'Perbandingan Sewa Excavator', url: 'https://www.betonjayareadymix.com/p/perbandingan-sewa-excavator.html'},
            { name: 'Sewa Excavator', url: 'https://www.betonjayareadymix.com/p/sewa-excavator.html'},
            { name: 'Harga Sewa Excavator', url: 'https://www.betonjayareadymix.com/p/harga-sewa-excavator.html'}

        ],
        'SEWA_RENTAL'
    );
	}
	
	    if (urlMappingSewaBackhoeLoaderPostFromMoneyMasterMoneyPage[cleanUrlJasaKonsAlatKonstruksiPost]) {
		    generateBreadcrumbJasaAlatKonstruksiPost(
        urlMappingSewaBackhoeLoaderPostFromMoneyMasterMoneyPage,
        cleanUrlJasaKonsAlatKonstruksiPost,
        [
            //{ name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Sewa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/sewa-alat-konstruksi.html' },
            { name: 'Daftar Sewa Alat Berat', url: 'https://www.betonjayareadymix.com/p/daftar-sewa-alat-berat.html' },
            { name: 'Perbandingan Sewa Backhoe Loader', url: 'https://www.betonjayareadymix.com/p/perbandingan-sewa-backhoe-loader.html'},
            { name: 'Sewa Backhoe Loader', url: 'https://www.betonjayareadymix.com/p/sewa-backhoe-loader.html'}

        ],
        'SEWA_RENTAL'
    );
	}	
	    if (urlMappingSewaBabyRollerPostFromMoneyMasterMoneyPage[cleanUrlJasaKonsAlatKonstruksiPost]) {
		    generateBreadcrumbJasaAlatKonstruksiPost(
        urlMappingSewaBabyRollerPostFromMoneyMasterMoneyPage,
        cleanUrlJasaKonsAlatKonstruksiPost,
        [
            //{ name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Sewa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/sewa-alat-konstruksi.html' },
           { name: 'Daftar Sewa Alat Berat', url: 'https://www.betonjayareadymix.com/p/daftar-sewa-alat-berat.html' },
            { name: 'Perbandingan Sewa Baby Roller', url: 'https://www.betonjayareadymix.com/p/perbandingan-sewa-baby-roller.html'},
            { name: 'Sewa Baby Roller', url: 'https://www.betonjayareadymix.com/p/sewa-baby-roller.html'}

        ],
        'SEWA_RENTAL'
    );
	}	
	    if (urlMappingSewaMotorGraderPostFromMoneyMasterMoneyPage[cleanUrlJasaKonsAlatKonstruksiPost]) {
		    generateBreadcrumbJasaAlatKonstruksiPost(
        urlMappingSewaMotorGraderPostFromMoneyMasterMoneyPage,
        cleanUrlJasaKonsAlatKonstruksiPost,
        [
            //{ name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Sewa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/sewa-alat-konstruksi.html' },
           { name: 'Daftar Sewa Alat Berat', url: 'https://www.betonjayareadymix.com/p/daftar-sewa-alat-berat.html' },
            { name: 'Perbandingan Sewa Motor Grader', url: 'https://www.betonjayareadymix.com/p/perbandingan-sewa-motor-grader.html'},
            { name: 'Sewa Motor Grader', url: 'https://www.betonjayareadymix.com/p/sewa-motor-grader.html'}

        ],
        'SEWA_RENTAL'
    );
	}	
	    if (urlMappingSewaAlatPancangPostFromMoneyMasterMoneyPage[cleanUrlJasaKonsAlatKonstruksiPost]) {
		    generateBreadcrumbJasaAlatKonstruksiPost(
        urlMappingSewaAlatPancangPostFromMoneyMasterMoneyPage,
        cleanUrlJasaKonsAlatKonstruksiPost,
        [
            //{ name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Sewa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/sewa-alat-konstruksi.html' },
            { name: 'Daftar Sewa Alat Berat', url: 'https://www.betonjayareadymix.com/p/daftar-sewa-alat-berat.html' },
            { name: 'Perbandingan Sewa Alat Pancang', url: 'https://www.betonjayareadymix.com/p/perbandingan-sewa-alat-pancang.html'},
            { name: 'Sewa Alat Pancang', url: 'https://www.betonjayareadymix.com/p/sewa-alat-pancang.html'}

        ],
        'SEWA_RENTAL'
    );
	}	
	    if (urlMappingSewaConcretePaverPostFromMoneyMasterMoneyPage[cleanUrlJasaKonsAlatKonstruksiPost]) {
		    generateBreadcrumbJasaAlatKonstruksiPost(
        urlMappingSewaConcretePaverPostFromMoneyMasterMoneyPage,
        cleanUrlJasaKonsAlatKonstruksiPost,
        [
            //{ name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Sewa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/sewa-alat-konstruksi.html' },
            { name: 'Daftar Sewa Alat Berat', url: 'https://www.betonjayareadymix.com/p/daftar-sewa-alat-berat.html' },
            { name: 'Perbandingan Sewa Concrete Paver', url: 'https://www.betonjayareadymix.com/p/perbandingan-sewa-concrete-paver.html'},
            { name: 'Sewa Concrete Paver', url: 'https://www.betonjayareadymix.com/p/sewa-concrete-paver.html'}

        ],
        'SEWA_RENTAL'
    );
	}	
	    if (urlMappingSewaTrencherPostFromMoneyMasterMoneyPage[cleanUrlJasaKonsAlatKonstruksiPost]) {
		    generateBreadcrumbJasaAlatKonstruksiPost(
        urlMappingSewaTrencherPostFromMoneyMasterMoneyPage,
        cleanUrlJasaKonsAlatKonstruksiPost,
        [
            //{ name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Sewa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/sewa-alat-konstruksi.html' },
           { name: 'Daftar Sewa Alat Berat', url: 'https://www.betonjayareadymix.com/p/daftar-sewa-alat-berat.html' },
            { name: 'Perbandingan Sewa Trencher', url: 'https://www.betonjayareadymix.com/p/perbandingan-sewa-trencher.html'},
            { name: 'Sewa Trencher', url: 'https://www.betonjayareadymix.com/p/sewa-trencher.html'}

        ],
        'SEWA_RENTAL'
    );
	}	
//AKHIR SUB PAGE SEWA ALAT BERAT
if (urlMappingSewaConcreteCutterFromMoneyMasterMoneyPage[cleanUrlJasaKonsAlatKonstruksiPost]) {
		    generateBreadcrumbJasaAlatKonstruksiPost(
        urlMappingSewaConcreteCutterFromMoneyMasterMoneyPage,
        cleanUrlJasaKonsAlatKonstruksiPost,
        [
            //{ name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Sewa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/sewa-alat-konstruksi.html' },
            { name: 'Daftar Sewa Alat Ringan', url: 'https://www.betonjayareadymix.com/p/daftar-sewa-alat-ringan.html' },
            { name: 'Perbandingan Sewa Alat Ringan', url: 'https://www.betonjayareadymix.com/p/perbandingan-sewa-alat-ringan.html' },
            { name: 'Sewa Concrete Cutter', url: 'https://www.betonjayareadymix.com/p/sewa-concrete-cutter.html' }
        ],
        'SEWA_RENTAL'
    );

}
   
});
