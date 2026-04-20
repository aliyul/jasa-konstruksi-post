/*
RINGKASAN STATUS
Const											Jumlah URL	Status		Keterangan
urlMappingJasaFinishingDakBeton					5 URL		✅ VALID	Semua URL aktif dan memiliki konten
urlMappingJasaFinishingBetonExpose				3 URL		✅ VALID	Semua URL aktif dan memiliki konten
urlMappingJasaPlesteranAcianDinding				23 URL		✅ VALID	Halaman harga borongan per lokasi
urlMappingJasaFinishingLantaiBeton				40+ URL		⚠️ PERLU PERHATIAN	Ada URL typo domain (http://) dan duplikasi konten
urlMappingJasaFinishingGroutingStrukturBeton	0			🔴 KOSONG	Perlu diisi atau dihapus
urlMappingJasaPelapisanCoatingStruktur			0			🔴 KOSONG	Perlu diisi atau dihapus
urlMappingJasaFinishingKolomBalok				0			🔴 KOSONG	Perlu diisi atau dihapus
urlMappingJasaPelapisanWaterproofingStruktur	0			🔴 KOSONG	Perlu diisi atau dihapus
*/
// ============================================================
// JASA FINISHING DAK BETON - MONEY PAGE
// ============================================================
// 🧠 SEO NOTE: Cluster ini fokus ke layanan finishing dak beton.
// Intent: Transactional (user cari harga & jasa finishing dak).
// Parent: Jasa Finishing Struktur (/p/jasa-finishing-struktur.html)
// Breadcrumb: Home > Jasa Konstruksi > Jasa Finishing > Jasa Finishing Struktur > [Nama Layanan] (4-5 level)
// ============================================================

const urlMappingJasaFinishingDakBetonFromJasaFinishingStrukturSub2MoneyPage = {
  // ============================================================
  // [SUB2] - INFORMASIONAL (PANDUAN FINISHING DAK)
  // 🧠 TYPE: SUB2 (boleh skip di breadcrumb)
  // Breadcrumb: Home > Jasa Konstruksi > Jasa Finishing > Panduan Finishing Dak (4 level)
  // ============================================================
  "https://www.betonjayareadymix.com/2018/10/finishing-dak.html": "Finishing Dak",  // TYPE: SUB2
  
  // ============================================================
  // [MONEY_PAGE] - HARGA FINISHING DAK BETON (JASA TIDAK BOLEH MONEY_MASTER)
  // 🧠 TYPE: MONEY_PAGE (WAJIB tampil)
  // Breadcrumb: Home > Jasa Konstruksi > Jasa Finishing > Harga Finishing Dak Beton (4 level)
  // ============================================================
  "https://www.betonjayareadymix.com/2018/10/harga-jasa-finishing-dak-beton.html": "Harga Jasa Finishing Dak Beton",  // TYPE: MONEY_PAGE
  
  // ============================================================
  // [REDIRECT] - DUPLIKASI DARI finishing-dak.html
  // 🧠 SEO NOTE: Halaman ini overlap, disarankan 301 redirect ke finishing-dak.html
  // ============================================================
  "https://www.betonjayareadymix.com/2018/10/finishing-dak-beton.html": "Finishing Dak Beton",  // TYPE: REDIRECT
  
  // ============================================================
  // [MONEY_CHILD] - HARGA DAK SUPER FLAT
  // 🧠 TYPE: MONEY_CHILD (WAJIB tampil, spesifik layanan)
  // Breadcrumb: Home > Jasa Konstruksi > Jasa Finishing > Harga Dak Super Flat (4 level)
  // ============================================================
  "https://www.betonjayareadymix.com/2018/10/harga-jasa-dak-super-flat.html": "Harga Jasa Dak Super Flat",  // TYPE: MONEY_CHILD
  
  // ============================================================
  // [REDIRECT] - DUPLIKASI DARI harga-jasa-dak-super-flat.html
  // 🧠 SEO NOTE: Halaman tipis, disarankan 301 redirect ke money page
  // ============================================================
  "https://www.betonjayareadymix.com/2018/10/dak-super-flat.html": "Dak Super Flat"  // TYPE: REDIRECT
};

// ============================================================
// JASA FINISHING BETON EKSPOS - MONEY PAGE
// ============================================================

const urlMappingJasaFinishingBetonExposeFromJasaFinishingStrukturSub2MoneyPage = {
  // ============================================================
  // [MONEY_PAGE] - HARGA JASA BETON EKSPOS (JASA TIDAK BOLEH MONEY_MASTER)
  // 🧠 TYPE: MONEY_PAGE
  // ============================================================
  "https://www.betonjayareadymix.com/2018/10/harga-jasa-beton-ekspos.html": "Harga Jasa Beton Ekspos",  // TYPE: MONEY_PAGE
  
  // ============================================================
  // [SUB2] - PANDUAN FINISHING BETON EKSPOS
  // 🧠 TYPE: SUB2 (edukasi)
  // ============================================================
  "https://www.betonjayareadymix.com/2018/10/finishing-beton-ekspos.html": "Finishing Beton Ekspos",  // TYPE: SUB2
  
  // ============================================================
  // [REDIRECT] - DUPLIKASI DARI master
  // ============================================================
  "https://www.betonjayareadymix.com/2018/10/harga-jasa-finishing-beton-ekspos.html": "Harga Jasa Finishing Beton Ekspos"  // TYPE: REDIRECT
};

// ============================================================
// JASA PLESTERAN & ACIAN DINDING - MONEY PAGE (PER LOKASI)
// ============================================================

const urlMappingJasaPlesteranAcianDindingFromJasaFinishingSub2MoneyPage = {
  // ============================================================
  // [MONEY_PAGE] - HARGA BORONGAN PLESTERAN ACIAN PER METER (NASIONAL)
  // 🧠 TYPE: MONEY_PAGE (JASA TIDAK BOLEH MONEY_MASTER)
  // ============================================================
  "https://www.betonjayareadymix.com/2018/09/harga-borongan-tenaga-plesteran-dan-acian-per-meter.html": "Harga Borongan Tenaga Plesteran dan Acian per Meter",  // TYPE: MONEY_PAGE
  
  // ============================================================
  // [MONEY_CHILD] - HARGA BORONGAN PLESTERAN ACIAN PER LOKASI
  // 🧠 TYPE: MONEY_CHILD (spesifik lokasi)
  // Breadcrumb: Home > Jasa Konstruksi > Jasa Finishing > Harga Plesteran Acian [Kota] (4 level)
  // ============================================================
  "https://www.betonjayareadymix.com/2018/11/harga-borongan-tenaga-plesteran-dan-acian-per-meter-jakarta.html": "Harga Borongan Tenaga Plesteran dan Acian per Meter Jakarta",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/11/harga-borongan-tenaga-plesteran-dan-acian-per-meter-bandung.html": "Harga Borongan Tenaga Plesteran dan Acian per Meter Bandung",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/11/harga-borongan-tenaga-plesteran-dan-acian-per-meter-cianjur.html": "Harga Borongan Tenaga Plesteran dan Acian per Meter Cianjur",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/11/harga-borongan-tenaga-plesteran-dan-acian-per-meter-bogor.html": "Harga Borongan Tenaga Plesteran dan Acian per Meter Bogor",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/11/harga-borongan-tenaga-plesteran-dan-acian-per-meter-gunung-putri.html": "Harga Borongan Tenaga Plesteran dan Acian per Meter Gunung Putri",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/11/harga-borongan-tenaga-plesteran-dan-acian-per-meter-bojong-gede.html": "Harga Borongan Tenaga Plesteran dan Acian per Meter Bojong Gede",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/11/harga-borongan-tenaga-plesteran-dan-acian-per-meter-bekasi.html": "Harga Borongan Tenaga Plesteran dan Acian per Meter Bekasi",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/11/harga-borongan-tenaga-plesteran-dan-acian-per-meter-cibinong.html": "Harga Borongan Tenaga Plesteran dan Acian per Meter Cibinong",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/11/harga-borongan-tenaga-plesteran-dan-acian-per-meter-telukjambe-timur.html": "Harga Borongan Tenaga Plesteran dan Acian per Meter Telukjambe Timur",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/11/harga-borongan-tenaga-plesteran-dan-acian-per-meter-cimenyan.html": "Harga Borongan Tenaga Plesteran dan Acian per Meter Cimenyan",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/11/harga-borongan-tenaga-plesteran-dan-acian-per-meter-depok.html": "Harga Borongan Tenaga Plesteran dan Acian per Meter Depok",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/11/harga-borongan-tenaga-plesteran-dan-acian-per-meter-cikampek.html": "Harga Borongan Tenaga Plesteran dan Acian per Meter Cikampek",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/11/harga-borongan-tenaga-plesteran-dan-acian-per-meter-cimahi.html": "Harga Borongan Tenaga Plesteran dan Acian per Meter Cimahi",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/11/harga-borongan-tenaga-plesteran-dan-acian-per-meter-kemang.html": "Harga Borongan Tenaga Plesteran dan Acian per Meter Kemang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/11/harga-borongan-tenaga-plesteran-dan-acian-per-meter-citeureup.html": "Harga Borongan Tenaga Plesteran dan Acian per Meter Citeureup",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/11/harga-borongan-tenaga-plesteran-dan-acian-per-meter-ngamprah.html": "Harga Borongan Tenaga Plesteran dan Acian per Meter Ngamprah",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/11/harga-borongan-tenaga-plesteran-dan-acian-per-meter-kota-bekasi.html": "Harga Borongan Tenaga Plesteran dan Acian per Meter Kota Bekasi",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/11/harga-borongan-tenaga-plesteran-dan-acian-per-meter-parung-panjang.html": "Harga Borongan Tenaga Plesteran dan Acian per Meter Parung Panjang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/11/harga-borongan-tenaga-plesteran-dan-acian-per-meter-cileungsi.html": "Harga Borongan Tenaga Plesteran dan Acian per Meter Cileungsi",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/11/harga-borongan-tenaga-plesteran-dan-acian-per-meter-sukaraja.html": "Harga Borongan Tenaga Plesteran dan Acian per Meter Sukaraja",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/11/harga-borongan-tenaga-plesteran-dan-acian-per-meter-tajur-halang.html": "Harga Borongan Tenaga Plesteran dan Acian per Meter Tajur Halang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/11/harga-borongan-tenaga-plesteran-dan-acian-per-meter-gunung-sindur.html": "Harga Borongan Tenaga Plesteran dan Acian per Meter Gunung Sindur"  // TYPE: MONEY_CHILD
};

// ============================================================
// JASA FINISHING LANTAI BETON - MONEY PAGE
// ============================================================

const urlMappingJasaFinishingLantaiBetonFromJasaFinishingStrukturSub2MoneyPage = {
  // ============================================================
  // [MONEY_CHILD] - HARGA JASA TROWEL FLOOR HARDENER PER LOKASI
  // ============================================================
  "https://www.betonjayareadymix.com/2018/10/harga-jasa-trowel-floor-hardener-depok.html": "Harga Jasa Trowel Floor Hardener Depok",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/10/harga-jasa-trowel-lantai-beton-depok.html": "Harga Jasa Trowel Lantai Beton Depok",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/10/harga-jasa-trowel-lantai-beton-tangerang.html": "Harga Jasa Trowel Lantai Beton Tangerang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/10/harga-jasa-trowel-lantai-beton-jakarta.html": "Harga Jasa Trowel Lantai Beton Jakarta",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/10/harga-jasa-trowel-lantai-beton-bekasi.html": "Harga Jasa Trowel Lantai Beton Bekasi",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/10/harga-jasa-trowel-lantai-beton-bogor.html": "Harga Jasa Trowel Lantai Beton Bogor",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/10/harga-jasa-trowel-bogor.html": "Harga Jasa Trowel Bogor",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/10/harga-jasa-trowel-tangerang.html": "Harga Jasa Trowel Tangerang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/10/harga-jasa-trowel-jakarta.html": "Harga Jasa Trowel Jakarta",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/10/harga-jasa-trowel-bekasi.html": "Harga Jasa Trowel Bekasi",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/10/harga-jasa-trowel-depok.html": "Harga Jasa Trowel Depok",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/10/harga-jasa-trowel-floor-hardener-tangerang.html": "Harga Jasa Trowel Floor Hardener Tangerang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/10/harga-jasa-trowel-floor-hardener-bogor.html": "Harga Jasa Trowel Floor Hardener Bogor",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/10/harga-jasa-trowel-floor-hardener-bekasi.html": "Harga Jasa Trowel Floor Hardener Bekasi",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/10/harga-jasa-trowel-floor-hardener-jakarta.html": "Harga Jasa Trowel Floor Hardener Jakarta",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/10/harga-jasa-trowel-floor-hardener-tasikmalaya.html": "Harga Jasa Trowel Floor Hardener Tasikmalaya",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/10/harga-jasa-trowel-floor-hardener-garut.html": "Harga Jasa Trowel Floor Hardener Garut",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/10/harga-jasa-trowel-floor-hardener-bandung.html": "Harga Jasa Trowel Floor Hardener Bandung",  // TYPE: MONEY_CHILD
  
  // ============================================================
  // [MONEY_PAGE] - HARGA JASA FLOOR HARDENER (NASIONAL)
  // 🧠 TYPE: MONEY_PAGE (JASA TIDAK BOLEH MONEY_MASTER)
  // ============================================================
  "https://www.betonjayareadymix.com/2018/10/harga-jasa-floor-hardener.html": "Harga Jasa Floor Hardener",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/10/harga-borongan-floor-hardener.html": "Harga Borongan Floor Hardener",  // TYPE: MONEY_PAGE
  
  // ============================================================
  // [MONEY_CHILD] - HARGA JASA FLOOR HARDENER PER LOKASI
  // ============================================================
  "https://www.betonjayareadymix.com/2018/10/harga-jasa-floor-hardener-garut.html": "Harga Jasa Floor Hardener Garut",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/10/harga-jasa-floor-hardener-tasikmalaya.html": "Harga Jasa Floor Hardener Tasikmalaya",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/10/harga-jasa-floor-hardener-bandung.html": "Harga Jasa Floor Hardener Bandung",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/10/harga-jasa-floor-hardener-depok.html": "Harga Jasa Floor Hardener Depok",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/10/harga-jasa-floor-hardener-tangerang.html": "Harga Jasa Floor Hardener Tangerang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/10/harga-jasa-floor-hardener-bekasi.html": "Harga Jasa Floor Hardener Bekasi",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/10/harga-jasa-floor-hardener-bogor.html": "Harga Jasa Floor Hardener Bogor",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/10/harga-jasa-floor-hardener-jakarta.html": "Harga Jasa Floor Hardener Jakarta",  // TYPE: MONEY_CHILD
  
  // ============================================================
  // [SUB1] - PANDUAN / INFORMASIONAL
  // ============================================================
  "https://www.betonjayareadymix.com/2018/10/jasa-screeding.html": "Jasa Screeding",  // TYPE: SUB1
  "https://www.betonjayareadymix.com/2018/10/jasa-trowel.html": "Jasa Trowel",  // TYPE: SUB1
  "https://www.betonjayareadymix.com/2018/10/finishing-screeding.html": "Finishing Screeding",  // TYPE: SUB1
  "https://www.betonjayareadymix.com/2018/10/finising-trowel.html": "Finishing Trowel",  // TYPE: SUB1
  "https://www.betonjayareadymix.com/2018/10/finishing-lantai-beton-ekspos.html": "Finishing Lantai Beton Ekspos",  // TYPE: SUB1
  "https://www.betonjayareadymix.com/2018/10/jasa-trowel-lantai-beton.html": "Jasa Trowel Lantai Beton",  // TYPE: SUB1
  "https://www.betonjayareadymix.com/2018/10/lapangan-super-flat.html": "Lapangan Super Flat",  // TYPE: SUB1
  "https://www.betonjayareadymix.com/2018/10/lantai-super-flat.html": "Lantai Super Flat",  // TYPE: SUB1
  
  // ============================================================
  // [MONEY_PAGE] - HARGA JASA SCREEDING & TROWEL
  // ============================================================
  "https://www.betonjayareadymix.com/2018/10/harga-jasa-screeding.html": "Harga Jasa Screeding",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/10/harga-jasa-trowel-lantai.html": "Harga Jasa Trowel Lantai",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/10/harga-jasa-trowel-floor-hardener.html": "Harga Jasa Trowel Floor Hardener",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/10/harga-jasa-trowel-beton.html": "Harga Jasa Trowel Beton",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/10/harga-jasa-trowel.html": "Harga Jasa Trowel",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/10/harga-jasa-finishing-screeding.html": "Harga Jasa Finishing Screeding",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/10/harga-jasa-finishing-trowel.html": "Harga Jasa Finishing Trowel",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/10/harga-jasa-finishing-lantai-gudang.html": "Harga Jasa Finishing Lantai Gudang",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/10/harga-jasa-finishing-lantai-beton-ekspos.html": "Harga Jasa Finishing Lantai Beton Ekspos",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/10/harga-jasa-finishing-lantai-beton.html": "Harga Jasa Finishing Lantai Beton",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/10/harga-jasa-lapangan-super-flat.html": "Harga Jasa Lapangan Super Flat",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/10/harga-jasa-lantai-super-flat.html": "Harga Jasa Lantai Super Flat",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/10/biaya-floor-lantai.html": "Biaya Floor Lantai",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/10/harga-borongan-floor-lantai.html": "Harga Borongan Floor Lantai"  // TYPE: MONEY_PAGE
};

// ============================================================
// JASA EPOXY DINDING - MONEY PAGE
// ============================================================

const urlMappingJasaEpoxyDindingFromJasaFinishingStrukturSub2MoneyPage = {
  // ============================================================
  // [MONEY_PAGE] - HARGA JASA EPOXY DINDING
  // ============================================================
  "https://www.betonjayareadymix.com/2018/10/harga-jasa-epoxy-dinding.html": "Harga Jasa Epoxy Dinding"  // TYPE: MONEY_PAGE
};

// ============================================================
// JASA EPOXY LANTAI - MONEY PAGE
// ============================================================

const urlMappingJasaEpoxyLantaiFromJasaFinishingStrukturSub2MoneyPage = {
  // ============================================================
  // [MONEY_PAGE] - MASTER HARGA JASA FINISHING EPOXY
  // ============================================================
  "https://www.betonjayareadymix.com/2018/10/harga-jasa-finishing-epoxy.html": "Harga Jasa Finishing Epoxy",  // TYPE: MONEY_PAGE
  
  // ============================================================
  // [SUB2] - PANDUAN FINISHING EPOXY
  // ============================================================
  "https://www.betonjayareadymix.com/2018/10/finishing-epoxy.html": "Finishing Epoxy",  // TYPE: SUB2
  
  // ============================================================
  // [REDIRECT] - DUPLIKASI DARI MASTER
  // ============================================================
  "https://www.betonjayareadymix.com/2018/10/harga-jasa-epoxy.html": "Harga Jasa Epoxy",  // TYPE: REDIRECT
  "https://www.betonjayareadymix.com/2018/10/harga-jasa-epoxy-lantai.html": "Harga Jasa Epoxy Lantai",  // TYPE: REDIRECT
  "https://www.betonjayareadymix.com/2018/10/harga-jasa-lantai-epoxy.html": "Harga Jasa Lantai Epoxy",  // TYPE: REDIRECT
  
  // ============================================================
  // [SUB2] - INFORMASIONAL
  // ============================================================
  "https://www.betonjayareadymix.com/2018/10/jasa-epoxy.html": "Jasa Epoxy"  // TYPE: SUB2
};

// ============================================================
// ⚠️ CONST KOSONG - DENGAN SARAN ITEM
// ============================================================

// ============================================================
// JASA FINISHING GROUTING STRUKTUR BETON
// 🧠 REKOMENDASI: Isi dengan URL berikut atau hapus const
// Parent: Jasa Finishing Struktur (/p/jasa-finishing-struktur.html)
// ============================================================
const urlMappingJasaFinishingGroutingStrukturBetonFromJasaFinishingStrukturSub2MoneyPage = {
  // SARAN ITEM (BELUM AKTIF - PERLU DIBUAT KONTEN)
  // "https://www.betonjayareadymix.com/2018/10/harga-jasa-grouting-struktur-beton.html": "Harga Jasa Grouting Struktur Beton",  // TYPE: MONEY_PAGE
  // "https://www.betonjayareadymix.com/2018/10/jasa-grouting-retak-beton.html": "Jasa Grouting Retak Beton",  // TYPE: SUB1
  // "https://www.betonjayareadymix.com/2018/10/harga-injeksi-grouting-beton.html": "Harga Injeksi Grouting Beton",  // TYPE: MONEY_PAGE
};

// ============================================================
// JASA PELAPISAN COATING STRUKTUR
// 🧠 REKOMENDASI: Isi dengan URL berikut atau hapus const
// Parent: Jasa Finishing Struktur (/p/jasa-finishing-struktur.html)
// ============================================================
const urlMappingJasaPelapisanCoatingStrukturFromJasaFinishingStrukturSub2MoneyPage = {
  // SARAN ITEM (BELUM AKTIF - PERLU DIBUAT KONTEN)
  // "https://www.betonjayareadymix.com/2018/10/harga-jasa-coating-struktur-beton.html": "Harga Jasa Coating Struktur Beton",  // TYPE: MONEY_PAGE
  // "https://www.betonjayareadymix.com/2018/10/jasa-coating-anti-karat-beton.html": "Jasa Coating Anti Karat Beton",  // TYPE: MONEY_CHILD
  // "https://www.betonjayareadymix.com/2018/10/jasa-coating-lantai-beton.html": "Jasa Coating Lantai Beton",  // TYPE: MONEY_CHILD
};

// ============================================================
// JASA FINISHING KOLOM BALOK
// 🧠 REKOMENDASI: Isi dengan URL berikut atau hapus const
// Parent: Jasa Finishing Struktur (/p/jasa-finishing-struktur.html)
// ============================================================
const urlMappingJasaFinishingKolomBalokFromJasaFinishingStrukturSub2MoneyPage = {
  // SARAN ITEM (BELUM AKTIF - PERLU DIBUAT KONTEN)
  // "https://www.betonjayareadymix.com/2018/10/harga-jasa-finishing-kolom-balok.html": "Harga Jasa Finishing Kolom Balok",  // TYPE: MONEY_PAGE
  // "https://www.betonjayareadymix.com/2018/10/jasa-finishing-kolom-beton.html": "Jasa Finishing Kolom Beton",  // TYPE: MONEY_CHILD
  // "https://www.betonjayareadymix.com/2018/10/jasa-finishing-balok-beton.html": "Jasa Finishing Balok Beton",  // TYPE: MONEY_CHILD
};

// ============================================================
// JASA PELAPISAN WATERPROOFING STRUKTUR
// 🧠 REKOMENDASI: Isi dengan URL berikut atau hapus const
// Parent: Jasa Finishing Struktur (/p/jasa-finishing-struktur.html)
// ============================================================
const urlMappingJasaPelapisanWaterproofingStrukturFromJasaFinishingStrukturSub2MoneyPage = {
  // SARAN ITEM (BELUM AKTIF - PERLU DIBUAT KONTEN)
  // "https://www.betonjayareadymix.com/2018/10/harga-jasa-waterproofing-struktur.html": "Harga Jasa Waterproofing Struktur",  // TYPE: MONEY_PAGE
  // "https://www.betonjayareadymix.com/2018/10/jasa-waterproofing-dak-beton.html": "Jasa Waterproofing Dak Beton",  // TYPE: MONEY_CHILD
  // "https://www.betonjayareadymix.com/2018/10/jasa-waterproofing-lantai-beton.html": "Jasa Waterproofing Lantai Beton",  // TYPE: MONEY_CHILD
};

// ============================================================
// JASA PELINDUNG RETAK STRUKTUR
// 🧠 REKOMENDASI: Isi dengan URL berikut atau hapus const
// Parent: Jasa Perbaikan Struktur (/p/jasa-perbaikan-struktur.html)
// ============================================================
const urlMappingJasaPelindungRetakStrukturFromJasaPerbaikanStrukturSub2MoneyPage = {
  // SARAN ITEM (BELUM AKTIF - PERLU DIBUAT KONTEN)
  // "https://www.betonjayareadymix.com/2018/10/harga-jasa-injeksi-retak-struktur.html": "Harga Jasa Injeksi Retak Struktur",  // TYPE: MONEY_PAGE
  // "https://www.betonjayareadymix.com/2018/10/jasa-perkuatan-struktur-retak.html": "Jasa Perkuatan Struktur Retak",  // TYPE: MONEY_PAGE
  // "https://www.betonjayareadymix.com/2018/10/harga-jasa-grouting-retak-struktur.html": "Harga Jasa Grouting Retak Struktur",  // TYPE: MONEY_PAGE
  // "https://www.betonjayareadymix.com/2018/10/jasa-epoxy-injeksi-retak.html": "Jasa Epoxy Injeksi Retak",  // TYPE: MONEY_CHILD
};

// ============================================================
// JASA INTERIOR DAN FURNITURE CUSTOM
// 🧠 REKOMENDASI: Isi dengan URL berikut atau hapus const
// Parent: Jasa Finishing Interior (/p/jasa-finishing-interior.html)
// ============================================================
const urlMappingJasaInteriordanFurnitureCustomeFromJasaFinishingInteriorSub2MoneyPage = {
  // SARAN ITEM (BELUM AKTIF - PERLU DIBUAT KONTEN)
  // "https://www.betonjayareadymix.com/p/jasa-interior-custom-rumah.html": "Jasa Interior Custom Rumah",  // TYPE: MONEY_PAGE
  // "https://www.betonjayareadymix.com/p/jasa-interior-custom-kantor.html": "Jasa Interior Custom Kantor",  // TYPE: MONEY_PAGE
  // "https://www.betonjayareadymix.com/p/jasa-furniture-custom-jepara.html": "Jasa Furniture Custom Jepara",  // TYPE: MONEY_PAGE
  // "https://www.betonjayareadymix.com/p/jasa-furniture-custom-per-meter.html": "Jasa Furniture Custom Per Meter",  // TYPE: MONEY_CHILD
  // "https://www.betonjayareadymix.com/p/harga-interior-furniture-custom.html": "Harga Interior Furniture Custom",  // TYPE: MONEY_PAGE
};

// ============================================================
// JASA KERAMIK LANTAI
// 🧠 REKOMENDASI: Isi dengan URL berikut atau hapus const
// Parent: Jasa Finishing Bangunan (/p/jasa-finishing-bangunan.html)
// ============================================================
const urlMappingJasaKeramikLantaiFromJasaFinishingBangunanSub2MoneyPage = {
  // SARAN ITEM (BELUM AKTIF - PERLU DIBUAT KONTEN)
  // "https://www.betonjayareadymix.com/p/jasa-pasang-keramik-lantai.html": "Jasa Pasang Keramik Lantai",  // TYPE: MONEY_PAGE
  // "https://www.betonjayareadymix.com/p/harga-jasa-pasang-keramik-per-meter.html": "Harga Jasa Pasang Keramik per Meter",  // TYPE: MONEY_PAGE
  // "https://www.betonjayareadymix.com/p/jasa-ganti-keramik-lantai.html": "Jasa Ganti Keramik Lantai",  // TYPE: MONEY_CHILD
  // "https://www.betonjayareadymix.com/p/jasa-pasang-keramik-lantai-jakarta.html": "Jasa Pasang Keramik Lantai Jakarta",  // TYPE: MONEY_CHILD
  // "https://www.betonjayareadymix.com/p/jasa-pasang-keramik-lantai-bogor.html": "Jasa Pasang Keramik Lantai Bogor",  // TYPE: MONEY_CHILD
};

// ============================================================
// JASA CAT INTERIOR RUMAH
// 🧠 REKOMENDASI: Isi dengan URL berikut atau hapus const
// Parent: Jasa Finishing Interior (/p/jasa-finishing-interior.html)
// ============================================================
const urlMappingJasaCatInteriorRumahFromJasaFinishingInteriorSub2MoneyPage = {
  // SARAN ITEM (BELUM AKTIF - PERLU DIBUAT KONTEN)
  // "https://www.betonjayareadymix.com/p/jasa-cat-interior-rumah-jakarta.html": "Jasa Cat Interior Rumah Jakarta",  // TYPE: MONEY_CHILD
  // "https://www.betonjayareadymix.com/p/harga-jasa-cat-interior-per-meter.html": "Harga Jasa Cat Interior per Meter",  // TYPE: MONEY_PAGE
  // "https://www.betonjayareadymix.com/p/jasa-cat-dinding-interior.html": "Jasa Cat Dinding Interior",  // TYPE: MONEY_PAGE
  // "https://www.betonjayareadymix.com/p/jasa-cat-interior-rumah-bogor.html": "Jasa Cat Interior Rumah Bogor",  // TYPE: MONEY_CHILD
};

// ============================================================
// JASA PASANG WALLPAPER DINDING
// 🧠 REKOMENDASI: Isi dengan URL berikut atau hapus const
// Parent: Jasa Finishing Interior (/p/jasa-finishing-interior.html)
// ============================================================
const urlMappingJasaPasangWallpaperDindingFromJasaFinishingInteriorSub2MoneyPage = {
  // SARAN ITEM (BELUM AKTIF - PERLU DIBUAT KONTEN)
  // "https://www.betonjayareadymix.com/p/jasa-pasang-wallpaper-dinding-jakarta.html": "Jasa Pasang Wallpaper Dinding Jakarta",  // TYPE: MONEY_CHILD
  // "https://www.betonjayareadymix.com/p/harga-jasa-pasang-wallpaper-per-meter.html": "Harga Jasa Pasang Wallpaper per Meter",  // TYPE: MONEY_PAGE
  // "https://www.betonjayareadymix.com/p/jasa-pasang-wallpaper-dinding-bogor.html": "Jasa Pasang Wallpaper Dinding Bogor",  // TYPE: MONEY_CHILD
  // "https://www.betonjayareadymix.com/p/jasa-pasang-wallpaper-dinding-bekasi.html": "Jasa Pasang Wallpaper Dinding Bekasi",  // TYPE: MONEY_CHILD
};

// ============================================================
// JASA LAMPU INTERIOR
// 🧠 REKOMENDASI: Isi dengan URL berikut atau hapus const
// Parent: Jasa Finishing Interior (/p/jasa-finishing-interior.html)
// ============================================================
const urlMappingJasaLampuInteriorFromJasaFinishingInteriorSub2MoneyPage = {
  // SARAN ITEM (BELUM AKTIF - PERLU DIBUAT KONTEN)
  // "https://www.betonjayareadymix.com/p/jasa-pasang-lampu-interior.html": "Jasa Pasang Lampu Interior",  // TYPE: MONEY_PAGE
  // "https://www.betonjayareadymix.com/p/jasa-instalasi-lampu-downlight.html": "Jasa Instalasi Lampu Downlight",  // TYPE: MONEY_CHILD
  // "https://www.betonjayareadymix.com/p/jasa-pasang-lampu-interior-jakarta.html": "Jasa Pasang Lampu Interior Jakarta",  // TYPE: MONEY_CHILD
  // "https://www.betonjayareadymix.com/p/harga-jasa-pasang-lampu-interior.html": "Harga Jasa Pasang Lampu Interior",  // TYPE: MONEY_PAGE
};

// ============================================================
// JASA FINISHING INTERIOR KLASIK - MONEY PAGE & SUB2
// ============================================================
// 🧠 SEO NOTE: Cluster ini fokus ke layanan finishing interior gaya klasik.
// Parent: Jasa Finishing Interior (/p/jasa-finishing-interior.html)
// Breadcrumb: Home > Jasa Konstruksi > Jasa Finishing Interior > [Nama Layanan] (4 level)
// ============================================================

const urlMappingJasaFinishingInteriorKlasikFromJasaFinishingInteriorSub2MoneyChild = {
  // ============================================================
  // [MONEY_CHILD] - LAYANAN FINISHING INTERIOR KLASIK
  // 🧠 TYPE: MONEY_CHILD (WAJIB tampil)
  // ============================================================
  "https://www.betonjayareadymix.com/2020/02/jasa-finishing-kayu-eksotis-ukiran.html": "Jasa Finishing Kayu Eksotis Ukiran",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2020/02/jasa-finishing-interior-klasik-gypsum.html": "Jasa Finishing Interior Klasik Gypsum",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2020/02/jasa-finishing-interior-klasik-kayu.html": "Jasa Finishing Interior Klasik Kayu",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2020/02/jasa-finishing-interior-klasik-gedung.html": "Jasa Finishing Interior Klasik Gedung",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2020/02/jasa-finishing-interior-klasik-rumah-mewah.html": "Jasa Finishing Interior Klasik Rumah Mewah",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2020/02/jasa-finishing-interior-klasik-kamar-tidur.html": "Jasa Finishing Interior Klasik Kamar Tidur",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2020/02/jasa-finishing-interior-klasik-ruang-tamu.html": "Jasa Finishing Interior Klasik Ruang Tamu",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2020/02/jasa-finishing-wall-panel-moulding-klasik.html": "Jasa Finishing Wall Panel & Moulding Klasik",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2020/02/jasa-finishing-cat-interior-klasik.html": "Jasa Finishing Cat Interior Klasik",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2020/02/jasa-finishing-plafon-interior-klasik.html": "Jasa Finishing Plafon Interior Klasik",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2020/02/jasa-finishing-dinding-interior-klasik.html": "Jasa Finishing Dinding Interior Klasik"  // TYPE: MONEY_CHILD
};

// ============================================================
// JASA FINISHING INTERIOR MINIMALIS - MONEY PAGE & SUB2
// ============================================================
// 🧠 SEO NOTE: Cluster ini fokus ke layanan finishing interior gaya minimalis.
// Parent: Jasa Finishing Interior (/p/jasa-finishing-interior.html)
// ============================================================

const urlMappingJasaFinishingInteriorMinimalisFromJasaFinishingInteriorSub2MoneyChild = {
  // ============================================================
  // [MONEY_CHILD] - LAYANAN FINISHING INTERIOR MINIMALIS
  // 🧠 TYPE: MONEY_CHILD (WAJIB tampil)
  // ============================================================
  "https://www.betonjayareadymix.com/2020/02/jasa-finishing-interior-minimalis-built-in.html": "Jasa Finishing Interior Minimalis Built In",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2020/02/jasa-finishing-interior-minimalis-gypsum.html": "Jasa Finishing Interior Minimalis Gypsum",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2020/02/jasa-finishing-interior-minimalis-kayu-hpl.html": "Jasa Finishing Interior Minimalis Kayu HPL",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2020/02/jasa-finishing-interior-minimalis-toko.html": "Jasa Finishing Interior Minimalis Toko",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2020/02/jasa-finishing-interior-minimalis-kantor.html": "Jasa Finishing Interior Minimalis Kantor",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2020/02/jasa-finishing-interior-minimalis-apartemen.html": "Jasa Finishing Interior Minimalis Apartemen",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2020/02/jasa-finishing-interior-minimalis-rumah.html": "Jasa Finishing Interior Minimalis Rumah",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2020/02/jasa-finishing-interior-minimalis-kamar-mandi.html": "Jasa Finishing Interior Minimalis Kamar Mandi",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2020/02/jasa-finishing-interior-minimalis-dapur.html": "Jasa Finishing Interior Minimalis Dapur",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2020/02/jasa-finishing-interior-minimalis-kamar-tidur.html": "Jasa Finishing Interior Minimalis Kamar Tidur",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2020/02/jasa-finishing-interior-minimalis-ruang-tamu.html": "Jasa Finishing Interior Minimalis Ruang Tamu",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2020/02/jasa-finishing-partisi-sekat-minimalis.html": "Jasa Finishing Partisi Sekat Minimalis",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2020/02/jasa-finishing-cat-interior-minimalis.html": "Jasa Finishing Cat Interior Minimalis",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2020/02/jasa-finishing-lantai-interior-minimalis.html": "Jasa Finishing Lantai Interior Minimalis",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2020/02/jasa-finishing-plafon-minimalis.html": "Jasa Finishing Plafon Minimalis",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2020/02/jasa-finishing-dinding-interior-minimalis.html": "Jasa Finishing Dinding Interior Minimalis"  // TYPE: MONEY_CHILD
};

// ============================================================
// JASA INTERIOR & FURNITURE CUSTOM - MONEY PAGE
// ============================================================
// 🧠 SEO NOTE: Cluster ini fokus ke layanan interior dan furniture custom.
// Parent: Jasa Finishing Interior (/p/jasa-finishing-interior.html)
// ============================================================

const urlMappingJasaInteriorFurnitureCustomeFromJasaFinishingInteriorSub2MoneyPage = {
  // ============================================================
  // [MONEY_CHILD] - JASA INTERIOR FURNITURE PER LOKASI
  // ============================================================
  "https://www.betonjayareadymix.com/2018/11/jasa-interior-furniture-tangerang.html": "Jasa Interior Furniture Tangerang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/11/jasa-interior-furniture-jakarta.html": "Jasa Interior Furniture Jakarta",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/11/jasa-interior-furniture-bekasi.html": "Jasa Interior Furniture Bekasi",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/11/jasa-interior-furniture-depok.html": "Jasa Interior Furniture Depok",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/11/jasa-interior-furniture-bogor.html": "Jasa Interior Furniture Bogor",  // TYPE: MONEY_CHILD
  
  // ============================================================
  // [MONEY_CHILD] - JASA PEMBUATAN FURNITURE
  // ============================================================
  "https://www.betonjayareadymix.com/2018/09/jasa-pembuatan-kamar-set.html": "Jasa Pembuatan Kamar Set",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/11/jasa-pembuatan-furniture-bekasi.html": "Jasa Pembuatan Furniture Bekasi",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/11/jasa-pembuatan-furniture-depok.html": "Jasa Pembuatan Furniture Depok",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/11/jasa-pembuatan-furniture-bogor.html": "Jasa Pembuatan Furniture Bogor",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/11/jasa-pembuatan-furniture-jakarta.html": "Jasa Pembuatan Furniture Jakarta",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/11/jasa-pembuatan-furniture-tangerang.html": "Jasa Pembuatan Furniture Tangerang",  // TYPE: MONEY_CHILD
  
  // ============================================================
  // [MONEY_CHILD] - JASA CUSTOM FURNITURE PER LOKASI
  // ============================================================
  "https://www.betonjayareadymix.com/2018/11/jasa-custom-furniture-jakarta.html": "Jasa Custom Furniture Jakarta",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/11/jasa-custom-furniture-bekasi.html": "Jasa Custom Furniture Bekasi",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/11/jasa-custom-furniture-tangerang.html": "Jasa Custom Furniture Tangerang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/11/jasa-custom-furniture-depok.html": "Jasa Custom Furniture Depok",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/11/jasa-custom-furniture-bogor.html": "Jasa Custom Furniture Bogor",  // TYPE: MONEY_CHILD
  
  // ============================================================
  // [MONEY_PAGE] - JASA FURNITURE UMUM & CUSTOM
  // ============================================================
  "https://www.betonjayareadymix.com/2018/09/jasa-furniture-interior-exterior.html": "Jasa Furniture Interior Exterior",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/09/jasa-furniture-custom.html": "Jasa Furniture Custom",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/09/jasa-pembuatan-furniture-custom.html": "Jasa Pembuatan Furniture Custom",  // TYPE: MONEY_PAGE
  
  // ============================================================
  // [MONEY_PAGE] - HARGA INTERIOR & FURNITURE
  // ============================================================
  "https://www.betonjayareadymix.com/2018/09/harga-interior-kamar-tidur.html": "Harga Interior Kamar Tidur",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/09/harga-interior-kamar.html": "Harga Interior Kamar",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/09/harga-interior-ruang-tamu.html": "Harga Interior Ruang Tamu",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/09/harga-interior-per-meter.html": "Harga Interior Per Meter",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/09/harga-borongan-interior.html": "Harga Borongan Interior",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/09/harga-interior-kamar-tidur-minimalis.html": "Harga Interior Kamar Tidur Minimalis",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/09/harga-custom-furniture-per-meter.html": "Harga Custom Furniture Per Meter"  // TYPE: MONEY_PAGE
};

// ============================================================
// JASA FINISHING INTERIOR MODERN - SUB2 (KATEGORI UTAMA)
// ============================================================
// 🧠 TYPE: SUB2 (boleh skip di breadcrumb)
// ============================================================

const urlMappingJasaFinishingInteriorModernFromJasaFinishingInteriorSub2Sub2 = {
  "https://www.betonjayareadymix.com/2020/02/jasa-pasang-wpc.html": "Jasa Pasang WPC",  // TYPE: SUB2
  "https://www.betonjayareadymix.com/2020/02/jasa-pasang-vinyl.html": "Jasa Pasang Vinyl",  // TYPE: SUB2
  "https://www.betonjayareadymix.com/2020/02/jasa-pasang-pvc.html": "Jasa Pasang PVC",  // TYPE: SUB2
  "https://www.betonjayareadymix.com/2020/02/jasa-pasang-plafon.html": "Jasa Pasang Plafon"  // TYPE: SUB2
};

// ============================================================
// JASA FINISHING INTERIOR MODERN - WPC (TURUNAN)
// ============================================================
// 🧠 TYPE: MONEY_CHILD (WAJIB tampil)
// ============================================================

const urlMappingJasaFinishingInteriorModernWpcFromJasaPasangWpcSub2MoneyChild = {
  "https://www.betonjayareadymix.com/2020/02/harga-jasa-pasang-wpc-lantai.html": "Harga Jasa Pasang WPC Lantai",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2020/02/jasa-pasang-panel-dinding-wpc.html": "Jasa Pasang Panel Dinding WPC",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2020/02/harga-jasa-pasang-dinding-wpc.html": "Harga Jasa Pasang Dinding WPC",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2020/02/harga-jasa-pasang-wall-panel-wpc.html": "Harga Jasa Pasang Wall Panel WPC",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2020/02/jasa-pasang-wall-panel-wpc-terdekat.html": "Jasa Pasang Wall Panel WPC Terdekat",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2020/02/jasa-pasang-wpc-dinding-per-meter.html": "Jasa Pasang WPC Dinding Per Meter",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2020/02/jasa-pasang-wpc-wall-panel-bogor.html": "Jasa Pasang WPC Wall Panel Bogor",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2020/02/jasa-pasang-wpc-wall-panel-bekasi.html": "Jasa Pasang WPC Wall Panel Bekasi",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2020/02/jasa-pasang-wpc-wall-panel-jakarta.html": "Jasa Pasang WPC Wall Panel Jakarta",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2020/02/jasa-pasang-wpc-wall-panel-tangerang.html": "Jasa Pasang WPC Wall Panel Tangerang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2020/02/jasa-pasang-wpc-wall-panel-depok.html": "Jasa Pasang WPC Wall Panel Depok",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2020/02/jasa-pasang-wpc-wall-panel-karawang.html": "Jasa Pasang WPC Wall Panel Karawang"  // TYPE: MONEY_CHILD
};

// ============================================================
// JASA FINISHING INTERIOR MODERN - VINYL (TURUNAN)
// ============================================================
// 🧠 TYPE: MONEY_CHILD (WAJIB tampil)
// ============================================================

const urlMappingJasaFinishingInteriorModernVinylFromJasaPasangVinylSub2MoneyChild = {
  "https://www.betonjayareadymix.com/2020/02/jasa-pasang-vinyl-lantai-karawang.html": "Jasa Pasang Vinyl Lantai Karawang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2020/02/jasa-pasang-vinyl-lantai-tangerang.html": "Jasa Pasang Vinyl Lantai Tangerang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2020/02/jasa-pasang-vinyl-lantai-depok.html": "Jasa Pasang Vinyl Lantai Depok",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2020/02/jasa-pasang-vinyl-lantai-bogor.html": "Jasa Pasang Vinyl Lantai Bogor",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2020/02/jasa-pasang-vinyl-lantai-bekasi.html": "Jasa Pasang Vinyl Lantai Bekasi",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2020/02/jasa-pasang-vinyl-lantai-jakarta.html": "Jasa Pasang Vinyl Lantai Jakarta",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2020/02/jasa-tenaga-pasang-vinyl-lantai-per-meter.html": "Jasa Tenaga Pasang Vinyl Lantai per Meter",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2020/02/jasa-borong-pasang-vinyl-lantai-per-meter.html": "Jasa Borong Pasang Vinyl Lantai per Meter",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2020/02/harga-jasa-pasang-vinyl-lantai-per-meter.html": "Harga Jasa Pasang Vinyl Lantai per Meter",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2020/02/harga-jasa-pasang-vinyl-lantai.html": "Harga Jasa Pasang Vinyl Lantai",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2020/02/harga-jasa-pemasangan-vinyl-lantai.html": "Harga Jasa Pemasangan Vinyl Lantai",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2020/02/harga-jasa-vinyl.html": "Harga Jasa Vinyl",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2020/02/harga-jasa-pemasangan-vinyl.html": "Harga Jasa Pemasangan Vinyl",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2020/02/harga-jasa-pasang-vinyl-per-meter.html": "Harga Jasa Pasang Vinyl per Meter",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2020/02/jasa-pasang-vinyl-tangga.html": "Jasa Pasang Vinyl Tangga",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2020/02/jasa-pasang-vinyl-lantai-terdekat.html": "Jasa Pasang Vinyl Lantai Terdekat",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2020/02/jasa-pasang-vinyl-terdekat.html": "Jasa Pasang Vinyl Terdekat",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2020/02/jasa-vinyl-lantai.html": "Jasa Vinyl Lantai",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2020/02/jasa-pasang-vinyl-lantai.html": "Jasa Pasang Vinyl Lantai",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2020/02/jasa-vinyl-lantai-terdekat.html": "Jasa Vinyl Lantai Terdekat"  // TYPE: MONEY_CHILD
};

// ============================================================
// JASA FINISHING INTERIOR MODERN - PVC (TURUNAN)
// ============================================================
// 🧠 TYPE: MONEY_CHILD (WAJIB tampil)
// ============================================================

const urlMappingJasaFinishingInteriorModernPvcFromJasaPasangPvcSub2MoneyChild = {
  "https://www.betonjayareadymix.com/2020/02/jasa-pasang-pvc-lantai.html": "Jasa Pasang Pvc Lantai",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2020/02/jasa-pasang-dinding-pvc-surabaya.html": "Jasa Pasang Dinding PVC Surabaya",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2020/02/jasa-pasang-dinding-pvc-karawang.html": "Jasa Pasang Dinding PVC Karawang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2020/02/jasa-pasang-dinding-pvc-depok.html": "Jasa Pasang Dinding PVC Depok",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2020/02/jasa-pasang-dinding-pvc-tangerang.html": "Jasa Pasang Dinding PVC Tangerang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2020/02/jasa-pasang-dinding-pvc-jakarta.html": "Jasa Pasang Dinding PVC Jakarta",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2020/02/jasa-pasang-dinding-pvc-bekasi.html": "Jasa Pasang Dinding PVC Bekasi",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2020/02/jasa-pasang-dinding-pvc-bogor.html": "Jasa Pasang Dinding PVC Bogor",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2020/02/harga-jasa-pasang-pvc-dinding.html": "Harga Jasa Pasang PVC Dinding",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2020/02/harga-jasa-pasang-pvc-per-meter.html": "Harga Jasa Pasang PVC Per Meter",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2020/02/jasa-pasang-pvc-dinding-per-meter.html": "Jasa Pasang PVC Dinding Per Meter",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2020/02/jasa-pasang-pvc-dinding-terdekat.html": "Jasa Pasang PVC Dinding Terdekat",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2020/02/jasa-pasang-pvc-dinding.html": "Jasa Pasang PVC Dinding",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2020/02/jasa-pasang-pvc-per-meter.html": "Jasa Pasang PVC Per Meter",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2020/02/jasa-pasang-pvc-board.html": "Jasa Pasang PVC Board",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2020/02/jasa-pasang-pvc-terdekat.html": "Jasa Pasang PVC Terdekat",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2020/02/harga-jasa-pasang-wall-panel-pvc.html": "Harga Jasa Pasang Wall Panel PVC",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2020/02/jasa-pasang-wall-panel-pvc.html": "Jasa Pasang Wall Panel PVC"  // TYPE: MONEY_CHILD
};

// ============================================================
// JASA FINISHING INTERIOR MODERN - PLAFON (TURUNAN)
// ============================================================
// 🧠 TYPE: MONEY_CHILD (WAJIB tampil)
// ============================================================

const urlMappingJasaFinishingInteriorModernPlafonFromJasaPasangPlafonSub2MoneyChild = {
  "https://www.betonjayareadymix.com/2020/02/jasa-pasang-plafon-wpc-premium.html": "Jasa Pasang Plafon WPC Premium",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2020/02/harga-jasa-pasang-plafon-wpc.html": "Harga Jasa Pasang Plafon WPC",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2020/02/jasa-pasang-plafon-wpc.html": "Jasa Pasang Plafon WPC",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2020/02/jasa-pasang-plafon-gypsum.html": "Jasa Pasang Plafon Gypsum",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2020/02/jasa-pasang-plafon-per-meter.html": "Jasa Pasang Plafon Per Meter",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2020/02/jasa-pasang-plafon-terdekat.html": "Jasa Pasang Plafon Terdekat",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2020/02/jasa-pasang-plafon-pvc.html": "Jasa Pasang Plafon PVC",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2020/02/jasa-pasang-plafon-grc.html": "Jasa Pasang Plafon GRC",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2020/02/jasa-pasang-plafon-akustik.html": "Jasa Pasang Plafon Akustik",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2020/02/jasa-pasang-plafon-upvc.html": "Jasa Pasang Plafon UPVC",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2020/02/jasa-pasang-plafon-gypsum-per-meter.html": "Jasa Pasang Plafon Gypsum Per Meter",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2020/02/jasa-pasang-plafon-gypsum-terdekat.html": "Jasa Pasang Plafon Gypsum Terdekat",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2020/02/jasa-pasang-plafon-akustik-per-meter.html": "Jasa Pasang Plafon Akustik Per Meter",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2020/02/jasa-pasang-plafon-pvc-per-meter.html": "Jasa Pasang Plafon PVC Per Meter",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2020/02/jasa-pasang-plafon-pvc-terdekat.html": "Jasa Pasang Plafon PVC Terdekat",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2020/02/jasa-pasang-plafon-bogor.html": "Jasa Pasang Plafon Bogor",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2020/02/jasa-pasang-plafon-bekasi.html": "Jasa Pasang Plafon Bekasi",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2020/02/jasa-pasang-plafon-jakarta.html": "Jasa Pasang Plafon Jakarta",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2020/02/jasa-pasang-plafon-depok.html": "Jasa Pasang Plafon Depok",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2020/02/jasa-pasang-plafon-tangerang.html": "Jasa Pasang Plafon Tangerang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2020/02/jasa-pasang-plafon-karawang.html": "Jasa Pasang Plafon Karawang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2020/02/jasa-pasang-plafon-surabaya.html": "Jasa Pasang Plafon Surabaya"  // TYPE: MONEY_CHILD
};

// ============================================================
// JASA KITCHEN SET - MONEY PAGE
// ============================================================
// 🧠 TYPE: MONEY_CHILD (WAJIB tampil)
// ============================================================

const urlMappingJasaKitchenSetFromJasaFinishingInteriorSub2MoneyChild = {
  // Harga & Jasa Kitchen Set
  "https://www.betonjayareadymix.com/2018/09/kabinet-dapur.html": "Kabinet Dapur",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/09/harga-kitchen-set-interior.html": "Harga Kitchen Set Interior",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/09/harga-jasa-pembuatan-kitchen-set.html": "Harga Jasa Pembuatan Kitchen Set",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/09/harga-borongan-tenaga-bikin-kitchen-set.html": "Harga Borongan Tenaga Bikin Kitchen Set",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/09/harga-jasa-desain-kitchen-set.html": "Harga Jasa Desain Kitchen Set",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/09/harga-kitchen-set-per-meter-kayu-jati.html": "Harga Kitchen Set Per Meter Kayu Jati",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/09/harga-jasa-pembuatan-kitchen-set-per-meter.html": "Harga Jasa Pembuatan Kitchen Set Per Meter",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/09/jasa-kitchen-set-murah.html": "Jasa Kitchen Set Murah",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/09/jasa-kitchen-set-terdekat.html": "Jasa Kitchen Set Terdekat",  // TYPE: MONEY_CHILD
  
  // Per Jenis Bangunan
  "https://www.betonjayareadymix.com/2020/02/jasa-kitchen-set-kafe-restoran.html": "Jasa Kitchen Set Kafe & Restoran",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2020/02/jasa-kitchen-set-rumah-tinggal.html": "Jasa Kitchen Set Rumah Tinggal",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2020/02/jasa-kitchen-set-apartemen.html": "Jasa Kitchen Set Apartemen",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2020/02/jasa-kitchen-set-dapur-kecil-sempit.html": "Jasa Kitchen Set Dapur Kecil & Sempit",  // TYPE: MONEY_CHILD
  
  // Per Material
  "https://www.betonjayareadymix.com/2020/02/jasa-kitchen-set-aluminium.html": "Jasa Kitchen Set Aluminium",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2020/02/jasa-kitchen-set-kayu-solid.html": "Jasa Kitchen Set Kayu Solid",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2020/02/jasa-kitchen-set-multiplek-plywood.html": "Jasa Kitchen Set Multiplek / Plywood",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2020/02/jasa-kitchen-set-hpl.html": "Jasa Kitchen Set HPL",  // TYPE: MONEY_CHILD
  
  // Per Desain
  "https://www.betonjayareadymix.com/2020/02/jasa-kitchen-set-letter-l-u-island.html": "Jasa Kitchen Set Letter L, U & Island",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2020/02/jasa-kitchen-set-per-meter.html": "Jasa Kitchen Set Per Meter",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2020/02/jasa-kitchen-set-custom.html": "Jasa Kitchen Set Custom",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2020/02/jasa-kitchen-set-industrial.html": "Jasa Kitchen Set Industrial",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2020/02/jasa-kitchen-set-klasik-elegan.html": "Jasa Kitchen Set Klasik Elegan",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2020/02/jasa-kitchen-set-modern.html": "Jasa Kitchen Set Modern",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2020/02/jasa-kitchen-set-minimalis.html": "Jasa Kitchen Set Minimalis"  // TYPE: MONEY_CHILD
};

// ============================================================
// JASA CAT EKSTERIOR RUMAH - KOSONG
// ============================================================
// 🧠 SEO NOTE: Const ini kosong. Disarankan untuk diisi atau dihapus.
// Parent: Jasa Finishing Eksterior (/p/jasa-finishing-eksterior.html)
// ============================================================

const urlMappingJasaCatEksteriorRumahFromJasaFinishingEksteriorSub2MoneyPage = {
  // ============================================================
  // 🟡 SARAN ITEM (BELUM AKTIF - PERLU DIBUAT KONTEN)
  // ============================================================
  // "https://www.betonjayareadymix.com/p/jasa-cat-eksterior-rumah.html": "Jasa Cat Eksterior Rumah",  // TYPE: SUB2
  // "https://www.betonjayareadymix.com/p/harga-cat-eksterior-rumah.html": "Harga Cat Eksterior Rumah",  // TYPE: MONEY_PAGE
  // "https://www.betonjayareadymix.com/p/harga-cat-eksterior-rumah-jakarta.html": "Harga Cat Eksterior Rumah Jakarta",  // TYPE: MONEY_CHILD
  // "https://www.betonjayareadymix.com/p/jasa-cat-eksterior-rumah-murah.html": "Jasa Cat Eksterior Rumah Murah",  // TYPE: MONEY_CHILD
};

// ============================================================
// JASA FINISHING FASAD EKSTERIOR - BLOG POST
// ============================================================
// 🧠 SEO NOTE: Cluster ini fokus ke jasa profil beton, GRC, gypsum, dan ACP.
// Parent: Jasa Finishing Eksterior (/p/jasa-finishing-eksterior.html)
// ============================================================

const urlMappingJasaFinishingFasadEksteriorFromJasaFinishingEksteriorSub2MoneyPage = {
  // ============================================================
  // [MONEY_PAGE] - HARGA PROFIL BETON (TRANSACTIONAL)
  // 🧠 TYPE: MONEY_PAGE (JASA TIDAK BOLEH MONEY_MASTER)
  // Breadcrumb: Home > Jasa Konstruksi > Jasa Finishing Eksterior > Harga Profil Beton (4 level)
  // ============================================================
  "https://www.betonjayareadymix.com/2018/09/harga-jasa-profil-beton.html": "Harga Jasa Profil Beton",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/09/harga-jasa-profil-bangunan.html": "Harga Jasa Profil Bangunan",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/09/harga-jasa-profil-rumah.html": "Harga Jasa Profil Rumah",  // TYPE: MONEY_PAGE
  
  // ============================================================
  // [MONEY_PAGE] - HARGA JASA PASANG ACP
  // ============================================================
  "https://www.betonjayareadymix.com/2020/01/harga-jasa-pasang-acp.html": "Harga Jasa Pasang ACP",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2020/01/harga-jasa-pasang-acp-per-meter.html": "Harga Jasa Pasang ACP Per Meter",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2020/01/harga-jasa-laser-cutting-acp.html": "Harga Jasa Laser Cutting ACP",  // TYPE: MONEY_PAGE
  
  // ============================================================
  // [MONEY_CHILD] - JASA ACP PER LOKASI
  // ============================================================
  "https://www.betonjayareadymix.com/2020/01/jasa-pasang-acp-jakarta.html": "Jasa Pasang ACP Jakarta",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2020/01/jasa-pasang-acp-bogor.html": "Jasa Pasang ACP Bogor",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2020/01/jasa-pasang-acp-depok.html": "Jasa Pasang ACP Depok",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2020/01/jasa-pasang-acp-tangerang.html": "Jasa Pasang ACP Tangerang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2020/01/jasa-pasang-acp-bekasi.html": "Jasa Pasang ACP Bekasi",  // TYPE: MONEY_CHILD
  
  // ============================================================
  // [MONEY_CHILD] - HARGA JASA ACP PER LOKASI
  // ============================================================
  "https://www.betonjayareadymix.com/2020/01/harga-jasa-pasang-acp-jakarta.html": "Harga Jasa Pasang ACP Jakarta",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2020/01/harga-jasa-pasang-acp-bogor.html": "Harga Jasa Pasang ACP Bogor",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2020/01/harga-jasa-pasang-acp-depok.html": "Harga Jasa Pasang ACP Depok",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2020/01/harga-jasa-pasang-acp-tangerang.html": "Harga Jasa Pasang ACP Tangerang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2020/01/harga-jasa-pasang-acp-bekasi.html": "Harga Jasa Pasang ACP Bekasi",  // TYPE: MONEY_CHILD
  
  // ============================================================
  // [MONEY_CHILD] - JASA ACP PER METER PER LOKASI
  // ============================================================
  "https://www.betonjayareadymix.com/2020/01/jasa-pasang-acp-per-meter-jakarta.html": "Jasa Pasang ACP per Meter Jakarta",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2020/01/jasa-pasang-acp-per-meter-bogor.html": "Jasa Pasang ACP per Meter Bogor",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2020/01/jasa-pasang-acp-per-meter-depok.html": "Jasa Pasang ACP per Meter Depok",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2020/01/jasa-pasang-acp-per-meter-tangerang.html": "Jasa Pasang ACP per Meter Tangerang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2020/01/jasa-pasang-acp-per-meter-bekasi.html": "Jasa Pasang ACP per Meter Bekasi",  // TYPE: MONEY_CHILD
  
  // ============================================================
  // [REDIRECT] - DUPLIKASI DARI MASTER (301 redirect)
  // ============================================================
  "https://www.betonjayareadymix.com/2020/01/jasa-pasang-acp.html": "Jasa Pasang ACP",  // TYPE: REDIRECT
  "https://www.betonjayareadymix.com/2020/01/jasa-pasang-acp-per-meter.html": "Jasa Pasang ACP per Meter",  // TYPE: REDIRECT
  "https://www.betonjayareadymix.com/2020/01/jasa-laser-cutting-acp.html": "Jasa Laser Cutting ACP",  // TYPE: REDIRECT
  
  // ============================================================
  // [SUB2] - JASA RELIEF DINDING (INFORMASIONAL)
  // ============================================================
  "https://www.betonjayareadymix.com/2018/09/jasa-relief-dinding.html": "Jasa Relief Dinding",  // TYPE: SUB2
  "https://www.betonjayareadymix.com/2018/09/jasa-pembuatan-relief-dinding.html": "Jasa Pembuatan Relief Dinding"  // TYPE: SUB2
};

// ============================================================
// JASA FINISHING TAMAN RUMAH - BLOG POST
// ============================================================
// 🧠 SEO NOTE: Cluster ini fokus ke jasa pembuatan taman.
// Parent: Jasa Finishing Eksterior (/p/jasa-finishing-eksterior.html)
// ============================================================

const urlMappingJasaFinishingTamanRumahFromJasaFinishingEksteriorSub2MoneyPage = {
  // ============================================================
  // [MONEY_PAGE] - JASA TAMAN (TRANSACTIONAL)
  // ============================================================
  "https://www.betonjayareadymix.com/2018/09/jasa-relief-taman.html": "Jasa Relief Taman",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/09/jasa-tukang-taman.html": "Jasa Tukang Taman",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/09/jasa-taman-terdekat.html": "Jasa Taman Terdekat",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/09/jasa-taman-murah.html": "Jasa Taman Murah",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/09/jasa-pembuatan-taman.html": "Jasa Pembuatan Taman",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/09/jasa-taman.html": "Jasa Taman",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/09/jasa-pembuatan-taman-terdekat.html": "Jasa Pembuatan Taman Terdekat",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/09/jasa-pembuatan-taman-rumah.html": "Jasa Pembuatan Taman Rumah"  // TYPE: MONEY_PAGE
};

// ============================================================
// JASA PELAPISAN ANTI CUACA - KOSONG
// ============================================================
// 🧠 SEO NOTE: Const ini kosong. Disarankan untuk diisi atau dihapus.
// Parent: Jasa Finishing Eksterior (/p/jasa-finishing-eksterior.html)
// ============================================================

const urlMappingJasaPelapisanAntiCuacaFromJasaFinishingEksteriorSub2MoneyPage = {
  // ============================================================
  // 🟡 SARAN ITEM (BELUM AKTIF - PERLU DIBUAT KONTEN)
  // ============================================================
  // "https://www.betonjayareadymix.com/p/jasa-pelapisan-anti-cuaca.html": "Jasa Pelapisan Anti Cuaca",  // TYPE: SUB2
  // "https://www.betonjayareadymix.com/p/harga-pelapisan-anti-cuaca.html": "Harga Pelapisan Anti Cuaca",  // TYPE: MONEY_PAGE
  // "https://www.betonjayareadymix.com/p/jasa-pelapisan-anti-cuaca-jakarta.html": "Jasa Pelapisan Anti Cuaca Jakarta",  // TYPE: MONEY_CHILD
};

// ============================================================
// JASA PELAPISAN DINDING LUAR - KOSONG
// ============================================================

const urlMappingJasaPelapisanDindingLuarFromJasaFinishingEksteriorSub2MoneyPage = {
  // ============================================================
  // 🟡 SARAN ITEM (BELUM AKTIF - PERLU DIBUAT KONTEN)
  // ============================================================
  // "https://www.betonjayareadymix.com/p/jasa-pelapisan-dinding-luar.html": "Jasa Pelapisan Dinding Luar",  // TYPE: SUB2
  // "https://www.betonjayareadymix.com/p/harga-pelapisan-dinding-luar.html": "Harga Pelapisan Dinding Luar",  // TYPE: MONEY_PAGE
  // "https://www.betonjayareadymix.com/p/jasa-pelapisan-dinding-luar-murah.html": "Jasa Pelapisan Dinding Luar Murah",  // TYPE: MONEY_CHILD
};

// ============================================================
// JASA FINISHING KANOPI TERAS - KOSONG
// ============================================================

const urlMappingJasaFinishingKanopiTerasFromJasaFinishingEksteriorSub2MoneyPage = {
  // ============================================================
  // 🟡 SARAN ITEM (BELUM AKTIF - PERLU DIBUAT KONTEN)
  // ============================================================
  // "https://www.betonjayareadymix.com/p/jasa-finishing-kanopi-teras.html": "Jasa Finishing Kanopi Teras",  // TYPE: SUB2
  // "https://www.betonjayareadymix.com/p/harga-finishing-kanopi-teras.html": "Harga Finishing Kanopi Teras",  // TYPE: MONEY_PAGE
  // "https://www.betonjayareadymix.com/p/jasa-finishing-kanopi-teras-murah.html": "Jasa Finishing Kanopi Teras Murah",  // TYPE: MONEY_CHILD
};

// ============================================================
// JASA PELAPISAN BATU ALAM EKSTERIOR - KOSONG
// ============================================================

const urlMappingJasaPelapisanBatuAlamEksteriorFromJasaFinishingEksteriorSub2MoneyPage = {
  // ============================================================
  // 🟡 SARAN ITEM (BELUM AKTIF - PERLU DIBUAT KONTEN)
  // ============================================================
  // "https://www.betonjayareadymix.com/p/jasa-pelapisan-batu-alam-eksterior.html": "Jasa Pelapisan Batu Alam Eksterior",  // TYPE: SUB2
  // "https://www.betonjayareadymix.com/p/harga-pelapisan-batu-alam-eksterior.html": "Harga Pelapisan Batu Alam Eksterior",  // TYPE: MONEY_PAGE
  // "https://www.betonjayareadymix.com/p/jasa-pelapisan-batu-alam-eksterior-jakarta.html": "Jasa Pelapisan Batu Alam Eksterior Jakarta",  // TYPE: MONEY_CHILD
};

// ============================================================
// JASA PELAPISAN GENTENG DAK - KOSONG
// ============================================================

const urlMappingJasaPelapisanGentengDakFromJasaFinishingEksteriorSub2MoneyPage = {
  // ============================================================
  // 🟡 SARAN ITEM (BELUM AKTIF - PERLU DIBUAT KONTEN)
  // ============================================================
  // "https://www.betonjayareadymix.com/p/jasa-pelapisan-genteng-dak.html": "Jasa Pelapisan Genteng Dak",  // TYPE: SUB2
  // "https://www.betonjayareadymix.com/p/harga-pelapisan-genteng-dak.html": "Harga Pelapisan Genteng Dak",  // TYPE: MONEY_PAGE
  // "https://www.betonjayareadymix.com/p/jasa-pelapisan-genteng-dak-murah.html": "Jasa Pelapisan Genteng Dak Murah",  // TYPE: MONEY_CHILD
};
//AKHIR SUB JasaFinishingBangunanEksteriorPost

/*
const urlMappingFinishingInfrastruktur = {

  "https://www.betonjayareadymix.com/p/jasa-finishing-jalan-jembatan.html": "Jasa Finishing Jalan Jembatan",
  "https://www.betonjayareadymix.com/p/jasa-finishing-trotoar-area-publik.html": "Jasa Finishing Trotoar Area Publik",
  "https://www.betonjayareadymix.com/p/jasa-finishing-saluran-drainase.html": "Jasa Finishing Saluran Drainase",
  "https://www.betonjayareadymix.com/p/jasa-finishing-struktur-utilitas.html": "Jasa Finishing Struktur Utilitas",
  "https://www.betonjayareadymix.com/p/jasa-finishing-proteksi-beton.html": "Jasa Finishing Proteksi Beton"

};

const urlMappingFinishingInfrastrukturJalan = {

 "https://www.betonjayareadymix.com/p/jasa-finishing-jembatan-beton.html": "Jasa Finishing Jembatan Beton",
  "https://www.betonjayareadymix.com/p/jasa-finishing-jalan-beton.html": "Jasa Finishing Jalan Beton",
  "https://www.betonjayareadymix.com/p/jasa-pengecatan-marking-jalan.html": "Jasa Pengecatan Marking Jalan",
  "https://www.betonjayareadymix.com/p/jasa-pelapisan-jalan-tol.html": "Jasa Pelapisan Jalan Tol",
  "https://www.betonjayareadymix.com/p/jasa-coating-jembatan.html": "Jasa Coating Jembatan"
};

const urlMappingFinishingInfrastrukturTrotoar = {
 "https://www.betonjayareadymix.com/p/jasa-finishing-trotoar.html": "Jasa Finishing Trotoar",
  "https://www.betonjayareadymix.com/p/jasa-penataan-trotoar-beton.html": "Jasa Penataan Trotoar Beton",
  "https://www.betonjayareadymix.com/p/jasa-epoxy-area-publik.html": "Jasa Epoxy Area Publik",
  "https://www.betonjayareadymix.com/p/jasa-pelapisan-area-pejalan-kaki.html": "Jasa Pelapisan Area Pejalan Kaki"
};

const urlMappingFinishingInfrastrukturSaluran = {
  "https://www.betonjayareadymix.com/p/jasa-coating-gorong-gorong.html": "Jasa Coating Gorong Gorong",
  "https://www.betonjayareadymix.com/p/jasa-pelapisan-saluran-beton.html": "Jasa Pelapisan Saluran Beton",
  "https://www.betonjayareadymix.com/p/jasa-waterproofing-saluran-air.html": "Jasa Waterproofing Saluran Air",
  "https://www.betonjayareadymix.com/p/jasa-finishing-penutup-saluran.html": "Jasa Finishing Penutup Saluran"

};

const urlMappingFinishingInfrastrukturStruktur = {
 "https://www.betonjayareadymix.com/p/jasa-finishing-rumah-pompa.html": "Jasa Finishing Rumah Pompa",
  "https://www.betonjayareadymix.com/p/jasa-pelapisan-box-utilitas.html": "Jasa Pelapisan Box Utilitas",
  "https://www.betonjayareadymix.com/p/jasa-epoxy-struktur-publik.html": "Jasa Epoxy Struktur Publik",
  "https://www.betonjayareadymix.com/p/jasa-finishing-penutup-kabel-beton.html": "Jasa Finishing Penutup Kabel Beton"

};

const urlMappingFinishingInfrastrukturProteksi = {
 "https://www.betonjayareadymix.com/p/jasa-pelapisan-anti-karat-beton.html": "Jasa Pelapisan Anti Karat Beton",
  "https://www.betonjayareadymix.com/p/jasa-epoxy-beton-luar-ruang.html": "Jasa Epoxy Beton Luar Ruang",
  "https://www.betonjayareadymix.com/p/jasa-proteksi-struktur-beton-luar.html": "Jasa Proteksi Struktur Beton Luar",
  "https://www.betonjayareadymix.com/p/jasa-finishing-khusus-cuaca-ekstrem.html": "Jasa Finishing Khusus Cuaca Ekstrem"

};
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
// Fungsi untuk menghapus elemen berdasarkan ID
// ============================================================
// FUNGSI REMOVE & RESTORE (TIDAK MENGHAPUS CONTAINER)
// ============================================================

// Menyimpan elemen yang dihapus dalam variabel
let removedElementsJasaKonsFinishingPost = {};

// 🔥 MODIFIKASI: HAPUS ELEMEN, TAPI JANGAN HAPUS CONTAINER UTAMA
function removeCondition(conditionId) {
    // JANGAN hapus container utama!
    if (conditionId === 'JasaKonsFinishingPost') {
        console.warn(`[Breadcrumb] Tidak boleh menghapus container utama: ${conditionId}`);
        return;
    }
    
    const conditionElement = document.getElementById(conditionId);
    if (conditionElement) {
        // Simpan elemen yang dihapus
        removedElementsJasaKonsFinishingPost[conditionId] = conditionElement;
        conditionElement.remove();
        console.log(`[Breadcrumb] Removed: ${conditionId}`);
    }
}

// Fungsi untuk mengembalikan elemen yang telah dihapus
function restoreCondition(conditionId) {
    const elementToRestore = removedElementsJasaKonsFinishingPost[conditionId];
    
    if (elementToRestore) {
        // Cari container untuk menambahkan kembali
        const container = document.getElementById('JasaKonsFinishingPost');
        if (container) {
            container.appendChild(elementToRestore);
            delete removedElementsJasaKonsFinishingPost[conditionId];
            console.log(`[Breadcrumb] Restored: ${conditionId}`);
        } else {
            console.error(`[Breadcrumb] Container not found for restore: ${conditionId}`);
        }
    } else {
        console.log(`[Breadcrumb] Element ${conditionId} not found in removedElements`);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    // var currentUrl = window.location.href;
     //const cleanUrl = currentUrl.split('?')[0]; // Menghapus parameter seperti ?m=1
    const cleanUrlJasaKonsFinishingPost = window.location.href.split(/[?#]/)[0]; // Menghilangkan parameter seperti ?m=1

   const urlMappingGabungan = Object.assign(
    {},
    urlMappingJasaFinishingDakBeton,
    urlMappingJasaFinishingBetonExpose,
    urlMappingJasaPlesteranAcianDinding,
    urlMappingJasaFinishingGroutingStrukturBeton,
    urlMappingJasaPelapisanCoatingStruktur,
    urlMappingJasaFinishingKolomBalok,
    urlMappingJasaPelapisanWaterproofingStruktur,
    urlMappingJasaFinishingLantaiBeton,
    urlMappingJasaEpoxyDinding,
    urlMappingJasaEpoxyLantai,
    urlMappingJasaPelindungRetakStruktur,
    urlMappingJasaInteriordanFurnitureCustome,
    urlMappingJasaKeramikLantai,
    urlMappingJasaCatInteriorRumah,
    urlMappingJasaPasangWallpaperDinding,
    urlMappingJasaLampuInterior,
    urlMappingJasaFinishingInteriorKlasik,
    urlMappingJasaFinishingInteriorMinimalis,
    urlMappingJasaInteriorFurnitureCustome,
    urlMappingJasaFinishingInteriorModern,
    urlMappingJasaFinishingInteriorModernWpc,
    urlMappingJasaFinishingInteriorModernVinyl,
    urlMappingJasaFinishingInteriorModernPvc,
    urlMappingJasaFinishingInteriorModernPlafon,
    urlMappingJasaKitchenSet,
    urlMappingJasaCatEksteriorRumah,
    urlMappingJasaFinishingFasadEksterior,
    urlMappingJasaPelapisanAntiCuaca,
    urlMappingJasaPelapisanDindingLuar,
    urlMappingJasaFinishingTamanRumahFromJasaFinishingEksteriorSub2MoneyPage,
    urlMappingJasaFinishingKanopiTeras,
    urlMappingJasaPelapisanBatuAlamEksterior,
    urlMappingJasaPelapisanGentengDak
);

// --- validasi URL terdaftar ---
if (!urlMappingGabungan[cleanUrlJasaKonsFinishingPost]) {
    console.log(`[HybridDateModified] URL tidak terdaftar: ${cleanUrlJasaKonsFinishingPost}`);
    return;
}
		/* ==========================================================
   🧩 HybridDateModified v2.5 — StableHash + Safe Load Order
   Fitur:
   - Menjamin detect-evergreen.js dimuat lebih dulu
   - Update <meta dateModified> hanya jika URL terdaftar
   - Stable hash → hasil dateModified konsisten
   ========================================================== */	
	
	/* ============================================================
 🔥 Hybrid Date Modified v7.0 — UNTUK betonjayareadymix.com
    Custom date berdasarkan hasil deteksi page level
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
      // GANTI URL INI DENGAN URL TEMPAT ANDA MENYIMPAN SCRIPT
      const PAGE_LEVEL_DETECTOR_URL = "https://raw.githack.com/aliyul/solution-blogger/main/PageLevelDetector.js";
      const EVERGREEN_DETECTOR_URL = "https://raw.githack.com/aliyul/solution-blogger/main/SmartEvergreenDetector.js";
      
      if (typeof window.pageLevelDetector === "undefined") {
        console.log("⏳ Loading Page Level Detector v14.0...");
        await loadExternalJS(PAGE_LEVEL_DETECTOR_URL);
        await waitForPageLevelDetector();
        console.log("✅ Page Level Detector v13.0 READY");
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
    // 📌 DAFTAR EVERGREEN LEVELS
    // ============================================================
    const EVERGREEN_LEVELS = ['pillar', 'sub-pillar-tipe-2', 'sub-pillar-tipe-1', 'variant', 'sub-variant'];
    const MONEY_LEVELS = ['money-master', 'money-page', 'money-child'];

    // ============================================================
    // 📌 FUNGSI MENENTUKAN CUSTOM DATE BERDASARKAN PAGE LEVEL
    // ============================================================
    function getCustomDateByPageLevel(pageLevel, entityType) {
      // EVERGREEN: Pillar, Sub-Pillar, Variant, Sub-Variant
      if (EVERGREEN_LEVELS.includes(pageLevel)) {
        // Pillar (level tertinggi) pakai tanggal 2024-01-16
        if (pageLevel === 'pillar') {
          return "2026-04-01T10:30:00+07:00";
        }
        // Sub-Pillar, Variant, Sub-Variant pakai tanggal 2024-06-01
        return "2026-04-02T00:00:00+07:00";
      }
      
      // MONEY PAGE: biarkan AUTO (return null)
      if (MONEY_LEVELS.includes(pageLevel)) {
        return null; // AUTO mode
      }
      
      // Default: AUTO mode
      return null;
    }

    // ============================================================
    // 📌 EKSEKUSI UTAMA
    // ============================================================
    
    await loadAllScripts();
    
    // ============================================================
    // 🔥 STEP 1: DETEKSI PAGE LEVEL (TANPA CUSTOM DATE DAHULU)
    // ============================================================
    // Kita perlu deteksi page level terlebih dahulu untuk menentukan custom date
    // Tapi detectEvergreen() butuh pageLevelDetector yang sudah ready
    // PageLevelDetector sudah otomatis jalan saat load, kita bisa langsung akses
    
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
    var JasaKonsFinishingPostLink = document.getElementById("JasaKonsFinishingPost");
    if (!JasaKonsFinishingPostLink) {
        console.log("elemen Id JasaKonsFinishingPost kondisi terhapus");
        return;
    }
   /* ga perlu varible2 ini semua karna semua manipulasi breadcrumb menggunakan removeCondition() dan restoreCondition() secara konsisten.
    var JasaKonstruksiFinishingPostLink = document.getElementById("JasaKonstruksiFinishingPost");
     var JasaFinishingPostLink = document.getElementById("JasaFinishingPost");
     var JasaFinishingBangunanPostLink = document.getElementById("JasaFinishingBangunanPost");
     var JasaFinishingInfrastrukturPostLink = document.getElementById("JasaFinishingInfrastrukturPost");
    //sub finishing bangunan
	
    var JasaFinishingInteriorPostLink = document.getElementById("JasaFinishingBangunanInteriorPost");
    var JasaFinishingBangunanEksteriorPostLink = document.getElementById("JasaFinishingBangunanEksteriorPost");
    var JasaFinishingStrukturPostLink = document.getElementById("JasaFinishingBangunanStrukturPost");
	
   //SUB JasaFinishingBangunanInteriorPosT
   //var JasaBoronganLantaiPostLink = document.getElementById("JasaBoronganLantaiPost");
   var JasaEpoxyDindingPostLink = document.getElementById("JasaEpoxyDindingPost");
   var JasaEpoxyLantaiPostLink = document.getElementById("JasaEpoxyLantaiPost");
   var JasaFinishingDakBetonPostLink = document.getElementById("JasaFinishingDakBetonPost");
   var JasaInteriorFurnitureCustomePostLink = document.getElementById("JasaInteriorFurnitureCustomePost");
   var JasaGantiKeramikLantaiPostLink = document.getElementById("JasaGantiKeramikLantaiPost");
   var JasaCatInteriorRumahPostLink = document.getElementById("JasaCatInteriorRumahPost");
   var JasaPasangWallpaperDindingPostLink = document.getElementById("JasaPasangWallpaperDindingPost");
   //var JasaPasangLantaiVinylPostLink = document.getElementById("JasaPasangLantaiVinylPost");
   //var JasaPasangPlafonGypsumPostLink = document.getElementById("JasaPasangPlafonGypsumPost");
   var JasaGantiLampuInteriorPostLink = document.getElementById("JasaGantiLampuInteriorPost");
   var JasaGantiKitchenSetPostLink = document.getElementById("JasaGantiKitchenSetPost");
   var JasaFinishingInteriorMinimalisPostLink = document.getElementById("JasaFinishingInteriorMinimalisPost");
   var JasaFinishingInteriorKlasikPostLink = document.getElementById("JasaFinishingInteriorKlasikPost");
   var JasaFinishingInteriorModernPostLink = document.getElementById("JasaFinishingInteriorModernPost");
	   	var JasaFinishingInteriorModernWpcPostLink = document.getElementById("JasaFinishingInteriorModernWpcPost");
		var JasaFinishingInteriorModernVinylPostLink = document.getElementById("JasaFinishingInteriorModernVinylPost");
		var JasaFinishingInteriorModernPlafonPostLink = document.getElementById("JasaFinishingInteriorModernPlafonPost");
		var JasaFinishingInteriorModernPvcPostLink = document.getElementById("JasaFinishingInteriorModernPvcPost");
   //SUB JasaFinishingBangunanStrukturPost
   var JasaFinishingBetonExposePostLink = document.getElementById("JasaFinishingBetonExposePost");
   var JasaPlesteranAcianDindingPostLink = document.getElementById("JasaPlesteranAcianDindingPost");
   var JasaFinishingGroutingStrukturBetonPostLink = document.getElementById("JasaFinishingGroutingStrukturBetonPost");
   var JasaPelapisanCoatingStrukturPostLink = document.getElementById("JasaPelapisanCoatingStrukturPost");
   var JasaFinishingKolomdanBalokPostLink = document.getElementById("JasaFinishingKolomdanBalokPost");
   var JasaPelapisanWaterproofingStrukturPostLink = document.getElementById("JasaPelapisanWaterproofingStrukturPost");
   var JasaFinishingLantaiBetonPostLink = document.getElementById("JasaFinishingLantaiBetonPost");
   var JasaPelindungRetakStrukturPostLink = document.getElementById("JasaPelindungRetakStrukturPost");
   //SUB JasaFinishingBangunanEksteriorPost
   var JasaCatEksteriorRumahPostLink = document.getElementById("JasaCatEksteriorRumahPost");
   var JasaFinishingFasadEksteriorPostLink = document.getElementById("JasaFinishingFasadEksteriorPost");
   var JasaPelapisanAntiCuacaPostLink = document.getElementById("JasaPelapisanAntiCuacaPost");
   var JasaPelapisanDindingLuarPostLink = document.getElementById("JasaPelapisanDindingLuarPost");
   var JasaFinishingTamanRumahPostLink = document.getElementById("JasaFinishingTamanRumahPost");
   var JasaPelapisanBatuAlamEksteriorPostLink = document.getElementById("JasaPelapisanBatuAlamEksteriorPost");
   var JasaPelapisanGentengDakPostLink = document.getElementById("JasaPelapisanGentengDakPost");
	
    //sub finishing infrastruktur
    var JasaFinishingJalanPostLink = document.getElementById("JasaFinishingInfrastrukturJalanPost");
    var JasaFinishingTrotoarPostLink = document.getElementById("JasaFinishingInfrastrukturTrotoarPost");
    var JasaFinishingSaluranPostLink = document.getElementById("JasaFinishingInfrastrukturSaluranPost");
    var JasaFinishingStrukturPostLink = document.getElementById("JasaFinishingInfrastrukturStrukturPost");
    var JasaFinishingProteksiPostLink = document.getElementById("JasaFinishingInfrastrukturProteksiPost");

   //HIDE sub JasaFinishingBangunanInteriorPost
	//JasaBoronganLantaiPostLink.style.visibility = 'hidden';
	JasaEpoxyDindingPostLink.style.visibility = 'hidden';
	JasaEpoxyLantaiPostLink.style.visibility = 'hidden';
    JasaInteriorFurnitureCustomePostLink.style.visibility = 'hidden';
    JasaGantiKeramikLantaiPostLink.style.visibility = 'hidden';
    JasaCatInteriorRumahPostLink.style.visibility = 'hidden';
    JasaPasangWallpaperDindingPostLink.style.visibility = 'hidden';
   // JasaPasangLantaiVinylPostLink.style.visibility = 'hidden';
    //JasaPasangPlafonGypsumPostLink.style.visibility = 'hidden';
    JasaGantiLampuInteriorPostLink.style.visibility = 'hidden';
    JasaGantiKitchenSetPostLink.style.visibility = 'hidden';
    JasaFinishingInteriorMinimalisPostLink.style.visibility = 'hidden';
    JasaFinishingInteriorKlasikPostLink.style.visibility = 'hidden';
    JasaFinishingInteriorModernPostLink.style.visibility = 'hidden';
   		JasaFinishingInteriorModernWpcPostLink.style.visibility = 'hidden';
		JasaFinishingInteriorModernVinylPostLink.style.visibility = 'hidden';
		JasaFinishingInteriorModernPlafonPostLink.style.visibility = 'hidden';
		JasaFinishingInteriorModernPvcPostLink.style.visibility = 'hidden';
	
     //HIDE sub JasaFinishingBangunanStrukturPost
    JasaPlesteranAcianDindingPostLink.style.visibility = 'hidden';
    JasaFinishingBetonExposePostLink.style.visibility = 'hidden';
    JasaFinishingGroutingStrukturBetonPostLink.style.visibility = 'hidden';
    JasaPelapisanCoatingStrukturPostLink.style.visibility = 'hidden';
    JasaFinishingKolomdanBalokPostLink.style.visibility = 'hidden';
    JasaPelapisanWaterproofingStrukturPostLink.style.visibility = 'hidden';
    JasaFinishingLantaiBetonPostLink.style.visibility = 'hidden';
    JasaPelindungRetakStrukturPostLink.style.visibility = 'hidden';

    //HIDE sub JasaFinishingBangunanEksteriorPost
    JasaCatEksteriorRumahPostLink.style.visibility = 'hidden';
    JasaFinishingFasadEksteriorPostLink.style.visibility = 'hidden';
    JasaPelapisanAntiCuacaPostLink.style.visibility = 'hidden';
    JasaPelapisanDindingLuarPostLink.style.visibility = 'hidden';
    JasaFinishingTamanRumahPostLink.style.visibility = 'hidden';
    JasaPelapisanBatuAlamEksteriorPostLink.style.visibility = 'hidden';
    JasaPelapisanGentengDakPostLink.style.visibility = 'hidden';
   
    var pageNameJasaKonsFinishingPostLink = document.getElementById("pageNameJasaKonsFinishingPost");
	
     // Default untuk menyembunyikan elemen
     JasaKonsFinishingPostLink.style.visibility = 'hidden';
     JasaFinishingPostLink.style.visibility = 'hidden';
     JasaFinishingBangunanPostLink.style.visibility = 'hidden';
     JasaFinishingInfrastrukturPostLink.style.visibility = 'hidden';
     pageNameJasaKonsFinishingPostLink.textContent = "";
     */
	
    //SUB FINISHING BANGUNAN
	//FINISHING STRUKTUR
// ============================================================
// MONEY PAGE: Harga Finishing Dak Beton
// ============================================================

if (urlMappingJasaFinishingDakBeton[cleanUrlJasaKonsFinishingPost]) {
    
    console.log('[Breadcrumb] Money page detected - Harga Finishing Dak Beton');
    
    // ============================================================
    // 1. SEMBUNYIKAN ELEMEN YANG TIDAK DIPERLUKAN (REMOVE)
    // ============================================================
    
    // HIDE PILLAR & GRANDPARENT (jangan hapus container!)
    removeCondition('JasaKonstruksiFinishingPost');                    // PILLAR (Jasa Konstruksi)
    removeCondition('JasaFinishingBangunanPost');             // Jasa Finishing Bangunan
    removeCondition('JasaFinishingBangunanStrukturPost');     // Jasa Finishing Struktur
    
    // HIDE SEMUA SUB FINISHING INTERIOR
    removeCondition('JasaFinishingBangunanInteriorPost');
    removeCondition('JasaEpoxyDindingPost');
    removeCondition('JasaEpoxyLantaiPost');
    removeCondition('JasaInteriorFurnitureCustomePost');
    removeCondition('JasaGantiKeramikLantaiPost');
    removeCondition('JasaCatInteriorRumahPost');
    removeCondition('JasaPasangWallpaperDindingPost');
    removeCondition('JasaGantiLampuInteriorPost');
    removeCondition('JasaGantiKitchenSetPost');
    removeCondition('JasaFinishingInteriorMinimalisPost');
    removeCondition('JasaFinishingInteriorKlasikPost');
    removeCondition('JasaFinishingInteriorModernPost');
    removeCondition('JasaFinishingInteriorModernWpcPost');
    removeCondition('JasaFinishingInteriorModernVinylPost');
    removeCondition('JasaFinishingInteriorModernPlafonPost');
    removeCondition('JasaFinishingInteriorModernPvcPost');
    
    // HIDE SEMUA SUB FINISHING EKSTERIOR
    removeCondition('JasaFinishingBangunanEksteriorPost');
    removeCondition('JasaCatEksteriorRumahPost');
    removeCondition('JasaFinishingFasadEksteriorPost');
    removeCondition('JasaPelapisanAntiCuacaPost');
    removeCondition('JasaPelapisanDindingLuarPost');
    removeCondition('JasaFinishingTamanRumahPost');
    removeCondition('JasaPelapisanBatuAlamEksteriorPost');
    removeCondition('JasaPelapisanGentengDakPost');
    
    // HIDE SEMUA SUB FINISHING STRUKTUR LAINNYA
    removeCondition('JasaFinishingBetonExposePost');
    removeCondition('JasaFinishingLantaiBetonPost');
    removeCondition('JasaPlesteranAcianDindingPost');
    removeCondition('JasaFinishingGroutingStrukturBetonPost');
    removeCondition('JasaPelapisanCoatingStrukturPost');
    removeCondition('JasaFinishingKolomdanBalokPost');
    removeCondition('JasaPelapisanWaterproofingStrukturPost');
    removeCondition('JasaPelindungRetakStrukturPost');
    
    // HIDE FINISHING INFRASTRUKTUR (semua)
    removeCondition('JasaFinishingInfrastrukturPost');
    removeCondition('JasaFinishingInfrastrukturJalanPost');
    removeCondition('JasaFinishingInfrastrukturTrotoarPost');
    removeCondition('JasaFinishingInfrastrukturSaluranPost');
    removeCondition('JasaFinishingInfrastrukturStrukturPost');
    removeCondition('JasaFinishingInfrastrukturProteksiPost');
    
    // HIDE CLUSTER LAIN (Jasa Konstruksi lainnya)
    removeCondition('JasaDesInPost');
    removeCondition('ProdukInFurPost');
    removeCondition('ProdukKonsSaluranPost');
    removeCondition('ProdukKonsPembatasPost');
    removeCondition('ProdukKonsDindingModularPost');
    removeCondition('ProdukKonsPost');
    removeCondition('MaterialKonsStukturPost');
    removeCondition('MaterialKonsFasadPelapisEksteriorPost');
    removeCondition('MaterialKonsAtapPenutupPost');
    removeCondition('JasaKonsPerkuatanTanahLongsorPost');
    removeCondition('JasaKonsPondasiTanahPost');
    removeCondition('JasaKonsPembatasPost');
    removeCondition('JasaKonsPerbaikanPost');
    removeCondition('JasaKonsCuttingBetonPost');
    removeCondition('JasaKonsPengeboranPost');
    removeCondition('JasaKonsBongkarBangunanPost');
    removeCondition('JasaKonsStrukturPost');
    removeCondition('JasaKonsAlatKonstruksiPost');
    removeCondition('JasaKonsJalanPerkerasanPost');
    
    // ============================================================
    // 2. TAMPILKAN ELEMEN YANG DIPERLUKAN (RESTORE JIKA PERLU)
    // ============================================================
    
    // Pastikan container utama visible
    const container = document.getElementById('JasaKonsFinishingPost');
    if (container) {
        container.style.display = 'inline';
        container.style.visibility = 'visible';
    }
    
    // Tampilkan Jasa Finishing (level 2)
    let jasaFinishing = document.getElementById('JasaFinishingPost');
    if (jasaFinishing) {
        jasaFinishing.style.display = 'inline';
        jasaFinishing.style.visibility = 'visible';
    } else {
        // Jika sudah di-remove, restore
        restoreCondition('JasaFinishingPost');
    }
    
    // Tampilkan Jasa Finishing Dak Beton (parent terdekat)
    let jasaFinishingDakBeton = document.getElementById('JasaFinishingDakBetonPost');
    if (jasaFinishingDakBeton) {
        jasaFinishingDakBeton.style.display = 'inline';
        jasaFinishingDakBeton.style.visibility = 'visible';
    } else {
        restoreCondition('JasaFinishingDakBetonPost');
    }
    
    // Update page name
    const pageNameElement = document.getElementById("pageNameJasaKonsFinishingPost");
    if (pageNameElement) {
        pageNameElement.textContent = urlMappingJasaFinishingDakBeton[cleanUrlJasaKonsFinishingPost];
        pageNameElement.style.display = 'inline';
    }
}
    // ============================================================
    // 4. GENERATE BREADCRUMB SCHEMA (3 level)
    // ============================================================
// ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaFinishingDakBeton[cleanUrlJasaKonsFinishingPost]) {
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
			   /*skip level pillar buat money
               {
                   "@type": "ListItem",
                   "position": 2,
                   "name": "Jasa Konstruksi",
                   "item": "https://www.betonjayareadymix.com/p/jasa-konstruksi.html"
               },
			   */
               {
                   "@type": "ListItem",
                   "position": 2,
                   "name": "Jasa Finishing",
                   "item": "https://www.betonjayareadymix.com/p/jasa-finishing.html"
               },
			   /*skip level
               {
                   "@type": "ListItem",
                   "position": 4,
                   "name": "Jasa Finishing Bangunan",
                   "item": "https://www.betonjayareadymix.com/p/jasa-finishing-bangunan.html"
               },
               {
                   "@type": "ListItem",
                   "position": 5,
                   "name": "Jasa Finishing Struktur",
                   "item": "https://www.betonjayareadymix.com/p/jasa-finishing-struktur.html"
               },
			   */
               {
                   "@type": "ListItem",
                   "position": 3,
                   "name": "Jasa Finishing Dak Beton",
                   "item": "https://www.betonjayareadymix.com/p/jasa-finishing-dak-beton.html"
               },
               {
                   "@type": "ListItem",
                   "position": 4,
                   "name": urlMappingJasaFinishingDakBeton[cleanUrlJasaKonsFinishingPost],
                   "item": cleanUrlJasaKonsFinishingPost
               }
           ]
       };
   		const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   console.log('[Breadcrumb] Money page - 4 level breadcrumb applied');
    console.log('[Breadcrumb] Final structure: Home > Jasa Finishing > Jasa Finishing Dak Beton > Harga');
   }
	
    if (urlMappingJasaFinishingBetonExpose[cleanUrlJasaKonsFinishingPost]) {

		  // HIDE PILLAR & GRANDPARENT (jangan hapus container!)
    removeCondition('JasaKonstruksiFinishingPost');                    // PILLAR (Jasa Konstruksi)
    removeCondition('JasaFinishingBangunanPost');             // Jasa Finishing Bangunan
    removeCondition('JasaFinishingBangunanStrukturPost');     // Jasa Finishing Struktur
       
	// hapus elemen id DIV Lain SELAIN JasaKonsFinishingPost
	removeCondition('JasaDesInPost');
        removeCondition('ProdukInFurPost');
        removeCondition('ProdukKonsSaluranPost');
        removeCondition('ProdukKonsPembatasPost');
        removeCondition('ProdukKonsDindingModularPost');
        removeCondition('ProdukKonsPost');
        removeCondition('MaterialKonsStukturPost');
        removeCondition('MaterialKonsFasadPelapisEksteriorPost');
	removeCondition('MaterialKonsAtapPenutupPost');
        removeCondition('JasaKonsPerkuatanTanahLongsorPost');
        removeCondition('JasaKonsPondasiTanahPost');
        removeCondition('JasaKonsPembatasPost');
        removeCondition('JasaKonsPerbaikanPost');
        removeCondition('JasaKonsCuttingBetonPost');
        removeCondition('JasaKonsPengeboranPost');
        removeCondition('JasaKonsBongkarBangunanPost');
        removeCondition('JasaKonsStrukturPost');
        removeCondition('JasaKonsAlatKonstruksiPost');
        removeCondition('JasaKonsJalanPerkerasanPost');
     //   removeCondition('JasaKonsFinishingPost');

	 // hapus elemen id FINISHING STRUKTUR lain NYA SELAIN JasaFinishingBetonExposePost
	removeCondition('JasaFinishingDakBetonPost');
        removeCondition('JasaFinishingLantaiBetonPost');
        //removeCondition('JasaPlesteranAcianDindingPost');
        removeCondition('JasaFinishingGroutingStrukturBetonPost');
        removeCondition('JasaPelapisanCoatingStrukturPost');
        removeCondition('JasaFinishingKolomdanBalokPost');
        removeCondition('JasaPelapisanWaterproofingStrukturPost');
        removeCondition('JasaPlesteranAcianDindingPost');
        removeCondition('JasaPelindungRetakStrukturPost');
         // hapus elemen id sub JasaFinishingBangunanInteriorPost Semua
		
		removeCondition('JasaEpoxyDindingPost');
		removeCondition('JasaEpoxyLantaiPost');
        removeCondition('JasaInteriorFurnitureCustomePost');
        removeCondition('JasaGantiKeramikLantaiPost');
        removeCondition('JasaCatInteriorRumahPost');
        removeCondition('JasaPasangWallpaperDindingPost');
        //removeCondition('JasaPasangLantaiVinylPost');
        //removeCondition('JasaPasangPlafonGypsumPost');
        removeCondition('JasaGantiLampuInteriorPost');
        removeCondition('JasaGantiKitchenSetPost');
        removeCondition('JasaFinishingInteriorMinimalisPost');
        removeCondition('JasaFinishingInteriorKlasikPost');
        removeCondition('JasaFinishingInteriorModernPost');
         // hapus elemen id sub JasaFinishingBangunanEksteriorPost Semua
        removeCondition('JasaCatEksteriorRumahPost');
        removeCondition('JasaFinishingFasadEksteriorPost');
        removeCondition('JasaPelapisanAntiCuacaPost');
        removeCondition('JasaPelapisanDindingLuarPost');
        removeCondition('JasaFinishingTamanRumahPost');
        removeCondition('JasaPelapisanBatuAlamEksteriorPost');
        removeCondition('JasaPelapisanGentengDakPost');
      
         // hapus elemen id FINISHING UTAMA lain NYA
        removeCondition('JasaFinishingBangunanEksteriorPost');
        removeCondition('JasaFinishingBangunanInteriorPost');

          // hapus elemen id Infrastruktur Semua
        removeCondition('JasaFinishingInfrastrukturPost');
        removeCondition('JasaFinishingInfrastrukturJalanPost');
        removeCondition('JasaFinishingInfrastrukturTrotoarPost');
        removeCondition('JasaFinishingInfrastrukturSaluranPost');
        removeCondition('JasaFinishingInfrastrukturStrukturPost');
        removeCondition('JasaFinishingInfrastrukturProteksiPost');

		// hapus SEMUA SUB JASA FINSING INTERIOR MODERN 
	   removeCondition('JasaFinishingInteriorModernWpcPost');
	   removeCondition('JasaFinishingInteriorModernVinylPost');
	   removeCondition('JasaFinishingInteriorModernPlafonPost');
	   removeCondition('JasaFinishingInteriorModernPvcPost');

		  // ============================================================
    // 2. TAMPILKAN ELEMEN YANG DIPERLUKAN (RESTORE JIKA PERLU)
    // ============================================================
    
    // Pastikan container utama visible
    const container = document.getElementById('JasaKonsFinishingPost');
    if (container) {
        container.style.display = 'inline';
        container.style.visibility = 'visible';
    }
    
    // Tampilkan Jasa Finishing (level 2)
    let jasaFinishing = document.getElementById('JasaFinishingPost');
    if (jasaFinishing) {
        jasaFinishing.style.display = 'inline';
        jasaFinishing.style.visibility = 'visible';
    } else {
        // Jika sudah di-remove, restore
        restoreCondition('JasaFinishingPost');
    }
    
    // Tampilkan Jasa Finishing Dak Beton (parent terdekat)
    let jasaFinishingBetonExpose = document.getElementById('JasaFinishingBetonExposePost');
    if (jasaFinishingBetonExpose) {
        jasaFinishingBetonExpose.style.display = 'inline';
        jasaFinishingBetonExpose.style.visibility = 'visible';
    } else {
        restoreCondition('JasaFinishingBetonExposePost');
    }
    
    // Update page name
    const pageNameElement = document.getElementById("pageNameJasaKonsFinishingPost");
    if (pageNameElement) {
        pageNameElement.textContent = urlMappingJasaFinishingBetonExpose[cleanUrlJasaKonsFinishingPost];
        pageNameElement.style.display = 'inline';
    }
	
		/*cara lama buat money page ga bisa
        JasaKonsFinishingPostLink.style.visibility = 'visible';
        JasaFinishingPostLink.style.visibility = 'visible';
        //JasaFinishingBangunanPostLink.style.visibility = 'visible';
        //sub finishing bangunan
        //JasaFinishingStrukturPostLink.style.visibility = 'visible';
        //sub finishing STRUKKTUR
        JasaFinishingBetonExposePostLink.style.visibility = 'visible';
        pageNameJasaKonsFinishingPostLink.textContent = urlMappingJasaFinishingBetonExpose[cleanUrlJasaKonsFinishingPost];
		*/
    }

// ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaFinishingBetonExpose[cleanUrlJasaKonsFinishingPost]) {
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
			   /*
               {
                   "@type": "ListItem",
                   "position": 2,
                   "name": "Jasa Konstruksi",
                   "item": "https://www.betonjayareadymix.com/p/jasa-konstruksi.html"
               },
			   */
               {
                   "@type": "ListItem",
                   "position": 2,
                   "name": "Jasa Finishing",
                   "item": "https://www.betonjayareadymix.com/p/jasa-finishing.html"
               },
			   /*skip level
               {
                   "@type": "ListItem",
                   "position": 4,
                   "name": "Jasa Finishing Bangunan",
                   "item": "https://www.betonjayareadymix.com/p/jasa-finishing-bangunan.html"
               },
               {
                   "@type": "ListItem",
                   "position": 5,
                   "name": "Jasa Finishing Struktur",
                   "item": "https://www.betonjayareadymix.com/p/jasa-finishing-struktur.html"
               },
			   */
               {
                   "@type": "ListItem",
                   "position": 3,
                   "name": "Jasa Finishing Beton Expose",
                   "item": "https://www.betonjayareadymix.com/p/jasa-finishing-beton-expose.html"
               },
               {
                   "@type": "ListItem",
                   "position": 4,
                   "name": urlMappingJasaFinishingBetonExpose[cleanUrlJasaKonsFinishingPost],
                   "item": cleanUrlJasaKonsFinishingPost
               }
           ]
       };
       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
  if (urlMappingJasaFinishingLantaiBeton[cleanUrlJasaKonsFinishingPost]) {
          // ============================================================
    // 1. SEMBUNYIKAN ELEMEN YANG TIDAK DIPERLUKAN (REMOVE)
    // ============================================================
    
    // HIDE PILLAR & GRANDPARENT (jangan hapus container!)
    removeCondition('JasaKonstruksiFinishingPost');                    // PILLAR (Jasa Konstruksi)
    removeCondition('JasaFinishingBangunanPost');             // Jasa Finishing Bangunan
    removeCondition('JasaFinishingBangunanStrukturPost');     // Jasa Finishing Struktur
           
	// hapus elemen id DIV Lain SELAIN JasaKonsFinishingPost
	removeCondition('JasaDesInPost');
        removeCondition('ProdukInFurPost');
        removeCondition('ProdukKonsSaluranPost');
        removeCondition('ProdukKonsPembatasPost');
        removeCondition('ProdukKonsDindingModularPost');
        removeCondition('ProdukKonsPost');
        removeCondition('MaterialKonsStukturPost');
        removeCondition('MaterialKonsFasadPelapisEksteriorPost');
	removeCondition('MaterialKonsAtapPenutupPost');
        removeCondition('JasaKonsPerkuatanTanahLongsorPost');
        removeCondition('JasaKonsPondasiTanahPost');
        removeCondition('JasaKonsPembatasPost');
        removeCondition('JasaKonsPerbaikanPost');
        removeCondition('JasaKonsCuttingBetonPost');
        removeCondition('JasaKonsPengeboranPost');
        removeCondition('JasaKonsBongkarBangunanPost');
        removeCondition('JasaKonsStrukturPost');
        removeCondition('JasaKonsAlatKonstruksiPost');
        removeCondition('JasaKonsJalanPerkerasanPost');
     //   removeCondition('JasaKonsFinishingPost');

	 // hapus elemen id FINISHING STRUKTUR lain NYA SELAIN JasaPlesteranAcianDindingPost
	removeCondition('JasaFinishingDakBetonPost');
        removeCondition('JasaFinishingBetonExposePost');
        //removeCondition('JasaPlesteranAcianDindingPost');
        removeCondition('JasaFinishingGroutingStrukturBetonPost');
        removeCondition('JasaPelapisanCoatingStrukturPost');
        removeCondition('JasaFinishingKolomdanBalokPost');
        removeCondition('JasaPelapisanWaterproofingStrukturPost');
        removeCondition('JasaPlesteranAcianDindingPost');
        removeCondition('JasaPelindungRetakStrukturPost');
         // hapus elemen id sub JasaFinishingBangunanInteriorPost Semua
	  
	   removeCondition('JasaEpoxyDindingPost');
	  removeCondition('JasaEpoxyLantaiPost');
        removeCondition('JasaInteriorFurnitureCustomePost');
        removeCondition('JasaGantiKeramikLantaiPost');
        removeCondition('JasaCatInteriorRumahPost');
        removeCondition('JasaPasangWallpaperDindingPost');
        //removeCondition('JasaPasangLantaiVinylPost');
        //removeCondition('JasaPasangPlafonGypsumPost');
        removeCondition('JasaGantiLampuInteriorPost');
        removeCondition('JasaGantiKitchenSetPost');
        removeCondition('JasaFinishingInteriorMinimalisPost');
        removeCondition('JasaFinishingInteriorKlasikPost');
        removeCondition('JasaFinishingInteriorModernPost');
         // hapus elemen id sub JasaFinishingBangunanEksteriorPost Semua
        removeCondition('JasaCatEksteriorRumahPost');
        removeCondition('JasaFinishingFasadEksteriorPost');
        removeCondition('JasaPelapisanAntiCuacaPost');
        removeCondition('JasaPelapisanDindingLuarPost');
        removeCondition('JasaFinishingTamanRumahPost');
        removeCondition('JasaPelapisanBatuAlamEksteriorPost');
        removeCondition('JasaPelapisanGentengDakPost');
      
         // hapus elemen id FINISHING UTAMA lain NYA
        removeCondition('JasaFinishingBangunanEksteriorPost');
        removeCondition('JasaFinishingBangunanInteriorPost');

          // hapus elemen id Infrastruktur Semua
        removeCondition('JasaFinishingInfrastrukturPost');
        removeCondition('JasaFinishingInfrastrukturJalanPost');
        removeCondition('JasaFinishingInfrastrukturTrotoarPost');
        removeCondition('JasaFinishingInfrastrukturSaluranPost');
        removeCondition('JasaFinishingInfrastrukturStrukturPost');
        removeCondition('JasaFinishingInfrastrukturProteksiPost');

	  // hapus SEMUA SUB JASA FINSING INTERIOR MODERN 
	   removeCondition('JasaFinishingInteriorModernWpcPost');
	   removeCondition('JasaFinishingInteriorModernVinylPost');
	   removeCondition('JasaFinishingInteriorModernPlafonPost');
	   removeCondition('JasaFinishingInteriorModernPvcPost');

	  
	  /*
        JasaKonsFinishingPostLink.style.visibility = 'visible';
        JasaFinishingPostLink.style.visibility = 'visible';
        JasaFinishingBangunanPostLink.style.visibility = 'visible';
        //sub finishing bangunan
        JasaFinishingStrukturPostLink.style.visibility = 'visible';
        //sub finishing STRUKKTUR
        JasaFinishingLantaiBetonPostLink.style.visibility = 'visible';
        pageNameJasaKonsFinishingPostLink.textContent = urlMappingJasaFinishingLantaiBeton[cleanUrlJasaKonsFinishingPost];
		*/
	  // ============================================================
    // 2. TAMPILKAN ELEMEN YANG DIPERLUKAN (RESTORE JIKA PERLU)
    // ============================================================
    
    // Pastikan container utama visible
    const container = document.getElementById('JasaKonsFinishingPost');
    if (container) {
        container.style.display = 'inline';
        container.style.visibility = 'visible';
    }
    
    // Tampilkan Jasa Finishing (level 2)
    let jasaFinishing = document.getElementById('JasaFinishingPost');
    if (jasaFinishing) {
        jasaFinishing.style.display = 'inline';
        jasaFinishing.style.visibility = 'visible';
    } else {
        // Jika sudah di-remove, restore
        restoreCondition('JasaFinishingPost');
    }
    
    // Tampilkan JasaFinishingLantaiBeton (parent terdekat)
    let jasaFinishingLantaiBeton = document.getElementById('JasaFinishingLantaiBetonPost');
    if (jasaFinishingLantaiBeton) {
        jasaFinishingLantaiBeton.style.display = 'inline';
        jasaFinishingLantaiBeton.style.visibility = 'visible';
    } else {
        restoreCondition('JasaFinishingLantaiBetonPost');
    }
    
    // Update page name
    const pageNameElement = document.getElementById("pageNameJasaKonsFinishingPost");
    if (pageNameElement) {
        pageNameElement.textContent = urlMappingJasaFinishingLantaiBeton[cleanUrlJasaKonsFinishingPost];
        pageNameElement.style.display = 'inline';
    }
    }
// ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaFinishingLantaiBeton[cleanUrlJasaKonsFinishingPost]) {
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
			   /*
               {
                   "@type": "ListItem",
                   "position": 2,
                   "name": "Jasa Konstruksi",
                   "item": "https://www.betonjayareadymix.com/p/jasa-konstruksi.html"
               },
			   */
               {
                   "@type": "ListItem",
                   "position": 2,
                   "name": "Jasa Finishing",
                   "item": "https://www.betonjayareadymix.com/p/jasa-finishing.html"
               },
			   /*
               {
                   "@type": "ListItem",
                   "position": 4,
                   "name": "Jasa Finishing Bangunan",
                   "item": "https://www.betonjayareadymix.com/p/jasa-finishing-bangunan.html"
               },
               {
                   "@type": "ListItem",
                   "position": 5,
                   "name": "Jasa Finishing Struktur",
                   "item": "https://www.betonjayareadymix.com/p/jasa-finishing-struktur.html"
               },*/
               {
                   "@type": "ListItem",
                   "position": 3,
                   "name": "Jasa Finishing Lantai Beton",
                   "item": "https://www.betonjayareadymix.com/p/jasa-finishing-lantai-beton.html"
               },
               {
                   "@type": "ListItem",
                   "position": 4,
                   "name": urlMappingJasaFinishingLantaiBeton[cleanUrlJasaKonsFinishingPost],
                   "item": cleanUrlJasaKonsFinishingPost
               }
           ]
       };
       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
	
   if (urlMappingJasaPlesteranAcianDinding[cleanUrlJasaKonsFinishingPost]) {
          // ============================================================
    // 1. SEMBUNYIKAN ELEMEN YANG TIDAK DIPERLUKAN (REMOVE)
    // ============================================================
    
    // HIDE PILLAR & GRANDPARENT (jangan hapus container!)
    removeCondition('JasaKonstruksiFinishingPost');                    // PILLAR (Jasa Konstruksi)
    removeCondition('JasaFinishingBangunanPost');             // Jasa Finishing Bangunan
    removeCondition('JasaFinishingBangunanStrukturPost');     // Jasa Finishing Struktur

           
	// hapus elemen id DIV Lain SELAIN JasaKonsFinishingPost
	removeCondition('JasaDesInPost');
        removeCondition('ProdukInFurPost');
        removeCondition('ProdukKonsSaluranPost');
        removeCondition('ProdukKonsPembatasPost');
        removeCondition('ProdukKonsDindingModularPost');
        removeCondition('ProdukKonsPost');
        removeCondition('MaterialKonsStukturPost');
        removeCondition('MaterialKonsFasadPelapisEksteriorPost');
	removeCondition('MaterialKonsAtapPenutupPost');
        removeCondition('JasaKonsPerkuatanTanahLongsorPost');
        removeCondition('JasaKonsPondasiTanahPost');
        removeCondition('JasaKonsPembatasPost');
        removeCondition('JasaKonsPerbaikanPost');
        removeCondition('JasaKonsCuttingBetonPost');
        removeCondition('JasaKonsPengeboranPost');
        removeCondition('JasaKonsBongkarBangunanPost');
        removeCondition('JasaKonsStrukturPost');
        removeCondition('JasaKonsAlatKonstruksiPost');
        removeCondition('JasaKonsJalanPerkerasanPost');
     //   removeCondition('JasaKonsFinishingPost');

	 // hapus elemen id FINISHING STRUKTUR lain NYA SELAIN JasaPlesteranAcianDindingPost
	removeCondition('JasaFinishingDakBetonPost');
        removeCondition('JasaFinishingBetonExposePost');
        //removeCondition('JasaPlesteranAcianDindingPost');
        removeCondition('JasaFinishingGroutingStrukturBetonPost');
        removeCondition('JasaPelapisanCoatingStrukturPost');
        removeCondition('JasaFinishingKolomdanBalokPost');
        removeCondition('JasaPelapisanWaterproofingStrukturPost');
        removeCondition('JasaFinishingLantaiBetonPost');
        removeCondition('JasaPelindungRetakStrukturPost');
         // hapus elemen id sub JasaFinishingBangunanInteriorPost Semua
	   
	   removeCondition('JasaEpoxyDindingPost');
	   removeCondition('JasaEpoxyLantaiPost');
        removeCondition('JasaInteriorFurnitureCustomePost');
        removeCondition('JasaGantiKeramikLantaiPost');
        removeCondition('JasaCatInteriorRumahPost');
        removeCondition('JasaPasangWallpaperDindingPost');
        //removeCondition('JasaPasangLantaiVinylPost');
        //removeCondition('JasaPasangPlafonGypsumPost');
        removeCondition('JasaGantiLampuInteriorPost');
        removeCondition('JasaGantiKitchenSetPost');
        removeCondition('JasaFinishingInteriorMinimalisPost');
        removeCondition('JasaFinishingInteriorKlasikPost');
        removeCondition('JasaFinishingInteriorModernPost');
         // hapus elemen id sub JasaFinishingBangunanEksteriorPost Semua
        removeCondition('JasaCatEksteriorRumahPost');
        removeCondition('JasaFinishingFasadEksteriorPost');
        removeCondition('JasaPelapisanAntiCuacaPost');
        removeCondition('JasaPelapisanDindingLuarPost');
        removeCondition('JasaFinishingTamanRumahPost');
        removeCondition('JasaPelapisanBatuAlamEksteriorPost');
        removeCondition('JasaPelapisanGentengDakPost');
      
         // hapus elemen id FINISHING UTAMA lain NYA
        removeCondition('JasaFinishingBangunanEksteriorPost');
        removeCondition('JasaFinishingBangunanInteriorPost');

          // hapus elemen id Infrastruktur Semua
        removeCondition('JasaFinishingInfrastrukturPost');
        removeCondition('JasaFinishingInfrastrukturJalanPost');
        removeCondition('JasaFinishingInfrastrukturTrotoarPost');
        removeCondition('JasaFinishingInfrastrukturSaluranPost');
        removeCondition('JasaFinishingInfrastrukturStrukturPost');
        removeCondition('JasaFinishingInfrastrukturProteksiPost');

	   // hapus SEMUA SUB JASA FINSING INTERIOR MODERN 
	   removeCondition('JasaFinishingInteriorModernWpcPost');
	   removeCondition('JasaFinishingInteriorModernVinylPost');
	   removeCondition('JasaFinishingInteriorModernPlafonPost');
	   removeCondition('JasaFinishingInteriorModernPvcPost');

	   /*
        JasaKonsFinishingPostLink.style.visibility = 'visible';
        JasaFinishingPostLink.style.visibility = 'visible';
        JasaFinishingBangunanPostLink.style.visibility = 'visible';
        //sub finishing bangunan
        JasaFinishingStrukturPostLink.style.visibility = 'visible';
        //sub finishing STRUKKTUR
        JasaPlesteranAcianDindingPostLink.style.visibility = 'visible';
        pageNameJasaKonsFinishingPostLink.textContent = urlMappingJasaPlesteranAcianDinding[cleanUrlJasaKonsFinishingPost];
		*/
	   // ============================================================
    // 2. TAMPILKAN ELEMEN YANG DIPERLUKAN (RESTORE JIKA PERLU)
    // ============================================================
    
    // Pastikan container utama visible
    const container = document.getElementById('JasaKonsFinishingPost');
    if (container) {
        container.style.display = 'inline';
        container.style.visibility = 'visible';
    }
    
    // Tampilkan Jasa Finishing (level 2)
    let jasaFinishing = document.getElementById('JasaFinishingPost');
    if (jasaFinishing) {
        jasaFinishing.style.display = 'inline';
        jasaFinishing.style.visibility = 'visible';
    } else {
        // Jika sudah di-remove, restore
        restoreCondition('JasaFinishingPost');
    }
    
    // Tampilkan JasaPlesteranAcianDinding (parent terdekat)
    let jasaPlesteranAcianDinding = document.getElementById('JasaPlesteranAcianDindingPost');
    if (jasaPlesteranAcianDinding) {
        jasaPlesteranAcianDinding.style.display = 'inline';
        jasaPlesteranAcianDinding.style.visibility = 'visible';
    } else {
        restoreCondition('JasaPlesteranAcianDindingPost');
    }
    
    // Update page name
    const pageNameElement = document.getElementById("pageNameJasaKonsFinishingPost");
    if (pageNameElement) {
        pageNameElement.textContent = urlMappingJasaPlesteranAcianDinding[cleanUrlJasaKonsFinishingPost];
        pageNameElement.style.display = 'inline';
    }
}
  // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaPlesteranAcianDinding[cleanUrlJasaKonsFinishingPost]) {
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
			   /*
               {
                   "@type": "ListItem",
                   "position": 2,
                   "name": "Jasa Konstruksi",
                   "item": "https://www.betonjayareadymix.com/p/jasa-konstruksi.html"
               },*/
               {
                   "@type": "ListItem",
                   "position": 2,
                   "name": "Jasa Finishing",
                   "item": "https://www.betonjayareadymix.com/p/jasa-finishing.html"
               },
			   /*
               {
                   "@type": "ListItem",
                   "position": 4,
                   "name": "Jasa Finishing Bangunan",
                   "item": "https://www.betonjayareadymix.com/p/jasa-finishing-bangunan.html"
               },
               {
                   "@type": "ListItem",
                   "position": 5,
                   "name": "Jasa Finishing Struktur",
                   "item": "https://www.betonjayareadymix.com/p/jasa-finishing-struktur.html"
               },
			   */
               {
                   "@type": "ListItem",
                   "position": 3,
                   "name": "Jasa Plesteran Acian Dinding",
                   "item": "https://www.betonjayareadymix.com/p/jasa-plesteran-acian-dinding.html"
               },
               {
                   "@type": "ListItem",
                   "position": 4,
                   "name": urlMappingJasaPlesteranAcianDinding[cleanUrlJasaKonsFinishingPost],
                   "item": cleanUrlJasaKonsFinishingPost
               }
           ]
       };
       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
//AKHIR FINISHING STRUKTUR

//FINISHING INTERIOR
    if (urlMappingJasaEpoxyDinding[cleanUrlJasaKonsFinishingPost]) {
		  // ============================================================
    // 1. SEMBUNYIKAN ELEMEN YANG TIDAK DIPERLUKAN (REMOVE)
    // ============================================================
    
    // HIDE PILLAR & GRANDPARENT (jangan hapus container!)
    removeCondition('JasaKonstruksiFinishingPost');                    // PILLAR (Jasa Konstruksi)
    removeCondition('JasaFinishingBangunanPost');             // Jasa Finishing Bangunan
    removeCondition('JasaFinishingBangunanInteriorPost');     // JasaFinishingBangunanInterior
       
	// hapus elemen id DIV Lain SELAIN JasaKonsFinishingPost
	removeCondition('JasaDesInPost');
        removeCondition('ProdukInFurPost');
        removeCondition('ProdukKonsSaluranPost');
        removeCondition('ProdukKonsPembatasPost');
        removeCondition('ProdukKonsDindingModularPost');
        removeCondition('ProdukKonsPost');
        removeCondition('MaterialKonsStukturPost');
        removeCondition('MaterialKonsFasadPelapisEksteriorPost');
	removeCondition('MaterialKonsAtapPenutupPost');
        removeCondition('JasaKonsPerkuatanTanahLongsorPost');
        removeCondition('JasaKonsPondasiTanahPost');
        removeCondition('JasaKonsPembatasPost');
        removeCondition('JasaKonsPerbaikanPost');
        removeCondition('JasaKonsCuttingBetonPost');
        removeCondition('JasaKonsPengeboranPost');
        removeCondition('JasaKonsBongkarBangunanPost');
        removeCondition('JasaKonsStrukturPost');
        removeCondition('JasaKonsAlatKonstruksiPost');
        removeCondition('JasaKonsJalanPerkerasanPost');
     //   removeCondition('JasaKonsFinishingPost');

	 // hapus elemen id FINISHING STRUKTUR SEMUA NYA
	removeCondition('JasaFinishingDakBetonPost');
        removeCondition('JasaFinishingBetonExposePost');
        removeCondition('JasaPlesteranAcianDindingPost');
        removeCondition('JasaFinishingGroutingStrukturBetonPost');
        removeCondition('JasaPelapisanCoatingStrukturPost');
        removeCondition('JasaFinishingKolomdanBalokPost');
        removeCondition('JasaPelapisanWaterproofingStrukturPost');
        removeCondition('JasaFinishingLantaiBetonPost');
        removeCondition('JasaPelindungRetakStrukturPost'); 
	// hapus elemen id sub JasaFinishingBangunanEksteriorPost Semua
        removeCondition('JasaCatEksteriorRumahPost');
        removeCondition('JasaFinishingFasadEksteriorPost');
        removeCondition('JasaPelapisanAntiCuacaPost');
        removeCondition('JasaPelapisanDindingLuarPost');
        removeCondition('JasaFinishingTamanRumahPost');
        removeCondition('JasaPelapisanBatuAlamEksteriorPost');
        removeCondition('JasaPelapisanGentengDakPost');
      
         // hapus elemen id sub JasaFinishingBangunanInteriorPost Semua selain JasaEpoxyDinding
		
		removeCondition('JasaEpoxyLantaiPost');
		removeCondition('JasaGantiKitchenSetPost');
        removeCondition('JasaInteriorFurnitureCustomePost');
        removeCondition('JasaGantiKeramikLantaiPost');
        removeCondition('JasaCatInteriorRumahPost');
        removeCondition('JasaPasangWallpaperDindingPost');
        //removeCondition('JasaPasangLantaiVinylPost');
        //removeCondition('JasaPasangPlafonGypsumPost');
        removeCondition('JasaGantiLampuInteriorPost');
        
        removeCondition('JasaFinishingInteriorMinimalisPost');
        removeCondition('JasaFinishingInteriorKlasikPost');
        removeCondition('JasaFinishingInteriorModernPost');
       
         // hapus elemen id FINISHING UTAMA lain NYA
        removeCondition('JasaFinishingBangunanEksteriorPost');
        removeCondition('JasaFinishingBangunanStrukturPost');

          // hapus elemen id Infrastruktur Semua
        removeCondition('JasaFinishingInfrastrukturPost');
        removeCondition('JasaFinishingInfrastrukturJalanPost');
        removeCondition('JasaFinishingInfrastrukturTrotoarPost');
        removeCondition('JasaFinishingInfrastrukturSaluranPost');
        removeCondition('JasaFinishingInfrastrukturStrukturPost');
        removeCondition('JasaFinishingInfrastrukturProteksiPost');

		// hapus SEMUA SUB JASA FINSING INTERIOR MODERN 
	   removeCondition('JasaFinishingInteriorModernWpcPost');
	   removeCondition('JasaFinishingInteriorModernVinylPost');
	   removeCondition('JasaFinishingInteriorModernPlafonPost');
	   removeCondition('JasaFinishingInteriorModernPvcPost');
		/*
        JasaKonsFinishingPostLink.style.visibility = 'visible';
        JasaFinishingPostLink.style.visibility = 'visible';
        JasaFinishingBangunanPostLink.style.visibility = 'visible';
        //sub finishing bangunan
        JasaFinishingInteriorPostLink.style.visibility = 'visible';
        //sub finishing JasaGantiKitchenSetPost
        JasaEpoxyDindingPostLink.style.visibility = 'visible';
        pageNameJasaKonsFinishingPostLink.textContent = urlMappingJasaEpoxyDinding[cleanUrlJasaKonsFinishingPost];
		*/
	  // ============================================================
    // 2. TAMPILKAN ELEMEN YANG DIPERLUKAN (RESTORE JIKA PERLU)
    // ============================================================
    
    // Pastikan container utama visible
    const container = document.getElementById('JasaKonsFinishingPost');
    if (container) {
        container.style.display = 'inline';
        container.style.visibility = 'visible';
    }
    
    // Tampilkan Jasa Finishing (level 2)
    let jasaFinishing = document.getElementById('JasaFinishingPost');
    if (jasaFinishing) {
        jasaFinishing.style.display = 'inline';
        jasaFinishing.style.visibility = 'visible';
    } else {
        // Jika sudah di-remove, restore
        restoreCondition('JasaFinishingPost');
    }
    
    // Tampilkan Jasa Finishing Dak Beton (parent terdekat)
    let jasaEpoxyDinding = document.getElementById('JasaEpoxyDindingPost');
    if (jasaEpoxyDinding) {
        jasaEpoxyDinding.style.display = 'inline';
        jasaEpoxyDinding.style.visibility = 'visible';
    } else {
        restoreCondition('JasaEpoxyDindingPost');
    }
    
    // Update page name
    const pageNameElement = document.getElementById("pageNameJasaKonsFinishingPost");
    if (pageNameElement) {
        pageNameElement.textContent = jasaEpoxyDinding[cleanUrlJasaKonsFinishingPost];
        pageNameElement.style.display = 'inline';
    }
    }
  // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaEpoxyDinding[cleanUrlJasaKonsFinishingPost]) {
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
			   /*
               {
                   "@type": "ListItem",
                   "position": 2,
                   "name": "Jasa Konstruksi",
                   "item": "https://www.betonjayareadymix.com/p/jasa-konstruksi.html"
               },*/
               {
                   "@type": "ListItem",
                   "position": 2,
                   "name": "Jasa Finishing",
                   "item": "https://www.betonjayareadymix.com/p/jasa-finishing.html"
               },
			   /*
               {
                   "@type": "ListItem",
                   "position": 4,
                   "name": "Jasa Finishing Bangunan",
                   "item": "https://www.betonjayareadymix.com/p/jasa-finishing-bangunan.html"
               },
               {
                   "@type": "ListItem",
                   "position": 5,
                   "name": "Jasa Finishing Interior",
                   "item": "https://www.betonjayareadymix.com/p/jasa-finishing-interior.html"
               },
			   */
               {
                   "@type": "ListItem",
                   "position": 3,
                   "name": "Jasa Epoxy Dinding",
                   "item": "https://www.betonjayareadymix.com/p/jasa-epoxy-dinding.html"
               },
               {
                   "@type": "ListItem",
                   "position": 4,
                   "name": urlMappingJasaEpoxyDinding[cleanUrlJasaKonsFinishingPost],
                   "item": cleanUrlJasaKonsFinishingPost
               }
           ]
       };
       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }

	if (urlMappingJasaEpoxyLantai[cleanUrlJasaKonsFinishingPost]) {
          // ============================================================
    // 1. SEMBUNYIKAN ELEMEN YANG TIDAK DIPERLUKAN (REMOVE)
    // ============================================================
    
    // HIDE PILLAR & GRANDPARENT (jangan hapus container!)
    removeCondition('JasaKonstruksiFinishingPost');                    // PILLAR (Jasa Konstruksi)
    removeCondition('JasaFinishingBangunanPost');             // Jasa Finishing Bangunan
    removeCondition('JasaFinishingBangunanInteriorPost');     // Jasa Finishing Struktur
           
	// hapus elemen id DIV Lain SELAIN JasaKonsFinishingPost
	removeCondition('JasaDesInPost');
        removeCondition('ProdukInFurPost');
        removeCondition('ProdukKonsSaluranPost');
        removeCondition('ProdukKonsPembatasPost');
        removeCondition('ProdukKonsDindingModularPost');
        removeCondition('ProdukKonsPost');
        removeCondition('MaterialKonsStukturPost');
        removeCondition('MaterialKonsFasadPelapisEksteriorPost');
	removeCondition('MaterialKonsAtapPenutupPost');
        removeCondition('JasaKonsPerkuatanTanahLongsorPost');
        removeCondition('JasaKonsPondasiTanahPost');
        removeCondition('JasaKonsPembatasPost');
        removeCondition('JasaKonsPerbaikanPost');
        removeCondition('JasaKonsCuttingBetonPost');
        removeCondition('JasaKonsPengeboranPost');
        removeCondition('JasaKonsBongkarBangunanPost');
        removeCondition('JasaKonsStrukturPost');
        removeCondition('JasaKonsAlatKonstruksiPost');
        removeCondition('JasaKonsJalanPerkerasanPost');
     //   removeCondition('JasaKonsFinishingPost');

	 // hapus elemen id FINISHING STRUKTUR SEMUA NYA
	removeCondition('JasaFinishingDakBetonPost');
        removeCondition('JasaFinishingBetonExposePost');
        removeCondition('JasaPlesteranAcianDindingPost');
        removeCondition('JasaFinishingGroutingStrukturBetonPost');
        removeCondition('JasaPelapisanCoatingStrukturPost');
        removeCondition('JasaFinishingKolomdanBalokPost');
        removeCondition('JasaPelapisanWaterproofingStrukturPost');
        removeCondition('JasaFinishingLantaiBetonPost');
        removeCondition('JasaPelindungRetakStrukturPost'); 
	// hapus elemen id sub JasaFinishingBangunanEksteriorPost Semua
        removeCondition('JasaCatEksteriorRumahPost');
        removeCondition('JasaFinishingFasadEksteriorPost');
        removeCondition('JasaPelapisanAntiCuacaPost');
        removeCondition('JasaPelapisanDindingLuarPost');
        removeCondition('JasaFinishingTamanRumahPost');
        removeCondition('JasaPelapisanBatuAlamEksteriorPost');
        removeCondition('JasaPelapisanGentengDakPost');
      
         // hapus elemen id sub JasaFinishingBangunanInteriorPost Semua selain JasaEpoxyDinding
		
		removeCondition('JasaEpoxyDindingPost');
		removeCondition('JasaGantiKitchenSetPost');
        removeCondition('JasaInteriorFurnitureCustomePost');
        removeCondition('JasaGantiKeramikLantaiPost');
        removeCondition('JasaCatInteriorRumahPost');
        removeCondition('JasaPasangWallpaperDindingPost');
        //removeCondition('JasaPasangLantaiVinylPost');
        //removeCondition('JasaPasangPlafonGypsumPost');
        removeCondition('JasaGantiLampuInteriorPost');
        
        removeCondition('JasaFinishingInteriorMinimalisPost');
        removeCondition('JasaFinishingInteriorKlasikPost');
        removeCondition('JasaFinishingInteriorModernPost');
       
         // hapus elemen id FINISHING UTAMA lain NYA
        removeCondition('JasaFinishingBangunanEksteriorPost');
        removeCondition('JasaFinishingBangunanStrukturPost');

          // hapus elemen id Infrastruktur Semua
        removeCondition('JasaFinishingInfrastrukturPost');
        removeCondition('JasaFinishingInfrastrukturJalanPost');
        removeCondition('JasaFinishingInfrastrukturTrotoarPost');
        removeCondition('JasaFinishingInfrastrukturSaluranPost');
        removeCondition('JasaFinishingInfrastrukturStrukturPost');
        removeCondition('JasaFinishingInfrastrukturProteksiPost');

		// hapus SEMUA SUB JASA FINSING INTERIOR MODERN 
	   removeCondition('JasaFinishingInteriorModernWpcPost');
	   removeCondition('JasaFinishingInteriorModernVinylPost');
	   removeCondition('JasaFinishingInteriorModernPlafonPost');
	   removeCondition('JasaFinishingInteriorModernPvcPost');
		/*
        JasaKonsFinishingPostLink.style.visibility = 'visible';
        JasaFinishingPostLink.style.visibility = 'visible';
        JasaFinishingBangunanPostLink.style.visibility = 'visible';
        //sub finishing bangunan
        JasaFinishingInteriorPostLink.style.visibility = 'visible';
        //sub finishing JasaGantiKitchenSetPost
        JasaEpoxyLantaiPostLink.style.visibility = 'visible';
        pageNameJasaKonsFinishingPostLink.textContent = urlMappingJasaEpoxyLantai[cleanUrlJasaKonsFinishingPost];
		*/
	
	   // ============================================================
    // 2. TAMPILKAN ELEMEN YANG DIPERLUKAN (RESTORE JIKA PERLU)
    // ============================================================
    
    // Pastikan container utama visible
    const container = document.getElementById('JasaKonsFinishingPost');
    if (container) {
        container.style.display = 'inline';
        container.style.visibility = 'visible';
    }
    
    // Tampilkan Jasa Finishing (level 2)
    let jasaFinishing = document.getElementById('JasaFinishingPost');
    if (jasaFinishing) {
        jasaFinishing.style.display = 'inline';
        jasaFinishing.style.visibility = 'visible';
    } else {
        // Jika sudah di-remove, restore
        restoreCondition('JasaFinishingPost');
    }
    
    // Tampilkan jasaEpoxyLantai (parent terdekat)
    let jasaEpoxyLantai = document.getElementById('JasaEpoxyLantaiPost');
    if (jasaEpoxyLantai) {
        jasaEpoxyLantai.style.display = 'inline';
        jasaEpoxyLantai.style.visibility = 'visible';
    } else {
        restoreCondition('JasaEpoxyLantaiPost');
    }
    
    // Update page name
    const pageNameElement = document.getElementById("pageNameJasaKonsFinishingPost");
    if (pageNameElement) {
        pageNameElement.textContent = urlMappingJasaEpoxyLantai[cleanUrlJasaKonsFinishingPost];
        pageNameElement.style.display = 'inline';
    }
}
  // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaEpoxyLantai[cleanUrlJasaKonsFinishingPost]) {
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
			   /*
               {
                   "@type": "ListItem",
                   "position": 2,
                   "name": "Jasa Konstruksi",
                   "item": "https://www.betonjayareadymix.com/p/jasa-konstruksi.html"
               },
			   */
               {
                   "@type": "ListItem",
                   "position": 2,
                   "name": "Jasa Finishing",
                   "item": "https://www.betonjayareadymix.com/p/jasa-finishing.html"
               },
			   /*
               {
                   "@type": "ListItem",
                   "position": 4,
                   "name": "Jasa Finishing Bangunan",
                   "item": "https://www.betonjayareadymix.com/p/jasa-finishing-bangunan.html"
               },
               {
                   "@type": "ListItem",
                   "position": 5,
                   "name": "Jasa Finishing Interior",
                   "item": "https://www.betonjayareadymix.com/p/jasa-finishing-interior.html"
               },
			   */
               {
                   "@type": "ListItem",
                   "position": 3,
                   "name": "Jasa Epoxy Lantai",
                   "item": "https://www.betonjayareadymix.com/p/jasa-epoxy-lantai.html"
               },
               {
                   "@type": "ListItem",
                   "position": 4,
                   "name": urlMappingJasaEpoxyLantai[cleanUrlJasaKonsFinishingPost],
                   "item": cleanUrlJasaKonsFinishingPost
               }
           ]
       };
       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
	
/*
  if (urlMappingJasaBoronganLantai[cleanUrlJasaKonsFinishingPost]) {
        restoreCondition('JasaFinishingBangunanPost');
        restoreCondition('JasaFinishingBangunanInteriorPost');
    
        restoreCondition('JasaBoronganLantaiPost');
           
	// hapus elemen id DIV Lain SELAIN JasaKonsFinishingPost
	removeCondition('JasaDesInPost');
        removeCondition('ProdukInFurPost');
        removeCondition('ProdukKonsSaluranPost');
        removeCondition('ProdukKonsPembatasPost');
        removeCondition('ProdukKonsDindingModularPost');
        removeCondition('ProdukKonsPost');
        removeCondition('MaterialKonsStukturPost');
        removeCondition('MaterialKonsFasadPelapisEksteriorPost');
	removeCondition('MaterialKonsAtapPenutupPost');
        removeCondition('JasaKonsPerkuatanTanahLongsorPost');
        removeCondition('JasaKonsPondasiTanahPost');
        removeCondition('JasaKonsPembatasPost');
        removeCondition('JasaKonsPerbaikanPost');
        removeCondition('JasaKonsCuttingBetonPost');
        removeCondition('JasaKonsPengeboranPost');
        removeCondition('JasaKonsBongkarBangunanPost');
        removeCondition('JasaKonsStrukturPost');
        removeCondition('JasaKonsAlatKonstruksiPost');
        removeCondition('JasaKonsJalanPerkerasanPost');
     //   removeCondition('JasaKonsFinishingPost');

	 // hapus elemen id FINISHING STRUKTUR SEMUA NYA
	removeCondition('JasaFinishingDakBetonPost');
        removeCondition('JasaFinishingBetonExposePost');
        removeCondition('JasaPlesteranAcianDindingPost');
        removeCondition('JasaFinishingGroutingStrukturBetonPost');
        removeCondition('JasaPelapisanCoatingStrukturPost');
        removeCondition('JasaFinishingKolomdanBalokPost');
        removeCondition('JasaPelapisanWaterproofingStrukturPost');
        removeCondition('JasaFinishingLantaiBetonPost');
        removeCondition('JasaPelindungRetakStrukturPost'); 
	// hapus elemen id sub JasaFinishingBangunanEksteriorPost Semua
        removeCondition('JasaCatEksteriorRumahPost');
        removeCondition('JasaFinishingFasadEksteriorPost');
        removeCondition('JasaPelapisanAntiCuacaPost');
        removeCondition('JasaPelapisanDindingLuarPost');
        removeCondition('JasaFinishingTamanRumahPost');
        removeCondition('JasaPelapisanBatuAlamEksteriorPost');
        removeCondition('JasaPelapisanGentengDakPost');
      
         // hapus elemen id sub JasaFinishingBangunanInteriorPost Semua selain JasaEpoxyDinding
		removeCondition('JasaEpoxyLantaiPost');
		removeCondition('JasaEpoxyDindingPost');
		removeCondition('JasaGantiKitchenSetPost');
        removeCondition('JasaInteriorFurnitureCustomePost');
        removeCondition('JasaGantiKeramikLantaiPost');
        removeCondition('JasaCatInteriorRumahPost');
        removeCondition('JasaPasangWallpaperDindingPost');
        //removeCondition('JasaPasangLantaiVinylPost');
        //removeCondition('JasaPasangPlafonGypsumPost');
        removeCondition('JasaGantiLampuInteriorPost');
        
        removeCondition('JasaFinishingInteriorMinimalisPost');
        removeCondition('JasaFinishingInteriorKlasikPost');
        removeCondition('JasaFinishingInteriorModernPost');
       
         // hapus elemen id FINISHING UTAMA lain NYA
        removeCondition('JasaFinishingBangunanEksteriorPost');
        removeCondition('JasaFinishingBangunanStrukturPost');

          // hapus elemen id Infrastruktur Semua
        removeCondition('JasaFinishingInfrastrukturPost');
        removeCondition('JasaFinishingInfrastrukturJalanPost');
        removeCondition('JasaFinishingInfrastrukturTrotoarPost');
        removeCondition('JasaFinishingInfrastrukturSaluranPost');
        removeCondition('JasaFinishingInfrastrukturStrukturPost');
        removeCondition('JasaFinishingInfrastrukturProteksiPost');
       
        JasaKonsFinishingPostLink.style.visibility = 'visible';
        JasaFinishingPostLink.style.visibility = 'visible';
        JasaFinishingBangunanPostLink.style.visibility = 'visible';
        //sub finishing bangunan
        JasaFinishingInteriorPostLink.style.visibility = 'visible';
        //sub finishing JasaGantiKitchenSetPost
        JasaBoronganLantaiPostLink.style.visibility = 'visible';
        pageNameJasaKonsFinishingPostLink.textContent = urlMappingJasaBoronganLantai[cleanUrlJasaKonsFinishingPost];
    }
  // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaBoronganLantai[cleanUrlJasaKonsFinishingPost]) {
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
                   "name": "Jasa Finishing Bangunan",
                   "item": "https://www.betonjayareadymix.com/p/jasa-finishing-bangunan.html"
               },
               {
                   "@type": "ListItem",
                   "position": 5,
                   "name": "Jasa Finishing Interior",
                   "item": "https://www.betonjayareadymix.com/p/jasa-finishing-interior.html"
               },
               {
                   "@type": "ListItem",
                   "position": 6,
                   "name": "Jasa Borongan Lantai",
                   "item": "https://www.betonjayareadymix.com/p/jasa-borongan-lantai.html"
               },
               {
                   "@type": "ListItem",
                   "position": 7,
                   "name": urlMappingJasaBoronganLantai[cleanUrlJasaKonsFinishingPost],
                   "item": cleanUrlJasaKonsFinishingPost
               }
           ]
       };
       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
	*/
	
if (urlMappingJasaKitchenSet[cleanUrlJasaKonsFinishingPost]) {
          // ============================================================
    // 1. SEMBUNYIKAN ELEMEN YANG TIDAK DIPERLUKAN (REMOVE)
    // ============================================================
    
    // HIDE PILLAR & GRANDPARENT (jangan hapus container!)
    removeCondition('JasaKonstruksiFinishingPost');                    // PILLAR (Jasa Konstruksi)
    removeCondition('JasaFinishingBangunanPost');             // Jasa Finishing Bangunan
    removeCondition('JasaFinishingBangunanInteriorPost');     // JasaFinishingBangunanInterior
       
	// hapus elemen id DIV Lain SELAIN JasaKonsFinishingPost
	removeCondition('JasaDesInPost');
        removeCondition('ProdukInFurPost');
        removeCondition('ProdukKonsSaluranPost');
        removeCondition('ProdukKonsPembatasPost');
        removeCondition('ProdukKonsDindingModularPost');
        removeCondition('ProdukKonsPost');
        removeCondition('MaterialKonsStukturPost');
        removeCondition('MaterialKonsFasadPelapisEksteriorPost');
	removeCondition('MaterialKonsAtapPenutupPost');
        removeCondition('JasaKonsPerkuatanTanahLongsorPost');
        removeCondition('JasaKonsPondasiTanahPost');
        removeCondition('JasaKonsPembatasPost');
        removeCondition('JasaKonsPerbaikanPost');
        removeCondition('JasaKonsCuttingBetonPost');
        removeCondition('JasaKonsPengeboranPost');
        removeCondition('JasaKonsBongkarBangunanPost');
        removeCondition('JasaKonsStrukturPost');
        removeCondition('JasaKonsAlatKonstruksiPost');
        removeCondition('JasaKonsJalanPerkerasanPost');
     //   removeCondition('JasaKonsFinishingPost');

	 // hapus elemen id FINISHING STRUKTUR SEMUA NYA
	removeCondition('JasaFinishingDakBetonPost');
        removeCondition('JasaFinishingBetonExposePost');
        removeCondition('JasaPlesteranAcianDindingPost');
        removeCondition('JasaFinishingGroutingStrukturBetonPost');
        removeCondition('JasaPelapisanCoatingStrukturPost');
        removeCondition('JasaFinishingKolomdanBalokPost');
        removeCondition('JasaPelapisanWaterproofingStrukturPost');
        removeCondition('JasaFinishingLantaiBetonPost');
        removeCondition('JasaPelindungRetakStrukturPost'); 
	// hapus elemen id sub JasaFinishingBangunanEksteriorPost Semua
        removeCondition('JasaCatEksteriorRumahPost');
        removeCondition('JasaFinishingFasadEksteriorPost');
        removeCondition('JasaPelapisanAntiCuacaPost');
        removeCondition('JasaPelapisanDindingLuarPost');
        removeCondition('JasaFinishingTamanRumahPost');
        removeCondition('JasaPelapisanBatuAlamEksteriorPost');
        removeCondition('JasaPelapisanGentengDakPost');
      
         // hapus elemen id sub JasaFinishingBangunanInteriorPost Semua selain JasaDesainInteriorPost
		
		removeCondition('JasaEpoxyDindingPost');
		removeCondition('JasaEpoxyLantaiPost');
        removeCondition('JasaInteriorFurnitureCustomePost');
        removeCondition('JasaGantiKeramikLantaiPost');
        removeCondition('JasaCatInteriorRumahPost');
        removeCondition('JasaPasangWallpaperDindingPost');
        //removeCondition('JasaPasangLantaiVinylPost');
        //removeCondition('JasaPasangPlafonGypsumPost');
        removeCondition('JasaGantiLampuInteriorPost');
        
        removeCondition('JasaFinishingInteriorMinimalisPost');
        removeCondition('JasaFinishingInteriorKlasikPost');
        removeCondition('JasaFinishingInteriorModernPost');
       
         // hapus elemen id FINISHING UTAMA lain NYA
        removeCondition('JasaFinishingBangunanEksteriorPost');
        removeCondition('JasaFinishingBangunanStrukturPost');

          // hapus elemen id Infrastruktur Semua
        removeCondition('JasaFinishingInfrastrukturPost');
        removeCondition('JasaFinishingInfrastrukturJalanPost');
        removeCondition('JasaFinishingInfrastrukturTrotoarPost');
        removeCondition('JasaFinishingInfrastrukturSaluranPost');
        removeCondition('JasaFinishingInfrastrukturStrukturPost');
        removeCondition('JasaFinishingInfrastrukturProteksiPost');

		// hapus SEMUA SUB JASA FINSING INTERIOR MODERN 
	   removeCondition('JasaFinishingInteriorModernWpcPost');
	   removeCondition('JasaFinishingInteriorModernVinylPost');
	   removeCondition('JasaFinishingInteriorModernPlafonPost');
	   removeCondition('JasaFinishingInteriorModernPvcPost');

	 /*
        JasaKonsFinishingPostLink.style.visibility = 'visible';
        JasaFinishingPostLink.style.visibility = 'visible';
        JasaFinishingBangunanPostLink.style.visibility = 'visible';
        //sub finishing bangunan
        JasaFinishingInteriorPostLink.style.visibility = 'visible';
        //sub finishing JasaGantiKitchenSetPost
        JasaGantiKitchenSetPostLink.style.visibility = 'visible';
        pageNameJasaKonsFinishingPostLink.textContent = urlMappingJasaKitchenSet[cleanUrlJasaKonsFinishingPost];
		*/
	   // ============================================================
    // 2. TAMPILKAN ELEMEN YANG DIPERLUKAN (RESTORE JIKA PERLU)
    // ============================================================
    
    // Pastikan container utama visible
    const container = document.getElementById('JasaKonsFinishingPost');
    if (container) {
        container.style.display = 'inline';
        container.style.visibility = 'visible';
    }
    
    // Tampilkan Jasa Finishing (level 2)
    let jasaFinishing = document.getElementById('JasaFinishingPost');
    if (jasaFinishing) {
        jasaFinishing.style.display = 'inline';
        jasaFinishing.style.visibility = 'visible';
    } else {
        // Jika sudah di-remove, restore
        restoreCondition('JasaFinishingPost');
    }
    
    // Tampilkan JasaGantiKitchenSetPost (parent terdekat)
    let jasaGantiKitchenSet = document.getElementById('JasaGantiKitchenSetPost');
    if (jasaGantiKitchenSet) {
        jasaGantiKitchenSet.style.display = 'inline';
        jasaGantiKitchenSet.style.visibility = 'visible';
    } else {
        restoreCondition('JasaGantiKitchenSetPost');
    }
    
    // Update page name
    const pageNameElement = document.getElementById("pageNameJasaKonsFinishingPost");
    if (pageNameElement) {
        pageNameElement.textContent = urlMappingJasaKitchenSet[cleanUrlJasaKonsFinishingPost];
        pageNameElement.style.display = 'inline';
    }
    }
  // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaKitchenSet[cleanUrlJasaKonsFinishingPost]) {
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
			   /*
               {
                   "@type": "ListItem",
                   "position": 2,
                   "name": "Jasa Konstruksi",
                   "item": "https://www.betonjayareadymix.com/p/jasa-konstruksi.html"
               },*/
               {
                   "@type": "ListItem",
                   "position": 2,
                   "name": "Jasa Finishing",
                   "item": "https://www.betonjayareadymix.com/p/jasa-finishing.html"
               },
			   /*
               {
                   "@type": "ListItem",
                   "position": 4,
                   "name": "Jasa Finishing Bangunan",
                   "item": "https://www.betonjayareadymix.com/p/jasa-finishing-bangunan.html"
               },
               {
                   "@type": "ListItem",
                   "position": 5,
                   "name": "Jasa Finishing Interior",
                   "item": "https://www.betonjayareadymix.com/p/jasa-finishing-interior.html"
               },
			   */
               {
                   "@type": "ListItem",
                   "position": 3,
                   "name": "Jasa Kithen Set",
                   "item": "https://www.betonjayareadymix.com/p/jasa-kitchen-set.html"
               },
               {
                   "@type": "ListItem",
                   "position": 4,
                   "name": urlMappingJasaKitchenSet[cleanUrlJasaKonsFinishingPost],
                   "item": cleanUrlJasaKonsFinishingPost
               }
           ]
       };
       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
	
  if (urlMappingJasaInteriorFurnitureCustome[cleanUrlJasaKonsFinishingPost]) {
          // ============================================================
    // 1. SEMBUNYIKAN ELEMEN YANG TIDAK DIPERLUKAN (REMOVE)
    // ============================================================
    
    // HIDE PILLAR & GRANDPARENT (jangan hapus container!)
    removeCondition('JasaKonstruksiFinishingPost');                    // PILLAR (Jasa Konstruksi)
    removeCondition('JasaFinishingBangunanPost');             // Jasa Finishing Bangunan
    removeCondition('JasaFinishingBangunanInteriorPost');     // JasaFinishingBangunanInterior

	// hapus elemen id DIV Lain SELAIN JasaKonsFinishingPost
	removeCondition('JasaDesInPost');
        removeCondition('ProdukInFurPost');
        removeCondition('ProdukKonsSaluranPost');
        removeCondition('ProdukKonsPembatasPost');
        removeCondition('ProdukKonsDindingModularPost');
        removeCondition('ProdukKonsPost');
        removeCondition('MaterialKonsStukturPost');
        removeCondition('MaterialKonsFasadPelapisEksteriorPost');
	removeCondition('MaterialKonsAtapPenutupPost');
        removeCondition('JasaKonsPerkuatanTanahLongsorPost');
        removeCondition('JasaKonsPondasiTanahPost');
        removeCondition('JasaKonsPembatasPost');
        removeCondition('JasaKonsPerbaikanPost');
        removeCondition('JasaKonsCuttingBetonPost');
        removeCondition('JasaKonsPengeboranPost');
        removeCondition('JasaKonsBongkarBangunanPost');
        removeCondition('JasaKonsStrukturPost');
        removeCondition('JasaKonsAlatKonstruksiPost');
        removeCondition('JasaKonsJalanPerkerasanPost');
     //   removeCondition('JasaKonsFinishingPost');

	 // hapus elemen id FINISHING STRUKTUR SEMUA NYA
	removeCondition('JasaFinishingDakBetonPost');
        removeCondition('JasaFinishingBetonExposePost');
        removeCondition('JasaPlesteranAcianDindingPost');
        removeCondition('JasaFinishingGroutingStrukturBetonPost');
        removeCondition('JasaPelapisanCoatingStrukturPost');
        removeCondition('JasaFinishingKolomdanBalokPost');
        removeCondition('JasaPelapisanWaterproofingStrukturPost');
        removeCondition('JasaFinishingLantaiBetonPost');
        removeCondition('JasaPelindungRetakStrukturPost'); 
	// hapus elemen id sub JasaFinishingBangunanEksteriorPost Semua
        removeCondition('JasaCatEksteriorRumahPost');
        removeCondition('JasaFinishingFasadEksteriorPost');
        removeCondition('JasaPelapisanAntiCuacaPost');
        removeCondition('JasaPelapisanDindingLuarPost');
        removeCondition('JasaFinishingTamanRumahPost');
        removeCondition('JasaPelapisanBatuAlamEksteriorPost');
        removeCondition('JasaPelapisanGentengDakPost');
      
         // hapus elemen id sub JasaFinishingBangunanInteriorPost Semua selain JasaDesainInteriorPost
        //removeCondition('');
	   
	    removeCondition('JasaEpoxyDindingPost');
	removeCondition('JasaEpoxyLantaiPost');
        removeCondition('JasaGantiKeramikLantaiPost');
        removeCondition('JasaCatInteriorRumahPost');
        removeCondition('JasaPasangWallpaperDindingPost');
        //removeCondition('JasaPasangLantaiVinylPost');
        //removeCondition('JasaPasangPlafonGypsumPost');
        removeCondition('JasaGantiLampuInteriorPost');
        removeCondition('JasaGantiKitchenSetPost');
        removeCondition('JasaFinishingInteriorMinimalisPost');
        removeCondition('JasaFinishingInteriorKlasikPost');
        removeCondition('JasaFinishingInteriorModernPost');
       
         // hapus elemen id FINISHING UTAMA lain NYA
        removeCondition('JasaFinishingBangunanEksteriorPost');
        removeCondition('JasaFinishingBangunanStrukturPost');

          // hapus elemen id Infrastruktur Semua
        removeCondition('JasaFinishingInfrastrukturPost');
        removeCondition('JasaFinishingInfrastrukturJalanPost');
        removeCondition('JasaFinishingInfrastrukturTrotoarPost');
        removeCondition('JasaFinishingInfrastrukturSaluranPost');
        removeCondition('JasaFinishingInfrastrukturStrukturPost');
        removeCondition('JasaFinishingInfrastrukturProteksiPost');

	  // hapus SEMUA SUB JASA FINSING INTERIOR MODERN 
	   removeCondition('JasaFinishingInteriorModernWpcPost');
	   removeCondition('JasaFinishingInteriorModernVinylPost');
	   removeCondition('JasaFinishingInteriorModernPlafonPost');
	   removeCondition('JasaFinishingInteriorModernPvcPost');
	  /*
        JasaKonsFinishingPostLink.style.visibility = 'visible';
        JasaFinishingPostLink.style.visibility = 'visible';
        JasaFinishingBangunanPostLink.style.visibility = 'visible';
        //sub finishing bangunan
        JasaFinishingInteriorPostLink.style.visibility = 'visible';
        //sub finishing STRUKKTUR
        JasaInteriorFurnitureCustomePostLink.style.visibility = 'visible';
        pageNameJasaKonsFinishingPostLink.textContent = urlMappingJasaInteriorFurnitureCustome[cleanUrlJasaKonsFinishingPost];
		*/
	  // ============================================================
    // 2. TAMPILKAN ELEMEN YANG DIPERLUKAN (RESTORE JIKA PERLU)
    // ============================================================
    
    // Pastikan container utama visible
    const container = document.getElementById('JasaKonsFinishingPost');
    if (container) {
        container.style.display = 'inline';
        container.style.visibility = 'visible';
    }
    
    // Tampilkan Jasa Finishing (level 2)
    let jasaFinishing = document.getElementById('JasaFinishingPost');
    if (jasaFinishing) {
        jasaFinishing.style.display = 'inline';
        jasaFinishing.style.visibility = 'visible';
    } else {
        // Jika sudah di-remove, restore
        restoreCondition('JasaFinishingPost');
    }
    
    // Tampilkan Jasa Finishing Dak Beton (parent terdekat)
    let jasaInteriorFurnitureCustome = document.getElementById('JasaInteriorFurnitureCustomePost');
    if (jasaInteriorFurnitureCustome) {
        jasaInteriorFurnitureCustome.style.display = 'inline';
        jasaInteriorFurnitureCustome.style.visibility = 'visible';
    } else {
        restoreCondition('JasaInteriorFurnitureCustomePost');
    }
    
    // Update page name
    const pageNameElement = document.getElementById("pageNameJasaKonsFinishingPost");
    if (pageNameElement) {
        pageNameElement.textContent = urlMappingJasaInteriorFurnitureCustome[cleanUrlJasaKonsFinishingPost];
        pageNameElement.style.display = 'inline';
    }
}

  // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaInteriorFurnitureCustome[cleanUrlJasaKonsFinishingPost]) {
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
			   /*
               {
                   "@type": "ListItem",
                   "position": 2,
                   "name": "Jasa Konstruksi",
                   "item": "https://www.betonjayareadymix.com/p/jasa-konstruksi.html"
               },
			   */
               {
                   "@type": "ListItem",
                   "position": 2,
                   "name": "Jasa Finishing",
                   "item": "https://www.betonjayareadymix.com/p/jasa-finishing.html"
               },
			   /*
               {
                   "@type": "ListItem",
                   "position": 4,
                   "name": "Jasa Finishing Bangunan",
                   "item": "https://www.betonjayareadymix.com/p/jasa-finishing-bangunan.html"
               },
               {
                   "@type": "ListItem",
                   "position": 5,
                   "name": "Jasa Finishing Interior",
                   "item": "https://www.betonjayareadymix.com/p/jasa-finishing-interior.html"
               },
			   */
               {
                   "@type": "ListItem",
                   "position": 3,
                   "name": "Jasa Interior dan Furniture Custom",
                   "item": "https://www.betonjayareadymix.com/p/jasa-interior-dan-furniture-custom.html"
               },
               {
                   "@type": "ListItem",
                   "position": 4,
                   "name": urlMappingJasaInteriorFurnitureCustome[cleanUrlJasaKonsFinishingPost],
                   "item": cleanUrlJasaKonsFinishingPost
               }
           ]
       };
       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
  
   if (urlMappingJasaFinishingInteriorMinimalis[cleanUrlJasaKonsFinishingPost]) {
          // ============================================================
    // 1. SEMBUNYIKAN ELEMEN YANG TIDAK DIPERLUKAN (REMOVE)
    // ============================================================
    
    // HIDE PILLAR & GRANDPARENT (jangan hapus container!)
    removeCondition('JasaKonstruksiFinishingPost');                    // PILLAR (Jasa Konstruksi)
    removeCondition('JasaFinishingBangunanPost');             // Jasa Finishing Bangunan
    removeCondition('JasaFinishingBangunanInteriorPost');     // JasaFinishingBangunanInterior
           
	// hapus elemen id DIV Lain SELAIN JasaKonsFinishingPost
	removeCondition('JasaDesInPost');
        removeCondition('ProdukInFurPost');
        removeCondition('ProdukKonsSaluranPost');
        removeCondition('ProdukKonsPembatasPost');
        removeCondition('ProdukKonsDindingModularPost');
        removeCondition('ProdukKonsPost');
        removeCondition('MaterialKonsStukturPost');
        removeCondition('MaterialKonsFasadPelapisEksteriorPost');
	removeCondition('MaterialKonsAtapPenutupPost');
        removeCondition('JasaKonsPerkuatanTanahLongsorPost');
        removeCondition('JasaKonsPondasiTanahPost');
        removeCondition('JasaKonsPembatasPost');
        removeCondition('JasaKonsPerbaikanPost');
        removeCondition('JasaKonsCuttingBetonPost');
        removeCondition('JasaKonsPengeboranPost');
        removeCondition('JasaKonsBongkarBangunanPost');
        removeCondition('JasaKonsStrukturPost');
        removeCondition('JasaKonsAlatKonstruksiPost');
        removeCondition('JasaKonsJalanPerkerasanPost');
     //   removeCondition('JasaKonsFinishingPost');

	 // hapus elemen id FINISHING STRUKTUR SEMUA NYA
	removeCondition('JasaFinishingDakBetonPost');
        removeCondition('JasaFinishingBetonExposePost');
        removeCondition('JasaPlesteranAcianDindingPost');
        removeCondition('JasaFinishingGroutingStrukturBetonPost');
        removeCondition('JasaPelapisanCoatingStrukturPost');
        removeCondition('JasaFinishingKolomdanBalokPost');
        removeCondition('JasaPelapisanWaterproofingStrukturPost');
        removeCondition('JasaFinishingLantaiBetonPost');
        removeCondition('JasaPelindungRetakStrukturPost'); 
	// hapus elemen id sub JasaFinishingBangunanEksteriorPost Semua
        removeCondition('JasaCatEksteriorRumahPost');
        removeCondition('JasaFinishingFasadEksteriorPost');
        removeCondition('JasaPelapisanAntiCuacaPost');
        removeCondition('JasaPelapisanDindingLuarPost');
        removeCondition('JasaFinishingTamanRumahPost');
        removeCondition('JasaPelapisanBatuAlamEksteriorPost');
        removeCondition('JasaPelapisanGentengDakPost');
      
         // hapus elemen id sub JasaFinishingBangunanInteriorPost Semua selain JasaDesainInteriorPost
	  
	    removeCondition('JasaEpoxyDindingPost');
	  removeCondition('JasaEpoxyLantaiPost');
        removeCondition('JasaInteriorFurnitureCustomePost');
        removeCondition('JasaInteriorFurniturePost');
        removeCondition('JasaGantiKeramikLantaiPost');
        removeCondition('JasaCatInteriorRumahPost');
        removeCondition('JasaPasangWallpaperDindingPost');
        //removeCondition('JasaPasangLantaiVinylPost');
        //removeCondition('JasaPasangPlafonGypsumPost');
        removeCondition('JasaGantiLampuInteriorPost');
        removeCondition('JasaGantiKitchenSetPost');
        removeCondition('JasaFinishingInteriorModernPost');
        removeCondition('JasaFinishingInteriorKlasikPost');
        
       
         // hapus elemen id FINISHING UTAMA lain NYA
        removeCondition('JasaFinishingBangunanEksteriorPost');
        removeCondition('JasaFinishingBangunanStrukturPost');

          // hapus elemen id Infrastruktur Semua
        removeCondition('JasaFinishingInfrastrukturPost');
        removeCondition('JasaFinishingInfrastrukturJalanPost');
        removeCondition('JasaFinishingInfrastrukturTrotoarPost');
        removeCondition('JasaFinishingInfrastrukturSaluranPost');
        removeCondition('JasaFinishingInfrastrukturStrukturPost');
        removeCondition('JasaFinishingInfrastrukturProteksiPost');

	   // hapus SEMUA SUB JASA FINSING INTERIOR MODERN 
	   removeCondition('JasaFinishingInteriorModernWpcPost');
	   removeCondition('JasaFinishingInteriorModernVinylPost');
	   removeCondition('JasaFinishingInteriorModernPlafonPost');
	   removeCondition('JasaFinishingInteriorModernPvcPost');

	   /*
        JasaKonsFinishingPostLink.style.visibility = 'visible';
        JasaFinishingPostLink.style.visibility = 'visible';
        JasaFinishingBangunanPostLink.style.visibility = 'visible';
        //sub finishing bangunan
        JasaFinishingInteriorPostLink.style.visibility = 'visible';
        //sub finishing STRUKKTUR
        JasaFinishingInteriorMinimalisPostLink.style.visibility = 'visible';
        pageNameJasaKonsFinishingPostLink.textContent = urlMappingJasaFinishingInteriorMinimalis[cleanUrlJasaKonsFinishingPost];
		*/
	    // ============================================================
    // 2. TAMPILKAN ELEMEN YANG DIPERLUKAN (RESTORE JIKA PERLU)
    // ============================================================
    
    // Pastikan container utama visible
    const container = document.getElementById('JasaKonsFinishingPost');
    if (container) {
        container.style.display = 'inline';
        container.style.visibility = 'visible';
    }
    
    // Tampilkan Jasa Finishing (level 2)
    let jasaFinishing = document.getElementById('JasaFinishingPost');
    if (jasaFinishing) {
        jasaFinishing.style.display = 'inline';
        jasaFinishing.style.visibility = 'visible';
    } else {
        // Jika sudah di-remove, restore
        restoreCondition('JasaFinishingPost');
    }
    
    // Tampilkan Jasa Finishing Dak Beton (parent terdekat)
    let jasaFinishingInteriorMinimalis = document.getElementById('JasaFinishingInteriorMinimalisPost');
    if (jasaFinishingInteriorMinimalis) {
        jasaFinishingInteriorMinimalis.style.display = 'inline';
        jasaFinishingInteriorMinimalis.style.visibility = 'visible';
    } else {
        restoreCondition('JasaFinishingInteriorMinimalisPost');
    }
    
    // Update page name
    const pageNameElement = document.getElementById("pageNameJasaKonsFinishingPost");
    if (pageNameElement) {
        pageNameElement.textContent = urlMappingJasaFinishingInteriorMinimalis[cleanUrlJasaKonsFinishingPost];
        pageNameElement.style.display = 'inline';
    }
}
  // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaFinishingInteriorMinimalis[cleanUrlJasaKonsFinishingPost]) {
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
			   /*
               {
                   "@type": "ListItem",
                   "position": 2,
                   "name": "Jasa Konstruksi",
                   "item": "https://www.betonjayareadymix.com/p/jasa-konstruksi.html"
               },
			   */
               {
                   "@type": "ListItem",
                   "position": 2,
                   "name": "Jasa Finishing",
                   "item": "https://www.betonjayareadymix.com/p/jasa-finishing.html"
               },
			   /*
               {
                   "@type": "ListItem",
                   "position": 4,
                   "name": "Jasa Finishing Bangunan",
                   "item": "https://www.betonjayareadymix.com/p/jasa-finishing-bangunan.html"
               },
               {
                   "@type": "ListItem",
                   "position": 5,
                   "name": "Jasa Finishing Interior",
                   "item": "https://www.betonjayareadymix.com/p/jasa-finishing-interior.html"
               },
			   */
               {
                   "@type": "ListItem",
                   "position": 3,
                   "name": "Jasa Finishing Interior Minimalis",
                   "item": "https://www.betonjayareadymix.com/p/jasa-finishing-interior-minimalis.html"
               },
               {
                   "@type": "ListItem",
                   "position": 4,
                   "name": urlMappingJasaFinishingInteriorMinimalis[cleanUrlJasaKonsFinishingPost],
                   "item": cleanUrlJasaKonsFinishingPost
               }
           ]
       };
       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
if (urlMappingJasaFinishingInteriorKlasik[cleanUrlJasaKonsFinishingPost]) {
          // ============================================================
    // 1. SEMBUNYIKAN ELEMEN YANG TIDAK DIPERLUKAN (REMOVE)
    // ============================================================
    
    // HIDE PILLAR & GRANDPARENT (jangan hapus container!)
    removeCondition('JasaKonstruksiFinishingPost');                    // PILLAR (Jasa Konstruksi)
    removeCondition('JasaFinishingBangunanPost');             // Jasa Finishing Bangunan
    removeCondition('JasaFinishingBangunanInteriorPost');     // JasaFinishingBangunanInterior
           
	// hapus elemen id DIV Lain SELAIN JasaKonsFinishingPost
	removeCondition('JasaDesInPost');
        removeCondition('ProdukInFurPost');
        removeCondition('ProdukKonsSaluranPost');
        removeCondition('ProdukKonsPembatasPost');
        removeCondition('ProdukKonsDindingModularPost');
        removeCondition('ProdukKonsPost');
        removeCondition('MaterialKonsStukturPost');
        removeCondition('MaterialKonsFasadPelapisEksteriorPost');
	removeCondition('MaterialKonsAtapPenutupPost');
        removeCondition('JasaKonsPerkuatanTanahLongsorPost');
        removeCondition('JasaKonsPondasiTanahPost');
        removeCondition('JasaKonsPembatasPost');
        removeCondition('JasaKonsPerbaikanPost');
        removeCondition('JasaKonsCuttingBetonPost');
        removeCondition('JasaKonsPengeboranPost');
        removeCondition('JasaKonsBongkarBangunanPost');
        removeCondition('JasaKonsStrukturPost');
        removeCondition('JasaKonsAlatKonstruksiPost');
        removeCondition('JasaKonsJalanPerkerasanPost');
     //   removeCondition('JasaKonsFinishingPost');

	 // hapus elemen id FINISHING STRUKTUR SEMUA NYA
	removeCondition('JasaFinishingDakBetonPost');
        removeCondition('JasaFinishingBetonExposePost');
        removeCondition('JasaPlesteranAcianDindingPost');
        removeCondition('JasaFinishingGroutingStrukturBetonPost');
        removeCondition('JasaPelapisanCoatingStrukturPost');
        removeCondition('JasaFinishingKolomdanBalokPost');
        removeCondition('JasaPelapisanWaterproofingStrukturPost');
        removeCondition('JasaFinishingLantaiBetonPost');
        removeCondition('JasaPelindungRetakStrukturPost'); 
	// hapus elemen id sub JasaFinishingBangunanEksteriorPost Semua
        removeCondition('JasaCatEksteriorRumahPost');
        removeCondition('JasaFinishingFasadEksteriorPost');
        removeCondition('JasaPelapisanAntiCuacaPost');
        removeCondition('JasaPelapisanDindingLuarPost');
        removeCondition('JasaFinishingTamanRumahPost');
        removeCondition('JasaPelapisanBatuAlamEksteriorPost');
        removeCondition('JasaPelapisanGentengDakPost');
      
         // hapus elemen id sub JasaFinishingBangunanInteriorPost Semua selain JasaDesainInteriorPost
	  
	    removeCondition('JasaEpoxyDindingPost');
	  removeCondition('JasaEpoxyLantaiPost');
        removeCondition('JasaInteriorFurnitureCustomePost');
        removeCondition('JasaInteriorFurniturePost');
        removeCondition('JasaGantiKeramikLantaiPost');
        removeCondition('JasaCatInteriorRumahPost');
        removeCondition('JasaPasangWallpaperDindingPost');
        //removeCondition('JasaPasangLantaiVinylPost');
        //removeCondition('JasaPasangPlafonGypsumPost');
        removeCondition('JasaGantiLampuInteriorPost');
        removeCondition('JasaGantiKitchenSetPost');
        removeCondition('JasaFinishingInteriorMinimalisPost');
        removeCondition('JasaFinishingInteriorModernPost');
        
       
         // hapus elemen id FINISHING UTAMA lain NYA
        removeCondition('JasaFinishingBangunanEksteriorPost');
        removeCondition('JasaFinishingBangunanStrukturPost');

          // hapus elemen id Infrastruktur Semua
        removeCondition('JasaFinishingInfrastrukturPost');
        removeCondition('JasaFinishingInfrastrukturJalanPost');
        removeCondition('JasaFinishingInfrastrukturTrotoarPost');
        removeCondition('JasaFinishingInfrastrukturSaluranPost');
        removeCondition('JasaFinishingInfrastrukturStrukturPost');
        removeCondition('JasaFinishingInfrastrukturProteksiPost');

	 // hapus SEMUA SUB JASA FINSING INTERIOR MODERN 
	   removeCondition('JasaFinishingInteriorModernWpcPost');
	   removeCondition('JasaFinishingInteriorModernVinylPost');
	   removeCondition('JasaFinishingInteriorModernPlafonPost');
	   removeCondition('JasaFinishingInteriorModernPvcPost');
	/*
        JasaKonsFinishingPostLink.style.visibility = 'visible';
        JasaFinishingPostLink.style.visibility = 'visible';
        JasaFinishingBangunanPostLink.style.visibility = 'visible';
        //sub finishing bangunan
        JasaFinishingInteriorPostLink.style.visibility = 'visible';
        //sub finishing STRUKKTUR
        JasaFinishingInteriorKlasikPostLink.style.visibility = 'visible';
        pageNameJasaKonsFinishingPostLink.textContent = urlMappingJasaFinishingInteriorKlasik[cleanUrlJasaKonsFinishingPost];
		*/
	    // ============================================================
    // 2. TAMPILKAN ELEMEN YANG DIPERLUKAN (RESTORE JIKA PERLU)
    // ============================================================
    
    // Pastikan container utama visible
    const container = document.getElementById('JasaKonsFinishingPost');
    if (container) {
        container.style.display = 'inline';
        container.style.visibility = 'visible';
    }
    
    // Tampilkan Jasa Finishing (level 2)
    let jasaFinishing = document.getElementById('JasaFinishingPost');
    if (jasaFinishing) {
        jasaFinishing.style.display = 'inline';
        jasaFinishing.style.visibility = 'visible';
    } else {
        // Jika sudah di-remove, restore
        restoreCondition('JasaFinishingPost');
    }
    
    // Tampilkan Jasa Finishing Dak Beton (parent terdekat)
    let jasaFinishingInteriorKlasik = document.getElementById('JasaFinishingInteriorKlasikPost');
    if (jasaFinishingInteriorKlasik) {
        jasaFinishingInteriorKlasik.style.display = 'inline';
        jasaFinishingInteriorKlasik.style.visibility = 'visible';
    } else {
        restoreCondition('JasaFinishingInteriorKlasikPost');
    }
    
    // Update page name
    const pageNameElement = document.getElementById("pageNameJasaKonsFinishingPost");
    if (pageNameElement) {
        pageNameElement.textContent = urlMappingJasaFinishingInteriorKlasik[cleanUrlJasaKonsFinishingPost];
        pageNameElement.style.display = 'inline';
    }
}
  // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaFinishingInteriorKlasik[cleanUrlJasaKonsFinishingPost]) {
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
			   /*
               {
                   "@type": "ListItem",
                   "position": 2,
                   "name": "Jasa Konstruksi",
                   "item": "https://www.betonjayareadymix.com/p/jasa-konstruksi.html"
               },
			   */
               {
                   "@type": "ListItem",
                   "position": 2,
                   "name": "Jasa Finishing",
                   "item": "https://www.betonjayareadymix.com/p/jasa-finishing.html"
               },
			   /*
               {
                   "@type": "ListItem",
                   "position": 4,
                   "name": "Jasa Finishing Bangunan",
                   "item": "https://www.betonjayareadymix.com/p/jasa-finishing-bangunan.html"
               },
               {
                   "@type": "ListItem",
                   "position": 5,
                   "name": "Jasa Finishing Interior",
                   "item": "https://www.betonjayareadymix.com/p/jasa-finishing-interior.html"
               },
			   */
               {
                   "@type": "ListItem",
                   "position": 3,
                   "name": "Jasa Finishing Interior Klasik",
                   "item": "https://www.betonjayareadymix.com/p/jasa-finishing-interior-klasik.html"
               },
               {
                   "@type": "ListItem",
                   "position": 4,
                   "name": urlMappingJasaFinishingInteriorKlasik[cleanUrlJasaKonsFinishingPost],
                   "item": cleanUrlJasaKonsFinishingPost
               }
           ]
       };
       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }

if (urlMappingJasaLampuInterior[cleanUrlJasaKonsFinishingPost]) {
          // ============================================================
    // 1. SEMBUNYIKAN ELEMEN YANG TIDAK DIPERLUKAN (REMOVE)
    // ============================================================
    
    // HIDE PILLAR & GRANDPARENT (jangan hapus container!)
    removeCondition('JasaKonstruksiFinishingPost');                    // PILLAR (Jasa Konstruksi)
    removeCondition('JasaFinishingBangunanPost');             // Jasa Finishing Bangunan
    removeCondition('JasaFinishingBangunanInteriorPost');     // JasaFinishingBangunanInterior
           
	// hapus elemen id DIV Lain SELAIN JasaKonsFinishingPost
	removeCondition('JasaDesInPost');
        removeCondition('ProdukInFurPost');
        removeCondition('ProdukKonsSaluranPost');
        removeCondition('ProdukKonsPembatasPost');
        removeCondition('ProdukKonsDindingModularPost');
        removeCondition('ProdukKonsPost');
        removeCondition('MaterialKonsStukturPost');
        removeCondition('MaterialKonsFasadPelapisEksteriorPost');
	removeCondition('MaterialKonsAtapPenutupPost');
        removeCondition('JasaKonsPerkuatanTanahLongsorPost');
        removeCondition('JasaKonsPondasiTanahPost');
        removeCondition('JasaKonsPembatasPost');
        removeCondition('JasaKonsPerbaikanPost');
        removeCondition('JasaKonsCuttingBetonPost');
        removeCondition('JasaKonsPengeboranPost');
        removeCondition('JasaKonsBongkarBangunanPost');
        removeCondition('JasaKonsStrukturPost');
        removeCondition('JasaKonsAlatKonstruksiPost');
        removeCondition('JasaKonsJalanPerkerasanPost');
     //   removeCondition('JasaKonsFinishingPost');

	 // hapus elemen id FINISHING STRUKTUR SEMUA NYA
	removeCondition('JasaFinishingDakBetonPost');
        removeCondition('JasaFinishingBetonExposePost');
        removeCondition('JasaPlesteranAcianDindingPost');
        removeCondition('JasaFinishingGroutingStrukturBetonPost');
        removeCondition('JasaPelapisanCoatingStrukturPost');
        removeCondition('JasaFinishingKolomdanBalokPost');
        removeCondition('JasaPelapisanWaterproofingStrukturPost');
        removeCondition('JasaFinishingLantaiBetonPost');
        removeCondition('JasaPelindungRetakStrukturPost'); 
	// hapus elemen id sub JasaFinishingBangunanEksteriorPost Semua
        removeCondition('JasaCatEksteriorRumahPost');
        removeCondition('JasaFinishingFasadEksteriorPost');
        removeCondition('JasaPelapisanAntiCuacaPost');
        removeCondition('JasaPelapisanDindingLuarPost');
        removeCondition('JasaFinishingTamanRumahPost');
        removeCondition('JasaPelapisanBatuAlamEksteriorPost');
        removeCondition('JasaPelapisanGentengDakPost');
      
         // hapus elemen id sub JasaFinishingBangunanInteriorPost Semua selain JasaDesainInteriorPost
	  
	    removeCondition('JasaEpoxyDindingPost');
	  removeCondition('JasaEpoxyLantaiPost');
        removeCondition('JasaInteriorFurnitureCustomePost');
        removeCondition('JasaInteriorFurniturePost');
        removeCondition('JasaGantiKeramikLantaiPost');
        removeCondition('JasaCatInteriorRumahPost');
        removeCondition('JasaPasangWallpaperDindingPost');
        //removeCondition('JasaPasangLantaiVinylPost');
        //removeCondition('JasaPasangPlafonGypsumPost');
        removeCondition('');
        removeCondition('JasaGantiKitchenSetPost');
        removeCondition('JasaFinishingInteriorMinimalisPost');
        removeCondition('JasaFinishingInteriorKlasikPost');
        
       
         // hapus elemen id FINISHING UTAMA lain NYA
        removeCondition('JasaFinishingBangunanEksteriorPost');
        removeCondition('JasaFinishingBangunanStrukturPost');

          // hapus elemen id Infrastruktur Semua
        removeCondition('JasaFinishingInfrastrukturPost');
        removeCondition('JasaFinishingInfrastrukturJalanPost');
        removeCondition('JasaFinishingInfrastrukturTrotoarPost');
        removeCondition('JasaFinishingInfrastrukturSaluranPost');
        removeCondition('JasaFinishingInfrastrukturStrukturPost');
        removeCondition('JasaFinishingInfrastrukturProteksiPost');

	 // hapus SEMUA SUB JASA FINSING INTERIOR MODERN 
	   removeCondition('JasaFinishingInteriorModernWpcPost');
	   removeCondition('JasaFinishingInteriorModernVinylPost');
	   removeCondition('JasaFinishingInteriorModernPlafonPost');
	   removeCondition('JasaFinishingInteriorModernPvcPost');
	/*
        JasaKonsFinishingPostLink.style.visibility = 'visible';
        JasaFinishingPostLink.style.visibility = 'visible';
        JasaFinishingBangunanPostLink.style.visibility = 'visible';
        //sub finishing bangunan
        JasaFinishingInteriorPostLink.style.visibility = 'visible';
        //sub finishing STRUKKTUR
        JasaGantiLampuInteriorPostLink.style.visibility = 'visible';
        pageNameJasaKonsFinishingPostLink.textContent = urlMappingJasaLampuInterior[cleanUrlJasaKonsFinishingPost];
		*/
	     // ============================================================
    // 2. TAMPILKAN ELEMEN YANG DIPERLUKAN (RESTORE JIKA PERLU)
    // ============================================================
    
    // Pastikan container utama visible
    const container = document.getElementById('JasaKonsFinishingPost');
    if (container) {
        container.style.display = 'inline';
        container.style.visibility = 'visible';
    }
    
    // Tampilkan Jasa Finishing (level 2)
    let jasaFinishing = document.getElementById('JasaFinishingPost');
    if (jasaFinishing) {
        jasaFinishing.style.display = 'inline';
        jasaFinishing.style.visibility = 'visible';
    } else {
        // Jika sudah di-remove, restore
        restoreCondition('JasaFinishingPost');
    }
    
    // Tampilkan Jasa Finishing Dak Beton (parent terdekat)
    let jasaGantiLampuInterior = document.getElementById('JasaGantiLampuInteriorPost');
    if (jasaGantiLampuInterior) {
        jasaGantiLampuInterior.style.display = 'inline';
        jasaGantiLampuInterior.style.visibility = 'visible';
    } else {
        restoreCondition('JasaGantiLampuInteriorPost');
    }
    
    // Update page name
    const pageNameElement = document.getElementById("pageNameJasaKonsFinishingPost");
    if (pageNameElement) {
        pageNameElement.textContent = urlMappingJasaLampuInterior[cleanUrlJasaKonsFinishingPost];
        pageNameElement.style.display = 'inline';
    }
}
  // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaLampuInterior[cleanUrlJasaKonsFinishingPost]) {
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
			   /*
               {
                   "@type": "ListItem",
                   "position": 2,
                   "name": "Jasa Konstruksi",
                   "item": "https://www.betonjayareadymix.com/p/jasa-konstruksi.html"
               },
			   */
               {
                   "@type": "ListItem",
                   "position": 2,
                   "name": "Jasa Finishing",
                   "item": "https://www.betonjayareadymix.com/p/jasa-finishing.html"
               },
			   /*
               {
                   "@type": "ListItem",
                   "position": 4,
                   "name": "Jasa Finishing Bangunan",
                   "item": "https://www.betonjayareadymix.com/p/jasa-finishing-bangunan.html"
               },
               {
                   "@type": "ListItem",
                   "position": 5,
                   "name": "Jasa Finishing Interior",
                   "item": "https://www.betonjayareadymix.com/p/jasa-finishing-interior.html"
               },
			   */
               {
                   "@type": "ListItem",
                   "position": 3,
                   "name": "Jasa Lampu Interior",
                   "item": "https://www.betonjayareadymix.com/p/jasa-lampu-interior.html"
               },
               {
                   "@type": "ListItem",
                   "position": 4,
                   "name": urlMappingJasaLampuInterior[cleanUrlJasaKonsFinishingPost],
                   "item": cleanUrlJasaKonsFinishingPost
               }
           ]
       };
       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
if (urlMappingJasaPasangWallpaperDinding[cleanUrlJasaKonsFinishingPost]) {
          // ============================================================
    // 1. SEMBUNYIKAN ELEMEN YANG TIDAK DIPERLUKAN (REMOVE)
    // ============================================================
    
    // HIDE PILLAR & GRANDPARENT (jangan hapus container!)
    removeCondition('JasaKonstruksiFinishingPost');                    // PILLAR (Jasa Konstruksi)
    removeCondition('JasaFinishingBangunanPost');             // Jasa Finishing Bangunan
    removeCondition('JasaFinishingBangunanInteriorPost');     // JasaFinishingBangunanInterior
           
	// hapus elemen id DIV Lain SELAIN JasaKonsFinishingPost
	removeCondition('JasaDesInPost');
        removeCondition('ProdukInFurPost');
        removeCondition('ProdukKonsSaluranPost');
        removeCondition('ProdukKonsPembatasPost');
        removeCondition('ProdukKonsDindingModularPost');
        removeCondition('ProdukKonsPost');
        removeCondition('MaterialKonsStukturPost');
        removeCondition('MaterialKonsFasadPelapisEksteriorPost');
	removeCondition('MaterialKonsAtapPenutupPost');
        removeCondition('JasaKonsPerkuatanTanahLongsorPost');
        removeCondition('JasaKonsPondasiTanahPost');
        removeCondition('JasaKonsPembatasPost');
        removeCondition('JasaKonsPerbaikanPost');
        removeCondition('JasaKonsCuttingBetonPost');
        removeCondition('JasaKonsPengeboranPost');
        removeCondition('JasaKonsBongkarBangunanPost');
        removeCondition('JasaKonsStrukturPost');
        removeCondition('JasaKonsAlatKonstruksiPost');
        removeCondition('JasaKonsJalanPerkerasanPost');
     //   removeCondition('JasaKonsFinishingPost');

	 // hapus elemen id FINISHING STRUKTUR SEMUA NYA
	removeCondition('JasaFinishingDakBetonPost');
        removeCondition('JasaFinishingBetonExposePost');
        removeCondition('JasaPlesteranAcianDindingPost');
        removeCondition('JasaFinishingGroutingStrukturBetonPost');
        removeCondition('JasaPelapisanCoatingStrukturPost');
        removeCondition('JasaFinishingKolomdanBalokPost');
        removeCondition('JasaPelapisanWaterproofingStrukturPost');
        removeCondition('JasaFinishingLantaiBetonPost');
        removeCondition('JasaPelindungRetakStrukturPost'); 
	// hapus elemen id sub JasaFinishingBangunanEksteriorPost Semua
        removeCondition('JasaCatEksteriorRumahPost');
        removeCondition('JasaFinishingFasadEksteriorPost');
        removeCondition('JasaPelapisanAntiCuacaPost');
        removeCondition('JasaPelapisanDindingLuarPost');
        removeCondition('JasaFinishingTamanRumahPost');
        removeCondition('JasaPelapisanBatuAlamEksteriorPost');
        removeCondition('JasaPelapisanGentengDakPost');
      
         // hapus elemen id sub JasaFinishingBangunanInteriorPost Semua selain JasaDesainInteriorPost
	  
	    removeCondition('JasaEpoxyDindingPost');
	  removeCondition('JasaEpoxyLantaiPost');
        removeCondition('JasaInteriorFurnitureCustomePost');
        removeCondition('JasaInteriorFurniturePost');
        removeCondition('JasaGantiKeramikLantaiPost');
        removeCondition('JasaCatInteriorRumahPost');
        removeCondition('JasaPasangWallpaperDindingPost');
        //removeCondition('JasaPasangLantaiVinylPost');
        //removeCondition('JasaPasangPlafonGypsumPost');
        removeCondition('JasaGantiLampuInteriorPost');
        removeCondition('JasaGantiKitchenSetPost');
        removeCondition('JasaFinishingInteriorMinimalisPost');
        removeCondition('JasaFinishingInteriorKlasikPost');
        
       
         // hapus elemen id FINISHING UTAMA lain NYA
        removeCondition('JasaFinishingBangunanEksteriorPost');
        removeCondition('JasaFinishingBangunanStrukturPost');

          // hapus elemen id Infrastruktur Semua
        removeCondition('JasaFinishingInfrastrukturPost');
        removeCondition('JasaFinishingInfrastrukturJalanPost');
        removeCondition('JasaFinishingInfrastrukturTrotoarPost');
        removeCondition('JasaFinishingInfrastrukturSaluranPost');
        removeCondition('JasaFinishingInfrastrukturStrukturPost');
        removeCondition('JasaFinishingInfrastrukturProteksiPost');

	 // hapus SEMUA SUB JASA FINSING INTERIOR MODERN 
	   removeCondition('JasaFinishingInteriorModernWpcPost');
	   removeCondition('JasaFinishingInteriorModernVinylPost');
	   removeCondition('JasaFinishingInteriorModernPlafonPost');
	   removeCondition('JasaFinishingInteriorModernPvcPost');

	/*
        JasaKonsFinishingPostLink.style.visibility = 'visible';
        JasaFinishingPostLink.style.visibility = 'visible';
        JasaFinishingBangunanPostLink.style.visibility = 'visible';
        //sub finishing bangunan
        JasaFinishingInteriorPostLink.style.visibility = 'visible';
        //sub finishing STRUKKTUR
        JasaPasangWallpaperDindingPostLink.style.visibility = 'visible';
        pageNameJasaKonsFinishingPostLink.textContent = urlMappingJasaPasangWallpaperDinding[cleanUrlJasaKonsFinishingPost];
		*/
        // ============================================================
    // 2. TAMPILKAN ELEMEN YANG DIPERLUKAN (RESTORE JIKA PERLU)
    // ============================================================
    
    // Pastikan container utama visible
    const container = document.getElementById('JasaKonsFinishingPost');
    if (container) {
        container.style.display = 'inline';
        container.style.visibility = 'visible';
    }
    
    // Tampilkan Jasa Finishing (level 2)
    let jasaFinishing = document.getElementById('JasaFinishingPost');
    if (jasaFinishing) {
        jasaFinishing.style.display = 'inline';
        jasaFinishing.style.visibility = 'visible';
    } else {
        // Jika sudah di-remove, restore
        restoreCondition('JasaFinishingPost');
    }
    
    // Tampilkan Jasa Finishing Dak Beton (parent terdekat)
    let jasaPasangWallpaperDinding = document.getElementById('JasaPasangWallpaperDindingPost');
    if (jasaPasangWallpaperDinding) {
        jasaPasangWallpaperDinding.style.display = 'inline';
        jasaPasangWallpaperDinding.style.visibility = 'visible';
    } else {
        restoreCondition('JasaPasangWallpaperDindingPost');
    }
    
    // Update page name
    const pageNameElement = document.getElementById("pageNameJasaKonsFinishingPost");
    if (pageNameElement) {
        pageNameElement.textContent = urlMappingJasaPasangWallpaperDinding[cleanUrlJasaKonsFinishingPost];
        pageNameElement.style.display = 'inline';
    }
}
  // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaPasangWallpaperDinding[cleanUrlJasaKonsFinishingPost]) {
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
			   /*
               {
                   "@type": "ListItem",
                   "position": 2,
                   "name": "Jasa Konstruksi",
                   "item": "https://www.betonjayareadymix.com/p/jasa-konstruksi.html"
               },
			   */
               {
                   "@type": "ListItem",
                   "position": 2,
                   "name": "Jasa Finishing",
                   "item": "https://www.betonjayareadymix.com/p/jasa-finishing.html"
               },
			   /*               {
                   "@type": "ListItem",
                   "position": 4,
                   "name": "Jasa Finishing Bangunan",
                   "item": "https://www.betonjayareadymix.com/p/jasa-finishing-bangunan.html"
               },
               {
                   "@type": "ListItem",
                   "position": 5,
                   "name": "Jasa Finishing Interior",
                   "item": "https://www.betonjayareadymix.com/p/jasa-finishing-interior.html"
               },
			   */
               {
                   "@type": "ListItem",
                   "position": 3,
                   "name": "Jasa Pasang Wallpaper Dinding",
                   "item": "https://www.betonjayareadymix.com/p/jasa-pasang-wallpaper-dinding.html"
               },
               {
                   "@type": "ListItem",
                   "position": 4,
                   "name": urlMappingJasaPasangWallpaperDinding[cleanUrlJasaKonsFinishingPost],
                   "item": cleanUrlJasaKonsFinishingPost
               }
           ]
       };
       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
if (urlMappingJasaCatInteriorRumah[cleanUrlJasaKonsFinishingPost]) {
          // ============================================================
    // 1. SEMBUNYIKAN ELEMEN YANG TIDAK DIPERLUKAN (REMOVE)
    // ============================================================
    
    // HIDE PILLAR & GRANDPARENT (jangan hapus container!)
    removeCondition('JasaKonstruksiFinishingPost');                    // PILLAR (Jasa Konstruksi)
    removeCondition('JasaFinishingBangunanPost');             // Jasa Finishing Bangunan
    removeCondition('JasaFinishingBangunanInteriorPost');     // JasaFinishingBangunanInterior
           
	// hapus elemen id DIV Lain SELAIN JasaKonsFinishingPost
	removeCondition('JasaDesInPost');
        removeCondition('ProdukInFurPost');
        removeCondition('ProdukKonsSaluranPost');
        removeCondition('ProdukKonsPembatasPost');
        removeCondition('ProdukKonsDindingModularPost');
        removeCondition('ProdukKonsPost');
        removeCondition('MaterialKonsStukturPost');
        removeCondition('MaterialKonsFasadPelapisEksteriorPost');
	removeCondition('MaterialKonsAtapPenutupPost');
        removeCondition('JasaKonsPerkuatanTanahLongsorPost');
        removeCondition('JasaKonsPondasiTanahPost');
        removeCondition('JasaKonsPembatasPost');
        removeCondition('JasaKonsPerbaikanPost');
        removeCondition('JasaKonsCuttingBetonPost');
        removeCondition('JasaKonsPengeboranPost');
        removeCondition('JasaKonsBongkarBangunanPost');
        removeCondition('JasaKonsStrukturPost');
        removeCondition('JasaKonsAlatKonstruksiPost');
        removeCondition('JasaKonsJalanPerkerasanPost');
     //   removeCondition('JasaKonsFinishingPost');

	 // hapus elemen id FINISHING STRUKTUR SEMUA NYA
	removeCondition('JasaFinishingDakBetonPost');
        removeCondition('JasaFinishingBetonExposePost');
        removeCondition('JasaPlesteranAcianDindingPost');
        removeCondition('JasaFinishingGroutingStrukturBetonPost');
        removeCondition('JasaPelapisanCoatingStrukturPost');
        removeCondition('JasaFinishingKolomdanBalokPost');
        removeCondition('JasaPelapisanWaterproofingStrukturPost');
        removeCondition('JasaFinishingLantaiBetonPost');
        removeCondition('JasaPelindungRetakStrukturPost'); 
	// hapus elemen id sub JasaFinishingBangunanEksteriorPost Semua
        removeCondition('JasaCatEksteriorRumahPost');
        removeCondition('JasaFinishingFasadEksteriorPost');
        removeCondition('JasaPelapisanAntiCuacaPost');
        removeCondition('JasaPelapisanDindingLuarPost');
        removeCondition('JasaFinishingTamanRumahPost');
        removeCondition('JasaPelapisanBatuAlamEksteriorPost');
        removeCondition('JasaPelapisanGentengDakPost');
      
         // hapus elemen id sub JasaFinishingBangunanInteriorPost Semua selain JasaDesainInteriorPost
	  
	    removeCondition('JasaEpoxyDindingPost');
	  removeCondition('JasaEpoxyLantaiPost');
        removeCondition('JasaInteriorFurnitureCustomePost');
        removeCondition('JasaInteriorFurniturePost');
        removeCondition('JasaGantiKeramikLantaiPost');
        removeCondition('JasaFinishingInteriorModernPost');
        removeCondition('JasaPasangWallpaperDindingPost');
        //removeCondition('JasaPasangLantaiVinylPost');
        //removeCondition('JasaPasangPlafonGypsumPost');
        removeCondition('JasaGantiLampuInteriorPost');
        removeCondition('JasaGantiKitchenSetPost');
        removeCondition('JasaFinishingInteriorMinimalisPost');
        removeCondition('JasaFinishingInteriorKlasikPost');
        
       
         // hapus elemen id FINISHING UTAMA lain NYA
        removeCondition('JasaFinishingBangunanEksteriorPost');
        removeCondition('JasaFinishingBangunanStrukturPost');

          // hapus elemen id Infrastruktur Semua
        removeCondition('JasaFinishingInfrastrukturPost');
        removeCondition('JasaFinishingInfrastrukturJalanPost');
        removeCondition('JasaFinishingInfrastrukturTrotoarPost');
        removeCondition('JasaFinishingInfrastrukturSaluranPost');
        removeCondition('JasaFinishingInfrastrukturStrukturPost');
        removeCondition('JasaFinishingInfrastrukturProteksiPost');

	// hapus SEMUA SUB JASA FINSING INTERIOR MODERN 
	   removeCondition('JasaFinishingInteriorModernWpcPost');
	   removeCondition('JasaFinishingInteriorModernVinylPost');
	   removeCondition('JasaFinishingInteriorModernPlafonPost');
	   removeCondition('JasaFinishingInteriorModernPvcPost');
	 /*
        JasaKonsFinishingPostLink.style.visibility = 'visible';
        JasaFinishingPostLink.style.visibility = 'visible';
        JasaFinishingBangunanPostLink.style.visibility = 'visible';
        //sub finishing bangunan
        JasaFinishingInteriorPostLink.style.visibility = 'visible';
        //sub finishing STRUKKTUR
        JasaCatInteriorRumahPostLink.style.visibility = 'visible';
        pageNameJasaKonsFinishingPostLink.textContent = urlMappingJasaCatInteriorRumah[cleanUrlJasaKonsFinishingPost];
		*/
	    // ============================================================
    // 2. TAMPILKAN ELEMEN YANG DIPERLUKAN (RESTORE JIKA PERLU)
    // ============================================================
    
    // Pastikan container utama visible
    const container = document.getElementById('JasaKonsFinishingPost');
    if (container) {
        container.style.display = 'inline';
        container.style.visibility = 'visible';
    }
    
    // Tampilkan Jasa Finishing (level 2)
    let jasaFinishing = document.getElementById('JasaFinishingPost');
    if (jasaFinishing) {
        jasaFinishing.style.display = 'inline';
        jasaFinishing.style.visibility = 'visible';
    } else {
        // Jika sudah di-remove, restore
        restoreCondition('JasaFinishingPost');
    }
    
    // Tampilkan Jasa Finishing Dak Beton (parent terdekat)
    let jasaCatInteriorRumah = document.getElementById('JasaCatInteriorRumahPost');
    if (jasaCatInteriorRumah) {
        jasaCatInteriorRumah.style.display = 'inline';
        jasaCatInteriorRumah.style.visibility = 'visible';
    } else {
        restoreCondition('JasaCatInteriorRumahPost');
    }
    
    // Update page name
    const pageNameElement = document.getElementById("pageNameJasaKonsFinishingPost");
    if (pageNameElement) {
        pageNameElement.textContent = urlMappingJasaCatInteriorRumah[cleanUrlJasaKonsFinishingPost];
        pageNameElement.style.display = 'inline';
    }
}
  // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaCatInteriorRumah[cleanUrlJasaKonsFinishingPost]) {
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
			   /*
               {
                   "@type": "ListItem",
                   "position": 2,
                   "name": "Jasa Konstruksi",
                   "item": "https://www.betonjayareadymix.com/p/jasa-konstruksi.html"
               },
			   */
               {
                   "@type": "ListItem",
                   "position": 2,
                   "name": "Jasa Finishing",
                   "item": "https://www.betonjayareadymix.com/p/jasa-finishing.html"
               },
			   /*
               {
                   "@type": "ListItem",
                   "position": 4,
                   "name": "Jasa Finishing Bangunan",
                   "item": "https://www.betonjayareadymix.com/p/jasa-finishing-bangunan.html"
               },
               {
                   "@type": "ListItem",
                   "position": 5,
                   "name": "Jasa Finishing Interior",
                   "item": "https://www.betonjayareadymix.com/p/jasa-finishing-interior.html"
               },
			   */
               {
                   "@type": "ListItem",
                   "position": 3,
                   "name": "Jasa Cat Interior Rumah",
                   "item": "https://www.betonjayareadymix.com/p/jasa-cat-interior-rumah.html"
               },
               {
                   "@type": "ListItem",
                   "position": 4,
                   "name": urlMappingJasaCatInteriorRumah[cleanUrlJasaKonsFinishingPost],
                   "item": cleanUrlJasaKonsFinishingPost
               }
           ]
       };
       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
	
if (urlMappingJasaKeramikLantai[cleanUrlJasaKonsFinishingPost]) {
        restoreCondition('JasaFinishingBangunanPost');
        restoreCondition('JasaFinishingBangunanInteriorPost');
    
        restoreCondition('JasaGantiKeramikLantaiPost');
           
	// hapus elemen id DIV Lain SELAIN JasaKonsFinishingPost
	removeCondition('JasaDesInPost');
        removeCondition('ProdukInFurPost');
        removeCondition('ProdukKonsSaluranPost');
        removeCondition('ProdukKonsPembatasPost');
        removeCondition('ProdukKonsDindingModularPost');
        removeCondition('ProdukKonsPost');
        removeCondition('MaterialKonsStukturPost');
        removeCondition('MaterialKonsFasadPelapisEksteriorPost');
	removeCondition('MaterialKonsAtapPenutupPost');
        removeCondition('JasaKonsPerkuatanTanahLongsorPost');
        removeCondition('JasaKonsPondasiTanahPost');
        removeCondition('JasaKonsPembatasPost');
        removeCondition('JasaKonsPerbaikanPost');
        removeCondition('JasaKonsCuttingBetonPost');
        removeCondition('JasaKonsPengeboranPost');
        removeCondition('JasaKonsBongkarBangunanPost');
        removeCondition('JasaKonsStrukturPost');
        removeCondition('JasaKonsAlatKonstruksiPost');
        removeCondition('JasaKonsJalanPerkerasanPost');
     //   removeCondition('JasaKonsFinishingPost');

	 // hapus elemen id FINISHING STRUKTUR SEMUA NYA
	removeCondition('JasaFinishingDakBetonPost');
        removeCondition('JasaFinishingBetonExposePost');
        removeCondition('JasaPlesteranAcianDindingPost');
        removeCondition('JasaFinishingGroutingStrukturBetonPost');
        removeCondition('JasaPelapisanCoatingStrukturPost');
        removeCondition('JasaFinishingKolomdanBalokPost');
        removeCondition('JasaPelapisanWaterproofingStrukturPost');
        removeCondition('JasaFinishingLantaiBetonPost');
        removeCondition('JasaPelindungRetakStrukturPost'); 
	// hapus elemen id sub JasaFinishingBangunanEksteriorPost Semua
        removeCondition('JasaCatEksteriorRumahPost');
        removeCondition('JasaFinishingFasadEksteriorPost');
        removeCondition('JasaPelapisanAntiCuacaPost');
        removeCondition('JasaPelapisanDindingLuarPost');
        removeCondition('JasaFinishingTamanRumahPost');
        removeCondition('JasaPelapisanBatuAlamEksteriorPost');
        removeCondition('JasaPelapisanGentengDakPost');
      
         // hapus elemen id sub JasaFinishingBangunanInteriorPost Semua selain JasaDesainInteriorPost
	  
	    removeCondition('JasaEpoxyDindingPost');
	  removeCondition('JasaEpoxyLantaiPost');
        removeCondition('JasaInteriorFurnitureCustomePost');
        removeCondition('JasaInteriorFurniturePost');
        removeCondition('JasaFinishingInteriorModernPost');
        removeCondition('JasaCatInteriorRumahPost');
        removeCondition('JasaPasangWallpaperDindingPost');
        //removeCondition('JasaPasangLantaiVinylPost');
        //removeCondition('JasaPasangPlafonGypsumPost');
        removeCondition('JasaGantiLampuInteriorPost');
        removeCondition('JasaGantiKitchenSetPost');
        removeCondition('JasaFinishingInteriorMinimalisPost');
        removeCondition('JasaFinishingInteriorKlasikPost');
        
       
         // hapus elemen id FINISHING UTAMA lain NYA
        removeCondition('JasaFinishingBangunanEksteriorPost');
        removeCondition('JasaFinishingBangunanStrukturPost');

          // hapus elemen id Infrastruktur Semua
        removeCondition('JasaFinishingInfrastrukturPost');
        removeCondition('JasaFinishingInfrastrukturJalanPost');
        removeCondition('JasaFinishingInfrastrukturTrotoarPost');
        removeCondition('JasaFinishingInfrastrukturSaluranPost');
        removeCondition('JasaFinishingInfrastrukturStrukturPost');
        removeCondition('JasaFinishingInfrastrukturProteksiPost');

	 // hapus SEMUA SUB JASA FINSING INTERIOR MODERN 
	   removeCondition('JasaFinishingInteriorModernWpcPost');
	   removeCondition('JasaFinishingInteriorModernVinylPost');
	   removeCondition('JasaFinishingInteriorModernPlafonPost');
	   removeCondition('JasaFinishingInteriorModernPvcPost');
	
        JasaKonsFinishingPostLink.style.visibility = 'visible';
        JasaFinishingPostLink.style.visibility = 'visible';
        JasaFinishingBangunanPostLink.style.visibility = 'visible';
        //sub finishing bangunan
        JasaFinishingInteriorPostLink.style.visibility = 'visible';
        //sub finishing STRUKKTUR
        JasaGantiKeramikLantaiPostLink.style.visibility = 'visible';
        pageNameJasaKonsFinishingPostLink.textContent = urlMappingJasaKeramikLantai[cleanUrlJasaKonsFinishingPost];
    }
  // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaKeramikLantai[cleanUrlJasaKonsFinishingPost]) {
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
                   "name": "Jasa Finishing Bangunan",
                   "item": "https://www.betonjayareadymix.com/p/jasa-finishing-bangunan.html"
               },
               {
                   "@type": "ListItem",
                   "position": 5,
                   "name": "Jasa Finishing Interior",
                   "item": "https://www.betonjayareadymix.com/p/jasa-finishing-interior.html"
               },
               {
                   "@type": "ListItem",
                   "position": 6,
                   "name": "Jasa Keramik Lantai",
                   "item": "https://www.betonjayareadymix.com/p/jasa-keramik-lantai.html"
               },
               {
                   "@type": "ListItem",
                   "position": 7,
                   "name": urlMappingJasaKeramikLantai[cleanUrlJasaKonsFinishingPost],
                   "item": cleanUrlJasaKonsFinishingPost
               }
           ]
       };
       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }

	if (urlMappingJasaInteriordanFurnitureCustome[cleanUrlJasaKonsFinishingPost]) {
        restoreCondition('JasaFinishingBangunanPost');
        restoreCondition('JasaFinishingBangunanInteriorPost');
    
        restoreCondition('JasaInteriorFurnitureCustomePost');
           
	// hapus elemen id DIV Lain SELAIN JasaKonsFinishingPost
	removeCondition('JasaDesInPost');
        removeCondition('ProdukInFurPost');
        removeCondition('ProdukKonsSaluranPost');
        removeCondition('ProdukKonsPembatasPost');
        removeCondition('ProdukKonsDindingModularPost');
        removeCondition('ProdukKonsPost');
        removeCondition('MaterialKonsStukturPost');
        removeCondition('MaterialKonsFasadPelapisEksteriorPost');
	removeCondition('MaterialKonsAtapPenutupPost');
        removeCondition('JasaKonsPerkuatanTanahLongsorPost');
        removeCondition('JasaKonsPondasiTanahPost');
        removeCondition('JasaKonsPembatasPost');
        removeCondition('JasaKonsPerbaikanPost');
        removeCondition('JasaKonsCuttingBetonPost');
        removeCondition('JasaKonsPengeboranPost');
        removeCondition('JasaKonsBongkarBangunanPost');
        removeCondition('JasaKonsStrukturPost');
        removeCondition('JasaKonsAlatKonstruksiPost');
        removeCondition('JasaKonsJalanPerkerasanPost');
     //   removeCondition('JasaKonsFinishingPost');

	 // hapus elemen id FINISHING STRUKTUR SEMUA NYA
	removeCondition('JasaFinishingDakBetonPost');
        removeCondition('JasaFinishingBetonExposePost');
        removeCondition('JasaPlesteranAcianDindingPost');
        removeCondition('JasaFinishingGroutingStrukturBetonPost');
        removeCondition('JasaPelapisanCoatingStrukturPost');
        removeCondition('JasaFinishingKolomdanBalokPost');
        removeCondition('JasaPelapisanWaterproofingStrukturPost');
        removeCondition('JasaFinishingLantaiBetonPost');
        removeCondition('JasaPelindungRetakStrukturPost'); 
	// hapus elemen id sub JasaFinishingBangunanEksteriorPost Semua
        removeCondition('JasaCatEksteriorRumahPost');
        removeCondition('JasaFinishingFasadEksteriorPost');
        removeCondition('JasaPelapisanAntiCuacaPost');
        removeCondition('JasaPelapisanDindingLuarPost');
        removeCondition('JasaFinishingTamanRumahPost');
        removeCondition('JasaPelapisanBatuAlamEksteriorPost');
        removeCondition('JasaPelapisanGentengDakPost');
      
         // hapus elemen id sub JasaFinishingBangunanInteriorPost Semua selain JasaDesainInteriorPost
	  
	    removeCondition('JasaEpoxyDindingPost');
	  removeCondition('JasaEpoxyLantaiPost');
        removeCondition('JasaFinishingInteriorModernPost');
        //removeCondition('JasaInteriorFurniturePost');
        removeCondition('JasaGantiKeramikLantaiPost');
        removeCondition('JasaCatInteriorRumahPost');
        removeCondition('JasaPasangWallpaperDindingPost');
        //removeCondition('JasaPasangLantaiVinylPost');
        //removeCondition('JasaPasangPlafonGypsumPost');
        removeCondition('JasaGantiLampuInteriorPost');
        removeCondition('JasaGantiKitchenSetPost');
        removeCondition('JasaFinishingInteriorMinimalisPost');
        removeCondition('JasaFinishingInteriorKlasikPost');
        
       
         // hapus elemen id FINISHING UTAMA lain NYA
        removeCondition('JasaFinishingBangunanEksteriorPost');
        removeCondition('JasaFinishingBangunanStrukturPost');

          // hapus elemen id Infrastruktur Semua
        removeCondition('JasaFinishingInfrastrukturPost');
        removeCondition('JasaFinishingInfrastrukturJalanPost');
        removeCondition('JasaFinishingInfrastrukturTrotoarPost');
        removeCondition('JasaFinishingInfrastrukturSaluranPost');
        removeCondition('JasaFinishingInfrastrukturStrukturPost');
        removeCondition('JasaFinishingInfrastrukturProteksiPost');

		// hapus SEMUA SUB JASA FINSING INTERIOR MODERN 
	   removeCondition('JasaFinishingInteriorModernWpcPost');
	   removeCondition('JasaFinishingInteriorModernVinylPost');
	   removeCondition('JasaFinishingInteriorModernPlafonPost');
	   removeCondition('JasaFinishingInteriorModernPvcPost');
		
        JasaKonsFinishingPostLink.style.visibility = 'visible';
        JasaFinishingPostLink.style.visibility = 'visible';
        JasaFinishingBangunanPostLink.style.visibility = 'visible';
        //sub finishing bangunan
        JasaFinishingInteriorPostLink.style.visibility = 'visible';
        //sub finishing STRUKKTUR
        JasaInteriorFurnitureCustomePostLink.style.visibility = 'visible';
        pageNameJasaKonsFinishingPostLink.textContent = urlMappingJasaInteriordanFurnitureCustome[cleanUrlJasaKonsFinishingPost];
    }
  // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaInteriordanFurnitureCustome[cleanUrlJasaKonsFinishingPost]) {
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
                   "name": "Jasa Finishing Bangunan",
                   "item": "https://www.betonjayareadymix.com/p/jasa-finishing-bangunan.html"
               },
               {
                   "@type": "ListItem",
                   "position": 5,
                   "name": "Jasa Finishing Interior",
                   "item": "https://www.betonjayareadymix.com/p/jasa-finishing-interior.html"
               },
               {
                   "@type": "ListItem",
                   "position": 6,
                   "name": "Jasa Interior dan Furniture Custome",
                   "item": "https://www.betonjayareadymix.com/p/jasa-interior-dan-furniture-custom.html"
               },
               {
                   "@type": "ListItem",
                   "position": 7,
                   "name": urlMappingJasaInteriordanFurnitureCustome[cleanUrlJasaKonsFinishingPost],
                   "item": cleanUrlJasaKonsFinishingPost
               }
           ]
       };
       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
	
  if (urlMappingJasaFinishingInteriorModern[cleanUrlJasaKonsFinishingPost]) {
        restoreCondition('JasaFinishingBangunanPost');
        restoreCondition('JasaFinishingBangunanInteriorPost');
    
        restoreCondition('JasaFinishingInteriorModernPost');
           
	// hapus elemen id DIV Lain SELAIN JasaKonsFinishingPost
	removeCondition('JasaDesInPost');
        removeCondition('ProdukInFurPost');
        removeCondition('ProdukKonsSaluranPost');
        removeCondition('ProdukKonsPembatasPost');
        removeCondition('ProdukKonsDindingModularPost');
        removeCondition('ProdukKonsPost');
        removeCondition('MaterialKonsStukturPost');
        removeCondition('MaterialKonsFasadPelapisEksteriorPost');
	removeCondition('MaterialKonsAtapPenutupPost');
        removeCondition('JasaKonsPerkuatanTanahLongsorPost');
        removeCondition('JasaKonsPondasiTanahPost');
        removeCondition('JasaKonsPembatasPost');
        removeCondition('JasaKonsPerbaikanPost');
        removeCondition('JasaKonsCuttingBetonPost');
        removeCondition('JasaKonsPengeboranPost');
        removeCondition('JasaKonsBongkarBangunanPost');
        removeCondition('JasaKonsStrukturPost');
        removeCondition('JasaKonsAlatKonstruksiPost');
        removeCondition('JasaKonsJalanPerkerasanPost');
     //   removeCondition('JasaKonsFinishingPost');

	 // hapus elemen id FINISHING STRUKTUR SEMUA NYA
	removeCondition('JasaFinishingDakBetonPost');
        removeCondition('JasaFinishingBetonExposePost');
        removeCondition('JasaPlesteranAcianDindingPost');
        removeCondition('JasaFinishingGroutingStrukturBetonPost');
        removeCondition('JasaPelapisanCoatingStrukturPost');
        removeCondition('JasaFinishingKolomdanBalokPost');
        removeCondition('JasaPelapisanWaterproofingStrukturPost');
        removeCondition('JasaFinishingLantaiBetonPost');
        removeCondition('JasaPelindungRetakStrukturPost'); 
	// hapus elemen id sub JasaFinishingBangunanEksteriorPost Semua
        removeCondition('JasaCatEksteriorRumahPost');
        removeCondition('JasaFinishingFasadEksteriorPost');
        removeCondition('JasaPelapisanAntiCuacaPost');
        removeCondition('JasaPelapisanDindingLuarPost');
        removeCondition('JasaFinishingTamanRumahPost');
        removeCondition('JasaPelapisanBatuAlamEksteriorPost');
        removeCondition('JasaPelapisanGentengDakPost');
      
         // hapus elemen id sub JasaFinishingBangunanInteriorPost Semua selain JasaDesainInteriorPost
	  
	    removeCondition('JasaEpoxyDindingPost');
	  removeCondition('JasaEpoxyLantaiPost');
        removeCondition('JasaInteriorFurnitureCustomePost');
        removeCondition('JasaInteriorFurniturePost');
        removeCondition('JasaGantiKeramikLantaiPost');
        removeCondition('JasaCatInteriorRumahPost');
        removeCondition('JasaPasangWallpaperDindingPost');
        //removeCondition('JasaPasangLantaiVinylPost');
        //removeCondition('JasaPasangPlafonGypsumPost');
        removeCondition('JasaGantiLampuInteriorPost');
        removeCondition('JasaGantiKitchenSetPost');
        removeCondition('JasaFinishingInteriorMinimalisPost');
        removeCondition('JasaFinishingInteriorKlasikPost');
        
       
         // hapus elemen id FINISHING UTAMA lain NYA
        removeCondition('JasaFinishingBangunanEksteriorPost');
        removeCondition('JasaFinishingBangunanStrukturPost');

          // hapus elemen id Infrastruktur Semua
        removeCondition('JasaFinishingInfrastrukturPost');
        removeCondition('JasaFinishingInfrastrukturJalanPost');
        removeCondition('JasaFinishingInfrastrukturTrotoarPost');
        removeCondition('JasaFinishingInfrastrukturSaluranPost');
        removeCondition('JasaFinishingInfrastrukturStrukturPost');
        removeCondition('JasaFinishingInfrastrukturProteksiPost');

	   // hapus SEMUA SUB JASA FINSING INTERIOR MODERN 
	   removeCondition('JasaFinishingInteriorModernWpcPost');
	   removeCondition('JasaFinishingInteriorModernVinylPost');
	   removeCondition('JasaFinishingInteriorModernPlafonPost');
	   removeCondition('JasaFinishingInteriorModernPvcPost');
	  
        JasaKonsFinishingPostLink.style.visibility = 'visible';
        JasaFinishingPostLink.style.visibility = 'visible';
        JasaFinishingBangunanPostLink.style.visibility = 'visible';
        //sub finishing bangunan
        JasaFinishingInteriorPostLink.style.visibility = 'visible';
        //sub finishing STRUKKTUR
        JasaFinishingInteriorModernPostLink.style.visibility = 'visible';
        pageNameJasaKonsFinishingPostLink.textContent = urlMappingJasaFinishingInteriorModern[cleanUrlJasaKonsFinishingPost];
    }
  // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaFinishingInteriorModern[cleanUrlJasaKonsFinishingPost]) {
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
                   "name": "Jasa Finishing Bangunan",
                   "item": "https://www.betonjayareadymix.com/p/jasa-finishing-bangunan.html"
               },
               {
                   "@type": "ListItem",
                   "position": 5,
                   "name": "Jasa Finishing Interior",
                   "item": "https://www.betonjayareadymix.com/p/jasa-finishing-interior.html"
               },
               {
                   "@type": "ListItem",
                   "position": 6,
                   "name": "Jasa Finishing Interior Modern",
                   "item": "https://www.betonjayareadymix.com/p/jasa-finishing-interior-modern.html"
               },
               {
                   "@type": "ListItem",
                   "position": 7,
                   "name": urlMappingJasaFinishingInteriorModern[cleanUrlJasaKonsFinishingPost],
                   "item": cleanUrlJasaKonsFinishingPost
               }
           ]
       };
       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
  //Sub JASA FINISHING INTERIOR MODERN
   if (urlMappingJasaFinishingInteriorModernWpc[cleanUrlJasaKonsFinishingPost]) {
        restoreCondition('JasaFinishingBangunanPost');
        restoreCondition('JasaFinishingBangunanInteriorPost');
    
        restoreCondition('JasaFinishingInteriorModernPost');
        restoreCondition('JasaFinishingInteriorModernWpcPost');
          
	// hapus elemen id DIV Lain SELAIN JasaKonsFinishingPost
	removeCondition('JasaDesInPost');
        removeCondition('ProdukInFurPost');
        removeCondition('ProdukKonsSaluranPost');
        removeCondition('ProdukKonsPembatasPost');
        removeCondition('ProdukKonsDindingModularPost');
        removeCondition('ProdukKonsPost');
        removeCondition('MaterialKonsStukturPost');
        removeCondition('MaterialKonsFasadPelapisEksteriorPost');
	removeCondition('MaterialKonsAtapPenutupPost');
        removeCondition('JasaKonsPerkuatanTanahLongsorPost');
        removeCondition('JasaKonsPondasiTanahPost');
        removeCondition('JasaKonsPembatasPost');
        removeCondition('JasaKonsPerbaikanPost');
        removeCondition('JasaKonsCuttingBetonPost');
        removeCondition('JasaKonsPengeboranPost');
        removeCondition('JasaKonsBongkarBangunanPost');
        removeCondition('JasaKonsStrukturPost');
        removeCondition('JasaKonsAlatKonstruksiPost');
        removeCondition('JasaKonsJalanPerkerasanPost');
     //   removeCondition('JasaKonsFinishingPost');

	// hapus SEMUA SUB JASA FINSING INTERIOR MODERN KECUALI JasaFinishingInteriorModernWpcPost
	   //removeCondition('JasaFinishingInteriorModernWpcPost');
	   removeCondition('JasaFinishingInteriorModernVinylPost');
	   removeCondition('JasaFinishingInteriorModernPlafonPost');
	   removeCondition('JasaFinishingInteriorModernPvcPost');
	   
	 // hapus elemen id FINISHING STRUKTUR SEMUA NYA
	removeCondition('JasaFinishingDakBetonPost');
        removeCondition('JasaFinishingBetonExposePost');
        removeCondition('JasaPlesteranAcianDindingPost');
        removeCondition('JasaFinishingGroutingStrukturBetonPost');
        removeCondition('JasaPelapisanCoatingStrukturPost');
        removeCondition('JasaFinishingKolomdanBalokPost');
        removeCondition('JasaPelapisanWaterproofingStrukturPost');
        removeCondition('JasaFinishingLantaiBetonPost');
        removeCondition('JasaPelindungRetakStrukturPost'); 
	// hapus elemen id sub JasaFinishingBangunanEksteriorPost Semua
        removeCondition('JasaCatEksteriorRumahPost');
        removeCondition('JasaFinishingFasadEksteriorPost');
        removeCondition('JasaPelapisanAntiCuacaPost');
        removeCondition('JasaPelapisanDindingLuarPost');
        removeCondition('JasaFinishingTamanRumahPost');
        removeCondition('JasaPelapisanBatuAlamEksteriorPost');
        removeCondition('JasaPelapisanGentengDakPost');
      
         // hapus elemen id sub JasaFinishingBangunanInteriorPost Semua selain JasaDesainInteriorPost
	  
	    removeCondition('JasaEpoxyDindingPost');
	  removeCondition('JasaEpoxyLantaiPost');
        removeCondition('JasaInteriorFurnitureCustomePost');
        removeCondition('JasaInteriorFurniturePost');
        removeCondition('JasaGantiKeramikLantaiPost');
        removeCondition('JasaCatInteriorRumahPost');
        removeCondition('JasaPasangWallpaperDindingPost');
        //removeCondition('JasaPasangLantaiVinylPost');
        //removeCondition('JasaPasangPlafonGypsumPost');
        removeCondition('JasaGantiLampuInteriorPost');
        removeCondition('JasaGantiKitchenSetPost');
        removeCondition('JasaFinishingInteriorMinimalisPost');
        removeCondition('JasaFinishingInteriorKlasikPost');
        
       
         // hapus elemen id FINISHING UTAMA lain NYA
        removeCondition('JasaFinishingBangunanEksteriorPost');
        removeCondition('JasaFinishingBangunanStrukturPost');

          // hapus elemen id Infrastruktur Semua
        removeCondition('JasaFinishingInfrastrukturPost');
        removeCondition('JasaFinishingInfrastrukturJalanPost');
        removeCondition('JasaFinishingInfrastrukturTrotoarPost');
        removeCondition('JasaFinishingInfrastrukturSaluranPost');
        removeCondition('JasaFinishingInfrastrukturStrukturPost');
        removeCondition('JasaFinishingInfrastrukturProteksiPost');
       
        JasaKonsFinishingPostLink.style.visibility = 'visible';
        JasaFinishingPostLink.style.visibility = 'visible';
        JasaFinishingBangunanPostLink.style.visibility = 'visible';
        //sub finishing bangunan
        JasaFinishingInteriorPostLink.style.visibility = 'visible';
        //sub finishing STRUKKTUR
        JasaFinishingInteriorModernPostLink.style.visibility = 'visible';
	    JasaFinishingInteriorModernWpcPostLink.style.visibility = 'visible';
        pageNameJasaKonsFinishingPostLink.textContent = urlMappingJasaFinishingInteriorModernWpc[cleanUrlJasaKonsFinishingPost];
    }
  // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaFinishingInteriorModernWpc[cleanUrlJasaKonsFinishingPost]) {
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
                   "name": "Jasa Finishing Bangunan",
                   "item": "https://www.betonjayareadymix.com/p/jasa-finishing-bangunan.html"
               },
               {
                   "@type": "ListItem",
                   "position": 5,
                   "name": "Jasa Finishing Interior",
                   "item": "https://www.betonjayareadymix.com/p/jasa-finishing-interior.html"
               },
               {
                   "@type": "ListItem",
                   "position": 6,
                   "name": "Jasa Finishing Interior Modern",
                   "item": "https://www.betonjayareadymix.com/p/jasa-finishing-interior-modern.html"
               },
			   {
                   "@type": "ListItem",
                   "position": 7,
                   "name": "Jasa Pasang WPC",
                   "item": "https://www.betonjayareadymix.com/2020/02/jasa-pasang-wpc.html"
               },
               {
                   "@type": "ListItem",
                   "position": 8,
                   "name": urlMappingJasaFinishingInteriorModernWpc[cleanUrlJasaKonsFinishingPost],
                   "item": cleanUrlJasaKonsFinishingPost
               }
           ]
       };
       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
	
    if (urlMappingJasaFinishingInteriorModernVinyl[cleanUrlJasaKonsFinishingPost]) {
        restoreCondition('JasaFinishingBangunanPost');
        restoreCondition('JasaFinishingBangunanInteriorPost');
    
        restoreCondition('JasaFinishingInteriorModernPost');
        restoreCondition('JasaFinishingInteriorModernVinylPost');
          
	// hapus elemen id DIV Lain SELAIN JasaKonsFinishingPost
	removeCondition('JasaDesInPost');
        removeCondition('ProdukInFurPost');
        removeCondition('ProdukKonsSaluranPost');
        removeCondition('ProdukKonsPembatasPost');
        removeCondition('ProdukKonsDindingModularPost');
        removeCondition('ProdukKonsPost');
        removeCondition('MaterialKonsStukturPost');
        removeCondition('MaterialKonsFasadPelapisEksteriorPost');
	removeCondition('MaterialKonsAtapPenutupPost');
        removeCondition('JasaKonsPerkuatanTanahLongsorPost');
        removeCondition('JasaKonsPondasiTanahPost');
        removeCondition('JasaKonsPembatasPost');
        removeCondition('JasaKonsPerbaikanPost');
        removeCondition('JasaKonsCuttingBetonPost');
        removeCondition('JasaKonsPengeboranPost');
        removeCondition('JasaKonsBongkarBangunanPost');
        removeCondition('JasaKonsStrukturPost');
        removeCondition('JasaKonsAlatKonstruksiPost');
        removeCondition('JasaKonsJalanPerkerasanPost');
     //   removeCondition('JasaKonsFinishingPost');

	// hapus SEMUA SUB JASA FINSING INTERIOR MODERN KECUALI JasaFinishingInteriorModernWpcPost
	   removeCondition('JasaFinishingInteriorModernWpcPost');
	   //removeCondition('JasaFinishingInteriorModernVinylPost');
	   removeCondition('JasaFinishingInteriorModernPlafonPost');
	   removeCondition('JasaFinishingInteriorModernPvcPost');
	   
	 // hapus elemen id FINISHING STRUKTUR SEMUA NYA
	removeCondition('JasaFinishingDakBetonPost');
        removeCondition('JasaFinishingBetonExposePost');
        removeCondition('JasaPlesteranAcianDindingPost');
        removeCondition('JasaFinishingGroutingStrukturBetonPost');
        removeCondition('JasaPelapisanCoatingStrukturPost');
        removeCondition('JasaFinishingKolomdanBalokPost');
        removeCondition('JasaPelapisanWaterproofingStrukturPost');
        removeCondition('JasaFinishingLantaiBetonPost');
        removeCondition('JasaPelindungRetakStrukturPost'); 
	// hapus elemen id sub JasaFinishingBangunanEksteriorPost Semua
        removeCondition('JasaCatEksteriorRumahPost');
        removeCondition('JasaFinishingFasadEksteriorPost');
        removeCondition('JasaPelapisanAntiCuacaPost');
        removeCondition('JasaPelapisanDindingLuarPost');
        removeCondition('JasaFinishingTamanRumahPost');
        removeCondition('JasaPelapisanBatuAlamEksteriorPost');
        removeCondition('JasaPelapisanGentengDakPost');
      
         // hapus elemen id sub JasaFinishingBangunanInteriorPost Semua selain JasaDesainInteriorPost
	  
	    removeCondition('JasaEpoxyDindingPost');
	  removeCondition('JasaEpoxyLantaiPost');
        removeCondition('JasaInteriorFurnitureCustomePost');
        removeCondition('JasaInteriorFurniturePost');
        removeCondition('JasaGantiKeramikLantaiPost');
        removeCondition('JasaCatInteriorRumahPost');
        removeCondition('JasaPasangWallpaperDindingPost');
        //removeCondition('JasaPasangLantaiVinylPost');
        //removeCondition('JasaPasangPlafonGypsumPost');
        removeCondition('JasaGantiLampuInteriorPost');
        removeCondition('JasaGantiKitchenSetPost');
        removeCondition('JasaFinishingInteriorMinimalisPost');
        removeCondition('JasaFinishingInteriorKlasikPost');
        
       
         // hapus elemen id FINISHING UTAMA lain NYA
        removeCondition('JasaFinishingBangunanEksteriorPost');
        removeCondition('JasaFinishingBangunanStrukturPost');

          // hapus elemen id Infrastruktur Semua
        removeCondition('JasaFinishingInfrastrukturPost');
        removeCondition('JasaFinishingInfrastrukturJalanPost');
        removeCondition('JasaFinishingInfrastrukturTrotoarPost');
        removeCondition('JasaFinishingInfrastrukturSaluranPost');
        removeCondition('JasaFinishingInfrastrukturStrukturPost');
        removeCondition('JasaFinishingInfrastrukturProteksiPost');
       
        JasaKonsFinishingPostLink.style.visibility = 'visible';
        JasaFinishingPostLink.style.visibility = 'visible';
        JasaFinishingBangunanPostLink.style.visibility = 'visible';
        //sub finishing bangunan
        JasaFinishingInteriorPostLink.style.visibility = 'visible';
        //sub finishing STRUKKTUR
        JasaFinishingInteriorModernPostLink.style.visibility = 'visible';
	    JasaFinishingInteriorModernVinylPostLink.style.visibility = 'visible';
        pageNameJasaKonsFinishingPostLink.textContent = urlMappingJasaFinishingInteriorModernVinyl[cleanUrlJasaKonsFinishingPost];
    }
  // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaFinishingInteriorModernVinyl[cleanUrlJasaKonsFinishingPost]) {
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
                   "name": "Jasa Finishing Bangunan",
                   "item": "https://www.betonjayareadymix.com/p/jasa-finishing-bangunan.html"
               },
               {
                   "@type": "ListItem",
                   "position": 5,
                   "name": "Jasa Finishing Interior",
                   "item": "https://www.betonjayareadymix.com/p/jasa-finishing-interior.html"
               },
               {
                   "@type": "ListItem",
                   "position": 6,
                   "name": "Jasa Finishing Interior Modern",
                   "item": "https://www.betonjayareadymix.com/p/jasa-finishing-interior-modern.html"
               },
			   {
                   "@type": "ListItem",
                   "position": 7,
                   "name": "Jasa Pasang Vinyl",
                   "item": "https://www.betonjayareadymix.com/2020/02/jasa-pasang-vinyl.html"
               },
               {
                   "@type": "ListItem",
                   "position": 8,
                   "name": urlMappingJasaFinishingInteriorModernVinyl[cleanUrlJasaKonsFinishingPost],
                   "item": cleanUrlJasaKonsFinishingPost
               }
           ]
       };
       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
	
   if (urlMappingJasaFinishingInteriorModernPlafon[cleanUrlJasaKonsFinishingPost]) {
        restoreCondition('JasaFinishingBangunanPost');
        restoreCondition('JasaFinishingBangunanInteriorPost');
    
        restoreCondition('JasaFinishingInteriorModernPost');
        restoreCondition('JasaFinishingInteriorModernPlafonPost');
          
	// hapus elemen id DIV Lain SELAIN JasaKonsFinishingPost
	removeCondition('JasaDesInPost');
        removeCondition('ProdukInFurPost');
        removeCondition('ProdukKonsSaluranPost');
        removeCondition('ProdukKonsPembatasPost');
        removeCondition('ProdukKonsDindingModularPost');
        removeCondition('ProdukKonsPost');
        removeCondition('MaterialKonsStukturPost');
        removeCondition('MaterialKonsFasadPelapisEksteriorPost');
	removeCondition('MaterialKonsAtapPenutupPost');
        removeCondition('JasaKonsPerkuatanTanahLongsorPost');
        removeCondition('JasaKonsPondasiTanahPost');
        removeCondition('JasaKonsPembatasPost');
        removeCondition('JasaKonsPerbaikanPost');
        removeCondition('JasaKonsCuttingBetonPost');
        removeCondition('JasaKonsPengeboranPost');
        removeCondition('JasaKonsBongkarBangunanPost');
        removeCondition('JasaKonsStrukturPost');
        removeCondition('JasaKonsAlatKonstruksiPost');
        removeCondition('JasaKonsJalanPerkerasanPost');
     //   removeCondition('JasaKonsFinishingPost');

	// hapus SEMUA SUB JASA FINSING INTERIOR MODERN KECUALI JasaFinishingInteriorModernPlafonPost
	   removeCondition('JasaFinishingInteriorModernWpcPost');
	   removeCondition('JasaFinishingInteriorModernVinylPost');
	   //removeCondition('JasaFinishingInteriorModernPlafonPost');
	   removeCondition('JasaFinishingInteriorModernPvcPost');
	   
	 // hapus elemen id FINISHING STRUKTUR SEMUA NYA
	removeCondition('JasaFinishingDakBetonPost');
        removeCondition('JasaFinishingBetonExposePost');
        removeCondition('JasaPlesteranAcianDindingPost');
        removeCondition('JasaFinishingGroutingStrukturBetonPost');
        removeCondition('JasaPelapisanCoatingStrukturPost');
        removeCondition('JasaFinishingKolomdanBalokPost');
        removeCondition('JasaPelapisanWaterproofingStrukturPost');
        removeCondition('JasaFinishingLantaiBetonPost');
        removeCondition('JasaPelindungRetakStrukturPost'); 
	// hapus elemen id sub JasaFinishingBangunanEksteriorPost Semua
        removeCondition('JasaCatEksteriorRumahPost');
        removeCondition('JasaFinishingFasadEksteriorPost');
        removeCondition('JasaPelapisanAntiCuacaPost');
        removeCondition('JasaPelapisanDindingLuarPost');
        removeCondition('JasaFinishingTamanRumahPost');
        removeCondition('JasaPelapisanBatuAlamEksteriorPost');
        removeCondition('JasaPelapisanGentengDakPost');
      
         // hapus elemen id sub JasaFinishingBangunanInteriorPost Semua selain JasaDesainInteriorPost
	  
	    removeCondition('JasaEpoxyDindingPost');
	  removeCondition('JasaEpoxyLantaiPost');
        removeCondition('JasaInteriorFurnitureCustomePost');
        removeCondition('JasaInteriorFurniturePost');
        removeCondition('JasaGantiKeramikLantaiPost');
        removeCondition('JasaCatInteriorRumahPost');
        removeCondition('JasaPasangWallpaperDindingPost');
        //removeCondition('JasaPasangLantaiVinylPost');
        //removeCondition('JasaPasangPlafonGypsumPost');
        removeCondition('JasaGantiLampuInteriorPost');
        removeCondition('JasaGantiKitchenSetPost');
        removeCondition('JasaFinishingInteriorMinimalisPost');
        removeCondition('JasaFinishingInteriorKlasikPost');
        
       
         // hapus elemen id FINISHING UTAMA lain NYA
        removeCondition('JasaFinishingBangunanEksteriorPost');
        removeCondition('JasaFinishingBangunanStrukturPost');

          // hapus elemen id Infrastruktur Semua
        removeCondition('JasaFinishingInfrastrukturPost');
        removeCondition('JasaFinishingInfrastrukturJalanPost');
        removeCondition('JasaFinishingInfrastrukturTrotoarPost');
        removeCondition('JasaFinishingInfrastrukturSaluranPost');
        removeCondition('JasaFinishingInfrastrukturStrukturPost');
        removeCondition('JasaFinishingInfrastrukturProteksiPost');
       
        JasaKonsFinishingPostLink.style.visibility = 'visible';
        JasaFinishingPostLink.style.visibility = 'visible';
        JasaFinishingBangunanPostLink.style.visibility = 'visible';
        //sub finishing bangunan
        JasaFinishingInteriorPostLink.style.visibility = 'visible';
        //sub finishing STRUKKTUR
        JasaFinishingInteriorModernPostLink.style.visibility = 'visible';
	    JasaFinishingInteriorModernPlafonPostLink.style.visibility = 'visible';
        pageNameJasaKonsFinishingPostLink.textContent = urlMappingJasaFinishingInteriorModernPlafon[cleanUrlJasaKonsFinishingPost];
    }
  // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaFinishingInteriorModernPlafon[cleanUrlJasaKonsFinishingPost]) {
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
                   "name": "Jasa Finishing Bangunan",
                   "item": "https://www.betonjayareadymix.com/p/jasa-finishing-bangunan.html"
               },
               {
                   "@type": "ListItem",
                   "position": 5,
                   "name": "Jasa Finishing Interior",
                   "item": "https://www.betonjayareadymix.com/p/jasa-finishing-interior.html"
               },
               {
                   "@type": "ListItem",
                   "position": 6,
                   "name": "Jasa Finishing Interior Modern",
                   "item": "https://www.betonjayareadymix.com/p/jasa-finishing-interior-modern.html"
               },
			   {
                   "@type": "ListItem",
                   "position": 7,
                   "name": "Jasa Pasang Plafon",
                   "item": "https://www.betonjayareadymix.com/2020/02/jasa-pasang-plafon.html"
               },
               {
                   "@type": "ListItem",
                   "position": 8,
                   "name": urlMappingJasaFinishingInteriorModernPlafon[cleanUrlJasaKonsFinishingPost],
                   "item": cleanUrlJasaKonsFinishingPost
               }
           ]
       };
       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
	
   if (urlMappingJasaFinishingInteriorModernPvc[cleanUrlJasaKonsFinishingPost]) {
        restoreCondition('JasaFinishingBangunanPost');
        restoreCondition('JasaFinishingBangunanInteriorPost');
    
        restoreCondition('JasaFinishingInteriorModernPost');
        restoreCondition('JasaFinishingInteriorModernPvcPost');
          
	// hapus elemen id DIV Lain SELAIN JasaKonsFinishingPost
	removeCondition('JasaDesInPost');
        removeCondition('ProdukInFurPost');
        removeCondition('ProdukKonsSaluranPost');
        removeCondition('ProdukKonsPembatasPost');
        removeCondition('ProdukKonsDindingModularPost');
        removeCondition('ProdukKonsPost');
        removeCondition('MaterialKonsStukturPost');
        removeCondition('MaterialKonsFasadPelapisEksteriorPost');
	removeCondition('MaterialKonsAtapPenutupPost');
        removeCondition('JasaKonsPerkuatanTanahLongsorPost');
        removeCondition('JasaKonsPondasiTanahPost');
        removeCondition('JasaKonsPembatasPost');
        removeCondition('JasaKonsPerbaikanPost');
        removeCondition('JasaKonsCuttingBetonPost');
        removeCondition('JasaKonsPengeboranPost');
        removeCondition('JasaKonsBongkarBangunanPost');
        removeCondition('JasaKonsStrukturPost');
        removeCondition('JasaKonsAlatKonstruksiPost');
        removeCondition('JasaKonsJalanPerkerasanPost');
     //   removeCondition('JasaKonsFinishingPost');

	// hapus SEMUA SUB JASA FINSING INTERIOR MODERN KECUALI JasaFinishingInteriorModernPvcPost
	   removeCondition('JasaFinishingInteriorModernWpcPost');
	   removeCondition('JasaFinishingInteriorModernVinylPost');
	   removeCondition('JasaFinishingInteriorModernPlafonPost');
	   //removeCondition('JasaFinishingInteriorModernPvcPost');
	   
	 // hapus elemen id FINISHING STRUKTUR SEMUA NYA
	removeCondition('JasaFinishingDakBetonPost');
        removeCondition('JasaFinishingBetonExposePost');
        removeCondition('JasaPlesteranAcianDindingPost');
        removeCondition('JasaFinishingGroutingStrukturBetonPost');
        removeCondition('JasaPelapisanCoatingStrukturPost');
        removeCondition('JasaFinishingKolomdanBalokPost');
        removeCondition('JasaPelapisanWaterproofingStrukturPost');
        removeCondition('JasaFinishingLantaiBetonPost');
        removeCondition('JasaPelindungRetakStrukturPost'); 
	// hapus elemen id sub JasaFinishingBangunanEksteriorPost Semua
        removeCondition('JasaCatEksteriorRumahPost');
        removeCondition('JasaFinishingFasadEksteriorPost');
        removeCondition('JasaPelapisanAntiCuacaPost');
        removeCondition('JasaPelapisanDindingLuarPost');
        removeCondition('JasaFinishingTamanRumahPost');
        removeCondition('JasaPelapisanBatuAlamEksteriorPost');
        removeCondition('JasaPelapisanGentengDakPost');
      
         // hapus elemen id sub JasaFinishingBangunanInteriorPost Semua selain JasaDesainInteriorPost
	  
	    removeCondition('JasaEpoxyDindingPost');
	  removeCondition('JasaEpoxyLantaiPost');
        removeCondition('JasaInteriorFurnitureCustomePost');
        removeCondition('JasaInteriorFurniturePost');
        removeCondition('JasaGantiKeramikLantaiPost');
        removeCondition('JasaCatInteriorRumahPost');
        removeCondition('JasaPasangWallpaperDindingPost');
        //removeCondition('JasaPasangLantaiVinylPost');
        //removeCondition('JasaPasangPlafonGypsumPost');
        removeCondition('JasaGantiLampuInteriorPost');
        removeCondition('JasaGantiKitchenSetPost');
        removeCondition('JasaFinishingInteriorMinimalisPost');
        removeCondition('JasaFinishingInteriorKlasikPost');
        
       
         // hapus elemen id FINISHING UTAMA lain NYA
        removeCondition('JasaFinishingBangunanEksteriorPost');
        removeCondition('JasaFinishingBangunanStrukturPost');

          // hapus elemen id Infrastruktur Semua
        removeCondition('JasaFinishingInfrastrukturPost');
        removeCondition('JasaFinishingInfrastrukturJalanPost');
        removeCondition('JasaFinishingInfrastrukturTrotoarPost');
        removeCondition('JasaFinishingInfrastrukturSaluranPost');
        removeCondition('JasaFinishingInfrastrukturStrukturPost');
        removeCondition('JasaFinishingInfrastrukturProteksiPost');
       
        JasaKonsFinishingPostLink.style.visibility = 'visible';
        JasaFinishingPostLink.style.visibility = 'visible';
        JasaFinishingBangunanPostLink.style.visibility = 'visible';
        //sub finishing bangunan
        JasaFinishingInteriorPostLink.style.visibility = 'visible';
        //sub finishing STRUKKTUR
        JasaFinishingInteriorModernPostLink.style.visibility = 'visible';
	    JasaFinishingInteriorModernPvcPostLink.style.visibility = 'visible';
        pageNameJasaKonsFinishingPostLink.textContent = urlMappingJasaFinishingInteriorModernPvc[cleanUrlJasaKonsFinishingPost];
    }
  // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaFinishingInteriorModernPvc[cleanUrlJasaKonsFinishingPost]) {
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
                   "name": "Jasa Finishing Bangunan",
                   "item": "https://www.betonjayareadymix.com/p/jasa-finishing-bangunan.html"
               },
               {
                   "@type": "ListItem",
                   "position": 5,
                   "name": "Jasa Finishing Interior",
                   "item": "https://www.betonjayareadymix.com/p/jasa-finishing-interior.html"
               },
               {
                   "@type": "ListItem",
                   "position": 6,
                   "name": "Jasa Finishing Interior Modern",
                   "item": "https://www.betonjayareadymix.com/p/jasa-finishing-interior-modern.html"
               },
			   {
                   "@type": "ListItem",
                   "position": 7,
                   "name": "Jasa Pasang Pvc",
                   "item": "https://www.betonjayareadymix.com/2020/02/jasa-pasang-pvc.html"
               },
               {
                   "@type": "ListItem",
                   "position": 8,
                   "name": urlMappingJasaFinishingInteriorModernPvc[cleanUrlJasaKonsFinishingPost],
                   "item": cleanUrlJasaKonsFinishingPost
               }
           ]
       };
       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
	
	// AKHIR SUB FINISHING INTERIOR MODERN
//AKHIR FINISHING INTERIOR

//SUB JasaFinishingBangunanEksteriorPost
if (urlMappingJasaFinishingFasadEksterior[cleanUrlJasaKonsFinishingPost]) {
        restoreCondition('JasaFinishingBangunanPost');
        restoreCondition('JasaFinishingBangunanEksteriorPost');
    
        restoreCondition('JasaFinishingFasadEksteriorPost');
           
	// hapus elemen id DIV Lain SELAIN JasaKonsFinishingPost
	removeCondition('JasaDesInPost');
        removeCondition('ProdukInFurPost');
        removeCondition('ProdukKonsSaluranPost');
        removeCondition('ProdukKonsPembatasPost');
        removeCondition('ProdukKonsDindingModularPost');
        removeCondition('ProdukKonsPost');
        removeCondition('MaterialKonsStukturPost');
        removeCondition('MaterialKonsFasadPelapisEksteriorPost');
	removeCondition('MaterialKonsAtapPenutupPost');
        removeCondition('JasaKonsPerkuatanTanahLongsorPost');
        removeCondition('JasaKonsPondasiTanahPost');
        removeCondition('JasaKonsPembatasPost');
        removeCondition('JasaKonsPerbaikanPost');
        removeCondition('JasaKonsCuttingBetonPost');
        removeCondition('JasaKonsPengeboranPost');
        removeCondition('JasaKonsBongkarBangunanPost');
        removeCondition('JasaKonsStrukturPost');
        removeCondition('JasaKonsAlatKonstruksiPost');
        removeCondition('JasaKonsJalanPerkerasanPost');
     //   removeCondition('JasaKonsFinishingPost');

	 // hapus elemen id FINISHING STRUKTUR SEMUA NYA
	removeCondition('JasaFinishingDakBetonPost');
        removeCondition('JasaFinishingBetonExposePost');
        removeCondition('JasaPlesteranAcianDindingPost');
        removeCondition('JasaFinishingGroutingStrukturBetonPost');
        removeCondition('JasaPelapisanCoatingStrukturPost');
        removeCondition('JasaFinishingKolomdanBalokPost');
        removeCondition('JasaPelapisanWaterproofingStrukturPost');
        removeCondition('JasaFinishingLantaiBetonPost');
        removeCondition('JasaPelindungRetakStrukturPost'); 
	// hapus elemen id sub JasaFinishingBangunanEksteriorPost Semua KECUALI JasaFinishingFasadEksteriorPost
        removeCondition('JasaCatEksteriorRumahPost');
        //removeCondition('');
        removeCondition('JasaPelapisanAntiCuacaPost');
        removeCondition('JasaPelapisanDindingLuarPost');
        removeCondition('JasaFinishingTamanRumahPost');
        removeCondition('JasaPelapisanBatuAlamEksteriorPost');
        removeCondition('JasaPelapisanGentengDakPost');
      
         // hapus elemen id sub JasaFinishingBangunanInteriorPost SEMUA
	   
	    removeCondition('JasaEpoxyDindingPost');
	removeCondition('JasaEpoxyLantaiPost');
        removeCondition('JasaInteriorFurnitureCustomePost');
        removeCondition('JasaGantiKeramikLantaiPost');
        removeCondition('JasaCatInteriorRumahPost');
        removeCondition('JasaPasangWallpaperDindingPost');
        //removeCondition('JasaPasangLantaiVinylPost');
        //removeCondition('JasaPasangPlafonGypsumPost');
        removeCondition('JasaGantiLampuInteriorPost');
        removeCondition('JasaGantiKitchenSetPost');
        removeCondition('JasaFinishingInteriorMinimalisPost');
        removeCondition('JasaFinishingInteriorKlasikPost');
        removeCondition('JasaFinishingInteriorModernPost');
       
         // hapus elemen id FINISHING UTAMA lain NYA
        removeCondition('JasaFinishingBangunanInteriorPost');
        removeCondition('JasaFinishingBangunanStrukturPost');

          // hapus elemen id Infrastruktur Semua
        removeCondition('JasaFinishingInfrastrukturPost');
        removeCondition('JasaFinishingInfrastrukturJalanPost');
        removeCondition('JasaFinishingInfrastrukturTrotoarPost');
        removeCondition('JasaFinishingInfrastrukturSaluranPost');
        removeCondition('JasaFinishingInfrastrukturStrukturPost');
        removeCondition('JasaFinishingInfrastrukturProteksiPost');

	 // hapus SEMUA SUB JASA FINSING INTERIOR MODERN 
	   removeCondition('JasaFinishingInteriorModernWpcPost');
	   removeCondition('JasaFinishingInteriorModernVinylPost');
	   removeCondition('JasaFinishingInteriorModernPlafonPost');
	   removeCondition('JasaFinishingInteriorModernPvcPost');
	
        JasaKonsFinishingPostLink.style.visibility = 'visible';
        JasaFinishingPostLink.style.visibility = 'visible';
        JasaFinishingBangunanPostLink.style.visibility = 'visible';
        //JasaFinishingBangunanEksteriorPost
        JasaFinishingBangunanEksteriorPostLink.style.visibility = 'visible';
        //JasaFinishingFasadEksteriorPost
        JasaFinishingFasadEksteriorPostLink.style.visibility = 'visible';
	//pageNameJasaKonsFinishingPostLink.style.visibility = 'visible';
        pageNameJasaKonsFinishingPostLink.textContent = urlMappingJasaFinishingFasadEksterior[cleanUrlJasaKonsFinishingPost];
    }

  // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaFinishingFasadEksterior[cleanUrlJasaKonsFinishingPost]) {
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
                   "name": "Jasa Finishing Bangunan",
                   "item": "https://www.betonjayareadymix.com/p/jasa-finishing-bangunan.html"
               },
               {
                   "@type": "ListItem",
                   "position": 5,
                   "name": "Jasa Finishing Eksterior",
                   "item": "https://www.betonjayareadymix.com/p/jasa-finishing-eksterior.html"
               },
               {
                   "@type": "ListItem",
                   "position": 6,
                   "name": "Jasa Finishing Fasad Eksterior",
                   "item": "https://www.betonjayareadymix.com/p/jasa-finishing-fasad-eksterior.html"
               },
               {
                   "@type": "ListItem",
                   "position": 7,
                   "name": urlMappingJasaFinishingFasadEksterior[cleanUrlJasaKonsFinishingPost],
                   "item": cleanUrlJasaKonsFinishingPost
               }
           ]
       };
       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
if (urlMappingJasaFinishingTamanRumahFromJasaFinishingEksteriorSub2MoneyPage[cleanUrlJasaKonsFinishingPost]) {
        restoreCondition('JasaFinishingBangunanPost');
        restoreCondition('JasaFinishingBangunanEksteriorPost');
    
        restoreCondition('JasaFinishingTamanRumahPost');
           
	// hapus elemen id DIV Lain SELAIN JasaKonsFinishingPost
	removeCondition('JasaDesInPost');
        removeCondition('ProdukInFurPost');
        removeCondition('ProdukKonsSaluranPost');
        removeCondition('ProdukKonsPembatasPost');
        removeCondition('ProdukKonsDindingModularPost');
        removeCondition('ProdukKonsPost');
        removeCondition('MaterialKonsStukturPost');
        removeCondition('MaterialKonsFasadPelapisEksteriorPost');
	removeCondition('MaterialKonsAtapPenutupPost');
        removeCondition('JasaKonsPerkuatanTanahLongsorPost');
        removeCondition('JasaKonsPondasiTanahPost');
        removeCondition('JasaKonsPembatasPost');
        removeCondition('JasaKonsPerbaikanPost');
        removeCondition('JasaKonsCuttingBetonPost');
        removeCondition('JasaKonsPengeboranPost');
        removeCondition('JasaKonsBongkarBangunanPost');
        removeCondition('JasaKonsStrukturPost');
        removeCondition('JasaKonsAlatKonstruksiPost');
        removeCondition('JasaKonsJalanPerkerasanPost');
     //   removeCondition('JasaKonsFinishingPost');

	 // hapus elemen id FINISHING STRUKTUR SEMUA NYA
	removeCondition('JasaFinishingDakBetonPost');
        removeCondition('JasaFinishingBetonExposePost');
        removeCondition('JasaPlesteranAcianDindingPost');
        removeCondition('JasaFinishingGroutingStrukturBetonPost');
        removeCondition('JasaPelapisanCoatingStrukturPost');
        removeCondition('JasaFinishingKolomdanBalokPost');
        removeCondition('JasaPelapisanWaterproofingStrukturPost');
        removeCondition('JasaFinishingLantaiBetonPost');
        removeCondition('JasaPelindungRetakStrukturPost'); 
	// hapus elemen id sub JasaFinishingBangunanEksteriorPost Semua KECUALI JasaFinishingFasadEksteriorPost
        removeCondition('JasaCatEksteriorRumahPost');
        //removeCondition('');
        removeCondition('JasaPelapisanAntiCuacaPost');
        removeCondition('JasaPelapisanDindingLuarPost');
        removeCondition('JasaFinishingFasadEksteriorPost');
        removeCondition('JasaPelapisanBatuAlamEksteriorPost');
        removeCondition('JasaPelapisanGentengDakPost');
      
         // hapus elemen id sub JasaFinishingBangunanInteriorPost SEMUA
	  
        removeCondition('JasaEpoxyDindingPost');
	removeCondition('JasaEpoxyLantaiPost');
        removeCondition('JasaInteriorFurnitureCustomePost');
        removeCondition('JasaGantiKeramikLantaiPost');
        removeCondition('JasaCatInteriorRumahPost');
        removeCondition('JasaPasangWallpaperDindingPost');
        //removeCondition('JasaPasangLantaiVinylPost');
        //removeCondition('JasaPasangPlafonGypsumPost');
        removeCondition('JasaGantiLampuInteriorPost');
        removeCondition('JasaGantiKitchenSetPost');
        removeCondition('JasaFinishingInteriorMinimalisPost');
        removeCondition('JasaFinishingInteriorKlasikPost');
        removeCondition('JasaFinishingInteriorModernPost');
       
         // hapus elemen id FINISHING UTAMA lain NYA
        removeCondition('JasaFinishingBangunanInteriorPost');
        removeCondition('JasaFinishingBangunanStrukturPost');

          // hapus elemen id Infrastruktur Semua
        removeCondition('JasaFinishingInfrastrukturPost');
        removeCondition('JasaFinishingInfrastrukturJalanPost');
        removeCondition('JasaFinishingInfrastrukturTrotoarPost');
        removeCondition('JasaFinishingInfrastrukturSaluranPost');
        removeCondition('JasaFinishingInfrastrukturStrukturPost');
        removeCondition('JasaFinishingInfrastrukturProteksiPost');

	  // hapus SEMUA SUB JASA FINSING INTERIOR MODERN 
	   removeCondition('JasaFinishingInteriorModernWpcPost');
	   removeCondition('JasaFinishingInteriorModernVinylPost');
	   removeCondition('JasaFinishingInteriorModernPlafonPost');
	   removeCondition('JasaFinishingInteriorModernPvcPost');
	
        JasaKonsFinishingPostLink.style.visibility = 'visible';
        JasaFinishingPostLink.style.visibility = 'visible';
        JasaFinishingBangunanPostLink.style.visibility = 'visible';
        //JasaFinishingBangunanEksteriorPost
        JasaFinishingBangunanEksteriorPostLink.style.visibility = 'visible';
        //JasaFinishingTamanRumahPost
        JasaFinishingTamanRumahPostLink.style.visibility = 'visible';
        pageNameJasaKonsFinishingPostLink.textContent = urlMappingJasaFinishingTamanRumahFromJasaFinishingEksteriorSub2MoneyPage[cleanUrlJasaKonsFinishingPost];
    }
 // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaFinishingTamanRumahFromJasaFinishingEksteriorSub2MoneyPage[cleanUrlJasaKonsFinishingPost]) {
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
                   "name": "Jasa Finishing Bangunan",
                   "item": "https://www.betonjayareadymix.com/p/jasa-finishing-bangunan.html"
               },
               {
                   "@type": "ListItem",
                   "position": 5,
                   "name": "Jasa Finishing Eksterior",
                   "item": "https://www.betonjayareadymix.com/p/jasa-finishing-eksterior.html"
               },
               {
                   "@type": "ListItem",
                   "position": 6,
                   "name": "Jasa Finishing Taman Rumah",
                   "item": "https://www.betonjayareadymix.com/p/jasa-finishing-taman-rumah.html"
               },
               {
                   "@type": "ListItem",
                   "position": 7,
                   "name": urlMappingJasaFinishingTamanRumahFromJasaFinishingEksteriorSub2MoneyPage[cleanUrlJasaKonsFinishingPost],
                   "item": cleanUrlJasaKonsFinishingPost
               }
           ]
       };
       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
//AKHIR SUB JasaFinishingBangunanEksteriorPost
 //Sub Finishing Infrastruktur
	/*
    if (urlMappingFinishingInfrastrukturJalan[cleanUrlJasaKonsFinishingPost]) {
        restoreCondition('JasaFinishingInfrastrukturPost');
       restoreCondition('JasaFinishingInfrastrukturJalanPost');
     
          // hapus elemen id DIV Lain
        removeCondition('MaterialKons');
	       removeCondition('ProdukKons');
        //removeCondition('ProdukKonsSaluran');
        //removeCondition('ProdukKonsPembatas');
        removeCondition('JasaKonsPembatas');
        removeCondition('JasaKonsJalanPerkerasan');
        removeCondition('JasaKonsPondasiTanah');
        removeCondition('JasaKonsPerbaikan');
        removeCondition('JasaKonsStruktur');
       	removeCondition('JasaKons');
        removeCondition('JasaKonsPost');
        removeCondition('MenuKons');
     
     
            // hapus elemen id lain nya
        removeCondition('JasaFinishingInfrastrukturProteksiPost');
        removeCondition('JasaFinishingInfrastrukturTrotoarPost');
        removeCondition('JasaFinishingInfrastrukturSaluranPost');
        removeCondition('JasaFinishingInfrastrukturStrukturPost');
       //hapus elemen id bangunan
        removeCondition('JasaFinishingBangunanPost');
        removeCondition('JasaFinishingBangunanInterior');
        removeCondition('JasaFinishingBangunanEksterior');
        removeCondition('JasaFinishingBangunanStruktur');
    
        JasaKonsFinishingPostLink.style.visibility = 'visible';
        JasaFinishingPostLink.style.visibility = 'visible';
        JasaFinishingInfrastrukturLink.style.visibility = 'visible';
       //sub finish infrastruktur
        JasaFinishingJalanLink.style.visibility = 'visible';
     
        pageNameJasaKonsFinishing.textContent = urlMappingFinishingInfrastrukturJalan[cleanUrlJasaKonsFinishingPost];

    }
   if (urlMappingFinishingInfrastrukturTrotoar[cleanUrlJasaKonsFinishingPost]) {
        restoreCondition('JasaFinishingInfrastrukturPost');
        restoreCondition('JasaFinishingTrotoar');
    
          // hapus elemen id DIV Lain
        removeCondition('MaterialKons');
	       removeCondition('ProdukKons');
        //removeCondition('ProdukKonsSaluran');
        //removeCondition('ProdukKonsPembatas');
        removeCondition('JasaKonsPembatas');
        removeCondition('JasaKonsJalanPerkerasan');
        removeCondition('JasaKonsPondasiTanah');
        removeCondition('JasaKonsPerbaikan');
        removeCondition('JasaKonsStruktur');
       	removeCondition('JasaKons');
        removeCondition('JasaKonsPost');
        removeCondition('MenuKons');
       
  
            // hapus elemen id lain nya
        removeCondition('JasaFinishingInfrastrukturJalanPost');
        removeCondition('JasaFinishingInfrastrukturProteksiPost');
        removeCondition('JasaFinishingInfrastrukturSaluranPost');
        removeCondition('JasaFinishingInfrastrukturStrukturPost');
       //hapus elemen id bangunan
        removeCondition('JasaFinishingBangunanPost');
        removeCondition('JasaFinishingBangunanInterior');
        removeCondition('JasaFinishingBangunanEksterior');
        removeCondition('JasaFinishingBangunanStruktur');
    
        JasaKonsFinishingPostLink.style.visibility = 'visible';
        JasaFinishingPostLink.style.visibility = 'visible';
        JasaFinishingInfrastrukturLink.style.visibility = 'visible';
       //sub finish infrastruktur
        JasaFinishingTrotoarLink.style.visibility = 'visible';
    
        pageNameJasaKonsFinishing.textContent = urlMappingFinishingInfrastrukturTrotoar[cleanUrlJasaKonsFinishingPost];

    }
   if (urlMappingFinishingInfrastrukturSaluran[cleanUrlJasaKonsFinishingPost]) {
        restoreCondition('JasaFinishingInfrastrukturPost');
        restoreCondition('JasaFinishingSaluran');
    
          // hapus elemen id DIV Lain
        removeCondition('MaterialKons');
	       removeCondition('ProdukKons');
        //removeCondition('ProdukKonsSaluran');
        //removeCondition('ProdukKonsPembatas');
        removeCondition('JasaKonsJalanPerkerasan');
        removeCondition('JasaKonsPondasiTanah');
        removeCondition('JasaKonsPembatas');
        removeCondition('JasaKonsPerbaikan');
        removeCondition('JasaKonsStruktur');
       	removeCondition('JasaKons');
        removeCondition('JasaKonsPost');
        removeCondition('MenuKons');

  
       
            // hapus elemen id lain nya
        removeCondition('JasaFinishingInfrastrukturJalanPost');
        removeCondition('JasaFinishingInfrastrukturTrotoarPost');
        removeCondition('JasaFinishingInfrastrukturProteksiPost');
        removeCondition('JasaFinishingInfrastrukturStrukturPost');
       //hapus elemen id bangunan
        removeCondition('JasaFinishingBangunanPost');
        removeCondition('JasaFinishingBangunanInterior');
        removeCondition('JasaFinishingBangunanEksterior');
        removeCondition('JasaFinishingBangunanStruktur');
    
        JasaKonsFinishingPostLink.style.visibility = 'visible';
        JasaFinishingPostLink.style.visibility = 'visible';
        JasaFinishingInfrastrukturLink.style.visibility = 'visible';
       //sub finish infrastruktur
        JasaFinishingSaluranLink.style.visibility = 'visible';
   
        pageNameJasaKonsFinishing.textContent = urlMappingFinishingInfrastrukturSaluran[cleanUrlJasaKonsFinishingPost];

    }
  if (urlMappingFinishingInfrastrukturStruktur[cleanUrlJasaKonsFinishingPost]) {
        restoreCondition('JasaFinishingInfrastrukturPost');
        restoreCondition('JasaFinishingInfrastrukturStrukturPost');
          // hapus elemen id DIV Lain
        removeCondition('MaterialKons');
	       removeCondition('ProdukKons');
        //removeCondition('ProdukKonsSaluran');
        //removeCondition('ProdukKonsPembatas');
        removeCondition('JasaKonsPembatas');
        removeCondition('JasaKonsJalanPerkerasan');
        removeCondition('JasaKonsPondasiTanah');
        removeCondition('JasaKonsPerbaikan');
        removeCondition('JasaKonsStruktur');
       	removeCondition('JasaKons');
        removeCondition('JasaKonsPost');
        removeCondition('MenuKons');

             // hapus elemen id lain nya
        removeCondition('JasaFinishingInfrastrukturJalanPost');
        removeCondition('JasaFinishingInfrastrukturTrotoarPost');
        removeCondition('JasaFinishingInfrastrukturSaluranPost');
        removeCondition('JasaFinishingInfrastrukturProteksiPost');
       //hapus elemen id bangunan
        removeCondition('JasaFinishingBangunanPost');
        removeCondition('JasaFinishingBangunanInterior');
        removeCondition('JasaFinishingBangunanEksterior');
        removeCondition('JasaFinishingBangunanStruktur');
     
        JasaKonsFinishingPostLink.style.visibility = 'visible';
        JasaFinishingPostLink.style.visibility = 'visible';
        JasaFinishingInfrastrukturLink.style.visibility = 'visible';
        //sub finish infrastruktur
        JasaFinishingStrukturLink.style.visibility = 'visible';
   
        pageNameJasaKonsFinishing.textContent = urlMappingFinishingInfrastrukturStruktur[cleanUrlJasaKonsFinishingPost];

    }
  if (urlMappingFinishingInfrastrukturProteksi[cleanUrlJasaKonsFinishingPost]) {
        restoreCondition('JasaFinishingInfrastrukturPost');
        restoreCondition('JasaFinishingInfrastrukturProteksiPost');
       
          // hapus elemen id DIV Lain
        removeCondition('MaterialKons');
	       removeCondition('ProdukKons');
        //removeCondition('ProdukKonsSaluran');
        //removeCondition('ProdukKonsPembatas');
        removeCondition('JasaKonsPembatas');
        removeCondition('JasaKonsJalanPerkerasan');
        removeCondition('JasaKonsPondasiTanah');
        removeCondition('JasaKonsPerbaikan');
        removeCondition('JasaKonsStruktur');
       	removeCondition('JasaKons');
        removeCondition('JasaKonsPost');
        removeCondition('MenuKons');
     
       
        // hapus elemen id lain nya
        removeCondition('JasaFinishingInfrastrukturJalanPost');
        removeCondition('JasaFinishingInfrastrukturTrotoarPost');
        removeCondition('JasaFinishingInfrastrukturSaluranPost');
        removeCondition('JasaFinishingInfrastrukturStrukturPost');
       //hapus elemen id bangunan
        removeCondition('JasaFinishingBangunanPost');
        removeCondition('JasaFinishingBangunanInterior');
        removeCondition('JasaFinishingBangunanEksterior');
        removeCondition('JasaFinishingBangunanStruktur');
       
        JasaKonsFinishingPostLink.style.visibility = 'visible';
        JasaFinishingPostLink.style.visibility = 'visible';
        JasaFinishingInfrastrukturLink.style.visibility = 'visible';
       //sub finish infrastruktur
        JasaFinishingProteksiLink.style.visibility = 'visible';
   
        pageNameJasaKonsFinishing.textContent = urlMappingFinishingInfrastrukturProteksi[cleanUrlJasaKonsFinishingPost];

    }
    */

   });
