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
const urlMappingJasaDesainFromPillarSub2 = {
"https://www.betonjayareadymix.com/p/daftar-jasa-desain.html": "Daftar Jasa Desain"
};
const urlMappingJasaDesainFromSub2Sub1 = {
"https://www.betonjayareadymix.com/p/perbandingan-jasa-desain.html": "Perbandingan Jasa Desain"
};
const urlMappingJasaDesainFromSub1MoneyMaster = {
"https://www.betonjayareadymix.com/p/jasa-desain-interior.html": "Jasa Desain Interior",
"https://www.betonjayareadymix.com/p/jasa-desain-eksterior.html": "Jasa Desain Eksterior"

};
const urlMappingJasaDesainFromSub1MoneyPage = {
"https://www.betonjayareadymix.com/p/harga-jasa-desain.html": "Harga Jasa Desain"
};
const urlMappingJasaDesainInteriorFromMoneyMasterMoneyPage = {
"https://www.betonjayareadymix.com/p/jasa-desain-interior-rumah.html": "Jasa Desain Interior Rumah",
"https://www.betonjayareadymix.com/p/jasa-desain-interior-kantor.html": "Jasa Desain Interior Kantor",
"https://www.betonjayareadymix.com/p/jasa-desain-interior-apartemen.html": "Jasa Desain Interior Apartemen",
"https://www.betonjayareadymix.com/p/harga-jasa-desain-interior.html": "Harga Jasa Desain Interior"
};
const urlMappingJasaDesainEksteriorFromMoneyMasterMoneyPage = {
"https://www.betonjayareadymix.com/p/jasa-desain-fasad.html": "Jasa Desain Fasad",
"https://www.betonjayareadymix.com/p/jasa-desain-taman.html": "Jasa Desain Taman",
"https://www.betonjayareadymix.com/p/jasa-desain-lansekap.html": "Jasa Desain Lansekap",
"https://www.betonjayareadymix.com/p/harga-jasa-desain-eksterior.html": "Harga Jasa Desain Eksterior"
};

const urlMappingJasaKonsFromPillarSub2 = {
  // ============================================================
  // [SUB2] - SUB-PILLAR TIPE 2 (KATEGORI LAYANAN UTAMA)
  // 🧠 TYPE: SUB2 (Intent Informasional 60%)
  // Breadcrumb: Home > Jasa Konstruksi > [Nama Layanan] (3 level)
  // ============================================================
"https://www.betonjayareadymix.com/p/daftar-jasa-relief.html": "Daftar Jasa Relief",
"https://www.betonjayareadymix.com/p/daftar-jasa-profil-beton.html": "Daftar Jasa Profil Beton",
"https://www.betonjayareadymix.com/p/daftar-jasa-interior.html": "Daftar Jasa Interior",
"https://www.betonjayareadymix.com/p/daftar-jasa-eksterior.html": "Daftar Jasa Eksterior",
"https://www.betonjayareadymix.com/p/daftar-jasa-konsultan.html": "Daftar Jasa Konsultan",
"https://www.betonjayareadymix.com/p/daftar-jasa-kitchen-set.html": "Daftar Jasa Kitchen Set",  
"https://www.betonjayareadymix.com/p/daftar-jasa-pembuatan.html": "Daftar Jasa Pembuatan",  
"https://www.betonjayareadymix.com/p/daftar-jasa-pasang.html": "Daftar Jasa Pasang",  
  "https://www.betonjayareadymix.com/p/daftar-jasa-alat-konstruksi.html": "Daftar Jasa Alat Konstruksi",  
  "https://www.betonjayareadymix.com/p/daftar-jasa-konstruksi-bangunan.html": "Daftar Jasa Konstruksi Bangunan",  
  "https://www.betonjayareadymix.com/p/daftar-jasa-konstruksi-struktur.html": "Daftar Jasa Konstruksi Struktur",  
  "https://www.betonjayareadymix.com/p/daftar-jasa-struktur-khusus.html": "Daftar Jasa Struktur Khusus",  
  "https://www.betonjayareadymix.com/p/daftar-jasa-lapangan-olahraga.html": "Daftar Jasa Lapangan Olahraga",  
 // "https://www.betonjayareadymix.com/p/daftar-jasa-struktur-konstruksi.html": "Daftar Jasa Struktur Konstruksi",  
  "https://www.betonjayareadymix.com/p/daftar-jasa-pondasi.html": "Daftar Jasa Pondasi",  
  "https://www.betonjayareadymix.com/p/daftar-jasa-saluran-drainase.html": "Daftar Jasa Saluran & Drainase",  
  "https://www.betonjayareadymix.com/p/daftar-jasa-jalan-perkerasan.html": "Daftar Jasa Jalan & Perkerasan",  
  "https://www.betonjayareadymix.com/p/daftar-jasa-pematangan-lahan.html": "Daftar Jasa Pematangan Lahan",  
  "https://www.betonjayareadymix.com/p/daftar-jasa-uji-tanah.html": "Daftar Jasa Uji Tanah",  
  "https://www.betonjayareadymix.com/p/daftar-jasa-cutting-beton.html": "Daftar Jasa Cutting Beton",  
  "https://www.betonjayareadymix.com/p/daftar-jasa-bongkar-bangunan.html": "Daftar Jasa Bongkar Bangunan",  
  "https://www.betonjayareadymix.com/p/daftar-jasa-buang-puing.html": "Daftar Jasa Buang Puing",  
  "https://www.betonjayareadymix.com/p/daftar-jasa-pengeboran.html": "Daftar Jasa Pengeboran",  
  "https://www.betonjayareadymix.com/p/daftar-jasa-perkuatan-tanah.html": "Daftar Jasa Perkuatan Tanah",  
  "https://www.betonjayareadymix.com/p/daftar-jasa-pembatas-pengaman.html": "Daftar Jasa Pembatas Pengaman",  
  "https://www.betonjayareadymix.com/p/daftar-jasa-renovasi.html": "Daftar Jasa Renovasi",  
  "https://www.betonjayareadymix.com/p/daftar-jasa-finishing.html": "Daftar Jasa Finishing",  
  "https://www.betonjayareadymix.com/p/daftar-jasa-instalasi-listrik.html": "Daftar Jasa Instalasi Listrik",  
  "https://www.betonjayareadymix.com/p/daftar-jasa-perbaikan-bangunan.html": "Daftar Jasa Perbaikan Bangunan",  
  "https://www.betonjayareadymix.com/p/daftar-jasa-perbaikan-infrastruktur.html": "Daftar Jasa Perbaikan Infrastruktur"  

	// "https://www.betonjayareadymix.com/p/daftar-jasa-konstruksi-rumah.html": "Daftar Jasa Konstruksi Rumah",  
//  "https://www.betonjayareadymix.com/p/daftar-jasa-konstruksi-gedung.html": "Daftar Jasa Konstruksi Gedung",  
 // "https://www.betonjayareadymix.com/p/daftar-jasa-konstruksi-industri.html": "Daftar Jasa Konstruksi Industri",  

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
const urlMappingJasaReliefBridgeFromSub2Sub1 = {
  "https://www.betonjayareadymix.com/p/perbandingan-jasa-relief.html": "Perbandingan Jasa Relief" // (Tipe: Sub-Pillar Tipe 1)
};
const urlMappingJasaReliefBridgeFromSub1MoneyMaster = {
  "https://www.betonjayareadymix.com/p/jasa-relief.html": "Jasa Relief" 
};
const urlMappingJasaReliefFromMoneyMasterMoneyPage = {
  	 "https://www.betonjayareadymix.com/p/jasa-relief-dinding.html": "Jasa Relief Dinding",
  "https://www.betonjayareadymix.com/p/jasa-relief-kayu-custom.html": "Jasa Relief Kayu Custom",
  "https://www.betonjayareadymix.com/p/jasa-relief-beton-ekspos.html": "Jasa Relief Beton Ekspos",
   	"https://www.betonjayareadymix.com/p/jasa-relief-batu-alam.html": "Jasa Relief Batu Alam",
  "https://www.betonjayareadymix.com/p/harga-jasa-relief.html": "Harga Jasa Relief"
};
const urlMappingJasaReliefDindingFromMoneyPageMoneyPage1 = {
  "https://www.betonjayareadymix.com/p/jasa-pembuatan-relief-dinding.html": "Jasa Pembuatan Relief Dinding",
"https://www.betonjayareadymix.com/p/jasa-relief-dinding-3d.html": "Jasa Relief Dinding 3D",
	"https://www.betonjayareadymix.com/p/jasa-relief-dinding-interior.html": "Jasa Relief Dinding Interior",
    "https://www.betonjayareadymix.com/p/jasa-relief-batu-alam-interior.html": "Jasa Relief Batu Alam Interior",
  "https://www.betonjayareadymix.com/p/jasa-relief-dinding-eksterior.html": "Jasa Relief Dinding Eksterior"
};
const urlMappingJasaReliefBatuAlamFromMoneyPageMoneyPage1 = {
    "https://www.betonjayareadymix.com/p/jasa-relief-taman-batu-alam.html": "Jasa Relief Taman Batu Alam",
    "https://www.betonjayareadymix.com/p/jasa-relief-batu-alam-dinding.html": "Jasa Relief Batu Alam Dinding",
    "https://www.betonjayareadymix.com/p/jasa-relief-batu-alam-pilar.html": "Jasa Relief Batu Alam Pilar"
};

const urlMappingJasaProfilBetonBridgeFromSub2Sub1 = {
  "https://www.betonjayareadymix.com/p/perbandingan-jasa-profil-beton.html": "Perbandingan Jasa Profil Beton" // (Tipe: Sub-Pillar Tipe 1)
};
const urlMappingJasaProfilBetonFromSub1MoneyMaster = {
  "https://www.betonjayareadymix.com/p/jasa-profil-beton.html": "Jasa Profil Beton"  
};
const urlMappingJasaProfilBetonFromMoneyMasterMoneyPage = {
  "https://www.betonjayareadymix.com/p/jasa-profil-beton-bangunan.html": "Jasa Profil Beton Bangunan",
  "https://www.betonjayareadymix.com/p/jasa-profil-beton-eksterior.html": "Jasa Profil Beton Eksterior",
  "https://www.betonjayareadymix.com/p/jasa-profil-beton-interior.html": "Jasa Profil Beton Interior",
  "https://www.betonjayareadymix.com/p/harga-jasa-profil-beton.html": "Harga Jasa Profil Beton" 
};
const urlMappingJasaProfilBetonBangunanFromMoneyPageMoneyPage1 = {
  "https://www.betonjayareadymix.com/p/harga-jasa-profil-beton-bangunan.html": "Harga Jasa Profil Beton Bangunan",
  "https://www.betonjayareadymix.com/p/jasa-profil-beton-rumah.html": "Jasa Profil Beton Rumah",
  "https://www.betonjayareadymix.com/p/jasa-profil-beton-kantor.html": "Jasa Profil Beton Kantor"
	
};
const urlMappingJasaProfilBetonRumahFromMoneyPage1MoneyPage2 = {
 "https://www.betonjayareadymix.com/p/harga-jasa-profil-beton-rumah.html": "Harga Jasa Profil Beton Rumah"
};

const urlMappingJasaProfilBetonEksteriorFromMoneyPageMoneyPage1 = {
 "https://www.betonjayareadymix.com/p/jasa-profil-beton-fasad.html": "Jasa Profil Beton Fasad",
    "https://www.betonjayareadymix.com/p/jasa-profil-beton-lisplank.html": "Jasa Profil Beton Lisplank",
    "https://www.betonjayareadymix.com/p/jasa-profil-beton-pilar-eksterior.html": "Jasa Profil Beton Pilar Eksterior"
};
const urlMappingJasaProfilBetonInteriorFromMoneyPageMoneyPage1 = {
    "https://www.betonjayareadymix.com/p/jasa-profil-beton-pilar-interior.html": "Jasa Profil Beton Pilar Interior"
};
const urlMappingHargaJasaProfilBetonFromMoneyPageMoneyPage1 = {

};

const urlMappingJasaEksteriorBridgeFromSub2Sub1 = {
  "https://www.betonjayareadymix.com/p/perbandingan-jasa-eksterior.html": "Perbandingan Jasa Eksterior" // (Tipe: Sub-Pillar Tipe 1)
};
const urlMappingJasaEksteriorFromSub1MoneyMaster = {
  "https://www.betonjayareadymix.com/p/jasa-eksterior.html": "Jasa Eksterior"  
};
const urlMappingJasaInteriorBridgeFromSub2Sub1 = {
  "https://www.betonjayareadymix.com/p/perbandingan-jasa-interior.html": "Perbandingan Jasa Interior" // (Tipe: Sub-Pillar Tipe 1)
};
const urlMappingJasaInteriorFromSub1MoneyMaster = {
  "https://www.betonjayareadymix.com/p/jasa-interior.html": "Jasa Interior"  // TYPE: MoneyPage
};
const urlMappingJasaKonsultanBridgeFromSub2Sub1 = {
  "https://www.betonjayareadymix.com/p/perbandingan-jasa-konsultan.html": "Perbandingan Jasa Konsultan" // (Tipe: Sub-Pillar Tipe 1)
};
const urlMappingJasaKonsultanFromSub1MoneyMaster = {
  "https://www.betonjayareadymix.com/p/jasa-konsultan.html": "Jasa Konsultan" 
};
const urlMappingJasaKonsultanFromMoneyMasterMoneyPage = {
  "https://www.betonjayareadymix.com/p/harga-jasa-konsultan.html": "Harga Jasa Konsultan",
	  "https://www.betonjayareadymix.com/p/jasa-konsultan-bangunan.html": "Jasa Konsultan Bangunan", 
  "https://www.betonjayareadymix.com/p/jasa-konsultan-konstruksi.html": "Jasa Konsultan Konstruksi", 
  "https://www.betonjayareadymix.com/p/jasa-perencanaan-pembangunan.html": "Jasa Perencanaan Pembangunan",  
  "https://www.betonjayareadymix.com/p/jasa-perencanaan-konstruksi.html": "Jasa Perencanaan Konstruksi" 
};
const urlMappingHargaJasaKonsultanFromMoneyPageMoneyPage1 = {
  "https://www.betonjayareadymix.com/p/harga-jasa-konsultan-struktur.html": "Harga Jasa Konsultan Struktur",
  "https://www.betonjayareadymix.com/p/harga-jasa-konsultan-arsitektur.html": "Biaya Jasa Konsultan Arsitektur",
  "https://www.betonjayareadymix.com/p/harga-jasa-konsultan-manajemen.html": "Harga Jasa Konsultan Manajemen Konstruksi",
  "https://www.betonjayareadymix.com/p/harga-jasa-konsultan-geoteknik.html": "Biaya Jasa Konsultan Geoteknik"
};

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
  "https://www.betonjayareadymix.com/p/estimasi-biaya-jasa-alat-konstruksi.html": "Estimasi Biaya Jasa Alat Konstruksi"
};

const urlMappingJasaKonstruksiStrukturBridgeFromSub2Sub1 = {
   "https://www.betonjayareadymix.com/p/perbandingan-jasa-konstruksi-struktur.html": "Perbandingan Jasa Konstruksi Struktur"  // TYPE: SUB1
};
const urlMappingJasaKonstruksiStrukturFromSub1MoneyMaster = {
   "https://www.betonjayareadymix.com/p/jasa-konstruksi-struktur.html": "Jasa Konstruksi Struktur"  // TYPE: SUB1
};

const urlMappingJasaStrukturKhususBridgeFromSub2Sub1 = {
  "https://www.betonjayareadymix.com/p/perbandingan-jasa-struktur-khusus.html": "Perbandingan Jasa Struktur Khusus"  
};
const urlMappingJasaStrukturKhususFromSub1MoneyMaster = {
  "https://www.betonjayareadymix.com/p/jasa-struktur-khusus.html": "Jasa Struktur Khusus"  

};

const urlMappingJasaLapanganOlahragaBridgeFromSub2Sub1 = {
 "https://www.betonjayareadymix.com/p/perbandingan-jasa-lapangan-olahraga.html": "Perbandingan Jasa Lapangan Olahraga"  
};
const urlMappingJasaLapanganOlahragaFromSub1MoneyMaster = {
 "https://www.betonjayareadymix.com/p/jasa-lapangan-olahraga.html": "Jasa Lapangan Olahraga" 
};
const urlMappingJasaLapanganOlahragaFromMoneyMasterMoneyPage = {
 "https://www.betonjayareadymix.com/p/jasa-pembuatan-lapangan-olahraga.html": "Jasa Pembuatan Lapangan Olahraga",
 "https://www.betonjayareadymix.com/p/harga-jasa-pembuatan-lapangan-olahraga.html": "Harga Jasa Pembuatan Lapangan Olahraga",
 "https://www.betonjayareadymix.com/p/jasa-perbaikan-lapangan-olahraga.html": "Jasa Perbaikan Lapangan Olahraga",
 "https://www.betonjayareadymix.com/p/harga-jasa-perbaikan-lapangan-olahraga.html": "Harga Jasa Perbaikan Lapangan Olahraga"
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
     	"https://www.betonjayareadymix.com/p/jasa-cat.html": "Jasa Cat",
	"https://www.betonjayareadymix.com/p/jasa-finishing-dinding.html": "Jasa Finishing Dinding", 
	"https://www.betonjayareadymix.com/p/jasa-finishing-furniture.html": "Jasa Finishing Furniture", 
	//	"https://www.betonjayareadymix.com/p/jasa-finishing-cat.html": "Jasa Finishing Cat",
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
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-bangunan.html": "Jasa Perbaikan Bangunan"  

};
const urlMappingPerbaikanInfrastrukturBridgeFromSub2Sub1 = {
    "https://www.betonjayareadymix.com/p/perbandingan-perbaikan-infrastruktur.html": "Perbandingan Jasa Perbaikan Infrastruktur"  // TYPE: SUB1
};
const urlMappingJasaPerbaikanInfrastrukturFromSub1MoneyMaster = {
	"https://www.betonjayareadymix.com/p/jasa-perbaikan-infrastruktur.html": "Jasa Perbaikan Infrastruktur"  
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
  "https://www.betonjayareadymix.com/p/jasa-jalan-perkerasan.html": "Jasa Jalan & Perkerasan"  
};

const urlMappingJasaPondasiBridgeFromSub2Sub1 = {
  //"https://www.betonjayareadymix.com/p/panduan-perbaikan-infrastruktur.html": "Panduan Perbaikan Infrastruktur"  // TYPE: SUB1
  "https://www.betonjayareadymix.com/p/perbandingan-jasa-pondasi.html": "Perbandingan Jasa Pondasi"  // TYPE: SUB1
};
const urlMappingJasaPondasiFromSub1MoneyMaster = {
  "https://www.betonjayareadymix.com/p/jasa-pondasi.html": "Jasa Pondasi"  
};
const urlMappingJasaSaluranDrainaseBridgeFromSub2Sub1 = {
  //"https://www.betonjayareadymix.com/p/panduan-perbaikan-infrastruktur.html": "Panduan Perbaikan Infrastruktur"  // TYPE: SUB1
  "https://www.betonjayareadymix.com/p/perbandingan-jasa-saluran-drainase.html": "Perbandingan Jasa Saluran & Drainase"  // TYPE: SUB1
};
const urlMappingJasaSaluranDrainaseFromSub1MoneyMaster = {
  "https://www.betonjayareadymix.com/p/jasa-saluran-drainase.html": "Jasa Saluran & Drainase"  
};
const urlMappingJasaPematanganLahanBridgeFromSub2Sub1 = {
  //"https://www.betonjayareadymix.com/p/panduan-perbaikan-infrastruktur.html": "Panduan Perbaikan Infrastruktur"  // TYPE: SUB1
  "https://www.betonjayareadymix.com/p/perbandingan-jasa-pematangan-lahan.html": "Perbandingan Jasa Pematangan Lahan"  // TYPE: SUB1
};
const urlMappingJasaPematanganLahanFromSub1MoneyMaster = {
  "https://www.betonjayareadymix.com/p/jasa-pematangan-lahan.html": "Jasa Pematangan Lahan"  
};
const urlMappingJasaUjiTanahBridgeFromSub2Sub1 = {
  "https://www.betonjayareadymix.com/p/perbandingan-jasa-uji-tanah.html": "Perbandingan Jasa Jasa Uji Tanah"  // TYPE: SUB1
};
const urlMappingJasaUjiTanahFromSub1MoneyMaster = {
  "https://www.betonjayareadymix.com/p/jasa-uji-tanah.html": "Jasa Uji Tanah"  
};
const urlMappingJasaCuttingBetonBridgeFromSub2Sub1 = {
  "https://www.betonjayareadymix.com/p/perbandingan-jasa-cutting-beton.html": "Perbandingan Jasa Cutting Beton"  // TYPE: SUB1
};
const urlMappingJasaCuttingBetonFromSub1MoneyMaster = {
  "https://www.betonjayareadymix.com/p/jasa-cutting-beton.html": "Jasa Cutting Beton"  
};

const urlMappingJasaBongkarBangunanBridgeFromSub2Sub1 = {
 "https://www.betonjayareadymix.com/p/perbandingan-jasa-bongkar-bangunan.html": "Perbandingan Jasa Bongkar Bangunan"  // TYPE: SUB1
};
const urlMappingJasaBongkarBangunanFromSub1MoneyMaster = {
  "https://www.betonjayareadymix.com/p/jasa-bongkar-bangunan.html": "Jasa Bongkar Bangunan"  
};

const urlMappingJasaBuangPuingBridgeFromSub2Sub1 = {
  "https://www.betonjayareadymix.com/p/perbandingan-jasa-buang-puing.html": "Perbandingan Jasa Buang Puing"  // TYPE: SUB1
};
const urlMappingJasaBuangPuingFromSub1MoneyMaster = {
  "https://www.betonjayareadymix.com/p/jasa-buang-puing.html": "Jasa Buang Puing"  
};
const urlMappingJasaBuangPuingFromMoneyMasterMoneyPage = {
  "https://www.betonjayareadymix.com/p/harga-jasa-buang-puing.html": "Harga Jasa Buang Puing",
	"https://www.betonjayareadymix.com/p/jasa-buang-puing-pengurugan-tanah.": "Jasa Buang Puing Pengurugan Tanah",
	"https://www.betonjayareadymix.com/p/jasa-buang-puing-proyek-konstruksi.html": "Jasa Buang Puing Proyek Konstruksi",
	"https://www.betonjayareadymix.com/p/jasa-buang-puing-rumah-bangunan.html": "Jasa Buang Puing Rumah & Bangunan"
};
const urlMappingHargaJasaBuangPuingFromMoneyPageMoneyPage1 = {
    "https://www.betonjayareadymix.com/p/harga-jasa-buang-puing-per-rit.html": "Harga Jasa Buang Puing Per Rit"
};
const urlMappingJasaPengeboranBridgeFromSub2Sub1 = {
  "https://www.betonjayareadymix.com/p/perbandingan-jasa-pengeboran.html": "Perbandingan Jasa Pengeboran"  // TYPE: SUB1
};
const urlMappingJasaPengeboranFromSub1MoneyMaster = {
  "https://www.betonjayareadymix.com/p/jasa-pengeboran.html": "Jasa Pengeboran"  
};

const urlMappingJasaPerkuatanTanahBridgeFromSub2Sub1 = {
   "https://www.betonjayareadymix.com/p/perbandingan-jasa-perkuatan-tanah.html": "Perbandingan Jasa Perkuatan Tanah"  // TYPE: SUB1
};
const urlMappingJasaPerkuatanTanahFromSub1MoneyMaster = {
  "https://www.betonjayareadymix.com/p/jasa-perkuatan-tanah.html": "Jasa Perkuatan Tanah"  
};

const urlMappingJasaPembatasPengamanBridgeFromSub2Sub1 = {
  "https://www.betonjayareadymix.com/p/perbandingan-jasa-pembatas-pengaman.html": "Perbandingan Jasa Pembatas Pengaman"  // TYPE: SUB1
};
const urlMappingJasaPembatasPengamanFromSub1MoneyMaster = {
  "https://www.betonjayareadymix.com/p/jasa-pembatas-pengaman.html": "Jasa Pembatas Pengaman"  
};

const urlMappingJasaInstalasiListrikBridgeFromSub2Sub1 = {
   "https://www.betonjayareadymix.com/p/perbandingan-jasa-instalasi-listrik.html": "Perbandingan Jasa Instalasi Listrik"  // TYPE: SUB1
};
const urlMappingJasaInstalasiListrikFromSub1MoneyMaster = {
  "https://www.betonjayareadymix.com/p/jasa-instalasi-listrik.html": "Jasa Instalasi Listrik"  
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
  "https://www.betonjayareadymix.com/p/daftar-sewa-alat-proyek.html": "Daftar Sewa Alat Proyek",   
  "https://www.betonjayareadymix.com/p/daftar-sewa-alat-berat.html": "Daftar Sewa Alat Berat",   
  "https://www.betonjayareadymix.com/p/daftar-sewa-alat-ringan.html": "Daftar Sewa Alat Ringan",   
  "https://www.betonjayareadymix.com/p/daftar-sewa-alat-pendukung.html": "Daftar Sewa Alat Pendukung"   
};
const urlMappingSewaAlatProyekFromSub2Sub1 = {
  "https://www.betonjayareadymix.com/p/perbandingan-sewa-alat-proyek.html": "Perbandingan Sewa Alat Proyek"  // TYPE: SUB1 
};

const urlMappingSewaAlatProyekFromSub1MoneyMaster = {
  //"https://www.betonjayareadymix.com/p/harga-sewa-alat-proyek.html": "Harga Sewa Alat Proyek"  // TYPE: MoneyMaster
   "https://www.betonjayareadymix.com/p/sewa-alat-proyek.html": "Sewa Alat Proyek"  // TYPE: MoneyMaster
};

const urlMappingSewaAlatBeratFromSub2Sub1 = {
  "https://www.betonjayareadymix.com/p/perbandingan-sewa-alat-berat.html": "Perbandingan Sewa Alat Berat",  // TYPE: SUB1 
  "https://www.betonjayareadymix.com/p/perbandingan-sewa-excavator.html": "Perbandingan Sewa Excavator",  // TYPE: SUB1 
  "https://www.betonjayareadymix.com/p/perbandingan-sewa-bulldozer.html": "Perbandingan Sewa Bulldozer",  // TYPE: SUB1 
  "https://www.betonjayareadymix.com/p/perbandingan-sewa-crane.html": "Perbandingan Sewa Crane",  // TYPE: SUB1 
  "https://www.betonjayareadymix.com/p/perbandingan-sewa-conrete-paver.html": "Perbandingan Concrete Paver",  // TYPE: SUB1 
  "https://www.betonjayareadymix.com/p/perbandingan-sewa-forklift.html": "Perbandingan Sewa Forklift",  // TYPE: SUB1 
  "https://www.betonjayareadymix.com/p/perbandingan-sewa-wales-stoom.html": "Perbandingan Sewa Wales Stoom",  // TYPE: SUB1 
  "https://www.betonjayareadymix.com/p/perbandingan-sewa-wheel-loader.html": "Perbandingan Sewa Wheel Loader",  // TYPE: SUB1 
  "https://www.betonjayareadymix.com/p/perbandingan-sewa-backhoe-loader.html": "Perbandingan Sewa Backhoe Loader",  // TYPE: SUB1 
  "https://www.betonjayareadymix.com/p/perbandingan-sewa-alat-pancang.html": "Perbandingan Sewa Alat Pancang",  // TYPE: SUB1 
  "https://www.betonjayareadymix.com/p/perbandingan-sewa-trencher.html": "Perbandingan Sewa Trencher",  // TYPE: SUB1 
  "https://www.betonjayareadymix.com/p/perbandingan-sewa-vibro-roller.html": "Perbandingan Sewa Vibro Roller",  // TYPE: SUB1 
	
   "https://www.betonjayareadymix.com/p/durasi-sewa-alat-berat.html": "Durasi Sewa Alat Berat"  // TYPE: SUB1 pendukung
};
const urlMappingSewaAlatBeratFromSub1MoneyMaster = {
   "https://www.betonjayareadymix.com/p/sewa-alat-berat.html": "Sewa Alat Berat",  // TYPE: MoneyMaster 
  "https://www.betonjayareadymix.com/p/sewa-excavator.html": "Sewa Excavator",  // TYPE: MoneyMaster 
 // "https://www.betonjayareadymix.com/p/sewa-beko.html": "Sewa Beko",  // TYPE: MoneyMaster 
  "https://www.betonjayareadymix.com/p/sewa-forklift.html": "Sewa Forklift",  // TYPE: MoneyMaster 
  "https://www.betonjayareadymix.com/p/sewa-bulldozer.html": "Sewa Bulldozer",  // TYPE: MoneyMaster 
  "https://www.betonjayareadymix.com/p/sewa-vibro-roller.html": "Sewa Vibro Roller",  // TYPE: MoneyMaster 
  "https://www.betonjayareadymix.com/p/sewa-wales-stoom.html": "Sewa Wales Stoom",  // TYPE: MoneyMaster 
  "https://www.betonjayareadymix.com/p/sewa-crane.html": "Sewa Crane",  // TYPE: MoneyMaster 
  "https://www.betonjayareadymix.com/p/sewa-self-loader.html": "Sewa Self Loader",  // TYPE: MoneyMaster 
  "https://www.betonjayareadymix.com/p/sewa-wheel-loader.html": "Sewa Wheel Loader",  // TYPE: MoneyMaster 
  "https://www.betonjayareadymix.com/p/sewa-tandem-roller.html": "Sewa Tandem Roller",  // TYPE: MoneyMaster 
  "https://www.betonjayareadymix.com/p/sewa-backhoe-loader.html": "Sewa Backhoe Loader",  // TYPE: MoneyMaster 
  "https://www.betonjayareadymix.com/p/sewa-baby-roller.html": "Sewa Baby Roller",  // TYPE: MoneyMaster 
  "https://www.betonjayareadymix.com/p/sewa-motor-grader.html": "Sewa Motor Grader",  // TYPE: MoneyMaster 
  "https://www.betonjayareadymix.com/p/sewa-alat-pancang.html": "Sewa Alat Pancang",  // TYPE: MoneyMaster 
  "https://www.betonjayareadymix.com/p/sewa-trencher.html": "Sewa Trencher",  // TYPE: MoneyMaster 
  "https://www.betonjayareadymix.com/p/sewa-concrete-paver.html": "Sewa Concrete Paver"  // TYPE: MoneyMaster 
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
 // "https://www.betonjayareadymix.com/p/harga-sewa-alat-ringan.html": "Harga Sewa Alat Ringan"  // TYPE: MoneyMaster 
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
  "https://www.betonjayareadymix.com/p/perbandingan-sewa-alat-pendukung.html": "Perbandingan Sewa Alat Pendukung"  // TYPE: SUB1 
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
  // "https://www.betonjayareadymix.com/p/sewa-gerbang-tangan.html": "Sewa Gerbang Tangan",  
  // "https://www.betonjayareadymix.com/p/sewa-concrete-mixer.html": "Sewa Concrete Mixer",  
};*/

// ============================================================
// 📁 JASA PERBAIKAN INFRASTRUKTUR (ENTITY: JASA)
// 🧠 TYPE: MONEY_PAGE (bukan MONEY_MASTER)
// ============================================================

const urlMappingInfrastrukturFromSub1MoneyMaster = {
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-jalan.html": "Jasa Perbaikan Jalan",  
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-jembatan.html": "Jasa Perbaikan Jembatan",  
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-drainase.html": "Jasa Perbaikan Drainase",  
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-trotoar.html": "Jasa Perbaikan Trotoar"  
};

const urlMappingJasaKitchenSetFromSub1MoneyMaster = {
	"https://www.betonjayareadymix.com/p/jasa-kitchen-set.html": "Jasa Kitchen Set"
};

const urlMappingJasaKitchenSetFromMoneyMasterMoneyPage = {
	"https://www.betonjayareadymix.com/p/harga-jasa-kitchen-set.html": "Harga Jasa Kitchen Set",
	"https://www.betonjayareadymix.com/p/jasa-custom-kitchen-set.html": "Jasa Custom Kitchen Set",
    "https://www.betonjayareadymix.com/p/jasa-pasang-kitchen-set.html": "Jasa Pasang Kitchen Set",
	    // Kitchen Set juga bisa sebagai MP
    "https://www.betonjayareadymix.com/p/jasa-pembuatan-kitchen-set.html": "Jasa Pembuatan Kitchen Set",

// ============================================================
    // 📌 GAYA DESAIN
    // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-kitchen-set-minimalis.html": "Jasa Kitchen Set Minimalis", 
 "https://www.betonjayareadymix.com/p/jasa-kitchen-set-modern.html": "Jasa Kitchen Set Modern",
 "https://www.betonjayareadymix.com/p/jasa-kitchen-set-klasik.html": "Jasa Kitchen Set Klasik", 
  "https://www.betonjayareadymix.com/p/jasa-kitchen-set-industrial.html": "Jasa Kitchen Set Industrial",

    // ============================================================
    // 📌 TATA LETAK & BENTUK
    // ============================================================
    "https://www.betonjayareadymix.com/p/jasa-kitchen-set-letter-l-u-island.html": "Jasa Kitchen Set Letter L, U & Island"

};
const urlMappingHargaJasaKitchenSetFromMoneyPageMoneyPage1 = {
"https://www.betonjayareadymix.com/p/harga-jasa-kitchen-set-per-meter.html": "Harga Jasa Kitchen Set Per Meter"

};
const urlMappingJasaPembuatanFromSub1MoneyMaster = {
	"https://www.betonjayareadymix.com/p/jasa-pembuatan.html": "Jasa Pembuatan"
};

const urlMappingJasaPembuatanFromMoneyMasterMoneyMaster1 = {
    // ================================================================
    // 📌 MONEY-MASTER (LEVEL 4) - JASA PEMBUATAN (HANYA KATEGORI UTAMA)
    // ================================================================
	
	 "https://www.betonjayareadymix.com/p/jasa-pembuatan-bangunan.html": "Jasa Pembuatan Bangunan",
    "https://www.betonjayareadymix.com/p/jasa-pembuatan-furniture.html": "Jasa Pembuatan Furniture",
    "https://www.betonjayareadymix.com/p/jasa-pembuatan-pagar.html": "Jasa Pembuatan Pagar",
    "https://www.betonjayareadymix.com/p/jasa-pembuatan-kanopi.html": "Jasa Pembuatan Kanopi",
    "https://www.betonjayareadymix.com/p/jasa-pembuatan-tangga.html": "Jasa Pembuatan Tangga",

    "https://www.betonjayareadymix.com/p/jasa-pembuatan-balkon.html": "Jasa Pembuatan Balkon",
    "https://www.betonjayareadymix.com/p/jasa-pembuatan-decking.html": "Jasa Pembuatan Decking",
   // "https://www.betonjayareadymix.com/p/jasa-pembuatan-taman.html": "Jasa Pembuatan Taman",
    // Kusen/Pintu/Jendela bisa menjadi MM sendiri atau di bawah Furniture
    "https://www.betonjayareadymix.com/p/jasa-pembuatan-kusen.html": "Jasa Pembuatan Kusen",
    "https://www.betonjayareadymix.com/p/jasa-pembuatan-pintu.html": "Jasa Pembuatan Pintu",
    "https://www.betonjayareadymix.com/p/jasa-pembuatan-jendela.html": "Jasa Pembuatan Jendela"
};
const urlMappingJasaPembuatanBangunanFromMoneyMaster1MoneyPage = {
 "https://www.betonjayareadymix.com/p/harga-jasa-pembuatan-bangunan.html": "Harga Jasa Pembuatan Bangunan"  
};
const urlMappingHargaJasaPembuatanBangunanFromMoneyPageMoneyPage1 = {
   "https://www.betonjayareadymix.com/p/harga-jasa-borongan-bangunan.html": "Harga Jasa Borongan Bangunan" 
};

const urlMappingJasaPembuatanBangunanFromMoneyMaster1MoneyMaster2 = {
  "https://www.betonjayareadymix.com/p/jasa-pembuatan-rumah.html": "Jasa Pembuatan Rumah",
 // MP Tambahan (bisa ditambah sesuai kebutuhan)
"https://www.betonjayareadymix.com/p/jasa-pembuatan-apartemen.html": "Jasa Pembuatan Apartemen",
"https://www.betonjayareadymix.com/p/jasa-pembuatan-hotel.html": "Jasa Pembuatan Hotel",
"https://www.betonjayareadymix.com/p/jasa-pembuatan-sekolah.html": "Jasa Pembuatan Sekolah",
"https://www.betonjayareadymix.com/p/jasa-pembuatan-rs.html": "Jasa Pembuatan Rumah Sakit",
"https://www.betonjayareadymix.com/p/jasa-pembuatan-masjid.html": "Jasa Pembuatan Masjid",
"https://www.betonjayareadymix.com/p/jasa-pembuatan-ruko.html": "Jasa Pembuatan Ruko",
"https://www.betonjayareadymix.com/p/jasa-pembuatan-gudang.html": "Jasa Pembuatan Gudang"

};
const urlMappingJasaPembuatanRumahFromMoneyMaster2MoneyMaster3 = {
	"https://www.betonjayareadymix.com/p/jasa-bangun-rumah.html": "Jasa Bangun Rumah"
 };
// ================================================================
// 📌 MONEY-PAGE (LEVEL 5) - HANYA UNTUK JENIS FURNITURE SPESIFIK
// ================================================================
const urlMappingJasaPembuatanFurnitureFromMoneyMaster1MoneyPage = {
	"https://www.betonjayareadymix.com/p/harga-jasa-pembuatan-furniture.html": "Harga Jasa Pembuatan Furniture",
	"https://www.betonjayareadymix.com/p/jasa-pembuatan-furniture-custom.html": "Jasa Pembuatan Furniture Custom", // (Perbaiki URL yang 404)
//"https://www.betonjayareadymix.com/p/jasa-pembuatan-kitchen-set.html": "Jasa Pembuatan Kitchen Set",
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
	"https://www.betonjayareadymix.com/p/jasa-pasang-acp.html": "Jasa Pasang Acp",
   "https://www.betonjayareadymix.com/p/jasa-pasang-batu.html": "Jasa Pasang Batu",
   "https://www.betonjayareadymix.com/p/jasa-pasang-grc.html": "Jasa Pasang Grc",
   "https://www.betonjayareadymix.com/p/jasa-pasang-kaca.html": "Jasa Pasang Kaca",
    "https://www.betonjayareadymix.com/p/jasa-pasang-wood-plank.html": "Jasa Pasang Wood Plank",
   "https://www.betonjayareadymix.com/p/jasa-pasang-hpl.html": "Jasa Pasang Hpl",
    // ================================================================
    // 📌 MONEY-MASTER (LEVEL 4) - HANYA KATEGORI UTAMA
    // ================================================================
    "https://www.betonjayareadymix.com/p/jasa-pasang-keramik.html": "Jasa Pasang Keramik",
    "https://www.betonjayareadymix.com/p/jasa-pasang-wpc.html": "Jasa Pasang WPC",
	 "https://www.betonjayareadymix.com/p/jasa-pasang-pvc.html": "Jasa Pasang PVC",
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
    "https://www.betonjayareadymix.com/p/jasa-pasang-paving.html": "Jasa Pasang Paving",
    
    // 6. Utilitas & Teknologi
    "https://www.betonjayareadymix.com/p/jasa-pasang-lampu.html": "Jasa Pasang Lampu",
    "https://www.betonjayareadymix.com/p/jasa-pasang-cctv.html": "Jasa Pasang CCTV",
    "https://www.betonjayareadymix.com/p/jasa-pasang-ac.html": "Jasa Pasang AC"
};

const urlMappingJasaPasangGrcFromMoneyMaster1MoneyPage = {
  "https://www.betonjayareadymix.com/p/jasa-pasang-grc-eksterior.html": "Jasa Pasang GRC Eksterior",
  "https://www.betonjayareadymix.com/p/jasa-pasang-grc-interior.html": "Jasa Pasang GRC Interior"
	
};
const urlMappingJasaPasangGrcEksteriorFromMoneyPageMoneyPage1 = {
 "https://www.betonjayareadymix.com/p/jasa-pasang-grc-fasad.html": "Jasa Pasang GRC Fasad",
  "https://www.betonjayareadymix.com/p/jasa-pasang-dinding-grc-eksterior.html": "Jasa Pasang Dinding GRC Eksterior",
  "https://www.betonjayareadymix.com/p/jasa-pasang-panel-grc-dekoratif.html": "Jasa Pasang Panel GRC Dekoratif",
  "https://www.betonjayareadymix.com/p/jasa-pasang-lisplank-grc.html": "Jasa Pasang Lisplank GRC",
  "https://www.betonjayareadymix.com/p/jasa-pasang-list-profil-kolom-grc.html": "Jasa Pasang List Profil Kolom GRC",
  "https://www.betonjayareadymix.com/p/jasa-pasang-grc-relief.html": "Jasa Pasang GRC Relief"
	
};
const urlMappingJasaPasangDindingGRCEksteriorFromMoneyPage1MoneyPage2 = {
"https://www.betonjayareadymix.com/p/harga-jasa-pasang-dinding-grc.html": "Harga Jasa Pasang Dinding GRC"
};
const urlMappingJasaPasangGRCFasadFromMoneyPage1MoneyPage2 = {
"https://www.betonjayareadymix.com/p/harga-jasa-pasang-grc-fasad.html": "Harga Jasa Pasang GRC Fasad"
};
const urlMappingJasaPasangPanelGRCDekoratifFromMoneyPage1MoneyPage2 = {
"https://www.betonjayareadymix.com/p/harga-jasa-pasang-panel-grc-dekoratif.html": "Harga Jasa Pasang Panel GRC Dekoratif"
};

const urlMappingJasaPasangGrcInteriorFromMoneyPageMoneyPage1 = {
 "https://www.betonjayareadymix.com/p/jasa-pasang-plafon-grc.html": "Jasa Pasang Plafon GRC",
  "https://www.betonjayareadymix.com/p/jasa-pasang-dinding-grc-interior.html": "Jasa Pasang Dinding GRC Interior",
  "https://www.betonjayareadymix.com/p/jasa-pasang-panel-grc-3d.html": "Jasa Pasang Panel GRC 3D"
};
const urlMappingJasaPasangPlafonGRCFromMoneyPage1MoneyPage2 = {
"https://www.betonjayareadymix.com/p/harga-jasa-pasang-plafon-grc.html": "Harga Jasa Pasang Plafon GRC"
};

const urlMappingJasaPasangKacaFromMoneyMaster1MoneyPage = {
 "https://www.betonjayareadymix.com/p/jasa-pasang-kaca-interior.html": "Jasa Pasang Kaca Interior",
 "https://www.betonjayareadymix.com/p/jasa-pasang-kaca-eksterior.html": "Jasa Pasang Kaca Eksterior"

};
const urlMappingJasaPasangKacaInteriorFromMoneyPageMoneyPage1 = {
 "https://www.betonjayareadymix.com/p/jasa-pasang-partisi-kaca.html": "Jasa Pasang Partisi Kaca",
 "https://www.betonjayareadymix.com/p/jasa-pasang-railing-tangga-kaca.html": "Jasa Pasang Railing Tangga Kaca",
 "https://www.betonjayareadymix.com/p/jasa-pasang-pintu-kaca-interior.html": "Jasa Pasang Pintu Kaca Interior",
 "https://www.betonjayareadymix.com/p/jasa-pasang-cermin-hias.html": "Jasa Pasang Cermin Hias",
 "https://www.betonjayareadymix.com/p/jasa-pasang-skylight-kaca.html": "Jasa Pasang Skylight Kaca"
};
const urlMappingJasaPasangPartisiKacaFromMoneyPage1MoneyPage2 = {
"https://www.betonjayareadymix.com/p/jasa-pasang-partisi-kaca-kantor.html": "Jasa Pasang Partisi Kaca Kantor",
 "https://www.betonjayareadymix.com/p/jasa-pasang-partisi-kaca-rumah.html": "Jasa Pasang Partisi Kaca Rumah",
 "https://www.betonjayareadymix.com/p/jasa-pasang-partisi-kaca-tempered.html": "Jasa Pasang Partisi Kaca Tempered"
};
const urlMappingJasaPasangRailingTanggaKacaFromMoneyPage1MoneyPage2 = {
"https://www.betonjayareadymix.com/p/jasa-pasang-railing-kaca-tempered.html": "Jasa Pasang Railing Kaca Tempered"
};
const urlMappingJasaPasangKacaEksteriorFromMoneyPageMoneyPage1 = {
"https://www.betonjayareadymix.com/p/jasa-pasang-kaca-fasad.html": "Jasa Pasang Kaca Fasad",
 "https://www.betonjayareadymix.com/p/jasa-pasang-kanopi-kaca.html": "Jasa Pasang Kanopi Kaca",
 "https://www.betonjayareadymix.com/p/jasa-pasang-curtain-wall-kaca.html": "Jasa Pasang Curtain Wall Kaca"
	
};

const urlMappingJasaPasangBatuFromMoneyMaster1MoneyPage = {
 "https://www.betonjayareadymix.com/p/jasa-pasang-batu-interior.html": "Jasa Pasang Batu Interior",
 "https://www.betonjayareadymix.com/p/jasa-pasang-batu-eksterior.html": "Jasa Pasang Batu Eksterior"

};
const urlMappingJasaPasangBatuInteriorFromMoneyPageMoneyPage1 = {
 "https://www.betonjayareadymix.com/p/jasa-pasang-batu-alam-dinding-interior.html": "Jasa Pasang Batu Alam Dinding Interior",
 "https://www.betonjayareadymix.com/p/jasa-pasang-batu-alam-kamar-mandi.html": "Jasa Pasang Batu Alam Kamar Mandi",
 "https://www.betonjayareadymix.com/p/jasa-pasang-batu-alam-tangga.html": "Jasa Pasang Batu Alam Tangga",
 "https://www.betonjayareadymix.com/p/harga-jasa-pasang-batu-alam-interior.html": "Harga Jasa Pasang Batu Alam Interior"
};
const urlMappingJasaPasangBatuAlamDindingInteriorFromMoneyPage1MoneyPage2 = {
 "https://www.betonjayareadymix.com/p/jasa-pasang-batu-alam-ruang-tamu.html": "Jasa Pasang Batu Alam Ruang Tamu",
 "https://www.betonjayareadymix.com/p/jasa-pasang-batu-alam-kamar-tidur.html": "Jasa Pasang Batu Alam Kamar Tidur"
};
const urlMappingJasaPasangBatuEksteriorFromMoneyPageMoneyPage1 = {
 "https://www.betonjayareadymix.com/p/jasa-pasang-batu-alam-fasad.html": "Jasa Pasang Batu Alam Fasad",
 "https://www.betonjayareadymix.com/p/jasa-pasang-batu-alam-pagar.html": "Jasa Pasang Batu Alam Pagar",
 "https://www.betonjayareadymix.com/p/jasa-pasang-batu-alam-taman.html": "Jasa Pasang Batu Alam Taman"
};

const urlMappingJasaPasangWoodPlankFromMoneyMaster1MoneyPage = {
 "https://www.betonjayareadymix.com/p/jasa-pasang-wood-plank-interior.html": "Jasa Pasang Wood Plank Interior",
 "https://www.betonjayareadymix.com/p/jasa-pasang-wood-plank-eksterior.html": "Jasa Pasang Wood Plank Eksterior",
 "https://www.betonjayareadymix.com/p/harga-jasa-pasang-wood-plank.html": "Harga Jasa Pasang Wood Plank"

};
const urlMappingJasaPasangWoodPlankEksteriorFromMoneyPageMoneyPage1 = {
 "https://www.betonjayareadymix.com/p/jasa-pasang-wood-plank-dinding-eksterior.html": "Jasa Pasang Wood Plank Dinding Eksterior",
 "https://www.betonjayareadymix.com/p/jasa-pasang-wood-plank-pagar.html": "Jasa Pasang Wood Plank Pagar",
 "https://www.betonjayareadymix.com/p/jasa-pasang-wood-plank-fasad.html": "Jasa Pasang Wood Plank Fasad",
 "https://www.betonjayareadymix.com/p/harga-jasa-pasang-wood-plank-eksterior.html": "Harga Jasa Pasang Wood Plank Eksterior"

};
const urlMappingJasaPasangWoodPlankInteriorFromMoneyPageMoneyPage1 = {
 "https://www.betonjayareadymix.com/p/jasa-pasang-wood-plank-dinding-interior.html": "Jasa Pasang Wood Plank Dinding Interior",
 "https://www.betonjayareadymix.com/p/jasa-pasang-wood-plank-plafon.html": "Jasa Pasang Wood Plank Plafon",
 "https://www.betonjayareadymix.com/p/harga-jasa-pasang-wood-plank-interior.html": "Harga Jasa Pasang Wood Plank Interior"

};
const urlMappingJasaPasangWoodPlankDindingInteriorFromMoneyPage1MoneyPage2 = {
 "https://www.betonjayareadymix.com/p/jasa-pasang-wood-plank-ruang-tamu.html": "Jasa Pasang Wood Plank Ruang Tamu",
 "https://www.betonjayareadymix.com/p/jasa-pasang-wood-plank-kamar-tidur.html": "Jasa Pasang Wood Plank Kamar Tidur"
};

const urlMappingJasaPasangHplFromMoneyMaster1MoneyPage = {
 "https://www.betonjayareadymix.com/p/jasa-pasang-hpl-interior.html": "Jasa Pasang HPL Interior",
 "https://www.betonjayareadymix.com/p/jasa-pasang-hpl-eksterior.html": "Jasa Pasang HPL Eksterior",
 "https://www.betonjayareadymix.com/p/harga-jasa-pasang-hpl.html": "Harga Jasa Pasang HPL"

};
const urlMappingJasaPasangHplEksteriorFromMoneyPageMoneyPage1 = {
 "https://www.betonjayareadymix.com/p/jasa-pasang-hpl-fasad.html": "Jasa Pasang HPL Fasad",
 "https://www.betonjayareadymix.com/p/jasa-pasang-hpl-dinding-eksterior.html": "Jasa Pasang HPL Dinding Eksterior",
 "https://www.betonjayareadymix.com/p/harga-jasa-pasang-hpl-eksterior.html": "Harga Jasa Pasang HPL Eksterior"

};

const urlMappingJasaPasangHplInteriorFromMoneyPageMoneyPage1 = {
 "https://www.betonjayareadymix.com/p/jasa-pasang-hpl-dinding-interior.html": "Jasa Pasang HPL Dinding Interior",
 "https://www.betonjayareadymix.com/p/jasa-pasang-hpl-furniture.html": "Jasa Pasang HPL Furniture",
 "https://www.betonjayareadymix.com/p/jasa-pasang-hpl-plafon.html": "Jasa Pasang HPL Plafon",
 "https://www.betonjayareadymix.com/p/harga-jasa-pasang-hpl-eksterior.html": "Harga Jasa Pasang HPL Interior"

};
const urlMappingJasaPasangHPLDindingInteriorFromMoneyPage1MoneyPage2 = {
 "https://www.betonjayareadymix.com/p/jasa-pasang-hpl-backdrop-tv.html": "Jasa Pasang HPL Backdrop TV",
 "https://www.betonjayareadymix.com/p/jasa-pasang-hpl-partisi-ruangan.html": "Jasa Pasang HPL Partisi Ruangan",
 "https://www.betonjayareadymix.com/p/jasa-pasang-hpl-wall-panel.html": "Jasa Pasang HPL Wall Panel"
};
const urlMappingJasaPasangHPLFurnitureFromMoneyPage1MoneyPage2 = {
 "https://www.betonjayareadymix.com/p/jasa-pasang-hpl-kitchen-set.html": "Jasa Pasang HPL Kitchen Set",
 "https://www.betonjayareadymix.com/p/jasa-pasang-hpl-lemari.html": "Jasa Pasang HPL Lemari",
 "https://www.betonjayareadymix.com/p/jasa-pasang-hpl-rak.html": "Jasa Pasang HPL Rak"
};


const urlMappingJasaPasangAcpFromMoneyMaster1MoneyPage = {
"https://www.betonjayareadymix.com/p/harga-jasa-pasang-acp.html": "Harga Jasa Pasang ACP",
  "https://www.betonjayareadymix.com/p/jasa-pasang-acp-interior.html": "Jasa Pasang ACP Interior",
"https://www.betonjayareadymix.com/p/jasa-pasang-acp-eksterior.html": "Jasa Pasang ACP Eksterior",  
  "https://www.betonjayareadymix.com/p/jasa-pasang-acp-per-meter.html": "Jasa Pasang ACP Per Meter",
"https://www.betonjayareadymix.com/p/jasa-laser-cutting-acp.html": "Jasa Laser Cutting ACP"
};
const urlMappingJasaPasangACPInteriorFromMoneyPageMoneyPage1 = {
"https://www.betonjayareadymix.com/p/jasa-pasang-acp-dinding-interior.html": "Jasa Pasang ACP Dinding Interior",
"https://www.betonjayareadymix.com/p/jasa-pasang-acp-plafon.html": "Jasa Pasang ACP Plafon",
"https://www.betonjayareadymix.com/p/jasa-pasang-acp-partisi-ruangan.html": "Jasa Pasang ACP Partisi Ruangan"
};
const urlMappingJasaPasangACPEksteriorFromMoneyPageMoneyPage1 = {
"https://www.betonjayareadymix.com/p/jasa-pasang-acp-fasad.html": "Jasa Pasang ACP Fasad",
"https://www.betonjayareadymix.com/p/jasa-pasang-acp-bungkus-kolom.html": "Jasa Pasang ACP Bungkus Kolom"
};
const urlMappingJasaLaserCuttingACPFromMoneyPageMoneyPage1 = {
"https://www.betonjayareadymix.com/p/harga-jasa-laser-cutting-acp.html": "Harga Jasa Laser Cutting ACP"
};
const urlMappingHargaJasaPasangACPFromMoneyPageMoneyPage1 = {
 "https://www.betonjayareadymix.com/p/harga-jasa-pasang-acp-per-meter.html": "Harga Jasa Pasang ACP Per Meter" 

};
// MP di bawah Jasa Pasang Lantai
const urlMappingJasaPasangLantaiFromMoneyMaster1MoneyPage = {
"https://www.betonjayareadymix.com/p/jasa-borongan-lantai.html": "Jasa Borongan Lantai", 
"https://www.betonjayareadymix.com/p/jasa-pasang-keramik-lantai.html": "Jasa Pasang Keramik Lantai", 
    "https://www.betonjayareadymix.com/p/jasa-ganti-keramik-lantai.html": "Jasa Ganti Keramik Lantai", 

// Material khusus lantai
	 "https://www.betonjayareadymix.com/p/jasa-pasang-lantai-spc.html": "Jasa Pasang Lantai SPC",
   // "https://www.betonjayareadymix.com/p/jasa-pasang-spc.html": "Jasa Pasang SPC",
    //"https://www.betonjayareadymix.com/p/jasa-pasang-vinyl.html": "Jasa Pasang Vinyl",
	"https://www.betonjayareadymix.com/p/jasa-pasang-lantai-vinyl.html": "Jasa Pasang Lantai Vinyl",
    "https://www.betonjayareadymix.com/p/jasa-pasang-lantai-laminate.html": "Jasa Pasang Lantai Laminate",  
    "https://www.betonjayareadymix.com/p/jasa-pasang-lantai-hardwood.html": "Jasa Pasang Lantai Hardwood", 
    "https://www.betonjayareadymix.com/p/jasa-pasang-lantai-parket.html": "Jasa Pasang Lantai Parket"

};

// MP di bawah Jasa Pasang Dinding
const urlMappingJasaPasangDindingFromMoneyMaster1MoneyPage  = {

"https://www.betonjayareadymix.com/p/jasa-pasang-panel-dinding-3d.html": "Jasa Pasang Panel Dinding 3D",
    "https://www.betonjayareadymix.com/p/jasa-pasang-grc-dinding.html": "Jasa Pasang GRC Dinding",
    "https://www.betonjayareadymix.com/p/jasa-pasang-hpl-dinding.html": "Jasa Pasang HPL Dinding",
    "https://www.betonjayareadymix.com/p/jasa-pasang-batu-alam-dinding.html": "Jasa Pasang Batu Alam Dinding",
    // Conwood (Kayu Komposit)
    "https://www.betonjayareadymix.com/p/jasa-pasang-conwood-dinding.html": "Jasa Pasang Conwood Dinding",
    // Wall Moulding
    "https://www.betonjayareadymix.com/p/jasa-pasang-wall-moulding.html": "Jasa Pasang Wall Moulding",
    "https://www.betonjayareadymix.com/p/jasa-pasang-wallpaper-dinding.html": "Jasa Pasang Wallpaper Dinding",
    "https://www.betonjayareadymix.com/p/jasa-pasang-wall-panel.html": "Jasa Pasang Wall Panel"
	
   // "https://www.betonjayareadymix.com/p/jasa-pasang-wpc-dinding.html": "Jasa Pasang WPC Dinding"
};



// MP di bawah Jasa Pasang Furniture (Sudah 4 kata → MP)
const urlMappingJasaPasangFurnitureFromMoneyMaster1MoneyPage  = {
    // Nama diubah menjadi 3 kata setelah "Jasa" (total 4 kata) agar menjadi MP
    "https://www.betonjayareadymix.com/p/jasa-pasang-lemari-rumah.html": "Jasa Pasang Lemari Rumah",  // + Rumah
    "https://www.betonjayareadymix.com/p/jasa-pasang-meja-kantor.html": "Jasa Pasang Meja Kantor",    // + Kantor
    "https://www.betonjayareadymix.com/p/jasa-pasang-kursi-kantor.html": "Jasa Pasang Kursi Kantor"    // + Kantor
};
// ============================================================
// 📁 JASA PONDASI & PERKUATAN TANAH - SUB2 (LEVEL 2)
// ============================================================

// ============================================================
// 📁 BONGKAR BANGUNAN - SUB2 (LEVEL 2)
// ============================================================

const urlMappingBongkarBangunanFromMoneyMasterMoneyMaster1 = {
  "https://www.betonjayareadymix.com/p/jasa-bongkar-tower.html": "Jasa Bongkar Tower",  
  "https://www.betonjayareadymix.com/p/jasa-bongkar-rumah.html": "Jasa Bongkar Rumah",  
  "https://www.betonjayareadymix.com/p/jasa-bongkar-beton.html": "Jasa Bongkar Beton",  
  "https://www.betonjayareadymix.com/p/jasa-bongkar-atap.html": "Jasa Bongkar Atap",  
  "https://www.betonjayareadymix.com/p/jasa-bongkar-keramik.html": "Jasa Bongkar Keramik",  
  "https://www.betonjayareadymix.com/p/jasa-bongkar-tembok.html": "Jasa Bongkar Tembok",  
  "https://www.betonjayareadymix.com/p/jasa-bongkar-dinding.html": "Jasa Bongkar Dinding",  
  "https://www.betonjayareadymix.com/p/jasa-bongkar-plafon.html": "Jasa Bongkar Plafon",  
  "https://www.betonjayareadymix.com/p/jasa-bongkar-partisi.html": "Jasa Bongkar Partisi",  
  "https://www.betonjayareadymix.com/p/jasa-bongkar-pagar.html": "Jasa Bongkar Pagar",  
  "https://www.betonjayareadymix.com/p/jasa-bongkar-lantai.html": "Jasa Bongkar Lantai"  
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


const urlMappingPengeboranFromMoneyMasterMoneyMaster1 = {
  // [MONEY_PAGE] - JENIS PENGEBORAN SPESIFIK (JASA)
  //"https://www.betonjayareadymix.com/p/jasa-bor-air-sumur.html": "Jasa Bor Air Sumur",  
  "https://www.betonjayareadymix.com/p/jasa-tukang-bor.html": "Jasa Tukang Bor",  
  "https://www.betonjayareadymix.com/p/jasa-bor-sumur.html": "Jasa Bor Sumur",  
  "https://www.betonjayareadymix.com/p/jasa-bore-pile.html": "Jasa Bore Pile",  
  "https://www.betonjayareadymix.com/p/jasa-coring-beton.html": "Jasa Coring Beton",  
  "https://www.betonjayareadymix.com/p/jasa-bor-beton.html": "Jasa Bor Beton",  
  "https://www.betonjayareadymix.com/p/jasa-bor-tanah.html": "Jasa Bor Tanah",  
  "https://www.betonjayareadymix.com/p/jasa-bor-horizontal.html": "Jasa Bor Horizontal",  
  "https://www.betonjayareadymix.com/p/jasa-bor-tembok.html": "Jasa Bor Tembok"  
};


// ============================================================
// 📁 JASA SALURAN & DRAINASE - SUB2 (LEVEL 2) & MONEY_PAGE
// 🧠 ENTITY: JASA → TYPE: MONEY_PAGE
// ⚠️ STATUS: KONTEN KOSONG - PERLU DIBUAT
// ============================================================

/*const urlMappingSaluranFromPillarSub2 = {
  "https://www.betonjayareadymix.com/p/jasa-saluran-drainase.html": "Jasa Saluran & Drainase",  
};*/

const urlMappingJasaSaluranDrainaseFromMoneyMasterMoneyPage = {
  // 🟡 SARAN ITEM (BELUM AKTIF - PERLU DIBUAT KONTEN)
	
   "https://www.betonjayareadymix.com/p/jasa-normalisasi-saluran-drainase.html": "Jasa Normalisasi Saluran Drainase",
   "https://www.betonjayareadymix.com/p/jasa-pembersihan-saluran-air-mampet.html": "Jasa Pembersihan Saluran Air Mampet	",
   "https://www.betonjayareadymix.com/p/jasa-pembersihan-saluran-drainase.html": "Jasa Pembersihan Saluran Drainase",
   "https://www.betonjayareadymix.com/p/jasa-pemasangan-pipa-drainase.html": "Jasa Pemasangan Pipa Drainase",
   "https://www.betonjayareadymix.com/p/jasa-perbaikan-saluran-drainase.html": "Jasa Perbaikan Saluran Drainase",
   "https://www.betonjayareadymix.com/p/jasa-pembuatan-gorong-gorong.html": "Jasa Pembuatan Gorong-Gorong",
   "https://www.betonjayareadymix.com/p/jasa-perawatan-saluran-drainase.html": "Jasa Perawatan Saluran Drainase",
   "https://www.betonjayareadymix.com/p/jasa-sewa-alat-berat-drainase.html": "Jasa Sewa Alat Berat Drainase",
   "https://www.betonjayareadymix.com/p/jasa-saluran-air-hujan.html": "Jasa Saluran Air Hujan",  
   "https://www.betonjayareadymix.com/p/jasa-pemasangan-u-ditch.html": "Jasa Pemasangan U Ditch",  
   "https://www.betonjayareadymix.com/p/jasa-pemasangan-box-culvert.html": "Jasa Pemasangan Box Culvert",  
   "https://www.betonjayareadymix.com/p/jasa-saluran-irigasi-air-limbah.html": "Jasa Saluran Irigasi & Air Limbah",  
   "https://www.betonjayareadymix.com/p/jasa-pembuatan-sumur-resapan.html": "Jasa Pembuatan Sumur Resapan"  
};

const urlMappingJasaJalanPerkerasanFromMoneyMasterMoneyMaster1 = {
  "https://www.betonjayareadymix.com/p/jasa-perkerasan-jalan.html": "Jasa Perkerasan Jalan",  
  "https://www.betonjayareadymix.com/p/jasa-pengerasan-jalan.html": "Jasa Pengerasan Jalan" 
};

// ============================================================
// 📁 JASA PEMATANGAN LAHAN - SUB2 (LEVEL 2) & MONEY_PAGE
// 🧠 ENTITY: JASA → TYPE: MONEY_PAGE
// ============================================================
/*
const urlMappingPematanganLahanFromPillarSub2 = {
  "https://www.betonjayareadymix.com/p/jasa-pematangan-lahan.html": "Jasa Pematangan Lahan",  
};*/

const urlMappingJasaPematanganLahanFromMoneyMasterMoneyPage = {
// ============================================================
// MP - TURUNAN (LEVEL 5) - URL BARU
// ============================================================
"https://www.betonjayareadymix.com/p/jasa-pekerjaan-galian-tanah.html": "Jasa Pekerjaan Galian Tanah",
"https://www.betonjayareadymix.com/p/jasa-pengupasan-lahan-tanah.html": "Jasa Pengupasan Lahan Tanah", 
"https://www.betonjayareadymix.com/p/jasa-pembersihan-lahan-pematangan.html": "Jasa Pembersihan Lahan Pematangan",
"https://www.betonjayareadymix.com/p/jasa-perataan-dan-grading-lahan.html": "Jasa Perataan dan Grading Lahan", 
"https://www.betonjayareadymix.com/p/jasa-pekerjaan-elevasi-lahan.html": "Jasa Pekerjaan Elevasi Lahan",
"https://www.betonjayareadymix.com/p/jasa-pembentukan-badan-lahan.html": "Jasa Pembentukan Badan Lahan",
"https://www.betonjayareadymix.com/p/jasa-cut-and-fill-lahan.html": "Jasa Cut and Fill Lahan", 
"https://www.betonjayareadymix.com/p/jasa-pemotongan-bukit-lahan.html": "Jasa Pemotongan Bukit Lahan", 
"https://www.betonjayareadymix.com/p/jasa-urugan-tanah-lahan.html": "Jasa Urugan Tanah Lahan", 
"https://www.betonjayareadymix.com/p/jasa-pemadatan-tanah-lahan.html": "Jasa Pemadatan Tanah Lahan", 
"https://www.betonjayareadymix.com/p/jasa-base-course-lahan.html": "Jasa Base Course Lahan", 
"https://www.betonjayareadymix.com/p/jasa-stabilisasi-tanah-lahan.html": "Jasa Stabilisasi Tanah Lahan", 
"https://www.betonjayareadymix.com/p/jasa-pemasangan-drainase-lahan.html": "Jasa Pemasangan Drainase Lahan",
"https://www.betonjayareadymix.com/p/jasa-pemasangan-geotekstil-lahan.html": "Jasa Pemasangan Geotekstil Lahan",
"https://www.betonjayareadymix.com/p/jasa-persiapan-pondasi-lahan.html": "Jasa Persiapan Pondasi Lahan", 
"https://www.betonjayareadymix.com/p/jasa-tebang-pohon-pematangan-lahan.html": "Jasa Tebang Pohon Pematangan Lahan"
};

// ============================================================
// 📁 JASA UJI TANAH - SUB2 (LEVEL 2) & MONEY_PAGE
// 🧠 ENTITY: JASA → TYPE: MONEY_PAGE
// ============================================================
/*
const urlMappingUjiTanahFromPillarSub2 = {
  "https://www.betonjayareadymix.com/p/jasa-uji-tanah.html": "Jasa Uji Tanah",  
};*/

const urlMappingJasaUjiTanahFromMoneyMasterMoneyMaster1 = {
  "https://www.betonjayareadymix.com/p/jasa-sondir-tanah.html": "Jasa Sondir Tanah",  
  "https://www.betonjayareadymix.com/p/jasa-cpt-tanah.html": "Jasa CPT Tanah",  
  "https://www.betonjayareadymix.com/p/jasa-lab-tanah.html": "Jasa Lab Tanah",  
  "https://www.betonjayareadymix.com/p/jasa-boring-tanah.html": "Jasa Boring Tanah",  
  "https://www.betonjayareadymix.com/p/jasa-uji-penetrasi.html": "Jasa Uji Penetrasi"  
};


// ============================================================
// 📁 JASA PEMBATAS & PENGAMAN - SUB2 (LEVEL 2) & MONEY_PAGE
// 🧠 ENTITY: JASA → TYPE: MONEY_PAGE
// ============================================================
/*
const urlMappingPembatasFromPillarSub2 = {
  "https://www.betonjayareadymix.com/p/jasa-pembatas-pengaman.html": "Jasa Pembatas Pengaman",  
};*/

const urlMappingJasaPembatasPengamanFromMoneyMasterMoneyPage  = {
  "https://www.betonjayareadymix.com/p/jasa-pengamanan-area-proyek.html": "Jasa Pengamanan Area Proyek",  
  "https://www.betonjayareadymix.com/p/jasa-rambu-dan-sistem-keamanan-visual.html": "Jasa Rambu dan Sistem Keamanan Visual",  
  "https://www.betonjayareadymix.com/p/jasa-pengaman-sisi-jalan-infrastruktur.html": "Jasa Pengaman Sisi Jalan Infrastruktur"  
  //"https://www.betonjayareadymix.com/p/jasa-pembuatan-pagar-dinding-pembatas.html": "Jasa Pembuatan Pagar Dinding Pembatas",  
  //"https://www.betonjayareadymix.com/p/jasa-pasang-pagar-dinding-pembatas.html": "Jasa Pasang Pagar Dinding Pembatas"    

};

// ============================================================
// 📁 JASA INSTALASI LISTRIK - SUB2 (LEVEL 2) & MONEY_PAGE
// 🧠 ENTITY: JASA → TYPE: MONEY_PAGE
// ============================================================
/*
const urlMappingJasaInstalasiListrikFromPillarSub2 = {
  "https://www.betonjayareadymix.com/p/jasa-instalasi-listrik.html": "Jasa Instalasi Listrik",  
};*/

const urlMappingJasaInstalasiListrikFromSub1MoneyPage = {
  "https://www.betonjayareadymix.com/p/jasa-instalasi-solar-panel.html": "Jasa Instalasi Solar Panel",  
  "https://www.betonjayareadymix.com/p/jasa-instalasi-listrik-rumah.html": "Jasa Instalasi Listrik Rumah",  
  "https://www.betonjayareadymix.com/p/jasa-instalasi-listrik-komersial.html": "Jasa Instalasi Listrik Komersial",  
  "https://www.betonjayareadymix.com/p/jasa-pemasangan-panel-listrik.html": "Jasa Pemasangan Panel Listrik",  
  "https://www.betonjayareadymix.com/p/jasa-keamanan-proteksi-listrik.html": "Jasa Keamanan & Proteksi Listrik",  
  "https://www.betonjayareadymix.com/p/jasa-maintenance-perbaikan-listrik.html": "Jasa Maintenance & Perbaikan Listrik",  
  "https://www.betonjayareadymix.com/p/jasa-konsultasi-listrik.html": "Jasa Konsultasi Listrik"  
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
 * generateBreadcrumbJasaKonstruksi v10.3
 * FIXED: JASA DESAIN PILLAR + SEO OPTIMIZATION
 * ============================================================
 *
 * ✅ UPDATE v10.3
 * ------------------------------------------------------------
 * - FIX: JASA_DESAIN masuk ke VALID_ENTITY_TYPES
 * - FIX: ROOT_ENTITY_PILLARS untuk JASA_DESAIN diperbaiki
 * - FIX: pillarPatterns untuk JASA_DESAIN ditambahkan
 * - FIX: JASA_KEYWORDS_PATTERN mencakup "desain"
 * - FIX: isDesainEntity() digunakan di detectPageType()
 * - ENHANCED: Deteksi "desain" sebagai keyword pillar
 * - ENHANCED: SEO Friendly untuk halaman desain
 *
 * ✅ UPDATE v10.2
 * ------------------------------------------------------------
 * - FIX: Deteksi MM/MP otomatis tanpa daftar kata spesifik
 * - FIX: MC hanya untuk halaman dengan lokasi
 *
 * ============================================================
 * @version 10.3.0
 * @date 2026-06-30
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
        const icons = { 
            INFO: '📘', 
            SUCCESS: '✅', 
            WARN: '⚠️', 
            ERROR: '❌', 
            DEBUG: '🔍', 
            VARIANT: '🔬', 
            PARENT: '👪', 
            URL: '🔗',
            SCORE: '🎯',
            CLEAN: '🧹',
            SKIP: '⏭️',
            BRANCH: '🌿'
        };
        console.log(`${icons[type] || '📘'} [Breadcrumb v10.3] ${message}`);
    }

    // ============================================================
    // 3. ENTITY NORMALIZATION (FIXED v10.3)
    // ============================================================

    const ENTITY_TYPE_MAP = {
        // JASA
        'JASA': 'JASA_KONSTRUKSI',
        'JASA_KONSTRUKSI': 'JASA_KONSTRUKSI',
        'JASA_DESAIN': 'JASA_DESAIN',  // ✅ FIX: JASA_DESAIN ditambahkan
        'JASA_INTERIOR': 'JASA_KONSTRUKSI',
        'JASA_DESAIN_INTERIOR': 'JASA_DESAIN',
        
        // SEWA
        'SEWA': 'SEWA_ALAT_KONSTRUKSI',
        'RENTAL': 'SEWA_ALAT_KONSTRUKSI',
        'SEWA_ALAT': 'SEWA_ALAT_KONSTRUKSI',
        'RENTAL_ALAT': 'SEWA_ALAT_KONSTRUKSI',
        'SEWA_RENTAL': 'SEWA_ALAT_KONSTRUKSI',
        'SEWA_ALAT_KONSTRUKSI': 'SEWA_ALAT_KONSTRUKSI',
        
        // PRODUK
        'PRODUK': 'PRODUK_KONSTRUKSI',
        'PRODUK_KONSTRUKSI': 'PRODUK_KONSTRUKSI',
        'PRODUK_INTERIOR': 'PRODUK_INTERIOR',
        
        // MATERIAL
        'MATERIAL': 'MATERIAL_KONSTRUKSI',
        'MATERIAL_KONSTRUKSI': 'MATERIAL_KONSTRUKSI',
        
        // ARTIKEL
        'ARTIKEL': 'ARTIKEL'
    };

    entityType = ENTITY_TYPE_MAP[entityType] || entityType;

    // ============================================================
    // 4. VALID ENTITY TYPES (FIXED v10.3)
    // ============================================================

    const VALID_ENTITY_TYPES = [
        'JASA_KONSTRUKSI',
        'JASA_DESAIN',           // ✅ FIX: JASA_DESAIN ditambahkan
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
    // 6. ROOT ENTITY PILLARS (FIXED v10.3)
    // ============================================================

    const ROOT_ENTITY_PILLARS = {
        'JASA_KONSTRUKSI': ['jasa konstruksi'],
        'JASA_DESAIN': ['jasa desain', 'desain'],  // ✅ FIX: ditambahkan
        'SEWA_ALAT_KONSTRUKSI': ['sewa alat konstruksi'],
        'PRODUK_KONSTRUKSI': ['produk konstruksi'],
        'PRODUK_INTERIOR': ['produk interior'],
        'MATERIAL_KONSTRUKSI': ['material konstruksi'],
        'ARTIKEL': ['artikel konstruksi']
    };

    // ============================================================
    // 7. HELPERS (FIXED v10.3)
    // ============================================================

    function isJasaEntity() { return entityType === 'JASA_KONSTRUKSI'; }
    function isDesainEntity() { return entityType === 'JASA_DESAIN'; }  // ✅ FIX: digunakan
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
        
        // Hapus pola tanggal
        path = path.replace(/\/\d{4}\/\d{2}\/\d{2}\//g, '/');
        path = path.replace(/\/\d{4}\/\d{2}\//g, '/');
        path = path.replace(/\/\d{4}\//g, '/');
        
        // Hapus /p/
        path = path.replace(/^\/p\//, '/');
        path = path.replace(/\/p\//g, '/');
        
        const parts = path.split('/').filter(Boolean);
        let last = parts.pop() || '';
        
        if (!last && parts.length > 0) {
            last = parts.pop() || '';
        }
        
        last = last.replace(/-/g, ' ');
        last = last.replace(/[^a-z0-9\s]/gi, '');
        
        if (last.length < 3 && parts.length > 0) {
            const lastTwo = parts.slice(-2).join(' ');
            if (lastTwo.length > last.length) {
                last = lastTwo;
            }
        }
        
        const cleanResult = cleanText(last.toLowerCase());
        log(`Cleaned URL: "${url}" → "${cleanResult}"`, 'URL');
        
        return cleanResult;
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

    const METHOD_KEYWORDS = ['metode', 'cara', 'tahapan', 'langkah', 'analisa'];

    // ============================================================
    // 11a. VARIANT KEYWORDS PER ENTITY
    // ============================================================
    
    const VARIANT_KEYWORDS_PRODUK = [
        'spesifikasi', 'spec', 'detail spesifikasi',
        'mutu', 'kualitas', 'quality',
        'ukuran', 'dimensi',
        'grade', 'type', 'tipe', 'model',
        'standar', 'merk', 'brand', 'seri'
    ];

    const VARIANT_KEYWORDS_JASA = [
        'standar pelayanan', 'sop', 'metode kerja',
        'prosedur', 'tahapan', 'cara kerja',
        'durasi', 'waktu pengerjaan', 'garansi',
        'standar pengerjaan'
    ];

    const VARIANT_KEYWORDS_SEWA = [
        'spesifikasi alat', 'kapasitas alat',
        'spek alat', 'detail alat', 'spesifikasi'
    ];

    const TECHNICAL_SPECS = ['k225', 'k250', 'k300', 'k350', 'k400', 'k500', 'k600', 'fc', 'm6', 'm8', 'm10', 'm12'];
    
    const SPECIFIC_MODIFIERS = [
        'k225', 'k250', 'k300', 'm6', 'm8', 'm10',
        'diesel', 'hidrolik', 'mini pile', 'sheet pile', 'drop hammer',
        'breaker', 'long arm', 'vibrator', 'per jam', 'per hari',
        'per meter', 'per m2', 'terdekat', 'murah', 'kapasitas besar'
    ];

    // ============================================================
    // 11b. JASA CLEAN FUNCTION
    // ============================================================

    const JASA_ULTRA_COMMON_WORDS = new Set([
        'jasa', 'kontraktor', 'tukang', 'borongan', 'renovasi',
        'pasang', 'bangun', 'perbaikan', 'instalasi', 'proyek',
        'cor', 'gali', 'urug', 'angkut', 'service', 'servis',
        'desain'  // ✅ FIX: "desain" ditambahkan sebagai kata ultra-common untuk JASA
    ]);

    const STOPWORDS = new Set([
        'dan', 'atau', 'serta', 'yang', 'dari', 'ke', 'di', 'untuk', 
        'dengan', 'ini', 'itu', 'akan', 'telah', 'sudah', 'masih',
        'pada', 'oleh', 'karena', 'sehingga', 'setelah', 'sebelum',
        'plus', 'minus', 'tanpa', 'sampai', 'hingga', 'sambil'
    ]);

    const MATERIAL_SPEC_WORDS = new Set([
        'baja ringan', 'baja', 'ringan', 'beton', 'readymix', 
        'kanstin', 'pembatas', 'pengaman', 'struktur', 'dinding',
        'pondasi', 'atap', 'genteng', 'keramik', 'marmer', 'granit',
        'plafon', 'gypsum', 'partisi', 'dak', 'cor', 'pile', 'sheet',
        'tiang', 'balok', 'kolom', 'sloof', 'ring', 'balk', 'kuda-kuda',
        'drainase', 'irigasi', 'box culvert', 'u ditch', 'paving',
        'konstruksi', 'rangka', 'material', 'upah', 'tenaga'
    ]);

    const MODIFIER_WORDS = new Set([
        'murah', 'profesional', 'berkualitas', 'terbaik', 'spesialis',
        'ahli', 'berpengalaman', 'resmi', 'terpercaya', 'ekonomis',
        'cepat', 'tepat', 'garansi', 'kualitas', 'harga', 'biaya',
        'tarif', 'ongkos', 'estimasi', 'perhitungan', 'analisa',
        'modern', 'minimalis', 'mewah', 'klasik', 'tradisional',
        'kontemporer', 'sederhana', 'elegan', 'premium', 'luxury'
    ]);

    function cleanJasaText(text) {
        if (!text) return '';
        
        let cleaned = text.toLowerCase();
        
        for (const kw of JASA_ULTRA_COMMON_WORDS) {
            cleaned = cleaned.replace(new RegExp(`\\b${kw}\\b`, 'g'), ' ');
        }
        
        for (const sw of STOPWORDS) {
            cleaned = cleaned.replace(new RegExp(`\\b${sw}\\b`, 'g'), ' ');
        }
        
        cleaned = cleaned.replace(/\s+/g, ' ').trim();
        
        log(`Clean JASA: "${text}" → "${cleaned}"`, 'CLEAN');
        
        return cleaned;
    }

    function countCoreWords(text) {
        if (!text) return 0;
        const words = text.toLowerCase().split(/\s+/).filter(w => w.length >= 2);
        return words.length;
    }

    function hasModifier(text) {
        if (!text) return false;
        const lower = text.toLowerCase();
        for (const mod of MODIFIER_WORDS) {
            if (lower.includes(mod)) return true;
        }
        return false;
    }

    function isSpecificJasa(text) {
        if (!text) return false;
        const lower = text.toLowerCase();
        if (/\d/.test(lower)) return true;
        if (/(k225|k250|k300|k350|k400|k500|k600|m6|m8|m10|m12|sn|sni)/i.test(lower)) return true;
        const specWords = ['spesifikasi', 'mutu', 'dimensi', 'ukuran', 'standar', 'grade', 'tipe', 'type'];
        for (const sw of specWords) {
            if (lower.includes(sw)) return true;
        }
        return false;
    }

    function hasMaterialSpec(text) {
        if (!text) return false;
        const lower = text.toLowerCase();
        for (const kw of MATERIAL_SPEC_WORDS) {
            if (lower.includes(kw)) return true;
        }
        return false;
    }

    // ============================================================
    // 11c. DETEKSI JASA LEVEL OTOMATIS
    // ============================================================

    function detectJasaLevelAuto(pageName) {
        const lowerName = pageName.toLowerCase();
        
        const cleaned = cleanJasaText(lowerName);
        
        const remainingWords = cleaned.split(/\s+/).filter(w => w.length >= 2);
        const wordCount = remainingWords.length;
        
        const hasNumber = /\d/.test(cleaned);
        const hasLocation = isLocation(cleaned);
        const hasModifierWord = hasModifier(cleaned);
        const hasMaterialSpecWord = hasMaterialSpec(cleaned);
        
        log(`Auto detect JASA: "${pageName}" → remaining: "${cleaned}", words: ${wordCount}`, 'DEBUG');
        
        if (wordCount <= 1 && !hasNumber && !hasLocation && !hasModifierWord && !hasMaterialSpecWord) {
            log(`MM detected (auto): "${pageName}" → remaining words: ${wordCount}`, 'SUCCESS');
            return 'money-master';
        }
        
        log(`MP detected (auto): "${pageName}" → remaining words: ${wordCount}`, 'INFO');
        return 'money-page';
    }

    // ============================================================
    // 11d. VARIANT DETECTION PER ENTITY
    // ============================================================
    
    function isVariantPage(pageName, currentEntityType) {
        const lowerName = pageName.toLowerCase();
        
        for (const spec of TECHNICAL_SPECS) {
            if (lowerName.includes(spec)) {
                return false;
            }
        }
        
        if (currentEntityType === 'PRODUK_KONSTRUKSI' || currentEntityType === 'MATERIAL_KONSTRUKSI') {
            for (const kw of VARIANT_KEYWORDS_PRODUK) {
                if (lowerName.includes(kw)) {
                    log(`Variant detected (PRODUK/MATERIAL): "${pageName}" contains "${kw}"`, 'VARIANT');
                    return true;
                }
            }
        }
        
        if (currentEntityType === 'JASA_KONSTRUKSI' || currentEntityType === 'JASA_DESAIN') {
            for (const kw of VARIANT_KEYWORDS_JASA) {
                if (lowerName.includes(kw)) {
                    log(`Variant detected (JASA/DESAIN): "${pageName}" contains "${kw}"`, 'VARIANT');
                    return true;
                }
            }
            return false;
        }
        
        if (currentEntityType === 'SEWA_ALAT_KONSTRUKSI') {
            for (const kw of VARIANT_KEYWORDS_SEWA) {
                if (lowerName.includes(kw)) {
                    log(`Variant detected (SEWA): "${pageName}" contains "${kw}"`, 'VARIANT');
                    return true;
                }
            }
            if (lowerName.includes('spesifikasi') && (lowerName.includes('alat') || lowerName.includes('excavator') || lowerName.includes('dump') || lowerName.includes('alat berat'))) {
                log(`Variant detected (SEWA): "${pageName}" contains spesifikasi + alat`, 'VARIANT');
                return true;
            }
            return false;
        }
        
        return false;
    }

    // ============================================================
    // 12. LOCATION DETECTION
    // ============================================================

    const LOCATION_WHITELIST = new Set([
        'jakarta', 'jakarta pusat', 'jakarta barat', 'jakarta selatan', 'jakarta timur', 'jakarta utara',
        'bogor', 'kota bogor', 'kabupaten bogor',
        'depok', 'kota depok',
        'tangerang', 'kota tangerang', 'kota tangerang selatan', 'kabupaten tangerang',
        'bekasi', 'kota bekasi', 'kabupaten bekasi',
        'bandung', 'kota bandung', 'kabupaten bandung',
        'karawang', 'kabupaten karawang',
        'purwakarta', 'kabupaten purwakarta',
        'cikarang', 'cikarang barat', 'cikarang pusat', 'cikarang selatan', 'cikarang timur', 'cikarang utara',
        'subang', 'kabupaten subang',
        'cirebon', 'kota cirebon', 'kabupaten cirebon',
        'semarang', 'kota semarang', 'kabupaten semarang',
        'solo', 'surakarta', 'kota surakarta',
        'pekalongan', 'tegal', 'magelang', 'sukoharjo', 'boyolali', 'klaten',
        'jogja', 'yogyakarta', 'kota yogyakarta', 'kabupaten sleman', 'bantul', 'gunungkidul', 'kulon progo',
        'surabaya', 'kota surabaya',
        'malang', 'kota malang', 'kabupaten malang',
        'kediri', 'kota kediri', 'kabupaten kediri',
        'gresik', 'sidoarjo', 'mojokerto', 'pasuruan', 'probolinggo', 'jember', 'banyuwangi', 'madiun',
        'medan', 'kota medan',
        'palembang', 'pekanbaru', 'padang', 'lampung', 'bandar lampung', 'batam', 'tanjungpinang',
        'aceh', 'banda aceh', 'jambi', 'bengkulu', 'pangkal pinang',
        'pontianak', 'balikpapan', 'samarinda', 'banjarmasin', 'palangkaraya',
        'makassar', 'kota makassar',
        'manado', 'palu', 'kendari', 'gorontalo',
        'bali', 'kabupaten badung', 'kota denpasar', 'denpasar', 'gianyar', 'tabanan', 'bangli', 'karangasem', 'klungkung', 'buleleng', 'jembrana',
        'mataram', 'kupang',
        'terdekat'
    ]);

    function isLocation(text) {
        if (!text) return false;
        const lower = text.toLowerCase();
        for (const city of LOCATION_WHITELIST) {
            if (new RegExp(`\\b${city.replace(/\s+/g, '\\s+')}\\b`, 'i').test(lower)) {
                return true;
            }
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
    // 16. JASA KEYWORDS (FIXED v10.3)
    // ============================================================

    const JASA_KEYWORDS_PATTERN = 
        /\b(jasa|kontraktor|tukang|borongan|renovasi|pasang|bangun|perbaikan|instalasi|proyek|cor|gali|urug|angkut|desain|interior|eksterior|arsitektur|gedung|rumah|ruko|kantor|apartemen)\b/i;

    // ============================================================
    // 17. PAGE TYPE DETECTION (FIXED v10.3)
    // ============================================================

    function detectPageType(pageName, isHome = false) {
        const lowerName = cleanText(pageName.toLowerCase());

        if (isHome || lowerName === 'home' || lowerName === 'beranda') return 'home';
        if (isEntityPillarExactMatch(lowerName)) return 'pillar';
        if (isSubVariant(lowerName)) return 'sub-variant';

        for (const kw of METHOD_KEYWORDS) {
            if (lowerName.includes(kw)) {
                const HAS_JASA_WORD = JASA_KEYWORDS_PATTERN.test(lowerName);
                const HAS_SEWA_WORD = /\b(sewa|rental)\b/i.test(lowerName);
                const HAS_PRODUK_WORD = /\b(beton|readymix|material|produk)\b/i.test(lowerName);
                
                if (HAS_JASA_WORD || HAS_SEWA_WORD || HAS_PRODUK_WORD) {
                    return 'money-page';
                }
                return 'sub-pillar-tipe-2';
            }
        }

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

        if (HAS_LOCATION) {
            log(`MC detected: "${pageName}" contains location`, 'SUCCESS');
            return 'money-child';
        }

        // ✅ FIX v10.3: JASA_DESAIN masuk ke deteksi
        if ((isJasaEntity() || isDesainEntity()) && HAS_JASA_WORD && !HAS_PRICE_WORD) {
            return detectJasaLevelAuto(lowerName);
        }

        if (isSewaEntity() && HAS_SEWA_WORD && !HAS_PRICE_WORD) {
            const cleaned = lowerName.replace(/\b(sewa|rental)\b/gi, '').trim();
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

        const currentLevel = TYPE_LEVEL_MAP[detectPageType(currentPageTitle)] || 99;
        
        const allPotentialParents = allLevels.filter(item => 
            item.level <= currentLevel && 
            item.name.toLowerCase() !== currentLower &&
            !modifiedLineage.some(l => l.name === item.name)
        );
        
        for (const parent of allPotentialParents) {
            const isDifferentBranch = modifiedLineage.every(existing => {
                const similarity = calculateSimilarity(parent.name, existing.name);
                return similarity < 0.5;
            });
            
            const hasSignificantScore = (parent.relevanceScore || 0) > 50;
            
            if (isDifferentBranch && hasSignificantScore) {
                log(`FORCE PARENT (branch): "${parent.name}" (level ${parent.level}) → "${currentPageTitle}"`, 'SUCCESS');
                modifiedLineage.push(parent);
            } else if (!isDifferentBranch) {
                log(`⏭️ FORCE SKIP: "${parent.name}" (level ${parent.level}) - same branch`, 'SKIP');
            } else {
                log(`⏭️ FORCE SKIP: "${parent.name}" (level ${parent.level}) - low score (${parent.relevanceScore || 0})`, 'SKIP');
            }
        }

        if (modifiedLineage.length === lineageLevels.length) {
            const semanticKeywords = {
                'finishing': ['finishing', 'cat', 'epoxy', 'lampu', 'wallpaper'],
                'bangunan': ['bangunan', 'gedung', 'rumah', 'ruko'],
                'interior': ['interior', 'dalam', 'ruangan'],
                'eksterior': ['eksterior', 'luar', 'halaman'],
                'lantai': ['lantai', 'keramik', 'epoxy lantai', 'marmer', 'granit'],
                'dinding': ['dinding', 'tembok', 'wallpaper'],
                'desain': ['desain', 'arsitektur', 'konsep', 'rencana', 'gambar']
            };
            
            for (const [parentKeyword, childKeywords] of Object.entries(semanticKeywords)) {
                const isChildMatch = childKeywords.some(kw => currentLower.includes(kw));
                if (isChildMatch) {
                    const parentItem = allLevels.find(item => 
                        item.name.toLowerCase().includes(parentKeyword)
                    );
                    if (parentItem && !modifiedLineage.some(l => l.name === parentItem.name)) {
                        const isDifferentBranch = modifiedLineage.every(existing => {
                            const similarity = calculateSimilarity(parentItem.name, existing.name);
                            return similarity < 0.5;
                        });
                        
                        if (isDifferentBranch) {
                            log(`SEMANTIC PARENT: "${parentItem.name}"`, 'SUCCESS');
                            modifiedLineage.push(parentItem);
                        }
                    }
                }
            }
        }

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
        const sorted = [...lineage].sort((a, b) => a.level - b.level);
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
    // 21. SIMILARITY CALCULATION
    // ============================================================

    function calculateSimilarity(text1, text2) {
        const words1 = text1.toLowerCase().split(/\s+/);
        const words2 = text2.toLowerCase().split(/\s+/);
        
        if (words1.length === 0 || words2.length === 0) return 0;
        
        const commonWords = words1.filter(w => words2.includes(w));
        const union = new Set([...words1, ...words2]);
        const similarity = commonWords.length / union.size;
        
        return similarity;
    }

    // ============================================================
    // 22. GET CURRENT PAGE INFO
    // ============================================================

    const currentFullUrl = currentUrl.startsWith('http')
        ? currentUrl
        : CONFIG.DOMAIN + currentUrl;

    let currentPageTitle = getCleanPageNameFromUrl(currentFullUrl);

    if (!currentPageTitle) {
        currentPageTitle = 'Halaman';
    }

    // ============================================================
    // 23. INJECT CURRENT PAGE & AUTO PARENT
    // ============================================================

    const enhancedBreadcrumbItems = injectCurrentPageAndParent(
        breadcrumbItems,
        currentPageTitle,
        currentFullUrl
    );

    // ============================================================
    // 24. BUILD ALL LEVELS
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
    // 25. URL FALLBACK
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
    // 26. CURRENT PAGE TYPE
    // ============================================================

    const currentPageType = detectPageType(currentPageTitle);
    log(`Current page: "${currentPageTitle}" → type: ${currentPageType} (level ${TYPE_LEVEL_MAP[currentPageType]})`, 'INFO');

    // ============================================================
    // 27. SELECT BREADCRUMB LEVELS
    // ============================================================

    const selectedLevels = [];

    selectedLevels.push({
        name: 'Beranda',
        url: CONFIG.DOMAIN,
        type: 'home',
        level: 0,
        position: 1
    });

    const uniqueByUrl = new Map();
    for (const item of allLevels) {
        const key = item.url || item.name;
        if (!uniqueByUrl.has(key)) {
            uniqueByUrl.set(key, item);
        }
    }
    const uniqueItems = Array.from(uniqueByUrl.values());

    log('=== ALL LEVELS DEBUG ===', 'DEBUG');
    for (const level of allLevels) {
        log(`  ${level.name} → type: ${level.type}, level: ${level.level}`, 'DEBUG');
    }

    log('Unique items (' + uniqueItems.length + '): ' + uniqueItems.map(i => i.name + '(' + i.level + ')').join(' → '), 'INFO');

    // ============================================================
    // FIND NEAREST PARENTS
    // ============================================================

    function findNearestParentsByHierarchy() {
        const lineage = [];
        const currentLevel = TYPE_LEVEL_MAP[currentPageType] || 99;
        const currentPageTitleLower = currentPageTitle.toLowerCase();
        
        const candidates = uniqueItems.filter(item => 
            item.name.toLowerCase() !== currentPageTitleLower
        );
        
        if (candidates.length === 0) return lineage;
        
        const validCandidates = candidates.filter(item => item.level <= currentLevel);
        
        if (validCandidates.length === 0) {
            const sortedByLevel = [...candidates].sort((a, b) => b.level - a.level);
            const nearest = sortedByLevel[0];
            lineage.push(nearest);
            log(`⚠️ No valid candidates, using "${nearest.name}"`, 'WARN');
            return lineage;
        }
        
        log('Valid candidates: ' + validCandidates.map(i => i.level + ':' + i.name).join(', '), 'DEBUG');
        
        const currentWords = currentPageTitleLower.split(/\s+/);
        const scoredCandidates = validCandidates.map(item => {
            const itemWords = item.name.toLowerCase().split(/\s+/);
            let relevanceScore = 0;
            
            for (const word of currentWords) {
                if (word.length > 2 && itemWords.includes(word)) {
                    relevanceScore += 10;
                }
            }
            
            const specificKeywords = [
                'kanstin', 'pembatas', 'pengaman', 'tukang', 'baja', 'ringan',
                'struktur', 'konstruksi', 'pasang', 'dinding', 'pondasi',
                'beton', 'readymix', 'cor', 'pile', 'sheet', 'tiang',
                'harga', 'biaya', 'borongan', 'material', 'upah', 'tenaga',
                'wallpaper', 'custom', '3d', 'interior', 'dekorasi',
                'desain', 'arsitektur', 'rumah', 'gedung', 'ruko'
            ];
            for (const kw of specificKeywords) {
                if (currentPageTitleLower.includes(kw) && item.name.toLowerCase().includes(kw)) {
                    relevanceScore += 30;
                }
            }
            
            if (currentPageTitleLower.includes(item.name.toLowerCase()) && item.name.length > 3) {
                relevanceScore += 50;
            }
            
            const maxWordLength = Math.max(...itemWords.map(w => w.length));
            if (maxWordLength > 6) {
                relevanceScore += 5;
            }
            
            log(`🎯 Score for "${item.name}" (level ${item.level}): ${relevanceScore}`, 'SCORE');
            
            return { ...item, relevanceScore };
        });
        
        scoredCandidates.sort((a, b) => {
            if (a.level !== b.level) return b.level - a.level;
            return b.relevanceScore - a.relevanceScore;
        });
        
        log('Scored candidates (sorted): ' + scoredCandidates.map(i => i.level + ':' + i.name + '(' + i.relevanceScore + ')').join(' → '), 'DEBUG');
        
        const selectedParents = [];
        
        for (const item of scoredCandidates) {
            const levelKey = item.level;
            const existingParents = selectedParents.filter(p => p.level === levelKey);
            
            if (existingParents.length === 0) {
                selectedParents.push(item);
                log(`🎯 Selected: "${item.name}" (level ${item.level}) with score ${item.relevanceScore}`, 'SUCCESS');
            } else {
                const isDifferentBranch = existingParents.every(existing => {
                    const similarity = calculateSimilarity(item.name, existing.name);
                    const isSameBranch = similarity >= 0.5;
                    log(`🌿 Similarity "${item.name}" vs "${existing.name}": ${Math.round(similarity * 100)}%`, 'BRANCH');
                    return !isSameBranch;
                });
                
                if (isDifferentBranch) {
                    selectedParents.push(item);
                    log(`🌿 Branch parent: "${item.name}" (level ${item.level}) with score ${item.relevanceScore}`, 'BRANCH');
                } else {
                    log(`⏭️ Skipped: "${item.name}" (level ${item.level}) - same branch`, 'SKIP');
                }
            }
        }
        
        for (const item of selectedParents) {
            lineage.push(item);
        }
        
        if (lineage.length === 0 && validCandidates.length > 0) {
            const sortedByLevel = [...validCandidates].sort((a, b) => b.level - a.level);
            const highestLevel = sortedByLevel[0].level;
            const topCandidates = sortedByLevel.filter(item => item.level === highestLevel);
            const bestParent = topCandidates.sort((a, b) => b.relevanceScore - a.relevanceScore)[0];
            lineage.push(bestParent);
            log(`⚠️ FALLBACK: Using "${bestParent.name}" as nearest parent`, 'WARN');
        }
        
        log('Lineage (prioritized): ' + lineage.map(i => i.level + ':' + i.name).join(' → '), 'SUCCESS');
        
        return lineage;
    }

    let lineageLevels = findNearestParentsByHierarchy();

    log('Initial lineage (' + lineageLevels.length + '): ' + lineageLevels.map(i => i.name + '(' + i.type + ')').join(' → '), 'INFO');

    lineageLevels = forceInjectDirectParent(
        lineageLevels, 
        uniqueItems,
        currentPageTitle, 
        entityType,
        enhancedBreadcrumbItems
    );

    log('After force injection (' + lineageLevels.length + '): ' + lineageLevels.map(i => i.name + '(' + i.type + ')').join(' → '), 'INFO');

    const cleanLineage = [];
    const usedLineage = new Set();

    for (const item of lineageLevels) {
        const key = item.name.toLowerCase();
        if (usedLineage.has(key)) continue;
        usedLineage.add(key);
        cleanLineage.push(item);
    }

    const validatedLineage = validateAndFixHierarchy(cleanLineage);

    validatedLineage.sort((a, b) => {
        const idxA = HIERARCHY_ORDER.indexOf(a.type);
        const idxB = HIERARCHY_ORDER.indexOf(b.type);
        if (idxA !== idxB) return idxA - idxB;
        return a.position - b.position;
    });

    // ========================================================
    // AMBIL SEMUA PARENT DENGAN LEVEL TERTINGGI
    // ========================================================
    
    let finalParents = [];

    const parentOnly = validatedLineage.filter(item => 
        item.name.toLowerCase() !== currentPageTitle.toLowerCase()
    );

    log(`Parent candidates (${parentOnly.length}): ` + parentOnly.map(i => i.name + '(' + i.level + ')').join(', '), 'DEBUG');

    if (parentOnly.length > 0) {
        const highestLevel = Math.max(...parentOnly.map(i => i.level));
        finalParents = parentOnly.filter(item => item.level === highestLevel);
        finalParents.sort((a, b) => a.position - b.position);
        
        log(`✅ PARENT FOUND: ${finalParents.length} parent(s) at level ${highestLevel}: ` + finalParents.map(i => i.name).join(', '), 'SUCCESS');
    } else {
        log('⚠️ No parent found (only current page)', 'WARN');
    }

    if (finalParents.length === 0 && validatedLineage.length > 1) {
        const filtered = validatedLineage.filter(item => 
            item.name.toLowerCase() !== currentPageTitle.toLowerCase()
        );
        if (filtered.length > 0) {
            const highestLevel = Math.max(...filtered.map(i => i.level));
            finalParents = filtered.filter(item => item.level === highestLevel);
            log(`⚠️ FALLBACK PARENT: Using ${finalParents.length} nearest parent(s) at level ${highestLevel}`, 'WARN');
        }
    }

    for (const item of finalParents) {
        const exists = selectedLevels.some(l => l.name.toLowerCase() === item.name.toLowerCase());
        if (!exists) {
            selectedLevels.push(item);
            log(`👪 Adding parent: "${item.name}" (level ${item.level})`, 'PARENT');
        }
    }

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
    // 28. FINAL UNIQUE LEVELS
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

    log('Final breadcrumb (' + uniqueLevels.length + ' levels): ' + uniqueLevels.map(i => i.name + '(' + i.level + ')').join(' › '), 'SUCCESS');

    // ============================================================
    // 29. GENERATE HTML
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
    // 30. JSON LD
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
    // 31. REMOVE OLD
    // ============================================================

    document.querySelectorAll('.breadcrumbs, .breadcrumb-nav, [aria-label="Breadcrumb"]')
        .forEach(el => el.remove());
    document.querySelectorAll('script[data-breadcrumb="true"]')
        .forEach(el => el.remove());

    // ============================================================
    // 32. TARGET ELEMENT
    // ============================================================

    const targetElement = document.querySelector('main, article, .content, #main-content, .post-content');

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

    console.log('📊 BREADCRUMB GENERATION SUMMARY (v10.3):');
    console.log(`   Page: "${currentPageTitle}"`);
    console.log(`   URL: "${currentFullUrl}"`);
    console.log(`   Type: ${currentPageType} (level ${TYPE_LEVEL_MAP[currentPageType]})`);
    console.log(`   Entity: ${entityType}`);
    if (currentPageType === 'variant') {
        console.log(`   🔬 Variant detected for entity: ${entityType}`);
    }
    if (currentPageType === 'money-child') {
        console.log(`   📍 Money Child with location detected`);
    }
    console.log(`   👪 Parents found: ${finalParents.length} at level ${finalParents.length > 0 ? finalParents[0].level : 'N/A'}`);
    console.log(`   📊 Total breadcrumb levels: ${uniqueLevels.length}`);

    // ============================================================
    // 35. RETURN
    // ============================================================

    return {
        html: breadcrumbHtml,
        jsonLd,
        selectedLevels: uniqueLevels,
        currentPageType,
        entityType,
        version: '10.3.0',
        parentCount: finalParents.length,
        parents: finalParents,
        isVariant: currentPageType === 'variant',
        isMoneyChild: currentPageType === 'money-child'
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
		urlMappingJasaDesainFromPillarSub2,
		urlMappingJasaDesainFromSub2Sub1,
		urlMappingJasaDesainFromSub1MoneyMaster,
		urlMappingJasaDesainFromSub1MoneyPage,
		urlMappingJasaDesainInteriorFromMoneyMasterMoneyPage,
		urlMappingJasaDesainEksteriorFromMoneyMasterMoneyPage,
		
		
		urlMappingJasaKonsFromPillarSub2,
		urlMappingJasaReliefBridgeFromSub2Sub1,
       urlMappingJasaReliefBridgeFromSub1MoneyMaster,
		urlMappingJasaReliefFromMoneyMasterMoneyPage,
		urlMappingJasaReliefDindingFromMoneyPageMoneyPage1,
		urlMappingJasaReliefBatuAlamFromMoneyPageMoneyPage1,

		
		urlMappingJasaProfilBetonBridgeFromSub2Sub1,
		urlMappingJasaProfilBetonFromSub1MoneyMaster,
		urlMappingJasaProfilBetonFromMoneyMasterMoneyPage,
		urlMappingJasaProfilBetonBangunanFromMoneyPageMoneyPage1,
		urlMappingJasaProfilBetonRumahFromMoneyPage1MoneyPage2,
		
		urlMappingJasaProfilBetonEksteriorFromMoneyPageMoneyPage1,
		urlMappingJasaProfilBetonInteriorFromMoneyPageMoneyPage1,
        urlMappingHargaJasaProfilBetonFromMoneyPageMoneyPage1,
		
		urlMappingJasaEksteriorBridgeFromSub2Sub1,
		urlMappingJasaEksteriorFromSub1MoneyMaster,
		urlMappingJasaInteriorBridgeFromSub2Sub1,
		urlMappingJasaInteriorFromSub1MoneyMaster,
		urlMappingJasaKonsultanBridgeFromSub2Sub1,
		urlMappingJasaKonsultanFromSub1MoneyMaster,
		urlMappingJasaKonsultanFromMoneyMasterMoneyPage,
       urlMappingHargaJasaKonsultanFromMoneyPageMoneyPage1,
		
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
		urlMappingJasaLapanganOlahragaFromMoneyMasterMoneyPage,
		
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
		urlMappingJasaJalanPerkerasanFromMoneyMasterMoneyMaster1,
		
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
		urlMappingJasaBuangPuingFromMoneyMasterMoneyPage,
		urlMappingHargaJasaBuangPuingFromMoneyPageMoneyPage1,

		
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
		urlMappingHargaJasaKitchenSetFromMoneyPageMoneyPage1,
		
		urlMappingJasaPasangFromSub1MoneyMaster,
		urlMappingJasaPembuatanFromSub1MoneyMaster,
		urlMappingJasaPembuatanFromMoneyMasterMoneyMaster1,
		urlMappingJasaPembuatanBangunanFromMoneyMaster1MoneyPage,
		urlMappingHargaJasaPembuatanBangunanFromMoneyPageMoneyPage1,
		
		urlMappingJasaPembuatanBangunanFromMoneyMaster1MoneyMaster2,
		urlMappingJasaPembuatanRumahFromMoneyMaster2MoneyMaster3,

		
		urlMappingJasaPembuatanFurnitureFromMoneyMaster1MoneyPage,
		urlMappingJasaPasangFromMoneyMasterMoneyMaster1,
		urlMappingJasaPasangGrcFromMoneyMaster1MoneyPage,
		urlMappingJasaPasangGrcEksteriorFromMoneyPageMoneyPage1,
		urlMappingJasaPasangDindingGRCEksteriorFromMoneyPage1MoneyPage2,
		urlMappingJasaPasangGRCFasadFromMoneyPage1MoneyPage2,
		urlMappingJasaPasangPanelGRCDekoratifFromMoneyPage1MoneyPage2,
		urlMappingJasaPasangGrcInteriorFromMoneyPageMoneyPage1,
		urlMappingJasaPasangPlafonGRCFromMoneyPage1MoneyPage2,

		urlMappingJasaPasangKacaFromMoneyMaster1MoneyPage,
		urlMappingJasaPasangKacaInteriorFromMoneyPageMoneyPage1,
		urlMappingJasaPasangPartisiKacaFromMoneyPage1MoneyPage2,
		urlMappingJasaPasangRailingTanggaKacaFromMoneyPage1MoneyPage2,
		
		urlMappingJasaPasangKacaEksteriorFromMoneyPageMoneyPage1,

		urlMappingJasaPasangBatuFromMoneyMaster1MoneyPage,
		urlMappingJasaPasangBatuInteriorFromMoneyPageMoneyPage1,
		urlMappingJasaPasangBatuAlamDindingInteriorFromMoneyPage1MoneyPage2,
		urlMappingJasaPasangBatuEksteriorFromMoneyPageMoneyPage1,
		
		urlMappingJasaPasangWoodPlankFromMoneyMaster1MoneyPage,
		urlMappingJasaPasangWoodPlankEksteriorFromMoneyPageMoneyPage1,
		urlMappingJasaPasangWoodPlankInteriorFromMoneyPageMoneyPage1,
		urlMappingJasaPasangWoodPlankDindingInteriorFromMoneyPage1MoneyPage2,

		urlMappingJasaPasangHplFromMoneyMaster1MoneyPage,
		urlMappingJasaPasangHplEksteriorFromMoneyPageMoneyPage1,
       urlMappingJasaPasangHplInteriorFromMoneyPageMoneyPage1,
		urlMappingJasaPasangHPLDindingInteriorFromMoneyPage1MoneyPage2,
		urlMappingJasaPasangHPLFurnitureFromMoneyPage1MoneyPage2,
		
		urlMappingJasaPasangAcpFromMoneyMaster1MoneyPage,
		urlMappingJasaPasangACPInteriorFromMoneyPageMoneyPage1,
		urlMappingJasaPasangACPEksteriorFromMoneyPageMoneyPage1,
		urlMappingJasaLaserCuttingACPFromMoneyPageMoneyPage1,
		urlMappingHargaJasaPasangACPFromMoneyPageMoneyPage1,
		
		urlMappingJasaPasangLantaiFromMoneyMaster1MoneyPage,
		urlMappingJasaPasangDindingFromMoneyMaster1MoneyPage,
		urlMappingJasaPasangFurnitureFromMoneyMaster1MoneyPage,
		
        urlMappingInfrastrukturFromSub1MoneyMaster,
		urlMappingPerbaikanBangunanFromMoneyMasterMoneyPage,
		urlMappingRenovasiFromMoneyMasterMoneyMaster1,
		urlMappingRenovasiBangunanFromMoneyMaster1MoneyPage,
		
		urlMappingJasaSaluranDrainaseFromMoneyMasterMoneyPage,
		
		urlMappingJasaUjiTanahFromMoneyMasterMoneyMaster1,
		urlMappingBongkarBangunanFromMoneyMasterMoneyMaster1,
	
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
// 1. EVERGREEN: Halaman yang jarang berubah (authority tinggi)
const EVERGREEN_LEVELS = ['home', 'pillar', 'sub-pillar-tipe-2', 'variant', 'sub-variant'];

// 2. FLEXIBLE: Halaman yang sesekali perlu di-update
const FLEXIBLE_LEVELS = ['sub-pillar-tipe-1'];

// 3. MONEY: Halaman yang harus selalu fresh (harga, biaya, lokasi)
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
          return "2026-06-30T10:30:00+07:00";
        }
		//SUB2
        return "2026-06-30T00:00:00+07:00";
      }
      //SUB1
      if (FLEXIBLE_LEVELS.includes(pageLevel)) {
        return "2026-06-30T00:00:00+07:00";
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

if (urlMappingJasaDesainFromPillarSub2[cleanUrlJasaKons]) {
	
	   generateBreadcrumbJasaKonstruksi(
        urlMappingJasaDesainFromPillarSub2,
        cleanUrlJasaKons,
       [
            { name: 'Jasa Desain', url: 'https://www.betonjayareadymix.com/p/jasa-desain.html' }
           // { name: 'Daftar Jasa Struktur Konstruksi', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-struktur-konstruksi.html' }
        ],
        'JASA_DESAIN'
    );
}
if (urlMappingJasaDesainFromSub2Sub1[cleanUrlJasaKons]) {
	
	   generateBreadcrumbJasaKonstruksi(
        urlMappingJasaDesainFromSub2Sub1,
        cleanUrlJasaKons,
       [
            { name: 'Jasa Desain', url: 'https://www.betonjayareadymix.com/p/jasa-desain.html' },
           { name: 'Daftar Jasa Desain', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-desain.html' }
        ],
        'JASA_DESAIN'
    );
}
if (urlMappingJasaDesainFromSub1MoneyMaster[cleanUrlJasaKons]) {
	
	   generateBreadcrumbJasaKonstruksi(
        urlMappingJasaDesainFromSub1MoneyMaster,
        cleanUrlJasaKons,
       [
            { name: 'Jasa Desain', url: 'https://www.betonjayareadymix.com/p/jasa-desain.html' },
           { name: 'Daftar Jasa Desain', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-desain.html' },
           { name: 'Perbandingan Jasa Desain', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-desain.html' }
        ],
        'JASA_DESAIN'
    );
}
if (urlMappingJasaDesainFromSub1MoneyPage[cleanUrlJasaKons]) {
	
	   generateBreadcrumbJasaKonstruksi(
        urlMappingJasaDesainFromSub1MoneyPage,
        cleanUrlJasaKons,
       [
            { name: 'Jasa Desain', url: 'https://www.betonjayareadymix.com/p/jasa-desain.html' },
           { name: 'Daftar Jasa Desain', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-desain.html' },
           { name: 'Perbandingan Jasa Desain', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-desain.html' }
        ],
        'JASA_DESAIN'
    );
}
if (urlMappingJasaDesainInteriorFromMoneyMasterMoneyPage[cleanUrlJasaKons]) {
	
	   generateBreadcrumbJasaKonstruksi(
        urlMappingJasaDesainInteriorFromMoneyMasterMoneyPage,
        cleanUrlJasaKons,
       [
            { name: 'Jasa Desain', url: 'https://www.betonjayareadymix.com/p/jasa-desain.html' },
           { name: 'Daftar Jasa Desain', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-desain.html' },
           { name: 'Perbandingan Jasa Desain', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-desain.html' },
           { name: 'Jasa Desain Interior', url: 'https://www.betonjayareadymix.com/p/jasa-desain-interior.html' }
        ],
        'JASA_DESAIN'
    );
}
if (urlMappingJasaDesainEksteriorFromMoneyMasterMoneyPage[cleanUrlJasaKons]) {
	
	   generateBreadcrumbJasaKonstruksi(
        urlMappingJasaDesainEksteriorFromMoneyMasterMoneyPage,
        cleanUrlJasaKons,
       [
            { name: 'Jasa Desain', url: 'https://www.betonjayareadymix.com/p/jasa-desain.html' },
           { name: 'Daftar Jasa Desain', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-desain.html' },
           { name: 'Perbandingan Jasa Desain', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-desain.html' },
           { name: 'Jasa Desain Eksterior', url: 'https://www.betonjayareadymix.com/p/jasa-desain-eksterior.html' }
        ],
        'JASA_DESAIN'
    );
}
		
if (urlMappingJasaKonsFromPillarSub2[cleanUrlJasaKons]) {
	
	   generateBreadcrumbJasaKonstruksi(
        urlMappingJasaKonsFromPillarSub2,
        cleanUrlJasaKons,
       [
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' }
           // { name: 'Daftar Jasa Struktur Konstruksi', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-struktur-konstruksi.html' }
        ],
        'JASA_KONSTRUKSI'
    );
}
	
if (urlMappingJasaReliefBridgeFromSub2Sub1[cleanUrlJasaKons]) {
     generateBreadcrumbJasaKonstruksi(
        urlMappingJasaReliefBridgeFromSub2Sub1,
        cleanUrlJasaKons,
       [
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Relief', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-relief.html' }
	   ],
        'JASA_KONSTRUKSI'
    );
}
if (urlMappingJasaReliefBridgeFromSub1MoneyMaster[cleanUrlJasaKons]) {
     generateBreadcrumbJasaKonstruksi(
        urlMappingJasaReliefBridgeFromSub1MoneyMaster,
        cleanUrlJasaKons,
       [
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Relief', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-relief.html' },
            { name: 'Perbandingan Jasa Relief', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-relief.html' }
	   ],
        'JASA_KONSTRUKSI'
    );
}
if (urlMappingJasaReliefFromMoneyMasterMoneyPage[cleanUrlJasaKons]) {
     generateBreadcrumbJasaKonstruksi(
        urlMappingJasaReliefFromMoneyMasterMoneyPage,
        cleanUrlJasaKons,
       [
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Relief', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-relief.html' },
            { name: 'Perbandingan Jasa Relief', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-relief.html' },
            { name: 'Jasa Relief', url: 'https://www.betonjayareadymix.com/p/jasa-relief.html' }
	   ],
        'JASA_KONSTRUKSI'
    );
}
if (urlMappingJasaReliefDindingFromMoneyPageMoneyPage1[cleanUrlJasaKons]) {
     generateBreadcrumbJasaKonstruksi(
        urlMappingJasaReliefDindingFromMoneyPageMoneyPage1,
        cleanUrlJasaKons,
       [
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Relief', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-relief.html' },
            { name: 'Perbandingan Jasa Relief', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-relief.html' },
            { name: 'Jasa Relief', url: 'https://www.betonjayareadymix.com/p/jasa-relief.html' },
            { name: 'Jasa Relief Dinding', url: 'https://www.betonjayareadymix.com/p/jasa-relief-dinding.html' }
	   ],
        'JASA_KONSTRUKSI'
    );
}
if (urlMappingJasaReliefBatuAlamFromMoneyPageMoneyPage1[cleanUrlJasaKons]) {
     generateBreadcrumbJasaKonstruksi(
        urlMappingJasaReliefBatuAlamFromMoneyPageMoneyPage1,
        cleanUrlJasaKons,
       [
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Relief', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-relief.html' },
            { name: 'Perbandingan Jasa Relief', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-relief.html' },
            { name: 'Jasa Relief', url: 'https://www.betonjayareadymix.com/p/jasa-relief.html' },
            { name: 'Jasa Relief Batu Alam', url: 'https://www.betonjayareadymix.com/p/jasa-relief-batu-alam.html' }
	   ],
        'JASA_KONSTRUKSI'
    );
}	

if (urlMappingJasaProfilBetonBridgeFromSub2Sub1[cleanUrlJasaKons]) {
     generateBreadcrumbJasaKonstruksi(
        urlMappingJasaProfilBetonBridgeFromSub2Sub1,
        cleanUrlJasaKons,
       [
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Profil Beton', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-profil-beton.html' }
	   ],
        'JASA_KONSTRUKSI'
    );
   }
if (urlMappingJasaProfilBetonFromSub1MoneyMaster[cleanUrlJasaKons]) {
     generateBreadcrumbJasaKonstruksi(
        urlMappingJasaProfilBetonFromSub1MoneyMaster,
        cleanUrlJasaKons,
       [
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Profil Beton', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-profil-beton.html' },
            { name: 'Perbandingan Jasa Profil Beton', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-profil-beton.html' }
	   ],
        'JASA_KONSTRUKSI'
    );
   }
if (urlMappingJasaProfilBetonFromMoneyMasterMoneyPage[cleanUrlJasaKons]) {
     generateBreadcrumbJasaKonstruksi(
        urlMappingJasaProfilBetonFromMoneyMasterMoneyPage,
        cleanUrlJasaKons,
       [
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Profil Beton', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-profil-beton.html' },
            { name: 'Perbandingan Jasa Profil Beton', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-profil-beton.html' },
            { name: 'Jasa Profil Beton', url: 'https://www.betonjayareadymix.com/p/jasa-profil-beton.html' }
	   ],
        'JASA_KONSTRUKSI'
    );
   }
if (urlMappingJasaProfilBetonBangunanFromMoneyPageMoneyPage1[cleanUrlJasaKons]) {
     generateBreadcrumbJasaKonstruksi(
        urlMappingJasaProfilBetonBangunanFromMoneyPageMoneyPage1,
        cleanUrlJasaKons,
       [
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Profil Beton', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-profil-beton.html' },
            { name: 'Perbandingan Jasa Profil Beton', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-profil-beton.html' },
            { name: 'Jasa Profil Beton', url: 'https://www.betonjayareadymix.com/p/jasa-profil-beton.html' },
            { name: 'Jasa Profil Beton Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-profil-beton-bangunan.html' }
	   ],
        'JASA_KONSTRUKSI'
    );
   }
if (urlMappingJasaProfilBetonRumahFromMoneyPage1MoneyPage2[cleanUrlJasaKons]) {
     generateBreadcrumbJasaKonstruksi(
        urlMappingJasaProfilBetonRumahFromMoneyPage1MoneyPage2,
        cleanUrlJasaKons,
       [
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Profil Beton', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-profil-beton.html' },
            { name: 'Perbandingan Jasa Profil Beton', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-profil-beton.html' },
            { name: 'Jasa Profil Beton', url: 'https://www.betonjayareadymix.com/p/jasa-profil-beton.html' },
            { name: 'Jasa Profil Beton Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-profil-beton-bangunan.html' },
            { name: 'Jasa Profil Beton Rumah', url: 'https://www.betonjayareadymix.com/p/jasa-profil-beton-rumah.html' }
	   ],
        'JASA_KONSTRUKSI'
    );
   }
	
if (urlMappingJasaProfilBetonEksteriorFromMoneyPageMoneyPage1[cleanUrlJasaKons]) {
     generateBreadcrumbJasaKonstruksi(
        urlMappingJasaProfilBetonEksteriorFromMoneyPageMoneyPage1,
        cleanUrlJasaKons,
       [
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Profil Beton', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-profil-beton.html' },
            { name: 'Perbandingan Jasa Profil Beton', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-profil-beton.html' },
            { name: 'Jasa Profil Beton', url: 'https://www.betonjayareadymix.com/p/jasa-profil-beton.html' },
            { name: 'Jasa Profil Beton Eksterior', url: 'https://www.betonjayareadymix.com/p/jasa-profil-beton-eksterior.html' }
	   ],
        'JASA_KONSTRUKSI'
    );
   }
if (urlMappingJasaProfilBetonInteriorFromMoneyPageMoneyPage1[cleanUrlJasaKons]) {
     generateBreadcrumbJasaKonstruksi(
        urlMappingJasaProfilBetonInteriorFromMoneyPageMoneyPage1,
        cleanUrlJasaKons,
       [
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Profil Beton', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-profil-beton.html' },
            { name: 'Perbandingan Jasa Profil Beton', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-profil-beton.html' },
            { name: 'Jasa Profil Beton', url: 'https://www.betonjayareadymix.com/p/jasa-profil-beton.html' },
            { name: 'Jasa Profil Beton Interior', url: 'https://www.betonjayareadymix.com/p/jasa-profil-beton-interior.html' }
	   ],
        'JASA_KONSTRUKSI'
    );
   }
if (urlMappingHargaJasaProfilBetonFromMoneyPageMoneyPage1[cleanUrlJasaKons]) {
     generateBreadcrumbJasaKonstruksi(
        urlMappingHargaJasaProfilBetonFromMoneyPageMoneyPage1,
        cleanUrlJasaKons,
       [
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Profil Beton', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-profil-beton.html' },
            { name: 'Perbandingan Jasa Profil Beton', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-profil-beton.html' },
            { name: 'Jasa Profil Beton', url: 'https://www.betonjayareadymix.com/p/jasa-profil-beton.html' },
            { name: 'Harga Jasa Profil Beton', url: 'https://www.betonjayareadymix.com/p/harga-jasa-profil-beton.html' }
	   ],
        'JASA_KONSTRUKSI'
    );
   }


if (urlMappingJasaEksteriorBridgeFromSub2Sub1[cleanUrlJasaKons]) {
     generateBreadcrumbJasaKonstruksi(
        urlMappingJasaEksteriorBridgeFromSub2Sub1,
        cleanUrlJasaKons,
       [
           // { name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Eksterior', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-eksterior.html' }
	   ],
        'JASA_KONSTRUKSI'
    );
   }
if (urlMappingJasaEksteriorFromSub1MoneyMaster[cleanUrlJasaKons]) {
     generateBreadcrumbJasaKonstruksi(
        urlMappingJasaEksteriorFromSub1MoneyMaster,
        cleanUrlJasaKons,
       [
           // { name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Eksterior', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-eksterior.html' },
            { name: 'Perbandingan Jasa Eksterior', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-eksterior.html' }
	   ],
        'JASA_KONSTRUKSI'
    );
   }
	
if (urlMappingJasaInteriorBridgeFromSub2Sub1[cleanUrlJasaKons]) {
     generateBreadcrumbJasaKonstruksi(
        urlMappingJasaInteriorBridgeFromSub2Sub1,
        cleanUrlJasaKons,
       [
           // { name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Interior', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-interior.html' }
	   ],
        'JASA_KONSTRUKSI'
    );
   }
if (urlMappingJasaInteriorFromSub1MoneyMaster[cleanUrlJasaKons]) {
     generateBreadcrumbJasaKonstruksi(
        urlMappingJasaInteriorFromSub1MoneyMaster,
        cleanUrlJasaKons,
       [
           // { name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Interior', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-interior.html' },
            { name: 'Perbandingan Jasa Interior', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-interior.html' }
	   ],
        'JASA_KONSTRUKSI'
    );
   }
	
if (urlMappingJasaKonsultanBridgeFromSub2Sub1[cleanUrlJasaKons]) {
     generateBreadcrumbJasaKonstruksi(
        urlMappingJasaKonsultanBridgeFromSub2Sub1,
        cleanUrlJasaKons,
       [
           // { name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Konsultan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-konsultan.html' }
	   ],
        'JASA_KONSTRUKSI'
    );
   }
if (urlMappingJasaKonsultanFromSub1MoneyMaster[cleanUrlJasaKons]) {
     generateBreadcrumbJasaKonstruksi(
        urlMappingJasaKonsultanFromSub1MoneyMaster,
        cleanUrlJasaKons,
       [
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Konsultan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-konsultan.html' },
            { name: 'Perbandingan Jasa Konsultan', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-konsultan.html' }
	   ],
        'JASA_KONSTRUKSI'
    );
   }
if (urlMappingJasaKonsultanFromMoneyMasterMoneyPage[cleanUrlJasaKons]) {
     generateBreadcrumbJasaKonstruksi(
        urlMappingJasaKonsultanFromMoneyMasterMoneyPage,
        cleanUrlJasaKons,
       [
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Konsultan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-konsultan.html' },
            { name: 'Perbandingan Jasa Konsultan', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-konsultan.html' },
            { name: 'Jasa Konsultan', url: 'https://www.betonjayareadymix.com/p/jasa-konsultan.html' }

	   ],
        'JASA_KONSTRUKSI'
    );
   }
if (urlMappingHargaJasaKonsultanFromMoneyPageMoneyPage1[cleanUrlJasaKons]) {
     generateBreadcrumbJasaKonstruksi(
        urlMappingHargaJasaKonsultanFromMoneyPageMoneyPage1,
        cleanUrlJasaKons,
       [
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Konsultan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-konsultan.html' },
            { name: 'Perbandingan Jasa Konsultan', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-konsultan.html' },
            { name: 'Jasa Konsultan', url: 'https://www.betonjayareadymix.com/p/jasa-konsultan.html' },
            { name: 'Harga Jasa Konsultan', url: 'https://www.betonjayareadymix.com/p/harga-jasa-konsultan.html' }

	   ],
        'JASA_KONSTRUKSI'
    );
   }
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
            { name: 'Perbandingan Jasa Lapangan Olahraga', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-lapangan-olahraga.html' }
        ],
        'JASA_KONSTRUKSI'
    );
    }
	if (urlMappingJasaLapanganOlahragaFromMoneyMasterMoneyPage[cleanUrlJasaKons]) {
	generateBreadcrumbJasaKonstruksi(
        urlMappingJasaLapanganOlahragaFromMoneyMasterMoneyPage,
        cleanUrlJasaKons,
       [
           // { name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Lapangan Olahraga', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-lapangan-olahraga.html' },
            { name: 'Perbandingan Jasa Lapangan Olahraga', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-lapangan-olahraga.html' },
            { name: 'Jasa Lapangan Olahraga', url: 'https://www.betonjayareadymix.com/p/jasa-lapangan-olahraga.html' }
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
            { name: 'Perbandingan Jasa Renovasi', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-renovasi.html' }
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
	if (urlMappingJasaJalanPerkerasanFromMoneyMasterMoneyMaster1[cleanUrlJasaKons]) {
     	generateBreadcrumbJasaKonstruksi(
        urlMappingJasaJalanPerkerasanFromMoneyMasterMoneyMaster1,
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
	if (urlMappingJasaBuangPuingFromMoneyMasterMoneyPage[cleanUrlJasaKons]) {
      	generateBreadcrumbJasaKonstruksi(
        urlMappingJasaBuangPuingFromMoneyMasterMoneyPage,
        cleanUrlJasaKons,
       [
           // { name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Buang Puing', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-buang-puing.html' },
           { name: 'Perbandingan Jasa Buang Puing', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-buang-puing.html' },
           { name: 'Jasa Buang Puing', url: 'https://www.betonjayareadymix.com/p/jasa-buang-puing.html' }
        ],
        'JASA_KONSTRUKSI'
    );
    }	
	if (urlMappingHargaJasaBuangPuingFromMoneyPageMoneyPage1[cleanUrlJasaKons]) {
      	generateBreadcrumbJasaKonstruksi(
        urlMappingHargaJasaBuangPuingFromMoneyPageMoneyPage1,
        cleanUrlJasaKons,
       [
           // { name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Buang Puing', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-buang-puing.html' },
           { name: 'Perbandingan Jasa Buang Puing', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-buang-puing.html' },
           { name: 'Jasa Buang Puing', url: 'https://www.betonjayareadymix.com/p/jasa-buang-puing.html' },
           { name: 'Harga Jasa Buang Puing', url: 'https://www.betonjayareadymix.com/p/harga-jasa-buang-puing.html' }
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
            { name: 'Daftar Jasa Perkuatan Tanah', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-perkuatan-tanah.html' }
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
            { name: 'Daftar Jasa Perkuatan Tanah', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-perkuatan-tanah.html' },
            { name: 'Perbandingan Jasa Perkuatan Tanah', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-perkuatan-tanah.html' }
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
	
if (urlMappingJasaSaluranDrainaseFromMoneyMasterMoneyPage[cleanUrlJasaKons]) {
	   generateBreadcrumbJasaKonstruksi(
        urlMappingJasaSaluranDrainaseFromMoneyMasterMoneyPage,
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
	
   if (urlMappingJasaUjiTanahFromMoneyMasterMoneyMaster1[cleanUrlJasaKons]) {
       generateBreadcrumbJasaKonstruksi(
        urlMappingJasaUjiTanahFromMoneyMasterMoneyMaster1,
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
if (urlMappingHargaJasaKitchenSetFromMoneyPageMoneyPage1[cleanUrlJasaKons]) {

	    generateBreadcrumbJasaKonstruksi(
        urlMappingHargaJasaKitchenSetFromMoneyPageMoneyPage1,
        cleanUrlJasaKons,
        [
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Kitchen Set', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-kitchen-set.html'},
            { name: 'Perbandingan Jasa Kitchen Set', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-kitchen-set.html'},
            { name: 'Jasa Kitchen Set', url: 'https://www.betonjayareadymix.com/p/jasa-kitchen-set.html'},
            { name: 'Harga Jasa Kitchen Set', url: 'https://www.betonjayareadymix.com/p/harga-jasa-kitchen-set.html'}
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
if (urlMappingJasaPembuatanBangunanFromMoneyMaster1MoneyPage[cleanUrlJasaKons]) {

	    generateBreadcrumbJasaKonstruksi(
        urlMappingJasaPembuatanBangunanFromMoneyMaster1MoneyPage,
        cleanUrlJasaKons,
        [
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Pembuatan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-pembuatan.html'},
            { name: 'Perbandingan Jasa Pembuatan', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-pembuatan.html'},
            { name: 'Jasa Pembuatan', url: 'https://www.betonjayareadymix.com/p/jasa-pembuatan.html'},
            { name: 'Jasa Pembuatan Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-pembuatan-bangunan.html'}
        ],
        'JASA_KONSTRUKSI'
    );
}
if (urlMappingHargaJasaPembuatanBangunanFromMoneyPageMoneyPage1[cleanUrlJasaKons]) {

	    generateBreadcrumbJasaKonstruksi(
        urlMappingHargaJasaPembuatanBangunanFromMoneyPageMoneyPage1,
        cleanUrlJasaKons,
        [
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Pembuatan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-pembuatan.html'},
            { name: 'Perbandingan Jasa Pembuatan', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-pembuatan.html'},
            { name: 'Jasa Pembuatan', url: 'https://www.betonjayareadymix.com/p/jasa-pembuatan.html'},
            { name: 'Jasa Pembuatan Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-pembuatan-bangunan.html'},
            { name: 'Harga Jasa Pembuatan Bangunan', url: 'https://www.betonjayareadymix.com/p/harga-jasa-pembuatan-bangunan.html'}
        ],
        'JASA_KONSTRUKSI'
    );
}	
	
if (urlMappingJasaPembuatanBangunanFromMoneyMaster1MoneyMaster2[cleanUrlJasaKons]) {

	    generateBreadcrumbJasaKonstruksi(
        urlMappingJasaPembuatanBangunanFromMoneyMaster1MoneyMaster2,
        cleanUrlJasaKons,
        [
            //{ name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Pembuatan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-pembuatan.html'},
            { name: 'Perbandingan Jasa Pembuatan', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-pembuatan.html'},
            { name: 'Jasa Pembuatan', url: 'https://www.betonjayareadymix.com/p/jasa-pembuatan.html'},
            { name: 'Jasa Pembuatan Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-pembuatan-bangunan.html'}
        ],
        'JASA_KONSTRUKSI'
    );
}
if (urlMappingJasaPembuatanRumahFromMoneyMaster2MoneyMaster3[cleanUrlJasaKons]) {

	    generateBreadcrumbJasaKonstruksi(
        urlMappingJasaPembuatanRumahFromMoneyMaster2MoneyMaster3,
        cleanUrlJasaKons,
        [
            //{ name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Pembuatan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-pembuatan.html'},
            { name: 'Perbandingan Jasa Pembuatan', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-pembuatan.html'},
            { name: 'Jasa Pembuatan', url: 'https://www.betonjayareadymix.com/p/jasa-pembuatan.html'},
            { name: 'Jasa Pembuatan Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-pembuatan-bangunan.html'},
            { name: 'Jasa Pembuatan Rumah', url: 'https://www.betonjayareadymix.com/p/jasa-pembuatan-rumah.html'}
        ],
        'JASA_KONSTRUKSI'
    );
}
	
	
if (urlMappingJasaPembuatanFurnitureFromMoneyMaster1MoneyPage[cleanUrlJasaKons]) {
	    generateBreadcrumbJasaKonstruksi(
        urlMappingJasaPembuatanFurnitureFromMoneyMaster1MoneyPage,
        cleanUrlJasaKons,
        [
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Pembuatan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-pembuatan.html'},
            { name: 'Perbandingan Jasa Pembuatan', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-pembuatan.html'},
            { name: 'Jasa Pembuatan', url: 'https://www.betonjayareadymix.com/p/jasa-pembuatan.html'},
            { name: 'Jasa Pembuatan Furniture', url: 'https://www.betonjayareadymix.com/p/jasa-pembuatan-furniture.html'}
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

if (urlMappingJasaPasangGrcFromMoneyMaster1MoneyPage[cleanUrlJasaKons]) {

	    generateBreadcrumbJasaKonstruksi(
        urlMappingJasaPasangGrcFromMoneyMaster1MoneyPage,
        cleanUrlJasaKons,
        [
            //{ name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Pasang', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-pasang.html'},
            { name: 'Perbandingan Jasa Pasang', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-pasang.html'},
            { name: 'Jasa Pasang', url: 'https://www.betonjayareadymix.com/p/jasa-pasang.html'},
            { name: 'Jasa Pasang Grc', url: 'https://www.betonjayareadymix.com/p/jasa-pasang-grc.html'}
        ],
        'JASA_KONSTRUKSI'
    );
}
if (urlMappingJasaPasangGrcEksteriorFromMoneyPageMoneyPage1[cleanUrlJasaKons]) {

	    generateBreadcrumbJasaKonstruksi(
        urlMappingJasaPasangGrcEksteriorFromMoneyPageMoneyPage1,
        cleanUrlJasaKons,
        [
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Pasang', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-pasang.html'},
            { name: 'Perbandingan Jasa Pasang', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-pasang.html'},
            { name: 'Jasa Pasang', url: 'https://www.betonjayareadymix.com/p/jasa-pasang.html'},
            { name: 'Jasa Pasang Grc', url: 'https://www.betonjayareadymix.com/p/jasa-pasang-grc.html'},
            { name: 'Jasa Pasang Grc Eksterior', url: 'https://www.betonjayareadymix.com/p/jasa-pasang-grc-eksterior.html'}
        ],
        'JASA_KONSTRUKSI'
    );
}
if (urlMappingJasaPasangDindingGRCEksteriorFromMoneyPage1MoneyPage2[cleanUrlJasaKons]) {

	    generateBreadcrumbJasaKonstruksi(
        urlMappingJasaPasangDindingGRCEksteriorFromMoneyPage1MoneyPage2,
        cleanUrlJasaKons,
        [
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Pasang', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-pasang.html'},
            { name: 'Perbandingan Jasa Pasang', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-pasang.html'},
            { name: 'Jasa Pasang', url: 'https://www.betonjayareadymix.com/p/jasa-pasang.html'},
            { name: 'Jasa Pasang Grc', url: 'https://www.betonjayareadymix.com/p/jasa-pasang-grc.html'},
            { name: 'Jasa Pasang Grc Eksterior', url: 'https://www.betonjayareadymix.com/p/jasa-pasang-grc-eksterior.html'},
            { name: 'Jasa Pasang Dinding Grc Eksterior', url: 'https://www.betonjayareadymix.com/p/jasa-pasang-dinding-grc-eksterior.html'}
        ],
        'JASA_KONSTRUKSI'
    );
}	
if (urlMappingJasaPasangGRCFasadFromMoneyPage1MoneyPage2[cleanUrlJasaKons]) {

	    generateBreadcrumbJasaKonstruksi(
        urlMappingJasaPasangGRCFasadFromMoneyPage1MoneyPage2,
        cleanUrlJasaKons,
        [
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Pasang', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-pasang.html'},
            { name: 'Perbandingan Jasa Pasang', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-pasang.html'},
            { name: 'Jasa Pasang', url: 'https://www.betonjayareadymix.com/p/jasa-pasang.html'},
            { name: 'Jasa Pasang Grc', url: 'https://www.betonjayareadymix.com/p/jasa-pasang-grc.html'},
            { name: 'Jasa Pasang Grc Eksterior', url: 'https://www.betonjayareadymix.com/p/jasa-pasang-grc-eksterior.html'},
            { name: 'Jasa Pasang GRC Fasad', url: 'https://www.betonjayareadymix.com/p/jasa-pasang-grc-fasad.html'}
        ],
        'JASA_KONSTRUKSI'
    );
}	
if (urlMappingJasaPasangPanelGRCDekoratifFromMoneyPage1MoneyPage2[cleanUrlJasaKons]) {

	    generateBreadcrumbJasaKonstruksi(
        urlMappingJasaPasangPanelGRCDekoratifFromMoneyPage1MoneyPage2,
        cleanUrlJasaKons,
        [
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Pasang', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-pasang.html'},
            { name: 'Perbandingan Jasa Pasang', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-pasang.html'},
            { name: 'Jasa Pasang', url: 'https://www.betonjayareadymix.com/p/jasa-pasang.html'},
            { name: 'Jasa Pasang Grc', url: 'https://www.betonjayareadymix.com/p/jasa-pasang-grc.html'},
            { name: 'Jasa Pasang Grc Eksterior', url: 'https://www.betonjayareadymix.com/p/jasa-pasang-grc-eksterior.html'},
            { name: 'Jasa Pasang Panel GRC Dekoratif', url: 'https://www.betonjayareadymix.com/p/jasa-pasang-panel-grc-dekoratif.html'}
        ],
        'JASA_KONSTRUKSI'
    );
}	
if (urlMappingJasaPasangGrcInteriorFromMoneyPageMoneyPage1[cleanUrlJasaKons]) {

	    generateBreadcrumbJasaKonstruksi(
        urlMappingJasaPasangGrcInteriorFromMoneyPageMoneyPage1,
        cleanUrlJasaKons,
        [
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Pasang', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-pasang.html'},
            { name: 'Perbandingan Jasa Pasang', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-pasang.html'},
            { name: 'Jasa Pasang', url: 'https://www.betonjayareadymix.com/p/jasa-pasang.html'},
            { name: 'Jasa Pasang Grc', url: 'https://www.betonjayareadymix.com/p/jasa-pasang-grc.html'},
            { name: 'Jasa Pasang Grc Interior', url: 'https://www.betonjayareadymix.com/p/jasa-pasang-grc-interior.html'}
        ],
        'JASA_KONSTRUKSI'
    );
}	
if (urlMappingJasaPasangPlafonGRCFromMoneyPage1MoneyPage2[cleanUrlJasaKons]) {

	    generateBreadcrumbJasaKonstruksi(
        urlMappingJasaPasangPlafonGRCFromMoneyPage1MoneyPage2,
        cleanUrlJasaKons,
        [
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Pasang', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-pasang.html'},
            { name: 'Perbandingan Jasa Pasang', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-pasang.html'},
            { name: 'Jasa Pasang', url: 'https://www.betonjayareadymix.com/p/jasa-pasang.html'},
            { name: 'Jasa Pasang Grc', url: 'https://www.betonjayareadymix.com/p/jasa-pasang-grc.html'},
            { name: 'Jasa Pasang Grc Interior', url: 'https://www.betonjayareadymix.com/p/jasa-pasang-grc-interior.html'},
            { name: 'Jasa Pasang Plafon GRC', url: 'https://www.betonjayareadymix.com/p/jasa-pasang-plafon-grc.html'}
        ],
        'JASA_KONSTRUKSI'
    );
}	
	
if (urlMappingJasaPasangKacaFromMoneyMaster1MoneyPage[cleanUrlJasaKons]) {

	    generateBreadcrumbJasaKonstruksi(
        urlMappingJasaPasangKacaFromMoneyMaster1MoneyPage,
        cleanUrlJasaKons,
        [
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Pasang', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-pasang.html'},
            { name: 'Perbandingan Jasa Pasang', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-pasang.html'},
            { name: 'Jasa Pasang', url: 'https://www.betonjayareadymix.com/p/jasa-pasang.html'},
            { name: 'Jasa Pasang Kaca', url: 'https://www.betonjayareadymix.com/p/jasa-pasang-kaca.html'}
        ],
        'JASA_KONSTRUKSI'
    );
}	
if (urlMappingJasaPasangKacaInteriorFromMoneyPageMoneyPage1[cleanUrlJasaKons]) {

	    generateBreadcrumbJasaKonstruksi(
        urlMappingJasaPasangKacaInteriorFromMoneyPageMoneyPage1,
        cleanUrlJasaKons,
        [
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Pasang', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-pasang.html'},
            { name: 'Perbandingan Jasa Pasang', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-pasang.html'},
            { name: 'Jasa Pasang', url: 'https://www.betonjayareadymix.com/p/jasa-pasang.html'},
            { name: 'Jasa Pasang Kaca', url: 'https://www.betonjayareadymix.com/p/jasa-pasang-kaca.html'},
            { name: 'Jasa Pasang Kaca Interior', url: 'https://www.betonjayareadymix.com/p/jasa-pasang-kaca-interior.html'}
        ],
        'JASA_KONSTRUKSI'
    );
}
if (urlMappingJasaPasangPartisiKacaFromMoneyPage1MoneyPage2[cleanUrlJasaKons]) {

	    generateBreadcrumbJasaKonstruksi(
        urlMappingJasaPasangPartisiKacaFromMoneyPage1MoneyPage2,
        cleanUrlJasaKons,
        [
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Pasang', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-pasang.html'},
            { name: 'Perbandingan Jasa Pasang', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-pasang.html'},
            { name: 'Jasa Pasang', url: 'https://www.betonjayareadymix.com/p/jasa-pasang.html'},
            { name: 'Jasa Pasang Kaca', url: 'https://www.betonjayareadymix.com/p/jasa-pasang-kaca.html'},
            { name: 'Jasa Pasang Kaca Interior', url: 'https://www.betonjayareadymix.com/p/jasa-pasang-kaca-interior.html'},
            { name: 'Jasa Pasang Partisi Kaca', url: 'https://www.betonjayareadymix.com/p/jasa-pasang-partisi-kaca.html'}
        ],
        'JASA_KONSTRUKSI'
    );
}
if (urlMappingJasaPasangRailingTanggaKacaFromMoneyPage1MoneyPage2[cleanUrlJasaKons]) {

	    generateBreadcrumbJasaKonstruksi(
        urlMappingJasaPasangRailingTanggaKacaFromMoneyPage1MoneyPage2,
        cleanUrlJasaKons,
        [
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Pasang', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-pasang.html'},
            { name: 'Perbandingan Jasa Pasang', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-pasang.html'},
            { name: 'Jasa Pasang', url: 'https://www.betonjayareadymix.com/p/jasa-pasang.html'},
            { name: 'Jasa Pasang Kaca', url: 'https://www.betonjayareadymix.com/p/jasa-pasang-kaca.html'},
            { name: 'Jasa Pasang Kaca Interior', url: 'https://www.betonjayareadymix.com/p/jasa-pasang-kaca-interior.html'},
            { name: 'Jasa Pasang Railing Tangga Kaca', url: 'https://www.betonjayareadymix.com/p/jasa-pasang-railing-tangga-kaca.html'}
        ],
        'JASA_KONSTRUKSI'
    );
}	
if (urlMappingJasaPasangKacaEksteriorFromMoneyPageMoneyPage1[cleanUrlJasaKons]) {

	    generateBreadcrumbJasaKonstruksi(
        urlMappingJasaPasangKacaEksteriorFromMoneyPageMoneyPage1,
        cleanUrlJasaKons,
        [
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Pasang', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-pasang.html'},
            { name: 'Perbandingan Jasa Pasang', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-pasang.html'},
            { name: 'Jasa Pasang', url: 'https://www.betonjayareadymix.com/p/jasa-pasang.html'},
            { name: 'Jasa Pasang Kaca', url: 'https://www.betonjayareadymix.com/p/jasa-pasang-kaca.html'},
            { name: 'Jasa Pasang Kaca Eksterior', url: 'https://www.betonjayareadymix.com/p/jasa-pasang-kaca-eksterior.html'}
        ],
        'JASA_KONSTRUKSI'
    );
}
	
if (urlMappingJasaPasangBatuFromMoneyMaster1MoneyPage[cleanUrlJasaKons]) {

	    generateBreadcrumbJasaKonstruksi(
        urlMappingJasaPasangBatuFromMoneyMaster1MoneyPage,
        cleanUrlJasaKons,
        [
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Pasang', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-pasang.html'},
            { name: 'Perbandingan Jasa Pasang', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-pasang.html'},
            { name: 'Jasa Pasang', url: 'https://www.betonjayareadymix.com/p/jasa-pasang.html'},
            { name: 'Jasa Pasang Batu', url: 'https://www.betonjayareadymix.com/p/jasa-pasang-batu.html'}
        ],
        'JASA_KONSTRUKSI'
    );
}	
if (urlMappingJasaPasangBatuInteriorFromMoneyPageMoneyPage1[cleanUrlJasaKons]) {

	    generateBreadcrumbJasaKonstruksi(
        urlMappingJasaPasangBatuInteriorFromMoneyPageMoneyPage1,
        cleanUrlJasaKons,
        [
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Pasang', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-pasang.html'},
            { name: 'Perbandingan Jasa Pasang', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-pasang.html'},
            { name: 'Jasa Pasang', url: 'https://www.betonjayareadymix.com/p/jasa-pasang.html'},
            { name: 'Jasa Pasang Batu', url: 'https://www.betonjayareadymix.com/p/jasa-pasang-batu.html'},
            { name: 'Jasa Pasang Batu Interior', url: 'https://www.betonjayareadymix.com/p/jasa-pasang-batu-interior.html'}
        ],
        'JASA_KONSTRUKSI'
    );
}		
if (urlMappingJasaPasangBatuAlamDindingInteriorFromMoneyPage1MoneyPage2[cleanUrlJasaKons]) {

	    generateBreadcrumbJasaKonstruksi(
        urlMappingJasaPasangBatuAlamDindingInteriorFromMoneyPage1MoneyPage2,
        cleanUrlJasaKons,
        [
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Pasang', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-pasang.html'},
            { name: 'Perbandingan Jasa Pasang', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-pasang.html'},
            { name: 'Jasa Pasang', url: 'https://www.betonjayareadymix.com/p/jasa-pasang.html'},
            { name: 'Jasa Pasang Batu', url: 'https://www.betonjayareadymix.com/p/jasa-pasang-batu.html'},
            { name: 'Jasa Pasang Batu Interior', url: 'https://www.betonjayareadymix.com/p/jasa-pasang-batu-interior.html'},
            { name: 'Jasa Pasang Batu Alam Dinding Interior', url: 'https://www.betonjayareadymix.com/p/jasa-pasang-batu-alam-dinding-interior.html'}
        ],
        'JASA_KONSTRUKSI'
    );
}
if (urlMappingJasaPasangBatuEksteriorFromMoneyPageMoneyPage1[cleanUrlJasaKons]) {

	    generateBreadcrumbJasaKonstruksi(
        urlMappingJasaPasangBatuEksteriorFromMoneyPageMoneyPage1,
        cleanUrlJasaKons,
        [
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Pasang', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-pasang.html'},
            { name: 'Perbandingan Jasa Pasang', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-pasang.html'},
            { name: 'Jasa Pasang', url: 'https://www.betonjayareadymix.com/p/jasa-pasang.html'},
            { name: 'Jasa Pasang Batu', url: 'https://www.betonjayareadymix.com/p/jasa-pasang-batu.html'},
            { name: 'Jasa Pasang Batu Eksterior', url: 'https://www.betonjayareadymix.com/p/jasa-pasang-batu-eksterior.html'}
        ],
        'JASA_KONSTRUKSI'
    );
}	

if (urlMappingJasaPasangWoodPlankFromMoneyMaster1MoneyPage[cleanUrlJasaKons]) {

	    generateBreadcrumbJasaKonstruksi(
        urlMappingJasaPasangWoodPlankFromMoneyMaster1MoneyPage,
        cleanUrlJasaKons,
        [
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Pasang', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-pasang.html'},
            { name: 'Perbandingan Jasa Pasang', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-pasang.html'},
            { name: 'Jasa Pasang', url: 'https://www.betonjayareadymix.com/p/jasa-pasang.html'},
            { name: 'Jasa Pasang Wood Plank', url: 'https://www.betonjayareadymix.com/p/jasa-pasang-wood-plank.html'}
        ],
        'JASA_KONSTRUKSI'
    );
}	
if (urlMappingJasaPasangWoodPlankEksteriorFromMoneyPageMoneyPage1[cleanUrlJasaKons]) {

	    generateBreadcrumbJasaKonstruksi(
        urlMappingJasaPasangWoodPlankEksteriorFromMoneyPageMoneyPage1,
        cleanUrlJasaKons,
        [
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Pasang', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-pasang.html'},
            { name: 'Perbandingan Jasa Pasang', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-pasang.html'},
            { name: 'Jasa Pasang', url: 'https://www.betonjayareadymix.com/p/jasa-pasang.html'},
            { name: 'Jasa Pasang Wood Plank', url: 'https://www.betonjayareadymix.com/p/jasa-pasang-wood-plank.html'},
            { name: 'Jasa Pasang Wood Plank Eksterior', url: 'https://www.betonjayareadymix.com/p/jasa-pasang-wood-plank-eksterior.html'}
        ],
        'JASA_KONSTRUKSI'
    );
}	
if (urlMappingJasaPasangWoodPlankInteriorFromMoneyPageMoneyPage1[cleanUrlJasaKons]) {

	    generateBreadcrumbJasaKonstruksi(
        urlMappingJasaPasangWoodPlankInteriorFromMoneyPageMoneyPage1,
        cleanUrlJasaKons,
        [
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Pasang', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-pasang.html'},
            { name: 'Perbandingan Jasa Pasang', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-pasang.html'},
            { name: 'Jasa Pasang', url: 'https://www.betonjayareadymix.com/p/jasa-pasang.html'},
            { name: 'Jasa Pasang Wood Plank', url: 'https://www.betonjayareadymix.com/p/jasa-pasang-wood-plank.html'},
            { name: 'Jasa Pasang Wood Plank Interior', url: 'https://www.betonjayareadymix.com/p/jasa-pasang-wood-plank-interior.html'}
        ],
        'JASA_KONSTRUKSI'
    );
}	
if (urlMappingJasaPasangWoodPlankDindingInteriorFromMoneyPage1MoneyPage2[cleanUrlJasaKons]) {

	    generateBreadcrumbJasaKonstruksi(
        urlMappingJasaPasangWoodPlankDindingInteriorFromMoneyPage1MoneyPage2,
        cleanUrlJasaKons,
        [
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Pasang', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-pasang.html'},
            { name: 'Perbandingan Jasa Pasang', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-pasang.html'},
            { name: 'Jasa Pasang', url: 'https://www.betonjayareadymix.com/p/jasa-pasang.html'},
            { name: 'Jasa Pasang Wood Plank', url: 'https://www.betonjayareadymix.com/p/jasa-pasang-wood-plank.html'},
            { name: 'Jasa Pasang Wood Plank Interior', url: 'https://www.betonjayareadymix.com/p/jasa-pasang-wood-plank-interior.html'},
            { name: 'Jasa Pasang Wood Plank Dinding Interior', url: 'https://www.betonjayareadymix.com/p/jasa-pasang-wood-plank-dinding-interior.html'}
        ],
        'JASA_KONSTRUKSI'
    );
}	
	
if (urlMappingJasaPasangHplFromMoneyMaster1MoneyPage[cleanUrlJasaKons]) {

	    generateBreadcrumbJasaKonstruksi(
        urlMappingJasaPasangHplFromMoneyMaster1MoneyPage,
        cleanUrlJasaKons,
        [
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Pasang', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-pasang.html'},
            { name: 'Perbandingan Jasa Pasang', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-pasang.html'},
            { name: 'Jasa Pasang', url: 'https://www.betonjayareadymix.com/p/jasa-pasang.html'},
            { name: 'Jasa Pasang Hpl', url: 'https://www.betonjayareadymix.com/p/jasa-pasang-hpl.html'}
        ],
        'JASA_KONSTRUKSI'
    );
}
if (urlMappingJasaPasangHplEksteriorFromMoneyPageMoneyPage1[cleanUrlJasaKons]) {

	    generateBreadcrumbJasaKonstruksi(
        urlMappingJasaPasangHplEksteriorFromMoneyPageMoneyPage1,
        cleanUrlJasaKons,
        [
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Pasang', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-pasang.html'},
            { name: 'Perbandingan Jasa Pasang', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-pasang.html'},
            { name: 'Jasa Pasang', url: 'https://www.betonjayareadymix.com/p/jasa-pasang.html'},
            { name: 'Jasa Pasang Hpl', url: 'https://www.betonjayareadymix.com/p/jasa-pasang-hpl.html'},
            { name: 'Jasa Pasang Hpl Eksterior', url: 'https://www.betonjayareadymix.com/p/jasa-pasang-hpl-eksterior.html'}
        ],
        'JASA_KONSTRUKSI'
    );
}	
if (urlMappingJasaPasangHplInteriorFromMoneyPageMoneyPage1[cleanUrlJasaKons]) {

	    generateBreadcrumbJasaKonstruksi(
        urlMappingJasaPasangHplInteriorFromMoneyPageMoneyPage1,
        cleanUrlJasaKons,
        [
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Pasang', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-pasang.html'},
            { name: 'Perbandingan Jasa Pasang', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-pasang.html'},
            { name: 'Jasa Pasang', url: 'https://www.betonjayareadymix.com/p/jasa-pasang.html'},
            { name: 'Jasa Pasang Hpl', url: 'https://www.betonjayareadymix.com/p/jasa-pasang-hpl.html'},
            { name: 'Jasa Pasang Hpl Interior', url: 'https://www.betonjayareadymix.com/p/jasa-pasang-hpl-interior.html'}
        ],
        'JASA_KONSTRUKSI'
    );
}	
if (urlMappingJasaPasangHPLDindingInteriorFromMoneyPage1MoneyPage2[cleanUrlJasaKons]) {

	    generateBreadcrumbJasaKonstruksi(
        urlMappingJasaPasangHPLDindingInteriorFromMoneyPage1MoneyPage2,
        cleanUrlJasaKons,
        [
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Pasang', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-pasang.html'},
            { name: 'Perbandingan Jasa Pasang', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-pasang.html'},
            { name: 'Jasa Pasang', url: 'https://www.betonjayareadymix.com/p/jasa-pasang.html'},
            { name: 'Jasa Pasang Hpl', url: 'https://www.betonjayareadymix.com/p/jasa-pasang-hpl.html'},
            { name: 'Jasa Pasang Hpl Interior', url: 'https://www.betonjayareadymix.com/p/jasa-pasang-hpl-interior.html'},
            { name: 'Jasa Pasang Hpl Dinding Interior', url: 'https://www.betonjayareadymix.com/p/jasa-pasang-hpl-dinding-interior.html'}
        ],
        'JASA_KONSTRUKSI'
    );
}	
if (urlMappingJasaPasangHPLFurnitureFromMoneyPage1MoneyPage2[cleanUrlJasaKons]) {

	    generateBreadcrumbJasaKonstruksi(
        urlMappingJasaPasangHPLFurnitureFromMoneyPage1MoneyPage2,
        cleanUrlJasaKons,
        [
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Pasang', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-pasang.html'},
            { name: 'Perbandingan Jasa Pasang', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-pasang.html'},
            { name: 'Jasa Pasang', url: 'https://www.betonjayareadymix.com/p/jasa-pasang.html'},
            { name: 'Jasa Pasang Hpl', url: 'https://www.betonjayareadymix.com/p/jasa-pasang-hpl.html'},
            { name: 'Jasa Pasang Hpl Interior', url: 'https://www.betonjayareadymix.com/p/jasa-pasang-hpl-interior.html'},
            { name: 'Jasa Pasang Hpl Furniture', url: 'https://www.betonjayareadymix.com/p/jasa-pasang-hpl-furniture.html'}
        ],
        'JASA_KONSTRUKSI'
    );
}	
	
if (urlMappingJasaPasangAcpFromMoneyMaster1MoneyPage[cleanUrlJasaKons]) {

	    generateBreadcrumbJasaKonstruksi(
        urlMappingJasaPasangAcpFromMoneyMaster1MoneyPage,
        cleanUrlJasaKons,
        [
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Pasang', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-pasang.html'},
            { name: 'Perbandingan Jasa Pasang', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-pasang.html'},
            { name: 'Jasa Pasang', url: 'https://www.betonjayareadymix.com/p/jasa-pasang.html'},
            { name: 'Jasa Pasang Acp', url: 'https://www.betonjayareadymix.com/p/jasa-pasang-acp.html'}
        ],
        'JASA_KONSTRUKSI'
    );
}
	
if (urlMappingJasaPasangACPInteriorFromMoneyPageMoneyPage1[cleanUrlJasaKons]) {

	    generateBreadcrumbJasaKonstruksi(
        urlMappingJasaPasangACPInteriorFromMoneyPageMoneyPage1,
        cleanUrlJasaKons,
        [
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Pasang', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-pasang.html'},
            { name: 'Perbandingan Jasa Pasang', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-pasang.html'},
            { name: 'Jasa Pasang', url: 'https://www.betonjayareadymix.com/p/jasa-pasang.html'},
            { name: 'Jasa Pasang Acp', url: 'https://www.betonjayareadymix.com/p/jasa-pasang-acp.html'},
            { name: 'Jasa Pasang ACP Interior', url: 'https://www.betonjayareadymix.com/p/jasa-pasang-acp-interior.html'}
        ],
        'JASA_KONSTRUKSI'
    );
}	
if (urlMappingJasaPasangACPEksteriorFromMoneyPageMoneyPage1[cleanUrlJasaKons]) {

	    generateBreadcrumbJasaKonstruksi(
        urlMappingJasaPasangACPEksteriorFromMoneyPageMoneyPage1,
        cleanUrlJasaKons,
        [
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Pasang', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-pasang.html'},
            { name: 'Perbandingan Jasa Pasang', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-pasang.html'},
            { name: 'Jasa Pasang', url: 'https://www.betonjayareadymix.com/p/jasa-pasang.html'},
            { name: 'Jasa Pasang Acp', url: 'https://www.betonjayareadymix.com/p/jasa-pasang-acp.html'},
            { name: 'Jasa Pasang ACP Eksterior', url: 'https://www.betonjayareadymix.com/p/jasa-pasang-acp-eksterior.html'}
        ],
        'JASA_KONSTRUKSI'
    );
}
if (urlMappingJasaLaserCuttingACPFromMoneyPageMoneyPage1[cleanUrlJasaKons]) {

	    generateBreadcrumbJasaKonstruksi(
        urlMappingJasaLaserCuttingACPFromMoneyPageMoneyPage1,
        cleanUrlJasaKons,
        [
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Pasang', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-pasang.html'},
            { name: 'Perbandingan Jasa Pasang', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-pasang.html'},
            { name: 'Jasa Pasang', url: 'https://www.betonjayareadymix.com/p/jasa-pasang.html'},
            { name: 'Jasa Pasang Acp', url: 'https://www.betonjayareadymix.com/p/jasa-pasang-acp.html'},
            { name: 'Jasa Laser Cutting Acp', url: 'https://www.betonjayareadymix.com/p/jasa-laser-cutting-acp.html'}
        ],
        'JASA_KONSTRUKSI'
    );
}
if (urlMappingHargaJasaPasangACPFromMoneyPageMoneyPage1[cleanUrlJasaKons]) {

	    generateBreadcrumbJasaKonstruksi(
        urlMappingHargaJasaPasangACPFromMoneyPageMoneyPage1,
        cleanUrlJasaKons,
        [
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Pasang', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-pasang.html'},
            { name: 'Perbandingan Jasa Pasang', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-pasang.html'},
            { name: 'Jasa Pasang', url: 'https://www.betonjayareadymix.com/p/jasa-pasang.html'},
            { name: 'Jasa Pasang Acp', url: 'https://www.betonjayareadymix.com/p/jasa-pasang-acp.html'},
            { name: 'Harga Jasa Pasang Acp', url: 'https://www.betonjayareadymix.com/p/harga-jasa-pasang-acp.html'}
        ],
        'JASA_KONSTRUKSI'
    );
}

if (urlMappingJasaPasangLantaiFromMoneyMaster1MoneyPage[cleanUrlJasaKons]) {

	    generateBreadcrumbJasaKonstruksi(
        urlMappingJasaPasangLantaiFromMoneyMaster1MoneyPage,
        cleanUrlJasaKons,
        [
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Pasang', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-pasang.html'},
            { name: 'Perbandingan Jasa Pasang', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-pasang.html'},
            { name: 'Jasa Pasang', url: 'https://www.betonjayareadymix.com/p/jasa-pasang.html'},
            { name: 'Jasa Pasang Lantai', url: 'https://www.betonjayareadymix.com/p/jasa-pasang-lantai.html'}
        ],
        'JASA_KONSTRUKSI'
    );
}
if (urlMappingJasaPasangDindingFromMoneyMaster1MoneyPage[cleanUrlJasaKons]) {

	    generateBreadcrumbJasaKonstruksi(
        urlMappingJasaPasangDindingFromMoneyMaster1MoneyPage,
        cleanUrlJasaKons,
        [
            //{ name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Pasang', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-pasang.html'},
            { name: 'Perbandingan Jasa Pasang', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-pasang.html'},
            { name: 'Jasa Pasang', url: 'https://www.betonjayareadymix.com/p/jasa-pasang.html'},
            { name: 'Jasa Pasang Dinding', url: 'https://www.betonjayareadymix.com/p/jasa-pasang-dinding.html'}
        ],
        'JASA_KONSTRUKSI'
    );
}

if (urlMappingJasaPasangFurnitureFromMoneyMaster1MoneyPage[cleanUrlJasaKons]) {

	    generateBreadcrumbJasaKonstruksi(
        urlMappingJasaPasangFurnitureFromMoneyMaster1MoneyPage,
        cleanUrlJasaKons,
        [
            //{ name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Pasang', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-pasang.html'},
            { name: 'Perbandingan Jasa Pasang', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-pasang.html'},
            { name: 'Jasa Pasang', url: 'https://www.betonjayareadymix.com/p/jasa-pasang.html'},
            { name: 'Jasa Pasang Furniture', url: 'https://www.betonjayareadymix.com/p/jasa-pasang-furniture.html'}
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
            { name: 'Perbandingan Jasa Perbaikan Infrastruktur', url: 'https://www.betonjayareadymix.com/p/perbandingan-perbaikan-infrastruktur.html'}
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
            { name: 'Perbandingan Jasa Perbaikan Infrastruktur', url: 'https://www.betonjayareadymix.com/p/perbandingan-perbaikan-infrastruktur.html'},
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
            { name: 'Perbandingan Jasa Perbaikan Infrastruktur', url: 'https://www.betonjayareadymix.com/p/perbandingan-perbaikan-infrastruktur.html'},
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
       	generateBreadcrumbJasaKonstruksi(
        urlMappingJasaInstalasiListrikFromSub1MoneyPage,
        cleanUrlJasaKons,
       [
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Instalasi Listrik', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-instalasi-listrik.html' },
            { name: 'Perbandingan Jasa Instalasi Listrik', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-instalasi-listrik.html' }
        ],
        'JASA_KONSTRUKSI'
    );
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
