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

const urlMappingSewaAlatProyekFromSub2MoneyPage = {
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
  "https://www.betonjayareadymix.com/2019/02/sewa-sistem-pendukung-proyek.html": "Sewa Sistem Pendukung Proyek",  // TYPE: MONEY_PAGE
  
  // ============================================================
  // [MONEY_CHILD] - SEWA ALAT PROYEK PER LOKASI
  // 🧠 TYPE: MONEY_CHILD (spesifik lokasi, intent transaksional 90%)
  // ============================================================
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

// ============================================================
// 📁 SUB Jasa Alat Konstruksi - SEWA POMPA DEWATERING (MONEY PAGE & CHILD)
// 🧠 ENTITY: SEWA/RENTAL → TYPE: MONEY_PAGE & MONEY_CHILD
// Parent: Sewa Alat Proyek (SUB2)
// ============================================================

const urlMappingSewaPompaDewateringFromSub2MoneyPage = {
  // ============================================================
  // [MONEY_PAGE] - SEWA POMPA AIR (BERBAGAI JENIS)
  // 🧠 TYPE: MONEY_PAGE
  // ============================================================
  "https://www.betonjayareadymix.com/2019/03/sewa-mesin-pompa-air.html": "Sewa Mesin Pompa Air",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2019/03/sewa-pompa-air-diesel.html": "Sewa Pompa Air Diesel",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2019/03/sewa-pompa-air-kapasitas-besar.html": "Sewa Pompa Air Kapasitas Besar",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2019/03/sewa-pompa-air-banjir.html": "Sewa Pompa Air Banjir",  // TYPE: MONEY_PAGE
  
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
  // [MONEY_PAGE] - SEWA POMPA LUMPUR
  // ============================================================
  "https://www.betonjayareadymix.com/2019/03/sewa-pompa-lumpur.html": "Sewa Pompa Lumpur",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2019/03/sewa-pompa-lumpur-diesel.html": "Sewa Pompa Lumpur Diesel",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2019/03/sewa-pompa-sedot-lumpur.html": "Sewa Pompa Sedot Lumpur",  // TYPE: MONEY_PAGE
  
  // ============================================================
  // [MONEY_CHILD] - SEWA POMPA LUMPUR PER LOKASI
  // ============================================================
  "https://www.betonjayareadymix.com/2019/03/sewa-pompa-lumpur-terdekat.html": "Sewa Pompa Lumpur Terdekat",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/03/sewa-pompa-lumpur-surabaya.html": "Sewa Pompa Lumpur Surabaya",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/03/sewa-pompa-lumpur-bandung.html": "Sewa Pompa Lumpur Bandung",  // TYPE: MONEY_CHILD
  
  // ============================================================
  // 🟡 SARAN ITEM TAMBAHAN (BELUM AKTIF - PERLU DIBUAT KONTEN)
  // ============================================================
  // "https://www.betonjayareadymix.com/2019/03/sewa-mesin-pompa-air-terdekat.html": "Sewa Mesin Pompa Air Terdekat",  // TYPE: MONEY_CHILD
  // "https://www.betonjayareadymix.com/2019/03/sewa-pompa-air-cirebon.html": "Sewa Pompa Air Cirebon",  // TYPE: MONEY_CHILD
  // "https://www.betonjayareadymix.com/2019/03/sewa-pompa-air-pekanbaru.html": "Sewa Pompa Air Pekanbaru",  // TYPE: MONEY_CHILD
  // "https://www.betonjayareadymix.com/2019/03/sewa-pompa-lumpur-jakarta.html": "Sewa Pompa Lumpur Jakarta",  // TYPE: MONEY_CHILD
  // "https://www.betonjayareadymix.com/2019/03/sewa-pompa-lumpur-depok.html": "Sewa Pompa Lumpur Depok",  // TYPE: MONEY_CHILD
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
  // [MONEY_PAGE] - SEWA SISTEM PENDUKUNG PROYEK
  // ============================================================
  "https://www.betonjayareadymix.com/2019/03/sewa-bak-air-proyek.html": "Sewa Bak Air Proyek",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2019/03/sewa-tangki-air.html": "Sewa Tangki Air",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2019/03/sewa-selang-proyek.html": "Sewa Selang Proyek",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2019/03/sewa-pipa-proyek.html": "Sewa Pipa Proyek",  // TYPE: MONEY_PAGE
};

// ============================================================
// 📁 SUB Jasa Alat Konstruksi - SEWA ALAT BERAT (MONEY PAGE, CHILD & MASTER)
// 🧠 ENTITY: SEWA/RENTAL → TYPE: MONEY_PAGE, MONEY_CHILD, MONEY_MASTER
// Parent: Sewa Alat Berat (SUB2)
// Breadcrumb: Home > Sewa Alat Konstruksi > Sewa Alat Berat > [Jenis Alat / Lokasi] (4 level)
// ============================================================

const urlMappingSewaAlatBeratFromSub2MoneyPage = {
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
  // [MONEY_PAGE] - INFORMASI & HARGA UMUM
  // ============================================================
  "https://www.betonjayareadymix.com/2019/02/sewa-alat-berat-murah.html": "Sewa Alat Berat Murah",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2019/02/sewa-alat-berat-trakindo.html": "Sewa Alat Berat Trakindo",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2019/02/sewa-alat-berat-per-hari.html": "Sewa Alat Berat per Hari",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2019/02/sewa-alat-berat-per-jam.html": "Sewa Alat Berat per Jam",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2019/02/sewa-alat-berat-all-in.html": "Sewa Alat Berat All In",  // TYPE: MONEY_PAGE
  
  // ============================================================
  // [MONEY_CHILD] - SEWA ALAT BERAT TERDEKAT
  // ============================================================
  "https://www.betonjayareadymix.com/2019/02/sewa-alat-berat-terdekat.html": "Sewa Alat Berat Terdekat",  // TYPE: MONEY_CHILD
  
  // ============================================================
  // [MONEY_PAGE] - JENIS ALAT SPESIFIK
  // ============================================================
  "https://www.betonjayareadymix.com/2019/02/sewa-alat-berat-dump-truck.html": "Sewa Alat Berat Dump Truck",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2019/02/sewa-alat-berat-cold-milling-machine.html": "Sewa Alat Berat Cold Milling Machine",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2019/02/sewa-alat-berat-pc-300.html": "Sewa Alat Berat PC 300",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2019/02/sewa-alat-berat-pc-200.html": "Sewa Alat Berat PC 200",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2019/02/sewa-alat-berat-pc-75.html": "Sewa Alat Berat PC 75",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2019/02/sewa-alat-berat-breaker.html": "Sewa Alat Berat Breaker",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2019/02/sewa-alat-berat-crane.html": "Sewa Alat Berat Crane",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2019/02/sewa-alat-berat-dozer.html": "Sewa Alat Berat Dozer",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2019/02/sewa-alat-berat-beko.html": "Sewa Alat Berat Beko",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2019/02/sewa-alat-berat-wales.html": "Sewa Alat Berat Wales",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2019/02/sewa-alat-berat-excavator.html": "Sewa Alat Berat Excavator",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2019/02/sewa-alat-berat-loader.html": "Sewa Alat Berat Loader",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2019/02/sewa-alat-berat-bore-pile.html": "Sewa Alat Berat Bore Pile",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2019/02/sewa-paver-alat-berat.html": "Sewa Paver Alat Berat",  // TYPE: MONEY_PAGE
  
  // ============================================================
  // [MONEY_MASTER] - HARGA SEWA PER JENIS ALAT (NASIONAL)
  // 🧠 TYPE: MONEY_MASTER (khusus SEWA, diperbolehkan)
  // ============================================================
  "https://www.betonjayareadymix.com/2019/02/berapa-sewa-alat-berat.html": "Berapa Sewa Alat Berat",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/2019/02/harga-sewa-roller-alat-berat.html": "Harga Sewa Roller Alat Berat",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/2019/02/harga-sewa-alat-berat-beko.html": "Harga Sewa Alat Berat Beko",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/2019/02/harga-sewa-alat-berat-bego.html": "Harga Sewa Alat Berat Bego",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/2019/02/harga-sewa-alat-berat-breaker.html": "Harga Sewa Alat Berat Breaker",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/2019/02/harga-sewa-alat-berat-backhoe-loader.html": "Harga Sewa Alat Berat Backhoe Loader",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/2019/02/harga-sewa-alat-berat-crane.html": "Harga Sewa Alat Berat Crane",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/2019/02/harga-sewa-alat-berat-wales.html": "Harga Sewa Alat Berat Wales",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/2019/02/harga-sewa-alat-berat-tandem-roller.html": "Harga Sewa Alat Berat Tandem Roller",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/2019/02/harga-sewa-alat-berat-vibro.html": "Harga Sewa Alat Berat Vibro",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/2019/02/harga-sewa-alat-berat-wheel-loader.html": "Harga Sewa Alat Berat Wheel Loader",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/2019/02/harga-sewa-alat-berat-dozer.html": "Harga Sewa Alat Berat Dozer",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/2019/02/harga-sewa-alat-berat-dump-truck.html": "Harga Sewa Alat Berat Dump Truck",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/2019/02/harga-sewa-alat-berat-excavator.html": "Harga Sewa Alat Berat Excavator",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/2019/02/harga-sewa-alat-berat-komatsu.html": "Harga Sewa Alat Berat Komatsu",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/2019/02/harga-sewa-alat-berat-per-hari.html": "Harga Sewa Alat Berat Per Hari",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/2019/02/harga-sewa-alat-berat-per-jam.html": "Harga Sewa Alat Berat Per Jam",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/2019/02/harga-sewa-alat-berat-per-bulan.html": "Harga Sewa Alat Berat Per Bulan",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/2019/02/harga-sewa-alat-berat-murah.html": "Harga Sewa Alat Berat Murah",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/2019/02/harga-sewa-alat-berat-terbaru.html": "Harga Sewa Alat Berat Terbaru",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/2019/02/harga-sewa-paver-alat-berat.html": "Harga Sewa Paver Alat Berat",  // TYPE: MONEY_MASTER
  
  // ============================================================
  // [MONEY_CHILD] - HARGA SEWA ALAT BERAT PER LOKASI
  // ============================================================
  "https://www.betonjayareadymix.com/2019/02/harga-sewa-alat-berat-jakarta.html": "Harga Sewa Alat Berat Jakarta",  // TYPE: MONEY_CHILD

  // ============================================================
  // [MONEY_MASTER] - INFORMASI UMUM (DAFTAR HARGA, INFO, LIST, STANDAR)
  // ============================================================
  "https://www.betonjayareadymix.com/2019/02/info-harga-sewa-alat-berat.html": "Info Harga Sewa Alat Berat",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/2019/02/daftar-harga-sewa-alat-berat.html": "Daftar Harga Sewa Alat Berat",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/2019/02/standar-harga-sewa-alat-berat.html": "Standar Harga Sewa Alat Berat",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/2019/02/berapa-harga-sewa-alat-berat.html": "Berapa Harga Sewa Alat Berat",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/2019/02/list-harga-sewa-alat-berat.html": "List Harga Sewa Alat Berat",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/2019/02/daftar-harga-sewa-alat-berat-murah.html": "Daftar Harga Sewa Alat Berat Murah",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/2019/02/daftar-harga-sewa-alat-berat-per-jam.html": "Daftar Harga Sewa Alat Berat Per Jam",  // TYPE: MONEY_MASTER
};

// ============================================================
// 📁 SUB Jasa Alat Konstruksi - SEWA MOTOR GRADER (MONEY MASTER)
// ============================================================

const urlMappingSewaMotorGraderFromSub2MoneyMaster = {
  // ============================================================
  // [MONEY_MASTER] - SEWA MOTOR GRADER (HARGA NASIONAL)
  // 🧠 TYPE: MONEY_MASTER (khusus SEWA, diperbolehkan)
  // Breadcrumb: Home > Sewa Alat Konstruksi > Sewa Alat Berat > Motor Grader (4 level)
  // ============================================================
  "https://www.betonjayareadymix.com/2019/02/harga-sewa-motor-grader.html": "Harga Sewa Motor Grader",  // TYPE: MONEY_MASTER
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

const urlMappingSewaExcavatorFromSub2MoneyPage = {
  // ============================================================
  // [MONEY_MASTER] - SEWA EXCAVATOR MINI & VARIAN (NASIONAL)
  // ============================================================
  "https://www.betonjayareadymix.com/2019/02/sewa-excavator-mini.html": "Sewa Excavator Mini",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/2019/02/harga-sewa-excavator.html": "Harga Sewa Excavator",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/2019/02/harga-sewa-beko.html": "Harga Sewa Beko",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/2019/02/sewa-beko.html": "Sewa Beko",  // TYPE: MONEY_MASTER
  
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
// UNTUK SEMUA PILLAR (PRODUK, MATERIAL, JASA, INTERIOR, DLL)
// MAX_LEVEL = 4 (TERMASUK HOME)
// SKIP LEVEL BEKERJA UNTUK PILLAR & SUB2
// ============================================================

function generateBreadcrumbForMapping(mappingObj, currentUrl, breadcrumbItems = [], pillarType = 'JASA_KONSTRUKSI') {
    
    const MAX_LEVEL = 4;
    const DOMAIN = 'https://www.betonjayareadymix.com';
    
    // ============================================================
    // 1. VALIDASI PILLAR TYPE
    // ============================================================
    const validPillarTypes = ['PRODUK_KONSTRUKSI', 'MATERIAL_KONSTRUKSI', 'JASA_KONSTRUKSI', 
                               'PRODUK_INTERIOR', 'JASA_DESAIN_INTERIOR'];
    if (!validPillarTypes.includes(pillarType)) {
        console.error(`❌ ERROR: "${pillarType}" BUKAN PILLAR TYPE yang valid!`);
        console.error(`   Gunakan salah satu dari: ${validPillarTypes.join(', ')}`);
        return null;
    }
    
    const pageTitle = mappingObj[currentUrl];
    if (!pageTitle) {
        console.error(`❌ ERROR: URL "${currentUrl}" tidak ditemukan di mapping`);
        return null;
    }
    
    // ============================================================
    // 2. KUMPULKAN SEMUA NAMA HALAMAN DARI MAPPING (UNTUK REFERENSI)
    // ============================================================
    const knownPages = [];
    for (const [url, name] of Object.entries(mappingObj)) {
        if (name && typeof name === 'string') {
            knownPages.push(name.toLowerCase());
        }
    }
    
    // ============================================================
    // 3. DETEKSI TYPE OTOMATIS
    // ============================================================
    function detectPageType(pageName, position, totalLevels) {
        const lowerName = pageName.toLowerCase();
        const parts = pageName.split(' ');
        const lastWord = parts[parts.length - 1].toLowerCase();
        const firstWord = parts[0].toLowerCase();
        const wordCount = parts.length;
        
        // PILLAR: posisi pertama
        if (position === 0) return 'PILLAR';
        
        // MONEY_LEADGEN
        if (lowerName.startsWith('konsultasi')) return 'MONEY_LEADGEN';
        
        // MONEY_MASTER (deteksi transaksi)
        const transactionWords = ['harga', 'sewa', 'jual', 'beli', 'pesan', 'booking', 'order', 'rental',
            'biaya', 'tarif', 'rate', 'cost', 'price', 'fee', 'charge', 'promo', 'diskon', 'obral',
            'gratis', 'voucher', 'cashback', 'cicilan', 'kredit', 'dp', 'angsuran', 'quote', 'penawaran', 'estimasi'];
        
        for (const word of transactionWords) {
            if (lowerName.startsWith(word + ' ') || lowerName.includes(' ' + word + ' ') || lowerName.endsWith(' ' + word)) {
                return 'MONEY_MASTER';
            }
        }
        
        // SUB1 (deteksi panduan)
        const guideWords = ['panduan', 'cara', 'tips', 'tutorial', 'langkah', 'petunjuk', 'pedoman', 'instruksi',
            'guide', 'how to', 'step by step', 'strategi', 'metode', 'teknik', 'rahasia', 'kunci sukses',
            'wajib tahu', 'perlu diketahui', 'edukasi', 'belajar', 'mempelajari', 'pemahaman', 'solusi', 'jawaban'];
        
        for (const word of guideWords) {
            if (lowerName.startsWith(word + ' ') || lowerName.includes(' ' + word + ' ')) {
                return 'SUB1';
            }
        }
        
        // VARIANT (deteksi angka atau kata kunci)
        if (/\d/.test(lowerName)) return 'VARIANT';
        
        const variantWords = ['tipe', 'type', 'ukuran', 'model', 'varian', 'warna', 'bentuk', 'seri', 'versi',
            'grade', 'kelas', 'standar', 'jenis', 'macam', 'ragam', 'kategori', 'spesifikasi', 'detail', 'rinci',
            'kapasitas', 'volume', 'berat', 'panjang', 'lebar', 'tinggi', 'tebal', 'diameter', 'radius', 'luas',
            'bahan', 'material', 'komposisi', 'kualitas', 'mutu', 'kode', 'plus', 'minus', 'kelebihan', 'kekurangan',
            'baru', 'lama', 'bekas', 'second', 'original', 'kw', 'putih', 'hitam', 'merah', 'biru', 'hijau',
            'kecil', 'besar', 'sedang', 'mini', 'maxi', 'jumbo', 'extra', 'super'];
        
        for (const word of variantWords) {
            if (lowerName.includes(' ' + word + ' ') || lowerName.endsWith(' ' + word)) {
                return 'VARIANT';
            }
        }
        
        // MONEY_CHILD (deteksi lokasi)
        function isLikelyLocation(word) {
            if (word.length < 3 || word.length > 25) return false;
            if (!/^[a-zA-Z]+$/.test(word)) return false;
            if (word === firstWord) return false;
            
            const notLocationWords = ['mini', 'maxi', 'super', 'extra', 'plus', 'pro', 'max', 'ultra',
                'baru', 'lama', 'bekas', 'second', 'original', 'kw', 'grade', 'murah', 'mahal', 'hemat',
                'premium', 'standar', 'ekonomis', 'kecil', 'besar', 'sedang', 'panjang', 'pendek', 'tebal', 'tipis',
                'putih', 'hitam', 'merah', 'biru', 'hijau', 'kuning', 'ungu', 'abu', 'coklat'];
            if (notLocationWords.includes(word)) return false;
            
            const isKnownProduct = knownPages.some(known => known === word || (known.includes(word) && word.length > 3));
            if (isKnownProduct) return false;
            
            if (word.length >= 4 && word.length <= 12) return true;
            if (/[aiueo]$/.test(word) && word.length >= 4) return true;
            
            const locationPatterns = ['ang', 'ung', 'eng', 'ong', 'an', 'in', 'un', 'en', 
                'ap', 'ip', 'op', 'ar', 'ur', 'er', 'or', 'karta', 'jaya', 'pura', 'sari', 'mulya', 'agung', 'asih', 'ayem'];
            for (const pattern of locationPatterns) {
                if (word.endsWith(pattern) && word.length >= 4) return true;
            }
            
            if (word.length >= 5 && /[aiueo].*[aiueo]/.test(word)) return true;
            return false;
        }
        
        if (wordCount >= 2 && isLikelyLocation(lastWord)) return 'MONEY_CHILD';
        
        return 'SUB2';
    }
    
    // ============================================================
    // 4. FUNGSI BANTUAN
    // ============================================================
    function generateIdFromName(name) {
        return name.replace(/[^a-zA-Z0-9]/g, '') + 'Post';
    }
    
    // ============================================================
    // 5. BANGUN LEVELS DARI ARRAY OBJECT (NAMA + URL)
    // ============================================================
    const allLevels = [];
    for (let i = 0; i < breadcrumbItems.length; i++) {
        const item = breadcrumbItems[i];
        const name = typeof item === 'string' ? item : item.name;
        const url = typeof item === 'string' ? null : item.url;
        
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
            for (const [url, name] of Object.entries(mappingObj)) {
                if (name === level.name) {
                    foundUrl = url.startsWith('http') ? url : DOMAIN + url;
                    break;
                }
            }
            if (!foundUrl) {
                const slug = level.name.toLowerCase().replace(/ /g, '-');
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
    selectedLevels.push({ name: 'BJR', url: DOMAIN, isHome: true });
    
    // Hitung slot tersisa (MAX_LEVEL - 1 untuk home - 1 untuk halaman saat ini)
    let remainingSlots = MAX_LEVEL - 2;
    
    console.log(`📊 ========================================`);
    console.log(`📊 Breadcrumb Generator - SEO Tercanggih`);
    console.log(`📊 Max level: ${MAX_LEVEL}, slot untuk parent: ${remainingSlots}`);
    console.log(`📊 Breadcrumb items: ${allLevels.map(l => l.name).join(' → ')}`);
    console.log(`📊 ========================================`);
    
    // Parent terdekat (level terakhir) - WAJIB tampil
    let parentTerdekat = null;
    if (allLevels.length > 0) {
        parentTerdekat = allLevels[allLevels.length - 1];
        selectedLevels.push(parentTerdekat);
        remainingSlots--;
        console.log(`✅ WAJIB: "${parentTerdekat.name}" (${parentTerdekat.type}) - sisa slot: ${remainingSlots}`);
    }
    
    // Level lainnya (dari awal sampai sebelum parent terdekat)
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
        
        selectedLevels.splice(1, 0, level);
        remainingSlots--;
        console.log(`✅ TAMBAH: "${level.name}" (${level.type}) - sisa slot: ${remainingSlots}`);
    }
    
    // Halaman saat ini (WAJIB)
    const currentFullUrl = currentUrl.startsWith('http') ? currentUrl : DOMAIN + currentUrl;
    selectedLevels.push({
        name: pageTitle,
        url: currentFullUrl,
        isCurrent: true
    });
    
    // Update position
    for (let i = 0; i < selectedLevels.length; i++) {
        selectedLevels[i].position = i + 1;
    }
    
    console.log(`✅ FINAL (${selectedLevels.length} level): ${selectedLevels.map(l => l.name).join(' → ')}`);
    
    // ============================================================
    // 8. GENERATE HTML BREADCRUMB
    // ============================================================
    let breadcrumbHtml = `<div class="breadcrumbs">\n<span>\n`;
    breadcrumbHtml += `<a href="${DOMAIN}/" itemprop="item" title="Beton Jaya Readymix">`;
    breadcrumbHtml += `<meta content="1" itemprop="position">`;
    breadcrumbHtml += `<span itemprop="name">BJR</span></a>\n`;
    breadcrumbHtml += `</span>\n &nbsp;›&nbsp;\n\n`;
    breadcrumbHtml += `<span>\n<div id="breadcrumbContainer" style="display: inline;">\n`;
    
    for (let i = 1; i < selectedLevels.length; i++) {
        const level = selectedLevels[i];
        const isLast = (i === selectedLevels.length - 1);
        
        if (!isLast) {
            breadcrumbHtml += `<a href="${level.url}" id="${level.id}" title="${level.name.toUpperCase()}" style="visibility: visible;">`;
            breadcrumbHtml += `<span id="${level.id}Name">${level.name}</span>&nbsp;›&nbsp;\n`;
            breadcrumbHtml += `</a>\n`;
        } else {
            breadcrumbHtml += `<span id="pageNameBreadcrumb">${level.name}</span>\n`;
        }
    }
    
    breadcrumbHtml += `</div>\n</span>\n</div>`;
    
    // ============================================================
    // 9. GENERATE JSON-LD SCHEMA
    // ============================================================
    const jsonLdItems = [];
    jsonLdItems.push({ "@type": "ListItem", "position": 1, "name": "Beton Jaya Readymix", "item": DOMAIN });
    
    for (let i = 1; i < selectedLevels.length; i++) {
        jsonLdItems.push({
            "@type": "ListItem",
            "position": i + 1,
            "name": selectedLevels[i].name,
            "item": selectedLevels[i].url
        });
    }
    
    // ============================================================
    // 10. HAPUS BREADCRUMB LAMA & INJECT YANG BARU
    // ============================================================
    // Hapus semua breadcrumb lama (manual)
    const oldBreadcrumbs = document.querySelectorAll('.breadcrumbs, .breadcrumb-nav, [aria-label="Breadcrumb"]');
    oldBreadcrumbs.forEach(el => el.remove());
    
    // Hapus JSON-LD lama
    const oldJsonLd = document.querySelector('script[data-breadcrumb="true"]');
    if (oldJsonLd) oldJsonLd.remove();
    
    // Inject HTML breadcrumb baru
    const mainContent = document.querySelector('main, article, .content, #main-content, .post-content');
    if (mainContent?.firstChild) {
        mainContent.insertAdjacentHTML('afterbegin', breadcrumbHtml);
    } else {
        document.body.insertAdjacentHTML('afterbegin', breadcrumbHtml);
    }
    
    // Inject JSON-LD baru
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-breadcrumb', 'true');
    script.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": jsonLdItems
    });
    document.head.appendChild(script);
    
    console.log(`✅ Breadcrumb injected ke DOM`);
    return breadcrumbHtml;
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
      // --- Loader JS eksternal dengan Promise ---
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
		urlMappingSewaAlatProyek,
		urlMappingSewaAlatBerat,
		urlMappingSewaMotorGrader,
		urlMappingSewaAlatPancang,
		urlMappingSewaTrencher,
		urlMappingSewaConcretePaver,
		urlMappingSewaExcavator,
		urlMappingSewaBulldozer,
		urlMappingSewaForklift,
		urlMappingSewaCrane,
		urlMappingSewaBackhoeLoader,
		urlMappingSewaSelfLoader,
		urlMappingSewaVibroRoller,
		urlMappingSewaWalesStoom,
		urlMappingSewaTandemRoller,
		urlMappingSewaBabyRoller,
		urlMappingSewaWheelLoader,
		urlMappingSewaAlatKonstruksiRingan
	
    );

    // --- validasi URL terdaftar ---
    if (!urlMappingGabungan[cleanUrlJasaKonsAlatKonstruksiPost]) {
      console.log(`[HybridDateModified] URL tidak terdaftar: ${cleanUrlJasaKonsAlatKonstruksiPost}`);
      return;
    }

  // === Tanggal nextUpdate1 global ===
	const globalNextUpdate1 = "2026-02-16T00:00:00.000Z";
	console.log(`🌐 [AutoMeta] Detected jasa-alat-konstruksi-post: ${cleanUrlJasaKonsAlatKonstruksiPost}`);

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

	   // ✅ Load evergreen JS (anti 429)
    await loadEvergreenScript();
    // --- pastikan detect-evergreen.js selesai dimuat ---
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

    const hash = stableHash(cleanUrlJasaKonsAlatKonstruksiPost);
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
	
	console.log("✅ AEDMetaDates updated jasa-alat-konstruksi-post:", window.AEDMetaDates);
    console.log(`✅ [HybridDateModified v2.5] ${cleanUrlJasaKonsAlatKonstruksiPost} → ${isoDate} | type=${type || "-"}`);

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
		urlMappingSewaAlatProyekFromSub2MoneyPage,
		urlMappingSewaPompaDewateringFromSub2MoneyPage,
		urlMappingSewaBekistingScaffoldingFromSub2MoneyPage,
		urlMappingSewaPencahayaanUtilitasFromSub2MoneyPage,
		urlMappingSewaAlatSurveyPengukuranFromSub2MoneyPage,
		urlMappingSewaTotalStationFromSub2MoneyChild,
		urlMappingSewaWaterpassFromSub2MoneyChild,
		urlMappingSewaTheodoliteFromSub2MoneyChild,
		urlMappingSewaAksesKeamananProyekFromSub2MoneyPage,
		urlMappingSewaAlatBorGroundWorkFromSub2MoneyPage,
		urlMappingSewaSistemPendukungProyekFromSub2MoneyPage,
		urlMappingSewaAlatBeratFromSub2MoneyPage,
		urlMappingSewaMotorGraderFromSub2MoneyMaster,
		urlMappingSewaAlatPancangFromSub2MoneyMaster,
		urlMappingSewaTrencherFromSub2MoneyMaster,
		urlMappingSewaConcretePaverFromSub2MoneyMaster,
		urlMappingSewaExcavatorFromSub2MoneyPage,
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
	
function generateBreadcrumbForMapping(mappingObj, currentUrl, breadcrumbNames = [], pillarType = 'JASA_KONSTRUKSI') {
    
    const MAX_LEVEL = 4;
    
    // Validasi pillar type
    const validPillarTypes = ['PRODUK_KONSTRUKSI', 'MATERIAL_KONSTRUKSI', 'JASA_KONSTRUKSI', 'PRODUK_INTERIOR', 'JASA_DESAIN_INTERIOR'];
    if (!validPillarTypes.includes(pillarType)) {
        console.error(`❌ ERROR: "${pillarType}" BUKAN PILLAR TYPE yang valid!`);
        return null;
    }
    
    const pageTitle = mappingObj[currentUrl];
    if (!pageTitle) {
        console.error(`❌ ERROR: URL "${currentUrl}" tidak ditemukan di mapping`);
        return null;
    }
    
    // ============================================================
    // FUNGSI DETEKSI TYPE DARI NAMA
    // ============================================================
    function detectPageType(pageName) {
        const lowerName = pageName.toLowerCase();
        if (lowerName.includes('konsultasi')) return 'MONEY_LEADGEN';
        if (lowerName.includes('harga') || lowerName.includes('sewa ') || lowerName.includes('jual ')) return 'MONEY_MASTER';
        if (lowerName.includes('panduan') || lowerName.includes('cara memilih')) return 'SUB1';
        if (lowerName.includes('sewa alat berat') || lowerName.includes('sewa alat ringan')) return 'SUB2_TURUNAN';
        if (lowerName.includes('produk konstruksi') || lowerName.includes('jasa konstruksi')) return 'PILLAR';
        return 'SUB2';
    }
    
    // ============================================================
    // BANGUN LEVELS DARI ARRAY NAMA
    // ============================================================
    const allLevels = [];
    
    // Tambahkan semua level dari array breadcrumbNames
    for (let i = 0; i < breadcrumbNames.length; i++) {
        const name = breadcrumbNames[i];
        // Buat URL dari nama (convert ke slug)
        const url = '/p/' + name.toLowerCase().replace(/ /g, '-') + '.html';
        
        allLevels.push({
            name: name,
            url: url,
            type: detectPageType(name)
        });
    }
    
    // ============================================================
    // TENTUKAN LEVEL YANG AKAN DITAMPILKAN (SKIP OTOMATIS)
    // ============================================================
    const selectedLevels = [];
    
    // Home (WAJIB)
    selectedLevels.push({
        position: 1,
        name: 'Beton Jaya Readymix',
        url: 'https://www.betonjayareadymix.com/'
    });
    
    // Parent terdekat (level terakhir) - WAJIB tampil
    let parentTerdekat = null;
    if (allLevels.length > 0) {
        parentTerdekat = allLevels[allLevels.length - 1];
        selectedLevels.push({
            position: selectedLevels.length + 1,
            name: parentTerdekat.name,
            url: parentTerdekat.url
        });
    }
    
    // Level lainnya (boleh skip)
    for (let i = 0; i < allLevels.length - 1; i++) {
        const level = allLevels[i];
        
        // Cek batas level
        if (selectedLevels.length + 1 >= MAX_LEVEL) {
            console.log(`📌 Skip "${level.name}" (${level.type}) karena batas ${MAX_LEVEL} level`);
            continue;
        }
        
        // Type yang BOLEH skip: PILLAR, SUB2, SUB2_TURUNAN
        if (level.type === 'PILLAR' || level.type === 'SUB2' || level.type === 'SUB2_TURUNAN') {
            console.log(`📌 Skip "${level.name}" (${level.type}) karena type boleh skip`);
            continue;
        }
        
        selectedLevels.push({
            position: selectedLevels.length + 1,
            name: level.name,
            url: level.url
        });
    }
    
    // Halaman saat ini (WAJIB)
    selectedLevels.push({
        position: selectedLevels.length + 1,
        name: pageTitle,
        url: currentUrl
    });
    
    // ============================================================
    // INJECT KE DOM
    // ============================================================
    document.querySelector('.breadcrumb-nav')?.remove();
    document.querySelector('script[data-breadcrumb="true"]')?.remove();
    
    const breadcrumbHtml = `
        <nav aria-label="Breadcrumb" class="breadcrumb-nav">
            <ol class="breadcrumb" itemscope itemtype="https://schema.org/BreadcrumbList">
                ${selectedLevels.map(item => {
                    const isLast = item.url === currentUrl;
                    return `
                        <li class="breadcrumb-item${isLast ? ' active' : ''}" 
                            itemprop="itemListElement" 
                            itemscope itemtype="https://schema.org/ListItem">
                            ${!isLast ? `<a href="${item.url}" itemprop="item">` : ''}
                                <span itemprop="name">${item.name === 'Beton Jaya Readymix' ? '🏠 ' + item.name : item.name}</span>
                            ${!isLast ? '</a>' : ''}
                            <meta itemprop="position" content="${item.position}" />
                        </li>
                    `;
                }).join('')}
            </ol>
        </nav>
    `;
    
    const mainContent = document.querySelector('main, article, .content, #main-content, .post-content');
    if (mainContent?.firstChild) {
        mainContent.insertAdjacentHTML('afterbegin', breadcrumbHtml);
    } else {
        document.body.insertAdjacentHTML('afterbegin', breadcrumbHtml);
    }
    
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-breadcrumb', 'true');
    script.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": selectedLevels.map(item => ({
            "@type": "ListItem",
            "position": item.position,
            "name": item.name,
            "item": item.url
        }))
    }, null, 2);
    document.head.appendChild(script);
    
    console.log(`✅ Breadcrumb: ${selectedLevels.map(l => l.name).join(' → ')}`);
    return { breadcrumbHtml, levels: selectedLevels };
}
    // --- validasi URL terdaftar ---
    if (!urlMappingGabungan[cleanUrlJasaKonsAlatKonstruksiPost]) {
      console.log(`[HybridDateModified] URL tidak terdaftar: ${cleanUrlJasaKonsAlatKonstruksiPost}`);
      return;
    }

	 (async function runHybridDateModified() {
		  try {
		
		    function loadExternalJS(src) {
		      return new Promise((resolve) => {
		        if (document.querySelector(`script[src="${src}"]`)) {
		          resolve();
		          return;
		        }
		
		        const s = document.createElement("script");
		        s.src = src;
		        s.defer = true; // 🔥 PENTING
		        s.onload = resolve;
		        s.onerror = () => {
		          console.warn("[Evergreen] Gagal load:", src);
		          resolve(); // ❗ jangan reject
		        };
		        document.head.appendChild(s);
		      });
		    }
		
		    function waitForDetectEvergreen() {
		      return new Promise((resolve) => {
		        if (
		          window.__detectEvergreenReady &&
		          typeof window.detectEvergreen === "function"
		        ) {
		          resolve(true);
		        } else {
		          window.addEventListener(
		            "detectEvergreenReady",
		            () => resolve(true),
		            { once: true }
		          );
		        }
		      });
		    }
		
		    async function loadEvergreenScript(manualDate = null) {
		
		      if (typeof window.detectEvergreen !== "function") {
		        console.log("⏳ Loading detectEvergreen...");
		
		        await loadExternalJS(
		          "https://raw.githack.com/aliyul/solution-blogger/main/detect-evergreen.js"
		        );
		
		        await waitForDetectEvergreen();
		        console.log("✅ detectEvergreen READY");
		      } else {
		        console.log("⚡ detectEvergreen already available");
		      }
		
		      const config = manualDate
		        ? { customDateModified: manualDate }
		        : {};
		
		      console.log("🧠 detectEvergreen config:", config);
		
		      try {
		        window.detectEvergreen(config);
		      } catch (e) {
		        console.error("[Evergreen] Execution failed:", e);
		      }
		    }
		
		    // =============================
		    // MODE PEMANGGILAN
		    // =============================
		
		    // ✔ MANUAL (ONCE UPDATE EVERGREEN)
		    await loadEvergreenScript("2026-01-13T10:30:00+07:00");
		
		    // ✔ AUTO MODE
		    // await loadEvergreenScript();
		
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
if (urlMappingSewaAlatProyekFromSub2MoneyPage[cleanUrlJasaKonsAlatKonstruksiPost]) {
        restoreCondition('JasaKonsAlatKonstruksiPost');
       // restoreCondition('JasaAlatKonstruksiPost');
        restoreCondition('SewaAlatProyekPost');
	       
     
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
        SewaAlatKonstruksiPostLink.style.visibility = 'visible';
	//TAMPILKAN SewaAlatProyekPost
        SewaAlatProyekPostLink.style.visibility = 'visible';
        pageNameJasaKonsAlatKonstruksiPost.textContent = urlMappingSewaAlatProyekFromSub2MoneyPage[cleanUrlJasaKonsAlatKonstruksiPost];
    
		generateBreadcrumbForMapping(
        urlMappingSewaAlatProyekFromSub2MoneyPage,
        cleanUrlJasaKonsAlatKonstruksiPost,
        [
            { name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Jasa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-alat-konstruksi.html' },
            { name: 'Sewa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/sewa-alat-konstruksi.html' },
            { name: 'Sewa Alat Proyek', url: 'https://www.betonjayareadymix.com/p/sewa-alat-proyek.html' }
        ],
        'SEWA_RENTAL'
    );
}
 
//SUB SEWA ALAT PROYEK POST
  if (urlMappingSewaPompaDewateringFromSub2MoneyPage[cleanUrlJasaKonsAlatKonstruksiPost]) {
        restoreCondition('JasaKonsAlatKonstruksiPost');
       // restoreCondition('JasaAlatKonstruksiPost');
        restoreCondition('SewaAlatProyekPost');
	    restoreCondition('SewaAlatProyekPompaDewateringPost');
	      
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
    
        JasaKonstruksiAlatKonstruksiPostLink.style.visibility = 'visible';
        JasaAlatKonstruksiPostLink.style.visibility = 'visible';
        SewaAlatKonstruksiPostLink.style.visibility = 'visible';
	//TAMPILKAN SewaAlatProyekPost
        SewaAlatProyekPostLink.style.visibility = 'visible';
	   SewaAlatProyekPompaDewateringPostLink.style.visibility = 'visible';
        pageNameJasaKonsAlatKonstruksiPost.textContent = urlMappingSewaPompaDewateringFromSub2MoneyPage[cleanUrlJasaKonsAlatKonstruksiPost];
    
          generateBreadcrumbForMapping(
        urlMappingSewaPompaDewateringFromSub2MoneyPage,
        cleanUrlJasaKonsAlatKonstruksiPost,
        [
            { name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Jasa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-alat-konstruksi.html' },
            { name: 'Sewa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/sewa-alat-konstruksi.html' },
            { name: 'Sewa Alat Proyek', url: 'https://www.betonjayareadymix.com/p/sewa-alat-proyek.html' },
            { name: 'Sewa Pompa Dewatering Proyek', url: 'https://www.betonjayareadymix.com/2019/02/sewa-pompa-dewatering-proyek.html' }
        ],
        'SEWA_RENTAL'
    );
  }


 if (urlMappingSewaBekistingScaffoldingFromSub2MoneyPage[cleanUrlJasaKonsAlatKonstruksiPost]) {
        restoreCondition('JasaKonsAlatKonstruksiPost');
       // restoreCondition('JasaAlatKonstruksiPost');
        restoreCondition('SewaAlatProyekPost');
	    restoreCondition('SewaAlatProyekBekistingScaffoldingPost');
	      
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
    
        JasaKonstruksiAlatKonstruksiPostLink.style.visibility = 'visible';
        JasaAlatKonstruksiPostLink.style.visibility = 'visible';
        SewaAlatKonstruksiPostLink.style.visibility = 'visible';
	//TAMPILKAN SewaAlatProyekPost
        SewaAlatProyekPostLink.style.visibility = 'visible';
	   SewaAlatProyekBekistingScaffoldingPostLink.style.visibility = 'visible';
        pageNameJasaKonsAlatKonstruksiPost.textContent = urlMappingSewaBekistingScaffoldingFromSub2MoneyPage[cleanUrlJasaKonsAlatKonstruksiPost];
    
           generateBreadcrumbForMapping(
        urlMappingSewaBekistingScaffoldingFromSub2MoneyPage,
        cleanUrlJasaKonsAlatKonstruksiPost,
        [
            { name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Jasa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-alat-konstruksi.html' },
            { name: 'Sewa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/sewa-alat-konstruksi.html' },
            { name: 'Sewa Alat Proyek', url: 'https://www.betonjayareadymix.com/p/sewa-alat-proyek.html' },
            { name: 'Sewa Bekisting Scaffolding', url: 'https://www.betonjayareadymix.com/2019/02/sewa-bekisting-scaffolding.html' }
        ],
        'SEWA_RENTAL'
    );
 }
   

 if (urlMappingSewaPencahayaanUtilitasFromSub2MoneyPage[cleanUrlJasaKonsAlatKonstruksiPost]) {
        restoreCondition('JasaKonsAlatKonstruksiPost');
       // restoreCondition('JasaAlatKonstruksiPost');
        restoreCondition('SewaAlatProyekPost');
	    restoreCondition('SewaAlatProyekPencahayaanUtilitasPost');
	      
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
    
        JasaKonstruksiAlatKonstruksiPostLink.style.visibility = 'visible';
        JasaAlatKonstruksiPostLink.style.visibility = 'visible';
        SewaAlatKonstruksiPostLink.style.visibility = 'visible';
	//TAMPILKAN SewaAlatProyekPost
        SewaAlatProyekPostLink.style.visibility = 'visible';
	   SewaAlatProyekPencahayaanUtilitasPostLink.style.visibility = 'visible';
        pageNameJasaKonsAlatKonstruksiPost.textContent = urlMappingSewaPencahayaanUtilitasFromSub2MoneyPage[cleanUrlJasaKonsAlatKonstruksiPost];
    
	 generateBreadcrumbForMapping(
        urlMappingSewaPencahayaanUtilitasFromSub2MoneyPage,
        cleanUrlJasaKonsAlatKonstruksiPost,
        [
            { name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Jasa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-alat-konstruksi.html' },
            { name: 'Sewa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/sewa-alat-konstruksi.html' },
            { name: 'Sewa Alat Proyek', url: 'https://www.betonjayareadymix.com/p/sewa-alat-proyek.html' },
            { name: 'Sewa Pencahayaan Utilitas', url: 'https://www.betonjayareadymix.com/2019/02/sewa-pencahayaan-utilitas.html' }
        ],
        'SEWA_RENTAL'
    );
 }
   

if (urlMappingSewaAlatSurveyPengukuranFromSub2MoneyPage[cleanUrlJasaKonsAlatKonstruksiPost]) {
        restoreCondition('JasaKonsAlatKonstruksiPost');
       // restoreCondition('JasaAlatKonstruksiPost');
        restoreCondition('SewaAlatProyekPost');
	    restoreCondition('SewaAlatProyekSurveyPengukuranPost');
	      
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
    
        JasaKonstruksiAlatKonstruksiPostLink.style.visibility = 'visible';
        JasaAlatKonstruksiPostLink.style.visibility = 'visible';
        SewaAlatKonstruksiPostLink.style.visibility = 'visible';
	//TAMPILKAN SewaAlatProyekPost
        SewaAlatProyekPostLink.style.visibility = 'visible';
	   SewaAlatProyekSurveyPengukuranPostLink.style.visibility = 'visible';
        pageNameJasaKonsAlatKonstruksiPost.textContent = urlMappingSewaAlatSurveyPengukuranFromSub2MoneyPage[cleanUrlJasaKonsAlatKonstruksiPost];
    
        generateBreadcrumbForMapping(
        urlMappingSewaAlatSurveyPengukuranFromSub2MoneyPage,
        cleanUrlJasaKonsAlatKonstruksiPost,
        [
            { name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Jasa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-alat-konstruksi.html' },
            { name: 'Sewa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/sewa-alat-konstruksi.html' },
            { name: 'Sewa Alat Proyek', url: 'https://www.betonjayareadymix.com/p/sewa-alat-proyek.html' },
            { name: 'Sewa Alat Survey Pengukuran', url: 'https://www.betonjayareadymix.com/2019/02/sewa-alat-survey-pengukuran.html' }
        ],
        'SEWA_RENTAL'
    );
}
   
 //SUB SEWA  ALAT SURVEY
if (urlMappingSewaTotalStationFromSub2MoneyChild[cleanUrlJasaKonsAlatKonstruksiPost]) {
        restoreCondition('JasaKonsAlatKonstruksiPost');
       // restoreCondition('JasaAlatKonstruksiPost');
        restoreCondition('SewaAlatProyekPost');
	    restoreCondition('SewaAlatProyekSurveyPengukuranPost');
	    restoreCondition('SewaAlatProyekSurveyPengukuranTotalStationPost');
	    
	
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
    
        JasaKonstruksiAlatKonstruksiPostLink.style.visibility = 'visible';
        JasaAlatKonstruksiPostLink.style.visibility = 'visible';
        SewaAlatKonstruksiPostLink.style.visibility = 'visible';
	//TAMPILKAN SewaAlatProyekPost
        SewaAlatProyekPostLink.style.visibility = 'visible';
	   SewaAlatProyekSurveyPengukuranPostLink.style.visibility = 'visible';
	  SewaAlatProyekSurveyPengukuranTotalStationPostLink.style.visibility = 'visible';
        pageNameJasaKonsAlatKonstruksiPost.textContent = urlMappingSewaTotalStationFromSub2MoneyChild[cleanUrlJasaKonsAlatKonstruksiPost];
   
     generateBreadcrumbForMapping(
        urlMappingSewaTotalStationFromSub2MoneyChild,
        cleanUrlJasaKonsAlatKonstruksiPost,
        [
            { name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Jasa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-alat-konstruksi.html' },
            { name: 'Sewa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/sewa-alat-konstruksi.html' },
            { name: 'Sewa Alat Proyek', url: 'https://www.betonjayareadymix.com/p/sewa-alat-proyek.html' },
            { name: 'Sewa Alat Survey Pengukuran', url: 'https://www.betonjayareadymix.com/2019/02/sewa-alat-survey-pengukuran.html' },
            { name: 'Sewa Total Station', url: 'https://www.betonjayareadymix.com/2019/03/sewa-total-station.html' }
        ],
        'SEWA_RENTAL'
    );
}
  
if (urlMappingSewaWaterpassFromSub2MoneyChild[cleanUrlJasaKonsAlatKonstruksiPost]) {
        restoreCondition('JasaKonsAlatKonstruksiPost');
       // restoreCondition('JasaAlatKonstruksiPost');
	
        restoreCondition('SewaAlatProyekPost');
	    restoreCondition('SewaAlatProyekSurveyPengukuranPost');
	    restoreCondition('SewaAlatProyekSurveyPengukuranWaterpassPost');
	      
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
    
        JasaKonstruksiAlatKonstruksiPostLink.style.visibility = 'visible';
        JasaAlatKonstruksiPostLink.style.visibility = 'visible';
        SewaAlatKonstruksiPostLink.style.visibility = 'visible';
	//TAMPILKAN SewaAlatProyekPost
        SewaAlatProyekPostLink.style.visibility = 'visible';
	   SewaAlatProyekSurveyPengukuranPostLink.style.visibility = 'visible';
	   SewaAlatProyekSurveyPengukuranWaterpassPostLink.style.visibility = 'visible';
        pageNameJasaKonsAlatKonstruksiPost.textContent = urlMappingSewaWaterpassFromSub2MoneyChild[cleanUrlJasaKonsAlatKonstruksiPost];
   
		generateBreadcrumbForMapping(
        urlMappingSewaWaterpassFromSub2MoneyChild,
        cleanUrlJasaKonsAlatKonstruksiPost,
        [
            { name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Jasa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-alat-konstruksi.html' },
            { name: 'Sewa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/sewa-alat-konstruksi.html' },
            { name: 'Sewa Alat Proyek', url: 'https://www.betonjayareadymix.com/p/sewa-alat-proyek.html' },
            { name: 'Sewa Alat Survey Pengukuran', url: 'https://www.betonjayareadymix.com/2019/02/sewa-alat-survey-pengukuran.html' },
            { name: 'Sewa Waterpass', url: 'https://www.betonjayareadymix.com/2019/03/sewa-waterpass.html' }
        ],
        'SEWA_RENTAL'
    );
}
  
if (urlMappingSewaTheodoliteFromSub2MoneyChild[cleanUrlJasaKonsAlatKonstruksiPost]) {
        restoreCondition('JasaKonsAlatKonstruksiPost');
       // restoreCondition('JasaAlatKonstruksiPost');
        restoreCondition('SewaAlatProyekPost');
	    restoreCondition('SewaAlatProyekSurveyPengukuranPost');
	    restoreCondition('SewaAlatProyekSurveyPengukuranTheodolitePost');
	      
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
    
        JasaKonstruksiAlatKonstruksiPostLink.style.visibility = 'visible';
        JasaAlatKonstruksiPostLink.style.visibility = 'visible';
        SewaAlatKonstruksiPostLink.style.visibility = 'visible';
	//TAMPILKAN SewaAlatProyekPost
        SewaAlatProyekPostLink.style.visibility = 'visible';
	   SewaAlatProyekSurveyPengukuranPostLink.style.visibility = 'visible';
	   SewaAlatProyekSurveyPengukuranTheodolitePostLink.style.visibility = 'visible';
        pageNameJasaKonsAlatKonstruksiPost.textContent = urlMappingSewaTheodoliteFromSub2MoneyChild[cleanUrlJasaKonsAlatKonstruksiPost];
    
		   generateBreadcrumbForMapping(
        urlMappingSewaTheodoliteFromSub2MoneyChild,
        cleanUrlJasaKonsAlatKonstruksiPost,
        [
            { name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Jasa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-alat-konstruksi.html' },
            { name: 'Sewa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/sewa-alat-konstruksi.html' },
            { name: 'Sewa Alat Proyek', url: 'https://www.betonjayareadymix.com/p/sewa-alat-proyek.html' },
            { name: 'Sewa Alat Survey Pengukuran', url: 'https://www.betonjayareadymix.com/2019/02/sewa-alat-survey-pengukuran.html' },
            { name: 'Sewa Theodolite', url: 'https://www.betonjayareadymix.com/2019/03/sewa-theodolite.html' }
        ],
        'SEWA_RENTAL'
    );
}
   
	
  if (urlMappingSewaAksesKeamananProyekFromSub2MoneyPage[cleanUrlJasaKonsAlatKonstruksiPost]) {
        restoreCondition('JasaKonsAlatKonstruksiPost');
       // restoreCondition('JasaAlatKonstruksiPost');
        restoreCondition('SewaAlatProyekPost');
	    restoreCondition('SewaAlatProyekAksesKeamananPost');
	      
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
    
        JasaKonstruksiAlatKonstruksiPostLink.style.visibility = 'visible';
        JasaAlatKonstruksiPostLink.style.visibility = 'visible';
        SewaAlatKonstruksiPostLink.style.visibility = 'visible';
	//TAMPILKAN SewaAlatProyekPost
        SewaAlatProyekPostLink.style.visibility = 'visible';
	   SewaAlatProyekAksesKeamananPostLink.style.visibility = 'visible';
        pageNameJasaKonsAlatKonstruksiPost.textContent = urlMappingSewaAksesKeamananProyekFromSub2MoneyPage[cleanUrlJasaKonsAlatKonstruksiPost];
    
  		    generateBreadcrumbForMapping(
        urlMappingSewaAksesKeamananProyekFromSub2MoneyPage,
        cleanUrlJasaKonsAlatKonstruksiPost,
        [
            { name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Jasa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-alat-konstruksi.html' },
            { name: 'Sewa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/sewa-alat-konstruksi.html' },
            { name: 'Sewa Alat Proyek', url: 'https://www.betonjayareadymix.com/p/sewa-alat-proyek.html' },
            { name: 'Sewa Akses Keamanan Proyek', url: 'https://www.betonjayareadymix.com/2019/02/sewa-akses-keamanan-proyek.html' }
        ],
        'SEWA_RENTAL'
    );
  }
   
	
  if (urlMappingSewaAlatBorGroundWorkFromSub2MoneyPage[cleanUrlJasaKonsAlatKonstruksiPost]) {
        restoreCondition('JasaKonsAlatKonstruksiPost');
       // restoreCondition('JasaAlatKonstruksiPost');
        restoreCondition('SewaAlatProyekPost');
	    restoreCondition('SewaAlatProyekBorGroundWorkPost');
	      
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
    
        JasaKonstruksiAlatKonstruksiPostLink.style.visibility = 'visible';
        JasaAlatKonstruksiPostLink.style.visibility = 'visible';
        SewaAlatKonstruksiPostLink.style.visibility = 'visible';
	//TAMPILKAN SewaAlatProyekPost
        SewaAlatProyekPostLink.style.visibility = 'visible';
	   SewaAlatProyekBorGroundWorkPostLink.style.visibility = 'visible';
        pageNameJasaKonsAlatKonstruksiPost.textContent = urlMappingSewaAlatBorGroundWorkFromSub2MoneyPage[cleanUrlJasaKonsAlatKonstruksiPost];
   
  		    generateBreadcrumbForMapping(
        urlMappingSewaAlatBorGroundWorkFromSub2MoneyPage,
        cleanUrlJasaKonsAlatKonstruksiPost,
        [
            { name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Jasa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-alat-konstruksi.html' },
            { name: 'Sewa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/sewa-alat-konstruksi.html' },
            { name: 'Sewa Alat Proyek', url: 'https://www.betonjayareadymix.com/p/sewa-alat-proyek.html' },
            { name: 'Sewa Alat Bor Ground Work', url: 'https://www.betonjayareadymix.com/2019/02/sewa-alat-bor-ground-work.html' }
        ],
        'SEWA_RENTAL'
    );
  }

if (urlMappingSewaSistemPendukungProyekFromSub2MoneyPage[cleanUrlJasaKonsAlatKonstruksiPost]) {
        restoreCondition('JasaKonsAlatKonstruksiPost');
       // restoreCondition('JasaAlatKonstruksiPost');
        restoreCondition('SewaAlatProyekPost');
	    restoreCondition('SewaAlatProyekSistemPendukungPost');
	      
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
    
        JasaKonstruksiAlatKonstruksiPostLink.style.visibility = 'visible';
        JasaAlatKonstruksiPostLink.style.visibility = 'visible';
        SewaAlatKonstruksiPostLink.style.visibility = 'visible';
	//TAMPILKAN SewaAlatProyekPost
        SewaAlatProyekPostLink.style.visibility = 'visible';
	   SewaAlatProyekSistemPendukungPostLink.style.visibility = 'visible';
        pageNameJasaKonsAlatKonstruksiPost.textContent = urlMappingSewaSistemPendukungProyekFromSub2MoneyPage[cleanUrlJasaKonsAlatKonstruksiPost];
   
		    generateBreadcrumbForMapping(
        urlMappingSewaSistemPendukungProyekFromSub2MoneyPage,
        cleanUrlJasaKonsAlatKonstruksiPost,
        [
            { name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Jasa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-alat-konstruksi.html' },
            { name: 'Sewa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/sewa-alat-konstruksi.html' },
            { name: 'Sewa Alat Proyek', url: 'https://www.betonjayareadymix.com/p/sewa-alat-proyek.html' },
            { name: 'Sewa Sistem Pendukung Proyek', url: 'https://www.betonjayareadymix.com/2019/02/sewa-sistem-pendukung-proyek.html' }
        ],
        'SEWA_RENTAL'
    );
}

	
	//AKHIR SUB SEWA ALAT PROYEK
if (urlMappingSewaAlatBeratFromSub2MoneyPage[cleanUrlJasaKonsAlatKonstruksiPost]) {
        restoreCondition('JasaKonsAlatKonstruksiPost');
       // restoreCondition('JasaAlatKonstruksiPost');
        restoreCondition('SewaAlatBeratPost');
	       
     
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
    
        JasaKonstruksiAlatKonstruksiPostLink.style.visibility = 'visible';
        JasaAlatKonstruksiPostLink.style.visibility = 'visible';
        SewaAlatKonstruksiPostLink.style.visibility = 'visible';
	//TAMPILKAN SewaAlatBeratPost
        SewaAlatBeratPostLink.style.visibility = 'visible';
        pageNameJasaKonsAlatKonstruksiPost.textContent = urlMappingSewaAlatBeratFromSub2MoneyPage[cleanUrlJasaKonsAlatKonstruksiPost];
    
		    generateBreadcrumbForMapping(
        urlMappingSewaAlatBeratFromSub2MoneyPage,
        cleanUrlJasaKonsAlatKonstruksiPost,
        [
            { name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Jasa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-alat-konstruksi.html' },
            { name: 'Sewa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/sewa-alat-konstruksi.html' },
            { name: 'Sewa Alat Berat', url: 'https://www.betonjayareadymix.com/p/sewa-alat-berat.html' }
        ],
        'SEWA_RENTAL'
    );
}

    
   //AWAL SUB PAGE SEWA ALAT BERAT
   if (urlMappingSewaForkliftFromSub2MoneyMaster[cleanUrlJasaKonsAlatKonstruksiPost]) {
        restoreCondition('JasaKonsAlatKonstruksiPost');
        restoreCondition('SewaAlatBeratPost');
        restoreCondition('SewaForkliftPost');
	       
     
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
    
        JasaKonstruksiAlatKonstruksiPostLink.style.visibility = 'visible';
        JasaAlatKonstruksiPostLink.style.visibility = 'visible';
        SewaAlatKonstruksiPostLink.style.visibility = 'visible';
	//TAMPILKAN SewaAlatBeratPost
        SewaAlatBeratPostLink.style.visibility = 'visible';
	
        SewaForkliftPostLink.style.visibility = 'visible';
        pageNameJasaKonsAlatKonstruksiPost.textContent = urlMappingSewaForkliftFromSub2MoneyMaster[cleanUrlJasaKonsAlatKonstruksiPost];
    
   		    generateBreadcrumbForMapping(
        urlMappingSewaForkliftFromSub2MoneyMaster,
        cleanUrlJasaKonsAlatKonstruksiPost,
        [
            { name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Jasa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-alat-konstruksi.html' },
            { name: 'Sewa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/sewa-alat-konstruksi.html' },
            { name: 'Sewa Alat Berat', url: 'https://www.betonjayareadymix.com/p/sewa-alat-berat.html' },
            { name: 'Sewa Forklift', url: 'https://www.betonjayareadymix.com/p/sewa-forklift.html' }
        ],
        'SEWA_RENTAL'
    );
}
	
if (urlMappingSewaCraneFromSub2MoneyMaster[cleanUrlJasaKonsAlatKonstruksiPost]) {
        restoreCondition('JasaKonsAlatKonstruksiPost');
        restoreCondition('SewaAlatBeratPost');
        restoreCondition('SewaCranePost');
	       
     
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
    
        JasaKonstruksiAlatKonstruksiPostLink.style.visibility = 'visible';
        JasaAlatKonstruksiPostLink.style.visibility = 'visible';
        SewaAlatKonstruksiPostLink.style.visibility = 'visible';
	//TAMPILKAN SewaAlatBeratPost
        SewaAlatBeratPostLink.style.visibility = 'visible';
	
        SewaCranePostLink.style.visibility = 'visible';
        pageNameJasaKonsAlatKonstruksiPost.textContent = urlMappingSewaCraneFromSub2MoneyMaster[cleanUrlJasaKonsAlatKonstruksiPost];
    
		    generateBreadcrumbForMapping(
        urlMappingSewaCraneFromSub2MoneyMaster,
        cleanUrlJasaKonsAlatKonstruksiPost,
        [
            { name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Jasa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-alat-konstruksi.html' },
            { name: 'Sewa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/sewa-alat-konstruksi.html' },
            { name: 'Sewa Alat Berat', url: 'https://www.betonjayareadymix.com/p/sewa-alat-berat.html' },
            { name: 'Sewa Crane', url: 'https://www.betonjayareadymix.com/p/sewa-crane.html' }
        ],
        'SEWA_RENTAL'
    );
}

if (urlMappingSewaSelfLoaderFromSub2MoneyMaster[cleanUrlJasaKonsAlatKonstruksiPost]) {
        restoreCondition('JasaKonsAlatKonstruksiPost');
        restoreCondition('SewaAlatBeratPost');
        restoreCondition('SewaSelfLoaderPost');
	       
     
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
    
        JasaKonstruksiAlatKonstruksiPostLink.style.visibility = 'visible';
        JasaAlatKonstruksiPostLink.style.visibility = 'visible';
        SewaAlatKonstruksiPostLink.style.visibility = 'visible';
	//TAMPILKAN SewaAlatBeratPost
        SewaAlatBeratPostLink.style.visibility = 'visible';
	
        SewaSelfLoaderPostLink.style.visibility = 'visible';
        pageNameJasaKonsAlatKonstruksiPost.textContent = urlMappingSewaSelfLoaderFromSub2MoneyMaster[cleanUrlJasaKonsAlatKonstruksiPost];
    
		    generateBreadcrumbForMapping(
        urlMappingSewaSelfLoaderFromSub2MoneyMaster,
        cleanUrlJasaKonsAlatKonstruksiPost,
        [
            { name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Jasa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-alat-konstruksi.html' },
            { name: 'Sewa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/sewa-alat-konstruksi.html' },
            { name: 'Sewa Alat Berat', url: 'https://www.betonjayareadymix.com/p/sewa-alat-berat.html' },
            { name: 'Sewa Self Loader', url: 'https://www.betonjayareadymix.com/p/sewa-self-loader.html' }
        ],
        'SEWA_RENTAL'
    );
}

	
if (urlMappingSewaWheelLoaderFromSub2MoneyMaster[cleanUrlJasaKonsAlatKonstruksiPost]) {
        restoreCondition('JasaKonsAlatKonstruksiPost');
        restoreCondition('SewaAlatBeratPost');
        restoreCondition('SewaWheelLoaderPost');
	       
     
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
    
        JasaKonstruksiAlatKonstruksiPostLink.style.visibility = 'visible';
        JasaAlatKonstruksiPostLink.style.visibility = 'visible';
        SewaAlatKonstruksiPostLink.style.visibility = 'visible';
	//TAMPILKAN SewaAlatBeratPost
        SewaAlatBeratPostLink.style.visibility = 'visible';
	
        SewaWheelLoaderPostLink.style.visibility = 'visible';
        pageNameJasaKonsAlatKonstruksiPost.textContent = urlMappingSewaWheelLoaderFromSub2MoneyMaster[cleanUrlJasaKonsAlatKonstruksiPost];

	       generateBreadcrumbForMapping(
        urlMappingSewaWheelLoaderFromSub2MoneyMaster,
        cleanUrlJasaKonsAlatKonstruksiPost,
        [
            { name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Jasa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-alat-konstruksi.html' },
            { name: 'Sewa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/sewa-alat-konstruksi.html' },
            { name: 'Sewa Alat Berat', url: 'https://www.betonjayareadymix.com/p/sewa-alat-berat.html' },
            { name: 'Sewa Wheel Loader', url: 'https://www.betonjayareadymix.com/p/sewa-wheel-loader.html' }
        ],
        'SEWA_RENTAL'
    );
}

if (urlMappingSewaVibroRollerFromSub2MoneyMaster[cleanUrlJasaKonsAlatKonstruksiPost]) {
        restoreCondition('JasaKonsAlatKonstruksiPost');
        restoreCondition('SewaAlatBeratPost');
        restoreCondition('SewaVibroRollerPost');
	       
     
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
    
        JasaKonstruksiAlatKonstruksiPostLink.style.visibility = 'visible';
        JasaAlatKonstruksiPostLink.style.visibility = 'visible';
        SewaAlatKonstruksiPostLink.style.visibility = 'visible';
	//TAMPILKAN SewaAlatBeratPost
        SewaAlatBeratPostLink.style.visibility = 'visible';
	
        SewaVibroRollerPostLink.style.visibility = 'visible';
        pageNameJasaKonsAlatKonstruksiPost.textContent = urlMappingSewaVibroRollerFromSub2MoneyMaster[cleanUrlJasaKonsAlatKonstruksiPost];
    
		    generateBreadcrumbForMapping(
        urlMappingSewaVibroRollerFromSub2MoneyMaster,
        cleanUrlJasaKonsAlatKonstruksiPost,
        [
            { name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Jasa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-alat-konstruksi.html' },
            { name: 'Sewa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/sewa-alat-konstruksi.html' },
            { name: 'Sewa Alat Berat', url: 'https://www.betonjayareadymix.com/p/sewa-alat-berat.html' },
            { name: 'Sewa Vibro Roller', url: 'https://www.betonjayareadymix.com/p/sewa-vibro-roller.html' }
        ],
        'SEWA_RENTAL'
    );
}

	
if (urlMappingSewaWalesStoomFromSub2MoneyMaster[cleanUrlJasaKonsAlatKonstruksiPost]) {
        restoreCondition('JasaKonsAlatKonstruksiPost');
        restoreCondition('SewaAlatBeratPost');
        restoreCondition('SewaWalesStoomPost');
	       
     
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
    
        JasaKonstruksiAlatKonstruksiPostLink.style.visibility = 'visible';
        JasaAlatKonstruksiPostLink.style.visibility = 'visible';
        SewaAlatKonstruksiPostLink.style.visibility = 'visible';
	//TAMPILKAN SewaAlatBeratPost
        SewaAlatBeratPostLink.style.visibility = 'visible';
	
        SewaWalesStoomPostLink.style.visibility = 'visible';
        pageNameJasaKonsAlatKonstruksiPost.textContent = urlMappingSewaWalesStoomFromSub2MoneyMaster[cleanUrlJasaKonsAlatKonstruksiPost];
    
		    generateBreadcrumbForMapping(
        urlMappingSewaWalesStoomFromSub2MoneyMaster,
        cleanUrlJasaKonsAlatKonstruksiPost,
        [
            { name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Jasa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-alat-konstruksi.html' },
            { name: 'Sewa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/sewa-alat-konstruksi.html' },
            { name: 'Sewa Alat Berat', url: 'https://www.betonjayareadymix.com/p/sewa-alat-berat.html' },
            { name: 'Sewa Wales Stoom', url: 'https://www.betonjayareadymix.com/p/sewa-wales-stoom.html' }
        ],
        'SEWA_RENTAL'
    );
}	
	
if (urlMappingSewaTandemRollerFromSub2MoneyMaster[cleanUrlJasaKonsAlatKonstruksiPost]) {
        restoreCondition('JasaKonsAlatKonstruksiPost');
        restoreCondition('SewaAlatBeratPost');
        restoreCondition('SewaTandemRollerPost');
	       
     
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
    
        JasaKonstruksiAlatKonstruksiPostLink.style.visibility = 'visible';
        JasaAlatKonstruksiPostLink.style.visibility = 'visible';
        SewaAlatKonstruksiPostLink.style.visibility = 'visible';
	//TAMPILKAN SewaAlatBeratPost
        SewaAlatBeratPostLink.style.visibility = 'visible';
	
        SewaTandemRollerPostLink.style.visibility = 'visible';
        pageNameJasaKonsAlatKonstruksiPost.textContent = urlMappingSewaTandemRollerFromSub2MoneyMaster[cleanUrlJasaKonsAlatKonstruksiPost];
    
		generateBreadcrumbForMapping(
        urlMappingSewaTandemRollerFromSub2MoneyMaster,
        cleanUrlJasaKonsAlatKonstruksiPost,
        [
            { name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Jasa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-alat-konstruksi.html' },
            { name: 'Sewa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/sewa-alat-konstruksi.html' },
            { name: 'Sewa Alat Berat', url: 'https://www.betonjayareadymix.com/p/sewa-alat-berat.html' },
            { name: 'Sewa Tandem Roller', url: 'https://www.betonjayareadymix.com/p/sewa-tandem-roller.html' }
        ],
        'SEWA_RENTAL'
    );

}

if (urlMappingSewaBulldozerFromSub2MoneyMaster[cleanUrlJasaKonsAlatKonstruksiPost]) {
        restoreCondition('JasaKonsAlatKonstruksiPost');
        restoreCondition('SewaAlatBeratPost');
        restoreCondition('SewaBulldozerPost');
	       
     
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
    
        JasaKonstruksiAlatKonstruksiPostLink.style.visibility = 'visible';
        JasaAlatKonstruksiPostLink.style.visibility = 'visible';
        SewaAlatKonstruksiPostLink.style.visibility = 'visible';
	//TAMPILKAN SewaAlatBeratPost
        SewaAlatBeratPostLink.style.visibility = 'visible';
	
        SewaBulldozerPostLink.style.visibility = 'visible';
        pageNameJasaKonsAlatKonstruksiPost.textContent = urlMappingSewaBulldozerFromSub2MoneyMaster[cleanUrlJasaKonsAlatKonstruksiPost];
   
		   generateBreadcrumbForMapping(
        urlMappingSewaBulldozerFromSub2MoneyMaster,
        cleanUrlJasaKonsAlatKonstruksiPost,
        [
            { name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Jasa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-alat-konstruksi.html' },
            { name: 'Sewa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/sewa-alat-konstruksi.html' },
            { name: 'Sewa Alat Berat', url: 'https://www.betonjayareadymix.com/p/sewa-alat-berat.html' },
            { name: 'Sewa Bulldozer', url: 'https://www.betonjayareadymix.com/p/sewa-bulldozer.html' }
        ],
        'SEWA_RENTAL'
    );
}

if (urlMappingSewaExcavatorFromSub2MoneyPage[cleanUrlJasaKonsAlatKonstruksiPost]) {
        restoreCondition('JasaKonsAlatKonstruksiPost');
        restoreCondition('SewaAlatBeratPost');
        restoreCondition('SewaExcavatorPost');
	       
     
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
    
        JasaKonstruksiAlatKonstruksiPostLink.style.visibility = 'visible';
        JasaAlatKonstruksiPostLink.style.visibility = 'visible';
        SewaAlatKonstruksiPostLink.style.visibility = 'visible';
	//TAMPILKAN SewaAlatBeratPost
        SewaAlatBeratPostLink.style.visibility = 'visible';
	
        SewaExcavatorPostLink.style.visibility = 'visible';
        pageNameJasaKonsAlatKonstruksiPost.textContent = urlMappingSewaExcavatorFromSub2MoneyPage[cleanUrlJasaKonsAlatKonstruksiPost];
    
				   generateBreadcrumbForMapping(
        urlMappingSewaExcavatorFromSub2MoneyPage,
        cleanUrlJasaKonsAlatKonstruksiPost,
        [
            { name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Jasa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-alat-konstruksi.html' },
            { name: 'Sewa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/sewa-alat-konstruksi.html' },
            { name: 'Sewa Alat Berat', url: 'https://www.betonjayareadymix.com/p/sewa-alat-berat.html' },
            { name: 'Sewa Excavator', url: 'https://www.betonjayareadymix.com/p/sewa-excavator.html' }
        ],
        'SEWA_RENTAL'
    );
}

if (urlMappingSewaBackhoeLoaderFromSub2MoneyMaster[cleanUrlJasaKonsAlatKonstruksiPost]) {
        restoreCondition('JasaKonsAlatKonstruksiPost');
        restoreCondition('SewaAlatBeratPost');
        restoreCondition('SewaBackhoeLoaderPost');
	       
     
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
    
        JasaKonstruksiAlatKonstruksiPostLink.style.visibility = 'visible';
        JasaAlatKonstruksiPostLink.style.visibility = 'visible';
        SewaAlatKonstruksiPostLink.style.visibility = 'visible';
	//TAMPILKAN SewaAlatBeratPost
        SewaAlatBeratPostLink.style.visibility = 'visible';
	
        SewaBackhoeLoaderPostLink.style.visibility = 'visible';
        pageNameJasaKonsAlatKonstruksiPost.textContent = urlMappingSewaBackhoeLoaderFromSub2MoneyMaster[cleanUrlJasaKonsAlatKonstruksiPost];
    
		    generateBreadcrumbForMapping(
        urlMappingSewaBackhoeLoaderFromSub2MoneyMaster,
        cleanUrlJasaKonsAlatKonstruksiPost,
        [
            { name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Jasa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-alat-konstruksi.html' },
            { name: 'Sewa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/sewa-alat-konstruksi.html' },
            { name: 'Sewa Alat Berat', url: 'https://www.betonjayareadymix.com/p/sewa-alat-berat.html' },
            { name: 'Sewa Backhoe Loader', url: 'https://www.betonjayareadymix.com/p/sewa-backhoe-loader.html' }
        ],
        'SEWA_RENTAL'
    );
}

if (urlMappingSewaConcretePaverFromSub2MoneyMaster[cleanUrlJasaKonsAlatKonstruksiPost]) {
        restoreCondition('JasaKonsAlatKonstruksiPost');
        restoreCondition('SewaAlatBeratPost');
        restoreCondition('SewaConcretePaverPost');
	       
     
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
    
        JasaKonstruksiAlatKonstruksiPostLink.style.visibility = 'visible';
        JasaAlatKonstruksiPostLink.style.visibility = 'visible';
        SewaAlatKonstruksiPostLink.style.visibility = 'visible';
	//TAMPILKAN SewaAlatBeratPost
        SewaAlatBeratPostLink.style.visibility = 'visible';
	
        SewaConcretePaverPostLink.style.visibility = 'visible';
        pageNameJasaKonsAlatKonstruksiPost.textContent = urlMappingSewaConcretePaverFromSub2MoneyMaster[cleanUrlJasaKonsAlatKonstruksiPost];

		   generateBreadcrumbForMapping(
        urlMappingSewaConcretePaverFromSub2MoneyMaster,
        cleanUrlJasaKonsAlatKonstruksiPost,
        [
            { name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Jasa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-alat-konstruksi.html' },
            { name: 'Sewa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/sewa-alat-konstruksi.html' },
            { name: 'Sewa Alat Berat', url: 'https://www.betonjayareadymix.com/p/sewa-alat-berat.html' },
            { name: 'Sewa Concrete Paver', url: 'https://www.betonjayareadymix.com/p/sewa-concrete-paver.html' }
        ],
        'SEWA_RENTAL'
    );

}

if (urlMappingSewaTrencherFromSub2MoneyMaster[cleanUrlJasaKonsAlatKonstruksiPost]) {
        restoreCondition('JasaKonsAlatKonstruksiPost');
        restoreCondition('SewaAlatBeratPost');
        restoreCondition('SewaTrencherPost');
	       
     
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
    
        JasaKonstruksiAlatKonstruksiPostLink.style.visibility = 'visible';
        JasaAlatKonstruksiPostLink.style.visibility = 'visible';
        SewaAlatKonstruksiPostLink.style.visibility = 'visible';
	//TAMPILKAN SewaAlatBeratPost
        SewaAlatBeratPostLink.style.visibility = 'visible';
	
        SewaTrencherPostLink.style.visibility = 'visible';
        pageNameJasaKonsAlatKonstruksiPost.textContent = urlMappingSewaTrencherFromSub2MoneyMaster[cleanUrlJasaKonsAlatKonstruksiPost];

		    generateBreadcrumbForMapping(
        urlMappingSewaTrencherFromSub2MoneyMaster,
        cleanUrlJasaKonsAlatKonstruksiPost,
        [
            { name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Jasa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-alat-konstruksi.html' },
            { name: 'Sewa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/sewa-alat-konstruksi.html' },
            { name: 'Sewa Alat Berat', url: 'https://www.betonjayareadymix.com/p/sewa-alat-berat.html' },
            { name: 'Sewa Trencher', url: 'https://www.betonjayareadymix.com/p/sewa-trencher.html' }
        ],
        'SEWA_RENTAL'
    );
}

if (urlMappingSewaBabyRollerFromSub2MoneyMaster[cleanUrlJasaKonsAlatKonstruksiPost]) {
        restoreCondition('JasaKonsAlatKonstruksiPost');
        restoreCondition('SewaAlatBeratPost');
        restoreCondition('SewaBabyRollerPost');
	       
     
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
    
        JasaKonstruksiAlatKonstruksiPostLink.style.visibility = 'visible';
        JasaAlatKonstruksiPostLink.style.visibility = 'visible';
        SewaAlatKonstruksiPostLink.style.visibility = 'visible';
	//TAMPILKAN SewaAlatBeratPost
        SewaAlatBeratPostLink.style.visibility = 'visible';
	
        SewaBabyRollerPostLink.style.visibility = 'visible';
        pageNameJasaKonsAlatKonstruksiPost.textContent = urlMappingSewaBabyRollerFromSub2MoneyMaster[cleanUrlJasaKonsAlatKonstruksiPost];

		    generateBreadcrumbForMapping(
        urlMappingSewaBabyRollerFromSub2MoneyMaster,
        cleanUrlJasaKonsAlatKonstruksiPost,
        [
            { name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Jasa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-alat-konstruksi.html' },
            { name: 'Sewa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/sewa-alat-konstruksi.html' },
            { name: 'Sewa Alat Berat', url: 'https://www.betonjayareadymix.com/p/sewa-alat-berat.html' },
            { name: 'Sewa Baby Roller', url: 'https://www.betonjayareadymix.com/p/sewa-baby-roller.html' }
        ],
        'SEWA_RENTAL'
    );

}

if (urlMappingSewaAlatPancangFromSub2MoneyMaster[cleanUrlJasaKonsAlatKonstruksiPost]) {
        restoreCondition('JasaKonsAlatKonstruksiPost');
        restoreCondition('SewaAlatBeratPost');
        restoreCondition('SewaAlatPancangPost');
	       
     
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
    
        JasaKonstruksiAlatKonstruksiPostLink.style.visibility = 'visible';
        JasaAlatKonstruksiPostLink.style.visibility = 'visible';
        SewaAlatKonstruksiPostLink.style.visibility = 'visible';
	//TAMPILKAN SewaAlatBeratPost
        SewaAlatBeratPostLink.style.visibility = 'visible';
	
        SewaAlatPancangPostLink.style.visibility = 'visible';
        pageNameJasaKonsAlatKonstruksiPost.textContent = urlMappingSewaAlatPancangFromSub2MoneyMaster[cleanUrlJasaKonsAlatKonstruksiPost];
    
		    generateBreadcrumbForMapping(
        urlMappingSewaAlatPancangFromSub2MoneyMaster,
        cleanUrlJasaKonsAlatKonstruksiPost,
        [
            { name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Jasa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-alat-konstruksi.html' },
            { name: 'Sewa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/sewa-alat-konstruksi.html' },
            { name: 'Sewa Alat Berat', url: 'https://www.betonjayareadymix.com/p/sewa-alat-berat.html' },
            { name: 'Sewa Alat Pancang', url: 'https://www.betonjayareadymix.com/p/sewa-alat-pancang.html' }
        ],
        'SEWA_RENTAL'
    );
}

if (urlMappingSewaMotorGraderFromSub2MoneyMaster[cleanUrlJasaKonsAlatKonstruksiPost]) {
        restoreCondition('JasaKonsAlatKonstruksiPost');
        restoreCondition('SewaAlatBeratPost');
        restoreCondition('SewaMotorGraderPost');
	       
     
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
    
        JasaKonstruksiAlatKonstruksiPostLink.style.visibility = 'visible';
        JasaAlatKonstruksiPostLink.style.visibility = 'visible';
        SewaAlatKonstruksiPostLink.style.visibility = 'visible';
	//TAMPILKAN SewaAlatBeratPost
        SewaAlatBeratPostLink.style.visibility = 'visible';
	
        SewaMotorGraderPostLink.style.visibility = 'visible';
        pageNameJasaKonsAlatKonstruksiPost.textContent = urlMappingSewaMotorGraderFromSub2MoneyMaster[cleanUrlJasaKonsAlatKonstruksiPost];
    
		   generateBreadcrumbForMapping(
        urlMappingSewaMotorGraderFromSub2MoneyMaster,
        cleanUrlJasaKonsAlatKonstruksiPost,
        [
            { name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Jasa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-alat-konstruksi.html' },
            { name: 'Sewa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/sewa-alat-konstruksi.html' },
            { name: 'Sewa Alat Berat', url: 'https://www.betonjayareadymix.com/p/sewa-alat-berat.html' },
            { name: 'Sewa Motor Grader', url: 'https://www.betonjayareadymix.com/p/sewa-motor-grader.html' }
        ],
        'SEWA_RENTAL'
    );
}

//AKHIR SUB PAGE SEWA ALAT BERAT
if (urlMappingSewaAlatKonstruksiRinganFromSub2MoneyMaster[cleanUrlJasaKonsAlatKonstruksiPost]) {
        restoreCondition('JasaKonsAlatKonstruksiPost');
       // restoreCondition('JasaAlatKonstruksiPost');
        restoreCondition('SewaAlatKonstruksiRinganPost');
     
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
    
        JasaKonstruksiAlatKonstruksiPostLink.style.visibility = 'visible';
        JasaAlatKonstruksiPostLink.style.visibility = 'visible';
        SewaAlatKonstruksiPostLink.style.visibility = 'visible';
	//TAMPILKAN SewaAlatBeratPost
        SewaAlatKonstruksiRinganPostLink.style.visibility = 'visible';
        pageNameJasaKonsAlatKonstruksiPost.textContent = urlMappingSewaAlatKonstruksiRinganFromSub2MoneyMaster[cleanUrlJasaKonsAlatKonstruksiPost];
    
		    generateBreadcrumbForMapping(
        urlMappingSewaAlatKonstruksiRinganFromSub2MoneyMaster,
        cleanUrlJasaKonsAlatKonstruksiPost,
        [
            { name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Jasa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-alat-konstruksi.html' },
            { name: 'Sewa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/sewa-alat-konstruksi.html' },
            { name: 'Sewa Alat Konstruksi Ringan', url: 'https://www.betonjayareadymix.com/p/sewa-alat-konstruksi-ringan.html' }
        ],
        'SEWA_RENTAL'
    );

}
   
