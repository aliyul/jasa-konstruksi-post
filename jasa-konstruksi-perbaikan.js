// ============================================================
// JASA PERBAIKAN KONSTRUKSI — POST
// v2.2.0 — Early Exit v2.0.0 + Fix v2.1.0 + Pendekatan C
// ============================================================

console.log('[jasa-perbaikan-kons] 📄 File loaded, waiting for DOM...');

// ═══════════════════════════════════════════════════════════
// [BAGIAN 1] DEFINISI SEMUA MAPPING
// ═══════════════════════════════════════════════════════════

// ============================================================
// JASA PERBAIKAN STRUKTUR (SUB2) - LENGKAP
// ============================================================
// 🧠 SEO NOTE: Semua halaman di bawah Jasa Perbaikan Struktur
// Parent: Jasa Perawatan & Perbaikan Bangunan (/p/jasa-perawatan-perbaikan-bangunan.html)
// ============================================================

const urlMappingPerbaikanStrukturBangunanFromMoneyPageMoneyPage1 = {
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-struktur-rumah.html": "Jasa Perbaikan Struktur Rumah",
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-struktur-bangunan-tua.html": "Jasa Perbaikan Struktur Bangunan Tua",
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-gedung-bertingkat.html": "Jasa Perbaikan Gedung Bertingkat",
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-struktur-bangunan-miring.html": "Jasa Perbaikan Struktur Bangunan Miring",
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-struktur-beton.html": "Jasa Perbaikan Struktur Beton",
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-struktur-kolom-balok.html": "Jasa Perbaikan Struktur Kolom Balok Beton",
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-pondasi-struktur.html": "Jasa Perbaikan Pondasi Struktur",
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-lantai-struktur.html": "Jasa Perbaikan Lantai Struktur",
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-struktur-dinding.html": "Jasa Perbaikan Struktur Dinding",
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-struktur-atap.html": "Jasa Perbaikan Struktur Atap",
  "https://www.betonjayareadymix.com/p/jasa-rehabilitasi-beton-struktur.html": "Jasa Rehabilitasi Beton Struktur"
};


const urlMappingPerbaikanLantaiBangunanFromMoneyPageMoneyPage1 = {
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-lantai-rusak.html": "Jasa Perbaikan Lantai Rusak",
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-lantai-ambles.html": "Jasa Perbaikan Lantai Ambles",
  "https://www.betonjayareadymix.com/p/jasa-ganti-lantai-ambles.html": "Jasa Ganti Lantai Ambles"
};

// ============================================================
// JASA PERBAIKAN GEDUNG BERTINGKAT
// Parent: Jasa Perbaikan Struktur
// ============================================================

const urlMappingPerbaikanStrukturGedungBertingkatFromMoneyPage1MoneyPage2 = {
  "https://www.betonjayareadymix.com/p/jasa-perkuatan-gedung-bertingkat.html": "Jasa Perkuatan Gedung Bertingkat",
  "https://www.betonjayareadymix.com/p/harga-perbaikan-gedung-bertingkat.html": "Harga Perbaikan Gedung Bertingkat"
};

// ============================================================
// JASA PERBAIKAN STRUKTUR BANGUNAN TUA
// Parent: Jasa Perbaikan Struktur
// ============================================================

const urlMappingPerbaikanStrukturBangunanTuaFromMoneyPage1MoneyPage2 = {
  "https://www.betonjayareadymix.com/p/jasa-restorasi-bangunan-tua.html": "Jasa Restorasi Bangunan Tua",
  "https://www.betonjayareadymix.com/p/harga-perbaikan-bangunan-tua.html": "Harga Perbaikan Bangunan Tua"
};

// ============================================================
// JASA PERBAIKAN STRUKTUR BANGUNAN MIRING
// Parent: Jasa Perbaikan Struktur
// ============================================================

const urlMappingPerbaikanStrukturBangunanMiringFromMoneyPage1MoneyPage2 = {
  "https://www.betonjayareadymix.com/p/jasa-straightening-bangunan-miring.html": "Jasa Straightening Bangunan Miring",
  "https://www.betonjayareadymix.com/p/harga-perbaikan-bangunan-miring.html": "Harga Perbaikan Bangunan Miring"
};

// ============================================================
// JASA PERBAIKAN KOLOM & BALOK
// Parent: Jasa Perbaikan Struktur Beton
// ============================================================

const urlMappingPerbaikanStrukturKolomBalokFromMoneyPage1MoneyPage2 = {
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-struktur-kolom-beton.html": "Jasa Perbaikan Struktur Kolom Beton",
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-struktur-balok-beton.html": "Jasa Perbaikan Struktur Balok Beton",
  "https://www.betonjayareadymix.com/p/jasa-perkuatan-kolom-beton.html": "Jasa Perkuatan Kolom Beton",
  "https://www.betonjayareadymix.com/p/jasa-perkuatan-balok-beton.html": "Jasa Perkuatan Balok Beton",
  "https://www.betonjayareadymix.com/p/jasa-jacketing-kolom-balok.html": "Jasa Jacketing Kolom Balok",
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-balok-gantung.html": "Jasa Perbaikan Balok Gantung",
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-struktur-tiang-beton.html": "Jasa Perbaikan Struktur Tiang Beton"
};

// ============================================================
// JASA PERBAIKAN STRUKTUR PONDASI
// Parent: Jasa Perbaikan Struktur
// ============================================================

const urlMappingPerbaikanPondasiStrukturFromMoneyPage1MoneyPage2 = {
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-pondasi-bangunan.html": "Jasa Perbaikan Pondasi Bangunan",
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-pondasi-rumah.html": "Jasa Perbaikan Pondasi Rumah",
  "https://www.betonjayareadymix.com/p/jasa-penguatan-pondasi-bangunan.html": "Jasa Penguatan Pondasi Bangunan"
};

// ============================================================
// JASA PERBAIKAN STRUKTUR LANTAI
// Parent: Jasa Perbaikan Struktur
// ============================================================

const urlMappingPerbaikanStrukturLantaiFromMoneyPage1MoneyPage2 = {
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-struktur-lantai-beton.html": "Jasa Perbaikan Struktur Lantai Beton",
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-retakan-lantai-beton.html": "Jasa Perbaikan Retakan Lantai Beton",
  "https://www.betonjayareadymix.com/p/jasa-perkuatan-lantai-beton.html": "Jasa Perkuatan Lantai Beton"
};

// ============================================================
// JASA PERBAIKAN STRUKTUR DINDING
// Parent: Jasa Perbaikan Struktur
// ============================================================

const urlMappingPerbaikanStrukturDindingFromMoneyPage1MoneyPage2 = {
  "https://www.betonjayareadymix.com/p/jasa-injeksi-dinding-retak.html": "Jasa Injeksi Dinding Retak",
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-dinding-retak-struktur.html": "Jasa Perbaikan Dinding Retak Struktur",
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-struktur-dinding-retak.html": "Jasa Perbaikan Struktur Dinding Retak",
  "https://www.betonjayareadymix.com/p/jasa-bobok-dinding-instalasi.html": "Jasa Bobok Dinding Instalasi",
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-struktur-dinding-lembab.html": "Jasa Perbaikan Struktur Dinding Lembab",
  "https://www.betonjayareadymix.com/p/jasa-penggantian-dinding-bata.html": "Jasa Penggantian Dinding Bata"
};

// ============================================================
// JASA REHABILITASI BETON
// Parent: Jasa Perbaikan Struktur
// ============================================================

const urlMappingRehabilitasiBetonStrukturFromMoneyPage1MoneyPage2 = {
  "https://www.betonjayareadymix.com/p/jasa-perkuatan-struktur-cfrp.html": "Jasa Perkuatan Struktur CFRP",
  "https://www.betonjayareadymix.com/p/jasa-pelapisan-anti-korosi-beton.html": "Jasa Pelapisan Anti Korosi Beton",
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-sambungan-beton.html": "Jasa Perbaikan Sambungan Beton",
  "https://www.betonjayareadymix.com/p/jasa-waterproofing-beton.html": "Jasa Waterproofing Beton",
  "https://www.betonjayareadymix.com/p/jasa-patching-beton-retak.html": "Jasa Patching Beton Retak",
  "https://www.betonjayareadymix.com/p/jasa-injeksi-beton-retak.html": "Jasa Injeksi Beton Retak",
  "https://www.betonjayareadymix.com/p/jasa-aplikasi-shotcrete-beton.html": "Jasa Aplikasi Shotcrete Beton",
  "https://www.betonjayareadymix.com/p/jasa-grouting-struktur-beton.html": "Jasa Grouting Struktur Beton",
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-beton-mengelupas.html": "Jasa Perbaikan Beton Mengelupas",
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-beton-keropos.html": "Jasa Perbaikan Beton Keropos",
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-beton-retak.html": "Jasa Perbaikan Beton Retak",
  "https://www.betonjayareadymix.com/p/jasa-chipping-beton-bobok.html": "Jasa Chipping Beton Bobok",
  "https://www.betonjayareadymix.com/p/jasa-bobok-beton-chipping.html": "Jasa Bobok Beton Chipping",
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-beton-karbonasi.html": "Jasa Perbaikan Beton Karbonasi"
};

// ============================================================
// JASA PERBAIKAN STRUKTUR ATAP
// Parent: Jasa Perbaikan Struktur
// ============================================================

const urlMappingPerbaikanStrukturAtapFromMoneyPage1MoneyPage2 = {
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-stuktur-rangka-atap.html": "Jasa Perbaikan Struktur Rangka Atap",
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-struktur-atap-gudang.html": "Jasa Perbaikan Struktur Atap Gudang",
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-rangka-atap-baja-ringan.html": "Jasa Perbaikan Rangka Atap Baja Ringan"
};

// ============================================================
// JASA PERBAIKAN KEBOCORAN & WATERPROOFING (SUB2)
// Parent: Jasa Perawatan & Perbaikan Bangunan
// ============================================================

const urlMappingPerbaikanWaterproofingBangunanFromMoneyPageMoneyPage1 = {
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-rembesan-air.html": "Jasa Perbaikan Rembesan Air",
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-dak-beton-bocor.html": "Jasa Perbaikan Dak Beton Bocor",
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-talang-bocor.html": "Jasa Perbaikan Talang Bocor",
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-genteng-bocor.html": "Jasa Perbaikan Genteng Bocor",
  "https://www.betonjayareadymix.com/p/jasa-waterproofing-dak-beton.html": "Jasa Waterproofing Dak Beton",
  "https://www.betonjayareadymix.com/p/jasa-waterproofing-basement-bangunan.html": "Jasa Waterproofing Basement Bangunan",
  "https://www.betonjayareadymix.com/p/jasa-waterproofing-dinding-bangunan.html": "Jasa Waterproofing Dinding Bangunan",
  "https://www.betonjayareadymix.com/p/jasa-injeksi-anti-bocor.html": "Jasa Injeksi Anti Bocor",
  "https://www.betonjayareadymix.com/p/jasa-coating-anti-bocor.html": "Jasa Coating Anti Bocor"
};

// ============================================================
// JASA PERBAIKAN ELEMEN ARSITEKTURAL (SUB2)
// Parent: Jasa Perawatan & Perbaikan Bangunan
// ============================================================

const urlMappingPerbaikanElemenArsitekturalFromMoneyPageMoneyPage1 = {
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-dinding-retak.html": "Jasa Perbaikan Dinding Retak",
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-plafon-rusak.html": "Jasa Perbaikan Plafon Rusak",
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-plester-retak.html": "Jasa Perbaikan Plester Retak",
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-cat-mengelupas.html": "Jasa Perbaikan Cat Mengelupas",
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-lantai-retak.html": "Jasa Perbaikan Lantai Retak",
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-keramik-menggelembung.html": "Jasa Perbaikan Keramik Menggelembung",
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-tangga-retak.html": "Jasa Perbaikan Tangga Retak",
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-partisi-rusak.html": "Jasa Perbaikan Partisi Rusak"
};

// ============================================================
// JASA PERBAIKAN ATAP & DRAINASE BANGUNAN (SUB2)
// Parent: Jasa Perawatan & Perbaikan Bangunan
// ============================================================

const urlMappingPerbaikanAtapDrainaseBangunanFromMoneyPageMoneyPage1 = {
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-atap-bocor.html": "Jasa Perbaikan Atap Bocor",
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-rangka-atap.html": "Jasa Perbaikan Rangka Atap",
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-saluran-air-tersumbat.html": "Jasa Perbaikan Saluran Air Tersumbat",
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-pipa-bocor.html": "Jasa Perbaikan Pipa Bocor",
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-roof-deck.html": "Jasa Perbaikan Roof Deck"
};

// ============================================================
// JASA PERBAIKAN JALAN (VARIANT)
// Parent: Jasa Perbaikan Infrastruktur
// ============================================================

const urlMappingJasaPerbaikanJalanFromMoneyMaster1MoneyPage = {
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-trotoar-jalan.html": "Jasa Perbaikan Trotoar Jalan",
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-halte-bus.html": "Jasa Perbaikan Halte Bus",
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-jalan-berlubang.html": "Jasa Perbaikan Jalan Berlubang",
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-jalan-ambles.html": "Jasa Perbaikan Jalan Ambles",
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-jalan-retak.html": "Jasa Perbaikan Jalan Retak",
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-permukaan-jalan.html": "Jasa Perbaikan Permukaan Jalan",
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-jalan-rusak-berat.html": "Jasa Perbaikan Jalan Rusak Berat",
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-jalan-aspal.html": "Jasa Perbaikan Jalan Aspal",
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-jalan-beton.html": "Jasa Perbaikan Jalan Beton",
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-jalan-paving.html": "Jasa Perbaikan Jalan Paving",
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-jalan-coring-beton.html": "Jasa Perbaikan Jalan Coring Beton",
  "https://www.betonjayareadymix.com/p/jasa-overlay-jalan-aspal.html": "Jasa Overlay Jalan Aspal",
  "https://www.betonjayareadymix.com/p/jasa-rekonstruksi-jalan-beton.html": "Jasa Rekonstruksi Jalan Beton",
  "https://www.betonjayareadymix.com/p/jasa-penambalan-jalan-berlubang.html": "Jasa Penambalan Jalan Berlubang",
  "https://www.betonjayareadymix.com/p/jasa-bongkar-pasang-jalan-paving.html": "Jasa Bongkar Pasang Jalan Paving",
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-jalan-komplek.html": "Jasa Perbaikan Jalan Komplek",
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-jalan-raya.html": "Jasa Perbaikan Jalan Raya",
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-jalan-perusahaan.html": "Jasa Perbaikan Jalan Perusahaan",
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-jalan-perumahan.html": "Jasa Perbaikan Jalan Perumahan",
  "https://www.betonjayareadymix.com/p/jasa-repair-jalan-dengan-cold-mix.html": "Jasa Repair Jalan dengan Cold Mix",
  "https://www.betonjayareadymix.com/p/jasa-marking-jalan-dan-repair.html": "Jasa Marking Jalan dan Repair"
};

// ============================================================
// JASA PERBAIKAN TROTOAR (VARIANT)
// Parent: Jasa Perbaikan Infrastruktur
// ============================================================

const urlMappingPerbaikanTrotoarJalanFromMoneyPageMoneyPage1 = {
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-trotoar-jalan-rusak.html": "Jasa Perbaikan Trotoar Jalan Rusak",
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-trotoar-beton.html": "Jasa Perbaikan Trotoar Beton"
};

// ============================================================
// JASA PERBAIKAN JEMBATAN (VARIANT)
// Parent: Jasa Perbaikan Infrastruktur
// ============================================================

const urlMappingPerbaikanJembatanFromMoneyMaster1MoneyPage = {
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-struktur-jembatan.html": "Jasa Perbaikan Struktur Jembatan",
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-jembatan-beton.html": "Jasa Perbaikan Jembatan Beton",
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-jembatan-besi.html": "Jasa Perbaikan Jembatan Besi",
  "https://www.betonjayareadymix.com/p/jasa-rehabilitasi-jembatan.html": "Jasa Rehabilitasi Jembatan",
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-fondasi-jembatan.html": "Jasa Perbaikan Fondasi Jembatan",
  "https://www.betonjayareadymix.com/p/jasa-perkuatan-struktur-jembatan.html": "Jasa Perkuatan Struktur Jembatan",
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-retak-jembatan-beton.html": "Jasa Perbaikan Retak Jembatan Beton",
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-lantai-jembatan.html": "Jasa Perbaikan Lantai Jembatan",
  "https://www.betonjayareadymix.com/p/jasa-rekonstruksi-jembatan-beton.html": "Jasa Rekonstruksi Jembatan Beton",
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-balok-jembatan.html": "Jasa Perbaikan Balok Jembatan",
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-tiang-penyangga-jembatan.html": "Jasa Perbaikan Tiang Penyangga Jembatan",
  "https://www.betonjayareadymix.com/p/jasa-chipping-jembatan-beton.html": "Jasa Chipping Jembatan Beton",
  "https://www.betonjayareadymix.com/p/jasa-aplikasi-shotcrete-jembatan.html": "Jasa Aplikasi Shotcrete Jembatan",
  "https://www.betonjayareadymix.com/p/jasa-injeksi-retak-jembatan.html": "Jasa Injeksi Retak Jembatan"
};

// ============================================================
// JASA PERBAIKAN SALURAN (VARIANT)
// Parent: Jasa Perbaikan Infrastruktur
// ============================================================

const urlMappingPerbaikanDrainaseFromMoneyMaster1MoneyPage = {
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-saluran-air.html": "Jasa Perbaikan Saluran Air",
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-saluran-air-kotor.html": "Jasa Perbaikan Saluran Air Kotor",
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-saluran-air-hujan.html": "Jasa Perbaikan Saluran Air Hujan"
};

// ═════════════════════════════════════════════════════════════════════
// 📂 PARENT: jasa-renovasi (MM) ➔ CHILD: Money Page
// Cluster: Area & Komponen (8 MP)
// ═════════════════════════════════════════════════════════════════════
const urlMappingJasaRenovasiFromMoneyMasterAreaMP = {
  "https://www.betonjayareadymix.com/p/jasa-renovasi-fasilitas.html":              "Jasa Renovasi Fasilitas",
  "https://www.betonjayareadymix.com/p/jasa-renovasi-interior.html":               "Jasa Renovasi Interior",
  "https://www.betonjayareadymix.com/p/jasa-renovasi-eksterior.html":              "Jasa Renovasi Eksterior",
  "https://www.betonjayareadymix.com/p/jasa-renovasi-lantai-bangunan.html":        "Jasa Renovasi Lantai Bangunan",
  "https://www.betonjayareadymix.com/p/jasa-renovasi-fasad-bangunan.html":         "Jasa Renovasi Fasad Bangunan",
  "https://www.betonjayareadymix.com/p/jasa-renovasi-atap-bangunan.html":          "Jasa Renovasi Atap Bangunan",
  "https://www.betonjayareadymix.com/p/jasa-renovasi-kanopi-bangunan.html":        "Jasa Renovasi Kanopi Bangunan",
  "https://www.betonjayareadymix.com/p/jasa-renovasi-penerangan-eksterior.html":   "Jasa Renovasi Penerangan Eksterior",
  "https://www.betonjayareadymix.com/p/jasa-renovasi-elemen-dekoratif-eksterior.html": "Jasa Renovasi Elemen Dekoratif Eksterior"
};

// ═════════════════════════════════════════════════════════════════════
// 📂 PARENT: jasa-renovasi-bangunan-rumah (MP) ➔ CHILD: Variant (9)
// ─── Type-based variants ───
// ═════════════════════════════════════════════════════════════════════
const urlMappingJasaRenovasiBangunanRumahFromMoneyPageVariant = {
  "https://www.betonjayareadymix.com/p/jasa-renovasi-rumah-minimalis.html":   "Jasa Renovasi Rumah Minimalis",
  "https://www.betonjayareadymix.com/p/jasa-renovasi-rumah-type-36.html":     "Jasa Renovasi Rumah Type 36",
  "https://www.betonjayareadymix.com/p/jasa-renovasi-rumah-type-45.html":     "Jasa Renovasi Rumah Type 45",
  "https://www.betonjayareadymix.com/p/jasa-renovasi-rumah-2-lantai.html":    "Jasa Renovasi Rumah 2 Lantai",
  "https://www.betonjayareadymix.com/p/jasa-renovasi-atap-bangunan.html":     "Jasa Renovasi Atap Bangunan",  // ← absorbs atap-rumah (no .html)
  "https://www.betonjayareadymix.com/p/jasa-renovasi-dinding-rumah.html":     "Jasa Renovasi Dinding Rumah",
  "https://www.betonjayareadymix.com/p/jasa-renovasi-kosmetik-rumah.html":    "Jasa Renovasi Kosmetik Rumah",
  "https://www.betonjayareadymix.com/p/jasa-renovasi-rumah-tumbuh.html":      "Jasa Renovasi Rumah Tumbuh",
  "https://www.betonjayareadymix.com/2019/06/harga-jasa-renovasi-rumah-subsidi.html": "Harga Jasa Renovasi Rumah Subsidi"
};
// ═════════════════════════════════════════════════════════════════════
// 📂 PARENT: jasa-renovasi-eksterior (MP) ➔ Variant (5)
// ═════════════════════════════════════════════════════════════════════
// ✅ AFTER REVISION — hanya 1 tersisa
const urlMappingJasaRenovasiEksteriorFromMoneyPageVariant = {
  "https://www.betonjayareadymix.com/p/jasa-fasad-dekoratif-bangunan.html": "Jasa Fasad Dekoratif Bangunan"
};
// ❌ REMOVE 6 URL ini (pindah ke cluster Jasa Desain):
// jasa-desain-eksterior-rumah
// jasa-desain-eksterior-komersial
// jasa-desain-eksterior-villa-dan-resort
// jasa-desain-eksterior-hunian-vertikal
// jasa-desain-eksterior-fasilitas-publik
// jasa-desain-renovasi-fasad-bangunan

// ═════════════════════════════════════════════════════════════════════
// 📂 PARENT: jasa-renovasi-fasad-bangunan (MP) ➔ Variant (7)
// Fasad material & repair variants
// ═════════════════════════════════════════════════════════════════════
const urlMappingJasaRenovasiFasadBangunanFromMoneyPageVariant = {
  "https://www.betonjayareadymix.com/p/jasa-renovasi-fasad-kaca-gedung.html":                 "Jasa Renovasi Fasad Kaca Gedung",
  "https://www.betonjayareadymix.com/p/renovasi-fasad-aluminium-composite-panel.html":         "Renovasi Fasad Aluminium Composite Panel",
  "https://www.betonjayareadymix.com/p/jasa-recoating-fasad-gedung.html":                      "Jasa Recoating Fasad Gedung",
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-fasad-gedung-retak.html":                "Jasa Perbaikan Fasad Gedung Retak",
  "https://www.betonjayareadymix.com/p/jasa-renovasi-kanopi-fasad-gedung.html":                "Jasa Renovasi Kanopi Fasad Gedung",
  "https://www.betonjayareadymix.com/p/jasa-penggantian-fasad-bangunan-lama.html":             "Jasa Penggantian Fasad Bangunan Lama",
  "https://www.betonjayareadymix.com/p/jasa-perkuatan-struktur-fasad-bangunan.html":           "Jasa Perkuatan Struktur Fasad Bangunan",
  "https://www.betonjayareadymix.com/p/jasa-pembersihan-fasad-gedung.html":                    "Jasa Pembersihan Fasad Gedung"
};



// ═════════════════════════════════════════════════════════════════════
// 📂 PARENT: jasa-renovasi-kanopi-bangunan (MP) ➔ Variant (1)
// ═════════════════════════════════════════════════════════════════════
// ✅ AFTER REVISION — 4 tersisa
const urlMappingJasaRenovasiKanopiBangunanFromMoneyPageVariant = {
  "https://www.betonjayareadymix.com/p/jasa-renovasi-pagar-dan-gerbang.html":    "Jasa Renovasi Pagar dan Gerbang",
  "https://www.betonjayareadymix.com/p/jasa-renovasi-taman-dan-landscape.html":  "Jasa Renovasi Taman dan Landscape",
  "https://www.betonjayareadymix.com/p/jasa-renovasi-balkon-dan-teras.html":     "Jasa Renovasi Balkon dan Teras",
  "https://www.betonjayareadymix.com/p/jasa-renovasi-jalur-pejalan-akses.html":  "Jasa Renovasi Jalur Pejalan Akses"
};
// ❌ REMOVE 1 URL ini (pindah ke Infra):
// jasa-perbaikan-trotoar-jalan-rusak

// ============================================================
// JASA RENOVASI ARSITEKTUR EKSTERIOR (SUB2)
// Parent: Jasa Renovasi Fasad Eksterior
// ============================================================
/*
const urlMappingRenovasiArsitekturEksteriorFromMoneyPageMoneyPage1 = {
  "https://www.betonjayareadymix.com/p/jasa-desain-eksterior-rumah.html": "Jasa Desain Eksterior Rumah",
  "https://www.betonjayareadymix.com/p/jasa-desain-eksterior-komersial.html": "Jasa Desain Eksterior Komersial",
  "https://www.betonjayareadymix.com/p/jasa-desain-eksterior-villa-dan-resort.html": "Jasa Desain Eksterior Villa dan Resort",
  "https://www.betonjayareadymix.com/p/jasa-desain-eksterior-hunian-vertikal.html": "Jasa Desain Eksterior Hunian Vertikal",
  "https://www.betonjayareadymix.com/p/jasa-desain-eksterior-fasilitas-publik.html": "Jasa Desain Eksterior Fasilitas Publik"
};
*/

// ═════════════════════════════════════════════════════════════════════
// 📂 PARENT: jasa-renovasi-bangunan-pabrik (MP) ➔ Variant (3)
// ═════════════════════════════════════════════════════════════════════
const urlMappingJasaRenovasiBangunanPabrikFromMoneyPageVariant = {
  "https://www.betonjayareadymix.com/p/jasa-renovasi-pabrik-makanan.html":   "Jasa Renovasi Pabrik Makanan",
  "https://www.betonjayareadymix.com/p/jasa-renovasi-pabrik-tekstil.html":   "Jasa Renovasi Pabrik Tekstil",
  "https://www.betonjayareadymix.com/p/jasa-renovasi-pabrik-farmasi.html":   "Jasa Renovasi Pabrik Farmasi"
};

// ═════════════════════════════════════════════════════════════════════
// 📂 PARENT: jasa-renovasi-bangunan-gedung (MP) ➔ Variant (5)
// ═════════════════════════════════════════════════════════════════════
const urlMappingJasaRenovasiBangunanGedungFromMoneyPageVariant = {
  "https://www.betonjayareadymix.com/p/jasa-renovasi-gedung-perkantoran.html":      "Jasa Renovasi Gedung Perkantoran",
  "https://www.betonjayareadymix.com/p/jasa-renovasi-gedung-pemerintah.html":       "Jasa Renovasi Gedung Pemerintah",
  "https://www.betonjayareadymix.com/p/jasa-renovasi-gedung-komersial.html":        "Jasa Renovasi Gedung Komersial",
  "https://www.betonjayareadymix.com/p/jasa-renovasi-fasad-gedung-tinggi.html":     "Jasa Renovasi Fasad Gedung Tinggi",
  "https://www.betonjayareadymix.com/p/jasa-renovasi-fasad-bangunan-komersial.html":"Jasa Renovasi Fasad Bangunan Komersial"
};

// ═════════════════════════════════════════════════════════════════════
// 📂 PARENT: jasa-renovasi-bangunan-gudang (MP) ➔ Variant (3)
// ═════════════════════════════════════════════════════════════════════
const urlMappingJasaRenovasiBangunanGudangFromMoneyPageVariant = {
  "https://www.betonjayareadymix.com/p/jasa-renovasi-gudang-logistik.html":    "Jasa Renovasi Gudang Logistik",
  "https://www.betonjayareadymix.com/p/jasa-renovasi-gudang-penyimpanan.html": "Jasa Renovasi Gudang Penyimpanan",
  "https://www.betonjayareadymix.com/p/jasa-renovasi-gudang-dingin.html":      "Jasa Renovasi Gudang Dingin"
};


const urlMappingPerbaikanStadionFromMoneyMaster1MoneyPage = {
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-atap-stadion.html": "Jasa Perbaikan Atap Stadion",
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-lintasan-atletik.html": "Jasa Perbaikan Lintasan Atletik",
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-pencahayaan-stadion.html": "Jasa Perbaikan Pencahayaan Stadion",
  "https://www.betonjayareadymix.com/p/perbaikan-fasilitas-penonton-stadion.html": "Jasa Perbaikan Fasilitas Penonton Stadion",
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-struktur-stadion.html": "Jasa Perbaikan Struktur Stadion"
};


// ═════════════════════════════════════════════════════════════════════
// 📂 PARENT: jasa-renovasi-terminal-penumpang (MP) ➔ Variant (6)
// ═════════════════════════════════════════════════════════════════════
// ✅ AFTER REVISION — 3 tetap
const urlMappingJasaRenovasiTerminalPenumpangFromMoneyPageVariant = {
  "https://www.betonjayareadymix.com/p/jasa-renovasi-area-tunggu-terminal.html": "Jasa Renovasi Area Tunggu Terminal",
  "https://www.betonjayareadymix.com/p/jasa-renovasi-kamar-mandi-terminal.html": "Jasa Renovasi Kamar Mandi Terminal",
  "https://www.betonjayareadymix.com/p/jasa-renovasi-kanopi-terminal.html":      "Jasa Renovasi Kanopi Terminal"
};
// ❌ REMOVE 3 URL ini (pindah ke Infra):
// jasa-perbaikan-dinding-terminal
// jasa-perbaikan-pagar-terminal
// jasa-perbaikan-penerangan-terminal

// ═════════════════════════════════════════════════════════════════════
// 📂 PARENT: jasa-renovasi-taman-kota (MP) ➔ Variant (5)
// ═════════════════════════════════════════════════════════════════════
// ✅ AFTER REVISION — 2 tetap
const urlMappingJasaRenovasiTamanKotaFromMoneyPageVariant = {
  "https://www.betonjayareadymix.com/p/jasa-renovasi-lampu-taman-kota.html":    "Jasa Renovasi Lampu Taman Kota",
  "https://www.betonjayareadymix.com/p/jasa-renovasi-lansekap-taman-kota.html": "Jasa Renovasi Lansekap Taman Kota"
};
// ❌ REMOVE 3 URL ini (pindah ke Infra):
// jasa-perbaikan-fasilitas-taman
// jasa-perbaikan-jalur-pedestrian-taman
// jasa-perbaikan-area-bermain-anak-taman

// ═════════════════════════════════════════════════════════════════════
// 📂 PARENT: jasa-renovasi-fasilitas (MP) ➔ Variant (12)
// Sekolah, Stadion, Halte — fasilitas publik umum
// ═════════════════════════════════════════════════════════════════════
// ✅ AFTER REVISION — hapus 4 perbaikan-halte, keep sisanya
const urlMappingJasaRenovasiFasilitasFromMoneyPageVariant = {
  // ─── Sekolah (6) ───
  "https://www.betonjayareadymix.com/p/jasa-renovasi-gedung-sekolah.html":         "Jasa Renovasi Gedung Sekolah",
  "https://www.betonjayareadymix.com/p/jasa-renovasi-ruang-kelas.html":            "Jasa Renovasi Ruang Kelas",
  "https://www.betonjayareadymix.com/p/jasa-renovasi-fasilitas-laboratorium.html": "Jasa Renovasi Fasilitas Laboratorium",
  "https://www.betonjayareadymix.com/p/jasa-renovasi-lapangan-sekolah.html":       "Jasa Renovasi Lapangan Sekolah",
  "https://www.betonjayareadymix.com/p/jasa-renovasi-kamar-mandi-sekolah.html":    "Jasa Renovasi Kamar Mandi Sekolah",
  "https://www.betonjayareadymix.com/p/jasa-renovasi-dinding-lantai-sekolah.html": "Jasa Renovasi Dinding Lantai Sekolah",

  // ─── Stadion (5) ───
  "https://www.betonjayareadymix.com/p/jasa-renovasi-stadion-olahraga.html":       "Jasa Renovasi Stadion Olahraga",
  "https://www.betonjayareadymix.com/p/jasa-renovasi-tribun-stadion.html":         "Jasa Renovasi Tribun Stadion",
  "https://www.betonjayareadymix.com/p/jasa-renovasi-lapangan-stadion.html":       "Jasa Renovasi Lapangan Stadion",
  "https://www.betonjayareadymix.com/p/jasa-renovasi-pagar-stadion.html":          "Jasa Renovasi Pagar Stadion",
  "https://www.betonjayareadymix.com/p/jasa-renovasi-kamar-ganti-stadion.html":    "Jasa Renovasi Kamar Ganti Stadion",

  // ─── Halte (2) — hanya yang prefix renovasi ───
  "https://www.betonjayareadymix.com/p/jasa-renovasi-halte-bus.html":              "Jasa Renovasi Halte Bus",
  "https://www.betonjayareadymix.com/p/jasa-renovasi-desain-halte-modern.html":    "Jasa Renovasi Desain Halte Modern"
};
// ❌ REMOVE 4 URL ini (pindah ke Infra):
// jasa-perbaikan-kanopi-halte
// jasa-perbaikan-penerangan-halte
// jasa-perbaikan-lantai-halte
// jasa-perbaikan-tempat-duduk-halte


// ═════════════════════════════════════════════════════════════════════
// 📂 PARENT: jasa-renovasi-interior (MP) ➔ CHILD: Variant (32)
// By Type + By Room + By Specialty
// ═════════════════════════════════════════════════════════════════════
const urlMappingJasaRenovasiInteriorFromMoneyPageVariant = {
  // ─── By Building Type (5) ───
  "https://www.betonjayareadymix.com/p/jasa-renovasi-interior-rumah.html":        "Jasa Renovasi Interior Rumah",
  "https://www.betonjayareadymix.com/p/jasa-renovasi-interior-kantor.html":       "Jasa Renovasi Interior Kantor",
  "https://www.betonjayareadymix.com/p/jasa-renovasi-interior-apartemen.html":    "Jasa Renovasi Interior Apartemen",
  "https://www.betonjayareadymix.com/p/jasa-renovasi-interior-hotel.html":        "Jasa Renovasi Interior Hotel",
  "https://www.betonjayareadymix.com/p/jasa-renovasi-interior-toko.html":         "Jasa Renovasi Interior Toko",

  // ─── By Specialty — Retail (5) ───
  "https://www.betonjayareadymix.com/p/jasa-renovasi-interior-mini-market.html":  "Jasa Renovasi Interior Mini Market",
  "https://www.betonjayareadymix.com/p/jasa-renovasi-interior-butik.html":        "Jasa Renovasi Interior Butik",
  "https://www.betonjayareadymix.com/p/jasa-renovasi-interior-gerai-kuliner.html":"Jasa Renovasi Interior Gerai Kuliner",
  "https://www.betonjayareadymix.com/p/jasa-renovasi-interior-etalase-toko.html": "Jasa Renovasi Interior Etalase Toko",
  "https://www.betonjayareadymix.com/p/jasa-renovasi-interior-gerai-waralaba.html":"Jasa Renovasi Interior Gerai Waralaba",

  // ─── By Specialty — Apartment (1) ───
  "https://www.betonjayareadymix.com/p/jasa-renovasi-interior-studio-apartemen.html": "Jasa Renovasi Interior Studio Apartemen",

  // ─── Furniture (1) — keep natural slug tanpa jasa ───
  "https://www.betonjayareadymix.com/p/renovasi-furniture.html":                  "Renovasi Furniture",

  // ─── By Room — Interior Specific (6) ───
  "https://www.betonjayareadymix.com/p/jasa-renovasi-interior-ruang-tamu.html":   "Jasa Renovasi Interior Ruang Tamu",
  "https://www.betonjayareadymix.com/p/jasa-renovasi-interior-dapur.html":        "Jasa Renovasi Interior Dapur",
  "https://www.betonjayareadymix.com/p/jasa-renovasi-interior-kamar-tidur.html":  "Jasa Renovasi Interior Kamar Tidur",
  "https://www.betonjayareadymix.com/p/jasa-renovasi-interior-kamar-mandi.html":  "Jasa Renovasi Interior Kamar Mandi",
  "https://www.betonjayareadymix.com/p/jasa-renovasi-interior-ruang-kerja.html":  "Jasa Renovasi Interior Ruang Kerja",
  "https://www.betonjayareadymix.com/p/jasa-renovasi-interior-ruang-keluarga.html":"Jasa Renovasi Interior Ruang Keluarga",

  // ─── By Room — General (8, tanpa interior prefix) ───
  "https://www.betonjayareadymix.com/p/jasa-renovasi-kamar-tidur.html":           "Jasa Renovasi Kamar Tidur",
  "https://www.betonjayareadymix.com/p/jasa-renovasi-kamar-mandi.html":           "Jasa Renovasi Kamar Mandi",
  "https://www.betonjayareadymix.com/p/jasa-renovasi-ruang-tamu.html":            "Jasa Renovasi Ruang Tamu",
  "https://www.betonjayareadymix.com/p/jasa-renovasi-ruang-keluarga.html":        "Jasa Renovasi Ruang Keluarga",
  "https://www.betonjayareadymix.com/p/jasa-renovasi-ruang-belajar.html":         "Jasa Renovasi Ruang Belajar",
  "https://www.betonjayareadymix.com/p/jasa-renovasi-ruang-makan.html":           "Jasa Renovasi Ruang Makan",
  "https://www.betonjayareadymix.com/p/jasa-renovasi-ruang-multifungsi.html":     "Jasa Renovasi Ruang Multifungsi",
  "https://www.betonjayareadymix.com/p/jasa-renovasi-dapur.html":                 "Jasa Renovasi Dapur",
  "https://www.betonjayareadymix.com/p/jasa-renovasi-ruang-direksi.html":         "Jasa Renovasi Ruang Direksi",
  "https://www.betonjayareadymix.com/p/jasa-renovasi-coworking-space.html":       "Jasa Renovasi Coworking Space",

  // ─── By Room + Type — Apartment Specific (2) ───
  "https://www.betonjayareadymix.com/p/jasa-renovasi-kamar-apartemen.html":       "Jasa Renovasi Kamar Apartemen",
  "https://www.betonjayareadymix.com/p/jasa-renovasi-dapur-apartemen.html":       "Jasa Renovasi Dapur Apartemen",
  "https://www.betonjayareadymix.com/p/jasa-renovasi-kamar-mandi-apartemen.html": "Jasa Renovasi Kamar Mandi Apartemen",
  "https://www.betonjayareadymix.com/p/jasa-renovasi-ruang-tamu-apartemen.html":  "Jasa Renovasi Ruang Tamu Apartemen",

  // ─── By Room + Type — Hotel Specific (4) ───
  "https://www.betonjayareadymix.com/p/jasa-renovasi-kamar-hotel.html":           "Jasa Renovasi Kamar Hotel",
  "https://www.betonjayareadymix.com/p/jasa-renovasi-lobi-hotel.html":            "Jasa Renovasi Lobi Hotel",
  "https://www.betonjayareadymix.com/p/jasa-renovasi-koridor-hotel.html":         "Jasa Renovasi Koridor Hotel",
  "https://www.betonjayareadymix.com/p/jasa-renovasi-ruang-makan-hotel.html":     "Jasa Renovasi Ruang Makan Hotel",
  "https://www.betonjayareadymix.com/p/jasa-renovasi-kamar-mandi-hotel.html":     "Jasa Renovasi Kamar Mandi Hotel",

  // ─── By Room + Type — Kantor (3) ───
  "https://www.betonjayareadymix.com/p/jasa-renovasi-ruang-kerja-karyawan.html":  "Jasa Renovasi Ruang Kerja Karyawan",
  "https://www.betonjayareadymix.com/p/jasa-renovasi-ruang-rapat-kantor.html":    "Jasa Renovasi Ruang Rapat Kantor",
  "https://www.betonjayareadymix.com/p/jasa-renovasi-lobby-dan-resepsionis.html": "Jasa Renovasi Lobby dan Resepsionis",
  "https://www.betonjayareadymix.com/p/jasa-renovasi-partisi-ruang-kantor.html":  "Jasa Renovasi Partisi Ruang Kantor",

  // ─── Hotel-Apartment Combined (1) ───
  "https://www.betonjayareadymix.com/p/jasa-renovasi-hotel-apartemen.html":       "Jasa Renovasi Hotel dan Apartemen"
};


// ═══════════════════════════════════════════════════════════
// [BAGIAN 2] EARLY EXIT v2.0.0 — Pendekatan C
// ═══════════════════════════════════════════════════════════

(function() {
    'use strict';
    
    var cleanUrl = window.location.href.split(/[?#]/)[0];
    console.log('[jasa-perbaikan-kons] 🔍 Check: ' + cleanUrl);
    
    var ALL_MAPPINGS = [
        urlMappingPerbaikanWaterproofingBangunanFromMoneyPageMoneyPage1,
        urlMappingPerbaikanElemenArsitekturalFromMoneyPageMoneyPage1,
        urlMappingPerbaikanAtapDrainaseBangunanFromMoneyPageMoneyPage1,
        urlMappingJasaRenovasiFromMoneyMasterAreaMP,
        urlMappingPerbaikanLantaiBangunanFromMoneyPageMoneyPage1,
        urlMappingPerbaikanStrukturBangunanFromMoneyPageMoneyPage1,
        urlMappingPerbaikanStrukturGedungBertingkatFromMoneyPage1MoneyPage2,
        urlMappingPerbaikanStrukturBangunanTuaFromMoneyPage1MoneyPage2,
        urlMappingPerbaikanStrukturBangunanMiringFromMoneyPage1MoneyPage2,
        urlMappingPerbaikanStrukturKolomBalokFromMoneyPage1MoneyPage2,
        urlMappingPerbaikanPondasiStrukturFromMoneyPage1MoneyPage2,
        urlMappingPerbaikanStrukturLantaiFromMoneyPage1MoneyPage2,
        urlMappingPerbaikanStrukturDindingFromMoneyPage1MoneyPage2,
        urlMappingRehabilitasiBetonStrukturFromMoneyPage1MoneyPage2,
        urlMappingPerbaikanStrukturAtapFromMoneyPage1MoneyPage2,
        urlMappingJasaPerbaikanJalanFromMoneyMaster1MoneyPage,
        urlMappingPerbaikanTrotoarJalanFromMoneyPageMoneyPage1,
        urlMappingPerbaikanJembatanFromMoneyMaster1MoneyPage,
        urlMappingPerbaikanDrainaseFromMoneyMaster1MoneyPage,
        urlMappingJasaRenovasiEksteriorFromMoneyPageVariant,
        urlMappingJasaRenovasiBangunanPabrikFromMoneyPageVariant,
        urlMappingJasaRenovasiBangunanRumahFromMoneyPageVariant,
        urlMappingJasaRenovasiFasadBangunanFromMoneyPageVariant ,
        urlMappingJasaRenovasiBangunanGedungFromMoneyPageVariant,
        urlMappingJasaRenovasiBangunanGudangFromMoneyPageVariant,
        urlMappingJasaRenovasiTamanKotaFromMoneyPageVariant,
        urlMappingJasaRenovasiKanopiBangunanFromMoneyPageVariant,
    
        urlMappingJasaRenovasiTerminalPenumpangFromMoneyPageVariant,
        urlMappingJasaRenovasiFasilitasFromMoneyPageVariant,
   
        urlMappingPerbaikanStadionFromMoneyMaster1MoneyPage,
        urlMappingJasaRenovasiInteriorFromMoneyPageVariant
     
    ];
    
    // ✅ Pendekatan C: Loop + foundIndex + break
    var foundIndex = -1;
    var foundMappingName = '';
    
    for (var i = 0; i < ALL_MAPPINGS.length; i++) {
        if (!ALL_MAPPINGS[i] || typeof ALL_MAPPINGS[i] !== 'object') {
            console.warn('[jasa-perbaikan-kons] ⚠️ Mapping #' + (i + 1) + ' bukan object — skip');
            continue;
        }
        if (ALL_MAPPINGS[i][cleanUrl]) {
            foundIndex = i;
            foundMappingName = ALL_MAPPINGS[i][cleanUrl];
            break;
        }
    }
    
    if (foundIndex === -1) {
        console.log('[jasa-perbaikan-kons] ⏭️ SKIP — URL tidak cocok');
        window.__jasaPerbaikanKonsActive = false;
        return;
    }
    
    window.__jasaPerbaikanKonsActive = true;
    window.__jasaPerbaikanKonsMatchIndex = foundIndex;
    window.__jasaPerbaikanKonsMatchMappingName = foundMappingName;
    window.__jasaPerbaikanKonsMappings = ALL_MAPPINGS;
    
    console.log(
        '[jasa-perbaikan-kons] ✅ Match di mapping #' + (foundIndex + 1) +
        ' — Label: "' + foundMappingName + '"' +
        ' — EXECUTE flag set'
    );
})();

console.log('═══════════════════════════════════════════════════════════');
console.log('📦 PART 1 SELESAI — Lanjut ke PART 2');
console.log('═══════════════════════════════════════════════════════════');

// ═══════════════════════════════════════════════════════════
// [BAGIAN 3] FUNGSI UTAMA — Semua logic breadcrumb
// ═══════════════════════════════════════════════════════════

function initJasaPerbaikanKonsPost() {
    // ⚡ Guard flag
    if (!window.__jasaPerbaikanKonsActive) {
        console.log('[jasa-perbaikan-kons] ⏭️ Execute SKIP — URL tidak cocok');
        return;
    }
    
    console.log('[jasa-perbaikan-kons] 🚀 Execute — URL cocok');
    
    var cleanUrlJasaPerbaikanKonsSub = window.location.href.split(/[?#]/)[0];
    
    // ✅ Guard elemen DOM
    var JasaKonsPerbaikan = document.getElementById("JasaKonsPerbaikan");
    if (!JasaKonsPerbaikan) {
        console.error("[jasa-perbaikan-kons] ❌ elemen Id JasaKonsPerbaikan kondisi terhapus");
        return;
    }

    // ═══════════════════════════════════════════════════════
    // [BLOK 1] PERBAIKAN STRUKTUR (SUB2)
    // ═══════════════════════════════════════════════════════

    if (urlMappingJasaRenovasiFromMoneyMasterAreaMP[cleanUrlJasaPerbaikanKonsSub]) {
        generateBreadcrumbShared(
            urlMappingJasaRenovasiFromMoneyMasterAreaMP,
            cleanUrlJasaPerbaikanKonsSub,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Renovasi', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-renovasi.html' },
                { name: 'Perbandingan Jasa Renovasi', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-renovasi.html' },
                { name: 'Jasa Renovasi', url: 'https://www.betonjayareadymix.com/p/jasa-renovasi.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }

    if (urlMappingPerbaikanLantaiBangunanFromMoneyPageMoneyPage1[cleanUrlJasaPerbaikanKonsSub]) {
        generateBreadcrumbShared(
            urlMappingPerbaikanLantaiBangunanFromMoneyPageMoneyPage1,
            cleanUrlJasaPerbaikanKonsSub,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Perbaikan Bangunan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-perbaikan-bangunan.html' },
                { name: 'Perbandingan Jasa Perbaikan Bangunan', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-perbaikan-bangunan.html' },
                { name: 'Jasa Perbaikan Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-bangunan.html' },
                { name: 'Jasa Perbaikan Lantai Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-lantai-bangunan.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }

    if (urlMappingPerbaikanStrukturBangunanFromMoneyPageMoneyPage1[cleanUrlJasaPerbaikanKonsSub]) {
        generateBreadcrumbShared(
            urlMappingPerbaikanStrukturBangunanFromMoneyPageMoneyPage1,
            cleanUrlJasaPerbaikanKonsSub,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Perbaikan Bangunan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-perbaikan-bangunan.html' },
                { name: 'Perbandingan Jasa Perbaikan Bangunan', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-perbaikan-bangunan.html' },
                { name: 'Jasa Perbaikan Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-bangunan.html' },
                { name: 'Jasa Perbaikan Struktur Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-struktur-bangunan.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }

    // ═══════════════════════════════════════════════════════
    // [BLOK 2] PERBAIKAN STRUKTUR — TURUNAN
    // ═══════════════════════════════════════════════════════

    if (urlMappingPerbaikanStrukturGedungBertingkatFromMoneyPage1MoneyPage2[cleanUrlJasaPerbaikanKonsSub]) {
        generateBreadcrumbShared(
            urlMappingPerbaikanStrukturGedungBertingkatFromMoneyPage1MoneyPage2,
            cleanUrlJasaPerbaikanKonsSub,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Perbaikan Bangunan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-perbaikan-bangunan.html' },
                { name: 'Perbandingan Jasa Perbaikan Bangunan', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-perbaikan-bangunan.html' },
                { name: 'Jasa Perbaikan Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-bangunan.html' },
                { name: 'Jasa Perbaikan Struktur Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-struktur-bangunan.html' },
                { name: 'Jasa Perbaikan Gedung Bertingkat', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-gedung-bertingkat.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }

    // ✅ FIX: Ganti urlMappingPerbaikanStrukturGedungBertingkat → urlMappingPerbaikanStrukturBangunanMiring
    if (urlMappingPerbaikanStrukturBangunanMiringFromMoneyPage1MoneyPage2[cleanUrlJasaPerbaikanKonsSub]) {
        generateBreadcrumbShared(
            urlMappingPerbaikanStrukturBangunanMiringFromMoneyPage1MoneyPage2,
            cleanUrlJasaPerbaikanKonsSub,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Perbaikan Bangunan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-perbaikan-bangunan.html' },
                { name: 'Perbandingan Jasa Perbaikan Bangunan', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-perbaikan-bangunan.html' },
                { name: 'Jasa Perbaikan Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-bangunan.html' },
                { name: 'Jasa Perbaikan Struktur Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-struktur-bangunan.html' },
                { name: 'Jasa Perbaikan Struktur Bangunan Miring', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-struktur-bangunan-miring.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }

    if (urlMappingPerbaikanStrukturBangunanTuaFromMoneyPage1MoneyPage2[cleanUrlJasaPerbaikanKonsSub]) {
        generateBreadcrumbShared(
            urlMappingPerbaikanStrukturBangunanTuaFromMoneyPage1MoneyPage2,
            cleanUrlJasaPerbaikanKonsSub,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Perbaikan Bangunan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-perbaikan-bangunan.html' },
                { name: 'Perbandingan Jasa Perbaikan Bangunan', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-perbaikan-bangunan.html' },
                { name: 'Jasa Perbaikan Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-bangunan.html' },
                { name: 'Jasa Perbaikan Struktur Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-struktur-bangunan.html' },
                { name: 'Jasa Perbaikan Struktur Bangunan Tua', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-struktur-bangunan-tua.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }

    if (urlMappingPerbaikanStrukturKolomBalokFromMoneyPage1MoneyPage2[cleanUrlJasaPerbaikanKonsSub]) {
        generateBreadcrumbShared(
            urlMappingPerbaikanStrukturKolomBalokFromMoneyPage1MoneyPage2,
            cleanUrlJasaPerbaikanKonsSub,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Perbaikan Bangunan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-perbaikan-bangunan.html' },
                { name: 'Perbandingan Jasa Perbaikan Bangunan', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-perbaikan-bangunan.html' },
                { name: 'Jasa Perbaikan Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-bangunan.html' },
                { name: 'Jasa Perbaikan Struktur Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-struktur-bangunan.html' },
                { name: 'Jasa Perbaikan Struktur Kolom Balok', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-struktur-kolom-balok.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }

    if (urlMappingPerbaikanPondasiStrukturFromMoneyPage1MoneyPage2[cleanUrlJasaPerbaikanKonsSub]) {
        generateBreadcrumbShared(
            urlMappingPerbaikanPondasiStrukturFromMoneyPage1MoneyPage2,
            cleanUrlJasaPerbaikanKonsSub,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Perbaikan Bangunan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-perbaikan-bangunan.html' },
                { name: 'Perbandingan Jasa Perbaikan Bangunan', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-perbaikan-bangunan.html' },
                { name: 'Jasa Perbaikan Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-bangunan.html' },
                { name: 'Jasa Perbaikan Struktur Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-struktur-bangunan.html' },
                { name: 'Jasa Perbaikan Pondasi Struktur', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-pondasi-struktur.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }

    if (urlMappingPerbaikanStrukturLantaiFromMoneyPage1MoneyPage2[cleanUrlJasaPerbaikanKonsSub]) {
        generateBreadcrumbShared(
            urlMappingPerbaikanStrukturLantaiFromMoneyPage1MoneyPage2,
            cleanUrlJasaPerbaikanKonsSub,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Perbaikan Bangunan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-perbaikan-bangunan.html' },
                { name: 'Perbandingan Jasa Perbaikan Bangunan', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-perbaikan-bangunan.html' },
                { name: 'Jasa Perbaikan Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-bangunan.html' },
                { name: 'Jasa Perbaikan Struktur Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-struktur-bangunan.html' },
                { name: 'Jasa Perbaikan Lantai Struktur', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-lantai-struktur.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }

    if (urlMappingPerbaikanStrukturDindingFromMoneyPage1MoneyPage2[cleanUrlJasaPerbaikanKonsSub]) {
        generateBreadcrumbShared(
            urlMappingPerbaikanStrukturDindingFromMoneyPage1MoneyPage2,
            cleanUrlJasaPerbaikanKonsSub,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Perbaikan Bangunan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-perbaikan-bangunan.html' },
                { name: 'Perbandingan Jasa Perbaikan Bangunan', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-perbaikan-bangunan.html' },
                { name: 'Jasa Perbaikan Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-bangunan.html' },
                { name: 'Jasa Perbaikan Struktur Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-struktur-bangunan.html' },
                { name: 'Jasa Perbaikan Struktur Dinding', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-struktur-dinding.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }

    if (urlMappingPerbaikanStrukturAtapFromMoneyPage1MoneyPage2[cleanUrlJasaPerbaikanKonsSub]) {
        generateBreadcrumbShared(
            urlMappingPerbaikanStrukturAtapFromMoneyPage1MoneyPage2,
            cleanUrlJasaPerbaikanKonsSub,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Perbaikan Bangunan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-perbaikan-bangunan.html' },
                { name: 'Perbandingan Jasa Perbaikan Bangunan', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-perbaikan-bangunan.html' },
                { name: 'Jasa Perbaikan Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-bangunan.html' },
                { name: 'Jasa Perbaikan Struktur Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-struktur-bangunan.html' },
                { name: 'Jasa Perbaikan Struktur Atap', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-struktur-atap.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }

    if (urlMappingRehabilitasiBetonStrukturFromMoneyPage1MoneyPage2[cleanUrlJasaPerbaikanKonsSub]) {
        generateBreadcrumbShared(
            urlMappingRehabilitasiBetonStrukturFromMoneyPage1MoneyPage2,
            cleanUrlJasaPerbaikanKonsSub,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Perbaikan Bangunan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-perbaikan-bangunan.html' },
                { name: 'Perbandingan Jasa Perbaikan Bangunan', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-perbaikan-bangunan.html' },
                { name: 'Jasa Perbaikan Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-bangunan.html' },
                { name: 'Jasa Perbaikan Struktur Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-struktur-bangunan.html' },
                { name: 'Jasa Rehabilitasi Beton Struktur', url: 'https://www.betonjayareadymix.com/p/jasa-rehabilitasi-beton-struktur.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }

    // ═══════════════════════════════════════════════════════
    // [BLOK 3] PERBAIKAN WATERPROOFING
    // ═══════════════════════════════════════════════════════

    if (urlMappingPerbaikanWaterproofingBangunanFromMoneyPageMoneyPage1[cleanUrlJasaPerbaikanKonsSub]) {
        generateBreadcrumbShared(
            urlMappingPerbaikanWaterproofingBangunanFromMoneyPageMoneyPage1,
            cleanUrlJasaPerbaikanKonsSub,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Perbaikan Bangunan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-perbaikan-bangunan.html' },
                { name: 'Perbandingan Jasa Perbaikan Bangunan', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-perbaikan-bangunan.html' },
                { name: 'Jasa Perbaikan Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-bangunan.html' },
                { name: 'Jasa Perbaikan Waterproofing Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-waterproofing-bangunan.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }

    // ═══════════════════════════════════════════════════════
    // [BLOK 4] PERBAIKAN ELEMEN ARSITEKTURAL
    // ═══════════════════════════════════════════════════════

    if (urlMappingPerbaikanElemenArsitekturalFromMoneyPageMoneyPage1[cleanUrlJasaPerbaikanKonsSub]) {
        generateBreadcrumbShared(
            urlMappingPerbaikanElemenArsitekturalFromMoneyPageMoneyPage1,
            cleanUrlJasaPerbaikanKonsSub,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Perbaikan Bangunan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-perbaikan-bangunan.html' },
                { name: 'Perbandingan Jasa Perbaikan Bangunan', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-perbaikan-bangunan.html' },
                { name: 'Jasa Perbaikan Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-bangunan.html' },
                { name: 'Jasa Perbaikan Elemen Arsitektural', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-elemen-arsitektural.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }

    // ═══════════════════════════════════════════════════════
    // [BLOK 5] PERBAIKAN ATAP & DRAINASE BANGUNAN
    // ═══════════════════════════════════════════════════════

    if (urlMappingPerbaikanAtapDrainaseBangunanFromMoneyPageMoneyPage1[cleanUrlJasaPerbaikanKonsSub]) {
        generateBreadcrumbShared(
            urlMappingPerbaikanAtapDrainaseBangunanFromMoneyPageMoneyPage1,
            cleanUrlJasaPerbaikanKonsSub,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Perbaikan Bangunan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-perbaikan-bangunan.html' },
                { name: 'Perbandingan Jasa Perbaikan Bangunan', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-perbaikan-bangunan.html' },
                { name: 'Jasa Perbaikan Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-bangunan.html' },
                { name: 'Jasa Perbaikan Atap Drainase Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-atap-drainase-bangunan.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }

    // ═══════════════════════════════════════════════════════
    // [BLOK 6] PERBAIKAN INFRASTRUKTUR
    // ═══════════════════════════════════════════════════════

    if (urlMappingJasaPerbaikanJalanFromMoneyMaster1MoneyPage[cleanUrlJasaPerbaikanKonsSub]) {
        generateBreadcrumbShared(
            urlMappingJasaPerbaikanJalanFromMoneyMaster1MoneyPage,
            cleanUrlJasaPerbaikanKonsSub,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Perbaikan Infrastruktur', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-perbaikan-infrastruktur.html' },
                { name: 'Perbandingan Jasa Perbaikan Infrastruktur', url: 'https://www.betonjayareadymix.com/p/perbandingan-perbaikan-infrastruktur.html' },
                { name: 'Jasa Perbaikan Infrastruktur', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-infrastruktur.html' },
                { name: 'Jasa Perbaikan Jalan', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-jalan.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }

    if (urlMappingPerbaikanTrotoarJalanFromMoneyPageMoneyPage1[cleanUrlJasaPerbaikanKonsSub]) {
        generateBreadcrumbShared(
            urlMappingPerbaikanTrotoarJalanFromMoneyPageMoneyPage1,
            cleanUrlJasaPerbaikanKonsSub,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Perbaikan Infrastruktur', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-perbaikan-infrastruktur.html' },
                { name: 'Perbandingan Jasa Perbaikan Infrastruktur', url: 'https://www.betonjayareadymix.com/p/perbandingan-perbaikan-infrastruktur.html' },
                { name: 'Jasa Perbaikan Infrastruktur', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-infrastruktur.html' },
                { name: 'Jasa Perbaikan Trotoar Jalan', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-trotoar-jalan.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }

    if (urlMappingPerbaikanJembatanFromMoneyMaster1MoneyPage[cleanUrlJasaPerbaikanKonsSub]) {
        generateBreadcrumbShared(
            urlMappingPerbaikanJembatanFromMoneyMaster1MoneyPage,
            cleanUrlJasaPerbaikanKonsSub,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Perbaikan Infrastruktur', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-perbaikan-infrastruktur.html' },
                { name: 'Perbandingan Jasa Perbaikan Infrastruktur', url: 'https://www.betonjayareadymix.com/p/perbandingan-perbaikan-infrastruktur.html' },
                { name: 'Jasa Perbaikan Infrastruktur', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-infrastruktur.html' },
                { name: 'Jasa Perbaikan Jembatan', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-jembatan.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }

    if (urlMappingPerbaikanDrainaseFromMoneyMaster1MoneyPage[cleanUrlJasaPerbaikanKonsSub]) {
        generateBreadcrumbShared(
            urlMappingPerbaikanDrainaseFromMoneyMaster1MoneyPage,
            cleanUrlJasaPerbaikanKonsSub,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Perbaikan Infrastruktur', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-perbaikan-infrastruktur.html' },
                { name: 'Perbandingan Jasa Perbaikan Infrastruktur', url: 'https://www.betonjayareadymix.com/p/perbandingan-perbaikan-infrastruktur.html' },
                { name: 'Jasa Perbaikan Infrastruktur', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-infrastruktur.html' },
                { name: 'Jasa Perbaikan Drainase', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-drainase.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }

    // ═══════════════════════════════════════════════════════
    // [BLOK 7] RENOVASI BANGUNAN
    // ═══════════════════════════════════════════════════════

    if (urlMappingJasaRenovasiBangunanPabrikFromMoneyPageVariant[cleanUrlJasaPerbaikanKonsSub]) {
        generateBreadcrumbShared(
            urlMappingJasaRenovasiBangunanPabrikFromMoneyPageVariant,
            cleanUrlJasaPerbaikanKonsSub,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Renovasi', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-renovasi.html' },
                { name: 'Perbandingan Jasa Renovasi', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-renovasi.html' },
                { name: 'Jasa Renovasi', url: 'https://www.betonjayareadymix.com/p/jasa-renovasi.html' },
                { name: 'Jasa Renovasi Bangunan Pabrik', url: 'https://www.betonjayareadymix.com/p/jasa-renovasi-bangunan-pabrik.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }

    if (urlMappingJasaRenovasiBangunanRumahFromMoneyPageVariant[cleanUrlJasaPerbaikanKonsSub]) {
        generateBreadcrumbShared(
            urlMappingJasaRenovasiBangunanRumahFromMoneyPageVariant,
            cleanUrlJasaPerbaikanKonsSub,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Renovasi', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-renovasi.html' },
                { name: 'Perbandingan Jasa Renovasi', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-renovasi.html' },
                { name: 'Jasa Renovasi', url: 'https://www.betonjayareadymix.com/p/jasa-renovasi.html' },
                { name: 'Jasa Renovasi Bangunan Rumah', url: 'https://www.betonjayareadymix.com/p/jasa-renovasi-bangunan-rumah.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }


    if (urlMappingJasaRenovasiBangunanGedungFromMoneyPageVariant[cleanUrlJasaPerbaikanKonsSub]) {
        generateBreadcrumbShared(
            urlMappingJasaRenovasiBangunanGedungFromMoneyPageVariant,
            cleanUrlJasaPerbaikanKonsSub,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Renovasi', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-renovasi.html' },
                { name: 'Perbandingan Jasa Renovasi', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-renovasi.html' },
                { name: 'Jasa Renovasi', url: 'https://www.betonjayareadymix.com/p/jasa-renovasi.html' },
                { name: 'Jasa Renovasi Bangunan Gedung', url: 'https://www.betonjayareadymix.com/p/jasa-renovasi-bangunan-gedung.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }

    if (urlMappingJasaRenovasiBangunanGudangFromMoneyPageVariant[cleanUrlJasaPerbaikanKonsSub]) {
        generateBreadcrumbShared(
            urlMappingJasaRenovasiBangunanGudangFromMoneyPageVariant,
            cleanUrlJasaPerbaikanKonsSub,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Renovasi', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-renovasi.html' },
                { name: 'Perbandingan Jasa Renovasi', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-renovasi.html' },
                { name: 'Jasa Renovasi', url: 'https://www.betonjayareadymix.com/p/jasa-renovasi.html' },
                { name: 'Jasa Renovasi Bangunan Gudang', url: 'https://www.betonjayareadymix.com/p/jasa-renovasi-bangunan-gudang.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }
  
    if (urlMappingJasaRenovasiTamanKotaFromMoneyPageVariant[cleanUrlJasaPerbaikanKonsSub]) {
        generateBreadcrumbShared(
            urlMappingJasaRenovasiTamanKotaFromMoneyPageVariant,
            cleanUrlJasaPerbaikanKonsSub,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Renovasi', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-renovasi.html' },
                { name: 'Perbandingan Jasa Renovasi', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-renovasi.html' },
                { name: 'Jasa Renovasi', url: 'https://www.betonjayareadymix.com/p/jasa-renovasi.html' },
                { name: 'Jasa Renovasi Taman Kota', url: 'https://www.betonjayareadymix.com/p/jasa-renovasi-taman-kota.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }

    if (urlMappingJasaRenovasiKanopiBangunanFromMoneyPageVariant[cleanUrlJasaPerbaikanKonsSub]) {
        generateBreadcrumbShared(
            urlMappingJasaRenovasiKanopiBangunanFromMoneyPageVariant,
            cleanUrlJasaPerbaikanKonsSub,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Renovasi', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-renovasi.html' },
                { name: 'Perbandingan Jasa Renovasi', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-renovasi.html' },
                { name: 'Jasa Renovasi', url: 'https://www.betonjayareadymix.com/p/jasa-renovasi.html' },
                { name: 'Jasa Renovasi Kanopi Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-renovasi-kanopi-bangunan.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }

    if (urlMappingPerbaikanStadionFromMoneyMaster1MoneyPage[cleanUrlJasaPerbaikanKonsSub]) {
        generateBreadcrumbShared(
            urlMappingPerbaikanStadionFromMoneyMaster1MoneyPage,
            cleanUrlJasaPerbaikanKonsSub,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Perbaikan Infrastruktur', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-perbaikan-infrastruktur.html' },
                { name: 'Perbandingan Jasa Perbaikan Infrastruktur', url: 'https://www.betonjayareadymix.com/p/perbandingan-perbaikan-infrastruktur.html' },
                { name: 'Jasa Perbaikan Infrastruktur', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-infrastruktur.html' },
                { name: 'Jasa Perbaikan Stadion', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-stadion.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }


    if (urlMappingJasaRenovasiTerminalPenumpangFromMoneyPageVariant[cleanUrlJasaPerbaikanKonsSub]) {
        generateBreadcrumbShared(
            urlMappingJasaRenovasiTerminalPenumpangFromMoneyPageVariant,
            cleanUrlJasaPerbaikanKonsSub,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Renovasi', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-renovasi.html' },
                { name: 'Perbandingan Jasa Renovasi', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-renovasi.html' },
                { name: 'Jasa Renovasi', url: 'https://www.betonjayareadymix.com/p/jasa-renovasi.html' },
                { name: 'Jasa Renovasi Terminal Penumpang', url: 'https://www.betonjayareadymix.com/p/jasa-renovasi-terminal-penumpang.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }

    if (urlMappingJasaRenovasiFasilitasFromMoneyPageVariant[cleanUrlJasaPerbaikanKonsSub]) {
        generateBreadcrumbShared(
            urlMappingJasaRenovasiFasilitasFromMoneyPageVariant,
            cleanUrlJasaPerbaikanKonsSub,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Renovasi', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-renovasi.html' },
                { name: 'Perbandingan Jasa Renovasi', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-renovasi.html' },
                { name: 'Jasa Renovasi', url: 'https://www.betonjayareadymix.com/p/jasa-renovasi.html' },
                { name: 'Jasa Renovasi Fasilitas', url: 'https://www.betonjayareadymix.com/p/jasa-renovasi-fasilitas.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }

    // ═══════════════════════════════════════════════════════
    // [BLOK 9] RENOVASI INTERIOR
    // ═══════════════════════════════════════════════════════

    if (urlMappingJasaRenovasiInteriorFromMoneyPageVariant [cleanUrlJasaPerbaikanKonsSub]) {
        generateBreadcrumbShared(
            urlMappingJasaRenovasiInteriorFromMoneyPageVariant ,
            cleanUrlJasaPerbaikanKonsSub,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Renovasi', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-renovasi.html' },
                { name: 'Perbandingan Jasa Renovasi', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-renovasi.html' },
                { name: 'Jasa Renovasi', url: 'https://www.betonjayareadymix.com/p/jasa-renovasi.html' },
                { name: 'Jasa Renovasi Interior', url: 'https://www.betonjayareadymix.com/p/jasa-renovasi-interior.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }

    // ═══════════════════════════════════════════════════════
    // [BLOK 10] RENOVASI EKSTERIOR
    // ═══════════════════════════════════════════════════════

    if (urlMappingJasaRenovasiEksteriorFromMoneyPageVariant[cleanUrlJasaPerbaikanKonsSub]) {
        generateBreadcrumbShared(
            urlMappingJasaRenovasiEksteriorFromMoneyPageVariant,
            cleanUrlJasaPerbaikanKonsSub,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Renovasi', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-renovasi.html' },
                { name: 'Perbandingan Jasa Renovasi', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-renovasi.html' },
                { name: 'Jasa Renovasi', url: 'https://www.betonjayareadymix.com/p/jasa-renovasi.html' },
                { name: 'Jasa Renovasi Eksterior', url: 'https://www.betonjayareadymix.com/p/jasa-renovasi-eksterior.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }

    // ═══════════════════════════════════════════════════════
    // [BLOK 11] RENOVASI FASAD BANGUNAN
    // ═══════════════════════════════════════════════════════

    if (urlMappingJasaRenovasiFasadBangunanFromMoneyPageVariant[cleanUrlJasaPerbaikanKonsSub]) {
        generateBreadcrumbShared(
            urlMappingJasaRenovasiFasadBangunanFromMoneyPageVariant,
            cleanUrlJasaPerbaikanKonsSub,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Renovasi', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-renovasi.html' },
                { name: 'Perbandingan Jasa Renovasi', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-renovasi.html' },
                { name: 'Jasa Renovasi', url: 'https://www.betonjayareadymix.com/p/jasa-renovasi.html' },
                { name: 'Jasa Renovasi Fasad Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-renovasi-fasad-bangunan.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }

    console.log('[jasa-perbaikan-kons] ✅ Semua breadcrumb selesai diproses');
}

// ═══════════════════════════════════════════════════════════
// [BAGIAN 4] FIX v2.1.0 — Handle DOMContentLoaded race condition
// ═══════════════════════════════════════════════════════════
// MASALAH: kalau script di-load SETELAH DOMContentLoaded fire
// (misal pakai defer/async), maka addEventListener tidak dipanggil.
// SOLUSI: cek document.readyState — kalau sudah siap, langsung
// panggil handler tanpa tunggu event.
// ═══════════════════════════════════════════════════════════

if (document.readyState === 'loading') {
    console.log('[jasa-perbaikan-kons] ⏳ DOM loading, tunggu event');
    document.addEventListener('DOMContentLoaded', initJasaPerbaikanKonsPost);
} else {
    console.log('[jasa-perbaikan-kons] ⚡ DOM ready, langsung execute');
    initJasaPerbaikanKonsPost();
}

// ============================================================
// AKHIR FILE — TIDAK ADA KARAKTER TAMBAHAN
// ============================================================
