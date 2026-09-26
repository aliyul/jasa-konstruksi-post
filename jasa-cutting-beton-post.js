/* ============================================================
   FILE: jasa-cutting-beton-post.js
   FUNGSI: Breadcrumb + Date Modified untuk cluster Jasa Konstruksi
   VERSI: v2.0.0 — Early Exit Pattern
   ============================================================
   ALUR:
   1. Deklarasi semua mapping (26 mapping)
   2. EARLY EXIT: Cek URL browser vs mapping
   3. Kalau TIDAK cocok → return (skip cepat)
   4. Kalau cocok → eksekusi breadcrumb
   ============================================================ */

// ═══════════════════════════════════════════════════════════════
// DEKLARASI MAPPING (26 mapping — TIDAK DIUBAH)
// ═══════════════════════════════════════════════════════════════

const urlMappingJasaSaluraDrainaseFromMoneyMasterMoneyChild = {
  "https://www.betonjayareadymix.com/2019/09/jasa-saluran-drainase-terdekat.html": "Jasa Saluran & Drainase Terdekat",
  "https://www.betonjayareadymix.com/2019/09/jasa-saluran-drainase-jakarta.html": "Jasa Saluran & Drainase Jakarta",
  "https://www.betonjayareadymix.com/2019/09/jasa-saluran-drainase-bogor.html": "Jasa Saluran & Drainase Bogor",
  "https://www.betonjayareadymix.com/2019/09/jasa-saluran-drainase-depok.html": "Jasa Saluran & Drainase Depok",
  "https://www.betonjayareadymix.com/2019/09/jasa-saluran-drainase-tangerang.html": "Jasa Saluran & Drainase Tangerang",
  "https://www.betonjayareadymix.com/2019/09/jasa-saluran-drainase-bekasi.html": "Jasa Saluran & Drainase Bekasi",
  "https://www.betonjayareadymix.com/2019/09/jasa-saluran-drainase-karawang.html": "Jasa Saluran & Drainase Karawang"
};

const urlMappingJasaCuttingBetonFromMoneyMasterMoneyPage = {
  "https://www.betonjayareadymix.com/2019/06/jasa-pemotongan-jalan-beton.html": "Jasa Pemotongan Jalan Beton",
  "https://www.betonjayareadymix.com/2019/06/jasa-cutting-beton-lantai.html": "Jasa Cutting Beton Lantai",
  "https://www.betonjayareadymix.com/2019/06/jasa-cutting-beton-dinding.html": "Jasa Cutting Beton Dinding",
  "https://www.betonjayareadymix.com/2019/06/jasa-cutting-beton-jalan.html": "Jasa Cutting Beton Jalan",
  "https://www.betonjayareadymix.com/2019/06/jasa-cutting-beton-bertulang.html": "Jasa Cutting Beton Bertulang"
};

const urlMappingHargaJasaCuttingBetonFromMoneyMasterMoneyPage = {
  "https://www.betonjayareadymix.com/2019/06/harga-jasa-cutting-expansion-joint.html": "Harga Jasa Cutting Expansion Joint Beton",
  "https://www.betonjayareadymix.com/2019/06/harga-jasa-cutting-beton-per-meter.html": "Harga Jasa Cutting Beton Per Meter"
};

const urlMappingHargaJasaCuttingBetonFromMoneyMasterMoneyChild = {
  "https://www.betonjayareadymix.com/2019/06/harga-jasa-cutting-beton-jakarta.html": "Harga Jasa Cutting Beton Jakarta",
  "https://www.betonjayareadymix.com/2019/06/harga-jasa-cutting-beton-bogor.html": "Harga Jasa Cutting Beton Bogor",
  "https://www.betonjayareadymix.com/2019/06/harga-jasa-cutting-beton-depok.html": "Harga Jasa Cutting Beton Depok",
  "https://www.betonjayareadymix.com/2019/06/harga-jasa-cutting-beton-tangerang.html": "Harga Jasa Cutting Beton Tangerang",
  "https://www.betonjayareadymix.com/2019/06/harga-jasa-cutting-beton-bekasi.html": "Harga Jasa Cutting Beton Bekasi",
  "https://www.betonjayareadymix.com/2019/06/harga-jasa-cutting-beton-karawang.html": "Harga Jasa Cutting Beton Karawang"
};

const urlMappingJasaSondirTanahFromMoneyMaster1MoneyPage = {
  "https://www.betonjayareadymix.com/2019/09/jasa-sondir-cepat-jadwal-fleksibel.html": "Jasa Sondir Cepat dengan Jadwal Fleksibel",
  "https://www.betonjayareadymix.com/2019/09/jasa-sondir-area-perumahan.html": "Jasa Sondir Area Perumahan",
  "https://www.betonjayareadymix.com/2019/09/jasa-sondir-lahan-sempit-padat.html": "Jasa Sondir Lahan Sempit & Padat",
  "https://www.betonjayareadymix.com/2019/09/jasa-sondir-laporan-grafik-interpretasi.html": "Jasa Sondir dengan Laporan Grafik & Interpretasi",
  "https://www.betonjayareadymix.com/2019/09/jasa-sondir-analisis-lapisan-tanah.html": "Jasa Sondir Analisis Lapisan Tanah",
  "https://www.betonjayareadymix.com/2019/09/jasa-sondir-pondasi-dangkal.html": "Jasa Sondir untuk Pondasi Dangkal",
  "https://www.betonjayareadymix.com/2019/09/jasa-sondir-daya-dukung-tanah.html": "Jasa Sondir Daya Dukung Tanah",
  "https://www.betonjayareadymix.com/2019/09/jasa-sondir-portable-akses-terbatas.html": "Jasa Sondir Portable Akses Terbatas",
  "https://www.betonjayareadymix.com/2019/09/jasa-sondir-tanah-hidrolik.html": "Jasa Sondir Tanah Hidrolik",
  "https://www.betonjayareadymix.com/2019/09/jasa-sondir-tanah-manual.html": "Jasa Sondir Tanah Manual",
  "https://www.betonjayareadymix.com/2019/09/jasa-sondir-renovasi-bangunan.html": "Jasa Sondir untuk Renovasi Bangunan",
  "https://www.betonjayareadymix.com/2019/09/jasa-sondir-proyek-skala-kecil.html": "Jasa Sondir Proyek Skala Kecil",
  "https://www.betonjayareadymix.com/2019/09/jasa-sondir-ruko-komersial.html": "Jasa Sondir Ruko & Bangunan Komersial",
  "https://www.betonjayareadymix.com/2019/09/jasa-sondir-gedung-bertingkat.html": "Jasa Sondir Gedung Bertingkat",
  "https://www.betonjayareadymix.com/2019/09/jasa-sondir-rumah-tinggal.html": "Jasa Sondir Rumah Tinggal"
};

const urlMappingJasaCptTanahFromMoneyMaster1MoneyPage = {
  "https://www.betonjayareadymix.com/2019/09/jasa-cpt-perumahan-baru.html": "Jasa CPT Perumahan Baru",
  "https://www.betonjayareadymix.com/2019/09/jasa-cpt-jalan-tol-baru.html": "Jasa CPT Jalan Tol Baru",
  "https://www.betonjayareadymix.com/2019/09/jasa-cpt-infrastruktur-kritis.html": "Jasa CPT Infrastruktur Kritis",
  "https://www.betonjayareadymix.com/2019/09/jasa-cpt-jembatan-beton.html": "Jasa CPT Jembatan Beton",
  "https://www.betonjayareadymix.com/2019/09/jasa-cpt-bandara-internasional.html": "Jasa CPT Bandara Internasional"
};

const urlMappingJasaCptTanahFromMoneyMaster1MoneyChild = {
  "https://www.betonjayareadymix.com/2019/09/jasa-cpt-jakarta.html": "Jasa CPT Jakarta",
  "https://www.betonjayareadymix.com/2019/09/jasa-cpt-bogor.html": "Jasa CPT Bogor",
  "https://www.betonjayareadymix.com/2019/09/jasa-cpt-depok.html": "Jasa CPT Depok",
  "https://www.betonjayareadymix.com/2019/09/jasa-cpt-tangerang.html": "Jasa CPT Tangerang",
  "https://www.betonjayareadymix.com/2019/09/jasa-cpt-bekasi.html": "Jasa CPT Bekasi",
  "https://www.betonjayareadymix.com/2019/09/jasa-cpt-karawang.html": "Jasa CPT Karawang"
};

const urlMappingJasaBoringTanahFromMoneyMaster1MoneyPage = {
  "https://www.betonjayareadymix.com/2019/09/jasa-boring-tanah-rumah-tinggal.html": "Jasa Boring Tanah Rumah Tinggal",
  "https://www.betonjayareadymix.com/2019/09/jasa-boring-tanah-gedung.html": "Jasa Boring Tanah Gedung",
  "https://www.betonjayareadymix.com/2019/09/jasa-boring-tanah-jembatan.html": "Jasa Boring Tanah Jembatan",
  "https://www.betonjayareadymix.com/2019/09/jasa-boring-tanah-jalan-tol.html": "Jasa Boring Tanah Jalan Tol",
  "https://www.betonjayareadymix.com/2019/09/jasa-boring-tanah-perumahan.html": "Jasa Boring Tanah Perumahan"
};

const urlMappingJasaLabTanahFromMoneyMaster1MoneyPage = {
  // Kosong untuk saat ini — saran di comment
};

const urlMappingJasaUjiPenetrasiFromMoneyMaster1MoneyPage = {
  // Kosong untuk saat ini — saran di comment
};

const urlMappingJasaPematanganLahanFromMoneyMasterMoneyChild = {
  "https://www.betonjayareadymix.com/2019/09/jasa-pematangan-lahan-terdekat.html": "Jasa Pematangan Lahan Terdekat",
  "https://www.betonjayareadymix.com/2019/09/jasa-pematangan-lahan-jakarta.html": "Jasa Pematangan Lahan Jakarta",
  "https://www.betonjayareadymix.com/2019/09/jasa-pematangan-lahan-bogor.html": "Jasa Pematangan Lahan Bogor",
  "https://www.betonjayareadymix.com/2019/09/jasa-pematangan-lahan-depok.html": "Jasa Pematangan Lahan Depok",
  "https://www.betonjayareadymix.com/2019/09/jasa-pematangan-lahan-tangerang.html": "Jasa Pematangan Lahan Tangerang",
  "https://www.betonjayareadymix.com/2019/09/jasa-pematangan-lahan-bekasi.html": "Jasa Pematangan Lahan Bekasi",
  "https://www.betonjayareadymix.com/2019/09/jasa-pematangan-lahan-karawang.html": "Jasa Pematangan Lahan Karawang"
};

const urlMappingJasaPemotonganBukitLahanFromMoneyPageMoneyPage1 = {
  "https://www.betonjayareadymix.com/2019/09/jasa-pemotongan-bukit-lahan-borongan.html": "Jasa Pemotongan Bukit Lahan Borongan",
  "https://www.betonjayareadymix.com/2019/09/jasa-pemotongan-bukit-lahan-parkir-lapangan.html": "Jasa Pemotongan Bukit Lahan Parkir & Lapangan",
  "https://www.betonjayareadymix.com/2019/09/jasa-pemotongan-bukit-lahan-kavling.html": "Jasa Pemotongan Bukit Lahan Kavling",
  "https://www.betonjayareadymix.com/2019/09/jasa-pemotongan-bukit-lahan-jalan-akses.html": "Jasa Pemotongan Bukit Lahan Jalan Akses",
  "https://www.betonjayareadymix.com/2019/09/jasa-pemotongan-bukit-lahan-luas.html": "Jasa Pemotongan Bukit Lahan Luas",
  "https://www.betonjayareadymix.com/2019/09/jasa-pemotongan-bukit-lahan-rawan-longsor.html": "Jasa Pemotongan Bukit Lahan Rawan Longsor",
  "https://www.betonjayareadymix.com/2019/09/jasa-pemotongan-bukit-lahan-curam-terjal.html": "Jasa Pemotongan Bukit Lahan Curam & Terjal",
  "https://www.betonjayareadymix.com/2019/09/jasa-cut-fill-bukit-lahan.html": "Jasa Cut & Fill Bukit Lahan",
  "https://www.betonjayareadymix.com/2019/09/jasa-pemotongan-bukit-lahan-dengan-alat.html": "Jasa Pemotongan Bukit Lahan dengan Alat",
  "https://www.betonjayareadymix.com/2019/09/jasa-pemotongan-bukit-lahan-manual-semi.html": "Jasa Pemotongan Bukit Lahan Manual & Semi Manual"
};

const urlMappingJasaPengupasanLahanTanahFromMoneyPageMoneyPage1 = {
  "https://www.betonjayareadymix.com/2019/09/jasa-pengupasan-lahan-tanah-proyek-perumahan.html": "Jasa Pengupasan Lahan Tanah Proyek Perumahan",
  "https://www.betonjayareadymix.com/2019/09/jasa-pengupasan-lahan-tanah-proyek-komersial.html": "Jasa Pengupasan Lahan Tanah Proyek Komersial",
  "https://www.betonjayareadymix.com/2019/09/jasa-pengupasan-lahan-tanah-proyek-infrastruktur.html": "Jasa Pengupasan Lahan Tanah Proyek Infrastruktur",
  "https://www.betonjayareadymix.com/2019/09/jasa-pengupasan-lahan-tanah-kawasan-estate.html": "Jasa Pengupasan Lahan Tanah Kawasan Estate",
  "https://www.betonjayareadymix.com/2019/09/jasa-pengupasan-lahan-tanah-siap-bangun.html": "Jasa Pengupasan Lahan Tanah Siap Bangun",
  "https://www.betonjayareadymix.com/2019/09/jasa-pengupasan-lahan-tanah-siap-pondasi.html": "Jasa Pengupasan Lahan Tanah Siap Pondasi",
  "https://www.betonjayareadymix.com/2019/09/jasa-pengupasan-lahan-tanah-tahap-awal.html": "Jasa Pengupasan Lahan Tanah Tahap Awal",
  "https://www.betonjayareadymix.com/2019/09/jasa-pengupasan-lahan-tanah-untuk-pematangan.html": "Jasa Pengupasan Lahan Tanah untuk Pematangan"
};

const urlMappingJasaTebangPohonPematanganLahanFromMoneyPageMoneyPage1 = {
  "https://www.betonjayareadymix.com/2019/09/jasa-tebang-pohon-besar.html": "Jasa Tebang Pohon Besar",
  "https://www.betonjayareadymix.com/2019/09/jasa-tebang-pohon-dekat-bangunan.html": "Jasa Tebang Pohon Dekat Bangunan",
  "https://www.betonjayareadymix.com/2019/09/jasa-tebang-pohon-pematangan-lahan.html": "Jasa Tebang Pohon untuk Pematangan Lahan",
  "https://www.betonjayareadymix.com/2019/09/jasa-tebang-pohon-cabut-akar.html": "Jasa Tebang Pohon + Cabut Akar",
  "https://www.betonjayareadymix.com/2019/09/jasa-tebang-pohon-proyek-konstruksi.html": "Jasa Tebang Pohon Proyek Konstruksi",
  "https://www.betonjayareadymix.com/2019/09/jasa-tebang-pohon-aman-bersertifikat.html": "Jasa Tebang Pohon Aman & Bersertifikat",
  "https://www.betonjayareadymix.com/2019/09/jasa-tebang-pohon-darurat.html": "Jasa Tebang Pohon Darurat",
  "https://www.betonjayareadymix.com/2019/09/jasa-tebang-pohon-pembuangan-limbah.html": "Jasa Tebang Pohon & Pembuangan Limbah",
  "https://www.betonjayareadymix.com/2019/09/jasa-tebang-pohon-area-perkotaan.html": "Jasa Tebang Pohon Area Perkotaan"
};

const urlMappingJasaPerataandanGradingLahanFromMoneyPageMoneyPage1 = {
  "https://www.betonjayareadymix.com/2019/09/jasa-rough-grading-lahan.html": "Jasa Rough Grading Lahan",
  "https://www.betonjayareadymix.com/2019/09/jasa-fine-grading-lahan.html": "Jasa Fine Grading Lahan",
  "https://www.betonjayareadymix.com/2019/09/jasa-perataan-akhir-lahan.html": "Jasa Perataan Akhir Lahan",
  "https://www.betonjayareadymix.com/2019/09/jasa-pembentukan-elevasi-leveling-lahan.html": "Jasa Pembentukan Elevasi & Leveling Lahan",
  "https://www.betonjayareadymix.com/2019/09/jasa-pembentukan-kontur-grading-lahan.html": "Jasa Pembentukan Kontur & Grading Lahan",
  "https://www.betonjayareadymix.com/2019/09/jasa-perataan-dan-grading-lahan-presisi.html": "Jasa Perataan dan Grading Lahan Presisi",
  "https://www.betonjayareadymix.com/2019/09/jasa-perataan-dan-grading-lahan-kavling.html": "Jasa Perataan dan Grading Lahan Kavling",
  "https://www.betonjayareadymix.com/2019/09/jasa-grading-lahan-perumahan.html": "Jasa Grading Lahan Perumahan",
  "https://www.betonjayareadymix.com/2019/09/jasa-grading-lahan-komersial.html": "Jasa Grading Lahan Komersial",
  "https://www.betonjayareadymix.com/2019/09/jasa-grading-lahan-lahan-kosong.html": "Jasa Grading Lahan Lahan Kosong",
  "https://www.betonjayareadymix.com/2019/09/jasa-grading-lahan-alat-berat.html": "Jasa Grading Lahan Alat Berat",
  "https://www.betonjayareadymix.com/2019/09/jasa-grading-lahan-skala-kecil.html": "Jasa Grading Lahan Skala Kecil",
  "https://www.betonjayareadymix.com/2019/09/jasa-grading-lahan-miring.html": "Jasa Grading Lahan Miring",
  "https://www.betonjayareadymix.com/2019/09/jasa-perataan-dan-grading-lahan-cepat.html": "Jasa Perataan dan Grading Lahan Cepat",
  "https://www.betonjayareadymix.com/2019/09/jasa-grading-lahan-siap-jual.html": "Jasa Grading Lahan Siap Jual"
};

const urlMappingJasaPekerjaanElevasiLahanFromMoneyPageMoneyPage1 = {
  "https://www.betonjayareadymix.com/2019/09/jasa-elevasi-lahan-borongan.html": "Jasa Elevasi Lahan Borongan",
  "https://www.betonjayareadymix.com/2019/09/jasa-elevasi-lahan-gudang-area-industri.html": "Jasa Elevasi Lahan Gudang & Area Industri",
  "https://www.betonjayareadymix.com/2019/09/jasa-elevasi-lahan-kavling.html": "Jasa Elevasi Lahan Kavling",
  "https://www.betonjayareadymix.com/2019/09/jasa-elevasi-lahan-area-parkir-lapangan.html": "Jasa Elevasi Lahan Area Parkir & Lapangan",
  "https://www.betonjayareadymix.com/2019/09/jasa-elevasi-lahan-jalan-akses-proyek.html": "Jasa Elevasi Lahan Jalan Akses Proyek",
  "https://www.betonjayareadymix.com/2019/09/jasa-elevasi-lahan-lunak-bekas-timbunan.html": "Jasa Elevasi Lahan Lunak Bekas Timbunan",
  "https://www.betonjayareadymix.com/2019/09/jasa-elevasi-lahan-miring-tidak-rata.html": "Jasa Elevasi Lahan Miring & Tidak Rata",
  "https://www.betonjayareadymix.com/2019/09/jasa-elevasi-lahan-rata-siap-bangun.html": "Jasa Elevasi Lahan Rata Siap Bangun",
  "https://www.betonjayareadymix.com/2019/09/jasa-elevasi-lahan-urugan-pemadatan.html": "Jasa Elevasi Lahan Urugan & Pemadatan",
  "https://www.betonjayareadymix.com/2019/09/jasa-elevasi-lahan-alat-berat.html": "Jasa Elevasi Lahan Alat Berat",
  "https://www.betonjayareadymix.com/2019/09/jasa-elevasi-lahan-manual-semi-mekanis.html": "Jasa Elevasi Lahan Manual & Semi Mekanis"
};

const urlMappingJasaPembentukanBadanLahanFromMoneyPageMoneyPage1 = {
  "https://www.betonjayareadymix.com/2019/09/jasa-perataan-badan-lahan.html": "Jasa Perataan Badan Lahan",
  "https://www.betonjayareadymix.com/2019/09/jasa-pemadatan-badan-lahan.html": "Jasa Pemadatan Badan Lahan",
  "https://www.betonjayareadymix.com/2019/09/jasa-pengurugan-badan-lahan.html": "Jasa Pengurugan Badan Lahan",
  "https://www.betonjayareadymix.com/2019/09/jasa-penyesuaian-elevasi-badan-lahan.html": "Jasa Penyesuaian Elevasi Badan Lahan",
  "https://www.betonjayareadymix.com/2019/09/jasa-pembentukan-kontur-badan-lahan.html": "Jasa Pembentukan Kontur Badan Lahan",
  "https://www.betonjayareadymix.com/2019/09/jasa-badan-lahan-kavling-perumahan.html": "Jasa Badan Lahan Kavling Perumahan",
  "https://www.betonjayareadymix.com/2019/09/jasa-badan-lahan-lahan-kosong.html": "Jasa Badan Lahan Lahan Kosong",
  "https://www.betonjayareadymix.com/2019/09/jasa-badan-lahan-area-komersial.html": "Jasa Badan Lahan Area Komersial",
  "https://www.betonjayareadymix.com/2019/09/jasa-badan-lahan-kawasan-industri-ringan.html": "Jasa Badan Lahan Kawasan Industri Ringan",
  "https://www.betonjayareadymix.com/2019/09/jasa-badan-lahan-dengan-alat-berat.html": "Jasa Badan Lahan dengan Alat Berat",
  "https://www.betonjayareadymix.com/2019/09/jasa-badan-lahan-skala-kecil-menengah.html": "Jasa Badan Lahan Skala Kecil & Menengah",
  "https://www.betonjayareadymix.com/2019/09/jasa-badan-lahan-area-miring-tidak-rata.html": "Jasa Badan Lahan Area Miring & Tidak Rata",
  "https://www.betonjayareadymix.com/2019/09/jasa-badan-lahan-cepat-siap-bangun.html": "Jasa Badan Lahan Cepat Siap Bangun",
  "https://www.betonjayareadymix.com/2019/09/jasa-badan-lahan-siap-jual.html": "Jasa Badan Lahan Siap Jual"
};

const urlMappingJasaCutandFillLahanFromMoneyPageMoneyPage1 = {
  "https://www.betonjayareadymix.com/2019/09/jasa-monitoring-lahan-cut-and-fill.html": "Jasa Monitoring Lahan Cut and Fill",
  "https://www.betonjayareadymix.com/2019/09/jasa-pematangan-lahan-pertanian.html": "Jasa Pematangan Lahan Pertanian",
  "https://www.betonjayareadymix.com/2019/09/jasa-pengelolaan-lahan-berbatu-tebing.html": "Jasa Pengelolaan Lahan Berbatu & Tebing",
  "https://www.betonjayareadymix.com/2019/09/jasa-cut-and-fill-lahan-komersial.html": "Jasa Cut and Fill Lahan Komersial",
  "https://www.betonjayareadymix.com/2019/09/jasa-cut-and-fill-lahan-perumahan.html": "Jasa Cut and Fill Lahan Perumahan",
  "https://www.betonjayareadymix.com/2019/09/jasa-pengerukan-pemindahan-tanah.html": "Jasa Pengerukan & Pemindahan Tanah",
  "https://www.betonjayareadymix.com/2019/09/jasa-perencanaan-drainase-erosi-lahan.html": "Jasa Perencanaan Drainase & Erosi Lahan",
  "https://www.betonjayareadymix.com/2019/09/jasa-pemodelan-kontur-topografi-lahan.html": "Jasa Pemodelan Kontur & Topografi Lahan",
  "https://www.betonjayareadymix.com/2019/09/jasa-konsultan-cut-and-fill-lahan.html": "Jasa Konsultan Cut and Fill Lahan",
  "https://www.betonjayareadymix.com/2019/09/jasa-analisis-struktur-kualitas-tanah.html": "Jasa Analisis Struktur & Kualitas Tanah"
};

const urlMappingJasaUruganTanahLahanFromMoneyPageMoneyPage1 = {
  "https://www.betonjayareadymix.com/2019/09/jasa-urugan-tanah-lahan-hemat.html": "Jasa Urugan Tanah Lahan Hemat",
  "https://www.betonjayareadymix.com/2019/09/jasa-urugan-tanah-lahan-stabilitas.html": "Jasa Urugan Tanah Lahan Stabilitas",
  "https://www.betonjayareadymix.com/2019/09/jasa-urugan-tanah-lahan-developer.html": "Jasa Urugan Tanah Lahan Developer",
  "https://www.betonjayareadymix.com/2019/09/jasa-urugan-tanah-lahan-cepat.html": "Jasa Urugan Tanah Lahan Cepat",
  "https://www.betonjayareadymix.com/2019/09/jasa-urugan-tanah-lahan-konstruksi.html": "Jasa Urugan Tanah Lahan Konstruksi",
  "https://www.betonjayareadymix.com/2019/09/jasa-urugan-tanah-lahan-bergaransi.html": "Jasa Urugan Tanah Lahan Bergaransi",
  "https://www.betonjayareadymix.com/2019/09/jasa-urugan-tanah-lahan-alat-berat.html": "Jasa Urugan Tanah Lahan Alat Berat",
  "https://www.betonjayareadymix.com/2019/09/jasa-urugan-tanah-lahan-infrastruktur.html": "Jasa Urugan Tanah Lahan Infrastruktur",
  "https://www.betonjayareadymix.com/2019/09/jasa-urugan-tanah-lahan-perkebunan.html": "Jasa Urugan Tanah Lahan Perkebunan",
  "https://www.betonjayareadymix.com/2019/09/jasa-urugan-tanah-lahan-perumahan.html": "Jasa Urugan Tanah Lahan Perumahan"
};

const urlMappingJasaPemadatanTanahLahanFromMoneyPageMoneyPage1 = {
  "https://www.betonjayareadymix.com/2019/09/jasa-pemadatan-tanah-proyek-konstruksi.html": "Jasa Pemadatan Tanah Proyek Konstruksi",
  "https://www.betonjayareadymix.com/2019/09/jasa-pemadatan-lahan-sebelum-pembangunan.html": "Jasa Pemadatan Lahan Sebelum Pembangunan",
  "https://www.betonjayareadymix.com/2019/09/jasa-pemadatan-tanah-pondasi-bangunan.html": "Jasa Pemadatan Tanah Pondasi Bangunan",
  "https://www.betonjayareadymix.com/2019/09/jasa-pemadatan-tanah-jalan-infrastruktur.html": "Jasa Pemadatan Tanah Jalan & Infrastruktur",
  "https://www.betonjayareadymix.com/2019/09/jasa-pemadatan-tanah-perumahan-kavling.html": "Jasa Pemadatan Tanah Perumahan & Kavling",
  "https://www.betonjayareadymix.com/2019/09/jasa-pemadatan-tanah-vibro-roller.html": "Jasa Pemadatan Tanah Vibro Roller",
  "https://www.betonjayareadymix.com/2019/09/jasa-pemadatan-tanah-stamper-kodok.html": "Jasa Pemadatan Tanah Stamper Kodok",
  "https://www.betonjayareadymix.com/2019/09/jasa-pemadatan-tanah-manual-alat-berat.html": "Jasa Pemadatan Tanah Manual & Alat Berat",
  "https://www.betonjayareadymix.com/2019/09/jasa-pemadatan-lahan-perkebunan-pertanian.html": "Jasa Pemadatan Lahan Perkebunan & Pertanian",
  "https://www.betonjayareadymix.com/2019/09/jasa-pemadatan-lahan-gudang-industri.html": "Jasa Pemadatan Lahan Gudang & Industri",
  "https://www.betonjayareadymix.com/2019/09/jasa-pemadatan-tanah-area-parkir-lapangan.html": "Jasa Pemadatan Tanah Area Parkir & Lapangan",
  "https://www.betonjayareadymix.com/2019/09/jasa-pemadatan-tanah-bergaransi.html": "Jasa Pemadatan Tanah Bergaransi",
  "https://www.betonjayareadymix.com/2019/09/jasa-pemadatan-tanah-tanah-lunak.html": "Jasa Pemadatan Tanah Lunak"
};

const urlMappingJasaPembersihanLahanPematanganFromMoneyPageMoneyPage1 = {
  "https://www.betonjayareadymix.com/2019/09/jasa-pembersihan-lahan-sebelum-dijual.html": "Jasa Pembersihan Lahan Sebelum Dijual",
  "https://www.betonjayareadymix.com/2019/09/jasa-pembersihan-lahan-terlantar.html": "Jasa Pembersihan Lahan Terlantar",
  "https://www.betonjayareadymix.com/2019/09/jasa-pembersihan-lahan-darurat.html": "Jasa Pembersihan Lahan Darurat",
  "https://www.betonjayareadymix.com/2019/09/jasa-pembersihan-lahan-skala-kecil.html": "Jasa Pembersihan Lahan Skala Kecil",
  "https://www.betonjayareadymix.com/2019/09/jasa-pembersihan-lahan-cepat-efisien.html": "Jasa Pembersihan Lahan Cepat & Efisien",
  "https://www.betonjayareadymix.com/2019/09/jasa-pembersihan-lahan-alat-berat.html": "Jasa Pembersihan Lahan Menggunakan Alat Berat",
  "https://www.betonjayareadymix.com/2019/09/jasa-pembersihan-lahan-kavling.html": "Jasa Pembersihan Lahan Kavling",
  "https://www.betonjayareadymix.com/2019/09/jasa-pembersihan-lahan-komersial-gudang.html": "Jasa Pembersihan Lahan Komersial & Gudang",
  "https://www.betonjayareadymix.com/2019/09/jasa-pembersihan-lahan-industri-ringan.html": "Jasa Pembersihan Lahan Industri Ringan",
  "https://www.betonjayareadymix.com/2019/09/jasa-pembersihan-lahan-pertanian.html": "Jasa Pembersihan Lahan Pertanian",
  "https://www.betonjayareadymix.com/2019/09/jasa-pembersihan-lahan-kebun-perkebunan.html": "Jasa Pembersihan Lahan Kebun & Perkebunan",
  "https://www.betonjayareadymix.com/2019/09/jasa-pembersihan-lahan-perumahan-kavling.html": "Jasa Pembersihan Lahan Perumahan & Kavling",
  "https://www.betonjayareadymix.com/2019/09/jasa-cut-fill-lahan-non-konstruksi.html": "Jasa Cut and Fill Lahan Non Konstruksi",
  "https://www.betonjayareadymix.com/2019/09/jasa-perataan-awal-lahan.html": "Jasa Perataan Awal Lahan",
  "https://www.betonjayareadymix.com/2019/09/jasa-pembersihan-lahan-sampah-puing.html": "Jasa Pembersihan Lahan dari Sampah & Puing",
  "https://www.betonjayareadymix.com/2019/09/jasa-cabut-akar-pembersihan-lahan.html": "Jasa Cabut Akar & Pembersihan Lahan",
  "https://www.betonjayareadymix.com/2019/09/jasa-pembersihan-semak-rumput-liar.html": "Jasa Pembersihan Semak & Rumput Liar",
  "https://www.betonjayareadymix.com/2019/09/jasa-land-clearing-lahan.html": "Jasa Land Clearing Lahan"
};

const urlMappingJasaBaseCourseLahanFromMoneyPageMoneyPage1 = {
  "https://www.betonjayareadymix.com/2019/09/jasa-base-course-borongan.html": "Jasa Base Course Borongan",
  "https://www.betonjayareadymix.com/2019/09/jasa-base-course-lahan-miring-tidak-rata.html": "Jasa Base Course Lahan Miring & Tidak Rata",
  "https://www.betonjayareadymix.com/2019/09/jasa-base-course-lahan-lunak.html": "Jasa Base Course Lahan Lunak",
  "https://www.betonjayareadymix.com/2019/09/jasa-base-course-gudang-area-industri.html": "Jasa Base Course Gudang & Area Industri",
  "https://www.betonjayareadymix.com/2019/09/jasa-base-course-kavling-lahan-bangunan.html": "Jasa Base Course Kavling & Lahan Bangunan",
  "https://www.betonjayareadymix.com/2019/09/jasa-base-course-area-parkir-lapangan.html": "Jasa Base Course Area Parkir & Lapangan",
  "https://www.betonjayareadymix.com/2019/09/jasa-base-course-jalan-akses.html": "Jasa Base Course Jalan Akses",
  "https://www.betonjayareadymix.com/2019/09/jasa-base-course-alat-berat.html": "Jasa Base Course Alat Berat",
  "https://www.betonjayareadymix.com/2019/09/jasa-base-course-manual-semi-mekanis.html": "Jasa Base Course Manual & Semi Mekanis",
  "https://www.betonjayareadymix.com/2019/09/jasa-base-course-agregat-kelas-c.html": "Jasa Base Course Agregat Kelas C",
  "https://www.betonjayareadymix.com/2019/09/jasa-base-course-agregat-kelas-b.html": "Jasa Base Course Agregat Kelas B",
  "https://www.betonjayareadymix.com/2019/09/jasa-base-course-agregat-kelas-a.html": "Jasa Base Course Agregat Kelas A",
  "https://www.betonjayareadymix.com/2019/09/jasa-base-course-lpb.html": "Jasa Base Course LPB",
  "https://www.betonjayareadymix.com/2019/09/jasa-base-course-lpa.html": "Jasa Base Course LPA"
};

const urlMappingJasaStabilisasiTanahLahanFromMoneyPageMoneyPage1 = {
  "https://www.betonjayareadymix.com/2019/09/jasa-stabilisasi-tanah-skala-kecil.html": "Jasa Stabilisasi Tanah Skala Kecil",
  "https://www.betonjayareadymix.com/2019/09/jasa-stabilisasi-tanah-manual-semi-mekanis.html": "Jasa Stabilisasi Tanah Manual & Semi Mekanis",
  "https://www.betonjayareadymix.com/2019/09/jasa-stabilisasi-tanah-dengan-alat-berat.html": "Jasa Stabilisasi Tanah dengan Alat Berat",
  "https://www.betonjayareadymix.com/2019/09/jasa-stabilisasi-tanah-kawasan-industri.html": "Jasa Stabilisasi Tanah Kawasan Industri",
  "https://www.betonjayareadymix.com/2019/09/jasa-stabilisasi-tanah-area-komersial.html": "Jasa Stabilisasi Tanah Area Komersial",
  "https://www.betonjayareadymix.com/2019/09/jasa-stabilisasi-tanah-lahan-kavling.html": "Jasa Stabilisasi Tanah Lahan Kavling",
  "https://www.betonjayareadymix.com/2019/09/jasa-stabilisasi-tanah-lahan-perumahan.html": "Jasa Stabilisasi Tanah Lahan Perumahan",
  "https://www.betonjayareadymix.com/2019/09/jasa-stabilisasi-tanah-basah.html": "Jasa Stabilisasi Tanah Basah",
  "https://www.betonjayareadymix.com/2019/09/jasa-stabilisasi-tanah-rawan-longsor.html": "Jasa Stabilisasi Tanah Rawan Longsor",
  "https://www.betonjayareadymix.com/2019/09/jasa-stabilisasi-tanah-berpasir.html": "Jasa Stabilisasi Tanah Berpasir",
  "https://www.betonjayareadymix.com/2019/09/jasa-stabilisasi-tanah-lunak-lembek.html": "Jasa Stabilisasi Tanah Lunak & Lembek",
  "https://www.betonjayareadymix.com/2019/09/jasa-stabilisasi-tanah-geotekstil.html": "Jasa Stabilisasi Tanah dengan Geotekstil",
  "https://www.betonjayareadymix.com/2019/09/jasa-stabilisasi-tanah-mekanis.html": "Jasa Stabilisasi Tanah Mekanis",
  "https://www.betonjayareadymix.com/2019/09/jasa-stabilisasi-tanah-kimia.html": "Jasa Stabilisasi Tanah Kimia",
  "https://www.betonjayareadymix.com/2019/09/jasa-stabilisasi-tanah-dengan-kapur.html": "Jasa Stabilisasi Tanah dengan Kapur",
  "https://www.betonjayareadymix.com/2019/09/jasa-stabilisasi-tanah-dengan-semen.html": "Jasa Stabilisasi Tanah dengan Semen"
};

const urlMappingJasaPemasanganDrainaseLahanFromMoneyPageMoneyPage1 = {
  "https://www.betonjayareadymix.com/2019/09/jasa-pembuatan-saluran-drainase-lahan.html": "Jasa Pembuatan Saluran Drainase Lahan",
  "https://www.betonjayareadymix.com/2019/09/jasa-drainase-lahan-terbuka.html": "Jasa Drainase Lahan Terbuka",
  "https://www.betonjayareadymix.com/2019/09/jasa-drainase-lahan-tertutup.html": "Jasa Drainase Lahan Tertutup",
  "https://www.betonjayareadymix.com/2019/09/jasa-subdrain-drainase-lahan.html": "Jasa Subdrain Drainase Lahan",
  "https://www.betonjayareadymix.com/2019/09/jasa-sistem-drainase-air-hujan-lahan.html": "Jasa Sistem Drainase Air Hujan Lahan",
  "https://www.betonjayareadymix.com/2019/09/jasa-pembuatan-sumur-resapan.html": "Jasa Pembuatan Sumur Resapan",
  "https://www.betonjayareadymix.com/2019/09/jasa-pembuatan-parit-gorong-gorong-lahan.html": "Jasa Pembuatan Parit & Gorong-Gorong Lahan",
  "https://www.betonjayareadymix.com/2019/09/jasa-kolam-resapan-lahan.html": "Jasa Pembuatan Kolam Resapan Lahan",
  "https://www.betonjayareadymix.com/2019/09/jasa-normalisasi-drainase-lahan.html": "Jasa Normalisasi Drainase Lahan",
  "https://www.betonjayareadymix.com/2019/09/jasa-drainase-lahan-perumahan.html": "Jasa Drainase Lahan Perumahan",
  "https://www.betonjayareadymix.com/2019/09/jasa-drainase-lahan-kavling-lahan-kosong.html": "Jasa Drainase Lahan Kavling & Lahan Kosong",
  "https://www.betonjayareadymix.com/2019/09/jasa-drainase-lahan-area-komersial.html": "Jasa Drainase Lahan Area Komersial",
  "https://www.betonjayareadymix.com/2019/09/jasa-drainase-lahan-kawasan-industri.html": "Jasa Drainase Lahan Kawasan Industri",
  "https://www.betonjayareadymix.com/2019/09/jasa-drainase-lahan-dengan-alat-berat.html": "Jasa Drainase Lahan Dengan Alat Berat",
  "https://www.betonjayareadymix.com/2019/09/jasa-drainase-lahan-manual-semi-mekanis.html": "Jasa Drainase Lahan Manual & Semi Mekanis",
  "https://www.betonjayareadymix.com/2019/09/jasa-drainase-lahan-rawan-banjir.html": "Jasa Drainase Lahan Rawan Banjir",
  "https://www.betonjayareadymix.com/2019/09/jasa-drainase-lahan-cepat-siap-digunakan.html": "Jasa Drainase Lahan Cepat Siap Digunakan"
};

const urlMappingJasaPemasanganGeotekstilLahanFromMoneyPageMoneyPage1 = {
  "https://www.betonjayareadymix.com/2019/09/jasa-geotekstil-stabilisasi-subgrade.html": "Jasa Geotekstil Stabilisasi Subgrade",
  "https://www.betonjayareadymix.com/2019/09/jasa-pemasangan-geotekstil-base-course.html": "Jasa Pemasangan Geotekstil Base Course",
  "https://www.betonjayareadymix.com/2019/09/jasa-geotekstil-lahan-lunak.html": "Jasa Geotekstil Lahan Lunak",
  "https://www.betonjayareadymix.com/2019/09/jasa-geotekstil-fondasi-bangunan-gudang.html": "Jasa Geotekstil Fondasi Bangunan & Gudang",
  "https://www.betonjayareadymix.com/2019/09/jasa-geotekstil-area-parkir-lapangan.html": "Jasa Geotekstil Area Parkir & Lapangan",
  "https://www.betonjayareadymix.com/2019/09/jasa-geotekstil-jalan-akses.html": "Jasa Geotekstil Jalan Akses",
  "https://www.betonjayareadymix.com/2019/09/jasa-geotekstil-separator.html": "Jasa Geotekstil Separator",
  "https://www.betonjayareadymix.com/2019/09/jasa-geotekstil-non-woven.html": "Jasa Geotekstil Non Woven",
  "https://www.betonjayareadymix.com/2019/09/jasa-geotekstil-woven.html": "Jasa Geotekstil Woven"
};

const urlMappingJasaPersiapanPondasiLahanFromMoneyPageMoneyPage1 = {
  "https://www.betonjayareadymix.com/2019/09/jasa-persiapan-pondasi-borongan.html": "Jasa Persiapan Pondasi Borongan",
  "https://www.betonjayareadymix.com/2019/09/jasa-persiapan-pondasi-gedung-bertingkat.html": "Jasa Persiapan Pondasi Gedung Bertingkat",
  "https://www.betonjayareadymix.com/2019/09/jasa-persiapan-pondasi-gudang-pabrik.html": "Jasa Persiapan Pondasi Gudang & Pabrik",
  "https://www.betonjayareadymix.com/2019/09/jasa-persiapan-pondasi-rumah-tinggal.html": "Jasa Persiapan Pondasi Rumah Tinggal",
  "https://www.betonjayareadymix.com/2019/09/jasa-persiapan-pondasi-lahan-miring.html": "Jasa Persiapan Pondasi Lahan Miring",
  "https://www.betonjayareadymix.com/2019/09/jasa-persiapan-pondasi-lahan-lunak.html": "Jasa Persiapan Pondasi Lahan Lunak",
  "https://www.betonjayareadymix.com/2019/09/jasa-stabilisasi-tanah-untuk-pondasi.html": "Jasa Stabilisasi Tanah untuk Pondasi",
  "https://www.betonjayareadymix.com/2019/09/jasa-pemasangan-geotekstil-pondasi.html": "Jasa Pemasangan Geotekstil Pondasi",
  "https://www.betonjayareadymix.com/2019/09/jasa-base-course-pondasi-bangunan.html": "Jasa Base Course Pondasi Bangunan",
  "https://www.betonjayareadymix.com/2019/09/jasa-galian-urugan-pondasi.html": "Jasa Galian & Urugan Pondasi",
  "https://www.betonjayareadymix.com/2019/09/jasa-pemadatan-tanah-pondasi.html": "Jasa Pemadatan Tanah Pondasi",
  "https://www.betonjayareadymix.com/2019/09/jasa-perataan-grading-lahan-pondasi.html": "Jasa Perataan & Grading Lahan Pondasi",
  "https://www.betonjayareadymix.com/2019/09/jasa-pembersihan-clearing-lahan-pondasi.html": "Jasa Pembersihan & Clearing Lahan Pondasi"
};

// ═══════════════════════════════════════════════════════════════
// FUNGSI PENDUKUNG (removeCondition, restoreCondition)
// ═══════════════════════════════════════════════════════════════

let removedElementsJasaCuttingBetonPost = {};

function removeCondition(conditionId) {
    const conditionElement = document.getElementById(conditionId);
    if (conditionElement) {
        removedElementsJasaCuttingBetonPost[conditionId] = conditionElement;
        conditionElement.remove();
    }
}

function restoreCondition(conditionId) {
    const breadcrumb = document.querySelector('.breadcrumb');
    const elementToRestore = removedElementsJasaCuttingBetonPost[conditionId];
    if (elementToRestore) {
        breadcrumb.appendChild(elementToRestore);
        delete removedElementsJasaCuttingBetonPost[conditionId];
    } else {
        console.log(`Elemen dengan ID ${conditionId} tidak ditemukan.`);
    }
}

// ═══════════════════════════════════════════════════════════════
// ⚡ EARLY EXIT — CEK URL SEBELUM EKSEKUSI (v2.0.0)
// ═══════════════════════════════════════════════════════════════
(function() {
  'use strict';
  
  var cleanUrl = window.location.href.split(/[?#]/)[0];
  console.log('[jasa-cutting-beton-post] 🔍 Check: ' + cleanUrl);
  
  // Gabungkan semua mapping ke dalam array (tanpa Object.assign)
  var ALL_MAPPINGS = [
    urlMappingJasaSaluraDrainaseFromMoneyMasterMoneyChild,
    urlMappingJasaCuttingBetonFromMoneyMasterMoneyPage,
    urlMappingHargaJasaCuttingBetonFromMoneyMasterMoneyPage,
    urlMappingHargaJasaCuttingBetonFromMoneyMasterMoneyChild,
    urlMappingJasaSondirTanahFromMoneyMaster1MoneyPage,
    urlMappingJasaCptTanahFromMoneyMaster1MoneyPage,
    urlMappingJasaCptTanahFromMoneyMaster1MoneyChild,
    urlMappingJasaBoringTanahFromMoneyMaster1MoneyPage,
    urlMappingJasaLabTanahFromMoneyMaster1MoneyPage,
    urlMappingJasaUjiPenetrasiFromMoneyMaster1MoneyPage,
    urlMappingJasaPematanganLahanFromMoneyMasterMoneyChild,
    urlMappingJasaPemotonganBukitLahanFromMoneyPageMoneyPage1,
    urlMappingJasaPengupasanLahanTanahFromMoneyPageMoneyPage1,
    urlMappingJasaTebangPohonPematanganLahanFromMoneyPageMoneyPage1,
    urlMappingJasaPerataandanGradingLahanFromMoneyPageMoneyPage1,
    urlMappingJasaPekerjaanElevasiLahanFromMoneyPageMoneyPage1,
    urlMappingJasaPembentukanBadanLahanFromMoneyPageMoneyPage1,
    urlMappingJasaCutandFillLahanFromMoneyPageMoneyPage1,
    urlMappingJasaUruganTanahLahanFromMoneyPageMoneyPage1,
    urlMappingJasaPemadatanTanahLahanFromMoneyPageMoneyPage1,
    urlMappingJasaPembersihanLahanPematanganFromMoneyPageMoneyPage1,
    urlMappingJasaBaseCourseLahanFromMoneyPageMoneyPage1,
    urlMappingJasaStabilisasiTanahLahanFromMoneyPageMoneyPage1,
    urlMappingJasaPemasanganDrainaseLahanFromMoneyPageMoneyPage1,
    urlMappingJasaPemasanganGeotekstilLahanFromMoneyPageMoneyPage1,
    urlMappingJasaPersiapanPondasiLahanFromMoneyPageMoneyPage1
  ];
  
  // Loop mapping — cek URL, break kalau cocok
  var found = false;
  for (var i = 0; i < ALL_MAPPINGS.length; i++) {
    var mapping = ALL_MAPPINGS[i];
    if (mapping && mapping[cleanUrl]) {
      found = true;
      console.log('[jasa-cutting-beton-post] ✅ Match di mapping #' + (i + 1));
      break;
    }
  }
  
  // ❌ Kalau tidak cocok — skip super cepat
  if (!found) {
    console.log('[jasa-cutting-beton-post] ⏭️ SKIP — URL tidak cocok');
    window.__jasaCuttingBetonPostActive = false;
    return;
  }
  
  // ✅ Cocok — set flag untuk eksekusi di DOMContentLoaded
  window.__jasaCuttingBetonPostActive = true;
  console.log('[jasa-cutting-beton-post] ✅ EXECUTE flag set');
  
})();

// ═══════════════════════════════════════════════════════════════
// DOMContentLoaded — EKSEKUSI (HANYA KALAU FLAG AKTIF)
// ═══════════════════════════════════════════════════════════════
document.addEventListener("DOMContentLoaded", function() {
  
  // ⚡ Early exit — skip kalau flag tidak aktif
  if (!window.__jasaCuttingBetonPostActive) {
    console.log('[jasa-cutting-beton-post] ⏭️ DOMContentLoaded SKIP');
    return;
  }
  
  const cleanUrlJasaCuttingBetonPost = window.location.href.split(/[?#]/)[0];
  
  console.log('[jasa-cutting-beton-post] 🚀 DOMContentLoaded EXECUTE');
  
  // Merge mapping (untuk breadcrumb)
  const urlMappingGabungan = Object.assign(
    {},
    urlMappingJasaSaluraDrainaseFromMoneyMasterMoneyChild,
    urlMappingJasaCuttingBetonFromMoneyMasterMoneyPage,
    urlMappingHargaJasaCuttingBetonFromMoneyMasterMoneyPage,
    urlMappingHargaJasaCuttingBetonFromMoneyMasterMoneyChild,
    urlMappingJasaSondirTanahFromMoneyMaster1MoneyPage,
    urlMappingJasaCptTanahFromMoneyMaster1MoneyPage,
    urlMappingJasaCptTanahFromMoneyMaster1MoneyChild,
    urlMappingJasaBoringTanahFromMoneyMaster1MoneyPage,
    urlMappingJasaLabTanahFromMoneyMaster1MoneyPage,
    urlMappingJasaUjiPenetrasiFromMoneyMaster1MoneyPage,
    urlMappingJasaPematanganLahanFromMoneyMasterMoneyChild,
    urlMappingJasaPemotonganBukitLahanFromMoneyPageMoneyPage1,
    urlMappingJasaPengupasanLahanTanahFromMoneyPageMoneyPage1,
    urlMappingJasaTebangPohonPematanganLahanFromMoneyPageMoneyPage1,
    urlMappingJasaPerataandanGradingLahanFromMoneyPageMoneyPage1,
    urlMappingJasaPekerjaanElevasiLahanFromMoneyPageMoneyPage1,
    urlMappingJasaPembentukanBadanLahanFromMoneyPageMoneyPage1,
    urlMappingJasaCutandFillLahanFromMoneyPageMoneyPage1,
    urlMappingJasaUruganTanahLahanFromMoneyPageMoneyPage1,
    urlMappingJasaPemadatanTanahLahanFromMoneyPageMoneyPage1,
    urlMappingJasaPembersihanLahanPematanganFromMoneyPageMoneyPage1,
    urlMappingJasaBaseCourseLahanFromMoneyPageMoneyPage1,
    urlMappingJasaStabilisasiTanahLahanFromMoneyPageMoneyPage1,
    urlMappingJasaPemasanganDrainaseLahanFromMoneyPageMoneyPage1,
    urlMappingJasaPemasanganGeotekstilLahanFromMoneyPageMoneyPage1,
    urlMappingJasaPersiapanPondasiLahanFromMoneyPageMoneyPage1
  );
  
  // Validasi (double check)
  if (!urlMappingGabungan[cleanUrlJasaCuttingBetonPost]) {
    console.log(`[jasa-cutting-beton-post] ⏭️ URL tidak terdaftar: ${cleanUrlJasaCuttingBetonPost}`);
    return;
  }
  
  // Menemukan elemen
  var JasaKonsCuttingBetonPost = document.getElementById("JasaKonsCuttingBetonPost");
  if (!JasaKonsCuttingBetonPost) {
    console.error("elemen Id JasaKonsCuttingBetonPost kondisi terhapus");
    return;
  }
  
  var JasaKonstruksiCuttingBetonPostLink = document.getElementById("JasaKonstruksiCuttingBetonPost");
  var JasaCuttingBetonPostLink = document.getElementById("JasaCuttingBetonPost");
  var JasaPematanganLahanPostLink = document.getElementById("JasaPematanganLahanPost");
  var JasaUjiTanahPostLink = document.getElementById("JasaUjiTanahPost");
  
  var JasaPemotonganBukitLahanPostLink = document.getElementById("JasaPemotonganBukitLahanPost");
  var JasaPengupasanLahanTanahPostLink = document.getElementById("JasaPengupasanLahanTanahPost");
  var JasaTebangPohonPostLink = document.getElementById("JasaTebangPohonPost");
  var JasaPerataandanGradingLahanPostLink = document.getElementById("JasaPerataandanGradingLahanPost");
  var JasaElevasiLahanPostLink = document.getElementById("JasaElevasiLahanPost");
  var JasaBadanLahanPostLink = document.getElementById("JasaBadanLahanPost");
  var JasaCutandFillLahanPostLink = document.getElementById("JasaCutandFillLahanPost");
  var JasaUruganTanahLahanPostLink = document.getElementById("JasaUruganTanahLahanPost");
  var JasaPemadatanTanahLahanPostLink = document.getElementById("JasaPemadatanTanahLahanPost");
  var JasaBaseCourseLahanPostLink = document.getElementById("JasaBaseCourseLahanPost");
  var JasaStabilisasiTanahLahanPostLink = document.getElementById("JasaStabilisasiTanahLahanPost");
  var JasaDrainaseLahanPostLink = document.getElementById("JasaDrainaseLahanPost");
  var JasaGeotekstilLahanPostLink = document.getElementById("JasaGeotekstilLahanPost");
  var JasaPersiapanPondasiLahanPostLink = document.getElementById("JasaPersiapanPondasiLahanPost");
  
  var JasaCptPostLink = document.getElementById("JasaCptPost");
  var JasaBoringTanahPostLink = document.getElementById("JasaBoringTanahPost");
  var JasaLabTanahPostLink = document.getElementById("JasaLabTanahPost");
  var JasaUjiPenetrasiPostLink = document.getElementById("JasaUjiPenetrasiPost");
  var JasaSondirPostLink = document.getElementById("JasaSondirPost");
  
  var pageNameJasaKonsCuttingBetonPost = document.getElementById("pageNameJasaKonsCuttingBetonPost");
  
  // Default sembunyikan
  if (JasaKonstruksiCuttingBetonPostLink) JasaKonstruksiCuttingBetonPostLink.style.visibility = 'hidden';
  if (JasaCuttingBetonPostLink) JasaCuttingBetonPostLink.style.visibility = 'hidden';
  if (pageNameJasaKonsCuttingBetonPost) pageNameJasaKonsCuttingBetonPost.textContent = "";
  
  // ═══════════════════════════════════════════════════════════════
  // EKSEKUSI BREADCRUMB (26 cluster — masing-masing dengan breadcrumb berbeda)
  // ═══════════════════════════════════════════════════════════════
  
  // ─── Cluster 1: Jasa Saluran Drainase ───
  if (urlMappingJasaSaluraDrainaseFromMoneyMasterMoneyChild[cleanUrlJasaCuttingBetonPost]) {
    generateBreadcrumbShared(
      urlMappingJasaSaluraDrainaseFromMoneyMasterMoneyChild,
      cleanUrlJasaCuttingBetonPost,
      [
        { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
        { name: 'Daftar Jasa Saluran & Drainase', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-saluran-drainase.html' },
        { name: 'Perbandingan Jasa Saluran & Drainase', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-saluran-drainase.html' },
        { name: 'Jasa Saluran & Drainase', url: 'https://www.betonjayareadymix.com/p/jasa-saluran-drainase.html' }
      ],
      'JASA_KONSTRUKSI'
    );
  }
  
  // ─── Cluster 2: Jasa Cutting Beton (Panduan) ───
  if (urlMappingJasaCuttingBetonFromMoneyMasterMoneyPage[cleanUrlJasaCuttingBetonPost]) {
    generateBreadcrumbShared(
      urlMappingJasaCuttingBetonFromMoneyMasterMoneyPage,
      cleanUrlJasaCuttingBetonPost,
      [
        { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
        { name: 'Daftar Jasa Cutting Beton', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-cutting-beton.html' },
        { name: 'Perbandingan Jasa Cutting Beton', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-cutting-beton.html' },
        { name: 'Jasa Cutting Beton', url: 'https://www.betonjayareadymix.com/p/jasa-cutting-beton.html' }
      ],
      'JASA_KONSTRUKSI'
    );
  }
  
  // ─── Cluster 3: Harga Jasa Cutting Beton (Money Page) ───
  if (urlMappingHargaJasaCuttingBetonFromMoneyMasterMoneyPage[cleanUrlJasaCuttingBetonPost]) {
    generateBreadcrumbShared(
      urlMappingHargaJasaCuttingBetonFromMoneyMasterMoneyPage,
      cleanUrlJasaCuttingBetonPost,
      [
        { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
        { name: 'Daftar Jasa Cutting Beton', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-cutting-beton.html' },
        { name: 'Perbandingan Jasa Cutting Beton', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-cutting-beton.html' },
        { name: 'Harga Jasa Cutting Beton', url: 'https://www.betonjayareadymix.com/p/harga-jasa-cutting-beton.html' }
      ],
      'JASA_KONSTRUKSI'
    );
  }
  
  // ─── Cluster 4: Harga Jasa Cutting Beton (Money Child) ───
  if (urlMappingHargaJasaCuttingBetonFromMoneyMasterMoneyChild[cleanUrlJasaCuttingBetonPost]) {
    generateBreadcrumbShared(
      urlMappingHargaJasaCuttingBetonFromMoneyMasterMoneyChild,
      cleanUrlJasaCuttingBetonPost,
      [
        { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
        { name: 'Daftar Jasa Cutting Beton', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-cutting-beton.html' },
        { name: 'Perbandingan Jasa Cutting Beton', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-cutting-beton.html' },
        { name: 'Harga Jasa Cutting Beton', url: 'https://www.betonjayareadymix.com/p/harga-jasa-cutting-beton.html' }
      ],
      'JASA_KONSTRUKSI'
    );
  }
  
  // ─── Cluster 5: Jasa Sondir Tanah ───
  if (urlMappingJasaSondirTanahFromMoneyMaster1MoneyPage[cleanUrlJasaCuttingBetonPost]) {
    generateBreadcrumbJasaKonstruksi(
      urlMappingJasaSondirTanahFromMoneyMaster1MoneyPage,
      cleanUrlJasaCuttingBetonPost,
      [
        { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
        { name: 'Daftar Jasa Uji Tanah', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-uji-tanah.html' },
        { name: 'Perbandingan Jasa Uji Tanah', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-uji-tanah.html' },
        { name: 'Jasa Uji Tanah', url: 'https://www.betonjayareadymix.com/p/jasa-uji-tanah.html' },
        { name: 'Jasa Sondir Tanah', url: 'https://www.betonjayareadymix.com/p/jasa-sondir-tanah.html' }
      ],
      'JASA_KONSTRUKSI'
    );
  }
  
  // ─── Cluster 6: Jasa CPT Tanah (Money Page) ───
  if (urlMappingJasaCptTanahFromMoneyMaster1MoneyPage[cleanUrlJasaCuttingBetonPost]) {
    generateBreadcrumbJasaKonstruksi(
      urlMappingJasaCptTanahFromMoneyMaster1MoneyPage,
      cleanUrlJasaCuttingBetonPost,
      [
        { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
        { name: 'Daftar Jasa Uji Tanah', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-uji-tanah.html' },
        { name: 'Perbandingan Jasa Uji Tanah', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-uji-tanah.html' },
        { name: 'Jasa Uji Tanah', url: 'https://www.betonjayareadymix.com/p/jasa-uji-tanah.html' },
        { name: 'Jasa Cpt Tanah', url: 'https://www.betonjayareadymix.com/p/jasa-cpt-tanah.html' }
      ],
      'JASA_KONSTRUKSI'
    );
  }
  
  // ─── Cluster 7: Jasa CPT Tanah (Money Child) ───
  if (urlMappingJasaCptTanahFromMoneyMaster1MoneyChild[cleanUrlJasaCuttingBetonPost]) {
    generateBreadcrumbJasaKonstruksi(
      urlMappingJasaCptTanahFromMoneyMaster1MoneyChild,
      cleanUrlJasaCuttingBetonPost,
      [
        { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
        { name: 'Daftar Jasa Uji Tanah', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-uji-tanah.html' },
        { name: 'Perbandingan Jasa Uji Tanah', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-uji-tanah.html' },
        { name: 'Jasa Uji Tanah', url: 'https://www.betonjayareadymix.com/p/jasa-uji-tanah.html' },
        { name: 'Jasa Cpt Tanah', url: 'https://www.betonjayareadymix.com/p/jasa-cpt-tanah.html' }
      ],
      'JASA_KONSTRUKSI'
    );
  }
  
  // ─── Cluster 8: Jasa Boring Tanah ───
  if (urlMappingJasaBoringTanahFromMoneyMaster1MoneyPage[cleanUrlJasaCuttingBetonPost]) {
    generateBreadcrumbJasaKonstruksi(
      urlMappingJasaBoringTanahFromMoneyMaster1MoneyPage,
      cleanUrlJasaCuttingBetonPost,
      [
        { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
        { name: 'Daftar Jasa Uji Tanah', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-uji-tanah.html' },
        { name: 'Perbandingan Jasa Uji Tanah', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-uji-tanah.html' },
        { name: 'Jasa Uji Tanah', url: 'https://www.betonjayareadymix.com/p/jasa-uji-tanah.html' },
        { name: 'Jasa Boring Tanah', url: 'https://www.betonjayareadymix.com/p/jasa-boring-tanah.html' }
      ],
      'JASA_KONSTRUKSI'
    );
  }
  
  // ─── Cluster 9: Jasa Lab Tanah ───
  if (urlMappingJasaLabTanahFromMoneyMaster1MoneyPage[cleanUrlJasaCuttingBetonPost]) {
    generateBreadcrumbJasaKonstruksi(
      urlMappingJasaLabTanahFromMoneyMaster1MoneyPage,
      cleanUrlJasaCuttingBetonPost,
      [
        { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
        { name: 'Daftar Jasa Uji Tanah', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-uji-tanah.html' },
        { name: 'Perbandingan Jasa Uji Tanah', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-uji-tanah.html' },
        { name: 'Jasa Uji Tanah', url: 'https://www.betonjayareadymix.com/p/jasa-uji-tanah.html' },
        { name: 'Jasa Lab Tanah', url: 'https://www.betonjayareadymix.com/p/jasa-lab-tanah.html' }
      ],
      'JASA_KONSTRUKSI'
    );
  }
  
  // ─── Cluster 10: Jasa Uji Penetrasi (SPT) ───
  if (urlMappingJasaUjiPenetrasiFromMoneyMaster1MoneyPage[cleanUrlJasaCuttingBetonPost]) {
    generateBreadcrumbJasaKonstruksi(
      urlMappingJasaUjiPenetrasiFromMoneyMaster1MoneyPage,
      cleanUrlJasaCuttingBetonPost,
      [
        { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
        { name: 'Daftar Jasa Uji Tanah', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-uji-tanah.html' },
        { name: 'Perbandingan Jasa Uji Tanah', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-uji-tanah.html' },
        { name: 'Jasa Uji Tanah', url: 'https://www.betonjayareadymix.com/p/jasa-uji-tanah.html' },
        { name: 'Jasa Lab Tanah', url: 'https://www.betonjayareadymix.com/p/jasa-lab-tanah.html' }
      ],
      'JASA_KONSTRUKSI'
    );
  }
  
  // ─── Cluster 11: Jasa Pematangan Lahan ───
  if (urlMappingJasaPematanganLahanFromMoneyMasterMoneyChild[cleanUrlJasaCuttingBetonPost]) {
    generateBreadcrumbShared(
      urlMappingJasaPematanganLahanFromMoneyMasterMoneyChild,
      cleanUrlJasaCuttingBetonPost,
      [
        { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
        { name: 'Daftar Jasa Pematangan Lahan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-pematangan-lahan.html' },
        { name: 'Perbandingan Jasa Pematangan Lahan', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-pematangan-lahan.html' },
        { name: 'Jasa Pematangan Lahan', url: 'https://www.betonjayareadymix.com/p/jasa-pematangan-lahan.html' }
      ],
      'JASA_KONSTRUKSI'
    );
  }
  
  // ─── Cluster 12: Jasa Pemotongan Bukit Lahan ───
  if (urlMappingJasaPemotonganBukitLahanFromMoneyPageMoneyPage1[cleanUrlJasaCuttingBetonPost]) {
    generateBreadcrumbShared(
      urlMappingJasaPemotonganBukitLahanFromMoneyPageMoneyPage1,
      cleanUrlJasaCuttingBetonPost,
      [
        { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
        { name: 'Daftar Jasa Pematangan Lahan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-pematangan-lahan.html' },
        { name: 'Perbandingan Jasa Pematangan Lahan', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-pematangan-lahan.html' },
        { name: 'Jasa Pematangan Lahan', url: 'https://www.betonjayareadymix.com/p/jasa-pematangan-lahan.html' },
        { name: 'Jasa Pemotongan Bukit Lahan', url: 'https://www.betonjayareadymix.com/p/jasa-pemotongan-bukit-lahan.html' }
      ],
      'JASA_KONSTRUKSI'
    );
  }
  
  // ─── Cluster 13: Jasa Pengupasan Lahan Tanah ───
  if (urlMappingJasaPengupasanLahanTanahFromMoneyPageMoneyPage1[cleanUrlJasaCuttingBetonPost]) {
    generateBreadcrumbShared(
      urlMappingJasaPengupasanLahanTanahFromMoneyPageMoneyPage1,
      cleanUrlJasaCuttingBetonPost,
      [
        { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
        { name: 'Daftar Jasa Pematangan Lahan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-pematangan-lahan.html' },
        { name: 'Perbandingan Jasa Pematangan Lahan', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-pematangan-lahan.html' },
        { name: 'Jasa Pematangan Lahan', url: 'https://www.betonjayareadymix.com/p/jasa-pematangan-lahan.html' },
        { name: 'Jasa Pengupasan Lahan Tanah', url: 'https://www.betonjayareadymix.com/p/jasa-pengupasan-lahan-tanah.html' }
      ],
      'JASA_KONSTRUKSI'
    );
  }
  
  // ─── Cluster 14: Jasa Tebang Pohon ───
  if (urlMappingJasaTebangPohonPematanganLahanFromMoneyPageMoneyPage1[cleanUrlJasaCuttingBetonPost]) {
    generateBreadcrumbShared(
      urlMappingJasaTebangPohonPematanganLahanFromMoneyPageMoneyPage1,
      cleanUrlJasaCuttingBetonPost,
      [
        { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
        { name: 'Daftar Jasa Pematangan Lahan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-pematangan-lahan.html' },
        { name: 'Perbandingan Jasa Pematangan Lahan', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-pematangan-lahan.html' },
        { name: 'Jasa Pematangan Lahan', url: 'https://www.betonjayareadymix.com/p/jasa-pematangan-lahan.html' },
        { name: 'Jasa Tebang Pohon Pematangan Lahan', url: 'https://www.betonjayareadymix.com/p/jasa-tebang-pohon-pematangan-lahan.html' }
      ],
      'JASA_KONSTRUKSI'
    );
  }
  
  // ─── Cluster 15: Jasa Perataan dan Grading Lahan ───
  if (urlMappingJasaPerataandanGradingLahanFromMoneyPageMoneyPage1[cleanUrlJasaCuttingBetonPost]) {
    generateBreadcrumbShared(
      urlMappingJasaPerataandanGradingLahanFromMoneyPageMoneyPage1,
      cleanUrlJasaCuttingBetonPost,
      [
        { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
        { name: 'Daftar Jasa Pematangan Lahan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-pematangan-lahan.html' },
        { name: 'Perbandingan Jasa Pematangan Lahan', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-pematangan-lahan.html' },
        { name: 'Jasa Pematangan Lahan', url: 'https://www.betonjayareadymix.com/p/jasa-pematangan-lahan.html' },
        { name: 'Jasa Perataan dan Grading Lahan', url: 'https://www.betonjayareadymix.com/p/jasa-perataan-dan-grading-lahan.html' }
      ],
      'JASA_KONSTRUKSI'
    );
  }
  
  // ─── Cluster 16: Jasa Elevasi Lahan ───
  if (urlMappingJasaPekerjaanElevasiLahanFromMoneyPageMoneyPage1[cleanUrlJasaCuttingBetonPost]) {
    generateBreadcrumbShared(
      urlMappingJasaPekerjaanElevasiLahanFromMoneyPageMoneyPage1,
      cleanUrlJasaCuttingBetonPost,
      [
        { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
        { name: 'Daftar Jasa Pematangan Lahan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-pematangan-lahan.html' },
        { name: 'Perbandingan Jasa Pematangan Lahan', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-pematangan-lahan.html' },
        { name: 'Jasa Pematangan Lahan', url: 'https://www.betonjayareadymix.com/p/jasa-pematangan-lahan.html' },
        { name: 'Jasa Pekerjaan Elevasi Lahan', url: 'https://www.betonjayareadymix.com/p/jasa-pekerjaan-elevasi-lahan.html' }
      ],
      'JASA_KONSTRUKSI'
    );
  }
  
  // ─── Cluster 17: Jasa Pembentukan Badan Lahan ───
  if (urlMappingJasaPembentukanBadanLahanFromMoneyPageMoneyPage1[cleanUrlJasaCuttingBetonPost]) {
    generateBreadcrumbShared(
      urlMappingJasaPembentukanBadanLahanFromMoneyPageMoneyPage1,
      cleanUrlJasaCuttingBetonPost,
      [
        { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
        { name: 'Daftar Jasa Pematangan Lahan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-pematangan-lahan.html' },
        { name: 'Perbandingan Jasa Pematangan Lahan', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-pematangan-lahan.html' },
        { name: 'Jasa Pematangan Lahan', url: 'https://www.betonjayareadymix.com/p/jasa-pematangan-lahan.html' },
        { name: 'Jasa Pembentukan Badan Lahan', url: 'https://www.betonjayareadymix.com/p/jasa-pembentukan-badan-lahan.html' }
      ],
      'JASA_KONSTRUKSI'
    );
  }
  
  // ─── Cluster 18: Jasa Cut and Fill Lahan ───
  if (urlMappingJasaCutandFillLahanFromMoneyPageMoneyPage1[cleanUrlJasaCuttingBetonPost]) {
    generateBreadcrumbShared(
      urlMappingJasaCutandFillLahanFromMoneyPageMoneyPage1,
      cleanUrlJasaCuttingBetonPost,
      [
        { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
        { name: 'Daftar Jasa Pematangan Lahan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-pematangan-lahan.html' },
        { name: 'Perbandingan Jasa Pematangan Lahan', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-pematangan-lahan.html' },
        { name: 'Jasa Pematangan Lahan', url: 'https://www.betonjayareadymix.com/p/jasa-pematangan-lahan.html' },
        { name: 'Jasa Cut and Fill Lahan', url: 'https://www.betonjayareadymix.com/p/jasa-cut-and-fill-lahan.html' }
      ],
      'JASA_KONSTRUKSI'
    );
  }
  
  // ─── Cluster 19: Jasa Urugan Tanah Lahan ───
  if (urlMappingJasaUruganTanahLahanFromMoneyPageMoneyPage1[cleanUrlJasaCuttingBetonPost]) {
    generateBreadcrumbShared(
      urlMappingJasaUruganTanahLahanFromMoneyPageMoneyPage1,
      cleanUrlJasaCuttingBetonPost,
      [
        { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
        { name: 'Daftar Jasa Pematangan Lahan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-pematangan-lahan.html' },
        { name: 'Perbandingan Jasa Pematangan Lahan', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-pematangan-lahan.html' },
        { name: 'Jasa Pematangan Lahan', url: 'https://www.betonjayareadymix.com/p/jasa-pematangan-lahan.html' },
        { name: 'Jasa Urugan Tanah Lahan', url: 'https://www.betonjayareadymix.com/p/jasa-urugan-tanah-lahan.html' }
      ],
      'JASA_KONSTRUKSI'
    );
  }
  
  // ─── Cluster 20: Jasa Pemadatan Tanah Lahan ───
  if (urlMappingJasaPemadatanTanahLahanFromMoneyPageMoneyPage1[cleanUrlJasaCuttingBetonPost]) {
    generateBreadcrumbShared(
      urlMappingJasaPemadatanTanahLahanFromMoneyPageMoneyPage1,
      cleanUrlJasaCuttingBetonPost,
      [
        { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
        { name: 'Daftar Jasa Pematangan Lahan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-pematangan-lahan.html' },
        { name: 'Perbandingan Jasa Pematangan Lahan', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-pematangan-lahan.html' },
        { name: 'Jasa Pematangan Lahan', url: 'https://www.betonjayareadymix.com/p/jasa-pematangan-lahan.html' },
        { name: 'Jasa Pemadatan Tanah Lahan', url: 'https://www.betonjayareadymix.com/p/jasa-pemadatan-tanah-lahan.html' }
      ],
      'JASA_KONSTRUKSI'
    );
  }
  
  // ─── Cluster 21: Jasa Pembersihan Lahan ───
  if (urlMappingJasaPembersihanLahanPematanganFromMoneyPageMoneyPage1[cleanUrlJasaCuttingBetonPost]) {
    generateBreadcrumbShared(
      urlMappingJasaPembersihanLahanPematanganFromMoneyPageMoneyPage1,
      cleanUrlJasaCuttingBetonPost,
      [
        { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
        { name: 'Daftar Jasa Pematangan Lahan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-pematangan-lahan.html' },
        { name: 'Perbandingan Jasa Pematangan Lahan', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-pematangan-lahan.html' },
        { name: 'Jasa Pematangan Lahan', url: 'https://www.betonjayareadymix.com/p/jasa-pematangan-lahan.html' },
        { name: 'Jasa Pembersihan Lahan Pematangan', url: 'https://www.betonjayareadymix.com/p/jasa-pembersihan-lahan-pematangan.html' }
      ],
      'JASA_KONSTRUKSI'
    );
  }
  
  // ─── Cluster 22: Jasa Base Course Lahan ───
  if (urlMappingJasaBaseCourseLahanFromMoneyPageMoneyPage1[cleanUrlJasaCuttingBetonPost]) {
    generateBreadcrumbShared(
      urlMappingJasaBaseCourseLahanFromMoneyPageMoneyPage1,
      cleanUrlJasaCuttingBetonPost,
      [
        { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
        { name: 'Daftar Jasa Pematangan Lahan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-pematangan-lahan.html' },
        { name: 'Perbandingan Jasa Pematangan Lahan', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-pematangan-lahan.html' },
        { name: 'Jasa Pematangan Lahan', url: 'https://www.betonjayareadymix.com/p/jasa-pematangan-lahan.html' },
        { name: 'Jasa Base Course Lahan', url: 'https://www.betonjayareadymix.com/p/jasa-base-course-lahan.html' }
      ],
      'JASA_KONSTRUKSI'
    );
  }
  
  // ─── Cluster 23: Jasa Stabilisasi Tanah Lahan ───
  if (urlMappingJasaStabilisasiTanahLahanFromMoneyPageMoneyPage1[cleanUrlJasaCuttingBetonPost]) {
    generateBreadcrumbShared(
      urlMappingJasaStabilisasiTanahLahanFromMoneyPageMoneyPage1,
      cleanUrlJasaCuttingBetonPost,
      [
        { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
        { name: 'Daftar Jasa Pematangan Lahan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-pematangan-lahan.html' },
        { name: 'Perbandingan Jasa Pematangan Lahan', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-pematangan-lahan.html' },
        { name: 'Jasa Pematangan Lahan', url: 'https://www.betonjayareadymix.com/p/jasa-pematangan-lahan.html' },
        { name: 'Jasa Stabilisasi Tanah Lahan', url: 'https://www.betonjayareadymix.com/p/jasa-stabilisasi-tanah-lahan.html' }
      ],
      'JASA_KONSTRUKSI'
    );
  }
  
  // ─── Cluster 24: Jasa Drainase Lahan ───
  if (urlMappingJasaPemasanganDrainaseLahanFromMoneyPageMoneyPage1[cleanUrlJasaCuttingBetonPost]) {
    generateBreadcrumbShared(
      urlMappingJasaPemasanganDrainaseLahanFromMoneyPageMoneyPage1,
      cleanUrlJasaCuttingBetonPost,
      [
        { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
        { name: 'Daftar Jasa Pematangan Lahan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-pematangan-lahan.html' },
        { name: 'Perbandingan Jasa Pematangan Lahan', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-pematangan-lahan.html' },
        { name: 'Jasa Pematangan Lahan', url: 'https://www.betonjayareadymix.com/p/jasa-pematangan-lahan.html' },
        { name: 'Jasa Pemasangan Drainase Lahan', url: 'https://www.betonjayareadymix.com/p/jasa-pemasangan-drainase-lahan.html' }
      ],
      'JASA_KONSTRUKSI'
    );
  }
  
  // ─── Cluster 25: Jasa Geotekstil Lahan ───
  if (urlMappingJasaPemasanganGeotekstilLahanFromMoneyPageMoneyPage1[cleanUrlJasaCuttingBetonPost]) {
    generateBreadcrumbShared(
      urlMappingJasaPemasanganGeotekstilLahanFromMoneyPageMoneyPage1,
      cleanUrlJasaCuttingBetonPost,
      [
        { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
        { name: 'Daftar Jasa Pematangan Lahan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-pematangan-lahan.html' },
        { name: 'Perbandingan Jasa Pematangan Lahan', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-pematangan-lahan.html' },
        { name: 'Jasa Pematangan Lahan', url: 'https://www.betonjayareadymix.com/p/jasa-pematangan-lahan.html' },
        { name: 'Jasa Pemasangan Geotekstil Lahan', url: 'https://www.betonjayareadymix.com/p/jasa-pemasangan-geotekstil-lahan.html' }
      ],
      'JASA_KONSTRUKSI'
    );
  }
  
  // ─── Cluster 26: Jasa Persiapan Pondasi Lahan ───
  if (urlMappingJasaPersiapanPondasiLahanFromMoneyPageMoneyPage1[cleanUrlJasaCuttingBetonPost]) {
    generateBreadcrumbShared(
      urlMappingJasaPersiapanPondasiLahanFromMoneyPageMoneyPage1,
      cleanUrlJasaCuttingBetonPost,
      [
        { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
        { name: 'Daftar Jasa Pematangan Lahan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-pematangan-lahan.html' },
        { name: 'Perbandingan Jasa Pematangan Lahan', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-pematangan-lahan.html' },
        { name: 'Jasa Pematangan Lahan', url: 'https://www.betonjayareadymix.com/p/jasa-pematangan-lahan.html' },
        { name: 'Jasa Persiapan Pondasi Lahan', url: 'https://www.betonjayareadymix.com/p/jasa-persiapan-pondasi-lahan.html' }
      ],
      'JASA_KONSTRUKSI'
    );
  }
  
  console.log('[jasa-cutting-beton-post] ✅ SEMUA CLUSTER DIPROSES');
  
});
