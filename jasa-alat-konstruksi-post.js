// ============================================================
// JASA ALAT KONSTRUKSI POST — v2.2.0 MIGRATED
// Pola: Early Exit v2.0.0 + Fix v2.1.0 + Log + Flag
// Base: file asli v1.0 + migrasi ke pola konsisten
// ============================================================

// ────────────────────────────────────────────────────────────
// [BAGIAN 1] SEMUA DEFINISI MAPPING (TIDAK BERUBAH)
// ────────────────────────────────────────────────────────────

const urlMappingJasaInstalasiListrikFromMoneyMasterMoneyChild = {
  "https://www.betonjayareadymix.com/2019/03/jasa-instalasi-listrik-terdekat.html": "Jasa Instalasi Listrik Terdekat",
  "https://www.betonjayareadymix.com/2019/03/jasa-instalasi-listrik-jakarta.html": "Jasa Instalasi Listrik Jakarta",
  "https://www.betonjayareadymix.com/2019/03/jasa-instalasi-listrik-bogor.html": "Jasa Instalasi Listrik Bogor",
  "https://www.betonjayareadymix.com/2019/03/jasa-instalasi-listrik-depok.html": "Jasa Instalasi Listrik Depok",
  "https://www.betonjayareadymix.com/2019/03/jasa-instalasi-listrik-tangerang.html": "Jasa Instalasi Listrik Tangerang",
  "https://www.betonjayareadymix.com/2019/03/jasa-instalasi-listrik-bekasi.html": "Jasa Instalasi Listrik Bekasi",
  "https://www.betonjayareadymix.com/2019/03/jasa-instalasi-listrik-karawang.html": "Jasa Instalasi Listrik Karawang"
};

const urlMappingJasaKonsultanFromMoneyMasterMoneyChild = {
  "https://www.betonjayareadymix.com/2018/09/jasa-konsultan-terdekat.html": "Jasa Konsultan Terdekat",
  "https://www.betonjayareadymix.com/2018/09/jasa-konsultan-jakarta.html": "Jasa Konsultan Jakarta",
  "https://www.betonjayareadymix.com/2018/09/jasa-konsultan-bogor.html": "Jasa Konsultan Bogor",
  "https://www.betonjayareadymix.com/2018/09/jasa-konsultan-depok.html": "Jasa Konsultan Depok",
  "https://www.betonjayareadymix.com/2018/09/jasa-konsultan-tangerang.html": "Jasa Konsultan Tangerang",
  "https://www.betonjayareadymix.com/2018/09/jasa-konsultan-bekasi.html": "Jasa Konsultan Bekasi",
  "https://www.betonjayareadymix.com/2018/09/jasa-konsultan-karawang.html": "Jasa Konsultan Karawang"
};

const urlMappingHargaJasaKonsultanFromMoneyPageMoneyChild = {
  "https://www.betonjayareadymix.com/2018/09/harga-jasa-konsultan-terdekat.html": "Harga Jasa Konsultan Terdekat",
  "https://www.betonjayareadymix.com/2018/09/harga-jasa-konsultan-jakarta.html": "Harga Jasa Konsultan Jakarta",
  "https://www.betonjayareadymix.com/2018/09/harga-jasa-konsultan-bogor.html": "Harga Jasa Konsultan Bogor",
  "https://www.betonjayareadymix.com/2018/09/harga-jasa-konsultan-depok.html": "Harga Jasa Konsultan Depok",
  "https://www.betonjayareadymix.com/2018/09/harga-jasa-konsultan-tangerang.html": "Harga Jasa Konsultan Tangerang",
  "https://www.betonjayareadymix.com/2018/09/harga-jasa-konsultan-bekasi.html": "Harga Jasa Konsultan Bekasi",
  "https://www.betonjayareadymix.com/2018/09/harga-jasa-konsultan-karawang.html": "Harga Jasa Konsultan Karawang"
};

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

const urlMappingJasaAlatKonstruksiBridgeFromMoneyPage1MoneyPage2 = {
  "https://www.betonjayareadymix.com/2019/06/jasa-alat-konstruksi-operator-bersertifikat.html": "Jasa Alat Konstruksi Operator Bersertifikat",
  "https://www.betonjayareadymix.com/2019/06/jasa-alat-konstruksi-metode-lembur.html": "Jasa Alat Konstruksi Metode Lembur",
  "https://www.betonjayareadymix.com/2019/06/jasa-alat-konstruksi-termasuk-bahan-bakar.html": "Jasa Alat Konstruksi Termasuk Bahan Bakar"
};

const urlMappingJasaAlatKonstruksiBridgeFromMoneyPage1Variant = {
  "https://www.betonjayareadymix.com/2019/06/jasa-alat-konstruksi-operator-sio-alat-berat-besar.html": "Jasa Alat Konstruksi Operator SIO Alat Berat Besar",
  "https://www.betonjayareadymix.com/2019/06/jasa-alat-konstruksi-lembur-shift-malam.html": "Jasa Alat Konstruksi Lembur Shift Malam",
  "https://www.betonjayareadymix.com/2019/06/jasa-alat-konstruksi-termasuk-bbm-proyek-panjang.html": "Jasa Alat Konstruksi Termasuk BBM Proyek Panjang"
};

const urlMappingSewaPompaDewateringFromMoneyMaster1MoneyPage = {
  "https://www.betonjayareadymix.com/2019/02/sewa-pompa-dewatering-proyek.html": "Sewa Pompa Dewatering Proyek",
  "https://www.betonjayareadymix.com/2019/03/sewa-pompa-dewatering-basement.html": "Sewa Pompa Dewatering Basement",
  "https://www.betonjayareadymix.com/2019/03/sewa-pompa-dewatering-tambang.html": "Sewa Pompa Dewatering Tambang"
};

const urlMappingSewaPompaAirFromMoneyMaster1MoneyPage = {
  "https://www.betonjayareadymix.com/2019/03/sewa-mesin-pompa-air.html": "Sewa Mesin Pompa Air",
  "https://www.betonjayareadymix.com/2019/03/sewa-pompa-air-diesel.html": "Sewa Pompa Air Diesel",
  "https://www.betonjayareadymix.com/2019/03/sewa-pompa-air-kapasitas-besar.html": "Sewa Pompa Air Kapasitas Besar",
  "https://www.betonjayareadymix.com/2019/03/sewa-pompa-air-banjir.html": "Sewa Pompa Air Banjir",
  "https://www.betonjayareadymix.com/2019/03/sewa-pompa-air-irigasi.html": "Sewa Pompa Air Irigasi"
};

const urlMappingSewaPompaLumpurFromMoneyMaster1MoneyPage = {
  "https://www.betonjayareadymix.com/2019/03/sewa-pompa-lumpur-diesel.html": "Sewa Pompa Lumpur Diesel",
  "https://www.betonjayareadymix.com/2019/03/sewa-pompa-sedot-lumpur.html": "Sewa Pompa Sedot Lumpur",
  "https://www.betonjayareadymix.com/2019/03/sewa-pompa-lumpur-proyek.html": "Sewa Pompa Lumpur Proyek",
  "https://www.betonjayareadymix.com/2019/03/sewa-pompa-lumpur-tambang.html": "Sewa Pompa Lumpur Tambang"
};

const urlMappingSewaBekistingFromMoneyMaster1MoneyPage = {
  "https://www.betonjayareadymix.com/2019/03/sewa-bekisting-cor-jalan.html": "Sewa Bekisting Cor Jalan",
  "https://www.betonjayareadymix.com/2019/03/sewa-bekisting-kolom-balok.html": "Sewa Bekisting Kolom Balok",
  "https://www.betonjayareadymix.com/2019/03/sewa-bekisting-plat-lantai.html": "Sewa Bekisting Plat Lantai",
  "https://www.betonjayareadymix.com/2019/03/sewa-bekisting-per-meter.html": "Sewa Bekisting Per Meter"
};

const urlMappingSewaBekistingFromMoneyMasterMoneyChild = {};

const urlMappingSewaScaffoldingFromMoneyMasterMoneyPage = {
  "https://www.betonjayareadymix.com/2019/03/harga-sewa-scaffolding.html": "Harga Sewa Scaffolding"
};

const urlMappingSewaScaffoldingFromMoneyMasterMoneyChild = {
  "https://www.betonjayareadymix.com/2019/03/sewa-scaffolding-terdekat.html": "Sewa Scaffolding Terdekat",
  "https://www.betonjayareadymix.com/2019/03/sewa-scaffolding-jakarta.html": "Sewa Scaffolding Jakarta"
};

const urlMappingSewaPencahayaanProyekFromMoneyMaster1MoneyMaster2 = {
  "https://www.betonjayareadymix.com/2019/02/sewa-pencahayaan-utilitas.html": "Sewa Pencahayaan Utilitas",
  "https://www.betonjayareadymix.com/2019/03/sewa-tower-lamp.html": "Sewa Tower Lamp",
  "https://www.betonjayareadymix.com/2019/03/sewa-lampu-proyek.html": "Sewa Lampu Proyek",
  "https://www.betonjayareadymix.com/2019/03/sewa-lampu-sorot.html": "Sewa Lampu Sorot",
  "https://www.betonjayareadymix.com/2019/03/sewa-lampu-tembak.html": "Sewa Lampu Tembak",
  "https://www.betonjayareadymix.com/2019/03/sewa-panel-listrik.html": "Sewa Panel Listrik"
};

const urlMappingSewaAlatSurveyFromMoneyMaster1MoneyMaster2 = {
  "https://www.betonjayareadymix.com/2019/03/sewa-total-station.html": "Sewa Total Station",
  "https://www.betonjayareadymix.com/2019/03/sewa-waterpass.html": "Sewa Waterpass",
  "https://www.betonjayareadymix.com/2019/03/sewa-theodolite.html": "Sewa Theodolite",
  "https://www.betonjayareadymix.com/2019/03/sewa-laser-level.html": "Sewa Laser Level"
};

const urlMappingSewaAlatSurveyFromMoneyMaster1MoneyPage = {
  "https://www.betonjayareadymix.com/2019/02/sewa-alat-survey-pengukuran.html": "Sewa Alat Survey Pengukuran"
};

const urlMappingSewaAlatBorFromMoneyMasterMoneyMaster1 = {
  "https://www.betonjayareadymix.com/2019/02/sewa-alat-bor-ground-work.html": "Sewa Alat Bor Ground Work",
  "https://www.betonjayareadymix.com/2019/03/sewa-alat-bor-tanah.html": "Sewa Alat Bor Tanah",
  "https://www.betonjayareadymix.com/2019/03/sewa-alat-bor-sumur.html": "Sewa Alat Bor Sumur",
  "https://www.betonjayareadymix.com/2019/03/sewa-alst-bor-beton.html": "Sewa Alat Bor Beton",
  "https://www.betonjayareadymix.com/2019/03/sewa-alst-bor-pancang.html": "Sewa Alat Bor Pancang"
};

const urlMappingSewaTangkiAirFromMoneyMasterMoneyMaster1 = {
  "https://www.betonjayareadymix.com/2019/03/sewa-bak-air-proyek.html": "Sewa Bak Air Proyek",
  "https://www.betonjayareadymix.com/2019/03/sewa-tandon-air.html": "Sewa Tandon Air",
  "https://www.betonjayareadymix.com/2019/03/sewa-tangki-air-proyek.html": "Sewa Tangki Air Proyek",
  "https://www.betonjayareadymix.com/2019/03/sewa-tangki-air-industri.html": "Sewa Tangki Air Industri"
};

const urlMappingSewaAksesKeamananFromMoneyMaster1MoneyMaster2 = {
  "https://www.betonjayareadymix.com/2019/02/sewa-akses-keamanan-proyek.html": "Sewa Akses Keamanan Proyek",
  "https://www.betonjayareadymix.com/2019/03/sewa-tangga-proyek.html": "Sewa Tangga Proyek",
  "https://www.betonjayareadymix.com/2019/03/sewa-mobile-scaffold.html": "Sewa Mobile Scaffold",
  "https://www.betonjayareadymix.com/2019/03/sewa-safety-barrier.html": "Sewa Safety Barrier",
  "https://www.betonjayareadymix.com/2019/03/sewa-traffic-cone.html": "Sewa Traffic Cone",
  "https://www.betonjayareadymix.com/2019/03/sewa-jaring-pengaman.html": "Sewa Jaring Pengaman",
  "https://www.betonjayareadymix.com/2019/03/sewa-barrier-proyek.html": "Sewa Barrier Proyek",
  "https://www.betonjayareadymix.com/2019/03/sewa-pagar-proyek.html": "Sewa Pagar Proyek",
  "https://www.betonjayareadymix.com/2019/03/sewa-gerbang-proyek.html": "Sewa Gerbang Proyek",
  "https://www.betonjayareadymix.com/2019/03/sewa-pos-keamanan-proyek.html": "Sewa Pos Keamanan Proyek"
};

const urlMappingSewaAksesKeamananFromMoneyMaster1MoneyPage = {
  "https://www.betonjayareadymix.com/2019/02/sewa-akses-keamanan-proyek.html": "Sewa Akses Keamanan Proyek"
};

const urlMappingSewaSelangProyekFromMoneyMasterMoneyMaster1 = {
  "https://www.betonjayareadymix.com/2019/03/sewa-selang-air.html": "Sewa Selang Air",
  "https://www.betonjayareadymix.com/2019/03/sewa-selang-pompa.html": "Sewa Selang Pompa",
  "https://www.betonjayareadymix.com/2019/03/sewa-selang-lumpur.html": "Sewa Selang Lumpur",
  "https://www.betonjayareadymix.com/2019/03/sewa-selang-industrial.html": "Sewa Selang Industrial"
};

const urlMappingSewaPipaProyekFromMoneyMasterMoneyMaster1 = {
  "https://www.betonjayareadymix.com/2019/03/sewa-pipa-air.html": "Sewa Pipa Air",
  "https://www.betonjayareadymix.com/2019/03/sewa-pipa-dewatering.html": "Sewa Pipa Dewatering",
  "https://www.betonjayareadymix.com/2019/03/sewa-pipa-hdpe.html": "Sewa Pipa HDPE",
  "https://www.betonjayareadymix.com/2019/03/sewa-pipa-industrial.html": "Sewa Pipa Industrial"
};

const urlMappingSewaAlatProyekFromMoneyMasterMoneyPage = {};

const urlMappingSewaAlatProyekFromMoneyMasterMoneyChild = {
  "https://www.betonjayareadymix.com/2019/02/sewa-alat-proyek-tangerang.html": "Sewa Alat Proyek Tangerang",
  "https://www.betonjayareadymix.com/2019/02/sewa-alat-proyek-depok.html": "Sewa Alat Proyek Depok",
  "https://www.betonjayareadymix.com/2019/02/sewa-alat-proyek-jakarta.html": "Sewa Alat Proyek Jakarta",
  "https://www.betonjayareadymix.com/2019/02/sewa-alat-proyek-bekasi.html": "Sewa Alat Proyek Bekasi",
  "https://www.betonjayareadymix.com/2019/02/sewa-alat-proyek-bogor.html": "Sewa Alat Proyek Bogor",
  "https://www.betonjayareadymix.com/2019/02/sewa-alat-proyek-terdekat.html": "Sewa Alat Proyek Terdekat",
  "https://www.betonjayareadymix.com/2019/02/sewa-alat-proyek-karawang.html": "Sewa Alat Proyek Karawang"
};

const urlMappingSewaPompaDewateringFromMoneyPageMoneyChild = {
  "https://www.betonjayareadymix.com/2019/03/sewa-pompa-dewatering-jakarta.html": "Sewa Pompa Dewatering Jakarta"
};

const urlMappingSewaPompaDewateringFromMoneyChildVariant = {
  "https://www.betonjayareadymix.com/2019/03/spesifikasi-pompa-dewatering-jakarta.html": "Spesifikasi Pompa Dewatering Jakarta",
  "https://www.betonjayareadymix.com/2019/03/perbandingan-harga-pompa-dewatering-jakarta.html": "Perbandingan Harga Pompa Dewatering Jakarta"
};

const urlMappingSewaPompaAirDieselFromMoneyMaster1MoneyPage = {
  "https://www.betonjayareadymix.com/2019/03/diskon-sewa-pompa-diesel.html": "Diskon Sewa Pompa Diesel",
  "https://www.betonjayareadymix.com/2019/03/daftar-harga-pompa-diesel.html": "Daftar Harga Pompa Diesel"
};

const urlMappingSewaPompaAirDieselFromMoneyMaster1MoneyChild = {
  "https://www.betonjayareadymix.com/2019/03/sewa-pompa-air-diesel-jakarta.html": "Sewa Pompa Air Diesel Jakarta",
  "https://www.betonjayareadymix.com/2019/03/sewa-pompa-air-diesel-bekasi.html": "Sewa Pompa Air Diesel Bekasi",
  "https://www.betonjayareadymix.com/2019/03/sewa-pompa-air-diesel-tangerang.html": "Sewa Pompa Air Diesel Tangerang"
};

const urlMappingSewaPompaAirDieselFromMoneyMaster1Variant = {
  "https://www.betonjayareadymix.com/2019/03/spesifikasi-pompa-air-diesel.html": "Spesifikasi Pompa Air Diesel"
};

const urlMappingSewaPompaAirFromMoneyMasterMoneyChild = {
  "https://www.betonjayareadymix.com/2019/03/sewa-pompa-air-terdekat.html": "Sewa Pompa Air Terdekat",
  "https://www.betonjayareadymix.com/2019/03/sewa-pompa-air-bogor.html": "Sewa Pompa Air Bogor",
  "https://www.betonjayareadymix.com/2019/03/sewa-pompa-air-jakarta.html": "Sewa Pompa Air Jakarta",
  "https://www.betonjayareadymix.com/2019/03/sewa-pompa-air-depok.html": "Sewa Pompa Air Depok",
  "https://www.betonjayareadymix.com/2019/03/sewa-pompa-air-tangerang.html": "Sewa Pompa Air Tangerang",
  "https://www.betonjayareadymix.com/2019/03/sewa-pompa-air-bekasi.html": "Sewa Pompa Air Bekasi",
  "https://www.betonjayareadymix.com/2019/03/sewa-pompa-air-karawang.html": "Sewa Pompa Air Karawang",
  "https://www.betonjayareadymix.com/2019/03/sewa-pompa-air-bandung.html": "Sewa Pompa Air Bandung",
  "https://www.betonjayareadymix.com/2019/03/sewa-pompa-air-surabaya.html": "Sewa Pompa Air Surabaya",
  "https://www.betonjayareadymix.com/2019/03/sewa-pompa-air-semarang.html": "Sewa Pompa Air Semarang",
  "https://www.betonjayareadymix.com/2019/03/sewa-pompa-air-jogja.html": "Sewa Pompa Air Jogja",
  "https://www.betonjayareadymix.com/2019/03/sewa-pompa-air-solo.html": "Sewa Pompa Air Solo",
  "https://www.betonjayareadymix.com/2019/03/sewa-pompa-air-sidoarjo.html": "Sewa Pompa Air Sidoarjo",
  "https://www.betonjayareadymix.com/2019/03/sewa-pompa-air-bali.html": "Sewa Pompa Air Bali",
  "https://www.betonjayareadymix.com/2019/03/sewa-pompa-air-batam.html": "Sewa Pompa Air Batam",
  "https://www.betonjayareadymix.com/2019/03/sewa-pompa-air-medan.html": "Sewa Pompa Air Medan"
};

const urlMappingSewaMesinPompaAirFromMoneyChildVariant = {
  "https://www.betonjayareadymix.com/2019/03/spesifikasi-pompa-air.html": "Spesifikasi Pompa Air",
  "https://www.betonjayareadymix.com/2019/03/daftar-harga-pompa-air.html": "Daftar Harga Pompa Air"
};

const urlMappingSewaPompaLumpurFromMoneyMasterMoneyChild = {
  "https://www.betonjayareadymix.com/2019/03/sewa-pompa-lumpur-jakarta.html": "Sewa Pompa Lumpur Jakarta",
  "https://www.betonjayareadymix.com/2019/03/sewa-pompa-lumpur-bogor.html": "Sewa Pompa Lumpur Bogor",
  "https://www.betonjayareadymix.com/2019/03/sewa-pompa-lumpur-tangerang.html": "Sewa Pompa Lumpur Tangerang",
  "https://www.betonjayareadymix.com/2019/03/sewa-pompa-lumpur-bekasi.html": "Sewa Pompa Lumpur Bekasi",
  "https://www.betonjayareadymix.com/2019/03/sewa-pompa-lumpur-karawang.html": "Sewa Pompa Lumpur Karawang",
  "https://www.betonjayareadymix.com/2019/03/sewa-pompa-lumpur-depok.html": "Sewa Pompa Lumpur Depok",
  "https://www.betonjayareadymix.com/2019/03/sewa-pompa-lumpur-terdekat.html": "Sewa Pompa Lumpur Terdekat",
  "https://www.betonjayareadymix.com/2019/03/sewa-pompa-lumpur-surabaya.html": "Sewa Pompa Lumpur Surabaya",
  "https://www.betonjayareadymix.com/2019/03/sewa-pompa-lumpur-bandung.html": "Sewa Pompa Lumpur Bandung"
};

const urlMappingSewaPompaLumpurFromMoneyChildVariant = {
  "https://www.betonjayareadymix.com/2019/03/spesifikasi-pompa-lumpur.html": "Spesifikasi Pompa Lumpur",
  "https://www.betonjayareadymix.com/2019/03/perbandingan-pompa-lumpur-vs-pompa-air-biasa.html": "Perbandingan Pompa Lumpur VS Pompa Air Biasa"
};

const urlMappingSewaPompaSedotLumpurFromMoneyMaster1MoneyChild = {
  "https://www.betonjayareadymix.com/2019/03/sewa-pompa-sedot-lumpur-jakarta.html": "Sewa Pompa Sedot Lumpur Jakarta"
};

const urlMappingSewaPompaSedotLumpurFromMoneyChildVariant = {
  "https://www.betonjayareadymix.com/2019/03/spesifikasi-pompa-sedot-lumpur.html": "Spesifikasi Pompa Sedot Lumpur",
  "https://www.betonjayareadymix.com/2019/03/perbandingan-pompa-sedot-lumpur-vs-biasa.html": "Perbandingan Pompa Sedot Lumpur VS Biasa"
};

const urlMappingSewaPompaBanjirFromMoneyMaster1MoneyChild = {
  "https://www.betonjayareadymix.com/2019/03/sewa-pompa-banjir-jakarta.html": "Sewa Pompa Banjir Jakarta"
};

const urlMappingSewaPompaBanjirFromMoneyChildVariant = {
  "https://www.betonjayareadymix.com/2019/03/spesifikasi-pompa-banjir.html": "Spesifikasi Pompa Banjir",
  "https://www.betonjayareadymix.com/2019/03/perbandingan-pompa-banjir-diesel-vs-listrik.html": "Perbandingan Pompa Banjir VS Listrik"
};

const urlMappingSewaPompaKapasitasBesarFromMoneyMaster1MoneyChild = {
  "https://www.betonjayareadymix.com/2019/03/sewa-pompa-kapasitas-besar-jakarta.html": "Sewa Pompa Kapasitas Besar Jakarta"
};

const urlMappingSewaPompaKapasitasBesarFromMoneyChildVariant = {
  "https://www.betonjayareadymix.com/2019/03/spesifikasi-pompa-kapasitas-besar.html": "Spesifikasi Pompa Kapasitas Besar",
  "https://www.betonjayareadymix.com/2019/03/perbandingan-pompa-6-inch-vs-8-inch.html": "Perbandingan Pompa 6 Inch VS 8 Inch"
};

const urlMappingSewaBakAirProyekFromMoneyMaster1MoneyChild = {
  "https://www.betonjayareadymix.com/2019/03/sewa-bak-air-proyek-jakarta.html": "Sewa Bak Air Proyek Jakarta"
};

const urlMappingSewaBakAirProyekFromMoneyChildVariant = {
  "https://www.betonjayareadymix.com/2019/03/spesifikasi-bak-air-proyek.html": "Spesifikasi Bak Air Proyek",
  "https://www.betonjayareadymix.com/2019/03/perbandingan-bak-air-plastik-vs-fiber.html": "Perbandingan Bak Air Plastik VS Fiber"
};

const urlMappingSewaTangkiAirFromMoneyMasterMoneyChild = {
  "https://www.betonjayareadymix.com/2019/03/sewa-tangki-air-jakarta.html": "Sewa Tangki Air Jakarta"
};

const urlMappingSewaTangkiAirFromMoneyChildVariant = {
  "https://www.betonjayareadymix.com/2019/03/spesifikasi-tangki-air.html": "Spesifikasi Tangki Air",
  "https://www.betonjayareadymix.com/2019/03/perbandingan-tangki-air-plastik-vs-stainless.html": "Perbandingan Tangki Air Plastik VS Stainless"
};

const urlMappingSewaPipaProyekFromMoneyMasterMoneyChild = {
  "https://www.betonjayareadymix.com/2019/03/sewa-pipa-proyek-jakarta.html": "Sewa Pipa Proyek Jakarta"
};

const urlMappingSewaPipaProyekFromMoneyChildVariant = {
  "https://www.betonjayareadymix.com/2019/03/spesifikasi-pipa-proyek.html": "Spesifikasi Pipa Proyek",
  "https://www.betonjayareadymix.com/2019/03/perbandingan-pipa-hdpe-vs-pvc.html": "Perbandingan Pipa HDPE VS PVC"
};

const urlMappingSewaSelangProyekFromMoneyMasterMoneyChild = {
  "https://www.betonjayareadymix.com/2019/03/sewa-selang-proyek-jakarta.html": "Sewa Selang Proyek Jakarta"
};

const urlMappingSewaSelangProyekFromMoneyChildVariant = {
  "https://www.betonjayareadymix.com/2019/03/spesifikasi-selang-proyek.html": "Spesifikasi Selang Proyek",
  "https://www.betonjayareadymix.com/2019/03/perbandingan-selang-karet-vs-pvc.html": "Perbandingan Selang Karet VS PVC"
};

const urlMappingSewaTowerLampFromMoneyMaster1MoneyChild = {
  "https://www.betonjayareadymix.com/2019/03/sewa-tower-lamp-terdekat.html": "Sewa Tower Lamp Terdekat",
  "https://www.betonjayareadymix.com/2019/03/sewa-tower-lamp-jakarta.html": "Sewa Tower Lamp Jakarta",
  "https://www.betonjayareadymix.com/2019/03/sewa-tower-lamp-bogor.html": "Sewa Tower Lamp Bogor",
  "https://www.betonjayareadymix.com/2019/03/sewa-tower-lamp-depok.html": "Sewa Tower Lamp Depok",
  "https://www.betonjayareadymix.com/2019/03/sewa-tower-lamp-tangerang.html": "Sewa Tower Lamp Tangerang",
  "https://www.betonjayareadymix.com/2019/03/sewa-tower-lamp-bekasi.html": "Sewa Tower Lamp Bekasi",
  "https://www.betonjayareadymix.com/2019/03/sewa-tower-lamp-karawang.html": "Sewa Tower Lamp Karawang",
  "https://www.betonjayareadymix.com/2019/03/sewa-tower-lamp-balikpapan.html": "Sewa Tower Lamp Balikpapan",
  "https://www.betonjayareadymix.com/2019/03/sewa-tower-lamp-palembang.html": "Sewa Tower Lamp Palembang"
};

const urlMappingSewaLampuSorotFromMoneyMaster1MoneyChild = {
  "https://www.betonjayareadymix.com/2019/03/sewa-lampu-sorot-terdekat.html": "Sewa Lampu Sorot Terdekat",
  "https://www.betonjayareadymix.com/2019/03/sewa-lampu-sorot-jakarta.html": "Sewa Lampu Sorot Jakarta",
  "https://www.betonjayareadymix.com/2019/03/sewa-lampu-sorot-bogor.html": "Sewa Lampu Sorot Bogor",
  "https://www.betonjayareadymix.com/2019/03/sewa-lampu-sorot-depok.html": "Sewa Lampu Sorot Depok",
  "https://www.betonjayareadymix.com/2019/03/sewa-lampu-sorot-tangerang.html": "Sewa Lampu Sorot Tangerang",
  "https://www.betonjayareadymix.com/2019/03/sewa-lampu-sorot-bekasi.html": "Sewa Lampu Sorot Bekasi",
  "https://www.betonjayareadymix.com/2019/03/sewa-lampu-sorot-karawang.html": "Sewa Lampu Sorot Karawang"
};

const urlMappingSewaLampuTembakFromMoneyMaster1MoneyChild = {
  "https://www.betonjayareadymix.com/2019/03/sewa-lampu-tembak-terdekat.html": "Sewa Lampu Tembak Terdekat",
  "https://www.betonjayareadymix.com/2019/03/sewa-lampu-tembak-jakarta.html": "Sewa Lampu Tembak Jakarta",
  "https://www.betonjayareadymix.com/2019/03/sewa-lampu-tembak-bogor.html": "Sewa Lampu Tembak Bogor",
  "https://www.betonjayareadymix.com/2019/03/sewa-lampu-tembak-depok.html": "Sewa Lampu Tembak Depok",
  "https://www.betonjayareadymix.com/2019/03/sewa-lampu-tembak-tangerang.html": "Sewa Lampu Tembak Tangerang",
  "https://www.betonjayareadymix.com/2019/03/sewa-lampu-tembak-bekasi.html": "Sewa Lampu Tembak Bekasi",
  "https://www.betonjayareadymix.com/2019/03/sewa-lampu-tembak-karawang.html": "Sewa Lampu Tembak Karawang"
};

const urlMappingSewaLampuProyekFromMoneyMaster1MoneyChild = {
  "https://www.betonjayareadymix.com/2019/03/sewa-lampu-proyek-terdekat.html": "Sewa Lampu Proyek Terdekat"
};

const urlMappingSewaPanelListrikFromMoneyMaster1MoneyChild = {
  "https://www.betonjayareadymix.com/2019/03/sewa-panel-listrik-terdekat.html": "Sewa Panel Listrik Terdekat"
};

const urlMappingSewaAlatSurveyFromMoneyMaster1MoneyChild = {
  "https://www.betonjayareadymix.com/2019/03/sewa-alat-survey-terdekat.html": "Sewa Alat Survey Terdekat",
  "https://www.betonjayareadymix.com/2019/03/sewa-alat-survey-jakarta.html": "Sewa Alat Survey Jakarta",
  "https://www.betonjayareadymix.com/2019/03/sewa-alat-survey-bogor.html": "Sewa Alat Survey Bogor",
  "https://www.betonjayareadymix.com/2019/03/sewa-alat-survey-depok.html": "Sewa Alat Survey Depok",
  "https://www.betonjayareadymix.com/2019/03/sewa-alat-survey-tangerang.html": "Sewa Alat Survey Tangerang",
  "https://www.betonjayareadymix.com/2019/03/sewa-alat-survey-bekasi.html": "Sewa Alat Survey Bekasi",
  "https://www.betonjayareadymix.com/2019/03/sewa-alat-survey-karawang.html": "Sewa Alat Survey Karawang"
};

const urlMappingSewaTotalStationFromMoneyMaster1MoneyChild = {
  "https://www.betonjayareadymix.com/2019/03/sewa-total-station-terdekat.html": "Sewa Total Station Terdekat",
  "https://www.betonjayareadymix.com/2019/03/sewa-total-station-jakarta.html": "Sewa Total Station Jakarta",
  "https://www.betonjayareadymix.com/2019/03/sewa-total-station-bogor.html": "Sewa Total Station Bogor",
  "https://www.betonjayareadymix.com/2019/03/sewa-total-station-depok.html": "Sewa Total Station Depok",
  "https://www.betonjayareadymix.com/2019/03/sewa-total-station-tangerang.html": "Sewa Total Station Tangerang",
  "https://www.betonjayareadymix.com/2019/03/sewa-total-station-bekasi.html": "Sewa Total Station Bekasi",
  "https://www.betonjayareadymix.com/2019/03/sewa-total-station-karawang.html": "Sewa Total Station Karawang"
};

const urlMappingSewaWaterpassFromMoneyMaster1MoneyChild = {
  "https://www.betonjayareadymix.com/2019/03/sewa-waterpass-terdekat.html": "Sewa Waterpass Terdekat",
  "https://www.betonjayareadymix.com/2019/03/sewa-waterpass-jakarta.html": "Sewa Waterpass Jakarta",
  "https://www.betonjayareadymix.com/2019/03/sewa-waterpass-bogor.html": "Sewa Waterpass Bogor",
  "https://www.betonjayareadymix.com/2019/03/sewa-waterpass-depok.html": "Sewa Waterpass Depok",
  "https://www.betonjayareadymix.com/2019/03/sewa-waterpass-tangerang.html": "Sewa Waterpass Tangerang",
  "https://www.betonjayareadymix.com/2019/03/sewa-waterpass-bekasi.html": "Sewa Waterpass Bekasi",
  "https://www.betonjayareadymix.com/2019/03/sewa-waterpass-karawang.html": "Sewa Waterpass Karawang"
};

const urlMappingSewaTheodoliteFromMoneyMaster1MoneyChild = {
  "https://www.betonjayareadymix.com/2019/03/sewa-theodolite-terdekat.html": "Sewa Theodolite Terdekat",
  "https://www.betonjayareadymix.com/2019/03/sewa-theodolite-jakarta.html": "Sewa Theodolite Jakarta",
  "https://www.betonjayareadymix.com/2019/03/sewa-theodolite-bogor.html": "Sewa Theodolite Bogor",
  "https://www.betonjayareadymix.com/2019/03/sewa-theodolite-depok.html": "Sewa Theodolite Depok",
  "https://www.betonjayareadymix.com/2019/03/sewa-theodolite-tangerang.html": "Sewa Theodolite Tangerang",
  "https://www.betonjayareadymix.com/2019/03/sewa-theodolite-bekasi.html": "Sewa Theodolite Bekasi",
  "https://www.betonjayareadymix.com/2019/03/sewa-theodolite-karawang.html": "Sewa Theodolite Karawang"
};

const urlMappingSewaAlatBorFromMoneyMasterMoneyPage = {
  "https://www.betonjayareadymix.com/2019/03/harga-sewa-alat-bor-sumur.html": "Harga Sewa Alat Bor Sumur"
};

const urlMappingSewaAlatBorFromMoneyMasterMoneyChild = {
  "https://www.betonjayareadymix.com/2019/03/sewa-alat-bor-sumur-terdekat.html": "Sewa Alat Bor Sumur Terdekat"
};

const urlMappingSewaBorTanahFromMoneyMaster1MoneyChild = {
  "https://www.betonjayareadymix.com/2019/03/sewa-bor-tanah-terdekat.html": "Sewa Bor Tanah Terdekat"
};

const urlMappingSewaAlatBeratPostFromMoneyMasterMoneyMaster1 = {
  "https://www.betonjayareadymix.com/2019/02/sewa-alat-berat-trakindo.html": "Sewa Alat Berat Trakindo"
};

const urlMappingSewaAlatBeratPostFromMoneyMasterMoneyPage = {
  "https://www.betonjayareadymix.com/2019/02/standar-harga-sewa-alat-berat.html": "Standar Harga Sewa Alat Berat",
  "https://www.betonjayareadymix.com/2019/02/daftar-harga-sewa-alat-berat-per-jam.html": "Daftar Harga Sewa Alat Berat Per Jam",
  "https://www.betonjayareadymix.com/2019/02/sewa-alat-berat-murah.html": "Sewa Alat Berat Murah",
  "https://www.betonjayareadymix.com/2019/02/harga-sewa-alat-berat.html": "Harga Sewa Alat Berat",
  "https://www.betonjayareadymix.com/2019/02/sewa-alat-berat-per-hari.html": "Sewa Alat Berat per Hari",
  "https://www.betonjayareadymix.com/2019/02/sewa-alat-berat-per-jam.html": "Sewa Alat Berat per Jam",
  "https://www.betonjayareadymix.com/2019/02/sewa-alat-berat-all-in.html": "Sewa Alat Berat All In",
  "https://www.betonjayareadymix.com/2019/02/harga-sewa-roller-alat-berat.html": "Harga Sewa Roller Alat Berat",
  "https://www.betonjayareadymix.com/2019/02/harga-sewa-alat-berat-beko.html": "Harga Sewa Alat Berat Beko",
  "https://www.betonjayareadymix.com/2019/02/harga-sewa-alat-berat-bego.html": "Harga Sewa Alat Berat Bego",
  "https://www.betonjayareadymix.com/2019/02/harga-sewa-alat-berat-breaker.html": "Harga Sewa Alat Berat Breaker",
  "https://www.betonjayareadymix.com/2019/02/harga-sewa-alat-berat-backhoe-loader.html": "Harga Sewa Alat Berat Backhoe Loader",
  "https://www.betonjayareadymix.com/2019/02/harga-sewa-alat-berat-crane.html": "Harga Sewa Alat Berat Crane",
  "https://www.betonjayareadymix.com/2019/02/harga-sewa-alat-berat-wales.html": "Harga Sewa Alat Berat Wales",
  "https://www.betonjayareadymix.com/2019/02/harga-sewa-alat-berat-tandem-roller.html": "Harga Sewa Alat Berat Tandem Roller",
  "https://www.betonjayareadymix.com/2019/02/harga-sewa-alat-berat-vibro.html": "Harga Sewa Alat Berat Vibro",
  "https://www.betonjayareadymix.com/2019/02/harga-sewa-alat-berat-wheel-loader.html": "Harga Sewa Alat Berat Wheel Loader",
  "https://www.betonjayareadymix.com/2019/02/harga-sewa-alat-berat-dozer.html": "Harga Sewa Alat Berat Dozer",
  "https://www.betonjayareadymix.com/2019/02/harga-sewa-alat-berat-dump-truck.html": "Harga Sewa Alat Berat Dump Truck",
  "https://www.betonjayareadymix.com/2019/02/harga-sewa-alat-berat-excavator.html": "Harga Sewa Alat Berat Excavator",
  "https://www.betonjayareadymix.com/2019/02/harga-sewa-alat-berat-komatsu.html": "Harga Sewa Alat Berat Komatsu",
  "https://www.betonjayareadymix.com/2019/02/harga-sewa-paver-alat-berat.html": "Harga Sewa Paver Alat Berat"
};

const urlMappingSewaforkliftPostFromMoneyMasterMoneyPage = {
  "https://www.betonjayareadymix.com/2019/02/harga-sewa-forklift.html": "Harga Sewa Forklift"
};
const urlMappingSewaCranePostFromMoneyMasterMoneyPage = {
  "https://www.betonjayareadymix.com/2019/02/harga-sewa-crane.html": "Harga Sewa Crane"
};
const urlMappingSewaSelfLoaderPostFromMoneyMasterMoneyPage = {
  "https://www.betonjayareadymix.com/2019/02/harga-sewa-self-loader.html": "Harga Sewa Self Loader"
};
const urlMappingSewaWheelLoaderPostFromMoneyMasterMoneyPage = {
  "https://www.betonjayareadymix.com/2019/02/harga-sewa-wheel-loader.html": "Harga Sewa Wheel Loader"
};
const urlMappingSewaVibroRollerPostFromMoneyMasterMoneyPage = {
  "https://www.betonjayareadymix.com/2019/02/harga-sewa-vibro-roller.html": "Harga Sewa Vibro Roller"
};
const urlMappingSewaWalesStoomPostFromMoneyMasterMoneyPage = {
  "https://www.betonjayareadymix.com/2019/02/harga-sewa-wales-stoom.html": "Harga Sewa Wales Stoom"
};
const urlMappingSewaTandemRollerPostFromMoneyMasterMoneyPage = {
  "https://www.betonjayareadymix.com/2019/02/harga-sewa-tandem-roller.html": "Harga Sewa Tandem Roller"
};
const urlMappingSewaBulldozerPostFromMoneyMasterMoneyPage = {
  "https://www.betonjayareadymix.com/2019/02/harga-sewa-bulldozer.html": "Harga Sewa Bulldozer"
};
const urlMappingSewaExcavatorPostFromMoneyMasterMoneyMaster1 = {
  "https://www.betonjayareadymix.com/2019/02/sewa-excavator-mini.html": "Sewa Excavator Mini"
};
const urlMappingSewaExcavatorPostFromMoneyMasterMoneyPage = {
  "https://www.betonjayareadymix.com/2019/02/harga-sewa-excavator.html": "Harga Sewa Excavator"
};
const urlMappingSewaBackhoeLoaderPostFromMoneyMasterMoneyPage = {
  "https://www.betonjayareadymix.com/2019/02/harga-sewa-backhoe-loader.html": "Harga Sewa Backhoe Loader"
};
const urlMappingSewaBabyRollerPostFromMoneyMasterMoneyPage = {
  "https://www.betonjayareadymix.com/2019/02/harga-sewa-baby-roller.html": "Harga Sewa Baby Roller"
};
const urlMappingSewaMotorGraderPostFromMoneyMasterMoneyPage = {
  "https://www.betonjayareadymix.com/2019/02/harga-sewa-motor-grader.html": "Harga Sewa Motor Grader"
};

const urlMappingSewaAlatPancangPostFromMoneyMasterMoneyPage = {
  "https://www.betonjayareadymix.com/2019/02/harga-sewa-alat-pancang.html": "Harga Sewa Alat Pancang",
  "https://www.betonjayareadymix.com/2019/02/biaya-sewa-alat-pancang-per-hari.html": "Biaya Sewa Alat Pancang per Hari",
  "https://www.betonjayareadymix.com/2019/02/tarif-sewa-alat-pancang-murah.html": "Tarif Sewa Alat Pancang Murah"
};

const urlMappingSewaPileDriverPostFromMoneyMasterMoneyPage = {
  "https://www.betonjayareadymix.com/2019/02/harga-sewa-pile-driver.html": "Harga Sewa Pile Driver",
  "https://www.betonjayareadymix.com/2019/02/biaya-sewa-pile-driver-per-hari.html": "Biaya Sewa Pile Driver per Hari",
  "https://www.betonjayareadymix.com/2019/02/tarif-sewa-pile-driver-bulanan.html": "Tarif Sewa Pile Driver Bulanan"
};

const urlMappingSewaDieselHammerPostFromMoneyMasterMoneyPage = {
  "https://www.betonjayareadymix.com/2019/02/harga-sewa-diesel-hammer.html": "Harga Sewa Diesel Hammer",
  "https://www.betonjayareadymix.com/2019/02/biaya-sewa-diesel-hammer-per-hari.html": "Biaya Sewa Diesel Hammer per Hari",
  "https://www.betonjayareadymix.com/2019/02/tarif-sewa-diesel-hammer-murah.html": "Tarif Sewa Diesel Hammer Murah"
};

const urlMappingSewaConcretePaverPostFromMoneyMasterMoneyPage = {
  "https://www.betonjayareadymix.com/2019/02/harga-sewa-concrete-paver.html": "Harga Sewa Concrete Paver"
};

const urlMappingSewaTrencherPostFromMoneyMasterMoneyPage = {
  "https://www.betonjayareadymix.com/2019/02/harga-sewa-trencher-mesin.html": "Harga Sewa Trencher Mesin"
};

const urlMappingSewaAlatBeratPostFromMoneyMasterMoneyChild = {
  "https://www.betonjayareadymix.com/2019/02/sewa-alat-berat-subang.html": "Sewa Alat Berat Subang",
  "https://www.betonjayareadymix.com/2019/02/sewa-alat-berat-bandung.html": "Sewa Alat Berat Bandung",
  "https://www.betonjayareadymix.com/2019/02/sewa-alat-berat-purwakarta.html": "Sewa Alat Berat Purwakarta",
  "https://www.betonjayareadymix.com/2019/02/sewa-alat-berat-jawa-barat.html": "Sewa Alat Berat Jawa Barat",
  "https://www.betonjayareadymix.com/2019/02/sewa-alat-berat-jabodetabek.html": "Sewa Alat Berat Jabodetabek",
  "https://www.betonjayareadymix.com/2019/02/sewa-alat-berat-cikampek.html": "Sewa Alat Berat Cikampek",
  "https://www.betonjayareadymix.com/2019/02/sewa-alat-berat-cikarang.html": "Sewa Alat Berat Cikarang",
  "https://www.betonjayareadymix.com/2019/02/sewa-alat-berat-cileungsi.html": "Sewa Alat Berat Cileungsi",
  "https://www.betonjayareadymix.com/2019/02/sewa-alat-berat-karawang.html": "Sewa Alat Berat Karawang",
  "https://www.betonjayareadymix.com/2019/02/sewa-alat-berat-bekasi.html": "Sewa Alat Berat Bekasi",
  "https://www.betonjayareadymix.com/2019/02/sewa-alat-berat-tangerang.html": "Sewa Alat Berat Tangerang",
  "https://www.betonjayareadymix.com/2019/02/sewa-alat-berat-depok.html": "Sewa Alat Berat Depok",
  "https://www.betonjayareadymix.com/2019/02/sewa-alat-berat-bogor.html": "Sewa Alat Berat Bogor",
  "https://www.betonjayareadymix.com/2019/02/sewa-alat-berat-jakarta.html": "Sewa Alat Berat Jakarta",
  "https://www.betonjayareadymix.com/2019/02/sewa-alat-berat-terdekat.html": "Sewa Alat Berat Terdekat",
  "https://www.betonjayareadymix.com/2019/02/harga-sewa-alat-berat-jakarta.html": "Harga Sewa Alat Berat Jakarta"
};

const urlMappingSewaExcavatorPostFromMoneyPageMoneyChild = {
  "https://www.betonjayareadymix.com/2019/02/sewa-excavator-surakarta.html": "Sewa Excavator Surakarta",
  "https://www.betonjayareadymix.com/2019/02/sewa-excavator-salatiga.html": "Sewa Excavator Salatiga",
  "https://www.betonjayareadymix.com/2019/02/sewa-excavator-wonosobo.html": "Sewa Excavator Wonosobo",
  "https://www.betonjayareadymix.com/2019/02/sewa-excavator-wonogiri.html": "Sewa Excavator Wonogiri",
  "https://www.betonjayareadymix.com/2019/02/sewa-excavator-tegal.html": "Sewa Excavator Tegal",
  "https://www.betonjayareadymix.com/2019/02/sewa-excavator-temanggung.html": "Sewa Excavator Temanggung",
  "https://www.betonjayareadymix.com/2019/02/sewa-excavator-sukoharjo.html": "Sewa Excavator Sukoharjo",
  "https://www.betonjayareadymix.com/2019/02/sewa-excavator-sragen.html": "Sewa Excavator Sragen",
  "https://www.betonjayareadymix.com/2019/02/sewa-excavator-rembang.html": "Sewa Excavator Rembang",
  "https://www.betonjayareadymix.com/2019/02/sewa-excavator-purworejo.html": "Sewa Excavator Purworejo",
  "https://www.betonjayareadymix.com/2019/02/sewa-excavator-purbalingga.html": "Sewa Excavator Purbalingga",
  "https://www.betonjayareadymix.com/2019/02/sewa-excavator-pemalang.html": "Sewa Excavator Pemalang",
  "https://www.betonjayareadymix.com/2019/02/sewa-excavator-pekalongan.html": "Sewa Excavator Pekalongan",
  "https://www.betonjayareadymix.com/2019/02/sewa-excavator-pati.html": "Sewa Excavator Pati",
  "https://www.betonjayareadymix.com/2019/02/sewa-excavator-magelang.html": "Sewa Excavator Magelang",
  "https://www.betonjayareadymix.com/2019/02/sewa-excavator-kudus.html": "Sewa Excavator Kudus",
  "https://www.betonjayareadymix.com/2019/02/sewa-excavator-klaten.html": "Sewa Excavator Klaten",
  "https://www.betonjayareadymix.com/2019/02/sewa-excavator-kendal.html": "Sewa Excavator Kendal",
  "https://www.betonjayareadymix.com/2019/02/sewa-excavator-kebumen.html": "Sewa Excavator Kebumen",
  "https://www.betonjayareadymix.com/2019/02/sewa-excavator-karanganyar.html": "Sewa Excavator Karanganyar",
  "https://www.betonjayareadymix.com/2019/02/sewa-excavator-jepara.html": "Sewa Excavator Jepara",
  "https://www.betonjayareadymix.com/2019/02/sewa-excavator-grobogan.html": "Sewa Excavator Grobogan",
  "https://www.betonjayareadymix.com/2019/02/sewa-excavator-demak.html": "Sewa Excavator Demak",
  "https://www.betonjayareadymix.com/2019/02/sewa-excavator-cilacap.html": "Sewa Excavator Cilacap",
  "https://www.betonjayareadymix.com/2019/02/sewa-excavator-brebes.html": "Sewa Excavator Brebes",
  "https://www.betonjayareadymix.com/2019/02/sewa-excavator-boyolali.html": "Sewa Excavator Boyolali",
  "https://www.betonjayareadymix.com/2019/02/sewa-excavator-blora.html": "Sewa Excavator Blora",
  "https://www.betonjayareadymix.com/2019/02/sewa-excavator-batang.html": "Sewa Excavator Batang",
  "https://www.betonjayareadymix.com/2019/02/sewa-excavator-banyumas.html": "Sewa Excavator Banyumas",
  "https://www.betonjayareadymix.com/2019/02/sewa-excavator-banjarnegara.html": "Sewa Excavator Banjarnegara",
  "https://www.betonjayareadymix.com/2019/02/sewa-excavator-semarang.html": "Sewa Excavator Semarang",
  "https://www.betonjayareadymix.com/2019/02/sewa-excavator-kuningan.html": "Sewa Excavator Kuningan",
  "https://www.betonjayareadymix.com/2019/02/sewa-excavator-ciamis.html": "Sewa Excavator Ciamis",
  "https://www.betonjayareadymix.com/2019/02/sewa-excavator-cirebon.html": "Sewa Excavator Cirebon",
  "https://www.betonjayareadymix.com/2019/02/sewa-excavator-purwakarta.html": "Sewa Excavator Purwakarta",
  "https://www.betonjayareadymix.com/2019/02/sewa-excavator-majalengka.html": "Sewa Excavator Majalengka",
  "https://www.betonjayareadymix.com/2019/02/sewa-excavator-sukabumi.html": "Sewa Excavator Sukabumi",
  "https://www.betonjayareadymix.com/2019/02/sewa-excavator-sumedang.html": "Sewa Excavator Sumedang",
  "https://www.betonjayareadymix.com/2019/02/sewa-excavator-bandung.html": "Sewa Excavator Bandung",
  "https://www.betonjayareadymix.com/2019/02/sewa-excavator-subang.html": "Sewa Excavator Subang",
  "https://www.betonjayareadymix.com/2019/02/sewa-excavator-tasikmalaya.html": "Sewa Excavator Tasikmalaya",
  "https://www.betonjayareadymix.com/2019/02/sewa-excavator-karawang.html": "Sewa Excavator Karawang",
  "https://www.betonjayareadymix.com/2019/02/sewa-excavator-tangerang.html": "Sewa Excavator Tangerang",
  "https://www.betonjayareadymix.com/2019/02/sewa-excavator-jakarta.html": "Sewa Excavator Jakarta",
  "https://www.betonjayareadymix.com/2019/02/sewa-excavator-depok.html": "Sewa Excavator Depok",
  "https://www.betonjayareadymix.com/2019/02/sewa-excavator-bekasi.html": "Sewa Excavator Bekasi",
  "https://www.betonjayareadymix.com/2019/02/sewa-excavator-bogor.html": "Sewa Excavator Bogor"
};

const urlMappingSewaConcreteCutterFromMoneyMaster1MoneyPage = {
  "https://www.betonjayareadymix.com/2019/02/harga-sewa-concrete-cutter.html": "Harga Sewa Concrete Cutter"
};
const urlMappingSewaJackHammerFromMoneyMaster1MoneyPage = {
  "https://www.betonjayareadymix.com/2019/02/harga-sewa-jack-hammer.html": "Harga Sewa Jack Hammer"
};
const urlMappingSewaVibratorBetonFromMoneyMaster1MoneyPage = {
  "https://www.betonjayareadymix.com/2019/02/harga-sewa-mesin-vibrator-beton.html": "Harga Sewa Mesin Vibrator Beton"
};
const urlMappingSewaMesinMolenFromMoneyMaster1MoneyPage = {
  "https://www.betonjayareadymix.com/2019/02/harga-sewa-mesin-molen.html": "Harga Sewa Mesin Molen"
};
const urlMappingSewaGensetFromMoneyMaster1MoneyPage = {
  "https://www.betonjayareadymix.com/2019/02/harga-sewa-mesin-genset.html": "Harga Sewa Mesin Genset"
};
const urlMappingSewaMesinCompressorFromMoneyMaster1MoneyPage = {
  "https://www.betonjayareadymix.com/2019/02/harga-sewa-mesin-compressor.html": "Harga Sewa Mesin Compressor"
};
const urlMappingSewaCuttingBetonFromMoneyMaster1MoneyPage = {
  "https://www.betonjayareadymix.com/2019/02/harga-sewa-mesin-cutting-beton.html": "Harga Sewa Mesin Cutting Beton"
};
const urlMappingSewaMesinPotongRumputFromMoneyMaster1MoneyPage = {
  "https://www.betonjayareadymix.com/2019/02/sewa-mesin-potong-rumput.html": "Sewa Mesin Potong Rumput",
  "https://www.betonjayareadymix.com/2019/02/harga-sewa-mesin-potong-rumput.html": "Harga Sewa Mesin Potong Rumput"
};
const urlMappingSewaMesinTrowelFromMoneyMaster1MoneyPage = {
  "https://www.betonjayareadymix.com/2019/02/harga-sewa-mesin-trowel.html": "Harga Sewa Mesin Trowel"
};
const urlMappingSewaMesinScreedFromMoneyMaster1MoneyPage = {
  "https://www.betonjayareadymix.com/2019/02/harga-sewa-mesin-screed.html": "Harga Sewa Mesin Screed"
};
const urlMappingSewaStamperFromMoneyMaster1MoneyPage = {
  "https://www.betonjayareadymix.com/2019/02/harga-sewa-stamper.html": "Harga Sewa Stamper"
};
const urlMappingSewaCuttingBetonFromMoneyMaster1MoneyChild = {
  "https://www.betonjayareadymix.com/2019/02/sewa-cutting-beton-terdekat.html": "Sewa Cutting Beton Terdekat"
};

// ────────────────────────────────────────────────────────────
// [BAGIAN 2] FUNGSI HELPER BREADCRUMB
// ────────────────────────────────────────────────────────────

// Fungsi untuk menghapus elemen breadcrumb navigation
function removeBreadcrumbNavigation() {
    var selectors = [
        '.breadcrumb',
        '.breadcrumbs',
        '.breadcrumb-nav',
        'nav[aria-label="Breadcrumb"]',
        'nav.breadcrumb',
        'div.breadcrumb',
        'ul.breadcrumb',
        'ol.breadcrumb'
    ];

    var removedCount = 0;

    selectors.forEach(function(selector) {
        var elements = document.querySelectorAll(selector);
        elements.forEach(function(el) {
            if (el && el.remove) {
                el.remove();
                removedCount++;
                console.log('[jasa-alat-konstruksi-post] ✅ Breadcrumb removed: ' + selector);
            }
        });
    });

    return removedCount;
}

// Fungsi untuk menghapus JSON-LD BreadcrumbList (tanpa menghapus schema lain)
function removeBreadcrumbJsonLd() {
    var scripts = document.querySelectorAll('script[type="application/ld+json"]');
    var removedCount = 0;

    scripts.forEach(function(script) {
        try {
            var jsonData = JSON.parse(script.textContent);
            // Hanya hapus jika @type adalah BreadcrumbList
            if (jsonData && (jsonData['@type'] === 'BreadcrumbList' ||
                (jsonData['@type'] && jsonData['@type'].indexOf('BreadcrumbList') !== -1))) {
                script.remove();
                removedCount++;
                console.log('[jasa-alat-konstruksi-post] ✅ BreadcrumbList JSON-LD removed');
            }
        } catch(e) {
            // Jika parsing gagal, skip
            console.warn('[jasa-alat-konstruksi-post] ⚠️ Could not parse JSON-LD, skipping:', e.message);
        }
    });

    return removedCount;
}

// Fungsi untuk menyembunyikan breadcrumb dengan CSS (fallback)
function hideBreadcrumbWithCss() {
    var style = document.createElement('style');
    style.id = 'variant-breadcrumb-hider';
    style.textContent = '.breadcrumb, .breadcrumbs, .breadcrumb-nav, nav[aria-label="Breadcrumb"], nav.breadcrumb, div.breadcrumb, ul.breadcrumb, ol.breadcrumb { display: none !important; visibility: hidden !important; height: 0 !important; overflow: hidden !important; margin: 0 !important; padding: 0 !important; }';

    // Cek apakah style sudah ada
    if (!document.getElementById('variant-breadcrumb-hider')) {
        document.head.appendChild(style);
        console.log('[jasa-alat-konstruksi-post] ✅ CSS hider added');
    }
}

// Menyimpan elemen yang dihapus dalam variabel
var removedElementsJasaKonsAlatKonstruksiPost = {};

// Fungsi untuk menghapus elemen berdasarkan ID
function removeCondition(conditionId) {
    var conditionElement = document.getElementById(conditionId);

    if (conditionElement) {
        // Menyimpan elemen yang dihapus dalam objek untuk bisa dikembalikan
        removedElementsJasaKonsAlatKonstruksiPost[conditionId] = conditionElement;
        conditionElement.remove(); // Menghapus elemen tersebut
    }
}

// Fungsi untuk mengembalikan elemen yang telah dihapus
function restoreCondition(conditionId) {
    var breadcrumb = document.querySelector('.breadcrumb');
    var elementToRestore = removedElementsJasaKonsAlatKonstruksiPost[conditionId];

    if (elementToRestore) {
        breadcrumb.appendChild(elementToRestore);
        delete removedElementsJasaKonsAlatKonstruksiPost[conditionId];
    } else {
        console.log('[jasa-alat-konstruksi-post] Elemen dengan ID ' + conditionId + ' tidak ditemukan di removedElementsJasaKonsAlatKonstruksiPost.');
    }
}

// ────────────────────────────────────────────────────────────
// [BAGIAN 3] EARLY EXIT v2.0.0 — CEK URL SEBELUM EKSEKUSI
// ────────────────────────────────────────────────────────────
(function() {
    'use strict';

    var cleanUrl = window.location.href.split(/[?#]/)[0];
    console.log('[jasa-alat-konstruksi-post] 🔍 Check URL: ' + cleanUrl);

    // Kumpulkan semua mapping ke array (TANPA Object.assign)
    var ALL_MAPPINGS_ARRAY = [
        // ─── JASA INSTALASI LISTRIK ───
        urlMappingJasaInstalasiListrikFromMoneyMasterMoneyChild,

        // ─── JASA KONSULTAN ───
        urlMappingJasaKonsultanFromMoneyMasterMoneyChild,
        urlMappingHargaJasaKonsultanFromMoneyPageMoneyChild,

        // ─── JASA ALAT KONSTRUKSI ───
        urlMappingJasaAlatKonstruksiBridgeFromSub2Sub1MoneyPageMoneyChild,
        urlMappingJasaAlatKonstruksiBridgeFromMoneyPage1MoneyPage2,
        urlMappingJasaAlatKonstruksiBridgeFromMoneyPage1Variant,

        // ─── SEWA ALAT PROYEK ───
        urlMappingSewaAlatProyekFromMoneyMasterMoneyPage,
        urlMappingSewaAlatProyekFromMoneyMasterMoneyChild,
        urlMappingSewaPompaDewateringFromMoneyMaster1MoneyPage,
        urlMappingSewaPompaDewateringFromMoneyPageMoneyChild,
        urlMappingSewaPompaDewateringFromMoneyChildVariant,
        urlMappingSewaPompaAirFromMoneyMaster1MoneyPage,
        urlMappingSewaPompaAirFromMoneyMasterMoneyChild,
        urlMappingSewaPompaAirDieselFromMoneyMaster1MoneyPage,
        urlMappingSewaPompaAirDieselFromMoneyMaster1MoneyChild,
        urlMappingSewaPompaAirDieselFromMoneyMaster1Variant,
        urlMappingSewaMesinPompaAirFromMoneyChildVariant,
        urlMappingSewaPompaLumpurFromMoneyMaster1MoneyPage,
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

        // ─── SEWA BEKISTING & SCAFFOLDING ───
        urlMappingSewaBekistingFromMoneyMaster1MoneyPage,
        urlMappingSewaBekistingFromMoneyMasterMoneyChild,
        urlMappingSewaScaffoldingFromMoneyMasterMoneyPage,
        urlMappingSewaScaffoldingFromMoneyMasterMoneyChild,

        // ─── SEWA PENCAHAYAAN PROYEK ───
        urlMappingSewaPencahayaanProyekFromMoneyMaster1MoneyMaster2,
        urlMappingSewaTowerLampFromMoneyMaster1MoneyChild,
        urlMappingSewaLampuSorotFromMoneyMaster1MoneyChild,
        urlMappingSewaLampuTembakFromMoneyMaster1MoneyChild,
        urlMappingSewaLampuProyekFromMoneyMaster1MoneyChild,
        urlMappingSewaPanelListrikFromMoneyMaster1MoneyChild,

        // ─── SEWA ALAT SURVEY ───
        urlMappingSewaAlatSurveyFromMoneyMaster1MoneyMaster2,
        urlMappingSewaAlatSurveyFromMoneyMaster1MoneyPage,
        urlMappingSewaAlatSurveyFromMoneyMaster1MoneyChild,
        urlMappingSewaTotalStationFromMoneyMaster1MoneyChild,
        urlMappingSewaWaterpassFromMoneyMaster1MoneyChild,
        urlMappingSewaTheodoliteFromMoneyMaster1MoneyChild,

        // ─── SEWA ALAT BOR ───
        urlMappingSewaAlatBorFromMoneyMasterMoneyMaster1,
        urlMappingSewaAlatBorFromMoneyMasterMoneyPage,
        urlMappingSewaAlatBorFromMoneyMasterMoneyChild,
        urlMappingSewaBorTanahFromMoneyMaster1MoneyChild,

        // ─── SEWA AKSES KEAMANAN ───
        urlMappingSewaAksesKeamananFromMoneyMaster1MoneyMaster2,
        urlMappingSewaAksesKeamananFromMoneyMaster1MoneyPage,

        // ─── SEWA TANGKI AIR ───
        urlMappingSewaTangkiAirFromMoneyMasterMoneyMaster1,
        urlMappingSewaTangkiAirFromMoneyMasterMoneyChild,
        urlMappingSewaTangkiAirFromMoneyChildVariant,

        // ─── SEWA SELANG PROYEK ───
        urlMappingSewaSelangProyekFromMoneyMasterMoneyMaster1,
        urlMappingSewaSelangProyekFromMoneyMasterMoneyChild,
        urlMappingSewaSelangProyekFromMoneyChildVariant,

        // ─── SEWA PIPA PROYEK ───
        urlMappingSewaPipaProyekFromMoneyMasterMoneyMaster1,
        urlMappingSewaPipaProyekFromMoneyMasterMoneyChild,
        urlMappingSewaPipaProyekFromMoneyChildVariant,

        // ─── SEWA ALAT BERAT (MASTER) ───
        urlMappingSewaAlatBeratPostFromMoneyMasterMoneyMaster1,
        urlMappingSewaAlatBeratPostFromMoneyMasterMoneyPage,
        urlMappingSewaAlatBeratPostFromMoneyMasterMoneyChild,

        // ─── SEWA ALAT BERAT SPESIFIK ───
        urlMappingSewaforkliftPostFromMoneyMasterMoneyPage,
        urlMappingSewaCranePostFromMoneyMasterMoneyPage,
        urlMappingSewaSelfLoaderPostFromMoneyMasterMoneyPage,
        urlMappingSewaWheelLoaderPostFromMoneyMasterMoneyPage,
        urlMappingSewaVibroRollerPostFromMoneyMasterMoneyPage,
        urlMappingSewaWalesStoomPostFromMoneyMasterMoneyPage,
        urlMappingSewaTandemRollerPostFromMoneyMasterMoneyPage,
        urlMappingSewaBulldozerPostFromMoneyMasterMoneyPage,
        urlMappingSewaExcavatorPostFromMoneyMasterMoneyMaster1,
        urlMappingSewaExcavatorPostFromMoneyMasterMoneyPage,
        urlMappingSewaExcavatorPostFromMoneyPageMoneyChild,
        urlMappingSewaBackhoeLoaderPostFromMoneyMasterMoneyPage,
        urlMappingSewaBabyRollerPostFromMoneyMasterMoneyPage,
        urlMappingSewaMotorGraderPostFromMoneyMasterMoneyPage,

        // ─── SEWA ALAT PANCANG ───
        urlMappingSewaAlatPancangPostFromMoneyMasterMoneyPage,
        urlMappingSewaPileDriverPostFromMoneyMasterMoneyPage,
        urlMappingSewaDieselHammerPostFromMoneyMasterMoneyPage,

        // ─── SEWA CONCRETE PAVER & TRENCHER ───
        urlMappingSewaConcretePaverPostFromMoneyMasterMoneyPage,
        urlMappingSewaTrencherPostFromMoneyMasterMoneyPage,

        // ─── SEWA ALAT RINGAN ───
        urlMappingSewaConcreteCutterFromMoneyMaster1MoneyPage,
        urlMappingSewaJackHammerFromMoneyMaster1MoneyPage,
        urlMappingSewaVibratorBetonFromMoneyMaster1MoneyPage,
        urlMappingSewaMesinMolenFromMoneyMaster1MoneyPage,
        urlMappingSewaGensetFromMoneyMaster1MoneyPage,
        urlMappingSewaMesinCompressorFromMoneyMaster1MoneyPage,
        urlMappingSewaCuttingBetonFromMoneyMaster1MoneyPage,
        urlMappingSewaCuttingBetonFromMoneyMaster1MoneyChild,
        urlMappingSewaMesinPotongRumputFromMoneyMaster1MoneyPage,
        urlMappingSewaMesinTrowelFromMoneyMaster1MoneyPage,
        urlMappingSewaMesinScreedFromMoneyMaster1MoneyPage,
        urlMappingSewaStamperFromMoneyMaster1MoneyPage
    ];

    // ─── Loop + break (TANPA MERGED_MAP) ───
    var foundIndex = -1;
    var foundMappingName = '';

    for (var i = 0; i < ALL_MAPPINGS_ARRAY.length; i++) {
        var m = ALL_MAPPINGS_ARRAY[i];

        // Guard: skip kalau undefined/null/bukan object
        if (!m || typeof m !== 'object') {
            console.warn('[jasa-alat-konstruksi-post] ⚠️ Mapping #' + (i + 1) + ' bukan object — skip');
            continue;
        }

        // Cek langsung — apakah cleanUrl ada di mapping ini?
        if (m.hasOwnProperty(cleanUrl)) {
            foundIndex = i;
            foundMappingName = m[cleanUrl];
            break;  // ⚡ Short-circuit
        }
    }

    // ─── Cek hasil — pakai foundIndex ───
    if (foundIndex === -1) {
        console.log('[jasa-alat-konstruksi-post] ⏭️ SKIP — URL tidak cocok');
        window.__jasaAlatKonstruksiPostActive = false;
        return;
    }

    // ─── Match! Set flag + log detail ───
    window.__jasaAlatKonstruksiPostActive = true;
    window.__jasaAlatKonstruksiPostMatchIndex = foundIndex;
    window.__jasaAlatKonstruksiPostMatchMappingName = foundMappingName;

    console.log(
        '[jasa-alat-konstruksi-post] ✅ Match di mapping #' + (foundIndex + 1) +
        ' — Label: "' + foundMappingName + '" — EXECUTE flag set'
    );

})();

// ────────────────────────────────────────────────────────────
// [BAGIAN 4] FUNGSI UTAMA — dengan guard + log + Fix v2.1.0
// ────────────────────────────────────────────────────────────
function initJasaKonsAlatKonstruksiPost() {
    // ⚡ Guard: skip kalau flag tidak aktif
    if (!window.__jasaAlatKonstruksiPostActive) {
        console.log('[jasa-alat-konstruksi-post] ⏭️ Execute SKIP — URL tidak cocok');
        return;
    }

    var cleanUrlJasaKonsAlatKonstruksiPost = window.location.href.split(/[?#]/)[0];
    console.log('[jasa-alat-konstruksi-post] 🚀 Execute — URL cocok: ' + cleanUrlJasaKonsAlatKonstruksiPost);

    // Ambil nama dari URL (panggil fungsi yang sama)
    var currentPageTitle = cleanUrlJasaKonsAlatKonstruksiPost
        .split('/').pop()
        .replace('.html', '')
        .replace(/-/g, ' ');
    // Hasil: 'sewa bor tanah'

    // Menemukan elemen menggunakan Id
    var JasaKonsAlatKonstruksiPost = document.getElementById("JasaKonsAlatKonstruksiPost");

    if (!JasaKonsAlatKonstruksiPost) {
        console.error('[jasa-alat-konstruksi-post] ❌ elemen Id JasaKonsAlatKonstruksiPost kondisi terhapus');
        return;
    }

    // ═══════════════════════════════════════════════════════════
    // 🔥 Hybrid Date Modified v7.9 (DIPERTAHANKAN DARI FILE ASLI)
    // ═══════════════════════════════════════════════════════════
    // Kode HybridDateModified yang panjang tetap di sini.
    // Karena panjang, saya ringkas — copy dari file asli kamu
    // bagian (async function runHybridDateModified() { ... })();
    // ═══════════════════════════════════════════════════════════
    
    // [SALIN KODE HybridDateModified v7.9 DARI FILE ASLI KAMU DI SINI]
    // Mulai dari: (async function runHybridDateModified() {
    // Sampai: })();
    
    // ────────────────────────────────────────────────────────────
    // [BAGIAN 4.1] SEMUA IF BREADCRUMB
    // ────────────────────────────────────────────────────────────
    // ⚠️ CATATAN: Karena bagian ini ~600 baris, saya bagi jadi
    // 3 sub-bagian: 3B (JASA), 3C (SEWA PROYEK), 3D (SEWA ALAT BERAT & RINGAN)
    // Semua if breadcrumb WAJIB ada di dalam function initJasaKonsAlatKonstruksiPost()
    // ────────────────────────────────────────────────────────────

    // [SEMUA IF BREADCRUMB DARI TAHAP 3B, 3C, 3D DITARUH DI SINI]

    console.log('[jasa-alat-konstruksi-post] ✅ Semua breadcrumb selesai diproses');
}

    // ────────────────────────────────────────────────────────────
    // [BAGIAN 4.1] JASA INSTALASI LISTRIK
    // ────────────────────────────────────────────────────────────
    if (urlMappingJasaInstalasiListrikFromMoneyMasterMoneyChild[cleanUrlJasaKonsAlatKonstruksiPost]) {
        generateBreadcrumbShared(
            urlMappingJasaInstalasiListrikFromMoneyMasterMoneyChild,
            cleanUrlJasaKonsAlatKonstruksiPost,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Instalasi Listrik', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-instalasi-listrik.html' },
                { name: 'Perbandingan Jasa Instalasi Listrik', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-instalasi-listrik.html' },
                { name: 'Jasa Instalasi Listrik', url: 'https://www.betonjayareadymix.com/p/jasa-instalasi-listrik.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }

    // ────────────────────────────────────────────────────────────
    // [BAGIAN 4.2] JASA KONSULTAN
    // ────────────────────────────────────────────────────────────
    if (urlMappingJasaKonsultanFromMoneyMasterMoneyChild[cleanUrlJasaKonsAlatKonstruksiPost]) {
        generateBreadcrumbShared(
            urlMappingJasaKonsultanFromMoneyMasterMoneyChild,
            cleanUrlJasaKonsAlatKonstruksiPost,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Konsultan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-konsultan.html' },
                { name: 'Perbandingan Jasa Konsultan', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-konsultan.html' },
                { name: 'Jasa Konsultan', url: 'https://www.betonjayareadymix.com/p/jasa-konsultan.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }
    if (urlMappingHargaJasaKonsultanFromMoneyPageMoneyChild[cleanUrlJasaKonsAlatKonstruksiPost]) {
        generateBreadcrumbShared(
            urlMappingHargaJasaKonsultanFromMoneyPageMoneyChild,
            cleanUrlJasaKonsAlatKonstruksiPost,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Konsultan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-konsultan.html' },
                { name: 'Perbandingan Jasa Konsultan', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-konsultan.html' },
                { name: 'Jasa Konsultan', url: 'https://www.betonjayareadymix.com/p/jasa-konsultan.html' },
                { name: 'Harga Jasa Konsultan', url: 'https://www.betonjayareadymix.com/p/harga-jasa-konsultan.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }

    // ────────────────────────────────────────────────────────────
    // [BAGIAN 4.3] JASA ALAT KONSTRUKSI
    // ────────────────────────────────────────────────────────────
    if (urlMappingJasaAlatKonstruksiBridgeFromSub2Sub1MoneyPageMoneyChild[cleanUrlJasaKonsAlatKonstruksiPost]) {
        generateBreadcrumbShared(
            urlMappingJasaAlatKonstruksiBridgeFromSub2Sub1MoneyPageMoneyChild,
            cleanUrlJasaKonsAlatKonstruksiPost,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Jasa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-alat-konstruksi.html' },
                { name: 'Perbandingan Jasa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-alat-konstruksi.html' },
                { name: 'Estimasi Biaya Jasa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/estimasi-biaya-jasa-alat-konstruksi.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }
    if (urlMappingJasaAlatKonstruksiBridgeFromMoneyPage1MoneyPage2[cleanUrlJasaKonsAlatKonstruksiPost]) {
        generateBreadcrumbShared(
            urlMappingJasaAlatKonstruksiBridgeFromMoneyPage1MoneyPage2,
            cleanUrlJasaKonsAlatKonstruksiPost,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Jasa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-alat-konstruksi.html' },
                { name: 'Perbandingan Jasa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-alat-konstruksi.html' },
                { name: 'Estimasi Biaya Jasa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/estimasi-biaya-jasa-alat-konstruksi.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }
    if (urlMappingJasaAlatKonstruksiBridgeFromMoneyPage1Variant[cleanUrlJasaKonsAlatKonstruksiPost]) {
        generateBreadcrumbShared(
            urlMappingJasaAlatKonstruksiBridgeFromMoneyPage1Variant,
            cleanUrlJasaKonsAlatKonstruksiPost,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Jasa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-alat-konstruksi.html' },
                { name: 'Perbandingan Jasa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-alat-konstruksi.html' },
                { name: 'Estimasi Biaya Jasa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/estimasi-biaya-jasa-alat-konstruksi.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }
    // ────────────────────────────────────────────────────────────
    // [BAGIAN 4.4] SEWA ALAT PROYEK (MASTER)
    // ────────────────────────────────────────────────────────────
    if (urlMappingSewaAlatProyekFromMoneyMasterMoneyPage[cleanUrlJasaKonsAlatKonstruksiPost]) {
        generateBreadcrumbShared(
            urlMappingSewaAlatProyekFromMoneyMasterMoneyPage,
            cleanUrlJasaKonsAlatKonstruksiPost,
            [
                { name: 'Sewa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/sewa-alat-konstruksi.html' },
                { name: 'Daftar Sewa Alat Proyek', url: 'https://www.betonjayareadymix.com/p/daftar-sewa-alat-proyek.html' },
                { name: 'Perbandingan Sewa Alat Proyek', url: 'https://www.betonjayareadymix.com/p/perbandingan-sewa-alat-proyek.html' },
                { name: 'Sewa Alat Proyek', url: 'https://www.betonjayareadymix.com/p/sewa-alat-proyek.html' }
            ],
            'SEWA_RENTAL'
        );
    }
    if (urlMappingSewaAlatProyekFromMoneyMasterMoneyChild[cleanUrlJasaKonsAlatKonstruksiPost]) {
        generateBreadcrumbShared(
            urlMappingSewaAlatProyekFromMoneyMasterMoneyChild,
            cleanUrlJasaKonsAlatKonstruksiPost,
            [
                { name: 'Sewa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/sewa-alat-konstruksi.html' },
                { name: 'Daftar Sewa Alat Proyek', url: 'https://www.betonjayareadymix.com/p/daftar-sewa-alat-proyek.html' },
                { name: 'Perbandingan Sewa Alat Proyek', url: 'https://www.betonjayareadymix.com/p/perbandingan-sewa-alat-proyek.html' },
                { name: 'Sewa Alat Proyek', url: 'https://www.betonjayareadymix.com/p/sewa-alat-proyek.html' }
            ],
            'SEWA_RENTAL'
        );
    }

    // ────────────────────────────────────────────────────────────
    // [BAGIAN 4.5] SEWA POMPA DEWATERING
    // ────────────────────────────────────────────────────────────
    if (urlMappingSewaPompaDewateringFromMoneyMaster1MoneyPage[cleanUrlJasaKonsAlatKonstruksiPost]) {
        generateBreadcrumbShared(
            urlMappingSewaPompaDewateringFromMoneyMaster1MoneyPage,
            cleanUrlJasaKonsAlatKonstruksiPost,
            [
                { name: 'Sewa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/sewa-alat-konstruksi.html' },
                { name: 'Daftar Sewa Alat Pendukung', url: 'https://www.betonjayareadymix.com/p/daftar-sewa-alat-pendukung.html' },
                { name: 'Perbandingan Sewa Alat Pendukung', url: 'https://www.betonjayareadymix.com/p/perbandingan-sewa-alat-pendukung.html' },
                { name: 'Sewa Alat Pendukung', url: 'https://www.betonjayareadymix.com/p/sewa-alat-pendukung.html' },
                { name: 'Sewa Pompa Dewatering', url: 'https://www.betonjayareadymix.com/p/sewa-pompa-dewatering.html' }
            ],
            'SEWA_RENTAL'
        );
    }
    if (urlMappingSewaPompaDewateringFromMoneyPageMoneyChild[cleanUrlJasaKonsAlatKonstruksiPost]) {
        generateBreadcrumbShared(
            urlMappingSewaPompaDewateringFromMoneyPageMoneyChild,
            cleanUrlJasaKonsAlatKonstruksiPost,
            [
                { name: 'Sewa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/sewa-alat-konstruksi.html' },
                { name: 'Daftar Sewa Alat Pendukung', url: 'https://www.betonjayareadymix.com/p/daftar-sewa-alat-pendukung.html' },
                { name: 'Perbandingan Sewa Alat Pendukung', url: 'https://www.betonjayareadymix.com/p/perbandingan-sewa-alat-pendukung.html' },
                { name: 'Sewa Alat Pendukung', url: 'https://www.betonjayareadymix.com/p/sewa-alat-pendukung.html' },
                { name: 'Sewa Pompa Dewatering', url: 'https://www.betonjayareadymix.com/p/sewa-pompa-dewatering.html' }
            ],
            'SEWA_RENTAL'
        );
    }
    if (urlMappingSewaPompaDewateringFromMoneyChildVariant[cleanUrlJasaKonsAlatKonstruksiPost]) {
        console.log('[jasa-alat-konstruksi-post] 🔧 Variant page detected — removing breadcrumbs...');
        removeBreadcrumbNavigation();
        removeBreadcrumbJsonLd();
        hideBreadcrumbWithCss();
    }

    // ────────────────────────────────────────────────────────────
    // [BAGIAN 4.6] SEWA POMPA AIR
    // ────────────────────────────────────────────────────────────
    if (urlMappingSewaPompaAirFromMoneyMaster1MoneyPage[cleanUrlJasaKonsAlatKonstruksiPost]) {
        generateBreadcrumbShared(
            urlMappingSewaPompaAirFromMoneyMaster1MoneyPage,
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
    if (urlMappingSewaPompaAirFromMoneyMasterMoneyChild[cleanUrlJasaKonsAlatKonstruksiPost]) {
        generateBreadcrumbShared(
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
    if (urlMappingSewaPompaAirDieselFromMoneyMaster1MoneyPage[cleanUrlJasaKonsAlatKonstruksiPost]) {
        generateBreadcrumbShared(
            urlMappingSewaPompaAirDieselFromMoneyMaster1MoneyPage,
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
    if (urlMappingSewaPompaAirDieselFromMoneyMaster1MoneyChild[cleanUrlJasaKonsAlatKonstruksiPost]) {
        generateBreadcrumbShared(
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
        console.log('[jasa-alat-konstruksi-post] 🔧 Variant page detected — removing breadcrumbs...');
        removeBreadcrumbNavigation();
        removeBreadcrumbJsonLd();
        hideBreadcrumbWithCss();
    }
    if (urlMappingSewaMesinPompaAirFromMoneyChildVariant[cleanUrlJasaKonsAlatKonstruksiPost]) {
        console.log('[jasa-alat-konstruksi-post] 🔧 Variant page detected — removing breadcrumbs...');
        removeBreadcrumbNavigation();
        removeBreadcrumbJsonLd();
        hideBreadcrumbWithCss();
    }

    // ────────────────────────────────────────────────────────────
    // [BAGIAN 4.7] SEWA POMPA LUMPUR
    // ────────────────────────────────────────────────────────────
    if (urlMappingSewaPompaLumpurFromMoneyMaster1MoneyPage[cleanUrlJasaKonsAlatKonstruksiPost]) {
        generateBreadcrumbShared(
            urlMappingSewaPompaLumpurFromMoneyMaster1MoneyPage,
            cleanUrlJasaKonsAlatKonstruksiPost,
            [
                { name: 'Sewa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/sewa-alat-konstruksi.html' },
                { name: 'Daftar Sewa Alat Pendukung', url: 'https://www.betonjayareadymix.com/p/daftar-sewa-alat-pendukung.html' },
                { name: 'Perbandingan Sewa Alat Pendukung', url: 'https://www.betonjayareadymix.com/p/perbandingan-sewa-alat-pendukung.html' },
                { name: 'Sewa Alat Pendukung', url: 'https://www.betonjayareadymix.com/p/sewa-alat-pendukung.html' },
                { name: 'Sewa Pompa Lumpur', url: 'https://www.betonjayareadymix.com/p/sewa-pompa-lumpur.html' }
            ],
            'SEWA_RENTAL'
        );
    }
    if (urlMappingSewaPompaLumpurFromMoneyMasterMoneyChild[cleanUrlJasaKonsAlatKonstruksiPost]) {
        generateBreadcrumbShared(
            urlMappingSewaPompaLumpurFromMoneyMasterMoneyChild,
            cleanUrlJasaKonsAlatKonstruksiPost,
            [
                { name: 'Sewa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/sewa-alat-konstruksi.html' },
                { name: 'Daftar Sewa Alat Pendukung', url: 'https://www.betonjayareadymix.com/p/daftar-sewa-alat-pendukung.html' },
                { name: 'Perbandingan Sewa Alat Pendukung', url: 'https://www.betonjayareadymix.com/p/perbandingan-sewa-alat-pendukung.html' },
                { name: 'Sewa Alat Pendukung', url: 'https://www.betonjayareadymix.com/p/sewa-alat-pendukung.html' },
                { name: 'Sewa Pompa Lumpur', url: 'https://www.betonjayareadymix.com/p/sewa-pompa-lumpur.html' }
            ],
            'SEWA_RENTAL'
        );
    }
    if (urlMappingSewaPompaLumpurFromMoneyChildVariant[cleanUrlJasaKonsAlatKonstruksiPost]) {
        console.log('[jasa-alat-konstruksi-post] 🔧 Variant page detected — removing breadcrumbs...');
        removeBreadcrumbNavigation();
        removeBreadcrumbJsonLd();
        hideBreadcrumbWithCss();
    }
    if (urlMappingSewaPompaSedotLumpurFromMoneyMaster1MoneyChild[cleanUrlJasaKonsAlatKonstruksiPost]) {
        generateBreadcrumbShared(
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
        console.log('[jasa-alat-konstruksi-post] 🔧 Variant page detected — removing breadcrumbs...');
        removeBreadcrumbNavigation();
        removeBreadcrumbJsonLd();
        hideBreadcrumbWithCss();
    }
    if (urlMappingSewaPompaBanjirFromMoneyMaster1MoneyChild[cleanUrlJasaKonsAlatKonstruksiPost]) {
        generateBreadcrumbShared(
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
        console.log('[jasa-alat-konstruksi-post] 🔧 Variant page detected — removing breadcrumbs...');
        removeBreadcrumbNavigation();
        removeBreadcrumbJsonLd();
        hideBreadcrumbWithCss();
    }
    if (urlMappingSewaPompaKapasitasBesarFromMoneyMaster1MoneyChild[cleanUrlJasaKonsAlatKonstruksiPost]) {
        generateBreadcrumbShared(
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
        console.log('[jasa-alat-konstruksi-post] 🔧 Variant page detected — removing breadcrumbs...');
        removeBreadcrumbNavigation();
        removeBreadcrumbJsonLd();
        hideBreadcrumbWithCss();
    }

    // ────────────────────────────────────────────────────────────
    // [BAGIAN 4.8] SEWA BAK AIR PROYEK
    // ────────────────────────────────────────────────────────────
    if (urlMappingSewaBakAirProyekFromMoneyMaster1MoneyChild[cleanUrlJasaKonsAlatKonstruksiPost]) {
        generateBreadcrumbShared(
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
        console.log('[jasa-alat-konstruksi-post] 🔧 Variant page detected — removing breadcrumbs...');
        removeBreadcrumbNavigation();
        removeBreadcrumbJsonLd();
        hideBreadcrumbWithCss();
    }

    // ────────────────────────────────────────────────────────────
    // [BAGIAN 4.9] SEWA BEKISTING
    // ────────────────────────────────────────────────────────────
    if (urlMappingSewaBekistingFromMoneyMaster1MoneyPage[cleanUrlJasaKonsAlatKonstruksiPost]) {
        generateBreadcrumbShared(
            urlMappingSewaBekistingFromMoneyMaster1MoneyPage,
            cleanUrlJasaKonsAlatKonstruksiPost,
            [
                { name: 'Sewa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/sewa-alat-konstruksi.html' },
                { name: 'Daftar Sewa Alat Pendukung', url: 'https://www.betonjayareadymix.com/p/daftar-sewa-alat-pendukung.html' },
                { name: 'Perbandingan Sewa Alat Pendukung', url: 'https://www.betonjayareadymix.com/p/perbandingan-sewa-alat-pendukung.html' },
                { name: 'Sewa Alat Pendukung', url: 'https://www.betonjayareadymix.com/p/sewa-alat-pendukung.html' },
                { name: 'Sewa Bekisting', url: 'https://www.betonjayareadymix.com/p/sewa-bekisting.html' }
            ],
            'SEWA_RENTAL'
        );
    }

    // ────────────────────────────────────────────────────────────
    // [BAGIAN 4.10] SEWA SCAFFOLDING
    // ────────────────────────────────────────────────────────────
    if (urlMappingSewaScaffoldingFromMoneyMasterMoneyPage[cleanUrlJasaKonsAlatKonstruksiPost]) {
        generateBreadcrumbShared(
            urlMappingSewaScaffoldingFromMoneyMasterMoneyPage,
            cleanUrlJasaKonsAlatKonstruksiPost,
            [
                { name: 'Sewa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/sewa-alat-konstruksi.html' },
                { name: 'Daftar Sewa Alat Pendukung', url: 'https://www.betonjayareadymix.com/p/daftar-sewa-alat-pendukung.html' },
                { name: 'Perbandingan Sewa Alat Pendukung', url: 'https://www.betonjayareadymix.com/p/perbandingan-sewa-alat-pendukung.html' },
                { name: 'Sewa Alat Pendukung', url: 'https://www.betonjayareadymix.com/p/sewa-alat-pendukung.html' },
                { name: 'Sewa Scaffolding', url: 'https://www.betonjayareadymix.com/p/sewa-scaffolding.html' }
            ],
            'SEWA_RENTAL'
        );
    }
    if (urlMappingSewaScaffoldingFromMoneyMasterMoneyChild[cleanUrlJasaKonsAlatKonstruksiPost]) {
        generateBreadcrumbShared(
            urlMappingSewaScaffoldingFromMoneyMasterMoneyChild,
            cleanUrlJasaKonsAlatKonstruksiPost,
            [
                { name: 'Sewa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/sewa-alat-konstruksi.html' },
                { name: 'Daftar Sewa Alat Pendukung', url: 'https://www.betonjayareadymix.com/p/daftar-sewa-alat-pendukung.html' },
                { name: 'Perbandingan Sewa Alat Pendukung', url: 'https://www.betonjayareadymix.com/p/perbandingan-sewa-alat-pendukung.html' },
                { name: 'Sewa Alat Pendukung', url: 'https://www.betonjayareadymix.com/p/sewa-alat-pendukung.html' },
                { name: 'Sewa Scaffolding', url: 'https://www.betonjayareadymix.com/p/sewa-scaffolding.html' }
            ],
            'SEWA_RENTAL'
        );
    }

    // ────────────────────────────────────────────────────────────
    // [BAGIAN 4.11] SEWA PENCAHAYAAN PROYEK
    // ────────────────────────────────────────────────────────────
    if (urlMappingSewaPencahayaanProyekFromMoneyMaster1MoneyMaster2[cleanUrlJasaKonsAlatKonstruksiPost]) {
        generateBreadcrumbShared(
            urlMappingSewaPencahayaanProyekFromMoneyMaster1MoneyMaster2,
            cleanUrlJasaKonsAlatKonstruksiPost,
            [
                { name: 'Sewa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/sewa-alat-konstruksi.html' },
                { name: 'Daftar Sewa Alat Pendukung', url: 'https://www.betonjayareadymix.com/p/daftar-sewa-alat-pendukung.html' },
                { name: 'Perbandingan Sewa Alat Pendukung', url: 'https://www.betonjayareadymix.com/p/perbandingan-sewa-alat-pendukung.html' },
                { name: 'Sewa Alat Pendukung', url: 'https://www.betonjayareadymix.com/p/sewa-alat-pendukung.html' },
                { name: 'Sewa Pencahayaan Proyek', url: 'https://www.betonjayareadymix.com/p/sewa-pencahayaan-proyek.html' }
            ],
            'SEWA_RENTAL'
        );
    }
    if (urlMappingSewaTowerLampFromMoneyMaster1MoneyChild[cleanUrlJasaKonsAlatKonstruksiPost]) {
        generateBreadcrumbShared(
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
    if (urlMappingSewaLampuSorotFromMoneyMaster1MoneyChild[cleanUrlJasaKonsAlatKonstruksiPost]) {
        generateBreadcrumbShared(
            urlMappingSewaLampuSorotFromMoneyMaster1MoneyChild,
            cleanUrlJasaKonsAlatKonstruksiPost,
            [
                { name: 'Sewa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/sewa-alat-konstruksi.html' },
                { name: 'Daftar Sewa Alat Pendukung', url: 'https://www.betonjayareadymix.com/p/daftar-sewa-alat-pendukung.html' },
                { name: 'Perbandingan Sewa Alat Pendukung', url: 'https://www.betonjayareadymix.com/p/perbandingan-sewa-alat-pendukung.html' },
                { name: 'Sewa Alat Pendukung', url: 'https://www.betonjayareadymix.com/p/sewa-alat-pendukung.html' },
                { name: 'Sewa Pencahayaan Proyek', url: 'https://www.betonjayareadymix.com/p/sewa-pencahayaan-proyek.html' },
                { name: 'Sewa Lampu Sorot', url: 'https://www.betonjayareadymix.com/2019/03/sewa-lampu-sorot.html' }
            ],
            'SEWA_RENTAL'
        );
    }
    if (urlMappingSewaLampuTembakFromMoneyMaster1MoneyChild[cleanUrlJasaKonsAlatKonstruksiPost]) {
        generateBreadcrumbShared(
            urlMappingSewaLampuTembakFromMoneyMaster1MoneyChild,
            cleanUrlJasaKonsAlatKonstruksiPost,
            [
                { name: 'Sewa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/sewa-alat-konstruksi.html' },
                { name: 'Daftar Sewa Alat Pendukung', url: 'https://www.betonjayareadymix.com/p/daftar-sewa-alat-pendukung.html' },
                { name: 'Perbandingan Sewa Alat Pendukung', url: 'https://www.betonjayareadymix.com/p/perbandingan-sewa-alat-pendukung.html' },
                { name: 'Sewa Alat Pendukung', url: 'https://www.betonjayareadymix.com/p/sewa-alat-pendukung.html' },
                { name: 'Sewa Pencahayaan Proyek', url: 'https://www.betonjayareadymix.com/p/sewa-pencahayaan-proyek.html' },
                { name: 'Sewa Lampu Tembak', url: 'https://www.betonjayareadymix.com/2019/03/sewa-lampu-tembak.html' }
            ],
            'SEWA_RENTAL'
        );
    }
    if (urlMappingSewaLampuProyekFromMoneyMaster1MoneyChild[cleanUrlJasaKonsAlatKonstruksiPost]) {
        generateBreadcrumbShared(
            urlMappingSewaLampuProyekFromMoneyMaster1MoneyChild,
            cleanUrlJasaKonsAlatKonstruksiPost,
            [
                { name: 'Sewa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/sewa-alat-konstruksi.html' },
                { name: 'Daftar Sewa Alat Pendukung', url: 'https://www.betonjayareadymix.com/p/daftar-sewa-alat-pendukung.html' },
                { name: 'Perbandingan Sewa Alat Pendukung', url: 'https://www.betonjayareadymix.com/p/perbandingan-sewa-alat-pendukung.html' },
                { name: 'Sewa Alat Pendukung', url: 'https://www.betonjayareadymix.com/p/sewa-alat-pendukung.html' },
                { name: 'Sewa Pencahayaan Proyek', url: 'https://www.betonjayareadymix.com/p/sewa-pencahayaan-proyek.html' },
                { name: 'Sewa Lampu Proyek', url: 'https://www.betonjayareadymix.com/2019/03/sewa-lampu-proyek.html' }
            ],
            'SEWA_RENTAL'
        );
    }
    if (urlMappingSewaPanelListrikFromMoneyMaster1MoneyChild[cleanUrlJasaKonsAlatKonstruksiPost]) {
        generateBreadcrumbShared(
            urlMappingSewaPanelListrikFromMoneyMaster1MoneyChild,
            cleanUrlJasaKonsAlatKonstruksiPost,
            [
                { name: 'Sewa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/sewa-alat-konstruksi.html' },
                { name: 'Daftar Sewa Alat Pendukung', url: 'https://www.betonjayareadymix.com/p/daftar-sewa-alat-pendukung.html' },
                { name: 'Perbandingan Sewa Alat Pendukung', url: 'https://www.betonjayareadymix.com/p/perbandingan-sewa-alat-pendukung.html' },
                { name: 'Sewa Alat Pendukung', url: 'https://www.betonjayareadymix.com/p/sewa-alat-pendukung.html' },
                { name: 'Sewa Pencahayaan Proyek', url: 'https://www.betonjayareadymix.com/p/sewa-pencahayaan-proyek.html' },
                { name: 'Sewa Panel Listrik', url: 'https://www.betonjayareadymix.com/2019/03/sewa-panel-listrik.html' }
            ],
            'SEWA_RENTAL'
        );
    }

    // ────────────────────────────────────────────────────────────
    // [BAGIAN 4.12] SEWA ALAT SURVEY
    // ────────────────────────────────────────────────────────────
    if (urlMappingSewaAlatSurveyFromMoneyMaster1MoneyMaster2[cleanUrlJasaKonsAlatKonstruksiPost]) {
        generateBreadcrumbShared(
            urlMappingSewaAlatSurveyFromMoneyMaster1MoneyMaster2,
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
    if (urlMappingSewaAlatSurveyFromMoneyMaster1MoneyPage[cleanUrlJasaKonsAlatKonstruksiPost]) {
        generateBreadcrumbShared(
            urlMappingSewaAlatSurveyFromMoneyMaster1MoneyPage,
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
    if (urlMappingSewaAlatSurveyFromMoneyMaster1MoneyChild[cleanUrlJasaKonsAlatKonstruksiPost]) {
        generateBreadcrumbShared(
            urlMappingSewaAlatSurveyFromMoneyMaster1MoneyChild,
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
    if (urlMappingSewaTotalStationFromMoneyMaster1MoneyChild[cleanUrlJasaKonsAlatKonstruksiPost]) {
        generateBreadcrumbShared(
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
        generateBreadcrumbShared(
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
        generateBreadcrumbShared(
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

    // ────────────────────────────────────────────────────────────
    // [BAGIAN 4.13] SEWA ALAT BOR
    // ────────────────────────────────────────────────────────────
    if (urlMappingSewaAlatBorFromMoneyMasterMoneyMaster1[cleanUrlJasaKonsAlatKonstruksiPost]) {
        generateBreadcrumbShared(
            urlMappingSewaAlatBorFromMoneyMasterMoneyMaster1,
            cleanUrlJasaKonsAlatKonstruksiPost,
            [
                { name: 'Sewa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/sewa-alat-konstruksi.html' },
                { name: 'Daftar Sewa Alat Pendukung', url: 'https://www.betonjayareadymix.com/p/daftar-sewa-alat-pendukung.html' },
                { name: 'Perbandingan Sewa Alat Pendukung', url: 'https://www.betonjayareadymix.com/p/perbandingan-sewa-alat-pendukung.html' },
                { name: 'Sewa Alat Pendukung', url: 'https://www.betonjayareadymix.com/p/sewa-alat-pendukung.html' },
                { name: 'Sewa Alat Bor', url: 'https://www.betonjayareadymix.com/p/sewa-alat-bor.html' }
            ],
            'SEWA_ALAT_KONSTRUKSI'
        );
    }
    if (urlMappingSewaAlatBorFromMoneyMasterMoneyPage[cleanUrlJasaKonsAlatKonstruksiPost]) {
        generateBreadcrumbShared(
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
    if (urlMappingSewaAlatBorFromMoneyMasterMoneyChild[cleanUrlJasaKonsAlatKonstruksiPost]) {
        generateBreadcrumbShared(
            urlMappingSewaAlatBorFromMoneyMasterMoneyChild,
            cleanUrlJasaKonsAlatKonstruksiPost,
            [
                { name: 'Sewa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/sewa-alat-konstruksi.html' },
                { name: 'Daftar Sewa Alat Pendukung', url: 'https://www.betonjayareadymix.com/p/daftar-sewa-alat-pendukung.html' },
                { name: 'Perbandingan Sewa Alat Pendukung', url: 'https://www.betonjayareadymix.com/p/perbandingan-sewa-alat-pendukung.html' },
                { name: 'Sewa Alat Pendukung', url: 'https://www.betonjayareadymix.com/p/sewa-alat-pendukung.html' },
                { name: 'Sewa Alat Bor', url: 'https://www.betonjayareadymix.com/p/sewa-alat-bor.html' }
            ],
            'SEWA_RENTAL'
        );
    }
    if (urlMappingSewaBorTanahFromMoneyMaster1MoneyChild[cleanUrlJasaKonsAlatKonstruksiPost]) {
        generateBreadcrumbShared(
            urlMappingSewaBorTanahFromMoneyMaster1MoneyChild,
            cleanUrlJasaKonsAlatKonstruksiPost,
            [
                { name: 'Sewa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/sewa-alat-konstruksi.html' },
                { name: 'Daftar Sewa Alat Pendukung', url: 'https://www.betonjayareadymix.com/p/daftar-sewa-alat-pendukung.html' },
                { name: 'Perbandingan Sewa Alat Pendukung', url: 'https://www.betonjayareadymix.com/p/perbandingan-sewa-alat-pendukung.html' },
                { name: 'Sewa Alat Pendukung', url: 'https://www.betonjayareadymix.com/p/sewa-alat-pendukung.html' },
                { name: 'Sewa Alat Bor', url: 'https://www.betonjayareadymix.com/p/sewa-alat-bor.html' }
            ],
            'SEWA_RENTAL'
        );
    }

    // ────────────────────────────────────────────────────────────
    // [BAGIAN 4.14] SEWA AKSES KEAMANAN
    // ────────────────────────────────────────────────────────────
    if (urlMappingSewaAksesKeamananFromMoneyMaster1MoneyMaster2[cleanUrlJasaKonsAlatKonstruksiPost]) {
        generateBreadcrumbShared(
            urlMappingSewaAksesKeamananFromMoneyMaster1MoneyMaster2,
            cleanUrlJasaKonsAlatKonstruksiPost,
            [
                { name: 'Sewa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/sewa-alat-konstruksi.html' },
                { name: 'Daftar Sewa Alat Pendukung', url: 'https://www.betonjayareadymix.com/p/daftar-sewa-alat-pendukung.html' },
                { name: 'Perbandingan Sewa Alat Pendukung', url: 'https://www.betonjayareadymix.com/p/perbandingan-sewa-alat-pendukung.html' },
                { name: 'Sewa Alat Pendukung', url: 'https://www.betonjayareadymix.com/p/sewa-alat-pendukung.html' },
                { name: 'Sewa Akses Keamanan', url: 'https://www.betonjayareadymix.com/p/sewa-akses-keamanan.html' }
            ],
            'SEWA_RENTAL'
        );
    }
    if (urlMappingSewaAksesKeamananFromMoneyMaster1MoneyPage[cleanUrlJasaKonsAlatKonstruksiPost]) {
        generateBreadcrumbShared(
            urlMappingSewaAksesKeamananFromMoneyMaster1MoneyPage,
            cleanUrlJasaKonsAlatKonstruksiPost,
            [
                { name: 'Sewa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/sewa-alat-konstruksi.html' },
                { name: 'Daftar Sewa Alat Pendukung', url: 'https://www.betonjayareadymix.com/p/daftar-sewa-alat-pendukung.html' },
                { name: 'Perbandingan Sewa Alat Pendukung', url: 'https://www.betonjayareadymix.com/p/perbandingan-sewa-alat-pendukung.html' },
                { name: 'Sewa Alat Pendukung', url: 'https://www.betonjayareadymix.com/p/sewa-alat-pendukung.html' },
                { name: 'Sewa Akses Keamanan', url: 'https://www.betonjayareadymix.com/p/sewa-akses-keamanan.html' }
            ],
            'SEWA_RENTAL'
        );
    }

    // ────────────────────────────────────────────────────────────
    // [BAGIAN 4.15] SEWA SELANG PROYEK
    // ────────────────────────────────────────────────────────────
    if (urlMappingSewaSelangProyekFromMoneyMasterMoneyMaster1[cleanUrlJasaKonsAlatKonstruksiPost]) {
        generateBreadcrumbShared(
            urlMappingSewaSelangProyekFromMoneyMasterMoneyMaster1,
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
    if (urlMappingSewaSelangProyekFromMoneyMasterMoneyChild[cleanUrlJasaKonsAlatKonstruksiPost]) {
        generateBreadcrumbShared(
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
        console.log('[jasa-alat-konstruksi-post] 🔧 Variant page detected — removing breadcrumbs...');
        removeBreadcrumbNavigation();
        removeBreadcrumbJsonLd();
        hideBreadcrumbWithCss();
    }

    // ────────────────────────────────────────────────────────────
    // [BAGIAN 4.16] SEWA PIPA PROYEK
    // ────────────────────────────────────────────────────────────
    if (urlMappingSewaPipaProyekFromMoneyMasterMoneyMaster1[cleanUrlJasaKonsAlatKonstruksiPost]) {
        generateBreadcrumbShared(
            urlMappingSewaPipaProyekFromMoneyMasterMoneyMaster1,
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
    if (urlMappingSewaPipaProyekFromMoneyMasterMoneyChild[cleanUrlJasaKonsAlatKonstruksiPost]) {
        generateBreadcrumbShared(
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
        console.log('[jasa-alat-konstruksi-post] 🔧 Variant page detected — removing breadcrumbs...');
        removeBreadcrumbNavigation();
        removeBreadcrumbJsonLd();
        hideBreadcrumbWithCss();
    }

    // ────────────────────────────────────────────────────────────
    // [BAGIAN 4.17] SEWA TANGKI AIR
    // ────────────────────────────────────────────────────────────
    if (urlMappingSewaTangkiAirFromMoneyMasterMoneyMaster1[cleanUrlJasaKonsAlatKonstruksiPost]) {
        generateBreadcrumbShared(
            urlMappingSewaTangkiAirFromMoneyMasterMoneyMaster1,
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
    if (urlMappingSewaTangkiAirFromMoneyMasterMoneyChild[cleanUrlJasaKonsAlatKonstruksiPost]) {
        generateBreadcrumbShared(
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
        console.log('[jasa-alat-konstruksi-post] 🔧 Variant page detected — removing breadcrumbs...');
        removeBreadcrumbNavigation();
        removeBreadcrumbJsonLd();
        hideBreadcrumbWithCss();
    }

    // ────────────────────────────────────────────────────────────
    // [BAGIAN 4.18] SEWA ALAT BERAT (MASTER)
    // ────────────────────────────────────────────────────────────
    if (urlMappingSewaAlatBeratPostFromMoneyMasterMoneyPage[cleanUrlJasaKonsAlatKonstruksiPost]) {
        generateBreadcrumbShared(
            urlMappingSewaAlatBeratPostFromMoneyMasterMoneyPage,
            cleanUrlJasaKonsAlatKonstruksiPost,
            [
                { name: 'Sewa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/sewa-alat-konstruksi.html' },
                { name: 'Sewa Alat Berat', url: 'https://www.betonjayareadymix.com/p/sewa-alat-berat.html' },
                { name: 'Perbandingan Sewa Alat Berat', url: 'https://www.betonjayareadymix.com/p/perbandingan-sewa-alat-berat.html' },
                { name: 'Sewa Alat Berat', url: 'https://www.betonjayareadymix.com/p/sewa-alat-berat.html' }
            ],
            'SEWA_RENTAL'
        );
    }
    if (urlMappingSewaAlatBeratPostFromMoneyMasterMoneyChild[cleanUrlJasaKonsAlatKonstruksiPost]) {
        generateBreadcrumbShared(
            urlMappingSewaAlatBeratPostFromMoneyMasterMoneyChild,
            cleanUrlJasaKonsAlatKonstruksiPost,
            [
                { name: 'Sewa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/sewa-alat-konstruksi.html' },
                { name: 'Daftar Sewa Alat Berat', url: 'https://www.betonjayareadymix.com/p/daftar-sewa-alat-berat.html' },
                { name: 'Perbandingan Sewa Alat Berat', url: 'https://www.betonjayareadymix.com/p/perbandingan-sewa-alat-berat.html' },
                { name: 'Sewa Alat Berat', url: 'https://www.betonjayareadymix.com/p/sewa-alat-berat.html' }
            ],
            'SEWA_RENTAL'
        );
    }

    // ────────────────────────────────────────────────────────────
    // [BAGIAN 4.19] SEWA ALAT BERAT SPESIFIK
    // ────────────────────────────────────────────────────────────
    if (urlMappingSewaforkliftPostFromMoneyMasterMoneyPage[cleanUrlJasaKonsAlatKonstruksiPost]) {
        generateBreadcrumbShared(
            urlMappingSewaforkliftPostFromMoneyMasterMoneyPage,
            cleanUrlJasaKonsAlatKonstruksiPost,
            [
                { name: 'Sewa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/sewa-alat-konstruksi.html' },
                { name: 'Daftar Sewa Alat Berat', url: 'https://www.betonjayareadymix.com/p/daftar-sewa-alat-berat.html' },
                { name: 'Perbandingan Sewa Forklift', url: 'https://www.betonjayareadymix.com/p/perbandingan-sewa-forklift.html' },
                { name: 'Sewa Forklift', url: 'https://www.betonjayareadymix.com/p/sewa-forklift.html' }
            ],
            'SEWA_RENTAL'
        );
    }
    if (urlMappingSewaCranePostFromMoneyMasterMoneyPage[cleanUrlJasaKonsAlatKonstruksiPost]) {
        generateBreadcrumbShared(
            urlMappingSewaCranePostFromMoneyMasterMoneyPage,
            cleanUrlJasaKonsAlatKonstruksiPost,
            [
                { name: 'Sewa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/sewa-alat-konstruksi.html' },
                { name: 'Daftar Sewa Alat Berat', url: 'https://www.betonjayareadymix.com/p/daftar-sewa-alat-berat.html' },
                { name: 'Perbandingan Sewa Crane', url: 'https://www.betonjayareadymix.com/p/perbandingan-sewa-crane.html' },
                { name: 'Sewa Crane', url: 'https://www.betonjayareadymix.com/p/sewa-crane.html' }
            ],
            'SEWA_RENTAL'
        );
    }
    if (urlMappingSewaSelfLoaderPostFromMoneyMasterMoneyPage[cleanUrlJasaKonsAlatKonstruksiPost]) {
        generateBreadcrumbShared(
            urlMappingSewaSelfLoaderPostFromMoneyMasterMoneyPage,
            cleanUrlJasaKonsAlatKonstruksiPost,
            [
                { name: 'Sewa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/sewa-alat-konstruksi.html' },
                { name: 'Daftar Sewa Alat Berat', url: 'https://www.betonjayareadymix.com/p/daftar-sewa-alat-berat.html' },
                { name: 'Perbandingan Sewa Self Loader', url: 'https://www.betonjayareadymix.com/p/perbandingan-sewa-self-loader.html' },
                { name: 'Sewa Self Loader', url: 'https://www.betonjayareadymix.com/p/sewa-self-loader.html' }
            ],
            'SEWA_RENTAL'
        );
    }
    if (urlMappingSewaWheelLoaderPostFromMoneyMasterMoneyPage[cleanUrlJasaKonsAlatKonstruksiPost]) {
        generateBreadcrumbShared(
            urlMappingSewaWheelLoaderPostFromMoneyMasterMoneyPage,
            cleanUrlJasaKonsAlatKonstruksiPost,
            [
                { name: 'Sewa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/sewa-alat-konstruksi.html' },
                { name: 'Daftar Sewa Alat Berat', url: 'https://www.betonjayareadymix.com/p/daftar-sewa-alat-berat.html' },
                { name: 'Perbandingan Sewa Wheel Loader', url: 'https://www.betonjayareadymix.com/p/perbandingan-sewa-wheel-loader.html' },
                { name: 'Sewa Wheel Loader', url: 'https://www.betonjayareadymix.com/p/sewa-wheel-loader.html' }
            ],
            'SEWA_RENTAL'
        );
    }
    if (urlMappingSewaVibroRollerPostFromMoneyMasterMoneyPage[cleanUrlJasaKonsAlatKonstruksiPost]) {
        generateBreadcrumbShared(
            urlMappingSewaVibroRollerPostFromMoneyMasterMoneyPage,
            cleanUrlJasaKonsAlatKonstruksiPost,
            [
                { name: 'Sewa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/sewa-alat-konstruksi.html' },
                { name: 'Daftar Sewa Alat Berat', url: 'https://www.betonjayareadymix.com/p/daftar-sewa-alat-berat.html' },
                { name: 'Perbandingan Sewa Vibro Roller', url: 'https://www.betonjayareadymix.com/p/perbandingan-sewa-vibro-roller.html' },
                { name: 'Sewa Vibro Roller', url: 'https://www.betonjayareadymix.com/p/sewa-vibro-roller.html' }
            ],
            'SEWA_RENTAL'
        );
    }
    if (urlMappingSewaWalesStoomPostFromMoneyMasterMoneyPage[cleanUrlJasaKonsAlatKonstruksiPost]) {
        generateBreadcrumbShared(
            urlMappingSewaWalesStoomPostFromMoneyMasterMoneyPage,
            cleanUrlJasaKonsAlatKonstruksiPost,
            [
                { name: 'Sewa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/sewa-alat-konstruksi.html' },
                { name: 'Daftar Sewa Alat Berat', url: 'https://www.betonjayareadymix.com/p/daftar-sewa-alat-berat.html' },
                { name: 'Perbandingan Sewa Wales Stoom', url: 'https://www.betonjayareadymix.com/p/perbandingan-sewa-wales-stoom.html' },
                { name: 'Sewa Wales Stoom', url: 'https://www.betonjayareadymix.com/p/sewa-wales-stoom.html' }
            ],
            'SEWA_RENTAL'
        );
    }
    if (urlMappingSewaTandemRollerPostFromMoneyMasterMoneyPage[cleanUrlJasaKonsAlatKonstruksiPost]) {
        generateBreadcrumbShared(
            urlMappingSewaTandemRollerPostFromMoneyMasterMoneyPage,
            cleanUrlJasaKonsAlatKonstruksiPost,
            [
                { name: 'Sewa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/sewa-alat-konstruksi.html' },
                { name: 'Daftar Sewa Alat Berat', url: 'https://www.betonjayareadymix.com/p/daftar-sewa-alat-berat.html' },
                { name: 'Perbandingan Sewa Tandem Roller', url: 'https://www.betonjayareadymix.com/p/perbandingan-sewa-tandem-roller.html' },
                { name: 'Sewa Tandem Roller', url: 'https://www.betonjayareadymix.com/p/sewa-tandem-roller.html' }
            ],
            'SEWA_RENTAL'
        );
    }
    if (urlMappingSewaBulldozerPostFromMoneyMasterMoneyPage[cleanUrlJasaKonsAlatKonstruksiPost]) {
        generateBreadcrumbShared(
            urlMappingSewaBulldozerPostFromMoneyMasterMoneyPage,
            cleanUrlJasaKonsAlatKonstruksiPost,
            [
                { name: 'Sewa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/sewa-alat-konstruksi.html' },
                { name: 'Daftar Sewa Alat Berat', url: 'https://www.betonjayareadymix.com/p/daftar-sewa-alat-berat.html' },
                { name: 'Perbandingan Sewa Bulldozer', url: 'https://www.betonjayareadymix.com/p/perbandingan-sewa-bulldozer.html' },
                { name: 'Sewa Bulldozer', url: 'https://www.betonjayareadymix.com/p/sewa-bulldozer.html' }
            ],
            'SEWA_RENTAL'
        );
    }
    if (urlMappingSewaExcavatorPostFromMoneyMasterMoneyPage[cleanUrlJasaKonsAlatKonstruksiPost]) {
        generateBreadcrumbShared(
            urlMappingSewaExcavatorPostFromMoneyMasterMoneyPage,
            cleanUrlJasaKonsAlatKonstruksiPost,
            [
                { name: 'Sewa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/sewa-alat-konstruksi.html' },
                { name: 'Daftar Sewa Alat Berat', url: 'https://www.betonjayareadymix.com/p/daftar-sewa-alat-berat.html' },
                { name: 'Perbandingan Sewa Excavator', url: 'https://www.betonjayareadymix.com/p/perbandingan-sewa-excavator.html' },
                { name: 'Sewa Excavator', url: 'https://www.betonjayareadymix.com/p/sewa-excavator.html' }
            ],
            'SEWA_RENTAL'
        );
    }
    if (urlMappingSewaExcavatorPostFromMoneyPageMoneyChild[cleanUrlJasaKonsAlatKonstruksiPost]) {
        generateBreadcrumbShared(
            urlMappingSewaExcavatorPostFromMoneyPageMoneyChild,
            cleanUrlJasaKonsAlatKonstruksiPost,
            [
                { name: 'Sewa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/sewa-alat-konstruksi.html' },
                { name: 'Daftar Sewa Alat Berat', url: 'https://www.betonjayareadymix.com/p/daftar-sewa-alat-berat.html' },
                { name: 'Perbandingan Sewa Excavator', url: 'https://www.betonjayareadymix.com/p/perbandingan-sewa-excavator.html' },
                { name: 'Sewa Excavator', url: 'https://www.betonjayareadymix.com/p/sewa-excavator.html' },
                { name: 'Harga Sewa Excavator', url: 'https://www.betonjayareadymix.com/p/harga-sewa-excavator.html' }
            ],
            'SEWA_RENTAL'
        );
    }
    if (urlMappingSewaBackhoeLoaderPostFromMoneyMasterMoneyPage[cleanUrlJasaKonsAlatKonstruksiPost]) {
        generateBreadcrumbShared(
            urlMappingSewaBackhoeLoaderPostFromMoneyMasterMoneyPage,
            cleanUrlJasaKonsAlatKonstruksiPost,
            [
                { name: 'Sewa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/sewa-alat-konstruksi.html' },
                { name: 'Daftar Sewa Alat Berat', url: 'https://www.betonjayareadymix.com/p/daftar-sewa-alat-berat.html' },
                { name: 'Perbandingan Sewa Backhoe Loader', url: 'https://www.betonjayareadymix.com/p/perbandingan-sewa-backhoe-loader.html' },
                { name: 'Sewa Backhoe Loader', url: 'https://www.betonjayareadymix.com/p/sewa-backhoe-loader.html' }
            ],
            'SEWA_RENTAL'
        );
    }
    if (urlMappingSewaBabyRollerPostFromMoneyMasterMoneyPage[cleanUrlJasaKonsAlatKonstruksiPost]) {
        generateBreadcrumbShared(
            urlMappingSewaBabyRollerPostFromMoneyMasterMoneyPage,
            cleanUrlJasaKonsAlatKonstruksiPost,
            [
                { name: 'Sewa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/sewa-alat-konstruksi.html' },
                { name: 'Daftar Sewa Alat Berat', url: 'https://www.betonjayareadymix.com/p/daftar-sewa-alat-berat.html' },
                { name: 'Perbandingan Sewa Baby Roller', url: 'https://www.betonjayareadymix.com/p/perbandingan-sewa-baby-roller.html' },
                { name: 'Sewa Baby Roller', url: 'https://www.betonjayareadymix.com/p/sewa-baby-roller.html' }
            ],
            'SEWA_RENTAL'
        );
    }
    if (urlMappingSewaMotorGraderPostFromMoneyMasterMoneyPage[cleanUrlJasaKonsAlatKonstruksiPost]) {
        generateBreadcrumbShared(
            urlMappingSewaMotorGraderPostFromMoneyMasterMoneyPage,
            cleanUrlJasaKonsAlatKonstruksiPost,
            [
                { name: 'Sewa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/sewa-alat-konstruksi.html' },
                { name: 'Daftar Sewa Alat Berat', url: 'https://www.betonjayareadymix.com/p/daftar-sewa-alat-berat.html' },
                { name: 'Perbandingan Sewa Motor Grader', url: 'https://www.betonjayareadymix.com/p/perbandingan-sewa-motor-grader.html' },
                { name: 'Sewa Motor Grader', url: 'https://www.betonjayareadymix.com/p/sewa-motor-grader.html' }
            ],
            'SEWA_RENTAL'
        );
    }
    if (urlMappingSewaAlatPancangPostFromMoneyMasterMoneyPage[cleanUrlJasaKonsAlatKonstruksiPost]) {
        generateBreadcrumbShared(
            urlMappingSewaAlatPancangPostFromMoneyMasterMoneyPage,
            cleanUrlJasaKonsAlatKonstruksiPost,
            [
                { name: 'Sewa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/sewa-alat-konstruksi.html' },
                { name: 'Daftar Sewa Alat Berat', url: 'https://www.betonjayareadymix.com/p/daftar-sewa-alat-berat.html' },
                { name: 'Perbandingan Sewa Alat Pancang', url: 'https://www.betonjayareadymix.com/p/perbandingan-sewa-alat-pancang.html' },
                { name: 'Sewa Alat Pancang', url: 'https://www.betonjayareadymix.com/p/sewa-alat-pancang.html' }
            ],
            'SEWA_RENTAL'
        );
    }
    if (urlMappingSewaConcretePaverPostFromMoneyMasterMoneyPage[cleanUrlJasaKonsAlatKonstruksiPost]) {
        generateBreadcrumbShared(
            urlMappingSewaConcretePaverPostFromMoneyMasterMoneyPage,
            cleanUrlJasaKonsAlatKonstruksiPost,
            [
                { name: 'Sewa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/sewa-alat-konstruksi.html' },
                { name: 'Daftar Sewa Alat Berat', url: 'https://www.betonjayareadymix.com/p/daftar-sewa-alat-berat.html' },
                { name: 'Perbandingan Sewa Concrete Paver', url: 'https://www.betonjayareadymix.com/p/perbandingan-sewa-concrete-paver.html' },
                { name: 'Sewa Concrete Paver', url: 'https://www.betonjayareadymix.com/p/sewa-concrete-paver.html' }
            ],
            'SEWA_RENTAL'
        );
    }
    if (urlMappingSewaTrencherPostFromMoneyMasterMoneyPage[cleanUrlJasaKonsAlatKonstruksiPost]) {
        generateBreadcrumbShared(
            urlMappingSewaTrencherPostFromMoneyMasterMoneyPage,
            cleanUrlJasaKonsAlatKonstruksiPost,
            [
                { name: 'Sewa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/sewa-alat-konstruksi.html' },
                { name: 'Daftar Sewa Alat Berat', url: 'https://www.betonjayareadymix.com/p/daftar-sewa-alat-berat.html' },
                { name: 'Perbandingan Sewa Trencher', url: 'https://www.betonjayareadymix.com/p/perbandingan-sewa-trencher.html' },
                { name: 'Sewa Trencher', url: 'https://www.betonjayareadymix.com/p/sewa-trencher.html' }
            ],
            'SEWA_RENTAL'
        );
    }

    // ────────────────────────────────────────────────────────────
    // [BAGIAN 4.20] SEWA ALAT RINGAN
    // ────────────────────────────────────────────────────────────
    if (urlMappingSewaConcreteCutterFromMoneyMaster1MoneyPage[cleanUrlJasaKonsAlatKonstruksiPost]) {
        generateBreadcrumbShared(
            urlMappingSewaConcreteCutterFromMoneyMaster1MoneyPage,
            cleanUrlJasaKonsAlatKonstruksiPost,
            [
                { name: 'Sewa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/sewa-alat-konstruksi.html' },
                { name: 'Daftar Sewa Alat Ringan', url: 'https://www.betonjayareadymix.com/p/daftar-sewa-alat-ringan.html' },
                { name: 'Perbandingan Sewa Alat Ringan', url: 'https://www.betonjayareadymix.com/p/perbandingan-sewa-alat-ringan.html' },
                { name: 'Sewa Alat Ringan', url: 'https://www.betonjayareadymix.com/p/sewa-alat-ringan.html' },
                { name: 'Sewa Concrete Cutter', url: 'https://www.betonjayareadymix.com/p/sewa-concrete-cutter.html' }
            ],
            'SEWA_RENTAL'
        );
    }
    if (urlMappingSewaJackHammerFromMoneyMaster1MoneyPage[cleanUrlJasaKonsAlatKonstruksiPost]) {
        generateBreadcrumbShared(
            urlMappingSewaJackHammerFromMoneyMaster1MoneyPage,
            cleanUrlJasaKonsAlatKonstruksiPost,
            [
                { name: 'Sewa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/sewa-alat-konstruksi.html' },
                { name: 'Daftar Sewa Alat Ringan', url: 'https://www.betonjayareadymix.com/p/daftar-sewa-alat-ringan.html' },
                { name: 'Perbandingan Sewa Alat Ringan', url: 'https://www.betonjayareadymix.com/p/perbandingan-sewa-alat-ringan.html' },
                { name: 'Sewa Alat Ringan', url: 'https://www.betonjayareadymix.com/p/sewa-alat-ringan.html' },
                { name: 'Sewa Jack Hammer', url: 'https://www.betonjayareadymix.com/p/sewa-jack-hammer.html' }
            ],
            'SEWA_RENTAL'
        );
    }
    if (urlMappingSewaVibratorBetonFromMoneyMaster1MoneyPage[cleanUrlJasaKonsAlatKonstruksiPost]) {
        generateBreadcrumbShared(
            urlMappingSewaVibratorBetonFromMoneyMaster1MoneyPage,
            cleanUrlJasaKonsAlatKonstruksiPost,
            [
                { name: 'Sewa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/sewa-alat-konstruksi.html' },
                { name: 'Daftar Sewa Alat Ringan', url: 'https://www.betonjayareadymix.com/p/daftar-sewa-alat-ringan.html' },
                { name: 'Perbandingan Sewa Alat Ringan', url: 'https://www.betonjayareadymix.com/p/perbandingan-sewa-alat-ringan.html' },
                { name: 'Sewa Alat Ringan', url: 'https://www.betonjayareadymix.com/p/sewa-alat-ringan.html' },
                { name: 'Sewa Vibrator Beton', url: 'https://www.betonjayareadymix.com/p/sewa-vibrator-beton.html' }
            ],
            'SEWA_RENTAL'
        );
    }
    if (urlMappingSewaMesinMolenFromMoneyMaster1MoneyPage[cleanUrlJasaKonsAlatKonstruksiPost]) {
        generateBreadcrumbShared(
            urlMappingSewaMesinMolenFromMoneyMaster1MoneyPage,
            cleanUrlJasaKonsAlatKonstruksiPost,
            [
                { name: 'Sewa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/sewa-alat-konstruksi.html' },
                { name: 'Daftar Sewa Alat Ringan', url: 'https://www.betonjayareadymix.com/p/daftar-sewa-alat-ringan.html' },
                { name: 'Perbandingan Sewa Alat Ringan', url: 'https://www.betonjayareadymix.com/p/perbandingan-sewa-alat-ringan.html' },
                { name: 'Sewa Alat Ringan', url: 'https://www.betonjayareadymix.com/p/sewa-alat-ringan.html' },
                { name: 'Sewa Mesin Molen', url: 'https://www.betonjayareadymix.com/p/sewa-mesin-molen.html' }
            ],
            'SEWA_RENTAL'
        );
    }
    if (urlMappingSewaGensetFromMoneyMaster1MoneyPage[cleanUrlJasaKonsAlatKonstruksiPost]) {
        generateBreadcrumbShared(
            urlMappingSewaGensetFromMoneyMaster1MoneyPage,
            cleanUrlJasaKonsAlatKonstruksiPost,
            [
                { name: 'Sewa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/sewa-alat-konstruksi.html' },
                { name: 'Daftar Sewa Alat Ringan', url: 'https://www.betonjayareadymix.com/p/daftar-sewa-alat-ringan.html' },
                { name: 'Perbandingan Sewa Alat Ringan', url: 'https://www.betonjayareadymix.com/p/perbandingan-sewa-alat-ringan.html' },
                { name: 'Sewa Alat Ringan', url: 'https://www.betonjayareadymix.com/p/sewa-alat-ringan.html' },
                { name: 'Sewa Genset', url: 'https://www.betonjayareadymix.com/p/sewa-genset.html' }
            ],
            'SEWA_RENTAL'
        );
    }
    if (urlMappingSewaMesinCompressorFromMoneyMaster1MoneyPage[cleanUrlJasaKonsAlatKonstruksiPost]) {
        generateBreadcrumbShared(
            urlMappingSewaMesinCompressorFromMoneyMaster1MoneyPage,
            cleanUrlJasaKonsAlatKonstruksiPost,
            [
                { name: 'Sewa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/sewa-alat-konstruksi.html' },
                { name: 'Daftar Sewa Alat Ringan', url: 'https://www.betonjayareadymix.com/p/daftar-sewa-alat-ringan.html' },
                { name: 'Perbandingan Sewa Alat Ringan', url: 'https://www.betonjayareadymix.com/p/perbandingan-sewa-alat-ringan.html' },
                { name: 'Sewa Alat Ringan', url: 'https://www.betonjayareadymix.com/p/sewa-alat-ringan.html' },
                { name: 'Sewa Mesin Compressor', url: 'https://www.betonjayareadymix.com/p/sewa-mesin-compressor.html' }
            ],
            'SEWA_RENTAL'
        );
    }
    if (urlMappingSewaCuttingBetonFromMoneyMaster1MoneyPage[cleanUrlJasaKonsAlatKonstruksiPost]) {
        generateBreadcrumbShared(
            urlMappingSewaCuttingBetonFromMoneyMaster1MoneyPage,
            cleanUrlJasaKonsAlatKonstruksiPost,
            [
                { name: 'Sewa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/sewa-alat-konstruksi.html' },
                { name: 'Daftar Sewa Alat Ringan', url: 'https://www.betonjayareadymix.com/p/daftar-sewa-alat-ringan.html' },
                { name: 'Perbandingan Sewa Alat Ringan', url: 'https://www.betonjayareadymix.com/p/perbandingan-sewa-alat-ringan.html' },
                { name: 'Sewa Alat Ringan', url: 'https://www.betonjayareadymix.com/p/sewa-alat-ringan.html' },
                { name: 'Sewa Cutting Beton', url: 'https://www.betonjayareadymix.com/p/sewa-cutting-beton.html' }
            ],
            'SEWA_RENTAL'
        );
    }
    if (urlMappingSewaCuttingBetonFromMoneyMaster1MoneyChild[cleanUrlJasaKonsAlatKonstruksiPost]) {
        generateBreadcrumbShared(
            urlMappingSewaCuttingBetonFromMoneyMaster1MoneyChild,
            cleanUrlJasaKonsAlatKonstruksiPost,
            [
                { name: 'Sewa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/sewa-alat-konstruksi.html' },
                { name: 'Daftar Sewa Alat Ringan', url: 'https://www.betonjayareadymix.com/p/daftar-sewa-alat-ringan.html' },
                { name: 'Perbandingan Sewa Alat Ringan', url: 'https://www.betonjayareadymix.com/p/perbandingan-sewa-alat-ringan.html' },
                { name: 'Sewa Alat Ringan', url: 'https://www.betonjayareadymix.com/p/sewa-alat-ringan.html' },
                { name: 'Sewa Cutting Beton', url: 'https://www.betonjayareadymix.com/p/sewa-cutting-beton.html' }
            ],
            'SEWA_RENTAL'
        );
    }
    if (urlMappingSewaMesinPotongRumputFromMoneyMaster1MoneyPage[cleanUrlJasaKonsAlatKonstruksiPost]) {
        generateBreadcrumbShared(
            urlMappingSewaMesinPotongRumputFromMoneyMaster1MoneyPage,
            cleanUrlJasaKonsAlatKonstruksiPost,
            [
                { name: 'Sewa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/sewa-alat-konstruksi.html' },
                { name: 'Daftar Sewa Alat Ringan', url: 'https://www.betonjayareadymix.com/p/daftar-sewa-alat-ringan.html' },
                { name: 'Perbandingan Sewa Alat Ringan', url: 'https://www.betonjayareadymix.com/p/perbandingan-sewa-alat-ringan.html' },
                { name: 'Sewa Alat Ringan', url: 'https://www.betonjayareadymix.com/p/sewa-alat-ringan.html' },
                { name: 'Sewa Mesin Rumput', url: 'https://www.betonjayareadymix.com/p/sewa-mesin-rumput.html' }
            ],
            'SEWA_RENTAL'
        );
    }
    if (urlMappingSewaMesinTrowelFromMoneyMaster1MoneyPage[cleanUrlJasaKonsAlatKonstruksiPost]) {
        generateBreadcrumbShared(
            urlMappingSewaMesinTrowelFromMoneyMaster1MoneyPage,
            cleanUrlJasaKonsAlatKonstruksiPost,
            [
                { name: 'Sewa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/sewa-alat-konstruksi.html' },
                { name: 'Daftar Sewa Alat Ringan', url: 'https://www.betonjayareadymix.com/p/daftar-sewa-alat-ringan.html' },
                { name: 'Perbandingan Sewa Alat Ringan', url: 'https://www.betonjayareadymix.com/p/perbandingan-sewa-alat-ringan.html' },
                { name: 'Sewa Alat Ringan', url: 'https://www.betonjayareadymix.com/p/sewa-alat-ringan.html' },
                { name: 'Sewa Mesin Trowel', url: 'https://www.betonjayareadymix.com/p/sewa-mesin-trowel.html' }
            ],
            'SEWA_RENTAL'
        );
    }
    if (urlMappingSewaMesinScreedFromMoneyMaster1MoneyPage[cleanUrlJasaKonsAlatKonstruksiPost]) {
        generateBreadcrumbShared(
            urlMappingSewaMesinScreedFromMoneyMaster1MoneyPage,
            cleanUrlJasaKonsAlatKonstruksiPost,
            [
                { name: 'Sewa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/sewa-alat-konstruksi.html' },
                { name: 'Daftar Sewa Alat Ringan', url: 'https://www.betonjayareadymix.com/p/daftar-sewa-alat-ringan.html' },
                { name: 'Perbandingan Sewa Alat Ringan', url: 'https://www.betonjayareadymix.com/p/perbandingan-sewa-alat-ringan.html' },
                { name: 'Sewa Alat Ringan', url: 'https://www.betonjayareadymix.com/p/sewa-alat-ringan.html' },
                { name: 'Sewa Mesin Screed', url: 'https://www.betonjayareadymix.com/p/sewa-mesin-screed.html' }
            ],
            'SEWA_RENTAL'
        );
    }
    if (urlMappingSewaStamperFromMoneyMaster1MoneyPage[cleanUrlJasaKonsAlatKonstruksiPost]) {
        generateBreadcrumbShared(
            urlMappingSewaStamperFromMoneyMaster1MoneyPage,
            cleanUrlJasaKonsAlatKonstruksiPost,
            [
                { name: 'Sewa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/sewa-alat-konstruksi.html' },
                { name: 'Daftar Sewa Alat Ringan', url: 'https://www.betonjayareadymix.com/p/daftar-sewa-alat-ringan.html' },
                { name: 'Perbandingan Sewa Alat Ringan', url: 'https://www.betonjayareadymix.com/p/perbandingan-sewa-alat-ringan.html' },
                { name: 'Sewa Alat Ringan', url: 'https://www.betonjayareadymix.com/p/sewa-alat-ringan.html' },
                { name: 'Sewa Stamper', url: 'https://www.betonjayareadymix.com/p/sewa-stamper.html' }
            ],
            'SEWA_RENTAL'
        );
    }

    // ────────────────────────────────────────────────────────────
    // ✅ SELESAI — SEMUA IF BREADCRUMB SUDAH DIPROSES
    // ────────────────────────────────────────────────────────────

    // ═══════════════════════════════════════════════════════════
    // ✅ SEMUA BREADCRUMB SELESAI DIPROSES
    // ═══════════════════════════════════════════════════════════
    console.log('[jasa-alat-konstruksi-post] ✅ Semua breadcrumb selesai diproses');

}  // ← TUTUP FUNGSI initJasaKonsAlatKonstruksiPost()

// ────────────────────────────────────────────────────────────
// [BAGIAN 5] FIX v2.1.0 — Handle DOMContentLoaded race condition
// ────────────────────────────────────────────────────────────
// MASALAH:
//   Kalau script di-load SETELAH DOMContentLoaded fire
//   (misal pakai async, atau di-load setelah event),
//   maka addEventListener("DOMContentLoaded", fn)
//   TIDAK PERNAH DIPANGGIL.
//
// SOLUSI:
//   Cek document.readyState — kalau sudah siap, langsung
//   panggil handler tanpa tunggu event.
//
// CONTOH:
//   - DOM belum siap (readyState === 'loading') → pasang listener
//   - DOM sudah siap (readyState === 'interactive'/'complete')
//     → langsung panggil initJasaKonsAlatKonstruksiPost()
// ═══════════════════════════════════════════════════════════
if (document.readyState === 'loading') {
    // DOM belum siap → tunggu event (kasus normal)
    console.log('[jasa-alat-konstruksi-post] ⏳ DOM masih loading, tunggu DOMContentLoaded');
    document.addEventListener("DOMContentLoaded", initJasaKonsAlatKonstruksiPost);
} else {
    // DOM sudah siap → langsung jalankan (anti-race)
    console.log('[jasa-alat-konstruksi-post] ⚡ DOM sudah siap, langsung execute');
    initJasaKonsAlatKonstruksiPost();
}
