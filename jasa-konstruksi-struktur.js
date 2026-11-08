// ============================================================
// 🔍 ENTITY TYPE: JASA (Struktur Konstruksi) — PILLAR PAGE
// v2.0.0 — Fix Duplikasi + Early Exit Guard + Slug Fix
// ============================================================

console.log('[jasa-konstruksi-struktur] 📄 File loaded, waiting for DOM...');

// ═══════════════════════════════════════════════════════════
// [BAGIAN 1] DEFINISI SEMUA MAPPING
// ═══════════════════════════════════════════════════════════

// ============================================================
// 📁 JASA KONSTRUKSI BANGUNAN (MONEY_MASTER)
// ============================================================
const urlMappingJasaKonstruksiBangunanFromMoneyMasterMoneyPage = {
    //MP BANGUNAN HUNIAN
   //  "https://www.betonjayareadymix.com/p/jasa-pembuatan-bangunan.html": "Jasa Pembuatan Bangunan",
     "https://www.betonjayareadymix.com/p/jasa-pembuatan-rumah.html": "Jasa Pembuatan Rumah",
    "https://www.betonjayareadymix.com/p/jasa-pembuatan-apartemen.html": "Jasa Pembuatan Apartemen",
    "https://www.betonjayareadymix.com/p/jasa-pembuatan-hotel.html": "Jasa Pembuatan Hotel",
    "https://www.betonjayareadymix.com/p/jasa-pembuatan-sekolah.html": "Jasa Pembuatan Sekolah",
    "https://www.betonjayareadymix.com/p/jasa-pembuatan-masjid.html": "Jasa Pembuatan Masjid",
        "https://www.betonjayareadymix.com/p/jasa-pembuatan-ruko.html": "Jasa Pembuatan Ruko",
        "https://www.betonjayareadymix.com/p/jasa-pembuatan-gudang.html": "Jasa Pembuatan Gudang",
      "https://www.betonjayareadymix.com/p/jasa-konstruksi-rumah-tinggal.html": "Jasa Konstruksi Rumah Tinggal",
       "https://www.betonjayareadymix.com/p/jasa-konstruksi-gedung-rs.html": "Jasa Konstruksi Gedung Rumah Sakit",
       "https://www.betonjayareadymix.com/p/jasa-pembuatan-gedung.html": "Jasa Pembuatan Gedung",
       "https://www.betonjayareadymix.com/p/jasa-pembuatan-pabrik.html": "Jasa Pembuatan Pabrik",

    //MP Outdoor/Exterior
        "https://www.betonjayareadymix.com/p/jasa-pembuatan-pagar.html": "Jasa Pembuatan Pagar",
   	"https://www.betonjayareadymix.com/p/jasa-pembuatan-kanopi.html": "Jasa Pembuatan Kanopi",
    "https://www.betonjayareadymix.com/p/jasa-pembuatan-tangga.html": "Jasa Pembuatan Tangga",
    "https://www.betonjayareadymix.com/p/jasa-pembuatan-balkon.html": "Jasa Pembuatan Balkon",
    "https://www.betonjayareadymix.com/p/jasa-pembuatan-decking.html": "Jasa Pembuatan Decking",
        // Kusen/Pintu/Jendela bisa menjadi MM sendiri atau di bawah Furniture
    "https://www.betonjayareadymix.com/p/jasa-pembuatan-kusen.html": "Jasa Pembuatan Kusen",
    "https://www.betonjayareadymix.com/p/jasa-pembuatan-pintu.html": "Jasa Pembuatan Pintu",
    "https://www.betonjayareadymix.com/p/jasa-pembuatan-jendela.html": "Jasa Pembuatan Jendela",
        
    //MP Furnitur
     "https://www.betonjayareadymix.com/p/jasa-pembuatan-furniture.html": "Jasa Pembuatan Furniture"  
  
};

// ═════════════════════════════════════════════════════════════════════
// 📂 PARENT: Jasa Pembuatan Bangunan Hunian (MP) ➔ CHILD: Variant
// ═════════════════════════════════════════════════════════════════════
const urlMappingJasaPembuatanRumahFromMoneyPageVariant = {
  "https://www.betonjayareadymix.com/p/jasa-konstruksi-villa-modern.html": "Jasa Konstruksi Villa Modern",
  "https://www.betonjayareadymix.com/p/jasa-borongan-tukang-bangunan-per-meter.html": "Jasa Borongan Tukang Bangunan per Meter",
  "https://www.betonjayareadymix.com/p/jasa-borongan-bangunan-plus-material.html": "Jasa Borongan Bangunan Plus Material",
  "https://www.betonjayareadymix.com/p/jasa-konstruksi-rumah-per-m2.html": "Jasa Konstruksi Rumah per m2",
  "https://www.betonjayareadymix.com/p/jasa-borongan-tenaga-bangunan-rumah.html": "Jasa Borongan Tenaga Bangunan Rumah"
};

// ═════════════════════════════════════════════════════════════════════
// 📂 PARENT: MP Bangunan Komersial ➔ CHILD: Variant (spesifikasi mewah/bintang)
// ═════════════════════════════════════════════════════════════════════
const urlMappingJasaPembuatanApartemenFromMoneyPageVariant = {
  "https://www.betonjayareadymix.com/p/jasa-konstruksi-apartemen-mewah.html": "Jasa Konstruksi Apartemen Mewah"
};

const urlMappingJasaPembuatanHotelFromMoneyPageVariant = {
  "https://www.betonjayareadymix.com/p/jasa-konstruksi-hotel-bintang.html": "Jasa Konstruksi Hotel Bintang"
};

const urlMappingJasaPembuatanSekolahFromMoneyPageVariant = {
  "https://www.betonjayareadymix.com/p/jasa-konstruksi-gedung-sekolah.html": "Jasa Konstruksi Gedung Sekolah"
};

const urlMappingJasaPembuatanGudangFromMoneyPageVariant = {
  "https://www.betonjayareadymix.com/p/jasa-konstruksi-gudang-logistik.html": "Jasa Konstruksi Gudang Logistik"
};

const urlMappingJasaKonstruksiGudangLogistikFromVariantSubVariant = {
    "https://www.betonjayareadymix.com/p/jasa-konstruksi-cold-storage-modern.html": "Jasa Konstruksi Cold Storage Modern"
};
const urlMappingJasaPembuatanFurnitureFromMoneyPageVariant = {
"https://www.betonjayareadymix.com/p/jasa-pembuatan-furniture-custom.html": "Jasa Pembuatan Furniture Custom",
"https://www.betonjayareadymix.com/p/jasa-pembuatan-lemari-built-in.html": "Jasa Pembuatan Lemari Built In",
"https://www.betonjayareadymix.com/p/jasa-pembuatan-partisi-ruangan.html": "Jasa Pembuatan Partisi Ruangan",
"https://www.betonjayareadymix.com/p/jasa-pembuatan-meja-kursi.html": "Jasa Pembuatan Meja Kursi",
"https://www.betonjayareadymix.com/p/jasa-pembuatan-sofa-custom.html": "Jasa Pembuatan Sofa Custom",
"https://www.betonjayareadymix.com/p/jasa-pembuatan-tempat-tidur.html": "Jasa Pembuatan Tempat Tidur",
"https://www.betonjayareadymix.com/p/jasa-pembuatan-rak-buku.html": "Jasa Pembuatan Rak Buku",
"https://www.betonjayareadymix.com/p/jasa-pembuatan-kamar-set.html": "Jasa Pembuatan Kamar Set"
};
// ═════════════════════════════════════════════════════════════════════
// 📂 PARENT: MP Bangunan Umum ➔ CHILD: Variant
// (Perlu dibuat MP baru: jasa-pembuatan-gedung & jasa-pembuatan-pabrik)
// ═════════════════════════════════════════════════════════════════════
const urlMappingJasaPembuatanGedungFromMoneyPageVariant = {
  "https://www.betonjayareadymix.com/p/jasa-konstruksi-gedung-perkantoran.html": "Jasa Konstruksi Gedung Perkantoran",
     "https://www.betonjayareadymix.com/p/biaya-jasa-pembuatan-gudang-baja-ringan.html": "Biaya Jasa Pembuatan Gudang Baja Ringan"
};

const urlMappingJasaPembuatanPabrikFromMoneyPageVariant = {
  "https://www.betonjayareadymix.com/p/jasa-konstruksi-pabrik-industri.html": "Jasa Konstruksi Pabrik Industri",
  "https://www.betonjayareadymix.com/p/jasa-konstruksi-workshop-modern.html": "Jasa Konstruksi Workshop Modern"
};

const urlMappingJasaKonstruksiBangunanFromMoneyMastrVariant = {
  "https://www.betonjayareadymix.com/p/jasa-konstruksi-bengkel-modern.html": "Jasa Konstruksi Bengkel Modern"
};
// ============================================================
// 📁 JASA KONSTRUKSI STRUKTUR (MONEY_MASTER)
// ═════════════════════════════════════════════════════════════════════
// 📂 PARENT: jasa-konstruksi-struktur (MM) ➔ CHILD: Money Page
// ═════════════════════════════════════════════════════════════════════
const urlMappingJasaKonstruksiStrukturFromMoneyMasterMoneyPage = {
  // Baja (payung)
  "https://www.betonjayareadymix.com/p/jasa-konstruksi-baja.html": "Jasa Konstruksi Baja",
 //Tower
  "https://www.betonjayareadymix.com/p/jasa-pasang-tower.html": "Jasa Pasang Tower",
  // Baja Ringan (B2C)
  "https://www.betonjayareadymix.com/p/jasa-pasang-baja-ringan.html": "Jasa Pasang Baja Ringan",
  
  // Beton (payung)
  "https://www.betonjayareadymix.com/p/jasa-pengecoran-beton.html": "Jasa Pengecoran Beton",
  
  // Precast
  "https://www.betonjayareadymix.com/p/jasa-panel-beton-precast.html": "Jasa Panel Beton Precast"
};
// ═════════════════════════════════════════════════════════════════════
// 📂 PARENT: jasa-konstruksi-baja (MP) ➔ CHILD: Variant
// ═════════════════════════════════════════════════════════════════════
const urlMappingJasaKonstruksiBajaFromMoneyPageVariant = {
  "https://www.betonjayareadymix.com/p/jasa-konstruksi-baja-ringan.html": "Jasa Konstruksi Baja Ringan",
  "https://www.betonjayareadymix.com/p/jasa-konstruksi-baja-konvensional.html": "Jasa Konstruksi Baja Konvensional",
    "https://www.betonjayareadymix.com/p/jasa-konstruksi-baja-rumah.html": "Jasa Konstruksi Baja Rumah",
     "https://www.betonjayareadymix.com/p/jasa-konstruksi-baja-gudang.html": "Jasa Konstruksi Baja Gudang",
  "https://www.betonjayareadymix.com/p/jasa-konstruksi-baja-pabrik.html": "Jasa Konstruksi Baja Pabrik",
  "https://www.betonjayareadymix.com/p/jasa-konstruksi-baja-ruko.html": "Jasa Konstruksi Baja Ruko",
  "https://www.betonjayareadymix.com/p/jasa-konstruksi-baja-gedung.html": "Jasa Konstruksi Baja Gedung"
};
// ═════════════════════════════════════════════════════════════════════
// 📂 PARENT: jasa-konstruksi-baja-ringan (Variant) ➔ CHILD: Sub-variant
// ═════════════════════════════════════════════════════════════════════
const urlMappingJasaKonstruksiBajaRinganFromVariantSubVariant = {
  "https://www.betonjayareadymix.com/p/jasa-rangka-atap-baja-ringan.html": "Jasa Rangka Atap Baja Ringan",
  "https://www.betonjayareadymix.com/p/jasa-struktur-baja-gudang.html": "Jasa Struktur Baja Gudang",
  "https://www.betonjayareadymix.com/p/jasa-konstruksi-baja-ringan-ruko.html": "Jasa Konstruksi Baja Ringan Ruko"

};
// ═════════════════════════════════════════════════════════════════════
// 📂 PARENT: jasa-pasang-tower (MP) ➔ CHILD: Variant
// ═════════════════════════════════════════════════════════════════════
const urlMappingJasaPasangTowerFromMoneyPageVariant = {
 "https://www.betonjayareadymix.com/p/jasa-pemasangan-tower-triangle.html": "Jasa Pemasangan Tower Triangle",
 "https://www.betonjayareadymix.com/p/jasa-pembangunan-tower-baja.html": "Jasa Pembangunan Tower Baja",
  "https://www.betonjayareadymix.com/p/jasa-pemasangan-tower-bts.html": "Jasa Pemasangan Tower BTS"

};
// ═════════════════════════════════════════════════════════════════════
// 📂 PARENT: jasa-pasang-baja-ringan (MP) ➔ CHILD: Variant
// ═════════════════════════════════════════════════════════════════════
const urlMappingJasaPasangBajaRinganFromMoneyPageVariant = {
  "https://www.betonjayareadymix.com/p/jasa-pasang-atap-baja-ringan.html": "Jasa Pasang Atap Baja Ringan",
  "https://www.betonjayareadymix.com/p/jasa-pasang-kanopi-baja-ringan.html": "Jasa Pasang Kanopi Baja Ringan",
  "https://www.betonjayareadymix.com/p/jasa-pasang-baja-ringan-per-meter.html": "Jasa Pasang Baja Ringan per Meter",
  "https://www.betonjayareadymix.com/p/jasa-borongan-rangka-atap-baja-ringan.html": "Jasa Borongan Rangka Atap Baja Ringan"
};
// ═════════════════════════════════════════════════════════════════════
// 📂 PARENT: jasa-pengecoran-beton (MP) ➔ CHILD: Variant
// ═════════════════════════════════════════════════════════════════════
const urlMappingJasaPengecoranBetonFromMoneyPageVariant = {
  "https://www.betonjayareadymix.com/p/jasa-pengecoran-kolom-beton.html": "Jasa Pengecoran Kolom Beton",
  "https://www.betonjayareadymix.com/p/jasa-rabat-beton.html": "Jasa Rabat Beton",
  "https://www.betonjayareadymix.com/p/jasa-gelar-beton.html": "Jasa Gelar Beton",
  "https://www.betonjayareadymix.com/p/jasa-cor-ring-balok.html": "Jasa Cor Ring Balok",
  "https://www.betonjayareadymix.com/p/jasa-sloof-beton.html": "Jasa Sloof Beton",
  "https://www.betonjayareadymix.com/p/jasa-pengecoran-lantai-dak.html": "Jasa Pengecoran Lantai Dak",
  "https://www.betonjayareadymix.com/p/jasa-pengecoran-lantai-gudang.html": "Jasa Pengecoran Lantai Gudang"
};
// ═════════════════════════════════════════════════════════════════════
// 📂 PARENT: jasa-pengecoran-beton (MP) ➔ CHILD: Sub-variant
// ═════════════════════════════════════════════════════════════════════
const urlMappingJasaPengecoranBetonFromMoneyPageSubVariant = {
  "https://www.betonjayareadymix.com/p/jasa-cor-beton-ready-mix.html": "Jasa Cor Beton Ready Mix"
};
const urlMappingJasaKonstruksiStrukturFromMoneyMasterVariant = {
  "https://www.betonjayareadymix.com/p/jasa-bekisting-rumah.html": "Jasa Bekisting Rumah",
  "https://www.betonjayareadymix.com/p/jasa-bekisting-sloof-per-m2.html": "Jasa Bekisting Sloof per m2"
};
// ═════════════════════════════════════════════════════════════════════
// 📂 PARENT: jasa-konstruksi-struktur (MM) ➔ CHILD: Sub-variant
// (Modular/Precast tidak punya parent MP fisik, langsung di bawah MM)
// ═════════════════════════════════════════════════════════════════════
const urlMappingJasaKonstruksiStrukturFromMoneyMasterSubVariant = {
  "https://www.betonjayareadymix.com/p/jasa-tangga-beton-precast.html": "Jasa Tangga Beton Precast",
  "https://www.betonjayareadymix.com/p/jasa-toilet-modular-prefab.html": "Jasa Toilet Modular Prefab",
  "https://www.betonjayareadymix.com/p/jasa-rumah-modular-prefab.html": "Jasa Rumah Modular Prefab"
};


// ============================================================
// 📁 JASA STRUKTUR KHUSUS (MONEY_MASTER)
// ============================================================
const urlMappingJasaStrukturKhususFromMoneyMasterMoneyMaster1 = {
    "https://www.betonjayareadymix.com/p/jasa-kolam-renang.html": "Jasa Kolam Renang",
    "https://www.betonjayareadymix.com/p/jasa-kolam-ikan.html": "Jasa Kolam Ikan",
    "https://www.betonjayareadymix.com/p/jasa-septic-tank.html": "Jasa Septic Tank",
    "https://www.betonjayareadymix.com/p/jasa-tangki-air.html": "Jasa Tangki Air",
    "https://www.betonjayareadymix.com/p/jasa-bak-penampungan.html": "Jasa Bak Penampungan",
    "https://www.betonjayareadymix.com/p/jasa-menara-air.html": "Jasa Menara Air"
};

// ============================================================
// 📁 JASA KOLAM RENANG (MONEY_PAGE)
// ============================================================
const urlMappingJasaKolamRenangFromMoneyMaster1MoneyPage = {
    "https://www.betonjayareadymix.com/p/jasa-pembuatan-kolam-renang.html": "Jasa Pembuatan Kolam Renang",
    "https://www.betonjayareadymix.com/p/jasa-renovasi-kolam-renang.html": "Jasa Renovasi Kolam Renang",
    "https://www.betonjayareadymix.com/p/jasa-perawatan-kolam-renang.html": "Jasa Perawatan Kolam Renang",
    "https://www.betonjayareadymix.com/p/kontraktor-kolam-renang.html": "Kontraktor Kolam Renang"
};

// ============================================================
// 📁 JASA KOLAM IKAN (MONEY_PAGE)
// ============================================================
const urlMappingJasaKolamIkanFromMoneyMaster1MoneyPage = {
    "https://www.betonjayareadymix.com/p/jasa-pembuatan-kolam-ikan-koi.html": "Jasa Pembuatan Kolam Ikan Koi"
};

// ============================================================
// 📁 JASA SEPTIC TANK (MONEY_PAGE)
// ============================================================
const urlMappingJasaSepticTankFromMoneyMaster1MoneyPage = {
    "https://www.betonjayareadymix.com/p/jasa-pembuatan-septic-tank.html": "Jasa Pembuatan Septic Tank",
    "https://www.betonjayareadymix.com/p/jasa-perbaikan-septic-tank.html": "Jasa Perbaikan Septic Tank",
    "https://www.betonjayareadymix.com/p/jasa-sedot-septic-tank.html": "Jasa Sedot Septic Tank"
};

// ============================================================
// 📁 JASA PEMBUATAN SEPTIC TANK (MONEY_PAGE)
// ============================================================
const urlMappingJasaPembuatanSepticTankFromMoneyPageMoneyPage1 = {
    "https://www.betonjayareadymix.com/p/harga-jasa-pembuatan-septic-tank.html": "Harga Jasa Pembuatan Septic Tank",
    "https://www.betonjayareadymix.com/p/jasa-pembuatan-septic-tank-beton.html": "Jasa Pembuatan Septic Tank Beton",
    "https://www.betonjayareadymix.com/p/jasa-pembuatan-septic-tank-biofilter.html": "Jasa Pembuatan Septic Tank Biofilter"
};

// ============================================================
// 📁 JASA TANGKI AIR (MONEY_PAGE)
// ============================================================
const urlMappingJasaTangkiAirFromMoneyMaster1MoneyPage = {
    "https://www.betonjayareadymix.com/p/jasa-pembuatan-tangki-air.html": "Jasa Pembuatan Tangki Air"
};

// ============================================================
// 📁 JASA BAK PENAMPUNGAN (MONEY_PAGE)
// ============================================================
const urlMappingJasaBakPenampunganFromMoneyMaster1MoneyPage = {
    "https://www.betonjayareadymix.com/p/jasa-pembuatan-bak-penampungan.html": "Jasa Pembuatan Bak Penampungan"
};

// ============================================================
// 📁 JASA MENARA AIR (MONEY_PAGE)
// ============================================================
const urlMappingJasaMenaraAirFromMoneyMaster1MoneyPage = {
    "https://www.betonjayareadymix.com/p/jasa-konstruksi-menara-air.html": "Jasa Konstruksi Menara Air"
};

// ============================================================
// 📁 JASA PEMBUATAN LAPANGAN OLAHRAGA (MONEY_PAGE)
// ============================================================
const urlMappingJasaPembuatanLapanganOlahragaFromMoneyPageMoneyPage1 = {
    "https://www.betonjayareadymix.com/p/jasa-pembuatan-lapangan-futsal.html": "Jasa Pembuatan Lapangan Futsal",
    "https://www.betonjayareadymix.com/p/jasa-pembuatan-lapangan-basket.html": "Jasa Pembuatan Lapangan Basket",
    "https://www.betonjayareadymix.com/p/jasa-pembuatan-lapangan-sepakbola.html": "Jasa Pembuatan Lapangan Sepakbola",
    "https://www.betonjayareadymix.com/p/jasa-pembuatan-lapangan-voli.html": "Jasa Pembuatan Lapangan Voli",
    "https://www.betonjayareadymix.com/p/jasa-pembuatan-lapangan-tenis.html": "Jasa Pembuatan Lapangan Tenis",
    "https://www.betonjayareadymix.com/p/jasa-pembuatan-lapangan-badminton.html": "Jasa Pembuatan Lapangan Badminton",
    "https://www.betonjayareadymix.com/p/jasa-pembuatan-lapangan-serbaguna.html": "Jasa Pembuatan Lapangan Serbaguna"
};

// ═══════════════════════════════════════════════════════════
// [BAGIAN 2] EARLY EXIT — PENDEKATAN C (Guard Flag)
// ═══════════════════════════════════════════════════════════

(function() {
    'use strict';

    var cleanUrl = window.location.href.split(/[?#]/)[0];
    console.log('[jasa-konstruksi-struktur] 🔍 Check URL: ' + cleanUrl);

    // Kumpulkan SEMUA mapping ke array
    var ALL_MAPPINGS = [
        urlMappingJasaKonstruksiBangunanFromMoneyMasterMoneyPage,
        urlMappingJasaPembuatanRumahFromMoneyPageVariant,
        urlMappingJasaPembuatanApartemenFromMoneyPageVariant,
        urlMappingJasaPembuatanHotelFromMoneyPageVariant,
        urlMappingJasaPembuatanSekolahFromMoneyPageVariant,
        urlMappingJasaPembuatanGudangFromMoneyPageVariant,
        urlMappingJasaKonstruksiGudangLogistikFromVariantSubVariant,
        urlMappingJasaPembuatanFurnitureFromMoneyPageVariant,
        urlMappingJasaPembuatanGedungFromMoneyPageVariant,
        urlMappingJasaPembuatanPabrikFromMoneyPageVariant,
        urlMappingJasaKonstruksiBangunanFromMoneyMastrVariant,
        
        urlMappingJasaKonstruksiStrukturFromMoneyMasterMoneyPage,
        urlMappingJasaKonstruksiBajaFromMoneyPageVariant,
        urlMappingJasaKonstruksiBajaRinganFromVariantSubVariant,
        urlMappingJasaPasangTowerFromMoneyPageVariant,
        urlMappingJasaPasangBajaRinganFromMoneyPageVariant,
        urlMappingJasaPengecoranBetonFromMoneyPageVariant,
        urlMappingJasaPengecoranBetonFromMoneyPageSubVariant,

        urlMappingJasaKonstruksiStrukturFromMoneyMasterVariant,
        urlMappingJasaKonstruksiStrukturFromMoneyMasterSubVariant,
        urlMappingJasaStrukturKhususFromMoneyMasterMoneyMaster1,
        urlMappingJasaKolamRenangFromMoneyMaster1MoneyPage,
        urlMappingJasaKolamIkanFromMoneyMaster1MoneyPage,
        urlMappingJasaSepticTankFromMoneyMaster1MoneyPage,
        urlMappingJasaPembuatanSepticTankFromMoneyPageMoneyPage1,
        urlMappingJasaTangkiAirFromMoneyMaster1MoneyPage,
        urlMappingJasaBakPenampunganFromMoneyMaster1MoneyPage,
        urlMappingJasaMenaraAirFromMoneyMaster1MoneyPage,
        urlMappingJasaPembuatanLapanganOlahragaFromMoneyPageMoneyPage1
    ];

    // Loop + foundIndex + break (early exit)
    var foundIndex = -1;
    var foundMappingName = '';

    for (var i = 0; i < ALL_MAPPINGS.length; i++) {
        if (!ALL_MAPPINGS[i] || typeof ALL_MAPPINGS[i] !== 'object') {
            console.warn('[jasa-konstruksi-struktur] ⚠️ Mapping #' + (i + 1) + ' bukan object — skip');
            continue;
        }
        if (ALL_MAPPINGS[i][cleanUrl]) {
            foundIndex = i;
            foundMappingName = ALL_MAPPINGS[i][cleanUrl];
            break;
        }
    }

    if (foundIndex === -1) {
        console.log('[jasa-konstruksi-struktur] ⏭️ SKIP — URL tidak cocok di semua cluster');
        window.__jasaKonsStrukturActive = false;
        return;
    }

    // ✅ Cocok — set flag + simpan info untuk debug
    window.__jasaKonsStrukturActive = true;
    window.__jasaKonsStrukturMatchIndex = foundIndex;
    window.__jasaKonsStrukturMatchMappingName = foundMappingName;

    console.log(
        '[jasa-konstruksi-struktur] ✅ Match di mapping #' + (foundIndex + 1) +
        ' — Label: "' + foundMappingName + '"' +
        ' — EXECUTE flag set'
    );
})();

// ═══════════════════════════════════════════════════════════
// [BAGIAN 3] FUNGSI UTAMA — Pembuka
// ═══════════════════════════════════════════════════════════

function initJasaKonsStrukturPillar() {
    // ⚡ Guard flag
    if (!window.__jasaKonsStrukturActive) {
        console.log('[jasa-konstruksi-struktur] ⏭️ Execute SKIP — URL tidak cocok');
        return;
    }

    console.log('[jasa-konstruksi-struktur] 🚀 Execute — URL cocok');

    var cleanUrlJasaJasaKonsStruktur = window.location.href.split(/[?#]/)[0];

    // ✅ Guard elemen DOM
    var JasaKonsStruktur = document.getElementById("JasaKonsStruktur");
    if (!JasaKonsStruktur) {
        console.error("[jasa-konstruksi-struktur] ❌ elemen Id JasaKonsStruktur kondisi terhapus");
        return;
    }

    // ═══════════════════════════════════════════════════════
    // [BLOK 1] JASA KONSTRUKSI BANGUNAN (MONEY_MASTER)
    // ═══════════════════════════════════════════════════════
    if (urlMappingJasaKonstruksiBangunanFromMoneyMasterMoneyPage[cleanUrlJasaJasaKonsStruktur]) {
        generateBreadcrumbShared(
            urlMappingJasaKonstruksiBangunanFromMoneyMasterMoneyPage,
            cleanUrlJasaJasaKonsStruktur,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Konstruksi Bangunan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-konstruksi-bangunan.html' },
                { name: 'Perbandingan Jasa Konstruksi Bangunan', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-konstruksi-bangunan.html' },
                { name: 'Jasa Konstruksi Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi-bangunan.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }
    if (urlMappingJasaPembuatanRumahFromMoneyPageVariant[cleanUrlJasaJasaKonsStruktur]) {
        generateBreadcrumbShared(
            urlMappingJasaPembuatanRumahFromMoneyPageVariant,
            cleanUrlJasaJasaKonsStruktur,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Konstruksi Bangunan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-konstruksi-bangunan.html' },
                { name: 'Perbandingan Jasa Konstruksi Bangunan', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-konstruksi-bangunan.html' },
                { name: 'Jasa Konstruksi Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi-bangunan.html' },
                { name: 'Jasa Pembuatan Rumah', url: 'https://www.betonjayareadymix.com/p/jasa-pembuatan-rumah.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }
    if (urlMappingJasaPembuatanApartemenFromMoneyPageVariant[cleanUrlJasaJasaKonsStruktur]) {
        generateBreadcrumbShared(
            urlMappingJasaPembuatanApartemenFromMoneyPageVariant,
            cleanUrlJasaJasaKonsStruktur,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Konstruksi Bangunan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-konstruksi-bangunan.html' },
                { name: 'Perbandingan Jasa Konstruksi Bangunan', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-konstruksi-bangunan.html' },
                { name: 'Jasa Konstruksi Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi-bangunan.html' },
                { name: 'Jasa Pembuatan Apartemen', url: 'https://www.betonjayareadymix.com/p/jasa-pembuatan-apartemen.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }
   if (urlMappingJasaPembuatanHotelFromMoneyPageVariant[cleanUrlJasaJasaKonsStruktur]) {
        generateBreadcrumbShared(
            urlMappingJasaPembuatanHotelFromMoneyPageVariant,
            cleanUrlJasaJasaKonsStruktur,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Konstruksi Bangunan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-konstruksi-bangunan.html' },
                { name: 'Perbandingan Jasa Konstruksi Bangunan', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-konstruksi-bangunan.html' },
                { name: 'Jasa Konstruksi Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi-bangunan.html' },
                { name: 'Jasa Pembuatan Hotel', url: 'https://www.betonjayareadymix.com/p/jasa-pembuatan-hotel.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }
   if (urlMappingJasaPembuatanSekolahFromMoneyPageVariant[cleanUrlJasaJasaKonsStruktur]) {
        generateBreadcrumbShared(
            urlMappingJasaPembuatanSekolahFromMoneyPageVariant,
            cleanUrlJasaJasaKonsStruktur,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Konstruksi Bangunan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-konstruksi-bangunan.html' },
                { name: 'Perbandingan Jasa Konstruksi Bangunan', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-konstruksi-bangunan.html' },
                { name: 'Jasa Konstruksi Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi-bangunan.html' },
                { name: 'Jasa Pembuatan Sekolah', url: 'https://www.betonjayareadymix.com/p/jasa-pembuatan-sekolah.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }
    if (urlMappingJasaPembuatanGudangFromMoneyPageVariant[cleanUrlJasaJasaKonsStruktur]) {
        generateBreadcrumbShared(
            urlMappingJasaPembuatanGudangFromMoneyPageVariant,
            cleanUrlJasaJasaKonsStruktur,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Konstruksi Bangunan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-konstruksi-bangunan.html' },
                { name: 'Perbandingan Jasa Konstruksi Bangunan', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-konstruksi-bangunan.html' },
                { name: 'Jasa Konstruksi Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi-bangunan.html' },
                { name: 'Jasa Pembuatan Gudang', url: 'https://www.betonjayareadymix.com/p/jasa-pembuatan-gudang.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }
   if (urlMappingJasaKonstruksiGudangLogistikFromVariantSubVariant[cleanUrlJasaJasaKonsStruktur]) {
        generateBreadcrumbShared(
            urlMappingJasaKonstruksiGudangLogistikFromVariantSubVariant,
            cleanUrlJasaJasaKonsStruktur,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Konstruksi Bangunan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-konstruksi-bangunan.html' },
                { name: 'Perbandingan Jasa Konstruksi Bangunan', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-konstruksi-bangunan.html' },
                { name: 'Jasa Konstruksi Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi-bangunan.html' },
                { name: 'Jasa Pembuatan Gudang', url: 'https://www.betonjayareadymix.com/p/jasa-pembuatan-gudang.html' },
                { name: 'Jasa Pembuatan Gudang Logistik', url: 'https://www.betonjayareadymix.com/p/jasa-pembuatan-gudang-logistik.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }
   if (urlMappingJasaPembuatanFurnitureFromMoneyPageVariant[cleanUrlJasaJasaKonsStruktur]) {
        generateBreadcrumbShared(
            urlMappingJasaPembuatanFurnitureFromMoneyPageVariant,
            cleanUrlJasaJasaKonsStruktur,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Konstruksi Bangunan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-konstruksi-bangunan.html' },
                { name: 'Perbandingan Jasa Konstruksi Bangunan', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-konstruksi-bangunan.html' },
                { name: 'Jasa Konstruksi Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi-bangunan.html' },
                { name: 'Jasa Pembuatan Furniture', url: 'https://www.betonjayareadymix.com/p/jasa-pembuatan-furniture.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }
    if (urlMappingJasaPembuatanGedungFromMoneyPageVariant[cleanUrlJasaJasaKonsStruktur]) {
        generateBreadcrumbShared(
            urlMappingJasaPembuatanGedungFromMoneyPageVariant,
            cleanUrlJasaJasaKonsStruktur,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Konstruksi Bangunan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-konstruksi-bangunan.html' },
                { name: 'Perbandingan Jasa Konstruksi Bangunan', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-konstruksi-bangunan.html' },
                { name: 'Jasa Konstruksi Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi-bangunan.html' },
                { name: 'Jasa Pembuatan Gedung', url: 'https://www.betonjayareadymix.com/p/jasa-pembuatan-gedung.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }
    if (urlMappingJasaPembuatanPabrikFromMoneyPageVariant[cleanUrlJasaJasaKonsStruktur]) {
        generateBreadcrumbShared(
            urlMappingJasaPembuatanPabrikFromMoneyPageVariant,
            cleanUrlJasaJasaKonsStruktur,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Konstruksi Bangunan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-konstruksi-bangunan.html' },
                { name: 'Perbandingan Jasa Konstruksi Bangunan', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-konstruksi-bangunan.html' },
                { name: 'Jasa Konstruksi Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi-bangunan.html' },
                { name: 'Jasa Pembuatan Pabrik', url: 'https://www.betonjayareadymix.com/p/jasa-pembuatan-pabrik.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }
    
    if (urlMappingJasaKonstruksiBangunanFromMoneyMastrVariant[cleanUrlJasaJasaKonsStruktur]) {
        generateBreadcrumbShared(
            urlMappingJasaKonstruksiBangunanFromMoneyMastrVariant,
            cleanUrlJasaJasaKonsStruktur,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Konstruksi Bangunan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-konstruksi-bangunan.html' },
                { name: 'Perbandingan Jasa Konstruksi Bangunan', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-konstruksi-bangunan.html' },
                { name: 'Jasa Konstruksi Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi-bangunan.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }
    
    // ═══════════════════════════════════════════════════════
    // [BLOK 2] JASA KONSTRUKSI STRUKTUR (MONEY_MASTER)
    // ═══════════════════════════════════════════════════════
    if (urlMappingJasaKonstruksiStrukturFromMoneyMasterMoneyPage[cleanUrlJasaJasaKonsStruktur]) {
        generateBreadcrumbShared(
            urlMappingJasaKonstruksiStrukturFromMoneyMasterMoneyPage,
            cleanUrlJasaJasaKonsStruktur,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Konstruksi Struktur', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-konstruksi-struktur.html' },
                { name: 'Perbandingan Jasa Konstruksi Struktur', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-konstruksi-struktur.html' },
                { name: 'Jasa Konstruksi Struktur', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi-struktur.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }
 
   if (urlMappingJasaKonstruksiBajaFromMoneyPageVariant[cleanUrlJasaJasaKonsStruktur]) {
        generateBreadcrumbShared(
            urlMappingJasaKonstruksiBajaFromMoneyPageVariant,
            cleanUrlJasaJasaKonsStruktur,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Konstruksi Struktur', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-konstruksi-struktur.html' },
                { name: 'Perbandingan Jasa Konstruksi Struktur', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-konstruksi-struktur.html' },
                { name: 'Jasa Konstruksi Struktur', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi-struktur.html' },
                { name: 'Jasa Konstruksi Baja', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi-baja.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }
    if (urlMappingJasaKonstruksiBajaRinganFromVariantSubVariant[cleanUrlJasaJasaKonsStruktur]) {
        generateBreadcrumbShared(
            urlMappingJasaKonstruksiBajaRinganFromVariantSubVariant,
            cleanUrlJasaJasaKonsStruktur,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Konstruksi Struktur', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-konstruksi-struktur.html' },
                { name: 'Perbandingan Jasa Konstruksi Struktur', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-konstruksi-struktur.html' },
                { name: 'Jasa Konstruksi Struktur', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi-struktur.html' },
                { name: 'Jasa Konstruksi Baja', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi-baja.html' },
                { name: 'Jasa Konstruksi Baja Ringan', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi-baja-ringan.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }
    
  if (urlMappingJasaPasangTowerFromMoneyPageVariant[cleanUrlJasaJasaKonsStruktur]) {
        generateBreadcrumbShared(
            urlMappingJasaPasangTowerFromMoneyPageVariant,
            cleanUrlJasaJasaKonsStruktur,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Konstruksi Struktur', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-konstruksi-struktur.html' },
                { name: 'Perbandingan Jasa Konstruksi Struktur', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-konstruksi-struktur.html' },
                { name: 'Jasa Konstruksi Struktur', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi-struktur.html' },
                { name: 'Jasa Pasang Tower', url: 'https://www.betonjayareadymix.com/p/jasa-pasang-tower.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }  
   if (urlMappingJasaPasangBajaRinganFromMoneyPageVariant[cleanUrlJasaJasaKonsStruktur]) {
        generateBreadcrumbShared(
            urlMappingJasaPasangBajaRinganFromMoneyPageVariant,
            cleanUrlJasaJasaKonsStruktur,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Konstruksi Struktur', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-konstruksi-struktur.html' },
                { name: 'Perbandingan Jasa Konstruksi Struktur', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-konstruksi-struktur.html' },
                { name: 'Jasa Konstruksi Struktur', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi-struktur.html' },
                { name: 'Jasa Pasang Baja Ringan', url: 'https://www.betonjayareadymix.com/p/jasa-pasang-baja-ringan.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }

   
    if (urlMappingJasaPengecoranBetonFromMoneyPageVariant[cleanUrlJasaJasaKonsStruktur]) {
        generateBreadcrumbShared(
            urlMappingJasaPengecoranBetonFromMoneyPageVariant,
            cleanUrlJasaJasaKonsStruktur,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Konstruksi Struktur', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-konstruksi-struktur.html' },
                { name: 'Perbandingan Jasa Konstruksi Struktur', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-konstruksi-struktur.html' },
                { name: 'Jasa Konstruksi Struktur', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi-struktur.html' },
                { name: 'Jasa Pengecoran Beton', url: 'https://www.betonjayareadymix.com/p/jasa-pengecoran-beton.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }
    if (urlMappingJasaPengecoranBetonFromMoneyPageSubVariant[cleanUrlJasaJasaKonsStruktur]) {
        generateBreadcrumbShared(
            urlMappingJasaPengecoranBetonFromMoneyPageSubVariant,
            cleanUrlJasaJasaKonsStruktur,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Konstruksi Struktur', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-konstruksi-struktur.html' },
                { name: 'Perbandingan Jasa Konstruksi Struktur', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-konstruksi-struktur.html' },
                { name: 'Jasa Konstruksi Struktur', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi-struktur.html' },
                { name: 'Jasa Pengecoran Beton', url: 'https://www.betonjayareadymix.com/p/jasa-pengecoran-beton.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }
   
     if (urlMappingJasaKonstruksiStrukturFromMoneyMasterVariant[cleanUrlJasaJasaKonsStruktur]) {
        generateBreadcrumbShared(
            urlMappingJasaKonstruksiStrukturFromMoneyMasterVariant,
            cleanUrlJasaJasaKonsStruktur,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Konstruksi Struktur', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-konstruksi-struktur.html' },
                { name: 'Perbandingan Jasa Konstruksi Struktur', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-konstruksi-struktur.html' },
                { name: 'Jasa Konstruksi Struktur', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi-struktur.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }
    if (urlMappingJasaKonstruksiStrukturFromMoneyMasterSubVariant[cleanUrlJasaJasaKonsStruktur]) {
        generateBreadcrumbShared(
            urlMappingJasaKonstruksiStrukturFromMoneyMasterSubVariant,
            cleanUrlJasaJasaKonsStruktur,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Konstruksi Struktur', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-konstruksi-struktur.html' },
                { name: 'Perbandingan Jasa Konstruksi Struktur', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-konstruksi-struktur.html' },
                { name: 'Jasa Konstruksi Struktur', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi-struktur.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }

    // ═══════════════════════════════════════════════════════
    // [BLOK 7] JASA STRUKTUR KHUSUS (MONEY_MASTER)
    // ═══════════════════════════════════════════════════════
    if (urlMappingJasaStrukturKhususFromMoneyMasterMoneyMaster1[cleanUrlJasaJasaKonsStruktur]) {
        generateBreadcrumbShared(
            urlMappingJasaStrukturKhususFromMoneyMasterMoneyMaster1,
            cleanUrlJasaJasaKonsStruktur,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Struktur Khusus', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-struktur-khusus.html' },
                { name: 'Perbandingan Jasa Struktur Khusus', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-struktur-khusus.html' },
                { name: 'Jasa Struktur Khusus', url: 'https://www.betonjayareadymix.com/p/jasa-struktur-khusus.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }

    // ═══════════════════════════════════════════════════════
    // [BLOK 8] JASA KOLAM RENANG (MONEY_PAGE)
    // ═══════════════════════════════════════════════════════
    if (urlMappingJasaKolamRenangFromMoneyMaster1MoneyPage[cleanUrlJasaJasaKonsStruktur]) {
        generateBreadcrumbShared(
            urlMappingJasaKolamRenangFromMoneyMaster1MoneyPage,
            cleanUrlJasaJasaKonsStruktur,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Struktur Khusus', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-struktur-khusus.html' },
                { name: 'Perbandingan Jasa Struktur Khusus', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-struktur-khusus.html' },
                { name: 'Jasa Struktur Khusus', url: 'https://www.betonjayareadymix.com/p/jasa-struktur-khusus.html' },
                { name: 'Jasa Kolam Renang', url: 'https://www.betonjayareadymix.com/p/jasa-kolam-renang.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }

    // ═══════════════════════════════════════════════════════
    // [BLOK 9] JASA KOLAM IKAN (MONEY_PAGE)
    // ═══════════════════════════════════════════════════════
    if (urlMappingJasaKolamIkanFromMoneyMaster1MoneyPage[cleanUrlJasaJasaKonsStruktur]) {
        generateBreadcrumbShared(
            urlMappingJasaKolamIkanFromMoneyMaster1MoneyPage,
            cleanUrlJasaJasaKonsStruktur,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Struktur Khusus', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-struktur-khusus.html' },
                { name: 'Perbandingan Jasa Struktur Khusus', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-struktur-khusus.html' },
                { name: 'Jasa Struktur Khusus', url: 'https://www.betonjayareadymix.com/p/jasa-struktur-khusus.html' },
                { name: 'Jasa Kolam Ikan', url: 'https://www.betonjayareadymix.com/p/jasa-kolam-ikan.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }

    // ═══════════════════════════════════════════════════════
    // [BLOK 10] JASA SEPTIC TANK (MONEY_PAGE)
    // ═══════════════════════════════════════════════════════
    if (urlMappingJasaSepticTankFromMoneyMaster1MoneyPage[cleanUrlJasaJasaKonsStruktur]) {
        generateBreadcrumbShared(
            urlMappingJasaSepticTankFromMoneyMaster1MoneyPage,
            cleanUrlJasaJasaKonsStruktur,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Struktur Khusus', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-struktur-khusus.html' },
                { name: 'Perbandingan Jasa Struktur Khusus', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-struktur-khusus.html' },
                { name: 'Jasa Struktur Khusus', url: 'https://www.betonjayareadymix.com/p/jasa-struktur-khusus.html' },
                { name: 'Jasa Septic Tank', url: 'https://www.betonjayareadymix.com/p/jasa-septic-tank.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }

    // ═══════════════════════════════════════════════════════
    // [BLOK 11] JASA PEMBUATAN SEPTIC TANK (MONEY_PAGE)
    // ═══════════════════════════════════════════════════════
    if (urlMappingJasaPembuatanSepticTankFromMoneyPageMoneyPage1[cleanUrlJasaJasaKonsStruktur]) {
        generateBreadcrumbShared(
            urlMappingJasaPembuatanSepticTankFromMoneyPageMoneyPage1,
            cleanUrlJasaJasaKonsStruktur,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Struktur Khusus', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-struktur-khusus.html' },
                { name: 'Perbandingan Jasa Struktur Khusus', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-struktur-khusus.html' },
                { name: 'Jasa Struktur Khusus', url: 'https://www.betonjayareadymix.com/p/jasa-struktur-khusus.html' },
                { name: 'Jasa Septic Tank', url: 'https://www.betonjayareadymix.com/p/jasa-septic-tank.html' },
                { name: 'Jasa Pembuatan Septic Tank', url: 'https://www.betonjayareadymix.com/p/jasa-pembuatan-septic-tank.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }

    // ═══════════════════════════════════════════════════════
    // [BLOK 12] JASA TANGKI AIR (MONEY_PAGE)
    // ═══════════════════════════════════════════════════════
    if (urlMappingJasaTangkiAirFromMoneyMaster1MoneyPage[cleanUrlJasaJasaKonsStruktur]) {
        generateBreadcrumbShared(
            urlMappingJasaTangkiAirFromMoneyMaster1MoneyPage,
            cleanUrlJasaJasaKonsStruktur,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Struktur Khusus', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-struktur-khusus.html' },
                { name: 'Perbandingan Jasa Struktur Khusus', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-struktur-khusus.html' },
                { name: 'Jasa Struktur Khusus', url: 'https://www.betonjayareadymix.com/p/jasa-struktur-khusus.html' },
                { name: 'Jasa Tangki Air', url: 'https://www.betonjayareadymix.com/p/jasa-tangki-air.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }

    // ═══════════════════════════════════════════════════════
    // [BLOK 13] JASA BAK PENAMPUNGAN (MONEY_PAGE)
    // ═══════════════════════════════════════════════════════
    if (urlMappingJasaBakPenampunganFromMoneyMaster1MoneyPage[cleanUrlJasaJasaKonsStruktur]) {
        generateBreadcrumbShared(
            urlMappingJasaBakPenampunganFromMoneyMaster1MoneyPage,
            cleanUrlJasaJasaKonsStruktur,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Struktur Khusus', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-struktur-khusus.html' },
                { name: 'Perbandingan Jasa Struktur Khusus', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-struktur-khusus.html' },
                { name: 'Jasa Struktur Khusus', url: 'https://www.betonjayareadymix.com/p/jasa-struktur-khusus.html' },
                { name: 'Jasa Bak Penampungan', url: 'https://www.betonjayareadymix.com/p/jasa-bak-penampungan.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }

    // ═══════════════════════════════════════════════════════
    // [BLOK 14] JASA MENARA AIR (MONEY_PAGE)
    // ═══════════════════════════════════════════════════════
    if (urlMappingJasaMenaraAirFromMoneyMaster1MoneyPage[cleanUrlJasaJasaKonsStruktur]) {
        generateBreadcrumbShared(
            urlMappingJasaMenaraAirFromMoneyMaster1MoneyPage,
            cleanUrlJasaJasaKonsStruktur,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Struktur Khusus', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-struktur-khusus.html' },
                { name: 'Perbandingan Jasa Struktur Khusus', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-struktur-khusus.html' },
                { name: 'Jasa Struktur Khusus', url: 'https://www.betonjayareadymix.com/p/jasa-struktur-khusus.html' },
                { name: 'Jasa Menara Air', url: 'https://www.betonjayareadymix.com/p/jasa-menara-air.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }

    // ═══════════════════════════════════════════════════════
    // [BLOK 15] JASA PEMBUATAN LAPANGAN OLAHRAGA (MONEY_PAGE)
    // ═══════════════════════════════════════════════════════
    if (urlMappingJasaPembuatanLapanganOlahragaFromMoneyPageMoneyPage1[cleanUrlJasaJasaKonsStruktur]) {
        generateBreadcrumbShared(
            urlMappingJasaPembuatanLapanganOlahragaFromMoneyPageMoneyPage1,
            cleanUrlJasaJasaKonsStruktur,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Lapangan Olahraga', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-lapangan-olahraga.html' },
                { name: 'Perbandingan Jasa Lapangan Olahraga', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-lapangan-olahraga.html' },
                { name: 'Jasa Lapangan Olahraga', url: 'https://www.betonjayareadymix.com/p/jasa-lapangan-olahraga.html' },
                { name: 'Jasa Pembuatan Lapangan Olahraga', url: 'https://www.betonjayareadymix.com/p/jasa-pembuatan-lapangan-olahraga.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }
}

// ═══════════════════════════════════════════════════════════
// [BAGIAN 4] AUTO-INIT saat DOM siap
// ═══════════════════════════════════════════════════════════

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initJasaKonsStrukturPillar);
} else {
    initJasaKonsStrukturPillar();
}
