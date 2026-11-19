// ============================================================
// JASA KONSTRUKSI FINISHING — POST
// v2.2.0 — Early Exit v2.0.0 + Fix v2.1.0 + Pendekatan C
// ============================================================

console.log('[jasa-konstruksi-finishing] 📄 File loaded, waiting for DOM...');

//AWAL FINISHING
// ═════════════════════════════════════════════════════════════════════
// 📂 PARENT: jasa-finishing-bangunan (MP) ➔ CHILD: Variant (11)
// ═════════════════════════════════════════════════════════════════════
const urlMappingJasaFinishingBangunanFromMoneyPageVariant = {
  "https://www.betonjayareadymix.com/p/jasa-finishing-rumah.html":               "Jasa Finishing Rumah",
  "https://www.betonjayareadymix.com/p/jasa-finishing-gedung.html":              "Jasa Finishing Gedung",
  "https://www.betonjayareadymix.com/p/jasa-finishing-ruko.html":                "Jasa Finishing Ruko",
  "https://www.betonjayareadymix.com/p/jasa-finishing-pabrik.html":              "Jasa Finishing Pabrik",
  "https://www.betonjayareadymix.com/p/jasa-finishing-kantor.html":              "Jasa Finishing Kantor",
  "https://www.betonjayareadymix.com/p/jasa-finishing-toko.html":                "Jasa Finishing Toko",
  "https://www.betonjayareadymix.com/p/jasa-finishing-hotel.html":               "Jasa Finishing Hotel",
  "https://www.betonjayareadymix.com/p/jasa-finishing-apartemen.html":           "Jasa Finishing Apartemen",
  "https://www.betonjayareadymix.com/p/jasa-finishing-mewah.html":               "Jasa Finishing Mewah",
  "https://www.betonjayareadymix.com/p/jasa-finishing-bangunan-modern.html":     "Jasa Finishing Bangunan Modern",
  "https://www.betonjayareadymix.com/p/jasa-finishing-bangunan-minimalis.html":  "Jasa Finishing Bangunan Minimalis"
};
// ═════════════════════════════════════════════════════════════════════
// 📂 PARENT: jasa-cat (MP) ➔ CHILD: Variant (18)
// ═════════════════════════════════════════════════════════════════════
const urlMappingJasaCatFromMoneyPageVariant = {
  // ─── By Surface (12) ───
  "https://www.betonjayareadymix.com/p/jasa-cat-dinding.html":                 "Jasa Cat Dinding",
  "https://www.betonjayareadymix.com/p/jasa-cat-interior.html":                "Jasa Cat Interior",
  "https://www.betonjayareadymix.com/p/jasa-cat-eksterior.html":               "Jasa Cat Eksterior",
  "https://www.betonjayareadymix.com/p/jasa-cat-kayu-eksterior.html":          "Jasa Cat Kayu Eksterior",
  "https://www.betonjayareadymix.com/p/jasa-cat-besi-interior.html":           "Jasa Cat Besi Interior",
  "https://www.betonjayareadymix.com/p/jasa-cat-besi-eksterior.html":          "Jasa Cat Besi Eksterior",
  "https://www.betonjayareadymix.com/p/jasa-cat-genteng.html":                 "Jasa Cat Genteng",
  "https://www.betonjayareadymix.com/p/jasa-cat-atap.html":                    "Jasa Cat Atap",
  "https://www.betonjayareadymix.com/p/jasa-cat-pagar.html":                   "Jasa Cat Pagar",
  "https://www.betonjayareadymix.com/p/jasa-cat-lantai.html":                  "Jasa Cat Lantai",
  "https://www.betonjayareadymix.com/p/jasa-cat-beton.html":                   "Jasa Cat Beton",
  "https://www.betonjayareadymix.com/p/jasa-cat-keramik.html":                 "Jasa Cat Keramik",

  // ─── By Scope (3) ───
  "https://www.betonjayareadymix.com/p/jasa-cat-dinding-interior.html":        "Jasa Cat Dinding Interior",
  "https://www.betonjayareadymix.com/p/jasa-cat-dinding-eksterior.html":       "Jasa Cat Dinding Eksterior",
  "https://www.betonjayareadymix.com/p/jasa-cat-plafon-eksterior.html":        "Jasa Cat Plafon Eksterior",

  // ─── Special Surface (3) ───
  "https://www.betonjayareadymix.com/p/jasa-cat-permukaan-khusus.html":        "Jasa Cat Permukaan Khusus",
  "https://www.betonjayareadymix.com/p/jasa-cat-kolam-renang.html":            "Jasa Cat Kolam Renang",
  "https://www.betonjayareadymix.com/p/jasa-cat-paving-block.html":            "Jasa Cat Paving Block"
};
// ═════════════════════════════════════════════════════════════════════
// 📂 PARENT: jasa-cat-interior (Variant) ➔ CHILD: SV (10)
// ═════════════════════════════════════════════════════════════════════
const urlMappingJasaCatInteriorFromVariantSubVariant = {
  // ─── By Building Type (6) ───
  "https://www.betonjayareadymix.com/p/jasa-cat-interior-rumah.html":          "Jasa Cat Interior Rumah",
  "https://www.betonjayareadymix.com/p/jasa-cat-interior-apartemen.html":      "Jasa Cat Interior Apartemen",
  "https://www.betonjayareadymix.com/p/jasa-cat-interior-gedung.html":         "Jasa Cat Interior Gedung",
  "https://www.betonjayareadymix.com/p/jasa-cat-interior-kantor.html":         "Jasa Cat Interior Kantor",
  // ─── By Style (2) ───
  "https://www.betonjayareadymix.com/p/jasa-cat-interior-modern.html":         "Jasa Cat Interior Modern",
  "https://www.betonjayareadymix.com/p/jasa-cat-interior-minimalis.html":      "Jasa Cat Interior Minimalis",
  // ─── By Room (4) ───
  "https://www.betonjayareadymix.com/p/jasa-cat-interior-kamar-tidur.html":    "Jasa Cat Interior Kamar Tidur",
  "https://www.betonjayareadymix.com/p/jasa-cat-interior-ruang-tamu.html":     "Jasa Cat Interior Ruang Tamu",
  "https://www.betonjayareadymix.com/p/jasa-cat-interior-dapur.html":          "Jasa Cat Interior Dapur",
  "https://www.betonjayareadymix.com/p/jasa-cat-interior-ruang-kantor.html":   "Jasa Cat Interior Ruang Kantor"
};
// ═════════════════════════════════════════════════════════════════════
// 📂 PARENT: jasa-cat-eksterior (Variant) ➔ CHILD: SV (6)
// ═════════════════════════════════════════════════════════════════════
const urlMappingJasaCatEksteriorFromVariantSubVariant = {
  // ─── By Building Type (3) ───
  "https://www.betonjayareadymix.com/p/jasa-cat-eksterior-rumah.html":         "Jasa Cat Eksterior Rumah",
  "https://www.betonjayareadymix.com/p/jasa-cat-eksterior-gedung.html":        "Jasa Cat Eksterior Gedung",
  "https://www.betonjayareadymix.com/p/jasa-cat-eksterior-kantor.html":        "Jasa Cat Eksterior Kantor",
  // ─── By Style (3) ───
  "https://www.betonjayareadymix.com/p/jasa-cat-eksterior-modern.html":        "Jasa Cat Eksterior Modern",
  "https://www.betonjayareadymix.com/p/jasa-cat-eksterior-minimalis.html":     "Jasa Cat Eksterior Minimalis",
  "https://www.betonjayareadymix.com/p/jasa-cat-eksterior-klasik.html":        "Jasa Cat Eksterior Klasik"
};
// ═════════════════════════════════════════════════════════════════════
// 📂 PARENT: jasa-finishing-dinding (MP) ➔ CHILD: Variant (9)
// ═════════════════════════════════════════════════════════════════════
const urlMappingJasaFinishingDindingFromMoneyPageVariant = {
"https://www.betonjayareadymix.com/p/jasa-plesteran-acian-dinding.html": "Jasa Plesteran Acian Dinding",
	"https://www.betonjayareadymix.com/p/jasa-finishing-dinding-wallpaper.html":  "Jasa Finishing Dinding Wallpaper",
  "https://www.betonjayareadymix.com/p/jasa-finishing-dinding-ekspos.html":     "Jasa Finishing Dinding Ekspos",
  "https://www.betonjayareadymix.com/p/jasa-finishing-wpc-dinding.html":        "Jasa Finishing WPC Dinding",
  "https://www.betonjayareadymix.com/p/jasa-finishing-pvc-dinding.html":        "Jasa Finishing PVC Dinding",
  "https://www.betonjayareadymix.com/p/jasa-finishing-wall-moulding.html":      "Jasa Finishing Wall Moulding",
  "https://www.betonjayareadymix.com/p/jasa-finishing-dinding-rumah.html":      "Jasa Finishing Dinding Rumah",
  "https://www.betonjayareadymix.com/p/jasa-finishing-dinding-kantor.html":     "Jasa Finishing Dinding Kantor",
  "https://www.betonjayareadymix.com/p/jasa-finishing-dinding-hotel.html":      "Jasa Finishing Dinding Hotel",
  "https://www.betonjayareadymix.com/p/jasa-finishing-dinding-restoran.html":   "Jasa Finishing Dinding Restoran"
};

// ═════════════════════════════════════════════════════════════════════
// 📂 PARENT: jasa-finishing-lantai (MP) ➔ CHILD: Variant (11)
// ═════════════════════════════════════════════════════════════════════
const urlMappingJasaFinishingLantaiFromMoneyPageVariant = {
 "https://www.betonjayareadymix.com/p/jasa-borongan-lantai.html":      "Jasa Borongan Lantai",
  // ─── By Material (6) ───
  "https://www.betonjayareadymix.com/p/jasa-finishing-lantai-epoxy.html":      "Jasa Finishing Lantai Epoxy",
  "https://www.betonjayareadymix.com/p/jasa-finishing-lantai-beton.html":      "Jasa Finishing Lantai Beton",
  "https://www.betonjayareadymix.com/p/jasa-finishing-lantai-keramik.html":     "Jasa Finishing Lantai Keramik",
  "https://www.betonjayareadymix.com/p/jasa-finishing-lantai-marmer.html":     "Jasa Finishing Lantai Marmer",
  "https://www.betonjayareadymix.com/p/jasa-finishing-lantai-granit.html":     "Jasa Finishing Lantai Granit",
  "https://www.betonjayareadymix.com/p/jasa-finishing-lantai-kayu.html":       "Jasa Finishing Lantai Kayu",

  // ─── By Method (5) ───
  "https://www.betonjayareadymix.com/p/jasa-poles-lantai-beton.html":          "Jasa Poles Lantai Beton",
  "https://www.betonjayareadymix.com/p/jasa-coating-lantai-beton.html":        "Jasa Coating Lantai Beton",
  "https://www.betonjayareadymix.com/p/jasa-grinding-lantai-beton.html":       "Jasa Grinding Lantai Beton",
  "https://www.betonjayareadymix.com/p/jasa-poles-lantai-marmer.html":         "Jasa Poles Lantai Marmer",
  "https://www.betonjayareadymix.com/p/jasa-poles-lantai-granit.html":         "Jasa Poles Lantai Granit"
};
// ═════════════════════════════════════════════════════════════════════
// 📂 PARENT: jasa-finishing-lantai-beton (Variant) ➔ CHILD: SV (10)
// ═════════════════════════════════════════════════════════════════════
const urlMappingJasaFinishingLantaiBetonFromVariantSubVariant = {
  "https://www.betonjayareadymix.com/p/jasa-finishing-lantai-beton-ekspos.html":        "Jasa Finishing Lantai Beton Ekspos",
  "https://www.betonjayareadymix.com/p/jasa-waterproofing-lantai-beton-baru.html":      "Jasa Waterproofing Lantai Beton Baru",
  "https://www.betonjayareadymix.com/p/jasa-lantai-super-flat.html":                    "Jasa Lantai Super Flat",
  "https://www.betonjayareadymix.com/p/jasa-lapangan-super-flat.html":                  "Jasa Lapangan Super Flat",
  "https://www.betonjayareadymix.com/p/jasa-trowel-lantai-beton.html":                  "Jasa Trowel Lantai Beton",
  "https://www.betonjayareadymix.com/p/jasa-screeding-lantai-beton.html":               "Jasa Screeding Lantai Beton",
  "https://www.betonjayareadymix.com/p/jasa-perataan-lantai-beton.html":                "Jasa Perataan Lantai Beton",
  "https://www.betonjayareadymix.com/p/jasa-floor-hardener-lantai.html":                "Jasa Floor Hardener Lantai",
  "https://www.betonjayareadymix.com/p/jasa-self-leveling-lantai.html":                 "Jasa Self Leveling Lantai",
  "https://www.betonjayareadymix.com/p/jasa-pelapisan-lantai-beton.html":               "Jasa Pelapisan Lantai Beton"
};
// ═════════════════════════════════════════════════════════════════════
// 📂 PARENT: jasa-finishing-interior (MP) ➔ CHILD: Variant (6)
// ═════════════════════════════════════════════════════════════════════
const urlMappingJasaFinishingInteriorFromMoneyPageVariant = {
  // ─── By Building (3) ───
  "https://www.betonjayareadymix.com/p/jasa-finishing-interior-kantor.html":     "Jasa Finishing Interior Kantor",
  "https://www.betonjayareadymix.com/p/jasa-finishing-interior-apartemen.html":  "Jasa Finishing Interior Apartemen",
  "https://www.betonjayareadymix.com/p/jasa-finishing-interior-rumah.html":      "Jasa Finishing Interior Rumah",
  // ─── By Style (3) ───
  "https://www.betonjayareadymix.com/p/jasa-finishing-interior-minimalis.html":  "Jasa Finishing Interior Minimalis",
  "https://www.betonjayareadymix.com/p/jasa-finishing-interior-klasik.html":     "Jasa Finishing Interior Klasik",
  "https://www.betonjayareadymix.com/p/jasa-finishing-interior-modern.html":     "Jasa Finishing Interior Modern"
};
// ═════════════════════════════════════════════════════════════════════
// 📂 PARENT: jasa-finishing-eksterior (MP) ➔ CHILD: Variant (35)
// ═════════════════════════════════════════════════════════════════════
const urlMappingJasaFinishingEksteriorFromMoneyPageVariant = {
  // ─── By Building Type (15) ───
  "https://www.betonjayareadymix.com/p/jasa-finishing-eksterior-rumah.html":        "Jasa Finishing Eksterior Rumah",
  "https://www.betonjayareadymix.com/p/jasa-finishing-eksterior-gedung.html":       "Jasa Finishing Eksterior Gedung",
  "https://www.betonjayareadymix.com/p/jasa-finishing-eksterior-ruko.html":         "Jasa Finishing Eksterior Ruko",
  "https://www.betonjayareadymix.com/p/jasa-finishing-eksterior-pabrik.html":       "Jasa Finishing Eksterior Pabrik",
  "https://www.betonjayareadymix.com/p/jasa-finishing-eksterior-kantor.html":       "Jasa Finishing Eksterior Kantor",
  "https://www.betonjayareadymix.com/p/jasa-finishing-eksterior-hotel.html":        "Jasa Finishing Eksterior Hotel",
  "https://www.betonjayareadymix.com/p/jasa-finishing-eksterior-cafe.html":         "Jasa Finishing Eksterior Cafe",
  "https://www.betonjayareadymix.com/p/jasa-finishing-eksterior-restoran.html":     "Jasa Finishing Eksterior Restoran",
  "https://www.betonjayareadymix.com/p/jasa-finishing-eksterior-sekolah.html":      "Jasa Finishing Eksterior Sekolah",
  "https://www.betonjayareadymix.com/p/jasa-finishing-eksterior-rumah-sakit.html":  "Jasa Finishing Eksterior Rumah Sakit",
  "https://www.betonjayareadymix.com/p/jasa-finishing-eksterior-toko.html":         "Jasa Finishing Eksterior Toko",
  "https://www.betonjayareadymix.com/p/jasa-finishing-eksterior-showroom.html":     "Jasa Finishing Eksterior Showroom",
  "https://www.betonjayareadymix.com/p/jasa-finishing-eksterior-gudang.html":       "Jasa Finishing Eksterior Gudang",
  "https://www.betonjayareadymix.com/p/jasa-finishing-eksterior-mushola.html":      "Jasa Finishing Eksterior Mushola",
  "https://www.betonjayareadymix.com/p/jasa-finishing-eksterior-masjid.html":       "Jasa Finishing Eksterior Masjid",

  // ─── By Style (7) ───
  "https://www.betonjayareadymix.com/p/jasa-finishing-eksterior-modern.html":       "Jasa Finishing Eksterior Modern",
  "https://www.betonjayareadymix.com/p/jasa-finishing-eksterior-minimalis.html":    "Jasa Finishing Eksterior Minimalis",
  "https://www.betonjayareadymix.com/p/jasa-finishing-eksterior-klasik.html":       "Jasa Finishing Eksterior Klasik",
  "https://www.betonjayareadymix.com/p/jasa-finishing-eksterior-mewah.html":        "Jasa Finishing Eksterior Mewah",
  "https://www.betonjayareadymix.com/p/jasa-finishing-eksterior-industrial.html":   "Jasa Finishing Eksterior Industrial",
  "https://www.betonjayareadymix.com/p/jasa-finishing-eksterior-skandinavian.html": "Jasa Finishing Eksterior Skandinavian",
  "https://www.betonjayareadymix.com/p/jasa-finishing-eksterior-kontemporer.html":  "Jasa Finishing Eksterior Kontemporer",

  // ─── By Component (9) ───
  "https://www.betonjayareadymix.com/p/jasa-finishing-eksterior-dinding.html":         "Jasa Finishing Eksterior Dinding",
  "https://www.betonjayareadymix.com/p/jasa-finishing-eksterior-pagar.html":           "Jasa Finishing Eksterior Pagar",
  "https://www.betonjayareadymix.com/p/jasa-finishing-eksterior-balkon.html":          "Jasa Finishing Eksterior Balkon",
  "https://www.betonjayareadymix.com/p/jasa-finishing-eksterior-teras.html":           "Jasa Finishing Eksterior Teras",
  "https://www.betonjayareadymix.com/p/jasa-finishing-eksterior-kanopi.html":          "Jasa Finishing Eksterior Kanopi",
  "https://www.betonjayareadymix.com/p/jasa-finishing-eksterior-kolam-renang.html":    "Jasa Finishing Eksterior Kolam Renang",
  "https://www.betonjayareadymix.com/p/jasa-finishing-eksterior-plafon-terbuka.html":  "Jasa Finishing Eksterior Plafon Terbuka",
  "https://www.betonjayareadymix.com/p/jasa-finishing-eksterior-tangga-luar.html":     "Jasa Finishing Eksterior Tangga Luar",
  "https://www.betonjayareadymix.com/p/jasa-finishing-eksterior-gazebo.html":          "Jasa Finishing Eksterior Gazebo",

  // ─── Pelapisan (4) ───
  "https://www.betonjayareadymix.com/p/jasa-pelapisan-genteng-dak.html":               "Jasa Pelapisan Genteng Dak",
  "https://www.betonjayareadymix.com/p/jasa-pelapisan-anti-cuaca.html":                "Jasa Pelapisan Anti Cuaca",
  "https://www.betonjayareadymix.com/p/jasa-pelapisan-dinding-luar.html":              "Jasa Pelapisan Dinding Luar",
  "https://www.betonjayareadymix.com/p/jasa-pelapisan-batu-alam-eksterior.html":       "Jasa Pelapisan Batu Alam Eksterior",

  // ─── Fasad & Epoxy (2) ───
  "https://www.betonjayareadymix.com/p/jasa-finishing-fasad-eksterior.html":           "Jasa Finishing Fasad Eksterior",
  "https://www.betonjayareadymix.com/p/jasa-finishing-epoxy-dinding.html":             "Jasa Finishing Epoxy Dinding"
};
const urlMappingJasaFinishingLampuFromMoneyPageVariant = {
  "https://www.betonjayareadymix.com/p/jasa-finishing-lampu-taman.html":   "Jasa Finishing Lampu Taman",
  "https://www.betonjayareadymix.com/p/jasa-finishing-lampu-cafe.html":    "Jasa Finishing Lampu Cafe",
  "https://www.betonjayareadymix.com/p/jasa-finishing-lampu-hotel.html":   "Jasa Finishing Lampu Hotel",
  "https://www.betonjayareadymix.com/p/jasa-finishing-lampu-kantor.html":  "Jasa Finishing Lampu Kantor"
};
// ═════════════════════════════════════════════════════════════════════
// 📂 PARENT: jasa-finishing-struktur (MP) ➔ CHILD: Variant (6)
// ═════════════════════════════════════════════════════════════════════
const urlMappingJasaFinishingStrukturFromMoneyPageVariant = {
  "https://www.betonjayareadymix.com/p/jasa-finishing-dak-beton.html":           "Jasa Finishing Dak Beton",
  "https://www.betonjayareadymix.com/p/jasa-finishing-jalan-beton.html":         "Jasa Finishing Jalan Beton",
  "https://www.betonjayareadymix.com/p/jasa-coating-jembatan.html":              "Jasa Coating Jembatan",
  "https://www.betonjayareadymix.com/p/jasa-waterproofing-saluran-air.html":     "Jasa Waterproofing Saluran Air",
  "https://www.betonjayareadymix.com/p/jasa-pelapisan-coating-struktur.html":    "Jasa Pelapisan Coating Struktur",
  "https://www.betonjayareadymix.com/p/jasa-finishing-struktur-utilitas.html":   "Jasa Finishing Struktur Utilitas"
};

// ═════════════════════════════════════════════════════════════════════
// 📂 PARENT: jasa-finishing-struktur-beton-ekspos (Variant) ➔ CHILD: SV (8)
// ═════════════════════════════════════════════════════════════════════
const urlMappingJasaFinishingStrukturBetonEksposFromVariantSubVariant = {
  "https://www.betonjayareadymix.com/p/jasa-finishing-struktur-beton-ekspos.html":   "Jasa Finishing Struktur Beton Ekspos",
  "https://www.betonjayareadymix.com/p/jasa-finishing-kolom-dan-balok.html":         "Jasa Finishing Kolom dan Balok",
  "https://www.betonjayareadymix.com/p/jasa-finishing-penutup-kabel-beton.html":     "Jasa Finishing Penutup Kabel Beton",
  "https://www.betonjayareadymix.com/p/jasa-coating-anti-karat-beton.html":          "Jasa Coating Anti Karat Beton",
  "https://www.betonjayareadymix.com/p/jasa-pelapisan-anti-karat-beton.html":        "Jasa Pelapisan Anti Karat Beton",
  "https://www.betonjayareadymix.com/p/jasa-epoxy-beton-luar-ruang.html":            "Jasa Epoxy Beton Luar Ruang",
  "https://www.betonjayareadymix.com/p/jasa-proteksi-struktur-beton-luar.html":      "Jasa Proteksi Struktur Beton Luar",
  "https://www.betonjayareadymix.com/p/jasa-finishing-proteksi-beton.html":          "Jasa Finishing Proteksi Beton"
};
// ═════════════════════════════════════════════════════════════════════
// 📂 PARENT: jasa-finishing-infrastruktur (MP) ➔ CHILD: Variant (3)
// ═════════════════════════════════════════════════════════════════════
const urlMappingJasaFinishingInfrastrukturFromMoneyPageVariant = {
  "https://www.betonjayareadymix.com/p/jasa-finishing-trotoar.html":             "Jasa Finishing Trotoar",
  "https://www.betonjayareadymix.com/p/jasa-finishing-saluran-drainase.html":    "Jasa Finishing Saluran Drainase",
  "https://www.betonjayareadymix.com/p/jasa-coating-gorong-gorong.html":         "Jasa Coating Gorong-Gorong"
};

// ═════════════════════════════════════════════════════════════════════
// 📂 PARENT: jasa-finishing-trotoar (Variant) ➔ CHILD: SV (4)
// ═════════════════════════════════════════════════════════════════════
const urlMappingJasaFinishingTrotoarFromVariantSubVariant = {
  "https://www.betonjayareadymix.com/p/jasa-finishing-trotoar-area-publik.html":     "Jasa Finishing Trotoar Area Publik",
  "https://www.betonjayareadymix.com/p/jasa-penataan-trotoar-beton.html":            "Jasa Penataan Trotoar Beton",
  "https://www.betonjayareadymix.com/p/jasa-pelapisan-area-pejalan-kaki.html":       "Jasa Pelapisan Area Pejalan Kaki",
  "https://www.betonjayareadymix.com/p/jasa-finishing-trotoar-jalan-rusak.html":     "Jasa Finishing Trotoar Jalan Rusak"
};

// ═════════════════════════════════════════════════════════════════════
// 📂 PARENT: jasa-finishing-saluran-drainase (Variant) ➔ CHILD: SV (1)
// ═════════════════════════════════════════════════════════════════════
const urlMappingJasaFinishingSaluranDrainaseFromVariantSubVariant = {
  "https://www.betonjayareadymix.com/p/jasa-pelapisan-saluran-beton.html": "Jasa Pelapisan Saluran Beton"
};

//AKHIR FINISHIING


// ═══════════════════════════════════════════════════════════
//JASA PASANG LANJUTAN DARI JASA KONSTRUKSI
// ═══════════════════════════════════════════════════════════
// ═════════════════════════════════════════════════════════════════════
// 📂 PARENT: jasa-pasang-keramik-lantai (Variant) ➔ CHILD: SV (4)
// ═════════════════════════════════════════════════════════════════════
const urlMappingJasaPasangKeramikLantaiFromVariantSubVariant = {
  "https://www.betonjayareadymix.com/p/jasa-pasang-keramik-lantai-24-jam.html":   "Jasa Pasang Keramik Lantai 24 Jam",
  "https://www.betonjayareadymix.com/p/jasa-pasang-keramik-lantai-rumah.html":    "Jasa Pasang Keramik Lantai Rumah",
  "https://www.betonjayareadymix.com/p/jasa-pasang-keramik-lantai-kantor.html":   "Jasa Pasang Keramik Lantai Kantor",
  "https://www.betonjayareadymix.com/p/jasa-pasang-keramik-lantai-gudang.html":   "Jasa Pasang Keramik Lantai Gudang"
};
// ═════════════════════════════════════════════════════════════════════
// 📂 PARENT: jasa-pasang-wpc (MP) ➔ CHILD: Variant (2)
// ═════════════════════════════════════════════════════════════════════
const urlMappingJasaPasangWpcFromMoneyPageVariant = {
  "https://www.betonjayareadymix.com/p/jasa-pasang-wpc-dinding.html": "Jasa Pasang WPC Dinding",
  "https://www.betonjayareadymix.com/p/jasa-pasang-wpc-lantai.html":  "Jasa Pasang WPC Lantai"
};

// ═════════════════════════════════════════════════════════════════════
// 📂 PARENT: jasa-pasang-wpc-dinding (Variant) ➔ CHILD: SV (1)
// ═════════════════════════════════════════════════════════════════════
const urlMappingJasaPasangWpcDindingFromVariantSubVariant = {
  "https://www.betonjayareadymix.com/p/jasa-pasang-wpc-dinding-per-meter.html": "Jasa Pasang WPC Dinding Per Meter"
};

// ═════════════════════════════════════════════════════════════════════
// 📂 PARENT: jasa-pasang (MM) ➔ CHILD: Money Page (1)
// Sudah ada di MP list — NOT new
// ═════════════════════════════════════════════════════════════════════
// "jasa-pasang-wallpaper-3d": "money-page" ← existing MP

// ═════════════════════════════════════════════════════════════════════
// 📂 PARENT: jasa-pasang-wallpaper-3d (MP) ➔ CHILD: Variant (2)
// ═════════════════════════════════════════════════════════════════════
const urlMappingJasaPasangWallpaper3dFromMoneyPageVariant = {
  "https://www.betonjayareadymix.com/p/jasa-pasang-wallpaper-custom.html": "Jasa Pasang Wallpaper Custom",
  "https://www.betonjayareadymix.com/p/jasa-pasang-wallpaper-dinding.html": "Jasa Pasang Wallpaper Dinding"
};

// ═════════════════════════════════════════════════════════════════════
// 📂 PARENT: jasa-pasang-wallpaper-dinding (Variant) ➔ CHILD: SV (2)
// ═════════════════════════════════════════════════════════════════════
const urlMappingJasaPasangWallpaperDindingFromVariantSubVariant = {
  "https://www.betonjayareadymix.com/p/jasa-pasang-wallpaper-kamar-tidur.html": "Jasa Pasang Wallpaper Kamar Tidur",
  "https://www.betonjayareadymix.com/p/jasa-pasang-wallpaper-ruang-tamu.html":  "Jasa Pasang Wallpaper Ruang Tamu"
};


// ═════════════════════════════════════════════════════════════════════
// 📂 PARENT: jasa-pasang-plafon-wpc (Variant) ➔ CHILD: SV (1)
// ═════════════════════════════════════════════════════════════════════
const urlMappingJasaPasangPlafonWpcFromVariantSubVariant = {
  "https://www.betonjayareadymix.com/p/jasa-pasang-plafon-wpc-premium.html": "Jasa Pasang Plafon WPC Premium"
};

// ═════════════════════════════════════════════════════════════════════
// 📂 PARENT: jasa-pasang-pvc (MP) ➔ CHILD: Variant (2)
// ═════════════════════════════════════════════════════════════════════
const urlMappingJasaPasangPvcFromMoneyPageVariant = {
  "https://www.betonjayareadymix.com/p/jasa-pasang-pvc-dinding.html": "Jasa Pasang PVC Dinding",
  "https://www.betonjayareadymix.com/p/jasa-pasang-pvc-lantai.html":  "Jasa Pasang PVC Lantai"
};
// ═════════════════════════════════════════════════════════════════════
// 📂 PARENT: jasa-pasang-lantai (MP) ➔ CHILD: Variant (adding vinyl-tangga)
// ═════════════════════════════════════════════════════════════════════
// existing: jasa-pasang-lantai-vinyl
const urlMappingJasaPasangLantaiFromMoneyPageVariant_Add = {
  "https://www.betonjayareadymix.com/p/jasa-pasang-vinyl-tangga.html": "Jasa Pasang Vinyl Tangga"
};
// ═════════════════════════════════════════════════════════════════════
// 📂 PARENT: jasa-pasang-lampu (MP) ➔ CHILD: Variant (9)
// 
// 🆕 EXPANDED: was 2 Variant (interior, eksterior) → now 9 Variant
//    - 2 location umbrella: interior, eksterior
//    - 6 type-based: downlight, led, track, gantung, tembak, smart-home
//    - 1 previously SV smart-home promoted to Variant
// ═════════════════════════════════════════════════════════════════════
const urlMappingJasaPasangLampuFromMoneyPageVariant = {
  // ─── Location umbrella (2) ───
  "https://www.betonjayareadymix.com/p/jasa-pasang-lampu-interior.html":   "Jasa Pasang Lampu Interior",
  "https://www.betonjayareadymix.com/p/jasa-pasang-lampu-eksterior.html":  "Jasa Pasang Lampu Eksterior",

  // ─── Type-based (6) ───
  "https://www.betonjayareadymix.com/p/jasa-pasang-lampu-downlight.html":  "Jasa Pasang Lampu Downlight",
  "https://www.betonjayareadymix.com/p/jasa-pasang-lampu-led.html":        "Jasa Pasang Lampu LED",
  "https://www.betonjayareadymix.com/p/jasa-pasang-lampu-track.html":      "Jasa Pasang Lampu Track",
  "https://www.betonjayareadymix.com/p/jasa-pasang-lampu-gantung.html":    "Jasa Pasang Lampu Gantung",
  "https://www.betonjayareadymix.com/p/jasa-pasang-lampu-tembak.html":     "Jasa Pasang Lampu Tembak",
  "https://www.betonjayareadymix.com/p/jasa-pasang-lampu-smart-home.html": "Jasa Pasang Lampu Smart Home"
};
// ═════════════════════════════════════════════════════════════════════
// 📂 PARENT: jasa-pasang-lampu-interior (Variant) ➔ CHILD: SV (8)
// 
// 🆕 NEW const — indoor room/style variants
// ═════════════════════════════════════════════════════════════════════
const urlMappingJasaPasangLampuInteriorFromVariantSubVariant = {

  // ─── Style-based (2) ───
  "https://www.betonjayareadymix.com/p/jasa-pasang-lampu-interior-modern.html":    "Jasa Pasang Lampu Interior Modern",
  "https://www.betonjayareadymix.com/p/jasa-pasang-lampu-interior-minimalis.html": "Jasa Pasang Lampu Interior Minimalis",

  // ─── Building-type (2) ───
  "https://www.betonjayareadymix.com/p/jasa-pasang-lampu-interior-rumah.html":     "Jasa Pasang Lampu Interior Rumah",
  "https://www.betonjayareadymix.com/p/jasa-pasang-lampu-interior-gedung.html":    "Jasa Pasang Lampu Interior Gedung",

  // ─── Room-based (4) ───
  "https://www.betonjayareadymix.com/p/jasa-pasang-lampu-dapur.html":              "Jasa Pasang Lampu Dapur",
  "https://www.betonjayareadymix.com/p/jasa-pasang-lampu-kantor.html":             "Jasa Pasang Lampu Kantor",
  "https://www.betonjayareadymix.com/p/jasa-pasang-lampu-kamar-tidur.html":        "Jasa Pasang Lampu Kamar Tidur",
  "https://www.betonjayareadymix.com/p/jasa-pasang-lampu-ruang-tamu.html":         "Jasa Pasang Lampu Ruang Tamu"
};

// ═════════════════════════════════════════════════════════════════════
// 📂 PARENT: jasa-pasang-lampu-eksterior (Variant) ➔ CHILD: SV (1)
// 🆕 NEW const — outdoor room variant
// ═════════════════════════════════════════════════════════════════════
const urlMappingJasaPasangLampuEksteriorFromVariantSubVariant = {
  "https://www.betonjayareadymix.com/p/jasa-pasang-lampu-taman.html": "Jasa Pasang Lampu Taman"
};


const urlMappingHargaJasaPembuatanFurnitureFromMoneyPageMoneyPage1 = {
  "https://www.betonjayareadymix.com/p/harga-custom-furniture-per-meter.html": "Harga Custom Furniture Per Meter"
};

const urlMappingJasaInteriorFromMoneyMasterMoneyPage = {
//  "https://www.betonjayareadymix.com/p/harga-jasa-interior.html": "Harga Jasa Interior"
// redirect ke jasa interior saja "https://www.betonjayareadymix.com/p/harga-jasa-borongan-interior.html": "Harga Jasa Borongan Interior",
	"https://www.betonjayareadymix.com/p/jasa-interior-ruang.html": "Jasa Interior Ruang",
	"https://www.betonjayareadymix.com/p/jasa-interior-kamar.html": "Jasa Interior Kamar",
	  "https://www.betonjayareadymix.com/p/harga-jasa-interior-per-meter.html": "Harga Jasa Interior Per Meter"
};

const urlMappingJasaInteriorKamarFromMoneyPageVariant = {
  "https://www.betonjayareadymix.com/p/harga-jasa-interior-kamar-tidur.html": "Harga Jasa Interior Kamar Tidur"
};
const urlMappingJasaInteriorRuangFromMoneyPageVariant = {
  "https://www.betonjayareadymix.com/p/harga-jasa-interior-ruang-tamu.html": "Harga Jasa Interior Ruang Tamu"
};


const urlMappingJasaEksteriorFromMoneyMasterMoneyPage = {
  "https://www.betonjayareadymix.com/p/jasa-fasad.html": "Jasa Fasad",
  "https://www.betonjayareadymix.com/p/jasa-taman.html": "Jasa Taman",
  "https://www.betonjayareadymix.com/p/harga-jasa-eksterior-per-meter.html": "Harga Jasa Eksterior Per Meter"
};

const urlMappingJasaEksteriorFromMoneyPageVariant = {
"https://www.betonjayareadymix.com/p/jasa-fasad-rumah.html": "Jasa Fasad Rumah"
	
};

const urlMappingJasaTamanFromMoneyMaster2MoneyMaster3 = {
  "https://www.betonjayareadymix.com/p/jasa-pembuatan-taman.html": "Jasa Pembuatan Taman",
  "https://www.betonjayareadymix.com/p/jasa-tukang-taman.html": "Jasa Tukang Taman",
  "https://www.betonjayareadymix.com/p/jasa-relief-taman.html": "Jasa Relief Taman",
  "https://www.betonjayareadymix.com/p/jasa-perawatan-taman.html": "Jasa Perawatan Taman",
  "https://www.betonjayareadymix.com/p/jasa-taman-murah.html": "Jasa Taman Murah"
};

const urlMappingJasaPembuatanTamanFromMoneyMaster3MoneyPage = {
  "https://www.betonjayareadymix.com/p/jasa-pembuatan-taman-rumah.html": "Jasa Pembuatan Taman Rumah",
  "https://www.betonjayareadymix.com/p/jasa-pembuatan-taman-relief.html": "Jasa Pembuatan Taman Relief"
};



console.log('═══════════════════════════════════════════════════════════');
console.log('📦 PART 1 SELESAI — Lanjut ke PART 2 (Early Exit + Fungsi Utama)');
console.log('═══════════════════════════════════════════════════════════');

// ═══════════════════════════════════════════════════════════
// [BAGIAN 2] FUNGSI HELPER
// ═══════════════════════════════════════════════════════════



// ═══════════════════════════════════════════════════════════
// [BAGIAN 3] EARLY EXIT v2.0.0 — PENDEKATAN C
// ═══════════════════════════════════════════════════════════
// STRATEGI:
//   - Loop + foundIndex + foundMappingName + break (paling cepat)
//   - TIDAK bikin MERGED_MAP (hemat memori ~10KB)
//   - Simpan ALL_MAPPINGS + foundIndex + foundMappingName untuk debug
// ═══════════════════════════════════════════════════════════

(function() {
  'use strict';
  
  var cleanUrl = window.location.href.split(/[?#]/)[0];
  console.log('[jasa-konstruksi-finishing] 🔍 Check URL: ' + cleanUrl);
  
  // Kumpulkan SEMUA mapping ke array (TANPA Object.assign)
  var ALL_MAPPINGS = [
	 urlMappingJasaFinishingBangunanFromMoneyPageVariant,
	 urlMappingJasaCatFromMoneyPageVariant,
	urlMappingJasaCatInteriorFromVariantSubVariant,
	urlMappingJasaCatEksteriorFromVariantSubVariant,
	 urlMappingJasaFinishingDindingFromMoneyPageVariant,
	urlMappingJasaFinishingLantaiFromMoneyPageVariant,
	urlMappingJasaFinishingLantaiBetonFromVariantSubVariant,
    urlMappingJasaFinishingInteriorFromMoneyPageVariant,
	urlMappingJasaFinishingEksteriorFromMoneyPageVariant,
	urlMappingJasaFinishingLampuFromMoneyPageVariant,
	urlMappingJasaFinishingStrukturFromMoneyPageVariant,
    urlMappingJasaFinishingStrukturBetonEksposFromVariantSubVariant,
	urlMappingJasaFinishingInfrastrukturFromMoneyPageVariant,	
	 urlMappingJasaFinishingTrotoarFromVariantSubVariant,
	urlMappingJasaFinishingSaluranDrainaseFromVariantSubVariant,

	urlMappingJasaPasangKeramikLantaiFromVariantSubVariant,
	 urlMappingJasaPasangWpcFromMoneyPageVariant,
	urlMappingJasaPasangWpcDindingFromVariantSubVariant,
	urlMappingJasaPasangWallpaper3dFromMoneyPageVariant,
	urlMappingJasaPasangWallpaperDindingFromVariantSubVariant,
	urlMappingJasaPasangPlafonWpcFromVariantSubVariant,
	urlMappingJasaPasangPvcFromMoneyPageVariant,
    urlMappingJasaPasangLantaiFromMoneyPageVariant_Add,
	urlMappingJasaPasangLampuFromMoneyPageVariant,
	urlMappingJasaPasangLampuInteriorFromVariantSubVariant,
    urlMappingJasaPasangLampuEksteriorFromVariantSubVariant,
	  
    urlMappingJasaInteriorFromMoneyMasterMoneyPage,
	urlMappingJasaInteriorKamarFromMoneyPageVariant,
	urlMappingJasaInteriorRuangFromMoneyPageVariant,
	  
    urlMappingHargaJasaPembuatanFurnitureFromMoneyPageMoneyPage1,
        
    urlMappingJasaEksteriorFromMoneyMasterMoneyPage,
    urlMappingJasaEksteriorFromMoneyPageVariant,
  
    urlMappingJasaTamanFromMoneyMaster2MoneyMaster3,
    urlMappingJasaPembuatanTamanFromMoneyMaster3MoneyPage
    
  ];
  
  // ✅ PENDEKATAN C: Loop + foundIndex + foundMappingName + break
  var foundIndex = -1;
  var foundMappingName = '';
  
  for (var i = 0; i < ALL_MAPPINGS.length; i++) {
    if (!ALL_MAPPINGS[i] || typeof ALL_MAPPINGS[i] !== 'object') {
      console.warn('[jasa-konstruksi-finishing] ⚠️ Mapping #' + (i + 1) + ' bukan object — skip');
      continue;
    }
    if (ALL_MAPPINGS[i][cleanUrl]) {
      foundIndex = i;
      foundMappingName = ALL_MAPPINGS[i][cleanUrl];
      break;
    }
  }
  
  if (foundIndex === -1) {
    console.log('[jasa-konstruksi-finishing] ⏭️ SKIP — URL tidak cocok di semua cluster');
    window.__jasaKonsFinishingActive = false;
    return;
  }
  
  // ✅ Cocok — set flag + simpan info untuk debug
  window.__jasaKonsFinishingActive = true;
  window.__jasaKonsFinishingMatchIndex = foundIndex;
  window.__jasaKonsFinishingMatchMappingName = foundMappingName;
  window.__jasaKonsFinishingMappings = ALL_MAPPINGS;
  
  console.log(
    '[jasa-konstruksi-finishing] ✅ Match di mapping #' + (foundIndex + 1) +
    ' — Label: "' + foundMappingName + '"' +
    ' — EXECUTE flag set'
  );
})();

console.log('═══════════════════════════════════════════════════════════');
console.log('📦 PART 2 SELESAI — Lanjut ke PART 3 (Fungsi Utama + If Breadcrumb)');
console.log('═══════════════════════════════════════════════════════════');

// ═══════════════════════════════════════════════════════════
// [BAGIAN 4] FUNGSI UTAMA — Semua logic breadcrumb
// ═══════════════════════════════════════════════════════════

function initJasaKonsFinishing() {
    // ⚡ Guard flag
    if (!window.__jasaKonsFinishingActive) {
        console.log('[jasa-konstruksi-finishing] ⏭️ Execute SKIP — URL tidak cocok');
        return;
    }
    
    console.log('[jasa-konstruksi-finishing] 🚀 Execute — URL cocok');
    
    var cleanUrlJasaKonsFinishing = window.location.href.split(/[?#]/)[0];
    
    // ✅ Guard elemen DOM
    var JasaKonsFinishing = document.getElementById("JasaKonsFinishing");
    if (!JasaKonsFinishing) {
        console.error("[jasa-konstruksi-finishing] ❌ elemen Id JasaKonsFinishing kondisi terhapus");
        return;
    }

    var JasaKonstruksiFinishingSubLink = document.getElementById("JasaKonstruksiFinishingSub");
    var JasaFinishingSubLink = document.getElementById("JasaFinishingSub");
    var JasaFinishingBangunanLink = document.getElementById("JasaFinishingBangunanSub");
    var JasaFinishingInfrastrukturLink = document.getElementById("JasaFinishingInfrastrukturSub");
    
    // Sub finishing bangunan
    var JasaFinishingInteriorLink = document.getElementById("JasaFinishingBangunanInterior");
    var JasaFinishingEksteriorLink = document.getElementById("JasaFinishingBangunanEksterior");
    var JasaFinishingStrukturLink = document.getElementById("JasaFinishingBangunanStruktur");

    // Sub finishing infrastruktur
    var JasaFinishingJalanLink = document.getElementById("JasaFinishingInfrastrukturJalan");
    var JasaFinishingTrotoarLink = document.getElementById("JasaFinishingInfrastrukturTrotoar");
    var JasaFinishingSaluranLink = document.getElementById("JasaFinishingInfrastrukturSaluran");
    var JasaFinishingInfraStrukturLink = document.getElementById("JasaFinishingInfrastrukturStruktur");
    var JasaFinishingProteksiLink = document.getElementById("JasaFinishingInfrastrukturProteksi");

    var pageNameJasaKonsFinishing = document.getElementById("pageNameJasaKonsFinishing");
    
    // Default: sembunyikan semua elemen
    if (JasaKonstruksiFinishingSubLink) JasaKonstruksiFinishingSubLink.style.visibility = 'hidden';
    if (JasaFinishingSubLink) JasaFinishingSubLink.style.visibility = 'hidden';
    if (JasaFinishingBangunanLink) JasaFinishingBangunanLink.style.visibility = 'hidden';
    if (JasaFinishingInfrastrukturLink) JasaFinishingInfrastrukturLink.style.visibility = 'hidden';
    if (pageNameJasaKonsFinishing) pageNameJasaKonsFinishing.textContent = "";
	
    // ═══════════════════════════════════════════════════════
    // [BLOK 1] JASA PASANG LANTAI VINYL
    // ═══════════════════════════════════════════════════════
    
    if (urlMappingJasaPasangLantaiFromMoneyPageVariant_Add[cleanUrlJasaKonsFinishing]) {
        generateBreadcrumbShared(
            urlMappingJasaPasangLantaiFromMoneyPageVariant_Add,
            cleanUrlJasaKonsFinishing,
            [
                { name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Pasang', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-pasang.html' },
                { name: 'Perbandingan Jasa Pasang', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-pasang.html' },
                { name: 'Jasa Pasang Lantai', url: 'https://www.betonjayareadymix.com/p/jasa-pasang-lantai.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }
    
    // ═══════════════════════════════════════════════════════
    // [BLOK 2] JASA PASANG PVC
    // ═══════════════════════════════════════════════════════
    
    if (urlMappingJasaPasangPvcFromMoneyPageVariant[cleanUrlJasaKonsFinishing]) {
        generateBreadcrumbShared(
            urlMappingJasaPasangPvcFromMoneyPageVariant,
            cleanUrlJasaKonsFinishing,
            [
                { name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Pasang', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-pasang.html' },
                { name: 'Perbandingan Jasa Pasang', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-pasang.html' },
                { name: 'Jasa Pasang PVC', url: 'https://www.betonjayareadymix.com/p/jasa-pasang-pvc.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }	
    
    if (urlMappingJasaPasangPlafonWpcFromVariantSubVariant[cleanUrlJasaKonsFinishing]) {
        generateBreadcrumbShared(
            urlMappingJasaPasangPlafonWpcFromVariantSubVariant,
            cleanUrlJasaKonsFinishing,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Pasang', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-pasang.html' },
                { name: 'Perbandingan Jasa Pasang', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-pasang.html' },
                { name: 'Jasa Pasang Plafon', url: 'https://www.betonjayareadymix.com/p/jasa-pasang-plafon.html' },
                { name: 'Jasa Pasang Plafon Wpc', url: 'https://www.betonjayareadymix.com/p/jasa-pasang-plafon-wpc.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }	

    // ═══════════════════════════════════════════════════════
    // [BLOK 4] JASA FINISHING BANGUNAN
    // ═══════════════════════════════════════════════════════
    
    if (urlMappingJasaFinishingBangunanFromMoneyPageVariant[cleanUrlJasaKonsFinishing]) {
        generateBreadcrumbShared(
            urlMappingJasaFinishingBangunanFromMoneyPageVariant,
            cleanUrlJasaKonsFinishing,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Finishing', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-finishing.html' },
                { name: 'Perbandingan Jasa Finishing', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-finishing.html' },
                { name: 'Jasa Finishing', url: 'https://www.betonjayareadymix.com/p/jasa-finishing.html' },
                { name: 'Jasa Finishing Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-finishing-bangunan.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }
    
    // ═══════════════════════════════════════════════════════
    // [BLOK 5] JASA FINISHING INTERIOR
    // ═══════════════════════════════════════════════════════
    
    if (urlMappingJasaFinishingInteriorFromMoneyPageVariant[cleanUrlJasaKonsFinishing]) {
        generateBreadcrumbShared(
            urlMappingJasaFinishingInteriorFromMoneyPageVariant,
            cleanUrlJasaKonsFinishing,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Finishing', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-finishing.html' },
                { name: 'Perbandingan Jasa Finishing', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-finishing.html' },
                { name: 'Jasa Finishing', url: 'https://www.betonjayareadymix.com/p/jasa-finishing.html' },
                { name: 'Jasa Finishing Interior', url: 'https://www.betonjayareadymix.com/p/jasa-finishing-interior.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }

    // ═══════════════════════════════════════════════════════
    // [BLOK 6] JASA INTERIOR
    // ═══════════════════════════════════════════════════════
    
    if (urlMappingJasaInteriorFromMoneyMasterMoneyPage[cleanUrlJasaKonsFinishing]) {
        generateBreadcrumbShared(
            urlMappingJasaInteriorFromMoneyMasterMoneyPage,
            cleanUrlJasaKonsFinishing,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Interior', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-interior.html' },
                { name: 'Perbandingan Jasa Interior', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-interior.html' },
                { name: 'Jasa Interior', url: 'https://www.betonjayareadymix.com/p/jasa-interior.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }
	if (urlMappingJasaInteriorKamarFromMoneyPageVariant[cleanUrlJasaKonsFinishing]) {
        generateBreadcrumbShared(
            urlMappingJasaInteriorKamarFromMoneyPageVariant,
            cleanUrlJasaKonsFinishing,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Interior', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-interior.html' },
                { name: 'Perbandingan Jasa Interior', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-interior.html' },
                { name: 'Jasa Interior', url: 'https://www.betonjayareadymix.com/p/jasa-interior.html' },
                { name: 'Jasa Interior Kamar', url: 'https://www.betonjayareadymix.com/p/jasa-interior-kamar.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }
	if (urlMappingJasaInteriorRuangFromMoneyPageVariant[cleanUrlJasaKonsFinishing]) {
        generateBreadcrumbShared(
            urlMappingJasaInteriorRuangFromMoneyPageVariant,
            cleanUrlJasaKonsFinishing,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Interior', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-interior.html' },
                { name: 'Perbandingan Jasa Interior', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-interior.html' },
                { name: 'Jasa Interior', url: 'https://www.betonjayareadymix.com/p/jasa-interior.html' },
                { name: 'Jasa Interior Ruang', url: 'https://www.betonjayareadymix.com/p/jasa-interior-ruang.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }
    

    // ═══════════════════════════════════════════════════════
    // [BLOK 7] JASA PASANG LAMPU
    // ═══════════════════════════════════════════════════════
    
    if (urlMappingJasaPasangLampuFromMoneyPageVariant[cleanUrlJasaKonsFinishing]) {
        generateBreadcrumbShared(
            urlMappingJasaPasangLampuFromMoneyPageVariant,
            cleanUrlJasaKonsFinishing,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Pasang', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-pasang.html' },
                { name: 'Perbandingan Jasa Pasang', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-pasang.html' },
                { name: 'Jasa Pasang', url: 'https://www.betonjayareadymix.com/p/jasa-pasang.html' },
                { name: 'Jasa Pasang Lampu', url: 'https://www.betonjayareadymix.com/p/jasa-pasang-lampu.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }

    // ═══════════════════════════════════════════════════════
    // [BLOK 8] JASA FINISHING LAMPU
    // ═══════════════════════════════════════════════════════
    
    if (urlMappingJasaFinishingLampuFromMoneyPageVariant[cleanUrlJasaKonsFinishing]) {
        generateBreadcrumbShared(
            urlMappingJasaFinishingLampuFromMoneyPageVariant,
            cleanUrlJasaKonsFinishing,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Finishing', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-finishing.html' },
                { name: 'Perbandingan Jasa Finishing', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-finishing.html' },
                { name: 'Jasa Finishing', url: 'https://www.betonjayareadymix.com/p/jasa-finishing.html' },
                { name: 'Jasa Finishing Lampu', url: 'https://www.betonjayareadymix.com/p/jasa-finishing-lampu.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }
    
    // ═══════════════════════════════════════════════════════
    // [BLOK 9] JASA PASANG LAMPU INTERIOR / EKSTERIOR / TAMAN
    // ═══════════════════════════════════════════════════════
    
    if (urlMappingJasaPasangLampuInteriorFromVariantSubVariant[cleanUrlJasaKonsFinishing]) {
        generateBreadcrumbShared(
            urlMappingJasaPasangLampuInteriorFromVariantSubVariant,
            cleanUrlJasaKonsFinishing,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Pasang', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-pasang.html' },
                { name: 'Perbandingan Jasa Pasang', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-pasang.html' },
                { name: 'Jasa Pasang', url: 'https://www.betonjayareadymix.com/p/jasa-pasang.html' },
                { name: 'Jasa Pasang Lampu', url: 'https://www.betonjayareadymix.com/p/jasa-pasang-lampu.html' },
                { name: 'Jasa Pasang Lampu Interior', url: 'https://www.betonjayareadymix.com/p/jasa-pasang-lampu-interior.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }
    
    // ✅ FIX: URL Eksterior (sebelumnya salah ke interior)
    if (urlMappingJasaPasangLampuEksteriorFromVariantSubVariant[cleanUrlJasaKonsFinishing]) {
        generateBreadcrumbShared(
            urlMappingJasaPasangLampuEksteriorFromVariantSubVariant,
            cleanUrlJasaKonsFinishing,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Pasang', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-pasang.html' },
                { name: 'Perbandingan Jasa Pasang', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-pasang.html' },
                { name: 'Jasa Pasang', url: 'https://www.betonjayareadymix.com/p/jasa-pasang.html' },
                { name: 'Jasa Pasang Lampu', url: 'https://www.betonjayareadymix.com/p/jasa-pasang-lampu.html' },
                { name: 'Jasa Pasang Lampu Eksterior', url: 'https://www.betonjayareadymix.com/p/jasa-pasang-lampu-eksterior.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }
	
    // ═══════════════════════════════════════════════════════
    // [BLOK 10] JASA CAT
    // ═══════════════════════════════════════════════════════
	
    if (urlMappingJasaFinishingTrotoarFromVariantSubVariant[cleanUrlJasaKonsFinishing]) {
        generateBreadcrumbShared(
            urlMappingJasaFinishingTrotoarFromVariantSubVariant,
            cleanUrlJasaKonsFinishing,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Finishing', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-finishing.html' },
                { name: 'Perbandingan Jasa Finishing', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-finishing.html' },
                { name: 'Jasa Finishing', url: 'https://www.betonjayareadymix.com/p/jasa-finishing.html' },
                { name: 'Jasa Finishing Trotoar', url: 'https://www.betonjayareadymix.com/p/jasa-finishing-trotoar.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }
   
    
    if (urlMappingJasaCatFromMoneyPageVariant[cleanUrlJasaKonsFinishing]) {
        generateBreadcrumbShared(
            urlMappingJasaCatFromMoneyPageVariant,
            cleanUrlJasaKonsFinishing,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Finishing', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-finishing.html' },
                { name: 'Perbandingan Jasa Finishing', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-finishing.html' },
                { name: 'Jasa Finishing', url: 'https://www.betonjayareadymix.com/p/jasa-finishing.html' },
                { name: 'Jasa Cat', url: 'https://www.betonjayareadymix.com/p/jasa-cat.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }
    
    if (urlMappingJasaFinishingDindingFromMoneyPageVariant[cleanUrlJasaKonsFinishing]) {
        generateBreadcrumbShared(
            urlMappingJasaFinishingDindingFromMoneyPageVariant,
            cleanUrlJasaKonsFinishing,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Finishing', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-finishing.html' },
                { name: 'Perbandingan Jasa Finishing', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-finishing.html' },
                { name: 'Jasa Finishing', url: 'https://www.betonjayareadymix.com/p/jasa-finishing.html' },
                { name: 'Jasa Finishing Dinding', url: 'https://www.betonjayareadymix.com/p/jasa-finishing-dinding.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }
    
    if (urlMappingJasaCatInteriorFromVariantSubVariant[cleanUrlJasaKonsFinishing]) {
        generateBreadcrumbShared(
            urlMappingJasaCatInteriorFromVariantSubVariant,
            cleanUrlJasaKonsFinishing,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Finishing', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-finishing.html' },
                { name: 'Perbandingan Jasa Finishing', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-finishing.html' },
                { name: 'Jasa Finishing', url: 'https://www.betonjayareadymix.com/p/jasa-finishing.html' },
                { name: 'Jasa Cat', url: 'https://www.betonjayareadymix.com/p/jasa-cat.html' },
                { name: 'Jasa Cat Interior', url: 'https://www.betonjayareadymix.com/p/jasa-cat-interior.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }
    
    if (urlMappingJasaCatEksteriorFromVariantSubVariant[cleanUrlJasaKonsFinishing]) {
        generateBreadcrumbShared(
            urlMappingJasaCatEksteriorFromVariantSubVariant,
            cleanUrlJasaKonsFinishing,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Finishing', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-finishing.html' },
                { name: 'Perbandingan Jasa Finishing', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-finishing.html' },
                { name: 'Jasa Finishing', url: 'https://www.betonjayareadymix.com/p/jasa-finishing.html' },
                { name: 'Jasa Cat', url: 'https://www.betonjayareadymix.com/p/jasa-cat.html' },
                { name: 'Jasa Cat Eksterior', url: 'https://www.betonjayareadymix.com/p/jasa-cat-eksterior.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }
    
    // ═══════════════════════════════════════════════════════
    // [BLOK 11] HARGA JASA PEMBUATAN FURNITURE
    // ═══════════════════════════════════════════════════════
	
    if (urlMappingHargaJasaPembuatanFurnitureFromMoneyPageMoneyPage1[cleanUrlJasaKonsFinishing]) {
        generateBreadcrumbShared(
            urlMappingHargaJasaPembuatanFurnitureFromMoneyPageMoneyPage1,
            cleanUrlJasaKonsFinishing,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Pembuatan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-pembuatan.html' },
                { name: 'Perbandingan Jasa Pembuatan', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-pembuatan.html' },
                { name: 'Jasa Pembuatan', url: 'https://www.betonjayareadymix.com/p/jasa-pembuatan.html' },
                { name: 'Jasa Pembuatan Furniture', url: 'https://www.betonjayareadymix.com/p/jasa-pembuatan-furniture.html' },
                { name: 'Harga Jasa Pembuatan Furniture', url: 'https://www.betonjayareadymix.com/p/harga-jasa-pembuatan-furniture.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }
	
   
    // ═══════════════════════════════════════════════════════
    // [BLOK 13] JASA PASANG WALLPAPER DINDING
    // ═══════════════════════════════════════════════════════
    if (urlMappingJasaPasangWallpaper3dFromMoneyPageVariant[cleanUrlJasaKonsFinishing]) {
        generateBreadcrumbShared(
            urlMappingJasaPasangWallpaper3dFromMoneyPageVariant,
            cleanUrlJasaKonsFinishing,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Pasang', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-pasang.html' },
                { name: 'Perbandingan Jasa Pasang', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-pasang.html' },,
                { name: 'Jasa Pasang', url: 'https://www.betonjayareadymix.com/p/jasa-pasang.html' },
                { name: 'Jasa Pasang Wallpaper Dinding', url: 'https://www.betonjayareadymix.com/p/jasa-pasang-wallpaper-3d.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }
    if (urlMappingJasaPasangWallpaperDindingFromVariantSubVariant[cleanUrlJasaKonsFinishing]) {
        generateBreadcrumbShared(
            urlMappingJasaPasangWallpaperDindingFromVariantSubVariant,
            cleanUrlJasaKonsFinishing,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Pasang', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-pasang.html' },
                { name: 'Perbandingan Jasa Pasang', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-pasang.html' },,
                { name: 'Jasa Pasang', url: 'https://www.betonjayareadymix.com/p/jasa-pasang.html' },
                { name: 'Jasa Pasang Dinding', url: 'https://www.betonjayareadymix.com/p/jasa-pasang-dinding.html' },
                { name: 'Jasa Pasang Wallpaper Dinding', url: 'https://www.betonjayareadymix.com/p/jasa-pasang-wallpaper-dinding.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }
    
   

    // ═══════════════════════════════════════════════════════
    // [BLOK 16] JASA PASANG WPC
    // ═══════════════════════════════════════════════════════
	
    if (urlMappingJasaPasangWpcFromMoneyPageVariant[cleanUrlJasaKonsFinishing]) {
        generateBreadcrumbShared(
            urlMappingJasaPasangWpcFromMoneyPageVariant,
            cleanUrlJasaKonsFinishing,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Pasang', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-pasang.html' },
                { name: 'Perbandingan Jasa Pasang', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-pasang.html' },
                { name: 'Jasa Pasang', url: 'https://www.betonjayareadymix.com/p/jasa-pasang.html' },
                { name: 'Jasa Pasang WPC', url: 'https://www.betonjayareadymix.com/p/jasa-pasang-wpc.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }
    
    if (urlMappingJasaPasangWpcDindingFromVariantSubVariant[cleanUrlJasaKonsFinishing]) {
        generateBreadcrumbShared(
            urlMappingJasaPasangWpcDindingFromVariantSubVariant,
            cleanUrlJasaKonsFinishing,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Pasang', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-pasang.html' },
                { name: 'Perbandingan Jasa Pasang', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-pasang.html' },
                { name: 'Jasa Pasang', url: 'https://www.betonjayareadymix.com/p/jasa-pasang.html' },
                { name: 'Jasa Pasang WPC', url: 'https://www.betonjayareadymix.com/p/jasa-pasang-wpc.html' },
                { name: 'Jasa Pasang WPC Dinding', url: 'https://www.betonjayareadymix.com/p/jasa-pasang-wpc-dinding.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }
	
    // ═══════════════════════════════════════════════════════
    // [BLOK 17] JASA FINISHING INFRASTRUKTUR
    // ═══════════════════════════════════════════════════════
	
    if (urlMappingJasaFinishingInfrastrukturFromMoneyPageVariant[cleanUrlJasaKonsFinishing]) {
        generateBreadcrumbShared(
            urlMappingJasaFinishingInfrastrukturFromMoneyPageVariant,
            cleanUrlJasaKonsFinishing,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Finishing', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-finishing.html' },
                { name: 'Perbandingan Jasa Finishing', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-finishing.html' },
                { name: 'Jasa Finishing', url: 'https://www.betonjayareadymix.com/p/jasa-finishing.html' },
                { name: 'Jasa Finishing Infrastruktur', url: 'https://www.betonjayareadymix.com/p/jasa-finishing-infrastruktur.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }

    
    if (urlMappingJasaFinishingLantaiFromMoneyPageVariant[cleanUrlJasaKonsFinishing]) {
        generateBreadcrumbShared(
            urlMappingJasaFinishingLantaiFromMoneyPageVariant,
            cleanUrlJasaKonsFinishing,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Finishing', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-finishing.html' },
                { name: 'Perbandingan Jasa Finishing', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-finishing.html' },
                { name: 'Jasa Finishing', url: 'https://www.betonjayareadymix.com/p/jasa-finishing.html' },
                { name: 'Jasa Finishing Lantai', url: 'https://www.betonjayareadymix.com/p/jasa-finishing-lantai.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }
   
    if (urlMappingJasaFinishingLantaiBetonFromVariantSubVariant[cleanUrlJasaKonsFinishing]) {
        generateBreadcrumbShared(
            urlMappingJasaFinishingLantaiBetonFromVariantSubVariant,
            cleanUrlJasaKonsFinishing,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Finishing', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-finishing.html' },
                { name: 'Perbandingan Jasa Finishing', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-finishing.html' },
                { name: 'Jasa Finishing', url: 'https://www.betonjayareadymix.com/p/jasa-finishing.html' },
                { name: 'Jasa Finishing Lantai Beton', url: 'https://www.betonjayareadymix.com/p/jasa-finishing-lantai-beton.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }

    // ═══════════════════════════════════════════════════════
    // [BLOK 19] JASA PASANG KERAMIK LANTAI
    // ═══════════════════════════════════════════════════════
	
    if (urlMappingJasaPasangKeramikLantaiFromVariantSubVariant[cleanUrlJasaKonsFinishing]) {
        generateBreadcrumbShared(
            urlMappingJasaPasangKeramikLantaiFromVariantSubVariant,
            cleanUrlJasaKonsFinishing,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Pasang', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-pasang.html' },
                { name: 'Perbandingan Jasa Pasang', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-pasang.html' },
                { name: 'Jasa Pasang', url: 'https://www.betonjayareadymix.com/p/jasa-pasang.html' },
                { name: 'Jasa Pasang Lantai', url: 'https://www.betonjayareadymix.com/p/jasa-pasang-lantai.html' },
                { name: 'Jasa Pasang Keramik Lantai', url: 'https://www.betonjayareadymix.com/p/jasa-pasang-keramik-lantai.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }
 
    if (urlMappingJasaFinishingSaluranDrainaseFromVariantSubVariant[cleanUrlJasaKonsFinishing]) {
        generateBreadcrumbShared(
            urlMappingJasaFinishingSaluranDrainaseFromVariantSubVariant,
            cleanUrlJasaKonsFinishing,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Finishing', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-finishing.html' },
                { name: 'Perbandingan Jasa Finishing', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-finishing.html' },
                { name: 'Jasa Finishing', url: 'https://www.betonjayareadymix.com/p/jasa-finishing.html' },
                { name: 'Jasa Finishing Infrastruktur', url: 'https://www.betonjayareadymix.com/p/jasa-finishing-infrastruktur.html' },
                { name: 'Jasa Finishing Saluran Drainase', url: 'https://www.betonjayareadymix.com/p/jasa-finishing-saluran-drainase.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }
    
    // ═══════════════════════════════════════════════════════
    // [BLOK 21] JASA FINISHING EKSTERIOR
    // ═══════════════════════════════════════════════════════
    
    if (urlMappingJasaFinishingEksteriorFromMoneyPageVariant[cleanUrlJasaKonsFinishing]) {
        generateBreadcrumbShared(
            urlMappingJasaFinishingEksteriorFromMoneyPageVariant,
            cleanUrlJasaKonsFinishing,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Finishing', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-finishing.html' },
                { name: 'Perbandingan Jasa Finishing', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-finishing.html' },
                { name: 'Jasa Finishing', url: 'https://www.betonjayareadymix.com/p/jasa-finishing.html' },
                { name: 'Jasa Finishing Eksterior', url: 'https://www.betonjayareadymix.com/p/jasa-finishing-eksterior.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }
    
    // ═══════════════════════════════════════════════════════
    // [BLOK 22] JASA EKSTERIOR + FASAD
    // ═══════════════════════════════════════════════════════
    
    if (urlMappingJasaEksteriorFromMoneyMasterMoneyPage[cleanUrlJasaKonsFinishing]) {
        generateBreadcrumbShared(
            urlMappingJasaEksteriorFromMoneyMasterMoneyPage,
            cleanUrlJasaKonsFinishing,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Eksterior', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-eksterior.html' },
                { name: 'Perbandingan Jasa Eksterior', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-eksterior.html' },
                { name: 'Jasa Eksterior', url: 'https://www.betonjayareadymix.com/p/jasa-eksterior.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }
    
    if (urlMappingJasaEksteriorFromMoneyPageVariant[cleanUrlJasaKonsFinishing]) {
        generateBreadcrumbShared(
            urlMappingJasaEksteriorFromMoneyPageVariant,
            cleanUrlJasaKonsFinishing,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Eksterior', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-eksterior.html' },
                { name: 'Perbandingan Jasa Eksterior', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-eksterior.html' },
                { name: 'Jasa Eksterior', url: 'https://www.betonjayareadymix.com/p/jasa-eksterior.html' },
                { name: 'Jasa Fasad', url: 'https://www.betonjayareadymix.com/p/jasa-fasad.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }
    
    // ═══════════════════════════════════════════════════════
    // [BLOK 24] JASA TAMAN
    // ═══════════════════════════════════════════════════════
	
    if (urlMappingJasaTamanFromMoneyMaster2MoneyMaster3[cleanUrlJasaKonsFinishing]) {
        generateBreadcrumbShared(
            urlMappingJasaTamanFromMoneyMaster2MoneyMaster3,
            cleanUrlJasaKonsFinishing,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Eksterior', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-eksterior.html' },
                { name: 'Perbandingan Jasa Eksterior', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-eksterior.html' },
                { name: 'Jasa Eksterior', url: 'https://www.betonjayareadymix.com/p/jasa-eksterior.html' },
                { name: 'Jasa Taman', url: 'https://www.betonjayareadymix.com/p/jasa-taman.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }
    
    if (urlMappingJasaPembuatanTamanFromMoneyMaster3MoneyPage[cleanUrlJasaKonsFinishing]) {
        generateBreadcrumbShared(
            urlMappingJasaPembuatanTamanFromMoneyMaster3MoneyPage,
            cleanUrlJasaKonsFinishing,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Eksterior', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-eksterior.html' },
                { name: 'Perbandingan Jasa Eksterior', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-eksterior.html' },
                { name: 'Jasa Eksterior', url: 'https://www.betonjayareadymix.com/p/jasa-eksterior.html' },
                { name: 'Jasa Taman', url: 'https://www.betonjayareadymix.com/p/jasa-taman.html' },
                { name: 'Jasa Pembuatan Taman', url: 'https://www.betonjayareadymix.com/p/jasa-pembuatan-taman.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }

    // ═══════════════════════════════════════════════════════
    // [BLOK 25] JASA FINISHING STRUKTUR
    // ═══════════════════════════════════════════════════════
	
    if (urlMappingJasaFinishingStrukturFromMoneyPageVariant[cleanUrlJasaKonsFinishing]) {
        generateBreadcrumbShared(
            urlMappingJasaFinishingStrukturFromMoneyPageVariant,
            cleanUrlJasaKonsFinishing,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Finishing', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-finishing.html' },
                { name: 'Perbandingan Jasa Finishing', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-finishing.html' },
                { name: 'Jasa Finishing', url: 'https://www.betonjayareadymix.com/p/jasa-finishing.html' },
                { name: 'Jasa Finishing Struktur', url: 'https://www.betonjayareadymix.com/p/jasa-finishing-struktur.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }
   
    if (urlMappingJasaFinishingStrukturBetonEksposFromVariantSubVariant[cleanUrlJasaKonsFinishing]) {
        generateBreadcrumbShared(
            urlMappingJasaFinishingStrukturBetonEksposFromVariantSubVariant,
            cleanUrlJasaKonsFinishing,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Finishing', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-finishing.html' },
                { name: 'Perbandingan Jasa Finishing', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-finishing.html' },
                { name: 'Jasa Finishing', url: 'https://www.betonjayareadymix.com/p/jasa-finishing.html' },
                { name: 'Jasa Finishing Struktur', url: 'https://www.betonjayareadymix.com/p/jasa-finishing-struktur.html' },
                { name: 'Jasa Finishing Struktur Beton Ekspos', url: 'https://www.betonjayareadymix.com/p/jasa-finishing-struktur-beton-ekspos.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }
    

    console.log('[jasa-konstruksi-finishing] ✅ Semua breadcrumb selesai diproses');
}

console.log('═══════════════════════════════════════════════════════════');
console.log('📦 PART 3 SELESAI — Lanjut ke PART 4 (Fix v2.1.0 + Penutup)');
console.log('═══════════════════════════════════════════════════════════');

// ═══════════════════════════════════════════════════════════
// [BAGIAN 5] FIX v2.1.0 — Handle DOMContentLoaded race condition
// ═══════════════════════════════════════════════════════════
// MASALAH: kalau script di-load SETELAH DOMContentLoaded fire
// (misal pakai defer/async), maka addEventListener tidak dipanggil.
// SOLUSI: cek document.readyState — kalau sudah siap, langsung
// panggil handler tanpa tunggu event.
// ═══════════════════════════════════════════════════════════

if (document.readyState === 'loading') {
    console.log('[jasa-konstruksi-finishing] ⏳ DOM loading, tunggu event');
    document.addEventListener('DOMContentLoaded', initJasaKonsFinishing);
} else {
    console.log('[jasa-konstruksi-finishing] ⚡ DOM ready, langsung execute');
    initJasaKonsFinishing();
}

// ============================================================
// AKHIR FILE — TIDAK ADA KARAKTER TAMBAHAN
// ============================================================
