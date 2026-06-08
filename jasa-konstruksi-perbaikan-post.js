/*
JASA PERBAIKAN STRUKTUR (SUB2 - /p/jasa-perbaikan-struktur.html)
│
├── [VARIANT] Jasa Perbaikan Struktur Beton
│   │
│   ├── [SUB1] - BERDASARKAN JENIS KERUSAKAN/METODE (edukasi, pre-commercial)
│   │   🧠 SEO NOTE: Halaman ini berisi panduan teknis, metode perbaikan, edukasi
│   │   Breadcrumb: Home > Jasa Perbaikan Struktur > Jasa Perbaikan Struktur Beton > [Nama Halaman]
│   │
│   └── [MONEY_CHILD] - BERDASARKAN LOKASI (transaksional)
│       🧠 SEO NOTE: Halaman ini fokus ke harga & layanan per lokasi
│       Breadcrumb: Home > Jasa Perbaikan Struktur > Jasa Perbaikan Struktur Beton > [Nama Halaman]
│
└── (VARIANT lainnya)
*/

// ============================================================
// 🔍 ENTITY TYPE: JASA (Perbaikan Struktur Beton)
// ATURAN: JASA TIDAK BOLEH MENGGUNAKAN MONEY_MASTER
// ✅ Gunakan: MONEY_PAGE (Komersial 60% + Transaksional 40%)
// ✅ Gunakan: MONEY_CHILD (spesifik lokasi)
// ✅ Gunakan: SUB1 (bridge / edukasi)
// ============================================================

// ============================================================
// JASA PERBAIKAN STRUKTUR BETON - LENGKAP
// ============================================================
// 🧠 SEO NOTE: Semua halaman di bawah Jasa Perbaikan Struktur Beton
// Parent: Jasa Perbaikan Struktur Beton (/p/jasa-perbaikan-struktur-beton.html)
// ENTITY: JASA → TYPE: SUB1, MONEY_PAGE, MONEY_CHILD (BUKAN MONEY_MASTER)
// ============================================================

const urlMappingJasaPerbaikanStrukturBetonFromMoneyPage1MoneyPage2  = {
  // ============================================================
  // [SUB1] - BERDASARKAN JENIS KERUSAKAN / METODE
  // 🧠 TYPE: SUB1 (WAJIB tampil, bridge ke MONEY_PAGE)
  // 🧠 INTENT: Informasional (70%) + Komersial (30%)
  // ============================================================
  
  // Jenis Kerusakan
  "https://www.betonjayareadymix.com/2018/09/jasa-perbaikan-retak-struktural-beton.html": "Jasa Perbaikan Retak Struktural Beton",  // TYPE: SUB1
  "https://www.betonjayareadymix.com/2018/09/jasa-perbaikan-beton-delaminasi.html": "Jasa Perbaikan Beton Delaminasi",  // TYPE: SUB1
  "https://www.betonjayareadymix.com/2018/09/jasa-perbaikan-beton-mengelupas.html": "Jasa Perbaikan Beton Mengelupas",  // TYPE: SUB1
  
  // Penyebab Kerusakan
  "https://www.betonjayareadymix.com/2018/09/jasa-perbaikan-beton-akibat-korosi.html": "Jasa Perbaikan Beton Akibat Korosi",  // TYPE: SUB1
  "https://www.betonjayareadymix.com/2018/09/jasa-perbaikan-beton-akibat-overload.html": "Jasa Perbaikan Beton Akibat Overload",  // TYPE: SUB1
  "https://www.betonjayareadymix.com/2018/09/jasa-perbaikan-beton-akibat-asr.html": "Jasa Perbaikan Beton Akibat ASR",  // TYPE: SUB1
  "https://www.betonjayareadymix.com/2018/09/jasa-perbaikan-beton-serangan-sulfat.html": "Jasa Perbaikan Beton Akibat Serangan Sulfat",  // TYPE: SUB1
  
  // Metode & Pendekatan
  "https://www.betonjayareadymix.com/2018/09/jasa-rehabilitasi-struktur-beton-lama.html": "Jasa Rehabilitasi Struktur Beton Lama",  // TYPE: SUB1
  "https://www.betonjayareadymix.com/2018/09/jasa-retrofit-struktur-beton-eksisting.html": "Jasa Retrofit Struktur Beton Eksisting",  // TYPE: SUB1
  "https://www.betonjayareadymix.com/2018/09/jasa-peningkatan-kapasitas-struktur-beton.html": "Jasa Peningkatan Kapasitas Struktur Beton",  // TYPE: SUB1
  "https://www.betonjayareadymix.com/2018/09/jasa-perpanjangan-umur-struktur-beton.html": "Jasa Perpanjangan Umur Struktur Beton",  // TYPE: SUB1
  
  // Kondisi Khusus
  "https://www.betonjayareadymix.com/2018/09/jasa-perbaikan-beton-area-pesisir.html": "Jasa Perbaikan Beton Area Pesisir",  // TYPE: SUB1
  "https://www.betonjayareadymix.com/2018/09/jasa-perbaikan-beton-area-industri.html": "Jasa Perbaikan Beton Area Industri"  // TYPE: SUB1

};
const urlMappingJasaPerbaikanStrukturBetonFromMoneyPage1MoneyChild  = {
   // ============================================================
  // [MONEY_CHILD] - BERDASARKAN LOKASI
  // 🧠 TYPE: MONEY_CHILD (WAJIB tampil, parent: SUB1)
  // 🧠 INTENT: Komersial (60%) + Transaksional (40%)
  // ============================================================
  
  // Jabodetabek
  "https://www.betonjayareadymix.com/2018/09/jasa-perbaikan-struktur-beton-jakarta.html": "Jasa Perbaikan Struktur Beton Jakarta",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/09/jasa-perbaikan-struktur-beton-bogor.html": "Jasa Perbaikan Struktur Beton Bogor",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/09/jasa-perbaikan-struktur-beton-depok.html": "Jasa Perbaikan Struktur Beton Depok",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/09/jasa-perbaikan-struktur-beton-tangerang.html": "Jasa Perbaikan Struktur Beton Tangerang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/09/jasa-perbaikan-struktur-beton-bekasi.html": "Jasa Perbaikan Struktur Beton Bekasi",  // TYPE: MONEY_CHILD
  
  // Jawa Barat
  "https://www.betonjayareadymix.com/2018/09/jasa-perbaikan-struktur-beton-karawang.html": "Jasa Perbaikan Struktur Beton Karawang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/09/jasa-perbaikan-struktur-beton-bandung.html": "Jasa Perbaikan Struktur Beton Bandung"  // TYPE: MONEY_CHILD

};
//Akhir Sub JasaPerbaikanStrukturBeton

// ============================================================
// JASA PERBAIKAN KOLOM & BALOK
// Parent: Jasa Perbaikan Struktur Beton (/p/jasa-perbaikan-struktur-beton.html)
// ENTITY: JASA → TYPE: MONEY_PAGE (BUKAN MONEY_MASTER)
// ============================================================
// ============================================================
// [MONEY_PAGE] - JASA PERBAIKAN STRUKTUR KOLOM BETON
// 🧠 TYPE: MONEY_PAGE (WAJIB tampil, transaksional)
// 📌 STATUS: SUDAH ADA
// ============================================================

const urlMappingJasaPerbaikanStrukturKolomBetonFromMoneyPage2MoneyChild = {
  // "https://www.betonjayareadymix.com/p/jasa-perbaikan-struktur-kolom-beton.html": "Jasa Perbaikan Struktur Kolom Beton",  // TYPE: MONEY_PAGE
  // "https://www.betonjayareadymix.com/2019/08/harga-perbaikan-struktur-kolom-beton.html": "Harga Perbaikan Struktur Kolom Beton" 

	 // "https://www.betonjayareadymix.com/2019/08/jasa-perbaikan-struktur-kolom-beton-jakarta.html": "Harga Perbaikan Struktur Kolom Beton Jakarta"  // TYPE: MONEY_CHILD
};

// ============================================================
// [MONEY_PAGE] - JASA PERBAIKAN STRUKTUR BALOK BETON
// 🧠 TYPE: MONEY_PAGE (WAJIB tampil, transaksional)
// 📌 STATUS: SUDAH ADA
// ============================================================

const urlMappingJasaPerbaikanStrukturBalokBetonFromMoneyPage2MoneyChild = {
  // "https://www.betonjayareadymix.com/p/jasa-perbaikan-struktur-balok-beton.html": "Jasa Perbaikan Struktur Balok Beton",  // TYPE: MONEY_PAGE
  // "https://www.betonjayareadymix.com/2019/08/harga-perbaikan-struktur-balok-beton.html": "Harga Perbaikan Struktur Balok Beton" 

// "https://www.betonjayareadymix.com/2019/08/jasa-perbaikan-struktur-balok-beton-jakarta.html": "Harga Perbaikan Struktur Balok Beton Jakarta"  // TYPE: MONEY_CHILD

};

// ============================================================
// [MONEY_PAGE] - JASA PERKUATAN KOLOM BETON
// 🧠 TYPE: MONEY_PAGE (WAJIB tampil, transaksional)
// 📌 STATUS: SUDAH ADA
// ============================================================

const urlMappingJasaPerkuatanKolomBetonFromMoneyPage2MoneyChild  = {
  // "https://www.betonjayareadymix.com/p/jasa-perkuatan-kolom-beton.html": "Jasa Perkuatan Kolom Beton",  // TYPE: MONEY_PAGE
  // "https://www.betonjayareadymix.com/2019/08/harga-perkuatan-kolom-beton.html": "Harga Perkuatan Kolom Beton"  


  // "https://www.betonjayareadymix.com/2019/08/jasa-perkuatan-kolom-beton-jakarta.html": "Jasa Perkuatan Kolom Beton Jakarta"  // TYPE: MONEY_CHILD
};

// ============================================================
// [MONEY_PAGE] - JASA PERKUATAN BALOK BETON
// 🧠 TYPE: MONEY_PAGE (WAJIB tampil, transaksional)
// 📌 STATUS: SUDAH ADA
// ============================================================

const urlMappingJasaPerkuatanBalokBetonFromMoneyPage2MoneyChild = {
  // "https://www.betonjayareadymix.com/p/jasa-perkuatan-balok-beton.html": "Jasa Perkuatan Balok Beton",  // TYPE: MONEY_PAGE
  // "https://www.betonjayareadymix.com/2019/08/harga-perkuatan-balok-beton.html": "Harga Perkuatan Balok Beton" 

  
  // "https://www.betonjayareadymix.com/2019/08/jasa-perkuatan-balok-beton-jakarta.html": "Jasa Perkuatan Balok Beton Jakarta"  // TYPE: MONEY_CHILD

};

// ============================================================
// [MONEY_PAGE] - JASA JACKETING KOLOM BALOK
// 🧠 TYPE: MONEY_PAGE (WAJIB tampil, transaksional)
// 📌 STATUS: SUDAH ADA
// ============================================================

const urlMappingJasaJacketingKolomBalokFromMoneyPage2MoneyChild = {
  // "https://www.betonjayareadymix.com/p/jasa-jacketing-kolom-balok.html": "Jasa Jacketing Kolom Balok",  // TYPE: MONEY_PAGE
  // "https://www.betonjayareadymix.com/2019/08/harga-jacketing-kolom-balok.html": "Harga Jacketing Kolom Balok"  
  // "https://www.betonjayareadymix.com/2019/08/jasa-jacketing-kolom-balok-jakarta.html": "Jasa Jacketing Kolom Balok Jakarta"  // TYPE: MONEY_CHILD
};

// ============================================================
// [MONEY_PAGE] - JASA PERBAIKAN BALOK GANTUNG
// 🧠 TYPE: MONEY_PAGE (WAJIB tampil, transaksional)
// 📌 STATUS: SUDAH ADA
// ============================================================

const urlMappingPerbaikanBalokGantungFromMoneyPage2MoneyChild  = {
  // "https://www.betonjayareadymix.com/p/jasa-perbaikan-balok-gantung.html": "Jasa Perbaikan Balok Gantung",  // TYPE: MONEY_PAGE
  // "https://www.betonjayareadymix.com/2019/08/harga-perbaikan-balok-gantung.html": "Harga Perbaikan Balok Gantung"  // TYPE: MONEY_CHILD

  // "https://www.betonjayareadymix.com/2019/08/jasa-perbaikan-balok-gantung-jakarta.html": "Jasa Perbaikan Balok Gantung Jakarta"  // TYPE: MONEY_CHILD
};
};

// ============================================================
// [MONEY_PAGE] - JASA PERBAIKAN STRUKTUR TIANG BETON
// 🧠 TYPE: MONEY_PAGE (WAJIB tampil, transaksional)
// 🧠 INTENT: Komersial (60%) + Transaksional (40%)
// 📌 STATUS: AKTIF (konten lengkap)
// ============================================================

const urlMappingPerbaikanStrukturTiangBetonFromMoneyPage2MoneyChild = {
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-struktur-tiang-beton.html": "Jasa Perbaikan Struktur Tiang Beton",  // TYPE: MONEY_PAGE ✅ AKTIF
  // "https://www.betonjayareadymix.com/2019/08/harga-perbaikan-struktur-tiang-beton.html": "Harga Perbaikan Struktur Tiang Beton"  // TYPE: MONEY_CHILD (404)
};
//Akhir Sub PerbaikanStrukturKolomBalokBeton


// ============================================================
// SUB PERBAIKAN STRUKTUR PONDASI
// Parent: Jasa Perbaikan Struktur Pondasi (/p/jasa-perbaikan-struktur-pondasi.html)
// ENTITY: JASA → TYPE: MONEY_PAGE (BUKAN MONEY_MASTER)
// ============================================================

// ============================================================
// [MONEY_PAGE] - JASA PERBAIKAN PONDASI (UMUM)
// 🧠 TYPE: MONEY_PAGE (WAJIB tampil)
// 📌 STATUS: PERLU DIBUAT
// ============================================================
/*
const urlMappingJasaPerbaikanPondasi = {
  // "https://www.betonjayareadymix.com/p/jasa-perbaikan-pondasi.html": "Jasa Perbaikan Pondasi",  // TYPE: MONEY_PAGE
  // "https://www.betonjayareadymix.com/2019/08/harga-perbaikan-pondasi.html": "Harga Perbaikan Pondasi"  // TYPE: MONEY_PAGE
};

// ============================================================
// [MONEY_PAGE] - JASA PERBAIKAN PONDASI BANGUNAN
// 🧠 TYPE: MONEY_PAGE (WAJIB tampil)
// 📌 STATUS: SUDAH ADA
// ============================================================

const urlMappingJasaPerbaikanPondasiBangunan = {
  // "https://www.betonjayareadymix.com/p/jasa-perbaikan-pondasi-bangunan.html": "Jasa Perbaikan Pondasi Bangunan",  // TYPE: MONEY_PAGE
  // "https://www.betonjayareadymix.com/2019/08/harga-perbaikan-pondasi-bangunan.html": "Harga Perbaikan Pondasi Bangunan"  // TYPE: MONEY_PAGE
};
// ============================================================
// [MONEY_PAGE] - JASA PERBAIKAN PONDASI RUMAH
// 🧠 TYPE: MONEY_PAGE (WAJIB tampil)
// 📌 STATUS: SUDAH ADA
// ============================================================

const urlMappingJasaPerbaikanPondasiRumah = {
  // "https://www.betonjayareadymix.com/p/jasa-perbaikan-pondasi-rumah.html": "Jasa Perbaikan Pondasi Rumah",  // TYPE: MONEY_PAGE
  // "https://www.betonjayareadymix.com/2019/08/harga-perbaikan-pondasi-rumah.html": "Harga Perbaikan Pondasi Rumah"  // TYPE: MONEY_PAGE
};

*/
// ============================================================
// [MONEY_PAGE] - JASA PERBAIKAN STRUKTUR PONDASI
// 🧠 TYPE: MONEY_PAGE (WAJIB tampil)
// 📌 STATUS: SUDAH ADA
// ============================================================
/*
const urlMappingJasaPerbaikanStrukturPondasi = {
  // "https://www.betonjayareadymix.com/p/jasa-perbaikan-struktur-pondasi.html": "Jasa Perbaikan Struktur Pondasi",  // TYPE: MONEY_PAGE
  // "https://www.betonjayareadymix.com/2019/08/harga-perbaikan-struktur-pondasi.html": "Harga Perbaikan Struktur Pondasi"  // TYPE: MONEY_PAGE
};
*/

// ============================================================
// [MONEY_PAGE] - JASA PENGUATAN PONDASI BANGUNAN
// 🧠 TYPE: MONEY_PAGE (WAJIB tampil)
// 📌 STATUS: SUDAH ADA
// ============================================================

const urlMappingJasaPenguatanPondasiBangunanFromMoneyPage2MoneyChild = {
  // "https://www.betonjayareadymix.com/p/jasa-penguatan-pondasi-bangunan.html": "Jasa Penguatan Pondasi Bangunan",  // TYPE: MONEY_PAGE
  // "https://www.betonjayareadymix.com/2019/08/harga-penguatan-pondasi-bangunan.html": "Harga Penguatan Pondasi Bangunan"  // TYPE: MONEY_PAGE
};
const urlMappingJasaPerbaikanPondasiBangunanFromMoneyPage2MoneyChild = {
  // "https://www.betonjayareadymix.com/p/jasa-perbaikan-pondasi-bangunan.html": "Jasa Perbaikan Pondasi Bangunan",  // TYPE: MONEY_PAGE
  // "https://www.betonjayareadymix.com/2019/08/harga-perbaikan-pondasi-bangunan.html": "Harga Perbaikan Pondasi Bangunan"  // TYPE: MONEY_PAGE
};
// ============================================================
// [MONEY_PAGE] - JASA PERBAIKAN PONDASI RUMAH
// 🧠 TYPE: MONEY_PAGE (WAJIB tampil)
// 📌 STATUS: AKTIF (URL valid)
// ============================================================

const urlMappingJasaPerbaikanPondasiRumahFromMoneyPage2MoneyChild = {
  //"https://www.betonjayareadymix.com/p/jasa-perbaikan-struktur-pondasi-rumah.html": "Jasa Perbaikan Struktur Pondasi Rumah"  // TYPE: MONEY_PAGE ✅ AKTIF
};

// ============================================================
// [MONEY_CHILD] - HARGA PERBAIKAN (BERDASARKAN LOKASI)
// 🧠 TYPE: MONEY_CHILD (WAJIB tampil, parent: MONEY_PAGE)
// 📌 STATUS: 404 - PERLU DIPERBAIKI ATAU DIHAPUS
// ============================================================

// "https://www.betonjayareadymix.com/2019/08/harga-perbaikan-struktur-pondasi-rumah.html": "Harga Perbaikan Struktur Pondasi Rumah"  // ❌ 404 - PERLU DIPERBAIKI
//Akhir SUB PerbaikanStrukturPondasi

// ============================================================
// 🔍 ENTITY TYPE: JASA (Perbaikan Struktur & Renovasi)
// ATURAN: JASA TIDAK BOLEH MENGGUNAKAN MONEY_MASTER
// ✅ Gunakan: MONEY_PAGE (Komersial 60% + Transaksional 40%)
// ✅ Gunakan: MONEY_CHILD (spesifik lokasi)
// ✅ Gunakan: SUB1 / SUB2 / VARIANT (sesuai level)
// ============================================================

// ============================================================
// PERBAIKAN STRUKTUR DINDING - MONEY PAGES
// Parent: Jasa Perbaikan Struktur Dinding (/p/jasa-perbaikan-struktur-dinding.html)
// ============================================================

// ============================================================
// [MONEY_PAGE] - JASA INJEKSI DINDING RETAK
// 🧠 TYPE: MONEY_PAGE (WAJIB tampil, parent: SUB2)
// 🧠 INTENT: Komersial (60%) + Transaksional (40%)
// ============================================================

const urlMappingJasaInjeksiDindingRetakFromMoneyPage2MoneyChild = {
  //"https://www.betonjayareadymix.com/p/jasa-injeksi-dinding-retak.html": "Jasa Injeksi Dinding Retak",  // TYPE: MONEY_PAGE
 // "https://www.betonjayareadymix.com/2019/08/harga-injeksi-dinding-retak.html": "Harga Injeksi Dinding Retak"  // TYPE: MONEY_PAGE
};

// ============================================================
// [MONEY_PAGE] - JASA PERBAIKAN DINDING RETAK STRUKTUR
// 🧠 TYPE: MONEY_PAGE (WAJIB tampil, parent: SUB2)
// ============================================================

const urlMappingJasaPerbaikanDindingRetakStrukturFromMoneyPage2MoneyChild = {
  //"https://www.betonjayareadymix.com/p/jasa-perbaikan-dinding-retak-struktur.html": "Jasa Perbaikan Dinding Retak Struktur",  // TYPE: MONEY_PAGE
  //"https://www.betonjayareadymix.com/2019/08/harga-perbaikan-dinding-retak-struktur.html": "Harga Perbaikan Dinding Retak Struktur"  // TYPE: MONEY_PAGE
};

// ============================================================
// [MONEY_PAGE] - JASA PERBAIKAN STRUKTUR DINDING RETAK
// ============================================================

const urlMappingJasaPerbaikanStrukturDindingRetakFromMoneyPage2MoneyChild = {
 // "https://www.betonjayareadymix.com/p/jasa-perbaikan-struktur-dinding-retak.html": "Jasa Perbaikan Struktur Dinding Retak",  // TYPE: MONEY_PAGE
 // "https://www.betonjayareadymix.com/2019/08/harga-perbaikan-struktur-dinding-retak.html": "Harga Perbaikan Struktur Dinding Retak"  // TYPE: MONEY_PAGE
};

// ============================================================
// [MONEY_PAGE] - JASA BOBOK DINDING INSTALASI
// ============================================================

const urlMappingJasaBobokDindingInstalasi = {
  "https://www.betonjayareadymix.com/p/jasa-bobok-dinding-instalasi.html": "Jasa Bobok Dinding Instalasi",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2019/08/harga-bobok-dinding-instalasi.html": "Harga Bobok Dinding Instalasi"  // TYPE: MONEY_PAGE
};

// ============================================================
// [MONEY_PAGE] - JASA PERBAIKAN STRUKTUR DINDING LEMBAB
// ============================================================

const urlMappingJasaPerbaikanStrukturDindingLembab = {
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-struktur-dinding-lembab.html": "Jasa Perbaikan Struktur Dinding Lembab",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2019/08/harga-perbaikan-dinding-lembab.html": "Harga Perbaikan Dinding Lembab"  // TYPE: MONEY_PAGE
};

// ============================================================
// [MONEY_PAGE] - JASA RENOVASI PENGGANTIAN DINDING BATA
// ============================================================

const urlMappingJasaRenovasiPenggantianDindingBata = {
  "https://www.betonjayareadymix.com/p/jasa-renovasi-penggantian-dinding-bata.html": "Jasa Renovasi Penggantian Dinding Bata",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2019/08/harga-renovasi-dinding-bata.html": "Harga Renovasi Dinding Bata"  // TYPE: MONEY_PAGE
};

// ============================================================
// [MONEY_PAGE] - JASA PERBAIKAN PENGGANTIAN DINDING BATA
// ============================================================

const urlMappingJasaPerbaikanPenggantianDindingBata = {
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-penggantian-dinding-bata.html": "Jasa Perbaikan Penggantian Dinding Bata",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2019/08/harga-perbaikan-dinding-bata.html": "Harga Perbaikan Dinding Bata"  // TYPE: MONEY_PAGE
};
//Akhir SUB PerbaikanStrukturDinding

// ============================================================
// JASA PERBAIKAN STRUKTUR LANTAI BETON
// Parent: Jasa Perbaikan Struktur Lantai Beton (/p/jasa-perbaikan-struktur-lantai-beton.html)
// ============================================================

// ============================================================
// [MONEY_PAGE] - JASA PERBAIKAN LANTAI STRUKTUR
// ============================================================

const urlMappingJasaPerbaikanLantaiStruktur = {
  // "https://www.betonjayareadymix.com/p/jasa-perbaikan-lantai-struktur.html": "Jasa Perbaikan Lantai Struktur",  // TYPE: MONEY_PAGE
  // "https://www.betonjayareadymix.com/2019/08/harga-perbaikan-lantai-struktur.html": "Harga Perbaikan Lantai Struktur"  // TYPE: MONEY_PAGE
};

// ============================================================
// [VARIANT] - JASA PERBAIKAN STRUKTUR LANTAI BETON
// 🧠 TYPE: VARIANT (parent: SUB2)
// ============================================================

const urlMappingJasaPerbaikanStrukturLantaiBeton = {
  // "https://www.betonjayareadymix.com/p/jasa-perbaikan-struktur-lantai-beton.html": "Jasa Perbaikan Struktur Lantai Beton",  // TYPE: VARIANT
  // "https://www.betonjayareadymix.com/2019/08/harga-perbaikan-struktur-lantai-beton.html": "Harga Perbaikan Struktur Lantai Beton"  // TYPE: MONEY_PAGE
};

// ============================================================
// [MONEY_PAGE] - JASA PERBAIKAN RETAKAN LANTAI BETON
// ============================================================

const urlMappingJasaPerbaikanRetakanLantaiBeton = {
  // "https://www.betonjayareadymix.com/p/jasa-perbaikan-retakan-lantai-beton.html": "Jasa Perbaikan Retakan Lantai Beton",  // TYPE: MONEY_PAGE
  // "https://www.betonjayareadymix.com/2019/08/harga-perbaikan-retakan-lantai-beton.html": "Harga Perbaikan Retakan Lantai Beton"  // TYPE: MONEY_PAGE
};

// ============================================================
// [MONEY_PAGE] - JASA PERKUATAN LANTAI BETON
// ============================================================

const urlMappingJasaPerkuatanLantaiBeton = {
  // "https://www.betonjayareadymix.com/p/jasa-perkuatan-lantai-beton.html": "Jasa Perkuatan Lantai Beton",  // TYPE: MONEY_PAGE
  // "https://www.betonjayareadymix.com/2019/08/harga-perkuatan-lantai-beton.html": "Harga Perkuatan Lantai Beton"  // TYPE: MONEY_PAGE
};

// ============================================================
// [MONEY_PAGE] - JASA PERBAIKAN LANTAI
// ============================================================

const urlMappingJasaPerbaikanLantai = {
  // "https://www.betonjayareadymix.com/p/jasa-perbaikan-lantai.html": "Jasa Perbaikan Lantai",  // TYPE: MONEY_PAGE
  // "https://www.betonjayareadymix.com/2019/08/harga-perbaikan-lantai.html": "Harga Perbaikan Lantai"  // TYPE: MONEY_PAGE
};

// ============================================================
// [MONEY_PAGE] - JASA LANTAI AMBLES
// ============================================================

const urlMappingJasaLantaiAmbles = {
  // "https://www.betonjayareadymix.com/p/jasa-lantai-ambles.html": "Jasa Lantai Ambles",  // TYPE: MONEY_PAGE
  // "https://www.betonjayareadymix.com/2019/08/harga-perbaikan-lantai-ambles.html": "Harga Perbaikan Lantai Ambles"  // TYPE: MONEY_PAGE
};

// ============================================================
// [MONEY_PAGE] - JASA PERBAIKAN LANTAI RUSAK
// ============================================================

const urlMappingJasaPerbaikanLantaiRusak = {
  // "https://www.betonjayareadymix.com/p/jasa-perbaikan-lantai-rusak.html": "Jasa Perbaikan Lantai Rusak",  // TYPE: MONEY_PAGE
  // "https://www.betonjayareadymix.com/2019/08/harga-perbaikan-lantai-rusak.html": "Harga Perbaikan Lantai Rusak"  // TYPE: MONEY_PAGE
};

// ============================================================
// [MONEY_PAGE] - JASA RENOVASI LANTAI
// ============================================================

const urlMappingJasaRenovasiLantai = {
  // "https://www.betonjayareadymix.com/p/jasa-renovasi-lantai.html": "Jasa Renovasi Lantai",  // TYPE: MONEY_PAGE
  // "https://www.betonjayareadymix.com/2019/08/harga-renovasi-lantai.html": "Harga Renovasi Lantai"  // TYPE: MONEY_PAGE
};

// ============================================================
// [MONEY_PAGE] - JASA RENOVASI LANTAI RUSAK
// ============================================================

const urlMappingJasaRenovasiLantaiRusak = {
  // "https://www.betonjayareadymix.com/p/jasa-renovasi-lantai-rusak.html": "Jasa Renovasi Lantai Rusak",  // TYPE: MONEY_PAGE
  // "https://www.betonjayareadymix.com/2019/08/harga-renovasi-lantai-rusak.html": "Harga Renovasi Lantai Rusak"  // TYPE: MONEY_PAGE
};

// ============================================================
// [MONEY_PAGE] - JASA PERBAIKAN LANTAI AMBLES
// ============================================================

const urlMappingJasaPerbaikanLantaiAmbles = {
  // "https://www.betonjayareadymix.com/p/jasa-perbaikan-lantai-ambles.html": "Jasa Perbaikan Lantai Ambles",  // TYPE: MONEY_PAGE
  // "https://www.betonjayareadymix.com/2019/08/harga-perbaikan-lantai-ambles.html": "Harga Perbaikan Lantai Ambles"  // TYPE: MONEY_PAGE
};

// ============================================================
// [MONEY_PAGE] - JASA GANTI LANTAI AMBLES
// ============================================================

const urlMappingJasaGantiLantaiAmbles = {
  // "https://www.betonjayareadymix.com/p/jasa-ganti-lantai-ambles.html": "Jasa Ganti Lantai Ambles",  // TYPE: MONEY_PAGE
  // "https://www.betonjayareadymix.com/2019/08/harga-ganti-lantai-ambles.html": "Harga Ganti Lantai Ambles"  // TYPE: MONEY_PAGE
};

// ============================================================
// [MONEY_PAGE] - JASA BOBOK LANTAI BETON
// ============================================================

const urlMappingJasaBobokLantaiBeton = {
  // "https://www.betonjayareadymix.com/p/jasa-bobok-lantai-beton.html": "Jasa Bobok Lantai Beton",  // TYPE: MONEY_PAGE
  // "https://www.betonjayareadymix.com/2019/08/harga-bobok-lantai-beton.html": "Harga Bobok Lantai Beton"  // TYPE: MONEY_PAGE
};

// ============================================================
// [MONEY_PAGE] - JASA BOBOK LANTAI LAMA
// ============================================================

const urlMappingJasaBobokLantaiLama = {
  // "https://www.betonjayareadymix.com/p/jasa-bobok-lantai-lama.html": "Jasa Bobok Lantai Lama",  // TYPE: MONEY_PAGE
  // "https://www.betonjayareadymix.com/2019/08/harga-bobok-lantai-lama.html": "Harga Bobok Lantai Lama"  // TYPE: MONEY_PAGE
};

// ============================================================
// JASA RENOVASI STADION - MONEY PAGES
// Parent: Jasa Renovasi Fasilitas Umum (/p/jasa-renovasi-fasilitas-umum.html)
// ============================================================

const urlMappingJasaRenovasiStadion = {
  // ============================================================
  // [MONEY_PAGE] - RENOVASI STADION (POST)
  // 🧠 TYPE: MONEY_PAGE (BUKAN MONEY_MASTER)
  // ============================================================
  "https://www.betonjayareadymix.com/2019/06/jasa-renovasi-tribun-stadion.html": "Renovasi Tribun Penonton",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2019/06/jasa-renovasi-lapangan-stadion.html": "Peremajaan Lapangan Rumput dan Drainase",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2019/06/jasa-renovasi-kamar-ganti-stadion.html": "Renovasi Kamar Ganti Pemain",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2019/06/jasa-renovasi-pagar-stadion.html": "Renovasi Pagar Pengaman dan Perimeter",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2019/06/jasa-perbaikan-atap-stadion.html": "Perbaikan Atap dan Kanopi Stadion",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2019/06/jasa-perbaikan-lintasan-atletik.html": "Perbaikan Lintasan Atletik dan Track Area",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2019/06/jasa-perbaikan-pencahayaan-stadion.html": "Perbaikan Sistem Pencahayaan Stadion",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2019/06/jasa-perbaikan-struktur-stadion.html": "Perbaikan Struktur Beton dan Baja Stadion",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2019/06/jasa-perbaikan-fasilitas-penonton.html": "Perbaikan Fasilitas Penonton dan Umum"  // TYPE: MONEY_PAGE
};

// ============================================================
// JASA INJEKSI BETON RETAK - MONEY PAGES
// Parent: Jasa Rehabilitasi Beton (/p/jasa-rehabilitasi-beton.html)
// ============================================================

const urlMappingJasaInjeksiBetonRetak = {
  // ============================================================
  // [MONEY_PAGE] - BORONGAN INJEKSI BETON
  // 🧠 TYPE: MONEY_PAGE (BUKAN MONEY_MASTER)
  // ============================================================
  "https://www.betonjayareadymix.com/2018/09/borongan-injeksi-beton.html": "Borongan Injeksi Beton",  // TYPE: MONEY_PAGE

  // ============================================================
  // [MONEY_PAGE] - INJEKSI BETON
  // ============================================================
  "https://www.betonjayareadymix.com/2018/09/injeksi-beton.html": "Injeksi Beton",  // TYPE: MONEY_PAGE

  // ============================================================
  // [MONEY_PAGE] - HARGA JASA INJEKSI BETON
  // ============================================================
  "https://www.betonjayareadymix.com/2018/09/harga-jasa-injeksi-beton.html": "Harga Jasa Injeksi Beton",  // TYPE: MONEY_PAGE

  // ============================================================
  // [MONEY_CHILD] - INJEKSI BETON BERDASARKAN LOKASI
  // 🧠 TYPE: MONEY_CHILD (spesifik lokasi)
  // ============================================================
  "https://www.betonjayareadymix.com/2018/12/jasa-injeksi-beton-depok.html": "Jasa Injeksi Beton Depok",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/12/jasa-injeksi-beton-tangerang.html": "Jasa Injeksi Beton Tangerang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/12/jasa-injeksi-beton-bekasi.html": "Jasa Injeksi Beton Bekasi",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/12/jasa-injeksi-beton-jakarta.html": "Jasa Injeksi Beton Jakarta",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/12/jasa-injeksi-beton-bogor.html": "Jasa Injeksi Beton Bogor",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/12/injeksi-beton-kuningan.html": "Injeksi Beton Kuningan",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/12/injeksi-beton-ciamis.html": "Injeksi Beton Ciamis",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/12/injeksi-beton-cianjur.html": "Injeksi Beton Cianjur",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/12/injeksi-beton-sukabumi.html": "Injeksi Beton Sukabumi",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/12/injeksi-beton-karawang.html": "Injeksi Beton Karawang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/12/injeksi-beton-sumedang.html": "Injeksi Beton Sumedang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/12/injeksi-beton-indramayu.html": "Injeksi Beton Indramayu",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/12/injeksi-beton-cirebon.html": "Injeksi Beton Cirebon",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/12/injeksi-beton-majalengka.html": "Injeksi Beton Majalengka",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/12/injeksi-beton-garut.html": "Injeksi Beton Garut",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/12/injeksi-beton-tasikmalaya.html": "Injeksi Beton Tasikmalaya",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/12/injeksi-beton-bandung.html": "Injeksi Beton Bandung"  // TYPE: MONEY_CHILD
};

// ============================================================
// SUB JASA PATCHING BETON - MONEY PAGES
// Parent: Jasa Rehabilitasi Beton (/p/jasa-rehabilitasi-beton.html)
// ============================================================

const urlMappingJasaPatchingBeton = {
  // ============================================================
  // [MONEY_PAGE] - TAMBAL BETON
  // 🧠 TYPE: MONEY_PAGE (BUKAN MONEY_MASTER)
  // ============================================================
  "https://www.betonjayareadymix.com/2018/09/tambal-beton.html": "Tambal Beton",  // TYPE: MONEY_PAGE
  
  // ============================================================
  // [MONEY_PAGE] - BORONGAN TAMBAL BETON
  // ============================================================
  "https://www.betonjayareadymix.com/2018/09/borongan-tambal-beton.html": "Borongan Tambal Beton"  // TYPE: MONEY_PAGE
};

// ============================================================
// SUB JASA SHOTCRETE BETON - MONEY PAGES
// Parent: Jasa Rehabilitasi Beton (/p/jasa-rehabilitasi-beton.html)
// ============================================================

const urlMappingJasaShortcreteBeton = {
  // ============================================================
  // [MONEY_PAGE] - BORONGAN SEMPROT BETON
  // 🧠 TYPE: MONEY_PAGE (BUKAN MONEY_MASTER)
  // ============================================================
  "https://www.betonjayareadymix.com/2018/09/borongan-semprot-beton.html": "Borongan Semprot Beton",  // TYPE: MONEY_PAGE
  
  // ============================================================
  // [MONEY_PAGE] - HARGA JASA SHOTCRETE
  // ============================================================
  "https://www.betonjayareadymix.com/2018/09/harga-jasa-shotcrete.html": "Harga Jasa Shotcrete",  // TYPE: MONEY_PAGE
  
  // ============================================================
  // [MONEY_PAGE] - HARGA JASA SEMPROT BETON
  // ============================================================
  "https://www.betonjayareadymix.com/2018/09/harga-jasa-semprot-beton.html": "Harga Jasa Semprot Beton"  // TYPE: MONEY_PAGE
};

// ============================================================
// SUB JASA GROUTING STRUKTUR BETON - MONEY PAGES & CHILD
// Parent: Jasa Rehabilitasi Beton (/p/jasa-rehabilitasi-beton.html)
// ============================================================

const urlMappingJasaGoutingStrukturBeton = {
  // ============================================================
  // [MONEY_PAGE] - GROUTING BETON
  // 🧠 TYPE: MONEY_PAGE (BUKAN MONEY_MASTER)
  // ============================================================
  "https://www.betonjayareadymix.com/2018/09/grouting-beton.html": "Grouting Beton",  // TYPE: MONEY_PAGE
  
  // ============================================================
  // [MONEY_PAGE] - HARGA JASA GROUTING BETON
  // ============================================================
  "https://www.betonjayareadymix.com/2018/09/harga-jasa-grouting-beton.html": "Harga Jasa Grouting Beton",  // TYPE: MONEY_PAGE
  
  // ============================================================
  // [MONEY_CHILD] - GROUTING BETON PER LOKASI
  // 🧠 TYPE: MONEY_CHILD (spesifik lokasi)
  // ============================================================
  "https://www.betonjayareadymix.com/2018/12/grouting-beton-bekasi.html": "Grouting Beton Bekasi",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/12/grouting-beton-depok.html": "Grouting Beton Depok",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/12/grouting-beton-tangerang.html": "Grouting Beton Tangerang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/12/grouting-beton-jakarta.html": "Grouting Beton Jakarta",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/12/grouting-beton-bogor.html": "Grouting Beton Bogor"  // TYPE: MONEY_CHILD
};

// ============================================================
// SUB JASA CHIPPING BETON - MONEY PAGES
// Parent: Jasa Rehabilitasi Beton (/p/jasa-rehabilitasi-beton.html)
// ============================================================

const urlMappingJasaChippingBeton = {
  // ============================================================
  // [MONEY_PAGE] - HARGA JASA CHIPPING BETON
  // 🧠 TYPE: MONEY_PAGE (BUKAN MONEY_MASTER)
  // ============================================================
  "https://www.betonjayareadymix.com/2019/06/harga-jasa-chipping-beton.html": "Harga Jasa Chipping Beton",  // TYPE: MONEY_PAGE
  
  // ============================================================
  // [MONEY_PAGE] - HARGA CHIPPING BETON PER M3
  // ============================================================
  "https://www.betonjayareadymix.com/2019/06/harga-chipping-beton-per-m3.html": "Harga Chipping Beton Per M3",  // TYPE: MONEY_PAGE
  
  // ============================================================
  // [MONEY_PAGE] - HARGA CHIPPING BETON MURAH
  // ============================================================
  "https://www.betonjayareadymix.com/2019/06/harga-chipping-beton-murah.html": "Harga Chipping Beton Murah",  // TYPE: MONEY_PAGE
  
  // ============================================================
  // [MONEY_PAGE] - HARGA CHIPPING BETON PER M2
  // ============================================================
  "https://www.betonjayareadymix.com/2019/06/harga-chipping-beton-per-m2.html": "Harga Chipping Beton Per M2",  // TYPE: MONEY_PAGE
  
  // ============================================================
  // [MONEY_PAGE] - HARGA PEKERJAAN CHIPPING BETON
  // ============================================================
  "https://www.betonjayareadymix.com/2019/06/harga-pekerjaan-chipping-beton.html": "Harga Pekerjaan Chipping Beton"  // TYPE: MONEY_PAGE
};

// ============================================================
// JASA RENOVASI PERBAIKAN RUMAH - MONEY PAGES (KOREKSI)
// Parent: Jasa Renovasi Rumah (/p/jasa-renovasi-rumah.html)
// ============================================================
const urlMappingHargaJasaRenovasiRumahFromMoneyPage1MoneyPage2 = {
  // ============================================================
  // [MONEY_PAGE] - HARGA RENOVASI RUMAH (UMUM)
  // 🧠 TYPE: MONEY_PAGE (BUKAN MONEY_MASTER) - DIKOREKSI
  // ============================================================
  "https://www.betonjayareadymix.com/2019/06/harga-jasa-renovasi-rumah-subsidi.html": "Harga Jasa Renovasi Rumah Subsidi",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2019/06/harga-jasa-renovasi-rumah-murah.html": "Harga Jasa Renovasi Rumah Murah"  // TYPE: MONEY_PAGE
};
const urlMappingHargaJasaRenovasiRumahFromMoneyPage1MoneyChild = {
  // ============================================================
  // [MONEY_CHILD] - HARGA RENOVASI PER LOKASI
  // 🧠 TYPE: MONEY_CHILD (spesifik lokasi) - SUDAH BENAR
  // ============================================================
    "https://www.betonjayareadymix.com/2019/06/harga-jasa-renovasi-rumah-terdekat.html": "Harga Jasa Renovasi Rumah Terdekat",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/07/harga-jasa-renovasi-rumah-surabaya.html": "Harga Jasa Renovasi Rumah Surabaya",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/07/harga-jasa-renovasi-rumah-jogja.html": "Harga Jasa Renovasi Rumah Jogja",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/07/harga-jasa-renovasi-rumah-semarang.html": "Harga Jasa Renovasi Rumah Semarang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/07/harga-jasa-renovasi-rumah-tangerang.html": "Harga Jasa Renovasi Rumah Tangerang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/07/harga-jasa-renovasi-rumah-depok.html": "Harga Jasa Renovasi Rumah Depok",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/07/harga-jasa-renovasi-rumah-bekasi.html": "Harga Jasa Renovasi Rumah Bekasi",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/07/harga-jasa-renovasi-rumah-bogor.html": "Harga Jasa Renovasi Rumah Bogor",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/07/harga-jasa-renovasi-rumah-jakarta.html": "Harga Jasa Renovasi Rumah Jakarta"  // TYPE: MONEY_CHILD
};

// ============================================================
// SUB JASA RENOVASI RUMAH MINIMALIS - MONEY PAGE
// ============================================================

const urlMappingJasaRenovasiRumahMinimalis = {
  // 🧠 TYPE: MONEY_PAGE (BUKAN MONEY_MASTER)
  // 📌 Contoh: "https://www.betonjayareadymix.com/2019/08/harga-renovasi-rumah-minimalis.html": "Harga Renovasi Rumah Minimalis",  // TYPE: MONEY_PAGE
};

// ============================================================
// SUB JASA RENOVASI RUMAH TYPE 36 - MONEY PAGE
// ============================================================

const urlMappingJasaRenovasiRumahType36 = {
  // 🧠 TYPE: MONEY_PAGE (BUKAN MONEY_MASTER)
  // 📌 Contoh: "https://www.betonjayareadymix.com/2019/08/harga-renovasi-rumah-type-36.html": "Harga Renovasi Rumah Type 36",  // TYPE: MONEY_PAGE
};

// ============================================================
// SUB JASA RENOVASI RUMAH TYPE 45 - MONEY PAGE// ============================================================

const urlMappingJasaRenovasiRumahType45 = {
  // 🧠 TYPE: MONEY_PAGE (BUKAN MONEY_MASTER)
  // 📌 Contoh: "https://www.betonjayareadymix.com/2019/08/harga-renovasi-rumah-type-45.html": "Harga Renovasi Rumah Type 45",  // TYPE: MONEY_PAGE
};

// ============================================================
// SUB JASA RENOVASI RUMAH 2 LANTAI - MONEY PAGE
// ============================================================

const urlMappingJasaRenovasiRumah2Lantai = {
  // 🧠 TYPE: MONEY_PAGE (BUKAN MONEY_MASTER)
  // 📌 Contoh: "https://www.betonjayareadymix.com/2019/08/harga-renovasi-rumah-2-lantai.html": "Harga Renovasi Rumah 2 Lantai",  // TYPE: MONEY_PAGE
};

// ============================================================
// SUB JASA RENOVASI PERBAIKAN ATAP RUMAH - MONEY PAGE
// ============================================================

const urlMappingJasaRenovasiPerbaikanAtapRumahPost = {
  // 🧠 TYPE: MONEY_PAGE (BUKAN MONEY_MASTER)
  // 📌 Contoh: "https://www.betonjayareadymix.com/2019/08/harga-renovasi-atap-rumah.html": "Harga Renovasi Atap Rumah",  // TYPE: MONEY_PAGE
};

// ============================================================
// SUB JASA RENOVASI DINDING RUMAH - MONEY PAGE
// ============================================================

const urlMappingJasaRenovasiDindingRumah = {
  // 🧠 TYPE: MONEY_PAGE (BUKAN MONEY_MASTER)
  // 📌 Contoh: "https://www.betonjayareadymix.com/2019/08/harga-renovasi-dinding-rumah.html": "Harga Renovasi Dinding Rumah",  // TYPE: MONEY_PAGE
};

// ============================================================
// SUB JASA PERBAIKAN STRUKTUR RUMAH - MONEY PAGE
// ============================================================

const urlMappingJasaPerbaikanStrukturRumah = {
  // 🧠 TYPE: MONEY_PAGE (BUKAN MONEY_MASTER)
  // 📌 Contoh: "https://www.betonjayareadymix.com/2019/08/harga-perbaikan-struktur-rumah.html": "Harga Perbaikan Struktur Rumah",  // TYPE: MONEY_PAGE
};

// ============================================================
// SUB JASA RENOVASI KOSMETIK RUMAH - MONEY PAGE
// ============================================================

const urlMappingJasaRenovasiKosmetikRumah = {
  // 🧠 TYPE: MONEY_PAGE (BUKAN MONEY_MASTER)
  // 📌 Contoh: "https://www.betonjayareadymix.com/2019/08/harga-renovasi-kosmetik-rumah.html": "Harga Renovasi Kosmetik Rumah",  // TYPE: MONEY_PAGE
};

// ============================================================
// SUB JASA RENOVASI RUMAH TUMBUH - MONEY PAGE
// ============================================================

const urlMappingJasaRenovasiRumahTumbuh = {
  // 🧠 TYPE: MONEY_PAGE (BUKAN MONEY_MASTER)
  // ⚠️ URL saat ini 404 - PERLU DIBUAT ULANG
  // 📌 Contoh: "https://www.betonjayareadymix.com/2019/08/harga-renovasi-rumah-tumbuh.html": "Harga Renovasi Rumah Tumbuh",  // TYPE: MONEY_PAGE
};
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

function generateBreadcrumbJasaKonstruksiPerbaikanPost(
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
let removedElementsJasaPerbaikanKonsPost = {};
function removeCondition1(conditionId) {
    const conditionElement1 = document.getElementById(conditionId);

    if (conditionElement1) {
        // Menyimpan elemen yang dihapus dalam objek untuk bisa dikembalikan
        removedElementsJasaPerbaikanKonsPost[conditionId] = conditionElement1;
        conditionElement1.remove(); // Menghapus elemen tersebut
    }
}

// Fungsi untuk mengembalikan elemen yang telah dihapus
function restoreCondition1(conditionId) {
    const breadcrumb1 = document.querySelector('.breadcrumb');
    const elementToRestore1 = removedElementsJasaPerbaikanKonsPost[conditionId]; // Mendapatkan elemen yang disimpan

    if (elementToRestore1) {
        breadcrumb1.appendChild(elementToRestore); // Menambahkan elemen kembali ke dalam breadcrumb
        delete removedElementsJasaPerbaikanKonsPost[conditionId]; // Menghapus elemen dari objek setelah dikembalikan
    } else {
        console.log(`Elemen dengan ID ${conditionId} tidak ditemukan di removedElementsJasaPerbaikanKons1.`);
    }
}

document.addEventListener("DOMContentLoaded", function() {	
    // var currentUrl = window.location.href;
     //const cleanUrl = currentUrl.split('?')[0]; // Menghapus parameter seperti ?m=1
const cleanUrlJasaKonsPerbaikanPost = window.location.href.split(/[?#]/)[0]; // Menghilangkan parameter seperti ?m=1

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
		//urlMappingJasaPerbaikanRetakStruktur,
		urlMappingJasaPenguatanStrukturBangunan,
		urlMappingJasaRenovasiStrukturBeton,
		urlMappingJasaPerkuatanStrukturBeton,
		//urlMappingJasaPerbaikanRetakBeton,
		urlMappingJasaRepairStrukturBeton,
		urlMappingJasaPerbaikanStrukturBeton,
		urlMappingJasaRenovasiPerbaikanRetakStruktur,
		urlMappingJasaPerbaikanKolomBeton,
		urlMappingJasaPerbaikanBalokBeton,
		urlMappingJasaPerbaikanStrukturKolomBeton,
		urlMappingJasaPerbaikanStrukturBalokBeton,
		urlMappingJasaPerkuatanKolomBetomRetak,
		urlMappingJasaPerkuatanBalokBeton,
		urlMappingJasaJacketingKolomBalok,
		urlMappingPerbaikanBalokGantung,
		urlMappingPerbaikanStrukturTiangBeton,
		urlMappingJasaPerbaikanPondasi,
		urlMappingJasaPerbaikanPondasiBangunan,
		urlMappingJasaPerbaikanStrukturPondasi,
		urlMappingJasaPerbaikanPondasiRumah,
		urlMappingJasaPenguatanPondasiBangunan,
		urlMappingJasaPerbaikanStrukturPondasiRumah,
		urlMappingJasaInjeksiDindingRetak,
		urlMappingJasaPerbaikanDindingRetakStruktur,
		urlMappingJasaPerbaikanStrukturDindingRetak,
		urlMappingJasaBobokDindingInstalasi,
		urlMappingJasaPerbaikanStrukturDindingLembab,
		urlMappingJasaRenovasiPenggantianDindingBata,
		urlMappingJasaPerbaikanPenggantianDindingBata,
		urlMappingJasaPerbaikanLantaiStruktur,
		urlMappingJasaPerbaikanStrukturLantaiBeton,
		urlMappingJasaPerbaikanRetakanLantaiBeton,
		urlMappingJasaPerkuatanLantaiBeton,
		urlMappingJasaPerbaikanLantai,
		urlMappingJasaLantaiAmbles,
		urlMappingJasaPerbaikanLantaiRusak,
		urlMappingJasaRenovasiLantai,
		urlMappingJasaRenovasiLantaiRusak,
		urlMappingJasaPerbaikanLantaiAmbles,
		urlMappingJasaGantiLantaiAmbles,
		urlMappingJasaBobokLantaiBeton,
		urlMappingJasaBobokLantaiLama,
		urlMappingJasaPerbaikanGedungBertingkat,
		urlMappingJasaPerbaikanStrukturBangunanTua,
		urlMappingJasaPerbaikanStrukturBangunanMiring,
		urlMappingJasaPerbaikanTempatIbadah,
		urlMappingJasaRenovasiStadion,
		urlMappingJasaInjeksiBetonRetak,
		urlMappingJasaPatchingBeton,
		urlMappingJasaShortcreteBeton,
		urlMappingJasaGoutingStrukturBeton,
		urlMappingJasaPerbaikanBetonMengelupas,
		urlMappingJasaPerbaikanBetonKeropos,
		urlMappingJasaPerbaikanBetonRetak,
		urlMappingJasaChippingBeton,
		urlMappingJasaBetonKarbonasi,
		urlMappingJasaPerkuatanStrukturdenganCFRP,
		,
		urlMappingJasaRenovasiRumahMinimalis,
		urlMappingJasaRenovasiRumahType36,
		urlMappingJasaRenovasiRumahType45,
		urlMappingJasaRenovasiRumah2Lantai,
		urlMappingJasaRenovasiPerbaikanAtapRumahPost,
		urlMappingJasaRenovasiDindingRumah,
		urlMappingJasaPerbaikanStrukturRumah,
		urlMappingJasaRenovasiKosmetikRumah,
		urlMappingJasaRenovasiRumahTumbuh
		
		
    );

    // --- validasi URL terdaftar ---
    if (!urlMappingGabungan[cleanUrlJasaKonsPerbaikanPost]) {
      console.log(`[HybridDateModified] URL tidak terdaftar: ${cleanUrlJasaKonsPerbaikanPost}`);
      return;
    }
  
  // === Tanggal nextUpdate1 global ===
	const globalNextUpdate1 = "2026-02-10T00:00:00.000Z";
	console.log(`🌐 [AutoMeta] Detected jasa-konstruksi-perbaikan-post : ${cleanUrlJasaKonsPerbaikanPost}`);

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

    const hash = stableHash(cleanUrlJasaKonsPerbaikanPost);
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
	
	console.log("✅ AEDMetaDates updated jasa-konstruksi-perbaikan-post:", window.AEDMetaDates);  
    console.log(`✅ [HybridDateModified v2.5] ${cleanUrlJasaKonsPerbaikanPost} → ${isoDate} | type=${type || "-"}`);

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
		//urlMappingJasaPerbaikanRetakStruktur,
		//urlMappingJasaPenguatanStrukturBangunan,
		//urlMappingJasaRenovasiStrukturBeton,
		//urlMappingJasaPerkuatanStrukturBeton,
		//urlMappingJasaPerbaikanRetakBeton,
		//urlMappingJasaRepairStrukturBeton,
		urlMappingJasaPerbaikanStrukturBetonFromMoneyPage1MoneyPage2,
		urlMappingJasaPerbaikanStrukturBetonFromMoneyPage1MoneyChild,
		//urlMappingJasaRenovasiPerbaikanRetakStruktur,
		urlMappingJasaPerbaikanStrukturKolomBetonFromMoneyPage2MoneyChild,
		urlMappingJasaPerbaikanStrukturBalokBetonFromMoneyPage2MoneyChild,
		urlMappingJasaPerkuatanKolomBetonFromMoneyPage2MoneyChild,
		urlMappingJasaPerkuatanBalokBetonFromMoneyPage2MoneyChild,
		urlMappingJasaJacketingKolomBalokFromMoneyPage2MoneyChild,
		urlMappingPerbaikanBalokGantungFromMoneyPage2MoneyChild,
		urlMappingPerbaikanStrukturTiangBetonFromMoneyPage2MoneyChild,
		//urlMappingJasaPerbaikanPondasi,
		urlMappingJasaPerbaikanPondasiBangunanFromMoneyPage2MoneyChild,
		//urlMappingJasaPerbaikanPondasiRumah,
		//urlMappingJasaPerbaikanStrukturPondasi,
		urlMappingJasaPenguatanPondasiBangunanFromMoneyPage2MoneyChild,
		urlMappingJasaPerbaikanPondasiRumahFromMoneyPage2MoneyChild,
		urlMappingJasaInjeksiDindingRetakFromMoneyPage2MoneyChild,
		urlMappingJasaPerbaikanDindingRetakStrukturFromMoneyPage2MoneyChild,
		urlMappingJasaPerbaikanStrukturDindingRetakFromMoneyPage2MoneyChild,
		urlMappingJasaBobokDindingInstalasi,
		urlMappingJasaPerbaikanStrukturDindingLembab,
		urlMappingJasaRenovasiPenggantianDindingBata,
		urlMappingJasaPerbaikanPenggantianDindingBata,
		urlMappingJasaPerbaikanLantaiStruktur,
		urlMappingJasaPerbaikanStrukturLantaiBeton,
		urlMappingJasaPerbaikanRetakanLantaiBeton,
		urlMappingJasaPerkuatanLantaiBeton,
		urlMappingJasaPerbaikanLantai,
		urlMappingJasaLantaiAmbles,
		urlMappingJasaPerbaikanLantaiRusak,
		urlMappingJasaRenovasiLantai,
		urlMappingJasaRenovasiLantaiRusak,
		urlMappingJasaPerbaikanLantaiAmbles,
		urlMappingJasaGantiLantaiAmbles,
		urlMappingJasaBobokLantaiBeton,
		urlMappingJasaBobokLantaiLama,
		//urlMappingJasaPerbaikanGedungBertingkat,
		//urlMappingJasaPerbaikanStrukturBangunanTua,
		//urlMappingJasaPerbaikanStrukturBangunanMiring,
		//urlMappingJasaPerbaikanTempatIbadah,
		urlMappingJasaRenovasiStadion,
		urlMappingJasaInjeksiBetonRetak,
		urlMappingJasaPatchingBeton,
		urlMappingJasaShortcreteBeton,
		urlMappingJasaGoutingStrukturBeton,
		//urlMappingJasaPerbaikanBetonMengelupas,
		//urlMappingJasaPerbaikanBetonKeropos,
		//urlMappingJasaPerbaikanBetonRetak,
		urlMappingJasaChippingBeton,
		//urlMappingJasaBetonKarbonasi,
		//urlMappingJasaPerkuatanStrukturdenganCFRP,
		urlMappingHargaJasaRenovasiRumahFromMoneyPage1MoneyPage2,
		urlMappingHargaJasaRenovasiRumahFromMoneyPage1MoneyChild,
		urlMappingJasaRenovasiRumahMinimalis,
		urlMappingJasaRenovasiRumahType36,
		urlMappingJasaRenovasiRumahType45,
		urlMappingJasaRenovasiRumah2Lantai,
		urlMappingJasaRenovasiPerbaikanAtapRumahPost,
		urlMappingJasaRenovasiDindingRumah,
		urlMappingJasaPerbaikanStrukturRumah,
		urlMappingJasaRenovasiKosmetikRumah,
		urlMappingJasaRenovasiRumahTumbuh
		
		
    );

    // --- validasi URL terdaftar ---
    if (!urlMappingGabungan[cleanUrlJasaKonsPerbaikanPost]) {
      console.log(`[HybridDateModified] URL tidak terdaftar: ${cleanUrlJasaKonsPerbaikanPost}`);
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
    //var JasaKonsPerbaikanPost = document.getElementById("JasaKonsPerbaikanPost");
    var JasaKonsPerbaikanPost = document.getElementById("JasaKonsPerbaikanPost");

	if (!JasaKonsPerbaikanPost) {
	console.error("elemen Id JasaKonsPerbaikanPost kondisi terhapus");
	        return;
	}
	if (!JasaKonsPerbaikanPost) {
	     console.error("elemen Id JasaKonsPerbaikanPost kondisi terhapus");	
	} else {

	  
     var JasaKonstruksiPerbaikanSubPostLink = document.getElementById("JasaKonstruksiPerbaikanSubPost");
     var JasaRenovasiPerbaikanSubPostLink = document.getElementById("JasaRenovasiPerbaikanSubPost");
	  var JasaRenovasiPerawatanPerbaikanBangunanPostLink = document.getElementById("JasaRenovasiPerawatanPerbaikanBangunanPost");
     //SUB JasaRenovasiPerbaikan
     var JasaRenovasiPerbaikanStrukturPostLink = document.getElementById("JasaRenovasiPerbaikanStrukturPost");
     var JasaRenovasiPerbaikanInfrastrukturPostLink = document.getElementById("JasaRenovasiPerbaikanInfrastrukturPost");
     var JasaRenovasiPerbaikanBangunanPostLink = document.getElementById("JasaRenovasiPerbaikanBangunanPost");
      var JasaRenovasiPerbaikanFasilitasPostLink = document.getElementById("JasaRenovasiPerbaikanFasilitasPost");
     var JasaRenovasiPerbaikanInteriorPostLink = document.getElementById("JasaRenovasiPerbaikanInteriorPost");
     var JasaRenovasiPerbaikanFasadPostLink = document.getElementById("JasaRenovasiPerbaikanFasadPost");

	 //SUB JasaRenovasiPerawatanPerbaikanBangunanPost
	/*
	 var JasaPerbaikanKebocoranWaterproofingPostLink = document.getElementById("JasaPerbaikanKebocoranWaterproofingPost");
	 var JasaPerbaikanElemenArsitekturalBangunanPostLink = document.getElementById("JasaPerbaikanElemenArsitekturalBangunanPost");
	 var JasaPerbaikanAtapDrainaseBangunanPostLink = document.getElementById("JasaPerbaikanAtapDrainaseBangunanPost");
	 */
		
     //SUB JasaRenovasiPerbaikanStruktur
     //var JasaRenovasiPerbaikanStrukturUmumPostLink = document.getElementById("JasaRenovasiPerbaikanStrukturUmumPost");
     var JasaPerbaikanStrukturBetonPostLink = document.getElementById("JasaPerbaikanStrukturBetonPost");
     var JasaRenovasiPerbaikanStrukturKolomBalokPostLink = document.getElementById("JasaRenovasiPerbaikanStrukturKolomBalokPost");
     var JasaRenovasiPerbaikanStrukturPondasiPostLink = document.getElementById("JasaRenovasiPerbaikanStrukturPondasiPost");
      var JasaRenovasiPerbaikanStrukturLantaiBetonPostLink = document.getElementById("JasaRenovasiPerbaikanStrukturLantaiBetonPost");
     var JasaRenovasiPerbaikanStrukturDindingPostLink = document.getElementById("JasaRenovasiPerbaikanStrukturDindingPost");
     var JasaPerbaikanGedungBertingkatPostLink = document.getElementById("JasaPerbaikanGedungBertingkatPost");
	 	var JasaPerbaikanStrukturBangunanTuaPostLink = document.getElementById("JasaPerbaikanStrukturBangunanTuaPost");
	var JasaPerbaikanStrukturBangunanMiringPostLink = document.getElementById("JasaPerbaikanStrukturBangunanMiringPost");
		
     var JasaRenovasiPerbaikanStrukturAtapPostLink = document.getElementById("JasaRenovasiPerbaikanStrukturAtapPost");
     var JasaRenovasiPerbaikanStrukturTeknikBetonPostLink = document.getElementById("JasaRenovasiPerbaikanStrukturTeknikBetonPost");
      //SUB JasaRenovasiPerbaikanStrukturDindingPost
    // var JasaBobokTembokPostLink = document.getElementById("JasaBobokTembokPost");
     var JasaInjeksiDindingRetakPostLink = document.getElementById("JasaInjeksiDindingRetakPost");
     //var JasaBongkarDindingPostLink = document.getElementById("JasaBongkarDindingPost");
     var JasaPerbaikanDindingRetakStrukturPostLink = document.getElementById("JasaPerbaikanDindingRetakStrukturPost");
     var JasaPerbaikanStrukturDindingRetakPostLink = document.getElementById("JasaPerbaikanStrukturDindingRetakPost");
     var JasaBobokDindingInstalasiPostLink = document.getElementById("JasaBobokDindingInstalasiPost");
     var JasaPerbaikanStrukturDindingLembabPostLink = document.getElementById("JasaPerbaikanStrukturDindingLembabPost");
     var JasaRenovasiPenggantianDindingBataPostLink = document.getElementById("JasaRenovasiPenggantianDindingBataPost");
     var JasaPerbaikanPenggantianDindingBataPostLink = document.getElementById("JasaPerbaikanPenggantianDindingBataPost");
      //SUB JasaRenovasiPerbaikanStrukturUmumPost
    /*
     var JasaPerbaikanRetakStrukturPostLink = document.getElementById("JasaPerbaikanRetakStrukturPost");
     var JasaPenguatanStrukturBangunanPostLink = document.getElementById("JasaPenguatanStrukturBangunanPost");
     var JasaRenovasiStrukturBetonPostLink = document.getElementById("JasaRenovasiStrukturBetonPost");
     var JasaPerkuatanStrukturBetonPostLink = document.getElementById("JasaPerkuatanStrukturBetonPost");
     var JasaPerbaikanRetakBetonPostLink = document.getElementById("JasaPerbaikanRetakBetonPost");
     var JasaRepairStrukturBetonPostLink = document.getElementById("JasaRepairStrukturBetonPost");
     var JasaPerbaikanStrukturBetonPostLink = document.getElementById("JasaPerbaikanStrukturBetonPost");
     var JasaRenovasiPerbaikanRetakStrukturPostLink = document.getElementById("JasaRenovasiPerbaikanRetakStrukturPost");
     */
     //SUB JASA JasaRenovasiPerbaikanBangunanRumah
     var JasaRenovasiRumahMinimalisPostLink = document.getElementById("JasaRenovasiRumahMinimalisPost");
     var JasaRenovasiRumahType36PostLink = document.getElementById("JasaRenovasiRumahType36Post");
     var JasaRenovasiRumahType45PostLink = document.getElementById("JasaRenovasiRumahType45Post");
     var JasaRenovasiRumah2LantaiPostLink = document.getElementById("JasaRenovasiRumah2LantaiPost");
     var JasaRenovasiPerbaikanAtapRumahPostLink = document.getElementById("JasaRenovasiPerbaikanAtapRumahPost");
     var JasaRenovasiDindingRumahPostLink = document.getElementById("JasaRenovasiDindingRumahPost");
     var JasaPerbaikanStrukturRumahPostLink = document.getElementById("JasaPerbaikanStrukturRumahPost");
     var JasaRenovasiKosmetikRumahPostLink = document.getElementById("JasaRenovasiKosmetikRumahPost");
     var JasaRenovasiRumahTumbuhPostLink = document.getElementById("JasaRenovasiRumahTumbuhPost");
    //SUB JasaRenovasiPerbaikanStrukturTeknikBetonPost
     var JasaInjeksiBetonRetakPostLink = document.getElementById("JasaInjeksiBetonRetakPost");
     var JasaInjeksiRetakBetonPostLink = document.getElementById("JasaInjeksiRetakBetonPost");
    
     var JasaPatchingBetonPostLink = document.getElementById("JasaPatchingBetonPost");
     var JasaShotcreteBetonPostLink = document.getElementById("JasaShotcreteBetonPost");
     var JasaGroutingStrukturBetonPostLink = document.getElementById("JasaGroutingStrukturBetonPost");
     var JasaPerbaikanBetonMengelupasPostLink = document.getElementById("JasaPerbaikanBetonMengelupasPost");
     var JasaPerbaikanBetonKeroposPostLink = document.getElementById("JasaPerbaikanBetonKeroposPost");
     var JasaPerbaikanBetonRetakPostLink = document.getElementById("JasaPerbaikanBetonRetakPost");
     var JasaChippingBetonPostLink = document.getElementById("JasaChippingBetonPost");
     //var JasaBobokBetonPostLink = document.getElementById("JasaBobokBetonPost");
     var JasaBetonKarbonasiPostLink = document.getElementById("JasaBetonKarbonasiPost");
     var JasaPerkuatanStrukturCfrpPostLink = document.getElementById("JasaPerkuatanStrukturCfrpPost");
   
	/*
		JasaPerbaikanKebocoranWaterproofingPostLink.style.visibility = 'hidden';
JasaPerbaikanElemenArsitekturalBangunanPostLink.style.visibility = 'hidden';
JasaPerbaikanAtapDrainaseBangunanPostLink.style.visibility = 'hidden';
  */
     //hide SUB JasaRenovasiPerbaikanStrukturDindingPost
     //JasaBobokTembokPostLink.style.visibility = 'hidden';
     JasaInjeksiDindingRetakPostLink.style.visibility = 'hidden';
     //JasaBongkarDindingPostLink.style.visibility = 'hidden';
     JasaPerbaikanDindingRetakStrukturPostLink.style.visibility = 'hidden';
     JasaPerbaikanStrukturDindingRetakPostLink.style.visibility = 'hidden';
     JasaBobokDindingInstalasiPostLink.style.visibility = 'hidden';
     JasaPerbaikanStrukturDindingLembabPostLink.style.visibility = 'hidden';
     JasaRenovasiPenggantianDindingBataPostLink.style.visibility = 'hidden';
     JasaPerbaikanPenggantianDindingBataPostLink.style.visibility = 'hidden';
   //hide SUB JasaRenovasiPerbaikanStrukturUmumPost
    /*
     JasaPerbaikanRetakStrukturPostLink.style.visibility = 'hidden';
     JasaPenguatanStrukturBangunanPostLink.style.visibility = 'hidden';
     JasaRenovasiStrukturBetonPostLink.style.visibility = 'hidden';
     JasaPerkuatanStrukturBetonPostLink.style.visibility = 'hidden';
     JasaPerbaikanRetakBetonPostLink.style.visibility = 'hidden';
     JasaRepairStrukturBetonPostLink.style.visibility = 'hidden';
     JasaPerbaikanStrukturBetonPostLink.style.visibility = 'hidden';
     JasaRenovasiPerbaikanRetakStrukturPostLink.style.visibility = 'hidden';
     */
   //hide SUB JasaRenovasiPerbaikanBangunanRumah
     JasaRenovasiRumahMinimalisPostLink.style.visibility = 'hidden';
     JasaRenovasiRumahType36PostLink.style.visibility = 'hidden';
     JasaRenovasiRumahType45PostLink.style.visibility = 'hidden';
     JasaRenovasiRumah2LantaiPostLink.style.visibility = 'hidden';
     JasaRenovasiPerbaikanAtapRumahPostLink.style.visibility = 'hidden';
     JasaRenovasiDindingRumahPostLink.style.visibility = 'hidden';
     JasaPerbaikanStrukturRumahPostLink.style.visibility = 'hidden';
     JasaRenovasiKosmetikRumahPostLink.style.visibility = 'hidden';
     JasaRenovasiRumahTumbuhPostLink.style.visibility = 'hidden'
   //hide SUB JasaRenovasiPerbaikanStrukturTeknikBetonPost
     JasaInjeksiBetonRetakPostLink.style.visibility = 'hidden';
     JasaInjeksiRetakBetonPostLink.style.visibility = 'hidden';
     JasaPatchingBetonPostLink.style.visibility = 'hidden';
     JasaShotcreteBetonPostLink.style.visibility = 'hidden';
     JasaGroutingStrukturBetonPostLink.style.visibility = 'hidden';
     JasaPerbaikanBetonMengelupasPostLink.style.visibility = 'hidden';
     JasaPerbaikanBetonKeroposPostLink.style.visibility = 'hidden';
     JasaPerbaikanBetonRetakPostLink.style.visibility = 'hidden';
     JasaChippingBetonPostLink.style.visibility = 'hidden';
     //JasaBobokBetonPostLink.style.visibility = 'hidden';
     JasaBetonKarbonasiPostLink.style.visibility = 'hidden';
     JasaPerkuatanStrukturCfrpPostLink.style.visibility = 'hidden';
	
     //SUB JasaRenovasiPerbaikanInfrastruktur
     var JasaRenovasiPerbaikanInfrastrukturJalanPostLink = document.getElementById("JasaRenovasiPerbaikanInfrastrukturJalanPost");
     var JasaRenovasiPerbaikanInfrastrukturJembatanPostLink = document.getElementById("JasaRenovasiPerbaikanInfrastrukturJembatanPost");
     var JasaRenovasiPerbaikanInfrastrukturSaluranPostLink = document.getElementById("JasaRenovasiPerbaikanInfrastrukturSaluranPost");
     var JasaRenovasiPerbaikanInfrastrukturTrotoarPostLink = document.getElementById("JasaRenovasiPerbaikanInfrastrukturTrotoarPost");

      //SUB JasaRenovasiPerbaikanBangunan
     var JasaRenovasiPerbaikanBangunanRumahPostLink = document.getElementById("JasaRenovasiPerbaikanBangunanRumahPost");
     var JasaRenovasiPerbaikanBangunanKantorPostLink = document.getElementById("JasaRenovasiPerbaikanBangunanKantorPost");
     var JasaRenovasiPerbaikanBangunanPabrikPostLink = document.getElementById("JasaRenovasiPerbaikanBangunanPabrikPost");
     var JasaRenovasiPerbaikanBangunanGedungPostLink = document.getElementById("JasaRenovasiPerbaikanBangunanGedungPost");
     var JasaRenovasiPerbaikanBangunanGudangPostLink = document.getElementById("JasaRenovasiPerbaikanBangunanGudangPost");
     var JasaRenovasiPerbaikanBangunanHotelPostLink = document.getElementById("JasaRenovasiPerbaikanBangunanHotelPost");
	
 //SUB JasaRenovasiPerbaikanInterior
     var JasaRenovasiInteriorRumahPostLink = document.getElementById("JasaRenovasiInteriorRumahPost");
     var JasaRenovasiInteriorKantorPostLink = document.getElementById("JasaRenovasiInteriorKantorPost");
     var JasaRenovasiInteriorApartemenPostLink = document.getElementById("JasaRenovasiInteriorApartemenPost");
     var JasaRenovasiInteriorHotelPostLink = document.getElementById("JasaRenovasiInteriorHotelPost");
     var JasaRenovasiInteriorTokoPostLink = document.getElementById("JasaRenovasiInteriorTokoPost");
     var JasaRenovasiInteriorCustomPostLink = document.getElementById("JasaRenovasiInteriorCustomPost");
     var JasaRenovasiInteriorRuanganPostLink = document.getElementById("JasaRenovasiInteriorRuanganPost");

 //SUB JasaRenovasiPerbaikanBangunan
     var JasaRenovasiFasadBangunanPostLink = document.getElementById("JasaRenovasiFasadBangunanPost");
     var JasaRenovasiEksteriorBangunanPostLink = document.getElementById("JasaRenovasiEksteriorBangunanPost");
     var JasaPerbaikanArsitekturEksteriorLink = document.getElementById("JasaPerbaikanArsitekturEksteriorPost");

 //SUB JasaRenovasiPerbaikanFasilitas
     var JasaRenovasiPerbaikanStadionOlahragaLink = document.getElementById("JasaRenovasiPerbaikanStadionOlahragaPost");
     var JasaRenovasiPerbaikanSekolahPostLink = document.getElementById("JasaRenovasiPerbaikanSekolahPost");
     var JasaRenovasiPerbaikanRumahSakitPostLink = document.getElementById("JasaRenovasiPerbaikanRumahSakitPost");
     var JasaRenovasiPerbaikanTempatIbadahPostLink = document.getElementById("JasaRenovasiPerbaikanTempatIbadahPost");
     var JasaRenovasiPerbaikanTerminalPostLink = document.getElementById("JasaRenovasiPerbaikanTerminalPost");
     var JasaRenovasiPerbaikanHaltePostLink = document.getElementById("JasaRenovasiPerbaikanHaltePost");
     var JasaRenovasiPerbaikanTamanKotaPostLink = document.getElementById("JasaRenovasiPerbaikanTamanKotaPost");
//SUB JasaRenovasiPerbaikanTempatIbadahPost
	var JasaRenovasiMasjidPostLink = document.getElementById("JasaRenovasiMasjidPost");
	var JasaRenovasiGerejaPostLink = document.getElementById("JasaRenovasiGerejaPost");
	var JasaRenovasiKlentengPostLink = document.getElementById("JasaRenovasiKlentengPost");
	var JasaRenovasiLanggarPostLink = document.getElementById("JasaRenovasiLanggarPost");
	var JasaRenovasiMusholaPostLink = document.getElementById("JasaRenovasiMusholaPost");
	var JasaRenovasiViharaPostLink = document.getElementById("JasaRenovasiViharaPost");
	var JasaRenovasiPuraPostLink = document.getElementById("JasaRenovasiPuraPost");
//akhir SUB JasaRenovasiPerbaikanTempatIbadahPost

	//NAMA DEFAULT HALAMAN BUAT SEMUA
     var pageNameJasaKonsPerbaikanPost = document.getElementById("pageNameJasaKonsPerbaikanPost");
    
     // Default untuk menyembunyikan elemen
     JasaKonstruksiPerbaikanSubPostLink.style.visibility = 'hidden';
     JasaRenovasiPerbaikanSubPostLink.style.visibility = 'hidden';
	 JasaRenovasiPerawatanPerbaikanBangunanPostLink.style.visibility = 'hidden';
     //Hide Sub JasaRenovasiPerbaikan
     JasaRenovasiPerbaikanStrukturPostLink.style.visibility = 'hidden';
     JasaRenovasiPerbaikanInfrastrukturPostLink.style.visibility = 'hidden';
     JasaRenovasiPerbaikanBangunanPostLink.style.visibility = 'hidden';
     JasaRenovasiPerbaikanInteriorPostLink.style.visibility = 'hidden';
     JasaRenovasiPerbaikanFasadPostLink.style.visibility = 'hidden';
     JasaRenovasiPerbaikanFasilitasPostLink.style.visibility = 'hidden';

    //Hide SUB JasaRenovasiPerbaikanStruktur
     //JasaRenovasiPerbaikanStrukturUmumPostLink.style.visibility = 'hidden';
	   JasaPerbaikanGedungBertingkatPostLink.style.visibility = 'hidden';   
		JasaPerbaikanStrukturBangunanTuaPostLink.style.visibility = 'hidden';
		   JasaPerbaikanStrukturBangunanMiringPostLink.style.visibility = 'hidden';
		
     JasaPerbaikanStrukturBetonPostLink.style.visibility = 'hidden';
     JasaRenovasiPerbaikanStrukturKolomBalokPostLink.style.visibility = 'hidden';
     JasaRenovasiPerbaikanStrukturPondasiPostLink.style.visibility = 'hidden';
     JasaRenovasiPerbaikanStrukturLantaiBetonPostLink.style.visibility = 'hidden';
     JasaRenovasiPerbaikanStrukturDindingPostLink.style.visibility = 'hidden';
     JasaRenovasiPerbaikanStrukturAtapPostLink.style.visibility = 'hidden';
     JasaRenovasiPerbaikanStrukturTeknikBetonPostLink.style.visibility = 'hidden';

     //Hide SUB JasaRenovasiPerbaikanInfrastruktur
     JasaRenovasiPerbaikanInfrastrukturJalanPostLink.style.visibility = 'hidden';
     JasaRenovasiPerbaikanInfrastrukturJembatanPostLink.style.visibility = 'hidden';
     JasaRenovasiPerbaikanInfrastrukturSaluranPostLink.style.visibility = 'hidden';
     JasaRenovasiPerbaikanInfrastrukturTrotoarPostLink.style.visibility = 'hidden';
 	// Hide SUB JasaRenovasiPerbaikanBangunan
     JasaRenovasiPerbaikanBangunanRumahPostLink.style.visibility = 'hidden';
     JasaRenovasiPerbaikanBangunanKantorPostLink.style.visibility = 'hidden';
     JasaRenovasiPerbaikanBangunanPabrikPostLink.style.visibility = 'hidden';
     JasaRenovasiPerbaikanBangunanGedungPostLink.style.visibility = 'hidden';
     JasaRenovasiPerbaikanBangunanGudangPostLink.style.visibility = 'hidden';
     JasaRenovasiPerbaikanBangunanHotelPostLink.style.visibility = 'hidden';

	//Hide SUB JasaRenovasiPerbaikanInterior
     JasaRenovasiInteriorRumahPostLink.style.visibility = 'hidden';
     JasaRenovasiInteriorKantorPostLink.style.visibility = 'hidden';
     JasaRenovasiInteriorApartemenPostLink.style.visibility = 'hidden';
     JasaRenovasiInteriorHotelPostLink.style.visibility = 'hidden';
     JasaRenovasiInteriorTokoPostLink.style.visibility = 'hidden';
     JasaRenovasiInteriorCustomPostLink.style.visibility = 'hidden';
     JasaRenovasiInteriorRuanganPostLink.style.visibility = 'hidden';

 //Hide SUB JasaRenovasiPerbaikanBangunan
     JasaRenovasiFasadBangunanPostLink.style.visibility = 'hidden';
     JasaRenovasiEksteriorBangunanPostLink.style.visibility = 'hidden';
     JasaPerbaikanArsitekturEksteriorLink.style.visibility = 'hidden';


	//Hide SUB JasaRenovasiPerbaikanFasilitas
     JasaRenovasiPerbaikanStadionOlahragaLink.style.visibility = 'hidden';
     JasaRenovasiPerbaikanSekolahPostLink.style.visibility = 'hidden';
     JasaRenovasiPerbaikanRumahSakitPostLink.style.visibility = 'hidden';
     JasaRenovasiPerbaikanTempatIbadahPostLink.style.visibility = 'hidden';
     JasaRenovasiPerbaikanTerminalPostLink.style.visibility = 'hidden';
     JasaRenovasiPerbaikanHaltePostLink.style.visibility = 'hidden';
     JasaRenovasiPerbaikanTamanKotaPostLink.style.visibility = 'hidden';
//SUB JasaRenovasiPerbaikanTempatIbadahPost
    JasaRenovasiMasjidPostLink.style.visibility = 'hidden';
    JasaRenovasiGerejaPostLink.style.visibility = 'hidden';
    JasaRenovasiKlentengPostLink.style.visibility = 'hidden';
    JasaRenovasiLanggarPostLink.style.visibility = 'hidden';
    JasaRenovasiMusholaPostLink.style.visibility = 'hidden';
    JasaRenovasiViharaPostLink.style.visibility = 'hidden';
    JasaRenovasiPuraPostLink.style.visibility = 'hidden';

	
     //NAMA DEFAULT BUAT SEMUA DI KOSONGKAN DULU
     pageNameJasaKonsPerbaikanPost.textContent = "";

	
    //Sub JasaRenovasiPerbaikanStrukturDinding    

//SUB JasaRenovasiPerbaikanStrukturTeknikBeton
     if (urlMappingJasaChippingBeton[cleanUrlJasaKonsPerbaikanPost]) {
        restoreCondition1('JasaKonsPerbaikanPost');
		restoreCondition1('JasaRenovasiPerawatanPerbaikanBangunanPost');
        restoreCondition1('JasaRenovasiPerbaikanStrukturPost');
        restoreCondition1('JasaRenovasiPerbaikanStrukturTeknikBeton');
	
        restoreCondition1('JasaChippingBetonPost');

		 
		 removeCondition1('JasaRenovasiPerbaikanSubPost');
           // hapus elemen id DIV Lain
	removeCondition1('JasaDesInPost');
        removeCondition1('ProdukInFurPost');
	removeCondition1('ProdukKonsSaluranPost');
        removeCondition1('ProdukKonsPembatasPost');
	    removeCondition1('ProdukKonsDindingModularPost');
        removeCondition1('ProdukKonsPost');
        removeCondition1('JasaKonsPembatasPost');
        removeCondition1('JasaKonsPondasiTanahPost');
        removeCondition1('JasaKonsPerkuatanTanahLongsorPost');
        removeCondition1('MaterialKonsStukturPost');
        removeCondition1('MaterialKonsFasadPelapisEksteriorPost');
	removeCondition1('MaterialKonsAtapPenutupPost');
        removeCondition1('JasaKonsCuttingBetonPost');
        removeCondition1('JasaKonsBongkarBangunanPost');
        removeCondition1('JasaKonsPengeboranPost'); 
	removeCondition1('JasaKonsFinishingPost');
        removeCondition1('JasaKonsStrukturPost');
        removeCondition1('JasaKonsAlatKonstruksiPost');
        removeCondition1('JasaKonsJalanPerkerasanPost');


       // hapus elemen JasaPerbaikanKons Lain kecuali JasaRenovasiPerbaikanStrukturPost
        removeCondition1('JasaRenovasiPerbaikanBangunanPost');
        removeCondition1('JasaRenovasiPerbaikanInfrastrukturPost');
        removeCondition1('JasaRenovasiPerbaikanFasilitasPost');
	removeCondition1('JasaRenovasiPerbaikanInteriorPost');
	removeCondition1('JasaRenovasiPerbaikanFasadPost');

	// hapus elemen id Sub JasaRenovasiPerbaikanStrukturTeknikBeton SELAIN jasa chipping
        removeCondition1('JasaInjeksiBetonRetakPost');
        removeCondition1('JasaInjeksiRetakBetonPost');
        removeCondition1('JasaShotcreteBetonPost');
        removeCondition1('JasaGroutingStrukturBetonPost');
        removeCondition1('JasaPerbaikanBetonMengelupasPost');
        removeCondition1('JasaPerbaikanBetonKeroposPost');
        removeCondition1('JasaPerbaikanBetonRetakPost');
        removeCondition1('JasaPatchingBetonPost');
	     
        //removeCondition1('JasaChippingBetonPost');
        
        removeCondition1('JasaBetonKarbonasiPost');
        removeCondition1('JasaPerkuatanStrukturCfrpPost');

	// hapus elemen id Sub JasaRenovasiPerbaikanStrukturDinding SEMUA
        
        
        removeCondition1('JasaInjeksiDindingRetakPost');
        removeCondition1('JasaPerbaikanDindingRetakStrukturPost');
        removeCondition1('JasaPerbaikanStrukturDindingRetakPost');
        removeCondition1('JasaBobokDindingInstalasiPost');
        removeCondition1('JasaPerbaikanStrukturDindingLembabPost');
        removeCondition1('JasaRenovasiPenggantianDindingBataPost');
        removeCondition1('JasaPerbaikanPenggantianDindingBataPost');
	// hapus elemen id Sub JasaRenovasiPerbaikanStrukturUmum SEMUA
	/* tidak perlu
        removeCondition1('JasaPerbaikanRetakStrukturPost');
        removeCondition1('JasaPenguatanStrukturBangunanPost');
        removeCondition1('JasaRenovasiStrukturBetonPost');
        removeCondition1('JasaPerkuatanStrukturBetonPost');
        removeCondition1('JasaPerbaikanRetakBetonPost');
        removeCondition1('JasaRepairStrukturBetonPost');
        removeCondition1('JasaPerbaikanStrukturBetonPost');
        removeCondition1('JasaRenovasiPerbaikanRetakStrukturPost');
	*/
	// hapus elemen id Sub JasaRenovasiPerbaikanBangunanRumahPost SEMUA
        removeCondition1('JasaRenovasiRumahMinimalisPost');
        removeCondition1('JasaRenovasiRumahType36Post');
        removeCondition1('JasaRenovasiRumahType45Post');
        removeCondition1('JasaRenovasiRumah2LantaiPost');
        removeCondition1('JasaRenovasiPerbaikanAtapRumahPost');
        removeCondition1('JasaRenovasiDindingRumahPost');
        removeCondition1('JasaPerbaikanStrukturRumahPost');
        removeCondition1('JasaRenovasiKosmetikRumahPost');
        removeCondition1('JasaRenovasiRumahTumbuhPost');
	
	// hapus elemen id Sub JasaRenovasiPerbaikan yang lain
        removeCondition1('JasaRenovasiPerbaikanInfrastrukturPost');
        removeCondition1('JasaRenovasiPerbaikanBangunanPost');
        removeCondition1('JasaRenovasiPerbaikanInteriorPost');
	removeCondition1('JasaRenovasiPerbaikanFasadPost');
	removeCondition1('JasaRenovasiPerbaikanFasilitasPost');

	// hapus elemen id Semua Sub JasaRenovasiPerbaikanStruktur selain JasaRenovasiPerbaikanStrukturTeknikBetonPost
	//removeCondition1('JasaRenovasiPerbaikanStrukturUmumPost');
			removeCondition1('JasaPerbaikanGedungBertingkatPost');
			removeCondition1('JasaPerbaikanStrukturBangunanTuaPost');
			removeCondition1('JasaPerbaikanStrukturBangunanMiringPost');
		 
	removeCondition1('JasaRenovasiPerbaikanStrukturKolomBalokPost');
  		removeCondition1('JasaRenovasiPerbaikanStrukturKolomPost');
  		removeCondition1('JasaRenovasiPerbaikanStrukturBalokPost');
        removeCondition1('JasaRenovasiPerbaikanStrukturPondasiPost');
        removeCondition1('JasaRenovasiPerbaikanStrukturLantaiBetonPost');
	//removeCondition1('');
        removeCondition1('JasaPerbaikanStrukturBetonPost');
	removeCondition1('JasaRenovasiPerbaikanStrukturAtapPost');
	removeCondition1('JasaRenovasiPerbaikanStrukturDindingPost');
	
       
        // hapus elemen id Semua Sub JasaRenovasiPerbaikanInfrastruktur
        removeCondition1('JasaRenovasiPerbaikanInfrastrukturJalanPost');
        removeCondition1('JasaRenovasiPerbaikanInfrastrukturJembatanPost');
        removeCondition1('JasaRenovasiPerbaikanInfrastrukturSaluranPost');
        removeCondition1('JasaRenovasiPerbaikanInfrastrukturTrotoarPost');

       // hapus elemen id Semua Sub JasaRenovasiPerbaikanBangunan
        removeCondition1('JasaRenovasiPerbaikanBangunanRumahPost');
        removeCondition1('JasaRenovasiPerbaikanBangunanKantorPost');
        removeCondition1('JasaRenovasiPerbaikanBangunanPabrikPost');
        removeCondition1('JasaRenovasiPerbaikanBangunanGedungPost');
        removeCondition1('JasaRenovasiPerbaikanBangunanGudangPost');
        removeCondition1('JasaRenovasiPerbaikanBangunanHotelPost');

	 // hapus elemen id Semua Sub JasaRenovasiPerbaikanInterior
        removeCondition1('JasaRenovasiInteriorRumahPost');
        removeCondition1('JasaRenovasiInteriorKantorPost');
        removeCondition1('JasaRenovasiInteriorApartemenPost');
        removeCondition1('JasaRenovasiInteriorHotelPost');
        removeCondition1('JasaRenovasiInteriorTokoPost');
        removeCondition1('JasaRenovasiInteriorCustomPost');
        removeCondition1('JasaRenovasiInteriorRuanganPost');
	   
       // hapus elemen id Semua Sub JasaRenovasiPerbaikanFasadEksterior
        removeCondition1('JasaRenovasiFasadBangunanPost');
        removeCondition1('JasaRenovasiEksteriorBangunanPost');
        removeCondition1('JasaPerbaikanArsitekturEksteriorPost');

	// hapus elemen id Semua Sub JasaRenovasiPerbaikanFasilitas
        removeCondition1('JasaRenovasiPerbaikanStadionOlahragaPost');
        removeCondition1('JasaRenovasiPerbaikanSekolahPost');
        removeCondition1('JasaRenovasiPerbaikanRumahSakitPost');
        removeCondition1('JasaRenovasiPerbaikanTempatIbadahPost');
        removeCondition1('JasaRenovasiPerbaikanTerminalPost');
        removeCondition1('JasaRenovasiPerbaikanHaltePost');
        removeCondition1('JasaRenovasiPerbaikanTamanKotaPost');
	     
	// hapus elemen id Semua Sub JasaRenovasiPerbaikanTempatIbadahPost
        removeCondition1('JasaRenovasiMasjidPost');
        removeCondition1('JasaRenovasiGerejaPost');
        removeCondition1('JasaRenovasiKlentengPost');
        removeCondition1('JasaRenovasiLanggarPost');
        removeCondition1('JasaRenovasiMusholaPost');
        removeCondition1('JasaRenovasiViharaPost');
        removeCondition1('JasaRenovasiPuraPost');
	     
        
        JasaKonstruksiPerbaikanSubPostLink.style.visibility = 'visible';
        //JasaRenovasiPerbaikanSubPostLink.style.visibility = 'visible';
		 JasaRenovasiPerawatanPerbaikanBangunanPostLink.style.visibility = 'visible';
        JasaRenovasiPerbaikanStrukturPostLink.style.visibility = 'visible';
	JasaRenovasiPerbaikanStrukturTeknikBetonPostLink.style.visibility = 'visible';
	
	JasaChippingBetonPostLink.style.visibility = 'visible';
        pageNameJasaKonsPerbaikanPost.textContent = urlMappingJasaChippingBeton[cleanUrlJasaKonsPerbaikanPost];
    }
    
   // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaChippingBeton[cleanUrlJasaKonsPerbaikanPost]) {
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
	      "name": "Jasa Perawatan Perbaikan Bangunan",
	      "item": "https://www.betonjayareadymix.com/p/jasa-perawatan-perbaikan-bangunan.html"
	    },
	    {
	      "@type": "ListItem",
	      "position": 4,
	      "name": "Jasa Perbaikan Struktur",
	      "item": "https://www.betonjayareadymix.com/p/jasa-perbaikan-struktur.html"
	    },
	    {
	      "@type": "ListItem",
	      "position": 5,
	      "name": "Jasa Rehabilitasi Beton",
	      "item": "https://www.betonjayareadymix.com/p/jasa-rehabilitasi-beton.html"
	    },
	    {
	      "@type": "ListItem",
	      "position": 6,
	      "name": "Jasa Chipping Beton",
	      "item": "https://www.betonjayareadymix.com/p/jasa-chipping-beton.html"
	    },
	   {
                "@type": "ListItem",
                "position": 7,
                "name": urlMappingJasaChippingBeton[cleanUrlJasaKonsPerbaikanPost],
                "item": cleanUrlJasaKonsPerbaikanPost
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
    if (urlMappingJasaPatchingBeton[cleanUrlJasaKonsPerbaikanPost]) {
        restoreCondition1('JasaKonsPerbaikanPost');
		restoreCondition1('JasaRenovasiPerawatanPerbaikanBangunanPost');
        removeCondition1('JasaRenovasiPerbaikanSubPost');
        restoreCondition1('JasaRenovasiPerbaikanStrukturPost');
        restoreCondition1('JasaRenovasiPerbaikanStrukturTeknikBeton');
	
        restoreCondition1('JasaPatchingBetonPost');

           // hapus elemen id DIV Lain
	removeCondition1('JasaDesInPost');
        removeCondition1('ProdukInFurPost');
	removeCondition1('ProdukKonsSaluranPost');
        removeCondition1('ProdukKonsPembatasPost');
	    removeCondition1('ProdukKonsDindingModularPost');
        removeCondition1('ProdukKonsPost');
        removeCondition1('JasaKonsPembatasPost');
        removeCondition1('JasaKonsPondasiTanahPost');
        removeCondition1('JasaKonsPerkuatanTanahLongsorPost');
        removeCondition1('MaterialKonsStukturPost');
        removeCondition1('MaterialKonsFasadPelapisEksteriorPost');
	removeCondition1('MaterialKonsAtapPenutupPost');
        removeCondition1('JasaKonsCuttingBetonPost');
        removeCondition1('JasaKonsBongkarBangunanPost');
        removeCondition1('JasaKonsPengeboranPost'); 
	removeCondition1('JasaKonsFinishingPost');
        removeCondition1('JasaKonsStrukturPost');
        removeCondition1('JasaKonsAlatKonstruksiPost');
        removeCondition1('JasaKonsJalanPerkerasanPost');


	// hapus elemen JasaPerbaikanKons Lain kecuali JasaRenovasiPerbaikanStrukturPost
        removeCondition1('JasaRenovasiPerbaikanBangunanPost');
        removeCondition1('JasaRenovasiPerbaikanInfrastrukturPost');
        removeCondition1('JasaRenovasiPerbaikanFasilitasPost');
	removeCondition1('JasaRenovasiPerbaikanInteriorPost');
	removeCondition1('JasaRenovasiPerbaikanFasadPost');

	// hapus elemen id Sub JasaRenovasiPerbaikanStrukturTeknikBeton SELAIN jasa chipping
        removeCondition1('JasaInjeksiBetonRetakPost');
        removeCondition1('JasaInjeksiRetakBetonPost');
        removeCondition1('JasaShotcreteBetonPost');
        removeCondition1('JasaChippingBetonPost');
        removeCondition1('JasaPerbaikanBetonMengelupasPost');
        removeCondition1('JasaPerbaikanBetonKeroposPost');
        removeCondition1('JasaPerbaikanBetonRetakPost');
        removeCondition1('JasaGroutingStrukturBetonPost');
        
        removeCondition1('JasaBetonKarbonasiPost');
        removeCondition1('JasaPerkuatanStrukturCfrpPost');

	// hapus elemen id Sub JasaRenovasiPerbaikanStrukturDinding SEMUA
        
        
        removeCondition1('JasaInjeksiDindingRetakPost');
        removeCondition1('JasaPerbaikanDindingRetakStrukturPost');
        removeCondition1('JasaPerbaikanStrukturDindingRetakPost');
        removeCondition1('JasaBobokDindingInstalasiPost');
        removeCondition1('JasaPerbaikanStrukturDindingLembabPost');
        removeCondition1('JasaRenovasiPenggantianDindingBataPost');
        removeCondition1('JasaPerbaikanPenggantianDindingBataPost');
	// hapus elemen id Sub JasaRenovasiPerbaikanStrukturUmum SEMUA
	/*
        removeCondition1('JasaPerbaikanRetakStrukturPost');
        removeCondition1('JasaPenguatanStrukturBangunanPost');
        removeCondition1('JasaRenovasiStrukturBetonPost');
        removeCondition1('JasaPerkuatanStrukturBetonPost');
        removeCondition1('JasaPerbaikanRetakBetonPost');
        removeCondition1('JasaRepairStrukturBetonPost');
        removeCondition1('JasaPerbaikanStrukturBetonPost');
        removeCondition1('JasaRenovasiPerbaikanRetakStrukturPost');
	*/
	// hapus elemen id Sub JasaRenovasiPerbaikanBangunanRumahPost SEMUA
        removeCondition1('JasaRenovasiRumahMinimalisPost');
        removeCondition1('JasaRenovasiRumahType36Post');
        removeCondition1('JasaRenovasiRumahType45Post');
        removeCondition1('JasaRenovasiRumah2LantaiPost');
        removeCondition1('JasaRenovasiPerbaikanAtapRumahPost');
        removeCondition1('JasaRenovasiDindingRumahPost');
        removeCondition1('JasaPerbaikanStrukturRumahPost');
        removeCondition1('JasaRenovasiKosmetikRumahPost');
        removeCondition1('JasaRenovasiRumahTumbuhPost');
	     
	// hapus elemen id Sub JasaRenovasiPerbaikan yang lain
        removeCondition1('JasaRenovasiPerbaikanInfrastrukturPost');
        removeCondition1('JasaRenovasiPerbaikanBangunanPost');
        removeCondition1('JasaRenovasiPerbaikanInteriorPost');
	removeCondition1('JasaRenovasiPerbaikanFasadPost');
	removeCondition1('JasaRenovasiPerbaikanFasilitasPost');

	// hapus elemen id Semua Sub JasaRenovasiPerbaikanStruktur selain JasaRenovasiPerbaikanStrukturTeknikBetonPost
	//removeCondition1('JasaRenovasiPerbaikanStrukturUmumPost');
			removeCondition1('JasaPerbaikanGedungBertingkatPost');
			removeCondition1('JasaPerbaikanStrukturBangunanTuaPost');
			removeCondition1('JasaPerbaikanStrukturBangunanMiringPost');
		
	removeCondition1('JasaRenovasiPerbaikanStrukturKolomBalokPost');
  		removeCondition1('JasaRenovasiPerbaikanStrukturKolomPost');
  		removeCondition1('JasaRenovasiPerbaikanStrukturBalokPost');
        removeCondition1('JasaRenovasiPerbaikanStrukturPondasiPost');
        removeCondition1('JasaRenovasiPerbaikanStrukturLantaiBetonPost');
	removeCondition1('JasaPerbaikanStrukturBetonPost');
	removeCondition1('JasaRenovasiPerbaikanStrukturAtapPost');
	removeCondition1('JasaRenovasiPerbaikanStrukturDindingPost');
	
       
        // hapus elemen id Semua Sub JasaRenovasiPerbaikanInfrastruktur
        removeCondition1('JasaRenovasiPerbaikanInfrastrukturJalanPost');
        removeCondition1('JasaRenovasiPerbaikanInfrastrukturJembatanPost');
        removeCondition1('JasaRenovasiPerbaikanInfrastrukturSaluranPost');
        removeCondition1('JasaRenovasiPerbaikanInfrastrukturTrotoarPost');

       // hapus elemen id Semua Sub JasaRenovasiPerbaikanBangunan
        removeCondition1('JasaRenovasiPerbaikanBangunanRumahPost');
        removeCondition1('JasaRenovasiPerbaikanBangunanKantorPost');
        removeCondition1('JasaRenovasiPerbaikanBangunanPabrikPost');
        removeCondition1('JasaRenovasiPerbaikanBangunanGedungPost');
        removeCondition1('JasaRenovasiPerbaikanBangunanGudangPost');
        removeCondition1('JasaRenovasiPerbaikanBangunanHotelPost');

	 // hapus elemen id Semua Sub JasaRenovasiPerbaikanInterior
        removeCondition1('JasaRenovasiInteriorRumahPost');
        removeCondition1('JasaRenovasiInteriorKantorPost');
        removeCondition1('JasaRenovasiInteriorApartemenPost');
        removeCondition1('JasaRenovasiInteriorHotelPost');
        removeCondition1('JasaRenovasiInteriorTokoPost');
        removeCondition1('JasaRenovasiInteriorCustomPost');
        removeCondition1('JasaRenovasiInteriorRuanganPost');
	   
       // hapus elemen id Semua Sub JasaRenovasiPerbaikanFasadEksterior
        removeCondition1('JasaRenovasiFasadBangunanPost');
        removeCondition1('JasaRenovasiEksteriorBangunanPost');
        removeCondition1('JasaPerbaikanArsitekturEksteriorPost');

	// hapus elemen id Semua Sub JasaRenovasiPerbaikanFasilitas
        removeCondition1('JasaRenovasiPerbaikanStadionOlahragaPost');
        removeCondition1('JasaRenovasiPerbaikanSekolahPost');
        removeCondition1('JasaRenovasiPerbaikanRumahSakitPost');
        removeCondition1('JasaRenovasiPerbaikanTempatIbadahPost');
        removeCondition1('JasaRenovasiPerbaikanTerminalPost');
        removeCondition1('JasaRenovasiPerbaikanHaltePost');
        removeCondition1('JasaRenovasiPerbaikanTamanKotaPost');
	// hapus elemen id Semua Sub JasaRenovasiPerbaikanTempatIbadahPost
        removeCondition1('JasaRenovasiMasjidPost');
        removeCondition1('JasaRenovasiGerejaPost');
        removeCondition1('JasaRenovasiKlentengPost');
        removeCondition1('JasaRenovasiLanggarPost');
        removeCondition1('JasaRenovasiMusholaPost');
        removeCondition1('JasaRenovasiViharaPost');
        removeCondition1('JasaRenovasiPuraPost');
	   
        JasaKonstruksiPerbaikanSubPostLink.style.visibility = 'visible';
        JasaRenovasiPerawatanPerbaikanBangunanPostLink.style.visibility = 'visible';
        JasaRenovasiPerbaikanStrukturPostLink.style.visibility = 'visible';
	JasaRenovasiPerbaikanStrukturTeknikBetonPostLink.style.visibility = 'visible';
	
	JasaPatchingBetonPostLink.style.visibility = 'visible';
        pageNameJasaKonsPerbaikanPost.textContent = urlMappingJasaPatchingBeton[cleanUrlJasaKonsPerbaikanPost];
    }
 if (urlMappingJasaShortcreteBeton[cleanUrlJasaKonsPerbaikanPost]) {
        restoreCondition1('JasaKonsPerbaikanPost');
	    restoreCondition1('JasaRenovasiPerawatanPerbaikanBangunanPost');
        removeCondition1('JasaRenovasiPerbaikanSubPost');
        restoreCondition1('JasaRenovasiPerbaikanStrukturPost');
        restoreCondition1('JasaRenovasiPerbaikanStrukturTeknikBeton');
	
        restoreCondition1('JasaShotcreteBetonPost');

           // hapus elemen id DIV Lain
	removeCondition1('JasaDesInPost');
        removeCondition1('ProdukInFurPost');
	removeCondition1('ProdukKonsSaluranPost');
        removeCondition1('ProdukKonsPembatasPost');
	    removeCondition1('ProdukKonsDindingModularPost');
        removeCondition1('ProdukKonsPost');
        removeCondition1('JasaKonsPembatasPost');
        removeCondition1('JasaKonsPondasiTanahPost');
        removeCondition1('JasaKonsPerkuatanTanahLongsorPost');
        removeCondition1('MaterialKonsStukturPost');
        removeCondition1('MaterialKonsFasadPelapisEksteriorPost');
	removeCondition1('MaterialKonsAtapPenutupPost');
        removeCondition1('JasaKonsCuttingBetonPost');
        removeCondition1('JasaKonsBongkarBangunanPost');
        removeCondition1('JasaKonsPengeboranPost'); 
	removeCondition1('JasaKonsFinishingPost');
        removeCondition1('JasaKonsStrukturPost');
        removeCondition1('JasaKonsAlatKonstruksiPost');
        removeCondition1('JasaKonsJalanPerkerasanPost');


	// hapus elemen JasaPerbaikanKons Lain kecuali JasaRenovasiPerbaikanStrukturPost
        removeCondition1('JasaRenovasiPerbaikanBangunanPost');
        removeCondition1('JasaRenovasiPerbaikanInfrastrukturPost');
        removeCondition1('JasaRenovasiPerbaikanFasilitasPost');
	removeCondition1('JasaRenovasiPerbaikanInteriorPost');
	removeCondition1('JasaRenovasiPerbaikanFasadPost');

	// hapus elemen id Sub JasaRenovasiPerbaikanStrukturTeknikBeton SELAIN jasa chipping
        removeCondition1('JasaInjeksiBetonRetakPost');
        removeCondition1('JasaInjeksiRetakBetonPost');
        removeCondition1('JasaPatchingBetonPost');
        removeCondition1('JasaChippingBetonPost');
        removeCondition1('JasaPerbaikanBetonMengelupasPost');
        removeCondition1('JasaPerbaikanBetonKeroposPost');
        removeCondition1('JasaPerbaikanBetonRetakPost');
        //removeCondition1('JasaPatchingBetonPost');
        removeCondition1('JasaGroutingStrukturBetonPost');
       // removeCondition1('JasaGroutingStrukturBetonPost');
        
        removeCondition1('JasaBetonKarbonasiPost');
        removeCondition1('JasaPerkuatanStrukturCfrpPost');

	// hapus elemen id Sub JasaRenovasiPerbaikanStrukturDinding SEMUA
        removeCondition1('JasaInjeksiDindingRetakPost');
        removeCondition1('JasaPerbaikanDindingRetakStrukturPost');
        removeCondition1('JasaPerbaikanStrukturDindingRetakPost');
        removeCondition1('JasaBobokDindingInstalasiPost');
        removeCondition1('JasaPerbaikanStrukturDindingLembabPost');
        removeCondition1('JasaRenovasiPenggantianDindingBataPost');
        removeCondition1('JasaPerbaikanPenggantianDindingBataPost');
	// hapus elemen id Sub JasaRenovasiPerbaikanStrukturUmum SEMUA
	/*
        removeCondition1('JasaPerbaikanRetakStrukturPost');
        removeCondition1('JasaPenguatanStrukturBangunanPost');
        removeCondition1('JasaRenovasiStrukturBetonPost');
        removeCondition1('JasaPerkuatanStrukturBetonPost');
        removeCondition1('JasaPerbaikanRetakBetonPost');
        removeCondition1('JasaRepairStrukturBetonPost');
        removeCondition1('JasaPerbaikanStrukturBetonPost');
        removeCondition1('JasaRenovasiPerbaikanRetakStrukturPost');
	*/
	// hapus elemen id Sub JasaRenovasiPerbaikanBangunanRumahPost SEMUA
        removeCondition1('JasaRenovasiRumahMinimalisPost');
        removeCondition1('JasaRenovasiRumahType36Post');
        removeCondition1('JasaRenovasiRumahType45Post');
        removeCondition1('JasaRenovasiRumah2LantaiPost');
        removeCondition1('JasaRenovasiPerbaikanAtapRumahPost');
        removeCondition1('JasaRenovasiDindingRumahPost');
        removeCondition1('JasaPerbaikanStrukturRumahPost');
        removeCondition1('JasaRenovasiKosmetikRumahPost');
        removeCondition1('JasaRenovasiRumahTumbuhPost');
	     
	// hapus elemen id Sub JasaRenovasiPerbaikan yang lain
        removeCondition1('JasaRenovasiPerbaikanInfrastrukturPost');
        removeCondition1('JasaRenovasiPerbaikanBangunanPost');
        removeCondition1('JasaRenovasiPerbaikanInteriorPost');
	removeCondition1('JasaRenovasiPerbaikanFasadPost');
	removeCondition1('JasaRenovasiPerbaikanFasilitasPost');

	// hapus elemen id Semua Sub JasaRenovasiPerbaikanStruktur selain JasaRenovasiPerbaikanStrukturTeknikBetonPost
	//removeCondition1('JasaRenovasiPerbaikanStrukturUmumPost');
	 			removeCondition1('JasaPerbaikanGedungBertingkatPost');
			removeCondition1('JasaPerbaikanStrukturBangunanTuaPost');
			removeCondition1('JasaPerbaikanStrukturBangunanMiringPost');
	 
	removeCondition1('JasaRenovasiPerbaikanStrukturKolomBalokPost');
  		removeCondition1('JasaRenovasiPerbaikanStrukturKolomPost');
  		removeCondition1('JasaRenovasiPerbaikanStrukturBalokPost');
        removeCondition1('JasaRenovasiPerbaikanStrukturPondasiPost');
        removeCondition1('JasaRenovasiPerbaikanStrukturLantaiBetonPost');
	removeCondition1('JasaPerbaikanStrukturBetonPost');
	removeCondition1('JasaRenovasiPerbaikanStrukturAtapPost');
	removeCondition1('JasaRenovasiPerbaikanStrukturDindingPost');
	
       
        // hapus elemen id Semua Sub JasaRenovasiPerbaikanInfrastruktur
        removeCondition1('JasaRenovasiPerbaikanInfrastrukturJalanPost');
        removeCondition1('JasaRenovasiPerbaikanInfrastrukturJembatanPost');
        removeCondition1('JasaRenovasiPerbaikanInfrastrukturSaluranPost');
        removeCondition1('JasaRenovasiPerbaikanInfrastrukturTrotoarPost');

       // hapus elemen id Semua Sub JasaRenovasiPerbaikanBangunan
        removeCondition1('JasaRenovasiPerbaikanBangunanRumahPost');
        removeCondition1('JasaRenovasiPerbaikanBangunanKantorPost');
        removeCondition1('JasaRenovasiPerbaikanBangunanPabrikPost');
        removeCondition1('JasaRenovasiPerbaikanBangunanGedungPost');
        removeCondition1('JasaRenovasiPerbaikanBangunanGudangPost');
        removeCondition1('JasaRenovasiPerbaikanBangunanHotelPost');

	 // hapus elemen id Semua Sub JasaRenovasiPerbaikanInterior
        removeCondition1('JasaRenovasiInteriorRumahPost');
        removeCondition1('JasaRenovasiInteriorKantorPost');
        removeCondition1('JasaRenovasiInteriorApartemenPost');
        removeCondition1('JasaRenovasiInteriorHotelPost');
        removeCondition1('JasaRenovasiInteriorTokoPost');
        removeCondition1('JasaRenovasiInteriorCustomPost');
        removeCondition1('JasaRenovasiInteriorRuanganPost');
	   
       // hapus elemen id Semua Sub JasaRenovasiPerbaikanFasadEksterior
        removeCondition1('JasaRenovasiFasadBangunanPost');
        removeCondition1('JasaRenovasiEksteriorBangunanPost');
        removeCondition1('JasaPerbaikanArsitekturEksteriorPost');

	// hapus elemen id Semua Sub JasaRenovasiPerbaikanFasilitas
        removeCondition1('JasaRenovasiPerbaikanStadionOlahragaPost');
        removeCondition1('JasaRenovasiPerbaikanSekolahPost');
        removeCondition1('JasaRenovasiPerbaikanRumahSakitPost');
        removeCondition1('JasaRenovasiPerbaikanTempatIbadahPost');
        removeCondition1('JasaRenovasiPerbaikanTerminalPost');
        removeCondition1('JasaRenovasiPerbaikanHaltePost');
        removeCondition1('JasaRenovasiPerbaikanTamanKotaPost');
	  // hapus elemen id Semua Sub JasaRenovasiPerbaikanTempatIbadahPost
        removeCondition1('JasaRenovasiMasjidPost');
        removeCondition1('JasaRenovasiGerejaPost');
        removeCondition1('JasaRenovasiKlentengPost');
        removeCondition1('JasaRenovasiLanggarPost');
        removeCondition1('JasaRenovasiMusholaPost');
        removeCondition1('JasaRenovasiViharaPost');
        removeCondition1('JasaRenovasiPuraPost');
	 
        JasaKonstruksiPerbaikanSubPostLink.style.visibility = 'visible';
        JasaRenovasiPerawatanPerbaikanBangunanPostLink.style.visibility = 'visible';
        JasaRenovasiPerbaikanStrukturPostLink.style.visibility = 'visible';
	JasaRenovasiPerbaikanStrukturTeknikBetonPostLink.style.visibility = 'visible';
	
	JasaShotcreteBetonPostLink.style.visibility = 'visible';
        pageNameJasaKonsPerbaikanPost.textContent = urlMappingJasaShortcreteBeton[cleanUrlJasaKonsPerbaikanPost];
    }
	
     if (urlMappingJasaGoutingStrukturBeton[cleanUrlJasaKonsPerbaikanPost]) {
        restoreCondition1('JasaKonsPerbaikanPost');
		 restoreCondition1('JasaRenovasiPerawatanPerbaikanBangunanPost');
        removeCondition1('JasaRenovasiPerbaikanSubPost');
        restoreCondition1('JasaRenovasiPerbaikanStrukturPost');
        restoreCondition1('JasaRenovasiPerbaikanStrukturTeknikBeton');
	
        restoreCondition1('JasaGroutingStrukturBetonPost');

           // hapus elemen id DIV Lain
	removeCondition1('JasaDesInPost');
        removeCondition1('ProdukInFurPost');
	removeCondition1('ProdukKonsSaluranPost');
        removeCondition1('ProdukKonsPembatasPost');
	    removeCondition1('ProdukKonsDindingModularPost');
        removeCondition1('ProdukKonsPost');
        removeCondition1('JasaKonsPembatasPost');
        removeCondition1('JasaKonsPondasiTanahPost');
        removeCondition1('JasaKonsPerkuatanTanahLongsorPost');
        removeCondition1('MaterialKonsStukturPost');
        removeCondition1('MaterialKonsFasadPelapisEksteriorPost');
	removeCondition1('MaterialKonsAtapPenutupPost');
        removeCondition1('JasaKonsCuttingBetonPost');
        removeCondition1('JasaKonsBongkarBangunanPost');
        removeCondition1('JasaKonsPengeboranPost'); 
	removeCondition1('JasaKonsFinishingPost');
        removeCondition1('JasaKonsStrukturPost');
        removeCondition1('JasaKonsAlatKonstruksiPost');
        removeCondition1('JasaKonsJalanPerkerasanPost');


	// hapus elemen JasaPerbaikanKons Lain kecuali JasaRenovasiPerbaikanStrukturPost
        removeCondition1('JasaRenovasiPerbaikanBangunanPost');
        removeCondition1('JasaRenovasiPerbaikanInfrastrukturPost');
        removeCondition1('JasaRenovasiPerbaikanFasilitasPost');
	removeCondition1('JasaRenovasiPerbaikanInteriorPost');
	removeCondition1('JasaRenovasiPerbaikanFasadPost');

	// hapus elemen id Sub JasaRenovasiPerbaikanStrukturTeknikBeton SELAIN jasa chipping
        removeCondition1('JasaInjeksiBetonRetakPost');
        removeCondition1('JasaInjeksiRetakBetonPost');
        removeCondition1('JasaShotcreteBetonPost');
        removeCondition1('JasaChippingBetonPost');
        removeCondition1('JasaPerbaikanBetonMengelupasPost');
        removeCondition1('JasaPerbaikanBetonKeroposPost');
        removeCondition1('JasaPerbaikanBetonRetakPost');
        removeCondition1('JasaPatchingBetonPost');
        //removeCondition1('JasaChippingBetonPost');
        
        removeCondition1('JasaBetonKarbonasiPost');
        removeCondition1('JasaPerkuatanStrukturCfrpPost');

	// hapus elemen id Sub JasaRenovasiPerbaikanStrukturDinding SEMUA
        
        
        removeCondition1('JasaInjeksiDindingRetakPost');
        removeCondition1('JasaPerbaikanDindingRetakStrukturPost');
        removeCondition1('JasaPerbaikanStrukturDindingRetakPost');
        removeCondition1('JasaBobokDindingInstalasiPost');
        removeCondition1('JasaPerbaikanStrukturDindingLembabPost');
        removeCondition1('JasaRenovasiPenggantianDindingBataPost');
        removeCondition1('JasaPerbaikanPenggantianDindingBataPost');
	// hapus elemen id Sub JasaRenovasiPerbaikanStrukturUmum SEMUA
	/*
        removeCondition1('JasaPerbaikanRetakStrukturPost');
        removeCondition1('JasaPenguatanStrukturBangunanPost');
        removeCondition1('JasaRenovasiStrukturBetonPost');
        removeCondition1('JasaPerkuatanStrukturBetonPost');
        removeCondition1('JasaPerbaikanRetakBetonPost');
        removeCondition1('JasaRepairStrukturBetonPost');
        removeCondition1('JasaPerbaikanStrukturBetonPost');
        removeCondition1('JasaRenovasiPerbaikanRetakStrukturPost');
	*/
	// hapus elemen id Sub JasaRenovasiPerbaikanBangunanRumahPost SEMUA
        removeCondition1('JasaRenovasiRumahMinimalisPost');
        removeCondition1('JasaRenovasiRumahType36Post');
        removeCondition1('JasaRenovasiRumahType45Post');
        removeCondition1('JasaRenovasiRumah2LantaiPost');
        removeCondition1('JasaRenovasiPerbaikanAtapRumahPost');
        removeCondition1('JasaRenovasiDindingRumahPost');
        removeCondition1('JasaPerbaikanStrukturRumahPost');
        removeCondition1('JasaRenovasiKosmetikRumahPost');
        removeCondition1('JasaRenovasiRumahTumbuhPost');
	     
	// hapus elemen id Sub JasaRenovasiPerbaikan yang lain
        removeCondition1('JasaRenovasiPerbaikanInfrastrukturPost');
        removeCondition1('JasaRenovasiPerbaikanBangunanPost');
        removeCondition1('JasaRenovasiPerbaikanInteriorPost');
	removeCondition1('JasaRenovasiPerbaikanFasadPost');
	removeCondition1('JasaRenovasiPerbaikanFasilitasPost');

	// hapus elemen id Semua Sub JasaRenovasiPerbaikanStruktur selain JasaRenovasiPerbaikanStrukturTeknikBetonPost
	//removeCondition1('JasaRenovasiPerbaikanStrukturUmumPost');
		 			removeCondition1('JasaPerbaikanGedungBertingkatPost');
			removeCondition1('JasaPerbaikanStrukturBangunanTuaPost');
			removeCondition1('JasaPerbaikanStrukturBangunanMiringPost');
		 
	removeCondition1('JasaRenovasiPerbaikanStrukturKolomBalokPost');	
  		removeCondition1('JasaRenovasiPerbaikanStrukturKolomPost');
  		removeCondition1('JasaRenovasiPerbaikanStrukturBalokPost');
        removeCondition1('JasaRenovasiPerbaikanStrukturPondasiPost');
        removeCondition1('JasaRenovasiPerbaikanStrukturLantaiBetonPost');
	removeCondition1('JasaPerbaikanStrukturBetonPost');
	removeCondition1('JasaRenovasiPerbaikanStrukturAtapPost');
	removeCondition1('JasaRenovasiPerbaikanStrukturDindingPost');
	
       
        // hapus elemen id Semua Sub JasaRenovasiPerbaikanInfrastruktur
        removeCondition1('JasaRenovasiPerbaikanInfrastrukturJalanPost');
        removeCondition1('JasaRenovasiPerbaikanInfrastrukturJembatanPost');
        removeCondition1('JasaRenovasiPerbaikanInfrastrukturSaluranPost');
        removeCondition1('JasaRenovasiPerbaikanInfrastrukturTrotoarPost');

       // hapus elemen id Semua Sub JasaRenovasiPerbaikanBangunan
        removeCondition1('JasaRenovasiPerbaikanBangunanRumahPost');
        removeCondition1('JasaRenovasiPerbaikanBangunanKantorPost');
        removeCondition1('JasaRenovasiPerbaikanBangunanPabrikPost');
        removeCondition1('JasaRenovasiPerbaikanBangunanGedungPost');
        removeCondition1('JasaRenovasiPerbaikanBangunanGudangPost');
        removeCondition1('JasaRenovasiPerbaikanBangunanHotelPost');

	 // hapus elemen id Semua Sub JasaRenovasiPerbaikanInterior
        removeCondition1('JasaRenovasiInteriorRumahPost');
        removeCondition1('JasaRenovasiInteriorKantorPost');
        removeCondition1('JasaRenovasiInteriorApartemenPost');
        removeCondition1('JasaRenovasiInteriorHotelPost');
        removeCondition1('JasaRenovasiInteriorTokoPost');
        removeCondition1('JasaRenovasiInteriorCustomPost');
        removeCondition1('JasaRenovasiInteriorRuanganPost');
	   
       // hapus elemen id Semua Sub JasaRenovasiPerbaikanFasadEksterior
        removeCondition1('JasaRenovasiFasadBangunanPost');
        removeCondition1('JasaRenovasiEksteriorBangunanPost');
        removeCondition1('JasaPerbaikanArsitekturEksteriorPost');

	// hapus elemen id Semua Sub JasaRenovasiPerbaikanFasilitas
        removeCondition1('JasaRenovasiPerbaikanStadionOlahragaPost');
        removeCondition1('JasaRenovasiPerbaikanSekolahPost');
        removeCondition1('JasaRenovasiPerbaikanRumahSakitPost');
        removeCondition1('JasaRenovasiPerbaikanTempatIbadahPost');
        removeCondition1('JasaRenovasiPerbaikanTerminalPost');
        removeCondition1('JasaRenovasiPerbaikanHaltePost');
        removeCondition1('JasaRenovasiPerbaikanTamanKotaPost');
	   // hapus elemen id Semua Sub JasaRenovasiPerbaikanTempatIbadahPost
        removeCondition1('JasaRenovasiMasjidPost');
        removeCondition1('JasaRenovasiGerejaPost');
        removeCondition1('JasaRenovasiKlentengPost');
        removeCondition1('JasaRenovasiLanggarPost');
        removeCondition1('JasaRenovasiMusholaPost');
        removeCondition1('JasaRenovasiViharaPost');
        removeCondition1('JasaRenovasiPuraPost');
	
        JasaKonstruksiPerbaikanSubPostLink.style.visibility = 'visible';
        JasaRenovasiPerawatanPerbaikanBangunanPostLink.style.visibility = 'visible';
        JasaRenovasiPerbaikanStrukturPostLink.style.visibility = 'visible';
	JasaRenovasiPerbaikanStrukturTeknikBetonPostLink.style.visibility = 'visible';
	
	JasaGroutingStrukturBetonPostLink.style.visibility = 'visible';
        pageNameJasaKonsPerbaikanPost.textContent = urlMappingJasaGoutingStrukturBeton[cleanUrlJasaKonsPerbaikanPost];
    }
	
  if (urlMappingJasaInjeksiBetonRetak[cleanUrlJasaKonsPerbaikanPost]) {
        restoreCondition1('JasaKonsPerbaikanPost');
	     restoreCondition1('JasaRenovasiPerawatanPerbaikanBangunanPost');
        removeCondition1('JasaRenovasiPerbaikanSubPost');
        restoreCondition1('JasaRenovasiPerbaikanStrukturPost');
        restoreCondition1('JasaRenovasiPerbaikanStrukturTeknikBeton');
	
        restoreCondition1('JasaInjeksiBetonRetakPost');

           // hapus elemen id DIV Lain
	removeCondition1('JasaDesInPost');
        removeCondition1('ProdukInFurPost');
	removeCondition1('ProdukKonsSaluranPost');
        removeCondition1('ProdukKonsPembatasPost');
	    removeCondition1('ProdukKonsDindingModularPost');
        removeCondition1('ProdukKonsPost');
        removeCondition1('JasaKonsPembatasPost');
        removeCondition1('JasaKonsPondasiTanahPost');
        removeCondition1('JasaKonsPerkuatanTanahLongsorPost');
        removeCondition1('MaterialKonsStukturPost');
        removeCondition1('MaterialKonsFasadPelapisEksteriorPost');
	removeCondition1('MaterialKonsAtapPenutupPost');
        removeCondition1('JasaKonsCuttingBetonPost');
        removeCondition1('JasaKonsBongkarBangunanPost');
        removeCondition1('JasaKonsPengeboranPost'); 
	removeCondition1('JasaKonsFinishingPost');
        removeCondition1('JasaKonsStrukturPost');
        removeCondition1('JasaKonsAlatKonstruksiPost');
        removeCondition1('JasaKonsJalanPerkerasanPost');


	// hapus elemen JasaPerbaikanKons Lain kecuali JasaRenovasiPerbaikanStrukturPost
        removeCondition1('JasaRenovasiPerbaikanBangunanPost');
        removeCondition1('JasaRenovasiPerbaikanInfrastrukturPost');
        removeCondition1('JasaRenovasiPerbaikanFasilitasPost');
	removeCondition1('JasaRenovasiPerbaikanInteriorPost');
	removeCondition1('JasaRenovasiPerbaikanFasadPost');
      					

	// hapus elemen id Sub JasaRenovasiPerbaikanStrukturTeknikBeton SELAIN JasaInjeksiBetonRetakPost
        removeCondition1('JasaGroutingStrukturBetonPost');
        removeCondition1('JasaInjeksiRetakBetonPost');
        removeCondition1('JasaShotcreteBetonPost');
        removeCondition1('JasaChippingBetonPost');
        removeCondition1('JasaPerbaikanBetonMengelupasPost');
        removeCondition1('JasaPerbaikanBetonKeroposPost');
        removeCondition1('JasaPerbaikanBetonRetakPost');
        removeCondition1('JasaPatchingBetonPost');
        //removeCondition1('JasaChippingBetonPost');
        
        removeCondition1('JasaBetonKarbonasiPost');
        removeCondition1('JasaPerkuatanStrukturCfrpPost');

	// hapus elemen id Sub JasaRenovasiPerbaikanStrukturDinding SEMUA
        
        
        removeCondition1('JasaInjeksiDindingRetakPost');
        removeCondition1('JasaPerbaikanDindingRetakStrukturPost');
        removeCondition1('JasaPerbaikanStrukturDindingRetakPost');
        removeCondition1('JasaBobokDindingInstalasiPost');
        removeCondition1('JasaPerbaikanStrukturDindingLembabPost');
        removeCondition1('JasaRenovasiPenggantianDindingBataPost');
        removeCondition1('JasaPerbaikanPenggantianDindingBataPost');
	// hapus elemen id Sub JasaRenovasiPerbaikanStrukturUmum SEMUA
	/*
        removeCondition1('JasaPerbaikanRetakStrukturPost');
        removeCondition1('JasaPenguatanStrukturBangunanPost');
        removeCondition1('JasaRenovasiStrukturBetonPost');
        removeCondition1('JasaPerkuatanStrukturBetonPost');
        removeCondition1('JasaPerbaikanRetakBetonPost');
        removeCondition1('JasaRepairStrukturBetonPost');
        removeCondition1('JasaPerbaikanStrukturBetonPost');
        removeCondition1('JasaRenovasiPerbaikanRetakStrukturPost');
	*/
	// hapus elemen id Sub JasaRenovasiPerbaikanBangunanRumahPost SEMUA
        removeCondition1('JasaRenovasiRumahMinimalisPost');
        removeCondition1('JasaRenovasiRumahType36Post');
        removeCondition1('JasaRenovasiRumahType45Post');
        removeCondition1('JasaRenovasiRumah2LantaiPost');
        removeCondition1('JasaRenovasiPerbaikanAtapRumahPost');
        removeCondition1('JasaRenovasiDindingRumahPost');
        removeCondition1('JasaPerbaikanStrukturRumahPost');
        removeCondition1('JasaRenovasiKosmetikRumahPost');
        removeCondition1('JasaRenovasiRumahTumbuhPost');
	  
	// hapus elemen id Sub JasaRenovasiPerbaikan yang lain
        removeCondition1('JasaRenovasiPerbaikanInfrastrukturPost');
        removeCondition1('JasaRenovasiPerbaikanBangunanPost');
        removeCondition1('JasaRenovasiPerbaikanInteriorPost');
	removeCondition1('JasaRenovasiPerbaikanFasadPost');
	removeCondition1('JasaRenovasiPerbaikanFasilitasPost');

	// hapus elemen id Semua Sub JasaRenovasiPerbaikanStruktur selain JasaRenovasiPerbaikanStrukturTeknikBetonPost
	//removeCondition1('JasaRenovasiPerbaikanStrukturUmumPost');
	  			removeCondition1('JasaPerbaikanGedungBertingkatPost');
			removeCondition1('JasaPerbaikanStrukturBangunanTuaPost');
			removeCondition1('JasaPerbaikanStrukturBangunanMiringPost');
	  
	removeCondition1('JasaRenovasiPerbaikanStrukturKolomBalokPost');
  		removeCondition1('JasaRenovasiPerbaikanStrukturKolomPost');
  		removeCondition1('JasaRenovasiPerbaikanStrukturBalokPost');
        removeCondition1('JasaRenovasiPerbaikanStrukturPondasiPost');
        removeCondition1('JasaRenovasiPerbaikanStrukturLantaiBetonPost');
	removeCondition1('JasaPerbaikanStrukturBetonPost');
	removeCondition1('JasaRenovasiPerbaikanStrukturAtapPost');
	removeCondition1('JasaRenovasiPerbaikanStrukturDindingPost');
	
       
        // hapus elemen id Semua Sub JasaRenovasiPerbaikanInfrastruktur
        removeCondition1('JasaRenovasiPerbaikanInfrastrukturJalanPost');
        removeCondition1('JasaRenovasiPerbaikanInfrastrukturJembatanPost');
        removeCondition1('JasaRenovasiPerbaikanInfrastrukturSaluranPost');
        removeCondition1('JasaRenovasiPerbaikanInfrastrukturTrotoarPost');

       // hapus elemen id Semua Sub JasaRenovasiPerbaikanBangunan
        removeCondition1('JasaRenovasiPerbaikanBangunanRumahPost');
        removeCondition1('JasaRenovasiPerbaikanBangunanKantorPost');
        removeCondition1('JasaRenovasiPerbaikanBangunanPabrikPost');
        removeCondition1('JasaRenovasiPerbaikanBangunanGedungPost');
        removeCondition1('JasaRenovasiPerbaikanBangunanGudangPost');
        removeCondition1('JasaRenovasiPerbaikanBangunanHotelPost');

	 // hapus elemen id Semua Sub JasaRenovasiPerbaikanInterior
        removeCondition1('JasaRenovasiInteriorRumahPost');
        removeCondition1('JasaRenovasiInteriorKantorPost');
        removeCondition1('JasaRenovasiInteriorApartemenPost');
        removeCondition1('JasaRenovasiInteriorHotelPost');
        removeCondition1('JasaRenovasiInteriorTokoPost');
        removeCondition1('JasaRenovasiInteriorCustomPost');
        removeCondition1('JasaRenovasiInteriorRuanganPost');
	   
       // hapus elemen id Semua Sub JasaRenovasiPerbaikanFasadEksterior
        removeCondition1('JasaRenovasiFasadBangunanPost');
        removeCondition1('JasaRenovasiEksteriorBangunanPost');
        removeCondition1('JasaPerbaikanArsitekturEksteriorPost');

	// hapus elemen id Semua Sub JasaRenovasiPerbaikanFasilitas
        removeCondition1('JasaRenovasiPerbaikanStadionOlahragaPost');
        removeCondition1('JasaRenovasiPerbaikanSekolahPost');
        removeCondition1('JasaRenovasiPerbaikanRumahSakitPost');
        removeCondition1('JasaRenovasiPerbaikanTempatIbadahPost');
        removeCondition1('JasaRenovasiPerbaikanTerminalPost');
        removeCondition1('JasaRenovasiPerbaikanHaltePost');
        removeCondition1('JasaRenovasiPerbaikanTamanKotaPost');
	   // hapus elemen id Semua Sub JasaRenovasiPerbaikanTempatIbadahPost
        removeCondition1('JasaRenovasiMasjidPost');
        removeCondition1('JasaRenovasiGerejaPost');
        removeCondition1('JasaRenovasiKlentengPost');
        removeCondition1('JasaRenovasiLanggarPost');
        removeCondition1('JasaRenovasiMusholaPost');
        removeCondition1('JasaRenovasiViharaPost');
        removeCondition1('JasaRenovasiPuraPost');
	
        JasaKonstruksiPerbaikanSubPostLink.style.visibility = 'visible';
        JasaRenovasiPerawatanPerbaikanBangunanPostLink.style.visibility = 'visible';
        JasaRenovasiPerbaikanStrukturPostLink.style.visibility = 'visible';
	JasaRenovasiPerbaikanStrukturTeknikBetonPostLink.style.visibility = 'visible';
	
	JasaInjeksiBetonRetakPostLink.style.visibility = 'visible';
        pageNameJasaKonsPerbaikanPost.textContent = urlMappingJasaInjeksiBetonRetak[cleanUrlJasaKonsPerbaikanPost];
    }
    
   // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaInjeksiBetonRetak[cleanUrlJasaKonsPerbaikanPost]) {
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
	      "name": "Jasa Perawatan Perbaikan Bangunan",
	      "item": "https://www.betonjayareadymix.com/p/jasa-perawatan-perbaikan-bangunan.html"
	    },
	    {
	      "@type": "ListItem",
	      "position": 4,
	      "name": "Jasa Perbaikan Struktur",
	      "item": "https://www.betonjayareadymix.com/p/jasa-perbaikan-struktur.html"
	    },
	    {
	      "@type": "ListItem",
	      "position": 5,
"name": "Jasa Rehabilitasi Beton",
	      "item": "https://www.betonjayareadymix.com/p/jasa-rehabilitasi-beton.html"
	    },
	    {
	      "@type": "ListItem",
	      "position": 6,
	      "name": "Jasa Injeksi Beton Retak",
	      "item": "https://www.betonjayareadymix.com/p/jasa-injeksi-beton-retak.html"
	    },
	   {
                "@type": "ListItem",
                "position": 7,
                "name": urlMappingJasaInjeksiBetonRetak[cleanUrlJasaKonsPerbaikanPost],
                "item": cleanUrlJasaKonsPerbaikanPost
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
//SUB JasaRenovasiPerbaikanStrukturUmum
	if (urlMappingJasaPerbaikanStrukturBetonFromMoneyPage1MoneyPage2[cleanUrlJasaKonsPerbaikanPost]) {
        generateBreadcrumbJasaKonstruksiPerbaikanPost(
        urlMappingJasaPerbaikanStrukturBetonFromMoneyPage1MoneyPage2,
        cleanUrlJasaKonsPerbaikanPost,
        [
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Perbaikan Bangunan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-perbaikan-bangunan.html' },
            { name: 'Perbandingan Jasa Perbaikan Bangunan', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-perbaikan-bangunan.html' },
            { name: 'Jasa Perbaikan Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-bangunan.html' },
            { name: 'Jasa Perbaikan Struktur Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-struktur-bangunan.html'},
            { name: 'Jasa Perbaikan Struktur Beton', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-struktur-beton.html'}
        ],
        'JASA_KONSTRUKSI'
    );     
    }
  	if (urlMappingJasaPerbaikanStrukturBetonFromMoneyPage1MoneyChild[cleanUrlJasaKonsPerbaikanPost]) {
        generateBreadcrumbJasaKonstruksiPerbaikanPost(
        urlMappingJasaPerbaikanStrukturBetonFromMoneyPage1MoneyChild,
        cleanUrlJasaKonsPerbaikanPost,
        [
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Perbaikan Bangunan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-perbaikan-bangunan.html' },
            { name: 'Perbandingan Jasa Perbaikan Bangunan', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-perbaikan-bangunan.html' },
            { name: 'Jasa Perbaikan Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-bangunan.html' },
            { name: 'Jasa Perbaikan Struktur Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-struktur-bangunan.html'},
            { name: 'Jasa Perbaikan Struktur Beton', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-struktur-beton.html'}
        ],
        'JASA_KONSTRUKSI'
    );     
    }
	
	if (urlMappingJasaPerbaikanStrukturKolomBetonFromMoneyPage2MoneyChild[cleanUrlJasaKonsPerbaikanPost]) {
        generateBreadcrumbJasaKonstruksiPerbaikanPost(
        urlMappingJasaPerbaikanStrukturKolomBetonFromMoneyPage2MoneyChild,
        cleanUrlJasaKonsPerbaikanPost,
        [
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Perbaikan Bangunan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-perbaikan-bangunan.html' },
            { name: 'Perbandingan Jasa Perbaikan Bangunan', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-perbaikan-bangunan.html' },
            { name: 'Jasa Perbaikan Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-bangunan.html' },
            { name: 'Jasa Perbaikan Struktur Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-struktur-bangunan.html'},
            { name: 'Jasa Perbaikan Struktur Kolom Balok', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-struktur-kolom-balok.html'},
            { name: 'Jasa Perbaikan Struktur Kolom Beton', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-struktur-kolom-beton.html'}
        ],
        'JASA_KONSTRUKSI'
    );     
    }

	
	if (urlMappingJasaPerbaikanStrukturBalokBetonFromMoneyPage2MoneyChild[cleanUrlJasaKonsPerbaikanPost]) {
        generateBreadcrumbJasaKonstruksiPerbaikanPost(
        urlMappingJasaPerbaikanStrukturBalokBetonFromMoneyPage2MoneyChild,
        cleanUrlJasaKonsPerbaikanPost,
        [
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Perbaikan Bangunan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-perbaikan-bangunan.html' },
            { name: 'Perbandingan Jasa Perbaikan Bangunan', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-perbaikan-bangunan.html' },
            { name: 'Jasa Perbaikan Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-bangunan.html' },
            { name: 'Jasa Perbaikan Struktur Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-struktur-bangunan.html'},
            { name: 'Jasa Perbaikan Struktur Kolom Balok', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-struktur-kolom-balok.html'},
            { name: 'Jasa Perbaikan Struktur Balok Beton', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-struktur-balok-beton.html'}
        ],
        'JASA_KONSTRUKSI'
    );     
    }
	
	if (urlMappingJasaPerkuatanKolomBetonFromMoneyPage2MoneyChild[cleanUrlJasaKonsPerbaikanPost]) {
        generateBreadcrumbJasaKonstruksiPerbaikanPost(
        urlMappingJasaPerkuatanKolomBetonFromMoneyPage2MoneyChild,
        cleanUrlJasaKonsPerbaikanPost,
        [
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Perbaikan Bangunan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-perbaikan-bangunan.html' },
            { name: 'Perbandingan Jasa Perbaikan Bangunan', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-perbaikan-bangunan.html' },
            { name: 'Jasa Perbaikan Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-bangunan.html' },
            { name: 'Jasa Perbaikan Struktur Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-struktur-bangunan.html'},
            { name: 'Jasa Perbaikan Struktur Kolom Balok', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-struktur-kolom-balok.html'},
			{ name: 'Jasa Perkuatan Kolom Beton', url: 'https://www.betonjayareadymix.com/p/jasa-perkuatan-kolom-beton.html'}
        ],
        'JASA_KONSTRUKSI'
    );     
    }

	if (urlMappingJasaPerkuatanBalokBetonFromMoneyPage2MoneyChild[cleanUrlJasaKonsPerbaikanPost]) {
        generateBreadcrumbJasaKonstruksiPerbaikanPost(
        urlMappingJasaPerkuatanBalokBetonFromMoneyPage2MoneyChild,
        cleanUrlJasaKonsPerbaikanPost,
        [
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Perbaikan Bangunan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-perbaikan-bangunan.html' },
            { name: 'Perbandingan Jasa Perbaikan Bangunan', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-perbaikan-bangunan.html' },
            { name: 'Jasa Perbaikan Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-bangunan.html' },
            { name: 'Jasa Perbaikan Struktur Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-struktur-bangunan.html'},
            { name: 'Jasa Perbaikan Struktur Kolom Balok', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-struktur-kolom-balok.html'},
			{ name: 'Jasa Perkuatan Balok Beton', url: 'https://www.betonjayareadymix.com/p/jasa-perkuatan-balok-beton.html'}
        ],
        'JASA_KONSTRUKSI'
    );     
    }
	
	if (urlMappingJasaJacketingKolomBalokFromMoneyPage2MoneyChild[cleanUrlJasaKonsPerbaikanPost]) {
        generateBreadcrumbJasaKonstruksiPerbaikanPost(
        urlMappingJasaJacketingKolomBalokFromMoneyPage2MoneyChild,
        cleanUrlJasaKonsPerbaikanPost,
        [
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Perbaikan Bangunan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-perbaikan-bangunan.html' },
            { name: 'Perbandingan Jasa Perbaikan Bangunan', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-perbaikan-bangunan.html' },
            { name: 'Jasa Perbaikan Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-bangunan.html' },
            { name: 'Jasa Perbaikan Struktur Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-struktur-bangunan.html'},
            { name: 'Jasa Perbaikan Struktur Kolom Balok', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-struktur-kolom-balok.html'},
			{ name: 'Jasa Jacketing Kolom Balok', url: 'https://www.betonjayareadymix.com/p/jasa-jacketing-kolom-balok.html'}
        ],
        'JASA_KONSTRUKSI'
    );     
    }

	if (urlMappingPerbaikanBalokGantungFromMoneyPage2MoneyChild[cleanUrlJasaKonsPerbaikanPost]) {
        generateBreadcrumbJasaKonstruksiPerbaikanPost(
        urlMappingPerbaikanBalokGantungFromMoneyPage2MoneyChild,
        cleanUrlJasaKonsPerbaikanPost,
        [
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Perbaikan Bangunan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-perbaikan-bangunan.html' },
            { name: 'Perbandingan Jasa Perbaikan Bangunan', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-perbaikan-bangunan.html' },
            { name: 'Jasa Perbaikan Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-bangunan.html' },
            { name: 'Jasa Perbaikan Struktur Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-struktur-bangunan.html'},
            { name: 'Jasa Perbaikan Struktur Kolom Balok', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-struktur-kolom-balok.html'},
			{ name: 'Jasa Perbaikan Balok Gantung', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-balok-gantung.html'}
        ],
        'JASA_KONSTRUKSI'
    );     
    }

	if (urlMappingPerbaikanStrukturTiangBetonFromMoneyPage2MoneyChild[cleanUrlJasaKonsPerbaikanPost]) {
        generateBreadcrumbJasaKonstruksiPerbaikanPost(
        urlMappingPerbaikanStrukturTiangBetonFromMoneyPage2MoneyChild,
        cleanUrlJasaKonsPerbaikanPost,
        [
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Perbaikan Bangunan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-perbaikan-bangunan.html' },
            { name: 'Perbandingan Jasa Perbaikan Bangunan', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-perbaikan-bangunan.html' },
            { name: 'Jasa Perbaikan Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-bangunan.html' },
            { name: 'Jasa Perbaikan Struktur Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-struktur-bangunan.html'},
            { name: 'Jasa Perbaikan Struktur Kolom Balok', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-struktur-kolom-balok.html'},
			{ name: 'Jasa Perbaikan Struktur Tiang Beton', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-struktur-tiang-beton.html'}
        ],
        'JASA_KONSTRUKSI'
    );     
    }

	if (urlMappingJasaPenguatanPondasiBangunanFromMoneyPage2MoneyChild[cleanUrlJasaKonsPerbaikanPost]) {
        generateBreadcrumbJasaKonstruksiPerbaikanPost(
        urlMappingJasaPenguatanPondasiBangunanFromMoneyPage2MoneyChild,
        cleanUrlJasaKonsPerbaikanPost,
        [
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Perbaikan Bangunan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-perbaikan-bangunan.html' },
            { name: 'Perbandingan Jasa Perbaikan Bangunan', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-perbaikan-bangunan.html' },
            { name: 'Jasa Perbaikan Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-bangunan.html' },
            { name: 'Jasa Perbaikan Struktur Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-struktur-bangunan.html'},
            { name: 'Jasa Perbaikan Pondasi Struktur', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-pondasi-struktur.html'},
			{ name: 'Jasa Penguatan Pondasi Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-penguatan-pondasi-bangunan.html'}
        ],
        'JASA_KONSTRUKSI'
    );     
    }
		
	if (urlMappingJasaPerbaikanPondasiBangunanFromMoneyPage2MoneyChild[cleanUrlJasaKonsPerbaikanPost]) {
        generateBreadcrumbJasaKonstruksiPerbaikanPost(
        urlMappingJasaPerbaikanPondasiBangunanFromMoneyPage2MoneyChild,
        cleanUrlJasaKonsPerbaikanPost,
        [
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Perbaikan Bangunan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-perbaikan-bangunan.html' },
            { name: 'Perbandingan Jasa Perbaikan Bangunan', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-perbaikan-bangunan.html' },
            { name: 'Jasa Perbaikan Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-bangunan.html' },
            { name: 'Jasa Perbaikan Struktur Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-struktur-bangunan.html'},
            { name: 'Jasa Perbaikan Pondasi Struktur', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-pondasi-struktur.html'},
			{ name: 'Jasa Perbaikan Pondasi Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-pondasi-bangunan.html'}
        ],
        'JASA_KONSTRUKSI'
    );     
    }
		
	if (urlMappingJasaPerbaikanPondasiRumahFromMoneyPage2MoneyChild[cleanUrlJasaKonsPerbaikanPost]) {
        generateBreadcrumbJasaKonstruksiPerbaikanPost(
        urlMappingJasaPerbaikanPondasiRumahFromMoneyPage2MoneyChild,
        cleanUrlJasaKonsPerbaikanPost,
        [
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Perbaikan Bangunan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-perbaikan-bangunan.html' },
            { name: 'Perbandingan Jasa Perbaikan Bangunan', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-perbaikan-bangunan.html' },
            { name: 'Jasa Perbaikan Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-bangunan.html' },
            { name: 'Jasa Perbaikan Struktur Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-struktur-bangunan.html'},
            { name: 'Jasa Perbaikan Pondasi Struktur', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-pondasi-struktur.html'},
			{ name: 'Jasa Perbaikan Pondasi Rumah', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-pondasi-rumah.html'}
        ],
        'JASA_KONSTRUKSI'
    );     
    }
		
	if (urlMappingJasaInjeksiDindingRetakFromMoneyPage2MoneyChild[cleanUrlJasaKonsPerbaikanPost]) {
        generateBreadcrumbJasaKonstruksiPerbaikanPost(
        urlMappingJasaInjeksiDindingRetakFromMoneyPage2MoneyChild,
        cleanUrlJasaKonsPerbaikanPost,
        [
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Perbaikan Bangunan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-perbaikan-bangunan.html' },
            { name: 'Perbandingan Jasa Perbaikan Bangunan', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-perbaikan-bangunan.html' },
            { name: 'Jasa Perbaikan Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-bangunan.html' },
            { name: 'Jasa Perbaikan Struktur Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-struktur-bangunan.html'},
            { name: 'Jasa Perbaikan Struktur Dinding', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-struktur-dinding.html'},
			{ name: 'Jasa Injeksi Dinding Retak', url: 'https://www.betonjayareadymix.com/p/jasa-injeksi-dinding-retak.html'}
        ],
        'JASA_KONSTRUKSI'
    );     
    }
		
	if (urlMappingJasaPerbaikanDindingRetakStrukturFromMoneyPage2MoneyChild[cleanUrlJasaKonsPerbaikanPost]) {
        generateBreadcrumbJasaKonstruksiPerbaikanPost(
        urlMappingJasaPerbaikanDindingRetakStrukturFromMoneyPage2MoneyChild,
        cleanUrlJasaKonsPerbaikanPost,
        [
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Perbaikan Bangunan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-perbaikan-bangunan.html' },
            { name: 'Perbandingan Jasa Perbaikan Bangunan', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-perbaikan-bangunan.html' },
            { name: 'Jasa Perbaikan Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-bangunan.html' },
            { name: 'Jasa Perbaikan Struktur Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-struktur-bangunan.html'},
            { name: 'Jasa Perbaikan Struktur Dinding', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-struktur-dinding.html'},
			{ name: 'Jasa Perbaikan Dinding Retak Struktur', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-dinding-retak-struktur.html'}
        ],
        'JASA_KONSTRUKSI'
    );     
		
    }
			
	if (urlMappingJasaPerbaikanStrukturDindingRetakFromMoneyPage2MoneyChild[cleanUrlJasaKonsPerbaikanPost]) {
        generateBreadcrumbJasaKonstruksiPerbaikanPost(
        urlMappingJasaPerbaikanStrukturDindingRetakFromMoneyPage2MoneyChild,
        cleanUrlJasaKonsPerbaikanPost,
        [
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Perbaikan Bangunan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-perbaikan-bangunan.html' },
            { name: 'Perbandingan Jasa Perbaikan Bangunan', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-perbaikan-bangunan.html' },
            { name: 'Jasa Perbaikan Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-bangunan.html' },
            { name: 'Jasa Perbaikan Struktur Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-struktur-bangunan.html'},
            { name: 'Jasa Perbaikan Struktur Dinding', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-struktur-dinding.html'},
			{ name: 'Jasa Perbaikan Struktur Dinding Retak', url: 'https://www.betonjayareadymix.com/p/jasa-perbaikan-struktur-dinding-retak.html'}
        ],
        'JASA_KONSTRUKSI'
    );     
		
    }
		
//SUB JasaRenovasiPerbaikanBangunanPost
//SUB JasaRenovasiPerbaikanBangunanRumahPost
if (urlMappingHargaJasaRenovasiRumahFromMoneyPage1MoneyPage2[cleanUrlJasaKonsPerbaikanPost]) {
  generateBreadcrumbJasaKonstruksiPerbaikanPost(
        urlMappingHargaJasaRenovasiRumahFromMoneyPage1MoneyPage2,
        cleanUrlJasaKonsPerbaikanPost,
        [
              { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Renovasi', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-renovasi.html' },
           	{ name: 'Perbandingan Jasa Renovasi', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-renovasi.html' },
           	{ name: 'Jasa Renovasi', url: 'https://www.betonjayareadymix.com/p/jasa-renovasi.html' },
           	{ name: 'Jasa Renovasi Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-renovasi-bangunan.html' },
           	{ name: 'Jasa Renovasi Bangunan Rumah', url: 'https://www.betonjayareadymix.com/p/jasa-renovasi-bangunan-rumah.html' },
           	{ name: 'Harga Jasa Renovasi Rumah', url: 'https://www.betonjayareadymix.com/p/harga-jasa-renovasi-rumah.html' }
        ],
        'JASA_KONSTRUKSI'
    );     	
}
if (urlMappingHargaJasaRenovasiRumahFromMoneyPage1MoneyChild[cleanUrlJasaKonsPerbaikanPost]) {
  generateBreadcrumbJasaKonstruksiPerbaikanPost(
        urlMappingHargaJasaRenovasiRumahFromMoneyPage1MoneyChild,
        cleanUrlJasaKonsPerbaikanPost,
        [
              { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
            { name: 'Daftar Jasa Renovasi', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-renovasi.html' },
           	{ name: 'Perbandingan Jasa Renovasi', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-renovasi.html' },
           	{ name: 'Jasa Renovasi', url: 'https://www.betonjayareadymix.com/p/jasa-renovasi.html' },
           	{ name: 'Jasa Renovasi Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-renovasi-bangunan.html' },
           	{ name: 'Jasa Renovasi Bangunan Rumah', url: 'https://www.betonjayareadymix.com/p/jasa-renovasi-bangunan-rumah.html' },
           	{ name: 'Harga Jasa Renovasi Rumah', url: 'https://www.betonjayareadymix.com/p/harga-jasa-renovasi-rumah.html' }
        ],
        'JASA_KONSTRUKSI'
    );     	
}
if (urlMappingJasaRenovasiRumahMinimalis[cleanUrlJasaKonsPerbaikanPost]) {
        restoreCondition1('JasaKonsPerbaikanPost');
	    	    removeCondition1('JasaRenovasiPerawatanPerbaikanBangunanPost');
        restoreCondition1('JasaRenovasiPerbaikanSubPost');
        restoreCondition1('JasaRenovasiPerbaikanBangunanPost');
        restoreCondition1('JasaRenovasiPerbaikanBangunanRumahPost');
	
        restoreCondition1('');

           // hapus elemen id DIV Lain
	removeCondition1('JasaDesInPost');
        removeCondition1('ProdukInFurPost');
	removeCondition1('ProdukKonsSaluranPost');
        removeCondition1('ProdukKonsPembatasPost');
	    removeCondition1('ProdukKonsDindingModularPost');
        removeCondition1('ProdukKonsPost');
        removeCondition1('JasaKonsPembatasPost');
        removeCondition1('JasaKonsPondasiTanahPost');
        removeCondition1('JasaKonsPerkuatanTanahLongsorPost');
        removeCondition1('MaterialKonsStukturPost');
        removeCondition1('MaterialKonsFasadPelapisEksteriorPost');
	removeCondition1('MaterialKonsAtapPenutupPost');
        removeCondition1('JasaKonsCuttingBetonPost');
        removeCondition1('JasaKonsBongkarBangunanPost');
        removeCondition1('JasaKonsPengeboranPost'); 
	removeCondition1('JasaKonsFinishingPost');
        removeCondition1('JasaKonsStrukturPost');
        removeCondition1('JasaKonsAlatKonstruksiPost');
        removeCondition1('JasaKonsJalanPerkerasanPost');


	// hapus elemen JasaPerbaikanKons Lain kecuali JasaRenovasiPerbaikanBangunanPost
        removeCondition1('JasaRenovasiPerbaikanStrukturPost');
        removeCondition1('JasaRenovasiPerbaikanInfrastrukturPost');
        removeCondition1('JasaRenovasiPerbaikanFasilitasPost');
	removeCondition1('JasaRenovasiPerbaikanInteriorPost');
	removeCondition1('JasaRenovasiPerbaikanFasadPost');
      
    // hapus elemen id Sub JasaRenovasiPerbaikanBangunanRumahPost SEMUA kecuali JasaRenovasiRumahMinimalisPost
        
        removeCondition1('JasaRenovasiRumahType36Post');
        removeCondition1('JasaRenovasiRumahType45Post');
        removeCondition1('JasaRenovasiRumah2LantaiPost');
        removeCondition1('JasaRenovasiPerbaikanAtapRumahPost');
        removeCondition1('JasaRenovasiDindingRumahPost');
        removeCondition1('JasaPerbaikanStrukturRumahPost');
        removeCondition1('JasaRenovasiKosmetikRumahPost');
        removeCondition1('JasaRenovasiRumahTumbuhPost');
        //removeCondition1('');
	
	// hapus elemen id Sub JasaRenovasiPerbaikanStrukturTeknikBeton SEMUA
        removeCondition1('JasaGroutingStrukturBetonPost');
        removeCondition1('JasaInjeksiRetakBetonPost');
        removeCondition1('JasaInjeksiBetonRetakPost');
        removeCondition1('JasaShotcreteBetonPost');
        removeCondition1('JasaChippingBetonPost');
        removeCondition1('JasaPerbaikanBetonMengelupasPost');
        removeCondition1('JasaPerbaikanBetonKeroposPost');
        removeCondition1('JasaPerbaikanBetonRetakPost');
        removeCondition1('JasaPatchingBetonPost');
        
        removeCondition1('JasaBetonKarbonasiPost');
        removeCondition1('JasaPerkuatanStrukturCfrpPost');
	// hapus elemen id Sub JasaRenovasiPerbaikanStrukturDinding SEMUA
        
        
        removeCondition1('JasaInjeksiDindingRetakPost');
        removeCondition1('JasaPerbaikanDindingRetakStrukturPost');
        removeCondition1('JasaPerbaikanStrukturDindingRetakPost');
        removeCondition1('JasaBobokDindingInstalasiPost');
        removeCondition1('JasaPerbaikanStrukturDindingLembabPost');
        removeCondition1('JasaRenovasiPenggantianDindingBataPost');
        removeCondition1('JasaPerbaikanPenggantianDindingBataPost');
	// hapus elemen id Sub JasaRenovasiPerbaikanStrukturUmum SEMUA
        removeCondition1('JasaPerbaikanRetakStrukturPost');
        removeCondition1('JasaPenguatanStrukturBangunanPost');
        removeCondition1('JasaRenovasiStrukturBetonPost');
        removeCondition1('JasaPerkuatanStrukturBetonPost');
        removeCondition1('JasaPerbaikanRetakBetonPost');
        removeCondition1('JasaRepairStrukturBetonPost');
        removeCondition1('JasaPerbaikanStrukturBetonPost');
        removeCondition1('JasaRenovasiPerbaikanRetakStrukturPost');
	
	// hapus elemen id Sub JasaRenovasiPerbaikan yang lain
        removeCondition1('JasaRenovasiPerbaikanInfrastrukturPost');
        removeCondition1('JasaRenovasiPerbaikanBangunanPost');
        removeCondition1('JasaRenovasiPerbaikanInteriorPost');
	removeCondition1('JasaRenovasiPerbaikanFasadPost');
	removeCondition1('JasaRenovasiPerbaikanFasilitasPost');

	// hapus elemen id Semua Sub JasaRenovasiPerbaikanStruktur SEMUA 
	removeCondition1('JasaPerbaikanStrukturBetonPost');
				removeCondition1('JasaPerbaikanGedungBertingkatPost');
			removeCondition1('JasaPerbaikanStrukturBangunanTuaPost');
			removeCondition1('JasaPerbaikanStrukturBangunanMiringPost');
	
	removeCondition1('JasaRenovasiPerbaikanStrukturKolomBalokPost');
  		removeCondition1('JasaRenovasiPerbaikanStrukturKolomPost');
  		removeCondition1('JasaRenovasiPerbaikanStrukturBalokPost');
        removeCondition1('JasaRenovasiPerbaikanStrukturPondasiPost');
        removeCondition1('JasaRenovasiPerbaikanStrukturLantaiBetonPost');
	removeCondition1('JasaRenovasiPerbaikanStrukturTeknikBetonPost');
	removeCondition1('JasaRenovasiPerbaikanStrukturAtapPost');
	removeCondition1('JasaRenovasiPerbaikanStrukturDindingPost');
	
       
        // hapus elemen id Semua Sub JasaRenovasiPerbaikanInfrastruktur
        removeCondition1('JasaRenovasiPerbaikanInfrastrukturJalanPost');
        removeCondition1('JasaRenovasiPerbaikanInfrastrukturJembatanPost');
        removeCondition1('JasaRenovasiPerbaikanInfrastrukturSaluranPost');
        removeCondition1('JasaRenovasiPerbaikanInfrastrukturTrotoarPost');

       // hapus elemen id Semua Sub JasaRenovasiPerbaikanBangunan KECUALI JasaRenovasiPerbaikanBangunanRumahPost
        //removeCondition1('');
        removeCondition1('JasaRenovasiPerbaikanBangunanKantorPost');
        removeCondition1('JasaRenovasiPerbaikanBangunanPabrikPost');
        removeCondition1('JasaRenovasiPerbaikanBangunanGedungPost');
        removeCondition1('JasaRenovasiPerbaikanBangunanGudangPost');
        removeCondition1('JasaRenovasiPerbaikanBangunanHotelPost');

	 // hapus elemen id Semua Sub JasaRenovasiPerbaikanInterior
        removeCondition1('JasaRenovasiInteriorRumahPost');
        removeCondition1('JasaRenovasiInteriorKantorPost');
        removeCondition1('JasaRenovasiInteriorApartemenPost');
        removeCondition1('JasaRenovasiInteriorHotelPost');
        removeCondition1('JasaRenovasiInteriorTokoPost');
        removeCondition1('JasaRenovasiInteriorCustomPost');
        removeCondition1('JasaRenovasiInteriorRuanganPost');
	   
       // hapus elemen id Semua Sub JasaRenovasiPerbaikanFasadEksterior
        removeCondition1('JasaRenovasiFasadBangunanPost');
        removeCondition1('JasaRenovasiEksteriorBangunanPost');
        removeCondition1('JasaPerbaikanArsitekturEksteriorPost');

	// hapus elemen id Semua Sub JasaRenovasiPerbaikanFasilitas
        removeCondition1('JasaRenovasiPerbaikanStadionOlahragaPost');
        removeCondition1('JasaRenovasiPerbaikanSekolahPost');
        removeCondition1('JasaRenovasiPerbaikanRumahSakitPost');
        removeCondition1('JasaRenovasiPerbaikanTempatIbadahPost');
        removeCondition1('JasaRenovasiPerbaikanTerminalPost');
        removeCondition1('JasaRenovasiPerbaikanHaltePost');
        removeCondition1('JasaRenovasiPerbaikanTamanKotaPost');
	   // hapus elemen id Semua Sub JasaRenovasiPerbaikanTempatIbadahPost
        removeCondition1('JasaRenovasiMasjidPost');
        removeCondition1('JasaRenovasiGerejaPost');
        removeCondition1('JasaRenovasiKlentengPost');
        removeCondition1('JasaRenovasiLanggarPost');
        removeCondition1('JasaRenovasiMusholaPost');
        removeCondition1('JasaRenovasiViharaPost');
        removeCondition1('JasaRenovasiPuraPost');
	
        JasaKonstruksiPerbaikanSubPostLink.style.visibility = 'visible';
        JasaRenovasiPerbaikanSubPostLink.style.visibility = 'visible';
       // removeCondition1('JasaRenovasiPerbaikanStrukturPost');
        JasaRenovasiPerbaikanBangunanPostLink.style.visibility = 'visible';
	JasaRenovasiPerbaikanBangunanRumahPostLink.style.visibility = 'visible';
	
	JasaRenovasiRumahMinimalisPostLink.style.visibility = 'visible';
        pageNameJasaKonsPerbaikanPost.textContent = urlMappingJasaRenovasiRumahMinimalis[cleanUrlJasaKonsPerbaikanPost];
    }
if (urlMappingJasaRenovasiRumahType36[cleanUrlJasaKonsPerbaikanPost]) {
        restoreCondition1('JasaKonsPerbaikanPost');
	    	    removeCondition1('JasaRenovasiPerawatanPerbaikanBangunanPost');
        restoreCondition1('JasaRenovasiPerbaikanSubPost');
        restoreCondition1('JasaRenovasiPerbaikanBangunanPost');
        restoreCondition1('JasaRenovasiPerbaikanBangunanRumahPost');
	
        restoreCondition1('');

           // hapus elemen id DIV Lain
	removeCondition1('JasaDesInPost');
        removeCondition1('ProdukInFurPost');
	removeCondition1('ProdukKonsSaluranPost');
        removeCondition1('ProdukKonsPembatasPost');
	    removeCondition1('ProdukKonsDindingModularPost');
        removeCondition1('ProdukKonsPost');
        removeCondition1('JasaKonsPembatasPost');
        removeCondition1('JasaKonsPondasiTanahPost');
        removeCondition1('JasaKonsPerkuatanTanahLongsorPost');
        removeCondition1('MaterialKonsStukturPost');
        removeCondition1('MaterialKonsFasadPelapisEksteriorPost');
	removeCondition1('MaterialKonsAtapPenutupPost');
        removeCondition1('JasaKonsCuttingBetonPost');
        removeCondition1('JasaKonsBongkarBangunanPost');
        removeCondition1('JasaKonsPengeboranPost'); 
	removeCondition1('JasaKonsFinishingPost');
        removeCondition1('JasaKonsStrukturPost');
        removeCondition1('JasaKonsAlatKonstruksiPost');
        removeCondition1('JasaKonsJalanPerkerasanPost');


	// hapus elemen JasaPerbaikanKons Lain kecuali JasaRenovasiPerbaikanBangunanPost
        removeCondition1('JasaRenovasiPerbaikanStrukturPost');
        removeCondition1('JasaRenovasiPerbaikanInfrastrukturPost');
        removeCondition1('JasaRenovasiPerbaikanFasilitasPost');
	removeCondition1('JasaRenovasiPerbaikanInteriorPost');
	removeCondition1('JasaRenovasiPerbaikanFasadPost');
      
    // hapus elemen id Sub JasaRenovasiPerbaikanBangunanRumahPost SEMUA kecuali JasaRenovasiRumahType36Post
        removeCondition1('JasaRenovasiRumahMinimalisPost');
        
        removeCondition1('JasaRenovasiRumahType45Post');
        removeCondition1('JasaRenovasiRumah2LantaiPost');
        removeCondition1('JasaRenovasiPerbaikanAtapRumahPost');
        removeCondition1('JasaRenovasiDindingRumahPost');
        removeCondition1('JasaPerbaikanStrukturRumahPost');
        removeCondition1('JasaRenovasiKosmetikRumahPost');
        removeCondition1('JasaRenovasiRumahTumbuhPost');
        //removeCondition1('');
	
	// hapus elemen id Sub JasaRenovasiPerbaikanStrukturTeknikBeton SEMUA
        removeCondition1('JasaGroutingStrukturBetonPost');
        removeCondition1('JasaInjeksiRetakBetonPost');
        removeCondition1('JasaInjeksiBetonRetakPost');
        removeCondition1('JasaShotcreteBetonPost');
        removeCondition1('JasaChippingBetonPost');
        removeCondition1('JasaPerbaikanBetonMengelupasPost');
        removeCondition1('JasaPerbaikanBetonKeroposPost');
        removeCondition1('JasaPerbaikanBetonRetakPost');
        removeCondition1('JasaPatchingBetonPost');
        
        removeCondition1('JasaBetonKarbonasiPost');
        removeCondition1('JasaPerkuatanStrukturCfrpPost');
	
	// hapus elemen id Sub JasaRenovasiPerbaikanStrukturDinding SEMUA
        removeCondition1('JasaInjeksiDindingRetakPost');
        removeCondition1('JasaPerbaikanDindingRetakStrukturPost');
        removeCondition1('JasaPerbaikanStrukturDindingRetakPost');
        removeCondition1('JasaBobokDindingInstalasiPost');
        removeCondition1('JasaPerbaikanStrukturDindingLembabPost');
        removeCondition1('JasaRenovasiPenggantianDindingBataPost');
        removeCondition1('JasaPerbaikanPenggantianDindingBataPost');
	// hapus elemen id Sub JasaRenovasiPerbaikanStrukturUmum SEMUA
	/* ga perlu
        removeCondition1('JasaPerbaikanRetakStrukturPost');
        removeCondition1('JasaPenguatanStrukturBangunanPost');
        removeCondition1('JasaRenovasiStrukturBetonPost');
        removeCondition1('JasaPerkuatanStrukturBetonPost');
        removeCondition1('JasaPerbaikanRetakBetonPost');
        removeCondition1('JasaRepairStrukturBetonPost');
        removeCondition1('JasaPerbaikanStrukturBetonPost');
        removeCondition1('JasaRenovasiPerbaikanRetakStrukturPost');
	*/
	
	// hapus elemen id Sub JasaRenovasiPerbaikan yang lain
        removeCondition1('JasaRenovasiPerbaikanInfrastrukturPost');
        removeCondition1('JasaRenovasiPerbaikanBangunanPost');
        removeCondition1('JasaRenovasiPerbaikanInteriorPost');
	removeCondition1('JasaRenovasiPerbaikanFasadPost');
	removeCondition1('JasaRenovasiPerbaikanFasilitasPost');

	// hapus elemen id Semua Sub JasaRenovasiPerbaikanStruktur SEMUA 
	removeCondition1('JasaPerbaikanStrukturBetonPost');
				removeCondition1('JasaPerbaikanGedungBertingkatPost');
			removeCondition1('JasaPerbaikanStrukturBangunanTuaPost');
			removeCondition1('JasaPerbaikanStrukturBangunanMiringPost');
	
	removeCondition1('JasaRenovasiPerbaikanStrukturKolomBalokPost');
  		removeCondition1('JasaRenovasiPerbaikanStrukturKolomPost');
  		removeCondition1('JasaRenovasiPerbaikanStrukturBalokPost');
        removeCondition1('JasaRenovasiPerbaikanStrukturPondasiPost');
        removeCondition1('JasaRenovasiPerbaikanStrukturLantaiBetonPost');
	removeCondition1('JasaRenovasiPerbaikanStrukturTeknikBetonPost');
	removeCondition1('JasaRenovasiPerbaikanStrukturAtapPost');
	removeCondition1('JasaRenovasiPerbaikanStrukturDindingPost');
	
       
        // hapus elemen id Semua Sub JasaRenovasiPerbaikanInfrastruktur
        removeCondition1('JasaRenovasiPerbaikanInfrastrukturJalanPost');
        removeCondition1('JasaRenovasiPerbaikanInfrastrukturJembatanPost');
        removeCondition1('JasaRenovasiPerbaikanInfrastrukturSaluranPost');
        removeCondition1('JasaRenovasiPerbaikanInfrastrukturTrotoarPost');

       // hapus elemen id Semua Sub JasaRenovasiPerbaikanBangunan KECUALI JasaRenovasiPerbaikanBangunanRumahPost
        //removeCondition1('');
        removeCondition1('JasaRenovasiPerbaikanBangunanKantorPost');
        removeCondition1('JasaRenovasiPerbaikanBangunanPabrikPost');
        removeCondition1('JasaRenovasiPerbaikanBangunanGedungPost');
        removeCondition1('JasaRenovasiPerbaikanBangunanGudangPost');
        removeCondition1('JasaRenovasiPerbaikanBangunanHotelPost');

	 // hapus elemen id Semua Sub JasaRenovasiPerbaikanInterior
        removeCondition1('JasaRenovasiInteriorRumahPost');
        removeCondition1('JasaRenovasiInteriorKantorPost');
        removeCondition1('JasaRenovasiInteriorApartemenPost');
        removeCondition1('JasaRenovasiInteriorHotelPost');
        removeCondition1('JasaRenovasiInteriorTokoPost');
        removeCondition1('JasaRenovasiInteriorCustomPost');
        removeCondition1('JasaRenovasiInteriorRuanganPost');
	   
       // hapus elemen id Semua Sub JasaRenovasiPerbaikanFasadEksterior
        removeCondition1('JasaRenovasiFasadBangunanPost');
        removeCondition1('JasaRenovasiEksteriorBangunanPost');
        removeCondition1('JasaPerbaikanArsitekturEksteriorPost');

	// hapus elemen id Semua Sub JasaRenovasiPerbaikanFasilitas
        removeCondition1('JasaRenovasiPerbaikanStadionOlahragaPost');
        removeCondition1('JasaRenovasiPerbaikanSekolahPost');
        removeCondition1('JasaRenovasiPerbaikanRumahSakitPost');
        removeCondition1('JasaRenovasiPerbaikanTempatIbadahPost');
        removeCondition1('JasaRenovasiPerbaikanTerminalPost');
        removeCondition1('JasaRenovasiPerbaikanHaltePost');
        removeCondition1('JasaRenovasiPerbaikanTamanKotaPost');
	   // hapus elemen id Semua Sub JasaRenovasiPerbaikanTempatIbadahPost
        removeCondition1('JasaRenovasiMasjidPost');
        removeCondition1('JasaRenovasiGerejaPost');
        removeCondition1('JasaRenovasiKlentengPost');
        removeCondition1('JasaRenovasiLanggarPost');
        removeCondition1('JasaRenovasiMusholaPost');
        removeCondition1('JasaRenovasiViharaPost');
        removeCondition1('JasaRenovasiPuraPost');
	
        JasaKonstruksiPerbaikanSubPostLink.style.visibility = 'visible';
        JasaRenovasiPerbaikanSubPostLink.style.visibility = 'visible';
       // removeCondition1('JasaRenovasiPerbaikanStrukturPost');
        JasaRenovasiPerbaikanBangunanPostLink.style.visibility = 'visible';
	JasaRenovasiPerbaikanBangunanRumahPostLink.style.visibility = 'visible';
	
	JasaRenovasiRumahType36PostLink.style.visibility = 'visible';
        pageNameJasaKonsPerbaikanPost.textContent = urlMappingJasaRenovasiRumahType36[cleanUrlJasaKonsPerbaikanPost];
    }
if (urlMappingJasaRenovasiRumahType45[cleanUrlJasaKonsPerbaikanPost]) {
        restoreCondition1('JasaKonsPerbaikanPost');
	    	    removeCondition1('JasaRenovasiPerawatanPerbaikanBangunanPost');
        restoreCondition1('JasaRenovasiPerbaikanSubPost');
        restoreCondition1('JasaRenovasiPerbaikanBangunanPost');
        restoreCondition1('JasaRenovasiPerbaikanBangunanRumahPost');
	
        restoreCondition1('');

           // hapus elemen id DIV Lain
	removeCondition1('JasaDesInPost');
        removeCondition1('ProdukInFurPost');
	removeCondition1('ProdukKonsSaluranPost');
        removeCondition1('ProdukKonsPembatasPost');
	    removeCondition1('ProdukKonsDindingModularPost');
        removeCondition1('ProdukKonsPost');
        removeCondition1('JasaKonsPembatasPost');
        removeCondition1('JasaKonsPondasiTanahPost');
        removeCondition1('JasaKonsPerkuatanTanahLongsorPost');
        removeCondition1('MaterialKonsStukturPost');
        removeCondition1('MaterialKonsFasadPelapisEksteriorPost');
	removeCondition1('MaterialKonsAtapPenutupPost');
        removeCondition1('JasaKonsCuttingBetonPost');
        removeCondition1('JasaKonsBongkarBangunanPost');
        removeCondition1('JasaKonsPengeboranPost'); 
	removeCondition1('JasaKonsFinishingPost');
        removeCondition1('JasaKonsStrukturPost');
        removeCondition1('JasaKonsAlatKonstruksiPost');
        removeCondition1('JasaKonsJalanPerkerasanPost');


	// hapus elemen JasaPerbaikanKons Lain kecuali JasaRenovasiPerbaikanBangunanPost
        removeCondition1('JasaRenovasiPerbaikanStrukturPost');
        removeCondition1('JasaRenovasiPerbaikanInfrastrukturPost');
        removeCondition1('JasaRenovasiPerbaikanFasilitasPost');
	removeCondition1('JasaRenovasiPerbaikanInteriorPost');
	removeCondition1('JasaRenovasiPerbaikanFasadPost');
      
    // hapus elemen id Sub JasaRenovasiPerbaikanBangunanRumahPost SEMUA kecuali JasaRenovasiRumahType45Post
        removeCondition1('JasaRenovasiRumahMinimalisPost');
        removeCondition1('JasaRenovasiRumahType36Post');
        
        removeCondition1('JasaRenovasiRumah2LantaiPost');
        removeCondition1('JasaRenovasiPerbaikanAtapRumahPost');
        removeCondition1('JasaRenovasiDindingRumahPost');
        removeCondition1('JasaPerbaikanStrukturRumahPost');
        removeCondition1('JasaRenovasiKosmetikRumahPost');
        removeCondition1('JasaRenovasiRumahTumbuhPost');
        //removeCondition1('');
	
	// hapus elemen id Sub JasaRenovasiPerbaikanStrukturTeknikBeton SEMUA
        removeCondition1('JasaGroutingStrukturBetonPost');
        removeCondition1('JasaInjeksiRetakBetonPost');
        removeCondition1('JasaInjeksiBetonRetakPost');
        removeCondition1('JasaShotcreteBetonPost');
        removeCondition1('JasaChippingBetonPost');
        removeCondition1('JasaPerbaikanBetonMengelupasPost');
        removeCondition1('JasaPerbaikanBetonKeroposPost');
        removeCondition1('JasaPerbaikanBetonRetakPost');
        removeCondition1('JasaPatchingBetonPost');
        
        removeCondition1('JasaBetonKarbonasiPost');
        removeCondition1('JasaPerkuatanStrukturCfrpPost');
	// hapus elemen id Sub JasaRenovasiPerbaikanStrukturDinding SEMUA
        
        
        removeCondition1('JasaInjeksiDindingRetakPost');
        removeCondition1('JasaPerbaikanDindingRetakStrukturPost');
        removeCondition1('JasaPerbaikanStrukturDindingRetakPost');
        removeCondition1('JasaBobokDindingInstalasiPost');
        removeCondition1('JasaPerbaikanStrukturDindingLembabPost');
        removeCondition1('JasaRenovasiPenggantianDindingBataPost');
        removeCondition1('JasaPerbaikanPenggantianDindingBataPost');
	// hapus elemen id Sub JasaRenovasiPerbaikanStrukturUmum SEMUA
        removeCondition1('JasaPerbaikanRetakStrukturPost');
        removeCondition1('JasaPenguatanStrukturBangunanPost');
        removeCondition1('JasaRenovasiStrukturBetonPost');
        removeCondition1('JasaPerkuatanStrukturBetonPost');
        removeCondition1('JasaPerbaikanRetakBetonPost');
        removeCondition1('JasaRepairStrukturBetonPost');
        removeCondition1('JasaPerbaikanStrukturBetonPost');
        removeCondition1('JasaRenovasiPerbaikanRetakStrukturPost');
	
	// hapus elemen id Sub JasaRenovasiPerbaikan yang lain
        removeCondition1('JasaRenovasiPerbaikanInfrastrukturPost');
        removeCondition1('JasaRenovasiPerbaikanBangunanPost');
        removeCondition1('JasaRenovasiPerbaikanInteriorPost');
	removeCondition1('JasaRenovasiPerbaikanFasadPost');
	removeCondition1('JasaRenovasiPerbaikanFasilitasPost');

	// hapus elemen id Semua Sub JasaRenovasiPerbaikanStruktur SEMUA 
	removeCondition1('JasaPerbaikanStrukturBetonPost');
				removeCondition1('JasaPerbaikanGedungBertingkatPost');
			removeCondition1('JasaPerbaikanStrukturBangunanTuaPost');
			removeCondition1('JasaPerbaikanStrukturBangunanMiringPost');
	
	removeCondition1('JasaRenovasiPerbaikanStrukturKolomBalokPost');
  		removeCondition1('JasaRenovasiPerbaikanStrukturKolomPost');
  		removeCondition1('JasaRenovasiPerbaikanStrukturBalokPost');
        removeCondition1('JasaRenovasiPerbaikanStrukturPondasiPost');
        removeCondition1('JasaRenovasiPerbaikanStrukturLantaiBetonPost');
	removeCondition1('JasaRenovasiPerbaikanStrukturTeknikBetonPost');
	removeCondition1('JasaRenovasiPerbaikanStrukturAtapPost');
	removeCondition1('JasaRenovasiPerbaikanStrukturDindingPost');
	
       
        // hapus elemen id Semua Sub JasaRenovasiPerbaikanInfrastruktur
        removeCondition1('JasaRenovasiPerbaikanInfrastrukturJalanPost');
        removeCondition1('JasaRenovasiPerbaikanInfrastrukturJembatanPost');
        removeCondition1('JasaRenovasiPerbaikanInfrastrukturSaluranPost');
        removeCondition1('JasaRenovasiPerbaikanInfrastrukturTrotoarPost');

       // hapus elemen id Semua Sub JasaRenovasiPerbaikanBangunan KECUALI JasaRenovasiPerbaikanBangunanRumahPost
        //removeCondition1('');
        removeCondition1('JasaRenovasiPerbaikanBangunanKantorPost');
        removeCondition1('JasaRenovasiPerbaikanBangunanPabrikPost');
        removeCondition1('JasaRenovasiPerbaikanBangunanGedungPost');
        removeCondition1('JasaRenovasiPerbaikanBangunanGudangPost');
        removeCondition1('JasaRenovasiPerbaikanBangunanHotelPost');

	 // hapus elemen id Semua Sub JasaRenovasiPerbaikanInterior
        removeCondition1('JasaRenovasiInteriorRumahPost');
        removeCondition1('JasaRenovasiInteriorKantorPost');
        removeCondition1('JasaRenovasiInteriorApartemenPost');
        removeCondition1('JasaRenovasiInteriorHotelPost');
        removeCondition1('JasaRenovasiInteriorTokoPost');
        removeCondition1('JasaRenovasiInteriorCustomPost');
        removeCondition1('JasaRenovasiInteriorRuanganPost');
	   
       // hapus elemen id Semua Sub JasaRenovasiPerbaikanFasadEksterior
        removeCondition1('JasaRenovasiFasadBangunanPost');
        removeCondition1('JasaRenovasiEksteriorBangunanPost');
        removeCondition1('JasaPerbaikanArsitekturEksteriorPost');

	// hapus elemen id Semua Sub JasaRenovasiPerbaikanFasilitas
        removeCondition1('JasaRenovasiPerbaikanStadionOlahragaPost');
        removeCondition1('JasaRenovasiPerbaikanSekolahPost');
        removeCondition1('JasaRenovasiPerbaikanRumahSakitPost');
        removeCondition1('JasaRenovasiPerbaikanTempatIbadahPost');
        removeCondition1('JasaRenovasiPerbaikanTerminalPost');
        removeCondition1('JasaRenovasiPerbaikanHaltePost');
        removeCondition1('JasaRenovasiPerbaikanTamanKotaPost');
	   // hapus elemen id Semua Sub JasaRenovasiPerbaikanTempatIbadahPost
        removeCondition1('JasaRenovasiMasjidPost');
        removeCondition1('JasaRenovasiGerejaPost');
        removeCondition1('JasaRenovasiKlentengPost');
        removeCondition1('JasaRenovasiLanggarPost');
        removeCondition1('JasaRenovasiMusholaPost');
        removeCondition1('JasaRenovasiViharaPost');
        removeCondition1('JasaRenovasiPuraPost');
	
        JasaKonstruksiPerbaikanSubPostLink.style.visibility = 'visible';
        JasaRenovasiPerbaikanSubPostLink.style.visibility = 'visible';
       // removeCondition1('JasaRenovasiPerbaikanStrukturPost');
        JasaRenovasiPerbaikanBangunanPostLink.style.visibility = 'visible';
	JasaRenovasiPerbaikanBangunanRumahPostLink.style.visibility = 'visible';
	
	JasaRenovasiRumahType45PostLink.style.visibility = 'visible';
        pageNameJasaKonsPerbaikanPost.textContent = urlMappingJasaRenovasiRumahType45[cleanUrlJasaKonsPerbaikanPost];
    }

//SUB JasaPerbaikanFasilitasUmum
//SUB JasaRenovasiStadion
if (urlMappingJasaRenovasiStadion[cleanUrlJasaKonsPerbaikanPost]) {
        restoreCondition1('JasaKonsPerbaikanPost');
	   	    removeCondition1('JasaRenovasiPerawatanPerbaikanBangunanPost');
        restoreCondition1('JasaRenovasiPerbaikanSubPost');
        restoreCondition1('JasaRenovasiPerbaikanSubPost');
        restoreCondition1('JasaRenovasiPerbaikanFasilitasPost');
	
        restoreCondition1('JasaRenovasiPerbaikanStadionOlahragaPost');

           // hapus elemen id DIV Lain
	removeCondition1('JasaDesInPost');
        removeCondition1('ProdukInFurPost');
	removeCondition1('ProdukKonsSaluranPost');
        removeCondition1('ProdukKonsPembatasPost');
	    removeCondition1('ProdukKonsDindingModularPost');
        removeCondition1('ProdukKonsPost');
        removeCondition1('JasaKonsPembatasPost');
        removeCondition1('JasaKonsPondasiTanahPost');
        removeCondition1('JasaKonsPerkuatanTanahLongsorPost');
        removeCondition1('MaterialKonsStukturPost');
        removeCondition1('MaterialKonsFasadPelapisEksteriorPost');
	removeCondition1('MaterialKonsAtapPenutupPost');
        removeCondition1('JasaKonsCuttingBetonPost');
        removeCondition1('JasaKonsBongkarBangunanPost');
        removeCondition1('JasaKonsPengeboranPost'); 
	removeCondition1('JasaKonsFinishingPost');
        removeCondition1('JasaKonsStrukturPost');
        removeCondition1('JasaKonsAlatKonstruksiPost');
        removeCondition1('JasaKonsJalanPerkerasanPost');


	// hapus elemen JasaPerbaikanKons Lain kecuali JasaRenovasiPerbaikanFasilitasPost
        removeCondition1('JasaRenovasiPerbaikanBangunanPost');
        removeCondition1('JasaRenovasiPerbaikanInfrastrukturPost');
        removeCondition1('JasaRenovasiPerbaikanStrukturPost');
	removeCondition1('JasaRenovasiPerbaikanInteriorPost');
	removeCondition1('JasaRenovasiPerbaikanFasadPost');
      

	// hapus elemen id Sub JasaRenovasiPerbaikanStrukturTeknikBeton SEMUA
        removeCondition1('JasaGroutingStrukturBetonPost');
        removeCondition1('JasaInjeksiRetakBetonPost');
        removeCondition1('JasaInjeksiBetonRetakPost');
        removeCondition1('JasaShotcreteBetonPost');
        removeCondition1('JasaChippingBetonPost');
        removeCondition1('JasaPerbaikanBetonMengelupasPost');
        removeCondition1('JasaPerbaikanBetonKeroposPost');
        removeCondition1('JasaPerbaikanBetonRetakPost');
        removeCondition1('JasaPatchingBetonPost');
        
        removeCondition1('JasaBetonKarbonasiPost');
        removeCondition1('JasaPerkuatanStrukturCfrpPost');
	// hapus elemen id Sub JasaRenovasiPerbaikanStrukturDinding SEMUA
        
        
        removeCondition1('JasaInjeksiDindingRetakPost');
        removeCondition1('JasaPerbaikanDindingRetakStrukturPost');
        removeCondition1('JasaPerbaikanStrukturDindingRetakPost');
        removeCondition1('JasaBobokDindingInstalasiPost');
        removeCondition1('JasaPerbaikanStrukturDindingLembabPost');
        removeCondition1('JasaRenovasiPenggantianDindingBataPost');
        removeCondition1('JasaPerbaikanPenggantianDindingBataPost');
	// hapus elemen id Sub JasaRenovasiPerbaikanBangunanRumahPost SEMUA
        removeCondition1('JasaRenovasiRumahMinimalisPost');
        removeCondition1('JasaRenovasiRumahType36Post');
        removeCondition1('JasaRenovasiRumahType45Post');
        removeCondition1('JasaRenovasiRumah2LantaiPost');
        removeCondition1('JasaRenovasiPerbaikanAtapRumahPost');
        removeCondition1('JasaRenovasiDindingRumahPost');
        removeCondition1('JasaPerbaikanStrukturRumahPost');
        removeCondition1('JasaRenovasiKosmetikRumahPost');
        removeCondition1('JasaRenovasiRumahTumbuhPost');
	
	// hapus elemen id Sub JasaRenovasiPerbaikanStrukturUmum SEMUA KECUALI JasaPerbaikanStrukturBetonPost
        /* ga perlu
	removeCondition1('JasaPerbaikanRetakStrukturPost');
        removeCondition1('JasaPenguatanStrukturBangunanPost');
        removeCondition1('JasaRenovasiStrukturBetonPost');
        removeCondition1('JasaPerkuatanStrukturBetonPost');
        removeCondition1('JasaPerbaikanRetakBetonPost');
        removeCondition1('JasaRepairStrukturBetonPost');
        removeCondition1('');
        removeCondition1('JasaRenovasiPerbaikanRetakStrukturPost');
	*/
	
	// hapus elemen id Sub JasaRenovasiPerbaikan yang lain
        removeCondition1('JasaRenovasiPerbaikanInfrastrukturPost');
        removeCondition1('JasaRenovasiPerbaikanBangunanPost');
        removeCondition1('JasaRenovasiPerbaikanInteriorPost');
	removeCondition1('JasaRenovasiPerbaikanFasadPost');
	removeCondition1('JasaRenovasiPerbaikanStrukturPost');

	// hapus elemen id Semua JasaRenovasiPerbaikanStruktur dan Sub nya
	removeCondition1('JasaPerbaikanStrukturBetonPost');
				removeCondition1('JasaPerbaikanGedungBertingkatPost');
			removeCondition1('JasaPerbaikanStrukturBangunanTuaPost');
			removeCondition1('JasaPerbaikanStrukturBangunanMiringPost');
	
	removeCondition1('JasaRenovasiPerbaikanStrukturTeknikBetonPost');
	removeCondition1('JasaRenovasiPerbaikanStrukturKolomBalokPost');
  		removeCondition1('JasaRenovasiPerbaikanStrukturKolomPost');
  		removeCondition1('JasaRenovasiPerbaikanStrukturBalokPost');
        removeCondition1('JasaRenovasiPerbaikanStrukturPondasiPost');
        removeCondition1('JasaRenovasiPerbaikanStrukturLantaiBetonPost');
	removeCondition1('JasaRenovasiPerbaikanStrukturAtapPost');
	removeCondition1('JasaRenovasiPerbaikanStrukturDindingPost');
	
       
        // hapus elemen id Semua Sub JasaRenovasiPerbaikanInfrastruktur
        removeCondition1('JasaRenovasiPerbaikanInfrastrukturJalanPost');
        removeCondition1('JasaRenovasiPerbaikanInfrastrukturJembatanPost');
        removeCondition1('JasaRenovasiPerbaikanInfrastrukturSaluranPost');
        removeCondition1('JasaRenovasiPerbaikanInfrastrukturTrotoarPost');

       // hapus elemen id Semua Sub JasaRenovasiPerbaikanBangunan
        removeCondition1('JasaRenovasiPerbaikanBangunanRumahPost');
        removeCondition1('JasaRenovasiPerbaikanBangunanKantorPost');
        removeCondition1('JasaRenovasiPerbaikanBangunanPabrikPost');
        removeCondition1('JasaRenovasiPerbaikanBangunanGedungPost');
        removeCondition1('JasaRenovasiPerbaikanBangunanGudangPost');
        removeCondition1('JasaRenovasiPerbaikanBangunanHotelPost');

	 // hapus elemen id Semua Sub JasaRenovasiPerbaikanInterior
        removeCondition1('JasaRenovasiInteriorRumahPost');
        removeCondition1('JasaRenovasiInteriorKantorPost');
        removeCondition1('JasaRenovasiInteriorApartemenPost');
        removeCondition1('JasaRenovasiInteriorHotelPost');
        removeCondition1('JasaRenovasiInteriorTokoPost');
        removeCondition1('JasaRenovasiInteriorCustomPost');
        removeCondition1('JasaRenovasiInteriorRuanganPost');
	   
       // hapus elemen id Semua Sub JasaRenovasiPerbaikanFasadEksterior
        removeCondition1('JasaRenovasiFasadBangunanPost');
        removeCondition1('JasaRenovasiEksteriorBangunanPost');
        removeCondition1('JasaPerbaikanArsitekturEksteriorPost');

	// hapus elemen id Semua Sub JasaRenovasiPerbaikanFasilitas
        //removeCondition1('JasaRenovasiPerbaikanStadionOlahragaPost');
        removeCondition1('JasaRenovasiPerbaikanSekolahPost');
        removeCondition1('JasaRenovasiPerbaikanRumahSakitPost');
        removeCondition1('JasaRenovasiPerbaikanTempatIbadahPost');
        removeCondition1('JasaRenovasiPerbaikanTerminalPost');
        removeCondition1('JasaRenovasiPerbaikanHaltePost');
        removeCondition1('JasaRenovasiPerbaikanTamanKotaPost');
	   // hapus elemen id Semua Sub JasaRenovasiPerbaikanTempatIbadahPost
        removeCondition1('JasaRenovasiMasjidPost');
        removeCondition1('JasaRenovasiGerejaPost');
        removeCondition1('JasaRenovasiKlentengPost');
        removeCondition1('JasaRenovasiLanggarPost');
        removeCondition1('JasaRenovasiMusholaPost');
        removeCondition1('JasaRenovasiViharaPost');
        removeCondition1('JasaRenovasiPuraPost');
	
        JasaKonstruksiPerbaikanSubPostLink.style.visibility = 'visible';
        JasaRenovasiPerbaikanSubPostLink.style.visibility = 'visible';
       JasaRenovasiPerbaikanFasilitasPostLink.style.visibility = 'visible';
	
	JasaRenovasiPerbaikanStadionOlahragaPost.style.visibility = 'visible';
        pageNameJasaKonsPerbaikanPost.textContent = urlMappingJasaRenovasiStadion[cleanUrlJasaKonsPerbaikanPost];
    }
	   // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaRenovasiStadion[cleanUrlJasaKonsPerbaikanPost]) {
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
      "name": "Jasa Renovasi",
      "item": "https://www.betonjayareadymix.com/p/jasa-renovasi.html"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "Jasa Perbaikan Fasilitas Umum",
      "item": "https://www.betonjayareadymix.com/p/jasa-perbaikan-fasilitas-umum.html"
    },
    {
      "@type": "ListItem",
      "position": 5,
      "name": "Jasa Renovasi Stadion",
      "item": "https://www.betonjayareadymix.com/p/jasa-renovasi-stadion.html"
    },
    {
      "@type": "ListItem",
      "position": 6,
      "name": urlMappingJasaRenovasiStadion[cleanUrlJasaKonsPerbaikanPost],
      "item": cleanUrlJasaKonsPerbaikanPost
    }
  ]
};
       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
}                                                               
}});

