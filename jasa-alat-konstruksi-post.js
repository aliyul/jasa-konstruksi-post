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

// ============================================================
// 📁 SUB Jasa Alat Konstruksi - SEWA ALAT PROYEK (MONEY PAGE & CHILD)
// 🧠 ENTITY: SEWA/RENTAL → TYPE: MONEY_PAGE & MONEY_CHILD
// Parent: Sewa Alat Proyek (SUB2)
// Breadcrumb: Home > Sewa Alat Konstruksi > Sewa Alat Proyek > [Nama Alat] (4 level)
// ============================================================
const urlMappingSewaAlatPendukungFromMoneyMasterMoneyPage = {
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
	
const urlMappingSewaAlatProyekFromMoneyMasterMoneyPage = {
 
 // hapus saja "https://www.betonjayareadymix.com/2019/02/sewa-sistem-pendukung-proyek.html": "Sewa Sistem Pendukung Proyek",  // TYPE: MONEY_PAGE

 // ============================================================
  // [MONEY_CHILD] - SEWA ALAT PROYEK PER LOKASI
  // 🧠 TYPE: MONEY_CHILD (spesifik lokasi, intent transaksional 90%)
  // ============================================================
  "https://www.betonjayareadymix.com/2019/02/sewa-alat-proyek.html": "Sewa Alat Proyek"  // TYPE: MONEY_PAGE PARENT

 
};
const urlMappingSewaAlatProyekFromMoneyPageMoneyChild = {
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
  "https://www.betonjayareadymix.com/2019/02/sewa-alat-proyek-karawang.html": "Sewa Alat Proyek Karawang",  // TYPE: MONEY_CHILD
  
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

const urlMappingSewaPompaAirDieselFromMoneyPageMoneyChild = {
"https://www.betonjayareadymix.com/2019/03/sewa-pompa-air-diesel-jakarta.html": "Sewa Pompa Air Diesel Jakarta", 
"https://www.betonjayareadymix.com/2019/03/sewa-pompa-air-diesel-bekasi.html": "Sewa Pompa Air Diesel Bekasi", 
"https://www.betonjayareadymix.com/2019/03/sewa-pompa-air-diesel-tangerang.html": "Sewa Pompa Air Diesel Tangerang"  // TYPE: MONEY_CHILD
};
const urlMappingSewaPompaAirDieselFromMoneyChildVariant = {
"https://www.betonjayareadymix.com/2019/03/perbandingan-harga-pompa-diesel.html": "Perbandingan Harga Pompa Diesel",
"https://www.betonjayareadymix.com/2019/03/diskon-sewa-pompa-diesel.html": "Diskon Sewa Pompa Diesel",
"https://www.betonjayareadymix.com/2019/03/spesifikasi-pompa-air-diesel.html": "Spesifikasi Pompa Air Diesel",  // TYPE: VARIANT
"https://www.betonjayareadymix.com/2019/03/daftar-harga-pompa-diesel.html": "Daftar Harga Pompa Diesel",  // TYPE: VARIANT
"https://www.betonjayareadymix.com/2019/03/daftar-harga-pompa-diesel-jakarta.html": "Daftar Harga Pompa Diesel Jakarta"  // TYPE: VARIANT
};
// ============================================================
// 📁 SUB Jasa Alat Konstruksi - SEWA POMPA DEWATERING (MONEY PAGE & CHILD)
// 🧠 ENTITY: SEWA/RENTAL → TYPE: MONEY_PAGE & MONEY_CHILD
// Parent: Sewa Alat Proyek (SUB2)
// ============================================================

const urlMappingSewaMesinPompaAirFromMoneyPageMoneyChild = {
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
  "https://www.betonjayareadymix.com/2019/03/sewa-pompa-air-medan.html": "Sewa Pompa Air Medan",  // TYPE: MONEY_CHILD

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

const urlMappingSewaPompaLumpurFromMoneyPageMoneyChild = {
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

const urlMappingSewaPompaSedotLumpurFromMoneyPageMoneyChild = {
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

const urlMappingSewaPompaBanjirFromMoneyPageMoneyChild = {
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

const urlMappingSewaPompaKapasitasBesarFromMoneyPageMoneyChild = {
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

const urlMappingSewaBakAirProyekFromMoneyPageMoneyChild = {
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

const urlMappingSewaTangkiAirFromMoneyPageMoneyChild = {
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

const urlMappingSewaPipaProyekFromMoneyPageMoneyChild = {
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

const urlMappingSewaSelangProyekFromMoneyPageMoneyChild = {
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
// 📁 SUB Jasa Alat Konstruksi - SEWA BEKISTING & SCAFFOLDING
// 🧠 ENTITY: SEWA/RENTAL → TYPE: MONEY_PAGE & MONEY_MASTER
// ============================================================

const urlMappingSewaBekistingScaffoldingFromSub2MoneyPage = {
  // ============================================================
  // [MONEY_PAGE] - SEWA BEKISTING & SCAFFOLDING
  // 🧠 TYPE: MONEY_PAGE
  // ============================================================
  "https://www.betonjayareadymix.com/2019/03/sewa-bekisting-cor-jalan.html": "Sewa Bekisting Cor Jalan",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2019/03/sewa-bekisting-kolom-balok.html": "Sewa Bekisting Kolom Balok",  // TYPE: MONEY_PAGE
  
  // ============================================================
  // [MONEY_MASTER] - HARGA SEWA SCAFFOLDING (NASIONAL)
  // 🧠 TYPE: MONEY_MASTER (khusus SEWA, diperbolehkan)
  // ============================================================
  "https://www.betonjayareadymix.com/2019/03/harga-jasa-sewa-scaffolding.html": "Harga Jasa Sewa Scaffolding",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/2019/03/harga-sewa-scaffolding.html": "Harga Sewa Scaffolding",  // TYPE: MONEY_MASTER
  
  // ============================================================
  // [MONEY_CHILD] - SEWA SCAFFOLDING PER LOKASI
  // ============================================================
  "https://www.betonjayareadymix.com/2019/03/sewa-scaffolding-terdekat.html": "Sewa Scaffolding Terdekat",  // TYPE: MONEY_CHILD
  
  // ============================================================
  // 🟡 SARAN ITEM TAMBAHAN (BELUM AKTIF - PERLU DIBUAT KONTEN)
  // ============================================================
  // "https://www.betonjayareadymix.com/2019/03/sewa-bekisting-jakarta.html": "Sewa Bekisting Jakarta",  // TYPE: MONEY_CHILD
  // "https://www.betonjayareadymix.com/2019/03/sewa-bekisting-per-meter.html": "Sewa Bekisting Per Meter",  // TYPE: MONEY_CHILD
  // "https://www.betonjayareadymix.com/2019/03/sewa-scaffolding-jakarta.html": "Sewa Scaffolding Jakarta",  // TYPE: MONEY_CHILD
  // "https://www.betonjayareadymix.com/2019/03/sewa-scaffolding-per-meter.html": "Sewa Scaffolding Per Meter",  // TYPE: MONEY_CHILD
};

// ============================================================
// 📁 SUB Jasa Alat Konstruksi - SEWA PENCAHAYAAN UTILITAS
// 🧠 ENTITY: SEWA/RENTAL → TYPE: MONEY_PAGE & MONEY_CHILD
// ============================================================

const urlMappingSewaPencahayaanUtilitasFromSub2MoneyPage = {
  // ============================================================
  // [MONEY_PAGE] - SEWA LAMPU PROYEK & TOWER LAMP
  // 🧠 TYPE: MONEY_PAGE
  // ============================================================
  "https://www.betonjayareadymix.com/2019/03/sewa-tower-lamp.html": "Sewa Tower Lamp",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2019/03/sewa-lampu-proyek.html": "Sewa Lampu Proyek",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2019/03/sewa-lampu-sorot.html": "Sewa Lampu Sorot",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2019/03/sewa-lampu-tembak.html": "Sewa Lampu Tembak",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2019/03/sewa-panel-listrik.html": "Sewa Panel Listrik",  // TYPE: MONEY_PAGE

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
  "https://www.betonjayareadymix.com/2019/03/sewa-tower-lamp-palembang.html": "Sewa Tower Lamp Palembang",  // TYPE: MONEY_CHILD

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

  // ============================================================
  // [MONEY_CHILD] - SEWA LAMPU TEMBAK PER LOKASI
  // ============================================================
  "https://www.betonjayareadymix.com/2019/03/sewa-lampu-tembak-terdekat.html": "Sewa Lampu Tembak Terdekat",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/03/sewa-lampu-tembak-jakarta.html": "Sewa Lampu Tembak Jakarta",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/03/sewa-lampu-tembak-bogor.html": "Sewa Lampu Tembak Bogor",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/03/sewa-lampu-tembak-depok.html": "Sewa Lampu Tembak Depok",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/03/sewa-lampu-tembak-tangerang.html": "Sewa Lampu Tembak Tangerang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/03/sewa-lampu-tembak-bekasi.html": "Sewa Lampu Tembak Bekasi",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/03/sewa-lampu-tembak-karawang.html": "Sewa Lampu Tembak Karawang",  // TYPE: MONEY_CHILD

  // ============================================================
  // [MONEY_CHILD] - SEWA LAMPU PROYEK & PANEL LISTRIK PER LOKASI
  // ============================================================
  "https://www.betonjayareadymix.com/2019/03/sewa-lampu-proyek-terdekat.html": "Sewa Lampu Proyek Terdekat",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/03/sewa-panel-listrik-terdekat.html": "Sewa Panel Listrik Terdekat",  // TYPE: MONEY_CHILD
  
  // ============================================================
  // 🟡 SARAN ITEM TAMBAHAN (BELUM AKTIF - PERLU DIBUAT KONTEN)
  // ============================================================
  // "https://www.betonjayareadymix.com/2019/03/sewa-tower-lamp-bandung.html": "Sewa Tower Lamp Bandung",  // TYPE: MONEY_CHILD
  // "https://www.betonjayareadymix.com/2019/03/sewa-tower-lamp-surabaya.html": "Sewa Tower Lamp Surabaya",  // TYPE: MONEY_CHILD
  // "https://www.betonjayareadymix.com/2019/03/sewa-lampu-proyek-jakarta.html": "Sewa Lampu Proyek Jakarta",  // TYPE: MONEY_CHILD
};

// ============================================================
// 📁 SUB Jasa Alat Konstruksi - SEWA ALAT SURVEY PENGUKURAN
// 🧠 ENTITY: SEWA/RENTAL → TYPE: MONEY_PAGE & MONEY_CHILD
// ============================================================

const urlMappingSewaAlatSurveyPengukuranFromSub2MoneyPage = {
  // ============================================================
  // [MONEY_PAGE] - SEWA ALAT SURVEY
  // ============================================================
  "https://www.betonjayareadymix.com/2019/03/sewa-total-station.html": "Sewa Total Station",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2019/03/sewa-waterpass.html": "Sewa Waterpass",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2019/03/sewa-theodolite.html": "Sewa Theodolite",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2019/03/sewa-laser-level.html": "Sewa Laser Level",  // TYPE: MONEY_PAGE
  
  // ============================================================
  // [MONEY_CHILD] - SEWA ALAT SURVEY PER LOKASI
  // ============================================================
  "https://www.betonjayareadymix.com/2019/03/sewa-alat-survey-terdekat.html": "Sewa Alat Survey Terdekat",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/03/sewa-alat-survey-jakarta.html": "Sewa Alat Survey Jakarta",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/03/sewa-alat-survey-bogor.html": "Sewa Alat Survey Bogor",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/03/sewa-alat-survey-depok.html": "Sewa Alat Survey Depok",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/03/sewa-alat-survey-tangerang.html": "Sewa Alat Survey Tangerang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/03/sewa-alat-survey-bekasi.html": "Sewa Alat Survey Bekasi",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/03/sewa-alat-survey-karawang.html": "Sewa Alat Survey Karawang",  // TYPE: MONEY_CHILD
};

// ============================================================
// 📁 SUB Jasa Alat Konstruksi - SEWA TOTAL STATION (DETAIL LOKASI)
// 🧠 ENTITY: SEWA/RENTAL → TYPE: MONEY_CHILD
// ============================================================

const urlMappingSewaTotalStationFromSub2MoneyChild = {
  // ============================================================
  // [MONEY_CHILD] - SEWA TOTAL STATION PER LOKASI
  // ============================================================
  "https://www.betonjayareadymix.com/2019/03/sewa-total-station-terdekat.html": "Sewa Total Station Terdekat",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/03/sewa-total-station-jakarta.html": "Sewa Total Station Jakarta",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/03/sewa-total-station-bogor.html": "Sewa Total Station Bogor",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/03/sewa-total-station-depok.html": "Sewa Total Station Depok",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/03/sewa-total-station-tangerang.html": "Sewa Total Station Tangerang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/03/sewa-total-station-bekasi.html": "Sewa Total Station Bekasi",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/03/sewa-total-station-karawang.html": "Sewa Total Station Karawang",  // TYPE: MONEY_CHILD
};

// ============================================================
// 📁 SUB Jasa Alat Konstruksi - SEWA WATERPASS (DETAIL LOKASI)
// 🧠 ENTITY: SEWA/RENTAL → TYPE: MONEY_CHILD
// ============================================================

const urlMappingSewaWaterpassFromSub2MoneyChild = {
  // ============================================================
  // [MONEY_CHILD] - SEWA WATERPASS PER LOKASI
  // ============================================================
  "https://www.betonjayareadymix.com/2019/03/sewa-waterpass-terdekat.html": "Sewa Waterpass Terdekat",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/03/sewa-waterpass-jakarta.html": "Sewa Waterpass Jakarta",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/03/sewa-waterpass-bogor.html": "Sewa Waterpass Bogor",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/03/sewa-waterpass-depok.html": "Sewa Waterpass Depok",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/03/sewa-waterpass-tangerang.html": "Sewa Waterpass Tangerang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/03/sewa-waterpass-bekasi.html": "Sewa Waterpass Bekasi",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/03/sewa-waterpass-karawang.html": "Sewa Waterpass Karawang",  // TYPE: MONEY_CHILD
};

// ============================================================
// 📁 SUB Jasa Alat Konstruksi - SEWA THEODOLITE (DETAIL LOKASI)
// 🧠 ENTITY: SEWA/RENTAL → TYPE: MONEY_CHILD
// ============================================================

const urlMappingSewaTheodoliteFromSub2MoneyChild = {
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

const urlMappingSewaAksesKeamananProyekFromSub2MoneyPage = {
  // ============================================================
  // [MONEY_PAGE] - SEWA AKSES KEAMANAN PROYEK
  // ============================================================
  "https://www.betonjayareadymix.com/2019/03/sewa-tangga-proyek.html": "Sewa Tangga Proyek",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2019/03/sewa-mobile-scaffold.html": "Sewa Mobile Scaffold",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2019/03/sewa-safety-barrier.html": "Sewa Safety Barrier",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2019/03/sewa-traffic-cone.html": "Sewa Traffic Cone",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2019/03/sewa-jaring-pengaman.html": "Sewa Jaring Pengaman",  // TYPE: MONEY_PAGE
};

// ============================================================
// 📁 SUB Jasa Alat Konstruksi - SEWA ALAT BOR GROUND WORK
// 🧠 ENTITY: SEWA/RENTAL → TYPE: MONEY_PAGE & MONEY_CHILD
// ============================================================

const urlMappingSewaAlatBorGroundWorkFromSub2MoneyPage = {
  // ============================================================
  // [MONEY_PAGE] - SEWA ALAT BOR
  // ============================================================
  "https://www.betonjayareadymix.com/2019/03/sewa-alat-bor-sumur.html": "Sewa Alat Bor Sumur",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2019/03/sewa-bor-tanah.html": "Sewa Bor Tanah",  // TYPE: MONEY_PAGE
  
  // ============================================================
  // [MONEY_CHILD] - SEWA ALAT BOR PER LOKASI
  // ============================================================
  "https://www.betonjayareadymix.com/2019/03/sewa-alat-bor-sumur-terdekat.html": "Sewa Alat Bor Sumur Terdekat",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/03/sewa-bor-tanah-terdekat.html": "Sewa Bor Tanah Terdekat",  // TYPE: MONEY_CHILD
};

// ============================================================
// 📁 SUB Jasa Alat Konstruksi - SEWA SISTEM PENDUKUNG PROYEK
// 🧠 ENTITY: SEWA/RENTAL → TYPE: MONEY_PAGE
// ============================================================

const urlMappingSewaSistemPendukungProyekFromSub2MoneyPage = {
  // ============================================================

};

// ============================================================
// 📁 SUB Jasa Alat Konstruksi - SEWA ALAT BERAT (MONEY PAGE, CHILD & MASTER)
// 🧠 ENTITY: SEWA/RENTAL → TYPE: MONEY_PAGE, MONEY_CHILD, MONEY_MASTER
// Parent: Sewa Alat Berat (SUB2)
// Breadcrumb: Home > Sewa Alat Konstruksi > Sewa Alat Berat > [Jenis Alat / Lokasi] (4 level)
// ============================================================

const urlMappingSewaAlatBeratPostFromSub1MoneyMaster = { 
// ============================================================
// [MONEY_MASTER] - PERTAHANKAN (ANGLE UNIK)
// ============================================================
"https://www.betonjayareadymix.com/2019/02/standar-harga-sewa-alat-berat.html": "Standar Harga Sewa Alat Berat",  // TYPE: MONEY_MASTER ✅ PERTAHANKAN
"https://www.betonjayareadymix.com/2019/02/daftar-harga-sewa-alat-berat-per-jam.html": "Daftar Harga Sewa Alat Berat Per Jam",  // TYPE: MONEY_MASTER ✅ PERTAHANKAN
// ============================================================
// [MONEY_MASTER] - HARGA SEWA ALAT BERAT (PER DURASI, PAKET HARGA)
// ============================================================
"https://www.betonjayareadymix.com/2019/02/sewa-alat-berat-per-hari.html": "Sewa Alat Berat per Hari",  // TYPE: MONEY_MASTER ✅ (fokus harga per durasi)
"https://www.betonjayareadymix.com/2019/02/sewa-alat-berat-per-jam.html": "Sewa Alat Berat per Jam",  // TYPE: MONEY_MASTER ✅ (fokus harga per durasi)
"https://www.betonjayareadymix.com/2019/02/sewa-alat-berat-all-in.html": "Sewa Alat Berat All In",  // TYPE: MONEY_MASTER ✅ (fokus paket harga)
// ============================================================
// [REDIRECT 301] - DUPLIKAT → KE /harga-sewa-alat-berat/
// ============================================================
// "https://.../info-harga-sewa-alat-berat.html"        → 301 redirect ke /harga-sewa-alat-berat.html
// "https://.../daftar-harga-sewa-alat-berat.html"      → 301 redirect ke /harga-sewa-alat-berat.html
// "https://.../berapa-harga-sewa-alat-berat.html"      → 301 redirect ke /harga-sewa-alat-berat.html
// "https://.../list-harga-sewa-alat-berat.html"        → 301 redirect ke /harga-sewa-alat-berat.html
// "https://.../daftar-harga-sewa-alat-berat-murah.html" → 301 redirect ke /harga-sewa-alat-berat.html
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
const urlMappingSewaAlatBeratPostFromMoneyMasterMoneyPage = { 
// ============================================================
  // [MONEY_PAGE] - INFORMASI & HARGA UMUM
  // ============================================================
  "https://www.betonjayareadymix.com/2019/02/sewa-alat-berat.html": "Sewa Alat Berat",  // TYPE: MONEY_PAGE PARENT
  "https://www.betonjayareadymix.com/2019/02/sewa-alat-berat-murah.html": "Sewa Alat Berat Murah",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2019/02/sewa-alat-berat-trakindo.html": "Sewa Alat Berat Trakindo"  // TYPE: MONEY_PAGE
};

const urlMappingSewaforkliftPostFromMoneyMasterMoneyPage = { 
  "https://www.betonjayareadymix.com/2019/02/sewa-forklift.html": "Sewa Forklift"  // TYPE: MONEY_PAGE PARENT
};
const urlMappingSewaCranePostFromMoneyMasterMoneyPage = { 
   "https://www.betonjayareadymix.com/2019/02/sewa-crane.html": "Sewa Crane" // TYPE: MONEY_PAGE PARENT
};
const urlMappingSewaSelfLoaderPostFromMoneyMasterMoneyPage = { 
  "https://www.betonjayareadymix.com/2019/02/sewa-self-loader.html": "Sewa Self Loader"  // TYPE: MONEY_PAGE PARENT
};
const urlMappingSewaWheelLoaderPostFromMoneyMasterMoneyPage = { 
   "https://www.betonjayareadymix.com/2019/02/sewa-wheel-loader.html": "Sewa Wheel Loader" // TYPE: MONEY_PAGE PARENT
};
const urlMappingSewaVibroRollerPostFromMoneyMasterMoneyPage = { 
   "https://www.betonjayareadymix.com/2019/02/sewa-vibro-roller.html": "Sewa Vibro Roller"  // TYPE: MONEY_PAGE PARENT
};
const urlMappingSewaWalesStoomPostFromMoneyMasterMoneyPage = { 
  "https://www.betonjayareadymix.com/2019/02/sewa-wales-stoom.html": "Sewa Wales Stoom"  // TYPE: MONEY_PAGE PARENT
};
const urlMappingSewaTandemRollerPostFromMoneyMasterMoneyPage = { 
  "https://www.betonjayareadymix.com/2019/02/sewa-tandem-roller.html": "Sewa Tandem Roller"  // TYPE: MONEY_PAGE PARENT
};
const urlMappingSewaBulldozerPostFromMoneyMasterMoneyPage = { 
  "https://www.betonjayareadymix.com/2019/02/sewa-bulldozer.html": "Sewa Bulldozer"  // TYPE: MONEY_PAGE PARENT
};
const urlMappingSewaExcavatorPostFromMoneyMasterMoneyPage = { 
 "https://www.betonjayareadymix.com/2019/02/sewa-excavator.html": "Sewa Excavator",  // TYPE: MONEY_PAGE PARENT
   "https://www.betonjayareadymix.com/2019/02/sewa-excavator-mini.html": "Sewa Excavator Mini",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2019/02/sewa-beko.html": "Sewa Beko"  // TYPE: MONEY_PAGE
};
const urlMappingSewaBackhoeLoaderPostFromMoneyMasterMoneyPage = { 
 "https://www.betonjayareadymix.com/2019/02/sewa-backhoe-loader.html": "Sewa Backhoe Loader"  // TYPE: MONEY_PAGE PARENT
};
const urlMappingSewaBabyRollerPostFromMoneyMasterMoneyPage = { 
   "https://www.betonjayareadymix.com/2019/02/sewa-baby-roller.html": "Sewa Baby Roller"  // TYPE: MONEY_PAGE PARENT
};
const urlMappingSewaMotorGraderPostFromMoneyMasterMoneyPage = { 
 "https://www.betonjayareadymix.com/2019/02/sewa-motor-grader.html": "Sewa Motor Grader" // TYPE: MONEY_PAGE PARENT
};
const urlMappingSewaAlatPancangPostFromMoneyMasterMoneyPage = { 
   "https://www.betonjayareadymix.com/2019/02/sewa-alat-pancang.html": "Sewa Alat Pancang"  // TYPE: MONEY_PAGE PARENT
};
const urlMappingSewaConcretePaverPostFromMoneyMasterMoneyPage = { 
  "https://www.betonjayareadymix.com/2019/02/sewa-concrete-paver.html": "Sewa Concrete Paver"  // TYPE: MONEY_PAGE PARENT
};
const urlMappingSewaTrencherPostFromMoneyMasterMoneyPage = { 
   "https://www.betonjayareadymix.com/2019/02/sewa-trencher.html": "Sewa Trencher"  // TYPE: MONEY_PAGE PARENT
};

const urlMappingSewaAlatBeratPostFromMoneyPageMoneyChild = {
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
// 📁 SUB Jasa Alat Konstruksi - SEWA MOTOR GRADER (MONEY MASTER)
// ============================================================

const urlMappingSewaMotorGraderFromSub2MoneyMaster = {
 
};

// ============================================================
// 📁 SUB Jasa Alat Konstruksi - SEWA TRENCHER (MONEY MASTER)
// ============================================================

const urlMappingSewaTrencherFromSub2MoneyMaster = {
  // ============================================================
  // [MONEY_MASTER] - SEWA TRENCHER (HARGA NASIONAL)
  // ============================================================
  "https://www.betonjayareadymix.com/2019/02/harga-sewa-trencher-mesin.html": "Harga Sewa Trencher Mesin",  // TYPE: MONEY_MASTER
};

// ============================================================
// 📁 SUB Jasa Alat Konstruksi - SEWA CONCRETE PAVER (MONEY MASTER)
// ============================================================

const urlMappingSewaConcretePaverFromSub2MoneyMaster = {
  // ============================================================
  // [MONEY_MASTER] - SEWA CONCRETE PAVER (HARGA NASIONAL)
  // ============================================================
  "https://www.betonjayareadymix.com/2019/02/harga-sewa-concrete-paver.html": "Harga Sewa Concrete Paver",  // TYPE: MONEY_MASTER
};

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

const urlMappingSewaBulldozerFromSub2MoneyMaster = {
  // ============================================================
  // [MONEY_MASTER] - SEWA BULLDOZER (HARGA NASIONAL)
  // ============================================================
  "https://www.betonjayareadymix.com/2019/02/harga-sewa-bulldozer.html": "Harga Sewa Bulldozer",  // TYPE: MONEY_MASTER
};

// ============================================================
// 📁 SUB Jasa Alat Konstruksi - SEWA FORKLIFT (MONEY MASTER)
// ============================================================

const urlMappingSewaForkliftFromSub2MoneyMaster = {
  // ============================================================
  // [MONEY_MASTER] - SEWA FORKLIFT (HARGA NASIONAL)
  // ============================================================
  "https://www.betonjayareadymix.com/2019/02/harga-sewa-forklift.html": "Harga Sewa Forklift",  // TYPE: MONEY_MASTER
};

// ============================================================
// 📁 SUB Jasa Alat Konstruksi - SEWA CRANE (MONEY MASTER)
// ============================================================

const urlMappingSewaCraneFromSub2MoneyMaster = {
  // ============================================================
  // [MONEY_MASTER] - SEWA CRANE (HARGA NASIONAL)
  // ============================================================
  "https://www.betonjayareadymix.com/2019/02/harga-sewa-crane.html": "Harga Sewa Crane",  // TYPE: MONEY_MASTER
};

// ============================================================
// 📁 SUB Jasa Alat Konstruksi - SEWA BACKHOE LOADER (MONEY MASTER)
// ============================================================

const urlMappingSewaBackhoeLoaderFromSub2MoneyMaster = {
  // ============================================================
  // [MONEY_MASTER] - SEWA BACKHOE LOADER (HARGA NASIONAL)
  // ============================================================
  "https://www.betonjayareadymix.com/2019/02/harga-sewa-backhoe-loader.html": "Harga Sewa Backhoe Loader",  // TYPE: MONEY_MASTER
};

// ============================================================
// 📁 SUB Jasa Alat Konstruksi - SEWA SELF LOADER (KOSONG - SARAN ITEM)
// ============================================================

const urlMappingSewaSelfLoaderFromSub2MoneyMaster = {
  // 🟡 SARAN ITEM (BELUM AKTIF - PERLU DIBUAT KONTEN)
  // "https://www.betonjayareadymix.com/2019/02/sewa-self-loader.html": "Sewa Self Loader",  // TYPE: MONEY_MASTER
  // "https://www.betonjayareadymix.com/2019/02/harga-sewa-self-loader.html": "Harga Sewa Self Loader",  // TYPE: MONEY_MASTER
  // "https://www.betonjayareadymix.com/2019/02/sewa-self-loader-jakarta.html": "Sewa Self Loader Jakarta",  // TYPE: MONEY_CHILD
  // "https://www.betonjayareadymix.com/2019/02/sewa-self-loader-per-hari.html": "Sewa Self Loader Per Hari",  // TYPE: MONEY_CHILD
};

// ============================================================
// 📁 SUB Jasa Alat Konstruksi - SEWA VIBRO ROLLER (MONEY MASTER)
// ============================================================

const urlMappingSewaVibroRollerFromSub2MoneyMaster = {
  // ============================================================
  // [MONEY_MASTER] - SEWA VIBRO ROLLER (HARGA NASIONAL)
  // ============================================================
  "https://www.betonjayareadymix.com/2019/02/harga-sewa-vibro-roller.html": "Harga Sewa Vibro Roller",  // TYPE: MONEY_MASTER
};

// ============================================================
// 📁 SUB Jasa Alat Konstruksi - SEWA WALES STOOM (KOSONG - SARAN ITEM)
// ============================================================

const urlMappingSewaWalesStoomFromSub2MoneyMaster = {
  // 🟡 SARAN ITEM (BELUM AKTIF - PERLU DIBUAT KONTEN)
  // "https://www.betonjayareadymix.com/2019/02/sewa-wales-stoom.html": "Sewa Wales Stoom",  // TYPE: MONEY_MASTER
  // "https://www.betonjayareadymix.com/2019/02/harga-sewa-wales-stoom.html": "Harga Sewa Wales Stoom",  // TYPE: MONEY_MASTER
  // "https://www.betonjayareadymix.com/2019/02/sewa-wales-stoom-jakarta.html": "Sewa Wales Stoom Jakarta",  // TYPE: MONEY_CHILD
};

// ============================================================
// 📁 SUB Jasa Alat Konstruksi - SEWA TANDEM ROLLER (KOSONG - SARAN ITEM)
// ============================================================

const urlMappingSewaTandemRollerFromSub2MoneyMaster = {
  // 🟡 SARAN ITEM (BELUM AKTIF - PERLU DIBUAT KONTEN)
  // "https://www.betonjayareadymix.com/2019/02/sewa-tandem-roller.html": "Sewa Tandem Roller",  // TYPE: MONEY_MASTER
  // "https://www.betonjayareadymix.com/2019/02/harga-sewa-tandem-roller.html": "Harga Sewa Tandem Roller",  // TYPE: MONEY_MASTER
  // "https://www.betonjayareadymix.com/2019/02/sewa-tandem-roller-jakarta.html": "Sewa Tandem Roller Jakarta",  // TYPE: MONEY_CHILD
};

// ============================================================
// 📁 SUB Jasa Alat Konstruksi - SEWA BABY ROLLER (MONEY MASTER)
// ============================================================

const urlMappingSewaBabyRollerFromSub2MoneyMaster = {
  // ============================================================
  // [MONEY_MASTER] - SEWA BABY ROLLER (HARGA NASIONAL)
  // ============================================================
  "https://www.betonjayareadymix.com/2019/02/harga-sewa-baby-roller.html": "Harga Sewa Baby Roller",  // TYPE: MONEY_MASTER
};

// ============================================================
// 📁 SUB Jasa Alat Konstruksi - SEWA WHEEL LOADER (MONEY MASTER)
// ============================================================

const urlMappingSewaWheelLoaderFromSub2MoneyMaster = {
  // ============================================================
  // [MONEY_MASTER] - SEWA WHEEL LOADER (HARGA NASIONAL)
  // ============================================================
  "https://www.betonjayareadymix.com/2019/02/harga-sewa-wheel-loader.html": "Harga Sewa Wheel Loader",  // TYPE: MONEY_MASTER
};

// ============================================================
// 📁 SEWA ALAT PANCANG - MONEY PAGE & MASTER
// 🧠 ENTITY: SEWA/RENTAL → TYPE: MONEY_MASTER
// Breadcrumb: Home > Sewa Alat Konstruksi > Sewa Alat Berat > Sewa Alat Pancang (4 level)
// ============================================================

const urlMappingSewaAlatPancangFromSub2MoneyMaster = {
  // ============================================================
  // [MONEY_MASTER] - SEWA ALAT PANCANG (BERDASARKAN JENIS ALAT)
  // ============================================================
  "https://www.betonjayareadymix.com/2019/02/sewa-alat-pancang-hidrolik.html": "Sewa Alat Pancang Hidrolik",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/2019/02/sewa-alat-pancang-hspd.html": "Sewa Alat Pancang HSPD",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/2019/02/sewa-alat-pancang-sheet-pile.html": "Sewa Alat Pancang Sheet Pile",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/2019/02/sewa-alat-pancang-mini-pile.html": "Sewa Alat Pancang Mini Pile",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/2019/02/sewa-alat-pancang-diesel-hammer.html": "Sewa Alat Pancang Diesel Hammer",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/2019/02/sewa-alat-pancang-drop-hammer.html": "Sewa Alat Pancang Drop Hammer",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/2019/02/sewa-pile-driver.html": "Sewa Pile Driver",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/2019/02/sewa-diesel-hammer.html": "Sewa Diesel Hammer",  // TYPE: MONEY_MASTER

  // ============================================================
  // [MONEY_MASTER] - HARGA SEWA ALAT PANCANG
  // ============================================================
  "https://www.betonjayareadymix.com/2019/02/harga-sewa-pile-driver.html": "Harga Sewa Pile Driver",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/2019/02/harga-sewa-diesel-hammer.html": "Harga Sewa Diesel Hammer",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/2019/02/harga-sewa-drop-hammer.html": "Harga Sewa Drop Hammer",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/2019/02/harga-sewa-alat-pancang-drop-hammer.html": "Harga Sewa Alat Pancang Drop Hammer",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/2019/02/harga-sewa-alat-pancang-hspd.html": "Harga Sewa Alat Pancang HSPD",  // TYPE: MONEY_MASTER
};

// ============================================================
// 📁 SEWA ALAT KONSTRUKSI RINGAN - MONEY PAGE & MASTER
// 🧠 ENTITY: SEWA/RENTAL → TYPE: MONEY_MASTER & MONEY_CHILD
// Parent: Sewa Alat Konstruksi Ringan (SUB2)
// Breadcrumb: Home > Sewa Alat Konstruksi > Sewa Alat Ringan > [Nama Alat] (4 level)
// ============================================================

const urlMappingSewaAlatKonstruksiRinganFromSub2MoneyMaster = {
  // ============================================================
  // [MONEY_MASTER] - SEWA ALAT CLEANING
  // ============================================================
  "https://www.betonjayareadymix.com/2019/02/jasa-sewa-alat-cleaning.html": "Jasa Sewa Alat Cleaning",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/2019/02/sewa-mesin-polisher.html": "Sewa Mesin Polisher",  // TYPE: MONEY_MASTER

  // ============================================================
  // [MONEY_MASTER] - SEWA ALAT POTONG & BOR
  // ============================================================
  "https://www.betonjayareadymix.com/2019/02/sewa-concrete-cutter.html": "Sewa Concrete Cutter",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/2019/02/sewa-jack-hammer.html": "Sewa Jack Hammer",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/2019/02/sewa-vibrator-beton.html": "Sewa Vibrator Beton",  // TYPE: MONEY_MASTER

  // ============================================================
  // [REDIRECT] - DUPLIKASI (canonical ke halaman sewa)
  // ============================================================
  "https://www.betonjayareadymix.com/2019/02/harga-sewa-concrete-cutter.html": "Harga Sewa Concrete Cutter",  // TYPE: REDIRECT
  "https://www.betonjayareadymix.com/2019/02/harga-sewa-jack-hammer.html": "Harga Sewa Jack Hammer",  // TYPE: REDIRECT
  "https://www.betonjayareadymix.com/2019/02/harga-sewa-mesin-vibrator-beton.html": "Harga Sewa Mesin Vibrator Beton",  // TYPE: REDIRECT

  // ============================================================
  // [MONEY_MASTER] - SEWA MESIN MOLEN
  // ============================================================
  "https://www.betonjayareadymix.com/2019/02/harga-sewa-mesin-molen.html": "Harga Sewa Mesin Molen",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/2019/02/sewa-mesin-molen.html": "Sewa Mesin Molen",  // TYPE: MONEY_MASTER

  // ============================================================
  // [MONEY_MASTER] - SEWA GENSET & KOMPRESOR
  // ============================================================
  "https://www.betonjayareadymix.com/2019/02/harga-sewa-mesin-genset.html": "Harga Sewa Mesin Genset",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/2019/02/sewa-genset.html": "Sewa Genset",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/2019/02/harga-sewa-mesin-compressor.html": "Harga Sewa Mesin Compressor",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/2019/02/sewa-mesin-compressor.html": "Sewa Mesin Compressor",  // TYPE: MONEY_MASTER

  // ============================================================
  // [MONEY_MASTER] - SEWA CUTTING BETON
  // ============================================================
  "https://www.betonjayareadymix.com/2019/02/harga-sewa-mesin-cutting-beton.html": "Harga Sewa Mesin Cutting Beton",  // TYPE: MONEY_MASTER
  
  // ============================================================
  // [MONEY_CHILD] - SEWA CUTTING BETON TERDEKAT (LOKASI)
  // ============================================================
  "https://www.betonjayareadymix.com/2019/02/sewa-cutting-beton-terdekat.html": "Sewa Cutting Beton Terdekat",  // TYPE: MONEY_CHILD

  // ============================================================
  // [MONEY_MASTER] - SEWA ALAT TAMAN
  // ============================================================
  "https://www.betonjayareadymix.com/2019/02/harga-sewa-mesin-potong-rumput.html": "Harga Sewa Mesin Potong Rumput",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/2019/02/sewa-mesin-potong-rumput.html": "Sewa Mesin Potong Rumput",  // TYPE: MONEY_MASTER

  // ============================================================
  // [MONEY_MASTER] - SEWA ALAT FINISHING
  // ============================================================
  "https://www.betonjayareadymix.com/2019/02/harga-sewa-mesin-trowel.html": "Harga Sewa Mesin Trowel",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/2019/02/harga-sewa-mesin-screed.html": "Harga Sewa Mesin Screed",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/2019/02/sewa-screed.html": "Sewa Screed",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/2019/02/sewa-trowel.html": "Sewa Trowel",  // TYPE: MONEY_MASTER

  // ============================================================
  // [MONEY_MASTER] - SEWA POMPA & STAMPER
  // ============================================================
  "https://www.betonjayareadymix.com/2019/02/harga-sewa-pompa-air.html": "Harga Sewa Pompa Air",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/2019/02/sewa-pompa-air.html": "Sewa Pompa Air",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/2019/02/harga-sewa-stamper.html": "Harga Sewa Stamper",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/2019/02/sewa-stamper.html": "Sewa Stamper",  // TYPE: MONEY_MASTER
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
// ============================================================
// FUNGSI GENERATE BREADCRUMB - VERSI FINAL
// UNTUK SEMUA ENTITY TYPE (PRODUK, MATERIAL, JASA, SEWA/RENTAL)
// SUPPORT: Produk Konstruksi, Material Konstruksi, Jasa Konstruksi, 
//          Produk Interior, Jasa Desain Interior, Sewa/Rental
// MAX_LEVEL = 4 (TERMASUK HOME)
// SKIP LEVEL BEKERJA UNTUK PILLAR & SUB2
// ============================================================

/**
 * generateBreadcrumbForMapping v5.8 — COMPLETE PHASE SYSTEM WITH ENTITY PILLAR EXACT MATCH
 * ✅ FIX: PRIORITAS MONEY: HARGA dulu, baru SEWA (sinkron dengan v5.9)
 * ✅ FIX: LOCATION_WHITELIST ditambah karawang, cikarang, purwakarta, dll
 * ✅ FIX: ENTITY PILLAR hanya EXACT MATCH berdasarkan CLEAN URL
 * ✅ FIX: "produk konstruksi" → PILLAR (L1)
 * ✅ FIX: "standar mutu produk konstruksi" → VARIANT (L7) BUKAN pillar
 * ✅ FIX: "jasa konstruksi" → PILLAR (L1)
 * ✅ FIX: "jasa konstruksi gedung sekolah" → MONEY_PAGE (L5) BUKAN pillar
 * ✅ FIX: "Sewa Alat Konstruksi" → PILLAR (L1)
 * ✅ FIX: "Produk Konstruksi", "Produk Interior" → PILLAR (L1)
 * ✅ FIX: "Material Konstruksi" → PILLAR (L1)
 * ✅ ENTITY PILLAR KEYWORDS untuk setiap entity type (EXACT MATCH)
 * ✅ VARIANT_KEYWORDS ditambah: standar, mutu, kualitas, quality, spec
 * ✅ SINKRON DENGAN Page Level Detector v18.7 dan AUTO-SCHEMA v5.9
 * ✅ PRIORITAS DETEKSI:
 *    0. HOMEPAGE
 *    1. ENTITY PILLAR (EXACT MATCH dari CLEAN URL) 🔥
 *    2. INFORMASIONAL (panduan, cara, tips) → PILLAR
 *    3. PERBANDINGAN (vs, versus) → SP1
 *    4. JENIS/MACAM/DAFTAR (jenis, macam, daftar) → SP2
 *    5. MONEY (harga, biaya, tarif, sewa, rental) → HARGA dulu, baru SEWA 🔥
 *    6. JASA/SEWA (tanpa keyword harga & bukan entity pillar) → MONEY_PAGE
 *    7. SUB-VARIANT (2+ parameter spesifikasi)
 *    8. VARIANT (spesifikasi, ukuran, standar, mutu, dll)
 *    9. DEFAULT → PILLAR
 * 
 * @version 5.8.0
 * @date 2026-01-15
 */

function generateBreadcrumbJasaAlatKonstruksiPost(mappingObj, currentUrl, breadcrumbItems = [], entityType = 'PRODUK_INTERIOR') {
    
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
            if (/^\d{4}$/.test(part)) return false;
            if (/^\d{2}$/.test(part)) return false;
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
    // 5. FUNGSI DETEKSI ENTITY PILLAR (EXACT MATCH DARI CLEAN URL) 🔥
    // ============================================================
    function isEntityPillarExactMatch(pageName, entityTypeParam) {
        const useEntityType = entityTypeParam || entityType;
        const lowerName = pageName.toLowerCase().trim();
        const pillarKeywords = ENTITY_PILLAR_KEYWORDS[useEntityType] || [];
        
        for (const kw of pillarKeywords) {
            if (lowerName === kw) {
                console.log(`  🏛️ ENTITY PILLAR detected (exact match from clean URL): "${kw}" → pillar (L1)`);
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
    
    // LEVEL 7: VARIANT (Spesifikasi umum - 1 parameter) 🔥 DITAMBAH standar, mutu, kualitas
    const VARIANT_KEYWORDS = [
        'spesifikasi', 'ukuran', 'tipe', 'type', 'model', 
        'varian', 'warna', 'merk', 'brand', 'kapasitas', 
        'dimensi', 'bahan', 'material', 'finishing', 'grade',
        'seri', 'serie', 'versi', 'generasi', 'detail teknis',
        'standar', 'mutu', 'kualitas', 'quality', 'spec'
    ];
    
    // ============================================================
    // 7. LOCATION WHITELIST (DIPERBESAR) 🔥
    // ============================================================
    const LOCATION_WHITELIST = new Set([
        // Jabodetabek
        'terdekat','jakarta', 'bogor', 'depok', 'tangerang', 'bekasi', 'jabodetabek',
        'jakpus', 'jakbar', 'jaksel', 'jakut', 'jaktim', 'tangsel',
        
        // Jawa Barat (diperluas)
        'bandung', 'cimahi', 'cirebon', 'tasikmalaya', 'sukabumi', 'garut',
        'sumedang', 'purwakarta', 'karawang', 'subang', 'indramayu',
        'majalengka', 'kuningan', 'ciamis', 'banjar', 'pangandaran',
        'cikarang', 'cibubur', 'ciputat', 'cileungsi', 'cibinong',
        
        // Jawa Tengah
        'semarang', 'solo', 'surakarta', 'yogyakarta', 'jogja', 'magelang',
        'salatiga', 'pekalongan', 'tegal', 'brebes', 'cilacap', 'purwokerto',
        'kebumen', 'banjarnegara', 'wonosobo', 'temanggung', 'kendal', 'demak',
        'kudus', 'jepara', 'pati', 'rembang', 'blora', 'grobogan',
        'sragen', 'karanganyar', 'wonogiri', 'sukoharjo', 'klaten', 'boyolali',
        
        // Jawa Timur
        'surabaya', 'malang', 'kediri', 'blitar', 'madiun', 'gresik', 'sidoarjo',
        'ponorogo', 'ngawi', 'magetan', 'trenggalek', 'tulungagung', 'nganjuk',
        'jombang', 'mojokerto', 'pasuruan', 'probolinggo', 'lumajang', 'jember',
        'banyuwangi', 'bondowoso', 'situbondo', 'pamekasan', 'sampang', 'sumenep',
        
        // Sumatera
        'medan', 'binjai', 'deli serdang', 'padang', 'pekanbaru', 'batam',
        'tanjung pinang', 'palembang', 'lampung', 'bandar lampung', 'metro',
        'bengkulu', 'jambi', 'tebing tinggi', 'pematang siantar', 'kisaran',
        
        // Kalimantan
        'pontianak', 'ketapang', 'singkawang', 'palangkaraya', 'balikpapan',
        'samarinda', 'bontang', 'tarakan', 'banjarmasin', 'banjarbaru',
        
        // Sulawesi
        'makassar', 'manado', 'palu', 'kendari', 'gorontalo', 'bitung', 'tomohon',
        
        // Bali & Nusa Tenggara
        'denpasar', 'bali', 'badung', 'gianyar', 'tabanan', 'bangli',
        'klungkung', 'karangasem', 'buleleng', 'jembrana', 'mataram', 'kupang'
    ]);
    
    const PRODUCT_BLACKLIST = new Set([
        'baja', 'ringan', 'galvalum', 'spandek', 'bondek', 'hebel', 'bata',
        'pasang', 'service', 'kontraktor', 'renovasi', 'borongan',
        'kayu', 'besi', 'aluminium', 'kaca', 'semen', 'pasir', 'batu',
        'hpl', 'mdf', 'jati', 'mahoni', 'multiplek', 'triplek'
    ]);
    
    function isLocation(text) {
        if (!text || text.length === 0) return false;
        
        const lowerText = text.toLowerCase();
        const words = lowerText.split(/[\s,-]+/);
        
        for (const word of words) {
            const cleanWord = word.replace(/[^a-z]/g, '');
            if (cleanWord.length < 3) continue;
            if (PRODUCT_BLACKLIST.has(cleanWord)) continue;
            if (LOCATION_WHITELIST.has(cleanWord)) {
                console.log(`  📍 Location detected: "${cleanWord}"`);
                return true;
            }
        }
        
        // Cek pola "di [kota]"
        if (lowerText.includes('di')) {
            const diIndex = lowerText.indexOf('di');
            if (diIndex >= 0 && diIndex + 3 <= lowerText.length) {
                const afterDi = lowerText.substring(diIndex + 2).trim();
                const afterDiWords = afterDi.split(/\s+/);
                if (afterDiWords.length > 0) {
                    const potentialCity = afterDiWords[0].replace(/[^a-z]/g, '');
                    if (LOCATION_WHITELIST.has(potentialCity)) {
                        console.log(`  📍 Location detected after 'di': "${potentialCity}"`);
                        return true;
                    }
                }
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
        if (!text || text.length === 0) return false;
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
        // PRIORITAS 1: ENTITY PILLAR (EXACT MATCH DARI CLEAN URL) 🔥
        // ============================================================
        if (isEntityPillarExactMatch(pageName, useEntityType)) {
            return 'pillar';
        }
        
        // ============================================================
        // PRIORITAS 2: MONEY LEVEL (HARGA DULU, BARU SEWA) 🔥
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
                
                // 🔥 CEK LOKASI DULU (UNTUK SEMUA ENTITY TYPE)
                if (isLocation(afterKw)) {
                    console.log(`  → Location detected → money-child (L6)`);
                    return 'money-child';
                }
                
                // 🔥 KHUSUS JASA: tidak boleh money-master
                if (isJasaEntity()) {
                    console.log(`  → JASA → money-page (L5)`);
                    return 'money-page';
                }
                
                // 🔥 KHUSUS SEWA: hitung wordCount
                if (isSewaEntity()) {
                    if (wordCount <= 2) {
                        console.log(`  → SEWA money-master (${wordCount} kata) → money-master (L4)`);
                        return 'money-master';
                    } else {
                        console.log(`  → SEWA money-page (${wordCount} kata) → money-page (L5)`);
                        return 'money-page';
                    }
                }
                
                // 🔥 UNTUK PRODUK/MATERIAL
                const isSpecific = isSpecificProduct(afterKw, wordCount);
                
                if (wordCount <= 2 || (wordCount === 3 && !isSpecific)) {
                    console.log(`  → money-master (${wordCount} kata) → money-master (L4)`);
                    return 'money-master';
                }
                
                console.log(`  → money-page (${wordCount} kata, specific=${isSpecific}) → money-page (L5)`);
                return 'money-page';
            }
        }
        
        // ============================================================
        // PRIORITAS 3: INFORMASIONAL KEYWORDS → PILLAR atau SP2
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
        // PRIORITAS 4: PERBANDINGAN (SP1)
        // ============================================================
        for (const kw of SP1_KEYWORDS) {
            if (lowerName.includes(kw)) {
                console.log(`  ⚖️ SP1 detected (${kw}) → sub-pillar-tipe-1 (L3)`);
                return 'sub-pillar-tipe-1';
            }
        }
        
        // ============================================================
        // PRIORITAS 5: JENIS/MACAM/DAFTAR (SP2)
        // ============================================================
        for (const kw of SP2_KEYWORDS) {
            if (lowerName.startsWith(kw) || lowerName.includes(kw + ' ') || lowerName.includes(kw + '-')) {
                console.log(`  📚 SP2 detected (${kw}) → sub-pillar-tipe-2 (L2)`);
                return 'sub-pillar-tipe-2';
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
                    // Hitung wordCount setelah "sewa"
                    const afterSewa = lowerName.split(kw)[1]?.trim() || '';
                    const wordCount = afterSewa.split(/\s+/).filter(w => w.length > 0).length;
                    if (wordCount <= 2) {
                        console.log(`  → SEWA money-master (${wordCount} kata) → money-master (L4)`);
                        return 'money-master';
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
        // PRIORITAS 8: VARIANT (Level 7) - termasuk standar, mutu, kualitas 🔥
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
    console.log(`📊 Breadcrumb Generator v5.8 — ENTITY PILLAR EXACT MATCH`);
    console.log(`📊 Entity Type: ${entityType}`);
    console.log(`📊 JASA Entity: ${isJasaEntity() ? 'YES' : 'NO'}`);
    console.log(`📊 SEWA Entity: ${isSewaEntity() ? 'YES' : 'NO'}`);
    console.log(`📊 PRIORITAS: HOME → ENTITY PILLAR → MONEY(HARGA dulu) → INFORMASIONAL → SP1 → SP2 → JASA/SEWA → SUB-VARIANT → VARIANT`);
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
        version: '5.8'
    };
}

// ============================================================
// RINGKASAN HASIL DETEKSI v5.8
// ============================================================
/*
| Clean URL | Hasil Deteksi | Level |
|-----------|---------------|-------|
| produk konstruksi | pillar | L1 ✅ |
| standar mutu produk konstruksi | variant | L7 ✅ |
| spesifikasi produk konstruksi | variant | L7 ✅ |
| jenis produk konstruksi | sub-pillar-tipe-2 | L2 ✅ |
| perbandingan produk konstruksi | sub-pillar-tipe-1 | L3 ✅ |
| harga produk konstruksi | money-master | L4 ✅ |
| jasa konstruksi | pillar | L1 ✅ |
| jasa konstruksi gedung sekolah | money-page | L5 ✅ |
| jasa pondasi sumuran karawang | money-child | L6 ✅ |
| sewa alat konstruksi | pillar | L1 ✅ |
| sewa alat konstruksi jakarta | money-child | L6 ✅ |
| sewa tower lamp | money-master | L4 ✅ |
| harga sewa tower lamp | money-page | L5 ✅ |
| material konstruksi | pillar | L1 ✅ |
| produk interior | pillar | L1 ✅ |
*/
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

	 // --- gabungkan semua mapping ---
    const urlMappingGabungan = Object.assign(
      {},
		urlMappingJasaAlatKonstruksiBridgeFromSub2Sub1MoneyPageMoneyChild,
		urlMappingJasaAlatKonstruksiBridgeFromSub2Sub1MoneyPageMoneyChildVariant,
		urlMappingJasaAlatKonstruksiBridgeFromSub2Sub1MoneyPageMoneyChildVariantSubVariant,
		urlMappingSewaAlatProyekFromMoneyMasterMoneyPage,
		urlMappingSewaAlatPendukungFromMoneyMasterMoneyPage,
		urlMappingSewaAlatProyekFromMoneyPageMoneyChild,
		urlMappingSewaPompaDewateringFromMoneyPageMoneyChild,
		urlMappingSewaPompaDewateringFromMoneyChildVariant,
		urlMappingSewaPompaAirDieselFromMoneyPageMoneyChild,
		urlMappingSewaPompaAirDieselFromMoneyChildVariant,
		urlMappingSewaMesinPompaAirFromMoneyPageMoneyChild,
		urlMappingSewaMesinPompaAirFromMoneyChildVariant,
		urlMappingSewaPompaLumpurFromMoneyPageMoneyChild,
		urlMappingSewaPompaLumpurFromMoneyChildVariant,
		urlMappingSewaPompaSedotLumpurFromMoneyPageMoneyChild,
		urlMappingSewaPompaSedotLumpurFromMoneyChildVariant,
		urlMappingSewaPompaBanjirFromMoneyPageMoneyChild,
		urlMappingSewaPompaBanjirFromMoneyChildVariant,
		urlMappingSewaPompaKapasitasBesarFromMoneyPageMoneyChild,
		urlMappingSewaPompaKapasitasBesarFromMoneyChildVariant,
		urlMappingSewaBakAirProyekFromMoneyPageMoneyChild,
		urlMappingSewaBakAirProyekFromMoneyChildVariant,
		urlMappingSewaTangkiAirFromMoneyPageMoneyChild,
		urlMappingSewaTangkiAirFromMoneyChildVariant,
		urlMappingSewaPipaProyekFromMoneyPageMoneyChild,
		urlMappingSewaPipaProyekFromMoneyChildVariant,
		urlMappingSewaSelangProyekFromMoneyPageMoneyChild,
		urlMappingSewaSelangProyekFromMoneyChildVariant,
		
		urlMappingSewaBekistingScaffoldingFromSub2MoneyPage,
		urlMappingSewaPencahayaanUtilitasFromSub2MoneyPage,
		urlMappingSewaAlatSurveyPengukuranFromSub2MoneyPage,
		urlMappingSewaTotalStationFromSub2MoneyChild,
		urlMappingSewaWaterpassFromSub2MoneyChild,
		urlMappingSewaTheodoliteFromSub2MoneyChild,
		urlMappingSewaAksesKeamananProyekFromSub2MoneyPage,
		urlMappingSewaAlatBorGroundWorkFromSub2MoneyPage,
		urlMappingSewaSistemPendukungProyekFromSub2MoneyPage,
		urlMappingSewaAlatBeratPostFromSub1MoneyMaster,
		urlMappingSewaAlatBeratPostFromMoneyMasterMoneyPage,
		urlMappingSewaAlatBeratPostFromMoneyPageMoneyChild,
		
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
		
		
		urlMappingSewaMotorGraderFromSub2MoneyMaster,
		urlMappingSewaAlatPancangFromSub2MoneyMaster,
		urlMappingSewaTrencherFromSub2MoneyMaster,
		urlMappingSewaConcretePaverFromSub2MoneyMaster,
		urlMappingSewaBulldozerFromSub2MoneyMaster,
		urlMappingSewaForkliftFromSub2MoneyMaster,
		urlMappingSewaCraneFromSub2MoneyMaster,
		urlMappingSewaBackhoeLoaderFromSub2MoneyMaster,
		urlMappingSewaSelfLoaderFromSub2MoneyMaster,
		urlMappingSewaVibroRollerFromSub2MoneyMaster,
		urlMappingSewaWalesStoomFromSub2MoneyMaster,
		urlMappingSewaTandemRollerFromSub2MoneyMaster,
		urlMappingSewaBabyRollerFromSub2MoneyMaster,
		urlMappingSewaWheelLoaderFromSub2MoneyMaster,
		urlMappingSewaAlatKonstruksiRinganFromSub2MoneyMaster
	
    );
	
    // --- validasi URL terdaftar ---
    if (!urlMappingGabungan[cleanUrlJasaKonsAlatKonstruksiPost]) {
      console.log(`[HybridDateModified] URL jasa-alat-konstruksi-post.js tidak terdaftar: ${cleanUrlJasaKonsAlatKonstruksiPost}`);
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
        		        // JASA ALAT KONSTRUKSI POST : Sub-Pillar Tipe 2, Sub-Pillar Tipe 1, Variant, Sub-Variant 
		
        return "2026-04-03T00:00:00+07:00";
		
      }
              /*

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
		        // JASA ALAT KONSTRUKSI POST : Sub-Pillar Tipe 2, Sub-Pillar Tipe 1, Variant, Sub-Variant 
        return "2026-04-03T00:00:00+07:00";
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
	//RESTORE CONTAINER
     restoreCondition('JasaKonsAlatKonstruksiPost');
	
	restoreCondition('SewaAlatKonstruksiPost');
    restoreCondition('SewaAlatProyekPost');

	//hapus pillar jasa konstruksi
	removeCondition('JasaKonstruksiAlatKonstruksiPost');
	removeCondition('JasaKonsAlatKonstruksiPost');

	//hapus semua entity jasa alat konstruksi
     removeCondition('EstimasiBiayaJasaAlatKonstruksiPost');
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
    
        //JasaKonstruksiAlatKonstruksiPostLink.style.visibility = 'visible';
        //JasaAlatKonstruksiPostLink.style.visibility = 'visible';
        SewaAlatKonstruksiPostLink.style.visibility = 'visible';
	//TAMPILKAN SewaAlatProyekPost
        SewaAlatProyekPostLink.style.visibility = 'visible';
        pageNameJasaKonsAlatKonstruksiPost.textContent = urlMappingSewaAlatProyekFromMoneyMasterMoneyPage[cleanUrlJasaKonsAlatKonstruksiPost];
    
		generateBreadcrumbJasaAlatKonstruksiPost(
        urlMappingSewaAlatProyekFromMoneyMasterMoneyPage,
        cleanUrlJasaKonsAlatKonstruksiPost,
        [
            //{ name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Sewa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/sewa-alat-konstruksi.html' },
            { name: 'Sewa Alat Proyek', url: 'https://www.betonjayareadymix.com/p/sewa-alat-proyek.html' },
            { name: 'Perbandingan Sewa Alat Proyek', url: 'https://www.betonjayareadymix.com/p/perbandingan-sewa-alat-proyek.html' },
            { name: 'Harga Sewa Alat Proyek', url: 'https://www.betonjayareadymix.com/p/harga-sewa-alat-proyek.html' }
        ],
        'SEWA_RENTAL'
    );
}
if (urlMappingSewaAlatPendukungFromMoneyMasterMoneyPage[cleanUrlJasaKonsAlatKonstruksiPost]) {

			generateBreadcrumbJasaAlatKonstruksiPost(
        urlMappingSewaAlatPendukungFromMoneyMasterMoneyPage,
        cleanUrlJasaKonsAlatKonstruksiPost,
        [
            //{ name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Sewa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/sewa-alat-konstruksi.html' },
            { name: 'Sewa Alat Pendukung', url: 'https://www.betonjayareadymix.com/p/sewa-alat-pendukung.html' },
            { name: 'Perbandingan Sewa Alat Pendukung', url: 'https://www.betonjayareadymix.com/p/perbandingan-sewa-alat-pendukung.html' },
            { name: 'Harga Sewa Alat Pendukung', url: 'https://www.betonjayareadymix.com/p/harga-sewa-alat-pendukung.html' }
        ],
        'SEWA_RENTAL'
    );
}
	
if (urlMappingSewaAlatProyekFromMoneyPageMoneyChild[cleanUrlJasaKonsAlatKonstruksiPost]) {
		generateBreadcrumbJasaAlatKonstruksiPost(
        urlMappingSewaAlatProyekFromMoneyPageMoneyChild,
        cleanUrlJasaKonsAlatKonstruksiPost,
        [
            //{ name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Sewa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/sewa-alat-konstruksi.html' },
            { name: 'Sewa Alat Proyek', url: 'https://www.betonjayareadymix.com/p/sewa-alat-proyek.html' },
            { name: 'Perbandingan Sewa Alat Proyek', url: 'https://www.betonjayareadymix.com/p/perbandingan-sewa-alat-proyek.html' },
            { name: 'Harga Sewa Alat Proyek', url: 'https://www.betonjayareadymix.com/p/harga-sewa-alat-proyek.html'},
            { name: 'Sewa Alat Proyek', url: 'https://www.betonjayareadymix.com/2019/02/sewa-alat-proyek.html'}
        ],
        'SEWA_RENTAL'
    );
}
//SUB SEWA ALAT PROYEK POST
  if (urlMappingSewaPompaDewateringFromMoneyPageMoneyChild[cleanUrlJasaKonsAlatKonstruksiPost]) {
	//RESTORE CONTAINER
     restoreCondition('JasaKonsAlatKonstruksiPost');

	  restoreCondition('SewaAlatKonstruksiPost');
    restoreCondition('SewaAlatProyekPost');
     restoreCondition('SewaAlatProyekPompaDewateringPost');
	  
	//hapus pillar jasa konstruksi
	removeCondition('JasaKonstruksiAlatKonstruksiPost');
	removeCondition('JasaKonsAlatKonstruksiPost');
	   
	

	//hapus semua entity jasa alat konstruksi
     removeCondition('EstimasiBiayaJasaAlatKonstruksiPost');
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
	   //hapus elemen SUB SewaAlatProyekPost lain selain SewaAlatProyekPompaDewateringPost
	  // removeCondition('SewaAlatProyekPompaDewateringPost');
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
    
        //JasaKonstruksiAlatKonstruksiPostLink.style.visibility = 'visible';
        //JasaAlatKonstruksiPostLink.style.visibility = 'visible';
        SewaAlatKonstruksiPostLink.style.visibility = 'visible';
	//TAMPILKAN SewaAlatProyekPost
        SewaAlatProyekPostLink.style.visibility = 'visible';
	   SewaAlatProyekPompaDewateringPostLink.style.visibility = 'visible';
        pageNameJasaKonsAlatKonstruksiPost.textContent = urlMappingSewaPompaDewateringFromMoneyPageMoneyChild[cleanUrlJasaKonsAlatKonstruksiPost];
    
          generateBreadcrumbJasaAlatKonstruksiPost(
        urlMappingSewaPompaDewateringFromMoneyPageMoneyChild,
        cleanUrlJasaKonsAlatKonstruksiPost,
        [
            //{ name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Sewa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/sewa-alat-konstruksi.html' },
            { name: 'Sewa Alat Proyek', url: 'https://www.betonjayareadymix.com/p/sewa-alat-proyek.html' },
			{ name: 'Perbandingan Sewa Alat Proyek', url: 'https://www.betonjayareadymix.com/p/perbandingan-sewa-alat-proyek.html' },
            { name: 'Harga Sewa Alat Proyek', url: 'https://www.betonjayareadymix.com/p/harga-sewa-alat-proyek.html' },
            { name: 'Sewa Pompa Dewatering Proyek', url: 'https://www.betonjayareadymix.com/2019/02/sewa-pompa-dewatering-proyek.html' }
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

  if (urlMappingSewaPompaAirDieselFromMoneyPageMoneyChild[cleanUrlJasaKonsAlatKonstruksiPost]) {
        //pageNameJasaKonsAlatKonstruksiPost.textContent = urlMappingSewaPompaAirDieselFromMoneyPageMoneyChild[cleanUrlJasaKonsAlatKonstruksiPost];
    
          generateBreadcrumbJasaAlatKonstruksiPost(
        urlMappingSewaPompaAirDieselFromMoneyPageMoneyChild,
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
    );
  }
	
if (urlMappingSewaPompaAirDieselFromMoneyChildVariant[cleanUrlJasaKonsAlatKonstruksiPost]) {
        pageNameJasaKonsAlatKonstruksiPost.textContent = urlMappingSewaPompaAirDieselFromMoneyChildVariant[cleanUrlJasaKonsAlatKonstruksiPost];
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

 if (urlMappingSewaPompaBanjirFromMoneyPageMoneyChild[cleanUrlJasaKonsAlatKonstruksiPost]) {
        pageNameJasaKonsAlatKonstruksiPost.textContent = urlMappingSewaPompaBanjirFromMoneyPageMoneyChild[cleanUrlJasaKonsAlatKonstruksiPost];
    
          generateBreadcrumbJasaAlatKonstruksiPost(
        urlMappingSewaPompaBanjirFromMoneyPageMoneyChild,
        cleanUrlJasaKonsAlatKonstruksiPost,
        [
            //{ name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Sewa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/sewa-alat-konstruksi.html' },
            { name: 'Sewa Alat Proyek', url: 'https://www.betonjayareadymix.com/p/sewa-alat-proyek.html' },
			{ name: 'Perbandingan Sewa Alat Proyek', url: 'https://www.betonjayareadymix.com/p/perbandingan-sewa-alat-proyek.html' },
            { name: 'Harga Sewa Alat Proyek', url: 'https://www.betonjayareadymix.com/p/harga-sewa-alat-proyek.html' },
            { name: 'Sewa Pompa Banjir', url: 'https://www.betonjayareadymix.com/2019/03/sewa-pompa-air-banjir.html' }
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

 if (urlMappingSewaPompaKapasitasBesarFromMoneyPageMoneyChild[cleanUrlJasaKonsAlatKonstruksiPost]) {
        pageNameJasaKonsAlatKonstruksiPost.textContent = urlMappingSewaPompaKapasitasBesarFromMoneyPageMoneyChild[cleanUrlJasaKonsAlatKonstruksiPost];
    
          generateBreadcrumbJasaAlatKonstruksiPost(
        urlMappingSewaPompaKapasitasBesarFromMoneyPageMoneyChild,
        cleanUrlJasaKonsAlatKonstruksiPost,
        [
            //{ name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Sewa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/sewa-alat-konstruksi.html' },
            { name: 'Sewa Alat Proyek', url: 'https://www.betonjayareadymix.com/p/sewa-alat-proyek.html' },
			{ name: 'Perbandingan Sewa Alat Proyek', url: 'https://www.betonjayareadymix.com/p/perbandingan-sewa-alat-proyek.html' },
            { name: 'Harga Sewa Alat Proyek', url: 'https://www.betonjayareadymix.com/p/harga-sewa-alat-proyek.html' },
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

 if (urlMappingSewaBakAirProyekFromMoneyPageMoneyChild[cleanUrlJasaKonsAlatKonstruksiPost]) {
        pageNameJasaKonsAlatKonstruksiPost.textContent = urlMappingSewaBakAirProyekFromMoneyPageMoneyChild[cleanUrlJasaKonsAlatKonstruksiPost];
    
          generateBreadcrumbJasaAlatKonstruksiPost(
        urlMappingSewaBakAirProyekFromMoneyPageMoneyChild,
        cleanUrlJasaKonsAlatKonstruksiPost,
        [
            //{ name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Sewa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/sewa-alat-konstruksi.html' },
            { name: 'Sewa Alat Proyek', url: 'https://www.betonjayareadymix.com/p/sewa-alat-proyek.html' },
			{ name: 'Perbandingan Sewa Alat Proyek', url: 'https://www.betonjayareadymix.com/p/perbandingan-sewa-alat-proyek.html' },
            { name: 'Harga Sewa Alat Proyek', url: 'https://www.betonjayareadymix.com/p/harga-sewa-alat-proyek.html' },
            { name: 'Sewa Bak Air Proyek', url: 'https://www.betonjayareadymix.com/2019/03/sewa-bak-air-proyek.html' }
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

 if (urlMappingSewaTangkiAirFromMoneyPageMoneyChild[cleanUrlJasaKonsAlatKonstruksiPost]) {
        pageNameJasaKonsAlatKonstruksiPost.textContent = urlMappingSewaTangkiAirFromMoneyPageMoneyChild[cleanUrlJasaKonsAlatKonstruksiPost];
    
          generateBreadcrumbJasaAlatKonstruksiPost(
        urlMappingSewaTangkiAirFromMoneyPageMoneyChild,
        cleanUrlJasaKonsAlatKonstruksiPost,
        [
            //{ name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Sewa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/sewa-alat-konstruksi.html' },
            { name: 'Sewa Alat Proyek', url: 'https://www.betonjayareadymix.com/p/sewa-alat-proyek.html' },
			{ name: 'Perbandingan Sewa Alat Proyek', url: 'https://www.betonjayareadymix.com/p/perbandingan-sewa-alat-proyek.html' },
            { name: 'Harga Sewa Alat Proyek', url: 'https://www.betonjayareadymix.com/p/harga-sewa-alat-proyek.html' },
            { name: 'Sewa Tangki Air', url: 'https://www.betonjayareadymix.com/2019/03/sewa-tangki-air.html' }
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
	
 if (urlMappingSewaPipaProyekFromMoneyPageMoneyChild[cleanUrlJasaKonsAlatKonstruksiPost]) {
        pageNameJasaKonsAlatKonstruksiPost.textContent = urlMappingSewaPipaProyekFromMoneyPageMoneyChild[cleanUrlJasaKonsAlatKonstruksiPost];
    
          generateBreadcrumbJasaAlatKonstruksiPost(
        urlMappingSewaPipaProyekFromMoneyPageMoneyChild,
        cleanUrlJasaKonsAlatKonstruksiPost,
        [
            //{ name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Sewa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/sewa-alat-konstruksi.html' },
            { name: 'Sewa Alat Proyek', url: 'https://www.betonjayareadymix.com/p/sewa-alat-proyek.html' },
			{ name: 'Perbandingan Sewa Alat Proyek', url: 'https://www.betonjayareadymix.com/p/perbandingan-sewa-alat-proyek.html' },
            { name: 'Harga Sewa Alat Proyek', url: 'https://www.betonjayareadymix.com/p/harga-sewa-alat-proyek.html' },
            { name: 'Sewa Pipa Proyek', url: 'https://www.betonjayareadymix.com/2019/03/sewa-pipa-proyek.html' }
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
	
 if (urlMappingSewaSelangProyekFromMoneyPageMoneyChild[cleanUrlJasaKonsAlatKonstruksiPost]) {
        pageNameJasaKonsAlatKonstruksiPost.textContent = urlMappingSewaSelangProyekFromMoneyPageMoneyChild[cleanUrlJasaKonsAlatKonstruksiPost];
    
          generateBreadcrumbJasaAlatKonstruksiPost(
        urlMappingSewaSelangProyekFromMoneyPageMoneyChild,
        cleanUrlJasaKonsAlatKonstruksiPost,
        [
            //{ name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Sewa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/sewa-alat-konstruksi.html' },
            { name: 'Sewa Alat Proyek', url: 'https://www.betonjayareadymix.com/p/sewa-alat-proyek.html' },
			{ name: 'Perbandingan Sewa Alat Proyek', url: 'https://www.betonjayareadymix.com/p/perbandingan-sewa-alat-proyek.html' },
            { name: 'Harga Sewa Alat Proyek', url: 'https://www.betonjayareadymix.com/p/harga-sewa-alat-proyek.html' },
            { name: 'Sewa Selang Proyek', url: 'https://www.betonjayareadymix.com/2019/03/sewa-selang-proyek.html' }
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
if (urlMappingSewaMesinPompaAirFromMoneyPageMoneyChild[cleanUrlJasaKonsAlatKonstruksiPost]) {
	//RESTORE CONTAINER
     restoreCondition('JasaKonsAlatKonstruksiPost');

	  restoreCondition('SewaAlatKonstruksiPost');
    restoreCondition('SewaAlatProyekPost');
     restoreCondition('SewaAlatProyekPompaDewateringPost');
	  
	//hapus pillar jasa konstruksi
	removeCondition('JasaKonstruksiAlatKonstruksiPost');
	removeCondition('JasaKonsAlatKonstruksiPost');
	   
	

	//hapus semua entity jasa alat konstruksi
     removeCondition('EstimasiBiayaJasaAlatKonstruksiPost');
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
	   //hapus elemen SUB SewaAlatProyekPost lain selain SewaAlatProyekPompaDewateringPost
	  // removeCondition('SewaAlatProyekPompaDewateringPost');
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
    
        //JasaKonstruksiAlatKonstruksiPostLink.style.visibility = 'visible';
        //JasaAlatKonstruksiPostLink.style.visibility = 'visible';
        SewaAlatKonstruksiPostLink.style.visibility = 'visible';
	//TAMPILKAN SewaAlatProyekPost
        SewaAlatProyekPostLink.style.visibility = 'visible';
	   SewaAlatProyekPompaDewateringPostLink.style.visibility = 'visible';
        pageNameJasaKonsAlatKonstruksiPost.textContent = urlMappingSewaMesinPompaAirFromMoneyPageMoneyChild[cleanUrlJasaKonsAlatKonstruksiPost];
    
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
	
  if (urlMappingSewaPompaLumpurFromMoneyPageMoneyChild[cleanUrlJasaKonsAlatKonstruksiPost]) {
	//RESTORE CONTAINER
     restoreCondition('JasaKonsAlatKonstruksiPost');

	  restoreCondition('SewaAlatKonstruksiPost');
    restoreCondition('SewaAlatProyekPost');
     restoreCondition('SewaAlatProyekPompaDewateringPost');
	  
	//hapus pillar jasa konstruksi
	removeCondition('JasaKonstruksiAlatKonstruksiPost');
	removeCondition('JasaKonsAlatKonstruksiPost');
	   
	

	//hapus semua entity jasa alat konstruksi
     removeCondition('EstimasiBiayaJasaAlatKonstruksiPost');
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
	   //hapus elemen SUB SewaAlatProyekPost lain selain SewaAlatProyekPompaDewateringPost
	  // removeCondition('SewaAlatProyekPompaDewateringPost');
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
    
        //JasaKonstruksiAlatKonstruksiPostLink.style.visibility = 'visible';
        //JasaAlatKonstruksiPostLink.style.visibility = 'visible';
        SewaAlatKonstruksiPostLink.style.visibility = 'visible';
	//TAMPILKAN SewaAlatProyekPost
        SewaAlatProyekPostLink.style.visibility = 'visible';
	   SewaAlatProyekPompaDewateringPostLink.style.visibility = 'visible';
        pageNameJasaKonsAlatKonstruksiPost.textContent = urlMappingSewaPompaLumpurFromMoneyPageMoneyChild[cleanUrlJasaKonsAlatKonstruksiPost];
    
          generateBreadcrumbJasaAlatKonstruksiPost(
        urlMappingSewaPompaLumpurFromMoneyPageMoneyChild,
        cleanUrlJasaKonsAlatKonstruksiPost,
        [
            //{ name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Sewa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/sewa-alat-konstruksi.html' },
            { name: 'Sewa Alat Proyek', url: 'https://www.betonjayareadymix.com/p/sewa-alat-proyek.html' },
			{ name: 'Perbandingan Sewa Alat Proyek', url: 'https://www.betonjayareadymix.com/p/perbandingan-sewa-alat-proyek.html' },
            { name: 'Harga Sewa Alat Proyek', url: 'https://www.betonjayareadymix.com/p/harga-sewa-alat-proyek.html' },
            { name: 'Sewa Pompa Lumpur', url: 'https://www.betonjayareadymix.com/2019/03/sewa-pompa-lumpur.html' }
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

  if (urlMappingSewaPompaSedotLumpurFromMoneyPageMoneyChild[cleanUrlJasaKonsAlatKonstruksiPost]) {
        //pageNameJasaKonsAlatKonstruksiPost.textContent = urlMappingSewaPompaSedotLumpurFromMoneyPageMoneyChild[cleanUrlJasaKonsAlatKonstruksiPost];
    
          generateBreadcrumbJasaAlatKonstruksiPost(
        urlMappingSewaPompaSedotLumpurFromMoneyPageMoneyChild,
        cleanUrlJasaKonsAlatKonstruksiPost,
        [
            //{ name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Sewa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/sewa-alat-konstruksi.html' },
            { name: 'Sewa Alat Proyek', url: 'https://www.betonjayareadymix.com/p/sewa-alat-proyek.html' },
			{ name: 'Perbandingan Sewa Alat Proyek', url: 'https://www.betonjayareadymix.com/p/perbandingan-sewa-alat-proyek.html' },
            { name: 'Harga Sewa Alat Proyek', url: 'https://www.betonjayareadymix.com/p/harga-sewa-alat-proyek.html' },
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

if (urlMappingSewaBekistingScaffoldingFromSub2MoneyPage[cleanUrlJasaKonsAlatKonstruksiPost]) {
//RESTORE CONTAINER
     restoreCondition('JasaKonsAlatKonstruksiPost');

	restoreCondition('SewaAlatKonstruksiPost');
    restoreCondition('SewaAlatProyekPost');
    restoreCondition('SewaAlatProyekBekistingScaffoldingPost');
	  
	//hapus pillar jasa konstruksi
	removeCondition('JasaKonstruksiAlatKonstruksiPost');
	removeCondition('JasaKonsAlatKonstruksiPost');

	//hapus semua entity jasa alat konstruksi
     removeCondition('EstimasiBiayaJasaAlatKonstruksiPost');
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
	   //hapus elemen SUB SewaAlatProyekPost lain selain SewaAlatProyekBekistingScaffoldingPost
	  removeCondition('SewaAlatProyekPompaDewateringPost');
	  //removeCondition('SewaAlatProyekBekistingScaffoldingPost');
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
    
        //JasaKonstruksiAlatKonstruksiPostLink.style.visibility = 'visible';
        //JasaAlatKonstruksiPostLink.style.visibility = 'visible';
	
        SewaAlatKonstruksiPostLink.style.visibility = 'visible';
	//TAMPILKAN SewaAlatProyekPost
        SewaAlatProyekPostLink.style.visibility = 'visible';
	   	SewaAlatProyekBekistingScaffoldingPostLink.style.visibility = 'visible';
        pageNameJasaKonsAlatKonstruksiPost.textContent = urlMappingSewaBekistingScaffoldingFromSub2MoneyPage[cleanUrlJasaKonsAlatKonstruksiPost];
    
           generateBreadcrumbJasaAlatKonstruksiPost(
        urlMappingSewaBekistingScaffoldingFromSub2MoneyPage,
        cleanUrlJasaKonsAlatKonstruksiPost,
        [
            //{ name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Sewa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/sewa-alat-konstruksi.html' },
            { name: 'Sewa Alat Proyek', url: 'https://www.betonjayareadymix.com/p/sewa-alat-proyek.html' },
            { name: 'Sewa Bekisting Scaffolding', url: 'https://www.betonjayareadymix.com/2019/02/sewa-bekisting-scaffolding.html' }
        ],
        'SEWA_RENTAL'
    );
 }
   

 if (urlMappingSewaPencahayaanUtilitasFromSub2MoneyPage[cleanUrlJasaKonsAlatKonstruksiPost]) {
//RESTORE CONTAINER
     restoreCondition('JasaKonsAlatKonstruksiPost');

	restoreCondition('SewaAlatKonstruksiPost'); 
    restoreCondition('SewaAlatProyekPost');
   	restoreCondition('SewaAlatProyekPencahayaanUtilitasPost');
	  
	//hapus pillar jasa konstruksi
	removeCondition('JasaKonstruksiAlatKonstruksiPost');
	removeCondition('JasaKonsAlatKonstruksiPost');

	 

	//hapus semua entity jasa alat konstruksi
     removeCondition('EstimasiBiayaJasaAlatKonstruksiPost');
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
	   //hapus elemen SUB SewaAlatProyekPost lain selain SewaAlatProyekPencahayaanUtilitasPost
	  removeCondition('SewaAlatProyekPompaDewateringPost');
	  removeCondition('SewaAlatProyekBekistingScaffoldingPost');
	  //removeCondition('SewaAlatProyekPencahayaanUtilitasPost');
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
    
        //JasaKonstruksiAlatKonstruksiPostLink.style.visibility = 'visible';
        //JasaAlatKonstruksiPostLink.style.visibility = 'visible';
        SewaAlatKonstruksiPostLink.style.visibility = 'visible';
	//TAMPILKAN SewaAlatProyekPost
        SewaAlatProyekPostLink.style.visibility = 'visible';
	   SewaAlatProyekPencahayaanUtilitasPostLink.style.visibility = 'visible';
        pageNameJasaKonsAlatKonstruksiPost.textContent = urlMappingSewaPencahayaanUtilitasFromSub2MoneyPage[cleanUrlJasaKonsAlatKonstruksiPost];
    
	 generateBreadcrumbJasaAlatKonstruksiPost(
        urlMappingSewaPencahayaanUtilitasFromSub2MoneyPage,
        cleanUrlJasaKonsAlatKonstruksiPost,
        [
            //{ name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Sewa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/sewa-alat-konstruksi.html' },
            { name: 'Sewa Alat Proyek', url: 'https://www.betonjayareadymix.com/p/sewa-alat-proyek.html' },
            { name: 'Sewa Pencahayaan Utilitas', url: 'https://www.betonjayareadymix.com/2019/02/sewa-pencahayaan-utilitas.html' }
        ],
        'SEWA_RENTAL'
    );
 }
   
if (urlMappingSewaAlatSurveyPengukuranFromSub2MoneyPage[cleanUrlJasaKonsAlatKonstruksiPost]) {
//RESTORE CONTAINER
     restoreCondition('JasaKonsAlatKonstruksiPost');

	restoreCondition('SewaAlatKonstruksiPost');
    restoreCondition('SewaAlatProyekPost');
   	restoreCondition('SewaAlatProyekSurveyPengukuranPost');
	  
	//hapus pillar jasa konstruksi
	removeCondition('JasaKonstruksiAlatKonstruksiPost');
	removeCondition('JasaKonsAlatKonstruksiPost');


	

	//hapus semua entity jasa alat konstruksi
     removeCondition('EstimasiBiayaJasaAlatKonstruksiPost');
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
	   //hapus elemen SUB SewaAlatProyekPost lain selain SewaAlatProyekSurveyPengukuranPost
	  removeCondition('SewaAlatProyekPompaDewateringPost');
	  removeCondition('SewaAlatProyekBekistingScaffoldingPost');
	  removeCondition('SewaAlatProyekPencahayaanUtilitasPost');
	  //removeCondition('SewaAlatProyekSurveyPengukuranPost');
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
    
        //JasaKonstruksiAlatKonstruksiPostLink.style.visibility = 'visible';
        //JasaAlatKonstruksiPostLink.style.visibility = 'visible';
	
        SewaAlatKonstruksiPostLink.style.visibility = 'visible';
	//TAMPILKAN SewaAlatProyekPost
        SewaAlatProyekPostLink.style.visibility = 'visible';
	   SewaAlatProyekSurveyPengukuranPostLink.style.visibility = 'visible';
        pageNameJasaKonsAlatKonstruksiPost.textContent = urlMappingSewaAlatSurveyPengukuranFromSub2MoneyPage[cleanUrlJasaKonsAlatKonstruksiPost];
    
        generateBreadcrumbJasaAlatKonstruksiPost(
        urlMappingSewaAlatSurveyPengukuranFromSub2MoneyPage,
        cleanUrlJasaKonsAlatKonstruksiPost,
        [
            //{ name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Sewa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/sewa-alat-konstruksi.html' },
            { name: 'Sewa Alat Proyek', url: 'https://www.betonjayareadymix.com/p/sewa-alat-proyek.html' },
            { name: 'Sewa Alat Survey Pengukuran', url: 'https://www.betonjayareadymix.com/2019/02/sewa-alat-survey-pengukuran.html' }
        ],
        'SEWA_RENTAL'
    );
}
   
 //SUB SEWA  ALAT SURVEY
if (urlMappingSewaTotalStationFromSub2MoneyChild[cleanUrlJasaKonsAlatKonstruksiPost]) {
//RESTORE CONTAINER
     restoreCondition('JasaKonsAlatKonstruksiPost');

	   restoreCondition('SewaAlatKonstruksiPost');
        restoreCondition('SewaAlatProyekPost');
	    restoreCondition('SewaAlatProyekSurveyPengukuranPost');
	    restoreCondition('SewaAlatProyekSurveyPengukuranTotalStationPost');
	  
	//hapus pillar jasa konstruksi
	removeCondition('JasaKonstruksiAlatKonstruksiPost');
	removeCondition('JasaKonsAlatKonstruksiPost');

	

	//hapus semua entity jasa alat konstruksi
     removeCondition('EstimasiBiayaJasaAlatKonstruksiPost');
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
	   //hapus elemen SUB SewaAlatProyekPost lain selain SewaAlatProyekSurveyPengukuranPost
	  removeCondition('SewaAlatProyekPompaDewateringPost');
	  removeCondition('SewaAlatProyekBekistingScaffoldingPost');
	  removeCondition('SewaAlatProyekPencahayaanUtilitasPost');
	  //removeCondition('SewaAlatProyekSurveyPengukuranPost');
	  removeCondition('SewaAlatProyekAksesKeamananPost');
	  removeCondition('SewaAlatProyekBorGroundWorkPost');
	  removeCondition('SewaAlatProyekSistemPendukungPost');

	 //HAPUS SEMUA SUB SEWA ALAT SURVEY KECUALI SewaAlatProyekSurveyPengukuranTotalStationPost
     //removeCondition('SewaAlatProyekSurveyPengukuranTotalStationPost');
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
    
        //JasaKonstruksiAlatKonstruksiPostLink.style.visibility = 'visible';
        //JasaAlatKonstruksiPostLink.style.visibility = 'visible';
	
        SewaAlatKonstruksiPostLink.style.visibility = 'visible';
	//TAMPILKAN SewaAlatProyekPost
        SewaAlatProyekPostLink.style.visibility = 'visible';
	   	SewaAlatProyekSurveyPengukuranPostLink.style.visibility = 'visible';
	  	SewaAlatProyekSurveyPengukuranTotalStationPostLink.style.visibility = 'visible';
        pageNameJasaKonsAlatKonstruksiPost.textContent = urlMappingSewaTotalStationFromSub2MoneyChild[cleanUrlJasaKonsAlatKonstruksiPost];
   
     generateBreadcrumbJasaAlatKonstruksiPost(
        urlMappingSewaTotalStationFromSub2MoneyChild,
        cleanUrlJasaKonsAlatKonstruksiPost,
        [
            //{ name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Sewa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/sewa-alat-konstruksi.html' },
            { name: 'Sewa Alat Proyek', url: 'https://www.betonjayareadymix.com/p/sewa-alat-proyek.html' },
            { name: 'Sewa Alat Survey Pengukuran', url: 'https://www.betonjayareadymix.com/2019/02/sewa-alat-survey-pengukuran.html' },
            { name: 'Sewa Total Station', url: 'https://www.betonjayareadymix.com/2019/03/sewa-total-station.html' }
        ],
        'SEWA_RENTAL'
    );
}
  
if (urlMappingSewaWaterpassFromSub2MoneyChild[cleanUrlJasaKonsAlatKonstruksiPost]) {
//RESTORE CONTAINER
     restoreCondition('JasaKonsAlatKonstruksiPost');

	restoreCondition('SewaAlatKonstruksiPost');
        restoreCondition('SewaAlatProyekPost');
	    restoreCondition('SewaAlatProyekSurveyPengukuranPost');
	    restoreCondition('SewaAlatProyekSurveyPengukuranWaterpassPost');
	  
	//hapus pillar jasa konstruksi
	removeCondition('JasaKonstruksiAlatKonstruksiPost');
	removeCondition('JasaKonsAlatKonstruksiPost');

	

	//hapus semua entity jasa alat konstruksi
     removeCondition('EstimasiBiayaJasaAlatKonstruksiPost');
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
	   //hapus elemen SUB SewaAlatProyekPost lain selain SewaAlatProyekSurveyPengukuranPost
	  removeCondition('SewaAlatProyekPompaDewateringPost');
	  removeCondition('SewaAlatProyekBekistingScaffoldingPost');
	  removeCondition('SewaAlatProyekPencahayaanUtilitasPost');
	  //removeCondition('SewaAlatProyekSurveyPengukuranPost');
	  removeCondition('SewaAlatProyekAksesKeamananPost');
	  removeCondition('SewaAlatProyekBorGroundWorkPost');
	  removeCondition('SewaAlatProyekSistemPendukungPost');

		 //HAPUS SEMUA SUB SEWA ALAT SURVEY KECUALI SewaAlatProyekSurveyPengukuranWaterpassPost
     removeCondition('SewaAlatProyekSurveyPengukuranTotalStationPost');
	 //removeCondition('SewaAlatProyekSurveyPengukuranWaterpassPost');
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
    
        //JasaKonstruksiAlatKonstruksiPostLink.style.visibility = 'visible';
        //JasaAlatKonstruksiPostLink.style.visibility = 'visible';
	
        SewaAlatKonstruksiPostLink.style.visibility = 'visible';
	//TAMPILKAN SewaAlatProyekPost
        SewaAlatProyekPostLink.style.visibility = 'visible';
	   SewaAlatProyekSurveyPengukuranPostLink.style.visibility = 'visible';
	   SewaAlatProyekSurveyPengukuranWaterpassPostLink.style.visibility = 'visible';
        pageNameJasaKonsAlatKonstruksiPost.textContent = urlMappingSewaWaterpassFromSub2MoneyChild[cleanUrlJasaKonsAlatKonstruksiPost];
   
		generateBreadcrumbJasaAlatKonstruksiPost(
        urlMappingSewaWaterpassFromSub2MoneyChild,
        cleanUrlJasaKonsAlatKonstruksiPost,
        [
            //{ name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Sewa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/sewa-alat-konstruksi.html' },
            { name: 'Sewa Alat Proyek', url: 'https://www.betonjayareadymix.com/p/sewa-alat-proyek.html' },
            { name: 'Sewa Alat Survey Pengukuran', url: 'https://www.betonjayareadymix.com/2019/02/sewa-alat-survey-pengukuran.html' },
            { name: 'Sewa Waterpass', url: 'https://www.betonjayareadymix.com/2019/03/sewa-waterpass.html' }
        ],
        'SEWA_RENTAL'
    );
}
  
if (urlMappingSewaTheodoliteFromSub2MoneyChild[cleanUrlJasaKonsAlatKonstruksiPost]) {
	//RESTORE CONTAINER
     restoreCondition('JasaKonsAlatKonstruksiPost');

	   restoreCondition('SewaAlatKonstruksiPost');
        restoreCondition('SewaAlatProyekPost');
	    restoreCondition('SewaAlatProyekSurveyPengukuranPost');
	   restoreCondition('SewaAlatProyekSurveyPengukuranTheodolitePost');
	  
	//hapus pillar jasa konstruksi
	removeCondition('JasaKonstruksiAlatKonstruksiPost');
	removeCondition('JasaKonsAlatKonstruksiPost');
	    
	

	//hapus semua entity jasa alat konstruksi
     removeCondition('EstimasiBiayaJasaAlatKonstruksiPost');
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
	   //hapus elemen SUB SewaAlatProyekPost lain selain SewaAlatProyekSurveyPengukuranPost
	  removeCondition('SewaAlatProyekPompaDewateringPost');
	  removeCondition('SewaAlatProyekBekistingScaffoldingPost');
	  removeCondition('SewaAlatProyekPencahayaanUtilitasPost');
	  //removeCondition('SewaAlatProyekSurveyPengukuranPost');
	  removeCondition('SewaAlatProyekAksesKeamananPost');
	  removeCondition('SewaAlatProyekBorGroundWorkPost');
	  removeCondition('SewaAlatProyekSistemPendukungPost');

	  //HAPUS SEMUA SUB SEWA ALAT SURVEY KECUALI SewaAlatProyekSurveyPengukuranTheodolitePost
     removeCondition('SewaAlatProyekSurveyPengukuranTotalStationPost');
	 removeCondition('SewaAlatProyekSurveyPengukuranWaterpassPost');
     //removeCondition('SewaAlatProyekSurveyPengukuranTheodolitePost');
	
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
    
        //JasaKonstruksiAlatKonstruksiPostLink.style.visibility = 'visible';
        //JasaAlatKonstruksiPostLink.style.visibility = 'visible';
	
        SewaAlatKonstruksiPostLink.style.visibility = 'visible';
	//TAMPILKAN SewaAlatProyekPost
    	SewaAlatProyekPostLink.style.visibility = 'visible';
	   	SewaAlatProyekSurveyPengukuranPostLink.style.visibility = 'visible';
	   	SewaAlatProyekSurveyPengukuranTheodolitePostLink.style.visibility = 'visible';
        pageNameJasaKonsAlatKonstruksiPost.textContent = urlMappingSewaTheodoliteFromSub2MoneyChild[cleanUrlJasaKonsAlatKonstruksiPost];
    
		   generateBreadcrumbJasaAlatKonstruksiPost(
        urlMappingSewaTheodoliteFromSub2MoneyChild,
        cleanUrlJasaKonsAlatKonstruksiPost,
        [
           // { name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Sewa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/sewa-alat-konstruksi.html' },
            { name: 'Sewa Alat Proyek', url: 'https://www.betonjayareadymix.com/p/sewa-alat-proyek.html' },
            { name: 'Sewa Alat Survey Pengukuran', url: 'https://www.betonjayareadymix.com/2019/02/sewa-alat-survey-pengukuran.html' },
            { name: 'Sewa Theodolite', url: 'https://www.betonjayareadymix.com/2019/03/sewa-theodolite.html' }
        ],
        'SEWA_RENTAL'
    );
}
   
	
  if (urlMappingSewaAksesKeamananProyekFromSub2MoneyPage[cleanUrlJasaKonsAlatKonstruksiPost]) {
//RESTORE CONTAINER
     restoreCondition('JasaKonsAlatKonstruksiPost');

	  restoreCondition('SewaAlatKonstruksiPost');
        restoreCondition('SewaAlatProyekPost');
	    restoreCondition('SewaAlatProyekAksesKeamananPost');
	  
	//hapus pillar jasa konstruksi
	removeCondition('JasaKonstruksiAlatKonstruksiPost');
	removeCondition('JasaKonsAlatKonstruksiPost');
	    
	

	//hapus semua entity jasa alat konstruksi
     removeCondition('EstimasiBiayaJasaAlatKonstruksiPost');
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
	  
	   //hapus elemen SUB SewaAlatProyekPost lain selain SewaAlatProyekAksesKeamananPost
	  removeCondition('SewaAlatProyekPompaDewateringPost');
	  removeCondition('SewaAlatProyekBekistingScaffoldingPost');
	  removeCondition('SewaAlatProyekPencahayaanUtilitasPost');
	  removeCondition('SewaAlatProyekSurveyPengukuranPost');
	  //removeCondition('SewaAlatProyekAksesKeamananPost');
	  removeCondition('SewaAlatProyekBorGroundWorkPost');
	  removeCondition('SewaAlatProyekSistemPendukungPost');

	  //HAPUS SEMUA SUB SEWA ALAT SURVEY 
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
    
        //JasaKonstruksiAlatKonstruksiPostLink.style.visibility = 'visible';
        //JasaAlatKonstruksiPostLink.style.visibility = 'visible';
        SewaAlatKonstruksiPostLink.style.visibility = 'visible';
	//TAMPILKAN SewaAlatProyekPost
        SewaAlatProyekPostLink.style.visibility = 'visible';
	   	SewaAlatProyekAksesKeamananPostLink.style.visibility = 'visible';
        pageNameJasaKonsAlatKonstruksiPost.textContent = urlMappingSewaAksesKeamananProyekFromSub2MoneyPage[cleanUrlJasaKonsAlatKonstruksiPost];
    
  		    generateBreadcrumbJasaAlatKonstruksiPost(
        urlMappingSewaAksesKeamananProyekFromSub2MoneyPage,
        cleanUrlJasaKonsAlatKonstruksiPost,
        [
            //{ name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Sewa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/sewa-alat-konstruksi.html' },
            { name: 'Sewa Alat Proyek', url: 'https://www.betonjayareadymix.com/p/sewa-alat-proyek.html' },
            { name: 'Sewa Akses Keamanan Proyek', url: 'https://www.betonjayareadymix.com/2019/02/sewa-akses-keamanan-proyek.html' }
        ],
        'SEWA_RENTAL'
    );
  }
   
  if (urlMappingSewaAlatBorGroundWorkFromSub2MoneyPage[cleanUrlJasaKonsAlatKonstruksiPost]) {
//RESTORE CONTAINER
     restoreCondition('JasaKonsAlatKonstruksiPost');

	 restoreCondition('SewaAlatKonstruksiPost'); 
        restoreCondition('SewaAlatProyekPost');
	   restoreCondition('SewaAlatProyekBorGroundWorkPost');
	  
	//hapus pillar jasa konstruksi
	removeCondition('JasaKonstruksiAlatKonstruksiPost');
	removeCondition('JasaKonsAlatKonstruksiPost');

	

	//hapus semua entity jasa alat konstruksi
     removeCondition('EstimasiBiayaJasaAlatKonstruksiPost');
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
	   //hapus elemen SUB SewaAlatProyekPost lain selain SewaAlatProyekBorGroundWorkPost
	  removeCondition('SewaAlatProyekPompaDewateringPost');
	  removeCondition('SewaAlatProyekBekistingScaffoldingPost');
	  removeCondition('SewaAlatProyekPencahayaanUtilitasPost');
	  removeCondition('SewaAlatProyekSurveyPengukuranPost');
	  removeCondition('SewaAlatProyekAksesKeamananPost');
	  //removeCondition('SewaAlatProyekBorGroundWorkPost');
	  removeCondition('SewaAlatProyekSistemPendukungPost');

	    //HAPUS SEMUA SUB SEWA ALAT SURVEY 
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
    
        //JasaKonstruksiAlatKonstruksiPostLink.style.visibility = 'visible';
        //JasaAlatKonstruksiPostLink.style.visibility = 'visible';
        SewaAlatKonstruksiPostLink.style.visibility = 'visible';
	//TAMPILKAN SewaAlatProyekPost
        SewaAlatProyekPostLink.style.visibility = 'visible';
	   SewaAlatProyekBorGroundWorkPostLink.style.visibility = 'visible';
        pageNameJasaKonsAlatKonstruksiPost.textContent = urlMappingSewaAlatBorGroundWorkFromSub2MoneyPage[cleanUrlJasaKonsAlatKonstruksiPost];
   
  		    generateBreadcrumbJasaAlatKonstruksiPost(
        urlMappingSewaAlatBorGroundWorkFromSub2MoneyPage,
        cleanUrlJasaKonsAlatKonstruksiPost,
        [
            //{ name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Sewa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/sewa-alat-konstruksi.html' },
            { name: 'Sewa Alat Proyek', url: 'https://www.betonjayareadymix.com/p/sewa-alat-proyek.html' },
            { name: 'Sewa Alat Bor Ground Work', url: 'https://www.betonjayareadymix.com/2019/02/sewa-alat-bor-ground-work.html' }
        ],
        'SEWA_RENTAL'
    );
  }

if (urlMappingSewaSistemPendukungProyekFromSub2MoneyPage[cleanUrlJasaKonsAlatKonstruksiPost]) {
//RESTORE CONTAINER
     restoreCondition('JasaKonsAlatKonstruksiPost');

restoreCondition('SewaAlatKonstruksiPost');	
        restoreCondition('SewaAlatProyekPost');
	  restoreCondition('SewaAlatProyekSistemPendukungPost');
	  
	//hapus pillar jasa konstruksi
	removeCondition('JasaKonstruksiAlatKonstruksiPost');
	removeCondition('JasaKonsAlatKonstruksiPost');

	

	//hapus semua entity jasa alat konstruksi
     removeCondition('EstimasiBiayaJasaAlatKonstruksiPost');
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
	   //hapus elemen SUB SewaAlatProyekPost lain selain SewaAlatProyekSistemPendukungPost
	  removeCondition('SewaAlatProyekPompaDewateringPost');
	  removeCondition('SewaAlatProyekBekistingScaffoldingPost');
	  removeCondition('SewaAlatProyekPencahayaanUtilitasPost');
	  removeCondition('SewaAlatProyekSurveyPengukuranPost');
	  removeCondition('SewaAlatProyekAksesKeamananPost');
	  removeCondition('SewaAlatProyekBorGroundWorkPost');
	  //removeCondition('SewaAlatProyekSistemPendukungPost');

	  //HAPUS SEMUA SUB SEWA ALAT SURVEY 
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
    
        //JasaKonstruksiAlatKonstruksiPostLink.style.visibility = 'visible';
        //JasaAlatKonstruksiPostLink.style.visibility = 'visible';
        SewaAlatKonstruksiPostLink.style.visibility = 'visible';
	//TAMPILKAN SewaAlatProyekPost
        SewaAlatProyekPostLink.style.visibility = 'visible';
	   SewaAlatProyekSistemPendukungPostLink.style.visibility = 'visible';
        pageNameJasaKonsAlatKonstruksiPost.textContent = urlMappingSewaSistemPendukungProyekFromSub2MoneyPage[cleanUrlJasaKonsAlatKonstruksiPost];
   
		    generateBreadcrumbJasaAlatKonstruksiPost(
        urlMappingSewaSistemPendukungProyekFromSub2MoneyPage,
        cleanUrlJasaKonsAlatKonstruksiPost,
        [
            //{ name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Sewa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/sewa-alat-konstruksi.html' },
            { name: 'Sewa Alat Proyek', url: 'https://www.betonjayareadymix.com/p/sewa-alat-proyek.html' },
            { name: 'Sewa Sistem Pendukung Proyek', url: 'https://www.betonjayareadymix.com/2019/02/sewa-sistem-pendukung-proyek.html' }
        ],
        'SEWA_RENTAL'
    );
}

	
	//AKHIR SUB SEWA ALAT PROYEK
if (urlMappingSewaAlatBeratPostFromSub1MoneyMaster[cleanUrlJasaKonsAlatKonstruksiPost]) {
       //RESTORE CONTAINER
     restoreCondition('JasaKonsAlatKonstruksiPost');

	restoreCondition('SewaAlatKonstruksiPost');
	restoreCondition('SewaAlatBeratPost');
	//hapus pillar jasa konstruksi
	removeCondition('JasaKonstruksiAlatKonstruksiPost');
	removeCondition('JasaKonsAlatKonstruksiPost');
	 
    

	//hapus semua entity jasa alat konstruksi
     removeCondition('EstimasiBiayaJasaAlatKonstruksiPost');
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

	  //HAPUS SEMUA SUB SEWA ALAT SURVEY 
     removeCondition('SewaAlatProyekSurveyPengukuranTotalStationPost');
	 removeCondition('SewaAlatProyekSurveyPengukuranWaterpassPost');
     removeCondition('SewaAlatProyekSurveyPengukuranTheodolitePost');
	  
        //hapus elemen SUB JasaAlatKonstruksiPost lain selain SewaAlatBeratPost
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
        removeCondition('SewaAlatProyekPost');
        removeCondition('SewaAlatKonstruksiRinganPost');
    
        //JasaKonstruksiAlatKonstruksiPostLink.style.visibility = 'visible';
        //JasaAlatKonstruksiPostLink.style.visibility = 'visible';
        SewaAlatKonstruksiPostLink.style.visibility = 'visible';
	//TAMPILKAN SewaAlatBeratPost
        SewaAlatBeratPostLink.style.visibility = 'visible';
        pageNameJasaKonsAlatKonstruksiPost.textContent = urlMappingSewaAlatBeratPostFromSub1MoneyMaster[cleanUrlJasaKonsAlatKonstruksiPost];
    
		    generateBreadcrumbJasaAlatKonstruksiPost(
        urlMappingSewaAlatBeratPostFromSub1MoneyMaster,
        cleanUrlJasaKonsAlatKonstruksiPost,
        [
            //{ name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Sewa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/sewa-alat-konstruksi.html' },
            { name: 'Sewa Alat Berat', url: 'https://www.betonjayareadymix.com/p/sewa-alat-berat.html' },
            { name: 'Perbandingan Sewa Alat Berat', url: 'https://www.betonjayareadymix.com/p/perbandingan-sewa-alat-berat.html' }

        ],
        'SEWA_RENTAL'
    );
}

if (urlMappingSewaAlatBeratPostFromMoneyMasterMoneyPage[cleanUrlJasaKonsAlatKonstruksiPost]) {
		    generateBreadcrumbJasaAlatKonstruksiPost(
        urlMappingSewaAlatBeratPostFromMoneyMasterMoneyPage,
        cleanUrlJasaKonsAlatKonstruksiPost,
        [
            //{ name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Sewa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/sewa-alat-konstruksi.html' },
            { name: 'Sewa Alat Berat', url: 'https://www.betonjayareadymix.com/p/sewa-alat-berat.html' },
            { name: 'Perbandingan Sewa Alat Berat', url: 'https://www.betonjayareadymix.com/p/perbandingan-sewa-alat-berat.html'},
            { name: 'Harga Sewa Alat Berat', url: 'https://www.betonjayareadymix.com/p/harga-sewa-alat-berat.html'}

        ],
        'SEWA_RENTAL'
    );
    }
	
	if (urlMappingSewaAlatBeratPostFromMoneyPageMoneyChild[cleanUrlJasaKonsAlatKonstruksiPost]) {
		    generateBreadcrumbJasaAlatKonstruksiPost(
        urlMappingSewaAlatBeratPostFromMoneyPageMoneyChild,
        cleanUrlJasaKonsAlatKonstruksiPost,
        [
            //{ name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Sewa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/sewa-alat-konstruksi.html' },
            { name: 'Sewa Alat Berat', url: 'https://www.betonjayareadymix.com/p/sewa-alat-berat.html' },
            { name: 'Perbandingan Sewa Alat Berat', url: 'https://www.betonjayareadymix.com/p/perbandingan-sewa-alat-berat.html'},
            { name: 'Harga Sewa Alat Berat', url: 'https://www.betonjayareadymix.com/p/harga-sewa-alat-berat.html'},
            { name: 'Sewa Alat Berat', url: 'https://www.betonjayareadymix.com/2019/02/sewa-alat-berat.html'}

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
            { name: 'Sewa Alat Berat', url: 'https://www.betonjayareadymix.com/p/sewa-alat-berat.html' },
            { name: 'Perbandingan Sewa Forklift', url: 'https://www.betonjayareadymix.com/p/perbandingan-sewa-forklift.html'},
            { name: 'Harga Sewa Forklift', url: 'https://www.betonjayareadymix.com/p/harga-sewa-forklift.html'}

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
            { name: 'Sewa Alat Berat', url: 'https://www.betonjayareadymix.com/p/sewa-alat-berat.html' },
            { name: 'Perbandingan Sewa Crane', url: 'https://www.betonjayareadymix.com/p/perbandingan-sewa-crane.html'},
            { name: 'Harga Sewa Crane', url: 'https://www.betonjayareadymix.com/p/harga-sewa-crane.html'}

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
            { name: 'Sewa Alat Berat', url: 'https://www.betonjayareadymix.com/p/sewa-alat-berat.html' },
            { name: 'Perbandingan Sewa Self Loader', url: 'https://www.betonjayareadymix.com/p/perbandingan-sewa-self-loader.html'},
            { name: 'Harga Sewa Self Loader', url: 'https://www.betonjayareadymix.com/p/harga-sewa-self-loader.html'}

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
            { name: 'Sewa Alat Berat', url: 'https://www.betonjayareadymix.com/p/sewa-alat-berat.html' },
            { name: 'Perbandingan Sewa Wheel Loader', url: 'https://www.betonjayareadymix.com/p/perbandingan-sewa-wheel-loader.html'},
            { name: 'Harga Sewa Wheel Loader', url: 'https://www.betonjayareadymix.com/p/harga-sewa-wheel-loader.html'}

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
            { name: 'Sewa Alat Berat', url: 'https://www.betonjayareadymix.com/p/sewa-alat-berat.html' },
            { name: 'Perbandingan Sewa Vibro Roller', url: 'https://www.betonjayareadymix.com/p/perbandingan-sewa-vibro-roller.html'},
            { name: 'Harga Sewa Vibro Roller', url: 'https://www.betonjayareadymix.com/p/harga-sewa-vibro-roller.html'}

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
            { name: 'Sewa Alat Berat', url: 'https://www.betonjayareadymix.com/p/sewa-alat-berat.html' },
            { name: 'Perbandingan Sewa Wales Stoom', url: 'https://www.betonjayareadymix.com/p/perbandingan-sewa-wales-stoom.html'},
            { name: 'Harga Sewa Wales Stoom', url: 'https://www.betonjayareadymix.com/p/harga-sewa-wales-stoom.html'}

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
            { name: 'Sewa Alat Berat', url: 'https://www.betonjayareadymix.com/p/sewa-alat-berat.html' },
            { name: 'Perbandingan Sewa Tandem Roller', url: 'https://www.betonjayareadymix.com/p/perbandingan-sewa-tandem-roller.html'},
            { name: 'Harga Sewa Tandem Roller', url: 'https://www.betonjayareadymix.com/p/harga-sewa-tandem-roller.html'}

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
            { name: 'Sewa Alat Berat', url: 'https://www.betonjayareadymix.com/p/sewa-alat-berat.html' },
            { name: 'Perbandingan Sewa Bulldozer', url: 'https://www.betonjayareadymix.com/p/perbandingan-sewa-bulldozer.html'},
            { name: 'Harga Sewa Bulldozer', url: 'https://www.betonjayareadymix.com/p/harga-sewa-bulldozer.html'}

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
            { name: 'Sewa Alat Berat', url: 'https://www.betonjayareadymix.com/p/sewa-alat-berat.html' },
            { name: 'Perbandingan Sewa Excavator', url: 'https://www.betonjayareadymix.com/p/perbandingan-sewa-excavator.html'},
            { name: 'Harga Sewa Excavator', url: 'https://www.betonjayareadymix.com/p/harga-sewa-excavator.html'}

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
            { name: 'Sewa Alat Berat', url: 'https://www.betonjayareadymix.com/p/sewa-alat-berat.html' },
            { name: 'Perbandingan Sewa Excavator', url: 'https://www.betonjayareadymix.com/p/perbandingan-sewa-excavator.html'},
            { name: 'Harga Sewa Excavator', url: 'https://www.betonjayareadymix.com/p/harga-sewa-excavator.html'},
            { name: 'Sewa Excavator', url: 'https://www.betonjayareadymix.com/p/sewa-excavator.html'}

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
            { name: 'Sewa Alat Berat', url: 'https://www.betonjayareadymix.com/p/sewa-alat-berat.html' },
            { name: 'Perbandingan Sewa Backhoe Loader', url: 'https://www.betonjayareadymix.com/p/perbandingan-sewa-backhoe-loader.html'},
            { name: 'Harga Sewa Backhoe Loader', url: 'https://www.betonjayareadymix.com/p/harga-sewa-backhoe-loader.html'}

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
            { name: 'Sewa Alat Berat', url: 'https://www.betonjayareadymix.com/p/sewa-alat-berat.html' },
            { name: 'Perbandingan Sewa Baby Roller', url: 'https://www.betonjayareadymix.com/p/perbandingan-sewa-baby-roller.html'},
            { name: 'Harga Sewa Baby Roller', url: 'https://www.betonjayareadymix.com/p/harga-sewa-baby-roller.html'}

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
            { name: 'Sewa Alat Berat', url: 'https://www.betonjayareadymix.com/p/sewa-alat-berat.html' },
            { name: 'Perbandingan Sewa Motor Grader', url: 'https://www.betonjayareadymix.com/p/perbandingan-sewa-motor-grader.html'},
            { name: 'Harga Sewa Motor Grader', url: 'https://www.betonjayareadymix.com/p/harga-sewa-motor-grader.html'}

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
            { name: 'Sewa Alat Berat', url: 'https://www.betonjayareadymix.com/p/sewa-alat-berat.html' },
            { name: 'Perbandingan Sewa Alat Pancang', url: 'https://www.betonjayareadymix.com/p/perbandingan-sewa-alat-pancang.html'},
            { name: 'Harga Sewa Alat Pancang', url: 'https://www.betonjayareadymix.com/p/harga-sewa-alat-pancang.html'}

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
            { name: 'Sewa Alat Berat', url: 'https://www.betonjayareadymix.com/p/sewa-alat-berat.html' },
            { name: 'Perbandingan Sewa Concrete Paver', url: 'https://www.betonjayareadymix.com/p/perbandingan-sewa-concrete-paver.html'},
            { name: 'Harga Sewa Concrete Paver', url: 'https://www.betonjayareadymix.com/p/harga-sewa-concrete-paver.html'}

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
            { name: 'Sewa Alat Berat', url: 'https://www.betonjayareadymix.com/p/sewa-alat-berat.html' },
            { name: 'Perbandingan Sewa Trencher', url: 'https://www.betonjayareadymix.com/p/perbandingan-sewa-trencher.html'},
            { name: 'Harga Sewa Trencher', url: 'https://www.betonjayareadymix.com/p/harga-sewa-trencher.html'}

        ],
        'SEWA_RENTAL'
    );
	}	
		   
	
if (urlMappingSewaForkliftFromSub2MoneyMaster[cleanUrlJasaKonsAlatKonstruksiPost]) {
	    //RESTORE CONTAINER
     restoreCondition('JasaKonsAlatKonstruksiPost');

	restoreCondition('SewaAlatKonstruksiPost');
	      restoreCondition('SewaAlatBeratPost');
        restoreCondition('SewaForkliftPost');
	//hapus pillar jasa konstruksi
	removeCondition('JasaKonstruksiAlatKonstruksiPost');
	removeCondition('JasaKonsAlatKonstruksiPost');

	

	//hapus semua entity jasa alat konstruksi
     removeCondition('EstimasiBiayaJasaAlatKonstruksiPost');
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

	     //HAPUS SEMUA SUB SEWA ALAT SURVEY 
     removeCondition('SewaAlatProyekSurveyPengukuranTotalStationPost');
	 removeCondition('SewaAlatProyekSurveyPengukuranWaterpassPost');
     removeCondition('SewaAlatProyekSurveyPengukuranTheodolitePost');
	  
        //hapus elemen SUB JasaAlatKonstruksiPost lain selain SewaAlatBeratPost DAN SewaForkliftPost
		 //removeCondition('');
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
        removeCondition('SewaAlatProyekPost');
        removeCondition('SewaAlatKonstruksiRinganPost');
    
        //JasaKonstruksiAlatKonstruksiPostLink.style.visibility = 'visible';
        //JasaAlatKonstruksiPostLink.style.visibility = 'visible';
        SewaAlatKonstruksiPostLink.style.visibility = 'visible';
	//TAMPILKAN SewaAlatBeratPost
        SewaAlatBeratPostLink.style.visibility = 'visible';
	
        SewaForkliftPostLink.style.visibility = 'visible';
        pageNameJasaKonsAlatKonstruksiPost.textContent = urlMappingSewaForkliftFromSub2MoneyMaster[cleanUrlJasaKonsAlatKonstruksiPost];
    
   		    generateBreadcrumbJasaAlatKonstruksiPost(
        urlMappingSewaForkliftFromSub2MoneyMaster,
        cleanUrlJasaKonsAlatKonstruksiPost,
        [
            //{ name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Sewa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/sewa-alat-konstruksi.html' },
            { name: 'Sewa Alat Berat', url: 'https://www.betonjayareadymix.com/p/sewa-alat-berat.html' },
            { name: 'Sewa Forklift', url: 'https://www.betonjayareadymix.com/p/sewa-forklift.html' }
        ],
        'SEWA_RENTAL'
    );
}
	
if (urlMappingSewaCraneFromSub2MoneyMaster[cleanUrlJasaKonsAlatKonstruksiPost]) {
 //RESTORE CONTAINER
     restoreCondition('JasaKonsAlatKonstruksiPost');

	restoreCondition('SewaAlatKonstruksiPost');
	      restoreCondition('SewaAlatBeratPost');
        restoreCondition('SewaCranePost');
	//hapus pillar jasa konstruksi
	removeCondition('JasaKonstruksiAlatKonstruksiPost');
	removeCondition('JasaKonsAlatKonstruksiPost');
      
	

	//hapus semua entity jasa alat konstruksi
     removeCondition('EstimasiBiayaJasaAlatKonstruksiPost');
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

	  //HAPUS SEMUA SUB SEWA ALAT SURVEY 
     removeCondition('SewaAlatProyekSurveyPengukuranTotalStationPost');
	 removeCondition('SewaAlatProyekSurveyPengukuranWaterpassPost');
     removeCondition('SewaAlatProyekSurveyPengukuranTheodolitePost');
	  
        //hapus elemen SUB JasaAlatKonstruksiPost lain selain SewaAlatBeratPost DAN SewaCranePost
		 //removeCondition('');
		 removeCondition('SewaForkliftPost');
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
        removeCondition('SewaAlatProyekPost');
        removeCondition('SewaAlatKonstruksiRinganPost');
    
        //JasaKonstruksiAlatKonstruksiPostLink.style.visibility = 'visible';
        //JasaAlatKonstruksiPostLink.style.visibility = 'visible';
        SewaAlatKonstruksiPostLink.style.visibility = 'visible';
	//TAMPILKAN SewaAlatBeratPost
        SewaAlatBeratPostLink.style.visibility = 'visible';
	
        SewaCranePostLink.style.visibility = 'visible';
        pageNameJasaKonsAlatKonstruksiPost.textContent = urlMappingSewaCraneFromSub2MoneyMaster[cleanUrlJasaKonsAlatKonstruksiPost];
    
		    generateBreadcrumbJasaAlatKonstruksiPost(
        urlMappingSewaCraneFromSub2MoneyMaster,
        cleanUrlJasaKonsAlatKonstruksiPost,
        [
            //{ name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Sewa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/sewa-alat-konstruksi.html' },
            { name: 'Sewa Alat Berat', url: 'https://www.betonjayareadymix.com/p/sewa-alat-berat.html' },
            { name: 'Sewa Crane', url: 'https://www.betonjayareadymix.com/p/sewa-crane.html' }
        ],
        'SEWA_RENTAL'
    );
}

if (urlMappingSewaSelfLoaderFromSub2MoneyMaster[cleanUrlJasaKonsAlatKonstruksiPost]) {
//RESTORE CONTAINER
     restoreCondition('JasaKonsAlatKonstruksiPost');

	restoreCondition('SewaAlatKonstruksiPost');
	      restoreCondition('SewaAlatBeratPost');
       restoreCondition('SewaSelfLoaderPost');
	//hapus pillar jasa konstruksi
	removeCondition('JasaKonstruksiAlatKonstruksiPost');
	removeCondition('JasaKonsAlatKonstruksiPost');

	

	//hapus semua entity jasa alat konstruksi
     removeCondition('EstimasiBiayaJasaAlatKonstruksiPost');
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

	  //HAPUS SEMUA SUB SEWA ALAT SURVEY 
     removeCondition('SewaAlatProyekSurveyPengukuranTotalStationPost');
	 removeCondition('SewaAlatProyekSurveyPengukuranWaterpassPost');
     removeCondition('SewaAlatProyekSurveyPengukuranTheodolitePost');
	  
        //hapus elemen SUB JasaAlatKonstruksiPost lain selain SewaAlatBeratPost DAN SewaSelfLoaderPost
		 //removeCondition('');
		 removeCondition('SewaCranePost');
		 removeCondition('SewaForkliftPost');
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
        removeCondition('SewaAlatProyekPost');
        removeCondition('SewaAlatKonstruksiRinganPost');
    
        //JasaKonstruksiAlatKonstruksiPostLink.style.visibility = 'visible';
        //JasaAlatKonstruksiPostLink.style.visibility = 'visible';
        SewaAlatKonstruksiPostLink.style.visibility = 'visible';
	//TAMPILKAN SewaAlatBeratPost
        SewaAlatBeratPostLink.style.visibility = 'visible';
	
        SewaSelfLoaderPostLink.style.visibility = 'visible';
        pageNameJasaKonsAlatKonstruksiPost.textContent = urlMappingSewaSelfLoaderFromSub2MoneyMaster[cleanUrlJasaKonsAlatKonstruksiPost];
    
		    generateBreadcrumbJasaAlatKonstruksiPost(
        urlMappingSewaSelfLoaderFromSub2MoneyMaster,
        cleanUrlJasaKonsAlatKonstruksiPost,
        [
            //{ name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Sewa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/sewa-alat-konstruksi.html' },
            { name: 'Sewa Alat Berat', url: 'https://www.betonjayareadymix.com/p/sewa-alat-berat.html' },
            { name: 'Sewa Self Loader', url: 'https://www.betonjayareadymix.com/p/sewa-self-loader.html' }
        ],
        'SEWA_RENTAL'
    );
}

	
if (urlMappingSewaWheelLoaderFromSub2MoneyMaster[cleanUrlJasaKonsAlatKonstruksiPost]) {
//RESTORE CONTAINER
     restoreCondition('JasaKonsAlatKonstruksiPost');

	restoreCondition('SewaAlatKonstruksiPost');
	      restoreCondition('SewaAlatBeratPost');
      restoreCondition('SewaWheelLoaderPost');
	//hapus pillar jasa konstruksi
	removeCondition('JasaKonstruksiAlatKonstruksiPost');
	removeCondition('JasaKonsAlatKonstruksiPost');

	

	//hapus semua entity jasa alat konstruksi
     removeCondition('EstimasiBiayaJasaAlatKonstruksiPost');
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

	  //HAPUS SEMUA SUB SEWA ALAT SURVEY 
     removeCondition('SewaAlatProyekSurveyPengukuranTotalStationPost');
	 removeCondition('SewaAlatProyekSurveyPengukuranWaterpassPost');
     removeCondition('SewaAlatProyekSurveyPengukuranTheodolitePost');
	  
        //hapus elemen SUB JasaAlatKonstruksiPost lain selain SewaAlatBeratPost DAN SewaWheelLoaderPost
		 //removeCondition('');
		 removeCondition('SewaCranePost');
		 removeCondition('SewaSelfLoaderPost');
		 removeCondition('SewaForkliftPost');
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
        removeCondition('SewaAlatProyekPost');
        removeCondition('SewaAlatKonstruksiRinganPost');
    
        //JasaKonstruksiAlatKonstruksiPostLink.style.visibility = 'visible';
        //JasaAlatKonstruksiPostLink.style.visibility = 'visible';
        SewaAlatKonstruksiPostLink.style.visibility = 'visible';
	//TAMPILKAN SewaAlatBeratPost
        SewaAlatBeratPostLink.style.visibility = 'visible';
	
        SewaWheelLoaderPostLink.style.visibility = 'visible';
        pageNameJasaKonsAlatKonstruksiPost.textContent = urlMappingSewaWheelLoaderFromSub2MoneyMaster[cleanUrlJasaKonsAlatKonstruksiPost];

	       generateBreadcrumbJasaAlatKonstruksiPost(
        urlMappingSewaWheelLoaderFromSub2MoneyMaster,
        cleanUrlJasaKonsAlatKonstruksiPost,
        [
            //{ name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Sewa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/sewa-alat-konstruksi.html' },
            { name: 'Sewa Alat Berat', url: 'https://www.betonjayareadymix.com/p/sewa-alat-berat.html' },
            { name: 'Sewa Wheel Loader', url: 'https://www.betonjayareadymix.com/p/sewa-wheel-loader.html' }
        ],
        'SEWA_RENTAL'
    );
}

if (urlMappingSewaVibroRollerFromSub2MoneyMaster[cleanUrlJasaKonsAlatKonstruksiPost]) {
//RESTORE CONTAINER
     restoreCondition('JasaKonsAlatKonstruksiPost');

	restoreCondition('SewaAlatKonstruksiPost');
	      restoreCondition('SewaAlatBeratPost');
         restoreCondition('SewaVibroRollerPost');
	//hapus pillar jasa konstruksi
	removeCondition('JasaKonstruksiAlatKonstruksiPost');
	removeCondition('JasaKonsAlatKonstruksiPost');

	

	//hapus semua entity jasa alat konstruksi
     removeCondition('EstimasiBiayaJasaAlatKonstruksiPost');
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

	  //HAPUS SEMUA SUB SEWA ALAT SURVEY 
     removeCondition('SewaAlatProyekSurveyPengukuranTotalStationPost');
	 removeCondition('SewaAlatProyekSurveyPengukuranWaterpassPost');
     removeCondition('SewaAlatProyekSurveyPengukuranTheodolitePost');
	  
        //hapus elemen SUB JasaAlatKonstruksiPost lain selain SewaAlatBeratPost DAN SewaVibroRollerPost
		 //removeCondition('');
		 removeCondition('SewaCranePost');
		 removeCondition('SewaSelfLoaderPost');
		 removeCondition('SewaWheelLoaderPost');
		 removeCondition('SewaForkliftPost');
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
        removeCondition('SewaAlatProyekPost');
        removeCondition('SewaAlatKonstruksiRinganPost');
    
       // JasaKonstruksiAlatKonstruksiPostLink.style.visibility = 'visible';
       // JasaAlatKonstruksiPostLink.style.visibility = 'visible';
        SewaAlatKonstruksiPostLink.style.visibility = 'visible';
	//TAMPILKAN SewaAlatBeratPost
        SewaAlatBeratPostLink.style.visibility = 'visible';
	
        SewaVibroRollerPostLink.style.visibility = 'visible';
        pageNameJasaKonsAlatKonstruksiPost.textContent = urlMappingSewaVibroRollerFromSub2MoneyMaster[cleanUrlJasaKonsAlatKonstruksiPost];
    
		    generateBreadcrumbJasaAlatKonstruksiPost(
        urlMappingSewaVibroRollerFromSub2MoneyMaster,
        cleanUrlJasaKonsAlatKonstruksiPost,
        [
            //{ name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Sewa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/sewa-alat-konstruksi.html' },
            { name: 'Sewa Alat Berat', url: 'https://www.betonjayareadymix.com/p/sewa-alat-berat.html' },
            { name: 'Sewa Vibro Roller', url: 'https://www.betonjayareadymix.com/p/sewa-vibro-roller.html' }
        ],
        'SEWA_RENTAL'
    );
}

	
if (urlMappingSewaWalesStoomFromSub2MoneyMaster[cleanUrlJasaKonsAlatKonstruksiPost]) {
//RESTORE CONTAINER
     restoreCondition('JasaKonsAlatKonstruksiPost');

	restoreCondition('SewaAlatKonstruksiPost');
	      restoreCondition('SewaAlatBeratPost');
        restoreCondition('SewaWalesStoomPost');
	//hapus pillar jasa konstruksi
	removeCondition('JasaKonstruksiAlatKonstruksiPost');
	removeCondition('JasaKonsAlatKonstruksiPost');
        
	 

	//hapus semua entity jasa alat konstruksi
     removeCondition('EstimasiBiayaJasaAlatKonstruksiPost');
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

	  //HAPUS SEMUA SUB SEWA ALAT SURVEY 
     removeCondition('SewaAlatProyekSurveyPengukuranTotalStationPost');
	 removeCondition('SewaAlatProyekSurveyPengukuranWaterpassPost');
     removeCondition('SewaAlatProyekSurveyPengukuranTheodolitePost');

		
        //hapus elemen SUB JasaAlatKonstruksiPost lain selain SewaAlatBeratPost DAN SewaVibroRollerPost
		 //removeCondition('');
		 removeCondition('SewaCranePost');
		 removeCondition('SewaSelfLoaderPost');
		 removeCondition('SewaWheelLoaderPost');
		 removeCondition('SewaForkliftPost');
		 removeCondition('SewaVibroRollerPost');
		 removeCondition('SewaTandemRollerPost');
		 removeCondition('SewaBulldozerPost');
		 removeCondition('SewaExcavatorPost');
		 removeCondition('SewaBackhoeLoaderPost');
		 removeCondition('SewaConcretePaverPost');
		 removeCondition('SewaTrencherPost');
		 removeCondition('SewaBabyRollerPost');
		 removeCondition('SewaAlatPancangPost');
		 removeCondition('SewaMotorGraderPost');
        removeCondition('SewaAlatProyekPost');
        removeCondition('SewaAlatKonstruksiRinganPost');
    
        //JasaKonstruksiAlatKonstruksiPostLink.style.visibility = 'visible';
        //JasaAlatKonstruksiPostLink.style.visibility = 'visible';
        SewaAlatKonstruksiPostLink.style.visibility = 'visible';
	//TAMPILKAN SewaAlatBeratPost
        SewaAlatBeratPostLink.style.visibility = 'visible';
	
        SewaWalesStoomPostLink.style.visibility = 'visible';
        pageNameJasaKonsAlatKonstruksiPost.textContent = urlMappingSewaWalesStoomFromSub2MoneyMaster[cleanUrlJasaKonsAlatKonstruksiPost];
    
		    generateBreadcrumbJasaAlatKonstruksiPost(
        urlMappingSewaWalesStoomFromSub2MoneyMaster,
        cleanUrlJasaKonsAlatKonstruksiPost,
        [
            //{ name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Sewa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/sewa-alat-konstruksi.html' },
            { name: 'Sewa Alat Berat', url: 'https://www.betonjayareadymix.com/p/sewa-alat-berat.html' },
            { name: 'Sewa Wales Stoom', url: 'https://www.betonjayareadymix.com/p/sewa-wales-stoom.html' }
        ],
        'SEWA_RENTAL'
    );
}	
	
if (urlMappingSewaTandemRollerFromSub2MoneyMaster[cleanUrlJasaKonsAlatKonstruksiPost]) {
//RESTORE CONTAINER
     restoreCondition('JasaKonsAlatKonstruksiPost');

	restoreCondition('SewaAlatKonstruksiPost');
	      restoreCondition('SewaAlatBeratPost');
       restoreCondition('SewaTandemRollerPost');
	//hapus pillar jasa konstruksi
	removeCondition('JasaKonstruksiAlatKonstruksiPost');
	removeCondition('JasaKonsAlatKonstruksiPost');

	

	//hapus semua entity jasa alat konstruksi
     removeCondition('EstimasiBiayaJasaAlatKonstruksiPost');
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

	  //HAPUS SEMUA SUB SEWA ALAT SURVEY 
     removeCondition('SewaAlatProyekSurveyPengukuranTotalStationPost');
	 removeCondition('SewaAlatProyekSurveyPengukuranWaterpassPost');
     removeCondition('SewaAlatProyekSurveyPengukuranTheodolitePost');
	  
        //hapus elemen SUB JasaAlatKonstruksiPost lain selain SewaAlatBeratPost DAN SewaVibroRollerPost
		 //removeCondition('');
		 removeCondition('SewaCranePost');
		 removeCondition('SewaSelfLoaderPost');
		 removeCondition('SewaWheelLoaderPost');
		 removeCondition('SewaForkliftPost');
		 removeCondition('SewaWalesStoomPost');
		 removeCondition('SewaVibroRollerPost');
		 removeCondition('SewaBulldozerPost');
		 removeCondition('SewaExcavatorPost');
		 removeCondition('SewaBackhoeLoaderPost');
		 removeCondition('SewaConcretePaverPost');
		 removeCondition('SewaTrencherPost');
		 removeCondition('SewaBabyRollerPost');
		 removeCondition('SewaAlatPancangPost');
		 removeCondition('SewaMotorGraderPost');
        removeCondition('SewaAlatProyekPost');
        removeCondition('SewaAlatKonstruksiRinganPost');
    
        //JasaKonstruksiAlatKonstruksiPostLink.style.visibility = 'visible';
        //JasaAlatKonstruksiPostLink.style.visibility = 'visible';
	
        SewaAlatKonstruksiPostLink.style.visibility = 'visible';
	//TAMPILKAN SewaAlatBeratPost
        SewaAlatBeratPostLink.style.visibility = 'visible';
	
        SewaTandemRollerPostLink.style.visibility = 'visible';
        pageNameJasaKonsAlatKonstruksiPost.textContent = urlMappingSewaTandemRollerFromSub2MoneyMaster[cleanUrlJasaKonsAlatKonstruksiPost];
    
		generateBreadcrumbJasaAlatKonstruksiPost(
        urlMappingSewaTandemRollerFromSub2MoneyMaster,
        cleanUrlJasaKonsAlatKonstruksiPost,
        [
            //{ name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Sewa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/sewa-alat-konstruksi.html' },
            { name: 'Sewa Alat Berat', url: 'https://www.betonjayareadymix.com/p/sewa-alat-berat.html' },
            { name: 'Sewa Tandem Roller', url: 'https://www.betonjayareadymix.com/p/sewa-tandem-roller.html' }
        ],
        'SEWA_RENTAL'
    );

}

if (urlMappingSewaBulldozerFromSub2MoneyMaster[cleanUrlJasaKonsAlatKonstruksiPost]) {
//RESTORE CONTAINER
     restoreCondition('JasaKonsAlatKonstruksiPost');

	restoreCondition('SewaAlatKonstruksiPost');
	      restoreCondition('SewaAlatBeratPost');
      restoreCondition('SewaBulldozerPost');
	//hapus pillar jasa konstruksi
	removeCondition('JasaKonstruksiAlatKonstruksiPost');
	removeCondition('JasaKonsAlatKonstruksiPost');

	

	//hapus semua entity jasa alat konstruksi
     removeCondition('EstimasiBiayaJasaAlatKonstruksiPost');
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

	     //HAPUS SEMUA SUB SEWA ALAT SURVEY 
     removeCondition('SewaAlatProyekSurveyPengukuranTotalStationPost');
	 removeCondition('SewaAlatProyekSurveyPengukuranWaterpassPost');
     removeCondition('SewaAlatProyekSurveyPengukuranTheodolitePost');
	  
        //hapus elemen SUB JasaAlatKonstruksiPost lain selain SewaAlatBeratPost DAN SewaVibroRollerPost
		 //removeCondition('');
		 removeCondition('SewaCranePost');
		 removeCondition('SewaSelfLoaderPost');
		 removeCondition('SewaWheelLoaderPost');
		 removeCondition('SewaForkliftPost');
		 removeCondition('SewaWalesStoomPost');
		 removeCondition('SewaTandemRollerPost');
		 removeCondition('SewaVibroRollerPost');
		 removeCondition('SewaExcavatorPost');
		 removeCondition('SewaBackhoeLoaderPost');
		 removeCondition('SewaConcretePaverPost');
		 removeCondition('SewaTrencherPost');
		 removeCondition('SewaBabyRollerPost');
		 removeCondition('SewaAlatPancangPost');
		 removeCondition('SewaMotorGraderPost');
        removeCondition('SewaAlatProyekPost');
        removeCondition('SewaAlatKonstruksiRinganPost');
    
        //JasaKonstruksiAlatKonstruksiPostLink.style.visibility = 'visible';
        //JasaAlatKonstruksiPostLink.style.visibility = 'visible';
        SewaAlatKonstruksiPostLink.style.visibility = 'visible';
	//TAMPILKAN SewaAlatBeratPost
        SewaAlatBeratPostLink.style.visibility = 'visible';
	
        SewaBulldozerPostLink.style.visibility = 'visible';
        pageNameJasaKonsAlatKonstruksiPost.textContent = urlMappingSewaBulldozerFromSub2MoneyMaster[cleanUrlJasaKonsAlatKonstruksiPost];
   
		   generateBreadcrumbJasaAlatKonstruksiPost(
        urlMappingSewaBulldozerFromSub2MoneyMaster,
        cleanUrlJasaKonsAlatKonstruksiPost,
        [
            //{ name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Sewa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/sewa-alat-konstruksi.html' },
            { name: 'Sewa Alat Berat', url: 'https://www.betonjayareadymix.com/p/sewa-alat-berat.html' },
            { name: 'Sewa Bulldozer', url: 'https://www.betonjayareadymix.com/p/sewa-bulldozer.html' }
        ],
        'SEWA_RENTAL'
    );
}

if (urlMappingSewaExcavatorFromSub2MoneyPage[cleanUrlJasaKonsAlatKonstruksiPost]) {
//RESTORE CONTAINER
     restoreCondition('JasaKonsAlatKonstruksiPost');

	restoreCondition('SewaAlatKonstruksiPost');
	      restoreCondition('SewaAlatBeratPost');
       restoreCondition('SewaExcavatorPost');
	//hapus pillar jasa konstruksi
	removeCondition('JasaKonstruksiAlatKonstruksiPost');
	removeCondition('JasaKonsAlatKonstruksiPost');

	

	//hapus semua entity jasa alat konstruksi
     removeCondition('EstimasiBiayaJasaAlatKonstruksiPost');
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

		  //HAPUS SEMUA SUB SEWA ALAT SURVEY 
     removeCondition('SewaAlatProyekSurveyPengukuranTotalStationPost');
	 removeCondition('SewaAlatProyekSurveyPengukuranWaterpassPost');
     removeCondition('SewaAlatProyekSurveyPengukuranTheodolitePost');
	  
        //hapus elemen SUB JasaAlatKonstruksiPost lain selain SewaAlatBeratPost DAN SewaVibroRollerPost
		 //removeCondition('');
		 removeCondition('SewaCranePost');
		 removeCondition('SewaSelfLoaderPost');
		 removeCondition('SewaWheelLoaderPost');
		 removeCondition('SewaForkliftPost');
		 removeCondition('SewaWalesStoomPost');
		 removeCondition('SewaTandemRollerPost');
		 removeCondition('SewaVibroRollerPost');
		 removeCondition('SewaBulldozerPost');
		 removeCondition('SewaBackhoeLoaderPost');
		 removeCondition('SewaConcretePaverPost');
		 removeCondition('SewaTrencherPost');
		 removeCondition('SewaBabyRollerPost');
		 removeCondition('SewaAlatPancangPost');
		 removeCondition('SewaMotorGraderPost');
        removeCondition('SewaAlatProyekPost');
        removeCondition('SewaAlatKonstruksiRinganPost');
    
        //JasaKonstruksiAlatKonstruksiPostLink.style.visibility = 'visible';
        //JasaAlatKonstruksiPostLink.style.visibility = 'visible';
        SewaAlatKonstruksiPostLink.style.visibility = 'visible';
	//TAMPILKAN SewaAlatBeratPost
        SewaAlatBeratPostLink.style.visibility = 'visible';
	
        SewaExcavatorPostLink.style.visibility = 'visible';
        pageNameJasaKonsAlatKonstruksiPost.textContent = urlMappingSewaExcavatorFromSub2MoneyPage[cleanUrlJasaKonsAlatKonstruksiPost];
    
				   generateBreadcrumbJasaAlatKonstruksiPost(
        urlMappingSewaExcavatorFromSub2MoneyPage,
        cleanUrlJasaKonsAlatKonstruksiPost,
        [
            //{ name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Sewa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/sewa-alat-konstruksi.html' },
            { name: 'Sewa Alat Berat', url: 'https://www.betonjayareadymix.com/p/sewa-alat-berat.html' },
            { name: 'Sewa Excavator', url: 'https://www.betonjayareadymix.com/p/sewa-excavator.html' }
        ],
        'SEWA_RENTAL'
    );
}

if (urlMappingSewaBackhoeLoaderFromSub2MoneyMaster[cleanUrlJasaKonsAlatKonstruksiPost]) {
//RESTORE CONTAINER
     restoreCondition('JasaKonsAlatKonstruksiPost');

	restoreCondition('SewaAlatKonstruksiPost');
	      restoreCondition('SewaAlatBeratPost');
     restoreCondition('SewaBackhoeLoaderPost');
	//hapus pillar jasa konstruksi
	removeCondition('JasaKonstruksiAlatKonstruksiPost');
	removeCondition('JasaKonsAlatKonstruksiPost');

	

	//hapus semua entity jasa alat konstruksi
     removeCondition('EstimasiBiayaJasaAlatKonstruksiPost');
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

		  //HAPUS SEMUA SUB SEWA ALAT SURVEY 
     removeCondition('SewaAlatProyekSurveyPengukuranTotalStationPost');
	 removeCondition('SewaAlatProyekSurveyPengukuranWaterpassPost');
     removeCondition('SewaAlatProyekSurveyPengukuranTheodolitePost');
	  
        //hapus elemen SUB JasaAlatKonstruksiPost lain selain SewaAlatBeratPost DAN SewaVibroRollerPost
		 //removeCondition('');
		 removeCondition('SewaCranePost');
		 removeCondition('SewaSelfLoaderPost');
		 removeCondition('SewaWheelLoaderPost');
		 removeCondition('SewaForkliftPost');
		 removeCondition('SewaWalesStoomPost');
		 removeCondition('SewaTandemRollerPost');
		 removeCondition('SewaVibroRollerPost');
		 removeCondition('SewaBulldozerPost');
		 removeCondition('SewaExcavatorPost');
		 removeCondition('SewaConcretePaverPost');
		 removeCondition('SewaTrencherPost');
		 removeCondition('SewaBabyRollerPost');
		 removeCondition('SewaAlatPancangPost');
		 removeCondition('SewaMotorGraderPost');
	    
        removeCondition('SewaAlatProyekPost');
        removeCondition('SewaAlatKonstruksiRinganPost');
    
        //JasaKonstruksiAlatKonstruksiPostLink.style.visibility = 'visible';
        //JasaAlatKonstruksiPostLink.style.visibility = 'visible';
        SewaAlatKonstruksiPostLink.style.visibility = 'visible';
	//TAMPILKAN SewaAlatBeratPost
        SewaAlatBeratPostLink.style.visibility = 'visible';
	
        SewaBackhoeLoaderPostLink.style.visibility = 'visible';
        pageNameJasaKonsAlatKonstruksiPost.textContent = urlMappingSewaBackhoeLoaderFromSub2MoneyMaster[cleanUrlJasaKonsAlatKonstruksiPost];
    
		    generateBreadcrumbJasaAlatKonstruksiPost(
        urlMappingSewaBackhoeLoaderFromSub2MoneyMaster,
        cleanUrlJasaKonsAlatKonstruksiPost,
        [
            //{ name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Sewa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/sewa-alat-konstruksi.html' },
            { name: 'Sewa Alat Berat', url: 'https://www.betonjayareadymix.com/p/sewa-alat-berat.html' },
            { name: 'Sewa Backhoe Loader', url: 'https://www.betonjayareadymix.com/p/sewa-backhoe-loader.html' }
        ],
        'SEWA_RENTAL'
    );
}

if (urlMappingSewaConcretePaverFromSub2MoneyMaster[cleanUrlJasaKonsAlatKonstruksiPost]) {
//RESTORE CONTAINER
     restoreCondition('JasaKonsAlatKonstruksiPost');

	restoreCondition('SewaAlatKonstruksiPost');
	      restoreCondition('SewaAlatBeratPost');
    restoreCondition('SewaConcretePaverPost');
	//hapus pillar jasa konstruksi
	removeCondition('JasaKonstruksiAlatKonstruksiPost');
	removeCondition('JasaKonsAlatKonstruksiPost');

	

	//hapus semua entity jasa alat konstruksi
     removeCondition('EstimasiBiayaJasaAlatKonstruksiPost');
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

	    //HAPUS SEMUA SUB SEWA ALAT SURVEY 
     removeCondition('SewaAlatProyekSurveyPengukuranTotalStationPost');
	 removeCondition('SewaAlatProyekSurveyPengukuranWaterpassPost');
     removeCondition('SewaAlatProyekSurveyPengukuranTheodolitePost');
	  
        //hapus elemen SUB JasaAlatKonstruksiPost lain selain SewaAlatBeratPost DAN SewaVibroRollerPost
		 //removeCondition('');
		 removeCondition('SewaCranePost');
		 removeCondition('SewaSelfLoaderPost');
		 removeCondition('SewaWheelLoaderPost');
		 removeCondition('SewaForkliftPost');
		 removeCondition('SewaWalesStoomPost');
		 removeCondition('SewaTandemRollerPost');
		 removeCondition('SewaVibroRollerPost');
		 removeCondition('SewaBulldozerPost');
		 removeCondition('SewaExcavatorPost');
		 removeCondition('SewaBackhoeLoaderPost');
		 removeCondition('SewaTrencherPost');
		 removeCondition('SewaBabyRollerPost');
		 removeCondition('SewaAlatPancangPost');
		 removeCondition('SewaMotorGraderPost');
	    
        removeCondition('SewaAlatProyekPost');
        removeCondition('SewaAlatKonstruksiRinganPost');
    
       // JasaKonstruksiAlatKonstruksiPostLink.style.visibility = 'visible';
       // JasaAlatKonstruksiPostLink.style.visibility = 'visible';
        SewaAlatKonstruksiPostLink.style.visibility = 'visible';
	//TAMPILKAN SewaAlatBeratPost
        SewaAlatBeratPostLink.style.visibility = 'visible';
	
        SewaConcretePaverPostLink.style.visibility = 'visible';
        pageNameJasaKonsAlatKonstruksiPost.textContent = urlMappingSewaConcretePaverFromSub2MoneyMaster[cleanUrlJasaKonsAlatKonstruksiPost];

		   generateBreadcrumbJasaAlatKonstruksiPost(
        urlMappingSewaConcretePaverFromSub2MoneyMaster,
        cleanUrlJasaKonsAlatKonstruksiPost,
        [
           // { name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Sewa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/sewa-alat-konstruksi.html' },
            { name: 'Sewa Alat Berat', url: 'https://www.betonjayareadymix.com/p/sewa-alat-berat.html' },
            { name: 'Sewa Concrete Paver', url: 'https://www.betonjayareadymix.com/p/sewa-concrete-paver.html' }
        ],
        'SEWA_RENTAL'
    );

}

if (urlMappingSewaTrencherFromSub2MoneyMaster[cleanUrlJasaKonsAlatKonstruksiPost]) {
//RESTORE CONTAINER
     restoreCondition('JasaKonsAlatKonstruksiPost');

	restoreCondition('SewaAlatKonstruksiPost');
	      restoreCondition('SewaAlatBeratPost');
     restoreCondition('SewaTrencherPost');
	//hapus pillar jasa konstruksi
	removeCondition('JasaKonstruksiAlatKonstruksiPost');
	removeCondition('JasaKonsAlatKonstruksiPost');    

	

	//hapus semua entity jasa alat konstruksi
     removeCondition('EstimasiBiayaJasaAlatKonstruksiPost');
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

	    //HAPUS SEMUA SUB SEWA ALAT SURVEY 
     removeCondition('SewaAlatProyekSurveyPengukuranTotalStationPost');
	 removeCondition('SewaAlatProyekSurveyPengukuranWaterpassPost');
     removeCondition('SewaAlatProyekSurveyPengukuranTheodolitePost');
	  
        //hapus elemen SUB JasaAlatKonstruksiPost lain selain SewaAlatBeratPost DAN SewaVibroRollerPost
		 //removeCondition('');
		 removeCondition('SewaCranePost');
		 removeCondition('SewaSelfLoaderPost');
		 removeCondition('SewaWheelLoaderPost');
		 removeCondition('SewaForkliftPost');
		 removeCondition('SewaWalesStoomPost');
		 removeCondition('SewaTandemRollerPost');
		 removeCondition('SewaVibroRollerPost');
		 removeCondition('SewaBulldozerPost');
		 removeCondition('SewaExcavatorPost');
		 removeCondition('SewaBackhoeLoaderPost');
		 removeCondition('SewaConcretePaverPost');
		 removeCondition('SewaBabyRollerPost');
		 removeCondition('SewaAlatPancangPost');
		 removeCondition('SewaMotorGraderPost');
	    
        removeCondition('SewaAlatProyekPost');
        removeCondition('SewaAlatKonstruksiRinganPost');
    
        //JasaKonstruksiAlatKonstruksiPostLink.style.visibility = 'visible';
        //JasaAlatKonstruksiPostLink.style.visibility = 'visible';
        SewaAlatKonstruksiPostLink.style.visibility = 'visible';
	//TAMPILKAN SewaAlatBeratPost
        SewaAlatBeratPostLink.style.visibility = 'visible';
	
        SewaTrencherPostLink.style.visibility = 'visible';
        pageNameJasaKonsAlatKonstruksiPost.textContent = urlMappingSewaTrencherFromSub2MoneyMaster[cleanUrlJasaKonsAlatKonstruksiPost];

		    generateBreadcrumbJasaAlatKonstruksiPost(
        urlMappingSewaTrencherFromSub2MoneyMaster,
        cleanUrlJasaKonsAlatKonstruksiPost,
        [
            //{ name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Sewa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/sewa-alat-konstruksi.html' },
            { name: 'Sewa Alat Berat', url: 'https://www.betonjayareadymix.com/p/sewa-alat-berat.html' },
            { name: 'Sewa Trencher', url: 'https://www.betonjayareadymix.com/p/sewa-trencher.html' }
        ],
        'SEWA_RENTAL'
    );
}

if (urlMappingSewaBabyRollerFromSub2MoneyMaster[cleanUrlJasaKonsAlatKonstruksiPost]) {
//RESTORE CONTAINER
     restoreCondition('JasaKonsAlatKonstruksiPost');

	restoreCondition('SewaAlatKonstruksiPost');
	      restoreCondition('SewaAlatBeratPost');
     restoreCondition('SewaBabyRollerPost');
	//hapus pillar jasa konstruksi
	removeCondition('JasaKonstruksiAlatKonstruksiPost');
	removeCondition('JasaKonsAlatKonstruksiPost');

	

	//hapus semua entity jasa alat konstruksi
     removeCondition('EstimasiBiayaJasaAlatKonstruksiPost');
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

	     //HAPUS SEMUA SUB SEWA ALAT SURVEY 
     removeCondition('SewaAlatProyekSurveyPengukuranTotalStationPost');
	 removeCondition('SewaAlatProyekSurveyPengukuranWaterpassPost');
     removeCondition('SewaAlatProyekSurveyPengukuranTheodolitePost');
	  
        //hapus elemen SUB JasaAlatKonstruksiPost lain selain SewaAlatBeratPost DAN SewaVibroRollerPost
		 //removeCondition('');
		 removeCondition('SewaCranePost');
		 removeCondition('SewaSelfLoaderPost');
		 removeCondition('SewaWheelLoaderPost');
		 removeCondition('SewaForkliftPost');
		 removeCondition('SewaWalesStoomPost');
		 removeCondition('SewaTandemRollerPost');
		 removeCondition('SewaVibroRollerPost');
		 removeCondition('SewaBulldozerPost');
		 removeCondition('SewaExcavatorPost');
		 removeCondition('SewaBackhoeLoaderPost');
		 removeCondition('SewaConcretePaverPost');
		 removeCondition('SewaTrencherPost');
		 removeCondition('SewaAlatPancangPost');
		 removeCondition('SewaMotorGraderPost');
	    
        removeCondition('SewaAlatProyekPost');
        removeCondition('SewaAlatKonstruksiRinganPost');
    
        //JasaKonstruksiAlatKonstruksiPostLink.style.visibility = 'visible';
        //JasaAlatKonstruksiPostLink.style.visibility = 'visible';
        SewaAlatKonstruksiPostLink.style.visibility = 'visible';
	//TAMPILKAN SewaAlatBeratPost
        SewaAlatBeratPostLink.style.visibility = 'visible';
	
        SewaBabyRollerPostLink.style.visibility = 'visible';
        pageNameJasaKonsAlatKonstruksiPost.textContent = urlMappingSewaBabyRollerFromSub2MoneyMaster[cleanUrlJasaKonsAlatKonstruksiPost];

		    generateBreadcrumbJasaAlatKonstruksiPost(
        urlMappingSewaBabyRollerFromSub2MoneyMaster,
        cleanUrlJasaKonsAlatKonstruksiPost,
        [
            //{ name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Sewa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/sewa-alat-konstruksi.html' },
            { name: 'Sewa Alat Berat', url: 'https://www.betonjayareadymix.com/p/sewa-alat-berat.html' },
            { name: 'Sewa Baby Roller', url: 'https://www.betonjayareadymix.com/p/sewa-baby-roller.html' }
        ],
        'SEWA_RENTAL'
    );

}

if (urlMappingSewaAlatPancangFromSub2MoneyMaster[cleanUrlJasaKonsAlatKonstruksiPost]) {
//RESTORE CONTAINER
     restoreCondition('JasaKonsAlatKonstruksiPost');

	restoreCondition('SewaAlatKonstruksiPost');
	      restoreCondition('SewaAlatBeratPost');
       restoreCondition('SewaAlatPancangPost');
	//hapus pillar jasa konstruksi
	removeCondition('JasaKonstruksiAlatKonstruksiPost');
	removeCondition('JasaKonsAlatKonstruksiPost');     

	

	//hapus semua entity jasa alat konstruksi
     removeCondition('EstimasiBiayaJasaAlatKonstruksiPost');
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

	     //HAPUS SEMUA SUB SEWA ALAT SURVEY 
     removeCondition('SewaAlatProyekSurveyPengukuranTotalStationPost');
	 removeCondition('SewaAlatProyekSurveyPengukuranWaterpassPost');
     removeCondition('SewaAlatProyekSurveyPengukuranTheodolitePost');
	  
        //hapus elemen SUB JasaAlatKonstruksiPost lain selain SewaAlatBeratPost DAN SewaVibroRollerPost
		 //removeCondition('');
		 removeCondition('SewaCranePost');
		 removeCondition('SewaSelfLoaderPost');
		 removeCondition('SewaWheelLoaderPost');
		 removeCondition('SewaForkliftPost');
		 removeCondition('SewaWalesStoomPost');
		 removeCondition('SewaTandemRollerPost');
		 removeCondition('SewaVibroRollerPost');
		 removeCondition('SewaBulldozerPost');
		 removeCondition('SewaExcavatorPost');
		 removeCondition('SewaBackhoeLoaderPost');
		 removeCondition('SewaConcretePaverPost');
		 removeCondition('SewaTrencherPost');
		 removeCondition('SewaBabyRollerPost');
		 removeCondition('SewaMotorGraderPost');
	    
        removeCondition('SewaAlatProyekPost');
        removeCondition('SewaAlatKonstruksiRinganPost');
    
        //JasaKonstruksiAlatKonstruksiPostLink.style.visibility = 'visible';
        //JasaAlatKonstruksiPostLink.style.visibility = 'visible';
        SewaAlatKonstruksiPostLink.style.visibility = 'visible';
	//TAMPILKAN SewaAlatBeratPost
        SewaAlatBeratPostLink.style.visibility = 'visible';
	
        SewaAlatPancangPostLink.style.visibility = 'visible';
        pageNameJasaKonsAlatKonstruksiPost.textContent = urlMappingSewaAlatPancangFromSub2MoneyMaster[cleanUrlJasaKonsAlatKonstruksiPost];
    
		    generateBreadcrumbJasaAlatKonstruksiPost(
        urlMappingSewaAlatPancangFromSub2MoneyMaster,
        cleanUrlJasaKonsAlatKonstruksiPost,
        [
            //{ name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Sewa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/sewa-alat-konstruksi.html' },
            { name: 'Sewa Alat Berat', url: 'https://www.betonjayareadymix.com/p/sewa-alat-berat.html' },
            { name: 'Sewa Alat Pancang', url: 'https://www.betonjayareadymix.com/p/sewa-alat-pancang.html' }
        ],
        'SEWA_RENTAL'
    );
}

if (urlMappingSewaMotorGraderFromSub2MoneyMaster[cleanUrlJasaKonsAlatKonstruksiPost]) {
 //RESTORE CONTAINER
     restoreCondition('JasaKonsAlatKonstruksiPost');

	restoreCondition('SewaAlatKonstruksiPost');
	      restoreCondition('SewaAlatBeratPost');
      restoreCondition('SewaMotorGraderPost');
	//hapus pillar jasa konstruksi
	removeCondition('JasaKonstruksiAlatKonstruksiPost');
	removeCondition('JasaKonsAlatKonstruksiPost');  
	       
     

	//hapus semua entity jasa alat konstruksi
     removeCondition('EstimasiBiayaJasaAlatKonstruksiPost');
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

	     //HAPUS SEMUA SUB SEWA ALAT SURVEY 
     removeCondition('SewaAlatProyekSurveyPengukuranTotalStationPost');
	 removeCondition('SewaAlatProyekSurveyPengukuranWaterpassPost');
     removeCondition('SewaAlatProyekSurveyPengukuranTheodolitePost');
	  
        //hapus elemen SUB JasaAlatKonstruksiPost lain selain SewaAlatBeratPost DAN SewaMotorGraderPost
		 //removeCondition('');
		 removeCondition('SewaCranePost');
		 removeCondition('SewaSelfLoaderPost');
		 removeCondition('SewaWheelLoaderPost');
		 removeCondition('SewaForkliftPost');
		 removeCondition('SewaWalesStoomPost');
		 removeCondition('SewaTandemRollerPost');
		 removeCondition('SewaVibroRollerPost');
		 removeCondition('SewaBulldozerPost');
		 removeCondition('SewaExcavatorPost');
		 removeCondition('SewaBackhoeLoaderPost');
		 removeCondition('SewaConcretePaverPost');
		 removeCondition('SewaTrencherPost');
		 removeCondition('SewaBabyRollerPost');
		 removeCondition('SewaAlatPancangPost');
	    
        removeCondition('SewaAlatProyekPost');
        removeCondition('SewaAlatKonstruksiRinganPost');
    
        //JasaKonstruksiAlatKonstruksiPostLink.style.visibility = 'visible';
        //JasaAlatKonstruksiPostLink.style.visibility = 'visible';
        SewaAlatKonstruksiPostLink.style.visibility = 'visible';
	//TAMPILKAN SewaAlatBeratPost
        SewaAlatBeratPostLink.style.visibility = 'visible';
	
        SewaMotorGraderPostLink.style.visibility = 'visible';
        pageNameJasaKonsAlatKonstruksiPost.textContent = urlMappingSewaMotorGraderFromSub2MoneyMaster[cleanUrlJasaKonsAlatKonstruksiPost];
    
		   generateBreadcrumbJasaAlatKonstruksiPost(
        urlMappingSewaMotorGraderFromSub2MoneyMaster,
        cleanUrlJasaKonsAlatKonstruksiPost,
        [
            //{ name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Sewa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/sewa-alat-konstruksi.html' },
            { name: 'Sewa Alat Berat', url: 'https://www.betonjayareadymix.com/p/sewa-alat-berat.html' },
            { name: 'Sewa Motor Grader', url: 'https://www.betonjayareadymix.com/p/sewa-motor-grader.html' }
        ],
        'SEWA_RENTAL'
    );
}

//AKHIR SUB PAGE SEWA ALAT BERAT
if (urlMappingSewaAlatKonstruksiRinganFromSub2MoneyMaster[cleanUrlJasaKonsAlatKonstruksiPost]) {
 //RESTORE CONTAINER
     restoreCondition('JasaKonsAlatKonstruksiPost');

	restoreCondition('SewaAlatKonstruksiPost');
	restoreCondition('SewaAlatKonstruksiRinganPost');
	//hapus pillar jasa konstruksi
	removeCondition('JasaKonstruksiAlatKonstruksiPost');
	removeCondition('JasaKonsAlatKonstruksiPost');

	

	//hapus semua entity jasa alat konstruksi
     removeCondition('EstimasiBiayaJasaAlatKonstruksiPost');
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

	  //HAPUS SEMUA SUB SEWA ALAT SURVEY 
     removeCondition('SewaAlatProyekSurveyPengukuranTotalStationPost');
	 removeCondition('SewaAlatProyekSurveyPengukuranWaterpassPost');
     removeCondition('SewaAlatProyekSurveyPengukuranTheodolitePost');
	  
        //hapus elemen SUB JasaAlatKonstruksiPost lain selain SewaAlatKonstruksiRinganPost
        removeCondition('SewaAlatProyekPost');
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
    
        //JasaKonstruksiAlatKonstruksiPostLink.style.visibility = 'visible';
        //JasaAlatKonstruksiPostLink.style.visibility = 'visible';
        SewaAlatKonstruksiPostLink.style.visibility = 'visible';
	//TAMPILKAN SewaAlatBeratPost
        SewaAlatKonstruksiRinganPostLink.style.visibility = 'visible';
        pageNameJasaKonsAlatKonstruksiPost.textContent = urlMappingSewaAlatKonstruksiRinganFromSub2MoneyMaster[cleanUrlJasaKonsAlatKonstruksiPost];
    
		    generateBreadcrumbJasaAlatKonstruksiPost(
        urlMappingSewaAlatKonstruksiRinganFromSub2MoneyMaster,
        cleanUrlJasaKonsAlatKonstruksiPost,
        [
            //{ name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Sewa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/sewa-alat-konstruksi.html' },
            { name: 'Sewa Alat Konstruksi Ringan', url: 'https://www.betonjayareadymix.com/p/sewa-alat-konstruksi-ringan.html' }
        ],
        'SEWA_RENTAL'
    );

}
   
});
