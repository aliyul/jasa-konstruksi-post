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
// 🔍 ENTITY TYPE: JASA (Finishing Bangunan & Interior)
// ATURAN: JASA TIDAK BOLEH MENGGUNAKAN MONEY_MASTER
// ✅ Gunakan: MONEY_PAGE (Komersial 60% + Transaksional 40%)
// ❌ Dilarang: MONEY_MASTER
// ============================================================

// ============================================================
// 📁 LEVEL 2 - SUB2 (Turunan dari PILLAR Jasa Konstruksi)
// 🧠 SUB2: Informasional (60%), boleh skip di breadcrumb
// ============================================================

// [SUB2] - Jasa Finishing (KATEGORI UTAMA)
/*const urlMappingJasaFinishingFromPillarSub2 = {
  // [SUB2] - Jasa Finishing Bangunan
  "https://www.betonjayareadymix.com/p/jasa-finishing-bangunan.html": "Jasa Finishing Bangunan",  // TYPE: SUB2
  
  // [SUB2] - Jasa Finishing Interior
  "https://www.betonjayareadymix.com/p/jasa-finishing-interior.html": "Jasa Finishing Interior",  // TYPE: SUB2
  
  // [SUB2] - Jasa Finishing Eksterior
  "https://www.betonjayareadymix.com/p/jasa-finishing-eksterior.html": "Jasa Finishing Eksterior",  // TYPE: SUB2
  
  // [SUB2] - Jasa Finishing Struktur
  "https://www.betonjayareadymix.com/p/jasa-finishing-struktur.html": "Jasa Finishing Struktur",  // TYPE: SUB2
};
*/

// ============================================================
// 📁 JASA FINISHING DAK BETON - MONEY PAGE & TURUNAN
// 🧠 ENTITY: JASA → TYPE: MONEY_PAGE (bukan MONEY_MASTER)
// Parent: Jasa Finishing Struktur (/p/jasa-finishing-struktur.html)
// ============================================================

const urlMappingJasaFinishingDakBetonFromSub2MoneyPage = {
  // ============================================================
  // [SUB2] - INFORMASIONAL (PANDUAN FINISHING DAK)
  // 🧠 TYPE: SUB2 (boleh skip di breadcrumb, intent informasional 60%)
  // ============================================================
  "https://www.betonjayareadymix.com/2018/10/finishing-dak.html": "Finishing Dak",  // TYPE: SUB2
  
  // ============================================================
  // [MONEY_PAGE] - HARGA JASA FINISHING DAK BETON
  // 🧠 TYPE: MONEY_PAGE (JASA, bukan MONEY_MASTER)
  // Intent: Komersial (60%) + Transaksional (40%)
  // ============================================================
  "https://www.betonjayareadymix.com/2018/10/harga-jasa-finishing-dak-beton.html": "Harga Jasa Finishing Dak Beton",  // TYPE: MONEY_PAGE
  
  // ============================================================
  // [REDIRECT] - DUPLIKASI DARI finishing-dak.html
  // 🧠 SEO NOTE: Halaman ini overlap, disarankan 301 redirect ke finishing-dak.html
  // ============================================================
  "https://www.betonjayareadymix.com/2018/10/finishing-dak-beton.html": "Finishing Dak Beton",  // TYPE: REDIRECT
  
  // ============================================================
  // [MONEY_CHILD] - HARGA DAK SUPER FLAT (SPESIFIK LOKASI)
  // 🧠 TYPE: MONEY_CHILD (JASA + lokasi)
  // ============================================================
  "https://www.betonjayareadymix.com/2018/10/harga-jasa-dak-super-flat.html": "Harga Jasa Dak Super Flat",  // TYPE: MONEY_CHILD
  
  // ============================================================
  // [REDIRECT] - DUPLIKASI
  // ============================================================
  "https://www.betonjayareadymix.com/2018/10/dak-super-flat.html": "Dak Super Flat",  // TYPE: REDIRECT
  
  // ============================================================
  // 🟡 SARAN ITEM TAMBAHAN (BELUM AKTIF - PERLU DIBUAT KONTEN)
  // ============================================================
  // "https://www.betonjayareadymix.com/2018/10/jasa-finishing-dak-beton-jakarta.html": "Jasa Finishing Dak Beton Jakarta",  // TYPE: MONEY_CHILD
  // "https://www.betonjayareadymix.com/2018/10/jasa-finishing-dak-beton-bogor.html": "Jasa Finishing Dak Beton Bogor",  // TYPE: MONEY_CHILD
  // "https://www.betonjayareadymix.com/2018/10/jasa-finishing-dak-beton-bekasi.html": "Jasa Finishing Dak Beton Bekasi",  // TYPE: MONEY_CHILD
  // "https://www.betonjayareadymix.com/2018/10/jasa-finishing-dak-beton-tangerang.html": "Jasa Finishing Dak Beton Tangerang",  // TYPE: MONEY_CHILD
  // "https://www.betonjayareadymix.com/2018/10/jasa-finishing-dak-beton-depok.html": "Jasa Finishing Dak Beton Depok",  // TYPE: MONEY_CHILD
  // "https://www.betonjayareadymix.com/2018/10/panduan-finishing-dak-beton.html": "Panduan Finishing Dak Beton",  // TYPE: SUB1
};

// ============================================================
// 📁 JASA FINISHING BETON EKSPOS - MONEY PAGE
// 🧠 ENTITY: JASA → TYPE: MONEY_PAGE
// Parent: Jasa Finishing Struktur (/p/jasa-finishing-struktur.html)
// ============================================================

const urlMappingJasaFinishingBetonEksposFromSub2MoneyPage = {
  // ============================================================
  // [MONEY_PAGE] - HARGA JASA BETON EKSPOS
  // 🧠 TYPE: MONEY_PAGE (JASA, bukan MONEY_MASTER)
  // ============================================================
  "https://www.betonjayareadymix.com/2018/10/harga-jasa-beton-ekspos.html": "Harga Jasa Beton Ekspos",  // TYPE: MONEY_PAGE
  
  // ============================================================
  // [SUB2] - PANDUAN FINISHING BETON EKSPOS (INFORMASIONAL)
  // ============================================================
  "https://www.betonjayareadymix.com/2018/10/finishing-beton-ekspos.html": "Finishing Beton Ekspos",  // TYPE: SUB2
  
  // ============================================================
  // [REDIRECT] - DUPLIKASI
  // ============================================================
  "https://www.betonjayareadymix.com/2018/10/harga-jasa-finishing-beton-ekspos.html": "Harga Jasa Finishing Beton Ekspos",  // TYPE: REDIRECT
  
  // ============================================================
  // 🟡 SARAN ITEM TAMBAHAN (BELUM AKTIF - PERLU DIBUAT KONTEN)
  // ============================================================
  // "https://www.betonjayareadymix.com/2018/10/jasa-beton-ekspos-jakarta.html": "Jasa Beton Ekspos Jakarta",  // TYPE: MONEY_CHILD
  // "https://www.betonjayareadymix.com/2018/10/jasa-beton-ekspos-bandung.html": "Jasa Beton Ekspos Bandung",  // TYPE: MONEY_CHILD
  // "https://www.betonjayareadymix.com/2018/10/panduan-finishing-beton-ekspos.html": "Panduan Finishing Beton Ekspos",  // TYPE: SUB1
};

// ============================================================
// 📁 JASA PLESTERAN & ACIAN DINDING - MONEY PAGE & MONEY CHILD
// 🧠 ENTITY: JASA → TYPE: MONEY_PAGE & MONEY_CHILD
// Parent: Jasa Finishing Bangunan (/p/jasa-finishing-bangunan.html)
// ============================================================

const urlMappingJasaPlesteranAcianDindingFromSub2MoneyPage = {
  // ============================================================
  // [MONEY_PAGE] - HARGA BORONGAN PLESTERAN ACIAN PER METER (NASIONAL)
  // 🧠 TYPE: MONEY_PAGE (JASA, bukan MONEY_MASTER)
  // ============================================================
  "https://www.betonjayareadymix.com/2018/09/harga-borongan-tenaga-plesteran-dan-acian-per-meter.html": "Harga Borongan Tenaga Plesteran dan Acian per Meter",  // TYPE: MONEY_PAGE
  
  // ============================================================
  // [MONEY_CHILD] - HARGA BORONGAN PLESTERAN ACIAN PER LOKASI
  // 🧠 TYPE: MONEY_CHILD (spesifik lokasi)
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
  "https://www.betonjayareadymix.com/2018/11/harga-borongan-tenaga-plesteran-dan-acian-per-meter-gunung-sindur.html": "Harga Borongan Tenaga Plesteran dan Acian per Meter Gunung Sindur",  // TYPE: MONEY_CHILD
  
  // ============================================================
  // 🟡 SARAN ITEM TAMBAHAN (BELUM AKTIF - PERLU DIBUAT KONTEN)
  // ============================================================
  // "https://www.betonjayareadymix.com/2018/09/panduan-plesteran-acian-dinding.html": "Panduan Plesteran Acian Dinding",  // TYPE: SUB1
  // "https://www.betonjayareadymix.com/2018/09/jasa-plesteran-acian-surabaya.html": "Jasa Plesteran Acian Surabaya",  // TYPE: MONEY_CHILD
  // "https://www.betonjayareadymix.com/2018/09/jasa-plesteran-acian-medan.html": "Jasa Plesteran Acian Medan",  // TYPE: MONEY_CHILD
  // "https://www.betonjayareadymix.com/2018/09/jasa-plesteran-acian-semarang.html": "Jasa Plesteran Acian Semarang",  // TYPE: MONEY_CHILD
  // "https://www.betonjayareadymix.com/2018/09/jasa-plesteran-acian-yogyakarta.html": "Jasa Plesteran Acian Yogyakarta",  // TYPE: MONEY_CHILD
};

// ============================================================
// 📁 JASA FINISHING LANTAI BETON - MONEY PAGE & MONEY CHILD
// 🧠 ENTITY: JASA → TYPE: MONEY_PAGE & MONEY_CHILD
// Parent: Jasa Finishing Struktur (/p/jasa-finishing-struktur.html)
// ============================================================

const urlMappingJasaFinishingLantaiBetonFromSub2MoneyPage = {
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
  // 🧠 TYPE: MONEY_PAGE (JASA, bukan MONEY_MASTER)
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
  // [SUB1] - PANDUAN / INFORMASIONAL (Komersial 70%)
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
  "https://www.betonjayareadymix.com/2018/10/harga-borongan-floor-lantai.html": "Harga Borongan Floor Lantai",  // TYPE: MONEY_PAGE
  
  // ============================================================
  // 🟡 SARAN ITEM TAMBAHAN (BELUM AKTIF - PERLU DIBUAT KONTEN)
  // ============================================================
  // "https://www.betonjayareadymix.com/2018/10/jasa-trowel-lantai-beton-surabaya.html": "Jasa Trowel Lantai Beton Surabaya",  // TYPE: MONEY_CHILD
  // "https://www.betonjayareadymix.com/2018/10/jasa-trowel-lantai-beton-medan.html": "Jasa Trowel Lantai Beton Medan",  // TYPE: MONEY_CHILD
  // "https://www.betonjayareadymix.com/2018/10/panduan-screeding-lantai-beton.html": "Panduan Screeding Lantai Beton",  // TYPE: SUB1
  // "https://www.betonjayareadymix.com/2018/10/panduan-trowel-lantai-beton.html": "Panduan Trowel Lantai Beton",  // TYPE: SUB1
};

// ============================================================
// 📁 JASA EPOXY DINDING - MONEY PAGE
// 🧠 ENTITY: JASA → TYPE: MONEY_PAGE
// Parent: Jasa Finishing Struktur (/p/jasa-finishing-struktur.html)
// ============================================================

const urlMappingJasaEpoxyDindingFromSub2MoneyPage = {
  // ============================================================
  // [MONEY_PAGE] - HARGA JASA EPOXY DINDING
  // ============================================================
  "https://www.betonjayareadymix.com/2018/10/harga-jasa-epoxy-dinding.html": "Harga Jasa Epoxy Dinding",  // TYPE: MONEY_PAGE
  
  // ============================================================
  // 🟡 SARAN ITEM TAMBAHAN (BELUM AKTIF - PERLU DIBUAT KONTEN)
  // ============================================================
  // "https://www.betonjayareadymix.com/2018/10/jasa-epoxy-dinding-jakarta.html": "Jasa Epoxy Dinding Jakarta",  // TYPE: MONEY_CHILD
  // "https://www.betonjayareadymix.com/2018/10/jasa-epoxy-dinding-bandung.html": "Jasa Epoxy Dinding Bandung",  // TYPE: MONEY_CHILD
  // "https://www.betonjayareadymix.com/2018/10/panduan-epoxy-dinding.html": "Panduan Epoxy Dinding",  // TYPE: SUB1
};

// ============================================================
// 📁 JASA EPOXY LANTAI - MONEY PAGE
// 🧠 ENTITY: JASA → TYPE: MONEY_PAGE
// Parent: Jasa Finishing Lantai Beton (/p/jasa-finishing-lantai-beton.html)
// ============================================================

const urlMappingJasaEpoxyLantaiFromSub2MoneyPage = {
  // ============================================================
  // [MONEY_PAGE] - MASTER HARGA JASA FINISHING EPOXY
  // ============================================================
  "https://www.betonjayareadymix.com/2018/10/harga-jasa-finishing-epoxy.html": "Harga Jasa Finishing Epoxy",  // TYPE: MONEY_PAGE
  
  // ============================================================
  // [SUB2] - PANDUAN FINISHING EPOXY (INFORMASIONAL)
  // ============================================================
  "https://www.betonjayareadymix.com/2018/10/finishing-epoxy.html": "Finishing Epoxy",  // TYPE: SUB2
  
  // ============================================================
  // [REDIRECT] - DUPLIKASI
  // ============================================================
  "https://www.betonjayareadymix.com/2018/10/harga-jasa-epoxy.html": "Harga Jasa Epoxy",  // TYPE: REDIRECT
  "https://www.betonjayareadymix.com/2018/10/harga-jasa-epoxy-lantai.html": "Harga Jasa Epoxy Lantai",  // TYPE: REDIRECT
  "https://www.betonjayareadymix.com/2018/10/harga-jasa-lantai-epoxy.html": "Harga Jasa Lantai Epoxy",  // TYPE: REDIRECT
  
  // ============================================================
  // [SUB2] - INFORMASIONAL
  // ============================================================
  "https://www.betonjayareadymix.com/2018/10/jasa-epoxy.html": "Jasa Epoxy",  // TYPE: SUB2
  
  // ============================================================
  // 🟡 SARAN ITEM TAMBAHAN (BELUM AKTIF - PERLU DIBUAT KONTEN)
  // ============================================================
  // "https://www.betonjayareadymix.com/2018/10/jasa-epoxy-lantai-jakarta.html": "Jasa Epoxy Lantai Jakarta",  // TYPE: MONEY_CHILD
  // "https://www.betonjayareadymix.com/2018/10/jasa-epoxy-lantai-bogor.html": "Jasa Epoxy Lantai Bogor",  // TYPE: MONEY_CHILD
  // "https://www.betonjayareadymix.com/2018/10/jasa-epoxy-lantai-bekasi.html": "Jasa Epoxy Lantai Bekasi",  // TYPE: MONEY_CHILD
  // "https://www.betonjayareadymix.com/2018/10/jasa-epoxy-lantai-tangerang.html": "Jasa Epoxy Lantai Tangerang",  // TYPE: MONEY_CHILD
  // "https://www.betonjayareadymix.com/2018/10/jasa-epoxy-lantai-depok.html": "Jasa Epoxy Lantai Depok",  // TYPE: MONEY_CHILD
  // "https://www.betonjayareadymix.com/2018/10/panduan-epoxy-lantai.html": "Panduan Epoxy Lantai",  // TYPE: SUB1
};

// ============================================================
// 📁 JASA FINISHING GROUTING STRUKTUR BETON - KOSONG
// 🧠 REKOMENDASI: Isi dengan URL berikut atau hapus const
// Parent: Jasa Finishing Struktur (/p/jasa-finishing-struktur.html)
// ============================================================
const urlMappingJasaFinishingGroutingStrukturBetonFromSub2MoneyPage = {
  // 🟡 SARAN ITEM (BELUM AKTIF - PERLU DIBUAT KONTEN)
  // "https://www.betonjayareadymix.com/2018/10/harga-jasa-grouting-struktur-beton.html": "Harga Jasa Grouting Struktur Beton",  // TYPE: MONEY_PAGE
  // "https://www.betonjayareadymix.com/2018/10/jasa-grouting-retak-beton.html": "Jasa Grouting Retak Beton",  // TYPE: MONEY_PAGE
  // "https://www.betonjayareadymix.com/2018/10/harga-injeksi-grouting-beton.html": "Harga Injeksi Grouting Beton",  // TYPE: MONEY_PAGE
  // "https://www.betonjayareadymix.com/2018/10/jasa-grouting-beton-jakarta.html": "Jasa Grouting Beton Jakarta",  // TYPE: MONEY_CHILD
  // "https://www.betonjayareadymix.com/2018/10/panduan-grouting-struktur-beton.html": "Panduan Grouting Struktur Beton",  // TYPE: SUB1
};

// ============================================================
// 📁 JASA PELAPISAN COATING STRUKTUR - KOSONG
// 🧠 REKOMENDASI: Isi dengan URL berikut atau hapus const
// Parent: Jasa Finishing Struktur (/p/jasa-finishing-struktur.html)
// ============================================================
const urlMappingJasaPelapisanCoatingStrukturFromSub2MoneyPage = {
  // 🟡 SARAN ITEM (BELUM AKTIF - PERLU DIBUAT KONTEN)
  // "https://www.betonjayareadymix.com/2018/10/harga-jasa-coating-struktur-beton.html": "Harga Jasa Coating Struktur Beton",  // TYPE: MONEY_PAGE
  // "https://www.betonjayareadymix.com/2018/10/jasa-coating-anti-karat-beton.html": "Jasa Coating Anti Karat Beton",  // TYPE: MONEY_PAGE
  // "https://www.betonjayareadymix.com/2018/10/jasa-coating-lantai-beton.html": "Jasa Coating Lantai Beton",  // TYPE: MONEY_PAGE
  // "https://www.betonjayareadymix.com/2018/10/jasa-coating-beton-jakarta.html": "Jasa Coating Beton Jakarta",  // TYPE: MONEY_CHILD
  // "https://www.betonjayareadymix.com/2018/10/panduan-coating-struktur-beton.html": "Panduan Coating Struktur Beton",  // TYPE: SUB1
};

// ============================================================
// 📁 JASA FINISHING KOLOM BALOK - KOSONG
// 🧠 REKOMENDASI: Isi dengan URL berikut atau hapus const
// Parent: Jasa Finishing Struktur (/p/jasa-finishing-struktur.html)
// ============================================================
const urlMappingJasaFinishingKolomBalokFromSub2MoneyPage = {
  // 🟡 SARAN ITEM (BELUM AKTIF - PERLU DIBUAT KONTEN)
  // "https://www.betonjayareadymix.com/2018/10/harga-jasa-finishing-kolom-balok.html": "Harga Jasa Finishing Kolom Balok",  // TYPE: MONEY_PAGE
  // "https://www.betonjayareadymix.com/2018/10/jasa-finishing-kolom-beton.html": "Jasa Finishing Kolom Beton",  // TYPE: MONEY_PAGE
  // "https://www.betonjayareadymix.com/2018/10/jasa-finishing-balok-beton.html": "Jasa Finishing Balok Beton",  // TYPE: MONEY_PAGE
  // "https://www.betonjayareadymix.com/2018/10/jasa-finishing-kolom-balok-jakarta.html": "Jasa Finishing Kolom Balok Jakarta",  // TYPE: MONEY_CHILD
  // "https://www.betonjayareadymix.com/2018/10/panduan-finishing-kolom-balok.html": "Panduan Finishing Kolom Balok",  // TYPE: SUB1
};

// ============================================================
// 📁 JASA PELAPISAN WATERPROOFING STRUKTUR - KOSONG
// 🧠 REKOMENDASI: Isi dengan URL berikut atau hapus const
// Parent: Jasa Finishing Struktur (/p/jasa-finishing-struktur.html)
// ============================================================
const urlMappingJasaPelapisanWaterproofingStrukturFromSub2MoneyPage = {
  // 🟡 SARAN ITEM (BELUM AKTIF - PERLU DIBUAT KONTEN)
  // "https://www.betonjayareadymix.com/2018/10/harga-jasa-waterproofing-struktur.html": "Harga Jasa Waterproofing Struktur",  // TYPE: MONEY_PAGE
  // "https://www.betonjayareadymix.com/2018/10/jasa-waterproofing-dak-beton.html": "Jasa Waterproofing Dak Beton",  // TYPE: MONEY_PAGE
  // "https://www.betonjayareadymix.com/2018/10/jasa-waterproofing-lantai-beton.html": "Jasa Waterproofing Lantai Beton",  // TYPE: MONEY_PAGE
  // "https://www.betonjayareadymix.com/2018/10/jasa-waterproofing-struktur-jakarta.html": "Jasa Waterproofing Struktur Jakarta",  // TYPE: MONEY_CHILD
  // "https://www.betonjayareadymix.com/2018/10/panduan-waterproofing-struktur.html": "Panduan Waterproofing Struktur",  // TYPE: SUB1
};

// ============================================================
// 📁 JASA PELINDUNG RETAK STRUKTUR - KOSONG
// 🧠 REKOMENDASI: Isi dengan URL berikut atau hapus const
// Parent: Jasa Perbaikan Struktur (/p/jasa-perbaikan-struktur.html)
// ============================================================
const urlMappingJasaPelindungRetakStrukturFromSub2MoneyPage = {
  // 🟡 SARAN ITEM (BELUM AKTIF - PERLU DIBUAT KONTEN)
  // "https://www.betonjayareadymix.com/2018/10/harga-jasa-injeksi-retak-struktur.html": "Harga Jasa Injeksi Retak Struktur",  // TYPE: MONEY_PAGE
  // "https://www.betonjayareadymix.com/2018/10/jasa-perkuatan-struktur-retak.html": "Jasa Perkuatan Struktur Retak",  // TYPE: MONEY_PAGE
  // "https://www.betonjayareadymix.com/2018/10/harga-jasa-grouting-retak-struktur.html": "Harga Jasa Grouting Retak Struktur",  // TYPE: MONEY_PAGE
  // "https://www.betonjayareadymix.com/2018/10/jasa-epoxy-injeksi-retak.html": "Jasa Epoxy Injeksi Retak",  // TYPE: MONEY_PAGE
  // "https://www.betonjayareadymix.com/2018/10/jasa-injeksi-retak-struktur-jakarta.html": "Jasa Injeksi Retak Struktur Jakarta",  // TYPE: MONEY_CHILD
  // "https://www.betonjayareadymix.com/2018/10/panduan-injeksi-retak-struktur.html": "Panduan Injeksi Retak Struktur",  // TYPE: SUB1
};

// ============================================================
// 📁 JASA FINISHING INTERIOR KLASIK - MONEY CHILD
// 🧠 ENTITY: JASA → TYPE: MONEY_CHILD
// Parent: Jasa Finishing Interior (/p/jasa-finishing-interior.html)
// ============================================================

const urlMappingJasaFinishingInteriorKlasikFromSub2MoneyChild = {
  // ============================================================
  // [MONEY_CHILD] - LAYANAN FINISHING INTERIOR KLASIK
  // 🧠 TYPE: MONEY_CHILD (JASA spesifik)
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
  "https://www.betonjayareadymix.com/2020/02/jasa-finishing-dinding-interior-klasik.html": "Jasa Finishing Dinding Interior Klasik",  // TYPE: MONEY_CHILD
};

// ============================================================
// 📁 JASA FINISHING INTERIOR MINIMALIS - MONEY CHILD
// 🧠 ENTITY: JASA → TYPE: MONEY_CHILD
// Parent: Jasa Finishing Interior (/p/jasa-finishing-interior.html)
// ============================================================

const urlMappingJasaFinishingInteriorMinimalisFromSub2MoneyChild = {
  // ============================================================
  // [MONEY_CHILD] - LAYANAN FINISHING INTERIOR MINIMALIS
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
  "https://www.betonjayareadymix.com/2020/02/jasa-finishing-dinding-interior-minimalis.html": "Jasa Finishing Dinding Interior Minimalis",  // TYPE: MONEY_CHILD
};

// ============================================================
// 📁 JASA INTERIOR & FURNITURE CUSTOM - MONEY PAGE & MONEY CHILD
// 🧠 ENTITY: JASA → TYPE: MONEY_PAGE & MONEY_CHILD
// Parent: Jasa Finishing Interior (/p/jasa-finishing-interior.html)
// ============================================================

const urlMappingJasaInteriorFurnitureCustomeFromSub2MoneyPage = {
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
  // 🧠 TYPE: MONEY_PAGE (JASA, bukan MONEY_MASTER)
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
  "https://www.betonjayareadymix.com/2018/09/harga-custom-furniture-per-meter.html": "Harga Custom Furniture Per Meter",  // TYPE: MONEY_PAGE
};
// ============================================================
// 📁 JASA KERAMIK LANTAI - MONEY PAGE & MONEY CHILD
// 🧠 ENTITY: JASA → TYPE: MONEY_PAGE & MONEY_CHILD (bukan MONEY_MASTER)
// Parent: Jasa Finishing Bangunan (/p/jasa-finishing-bangunan.html)
// Breadcrumb: Home > Jasa Konstruksi > Jasa Finishing Bangunan > Jasa Keramik Lantai (4 level)
// ============================================================

const urlMappingJasaKeramikLantaiFromSub2MoneyPage = {
  // ============================================================
  // [MONEY_PAGE] - JASA PASANG KERAMIK LANTAI (NASIONAL)
  // 🧠 TYPE: MONEY_PAGE (JASA, bukan MONEY_MASTER)
  // Intent: Komersial (60%) + Transaksional (40%)
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-pasang-keramik-lantai.html": "Jasa Pasang Keramik Lantai",  // TYPE: MONEY_PAGE
  
  // ============================================================
  // [MONEY_PAGE] - HARGA JASA PASANG KERAMIK PER METER
  // ============================================================
  "https://www.betonjayareadymix.com/p/harga-jasa-pasang-keramik-per-meter.html": "Harga Jasa Pasang Keramik per Meter",  // TYPE: MONEY_PAGE
  
  // ============================================================
  // [MONEY_CHILD] - JASA GANTI KERAMIK LANTAI (SPESIFIK LOKASI)
  // 🧠 TYPE: MONEY_CHILD (JASA + layanan spesifik)
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-ganti-keramik-lantai.html": "Jasa Ganti Keramik Lantai",  // TYPE: MONEY_CHILD
  
  // ============================================================
  // [MONEY_CHILD] - JASA PASANG KERAMIK PER LOKASI
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-pasang-keramik-lantai-jakarta.html": "Jasa Pasang Keramik Lantai Jakarta",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/p/jasa-pasang-keramik-lantai-bogor.html": "Jasa Pasang Keramik Lantai Bogor",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/p/jasa-pasang-keramik-lantai-depok.html": "Jasa Pasang Keramik Lantai Depok",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/p/jasa-pasang-keramik-lantai-tangerang.html": "Jasa Pasang Keramik Lantai Tangerang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/p/jasa-pasang-keramik-lantai-bekasi.html": "Jasa Pasang Keramik Lantai Bekasi",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/p/jasa-pasang-keramik-lantai-bandung.html": "Jasa Pasang Keramik Lantai Bandung",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/p/jasa-pasang-keramik-lantai-surabaya.html": "Jasa Pasang Keramik Lantai Surabaya",  // TYPE: MONEY_CHILD
  
  // ============================================================
  // [SUB2] - PANDUAN / INFORMASIONAL (boleh skip di breadcrumb)
  // 🧠 TYPE: SUB2 (intent informasional 60%)
  // ============================================================
  "https://www.betonjayareadymix.com/p/panduan-pasang-keramik-lantai.html": "Panduan Pasang Keramik Lantai",  // TYPE: SUB2
  "https://www.betonjayareadymix.com/p/jenis-keramik-lantai.html": "Jenis Keramik Lantai",  // TYPE: SUB2
  
  // ============================================================
  // [SUB1] - PERBANDINGAN / EVALUASI (Komersial 70%)
  // 🧠 TYPE: SUB1 (jembatan ke MONEY_PAGE)
  // ============================================================
  "https://www.betonjayareadymix.com/p/keramik-lantai-murah-vs-premium.html": "Keramik Lantai Murah vs Premium",  // TYPE: SUB1
  "https://www.betonjayareadymix.com/p/cara-memilih-keramik-lantai.html": "Cara Memilih Keramik Lantai yang Tepat",  // TYPE: SUB1
  
  // ============================================================
  // 🟡 SARAN ITEM TAMBAHAN (BELUM AKTIF - PERLU DIBUAT KONTEN)
  // ============================================================
  // "https://www.betonjayareadymix.com/p/jasa-pasang-keramik-lantai-murah.html": "Jasa Pasang Keramik Lantai Murah",  // TYPE: MONEY_CHILD
  // "https://www.betonjayareadymix.com/p/jasa-pasang-keramik-lantai-24-jam.html": "Jasa Pasang Keramik Lantai 24 Jam",  // TYPE: MONEY_CHILD
  // "https://www.betonjayareadymix.com/p/harga-borongan-pasang-keramik-per-meter.html": "Harga Borongan Pasang Keramik per Meter",  // TYPE: MONEY_PAGE
  // "https://www.betonjayareadymix.com/p/jasa-pasang-keramik-lantai-rumah.html": "Jasa Pasang Keramik Lantai Rumah",  // TYPE: MONEY_CHILD
  // "https://www.betonjayareadymix.com/p/jasa-pasang-keramik-lantai-kantor.html": "Jasa Pasang Keramik Lantai Kantor",  // TYPE: MONEY_CHILD
  // "https://www.betonjayareadymix.com/p/jasa-pasang-keramik-lantai-gudang.html": "Jasa Pasang Keramik Lantai Gudang",  // TYPE: MONEY_CHILD
  // "https://www.betonjayareadymix.com/p/jasa-pasang-keramik-lantai-terdekat.html": "Jasa Pasang Keramik Lantai Terdekat",  // TYPE: MONEY_CHILD
};

// ============================================================
// 📁 JASA CAT INTERIOR RUMAH - MONEY PAGE & MONEY CHILD
// 🧠 ENTITY: JASA → TYPE: MONEY_PAGE & MONEY_CHILD (bukan MONEY_MASTER)
// Parent: Jasa Finishing Interior (/p/jasa-finishing-interior.html)
// Breadcrumb: Home > Jasa Konstruksi > Jasa Finishing Interior > Jasa Cat Interior Rumah (4 level)
// ============================================================

const urlMappingJasaCatInteriorRumahFromSub2MoneyPage = {
  // ============================================================
  // [MONEY_PAGE] - JASA CAT INTERIOR RUMAH (NASIONAL)
  // 🧠 TYPE: MONEY_PAGE (JASA, bukan MONEY_MASTER)
  // Intent: Komersial (60%) + Transaksional (40%)
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-cat-interior-rumah.html": "Jasa Cat Interior Rumah",  // TYPE: MONEY_PAGE
  
  // ============================================================
  // [MONEY_PAGE] - HARGA JASA CAT INTERIOR PER METER
  // ============================================================
  "https://www.betonjayareadymix.com/p/harga-jasa-cat-interior-per-meter.html": "Harga Jasa Cat Interior per Meter",  // TYPE: MONEY_PAGE
  
  // ============================================================
  // [MONEY_PAGE] - JASA CAT DINDING INTERIOR
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-cat-dinding-interior.html": "Jasa Cat Dinding Interior",  // TYPE: MONEY_PAGE
  
  // ============================================================
  // [MONEY_CHILD] - JASA CAT INTERIOR PER LOKASI
  // 🧠 TYPE: MONEY_CHILD (JASA + lokasi)
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-cat-interior-rumah-jakarta.html": "Jasa Cat Interior Rumah Jakarta",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/p/jasa-cat-interior-rumah-bogor.html": "Jasa Cat Interior Rumah Bogor",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/p/jasa-cat-interior-rumah-depok.html": "Jasa Cat Interior Rumah Depok",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/p/jasa-cat-interior-rumah-tangerang.html": "Jasa Cat Interior Rumah Tangerang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/p/jasa-cat-interior-rumah-bekasi.html": "Jasa Cat Interior Rumah Bekasi",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/p/jasa-cat-interior-rumah-bandung.html": "Jasa Cat Interior Rumah Bandung",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/p/jasa-cat-interior-rumah-surabaya.html": "Jasa Cat Interior Rumah Surabaya",  // TYPE: MONEY_CHILD
  
  // ============================================================
  // [MONEY_CHILD] - JASA CAT INTERIOR PER JENIS RUANGAN
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-cat-interior-kamar-tidur.html": "Jasa Cat Interior Kamar Tidur",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/p/jasa-cat-interior-ruang-tamu.html": "Jasa Cat Interior Ruang Tamu",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/p/jasa-cat-interior-dapur.html": "Jasa Cat Interior Dapur",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/p/jasa-cat-interior-ruang-kantor.html": "Jasa Cat Interior Ruang Kantor",  // TYPE: MONEY_CHILD
  
  // ============================================================
  // [SUB2] - PANDUAN / INFORMASIONAL (boleh skip di breadcrumb)
  // 🧠 TYPE: SUB2 (intent informasional 60%)
  // ============================================================
  "https://www.betonjayareadymix.com/p/panduan-cat-interior-rumah.html": "Panduan Cat Interior Rumah",  // TYPE: SUB2
  "https://www.betonjayareadymix.com/p/warna-cat-interior-rumah.html": "Warna Cat Interior Rumah",  // TYPE: SUB2
  
  // ============================================================
  // [SUB1] - PERBANDINGAN / EVALUASI (Komersial 70%)
  // 🧠 TYPE: SUB1 (jembatan ke MONEY_PAGE)
  // ============================================================
  "https://www.betonjayareadymix.com/p/cat-interior-matte-vs-glossy.html": "Cat Interior Matte vs Glossy",  // TYPE: SUB1
  "https://www.betonjayareadymix.com/p/cat-walling-vs-cat-wood.html": "Cat Walling vs Cat Wood untuk Interior",  // TYPE: SUB1
  
  // ============================================================
  // 🟡 SARAN ITEM TAMBAHAN (BELUM AKTIF - PERLU DIBUAT KONTEN)
  // ============================================================
  // "https://www.betonjayareadymix.com/p/jasa-cat-interior-rumah-murah.html": "Jasa Cat Interior Rumah Murah",  // TYPE: MONEY_CHILD
  // "https://www.betonjayareadymix.com/p/jasa-cat-interior-rumah-24-jam.html": "Jasa Cat Interior Rumah 24 Jam",  // TYPE: MONEY_CHILD
  // "https://www.betonjayareadymix.com/p/harga-borongan-cat-interior-per-meter.html": "Harga Borongan Cat Interior per Meter",  // TYPE: MONEY_PAGE
  // "https://www.betonjayareadymix.com/p/jasa-cat-interior-rumah-terdekat.html": "Jasa Cat Interior Rumah Terdekat",  // TYPE: MONEY_CHILD
  // "https://www.betonjayareadymix.com/p/jasa-cat-plafon-interior.html": "Jasa Cat Plafon Interior",  // TYPE: MONEY_CHILD
  // "https://www.betonjayareadymix.com/p/jasa-cat-wood-interior.html": "Jasa Cat Wood Interior",  // TYPE: MONEY_CHILD
};


// ============================================================
// 📁 JASA PASANG WALLPAPER DINDING - MONEY PAGE & MONEY CHILD
// 🧠 ENTITY: JASA → TYPE: MONEY_PAGE & MONEY_CHILD
// Parent: Jasa Finishing Interior (/p/jasa-finishing-interior.html)
// Breadcrumb: Home > Jasa Konstruksi > Jasa Finishing Interior > Jasa Pasang Wallpaper Dinding (4 level)
// ============================================================

const urlMappingJasaPasangWallpaperDindingFromSub2MoneyPage = {
  // ============================================================
  // [MONEY_PAGE] - JASA PASANG WALLPAPER DINDING (NASIONAL)
  // 🧠 TYPE: MONEY_PAGE (JASA, bukan MONEY_MASTER)
  // Intent: Komersial (60%) + Transaksional (40%)
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-pasang-wallpaper-dinding.html": "Jasa Pasang Wallpaper Dinding",  // TYPE: MONEY_PAGE
  
  // ============================================================
  // [MONEY_PAGE] - HARGA JASA PASANG WALLPAPER PER METER
  // ============================================================
  "https://www.betonjayareadymix.com/p/harga-jasa-pasang-wallpaper-per-meter.html": "Harga Jasa Pasang Wallpaper per Meter",  // TYPE: MONEY_PAGE
  
  // ============================================================
  // [MONEY_CHILD] - JASA PASANG WALLPAPER PER LOKASI
  // 🧠 TYPE: MONEY_CHILD (JASA + lokasi)
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-pasang-wallpaper-dinding-jakarta.html": "Jasa Pasang Wallpaper Dinding Jakarta",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/p/jasa-pasang-wallpaper-dinding-bogor.html": "Jasa Pasang Wallpaper Dinding Bogor",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/p/jasa-pasang-wallpaper-dinding-depok.html": "Jasa Pasang Wallpaper Dinding Depok",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/p/jasa-pasang-wallpaper-dinding-tangerang.html": "Jasa Pasang Wallpaper Dinding Tangerang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/p/jasa-pasang-wallpaper-dinding-bekasi.html": "Jasa Pasang Wallpaper Dinding Bekasi",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/p/jasa-pasang-wallpaper-dinding-bandung.html": "Jasa Pasang Wallpaper Dinding Bandung",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/p/jasa-pasang-wallpaper-dinding-surabaya.html": "Jasa Pasang Wallpaper Dinding Surabaya",  // TYPE: MONEY_CHILD
  
  // ============================================================
  // [MONEY_CHILD] - JASA PASANG WALLPAPER PER JENIS
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-pasang-wallpaper-3d.html": "Jasa Pasang Wallpaper 3D",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/p/jasa-pasang-wallpaper-custom.html": "Jasa Pasang Wallpaper Custom",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/p/jasa-pasang-wallpaper-kamar-tidur.html": "Jasa Pasang Wallpaper Kamar Tidur",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/p/jasa-pasang-wallpaper-ruang-tamu.html": "Jasa Pasang Wallpaper Ruang Tamu",  // TYPE: MONEY_CHILD
  
  // ============================================================
  // [SUB2] - PANDUAN / INFORMASIONAL (boleh skip di breadcrumb)
  // 🧠 TYPE: SUB2 (intent informasional 60%)
  // ============================================================
  "https://www.betonjayareadymix.com/p/panduan-pasang-wallpaper-dinding.html": "Panduan Pasang Wallpaper Dinding",  // TYPE: SUB2
  "https://www.betonjayareadymix.com/p/jenis-wallpaper-dinding.html": "Jenis Wallpaper Dinding",  // TYPE: SUB2
  
  // ============================================================
  // [SUB1] - PERBANDINGAN / EVALUASI (Komersial 70%)
  // 🧠 TYPE: SUB1 (jembatan ke MONEY_PAGE)
  // ============================================================
  "https://www.betonjayareadymix.com/p/wallpaper-vs-cat-dinding.html": "Wallpaper vs Cat Dinding",  // TYPE: SUB1
  "https://www.betonjayareadymix.com/p/wallpaper-3d-vs-wallpaper-biasa.html": "Wallpaper 3D vs Wallpaper Biasa",  // TYPE: SUB1
  
  // ============================================================
  // 🟡 SARAN ITEM TAMBAHAN (BELUM AKTIF - PERLU DIBUAT KONTEN)
  // ============================================================
  // "https://www.betonjayareadymix.com/p/jasa-pasang-wallpaper-dinding-murah.html": "Jasa Pasang Wallpaper Dinding Murah",  // TYPE: MONEY_CHILD
  // "https://www.betonjayareadymix.com/p/jasa-pasang-wallpaper-dinding-24-jam.html": "Jasa Pasang Wallpaper Dinding 24 Jam",  // TYPE: MONEY_CHILD
  // "https://www.betonjayareadymix.com/p/harga-borongan-pasang-wallpaper-per-meter.html": "Harga Borongan Pasang Wallpaper per Meter",  // TYPE: MONEY_PAGE
  // "https://www.betonjayareadymix.com/p/jasa-pasang-wallpaper-dinding-terdekat.html": "Jasa Pasang Wallpaper Dinding Terdekat",  // TYPE: MONEY_CHILD
  // "https://www.betonjayareadymix.com/p/jasa-lepas-wallpaper-lama.html": "Jasa Lepas Wallpaper Lama",  // TYPE: MONEY_CHILD
};


// ============================================================
// 📁 JASA LAMPU INTERIOR - MONEY PAGE & MONEY CHILD
// 🧠 ENTITY: JASA → TYPE: MONEY_PAGE & MONEY_CHILD
// Parent: Jasa Finishing Interior (/p/jasa-finishing-interior.html)
// Breadcrumb: Home > Jasa Konstruksi > Jasa Finishing Interior > Jasa Lampu Interior (4 level)
// ============================================================

const urlMappingJasaLampuInteriorFromSub2MoneyPage = {
  // ============================================================
  // [MONEY_PAGE] - JASA PASANG LAMPU INTERIOR (NASIONAL)
  // 🧠 TYPE: MONEY_PAGE (JASA, bukan MONEY_MASTER)
  // Intent: Komersial (60%) + Transaksional (40%)
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-pasang-lampu-interior.html": "Jasa Pasang Lampu Interior",  // TYPE: MONEY_PAGE
  
  // ============================================================
  // [MONEY_PAGE] - HARGA JASA PASANG LAMPU INTERIOR
  // ============================================================
  "https://www.betonjayareadymix.com/p/harga-jasa-pasang-lampu-interior.html": "Harga Jasa Pasang Lampu Interior",  // TYPE: MONEY_PAGE
  
  // ============================================================
  // [MONEY_CHILD] - JASA INSTALASI LAMPU DOWNLIGHT
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-instalasi-lampu-downlight.html": "Jasa Instalasi Lampu Downlight",  // TYPE: MONEY_CHILD
  
  // ============================================================
  // [MONEY_CHILD] - JASA PASANG LAMPU PER LOKASI
  // 🧠 TYPE: MONEY_CHILD (JASA + lokasi)
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-pasang-lampu-interior-jakarta.html": "Jasa Pasang Lampu Interior Jakarta",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/p/jasa-pasang-lampu-interior-bogor.html": "Jasa Pasang Lampu Interior Bogor",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/p/jasa-pasang-lampu-interior-depok.html": "Jasa Pasang Lampu Interior Depok",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/p/jasa-pasang-lampu-interior-tangerang.html": "Jasa Pasang Lampu Interior Tangerang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/p/jasa-pasang-lampu-interior-bekasi.html": "Jasa Pasang Lampu Interior Bekasi",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/p/jasa-pasang-lampu-interior-bandung.html": "Jasa Pasang Lampu Interior Bandung",  // TYPE: MONEY_CHILD
  
  // ============================================================
  // [MONEY_CHILD] - JASA PASANG LAMPU PER JENIS RUANGAN
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-pasang-lampu-kamar-tidur.html": "Jasa Pasang Lampu Kamar Tidur",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/p/jasa-pasang-lampu-ruang-tamu.html": "Jasa Pasang Lampu Ruang Tamu",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/p/jasa-pasang-lampu-dapur.html": "Jasa Pasang Lampu Dapur",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/p/jasa-pasang-lampu-kantor.html": "Jasa Pasang Lampu Kantor",  // TYPE: MONEY_CHILD
  
  // ============================================================
  // [MONEY_CHILD] - JASA PASANG LAMPU PER JENIS LAMPU
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-pasang-lampu-led.html": "Jasa Pasang Lampu LED",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/p/jasa-pasang-lampu-track.html": "Jasa Pasang Lampu Track",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/p/jasa-pasang-lampu-gantung.html": "Jasa Pasang Lampu Gantung",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/p/jasa-pasang-lampu-tembak.html": "Jasa Pasang Lampu Tembak",  // TYPE: MONEY_CHILD
  
  // ============================================================
  // [SUB2] - PANDUAN / INFORMASIONAL (boleh skip di breadcrumb)
  // 🧠 TYPE: SUB2 (intent informasional 60%)
  // ============================================================
  "https://www.betonjayareadymix.com/p/panduan-pasang-lampu-interior.html": "Panduan Pasang Lampu Interior",  // TYPE: SUB2
  "https://www.betonjayareadymix.com/p/jenis-lampu-interior.html": "Jenis Lampu Interior",  // TYPE: SUB2
  
  // ============================================================
  // [SUB1] - PERBANDINGAN / EVALUASI (Komersial 70%)
  // 🧠 TYPE: SUB1 (jembatan ke MONEY_PAGE)
  // ============================================================
  "https://www.betonjayareadymix.com/p/lampu-led-vs-lampu-halogen.html": "Lampu LED vs Lampu Halogen",  // TYPE: SUB1
  "https://www.betonjayareadymix.com/p/lampu-downlight-vs-lampu-track.html": "Lampu Downlight vs Lampu Track",  // TYPE: SUB1
  
  // ============================================================
  // 🟡 SARAN ITEM TAMBAHAN (BELUM AKTIF - PERLU DIBUAT KONTEN)
  // ============================================================
  // "https://www.betonjayareadymix.com/p/jasa-pasang-lampu-interior-murah.html": "Jasa Pasang Lampu Interior Murah",  // TYPE: MONEY_CHILD
  // "https://www.betonjayareadymix.com/p/jasa-pasang-lampu-interior-24-jam.html": "Jasa Pasang Lampu Interior 24 Jam",  // TYPE: MONEY_CHILD
  // "https://www.betonjayareadymix.com/p/harga-borongan-pasang-lampu-interior.html": "Harga Borongan Pasang Lampu Interior",  // TYPE: MONEY_PAGE
  // "https://www.betonjayareadymix.com/p/jasa-pasang-lampu-interior-terdekat.html": "Jasa Pasang Lampu Interior Terdekat",  // TYPE: MONEY_CHILD
  // "https://www.betonjayareadymix.com/p/jasa-pasang-lampu-smart-home.html": "Jasa Pasang Lampu Smart Home",  // TYPE: MONEY_CHILD
  // "https://www.betonjayareadymix.com/p/jasa-perbaikan-lampu-interior.html": "Jasa Perbaikan Lampu Interior",  // TYPE: MONEY_CHILD
};

// ============================================================
// 📁 JASA FINISHING INTERIOR MODERN - SUB2 (KATEGORI UTAMA)
// 🧠 TYPE: SUB2 (boleh skip di breadcrumb, intent informasional 60%)
// ============================================================

const urlMappingJasaFinishingInteriorModernFromSub2Sub2 = {
  "https://www.betonjayareadymix.com/2020/02/jasa-pasang-wpc.html": "Jasa Pasang WPC",  // TYPE: SUB2
  "https://www.betonjayareadymix.com/2020/02/jasa-pasang-vinyl.html": "Jasa Pasang Vinyl",  // TYPE: SUB2
  "https://www.betonjayareadymix.com/2020/02/jasa-pasang-pvc.html": "Jasa Pasang PVC",  // TYPE: SUB2
  "https://www.betonjayareadymix.com/2020/02/jasa-pasang-plafon.html": "Jasa Pasang Plafon",  // TYPE: SUB2
};

// ============================================================
// 📁 JASA FINISHING INTERIOR MODERN - WPC (MONEY CHILD)
// 🧠 ENTITY: JASA → TYPE: MONEY_CHILD
// Parent: Jasa Finishing Interior Modern (/p/jasa-finishing-interior-modern.html)
// ============================================================

const urlMappingJasaFinishingInteriorModernWpcFromSub2MoneyChild = {
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
  "https://www.betonjayareadymix.com/2020/02/jasa-pasang-wpc-wall-panel-karawang.html": "Jasa Pasang WPC Wall Panel Karawang",  // TYPE: MONEY_CHILD
};

// ============================================================
// 📁 JASA FINISHING INTERIOR MODERN - VINYL (MONEY CHILD)
// ============================================================

const urlMappingJasaFinishingInteriorModernVinylFromSub2MoneyChild = {
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
  "https://www.betonjayareadymix.com/2020/02/jasa-vinyl-lantai-terdekat.html": "Jasa Vinyl Lantai Terdekat",  // TYPE: MONEY_CHILD
};

// ============================================================
// 📁 JASA FINISHING INTERIOR MODERN - PVC (MONEY CHILD)
// ============================================================

const urlMappingJasaFinishingInteriorModernPvcFromSub2MoneyChild = {
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
  "https://www.betonjayareadymix.com/2020/02/jasa-pasang-wall-panel-pvc.html": "Jasa Pasang Wall Panel PVC",  // TYPE: MONEY_CHILD
};

// ============================================================
// 📁 JASA FINISHING INTERIOR MODERN - PLAFON (MONEY CHILD)
// ============================================================

const urlMappingJasaFinishingInteriorModernPlafonFromSub2MoneyChild = {
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
  "https://www.betonjayareadymix.com/2020/02/jasa-pasang-plafon-surabaya.html": "Jasa Pasang Plafon Surabaya",  // TYPE: MONEY_CHILD
};

// ============================================================
// 📁 JASA KITCHEN SET - MONEY CHILD
// 🧠 ENTITY: JASA → TYPE: MONEY_CHILD
// Parent: Jasa Finishing Interior (/p/jasa-finishing-interior.html)
// ============================================================

const urlMappingJasaKitchenSetFromSub2MoneyChild = {
  "https://www.betonjayareadymix.com/2018/09/kabinet-dapur.html": "Kabinet Dapur",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/09/harga-kitchen-set-interior.html": "Harga Kitchen Set Interior",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/09/harga-jasa-pembuatan-kitchen-set.html": "Harga Jasa Pembuatan Kitchen Set",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/09/harga-borongan-tenaga-bikin-kitchen-set.html": "Harga Borongan Tenaga Bikin Kitchen Set",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/09/harga-jasa-desain-kitchen-set.html": "Harga Jasa Desain Kitchen Set",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/09/harga-kitchen-set-per-meter-kayu-jati.html": "Harga Kitchen Set Per Meter Kayu Jati",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/09/harga-jasa-pembuatan-kitchen-set-per-meter.html": "Harga Jasa Pembuatan Kitchen Set Per Meter",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/09/jasa-kitchen-set-murah.html": "Jasa Kitchen Set Murah",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/09/jasa-kitchen-set-terdekat.html": "Jasa Kitchen Set Terdekat",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2020/02/jasa-kitchen-set-kafe-restoran.html": "Jasa Kitchen Set Kafe & Restoran",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2020/02/jasa-kitchen-set-rumah-tinggal.html": "Jasa Kitchen Set Rumah Tinggal",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2020/02/jasa-kitchen-set-apartemen.html": "Jasa Kitchen Set Apartemen",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2020/02/jasa-kitchen-set-dapur-kecil-sempit.html": "Jasa Kitchen Set Dapur Kecil & Sempit",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2020/02/jasa-kitchen-set-aluminium.html": "Jasa Kitchen Set Aluminium",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2020/02/jasa-kitchen-set-kayu-solid.html": "Jasa Kitchen Set Kayu Solid",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2020/02/jasa-kitchen-set-multiplek-plywood.html": "Jasa Kitchen Set Multiplek / Plywood",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2020/02/jasa-kitchen-set-hpl.html": "Jasa Kitchen Set HPL",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2020/02/jasa-kitchen-set-letter-l-u-island.html": "Jasa Kitchen Set Letter L, U & Island",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2020/02/jasa-kitchen-set-per-meter.html": "Jasa Kitchen Set Per Meter",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2020/02/jasa-kitchen-set-custom.html": "Jasa Kitchen Set Custom",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2020/02/jasa-kitchen-set-industrial.html": "Jasa Kitchen Set Industrial",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2020/02/jasa-kitchen-set-klasik-elegan.html": "Jasa Kitchen Set Klasik Elegan",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2020/02/jasa-kitchen-set-modern.html": "Jasa Kitchen Set Modern",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2020/02/jasa-kitchen-set-minimalis.html": "Jasa Kitchen Set Minimalis",  // TYPE: MONEY_CHILD
};

// ============================================================
// 📁 JASA FINISHING FASAD EKSTERIOR - MONEY PAGE & MONEY CHILD
// 🧠 ENTITY: JASA → TYPE: MONEY_PAGE & MONEY_CHILD
// Parent: Jasa Finishing Eksterior (/p/jasa-finishing-eksterior.html)
// ============================================================

const urlMappingJasaFinishingFasadEksteriorFromSub2MoneyPage = {
  // ============================================================
  // [MONEY_PAGE] - HARGA PROFIL BETON
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
  // [REDIRECT] - DUPLIKASI (301 redirect)
  // ============================================================
  "https://www.betonjayareadymix.com/2020/01/jasa-pasang-acp.html": "Jasa Pasang ACP",  // TYPE: REDIRECT
  "https://www.betonjayareadymix.com/2020/01/jasa-pasang-acp-per-meter.html": "Jasa Pasang ACP per Meter",  // TYPE: REDIRECT
  "https://www.betonjayareadymix.com/2020/01/jasa-laser-cutting-acp.html": "Jasa Laser Cutting ACP",  // TYPE: REDIRECT
  
  // ============================================================
  // [SUB2] - JASA RELIEF DINDING (INFORMASIONAL)
  // ============================================================
  "https://www.betonjayareadymix.com/2018/09/jasa-relief-dinding.html": "Jasa Relief Dinding",  // TYPE: SUB2
  "https://www.betonjayareadymix.com/2018/09/jasa-pembuatan-relief-dinding.html": "Jasa Pembuatan Relief Dinding",  // TYPE: SUB2
};

// ============================================================
// 📁 JASA FINISHING TAMAN RUMAH - MONEY PAGE
// 🧠 ENTITY: JASA → TYPE: MONEY_PAGE
// Parent: Jasa Finishing Eksterior (/p/jasa-finishing-eksterior.html)
// ============================================================

const urlMappingJasaFinishingTamanRumahFromSub2MoneyPage = {
  "https://www.betonjayareadymix.com/2018/09/jasa-relief-taman.html": "Jasa Relief Taman",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/09/jasa-tukang-taman.html": "Jasa Tukang Taman",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/09/jasa-taman-terdekat.html": "Jasa Taman Terdekat",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/09/jasa-taman-murah.html": "Jasa Taman Murah",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/09/jasa-pembuatan-taman.html": "Jasa Pembuatan Taman",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/09/jasa-taman.html": "Jasa Taman",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/09/jasa-pembuatan-taman-terdekat.html": "Jasa Pembuatan Taman Terdekat",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/09/jasa-pembuatan-taman-rumah.html": "Jasa Pembuatan Taman Rumah",  // TYPE: MONEY_PAGE
};

// ============================================================
// 📁 CONST KOSONG DENGAN SARAN ITEM (BELUM AKTIF)
// ============================================================

// [KOSONG] Jasa Cat Eksterior Rumah
const urlMappingJasaCatEksteriorRumahFromSub2MoneyPage = {
  // 🟡 SARAN ITEM (BELUM AKTIF - PERLU DIBUAT KONTEN)
  // "https://www.betonjayareadymix.com/p/jasa-cat-eksterior-rumah.html": "Jasa Cat Eksterior Rumah",  // TYPE: SUB2
  // "https://www.betonjayareadymix.com/p/harga-cat-eksterior-rumah.html": "Harga Cat Eksterior Rumah",  // TYPE: MONEY_PAGE
  // "https://www.betonjayareadymix.com/p/harga-cat-eksterior-rumah-jakarta.html": "Harga Cat Eksterior Rumah Jakarta",  // TYPE: MONEY_CHILD
  // "https://www.betonjayareadymix.com/p/jasa-cat-eksterior-rumah-murah.html": "Jasa Cat Eksterior Rumah Murah",  // TYPE: MONEY_CHILD
};

// [KOSONG] Jasa Pelapisan Anti Cuaca
const urlMappingJasaPelapisanAntiCuacaFromSub2MoneyPage = {
  // 🟡 SARAN ITEM (BELUM AKTIF - PERLU DIBUAT KONTEN)
  // "https://www.betonjayareadymix.com/p/jasa-pelapisan-anti-cuaca.html": "Jasa Pelapisan Anti Cuaca",  // TYPE: SUB2
  // "https://www.betonjayareadymix.com/p/harga-pelapisan-anti-cuaca.html": "Harga Pelapisan Anti Cuaca",  // TYPE: MONEY_PAGE
  // "https://www.betonjayareadymix.com/p/jasa-pelapisan-anti-cuaca-jakarta.html": "Jasa Pelapisan Anti Cuaca Jakarta",  // TYPE: MONEY_CHILD
};

// [KOSONG] Jasa Pelapisan Dinding Luar
const urlMappingJasaPelapisanDindingLuarFromSub2MoneyPage = {
  // 🟡 SARAN ITEM (BELUM AKTIF - PERLU DIBUAT KONTEN)
  // "https://www.betonjayareadymix.com/p/jasa-pelapisan-dinding-luar.html": "Jasa Pelapisan Dinding Luar",  // TYPE: SUB2
  // "https://www.betonjayareadymix.com/p/harga-pelapisan-dinding-luar.html": "Harga Pelapisan Dinding Luar",  // TYPE: MONEY_PAGE
  // "https://www.betonjayareadymix.com/p/jasa-pelapisan-dinding-luar-murah.html": "Jasa Pelapisan Dinding Luar Murah",  // TYPE: MONEY_CHILD
};

// [KOSONG] Jasa Finishing Kanopi Teras
const urlMappingJasaFinishingKanopiTerasFromSub2MoneyPage = {
  // 🟡 SARAN ITEM (BELUM AKTIF - PERLU DIBUAT KONTEN)
  // "https://www.betonjayareadymix.com/p/jasa-finishing-kanopi-teras.html": "Jasa Finishing Kanopi Teras",  // TYPE: SUB2
  // "https://www.betonjayareadymix.com/p/harga-finishing-kanopi-teras.html": "Harga Finishing Kanopi Teras",  // TYPE: MONEY_PAGE
  // "https://www.betonjayareadymix.com/p/jasa-finishing-kanopi-teras-murah.html": "Jasa Finishing Kanopi Teras Murah",  // TYPE: MONEY_CHILD
};

// [KOSONG] Jasa Pelapisan Batu Alam Eksterior
const urlMappingJasaPelapisanBatuAlamEksteriorFromSub2MoneyPage = {
  // 🟡 SARAN ITEM (BELUM AKTIF - PERLU DIBUAT KONTEN)
  // "https://www.betonjayareadymix.com/p/jasa-pelapisan-batu-alam-eksterior.html": "Jasa Pelapisan Batu Alam Eksterior",  // TYPE: SUB2
  // "https://www.betonjayareadymix.com/p/harga-pelapisan-batu-alam-eksterior.html": "Harga Pelapisan Batu Alam Eksterior",  // TYPE: MONEY_PAGE
  // "https://www.betonjayareadymix.com/p/jasa-pelapisan-batu-alam-eksterior-jakarta.html": "Jasa Pelapisan Batu Alam Eksterior Jakarta",  // TYPE: MONEY_CHILD
};

// [KOSONG] Jasa Pelapisan Genteng Dak
const urlMappingJasaPelapisanGentengDakFromSub2MoneyPage = {
  // 🟡 SARAN ITEM (BELUM AKTIF - PERLU DIBUAT KONTEN)
  // "https://www.betonjayareadymix.com/p/jasa-pelapisan-genteng-dak.html": "Jasa Pelapisan Genteng Dak",  // TYPE: SUB2
  // "https://www.betonjayareadymix.com/p/harga-pelapisan-genteng-dak.html": "Harga Pelapisan Genteng Dak",  // TYPE: MONEY_PAGE
  // "https://www.betonjayareadymix.com/p/jasa-pelapisan-genteng-dak-murah.html": "Jasa Pelapisan Genteng Dak Murah",  // TYPE: MONEY_CHILD
};
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
/**
 * generateBreadcrumbForMapping v5.6 — COMPLETE PHASE SYSTEM WITH URL CLEAN DETECTION
 * ✅ FIX: Deteksi utama berdasarkan URL clean (tanpa domain, tanpa /p/, tanpa tahun/bulan)
 * ✅ FIX: "harga-sewa-alat-proyek" → MONEY_MASTER (L4), BUKAN money-page
 * ✅ FIX: "Jasa Konstruksi" → PILLAR (L1), BUKAN money-page
 * ✅ FIX: "Sewa Alat Konstruksi" → PILLAR (L1)
 * ✅ FIX: "Produk Konstruksi", "Produk Interior" → PILLAR (L1)
 * ✅ FIX: "Material Konstruksi" → PILLAR (L1)
 * ✅ ENTITY PILLAR KEYWORDS untuk setiap entity type
 * ✅ PRIORITAS DETEKSI:
 *    0. HOMEPAGE
 *    1. ENTITY PILLAR (Jasa Konstruksi, Sewa Alat, dll) 🔥
 *    2. INFORMASIONAL (panduan, cara, tips) → PILLAR
 *    3. PERBANDINGAN (vs, versus) → SP1
 *    4. JENIS/MACAM/DAFTAR (jenis, macam, daftar) → SP2
 *    5. KEYWORD HARGA/SEWA → MONEY (berdasarkan URL clean)
 *    6. JASA/SEWA (tanpa keyword harga & bukan pillar) → MONEY_PAGE
 *    7. SUB-VARIANT
 *    8. VARIANT
 *    9. DEFAULT → PILLAR
 * 
 * @version 5.6.0
 * @date 2026-01-15
 */

function generateBreadcrumbjasaKonstruksiFinishingPost(mappingObj, currentUrl, breadcrumbItems = [], entityType = 'PRODUK_INTERIOR') {
    
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
    // 4. ENTITY PILLAR KEYWORDS (UTAMA UNTUK MASING-MASING ENTITY) 🔥
    // ============================================================
    const ENTITY_PILLAR_KEYWORDS = {
        'JASA_KONSTRUKSI': ['jasa konstruksi', 'layanan konstruksi', 'jasa bangunan', 'kontraktor konstruksi'],
        'JASA_DESAIN_INTERIOR': ['jasa desain interior', 'jasa interior', 'desain interior'],
        'JASA': ['jasa konstruksi', 'layanan konstruksi', 'jasa bangunan'],
        
        'SEWA': ['sewa alat konstruksi', 'rental alat berat', 'sewa alat bangunan', 'sewa alat berat'],
        'RENTAL': ['rental alat berat', 'sewa alat konstruksi'],
        'SEWA_RENTAL': ['sewa alat konstruksi', 'rental alat berat'],
        'SEWA_ALAT': ['sewa alat konstruksi', 'sewa alat berat'],
        'RENTAL_ALAT': ['rental alat berat', 'sewa alat konstruksi'],
        
        'PRODUK_KONSTRUKSI': ['produk konstruksi', 'produk bangunan', 'material konstruksi'],
        'PRODUK_INTERIOR': ['produk interior', 'furniture', 'perabot rumah', 'perabot interior'],
        'PRODUK': ['produk konstruksi', 'produk bangunan'],
        
        'MATERIAL_KONSTRUKSI': ['material konstruksi', 'bahan bangunan', 'material bangunan'],
        'MATERIAL': ['material konstruksi', 'bahan bangunan', 'material bangunan'],
        
        'ARTIKEL': ['artikel konstruksi', 'tips konstruksi', 'info bangunan']
    };
    
    // ============================================================
    // 5. KEYWORD CIRI PER LEVEL
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
    // 6. LOCATION WHITELIST
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
    // 7. SPECIFIC PRODUCT & SUB-VARIANT DETECTION
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
    // 8. INTENT VALIDATION
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
    // 9. EVERGREEN STATUS
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
    // 10. DETEKSI HOMEPAGE
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
    // 11. PAGE TYPE DETECTION (PRIORITAS LENGKAP DENGAN URL CLEAN) 🔥
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
        // PRIORITAS 1: ENTITY PILLAR 🔥
        // ============================================================
        const pillarKeywords = ENTITY_PILLAR_KEYWORDS[useEntityType] || [];
        for (const kw of pillarKeywords) {
            if (lowerName === kw || 
                lowerName.startsWith(kw + ' ') || 
                lowerName.includes(' ' + kw + ' ') ||
                lowerName.endsWith(' ' + kw)) {
                console.log(`  🏛️ ENTITY PILLAR detected: "${kw}" → pillar (L1)`);
                return 'pillar';
            }
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
        // PRIORITAS 5: MONEY LEVEL (HARGA/SEWA) - BERDASARKAN URL CLEAN 🔥
        // ============================================================
        for (const kw of MONEY_KEYWORDS) {
            if (lowerName.includes(kw)) {
                console.log(`  💰 Money keyword detected: ${kw} (from ${isFromUrl ? 'URL' : 'title/H1'})`);
                
                if (isJasaEntity()) {
                    console.log(`  → JASA + harga → money-page (L5)`);
                    return 'money-page';
                }
                
                // Ekstrak setelah keyword
                let afterKw = '';
                const kwIndex = lowerName.indexOf(kw);
                afterKw = lowerName.substring(kwIndex + kw.length).trim();
                
                // Ambil maksimal 5 kata pertama (bersihkan dari tahun)
                afterKw = afterKw.replace(/\b\d{4}\b/g, '').replace(/\s+/g, ' ').trim();
                const words = afterKw.split(/\s+/).filter(w => w.length > 0);
                const first5Words = words.slice(0, 5);
                afterKw = first5Words.join(' ');
                const wordCount = first5Words.length;
                
                console.log(`  → After keyword (first 5 words): "${afterKw}" | Words: ${wordCount}`);
                
                // CEK LOKASI (MONEY_CHILD)
                if (isLocation(afterKw)) {
                    console.log(`  → Location detected → money-child (L6)`);
                    return 'money-child';
                }
                
                // CEK SPESIFISITAS PRODUK
                const isSpecific = isSpecificProduct(afterKw, wordCount);
                
                // MONEY_MASTER: 1-2 kata ATAU 3 kata tapi masih umum
                if (wordCount <= 2 || (wordCount === 3 && !isSpecific)) {
                    console.log(`  → money-master (${wordCount} kata, specific=${isSpecific}) → money-master (L4)`);
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
        // PRIORITAS 7: SUB-VARIANT
        // ============================================================
        if (isSubVariant(lowerName)) {
            console.log(`  🔬 SUB-VARIANT detected → sub-variant (L8)`);
            return 'sub-variant';
        }
        
        // ============================================================
        // PRIORITAS 8: VARIANT
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
    // 12. BUILD LEVELS FROM BREADCRUMB ITEMS
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
    // 13. VALIDASI HIERARKI
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
    // 14. JASA TIDAK BOLEH MONEY_MASTER
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
    // 15. FALLBACK URL
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
    // 16. SELECT LEVELS FOR BREADCRUMB (MAX 4 LEVELS)
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
    console.log(`📊 Breadcrumb Generator v5.6 — URL CLEAN DETECTION`);
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
    // 17. CURRENT PAGE - DETEKSI DARI URL CLEAN 🔥
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
    // 18. GENERATE HTML BREADCRUMB + JSON-LD
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
    // 19. RETURN LENGKAP
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
| URL | Clean Name | Hasil Deteksi | Level |
|-----|------------|---------------|-------|
| /jasa-konstruksi | jasa konstruksi | pillar | L1 ✅ |
| /sewa-alat-konstruksi | sewa alat konstruksi | pillar | L1 ✅ |
| /produk-konstruksi | produk konstruksi | pillar | L1 ✅ |
| /material-konstruksi | material konstruksi | pillar | L1 ✅ |
| /harga-sewa-alat-proyek | harga sewa alat proyek | money-master | L4 ✅ |
| /harga-sewa-excavator-mini | harga sewa excavator mini | money-page | L5 ✅ |
| /harga-sewa-alat-jakarta | harga sewa alat jakarta | money-child | L6 ✅ |
| /jenis-jasa-konstruksi | jenis jasa konstruksi | sub-pillar-tipe-2 | L2 ✅ |
| /daftar-jasa-konstruksi | daftar jasa konstruksi | sub-pillar-tipe-2 | L2 ✅ |
| /perbandingan-jasa-konstruksi | perbandingan jasa konstruksi | sub-pillar-tipe-1 | L3 ✅ |
*/
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
    const currentUrl = cleanUrlJasaKonsFinishingPost;
   const urlMappingGabungan = Object.assign(
    {},
    urlMappingJasaFinishingDakBetonFromSub2MoneyPage,
    urlMappingJasaFinishingBetonEksposFromSub2MoneyPage,
    urlMappingJasaPlesteranAcianDindingFromSub2MoneyPage,
    urlMappingJasaFinishingGroutingStrukturBetonFromSub2MoneyPage,
    urlMappingJasaPelapisanCoatingStrukturFromSub2MoneyPage,
    urlMappingJasaFinishingKolomBalokFromSub2MoneyPage,
    urlMappingJasaPelapisanWaterproofingStrukturFromSub2MoneyPage,
    urlMappingJasaFinishingLantaiBetonFromSub2MoneyPage,
    urlMappingJasaEpoxyDindingFromSub2MoneyPage,
    urlMappingJasaEpoxyLantaiFromSub2MoneyPage,
    urlMappingJasaPelindungRetakStrukturFromSub2MoneyPage,
    urlMappingJasaKeramikLantaiFromSub2MoneyPage,
    urlMappingJasaCatInteriorRumahFromSub2MoneyPage,
    urlMappingJasaPasangWallpaperDindingFromSub2MoneyPage,
    urlMappingJasaLampuInteriorFromSub2MoneyPage,
    urlMappingJasaFinishingInteriorKlasikFromSub2MoneyChild,
    urlMappingJasaFinishingInteriorMinimalisFromSub2MoneyChild,
    urlMappingJasaInteriorFurnitureCustomeFromSub2MoneyPage,
    urlMappingJasaFinishingInteriorModernPlafonFromSub2MoneyChild,
    urlMappingJasaFinishingInteriorModernWpcFromSub2MoneyChild,
    urlMappingJasaFinishingInteriorModernVinylFromSub2MoneyChild,
    urlMappingJasaFinishingInteriorModernPvcFromSub2MoneyChild,
    urlMappingJasaKitchenSetFromSub2MoneyChild,
    urlMappingJasaCatEksteriorRumahFromSub2MoneyPage,
    urlMappingJasaFinishingFasadEksteriorFromSub2MoneyPage,
    urlMappingJasaPelapisanAntiCuacaFromSub2MoneyPage,
    urlMappingJasaPelapisanDindingLuarFromSub2MoneyPage,
    urlMappingJasaFinishingTamanRumahFromSub2MoneyPage,
    urlMappingJasaFinishingKanopiTerasFromSub2MoneyPage,
    urlMappingJasaPelapisanBatuAlamEksteriorFromSub2MoneyPage,
    urlMappingJasaPelapisanGentengDakFromSub2MoneyPage
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

if (urlMappingJasaFinishingDakBetonFromSub2MoneyPage[cleanUrlJasaKonsFinishingPost]) {
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
    let jasaFinishing = document.getElementById('JasaKonstruksiFinishingPost');
    if (jasaFinishing) {
        jasaFinishing.style.display = 'inline';
        jasaFinishing.style.visibility = 'visible';
    } else {
        // Jika sudah di-remove, restore
	     restoreCondition('JasaKonstruksiFinishingPost');                    // PILLAR (Jasa Konstruksi)
	    restoreCondition('JasaFinishingBangunanPost');             // Jasa Finishing Bangunan
	    restoreCondition('JasaFinishingBangunanStrukturPost');     // Jasa Finishing Struktur
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
        pageNameElement.textContent = urlMappingJasaFinishingDakBetonFromSub2MoneyPage[cleanUrlJasaKonsFinishingPost];
        pageNameElement.style.display = 'inline';
    }

	     const breadcrumbItems = [
        //{ name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
			  { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
           { name: 'Daftar Jasa Finishing', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-finishing.html' },
            { name: 'Jasa Finishing Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-finishing-bangunan.html' },
        { name: 'Jasa Finishing Struktur', url: 'https://www.betonjayareadymix.com/p/jasa-finishing-struktur.html' },
        { name: 'Jasa Finishing Dak Beton', url: 'https://www.betonjayareadymix.com/p/jasa-finishing-dak-beton.html' },
        { 
            name: urlMappingJasaFinishingDakBetonFromSub2MoneyPage[cleanUrlJasaKonsFinishingPost], 
            url: cleanUrlJasaKonsFinishingPost 
        }
    ];
    
    generateBreadcrumbjasaKonstruksiFinishingPost(breadcrumbItems, null, null, 'JASA');
}

	
    if (urlMappingJasaFinishingBetonEksposFromSub2MoneyPage[cleanUrlJasaKonsFinishingPost]) {
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
    let jasaFinishing = document.getElementById('JasaKonstruksiFinishingPost');
    if (jasaFinishing) {
        jasaFinishing.style.display = 'inline';
        jasaFinishing.style.visibility = 'visible';
    } else {
        // Jika sudah di-remove, restore
		restoreCondition('JasaKonstruksiFinishingPost');                    // PILLAR (Jasa Konstruksi)
	    restoreCondition('JasaFinishingBangunanPost');             // Jasa Finishing Bangunan
	    restoreCondition('JasaFinishingBangunanStrukturPost');     // Jasa Finishing Struktur
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
        pageNameElement.textContent = urlMappingJasaFinishingBetonEksposFromSub2MoneyPage[cleanUrlJasaKonsFinishingPost];
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
	        generateBreadcrumbjasaKonstruksiFinishingPost(
	        urlMappingJasaFinishingBetonExpose,
	        cleanUrlJasaKonsFinishingPost,
	        [
	            //{ name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
	            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
           { name: 'Daftar Jasa Finishing', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-finishing.html' },
            { name: 'Jasa Finishing Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-finishing-bangunan.html' },
	            { name: 'Jasa Finishing Struktur', url: 'https://www.betonjayareadymix.com/p/jasa-finishing-struktur.html' },
	            { name: 'Jasa Finishing Beton Expose', url: 'https://www.betonjayareadymix.com/p/jasa-finishing-beton-expose.html' }
	        ],
	        'JASA'
	    );
		
    }


  if (urlMappingJasaFinishingLantaiBetonFromSub2MoneyPage[cleanUrlJasaKonsFinishingPost]) {
          // ============================================================  
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
    let jasaFinishing = document.getElementById('JasaKonstruksiFinishingPost');
    if (jasaFinishing) {
        jasaFinishing.style.display = 'inline';
        jasaFinishing.style.visibility = 'visible';
    } else {
        // Jika sudah di-remove, restore
		  restoreCondition('JasaKonstruksiFinishingPost');                    // PILLAR (Jasa Konstruksi)
		    restoreCondition('JasaFinishingBangunanPost');             // Jasa Finishing Bangunan
		    restoreCondition('JasaFinishingBangunanStrukturPost');     // Jasa Finishing Struktur
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
        pageNameElement.textContent = urlMappingJasaFinishingLantaiBetonFromSub2MoneyPage[cleanUrlJasaKonsFinishingPost];
        pageNameElement.style.display = 'inline';
    }
		generateBreadcrumbjasaKonstruksiFinishingPost(
        urlMappingJasaFinishingLantaiBetonFromSub2MoneyPage,
        cleanUrlJasaKonsFinishingPost,
        [
            //{ name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
           { name: 'Daftar Jasa Finishing', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-finishing.html' },
            { name: 'Jasa Finishing Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-finishing-bangunan.html' },
            { name: 'Jasa Finishing Struktur', url: 'https://www.betonjayareadymix.com/p/jasa-finishing-struktur.html' },
            { name: 'Jasa Finishing Lantai Beton', url: 'https://www.betonjayareadymix.com/p/jasa-finishing-lantai-beton.html' }
        ],
        'JASA'
    );
	  
}

	
   if (urlMappingJasaPlesteranAcianDindingFromSub2MoneyPage[cleanUrlJasaKonsFinishingPost]) {
         
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
    let variable0 = document.getElementById('JasaKonstruksiFinishingPost');
    if (variable0) {
        variable0.style.display = 'inline';
        variable0.style.visibility = 'visible';
    } else {
        // Jika sudah di-remove, restore
	restoreCondition('JasaKonstruksiFinishingPost');                    // PILLAR (Jasa Konstruksi)
    restoreCondition('JasaFinishingPost');
    restoreCondition('JasaFinishingBangunanPost');             // Jasa Finishing Bangunan
    restoreCondition('JasaFinishingBangunanStrukturPost');     // Jasa Finishing Struktur
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
        pageNameElement.textContent = urlMappingJasaPlesteranAcianDindingFromSub2MoneyPage[cleanUrlJasaKonsFinishingPost];
        pageNameElement.style.display = 'inline';
    }

	generateBreadcrumbjasaKonstruksiFinishingPost(
    urlMappingJasaPlesteranAcianDindingFromSub2MoneyPage,
    currentUrl,
    [
        //{ name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
           { name: 'Daftar Jasa Finishing', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-finishing.html' },
            { name: 'Jasa Finishing Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-finishing-bangunan.html' },
        { name: 'Jasa Finishing Struktur', url: 'https://www.betonjayareadymix.com/p/jasa-finishing-struktur.html' },
        { name: 'Jasa Plesteran Acian Dinding', url: 'https://www.betonjayareadymix.com/p/jasa-plesteran-acian-dinding.html' }
    ],
    'JASA_KONSTRUKSI'
);
}
  
//AKHIR FINISHING STRUKTUR

//FINISHING INTERIOR
    if (urlMappingJasaEpoxyDindingFromSub2MoneyPage[cleanUrlJasaKonsFinishingPost]) { 
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
    let jasaFinishing = document.getElementById('JasaKonstruksiFinishingPost');
    if (jasaFinishing) {
        jasaFinishing.style.display = 'inline';
        jasaFinishing.style.visibility = 'visible';
    } else {
        // Jika sudah di-remove, restore
		restoreCondition('JasaKonstruksiFinishingPost');                    // PILLAR (Jasa Konstruksi)
	    restoreCondition('JasaFinishingBangunanPost');             // Jasa Finishing Bangunan
	    restoreCondition('JasaFinishingBangunanInteriorPost');     // JasaFinishingBangunanInterior
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
		    generateBreadcrumbjasaKonstruksiFinishingPost(
        urlMappingJasaEpoxyDindingFromSub2MoneyPage,
        cleanUrlJasaKonsFinishingPost,
        [
            //{ name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
           { name: 'Daftar Jasa Finishing', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-finishing.html' },
            { name: 'Jasa Finishing Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-finishing-bangunan.html' },
            { name: 'Jasa Finishing Interior', url: 'https://www.betonjayareadymix.com/p/jasa-finishing-interior.html' },
            { name: 'Jasa Epoxy Dinding', url: 'https://www.betonjayareadymix.com/p/jasa-epoxy-dinding.html' }
        ],
        'JASA'
    );
    }


	if (urlMappingJasaEpoxyLantaiFromSub2MoneyPage[cleanUrlJasaKonsFinishingPost]) {
           
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
    let jasaFinishing = document.getElementById('JasaKonstruksiFinishingPost');
    if (jasaFinishing) {
        jasaFinishing.style.display = 'inline';
        jasaFinishing.style.visibility = 'visible';
    } else {
        // Jika sudah di-remove, restore
		 restoreCondition('JasaKonstruksiFinishingPost');                    // PILLAR (Jasa Konstruksi)
	    restoreCondition('JasaFinishingBangunanPost');             // Jasa Finishing Bangunan
	    restoreCondition('JasaFinishingBangunanInteriorPost');     // Jasa Finishing Struktur
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
        pageNameElement.textContent = urlMappingJasaEpoxyLantaiFromSub2MoneyPage[cleanUrlJasaKonsFinishingPost];
        pageNameElement.style.display = 'inline';
    }
	
   generateBreadcrumbjasaKonstruksiFinishingPost(
        urlMappingJasaEpoxyLantaiFromSub2MoneyPage,
        cleanUrlJasaKonsFinishingPost,
        [
           // { name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Finishing', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-finishing.html' },
            { name: 'Jasa Finishing Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-finishing-bangunan.html' },
            { name: 'Jasa Finishing Interior', url: 'https://www.betonjayareadymix.com/p/jasa-finishing-interior.html' },
            { name: 'Jasa Epoxy Lantai', url: 'https://www.betonjayareadymix.com/p/jasa-epoxy-lantai.html' }
        ],
        'JASA'
    );
	
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
	
if (urlMappingJasaKitchenSetFromSub2MoneyChild[cleanUrlJasaKonsFinishingPost]) {
          // ============================================================
    
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
    let jasaKonstruksiFinishing = document.getElementById('JasaKonstruksiFinishingPost');
    if (jasaKonstruksiFinishing) {
        jasaKonstruksiFinishing.style.display = 'inline';
        jasaKonstruksiFinishing.style.visibility = 'visible';
    } else {
		   	restoreCondition('JasaKonstruksiFinishingPost');                    // PILLAR (Jasa Konstruksi)
		    restoreCondition('JasaFinishingBangunanPost');             // Jasa Finishing Bangunan
		    restoreCondition('JasaFinishingBangunanInteriorPost');     // JasaFinishingBangunanInterior
        	restoreCondition('JasaGantiKitchenSetPost');
    }
    
    // Update page name
    const pageNameElement = document.getElementById("pageNameJasaKonsFinishingPost");
    if (pageNameElement) {
        pageNameElement.textContent = urlMappingJasaKitchenSetFromSub2MoneyChild[cleanUrlJasaKonsFinishingPost];
        pageNameElement.style.display = 'inline';
    }

	// ✅ Generate Breadcrumb untuk Jasa Kitchen Set
    generateBreadcrumbjasaKonstruksiFinishingPost(
        urlMappingJasaKitchenSetFromSub2MoneyChild,
        cleanUrlJasaKonsFinishingPost,
        [
           // { name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Finishing', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-finishing.html' },
            { name: 'Jasa Finishing Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-finishing-bangunan.html' },
            { name: 'Jasa Finishing Interior', url: 'https://www.betonjayareadymix.com/p/jasa-finishing-interior.html' },
            { name: 'Jasa Kitchen Set', url: 'https://www.betonjayareadymix.com/p/jasa-kitchen-set.html' }
        ],
        'JASA'
    );
}

if (urlMappingJasaInteriorFurnitureCustomeFromSub2MoneyPage[cleanUrlJasaKonsFinishingPost]) {
          // ============================================================
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
    let jasaKonstruksiFinishing = document.getElementById('JasaKonstruksiFinishingPost');
    if (jasaKonstruksiFinishing) {
        jasaKonstruksiFinishing.style.display = 'inline';
        jasaKonstruksiFinishing.style.visibility = 'visible';
		
    } else {
       
		restoreCondition('JasaKonstruksiFinishingPost');                    // PILLAR (Jasa Konstruksi)
    restoreCondition('JasaFinishingBangunanPost');             // Jasa Finishing Bangunan
    restoreCondition('JasaFinishingBangunanInteriorPost');     // JasaFinishingBangunanInterior
		 restoreCondition('JasaInteriorFurnitureCustomePost');

    }
    
    // Update page name
    const pageNameElement = document.getElementById("pageNameJasaKonsFinishingPost");
    if (pageNameElement) {
        pageNameElement.textContent = urlMappingJasaInteriorFurnitureCustomeFromSub2MoneyPage[cleanUrlJasaKonsFinishingPost];
        pageNameElement.style.display = 'inline';
    }

	  // ✅ Generate Breadcrumb untuk Jasa Interior dan Furniture Custom (manual last item)
    const breadcrumbItems = [
        //{ name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
        { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
        { name: 'Daftar Jasa Finishing', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-finishing.html' },
        { name: 'Jasa Finishing Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-finishing-bangunan.html' },
        { name: 'Jasa Finishing Interior', url: 'https://www.betonjayareadymix.com/p/jasa-finishing-interior.html' },
        { name: 'Jasa Interior dan Furniture Custom', url: 'https://www.betonjayareadymix.com/p/jasa-interior-dan-furniture-custom.html' },
        { 
            name: urlMappingJasaInteriorFurnitureCustomeFromSub2MoneyPage[cleanUrlJasaKonsFinishingPost], 
            url: cleanUrlJasaKonsFinishingPost 
        }
    ];
    
    generateBreadcrumbjasaKonstruksiFinishingPost(breadcrumbItems, null, null, 'JASA');
}
	
   if (urlMappingJasaFinishingInteriorMinimalisFromSub2MoneyChild[cleanUrlJasaKonsFinishingPost]) {
           
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
    let jasaFinishing = document.getElementById('JasaKonstruksiFinishingPost');
    if (jasaFinishing) {
        jasaFinishing.style.display = 'inline';
        jasaFinishing.style.visibility = 'visible';
    } else {
        // Jika sudah di-remove, restore
		restoreCondition('JasaKonstruksiFinishingPost');                    // PILLAR (Jasa Konstruksi)
	    restoreCondition('JasaFinishingBangunanPost');             // Jasa Finishing Bangunan
	    restoreCondition('JasaFinishingBangunanInteriorPost');     // JasaFinishingBangunanInterior
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
        pageNameElement.textContent = urlMappingJasaFinishingInteriorMinimalisFromSub2MoneyChild[cleanUrlJasaKonsFinishingPost];
        pageNameElement.style.display = 'inline';
    }

	   generateBreadcrumbjasaKonstruksiFinishingPost(
        urlMappingJasaFinishingInteriorMinimalisFromSub2MoneyChild,
        cleanUrlJasaKonsFinishingPost,
        [
            //{ name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
			 { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Finishing', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-finishing.html' },
			 { name: 'Jasa Finishing Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-finishing-bangunan.html' },
        { name: 'Jasa Finishing Interior', url: 'https://www.betonjayareadymix.com/p/jasa-finishing-interior.html' },
            { name: 'Jasa Finishing Interior Minimalis', url: 'https://www.betonjayareadymix.com/p/jasa-finishing-interior-minimalis.html' }
        ],
        'JASA'
    );

}
  
if (urlMappingJasaFinishingInteriorKlasikFromSub2MoneyChild[cleanUrlJasaKonsFinishingPost]) {        
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
    let jasaFinishing = document.getElementById('JasaKonstruksiFinishingPost');
    if (jasaFinishing) {
        jasaFinishing.style.display = 'inline';
        jasaFinishing.style.visibility = 'visible';
    } else {
        // Jika sudah di-remove, restore
		 restoreCondition('JasaKonstruksiFinishingPost');                    // PILLAR (Jasa Konstruksi)
    restoreCondition('JasaFinishingBangunanPost');             // Jasa Finishing Bangunan
    restoreCondition('JasaFinishingBangunanInteriorPost');     // JasaFinishingBangunanInterior
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
        pageNameElement.textContent = urlMappingJasaFinishingInteriorKlasikFromSub2MoneyChild[cleanUrlJasaKonsFinishingPost];
        pageNameElement.style.display = 'inline';
    }

	// ✅ Generate Breadcrumb untuk Jasa Finishing Interior Klasik (manual last item)
    const breadcrumbItems = [
        //{ name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
        { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
       { name: 'Daftar Jasa Finishing', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-finishing.html' },
        { name: 'Jasa Finishing Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-finishing-bangunan.html' },
        { name: 'Jasa Finishing Interior', url: 'https://www.betonjayareadymix.com/p/jasa-finishing-interior.html' },
        { name: 'Jasa Finishing Interior Klasik', url: 'https://www.betonjayareadymix.com/p/jasa-finishing-interior-klasik.html' },
        { 
            name: urlMappingJasaFinishingInteriorKlasikFromSub2MoneyChild[cleanUrlJasaKonsFinishingPost], 
            url: cleanUrlJasaKonsFinishingPost 
        }
    ];
    
    generateBreadcrumbjasaKonstruksiFinishingPost(breadcrumbItems, null, null, 'JASA');

}
  

if (urlMappingJasaLampuInteriorFromSub2MoneyPage[cleanUrlJasaKonsFinishingPost]) {
          // ============================================================
           
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
    let jasaFinishing = document.getElementById('JasaKonstruksiFinishingPost');
    if (jasaFinishing) {
        jasaFinishing.style.display = 'inline';
        jasaFinishing.style.visibility = 'visible';
    } else {
        // Jika sudah di-remove, restore
		 restoreCondition('JasaKonstruksiFinishingPost');                    // PILLAR (Jasa Konstruksi)
    restoreCondition('JasaFinishingBangunanPost');             // Jasa Finishing Bangunan
    restoreCondition('JasaFinishingBangunanInteriorPost');     // JasaFinishingBangunanInterior
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
        pageNameElement.textContent = urlMappingJasaLampuInteriorFromSub2MoneyPage[cleanUrlJasaKonsFinishingPost];
        pageNameElement.style.display = 'inline';
    }

	generateBreadcrumbjasaKonstruksiFinishingPost(
        urlMappingJasaLampuInteriorFromSub2MoneyPage,
        cleanUrlJasaKonsFinishingPost,
        [
            //{ name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Finishing', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-finishing.html' },
            { name: 'Jasa Finishing Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-finishing-bangunan.html' },
            { name: 'Jasa Finishing Interior', url: 'https://www.betonjayareadymix.com/p/jasa-finishing-interior.html' },
            { name: 'Jasa Lampu Interior', url: 'https://www.betonjayareadymix.com/p/jasa-lampu-interior.html' }
        ],
        'JASA'
    );

}

if (urlMappingJasaPasangWallpaperDindingFromSub2MoneyPage[cleanUrlJasaKonsFinishingPost]) {
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
    let jasaFinishing = document.getElementById('JasaKonstruksiFinishingPost');
    if (jasaFinishing) {
        jasaFinishing.style.display = 'inline';
        jasaFinishing.style.visibility = 'visible';
    } else {
        // Jika sudah di-remove, restore
		    restoreCondition('JasaKonstruksiFinishingPost');                    // PILLAR (Jasa Konstruksi)
    restoreCondition('JasaFinishingBangunanPost');             // Jasa Finishing Bangunan
    restoreCondition('JasaFinishingBangunanInteriorPost');     // JasaFinishingBangunanInterior
     
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
        pageNameElement.textContent = urlMappingJasaPasangWallpaperDindingFromSub2MoneyPage[cleanUrlJasaKonsFinishingPost];
        pageNameElement.style.display = 'inline';
    }

	generateBreadcrumbjasaKonstruksiFinishingPost(
        urlMappingJasaPasangWallpaperDindingFromSub2MoneyPage,
        cleanUrlJasaKonsFinishingPost,
        [
            //{ name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Finishing', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-finishing.html' },
            { name: 'Jasa Finishing Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-finishing-bangunan.html' },
            { name: 'Jasa Finishing Interior', url: 'https://www.betonjayareadymix.com/p/jasa-finishing-interior.html' },
            { name: 'Jasa Pasang Wallpaper Dinding', url: 'https://www.betonjayareadymix.com/p/jasa-pasang-wallpaper-dinding.html' }
        ],
        'JASA'
    );

}
  
if (urlMappingJasaCatInteriorRumahFromSub2MoneyPage[cleanUrlJasaKonsFinishingPost]) {
          // ============================================================
   
           
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
		 restoreCondition('JasaKonstruksiFinishingPost');                    // PILLAR (Jasa Konstruksi)
    restoreCondition('JasaFinishingBangunanPost');             // Jasa Finishing Bangunan
    restoreCondition('JasaFinishingBangunanInteriorPost');     // JasaFinishingBangunanInterior
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
        pageNameElement.textContent = urlMappingJasaCatInteriorRumahFromSub2MoneyPage[cleanUrlJasaKonsFinishingPost];
        pageNameElement.style.display = 'inline';
    }

	generateBreadcrumbjasaKonstruksiFinishingPost(
        urlMappingJasaCatInteriorRumahFromSub2MoneyPage,
        cleanUrlJasaKonsFinishingPost,
        [
            //{ name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Finishing', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-finishing.html' },
            { name: 'Jasa Finishing Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-finishing-bangunan.html' },
            { name: 'Jasa Finishing Interior', url: 'https://www.betonjayareadymix.com/p/jasa-finishing-interior.html' },
            { name: 'Jasa Cat Interior Rumah', url: 'https://www.betonjayareadymix.com/p/jasa-cat-interior-rumah.html' }
        ],
        'JASA'
    );
}
  
	
if (urlMappingJasaKeramikLantaiFromSub2MoneyPage[cleanUrlJasaKonsFinishingPost]) {
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
        pageNameJasaKonsFinishingPostLink.textContent = urlMappingJasaKeramikLantaiFromSub2MoneyPage[cleanUrlJasaKonsFinishingPost];
    
       generateBreadcrumbjasaKonstruksiFinishingPost(
        urlMappingJasaKeramikLantaiFromSub2MoneyPage,
        cleanUrlJasaKonsFinishingPost,
        [
            //{ name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Finishing', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-finishing.html' },
            { name: 'Jasa Finishing Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-finishing-bangunan.html' },
            { name: 'Jasa Finishing Interior', url: 'https://www.betonjayareadymix.com/p/jasa-finishing-interior.html' },
            { name: 'Jasa Keramik Lantai', url: 'https://www.betonjayareadymix.com/p/jasa-keramik-lantai.html' }
        ],
        'JASA'
    );
  }
  
  if (urlMappingJasaFinishingInteriorModernFromSub2Sub2[cleanUrlJasaKonsFinishingPost]) {
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
        pageNameJasaKonsFinishingPostLink.textContent = urlMappingJasaFinishingInteriorModernFromSub2Sub2[cleanUrlJasaKonsFinishingPost];

	    const breadcrumbItems = [
        //{ name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
        { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
        { name: 'Daftar Jasa Finishing', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-finishing.html' },
        { name: 'Jasa Finishing Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-finishing-bangunan.html' },
        { name: 'Jasa Finishing Interior', url: 'https://www.betonjayareadymix.com/p/jasa-finishing-interior.html' },
        { name: 'Jasa Finishing Interior Modern', url: 'https://www.betonjayareadymix.com/p/jasa-finishing-interior-modern.html' },
        { 
            name: urlMappingJasaFinishingInteriorModernFromSub2Sub2[cleanUrlJasaKonsFinishingPost], 
            url: cleanUrlJasaKonsFinishingPost 
        }
    ];
    
    generateBreadcrumbjasaKonstruksiFinishingPost(breadcrumbItems, null, null, 'JASA');

}

  //Sub JASA FINISHING INTERIOR MODERN
   if (urlMappingJasaFinishingInteriorModernWpcFromSub2MoneyChild[cleanUrlJasaKonsFinishingPost]) {
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
        pageNameJasaKonsFinishingPostLink.textContent = urlMappingJasaFinishingInteriorModernWpcFromSub2MoneyChild[cleanUrlJasaKonsFinishingPost];
    
   		// ✅ Generate Breadcrumb untuk Jasa Finishing Interior Modern WPC
		generateBreadcrumbjasaKonstruksiFinishingPost(
        urlMappingJasaFinishingInteriorModernWpcFromSub2MoneyChild,
        cleanUrlJasaKonsFinishingPost,
        [
            //{ name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Finishing', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-finishing.html' },
            { name: 'Jasa Finishing Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-finishing-bangunan.html' },
            { name: 'Jasa Finishing Interior', url: 'https://www.betonjayareadymix.com/p/jasa-finishing-interior.html' },
            { name: 'Jasa Finishing Interior Modern', url: 'https://www.betonjayareadymix.com/p/jasa-finishing-interior-modern.html' },
            { name: 'Jasa Pasang WPC', url: 'https://www.betonjayareadymix.com/2020/02/jasa-pasang-wpc.html' }
        ],
        'JASA'
    );
}
	
    if (urlMappingJasaFinishingInteriorModernVinylFromSub2MoneyChild[cleanUrlJasaKonsFinishingPost]) {
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
        pageNameJasaKonsFinishingPostLink.textContent = urlMappingJasaFinishingInteriorModernVinylFromSub2MoneyChild[cleanUrlJasaKonsFinishingPost];
    
		// ✅ Generate Breadcrumb untuk Jasa Finishing Interior Modern Vinyl
		generateBreadcrumbjasaKonstruksiFinishingPost(
        urlMappingJasaFinishingInteriorModernVinylFromSub2MoneyChild,
        cleanUrlJasaKonsFinishingPost,
        [
            { name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Finishing', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-finishing.html' },
            { name: 'Jasa Finishing Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-finishing-bangunan.html' },
            { name: 'Jasa Finishing Interior', url: 'https://www.betonjayareadymix.com/p/jasa-finishing-interior.html' },
            { name: 'Jasa Finishing Interior Modern', url: 'https://www.betonjayareadymix.com/p/jasa-finishing-interior-modern.html' },
            { name: 'Jasa Pasang Vinyl', url: 'https://www.betonjayareadymix.com/2020/02/jasa-pasang-vinyl.html' }
        ],
        'JASA'
    );
}
	
   if (urlMappingJasaFinishingInteriorModernPlafonFromSub2MoneyChild[cleanUrlJasaKonsFinishingPost]) {
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
        pageNameJasaKonsFinishingPostLink.textContent = urlMappingJasaFinishingInteriorModernPlafonFromSub2MoneyChild[cleanUrlJasaKonsFinishingPost];
    
   // ✅ Generate Breadcrumb untuk Jasa Finishing Interior Modern Plafon (Sub2 Money Child)
    generateBreadcrumbjasaKonstruksiFinishingPost(
        urlMappingJasaFinishingInteriorModernPlafonFromSub2MoneyChild,
        cleanUrlJasaKonsFinishingPost,
        [
            //{ name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Finishing', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-finishing.html' },
            { name: 'Jasa Finishing Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-finishing-bangunan.html' },
            { name: 'Jasa Finishing Interior', url: 'https://www.betonjayareadymix.com/p/jasa-finishing-interior.html' },
            { name: 'Jasa Finishing Interior Modern', url: 'https://www.betonjayareadymix.com/p/jasa-finishing-interior-modern.html' },
            { name: 'Jasa Pasang Plafon', url: 'https://www.betonjayareadymix.com/2020/02/jasa-pasang-plafon.html' }
        ],
        'JASA'
    );
   }
  
	
   if (urlMappingJasaFinishingInteriorModernPvcFromSub2MoneyChild[cleanUrlJasaKonsFinishingPost]) {
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
        pageNameJasaKonsFinishingPostLink.textContent = urlMappingJasaFinishingInteriorModernPvcFromSub2MoneyChild[cleanUrlJasaKonsFinishingPost];
   
     // ✅ Generate Breadcrumb untuk Jasa Finishing Interior Modern PVC (Sub2 Money Child)
		generateBreadcrumbjasaKonstruksiFinishingPost(
        urlMappingJasaFinishingInteriorModernPvcFromSub2MoneyChild,
        cleanUrlJasaKonsFinishingPost,
        [
            //{ name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Finishing', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-finishing.html' },
            { name: 'Jasa Finishing Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-finishing-bangunan.html' },
            { name: 'Jasa Finishing Interior', url: 'https://www.betonjayareadymix.com/p/jasa-finishing-interior.html' },
            { name: 'Jasa Finishing Interior Modern', url: 'https://www.betonjayareadymix.com/p/jasa-finishing-interior-modern.html' },
            { name: 'Jasa Pasang PVC', url: 'https://www.betonjayareadymix.com/2020/02/jasa-pasang-pvc.html' }
        ],
        'JASA'
    );
   }

	
	// AKHIR SUB FINISHING INTERIOR MODERN
//AKHIR FINISHING INTERIOR

//SUB JasaFinishingBangunanEksteriorPost
if (urlMappingJasaFinishingFasadEksteriorFromSub2MoneyPage[cleanUrlJasaKonsFinishingPost]) {
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
        pageNameJasaKonsFinishingPostLink.textContent = urlMappingJasaFinishingFasadEksteriorFromSub2MoneyPage[cleanUrlJasaKonsFinishingPost];
    }

  // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaFinishingFasadEksteriorFromSub2MoneyPage[cleanUrlJasaKonsFinishingPost]) {
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
                   "name": urlMappingJasaFinishingFasadEksteriorFromSub2MoneyPage[cleanUrlJasaKonsFinishingPost],
                   "item": cleanUrlJasaKonsFinishingPost
               }
           ]
       };
       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
if (urlMappingJasaFinishingTamanRumahFromSub2MoneyPage[cleanUrlJasaKonsFinishingPost]) {
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
        pageNameJasaKonsFinishingPostLink.textContent = urlMappingJasaFinishingTamanRumahFromSub2MoneyPage[cleanUrlJasaKonsFinishingPost];
    }
 // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaFinishingTamanRumahFromSub2MoneyPage[cleanUrlJasaKonsFinishingPost]) {
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
                   "name": urlMappingJasaFinishingTamanRumahFromSub2MoneyPage[cleanUrlJasaKonsFinishingPost],
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
