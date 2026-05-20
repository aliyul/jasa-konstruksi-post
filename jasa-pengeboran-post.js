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

const urlMappingJasaPengeboranPost = {
  // ============================================================
  // [MONEY_MASTER] - TUKANG BOR (UMUM)
  // 🧠 TYPE: MONEY_MASTER (WAJIB tampil, parent: SUB2)
  // ============================================================
  "https://www.betonjayareadymix.com/2019/08/tukang-bor.html": "Tukang Bor",  // TYPE: MONEY_MASTER
  
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
 * generateBreadcrumbForMapping v5.6 — COMPLETE PHASE SYSTEM WITH ENTITY PILLAR EXACT MATCH
 * ✅ FIX: ENTITY PILLAR hanya EXACT MATCH (BUKAN partial match)
 * ✅ FIX: "jasa konstruksi" → PILLAR (L1)
 * ✅ FIX: "jasa konstruksi gedung sekolah" → MONEY_PAGE (L5) BUKAN pillar
 * ✅ FIX: "Sewa Alat Konstruksi" → PILLAR (L1)
 * ✅ FIX: "Produk Konstruksi", "Produk Interior" → PILLAR (L1)
 * ✅ FIX: "Material Konstruksi" → PILLAR (L1)
 * ✅ ENTITY PILLAR KEYWORDS untuk setiap entity type (EXACT MATCH)
 * ✅ SINKRON DENGAN Page Level Detector v18.5 dan AUTO-SCHEMA v5.7
 * ✅ PRIORITAS DETEKSI:
 *    0. HOMEPAGE
 *    1. ENTITY PILLAR (EXACT MATCH) 🔥
 *    2. INFORMASIONAL (panduan, cara, tips) → PILLAR
 *    3. PERBANDINGAN (vs, versus) → SP1
 *    4. JENIS/MACAM/DAFTAR (jenis, macam, daftar) → SP2
 *    5. KEYWORD HARGA/SEWA → MONEY (dengan cek lokasi terlebih dahulu)
 *    6. JASA/SEWA (tanpa keyword harga & bukan entity pillar) → MONEY_PAGE
 *    7. SUB-VARIANT
 *    8. VARIANT
 *    9. DEFAULT → PILLAR
 * 
 * @version 5.6.0
 * @date 2026-01-15
 */

function generateBreadcrumbJasaPengeboranPost(mappingObj, currentUrl, breadcrumbItems = [], entityType = 'PRODUK_INTERIOR') {
    
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
    // 5. FUNGSI DETEKSI ENTITY PILLAR (EXACT MATCH ONLY) 🔥
    // ============================================================
    function isEntityPillarExactMatch(pageName, entityTypeParam) {
        const useEntityType = entityTypeParam || entityType;
        const lowerName = pageName.toLowerCase().trim();
        const pillarKeywords = ENTITY_PILLAR_KEYWORDS[useEntityType] || [];
        
        for (const kw of pillarKeywords) {
            // 🔥 EXACT MATCH (tanpa tambahan kata apapun)
            if (lowerName === kw) {
                console.log(`  🏛️ ENTITY PILLAR detected (exact match): "${kw}" → pillar (L1)`);
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
    
    // LEVEL 7: VARIANT
    const VARIANT_KEYWORDS = [
        'spesifikasi', 'ukuran', 'tipe', 'type', 'model', 
        'varian', 'warna', 'merk', 'brand', 'kapasitas', 
        'dimensi', 'bahan', 'material', 'finishing', 'grade',
        'seri', 'serie', 'versi', 'generasi', 'detail teknis'
    ];
    
    // ============================================================
    // 7. LOCATION WHITELIST
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
        // PRIORITAS 1: ENTITY PILLAR (EXACT MATCH ONLY) 🔥
        // ============================================================
        if (isEntityPillarExactMatch(pageName, useEntityType)) {
            return 'pillar';
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
        // PRIORITAS 5: MONEY LEVEL (HARGA/SEWA) - DENGAN CEK LOKASI DULU 🔥
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
                
                // 🔥 PRIORITAS: CEK LOKASI DULU (UNTUK SEMUA ENTITY TYPE)
                if (isLocation(afterKw)) {
                    console.log(`  → Location detected → money-child (L6)`);
                    return 'money-child';
                }
                
                // JIKA JASA DAN TIDAK ADA LOKASI → money-page
                if (isJasaEntity()) {
                    console.log(`  → JASA + harga (no location) → money-page (L5)`);
                    return 'money-page';
                }
                
                // CEK SPESIFISITAS PRODUK
                const isSpecific = isSpecificProduct(afterKw, wordCount);
                
                // MONEY_MASTER: 1-2 kata ATAU 3 kata tapi masih umum
                if (wordCount <= 2 || (wordCount === 3 && !isSpecific)) {
                    console.log(`  → money-master (${wordCount} kata) → money-master (L4)`);
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
        // PRIORITAS 7: SUB-VARIANT (Level 8)
        // ============================================================
        if (isSubVariant(lowerName)) {
            console.log(`  🔬 SUB-VARIANT detected → sub-variant (L8)`);
            return 'sub-variant';
        }
        
        // ============================================================
        // PRIORITAS 8: VARIANT (Level 7)
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
    console.log(`📊 Breadcrumb Generator v5.6 — ENTITY PILLAR EXACT MATCH`);
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
        version: '5.6'
    };
}

// ============================================================
// RINGKASAN HASIL DETEKSI v5.6
// ============================================================
/*
| Keyword | Entity Type | Hasil Deteksi | Level |
|---------|-------------|---------------|-------|
| jasa konstruksi | JASA_KONSTRUKSI | pillar | L1 ✅ |
| jasa konstruksi gedung sekolah | JASA_KONSTRUKSI | money-page | L5 ✅ |
| sewa alat konstruksi | SEWA | pillar | L1 ✅ |
| sewa alat konstruksi jakarta | SEWA | money-child | L6 ✅ |
| produk konstruksi | PRODUK_KONSTRUKSI | pillar | L1 ✅ |
| produk konstruksi terbaru | PRODUK_KONSTRUKSI | money-page | L5 ✅ |
| produk interior | PRODUK_INTERIOR | pillar | L1 ✅ |
| material konstruksi | MATERIAL_KONSTRUKSI | pillar | L1 ✅ |
| harga sewa alat proyek | SEWA | money-master | L4 ✅ |
| harga jasa cutting beton jakarta | JASA_KONSTRUKSI | money-child | L6 ✅ |
| jenis jasa konstruksi | JASA_KONSTRUKSI | sub-pillar-tipe-2 | L2 ✅ |
| perbandingan jasa konstruksi | JASA_KONSTRUKSI | sub-pillar-tipe-1 | L3 ✅ |
*/
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
		urlMappingJasaPengeboranPost
		
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

   if (urlMappingJasaPengeboranPost[cleanUrlJasaPengeboranPost]) {
        restoreCondition('JasaKonsPengeboranPost');
        restoreCondition('JasaPengeboranPost');
        //restoreCondition('JasaBorTanahPost');
     
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
        removeCondition('JasaBorTanahPost');
        removeCondition('JasaBorTembokPost');
        removeCondition('JasaBorePilePost');
        removeCondition('JasaBorAirSumurPost');
        removeCondition('JasaCoringBetonPost');
        removeCondition('JasaBorBetonPost');
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
       // JasaBorTanahPostLink.style.visibility = 'visible';
        pageNameJasaKonsPengeboranPost.textContent = urlMappingJasaPengeboranPost[cleanUrlJasaPengeboranPost];
    }
     // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaPengeboranPost[cleanUrlJasaPengeboranPost]) {
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
                   "name": urlMappingJasaPengeboranPost[cleanUrlJasaPengeboranPost],
                   "item": cleanUrlJasaPengeboranPost
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }


   });
