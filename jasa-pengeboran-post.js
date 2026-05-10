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
 * generateBreadcrumbJasaPengeboranPost v4.1 — FIXED LOCATION DETECTION
 * ✅ FIX: "ringan", "baja", "pasang" TIDAK terdeteksi sebagai lokasi
 * ✅ FIX: JASA TIDAK BOLEH MONEY_MASTER (100% terblokir)
 * ✅ FIX: MONEY_MASTER vs MONEY_PAGE berdasarkan jumlah kata (≤2 = MASTER)
 * ✅ Support SEMUA ENTITY TYPE: PRODUK, MATERIAL, JASA, SEWA/RENTAL, ARTIKEL
 * ✅ PRIORITAS DETEKSI SESUAI PHASE 1
 * ✅ Breadcrumb tidak loncat level (auto fix)
 * ✅ MAX_LEVEL = 4 (termasuk Home)
 */

function generateBreadcrumbJasaPengeboranPost(mappingObj, currentUrl, breadcrumbItems = [], entityType = 'PRODUK_INTERIOR') {
    
    // ============================================================
    // 1. KONSTANTA & VALIDASI
    // ============================================================
    const MAX_LEVEL = 4;
    const DOMAIN = 'https://www.betonjayareadymix.com';
    
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
    
    const VALID_PAGE_TYPES = [
        'pillar',                    // Level 1
        'sub-pillar-tipe-2',         // Level 2
        'sub-pillar-tipe-1',         // Level 3
        'money-master',              // Level 4 (JASA DILARANG)
        'money-page',                // Level 5
        'money-child',               // Level 6
        'variant',                   // Level 7
        'sub-variant'                // Level 8
    ];
    
    const TYPE_LEVEL_MAP = {
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
    // 2. FUNGSI BANTUAN ENTITY TYPE
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
    
    function isArtikelEntity() {
        return entityType === 'ARTIKEL';
    }
    
    function isProdukMaterialSewaArtikel() {
        return isProdukEntity() || isMaterialEntity() || isSewaEntity() || isArtikelEntity();
    }
    
    // ============================================================
    // 3. WHITELIST LOKASI (200+ KOTA)
    // ============================================================
    const LOCATION_WHITELIST = [
        // Jabodetabek
        'jakarta', 'bogor', 'depok', 'tangerang', 'bekasi', 'jabodetabek',
        'jakpus', 'jakbar', 'jaksel', 'jakut', 'jaktim',
        'tangerang selatan', 'tangsel', 'bintaro', 'alam sutera', 'gading serpong',
        // Jawa Barat
        'bandung', 'cimahi', 'cirebon', 'tasikmalaya', 'sukabumi', 'garut', 
        'sumedang', 'purwakarta', 'karawang', 'subang', 'indramayu',
        'majalengka', 'kuningan', 'ciamis', 'banjar', 'pangandaran', 'cianjur',
        // Jawa Tengah
        'semarang', 'solo', 'surakarta', 'yogyakarta', 'jogja', 'magelang', 
        'salatiga', 'pekalongan', 'tegal', 'brebes', 'cilacap', 'purwokerto', 
        'kebumen', 'banjarnegara', 'wonosobo', 'temanggung', 'kendal', 'demak', 
        'kudus', 'jepara', 'pati', 'rembang', 'blora', 'grobagan', 'sragen', 
        'karanganyar', 'wonogiri', 'sukoharjo', 'klaten', 'boyolali',
        // Jawa Timur
        'surabaya', 'malang', 'kediri', 'blitar', 'madiun', 'gresik', 'sidoarjo',
        'ponorogo', 'ngawi', 'magetan', 'trenggalek', 'tulungagung', 'nganjuk',
        'jombang', 'mojokerto', 'pasuruan', 'probolinggo', 'lumajang', 'jember',
        'banyuwangi', 'bondowoso', 'situbondo', 'pamekasan', 'sampang', 'sumenep',
        'bangkalan', 'bojonegoro', 'tuban', 'lamongan',
        // Sumatera
        'medan', 'binjai', 'pematangsiantar', 'tanjungbalai', 'tebingtinggi', 'deli serdang',
        'padang', 'bukittinggi', 'payakumbuh', 'solok', 'sawahlunto', 'padang panjang',
        'pekanbaru', 'dumai', 'bengkalis', 'kampar', 'riau', 'batam', 'tanjungpinang',
        'palembang', 'lubuklinggau', 'prabumulih', 'ogan ilir', 'ogan komering',
        'bandar lampung', 'metro', 'lampung', 'jambi', 'sungai penuh', 'bengkulu',
        'pangkalpinang', 'tanjung pandan', 'aceh', 'banda aceh', 'lhonga', 'sigli',
        // Kalimantan
        'pontianak', 'singkawang', 'ketapang', 'sambas', 'kalimantan barat',
        'balikpapan', 'samarinda', 'bontang', 'kutai', 'penajam', 'kalimantan timur',
        'banjarmasin', 'banjarbaru', 'kalimantan selatan', 'palangkaraya', 'kalimantan tengah',
        'tanjung selor', 'kalimantan utara',
        // Sulawesi
        'makassar', 'parepare', 'palopo', 'sulawesi selatan', 'manado', 'bitung', 'tomohon',
        'kotamobagu', 'sulawesi utara', 'palu', 'sulawesi tengah', 'kendari', 'baubau',
        'sulawesi tenggara', 'gorontalo', 'sulawesi barat', 'mamuju',
        // Bali & Nusa Tenggara
        'denpasar', 'badung', 'gianyar', 'tabanan', 'bangli', 'klungkung', 'karangasem',
        'buleleng', 'jembrana', 'bali', 'mataram', 'bima', 'dompu', 'sumbawa', 'lombok',
        'kupang', 'soe', 'atambua', 'ntt', 'ntb',
        // Maluku & Papua
        'ambon', 'tual', 'maluku', 'ternate', 'tidore', 'maluku utara',
        'jayapura', 'wamena', 'timika', 'merauke', 'biak', 'sorong', 'manokwari', 'nabire',
        'papua', 'papua barat'
    ];
    
    // BLACKLIST kata produk yang TIDAK boleh dianggap sebagai lokasi
    const PRODUCT_BLACKLIST_FOR_LOCATION = [
        // Material bangunan
        'baja', 'ringan', 'galvalum', 'spandek', 'bondek', 'hebel', 'bata', 
        'kayu', 'besi', 'aluminium', 'kaca', 'semen', 'pasir', 'batu', 'kerikil',
        'genteng', 'keramik', 'cat', 'pintu', 'jendela', 'kusen', 'atap', 'plafon',
        'gypsum', 'grbk', 'multiplek', 'triplek', 'blockboard', 'partikel',
        // Produk interior
        'kitchen', 'set', 'lemari', 'meja', 'kursi', 'sofa', 'springbed', 'laci',
        'minimalis', 'modern', 'klasik', 'jati', 'mahoni', 'hpl', 'mdf', 'melamin',
        'duco', 'finishing', 'furniture', 'furnitur', 'interior', 'exterior',
        // Jasa
        'pasang', 'service', 'renovasi', 'bangun', 'borongan', 'kontraktor',
        'konsultasi', 'survey', 'estimasi', 'perbaiki', 'instalasi', 'pemasangan',
        'pengerjaan', 'perawatan', 'maintenance', 'konstruksi', 'desain', 'gambar',
        // Ukuran (sering false positive)
        'tipis', 'tebal', 'lebar', 'panjang', 'pendek', 'kecil', 'besar', 'sedang',
        'mini', 'maxi', 'jumbo', 'extra', 'super', 'pro', 'max', 'ultra', 'deluxe',
        'premium', 'standar', 'ekonomis', 'grade', 'kw', 'original', 'bekas', 'baru',
        // Warna (sering false positive)
        'putih', 'hitam', 'merah', 'biru', 'hijau', 'kuning', 'ungu', 'abu', 'coklat',
        'krem', 'salem', 'tosca', 'navy', 'maroon', 'gold', 'silver', 'kuningan'
    ];
    
    // ============================================================
    // 4. FUNGSI DETEKSI LOKASI (FIXED v4.1)
    // ============================================================
    function isLocation(text) {
        const lowerText = text.toLowerCase();
        const words = lowerText.split(/[\s,-]+/);
        
        console.log(`  🔍 isLocation check: "${text.substring(0, 50)}..."`);
        
        // PRIORITAS 1: Cek whitelist kota (lokasi valid)
        for (const word of words) {
            if (LOCATION_WHITELIST.includes(word)) {
                console.log(`  ✅ Location found (whitelist): "${word}"`);
                return true;
            }
        }
        
        // PRIORITAS 2: Jika kata ada di blacklist produk → BUKAN lokasi
        for (const word of words) {
            if (PRODUCT_BLACKLIST_FOR_LOCATION.includes(word)) {
                console.log(`  ❌ Not location (product blacklist): "${word}"`);
                return false;
            }
        }
        
        // PRIORITAS 3: Jika tidak ada indikator lokasi (di, ke, kota, wilayah) → BUKAN lokasi
        const hasLocationIndicator = lowerText.includes('di ') || 
                                      lowerText.includes('ke ') || 
                                      lowerText.includes('kota ') || 
                                      lowerText.includes('wilayah ') ||
                                      lowerText.includes('daerah ') ||
                                      lowerText.includes('kecamatan ');
        
        if (!hasLocationIndicator) {
            console.log(`  ❌ Not location (no indicator: di/kota/wilayah)`);
            return false;
        }
        
        // PRIORITAS 4: Deteksi dengan pola vokal (hanya jika ada indicator)
        for (const word of words) {
            // Skip kata pendek
            if (word.length < 4) continue;
            if (word.length > 12) continue;
            
            // Skip jika mengandung angka
            if (word.match(/[0-9]/)) continue;
            
            const vowelCount = (word.match(/[aiueo]/g) || []).length;
            if (vowelCount >= 2) {
                console.log(`  ✅ Location detected (vowel pattern + indicator): "${word}"`);
                return true;
            }
        }
        
        console.log(`  ❌ Not location (fallback)`);
        return false;
    }
    
    // ============================================================
    // 5. FUNGSI CEK PRODUK SPESIFIK
    // ============================================================
    const SPECIFIC_PRODUCT_INDICATORS = [
        'galvalum', 'spandek', 'bondek', 'hpl', 'mdf', 'jati', 'mahoni',
        'excavator', 'bulldozer', 'crane', 'dump truck', 'vibro', 'stamper',
        'minimix', 'jayamix', 'readymix', 'hebel', 'bata ringan', 'bata interlock',
        'multiplek', 'triplek', 'blockboard', 'gypsum', 'grc', 'grbk'
    ];
    
    function isSpecificProduct(text, wordCountAfterPrice = null) {
        const lowerText = text.toLowerCase();
        
        // Jika jumlah kata setelah harga <= 2, BUKAN specific product
        if (wordCountAfterPrice !== null && wordCountAfterPrice <= 2) {
            return false;
        }
        
        // Cek indicators
        for (const indicator of SPECIFIC_PRODUCT_INDICATORS) {
            if (lowerText.includes(indicator)) return true;
        }
        
        // Cek ukuran/dimensi
        if (/\d+(\.\d+)?\s*(mm|cm|m|inch|meter)/.test(lowerText)) return true;
        
        // Cek merk/tipe (minimal 2 kata)
        const words = lowerText.split(/\s+/);
        if (words.length >= 2) {
            const hasMerk = ['brand', 'merk', 'tipe', 'type', 'seri'].some(kw => lowerText.includes(kw));
            if (hasMerk) return true;
        }
        
        return false;
    }
    
    // ============================================================
    // 6. FUNGSI DETEKSI PAGE TYPE (PRIORITAS SESUAI PHASE 1)
    // ============================================================
    function detectPageType(pageName, position, totalLevels, entityTypeParam = null) {
        const lowerName = pageName.toLowerCase();
        const useEntityType = entityTypeParam || entityType;
        const isJasa = ['JASA_KONSTRUKSI', 'JASA_DESAIN_INTERIOR', 'JASA'].includes(useEntityType);
        const isSewa = ['SEWA', 'RENTAL', 'SEWA_RENTAL', 'SEWA_ALAT', 'RENTAL_ALAT'].includes(useEntityType);
        
        console.log(`🔍 Detecting: "${pageName}" | Entity: ${useEntityType} | Position: ${position}`);
        
        // ============================================================
        // PRIORITAS 1: PILLAR jika posisi pertama dan bukan satu-satunya
        // ============================================================
        if (position === 0 && totalLevels > 1) {
            console.log(`  → PILLAR (posisi pertama)`);
            return 'pillar';
        }
        
        // ============================================================
        // PRIORITAS 2: CEK INTENT KEYWORD (PANDUAN, CARA, TIPS, APA ITU)
        // ============================================================
        const informationalKeywords = ['panduan', 'cara ', 'tips ', 'apa itu', 'pengertian', 'edukasi'];
        for (const kw of informationalKeywords) {
            if (lowerName.includes(kw)) {
                if (lowerName.includes('jenis') || lowerName.includes('macam')) {
                    console.log(`  → SUB-PILLAR-TIPE-2 (jenis/macam)`);
                    return 'sub-pillar-tipe-2';
                }
                console.log(`  → PILLAR (informational keyword: ${kw})`);
                return 'pillar';
            }
        }
        
        // ============================================================
        // PRIORITAS 3: CEK KEYWORD HARGA/SEWA/BIAYA
        // ============================================================
        const hasPrice = lowerName.includes('harga ') || lowerName.includes('biaya ') || lowerName.includes('tarif ');
        const hasRent = lowerName.includes('sewa ') || lowerName.includes('rental ');
        
        if (hasPrice || hasRent) {
            console.log(`  → Price/rent keyword detected`);
            
            // 🔥 KRITIS: JASA TIDAK BOLEH MONEY_MASTER
            if (isJasa) {
                console.log(`  → JASA detected → MONEY-PAGE (forced, not master)`);
                return 'money-page';
            }
            
            // Ekstrak teks setelah keyword
            let afterKeyword = '';
            if (lowerName.includes('harga ')) afterKeyword = lowerName.substring(lowerName.indexOf('harga ') + 6);
            else if (lowerName.includes('biaya ')) afterKeyword = lowerName.substring(lowerName.indexOf('biaya ') + 6);
            else if (lowerName.includes('sewa ')) afterKeyword = lowerName.substring(lowerName.indexOf('sewa ') + 5);
            else if (lowerName.includes('rental ')) afterKeyword = lowerName.substring(lowerName.indexOf('rental ') + 7);
            
            afterKeyword = afterKeyword.trim();
            const wordCount = afterKeyword.split(/\s+/).filter(w => w.length > 0).length;
            
            console.log(`  → After keyword: "${afterKeyword.substring(0, 50)}" | Word count: ${wordCount}`);
            
            // CEK LOKASI (MONEY_CHILD) — PRIORITAS TERTINGGI
            if (isLocation(afterKeyword)) {
                console.log(`  → Location detected → MONEY-CHILD`);
                return 'money-child';
            }
            
            // CEK JUMLAH KATA
            // wordCount <= 2 → MONEY_MASTER (contoh: "harga bata ringan" = 2 kata)
            if (wordCount <= 2) {
                console.log(`  → ${wordCount} kata → MONEY-MASTER`);
                return 'money-master';
            }
            
            // wordCount >= 3 → cek apakah specific product
            if (isSpecificProduct(afterKeyword, wordCount)) {
                console.log(`  → ${wordCount} kata + specific product → MONEY-PAGE`);
                return 'money-page';
            }
            
            // Default untuk 3+ kata tanpa specific indicator → tetap MONEY_PAGE
            console.log(`  → ${wordCount} kata → MONEY-PAGE`);
            return 'money-page';
        }
        
        // ============================================================
        // PRIORITAS 4: CEK ENTITY TYPE KHUSUS (tanpa keyword harga)
        // ============================================================
        
        // JASA tanpa keyword harga
        if (isJasa) {
            const jasaKeywords = ['jasa', 'pasang', 'service', 'kontraktor', 'borongan', 
                                   'renovasi', 'bangun', 'konsultasi', 'survey', 'estimasi',
                                   'perbaiki', 'instalasi', 'pemasangan', 'pengerjaan'];
            for (const kw of jasaKeywords) {
                if (lowerName.includes(kw)) {
                    // Cek apakah mengandung lokasi
                    if (isLocation(lowerName)) {
                        console.log(`  → JASA + location → MONEY-CHILD`);
                        return 'money-child';
                    }
                    console.log(`  → JASA detected (no location) → MONEY-PAGE`);
                    return 'money-page';
                }
            }
        }
        
        // SEWA tanpa keyword harga
        if (isSewa) {
            const sewaKeywords = ['sewa', 'rental', 'lease', 'alat berat', 'excavator', 
                                   'bulldozer', 'crane', 'vibro', 'stamper', 'dump truck'];
            for (const kw of sewaKeywords) {
                if (lowerName.includes(kw)) {
                    if (isLocation(lowerName)) {
                        console.log(`  → SEWA + location → MONEY-CHILD`);
                        return 'money-child';
                    }
                    console.log(`  → SEWA detected → MONEY-PAGE`);
                    return 'money-page';
                }
            }
        }
        
        // ============================================================
        // PRIORITAS 5: SUB-VARIANT (level 8 - paling detail)
        // ============================================================
        if (/(\d+(\.\d+)?\s*mm\s*x\s*\d+(\.\d+)?\s*mm)/.test(lowerName) ||
            (lowerName.includes('tebal') && /\d+\s*mm/.test(lowerName) && lowerName.includes('x')) ||
            (lowerName.includes('ukuran') && lowerName.includes('panjang') && /\d+\s*m/.test(lowerName))) {
            console.log(`  → SUB-VARIANT (very detailed specs)`);
            return 'sub-variant';
        }
        
        // ============================================================
        // PRIORITAS 6: VARIANT (level 7)
        // ============================================================
        const variantKeywords = ['spesifikasi', 'ukuran', 'tipe ', 'type ', 'model', 
                                  'varian', 'warna', 'merk', 'kapasitas', 'dimensi'];
        for (const kw of variantKeywords) {
            if (lowerName.includes(kw)) {
                console.log(`  → VARIANT (${kw})`);
                return 'variant';
            }
        }
        
        if (/\d+(\.\d+)?\s*(mm|cm|m|kg|ton)/.test(lowerName) && !lowerName.includes('x')) {
            console.log(`  → VARIANT (dimension)`);
            return 'variant';
        }
        
        // ============================================================
        // PRIORITAS 7: SUB-PILLAR TIPE 1 (level 3 - perbandingan)
        // ============================================================
        const comparisonKeywords = [' vs ', 'versus', 'perbandingan', 'lebih baik', 
                                     'mana yang', 'kelebihan', 'kekurangan', 'perbedaan'];
        for (const kw of comparisonKeywords) {
            if (lowerName.includes(kw)) {
                console.log(`  → SUB-PILLAR-TIPE-1 (comparison: ${kw})`);
                return 'sub-pillar-tipe-1';
            }
        }
        
        // ============================================================
        // PRIORITAS 8: SUB-PILLAR TIPE 2 (level 2 - jenis/macam)
        // ============================================================
        if (lowerName.startsWith('jenis ') || lowerName.startsWith('macam ') || 
            lowerName.startsWith('tipe ') || lowerName.includes('jenis-jenis') || 
            lowerName.includes('macam-macam') || lowerName.includes('kategori ')) {
            console.log(`  → SUB-PILLAR-TIPE-2 (category listing)`);
            return 'sub-pillar-tipe-2';
        }
        
        // ============================================================
        // DEFAULT: PILLAR
        // ============================================================
        console.log(`  → PILLAR (default)`);
        return 'pillar';
    }
    
    // ============================================================
    // 7. INTENT DOMINANCE (SESUAI PHASE 1.5)
    // ============================================================
    function getIntentForPageType(pageType, entityTypeParam = null) {
        const useEntityType = entityTypeParam || entityType;
        const isJasa = ['JASA_KONSTRUKSI', 'JASA_DESAIN_INTERIOR', 'JASA'].includes(useEntityType);
        const isSewa = ['SEWA', 'RENTAL', 'SEWA_RENTAL', 'SEWA_ALAT', 'RENTAL_ALAT'].includes(useEntityType);
        
        const intentMap = {
            'pillar': { primary: 'informasional', secondary: 'komersial', dominance: 90 },
            'sub-pillar-tipe-2': { primary: 'informasional', secondary: 'komersial', dominance: 60 },
            'sub-pillar-tipe-1': { primary: 'komersial', secondary: 'informasional', dominance: 70 },
            'variant': { primary: 'komersial', secondary: 'informasional', dominance: 80 },
            'sub-variant': { primary: 'komersial', secondary: 'informasional', dominance: 70 }
        };
        
        if (intentMap[pageType]) return intentMap[pageType];
        
        // MONEY_MASTER
        if (pageType === 'money-master') {
            if (isJasa) return { primary: 'komersial', secondary: 'transaksional', dominance: 60 };
            if (isSewa) return { primary: 'transaksional', secondary: 'komersial', dominance: 80 };
            return { primary: 'transaksional', secondary: 'komersial', dominance: 80 };
        }
        
        // MONEY_PAGE
        if (pageType === 'money-page') {
            if (isJasa || isSewa) return { primary: 'komersial', secondary: 'transaksional', dominance: 60 };
            return { primary: 'transaksional', secondary: 'komersial', dominance: 85 };
        }
        
        // MONEY_CHILD
        if (pageType === 'money-child') {
            if (isJasa || isSewa) return { primary: 'komersial', secondary: 'transaksional', dominance: 60 };
            return { primary: 'transaksional', secondary: 'komersial', dominance: 90 };
        }
        
        return { primary: 'informasional', secondary: null, dominance: 50 };
    }
    
    // ============================================================
    // 8. EVERGREEN vs NON-EVERGREEN
    // ============================================================
    function getEvergreenStatus(pageType, entityTypeParam = null) {
        const useEntityType = entityTypeParam || entityType;
        const isJasa = ['JASA_KONSTRUKSI', 'JASA_DESAIN_INTERIOR', 'JASA'].includes(useEntityType);
        const isSewa = ['SEWA', 'RENTAL', 'SEWA_RENTAL', 'SEWA_ALAT', 'RENTAL_ALAT'].includes(useEntityType);
        
        // EVERGREEN (tidak perlu tahun)
        if (['pillar', 'sub-pillar-tipe-2', 'variant', 'sub-variant'].includes(pageType)) {
            return { evergreen: true, wajibTahun: false };
        }
        
        // SUB-PILLAR TIPE 1 (fleksibel)
        if (pageType === 'sub-pillar-tipe-1') {
            return { evergreen: false, wajibTahun: false, catatan: 'tergantung topik perbandingan' };
        }
        
        // MONEY_MASTER
        if (pageType === 'money-master') {
            if (isJasa) return { evergreen: false, wajibTahun: false, catatan: 'JASA tidak boleh money-master' };
            return { evergreen: false, wajibTahun: true };
        }
        
        // MONEY_PAGE & MONEY_CHILD
        if (['money-page', 'money-child'].includes(pageType)) {
            if (isJasa || isSewa) return { evergreen: false, wajibTahun: false, catatan: 'fleksibel, tidak wajib tahun' };
            return { evergreen: false, wajibTahun: true };
        }
        
        return { evergreen: true, wajibTahun: false };
    }
    
    // ============================================================
    // 9. KUMPULKAN DATA DARI MAPPING
    // ============================================================
    const allPageNames = [];
    if (mappingObj) {
        for (const [url, name] of Object.entries(mappingObj)) {
            if (name && typeof name === 'string') {
                allPageNames.push(name.toLowerCase());
            }
        }
    }
    
    function slugify(text) {
        return text.toLowerCase()
            .replace(/[^\w\s-]/g, '')
            .replace(/\s+/g, '-')
            .replace(/--+/g, '-')
            .trim();
    }
    
    // ============================================================
    // 10. BANGUN LEVELS DARI breadcrumbItems
    // ============================================================
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
        
        const pageType = detectPageType(name, i, breadcrumbItems.length, entityType);
        const intentData = getIntentForPageType(pageType, entityType);
        const evergreenData = getEvergreenStatus(pageType, entityType);
        
        allLevels.push({
            name: name,
            url: url,
            type: pageType,
            level: TYPE_LEVEL_MAP[pageType] || 99,
            intent: intentData,
            evergreen: evergreenData,
            position: i
        });
    }
    
    // ============================================================
    // 11. VALIDASI & PERBAIKI HIERARKI (TIDAK BOLEH LONCAT LEVEL)
    // ============================================================
    for (let i = 0; i < allLevels.length - 1; i++) {
        const current = allLevels[i];
        const next = allLevels[i + 1];
        
        if (next.level - current.level > 1) {
            console.warn(`⚠️ LEVEL JUMP: ${current.name}(${current.type} L${current.level}) → ${next.name}(${next.type} L${next.level})`);
            
            const correctedIndex = Math.min(current.level + 1, 8);
            const correctedType = VALID_PAGE_TYPES[correctedIndex - 1];
            next.type = correctedType;
            next.level = correctedIndex;
            next.intent = getIntentForPageType(correctedType, entityType);
            next.evergreen = getEvergreenStatus(correctedType, entityType);
            
            console.log(`✅ DIPERBAIKI: ${next.name} → ${next.type} L${next.level}`);
        }
    }
    
    // ============================================================
    // 12. VALIDASI KHUSUS: JASA TIDAK BOLEH MONEY_MASTER
    // ============================================================
    for (const level of allLevels) {
        if (isJasaEntity() && level.type === 'money-master') {
            console.warn(`⚠️ JASA cannot be money-master: ${level.name} → forced to money-page`);
            level.type = 'money-page';
            level.level = 5;
            level.intent = getIntentForPageType('money-page', entityType);
            level.evergreen = getEvergreenStatus('money-page', entityType);
        }
    }
    
    // ============================================================
    // 13. VALIDASI & FALLBACK URL
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
    // 14. TENTUKAN LEVEL YANG DITAMPILKAN (MAX 4 LEVEL)
    // ============================================================
    const selectedLevels = [];
    
    // Home (WAJIB)
    selectedLevels.push({ 
        name: 'Beranda', 
        url: DOMAIN, 
        isHome: true,
        type: 'pillar',
        level: 1,
        intent: getIntentForPageType('pillar', entityType),
        evergreen: getEvergreenStatus('pillar', entityType)
    });
    
    let remainingSlots = MAX_LEVEL - 2;
    
    console.log(`\n📊 ========================================`);
    console.log(`📊 Breadcrumb Generator v4.1 — FIXED LOCATION DETECTION`);
    console.log(`📊 Entity Type: ${entityType}`);
    console.log(`📊 JASA Entity: ${isJasaEntity() ? 'YES (MONEY_MASTER DILARANG)' : 'NO'}`);
    console.log(`📊 ========================================`);
    
    // Parent terdekat (WAJIB)
    let parentTerdekat = null;
    if (allLevels.length > 0) {
        parentTerdekat = allLevels[allLevels.length - 1];
        selectedLevels.push(parentTerdekat);
        remainingSlots--;
        console.log(`✅ WAJIB: "${parentTerdekat.name}" → ${parentTerdekat.type} (L${parentTerdekat.level})`);
    }
    
    // Level lainnya (prioritaskan level tertinggi yang unik)
    const otherLevels = [...allLevels.slice(0, allLevels.length - 1)]
        .sort((a, b) => b.level - a.level)
        .filter((v, i, self) => self.findIndex(t => t.name === v.name) === i); // unique by name
    
    for (const level of otherLevels) {
        if (remainingSlots <= 0) {
            console.log(`📌 SKIP: "${level.name}" (${level.type}) - slot habis`);
            continue;
        }
        
        // Hindari duplikasi dengan parent atau home
        if (selectedLevels.some(s => s.name === level.name)) {
            console.log(`📌 SKIP: "${level.name}" - already in breadcrumb`);
            continue;
        }
        
        selectedLevels.splice(1, 0, level);
        remainingSlots--;
        console.log(`✅ TAMBAH: "${level.name}" → ${level.type} (L${level.level})`);
    }
    
    // Halaman saat ini (WAJIB)
    const currentFullUrl = currentUrl.startsWith('http') ? currentUrl : DOMAIN + currentUrl;
    const currentPageTitle = (() => {
        if (mappingObj && mappingObj[currentUrl]) return mappingObj[currentUrl];
        if (parentTerdekat) return parentTerdekat.name;
        return 'Halaman';
    })();
    
    const currentPageType = detectPageType(currentPageTitle, allLevels.length, allLevels.length, entityType);
    const currentIntent = getIntentForPageType(currentPageType, entityType);
    const currentEvergreen = getEvergreenStatus(currentPageType, entityType);
    
    selectedLevels.push({
        name: currentPageTitle,
        url: currentFullUrl,
        isCurrent: true,
        type: currentPageType,
        level: TYPE_LEVEL_MAP[currentPageType] || 99,
        intent: currentIntent,
        evergreen: currentEvergreen
    });
    
    // Update position
    for (let i = 0; i < selectedLevels.length; i++) {
        selectedLevels[i].position = i + 1;
    }
    
    console.log(`\n✅ FINAL (${selectedLevels.length} level):`);
    selectedLevels.forEach((l, i) => {
        console.log(`   ${i+1}. ${l.name} → ${l.type} (L${l.level})`);
    });
    console.log(`\n📊 Current page type: ${currentPageType}`);
    console.log(`📊 Intent: ${currentIntent.primary} (${currentIntent.dominance}%)`);
    console.log(`📊 Wajib Tahun di H1: ${currentEvergreen.wajibTahun ? 'YES' : 'NO'}`);
    console.log(`📊 ========================================\n`);
    
    // ============================================================
    // 15. GENERATE HTML BREADCRUMB + JSON-LD
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
    
    // ============================================================
    // 16. INJECT KE DOM
    // ============================================================
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
    script.textContent = JSON.stringify(jsonLd);
    document.head.appendChild(script);
    
    console.log(`✅ Breadcrumb injected for entity: ${entityType}`);
    
    // ============================================================
    // 17. RETURN LENGKAP
    // ============================================================
    return {
        html: breadcrumbHtml,
        jsonLd: jsonLd,
        selectedLevels: selectedLevels,
        currentPageType: currentPageType,
        currentIntent: currentIntent,
        currentEvergreen: currentEvergreen,
        entityType: entityType,
        isValidType: true,
        version: '4.1'
    };
}

// ============================================================
// RINGKASAN HASIL DETEKSI PER ENTITY TYPE (v4.1)
// ============================================================
/*
| Entity Type | Keyword Contoh | Hasil Deteksi | Alasan |
|-------------|----------------|---------------|--------|
| JASA | "Jasa Pasang Atap Baja Ringan" | money-page ✅ | Tidak ada lokasi, "ringan" di blacklist |
| JASA | "Jasa Pasang Atap Baja Ringan Jakarta" | money-child ✅ | Mengandung whitelist kota "jakarta" |
| JASA | "Jasa Pasang Atap Baja Ringan di Bandung" | money-child ✅ | Indicator "di" + whitelist "bandung" |
| MATERIAL | "Harga Bata Ringan" | money-master ✅ | 2 kata setelah keyword |
| MATERIAL | "Harga Bata Ringan Hebel" | money-page ✅ | 3 kata + specific product |
| MATERIAL | "Harga Bata Ringan di Jakarta" | money-child ✅ | mengandung lokasi |
| PRODUK | "Harga Kitchen Set" | money-master ✅ | 2 kata setelah keyword |
| PRODUK | "Harga Kitchen Set Minimalis" | money-page ✅ | 3+ kata |
| SEWA | "Harga Sewa Excavator" | money-master ✅ | 2 kata setelah keyword |
| SEWA | "Sewa Excavator Jakarta" | money-child ✅ | mengandung lokasi |
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
		    await loadEvergreenScript("2026-01-23T10:30:00+07:00");
		
		    // ✔ AUTO MODE
		    // await loadEvergreenScript();
		         console.log("✅ detect-evergreen.js selesai dimuat.");

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
			
			    const hash = stableHash(cleanUrlJasaPengeboranPost);
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
		    console.error("[HybridDateModified] Fatal:", err);
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
