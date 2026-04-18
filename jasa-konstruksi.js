 // Cek URL saat ini dan sesuaikan dengan kondisi yang diinginkan
// ============================================================
// JASA KONSTRUKSI - PILLAR
// ============================================================
// 🧠 SEO NOTE: PILLAR ini adalah halaman utama untuk semua layanan jasa konstruksi.
// Intent: Commercial Investigation + Navigational.
// Breadcrumb: Home > Jasa Konstruksi (2 level)
// ============================================================

const urlMappingJasaKons = {
  // ============================================================
  // [PILLAR] - TOPICAL AUTHORITY
  // ============================================================
  //"https://www.betonjayareadymix.com/p/jasa-konstruksi.html": "Jasa Konstruksi",  // TYPE: PILLAR

  // ============================================================
  // [SUB2] - SUB-PILLAR TIPE 2 (KATEGORI LAYANAN UTAMA)
  // 🧠 SEO NOTE: SUB2 ini adalah halaman kategori untuk setiap jenis layanan jasa.
  // Intent: Commercial Investigation (user masih riset, membandingkan layanan).
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
  "https://www.betonjayareadymix.com/p/jasa-perawatan-perbaikan-bangunan.html": "Jasa Perawatan Perbaikan Bangunan"  // TYPE: SUB2
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

CATATAN: Hanya URL yang benar-benar duplikat yang di-redirect.
Semua SUB2 di atas sudah memiliki intent yang berbeda dan spesifik.
*/

// ============================================================
// [SUB1] - SUB-PILLAR TIPE 1 (PANDUAN / BRIDGE KE MONEY)
// 🧠 SEO NOTE: SUB1 berfungsi sebagai jembatan (bridge) dari SUB2 ke MONEY page.
// Intent: Informational (edukasi) + Pre-commercial.
// Breadcrumb: Home > Jasa Konstruksi > [SUB2] > [Panduan] (4 level)
// ============================================================

const urlMappingStrukturBridgeSub1 = {
  "https://www.betonjayareadymix.com/p/panduan-membangun-bangunan.html": "Panduan Membangun Bangunan"  // TYPE: SUB1 (parent: Jasa Struktur Konstruksi)
};

const urlMappingRenovasiBridgeSub1 = {
  "https://www.betonjayareadymix.com/p/panduan-renovasi-bangunan.html": "Panduan Renovasi Bangunan",  // TYPE: SUB1 (parent: Jasa Renovasi)
  "https://www.betonjayareadymix.com/p/panduan-renovasi-infrastruktur.html": "Panduan Renovasi Infrastruktur"  // TYPE: SUB1 (parent: Jasa Renovasi)
};

const urlMappingFinishingBridgeSub1 = {
  "https://www.betonjayareadymix.com/p/panduan-finishing-bangunan.html": "Panduan Finishing Bangunan",  // TYPE: SUB1 (parent: Jasa Finishing)
  "https://www.betonjayareadymix.com/p/panduan-finishing-infrastruktur.html": "Panduan Finishing Infrastruktur"  // TYPE: SUB1 (parent: Jasa Finishing)
};

const urlMappingPerawatanPerbaikanBridgeSub1 = {
  "https://www.betonjayareadymix.com/p/panduan-perbaikan-bangunan.html": "Panduan Perbaikan Bangunan"  // TYPE: SUB1 (parent: Jasa Perawatan Perbaikan Bangunan)
};

const urlMappingJalanPerkerasanBridgeSub1 = {
  "https://www.betonjayareadymix.com/p/panduan-pembuatan-infrastruktur.html": "Panduan Pembuatan Infrastruktur"  // TYPE: SUB1 (parent: Jasa Jalan & Perkerasan)
};

const urlMappingPerbaikanInfrastrukturBridgeSub1 = {
  "https://www.betonjayareadymix.com/p/panduan-perbaikan-infrastruktur.html": "Panduan Perbaikan Infrastruktur"  // TYPE: SUB1 (parent: Jasa Perbaikan Infrastruktur)
};

// ============================================================
// JASA ALAT KONSTRUKSI - SUB2 & TURUNAN
// ============================================================
// 🧠 SEO NOTE: Cluster ini fokus ke layanan sewa alat konstruksi.
// Intent: Transactional (user siap sewa alat).
// ============================================================

// [SUB2] - KATEGORI UTAMA SEWA ALAT KONSTRUKSI
const urlMappingJasaAlatKonstruksi = {
  "https://www.betonjayareadymix.com/p/sewa-alat-konstruksi.html": "Sewa Alat Konstruksi"  // TYPE: SUB2
};

// [SUB2 TURUNAN] - KATEGORI SEWA SPESIFIK
const urlMappingJasaSewaAlatKonstruksi = {
  "https://www.betonjayareadymix.com/p/sewa-alat-proyek.html": "Sewa Alat Proyek",  // TYPE: SUB2
  "https://www.betonjayareadymix.com/p/sewa-alat-berat.html": "Sewa Alat Berat",  // TYPE: SUB2
  "https://www.betonjayareadymix.com/p/sewa-alat-konstruksi-ringan.html": "Sewa Alat Konstruksi Ringan"  // TYPE: SUB2
};

// [MONEY PAGE MASTER] - SEWA PER JENIS ALAT BERAT
const urlMappingJasaSewaAlatBerat = {
  "https://www.betonjayareadymix.com/p/sewa-forklift.html": "Sewa Forklift",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/p/sewa-crane.html": "Sewa Crane",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/p/sewa-self-loader.html": "Sewa Self Loader",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/p/sewa-wheel-loader.html": "Sewa Wheel Loader",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/p/sewa-vibro-roller.html": "Sewa Vibro Roller",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/p/sewa-wales-stoom.html": "Sewa Wales Stoom",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/p/sewa-tandem-roller.html": "Sewa Tandem Roller",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/p/sewa-bulldozer.html": "Sewa Bulldozer",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/p/sewa-excavator.html": "Sewa Excavator",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/p/sewa-backhoe-loader.html": "Sewa Backhoe Loader",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/p/sewa-trencher.html": "Sewa Trencher",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/p/sewa-concrete-paver.html": "Sewa Concrete Paver",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/p/sewa-baby-roller.html": "Sewa Baby Roller",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/p/sewa-motor-grader.html": "Sewa Motor Grader",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/p/sewa-alat-pancang.html": "Sewa Alat Pancang"  // TYPE: MONEY_MASTER
};

// [MONEY PAGE MASTER] - SEWA ALAT KONSTRUKSI RINGAN (AKAN DITAMBAHKAN)
const urlMappingJasaSewaAlatKonstruksiRingan = {
  // "https://www.betonjayareadymix.com/p/sewa-gerbang-tangan.html": "Sewa Gerbang Tangan",  // TYPE: MONEY_MASTER
  // "https://www.betonjayareadymix.com/p/sewa-concrete-mixer.html": "Sewa Concrete Mixer"  // TYPE: MONEY_MASTER
};

// ============================================================
// JASA PERBAIKAN INFRASTRUKTUR
// ============================================================

const urlMappingPerbaikanInfrastruktur = {
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-jalan.html": "Jasa Renovasi Perbaikan Jalan",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-jembatan.html": "Jasa Perbaikan Jembatan",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-drainase.html": "Jasa Perbaikan Drainase",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-trotoar.html": "Jasa Perbaikan Trotoar"  // TYPE: MONEY_MASTER
};

// ============================================================
// JASA FINISHING - SUB2 & TURUNAN
// ============================================================

const urlMappingFinishing = {
  "https://www.betonjayareadymix.com/p/jasa-finishing-bangunan.html": "Jasa Finishing Bangunan",  // TYPE: SUB2
  "https://www.betonjayareadymix.com/p/jasa-finishing-infrastruktur.html": "Jasa Finishing Infrastruktur"  // TYPE: SUB2
};

// ============================================================
// JASA STRUKTUR KONSTRUKSI - SUB2 & TURUNAN
// ============================================================

const urlMappingStruktur = {
  "https://www.betonjayareadymix.com/p/jasa-konstruksi-gedung-dan-hunian.html": "Jasa Konstruksi Gedung dan Hunian",  // TYPE: SUB2
  "https://www.betonjayareadymix.com/p/jasa-konstruksi-industri-dan-gudang.html": "Jasa Konstruksi Industri dan Gudang",  // TYPE: SUB2
  "https://www.betonjayareadymix.com/p/jasa-struktur-baja-dan-rangka-ringan.html": "Jasa Struktur Baja dan Rangka Ringan",  // TYPE: SUB2
  "https://www.betonjayareadymix.com/p/jasa-struktur-khusus.html": "Jasa Struktur Khusus",  // TYPE: SUB2
  "https://www.betonjayareadymix.com/p/jasa-konstruksi-lapangan-olahraga.html": "Jasa Konstruksi Lapangan Olahraga",  // TYPE: SUB2
  "https://www.betonjayareadymix.com/p/jasa-konstruksi-modular-dan-precast.html": "Jasa Konstruksi Modular dan Precast",  // TYPE: SUB2
  "https://www.betonjayareadymix.com/p/jasa-struktur-beton-dan-pengecoran.html": "Jasa Struktur Beton dan Pengecoran"  // TYPE: SUB2
};

// ============================================================
// JASA PONDASI & PERKUATAN TANAH - SUB2 & TURUNAN
// ============================================================

const urlMappingPondasi = {
  "https://www.betonjayareadymix.com/p/jasa-pondasi-bangunan.html": "Jasa Pondasi Bangunan",  // TYPE: SUB2
  "https://www.betonjayareadymix.com/p/jasa-pemadatan-persiapan-pondasi.html": "Jasa Pemadatan & Persiapan Pondasi",  // TYPE: SUB2
  "https://www.betonjayareadymix.com/p/jasa-perkuatan-tanah.html": "Jasa Perkuatan Tanah",  // TYPE: SUB2
  "https://www.betonjayareadymix.com/p/jasa-retrofitting-pondasi.html": "Jasa Retrofitting Pondasi"  // TYPE: SUB2
};

// ============================================================
// BONGKAR BANGUNAN - SUB2 & TURUNAN
// ============================================================

const urlMappingBongkarBangunan = {
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
// JASA RENOVASI - SUB2 & TURUNAN
// ============================================================

const urlMappingRenovasi = {
  "https://www.betonjayareadymix.com/p/jasa-renovasi-fasilitas-umum.html": "Jasa Renovasi Fasilitas Umum",  // TYPE: SUB2
  "https://www.betonjayareadymix.com/p/jasa-renovasi-bangunan.html": "Jasa Renovasi Bangunan",  // TYPE: SUB2
  "https://www.betonjayareadymix.com/p/jasa-renovasi-interior.html": "Jasa Renovasi Interior",  // TYPE: SUB2
  "https://www.betonjayareadymix.com/p/jasa-renovasi-eksterior-bangunan.html": "Jasa Renovasi Eksterior Bangunan"  // TYPE: SUB2
};

// ============================================================
// JASA PERAWATAN & PERBAIKAN BANGUNAN - SUB2 & TURUNAN
// ============================================================

const urlMappingPerawatanPerbaikanBangunan = {
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-struktur.html": "Jasa Perbaikan Struktur",  // TYPE: SUB2
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-kebocoran-waterproofing.html": "Jasa Perbaikan Kebocoran Waterproofing",  // TYPE: SUB2
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-elemen-arsitektural.html": "Jasa Perbaikan Elemen Arsitektural",  // TYPE: SUB2
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-atap-drainase-bangunan.html": "Jasa Perbaikan Atap Drainase Bangunan"  // TYPE: SUB2
};

// ============================================================
// JASA PENGEBORAN - SUB2 & TURUNAN
// ============================================================
// 🧠 SEO NOTE: Pengeboran mencakup bore pile, bor air, coring beton, dll.
// ============================================================

const urlMappingPengeboran = {
  // ============================================================
  // [SUB2] - MASTER PENGEBORAN
  // 🧠 TYPE: SUB2 (boleh skip di breadcrumb)
  // Breadcrumb: Home > Jasa Konstruksi > Jasa Pengeboran
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-pengeboran.html": "Jasa Pengeboran",  // TYPE: SUB2

  // ============================================================
  // [MONEY_MASTER] - JENIS PENGEBORAN SPESIFIK
  // 🧠 TYPE: MONEY_MASTER (WAJIB tampil di breadcrumb)
  // Breadcrumb: Home > Jasa Konstruksi > Jasa Pengeboran > [Nama Layanan]
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-bor-air-sumur.html": "Jasa Bor Air Sumur",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/p/jasa-bore-pile.html": "Jasa Bore Pile",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/p/jasa-coring-beton.html": "Jasa Coring Beton",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/p/jasa-bor-beton.html": "Jasa Bor Beton",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/p/jasa-bor-tanah.html": "Jasa Bor Tanah",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/p/jasa-bor-horizontal.html": "Jasa Bor Horizontal",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/p/jasa-bor-tembok.html": "Jasa Bor Tembok"  // TYPE: MONEY_MASTER
};

// ============================================================
// JASA SALURAN & DRAINASE - SUB2 (PAGE)
// ============================================================
// 🧠 SEO NOTE: Halaman ini adalah SUB2 untuk layanan jasa saluran dan drainase.
// ============================================================

const urlMappingSaluran = {
  // ============================================================
  // [MONEY_MASTER] - LAYANAN SALURAN
  // 🧠 TYPE: MONEY_MASTER (WAJIB tampil di breadcrumb)
  // Breadcrumb: Home > Jasa Konstruksi > Jasa Saluran Drainase > [Nama Layanan]
  // ⚠️ STATUS: KONTEN KOSONG - PERLU DIBUAT
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-saluran-air-hujan.html": "Jasa Saluran Air Hujan",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/p/jasa-pemasangan-u-ditch.html": "Jasa Pemasangan U Ditch",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/p/jasa-pemasangan-box-culvert.html": "Jasa Pemasangan Box Culvert",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/p/jasa-saluran-irigasi-air-limbah.html": "Jasa Saluran Irigasi & Air Limbah",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/p/jasa-pembuatan-sumur-resapan.html": "Jasa Pembuatan Sumur Resapan"  // TYPE: MONEY_MASTER
};

// ============================================================
// JASA JALAN & PERKERASAN - SUB2 (PAGE)
// ============================================================
// 🧠 SEO NOTE: Halaman ini adalah SUB2 untuk layanan jasa jalan dan perkerasan.
// ============================================================

const urlMappingJalan = {
  // ============================================================
  // [MONEY_MASTER] - LAYANAN JALAN & PERKERASAN
  // 🧠 TYPE: MONEY_MASTER (WAJIB tampil di breadcrumb)
  // Breadcrumb: Home > Jasa Konstruksi > Jasa Jalan Perkerasan > [Nama Layanan]
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-pembangunan-infrastruktur-jalan.html": "Jasa Pembangunan Infrastruktur Jalan",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/p/jasa-pemadatan-dan-persiapan-tanah-jalan.html": "Jasa Pemadatan dan Persiapan Tanah Jalan",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/p/jasa-perkerasan-jalan.html": "Jasa Perkerasan Jalan",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/p/jasa-pengerasan-jalan.html": "Jasa Pengerasan Jalan"  // TYPE: MONEY_MASTER
};

// ============================================================
// JASA PEMATANGAN LAHAN - SUB2 (PAGE)
// ============================================================
// 🧠 SEO NOTE: Halaman ini adalah SUB2 untuk layanan pematangan lahan.
// ============================================================

const urlMappingPematanganLahan = {
  // ============================================================
  // [MONEY_MASTER] - LAYANAN PEMATANGAN LAHAN
  // 🧠 TYPE: MONEY_MASTER (WAJIB tampil di breadcrumb)
  // Breadcrumb: Home > Jasa Konstruksi > Jasa Pematangan Lahan > [Nama Layanan]
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-galian-tanah.html": "Jasa Galian Tanah",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/p/jasa-pengupasan-lahan-tanah.html": "Jasa Pengupasan Lahan Tanah",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/p/jasa-pembersihan-lahan.html": "Jasa Pembersihan Lahan",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/p/jasa-perataan-dan-grading-lahan.html": "Jasa Perataan dan Grading Lahan",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/p/jasa-elevasi-lahan.html": "Jasa Elevasi Lahan",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/p/jasa-badan-lahan.html": "Jasa Badan Lahan",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/p/jasa-cut-and-fill-lahan.html": "Jasa Cut and Fill Lahan",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/p/jasa-pemotongan-bukit-lahan.html": "Jasa Pemotongan Bukit Lahan",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/p/jasa-urugan-tanah-lahan.html": "Jasa Urugan Tanah Lahan",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/p/jasa-pemadatan-tanah-lahan.html": "Jasa Pemadatan Tanah Lahan",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/p/jasa-base-course-lahan.html": "Jasa Base Course Lahan",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/p/jasa-stabilisasi-tanah-lahan.html": "Jasa Stabilisasi Tanah Lahan",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/p/jasa-drainase-lahan.html": "Jasa Drainase Lahan",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/p/jasa-geotekstil-lahan.html": "Jasa Geotekstil Lahan",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/p/jasa-persiapan-pondasi-lahan.html": "Jasa Persiapan Pondasi Lahan",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/p/jasa-tebang-pohon.html": "Jasa Tebang Pohon"  // TYPE: MONEY_MASTER
};

// ============================================================
// JASA UJI TANAH - SUB2 (PAGE)
// ============================================================
// 🧠 SEO NOTE: Halaman ini adalah SUB2 untuk layanan uji tanah.
// ============================================================

const urlMappingUjiTanah = {
  // ============================================================
  // [MONEY_MASTER] - LAYANAN UJI TANAH
  // 🧠 TYPE: MONEY_MASTER (WAJIB tampil di breadcrumb)
  // Breadcrumb: Home > Jasa Konstruksi > Jasa Uji Tanah > [Nama Layanan]
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-sondir.html": "Jasa Sondir",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/p/jasa-cpt.html": "Jasa CPT",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/p/jasa-lab-tanah.html": "Jasa Lab Tanah",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/p/jasa-boring-tanah.html": "Jasa Boring Tanah",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/p/jasa-uji-penetrasi.html": "Jasa Uji Penetrasi"  // TYPE: MONEY_MASTER
};

// ============================================================
// JASA PERKUATAN TANAH LONGSOR - SUB2 (PAGE)
// ============================================================
// 🧠 SEO NOTE: Halaman ini adalah SUB2 untuk layanan perkuatan tanah longsor.
// ============================================================

const urlMappingPerkuatanTanahLongsor = {
  // ============================================================
  // [MONEY_MASTER] - LAYANAN PERKUATAN TANAH LONGSOR
  // 🧠 TYPE: MONEY_MASTER (WAJIB tampil di breadcrumb)
  // Breadcrumb: Home > Jasa Konstruksi > Jasa Perkuatan Tanah Longsor > [Nama Layanan]
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-bronjong-penahan-longsor.html": "Jasa Bronjong Penahan Longsor",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/p/jasa-soil-nailing-tebing.html": "Jasa Soil Nailing Tebing",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/p/jasa-dinding-penahan-tanah-longsor.html": "Jasa Dinding Penahan Tanah Longsor",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/p/jasa-geotextile-perkuatan-lereng.html": "Jasa Geotextile Perkuatan Lereng",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/p/jasa-sheet-pile-penahan-longsor.html": "Jasa Sheet Pile Penahan Longsor",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/p/jasa-stabilisasi-tanah-labil.html": "Jasa Stabilisasi Tanah Labil",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/p/jasa-perkuatan-tanah-longsor-rumah.html": "Jasa Perkuatan Tanah Longsor Rumah",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/p/jasa-perkuatan-tebing-jalan.html": "Jasa Perkuatan Tebing Jalan",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/p/jasa-perkuatan-longsor-perkebunan.html": "Jasa Perkuatan Longsor Perkebunan",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/p/jasa-drainase-anti-longsor.html": "Jasa Drainase Anti Longsor"  // TYPE: MONEY_MASTER
};

// ============================================================
// JASA PEMBATAS & PENGAMAN - SUB2 (PAGE)
// ============================================================
// 🧠 SEO NOTE: Halaman ini adalah SUB2 untuk layanan pembatas dan pengaman proyek.
// ============================================================

const urlMappingPembatas = {
  // ============================================================
  // [MONEY_MASTER] - LAYANAN PEMBATAS & PENGAMAN
  // 🧠 TYPE: MONEY_MASTER (WAJIB tampil di breadcrumb)
  // Breadcrumb: Home > Jasa Konstruksi > Jasa Pembatas Pengaman > [Nama Layanan]
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-pengamanan-area-proyek.html": "Jasa Pengamanan Area Proyek",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/p/jasa-rambu-dan-sistem-keamanan-visual.html": "Jasa Rambu dan Sistem Keamanan Visual",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/p/jasa-pengaman-sisi-jalan-infrastruktur.html": "Jasa Pengaman Sisi Jalan Infrastruktur",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/p/jasa-pembuatan-pagar-dinding-pembatas.html": "Jasa Pembuatan Pagar Dinding Pembatas"  // TYPE: MONEY_MASTER
};

// ============================================================
// JASA INSTALASI LISTRIK - SUB2 (PAGE)
// ============================================================
// 🧠 SEO NOTE: Halaman ini adalah SUB2 untuk layanan instalasi listrik.
// ============================================================

const urlMappingJasaInstalasiListrik = {
  // ============================================================
  // [MONEY_MASTER] - LAYANAN INSTALASI LISTRIK
  // 🧠 TYPE: MONEY_MASTER (WAJIB tampil di breadcrumb)
  // Breadcrumb: Home > Jasa Konstruksi > Jasa Instalasi Listrik > [Nama Layanan]
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-instalasi-solar-panel.html": "Jasa Instalasi Solar Panel",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/p/jasa-instalasi-listrik-rumah.html": "Jasa Instalasi Listrik Rumah",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/p/jasa-instalasi-listrik-komersial.html": "Jasa Instalasi Listrik Komersial",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/p/jasa-pemasangan-panel-listrik.html": "Jasa Pemasangan Panel Listrik",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/p/jasa-keamanan-proteksi-listrik.html": "Jasa Keamanan & Proteksi Listrik",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/p/jasa-maintenance-perbaikan-listrik.html": "Jasa Maintenance & Perbaikan Listrik",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/p/jasa-konsultasi-listrik.html": "Jasa Konsultasi Listrik"  // TYPE: MONEY_MASTER
};

/*
const urlMappingCustom = {

};
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
		urlMappingJasaKons,
		urlMappingJasaAlatKonstruksi,
		urlMappingJasaSewaAlatKonstruksi,
		urlMappingJasaSewaAlatBerat,
		urlMappingJasaSewaAlatKonstruksiRingan,
		urlMappingRenovasi,
		urlMappingFinishing,
		urlMappingStruktur,
		urlMappingPondasi,
		urlMappingSaluran,
		urlMappingJalan,
		urlMappingPematanganLahan,
		urlMappingUjiTanah,
		urlMappingPerkuatanTanahLongsor,
		urlMappingBongkarBangunan,
		urlMappingPengeboran,
		urlMappingJasaBorAirSumur,
		urlMappingPembatas,
		urlMappingJasaInstalasiListrik
    );

    // --- validasi URL terdaftar ---
    if (!urlMappingGabungan[cleanUrlJasaKons]) {
      console.log(`[HybridDateModified] URL tidak terdaftar: ${cleanUrlJasaKons}`);
      return;
    }

  // === Tanggal nextUpdate1 global ===
		const globalNextUpdate1 = "2026-01-29T00:00:00.000Z";
	console.log(`🌐 [AutoMeta] Detected jasa-konstruksi: ${cleanUrlJasaKons}`);

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

    const hash = stableHash(cleanUrlJasaKons);
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
	
	console.log("✅ AEDMetaDates updated jasa-konstruksi:", window.AEDMetaDates);
    console.log(`✅ [HybridDateModified v2.5] ${cleanUrlJasaKons} → ${isoDate} | type=${type || "-"}`);

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
		urlMappingJasaKons,
		urlMappingJasaAlatKonstruksi,
		urlMappingJasaSewaAlatKonstruksi,
		urlMappingJasaSewaAlatBerat,
		urlMappingJasaSewaAlatKonstruksiRingan,
        urlMappingPerbaikanInfrastruktur,
		urlMappingPerawatanPerbaikanBangunan,
		urlMappingRenovasi,
		urlMappingFinishing,
		urlMappingStruktur,
		urlMappingPondasi,
		urlMappingSaluran,
		urlMappingJalan,
		urlMappingPematanganLahan,
		urlMappingUjiTanah,
		urlMappingPerkuatanTanahLongsor,
		urlMappingBongkarBangunan,
		urlMappingPengeboran,
		urlMappingPembatas,
		urlMappingJasaInstalasiListrik
    );

    // --- validasi URL terdaftar ---
    if (!urlMappingGabungan[cleanUrlJasaKons]) {
      console.log(`[HybridDateModified] URL tidak terdaftar: ${cleanUrlJasaKons}`);
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
		    await loadEvergreenScript("2026-01-02T10:30:00+07:00");
		
		    // ✔ AUTO MODE
		    // await loadEvergreenScript();
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
			
			    const hash = stableHash(cleanUrlJasaKons);
			    const offsetSeconds = hash % 86400;
			    const finalDate = new Date(new Date(dateModified).getTime() + offsetSeconds * 1000);
			    const isoDate = toISOWithTimezoneLocal(finalDate);
			
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
				
				console.log("✅ AEDMetaDates updated jasa-konstruksi:", window.AEDMetaDates);
			    console.log(`✅ [HybridDateModified v2.5] ${cleanUrlJasaKons} → ${isoDate} | type=${type || "-"}`);
			
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
	
    if (urlMappingJasaKons[cleanUrlJasaKons]) {
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
        pageNameKonstruksi.textContent = urlMappingJasaKons[cleanUrlJasaKons];
    }
   // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaKons[cleanUrlJasaKons]) {
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
                   "name": urlMappingJasaKons[cleanUrlJasaKons],
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

   if (urlMappingJasaSewaAlatKonstruksi[cleanUrlJasaKons]) {
        restoreCondition('JasaKonsSub');
	//restoreCondition('JasaKonstruksi');
	restoreCondition('JasaAlatKonstruksi');
	restoreCondition('SewaAlatKonstruksi');
	   
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

        JasaKonstruksiSubLink.style.visibility = 'visible';
        JasaAlatKonstruksiLink.style.visibility = 'visible';
        SewaAlatKonstruksiLink.style.visibility = 'visible';
	    
        pageNameKonstruksiSub.textContent = urlMappingJasaSewaAlatKonstruksi[cleanUrlJasaKons];
    }
 // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaSewaAlatKonstruksi[cleanUrlJasaKons]) {
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
                   "name": "Sewa Alat Konstruksi",
                   "item": "https://www.betonjayareadymix.com/p/sewa-alat-konstruksi.html"
               },
               {
                   "@type": "ListItem",
                   "position": 5,
                   "name": urlMappingJasaSewaAlatKonstruksi[cleanUrlJasaKons],
                   "item": cleanUrlJasaKons
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }

  if (urlMappingJasaSewaAlatBerat[cleanUrlJasaKons]) {
        restoreCondition('JasaKonsSub');
	//restoreCondition('JasaKonstruksi');
	restoreCondition('JasaAlatKonstruksi');
	restoreCondition('SewaAlatKonstruksi');
	restoreCondition('SewaAlatBerat');
	  
	   
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

        JasaKonstruksiSubLink.style.visibility = 'visible';
        JasaAlatKonstruksiLink.style.visibility = 'visible';
        SewaAlatKonstruksiLink.style.visibility = 'visible';

	
        SewaAlatBeratLink.style.visibility = 'visible';
        pageNameKonstruksiSub.textContent = urlMappingJasaSewaAlatBerat[cleanUrlJasaKons];
    }
 // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaSewaAlatBerat[cleanUrlJasaKons]) {
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
                   "name": "Sewa Alat Konstruksi",
                   "item": "https://www.betonjayareadymix.com/p/sewa-alat-konstruksi.html"
               },
	      {
                   "@type": "ListItem",
                   "position": 5,
                   "name": "Sewa Alat Konstruksi",
                   "item": "https://www.betonjayareadymix.com/p/sewa-alat-berat.html"
               },
               {
                   "@type": "ListItem",
                   "position": 6,
                   "name": urlMappingJasaSewaAlatBerat[cleanUrlJasaKons],
                   "item": cleanUrlJasaKons
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
 if (urlMappingJasaSewaAlatKonstruksiRingan[cleanUrlJasaKons]) {
        restoreCondition('JasaKonsSub');
	//restoreCondition('JasaKonstruksi');
	restoreCondition('JasaAlatKonstruksi');
	restoreCondition('SewaAlatKonstruksi');
	restoreCondition('SewaAlatKonstruksiRingan');
	   
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

        JasaKonstruksiSubLink.style.visibility = 'visible';
        JasaAlatKonstruksiLink.style.visibility = 'visible';
        SewaAlatKonstruksiLink.style.visibility = 'visible';

	
        SewaAlatKonstruksiRinganLink.style.visibility = 'visible';
        pageNameKonstruksiSub.textContent = urlMappingJasaSewaAlatKonstruksiRingan[cleanUrlJasaKons];
    }
 // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaSewaAlatKonstruksiRingan[cleanUrlJasaKons]) {
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
                   "name": "Sewa Alat Konstruksi",
                   "item": "https://www.betonjayareadymix.com/p/sewa-alat-konstruksi.html"
               },
	      {
                   "@type": "ListItem",
                   "position": 5,
                   "name": "Sewa Alat Konstruksi Ringan",
                   "item": "https://www.betonjayareadymix.com/p/sewa-alat-konstruksi-ringan.html"
               },
               {
                   "@type": "ListItem",
                   "position": 6,
                   "name": urlMappingJasaSewaAlatKonstruksiRingan[cleanUrlJasaKons],
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
	
    if (urlMappingRenovasi[cleanUrlJasaKons]) {
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
	    
        pageNameKonstruksiSub.textContent = urlMappingRenovasi[cleanUrlJasaKons];
    }
 // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingRenovasi[cleanUrlJasaKons]) {
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
                   "name": urlMappingRenovasi[cleanUrlJasaKons],
                   "item": cleanUrlJasaKons
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
    if (urlMappingStruktur[cleanUrlJasaKons]) {
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
        pageNameKonstruksiSub.textContent = urlMappingStruktur[cleanUrlJasaKons];
    }
   // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingStruktur[cleanUrlJasaKons]) {
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
                   "name": urlMappingStruktur[cleanUrlJasaKons],
                   "item": cleanUrlJasaKons
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
    if (urlMappingFinishing[cleanUrlJasaKons]) {
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
        pageNameKonstruksiSub.textContent = urlMappingFinishing[cleanUrlJasaKons];
    }
  // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingFinishing[cleanUrlJasaKons]) {
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
                   "name": urlMappingFinishing[cleanUrlJasaKons],
                   "item": cleanUrlJasaKons
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
    if (urlMappingPondasi[cleanUrlJasaKons]) {
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
        pageNameKonstruksiSub.textContent = urlMappingPondasi[cleanUrlJasaKons];
    }
  // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingPondasi[cleanUrlJasaKons]) {
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
                   "name": urlMappingPondasi[cleanUrlJasaKons],
                   "item": cleanUrlJasaKons
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
    if (urlMappingSaluran[cleanUrlJasaKons]) {
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
        pageNameKonstruksiSub.textContent = urlMappingSaluran[cleanUrlJasaKons];
    }
  
  // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingSaluran[cleanUrlJasaKons]) {
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
                   "name": urlMappingSaluran[cleanUrlJasaKons],
                   "item": cleanUrlJasaKons
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
	
    if (urlMappingJalan[cleanUrlJasaKons]) {
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
        pageNameKonstruksiSub.textContent = urlMappingJalan[cleanUrlJasaKons];
    }
  // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJalan[cleanUrlJasaKons]) {
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
                   "name": urlMappingJalan[cleanUrlJasaKons],
                   "item": cleanUrlJasaKons
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
    if (urlMappingPembatas[cleanUrlJasaKons]) {
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
        pageNameKonstruksiSub.textContent = urlMappingPembatas[cleanUrlJasaKons];
    }
  // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingPembatas[cleanUrlJasaKons]) {
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
                   "name": urlMappingPembatas[cleanUrlJasaKons],
                   "item": cleanUrlJasaKons
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
	
  if (urlMappingPematanganLahan[cleanUrlJasaKons]) {
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
        pageNameKonstruksiSub.textContent = urlMappingPematanganLahan[cleanUrlJasaKons];
    }

  // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingPematanganLahan[cleanUrlJasaKons]) {
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
                   "name": urlMappingPematanganLahan[cleanUrlJasaKons],
                   "item": cleanUrlJasaKons
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
	
   if (urlMappingUjiTanah[cleanUrlJasaKons]) {
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
        pageNameKonstruksiSub.textContent = urlMappingUjiTanah[cleanUrlJasaKons];
    }
   
  // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingUjiTanah[cleanUrlJasaKons]) {
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
                   "name": urlMappingUjiTanah[cleanUrlJasaKons],
                   "item": cleanUrlJasaKons
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
   if (urlMappingPerkuatanTanahLongsor[cleanUrlJasaKons]) {
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
        pageNameKonstruksiSub.textContent = urlMappingPerkuatanTanahLongsor[cleanUrlJasaKons];
    }
  
  // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingPerkuatanTanahLongsor[cleanUrlJasaKons]) {
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
                   "name": urlMappingPerkuatanTanahLongsor[cleanUrlJasaKons],
                   "item": cleanUrlJasaKons
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
   if (urlMappingBongkarBangunan[cleanUrlJasaKons]) {
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
        pageNameKonstruksiSub.textContent = urlMappingBongkarBangunan[cleanUrlJasaKons];
    }
 
  // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingBongkarBangunan[cleanUrlJasaKons]) {
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
                   "name": urlMappingBongkarBangunan[cleanUrlJasaKons],
                   "item": cleanUrlJasaKons
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }

  if (urlMappingPerawatanPerbaikanBangunan[cleanUrlJasaKons]) {
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
        pageNameKonstruksiSub.textContent = urlMappingPerawatanPerbaikanBangunan[cleanUrlJasaKons];
    }
 
  // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingPerawatanPerbaikanBangunan[cleanUrlJasaKons]) {
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
                   "name": urlMappingPerawatanPerbaikanBangunan[cleanUrlJasaKons],
                   "item": cleanUrlJasaKons
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }

   if (urlMappingPerbaikanInfrastruktur[cleanUrlJasaKons]) {
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
        pageNameKonstruksiSub.textContent = urlMappingPerbaikanInfrastruktur[cleanUrlJasaKons];
    }
 
  // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingPerbaikanInfrastruktur[cleanUrlJasaKons]) {
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
                   "name": urlMappingPerbaikanInfrastruktur[cleanUrlJasaKons],
                   "item": cleanUrlJasaKons
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
	
   if (urlMappingPengeboran[cleanUrlJasaKons]) {
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
        pageNameKonstruksiSub.textContent = urlMappingPengeboran[cleanUrlJasaKons];
    }
   // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingPengeboran[cleanUrlJasaKons]) {
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
                   "name": urlMappingPengeboran[cleanUrlJasaKons],
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
if (urlMappingJasaInstalasiListrik[cleanUrlJasaKons]) {
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
        pageNameKonstruksiSub.textContent = urlMappingJasaInstalasiListrik[cleanUrlJasaKons];
    }

  // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaInstalasiListrik[cleanUrlJasaKons]) {
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
                   "name": urlMappingJasaInstalasiListrik[cleanUrlJasaKons],
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
