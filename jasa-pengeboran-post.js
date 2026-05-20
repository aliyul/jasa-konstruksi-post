//SUB MAPPING JasaPengeboranPost 

//ga perlu JasaBorAirBiaya, hapus aja
/*const urlMappingJasaBorAirBiaya = {


};*/
//SUB JasaPengeboran
// ============================================================
// SUB JASA PENGEBORAN - POST
// Parent: Jasa Pengeboran (/p/jasa-pengeboran.html)
// ============================================================

// ============================================================
// [SUB2] - TUKANG BOR (KATEGORI)
// 🧠 TYPE: SUB2 (boleh skip di breadcrumb)
// Breadcrumb: Home > Jasa Konstruksi > Jasa Pengeboran > Tukang Bor
// ============================================================

const urlMappingTukangBorFromMoneyMaster1MoneyPage = {
  // ============================================================
  // [MONEY_MASTER] - TUKANG BOR (UMUM)
  // 🧠 TYPE: MONEY_MASTER (WAJIB tampil, parent: SUB2)
  // ============================================================
  //"https://www.betonjayareadymix.com/2019/08/tukang-bor.html": "Tukang Bor",  // TYPE: MONEY_MASTER
  
  // ============================================================
  // [MONEY_CHILD] - TUKANG BOR TERDEKAT (LOKASI)
  // 🧠 TYPE: MONEY_CHILD (WAJIB tampil, parent: SUB2)
  // ============================================================
  "https://www.betonjayareadymix.com/2019/08/tukang-bor-terdekat.html": "Tukang Bor Terdekat"  // TYPE: MONEY_CHILD
};

// ============================================================
// [SUB2] - JASA BOR AIR SUMUR (KATEGORI)
// 🧠 TYPE: SUB2 (boleh skip di breadcrumb)
// Breadcrumb: Home > Jasa Konstruksi > Jasa Pengeboran > Jasa Bor Air Sumur
// ============================================================

const urlMappingJasaBorAirSumur = {
  // ============================================================
  // [MONEY_CHILD] - LOKASI SURABAYA
  // ============================================================
  "https://www.betonjayareadymix.com/2019/08/jasa-bor-air-tanah-surabaya.html": "Jasa Bor Air Tanah Surabaya",  // TYPE: MONEY_CHILD
  
  // ============================================================
  // [MONEY_CHILD] - LOKASI KARAWANG
  // ============================================================
  "https://www.betonjayareadymix.com/2019/08/jasa-bor-air-tanah-karawang.html": "Jasa Bor Air Tanah Karawang",  // TYPE: MONEY_CHILD
  
  // ============================================================
  // [MONEY_CHILD] - LOKASI DEPOK
  // ============================================================
  "https://www.betonjayareadymix.com/2019/08/jasa-bor-air-tanah-depok.html": "Jasa Bor Air Tanah Depok",  // TYPE: MONEY_CHILD
  
  // ============================================================
  // [MONEY_CHILD] - LOKASI TANGERANG
  // ============================================================
  "https://www.betonjayareadymix.com/2019/08/jasa-bor-air-tanah-tangerang.html": "Jasa Bor Air Tanah Tangerang",  // TYPE: MONEY_CHILD
  
  // ============================================================
  // [MONEY_CHILD] - LOKASI JAKARTA
  // ============================================================
  "https://www.betonjayareadymix.com/2019/08/jasa-bor-air-tanah-jakarta.html": "Jasa Bor Air Tanah Jakarta",  // TYPE: MONEY_CHILD
  
  // ============================================================
  // [MONEY_CHILD] - LOKASI BEKASI
  // ============================================================
  "https://www.betonjayareadymix.com/2019/08/jasa-bor-air-tanah-bekasi.html": "Jasa Bor Air Tanah Bekasi",  // TYPE: MONEY_CHILD
  
  // ============================================================
  // [MONEY_CHILD] - LOKASI BOGOR
  // ============================================================
  "https://www.betonjayareadymix.com/2019/08/jasa-bor-air-tanah-bogor.html": "Jasa Bor Air Tanah Bogor",  // TYPE: MONEY_CHILD
  
  // ============================================================
  // [MONEY_MASTER] - TUKANG BOR AIR (UMUM)
  // ============================================================
  "https://www.betonjayareadymix.com/2019/08/tukang-bor-air-terdekat.html": "Tukang Bor Air Terdekat",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/2019/08/jasa-bor-air-terdekat.html": "Jasa Bor Air Terdekat",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/2019/08/tukang-bor-air-tanah.html": "Tukang Bor Air Tanah",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/2019/08/jasa-bor-air-tanah.html": "Jasa Bor Air Tanah",  // TYPE: MONEY_MASTER
  
  // ============================================================
  // [MONEY_MASTER] - BOR SUMUR (UMUM)
  // ============================================================
  "https://www.betonjayareadymix.com/2019/08/bor-sumur-terdekat.html": "Bor Sumur Terdekat",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/2019/08/tukang-sumur-bor-terdekat.html": "Tukang Sumur Bor Terdekat",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/2019/08/jasa-bor-sumur-terdekat.html": "Jasa Bor Sumur Terdekat",  // TYPE: MONEY_MASTER
  
  // ============================================================
  // [MONEY_CHILD] - JASA SUMUR BOR LOKASI
  // ============================================================
  "https://www.betonjayareadymix.com/2019/08/jasa-sumur-bor-surabaya.html": "Jasa Sumur Bor Surabaya",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/08/jasa-sumur-bor-karawang.html": "Jasa Sumur Bor Karawang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/08/jasa-sumur-bor-tangerang.html": "Jasa Sumur Bor Tangerang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/08/jasa-sumur-bor-jakarta.html": "Jasa Sumur Bor Jakarta",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/08/jasa-sumur-bor-bekasi.html": "Jasa Sumur Bor Bekasi",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/08/jasa-sumur-bor-bogor.html": "Jasa Sumur Bor Bogor",  // TYPE: MONEY_CHILD
  
  // ============================================================
  // [MONEY_MASTER] - JASA BOR SUMUR (UMUM)
  // ============================================================
  "https://www.betonjayareadymix.com/2019/08/jasa-bor-sumur.html": "Jasa Bor Sumur",  // TYPE: MONEY_MASTER
  
  // ============================================================
  // [MONEY_CHILD] - TUKANG SUMUR BOR LOKASI
  // ============================================================
  "https://www.betonjayareadymix.com/2019/08/tukang-sumur-bor-tangerang.html": "Tukang Sumur Bor Tangerang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/08/tukang-sumur-bor-depok.html": "Tukang Sumur Bor Depok",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/08/tukang-sumur-bor-jakarta.html": "Tukang Sumur Bor Jakarta",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/08/tukang-sumur-bor-bekasi.html": "Tukang Sumur Bor Bekasi",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/08/tukang-sumur-bor-bogor.html": "Tukang Sumur Bor Bogor",  // TYPE: MONEY_CHILD
  
  // ============================================================
  // [MONEY_MASTER] - TUKANG SUMUR BOR (UMUM)
  // ============================================================
  "https://www.betonjayareadymix.com/2019/08/tukang-sumur-bor.html": "Tukang Sumur Bor",  // TYPE: MONEY_MASTER
  
  // ============================================================
  // [MONEY_MASTER] - BIAYA SUMUR BOR PER METER (SPESIFIKASI)
  // 🧠 TYPE: MONEY_MASTER (karena mengandung angka spesifikasi)
  // ============================================================
  "https://www.betonjayareadymix.com/2019/08/biaya-sumur-bor-150-meter.html": "Biaya Sumur Bor 150 Meter",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/2019/08/biaya-sumur-bor-100-meter.html": "Biaya Sumur Bor 100 Meter",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/2019/08/biaya-sumur-bor-60-meter.html": "Biaya Sumur Bor 60 Meter",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/2019/08/biaya-sumur-bor-50-meter.html": "Biaya Sumur Bor 50 Meter",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/2019/08/biaya-sumur-bor-40-meter.html": "Biaya Sumur Bor 40 Meter",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/2019/08/biaya-sumur-bor-15-meter.html": "Biaya Sumur Bor 15 Meter",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/2019/08/biaya-sumur-bor-10-meter.html": "Biaya Sumur Bor 10 Meter",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/2019/08/biaya-sumur-bor-20-meter.html": "Biaya Sumur Bor 20 Meter",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/2019/08/biaya-sumur-bor-30-meter.html": "Biaya Sumur Bor 30 Meter",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/2019/08/biaya-sumur-bor-per-meter.html": "Biaya Sumur Bor Per Meter",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/2019/08/bor-sumur-murah.html": "Bor Sumur Murah"  // TYPE: MONEY_MASTER
};

// ============================================================
// [SUB2] - JASA BORE PILE (KATEGORI)
// 🧠 TYPE: SUB2 (boleh skip di breadcrumb)
// Breadcrumb: Home > Jasa Konstruksi > Jasa Pengeboran > Jasa Bore Pile
// ============================================================

const urlMappingJasaBorePile = {
  // ============================================================
  // [MONEY_MASTER] - HARGA BORE PILE (UMUM)
  // ============================================================
  "https://www.betonjayareadymix.com/2019/08/harga-jasa-bore-pile-terdekat.html": "Harga Jasa Bore Pile Terdekat",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/2019/08/harga-jasa-bore-pile.html": "Harga Jasa Bore Pile",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/2019/08/harga-jasa-strauss-pile.html": "Harga Jasa Strauss Pile",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/2019/08/harga-jasa-bore-pile-murah.html": "Harga Jasa Bore Pile Murah",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/2019/08/harga-jasa-auger-bore-pile.html": "Harga Jasa Auger Bore Pile",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/2019/08/harga-borongan-strauss-pile.html": "Harga Borongan Strauss Pile",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/2019/08/harga-borongan-bore-pile.html": "Harga Borongan Bore Pile",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/2019/08/harga-pengeboran-bore-pile.html": "Harga Pengeboran Bore Pile",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/2019/08/harga-pengeboran-strauss-pile.html": "Harga Pengeboran Strauss Pile",  // TYPE: MONEY_MASTER

  // ============================================================
  // [MONEY_CHILD] - HARGA BORE PILE PER LOKASI
  // ============================================================
  "https://www.betonjayareadymix.com/2019/08/harga-jasa-bore-pile-jakarta.html": "Harga Jasa Bore Pile Jakarta",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/08/harga-jasa-bore-pile-bogor.html": "Harga Jasa Bore Pile Bogor",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/08/harga-jasa-bore-pile-depok.html": "Harga Jasa Bore Pile Depok",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/08/harga-jasa-bore-pile-tangerang.html": "Harga Jasa Bore Pile Tangerang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/08/harga-jasa-bore-pile-bekasi.html": "Harga Jasa Bore Pile Bekasi",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/08/harga-jasa-bore-pile-karawang.html": "Harga Jasa Bore Pile Karawang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/08/harga-jasa-bore-pile-surabaya.html": "Harga Jasa Bore Pile Surabaya"  // TYPE: MONEY_CHILD
};

// ============================================================
// [SUB2] - JASA BOR TEMBOK (KATEGORI)
// 🧠 TYPE: SUB2 (boleh skip di breadcrumb)
// Breadcrumb: Home > Jasa Konstruksi > Jasa Pengeboran > Jasa Bor Tembok
// ============================================================

const urlMappingJasaBorTembok = {
  // ============================================================
  // [MONEY_MASTER] - JASA BOR TEMBOK (UMUM)
  // ============================================================
  "https://www.betonjayareadymix.com/2018/09/jasa-bor-tembok-terdekat.html": "Jasa Bor Tembok Terdekat",  // TYPE: MONEY_MASTER

  // ============================================================
  // [MONEY_CHILD] - JASA BOR TEMBOK LOKASI JABODETABEK
  // ============================================================
  "https://www.betonjayareadymix.com/2019/08/jasa-bor-tembok-jakarta.html": "Jasa Bor Tembok Jakarta",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/08/jasa-bor-tembok-bogor.html": "Jasa Bor Tembok Bogor",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/08/jasa-bor-tembok-depok.html": "Jasa Bor Tembok Depok",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/08/jasa-bor-tembok-tangerang.html": "Jasa Bor Tembok Tangerang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/08/jasa-bor-tembok-bekasi.html": "Jasa Bor Tembok Bekasi",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/08/jasa-bor-tembok-karawang.html": "Jasa Bor Tembok Karawang",  // TYPE: MONEY_CHILD

  // ============================================================
  // [MONEY_MASTER] - JASA BOR TEMBOK (KUALITAS LAYANAN)
  // ============================================================
  "https://www.betonjayareadymix.com/2019/08/jasa-bor-tembok-murah.html": "Jasa Bor Tembok Murah",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/2019/08/jasa-bor-tembok-profesional.html": "Jasa Bor Tembok Profesional",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/2019/08/jasa-bor-tembok-terpercaya.html": "Jasa Bor Tembok Terpercaya",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/2019/08/jasa-bor-tembok-cepat.html": "Jasa Bor Tembok Cepat",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/2019/08/jasa-bor-tembok-rapi.html": "Jasa Bor Tembok Rapi",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/2019/08/jasa-bor-tembok-presisi.html": "Jasa Bor Tembok Presisi",  // TYPE: MONEY_MASTER

  // ============================================================
  // [MONEY_MASTER] - JASA BOR TEMBOK (KEGUNAAN SPESIFIK)
  // ============================================================
  "https://www.betonjayareadymix.com/2019/08/jasa-bor-tembok-untuk-ac.html": "Jasa Bor Tembok untuk AC",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/2019/08/jasa-bor-tembok-untuk-exhaust.html": "Jasa Bor Tembok untuk Exhaust",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/2019/08/jasa-bor-tembok-untuk-cctv.html": "Jasa Bor Tembok untuk CCTV",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/2019/08/jasa-bor-tembok-untuk-ducting.html": "Jasa Bor Tembok untuk Ducting",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/2019/08/jasa-bor-tembok-untuk-instalasi-listrik.html": "Jasa Bor Tembok untuk Instalasi Listrik",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/2019/08/jasa-bor-tembok-untuk-plafon.html": "Jasa Bor Tembok untuk Plafon",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/2019/08/jasa-bor-tembok-untuk-lantai.html": "Jasa Bor Tembok untuk Lantai",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/2019/08/jasa-bor-tembok-untuk-kolom.html": "Jasa Bor Tembok untuk Kolom"  // TYPE: MONEY_MASTER
};

// ============================================================
// [SUB2] - JASA CORING BETON (KATEGORI)
// 🧠 TYPE: SUB2 (boleh skip di breadcrumb)
// Breadcrumb: Home > Jasa Konstruksi > Jasa Pengeboran > Jasa Coring Beton
// ============================================================

const urlMappingJasaCoringBeton = {
  // ============================================================
  // [MONEY_MASTER] - LAYANAN CORE DRILL (UMUM)
  // ============================================================
  "https://www.betonjayareadymix.com/2018/11/layanan-core-drill-terpercaya.html": "Layanan Core Drill Terpercaya",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/2018/11/core-drill-proyek-konstruksi.html": "Core Drill Proyek Konstruksi",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/2018/11/pengeboran-beton-instalasi-pipa.html": "Pengeboran Beton Instalasi Pipa",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/2018/11/jasa-bor-beton-saluran-kabel.html": "Jasa Bor Beton Saluran Kabel",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/2018/11/pengeboran-beton-sistem-hvac.html": "Pengeboran Beton Sistem HVAC",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/2018/11/jasa-core-drill-beton.html": "Jasa Core Drill Beton",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/2018/09/jasa-coring-beton-terdekat.html": "Jasa Coring Beton Terdekat",  // TYPE: MONEY_MASTER

  // ============================================================
  // [MONEY_CHILD] - JASA CORING BETON LOKASI
  // ============================================================
  "https://www.betonjayareadymix.com/2018/11/core-drill-beton-jakarta.html": "Core Drill Beton Jakarta",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/11/jasa-coring-beton-surabaya.html": "Jasa Coring Beton Surabaya",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/11/jasa-coring-beton-karawang.html": "Jasa Coring Beton Karawang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/11/jasa-coring-beton-depok.html": "Jasa Coring Beton Depok",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/11/jasa-coring-beton-bogor.html": "Jasa Coring Beton Bogor",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/11/jasa-coring-beton-bekasi.html": "Jasa Coring Beton Bekasi",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/11/jasa-coring-beton-jakarta.html": "Jasa Coring Beton Jakarta",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/11/jasa-coring-beton-tangerang.html": "Jasa Coring Beton Tangerang"  // TYPE: MONEY_CHILD
};

// ============================================================
// [SUB2] - JASA BOR BETON (KATEGORI)
// 🧠 TYPE: SUB2 (boleh skip di breadcrumb)
// Breadcrumb: Home > Jasa Konstruksi > Jasa Pengeboran > Jasa Bor Beton
// ============================================================

const urlMappingJasaBorBeton = {
  // ============================================================
  // [MONEY_MASTER] - JASA BOR BETON (UMUM)
  // ============================================================
  "https://www.betonjayareadymix.com/2019/08/jasa-bor-beton-renovasi-bangunan.html": "Jasa Bor Beton Renovasi Bangunan",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/2019/08/jasa-bor-beton-profesional.html": "Jasa Bor Beton Profesional",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/2019/08/pengeboran-beton-akurat.html": "Pengeboran Beton Akurat",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/2019/08/jasa-bor-beton-terdekat.html": "Jasa Bor Beton Terdekat",  // TYPE: MONEY_MASTER

  // ============================================================
  // [MONEY_CHILD] - JASA BOR BETON LOKASI JABODETABEK
  // ============================================================
  "https://www.betonjayareadymix.com/2019/08/jasa-bor-beton-jakarta.html": "Jasa Bor Beton Jakarta",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/08/jasa-bor-beton-bogor.html": "Jasa Bor Beton Bogor",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/08/jasa-bor-beton-depok.html": "Jasa Bor Beton Depok",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/08/jasa-bor-beton-tangerang.html": "Jasa Bor Beton Tangerang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/08/jasa-bor-beton-bekasi.html": "Jasa Bor Beton Bekasi",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/08/jasa-bor-beton-karawang.html": "Jasa Bor Beton Karawang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/08/jasa-bor-beton-surabaya.html": "Jasa Bor Beton Surabaya"  // TYPE: MONEY_CHILD
};

// ============================================================
// [SUB2] - JASA BOR TANAH (KATEGORI)
// 🧠 TYPE: SUB2 (boleh skip di breadcrumb)
// Breadcrumb: Home > Jasa Konstruksi > Jasa Pengeboran > Jasa Bor Tanah
// ============================================================

const urlMappingJasaBorTanah = {
  // ============================================================
  // [MONEY_MASTER] - JASA BOR TANAH (UMUM)
  // ============================================================
  "https://www.betonjayareadymix.com/2019/08/jasa-bor-tanah-terdekat.html": "Jasa Bor Tanah Terdekat",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/2019/08/jasa-bor-tanah-profesional.html": "Jasa Bor Tanah Profesional",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/2019/08/harga-bor-tanah-per-meter.html": "Harga Bor Tanah Per Meter",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/2019/08/pengeboran-tanah-untuk-konstruksi.html": "Pengeboran Tanah Untuk Konstruksi",  // TYPE: MONEY_MASTER

  // ============================================================
  // [MONEY_CHILD] - JASA BOR TANAH LOKASI
  // ============================================================
  "https://www.betonjayareadymix.com/2019/08/jasa-bor-tanah-jakarta.html": "Jasa Bor Tanah Jakarta",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/08/jasa-bor-tanah-bogor.html": "Jasa Bor Tanah Bogor",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/08/jasa-bor-tanah-bekasi.html": "Jasa Bor Tanah Bekasi",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/08/jasa-bor-tanah-tangerang.html": "Jasa Bor Tanah Tangerang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/08/jasa-bor-tanah-depok.html": "Jasa Bor Tanah Depok",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/08/jasa-bor-tanah-karawang.html": "Jasa Bor Tanah Karawang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/08/jasa-bor-tanah-surabaya.html": "Jasa Bor Tanah Surabaya"  // TYPE: MONEY_CHILD
};

// ============================================================
// [SUB2] - JASA BOR HORIZONTAL (KATEGORI)
// 🧠 TYPE: SUB2 (boleh skip di breadcrumb)
// Breadcrumb: Home > Jasa Konstruksi > Jasa Pengeboran > Jasa Bor Horizontal
// ============================================================

const urlMappingJasaBorHorizontal = {
  // ============================================================
  // [MONEY_CHILD] - JASA BOR HORIZONTAL LOKASI
  // ============================================================
  "https://www.betonjayareadymix.com/2019/08/jasa-bor-horizontal-surabaya.html": "Jasa Bor Horizontal Surabaya",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/08/jasa-bor-horizontal-karawang.html": "Jasa Bor Horizontal Karawang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/08/jasa-bor-horizontal-bekasi.html": "Jasa Bor Horizontal Bekasi",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/08/jasa-bor-horizontal-tangerang.html": "Jasa Bor Horizontal Tangerang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/08/jasa-bor-horizontal-depok.html": "Jasa Bor Horizontal Depok",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/08/jasa-bor-horizontal-bogor.html": "Jasa Bor Horizontal Bogor",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/08/jasa-bor-horizontal-jakarta.html": "Jasa Bor Horizontal Jakarta",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/08/jasa-bor-horizontal-terdekat.html": "Jasa Bor Horizontal Terdekat"  // TYPE: MONEY_CHILD
};
/*
 RINGKASAN TYPE YANG DIGUNAKAN
Type	Jumlah Item	Keterangan
SUB2	8 (parent kategori)	Jasa Pengeboran Post, Bor Air Sumur, Bore Pile, Bor Tembok, Coring Beton, Bor Beton, Bor Tanah, Bor Horizontal
MONEY_MASTER	~50	Halaman umum (tanpa lokasi spesifik)
MONEY_CHILD	~60	Halaman spesifik lokasi (Jakarta, Bogor, Bekasi, dll
*/

/*
const urlMappingJasaBorAirTeknik = {
"https://www.betonjayareadymix.com/2018/09/tukang-bor.html": "Tukang Bor",
  "https://www.betonjayareadymix.com/2018/09/tukang-bor-air-tanah.html": "Tukang Bor Air Tanah",
  "https://www.betonjayareadymix.com/2018/09/jasa-bor-air-tanah.html": "Jasa Bor Air Tanah"
	
};*/
/**
 * ============================================================
 * generateBreadcrumbJasaKonstruksi v7.5 FINAL
 * UNIVERSAL ENTITY HIERARCHY ENGINE WITH FORCE PARENT INJECTION
 * ============================================================
 *
 * ✅ UPDATE v7.5
 * ------------------------------------------------------------
 * - FORCE PARENT INJECTION untuk semua entity (SEWA, JASA, PRODUK, MATERIAL)
 * - Universal pattern detection tanpa hardcode mapping
 * - 4 strategi force inject: direct parent, pattern, entity-specific, last resort
 * - Parent terdekat TIDAK PERNAH SKIP untuk semua kasus
 *
 * ✅ UPDATE v7.4
 * ------------------------------------------------------------
 * - JASA bisa mendeteksi MONEY-MASTER (MM)
 * - Deteksi MM untuk JASA: kata <=2, tanpa harga, tidak spesifik
 *
 * ✅ UPDATE v7.3
 * ------------------------------------------------------------
 * - AUTO DETECT parent dari breadcrumbItems
 * - Tidak perlu PARENT_RELATIONSHIP mapping manual
 *
 * ============================================================
 * @version 7.5.0 FINAL
 * @date 2026-05-19
 * ============================================================
 */

function generateBreadcrumbJasaPengeboranPost(
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
        MAX_LEVEL: 5,
        DEBUG: false,
        CURRENT_YEAR: new Date().getFullYear()
    };

    // ============================================================
    // 2. LOGGER
    // ============================================================

    function log(message, type = 'INFO') {
        if (!CONFIG.DEBUG && type === 'INFO') return;
        const icons = { INFO: '📘', SUCCESS: '✅', WARN: '⚠️', ERROR: '❌' };
        console.log(`${icons[type] || '📘'} [Breadcrumb v7.5] ${message}`);
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
    // 5. TYPE LEVEL MAP
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
    // 16. PAGE TYPE DETECTION (FIXED for JASA MM)
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
        const HAS_JASA_WORD = /\b(jasa|kontraktor|renovasi|pasang|borongan)\b/i.test(lowerName);

        // ========================================================
        // DETEKSI MONEY-MASTER UNTUK SEWA ENTITY
        // ========================================================
        if (isSewaEntity() && HAS_SEWA_WORD && !HAS_PRICE_WORD) {
            const cleaned = lowerName.replace(/\b(sewa|rental)\b/gi, '').trim();
            const words = cleaned.split(/\s+/).filter(Boolean);
            const specific = isSpecificProduct(cleaned);
            
            if (words.length <= 2 && !specific && !isLocation(cleaned)) {
                return 'money-master';
            }
            
            if (isLocation(lowerName)) {
                return 'money-child';
            }
            
            return 'money-page';
        }

        // ========================================================
        // DETEKSI MONEY-MASTER UNTUK JASA ENTITY
        // ========================================================
        if (isJasaEntity() && HAS_JASA_WORD && !HAS_PRICE_WORD) {
            const cleaned = lowerName.replace(/\b(jasa|kontraktor|renovasi|pasang|borongan)\b/gi, '').trim();
            const words = cleaned.split(/\s+/).filter(Boolean);
            const specific = isSpecificProduct(cleaned);
            
            if (words.length <= 2 && !specific && !isLocation(cleaned)) {
                return 'money-master';
            }
            
            if (isLocation(lowerName)) {
                return 'money-child';
            }
            
            return 'money-page';
        }

        // ========================================================
        // DETEKSI UNTUK HARGA/BIAYA/TARIF
        // ========================================================
        if (HAS_PRICE_WORD) {
            const cleaned = lowerName.replace(/\b(harga|biaya|tarif)\b/gi, '').trim();
            const words = cleaned.split(/\s+/).filter(Boolean);
            const specific = isSpecificProduct(cleaned);
            
            if (words.length <= 2 && !specific && !isLocation(cleaned)) {
                return 'money-page';
            }
            return 'money-page';
        }

        // ========================================================
        // DETEKSI LOKASI UNTUK JASA/SEWA
        // ========================================================
        if (isJasaEntity() && isLocation(lowerName)) {
            return 'money-child';
        }
        
        if (isSewaEntity() && isLocation(lowerName)) {
            return 'money-child';
        }

        return 'pillar';
    }

    // ============================================================
    // 17. AUTO DETECT PARENT FROM BREADCRUMB ITEMS
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

            // Strategy 1: Item name is substring of current page
            if (currentLower.includes(itemName) && itemName.length > 3) {
                score = itemName.length * 10;
            }

            // Strategy 2: Shared keywords
            const itemWords = itemName.split(/\s+/);
            for (const word of currentWords) {
                if (word.length > 2 && itemWords.includes(word)) {
                    score += 5;
                }
            }

            // Strategy 3: Prefix match
            for (let i = 1; i <= currentWords.length; i++) {
                const prefix = currentWords.slice(0, i).join(' ');
                if (itemName === prefix) {
                    score += 100;
                    break;
                }
            }

            // Strategy 4: URL pattern match
            if (item.url) {
                const urlSlug = item.url.split('/').pop()?.replace('.html', '').replace(/-/g, ' ');
                if (urlSlug && currentLower.includes(urlSlug)) {
                    score += 50;
                }
            }

            if (score > bestScore) {
                bestScore = score;
                bestMatch = item;
            }
        }

        return bestScore > 20 ? bestMatch : null;
    }

    function injectCurrentPageAndParent(breadcrumbItems, currentPageName, currentFullUrl) {
        let items = [...breadcrumbItems];
        const currentLower = currentPageName.toLowerCase();

        // Inject current page if not exists
        const hasCurrent = items.some(item => 
            item.name?.toLowerCase() === currentLower
        );

        if (!hasCurrent) {
            items.push({
                name: currentPageName,
                url: currentFullUrl
            });
        }

        // Auto detect and inject parent
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
    // 18. UNIVERSAL FORCE PARENT INJECTION (NEW v7.5)
    // ============================================================

    function forceInjectDirectParent(lineageLevels, allLevels, currentPageTitle, entityType, breadcrumbItems) {
        const currentLower = currentPageTitle.toLowerCase();
        let modifiedLineage = [...lineageLevels];
        
        // ========================================================
        // STRATEGI 1: Cari parent dari breadcrumbItems terdekat
        // ========================================================
        const directParent = findNearestParentFromItems(breadcrumbItems, currentPageTitle);
        
        if (directParent) {
            const parentExists = modifiedLineage.some(item => 
                item.name?.toLowerCase() === directParent.name?.toLowerCase()
            );
            
            if (!parentExists) {
                log(`UNIVERSAL FORCE (Strategy 1): "${directParent.name}" → "${currentPageTitle}"`, 'SUCCESS');
                
                const parentFromAllLevels = allLevels.find(item => 
                    item.name?.toLowerCase() === directParent.name?.toLowerCase()
                );
                
                if (parentFromAllLevels) {
                    modifiedLineage.push(parentFromAllLevels);
                } else {
                    modifiedLineage.push({
                        name: directParent.name,
                        url: directParent.url,
                        type: detectPageType(directParent.name),
                        level: TYPE_LEVEL_MAP[detectPageType(directParent.name)] || 99,
                        position: modifiedLineage.length + 1
                    });
                }
            }
        }
        
        // ========================================================
        // STRATEGI 2: Pattern-based parent detection (Universal)
        // ========================================================
        if (modifiedLineage.length === lineageLevels.length) {
            const words = currentLower.split(/\s+/);
            if (words.length >= 2) {
                for (let i = words.length - 1; i >= 1; i--) {
                    const potentialParent = words.slice(0, i).join(' ');
                    
                    const parentItem = allLevels.find(item => 
                        item.name.toLowerCase() === potentialParent
                    );
                    
                    if (parentItem && !modifiedLineage.some(l => l.name === parentItem.name)) {
                        log(`UNIVERSAL FORCE (Strategy 2): "${parentItem.name}" → "${currentPageTitle}"`, 'SUCCESS');
                        modifiedLineage.push(parentItem);
                        break;
                    }
                }
            }
        }
        
        // ========================================================
        // STRATEGI 3: Entity-specific parent detection
        // ========================================================
        if (modifiedLineage.length === lineageLevels.length) {
            const words = currentLower.split(/\s+/);
            
            // Untuk SEWA entity
            if (isSewaEntity() && currentLower.includes('sewa ') && !currentLower.includes('sewa alat')) {
                if (words.length >= 3) {
                    const parentGuess = `sewa alat ${words[1]}`;
                    const parentItem = allLevels.find(item => 
                        item.name.toLowerCase() === parentGuess
                    );
                    if (parentItem && !modifiedLineage.some(l => l.name === parentItem.name)) {
                        log(`UNIVERSAL FORCE (Strategy 3 - SEWA): "${parentItem.name}" → "${currentPageTitle}"`, 'SUCCESS');
                        modifiedLineage.push(parentItem);
                    }
                }
            }
            
            // Untuk JASA entity
            if (isJasaEntity() && currentLower.includes('jasa ') && words.length >= 3) {
                const parentGuess = words.slice(0, 2).join(' ');
                const parentItem = allLevels.find(item => 
                    item.name.toLowerCase() === parentGuess
                );
                if (parentItem && !modifiedLineage.some(l => l.name === parentItem.name)) {
                    log(`UNIVERSAL FORCE (Strategy 3 - JASA): "${parentItem.name}" → "${currentPageTitle}"`, 'SUCCESS');
                    modifiedLineage.push(parentItem);
                }
            }
            
            // Untuk PRODUK entity
            if ((isProdukEntity() || isInteriorEntity()) && words.length >= 3) {
                const parentGuess = words.slice(0, 2).join(' ');
                const parentItem = allLevels.find(item => 
                    item.name.toLowerCase() === parentGuess
                );
                if (parentItem && !modifiedLineage.some(l => l.name === parentItem.name)) {
                    log(`UNIVERSAL FORCE (Strategy 3 - PRODUK): "${parentItem.name}" → "${currentPageTitle}"`, 'SUCCESS');
                    modifiedLineage.push(parentItem);
                }
            }
            
            // Untuk MATERIAL entity
            if (isMaterialEntity() && words.length >= 3) {
                const parentGuess = words.slice(0, 2).join(' ');
                const parentItem = allLevels.find(item => 
                    item.name.toLowerCase() === parentGuess
                );
                if (parentItem && !modifiedLineage.some(l => l.name === parentItem.name)) {
                    log(`UNIVERSAL FORCE (Strategy 3 - MATERIAL): "${parentItem.name}" → "${currentPageTitle}"`, 'SUCCESS');
                    modifiedLineage.push(parentItem);
                }
            }
        }
        
        // ========================================================
        // STRATEGI 4: Last resort - ambil parent dengan level tertinggi
        // ========================================================
        if (modifiedLineage.length === lineageLevels.length && allLevels.length > 0) {
            const sortedByLevel = [...allLevels].sort((a, b) => b.level - a.level);
            const highestLevelParent = sortedByLevel[0];
            
            if (highestLevelParent && highestLevelParent.name.toLowerCase() !== currentLower) {
                log(`UNIVERSAL FORCE (Strategy 4 - Last Resort): "${highestLevelParent.name}" → "${currentPageTitle}"`, 'WARN');
                modifiedLineage.push(highestLevelParent);
            }
        }
        
        return modifiedLineage;
    }

    // ============================================================
    // 19. GET CURRENT PAGE INFO
    // ============================================================

    const currentFullUrl = currentUrl.startsWith('http')
        ? currentUrl
        : CONFIG.DOMAIN + currentUrl;

    let currentPageTitle = getCleanPageNameFromUrl(currentFullUrl);

    if (!currentPageTitle) {
        currentPageTitle = 'Halaman';
    }

    // ============================================================
    // 20. INJECT CURRENT PAGE & AUTO PARENT
    // ============================================================

    const enhancedBreadcrumbItems = injectCurrentPageAndParent(
        breadcrumbItems,
        currentPageTitle,
        currentFullUrl
    );

    // ============================================================
    // 21. BUILD ALL LEVELS
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
    // 22. URL FALLBACK
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
    // 23. CURRENT PAGE TYPE
    // ============================================================

    const currentPageType = detectPageType(currentPageTitle);

    // ============================================================
    // 24. SELECT BREADCRUMB LEVELS
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

    // REMOVE DUPLICATE
    const uniqueHierarchy = [];
    const usedHierarchy = new Set();

    for (const item of allLevels) {
        const key = item.name.toLowerCase();
        if (usedHierarchy.has(key)) continue;
        usedHierarchy.add(key);
        uniqueHierarchy.push(item);
    }

    // FIND NEAREST PARENTS
    function findNearestParents() {
        const lineage = [];
        const currentLevel = TYPE_LEVEL_MAP[currentPageType] || 99;
        let lastAcceptedLevel = currentLevel;

        for (let i = uniqueHierarchy.length - 1; i >= 0; i--) {
            const item = uniqueHierarchy[i];
            if (item.level < lastAcceptedLevel) {
                lineage.unshift(item);
                lastAcceptedLevel = item.level;
            }
        }
        return lineage;
    }

    let lineageLevels = findNearestParents();

    // ========================================================
    // FORCE PARENT INJECTION (UNIVERSAL v7.5)
    // ========================================================
    lineageLevels = forceInjectDirectParent(
        lineageLevels, 
        uniqueHierarchy, 
        currentPageTitle, 
        entityType,
        enhancedBreadcrumbItems
    );

    // ENSURE DIRECT COMMERCIAL PARENT
    const hasCommercialParent = lineageLevels.some(item =>
        item.type === 'money-master' || item.type === 'money-page'
    );

    if ((currentPageType === 'money-child' || currentPageType === 'money-page') && !hasCommercialParent) {
        const nearestCommercial = [...uniqueHierarchy].reverse().find(item =>
            item.type === 'money-master' || item.type === 'money-page'
        );
        if (nearestCommercial) {
            lineageLevels.push(nearestCommercial);
        }
    }

    // REMOVE DUPLICATE AFTER LINEAGE
    const cleanLineage = [];
    const usedLineage = new Set();

    for (const item of lineageLevels) {
        const key = item.name.toLowerCase();
        if (usedLineage.has(key)) continue;
        usedLineage.add(key);
        cleanLineage.push(item);
    }

    // SORT NATURAL ORDER
    cleanLineage.sort((a, b) => {
        if (a.level !== b.level) return a.level - b.level;
        return a.position - b.position;
    });

    // MAX LEVEL SAFE
    const MAX_PARENT_LEVELS = CONFIG.MAX_LEVEL - 2;
    let finalParents = cleanLineage;

    if (cleanLineage.length > MAX_PARENT_LEVELS) {
        const nearestParent = cleanLineage[cleanLineage.length - 1];
        const rootParents = cleanLineage.slice(0, MAX_PARENT_LEVELS - 1);
        finalParents = [...rootParents, nearestParent];
    }

    // INSERT PARENTS
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
    // 25. FINAL UNIQUE LEVELS
    // ============================================================

    const uniqueLevels = [];
    const usedNames = new Set();

    for (const item of selectedLevels) {
        const key = item.name.toLowerCase();
        if (usedNames.has(key)) continue;
        usedNames.add(key);
        uniqueLevels.push(item);
    }

    // POSITION FIX
    uniqueLevels.forEach((item, index) => {
        item.position = index + 1;
    });

    // ============================================================
    // 26. GENERATE HTML
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
    // 27. JSON LD
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
    // 28. REMOVE OLD
    // ============================================================

    document.querySelectorAll('.breadcrumbs, .breadcrumb-nav, [aria-label="Breadcrumb"]')
        .forEach(el => el.remove());
    document.querySelectorAll('script[data-breadcrumb="true"]')
        .forEach(el => el.remove());

    // ============================================================
    // 29. TARGET ELEMENT
    // ============================================================

    const targetElement = document.querySelector('main, article, .content, #main-content, .post-content');

    // ============================================================
    // 30. INJECT HTML
    // ============================================================

    if (targetElement) {
        targetElement.insertAdjacentHTML('afterbegin', breadcrumbHtml);
    } else {
        document.body.insertAdjacentHTML('afterbegin', breadcrumbHtml);
    }

    // ============================================================
    // 31. INJECT JSON LD
    // ============================================================

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-breadcrumb', 'true');
    script.textContent = JSON.stringify(jsonLd, null, 2);
    document.head.appendChild(script);

    // ============================================================
    // 32. RETURN
    // ============================================================

    return {
        html: breadcrumbHtml,
        jsonLd,
        selectedLevels: uniqueLevels,
        currentPageType,
        entityType,
        version: '7.5.0 FINAL',
        maxLevel: CONFIG.MAX_LEVEL
    };
}
// Menyimpan elemen yang dihapus dalam variabel
let removedElementsJasaPengeboranPost = {};
// Fungsi untuk menghapus elemen berdasarkan ID
function removeCondition(conditionId) {
    const conditionElement = document.getElementById(conditionId);

    if (conditionElement) {
        // Menyimpan elemen yang dihapus dalam objek untuk bisa dikembalikan
        removedElementsJasaPengeboranPost[conditionId] = conditionElement;
        conditionElement.remove(); // Menghapus elemen tersebut
    }
}

// Fungsi untuk mengembalikan elemen yang telah dihapus
function restoreCondition(conditionId) {
    const breadcrumb = document.querySelector('.breadcrumb');
    const elementToRestore = removedElementsJasaPengeboranPost[conditionId]; // Mendapatkan elemen yang disimpan

    if (elementToRestore) {
        breadcrumb.appendChild(elementToRestore); // Menambahkan elemen kembali ke dalam breadcrumb
        delete removedElementsJasaPengeboranPost[conditionId]; // Menghapus elemen dari objek setelah dikembalikan
    } else {
        console.log(`Elemen dengan ID ${conditionId} tidak ditemukan di removedElementsJasaPengeboranPost.`);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    // var currentUrl = window.location.href;
     //const cleanUrl = currentUrl.split('?')[0]; // Menghapus parameter seperti ?m=1
    const cleanUrlJasaPengeboranPost = window.location.href.split(/[?#]/)[0]; // Menghilangkan parameter seperti ?m=1


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
		urlMappingJasaBorAirLokasi,
		urlMappingJasaBorAirSumur,
		urlMappingJasaBorAirKebutuhan,
		urlMappingJasaBorAirPeralatan,
		urlMappingJasaBorTeknik,
		urlMappingJasaBorePile,
		urlMappingJasaBorTembok,
		urlMappingJasaCoringBeton,
		urlMappingJasaBorBeton,
		urlMappingJasaBorTanah,
		urlMappingJasaBorHorizontal,
		urlMappingJasaPengeboranPost
		
    );

    // --- validasi URL terdaftar ---
    if (!urlMappingGabungan[cleanUrlJasaPengeboranPost]) {
      console.log(`[HybridDateModified] URL tidak terdaftar: ${cleanUrlJasaPengeboranPost}`);
      return;
    }

  // === Tanggal nextUpdate1 global ===
		const globalNextUpdate1 = "2026-02-05T00:00:00.000Z";
	console.log(`🌐 [AutoMeta] Detected jasa-konstruksi: ${cleanUrlJasaPengeboranPost}`);

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

    const hash = stableHash(cleanUrlJasaPengeboranPost);
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
	
	console.log("✅ AEDMetaDates updated jasa-pengeboran-post:", window.AEDMetaDates);
    console.log(`✅ [HybridDateModified v2.5] ${cleanUrlJasaPengeboranPost} → ${isoDate} | type=${type || "-"}`);

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
		urlMappingJasaBorAirSumur,
		urlMappingJasaBorePile,
		urlMappingJasaBorTembok,
		urlMappingJasaCoringBeton,
		urlMappingJasaBorBeton,
		urlMappingJasaBorTanah,
		urlMappingJasaBorHorizontal,
		urlMappingTukangBorFromMoneyMaster1MoneyPage
		
    );

    // --- validasi URL terdaftar ---
    if (!urlMappingGabungan[cleanUrlJasaPengeboranPost]) {
      console.log(`[HybridDateModified] URL tidak terdaftar: ${cleanUrlJasaPengeboranPost}`);
      return;
    }

	
/* ============================================================
 🔥 Hybrid Date Modified v7.6 — UNTUK betonjayareadymix.com
    ✅ FIXED: Variable name konsisten dengan PLD v19.0
    ✅ FIXED: pageLevelDetectorv19Ready (huruf kecil 'v')
    ✅ FULL COMPATIBLE: Page Level Detector v19.0, v18, v17
    ✅ FIX: Support JASA MONEY-MASTER detection
    ✅ FIX: 'home' TIDAK termasuk EVERGREEN_LEVELS
    ✅ Enhanced logging untuk debug
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
    // 📌 TUNGGU PAGE LEVEL DETECTOR READY (FIXED v7.6)
    // ============================================================
    function waitForPageLevelDetector() {
      return new Promise((resolve) => {
        // ✅ FIXED: Cek v19 dengan variable name yang benar
        if (window.pageLevelDetectorv19 && window.pageLevelDetectorv19Ready) {
          console.log("✅ Page Level Detector v19 already ready");
          resolve(true);
          return;
        }
        
        // ✅ FIXED: Cek v18 dengan variable name yang benar
        if (window.pageLevelDetectorV18 && window.pageLevelDetectorv18Ready) {
          console.log("✅ Page Level Detector v18 already ready");
          resolve(true);
          return;
        }
        
        // ✅ FIXED: Cek v17 dengan variable name yang benar
        if (window.pageLevelDetectorV17 && window.pageLevelDetectorv17Ready) {
          console.log("✅ Page Level Detector v17 already ready");
          resolve(true);
          return;
        }
        
        // ✅ FIXED: Cek legacy
        if (window.pageLevelDetector && window.__pageLevelDetectorReady) {
          console.log("✅ Page Level Detector legacy already ready");
          resolve(true);
          return;
        }
        
        // ✅ FIXED: Event listener dengan case yang benar
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
        
        window.addEventListener("pageLevelDetectorv19Ready", onReadyV19, { once: true });
        window.addEventListener("pageLevelDetectorV19Ready", onReadyV19, { once: true }); // backup
        window.addEventListener("pageLevelDetectorv18Ready", onReadyV18, { once: true });
        window.addEventListener("pageLevelDetectorReady", onReadyLegacy, { once: true });
        
        // Fallback timeout 10 detik (diperpanjang)
        setTimeout(() => {
          if (window.pageLevelDetectorv19 || window.pageLevelDetectorV18 || window.pageLevelDetector) {
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
      const PAGE_LEVEL_DETECTOR_URL = "https://raw.githack.com/aliyul/solution-blogger/main/PageLevelDetector.js";
      const EVERGREEN_DETECTOR_URL = "https://raw.githack.com/aliyul/solution-blogger/main/SmartEvergreenDetector.js";
      
      if (typeof window.pageLevelDetectorv19 === "undefined" && 
          typeof window.pageLevelDetectorV18 === "undefined" &&
          typeof window.pageLevelDetectorV17 === "undefined" &&
          typeof window.pageLevelDetector === "undefined") {
        console.log("⏳ Loading Page Level Detector v19.0...");
        await loadExternalJS(PAGE_LEVEL_DETECTOR_URL);
        await waitForPageLevelDetector();
        console.log("✅ Page Level Detector v19.0 READY");
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
    // 📌 GET PAGE LEVEL FROM DETECTOR (FIXED v7.6)
    // ============================================================
    async function getPageLevelFromDetector() {
      await new Promise(resolve => setTimeout(resolve, 300));
      
      let pageLevel = 'pillar';
      let entityType = 'produk';
      let detectorVersion = 'unknown';
      
      // ✅ PRIORITAS v19.0 (variable name yang benar)
      if (window.pageLevelDetectorv19 && typeof window.pageLevelDetectorv19.detect === 'function') {
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
      
      return { pageLevel, entityType, detectorVersion };
    }

    // ============================================================
    // 📌 EKSEKUSI UTAMA
    // ============================================================
    
    console.log("🔥 Hybrid Date Modified v7.6 - Starting...");
    
    await loadAllScripts();
    
    const { pageLevel, entityType, detectorVersion } = await getPageLevelFromDetector();
    
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
      hybridVersion: '7.6'
    };

    console.log(`✅ [HybridDateModified] ${uniquePageIdentifier}`);
    console.log(`   → Final Date Modified: ${isoDate}`);
    console.log(`   → Offset: ${offsetSeconds} detik (${Math.floor(offsetSeconds / 3600)} jam ${Math.floor((offsetSeconds % 3600) / 60)} menit)`);
    console.log(`   → Mode: ${manualMode ? 'MANUAL' : 'AUTO'}`);
    console.log(`   → Category: ${categoryLabel}`);
    console.log(`   → Detector: ${detectorVersion}`);
    console.log(`📋 Hybrid Date Modified v7.6 applied successfully`);

  } catch (err) {
    console.error("[HybridDateModified] Fatal error:", err);
  }
})();
	
     // Menemukan elemen menggunakan Id
    var JasaKonsPengeboranPost = document.getElementById("JasaKonsPengeboranPost");

    if (!JasaKonsPengeboranPost) {
        console.error("elemen Id JasaPengeboranPost kondisi terhapus");
        return;
    }


     var JasaKonstruksiPengeboranPostLink = document.getElementById("JasaKonstruksiPengeboranPost");
     var JasaPengeboranPostLink = document.getElementById("JasaPengeboranPost");
     //SUB JasaPengeboranPosth
	     	//var JasaBorAirPostLink = document.getElementById("JasaBorAirPost");
			//var JasaBorAirLokasiPostLink = document.getElementById("JasaBorAirLokasiPost");
			//var JasaBorAirBiayaPostLink = document.getElementById("JasaBorAirBiayaPost");
		     var JasaBorAirSumurPostLink = document.getElementById("JasaBorAirSumurPost");
	        //var JasaBorAirKebutuhanPostLink = document.getElementById("JasaBorAirKebutuhanPost");
	        //var JasaBorAirPeralatanPostLink = document.getElementById("JasaBorAirPeralatanPost");
	var JasaBorTeknikPostLink = document.getElementById("JasaBorTeknikPost");
     var JasaBorePilePostLink = document.getElementById("JasaBorePilePost");
     var JasaCoringBetonPostLink = document.getElementById("JasaCoringBetonPost");
     var JasaBorTembokPostLink = document.getElementById("JasaBorTembokPost");
     var JasaBorBetonPostLink = document.getElementById("JasaBorBetonPost");
     var JasaBorTanahPostLink = document.getElementById("JasaBorTanahPost");
     var JasaBorHorizontalPostLink = document.getElementById("JasaBorHorizontalPost");
	
    	
     var pageNameJasaKonsPengeboranPost = document.getElementById("pageNameJasaKonsPengeboranPost");
    

     // Default untuk menyembunyikan elemen
     JasaKonstruksiPengeboranPostLink.style.visibility = 'hidden';
     JasaPengeboranPost.style.visibility = 'hidden';
	
     //SUB JasaPengeboranPost
     //JasaBorAirPostLink.style.visibility = 'hidden';
	//JasaBorAirLokasiPostLink.style.visibility = 'hidden';
		//JasaBorAirBiayaPostLink.style.visibility = 'hidden';
		JasaBorAirSumurPostLink.style.visibility = 'hidden';
	    //JasaBorAirKebutuhanPostLink.style.visibility = 'hidden';
	    //JasaBorAirPeralatanPostLink.style.visibility = 'hidden';
	 	
	//JasaBorTeknikPostLink.style.visibility = 'hidden';
     JasaBorePilePostLink.style.visibility = 'hidden';
     JasaCoringBetonPostLink.style.visibility = 'hidden';
     JasaBorTembokPostLink.style.visibility = 'hidden';
     JasaBorBetonPostLink.style.visibility = 'hidden';
     JasaBorTanahPostLink.style.visibility = 'hidden';
     JasaBorHorizontalPostLink.style.visibility = 'hidden';
	
     pageNameJasaKonsPengeboranPost.textContent = "";
	
    //SUB urlMappingBangunan
if (urlMappingJasaBorAirSumur[cleanUrlJasaPengeboranPost]) {
        restoreCondition('JasaKonsPengeboranPost');
        restoreCondition('JasaPengeboranPost');
        //restoreCondition('JasaBorAirPost');
        restoreCondition('JasaBorAirSumurPost');
     
        //hapus elemen div id lain KECUALI JasaPengeboranPost
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
       // removeCondition('JasaPengeboranPost');
        removeCondition('JasaKonsPembatasPost');
        removeCondition('JasaKonsPerbaikanPost');
	removeCondition('JasaKonsCuttingBetonPost');
	removeCondition('JasaKonsBongkarBangunanPost');
        removeCondition('JasaKonsFinishingPost');
        removeCondition('JasaKonsStrukturPost');
        removeCondition('JasaKonsAlatKonstruksiPost');
        removeCondition('JasaKonsJalanPerkerasanPost');
	
	 //hapus elemen JasaPengeboranPost SEMUA KECUALI JasaBorAirPost
	    //removeCondition('JasaBorTeknikPost');
        removeCondition('JasaBorTembokPost');
        removeCondition('JasaBorePilePost');
        removeCondition('JasaCoringBetonPost');
        removeCondition('JasaBorBetonPost');
        removeCondition('JasaBorTanahPost');
        removeCondition('JasaBorHorizontalPost');

	//hapus elemen sub jasa bor air post kecuali jasa bor air lokasi
		//removeCondition('JasaBorAirLokasiPost');
		//removeCondition('JasaBorAirBiayaPost');
		//removeCondition('JasaBorAirLokasiPost');
		//removeCondition('JasaBorAirKebutuhanPost');
		//removeCondition('JasaBorAirPeralatanPost');
       
        JasaKonstruksiPengeboranPostLink.style.visibility = 'visible';
       //TAMPILKAN PONDASI BANGUNAN
        JasaPengeboranPostLink.style.visibility = 'visible';
	//TAMPILKAN JasaBorAirPost
       // JasaBorAirPostLink.style.visibility = 'visible';
	    
        JasaBorAirSumurPostLink.style.visibility = 'visible';
        pageNameJasaKonsPengeboranPost.textContent = urlMappingJasaBorAirSumur[cleanUrlJasaPengeboranPost];
    }
   // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaBorAirSumur[cleanUrlJasaPengeboranPost]) {
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
            "name": "Jasa Bor Air Sumur",
            "item": "https://www.betonjayareadymix.com/p/jasa-bor-air-sumur.html"
        },
        {
            "@type": "ListItem",
            "position": 5,
            "name": urlMappingJasaBorAirSumur[cleanUrlJasaPengeboranPost],
            "item": cleanUrlJasaPengeboranPost
        }
        ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
	   
/*	
if (urlMappingJasaBorTeknik[cleanUrlJasaPengeboranPost]) {
        restoreCondition('JasaKonsPengeboranPost');
        restoreCondition('JasaPengeboranPost');
        restoreCondition('JasaBorTeknikPost');
       // restoreCondition('JasaBorAirTeknikPost');
     
        //hapus elemen div id lain KECUALI JasaPengeboranPost
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
       // removeCondition('JasaPengeboranPost');
        removeCondition('JasaKonsPembatasPost');
        removeCondition('JasaKonsPerbaikanPost');
	removeCondition('JasaKonsCuttingBetonPost');
	removeCondition('JasaKonsBongkarBangunanPost');
        removeCondition('JasaKonsFinishingPost');
        removeCondition('JasaKonsStrukturPost');
        removeCondition('JasaKonsAlatKonstruksiPost');
        removeCondition('JasaKonsJalanPerkerasanPost');
	
	 //hapus elemen JasaPengeboranPost SEMUA KECUALI JasaBorAirPost
        removeCondition('JasaBorAirPost');
        removeCondition('JasaBorTembokPost');
        removeCondition('JasaBorePilePost');
        removeCondition('JasaCoringBetonPost');
        removeCondition('JasaBorBetonPost');
        removeCondition('JasaBorTanahPost');
        removeCondition('JasaBorHorizontalPost');

	//hapus elemen sub jasa bor air post kecuali jasa bor air lokasi
		//removeCondition('JasaBorAirLokasiPost');
		//removeCondition('JasaBorAirBiayaPost');
		removeCondition('JasaBorAirSumurPost');
		removeCondition('JasaBorAirLokasiPost');
		removeCondition('JasaBorAirKebutuhanPost');
		removeCondition('JasaBorAirPeralatanPost');
       
        JasaKonstruksiPengeboranPostLink.style.visibility = 'visible';
       //TAMPILKAN PONDASI BANGUNAN
        JasaPengeboranPostLink.style.visibility = 'visible';
	//TAMPILKAN JasaBorAirPost
       // JasaBorAirPostLink.style.visibility = 'visible';
	    
        JasaBorTeknikPostLink.style.visibility = 'visible';
        pageNameJasaKonsPengeboranPost.textContent = urlMappingJasaBorTeknik[cleanUrlJasaPengeboranPost];
    }
   // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaBorTeknik[cleanUrlJasaPengeboranPost]) {
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
            "name": "Jasa Bor Teknik",
            "item": "https://www.betonjayareadymix.com/p/jasa-bor-teknik.html"
        },
        {
                   "@type": "ListItem",
                   "position": 5,
                   "name": urlMappingJasaBorTeknik[cleanUrlJasaPengeboranPost],
                   "item": cleanUrlJasaPengeboranPost
        }
        ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
  */
	
//AKHIR SUB JASA BOR AIR
if (urlMappingJasaCoringBeton[cleanUrlJasaPengeboranPost]) {
        restoreCondition('JasaKonsPengeboranPost');
        restoreCondition('JasaPengeboranPost');
        restoreCondition('JasaCoringBetonPost');
     
        //hapus elemen div id lain KECUALI JasaPengeboranPost
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
       // removeCondition('JasaPengeboranPost');
        removeCondition('JasaKonsPembatasPost');
        removeCondition('JasaKonsPerbaikanPost');
	removeCondition('JasaKonsCuttingBetonPost');
	removeCondition('JasaKonsBongkarBangunanPost');
        removeCondition('JasaKonsFinishingPost');
        removeCondition('JasaKonsStrukturPost');
        removeCondition('JasaKonsAlatKonstruksiPost');
        removeCondition('JasaKonsJalanPerkerasanPost');
	
	 //hapus elemen JasaPengeboranPost SEMUA KECUALI JasaBorAirPost
        //removeCondition('');
        removeCondition('JasaBorTembokPost');
        removeCondition('JasaBorePilePost');
        removeCondition('JasaBorAirSumurPost');
        removeCondition('JasaBorBetonPost');
        removeCondition('JasaBorTanahPost');
        removeCondition('JasaBorHorizontalPost');
	
	//hapus elemen sub jasa bor air post
		//removeCondition('JasaBorAirLokasiPost');
		//removeCondition('JasaBorAirBiayaPost');
		//removeCondition('JasaBorAirSumurPost');
		//removeCondition('JasaBorAirTeknikPost');
		//removeCondition('JasaBorAirKebutuhanPost');
		//removeCondition('JasaBorAirPeralatanPost');
    
       
        JasaKonstruksiPengeboranPostLink.style.visibility = 'visible';
       //TAMPILKAN JasaPengeboranPost
        JasaPengeboranPostLink.style.visibility = 'visible';
	//TAMPILKAN JasaCoringBetonPost
        JasaCoringBetonPostLink.style.visibility = 'visible';
        pageNameJasaKonsPengeboranPost.textContent = urlMappingJasaCoringBeton[cleanUrlJasaPengeboranPost];
    }
   // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaCoringBeton[cleanUrlJasaPengeboranPost]) {
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
                   "name": "Jasa Coring Beton",
                   "item": "https://www.betonjayareadymix.com/p/jasa-coring-beton.html"
               },
               {
                   "@type": "ListItem",
                   "position": 5,
                   "name": urlMappingJasaCoringBeton[cleanUrlJasaPengeboranPost],
                   "item": cleanUrlJasaPengeboranPost
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
	
if (urlMappingJasaBorTembok[cleanUrlJasaPengeboranPost]) {
        restoreCondition('JasaKonsPengeboranPost');
        restoreCondition('JasaPengeboranPost');
        restoreCondition('JasaBorTembokPost');
     
        //hapus elemen div id lain KECUALI JasaPengeboranPost
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
       // removeCondition('JasaPengeboranPost');
        removeCondition('JasaKonsPembatasPost');
        removeCondition('JasaKonsPerbaikanPost');
	removeCondition('JasaKonsCuttingBetonPost');
	removeCondition('JasaKonsBongkarBangunanPost');
        removeCondition('JasaKonsFinishingPost');
        removeCondition('JasaKonsStrukturPost');
        removeCondition('JasaKonsAlatKonstruksiPost');
        removeCondition('JasaKonsJalanPerkerasanPost');
	
	 //hapus elemen JasaPengeboranPost SEMUA KECUALI JasaBorAirPost
        removeCondition('JasaCoringBetonPost');
        //removeCondition('JasaBorTembokPost');
        removeCondition('JasaBorePilePost');
        removeCondition('JasaBorAirSumurPost');
        removeCondition('JasaBorBetonPost');
        removeCondition('JasaBorTanahPost');
        removeCondition('JasaBorHorizontalPost');

	//hapus elemen sub jasa bor air post
		
       
        JasaKonstruksiPengeboranPostLink.style.visibility = 'visible';
       //TAMPILKAN JasaPengeboranPost
        JasaPengeboranPostLink.style.visibility = 'visible';
	//TAMPILKAN JasaCoringBetonPost
        JasaBorTembokPostLink.style.visibility = 'visible';
        pageNameJasaKonsPengeboranPost.textContent = urlMappingJasaBorTembok[cleanUrlJasaPengeboranPost];
    }
     // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaBorTembok[cleanUrlJasaPengeboranPost]) {
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
                   "name": "Jasa Bor Tembok",
                   "item": "https://www.betonjayareadymix.com/p/jasa-bor-tembok.html"
               },
               {
                   "@type": "ListItem",
                   "position": 5,
                   "name": urlMappingJasaBorTembok[cleanUrlJasaPengeboranPost],
                   "item": cleanUrlJasaPengeboranPost
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
	
if (urlMappingJasaBorBeton[cleanUrlJasaPengeboranPost]) {
        restoreCondition('JasaKonsPengeboranPost');
        restoreCondition('JasaPengeboranPost');
        restoreCondition('JasaBorBetonPost');
     
        //hapus elemen div id lain KECUALI JasaPengeboranPost
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
       // removeCondition('JasaPengeboranPost');
        removeCondition('JasaKonsPembatasPost');
        removeCondition('JasaKonsPerbaikanPost');
	removeCondition('JasaKonsCuttingBetonPost');
	removeCondition('JasaKonsBongkarBangunanPost');
        removeCondition('JasaKonsFinishingPost');
        removeCondition('JasaKonsStrukturPost');
        removeCondition('JasaKonsAlatKonstruksiPost');
        removeCondition('JasaKonsJalanPerkerasanPost');
	
	 //hapus elemen JasaPengeboranPost SEMUA KECUALI JasaBorAirPost
        //removeCondition('');
        removeCondition('JasaBorTembokPost');
        removeCondition('JasaBorePilePost');
        removeCondition('JasaBorAirSumurPost');
        removeCondition('JasaCoringBetonPost');
        removeCondition('JasaBorTanahPost');
        removeCondition('JasaBorHorizontalPost');

	//hapus elemen sub jasa bor air post

        JasaKonstruksiPengeboranPostLink.style.visibility = 'visible';
       //TAMPILKAN JasaPengeboranPost
        JasaPengeboranPostLink.style.visibility = 'visible';
	//TAMPILKAN JasaCoringBetonPost
        JasaBorBetonPostLink.style.visibility = 'visible';
        pageNameJasaKonsPengeboranPost.textContent = urlMappingJasaBorBeton[cleanUrlJasaPengeboranPost];
    }
     // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaBorBeton[cleanUrlJasaPengeboranPost]) {
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
                   "name": "Jasa Bor Beton",
                   "item": "https://www.betonjayareadymix.com/p/jasa-bor-beton.html"
               },
               {
                   "@type": "ListItem",
                   "position": 5,
                   "name": urlMappingJasaBorBeton[cleanUrlJasaPengeboranPost],
                   "item": cleanUrlJasaPengeboranPost
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }

if (urlMappingJasaBorTanah[cleanUrlJasaPengeboranPost]) {
        restoreCondition('JasaKonsPengeboranPost');
        restoreCondition('JasaPengeboranPost');
        restoreCondition('JasaBorTanahPost');
     
        //hapus elemen div id lain KECUALI JasaPengeboranPost
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
       // removeCondition('JasaPengeboranPost');
        removeCondition('JasaKonsPembatasPost');
        removeCondition('JasaKonsPerbaikanPost');
	removeCondition('JasaKonsCuttingBetonPost');
	removeCondition('JasaKonsBongkarBangunanPost');
        removeCondition('JasaKonsFinishingPost');
        removeCondition('JasaKonsStrukturPost');
        removeCondition('JasaKonsAlatKonstruksiPost');
        removeCondition('JasaKonsJalanPerkerasanPost');
	
	 //hapus elemen JasaPengeboranPost SEMUA KECUALI JasaBorAirPost
        //removeCondition('');
        removeCondition('JasaBorTembokPost');
        removeCondition('JasaBorePilePost');
        removeCondition('JasaBorAirSumurPost');
        removeCondition('JasaCoringBetonPost');
        removeCondition('JasaBorBetonPost');
        removeCondition('JasaBorHorizontalPost');

	//hapus elemen sub jasa bor air post
		
       
        JasaKonstruksiPengeboranPostLink.style.visibility = 'visible';
       //TAMPILKAN JasaPengeboranPost
        JasaPengeboranPostLink.style.visibility = 'visible';
	//TAMPILKAN JasaCoringBetonPost
        JasaBorTanahPostLink.style.visibility = 'visible';
        pageNameJasaKonsPengeboranPost.textContent = urlMappingJasaBorTanah[cleanUrlJasaPengeboranPost];
    }
     // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaBorTanah[cleanUrlJasaPengeboranPost]) {
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
                   "name": "Jasa Bor Tanah",
                   "item": "https://www.betonjayareadymix.com/p/jasa-bor-tanah.html"
               },
               {
                   "@type": "ListItem",
                   "position": 5,
                   "name": urlMappingJasaBorTanah[cleanUrlJasaPengeboranPost],
                   "item": cleanUrlJasaPengeboranPost
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
  
  if (urlMappingJasaBorePile[cleanUrlJasaPengeboranPost]) {
        restoreCondition('JasaKonsPengeboranPost');
        restoreCondition('JasaPengeboranPost');
        restoreCondition('JasaBorePilePost');
     
        //hapus elemen div id lain KECUALI JasaPengeboranPost
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
       // removeCondition('JasaPengeboranPost');
        removeCondition('JasaKonsPembatasPost');
        removeCondition('JasaKonsPerbaikanPost');
	removeCondition('JasaKonsCuttingBetonPost');
	removeCondition('JasaKonsBongkarBangunanPost');
        removeCondition('JasaKonsFinishingPost');
        removeCondition('JasaKonsStrukturPost');
        removeCondition('JasaKonsAlatKonstruksiPost');
        removeCondition('JasaKonsJalanPerkerasanPost');
	
	 //hapus elemen JasaPengeboranPost SEMUA KECUALI JasaBorAirPost
        removeCondition('JasaBorTembokPost');
        removeCondition('JasaBorAirSumurPost');
        removeCondition('JasaCoringBetonPost');
        removeCondition('JasaBorBetonPost');
        removeCondition('JasaBorTanahPost');
        removeCondition('JasaBorHorizontalPost');

	  //hapus elemen sub jasa bor air post
		
        JasaKonstruksiPengeboranPostLink.style.visibility = 'visible';
       //TAMPILKAN PONDASI BANGUNAN
        JasaPengeboranPostLink.style.visibility = 'visible';
	//TAMPILKAN JasaBorAirPost
        JasaBorePilePostLink.style.visibility = 'visible';
        pageNameJasaKonsPengeboranPost.textContent = urlMappingJasaBorePile[cleanUrlJasaPengeboranPost];
    }
   // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaBorePile[cleanUrlJasaPengeboranPost]) {
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
            "name": "Jasa Bore Pile",
            "item": "https://www.betonjayareadymix.com/p/jasa-bore-pile.html"
        },
        {
            "@type": "ListItem",
            "position": 5,
            "name": urlMappingJasaBorePile[cleanUrlJasaPengeboranPost],
            "item": cleanUrlJasaPengeboranPost
        }
        ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }

   if (urlMappingTukangBorFromMoneyMaster1MoneyPage[cleanUrlJasaPengeboranPost]) {
        generateBreadcrumbJasaPengeboranPost(
        urlMappingTukangBorFromMoneyMaster1MoneyPage,
        cleanUrlJasaPengeboranPost,
        [
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Pengeboran', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-pengeboran.html'},
            { name: 'Perbandingan Jasa Pengeboran', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-pengeboran.html'},
            { name: 'Jasa Pengeboran', url: 'https://www.betonjayareadymix.com/p/jasa-pengeboran.html'},
			 { name: 'Tukang Bor', url: 'https://www.betonjayareadymix.com/p/tukang-bor.html'}
        ],
        'JASA_KONSTRUKSI'
    );
   }


   });
