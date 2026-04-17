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
// JASA PERBAIKAN STRUKTUR BETON - LENGKAP
// ============================================================
// 🧠 SEO NOTE: Semua halaman di bawah Jasa Perbaikan Struktur Beton
// Parent: Jasa Perbaikan Struktur Beton (/p/jasa-perbaikan-struktur-beton.html)
// ============================================================

const urlMappingJasaPerbaikanStrukturBeton = {
  // ============================================================
  // [SUB1] - BERDASARKAN JENIS KERUSAKAN / METODE
  // 🧠 TYPE: SUB1 (WAJIB tampil, bridge ke money page)
  // 🧠 INTENT: Informational + Pre-commercial (edukasi teknis)
  // Breadcrumb: Home > Jasa Perbaikan Struktur > Jasa Perbaikan Struktur Beton > [Nama Halaman]
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
  // 🧠 TYPE: MONEY_CHILD (WAJIB tampil, parent: SUB1 atau SUB2)
  // 🧠 INTENT: Transactional (harga & layanan per lokasi)
  // Breadcrumb: Home > Jasa Perbaikan Struktur > Jasa Perbaikan Struktur Beton > [Nama Halaman]
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
// ============================================================

// ============================================================
// [SUB1] - JASA PERBAIKAN KOLOM BETON
// 🧠 TYPE: SUB1 (WAJIB tampil, bridge ke MONEY)
// 🧠 INTENT: Informational + Pre-commercial
// 📌 STATUS: 404 - URL TIDAK DITEMUKAN
// 📌 SARAN: Buat halaman baru di /p/jasa-perbaikan-kolom-beton.html
// Breadcrumb: Home > Jasa Perawatan & Perbaikan Bangunan > Jasa Perbaikan Struktur > Jasa Perbaikan Struktur Beton > Jasa Perbaikan Kolom Beton
// ============================================================
// "https://www.betonjayareadymix.com/2019/08/jasa-perbaikan-kolom-beton.html": "Jasa Perbaikan Kolom Beton",  // TYPE: SUB1 (404 - perlu dibuat)

// ============================================================
// [MONEY_MASTER] - JASA PERBAIKAN KOLOM BETON (PAGE)
// 🧠 TYPE: MONEY_MASTER (WAJIB tampil, transaksional)
// 🧠 INTENT: Transactional (harga, form, konsultasi)
// 📌 STATUS: PERLU DIBUAT (halaman PAGE baru)
// 📌 SARAN: Buat halaman di /p/jasa-perbaikan-kolom-beton.html
// Breadcrumb: Home > Jasa Perawatan & Perbaikan Bangunan > Jasa Perbaikan Struktur > Jasa Perbaikan Struktur Beton > Jasa Perbaikan Kolom Beton
// ============================================================

const urlMappingJasaPerbaikanKolomBeton = {
  // "https://www.betonjayareadymix.com/p/jasa-perbaikan-kolom-beton.html": "Jasa Perbaikan Kolom Beton",  // TYPE: MONEY_MASTER
  // "https://www.betonjayareadymix.com/2019/08/harga-perbaikan-kolom-beton.html": "Harga Perbaikan Kolom Beton"  // TYPE: MONEY_CHILD (404)
};

// ============================================================
// [SUB1] - JASA PERBAIKAN BALOK BETON
// 🧠 TYPE: SUB1 (WAJIB tampil, bridge ke MONEY)
// 🧠 INTENT: Informational + Pre-commercial
// 📌 STATUS: PERLU DIBUAT (halaman PAGE baru)
// Breadcrumb: Home > Jasa Perawatan & Perbaikan Bangunan > Jasa Perbaikan Struktur > Jasa Perbaikan Struktur Beton > Jasa Perbaikan Balok Beton
// ============================================================

const urlMappingJasaPerbaikanBalokBeton = {
  // "https://www.betonjayareadymix.com/p/jasa-perbaikan-balok-beton.html": "Jasa Perbaikan Balok Beton",  // TYPE: MONEY_MASTER
  // "https://www.betonjayareadymix.com/2019/08/harga-perbaikan-balok-beton.html": "Harga Perbaikan Balok Beton"  // TYPE: MONEY_CHILD
};

// ============================================================
// [SUB1] - JASA PERBAIKAN STRUKTUR KOLOM BETON
// 🧠 TYPE: SUB1 (WAJIB tampil, lebih spesifik dari Jasa Perbaikan Kolom Beton)
// 🧠 INTENT: Informational + Pre-commercial
// 📌 STATUS: SUDAH ADA (di const urlMappingPerbaikanStrukturKolomBalok)
// Breadcrumb: Home > Jasa Perawatan & Perbaikan Bangunan > Jasa Perbaikan Struktur > Jasa Perbaikan Struktur Beton > Jasa Perbaikan Kolom Beton > Jasa Perbaikan Struktur Kolom Beton
// ============================================================

const urlMappingJasaPerbaikanStrukturKolomBeton = {
  // "https://www.betonjayareadymix.com/p/jasa-perbaikan-struktur-kolom-beton.html": "Jasa Perbaikan Struktur Kolom Beton",  // TYPE: SUB1
  // "https://www.betonjayareadymix.com/2019/08/harga-perbaikan-struktur-kolom-beton.html": "Harga Perbaikan Struktur Kolom Beton"  // TYPE: MONEY_CHILD
};

// ============================================================
// [SUB1] - JASA PERBAIKAN STRUKTUR BALOK BETON
// 🧠 TYPE: SUB1 (WAJIB tampil, lebih spesifik dari Jasa Perbaikan Balok Beton)
// 🧠 INTENT: Informational + Pre-commercial
// 📌 STATUS: SUDAH ADA (di const urlMappingPerbaikanStrukturKolomBalok)
// Breadcrumb: Home > Jasa Perawatan & Perbaikan Bangunan > Jasa Perbaikan Struktur > Jasa Perbaikan Struktur Beton > Jasa Perbaikan Balok Beton > Jasa Perbaikan Struktur Balok Beton
// ============================================================

const urlMappingJasaPerbaikanStrukturBalokBeton = {
  // "https://www.betonjayareadymix.com/p/jasa-perbaikan-struktur-balok-beton.html": "Jasa Perbaikan Struktur Balok Beton",  // TYPE: SUB1
  // "https://www.betonjayareadymix.com/2019/08/harga-perbaikan-struktur-balok-beton.html": "Harga Perbaikan Struktur Balok Beton"  // TYPE: MONEY_CHILD
};

// ============================================================
// [SUB1] - JASA PERKUATAN KOLOM BETON (RETAK)
// 🧠 TYPE: SUB1 (WAJIB tampil, fokus ke metode perkuatan)
// 🧠 INTENT: Informational + Pre-commercial
// 📌 STATUS: SUDAH ADA (di const urlMappingPerbaikanStrukturKolomBalok)
// Breadcrumb: Home > Jasa Perawatan & Perbaikan Bangunan > Jasa Perbaikan Struktur > Jasa Perbaikan Struktur Beton > Jasa Perbaikan Kolom Beton > Jasa Perkuatan Kolom Beton
// ============================================================

const urlMappingJasaPerkuatanKolomBetomRetak = {
  // "https://www.betonjayareadymix.com/p/jasa-perkuatan-kolom-beton.html": "Jasa Perkuatan Kolom Beton",  // TYPE: SUB1
  // "https://www.betonjayareadymix.com/2019/08/harga-perkuatan-kolom-beton.html": "Harga Perkuatan Kolom Beton"  // TYPE: MONEY_CHILD
};

// ============================================================
// [SUB1] - JASA PERKUATAN BALOK BETON
// 🧠 TYPE: SUB1 (WAJIB tampil, fokus ke metode perkuatan)
// 🧠 INTENT: Informational + Pre-commercial
// 📌 STATUS: SUDAH ADA (di const urlMappingPerbaikanStrukturKolomBalok)
// Breadcrumb: Home > Jasa Perawatan & Perbaikan Bangunan > Jasa Perbaikan Struktur > Jasa Perbaikan Struktur Beton > Jasa Perbaikan Balok Beton > Jasa Perkuatan Balok Beton
// ============================================================

const urlMappingJasaPerkuatanBalokBeton = {
  // "https://www.betonjayareadymix.com/p/jasa-perkuatan-balok-beton.html": "Jasa Perkuatan Balok Beton",  // TYPE: SUB1
  // "https://www.betonjayareadymix.com/2019/08/harga-perkuatan-balok-beton.html": "Harga Perkuatan Balok Beton"  // TYPE: MONEY_CHILD
};

// ============================================================
// [SUB1] - JASA JACKETING KOLOM BALOK
// 🧠 TYPE: SUB1 (WAJIB tampil, fokus ke metode jacketing)
// 🧠 INTENT: Informational + Pre-commercial
// 📌 STATUS: SUDAH ADA (di const urlMappingPerbaikanStrukturKolomBalok)
// Breadcrumb: Home > Jasa Perawatan & Perbaikan Bangunan > Jasa Perbaikan Struktur > Jasa Perbaikan Struktur Beton > Jasa Perbaikan Kolom Balok > Jasa Jacketing Kolom Balok
// ============================================================

const urlMappingJasaJacketingKolomBalok = {
  // "https://www.betonjayareadymix.com/p/jasa-jacketing-kolom-balok.html": "Jasa Jacketing Kolom Balok",  // TYPE: SUB1
  // "https://www.betonjayareadymix.com/2019/08/harga-jacketing-kolom-balok.html": "Harga Jacketing Kolom Balok"  // TYPE: MONEY_CHILD
};

// ============================================================
// [SUB1] - JASA PERBAIKAN BALOK GANTUNG
// 🧠 TYPE: SUB1 (WAJIB tampil, fokus ke jenis balok spesifik)
// 🧠 INTENT: Informational + Pre-commercial
// 📌 STATUS: SUDAH ADA (di const urlMappingPerbaikanStrukturKolomBalok)
// Breadcrumb: Home > Jasa Perawatan & Perbaikan Bangunan > Jasa Perbaikan Struktur > Jasa Perbaikan Struktur Beton > Jasa Perbaikan Balok Beton > Jasa Perbaikan Balok Gantung
// ============================================================

const urlMappingPerbaikanBalokGantung = {
  // "https://www.betonjayareadymix.com/p/jasa-perbaikan-balok-gantung.html": "Jasa Perbaikan Balok Gantung",  // TYPE: SUB1
  // "https://www.betonjayareadymix.com/2019/08/harga-perbaikan-balok-gantung.html": "Harga Perbaikan Balok Gantung"  // TYPE: MONEY_CHILD
};

// ============================================================
// [MONEY_MASTER] - JASA PERBAIKAN STRUKTUR TIANG BETON
// 🧠 TYPE: MONEY_MASTER (WAJIB tampil, transaksional)
// 🧠 INTENT: Transactional (harga, form, konsultasi)
// 📌 STATUS: AKTIF (konten lengkap dari URL yang diberikan)
// Breadcrumb: Home > Jasa Perawatan & Perbaikan Bangunan > Jasa Perbaikan Struktur > Jasa Perbaikan Struktur Beton > Jasa Perbaikan Struktur Tiang Beton
// ============================================================

const urlMappingPerbaikanStrukturTiangBeton = {
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-struktur-tiang-beton.html": "Jasa Perbaikan Struktur Tiang Beton",  // TYPE: MONEY_MASTER ✅ AKTIF
  // "https://www.betonjayareadymix.com/2019/08/harga-perbaikan-struktur-tiang-beton.html": "Harga Perbaikan Struktur Tiang Beton"  // TYPE: MONEY_CHILD (404)
};
//Akhir Sub PerbaikanStrukturKolomBalokBeton


//SUB PerbaikanStrukturPondasi
/*
JASA PERBAIKAN STRUKTUR (SUB2 - /p/jasa-perbaikan-struktur.html)
│
└── JASA PERBAIKAN STRUKTUR PONDASI (VARIANT - /p/jasa-perbaikan-struktur-pondasi.html)
    │
    ├── [MONEY_MASTER] Jasa Perbaikan Pondasi Bangunan
    ├── [MONEY_MASTER] Jasa Perbaikan Pondasi Rumah
    ├── [MONEY_MASTER] Jasa Perbaikan Struktur Pondasi
    ├── [MONEY_MASTER] Jasa Perbaikan Struktur Pondasi Rumah
    └── [MONEY_MASTER] Jasa Penguatan Pondasi Bangunan
*/

// ============================================================
// SUB PERBAIKAN STRUKTUR PONDASI
// Parent: Jasa Perbaikan Struktur Pondasi (/p/jasa-perbaikan-struktur-pondasi.html)
// ============================================================

// ============================================================
// [MONEY_MASTER] - JASA PERBAIKAN PONDASI (UMUM)
// 🧠 TYPE: MONEY_MASTER (WAJIB tampil, parent: SUB2)
// 🧠 STATUS: PERLU DIBUAT (halaman PAGE baru)
// 📌 SARAN: Buat halaman di /p/jasa-perbaikan-pondasi.html
// Breadcrumb: Home > Jasa Perbaikan Struktur > Jasa Perbaikan Struktur Pondasi > Jasa Perbaikan Pondasi
// ============================================================

const urlMappingJasaPerbaikanPondasi = {
  // "https://www.betonjayareadymix.com/p/jasa-perbaikan-pondasi.html": "Jasa Perbaikan Pondasi",  // TYPE: MONEY_MASTER
  // "https://www.betonjayareadymix.com/2019/08/harga-perbaikan-pondasi.html": "Harga Perbaikan Pondasi"  // TYPE: MONEY_MASTER
};

// ============================================================
// [MONEY_MASTER] - JASA PERBAIKAN PONDASI BANGUNAN
// 🧠 TYPE: MONEY_MASTER (WAJIB tampil, parent: SUB2)
// 🧠 STATUS: SUDAH ADA (di const urlMappingPerbaikanStrukturPondasi)
// 📌 CATATAN: Halaman ini sudah ada dengan URL /p/jasa-perbaikan-pondasi-bangunan.html
// Breadcrumb: Home > Jasa Perbaikan Struktur > Jasa Perbaikan Struktur Pondasi > Jasa Perbaikan Pondasi Bangunan
// ============================================================

const urlMappingJasaPerbaikanPondasiBangunan = {
  // "https://www.betonjayareadymix.com/p/jasa-perbaikan-pondasi-bangunan.html": "Jasa Perbaikan Pondasi Bangunan",  // TYPE: MONEY_MASTER
  // "https://www.betonjayareadymix.com/2019/08/harga-perbaikan-pondasi-bangunan.html": "Harga Perbaikan Pondasi Bangunan"  // TYPE: MONEY_MASTER
};

// ============================================================
// [MONEY_MASTER] - JASA PERBAIKAN STRUKTUR PONDASI
// 🧠 TYPE: MONEY_MASTER (WAJIB tampil, parent: SUB2)
// 🧠 STATUS: SUDAH ADA (di const urlMappingPerbaikanStrukturPondasi)
// 📌 CATATAN: Halaman ini sudah ada dengan URL /p/jasa-perbaikan-struktur-pondasi.html
// Breadcrumb: Home > Jasa Perbaikan Struktur > Jasa Perbaikan Struktur Pondasi > Jasa Perbaikan Struktur Pondasi
// ============================================================

const urlMappingJasaPerbaikanStrukturPondasi = {
  // "https://www.betonjayareadymix.com/p/jasa-perbaikan-struktur-pondasi.html": "Jasa Perbaikan Struktur Pondasi",  // TYPE: MONEY_MASTER
  // "https://www.betonjayareadymix.com/2019/08/harga-perbaikan-struktur-pondasi.html": "Harga Perbaikan Struktur Pondasi"  // TYPE: MONEY_MASTER
};

// ============================================================
// [MONEY_MASTER] - JASA PERBAIKAN PONDASI RUMAH
// 🧠 TYPE: MONEY_MASTER (WAJIB tampil, parent: SUB2)
// 🧠 STATUS: SUDAH ADA (di const urlMappingPerbaikanStrukturPondasi)
// 📌 CATATAN: Halaman ini sudah ada dengan URL /p/jasa-perbaikan-pondasi-rumah.html
// Breadcrumb: Home > Jasa Perbaikan Struktur > Jasa Perbaikan Struktur Pondasi > Jasa Perbaikan Pondasi Rumah
// ============================================================

const urlMappingJasaPerbaikanPondasiRumah = {
  // "https://www.betonjayareadymix.com/p/jasa-perbaikan-pondasi-rumah.html": "Jasa Perbaikan Pondasi Rumah",  // TYPE: MONEY_MASTER
  // "https://www.betonjayareadymix.com/2019/08/harga-perbaikan-pondasi-rumah.html": "Harga Perbaikan Pondasi Rumah"  // TYPE: MONEY_MASTER
};

// ============================================================
// [MONEY_MASTER] - JASA PENGUATAN PONDASI BANGUNAN
// 🧠 TYPE: MONEY_MASTER (WAJIB tampil, parent: SUB2)
// 🧠 STATUS: SUDAH ADA (di const urlMappingPerbaikanStrukturPondasi)
// 📌 CATATAN: Halaman ini sudah ada dengan URL /p/jasa-penguatan-pondasi-bangunan.html
// Breadcrumb: Home > Jasa Perbaikan Struktur > Jasa Perbaikan Struktur Pondasi > Jasa Penguatan Pondasi Bangunan
// ============================================================

const urlMappingJasaPenguatanPondasiBangunan = {
  // "https://www.betonjayareadymix.com/p/jasa-penguatan-pondasi-bangunan.html": "Jasa Penguatan Pondasi Bangunan",  // TYPE: MONEY_MASTER
  // "https://www.betonjayareadymix.com/2019/08/harga-penguatan-pondasi-bangunan.html": "Harga Penguatan Pondasi Bangunan"  // TYPE: MONEY_MASTER
};

// ============================================================
// [MONEY_MASTER] - JASA PERBAIKAN STRUKTUR PONDASI RUMAH
// 🧠 TYPE: MONEY_MASTER (WAJIB tampil, parent: SUB2)
// 🧠 STATUS: SUDAH ADA (URL aktif, kontur perlu dicek)
// 📌 CATATAN: Halaman ini sudah ada dengan URL /p/jasa-perbaikan-struktur-pondasi-rumah.html
// ⚠️ DARI CEK URL: Halaman memiliki navigasi menu, konten utama perlu dicek
// Breadcrumb: Home > Jasa Perbaikan Struktur > Jasa Perbaikan Struktur Pondasi > Jasa Perbaikan Struktur Pondasi Rumah
// ============================================================

const urlMappingJasaPerbaikanStrukturPondasiRumah = {
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-struktur-pondasi-rumah.html": "Jasa Perbaikan Struktur Pondasi Rumah"  // TYPE: MONEY_MASTER
};

// ============================================================
// [MONEY_CHILD] - HARGA PERBAIKAN (BERDASARKAN LOKASI)
// 🧠 TYPE: MONEY_CHILD (WAJIB tampil, parent: MONEY_MASTER)
// 🧠 STATUS: 404 (tidak ditemukan)
// ⚠️ DARI CEK URL: Halaman https://.../harga-perbaikan-struktur-pondasi-rumah.html mengembalikan 404
// 📌 REKOMENDASI: Perbaiki URL atau buat halaman baru
// ============================================================

// "https://www.betonjayareadymix.com/2019/08/harga-perbaikan-struktur-pondasi-rumah.html": "Harga Perbaikan Struktur Pondasi Rumah"  // ❌ 404 - PERLU DIPERBAIKI
//Akhir SUB PerbaikanStrukturPondasi

/*
JASA PERBAIKAN STRUKTUR (SUB2)
│
└── JASA PERBAIKAN STRUKTUR DINDING (SUB2 - /p/jasa-perbaikan-struktur-dinding.html)
    │
    ├── [MONEY_MASTER] Jasa Injeksi Dinding Retak
    ├── [MONEY_MASTER] Jasa Perbaikan Dinding Retak Struktur
    ├── [MONEY_MASTER] Jasa Perbaikan Struktur Dinding Retak
    ├── [MONEY_MASTER] Jasa Bobok Dinding Instalasi
    ├── [MONEY_MASTER] Jasa Perbaikan Struktur Dinding Lembab
    ├── [MONEY_MASTER] Jasa Renovasi Penggantian Dinding Bata
    └── [MONEY_MASTER] Jasa Perbaikan Penggantian Dinding Bata
*/

// ============================================================
// PERBAIKAN STRUKTUR DINDING - MONEY PAGES
// Parent: Jasa Perbaikan Struktur Dinding (/p/jasa-perbaikan-struktur-dinding.html)
// ============================================================

// ============================================================
// [MONEY_MASTER] - JASA INJEKSI DINDING RETAK
// 🧠 TYPE: MONEY_MASTER (WAJIB tampil, parent: SUB2)
// 🧠 INTENT: Transactional (harga, metode injeksi, epoxy)
// Breadcrumb: Home > Jasa Perawatan & Perbaikan Bangunan > Jasa Perbaikan Struktur > Jasa Perbaikan Struktur Dinding > Jasa Injeksi Dinding Retak
// ============================================================

const urlMappingJasaInjeksiDindingRetak = {
  "https://www.betonjayareadymix.com/p/jasa-injeksi-dinding-retak.html": "Jasa Injeksi Dinding Retak",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/2019/08/harga-injeksi-dinding-retak.html": "Harga Injeksi Dinding Retak"  // TYPE: MONEY_MASTER
};

// ============================================================
// [MONEY_MASTER] - JASA PERBAIKAN DINDING RETAK STRUKTUR
// 🧠 TYPE: MONEY_MASTER (WAJIB tampil, parent: SUB2)
// 🧠 INTENT: Transactional (perbaikan retak struktural)
// Breadcrumb: Home > Jasa Perawatan & Perbaikan Bangunan > Jasa Perbaikan Struktur > Jasa Perbaikan Struktur Dinding > Jasa Perbaikan Dinding Retak Struktur
// ============================================================

const urlMappingJasaPerbaikanDindingRetakStruktur = {
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-dinding-retak-struktur.html": "Jasa Perbaikan Dinding Retak Struktur",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/2019/08/harga-perbaikan-dinding-retak-struktur.html": "Harga Perbaikan Dinding Retak Struktur"  // TYPE: MONEY_MASTER
};

// ============================================================
// [MONEY_MASTER] - JASA PERBAIKAN STRUKTUR DINDING RETAK
// 🧠 TYPE: MONEY_MASTER (WAJIB tampil, parent: SUB2)
// 🧠 INTENT: Transactional (perbaikan struktur dinding retak)
// Breadcrumb: Home > Jasa Perawatan & Perbaikan Bangunan > Jasa Perbaikan Struktur > Jasa Perbaikan Struktur Dinding > Jasa Perbaikan Struktur Dinding Retak
// ============================================================

const urlMappingJasaPerbaikanStrukturDindingRetak = {
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-struktur-dinding-retak.html": "Jasa Perbaikan Struktur Dinding Retak",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/2019/08/harga-perbaikan-struktur-dinding-retak.html": "Harga Perbaikan Struktur Dinding Retak"  // TYPE: MONEY_MASTER
};

// ============================================================
// [MONEY_MASTER] - JASA BOBOK DINDING INSTALASI
// 🧠 TYPE: MONEY_MASTER (WAJIB tampil, parent: SUB2)
// 🧠 INTENT: Transactional (bobok dinding untuk instalasi)
// Breadcrumb: Home > Jasa Perawatan & Perbaikan Bangunan > Jasa Perbaikan Struktur > Jasa Perbaikan Struktur Dinding > Jasa Bobok Dinding Instalasi
// ============================================================

const urlMappingJasaBobokDindingInstalasi = {
  "https://www.betonjayareadymix.com/p/jasa-bobok-dinding-instalasi.html": "Jasa Bobok Dinding Instalasi",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/2019/08/harga-bobok-dinding-instalasi.html": "Harga Bobok Dinding Instalasi"  // TYPE: MONEY_MASTER
};

// ============================================================
// [MONEY_MASTER] - JASA PERBAIKAN STRUKTUR DINDING LEMBAB
// 🧠 TYPE: MONEY_MASTER (WAJIB tampil, parent: SUB2)
// 🧠 INTENT: Transactional (perbaikan dinding lembab/rembesan)
// Breadcrumb: Home > Jasa Perawatan & Perbaikan Bangunan > Jasa Perbaikan Struktur > Jasa Perbaikan Struktur Dinding > Jasa Perbaikan Struktur Dinding Lembab
// ============================================================

const urlMappingJasaPerbaikanStrukturDindingLembab = {
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-struktur-dinding-lembab.html": "Jasa Perbaikan Struktur Dinding Lembab",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/2019/08/harga-perbaikan-dinding-lembab.html": "Harga Perbaikan Dinding Lembab"  // TYPE: MONEY_MASTER
};

// ============================================================
// [MONEY_MASTER] - JASA RENOVASI PENGGANTIAN DINDING BATA
// 🧠 TYPE: MONEY_MASTER (WAJIB tampil, parent: SUB2)
// 🧠 INTENT: Transactional (renovasi total bongkar pasang)
// Breadcrumb: Home > Jasa Perawatan & Perbaikan Bangunan > Jasa Perbaikan Struktur > Jasa Perbaikan Struktur Dinding > Jasa Renovasi Penggantian Dinding Bata
// ============================================================

const urlMappingJasaRenovasiPenggantianDindingBata = {
  "https://www.betonjayareadymix.com/p/jasa-renovasi-penggantian-dinding-bata.html": "Jasa Renovasi Penggantian Dinding Bata",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/2019/08/harga-renovasi-dinding-bata.html": "Harga Renovasi Dinding Bata"  // TYPE: MONEY_MASTER
};

// ============================================================
// [MONEY_MASTER] - JASA PERBAIKAN PENGGANTIAN DINDING BATA
// 🧠 TYPE: MONEY_MASTER (WAJIB tampil, parent: SUB2)
// 🧠 INTENT: Transactional (perbaikan lokal tanpa renovasi total)
// Breadcrumb: Home > Jasa Perawatan & Perbaikan Bangunan > Jasa Perbaikan Struktur > Jasa Perbaikan Struktur Dinding > Jasa Perbaikan Penggantian Dinding Bata
// ============================================================

const urlMappingJasaPerbaikanPenggantianDindingBata = {
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-penggantian-dinding-bata.html": "Jasa Perbaikan Penggantian Dinding Bata",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/2019/08/harga-perbaikan-dinding-bata.html": "Harga Perbaikan Dinding Bata"  // TYPE: MONEY_MASTER
};
//Akhir SUB PerbaikanStrukturDinding

/*
JASA PERBAIKAN STRUKTUR (SUB2 - /p/jasa-perbaikan-struktur.html)
│
└── JASA PERBAIKAN STRUKTUR LANTAI BETON (VARIANT - /p/jasa-perbaikan-struktur-lantai-beton.html)
    │
    ├── [MONEY_MASTER] Jasa Perbaikan Lantai Struktur
    ├── [MONEY_MASTER] Jasa Perbaikan Retakan Lantai Beton
    ├── [MONEY_MASTER] Jasa Perkuatan Lantai Beton
    ├── [MONEY_MASTER] Jasa Perbaikan Lantai
    ├── [MONEY_MASTER] Jasa Lantai Ambles
    ├── [MONEY_MASTER] Jasa Perbaikan Lantai Rusak
    ├── [MONEY_MASTER] Jasa Renovasi Lantai
    ├── [MONEY_MASTER] Jasa Renovasi Lantai Rusak
    ├── [MONEY_MASTER] Jasa Perbaikan Lantai Ambles
    ├── [MONEY_MASTER] Jasa Ganti Lantai Ambles
    ├── [MONEY_MASTER] Jasa Bobok Lantai Beton
    └── [MONEY_MASTER] Jasa Bobok Lantai Lama
*/

// ============================================================
// JASA PERBAIKAN STRUKTUR LANTAI (SUB-VARIANT)
// Parent: Jasa Perbaikan Struktur Lantai Beton
// ============================================================

// ============================================================
// [MONEY_MASTER] - JASA PERBAIKAN LANTAI STRUKTUR
// 🧠 TYPE: MONEY_MASTER (WAJIB tampil, parent: VARIANT)
// 🧠 STATUS: PERLU DIBUAT (halaman PAGE baru)
// 📌 SARAN: Buat halaman di /p/jasa-perbaikan-lantai-struktur.html
// Breadcrumb: Home > Jasa Perawatan & Perbaikan Bangunan > Jasa Perbaikan Struktur > Jasa Perbaikan Struktur Lantai Beton > Jasa Perbaikan Lantai Struktur
// ============================================================

const urlMappingJasaPerbaikanLantaiStruktur = {
  // "https://www.betonjayareadymix.com/p/jasa-perbaikan-lantai-struktur.html": "Jasa Perbaikan Lantai Struktur",  // TYPE: MONEY_MASTER
  // "https://www.betonjayareadymix.com/2019/08/harga-perbaikan-lantai-struktur.html": "Harga Perbaikan Lantai Struktur"  // TYPE: MONEY_MASTER
};

// ============================================================
// [VARIANT] - JASA PERBAIKAN STRUKTUR LANTAI BETON
// 🧠 TYPE: VARIANT (WAJIB tampil, parent: SUB2)
// 🧠 STATUS: SUDAH ADA (di const urlMappingPerbaikanStrukturLantai)
// 📌 CATATAN: Halaman ini adalah parent untuk semua MONEY_MASTER di bawahnya
// Breadcrumb: Home > Jasa Perawatan & Perbaikan Bangunan > Jasa Perbaikan Struktur > Jasa Perbaikan Struktur Lantai Beton
// ============================================================

const urlMappingJasaPerbaikanStrukturLantaiBeton = {
  // "https://www.betonjayareadymix.com/p/jasa-perbaikan-struktur-lantai-beton.html": "Jasa Perbaikan Struktur Lantai Beton",  // TYPE: VARIANT
  // "https://www.betonjayareadymix.com/2019/08/harga-perbaikan-struktur-lantai-beton.html": "Harga Perbaikan Struktur Lantai Beton"  // TYPE: MONEY_MASTER
};

// ============================================================
// [MONEY_MASTER] - JASA PERBAIKAN RETAKAN LANTAI BETON
// 🧠 TYPE: MONEY_MASTER (WAJIB tampil, parent: VARIANT)
// 🧠 STATUS: SUDAH ADA (di const urlMappingPerbaikanStrukturLantai)
// Breadcrumb: Home > Jasa Perawatan & Perbaikan Bangunan > Jasa Perbaikan Struktur > Jasa Perbaikan Struktur Lantai Beton > Jasa Perbaikan Retakan Lantai Beton
// ============================================================

const urlMappingJasaPerbaikanRetakanLantaiBeton = {
  // "https://www.betonjayareadymix.com/p/jasa-perbaikan-retakan-lantai-beton.html": "Jasa Perbaikan Retakan Lantai Beton",  // TYPE: MONEY_MASTER
  // "https://www.betonjayareadymix.com/2019/08/harga-perbaikan-retakan-lantai-beton.html": "Harga Perbaikan Retakan Lantai Beton"  // TYPE: MONEY_MASTER
};

// ============================================================
// [MONEY_MASTER] - JASA PERKUATAN LANTAI BETON
// 🧠 TYPE: MONEY_MASTER (WAJIB tampil, parent: VARIANT)
// 🧠 STATUS: SUDAH ADA (di const urlMappingPerbaikanStrukturLantai)
// Breadcrumb: Home > Jasa Perawatan & Perbaikan Bangunan > Jasa Perbaikan Struktur > Jasa Perbaikan Struktur Lantai Beton > Jasa Perkuatan Lantai Beton
// ============================================================

const urlMappingJasaPerkuatanLantaiBeton = {
  // "https://www.betonjayareadymix.com/p/jasa-perkuatan-lantai-beton.html": "Jasa Perkuatan Lantai Beton",  // TYPE: MONEY_MASTER
  // "https://www.betonjayareadymix.com/2019/08/harga-perkuatan-lantai-beton.html": "Harga Perkuatan Lantai Beton"  // TYPE: MONEY_MASTER
};

// ============================================================
// [MONEY_MASTER] - JASA PERBAIKAN LANTAI
// 🧠 TYPE: MONEY_MASTER (WAJIB tampil, parent: VARIANT)
// 🧠 STATUS: SUDAH ADA (di const urlMappingPerbaikanStrukturLantai)
// Breadcrumb: Home > Jasa Perawatan & Perbaikan Bangunan > Jasa Perbaikan Struktur > Jasa Perbaikan Struktur Lantai Beton > Jasa Perbaikan Lantai
// ============================================================

const urlMappingJasaPerbaikanLantai = {
  // "https://www.betonjayareadymix.com/p/jasa-perbaikan-lantai.html": "Jasa Perbaikan Lantai",  // TYPE: MONEY_MASTER
  // "https://www.betonjayareadymix.com/2019/08/harga-perbaikan-lantai.html": "Harga Perbaikan Lantai"  // TYPE: MONEY_MASTER
};

// ============================================================
// [MONEY_MASTER] - JASA LANTAI AMBLES
// 🧠 TYPE: MONEY_MASTER (WAJIB tampil, parent: VARIANT)
// 🧠 STATUS: SUDAH ADA (di const urlMappingPerbaikanStrukturLantai)
// Breadcrumb: Home > Jasa Perawatan & Perbaikan Bangunan > Jasa Perbaikan Struktur > Jasa Perbaikan Struktur Lantai Beton > Jasa Lantai Ambles
// ============================================================

const urlMappingJasaLantaiAmbles = {
  // "https://www.betonjayareadymix.com/p/jasa-lantai-ambles.html": "Jasa Lantai Ambles",  // TYPE: MONEY_MASTER
  // "https://www.betonjayareadymix.com/2019/08/harga-perbaikan-lantai-ambles.html": "Harga Perbaikan Lantai Ambles"  // TYPE: MONEY_MASTER
};

// ============================================================
// [MONEY_MASTER] - JASA PERBAIKAN LANTAI RUSAK
// 🧠 TYPE: MONEY_MASTER (WAJIB tampil, parent: VARIANT)
// 🧠 STATUS: SUDAH ADA (di const urlMappingPerbaikanStrukturLantai)
// Breadcrumb: Home > Jasa Perawatan & Perbaikan Bangunan > Jasa Perbaikan Struktur > Jasa Perbaikan Struktur Lantai Beton > Jasa Perbaikan Lantai Rusak
// ============================================================

const urlMappingJasaPerbaikanLantaiRusak = {
  // "https://www.betonjayareadymix.com/p/jasa-perbaikan-lantai-rusak.html": "Jasa Perbaikan Lantai Rusak",  // TYPE: MONEY_MASTER
  // "https://www.betonjayareadymix.com/2019/08/harga-perbaikan-lantai-rusak.html": "Harga Perbaikan Lantai Rusak"  // TYPE: MONEY_MASTER
};

// ============================================================
// [MONEY_MASTER] - JASA RENOVASI LANTAI
// 🧠 TYPE: MONEY_MASTER (WAJIB tampil, parent: VARIANT)
// 🧠 STATUS: SUDAH ADA (di const urlMappingPerbaikanStrukturLantai)
// Breadcrumb: Home > Jasa Perawatan & Perbaikan Bangunan > Jasa Perbaikan Struktur > Jasa Perbaikan Struktur Lantai Beton > Jasa Renovasi Lantai
// ============================================================

const urlMappingJasaRenovasiLantai = {
  // "https://www.betonjayareadymix.com/p/jasa-renovasi-lantai.html": "Jasa Renovasi Lantai",  // TYPE: MONEY_MASTER
  // "https://www.betonjayareadymix.com/2019/08/harga-renovasi-lantai.html": "Harga Renovasi Lantai"  // TYPE: MONEY_MASTER
};

// ============================================================
// [MONEY_MASTER] - JASA RENOVASI LANTAI RUSAK
// 🧠 TYPE: MONEY_MASTER (WAJIB tampil, parent: VARIANT)
// 🧠 STATUS: SUDAH ADA (di const urlMappingPerbaikanStrukturLantai)
// Breadcrumb: Home > Jasa Perawatan & Perbaikan Bangunan > Jasa Perbaikan Struktur > Jasa Perbaikan Struktur Lantai Beton > Jasa Renovasi Lantai Rusak
// ============================================================

const urlMappingJasaRenovasiLantaiRusak = {
  // "https://www.betonjayareadymix.com/p/jasa-renovasi-lantai-rusak.html": "Jasa Renovasi Lantai Rusak",  // TYPE: MONEY_MASTER
  // "https://www.betonjayareadymix.com/2019/08/harga-renovasi-lantai-rusak.html": "Harga Renovasi Lantai Rusak"  // TYPE: MONEY_MASTER
};

// ============================================================
// [MONEY_MASTER] - JASA PERBAIKAN LANTAI AMBLES
// 🧠 TYPE: MONEY_MASTER (WAJIB tampil, parent: VARIANT)
// 🧠 STATUS: SUDAH ADA (di const urlMappingPerbaikanStrukturLantai)
// Breadcrumb: Home > Jasa Perawatan & Perbaikan Bangunan > Jasa Perbaikan Struktur > Jasa Perbaikan Struktur Lantai Beton > Jasa Perbaikan Lantai Ambles
// ============================================================

const urlMappingJasaPerbaikanLantaiAmbles = {
  // "https://www.betonjayareadymix.com/p/jasa-perbaikan-lantai-ambles.html": "Jasa Perbaikan Lantai Ambles",  // TYPE: MONEY_MASTER
  // "https://www.betonjayareadymix.com/2019/08/harga-perbaikan-lantai-ambles.html": "Harga Perbaikan Lantai Ambles"  // TYPE: MONEY_MASTER
};

// ============================================================
// [MONEY_MASTER] - JASA GANTI LANTAI AMBLES
// 🧠 TYPE: MONEY_MASTER (WAJIB tampil, parent: VARIANT)
// 🧠 STATUS: SUDAH ADA (di const urlMappingPerbaikanStrukturLantai)
// Breadcrumb: Home > Jasa Perawatan & Perbaikan Bangunan > Jasa Perbaikan Struktur > Jasa Perbaikan Struktur Lantai Beton > Jasa Ganti Lantai Ambles
// ============================================================

const urlMappingJasaGantiLantaiAmbles = {
  // "https://www.betonjayareadymix.com/p/jasa-ganti-lantai-ambles.html": "Jasa Ganti Lantai Ambles",  // TYPE: MONEY_MASTER
  // "https://www.betonjayareadymix.com/2019/08/harga-ganti-lantai-ambles.html": "Harga Ganti Lantai Ambles"  // TYPE: MONEY_MASTER
};

// ============================================================
// [MONEY_MASTER] - JASA BOBOK LANTAI BETON
// 🧠 TYPE: MONEY_MASTER (WAJIB tampil, parent: VARIANT)
// 🧠 STATUS: SUDAH ADA (di const urlMappingPerbaikanStrukturLantai)
// Breadcrumb: Home > Jasa Perawatan & Perbaikan Bangunan > Jasa Perbaikan Struktur > Jasa Perbaikan Struktur Lantai Beton > Jasa Bobok Lantai Beton
// ============================================================

const urlMappingJasaBobokLantaiBeton = {
  // "https://www.betonjayareadymix.com/p/jasa-bobok-lantai-beton.html": "Jasa Bobok Lantai Beton",  // TYPE: MONEY_MASTER
  // "https://www.betonjayareadymix.com/2019/08/harga-bobok-lantai-beton.html": "Harga Bobok Lantai Beton"  // TYPE: MONEY_MASTER
};

// ============================================================
// [MONEY_MASTER] - JASA BOBOK LANTAI LAMA
// 🧠 TYPE: MONEY_MASTER (WAJIB tampil, parent: VARIANT)
// 🧠 STATUS: AKTIF (konten ada, perlu dicek kelengkapan)
// Breadcrumb: Home > Jasa Perawatan & Perbaikan Bangunan > Jasa Perbaikan Struktur > Jasa Perbaikan Struktur Lantai Beton > Jasa Bobok Lantai Lama
// ============================================================

const urlMappingJasaBobokLantaiLama = {
  // "https://www.betonjayareadymix.com/p/jasa-bobok-lantai-lama.html": "Jasa Bobok Lantai Lama",  // TYPE: MONEY_MASTER (konten ada, perlu dicek)
  // "https://www.betonjayareadymix.com/2019/08/harga-bobok-lantai-lama.html": "Harga Bobok Lantai Lama"  // TYPE: MONEY_MASTER (404 - perlu dibuat)
};
/*

*/

//Akhir SUB JasaRenovasiPerbaikanStrukturLantai

//SUB JasaPerbaikanStruktur
//isi money page aja udah ada sarannya di jasakonstruksipembatas.js
const urlMappingJasaPerbaikanGedungBertingkat= {

};
const urlMappingJasaPerbaikanStrukturBangunanTua = {

};
const urlMappingJasaPerbaikanStrukturBangunanMiring = {

};
//Akhir SUB PerbaikanStrukturBangunan


// ============================================================
// JASA RENOVASI FASILITAS UMUM
// Parent: Jasa Renovasi Fasilitas Umum (/p/jasa-renovasi-fasilitas-umum.html)
// ============================================================

// ============================================================
// [SUB2] - JASA RENOVASI STADION
// 🧠 TYPE: SUB2 (boleh skip di breadcrumb)
// Breadcrumb: Home > Jasa Renovasi Fasilitas Umum > Jasa Renovasi Stadion
// ============================================================

const urlMappingJasaRenovasiStadion = {
  // ============================================================
  // [MONEY_MASTER] - RENOVASI STADION (POST)
  // 🧠 TYPE: MONEY_MASTER (WAJIB tampil, parent: SUB2)
  // Breadcrumb: Home > Jasa Renovasi Fasilitas Umum > Jasa Renovasi Stadion > [Nama Halaman]
  // ============================================================
  "https://www.betonjayareadymix.com/2019/06/jasa-renovasi-tribun-stadion.html": "Renovasi Tribun Penonton",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/2019/06/jasa-renovasi-lapangan-stadion.html": "Peremajaan Lapangan Rumput dan Drainase",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/2019/06/jasa-renovasi-kamar-ganti-stadion.html": "Renovasi Kamar Ganti Pemain",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/2019/06/jasa-renovasi-pagar-stadion.html": "Renovasi Pagar Pengaman dan Perimeter",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/2019/06/jasa-perbaikan-atap-stadion.html": "Perbaikan Atap dan Kanopi Stadion",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/2019/06/jasa-perbaikan-lintasan-atletik.html": "Perbaikan Lintasan Atletik dan Track Area",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/2019/06/jasa-perbaikan-pencahayaan-stadion.html": "Perbaikan Sistem Pencahayaan Stadion",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/2019/06/jasa-perbaikan-struktur-stadion.html": "Perbaikan Struktur Beton dan Baja Stadion",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/2019/06/jasa-perbaikan-fasilitas-penonton.html": "Perbaikan Fasilitas Penonton dan Umum"  // TYPE: MONEY_MASTER
};

// ============================================================
// [SUB2] - JASA RENOVASI TEMPAT IBADAH
// 🧠 TYPE: SUB2 (boleh skip di breadcrumb)
// Breadcrumb: Home > Jasa Renovasi Fasilitas Umum > Jasa Renovasi Tempat Ibadah
// ============================================================

// ============================================================
// [MONEY_MASTER] - JASA RENOVASI MASJID
// 🧠 TYPE: MONEY_MASTER (WAJIB tampil, parent: SUB2)
// 📌 SARAN: Buat halaman dengan konten spesifik renovasi masjid
// Breadcrumb: Home > Jasa Renovasi Fasilitas Umum > Jasa Renovasi Tempat Ibadah > Jasa Renovasi Masjid
// ============================================================
const urlMappingJasaRenovasiMasjid = {
  // "https://www.betonjayareadymix.com/p/jasa-renovasi-masjid.html": "Jasa Renovasi Masjid",  // TYPE: MONEY_MASTER
  // "https://www.betonjayareadymix.com/2019/08/harga-renovasi-masjid.html": "Harga Renovasi Masjid",  // TYPE: MONEY_MASTER
  // "https://www.betonjayareadymix.com/2019/08/renovasi-masjid-minimalis.html": "Renovasi Masjid Minimalis"  // TYPE: MONEY_MASTER
};

// ============================================================
// [MONEY_MASTER] - JASA RENOVASI GEREJA
// ============================================================
const urlMappingJasaRenovasiGereja = {
  // "https://www.betonjayareadymix.com/p/jasa-renovasi-gereja.html": "Jasa Renovasi Gereja",  // TYPE: MONEY_MASTER
  // "https://www.betonjayareadymix.com/2019/08/harga-renovasi-gereja.html": "Harga Renovasi Gereja"  // TYPE: MONEY_MASTER
};

// ============================================================
// [MONEY_MASTER] - JASA RENOVASI KLENTENG
// ============================================================
const urlMappingJasaRenovasiKlenteng = {
  // "https://www.betonjayareadymix.com/p/jasa-renovasi-klenteng.html": "Jasa Renovasi Klenteng",  // TYPE: MONEY_MASTER
  // "https://www.betonjayareadymix.com/2019/08/harga-renovasi-klenteng.html": "Harga Renovasi Klenteng"  // TYPE: MONEY_MASTER
};

// ============================================================
// [MONEY_MASTER] - JASA RENOVASI LANGGAR
// ============================================================
const urlMappingJasaRenovasiLanggar = {
  // "https://www.betonjayareadymix.com/p/jasa-renovasi-langgar.html": "Jasa Renovasi Langgar",  // TYPE: MONEY_MASTER
  // "https://www.betonjayareadymix.com/2019/08/harga-renovasi-langgar.html": "Harga Renovasi Langgar"  // TYPE: MONEY_MASTER
};

// ============================================================
// [MONEY_MASTER] - JASA RENOVASI MUSHOLA
// ============================================================
const urlMappingJasaRenovasiMushola = {
  // "https://www.betonjayareadymix.com/p/jasa-renovasi-mushola.html": "Jasa Renovasi Mushola",  // TYPE: MONEY_MASTER
  // "https://www.betonjayareadymix.com/2019/08/harga-renovasi-mushola.html": "Harga Renovasi Mushola"  // TYPE: MONEY_MASTER
};

// ============================================================
// [MONEY_MASTER] - JASA RENOVASI VIHARA
// ============================================================
const urlMappingJasaRenovasiVihara = {
  // "https://www.betonjayareadymix.com/p/jasa-renovasi-vihara.html": "Jasa Renovasi Vihara",  // TYPE: MONEY_MASTER
  // "https://www.betonjayareadymix.com/2019/08/harga-renovasi-vihara.html": "Harga Renovasi Vihara"  // TYPE: MONEY_MASTER
};

// ============================================================
// [MONEY_MASTER] - JASA RENOVASI PURA
// ============================================================
const urlMappingJasaRenovasiPura = {
  // "https://www.betonjayareadymix.com/p/jasa-renovasi-pura.html": "Jasa Renovasi Pura",  // TYPE: MONEY_MASTER
  // "https://www.betonjayareadymix.com/2019/08/harga-renovasi-pura.html": "Harga Renovasi Pura"  // TYPE: MONEY_MASTER
};


// ============================================================
// JASA INJEKSI BETON RETAK
// Parent: Jasa Rehabilitasi Beton (/p/jasa-rehabilitasi-beton.html)
// ============================================================

// ============================================================
// [SUB2] - JASA INJEKSI BETON RETAK
// 🧠 TYPE: SUB2 (boleh skip di breadcrumb)
// Breadcrumb: Home > Jasa Rehabilitasi Beton > Jasa Injeksi Beton Retak
// ============================================================

const urlMappingJasaInjeksiBetonRetak = {
  // ============================================================
  // [MONEY_MASTER] - BORONGAN INJEKSI BETON
  // 🧠 TYPE: MONEY_MASTER (WAJIB tampil, parent: SUB2)
  // Breadcrumb: Home > Jasa Rehabilitasi Beton > Jasa Injeksi Beton Retak > Borongan Injeksi Beton
  // ============================================================
  "https://www.betonjayareadymix.com/2018/09/borongan-injeksi-beton.html": "Borongan Injeksi Beton",  // TYPE: MONEY_MASTER

  // ============================================================
  // [MONEY_MASTER] - INJEKSI BETON (MASTER)
  // 🧠 TYPE: MONEY_MASTER (WAJIB tampil)
  // Breadcrumb: Home > Jasa Rehabilitasi Beton > Jasa Injeksi Beton Retak > Injeksi Beton
  // ============================================================
  "https://www.betonjayareadymix.com/2018/09/injeksi-beton.html": "Injeksi Beton",  // TYPE: MONEY_MASTER

  // ============================================================
  // [MONEY_MASTER] - HARGA JASA INJEKSI BETON
  // 🧠 TYPE: MONEY_MASTER (WAJIB tampil)
  // Breadcrumb: Home > Jasa Rehabilitasi Beton > Jasa Injeksi Beton Retak > Harga Jasa Injeksi Beton
  // ============================================================
  "https://www.betonjayareadymix.com/2018/09/harga-jasa-injeksi-beton.html": "Harga Jasa Injeksi Beton",  // TYPE: MONEY_MASTER

  // ============================================================
  // [MONEY_CHILD] - INJEKSI BETON BERDASARKAN LOKASI
  // 🧠 TYPE: MONEY_CHILD (WAJIB tampil, parent: SUB2)
  // 🧠 INTENT: Transactional (spesifik lokasi)
  // Breadcrumb: Home > Jasa Rehabilitasi Beton > Jasa Injeksi Beton Retak > Injeksi Beton [Lokasi]
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
/*const urlMappingJasaInjeksiRetakBeton = {

};*/// ============================================================
// ============================================================
// SUB JASA PATCHING BETON
// Parent: Jasa Rehabilitasi Beton
// ============================================================

const urlMappingJasaPatchingBeton = {
  // ============================================================
  // [MONEY_MASTER] - TAMBAL BETON
  // 🧠 TYPE: MONEY_MASTER (WAJIB tampil, parent: SUB2)
  // 🧠 STATUS: AKTIF - konten lengkap
  // Breadcrumb: Home > Jasa Perawatan & Perbaikan Bangunan > Jasa Perbaikan Struktur > Jasa Rehabilitasi Beton > Tambal Beton
  // ============================================================
  "https://www.betonjayareadymix.com/2018/09/tambal-beton.html": "Tambal Beton",  // TYPE: MONEY_MASTER
  
  // ============================================================
  // [MONEY_MASTER] - BORONGAN TAMBAL BETON
  // 🧠 TYPE: MONEY_MASTER (WAJIB tampil, parent: SUB2)
  // 🧠 STATUS: AKTIF - konten lengkap
  // Breadcrumb: Home > Jasa Perawatan & Perbaikan Bangunan > Jasa Perbaikan Struktur > Jasa Rehabilitasi Beton > Borongan Tambal Beton
  // ============================================================
  "https://www.betonjayareadymix.com/2018/09/borongan-tambal-beton.html": "Borongan Tambal Beton"  // TYPE: MONEY_MASTER
};

// ============================================================
// SUB JASA SHOTCRETE BETON
// Parent: Jasa Rehabilitasi Beton
// ============================================================

const urlMappingJasaShortcreteBeton = {
  // ============================================================
  // [MONEY_MASTER] - BORONGAN SEMPROT BETON
  // 🧠 TYPE: MONEY_MASTER (WAJIB tampil, parent: SUB2)
  // 🧠 STATUS: AKTIF - konten lengkap
  // Breadcrumb: Home > Jasa Perawatan & Perbaikan Bangunan > Jasa Perbaikan Struktur > Jasa Rehabilitasi Beton > Borongan Semprot Beton
  // ============================================================
  "https://www.betonjayareadymix.com/2018/09/borongan-semprot-beton.html": "Borongan Semprot Beton",  // TYPE: MONEY_MASTER
  
  // ============================================================
  // [MONEY_MASTER] - HARGA JASA SHOTCRETE
  // 🧠 TYPE: MONEY_MASTER (WAJIB tampil, parent: SUB2)
  // 🧠 STATUS: AKTIF - konten lengkap
  // Breadcrumb: Home > Jasa Perawatan & Perbaikan Bangunan > Jasa Perbaikan Struktur > Jasa Rehabilitasi Beton > Harga Jasa Shotcrete
  // ============================================================
  "https://www.betonjayareadymix.com/2018/09/harga-jasa-shotcrete.html": "Harga Jasa Shotcrete",  // TYPE: MONEY_MASTER
  
  // ============================================================
  // [MONEY_MASTER] - HARGA JASA SEMPROT BETON
  // 🧠 TYPE: MONEY_MASTER (WAJIB tampil, parent: SUB2)
  // 🧠 STATUS: AKTIF - konten lengkap
  // Breadcrumb: Home > Jasa Perawatan & Perbaikan Bangunan > Jasa Perbaikan Struktur > Jasa Rehabilitasi Beton > Harga Jasa Semprot Beton
  // ============================================================
  "https://www.betonjayareadymix.com/2018/09/harga-jasa-semprot-beton.html": "Harga Jasa Semprot Beton"  // TYPE: MONEY_MASTER
};

// ============================================================
// SUB JASA GROUTING STRUKTUR BETON
// Parent: Jasa Rehabilitasi Beton
// ============================================================

const urlMappingJasaGoutingStrukturBeton = {
  // ============================================================
  // [MONEY_MASTER] - GROUTING BETON (MASTER)
  // 🧠 TYPE: MONEY_MASTER (WAJIB tampil, parent: SUB2)
  // 🧠 STATUS: AKTIF - konten lengkap
  // Breadcrumb: Home > Jasa Perawatan & Perbaikan Bangunan > Jasa Perbaikan Struktur > Jasa Rehabilitasi Beton > Grouting Beton
  // ============================================================
  "https://www.betonjayareadymix.com/2018/09/grouting-beton.html": "Grouting Beton",  // TYPE: MONEY_MASTER
  
  // ============================================================
  // [MONEY_MASTER] - HARGA JASA GROUTING BETON
  // 🧠 TYPE: MONEY_MASTER (WAJIB tampil, parent: SUB2)
  // 🧠 STATUS: AKTIF - konten lengkap
  // Breadcrumb: Home > Jasa Perawatan & Perbaikan Bangunan > Jasa Perbaikan Struktur > Jasa Rehabilitasi Beton > Harga Jasa Grouting Beton
  // ============================================================
  "https://www.betonjayareadymix.com/2018/09/harga-jasa-grouting-beton.html": "Harga Jasa Grouting Beton",  // TYPE: MONEY_MASTER
  
  // ============================================================
  // [MONEY_CHILD] - GROUTING BETON BEKASI (LOKASI)
  // 🧠 TYPE: MONEY_CHILD (WAJIB tampil, parent: MONEY_MASTER)
  // 🧠 STATUS: AKTIF - konten lengkap
  // Breadcrumb: Home > Jasa Perawatan & Perbaikan Bangunan > Jasa Perbaikan Struktur > Jasa Rehabilitasi Beton > Grouting Beton > Grouting Beton Bekasi
  // ============================================================
  "https://www.betonjayareadymix.com/2018/12/grouting-beton-bekasi.html": "Grouting Beton Bekasi",  // TYPE: MONEY_CHILD
  
  // ============================================================
  // [MONEY_CHILD] - GROUTING BETON DEPOK (LOKASI)
  // 🧠 TYPE: MONEY_CHILD (WAJIB tampil, parent: MONEY_MASTER)
  // 🧠 STATUS: AKTIF - konten lengkap
  // Breadcrumb: Home > Jasa Perawatan & Perbaikan Bangunan > Jasa Perbaikan Struktur > Jasa Rehabilitasi Beton > Grouting Beton > Grouting Beton Depok
  // ============================================================
  "https://www.betonjayareadymix.com/2018/12/grouting-beton-depok.html": "Grouting Beton Depok",  // TYPE: MONEY_CHILD
  
  // ============================================================
  // [MONEY_CHILD] - GROUTING BETON TANGERANG (LOKASI)
  // 🧠 TYPE: MONEY_CHILD (WAJIB tampil, parent: MONEY_MASTER)
  // 🧠 STATUS: AKTIF - konten lengkap
  // Breadcrumb: Home > Jasa Perawatan & Perbaikan Bangunan > Jasa Perbaikan Struktur > Jasa Rehabilitasi Beton > Grouting Beton > Grouting Beton Tangerang
  // ============================================================
  "https://www.betonjayareadymix.com/2018/12/grouting-beton-tangerang.html": "Grouting Beton Tangerang",  // TYPE: MONEY_CHILD
  
  // ============================================================
  // [MONEY_CHILD] - GROUTING BETON JAKARTA (LOKASI)
  // 🧠 TYPE: MONEY_CHILD (WAJIB tampil, parent: MONEY_MASTER)
  // 🧠 STATUS: AKTIF - konten lengkap
  // Breadcrumb: Home > Jasa Perawatan & Perbaikan Bangunan > Jasa Perbaikan Struktur > Jasa Rehabilitasi Beton > Grouting Beton > Grouting Beton Jakarta
  // ============================================================
  "https://www.betonjayareadymix.com/2018/12/grouting-beton-jakarta.html": "Grouting Beton Jakarta",  // TYPE: MONEY_CHILD
  
  // ============================================================
  // [MONEY_CHILD] - GROUTING BETON BOGOR (LOKASI)
  // 🧠 TYPE: MONEY_CHILD (WAJIB tampil, parent: MONEY_MASTER)
  // 🧠 STATUS: AKTIF - konten lengkap
  // Breadcrumb: Home > Jasa Perawatan & Perbaikan Bangunan > Jasa Perbaikan Struktur > Jasa Rehabilitasi Beton > Grouting Beton > Grouting Beton Bogor
  // ============================================================
  "https://www.betonjayareadymix.com/2018/12/grouting-beton-bogor.html": "Grouting Beton Bogor"  // TYPE: MONEY_CHILD
};

/*
JASA REHABILITASI BETON (VARIANT - /p/jasa-rehabilitasi-beton.html)
│
├── Jasa Perbaikan Beton Mengelupas (VARIANT - PERLU DIBUAT)
│   ├── Harga Perbaikan Beton Mengelupas [MONEY_CHILD]
│   └── Borongan Perbaikan Beton Mengelupas [MONEY_CHILD]
│
├── Jasa Perbaikan Beton Keropos (VARIANT - PERLU DIBUAT)
│   ├── Harga Perbaikan Beton Keropos [MONEY_CHILD]
│   └── Borongan Perbaikan Beton Keropos [MONEY_CHILD]
│
├── Jasa Perbaikan Beton Retak (VARIANT - PERLU DIBUAT)
│   ├── Harga Perbaikan Beton Retak [MONEY_CHILD]
│   ├── Borongan Perbaikan Beton Retak [MONEY_CHILD]
│   └── Jasa Injeksi Beton Retak [VARIANT] (SUDAH ADA)
│
├── Jasa Chipping Beton (VARIANT - AKTIF)
│   ├── Harga Jasa Chipping Beton [MONEY_MASTER]
│   ├── Harga Chipping Beton Per M3 [MONEY_MASTER]
│   ├── Harga Chipping Beton Murah [MONEY_MASTER]
│   ├── Harga Chipping Beton Per M2 [MONEY_MASTER]
│   └── Harga Pekerjaan Chipping Beton [MONEY_MASTER]
│
├── Jasa Beton Karbonasi (VARIANT - SARAN DIBUAT)
│   ├── Harga Perbaikan Beton Karbonasi [MONEY_CHILD]
│   └── Jasa Perbaikan Beton Keropos [MONEY_CHILD]
│
└── Jasa Perkuatan Struktur CFRP (VARIANT - SARAN DIBUAT)
    ├── Jasa Pelapisan CFRP [MONEY_MASTER]
    ├── Harga Perkuatan CFRP per M2 [MONEY_MASTER]
    └── Jasa Carbon Fiber Wrapping [MONEY_MASTER] (⚠️ 404 - PERLU DIPERBAIKI)
*/

// ============================================================
// SUB JASA PERBAIKAN BETON MENGELUPAS
// Parent: Jasa Rehabilitasi Beton (/p/jasa-rehabilitasi-beton.html)
// ============================================================
// 🧠 STATUS: PERLU DIBUAT
// 🧠 TYPE: VARIANT (parent: Jasa Rehabilitasi Beton)
// 📌 SARAN: Buat halaman untuk jasa perbaikan beton mengelupas
// Breadcrumb: Home > Jasa Perawatan & Perbaikan Bangunan > Jasa Perbaikan Struktur > Jasa Rehabilitasi Beton > Jasa Perbaikan Beton Mengelupas
// ============================================================

const urlMappingJasaPerbaikanBetonMengelupas = {
  // "https://www.betonjayareadymix.com/p/jasa-perbaikan-beton-mengelupas.html": "Jasa Perbaikan Beton Mengelupas",  // TYPE: VARIANT
  // "https://www.betonjayareadymix.com/2019/08/harga-perbaikan-beton-mengelupas.html": "Harga Perbaikan Beton Mengelupas",  // TYPE: MONEY_CHILD
  // "https://www.betonjayareadymix.com/2019/08/borongan-perbaikan-beton-mengelupas.html": "Borongan Perbaikan Beton Mengelupas"  // TYPE: MONEY_CHILD
};

// ============================================================
// SUB JASA PERBAIKAN BETON KEROPOS
// Parent: Jasa Rehabilitasi Beton (/p/jasa-rehabilitasi-beton.html)
// ============================================================
// 🧠 STATUS: PERLU DIBUAT
// 🧠 TYPE: VARIANT (parent: Jasa Rehabilitasi Beton)
// 📌 SARAN: Buat halaman untuk jasa perbaikan beton keropos
// Breadcrumb: Home > Jasa Perawatan & Perbaikan Bangunan > Jasa Perbaikan Struktur > Jasa Rehabilitasi Beton > Jasa Perbaikan Beton Keropos
// ============================================================

const urlMappingJasaPerbaikanBetonKeropos = {
  // "https://www.betonjayareadymix.com/p/jasa-perbaikan-beton-keropos.html": "Jasa Perbaikan Beton Keropos",  // TYPE: VARIANT
  // "https://www.betonjayareadymix.com/2019/08/harga-perbaikan-beton-keropos.html": "Harga Perbaikan Beton Keropos",  // TYPE: MONEY_CHILD
  // "https://www.betonjayareadymix.com/2019/08/borongan-perbaikan-beton-keropos.html": "Borongan Perbaikan Beton Keropos"  // TYPE: MONEY_CHILD
};

// ============================================================
// SUB JASA PERBAIKAN BETON RETAK
// Parent: Jasa Rehabilitasi Beton (/p/jasa-rehabilitasi-beton.html)
// ============================================================
// 🧠 STATUS: PERLU DIBUAT
// 🧠 TYPE: VARIANT (parent: Jasa Rehabilitasi Beton)
// 📌 SARAN: Buat halaman untuk jasa perbaikan beton retak
// Breadcrumb: Home > Jasa Perawatan & Perbaikan Bangunan > Jasa Perbaikan Struktur > Jasa Rehabilitasi Beton > Jasa Perbaikan Beton Retak
// ============================================================

const urlMappingJasaPerbaikanBetonRetak = {
  // "https://www.betonjayareadymix.com/p/jasa-perbaikan-beton-retak.html": "Jasa Perbaikan Beton Retak",  // TYPE: VARIANT
  // "https://www.betonjayareadymix.com/2019/08/harga-perbaikan-beton-retak.html": "Harga Perbaikan Beton Retak",  // TYPE: MONEY_CHILD
  // "https://www.betonjayareadymix.com/2019/08/borongan-perbaikan-beton-retak.html": "Borongan Perbaikan Beton Retak",  // TYPE: MONEY_CHILD
  // "https://www.betonjayareadymix.com/p/jasa-injeksi-beton-retak.html": "Jasa Injeksi Beton Retak"  // TYPE: VARIANT (CATATAN: SUDAH ADA di urlMappingRehabilitasiBeton)
};

// ============================================================
// SUB JASA CHIPPING BETON (AKTIF)
// Parent: Jasa Rehabilitasi Beton (/p/jasa-rehabilitasi-beton.html)
// ============================================================

const urlMappingJasaChippingBeton = {
  // ============================================================
  // [MONEY_MASTER] - HARGA JASA CHIPPING BETON
  // 🧠 TYPE: MONEY_MASTER (WAJIB tampil, parent: Jasa Rehabilitasi Beton)
  // 🧠 STATUS: AKTIF - konten lengkap
  // Breadcrumb: Home > Jasa Perawatan & Perbaikan Bangunan > Jasa Perbaikan Struktur > Jasa Rehabilitasi Beton > Harga Jasa Chipping Beton
  // ============================================================
  "https://www.betonjayareadymix.com/2019/06/harga-jasa-chipping-beton.html": "Harga Jasa Chipping Beton",  // TYPE: MONEY_MASTER
  
  // ============================================================
  // [MONEY_MASTER] - HARGA CHIPPING BETON PER M3
  // ============================================================
  "https://www.betonjayareadymix.com/2019/06/harga-chipping-beton-per-m3.html": "Harga Chipping Beton Per M3",  // TYPE: MONEY_MASTER
  
  // ============================================================
  // [MONEY_MASTER] - HARGA CHIPPING BETON MURAH
  // ============================================================
  "https://www.betonjayareadymix.com/2019/06/harga-chipping-beton-murah.html": "Harga Chipping Beton Murah",  // TYPE: MONEY_MASTER
  
  // ============================================================
  // [MONEY_MASTER] - HARGA CHIPPING BETON PER M2
  // ============================================================
  "https://www.betonjayareadymix.com/2019/06/harga-chipping-beton-per-m2.html": "Harga Chipping Beton Per M2",  // TYPE: MONEY_MASTER
  
  // ============================================================
  // [MONEY_MASTER] - HARGA PEKERJAAN CHIPPING BETON
  // ============================================================
  "https://www.betonjayareadymix.com/2019/06/harga-pekerjaan-chipping-beton.html": "Harga Pekerjaan Chipping Beton"  // TYPE: MONEY_MASTER
};

// ============================================================
// SUB JASA BETON KARBONASI
// Parent: Jasa Rehabilitasi Beton (/p/jasa-rehabilitasi-beton.html)
// ============================================================
// 🧠 SEO NOTE: Beton karbonasi adalah kerusakan beton akibat reaksi CO2 dengan kalsium hidroksida.
// ============================================================

const urlMappingJasaBetonKarbonasi = {
  // ============================================================
  // SARAN ITEM BARU - JASA BETON KARBONASI
  // 🧠 TYPE: VARIANT (parent: Jasa Rehabilitasi Beton)
  // Status: [VARIANT] - PERLU DIBUAT (halaman PAGE baru)
  // Breadcrumb: Home > Jasa Perawatan & Perbaikan Bangunan > Jasa Perbaikan Struktur > Jasa Rehabilitasi Beton > Jasa Beton Karbonasi
  // ============================================================
  // "https://www.betonjayareadymix.com/p/jasa-beton-karbonasi.html": "Jasa Beton Karbonasi",  // TYPE: VARIANT
  
  // ============================================================
  // SARAN ITEM BARU - HARGA PERBAIKAN BETON KARBONASI
  // 🧠 TYPE: MONEY_CHILD (parent: Jasa Beton Karbonasi)
  // Status: [MONEY_CHILD] - PERLU DIBUAT (halaman POST baru)
  // Breadcrumb: Home > ... > Jasa Rehabilitasi Beton > Jasa Beton Karbonasi > Harga Perbaikan Beton Karbonasi
  // ============================================================
  // "https://www.betonjayareadymix.com/2019/08/harga-perbaikan-beton-karbonasi.html": "Harga Perbaikan Beton Karbonasi",  // TYPE: MONEY_CHILD
  
  // ============================================================
  // SARAN ITEM BARU - JASA PERBAIKAN BETON KEROPOS (AKIBAT KARBONASI)
  // 🧠 TYPE: MONEY_CHILD (parent: Jasa Beton Karbonasi)
  // Status: [MONEY_CHILD] - PERLU DIBUAT
  // Breadcrumb: Home > ... > Jasa Rehabilitasi Beton > Jasa Beton Karbonasi > Jasa Perbaikan Beton Keropos
  // ============================================================
  // "https://www.betonjayareadymix.com/2019/08/jasa-perbaikan-beton-keropos.html": "Jasa Perbaikan Beton Keropos"  // TYPE: MONEY_CHILD
};

// ============================================================
// SUB JASA PERKUATAN STRUKTUR DENGAN CFRP
// Parent: Jasa Rehabilitasi Beton (/p/jasa-rehabilitasi-beton.html)
// ============================================================
// 🧠 SEO NOTE: CFRP (Carbon Fiber Reinforced Polymer) adalah metode perkuatan struktur dengan serat karbon.
// ============================================================

const urlMappingJasaPerkuatanStrukturdenganCFRP = {
  // ============================================================
  // SARAN ITEM BARU - JASA PERKUATAN STRUKTUR CFRP
  // 🧠 TYPE: VARIANT (parent: Jasa Rehabilitasi Beton)
  // Status: [VARIANT] - PERLU DIBUAT (halaman PAGE baru)
  // Breadcrumb: Home > Jasa Perawatan & Perbaikan Bangunan > Jasa Perbaikan Struktur > Jasa Rehabilitasi Beton > Jasa Perkuatan Struktur CFRP
  // ============================================================
  // "https://www.betonjayareadymix.com/p/jasa-perkuatan-struktur-cfrp.html": "Jasa Perkuatan Struktur CFRP",  // TYPE: VARIANT
  
  // ============================================================
  // SARAN ITEM BARU - JASA PELAPISAN CFRP (WRAPPING)
  // 🧠 TYPE: MONEY_MASTER (parent: Jasa Perkuatan Struktur CFRP)
  // Status: [MONEY_MASTER] - PERLU DIBUAT
  // Breadcrumb: Home > ... > Jasa Rehabilitasi Beton > Jasa Perkuatan Struktur CFRP > Jasa Pelapisan CFRP
  // ============================================================
  // "https://www.betonjayareadymix.com/2019/08/jasa-pelapisan-cfrp.html": "Jasa Pelapisan CFRP",  // TYPE: MONEY_MASTER
  
  // ============================================================
  // SARAN ITEM BARU - HARGA PERKUATAN CFRP PER M2
  // 🧠 TYPE: MONEY_MASTER (parent: Jasa Perkuatan Struktur CFRP)
  // Status: [MONEY_MASTER] - PERLU DIBUAT
  // Breadcrumb: Home > ... > Jasa Rehabilitasi Beton > Jasa Perkuatan Struktur CFRP > Harga Perkuatan CFRP per M2
  // ============================================================
  // "https://www.betonjayareadymix.com/2019/08/harga-perkuatan-cfrp-per-m2.html": "Harga Perkuatan CFRP per M2",  // TYPE: MONEY_MASTER
  
  // ============================================================
  // SARAN ITEM BARU - JASA CARBON FIBER WRAPPING KOLOM & BALOK
  // 🧠 TYPE: MONEY_MASTER (parent: Jasa Perkuatan Struktur CFRP)
  // Status: [MONEY_MASTER] - ⚠️ 404 - PERLU DIPERBAIKI
  // Breadcrumb: Home > ... > Jasa Rehabilitasi Beton > Jasa Perkuatan Struktur CFRP > Jasa Carbon Fiber Wrapping
  // ============================================================
  // "https://www.betonjayareadymix.com/2019/08/jasa-carbon-fiber-wrapping.html": "Jasa Carbon Fiber Wrapping"  // TYPE: MONEY_MASTER (⚠️ 404 - URL tidak ditemukan)
};
//AKHIR SUB PerbaikanStrukturTeknikBeton


// ============================================================
// JASA RENOVASI BANGUNAN (SUB2)
// Parent: Jasa Renovasi (/p/jasa-renovasi.html)
// ============================================================

// ============================================================
// SUB JASA RENOVASI RUMAH (VARIANT)
// 🧠 TYPE: [VARIANT] - halaman dengan konten lengkap
// 🧠 SEO NOTE: Halaman ini mencakup harga renovasi rumah per lokasi
// Breadcrumb: Home > Jasa Renovasi > Jasa Renovasi Rumah > Harga Jasa Renovasi Rumah [Kota]
// ============================================================

const urlMappingJasaRenovasiPerbaikanRumah = {
  // ============================================================
  // [MONEY_CHILD] - HARGA RENOVASI PER LOKASI (SURABAYA)
  // 🧠 TYPE: MONEY_CHILD (WAJIB tampil, spesifik lokasi)
  // 🧠 STATUS: ✅ AKTIF (konten tersedia)
  // Breadcrumb: Home > Jasa Renovasi > Jasa Renovasi Rumah > Harga Jasa Renovasi Rumah Surabaya
  // ============================================================
  "https://www.betonjayareadymix.com/2019/07/harga-jasa-renovasi-rumah-surabaya.html": "Harga Jasa Renovasi Rumah Surabaya",  // TYPE: MONEY_CHILD
  
  // ============================================================
  // [MONEY_CHILD] - HARGA RENOVASI PER LOKASI (JOGJA)
  // ============================================================
  "https://www.betonjayareadymix.com/2019/07/harga-jasa-renovasi-rumah-jogja.html": "Harga Jasa Renovasi Rumah Jogja",  // TYPE: MONEY_CHILD
  
  // ============================================================
  // [MONEY_CHILD] - HARGA RENOVASI PER LOKASI (SEMARANG)
  // 🧠 STATUS: ⚠️ PERLU DICEK (URL pendek kemungkinan 404)
  // ============================================================
  "https://www.betonjayareadymix.com/2019/07/harga-jasa-renovasi-rumah-semarang.html": "Harga Jasa Renovasi Rumah Semarang",  // TYPE: MONEY_CHILD
  
  // ============================================================
  // [MONEY_CHILD] - HARGA RENOVASI PER LOKASI (TANGERANG)
  // ============================================================
  "https://www.betonjayareadymix.com/2019/07/harga-jasa-renovasi-rumah-tangerang.html": "Harga Jasa Renovasi Rumah Tangerang",  // TYPE: MONEY_CHILD
  
  // ============================================================
  // [MONEY_CHILD] - HARGA RENOVASI PER LOKASI (DEPOK)
  // ============================================================
  "https://www.betonjayareadymix.com/2019/07/harga-jasa-renovasi-rumah-depok.html": "Harga Jasa Renovasi Rumah Depok",  // TYPE: MONEY_CHILD
  
  // ============================================================
  // [MONEY_CHILD] - HARGA RENOVASI PER LOKASI (BEKASI)
  // ============================================================
  "https://www.betonjayareadymix.com/2019/07/harga-jasa-renovasi-rumah-bekasi.html": "Harga Jasa Renovasi Rumah Bekasi",  // TYPE: MONEY_CHILD
  
  // ============================================================
  // [MONEY_CHILD] - HARGA RENOVASI PER LOKASI (BOGOR)
  // ============================================================
  "https://www.betonjayareadymix.com/2019/07/harga-jasa-renovasi-rumah-bogor.html": "Harga Jasa Renovasi Rumah Bogor",  // TYPE: MONEY_CHILD
  
  // ============================================================
  // [MONEY_CHILD] - HARGA RENOVASI PER LOKASI (JAKARTA)
  // ============================================================
  "https://www.betonjayareadymix.com/2019/07/harga-jasa-renovasi-rumah-jakarta.html": "Harga Jasa Renovasi Rumah Jakarta",  // TYPE: MONEY_CHILD
  
  // ============================================================
  // [MONEY_MASTER] - HARGA RENOVASI RUMAH SUBSIDI
  // 🧠 TYPE: MONEY_MASTER (halaman umum, bukan spesifik lokasi)
  // ============================================================
  "https://www.betonjayareadymix.com/2019/06/harga-jasa-renovasi-rumah-subsidi.html": "Harga Jasa Renovasi Rumah Subsidi",  // TYPE: MONEY_MASTER
  
  // ============================================================
  // [MONEY_MASTER] - HARGA RENOVASI RUMAH MURAH
  // ============================================================
  "https://www.betonjayareadymix.com/2019/06/harga-jasa-renovasi-rumah-murah.html": "Harga Jasa Renovasi Rumah Murah",  // TYPE: MONEY_MASTER
  
  // ============================================================
  // [MONEY_MASTER] - HARGA RENOVASI RUMAH TERDEKAT
  // ============================================================
  "https://www.betonjayareadymix.com/2019/06/harga-jasa-renovasi-rumah-terdekat.html": "Harga Jasa Renovasi Rumah Terdekat"  // TYPE: MONEY_MASTER
};

// ============================================================
// SUB JASA RENOVASI RUMAH MINIMALIS (VARIANT - POST)
// 🧠 TYPE: [VARIANT] untuk konten spesifik
// Parent: Jasa Renovasi Rumah
// Breadcrumb: Home > Jasa Renovasi > Jasa Renovasi Rumah > Renovasi Rumah Minimalis
// ============================================================

const urlMappingJasaRenovasiRumahMinimalis = {
  // ============================================================
  // SARAN ITEM BARU
  // 🧠 TYPE: MONEY_MASTER (harga spesifik per tipe)
  // 🧠 STATUS: PERLU DIBUAT
  // 📌 Contoh: "https://www.betonjayareadymix.com/2019/08/harga-renovasi-rumah-minimalis.html": "Harga Renovasi Rumah Minimalis",  // TYPE: MONEY_MASTER
  // ============================================================
};

// ============================================================
// SUB JASA RENOVASI RUMAH TYPE 36 (VARIANT - POST)
// ============================================================

const urlMappingJasaRenovasiRumahType36 = {
  // ============================================================
  // SARAN ITEM BARU
  // 🧠 TYPE: MONEY_MASTER (harga spesifik per type)
  // 🧠 STATUS: PERLU DIBUAT
  // 📌 Contoh: "https://www.betonjayareadymix.com/2019/08/harga-renovasi-rumah-type-36.html": "Harga Renovasi Rumah Type 36",  // TYPE: MONEY_MASTER
  // ============================================================
};

// ============================================================
// SUB JASA RENOVASI RUMAH TYPE 45 (VARIANT - POST)
// ============================================================

const urlMappingJasaRenovasiRumahType45 = {
  // ============================================================
  // SARAN ITEM BARU
  // 🧠 TYPE: MONEY_MASTER
  // 🧠 STATUS: PERLU DIBUAT
  // 📌 Contoh: "https://www.betonjayareadymix.com/2019/08/harga-renovasi-rumah-type-45.html": "Harga Renovasi Rumah Type 45",  // TYPE: MONEY_MASTER
  // ============================================================
};

// ============================================================
// SUB JASA RENOVASI RUMAH 2 LANTAI (VARIANT - POST)
// ============================================================

const urlMappingJasaRenovasiRumah2Lantai = {
  // ============================================================
  // SARAN ITEM BARU
  // 🧠 TYPE: MONEY_MASTER
  // 🧠 STATUS: PERLU DIBUAT
  // 📌 Contoh: "https://www.betonjayareadymix.com/2019/08/harga-renovasi-rumah-2-lantai.html": "Harga Renovasi Rumah 2 Lantai",  // TYPE: MONEY_MASTER
  // ============================================================
};

// ============================================================
// SUB JASA RENOVASI PERBAIKAN ATAP RUMAH (VARIANT - POST)
// ============================================================

const urlMappingJasaRenovasiPerbaikanAtapRumahPost = {
  // ============================================================
  // SARAN ITEM BARU
  // 🧠 TYPE: MONEY_MASTER
  // 🧠 STATUS: PERLU DIBUAT
  // 📌 Contoh: "https://www.betonjayareadymix.com/2019/08/harga-renovasi-atap-rumah.html": "Harga Renovasi Atap Rumah",  // TYPE: MONEY_MASTER
  // ============================================================
};

// ============================================================
// SUB JASA RENOVASI DINDING RUMAH (VARIANT - POST)
// ============================================================

const urlMappingJasaRenovasiDindingRumah = {
  // ============================================================
  // SARAN ITEM BARU
  // 🧠 TYPE: MONEY_MASTER
  // 🧠 STATUS: PERLU DIBUAT
  // 📌 Contoh: "https://www.betonjayareadymix.com/2019/08/harga-renovasi-dinding-rumah.html": "Harga Renovasi Dinding Rumah",  // TYPE: MONEY_MASTER
  // ============================================================
};

// ============================================================
// SUB JASA PERBAIKAN STRUKTUR RUMAH (VARIANT - POST)
// ============================================================

const urlMappingJasaPerbaikanStrukturRumah = {
  // ============================================================
  // SARAN ITEM BARU
  // 🧠 TYPE: MONEY_MASTER
  // 🧠 STATUS: PERLU DIBUAT
  // 📌 Contoh: "https://www.betonjayareadymix.com/2019/08/harga-perbaikan-struktur-rumah.html": "Harga Perbaikan Struktur Rumah",  // TYPE: MONEY_MASTER
  // ============================================================
};

// ============================================================
// SUB JASA RENOVASI KOSMETIK RUMAH (VARIANT - POST)
// ============================================================

const urlMappingJasaRenovasiKosmetikRumah = {
  // ============================================================
  // SARAN ITEM BARU
  // 🧠 TYPE: MONEY_MASTER
  // 🧠 STATUS: PERLU DIBUAT
  // 📌 Contoh: "https://www.betonjayareadymix.com/2019/08/harga-renovasi-kosmetik-rumah.html": "Harga Renovasi Kosmetik Rumah",  // TYPE: MONEY_MASTER
  // ============================================================
};

// ============================================================
// SUB JASA RENOVASI RUMAH TUMBUH (VARIANT - POST)
// ============================================================

const urlMappingJasaRenovasiRumahTumbuh = {
  // ============================================================
  // SARAN ITEM BARU
  // 🧠 TYPE: MONEY_MASTER
  // 🧠 STATUS: PERLU DIBUAT (URL saat ini 404)
  // 📌 Contoh: "https://www.betonjayareadymix.com/2019/08/harga-renovasi-rumah-tumbuh.html": "Harga Renovasi Rumah Tumbuh",  // TYPE: MONEY_MASTER
  // ============================================================
};

// ============================================================
// FUNGSI GENERATE BREADCRUMB - VERSI FINAL
// UNTUK SEMUA PILLAR (PRODUK, MATERIAL, JASA, INTERIOR, DLL)
// MAX_LEVEL = 4 (TERMASUK HOME)
// SKIP LEVEL BEKERJA UNTUK PILLAR & SUB2
// ============================================================

function generateBreadcrumbForMapping(mappingObj, currentUrl, breadcrumbItems = [], pillarType = 'JASA_KONSTRUKSI') {
    
    const MAX_LEVEL = 4;
    const DOMAIN = 'https://www.betonjayareadymix.com';
    
    // ============================================================
    // 1. VALIDASI PILLAR TYPE
    // ============================================================
    const validPillarTypes = ['PRODUK_KONSTRUKSI', 'MATERIAL_KONSTRUKSI', 'JASA_KONSTRUKSI', 
                               'PRODUK_INTERIOR', 'JASA_DESAIN_INTERIOR'];
    if (!validPillarTypes.includes(pillarType)) {
        console.error(`❌ ERROR: "${pillarType}" BUKAN PILLAR TYPE yang valid!`);
        console.error(`   Gunakan salah satu dari: ${validPillarTypes.join(', ')}`);
        return null;
    }
    
    const pageTitle = mappingObj[currentUrl];
    if (!pageTitle) {
        console.error(`❌ ERROR: URL "${currentUrl}" tidak ditemukan di mapping`);
        return null;
    }
    
    // ============================================================
    // 2. KUMPULKAN SEMUA NAMA HALAMAN DARI MAPPING (UNTUK REFERENSI)
    // ============================================================
    const knownPages = [];
    for (const [url, name] of Object.entries(mappingObj)) {
        if (name && typeof name === 'string') {
            knownPages.push(name.toLowerCase());
        }
    }
    
    // ============================================================
    // 3. DETEKSI TYPE OTOMATIS
    // ============================================================
    function detectPageType(pageName, position, totalLevels) {
        const lowerName = pageName.toLowerCase();
        const parts = pageName.split(' ');
        const lastWord = parts[parts.length - 1].toLowerCase();
        const firstWord = parts[0].toLowerCase();
        const wordCount = parts.length;
        
        // PILLAR: posisi pertama
        if (position === 0) return 'PILLAR';
        
        // MONEY_LEADGEN
        if (lowerName.startsWith('konsultasi')) return 'MONEY_LEADGEN';
        
        // MONEY_MASTER (deteksi transaksi)
        const transactionWords = ['harga', 'sewa', 'jual', 'beli', 'pesan', 'booking', 'order', 'rental',
            'biaya', 'tarif', 'rate', 'cost', 'price', 'fee', 'charge', 'promo', 'diskon', 'obral',
            'gratis', 'voucher', 'cashback', 'cicilan', 'kredit', 'dp', 'angsuran', 'quote', 'penawaran', 'estimasi'];
        
        for (const word of transactionWords) {
            if (lowerName.startsWith(word + ' ') || lowerName.includes(' ' + word + ' ') || lowerName.endsWith(' ' + word)) {
                return 'MONEY_MASTER';
            }
        }
        
        // SUB1 (deteksi panduan)
        const guideWords = ['panduan', 'cara', 'tips', 'tutorial', 'langkah', 'petunjuk', 'pedoman', 'instruksi',
            'guide', 'how to', 'step by step', 'strategi', 'metode', 'teknik', 'rahasia', 'kunci sukses',
            'wajib tahu', 'perlu diketahui', 'edukasi', 'belajar', 'mempelajari', 'pemahaman', 'solusi', 'jawaban'];
        
        for (const word of guideWords) {
            if (lowerName.startsWith(word + ' ') || lowerName.includes(' ' + word + ' ')) {
                return 'SUB1';
            }
        }
        
        // VARIANT (deteksi angka atau kata kunci)
        if (/\d/.test(lowerName)) return 'VARIANT';
        
        const variantWords = ['tipe', 'type', 'ukuran', 'model', 'varian', 'warna', 'bentuk', 'seri', 'versi',
            'grade', 'kelas', 'standar', 'jenis', 'macam', 'ragam', 'kategori', 'spesifikasi', 'detail', 'rinci',
            'kapasitas', 'volume', 'berat', 'panjang', 'lebar', 'tinggi', 'tebal', 'diameter', 'radius', 'luas',
            'bahan', 'material', 'komposisi', 'kualitas', 'mutu', 'kode', 'plus', 'minus', 'kelebihan', 'kekurangan',
            'baru', 'lama', 'bekas', 'second', 'original', 'kw', 'putih', 'hitam', 'merah', 'biru', 'hijau',
            'kecil', 'besar', 'sedang', 'mini', 'maxi', 'jumbo', 'extra', 'super'];
        
        for (const word of variantWords) {
            if (lowerName.includes(' ' + word + ' ') || lowerName.endsWith(' ' + word)) {
                return 'VARIANT';
            }
        }
        
        // MONEY_CHILD (deteksi lokasi)
        function isLikelyLocation(word) {
            if (word.length < 3 || word.length > 25) return false;
            if (!/^[a-zA-Z]+$/.test(word)) return false;
            if (word === firstWord) return false;
            
            const notLocationWords = ['mini', 'maxi', 'super', 'extra', 'plus', 'pro', 'max', 'ultra',
                'baru', 'lama', 'bekas', 'second', 'original', 'kw', 'grade', 'murah', 'mahal', 'hemat',
                'premium', 'standar', 'ekonomis', 'kecil', 'besar', 'sedang', 'panjang', 'pendek', 'tebal', 'tipis',
                'putih', 'hitam', 'merah', 'biru', 'hijau', 'kuning', 'ungu', 'abu', 'coklat'];
            if (notLocationWords.includes(word)) return false;
            
            const isKnownProduct = knownPages.some(known => known === word || (known.includes(word) && word.length > 3));
            if (isKnownProduct) return false;
            
            if (word.length >= 4 && word.length <= 12) return true;
            if (/[aiueo]$/.test(word) && word.length >= 4) return true;
            
            const locationPatterns = ['ang', 'ung', 'eng', 'ong', 'an', 'in', 'un', 'en', 
                'ap', 'ip', 'op', 'ar', 'ur', 'er', 'or', 'karta', 'jaya', 'pura', 'sari', 'mulya', 'agung', 'asih', 'ayem'];
            for (const pattern of locationPatterns) {
                if (word.endsWith(pattern) && word.length >= 4) return true;
            }
            
            if (word.length >= 5 && /[aiueo].*[aiueo]/.test(word)) return true;
            return false;
        }
        
        if (wordCount >= 2 && isLikelyLocation(lastWord)) return 'MONEY_CHILD';
        
        return 'SUB2';
    }
    
    // ============================================================
    // 4. FUNGSI BANTUAN
    // ============================================================
    function generateIdFromName(name) {
        return name.replace(/[^a-zA-Z0-9]/g, '') + 'Post';
    }
    
    // ============================================================
    // 5. BANGUN LEVELS DARI ARRAY OBJECT (NAMA + URL)
    // ============================================================
    const allLevels = [];
    for (let i = 0; i < breadcrumbItems.length; i++) {
        const item = breadcrumbItems[i];
        const name = typeof item === 'string' ? item : item.name;
        const url = typeof item === 'string' ? null : item.url;
        
        allLevels.push({
            name: name,
            url: url,
            type: detectPageType(name, i, breadcrumbItems.length),
            id: generateIdFromName(name),
            position: i
        });
    }
    
    // ============================================================
    // 6. VALIDASI & FALLBACK URL
    // ============================================================
    for (const level of allLevels) {
        if (!level.url) {
            let foundUrl = null;
            for (const [url, name] of Object.entries(mappingObj)) {
                if (name === level.name) {
                    foundUrl = url.startsWith('http') ? url : DOMAIN + url;
                    break;
                }
            }
            if (!foundUrl) {
                const slug = level.name.toLowerCase().replace(/ /g, '-');
                foundUrl = `${DOMAIN}/p/${slug}.html`;
            }
            level.url = foundUrl;
        } else if (!level.url.startsWith('http')) {
            level.url = DOMAIN + level.url;
        }
    }
    
    // ============================================================
    // 7. TENTUKAN LEVEL YANG AKAN DITAMPILKAN (MAX 4 LEVEL)
    // ============================================================
    const selectedLevels = [];
    
    // Level 1: Home (WAJIB)
    selectedLevels.push({ name: 'BJR', url: DOMAIN, isHome: true });
    
    // Hitung slot tersisa (MAX_LEVEL - 1 untuk home - 1 untuk halaman saat ini)
    let remainingSlots = MAX_LEVEL - 2;
    
    console.log(`📊 ========================================`);
    console.log(`📊 Breadcrumb Generator - SEO Tercanggih`);
    console.log(`📊 Max level: ${MAX_LEVEL}, slot untuk parent: ${remainingSlots}`);
    console.log(`📊 Breadcrumb items: ${allLevels.map(l => l.name).join(' → ')}`);
    console.log(`📊 ========================================`);
    
    // Parent terdekat (level terakhir) - WAJIB tampil
    let parentTerdekat = null;
    if (allLevels.length > 0) {
        parentTerdekat = allLevels[allLevels.length - 1];
        selectedLevels.push(parentTerdekat);
        remainingSlots--;
        console.log(`✅ WAJIB: "${parentTerdekat.name}" (${parentTerdekat.type}) - sisa slot: ${remainingSlots}`);
    }
    
    // Level lainnya (dari awal sampai sebelum parent terdekat)
    const otherLevels = [...allLevels.slice(0, allLevels.length - 1)].reverse();
    const canSkipTypes = ['PILLAR', 'SUB2'];
    
    for (const level of otherLevels) {
        if (remainingSlots <= 0) {
            console.log(`📌 SKIP: "${level.name}" (${level.type}) - tidak ada slot tersisa`);
            continue;
        }
        
        if (canSkipTypes.includes(level.type)) {
            console.log(`📌 SKIP: "${level.name}" (${level.type}) - type boleh skip`);
            continue;
        }
        
        selectedLevels.splice(1, 0, level);
        remainingSlots--;
        console.log(`✅ TAMBAH: "${level.name}" (${level.type}) - sisa slot: ${remainingSlots}`);
    }
    
    // Halaman saat ini (WAJIB)
    const currentFullUrl = currentUrl.startsWith('http') ? currentUrl : DOMAIN + currentUrl;
    selectedLevels.push({
        name: pageTitle,
        url: currentFullUrl,
        isCurrent: true
    });
    
    // Update position
    for (let i = 0; i < selectedLevels.length; i++) {
        selectedLevels[i].position = i + 1;
    }
    
    console.log(`✅ FINAL (${selectedLevels.length} level): ${selectedLevels.map(l => l.name).join(' → ')}`);
    
    // ============================================================
    // 8. GENERATE HTML BREADCRUMB
    // ============================================================
    let breadcrumbHtml = `<div class="breadcrumbs">\n<span>\n`;
    breadcrumbHtml += `<a href="${DOMAIN}/" itemprop="item" title="Beton Jaya Readymix">`;
    breadcrumbHtml += `<meta content="1" itemprop="position">`;
    breadcrumbHtml += `<span itemprop="name">BJR</span></a>\n`;
    breadcrumbHtml += `</span>\n &nbsp;›&nbsp;\n\n`;
    breadcrumbHtml += `<span>\n<div id="breadcrumbContainer" style="display: inline;">\n`;
    
    for (let i = 1; i < selectedLevels.length; i++) {
        const level = selectedLevels[i];
        const isLast = (i === selectedLevels.length - 1);
        
        if (!isLast) {
            breadcrumbHtml += `<a href="${level.url}" id="${level.id}" title="${level.name.toUpperCase()}" style="visibility: visible;">`;
            breadcrumbHtml += `<span id="${level.id}Name">${level.name}</span>&nbsp;›&nbsp;\n`;
            breadcrumbHtml += `</a>\n`;
        } else {
            breadcrumbHtml += `<span id="pageNameBreadcrumb">${level.name}</span>\n`;
        }
    }
    
    breadcrumbHtml += `</div>\n</span>\n</div>`;
    
    // ============================================================
    // 9. GENERATE JSON-LD SCHEMA
    // ============================================================
    const jsonLdItems = [];
    jsonLdItems.push({ "@type": "ListItem", "position": 1, "name": "Beton Jaya Readymix", "item": DOMAIN });
    
    for (let i = 1; i < selectedLevels.length; i++) {
        jsonLdItems.push({
            "@type": "ListItem",
            "position": i + 1,
            "name": selectedLevels[i].name,
            "item": selectedLevels[i].url
        });
    }
    
    // ============================================================
    // 10. HAPUS BREADCRUMB LAMA & INJECT YANG BARU
    // ============================================================
    // Hapus semua breadcrumb lama (manual)
    const oldBreadcrumbs = document.querySelectorAll('.breadcrumbs, .breadcrumb-nav, [aria-label="Breadcrumb"]');
    oldBreadcrumbs.forEach(el => el.remove());
    
    // Hapus JSON-LD lama
    const oldJsonLd = document.querySelector('script[data-breadcrumb="true"]');
    if (oldJsonLd) oldJsonLd.remove();
    
    // Inject HTML breadcrumb baru
    const mainContent = document.querySelector('main, article, .content, #main-content, .post-content');
    if (mainContent?.firstChild) {
        mainContent.insertAdjacentHTML('afterbegin', breadcrumbHtml);
    } else {
        document.body.insertAdjacentHTML('afterbegin', breadcrumbHtml);
    }
    
    // Inject JSON-LD baru
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-breadcrumb', 'true');
    script.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": jsonLdItems
    });
    document.head.appendChild(script);
    
    console.log(`✅ Breadcrumb injected ke DOM`);
    return breadcrumbHtml;
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
		urlMappingJasaPerbaikanGedungBertingkat,
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

