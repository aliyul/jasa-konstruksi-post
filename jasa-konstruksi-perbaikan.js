// ============================================================
// JASA PERBAIKAN KONSTRUKSI — POST
// v2.2.0 — Early Exit v2.0.0 + Fix v2.1.0 + Pendekatan C
// ============================================================

console.log('[jasa-perbaikan-kons] 📄 File loaded, waiting for DOM...');
// ═════════════════════════════════════════════════════════════════════
// 📂 PARENT: jasa-plumbing (MM) ➔ CHILD: Money Page (8)
// 
// ✅ VERIFIED: 0 konflik dengan cluster Jasa Drainase (audit 2024-11-14)
// 
// 🚨 BOUNDARY WITH DRAINASE — JANGAN TAMBAH URL INI:
//    ❌ jasa-perbaikan-saluran-tersumbat    (ambiguous → Drainase)
//    ❌ jasa-perbaikan-saluran-air          (sudah di Drainase)
//    ❌ jasa-instalasi-saluran-buangan      (overlap sanitair)
//    ❌ jasa-instalasi-saluran-drainase     (drainase ≠ plumbing)
//    ❌ jasa-perbaikan-saluran-drainase     (sudah di Drainase)
//    ❌ jasa-instalasi-pipa-drainase        (sudah di Drainase MP)
// 
// ✅ BOUNDARY RULE:
//    Plumbing = dari DALAM rumah ke BATAS PROPERTI (air bersih)
//    Drainase  = dari BATAS PROPERTI ke SALURAN KOTA (air buangan)
// ═════════════════════════════════════════════════════════════════════
// 📂 PARENT: jasa-plumbing (MM) ➔ CHILD: Money Page (8)
// ═════════════════════════════════════════════════════════════════════
const urlMappingJasaPlumbingFromMoneyMasterMoneyPage = {

  // ─── Instalasi (5) ───
  "https://www.betonjayareadymix.com/p/jasa-instalasi-pipa-air.html":         "Jasa Instalasi Pipa Air",
  "https://www.betonjayareadymix.com/p/jasa-instalasi-sanitair.html":         "Jasa Instalasi Sanitair",
  "https://www.betonjayareadymix.com/p/jasa-instalasi-toren-tandon.html":     "Jasa Instalasi Toren Tandon",
  "https://www.betonjayareadymix.com/p/jasa-instalasi-air-pdam.html":         "Jasa Instalasi Air PDAM",
  "https://www.betonjayareadymix.com/p/jasa-instalasi-water-heater.html":     "Jasa Instalasi Water Heater",

  // ─── Perbaikan (2) ───
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-pipa-air-bocor.html":   "Jasa Perbaikan Pipa Air Bocor",
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-kran-air.html":         "Jasa Perbaikan Kran Air",

  // ─── Service (1) ───
  "https://www.betonjayareadymix.com/p/jasa-service-pompa-air.html":          "Jasa Service Pompa Air"
};
// ═════════════════════════════════════════════════════════════════════
// 📂 PARENT: jasa-instalasi-pipa-air (MP) ➔ CHILD: Variant (4)
// ═════════════════════════════════════════════════════════════════════
const urlMappingJasaInstalasiPipaAirFromMoneyPageVariant = {
  "https://www.betonjayareadymix.com/p/jasa-instalasi-pipa-pvc.html":         "Jasa Instalasi Pipa PVC",
  "https://www.betonjayareadymix.com/p/jasa-instalasi-pipa-ppr.html":         "Jasa Instalasi Pipa PPR",
  "https://www.betonjayareadymix.com/p/jasa-instalasi-pipa-tembaga.html":     "Jasa Instalasi Pipa Tembaga",
  "https://www.betonjayareadymix.com/p/jasa-instalasi-pipa-hdpe.html":        "Jasa Instalasi Pipa HDPE"
};

// ═════════════════════════════════════════════════════════════════════
// 📂 PARENT: jasa-perbaikan-pipa-air-bocor (MP) ➔ CHILD: Variant (4)
// ═════════════════════════════════════════════════════════════════════
const urlMappingJasaPerbaikanPipaAirBocorFromMoneyPageVariant = {
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-pipa-bocor-dalam-dinding.html": "Jasa Perbaikan Pipa Bocor Dalam Dinding",
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-pipa-bocor-tanah.html":         "Jasa Perbaikan Pipa Bocor Tanah",
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-pipa-bocor-atap.html":          "Jasa Perbaikan Pipa Bocor Atap",
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-pipa-bocor-kamar-mandi.html":   "Jasa Perbaikan Pipa Bocor Kamar Mandi"
};

// ═════════════════════════════════════════════════════════════════════
// 📂 PARENT: jasa-service-pompa-air (MP) ➔ CHILD: Variant (3)
// ═════════════════════════════════════════════════════════════════════
const urlMappingJasaServicePompaAirFromMoneyPageVariant = {
  "https://www.betonjayareadymix.com/p/jasa-service-jet-pump.html":           "Jasa Service Jet Pump",
  "https://www.betonjayareadymix.com/p/jasa-service-pompa-submersible.html":  "Jasa Service Pompa Submersible",
  "https://www.betonjayareadymix.com/p/jasa-service-pompa-booster.html":      "Jasa Service Pompa Booster"
};

// ═════════════════════════════════════════════════════════════════════
// 📂 PARENT: jasa-instalasi-sanitair (MP) ➔ CHILD: Variant (4)
// ═════════════════════════════════════════════════════════════════════
const urlMappingJasaInstalasiSanitairFromMoneyPageVariant = {
  "https://www.betonjayareadymix.com/p/jasa-instalasi-kloset.html":           "Jasa Instalasi Kloset",
  "https://www.betonjayareadymix.com/p/jasa-instalasi-wastafel.html":         "Jasa Instalasi Wastafel",
  "https://www.betonjayareadymix.com/p/jasa-instalasi-shower.html":           "Jasa Instalasi Shower",
  "https://www.betonjayareadymix.com/p/jasa-instalasi-kran.html":             "Jasa Instalasi Kran"
};

// ═════════════════════════════════════════════════════════════════════
// 📂 PARENT: jasa-instalasi-toren-tandon (MP) ➔ CHILD: Variant (2)
// ═════════════════════════════════════════════════════════════════════
const urlMappingJasaInstalasiTorenTandonFromMoneyPageVariant = {
  "https://www.betonjayareadymix.com/p/jasa-instalasi-toren-air.html":        "Jasa Instalasi Toren Air",
  "https://www.betonjayareadymix.com/p/jasa-instalasi-tandon-air.html":       "Jasa Instalasi Tandon Air"
};

// ═════════════════════════════════════════════════════════════════════
// 📂 PARENT: jasa-instalasi-air-pdam (MP) ➔ CHILD: Variant (2)
// ═════════════════════════════════════════════════════════════════════
const urlMappingJasaInstalasiAirPdamFromMoneyPageVariant = {
  "https://www.betonjayareadymix.com/p/jasa-pasang-air-pdam-baru.html":       "Jasa Pasang Air PDAM Baru",
  "https://www.betonjayareadymix.com/p/jasa-balik-nama-pdam.html":            "Jasa Balik Nama PDAM"
};

// ═════════════════════════════════════════════════════════════════════
// 📂 PARENT: jasa-instalasi-water-heater (MP) ➔ CHILD: Variant (2)
// ═════════════════════════════════════════════════════════════════════
const urlMappingJasaInstalasiWaterHeaterFromMoneyPageVariant = {
  "https://www.betonjayareadymix.com/p/jasa-instalasi-water-heater-listrik.html": "Jasa Instalasi Water Heater Listrik",
  "https://www.betonjayareadymix.com/p/jasa-instalasi-water-heater-gas.html":     "Jasa Instalasi Water Heater Gas"
};

// ═════════════════════════════════════════════════════════════════════
// 📂 PARENT: jasa-perbaikan-kran-air (MP) ➔ CHILD: Variant (2)
// ═════════════════════════════════════════════════════════════════════
const urlMappingJasaPerbaikanKranAirFromMoneyPageVariant = {
  "https://www.betonjayareadymix.com/p/jasa-ganti-kran-air.html":             "Jasa Ganti Kran Air",
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-kran-bocor.html":       "Jasa Perbaikan Kran Bocor"
};
//AKHIR JASA PLUMBING

//JASA PERBAIAN BANGUNAN
// ═════════════════════════════════════════════════════════════════════
// 📂 PARENT: jasa-perbaikan-beton (MP) ➔ CHILD: Variant (16)
// = 12 kategori + 4 moved from struktur-bangunan
// 
// ❌ REMOVED: bobok, injeksi, shotcrete, tambal (promoted to MP)
// ═════════════════════════════════════════════════════════════════════
const urlMappingJasaPerbaikanBetonFromMoneyPageVariant = {

  // ─── 12 KATEGORI PERBAIKAN ───
  "https://www.betonjayareadymix.com/2018/09/jasa-perbaikan-beton-delaminasi.html":           "Jasa Perbaikan Beton Delaminasi",
  "https://www.betonjayareadymix.com/2018/09/jasa-perbaikan-retak-struktural-beton.html":     "Jasa Perbaikan Retak Struktural Beton",
  "https://www.betonjayareadymix.com/2018/09/jasa-perbaikan-beton-akibat-korosi.html":        "Jasa Perbaikan Beton Akibat Korosi",
  "https://www.betonjayareadymix.com/2018/09/jasa-perbaikan-beton-akibat-overload.html":      "Jasa Perbaikan Beton Akibat Overload",
  "https://www.betonjayareadymix.com/2018/09/jasa-perbaikan-beton-akibat-asr.html":           "Jasa Perbaikan Beton Akibat ASR",
  "https://www.betonjayareadymix.com/2018/09/jasa-perbaikan-beton-serangan-sulfat.html":      "Jasa Perbaikan Beton Serangan Sulfat",
  "https://www.betonjayareadymix.com/2018/09/jasa-perbaikan-beton-area-pesisir.html":         "Jasa Perbaikan Beton Area Pesisir",
  "https://www.betonjayareadymix.com/2018/09/jasa-perbaikan-beton-area-industri.html":        "Jasa Perbaikan Beton Area Industri",
  "https://www.betonjayareadymix.com/2018/09/jasa-rehabilitasi-struktur-beton-lama.html":     "Jasa Rehabilitasi Struktur Beton Lama",
  "https://www.betonjayareadymix.com/2018/09/jasa-retrofit-struktur-beton-eksisting.html":    "Jasa Retrofit Struktur Beton Eksisting",
  "https://www.betonjayareadymix.com/2018/09/jasa-peningkatan-kapasitas-struktur-beton.html": "Jasa Peningkatan Kapasitas Struktur Beton",
  "https://www.betonjayareadymix.com/2018/09/jasa-perpanjangan-umur-struktur-beton.html":     "Jasa Perpanjangan Umur Struktur Beton",

  // ─── 4 FROM STRUKTUR-BANGUNAN ───
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-beton-mengelupas.html":  "Jasa Perbaikan Beton Mengelupas",
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-beton-keropos.html":     "Jasa Perbaikan Beton Keropos",
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-beton-retak.html":       "Jasa Perbaikan Beton Retak",
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-beton-karbonasi.html":   "Jasa Perbaikan Beton Karbonasi"
};
// ═════════════════════════════════════════════════════════════════════
// 📂 PARENT: jasa-injeksi-beton (MP) ➔ CHILD: Variant (1)
// Pricing variant (was SV under Variant, promoted to Variant under MP)
// ═════════════════════════════════════════════════════════════════════
const urlMappingJasaInjeksiBetonFromMoneyPageVariant = {
  "https://www.betonjayareadymix.com/2018/09/harga-jasa-injeksi-beton.html": "Harga Jasa Injeksi Beton"
}; 
// ═════════════════════════════════════════════════════════════════════
// 📂 PARENT: jasa-bobok-beton (MP) ➔ CHILD: Variant (5)
// 🆕 PROMOTED — bobok jadi MP karena punya multi-spec (per-m2, per-m3, lantai, chipping)
// ═════════════════════════════════════════════════════════════════════
const urlMappingJasaBobokBetonFromMoneyPageVariant = {
  "https://www.betonjayareadymix.com/p/harga-jasa-bobok-beton.html":          "Harga Jasa Bobok Beton",
  "https://www.betonjayareadymix.com/p/harga-jasa-bobok-beton-per-m2.html":    "Harga Jasa Bobok Beton per m2",
  "https://www.betonjayareadymix.com/p/harga-jasa-bobok-beton-per-m3.html":    "Harga Jasa Bobok Beton per m3",
  "https://www.betonjayareadymix.com/p/jasa-bobok-lantai-beton.html":          "Jasa Bobok Lantai Beton",
  "https://www.betonjayareadymix.com/p/jasa-bobok-beton-chipping.html":             "Jasa Bobok Beton Chipping"
};
const urlMappingJasaShotcreteBetonFromMoneyPageVariant = {
  "https://www.betonjayareadymix.com/2018/09/harga-jasa-shotcrete-beton.html": "Harga Jasa Shotcrete Beton"
};
const urlMappingJasaTambalBetonFromMoneyPageVariant = {
  "https://www.betonjayareadymix.com/2018/09/borongan-tambal-beton.html":   "Borongan Tambal Beton",
  "https://www.betonjayareadymix.com/2018/09/jasa-tambal-beton-retak.html":"Jasa Tambal Beton Retak"
};
// ═════════════════════════════════════════════════════════════════════
// 📂 PARENT: jasa-perbaikan-struktur-bangunan (MP) ➔ CHILD: Variant (11)
// 
// 🆕 MOVED 4 beton ke MP jasa-perbaikan-beton (Opsi A):
//    - jasa-perbaikan-beton-mengelupas
//    - jasa-perbaikan-beton-keropos
//    - jasa-perbaikan-beton-retak
//    - jasa-perbaikan-beton-karbonasi
// ═════════════════════════════════════════════════════════════════════
// 📂 PARENT: jasa-perbaikan-struktur-bangunan (MP) ➔ CHILD: Variant (11)
// 
// 🆕 MOVED 4 beton ke MP jasa-perbaikan-beton (Opsi A):
//    - beton-mengelupas, beton-keropos, beton-retak, beton-karbonasi
// ═════════════════════════════════════════════════════════════════════
const urlMappingJasaPerbaikanStrukturBangunanFromMoneyPageVariant = {
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-struktur-rumah.html":              "Jasa Perbaikan Struktur Rumah",
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-struktur-bangunan-tua.html":       "Jasa Perbaikan Struktur Bangunan Tua",
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-struktur-bangunan-miring.html":    "Jasa Perbaikan Struktur Bangunan Miring",
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-struktur-beton.html":              "Jasa Perbaikan Struktur Beton",
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-struktur-dinding.html":            "Jasa Perbaikan Struktur Dinding",
  "https://www.betonjayareadymix.com/p/jasa-straightening-bangunan-miring.html":         "Jasa Straightening Bangunan Miring",
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-struktur-kolom-beton.html":        "Jasa Perbaikan Struktur Kolom Beton",
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-balok-gantung.html":               "Jasa Perbaikan Balok Gantung",
  "https://www.betonjayareadymix.com/p/jasa-bobok-dinding-instalasi.html":               "Jasa Bobok Dinding Instalasi",
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-sambungan-beton.html":             "Jasa Perbaikan Sambungan Beton",
  "https://www.betonjayareadymix.com/p/jasa-grouting-struktur-beton.html":               "Jasa Grouting Struktur Beton"
};
// ═════════════════════════════════════════════════════════════════════
// 📂 PARENT: jasa-perbaikan-lantai-bangunan (MP) ➔ CHILD: Variant (4)
// ═════════════════════════════════════════════════════════════════════
const urlMappingJasaPerbaikanLantaiBangunanFromMoneyPageVariant = {
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-lantai-struktur.html":        "Jasa Perbaikan Lantai Struktur",
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-lantai-rusak.html":           "Jasa Perbaikan Lantai Rusak",
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-lantai-ambles.html":          "Jasa Perbaikan Lantai Ambles",
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-lantai-retak.html":           "Jasa Perbaikan Lantai Retak",
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-keramik-menggelembung.html":  "Jasa Perbaikan Keramik Menggelembung"
};

// ═════════════════════════════════════════════════════════════════════
// 📂 PARENT: jasa-perbaikan-struktur-beton (Variant) ➔ CHILD: SV (15)
// 🆕 SPLIT dari multi-parent old const
// ═════════════════════════════════════════════════════════════════════
const urlMappingJasaPerbaikanStrukturBetonFromVariantSubVariant = {
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-struktur-kolom-balok.html":        "Jasa Perbaikan Struktur Kolom Balok",
  "https://www.betonjayareadymix.com/p/jasa-rehabilitasi-beton-struktur.html":           "Jasa Rehabilitasi Beton Struktur",
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-struktur-balok-beton.html":        "Jasa Perbaikan Struktur Balok Beton",
  "https://www.betonjayareadymix.com/p/jasa-perkuatan-kolom-beton.html":                 "Jasa Perkuatan Kolom Beton",
  "https://www.betonjayareadymix.com/p/jasa-perkuatan-balok-beton.html":                 "Jasa Perkuatan Balok Beton",
  "https://www.betonjayareadymix.com/p/jasa-jacketing-kolom-balok.html":                 "Jasa Jacketing Kolom Balok",
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-struktur-tiang-beton.html":        "Jasa Perbaikan Struktur Tiang Beton",
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-struktur-lantai-beton.html":       "Jasa Perbaikan Struktur Lantai Beton",
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-retakan-lantai-beton.html":        "Jasa Perbaikan Retakan Lantai Beton",
  "https://www.betonjayareadymix.com/p/jasa-perkuatan-lantai-beton.html":                "Jasa Perkuatan Lantai Beton",
  "https://www.betonjayareadymix.com/p/jasa-perkuatan-struktur-cfrp.html":               "Jasa Perkuatan Struktur CFRP",
  "https://www.betonjayareadymix.com/p/jasa-pelapisan-anti-korosi-beton.html":           "Jasa Pelapisan Anti Korosi Beton",
  "https://www.betonjayareadymix.com/p/jasa-patching-beton-retak.html":                  "Jasa Patching Beton Retak",
  "https://www.betonjayareadymix.com/p/jasa-injeksi-beton-retak.html":                   "Jasa Injeksi Beton Retak",
  "https://www.betonjayareadymix.com/p/jasa-aplikasi-shotcrete-beton.html":              "Jasa Aplikasi Shotcrete Beton"
};

// ═════════════════════════════════════════════════════════════════════
// 📂 PARENT: jasa-perbaikan-struktur-dinding (Variant) ➔ CHILD: SV (4)
// 🆕 SPLIT dari urlMappingJasaPerbaikanStrukturBangunanFromVariantSubVariant
// ═════════════════════════════════════════════════════════════════════
const urlMappingJasaPerbaikanStrukturDindingFromVariantSubVariant = {
  "https://www.betonjayareadymix.com/p/jasa-injeksi-dinding-retak.html":                 "Jasa Injeksi Dinding Retak",
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-struktur-dinding-retak.html":      "Jasa Perbaikan Struktur Dinding Retak",
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-struktur-dinding-lembab.html":     "Jasa Perbaikan Struktur Dinding Lemhab",
  "https://www.betonjayareadymix.com/p/jasa-penggantian-dinding-bata.html":              "Jasa Penggantian Dinding Bata"
};


// ═════════════════════════════════════════════════════════════════════
// 📂 PARENT: jasa-perbaikan-lantai-ambles (Variant) ➔ CHILD: SV (1)
// ═════════════════════════════════════════════════════════════════════
const urlMappingJasaPerbaikanLantaiAmblesFromVariantSubVariant = {
  "https://www.betonjayareadymix.com/p/jasa-ganti-lantai-ambles.html": "Jasa Ganti Lantai Ambles"
};

// ═════════════════════════════════════════════════════════════════════
// 📂 PARENT: jasa-perbaikan-atap-bangunan (MP) ➔ CHILD: Variant (6)
// ═════════════════════════════════════════════════════════════════════
const urlMappingJasaPerbaikanAtapBangunanFromMoneyPageVariant = {
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-struktur-atap.html":              "Jasa Perbaikan Struktur Atap",
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-struktur-rangka-atap.html":       "Jasa Perbaikan Struktur Rangka Atap",  // ← fixed typo (stuktur → struktur)
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-rangka-atap-baja-ringan.html":    "Jasa Perbaikan Rangka Atap Baja Ringan",
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-dak-beton-bocor.html":            "Jasa Perbaikan Dak Beton Bocor",
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-talang-bocor.html":               "Jasa Perbaikan Talang Bocor",
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-genteng-bocor.html":              "Jasa Perbaikan Genteng Bocor",
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-atap-bocor.html":                 "Jasa Perbaikan Atap Bocor",
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-roof-deck.html":                  "Jasa Perbaikan Roof Deck"
};

// ═════════════════════════════════════════════════════════════════════
// 📂 PARENT: jasa-perbaikan-struktur-atap (Variant) ➔ CHILD: SV (1)
// ═════════════════════════════════════════════════════════════════════
const urlMappingJasaPerbaikanStrukturAtapFromVariantSubVariant = {
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-struktur-atap-gudang.html": "Jasa Perbaikan Struktur Atap Gudang"
};

const urlMappingJasaBobokLantaiBetonFromVariantSubVariant = {
  "https://www.betonjayareadymix.com/p/harga-jasa-bobok-lantai-beton-per-m2.html": "Harga Jasa Bobok Lantai Beton per m2"
};
// ═════════════════════════════════════════════════════════════════════
// 📂 PARENT: jasa-perbaikan-elemen-arsitektural (MP) ➔ CHILD: Variant (5)
// ═════════════════════════════════════════════════════════════════════
const urlMappingJasaPerbaikanElemenArsitekturalFromMoneyPageVariant = {
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-dinding-retak.html":   "Jasa Perbaikan Dinding Retak",
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-plafon-rusak.html":    "Jasa Perbaikan Plafon Rusak",
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-plester-retak.html":   "Jasa Perbaikan Plester Retak",
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-tangga-retak.html":    "Jasa Perbaikan Tangga Retak",
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-partisi-rusak.html":   "Jasa Perbaikan Partisi Rusak"
};
// ═════════════════════════════════════════════════════════════════════
// 📂 PARENT: jasa-perbaikan-waterproofing-bangunan (MP) ➔ Variant (3)
// ═════════════════════════════════════════════════════════════════════
const urlMappingJasaPerbaikanWaterproofingBangunanFromMoneyPageVariant = {
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-rembesan-air.html":   "Jasa Perbaikan Rembesan Air",
  "https://www.betonjayareadymix.com/p/jasa-coating-anti-bocor.html":        "Jasa Coating Anti Bocor",
  "https://www.betonjayareadymix.com/p/jasa-injeksi-anti-bocor.html":        "Jasa Injeksi Anti Bocor"
};

// ═════════════════════════════════════════════════════════════════════
// 📂 PARENT: jasa-perbaikan-gedung-bertingkat (MP) ➔ CHILD: Variant (1)
// 🆕 RENAMED dari FromMoneyPageSubVariant (MP→SV salah) ke FromMoneyPageVariant
// ═════════════════════════════════════════════════════════════════════
const urlMappingJasaPerbaikanGedungBertingkatFromMoneyPageVariant = {
  "https://www.betonjayareadymix.com/p/jasa-perkuatan-gedung-bertingkat.html": "Jasa Perkuatan Gedung Bertingkat"
};

// ❌ DELETE CONST INI KANA BAGIAN DARI DRAINASE
// const urlMappingJasaPerbaikanSaluranAirFromMoneyPageVariant = {
//   "https://www.betonjayareadymix.com/p/jasa-perbaikan-saluran-air-tersumbat.html": "Jasa Perbaikan Saluran Air Tersumbat",
//   "https://www.betonjayareadymix.com/p/jasa-perbaikan-saluran-air-kotor.html":     "Jasa Perbaikan Saluran Air Kotor",
//   "https://www.betonjayareadymix.com/p/jasa-perbaikan-saluran-air-hujan.html":     "Jasa Perbaikan Saluran Air Hujan",
//   "https://www.betonjayareadymix.com/p/jasa-perbaikan-pipa-bocor.html":            "Jasa Perbaikan Pipa Bocor"
// };

// ═════════════════════════════════════════════════════════════════════
// CATATAN: 
// - 3 URL saluran-air SV (tersumbat, kotor, hujan) → MOVE ke Jasa Drainase
//   (di-handle di file Jasa Drainase, bukan di sini)
// - 1 URL pipa-bocor → RENAME (keep di sini as MP baru)
// - jasa-perbaikan-saluran-air (MP) → REDIRECT (di redirect map)
// ═════════════════════════════════════════════════════════════════════

/*
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
*/

/*
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
*/


//Jasa Perbaikan Infrastruktur
// ═════════════════════════════════════════════════════════════════════
// 📂 PARENT: jasa-perbaikan-jalan (MP) ➔ CHILD: Variant (19)
// 
// 🆕 SOURCE: 19 dari 23 "Jalan move" (3 trotoar → Trotoar MP, 1 halte → Halte MP)
// ⚠️  Level overrides needed: 5 was-MP + 6 was-SV → Variant
// ═════════════════════════════════════════════════════════════════════
const urlMappingJasaPerbaikanJalanFromMoneyPageVariant = {

  // ─── Material-based (2) ───
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-jalan-aspal.html":              "Jasa Perbaikan Jalan Aspal",       // was MP → Variant
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-jalan-beton.html":              "Jasa Perbaikan Jalan Beton",       // was MP → Variant

  // ─── Metode/cakupan (3) ───
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-jalan-coring-beton.html":       "Jasa Perbaikan Jalan Coring Beton",// was MP → Variant
  "https://www.betonjayareadymix.com/p/jasa-bongkar-pasang-jalan-paving.html":        "Jasa Bongkar Pasang Jalan Paving", // was MP → Variant
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-jalan-perumahan.html":          "Jasa Perbaikan Jalan Perumahan",   // was MP → Variant

  // ─── Kerusakan spesifik (5) ───
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-jalan-berlubang.html":          "Jasa Perbaikan Jalan Berlubang",
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-jalan-ambles.html":             "Jasa Perbaikan Jalan Ambles",
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-jalan-retak.html":              "Jasa Perbaikan Jalan Retak",
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-permukaan-jalan.html":          "Jasa Perbaikan Permukaan Jalan",
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-jalan-paving.html":             "Jasa Perbaikan Jalan Paving",

  // ─── Tipe jalan (3) ───
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-jalan-komplek.html":            "Jasa Perbaikan Jalan Komplek",
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-jalan-raya.html":               "Jasa Perbaikan Jalan Raya",
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-jalan-perusahaan.html":         "Jasa Perbaikan Jalan Perusahaan",

  // ─── Metode advanced (6) — was SV → Variant ───
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-jalan-rusak-berat.html":        "Jasa Perbaikan Jalan Rusak Berat",
  "https://www.betonjayareadymix.com/p/jasa-overlay-jalan-aspal.html":                "Jasa Overlay Jalan Aspal",
  "https://www.betonjayareadymix.com/p/jasa-rekonstruksi-jalan-beton.html":           "Jasa Rekonstruksi Jalan Beton",
  "https://www.betonjayareadymix.com/p/jasa-penambalan-jalan-berlubang.html":         "Jasa Penambalan Jalan Berlubang",
  "https://www.betonjayareadymix.com/p/jasa-repair-jalan-dengan-cold-mix.html":       "Jasa Repair Jalan dengan Cold Mix",
  "https://www.betonjayareadymix.com/p/jasa-marking-jalan-dan-repair.html":           "Jasa Marking Jalan dan Repair"
};
// ═════════════════════════════════════════════════════════════════════
// 📂 PARENT: jasa-perbaikan-jembatan (MP) ➔ CHILD: Variant (7)
// ═════════════════════════════════════════════════════════════════════
const urlMappingJasaPerbaikanJembatanFromMoneyPageVariant = {
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-struktur-jembatan.html":        "Jasa Perbaikan Struktur Jembatan",
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-jembatan-beton.html":           "Jasa Perbaikan Jembatan Beton",
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-jembatan-besi.html":            "Jasa Perbaikan Jembatan Besi",
  "https://www.betonjayareadymix.com/p/jasa-rehabilitasi-jembatan.html":              "Jasa Rehabilitasi Jembatan",
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-fondasi-jembatan.html":         "Jasa Perbaikan Fondasi Jembatan",
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-lantai-jembatan.html":          "Jasa Perbaikan Lantai Jembatan",
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-balok-jembatan.html":           "Jasa Perbaikan Balok Jembatan"
};
// ═════════════════════════════════════════════════════════════════════
// 📂 PARENT: jasa-perbaikan-jembatan-beton (Variant) ➔ CHILD: SV (4)
// ═════════════════════════════════════════════════════════════════════
const urlMappingJasaPerbaikanJembatanBetonFromVariantSubVariant = {
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-retak-jembatan-beton.html":     "Jasa Perbaikan Retak Jembatan Beton",
  "https://www.betonjayareadymix.com/p/jasa-rekonstruksi-jembatan-beton.html":        "Jasa Rekonstruksi Jembatan Beton",
  "https://www.betonjayareadymix.com/p/jasa-chipping-jembatan-beton.html":            "Jasa Chipping Jembatan Beton",
  "https://www.betonjayareadymix.com/p/jasa-injeksi-retak-jembatan.html":             "Jasa Injeksi Retak Jembatan"
};
// ═════════════════════════════════════════════════════════════════════
// 📂 PARENT: jasa-perbaikan-struktur-jembatan (Variant) ➔ CHILD: SV (3)
// ═════════════════════════════════════════════════════════════════════
const urlMappingJasaPerbaikanStrukturJembatanFromVariantSubVariant = {
  "https://www.betonjayareadymix.com/p/jasa-perkuatan-struktur-jembatan.html":        "Jasa Perkuatan Struktur Jembatan",
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-tiang-penyangga-jembatan.html": "Jasa Perbaikan Tiang Penyangga Jembatan",
  "https://www.betonjayareadymix.com/p/jasa-aplikasi-shotcrete-jembatan.html":        "Jasa Aplikasi Shotcrete Jembatan"
};
// ═════════════════════════════════════════════════════════════════════
// 📂 PARENT: jasa-perbaikan-trotoar (MP) ➔ CHILD: Variant (2)
// ═════════════════════════════════════════════════════════════════════
const urlMappingJasaPerbaikanTrotoarFromMoneyPageVariant = {
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-trotoar-jalan.html":            "Jasa Perbaikan Trotoar Jalan",
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-trotoar-beton.html":            "Jasa Perbaikan Trotoar Beton"
};
// ═════════════════════════════════════════════════════════════════════
// 📂 PARENT: jasa-perbaikan-trotoar-jalan (Variant) ➔ CHILD: SV (1)
// ═════════════════════════════════════════════════════════════════════
const urlMappingJasaPerbaikanTrotoarJalanFromVariantSubVariant = {
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-trotoar-jalan-rusak.html":      "Jasa Perbaikan Trotoar Jalan Rusak"
};
// ═════════════════════════════════════════════════════════════════════
// 📂 PARENT: jasa-perbaikan-stadion (MP) ➔ CHILD: Variant (5)
// 
// 🆕 NOTE: perbaikan-fasilitas-penonton-stadion → RENAME ke jasa-perbaikan-...
// ═════════════════════════════════════════════════════════════════════
const urlMappingJasaPerbaikanStadionFromMoneyPageVariant = {
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-atap-stadion.html":             "Jasa Perbaikan Atap Stadion",
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-lintasan-atletik.html":         "Jasa Perbaikan Lintasan Atletik",
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-pencahayaan-stadion.html":      "Jasa Perbaikan Pencahayaan Stadion",
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-struktur-stadion.html":         "Jasa Perbaikan Struktur Stadion",
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-fasilitas-penonton-stadion.html": "Jasa Perbaikan Fasilitas Penonton Stadion"  // 🆕 renamed
};
// ═════════════════════════════════════════════════════════════════════
// 📂 PARENT: jasa-perbaikan-terminal-penumpang (MP) ➔ CHILD: Variant (3)
// 🆕 FROM MOVE RENOVASI
// ═════════════════════════════════════════════════════════════════════
const urlMappingJasaPerbaikanTerminalPenumpangFromMoneyPageVariant = {
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-dinding-terminal.html":         "Jasa Perbaikan Dinding Terminal",
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-pagar-terminal.html":           "Jasa Perbaikan Pagar Terminal",
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-penerangan-terminal.html":      "Jasa Perbaikan Penerangan Terminal"
};
// ═════════════════════════════════════════════════════════════════════
// 📂 PARENT: jasa-perbaikan-halte-bus (MP) ➔ CHILD: Variant (4)
// 🆕 FROM MOVE RENOVASI (4 komponen halte)
// ═════════════════════════════════════════════════════════════════════
const urlMappingJasaPerbaikanHalteBusFromMoneyPageVariant = {
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-kanopi-halte.html":             "Jasa Perbaikan Kanopi Halte",
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-penerangan-halte.html":        "Jasa Perbaikan Penerangan Halte",
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-lantai-halte.html":             "Jasa Perbaikan Lantai Halte",
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-tempat-duduk-halte.html":      "Jasa Perbaikan Tempat Duduk Halte"
};
// ═════════════════════════════════════════════════════════════════════
// 📂 PARENT: jasa-perbaikan-taman-kota (MP) ➔ CHILD: Variant (3)
// 🆕 FROM MOVE RENOVASI
// ═════════════════════════════════════════════════════════════════════
const urlMappingJasaPerbaikanTamanKotaFromMoneyPageVariant = {
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-fasilitas-taman.html":          "Jasa Perbaikan Fasilitas Taman",
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-jalur-pedestrian-taman.html":   "Jasa Perbaikan Jalur Pedestrian Taman",
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-area-bermain-anak-taman.html":  "Jasa Perbaikan Area Bermain Anak Taman"
};

//JASA RENOVASI
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
  "https://www.betonjayareadymix.com/p/harga-jasa-renovasi-rumah-subsidi.html": "Harga Jasa Renovasi Rumah Subsidi"
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
       urlMappingJasaPlumbingFromMoneyMasterMoneyPage,
      urlMappingJasaInstalasiPipaAirFromMoneyPageVariant,
      urlMappingJasaPerbaikanPipaAirBocorFromMoneyPageVariant,
      urlMappingJasaServicePompaAirFromMoneyPageVariant,
      urlMappingJasaInstalasiSanitairFromMoneyPageVariant,
      urlMappingJasaInstalasiTorenTandonFromMoneyPageVariant,
      urlMappingJasaInstalasiAirPdamFromMoneyPageVariant,
      urlMappingJasaInstalasiWaterHeaterFromMoneyPageVariant,
      urlMappingJasaPerbaikanKranAirFromMoneyPageVariant,
      

      urlMappingJasaPerbaikanBetonFromMoneyPageVariant,
      urlMappingJasaInjeksiBetonFromMoneyPageVariant,
      urlMappingJasaBobokBetonFromMoneyPageVariant,
      urlMappingJasaShotcreteBetonFromMoneyPageVariant,
      urlMappingJasaTambalBetonFromMoneyPageVariant,
      urlMappingJasaPerbaikanStrukturBetonFromVariantSubVariant,
      urlMappingJasaPerbaikanStrukturDindingFromVariantSubVariant,
    
      urlMappingJasaPerbaikanStrukturBangunanFromMoneyPageVariant,       
        urlMappingJasaPerbaikanLantaiBangunanFromMoneyPageVariant,
        urlMappingJasaPerbaikanLantaiAmblesFromVariantSubVariant,
       urlMappingJasaPerbaikanAtapBangunanFromMoneyPageVariant,
        urlMappingJasaPerbaikanStrukturAtapFromVariantSubVariant,
      urlMappingJasaBobokLantaiBetonFromVariantSubVariant,
      
       urlMappingJasaPerbaikanElemenArsitekturalFromMoneyPageVariant,
        urlMappingJasaPerbaikanWaterproofingBangunanFromMoneyPageVariant,
       urlMappingJasaPerbaikanGedungBertingkatFromMoneyPageVariant,

       urlMappingJasaPerbaikanJalanFromMoneyPageVariant,
      urlMappingJasaPerbaikanJembatanFromMoneyPageVariant,
      urlMappingJasaPerbaikanJembatanBetonFromVariantSubVariant,
      urlMappingJasaPerbaikanStrukturJembatanFromVariantSubVariant,
      urlMappingJasaPerbaikanTrotoarFromMoneyPageVariant,
      urlMappingJasaPerbaikanTrotoarJalanFromVariantSubVariant,
      urlMappingJasaPerbaikanStadionFromMoneyPageVariant,
      urlMappingJasaPerbaikanTerminalPenumpangFromMoneyPageVariant,    
      urlMappingJasaPerbaikanHalteBusFromMoneyPageVariant,
      urlMappingJasaPerbaikanTamanKotaFromMoneyPageVariant,

      urlMappingJasaRenovasiFromMoneyMasterAreaMP,
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
    // [BLOK JASA PLUMBING]
    // ═══════════════════════════════════════════════════════
    if (urlMappingJasaPlumbingFromMoneyMasterMoneyPage[cleanUrlJasaPerbaikanKonsSub]) {
        generateBreadcrumbShared(
            urlMappingJasaPlumbingFromMoneyMasterMoneyPage,
            cleanUrlJasaPerbaikanKonsSub,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Plumbing', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-plumbing.html' },
                { name: 'Perbandingan Jasa Plumbing', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-plumbing.html' },
                { name: 'Jasa Plumbing', url: 'https://www.betonjayareadymix.com/p/jasa-plumbing.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }
   if (urlMappingJasaInstalasiPipaAirFromMoneyPageVariant[cleanUrlJasaPerbaikanKonsSub]) {
        generateBreadcrumbShared(
            urlMappingJasaInstalasiPipaAirFromMoneyPageVariant,
            cleanUrlJasaPerbaikanKonsSub,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Plumbing', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-plumbing.html' },
                { name: 'Perbandingan Jasa Plumbing', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-plumbing.html' },
                { name: 'Jasa Plumbing', url: 'https://www.betonjayareadymix.com/p/jasa-plumbing.html' },
                { name: 'Jasa Instalasi Pipa Air', url: 'https://www.betonjayareadymix.com/p/jasa-instalasi-pipa-air.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }
  if (urlMappingJasaPerbaikanPipaAirBocorFromMoneyPageVariant[cleanUrlJasaPerbaikanKonsSub]) {
        generateBreadcrumbShared(
            urlMappingJasaPerbaikanPipaAirBocorFromMoneyPageVariant,
            cleanUrlJasaPerbaikanKonsSub,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Plumbing', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-plumbing.html' },
                { name: 'Perbandingan Jasa Plumbing', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-plumbing.html' },
                { name: 'Jasa Plumbing', url: 'https://www.betonjayareadymix.com/p/jasa-plumbing.html' },
                { name: 'Jasa Perbaikan Pipa Air Bocor', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-pipa-air-bocor.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }
  if (urlMappingJasaServicePompaAirFromMoneyPageVariant[cleanUrlJasaPerbaikanKonsSub]) {
        generateBreadcrumbShared(
            urlMappingJasaServicePompaAirFromMoneyPageVariant,
            cleanUrlJasaPerbaikanKonsSub,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Plumbing', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-plumbing.html' },
                { name: 'Perbandingan Jasa Plumbing', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-plumbing.html' },
                { name: 'Jasa Plumbing', url: 'https://www.betonjayareadymix.com/p/jasa-plumbing.html' },
                { name: 'Jasa Service Pompa Air', url: 'https://www.betonjayareadymix.com/p/jasa-service-pompa-air.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }
    if (urlMappingJasaInstalasiSanitairFromMoneyPageVariant[cleanUrlJasaPerbaikanKonsSub]) {
        generateBreadcrumbShared(
            urlMappingJasaInstalasiSanitairFromMoneyPageVariant,
            cleanUrlJasaPerbaikanKonsSub,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Plumbing', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-plumbing.html' },
                { name: 'Perbandingan Jasa Plumbing', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-plumbing.html' },
                { name: 'Jasa Plumbing', url: 'https://www.betonjayareadymix.com/p/jasa-plumbing.html' },
                { name: 'Jasa Instalasi Sanitair', url: 'https://www.betonjayareadymix.com/p/jasa-instalasi-sanitair.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }
   if (urlMappingJasaInstalasiTorenTandonFromMoneyPageVariant[cleanUrlJasaPerbaikanKonsSub]) {
        generateBreadcrumbShared(
            urlMappingJasaInstalasiTorenTandonFromMoneyPageVariant,
            cleanUrlJasaPerbaikanKonsSub,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Plumbing', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-plumbing.html' },
                { name: 'Perbandingan Jasa Plumbing', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-plumbing.html' },
                { name: 'Jasa Plumbing', url: 'https://www.betonjayareadymix.com/p/jasa-plumbing.html' },
                { name: 'Jasa Instalasi Toren Tandon', url: 'https://www.betonjayareadymix.com/p/jasa-instalasi-toren-tandon.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }
    if (urlMappingJasaInstalasiAirPdamFromMoneyPageVariant[cleanUrlJasaPerbaikanKonsSub]) {
        generateBreadcrumbShared(
            urlMappingJasaInstalasiAirPdamFromMoneyPageVariant,
            cleanUrlJasaPerbaikanKonsSub,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Plumbing', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-plumbing.html' },
                { name: 'Perbandingan Jasa Plumbing', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-plumbing.html' },
                { name: 'Jasa Plumbing', url: 'https://www.betonjayareadymix.com/p/jasa-plumbing.html' },
                { name: 'Jasa Instalasi Air Pdam', url: 'https://www.betonjayareadymix.com/p/jasa-instalasi-air-pdam.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }
    if (urlMappingJasaInstalasiWaterHeaterFromMoneyPageVariant[cleanUrlJasaPerbaikanKonsSub]) {
        generateBreadcrumbShared(
            urlMappingJasaInstalasiWaterHeaterFromMoneyPageVariant,
            cleanUrlJasaPerbaikanKonsSub,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Plumbing', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-plumbing.html' },
                { name: 'Perbandingan Jasa Plumbing', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-plumbing.html' },
                { name: 'Jasa Plumbing', url: 'https://www.betonjayareadymix.com/p/jasa-plumbing.html' },
                { name: 'Jasa Instalasi Water Heater', url: 'https://www.betonjayareadymix.com/p/jasa-instalasi-water-heater.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }
  if (urlMappingJasaPerbaikanKranAirFromMoneyPageVariant[cleanUrlJasaPerbaikanKonsSub]) {
        generateBreadcrumbShared(
            urlMappingJasaPerbaikanKranAirFromMoneyPageVariant,
            cleanUrlJasaPerbaikanKonsSub,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Plumbing', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-plumbing.html' },
                { name: 'Perbandingan Jasa Plumbing', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-plumbing.html' },
                { name: 'Jasa Plumbing', url: 'https://www.betonjayareadymix.com/p/jasa-plumbing.html' },
                { name: 'Jasa Perbaikan Kran Air', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-kran-air.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }

  
    // ═══════════════════════════════════════════════════════
    // [BLOK 1] PERBAIKAN STRUKTUR
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

  if (urlMappingJasaPerbaikanBetonFromMoneyPageVariant[cleanUrlJasaPerbaikanKonsSub]) {
        generateBreadcrumbShared(
            urlMappingJasaPerbaikanBetonFromMoneyPageVariant,
            cleanUrlJasaPerbaikanKonsSub,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Perbaikan Bangunan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-perbaikan-bangunan.html' },
                { name: 'Perbandingan Jasa Perbaikan Bangunan', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-perbaikan-bangunan.html' },
                { name: 'Jasa Perbaikan Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-bangunan.html' },
                { name: 'Jasa Perbaikan Beton', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-beton.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }
  if (urlMappingJasaInjeksiBetonFromMoneyPageVariant[cleanUrlJasaPerbaikanKonsSub]) {
        generateBreadcrumbShared(
            urlMappingJasaInjeksiBetonFromMoneyPageVariant,
            cleanUrlJasaPerbaikanKonsSub,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Perbaikan Bangunan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-perbaikan-bangunan.html' },
                { name: 'Perbandingan Jasa Perbaikan Bangunan', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-perbaikan-bangunan.html' },
                { name: 'Jasa Perbaikan Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-bangunan.html' },
                { name: 'Jasa Injeksi Beton', url: 'https://www.betonjayareadymix.com/p/jasa-injeksi-beton.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }
    if (urlMappingJasaBobokBetonFromMoneyPageVariant[cleanUrlJasaPerbaikanKonsSub]) {
        generateBreadcrumbShared(
            urlMappingJasaBobokBetonFromMoneyPageVariant,
            cleanUrlJasaPerbaikanKonsSub,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Perbaikan Bangunan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-perbaikan-bangunan.html' },
                { name: 'Perbandingan Jasa Perbaikan Bangunan', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-perbaikan-bangunan.html' },
                { name: 'Jasa Perbaikan Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-bangunan.html' },
                { name: 'Jasa Bobok Beton', url: 'https://www.betonjayareadymix.com/p/jasa-bobok-beton.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }
    if (urlMappingJasaShotcreteBetonFromMoneyPageVariant[cleanUrlJasaPerbaikanKonsSub]) {
        generateBreadcrumbShared(
            urlMappingJasaShotcreteBetonFromMoneyPageVariant,
            cleanUrlJasaPerbaikanKonsSub,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Perbaikan Bangunan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-perbaikan-bangunan.html' },
                { name: 'Perbandingan Jasa Perbaikan Bangunan', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-perbaikan-bangunan.html' },
                { name: 'Jasa Perbaikan Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-bangunan.html' },
                { name: 'Jasa Shotcrete Beton', url: 'https://www.betonjayareadymix.com/p/jasa-shotcrete-beton.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }
   if (urlMappingJasaTambalBetonFromMoneyPageVariant[cleanUrlJasaPerbaikanKonsSub]) {
        generateBreadcrumbShared(
            urlMappingJasaTambalBetonFromMoneyPageVariant,
            cleanUrlJasaPerbaikanKonsSub,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Perbaikan Bangunan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-perbaikan-bangunan.html' },
                { name: 'Perbandingan Jasa Perbaikan Bangunan', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-perbaikan-bangunan.html' },
                { name: 'Jasa Perbaikan Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-bangunan.html' },
                { name: 'Jasa Tambal Beton', url: 'https://www.betonjayareadymix.com/p/jasa-tambal-beton.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }
   if (urlMappingJasaPerbaikanStrukturBetonFromVariantSubVariant[cleanUrlJasaPerbaikanKonsSub]) {
        generateBreadcrumbShared(
            urlMappingJasaPerbaikanStrukturBetonFromVariantSubVariant,
            cleanUrlJasaPerbaikanKonsSub,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Perbaikan Bangunan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-perbaikan-bangunan.html' },
                { name: 'Perbandingan Jasa Perbaikan Bangunan', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-perbaikan-bangunan.html' },
                { name: 'Jasa Perbaikan Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-bangunan.html' },
                { name: 'Jasa Perbaikan Struktur Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-struktur-bangunan.html' },
                { name: 'Jasa Perbaikan Struktur Beton', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-struktur-beton.html' },
            ],
            'JASA_KONSTRUKSI'
        );
    }
   if (urlMappingJasaPerbaikanStrukturDindingFromVariantSubVariant[cleanUrlJasaPerbaikanKonsSub]) {
        generateBreadcrumbShared(
            urlMappingJasaPerbaikanStrukturDindingFromVariantSubVariant,
            cleanUrlJasaPerbaikanKonsSub,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Perbaikan Bangunan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-perbaikan-bangunan.html' },
                { name: 'Perbandingan Jasa Perbaikan Bangunan', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-perbaikan-bangunan.html' },
                { name: 'Jasa Perbaikan Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-bangunan.html' },
                { name: 'Jasa Perbaikan Struktur Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-struktur-bangunan.html' },
                { name: 'Jasa Perbaikan Struktur Dinding', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-struktur-dinding.html' },
            ],
            'JASA_KONSTRUKSI'
        );
    }

  
    if (urlMappingJasaPerbaikanStrukturBangunanFromMoneyPageVariant[cleanUrlJasaPerbaikanKonsSub]) {
        generateBreadcrumbShared(
            urlMappingJasaPerbaikanStrukturBangunanFromMoneyPageVariant,
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

    if (urlMappingJasaPerbaikanLantaiAmblesFromVariantSubVariant[cleanUrlJasaPerbaikanKonsSub]) {
        generateBreadcrumbShared(
            urlMappingJasaPerbaikanLantaiAmblesFromVariantSubVariant,
            cleanUrlJasaPerbaikanKonsSub,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Perbaikan Bangunan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-perbaikan-bangunan.html' },
                { name: 'Perbandingan Jasa Perbaikan Bangunan', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-perbaikan-bangunan.html' },
                { name: 'Jasa Perbaikan Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-bangunan.html' },
                { name: 'Jasa Perbaikan Struktur Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-struktur-bangunan.html' },
                { name: 'Jasa Perbaikan Lantai Ambles', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-lantai-ambles.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }

    if (urlMappingJasaPerbaikanLantaiBangunanFromMoneyPageVariant[cleanUrlJasaPerbaikanKonsSub]) {
        generateBreadcrumbShared(
            urlMappingJasaPerbaikanLantaiBangunanFromMoneyPageVariant,
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

    if (urlMappingJasaPerbaikanAtapBangunanFromMoneyPageVariant[cleanUrlJasaPerbaikanKonsSub]) {
        generateBreadcrumbShared(
            urlMappingJasaPerbaikanAtapBangunanFromMoneyPageVariant,
            cleanUrlJasaPerbaikanKonsSub,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Perbaikan Bangunan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-perbaikan-bangunan.html' },
                { name: 'Perbandingan Jasa Perbaikan Bangunan', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-perbaikan-bangunan.html' },
                { name: 'Jasa Perbaikan Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-bangunan.html' },
                { name: 'Jasa Perbaikan Atap Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-atap-bangunan.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }

    // ═══════════════════════════════════════════════════════
    // [BLOK 3] PERBAIKAN WATERPROOFING
    // ═══════════════════════════════════════════════════════

    if (urlMappingJasaPerbaikanStrukturAtapFromVariantSubVariant[cleanUrlJasaPerbaikanKonsSub]) {
        generateBreadcrumbShared(
            urlMappingJasaPerbaikanStrukturAtapFromVariantSubVariant,
            cleanUrlJasaPerbaikanKonsSub,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Perbaikan Bangunan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-perbaikan-bangunan.html' },
                { name: 'Perbandingan Jasa Perbaikan Bangunan', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-perbaikan-bangunan.html' },
                { name: 'Jasa Perbaikan Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-bangunan.html' },
                { name: 'Jasa Perbaikan Atap Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-atap-bangunan.html' },
                { name: 'Jasa Perbaikan Struktur Atap', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-struktur-atap.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }
    if (urlMappingJasaBobokLantaiBetonFromVariantSubVariant[cleanUrlJasaPerbaikanKonsSub]) {
        generateBreadcrumbShared(
            urlMappingJasaBobokLantaiBetonFromVariantSubVariant,
            cleanUrlJasaPerbaikanKonsSub,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Perbaikan Bangunan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-perbaikan-bangunan.html' },
                { name: 'Perbandingan Jasa Perbaikan Bangunan', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-perbaikan-bangunan.html' },
                { name: 'Jasa Perbaikan Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-bangunan.html' },
                { name: 'Jasa Bobok Beton', url: 'https://www.betonjayareadymix.com/p/jasa-bobok-beton.html' },
                { name: 'Jasa Bobok Lantai Beton', url: 'https://www.betonjayareadymix.com/p/jasa-bobok-lantai-beton.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }
  
    // ═══════════════════════════════════════════════════════
    // [BLOK 4] PERBAIKAN ELEMEN ARSITEKTURAL
    // ═══════════════════════════════════════════════════════

    if (urlMappingJasaPerbaikanElemenArsitekturalFromMoneyPageVariant[cleanUrlJasaPerbaikanKonsSub]) {
        generateBreadcrumbShared(
            urlMappingJasaPerbaikanElemenArsitekturalFromMoneyPageVariant,
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

    if (urlMappingJasaPerbaikanWaterproofingBangunanFromMoneyPageVariant[cleanUrlJasaPerbaikanKonsSub]) {
        generateBreadcrumbShared(
            urlMappingJasaPerbaikanWaterproofingBangunanFromMoneyPageVariant,
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

    if (urlMappingJasaPerbaikanGedungBertingkatFromMoneyPageVariant[cleanUrlJasaPerbaikanKonsSub]) {
        generateBreadcrumbShared(
            urlMappingJasaPerbaikanGedungBertingkatFromMoneyPageVariant,
            cleanUrlJasaPerbaikanKonsSub,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Perbaikan Bangunan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-perbaikan-bangunan.html' },
                { name: 'Perbandingan Jasa Perbaikan Bangunan', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-perbaikan-bangunan.html' },
                { name: 'Jasa Perbaikan Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-bangunan.html' },
                { name: 'Jasa Perbaikan Gedung Bertingkat', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-gedung-bertingkat.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }

   // ═══════════════════════════════════════════════════════
    // [BLOK 6] PERBAIKAN INFRASTRUKTUR
    // ═══════════════════════════════════════════════════════ 
    if (urlMappingJasaPerbaikanJalanFromMoneyPageVariant[cleanUrlJasaPerbaikanKonsSub]) {
        generateBreadcrumbShared(
            urlMappingJasaPerbaikanJalanFromMoneyPageVariant,
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
    if (urlMappingJasaPerbaikanJembatanFromMoneyPageVariant[cleanUrlJasaPerbaikanKonsSub]) {
        generateBreadcrumbShared(
            urlMappingJasaPerbaikanJembatanFromMoneyPageVariant,
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
    if (urlMappingJasaPerbaikanJembatanBetonFromVariantSubVariant[cleanUrlJasaPerbaikanKonsSub]) {
        generateBreadcrumbShared(
            urlMappingJasaPerbaikanJembatanBetonFromVariantSubVariant,
            cleanUrlJasaPerbaikanKonsSub,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Perbaikan Infrastruktur', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-perbaikan-infrastruktur.html' },
                { name: 'Perbandingan Jasa Perbaikan Infrastruktur', url: 'https://www.betonjayareadymix.com/p/perbandingan-perbaikan-infrastruktur.html' },
                { name: 'Jasa Perbaikan Infrastruktur', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-infrastruktur.html' },
                { name: 'Jasa Perbaikan Jembatan', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-jembatan.html' },
                { name: 'Jasa Perbaikan Jembatan Beton', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-jembatan-beton.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }
   if (urlMappingJasaPerbaikanStrukturJembatanFromVariantSubVariant[cleanUrlJasaPerbaikanKonsSub]) {
        generateBreadcrumbShared(
            urlMappingJasaPerbaikanStrukturJembatanFromVariantSubVariant,
            cleanUrlJasaPerbaikanKonsSub,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Perbaikan Infrastruktur', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-perbaikan-infrastruktur.html' },
                { name: 'Perbandingan Jasa Perbaikan Infrastruktur', url: 'https://www.betonjayareadymix.com/p/perbandingan-perbaikan-infrastruktur.html' },
                { name: 'Jasa Perbaikan Infrastruktur', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-infrastruktur.html' },
                { name: 'Jasa Perbaikan Jembatan', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-jembatan.html' },
                { name: 'Jasa Perbaikan Struktur Jembatan', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-struktur-jembatan.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }
    if (urlMappingJasaPerbaikanTrotoarFromMoneyPageVariant[cleanUrlJasaPerbaikanKonsSub]) {
        generateBreadcrumbShared(
            urlMappingJasaPerbaikanTrotoarFromMoneyPageVariant,
            cleanUrlJasaPerbaikanKonsSub,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Perbaikan Infrastruktur', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-perbaikan-infrastruktur.html' },
                { name: 'Perbandingan Jasa Perbaikan Infrastruktur', url: 'https://www.betonjayareadymix.com/p/perbandingan-perbaikan-infrastruktur.html' },
                { name: 'Jasa Perbaikan Infrastruktur', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-infrastruktur.html' },
                { name: 'Jasa Perbaikan Trotoar', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-trotoar.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }
   if (urlMappingJasaPerbaikanTrotoarJalanFromVariantSubVariant[cleanUrlJasaPerbaikanKonsSub]) {
        generateBreadcrumbShared(
            urlMappingJasaPerbaikanTrotoarJalanFromVariantSubVariant,
            cleanUrlJasaPerbaikanKonsSub,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Perbaikan Infrastruktur', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-perbaikan-infrastruktur.html' },
                { name: 'Perbandingan Jasa Perbaikan Infrastruktur', url: 'https://www.betonjayareadymix.com/p/perbandingan-perbaikan-infrastruktur.html' },
                { name: 'Jasa Perbaikan Infrastruktur', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-infrastruktur.html' },
                { name: 'Jasa Perbaikan Trotoar', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-trotoar.html' },
                { name: 'Jasa Perbaikan Trotoar Jalan', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-trotoar-jalan.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }
  if (urlMappingJasaPerbaikanStadionFromMoneyPageVariant[cleanUrlJasaPerbaikanKonsSub]) {
        generateBreadcrumbShared(
            urlMappingJasaPerbaikanStadionFromMoneyPageVariant,
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
   if (urlMappingJasaPerbaikanTerminalPenumpangFromMoneyPageVariant[cleanUrlJasaPerbaikanKonsSub]) {
        generateBreadcrumbShared(
            urlMappingJasaPerbaikanTerminalPenumpangFromMoneyPageVariant,
            cleanUrlJasaPerbaikanKonsSub,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Perbaikan Infrastruktur', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-perbaikan-infrastruktur.html' },
                { name: 'Perbandingan Jasa Perbaikan Infrastruktur', url: 'https://www.betonjayareadymix.com/p/perbandingan-perbaikan-infrastruktur.html' },
                { name: 'Jasa Perbaikan Infrastruktur', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-infrastruktur.html' },
                { name: 'Jasa Perbaikan Terminal', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-terminal.html' }            
            ],
            'JASA_KONSTRUKSI'
        );
    }
   if (urlMappingJasaPerbaikanHalteBusFromMoneyPageVariant[cleanUrlJasaPerbaikanKonsSub]) {
        generateBreadcrumbShared(
            urlMappingJasaPerbaikanHalteBusFromMoneyPageVariant,
            cleanUrlJasaPerbaikanKonsSub,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Perbaikan Infrastruktur', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-perbaikan-infrastruktur.html' },
                { name: 'Perbandingan Jasa Perbaikan Infrastruktur', url: 'https://www.betonjayareadymix.com/p/perbandingan-perbaikan-infrastruktur.html' },
                { name: 'Jasa Perbaikan Infrastruktur', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-infrastruktur.html' },
                { name: 'Jasa Perbaikan Halte Bus', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-halte-bus.html' }           
            ],
            'JASA_KONSTRUKSI'
        );
    }
  if (urlMappingJasaPerbaikanTamanKotaFromMoneyPageVariant[cleanUrlJasaPerbaikanKonsSub]) {
        generateBreadcrumbShared(
            urlMappingJasaPerbaikanTamanKotaFromMoneyPageVariant,
            cleanUrlJasaPerbaikanKonsSub,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Perbaikan Infrastruktur', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-perbaikan-infrastruktur.html' },
                { name: 'Perbandingan Jasa Perbaikan Infrastruktur', url: 'https://www.betonjayareadymix.com/p/perbandingan-perbaikan-infrastruktur.html' },
                { name: 'Jasa Perbaikan Infrastruktur', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-infrastruktur.html' },
                { name: 'Jasa Perbaikan Taman Kota', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-taman-kota.html' }           
            ],
            'JASA_KONSTRUKSI'
        );
    }
  //AKHIR JASA INFRASTRUKTUR
  
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
