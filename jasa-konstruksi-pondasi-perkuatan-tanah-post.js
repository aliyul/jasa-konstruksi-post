// ============================================================
// JASA PONDASI & PERKUATAN TANAH — POST
// v2.2.0 — Early Exit v2.0.0 + Fix v2.1.0 + Pendekatan C
// ============================================================

console.log('[jasa-pondasi-perkuatan-tanah-post] 📄 File loaded, waiting for DOM...');

//Jasa Fireproofing
// ═════════════════════════════════════════════════════════════════════
// 📂 PARENT: jasa-fireproofing-baja (Money-Page)
// ➔ CHILD: Variant (Aplikasi & Rating)
// ═════════════════════════════════════════════════════════════════════
const urlMappingJasaFireproofingBajaFromMoneyPageToVariant = {
  "https://www.betonjayareadymix.com/2019/08/jasa-fireproofing-baja-gedung-bertingkat.html": "Jasa Fireproofing Baja Gedung Bertingkat",
  "https://www.betonjayareadymix.com/2019/08/jasa-fireproofing-baja-pabrik.html": "Jasa Fireproofing Baja Pabrik",
  "https://www.betonjayareadymix.com/2019/08/jasa-fireproofing-rating-2-jam.html": "Jasa Fireproofing Rating 2 Jam",
  "https://www.betonjayareadymix.com/2019/08/jasa-fireproofing-rating-3-jam.html": "Jasa Fireproofing Rating 3 Jam"
};

// ═════════════════════════════════════════════════════════════════════
// 📂 PARENT: jasa-fireproofing-beton (Money-Page)
// ➔ CHILD: Variant (Aplikasi)
// ═════════════════════════════════════════════════════════════════════
const urlMappingJasaFireproofingBetonFromMoneyPageToVariant = {
  "https://www.betonjayareadymix.com/2019/08/jasa-fireproofing-beton-dermaga.html": "Jasa Fireproofing Beton Dermaga",
  "https://www.betonjayareadymix.com/2019/08/jasa-fireproofing-beton-saluran-irigasi.html": "Jasa Fireproofing Beton Saluran Irigasi"
};

// ═════════════════════════════════════════════════════════════════════
// 📂 PARENT: jasa-fireproofing-vinyl (Money-Page)
// ➔ CHILD: Variant (Aplikasi & Grade)
// ═════════════════════════════════════════════════════════════════════
const urlMappingJasaFireproofingVinylFromMoneyPageToVariant = {
  "https://www.betonjayareadymix.com/2019/08/jasa-fireproofing-vinyl-kolam.html": "Jasa Fireproofing Vinyl Kolam",
  "https://www.betonjayareadymix.com/2019/08/jasa-fireproofing-vinyl-heavy-duty.html": "Jasa Fireproofing Vinyl Heavy Duty"
};

// ═════════════════════════════════════════════════════════════════════
// 📂 PARENT: jasa-spray-fireproofing (Money-Page)
// ➔ CHILD: Variant (Material Spray)
// ═════════════════════════════════════════════════════════════════════
const urlMappingJasaSprayFireproofingFromMoneyPageToVariant = {
  "https://www.betonjayareadymix.com/2019/08/jasa-spray-fireproofing-cementitious.html": "Jasa Spray Fireproofing Cementitious",
  "https://www.betonjayareadymix.com/2019/08/jasa-spray-fireproofing-vermiculite.html": "Jasa Spray Fireproofing Vermiculite"
};

// ═════════════════════════════════════════════════════════════════════
// 📂 PARENT: jasa-pengecatan-intumescent (Money-Page)
// ➔ CHILD: Variant (Lokasi Aplikasi)
// ═════════════════════════════════════════════════════════════════════
const urlMappingJasaPengecatanIntumescentFromMoneyPageToVariant = {
  "https://www.betonjayareadymix.com/2019/08/jasa-pengecatan-intumescent-internal.html": "Jasa Pengecatan Intumescent Internal",
  "https://www.betonjayareadymix.com/2019/08/jasa-pengecatan-intumescent-eksternal.html": "Jasa Pengecatan Intumescent Eksternal"
};

// ═════════════════════════════════════════════════════════════════════
// 📂 PARENT: jasa-pemasangan-fireproof-board (Money-Page)
// ➔ CHILD: Variant (Jenis Board)
// ═════════════════════════════════════════════════════════════════════
const urlMappingJasaPemasanganFireproofBoardFromMoneyPageToVariant = {
  "https://www.betonjayareadymix.com/2019/08/jasa-pemasangan-fireproof-board-kalsium-silikat.html": "Jasa Pemasangan Fireproof Board Kalsium Silikat"
};
// ═════════════════════════════════════════════════════════════════════
// 📂 PARENT: jasa-fireproofing (Money-Master)
// ➔ CHILD: Money-Child (Lokasi / Kawasan Industri)
// ═════════════════════════════════════════════════════════════════════
const urlMappingJasaFireproofingFromMoneyMasterToMoneyChild = {
  "https://www.betonjayareadymix.com/2019/08/jasa-fireproofing-jakarta.html": "Jasa Fireproofing Jakarta",
  "https://www.betonjayareadymix.com/2019/08/jasa-fireproofing-karawang.html": "Jasa Fireproofing Karawang",
  "https://www.betonjayareadymix.com/2019/08/jasa-fireproofing-bekasi.html": "Jasa Fireproofing Bekasi",
  "https://www.betonjayareadymix.com/2019/08/jasa-fireproofing-cikarang.html": "Jasa Fireproofing Cikarang",
  "https://www.betonjayareadymix.com/2019/08/jasa-fireproofing-surabaya.html": "Jasa Fireproofing Surabaya"
};

// ============================================================
// 🔍 ENTITY TYPE: JASA (Pondasi Bangunan)
// ============================================================
// 📁 JASA PONDASI (BORONGAN PONDASI) - MONEY PAGE & CHILD
// 🧠 ENTITY: JASA → TYPE: MONEY_PAGE & MONEY_CHILD
// Parent: Jasa Pondasi Bangunan (SUB2)
// Breadcrumb: Home > Jasa Konstruksi > Jasa Pondasi Bangunan > [Nama Layanan] (4 level)
// ============================================================

// ═══════════════════════════════════════════════════════════
// [BAGIAN 1] DEFINISI SEMUA MAPPING
// ═══════════════════════════════════════════════════════════

const urlMappingJasaPondasiFromMoneyMasterMoneyChild = {
"https://www.betonjayareadymix.com/2019/08/jasa-pondasi-jakarta.html": "Jasa Pondasi Jakarta",
"https://www.betonjayareadymix.com/2019/08/jasa-pondasi-bogor.html": "Jasa Pondasi Bpgpr",
"https://www.betonjayareadymix.com/2019/08/jasa-pondasi-depok.html": "Jasa Pondasi Depok",
"https://www.betonjayareadymix.com/2019/08/jasa-pondasi-tangerang.html": "Jasa Pondasi Tamgerang",
"https://www.betonjayareadymix.com/2019/08/jasa-pondasi-bekasi.html": "Jasa Pondasi Bekasi",
"https://www.betonjayareadymix.com/2019/08/jasa-pondasi-karawang.html": "Jasa Pondasi Karawang",
"https://www.betonjayareadymix.com/2019/08/jasa-pondasi-surabaya.html": "Jasa Pondasi Surabaya"
}

const urlMappingJasaBoronganPondasiFromMoneyPageMoneyChild = {
  "https://www.betonjayareadymix.com/2019/08/jasa-borongan-pondasi-terdekat.html": "Jasa Borongan Pondasi Terdekat",
  // ini sebenar nya MM redirect aja ke jasa borongan pondasi.
  //"https://www.betonjayareadymix.com/2019/08/jasa-borongan-pondasi-murah.html": "Jasa Borongan Pondasi Murah",
  "https://www.betonjayareadymix.com/2019/08/jasa-borongan-pondasi-sumedang.html": "Jasa Borongan Pondasi Sumedang",
  "https://www.betonjayareadymix.com/2019/08/jasa-borongan-pondasi-subang.html": "Jasa Borongan Pondasi Subang",
  "https://www.betonjayareadymix.com/2019/08/jasa-borongan-pondasi-purwakarta.html": "Jasa Borongan Pondasi Purwakarta",
  "https://www.betonjayareadymix.com/2019/08/jasa-borongan-pondasi-pangandaran.html": "Jasa Borongan Pondasi Pangandaran",
  "https://www.betonjayareadymix.com/2019/08/jasa-borongan-pondasi-majalengka.html": "Jasa Borongan Pondasi Majalengka",
  "https://www.betonjayareadymix.com/2019/08/jasa-borongan-pondasi-kuningan.html": "Jasa Borongan Pondasi Kuningan",
  "https://www.betonjayareadymix.com/2019/08/jasa-borongan-pondasi-indramayu.html": "Jasa Borongan Pondasi Indramayu",
  "https://www.betonjayareadymix.com/2019/08/jasa-borongan-pondasi-cirebon.html": "Jasa Borongan Pondasi Cirebon",
  "https://www.betonjayareadymix.com/2019/08/jasa-borongan-pondasi-cianjur.html": "Jasa Borongan Pondasi Cianjur",
  "https://www.betonjayareadymix.com/2019/08/jasa-borongan-pondasi-ciamis.html": "Jasa Borongan Pondasi Ciamis",
  "https://www.betonjayareadymix.com/2019/08/jasa-borongan-pondasi-garut.html": "Jasa Borongan Pondasi Garut",
  "https://www.betonjayareadymix.com/2019/08/jasa-borongan-pondasi-tasikmalaya.html": "Jasa Borongan Pondasi Tasikmalaya",
  "https://www.betonjayareadymix.com/2019/08/jasa-borongan-pondasi-sukabumi.html": "Jasa Borongan Pondasi Sukabumi",
  "https://www.betonjayareadymix.com/2019/08/jasa-borongan-pondasi-bandung.html": "Jasa Borongan Pondasi Bandung",
  "https://www.betonjayareadymix.com/2019/08/jasa-borongan-pondasi-karawang.html": "Jasa Borongan Pondasi Karawang",
  "https://www.betonjayareadymix.com/2019/08/jasa-borongan-pondasi-bekasi.html": "Jasa Borongan Pondasi Bekasi",
  "https://www.betonjayareadymix.com/2019/08/jasa-borongan-pondasi-tangerang.html": "Jasa Borongan Pondasi Tangerang",
  "https://www.betonjayareadymix.com/2019/08/jasa-borongan-pondasi-depok.html": "Jasa Borongan Pondasi Depok",
  "https://www.betonjayareadymix.com/2019/08/jasa-borongan-pondasi-bogor.html": "Jasa Borongan Pondasi Bogor",
  "https://www.betonjayareadymix.com/2019/08/jasa-borongan-pondasi-jakarta.html": "Jasa Borongan Pondasi Jakarta"
};

const urlMappingJasaPondasiCakarAyamFromMoneyPageMoneyChild = {
  "https://www.betonjayareadymix.com/2019/08/jasa-pondasi-cakar-ayam-jakarta.html": "Jasa Pondasi Cakar Ayam Jakarta",
  "https://www.betonjayareadymix.com/2019/08/jasa-pondasi-cakar-ayam-bogor.html": "Jasa Pondasi Cakar Ayam Bogor",
  "https://www.betonjayareadymix.com/2019/08/jasa-pondasi-cakar-ayam-depok.html": "Jasa Pondasi Cakar Ayam Depok",
  "https://www.betonjayareadymix.com/2019/08/jasa-pondasi-cakar-ayam-tangerang.html": "Jasa Pondasi Cakar Ayam Tangerang",
  "https://www.betonjayareadymix.com/2019/08/jasa-pondasi-cakar-ayam-bekasi.html": "Jasa Pondasi Cakar Ayam Bekasi",
  "https://www.betonjayareadymix.com/2019/08/jasa-pondasi-cakar-ayam-karawang.html": "Jasa Pondasi Cakar Ayam Karawang",
  "https://www.betonjayareadymix.com/2019/08/jasa-pondasi-cakar-ayam-cianjur.html": "Jasa Pondasi Cakar Ayam Cianjur",
  "https://www.betonjayareadymix.com/2019/08/jasa-pondasi-cakar-ayam-bandung.html": "Jasa Pondasi Cakar Ayam Bandung",
  "https://www.betonjayareadymix.com/2019/08/jasa-pondasi-cakar-ayam-terdekat.html": "Jasa Pondasi Cakar Ayam Terdekat"
};

const urlMappingJasaPondasiTapakFromMoneyPageMoneyChild = {
  "https://www.betonjayareadymix.com/2019/08/jasa-pondasi-tapak-jakarta.html": "Jasa Pondasi Tapak Jakarta",
  "https://www.betonjayareadymix.com/2019/08/jasa-pondasi-tapak-bogor.html": "Jasa Pondasi Tapak Bogor",
  "https://www.betonjayareadymix.com/2019/08/jasa-pondasi-tapak-depok.html": "Jasa Pondasi Tapak Depok",
  // ✅ FIX: URL typo "Tangerang" → "tangerang" (lowercase)
  "https://www.betonjayareadymix.com/2019/08/jasa-pondasi-tapak-tangerang.html": "Jasa Pondasi Tapak Tangerang",
  "https://www.betonjayareadymix.com/2019/08/jasa-pondasi-tapak-bekasi.html": "Jasa Pondasi Tapak Bekasi",
  "https://www.betonjayareadymix.com/2019/08/jasa-pondasi-tapak-karawang.html": "Jasa Pondasi Tapak Karawang",
  "https://www.betonjayareadymix.com/2019/08/jasa-pondasi-tapak-cianjur.html": "Jasa Pondasi Tapak Cianjur",
  "https://www.betonjayareadymix.com/2019/08/jasa-pondasi-tapak-bandung.html": "Jasa Pondasi Tapak Bandung",
  "https://www.betonjayareadymix.com/2019/08/jasa-pondasi-tapak-terdekat.html": "Jasa Pondasi Tapak Terdekat"
};

// ═════════════════════════════════════════════════════════════════════
// 📂 PARENT: jasa-pancang-spun-pile (Money-Page) 
// ➔ CHILD: Variant (Aplikasi, Spesifikasi, & Harga)
// ═════════════════════════════════════════════════════════════════════
const urlMappingJasaPancangSpunPileFromMoneyPageToVariant = {
  // Aplikasi (✅ Slug diselaraskan dengan MP "pancang")
  "https://www.betonjayareadymix.com/2019/08/jasa-pancang-spun-pile-gedung-bertingkat.html": "Jasa Pancang Spun Pile Gedung Bertingkat",
  "https://www.betonjayareadymix.com/2019/08/jasa-pancang-spun-pile-jembatan.html": "Jasa Pancang Spun Pile Jembatan",
  "https://www.betonjayareadymix.com/2019/08/jasa-pancang-spun-pile-gudang-pabrik.html": "Jasa Pancang Spun Pile Gudang Pabrik",
  
  // Spesifikasi (✅ SUDAH DIKOREKSI: tanpa prefix "spesifikasi-")
  "https://www.betonjayareadymix.com/2019/08/jasa-pancang-spun-pile-diameter-30cm.html": "Jasa Pancang Spun Pile Diameter 30cm",
  "https://www.betonjayareadymix.com/2019/08/jasa-pancang-spun-pile-diameter-40cm.html": "Jasa Pancang Spun Pile Diameter 40cm",
  "https://www.betonjayareadymix.com/2019/08/jasa-pancang-spun-pile-diameter-50cm.html": "Jasa Pancang Spun Pile Diameter 50cm",
  "https://www.betonjayareadymix.com/2019/08/jasa-pancang-spun-pile-diameter-60cm.html": "Jasa Pancang Spun Pile Diameter 60cm",

  // 💰 Variant Harga (Dipindahkan ke sini agar tidak membuat MP terpisah)
  "https://www.betonjayareadymix.com/2019/08/harga-jasa-pemancangan-spun-pile-per-titik.html": "Harga Jasa Pemancangan Spun Pile per Titik"
};

// ═════════════════════════════════════════════════════════════════════
// 📂 PARENT: jasa-pancang-mini-pile (Money-Page) 
// ➔ CHILD: Variant (Aplikasi, Spesifikasi, & Harga)
// ═════════════════════════════════════════════════════════════════════
const urlMappingJasaPancangMiniPileFromMoneyPageToVariant = {
  // Aplikasi (✅ Slug diselaraskan dengan MP "pancang")
  "https://www.betonjayareadymix.com/2019/08/jasa-pancang-mini-pile-rumah-2-lantai.html": "Jasa Pancang Mini Pile Rumah 2 Lantai",
  "https://www.betonjayareadymix.com/2019/08/jasa-pancang-mini-pile-rumah-3-lantai.html": "Jasa Pancang Mini Pile Rumah 3 Lantai",
  "https://www.betonjayareadymix.com/2019/08/jasa-pancang-mini-pile-renovasi-bangunan.html": "Jasa Pancang Mini Pile Renovasi Bangunan",
  
  // Spesifikasi (✅ SUDAH DIKOREKSI)
  "https://www.betonjayareadymix.com/2019/08/jasa-pancang-mini-pile-diameter-20cm.html": "Jasa Pancang Mini Pile Diameter 20cm",
  "https://www.betonjayareadymix.com/2019/08/jasa-pancang-mini-pile-diameter-25cm.html": "Jasa Pancang Mini Pile Diameter 25cm",
  "https://www.betonjayareadymix.com/2019/08/jasa-pancang-mini-pile-diameter-30cm.html": "Jasa Pancang Mini Pile Diameter 30cm",

  // 💰 Variant Harga
  "https://www.betonjayareadymix.com/2019/08/harga-jasa-pemancangan-mini-pile-per-titik.html": "Harga Jasa Pemancangan Mini Pile per Titik"
};


// ═════════════════════════════════════════════════════════════════════
// 📂 PARENT: jasa-pemancangan-tiang-pancang-baja (Money-Page) 
// ➔ CHILD: Variant (Material, Tipe, & Harga)
// ═════════════════════════════════════════════════════════════════════
const urlMappingJasaPemancanganTiangPancangBajaFromMoneyPageToVariant = {
  // Material
  "https://www.betonjayareadymix.com/2019/08/jasa-pemancangan-pipa-baja.html": "Jasa Pemancangan Pipa Baja",
  "https://www.betonjayareadymix.com/2019/08/jasa-pemancangan-h-beam.html": "Jasa Pemancangan H-Beam",
  
  // Tipe
  "https://www.betonjayareadymix.com/2019/08/jasa-pemancangan-tiang-pancang-baja-tipe-u.html": "Jasa Pemancangan Tiang Pancang Baja Tipe U",
  "https://www.betonjayareadymix.com/2019/08/jasa-pemancangan-tiang-pancang-baja-tipe-z.html": "Jasa Pemancangan Tiang Pancang Baja Tipe Z",

  // 💰 Variant Harga
  "https://www.betonjayareadymix.com/2019/08/harga-jasa-pemancangan-tiang-pancang-baja-per-meter.html": "Harga Jasa Pemancangan Tiang Pancang Baja per Meter"
};

// ═════════════════════════════════════════════════════════════════════
// 📂 PARENT: jasa-pemancangan-tiang-pancang-beton (Money-Page) 
// ➔ CHILD: Variant (Mutu & Dimensi)
// ═════════════════════════════════════════════════════════════════════
const urlMappingJasaPemancanganTiangPancangBetonFromMoneyPageToVariant = {
  // Mutu
  "https://www.betonjayareadymix.com/2019/08/jasa-pemancangan-tiang-pancang-beton-k-450.html": "Jasa Pemancangan Tiang Pancang Beton K-450",
  "https://www.betonjayareadymix.com/2019/08/jasa-pemancangan-tiang-pancang-beton-k-500.html": "Jasa Pemancangan Tiang Pancang Beton K-500",
  
  // Dimensi
  "https://www.betonjayareadymix.com/2019/08/jasa-pemancangan-tiang-pancang-beton-30cm.html": "Jasa Pemancangan Tiang Pancang Beton 30cm",
  "https://www.betonjayareadymix.com/2019/08/jasa-pemancangan-tiang-pancang-beton-40cm.html": "Jasa Pemancangan Tiang Pancang Beton 40cm"
};

// ═════════════════════════════════════════════════════════════════════
// 📂 PARENT: jasa-jacking-pile (Money-Page) 
// ➔ CHILD: Variant (Aplikasi Khusus)
// ═════════════════════════════════════════════════════════════════════
const urlMappingJasaJackingPileFromMoneyPageToVariant = {
  "https://www.betonjayareadymix.com/2019/08/jasa-jacking-pile-basement.html": "Jasa Jacking Pile Basement",
  "https://www.betonjayareadymix.com/2019/08/jasa-jacking-pile-dekat-bangunan-eksisting.html": "Jasa Jacking Pile Dekat Bangunan Eksisting"
};
/*
// ═════════════════════════════════════════════════════════════════════
// 📂 PARENT: jasa-pancang-drop-hammer (Money-Page) 
// ➔ CHILD: Variant (Opsional, isi jika ada)
// ═════════════════════════════════════════════════════════════════════
const urlMappingJasaPancangDropHammerFromMoneyPageToVariant = {
  // Contoh: "https://www.betonjayareadymix.com/2019/08/jasa-pancang-drop-hammer-spesifik.html": "..."
};

// ═════════════════════════════════════════════════════════════════════
// 📂 PARENT: jasa-pancang-hidrolik (Money-Page) 
// ➔ CHILD: Variant (Opsional, isi jika ada)
// ═════════════════════════════════════════════════════════════════════
const urlMappingJasaPancangHidrolikFromMoneyPageToVariant = {
  // Contoh: "https://www.betonjayareadymix.com/2019/08/jasa-pancang-hidrolik-spesifik.html": "..."
};
*/
const urlMappingJasaTiangPancangFromMoneyMasterMoneyChild = {
  //"https://www.betonjayareadymix.com/2019/08/jasa-tiang-pancang-terdekat.html": "Jasa Tiang Pancang Terdekat",
  "https://www.betonjayareadymix.com/2019/08/jasa-tiang-pancang-karawang.html": "Jasa Tiang Pancang Karawang",
  "https://www.betonjayareadymix.com/2019/08/jasa-tiang-pancang-bekasi.html": "Jasa Tiang Pancang Bekasi",
  "https://www.betonjayareadymix.com/2019/08/jasa-tiang-pancang-tangerang.html": "Jasa Tiang Pancang Tangerang",
  "https://www.betonjayareadymix.com/2019/08/jasa-tiang-pancang-depok.html": "Jasa Tiang Pancang Depok",
  "https://www.betonjayareadymix.com/2019/08/jasa-tiang-pancang-bogor.html": "Jasa Tiang Pancang Bogor",
  "https://www.betonjayareadymix.com/2019/08/jasa-tiang-pancang-jakarta.html": "Jasa Tiang Pancang Jakarta",
  "https://www.betonjayareadymix.com/2019/08/jasa-tiang-pancang-surabaya.html": "Jasa Tiang Pancang Surabaya"
};

//JASA SHEET PILE
// ═════════════════════════════════════════════════════════════════════
// 📂 PARENT: jasa-pemasangan-sheet-pile-baja (Money-Page) 
// ➔ CHILD: Variant (Aplikasi & Tipe)
// ═════════════════════════════════════════════════════════════════════
const urlMappingJasaPemasanganSheetPileBajaFromMoneyPageToVariant = {
  "https://www.betonjayareadymix.com/2019/08/jasa-pemasangan-sheet-pile-baja-pelabuhan.html": "Jasa Pemasangan Sheet Pile Baja Pelabuhan",
  "https://www.betonjayareadymix.com/2019/08/jasa-pemasangan-sheet-pile-baja-basement.html": "Jasa Pemasangan Sheet Pile Baja Basement",
  "https://www.betonjayareadymix.com/2019/08/jasa-pemasangan-sheet-pile-baja-tipe-u.html": "Jasa Pemasangan Sheet Pile Baja Tipe U",
  "https://www.betonjayareadymix.com/2019/08/jasa-pemasangan-sheet-pile-baja-tipe-z.html": "Jasa Pemasangan Sheet Pile Baja Tipe Z",
  "https://www.betonjayareadymix.com/2019/08/jasa-pemasangan-sheet-pile-baja-tipe-larsen.html": "Jasa Pemasangan Sheet Pile Baja Tipe Larsen"
};

// ═════════════════════════════════════════════════════════════════════
// 📂 PARENT: jasa-pemasangan-sheet-pile-beton (Money-Page) 
// ➔ CHILD: Variant (Aplikasi & Dimensi)
// ═════════════════════════════════════════════════════════════════════
const urlMappingJasaPemasanganSheetPileBetonFromMoneyPageToVariant = {
  "https://www.betonjayareadymix.com/2019/08/jasa-pemasangan-sheet-pile-beton-saluran-irigasi.html": "Jasa Pemasangan Sheet Pile Beton Saluran Irigasi",
  "https://www.betonjayareadymix.com/2019/08/jasa-pemasangan-sheet-pile-beton-dermaga.html": "Jasa Pemasangan Sheet Pile Beton Dermaga",
  "https://www.betonjayareadymix.com/2019/08/jasa-pemasangan-sheet-pile-beton-30cm.html": "Jasa Pemasangan Sheet Pile Beton 30cm",
  "https://www.betonjayareadymix.com/2019/08/jasa-pemasangan-sheet-pile-beton-40cm.html": "Jasa Pemasangan Sheet Pile Beton 40cm"
};

// ═════════════════════════════════════════════════════════════════════
// 📂 PARENT: jasa-pemasangan-sheet-pile-vinyl (Money-Page) 
// ➔ CHILD: Variant (Aplikasi & Grade)
// ═════════════════════════════════════════════════════════════════════
const urlMappingJasaPemasanganSheetPileVinylFromMoneyPageToVariant = {
  "https://www.betonjayareadymix.com/2019/08/jasa-pemasangan-sheet-pile-vinyl-kolam.html": "Jasa Pemasangan Sheet Pile Vinyl Kolam",
  "https://www.betonjayareadymix.com/2019/08/jasa-pemasangan-sheet-pile-vinyl-standar.html": "Jasa Pemasangan Sheet Pile Vinyl Standar",
  "https://www.betonjayareadymix.com/2019/08/jasa-pemasangan-sheet-pile-vinyl-heavy-duty.html": "Jasa Pemasangan Sheet Pile Vinyl Heavy Duty"
};

// ═════════════════════════════════════════════════════════════════════
// 📂 PARENT: jasa-turap-sheet-pile-basement (Money-Page) 
// ➔ CHILD: Variant (Jumlah Lantai)
// ═════════════════════════════════════════════════════════════════════
const urlMappingJasaTurapSheetPileBasementFromMoneyPageToVariant = {
  "https://www.betonjayareadymix.com/2019/08/jasa-turap-sheet-pile-basement-1-lantai.html": "Jasa Turap Sheet Pile Basement 1 Lantai",
  "https://www.betonjayareadymix.com/2019/08/jasa-turap-sheet-pile-basement-2-lantai.html": "Jasa Turap Sheet Pile Basement 2 Lantai"
};

// ═════════════════════════════════════════════════════════════════════
// 📂 PARENT: jasa-cofferdam-sheet-pile (Money-Page) 
// ➔ CHILD: Variant (Lokasi Air)
// ═════════════════════════════════════════════════════════════════════
const urlMappingJasaCofferdamSheetPileFromMoneyPageToVariant = {
  "https://www.betonjayareadymix.com/2019/08/jasa-cofferdam-sheet-pile-sungai.html": "Jasa Cofferdam Sheet Pile Sungai",
  "https://www.betonjayareadymix.com/2019/08/jasa-cofferdam-sheet-pile-pantai.html": "Jasa Cofferdam Sheet Pile Pantai"
};

// ═════════════════════════════════════════════════════════════════════
// 📂 PARENT: jasa-pencabutan-sheet-pile (Money-Page) 
// ➔ CHILD: Variant (Material)
// ═════════════════════════════════════════════════════════════════════
const urlMappingJasaPencabutanSheetPileFromMoneyPageToVariant = {
  "https://www.betonjayareadymix.com/2019/08/jasa-pencabutan-sheet-pile-baja.html": "Jasa Pencabutan Sheet Pile Baja"
};

// ═════════════════════════════════════════════════════════════════════
// 📂 PARENT: harga-jasa-pemasangan-sheet-pile (Money-Page / Pricing Hub)
// ➔ CHILD: Variant (Pricing per Satuan)
// ═════════════════════════════════════════════════════════════════════
const urlMappingHargaJasaPemasanganSheetPileFromMoneyPageToVariant = {
  "https://www.betonjayareadymix.com/2019/08/harga-jasa-pemasangan-sheet-pile-baja-per-m2.html": "Harga Jasa Pemasangan Sheet Pile Baja per m2",
  "https://www.betonjayareadymix.com/2019/08/harga-jasa-pemasangan-sheet-pile-beton-per-m2.html": "Harga Jasa Pemasangan Sheet Pile Beton per m2",
  "https://www.betonjayareadymix.com/2019/08/harga-jasa-pemasangan-sheet-pile-per-meter.html": "Harga Jasa Pemasangan Sheet Pile per Meter"
};
const urlMappingJasaSheetPileFromMoneyMasterToChild = {
  "https://www.betonjayareadymix.com/2019/08/jasa-sheet-pile-jakarta.html": "Jasa Sheet Pile Jakarta",
  "https://www.betonjayareadymix.com/2019/08/jasa-sheet-pile-bogor.html": "Jasa Sheet Pile Bogor",
  "https://www.betonjayareadymix.com/2019/08/jasa-sheet-pile-depok.html": "Jasa Sheet Pile Depok",
  "https://www.betonjayareadymix.com/2019/08/jasa-sheet-pile-tangerang.html": "Jasa Sheet Pile Tangerang",
  "https://www.betonjayareadymix.com/2019/08/jasa-sheet-pile-bekasi.html": "Jasa Sheet Pile Bekasi",
  "https://www.betonjayareadymix.com/2019/08/jasa-sheet-pile-karawang.html": "Jasa Sheet Pile Karawang",
  "https://www.betonjayareadymix.com/2019/08/jasa-sheet-pile-surabaya.html": "Jasa Sheet Pile Surabaya"
};

const urlMappingJasaPondasiTiangPancangFromMoneyPageMoneyChild = {
  // ✅ FIX: Hapus "Harga" dari label (URL-nya "jasa-...", bukan "harga-...")
  "https://www.betonjayareadymix.com/2019/08/jasa-pondasi-tiang-pancang-terdekat.html": "Jasa Pondasi Tiang Pancang Terdekat",
  "https://www.betonjayareadymix.com/2019/08/jasa-pondasi-tiang-pancang-karawang.html": "Jasa Pondasi Tiang Pancang Karawang",
  "https://www.betonjayareadymix.com/2019/08/jasa-pondasi-tiang-pancang-bekasi.html": "Jasa Pondasi Tiang Pancang Bekasi",
  "https://www.betonjayareadymix.com/2019/08/jasa-pondasi-tiang-pancang-tangerang.html": "Jasa Pondasi Tiang Pancang Tangerang",
  "https://www.betonjayareadymix.com/2019/08/jasa-pondasi-tiang-pancang-depok.html": "Jasa Pondasi Tiang Pancang Depok",
  "https://www.betonjayareadymix.com/2019/08/jasa-pondasi-tiang-pancang-bogor.html": "Jasa Pondasi Tiang Pancang Bogor",
  "https://www.betonjayareadymix.com/2019/08/jasa-pondasi-tiang-pancang-jakarta.html": "Jasa Pondasi Tiang Pancang Jakarta",
  "https://www.betonjayareadymix.com/2019/08/jasa-pondasi-tiang-pancang-surabaya.html": "Jasa Pondasi Tiang Pancang Surabaya"
};

const urlMappingJasaTiangPancangFromMoneyMasterSub2 = {
  //jadi sub2 informasi saja, Sub-Pillar 2 bukan karena posisinya di bawah siapa(LEVEL APA), JADI TETAP DI IDEAL NYA DIBAWAH JASA TIANG PANCANG MM
  //melainkan karena SIFAT KONTENNYA adalah Informasi (Edukasi), bukan Jualan (Transaksi, TAPI PRIBAOI SAYA INI COCOK NYA VARIANT FOKUS INFORMASI
  "https://www.betonjayareadymix.com/2019/08/spesifikasi-jasa-tiang-pancang.html": "Spesifikasi Jasa Tiang Pancang",
  "https://www.betonjayareadymix.com/2019/08/mutu-jasa-tiang-pancang.html": "Mutu Jasa Tiang Pancang",
  "https://www.betonjayareadymix.com/2019/08/metode-jasa-tiang-pancang.html": "Metode Jasa Tiang Pancang"
};

const urlMappingHargaJasaPondasiTiangPancangFromMoneyPageMoneyPage1 = {
  //"https://www.betonjayareadymix.com/2019/08/harga-jasa-pondasi-tiang-pancang-murah.html": "Harga Jasa Pondasi Tiang Pancang Murah",
  //"https://www.betonjayareadymix.com/2019/08/harga-jasa-pancang-drop-hammer.html": "Harga Jasa Pancang Drop Hammer",
  //"https://www.betonjayareadymix.com/2019/08/harga-jasa-pancang-spun-pile.html": "Harga Jasa Pancang Spun Pile",
  //"https://www.betonjayareadymix.com/2019/08/harga-jasa-pancang-mini-pile.html": "Harga Jasa Pancang Mini Pile",
  //"https://www.betonjayareadymix.com/2019/08/harga-jasa-pemasangan-mini-pile.html": "Harga Jasa Pemasangan Mini Pile",
  //"https://www.betonjayareadymix.com/2019/08/harga-jasa-pancang-hidrolik.html": "Harga Jasa Pancang Hidrolik",
 //"https://www.betonjayareadymix.com/2019/08/harga-jasa-pemasangan-tiang-pancang.html": "Harga Jasa Pemasangan Tiang Pancang"
};

const urlMappingHargaJasaPondasiTiangPancangFromMoneyPageMoneyChild = {
  "https://www.betonjayareadymix.com/2019/08/harga-jasa-pondasi-tiang-pancang-terdekat.html": "Harga Jasa Pondasi Tiang Pancang Terdekat",
  "https://www.betonjayareadymix.com/2019/08/harga-jasa-pondasi-tiang-pancang-karawang.html": "Harga Jasa Pondasi Tiang Pancang Karawang",
  "https://www.betonjayareadymix.com/2019/08/harga-jasa-pondasi-tiang-pancang-bekasi.html": "Harga Jasa Pondasi Tiang Pancang Bekasi",
  "https://www.betonjayareadymix.com/2019/08/harga-jasa-pondasi-tiang-pancang-tangerang.html": "Harga Jasa Pondasi Tiang Pancang Tangerang",
  "https://www.betonjayareadymix.com/2019/08/harga-jasa-pondasi-tiang-pancang-depok.html": "Harga Jasa Pondasi Tiang Pancang Depok",
  "https://www.betonjayareadymix.com/2019/08/harga-jasa-pondasi-tiang-pancang-bogor.html": "Harga Jasa Pondasi Tiang Pancang Bogor",
  "https://www.betonjayareadymix.com/2019/08/harga-jasa-pondasi-tiang-pancang-jakarta.html": "Harga Jasa Pondasi Tiang Pancang Jakarta",
  "https://www.betonjayareadymix.com/2019/08/harga-jasa-pondasi-tiang-pancang-surabaya.html": "Harga Jasa Pondasi Tiang Pancang Surabaya"
};

const urlMappingJasaPondasiSumuranFromMoneyMaster1MoneyChild = {
  "https://www.betonjayareadymix.com/2019/08/jasa-pondasi-sumuran-jakarta.html": "Jasa Pondasi Sumuran Jakarta",
  "https://www.betonjayareadymix.com/2019/08/jasa-pondasi-sumuran-bogor.html": "Jasa Pondasi Sumuran Bogor",
  "https://www.betonjayareadymix.com/2019/08/jasa-pondasi-sumuran-depok.html": "Jasa Pondasi Sumuran Depok",
  "https://www.betonjayareadymix.com/2019/08/jasa-pondasi-sumuran-tangerang.html": "Jasa Pondasi Sumuran Tangerang",
  "https://www.betonjayareadymix.com/2019/08/jasa-pondasi-sumuran-bekasi.html": "Jasa Pondasi Sumuran Bekasi",
  "https://www.betonjayareadymix.com/2019/08/jasa-pondasi-sumuran-karawang.html": "Jasa Pondasi Sumuran Karawang",
  "https://www.betonjayareadymix.com/2019/08/jasa-pondasi-sumuran-bandung.html": "Jasa Pondasi Sumuran Bandung",
  "https://www.betonjayareadymix.com/2019/08/jasa-pondasi-sumuran-terdekat.html": "Jasa Pondasi Sumuran Terdekat"
};

// ═══════════════════════════════════════════════════════════
// [BAGIAN 2] EARLY EXIT v2.0.0 — PENDEKATAN C
// ═══════════════════════════════════════════════════════════

(function() {
    'use strict';
    
    var cleanUrl = window.location.href.split(/[?#]/)[0];
    console.log('[jasa-pondasi-perkuatan-tanah-post] 🔍 Check URL: ' + cleanUrl);
    
    // Kumpulkan SEMUA mapping ke array
    var ALL_MAPPINGS = [
        urlMappingJasaPondasiFromMoneyMasterMoneyChild,
        urlMappingJasaBoronganPondasiFromMoneyPageMoneyChild,
        urlMappingJasaPondasiCakarAyamFromMoneyPageMoneyChild,
        urlMappingJasaPondasiTapakFromMoneyPageMoneyChild,
        urlMappingJasaTiangPancangFromMoneyMasterSub2,
        urlMappingHargaJasaPondasiTiangPancangFromMoneyPageMoneyPage1,
        urlMappingHargaJasaPondasiTiangPancangFromMoneyPageMoneyChild,

        urlMappingJasaPancangSpunPileFromMoneyPageToVariant,
        urlMappingJasaPancangMiniPileFromMoneyPageToVariant,
        urlMappingJasaPemancanganTiangPancangBajaFromMoneyPageToVariant,
        urlMappingJasaPemancanganTiangPancangBetonFromMoneyPageToVariant,
        urlMappingJasaJackingPileFromMoneyPageToVariant,
        urlMappingJasaTiangPancangFromMoneyMasterMoneyChild,

        urlMappingJasaPemasanganSheetPileBajaFromMoneyPageToVariant,
        urlMappingJasaPemasanganSheetPileBetonFromMoneyPageToVariant,
        urlMappingJasaPemasanganSheetPileVinylFromMoneyPageToVariant,
        urlMappingJasaTurapSheetPileBasementFromMoneyPageToVariant,
        urlMappingJasaCofferdamSheetPileFromMoneyPageToVariant,
        urlMappingJasaPencabutanSheetPileFromMoneyPageToVariant,
        urlMappingHargaJasaPemasanganSheetPileFromMoneyPageToVariant,
        urlMappingJasaSheetPileFromMoneyMasterToChild,
      
        urlMappingJasaPondasiTiangPancangFromMoneyPageMoneyChild,
        urlMappingJasaPondasiSumuranFromMoneyMaster1MoneyChild
    ];
    
    // ✅ PENDEKATAN C: Loop + foundIndex + foundMappingName + break
    var foundIndex = -1;
    var foundMappingName = '';
    
    for (var i = 0; i < ALL_MAPPINGS.length; i++) {
        if (!ALL_MAPPINGS[i] || typeof ALL_MAPPINGS[i] !== 'object') {
            console.warn('[jasa-pondasi-perkuatan-tanah-post] ⚠️ Mapping #' + (i + 1) + ' bukan object — skip');
            continue;
        }
        if (ALL_MAPPINGS[i][cleanUrl]) {
            foundIndex = i;
            foundMappingName = ALL_MAPPINGS[i][cleanUrl];
            break;
        }
    }
    
    if (foundIndex === -1) {
        console.log('[jasa-pondasi-perkuatan-tanah-post] ⏭️ SKIP — URL tidak cocok di semua cluster');
        window.__jasaPondasiPerkuatanTanahPostActive = false;
        return;
    }
    
    // ✅ Cocok — set flag + simpan info untuk debug
    window.__jasaPondasiPerkuatanTanahPostActive = true;
    window.__jasaPondasiPerkuatanTanahPostMatchIndex = foundIndex;
    window.__jasaPondasiPerkuatanTanahPostMatchMappingName = foundMappingName;
    window.__jasaPondasiPerkuatanTanahPostMappings = ALL_MAPPINGS;
    
    console.log(
        '[jasa-pondasi-perkuatan-tanah-post] ✅ Match di mapping #' + (foundIndex + 1) +
        ' — Label: "' + foundMappingName + '"' +
        ' — EXECUTE flag set'
    );
})();

// ═══════════════════════════════════════════════════════════
// [BAGIAN 3] FUNGSI UTAMA
// ═══════════════════════════════════════════════════════════

function initJasaPondasiPerkuatanTanah() {
    // ⚡ Guard flag
    if (!window.__jasaPondasiPerkuatanTanahPostActive) {
        console.log('[jasa-pondasi-perkuatan-tanah-post] ⏭️ Execute SKIP — URL tidak cocok');
        return;
    }
    
    console.log('[jasa-pondasi-perkuatan-tanah-post] 🚀 Execute — URL cocok');
    
    var cleanUrlJasaPondasiPerkuatanTanahKonsPost = window.location.href.split(/[?#]/)[0];
    
    // ✅ Guard elemen DOM
    var JasaKonsPondasiTanahPost = document.getElementById("JasaKonsPondasiTanahPost");
    if (!JasaKonsPondasiTanahPost) {
        console.error("[jasa-pondasi-perkuatan-tanah-post] ❌ elemen Id JasaKonsPondasiTanahPost kondisi terhapus");
        return;
    }
    
    // ═══════════════════════════════════════════════════════
    // [BLOK 1] JASA PONDASI
    // ═══════════════════════════════════════════════════════
    if (urlMappingJasaPondasiFromMoneyMasterMoneyChild[cleanUrlJasaPondasiPerkuatanTanahKonsPost]) {
        generateBreadcrumbShared(
            urlMappingJasaPondasiFromMoneyMasterMoneyChild,
            cleanUrlJasaPondasiPerkuatanTanahKonsPost,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Pondasi', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-pondasi.html' },
                { name: 'Perbandingan Jasa Pondasi', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-pondasi.html' },
                { name: 'Jasa Pondasi', url: 'https://www.betonjayareadymix.com/p/jasa-pondasi.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }
    
    if (urlMappingJasaBoronganPondasiFromMoneyPageMoneyChild[cleanUrlJasaPondasiPerkuatanTanahKonsPost]) {
        generateBreadcrumbShared(
            urlMappingJasaBoronganPondasiFromMoneyPageMoneyChild,
            cleanUrlJasaPondasiPerkuatanTanahKonsPost,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Pondasi', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-pondasi.html' },
                { name: 'Perbandingan Jasa Pondasi & Perkuatan Tanah', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-pondasi.html' },
                { name: 'Jasa Borongan Pondasi', url: 'https://www.betonjayareadymix.com/p/jasa-borongan-pondasi.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }
    
    // ═══════════════════════════════════════════════════════
    // [BLOK 2] JASA PONDASI CAKAR AYAM
    // ═══════════════════════════════════════════════════════
    
    if (urlMappingJasaPondasiCakarAyamFromMoneyPageMoneyChild[cleanUrlJasaPondasiPerkuatanTanahKonsPost]) {
        generateBreadcrumbShared(
            urlMappingJasaPondasiCakarAyamFromMoneyPageMoneyChild,
            cleanUrlJasaPondasiPerkuatanTanahKonsPost,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Pondasi', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-pondasi.html' },
                { name: 'Perbandingan Jasa Pondasi', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-pondasi.html' },,
                { name: 'Jasa Pondasi', url: 'https://www.betonjayareadymix.com/p/jasa-pondasi.html' },
                { name: 'Jasa Pondasi Cakar Ayam', url: 'https://www.betonjayareadymix.com/p/jasa-pondasi-cakar-ayam.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }
    
    // ═══════════════════════════════════════════════════════
    // [BLOK 3] JASA PONDASI TAPAK
    // ═══════════════════════════════════════════════════════
    
    if (urlMappingJasaPondasiTapakFromMoneyPageMoneyChild[cleanUrlJasaPondasiPerkuatanTanahKonsPost]) {
        generateBreadcrumbShared(
            urlMappingJasaPondasiTapakFromMoneyPageMoneyChild,
            cleanUrlJasaPondasiPerkuatanTanahKonsPost,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Pondasi', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-pondasi.html' },
                { name: 'Perbandingan Jasa Pondasi', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-pondasi.html' },,
                { name: 'Jasa Pondasi', url: 'https://www.betonjayareadymix.com/p/jasa-pondasi.html' },
                { name: 'Jasa Pondasi Tapak', url: 'https://www.betonjayareadymix.com/p/jasa-pondasi-tapak.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }
    
    // ═══════════════════════════════════════════════════════
    // [BLOK 4] JASA TIANG PANCANG (Variant)
    // ═══════════════════════════════════════════════════════
    
    if (urlMappingJasaTiangPancangFromMoneyMasterSub2[cleanUrlJasaPondasiPerkuatanTanahKonsPost]) {
        generateBreadcrumbShared(
            urlMappingJasaTiangPancangFromMoneyMasterSub2,
            cleanUrlJasaPondasiPerkuatanTanahKonsPost,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Pondasi', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-pondasi.html' },
                { name: 'Perbandingan Jasa Pondasi', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-pondasi.html' },
              //  { name: 'Jasa Pondasi', url: 'https://www.betonjayareadymix.com/p/jasa-pondasi.html' },
                { name: 'Jasa Tiang Pancang', url: 'https://www.betonjayareadymix.com/p/jasa-tiang-pancang.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }
    
    // ═══════════════════════════════════════════════════════
    // [BLOK 5] HARGA JASA PONDASI TIANG PANCANG (Money Page)
    // ═══════════════════════════════════════════════════════
    
    if (urlMappingHargaJasaPondasiTiangPancangFromMoneyPageMoneyPage1[cleanUrlJasaPondasiPerkuatanTanahKonsPost]) {
        generateBreadcrumbShared(
            urlMappingHargaJasaPondasiTiangPancangFromMoneyPageMoneyPage1,
            cleanUrlJasaPondasiPerkuatanTanahKonsPost,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Pondasi', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-pondasi.html' },
                { name: 'Perbandingan Jasa Pondasi', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-pondasi.html' },
               // { name: 'Jasa Pondasi', url: 'https://www.betonjayareadymix.com/p/jasa-pondasi.html' },
                { name: 'Jasa Tiang Pancang', url: 'https://www.betonjayareadymix.com/p/jasa-tiang-pancang.html' },
                { name: 'Jasa Pondasi Tiang Pancang', url: 'https://www.betonjayareadymix.com/p/jasa-pondasi-tiang-pancang.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }
    
    // ═══════════════════════════════════════════════════════
    // [BLOK 6] HARGA JASA PONDASI TIANG PANCANG (Money Child)
    // ═══════════════════════════════════════════════════════
    
    if (urlMappingHargaJasaPondasiTiangPancangFromMoneyPageMoneyChild[cleanUrlJasaPondasiPerkuatanTanahKonsPost]) {
        generateBreadcrumbShared(
            urlMappingHargaJasaPondasiTiangPancangFromMoneyPageMoneyChild,
            cleanUrlJasaPondasiPerkuatanTanahKonsPost,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Pondasi', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-pondasi.html' },
                { name: 'Perbandingan Jasa Pondasi', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-pondasi.html' },
                //{ name: 'Jasa Pondasi', url: 'https://www.betonjayareadymix.com/p/jasa-pondasi.html' },
                { name: 'Jasa Tiang Pancang', url: 'https://www.betonjayareadymix.com/p/jasa-tiang-pancang.html' },
                { name: 'Jasa Pondasi Tiang Pancang', url: 'https://www.betonjayareadymix.com/p/jasa-pondasi-tiang-pancang.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }

  if (urlMappingJasaPancangSpunPileFromMoneyPageToVariant[cleanUrlJasaPondasiPerkuatanTanahKonsPost]) {
        generateBreadcrumbShared(
            urlMappingJasaPancangSpunPileFromMoneyPageToVariant,
            cleanUrlJasaPondasiPerkuatanTanahKonsPost,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Pondasi', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-pondasi.html' },
                { name: 'Perbandingan Jasa Pondasi', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-pondasi.html' },
                { name: 'Jasa Tiang Pancang', url: 'https://www.betonjayareadymix.com/p/jasa-tiang-pancang.html' },
                { name: 'Jasa Pancang Spun Pile', url: 'https://www.betonjayareadymix.com/p/jasa-pancang-spun-pile.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }
  if (urlMappingJasaPancangMiniPileFromMoneyPageToVariant[cleanUrlJasaPondasiPerkuatanTanahKonsPost]) {
        generateBreadcrumbShared(
            urlMappingJasaPancangMiniPileFromMoneyPageToVariant,
            cleanUrlJasaPondasiPerkuatanTanahKonsPost,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Pondasi', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-pondasi.html' },
                { name: 'Perbandingan Jasa Pondasi', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-pondasi.html' },
                { name: 'Jasa Tiang Pancang', url: 'https://www.betonjayareadymix.com/p/jasa-tiang-pancang.html' },
                { name: 'Jasa Pancang Mini Pile', url: 'https://www.betonjayareadymix.com/p/jasa-pancang-mini-pile.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }
  if (urlMappingJasaPemancanganTiangPancangBajaFromMoneyPageToVariant[cleanUrlJasaPondasiPerkuatanTanahKonsPost]) {
        generateBreadcrumbShared(
            urlMappingJasaPemancanganTiangPancangBajaFromMoneyPageToVariant,
            cleanUrlJasaPondasiPerkuatanTanahKonsPost,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Pondasi', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-pondasi.html' },
                { name: 'Perbandingan Jasa Pondasi', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-pondasi.html' },
                { name: 'Jasa Tiang Pancang', url: 'https://www.betonjayareadymix.com/p/jasa-tiang-pancang.html' },
                { name: 'Jasa Pemancangan Tiang Pancang Baja', url: 'https://www.betonjayareadymix.com/p/jasa-pemancangan-tiang-pancang-baja.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }
  if (urlMappingJasaPemancanganTiangPancangBetonFromMoneyPageToVariant[cleanUrlJasaPondasiPerkuatanTanahKonsPost]) {
        generateBreadcrumbShared(
            urlMappingJasaPemancanganTiangPancangBetonFromMoneyPageToVariant,
            cleanUrlJasaPondasiPerkuatanTanahKonsPost,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Pondasi', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-pondasi.html' },
                { name: 'Perbandingan Jasa Pondasi', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-pondasi.html' },
                { name: 'Jasa Tiang Pancang', url: 'https://www.betonjayareadymix.com/p/jasa-tiang-pancang.html' },
                { name: 'Jasa Pemancangan Tiang Pancang Beton', url: 'https://www.betonjayareadymix.com/p/jasa-pemancangan-tiang-pancang-beton.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }

  if (urlMappingJasaJackingPileFromMoneyPageToVariant[cleanUrlJasaPondasiPerkuatanTanahKonsPost]) {
        generateBreadcrumbShared(
            urlMappingJasaJackingPileFromMoneyPageToVariant,
            cleanUrlJasaPondasiPerkuatanTanahKonsPost,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Pondasi', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-pondasi.html' },
                { name: 'Perbandingan Jasa Pondasi', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-pondasi.html' },
                { name: 'Jasa Tiang Pancang', url: 'https://www.betonjayareadymix.com/p/jasa-tiang-pancang.html' },
                { name: 'Jasa Jacking Pile', url: 'https://www.betonjayareadymix.com/p/jasa-jacking-pile.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }
    // ═══════════════════════════════════════════════════════
    // [BLOK 7] JASA PONDASI TIANG PANCANG (Money Child)
    // ═══════════════════════════════════════════════════════
    if (urlMappingJasaTiangPancangFromMoneyMasterMoneyChild[cleanUrlJasaPondasiPerkuatanTanahKonsPost]) {
        generateBreadcrumbShared(
            urlMappingJasaTiangPancangFromMoneyMasterMoneyChild,
            cleanUrlJasaPondasiPerkuatanTanahKonsPost,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Pondasi', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-pondasi.html' },
                { name: 'Perbandingan Jasa Pondasi', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-pondasi.html' },
               // { name: 'Jasa Pondasi', url: 'https://www.betonjayareadymix.com/p/jasa-pondasi.html' },
                { name: 'Jasa Tiang Pancang', url: 'https://www.betonjayareadymix.com/p/jasa-tiang-pancang.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }

//SHEET PILE
  if (urlMappingJasaPemasanganSheetPileBajaFromMoneyPageToVariant[cleanUrlJasaPondasiPerkuatanTanahKonsPost]) {
        generateBreadcrumbShared(
            urlMappingJasaPemasanganSheetPileBajaFromMoneyPageToVariant,
            cleanUrlJasaPondasiPerkuatanTanahKonsPost,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Pondasi', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-pondasi.html' },
                { name: 'Perbandingan Jasa Pondasi', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-pondasi.html' },
                { name: 'Jasa Sheet Pile', url: 'https://www.betonjayareadymix.com/p/jasa-sheet-pile.html' },
                { name: 'Jasa Pemasangan Sheet Pile Baja', url: 'https://www.betonjayareadymix.com/p/jasa-pemasangan-sheet-pile-baja.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }
    if (urlMappingJasaPemasanganSheetPileBetonFromMoneyPageToVariant[cleanUrlJasaPondasiPerkuatanTanahKonsPost]) {
        generateBreadcrumbShared(
            urlMappingJasaPemasanganSheetPileBetonFromMoneyPageToVariant,
            cleanUrlJasaPondasiPerkuatanTanahKonsPost,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Pondasi', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-pondasi.html' },
                { name: 'Perbandingan Jasa Pondasi', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-pondasi.html' },
                { name: 'Jasa Sheet Pile', url: 'https://www.betonjayareadymix.com/p/jasa-sheet-pile.html' },
                { name: 'Jasa Pemasangan Sheet Pile Beton', url: 'https://www.betonjayareadymix.com/p/jasa-pemasangan-sheet-pile-beton.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }
   if (urlMappingJasaPemasanganSheetPileVinylFromMoneyPageToVariant[cleanUrlJasaPondasiPerkuatanTanahKonsPost]) {
        generateBreadcrumbShared(
            urlMappingJasaPemasanganSheetPileVinylFromMoneyPageToVariant,
            cleanUrlJasaPondasiPerkuatanTanahKonsPost,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Pondasi', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-pondasi.html' },
                { name: 'Perbandingan Jasa Pondasi', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-pondasi.html' },
                { name: 'Jasa Sheet Pile', url: 'https://www.betonjayareadymix.com/p/jasa-sheet-pile.html' },
                { name: 'Jasa Pemasangan Sheet Pile Vinyl', url: 'https://www.betonjayareadymix.com/p/jasa-pemasangan-sheet-pile-vinyl.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }
    if (urlMappingJasaTurapSheetPileBasementFromMoneyPageToVariant[cleanUrlJasaPondasiPerkuatanTanahKonsPost]) {
        generateBreadcrumbShared(
            urlMappingJasaTurapSheetPileBasementFromMoneyPageToVariant,
            cleanUrlJasaPondasiPerkuatanTanahKonsPost,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Pondasi', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-pondasi.html' },
                { name: 'Perbandingan Jasa Pondasi', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-pondasi.html' },
                { name: 'Jasa Sheet Pile', url: 'https://www.betonjayareadymix.com/p/jasa-sheet-pile.html' },
                { name: 'Jasa Turap Sheet Pile Basement', url: 'https://www.betonjayareadymix.com/p/jasa-turap-sheet-pile-basement.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }
    if (urlMappingJasaCofferdamSheetPileFromMoneyPageToVariant[cleanUrlJasaPondasiPerkuatanTanahKonsPost]) {
        generateBreadcrumbShared(
            urlMappingJasaCofferdamSheetPileFromMoneyPageToVariant,
            cleanUrlJasaPondasiPerkuatanTanahKonsPost,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Pondasi', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-pondasi.html' },
                { name: 'Perbandingan Jasa Pondasi', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-pondasi.html' },
                { name: 'Jasa Sheet Pile', url: 'https://www.betonjayareadymix.com/p/jasa-sheet-pile.html' },
                { name: 'Jasa Cofferdam Sheet Pile', url: 'https://www.betonjayareadymix.com/p/jasa-cofferdam-sheet-pile.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }
    if (urlMappingJasaPencabutanSheetPileFromMoneyPageToVariant[cleanUrlJasaPondasiPerkuatanTanahKonsPost]) {
        generateBreadcrumbShared(
            urlMappingJasaPencabutanSheetPileFromMoneyPageToVariant,
            cleanUrlJasaPondasiPerkuatanTanahKonsPost,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Pondasi', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-pondasi.html' },
                { name: 'Perbandingan Jasa Pondasi', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-pondasi.html' },
                { name: 'Jasa Sheet Pile', url: 'https://www.betonjayareadymix.com/p/jasa-sheet-pile.html' },
                { name: 'Jasa Pencabutan Sheet Pile', url: 'https://www.betonjayareadymix.com/p/jasa-pencabutan-sheet-pile.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }
   if (urlMappingHargaJasaPemasanganSheetPileFromMoneyPageToVariant[cleanUrlJasaPondasiPerkuatanTanahKonsPost]) {
        generateBreadcrumbShared(
            urlMappingHargaJasaPemasanganSheetPileFromMoneyPageToVariant,
            cleanUrlJasaPondasiPerkuatanTanahKonsPost,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Pondasi', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-pondasi.html' },
                { name: 'Perbandingan Jasa Pondasi', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-pondasi.html' },
                { name: 'Jasa Sheet Pile', url: 'https://www.betonjayareadymix.com/p/jasa-sheet-pile.html' },
                { name: 'Harga Jasa Pemasangan Sheet Pile', url: 'https://www.betonjayareadymix.com/p/harga-jasa-pemasangan-sheet-pile.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }
   if (urlMappingJasaSheetPileFromMoneyMasterToChild[cleanUrlJasaPondasiPerkuatanTanahKonsPost]) {
        generateBreadcrumbShared(
            urlMappingJasaSheetPileFromMoneyMasterToChild,
            cleanUrlJasaPondasiPerkuatanTanahKonsPost,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Pondasi', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-pondasi.html' },
                { name: 'Perbandingan Jasa Pondasi', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-pondasi.html' },
                { name: 'Jasa Sheet Pile', url: 'https://www.betonjayareadymix.com/p/jasa-sheet-pile.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }
     
    if (urlMappingJasaPondasiTiangPancangFromMoneyPageMoneyChild[cleanUrlJasaPondasiPerkuatanTanahKonsPost]) {
        generateBreadcrumbShared(
            urlMappingJasaPondasiTiangPancangFromMoneyPageMoneyChild,
            cleanUrlJasaPondasiPerkuatanTanahKonsPost,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Pondasi', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-pondasi.html' },
                { name: 'Perbandingan Jasa Pondasi', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-pondasi.html' },
               // { name: 'Jasa Pondasi', url: 'https://www.betonjayareadymix.com/p/jasa-pondasi.html' },
                { name: 'Jasa Tiang Pancang', url: 'https://www.betonjayareadymix.com/p/jasa-tiang-pancang.html' },
                { name: 'Jasa Pondasi Tiang Pancang', url: 'https://www.betonjayareadymix.com/p/jasa-pondasi-tiang-pancang.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }
    
    // ═══════════════════════════════════════════════════════
    // [BLOK 8] JASA PONDASI SUMURAN
    // ═══════════════════════════════════════════════════════
    
    if (urlMappingJasaPondasiSumuranFromMoneyMaster1MoneyChild[cleanUrlJasaPondasiPerkuatanTanahKonsPost]) {
        generateBreadcrumbShared(
            urlMappingJasaPondasiSumuranFromMoneyMaster1MoneyChild,
            cleanUrlJasaPondasiPerkuatanTanahKonsPost,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Pondasi', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-pondasi.html' },
                { name: 'Perbandingan Jasa Pondasi', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-pondasi.html' },
                { name: 'Jasa Pondasi', url: 'https://www.betonjayareadymix.com/p/jasa-pondasi.html' },
                { name: 'Jasa Pondasi Sumuran', url: 'https://www.betonjayareadymix.com/p/jasa-pondasi-sumuran.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }
    
    console.log('[jasa-pondasi-perkuatan-tanah-post] ✅ Semua breadcrumb selesai diproses');
}

// ═══════════════════════════════════════════════════════════
// [BAGIAN 4] FIX v2.1.0 — Handle DOMContentLoaded race condition
// ═══════════════════════════════════════════════════════════

if (document.readyState === 'loading') {
    console.log('[jasa-pondasi-perkuatan-tanah-post] ⏳ DOM loading, tunggu event');
    document.addEventListener('DOMContentLoaded', initJasaPondasiPerkuatanTanah);
} else {
    console.log('[jasa-pondasi-perkuatan-tanah-post] ⚡ DOM ready, langsung execute');
    initJasaPondasiPerkuatanTanah();
}

// ============================================================
// AKHIR FILE — TIDAK ADA KARAKTER TAMBAHAN
// ============================================================
