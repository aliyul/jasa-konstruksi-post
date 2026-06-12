 // Cek URL saat ini dan sesuaikan dengan kondisi yang diinginkan
// ============================================================
// 🔍 ENTITY TYPE: JASA
// ATURAN: JASA TIDAK BOLEH MENGGUNAKAN MONEY_MASTER
// ✅ Gunakan: MONEY_PAGE (Komersial 60% + Transaksional 40%) atau SUB1/SUB2
// ❌ Dilarang: MONEY_MASTER untuk JASA
// ============================================================

// ============================================================
// JASA KONSTRUKSI - PILLAR (LEVEL 1)
// ============================================================
// 🧠 SEO NOTE: PILLAR ini adalah halaman utama untuk semua layanan jasa konstruksi.
// Intent: Informasional (90%)
// Breadcrumb: Home > Jasa Konstruksi (2 level)
// ============================================================
/*
const urlMappingJasaKonsPillar = {
  // ============================================================
  // [PILLAR] - TOPICAL AUTHORITY
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-konstruksi.html": "Jasa Konstruksi",  // TYPE: PILLAR
};*/

// ============================================================
// 📁 LEVEL 2 - SUB2 (Turunan dari PILLAR Jasa Konstruksi)
// ============================================================

const urlMappingJasaKonsFromPillarSub2 = {
  // ============================================================
  // [SUB2] - SUB-PILLAR TIPE 2 (KATEGORI LAYANAN UTAMA)
  // 🧠 TYPE: SUB2 (Intent Informasional 60%)
  // Breadcrumb: Home > Jasa Konstruksi > [Nama Layanan] (3 level)
  // ============================================================
"https://www.betonjayareadymix.com/p/daftar-jasa-kitchen-set.html": "Daftar Jasa Kitchen Set",  // TYPE: SUB2
"https://www.betonjayareadymix.com/p/daftar-jasa-pembuatan.html": "Daftar Jasa Pembuatan",  // TYPE: SUB2
"https://www.betonjayareadymix.com/p/daftar-jasa-pasang.html": "Daftar Jasa Pasang",  // TYPE: SUB2
  "https://www.betonjayareadymix.com/p/daftar-jasa-alat-konstruksi.html": "Daftar Jasa Alat Konstruksi",  // TYPE: SUB2
  "https://www.betonjayareadymix.com/p/daftar-jasa-konstruksi-bangunan.html": "Daftar Jasa Konstruksi Bangunan",  // TYPE: SUB2
  "https://www.betonjayareadymix.com/p/daftar-jasa-konstruksi-struktur.html": "Daftar Jasa Konstruksi Struktur",  // TYPE: SUB2
  "https://www.betonjayareadymix.com/p/daftar-jasa-struktur-khusus.html": "Daftar Jasa Struktur Khusus",  // TYPE: SUB2
  "https://www.betonjayareadymix.com/p/daftar-jasa-lapangan-olahraga.html": "Daftar Jasa Lapangan Olahraga",  // TYPE: SUB2
// "https://www.betonjayareadymix.com/p/daftar-jasa-konstruksi-rumah.html": "Daftar Jasa Konstruksi Rumah",  // TYPE: SUB2
//  "https://www.betonjayareadymix.com/p/daftar-jasa-konstruksi-gedung.html": "Daftar Jasa Konstruksi Gedung",  // TYPE: SUB2
 // "https://www.betonjayareadymix.com/p/daftar-jasa-konstruksi-industri.html": "Daftar Jasa Konstruksi Industri",  // TYPE: SUB2
  "https://www.betonjayareadymix.com/p/daftar-jasa-struktur-konstruksi.html": "Daftar Jasa Struktur Konstruksi",  // TYPE: SUB2
  "https://www.betonjayareadymix.com/p/daftar-jasa-pondasi.html": "Daftar Jasa Pondasi",  // TYPE: SUB2
  "https://www.betonjayareadymix.com/p/daftar-jasa-saluran-drainase.html": "Daftar Jasa Saluran & Drainase",  // TYPE: SUB2
  "https://www.betonjayareadymix.com/p/daftar-jasa-jalan-perkerasan.html": "Daftar Jasa Jalan & Perkerasan",  // TYPE: SUB2
  "https://www.betonjayareadymix.com/p/daftar-jasa-pematangan-lahan.html": "Daftar Jasa Pematangan Lahan",  // TYPE: SUB2
  "https://www.betonjayareadymix.com/p/daftar-jasa-uji-tanah.html": "Daftar Jasa Uji Tanah",  // TYPE: SUB2
  "https://www.betonjayareadymix.com/p/daftar-jasa-cutting-beton.html": "Daftar Jasa Cutting Beton",  // TYPE: SUB2
  "https://www.betonjayareadymix.com/p/daftar-jasa-bongkar-bangunan.html": "Daftar Jasa Bongkar Bangunan",  // TYPE: SUB2
  "https://www.betonjayareadymix.com/p/daftar-jasa-buang-puing.html": "Daftar Jasa Buang Puing",  // TYPE: SUB2
  "https://www.betonjayareadymix.com/p/daftar-jasa-pengeboran.html": "Daftar Jasa Pengeboran",  // TYPE: SUB2
  "https://www.betonjayareadymix.com/p/daftar-jasa-perkuatan-tanah.html": "Daftar Jasa Perkuatan Tanah",  // TYPE: SUB2
  "https://www.betonjayareadymix.com/p/daftar-jasa-pembatas-pengaman.html": "Daftar Jasa Pembatas Pengaman",  // TYPE: SUB2
  "https://www.betonjayareadymix.com/p/daftar-jasa-renovasi.html": "Daftar Jasa Renovasi",  // TYPE: SUB2
  "https://www.betonjayareadymix.com/p/daftar-jasa-finishing.html": "Daftar Jasa Finishing",  // TYPE: SUB2
  "https://www.betonjayareadymix.com/p/daftar-jasa-instalasi-listrik.html": "Daftar Jasa Instalasi Listrik",  // TYPE: SUB2
  "https://www.betonjayareadymix.com/p/daftar-jasa-perbaikan-bangunan.html": "Daftar Jasa Perbaikan Bangunan",  // TYPE: SUB2
  "https://www.betonjayareadymix.com/p/daftar-jasa-perbaikan-infrastruktur.html": "Daftar Jasa Perbaikan Infrastruktur"  // TYPE: SUB2
};

// ============================================================
// 🔴 REDIRECT NOTES - JASA KONSTRUKSI (PILLAR)
// ============================================================
/*
🧠 SEO CANNIBAL FIX - REDIRECT PLAN:

| No | From URL | To URL | Type | Alasan SEO |
|----|----------|--------|------|------------|
| 1 | /p/jasa-konstruksi-bangunan.html | /p/jasa-konstruksi.html | 301 | Duplikasi intent dengan PILLAR utama |
| 2 | /p/jasa-konstruksi-infrastruktur.html | /p/jasa-konstruksi.html | 301 | Intent sama, gabung ke PILLAR |
| 3 | /p/jasa-konstruksi-indonesia.html | /p/jasa-konstruksi.html | 301 | Terlalu umum, cukup PILLAR utama |
*/

// ============================================================
// 📁 LEVEL 3 - SUB1 (Turunan dari SUB2 - PANDUAN / BRIDGE KE MONEY_PAGE)
// 🧠 TYPE: SUB1 (Intent Komersial 70%)
// Breadcrumb: Home > Jasa Konstruksi > [SUB2] > [Panduan] (4 level)
// ============================================================
const urlMappingJasaKitchenSetBridgeFromSub2Sub1 = {
  "https://www.betonjayareadymix.com/p/perbandingan-jasa-kitchen-set.html": "Perbandingan Jasa Kitchen Set" // (Tipe: Sub-Pillar Tipe 1)
};
const urlMappingJasaPasangBridgeFromSub2Sub1 = {
  "https://www.betonjayareadymix.com/p/perbandingan-jasa-pasang.html": "Perbandingan Jasa Pasang" // (Tipe: Sub-Pillar Tipe 1)
};
const urlMappingJasaPembuatanBridgeFromSub2Sub1 = {
  "https://www.betonjayareadymix.com/p/perbandingan-jasa-pembuatan.html": "Perbandingan Jasa Pembuatan" // (Tipe: Sub-Pillar Tipe 1)
};

const urlMappingJasaAlatKonstruksiBridgeFromSub2Sub1 = {
  "https://www.betonjayareadymix.com/p/perbandingan-jasa-alat-konstruksi.html": "Perbandingan Jasa Alat Konstruksi", // (Tipe: Sub-Pillar Tipe 1)
"https://www.betonjayareadymix.com/p/cara-memilih-jasa-alat-konstruksi.html": "Cara Memilih Jasa Alat Konstruksi",  //(Tipe: Sub-Pillar Tipe 1)
"https://www.betonjayareadymix.com/p/kelebihan-kekurangan-jasa-alat-konstruksi.html": "Kelebihan & Kekurangan Jasa Alat Konstruksi" //(Tipe: Sub-Pillar Tipe 1)
};
const urlMappingJasaAlatKonstruksiFromSub1MoneyMaster = {
  "https://www.betonjayareadymix.com/p/jasa-alat-konstruksi.html": "Jasa Alat Konstruksi"  // TYPE: MoneyPage
};
const urlMappingJasaAlatKonstruksiFromMoneyMasterMoneyPage = {
  "https://www.betonjayareadymix.com/p/estimasi-biaya-jasa-alat-konstruksi.html": "Estimasi Biaya Jasa Alat Konstruksi"  // TYPE: MoneyPage
};

const urlMappingJasaKonstruksiStrukturBridgeFromSub2Sub1 = {
   "https://www.betonjayareadymix.com/p/perbandingan-jasa-konstruksi-struktur.html": "Perbandingan Jasa Konstruksi Struktur"  // TYPE: SUB1
};
const urlMappingJasaKonstruksiStrukturFromSub1MoneyMaster = {
   "https://www.betonjayareadymix.com/p/jasa-konstruksi-struktur.html": "Jasa Konstruksi Struktur"  // TYPE: SUB1
};

const urlMappingJasaStrukturKhususBridgeFromSub2Sub1 = {
  "https://www.betonjayareadymix.com/p/perbandingan-jasa-struktur-khusus.html": "Perbandingan Jasa Struktur Khusus"  // TYPE: SUB2
};
const urlMappingJasaStrukturKhususFromSub1MoneyMaster = {
  "https://www.betonjayareadymix.com/p/jasa-struktur-khusus.html": "Jasa Struktur Khusus"  // TYPE: SUB2

};

const urlMappingJasaLapanganOlahragaBridgeFromSub2Sub1 = {
 "https://www.betonjayareadymix.com/p/perbandingan-jasa-lapangan-olahraga.html": "Perbandingan Jasa Lapangan Olahraga"  // TYPE: SUB2
};
const urlMappingJasaLapanganOlahragaFromSub1MoneyMaster = {
 "https://www.betonjayareadymix.com/p/jasa-lapangan-olahraga.html": "Jasa Lapangan Olahraga"  // TYPE: SUB2
};

const urlMappingKonstruksiBangunanBridgeFromSub2Sub1 = {
  "https://www.betonjayareadymix.com/p/perbandingan-jasa-konstruksi-bangunan.html": "Perbandingan Jasa Konstruksi Bangunan"
};
const urlMappingKonstruksiBangunanFromSub1MoneyMaster = {
 "https://www.betonjayareadymix.com/p/jasa-konstruksi-bangunan.html": "Jasa Konstruksi Bangunan"  // MM (L4)
};

const urlMappingRenovasiBridgeFromSub2Sub1 = {
   "https://www.betonjayareadymix.com/p/perbandingan-jasa-renovasi.html": "Perbandingan Jasa Renovasi"  // TYPE: SUB1
};
const urlMappingRenovasiFromSub1MoneyMaster = {
   "https://www.betonjayareadymix.com/p/jasa-renovasi.html": "Jasa Renovasi"  // TYPE: SUB1
};

const urlMappingFinishingBridgeFromSub2Sub1 = {
  //"https://www.betonjayareadymix.com/p/panduan-finishing-bangunan.html": "Panduan Finishing Bangunan",  // TYPE: SUB1
  //"https://www.betonjayareadymix.com/p/panduan-finishing-infrastruktur.html": "Panduan Finishing Infrastruktur"  // TYPE: SUB1
   "https://www.betonjayareadymix.com/p/perbandingan-jasa-finishing.html": "Perbandingan Jasa Finishing"  // TYPE: SUB1
};
const urlMappingFinishingFromSub1MoneyMaster = {
	"https://www.betonjayareadymix.com/p/jasa-finishing.html": "Jasa Finishing"
};

const urlMappingFinishingFromMoneyMasterMoneyMaster1 = {

//"https://www.betonjayareadymix.com/p/jasa-profil-beton.html": "Jasa Profil Beton",
	
	"https://www.betonjayareadymix.com/p/jasa-finishing-dinding.html": "Jasa Finishing Dinding", 
	"https://www.betonjayareadymix.com/p/jasa-finishing-furniture.html": "Jasa Finishing Furniture", 
		"https://www.betonjayareadymix.com/p/jasa-finishing-cat.html": "Jasa Finishing Cat",
	"https://www.betonjayareadymix.com/p/jasa-finishing-lampu.html": "Jasa Finishing Lampu",
 	// 
	"https://www.betonjayareadymix.com/p/jasa-finishing-lantai.html": "Jasa Finishing Lantai", 
   "https://www.betonjayareadymix.com/p/jasa-finishing-interior.html": "Jasa Finishing Interior", 
  "https://www.betonjayareadymix.com/p/jasa-finishing-eksterior.html": "Jasa Finishing Eksterior", 
  "https://www.betonjayareadymix.com/p/jasa-finishing-struktur.html": "Jasa Finishing Struktur",
  "https://www.betonjayareadymix.com/p/jasa-finishing-bangunan.html": "Jasa Finishing Bangunan", 
  "https://www.betonjayareadymix.com/p/jasa-finishing-infrastruktur.html": "Jasa Finishing Infrastruktur"
};

const urlMappingPerbaikanBangunanBridgeFromSub2Sub1 = {
  //"https://www.betonjayareadymix.com/p/panduan-perbaikan-bangunan.html": "Panduan Perbaikan Bangunan"  // TYPE: SUB1
   "https://www.betonjayareadymix.com/p/perbandingan-jasa-perbaikan-bangunan.html": "Perbandingan Jasa Perbaikan Bangunan"  // TYPE: SUB1
};
const urlMappingJasaPerbaikanBangunanFromSub1MoneyMaster = {
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-bangunan.html": "Jasa Perbaikan Bangunan"  //MONEY_MASTER1

};
const urlMappingPerbaikanInfrastrukturBridgeFromSub2Sub1 = {
    "https://www.betonjayareadymix.com/p/perbandingan-perbaikan-infrastruktur.html": "Perbandingan Jasa Perbaikan Infrastruktur"  // TYPE: SUB1
  // "https://www.betonjayareadymix.com/p/perbandingan-jasa-perbaikan-infrastruktur.html": "Perbandingan Jasa Perbaikan Infrastruktur"  // TYPE: SUB1
};
const urlMappingJasaPerbaikanInfrastrukturFromSub1MoneyMaster = {
	"https://www.betonjayareadymix.com/p/jasa-perbaikan-infrastruktur.html": "Jasa Perbaikan Infrastruktur"  //MONEY_MASTER1
};
const urlMappingPerbaikanInfrastrukturFromMoneyMasterMoneyMaster1 = {
// MM TURUNAN - JASA PERBAIKAN JALAN (LEVEL 4) - DIUBAH JADI 2 KATA AGAR MM
// ============================================================
"https://www.betonjayareadymix.com/p/jasa-perbaikan-jalan.html": "Jasa Perbaikan Jalan",  // ✅ MM (2 kata)
// MM TURUNAN - JASA PERBAIKAN JEMBATAN (LEVEL 4)
// ============================================================
"https://www.betonjayareadymix.com/p/jasa-perbaikan-jembatan.html": "Jasa Perbaikan Jembatan",  // ✅ MM (2 kata)
// MM TURUNAN - JASA PERBAIKAN DRAINASE (LEVEL 4)
// ============================================================
"https://www.betonjayareadymix.com/p/jasa-perbaikan-drainase.html": "Jasa Perbaikan Drainase",  // ✅ MM (2 kata)
// ============================================================
// MM TURUNAN - JASA PERBAIKAN SEKOLAH (LEVEL 4)
// ============================================================
"https://www.betonjayareadymix.com/p/jasa-perbaikan-sekolah.html": "Jasa Perbaikan Sekolah",  // ✅ MM (2 kata)
// MM TURUNAN - JASA PERBAIKAN RUMAH SAKIT (LEVEL 4)
// ============================================================
"https://www.betonjayareadymix.com/p/jasa-perbaikan-rs.html": "Jasa Perbaikan RS",  // ✅ MM (2 kata)
// MM TURUNAN - JASA PERBAIKAN STADION OLAHRAGA (LEVEL 4)
// ============================================================
"https://www.betonjayareadymix.com/p/jasa-perbaikan-stadion.html": "Jasa Perbaikan Stadion"
};
const urlMappingPerbaikanInfrastrukturFromMoneyMasterMoneyPage = {
// ============================================================
// MP LANGSUNG DI BAWAH JASA PERBAIKAN INFRASTRUKTUR (LEVEL 5)
// ============================================================
// Perbaiki nama agar 3 kata (MP)
"https://www.betonjayareadymix.com/p/jasa-perbaikan-trotoar-jalan.html": "Jasa Perbaikan Trotoar Jalan",  // ✅ MP (3 kata)
"https://www.betonjayareadymix.com/p/jasa-perbaikan-halte-bus.html": "Jasa Perbaikan Halte Bus",  // ✅ MP (3 kata)
"https://www.betonjayareadymix.com/p/jasa-perbaikan-terminal-penumpang.html": "Jasa Perbaikan Terminal Penumpang",  // ✅ MP (3 kata)
"https://www.betonjayareadymix.com/p/jasa-perbaikan-taman-kota.html": "Jasa Perbaikan Taman Kota"
};

const urlMappingJalanPerkerasanBridgeFromSub2Sub1 = {
 "https://www.betonjayareadymix.com/p/perbandingan-jasa-jalan-perkerasan.html": "Perbandingan Jasa Jalan & Perkerasan"  // TYPE: SUB1
};
const urlMappingJalanPerkerasanFromSub1MoneyMaster = {
  "https://www.betonjayareadymix.com/p/jasa-jalan-perkerasan.html": "Jasa Jalan & Perkerasan"  // TYPE: SUB2
};

const urlMappingJasaPondasiBridgeFromSub2Sub1 = {
  //"https://www.betonjayareadymix.com/p/panduan-perbaikan-infrastruktur.html": "Panduan Perbaikan Infrastruktur"  // TYPE: SUB1
  "https://www.betonjayareadymix.com/p/perbandingan-jasa-pondasi.html": "Perbandingan Jasa Pondasi"  // TYPE: SUB1
};
const urlMappingJasaPondasiFromSub1MoneyMaster = {
  "https://www.betonjayareadymix.com/p/jasa-pondasi.html": "Jasa Pondasi"  // TYPE: SUB2
};
const urlMappingJasaSaluranDrainaseBridgeFromSub2Sub1 = {
  //"https://www.betonjayareadymix.com/p/panduan-perbaikan-infrastruktur.html": "Panduan Perbaikan Infrastruktur"  // TYPE: SUB1
  "https://www.betonjayareadymix.com/p/perbandingan-jasa-saluran-drainase.html": "Perbandingan Jasa Saluran & Drainase"  // TYPE: SUB1
};
const urlMappingJasaSaluranDrainaseFromSub1MoneyMaster = {
  "https://www.betonjayareadymix.com/p/jasa-saluran-drainase.html": "Jasa Saluran & Drainase"  // TYPE: SUB2
};
const urlMappingJasaPematanganLahanBridgeFromSub2Sub1 = {
  //"https://www.betonjayareadymix.com/p/panduan-perbaikan-infrastruktur.html": "Panduan Perbaikan Infrastruktur"  // TYPE: SUB1
  "https://www.betonjayareadymix.com/p/perbandingan-jasa-pematangan-lahan.html": "Perbandingan Jasa Pematangan Lahan"  // TYPE: SUB1
};
const urlMappingJasaPematanganLahanFromSub1MoneyMaster = {
  "https://www.betonjayareadymix.com/p/jasa-pematangan-lahan.html": "Jasa Pematangan Lahan"  // TYPE: SUB2
};
const urlMappingJasaUjiTanahBridgeFromSub2Sub1 = {
  "https://www.betonjayareadymix.com/p/perbandingan-jasa-uji-tanah.html": "Perbandingan Jasa Jasa Uji Tanah"  // TYPE: SUB1
};
const urlMappingJasaUjiTanahFromSub1MoneyMaster = {
  "https://www.betonjayareadymix.com/p/jasa-uji-tanah.html": "Jasa Uji Tanah"  // TYPE: SUB2
};
const urlMappingJasaCuttingBetonBridgeFromSub2Sub1 = {
  "https://www.betonjayareadymix.com/p/perbandingan-jasa-cutting-beton.html": "Perbandingan Jasa Cutting Beton"  // TYPE: SUB1
};
const urlMappingJasaCuttingBetonFromSub1MoneyMaster = {
  "https://www.betonjayareadymix.com/p/jasa-cutting-beton.html": "Jasa Cutting Beton"  // TYPE: SUB2
};

const urlMappingJasaBongkarBangunanBridgeFromSub2Sub1 = {
 "https://www.betonjayareadymix.com/p/perbandingan-jasa-bongkar-bangunan.html": "Perbandingan Jasa Bongkar Bangunan"  // TYPE: SUB1
};
const urlMappingJasaBongkarBangunanFromSub1MoneyMaster = {
  "https://www.betonjayareadymix.com/p/jasa-bongkar-bangunan.html": "Jasa Bongkar Bangunan"  // TYPE: SUB2
};

const urlMappingJasaBuangPuingBridgeFromSub2Sub1 = {
  "https://www.betonjayareadymix.com/p/perbandingan-jasa-buang-puing.html": "Perbandingan Jasa Buang Puing"  // TYPE: SUB1
};
const urlMappingJasaBuangPuingFromSub1MoneyMaster = {
  "https://www.betonjayareadymix.com/p/jasa-buang-puing.html": "Jasa Buang Puing"  // TYPE: SUB2
};

const urlMappingJasaPengeboranBridgeFromSub2Sub1 = {
  "https://www.betonjayareadymix.com/p/perbandingan-jasa-pengeboran.html": "Perbandingan Jasa Pengeboran"  // TYPE: SUB1
};
const urlMappingJasaPengeboranFromSub1MoneyMaster = {
  "https://www.betonjayareadymix.com/p/jasa-pengeboran.html": "Jasa Pengeboran"  // TYPE: SUB2
};

const urlMappingJasaPerkuatanTanahBridgeFromSub2Sub1 = {
   "https://www.betonjayareadymix.com/p/perbandingan-jasa-perkuatan-tanah.html": "Perbandingan Jasa Perkuatan Tanah"  // TYPE: SUB1
};
const urlMappingJasaPerkuatanTanahFromSub1MoneyMaster = {
  "https://www.betonjayareadymix.com/p/jasa-perkuatan-tanah.html": "Jasa Perkuatan Tanah"  // TYPE: SUB2
};

const urlMappingJasaPembatasPengamanBridgeFromSub2Sub1 = {
  "https://www.betonjayareadymix.com/p/perbandingan-jasa-pembatas-pengaman.html": "Perbandingan Jasa Pembatas Pengaman"  // TYPE: SUB1
};
const urlMappingJasaPembatasPengamanFromSub1MoneyMaster = {
  "https://www.betonjayareadymix.com/p/jasa-pembatas-pengaman.html": "Jasa Pembatas Pengaman"  // TYPE: SUB2
};

const urlMappingJasaInstalasiListrikBridgeFromSub2Sub1 = {
   "https://www.betonjayareadymix.com/p/perbandingan-jasa-instalasi-listrik.html": "Perbandingan Jasa Instalasi Listrik"  // TYPE: SUB1
};
const urlMappingJasaInstalasiListrikFromSub1MoneyMaster = {
  "https://www.betonjayareadymix.com/p/jasa-instalasi-listrik.html": "Jasa Instalasi Listrik"  // TYPE: SUB2
};
// ============================================================
// 📁 JASA ALAT KONSTRUKSI (ENTITY: SEWA/RENTAL - BUKAN JASA)
// ⚠️ PERHATIAN: Ini adalah ENTITY SEWA/RENTAL, BUKAN JASA
// Maka TYPE MONEY_MASTER diperbolehkan
// ============================================================

// [PILLAR] - Sewa Alat Konstruksi (LEVEL 1 - ENTITY TERPISAH)
/*const urlMappingSewaAlatKonstruksiPillar = {
  "https://www.betonjayareadymix.com/p/sewa-alat-konstruksi.html": "Sewa Alat Konstruksi",  // TYPE: PILLAR
};*/

// [SUB2] - KATEGORI SEWA SPESIFIK (ENTITY SEWA/RENTAL)
const urlMappingSewaAlatFromPillarSub2 = {
  "https://www.betonjayareadymix.com/p/daftar-sewa-alat-proyek.html": "Daftar Sewa Alat Proyek",  // TYPE: SUB2 PARENT
  "https://www.betonjayareadymix.com/p/daftar-sewa-alat-berat.html": "Daftar Sewa Alat Berat",  // TYPE: SUB2 PARENT
  "https://www.betonjayareadymix.com/p/daftar-sewa-alat-ringan.html": "Daftar Sewa Alat Ringan",  // TYPE: SUB2 PARENT
  "https://www.betonjayareadymix.com/p/daftar-sewa-alat-pendukung.html": "Daftar Sewa Alat Pendukung"  // TYPE: SUB2 PARENT
};
const urlMappingSewaAlatProyekFromSub2Sub1 = {
  "https://www.betonjayareadymix.com/p/perbandingan-sewa-alat-proyek.html": "Perbandingan Sewa Alat Proyek"  // TYPE: SUB1 PARENT
};

const urlMappingSewaAlatProyekFromSub1MoneyMaster = {
  //"https://www.betonjayareadymix.com/p/harga-sewa-alat-proyek.html": "Harga Sewa Alat Proyek"  // TYPE: MoneyMaster
   "https://www.betonjayareadymix.com/p/sewa-alat-proyek.html": "Sewa Alat Proyek"  // TYPE: MoneyMaster
};

const urlMappingSewaAlatBeratFromSub2Sub1 = {
  "https://www.betonjayareadymix.com/p/perbandingan-sewa-alat-berat.html": "Perbandingan Sewa Alat Berat",  // TYPE: SUB1 PARENT
  "https://www.betonjayareadymix.com/p/perbandingan-sewa-excavator.html": "Perbandingan Sewa Excavator",  // TYPE: SUB1 PARENT
  "https://www.betonjayareadymix.com/p/perbandingan-sewa-bulldozer.html": "Perbandingan Sewa Bulldozer",  // TYPE: SUB1 PARENT
  "https://www.betonjayareadymix.com/p/perbandingan-sewa-crane.html": "Perbandingan Sewa Crane",  // TYPE: SUB1 PARENT
  "https://www.betonjayareadymix.com/p/perbandingan-sewa-conrete-paver.html": "Perbandingan Concrete Paver",  // TYPE: SUB1 PARENT
  "https://www.betonjayareadymix.com/p/perbandingan-sewa-forklift.html": "Perbandingan Sewa Forklift",  // TYPE: SUB1 PARENT
  "https://www.betonjayareadymix.com/p/perbandingan-sewa-wales-stoom.html": "Perbandingan Sewa Wales Stoom",  // TYPE: SUB1 PARENT
  "https://www.betonjayareadymix.com/p/perbandingan-sewa-wheel-loader.html": "Perbandingan Sewa Wheel Loader",  // TYPE: SUB1 PARENT
  "https://www.betonjayareadymix.com/p/perbandingan-sewa-backhoe-loader.html": "Perbandingan Sewa Backhoe Loader",  // TYPE: SUB1 PARENT
  "https://www.betonjayareadymix.com/p/perbandingan-sewa-alat-pancang.html": "Perbandingan Sewa Alat Pancang",  // TYPE: SUB1 PARENT
  "https://www.betonjayareadymix.com/p/perbandingan-sewa-trencher.html": "Perbandingan Sewa Trencher",  // TYPE: SUB1 PARENT
  "https://www.betonjayareadymix.com/p/perbandingan-sewa-vibro-roller.html": "Perbandingan Sewa Vibro Roller",  // TYPE: SUB1 PARENT
	
   "https://www.betonjayareadymix.com/p/durasi-sewa-alat-berat.html": "Durasi Sewa Alat Berat"  // TYPE: SUB1 pendukung
};
const urlMappingSewaAlatBeratFromSub1MoneyMaster = {
   "https://www.betonjayareadymix.com/p/sewa-alat-berat.html": "Sewa Alat Berat",  // TYPE: MoneyMaster PARENT
  "https://www.betonjayareadymix.com/p/sewa-excavator.html": "Sewa Excavator",  // TYPE: MoneyMaster PARENT
 // "https://www.betonjayareadymix.com/p/sewa-beko.html": "Sewa Beko",  // TYPE: MoneyMaster PARENT
  "https://www.betonjayareadymix.com/p/sewa-forklift.html": "Sewa Forklift",  // TYPE: MoneyMaster PARENT
  "https://www.betonjayareadymix.com/p/sewa-bulldozer.html": "Sewa Bulldozer",  // TYPE: MoneyMaster PARENT
  "https://www.betonjayareadymix.com/p/sewa-vibro-roller.html": "Sewa Vibro Roller",  // TYPE: MoneyMaster PARENT
  "https://www.betonjayareadymix.com/p/sewa-wales-stoom.html": "Sewa Wales Stoom",  // TYPE: MoneyMaster PARENT
  "https://www.betonjayareadymix.com/p/sewa-crane.html": "Sewa Crane",  // TYPE: MoneyMaster PARENT
  "https://www.betonjayareadymix.com/p/sewa-self-loader.html": "Sewa Self Loader",  // TYPE: MoneyMaster PARENT
  "https://www.betonjayareadymix.com/p/sewa-wheel-loader.html": "Sewa Wheel Loader",  // TYPE: MoneyMaster PARENT
  "https://www.betonjayareadymix.com/p/sewa-tandem-roller.html": "Sewa Tandem Roller",  // TYPE: MoneyMaster PARENT
  "https://www.betonjayareadymix.com/p/sewa-backhoe-loader.html": "Sewa Backhoe Loader",  // TYPE: MoneyMaster PARENT
  "https://www.betonjayareadymix.com/p/sewa-baby-roller.html": "Sewa Baby Roller",  // TYPE: MoneyMaster PARENT
  "https://www.betonjayareadymix.com/p/sewa-motor-grader.html": "Sewa Motor Grader",  // TYPE: MoneyMaster PARENT
  "https://www.betonjayareadymix.com/p/sewa-alat-pancang.html": "Sewa Alat Pancang",  // TYPE: MoneyMaster PARENT
  "https://www.betonjayareadymix.com/p/sewa-trencher.html": "Sewa Trencher",  // TYPE: MoneyMaster PARENT
  "https://www.betonjayareadymix.com/p/sewa-concrete-paver.html": "Sewa Concrete Paver"  // TYPE: MoneyMaster PARENT
	// ganti ke page
	/*
	"https://www.betonjayareadymix.com/2019/02/sewa-pile-driver.html": "Sewa Pile Driver",  // TYPE: MONEY_MASTER
"https://www.betonjayareadymix.com/2019/02/sewa-diesel-hammer.html": "Sewa Diesel Hammer",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/2019/02/sewa-alat-pancang-hidrolik.html": "Sewa Alat Pancang Hidrolik",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/2019/02/sewa-alat-pancang-hspd.html": "Sewa Alat Pancang HSPD",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/2019/02/sewa-alat-pancang-sheet-pile.html": "Sewa Alat Pancang Sheet Pile",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/2019/02/sewa-alat-pancang-mini-pile.html": "Sewa Alat Pancang Mini Pile",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/2019/02/sewa-alat-pancang-diesel-hammer.html": "Sewa Alat Pancang Diesel Hammer",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/2019/02/sewa-alat-pancang-drop-hammer.html": "Sewa Alat Pancang Drop Hammer",  // TYPE: MONEY_MASTER
  */
	
};
/*
const urlMappingSewaExcavatorFromSub2Sub1 = {
  "https://www.betonjayareadymix.com/p/perbandingan-sewa-excavator.html": "Perbandingan Sewa Excavator"  // TYPE: SUB1
};
const urlMappingSewaBulldozerFromSub2Sub1 = {
  "https://www.betonjayareadymix.com/p/perbandingan-sewa-bulldozer.html": "Perbandingan Sewa Bulldozer"  // TYPE: SUB1
};
const urlMappingSewaCraneFromSub2Sub1 = {
  "https://www.betonjayareadymix.com/p/perbandingan-sewa-crane.html": "Perbandingan Sewa Crane"  // TYPE: SUB1
};
const urlMappingSewaBekoFromSub2Sub1 = {
  "https://www.betonjayareadymix.com/p/perbandingan-sewa-beko.html": "Perbandingan Sewa Beko"  // TYPE: SUB1
};
const urlMappingSewaForkliftFromSub2Sub1 = {
  "https://www.betonjayareadymix.com/p/perbandingan-sewa-forklift.html": "Perbandingan Sewa Forklift"  // TYPE: SUB1
};
const urlMappingSewaWalesStoomFromSub2Sub1 = {
  "https://www.betonjayareadymix.com/p/perbandingan-sewa-wales-stoom.html": "Perbandingan Sewa Wales Stoom"  // TYPE: SUB1
};
const urlMappingSewaWheelLoaderFromSub2Sub1 = {
  "https://www.betonjayareadymix.com/p/perbandingan-sewa-wheel-loader.html": "Perbandingan Sewa Wheel Loader"  // TYPE: SUB1
};
const urlMappingSewaBackhoeLoaderFromSub2Sub1 = {
  "https://www.betonjayareadymix.com/p/perbandingan-sewa-backhoe-loader.html": "Perbandingan Sewa Backhoe Loader"  // TYPE: SUB1
};
*/

const urlMappingSewaAlatRinganFromSub2Sub1 = {
  "https://www.betonjayareadymix.com/p/perbandingan-sewa-alat-ringan.html": "Perbandingan Sewa Alat Ringan"  // TYPE: SUB1
};
const urlMappingSewaAlatRinganFromSub1MoneyMaster = {
  "https://www.betonjayareadymix.com/p/sewa-alat-ringan.html": "Sewa Alat Ringan"  // TYPE: SUB1
};
const urlMappingSewaAlatRinganFromMoneyMasterMoneyMaster1 = {
 // "https://www.betonjayareadymix.com/p/harga-sewa-alat-ringan.html": "Harga Sewa Alat Ringan"  // TYPE: MoneyMaster PARENT
 // ============================================================
// MONEY MASTER (MM)
// ROOT COMMERCIAL ENTITY
// ============================================================

"https://www.betonjayareadymix.com/p/sewa-alat-cleaning.html":
  "Sewa Alat Cleaning",

"https://www.betonjayareadymix.com/p/sewa-mesin-polisher.html":
  "Sewa Mesin Polisher",

"https://www.betonjayareadymix.com/p/sewa-concrete-cutter.html":
  "Sewa Concrete Cutter",

"https://www.betonjayareadymix.com/p/sewa-jack-hammer.html":
  "Sewa Jack Hammer",

"https://www.betonjayareadymix.com/p/sewa-vibrator-beton.html":
  "Sewa Vibrator Beton",

"https://www.betonjayareadymix.com/p/sewa-mesin-molen.html":
  "Sewa Mesin Molen",

"https://www.betonjayareadymix.com/p/sewa-genset.html":
  "Sewa Genset",

"https://www.betonjayareadymix.com/p/sewa-mesin-compressor.html":
  "Sewa Mesin Compressor",

"https://www.betonjayareadymix.com/p/sewa-cutting-beton.html":
  "Sewa Cutting Beton",

"https://www.betonjayareadymix.com/p/sewa-mesin-rumput.html":
  "Sewa Mesin Rumput",

"https://www.betonjayareadymix.com/p/sewa-screed.html":
  "Sewa Screed",

"https://www.betonjayareadymix.com/p/sewa-trowel.html":
  "Sewa Trowel",

"https://www.betonjayareadymix.com/p/sewa-stamper.html":
  "Sewa Stamper"
};
const urlMappingSewaAlatPendukungFromSub2Sub1 = {
  "https://www.betonjayareadymix.com/p/perbandingan-sewa-alat-pendukung.html": "Perbandingan Sewa Alat Pendukung"  // TYPE: SUB1 PARENT
};


const urlMappingSewaAlatPendukungFromSub1MoneyMaster = {
  //"https://www.betonjayareadymix.com/p/harga-sewa-alat-proyek.html": "Harga Sewa Alat Proyek"  // TYPE: MoneyMaster
   "https://www.betonjayareadymix.com/p/sewa-alat-pendukung.html": "Sewa Alat Pendukung"  // TYPE: MoneyMaster
};

const urlMappingSewaAlatPendukungFromMoneyMasterMoneyMaster1 = {
  //"https://www.betonjayareadymix.com/p/harga-sewa-alat-pendukung.html": "Harga Sewa Alat Pendukung"  // TYPE: MoneyMaster
"https://www.betonjayareadymix.com/p/sewa-akses-keamanan.html": "Sewa Akses Keamanan",
  "https://www.betonjayareadymix.com/p/sewa-alat-survey.html": "Sewa Alat Survey",
//  "https://www.betonjayareadymix.com/p/sewa-alat-pendukung.html": "Sewa Alat Pendukung",  // TYPE: MoneyMaster
    "https://www.betonjayareadymix.com/p/sewa-pencahayaan-proyek.html": "Sewa Pencahayaan Proyek",
// "https://www.betonjayareadymix.com/p/sewa-bekisting-scaffolding.html": "Sewa Bekisting Scaffolding",
 //   "https://www.betonjayareadymix.com/p/sewa-pencahayaan-utilitas.html": "Sewa Pencahayaan Utilitas",
	"https://www.betonjayareadymix.com/p/sewa-bekisting.html": "Sewa Bekisting",
	"https://www.betonjayareadymix.com/p/sewa-scaffolding.html": "Sewa Scaffolding",
	"https://www.betonjayareadymix.com/p/sewa-pompa-dewatering.html": "Sewa Pompa Dewatering",
	"https://www.betonjayareadymix.com/p/sewa-pompa-air.html": "Sewa Pompa Air",
    "https://www.betonjayareadymix.com/p/sewa-pompa-lumpur.html": "Sewa Pompa Lumpur",
	"https://www.betonjayareadymix.com/p/sewa-alat-bor.html": "Sewa Alat Bor",
    "https://www.betonjayareadymix.com/p/sewa-tangki-air.html": "Sewa Tangki Air",
    "https://www.betonjayareadymix.com/p/sewa-selang-proyek.html": "Sewa Selang Proyek",
    "https://www.betonjayareadymix.com/p/sewa-pipa-proyek.html": "Sewa Pipa Proyek"
};

// [MONEY_PAGE] - SEWA ALAT KONSTRUKSI RINGAN (SARAN ITEM)
/*
const urlMappingSewaAlatKonstruksiRinganFromSub1MoneyPage = {
  // 🟡 SARAN ITEM (BELUM AKTIF - PERLU DIBUAT KONTEN)
  // "https://www.betonjayareadymix.com/p/sewa-gerbang-tangan.html": "Sewa Gerbang Tangan",  // TYPE: MONEY_PAGE
  // "https://www.betonjayareadymix.com/p/sewa-concrete-mixer.html": "Sewa Concrete Mixer",  // TYPE: MONEY_PAGE
};*/

// ============================================================
// 📁 JASA PERBAIKAN INFRASTRUKTUR (ENTITY: JASA)
// 🧠 TYPE: MONEY_PAGE (bukan MONEY_MASTER)
// ============================================================

const urlMappingInfrastrukturFromSub1MoneyMaster = {
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-jalan.html": "Jasa Perbaikan Jalan",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-jembatan.html": "Jasa Perbaikan Jembatan",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-drainase.html": "Jasa Perbaikan Drainase",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-trotoar.html": "Jasa Perbaikan Trotoar"  // TYPE: MONEY_PAGE
};

const urlMappingJasaKitchenSetFromSub1MoneyMaster = {
	"https://www.betonjayareadymix.com/p/jasa-kitchen-set.html": "Jasa Kitchen Set"
};

const urlMappingJasaKitchenSetFromMoneyMasterMoneyPage = {
	"https://www.betonjayareadymix.com/p/jasa-custom-kitchen-set.html": "Jasa Custom Kitchen Set",
    "https://www.betonjayareadymix.com/p/jasa-pasang-kitchen-set.html": "Jasa Pasang Kitchen Set",
	    // Kitchen Set juga bisa sebagai MP
    "https://www.betonjayareadymix.com/p/jasa-pembuatan-kitchen-set.html": "Jasa Pembuatan Kitchen Set"
};
const urlMappingJasaPembuatanFromSub1MoneyMaster = {
	"https://www.betonjayareadymix.com/p/jasa-pembuatan.html": "Jasa Pembuatan"
};

const urlMappingJasaPembuatanFromMoneyMasterMoneyMaster1 = {
    // ================================================================
    // 📌 MONEY-MASTER (LEVEL 4) - JASA PEMBUATAN (HANYA KATEGORI UTAMA)
    // ================================================================
    "https://www.betonjayareadymix.com/p/jasa-pembuatan-furniture.html": "Jasa Pembuatan Furniture",
    "https://www.betonjayareadymix.com/p/jasa-pembuatan-pagar.html": "Jasa Pembuatan Pagar",
    "https://www.betonjayareadymix.com/p/jasa-pembuatan-kanopi.html": "Jasa Pembuatan Kanopi",
    "https://www.betonjayareadymix.com/p/jasa-pembuatan-tangga.html": "Jasa Pembuatan Tangga",
    "https://www.betonjayareadymix.com/p/jasa-pembuatan-gazebo.html": "Jasa Pembuatan Gazebo",
    "https://www.betonjayareadymix.com/p/jasa-pembuatan-teras.html": "Jasa Pembuatan Teras",
    "https://www.betonjayareadymix.com/p/jasa-pembuatan-balkon.html": "Jasa Pembuatan Balkon",
    "https://www.betonjayareadymix.com/p/jasa-pembuatan-decking.html": "Jasa Pembuatan Decking",
    "https://www.betonjayareadymix.com/p/jasa-pembuatan-taman.html": "Jasa Pembuatan Taman",
    // Kusen/Pintu/Jendela bisa menjadi MM sendiri atau di bawah Furniture
    "https://www.betonjayareadymix.com/p/jasa-pembuatan-kusen.html": "Jasa Pembuatan Kusen",
    "https://www.betonjayareadymix.com/p/jasa-pembuatan-pintu.html": "Jasa Pembuatan Pintu",
    "https://www.betonjayareadymix.com/p/jasa-pembuatan-jendela.html": "Jasa Pembuatan Jendela"
};

// ================================================================
// 📌 MONEY-PAGE (LEVEL 5) - HANYA UNTUK JENIS FURNITURE SPESIFIK
// ================================================================
const urlMappingJasaPembuatanFurnitureFromMoneyMasterMoneyMaster1 = {
	"https://www.betonjayareadymix.com/p/jasa-pembuatan-furniture-custom.html": "Jasa Pembuatan Furniture Custom", // (Perbaiki URL yang 404)
"https://www.betonjayareadymix.com/p/jasa-pembuatan-kitchen-set.html": "Jasa Pembuatan Kitchen Set",
"https://www.betonjayareadymix.com/p/jasa-pembuatan-lemari-built-in.html": "Jasa Pembuatan Lemari Built In",
"https://www.betonjayareadymix.com/p/jasa-pembuatan-partisi-ruangan.html": "Jasa Pembuatan Partisi Ruangan",
"https://www.betonjayareadymix.com/p/jasa-pembuatan-meja-kursi.html": "Jasa Pembuatan Meja Kursi",
"https://www.betonjayareadymix.com/p/jasa-pembuatan-sofa-custom.html": "Jasa Pembuatan Sofa Custom",
"https://www.betonjayareadymix.com/p/jasa-pembuatan-tempat-tidur.html": "Jasa Pembuatan Tempat Tidur",
"https://www.betonjayareadymix.com/p/jasa-pembuatan-rak-buku.html": "Jasa Pembuatan Rak Buku",
"https://www.betonjayareadymix.com/p/jasa-pembuatan-kamar-set.html": "Jasa Pembuatan Kamar Set"
};

// ================================================================
// 📋 TOTAL: 20 MONEY-MASTER (LEVEL 4)
// ================================================================
const urlMappingJasaPasangFromSub1MoneyMaster = {
	"https://www.betonjayareadymix.com/p/jasa-pasang.html": "Jasa Pasang"
};

const urlMappingJasaPasangFromMoneyMasterMoneyMaster1 = {
    // ================================================================
    // 📌 MONEY-MASTER (LEVEL 4) - HANYA KATEGORI UTAMA
    // ================================================================
    "https://www.betonjayareadymix.com/p/jasa-pasang-keramik.html": "Jasa Pasang Keramik",
    "https://www.betonjayareadymix.com/p/jasa-pasang-wpc.html": "Jasa Pasang WPC",
    // 1. Lantai & Dinding (sebagai induk)
    "https://www.betonjayareadymix.com/p/jasa-pasang-lantai.html": "Jasa Pasang Lantai",
    "https://www.betonjayareadymix.com/p/jasa-pasang-dinding.html": "Jasa Pasang Dinding",


    // 2. Plafon & Atap
    "https://www.betonjayareadymix.com/p/jasa-pasang-plafon.html": "Jasa Pasang Plafon",
    "https://www.betonjayareadymix.com/p/jasa-rangka-atap.html": "Jasa Rangka Atap",
    "https://www.betonjayareadymix.com/p/jasa-pasang-atap.html": "Jasa Pasang Atap",
    "https://www.betonjayareadymix.com/p/jasa-pasang-kanopi.html": "Jasa Pasang Kanopi",
    
    // 3. Furniture & Elemen Interior
    "https://www.betonjayareadymix.com/p/jasa-pasang-furniture.html": "Jasa Pasang Furniture",
   // "https://www.betonjayareadymix.com/p/jasa-pasang-kitchen-set.html": "Jasa Pasang Kitchen Set",
    "https://www.betonjayareadymix.com/p/jasa-pasang-partisi.html": "Jasa Pasang Partisi",
    
    // 4. Kusen, Pintu, Jendela
    "https://www.betonjayareadymix.com/p/jasa-pasang-kusen.html": "Jasa Pasang Kusen",
    "https://www.betonjayareadymix.com/p/jasa-pasang-pintu.html": "Jasa Pasang Pintu",
    "https://www.betonjayareadymix.com/p/jasa-pasang-jendela.html": "Jasa Pasang Jendela",
    
    // 5. Area Outdoor & Lanskap
    "https://www.betonjayareadymix.com/p/jasa-pasang-decking.html": "Jasa Pasang Decking",
    "https://www.betonjayareadymix.com/p/jasa-pasang-pagar.html": "Jasa Pasang Pagar",
    "https://www.betonjayareadymix.com/p/jasa-pasang-paving-block.html": "Jasa Pasang Paving Block",
    
    // 6. Utilitas & Teknologi
    "https://www.betonjayareadymix.com/p/jasa-pasang-lampu.html": "Jasa Pasang Lampu",
    "https://www.betonjayareadymix.com/p/jasa-pasang-cctv.html": "Jasa Pasang CCTV",
    "https://www.betonjayareadymix.com/p/jasa-pasang-ac.html": "Jasa Pasang AC"
};
// MP di bawah Jasa Pasang Lantai
const urlMappingJasaPasangLantaiFromMoneyMaster1MoneyMaster2 = {
// Material khusus lantai
    "https://www.betonjayareadymix.com/p/jasa-pasang-spc.html": "Jasa Pasang SPC",
    "https://www.betonjayareadymix.com/p/jasa-pasang-vinyl.html": "Jasa Pasang Vinyl",
    "https://www.betonjayareadymix.com/p/jasa-pasang-laminate.html": "Jasa Pasang Laminate",  // Perbaiki URL 404
    "https://www.betonjayareadymix.com/p/jasa-pasang-hardwood.html": "Jasa Pasang Hardwood",  // Perbaiki URL 404
    "https://www.betonjayareadymix.com/p/jasa-pasang-parket.html": "Jasa Pasang Parket"  // Perbaiki URL 404

};

// MP di bawah Jasa Pasang Dinding
const urlMappingJasaPasangDindingChild = {
    "https://www.betonjayareadymix.com/p/jasa-pasang-wallpaper.html": "Jasa Pasang Wallpaper",
    "https://www.betonjayareadymix.com/p/jasa-pasang-wallpanel.html": "Jasa Pasang Wall Panel",
   // "https://www.betonjayareadymix.com/p/jasa-pasang-wpc-dinding.html": "Jasa Pasang WPC Dinding"
};

// MP di bawah Jasa Pasang Plafon
const urlMappingJasaPasangPlafonChild = {
    "https://www.betonjayareadymix.com/p/jasa-pasang-gypsum.html": "Jasa Pasang Gypsum",
    "https://www.betonjayareadymix.com/p/jasa-pasang-pvc-plafon.html": "Jasa Pasang PVC Plafon"
};

// MP di bawah Jasa Pasang Furniture
const urlMappingJasaPasangFurnitureChild = {
    "https://www.betonjayareadymix.com/p/jasa-pasang-lemari.html": "Jasa Pasang Lemari",
    "https://www.betonjayareadymix.com/p/jasa-pasang-meja.html": "Jasa Pasang Meja",
    "https://www.betonjayareadymix.com/p/jasa-pasang-kursi.html": "Jasa Pasang Kursi"
};
// ============================================================
// 📁 JASA PONDASI & PERKUATAN TANAH - SUB2 (LEVEL 2)
// ============================================================

// ============================================================
// 📁 BONGKAR BANGUNAN - SUB2 (LEVEL 2)
// ============================================================

const urlMappingBongkarBangunanFromMoneyMasterMoneyMaster1 = {
  "https://www.betonjayareadymix.com/p/jasa-bongkar-tower.html": "Jasa Bongkar Tower",  // TYPE: SUB2
  "https://www.betonjayareadymix.com/p/jasa-bongkar-rumah.html": "Jasa Bongkar Rumah",  // TYPE: SUB2
  "https://www.betonjayareadymix.com/p/jasa-bongkar-beton.html": "Jasa Bongkar Beton",  // TYPE: SUB2
  "https://www.betonjayareadymix.com/p/jasa-bongkar-atap.html": "Jasa Bongkar Atap",  // TYPE: SUB2
  "https://www.betonjayareadymix.com/p/jasa-bongkar-keramik.html": "Jasa Bongkar Keramik",  // TYPE: SUB2
  "https://www.betonjayareadymix.com/p/jasa-bongkar-tembok.html": "Jasa Bongkar Tembok",  // TYPE: SUB2
  "https://www.betonjayareadymix.com/p/jasa-bongkar-dinding.html": "Jasa Bongkar Dinding",  // TYPE: SUB2
  "https://www.betonjayareadymix.com/p/jasa-bongkar-plafon.html": "Jasa Bongkar Plafon",  // TYPE: SUB2
  "https://www.betonjayareadymix.com/p/jasa-bongkar-partisi.html": "Jasa Bongkar Partisi",  // TYPE: SUB2
  "https://www.betonjayareadymix.com/p/jasa-bongkar-pagar.html": "Jasa Bongkar Pagar",  // TYPE: SUB2
  "https://www.betonjayareadymix.com/p/jasa-bongkar-lantai.html": "Jasa Bongkar Lantai"  // TYPE: SUB2
};

// ============================================================
// 📁 JASA RENOVASI - SUB2 (LEVEL 2)
// ============================================================

const urlMappingRenovasiFromMoneyMasterMoneyMaster1 = {
  //"https://www.betonjayareadymix.com/p/jasa-renovasi-fasilitas-umum.html": "Jasa Renovasi Fasilitas Umum",
  "https://www.betonjayareadymix.com/p/jasa-renovasi-fasilitas.html": "Jasa Renovasi Fasilitas", 
  "https://www.betonjayareadymix.com/p/jasa-renovasi-bangunan.html": "Jasa Renovasi Bangunan", 
  "https://www.betonjayareadymix.com/p/jasa-renovasi-interior.html": "Jasa Renovasi Interior",  
  "https://www.betonjayareadymix.com/p/jasa-renovasi-eksterior.html": "Jasa Renovasi Eksterior"
  //"https://www.betonjayareadymix.com/p/jasa-renovasi-eksterior-bangunan.html": "Jasa Renovasi Eksterior Bangunan"
};
// ============================================================
// JASA RENOVASI BANGUNAN (SUB2 - MASTER)
// ============================================================
// 🧠 SEO NOTE: Halaman utama untuk semua layanan renovasi bangunan
// Parent: Jasa Renovasi (/p/jasa-renovasi.html)
// Breadcrumb: Home > Jasa Konstruksi > Jasa Renovasi > Jasa Renovasi Bangunan
// ============================================================

const urlMappingRenovasiBangunanFromMoneyMaster1MoneyPage = {
  "https://www.betonjayareadymix.com/p/jasa-renovasi-lantai-bangunan.html": "Jasa Renovasi Lantai Bangunan",

  // ============================================================
  // [VARIANT] - JASA RENOVASI TEMPAT IBADAH
  // Breadcrumb: Home > Jasa Konstruksi > Jasa Renovasi > Jasa Renovasi Bangunan > Jasa Renovasi Tempat Ibadah
  // ============================================================
 // fasilitas umum "https://www.betonjayareadymix.com/p/jasa-renovasi-tempat-ibadah.html": "Jasa Renovasi Tempat Ibadah",

  // ============================================================
  // [VARIANT] - JASA RENOVASI PABRIK
  // Breadcrumb: Home > Jasa Konstruksi > Jasa Renovasi > Jasa Renovasi Bangunan > Jasa Renovasi Pabrik
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-renovasi-bangunan-pabrik.html": "Jasa Renovasi Bangunan Pabrik",

  // ============================================================
  // [VARIANT] - JASA RENOVASI RUMAH
  // Breadcrumb: Home > Jasa Konstruksi > Jasa Renovasi > Jasa Renovasi Bangunan > Jasa Renovasi Rumah
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-renovasi-bangunan-rumah.html": "Jasa Renovasi Bangunan Rumah",

  // ============================================================
  // [VARIANT] - JASA RENOVASI KANTOR
  // Breadcrumb: Home > Jasa Konstruksi > Jasa Renovasi > Jasa Renovasi Bangunan > Jasa Renovasi Kantor
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-renovasi-bangunan-kantor.html": "Jasa Renovasi Bangunan Kantor",

  // ============================================================
  // [VARIANT] - JASA RENOVASI GEDUNG
  // Breadcrumb: Home > Jasa Konstruksi > Jasa Renovasi > Jasa Renovasi Bangunan > Jasa Renovasi Gedung
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-renovasi-bangunan-gedung.html": "Jasa Renovasi Bangunan Gedung",

  // ============================================================
  // [VARIANT] - JASA RENOVASI GUDANG
  // Breadcrumb: Home > Jasa Konstruksi > Jasa Renovasi > Jasa Renovasi Bangunan > Jasa Renovasi Gudang
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-renovasi-bangunan-gudang.html": "Jasa Renovasi Bangunan Gudang",

  // ============================================================
  // [VARIANT] - JASA RENOVASI HOTEL APARTEMEN
  // Breadcrumb: Home > Jasa Konstruksi > Jasa Renovasi > Jasa Renovasi Bangunan > Jasa Renovasi Hotel Apartemen
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-renovasi-hotel-apartemen.html": "Jasa Renovasi Hotel Apartemen"
};

// ============================================================
// 🟡 SARAN ITEM BARU - JASA RENOVASI BANGUNAN
// ============================================================
/*
| Nama Halaman | URL Saran | Page Type | Breadcrumb (4 level) |
|--------------|-----------|-----------|----------------------|
| Jasa Renovasi Rumah Sakit | /p/jasa-renovasi-rumah-sakit.html | [VARIANT] | Home > Jasa Konstruksi > Jasa Renovasi > Jasa Renovasi Bangunan > Jasa Renovasi Rumah Sakit |
| Jasa Renovasi Sekolah | /p/jasa-renovasi-sekolah.html | [VARIANT] | Home > Jasa Konstruksi > Jasa Renovasi > Jasa Renovasi Bangunan > Jasa Renovasi Sekolah |
| Jasa Renovasi Ruko | /p/jasa-renovasi-ruko.html | [VARIANT] | Home > Jasa Konstruksi > Jasa Renovasi > Jasa Renovasi Bangunan > Jasa Renovasi Ruko |
| Harga Jasa Renovasi Bangunan | /2019/08/harga-renovasi-bangunan.html | [MONEY PAGE] | Home > Jasa Konstruksi > Jasa Renovasi > Harga Renovasi Bangunan |
*/
// ============================================================
// 📁 JASA PERAWATAN & PERBAIKAN BANGUNAN - SUB2 (LEVEL 2)
// ============================================================

const urlMappingPerbaikanBangunanFromMoneyMasterMoneyPage = {
  // MP - TURUNAN (LEVEL 5) - URL BARU
// ============================================================
"https://www.betonjayareadymix.com/p/jasa-perbaikan-lantai-bangunan.html": "Jasa Perbaikan Lantai Bangunan",
"https://www.betonjayareadymix.com/p/jasa-perbaikan-struktur-bangunan.html": "Jasa Perbaikan Struktur Bangunan", 
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-waterproofing-bangunan.html": "Jasa Perbaikan Waterproofing Bangunan",
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-elemen-arsitektural.html": "Jasa Perbaikan Elemen Arsitektural",  
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-atap-drainase-bangunan.html": "Jasa Perbaikan Atap Drainase Bangunan"
};

// ============================================================
// 📁 JASA PENGEBORAN - SUB2 (LEVEL 2) & MONEY_PAGE (LEVEL 4)
// 🧠 ENTITY: JASA → TYPE: MONEY_PAGE (bukan MONEY_MASTER)
// ============================================================

const urlMappingPengeboranFromSub1MoneyMaster = {
  "https://www.betonjayareadymix.com/p/jasa-pengeboran.html": "Jasa Pengeboran" // TYPE: MONEY MASTER
};

const urlMappingPengeboranFromMoneyMasterMoneyMaster1 = {
  // [MONEY_PAGE] - JENIS PENGEBORAN SPESIFIK (JASA)
  //"https://www.betonjayareadymix.com/p/jasa-bor-air-sumur.html": "Jasa Bor Air Sumur",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/p/jasa-tukang-bor.html": "Jasa Tukang Bor",  //MONEY_MASTER1
  "https://www.betonjayareadymix.com/p/jasa-bor-sumur.html": "Jasa Bor Sumur",  //MONEY_MASTER1
  "https://www.betonjayareadymix.com/p/jasa-bore-pile.html": "Jasa Bore Pile",  // TYPE: MONEY_MASTER1
  "https://www.betonjayareadymix.com/p/jasa-coring-beton.html": "Jasa Coring Beton",  // TYPE: MONEY_MASTER1
  "https://www.betonjayareadymix.com/p/jasa-bor-beton.html": "Jasa Bor Beton",  // TYPE: MONEY_MASTER1
  "https://www.betonjayareadymix.com/p/jasa-bor-tanah.html": "Jasa Bor Tanah",  // TYPE: MONEY_MASTER1
  "https://www.betonjayareadymix.com/p/jasa-bor-horizontal.html": "Jasa Bor Horizontal",  // TYPE: MONEY_MASTER1
  "https://www.betonjayareadymix.com/p/jasa-bor-tembok.html": "Jasa Bor Tembok"  // TYPE: MONEY_MASTER1
};


// ============================================================
// 📁 JASA SALURAN & DRAINASE - SUB2 (LEVEL 2) & MONEY_PAGE
// 🧠 ENTITY: JASA → TYPE: MONEY_PAGE
// ⚠️ STATUS: KONTEN KOSONG - PERLU DIBUAT
// ============================================================

/*const urlMappingSaluranFromPillarSub2 = {
  "https://www.betonjayareadymix.com/p/jasa-saluran-drainase.html": "Jasa Saluran & Drainase",  // TYPE: SUB2
};*/

const urlMappingSaluranFromMoneyMasterMoneyPage = {
  // 🟡 SARAN ITEM (BELUM AKTIF - PERLU DIBUAT KONTEN)
   "https://www.betonjayareadymix.com/p/jasa-saluran-air-hujan.html": "Jasa Saluran Air Hujan",  // TYPE: MONEY_PAGE
   "https://www.betonjayareadymix.com/p/jasa-pemasangan-u-ditch.html": "Jasa Pemasangan U Ditch",  // TYPE: MONEY_PAGE
   "https://www.betonjayareadymix.com/p/jasa-pemasangan-box-culvert.html": "Jasa Pemasangan Box Culvert",  // TYPE: MONEY_PAGE
   "https://www.betonjayareadymix.com/p/jasa-saluran-irigasi-air-limbah.html": "Jasa Saluran Irigasi & Air Limbah",  // TYPE: MONEY_PAGE
   "https://www.betonjayareadymix.com/p/jasa-pembuatan-sumur-resapan.html": "Jasa Pembuatan Sumur Resapan"  // TYPE: MONEY_PAGE
};

const urlMappingJalanPerkerasanFromMoneyMasterMoneyMaster1 = {
  "https://www.betonjayareadymix.com/p/jasa-perkerasan-jalan.html": "Jasa Perkerasan Jalan",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/p/jasa-pengerasan-jalan.html": "Jasa Pengerasan Jalan" // TYPE: MONEY_PAGE
};

// ============================================================
// 📁 JASA PEMATANGAN LAHAN - SUB2 (LEVEL 2) & MONEY_PAGE
// 🧠 ENTITY: JASA → TYPE: MONEY_PAGE
// ============================================================
/*
const urlMappingPematanganLahanFromPillarSub2 = {
  "https://www.betonjayareadymix.com/p/jasa-pematangan-lahan.html": "Jasa Pematangan Lahan",  // TYPE: SUB2
};*/

const urlMappingJasaPematanganLahanFromMoneyMasterMoneyPage = {
// ============================================================
// MP - TURUNAN (LEVEL 5) - URL BARU
// ============================================================
"https://www.betonjayareadymix.com/p/jasa-pekerjaan-galian-tanah.html": "Jasa Pekerjaan Galian Tanah",
"https://www.betonjayareadymix.com/p/jasa-pengupasan-lahan-tanah.html": "Jasa Pengupasan Lahan Tanah",  // tetap
"https://www.betonjayareadymix.com/p/jasa-pembersihan-lahan-pematangan.html": "Jasa Pembersihan Lahan Pematangan",
"https://www.betonjayareadymix.com/p/jasa-perataan-dan-grading-lahan.html": "Jasa Perataan dan Grading Lahan",  // tetap
"https://www.betonjayareadymix.com/p/jasa-pekerjaan-elevasi-lahan.html": "Jasa Pekerjaan Elevasi Lahan",
"https://www.betonjayareadymix.com/p/jasa-pembentukan-badan-lahan.html": "Jasa Pembentukan Badan Lahan",
"https://www.betonjayareadymix.com/p/jasa-cut-and-fill-lahan.html": "Jasa Cut and Fill Lahan",  // tetap
"https://www.betonjayareadymix.com/p/jasa-pemotongan-bukit-lahan.html": "Jasa Pemotongan Bukit Lahan",  // tetap
"https://www.betonjayareadymix.com/p/jasa-urugan-tanah-lahan.html": "Jasa Urugan Tanah Lahan",  // tetap
"https://www.betonjayareadymix.com/p/jasa-pemadatan-tanah-lahan.html": "Jasa Pemadatan Tanah Lahan",  // tetap
"https://www.betonjayareadymix.com/p/jasa-base-course-lahan.html": "Jasa Base Course Lahan",  // tetap
"https://www.betonjayareadymix.com/p/jasa-stabilisasi-tanah-lahan.html": "Jasa Stabilisasi Tanah Lahan",  // tetap
"https://www.betonjayareadymix.com/p/jasa-pemasangan-drainase-lahan.html": "Jasa Pemasangan Drainase Lahan",
"https://www.betonjayareadymix.com/p/jasa-pemasangan-geotekstil-lahan.html": "Jasa Pemasangan Geotekstil Lahan",
"https://www.betonjayareadymix.com/p/jasa-persiapan-pondasi-lahan.html": "Jasa Persiapan Pondasi Lahan",  // tetap
"https://www.betonjayareadymix.com/p/jasa-tebang-pohon-pematangan-lahan.html": "Jasa Tebang Pohon Pematangan Lahan"
};

// ============================================================
// 📁 JASA UJI TANAH - SUB2 (LEVEL 2) & MONEY_PAGE
// 🧠 ENTITY: JASA → TYPE: MONEY_PAGE
// ============================================================
/*
const urlMappingUjiTanahFromPillarSub2 = {
  "https://www.betonjayareadymix.com/p/jasa-uji-tanah.html": "Jasa Uji Tanah",  // TYPE: SUB2
};*/

const urlMappingUjiTanahFromMoneyMasterMoneyMaster1 = {
  "https://www.betonjayareadymix.com/p/jasa-sondir-tanah.html": "Jasa Sondir Tanah",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/p/jasa-cpt-tanah.html": "Jasa CPT Tanah",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/p/jasa-lab-tanah.html": "Jasa Lab Tanah",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/p/jasa-boring-tanah.html": "Jasa Boring Tanah",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/p/jasa-uji-penetrasi.html": "Jasa Uji Penetrasi"  // TYPE: MONEY_PAGE
};


// ============================================================
// 📁 JASA PEMBATAS & PENGAMAN - SUB2 (LEVEL 2) & MONEY_PAGE
// 🧠 ENTITY: JASA → TYPE: MONEY_PAGE
// ============================================================
/*
const urlMappingPembatasFromPillarSub2 = {
  "https://www.betonjayareadymix.com/p/jasa-pembatas-pengaman.html": "Jasa Pembatas Pengaman",  // TYPE: SUB2
};*/

const urlMappingJasaPembatasPengamanFromMoneyMasterMoneyPage  = {
  "https://www.betonjayareadymix.com/p/jasa-pengamanan-area-proyek.html": "Jasa Pengamanan Area Proyek",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/p/jasa-rambu-dan-sistem-keamanan-visual.html": "Jasa Rambu dan Sistem Keamanan Visual",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/p/jasa-pengaman-sisi-jalan-infrastruktur.html": "Jasa Pengaman Sisi Jalan Infrastruktur"  // TYPE: MONEY_PAGE
  //"https://www.betonjayareadymix.com/p/jasa-pembuatan-pagar-dinding-pembatas.html": "Jasa Pembuatan Pagar Dinding Pembatas",  // TYPE: MONEY_PAGE
  //"https://www.betonjayareadymix.com/p/jasa-pasang-pagar-dinding-pembatas.html": "Jasa Pasang Pagar Dinding Pembatas"  // TYPE: MONEY_PAGE  // TYPE: MONEY_PAGE

};

// ============================================================
// 📁 JASA INSTALASI LISTRIK - SUB2 (LEVEL 2) & MONEY_PAGE
// 🧠 ENTITY: JASA → TYPE: MONEY_PAGE
// ============================================================
/*
const urlMappingJasaInstalasiListrikFromPillarSub2 = {
  "https://www.betonjayareadymix.com/p/jasa-instalasi-listrik.html": "Jasa Instalasi Listrik",  // TYPE: SUB2
};*/

const urlMappingJasaInstalasiListrikFromSub1MoneyPage = {
  "https://www.betonjayareadymix.com/p/jasa-instalasi-solar-panel.html": "Jasa Instalasi Solar Panel",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/p/jasa-instalasi-listrik-rumah.html": "Jasa Instalasi Listrik Rumah",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/p/jasa-instalasi-listrik-komersial.html": "Jasa Instalasi Listrik Komersial",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/p/jasa-pemasangan-panel-listrik.html": "Jasa Pemasangan Panel Listrik",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/p/jasa-keamanan-proteksi-listrik.html": "Jasa Keamanan & Proteksi Listrik",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/p/jasa-maintenance-perbaikan-listrik.html": "Jasa Maintenance & Perbaikan Listrik",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/p/jasa-konsultasi-listrik.html": "Jasa Konsultasi Listrik"  // TYPE: MONEY_PAGE
};

// ============================================================
// 🔴 BREADCRUMB SKIP LEVEL NOTES
// ============================================================
/*
📌 BREADCRUMB SKIP LEVEL YANG DIPERBOLEHKAN:

Untuk semua MONEY_PAGE di atas (ENTITY JASA):
- Skip SUB2 (kategori) jika tidak perlu muncul di breadcrumb
- Breadcrumb maksimal 4 level termasuk Home

Contoh Breadcrumb yang benar:
Home > Jasa Konstruksi > Jasa Pengeboran > Jasa Bor Air Sumur (4 level)
Home > Jasa Konstruksi > Jasa Jalan Perkerasan > Jasa Perkerasan Jalan (4 level)

✅ SEMUA URL di atas sudah diperbaiki: MONEY_MASTER → MONEY_PAGE untuk ENTITY JASA
✅ MONEY_MASTER TIDAK BOLEH digunakan untuk ENTITY JASA
✅ ENTITY SEWA/RENTAL tetap boleh menggunakan MONEY_MASTER (terpisah)
✅ Aman untuk SEO - tidak melanggar aturan EEAT
*/

// ============================================================
// 📋 RINGKASAN PERUBAHAN (SEBELUM vs SESUDAH)
// ============================================================
/*
SEBELUM (SALAH)                      | SESUDAH (BENAR)
--------------------------------------|-------------------------------------
MONEY_MASTER untuk JASA               | MONEY_PAGE untuk JASA
urlMappingJasaKons (PILLAR di-comment)| urlMappingJasaKonsPillar (AKTIF)
urlMappingJasaAlatKonstruksi (SUB2)   | Dipisah ke ENTITY SEWA/RENTAL
Semua MONEY_MASTER di JASA            | Diubah menjadi MONEY_PAGE

✅ ENTITY TYPE: JASA - semua halaman JASA menggunakan MONEY_PAGE
✅ ENTITY TYPE: SEWA/RENTAL - tetap boleh menggunakan MONEY_MASTER
❌ MONEY_MASTER tidak diperbolehkan untuk JASA
✅ MONEY_PAGE adalah type yang benar untuk JASA (Komersial 60% + Transaksional 40%)
*/
/*
const urlMappingCustom = {

};
*/

/**
 * ============================================================
 * generateBreadcrumbJasaKonstruksi v8.9 FINAL
 * UNIVERSAL ENTITY HIERARCHY ENGINE - FIXED SAME LEVEL PARENT
 * ============================================================
 *
 * ✅ UPDATE v8.9
 * ------------------------------------------------------------
 * - UPDATED: Daftar lokasi money child diperluas (15+ kota/kabupaten)
 * - UPDATED: Variant detection per entity type
 * - PRODUK/MATERIAL: spesifikasi, mutu, ukuran, dimensi, grade, type, tipe
 * - JASA: standar pelayanan, metode kerja, SOP, prosedur, durasi, garansi
 * - SEWA: spesifikasi alat, kapasitas alat, spek alat
 * - FIX: K225/K250/K300 tetap MP (bukan variant)
 * - FIX: "terdekat" tetap sebagai money child
 *
 * ✅ UPDATE v8.8
 * ------------------------------------------------------------
 * - FIX: Parent dengan type YANG SAMA (MM→MM, MP→MP) TIDAK SKIP
 * - FIX: findNearestParentsByHierarchy() sekarang mengambil SEMUA parent
 * - FIX: Tidak ada filter level yang membatasi parent dengan level sama
 * - FIX: Current page tetap tidak ikut terpilih sebagai parent
 * - ENHANCED: Prioritas parent berdasarkan level tertinggi
 * - ENHHCED: Logging lebih detail untuk debugging
 *
 * ============================================================
 * @version 8.9.0
 * @date 2026-05-31
 * ============================================================
 */

function generateBreadcrumbJasaKonstruksi(
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
        DEBUG: true,
        CURRENT_YEAR: new Date().getFullYear()
    };

    // ============================================================
    // 2. LOGGER
    // ============================================================

    function log(message, type = 'INFO') {
        if (!CONFIG.DEBUG && type === 'INFO') return;
        const icons = { INFO: '📘', SUCCESS: '✅', WARN: '⚠️', ERROR: '❌', DEBUG: '🔍', VARIANT: '🔬' };
        console.log(`${icons[type] || '📘'} [Breadcrumb v8.9] ${message}`);
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
    // 5. TYPE LEVEL MAP & PRIORITAS
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

    const HIERARCHY_ORDER = [
        'home', 'pillar', 'sub-pillar-tipe-2', 'sub-pillar-tipe-1',
        'money-master', 'money-page', 'money-child', 'variant', 'sub-variant'
    ];

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

    // ============================================================
    // 11a. VARIANT KEYWORDS PER ENTITY (UPDATED v8.9)
    // ============================================================
    
    // Variant keywords untuk PRODUK & MATERIAL
    const VARIANT_KEYWORDS_PRODUK = [
        'spesifikasi', 'spec', 'detail spesifikasi',
        'mutu', 'kualitas', 'quality',
        'ukuran', 'dimensi',
        'grade', 'type', 'tipe', 'model',
        'standar', 'merk', 'brand', 'seri'
    ];

    // Variant keywords untuk JASA (lebih spesifik ke layanan)
    const VARIANT_KEYWORDS_JASA = [
        'standar pelayanan', 'sop', 'metode kerja',
        'prosedur', 'tahapan', 'cara kerja',
        'durasi', 'waktu pengerjaan', 'garansi',
        'standar pengerjaan'
    ];

    // Variant keywords untuk SEWA (hanya untuk spesifikasi alat)
    const VARIANT_KEYWORDS_SEWA = [
        'spesifikasi alat', 'kapasitas alat',
        'spek alat', 'detail alat', 'spesifikasi'
    ];

    // Technical specs yang TETAP MP (bukan variant) - untuk semua entity
    const TECHNICAL_SPECS = ['k225', 'k250', 'k300', 'k350', 'k400', 'k500', 'k600', 'fc', 'm6', 'm8', 'm10', 'm12'];

    const SPECIFIC_MODIFIERS = [
        'k225', 'k250', 'k300', 'm6', 'm8', 'm10',
        'diesel', 'hidrolik', 'mini pile', 'sheet pile', 'drop hammer',
        'breaker', 'long arm', 'vibrator', 'per jam', 'per hari',
        'per meter', 'per m2', 'terdekat', 'murah', 'kapasitas besar'
    ];

    // ============================================================
    // 11b. VARIANT DETECTION PER ENTITY (UPDATED v8.9)
    // ============================================================
    
    function isVariantPage(pageName, currentEntityType) {
        const lowerName = pageName.toLowerCase();
        
        // Cek technical specs - BUKAN variant (tetap MP)
        for (const spec of TECHNICAL_SPECS) {
            if (lowerName.includes(spec)) {
                return false;
            }
        }
        
        // Variant detection berdasarkan ENTITY TYPE
        if (currentEntityType === 'PRODUK_KONSTRUKSI' || currentEntityType === 'MATERIAL_KONSTRUKSI') {
            for (const kw of VARIANT_KEYWORDS_PRODUK) {
                if (lowerName.includes(kw)) {
                    log(`Variant detected (PRODUK/MATERIAL): "${pageName}" contains "${kw}"`, 'VARIANT');
                    return true;
                }
            }
        }
        
        if (currentEntityType === 'JASA_KONSTRUKSI') {
            for (const kw of VARIANT_KEYWORDS_JASA) {
                if (lowerName.includes(kw)) {
                    log(`Variant detected (JASA): "${pageName}" contains "${kw}"`, 'VARIANT');
                    return true;
                }
            }
            // Jasa TIDAK punya variant untuk spesifikasi teknis produk
            return false;
        }
        
        if (currentEntityType === 'SEWA_ALAT_KONSTRUKSI') {
            for (const kw of VARIANT_KEYWORDS_SEWA) {
                if (lowerName.includes(kw)) {
                    log(`Variant detected (SEWA): "${pageName}" contains "${kw}"`, 'VARIANT');
                    return true;
                }
            }
            // "spesifikasi excavator" → variant untuk SEWA
            if (lowerName.includes('spesifikasi') && (lowerName.includes('alat') || lowerName.includes('excavator') || lowerName.includes('dump') || lowerName.includes('alat berat'))) {
                log(`Variant detected (SEWA): "${pageName}" contains spesifikasi + alat`, 'VARIANT');
                return true;
            }
            return false;
        }
        
        return false;
    }

    // ============================================================
    // 12. LOCATION DETECTION (UPDATED v8.9 - DAFTAR LENGKAP)
    // ============================================================

    const LOCATION_WHITELIST = new Set([
        // Jabodetabek
        'jakarta', 'jakarta pusat', 'jakarta barat', 'jakarta selatan', 'jakarta timur', 'jakarta utara',
        'bogor', 'kota bogor', 'kabupaten bogor',
        'depok', 'kota depok',
        'tangerang', 'kota tangerang', 'kota tangerang selatan', 'kabupaten tangerang',
        'bekasi', 'kota bekasi', 'kabupaten bekasi',
        
        // Jawa Barat
        'bandung', 'kota bandung', 'kabupaten bandung',
        'karawang', 'kabupaten karawang',
        'purwakarta', 'kabupaten purwakarta',
        'cikarang', 'cikarang barat', 'cikarang pusat', 'cikarang selatan', 'cikarang timur', 'cikarang utara',
        'subang', 'kabupaten subang',
        'cirebon', 'kota cirebon', 'kabupaten cirebon',
        
        // Jawa Tengah
        'semarang', 'kota semarang', 'kabupaten semarang',
        'solo', 'surakarta', 'kota surakarta',
        'pekalongan', 'tegal', 'magelang', 'sukoharjo', 'boyolali', 'klaten',
        
        // DI Yogyakarta
        'jogja', 'yogyakarta', 'kota yogyakarta', 'kabupaten sleman', 'bantul', 'gunungkidul', 'kulon progo',
        
        // Jawa Timur
        'surabaya', 'kota surabaya',
        'malang', 'kota malang', 'kabupaten malang',
        'kediri', 'kota kediri', 'kabupaten kediri',
        'gresik', 'sidoarjo', 'mojokerto', 'pasuruan', 'probolinggo', 'jember', 'banyuwangi', 'madiun',
        
        // Sumatera
        'medan', 'kota medan',
        'palembang', 'pekanbaru', 'padang', 'lampung', 'bandar lampung', 'batam', 'tanjungpinang',
        'aceh', 'banda aceh', 'jambi', 'bengkulu', 'pangkal pinang',
        
        // Kalimantan
        'pontianak', 'balikpapan', 'samarinda', 'banjarmasin', 'palangkaraya',
        
        // Sulawesi
        'makassar', 'kota makassar',
        'manado', 'palu', 'kendari', 'gorontalo',
        
        // Bali & Nusa Tenggara
        'bali', 'kabupaten badung', 'kota denpasar', 'gianyar', 'tabanan', 'bangli', 'karangasem', 'klungkung', 'buleleng', 'jembrana',
        'mataram', 'kupang',
        
        // Lainnya
        'terdekat'
    ]);

    function isLocation(text) {
        if (!text) return false;
        const lower = text.toLowerCase();
        for (const city of LOCATION_WHITELIST) {
            if (new RegExp(`\\b${city.replace(/\s+/g, '\\s+')}\\b`, 'i').test(lower)) return true;
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
    // 16. JASA KEYWORDS
    // ============================================================

    const JASA_KEYWORDS_PATTERN = 
        /\b(jasa|kontraktor|tukang|borongan|renovasi|pasang|bangun|perbaikan|instalasi|proyek|cor|gali|urug|angkut)\b/i;

    // ============================================================
    // 17. PAGE TYPE DETECTION (UPDATED v8.9)
    // ============================================================

    function detectPageType(pageName, isHome = false) {
        const lowerName = cleanText(pageName.toLowerCase());

        if (isHome || lowerName === 'home' || lowerName === 'beranda') return 'home';
        if (isEntityPillarExactMatch(lowerName)) return 'pillar';
        if (isSubVariant(lowerName)) return 'sub-variant';

        // ✅ UPDATED v8.9: Variant detection per entity
        if (isVariantPage(lowerName, entityType)) {
            return 'variant';
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
        const HAS_JASA_WORD = JASA_KEYWORDS_PATTERN.test(lowerName);
        const HAS_LOCATION = isLocation(lowerName);

        if (HAS_LOCATION) return 'money-child';

        if (isSewaEntity() && HAS_SEWA_WORD && !HAS_PRICE_WORD) {
            const cleaned = lowerName.replace(/\b(sewa|rental)\b/gi, '').trim();
            const words = cleaned.split(/\s+/).filter(Boolean);
            const specific = isSpecificProduct(cleaned);
            if (words.length <= 2 && !specific && !isLocation(cleaned)) {
                return 'money-master';
            }
            return 'money-page';
        }

        if (isJasaEntity() && HAS_JASA_WORD && !HAS_PRICE_WORD) {
            let cleaned = lowerName;
            const jasaCleanList = ['jasa', 'kontraktor', 'tukang', 'borongan', 'renovasi', 'pasang', 'bangun', 'perbaikan', 'instalasi', 'proyek', 'cor', 'gali', 'urug', 'angkut'];
            for (const kw of jasaCleanList) {
                cleaned = cleaned.replace(new RegExp(`\\b${kw}\\b`, 'gi'), '');
            }
            cleaned = cleaned.trim();
            const words = cleaned.split(/\s+/).filter(Boolean);
            const specific = isSpecificProduct(cleaned);
            if (words.length <= 2 && !specific && !isLocation(cleaned)) {
                return 'money-master';
            }
            return 'money-page';
        }

        if (HAS_PRICE_WORD) {
            const cleaned = lowerName.replace(/\b(harga|biaya|tarif)\b/gi, '').trim();
            const words = cleaned.split(/\s+/).filter(Boolean);
            const specific = isSpecificProduct(cleaned);
            if (words.length <= 2 && !specific && !isLocation(cleaned)) {
                return 'money-master';
            }
            return 'money-page';
        }

        if ((isProdukEntity() || isMaterialEntity()) && !HAS_PRICE_WORD) {
            const words = lowerName.split(/\s+/).filter(Boolean);
            if (words.length <= 2) return 'pillar';
            return 'sub-pillar-tipe-2';
        }

        return 'pillar';
    }

    // ============================================================
    // 18. AUTO DETECT PARENT
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

            if (currentLower.includes(itemName) && itemName.length > 3) {
                score = itemName.length * 10;
            }

            const itemWords = itemName.split(/\s+/);
            for (const word of currentWords) {
                if (word.length > 2 && itemWords.includes(word)) {
                    score += 5;
                }
            }

            for (let i = 1; i <= currentWords.length; i++) {
                const prefix = currentWords.slice(0, i).join(' ');
                if (itemName === prefix) {
                    score += 100;
                    break;
                }
            }

            if (item.url) {
                const urlSlug = item.url.split('/').pop()?.replace('.html', '').replace(/-/g, ' ');
                if (urlSlug && currentLower.includes(urlSlug)) {
                    score += 50;
                }
            }

            const specificPatterns = ['finishing', 'bangunan', 'interior', 'eksterior', 'lantai', 'dinding'];
            for (const pattern of specificPatterns) {
                if (currentLower.includes(pattern) && itemName.includes(pattern)) {
                    score += 30;
                    break;
                }
            }

            if (score > bestScore) {
                bestScore = score;
                bestMatch = item;
            }
        }

        log(`Parent detection score: ${bestScore}`, 'INFO');
        return bestScore > 20 ? bestMatch : null;
    }

    function injectCurrentPageAndParent(breadcrumbItems, currentPageName, currentFullUrl) {
        let items = [...breadcrumbItems];
        const currentLower = currentPageName.toLowerCase();

        const hasCurrent = items.some(item => 
            item.name?.toLowerCase() === currentLower
        );

        if (!hasCurrent) {
            items.push({
                name: currentPageName,
                url: currentFullUrl
            });
        }

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
    // 19. FORCE PARENT INJECTION
    // ============================================================

    function forceInjectDirectParent(lineageLevels, allLevels, currentPageTitle, entityType, breadcrumbItems) {
        const currentLower = currentPageTitle.toLowerCase();
        let modifiedLineage = [...lineageLevels];
        const words = currentLower.split(/\s+/);

        // STRATEGI 1: Auto parent dari breadcrumbItems
        const autoParent = findNearestParentFromItems(breadcrumbItems, currentPageTitle);
        if (autoParent && !modifiedLineage.some(l => l.name === autoParent.name)) {
            const parentFromAll = allLevels.find(item => 
                item.name?.toLowerCase() === autoParent.name?.toLowerCase()
            );
            if (parentFromAll) {
                log(`AUTO PARENT: "${parentFromAll.name}"`, 'SUCCESS');
                modifiedLineage.push(parentFromAll);
            }
        }

        // STRATEGI 2: Pattern-based (prefix match)
        if (modifiedLineage.length === lineageLevels.length && words.length >= 2) {
            for (let i = words.length - 1; i >= 1; i--) {
                const potentialParent = words.slice(0, i).join(' ');
                const parentItem = allLevels.find(item => 
                    item.name.toLowerCase() === potentialParent
                );
                if (parentItem && !modifiedLineage.some(l => l.name === parentItem.name)) {
                    log(`PATTERN PARENT: "${parentItem.name}"`, 'SUCCESS');
                    modifiedLineage.push(parentItem);
                    break;
                }
            }
        }

        // FORCE PARENT UNTUK MP (Level 5) - tambahkan juga untuk level sama
        const currentLevel = TYPE_LEVEL_MAP[detectPageType(currentPageTitle)] || 99;
        
        // Cari SEMUA parent dengan level <= currentLevel (termasuk level sama)
        const allPotentialParents = allLevels.filter(item => 
            item.level <= currentLevel && 
            item.name.toLowerCase() !== currentLower &&
            !modifiedLineage.some(l => l.name === item.name)
        );
        
        // Tambahkan semua parent yang relevan (biarkan MAX_LEVEL nanti yang memfilter)
        for (const parent of allPotentialParents) {
            log(`FORCE PARENT: "${parent.name}" (level ${parent.level}) → "${currentPageTitle}"`, 'SUCCESS');
            modifiedLineage.push(parent);
        }

        // STRATEGI 3: Semantic similarity (opsional - bisa dihapus)
        if (modifiedLineage.length === lineageLevels.length) {
            const semanticKeywords = {
                'finishing': ['finishing', 'cat', 'epoxy', 'lampu', 'wallpaper'],
                'bangunan': ['bangunan', 'gedung', 'rumah', 'ruko'],
                'interior': ['interior', 'dalam', 'ruangan'],
                'eksterior': ['eksterior', 'luar', 'halaman'],
                'lantai': ['lantai', 'keramik', 'epoxy lantai', 'marmer', 'granit'],
                'dinding': ['dinding', 'tembok', 'wallpaper']
            };
            
            for (const [parentKeyword, childKeywords] of Object.entries(semanticKeywords)) {
                const isChildMatch = childKeywords.some(kw => currentLower.includes(kw));
                if (isChildMatch) {
                    const parentItem = allLevels.find(item => 
                        item.name.toLowerCase().includes(parentKeyword)
                    );
                    if (parentItem && !modifiedLineage.some(l => l.name === parentItem.name)) {
                        log(`SEMANTIC PARENT: "${parentItem.name}"`, 'SUCCESS');
                        modifiedLineage.push(parentItem);
                        break;
                    }
                }
            }
        }

        // STRATEGI 4: Last resort
        if (modifiedLineage.length === lineageLevels.length && allLevels.length > 0) {
            const lowerLevelItems = allLevels.filter(item => 
                item.level <= currentLevel && 
                item.name.toLowerCase() !== currentLower
            );
            if (lowerLevelItems.length > 0) {
                const sortedByLevel = [...lowerLevelItems].sort((a, b) => b.level - a.level);
                const highestLevelParent = sortedByLevel[0];
                if (highestLevelParent && !modifiedLineage.some(l => l.name === highestLevelParent.name)) {
                    log(`LAST RESORT: "${highestLevelParent.name}"`, 'WARN');
                    modifiedLineage.push(highestLevelParent);
                }
            }
        }
        
        return modifiedLineage;
    }

    // ============================================================
    // 20. HIERARCHY VALIDATOR
    // ============================================================
    
    function validateAndFixHierarchy(lineage) {
        if (lineage.length <= 1) return lineage;
        const fixed = [];
        
        // Urutkan berdasarkan level (ascending)
        const sorted = [...lineage].sort((a, b) => a.level - b.level);
        
        // Hapus duplikat berdasarkan nama
        const uniqueNames = new Set();
        for (const item of sorted) {
            if (!uniqueNames.has(item.name.toLowerCase())) {
                uniqueNames.add(item.name.toLowerCase());
                fixed.push(item);
            }
        }
        
        return fixed;
    }

    // ============================================================
    // 21. GET CURRENT PAGE INFO
    // ============================================================

    const currentFullUrl = currentUrl.startsWith('http')
        ? currentUrl
        : CONFIG.DOMAIN + currentUrl;

    let currentPageTitle = getCleanPageNameFromUrl(currentFullUrl);

    if (!currentPageTitle) {
        currentPageTitle = 'Halaman';
    }

    // ============================================================
    // 22. INJECT CURRENT PAGE & AUTO PARENT
    // ============================================================

    const enhancedBreadcrumbItems = injectCurrentPageAndParent(
        breadcrumbItems,
        currentPageTitle,
        currentFullUrl
    );

    // ============================================================
    // 23. BUILD ALL LEVELS
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
    // 24. URL FALLBACK
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
    // 25. CURRENT PAGE TYPE
    // ============================================================

    const currentPageType = detectPageType(currentPageTitle);
    log(`Current page: "${currentPageTitle}" → type: ${currentPageType} (level ${TYPE_LEVEL_MAP[currentPageType]})`, 'INFO');

    // ============================================================
    // 26. SELECT BREADCRUMB LEVELS
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

    // UNIQUE HIERARCHY
    const uniqueHierarchy = [];
    const usedHierarchy = new Set();

    for (const item of allLevels) {
        const key = item.name.toLowerCase();
        if (usedHierarchy.has(key)) continue;
        usedHierarchy.add(key);
        uniqueHierarchy.push(item);
    }

    log('=== ALL LEVELS DEBUG ===', 'DEBUG');
    for (const level of allLevels) {
        log(`  ${level.name} → type: ${level.type}, level: ${level.level}`, 'DEBUG');
    }

    log('Unique hierarchy items (' + uniqueHierarchy.length + '): ' + uniqueHierarchy.map(i => i.name + '(' + i.type + ')').join(' → '), 'INFO');

    // ========================================================
    // FIND NEAREST PARENTS (FIXED v8.8 - SEMUA PARENT)
    // ========================================================
    
    function findNearestParentsByHierarchy() {
        const lineage = [];
        const currentLevel = TYPE_LEVEL_MAP[currentPageType] || 99;
        
        log(`Current level: ${currentLevel}`, 'DEBUG');
        
        // ✅ FIX v8.8: Ambil SEMUA candidate dengan level <= currentLevel
        // (termasuk level yang sama)
        const candidates = uniqueHierarchy.filter(item => item.level <= currentLevel);
        
        log('Candidates (level <= current): ' + candidates.map(i => i.level + ':' + i.name).join(', '), 'DEBUG');
        
        if (candidates.length === 0) return lineage;
        
        // Prioritaskan level tertinggi (parent terdekat)
        const sortedByLevelDesc = [...candidates].sort((a, b) => b.level - a.level);
        
        const seenLevels = new Set();
        const prioritized = [];
        
        for (const item of sortedByLevelDesc) {
            if (!seenLevels.has(item.level)) {
                seenLevels.add(item.level);
                prioritized.push(item);
            }
        }
        
        // Urutkan ascending untuk hierarki yang benar
        const sortedLineage = prioritized.sort((a, b) => a.level - b.level);
        
        // ✅ FIX v8.8: Langsung tambahkan SEMUA, tanpa filter level
        for (const item of sortedLineage) {
            if (!lineage.some(l => l.name === item.name)) {
                lineage.push(item);
            }
        }
        
        log('Lineage (prioritized): ' + lineage.map(i => i.level + ':' + i.name).join(' → '), 'SUCCESS');
        
        return lineage;
    }

    let lineageLevels = findNearestParentsByHierarchy();

    log('Initial lineage (' + lineageLevels.length + '): ' + lineageLevels.map(i => i.name + '(' + i.type + ')').join(' → '), 'INFO');

    lineageLevels = forceInjectDirectParent(
        lineageLevels, 
        uniqueHierarchy, 
        currentPageTitle, 
        entityType,
        enhancedBreadcrumbItems
    );

    log('After force injection (' + lineageLevels.length + '): ' + lineageLevels.map(i => i.name + '(' + i.type + ')').join(' → '), 'INFO');

    // REMOVE DUPLICATE
    const cleanLineage = [];
    const usedLineage = new Set();

    for (const item of lineageLevels) {
        const key = item.name.toLowerCase();
        if (usedLineage.has(key)) continue;
        usedLineage.add(key);
        cleanLineage.push(item);
    }

    // VALIDATE HIERARCHY
    const validatedLineage = validateAndFixHierarchy(cleanLineage);

    // SORT NATURAL ORDER
    validatedLineage.sort((a, b) => {
        const idxA = HIERARCHY_ORDER.indexOf(a.type);
        const idxB = HIERARCHY_ORDER.indexOf(b.type);
        if (idxA !== idxB) return idxA - idxB;
        return a.position - b.position;
    });

    // ========================================================
    // SOLUSI v8.8: HANYA PARENT (BUKAN CURRENT PAGE)
    // ========================================================
    
    let finalParents = [];

    // Filter untuk menghilangkan current page dari lineage
    const parentOnly = validatedLineage.filter(item => 
        item.name.toLowerCase() !== currentPageTitle.toLowerCase()
    );

    if (parentOnly.length > 0) {
        // Cari level tertinggi dari parent (bukan current page)
        const highestLevel = Math.max(...parentOnly.map(i => i.level));
        
        // Ambil hanya parent dengan level tertinggi
        finalParents = parentOnly.filter(item => item.level === highestLevel);
        
        // Urutkan berdasarkan posisi
        finalParents.sort((a, b) => a.position - b.position);
        
        log('Nearest parent(s) level ' + highestLevel + ': ' + finalParents.map(i => i.name).join(', '), 'SUCCESS');
    } else {
        log('No parent found (only current page)', 'WARN');
    }

    // INSERT PARENTS (hanya parent terdekat)
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
    // 27. FINAL UNIQUE LEVELS
    // ============================================================

    const uniqueLevels = [];
    const usedNames = new Set();

    for (const item of selectedLevels) {
        const key = item.name.toLowerCase();
        if (usedNames.has(key)) continue;
        usedNames.add(key);
        uniqueLevels.push(item);
    }

    uniqueLevels.forEach((item, index) => {
        item.position = index + 1;
    });

    log('Final breadcrumb (' + uniqueLevels.length + ' levels): ' + uniqueLevels.map(i => i.name).join(' › '), 'SUCCESS');

    // ============================================================
    // 28. GENERATE HTML
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
    // 29. JSON LD
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
    // 30. REMOVE OLD
    // ============================================================

    document.querySelectorAll('.breadcrumbs, .breadcrumb-nav, [aria-label="Breadcrumb"]')
        .forEach(el => el.remove());
    document.querySelectorAll('script[data-breadcrumb="true"]')
        .forEach(el => el.remove());

    // ============================================================
    // 31. TARGET ELEMENT
    // ============================================================

    const targetElement = document.querySelector('main, article, .content, #main-content, .post-content');

    // ============================================================
    // 32. INJECT HTML
    // ============================================================

    if (targetElement) {
        targetElement.insertAdjacentHTML('afterbegin', breadcrumbHtml);
    } else {
        document.body.insertAdjacentHTML('afterbegin', breadcrumbHtml);
    }

    // ============================================================
    // 33. INJECT JSON LD
    // ============================================================

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-breadcrumb', 'true');
    script.textContent = JSON.stringify(jsonLd, null, 2);
    document.head.appendChild(script);

    // ============================================================
    // 34. LOG SUMMARY
    // ============================================================

    console.log('📊 PAGE TYPE DETECTION SUMMARY (v8.9):');
    console.log(`   Page: "${currentPageTitle}"`);
    console.log(`   Type: ${currentPageType} (level ${TYPE_LEVEL_MAP[currentPageType]})`);
    console.log(`   Entity: ${entityType}`);
    if (currentPageType === 'variant') {
        console.log(`   🔬 Variant detected for entity: ${entityType}`);
    }
    if (currentPageType === 'money-child') {
        console.log(`   📍 Money Child with location detected`);
    }

    // ============================================================
    // 35. RETURN
    // ============================================================

    return {
        html: breadcrumbHtml,
        jsonLd,
        selectedLevels: uniqueLevels,
        currentPageType,
        entityType,
        version: '8.9.0',
        maxLevel: 'NONE (nearest parent only)',
        isVariant: currentPageType === 'variant'
    };
}

// Menyimpan elemen yang dihapus dalam variabel
let removedElementsJasaPerbaikanKons = {};
// Fungsi untuk menghapus elemen berdasarkan ID
function removeCondition(conditionId) {
    const conditionElement = document.getElementById(conditionId);

    if (conditionElement) {
        // Menyimpan elemen yang dihapus dalam objek untuk bisa dikembalikan
        removedElementsJasaPerbaikanKons[conditionId] = conditionElement;
        conditionElement.remove(); // Menghapus elemen tersebut
    }
}

// Fungsi untuk mengembalikan elemen yang telah dihapus
function restoreCondition(conditionId) {
    const breadcrumb = document.querySelector('.breadcrumb');
    const elementToRestore = removedElementsJasaPerbaikanKons[conditionId]; // Mendapatkan elemen yang disimpan

    if (elementToRestore) {
        breadcrumb.appendChild(elementToRestore); // Menambahkan elemen kembali ke dalam breadcrumb
        delete removedElementsJasaPerbaikanKons[conditionId]; // Menghapus elemen dari objek setelah dikembalikan
    } else {
        console.log(`Elemen dengan ID ${conditionId} tidak ditemukan di removedElementsJasaPerbaikanKons.`);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    // var currentUrl = window.location.href;
     //const cleanUrl = currentUrl.split('?')[0]; // Menghapus parameter seperti ?m=1
    const cleanUrlJasaKons = window.location.href.split(/[?#]/)[0]; // Menghilangkan parameter seperti ?m=1

	// --- gabungkan semua mapping ---
    const urlMappingGabungan = Object.assign(
      {},
		urlMappingJasaKonsFromPillarSub2,
		urlMappingJasaKitchenSetBridgeFromSub2Sub1,
		urlMappingJasaPasangBridgeFromSub2Sub1,
		urlMappingJasaPembuatanBridgeFromSub2Sub1,
		urlMappingJasaAlatKonstruksiBridgeFromSub2Sub1,
		urlMappingJasaAlatKonstruksiFromSub1MoneyMaster,
		urlMappingJasaAlatKonstruksiFromMoneyMasterMoneyPage,
		//urlMappingJasaAlatKonstruksi, hapus karna isi nya sewa jadi pisahkan 
		urlMappingJasaKonstruksiStrukturBridgeFromSub2Sub1,
		urlMappingJasaKonstruksiStrukturFromSub1MoneyMaster,
		
		urlMappingJasaStrukturKhususBridgeFromSub2Sub1,
		urlMappingJasaStrukturKhususFromSub1MoneyMaster,
		
		urlMappingJasaLapanganOlahragaBridgeFromSub2Sub1,
		urlMappingJasaLapanganOlahragaFromSub1MoneyMaster,
		
		urlMappingKonstruksiBangunanBridgeFromSub2Sub1,
		urlMappingKonstruksiBangunanFromSub1MoneyMaster,
		
	    urlMappingRenovasiBridgeFromSub2Sub1,
		urlMappingRenovasiFromSub1MoneyMaster,
		
		urlMappingFinishingBridgeFromSub2Sub1,
		urlMappingFinishingFromSub1MoneyMaster,
		urlMappingFinishingFromMoneyMasterMoneyMaster1,
		
		urlMappingPerbaikanBangunanBridgeFromSub2Sub1,
		urlMappingJasaPerbaikanBangunanFromSub1MoneyMaster,
		
		urlMappingPerbaikanInfrastrukturBridgeFromSub2Sub1,
		urlMappingJasaPerbaikanInfrastrukturFromSub1MoneyMaster,
		urlMappingPerbaikanInfrastrukturFromMoneyMasterMoneyMaster1,
		urlMappingPerbaikanInfrastrukturFromMoneyMasterMoneyPage,
		
		urlMappingJalanPerkerasanBridgeFromSub2Sub1,
		urlMappingJalanPerkerasanFromSub1MoneyMaster,
		urlMappingJalanPerkerasanFromMoneyMasterMoneyMaster1,
		
        urlMappingJasaPondasiBridgeFromSub2Sub1,
		urlMappingJasaPondasiFromSub1MoneyMaster,
		
		urlMappingJasaSaluranDrainaseBridgeFromSub2Sub1,
		urlMappingJasaSaluranDrainaseFromSub1MoneyMaster,
		
        urlMappingJasaPematanganLahanBridgeFromSub2Sub1,
		urlMappingJasaPematanganLahanFromSub1MoneyMaster,
		urlMappingJasaPematanganLahanFromMoneyMasterMoneyPage,
		
		urlMappingJasaUjiTanahBridgeFromSub2Sub1,
		urlMappingJasaUjiTanahFromSub1MoneyMaster,
		
        urlMappingJasaCuttingBetonBridgeFromSub2Sub1,
		urlMappingJasaCuttingBetonFromSub1MoneyMaster,
		
		urlMappingJasaBongkarBangunanBridgeFromSub2Sub1,
		urlMappingJasaBongkarBangunanFromSub1MoneyMaster,
		
        urlMappingJasaBuangPuingBridgeFromSub2Sub1,
		urlMappingJasaBuangPuingFromSub1MoneyMaster,
		
		urlMappingJasaPengeboranBridgeFromSub2Sub1,
		urlMappingJasaPengeboranFromSub1MoneyMaster,
		
		urlMappingJasaPerkuatanTanahBridgeFromSub2Sub1,
		urlMappingJasaPerkuatanTanahFromSub1MoneyMaster,
		
        urlMappingJasaPembatasPengamanBridgeFromSub2Sub1,
		urlMappingJasaPembatasPengamanFromSub1MoneyMaster,
		
		urlMappingJasaInstalasiListrikBridgeFromSub2Sub1,
		urlMappingJasaInstalasiListrikFromSub1MoneyMaster,
		
		urlMappingSewaAlatFromPillarSub2,
		urlMappingSewaAlatProyekFromSub2Sub1,
		urlMappingSewaAlatProyekFromSub1MoneyMaster,
		//urlMappingSewaAlatBeratFromSub1MoneyPage,
		urlMappingSewaAlatBeratFromSub2Sub1,
		urlMappingSewaAlatBeratFromSub1MoneyMaster,
		
		urlMappingSewaAlatRinganFromSub2Sub1,
		urlMappingSewaAlatRinganFromSub1MoneyMaster,
		urlMappingSewaAlatRinganFromMoneyMasterMoneyMaster1,

		urlMappingSewaAlatPendukungFromSub2Sub1,
		urlMappingSewaAlatPendukungFromSub1MoneyMaster,
		urlMappingSewaAlatPendukungFromMoneyMasterMoneyMaster1,

		urlMappingJasaKitchenSetFromSub1MoneyMaster,
		urlMappingJasaKitchenSetFromMoneyMasterMoneyPage,
		urlMappingJasaPasangFromSub1MoneyMaster,
		urlMappingJasaPembuatanFromSub1MoneyMaster,
		urlMappingJasaPembuatanFromMoneyMasterMoneyMaster1,
		urlMappingJasaPasangFromMoneyMasterMoneyMaster1,
		urlMappingJasaPasangLantaiFromMoneyMaster1MoneyMaster2,
		
        urlMappingInfrastrukturFromSub1MoneyMaster,
		urlMappingPerbaikanBangunanFromMoneyMasterMoneyPage,
		urlMappingRenovasiFromMoneyMasterMoneyMaster1,
		urlMappingRenovasiBangunanFromMoneyMaster1MoneyPage,
		
		urlMappingSaluranFromMoneyMasterMoneyPage,
		
		urlMappingUjiTanahFromMoneyMasterMoneyMaster1,
		urlMappingBongkarBangunanFromMoneyMasterMoneyMaster1,
		urlMappingPengeboranFromSub1MoneyMaster,
		urlMappingPengeboranFromMoneyMasterMoneyMaster1,
		
		urlMappingJasaPembatasPengamanFromMoneyMasterMoneyPage,
		urlMappingJasaInstalasiListrikFromSub1MoneyPage
    );

    // --- validasi URL terdaftar ---
    if (!urlMappingGabungan[cleanUrlJasaKons]) {
      console.log(`[HybridDateModified] URL tidak terdaftar: ${cleanUrlJasaKons}`);
      return;
    }
	
/* ============================================================
 🔥 Hybrid Date Modified v7.9 — UNTUK betonjayareadymix.com
    ✅ SINKRON dengan Page Level Detector v22.1
    ✅ FIXED: Support PLD v22.0, v22.1, v20.x, v19.x
    ✅ FIXED: Variable name konsisten dengan PLD v22.x
    ✅ FULL COMPATIBLE: Page Level Detector v22.x, v20.x, v19.x, v18, v17
    ✅ FIX: Support JASA MONEY-MASTER detection
    ✅ FIX: 'home' TIDAK termasuk EVERGREEN_LEVELS
    ✅ ENHANCED: Mendapatkan confidence score dari PLD v22.x
    ✅ ENHANCED: Enhanced logging dengan confidence dan strategy
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
    // 📌 TUNGGU PAGE LEVEL DETECTOR READY (SUPPORT v22.x, v20.x, v19.x, v18, v17)
    // ============================================================
    function waitForPageLevelDetector() {
      return new Promise((resolve) => {
        // ✅ SUPPORT v22.x (v22.0, v22.1)
        if (window.pageLevelDetectorv22 && window.pageLevelDetectorv22Ready) {
          console.log("✅ Page Level Detector v22.x already ready");
          resolve(true);
          return;
        }
        
        // ✅ SUPPORT v20.x (v20.0, v20.1, v20.2)
        if (window.pageLevelDetectorv20 && window.pageLevelDetectorv20Ready) {
          console.log("✅ Page Level Detector v20.x already ready");
          resolve(true);
          return;
        }
        
        // ✅ SUPPORT v19.0
        if (window.pageLevelDetectorv19 && window.pageLevelDetectorv19Ready) {
          console.log("✅ Page Level Detector v19 already ready");
          resolve(true);
          return;
        }
        
        // ✅ SUPPORT v18
        if (window.pageLevelDetectorV18 && window.pageLevelDetectorv18Ready) {
          console.log("✅ Page Level Detector v18 already ready");
          resolve(true);
          return;
        }
        
        // ✅ SUPPORT v17
        if (window.pageLevelDetectorV17 && window.pageLevelDetectorv17Ready) {
          console.log("✅ Page Level Detector v17 already ready");
          resolve(true);
          return;
        }
        
        // ✅ SUPPORT legacy
        if (window.pageLevelDetector && window.__pageLevelDetectorReady) {
          console.log("✅ Page Level Detector legacy already ready");
          resolve(true);
          return;
        }
        
        // ✅ Event listener untuk semua versi
        const onReadyV22 = () => {
          console.log("✅ Page Level Detector v22.x ready (event)");
          resolve(true);
        };
        
        const onReadyV20 = () => {
          console.log("✅ Page Level Detector v20.x ready (event)");
          resolve(true);
        };
        
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
        
        window.addEventListener("pageLevelDetectorv22Ready", onReadyV22, { once: true });
        window.addEventListener("pageLevelDetectorv20Ready", onReadyV20, { once: true });
        window.addEventListener("pageLevelDetectorv19Ready", onReadyV19, { once: true });
        window.addEventListener("pageLevelDetectorV19Ready", onReadyV19, { once: true });
        window.addEventListener("pageLevelDetectorv18Ready", onReadyV18, { once: true });
        window.addEventListener("pageLevelDetectorReady", onReadyLegacy, { once: true });
        
        // Fallback timeout 10 detik
        setTimeout(() => {
          if (window.pageLevelDetectorv22 || window.pageLevelDetectorv20 || 
              window.pageLevelDetectorv19 || window.pageLevelDetectorV18 || 
              window.pageLevelDetector) {
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
      // Gunakan PLD v22.x (terbaru, weighted voting system)
      const PAGE_LEVEL_DETECTOR_URL = "https://raw.githack.com/aliyul/solution-blogger/main/PageLevelDetector.js";
      const EVERGREEN_DETECTOR_URL = "https://raw.githack.com/aliyul/solution-blogger/main/SmartEvergreenDetector.js";
      
      if (typeof window.pageLevelDetectorv22 === "undefined" && 
          typeof window.pageLevelDetectorv20 === "undefined" &&
          typeof window.pageLevelDetectorv19 === "undefined" &&
          typeof window.pageLevelDetectorV18 === "undefined" &&
          typeof window.pageLevelDetectorV17 === "undefined" &&
          typeof window.pageLevelDetector === "undefined") {
        console.log("⏳ Loading Page Level Detector v22.x...");
        await loadExternalJS(PAGE_LEVEL_DETECTOR_URL);
        await waitForPageLevelDetector();
        console.log("✅ Page Level Detector v22.x READY");
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
    // 📌 GET PAGE LEVEL FROM DETECTOR (SUPPORT v22.x, v20.x, v19.x, v18, v17)
    // ============================================================
    async function getPageLevelFromDetector() {
      await new Promise(resolve => setTimeout(resolve, 300));
      
      let pageLevel = 'pillar';
      let entityType = 'produk';
      let detectorVersion = 'unknown';
      let confidence = null;
      let strategies = null;
      let strategyCount = null;
      
      // ✅ PRIORITAS v22.x (weighted voting system - 100% accuracy)
      if (window.pageLevelDetectorv22 && typeof window.pageLevelDetectorv22.detect === 'function') {
        try {
          pageLevel = window.pageLevelDetectorv22.detect();
          entityType = window.pageLevelDetectorv22.detectEntityType();
          detectorVersion = 'v22.x';
          
          // Dapatkan confidence score jika tersedia
          if (typeof window.pageLevelDetectorv22.getConfidenceScore === 'function') {
            const confidenceScore = window.pageLevelDetectorv22.getConfidenceScore();
            confidence = confidenceScore.confidence;
            strategies = confidenceScore.strategies;
            strategyCount = confidenceScore.strategyCount;
          }
          
          console.log(`📌 [${detectorVersion}] Detected Page Level: ${pageLevel}, Entity Type: ${entityType}`);
          if (confidence) {
            console.log(`   🎯 Confidence: ${confidence}% (${strategyCount} strategies: ${strategies?.join(", ")})`);
          }
        } catch (e) {
          console.warn(`⚠️ Error calling pageLevelDetectorv22:`, e);
        }
      } 
      // FALLBACK v20.x
      else if (window.pageLevelDetectorv20 && typeof window.pageLevelDetectorv20.detect === 'function') {
        try {
          pageLevel = window.pageLevelDetectorv20.detect();
          entityType = window.pageLevelDetectorv20.detectEntityType();
          detectorVersion = 'v20.x';
          console.log(`📌 [${detectorVersion}] Detected Page Level: ${pageLevel}, Entity Type: ${entityType}`);
        } catch (e) {
          console.warn(`⚠️ Error calling pageLevelDetectorv20:`, e);
        }
      } 
      // FALLBACK v19.0
      else if (window.pageLevelDetectorv19 && typeof window.pageLevelDetectorv19.detect === 'function') {
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
      
      return { pageLevel, entityType, detectorVersion, confidence, strategies, strategyCount };
    }

    // ============================================================
    // 📌 EKSEKUSI UTAMA
    // ============================================================
    
    console.log("🔥 Hybrid Date Modified v7.9 - Starting...");
    
    await loadAllScripts();
    
    const { pageLevel, entityType, detectorVersion, confidence, strategies, strategyCount } = await getPageLevelFromDetector();
    
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
    if (confidence) {
      console.log(`   - Confidence: ${confidence}%`);
    }
    if (strategies && strategyCount) {
      console.log(`   - Strategies: ${strategyCount} strategies (${strategies.join(", ")})`);
    }
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
      hybridVersion: '7.9',
      detectionConfidence: confidence,
      detectionStrategies: strategies,
      detectionStrategyCount: strategyCount
    };

    console.log(`✅ [HybridDateModified] ${uniquePageIdentifier}`);
    console.log(`   → Final Date Modified: ${isoDate}`);
    console.log(`   → Offset: ${offsetSeconds} detik (${Math.floor(offsetSeconds / 3600)} jam ${Math.floor((offsetSeconds % 3600) / 60)} menit)`);
    console.log(`   → Mode: ${manualMode ? 'MANUAL' : 'AUTO'}`);
    console.log(`   → Category: ${categoryLabel}`);
    console.log(`   → Detector: ${detectorVersion}`);
    if (confidence) {
      console.log(`   → Detection Confidence: ${confidence}%`);
    }
    console.log(`📋 Hybrid Date Modified v7.9 applied successfully`);

  } catch (err) {
    console.error("[HybridDateModified] Fatal error:", err);
  }
})();
	
     // Menemukan elemen menggunakan Id
    var JasaKons = document.getElementById("JasaKons");
    var JasaKonsSub = document.getElementById("JasaKonsSub");
    //var JasaKonsPerbaikanSub = document.getElementById("JasaKonsPerbaikanSub");
/*
    if (!JasaKonsPerbaikan) {
	if (!JasaKonsPerbaikanSub) {
	console.error("elemen Id JasaKonsPerbaikan kondisi terhapus");
	console.error("elemen Id JasaKonsPerbaikanSub kondisi terhapus");
        return;
    	} else {
       	console.error("elemen Id JasaKonsPerbaikanSub kondisi terhapus");
	}
    } else if (!JasaKonsPerbaikanSub) {
	console.error("elemen Id JasaKonsPerbaikan kondisi terhapus");
    } else {
    
    }
    */
	
if (!JasaKons && !JasaKonsSub) {
console.error("elemen Id JasaKons dan Id JasaKonsSub kondisi terhapus");
        return;
}
if (!JasaKons || !JasaKonsSub) {
	if (!JasaKons) {
	console.error("elemen Id JasaKons kondisi terhapus");
	}
	if (!JasaKonsSub) {
	console.error("elemen Id JasaKonsSub kondisi terhapus");
}
}

	//bagian2 dari jasa konstruksi umum dan panduan
	var JasaKonstruksiLink = document.getElementById("JasaKonstruksi");
     	var JasaKonstruksiSubLink = document.getElementById("JasaKonstruksiSub");
	
	//bagian2 dari jasa konstruksi aplikasi
	
	var JasaAlatKonstruksiLink = document.getElementById("JasaAlatKonstruksi");

	var SewaAlatKonstruksiLink = document.getElementById("SewaAlatKonstruksi");
	var SewaAlatBeratLink = document.getElementById("SewaAlatBerat");
	var SewaAlatKonstruksiRinganLink = document.getElementById("SewaAlatKonstruksiRingan");
	
	var JasaInstalasiListrikLink = document.getElementById("JasaInstalasiListrik");
	var JasaRenovasiPerbaikanLink = document.getElementById("JasaRenovasiPerbaikan");
        var JasaStrukturKonstruksiLink = document.getElementById("JasaStrukturKonstruksi");
	var JasaFinishingLink = document.getElementById("JasaFinishing");
	var JasaPondasiPerkuatanLink = document.getElementById("JasaPondasiPerkuatan");
	var JasaSaluranDrainaseLink = document.getElementById("JasaSaluranDrainase");
	var JasaJalanPerkerasanLink = document.getElementById("JasaJalanPerkerasan");
	var JasaPematanganLahanLink = document.getElementById("JasaPematanganLahan");
	var JasaUjiTanahLink = document.getElementById("JasaUjiTanah");
	var JasaPembatasPengamanLink = document.getElementById("JasaPembatasPengaman");
	var JasaBongkarBangunanLink = document.getElementById("JasaBongkarBangunan");
	var JasaPerawatanPerbaikanBangunanLink = document.getElementById("JasaPerawatanPerbaikanBangunan");
	var JasaPerbaikanInfrastrukturLink = document.getElementById("JasaPerbaikanInfrastruktur");
	var JasaPengeboranLink = document.getElementById("JasaPengeboran");
	   // var JasaBorTeknikLink = document.getElementById("JasaBorTeknik");
		var JasaBorAirSumurLink = document.getElementById("JasaBorAirSumur");
		var JasaBorPileLink = document.getElementById("JasaBorPile");
		var JasaCoringBetonLink = document.getElementById("JasaCoringBeton");
		var JasaBorBetonLink = document.getElementById("JasaBorBeton");
		var JasaBorTanahLink = document.getElementById("JasaBorTanah");
		var JasaBorHorizontalLink = document.getElementById("JasaBorHorizontal");
		var JasaBorTembokLink = document.getElementById("JasaBorTembok");
		
	//var JasaKonstruksiCustomLink = document.getElementById("JasaKonstruksiCustom");
	
     var pageNameKonstruksi = document.getElementById("pageNameKonstruksi");
     var pageNameKonstruksiSub = document.getElementById("pageNameKonstruksiSub");
    	
     // Default untuk menyembunyikan elemen
     JasaKonstruksiLink.style.visibility = 'hidden';
     JasaKonstruksiSubLink.style.visibility = 'hidden';
	JasaAlatKonstruksiLink.style.visibility = 'hidden';
	SewaAlatKonstruksiLink.style.visibility = 'hidden';
	SewaAlatBeratLink.style.visibility = 'hidden';
	SewaAlatKonstruksiRinganLink.style.visibility = 'hidden';

	JasaInstalasiListrikLink.style.visibility = 'hidden';
     	JasaRenovasiPerbaikanLink.style.visibility = 'hidden';
	JasaStrukturKonstruksiLink.style.visibility = 'hidden';
	JasaFinishingLink.style.visibility = 'hidden';
	JasaPondasiPerkuatanLink.style.visibility = 'hidden';
	JasaSaluranDrainaseLink.style.visibility = 'hidden';
	JasaJalanPerkerasanLink.style.visibility = 'hidden';
	JasaPematanganLahanLink.style.visibility = 'hidden';
	JasaUjiTanahLink.style.visibility = 'hidden';
	JasaPembatasPengamanLink.style.visibility = 'hidden';
	JasaBongkarBangunanLink.style.visibility = 'hidden';
	JasaPengeboranLink.style.visibility = 'hidden';
	JasaPerawatanPerbaikanBangunanLink.style.visibility = 'hidden';
	JasaPerbaikanInfrastrukturLink.style.visibility = 'hidden';
		JasaBorAirSumurLink.style.visibility = 'hidden';
	    //JasaBorTeknikLink.style.visibility = 'hidden';
		JasaBorPileLink.style.visibility = 'hidden';
		JasaCoringBetonLink.style.visibility = 'hidden';
		JasaBorBetonLink.style.visibility = 'hidden';
		JasaBorTanahLink.style.visibility = 'hidden';
		JasaBorHorizontalLink.style.visibility = 'hidden';
		JasaBorTembokLink.style.visibility = 'hidden';
	
	//JasaKonstruksiCustomLink.style.visibility = 'hidden';
    pageNameKonstruksi.textContent = "";
    pageNameKonstruksiSub.textContent = "";

if (urlMappingJasaKonsFromPillarSub2[cleanUrlJasaKons]) {
        restoreCondition('JasaKons');
	restoreCondition('JasaKonstruksi');
           // hapus elemen id DIV Lain
	removeCondition('ProdukInFur');
        removeCondition('MaterialKons');
	removeCondition('ProdukKons');
        //removeCondition('ProdukKonsSaluran');
        //removeCondition('ProdukKonsPembatasPost');
        removeCondition('JasaKonsPondasiTanah');
        removeCondition('JasaKonsJalanPerkerasan');
        removeCondition('JasaKonsPembatas');
        removeCondition('JasaKonsPerbaikan');
        removeCondition('JasaKonsFinishing');
        removeCondition('JasaKonsStruktur');
	removeCondition('JasaKonsSub');
	removeCondition('MenuKons');
	
	    
       // hapus elemen id DIV Lain

        JasaKonstruksiLink.style.visibility = 'visible';
        pageNameKonstruksi.textContent = urlMappingJasaKonsFromPillarSub2[cleanUrlJasaKons];
	
	   generateBreadcrumbJasaKonstruksi(
        urlMappingJasaKonsFromPillarSub2,
        cleanUrlJasaKons,
       [
           // { name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' }
           // { name: 'Daftar Jasa Struktur Konstruksi', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-struktur-konstruksi.html' }
        ],
        'JASA_KONSTRUKSI'
    );
	
    }
	/*
   // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaKonsFromPillarSub2[cleanUrlJasaKons]) {
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
                   "name": urlMappingJasaKonsFromPillarSub2[cleanUrlJasaKons],
                   "item": cleanUrlJasaKons
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
	*/
	
if (urlMappingJasaKitchenSetBridgeFromSub2Sub1[cleanUrlJasaKons]) {
     generateBreadcrumbJasaKonstruksi(
        urlMappingJasaKitchenSetBridgeFromSub2Sub1,
        cleanUrlJasaKons,
       [
           // { name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Kitchen Set', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-kitchen-set.html' }
	   ],
        'JASA_KONSTRUKSI'
    );
   }

if (urlMappingJasaPembuatanBridgeFromSub2Sub1[cleanUrlJasaKons]) {
     generateBreadcrumbJasaKonstruksi(
        urlMappingJasaPembuatanBridgeFromSub2Sub1,
        cleanUrlJasaKons,
       [
           // { name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Pembuatan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-pembuatan.html' }
	   ],
        'JASA_KONSTRUKSI'
    );
   }
if (urlMappingJasaPasangBridgeFromSub2Sub1[cleanUrlJasaKons]) {
     generateBreadcrumbJasaKonstruksi(
        urlMappingJasaPasangBridgeFromSub2Sub1,
        cleanUrlJasaKons,
       [
           // { name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Pasang', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-pasang.html' }
	   ],
        'JASA_KONSTRUKSI'
    );
   }
//AWAL JASA KONTRUKSI ALAT
	
if (urlMappingJasaAlatKonstruksiBridgeFromSub2Sub1[cleanUrlJasaKons]) {
     generateBreadcrumbJasaKonstruksi(
        urlMappingJasaAlatKonstruksiBridgeFromSub2Sub1,
        cleanUrlJasaKons,
       [
           // { name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-alat-konstruksi.html' }
	   ],
        'JASA_KONSTRUKSI'
    );
   }
	if (urlMappingJasaAlatKonstruksiFromSub1MoneyMaster[cleanUrlJasaKons]) {
    generateBreadcrumbJasaKonstruksi(
        urlMappingJasaAlatKonstruksiFromSub1MoneyMaster,
        cleanUrlJasaKons,
       [
           // { name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-alat-konstruksi.html' },
            { name: 'Perbandingan Jasa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-alat-konstruksi.html' }
          //  { name: 'Jasa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-alat-konstruksi.html' }
        ],
        'JASA_KONSTRUKSI'
    );
   }
   if (urlMappingJasaAlatKonstruksiFromMoneyMasterMoneyPage[cleanUrlJasaKons]) {
    generateBreadcrumbJasaKonstruksi(
        urlMappingJasaAlatKonstruksiFromMoneyMasterMoneyPage,
        cleanUrlJasaKons,
       [
           // { name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-alat-konstruksi.html' },
            { name: 'Perbandingan Jasa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-alat-konstruksi.html' },
            { name: 'Jasa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-alat-konstruksi.html' }
        ],
        'JASA_KONSTRUKSI'
    );
   }

	if (urlMappingJasaKonstruksiStrukturBridgeFromSub2Sub1[cleanUrlJasaKons]) {
	generateBreadcrumbJasaKonstruksi(
        urlMappingJasaKonstruksiStrukturBridgeFromSub2Sub1,
        cleanUrlJasaKons,
       [
           // { name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Konstruksi Struktur', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-konstruksi-struktur.html' }
        ],
        'JASA_KONSTRUKSI'
    );
	
    }
	if (urlMappingJasaKonstruksiStrukturFromSub1MoneyMaster[cleanUrlJasaKons]) {
	generateBreadcrumbJasaKonstruksi(
        urlMappingJasaKonstruksiStrukturFromSub1MoneyMaster,
        cleanUrlJasaKons,
       [
           // { name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Konstruksi Struktur', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-konstruksi-struktur.html' },
            { name: 'Perbandingan Jasa Konstruksi Struktur', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-konstruksi-struktur.html' }
        ],
        'JASA_KONSTRUKSI'
    );
	
    }

	if (urlMappingJasaStrukturKhususBridgeFromSub2Sub1[cleanUrlJasaKons]) {
	generateBreadcrumbJasaKonstruksi(
        urlMappingJasaStrukturKhususBridgeFromSub2Sub1,
        cleanUrlJasaKons,
       [
           // { name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Struktur Khusus', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-struktur-khusus.html' }
        ],
        'JASA_KONSTRUKSI'
    );
	
    }
	if (urlMappingJasaStrukturKhususFromSub1MoneyMaster[cleanUrlJasaKons]) {
	generateBreadcrumbJasaKonstruksi(
        urlMappingJasaStrukturKhususFromSub1MoneyMaster,
        cleanUrlJasaKons,
       [
           // { name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Struktur Khusus', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-struktur-khusus.html' },
            { name: 'Perbandingan Jasa Struktur Khusus', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-struktur-khusus.html' }
        ],
        'JASA_KONSTRUKSI'
    );
	
    }

	if (urlMappingJasaLapanganOlahragaBridgeFromSub2Sub1[cleanUrlJasaKons]) {
	generateBreadcrumbJasaKonstruksi(
        urlMappingJasaLapanganOlahragaBridgeFromSub2Sub1,
        cleanUrlJasaKons,
       [
           // { name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Lapangan Olahraga', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-lapangan-olahraga.html' }
        ],
        'JASA_KONSTRUKSI'
    );
	
    }	
	if (urlMappingJasaLapanganOlahragaFromSub1MoneyMaster[cleanUrlJasaKons]) {
	generateBreadcrumbJasaKonstruksi(
        urlMappingJasaLapanganOlahragaFromSub1MoneyMaster,
        cleanUrlJasaKons,
       [
           // { name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Lapangan Olahraga', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-lapangan-olahraga.html' },
            { name: 'Jasa Lapangan Olahraga', url: 'https://www.betonjayareadymix.com/p//jasa-lapangan-olahraga.html' }
        ],
        'JASA_KONSTRUKSI'
    );
	
    }
	
	if (urlMappingKonstruksiBangunanBridgeFromSub2Sub1[cleanUrlJasaKons]) {
        //pageNameKonstruksiSub.textContent = urlMappingStrukturBridgeFromSub2Sub1[cleanUrlJasaKons];
	generateBreadcrumbJasaKonstruksi(
        urlMappingKonstruksiBangunanBridgeFromSub2Sub1,
        cleanUrlJasaKons,
       [
           // { name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Konstruksi Bangunan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-konstruksi-bangunan.html' }
        ],
        'JASA_KONSTRUKSI'
    );
	
    }
	if (urlMappingKonstruksiBangunanFromSub1MoneyMaster[cleanUrlJasaKons]) {
        //pageNameKonstruksiSub.textContent = urlMappingStrukturBridgeFromSub2Sub1[cleanUrlJasaKons];
	generateBreadcrumbJasaKonstruksi(
        urlMappingKonstruksiBangunanFromSub1MoneyMaster,
        cleanUrlJasaKons,
       [
           // { name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Konstruksi Bangunan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-konstruksi-bangunan.html' },
            { name: 'Perbandingan Jasa Konstruksi Bangunan', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-konstruksi-bangunan.html' }
        ],
        'JASA_KONSTRUKSI'
    );
	
    }
	
	if (urlMappingRenovasiBridgeFromSub2Sub1[cleanUrlJasaKons]) {
        //pageNameKonstruksiSub.textContent = urlMappingRenovasiBridgeFromSub2Sub1[cleanUrlJasaKons];
	
	generateBreadcrumbJasaKonstruksi(
        urlMappingRenovasiBridgeFromSub2Sub1,
        cleanUrlJasaKons,
       [
           // { name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Renovasi', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-removasi.html' }
        ],
        'JASA_KONSTRUKSI'
    );
	
    }
	if (urlMappingRenovasiFromSub1MoneyMaster[cleanUrlJasaKons]) {
       
	generateBreadcrumbJasaKonstruksi(
        urlMappingRenovasiFromSub1MoneyMaster,
        cleanUrlJasaKons,
       [
           // { name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Renovasi', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-removasi.html' },
            { name: 'Perbandingan Jasa Renovasi', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-removasi.html' }
        ],
        'JASA_KONSTRUKSI'
    );
	
    }

 	if (urlMappingFinishingBridgeFromSub2Sub1[cleanUrlJasaKons]) {
        //pageNameKonstruksiSub.textContent = urlMappingFinishingBridgeFromSub2Sub1[cleanUrlJasaKons];
	
	generateBreadcrumbJasaKonstruksi(
        urlMappingFinishingBridgeFromSub2Sub1,
        cleanUrlJasaKons,
       [
            //{ name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Finishing', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-finishing.html' }
        ],
        'JASA_KONSTRUKSI'
    );	
    }
if (urlMappingFinishingFromSub1MoneyMaster[cleanUrlJasaKons]) {
	    generateBreadcrumbJasaKonstruksi(
        urlMappingFinishingFromSub1MoneyMaster,
        cleanUrlJasaKons,
        [
           // { name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Finishing', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-finishing.html'},
            { name: 'Perbandingan Jasa Finishing', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-finishing.html'}
        ],
        'JASA_KONSTRUKSI'
    );
    }
	if (urlMappingFinishingFromMoneyMasterMoneyMaster1[cleanUrlJasaKons]) {
	    generateBreadcrumbJasaKonstruksi(
        urlMappingFinishingFromMoneyMasterMoneyMaster1,
        cleanUrlJasaKons,
        [
           // { name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Finishing', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-finishing.html'},
            { name: 'Perbandingan Jasa Finishing', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-finishing.html'},
			{ name: 'Jasa Finishing', url: 'https://www.betonjayareadymix.com/p/jasa-finishing.html'},
        ],
        'JASA_KONSTRUKSI'
    );
    }

if (urlMappingPerbaikanBangunanBridgeFromSub2Sub1[cleanUrlJasaKons]) {
        //pageNameKonstruksiSub.textContent = urlMappingPerawatanPerbaikanBridgeFromSub2Sub1[cleanUrlJasaKons];
	generateBreadcrumbJasaKonstruksi(
        urlMappingPerbaikanBangunanBridgeFromSub2Sub1,
        cleanUrlJasaKons,
       [
            //{ name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Perbaikan Bangunan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-perbaikan-bangunan.html' }
        ],
        'JASA_KONSTRUKSI'
    );
	
    }
	if (urlMappingPerbaikanInfrastrukturBridgeFromSub2Sub1[cleanUrlJasaKons]) {
        //pageNameKonstruksiSub.textContent = urlMappingPerawatanPerbaikanBridgeFromSub2Sub1[cleanUrlJasaKons];
	generateBreadcrumbJasaKonstruksi(
        urlMappingPerbaikanInfrastrukturBridgeFromSub2Sub1,
        cleanUrlJasaKons,
       [
            //{ name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Perbaikan Infrastruktur', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-perbaikan-infrastruktur.html' }
        ],
        'JASA_KONSTRUKSI'
    );
	
    }
	
	if (urlMappingJalanPerkerasanBridgeFromSub2Sub1[cleanUrlJasaKons]) {
        //pageNameKonstruksiSub.textContent = urlMappingJalanPerkerasanBridgeFromSub2Sub1[cleanUrlJasaKons];
	generateBreadcrumbJasaKonstruksi(
        urlMappingJalanPerkerasanBridgeFromSub2Sub1,
        cleanUrlJasaKons,
       [
           // { name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Jalan & Perkerasan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-jalan-perkerasan.html' }
        ],
        'JASA_KONSTRUKSI'
    );
	
    }
	if (urlMappingJalanPerkerasanFromSub1MoneyMaster[cleanUrlJasaKons]) {
     	generateBreadcrumbJasaKonstruksi(
        urlMappingJalanPerkerasanFromSub1MoneyMaster,
        cleanUrlJasaKons,
       [
           // { name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Jalan & Perkerasan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-jalan-perkerasan.html' },
            { name: 'Perbandingan Jasa Jalan & Perkerasan', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-jalan-perkerasan.html' }
        ],
        'JASA_KONSTRUKSI'
    );
    }
	if (urlMappingJalanPerkerasanFromMoneyMasterMoneyMaster1[cleanUrlJasaKons]) {
     	generateBreadcrumbJasaKonstruksi(
        urlMappingJalanPerkerasanFromMoneyMasterMoneyMaster1,
        cleanUrlJasaKons,
       [
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Jalan & Perkerasan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-jalan-perkerasan.html' },
            { name: 'Perbandingan Jasa Jalan & Perkerasan', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-jalan-perkerasan.html' },
            { name: 'Jasa Jalan & Perkerasan', url: 'https://www.betonjayareadymix.com/p/jasa-jalan-perkerasan.html' }
        ],
        'JASA_KONSTRUKSI'
    );
    }
	
 
	if (urlMappingJasaPondasiBridgeFromSub2Sub1[cleanUrlJasaKons]) {
        //pageNameKonstruksiSub.textContent = urlMappingJasaPondasiBridgeFromSub2Sub1[cleanUrlJasaKons];
	generateBreadcrumbJasaKonstruksi(
        urlMappingJasaPondasiBridgeFromSub2Sub1,
        cleanUrlJasaKons,
       [
            //{ name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Pondasi', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-pondasi.html' }
        ],
        'JASA_KONSTRUKSI'
    );
	
    }
	if (urlMappingJasaPondasiFromSub1MoneyMaster[cleanUrlJasaKons]) {
        //pageNameKonstruksiSub.textContent = urlMappingJasaPondasiBridgeFromSub2Sub1[cleanUrlJasaKons];
	generateBreadcrumbJasaKonstruksi(
        urlMappingJasaPondasiFromSub1MoneyMaster,
        cleanUrlJasaKons,
       [
            //{ name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Pondasi', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-pondasi.html' },
            { name: 'Perbandingan Jasa Pondasi', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-pondasi.html' }
        ],
        'JASA_KONSTRUKSI'
    );
	
    }

	if (urlMappingJasaSaluranDrainaseBridgeFromSub2Sub1[cleanUrlJasaKons]) {
        //pageNameKonstruksiSub.textContent = urlMappingJasaSaluranDrainaseBridgeFromSub2Sub1[cleanUrlJasaKons];
	generateBreadcrumbJasaKonstruksi(
        urlMappingJasaSaluranDrainaseBridgeFromSub2Sub1,
        cleanUrlJasaKons,
       [
            //{ name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Saluran & Drainase', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-saluran-drainase.html' }
        ],
        'JASA_KONSTRUKSI'
    );
	
    }
	if (urlMappingJasaSaluranDrainaseFromSub1MoneyMaster[cleanUrlJasaKons]) {
        //pageNameKonstruksiSub.textContent = urlMappingJasaSaluranDrainaseBridgeFromSub2Sub1[cleanUrlJasaKons];
	generateBreadcrumbJasaKonstruksi(
        urlMappingJasaSaluranDrainaseFromSub1MoneyMaster,
        cleanUrlJasaKons,
       [
            //{ name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Saluran & Drainase', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-saluran-drainase.html' },
            { name: 'Perbandingan Jasa Saluran & Drainase', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-saluran-drainase.html' }
        ],
        'JASA_KONSTRUKSI'
    );
	
    }
	
	if (urlMappingJasaPematanganLahanBridgeFromSub2Sub1[cleanUrlJasaKons]) {
        //pageNameKonstruksiSub.textContent = urlMappingJasaPematanganLahanBridgeFromSub2Sub1[cleanUrlJasaKons];
	generateBreadcrumbJasaKonstruksi(
        urlMappingJasaPematanganLahanBridgeFromSub2Sub1,
        cleanUrlJasaKons,
       [
           // { name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Pematangan Lahan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-pematangan-lahan.html' }
        ],
        'JASA_KONSTRUKSI'
    );
	
    }
	if (urlMappingJasaPematanganLahanFromSub1MoneyMaster[cleanUrlJasaKons]) {
       	generateBreadcrumbJasaKonstruksi(
        urlMappingJasaPematanganLahanFromSub1MoneyMaster,
        cleanUrlJasaKons,
       [
           // { name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Pematangan Lahan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-pematangan-lahan.html' },
            { name: 'Perbandingan Jasa Pematangan Lahan', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-pematangan-lahan.html' }
        ],
        'JASA_KONSTRUKSI'
    );
    }
    if (urlMappingJasaPematanganLahanFromMoneyMasterMoneyPage[cleanUrlJasaKons]) {
    	generateBreadcrumbJasaKonstruksi(
        urlMappingJasaPematanganLahanFromMoneyMasterMoneyPage,
        cleanUrlJasaKons,
       [
           // { name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Pematangan Lahan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-pematangan-lahan.html' },
            { name: 'Perbandingan Jasa Pematangan Lahan', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-pematangan-lahan.html' },
            { name: 'Jasa Pematangan Lahan', url: 'https://www.betonjayareadymix.com/p/jasa-pematangan-lahan.html' }
        ],
        'JASA_KONSTRUKSI'
    );
   }
		
	if (urlMappingJasaUjiTanahBridgeFromSub2Sub1[cleanUrlJasaKons]) {
        //pageNameKonstruksiSub.textContent = urlMappingJasaJasaUjiTanahBridgeFromSub2Sub1[cleanUrlJasaKons];
	generateBreadcrumbJasaKonstruksi(
        urlMappingJasaUjiTanahBridgeFromSub2Sub1,
        cleanUrlJasaKons,
       [
            //{ name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Uji Tanah', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-uji-tanah.html' }
        ],
        'JASA_KONSTRUKSI'
    );
	
    }		
	if (urlMappingJasaUjiTanahFromSub1MoneyMaster[cleanUrlJasaKons]) {
        //pageNameKonstruksiSub.textContent = urlMappingJasaJasaUjiTanahBridgeFromSub2Sub1[cleanUrlJasaKons];
	generateBreadcrumbJasaKonstruksi(
        urlMappingJasaUjiTanahFromSub1MoneyMaster,
        cleanUrlJasaKons,
       [
            //{ name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Uji Tanah', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-uji-tanah.html' },
            { name: 'Perbandingan Jasa Uji Tanah', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-uji-tanah.html' }
        ],
        'JASA_KONSTRUKSI'
    );
	
    }
	
	if (urlMappingJasaCuttingBetonBridgeFromSub2Sub1[cleanUrlJasaKons]) {
        //pageNameKonstruksiSub.textContent = urlMappingJasaCuttingBetonBridgeFromSub2Sub1[cleanUrlJasaKons];
	generateBreadcrumbJasaKonstruksi(
        urlMappingJasaCuttingBetonBridgeFromSub2Sub1,
        cleanUrlJasaKons,
       [
           // { name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Cutting Beton', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-cutting-beton.html' }
        ],
        'JASA_KONSTRUKSI'
    );
	}	
	if (urlMappingJasaCuttingBetonFromSub1MoneyMaster[cleanUrlJasaKons]) {
     	generateBreadcrumbJasaKonstruksi(
        urlMappingJasaCuttingBetonFromSub1MoneyMaster,
        cleanUrlJasaKons,
       [
           // { name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Cutting Beton', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-cutting-beton.html' },
            { name: 'Perbandingan Jasa Cutting Beton', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-cutting-beton.html' }
        ],
        'JASA_KONSTRUKSI'
    );
	}
	
	if (urlMappingJasaBongkarBangunanBridgeFromSub2Sub1[cleanUrlJasaKons]) {
      	generateBreadcrumbJasaKonstruksi(
        urlMappingJasaBongkarBangunanBridgeFromSub2Sub1,
        cleanUrlJasaKons,
       [
           // { name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Bongkar Bangunan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-bongkar-bangunan.html' }
          //  { name: 'Perbandingan Jasa Bongkar Bangunan', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-bongkar-bangunan.html' }
        ],
        'JASA_KONSTRUKSI'
    );
    }
	if (urlMappingJasaBongkarBangunanFromSub1MoneyMaster[cleanUrlJasaKons]) {
      	generateBreadcrumbJasaKonstruksi(
        urlMappingJasaBongkarBangunanFromSub1MoneyMaster,
        cleanUrlJasaKons,
       [
           // { name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Bongkar Bangunan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-bongkar-bangunan.html' },
            { name: 'Perbandingan Jasa Bongkar Bangunan', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-bongkar-bangunan.html' }
        ],
        'JASA_KONSTRUKSI'
    );
	
    }

	if (urlMappingJasaBuangPuingBridgeFromSub2Sub1[cleanUrlJasaKons]) {
      	generateBreadcrumbJasaKonstruksi(
        urlMappingJasaBuangPuingBridgeFromSub2Sub1,
        cleanUrlJasaKons,
       [
           // { name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Buang Puing', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-buang-puing.html' }
          //  { name: 'Perbandingan Jasa Bongkar Bangunan', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-bongkar-bangunan.html' }
        ],
        'JASA_KONSTRUKSI'
    );
    }
	if (urlMappingJasaBuangPuingFromSub1MoneyMaster[cleanUrlJasaKons]) {
      	generateBreadcrumbJasaKonstruksi(
        urlMappingJasaBuangPuingFromSub1MoneyMaster,
        cleanUrlJasaKons,
       [
           // { name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Buang Puing', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-buang-puing.html' },
           { name: 'Perbandingan Jasa Buang Puing', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-buang-puing.html' }
        ],
        'JASA_KONSTRUKSI'
    );
    }
	
	if (urlMappingJasaPengeboranBridgeFromSub2Sub1[cleanUrlJasaKons]) {
        //pageNameKonstruksiSub.textContent = urlMappingJasaPengeboranBridgeFromSub2Sub1[cleanUrlJasaKons];
	generateBreadcrumbJasaKonstruksi(
        urlMappingJasaPengeboranBridgeFromSub2Sub1,
        cleanUrlJasaKons,
       [
           // { name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Pengeboran', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-pengeboran.html' }
        ],
        'JASA_KONSTRUKSI'
    );
	
    }
	if (urlMappingJasaPengeboranFromSub1MoneyMaster[cleanUrlJasaKons]) {
  	generateBreadcrumbJasaKonstruksi(
        urlMappingJasaPengeboranFromSub1MoneyMaster,
        cleanUrlJasaKons,
       [
           // { name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Pengeboran', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-pengeboran.html' },
            { name: 'Perbandingan Jasa Pengeboran', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-pengeboran.html' }
        ],
        'JASA_KONSTRUKSI'
    );
	
    }
	
	if (urlMappingJasaPerkuatanTanahBridgeFromSub2Sub1[cleanUrlJasaKons]) {
        //pageNameKonstruksiSub.textContent = urlMappingJasaPerkuatanTanahBridgeFromSub2Sub1[cleanUrlJasaKons];
	generateBreadcrumbJasaKonstruksi(
        urlMappingJasaPerkuatanTanahBridgeFromSub2Sub1,
        cleanUrlJasaKons,
       [
            //{ name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Perkuatan Tanah Longsor', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-perkuatan-tanah-longsor.html' }
        ],
        'JASA_KONSTRUKSI'
    );
	
    }
	if (urlMappingJasaPerkuatanTanahFromSub1MoneyMaster[cleanUrlJasaKons]) {
  	generateBreadcrumbJasaKonstruksi(
        urlMappingJasaPerkuatanTanahFromSub1MoneyMaster,
        cleanUrlJasaKons,
       [
            //{ name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Perkuatan Tanah Longsor', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-perkuatan-tanah-longsor.html' },
            { name: 'Perbandingan Jasa Perkuatan Tanah Longsor', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-perkuatan-tanah.html' }
        ],
        'JASA_KONSTRUKSI'
    );
	
    }
	
	if (urlMappingJasaPembatasPengamanBridgeFromSub2Sub1[cleanUrlJasaKons]) {
        //pageNameKonstruksiSub.textContent = urlMappingJasaPembatasPengamanBridgeFromSub2Sub1[cleanUrlJasaKons];
	generateBreadcrumbJasaKonstruksi(
        urlMappingJasaPembatasPengamanBridgeFromSub2Sub1,
        cleanUrlJasaKons,
       [
            //{ name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Pembatas Pengaman', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-pembatas-pengaman.html' }
        ],
        'JASA_KONSTRUKSI'
    );
    }
	if (urlMappingJasaPembatasPengamanFromSub1MoneyMaster[cleanUrlJasaKons]) {
	generateBreadcrumbJasaKonstruksi(
        urlMappingJasaPembatasPengamanFromSub1MoneyMaster,
        cleanUrlJasaKons,
       [
            //{ name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Pembatas Pengaman', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-pembatas-pengaman.html' },
            { name: 'Perbandingan Jasa Pembatas Pengaman', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-pembatas-pengaman.html' }
        ],
        'JASA_KONSTRUKSI'
    );
    }
	if (urlMappingJasaPembatasPengamanFromMoneyMasterMoneyPage[cleanUrlJasaKons]) {
     generateBreadcrumbJasaKonstruksi(
        urlMappingJasaPembatasPengamanFromMoneyMasterMoneyPage,
        cleanUrlJasaKons,
        [
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Pembatas Pengaman', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-pembatas-pengaman.html' },
            { name: 'Perbandingan Jasa Pembatas Pengaman', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-pembatas-pengaman.html' },
            { name: 'Jasa Pembatas Pengaman', url: 'https://www.betonjayareadymix.com/p/jasa-pembatas-pengaman.html' }
        ],
        'JASA_KONSTRUKSI'
    );
}
	
if (urlMappingJasaInstalasiListrikBridgeFromSub2Sub1[cleanUrlJasaKons]) {
	
	generateBreadcrumbJasaKonstruksi(
        urlMappingJasaInstalasiListrikBridgeFromSub2Sub1,
        cleanUrlJasaKons,
       [
            //{ name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Instalasi Listrik', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-instalasi-listrik.html' }
        ],
        'JASA_KONSTRUKSI'
    );
	
    }
	if (urlMappingJasaInstalasiListrikFromSub1MoneyMaster[cleanUrlJasaKons]) {
	
	generateBreadcrumbJasaKonstruksi(
        urlMappingJasaInstalasiListrikFromSub1MoneyMaster,
        cleanUrlJasaKons,
       [
            //{ name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Instalasi Listrik', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-instalasi-listrik.html' },
            { name: 'Perbandingan Jasa Instalasi Listrik', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-instalasi-listrik.html' }
        ],
        'JASA_KONSTRUKSI'
    );
    }
	
  //AWAL JASA KONTRUKSI ALAT
	//SUB DARI PILLAR SEWA ALAT KONSTRUKSI
if (urlMappingSewaAlatFromPillarSub2[cleanUrlJasaKons]) {
	 generateBreadcrumbJasaKonstruksi(
        urlMappingSewaAlatFromPillarSub2,
        cleanUrlJasaKons,
       [
           // { name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Sewa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/sewa-alat-konstruksi.html' }
            //{ name: 'Daftar Sewa Alat Proyek', url: 'https://www.betonjayareadymix.com/p/daftar-sewa-alat-proyek.html' }
        ],
        'SEWA_ALAT_KONSTRUKSI'
    );
}

if (urlMappingSewaAlatProyekFromSub2Sub1[cleanUrlJasaKons]) {

	   generateBreadcrumbJasaKonstruksi(
        urlMappingSewaAlatProyekFromSub2Sub1,
        cleanUrlJasaKons,
       [
           // { name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Sewa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/sewa-alat-konstruksi.html' },
            { name: 'Daftar Sewa Alat Proyek', url: 'https://www.betonjayareadymix.com/p/daftar-sewa-alat-proyek.html' }
        ],
        'SEWA_ALAT_KONSTRUKSI'
    );
 }
if (urlMappingSewaAlatRinganFromSub2Sub1[cleanUrlJasaKons]) {
   	   generateBreadcrumbJasaKonstruksi(
        urlMappingSewaAlatRinganFromSub2Sub1,
        cleanUrlJasaKons,
       [
           // { name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Sewa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/sewa-alat-konstruksi.html' },
            { name: 'Daftar Sewa Alat Ringan', url: 'https://www.betonjayareadymix.com/p/daftar-sewa-alat-ringan.html' }
        ],
        'SEWA_ALAT_KONSTRUKSI'
    );
 }
	if (urlMappingSewaAlatPendukungFromSub2Sub1[cleanUrlJasaKons]) {
   	   generateBreadcrumbJasaKonstruksi(
        urlMappingSewaAlatPendukungFromSub2Sub1,
        cleanUrlJasaKons,
       [
           // { name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Sewa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/sewa-alat-konstruksi.html' },
            { name: 'Daftar Sewa Alat Pendukung', url: 'https://www.betonjayareadymix.com/p/daftar-sewa-alat-pendukung.html' }
        ],
        'SEWA_ALAT_KONSTRUKSI'
    );
 }
if (urlMappingSewaAlatProyekFromSub1MoneyMaster[cleanUrlJasaKons]) {

	   generateBreadcrumbJasaKonstruksi(
        urlMappingSewaAlatProyekFromSub1MoneyMaster,
        cleanUrlJasaKons,
       [
           // { name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Sewa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/sewa-alat-konstruksi.html' },
            { name: 'Daftar Sewa Alat Proyek', url: 'https://www.betonjayareadymix.com/p/daftar-sewa-alat-proyek.html' },
            { name: 'Perbandingan Sewa Alat Proyek', url: 'https://www.betonjayareadymix.com/p/perbandingan-sewa-alat-proyek.html' }
        ],
        'SEWA_ALAT_KONSTRUKSI'
    );
 }
if (urlMappingSewaAlatRinganFromSub1MoneyMaster[cleanUrlJasaKons]) {
    generateBreadcrumbJasaKonstruksi(
        urlMappingSewaAlatRinganFromSub1MoneyMaster,
        cleanUrlJasaKons,
       [
           // { name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Sewa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/sewa-alat-konstruksi.html' },
            { name: 'Daftar Sewa Alat Ringan', url: 'https://www.betonjayareadymix.com/p/daftar-sewa-alat-ringan.html' },
            { name: 'Perbandingan Sewa Alat Ringan', url: 'https://www.betonjayareadymix.com/p/perbandingan-sewa-alat-ringan.html' }
        ],
        'SEWA_ALAT_KONSTRUKSI'
    );

}
	if (urlMappingSewaAlatRinganFromMoneyMasterMoneyMaster1[cleanUrlJasaKons]) {
    generateBreadcrumbJasaKonstruksi(
        urlMappingSewaAlatRinganFromMoneyMasterMoneyMaster1,
        cleanUrlJasaKons,
       [
           // { name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Sewa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/sewa-alat-konstruksi.html' },
            { name: 'Daftar Sewa Alat Ringan', url: 'https://www.betonjayareadymix.com/p/daftar-sewa-alat-ringan.html' },
            { name: 'Perbandingan Sewa Alat Ringan', url: 'https://www.betonjayareadymix.com/p/perbandingan-sewa-alat-ringan.html' },
		    { name: 'Sewa Alat Ringan', url: 'https://www.betonjayareadymix.com/p/sewa-alat-ringan.html' }
        ],
        'SEWA_ALAT_KONSTRUKSI'
    );

}
	
if (urlMappingSewaAlatPendukungFromSub1MoneyMaster[cleanUrlJasaKons]) {
    generateBreadcrumbJasaKonstruksi(
        urlMappingSewaAlatPendukungFromSub1MoneyMaster,
        cleanUrlJasaKons,
       [
           // { name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Sewa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/sewa-alat-konstruksi.html' },
            { name: 'Daftar Sewa Alat Pendukung', url: 'https://www.betonjayareadymix.com/p/daftar-sewa-alat-pendukung.html' },
            { name: 'Perbandingan Sewa Alat Pendukung', url: 'https://www.betonjayareadymix.com/p/perbandingan-sewa-alat-pendukung.html' }
        ],
        'SEWA_ALAT_KONSTRUKSI'
    );

}

if (urlMappingSewaAlatPendukungFromMoneyMasterMoneyMaster1[cleanUrlJasaKons]) {
    generateBreadcrumbJasaKonstruksi(
        urlMappingSewaAlatPendukungFromMoneyMasterMoneyMaster1,
        cleanUrlJasaKons,
       [
           // { name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Sewa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/sewa-alat-konstruksi.html' },
            { name: 'Daftar Sewa Alat Pendukung', url: 'https://www.betonjayareadymix.com/p/daftar-sewa-alat-pendukung.html' },
            { name: 'Perbandingan Sewa Alat Pendukung', url: 'https://www.betonjayareadymix.com/p/perbandingan-sewa-alat-pendukung.html' },
		    { name: 'Sewa Alat Pendukung', url: 'https://www.betonjayareadymix.com/p/sewa-alat-pendukung.html' }
        ],
        'SEWA_ALAT_KONSTRUKSI'
    );

}
if (urlMappingSewaAlatBeratFromSub2Sub1[cleanUrlJasaKons]) {
        //pageNameKonstruksiSub.textContent = urlMappingSewaAlatBeratFromSub2Sub1[cleanUrlJasaKons];

	   generateBreadcrumbJasaKonstruksi(
        urlMappingSewaAlatBeratFromSub2Sub1,
        cleanUrlJasaKons,
       [
           // { name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Sewa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/sewa-alat-konstruksi.html' },
            { name: 'Daftar Sewa Alat Berat', url: 'https://www.betonjayareadymix.com/p/daftar-sewa-alat-berat.html' }
          //  { name: 'Perbandingan Sewa Alat Berat', url: 'https://www.betonjayareadymix.com/p/perbandingan-sewa-alat-berat.html' }
        ],
        'SEWA_ALAT_KONSTRUKSI'
    );
 }

if (urlMappingSewaAlatBeratFromSub1MoneyMaster[cleanUrlJasaKons]) {
  
	   generateBreadcrumbJasaKonstruksi(
        urlMappingSewaAlatBeratFromSub1MoneyMaster,
        cleanUrlJasaKons,
       [
           // { name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Sewa Alat Konstruksi', url: 'https://www.betonjayareadymix.com/p/sewa-alat-konstruksi.html' },
            { name: 'Daftar Sewa Alat Berat', url: 'https://www.betonjayareadymix.com/p/daftar-sewa-alat-berat.html' },
           	{ name: 'Perbandingan Sewa Alat Berat', url: 'https://www.betonjayareadymix.com/p/perbandingan-sewa-alat-berat.html' }
        ],
        'SEWA_ALAT_KONSTRUKSI'
    );
   
}
	
  //AKHIR JASA KONTRUKSI ALAT
 if (urlMappingRenovasiFromMoneyMasterMoneyMaster1[cleanUrlJasaKons]) {
	   generateBreadcrumbJasaKonstruksi(
        urlMappingRenovasiFromMoneyMasterMoneyMaster1,
        cleanUrlJasaKons,
       [
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Renovasi', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-renovasi.html' },
           	{ name: 'Perbandingan Jasa Renovasi', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-renovasi.html' },
           	{ name: 'Jasa Renovasi', url: 'https://www.betonjayareadymix.com/p/jasa-renovasi.html' }
        ],
        'JASA_KONSTRUKSI'
    );   
}
 if (urlMappingRenovasiBangunanFromMoneyMaster1MoneyPage[cleanUrlJasaKons]) {
	   generateBreadcrumbJasaKonstruksi(
        urlMappingRenovasiBangunanFromMoneyMaster1MoneyPage,
        cleanUrlJasaKons,
       [
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Renovasi', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-renovasi.html' },
           	{ name: 'Perbandingan Jasa Renovasi', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-renovasi.html' },
           	{ name: 'Jasa Renovasi', url: 'https://www.betonjayareadymix.com/p/jasa-renovasi.html' },
           	{ name: 'Jasa Renovasi Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-renovasi-bangunan.html' }
        ],
        'JASA_KONSTRUKSI'
    );   
}
	
if (urlMappingSaluranFromMoneyMasterMoneyPage[cleanUrlJasaKons]) {
	   generateBreadcrumbJasaKonstruksi(
        urlMappingSaluranFromMoneyMasterMoneyPage,
        cleanUrlJasaKons,
        [
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Saluran & Drainase', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-saluran-drainase.html' },
            { name: 'Perbandingan Jasa Saluran & Drainase', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-saluran-drainase.html' },
            { name: 'Jasa Saluran & Drainase', url: 'https://www.betonjayareadymix.com/p/jasa-saluran-drainase.html' }
        ],
        'JASA_KONSTRUKSI'
    );
    }
	
   if (urlMappingUjiTanahFromMoneyMasterMoneyMaster1[cleanUrlJasaKons]) {
       generateBreadcrumbJasaKonstruksi(
        urlMappingUjiTanahFromSub1MoneyMaster,
        cleanUrlJasaKons,
        [
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Uji Tanah', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-uji-tanah.html' },
            { name: 'Perbandingan Jasa Uji Tanah', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-uji-tanah.html' },
            { name: 'Jasa Uji Tanah', url: 'https://www.betonjayareadymix.com/p/jasa-uji-tanah.html' }
        ],
        'JASA_KONSTRUKSI'
    );
    }
   
if (urlMappingBongkarBangunanFromMoneyMasterMoneyMaster1[cleanUrlJasaKons]) {
	 generateBreadcrumbJasaKonstruksi(
        urlMappingBongkarBangunanFromMoneyMasterMoneyMaster1,
        cleanUrlJasaKons,
        [
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Bongkar Bangunan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-bongkar-bangunan.html' },
            { name: 'Perbandingan Jasa Bongkar Bangunan', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-bongkar-bangunan.html' },
            { name: 'Jasa Bongkar Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-bongkar-bangunan.html' }
        ],
        'JASA_KONSTRUKSI'
    );
 }
  if (urlMappingPerbaikanBangunanFromMoneyMasterMoneyPage[cleanUrlJasaKons]) {
        generateBreadcrumbJasaKonstruksi(
        urlMappingPerbaikanBangunanFromMoneyMasterMoneyPage,
        cleanUrlJasaKons,
        [
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Perbaikan Bangunan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-perbaikan-bangunan.html' },
            { name: 'Perbandingan Jasa Perbaikan Bangunan', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-perbaikan-bangunan.html' },
            { name: 'Jasa Perbaikan Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-bangunan.html' }
        ],
        'JASA_KONSTRUKSI'
    );
    }

if (urlMappingJasaKitchenSetFromSub1MoneyMaster[cleanUrlJasaKons]) {

	    generateBreadcrumbJasaKonstruksi(
        urlMappingJasaKitchenSetFromSub1MoneyMaster,
        cleanUrlJasaKons,
        [
            //{ name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Kitchen Set', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-kitchen-set.html'},
            { name: 'Perbandingan Jasa Kitchen Set', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-kitchen-set.html'}
        ],
        'JASA_KONSTRUKSI'
    );
}
if (urlMappingJasaKitchenSetFromMoneyMasterMoneyPage[cleanUrlJasaKons]) {

	    generateBreadcrumbJasaKonstruksi(
        urlMappingJasaKitchenSetFromMoneyMasterMoneyPage,
        cleanUrlJasaKons,
        [
            //{ name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Kitchen Set', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-kitchen-set.html'},
            { name: 'Perbandingan Jasa Kitchen Set', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-kitchen-set.html'},
            { name: 'Jasa Kitchen Set', url: 'https://www.betonjayareadymix.com/p/jasa-kitchen-set.html'}
        ],
        'JASA_KONSTRUKSI'
    );
}

if (urlMappingJasaPembuatanFromSub1MoneyMaster[cleanUrlJasaKons]) {

	    generateBreadcrumbJasaKonstruksi(
        urlMappingJasaPembuatanFromSub1MoneyMaster,
        cleanUrlJasaKons,
        [
            //{ name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Pembuatan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-pembuatan.html'},
            { name: 'Perbandingan Jasa Pembuatan', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-pembuatan.html'}
        ],
        'JASA_KONSTRUKSI'
    );
}
if (urlMappingJasaPasangFromSub1MoneyMaster[cleanUrlJasaKons]) {

	    generateBreadcrumbJasaKonstruksi(
        urlMappingJasaPasangFromSub1MoneyMaster,
        cleanUrlJasaKons,
        [
            //{ name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Pasang', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-pasang.html'},
            { name: 'Perbandingan Jasa Pasang', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-pasang.html'}
        ],
        'JASA_KONSTRUKSI'
    );
}
	
if (urlMappingJasaPembuatanFromMoneyMasterMoneyMaster1[cleanUrlJasaKons]) {

	    generateBreadcrumbJasaKonstruksi(
        urlMappingJasaPembuatanFromMoneyMasterMoneyMaster1,
        cleanUrlJasaKons,
        [
            //{ name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Pembuatan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-pembuatan.html'},
            { name: 'Perbandingan Jasa Pembuatan', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-pembuatan.html'},
            { name: 'Jasa Pembuatan', url: 'https://www.betonjayareadymix.com/p/jasa-pembuatan.html'}
        ],
        'JASA_KONSTRUKSI'
    );
}
if (urlMappingJasaPasangFromMoneyMasterMoneyMaster1[cleanUrlJasaKons]) {

	    generateBreadcrumbJasaKonstruksi(
        urlMappingJasaPasangFromMoneyMasterMoneyMaster1,
        cleanUrlJasaKons,
        [
            //{ name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Pasang', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-pasang.html'},
            { name: 'Perbandingan Jasa Pasang', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-pasang.html'},
            { name: 'Jasa Pasang', url: 'https://www.betonjayareadymix.com/p/jasa-pasang.html'}
        ],
        'JASA_KONSTRUKSI'
    );
}
if (urlMappingJasaPasangLantaiFromMoneyMaster1MoneyMaster2[cleanUrlJasaKons]) {

	    generateBreadcrumbJasaKonstruksi(
        urlMappingJasaPasangLantaiFromMoneyMaster1MoneyMaster2,
        cleanUrlJasaKons,
        [
            //{ name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Pasang', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-pasang.html'},
            { name: 'Perbandingan Jasa Pasang', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-pasang.html'},
            { name: 'Jasa Pasang', url: 'https://www.betonjayareadymix.com/p/jasa-pasang.html'},
            { name: 'Jasa Pasang Lantai', url: 'https://www.betonjayareadymix.com/p/jasa-pasang-lantai.html'}
        ],
        'JASA_KONSTRUKSI'
    );
}
	
if (urlMappingInfrastrukturFromSub1MoneyMaster[cleanUrlJasaKons]) {

	    generateBreadcrumbJasaKonstruksi(
        urlMappingInfrastrukturFromSub1MoneyMaster,
        cleanUrlJasaKons,
        [
            //{ name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Perbaikan Infrastruktur', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-perbaikan-infrastruktur.html'},
            { name: 'Perbandingan Jasa Perbaikan Infrastruktur', url: 'https://www.betonjayareadymix.com/p/perbandingan-perbaikan-infrastruktur.html'}
        ],
        'JASA_KONSTRUKSI'
    );
    }
	
if (urlMappingPengeboranFromSub1MoneyMaster[cleanUrlJasaKons]) {
	
	generateBreadcrumbJasaKonstruksi(
        urlMappingPengeboranFromSub1MoneyMaster,
        cleanUrlJasaKons,
        [
            //{ name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Pengeboran', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-pengeboran.html'},
            { name: 'Perbandingan Jasa Pengeboran', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-pengeboran.html'}
            //{ name: 'Jasa Pengeboran', url: 'https://www.betonjayareadymix.com/p/jasa-pengeboran.html'}
        ],
        'JASA_KONSTRUKSI'
    );
    }

if (urlMappingPengeboranFromMoneyMasterMoneyMaster1[cleanUrlJasaKons]) {
	
	generateBreadcrumbJasaKonstruksi(
        urlMappingPengeboranFromMoneyMasterMoneyMaster1,
        cleanUrlJasaKons,
        [
            //{ name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Pengeboran', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-pengeboran.html'},
            { name: 'Perbandingan Jasa Pengeboran', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-pengeboran.html'},
            { name: 'Jasa Pengeboran', url: 'https://www.betonjayareadymix.com/p/jasa-pengeboran.html'}
        ],
        'JASA_KONSTRUKSI'
    );
    }
	
	if (urlMappingJasaPerbaikanBangunanFromSub1MoneyMaster[cleanUrlJasaKons]) {
	
	generateBreadcrumbJasaKonstruksi(
        urlMappingJasaPerbaikanBangunanFromSub1MoneyMaster,
        cleanUrlJasaKons,
        [
            //{ name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Perbaikan Bangunan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-perbaikan-bangunan.html'},
            { name: 'Perbandingan Perbaikan Bangunan', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-perbaikan-bangunan.html'}
           // { name: 'Jasa Perbaikan Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-bangunan.html'}
        ],
        'JASA_KONSTRUKSI'
    );
    }
	
	if (urlMappingJasaPerbaikanInfrastrukturFromSub1MoneyMaster[cleanUrlJasaKons]) {
		
	generateBreadcrumbJasaKonstruksi(
        urlMappingJasaPerbaikanInfrastrukturFromSub1MoneyMaster,
        cleanUrlJasaKons,
        [
            //{ name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Perbaikan Infrastruktur', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-perbaikan-infrastruktur.html'},
            { name: 'Perbandingan Perbaikan Infrastruktur', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-perbaikan-infrastruktur.html'}
           // { name: 'Jasa Perbaikan Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-bangunan.html'}
        ],
        'JASA_KONSTRUKSI'
    );
    }
	if (urlMappingPerbaikanInfrastrukturFromMoneyMasterMoneyMaster1[cleanUrlJasaKons]) {
	generateBreadcrumbJasaKonstruksi(
        urlMappingPerbaikanInfrastrukturFromMoneyMasterMoneyMaster1,
        cleanUrlJasaKons,
        [
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Perbaikan Infrastruktur', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-perbaikan-infrastruktur.html'},
            { name: 'Perbandingan Perbaikan Infrastruktur', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-perbaikan-infrastruktur.html'},
           { name: 'Jasa Perbaikan Infrastruktur', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-infrastruktur.html'}
        ],
        'JASA_KONSTRUKSI'
    );
    }
	if (urlMappingPerbaikanInfrastrukturFromMoneyMasterMoneyPage[cleanUrlJasaKons]) {
		generateBreadcrumbJasaKonstruksi(
        urlMappingPerbaikanInfrastrukturFromMoneyMasterMoneyPage,
        cleanUrlJasaKons,
        [
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Perbaikan Infrastruktur', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-perbaikan-infrastruktur.html'},
            { name: 'Perbandingan Perbaikan Infrastruktur', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-perbaikan-infrastruktur.html'},
           { name: 'Jasa Perbaikan Infrastruktur', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-infrastruktur.html'}
        ],
        'JASA_KONSTRUKSI'
    );
    }
	
//SUB JASA PENGEBORAN
/*
if (urlMappingJasaBorAirSumur[cleanUrlJasaKons]) {
        restoreCondition('JasaKonsSub');
	restoreCondition('JasaPengeboran');
	
	restoreCondition('JasaBorAirSumur');
           // hapus elemen id DIV Lain
	removeCondition('ProdukInFur');
        removeCondition('MaterialKons');
	removeCondition('ProdukKons');
        //removeCondition('ProdukKonsSaluran');
        //removeCondition('ProdukKonsPembatas');
        removeCondition('JasaKonsPondasiTanah');
        removeCondition('JasaKonsJalanPerkerasan');
        removeCondition('JasaKonsPembatas');
        removeCondition('JasaKonsPerbaikan');
	removeCondition('JasaKonsFinishing');
        removeCondition('JasaKonsStruktur');
	removeCondition('JasaKons');
	removeCondition('MenuKons');
	   
       // hapus elemen id DIV Lain
	removeCondition('JasaAlatKonstruksi');
	removeCondition('SewaAlatKonstruksi');
	removeCondition('SewaAlatBerat');
	removeCondition('SewaAlatKonstruksiRingan');
	   
	removeCondition('JasaInstalasiListrik');
	removeCondition('JasaRenovasiPerbaikan');
        removeCondition('JasaStrukturKonstruksi');
        removeCondition('JasaFinishing');
        removeCondition('JasaPondasiPerkuatan');
        removeCondition('JasaSaluranDrainase');
        removeCondition('JasaJalanPerkerasan');
	removeCondition('JasaPembatasPengaman');
	removeCondition('JasaPematanganLahan');
	removeCondition('JasaUjiTanah');
	removeCondition('JasaPerkuatanTanahLongsor');
	removeCondition('JasaBongkarBangunan');
    removeCondition('JasaPerawatanPerbaikanBangunan');
    removeCondition('JasaPerbaikanInfrastruktur'); 
	//SUB JASA PENGEBORAN selain JasaBorAirSumur
		//removeCondition('JasaBorAirSumur');
		removeCondition('JasaBorPile');
		removeCondition('JasaCoringBeton');
		removeCondition('JasaBorBeton');
		removeCondition('JasaBorTanah');
		removeCondition('JasaBorHorizontal');
		removeCondition('JasaBorTembok');
       // removeCondition('JasaKonstruksiCustom');
	
        JasaKonstruksiSubLink.style.visibility = 'visible';
        JasaPengeboranLink.style.visibility = 'visible';
	     
        JasaBorAirSumurLink.style.visibility = 'visible';
        pageNameKonstruksiSub.textContent = urlMappingJasaBorAirSumur[cleanUrlJasaKons];
    }
   // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaBorAirSumur[cleanUrlJasaKons]) {
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
                   "name": urlMappingJasaBorAirSumur[cleanUrlJasaKons],
                   "item": cleanUrlJasaKons
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
   */
	
//JASA INSTALASI LISTRIK
if (urlMappingJasaInstalasiListrikFromSub1MoneyPage[cleanUrlJasaKons]) {
        restoreCondition('JasaKonsSub');
	restoreCondition('JasaInstalasiListrik');
           // hapus elemen id DIV Lain
	removeCondition('ProdukInFur');
        removeCondition('MaterialKons');
	removeCondition('ProdukKons');
        //removeCondition('ProdukKonsSaluran');
        //removeCondition('ProdukKonsPembatas');
        removeCondition('JasaKonsPondasiTanah');
        removeCondition('JasaKonsJalanPerkerasan');
        removeCondition('JasaKonsPembatas');
        removeCondition('JasaKonsPerbaikan');
	removeCondition('JasaKonsFinishing');
        removeCondition('JasaKonsStruktur');
	removeCondition('JasaKons');
	removeCondition('MenuKons');
	    
       // hapus elemen id DIV Lain
	removeCondition('JasaAlatKonstruksi');
	removeCondition('SewaAlatKonstruksi');
	removeCondition('SewaAlatBerat');
	removeCondition('SewaAlatKonstruksiRingan');

	removeCondition('JasaPematanganLahan');
	removeCondition('JasaRenovasiPerbaikan');
        removeCondition('JasaStrukturKonstruksi');
        removeCondition('JasaFinishing');
        removeCondition('JasaPondasiPerkuatan');
        removeCondition('JasaSaluranDrainase');
        removeCondition('JasaJalanPerkerasan');
	removeCondition('JasaPembatasPengaman');
	removeCondition('JasaUjiTanah');
	removeCondition('JasaPerkuatanTanahLongsor');
	removeCondition('JasaBongkarBangunan');
	removeCondition('JasaPerawatanPerbaikanBangunan');
    removeCondition('JasaPerbaikanInfrastruktur'); 
	removeCondition('JasaPengeboran');
		removeCondition('JasaBorAirSumur');
		removeCondition('JasaBorPile');
		removeCondition('JasaCoringBeton');
		removeCondition('JasaBorBeton');
		removeCondition('JasaBorTanah');
		removeCondition('JasaBorHorizontal');
		removeCondition('JasaBorTembok');

       // removeCondition('JasaKonstruksiCustom');

        JasaKonstruksiSubLink.style.visibility = 'visible';
        JasaInstalasiListrikLink.style.visibility = 'visible';
        pageNameKonstruksiSub.textContent = urlMappingJasaInstalasiListrikFromSub1MoneyPage[cleanUrlJasaKons];
    }

  // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaInstalasiListrikFromSub1MoneyPage[cleanUrlJasaKons]) {
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
                   "name": "Daftar Jasa Instalasi Listrik",
                   "item": "https://www.betonjayareadymix.com/p/daftar-jasa-instalasi-listrik.html"
               },
	       {
                   "@type": "ListItem",
                   "position": 4,
                   "name": urlMappingJasaInstalasiListrikFromSub1MoneyPage[cleanUrlJasaKons],
                   "item": cleanUrlJasaKons
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
/*
    if (urlMappingCustom[cleanUrlJasaKons]) {
        restoreCondition('JasaKonsSub');
	restoreCondition('JasaKonstruksiCustom');
           // hapus elemen id DIV Lain
        removeCondition('MaterialKons');
        //removeCondition('ProdukKonsSaluran');
        //removeCondition('ProdukKonsPembatas');
        removeCondition('JasaKonsPembatas');
        removeCondition('JasaKonsPerbaikanSub');
	removeCondition('JasaKons');
       // hapus elemen id DIV Lain
	removeCondition('JasaRenovasiPerbaikan');
        removeCondition('JasaStrukturKonstruksi');
        removeCondition('JasaFinishing');
        removeCondition('JasaPondasiPerkuatan');
        removeCondition('JasaSaluranDrainase');
        removeCondition('JasaJalanPerkerasan');
        removeCondition('JasaPembatasPengaman');

        JasaKonstruksiSubLink.style.visibility = 'visible';
        JasaKonstruksiCustomLink.style.visibility = 'visible';
        pageNameKonstruksiSub.textContent = urlMappingCustom[cleanUrlJasaKons];
    }
    */
   });
