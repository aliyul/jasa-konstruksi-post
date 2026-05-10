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

const urlMappingJasaPerbaikanStrukturBeton = {
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
  "https://www.betonjayareadymix.com/2018/09/jasa-perbaikan-beton-area-industri.html": "Jasa Perbaikan Beton Area Industri",  // TYPE: SUB1

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
// [MONEY_PAGE] - JASA PERBAIKAN KOLOM BETON
// 🧠 TYPE: MONEY_PAGE (WAJIB tampil, transaksional)
// 🧠 INTENT: Komersial (60%) + Transaksional (40%)
// 📌 STATUS: PERLU DIBUAT (halaman baru)
// ============================================================

const urlMappingJasaPerbaikanKolomBeton = {
  // "https://www.betonjayareadymix.com/p/jasa-perbaikan-kolom-beton.html": "Jasa Perbaikan Kolom Beton",  // TYPE: MONEY_PAGE
  // "https://www.betonjayareadymix.com/2019/08/harga-perbaikan-kolom-beton.html": "Harga Perbaikan Kolom Beton"  // TYPE: MONEY_CHILD
};

// ============================================================
// [MONEY_PAGE] - JASA PERBAIKAN BALOK BETON
// 🧠 TYPE: MONEY_PAGE (WAJIB tampil, transaksional)
// 🧠 INTENT: Komersial (60%) + Transaksional (40%)
// 📌 STATUS: PERLU DIBUAT (halaman baru)
// ============================================================

const urlMappingJasaPerbaikanBalokBeton = {
  // "https://www.betonjayareadymix.com/p/jasa-perbaikan-balok-beton.html": "Jasa Perbaikan Balok Beton",  // TYPE: MONEY_PAGE
  // "https://www.betonjayareadymix.com/2019/08/harga-perbaikan-balok-beton.html": "Harga Perbaikan Balok Beton"  // TYPE: MONEY_CHILD
};

// ============================================================
// [MONEY_PAGE] - JASA PERBAIKAN STRUKTUR KOLOM BETON
// 🧠 TYPE: MONEY_PAGE (WAJIB tampil, transaksional)
// 📌 STATUS: SUDAH ADA
// ============================================================

const urlMappingJasaPerbaikanStrukturKolomBeton = {
  // "https://www.betonjayareadymix.com/p/jasa-perbaikan-struktur-kolom-beton.html": "Jasa Perbaikan Struktur Kolom Beton",  // TYPE: MONEY_PAGE
  // "https://www.betonjayareadymix.com/2019/08/harga-perbaikan-struktur-kolom-beton.html": "Harga Perbaikan Struktur Kolom Beton"  // TYPE: MONEY_CHILD
};

// ============================================================
// [MONEY_PAGE] - JASA PERBAIKAN STRUKTUR BALOK BETON
// 🧠 TYPE: MONEY_PAGE (WAJIB tampil, transaksional)
// 📌 STATUS: SUDAH ADA
// ============================================================

const urlMappingJasaPerbaikanStrukturBalokBeton = {
  // "https://www.betonjayareadymix.com/p/jasa-perbaikan-struktur-balok-beton.html": "Jasa Perbaikan Struktur Balok Beton",  // TYPE: MONEY_PAGE
  // "https://www.betonjayareadymix.com/2019/08/harga-perbaikan-struktur-balok-beton.html": "Harga Perbaikan Struktur Balok Beton"  // TYPE: MONEY_CHILD
};

// ============================================================
// [MONEY_PAGE] - JASA PERKUATAN KOLOM BETON
// 🧠 TYPE: MONEY_PAGE (WAJIB tampil, transaksional)
// 📌 STATUS: SUDAH ADA
// ============================================================

const urlMappingJasaPerkuatanKolomBetomRetak = {
  // "https://www.betonjayareadymix.com/p/jasa-perkuatan-kolom-beton.html": "Jasa Perkuatan Kolom Beton",  // TYPE: MONEY_PAGE
  // "https://www.betonjayareadymix.com/2019/08/harga-perkuatan-kolom-beton.html": "Harga Perkuatan Kolom Beton"  // TYPE: MONEY_CHILD
};

// ============================================================
// [MONEY_PAGE] - JASA PERKUATAN BALOK BETON
// 🧠 TYPE: MONEY_PAGE (WAJIB tampil, transaksional)
// 📌 STATUS: SUDAH ADA
// ============================================================

const urlMappingJasaPerkuatanBalokBeton = {
  // "https://www.betonjayareadymix.com/p/jasa-perkuatan-balok-beton.html": "Jasa Perkuatan Balok Beton",  // TYPE: MONEY_PAGE
  // "https://www.betonjayareadymix.com/2019/08/harga-perkuatan-balok-beton.html": "Harga Perkuatan Balok Beton"  // TYPE: MONEY_CHILD
};

// ============================================================
// [MONEY_PAGE] - JASA JACKETING KOLOM BALOK
// 🧠 TYPE: MONEY_PAGE (WAJIB tampil, transaksional)
// 📌 STATUS: SUDAH ADA
// ============================================================

const urlMappingJasaJacketingKolomBalok = {
  // "https://www.betonjayareadymix.com/p/jasa-jacketing-kolom-balok.html": "Jasa Jacketing Kolom Balok",  // TYPE: MONEY_PAGE
  // "https://www.betonjayareadymix.com/2019/08/harga-jacketing-kolom-balok.html": "Harga Jacketing Kolom Balok"  // TYPE: MONEY_CHILD
};

// ============================================================
// [MONEY_PAGE] - JASA PERBAIKAN BALOK GANTUNG
// 🧠 TYPE: MONEY_PAGE (WAJIB tampil, transaksional)
// 📌 STATUS: SUDAH ADA
// ============================================================

const urlMappingPerbaikanBalokGantung = {
  // "https://www.betonjayareadymix.com/p/jasa-perbaikan-balok-gantung.html": "Jasa Perbaikan Balok Gantung",  // TYPE: MONEY_PAGE
  // "https://www.betonjayareadymix.com/2019/08/harga-perbaikan-balok-gantung.html": "Harga Perbaikan Balok Gantung"  // TYPE: MONEY_CHILD
};

// ============================================================
// [MONEY_PAGE] - JASA PERBAIKAN STRUKTUR TIANG BETON
// 🧠 TYPE: MONEY_PAGE (WAJIB tampil, transaksional)
// 🧠 INTENT: Komersial (60%) + Transaksional (40%)
// 📌 STATUS: AKTIF (konten lengkap)
// ============================================================

const urlMappingPerbaikanStrukturTiangBeton = {
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
// [MONEY_PAGE] - JASA PERBAIKAN STRUKTUR PONDASI
// 🧠 TYPE: MONEY_PAGE (WAJIB tampil)
// 📌 STATUS: SUDAH ADA
// ============================================================

const urlMappingJasaPerbaikanStrukturPondasi = {
  // "https://www.betonjayareadymix.com/p/jasa-perbaikan-struktur-pondasi.html": "Jasa Perbaikan Struktur Pondasi",  // TYPE: MONEY_PAGE
  // "https://www.betonjayareadymix.com/2019/08/harga-perbaikan-struktur-pondasi.html": "Harga Perbaikan Struktur Pondasi"  // TYPE: MONEY_PAGE
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

// ============================================================
// [MONEY_PAGE] - JASA PENGUATAN PONDASI BANGUNAN
// 🧠 TYPE: MONEY_PAGE (WAJIB tampil)
// 📌 STATUS: SUDAH ADA
// ============================================================

const urlMappingJasaPenguatanPondasiBangunan = {
  // "https://www.betonjayareadymix.com/p/jasa-penguatan-pondasi-bangunan.html": "Jasa Penguatan Pondasi Bangunan",  // TYPE: MONEY_PAGE
  // "https://www.betonjayareadymix.com/2019/08/harga-penguatan-pondasi-bangunan.html": "Harga Penguatan Pondasi Bangunan"  // TYPE: MONEY_PAGE
};

// ============================================================
// [MONEY_PAGE] - JASA PERBAIKAN STRUKTUR PONDASI RUMAH
// 🧠 TYPE: MONEY_PAGE (WAJIB tampil)
// 📌 STATUS: AKTIF (URL valid)
// ============================================================

const urlMappingJasaPerbaikanStrukturPondasiRumah = {
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-struktur-pondasi-rumah.html": "Jasa Perbaikan Struktur Pondasi Rumah"  // TYPE: MONEY_PAGE ✅ AKTIF
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

const urlMappingJasaInjeksiDindingRetak = {
  "https://www.betonjayareadymix.com/p/jasa-injeksi-dinding-retak.html": "Jasa Injeksi Dinding Retak",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2019/08/harga-injeksi-dinding-retak.html": "Harga Injeksi Dinding Retak"  // TYPE: MONEY_PAGE
};

// ============================================================
// [MONEY_PAGE] - JASA PERBAIKAN DINDING RETAK STRUKTUR
// 🧠 TYPE: MONEY_PAGE (WAJIB tampil, parent: SUB2)
// ============================================================

const urlMappingJasaPerbaikanDindingRetakStruktur = {
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-dinding-retak-struktur.html": "Jasa Perbaikan Dinding Retak Struktur",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2019/08/harga-perbaikan-dinding-retak-struktur.html": "Harga Perbaikan Dinding Retak Struktur"  // TYPE: MONEY_PAGE
};

// ============================================================
// [MONEY_PAGE] - JASA PERBAIKAN STRUKTUR DINDING RETAK
// ============================================================

const urlMappingJasaPerbaikanStrukturDindingRetak = {
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-struktur-dinding-retak.html": "Jasa Perbaikan Struktur Dinding Retak",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2019/08/harga-perbaikan-struktur-dinding-retak.html": "Harga Perbaikan Struktur Dinding Retak"  // TYPE: MONEY_PAGE
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

const urlMappingJasaRenovasiPerbaikanRumah = {
  // ============================================================
  // [MONEY_CHILD] - HARGA RENOVASI PER LOKASI
  // 🧠 TYPE: MONEY_CHILD (spesifik lokasi) - SUDAH BENAR
  // ============================================================
  "https://www.betonjayareadymix.com/2019/07/harga-jasa-renovasi-rumah-surabaya.html": "Harga Jasa Renovasi Rumah Surabaya",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/07/harga-jasa-renovasi-rumah-jogja.html": "Harga Jasa Renovasi Rumah Jogja",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/07/harga-jasa-renovasi-rumah-semarang.html": "Harga Jasa Renovasi Rumah Semarang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/07/harga-jasa-renovasi-rumah-tangerang.html": "Harga Jasa Renovasi Rumah Tangerang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/07/harga-jasa-renovasi-rumah-depok.html": "Harga Jasa Renovasi Rumah Depok",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/07/harga-jasa-renovasi-rumah-bekasi.html": "Harga Jasa Renovasi Rumah Bekasi",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/07/harga-jasa-renovasi-rumah-bogor.html": "Harga Jasa Renovasi Rumah Bogor",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/07/harga-jasa-renovasi-rumah-jakarta.html": "Harga Jasa Renovasi Rumah Jakarta",  // TYPE: MONEY_CHILD

  // ============================================================
  // [MONEY_PAGE] - HARGA RENOVASI RUMAH (UMUM)
  // 🧠 TYPE: MONEY_PAGE (BUKAN MONEY_MASTER) - DIKOREKSI
  // ============================================================
  "https://www.betonjayareadymix.com/2019/06/harga-jasa-renovasi-rumah-subsidi.html": "Harga Jasa Renovasi Rumah Subsidi",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2019/06/harga-jasa-renovasi-rumah-murah.html": "Harga Jasa Renovasi Rumah Murah",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2019/06/harga-jasa-renovasi-rumah-terdekat.html": "Harga Jasa Renovasi Rumah Terdekat"  // TYPE: MONEY_PAGE
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
 * generateBreadcrumbForMapping v3.0 — FULL REVISI
 * ✅ Sesuai dengan hierarki 8 level (PHASE 1)
 * ✅ Validasi entity type (JASA tidak boleh MONEY_MASTER)
 * ✅ Deteksi bertahap sesuai PRIORITAS PHASE 1
 * ✅ Support semua entity type: PRODUK, JASA, MATERIAL, SEWA
 * ✅ Breadcrumb tidak loncat level (auto fix)
 * ✅ Intent detection bawaan
 * ✅ Evergreen vs Non-Evergreen detection
 * ✅ Clean code, siap produksi
 */
(function() {
    'use strict';
function generateBreadcrumbForMapping(mappingObj, currentUrl, breadcrumbItems = [], entityType = 'PRODUK_INTERIOR') {
    
    // ============================================================
    // 1. KONSTANTA & VALIDASI
    // ============================================================
    const MAX_LEVEL = 4;
    const DOMAIN = 'https://www.betonjayareadymix.com';
    
    const validEntityTypes = [
        'PRODUK_KONSTRUKSI', 'PRODUK_INTERIOR', 'PRODUK',
        'MATERIAL_KONSTRUKSI', 'MATERIAL',
        'JASA_KONSTRUKSI', 'JASA_DESAIN_INTERIOR', 'JASA',
        'SEWA', 'RENTAL', 'SEWA_RENTAL', 'SEWA_ALAT', 'RENTAL_ALAT'
    ];
    
    if (!validEntityTypes.includes(entityType)) {
        console.error(`❌ ERROR: "${entityType}" BUKAN ENTITY TYPE yang valid!`);
        console.error(`   Gunakan: ${validEntityTypes.join(', ')}`);
        return null;
    }
    
    // ============================================================
    // 2. HIERARKI 8 LEVEL (SESUAI PHASE 1)
    // ============================================================
    const VALID_PAGE_TYPES = [
        'pillar',                    // Level 1 - terluas
        'sub-pillar-tipe-2',         // Level 2
        'sub-pillar-tipe-1',         // Level 3
        'money-master',              // Level 4 (JASA DILARANG)
        'money-page',                // Level 5
        'money-child',               // Level 6
        'variant',                   // Level 7
        'sub-variant'                // Level 8 - terdalam
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
    // 3. INTENT DOMINANCE (SESUAI PHASE 1.5)
    // ============================================================
    const INTENT_MAP = {
        'pillar': { primary: 'informasional', secondary: 'komersial', dominance: 90 },
        'sub-pillar-tipe-2': { primary: 'informasional', secondary: 'komersial', dominance: 60 },
        'sub-pillar-tipe-1': { primary: 'komersial', secondary: 'informasional', dominance: 70 },
        'money-master': { primary: 'transaksional', secondary: 'komersial', dominance: 80 },
        'money-page-produk': { primary: 'transaksional', secondary: 'komersial', dominance: 85 },
        'money-page-jasa': { primary: 'komersial', secondary: 'transaksional', dominance: 60 },
        'money-child-produk': { primary: 'transaksional', secondary: 'komersial', dominance: 90 },
        'money-child-jasa': { primary: 'komersial', secondary: 'transaksional', dominance: 60 },
        'variant': { primary: 'komersial', secondary: 'informasional', dominance: 80 },
        'sub-variant': { primary: 'komersial', secondary: 'informasional', dominance: 70 }
    };
    
    // ============================================================
    // 4. EVERGREEN vs NON-EVERGREEN (SESUAI PHASE 1)
    // ============================================================
    const EVERGREEN_STATUS = {
        'pillar': { evergreen: true, wajibTahun: false },
        'sub-pillar-tipe-2': { evergreen: true, wajibTahun: false },
        'sub-pillar-tipe-1': { evergreen: false, wajibTahun: false, catatan: 'tergantung topik' },
        'money-master': { evergreen: false, wajibTahun: true },
        'money-page-produk': { evergreen: false, wajibTahun: true },
        'money-page-jasa': { evergreen: false, wajibTahun: false, catatan: 'fleksibel' },
        'money-child-produk': { evergreen: false, wajibTahun: true },
        'money-child-jasa': { evergreen: false, wajibTahun: false, catatan: 'fleksibel' },
        'variant': { evergreen: true, wajibTahun: false },
        'sub-variant': { evergreen: true, wajibTahun: false }
    };
    
    // ============================================================
    // 5. WHITELIST LOKASI (200+ KOTA)
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
        'surabaya', 'malang', 'kediri', 'blitar', 'madiun', 'ponorogo', 'ngawi', 
        'magetan', 'trenggalek', 'tulungagung', 'nganjuk', 'jombang', 'mojokerto', 
        'gresik', 'sidoarjo', 'pasuruan', 'probolinggo', 'lumajang', 'jember', 
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
    
    const NOT_LOCATION_WORDS = [
        'mini', 'maxi', 'super', 'extra', 'plus', 'pro', 'max', 'ultra', 'deluxe',
        'baru', 'lama', 'bekas', 'second', 'original', 'kw', 'grade', 
        'murah', 'mahal', 'hemat', 'premium', 'standar', 'ekonomis', 
        'kecil', 'besar', 'sedang', 'panjang', 'pendek', 'tebal', 'tipis', 'lebar',
        'putih', 'hitam', 'merah', 'biru', 'hijau', 'kuning', 'ungu', 'abu', 'coklat',
        'minimalis', 'modern', 'klasik', 'industrial', 'skandinavia', 'jepang',
        'hpl', 'mdf', 'jati', 'kayu', 'besi', 'baja', 'aluminium', 'kaca'
    ];
    
    const SPECIFIC_PRODUCT_INDICATORS = [
        'galvalum', 'spandek', 'bondek', 'hpl', 'mdf', 'jati', 'mahoni',
        'excavator', 'bulldozer', 'crane', 'dump truck', 'vibro', 'stamper',
        'minimix', 'jayamix', 'readymix', 'beton cor', 'bata ringan', 'hebel',
        'pabrikan', 'minimalis', 'modern', 'premium', 'custom', 'bespoke'
    ];
    
    // ============================================================
    // 6. FUNGSI BANTUAN DETEKSI
    // ============================================================
    function isLocation(text) {
        const words = text.toLowerCase().split(/[\s,-]+/);
        for (const word of words) {
            if (NOT_LOCATION_WORDS.includes(word)) continue;
            if (LOCATION_WHITELIST.includes(word)) return true;
            if (word.length >= 5 && word.length <= 12) {
                const vowelCount = (word.match(/[aiueo]/g) || []).length;
                if (vowelCount >= 2 && !word.match(/[0-9]/)) return true;
            }
        }
        return false;
    }
    
    function isSpecificProduct(text) {
        const lowerText = text.toLowerCase();
        for (const indicator of SPECIFIC_PRODUCT_INDICATORS) {
            if (lowerText.includes(indicator)) return true;
        }
        // Deteksi ukuran/dimensi
        if (/\d+(\.\d+)?\s*(mm|cm|m|inch|meter)/.test(lowerText)) return true;
        return false;
    }
    
    function getIntentForPageType(pageType, entityType) {
        const isJasa = ['JASA_KONSTRUKSI', 'JASA_DESAIN_INTERIOR', 'JASA'].includes(entityType);
        
        if (pageType === 'pillar') return INTENT_MAP.pillar;
        if (pageType === 'sub-pillar-tipe-2') return INTENT_MAP['sub-pillar-tipe-2'];
        if (pageType === 'sub-pillar-tipe-1') return INTENT_MAP['sub-pillar-tipe-1'];
        if (pageType === 'money-master') return INTENT_MAP['money-master'];
        if (pageType === 'money-page') return isJasa ? INTENT_MAP['money-page-jasa'] : INTENT_MAP['money-page-produk'];
        if (pageType === 'money-child') return isJasa ? INTENT_MAP['money-child-jasa'] : INTENT_MAP['money-child-produk'];
        if (pageType === 'variant') return INTENT_MAP.variant;
        if (pageType === 'sub-variant') return INTENT_MAP['sub-variant'];
        
        return { primary: 'informasional', secondary: null, dominance: 50 };
    }
    
    function getEvergreenStatus(pageType, entityType) {
        const isJasa = ['JASA_KONSTRUKSI', 'JASA_DESAIN_INTERIOR', 'JASA'].includes(entityType);
        
        if (pageType === 'money-page' && isJasa) return EVERGREEN_STATUS['money-page-jasa'];
        if (pageType === 'money-child' && isJasa) return EVERGREEN_STATUS['money-child-jasa'];
        return EVERGREEN_STATUS[pageType] || { evergreen: true, wajibTahun: false };
    }
    
    // ============================================================
    // 7. DETEKSI PAGE TYPE (PRIORITAS SESUAI PHASE 1)
    // ============================================================
    function detectPageType(pageName, position, totalLevels, entityType) {
        const lowerName = pageName.toLowerCase();
        const isJasa = ['JASA_KONSTRUKSI', 'JASA_DESAIN_INTERIOR', 'JASA'].includes(entityType);
        
        // PRIORITAS 1: PILLAR (level 1, posisi pertama)
        if (position === 0) {
            return 'pillar';
        }
        
        // PRIORITAS 2: CEK KEYWORD HARGA/SEWA/BIAYA
        const hasPrice = lowerName.includes('harga ') || lowerName.includes('biaya ') || lowerName.includes('tarif ');
        const hasRent = lowerName.includes('sewa ') || lowerName.includes('rental ');
        
        if (hasPrice || hasRent) {
            // JASA TIDAK BOLEH MONEY_MASTER
            if (isJasa) {
                return 'money-page';
            }
            
            let afterKeyword = '';
            if (lowerName.includes('harga ')) afterKeyword = lowerName.substring(lowerName.indexOf('harga ') + 6);
            else if (lowerName.includes('biaya ')) afterKeyword = lowerName.substring(lowerName.indexOf('biaya ') + 6);
            else if (lowerName.includes('sewa ')) afterKeyword = lowerName.substring(lowerName.indexOf('sewa ') + 5);
            else if (lowerName.includes('rental ')) afterKeyword = lowerName.substring(lowerName.indexOf('rental ') + 7);
            
            // CEK LOKASI (MONEY_CHILD)
            if (isLocation(afterKeyword)) {
                return 'money-child';
            }
            
            // CEK PRODUK SPESIFIK (MONEY_PAGE)
            if (isSpecificProduct(afterKeyword)) {
                return 'money-page';
            }
            
            // CEK JUMLAH KATA
            const wordCount = afterKeyword.split(/\s+/).filter(w => w.length > 0).length;
            if (wordCount <= 2) {
                return 'money-master';
            }
            
            return 'money-page';
        }
        
        // PRIORITAS 3: SUB-VARIANT (level 8 - paling detail)
        if (/(\d+(\.\d+)?\s*mm\s*x\s*\d+(\.\d+)?\s*mm)/.test(lowerName) ||
            (lowerName.includes('tebal') && /\d+\s*mm/.test(lowerName)) ||
            (lowerName.includes('panjang') && /\d+\s*m/.test(lowerName))) {
            return 'sub-variant';
        }
        
        // PRIORITAS 4: VARIANT (level 7)
        const variantKeywords = ['spesifikasi', 'ukuran', 'tipe', 'type', 'model', 'varian', 'warna', 'merk', 'kapasitas'];
        for (const kw of variantKeywords) {
            if (lowerName.includes(kw)) return 'variant';
        }
        if (/\d+(\.\d+)?\s*(mm|cm|m|kg|ton)/.test(lowerName)) return 'variant';
        
        // PRIORITAS 5: SUB-PILLAR TIPE 1 (level 3 - perbandingan)
        const comparisonKeywords = ['vs', 'versus', 'perbandingan', 'lebih baik', 'mana yang', 'kelebihan', 'kekurangan'];
        for (const kw of comparisonKeywords) {
            if (lowerName.includes(kw)) return 'sub-pillar-tipe-1';
        }
        
        // PRIORITAS 6: SUB-PILLAR TIPE 2 (level 2 - jenis/macam)
        if (lowerName.startsWith('jenis ') || lowerName.startsWith('macam ') || lowerName.startsWith('tipe ') ||
            lowerName.includes('jenis-jenis') || lowerName.includes('macam-macam')) {
            return 'sub-pillar-tipe-2';
        }
        
        // DEFAULT: PILLAR
        return 'pillar';
    }
    
    // ============================================================
    // 8. KUMPULKAN DATA DARI MAPPING
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
    // 9. BANGUN LEVELS DARI breadcrumbItems
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
    // 10. VALIDASI & PERBAIKI HIERARKI (TIDAK BOLEH LONCAT LEVEL)
    // ============================================================
    for (let i = 0; i < allLevels.length - 1; i++) {
        const current = allLevels[i];
        const next = allLevels[i + 1];
        
        if (next.level - current.level > 1) {
            console.warn(`⚠️ LEVEL JUMP: ${current.name}(${current.type} L${current.level}) → ${next.name}(${next.type} L${next.level})`);
            
            // Perbaiki dengan menaikkan level next
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
    // 11. VALIDASI & FALLBACK URL
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
    // 12. TENTUKAN LEVEL YANG DITAMPILKAN (MAX 4 LEVEL)
    // ============================================================
    const selectedLevels = [];
    
    // Home (WAJIB)
    selectedLevels.push({ 
        name: 'Beranda', 
        url: DOMAIN, 
        isHome: true,
        type: 'pillar',
        level: 1,
        intent: INTENT_MAP.pillar,
        evergreen: EVERGREEN_STATUS.pillar
    });
    
    let remainingSlots = MAX_LEVEL - 2;
    
    console.log(`📊 ========================================`);
    console.log(`📊 Breadcrumb Generator v3.0 — FULL REVISI`);
    console.log(`📊 Entity Type: ${entityType}`);
    console.log(`📊 Max level: ${MAX_LEVEL}`);
    console.log(`📊 ========================================`);
    
    // Parent terdekat (WAJIB)
    let parentTerdekat = null;
    if (allLevels.length > 0) {
        parentTerdekat = allLevels[allLevels.length - 1];
        selectedLevels.push(parentTerdekat);
        remainingSlots--;
        console.log(`✅ WAJIB: "${parentTerdekat.name}" (${parentTerdekat.type} L${parentTerdekat.level})`);
    }
    
    // Level lainnya (prioritaskan level tertinggi)
    const otherLevels = [...allLevels.slice(0, allLevels.length - 1)].sort((a, b) => b.level - a.level);
    
    for (const level of otherLevels) {
        if (remainingSlots <= 0) {
            console.log(`📌 SKIP: "${level.name}" (${level.type} L${level.level}) - slot habis`);
            continue;
        }
        
        selectedLevels.splice(1, 0, level);
        remainingSlots--;
        console.log(`✅ TAMBAH: "${level.name}" (${level.type} L${level.level})`);
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
    
    console.log(`✅ FINAL (${selectedLevels.length} level): ${selectedLevels.map(l => `${l.name}(${l.type})`).join(' → ')}`);
    console.log(`📊 Current page type: ${currentPageType}`);
    console.log(`📊 Intent: ${currentIntent.primary} (${currentIntent.dominance}%)`);
    console.log(`📊 Evergreen: ${currentEvergreen.evergreen ? 'YES' : 'NO'} | Wajib Tahun: ${currentEvergreen.wajibTahun ? 'YES' : 'NO'}`);
    
    // ============================================================
    // 13. GENERATE HTML BREADCRUMB + JSON-LD
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
    // 14. INJECT KE DOM
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
    console.log(`📊 ========================================`);
    
    // ============================================================
    // 15. RETURN LENGKAP
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
        version: '3.0'
    };
}
})
// ============================================================
// CONTOH PENGGUNAAN
// ============================================================

/*
// Contoh 1: MATERIAL KONSTRUKSI
const result1 = generateBreadcrumbForMapping(
    urlMapping,
    '/p/ready-mix-beton-cor-jayamix-minimix.html',
    [
        { name: 'Material Konstruksi', url: '/p/material-konstruksi.html' },
        { name: 'Material Struktur Bangunan', url: '/p/material-struktur-bangunan.html' },
        { name: 'Ready Mix Beton Cor Jayamix Minimix', url: null }
    ],
    'MATERIAL_KONSTRUKSI'
);

// Contoh 2: JASA KONSTRUKSI (otomatis tidak akan jadi money-master)
const result2 = generateBreadcrumbForMapping(
    urlMapping,
    '/p/harga-jasa-konstruksi.html',
    [
        { name: 'Jasa Konstruksi', url: '/p/jasa-konstruksi.html' },
        { name: 'Harga Jasa Konstruksi', url: null }
    ],
    'JASA_KONSTRUKSI'
);

// Contoh 3: PRODUK INTERIOR dengan lokasi (money-child)
const result3 = generateBreadcrumbForMapping(
    urlMapping,
    '/p/harga-kitchen-set-jakarta.html',
    [
        { name: 'Produk Interior', url: '/p/produk-interior.html' },
        { name: 'Kitchen Set', url: '/p/kitchen-set.html' },
        { name: 'Harga Kitchen Set Jakarta', url: null }
    ],
    'PRODUK_INTERIOR'
);

// Output akan berisi:
// - html: string HTML breadcrumb
// - jsonLd: object untuk schema.org
// - selectedLevels: array level yang ditampilkan
// - currentPageType: 'money-child'
// - currentIntent: { primary: 'transaksional', secondary: 'komersial', dominance: 90 }
// - currentEvergreen: { evergreen: false, wajibTahun: true }
*/

// ============================================================
// CONTOH PANGGILAN DENGAN URL MANUAL PER LEVEL
// ============================================================

/*
// MATERIAL KONSTRUKSI - READY MIX LOKASI
const result = generateBreadcrumbForMapping(
    urlMappingReadyMixLokasiPost,
    cleanUrl,
    [
        { name: 'Material Konstruksi', url: 'https://www.betonjayareadymix.com/p/material-konstruksi.html' },
        { name: 'Material Struktur Bangunan', url: 'https://www.betonjayareadymix.com/p/material-struktur-bangunan.html' },
        { name: 'Ready Mix Beton Cor Jayamix Minimix', url: 'https://www.betonjayareadymix.com/p/ready-mix-beton-cor-jayamix-minimix.html' },
        { name: 'Ready Mix Lokasi', url: 'https://www.betonjayareadymix.com/p/ready-mix-lokasi.html' }
    ],
    'MATERIAL_KONSTRUKSI'
);

// PRODUK INTERIOR - KITCHEN SET
const result2 = generateBreadcrumbForMapping(
    urlMappingKitchenSetPost,
    currentUrl,
    [
        { name: 'Produk Interior', url: 'https://www.betonjayareadymix.com/p/produk-interior.html' },
        { name: 'Jenis Kitchen Set', url: 'https://www.betonjayareadymix.com/p/jenis-kitchen-set.html' }
    ],
    'PRODUK_INTERIOR'
);

// JASA KONSTRUKSI - KONSULTASI
const result3 = generateBreadcrumbForMapping(
    urlMappingJasaPost,
    currentUrl,
    [
        { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
        { name: 'Jasa Borongan', url: 'https://www.betonjayareadymix.com/p/jasa-borongan.html' }
    ],
    'JASA_KONSTRUKSI'
);

// SEWA ALAT BERAT - EXCAVATOR
const result4 = generateBreadcrumbForMapping(
    urlMappingSewaPost,
    currentUrl,
    [
        { name: 'Sewa Alat Berat', url: 'https://www.betonjayareadymix.com/p/sewa-alat-berat.html' },
        { name: 'Jenis Excavator', url: 'https://www.betonjayareadymix.com/p/jenis-excavator.html' }
    ],
    'SEWA_RENTAL'
);
*/
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
		urlMappingJasaRenovasiPerbaikanRumah,
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
		urlMappingJasaPerbaikanStrukturBeton,
		//urlMappingJasaRenovasiPerbaikanRetakStruktur,
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
		//urlMappingJasaPerbaikanGedungBertingkat,
		urlMappingJasaPerbaikanStrukturBangunanTua,
		urlMappingJasaPerbaikanStrukturBangunanMiring,
		//urlMappingJasaPerbaikanTempatIbadah,
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
		urlMappingJasaRenovasiPerbaikanRumah,
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
		    await loadEvergreenScript("2026-01-19T10:30:00+07:00");
		
		    // ✔ AUTO MODE
		    // await loadEvergreenScript();
		
		  } catch (err) {
		    console.error("[HybridDateModified] Fatal:", err);
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
if (urlMappingJasaPerbaikanStrukturBeton[cleanUrlJasaKonsPerbaikanPost]) {
        restoreCondition1('JasaKonstruksiPerbaikanSubPost');
	   restoreCondition1('JasaRenovasiPerawatanPerbaikanBangunanPost');
       removeCondition1('JasaRenovasiPerbaikanSubPost');
      
        restoreCondition1('JasaRenovasiPerbaikanStrukturPost');
	
        restoreCondition1('JasaPerbaikanStrukturBetonPost');

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
	/*ga perlu
	// hapus elemen id Sub JasaRenovasiPerbaikanStrukturUmum SEMUA KECUALI JasaPerbaikanStrukturBetonPost
        removeCondition1('JasaPerbaikanRetakStrukturPost');
        removeCondition1('JasaPenguatanStrukturBangunanPost');
        removeCondition1('JasaRenovasiStrukturBetonPost');
        removeCondition1('JasaPerkuatanStrukturBetonPost');
        removeCondition1('JasaPerbaikanRetakBetonPost');
        removeCondition1('JasaRepairStrukturBetonPost');
        //removeCondition1('');
        removeCondition1('JasaRenovasiPerbaikanRetakStrukturPost');
	*/
	// hapus elemen id Sub JasaRenovasiPerbaikan yang lain
        removeCondition1('JasaRenovasiPerbaikanInfrastrukturPost');
        removeCondition1('JasaRenovasiPerbaikanBangunanPost');
        removeCondition1('JasaRenovasiPerbaikanInteriorPost');
	removeCondition1('JasaRenovasiPerbaikanFasadPost');
	removeCondition1('JasaRenovasiPerbaikanFasilitasPost');

	// hapus elemen id Semua Sub JasaRenovasiPerbaikanStruktur selain JasaRenovasiPerbaikanStrukturPost
				removeCondition1('JasaPerbaikanGedungBertingkatPost');
			removeCondition1('JasaPerbaikanStrukturBangunanTuaPost');
			removeCondition1('JasaPerbaikanStrukturBangunanMiringPost');
	
	removeCondition1('JasaRenovasiPerbaikanStrukturTeknikBetonPost');
	removeCondition1('JasaRenovasiPerbaikanStrukturKolomBalokPost');
  		removeCondition1('JasaRenovasiPerbaikanStrukturKolomPost');
  		removeCondition1('JasaRenovasiPerbaikanStrukturBalokPost');
        removeCondition1('JasaRenovasiPerbaikanStrukturPondasiPost');
        removeCondition1('JasaRenovasiPerbaikanStrukturLantaiBetonPost');
	//removeCondition1('');
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
	//JasaRenovasiPerbaikanStrukturUmumPostLink.style.visibility = 'visible';
	
	JasaPerbaikanStrukturBetonPostLink.style.visibility = 'visible';
        pageNameJasaKonsPerbaikanPost.textContent = urlMappingJasaPerbaikanStrukturBeton[cleanUrlJasaKonsPerbaikanPost];
    }
  
   // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaPerbaikanStrukturBeton[cleanUrlJasaKonsPerbaikanPost]) {
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
	      "name": "Jasa Perbaikan Struktur Beton",
	      "item": "https://www.betonjayareadymix.com/p/jasa-perbaikan-struktur-beton.html"
	    },
               {
                   "@type": "ListItem",
                   "position": 6,
                   "name": urlMappingJasaPerbaikanStrukturBeton[cleanUrlJasaKonsPerbaikanPost],
                   "item": cleanUrlJasaKonsPerbaikanPost
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
} 
//SUB JasaRenovasiPerbaikanBangunanPost
//SUB JasaRenovasiPerbaikanBangunanRumahPost
if (urlMappingJasaRenovasiPerbaikanRumah[cleanUrlJasaKonsPerbaikanPost]) {
        restoreCondition1('JasaKonsPerbaikanPost');
	    removeCondition1('JasaRenovasiPerawatanPerbaikanBangunanPost');
        restoreCondition1('JasaRenovasiPerbaikanSubPost');
        restoreCondition1('JasaRenovasiPerbaikanBangunanPost');
        restoreCondition1('JasaRenovasiPerbaikanBangunanRumahPost');
	
        //restoreCondition1('');

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
        removeCondition1('JasaRenovasiRumahMinimalisPost');
	
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
	
        /*ga perlu
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
	
	//JasaRenovasiRumahMinimalisPostLink.style.visibility = 'visible';
        pageNameJasaKonsPerbaikanPost.textContent = urlMappingJasaRenovasiPerbaikanRumah[cleanUrlJasaKonsPerbaikanPost];
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

