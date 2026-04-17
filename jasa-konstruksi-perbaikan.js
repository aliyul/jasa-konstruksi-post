// ============================================================
// JASA PERBAIKAN STRUKTUR (SUB2) - LENGKAP
// ============================================================
// 🧠 SEO NOTE: Semua halaman di bawah Jasa Perbaikan Struktur
// Parent: Jasa Perawatan & Perbaikan Bangunan (/p/jasa-perawatan-perbaikan-bangunan.html)
// ============================================================

const urlMappingPerbaikanStruktur = {
  // ============================================================
  // [VARIANT] - JASA PERBAIKAN STRUKTUR RUMAH
  // 🧠 TYPE: VARIANT (WAJIB tampil, parent: SUB2)
  // Breadcrumb: Home > Jasa Perawatan & Perbaikan Bangunan > Jasa Perbaikan Struktur > Jasa Perbaikan Struktur Rumah
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-struktur-rumah.html": "Jasa Perbaikan Struktur Rumah",  // TYPE: VARIANT

  // ============================================================
  // [VARIANT] - JASA PERBAIKAN STRUKTUR BANGUNAN TUA
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-struktur-bangunan-tua.html": "Jasa Perbaikan Struktur Bangunan Tua",  // TYPE: VARIANT

  // ============================================================
  // [VARIANT] - JASA PERBAIKAN GEDUNG BERTINGKAT
  // ⚠️ PERLU DICEK: URL 404 (tidak ditemukan)
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-gedung-bertingkat.html": "Jasa Perbaikan Gedung Bertingkat",  // TYPE: VARIANT

  // ============================================================
  // [VARIANT] - JASA PERBAIKAN STRUKTUR BANGUNAN MIRING
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-struktur-bangunan-miring.html": "Jasa Perbaikan Struktur Bangunan Miring",  // TYPE: VARIANT

  // ============================================================
  // [VARIANT] - JASA PERBAIKAN STRUKTUR BETON
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-struktur-beton.html": "Jasa Perbaikan Struktur Beton",  // TYPE: VARIANT

  // ============================================================
  // [VARIANT] - JASA PERBAIKAN STRUKTUR KOLOM BALOK
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-struktur-kolom-balok.html": "Jasa Perbaikan Struktur Kolom Balok Beton",  // TYPE: VARIANT

  // ============================================================
  // [VARIANT] - JASA PERBAIKAN STRUKTUR PONDASI
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-struktur-pondasi.html": "Jasa Perbaikan Struktur Pondasi",  // TYPE: VARIANT

  // ============================================================
  // [VARIANT] - JASA PERBAIKAN STRUKTUR LANTAI BETON
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-struktur-lantai-beton.html": "Jasa Perbaikan Struktur Lantai Beton",  // TYPE: VARIANT

  // ============================================================
  // [VARIANT] - JASA PERBAIKAN STRUKTUR DINDING
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-struktur-dinding.html": "Jasa Perbaikan Struktur Dinding",  // TYPE: VARIANT

  // ============================================================
  // [VARIANT] - JASA PERBAIKAN STRUKTUR ATAP
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-struktur-atap.html": "Jasa Perbaikan Struktur Atap",  // TYPE: VARIANT

  // ============================================================
  // [VARIANT] - JASA REHABILITASI BETON
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-rehabilitasi-beton.html": "Jasa Rehabilitasi Beton"  // TYPE: VARIANT
};

// ============================================================
// 🟡 SARAN ITEM BARU (UNTUK DITAMBAHKAN)
// ============================================================

/*
📌 SARAN ITEM BARU - JASA PERBAIKAN STRUKTUR

| Nama Halaman | URL Saran | Type | Parent |
|--------------|-----------|------|--------|
| Jasa Perkuatan Struktur | /p/jasa-perkuatan-struktur.html | VARIANT | Jasa Perbaikan Struktur |
| Jasa Perbaikan Struktur Pasca Gempa | /p/jasa-perbaikan-struktur-pasca-gempa.html | VARIANT | Jasa Perbaikan Struktur |
| Jasa Perbaikan Struktur Gedung Komersial | /p/jasa-perbaikan-struktur-gedung-komersial.html | VARIANT | Jasa Perbaikan Struktur |
| Jasa Perbaikan Struktur Pabrik | /p/jasa-perbaikan-struktur-pabrik.html | VARIANT | Jasa Perbaikan Struktur |
| Harga Jasa Perbaikan Struktur | /2019/08/harga-perbaikan-struktur.html | MONEY_MASTER | Jasa Perbaikan Struktur |
| Konsultasi Perbaikan Struktur | /p/konsultasi-perbaikan-struktur.html | MONEY_LEADGEN | Jasa Perbaikan Struktur |
*/

// ============================================================
// 🔴 CATATAN - URL BERMASALAH
// ============================================================

/*
📌 URL YANG PERLU DIPERBAIKI:

| URL | Masalah | Solusi |
|-----|---------|--------|
| /p/jasa-perbaikan-gedung-bertingkat.html | 404 (tidak ditemukan) | Buat konten atau redirect |
| /p/jasa-renovasi-dinding-bangunan.html | Konten tidak sesuai (ini jasa renovasi, bukan perbaikan struktur) | Pindahkan ke mapping yang sesuai |

📌 YANG TIDAK DIMASUKKAN KE CONST (DI-COMMENT):
- "https://www.betonjayareadymix.com/p/jasa-perkuatan-struktur.html" → DI-COMMENT (belum ada konten)
- "https://www.betonjayareadymix.com/p/jasa-perbaikan-teknik-beton.html" → DI-COMMENT (belum ada konten)
- "https://www.betonjayareadymix.com/p/jasa-renovasi-dinding-bangunan.html" → TIDAK MASUK (ini adalah jasa renovasi, bukan perbaikan struktur)
*/
//Sub Perbaikan Struktur
/* hilang kan saja meenjadi satu kesatuan di JasaPerbaikanStrukturBeton
const urlMappingPerbaikanStrukturUmum = {
"https://www.betonjayareadymix.com/p/jasa-perbaikan-retak-struktur.html": "Jasa Perbaikan Retak Struktur",
  "https://www.betonjayareadymix.com/p/jasa-penguatan-struktur-bangunan.html": "Jasa Penguatan Struktur Bangunan",
  "https://www.betonjayareadymix.com/p/jasa-renovasi-struktur-beton.html": "Jasa Renovasi Struktur Beton",
  "https://www.betonjayareadymix.com/p/jasa-perkuatan-struktur-beton.html": "Jasa Perkuatan Struktur Beton",
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-retak-beton.html": "Jasa Perbaikan Retak Beton",
  //"https://www.betonjayareadymix.com/p/jasa-repair-struktur-beton.html": "Jasa Repair Struktur Beton",
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-struktur-beton.html": "Jasa Perbaikan Struktur Beton",
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-retak-struktur.html": "Jasa Perbaikan Retak Struktur"
	
};
*/

// ============================================================
// JASA PERBAIKAN GEDUNG BERTINGKAT
// Parent: Jasa Perbaikan Struktur (/p/jasa-perbaikan-struktur.html)
// ============================================================

const urlMappingPerbaikanStrukturGedungBertingkat = {
  // ============================================================
  // [VARIANT] - JASA PERBAIKAN GEDUNG BERTINGKAT
  // 🧠 TYPE: VARIANT (WAJIB tampil di breadcrumb)
  // Breadcrumb: Home > Jasa Perawatan & Perbaikan Bangunan > Jasa Perbaikan Struktur > Jasa Perbaikan Gedung Bertingkat
  // ============================================================
  // "https://www.betonjayareadymix.com/p/jasa-perbaikan-gedung-bertingkat.html": "Jasa Perbaikan Gedung Bertingkat",  // TYPE: VARIANT
  
  // ============================================================
  // [SUB-VARIANT] - JASA PERKUATAN GEDUNG BERTINGKAT
  // 🧠 TYPE: VARIANT (WAJIB tampil, parent: VARIANT di atas)
  // Breadcrumb: Home > Jasa Perawatan & Perbaikan Bangunan > Jasa Perbaikan Struktur > Jasa Perbaikan Gedung Bertingkat > Jasa Perkuatan Gedung Bertingkat
  // ============================================================
  // "https://www.betonjayareadymix.com/p/jasa-perkuatan-gedung-bertingkat.html": "Jasa Perkuatan Gedung Bertingkat",  // TYPE: VARIANT
  
  // ============================================================
  // [MONEY_MASTER] - HARGA PERBAIKAN GEDUNG BERTINGKAT
  // 🧠 TYPE: MONEY_MASTER (WAJIB tampil, parent: VARIANT)
  // Breadcrumb: Home > Jasa Perawatan & Perbaikan Bangunan > Jasa Perbaikan Struktur > Jasa Perbaikan Gedung Bertingkat > Harga Perbaikan Gedung Bertingkat
  // ============================================================
  // "https://www.betonjayareadymix.com/2019/08/harga-perbaikan-gedung-bertingkat.html": "Harga Perbaikan Gedung Bertingkat"  // TYPE: MONEY_MASTER
};

// ============================================================
// JASA PERBAIKAN STRUKTUR BANGUNAN TUA
// Parent: Jasa Perbaikan Struktur (/p/jasa-perbaikan-struktur.html)
// ============================================================

const urlMappingPerbaikanStrukturBangunanTua = {
  // ============================================================
  // [VARIANT] - JASA PERBAIKAN STRUKTUR BANGUNAN TUA
  // 🧠 TYPE: VARIANT (WAJIB tampil)
  // Breadcrumb: Home > Jasa Perawatan & Perbaikan Bangunan > Jasa Perbaikan Struktur > Jasa Perbaikan Struktur Bangunan Tua
  // ============================================================
  // "https://www.betonjayareadymix.com/p/jasa-perbaikan-struktur-bangunan-tua.html": "Jasa Perbaikan Struktur Bangunan Tua",  // TYPE: VARIANT
  
  // ============================================================
  // [SUB-VARIANT] - JASA RESTORASI BANGUNAN TUA
  // 🧠 TYPE: VARIANT (parent: VARIANT di atas)
  // Breadcrumb: Home > Jasa Perawatan & Perbaikan Bangunan > Jasa Perbaikan Struktur > Jasa Perbaikan Struktur Bangunan Tua > Jasa Restorasi Bangunan Tua
  // ============================================================
  // "https://www.betonjayareadymix.com/p/jasa-restorasi-bangunan-tua.html": "Jasa Restorasi Bangunan Tua",  // TYPE: VARIANT
  
  // ============================================================
  // [MONEY_MASTER] - HARGA PERBAIKAN BANGUNAN TUA
  // 🧠 TYPE: MONEY_MASTER (parent: VARIANT)
  // Breadcrumb: Home > Jasa Perawatan & Perbaikan Bangunan > Jasa Perbaikan Struktur > Jasa Perbaikan Struktur Bangunan Tua > Harga Perbaikan Bangunan Tua
  // ============================================================
  // "https://www.betonjayareadymix.com/2019/08/harga-perbaikan-bangunan-tua.html": "Harga Perbaikan Bangunan Tua"  // TYPE: MONEY_MASTER
};

// ============================================================
// JASA PERBAIKAN STRUKTUR BANGUNAN MIRING
// Parent: Jasa Perbaikan Struktur (/p/jasa-perbaikan-struktur.html)
// ============================================================

const urlMappingPerbaikanStrukturBangunanMiring = {
  // ============================================================
  // [VARIANT] - JASA PERBAIKAN STRUKTUR BANGUNAN MIRING
  // 🧠 TYPE: VARIANT (WAJIB tampil)
  // Breadcrumb: Home > Jasa Perawatan & Perbaikan Bangunan > Jasa Perbaikan Struktur > Jasa Perbaikan Struktur Bangunan Miring
  // ============================================================
  // "https://www.betonjayareadymix.com/p/jasa-perbaikan-struktur-bangunan-miring.html": "Jasa Perbaikan Struktur Bangunan Miring",  // TYPE: VARIANT
  
  // ============================================================
  // [SUB-VARIANT] - JASA STRAIGHTENING BANGUNAN MIRING
  // 🧠 TYPE: VARIANT (parent: VARIANT di atas)
  // Breadcrumb: Home > Jasa Perawatan & Perbaikan Bangunan > Jasa Perbaikan Struktur > Jasa Perbaikan Struktur Bangunan Miring > Jasa Straightening Bangunan Miring
  // ============================================================
  // "https://www.betonjayareadymix.com/p/jasa-straightening-bangunan-miring.html": "Jasa Straightening Bangunan Miring",  // TYPE: VARIANT
  
  // ============================================================
  // [MONEY_MASTER] - HARGA PERBAIKAN BANGUNAN MIRING
  // 🧠 TYPE: MONEY_MASTER (parent: VARIANT)
  // Breadcrumb: Home > Jasa Perawatan & Perbaikan Bangunan > Jasa Perbaikan Struktur > Jasa Perbaikan Struktur Bangunan Miring > Harga Perbaikan Bangunan Miring
  // ============================================================
  // "https://www.betonjayareadymix.com/2019/08/harga-perbaikan-bangunan-miring.html": "Harga Perbaikan Bangunan Miring"  // TYPE: MONEY_MASTER
};

// ============================================================
// JASA PERBAIKAN KOLOM & BALOK
// Parent: Jasa Perbaikan Struktur Beton (/p/jasa-perbaikan-struktur-beton.html)
// ============================================================

const urlMappingPerbaikanStrukturKolomBalok = {
  // ============================================================
  // [VARIANT] - JASA PERBAIKAN KOLOM BETON
  // 🧠 TYPE: VARIANT (WAJIB tampil)
  // Breadcrumb: Home > Jasa Perawatan & Perbaikan Bangunan > Jasa Perbaikan Struktur > Jasa Perbaikan Struktur Beton > Jasa Perbaikan Kolom Beton
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-kolom-beton.html": "Jasa Perbaikan Kolom Beton",  // TYPE: VARIANT
  
  // ============================================================
  // [VARIANT] - JASA PERBAIKAN BALOK BETON
  // 🧠 TYPE: VARIANT (WAJIB tampil)
  // Breadcrumb: Home > Jasa Perawatan & Perbaikan Bangunan > Jasa Perbaikan Struktur > Jasa Perbaikan Struktur Beton > Jasa Perbaikan Balok Beton
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-balok-beton.html": "Jasa Perbaikan Balok Beton",  // TYPE: VARIANT
  
  // ============================================================
  // [SUB-VARIANT] - JASA PERBAIKAN STRUKTUR KOLOM BETON
  // 🧠 TYPE: VARIANT (parent: VARIANT di atas)
  // Breadcrumb: Home > ... > Jasa Perbaikan Kolom Beton > Jasa Perbaikan Struktur Kolom Beton
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-struktur-kolom-beton.html": "Jasa Perbaikan Struktur Kolom Beton",  // TYPE: VARIANT
  
  // ============================================================
  // [SUB-VARIANT] - JASA PERBAIKAN STRUKTUR BALOK BETON
  // 🧠 TYPE: VARIANT (parent: VARIANT di atas)
  // Breadcrumb: Home > ... > Jasa Perbaikan Balok Beton > Jasa Perbaikan Struktur Balok Beton
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-struktur-balok-beton.html": "Jasa Perbaikan Struktur Balok Beton",  // TYPE: VARIANT
  
  // ============================================================
  // [SUB-VARIANT] - JASA PERKUATAN KOLOM BETON
  // 🧠 TYPE: VARIANT
  // Breadcrumb: Home > ... > Jasa Perbaikan Kolom Beton > Jasa Perkuatan Kolom Beton
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-perkuatan-kolom-beton.html": "Jasa Perkuatan Kolom Beton",  // TYPE: VARIANT
  
  // ============================================================
  // [SUB-VARIANT] - JASA PERKUATAN BALOK BETON
  // 🧠 TYPE: VARIANT
  // Breadcrumb: Home > ... > Jasa Perbaikan Balok Beton > Jasa Perkuatan Balok Beton
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-perkuatan-balok-beton.html": "Jasa Perkuatan Balok Beton",  // TYPE: VARIANT
  
  // ============================================================
  // [SUB-VARIANT] - JASA JACKETING KOLOM BALOK
  // 🧠 TYPE: VARIANT
  // Breadcrumb: Home > ... > Jasa Perbaikan Kolom Balok > Jasa Jacketing Kolom Balok
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-jacketing-kolom-balok.html": "Jasa Jacketing Kolom Balok",  // TYPE: VARIANT
  
  // ============================================================
  // [SUB-VARIANT] - JASA PERBAIKAN BALOK GANTUNG
  // 🧠 TYPE: VARIANT
  // Breadcrumb: Home > ... > Jasa Perbaikan Balok Beton > Jasa Perbaikan Balok Gantung
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-balok-gantung.html": "Jasa Perbaikan Balok Gantung",  // TYPE: VARIANT
  
  // ============================================================
  // [SUB-VARIANT] - JASA PERBAIKAN STRUKTUR TIANG BETON
  // 🧠 TYPE: VARIANT
  // Breadcrumb: Home > ... > Jasa Perbaikan Kolom Beton > Jasa Perbaikan Struktur Tiang Beton
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-struktur-tiang-beton.html": "Jasa Perbaikan Struktur Tiang Beton",  // TYPE: VARIANT
  
  // ============================================================
  // [MONEY_MASTER] - HARGA PERBAIKAN KOLOM BETON (SARAN)
  // 🧠 TYPE: MONEY_MASTER (WAJIB tampil)
  // Breadcrumb: Home > ... > Jasa Perbaikan Kolom Beton > Harga Perbaikan Kolom Beton
  // ============================================================
  // "https://www.betonjayareadymix.com/2019/08/harga-perbaikan-kolom-beton.html": "Harga Perbaikan Kolom Beton",  // TYPE: MONEY_MASTER
  
  // ============================================================
  // [MONEY_MASTER] - HARGA PERBAIKAN BALOK BETON (SARAN)
  // ============================================================
  // "https://www.betonjayareadymix.com/2019/08/harga-perbaikan-balok-beton.html": "Harga Perbaikan Balok Beton"  // TYPE: MONEY_MASTER
};

// ============================================================
// JASA PERBAIKAN STRUKTUR PONDASI
// Parent: Jasa Perbaikan Struktur (/p/jasa-perbaikan-struktur.html)
// ============================================================

const urlMappingPerbaikanStrukturPondasi = {
  // ============================================================
  // [VARIANT] - JASA PERBAIKAN PONDASI BANGUNAN
  // 🧠 TYPE: VARIANT (WAJIB tampil)
  // Breadcrumb: Home > Jasa Perawatan & Perbaikan Bangunan > Jasa Perbaikan Struktur > Jasa Perbaikan Struktur Pondasi > Jasa Perbaikan Pondasi Bangunan
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-pondasi-bangunan.html": "Jasa Perbaikan Pondasi Bangunan",  // TYPE: VARIANT
  
  // ============================================================
  // [VARIANT] - JASA PERBAIKAN PONDASI RUMAH
  // 🧠 TYPE: VARIANT
  // Breadcrumb: Home > ... > Jasa Perbaikan Struktur Pondasi > Jasa Perbaikan Pondasi Rumah
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-pondasi-rumah.html": "Jasa Perbaikan Pondasi Rumah",  // TYPE: VARIANT
  
  // ============================================================
  // [VARIANT] - JASA PENGUATAN PONDASI BANGUNAN
  // 🧠 TYPE: VARIANT
  // Breadcrumb: Home > ... > Jasa Perbaikan Struktur Pondasi > Jasa Penguatan Pondasi Bangunan
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-penguatan-pondasi-bangunan.html": "Jasa Penguatan Pondasi Bangunan",  // TYPE: VARIANT
  
  // ============================================================
  // [VARIANT] - JASA PERBAIKAN STRUKTUR PONDASI RUMAH
  // 🧠 TYPE: VARIANT
  // Breadcrumb: Home > ... > Jasa Perbaikan Struktur Pondasi > Jasa Perbaikan Struktur Pondasi Rumah
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-struktur-pondasi-rumah.html": "Jasa Perbaikan Struktur Pondasi Rumah",  // TYPE: VARIANT
  
  // ============================================================
  // [MONEY_MASTER] - HARGA PERBAIKAN PONDASI (SARAN)
  // 🧠 TYPE: MONEY_MASTER
  // Breadcrumb: Home > ... > Jasa Perbaikan Struktur Pondasi > Harga Perbaikan Pondasi
  // ============================================================
  // "https://www.betonjayareadymix.com/2019/08/harga-perbaikan-pondasi.html": "Harga Perbaikan Pondasi",  // TYPE: MONEY_MASTER
  
  // ============================================================
  // [VARIANT] - JASA PERBAIKAN PONDASI CAKAR AYAM (SARAN)
  // ============================================================
  // "https://www.betonjayareadymix.com/p/jasa-perbaikan-pondasi-cakar-ayam.html": "Jasa Perbaikan Pondasi Cakar Ayam"  // TYPE: VARIANT
};

// ============================================================
// JASA PERBAIKAN STRUKTUR LANTAI
// Parent: Jasa Perbaikan Struktur Beton (/p/jasa-perbaikan-struktur-beton.html)
// ============================================================

const urlMappingPerbaikanStrukturLantai = {
  // ============================================================
  // [VARIANT] - JASA PERBAIKAN LANTAI STRUKTUR
  // 🧠 TYPE: VARIANT (WAJIB tampil)
  // Breadcrumb: Home > Jasa Perawatan & Perbaikan Bangunan > Jasa Perbaikan Struktur > Jasa Perbaikan Struktur Lantai Beton > Jasa Perbaikan Lantai Struktur
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-lantai-struktur.html": "Jasa Perbaikan Lantai Struktur",  // TYPE: VARIANT
  
  // ============================================================
  // [VARIANT] - JASA PERBAIKAN STRUKTUR LANTAI BETON
  // 🧠 TYPE: VARIANT
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-struktur-lantai-beton.html": "Jasa Perbaikan Struktur Lantai Beton",  // TYPE: VARIANT
  
  // ============================================================
  // [VARIANT] - JASA PERBAIKAN RETAKAN LANTAI BETON
  // 🧠 TYPE: VARIANT
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-retakan-lantai-beton.html": "Jasa Perbaikan Retakan Lantai Beton",  // TYPE: VARIANT
  
  // ============================================================
  // [VARIANT] - JASA PERKUATAN LANTAI BETON
  // 🧠 TYPE: VARIANT
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-perkuatan-lantai-beton.html": "Jasa Perkuatan Lantai Beton",  // TYPE: VARIANT
  
  // ============================================================
  // [VARIANT] - JASA PERBAIKAN LANTAI
  // 🧠 TYPE: VARIANT
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-lantai.html": "Jasa Perbaikan Lantai",  // TYPE: VARIANT
  
  // ============================================================
  // [VARIANT] - JASA LANTAI AMBLES
  // 🧠 TYPE: VARIANT
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-lantai-ambles.html": "Jasa Lantai Ambles",  // TYPE: VARIANT
  
  // ============================================================
  // [VARIANT] - JASA PERBAIKAN LANTAI RUSAK
  // 🧠 TYPE: VARIANT
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-lantai-rusak.html": "Jasa Perbaikan Lantai Rusak",  // TYPE: VARIANT
  
  // ============================================================
  // [VARIANT] - JASA RENOVASI LANTAI
  // 🧠 TYPE: VARIANT
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-renovasi-lantai.html": "Jasa Renovasi Lantai",  // TYPE: VARIANT
  
  // ============================================================
  // [VARIANT] - JASA RENOVASI LANTAI RUSAK
  // 🧠 TYPE: VARIANT
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-renovasi-lantai-rusak.html": "Jasa Renovasi Lantai Rusak",  // TYPE: VARIANT
  
  // ============================================================
  // [VARIANT] - JASA PERBAIKAN LANTAI AMBLES
  // 🧠 TYPE: VARIANT
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-lantai-ambles.html": "Jasa Perbaikan Lantai Ambles",  // TYPE: VARIANT
  
  // ============================================================
  // [VARIANT] - JASA GANTI LANTAI AMBLES
  // 🧠 TYPE: VARIANT
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-ganti-lantai-ambles.html": "Jasa Ganti Lantai Ambles",  // TYPE: VARIANT
  
  // ============================================================
  // [MONEY_MASTER] - HARGA PERBAIKAN LANTAI BETON (SARAN)
  // 🧠 TYPE: MONEY_MASTER
  // ============================================================
  // "https://www.betonjayareadymix.com/2019/08/harga-perbaikan-lantai-beton.html": "Harga Perbaikan Lantai Beton",  // TYPE: MONEY_MASTER
  
  // ============================================================
  // [VARIANT] - JASA EPOXY LANTAI RETAK (SARAN)
  // ============================================================
  // "https://www.betonjayareadymix.com/p/jasa-epoxy-lantai-retak.html": "Jasa Epoxy Lantai Retak"  // TYPE: VARIANT
};

// ============================================================
// JASA PERBAIKAN STRUKTUR DINDING
// Parent: Jasa Perbaikan Struktur (/p/jasa-perbaikan-struktur.html)
// ============================================================

const urlMappingPerbaikanStrukturDinding = {
  // ============================================================
  // [VARIANT] - JASA INJEKSI DINDING RETAK
  // 🧠 TYPE: VARIANT (WAJIB tampil)
  // Breadcrumb: Home > Jasa Perawatan & Perbaikan Bangunan > Jasa Perbaikan Struktur > Jasa Perbaikan Struktur Dinding > Jasa Injeksi Dinding Retak
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-injeksi-dinding-retak.html": "Jasa Injeksi Dinding Retak",  // TYPE: VARIANT
  
  // ============================================================
  // [VARIANT] - JASA PERBAIKAN DINDING RETAK STRUKTUR
  // 🧠 TYPE: VARIANT
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-dinding-retak-struktur.html": "Jasa Perbaikan Dinding Retak Struktur",  // TYPE: VARIANT
  
  // ============================================================
  // [VARIANT] - JASA PERBAIKAN STRUKTUR DINDING RETAK
  // 🧠 TYPE: VARIANT
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-struktur-dinding-retak.html": "Jasa Perbaikan Struktur Dinding Retak",  // TYPE: VARIANT
  
  // ============================================================
  // [VARIANT] - JASA BOBOK DINDING INSTALASI
  // 🧠 TYPE: VARIANT
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-bobok-dinding-instalasi.html": "Jasa Bobok Dinding Instalasi",  // TYPE: VARIANT
  
  // ============================================================
  // [VARIANT] - JASA PERBAIKAN STRUKTUR DINDING LEMBAB
  // 🧠 TYPE: VARIANT
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-struktur-dinding-lembab.html": "Jasa Perbaikan Struktur Dinding Lembab",  // TYPE: VARIANT
  
  // ============================================================
  // [VARIANT] - JASA RENOVASI PENGGANTIAN DINDING BATA
  // 🧠 TYPE: VARIANT
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-renovasi-penggantian-dinding-bata.html": "Jasa Renovasi Penggantian Dinding Bata",  // TYPE: VARIANT
  
  // ============================================================
  // [VARIANT] - JASA PERBAIKAN PENGGANTIAN DINDING BATA
  // 🧠 TYPE: VARIANT
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-penggantian-dinding-bata.html": "Jasa Perbaikan Penggantian Dinding Bata",  // TYPE: VARIANT
  
  // ============================================================
  // [MONEY_MASTER] - HARGA PERBAIKAN DINDING RETAK (SARAN)
  // 🧠 TYPE: MONEY_MASTER
  // ============================================================
  // "https://www.betonjayareadymix.com/2019/08/harga-perbaikan-dinding-retak.html": "Harga Perbaikan Dinding Retak",  // TYPE: MONEY_MASTER
  
  // ============================================================
  // [VARIANT] - JASA PERBAIKAN DINDING AMBLES (SARAN)
  // ============================================================
  // "https://www.betonjayareadymix.com/p/jasa-perbaikan-dinding-ambles.html": "Jasa Perbaikan Dinding Ambles"  // TYPE: VARIANT
};

/*
const urlMappingPerbaikanStrukturBangunan = {
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-gedung-bertingkat.html": "Jasa Perbaikan Gedung Bertingkat",
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-struktur-bangunan-tua.html": "Jasa Perbaikan Struktur Bangunan Tua",
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-struktur-bangunan-miring.html": "Jasa Perbaikan Struktur Bangunan Miring"
}; */


// ============================================================
// JASA REHABILITASI BETON
// Parent: Jasa Perbaikan Struktur (/p/jasa-perbaikan-struktur.html)
// ============================================================

const urlMappingRehabilitasiBeton = {
  // ============================================================
  // [VARIANT] - JASA PERKUATAN STRUKTUR CFRP
  // 🧠 TYPE: VARIANT (WAJIB tampil di breadcrumb)
  // Breadcrumb: Home > Jasa Perawatan & Perbaikan Bangunan > Jasa Perbaikan Struktur > Jasa Rehabilitasi Beton > Jasa Perkuatan Struktur CFRP
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-perkuatan-struktur-cfrp.html": "Jasa Perkuatan Struktur CFRP",  // TYPE: VARIANT
  
  // ============================================================
  // [VARIANT] - JASA PELAPISAN ANTI KOROSI BETON
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-pelapisan-anti-korosi-beton.html": "Jasa Pelapisan Anti Korosi Beton",  // TYPE: VARIANT
  
  // ============================================================
  // [VARIANT] - JASA PERBAIKAN SAMBUNGAN BETON
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-sambungan-beton.html": "Jasa Perbaikan Sambungan Beton",  // TYPE: VARIANT
  
  // ============================================================
  // [VARIANT] - JASA WATERPROOFING BETON
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-waterproofing-beton.html": "Jasa Waterproofing Beton",  // TYPE: VARIANT
  
  // ============================================================
  // [VARIANT] - JASA PATCHING BETON
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-patching-beton.html": "Jasa Patching Beton",  // TYPE: VARIANT
  
  // ============================================================
  // [VARIANT] - JASA INJEKSI BETON RETAK
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-injeksi-beton-retak.html": "Jasa Injeksi Beton Retak",  // TYPE: VARIANT
  
  // ============================================================
  // [VARIANT] - JASA SHOTCRETE BETON
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-shotcrete-beton.html": "Jasa Shotcrete Beton",  // TYPE: VARIANT
  
  // ============================================================
  // [VARIANT] - JASA GROUTING STRUKTUR BETON
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-grouting-struktur-beton.html": "Jasa Grouting Struktur Beton",  // TYPE: VARIANT
  
  // ============================================================
  // [VARIANT] - JASA PERBAIKAN BETON MENGELUPAS
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-beton-mengelupas.html": "Jasa Perbaikan Beton Mengelupas",  // TYPE: VARIANT
  
  // ============================================================
  // [VARIANT] - JASA PERBAIKAN BETON KEROPOS
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-beton-keropos.html": "Jasa Perbaikan Beton Keropos",  // TYPE: VARIANT
  
  // ============================================================
  // [VARIANT] - JASA PERBAIKAN BETON RETAK
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-beton-retak.html": "Jasa Perbaikan Beton Retak",  // TYPE: VARIANT
  
  // ============================================================
  // [VARIANT] - JASA CHIPPING BETON
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-chipping-beton.html": "Jasa Chipping Beton",  // TYPE: VARIANT
  
  // ============================================================
  // [VARIANT] - JASA BOBOK BETON
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-bobok-beton.html": "Jasa Bobok Beton",  // TYPE: VARIANT
  
  // ============================================================
  // [VARIANT] - JASA BETON KARBONASI
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-beton-karbonasi.html": "Jasa Beton Karbonasi",  // TYPE: VARIANT
  
  // ============================================================
  // [MONEY_MASTER] - HARGA REHABILITASI BETON (SARAN)
  // 🧠 TYPE: MONEY_MASTER (WAJIB tampil)
  // Breadcrumb: Home > ... > Jasa Rehabilitasi Beton > Harga Rehabilitasi Beton
  // ============================================================
  // "https://www.betonjayareadymix.com/2019/08/harga-rehabilitasi-beton.html": "Harga Rehabilitasi Beton",  // TYPE: MONEY_MASTER
  
  // ============================================================
  // [SUB-VARIANT] - JASA PERBAIKAN BETON RETAK RAMBUT (SARAN)
  // 🧠 TYPE: VARIANT (parent: Jasa Perbaikan Beton Retak)
  // Breadcrumb: Home > ... > Jasa Rehabilitasi Beton > Jasa Perbaikan Beton Retak > Jasa Perbaikan Beton Retak Rambut
  // ============================================================
  // "https://www.betonjayareadymix.com/p/jasa-perbaikan-beton-retak-rambut.html": "Jasa Perbaikan Beton Retak Rambut"  // TYPE: VARIANT
};

// ============================================================
// JASA PERBAIKAN STRUKTUR ATAP
// Parent: Jasa Perbaikan Struktur (/p/jasa-perbaikan-struktur.html)
// ============================================================

const urlMappingPerbaikanStrukturAtap = {
  // ============================================================
  // [VARIANT] - JASA PERBAIKAN STRUKTUR RANGKA ATAP
  // 🧠 TYPE: VARIANT (WAJIB tampil)
  // Breadcrumb: Home > Jasa Perawatan & Perbaikan Bangunan > Jasa Perbaikan Struktur > Jasa Perbaikan Struktur Atap > Jasa Perbaikan Struktur Rangka Atap
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-stuktur-rangka-atap.html": "Jasa Perbaikan Struktur Rangka Atap",  // TYPE: VARIANT
  
  // ============================================================
  // [VARIANT] - JASA PERBAIKAN STRUKTUR ATAP GUDANG
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-struktur-atap-gudang.html": "Jasa Perbaikan Struktur Atap Gudang",  // TYPE: VARIANT
  
  // ============================================================
  // [VARIANT] - JASA PERBAIKAN RANGKA ATAP BAJA RINGAN
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-rangka-atap-baja-ringan.html": "Jasa Perbaikan Rangka Atap Baja Ringan",  // TYPE: VARIANT
  
  // ============================================================
  // [MONEY_MASTER] - HARGA PERBAIKAN ATAP (SARAN)
  // 🧠 TYPE: MONEY_MASTER (WAJIB tampil)
  // Breadcrumb: Home > ... > Jasa Perbaikan Struktur Atap > Harga Perbaikan Atap
  // ============================================================
  // "https://www.betonjayareadymix.com/2019/08/harga-perbaikan-atap.html": "Harga Perbaikan Atap",  // TYPE: MONEY_MASTER
  
  // ============================================================
  // [SUB-VARIANT] - JASA PERBAIKAN KUDA-KUDA ATAP (SARAN)
  // 🧠 TYPE: VARIANT (parent: Jasa Perbaikan Struktur Rangka Atap)
  // ============================================================
  // "https://www.betonjayareadymix.com/p/jasa-perbaikan-kuda-kuda-atap.html": "Jasa Perbaikan Kuda-kuda Atap",  // TYPE: VARIANT
  
  // ============================================================
  // [SUB-VARIANT] - JASA PERBAIKAN GENTING BOCOR (SARAN)
  // 🧠 TYPE: VARIANT
  // ============================================================
  // "https://www.betonjayareadymix.com/p/jasa-perbaikan-genting-bocor.html": "Jasa Perbaikan Genting Bocor"  // TYPE: VARIANT
};
/*
;
📋 RINGKASAN BREADCRUMB 4 LEVEL (SKIP PILLAR JASA KONSTRUKSI)
Jenis Halaman	Breadcrumb (4 level)
VARIANT (langsung di bawah SUB2)	Home > Jasa Perawatan & Perbaikan Bangunan > Jasa Perbaikan Struktur > [Nama Halaman]
SUB-VARIANT (di bawah VARIANT)	Home > Jasa Perawatan & Perbaikan Bangunan > Jasa Perbaikan Struktur > [Parent VARIANT] > [Nama Halaman]
MONEY_MASTER	Home > Jasa Perawatan & Perbaikan Bangunan > Jasa Perbaikan Struktur > [Nama Halaman]
📊 CONTOH BREADCRUMB UNTUK MASING-MASING JENIS
Halaman	Type	Breadcrumb
Jasa Perkuatan Struktur CFRP	VARIANT	Home > Jasa Perawatan & Perbaikan Bangunan > Jasa Perbaikan Struktur > Jasa Rehabilitasi Beton > Jasa Perkuatan Struktur CFRP
Jasa Perbaikan Beton Retak	VARIANT	Home > Jasa Perawatan & Perbaikan Bangunan > Jasa Perbaikan Struktur > Jasa Rehabilitasi Beton > Jasa Perbaikan Beton Retak
Jasa Perbaikan Struktur Rangka Atap	VARIANT	Home > Jasa Perawatan & Perbaikan Bangunan > Jasa Perbaikan Struktur > Jasa Perbaikan Struktur Atap > Jasa Perbaikan Struktur Rangka Atap
*/
//Jasa PerawatanPerbaikanBangunan
/*
const urlMappingPerawatanPerbaikanBangunan = {
"https://www.betonjayareadymix.com/p/jasa-perbaikan-struktur.html": "Jasa Perbaikan Struktur",
"https://www.betonjayareadymix.com/p/jasa-perbaikan-kebocoran-waterproofing.html": "Jasa Perbaikan Kebocoran Waterproofing",
"https://www.betonjayareadymix.com/p/jasa-perbaikan-elemen-arsitektural.html": "Jasa Perbaikan Elemen Arsitektural",
"https://www.betonjayareadymix.com/p/jasa-perbaikan-atap-drainase-bangunan.html": "Jasa Perbaikan Atap Drainase Bangunan"
	
};
*/
// ============================================================
// JASA PERAWATAN & PERBAIKAN BANGUNAN (SUB2)
// Parent: Jasa Perawatan & Perbaikan Bangunan
// ============================================================

// ============================================================
// JASA PERBAIKAN KEBOCORAN & WATERPROOFING (SUB2 - TURUNAN)
// Parent: Jasa Perawatan & Perbaikan Bangunan
// ============================================================

const urlMappingPerbaikanKebocoranWaterproofing = {
  // ============================================================
  // [MONEY_MASTER] - JASA PERBAIKAN REMBESAN AIR
  // 🧠 TYPE: MONEY_MASTER (WAJIB tampil, parent: SUB2)
  // Breadcrumb: Home > Jasa Perawatan & Perbaikan Bangunan > Jasa Perbaikan Kebocoran & Waterproofing > Jasa Perbaikan Rembesan Air
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-rembesan-air.html": "Jasa Perbaikan Rembesan Air",  // TYPE: MONEY_MASTER

  // ============================================================
  // [MONEY_MASTER] - JASA PERBAIKAN DAK BETON BOCOR
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-dak-beton-bocor.html": "Jasa Perbaikan Dak Beton Bocor",  // TYPE: MONEY_MASTER

  // ============================================================
  // [MONEY_MASTER] - JASA PERBAIKAN TALANG BOCOR
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-talang-bocor.html": "Jasa Perbaikan Talang Bocor",  // TYPE: MONEY_MASTER

  // ============================================================
  // [MONEY_MASTER] - JASA PERBAIKAN GENTENG BOCOR
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-genteng-bocor.html": "Jasa Perbaikan Genteng Bocor",  // TYPE: MONEY_MASTER

  // ============================================================
  // [MONEY_MASTER] - JASA WATERPROOFING DAK BETON
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-waterproofing-dak-beton.html": "Jasa Waterproofing Dak Beton",  // TYPE: MONEY_MASTER

  // ============================================================
  // [MONEY_MASTER] - JASA WATERPROOFING BASEMENT
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-waterproofing-basement.html": "Jasa Waterproofing Basement",  // TYPE: MONEY_MASTER

  // ============================================================
  // [MONEY_MASTER] - JASA WATERPROOFING DINDING
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-waterproofing-dinding.html": "Jasa Waterproofing Dinding",  // TYPE: MONEY_MASTER

  // ============================================================
  // [MONEY_MASTER] - JASA INJEKSI ANTI BOCOR
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-injeksi-anti-bocor.html": "Jasa Injeksi Anti Bocor",  // TYPE: MONEY_MASTER

  // ============================================================
  // [MONEY_MASTER] - JASA COATING WATERPROOFING
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-coating-waterproofing.html": "Jasa Coating Waterproofing"  // TYPE: MONEY_MASTER
};

// ============================================================
// 🧠 SEO NOTES - PERBAIKAN KEBOCORAN & WATERPROOFING
// ============================================================
/*
📌 SEMUA URL adalah [MONEY_MASTER] karena:
1. Konten membahas layanan spesifik dengan harga/estimasi
2. Intent transaksional (user mencari solusi kebocoran)
3. Ada CTA dan ajakan konsultasi

📌 BREADCRUMB 4 LEVEL (skip PILLAR Jasa Konstruksi):
Home > Jasa Perawatan & Perbaikan Bangunan > Jasa Perbaikan Kebocoran & Waterproofing > [Nama Halaman]

📌 SARAN ITEM BARU (jika diperlukan):
// "https://www.betonjayareadymix.com/p/jasa-waterproofing-kolam-renang.html": "Jasa Waterproofing Kolam Renang",  // TYPE: MONEY_MASTER
// "https://www.betonjayareadymix.com/p/jasa-waterproofing-dinding-eksterior.html": "Jasa Waterproofing Dinding Eksterior",  // TYPE: MONEY_MASTER
*/

// ============================================================
// JASA PERBAIKAN ELEMEN ARSITEKTURAL (SUB2 - TURUNAN)
// Parent: Jasa Perawatan & Perbaikan Bangunan
// ============================================================

const urlMappingPerbaikanElemenArsitektural = {
  // ============================================================
  // [MONEY_MASTER] - JASA PERBAIKAN DINDING RETAK
  // 🧠 TYPE: MONEY_MASTER (WAJIB tampil, parent: SUB2)
  // Breadcrumb: Home > Jasa Perawatan & Perbaikan Bangunan > Jasa Perbaikan Elemen Arsitektural > Jasa Perbaikan Dinding Retak
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-dinding-retak.html": "Jasa Perbaikan Dinding Retak",  // TYPE: MONEY_MASTER

  // ============================================================
  // [MONEY_MASTER] - JASA PERBAIKAN PLAFON RUSAK
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-plafon-rusak.html": "Jasa Perbaikan Plafon Rusak",  // TYPE: MONEY_MASTER

  // ============================================================
  // [MONEY_MASTER] - JASA PERBAIKAN PLESTER RETAK
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-plester-retak.html": "Jasa Perbaikan Plester Retak",  // TYPE: MONEY_MASTER

  // ============================================================
  // [MONEY_MASTER] - JASA PERBAIKAN CAT MENGELUPAS
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-cat-mengelupas.html": "Jasa Perbaikan Cat Mengelupas",  // TYPE: MONEY_MASTER

  // ============================================================
  // [MONEY_MASTER] - JASA PERBAIKAN LANTAI RETAK
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-lantai-retak.html": "Jasa Perbaikan Lantai Retak",  // TYPE: MONEY_MASTER

  // ============================================================
  // [MONEY_MASTER] - JASA PERBAIKAN KERAMIK MENGGEMBUNG
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-keramik-menggelembung.html": "Jasa Perbaikan Keramik Menggelembung",  // TYPE: MONEY_MASTER

  // ============================================================
  // [MONEY_MASTER] - JASA PERBAIKAN TANGGA RETAK
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-tangga-retak.html": "Jasa Perbaikan Tangga Retak",  // TYPE: MONEY_MASTER

  // ============================================================
  // [MONEY_MASTER] - JASA PERBAIKAN PARTISI RUSAK
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-partisi-rusak.html": "Jasa Perbaikan Partisi Rusak"  // TYPE: MONEY_MASTER
};

// ============================================================
// 🧠 SEO NOTES - PERBAIKAN ELEMEN ARSITEKTURAL
// ============================================================
/*
📌 SEMUA URL adalah [MONEY_MASTER] karena:
1. Membahas layanan perbaikan spesifik
2. Intent transaksional (user mencari jasa perbaikan)
3. Konten mengarah ke konsultasi dan penawaran

📌 BREADCRUMB 4 LEVEL (skip PILLAR Jasa Konstruksi):
Home > Jasa Perawatan & Perbaikan Bangunan > Jasa Perbaikan Elemen Arsitektural > [Nama Halaman]

📌 SARAN ITEM BARU (jika diperlukan):
// "https://www.betonjayareadymix.com/p/jasa-perbaikan-lisplang-retak.html": "Jasa Perbaikan Lisplang Retak",  // TYPE: MONEY_MASTER
// "https://www.betonjayareadymix.com/p/jasa-perbaikan-kusen-rusak.html": "Jasa Perbaikan Kusen Rusak",  // TYPE: MONEY_MASTER
// "https://www.betonjayareadymix.com/p/jasa-perbaikan-pintu-dan-jendela.html": "Jasa Perbaikan Pintu dan Jendela",  // TYPE: MONEY_MASTER
*/

// ============================================================
// JASA PERBAIKAN ATAP & DRAINASE BANGUNAN (SUB2 - TURUNAN)
// Parent: Jasa Perawatan & Perbaikan Bangunan
// ============================================================

const urlMappingPerbaikanAtapDrainaseBangunan = {
  // ============================================================
  // [MONEY_MASTER] - JASA PERBAIKAN ATAP BOCOR
  // 🧠 TYPE: MONEY_MASTER (WAJIB tampil, parent: SUB2)
  // Breadcrumb: Home > Jasa Perawatan & Perbaikan Bangunan > Jasa Perbaikan Atap & Drainase Bangunan > Jasa Perbaikan Atap Bocor
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-atap-bocor.html": "Jasa Perbaikan Atap Bocor",  // TYPE: MONEY_MASTER

  // ============================================================
  // [MONEY_MASTER] - JASA PERBAIKAN RANGKA ATAP
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-rangka-atap.html": "Jasa Perbaikan Rangka Atap",  // TYPE: MONEY_MASTER

  // ============================================================
  // [MONEY_MASTER] - JASA PERBAIKAN SALURAN AIR TERSUMBAT
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-saluran-air-tersumbat.html": "Jasa Perbaikan Saluran Air Tersumbat",  // TYPE: MONEY_MASTER

  // ============================================================
  // [MONEY_MASTER] - JASA PERBAIKAN PIPA BOCOR
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-pipa-bocor.html": "Jasa Perbaikan Pipa Bocor",  // TYPE: MONEY_MASTER

  // ============================================================
  // [MONEY_MASTER] - JASA PERBAIKAN ROOF DECK
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-roof-deck.html": "Jasa Perbaikan Roof Deck"  // TYPE: MONEY_MASTER
};

// ============================================================
// 🧠 SEO NOTES - PERBAIKAN ATAP & DRAINASE BANGUNAN
// ============================================================
/*
📌 SEMUA URL adalah [MONEY_MASTER] karena:
1. Membahas layanan perbaikan spesifik
2. Intent transaksional (user mencari jasa perbaikan)
3. Ada estimasi harga, metode, dan CTA konsultasi

📌 BREADCRUMB 4 LEVEL (skip PILLAR Jasa Konstruksi):
Home > Jasa Perawatan & Perbaikan Bangunan > Jasa Perbaikan Atap & Drainase Bangunan > [Nama Halaman]

📌 SARAN ITEM BARU (jika diperlukan):
// "https://www.betonjayareadymix.com/p/jasa-perbaikan-sistem-drainase-atap.html": "Jasa Perbaikan Sistem Drainase Atap",  // TYPE: MONEY_MASTER
// "https://www.betonjayareadymix.com/p/jasa-perbaikan-talang-air-atap.html": "Jasa Perbaikan Talang Air Atap",  // TYPE: MONEY_MASTER
// "https://www.betonjayareadymix.com/p/jasa-perbaikan-selokan-tersumbat.html": "Jasa Perbaikan Selokan Tersumbat",  // TYPE: MONEY_MASTER
*/

//Jasa Renovasi Perbaikan Infrastruktur
/*
const urlMappingPerbaikanInfrastruktur = {
 //"https://www.betonjayareadymix.com/p/jasa-perbaikan-dan-perawatan-jalan.html": "Jasa Perbaikan dan Perawatan Jalan",
// "https://www.betonjayareadymix.com/p/jasa-renovasi-perbaikan-jalan-berlubang.html": "Jasa Renovasi Perbaikan Jalan Berlubang",
 "https://www.betonjayareadymix.com/p/jasa-perbaikan-jalan.html": "Jasa Renovasi Perbaikan Jalan",
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-jembatan.html": "Jasa Perbaikan Jembatan",
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-drainase.html": "Jasa Perbaikan Drainase",
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-trotoar.html": "Jasa Perbaikan Trotoar"
};
*/

// ============================================================
// JASA PERBAIKAN INFRASTRUKTUR (SUB2)
// Parent: Jasa Perawatan & Perbaikan Bangunan
// ============================================================

// ============================================================
// JASA PERBAIKAN JALAN (VARIANT)
// Parent: Jasa Perbaikan Infrastruktur
// ============================================================

const urlMappingPerbaikanInfrastrukturJalan = {
  // ============================================================
  // [MONEY_MASTER] - JASA PERBAIKAN JALAN BERLUBANG
  // 🧠 TYPE: MONEY_MASTER (WAJIB tampil)
  // Breadcrumb: Home > Jasa Perawatan & Perbaikan Bangunan > Jasa Perbaikan Infrastruktur > Jasa Perbaikan Jalan Berlubang
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-jalan-berlubang.html": "Jasa Perbaikan Jalan Berlubang",  // TYPE: MONEY_MASTER

  // ============================================================
  // [MONEY_MASTER] - JASA PERBAIKAN JALAN AMBLES
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-jalan-ambles.html": "Jasa Perbaikan Jalan Ambles",  // TYPE: MONEY_MASTER

  // ============================================================
  // [MONEY_MASTER] - JASA PERBAIKAN JALAN RETAK
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-jalan-retak.html": "Jasa Perbaikan Jalan Retak",  // TYPE: MONEY_MASTER

  // ============================================================
  // [MONEY_MASTER] - JASA PERBAIKAN PERMUKAAN JALAN
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-permukaan-jalan.html": "Jasa Perbaikan Permukaan Jalan",  // TYPE: MONEY_MASTER

  // ============================================================
  // [MONEY_MASTER] - JASA PERBAIKAN JALAN RUSAK BERAT
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-jalan-rusak-berat.html": "Jasa Perbaikan Jalan Rusak Berat",  // TYPE: MONEY_MASTER

  // ============================================================
  // [MONEY_MASTER] - JASA PERBAIKAN JALAN ASPAL
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-jalan-aspal.html": "Jasa Perbaikan Jalan Aspal",  // TYPE: MONEY_MASTER

  // ============================================================
  // [MONEY_MASTER] - JASA PERBAIKAN JALAN BETON
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-jalan-beton.html": "Jasa Perbaikan Jalan Beton",  // TYPE: MONEY_MASTER

  // ============================================================
  // [MONEY_MASTER] - JASA PERBAIKAN JALAN PAVING
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-jalan-paving.html": "Jasa Perbaikan Jalan Paving",  // TYPE: MONEY_MASTER

  // ============================================================
  // [MONEY_MASTER] - JASA PERBAIKAN JALAN CORING BETON
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-jalan-coring-beton.html": "Jasa Perbaikan Jalan Coring Beton",  // TYPE: MONEY_MASTER

  // ============================================================
  // [MONEY_MASTER] - JASA OVERLAY JALAN ASPAL
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-overlay-jalan-aspal.html": "Jasa Overlay Jalan Aspal",  // TYPE: MONEY_MASTER

  // ============================================================
  // [MONEY_MASTER] - JASA REKONSTRUKSI JALAN BETON
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-rekonstruksi-jalan-beton.html": "Jasa Rekonstruksi Jalan Beton",  // TYPE: MONEY_MASTER

  // ============================================================
  // [MONEY_MASTER] - JASA PENAMBALAN JALAN BERLUBANG
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-penambalan-jalan-berlubang.html": "Jasa Penambalan Jalan Berlubang",  // TYPE: MONEY_MASTER

  // ============================================================
  // [MONEY_MASTER] - JASA BONGKAR PASANG JALAN PAVING
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-bongkar-pasang-jalan-paving.html": "Jasa Bongkar Pasang Jalan Paving",  // TYPE: MONEY_MASTER

  // ============================================================
  // [MONEY_MASTER] - JASA PERBAIKAN JALAN KOMPLEK
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-jalan-komplek.html": "Jasa Perbaikan Jalan Komplek",  // TYPE: MONEY_MASTER

  // ============================================================
  // [MONEY_MASTER] - JASA PERBAIKAN JALAN RAYA
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-jalan-raya.html": "Jasa Perbaikan Jalan Raya",  // TYPE: MONEY_MASTER

  // ============================================================
  // [MONEY_MASTER] - JASA PERBAIKAN JALAN PERUSAHAAN
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-jalan-perusahaan.html": "Jasa Perbaikan Jalan Perusahaan",  // TYPE: MONEY_MASTER

  // ============================================================
  // [MONEY_MASTER] - JASA PERBAIKAN JALAN PERUMAHAN
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-jalan-perumahan.html": "Jasa Perbaikan Jalan Perumahan",  // TYPE: MONEY_MASTER

  // ============================================================
  // [MONEY_MASTER] - JASA REPAIR JALAN DENGAN COLD MIX
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-repair-jalan-dengan-cold-mix.html": "Jasa Repair Jalan dengan Cold Mix",  // TYPE: MONEY_MASTER

  // ============================================================
  // [MONEY_MASTER] - JASA MARKING JALAN DAN REPAIR
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-marking-jalan-dan-repair.html": "Jasa Marking Jalan dan Repair",  // TYPE: MONEY_MASTER

  // ============================================================
  // SARAN ITEM BARU (BELUM AKTIF)
  // 🧠 TYPE: MONEY_MASTER
  // ============================================================
  // "https://www.betonjayareadymix.com/p/jasa-perbaikan-jalan-hotmix.html": "Jasa Perbaikan Jalan Hotmix",  // TYPE: MONEY_MASTER
  // "https://www.betonjayareadymix.com/p/jasa-perbaikan-jalan-rigid.html": "Jasa Perbaikan Jalan Rigid",  // TYPE: MONEY_MASTER
  // "https://www.betonjayareadymix.com/2019/08/harga-perbaikan-jalan.html": "Harga Perbaikan Jalan"  // TYPE: MONEY_MASTER
};

// ============================================================
// JASA PERBAIKAN TROTOAR (VARIANT)
// Parent: Jasa Perbaikan Infrastruktur
// ============================================================

const urlMappingPerbaikanInfrastrukturTrotoar = {
  // ============================================================
  // [MONEY_MASTER] - JASA PERBAIKAN TROTOAR JALAN RUSAK
  // 🧠 TYPE: MONEY_MASTER (WAJIB tampil)
  // Breadcrumb: Home > Jasa Perawatan & Perbaikan Bangunan > Jasa Perbaikan Infrastruktur > Jasa Perbaikan Trotoar Jalan Rusak
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-trotoar-jalan-rusak.html": "Jasa Perbaikan Trotoar Jalan Rusak",  // TYPE: MONEY_MASTER

  // ============================================================
  // [MONEY_MASTER] - JASA PERBAIKAN TROTOAR BETON
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-trotoar-beton.html": "Jasa Perbaikan Trotoar Beton",  // TYPE: MONEY_MASTER

  // ============================================================
  // SARAN ITEM BARU (BELUM AKTIF)
  // 🧠 TYPE: MONEY_MASTER
  // ============================================================
  // "https://www.betonjayareadymix.com/p/jasa-perbaikan-trotoar-paving.html": "Jasa Perbaikan Trotoar Paving",  // TYPE: MONEY_MASTER
  // "https://www.betonjayareadymix.com/p/jasa-perbaikan-trotoar-ambles.html": "Jasa Perbaikan Trotoar Ambles",  // TYPE: MONEY_MASTER
  // "https://www.betonjayareadymix.com/2019/08/harga-perbaikan-trotoar.html": "Harga Perbaikan Trotoar"  // TYPE: MONEY_MASTER
};

// ============================================================
// JASA PERBAIKAN JEMBATAN (VARIANT)
// Parent: Jasa Perbaikan Infrastruktur
// ============================================================

const urlMappingPerbaikanInfrastrukturJembatan = {
  // ============================================================
  // [MONEY_MASTER] - JASA PERBAIKAN STRUKTUR JEMBATAN
  // 🧠 TYPE: MONEY_MASTER (WAJIB tampil)
  // Breadcrumb: Home > Jasa Perawatan & Perbaikan Bangunan > Jasa Perbaikan Infrastruktur > Jasa Perbaikan Struktur Jembatan
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-struktur-jembatan.html": "Jasa Perbaikan Struktur Jembatan",  // TYPE: MONEY_MASTER

  // ============================================================
  // [MONEY_MASTER] - JASA PERBAIKAN JEMBATAN BETON
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-jembatan-beton.html": "Jasa Perbaikan Jembatan Beton",  // TYPE: MONEY_MASTER

  // ============================================================
  // [MONEY_MASTER] - JASA PERBAIKAN JEMBATAN BESI
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-jembatan-besi.html": "Jasa Perbaikan Jembatan Besi",  // TYPE: MONEY_MASTER

  // ============================================================
  // [MONEY_MASTER] - JASA REHABILITASI JEMBATAN
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-rehabilitasi-jembatan.html": "Jasa Rehabilitasi Jembatan",  // TYPE: MONEY_MASTER

  // ============================================================
  // [MONEY_MASTER] - JASA RENOVASI JEMBATAN GANTUNG
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-renovasi-jembatan-gantung.html": "Jasa Renovasi Jembatan Gantung",  // TYPE: MONEY_MASTER

  // ============================================================
  // [MONEY_MASTER] - JASA PERBAIKAN FONDASI JEMBATAN
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-fondasi-jembatan.html": "Jasa Perbaikan Fondasi Jembatan",  // TYPE: MONEY_MASTER

  // ============================================================
  // [MONEY_MASTER] - JASA RENOVASI JEMBATAN BERTINGKAT
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-renovasi-jembatan-bertingkat.html": "Jasa Renovasi Jembatan Bertingkat",  // TYPE: MONEY_MASTER

  // ============================================================
  // [MONEY_MASTER] - JASA PERKUATAN STRUKTUR JEMBATAN
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-perkuatan-struktur-jembatan.html": "Jasa Perkuatan Struktur Jembatan",  // TYPE: MONEY_MASTER

  // ============================================================
  // [MONEY_MASTER] - JASA RENOVASI JEMBATAN RUSAK
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-renovasi-jembatan-rusak.html": "Jasa Renovasi Jembatan Rusak",  // TYPE: MONEY_MASTER

  // ============================================================
  // [MONEY_MASTER] - JASA PERBAIKAN RETAK JEMBATAN BETON
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-retak-jembatan-beton.html": "Jasa Perbaikan Retak Jembatan Beton",  // TYPE: MONEY_MASTER

  // ============================================================
  // [MONEY_MASTER] - JASA PERBAIKAN LANTAI JEMBATAN
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-lantai-jembatan.html": "Jasa Perbaikan Lantai Jembatan",  // TYPE: MONEY_MASTER

  // ============================================================
  // [MONEY_MASTER] - JASA REKONSTRUKSI JEMBATAN
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-rekonstruksi-jembatan.html": "Jasa Rekonstruksi Jembatan",  // TYPE: MONEY_MASTER

  // ============================================================
  // [MONEY_MASTER] - JASA PERBAIKAN BALOK JEMBATAN
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-balok-jembatan.html": "Jasa Perbaikan Balok Jembatan",  // TYPE: MONEY_MASTER

  // ============================================================
  // [MONEY_MASTER] - JASA PERBAIKAN TIANG PENYANGGA JEMBATAN
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-tiang-penyangga-jembatan.html": "Jasa Perbaikan Tiang Penyangga Jembatan",  // TYPE: MONEY_MASTER

  // ============================================================
  // [MONEY_MASTER] - JASA CHIPPING JEMBATAN BETON
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-chipping-jembatan-beton.html": "Jasa Chipping Jembatan Beton",  // TYPE: MONEY_MASTER

  // ============================================================
  // [MONEY_MASTER] - JASA SHOTCRETE JEMBATAN
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-shotcrete-jembatan.html": "Jasa Shotcrete Jembatan",  // TYPE: MONEY_MASTER

  // ============================================================
  // [MONEY_MASTER] - JASA INJEKSI RETAK JEMBATAN
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-injeksi-retak-jembatan.html": "Jasa Injeksi Retak Jembatan",  // TYPE: MONEY_MASTER

  // ============================================================
  // SARAN ITEM BARU (BELUM AKTIF)
  // 🧠 TYPE: MONEY_MASTER
  // ============================================================
  // "https://www.betonjayareadymix.com/p/jasa-perbaikan-jembatan-gantung.html": "Jasa Perbaikan Jembatan Gantung",  // TYPE: MONEY_MASTER
  // "https://www.betonjayareadymix.com/p/jasa-perbaikan-jembatan-kayu.html": "Jasa Perbaikan Jembatan Kayu",  // TYPE: MONEY_MASTER
  // "https://www.betonjayareadymix.com/2019/08/harga-perbaikan-jembatan.html": "Harga Perbaikan Jembatan"  // TYPE: MONEY_MASTER
};

// ============================================================
// JASA PERBAIKAN SALURAN (VARIANT)
// Parent: Jasa Perbaikan Infrastruktur
// ============================================================

const urlMappingPerbaikanInfrastrukturSaluran = {
  // ============================================================
  // [MONEY_MASTER] - JASA PERBAIKAN SALURAN AIR
  // 🧠 TYPE: MONEY_MASTER (WAJIB tampil)
  // Breadcrumb: Home > Jasa Perawatan & Perbaikan Bangunan > Jasa Perbaikan Infrastruktur > Jasa Perbaikan Saluran Air
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-saluran-air.html": "Jasa Perbaikan Saluran Air",  // TYPE: MONEY_MASTER

  // ============================================================
  // [MONEY_MASTER] - JASA PERBAIKAN SALURAN AIR KOTOR
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-saluran-air-kotor.html": "Jasa Perbaikan Saluran Air Kotor",  // TYPE: MONEY_MASTER

  // ============================================================
  // [MONEY_MASTER] - JASA PERBAIKAN SALURAN AIR HUJAN
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-saluran-air-hujan.html": "Jasa Perbaikan Saluran Air Hujan",  // TYPE: MONEY_MASTER

  // ============================================================
  // SARAN ITEM BARU (BELUM AKTIF)
  // 🧠 TYPE: MONEY_MASTER
  // ============================================================
  // "https://www.betonjayareadymix.com/p/jasa-perbaikan-saluran-drainase.html": "Jasa Perbaikan Saluran Drainase",  // TYPE: MONEY_MASTER
  // "https://www.betonjayareadymix.com/p/jasa-perbaikan-saluran-tersumbat.html": "Jasa Perbaikan Saluran Tersumbat",  // TYPE: MONEY_MASTER
  // "https://www.betonjayareadymix.com/2019/08/harga-perbaikan-saluran-air.html": "Harga Perbaikan Saluran Air"  // TYPE: MONEY_MASTER
};

// ============================================================
// JASA RENOVASI EKSTERIOR BANGUNAN (SUB2)
// Parent: Jasa Renovasi (/p/jasa-renovasi.html)
// ============================================================

// ============================================================
// JASA RENOVASI FASAD BANGUNAN (VARIANT)
// Parent: Jasa Renovasi Eksterior Bangunan
// ============================================================

const urlMappingPerbaikanFasadEksterior = {
  // ============================================================
  // [VARIANT] - JASA RENOVASI FASAD BANGUNAN
  // 🧠 TYPE: VARIANT (WAJIB tampil di breadcrumb)
  // Breadcrumb: Home > Jasa Renovasi > Jasa Renovasi Eksterior Bangunan > Jasa Renovasi Fasad Bangunan
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-renovasi-fasad-bangunan.html": "Jasa Renovasi Fasad Bangunan",  // TYPE: VARIANT

  // ============================================================
  // [VARIANT] - JASA RENOVASI FASAD EKSTERIOR
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-renovasi-fasad-eksterior.html": "Jasa Renovasi Fasad Eksterior",  // TYPE: VARIANT

  // ============================================================
  // [VARIANT] - JASA RENOVASI ARSITEKTUR EKSTERIOR
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-renovasi-arsitektur-eksterior.html": "Jasa Renovasi Arsitektur Eksterior",  // TYPE: VARIANT

  // ============================================================
  // [VARIANT] - JASA RENOVASI ATAP
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-renovasi-atap.html": "Jasa Renovasi Atap",  // TYPE: VARIANT

  // ============================================================
  // [VARIANT] - JASA RENOVASI KANOPI
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-renovasi-kanopi.html": "Jasa Renovasi Kanopi",  // TYPE: VARIANT

  // ============================================================
  // [VARIANT] - JASA RENOVASI PAGAR DAN GERBANG
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-renovasi-pagar-dan-gerbang.html": "Jasa Renovasi Pagar dan Gerbang",  // TYPE: VARIANT

  // ============================================================
  // [VARIANT] - JASA RENOVASI TAMAN DAN LANDSCAPE
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-renovasi-taman-dan-landscape.html": "Jasa Renovasi Taman dan Landscape",  // TYPE: VARIANT

  // ============================================================
  // [VARIANT] - JASA RENOVASI BALKON DAN TERAS
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-renovasi-balkon-dan-teras.html": "Jasa Renovasi Balkon dan Teras",  // TYPE: VARIANT

  // ============================================================
  // [VARIANT] - JASA RENOVASI PENERANGAN EKSTERIOR
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-renovasi-penerangan-eksterior.html": "Jasa Renovasi Penerangan Eksterior",  // TYPE: VARIANT

  // ============================================================
  // [VARIANT] - JASA RENOVASI JALUR PEJALAN KAKI DAN AKSESIBILITAS
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-renovasi-jalur-pejalan-akses.html": "Jasa Renovasi Jalur Pejalan Kaki dan Aksesibilitas",  // TYPE: VARIANT

  // ============================================================
  // [VARIANT] - JASA RENOVASI ELEMEN DEKORATIF EKSTERIOR
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-renovasi-elemen-dekoratif-eksterior.html": "Jasa Renovasi Elemen Dekoratif Eksterior",  // TYPE: VARIANT

  // ============================================================
  // SARAN ITEM BARU (MASIH COMMENT - PERLU DIBUAT)
  // 🧠 TYPE: VARIANT (di bawah Jasa Renovasi Eksterior Bangunan)
  // ============================================================
  // "https://www.betonjayareadymix.com/p/jasa-renovasi-perbaikan-atap.html": "Jasa Renovasi Perbaikan Atap",  // TYPE: VARIANT
  // "https://www.betonjayareadymix.com/p/jasa-renovasi-perbaikan-atap-gudang.html": "Jasa Renovasi Perbaikan Atap Gudang",  // TYPE: VARIANT
  // "https://www.betonjayareadymix.com/p/jasa-perbaikan-atap-bocor.html": "Jasa Perbaikan Atap Bocor",  // TYPE: VARIANT
  // "https://www.betonjayareadymix.com/p/jasa-renovasi-perbaikan-atap-baja-ringan.html": "Jasa Renovasi Perbaikan Atap Baja Ringan",  // TYPE: VARIANT
  // "https://www.betonjayareadymix.com/p/jasa-perbaikan-talang-air.html": "Jasa Perbaikan Talang Air",  // TYPE: VARIANT
  // "https://www.betonjayareadymix.com/p/jasa-renovasi-talang-air.html": "Jasa Renovasi Talang Air",  // TYPE: VARIANT
  // "https://www.betonjayareadymix.com/p/jasa-perbaikan-dan-renovasi-pagar.html": "Jasa Perbaikan dan Renovasi Pagar",  // TYPE: VARIANT
  // "https://www.betonjayareadymix.com/p/jasa-perbaikan-saluran-dan-drainase.html": "Jasa Perbaikan Saluran dan Drainase"  // TYPE: VARIANT
};

// ============================================================
// JASA RENOVASI FASAD (SUB-VARIANT DARI FASAD BANGUNAN)
// Parent: Jasa Renovasi Fasad Bangunan (VARIANT)
// ============================================================

const urlMappingPerbaikanFasadEksteriorFasad = {
  // ============================================================
  // [VARIANT] - JASA RENOVASI FASAD KACA GEDUNG
  // 🧠 TYPE: VARIANT (WAJIB tampil di breadcrumb)
  // Breadcrumb: Home > Jasa Renovasi > Jasa Renovasi Eksterior Bangunan > Jasa Renovasi Fasad Bangunan > Jasa Renovasi Fasad Kaca Gedung
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-renovasi-fasad-kaca-gedung.html": "Jasa Renovasi Fasad Kaca Gedung",  // TYPE: VARIANT

  // ============================================================
  // [VARIANT] - JASA RENOVASI FASAD ALUMINIUM COMPOSITE PANEL
  // ============================================================
  "https://www.betonjayareadymix.com/p/renovasi-fasad-aluminium-composite-panel.html": "Jasa Renovasi Fasad Aluminium Composite Panel",  // TYPE: VARIANT

  // ============================================================
  // [VARIANT] - JASA PEMBERSIHAN FASAD GEDUNG
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-pembersihan-fasad-gedung.html": "Jasa Pembersihan Fasad Gedung",  // TYPE: VARIANT

  // ============================================================
  // [VARIANT] - JASA RENOVASI FASAD GEDUNG TINGGI
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-renovasi-fasad-gedung-tinggi.html": "Jasa Renovasi Fasad Gedung Tinggi",  // TYPE: VARIANT

  // ============================================================
  // [VARIANT] - JASA RECOATING FASAD GEDUNG
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-recoating-fasad-gedung.html": "Jasa Recoating Fasad Gedung",  // TYPE: VARIANT

  // ============================================================
  // [VARIANT] - JASA PERBAIKAN FASAD GEDUNG RETAK
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-fasad-gedung-retak.html": "Jasa Perbaikan Fasad Gedung Retak",  // TYPE: VARIANT

  // ============================================================
  // [VARIANT] - JASA RENOVASI FASAD BANGUNAN KOMERSIAL
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-renovasi-fasad-bangunan-komersial.html": "Jasa Renovasi Fasad Bangunan Komersial",  // TYPE: VARIANT

  // ============================================================
  // [VARIANT] - JASA RENOVASI KANOPI FASAD GEDUNG
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-renovasi-kanopi-fasad-gedung.html": "Jasa Renovasi Kanopi Fasad Gedung",  // TYPE: VARIANT

  // ============================================================
  // [VARIANT] - JASA DESAIN RENOVASI FASAD BANGUNAN
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-desain-renovasi-fasad-bangunan.html": "Jasa Desain Renovasi Fasad Bangunan",  // TYPE: VARIANT

  // ============================================================
  // [VARIANT] - JASA PENGGANTIAN FASAD BANGUNAN LAMA
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-penggantian-fasad-bangunan-lama.html": "Jasa Penggantian Fasad Bangunan Lama",  // TYPE: VARIANT

  // ============================================================
  // [VARIANT] - JASA FASAD DEKORATIF BANGUNAN
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-fasad-dekoratif-bangunan.html": "Jasa Fasad Dekoratif Bangunan",  // TYPE: VARIANT

  // ============================================================
  // [VARIANT] - JASA PERKUATAN STRUKTUR FASAD BANGUNAN
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-perkuatan-struktur-fasad-bangunan.html": "Jasa Perkuatan Struktur Fasad Bangunan",  // TYPE: VARIANT

  // ============================================================
  // SARAN ITEM BARU (MASIH COMMENT - PERLU DIBUAT)
  // 🧠 TYPE: VARIANT (di bawah Jasa Renovasi Fasad Bangunan)
  // ⚠️ STATUS: 404 (belum ada konten)
  // ============================================================
  // "https://www.betonjayareadymix.com/p/jasa-renovasi-fasad-rumah-tinggal.html": "Jasa Renovasi Fasad Rumah Tinggal",  // TYPE: VARIANT (404)
  // "https://www.betonjayareadymix.com/p/jasa-renovasi-fasad-ruko.html": "Jasa Renovasi Fasad Ruko",  // TYPE: VARIANT (404)
  // "https://www.betonjayareadymix.com/2019/08/harga-renovasi-fasad.html": "Harga Renovasi Fasad"  // TYPE: MONEY_MASTER (404)
};
/*
Jasa Renovasi (PILLAR)
│
└── Jasa Renovasi Eksterior Bangunan (SUB2)
    │
    ├── Jasa Renovasi Fasad Bangunan (VARIANT)
    │   ├── Jasa Renovasi Fasad Kaca Gedung (VARIANT)
    │   ├── Jasa Renovasi Fasad Aluminium Composite Panel (VARIANT)
    │   ├── Jasa Pembersihan Fasad Gedung (VARIANT)
    │   └── ... (dst)
    │
    ├── Jasa Renovasi Atap (VARIANT)
    ├── Jasa Renovasi Kanopi (VARIANT)
    ├── Jasa Renovasi Pagar dan Gerbang (VARIANT)
    └── ... (dst)

*/
/*
const urlMappingPerbaikanFasadEksteriorEksterior = {


};
*/

// ============================================================
// JASA RENOVASI ARSITEKTUR EKSTERIOR (SUB2)
// Parent: Jasa Renovasi Fasad Eksterior (/p/jasa-renovasi-fasad-eksterior.html)
// Breadcrumb: Home > Jasa Konstruksi > Jasa Renovasi > Jasa Renovasi Fasad Eksterior > Jasa Renovasi Arsitektur Eksterior
// ============================================================

const urlMappingPerbaikanFasadEksteriorArsitektur = {
  // ============================================================
  // [VARIANT] - JASA DESAIN EKSTERIOR RUMAH
  // 🧠 TYPE: VARIANT (WAJIB tampil di breadcrumb)
  // Breadcrumb: Home > Jasa Konstruksi > Jasa Renovasi > Jasa Renovasi Fasad Eksterior > Jasa Desain Eksterior Rumah
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-desain-eksterior-rumah.html": "Jasa Desain Eksterior Rumah",  // TYPE: VARIANT

  // ============================================================
  // [VARIANT] - JASA DESAIN EKSTERIOR KOMERSIAL
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-desain-eksterior-komersial.html": "Jasa Desain Eksterior Komersial",  // TYPE: VARIANT

  // ============================================================
  // [VARIANT] - JASA DESAIN EKSTERIOR VILLA DAN RESORT
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-desain-eksterior-villa-dan-resort.html": "Jasa Desain Eksterior Villa dan Resort",  // TYPE: VARIANT

  // ============================================================
  // [VARIANT] - JASA DESAIN EKSTERIOR HUNIAN VERTIKAL
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-desain-eksterior-hunian-vertikal.html": "Jasa Desain Eksterior Hunian Vertikal",  // TYPE: VARIANT

  // ============================================================
  // [VARIANT] - JASA DESAIN EKSTERIOR FASILITAS PUBLIK
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-desain-eksterior-fasilitas-publik.html": "Jasa Desain Eksterior Fasilitas Publik"  // TYPE: VARIANT
};

// ============================================================
// 🟡 SARAN ITEM BARU (UNTUK DITAMBAHKAN)
// ============================================================

const urlMappingJasaDesainEksterior_Additional = {
  // ============================================================
  // [VARIANT] - JASA DESAIN EKSTERIOR MINIMALIS
  // 🧠 TYPE: VARIANT (berdasarkan gaya arsitektur)
  // Breadcrumb: Home > Jasa Konstruksi > Jasa Renovasi > Jasa Renovasi Fasad Eksterior > Jasa Desain Eksterior Minimalis
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-desain-eksterior-minimalis.html": "Jasa Desain Eksterior Minimalis",  // TYPE: VARIANT

  // ============================================================
  // [VARIANT] - JASA DESAIN EKSTERIOR MODERN
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-desain-eksterior-modern.html": "Jasa Desain Eksterior Modern",  // TYPE: VARIANT

  // ============================================================
  // [VARIANT] - JASA DESAIN EKSTERIOR KLASIK
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-desain-eksterior-klasik.html": "Jasa Desain Eksterior Klasik",  // TYPE: VARIANT

  // ============================================================
  // [VARIANT] - JASA DESAIN EKSTERIOR INDUSTRIAL
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-desain-eksterior-industrial.html": "Jasa Desain Eksterior Industrial",  // TYPE: VARIANT

  // ============================================================
  // [MONEY_MASTER] - HARGA JASA DESAIN EKSTERIOR
  // 🧠 TYPE: MONEY_MASTER (WAJIB tampil)
  // Breadcrumb: Home > Jasa Konstruksi > Jasa Renovasi > Jasa Renovasi Fasad Eksterior > Harga Desain Eksterior
  // ============================================================
  "https://www.betonjayareadymix.com/2019/08/harga-desain-eksterior.html": "Harga Desain Eksterior",  // TYPE: MONEY_MASTER

  // ============================================================
  // [MONEY_LEADGEN] - KONSULTASI DESAIN EKSTERIOR
  // 🧠 TYPE: MONEY_LEADGEN (WAJIB tampil)
  // Breadcrumb: Home > Jasa Konstruksi > Jasa Renovasi > Jasa Renovasi Fasad Eksterior > Konsultasi Desain Eksterior
  // ============================================================
  "https://www.betonjayareadymix.com/p/konsultasi-desain-eksterior.html": "Konsultasi Desain Eksterior"  // TYPE: MONEY_LEADGEN
};

// ============================================================
// JASA RENOVASI BANGUNAN (SUB2 - MASTER)
// Parent: Jasa Renovasi (/p/jasa-renovasi.html)
// ============================================================

const urlMappingRenovasiBangunan = {
  // ============================================================
  // [VARIANT] - JASA RENOVASI FASILITAS UMUM
  // TYPE: VARIANT (WAJIB tampil)
  // Breadcrumb: Home > Jasa Konstruksi > Jasa Renovasi > Jasa Renovasi Fasilitas Umum
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-renovasi-fasilitas-umum.html": "Jasa Renovasi Fasilitas Umum",  // TYPE: VARIANT

  // ============================================================
  // [VARIANT] - JASA RENOVASI PABRIK
  // TYPE: VARIANT (WAJIB tampil)
  // Breadcrumb: Home > Jasa Konstruksi > Jasa Renovasi > Jasa Renovasi Pabrik
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-renovasi-pabrik.html": "Jasa Renovasi Pabrik",  // TYPE: VARIANT

  // ============================================================
  // [VARIANT] - JASA RENOVASI RUMAH
  // TYPE: VARIANT (WAJIB tampil)
  // Breadcrumb: Home > Jasa Konstruksi > Jasa Renovasi > Jasa Renovasi Rumah
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-renovasi-rumah.html": "Jasa Renovasi Rumah",  // TYPE: VARIANT

  // ============================================================
  // [VARIANT] - JASA RENOVASI KANTOR
  // TYPE: VARIANT (WAJIB tampil)
  // Breadcrumb: Home > Jasa Konstruksi > Jasa Renovasi > Jasa Renovasi Kantor
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-renovasi-kantor.html": "Jasa Renovasi Kantor",  // TYPE: VARIANT

  // ============================================================
  // [VARIANT] - JASA RENOVASI GEDUNG
  // TYPE: VARIANT (WAJIB tampil)
  // Breadcrumb: Home > Jasa Konstruksi > Jasa Renovasi > Jasa Renovasi Gedung
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-renovasi-gedung.html": "Jasa Renovasi Gedung",  // TYPE: VARIANT

  // ============================================================
  // [VARIANT] - JASA RENOVASI GUDANG
  // TYPE: VARIANT (WAJIB tampil)
  // Breadcrumb: Home > Jasa Konstruksi > Jasa Renovasi > Jasa Renovasi Gudang
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-renovasi-gudang.html": "Jasa Renovasi Gudang",  // TYPE: VARIANT

  // ============================================================
  // [VARIANT] - JASA RENOVASI HOTEL APARTEMEN
  // TYPE: VARIANT (WAJIB tampil)
  // Breadcrumb: Home > Jasa Konstruksi > Jasa Renovasi > Jasa Renovasi Hotel Apartemen
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-renovasi-hotel-apartemen.html": "Jasa Renovasi Hotel Apartemen"  // TYPE: VARIANT
};

// ============================================================
// SUB JASA RENOVASI TEMPAT IBADAH
// Parent: Jasa Renovasi Bangunan (/p/jasa-renovasi-bangunan.html)
// ============================================================

const urlMappingRenovasiBangunanIbadah = {
  // ============================================================
  // [SUB-VARIANT] - JASA RENOVASI MASJID
  // TYPE: SUB-VARIANT (WAJIB tampil)
  // Breadcrumb: Home > Jasa Konstruksi > Jasa Renovasi > Jasa Renovasi Bangunan > Jasa Renovasi Tempat Ibadah > Jasa Renovasi Masjid
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-renovasi-masjid.html": "Jasa Renovasi Masjid",  // TYPE: SUB-VARIANT

  // ============================================================
  // [SUB-VARIANT] - JASA RENOVASI GEREJA
  // TYPE: SUB-VARIANT (WAJIB tampil)
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-renovasi-gereja.html": "Jasa Renovasi Gereja",  // TYPE: SUB-VARIANT

  // ============================================================
  // [SUB-VARIANT] - JASA RENOVASI PURA
  // TYPE: SUB-VARIANT (WAJIB tampil)
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-renovasi-pura.html": "Jasa Renovasi Pura",  // TYPE: SUB-VARIANT

  // ============================================================
  // [SUB-VARIANT] - JASA RENOVASI VIHARA
  // TYPE: SUB-VARIANT (WAJIB tampil)
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-renovasi-vihara.html": "Jasa Renovasi Vihara",  // TYPE: SUB-VARIANT

  // ============================================================
  // [SUB-VARIANT] - JASA RENOVASI KLENTENG
  // TYPE: SUB-VARIANT (WAJIB tampil)
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-renovasi-klenteng.html": "Jasa Renovasi Klenteng",  // TYPE: SUB-VARIANT

  // ============================================================
  // [MONEY PAGE] - HARGA RENOVASI MASJID
  // TYPE: MONEY_PAGE (WAJIB tampil)
  // Breadcrumb: Home > Jasa Konstruksi > Jasa Renovasi > Harga Renovasi Masjid
  // ============================================================
  "https://www.betonjayareadymix.com/2019/08/harga-renovasi-masjid.html": "Harga Renovasi Masjid"  // TYPE: MONEY_PAGE
};

// ============================================================
// SUB JASA RENOVASI RUMAH
// Parent: Jasa Renovasi Bangunan (/p/jasa-renovasi-bangunan.html)
// ============================================================

const urlMappingRenovasiBangunanRumah = {
  // ============================================================
  // [SUB-VARIANT] - JASA RENOVASI RUMAH MINIMALIS
  // TYPE: SUB-VARIANT (WAJIB tampil)
  // Breadcrumb: Home > Jasa Konstruksi > Jasa Renovasi > Jasa Renovasi Bangunan > Jasa Renovasi Rumah > Jasa Renovasi Rumah Minimalis
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-renovasi-rumah-minimalis.html": "Jasa Renovasi Rumah Minimalis",  // TYPE: SUB-VARIANT

  // ============================================================
  // [SUB-VARIANT] - JASA RENOVASI RUMAH TYPE 36
  // TYPE: SUB-VARIANT (WAJIB tampil)
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-renovasi-rumah-type-36.html": "Jasa Renovasi Rumah Type 36",  // TYPE: SUB-VARIANT

  // ============================================================
  // [SUB-VARIANT] - JASA RENOVASI RUMAH TYPE 45
  // TYPE: SUB-VARIANT (WAJIB tampil)
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-renovasi-rumah-type-45.html": "Jasa Renovasi Rumah Type 45",  // TYPE: SUB-VARIANT

  // ============================================================
  // [SUB-VARIANT] - JASA RENOVASI RUMAH 2 LANTAI
  // TYPE: SUB-VARIANT (WAJIB tampil)
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-renovasi-rumah-2-lantai.html": "Jasa Renovasi Rumah 2 Lantai",  // TYPE: SUB-VARIANT

  // ============================================================
  // [SUB-VARIANT] - JASA RENOVASI PERBAIKAN ATAP RUMAH
  // TYPE: SUB-VARIANT (WAJIB tampil)
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-renovasi-perbaikan-atap-rumah.html": "Jasa Renovasi Perbaikan Atap Rumah",  // TYPE: SUB-VARIANT

  // ============================================================
  // [SUB-VARIANT] - JASA RENOVASI DINDING RUMAH
  // TYPE: SUB-VARIANT (WAJIB tampil)
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-renovasi-dinding-rumah.html": "Jasa Renovasi Dinding Rumah",  // TYPE: SUB-VARIANT

  // ============================================================
  // [SUB-VARIANT] - JASA RENOVASI KOSMETIK RUMAH
  // TYPE: SUB-VARIANT (WAJIB tampil)
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-renovasi-kosmetik-rumah.html": "Jasa Renovasi Kosmetik Rumah",  // TYPE: SUB-VARIANT

  // ============================================================
  // [SUB-VARIANT] - JASA RENOVASI RUMAH TUMBUH
  // TYPE: SUB-VARIANT (WAJIB tampil)
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-renovasi-rumah-tumbuh.html": "Jasa Renovasi Rumah Tumbuh"  // TYPE: SUB-VARIANT
};

// ============================================================
// JASA RENOVASI FASILITAS UMUM (SUB2) - MASTER CONST
// Parent: Jasa Renovasi (/p/jasa-renovasi.html)
// ============================================================

const urlMappingPerbaikanFasilitasUmum = {
  // ============================================================
  // [VARIANT] - JASA RENOVASI TAMAN KOTA
  // TYPE: VARIANT (WAJIB tampil)
  // Breadcrumb: Home > Jasa Renovasi > Jasa Renovasi Fasilitas Umum > Jasa Renovasi Taman Kota
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-renovasi-taman-kota.html": "Jasa Renovasi Taman Kota",  // TYPE: VARIANT

  // ============================================================
  // [VARIANT] - JASA RENOVASI SEKOLAH
  // TYPE: VARIANT (WAJIB tampil)
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-renovasi-sekolah.html": "Jasa Renovasi Sekolah",  // TYPE: VARIANT

  // ============================================================
  // [VARIANT] - JASA RENOVASI STADION
  // TYPE: VARIANT (WAJIB tampil)
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-renovasi-stadion.html": "Jasa Renovasi Stadion",  // TYPE: VARIANT

  // ============================================================
  // [VARIANT] - JASA RENOVASI TEMPAT IBADAH
  // TYPE: VARIANT (WAJIB tampil)
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-renovasi-tempat-ibadah.html": "Jasa Renovasi Tempat Ibadah",  // TYPE: VARIANT

  // ============================================================
  // [VARIANT] - JASA RENOVASI RUMAH SAKIT
  // TYPE: VARIANT (WAJIB tampil)
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-renovasi-rumah-sakit.html": "Jasa Renovasi Rumah Sakit",  // TYPE: VARIANT

  // ============================================================
  // [VARIANT] - JASA RENOVASI TERMINAL
  // TYPE: VARIANT (WAJIB tampil)
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-renovasi-terminal.html": "Jasa Renovasi Terminal",  // TYPE: VARIANT

  // ============================================================
  // [VARIANT] - JASA RENOVASI HALTE
  // TYPE: VARIANT (WAJIB tampil)
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-renovasi-halte.html": "Jasa Renovasi Halte"  // TYPE: VARIANT
};

// ============================================================
// JASA RENOVASI TAMAN KOTA - TURUNAN
// Parent: Jasa Renovasi Fasilitas Umum
// ============================================================

const urlMappingPerbaikanFasilitasUmumTaman = {
  // ============================================================
  // [SUB-VARIANT] - PERBAIKAN TROTOAR JALAN RUSAK
  // TYPE: SUB-VARIANT (WAJIB tampil)
  // Breadcrumb: Home > Jasa Renovasi > Jasa Renovasi Fasilitas Umum > Jasa Renovasi Taman Kota > Jasa Perbaikan Trotoar Jalan Rusak
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-trotoar-jalan-rusak.html": "Jasa Perbaikan Trotoar Jalan Rusak",  // TYPE: SUB-VARIANT

  // ============================================================
  // [SUB-VARIANT] - PERBAIKAN JALUR PEDESTRIAN TAMAN
  // TYPE: SUB-VARIANT (WAJIB tampil)
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-jalur-pedestrian-taman.html": "Jasa Perbaikan Jalur Pedestrian Taman",  // TYPE: SUB-VARIANT

  // ============================================================
  // [SUB-VARIANT] - RENOVASI LAMPU TAMAN KOTA
  // TYPE: SUB-VARIANT (WAJIB tampil)
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-renovasi-lampu-taman-kota.html": "Jasa Renovasi Lampu Taman Kota",  // TYPE: SUB-VARIANT

  // ============================================================
  // [SUB-VARIANT] - RENOVASI LANSEKAP TAMAN KOTA
  // TYPE: SUB-VARIANT (WAJIB tampil)
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-renovasi-lansekap-taman-kota.html": "Jasa Renovasi Lansekap Taman Kota",  // TYPE: SUB-VARIANT

  // ============================================================
  // [SUB-VARIANT] - PERBAIKAN AREA BERMAIN ANAK TAMAN
  // TYPE: SUB-VARIANT (WAJIB tampil)
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-area-bermain-anak-taman.html": "Jasa Perbaikan Area Bermain Anak Taman",  // TYPE: SUB-VARIANT

  // ============================================================
  // [SUB-VARIANT] - PERBAIKAN FASILITAS TAMAN
  // TYPE: SUB-VARIANT (WAJIB tampil)
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-fasilitas-taman.html": "Jasa Perbaikan Fasilitas Taman"  // TYPE: SUB-VARIANT
};

// ============================================================
// JASA RENOVASI SEKOLAH - TURUNAN
// Parent: Jasa Renovasi Fasilitas Umum
// ============================================================

const urlMappingPerbaikanFasilitasUmumSekolah = {
  // ============================================================
  // [SUB-VARIANT] - RENOVASI RUANG KELAS
  // TYPE: SUB-VARIANT (WAJIB tampil)
  // Breadcrumb: Home > Jasa Renovasi > Jasa Renovasi Fasilitas Umum > Jasa Renovasi Sekolah > Jasa Renovasi Ruang Kelas
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-renovasi-ruang-kelas.html": "Jasa Renovasi Ruang Kelas",  // TYPE: SUB-VARIANT

  // ============================================================
  // [SUB-VARIANT] - PERBAIKAN ATAP SEKOLAH
  // TYPE: SUB-VARIANT (WAJIB tampil)
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-atap-sekolah.html": "Jasa Perbaikan Atap Sekolah",  // TYPE: SUB-VARIANT

  // ============================================================
  // [SUB-VARIANT] - RENOVASI KAMAR MANDI SEKOLAH
  // TYPE: SUB-VARIANT (WAJIB tampil)
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-renovasi-kamar-mandi-sekolah.html": "Jasa Renovasi Kamar Mandi Sekolah",  // TYPE: SUB-VARIANT

  // ============================================================
  // [SUB-VARIANT] - RENOVASI FASILITAS LABORATORIUM
  // TYPE: SUB-VARIANT (WAJIB tampil)
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-renovasi-fasilitas-laboratorium.html": "Jasa Renovasi Fasilitas Laboratorium",  // TYPE: SUB-VARIANT

  // ============================================================
  // [SUB-VARIANT] - RENOVASI LAPANGAN SEKOLAH
  // TYPE: SUB-VARIANT (WAJIB tampil)
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-renovasi-lapangan-sekolah.html": "Jasa Renovasi Lapangan Sekolah",  // TYPE: SUB-VARIANT

  // ============================================================
  // [SUB-VARIANT] - PERBAIKAN DRAINASE SEKOLAH
  // TYPE: SUB-VARIANT (WAJIB tampil)
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-drainase-sekolah.html": "Jasa Perbaikan Drainase Sekolah",  // TYPE: SUB-VARIANT

  // ============================================================
  // [SUB-VARIANT] - RENOVASI DINDING & LANTAI SEKOLAH
  // TYPE: SUB-VARIANT (WAJIB tampil)
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-renovasi-dinding-lantai-sekolah.html": "Jasa Renovasi Dinding & Lantai Sekolah",  // TYPE: SUB-VARIANT

  // ============================================================
  // [SUB-VARIANT] - PERBAIKAN LISTRIK SEKOLAH
  // TYPE: SUB-VARIANT (WAJIB tampil)
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-listrik-sekolah.html": "Jasa Perbaikan Listrik Sekolah"  // TYPE: SUB-VARIANT
};

// ============================================================
// JASA RENOVASI TEMPAT IBADAH - TURUNAN
// Parent: Jasa Renovasi Fasilitas Umum
// ============================================================

const urlMappingPerbaikanFasilitasIbadah = {
  // ============================================================
  // [SUB-VARIANT] - RENOVASI MASJID
  // TYPE: SUB-VARIANT (WAJIB tampil)
  // Breadcrumb: Home > Jasa Renovasi > Jasa Renovasi Fasilitas Umum > Jasa Renovasi Tempat Ibadah > Jasa Renovasi Masjid
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-renovasi-masjid.html": "Jasa Renovasi Masjid",  // TYPE: SUB-VARIANT

  // ============================================================
  // [SUB-VARIANT] - RENOVASI GEREJA
  // TYPE: SUB-VARIANT (WAJIB tampil)
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-renovasi-gereja.html": "Jasa Renovasi Gereja",  // TYPE: SUB-VARIANT

  // ============================================================
  // [SUB-VARIANT] - RENOVASI KLENTENG
  // TYPE: SUB-VARIANT (WAJIB tampil)
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-renovasi-klenteng.html": "Jasa Renovasi Klenteng",  // TYPE: SUB-VARIANT

  // ============================================================
  // [SUB-VARIANT] - RENOVASI LANGAR
  // TYPE: SUB-VARIANT (WAJIB tampil)
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-renovasi-langgar.html": "Jasa Renovasi Langgar",  // TYPE: SUB-VARIANT

  // ============================================================
  // [SUB-VARIANT] - RENOVASI MUSHOLA
  // TYPE: SUB-VARIANT (WAJIB tampil)
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-renovasi-mushola.html": "Jasa Renovasi Mushola",  // TYPE: SUB-VARIANT

  // ============================================================
  // [SUB-VARIANT] - RENOVASI VIHARA
  // TYPE: SUB-VARIANT (WAJIB tampil)
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-renovasi-vihara.html": "Jasa Renovasi Vihara",  // TYPE: SUB-VARIANT

  // ============================================================
  // [SUB-VARIANT] - RENOVASI PURA
  // TYPE: SUB-VARIANT (WAJIB tampil)
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-renovasi-pura.html": "Jasa Renovasi Pura"  // TYPE: SUB-VARIANT
};

// ============================================================
// JASA RENOVASI TERMINAL - TURUNAN
// Parent: Jasa Renovasi Fasilitas Umum
// ============================================================

const urlMappingPerbaikanFasilitasUmumTerminal = {
  // ============================================================
  // [SUB-VARIANT] - PERBAIKAN LANTAI TERMINAL
  // TYPE: SUB-VARIANT (WAJIB tampil)
  // Breadcrumb: Home > Jasa Renovasi > Jasa Renovasi Fasilitas Umum > Jasa Renovasi Terminal > Jasa Perbaikan Lantai Terminal
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-lantai-terminal.html": "Jasa Perbaikan Lantai Terminal",  // TYPE: SUB-VARIANT

  // ============================================================
  // [SUB-VARIANT] - PERBAIKAN ATAP TERMINAL
  // TYPE: SUB-VARIANT (WAJIB tampil)
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-atap-terminal.html": "Jasa Perbaikan Atap Terminal",  // TYPE: SUB-VARIANT

  // ============================================================
  // [SUB-VARIANT] - RENOVASI KANOPI TERMINAL
  // TYPE: SUB-VARIANT (WAJIB tampil)
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-renovasi-kanopi-terminal.html": "Jasa Renovasi Kanopi Terminal",  // TYPE: SUB-VARIANT

  // ============================================================
  // [SUB-VARIANT] - PERBAIKAN DINDING TERMINAL
  // TYPE: SUB-VARIANT (WAJIB tampil)
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-dinding-terminal.html": "Jasa Perbaikan Dinding Terminal",  // TYPE: SUB-VARIANT

  // ============================================================
  // [SUB-VARIANT] - PERBAIKAN PAGAR TERMINAL
  // TYPE: SUB-VARIANT (WAJIB tampil)
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-pagar-terminal.html": "Jasa Perbaikan Pagar Terminal",  // TYPE: SUB-VARIANT

  // ============================================================
  // [SUB-VARIANT] - PERBAIKAN PENERANGAN TERMINAL
  // TYPE: SUB-VARIANT (WAJIB tampil)
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-penerangan-terminal.html": "Jasa Perbaikan Penerangan Terminal",  // TYPE: SUB-VARIANT

  // ============================================================
  // [SUB-VARIANT] - RENOVASI AREA TUNGGU TERMINAL
  // TYPE: SUB-VARIANT (WAJIB tampil)
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-renovasi-area-tunggu-terminal.html": "Jasa Renovasi Area Tunggu Terminal",  // TYPE: SUB-VARIANT

  // ============================================================
  // [SUB-VARIANT] - RENOVASI KAMAR MANDI TERMINAL
  // TYPE: SUB-VARIANT (WAJIB tampil)
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-renovasi-kamar-mandi-terminal.html": "Jasa Renovasi Kamar Mandi Terminal"  // TYPE: SUB-VARIANT
};

// ============================================================
// JASA RENOVASI HALTE - TURUNAN
// Parent: Jasa Renovasi Fasilitas Umum
// ============================================================

const urlMappingPerbaikanFasilitasUmumHalte = {
  // ============================================================
  // [SUB-VARIANT] - PERBAIKAN KANOPI HALTE
  // TYPE: SUB-VARIANT (WAJIB tampil)
  // Breadcrumb: Home > Jasa Renovasi > Jasa Renovasi Fasilitas Umum > Jasa Renovasi Halte > Jasa Perbaikan Kanopi Halte
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-kanopi-halte.html": "Jasa Perbaikan Kanopi Halte",  // TYPE: SUB-VARIANT

  // ============================================================
  // [SUB-VARIANT] - PERBAIKAN TEMPAT DUDUK HALTE
  // TYPE: SUB-VARIANT (WAJIB tampil)
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-tempat-duduk-halte.html": "Jasa Perbaikan Tempat Duduk Halte",  // TYPE: SUB-VARIANT

  // ============================================================
  // [SUB-VARIANT] - PERBAIKAN PENERANGAN HALTE
  // TYPE: SUB-VARIANT (WAJIB tampil)
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-penerangan-halte.html": "Jasa Perbaikan Penerangan Halte",  // TYPE: SUB-VARIANT

  // ============================================================
  // [SUB-VARIANT] - PERBAIKAN LANTAI HALTE
  // TYPE: SUB-VARIANT (WAJIB tampil)
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-lantai-halte.html": "Jasa Perbaikan Lantai Halte",  // TYPE: SUB-VARIANT

  // ============================================================
  // [SUB-VARIANT] - RENOVASI DESAIN HALTE MODERN
  // TYPE: SUB-VARIANT (WAJIB tampil)
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-renovasi-desain-halte-modern.html": "Jasa Renovasi Desain Halte Modern"  // TYPE: SUB-VARIANT
};

// ============================================================
// JASA RENOVASI INTERIOR (SUB2)
// Parent: Jasa Renovasi (/p/jasa-renovasi.html)
// Breadcrumb: Home > Jasa Renovasi > Jasa Renovasi Interior
// ============================================================

const urlMappingPerbaikanInterior = {
  // ============================================================
  // [VARIANT] - JASA RENOVASI INTERIOR RUMAH
  // 🧠 TYPE: VARIANT (WAJIB tampil, parent: SUB2)
  // Breadcrumb: Home > Jasa Renovasi > Jasa Renovasi Interior > Jasa Renovasi Interior Rumah
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-renovasi-interior-rumah.html": "Jasa Renovasi Interior Rumah",  // TYPE: VARIANT

  // ============================================================
  // [VARIANT] - JASA RENOVASI INTERIOR KANTOR
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-renovasi-interior-kantor.html": "Jasa Renovasi Interior Kantor",  // TYPE: VARIANT

  // ============================================================
  // [VARIANT] - JASA RENOVASI INTERIOR APARTEMEN
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-renovasi-interior-apartemen.html": "Jasa Renovasi Interior Apartemen",  // TYPE: VARIANT

  // ============================================================
  // [VARIANT] - JASA RENOVASI INTERIOR HOTEL
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-renovasi-interior-hotel.html": "Jasa Renovasi Interior Hotel",  // TYPE: VARIANT

  // ============================================================
  // [VARIANT] - JASA RENOVASI INTERIOR TOKO
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-renovasi-interior-toko.html": "Jasa Renovasi Interior Toko",  // TYPE: VARIANT

  // ============================================================
  // [VARIANT] - RENOVASI FURNITURE
  // ============================================================
  "https://www.betonjayareadymix.com/p/renovasi-furniture.html": "Renovasi Furniture",  // TYPE: VARIANT

  // ============================================================
  // [VARIANT] - JASA RENOVASI INTERIOR CUSTOM
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-renovasi-interior-custom.html": "Jasa Renovasi Interior Custom",  // TYPE: VARIANT

  // ============================================================
  // [VARIANT] - JASA RENOVASI INTERIOR RUANGAN
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-renovasi-interior-ruangan.html": "Jasa Renovasi Interior Ruangan"  // TYPE: VARIANT
};

// ============================================================
// JASA RENOVASI INTERIOR RUMAH - TURUNAN (SUB-VARIANT)
// Parent: Jasa Renovasi Interior Rumah
// ============================================================

const urlMappingPerbaikanInteriorRumah = {
  // ============================================================
  // [MONEY_PAGE] - JASA RENOVASI KAMAR TIDUR
  // 🧠 TYPE: MONEY_MASTER (WAJIB tampil, parent: VARIANT)
  // Breadcrumb: Home > Jasa Renovasi > Jasa Renovasi Interior > Jasa Renovasi Interior Rumah > Jasa Renovasi Kamar Tidur
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-renovasi-kamar-tidur.html": "Jasa Renovasi Kamar Tidur",  // TYPE: MONEY_MASTER

  // ============================================================
  // [MONEY_PAGE] - JASA RENOVASI DAPUR
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-renovasi-dapur.html": "Jasa Renovasi Dapur",  // TYPE: MONEY_MASTER

  // ============================================================
  // [MONEY_PAGE] - JASA RENOVASI KAMAR MANDI
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-renovasi-kamar-mandi.html": "Jasa Renovasi Kamar Mandi",  // TYPE: MONEY_MASTER

  // ============================================================
  // [MONEY_PAGE] - JASA RENOVASI RUANG TAMU
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-renovasi-ruang-tamu.html": "Jasa Renovasi Ruang Tamu",  // TYPE: MONEY_MASTER

  // ============================================================
  // [MONEY_PAGE] - JASA RENOVASI RUANG KELUARGA
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-renovasi-ruang-keluarga.html": "Jasa Renovasi Ruang Keluarga",  // TYPE: MONEY_MASTER

  // ============================================================
  // [MONEY_PAGE] - JASA RENOVASI RUANG BELAJAR
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-renovasi-ruang-belajar.html": "Jasa Renovasi Ruang Belajar",  // TYPE: MONEY_MASTER

  // ============================================================
  // [MONEY_PAGE] - JASA RENOVASI RUANG MAKAN
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-renovasi-ruang-makan.html": "Jasa Renovasi Ruang Makan",  // TYPE: MONEY_MASTER

  // ============================================================
  // [MONEY_PAGE] - JASA RENOVASI RUANG MULTIFUNGSI
  // ============================================================
  "https://www.betonjayareadymix.com/p/jasa-renovasi-ruang-multifungsi.html": "Jasa Renovasi Ruang Multifungsi"  // TYPE: MONEY_MASTER
};

// ============================================================
// JASA RENOVASI INTERIOR KANTOR - TURUNAN (SUB-VARIANT)
// Parent: Jasa Renovasi Interior Kantor
// ============================================================

const urlMappingPerbaikanInteriorKantor = {
  // 🧠 TYPE: MONEY_MASTER (WAJIB tampil, parent: VARIANT)
  // Breadcrumb: Home > Jasa Renovasi > Jasa Renovasi Interior > Jasa Renovasi Interior Kantor > [Nama Item]
  "https://www.betonjayareadymix.com/p/jasa-renovasi-ruang-kerja-karyawan.html": "Jasa Renovasi Ruang Kerja Karyawan",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/p/jasa-renovasi-ruang-rapat-kantor.html": "Jasa Renovasi Ruang Rapat Kantor",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/p/jasa-renovasi-lobby-dan-resepsionis.html": "Jasa Renovasi Lobby dan Resepsionis",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/p/jasa-renovasi-ruang-direksi.html": "Jasa Renovasi Ruang Direksi",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/p/jasa-renovasi-coworking-space.html": "Jasa Renovasi Coworking Space",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/p/jasa-renovasi-partisi-ruang-kantor.html": "Jasa Renovasi Partisi Ruang Kantor"  // TYPE: MONEY_MASTER
};

// ============================================================
// JASA RENOVASI INTERIOR APARTEMEN - TURUNAN (SUB-VARIANT)
// Parent: Jasa Renovasi Interior Apartemen
// ============================================================

const urlMappingPerbaikanInteriorApartemen = {
  // 🧠 TYPE: MONEY_MASTER (WAJIB tampil, parent: VARIANT)
  // Breadcrumb: Home > Jasa Renovasi > Jasa Renovasi Interior > Jasa Renovasi Interior Apartemen > [Nama Item]
  "https://www.betonjayareadymix.com/p/jasa-renovasi-interior-studio-apartemen.html": "Jasa Renovasi Interior Studio Apartemen",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/p/jasa-renovasi-kamar-apartemen.html": "Jasa Renovasi Kamar Apartemen",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/p/jasa-renovasi-dapur-apartemen.html": "Jasa Renovasi Dapur Apartemen",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/p/jasa-renovasi-kamar-mandi-apartemen.html": "Jasa Renovasi Kamar Mandi Apartemen",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/p/jasa-renovasi-ruang-tamu-apartemen.html": "Jasa Renovasi Ruang Tamu Apartemen"  // TYPE: MONEY_MASTER
};

// ============================================================
// JASA RENOVASI INTERIOR HOTEL - TURUNAN (SUB-VARIANT)
// Parent: Jasa Renovasi Interior Hotel
// ============================================================

const urlMappingPerbaikanInteriorHotel = {
  // 🧠 TYPE: MONEY_MASTER (WAJIB tampil, parent: VARIANT)
  // Breadcrumb: Home > Jasa Renovasi > Jasa Renovasi Interior > Jasa Renovasi Interior Hotel > [Nama Item]
  "https://www.betonjayareadymix.com/p/jasa-renovasi-kamar-hotel.html": "Jasa Renovasi Kamar Hotel",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/p/jasa-renovasi-lobi-hotel.html": "Jasa Renovasi Lobi Hotel",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/p/jasa-renovasi-ruang-makan-hotel.html": "Jasa Renovasi Ruang Makan Hotel",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/p/jasa-renovasi-kamar-mandi-hotel.html": "Jasa Renovasi Kamar Mandi Hotel",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/p/jasa-renovasi-koridor-hotel.html": "Jasa Renovasi Koridor Hotel"  // TYPE: MONEY_MASTER
};

// ============================================================
// JASA RENOVASI INTERIOR TOKO - TURUNAN (SUB-VARIANT)
// Parent: Jasa Renovasi Interior Toko
// ============================================================

const urlMappingPerbaikanInteriorToko = {
  // 🧠 TYPE: MONEY_MASTER (WAJIB tampil, parent: VARIANT)
  // Breadcrumb: Home > Jasa Renovasi > Jasa Renovasi Interior > Jasa Renovasi Interior Toko > [Nama Item]
  "https://www.betonjayareadymix.com/p/jasa-renovasi-interior-mini-market.html": "Jasa Renovasi Interior Mini Market",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/p/jasa-renovasi-interior-butik.html": "Jasa Renovasi Interior Butik",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/p/jasa-renovasi-interior-gerai-kuliner.html": "Jasa Renovasi Interior Gerai Kuliner",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/p/jasa-renovasi-interior-etalase-toko.html": "Jasa Renovasi Interior Etalase Toko",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/p/jasa-renovasi-interior-gerai-waralaba.html": "Jasa Renovasi Interior Gerai Waralaba"  // TYPE: MONEY_MASTER
};

// ============================================================
// JASA RENOVASI INTERIOR CUSTOM - TURUNAN (SUB-VARIANT)
// Parent: Jasa Renovasi Interior Custom
// ============================================================

const urlMappingPerbaikanInteriorCustom = {
  // 🧠 TYPE: MONEY_MASTER (WAJIB tampil, parent: VARIANT)
  // Breadcrumb: Home > Jasa Renovasi > Jasa Renovasi Interior > Jasa Renovasi Interior Custom > [Nama Item]
  "https://www.betonjayareadymix.com/p/jasa-renovasi-interior-custom-rumah.html": "Jasa Renovasi Interior Custom Rumah",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/p/jasa-renovasi-interior-custom-kantor.html": "Jasa Renovasi Interior Custom Kantor",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/p/jasa-renovasi-interior-custom-apartemen.html": "Jasa Renovasi Interior Custom Apartemen",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/p/jasa-renovasi-interior-custom-toko.html": "Jasa Renovasi Interior Custom Toko",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/p/jasa-renovasi-interior-custom-hotel.html": "Jasa Renovasi Interior Custom Hotel",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/p/jasa-renovasi-interior-custom-cafe.html": "Jasa Renovasi Interior Custom Cafe"  // TYPE: MONEY_MASTER
};

// ============================================================
// JASA RENOVASI INTERIOR RUANGAN - TURUNAN (SUB-VARIANT)
// Parent: Jasa Renovasi Interior Ruangan
// ============================================================

const urlMappingPerbaikanInteriorRuangan = {
  // 🧠 TYPE: MONEY_MASTER (WAJIB tampil, parent: VARIANT)
  // Breadcrumb: Home > Jasa Renovasi > Jasa Renovasi Interior > Jasa Renovasi Interior Ruangan > [Nama Item]
  "https://www.betonjayareadymix.com/p/jasa-renovasi-interior-ruang-tamu.html": "Jasa Renovasi Interior Ruang Tamu",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/p/jasa-renovasi-interior-dapur.html": "Jasa Renovasi Interior Dapur",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/p/jasa-renovasi-interior-kamar-tidur.html": "Jasa Renovasi Interior Kamar Tidur",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/p/jasa-renovasi-interior-kamar-mandi.html": "Jasa Renovasi Interior Kamar Mandi",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/p/jasa-renovasi-interior-ruang-kerja.html": "Jasa Renovasi Interior Ruang Kerja",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/p/jasa-renovasi-interior-ruang-keluarga.html": "Jasa Renovasi Interior Ruang Keluarga"  // TYPE: MONEY_MASTER
};

// Menyimpan elemen yang dihapus dalam variabel
let removedElementsJasaPerbaikanKons1 = {};
function removeCondition1(conditionId) {
    const conditionElement1 = document.getElementById(conditionId);

    if (conditionElement1) {
        // Menyimpan elemen yang dihapus dalam objek untuk bisa dikembalikan
        removedElementsJasaPerbaikanKons1[conditionId] = conditionElement1;
        conditionElement1.remove(); // Menghapus elemen tersebut
    }
}

// Fungsi untuk mengembalikan elemen yang telah dihapus
function restoreCondition1(conditionId) {
    const breadcrumb1 = document.querySelector('.breadcrumb');
    const elementToRestore1 = removedElementsJasaPerbaikanKons1[conditionId]; // Mendapatkan elemen yang disimpan

    if (elementToRestore1) {
        breadcrumb1.appendChild(elementToRestore); // Menambahkan elemen kembali ke dalam breadcrumb
        delete removedElementsJasaPerbaikanKons1[conditionId]; // Menghapus elemen dari objek setelah dikembalikan
    } else {
        console.log(`Elemen dengan ID ${conditionId} tidak ditemukan di removedElementsJasaPerbaikanKons1.`);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    // var currentUrl = window.location.href;
     //const cleanUrl = currentUrl.split('?')[0]; // Menghapus parameter seperti ?m=1
    const cleanUrlJasaPerbaikanKonsSub = window.location.href.split(/[?#]/)[0]; // Menghilangkan parameter seperti ?m=1

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
		urlMappingPerbaikanStruktur,
		urlMappingPerbaikanStrukturKolomBalok,
		urlMappingPerbaikanStrukturPondasi,
		urlMappingPerbaikanStrukturLantai,
		urlMappingPerbaikanStrukturDinding,
		//urlMappingPerbaikanStrukturBangunan,
		urlMappingRehabilitasiBeton,
                urlMappingPerbaikanStrukturAtap,
                urlMappingPerbaikanInfrastruktur,
                urlMappingPerbaikanInfrastrukturJalan,
                urlMappingPerbaikanInfrastrukturTrotoar,
                urlMappingPerbaikanInfrastrukturJembatan,
                urlMappingPerbaikanInfrastrukturSaluran,
                urlMappingPerbaikanFasadEksterior,
                urlMappingPerbaikanFasadEksteriorFasad,
                //urlMappingPerbaikanFasadEksteriorEksterior,
                urlMappingPerbaikanFasadEksteriorArsitektur,
                urlMappingRenovasiBangunan,
                urlMappingRenovasiBangunanIbadah,
                urlMappingRenovasiBangunanPabrik,
                urlMappingRenovasiBangunanRumah,
                urlMappingRenovasiBangunanKantor,
                urlMappingRenovasiBangunanGedung,
		urlMappingRenovasiBangunanGudang,
		urlMappingRenovasiBangunanHotel,
		urlMappingPerbaikanFasilitasUmum,
		urlMappingPerbaikanFasilitasUmumTaman,
		urlMappingPerbaikanFasilitasUmumSekolah,
		urlMappingPerbaikanFasilitasIbadah,
		urlMappingPerbaikanFasilitasUmumTerminal,
		urlMappingPerbaikanFasilitasUmumHalte,
		urlMappingPerbaikanInterior,
		urlMappingPerbaikanInteriorRumah,
		urlMappingPerbaikanInteriorKantor,
		urlMappingPerbaikanInteriorApartemen,
		urlMappingPerbaikanInteriorHotel,
		urlMappingPerbaikanInteriorToko,
		urlMappingPerbaikanInteriorCustom,
		urlMappingPerbaikanInteriorRuangan
		
    );

    // --- validasi URL terdaftar ---
    if (!urlMappingGabungan[cleanUrlJasaPerbaikanKonsSub]) {
      console.log(`[HybridDateModified] URL tidak terdaftar: ${cleanUrlJasaPerbaikanKonsSub}`);
      return;
    }

  // === Tanggal nextUpdate1 global ===
		const globalNextUpdate1 = "2026-02-01T00:00:00.000Z";
	console.log(`🌐 [AutoMeta] Detected jasa-konstruksi-perbaikan: ${cleanUrlJasaPerbaikanKonsSub}`);

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

    const hash = stableHash(cleanUrlJasaPerbaikanKonsSub);
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
	
	console.log("✅ AEDMetaDates updated jasa-konstruksi-perbaikan:", window.AEDMetaDates);  
    console.log(`✅ [HybridDateModified v2.5] ${cleanUrlJasaPerbaikanKonsSub} → ${isoDate} | type=${type || "-"}`);

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
		urlMappingPerbaikanKebocoranWaterproofing,
urlMappingPerbaikanElemenArsitektural,
urlMappingPerbaikanAtapDrainaseBangunan,
		urlMappingPerbaikanStruktur,
        urlMappingPerbaikanStrukturGedungBertingkat,
		urlMappingPerbaikanStrukturBangunanTua,
		urlMappingPerbaikanStrukturBangunanMiring,
		urlMappingPerbaikanStrukturKolomBalok,
		urlMappingPerbaikanStrukturPondasi,
		urlMappingPerbaikanStrukturLantai,
		urlMappingPerbaikanStrukturDinding,
		//urlMappingPerbaikanStrukturBangunan,
		//urlMappingRehabilitasiBeton,
		urlMappingRehabilitasiBeton,
                urlMappingPerbaikanStrukturAtap,
               // urlMappingPerbaikanInfrastruktur,
                urlMappingPerbaikanInfrastrukturJalan,
                urlMappingPerbaikanInfrastrukturTrotoar,
                urlMappingPerbaikanInfrastrukturJembatan,
                urlMappingPerbaikanInfrastrukturSaluran,
                urlMappingPerbaikanFasadEksterior,
                urlMappingPerbaikanFasadEksteriorFasad,
                //urlMappingPerbaikanFasadEksteriorEksterior,
                urlMappingPerbaikanFasadEksteriorArsitektur,
                urlMappingRenovasiBangunan,
                urlMappingRenovasiBangunanIbadah,
                urlMappingRenovasiBangunanPabrik,
                urlMappingRenovasiBangunanRumah,
                urlMappingRenovasiBangunanKantor,
                urlMappingRenovasiBangunanGedung,
		urlMappingRenovasiBangunanGudang,
		urlMappingRenovasiBangunanHotel,
		urlMappingPerbaikanFasilitasUmum,
		urlMappingPerbaikanFasilitasUmumTaman,
		urlMappingPerbaikanFasilitasUmumSekolah,
		urlMappingPerbaikanFasilitasIbadah,
		urlMappingPerbaikanFasilitasUmumTerminal,
		urlMappingPerbaikanFasilitasUmumHalte,
		urlMappingPerbaikanInterior,
		urlMappingPerbaikanInteriorRumah,
		urlMappingPerbaikanInteriorKantor,
		urlMappingPerbaikanInteriorApartemen,
		urlMappingPerbaikanInteriorHotel,
		urlMappingPerbaikanInteriorToko,
		urlMappingPerbaikanInteriorCustom,
		urlMappingPerbaikanInteriorRuangan
		
    );

    // --- validasi URL terdaftar ---
    if (!urlMappingGabungan[cleanUrlJasaPerbaikanKonsSub]) {
      console.log(`[HybridDateModified] URL tidak terdaftar: ${cleanUrlJasaPerbaikanKonsSub}`);
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
		    await loadEvergreenScript("2026-01-05T10:30:00+07:00");
		
		    // ✔ AUTO MODE
		    // await loadEvergreenScript();
		
		  } catch (err) {
		    console.error("[HybridDateModified] Fatal:", err);
		  }
		})();

     // Menemukan elemen menggunakan Id
    //var JasaKonsPerbaikan = document.getElementById("JasaKonsPerbaikan");
var JasaKonsPerbaikan = document.getElementById("JasaKonsPerbaikan");

if (!JasaKonsPerbaikan) {
console.error("elemen Id JasaKonsPerbaikan kondisi terhapus");
        return;
}
if (!JasaKonsPerbaikan) {
     console.error("elemen Id JasaKonsPerbaikan kondisi terhapus");	
} else {
	
     var JasaKonstruksiPerbaikanLinkSub = document.getElementById("JasaKonstruksiPerbaikanSub");
     var JasaRenovasiPerbaikanLinkSub = document.getElementById("JasaRenovasiPerbaikanSub");
	
     //SUB JasaRenovasiPerbaikan
     var JasaRenovasiPerbaikanStrukturLink = document.getElementById("JasaRenovasiPerbaikanStruktur");
	 var JasaPerbaikanKebocoranWaterproofingLink = document.getElementById("JasaPerbaikanKebocoranWaterproofing");
     var JasaPerbaikanElemenArsitekturalBangunanLink = document.getElementById("JasaPerbaikanElemenArsitekturalBangunan");
      var JasaPerbaikanAtapDrainaseBangunanLink = document.getElementById("JasaPerbaikanAtapDrainaseBangunan");
	
     var JasaRenovasiPerbaikanInfrastrukturLink = document.getElementById("JasaRenovasiPerbaikanInfrastruktur");
     var JasaRenovasiPerbaikanBangunanLink = document.getElementById("JasaRenovasiPerbaikanBangunan");
      var JasaRenovasiPerbaikanFasilitasLink = document.getElementById("JasaRenovasiPerbaikanFasilitas");
     var JasaRenovasiPerbaikanInteriorLink = document.getElementById("JasaRenovasiPerbaikanInterior");
     var JasaRenovasiPerbaikanFasadLink = document.getElementById("JasaRenovasiPerbaikanFasad");

     //SUB JasaRenovasiPerbaikanStruktur
	var JasaRenovasiPerbaikanPerawatanPerbaikanBangunanLink = document.getElementById("JasaRenovasiPerbaikanPerawatanPerbaikanBangunan");
     var JasaPerbaikanStrukturBetonLink = document.getElementById("JasaPerbaikanStrukturBeton");
     var JasaRenovasiPerbaikanStrukturKolomBalokLink = document.getElementById("JasaRenovasiPerbaikanStrukturKolomBalok");
     var JasaRenovasiPerbaikanStrukturPondasiLink = document.getElementById("JasaRenovasiPerbaikanStrukturPondasi");
      var JasaRenovasiPerbaikanStrukturLantaiLink = document.getElementById("JasaRenovasiPerbaikanStrukturLantai");
     var JasaRenovasiPerbaikanStrukturDindingLink = document.getElementById("JasaRenovasiPerbaikanStrukturDinding");
	
    var JasaPerbaikanGedungBertingkatLink = document.getElementById("JasaPerbaikanGedungBertingkat");
	var JasaPerbaikanStrukturBangunanTuaLink = document.getElementById("JasaPerbaikanStrukturBangunanTua");
	var JasaPerbaikanStrukturBangunanMiringLink = document.getElementById("JasaPerbaikanStrukturBangunanMiring");
	
     var JasaRenovasiPerbaikanStrukturAtapLink = document.getElementById("JasaRenovasiPerbaikanStrukturAtap");
     var JasaRenovasiPerbaikanRehabilitasiBetonLink = document.getElementById("JasaRenovasiPerbaikanRehabilitasiBeton");
	

     //SUB JasaRenovasiPerbaikanInfrastruktur
     var JasaRenovasiPerbaikanInfrastrukturJalanLink = document.getElementById("JasaRenovasiPerbaikanInfrastrukturJalan");
     var JasaRenovasiPerbaikanInfrastrukturTrotoarLink = document.getElementById("JasaRenovasiPerbaikanInfrastrukturTrotoar");
     var JasaRenovasiPerbaikanInfrastrukturJembatanLink = document.getElementById("JasaRenovasiPerbaikanInfrastrukturJembatan");
     var JasaRenovasiPerbaikanInfrastrukturSaluranLink = document.getElementById("JasaRenovasiPerbaikanInfrastrukturSaluran");

      //SUB JasaRenovasiPerbaikanBangunan
     var JasaRenovasiPerbaikanBangunanRumahLink = document.getElementById("JasaRenovasiPerbaikanBangunanRumah");
     var JasaRenovasiPerbaikanBangunanKantorLink = document.getElementById("JasaRenovasiPerbaikanBangunanKantor");
     var JasaRenovasiPerbaikanBangunanPabrikLink = document.getElementById("JasaRenovasiPerbaikanBangunanPabrik");
     var JasaRenovasiPerbaikanBangunanGedungLink = document.getElementById("JasaRenovasiPerbaikanBangunanGedung");
     var JasaRenovasiPerbaikanBangunanGudangLink = document.getElementById("JasaRenovasiPerbaikanBangunanGudang");
     var JasaRenovasiPerbaikanBangunanHotelLink = document.getElementById("JasaRenovasiPerbaikanBangunanHotel");
	
 //SUB JasaRenovasiPerbaikanInterior
     var JasaRenovasiInteriorRumahLink = document.getElementById("JasaRenovasiInteriorRumah");
     var JasaRenovasiInteriorKantorLink = document.getElementById("JasaRenovasiInteriorKantor");
     var JasaRenovasiInteriorApartemenLink = document.getElementById("JasaRenovasiInteriorApartemen");
     var JasaRenovasiInteriorHotelLink = document.getElementById("JasaRenovasiInteriorHotel");
     var JasaRenovasiInteriorTokoLink = document.getElementById("JasaRenovasiInteriorToko");
     var JasaRenovasiInteriorCustomLink = document.getElementById("JasaRenovasiInteriorCustom");
     var JasaRenovasiInteriorRuanganLink = document.getElementById("JasaRenovasiInteriorRuangan");
	
//SUB JasaRenovasiPerbaikanFasad
     var JasaRenovasiFasadBangunanLink = document.getElementById("JasaRenovasiFasadBangunan");
     var JasaRenovasiEksteriorBangunanLink = document.getElementById("JasaRenovasiEksteriorBangunan");
     var JasaPerbaikanArsitekturEksteriorLink = document.getElementById("JasaPerbaikanArsitekturEksterior");

 //SUB JasaRenovasiPerbaikanFasilitas
     var JasaRenovasiPerbaikanStadionOlahragaLink = document.getElementById("JasaRenovasiPerbaikanStadionOlahraga");
     var JasaRenovasiPerbaikanSekolahLink = document.getElementById("JasaRenovasiPerbaikanSekolah");
     var JasaRenovasiPerbaikanRumahSakitLink = document.getElementById("JasaRenovasiPerbaikanRumahSakit");
     var JasaRenovasiPerbaikanTempatIbadahLink = document.getElementById("JasaRenovasiPerbaikanTempatIbadah");
     var JasaRenovasiPerbaikanTerminalLink = document.getElementById("JasaRenovasiPerbaikanTerminal");
     var JasaRenovasiPerbaikanHalteLink = document.getElementById("JasaRenovasiPerbaikanHalte");
     var JasaRenovasiPerbaikanTamanKotaLink = document.getElementById("JasaRenovasiPerbaikanTamanKota");

     //NAMA DEFAULT HALAMAN BUAT SEMUA
     var pageNameKonstruksiPerbaikan1 = document.getElementById("pageNameKonstruksiPerbaikan1");
    
     // Default untuk menyembunyikan elemen
     JasaKonstruksiPerbaikanLinkSub.style.visibility = 'hidden';
     JasaRenovasiPerbaikanLinkSub.style.visibility = 'hidden';
	
     //Hide Sub JasaRenovasiPerbaikan
	JasaRenovasiPerbaikanPerawatanPerbaikanBangunanLink.style.visibility = 'hidden';
     JasaRenovasiPerbaikanStrukturLink.style.visibility = 'hidden';
	JasaPerbaikanKebocoranWaterproofingLink.style.visibility = 'hidden';
JasaPerbaikanElemenArsitekturalBangunanLink.style.visibility = 'hidden';
JasaPerbaikanAtapDrainaseBangunanLink.style.visibility = 'hidden';
	
     JasaRenovasiPerbaikanInfrastrukturLink.style.visibility = 'hidden';
     JasaRenovasiPerbaikanBangunanLink.style.visibility = 'hidden';
     JasaRenovasiPerbaikanInteriorLink.style.visibility = 'hidden';
     JasaRenovasiPerbaikanFasadLink.style.visibility = 'hidden';
     JasaRenovasiPerbaikanFasilitasLink.style.visibility = 'hidden';

    //Hide SUB JasaRenovasiPerbaikanStruktur
     JasaPerbaikanStrukturBetonLink.style.visibility = 'hidden';
     JasaRenovasiPerbaikanStrukturKolomBalokLink.style.visibility = 'hidden';
     JasaRenovasiPerbaikanStrukturPondasiLink.style.visibility = 'hidden';
     JasaRenovasiPerbaikanStrukturLantaiLink.style.visibility = 'hidden';
     JasaRenovasiPerbaikanStrukturDindingLink.style.visibility = 'hidden';
	
	JasaPerbaikanGedungBertingkatLink.style.visibility = 'hidden';
	JasaPerbaikanStrukturBangunanTuaLink.style.visibility = 'hidden';
	JasaPerbaikanStrukturBangunanMiringLink.style.visibility = 'hidden';
	
     JasaRenovasiPerbaikanStrukturAtapLink.style.visibility = 'hidden';

     //Hide SUB JasaRenovasiPerbaikanInfrastruktur
     JasaRenovasiPerbaikanInfrastrukturJalanLink.style.visibility = 'hidden';
     JasaRenovasiPerbaikanInfrastrukturJembatanLink.style.visibility = 'hidden';
     JasaRenovasiPerbaikanInfrastrukturSaluranLink.style.visibility = 'hidden';
     JasaRenovasiPerbaikanInfrastrukturTrotoarLink.style.visibility = 'hidden';

 	// Hide SUB JasaRenovasiPerbaikanBangunan
     JasaRenovasiPerbaikanBangunanRumahLink.style.visibility = 'hidden';
     JasaRenovasiPerbaikanBangunanKantorLink.style.visibility = 'hidden';
     JasaRenovasiPerbaikanBangunanPabrikLink.style.visibility = 'hidden';
     JasaRenovasiPerbaikanBangunanGedungLink.style.visibility = 'hidden';
     JasaRenovasiPerbaikanBangunanGudangLink.style.visibility = 'hidden';
     JasaRenovasiPerbaikanBangunanHotelLink.style.visibility = 'hidden';

	//Hide SUB JasaRenovasiPerbaikanInterior
     JasaRenovasiInteriorRumahLink.style.visibility = 'hidden';
     JasaRenovasiInteriorKantorLink.style.visibility = 'hidden';
     JasaRenovasiInteriorApartemenLink.style.visibility = 'hidden';
     JasaRenovasiInteriorHotelLink.style.visibility = 'hidden';
     JasaRenovasiInteriorTokoLink.style.visibility = 'hidden';
     JasaRenovasiInteriorCustomLink.style.visibility = 'hidden';
     JasaRenovasiInteriorRuanganLink.style.visibility = 'hidden';

 //Hide SUB JasaRenovasiPerbaikanBangunan
     JasaRenovasiFasadBangunanLink.style.visibility = 'hidden';
     JasaRenovasiEksteriorBangunanLink.style.visibility = 'hidden';
     JasaPerbaikanArsitekturEksteriorLink.style.visibility = 'hidden';


	//Hide SUB JasaRenovasiPerbaikanFasilitas
     JasaRenovasiPerbaikanStadionOlahragaLink.style.visibility = 'hidden';
     JasaRenovasiPerbaikanSekolahLink.style.visibility = 'hidden';
     JasaRenovasiPerbaikanRumahSakitLink.style.visibility = 'hidden';
     JasaRenovasiPerbaikanTempatIbadahLink.style.visibility = 'hidden';
     JasaRenovasiPerbaikanTerminalLink.style.visibility = 'hidden';
     JasaRenovasiPerbaikanHalteLink.style.visibility = 'hidden';
     JasaRenovasiPerbaikanTamanKotaLink.style.visibility = 'hidden';

	
     //NAMA DEFAULT BUAT SEMUA DI KOSONGKAN DULU
     pageNameKonstruksiPerbaikan1.textContent = "";

	
    //Sub JasaRenovasiPerbaikan 

   if (urlMappingPerbaikanStruktur[cleanUrlJasaPerbaikanKonsSub]) {
        restoreCondition1('JasaKonsPerbaikan');
	   restoreCondition1('JasaRenovasiPerbaikanPerawatanPerbaikanBangunan');
	   removeCondition1('JasaRenovasiPerbaikanSub');
	   
	   removeCondition1('JasaPerbaikanElemenArsitekturalBangunan');
	   removeCondition1('JasaPerbaikanAtapDrainaseBangunan');
	   removeCondition1('JasaPerbaikanKebocoranWaterproofing');
	   
        restoreCondition1('JasaRenovasiPerbaikanStruktur');
           // hapus elemen id DIV Lain
	removeCondition1('ProdukInFur');
        removeCondition1('MaterialKons');
	removeCondition1('ProdukKons');
       //removeCondition1('ProdukKonsSaluran');
        //removeCondition1('ProdukKonsPembatas');
        removeCondition1('JasaKonsPembatas');
        removeCondition1('JasaKonsJalanPerkerasan');
        removeCondition1('JasaKonsPondasiTanah');
	removeCondition1('JasaKons');
	removeCondition1('JasaKonsSub');
	removeCondition1('MenuKons');
	removeCondition1('JasaKonsFinishing');
        removeCondition1('JasaKonsStruktur');
	   
	
	// hapus elemen id Sub JasaRenovasiPerbaikan yang lain
        removeCondition1('JasaRenovasiPerbaikanInfrastruktur');
        removeCondition1('JasaRenovasiPerbaikanBangunan');
        removeCondition1('JasaRenovasiPerbaikanInterior');
	removeCondition1('JasaRenovasiPerbaikanFasad');
	removeCondition1('JasaRenovasiPerbaikanFasilitas');

	// hapus elemen id Semua Sub JasaRenovasiPerbaikanStruktur
	removeCondition1('JasaPerbaikanStrukturBeton');
				removeCondition1('JasaPerbaikanGedungBertingkat');
			removeCondition1('JasaPerbaikanStrukturBangunanTua');
			removeCondition1('JasaPerbaikanStrukturBangunanMiring');
	removeCondition1('JasaRenovasiPerbaikanStrukturKolomBalok');
        removeCondition1('JasaRenovasiPerbaikanStrukturPondasi');
        removeCondition1('JasaRenovasiPerbaikanStrukturLantai');
	removeCondition1('JasaRenovasiPerbaikanStrukturDinding');
	removeCondition1('JasaRenovasiPerbaikanStrukturAtap');
	removeCondition1('JasaRenovasiPerbaikanRehabilitasiBeton');
       
        // hapus elemen id Semua Sub JasaRenovasiPerbaikanInfrastruktur
        removeCondition1('JasaRenovasiPerbaikanInfrastrukturJalan');
        removeCondition1('JasaRenovasiPerbaikanInfrastrukturJembatan');
        removeCondition1('JasaRenovasiPerbaikanInfrastrukturSaluran');
        removeCondition1('JasaRenovasiPerbaikanInfrastrukturTrotoar');

       // hapus elemen id Semua Sub JasaRenovasiPerbaikanBangunan
        removeCondition1('JasaRenovasiPerbaikanBangunanRumah');
        removeCondition1('JasaRenovasiPerbaikanBangunanKantor');
        removeCondition1('JasaRenovasiPerbaikanBangunanPabrik');
        removeCondition1('JasaRenovasiPerbaikanBangunanGedung');
        removeCondition1('JasaRenovasiPerbaikanBangunanGudang');
        removeCondition1('JasaRenovasiPerbaikanBangunanHotel');

	 // hapus elemen id Semua Sub JasaRenovasiPerbaikanInterior
        removeCondition1('JasaRenovasiInteriorRumah');
        removeCondition1('JasaRenovasiInteriorKantor');
        removeCondition1('JasaRenovasiInteriorApartemen');
        removeCondition1('JasaRenovasiInteriorHotel');
        removeCondition1('JasaRenovasiInteriorToko');
        removeCondition1('JasaRenovasiInteriorCustom');
        removeCondition1('JasaRenovasiInteriorRuangan');
	   
       // hapus elemen id Semua Sub JasaRenovasiPerbaikanFasadEksterior
        removeCondition1('JasaRenovasiFasadBangunan');
        removeCondition1('JasaRenovasiEksteriorBangunan');
        removeCondition1('JasaPerbaikanArsitekturEksterior');

	// hapus elemen id Semua Sub JasaRenovasiPerbaikanFasilitas
        removeCondition1('JasaRenovasiPerbaikanStadionOlahraga');
        removeCondition1('JasaRenovasiPerbaikanSekolah');
        removeCondition1('JasaRenovasiPerbaikanRumahSakit');
        removeCondition1('JasaRenovasiPerbaikanTempatIbadah');
        removeCondition1('JasaRenovasiPerbaikanTerminal');
        removeCondition1('JasaRenovasiPerbaikanHalte');
        removeCondition1('JasaRenovasiPerbaikanTamanKota');
	   
        JasaKonstruksiPerbaikanLinkSub.style.visibility = 'visible';
        //JasaRenovasiPerbaikanLinkSub.style.visibility = 'visible';
	    JasaRenovasiPerbaikanPerawatanPerbaikanBangunanLink.style.visibility = 'visible';
        JasaRenovasiPerbaikanStrukturLink.style.visibility = 'visible';
        pageNameKonstruksiPerbaikan1.textContent = urlMappingPerbaikanStruktur[cleanUrlJasaPerbaikanKonsSub];
    }
	  // ✅ Tambahkan JSON-LD Breadcrumb otomatis
	if (urlMappingPerbaikanStruktur[cleanUrlJasaPerbaikanKonsSub]) {
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
	      "name": "Jasa Perawatan & Perbaikan Bangunan",
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
	      "name": urlMappingPerbaikanStruktur[cleanUrlJasaPerbaikanKonsSub],
	      "item": cleanUrlJasaPerbaikanKonsSub
	   }
	  ]
	};
	
	       const script = document.createElement('script');
	       script.type = 'application/ld+json';
	       script.text = JSON.stringify(jsonLDBreadcrumb);
	       document.head.appendChild(script);
	   }
    //SUB JasaRenovasiPerbaikanStruktur
/* ga perlu
    if (urlMappingPerbaikanStrukturUmum[cleanUrlJasaPerbaikanKonsSub]) {
        restoreCondition1('JasaKonsPerbaikan');
        restoreCondition1('JasaRenovasiPerbaikanStruktur');
        restoreCondition1('JasaPerbaikanStrukturBeton');
	    
           // hapus elemen id DIV Lain
        removeCondition1('MaterialKons');
	removeCondition1('ProdukKons');
        //removeCondition1('ProdukKonsSaluran');
        //removeCondition1('ProdukKonsPembatas');
        removeCondition1('JasaKonsPembatas');
        removeCondition1('JasaKonsJalanPerkerasan');
        removeCondition1('JasaKonsPondasiTanah');
	removeCondition1('JasaKons');
	removeCondition1('JasaKonsSub');
	removeCondition1('MenuKons');
	removeCondition1('JasaKonsFinishing');
        removeCondition1('JasaKonsStruktur');
	
	// hapus elemen id Sub JasaRenovasiPerbaikan Selain 'JasaRenovasiPerbaikanStruktur'
        removeCondition1('JasaRenovasiPerbaikanInfrastruktur');
        removeCondition1('JasaRenovasiPerbaikanBangunan');
        removeCondition1('JasaRenovasiPerbaikanInterior');
	removeCondition1('JasaRenovasiPerbaikanFasad');
	removeCondition1('JasaRenovasiPerbaikanFasilitas');
	       
	// hapus elemen id Semua Sub JasaRenovasiPerbaikanStruktur selain 'JasaPerbaikanStrukturBeton'
        removeCondition1('JasaRenovasiPerbaikanStrukturKolomBalok');
        removeCondition1('JasaRenovasiPerbaikanStrukturPondasi');
        removeCondition1('JasaRenovasiPerbaikanStrukturLantai');
	removeCondition1('JasaRenovasiPerbaikanStrukturDinding');
	removeCondition1('JasaRenovasiPerbaikanStrukturBangunan');
	removeCondition1('JasaRenovasiPerbaikanStrukturAtap');
	removeCondition1('JasaRenovasiPerbaikanRehabilitasiBeton');
	       
       
        // hapus elemen id Semua Sub JasaRenovasiPerbaikanInfrastruktur
        removeCondition1('JasaRenovasiPerbaikanInfrastrukturJalan');
        removeCondition1('JasaRenovasiPerbaikanInfrastrukturJembatan');
        removeCondition1('JasaRenovasiPerbaikanInfrastrukturSaluran');
        removeCondition1('JasaRenovasiPerbaikanInfrastrukturTrotoar');
	       
        // hapus elemen id Semua Sub JasaRenovasiPerbaikanBangunan
        removeCondition1('JasaRenovasiPerbaikanBangunanRumah');
        removeCondition1('JasaRenovasiPerbaikanBangunanKantor');
        removeCondition1('JasaRenovasiPerbaikanBangunanPabrik');
        removeCondition1('JasaRenovasiPerbaikanBangunanGedung');
        removeCondition1('JasaRenovasiPerbaikanBangunanGudang');
        removeCondition1('JasaRenovasiPerbaikanBangunanHotel');

	 // hapus elemen id Semua Sub JasaRenovasiPerbaikanInterior
        removeCondition1('JasaRenovasiInteriorRumah');
        removeCondition1('JasaRenovasiInteriorKantor');
        removeCondition1('JasaRenovasiInteriorApartemen');
        removeCondition1('JasaRenovasiInteriorHotel');
        removeCondition1('JasaRenovasiInteriorToko');
        removeCondition1('JasaRenovasiInteriorCustom');
        removeCondition1('JasaRenovasiInteriorRuangan');
	       
       // hapus elemen id Semua Sub JasaRenovasiPerbaikanFasadEksterior
        removeCondition1('JasaRenovasiFasadBangunan');
        removeCondition1('JasaRenovasiEksteriorBangunan');
        removeCondition1('JasaPerbaikanArsitekturEksterior');

	// hapus elemen id Semua Sub JasaRenovasiPerbaikanFasilitas
        removeCondition1('JasaRenovasiPerbaikanStadionOlahraga');
        removeCondition1('JasaRenovasiPerbaikanSekolah');
        removeCondition1('JasaRenovasiPerbaikanRumahSakit');
        removeCondition1('JasaRenovasiPerbaikanTempatIbadah');
        removeCondition1('JasaRenovasiPerbaikanTerminal');
        removeCondition1('JasaRenovasiPerbaikanHalte');
        removeCondition1('JasaRenovasiPerbaikanTamanKota');
	
       
	JasaKonstruksiPerbaikanLinkSub.style.visibility = 'visible';
        JasaRenovasiPerbaikanLinkSub.style.visibility = 'visible';
        JasaRenovasiPerbaikanStrukturLink.style.visibility = 'visible';
	//tampilkan menu JasaPerbaikanStrukturBeton
	JasaPerbaikanStrukturBetonLink.style.visibility = 'visible';
        pageNameKonstruksiPerbaikan1.textContent = urlMappingPerbaikanStrukturUmum[cleanUrlJasaPerbaikanKonsSub];
    }
    */

   if (urlMappingPerbaikanStrukturGedungBertingkat[cleanUrlJasaPerbaikanKonsSub]) {
        restoreCondition1('JasaKonsPerbaikan');
	   	restoreCondition1('JasaRenovasiPerbaikanPerawatanPerbaikanBangunan');
	   removeCondition1('JasaRenovasiPerbaikanSub');
	   			
	   removeCondition1('JasaPerbaikanElemenArsitekturalBangunan');
	   removeCondition1('JasaPerbaikanAtapDrainaseBangunan');
	   removeCondition1('JasaPerbaikanKebocoranWaterproofing');
        restoreCondition1('JasaRenovasiPerbaikanStruktur');
        restoreCondition1('JasaPerbaikanGedungBertingkat');
	    
           // hapus elemen id DIV Lain
	removeCondition1('ProdukInFur');
        removeCondition1('MaterialKons');
	removeCondition1('ProdukKons');
        //removeCondition1('ProdukKonsSaluran');
        //removeCondition1('ProdukKonsPembatas');
        removeCondition1('JasaKonsPembatas');
        removeCondition1('JasaKonsJalanPerkerasan');
        removeCondition1('JasaKonsPondasiTanah');
	removeCondition1('JasaKons');
	removeCondition1('JasaKonsSub');
	removeCondition1('MenuKons');
	removeCondition1('JasaKonsFinishing');
        removeCondition1('JasaKonsStruktur');
	
	// hapus elemen id Sub JasaRenovasiPerbaikan Selain 'JasaRenovasiPerbaikanStruktur'
        removeCondition1('JasaRenovasiPerbaikanInfrastruktur');
        removeCondition1('JasaRenovasiPerbaikanBangunan');
        removeCondition1('JasaRenovasiPerbaikanInterior');
	removeCondition1('JasaRenovasiPerbaikanFasad');
	removeCondition1('JasaRenovasiPerbaikanFasilitas');
	       
	// hapus elemen id Semua Sub JasaRenovasiPerbaikanStruktur selain 'JasaRenovasiPerbaikanStrukturBangunan'
	   removeCondition1('JasaPerbaikanStrukturBangunanTua');
	   removeCondition1('JasaPerbaikanStrukturBangunanMiring');
	 
        removeCondition1('JasaPerbaikanStrukturBeton');
        removeCondition1('JasaRenovasiPerbaikanStrukturPondasi');
        removeCondition1('JasaRenovasiPerbaikanStrukturLantai');
	removeCondition1('JasaRenovasiPerbaikanStrukturDinding');
	removeCondition1('JasaRenovasiPerbaikanStrukturKolomBalok');
	removeCondition1('JasaRenovasiPerbaikanStrukturAtap');
	removeCondition1('JasaRenovasiPerbaikanRehabilitasiBeton');
       
        // hapus elemen id Semua Sub JasaRenovasiPerbaikanInfrastruktur
        removeCondition1('JasaRenovasiPerbaikanInfrastrukturJalan');
        removeCondition1('JasaRenovasiPerbaikanInfrastrukturJembatan');
        removeCondition1('JasaRenovasiPerbaikanInfrastrukturSaluran');
        removeCondition1('JasaRenovasiPerbaikanInfrastrukturTrotoar');

	// hapus elemen id Semua Sub JasaRenovasiPerbaikanBangunan
        removeCondition1('JasaRenovasiPerbaikanBangunanRumah');
        removeCondition1('JasaRenovasiPerbaikanBangunanKantor');
        removeCondition1('JasaRenovasiPerbaikanBangunanPabrik');
        removeCondition1('JasaRenovasiPerbaikanBangunanGedung');
        removeCondition1('JasaRenovasiPerbaikanBangunanGudang');
        removeCondition1('JasaRenovasiPerbaikanBangunanHotel');

	 // hapus elemen id Semua Sub JasaRenovasiPerbaikanInterior
        removeCondition1('JasaRenovasiInteriorRumah');
        removeCondition1('JasaRenovasiInteriorKantor');
        removeCondition1('JasaRenovasiInteriorApartemen');
        removeCondition1('JasaRenovasiInteriorHotel');
        removeCondition1('JasaRenovasiInteriorToko');
        removeCondition1('JasaRenovasiInteriorCustom');
        removeCondition1('JasaRenovasiInteriorRuangan');
	    
       // hapus elemen id Semua Sub JasaRenovasiPerbaikanFasadEksterior
        removeCondition1('JasaRenovasiFasadBangunan');
        removeCondition1('JasaRenovasiEksteriorBangunan');
        removeCondition1('JasaPerbaikanArsitekturEksterior');

	// hapus elemen id Semua Sub JasaRenovasiPerbaikanFasilitas
        removeCondition1('JasaRenovasiPerbaikanStadionOlahraga');
        removeCondition1('JasaRenovasiPerbaikanSekolah');
        removeCondition1('JasaRenovasiPerbaikanRumahSakit');
        removeCondition1('JasaRenovasiPerbaikanTempatIbadah');
        removeCondition1('JasaRenovasiPerbaikanTerminal');
        removeCondition1('JasaRenovasiPerbaikanHalte');
        removeCondition1('JasaRenovasiPerbaikanTamanKota');
       
	JasaKonstruksiPerbaikanLinkSub.style.visibility = 'visible';
        //JasaRenovasiPerbaikanLinkSub.style.visibility = 'visible';
	   JasaRenovasiPerbaikanPerawatanPerbaikanBangunanLink.style.visibility = 'visible';
        JasaRenovasiPerbaikanStrukturLink.style.visibility = 'visible';
	//tampilkan menu JasaRenovasiPerbaikanStrukturBangunan
	    JasaRenovasiPerbaikanStrukturGedungBertingkatLink.style.visibility = 'visible';
        pageNameKonstruksiPerbaikan1.textContent = urlMappingPerbaikanStrukturGedungBertingkat[cleanUrlJasaPerbaikanKonsSub];    
    }
    
    	  // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingPerbaikanStrukturGedungBertingkat[cleanUrlJasaPerbaikanKonsSub]) {
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
	      "name": "Jasa Perawatan & Perbaikan Bangunan",
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
	      "name": "Jasa Perbaikan Gedung Bertingkat",
	      "item": "https://www.betonjayareadymix.com/p/jasa-perbaikan-gedung-bertingkat.html"
	    },
	  {
	    "@type": "ListItem",
	     "position": 6,
	      "name": urlMappingPerbaikanStrukturGedungBertingkat[cleanUrlJasaPerbaikanKonsSub],
	      "item": cleanUrlJasaPerbaikanKonsSub
	   }
	  ]
	};
	       const script = document.createElement('script');
	       script.type = 'application/ld+json';
	       script.text = JSON.stringify(jsonLDBreadcrumb);
	       document.head.appendChild(script);
     }

   if (urlMappingPerbaikanStrukturBangunanMiring[cleanUrlJasaPerbaikanKonsSub]) {
        restoreCondition1('JasaKonsPerbaikan');
	   restoreCondition1('JasaRenovasiPerbaikanPerawatanPerbaikanBangunan');
	   removeCondition1('JasaRenovasiPerbaikanSub');
	   
	   removeCondition1('JasaPerbaikanElemenArsitekturalBangunan');
	   removeCondition1('JasaPerbaikanAtapDrainaseBangunan');
	   removeCondition1('JasaPerbaikanKebocoranWaterproofing');
	   
        restoreCondition1('JasaRenovasiPerbaikanStruktur');
        restoreCondition1('JasaPerbaikanStrukturBangunanMiring');
	    
           // hapus elemen id DIV Lain
	   removeCondition1('ProdukInFur');
        removeCondition1('MaterialKons');
	    removeCondition1('ProdukKons');
        //removeCondition1('ProdukKonsSaluran');
        //removeCondition1('ProdukKonsPembatas');
        removeCondition1('JasaKonsPembatas');
        removeCondition1('JasaKonsJalanPerkerasan');
        removeCondition1('JasaKonsPondasiTanah');
	removeCondition1('JasaKons');
	removeCondition1('JasaKonsSub');
	removeCondition1('MenuKons');
	removeCondition1('JasaKonsFinishing');
        removeCondition1('JasaKonsStruktur');
	
	// hapus elemen id Sub JasaRenovasiPerbaikan Selain 'JasaRenovasiPerbaikanStruktur'
        removeCondition1('JasaRenovasiPerbaikanInfrastruktur');
        removeCondition1('JasaRenovasiPerbaikanBangunan');
        removeCondition1('JasaRenovasiPerbaikanInterior');
	removeCondition1('JasaRenovasiPerbaikanFasad');
	removeCondition1('JasaRenovasiPerbaikanFasilitas');
	       
	// hapus elemen id Semua Sub JasaRenovasiPerbaikanStruktur selain 'JasaRenovasiPerbaikanStrukturBangunan'
	   removeCondition1('JasaPerbaikanStrukturBangunanTua');
	   removeCondition1('JasaPerbaikanGedungBertingkat');
	 
        removeCondition1('JasaPerbaikanStrukturBeton');
        removeCondition1('JasaRenovasiPerbaikanStrukturPondasi');
        removeCondition1('JasaRenovasiPerbaikanStrukturLantai');
	removeCondition1('JasaRenovasiPerbaikanStrukturDinding');
	removeCondition1('JasaRenovasiPerbaikanStrukturKolomBalok');
	removeCondition1('JasaRenovasiPerbaikanStrukturAtap');
	removeCondition1('JasaRenovasiPerbaikanRehabilitasiBeton');
       
        // hapus elemen id Semua Sub JasaRenovasiPerbaikanInfrastruktur
        removeCondition1('JasaRenovasiPerbaikanInfrastrukturJalan');
        removeCondition1('JasaRenovasiPerbaikanInfrastrukturJembatan');
        removeCondition1('JasaRenovasiPerbaikanInfrastrukturSaluran');
        removeCondition1('JasaRenovasiPerbaikanInfrastrukturTrotoar');

	// hapus elemen id Semua Sub JasaRenovasiPerbaikanBangunan
        removeCondition1('JasaRenovasiPerbaikanBangunanRumah');
        removeCondition1('JasaRenovasiPerbaikanBangunanKantor');
        removeCondition1('JasaRenovasiPerbaikanBangunanPabrik');
        removeCondition1('JasaRenovasiPerbaikanBangunanGedung');
        removeCondition1('JasaRenovasiPerbaikanBangunanGudang');
        removeCondition1('JasaRenovasiPerbaikanBangunanHotel');

	 // hapus elemen id Semua Sub JasaRenovasiPerbaikanInterior
        removeCondition1('JasaRenovasiInteriorRumah');
        removeCondition1('JasaRenovasiInteriorKantor');
        removeCondition1('JasaRenovasiInteriorApartemen');
        removeCondition1('JasaRenovasiInteriorHotel');
        removeCondition1('JasaRenovasiInteriorToko');
        removeCondition1('JasaRenovasiInteriorCustom');
        removeCondition1('JasaRenovasiInteriorRuangan');
	    
       // hapus elemen id Semua Sub JasaRenovasiPerbaikanFasadEksterior
        removeCondition1('JasaRenovasiFasadBangunan');
        removeCondition1('JasaRenovasiEksteriorBangunan');
        removeCondition1('JasaPerbaikanArsitekturEksterior');

	// hapus elemen id Semua Sub JasaRenovasiPerbaikanFasilitas
        removeCondition1('JasaRenovasiPerbaikanStadionOlahraga');
        removeCondition1('JasaRenovasiPerbaikanSekolah');
        removeCondition1('JasaRenovasiPerbaikanRumahSakit');
        removeCondition1('JasaRenovasiPerbaikanTempatIbadah');
        removeCondition1('JasaRenovasiPerbaikanTerminal');
        removeCondition1('JasaRenovasiPerbaikanHalte');
        removeCondition1('JasaRenovasiPerbaikanTamanKota');
       
	JasaKonstruksiPerbaikanLinkSub.style.visibility = 'visible';
        //JasaRenovasiPerbaikanLinkSub.style.visibility = 'visible';
	   JasaRenovasiPerbaikanPerawatanPerbaikanBangunanLink.style.visibility = 'visible';
        JasaRenovasiPerbaikanStrukturLink.style.visibility = 'visible';
	//tampilkan menu JasaRenovasiPerbaikanStrukturBangunan
	  JasaPerbaikanStrukturBangunanMiringLink.style.visibility = 'visible';
      pageNameKonstruksiPerbaikan1.textContent = urlMappingPerbaikanStrukturBangunanMiring[cleanUrlJasaPerbaikanKonsSub];    
    }
    
    	  // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingPerbaikanStrukturBangunanMiring[cleanUrlJasaPerbaikanKonsSub]) {
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
	      "name": "Jasa Perawatan & Perbaikan Bangunan",
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
	      "name": "Jasa Perbaikan Struktur Bangunan Miring",
	      "item": "https://www.betonjayareadymix.com/p/jasa-perbaikan-struktur-bangunan-miring.html"
	    },
	  {
	    "@type": "ListItem",
	     "position": 6,
	      "name": urlMappingPerbaikanStrukturBangunanMiring[cleanUrlJasaPerbaikanKonsSub],
	      "item": cleanUrlJasaPerbaikanKonsSub
	   }
	  ]
	};
	
	       const script = document.createElement('script');
	       script.type = 'application/ld+json';
	       script.text = JSON.stringify(jsonLDBreadcrumb);
	       document.head.appendChild(script);
     }

	 if (urlMappingPerbaikanStrukturBangunanTua[cleanUrlJasaPerbaikanKonsSub]) {
        restoreCondition1('JasaKonsPerbaikan');
		  restoreCondition1('JasaRenovasiPerbaikanPerawatanPerbaikanBangunan');
	   removeCondition1('JasaRenovasiPerbaikanSub');

	   removeCondition1('JasaPerbaikanElemenArsitekturalBangunan');
	   removeCondition1('JasaPerbaikanAtapDrainaseBangunan');
	   removeCondition1('JasaPerbaikanKebocoranWaterproofing');
		 
        restoreCondition1('JasaRenovasiPerbaikanStruktur');
        restoreCondition1('JasaPerbaikanStrukturBangunanTua');
	    
           // hapus elemen id DIV Lain
	removeCondition1('ProdukInFur');
        removeCondition1('MaterialKons');
	removeCondition1('ProdukKons');
        //removeCondition1('ProdukKonsSaluran');
        //removeCondition1('ProdukKonsPembatas');
        removeCondition1('JasaKonsPembatas');
        removeCondition1('JasaKonsJalanPerkerasan');
        removeCondition1('JasaKonsPondasiTanah');
	removeCondition1('JasaKons');
	removeCondition1('JasaKonsSub');
	removeCondition1('MenuKons');
	removeCondition1('JasaKonsFinishing');
        removeCondition1('JasaKonsStruktur');
	
	// hapus elemen id Sub JasaRenovasiPerbaikan Selain 'JasaRenovasiPerbaikanStruktur'
        removeCondition1('JasaRenovasiPerbaikanInfrastruktur');
        removeCondition1('JasaRenovasiPerbaikanBangunan');
        removeCondition1('JasaRenovasiPerbaikanInterior');
	removeCondition1('JasaRenovasiPerbaikanFasad');
	removeCondition1('JasaRenovasiPerbaikanFasilitas');
	       
	// hapus elemen id Semua Sub JasaRenovasiPerbaikanStruktur selain 'JasaRenovasiPerbaikanStrukturBangunan'
	   removeCondition1('JasaPerbaikanGedungBertingkat');
	   removeCondition1('JasaPerbaikanStrukturBangunanMiring');
	 
        removeCondition1('JasaPerbaikanStrukturBeton');
        removeCondition1('JasaRenovasiPerbaikanStrukturPondasi');
        removeCondition1('JasaRenovasiPerbaikanStrukturLantai');
	removeCondition1('JasaRenovasiPerbaikanStrukturDinding');
	removeCondition1('JasaRenovasiPerbaikanStrukturKolomBalok');
	removeCondition1('JasaRenovasiPerbaikanStrukturAtap');
	removeCondition1('JasaRenovasiPerbaikanRehabilitasiBeton');
       
        // hapus elemen id Semua Sub JasaRenovasiPerbaikanInfrastruktur
        removeCondition1('JasaRenovasiPerbaikanInfrastrukturJalan');
        removeCondition1('JasaRenovasiPerbaikanInfrastrukturJembatan');
        removeCondition1('JasaRenovasiPerbaikanInfrastrukturSaluran');
        removeCondition1('JasaRenovasiPerbaikanInfrastrukturTrotoar');

	// hapus elemen id Semua Sub JasaRenovasiPerbaikanBangunan
        removeCondition1('JasaRenovasiPerbaikanBangunanRumah');
        removeCondition1('JasaRenovasiPerbaikanBangunanKantor');
        removeCondition1('JasaRenovasiPerbaikanBangunanPabrik');
        removeCondition1('JasaRenovasiPerbaikanBangunanGedung');
        removeCondition1('JasaRenovasiPerbaikanBangunanGudang');
        removeCondition1('JasaRenovasiPerbaikanBangunanHotel');

	 // hapus elemen id Semua Sub JasaRenovasiPerbaikanInterior
        removeCondition1('JasaRenovasiInteriorRumah');
        removeCondition1('JasaRenovasiInteriorKantor');
        removeCondition1('JasaRenovasiInteriorApartemen');
        removeCondition1('JasaRenovasiInteriorHotel');
        removeCondition1('JasaRenovasiInteriorToko');
        removeCondition1('JasaRenovasiInteriorCustom');
        removeCondition1('JasaRenovasiInteriorRuangan');
	    
       // hapus elemen id Semua Sub JasaRenovasiPerbaikanFasadEksterior
        removeCondition1('JasaRenovasiFasadBangunan');
        removeCondition1('JasaRenovasiEksteriorBangunan');
        removeCondition1('JasaPerbaikanArsitekturEksterior');

	// hapus elemen id Semua Sub JasaRenovasiPerbaikanFasilitas
        removeCondition1('JasaRenovasiPerbaikanStadionOlahraga');
        removeCondition1('JasaRenovasiPerbaikanSekolah');
        removeCondition1('JasaRenovasiPerbaikanRumahSakit');
        removeCondition1('JasaRenovasiPerbaikanTempatIbadah');
        removeCondition1('JasaRenovasiPerbaikanTerminal');
        removeCondition1('JasaRenovasiPerbaikanHalte');
        removeCondition1('JasaRenovasiPerbaikanTamanKota');
       
	JasaKonstruksiPerbaikanLinkSub.style.visibility = 'visible';
        //JasaRenovasiPerbaikanLinkSub.style.visibility = 'visible';
		 JasaRenovasiPerbaikanPerawatanPerbaikanBangunanLink.style.visibility = 'visible';
		 
        JasaRenovasiPerbaikanStrukturLink.style.visibility = 'visible';
	//tampilkan menu JasaRenovasiPerbaikanStrukturBangunan
	JasaPerbaikanStrukturBangunanTuaLink.style.visibility = 'visible';
        pageNameKonstruksiPerbaikan1.textContent = urlMappingPerbaikanStrukturBangunanTua[cleanUrlJasaPerbaikanKonsSub];    
    }
    
    	  // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingPerbaikanStrukturBangunanTua[cleanUrlJasaPerbaikanKonsSub]) {
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
	      "name": "Jasa Perawatan & Perbaikan Bangunan",
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
	      "name": "Jasa Perbaikan Struktur Bangunan Tua",
	      "item": "https://www.betonjayareadymix.com/p/jasa-perbaikan-struktur-bangunan-tua.html"
	    },
	  {
	    "@type": "ListItem",
	     "position": 6,
	      "name": urlMappingPerbaikanStrukturBangunanTua[cleanUrlJasaPerbaikanKonsSub],
	      "item": cleanUrlJasaPerbaikanKonsSub
	   }
	  ]
	};
	
	       const script = document.createElement('script');
	       script.type = 'application/ld+json';
	       script.text = JSON.stringify(jsonLDBreadcrumb);
	       document.head.appendChild(script);
     }
	
	/*
	 if (urlMappingPerbaikanStrukturBeton[cleanUrlJasaPerbaikanKonsSub]) {
        restoreCondition1('JasaKonsPerbaikan');
		restoreCondition1('JasaRenovasiPerbaikanPerawatanPerbaikanBangunan');
	   removeCondition1('JasaRenovasiPerbaikanSub');
		 
	   removeCondition1('JasaPerbaikanElemenArsitekturalBangunan');
	   removeCondition1('JasaPerbaikanAtapDrainaseBangunan');
	   removeCondition1('JasaPerbaikanKebocoranWaterproofing');
		 
        restoreCondition1('JasaRenovasiPerbaikanStruktur');
        restoreCondition1('JasaPerbaikanStrukturBeton');
	    
           // hapus elemen id DIV Lain
	removeCondition1('ProdukInFur');
        removeCondition1('MaterialKons');
	removeCondition1('ProdukKons');
        //removeCondition1('ProdukKonsSaluran');
        //removeCondition1('ProdukKonsPembatas');
        removeCondition1('JasaKonsPembatas');
        removeCondition1('JasaKonsJalanPerkerasan');
        removeCondition1('JasaKonsPondasiTanah');
	removeCondition1('JasaKons');
	removeCondition1('JasaKonsSub');
	removeCondition1('MenuKons');
	removeCondition1('JasaKonsFinishing');
        removeCondition1('JasaKonsStruktur');
	
	// hapus elemen id Sub JasaRenovasiPerbaikan Selain 'JasaRenovasiPerbaikanStruktur'
        removeCondition1('JasaRenovasiPerbaikanInfrastruktur');
        removeCondition1('JasaRenovasiPerbaikanBangunan');
        removeCondition1('JasaRenovasiPerbaikanInterior');
	removeCondition1('JasaRenovasiPerbaikanFasad');
	removeCondition1('JasaRenovasiPerbaikanFasilitas');
	       
	// hapus elemen id Semua Sub JasaRenovasiPerbaikanStruktur selain 'JasaPerbaikanStrukturBeton'
        removeCondition1('JasaRenovasiPerbaikanStrukturKolomBalok');
			removeCondition1('JasaPerbaikanGedungBertingkat');
			removeCondition1('JasaPerbaikanStrukturBangunanTua');
			removeCondition1('JasaPerbaikanStrukturBangunanMiring');
		
        removeCondition1('JasaRenovasiPerbaikanStrukturPondasi');
        removeCondition1('JasaRenovasiPerbaikanStrukturLantai');
	removeCondition1('JasaRenovasiPerbaikanStrukturDinding');
	removeCondition1('JasaRenovasiPerbaikanStrukturAtap');
	removeCondition1('JasaRenovasiPerbaikanRehabilitasiBeton');
       
        // hapus elemen id Semua Sub JasaRenovasiPerbaikanInfrastruktur
        removeCondition1('JasaRenovasiPerbaikanInfrastrukturJalan');
        removeCondition1('JasaRenovasiPerbaikanInfrastrukturJembatan');
        removeCondition1('JasaRenovasiPerbaikanInfrastrukturSaluran');
        removeCondition1('JasaRenovasiPerbaikanInfrastrukturTrotoar');

	// hapus elemen id Semua Sub JasaRenovasiPerbaikanBangunan
        removeCondition1('JasaRenovasiPerbaikanBangunanRumah');
        removeCondition1('JasaRenovasiPerbaikanBangunanKantor');
        removeCondition1('JasaRenovasiPerbaikanBangunanPabrik');
        removeCondition1('JasaRenovasiPerbaikanBangunanGedung');
        removeCondition1('JasaRenovasiPerbaikanBangunanGudang');
        removeCondition1('JasaRenovasiPerbaikanBangunanHotel');

	 // hapus elemen id Semua Sub JasaRenovasiPerbaikanInterior
        removeCondition1('JasaRenovasiInteriorRumah');
        removeCondition1('JasaRenovasiInteriorKantor');
        removeCondition1('JasaRenovasiInteriorApartemen');
        removeCondition1('JasaRenovasiInteriorHotel');
        removeCondition1('JasaRenovasiInteriorToko');
        removeCondition1('JasaRenovasiInteriorCustom');
        removeCondition1('JasaRenovasiInteriorRuangan');
	    
       // hapus elemen id Semua Sub JasaRenovasiPerbaikanFasadEksterior
        removeCondition1('JasaRenovasiFasadBangunan');
        removeCondition1('JasaRenovasiEksteriorBangunan');
        removeCondition1('JasaPerbaikanArsitekturEksterior');

	// hapus elemen id Semua Sub JasaRenovasiPerbaikanFasilitas
        removeCondition1('JasaRenovasiPerbaikanStadionOlahraga');
        removeCondition1('JasaRenovasiPerbaikanSekolah');
        removeCondition1('JasaRenovasiPerbaikanRumahSakit');
        removeCondition1('JasaRenovasiPerbaikanTempatIbadah');
        removeCondition1('JasaRenovasiPerbaikanTerminal');
        removeCondition1('JasaRenovasiPerbaikanHalte');
        removeCondition1('JasaRenovasiPerbaikanTamanKota');
       
	JasaKonstruksiPerbaikanLinkSub.style.visibility = 'visible';
        //JasaRenovasiPerbaikanLinkSub.style.visibility = 'visible';
		JasaRenovasiPerbaikanPerawatanPerbaikanBangunanLink.style.visibility = 'visible';
		
        JasaRenovasiPerbaikanStrukturLink.style.visibility = 'visible';
	//tampilkan menu JasaRenovasiPerbaikanStrukturKolomBalok
		JasaPerbaikanStrukturBetonLink.style.visibility = 'visible';
        pageNameKonstruksiPerbaikan1.textContent = urlMappingPerbaikanStrukturBeton[cleanUrlJasaPerbaikanKonsSub];    
    }
	  // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingPerbaikanStrukturBeton[cleanUrlJasaPerbaikanKonsSub]) {
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
	      "name": "Jasa Perawatan & Perbaikan Bangunan",
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
	      "name": urlMappingPerbaikanStrukturBeton[cleanUrlJasaPerbaikanKonsSub],
	      "item": cleanUrlJasaPerbaikanKonsSub
	   }
	  ]
	};
	
	       const script = document.createElement('script');
	       script.type = 'application/ld+json';
	       script.text = JSON.stringify(jsonLDBreadcrumb);
	       document.head.appendChild(script);
     }
	*/
	
    if (urlMappingPerbaikanStrukturKolomBalok[cleanUrlJasaPerbaikanKonsSub]) {
        restoreCondition1('JasaKonsPerbaikan');
		restoreCondition1('JasaRenovasiPerbaikanPerawatanPerbaikanBangunan');
	   removeCondition1('JasaRenovasiPerbaikanSub');

	   removeCondition1('JasaPerbaikanElemenArsitekturalBangunan');
	   removeCondition1('JasaPerbaikanAtapDrainaseBangunan');
	   removeCondition1('JasaPerbaikanKebocoranWaterproofing');
		
        restoreCondition1('JasaRenovasiPerbaikanStruktur');
        restoreCondition1('JasaRenovasiPerbaikanStrukturKolomBalok');
	    
           // hapus elemen id DIV Lain
	removeCondition1('ProdukInFur');
        removeCondition1('MaterialKons');
	removeCondition1('ProdukKons');
        //removeCondition1('ProdukKonsSaluran');
        //removeCondition1('ProdukKonsPembatas');
        removeCondition1('JasaKonsPembatas');
        removeCondition1('JasaKonsJalanPerkerasan');
        removeCondition1('JasaKonsPondasiTanah');
	removeCondition1('JasaKons');
	removeCondition1('JasaKonsSub');
	removeCondition1('MenuKons');
	removeCondition1('JasaKonsFinishing');
        removeCondition1('JasaKonsStruktur');
	
	// hapus elemen id Sub JasaRenovasiPerbaikan Selain 'JasaRenovasiPerbaikanStruktur'
        removeCondition1('JasaRenovasiPerbaikanInfrastruktur');
        removeCondition1('JasaRenovasiPerbaikanBangunan');
        removeCondition1('JasaRenovasiPerbaikanInterior');
	removeCondition1('JasaRenovasiPerbaikanFasad');
	removeCondition1('JasaRenovasiPerbaikanFasilitas');
	       
	// hapus elemen id Semua Sub JasaRenovasiPerbaikanStruktur selain 'JasaPerbaikanStrukturBeton'
        removeCondition1('JasaPerbaikanStrukturBeton');
			removeCondition1('JasaPerbaikanGedungBertingkat');
			removeCondition1('JasaPerbaikanStrukturBangunanTua');
			removeCondition1('JasaPerbaikanStrukturBangunanMiring');
		
        removeCondition1('JasaRenovasiPerbaikanStrukturPondasi');
        removeCondition1('JasaRenovasiPerbaikanStrukturLantai');
	removeCondition1('JasaRenovasiPerbaikanStrukturDinding');
	removeCondition1('JasaRenovasiPerbaikanStrukturAtap');
	removeCondition1('JasaRenovasiPerbaikanRehabilitasiBeton');
       
        // hapus elemen id Semua Sub JasaRenovasiPerbaikanInfrastruktur
        removeCondition1('JasaRenovasiPerbaikanInfrastrukturJalan');
        removeCondition1('JasaRenovasiPerbaikanInfrastrukturJembatan');
        removeCondition1('JasaRenovasiPerbaikanInfrastrukturSaluran');
        removeCondition1('JasaRenovasiPerbaikanInfrastrukturTrotoar');

	// hapus elemen id Semua Sub JasaRenovasiPerbaikanBangunan
        removeCondition1('JasaRenovasiPerbaikanBangunanRumah');
        removeCondition1('JasaRenovasiPerbaikanBangunanKantor');
        removeCondition1('JasaRenovasiPerbaikanBangunanPabrik');
        removeCondition1('JasaRenovasiPerbaikanBangunanGedung');
        removeCondition1('JasaRenovasiPerbaikanBangunanGudang');
        removeCondition1('JasaRenovasiPerbaikanBangunanHotel');

	 // hapus elemen id Semua Sub JasaRenovasiPerbaikanInterior
        removeCondition1('JasaRenovasiInteriorRumah');
        removeCondition1('JasaRenovasiInteriorKantor');
        removeCondition1('JasaRenovasiInteriorApartemen');
        removeCondition1('JasaRenovasiInteriorHotel');
        removeCondition1('JasaRenovasiInteriorToko');
        removeCondition1('JasaRenovasiInteriorCustom');
        removeCondition1('JasaRenovasiInteriorRuangan');
	    
       // hapus elemen id Semua Sub JasaRenovasiPerbaikanFasadEksterior
        removeCondition1('JasaRenovasiFasadBangunan');
        removeCondition1('JasaRenovasiEksteriorBangunan');
        removeCondition1('JasaPerbaikanArsitekturEksterior');

	// hapus elemen id Semua Sub JasaRenovasiPerbaikanFasilitas
        removeCondition1('JasaRenovasiPerbaikanStadionOlahraga');
        removeCondition1('JasaRenovasiPerbaikanSekolah');
        removeCondition1('JasaRenovasiPerbaikanRumahSakit');
        removeCondition1('JasaRenovasiPerbaikanTempatIbadah');
        removeCondition1('JasaRenovasiPerbaikanTerminal');
        removeCondition1('JasaRenovasiPerbaikanHalte');
        removeCondition1('JasaRenovasiPerbaikanTamanKota');
       
	JasaKonstruksiPerbaikanLinkSub.style.visibility = 'visible';
        //JasaRenovasiPerbaikanLinkSub.style.visibility = 'visible';
		JasaRenovasiPerbaikanPerawatanPerbaikanBangunanLink.style.visibility = 'visible';
		
        JasaRenovasiPerbaikanStrukturLink.style.visibility = 'visible';
	//tampilkan menu JasaRenovasiPerbaikanStrukturKolomBalok
	JasaRenovasiPerbaikanStrukturKolomBalokLink.style.visibility = 'visible';
        pageNameKonstruksiPerbaikan1.textContent = urlMappingPerbaikanStrukturKolomBalok[cleanUrlJasaPerbaikanKonsSub];    
    }
	  // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingPerbaikanStrukturKolomBalok[cleanUrlJasaPerbaikanKonsSub]) {
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
	      "name": "Jasa Perawatan & Perbaikan Bangunan",
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
	      "name": "Jasa Perbaikan Struktur Kolom Balok",
	      "item": "https://www.betonjayareadymix.com/p/jasa-perbaikan-struktur-kolom-balok.html"
	    },
	  {
	    "@type": "ListItem",
	     "position": 6,
	      "name": urlMappingPerbaikanStrukturKolomBalok[cleanUrlJasaPerbaikanKonsSub],
	      "item": cleanUrlJasaPerbaikanKonsSub
	   }
	  ]
	};
	
	       const script = document.createElement('script');
	       script.type = 'application/ld+json';
	       script.text = JSON.stringify(jsonLDBreadcrumb);
	       document.head.appendChild(script);
     }
    if (urlMappingPerbaikanStrukturPondasi[cleanUrlJasaPerbaikanKonsSub]) {
        restoreCondition1('JasaKonsPerbaikan');
		restoreCondition1('JasaRenovasiPerbaikanPerawatanPerbaikanBangunan');
	   removeCondition1('JasaRenovasiPerbaikanSub');

	   removeCondition1('JasaPerbaikanElemenArsitekturalBangunan');
	   removeCondition1('JasaPerbaikanAtapDrainaseBangunan');
	   removeCondition1('JasaPerbaikanKebocoranWaterproofing');
		
        restoreCondition1('JasaRenovasiPerbaikanStruktur');
        restoreCondition1('JasaRenovasiPerbaikanStrukturPondasi');
	    
           // hapus elemen id DIV Lain
	removeCondition1('ProdukInFur');
        removeCondition1('MaterialKons');
	removeCondition1('ProdukKons');
        //removeCondition1('ProdukKonsSaluran');
        //removeCondition1('ProdukKonsPembatas');
        removeCondition1('JasaKonsPembatas');
        removeCondition1('JasaKonsJalanPerkerasan');
        removeCondition1('JasaKonsPondasiTanah');
	removeCondition1('JasaKons');
	removeCondition1('JasaKonsSub');
	removeCondition1('MenuKons');
	removeCondition1('JasaKonsFinishing');
        removeCondition1('JasaKonsStruktur');
	
	// hapus elemen id Sub JasaRenovasiPerbaikan Selain 'JasaRenovasiPerbaikanStruktur'
        removeCondition1('JasaRenovasiPerbaikanInfrastruktur');
        removeCondition1('JasaRenovasiPerbaikanBangunan');
        removeCondition1('JasaRenovasiPerbaikanInterior');
	removeCondition1('JasaRenovasiPerbaikanFasad');
	removeCondition1('JasaRenovasiPerbaikanFasilitas');
	       
	// hapus elemen id Semua Sub JasaRenovasiPerbaikanStruktur selain 'JasaRenovasiPerbaikanStrukturPondasi'
        removeCondition1('JasaPerbaikanStrukturBeton');
        removeCondition1('JasaRenovasiPerbaikanStrukturKolomBalok');
        removeCondition1('JasaRenovasiPerbaikanStrukturLantai');
	removeCondition1('JasaRenovasiPerbaikanStrukturDinding');
	removeCondition1('JasaRenovasiPerbaikanStrukturBangunan');
	removeCondition1('JasaRenovasiPerbaikanStrukturAtap');
	removeCondition1('JasaRenovasiPerbaikanRehabilitasiBeton');
       
        // hapus elemen id Semua Sub JasaRenovasiPerbaikanInfrastruktur
        removeCondition1('JasaRenovasiPerbaikanInfrastrukturJalan');
        removeCondition1('JasaRenovasiPerbaikanInfrastrukturJembatan');
        removeCondition1('JasaRenovasiPerbaikanInfrastrukturSaluran');
        removeCondition1('JasaRenovasiPerbaikanInfrastrukturTrotoar');

	// hapus elemen id Semua Sub JasaRenovasiPerbaikanBangunan
        removeCondition1('JasaRenovasiPerbaikanBangunanRumah');
        removeCondition1('JasaRenovasiPerbaikanBangunanKantor');
        removeCondition1('JasaRenovasiPerbaikanBangunanPabrik');
        removeCondition1('JasaRenovasiPerbaikanBangunanGedung');
        removeCondition1('JasaRenovasiPerbaikanBangunanGudang');
        removeCondition1('JasaRenovasiPerbaikanBangunanHotel');

	 // hapus elemen id Semua Sub JasaRenovasiPerbaikanInterior
        removeCondition1('JasaRenovasiInteriorRumah');
        removeCondition1('JasaRenovasiInteriorKantor');
        removeCondition1('JasaRenovasiInteriorApartemen');
        removeCondition1('JasaRenovasiInteriorHotel');
        removeCondition1('JasaRenovasiInteriorToko');
        removeCondition1('JasaRenovasiInteriorCustom');
        removeCondition1('JasaRenovasiInteriorRuangan');
	    
       // hapus elemen id Semua Sub JasaRenovasiPerbaikanFasadEksterior
        removeCondition1('JasaRenovasiFasadBangunan');
        removeCondition1('JasaRenovasiEksteriorBangunan');
        removeCondition1('JasaPerbaikanArsitekturEksterior');

	// hapus elemen id Semua Sub JasaRenovasiPerbaikanFasilitas
        removeCondition1('JasaRenovasiPerbaikanStadionOlahraga');
        removeCondition1('JasaRenovasiPerbaikanSekolah');
        removeCondition1('JasaRenovasiPerbaikanRumahSakit');
        removeCondition1('JasaRenovasiPerbaikanTempatIbadah');
        removeCondition1('JasaRenovasiPerbaikanTerminal');
        removeCondition1('JasaRenovasiPerbaikanHalte');
        removeCondition1('JasaRenovasiPerbaikanTamanKota');
       
	JasaKonstruksiPerbaikanLinkSub.style.visibility = 'visible';
        //JasaRenovasiPerbaikanLinkSub.style.visibility = 'visible';
		JasaRenovasiPerbaikanPerawatanPerbaikanBangunanLink.style.visibility = 'visible';
		
        JasaRenovasiPerbaikanStrukturLink.style.visibility = 'visible';
	//tampilkan menu JasaRenovasiPerbaikanStrukturPondasi
	JasaRenovasiPerbaikanStrukturPondasiLink.style.visibility = 'visible';
        pageNameKonstruksiPerbaikan1.textContent = urlMappingPerbaikanStrukturPondasi[cleanUrlJasaPerbaikanKonsSub];    
    }
	
	  // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingPerbaikanStrukturPondasi[cleanUrlJasaPerbaikanKonsSub]) {
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
	      "name": "Jasa Perawatan & Perbaikan Bangunan",
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
	      "name": "Jasa Perbaikan Struktur Pondasi",
	      "item": "https://www.betonjayareadymix.com/p/jasa-perbaikan-struktur-pondasi.html"
	    },
	  {
	    "@type": "ListItem",
	     "position": 6,
	      "name": urlMappingPerbaikanStrukturPondasi[cleanUrlJasaPerbaikanKonsSub],
	      "item": cleanUrlJasaPerbaikanKonsSub
	   }
	  ]
	};
	
	       const script = document.createElement('script');
	       script.type = 'application/ld+json';
	       script.text = JSON.stringify(jsonLDBreadcrumb);
	       document.head.appendChild(script);
     }
    if (urlMappingPerbaikanStrukturLantai[cleanUrlJasaPerbaikanKonsSub]) {
        restoreCondition1('JasaKonsPerbaikan');
		restoreCondition1('JasaRenovasiPerbaikanPerawatanPerbaikanBangunan');
	   removeCondition1('JasaRenovasiPerbaikanSub');
		
	   removeCondition1('JasaPerbaikanElemenArsitekturalBangunan');
	   removeCondition1('JasaPerbaikanAtapDrainaseBangunan');
	   removeCondition1('JasaPerbaikanKebocoranWaterproofing');
		
        restoreCondition1('JasaRenovasiPerbaikanStruktur');
        restoreCondition1('JasaRenovasiPerbaikanStrukturLantai');
	    
           // hapus elemen id DIV Lain
	removeCondition1('ProdukInFur');
        removeCondition1('MaterialKons');
	removeCondition1('ProdukKons');
        //removeCondition1('ProdukKonsSaluran');
        //removeCondition1('ProdukKonsPembatas');
        removeCondition1('JasaKonsPembatas');
        removeCondition1('JasaKonsJalanPerkerasan');
        removeCondition1('JasaKonsPondasiTanah');
	removeCondition1('JasaKons');
	removeCondition1('JasaKonsSub');
	removeCondition1('MenuKons');
	removeCondition1('JasaKonsFinishing');
        removeCondition1('JasaKonsStruktur');
	
	// hapus elemen id Sub JasaRenovasiPerbaikan Selain 'JasaRenovasiPerbaikanStruktur'
        removeCondition1('JasaRenovasiPerbaikanInfrastruktur');
        removeCondition1('JasaRenovasiPerbaikanBangunan');
        removeCondition1('JasaRenovasiPerbaikanInterior');
	removeCondition1('JasaRenovasiPerbaikanFasad');
	removeCondition1('JasaRenovasiPerbaikanFasilitas');
	       
	// hapus elemen id Semua Sub JasaRenovasiPerbaikanStruktur selain 'JasaRenovasiPerbaikanStrukturLantai'
        removeCondition1('JasaPerbaikanStrukturBeton');

						removeCondition1('JasaPerbaikanGedungBertingkat');
			removeCondition1('JasaPerbaikanStrukturBangunanTua');
			removeCondition1('JasaPerbaikanStrukturBangunanMiring');
		
        removeCondition1('JasaRenovasiPerbaikanStrukturPondasi');
        removeCondition1('JasaRenovasiPerbaikanStrukturKolomBalok');
	removeCondition1('JasaRenovasiPerbaikanStrukturDinding');
	removeCondition1('JasaRenovasiPerbaikanStrukturAtap');
	removeCondition1('JasaRenovasiPerbaikanRehabilitasiBeton');
       
        // hapus elemen id Semua Sub JasaRenovasiPerbaikanInfrastruktur
        removeCondition1('JasaRenovasiPerbaikanInfrastrukturJalan');
        removeCondition1('JasaRenovasiPerbaikanInfrastrukturJembatan');
        removeCondition1('JasaRenovasiPerbaikanInfrastrukturSaluran');
        removeCondition1('JasaRenovasiPerbaikanInfrastrukturTrotoar');

	// hapus elemen id Semua Sub JasaRenovasiPerbaikanBangunan
        removeCondition1('JasaRenovasiPerbaikanBangunanRumah');
        removeCondition1('JasaRenovasiPerbaikanBangunanKantor');
        removeCondition1('JasaRenovasiPerbaikanBangunanPabrik');
        removeCondition1('JasaRenovasiPerbaikanBangunanGedung');
        removeCondition1('JasaRenovasiPerbaikanBangunanGudang');
        removeCondition1('JasaRenovasiPerbaikanBangunanHotel');

	 // hapus elemen id Semua Sub JasaRenovasiPerbaikanInterior
        removeCondition1('JasaRenovasiInteriorRumah');
        removeCondition1('JasaRenovasiInteriorKantor');
        removeCondition1('JasaRenovasiInteriorApartemen');
        removeCondition1('JasaRenovasiInteriorHotel');
        removeCondition1('JasaRenovasiInteriorToko');
        removeCondition1('JasaRenovasiInteriorCustom');
        removeCondition1('JasaRenovasiInteriorRuangan');
	    
       // hapus elemen id Semua Sub JasaRenovasiPerbaikanFasadEksterior
        removeCondition1('JasaRenovasiFasadBangunan');
        removeCondition1('JasaRenovasiEksteriorBangunan');
        removeCondition1('JasaPerbaikanArsitekturEksterior');

	// hapus elemen id Semua Sub JasaRenovasiPerbaikanFasilitas
        removeCondition1('JasaRenovasiPerbaikanStadionOlahraga');
        removeCondition1('JasaRenovasiPerbaikanSekolah');
        removeCondition1('JasaRenovasiPerbaikanRumahSakit');
        removeCondition1('JasaRenovasiPerbaikanTempatIbadah');
        removeCondition1('JasaRenovasiPerbaikanTerminal');
        removeCondition1('JasaRenovasiPerbaikanHalte');
        removeCondition1('JasaRenovasiPerbaikanTamanKota');
       
	JasaKonstruksiPerbaikanLinkSub.style.visibility = 'visible';
       // JasaRenovasiPerbaikanLinkSub.style.visibility = 'visible';
		JasaRenovasiPerbaikanPerawatanPerbaikanBangunanLink.style.visibility = 'visible';
		
        JasaRenovasiPerbaikanStrukturLink.style.visibility = 'visible';
	//tampilkan menu JasaRenovasiPerbaikanStrukturLantai
	JasaRenovasiPerbaikanStrukturLantaiLink.style.visibility = 'visible';
        pageNameKonstruksiPerbaikan1.textContent = urlMappingPerbaikanStrukturLantai[cleanUrlJasaPerbaikanKonsSub];    
    }
	
	  // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingPerbaikanStrukturLantai[cleanUrlJasaPerbaikanKonsSub]) {
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
	      "name": "Jasa Perawatan & Perbaikan Bangunan",
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
	      "name": "Jasa Perbaikan Struktur Lantai Beton",
	      "item": "https://www.betonjayareadymix.com/p/jasa-perbaikan-struktur-lantai-beton.html"
	    },
	  {
	    "@type": "ListItem",
	     "position": 6,
	      "name": urlMappingPerbaikanStrukturLantai[cleanUrlJasaPerbaikanKonsSub],
	      "item": cleanUrlJasaPerbaikanKonsSub
	   }
	  ]
	};
	
	       const script = document.createElement('script');
	       script.type = 'application/ld+json';
	       script.text = JSON.stringify(jsonLDBreadcrumb);
	       document.head.appendChild(script);
     }
    if (urlMappingPerbaikanStrukturDinding[cleanUrlJasaPerbaikanKonsSub]) {
        restoreCondition1('JasaKonsPerbaikan');
		 restoreCondition1('JasaRenovasiPerbaikanPerawatanPerbaikanBangunan');
	   removeCondition1('JasaRenovasiPerbaikanSub');

					  	  
	   removeCondition1('JasaPerbaikanElemenArsitekturalBangunan');
	   removeCondition1('JasaPerbaikanAtapDrainaseBangunan');
	   removeCondition1('JasaPerbaikanKebocoranWaterproofing');
		
        restoreCondition1('JasaRenovasiPerbaikanStruktur');
        restoreCondition1('JasaRenovasiPerbaikanStrukturDinding');
	    
           // hapus elemen id DIV Lain
	removeCondition1('ProdukInFur');
        removeCondition1('MaterialKons');
	removeCondition1('ProdukKons');
        //removeCondition1('ProdukKonsSaluran');
        //removeCondition1('ProdukKonsPembatas');
        removeCondition1('JasaKonsPembatas');
        removeCondition1('JasaKonsJalanPerkerasan');
        removeCondition1('JasaKonsPondasiTanah');
	removeCondition1('JasaKons');
	removeCondition1('JasaKonsSub');
	removeCondition1('MenuKons');
	removeCondition1('JasaKonsFinishing');
        removeCondition1('JasaKonsStruktur');
	
	// hapus elemen id Sub JasaRenovasiPerbaikan Selain 'JasaRenovasiPerbaikanStruktur'
        removeCondition1('JasaRenovasiPerbaikanInfrastruktur');
        removeCondition1('JasaRenovasiPerbaikanBangunan');
        removeCondition1('JasaRenovasiPerbaikanInterior');
	removeCondition1('JasaRenovasiPerbaikanFasad');
	removeCondition1('JasaRenovasiPerbaikanFasilitas');
	       
	// hapus elemen id Semua Sub JasaRenovasiPerbaikanStruktur selain 'JasaRenovasiPerbaikanStrukturDinding'
        removeCondition1('JasaPerbaikanStrukturBeton');
						removeCondition1('JasaPerbaikanGedungBertingkat');
			removeCondition1('JasaPerbaikanStrukturBangunanTua');
			removeCondition1('JasaPerbaikanStrukturBangunanMiring');
		
        removeCondition1('JasaRenovasiPerbaikanStrukturPondasi');
        removeCondition1('JasaRenovasiPerbaikanStrukturLantai');
	removeCondition1('JasaRenovasiPerbaikanStrukturKolomBalok');
	removeCondition1('JasaRenovasiPerbaikanStrukturAtap');
	removeCondition1('JasaRenovasiPerbaikanRehabilitasiBeton');
       
        // hapus elemen id Semua Sub JasaRenovasiPerbaikanInfrastruktur
        removeCondition1('JasaRenovasiPerbaikanInfrastrukturJalan');
        removeCondition1('JasaRenovasiPerbaikanInfrastrukturJembatan');
        removeCondition1('JasaRenovasiPerbaikanInfrastrukturSaluran');
        removeCondition1('JasaRenovasiPerbaikanInfrastrukturTrotoar');

	// hapus elemen id Semua Sub JasaRenovasiPerbaikanBangunan
        removeCondition1('JasaRenovasiPerbaikanBangunanRumah');
        removeCondition1('JasaRenovasiPerbaikanBangunanKantor');
        removeCondition1('JasaRenovasiPerbaikanBangunanPabrik');
        removeCondition1('JasaRenovasiPerbaikanBangunanGedung');
        removeCondition1('JasaRenovasiPerbaikanBangunanGudang');
        removeCondition1('JasaRenovasiPerbaikanBangunanHotel');

	 // hapus elemen id Semua Sub JasaRenovasiPerbaikanInterior
        removeCondition1('JasaRenovasiInteriorRumah');
        removeCondition1('JasaRenovasiInteriorKantor');
        removeCondition1('JasaRenovasiInteriorApartemen');
        removeCondition1('JasaRenovasiInteriorHotel');
        removeCondition1('JasaRenovasiInteriorToko');
        removeCondition1('JasaRenovasiInteriorCustom');
        removeCondition1('JasaRenovasiInteriorRuangan');
	    
       // hapus elemen id Semua Sub JasaRenovasiPerbaikanFasadEksterior
        removeCondition1('JasaRenovasiFasadBangunan');
        removeCondition1('JasaRenovasiEksteriorBangunan');
        removeCondition1('JasaPerbaikanArsitekturEksterior');

	// hapus elemen id Semua Sub JasaRenovasiPerbaikanFasilitas
        removeCondition1('JasaRenovasiPerbaikanStadionOlahraga');
        removeCondition1('JasaRenovasiPerbaikanSekolah');
        removeCondition1('JasaRenovasiPerbaikanRumahSakit');
        removeCondition1('JasaRenovasiPerbaikanTempatIbadah');
        removeCondition1('JasaRenovasiPerbaikanTerminal');
        removeCondition1('JasaRenovasiPerbaikanHalte');
        removeCondition1('JasaRenovasiPerbaikanTamanKota');
       
	JasaKonstruksiPerbaikanLinkSub.style.visibility = 'visible';
       // JasaRenovasiPerbaikanLinkSub.style.visibility = 'visible';
		JasaRenovasiPerbaikanPerawatanPerbaikanBangunanLink.style.visibility = 'visible';
		
        JasaRenovasiPerbaikanStrukturLink.style.visibility = 'visible';
	//tampilkan menu JasaRenovasiPerbaikanStrukturDinding
	JasaRenovasiPerbaikanStrukturDindingLink.style.visibility = 'visible';
        pageNameKonstruksiPerbaikan1.textContent = urlMappingPerbaikanStrukturDinding[cleanUrlJasaPerbaikanKonsSub];    
    }
    	  // ✅ Tambahkan JSON-LD Breadcrumb otomatis
	
   if (urlMappingPerbaikanStrukturDinding[cleanUrlJasaPerbaikanKonsSub]) {
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
	      "name": "Jasa Perawatan & Perbaikan Bangunan",
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
	      "name": "Jasa Perbaikan Struktur Dinding",
	      "item": "https://www.betonjayareadymix.com/p/jasa-perbaikan-struktur-dinding.html"
	    },
	  {
	    "@type": "ListItem",
	     "position": 6,
	      "name": urlMappingPerbaikanStrukturDinding[cleanUrlJasaPerbaikanKonsSub],
	      "item": cleanUrlJasaPerbaikanKonsSub
	   }
	  ]
	};
	
	       const script = document.createElement('script');
	       script.type = 'application/ld+json';
	       script.text = JSON.stringify(jsonLDBreadcrumb);
	       document.head.appendChild(script);
     }
	   
	   
	/*
    if (urlMappingPerbaikanStrukturBangunan[cleanUrlJasaPerbaikanKonsSub]) {
        restoreCondition1('JasaKonsPerbaikan');
        restoreCondition1('JasaRenovasiPerbaikanStruktur');
        restoreCondition1('JasaRenovasiPerbaikanStrukturBangunan');
	    
           // hapus elemen id DIV Lain
	removeCondition1('ProdukInFur');
        removeCondition1('MaterialKons');
	removeCondition1('ProdukKons');
        //removeCondition1('ProdukKonsSaluran');
        //removeCondition1('ProdukKonsPembatas');
        removeCondition1('JasaKonsPembatas');
        removeCondition1('JasaKonsJalanPerkerasan');
        removeCondition1('JasaKonsPondasiTanah');
	removeCondition1('JasaKons');
	removeCondition1('JasaKonsSub');
	removeCondition1('MenuKons');
	removeCondition1('JasaKonsFinishing');
        removeCondition1('JasaKonsStruktur');
	
	// hapus elemen id Sub JasaRenovasiPerbaikan Selain 'JasaRenovasiPerbaikanStruktur'
        removeCondition1('JasaRenovasiPerbaikanInfrastruktur');
        removeCondition1('JasaRenovasiPerbaikanBangunan');
        removeCondition1('JasaRenovasiPerbaikanInterior');
	removeCondition1('JasaRenovasiPerbaikanFasad');
	removeCondition1('JasaRenovasiPerbaikanFasilitas');
	       
	// hapus elemen id Semua Sub JasaRenovasiPerbaikanStruktur selain 'JasaRenovasiPerbaikanStrukturBangunan'
        removeCondition1('JasaPerbaikanStrukturBeton');
        removeCondition1('JasaRenovasiPerbaikanStrukturPondasi');
        removeCondition1('JasaRenovasiPerbaikanStrukturLantai');
	removeCondition1('JasaRenovasiPerbaikanStrukturDinding');
	removeCondition1('JasaRenovasiPerbaikanStrukturKolomBalok');
	removeCondition1('JasaRenovasiPerbaikanStrukturAtap');
	removeCondition1('JasaRenovasiPerbaikanRehabilitasiBeton');
       
        // hapus elemen id Semua Sub JasaRenovasiPerbaikanInfrastruktur
        removeCondition1('JasaRenovasiPerbaikanInfrastrukturJalan');
        removeCondition1('JasaRenovasiPerbaikanInfrastrukturJembatan');
        removeCondition1('JasaRenovasiPerbaikanInfrastrukturSaluran');
        removeCondition1('JasaRenovasiPerbaikanInfrastrukturTrotoar');

	// hapus elemen id Semua Sub JasaRenovasiPerbaikanBangunan
        removeCondition1('JasaRenovasiPerbaikanBangunanRumah');
        removeCondition1('JasaRenovasiPerbaikanBangunanKantor');
        removeCondition1('JasaRenovasiPerbaikanBangunanPabrik');
        removeCondition1('JasaRenovasiPerbaikanBangunanGedung');
        removeCondition1('JasaRenovasiPerbaikanBangunanGudang');
        removeCondition1('JasaRenovasiPerbaikanBangunanHotel');

	 // hapus elemen id Semua Sub JasaRenovasiPerbaikanInterior
        removeCondition1('JasaRenovasiInteriorRumah');
        removeCondition1('JasaRenovasiInteriorKantor');
        removeCondition1('JasaRenovasiInteriorApartemen');
        removeCondition1('JasaRenovasiInteriorHotel');
        removeCondition1('JasaRenovasiInteriorToko');
        removeCondition1('JasaRenovasiInteriorCustom');
        removeCondition1('JasaRenovasiInteriorRuangan');
	    
       // hapus elemen id Semua Sub JasaRenovasiPerbaikanFasadEksterior
        removeCondition1('JasaRenovasiFasadBangunan');
        removeCondition1('JasaRenovasiEksteriorBangunan');
        removeCondition1('JasaPerbaikanArsitekturEksterior');

	// hapus elemen id Semua Sub JasaRenovasiPerbaikanFasilitas
        removeCondition1('JasaRenovasiPerbaikanStadionOlahraga');
        removeCondition1('JasaRenovasiPerbaikanSekolah');
        removeCondition1('JasaRenovasiPerbaikanRumahSakit');
        removeCondition1('JasaRenovasiPerbaikanTempatIbadah');
        removeCondition1('JasaRenovasiPerbaikanTerminal');
        removeCondition1('JasaRenovasiPerbaikanHalte');
        removeCondition1('JasaRenovasiPerbaikanTamanKota');
       
	JasaKonstruksiPerbaikanLinkSub.style.visibility = 'visible';
        JasaRenovasiPerbaikanLinkSub.style.visibility = 'visible';
        JasaRenovasiPerbaikanStrukturLink.style.visibility = 'visible';
	//tampilkan menu JasaRenovasiPerbaikanStrukturBangunan
	JasaRenovasiPerbaikanStrukturBangunanLink.style.visibility = 'visible';
        pageNameKonstruksiPerbaikan1.textContent = urlMappingPerbaikanStrukturBangunan[cleanUrlJasaPerbaikanKonsSub];    
    }
    
    	  // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingPerbaikanStrukturBangunan[cleanUrlJasaPerbaikanKonsSub]) {
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
	      "name": "Jasa Perbaikan Struktur",
	      "item": "https://www.betonjayareadymix.com/p/jasa-perbaikan-struktur.html"
	    },
	  {
	      "@type": "ListItem",
	      "position": 5,
	      "name": "Jasa Perbaikan Struktur Bangunan",
	      "item": "https://www.betonjayareadymix.com/p/jasa-perbaikan-struktur-bangunan.html"
	    },
	  {
	    "@type": "ListItem",
	     "position": 6,
	      "name": urlMappingPerbaikanStrukturBangunan[cleanUrlJasaPerbaikanKonsSub],
	      "item": cleanUrlJasaPerbaikanKonsSub
	   }
	  ]
	};
	
	       const script = document.createElement('script');
	       script.type = 'application/ld+json';
	       script.text = JSON.stringify(jsonLDBreadcrumb);
	       document.head.appendChild(script);
     }
	 */
	
    if (urlMappingPerbaikanStrukturAtap[cleanUrlJasaPerbaikanKonsSub]) {
        restoreCondition1('JasaKonsPerbaikan');
		restoreCondition1('JasaRenovasiPerbaikanPerawatanPerbaikanBangunan');
	   removeCondition1('JasaRenovasiPerbaikanSub');

					  	   restoreCondition1('JasaRenovasiPerbaikanStruktur');
	   removeCondition1('JasaPerbaikanElemenArsitekturalBangunan');
	   removeCondition1('JasaPerbaikanAtapDrainaseBangunan');
	   removeCondition1('JasaPerbaikanKebocoranWaterproofing');
		
        restoreCondition1('JasaRenovasiPerbaikanStruktur');
        restoreCondition1('JasaRenovasiPerbaikanStrukturAtap');
	    
           // hapus elemen id DIV Lain
	removeCondition1('ProdukInFur');
        removeCondition1('MaterialKons');
	removeCondition1('ProdukKons');
        //removeCondition1('ProdukKonsSaluran');
        //removeCondition1('ProdukKonsPembatas');
        removeCondition1('JasaKonsPembatas');
        removeCondition1('JasaKonsJalanPerkerasan');
        removeCondition1('JasaKonsPondasiTanah');
	removeCondition1('JasaKons');
	removeCondition1('JasaKonsSub');
	removeCondition1('MenuKons');
	removeCondition1('JasaKonsFinishing');
        removeCondition1('JasaKonsStruktur');
	
	// hapus elemen id Sub JasaRenovasiPerbaikan Selain 'JasaRenovasiPerbaikanStruktur'
        removeCondition1('JasaRenovasiPerbaikanInfrastruktur');
        removeCondition1('JasaRenovasiPerbaikanBangunan');
        removeCondition1('JasaRenovasiPerbaikanInterior');
	removeCondition1('JasaRenovasiPerbaikanFasad');
	removeCondition1('JasaRenovasiPerbaikanFasilitas');
	       
	// hapus elemen id Semua Sub JasaRenovasiPerbaikanStruktur selain 'JasaRenovasiPerbaikanStrukturAtap'
        removeCondition1('JasaPerbaikanStrukturBeton');
						removeCondition1('JasaPerbaikanGedungBertingkat');
			removeCondition1('JasaPerbaikanStrukturBangunanTua');
			removeCondition1('JasaPerbaikanStrukturBangunanMiring');
		
        removeCondition1('JasaRenovasiPerbaikanStrukturPondasi');
        removeCondition1('JasaRenovasiPerbaikanStrukturLantai');
	removeCondition1('JasaRenovasiPerbaikanStrukturDinding');
	removeCondition1('JasaRenovasiPerbaikanStrukturKolomBalok');
	removeCondition1('JasaRenovasiPerbaikanRehabilitasiBeton');
       
        // hapus elemen id Semua Sub JasaRenovasiPerbaikanInfrastruktur
        removeCondition1('JasaRenovasiPerbaikanInfrastrukturJalan');
        removeCondition1('JasaRenovasiPerbaikanInfrastrukturJembatan');
        removeCondition1('JasaRenovasiPerbaikanInfrastrukturSaluran');
        removeCondition1('JasaRenovasiPerbaikanInfrastrukturTrotoar');

	// hapus elemen id Semua Sub JasaRenovasiPerbaikanBangunan
        removeCondition1('JasaRenovasiPerbaikanBangunanRumah');
        removeCondition1('JasaRenovasiPerbaikanBangunanKantor');
        removeCondition1('JasaRenovasiPerbaikanBangunanPabrik');
        removeCondition1('JasaRenovasiPerbaikanBangunanGedung');
        removeCondition1('JasaRenovasiPerbaikanBangunanGudang');
        removeCondition1('JasaRenovasiPerbaikanBangunanHotel');

	 // hapus elemen id Semua Sub JasaRenovasiPerbaikanInterior
        removeCondition1('JasaRenovasiInteriorRumah');
        removeCondition1('JasaRenovasiInteriorKantor');
        removeCondition1('JasaRenovasiInteriorApartemen');
        removeCondition1('JasaRenovasiInteriorHotel');
        removeCondition1('JasaRenovasiInteriorToko');
        removeCondition1('JasaRenovasiInteriorCustom');
        removeCondition1('JasaRenovasiInteriorRuangan');
	    
       // hapus elemen id Semua Sub JasaRenovasiPerbaikanFasadEksterior
        removeCondition1('JasaRenovasiFasadBangunan');
        removeCondition1('JasaRenovasiEksteriorBangunan');
        removeCondition1('JasaPerbaikanArsitekturEksterior');

	// hapus elemen id Semua Sub JasaRenovasiPerbaikanFasilitas
        removeCondition1('JasaRenovasiPerbaikanStadionOlahraga');
        removeCondition1('JasaRenovasiPerbaikanSekolah');
        removeCondition1('JasaRenovasiPerbaikanRumahSakit');
        removeCondition1('JasaRenovasiPerbaikanTempatIbadah');
        removeCondition1('JasaRenovasiPerbaikanTerminal');
        removeCondition1('JasaRenovasiPerbaikanHalte');
        removeCondition1('JasaRenovasiPerbaikanTamanKota');
       
	JasaKonstruksiPerbaikanLinkSub.style.visibility = 'visible';
       // JasaRenovasiPerbaikanLinkSub.style.visibility = 'visible';
		JasaRenovasiPerbaikanPerawatanPerbaikanBangunanLink.style.visibility = 'visible';
		
        JasaRenovasiPerbaikanStrukturLink.style.visibility = 'visible';
	//tampilkan menu JasaRenovasiPerbaikanStrukturAtap
	JasaRenovasiPerbaikanStrukturAtapLink.style.visibility = 'visible';
        pageNameKonstruksiPerbaikan1.textContent = urlMappingPerbaikanStrukturAtap[cleanUrlJasaPerbaikanKonsSub];    
    }
   
    	  // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingPerbaikanStrukturAtap[cleanUrlJasaPerbaikanKonsSub]) {
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
	      "name": "Jasa Perawatan & Perbaikan Bangunan",
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
	      "name": "Jasa Perbaikan Struktur Atap",
	      "item": "https://www.betonjayareadymix.com/p/jasa-perbaikan-struktur-atap.html"
	    },
	  {
	    "@type": "ListItem",
	     "position": 6,
	      "name": urlMappingPerbaikanStrukturAtap[cleanUrlJasaPerbaikanKonsSub],
	      "item": cleanUrlJasaPerbaikanKonsSub
	   }
	  ]
	};
	
	       const script = document.createElement('script');
	       script.type = 'application/ld+json';
	       script.text = JSON.stringify(jsonLDBreadcrumb);
	       document.head.appendChild(script);
     }

    if (urlMappingRehabilitasiBeton[cleanUrlJasaPerbaikanKonsSub]) {
        restoreCondition1('JasaKonsPerbaikan');
		restoreCondition1('JasaRenovasiPerbaikanPerawatanPerbaikanBangunan');
	   removeCondition1('JasaRenovasiPerbaikanSub');

			  	   restoreCondition1('JasaRenovasiPerbaikanStruktur');
	   removeCondition1('JasaPerbaikanElemenArsitekturalBangunan');
	   removeCondition1('JasaPerbaikanAtapDrainaseBangunan');
	   removeCondition1('JasaPerbaikanKebocoranWaterproofing');
		
        restoreCondition1('JasaRenovasiPerbaikanStruktur');
        restoreCondition1('JasaRenovasiPerbaikanRehabilitasiBeton');

		
           // hapus elemen id DIV Lain
	removeCondition1('ProdukInFur');
        removeCondition1('MaterialKons');
	removeCondition1('ProdukKons');
        //removeCondition1('ProdukKonsSaluran');
        //removeCondition1('ProdukKonsPembatas');
        removeCondition1('JasaKonsPembatas');
        removeCondition1('JasaKonsJalanPerkerasan');
        removeCondition1('JasaKonsPondasiTanah');
	removeCondition1('JasaKons');
	removeCondition1('JasaKonsSub');
	removeCondition1('MenuKons');
	removeCondition1('JasaKonsFinishing');
        removeCondition1('JasaKonsStruktur');
	
	// hapus elemen id Sub JasaRenovasiPerbaikan Selain 'JasaRenovasiPerbaikanStruktur'
        removeCondition1('JasaRenovasiPerbaikanInfrastruktur');
        removeCondition1('JasaRenovasiPerbaikanBangunan');
        removeCondition1('JasaRenovasiPerbaikanInterior');
	removeCondition1('JasaRenovasiPerbaikanFasad');
	removeCondition1('JasaRenovasiPerbaikanFasilitas');
	       
	// hapus elemen id Semua Sub JasaRenovasiPerbaikanStruktur selain 'JasaRenovasiPerbaikanRehabilitasiBeton'
        removeCondition1('JasaPerbaikanStrukturBeton');
						removeCondition1('JasaPerbaikanGedungBertingkat');
			removeCondition1('JasaPerbaikanStrukturBangunanTua');
			removeCondition1('JasaPerbaikanStrukturBangunanMiring');
		
        removeCondition1('JasaRenovasiPerbaikanStrukturPondasi');
        removeCondition1('JasaRenovasiPerbaikanStrukturLantai');
	removeCondition1('JasaRenovasiPerbaikanStrukturDinding');
	removeCondition1('JasaRenovasiPerbaikanStrukturKolomBalok');
	removeCondition1('JasaRenovasiPerbaikanStrukturAtap');
       
        // hapus elemen id Semua Sub JasaRenovasiPerbaikanInfrastruktur
        removeCondition1('JasaRenovasiPerbaikanInfrastrukturJalan');
        removeCondition1('JasaRenovasiPerbaikanInfrastrukturJembatan');
        removeCondition1('JasaRenovasiPerbaikanInfrastrukturSaluran');
        removeCondition1('JasaRenovasiPerbaikanInfrastrukturTrotoar');

	// hapus elemen id Semua Sub JasaRenovasiPerbaikanBangunan
        removeCondition1('JasaRenovasiPerbaikanBangunanRumah');
        removeCondition1('JasaRenovasiPerbaikanBangunanKantor');
        removeCondition1('JasaRenovasiPerbaikanBangunanPabrik');
        removeCondition1('JasaRenovasiPerbaikanBangunanGedung');
        removeCondition1('JasaRenovasiPerbaikanBangunanGudang');
        removeCondition1('JasaRenovasiPerbaikanBangunanHotel');

	 // hapus elemen id Semua Sub JasaRenovasiPerbaikanInterior
        removeCondition1('JasaRenovasiInteriorRumah');
        removeCondition1('JasaRenovasiInteriorKantor');
        removeCondition1('JasaRenovasiInteriorApartemen');
        removeCondition1('JasaRenovasiInteriorHotel');
        removeCondition1('JasaRenovasiInteriorToko');
        removeCondition1('JasaRenovasiInteriorCustom');
        removeCondition1('JasaRenovasiInteriorRuangan');
	    
       // hapus elemen id Semua Sub JasaRenovasiPerbaikanFasadEksterior
        removeCondition1('JasaRenovasiFasadBangunan');
        removeCondition1('JasaRenovasiEksteriorBangunan');
        removeCondition1('JasaPerbaikanArsitekturEksterior');

	// hapus elemen id Semua Sub JasaRenovasiPerbaikanFasilitas
        removeCondition1('JasaRenovasiPerbaikanStadionOlahraga');
        removeCondition1('JasaRenovasiPerbaikanSekolah');
        removeCondition1('JasaRenovasiPerbaikanRumahSakit');
        removeCondition1('JasaRenovasiPerbaikanTempatIbadah');
        removeCondition1('JasaRenovasiPerbaikanTerminal');
        removeCondition1('JasaRenovasiPerbaikanHalte');
        removeCondition1('JasaRenovasiPerbaikanTamanKota');
       
	JasaKonstruksiPerbaikanLinkSub.style.visibility = 'visible';
        //JasaRenovasiPerbaikanLinkSub.style.visibility = 'visible';
		JasaRenovasiPerbaikanPerawatanPerbaikanBangunanLink.style.visibility = 'visible';
		
        JasaRenovasiPerbaikanStrukturLink.style.visibility = 'visible';
	//tampilkan menu JasaRenovasiPerbaikanRehabilitasiBeton
	JasaRenovasiPerbaikanRehabilitasiBetonLink.style.visibility = 'visible';
        pageNameKonstruksiPerbaikan1.textContent = urlMappingRehabilitasiBeton[cleanUrlJasaPerbaikanKonsSub];    
    }
    
    	  // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingRehabilitasiBeton[cleanUrlJasaPerbaikanKonsSub]) {
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
	      "name": "Jasa Perawatan & Perbaikan Bangunan",
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
	      "name": urlMappingRehabilitasiBeton[cleanUrlJasaPerbaikanKonsSub],
	      "item": cleanUrlJasaPerbaikanKonsSub
	   }
	  ]
	};
	
	       const script = document.createElement('script');
	       script.type = 'application/ld+json';
	       script.text = JSON.stringify(jsonLDBreadcrumb);
	       document.head.appendChild(script);
     }

	
    // JasaRenovasiPerbaikanInfrastruktur
	/*
    if (urlMappingPerbaikanInfrastruktur[cleanUrlJasaPerbaikanKonsSub]) {
        restoreCondition1('JasaKonsPerbaikan');
        restoreCondition1('JasaRenovasiPerbaikanInfrastruktur');
     
       // hapus elemen id DIV Lain
	removeCondition1('ProdukInFur');
        removeCondition1('MaterialKons');
	removeCondition1('ProdukKons');
        //removeCondition1('ProdukKonsSaluran');
        //removeCondition1('ProdukKonsPembatas');
        removeCondition1('JasaKonsPembatas');
        removeCondition1('JasaKonsJalanPerkerasan');
        removeCondition1('JasaKonsPondasiTanah');
	removeCondition1('JasaKons');
	removeCondition1('JasaKonsSub');
	removeCondition1('MenuKons');
	removeCondition1('JasaKonsFinishing');
        removeCondition1('JasaKonsStruktur');

        // hapus elemen JasaPerbaikanKons Lain
        removeCondition1('JasaRenovasiPerbaikanStruktur');
        removeCondition1('JasaRenovasiPerbaikanBangunan');
        removeCondition1('JasaRenovasiPerbaikanInterior');
	removeCondition1('JasaRenovasiPerbaikanFasad');
	removeCondition1('JasaRenovasiPerbaikanFasilitas');

	// hapus elemen id Semua Sub JasaRenovasiPerbaikanStruktur
	removeCondition1('JasaPerbaikanStrukturBeton');
						removeCondition1('JasaPerbaikanGedungBertingkat');
			removeCondition1('JasaPerbaikanStrukturBangunanTua');
			removeCondition1('JasaPerbaikanStrukturBangunanMiring');
		
        removeCondition1('JasaRenovasiPerbaikanStrukturKolomBalok');
        removeCondition1('JasaRenovasiPerbaikanStrukturPondasi');
        removeCondition1('JasaRenovasiPerbaikanStrukturLantai');
	removeCondition1('JasaRenovasiPerbaikanStrukturDinding');
	removeCondition1('JasaRenovasiPerbaikanStrukturAtap');
	removeCondition1('JasaRenovasiPerbaikanRehabilitasiBeton');
       
        // hapus elemen id Semua Sub JasaRenovasiPerbaikanInfrastruktur
        removeCondition1('JasaRenovasiPerbaikanInfrastrukturJalan');
        removeCondition1('JasaRenovasiPerbaikanInfrastrukturJembatan');
        removeCondition1('JasaRenovasiPerbaikanInfrastrukturSaluran');
        removeCondition1('JasaRenovasiPerbaikanInfrastrukturTrotoar');
       
       // hapus elemen id Semua Sub JasaRenovasiPerbaikanBangunan
        removeCondition1('JasaRenovasiPerbaikanBangunanRumah');
        removeCondition1('JasaRenovasiPerbaikanBangunanKantor');
        removeCondition1('JasaRenovasiPerbaikanBangunanPabrik');
        removeCondition1('JasaRenovasiPerbaikanBangunanGedung');
        removeCondition1('JasaRenovasiPerbaikanBangunanGudang');
        removeCondition1('JasaRenovasiPerbaikanBangunanHotel');

	 // hapus elemen id Semua Sub JasaRenovasiPerbaikanInterior
        removeCondition1('JasaRenovasiInteriorRumah');
        removeCondition1('JasaRenovasiInteriorKantor');
        removeCondition1('JasaRenovasiInteriorApartemen');
        removeCondition1('JasaRenovasiInteriorHotel');
        removeCondition1('JasaRenovasiInteriorToko');
        removeCondition1('JasaRenovasiInteriorCustom');
        removeCondition1('JasaRenovasiInteriorRuangan');
	    
       // hapus elemen id Semua Sub JasaRenovasiPerbaikanFasadEksterior
        removeCondition1('JasaRenovasiFasadBangunan');
        removeCondition1('JasaRenovasiEksteriorBangunan');
        removeCondition1('JasaPerbaikanArsitekturEksterior');

	// hapus elemen id Semua Sub JasaRenovasiPerbaikanFasilitas
        removeCondition1('JasaRenovasiPerbaikanStadionOlahraga');
        removeCondition1('JasaRenovasiPerbaikanSekolah');
        removeCondition1('JasaRenovasiPerbaikanRumahSakit');
        removeCondition1('JasaRenovasiPerbaikanTempatIbadah');
        removeCondition1('JasaRenovasiPerbaikanTerminal');
        removeCondition1('JasaRenovasiPerbaikanHalte');
        removeCondition1('JasaRenovasiPerbaikanTamanKota');
	
       
        JasaKonstruksiPerbaikanLinkSub.style.visibility = 'visible';
        JasaRenovasiPerbaikanLinkSub.style.visibility = 'visible';
        JasaRenovasiPerbaikanInfrastrukturLink.style.visibility = 'visible';
        pageNameKonstruksiPerbaikan1.textContent = urlMappingPerbaikanInfrastruktur[cleanUrlJasaPerbaikanKonsSub];
    }
    	  // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingPerbaikanInfrastruktur[cleanUrlJasaPerbaikanKonsSub]) {
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
	      "name": "Jasa Perbaikan Infrastruktur",
	      "item": "https://www.betonjayareadymix.com/p/jasa-perbaikan-infrastruktur.html"
	    },
	  {
	    "@type": "ListItem",
	     "position": 5,
	      "name": urlMappingPerbaikanInfrastruktur[cleanUrlJasaPerbaikanKonsSub],
	      "item": cleanUrlJasaPerbaikanKonsSub
	   }
	  ]
	};
	
	       const script = document.createElement('script');
	       script.type = 'application/ld+json';
	       script.text = JSON.stringify(jsonLDBreadcrumb);
	       document.head.appendChild(script);
     }
	 */
  if (urlMappingPerbaikanKebocoranWaterproofing[cleanUrlJasaPerbaikanKonsSub]) {
        restoreCondition1('JasaKonsPerbaikan');
	   restoreCondition1('JasaRenovasiPerbaikanPerawatanPerbaikanBangunan');
	   removeCondition1('JasaRenovasiPerbaikanSub');

	  	   restoreCondition1('JasaPerbaikanKebocoranWaterproofing');
	   removeCondition1('JasaPerbaikanElemenArsitekturalBangunan');
	   removeCondition1('JasaPerbaikanAtapDrainaseBangunan');
	   removeCondition1('JasaRenovasiPerbaikanStruktur');


        restoreCondition1('');
           // hapus elemen id DIV Lain
	removeCondition1('ProdukInFur');
        removeCondition1('MaterialKons');
	removeCondition1('ProdukKons');
       //removeCondition1('ProdukKonsSaluran');
        //removeCondition1('ProdukKonsPembatas');
        removeCondition1('JasaKonsPembatas');
        removeCondition1('JasaKonsJalanPerkerasan');
        removeCondition1('JasaKonsPondasiTanah');
	removeCondition1('JasaKons');
	removeCondition1('JasaKonsSub');
	removeCondition1('MenuKons');
	removeCondition1('JasaKonsFinishing');
        removeCondition1('JasaKonsStruktur');
	   
	
	// hapus elemen id Sub JasaRenovasiPerbaikan yang lain
        removeCondition1('JasaRenovasiPerbaikanInfrastruktur');
        removeCondition1('JasaRenovasiPerbaikanBangunan');
        removeCondition1('JasaRenovasiPerbaikanInterior');
	removeCondition1('JasaRenovasiPerbaikanFasad');
	removeCondition1('JasaRenovasiPerbaikanFasilitas');

	// hapus elemen id Semua Sub JasaRenovasiPerbaikanStruktur
	
	removeCondition1('JasaPerbaikanStrukturBeton');
				removeCondition1('JasaPerbaikanGedungBertingkat');
			removeCondition1('JasaPerbaikanStrukturBangunanTua');
			removeCondition1('JasaPerbaikanStrukturBangunanMiring');
	removeCondition1('JasaRenovasiPerbaikanStrukturKolomBalok');
        removeCondition1('JasaRenovasiPerbaikanStrukturPondasi');
        removeCondition1('JasaRenovasiPerbaikanStrukturLantai');
	removeCondition1('JasaRenovasiPerbaikanStrukturDinding');
	removeCondition1('JasaRenovasiPerbaikanStrukturAtap');
	removeCondition1('JasaRenovasiPerbaikanRehabilitasiBeton');
       
        // hapus elemen id Semua Sub JasaRenovasiPerbaikanInfrastruktur
        removeCondition1('JasaRenovasiPerbaikanInfrastrukturJalan');
        removeCondition1('JasaRenovasiPerbaikanInfrastrukturJembatan');
        removeCondition1('JasaRenovasiPerbaikanInfrastrukturSaluran');
        removeCondition1('JasaRenovasiPerbaikanInfrastrukturTrotoar');

       // hapus elemen id Semua Sub JasaRenovasiPerbaikanBangunan
        removeCondition1('JasaRenovasiPerbaikanBangunanRumah');
        removeCondition1('JasaRenovasiPerbaikanBangunanKantor');
        removeCondition1('JasaRenovasiPerbaikanBangunanPabrik');
        removeCondition1('JasaRenovasiPerbaikanBangunanGedung');
        removeCondition1('JasaRenovasiPerbaikanBangunanGudang');
        removeCondition1('JasaRenovasiPerbaikanBangunanHotel');

	 // hapus elemen id Semua Sub JasaRenovasiPerbaikanInterior
        removeCondition1('JasaRenovasiInteriorRumah');
        removeCondition1('JasaRenovasiInteriorKantor');
        removeCondition1('JasaRenovasiInteriorApartemen');
        removeCondition1('JasaRenovasiInteriorHotel');
        removeCondition1('JasaRenovasiInteriorToko');
        removeCondition1('JasaRenovasiInteriorCustom');
        removeCondition1('JasaRenovasiInteriorRuangan');
	   
       // hapus elemen id Semua Sub JasaRenovasiPerbaikanFasadEksterior
        removeCondition1('JasaRenovasiFasadBangunan');
        removeCondition1('JasaRenovasiEksteriorBangunan');
        removeCondition1('JasaPerbaikanArsitekturEksterior');

	// hapus elemen id Semua Sub JasaRenovasiPerbaikanFasilitas
        removeCondition1('JasaRenovasiPerbaikanStadionOlahraga');
        removeCondition1('JasaRenovasiPerbaikanSekolah');
        removeCondition1('JasaRenovasiPerbaikanRumahSakit');
        removeCondition1('JasaRenovasiPerbaikanTempatIbadah');
        removeCondition1('JasaRenovasiPerbaikanTerminal');
        removeCondition1('JasaRenovasiPerbaikanHalte');
        removeCondition1('JasaRenovasiPerbaikanTamanKota');
	   
        JasaKonstruksiPerbaikanLinkSub.style.visibility = 'visible';
        //JasaRenovasiPerbaikanLinkSub.style.visibility = 'visible';
	    JasaRenovasiPerbaikanPerawatanPerbaikanBangunanLink.style.visibility = 'visible';
        JasaPerbaikanKebocoranWaterproofingLink.style.visibility = 'visible';
        pageNameKonstruksiPerbaikan1.textContent = urlMappingPerbaikanKebocoranWaterproofing[cleanUrlJasaPerbaikanKonsSub];
    }
	  // ✅ Tambahkan JSON-LD Breadcrumb otomatis
	if (urlMappingPerbaikanKebocoranWaterproofing[cleanUrlJasaPerbaikanKonsSub]) {
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
	      "name": "Jasa Perawatan & Perbaikan Bangunan",
	      "item": "https://www.betonjayareadymix.com/p/jasa-perawatan-perbaikan-bangunan.html"
	    },
	    {
	      "@type": "ListItem",
	      "position": 4,
	      "name": "Jasa Perbaikan Kebocoran & Waterproofing",
	      "item": "https://www.betonjayareadymix.com/p/jasa-perbaikan-kebocoran-waterproofing.html"
	    },
	  {
	    "@type": "ListItem",
	     "position": 5,
	      "name": urlMappingPerbaikanKebocoranWaterproofing[cleanUrlJasaPerbaikanKonsSub],
	      "item": cleanUrlJasaPerbaikanKonsSub
	   }
	  ]
	};
	
	       const script = document.createElement('script');
	       script.type = 'application/ld+json';
	       script.text = JSON.stringify(jsonLDBreadcrumb);
	       document.head.appendChild(script);
	   }

if (urlMappingPerbaikanElemenArsitektural[cleanUrlJasaPerbaikanKonsSub]) {
        restoreCondition1('JasaKonsPerbaikan');
	   restoreCondition1('JasaRenovasiPerbaikanPerawatanPerbaikanBangunan');
	   removeCondition1('JasaRenovasiPerbaikanSub');

	  	   restoreCondition1('JasaPerbaikanElemenArsitekturalBangunan');
	   removeCondition1('JasaPerbaikanKebocoranWaterproofing');
	   removeCondition1('JasaPerbaikanAtapDrainaseBangunan');
	   removeCondition1('JasaRenovasiPerbaikanStruktur');


        restoreCondition1('');
           // hapus elemen id DIV Lain
	removeCondition1('ProdukInFur');
        removeCondition1('MaterialKons');
	removeCondition1('ProdukKons');
       //removeCondition1('ProdukKonsSaluran');
        //removeCondition1('ProdukKonsPembatas');
        removeCondition1('JasaKonsPembatas');
        removeCondition1('JasaKonsJalanPerkerasan');
        removeCondition1('JasaKonsPondasiTanah');
	removeCondition1('JasaKons');
	removeCondition1('JasaKonsSub');
	removeCondition1('MenuKons');
	removeCondition1('JasaKonsFinishing');
        removeCondition1('JasaKonsStruktur');
	   
	
	// hapus elemen id Sub JasaRenovasiPerbaikan yang lain
        removeCondition1('JasaRenovasiPerbaikanInfrastruktur');
        removeCondition1('JasaRenovasiPerbaikanBangunan');
        removeCondition1('JasaRenovasiPerbaikanInterior');
	removeCondition1('JasaRenovasiPerbaikanFasad');
	removeCondition1('JasaRenovasiPerbaikanFasilitas');

	// hapus elemen id Semua Sub JasaRenovasiPerbaikanStruktur
	
	removeCondition1('JasaPerbaikanStrukturBeton');
				removeCondition1('JasaPerbaikanGedungBertingkat');
			removeCondition1('JasaPerbaikanStrukturBangunanTua');
			removeCondition1('JasaPerbaikanStrukturBangunanMiring');
	removeCondition1('JasaRenovasiPerbaikanStrukturKolomBalok');
        removeCondition1('JasaRenovasiPerbaikanStrukturPondasi');
        removeCondition1('JasaRenovasiPerbaikanStrukturLantai');
	removeCondition1('JasaRenovasiPerbaikanStrukturDinding');
	removeCondition1('JasaRenovasiPerbaikanStrukturAtap');
	removeCondition1('JasaRenovasiPerbaikanRehabilitasiBeton');
       
        // hapus elemen id Semua Sub JasaRenovasiPerbaikanInfrastruktur
        removeCondition1('JasaRenovasiPerbaikanInfrastrukturJalan');
        removeCondition1('JasaRenovasiPerbaikanInfrastrukturJembatan');
        removeCondition1('JasaRenovasiPerbaikanInfrastrukturSaluran');
        removeCondition1('JasaRenovasiPerbaikanInfrastrukturTrotoar');

       // hapus elemen id Semua Sub JasaRenovasiPerbaikanBangunan
        removeCondition1('JasaRenovasiPerbaikanBangunanRumah');
        removeCondition1('JasaRenovasiPerbaikanBangunanKantor');
        removeCondition1('JasaRenovasiPerbaikanBangunanPabrik');
        removeCondition1('JasaRenovasiPerbaikanBangunanGedung');
        removeCondition1('JasaRenovasiPerbaikanBangunanGudang');
        removeCondition1('JasaRenovasiPerbaikanBangunanHotel');

	 // hapus elemen id Semua Sub JasaRenovasiPerbaikanInterior
        removeCondition1('JasaRenovasiInteriorRumah');
        removeCondition1('JasaRenovasiInteriorKantor');
        removeCondition1('JasaRenovasiInteriorApartemen');
        removeCondition1('JasaRenovasiInteriorHotel');
        removeCondition1('JasaRenovasiInteriorToko');
        removeCondition1('JasaRenovasiInteriorCustom');
        removeCondition1('JasaRenovasiInteriorRuangan');
	   
       // hapus elemen id Semua Sub JasaRenovasiPerbaikanFasadEksterior
        removeCondition1('JasaRenovasiFasadBangunan');
        removeCondition1('JasaRenovasiEksteriorBangunan');
        removeCondition1('JasaPerbaikanArsitekturEksterior');

	// hapus elemen id Semua Sub JasaRenovasiPerbaikanFasilitas
        removeCondition1('JasaRenovasiPerbaikanStadionOlahraga');
        removeCondition1('JasaRenovasiPerbaikanSekolah');
        removeCondition1('JasaRenovasiPerbaikanRumahSakit');
        removeCondition1('JasaRenovasiPerbaikanTempatIbadah');
        removeCondition1('JasaRenovasiPerbaikanTerminal');
        removeCondition1('JasaRenovasiPerbaikanHalte');
        removeCondition1('JasaRenovasiPerbaikanTamanKota');
	   
        JasaKonstruksiPerbaikanLinkSub.style.visibility = 'visible';
        //JasaRenovasiPerbaikanLinkSub.style.visibility = 'visible';
	    JasaRenovasiPerbaikanPerawatanPerbaikanBangunanLink.style.visibility = 'visible';
        JasaPerbaikanElemenArsitekturalBangunanLink.style.visibility = 'visible';
        pageNameKonstruksiPerbaikan1.textContent = urlMappingPerbaikanElemenArsitektural[cleanUrlJasaPerbaikanKonsSub];
    }
	  // ✅ Tambahkan JSON-LD Breadcrumb otomatis
	if (urlMappingPerbaikanElemenArsitektural[cleanUrlJasaPerbaikanKonsSub]) {
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
	      "name": "Jasa Perawatan & Perbaikan Bangunan",
	      "item": "https://www.betonjayareadymix.com/p/jasa-perawatan-perbaikan-bangunan.html"
	    },
	    {
	      "@type": "ListItem",
	      "position": 4,
	      "name": "Jasa Perbaikan Elemen Arsitektural Bangunan",
	      "item": "https://www.betonjayareadymix.com/p/jasa-perbaikan-elemen-arsitektural.html"
	    },
	  {
	    "@type": "ListItem",
	     "position": 5,
	      "name": urlMappingPerbaikanElemenArsitektural[cleanUrlJasaPerbaikanKonsSub],
	      "item": cleanUrlJasaPerbaikanKonsSub
	   }
	  ]
	};
	
	       const script = document.createElement('script');
	       script.type = 'application/ld+json';
	       script.text = JSON.stringify(jsonLDBreadcrumb);
	       document.head.appendChild(script);
	   }

if (urlMappingPerbaikanAtapDrainaseBangunan[cleanUrlJasaPerbaikanKonsSub]) {
        restoreCondition1('JasaKonsPerbaikan');
	   restoreCondition1('JasaRenovasiPerbaikanPerawatanPerbaikanBangunan');
	   removeCondition1('JasaRenovasiPerbaikanSub');

	  	   restoreCondition1('JasaPerbaikanAtapDrainaseBangunan');
	   removeCondition1('JasaPerbaikanElemenArsitekturalBangunan');
	   removeCondition1('JasaPerbaikanKebocoranWaterproofing');
	   removeCondition1('JasaRenovasiPerbaikanStruktur');


        restoreCondition1('');
           // hapus elemen id DIV Lain
	removeCondition1('ProdukInFur');
        removeCondition1('MaterialKons');
	removeCondition1('ProdukKons');
       //removeCondition1('ProdukKonsSaluran');
        //removeCondition1('ProdukKonsPembatas');
        removeCondition1('JasaKonsPembatas');
        removeCondition1('JasaKonsJalanPerkerasan');
        removeCondition1('JasaKonsPondasiTanah');
	removeCondition1('JasaKons');
	removeCondition1('JasaKonsSub');
	removeCondition1('MenuKons');
	removeCondition1('JasaKonsFinishing');
        removeCondition1('JasaKonsStruktur');
	   
	
	// hapus elemen id Sub JasaRenovasiPerbaikan yang lain
        removeCondition1('JasaRenovasiPerbaikanInfrastruktur');
        removeCondition1('JasaRenovasiPerbaikanBangunan');
        removeCondition1('JasaRenovasiPerbaikanInterior');
	removeCondition1('JasaRenovasiPerbaikanFasad');
	removeCondition1('JasaRenovasiPerbaikanFasilitas');

	// hapus elemen id Semua Sub JasaRenovasiPerbaikanStruktur
	
	removeCondition1('JasaPerbaikanStrukturBeton');
				removeCondition1('JasaPerbaikanGedungBertingkat');
			removeCondition1('JasaPerbaikanStrukturBangunanTua');
			removeCondition1('JasaPerbaikanStrukturBangunanMiring');
	removeCondition1('JasaRenovasiPerbaikanStrukturKolomBalok');
        removeCondition1('JasaRenovasiPerbaikanStrukturPondasi');
        removeCondition1('JasaRenovasiPerbaikanStrukturLantai');
	removeCondition1('JasaRenovasiPerbaikanStrukturDinding');
	removeCondition1('JasaRenovasiPerbaikanStrukturAtap');
	removeCondition1('JasaRenovasiPerbaikanRehabilitasiBeton');
       
        // hapus elemen id Semua Sub JasaRenovasiPerbaikanInfrastruktur
        removeCondition1('JasaRenovasiPerbaikanInfrastrukturJalan');
        removeCondition1('JasaRenovasiPerbaikanInfrastrukturJembatan');
        removeCondition1('JasaRenovasiPerbaikanInfrastrukturSaluran');
        removeCondition1('JasaRenovasiPerbaikanInfrastrukturTrotoar');

       // hapus elemen id Semua Sub JasaRenovasiPerbaikanBangunan
        removeCondition1('JasaRenovasiPerbaikanBangunanRumah');
        removeCondition1('JasaRenovasiPerbaikanBangunanKantor');
        removeCondition1('JasaRenovasiPerbaikanBangunanPabrik');
        removeCondition1('JasaRenovasiPerbaikanBangunanGedung');
        removeCondition1('JasaRenovasiPerbaikanBangunanGudang');
        removeCondition1('JasaRenovasiPerbaikanBangunanHotel');

	 // hapus elemen id Semua Sub JasaRenovasiPerbaikanInterior
        removeCondition1('JasaRenovasiInteriorRumah');
        removeCondition1('JasaRenovasiInteriorKantor');
        removeCondition1('JasaRenovasiInteriorApartemen');
        removeCondition1('JasaRenovasiInteriorHotel');
        removeCondition1('JasaRenovasiInteriorToko');
        removeCondition1('JasaRenovasiInteriorCustom');
        removeCondition1('JasaRenovasiInteriorRuangan');
	   
       // hapus elemen id Semua Sub JasaRenovasiPerbaikanFasadEksterior
        removeCondition1('JasaRenovasiFasadBangunan');
        removeCondition1('JasaRenovasiEksteriorBangunan');
        removeCondition1('JasaPerbaikanArsitekturEksterior');

	// hapus elemen id Semua Sub JasaRenovasiPerbaikanFasilitas
        removeCondition1('JasaRenovasiPerbaikanStadionOlahraga');
        removeCondition1('JasaRenovasiPerbaikanSekolah');
        removeCondition1('JasaRenovasiPerbaikanRumahSakit');
        removeCondition1('JasaRenovasiPerbaikanTempatIbadah');
        removeCondition1('JasaRenovasiPerbaikanTerminal');
        removeCondition1('JasaRenovasiPerbaikanHalte');
        removeCondition1('JasaRenovasiPerbaikanTamanKota');
	   
        JasaKonstruksiPerbaikanLinkSub.style.visibility = 'visible';
        //JasaRenovasiPerbaikanLinkSub.style.visibility = 'visible';
	    JasaRenovasiPerbaikanPerawatanPerbaikanBangunanLink.style.visibility = 'visible';
        JasaPerbaikanAtapDrainaseBangunanLink.style.visibility = 'visible';
        pageNameKonstruksiPerbaikan1.textContent = urlMappingPerbaikanAtapDrainaseBangunan[cleanUrlJasaPerbaikanKonsSub];
    }
	  // ✅ Tambahkan JSON-LD Breadcrumb otomatis
	if (urlMappingPerbaikanAtapDrainaseBangunan[cleanUrlJasaPerbaikanKonsSub]) {
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
	      "name": "Jasa Perawatan & Perbaikan Bangunan",
	      "item": "https://www.betonjayareadymix.com/p/jasa-perawatan-perbaikan-bangunan.html"
	    },
	    {
	      "@type": "ListItem",
	      "position": 4,
	      "name": "Jasa Perbaikan Atap & Drainase Bangunan",
	      "item": "https://www.betonjayareadymix.com/p/jasa-perbaikan-atap-drainase-bangunan.html"
	    },
	  {
	    "@type": "ListItem",
	     "position": 5,
	      "name": urlMappingPerbaikanAtapDrainaseBangunan[cleanUrlJasaPerbaikanKonsSub],
	      "item": cleanUrlJasaPerbaikanKonsSub
	   }
	  ]
	};
	
	       const script = document.createElement('script');
	       script.type = 'application/ld+json';
	       script.text = JSON.stringify(jsonLDBreadcrumb);
	       document.head.appendChild(script);
	   }

// SUB JasaRenovasiPerbaikanInfrastruktur
    if (urlMappingPerbaikanInfrastrukturJalan[cleanUrlJasaPerbaikanKonsSub]) {
        restoreCondition1('JasaKonsPerbaikan');
		 restoreCondition1('JasaRenovasiPerbaikanInfrastruktur');
        restoreCondition1('JasaRenovasiPerbaikanInfrastrukturJalan');
		
		removeCondition1('JasaRenovasiPerbaikanSub');
	    removeCondition1('JasaRenovasiPerbaikanPerawatanPerbaikanBangunan');	
       
     
       // hapus elemen id DIV Lain
	removeCondition1('ProdukInFur');
        removeCondition1('MaterialKons');
	removeCondition1('ProdukKons');
        //removeCondition1('ProdukKonsSaluran');
        //removeCondition1('ProdukKonsPembatas');
        removeCondition1('JasaKonsPembatas');
        removeCondition1('JasaKonsJalanPerkerasan');
        removeCondition1('JasaKonsPondasiTanah');
	removeCondition1('JasaKons');
	removeCondition1('JasaKonsSub');
	removeCondition1('MenuKons');
	removeCondition1('JasaKonsFinishing');
        removeCondition1('JasaKonsStruktur');

        // hapus elemen JasaPerbaikanKons Lain
       		   removeCondition1('JasaPerbaikanElemenArsitekturalBangunan');
	   removeCondition1('JasaPerbaikanAtapDrainaseBangunan');
	   removeCondition1('JasaPerbaikanKebocoranWaterproofing');
        removeCondition1('JasaRenovasiPerbaikanStruktur');
		
        removeCondition1('JasaRenovasiPerbaikanBangunan');
        removeCondition1('JasaRenovasiPerbaikanInterior');
	removeCondition1('JasaRenovasiPerbaikanFasad');
	removeCondition1('JasaRenovasiPerbaikanFasilitas');

	// hapus elemen id Semua Sub JasaRenovasiPerbaikanStruktur
	removeCondition1('JasaRenovasiPerawatanPerbaikanBangunanPost');
	removeCondition1('JasaPerbaikanStrukturBeton');
						removeCondition1('JasaPerbaikanGedungBertingkat');
			removeCondition1('JasaPerbaikanStrukturBangunanTua');
			removeCondition1('JasaPerbaikanStrukturBangunanMiring');
		
        removeCondition1('JasaRenovasiPerbaikanStrukturKolomBalok');
        removeCondition1('JasaRenovasiPerbaikanStrukturPondasi');
        removeCondition1('JasaRenovasiPerbaikanStrukturLantai');
	removeCondition1('JasaRenovasiPerbaikanStrukturDinding');
	removeCondition1('JasaRenovasiPerbaikanStrukturAtap');
	removeCondition1('JasaRenovasiPerbaikanRehabilitasiBeton');
       
        // hapus elemen id Semua Sub JasaRenovasiPerbaikanInfrastruktur
        //removeCondition1('');
        removeCondition1('JasaRenovasiPerbaikanInfrastrukturJembatan');
        removeCondition1('JasaRenovasiPerbaikanInfrastrukturSaluran');
        removeCondition1('JasaRenovasiPerbaikanInfrastrukturTrotoar');
       
       // hapus elemen id Semua Sub JasaRenovasiPerbaikanBangunan
        removeCondition1('JasaRenovasiPerbaikanBangunanRumah');
        removeCondition1('JasaRenovasiPerbaikanBangunanKantor');
        removeCondition1('JasaRenovasiPerbaikanBangunanPabrik');
        removeCondition1('JasaRenovasiPerbaikanBangunanGedung');
        removeCondition1('JasaRenovasiPerbaikanBangunanGudang');
        removeCondition1('JasaRenovasiPerbaikanBangunanHotel');

	 // hapus elemen id Semua Sub JasaRenovasiPerbaikanInterior
        removeCondition1('JasaRenovasiInteriorRumah');
        removeCondition1('JasaRenovasiInteriorKantor');
        removeCondition1('JasaRenovasiInteriorApartemen');
        removeCondition1('JasaRenovasiInteriorHotel');
        removeCondition1('JasaRenovasiInteriorToko');
        removeCondition1('JasaRenovasiInteriorCustom');
        removeCondition1('JasaRenovasiInteriorRuangan');
	    
       // hapus elemen id Semua Sub JasaRenovasiPerbaikanFasadEksterior
        removeCondition1('JasaRenovasiFasadBangunan');
        removeCondition1('JasaRenovasiEksteriorBangunan');
        removeCondition1('JasaPerbaikanArsitekturEksterior');

	// hapus elemen id Semua Sub JasaRenovasiPerbaikanFasilitas
        removeCondition1('JasaRenovasiPerbaikanStadionOlahraga');
        removeCondition1('JasaRenovasiPerbaikanSekolah');
        removeCondition1('JasaRenovasiPerbaikanRumahSakit');
        removeCondition1('JasaRenovasiPerbaikanTempatIbadah');
        removeCondition1('JasaRenovasiPerbaikanTerminal');
        removeCondition1('JasaRenovasiPerbaikanHalte');
        removeCondition1('JasaRenovasiPerbaikanTamanKota');
	
       
        JasaKonstruksiPerbaikanLinkSub.style.visibility = 'visible';
        //JasaRenovasiPerbaikanLinkSub.style.visibility = 'visible';
        JasaRenovasiPerbaikanInfrastrukturLink.style.visibility = 'visible';
	    
        JasaRenovasiPerbaikanInfrastrukturJalanLink.style.visibility = 'visible';
        pageNameKonstruksiPerbaikan1.textContent = urlMappingPerbaikanInfrastrukturJalan[cleanUrlJasaPerbaikanKonsSub];
    }
// ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingPerbaikanInfrastrukturJalan[cleanUrlJasaPerbaikanKonsSub]) {
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
	      "name": "Jasa Perbaikan Infrastruktur",
	      "item": "https://www.betonjayareadymix.com/p/jasa-perbaikan-infrastruktur.html"
	    },
	   {
	      "@type": "ListItem",
	      "position": 4,
	      "name": "Jasa Perbaikan Jalan",
	      "item": "https://www.betonjayareadymix.com/p/jasa-perbaikan-jalan.html"
	    },
	  {
	    "@type": "ListItem",
	     "position": 5,
	      "name": urlMappingPerbaikanInfrastrukturJalan[cleanUrlJasaPerbaikanKonsSub],
	      "item": cleanUrlJasaPerbaikanKonsSub
	   }
	  ]
	};
	
	       const script = document.createElement('script');
	       script.type = 'application/ld+json';
	       script.text = JSON.stringify(jsonLDBreadcrumb);
	       document.head.appendChild(script);
     }
    if (urlMappingPerbaikanInfrastrukturTrotoar[cleanUrlJasaPerbaikanKonsSub]) {
        restoreCondition1('JasaKonsPerbaikan');
        restoreCondition1('JasaRenovasiPerbaikanInfrastruktur');
        restoreCondition1('JasaRenovasiPerbaikanInfrastrukturTrotoar');

		removeCondition1('JasaRenovasiPerbaikanSub');
	    removeCondition1('JasaRenovasiPerbaikanPerawatanPerbaikanBangunan');	
     
       // hapus elemen id DIV Lain
	removeCondition1('ProdukInFur');
        removeCondition1('MaterialKons');
	removeCondition1('ProdukKons');
        //removeCondition1('ProdukKonsSaluran');
        //removeCondition1('ProdukKonsPembatas');
        removeCondition1('JasaKonsPembatas');
        removeCondition1('JasaKonsJalanPerkerasan');
        removeCondition1('JasaKonsPondasiTanah');
	removeCondition1('JasaKons');
	removeCondition1('JasaKonsSub');
	removeCondition1('MenuKons');
	removeCondition1('JasaKonsFinishing');
        removeCondition1('JasaKonsStruktur');

        // hapus elemen JasaPerbaikanKons Lain
        		   removeCondition1('JasaPerbaikanElemenArsitekturalBangunan');
	   removeCondition1('JasaPerbaikanAtapDrainaseBangunan');
	   removeCondition1('JasaPerbaikanKebocoranWaterproofing');
        removeCondition1('JasaRenovasiPerbaikanStruktur');
		
        removeCondition1('JasaRenovasiPerbaikanBangunan');
        removeCondition1('JasaRenovasiPerbaikanInterior');
	removeCondition1('JasaRenovasiPerbaikanFasad');
	removeCondition1('JasaRenovasiPerbaikanFasilitas');

	// hapus elemen id Semua Sub JasaRenovasiPerbaikanStruktur
		removeCondition1('JasaRenovasiPerawatanPerbaikanBangunanPost');
	removeCondition1('JasaPerbaikanStrukturBeton');
						removeCondition1('JasaPerbaikanGedungBertingkat');
			removeCondition1('JasaPerbaikanStrukturBangunanTua');
			removeCondition1('JasaPerbaikanStrukturBangunanMiring');
		
        removeCondition1('JasaRenovasiPerbaikanStrukturKolomBalok');
        removeCondition1('JasaRenovasiPerbaikanStrukturPondasi');
        removeCondition1('JasaRenovasiPerbaikanStrukturLantai');
	removeCondition1('JasaRenovasiPerbaikanStrukturDinding');
	removeCondition1('JasaRenovasiPerbaikanStrukturAtap');
	removeCondition1('JasaRenovasiPerbaikanRehabilitasiBeton');
       
        // hapus elemen id Semua Sub JasaRenovasiPerbaikanInfrastruktur
        //removeCondition1('');
        removeCondition1('JasaRenovasiPerbaikanInfrastrukturJembatan');
        removeCondition1('JasaRenovasiPerbaikanInfrastrukturSaluran');
        removeCondition1('JasaRenovasiPerbaikanInfrastrukturJalan');
       
       // hapus elemen id Semua Sub JasaRenovasiPerbaikanBangunan
        removeCondition1('JasaRenovasiPerbaikanBangunanRumah');
        removeCondition1('JasaRenovasiPerbaikanBangunanKantor');
        removeCondition1('JasaRenovasiPerbaikanBangunanPabrik');
        removeCondition1('JasaRenovasiPerbaikanBangunanGedung');
        removeCondition1('JasaRenovasiPerbaikanBangunanGudang');
        removeCondition1('JasaRenovasiPerbaikanBangunanHotel');

	 // hapus elemen id Semua Sub JasaRenovasiPerbaikanInterior
        removeCondition1('JasaRenovasiInteriorRumah');
        removeCondition1('JasaRenovasiInteriorKantor');
        removeCondition1('JasaRenovasiInteriorApartemen');
        removeCondition1('JasaRenovasiInteriorHotel');
        removeCondition1('JasaRenovasiInteriorToko');
        removeCondition1('JasaRenovasiInteriorCustom');
        removeCondition1('JasaRenovasiInteriorRuangan');
	    
       // hapus elemen id Semua Sub JasaRenovasiPerbaikanFasadEksterior
        removeCondition1('JasaRenovasiFasadBangunan');
        removeCondition1('JasaRenovasiEksteriorBangunan');
        removeCondition1('JasaPerbaikanArsitekturEksterior');

	// hapus elemen id Semua Sub JasaRenovasiPerbaikanFasilitas
        removeCondition1('JasaRenovasiPerbaikanStadionOlahraga');
        removeCondition1('JasaRenovasiPerbaikanSekolah');
        removeCondition1('JasaRenovasiPerbaikanRumahSakit');
        removeCondition1('JasaRenovasiPerbaikanTempatIbadah');
        removeCondition1('JasaRenovasiPerbaikanTerminal');
        removeCondition1('JasaRenovasiPerbaikanHalte');
        removeCondition1('JasaRenovasiPerbaikanTamanKota');
	
       
        JasaKonstruksiPerbaikanLinkSub.style.visibility = 'visible';
        //JasaRenovasiPerbaikanLinkSub.style.visibility = 'visible';
        JasaRenovasiPerbaikanInfrastrukturLink.style.visibility = 'visible';
	    
        JasaRenovasiPerbaikanInfrastrukturTrotoarLink.style.visibility = 'visible';
        pageNameKonstruksiPerbaikan1.textContent = urlMappingPerbaikanInfrastrukturTrotoar[cleanUrlJasaPerbaikanKonsSub];
    }
  
// ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingPerbaikanInfrastrukturTrotoar[cleanUrlJasaPerbaikanKonsSub]) {
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
	      "name": "Jasa Perbaikan Infrastruktur",
	      "item": "https://www.betonjayareadymix.com/p/jasa-perbaikan-infrastruktur.html"
	    },
	  {
	      "@type": "ListItem",
	      "position": 4,
	      "name": "Jasa Perbaikan Trotoar",
	      "item": "https://www.betonjayareadymix.com/p/jasa-perbaikan-trotoar.html"
	    },
	  {
	    "@type": "ListItem",
	     "position": 5,
	      "name": urlMappingPerbaikanInfrastrukturTrotoar[cleanUrlJasaPerbaikanKonsSub],
	      "item": cleanUrlJasaPerbaikanKonsSub
	   }
	  ]
	};
	
	       const script = document.createElement('script');
	       script.type = 'application/ld+json';
	       script.text = JSON.stringify(jsonLDBreadcrumb);
	       document.head.appendChild(script);
     }
    if (urlMappingPerbaikanInfrastrukturJembatan[cleanUrlJasaPerbaikanKonsSub]) {
        restoreCondition1('JasaKonsPerbaikan');
        restoreCondition1('JasaRenovasiPerbaikanInfrastruktur');
        restoreCondition1('JasaRenovasiPerbaikanInfrastrukturJembatan');

		removeCondition1('JasaRenovasiPerbaikanSub');
	    removeCondition1('JasaRenovasiPerbaikanPerawatanPerbaikanBangunan');	
		
       // hapus elemen id DIV Lain
	removeCondition1('ProdukInFur');
        removeCondition1('MaterialKons');
	removeCondition1('ProdukKons');
        //removeCondition1('ProdukKonsSaluran');
        //removeCondition1('ProdukKonsPembatas');
        removeCondition1('JasaKonsPembatas');
        removeCondition1('JasaKonsJalanPerkerasan');
        removeCondition1('JasaKonsPondasiTanah');
	removeCondition1('JasaKons');
	removeCondition1('JasaKonsSub');
	removeCondition1('MenuKons');
	removeCondition1('JasaKonsFinishing');
        removeCondition1('JasaKonsStruktur');

        // hapus elemen JasaPerbaikanKons Lain
        		   removeCondition1('JasaPerbaikanElemenArsitekturalBangunan');
	   removeCondition1('JasaPerbaikanAtapDrainaseBangunan');
	   removeCondition1('JasaPerbaikanKebocoranWaterproofing');
        removeCondition1('JasaRenovasiPerbaikanStruktur');
		
        removeCondition1('JasaRenovasiPerbaikanBangunan');
        removeCondition1('JasaRenovasiPerbaikanInterior');
	removeCondition1('JasaRenovasiPerbaikanFasad');
	removeCondition1('JasaRenovasiPerbaikanFasilitas');

	// hapus elemen id Semua Sub JasaRenovasiPerbaikanStruktur
	removeCondition1('JasaPerbaikanStrukturBeton');
						removeCondition1('JasaPerbaikanGedungBertingkat');
			removeCondition1('JasaPerbaikanStrukturBangunanTua');
			removeCondition1('JasaPerbaikanStrukturBangunanMiring');
		
        removeCondition1('JasaRenovasiPerbaikanStrukturKolomBalok');
        removeCondition1('JasaRenovasiPerbaikanStrukturPondasi');
        removeCondition1('JasaRenovasiPerbaikanStrukturLantai');
	removeCondition1('JasaRenovasiPerbaikanStrukturDinding');
	removeCondition1('JasaRenovasiPerbaikanStrukturAtap');
	removeCondition1('JasaRenovasiPerbaikanRehabilitasiBeton');
       
        // hapus elemen id Semua Sub JasaRenovasiPerbaikanInfrastruktur
        //removeCondition1('');
        removeCondition1('JasaRenovasiPerbaikanInfrastrukturJalan');
        removeCondition1('JasaRenovasiPerbaikanInfrastrukturSaluran');
        removeCondition1('JasaRenovasiPerbaikanInfrastrukturTrotoar');
       
       // hapus elemen id Semua Sub JasaRenovasiPerbaikanBangunan
        removeCondition1('JasaRenovasiPerbaikanBangunanRumah');
        removeCondition1('JasaRenovasiPerbaikanBangunanKantor');
        removeCondition1('JasaRenovasiPerbaikanBangunanPabrik');
        removeCondition1('JasaRenovasiPerbaikanBangunanGedung');
        removeCondition1('JasaRenovasiPerbaikanBangunanGudang');
        removeCondition1('JasaRenovasiPerbaikanBangunanHotel');

	 // hapus elemen id Semua Sub JasaRenovasiPerbaikanInterior
        removeCondition1('JasaRenovasiInteriorRumah');
        removeCondition1('JasaRenovasiInteriorKantor');
        removeCondition1('JasaRenovasiInteriorApartemen');
        removeCondition1('JasaRenovasiInteriorHotel');
        removeCondition1('JasaRenovasiInteriorToko');
        removeCondition1('JasaRenovasiInteriorCustom');
        removeCondition1('JasaRenovasiInteriorRuangan');
	    
       // hapus elemen id Semua Sub JasaRenovasiPerbaikanFasadEksterior
        removeCondition1('JasaRenovasiFasadBangunan');
        removeCondition1('JasaRenovasiEksteriorBangunan');
        removeCondition1('JasaPerbaikanArsitekturEksterior');

	// hapus elemen id Semua Sub JasaRenovasiPerbaikanFasilitas
        removeCondition1('JasaRenovasiPerbaikanStadionOlahraga');
        removeCondition1('JasaRenovasiPerbaikanSekolah');
        removeCondition1('JasaRenovasiPerbaikanRumahSakit');
        removeCondition1('JasaRenovasiPerbaikanTempatIbadah');
        removeCondition1('JasaRenovasiPerbaikanTerminal');
        removeCondition1('JasaRenovasiPerbaikanHalte');
        removeCondition1('JasaRenovasiPerbaikanTamanKota');
	
       
        JasaKonstruksiPerbaikanLinkSub.style.visibility = 'visible';
        //JasaRenovasiPerbaikanLinkSub.style.visibility = 'visible';
        JasaRenovasiPerbaikanInfrastrukturLink.style.visibility = 'visible';
	    
        JasaRenovasiPerbaikanInfrastrukturJembatanLink.style.visibility = 'visible';
        pageNameKonstruksiPerbaikan1.textContent = urlMappingPerbaikanInfrastrukturJembatan[cleanUrlJasaPerbaikanKonsSub];
    }
   // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingPerbaikanInfrastrukturJembatan[cleanUrlJasaPerbaikanKonsSub]) {
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
	      "name": "Jasa Perbaikan Infrastruktur",
	      "item": "https://www.betonjayareadymix.com/p/jasa-perbaikan-infrastruktur.html"
	    },
	   {
	      "@type": "ListItem",
	      "position": 4,
	      "name": "Jasa Perbaikan Jembatan",
	      "item": "https://www.betonjayareadymix.com/p/jasa-perbaikan-jembatan.html"
	    },
	  {
	    "@type": "ListItem",
	     "position": 5,
	      "name": urlMappingPerbaikanInfrastrukturJembatan[cleanUrlJasaPerbaikanKonsSub],
	      "item": cleanUrlJasaPerbaikanKonsSub
	   }
	  ]
	};
	
	       const script = document.createElement('script');
	       script.type = 'application/ld+json';
	       script.text = JSON.stringify(jsonLDBreadcrumb);
	       document.head.appendChild(script);
     }
    if (urlMappingPerbaikanInfrastrukturSaluran[cleanUrlJasaPerbaikanKonsSub]) {
        restoreCondition1('JasaKonsPerbaikan');
        restoreCondition1('JasaRenovasiPerbaikanInfrastruktur');
        restoreCondition1('JasaRenovasiPerbaikanInfrastrukturSaluran');

		removeCondition1('JasaRenovasiPerbaikanSub');
	    removeCondition1('JasaRenovasiPerbaikanPerawatanPerbaikanBangunan');	
		
       // hapus elemen id DIV Lain
	removeCondition1('ProdukInFur');
        removeCondition1('MaterialKons');
	removeCondition1('ProdukKons');
        //removeCondition1('ProdukKonsSaluran');
        //removeCondition1('ProdukKonsPembatas');
        removeCondition1('JasaKonsPembatas');
        removeCondition1('JasaKonsJalanPerkerasan');
        removeCondition1('JasaKonsPondasiTanah');
	removeCondition1('JasaKons');
	removeCondition1('JasaKonsSub');
	removeCondition1('MenuKons');
	removeCondition1('JasaKonsFinishing');
        removeCondition1('JasaKonsStruktur');

        // hapus elemen JasaPerbaikanKons Lain
        		   removeCondition1('JasaPerbaikanElemenArsitekturalBangunan');
	   removeCondition1('JasaPerbaikanAtapDrainaseBangunan');
	   removeCondition1('JasaPerbaikanKebocoranWaterproofing');
        removeCondition1('JasaRenovasiPerbaikanStruktur');
		
        removeCondition1('JasaRenovasiPerbaikanBangunan');
        removeCondition1('JasaRenovasiPerbaikanInterior');
	removeCondition1('JasaRenovasiPerbaikanFasad');
	removeCondition1('JasaRenovasiPerbaikanFasilitas');

	// hapus elemen id Semua Sub JasaRenovasiPerbaikanStruktur
	removeCondition1('JasaPerbaikanStrukturBeton');
						removeCondition1('JasaPerbaikanGedungBertingkat');
			removeCondition1('JasaPerbaikanStrukturBangunanTua');
			removeCondition1('JasaPerbaikanStrukturBangunanMiring');
		
        removeCondition1('JasaRenovasiPerbaikanStrukturKolomBalok');
        removeCondition1('JasaRenovasiPerbaikanStrukturPondasi');
        removeCondition1('JasaRenovasiPerbaikanStrukturLantai');
	removeCondition1('JasaRenovasiPerbaikanStrukturDinding');
	removeCondition1('JasaRenovasiPerbaikanStrukturAtap');
	removeCondition1('JasaRenovasiPerbaikanRehabilitasiBeton');
       
        // hapus elemen id Semua Sub JasaRenovasiPerbaikanInfrastruktur
        //removeCondition1('');
        removeCondition1('JasaRenovasiPerbaikanInfrastrukturJembatan');
        removeCondition1('JasaRenovasiPerbaikanInfrastrukturJalan');
        removeCondition1('JasaRenovasiPerbaikanInfrastrukturTrotoar');
       
       // hapus elemen id Semua Sub JasaRenovasiPerbaikanBangunan
        removeCondition1('JasaRenovasiPerbaikanBangunanRumah');
        removeCondition1('JasaRenovasiPerbaikanBangunanKantor');
        removeCondition1('JasaRenovasiPerbaikanBangunanPabrik');
        removeCondition1('JasaRenovasiPerbaikanBangunanGedung');
        removeCondition1('JasaRenovasiPerbaikanBangunanGudang');
        removeCondition1('JasaRenovasiPerbaikanBangunanHotel');

	 // hapus elemen id Semua Sub JasaRenovasiPerbaikanInterior
        removeCondition1('JasaRenovasiInteriorRumah');
        removeCondition1('JasaRenovasiInteriorKantor');
        removeCondition1('JasaRenovasiInteriorApartemen');
        removeCondition1('JasaRenovasiInteriorHotel');
        removeCondition1('JasaRenovasiInteriorToko');
        removeCondition1('JasaRenovasiInteriorCustom');
        removeCondition1('JasaRenovasiInteriorRuangan');
	    
       // hapus elemen id Semua Sub JasaRenovasiPerbaikanFasadEksterior
        removeCondition1('JasaRenovasiFasadBangunan');
        removeCondition1('JasaRenovasiEksteriorBangunan');
        removeCondition1('JasaPerbaikanArsitekturEksterior');

	// hapus elemen id Semua Sub JasaRenovasiPerbaikanFasilitas
        removeCondition1('JasaRenovasiPerbaikanStadionOlahraga');
        removeCondition1('JasaRenovasiPerbaikanSekolah');
        removeCondition1('JasaRenovasiPerbaikanRumahSakit');
        removeCondition1('JasaRenovasiPerbaikanTempatIbadah');
        removeCondition1('JasaRenovasiPerbaikanTerminal');
        removeCondition1('JasaRenovasiPerbaikanHalte');
        removeCondition1('JasaRenovasiPerbaikanTamanKota');
	
       
        JasaKonstruksiPerbaikanLinkSub.style.visibility = 'visible';
        //JasaRenovasiPerbaikanLinkSub.style.visibility = 'visible';
        JasaRenovasiPerbaikanInfrastrukturLink.style.visibility = 'visible';
	    
        JasaRenovasiPerbaikanInfrastrukturSaluranLink.style.visibility = 'visible';
        pageNameKonstruksiPerbaikan1.textContent = urlMappingPerbaikanInfrastrukturSaluran[cleanUrlJasaPerbaikanKonsSub];
    }

   // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingPerbaikanInfrastrukturSaluran[cleanUrlJasaPerbaikanKonsSub]) {
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
	      "name": "Jasa Perbaikan Infrastruktur",
	      "item": "https://www.betonjayareadymix.com/p/jasa-perbaikan-infrastruktur.html"
	    },
	   {
	      "@type": "ListItem",
	      "position": 4,
	      "name": "Jasa Perbaikan Drainase",
	      "item": "https://www.betonjayareadymix.com/p/jasa-perbaikan-drainase.html"
	    },
	  {
	    "@type": "ListItem",
	     "position": 5,
	      "name": urlMappingPerbaikanInfrastrukturSaluran[cleanUrlJasaPerbaikanKonsSub],
	      "item": cleanUrlJasaPerbaikanKonsSub
	   }
	  ]
	};
	       const script = document.createElement('script');
	       script.type = 'application/ld+json';
	       script.text = JSON.stringify(jsonLDBreadcrumb);
	       document.head.appendChild(script);
     }
//Jasa Perbaikan Bangunan
   if (urlMappingRenovasiBangunan[cleanUrlJasaPerbaikanKonsSub]) {
       restoreCondition1('JasaKonsPerbaikan');
       restoreCondition1('JasaRenovasiPerbaikanBangunan');

	    restoreCondition1('JasaRenovasiPerbaikanSub');
         // hapus elemen id DIV Lain
	removeCondition1('ProdukInFur');
       removeCondition1('MaterialKons');
	removeCondition1('ProdukKons');
       //removeCondition1('ProdukKonsSaluran');
       //removeCondition1('ProdukKonsPembatas');
       removeCondition1('JasaKonsPembatas');
        removeCondition1('JasaKonsJalanPerkerasan');
        removeCondition1('JasaKonsPondasiTanah');
       removeCondition1('JasaKons');
       removeCondition1('JasaKonsSub');
       removeCondition1('MenuKons');
       removeCondition1('JasaKonsFinishing');
        removeCondition1('JasaKonsStruktur');
    
        // hapus elemen JasaPerbaikanKons Lain
	  
	    removeCondition1('JasaRenovasiPerbaikanPerawatanPerbaikanBangunan');	
        		   removeCondition1('JasaPerbaikanElemenArsitekturalBangunan');
	   removeCondition1('JasaPerbaikanAtapDrainaseBangunan');
	   removeCondition1('JasaPerbaikanKebocoranWaterproofing');
        removeCondition1('JasaRenovasiPerbaikanStruktur');
	   
        removeCondition1('JasaRenovasiPerbaikanInfrastruktur');
        removeCondition1('JasaRenovasiPerbaikanInterior');
	removeCondition1('JasaRenovasiPerbaikanFasad');
	removeCondition1('JasaRenovasiPerbaikanFasilitas');

	// hapus elemen id Semua Sub JasaRenovasiPerbaikanStruktur
	removeCondition1('JasaPerbaikanStrukturBeton');
	   				removeCondition1('JasaPerbaikanGedungBertingkat');
			removeCondition1('JasaPerbaikanStrukturBangunanTua');
			removeCondition1('JasaPerbaikanStrukturBangunanMiring');
	   
        removeCondition1('JasaRenovasiPerbaikanStrukturKolomBalok');
        removeCondition1('JasaRenovasiPerbaikanStrukturPondasi');
        removeCondition1('JasaRenovasiPerbaikanStrukturLantai');
	removeCondition1('JasaRenovasiPerbaikanStrukturDinding');
	removeCondition1('JasaRenovasiPerbaikanStrukturAtap');
	removeCondition1('JasaRenovasiPerbaikanRehabilitasiBeton');
       
        // hapus elemen id Semua Sub JasaRenovasiPerbaikanInfrastruktur
        removeCondition1('JasaRenovasiPerbaikanInfrastrukturJalan');
        removeCondition1('JasaRenovasiPerbaikanInfrastrukturJembatan');
        removeCondition1('JasaRenovasiPerbaikanInfrastrukturSaluran');
        removeCondition1('JasaRenovasiPerbaikanInfrastrukturTrotoar');

	// hapus elemen id Semua Sub JasaRenovasiPerbaikanBangunan
        removeCondition1('JasaRenovasiPerbaikanBangunanRumah');
        removeCondition1('JasaRenovasiPerbaikanBangunanKantor');
        removeCondition1('JasaRenovasiPerbaikanBangunanPabrik');
        removeCondition1('JasaRenovasiPerbaikanBangunanGedung');
        removeCondition1('JasaRenovasiPerbaikanBangunanGudang');
        removeCondition1('JasaRenovasiPerbaikanBangunanHotel');

	 // hapus elemen id Semua Sub JasaRenovasiPerbaikanInterior
        removeCondition1('JasaRenovasiInteriorRumah');
        removeCondition1('JasaRenovasiInteriorKantor');
        removeCondition1('JasaRenovasiInteriorApartemen');
        removeCondition1('JasaRenovasiInteriorHotel');
        removeCondition1('JasaRenovasiInteriorToko');
        removeCondition1('JasaRenovasiInteriorCustom');
        removeCondition1('JasaRenovasiInteriorRuangan');
	   
       // hapus elemen id Semua Sub JasaRenovasiPerbaikanFasadEksterior
        removeCondition1('JasaRenovasiFasadBangunan');
        removeCondition1('JasaRenovasiEksteriorBangunan');
        removeCondition1('JasaPerbaikanArsitekturEksterior');

	// hapus elemen id Semua Sub JasaRenovasiPerbaikanFasilitas
        removeCondition1('JasaRenovasiPerbaikanStadionOlahraga');
        removeCondition1('JasaRenovasiPerbaikanSekolah');
        removeCondition1('JasaRenovasiPerbaikanRumahSakit');
        removeCondition1('JasaRenovasiPerbaikanTempatIbadah');
        removeCondition1('JasaRenovasiPerbaikanTerminal');
        removeCondition1('JasaRenovasiPerbaikanHalte');
        removeCondition1('JasaRenovasiPerbaikanTamanKota');
	
        JasaKonstruksiPerbaikanLinkSub.style.visibility = 'visible';
        JasaRenovasiPerbaikanLinkSub.style.visibility = 'visible';
        JasaRenovasiPerbaikanBangunanLink.style.visibility = 'visible';
        pageNameKonstruksiPerbaikan1.textContent = urlMappingRenovasiBangunan[cleanUrlJasaPerbaikanKonsSub];
    }
 
   // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingRenovasiBangunan[cleanUrlJasaPerbaikanKonsSub]) {
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
	      "name": "Jasa Renovasi Bangunan",
	      "item": "https://www.betonjayareadymix.com/p/jasa-renovasi-bangunan.html"
	    },
	  {
	    "@type": "ListItem",
	     "position": 5,
	      "name": urlMappingRenovasiBangunan[cleanUrlJasaPerbaikanKonsSub],
	      "item": cleanUrlJasaPerbaikanKonsSub
	   }
	  ]
	};
	       const script = document.createElement('script');
	       script.type = 'application/ld+json';
	       script.text = JSON.stringify(jsonLDBreadcrumb);
	       document.head.appendChild(script);
     }
 //PERBAIKAN INTERIOR
   if (urlMappingPerbaikanInterior[cleanUrlJasaPerbaikanKonsSub]) {
        restoreCondition1('JasaKonsPerbaikan');
        restoreCondition1('JasaRenovasiPerbaikanInterior');

	   removeCondition1('JasaRenovasiPerbaikanPerawatanPerbaikanBangunan');
	   restoreCondition1('JasaRenovasiPerbaikanSub');
          // hapus elemen id DIV Lain
	removeCondition1('ProdukInFur');
        removeCondition1('MaterialKons');
	removeCondition1('ProdukKons');
        //removeCondition1('ProdukKonsSaluran');
        //removeCondition1('ProdukKonsPembatas');
        removeCondition1('JasaKonsPembatas');
        removeCondition1('JasaKonsJalanPerkerasan');
        removeCondition1('JasaKonsPondasiTanah');
	removeCondition1('JasaKons');
	removeCondition1('JasaKonsSub');
	removeCondition1('MenuKons');
	removeCondition1('JasaKonsFinishing');
        removeCondition1('JasaKonsStruktur');
        
       // hapus elemen JasaPerbaikanKons Lain
        		   removeCondition1('JasaPerbaikanElemenArsitekturalBangunan');
	   removeCondition1('JasaPerbaikanAtapDrainaseBangunan');
	   removeCondition1('JasaPerbaikanKebocoranWaterproofing');
        removeCondition1('JasaRenovasiPerbaikanStruktur');
	   
        removeCondition1('JasaRenovasiPerbaikanInfrastruktur');
         removeCondition1('JasaRenovasiPerbaikanBangunan');
        removeCondition1('JasaRenovasiPerbaikanFasad');
	removeCondition1('JasaRenovasiPerbaikanFasilitas');

	// hapus elemen id Semua Sub JasaRenovasiPerbaikanStruktur
	removeCondition1('JasaPerbaikanStrukturBeton');
	   				removeCondition1('JasaPerbaikanGedungBertingkat');
			removeCondition1('JasaPerbaikanStrukturBangunanTua');
			removeCondition1('JasaPerbaikanStrukturBangunanMiring');
	   
        removeCondition1('JasaRenovasiPerbaikanStrukturKolomBalok');
        removeCondition1('JasaRenovasiPerbaikanStrukturPondasi');
        removeCondition1('JasaRenovasiPerbaikanStrukturLantai');
	removeCondition1('JasaRenovasiPerbaikanStrukturDinding');
	removeCondition1('JasaRenovasiPerbaikanStrukturAtap');
	removeCondition1('JasaRenovasiPerbaikanRehabilitasiBeton');
       
        // hapus elemen id Semua Sub JasaRenovasiPerbaikanInfrastruktur
        removeCondition1('JasaRenovasiPerbaikanInfrastrukturJalan');
        removeCondition1('JasaRenovasiPerbaikanInfrastrukturJembatan');
        removeCondition1('JasaRenovasiPerbaikanInfrastrukturSaluran');
        removeCondition1('JasaRenovasiPerbaikanInfrastrukturTrotoar');
       
	// hapus elemen id Semua Sub JasaRenovasiPerbaikanBangunan
        removeCondition1('JasaRenovasiPerbaikanBangunanRumah');
        removeCondition1('JasaRenovasiPerbaikanBangunanKantor');
        removeCondition1('JasaRenovasiPerbaikanBangunanPabrik');
        removeCondition1('JasaRenovasiPerbaikanBangunanGedung');
        removeCondition1('JasaRenovasiPerbaikanBangunanGudang');
        removeCondition1('JasaRenovasiPerbaikanBangunanHotel');

	 // hapus elemen id Semua Sub JasaRenovasiPerbaikanInterior
        removeCondition1('JasaRenovasiInteriorRumah');
        removeCondition1('JasaRenovasiInteriorKantor');
        removeCondition1('JasaRenovasiInteriorApartemen');
        removeCondition1('JasaRenovasiInteriorHotel');
        removeCondition1('JasaRenovasiInteriorToko');
        removeCondition1('JasaRenovasiInteriorCustom');
        removeCondition1('JasaRenovasiInteriorRuangan');
	   
       // hapus elemen id Semua Sub JasaRenovasiPerbaikanFasadEksterior
        removeCondition1('JasaRenovasiFasadBangunan');
        removeCondition1('JasaRenovasiEksteriorBangunan');
        removeCondition1('JasaPerbaikanArsitekturEksterior');

       // hapus elemen id Semua Sub JasaRenovasiPerbaikanFasilitas
        removeCondition1('JasaRenovasiPerbaikanStadionOlahraga');
        removeCondition1('JasaRenovasiPerbaikanSekolah');
        removeCondition1('JasaRenovasiPerbaikanRumahSakit');
        removeCondition1('JasaRenovasiPerbaikanTempatIbadah');
        removeCondition1('JasaRenovasiPerbaikanTerminal');
        removeCondition1('JasaRenovasiPerbaikanHalte');
        removeCondition1('JasaRenovasiPerbaikanTamanKota');
	
        JasaKonstruksiPerbaikanLinkSub.style.visibility = 'visible';
        JasaRenovasiPerbaikanLinkSub.style.visibility = 'visible';
        JasaRenovasiPerbaikanInteriorLink.style.visibility = 'visible';
        pageNameKonstruksiPerbaikan1.textContent = urlMappingPerbaikanInterior[cleanUrlJasaPerbaikanKonsSub];
    }
// ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingPerbaikanInterior[cleanUrlJasaPerbaikanKonsSub]) {
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
	      "name": "Jasa Renovasi Interior",
	      "item": "https://www.betonjayareadymix.com/p/jasa-renovasi-interior.html"
	    },
	  {
	    "@type": "ListItem",
	     "position": 5,
	      "name": urlMappingPerbaikanInterior[cleanUrlJasaPerbaikanKonsSub],
	      "item": cleanUrlJasaPerbaikanKonsSub
	   }
	  ]
	};
	       const script = document.createElement('script');
	       script.type = 'application/ld+json';
	       script.text = JSON.stringify(jsonLDBreadcrumb);
	       document.head.appendChild(script);
     }
//SUB PERBAIKAN INTERIOR
   if (urlMappingPerbaikanInteriorRumah[cleanUrlJasaPerbaikanKonsSub]) {
        restoreCondition1('JasaKonsPerbaikan');
        restoreCondition1('JasaRenovasiPerbaikanInterior');
        restoreCondition1('JasaRenovasiInteriorRumah');

	   	   removeCondition1('JasaRenovasiPerbaikanPerawatanPerbaikanBangunan');
	   restoreCondition1('JasaRenovasiPerbaikanSub');
          // hapus elemen id DIV Lain
	removeCondition1('ProdukInFur');
        removeCondition1('MaterialKons');
	removeCondition1('ProdukKons');
        //removeCondition1('ProdukKonsSaluran');
        //removeCondition1('ProdukKonsPembatas');
        removeCondition1('JasaKonsPembatas');
        removeCondition1('JasaKonsJalanPerkerasan');
        removeCondition1('JasaKonsPondasiTanah');
	removeCondition1('JasaKons');
	removeCondition1('JasaKonsSub');
	removeCondition1('MenuKons');
	removeCondition1('JasaKonsFinishing');
        removeCondition1('JasaKonsStruktur');
        
       // hapus elemen JasaPerbaikanKons Lain
       		   removeCondition1('JasaPerbaikanElemenArsitekturalBangunan');
	   removeCondition1('JasaPerbaikanAtapDrainaseBangunan');
	   removeCondition1('JasaPerbaikanKebocoranWaterproofing');
        removeCondition1('JasaRenovasiPerbaikanStruktur');
	   
        removeCondition1('JasaRenovasiPerbaikanInfrastruktur');
         removeCondition1('JasaRenovasiPerbaikanBangunan');
        removeCondition1('JasaRenovasiPerbaikanFasad');
	removeCondition1('JasaRenovasiPerbaikanFasilitas');

	// hapus elemen id Semua Sub JasaRenovasiPerbaikanStruktur
	removeCondition1('JasaPerbaikanStrukturBeton');
	   				removeCondition1('JasaPerbaikanGedungBertingkat');
			removeCondition1('JasaPerbaikanStrukturBangunanTua');
			removeCondition1('JasaPerbaikanStrukturBangunanMiring');
	   
        removeCondition1('JasaRenovasiPerbaikanStrukturKolomBalok');
        removeCondition1('JasaRenovasiPerbaikanStrukturPondasi');
        removeCondition1('JasaRenovasiPerbaikanStrukturLantai');
	removeCondition1('JasaRenovasiPerbaikanStrukturDinding');
	removeCondition1('JasaRenovasiPerbaikanStrukturAtap');
	removeCondition1('JasaRenovasiPerbaikanRehabilitasiBeton');
       
        // hapus elemen id Semua Sub JasaRenovasiPerbaikanInfrastruktur
        removeCondition1('JasaRenovasiPerbaikanInfrastrukturJalan');
        removeCondition1('JasaRenovasiPerbaikanInfrastrukturJembatan');
        removeCondition1('JasaRenovasiPerbaikanInfrastrukturSaluran');
        removeCondition1('JasaRenovasiPerbaikanInfrastrukturTrotoar');
       
	// hapus elemen id Semua Sub JasaRenovasiPerbaikanBangunan
        removeCondition1('JasaRenovasiPerbaikanBangunanRumah');
        removeCondition1('JasaRenovasiPerbaikanBangunanKantor');
        removeCondition1('JasaRenovasiPerbaikanBangunanPabrik');
        removeCondition1('JasaRenovasiPerbaikanBangunanGedung');
        removeCondition1('JasaRenovasiPerbaikanBangunanGudang');
        removeCondition1('JasaRenovasiPerbaikanBangunanHotel');

	 // hapus elemen id Semua Sub JasaRenovasiPerbaikanInterior
       // removeCondition1('');
        removeCondition1('JasaRenovasiInteriorKantor');
        removeCondition1('JasaRenovasiInteriorApartemen');
        removeCondition1('JasaRenovasiInteriorHotel');
        removeCondition1('JasaRenovasiInteriorToko');
        removeCondition1('JasaRenovasiInteriorCustom');
        removeCondition1('JasaRenovasiInteriorRuangan');
	   
       // hapus elemen id Semua Sub JasaRenovasiPerbaikanFasadEksterior
        removeCondition1('JasaRenovasiFasadBangunan');
        removeCondition1('JasaRenovasiEksteriorBangunan');
        removeCondition1('JasaPerbaikanArsitekturEksterior');

       // hapus elemen id Semua Sub JasaRenovasiPerbaikanFasilitas
        removeCondition1('JasaRenovasiPerbaikanStadionOlahraga');
        removeCondition1('JasaRenovasiPerbaikanSekolah');
        removeCondition1('JasaRenovasiPerbaikanRumahSakit');
        removeCondition1('JasaRenovasiPerbaikanTempatIbadah');
        removeCondition1('JasaRenovasiPerbaikanTerminal');
        removeCondition1('JasaRenovasiPerbaikanHalte');
        removeCondition1('JasaRenovasiPerbaikanTamanKota');
	
        JasaKonstruksiPerbaikanLinkSub.style.visibility = 'visible';
        JasaRenovasiPerbaikanLinkSub.style.visibility = 'visible';
        JasaRenovasiPerbaikanInteriorLink.style.visibility = 'visible';

	JasaRenovasiInteriorRumahLink.style.visibility = 'visible';
        pageNameKonstruksiPerbaikan1.textContent = urlMappingPerbaikanInteriorRumah[cleanUrlJasaPerbaikanKonsSub];
    }
  // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingPerbaikanInteriorRumah[cleanUrlJasaPerbaikanKonsSub]) {
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
	      "name": "Jasa Renovasi Interior",
	      "item": "https://www.betonjayareadymix.com/p/jasa-renovasi-interior.html"
	    },
	   
	    {
	      "@type": "ListItem",
	      "position": 5,
	      "name": "Jasa Renovasi Interior Rumah",
	      "item": "https://www.betonjayareadymix.com/p/jasa-renovasi-interior-rumah.html"
	    },
	  {
	    "@type": "ListItem",
	     "position": 6,
	      "name": urlMappingPerbaikanInteriorRumah[cleanUrlJasaPerbaikanKonsSub],
	      "item": cleanUrlJasaPerbaikanKonsSub
	   }
	  ]
	};
	       const script = document.createElement('script');
	       script.type = 'application/ld+json';
	       script.text = JSON.stringify(jsonLDBreadcrumb);
	       document.head.appendChild(script);
     }

if (urlMappingPerbaikanInteriorKantor[cleanUrlJasaPerbaikanKonsSub]) {
        restoreCondition1('JasaKonsPerbaikan');
        restoreCondition1('JasaRenovasiPerbaikanInterior');
        restoreCondition1('JasaRenovasiInteriorKantor');

		   removeCondition1('JasaRenovasiPerbaikanPerawatanPerbaikanBangunan');
	   restoreCondition1('JasaRenovasiPerbaikanSub');
	
          // hapus elemen id DIV Lain
	removeCondition1('ProdukInFur');
        removeCondition1('MaterialKons');
	removeCondition1('ProdukKons');
        //removeCondition1('ProdukKonsSaluran');
        //removeCondition1('ProdukKonsPembatas');
        removeCondition1('JasaKonsPembatas');
        removeCondition1('JasaKonsJalanPerkerasan');
        removeCondition1('JasaKonsPondasiTanah');
	removeCondition1('JasaKons');
	removeCondition1('JasaKonsSub');
	removeCondition1('MenuKons');
	removeCondition1('JasaKonsFinishing');
        removeCondition1('JasaKonsStruktur');
        
       // hapus elemen JasaPerbaikanKons Lain
        		   removeCondition1('JasaPerbaikanElemenArsitekturalBangunan');
	   removeCondition1('JasaPerbaikanAtapDrainaseBangunan');
	   removeCondition1('JasaPerbaikanKebocoranWaterproofing');
        removeCondition1('JasaRenovasiPerbaikanStruktur');
	
        removeCondition1('JasaRenovasiPerbaikanInfrastruktur');
         removeCondition1('JasaRenovasiPerbaikanBangunan');
        removeCondition1('JasaRenovasiPerbaikanFasad');
	removeCondition1('JasaRenovasiPerbaikanFasilitas');

	// hapus elemen id Semua Sub JasaRenovasiPerbaikanStruktur
	removeCondition1('JasaPerbaikanStrukturBeton');
					removeCondition1('JasaPerbaikanGedungBertingkat');
			removeCondition1('JasaPerbaikanStrukturBangunanTua');
			removeCondition1('JasaPerbaikanStrukturBangunanMiring');
	
        removeCondition1('JasaRenovasiPerbaikanStrukturKolomBalok');
        removeCondition1('JasaRenovasiPerbaikanStrukturPondasi');
        removeCondition1('JasaRenovasiPerbaikanStrukturLantai');
	removeCondition1('JasaRenovasiPerbaikanStrukturDinding');
	removeCondition1('JasaRenovasiPerbaikanStrukturAtap');
	removeCondition1('JasaRenovasiPerbaikanRehabilitasiBeton');
       
        // hapus elemen id Semua Sub JasaRenovasiPerbaikanInfrastruktur
        removeCondition1('JasaRenovasiPerbaikanInfrastrukturJalan');
        removeCondition1('JasaRenovasiPerbaikanInfrastrukturJembatan');
        removeCondition1('JasaRenovasiPerbaikanInfrastrukturSaluran');
        removeCondition1('JasaRenovasiPerbaikanInfrastrukturTrotoar');
       
	// hapus elemen id Semua Sub JasaRenovasiPerbaikanBangunan
        removeCondition1('JasaRenovasiPerbaikanBangunanRumah');
        removeCondition1('JasaRenovasiPerbaikanBangunanKantor');
        removeCondition1('JasaRenovasiPerbaikanBangunanPabrik');
        removeCondition1('JasaRenovasiPerbaikanBangunanGedung');
        removeCondition1('JasaRenovasiPerbaikanBangunanGudang');
        removeCondition1('JasaRenovasiPerbaikanBangunanHotel');

	 // hapus elemen id Semua Sub JasaRenovasiPerbaikanInterior
       // removeCondition1('');
        removeCondition1('JasaRenovasiInteriorRumah');
        removeCondition1('JasaRenovasiInteriorApartemen');
        removeCondition1('JasaRenovasiInteriorHotel');
        removeCondition1('JasaRenovasiInteriorToko');
        removeCondition1('JasaRenovasiInteriorCustom');
        removeCondition1('JasaRenovasiInteriorRuangan');
	   
       // hapus elemen id Semua Sub JasaRenovasiPerbaikanFasadEksterior
        removeCondition1('JasaRenovasiFasadBangunan');
        removeCondition1('JasaRenovasiEksteriorBangunan');
        removeCondition1('JasaPerbaikanArsitekturEksterior');

       // hapus elemen id Semua Sub JasaRenovasiPerbaikanFasilitas
        removeCondition1('JasaRenovasiPerbaikanStadionOlahraga');
        removeCondition1('JasaRenovasiPerbaikanSekolah');
        removeCondition1('JasaRenovasiPerbaikanRumahSakit');
        removeCondition1('JasaRenovasiPerbaikanTempatIbadah');
        removeCondition1('JasaRenovasiPerbaikanTerminal');
        removeCondition1('JasaRenovasiPerbaikanHalte');
        removeCondition1('JasaRenovasiPerbaikanTamanKota');
	
        JasaKonstruksiPerbaikanLinkSub.style.visibility = 'visible';
        JasaRenovasiPerbaikanLinkSub.style.visibility = 'visible';
        JasaRenovasiPerbaikanInteriorLink.style.visibility = 'visible';

	JasaRenovasiInteriorKantorLink.style.visibility = 'visible';
        pageNameKonstruksiPerbaikan1.textContent = urlMappingPerbaikanInteriorKantor[cleanUrlJasaPerbaikanKonsSub];
    }

  // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingPerbaikanInteriorKantor[cleanUrlJasaPerbaikanKonsSub]) {
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
	      "name": "Jasa Renovasi Interior",
	      "item": "https://www.betonjayareadymix.com/p/jasa-renovasi-interior.html"
	    },
	   
	    {
	      "@type": "ListItem",
	      "position": 5,
	      "name": "Jasa Renovasi Interior Kantor",
	      "item": "https://www.betonjayareadymix.com/p/jasa-renovasi-interior-kantor.html"
	    },
	  {
	    "@type": "ListItem",
	     "position": 6,
	      "name": urlMappingPerbaikanInteriorKantor[cleanUrlJasaPerbaikanKonsSub],
	      "item": cleanUrlJasaPerbaikanKonsSub
	   }
	  ]
	};
	       const script = document.createElement('script');
	       script.type = 'application/ld+json';
	       script.text = JSON.stringify(jsonLDBreadcrumb);
	       document.head.appendChild(script);
     }
  if (urlMappingPerbaikanInteriorApartemen[cleanUrlJasaPerbaikanKonsSub]) {
        restoreCondition1('JasaKonsPerbaikan');
        restoreCondition1('JasaRenovasiPerbaikanInterior');
        restoreCondition1('JasaRenovasiInteriorApartemen');


	  	   removeCondition1('JasaRenovasiPerbaikanPerawatanPerbaikanBangunan');
	   restoreCondition1('JasaRenovasiPerbaikanSub');
          // hapus elemen id DIV Lain
	removeCondition1('ProdukInFur');
        removeCondition1('MaterialKons');
	removeCondition1('ProdukKons');
        //removeCondition1('ProdukKonsSaluran');
        //removeCondition1('ProdukKonsPembatas');
        removeCondition1('JasaKonsPembatas');
        removeCondition1('JasaKonsJalanPerkerasan');
        removeCondition1('JasaKonsPondasiTanah');
	removeCondition1('JasaKons');
	removeCondition1('JasaKonsSub');
	removeCondition1('MenuKons');
	removeCondition1('JasaKonsFinishing');
        removeCondition1('JasaKonsStruktur');
        
       // hapus elemen JasaPerbaikanKons Lain
        		   removeCondition1('JasaPerbaikanElemenArsitekturalBangunan');
	   removeCondition1('JasaPerbaikanAtapDrainaseBangunan');
	   removeCondition1('JasaPerbaikanKebocoranWaterproofing');
        removeCondition1('JasaRenovasiPerbaikanStruktur');
	  
        removeCondition1('JasaRenovasiPerbaikanInfrastruktur');
         removeCondition1('JasaRenovasiPerbaikanBangunan');
        removeCondition1('JasaRenovasiPerbaikanFasad');
	removeCondition1('JasaRenovasiPerbaikanFasilitas');

	// hapus elemen id Semua Sub JasaRenovasiPerbaikanStruktur
	removeCondition1('JasaPerbaikanStrukturBeton');
	  				removeCondition1('JasaPerbaikanGedungBertingkat');
			removeCondition1('JasaPerbaikanStrukturBangunanTua');
			removeCondition1('JasaPerbaikanStrukturBangunanMiring');
	  
        removeCondition1('JasaRenovasiPerbaikanStrukturKolomBalok');
        removeCondition1('JasaRenovasiPerbaikanStrukturPondasi');
        removeCondition1('JasaRenovasiPerbaikanStrukturLantai');
	removeCondition1('JasaRenovasiPerbaikanStrukturDinding');
	removeCondition1('JasaRenovasiPerbaikanStrukturAtap');
	removeCondition1('JasaRenovasiPerbaikanRehabilitasiBeton');
       
        // hapus elemen id Semua Sub JasaRenovasiPerbaikanInfrastruktur
        removeCondition1('JasaRenovasiPerbaikanInfrastrukturJalan');
        removeCondition1('JasaRenovasiPerbaikanInfrastrukturJembatan');
        removeCondition1('JasaRenovasiPerbaikanInfrastrukturSaluran');
        removeCondition1('JasaRenovasiPerbaikanInfrastrukturTrotoar');
       
	// hapus elemen id Semua Sub JasaRenovasiPerbaikanBangunan
        removeCondition1('JasaRenovasiPerbaikanBangunanRumah');
        removeCondition1('JasaRenovasiPerbaikanBangunanKantor');
        removeCondition1('JasaRenovasiPerbaikanBangunanPabrik');
        removeCondition1('JasaRenovasiPerbaikanBangunanGedung');
        removeCondition1('JasaRenovasiPerbaikanBangunanGudang');
        removeCondition1('JasaRenovasiPerbaikanBangunanHotel');

	 // hapus elemen id Semua Sub JasaRenovasiPerbaikanInterior
       // removeCondition1('');
        removeCondition1('JasaRenovasiInteriorKantor');
        removeCondition1('JasaRenovasiInteriorRumah');
        removeCondition1('JasaRenovasiInteriorHotel');
        removeCondition1('JasaRenovasiInteriorToko');
        removeCondition1('JasaRenovasiInteriorCustom');
        removeCondition1('JasaRenovasiInteriorRuangan');
	   
       // hapus elemen id Semua Sub JasaRenovasiPerbaikanFasadEksterior
        removeCondition1('JasaRenovasiFasadBangunan');
        removeCondition1('JasaRenovasiEksteriorBangunan');
        removeCondition1('JasaPerbaikanArsitekturEksterior');

       // hapus elemen id Semua Sub JasaRenovasiPerbaikanFasilitas
        removeCondition1('JasaRenovasiPerbaikanStadionOlahraga');
        removeCondition1('JasaRenovasiPerbaikanSekolah');
        removeCondition1('JasaRenovasiPerbaikanRumahSakit');
        removeCondition1('JasaRenovasiPerbaikanTempatIbadah');
        removeCondition1('JasaRenovasiPerbaikanTerminal');
        removeCondition1('JasaRenovasiPerbaikanHalte');
        removeCondition1('JasaRenovasiPerbaikanTamanKota');
	
        JasaKonstruksiPerbaikanLinkSub.style.visibility = 'visible';
        JasaRenovasiPerbaikanLinkSub.style.visibility = 'visible';
        JasaRenovasiPerbaikanInteriorLink.style.visibility = 'visible';

	JasaRenovasiInteriorApartemenLink.style.visibility = 'visible';
        pageNameKonstruksiPerbaikan1.textContent = urlMappingPerbaikanInteriorApartemen[cleanUrlJasaPerbaikanKonsSub];
    }
    // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingPerbaikanInteriorApartemen[cleanUrlJasaPerbaikanKonsSub]) {
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
	      "name": "Jasa Renovasi Interior",
	      "item": "https://www.betonjayareadymix.com/p/jasa-renovasi-interior.html"
	    },
	   
	    {
	      "@type": "ListItem",
	      "position": 5,
	      "name": "Jasa Renovasi Interior Apartemen",
	      "item": "https://www.betonjayareadymix.com/p/jasa-renovasi-interior-apartemen.html"
	    },
	  {
	    "@type": "ListItem",
	     "position": 6,
	      "name": urlMappingPerbaikanInteriorApartemen[cleanUrlJasaPerbaikanKonsSub],
	      "item": cleanUrlJasaPerbaikanKonsSub
	   }
	  ]
	};
	       const script = document.createElement('script');
	       script.type = 'application/ld+json';
	       script.text = JSON.stringify(jsonLDBreadcrumb);
	       document.head.appendChild(script);
     }
  if (urlMappingPerbaikanInteriorHotel[cleanUrlJasaPerbaikanKonsSub]) {
        restoreCondition1('JasaKonsPerbaikan');
        restoreCondition1('JasaRenovasiPerbaikanInterior');
        restoreCondition1('JasaRenovasiInteriorHotel');

	 	   removeCondition1('JasaRenovasiPerbaikanPerawatanPerbaikanBangunan');
	   restoreCondition1('JasaRenovasiPerbaikanSub'); 
          // hapus elemen id DIV Lain
	removeCondition1('ProdukInFur');
        removeCondition1('MaterialKons');
	removeCondition1('ProdukKons');
        //removeCondition1('ProdukKonsSaluran');
        //removeCondition1('ProdukKonsPembatas');
        removeCondition1('JasaKonsPembatas');
        removeCondition1('JasaKonsJalanPerkerasan');
        removeCondition1('JasaKonsPondasiTanah');
	removeCondition1('JasaKons');
	removeCondition1('JasaKonsSub');
	removeCondition1('MenuKons');
	removeCondition1('JasaKonsFinishing');
        removeCondition1('JasaKonsStruktur');
        
       // hapus elemen JasaPerbaikanKons Lain
        		   removeCondition1('JasaPerbaikanElemenArsitekturalBangunan');
	   removeCondition1('JasaPerbaikanAtapDrainaseBangunan');
	   removeCondition1('JasaPerbaikanKebocoranWaterproofing');
        removeCondition1('JasaRenovasiPerbaikanStruktur');
	  
        removeCondition1('JasaRenovasiPerbaikanInfrastruktur');
         removeCondition1('JasaRenovasiPerbaikanBangunan');
        removeCondition1('JasaRenovasiPerbaikanFasad');
	removeCondition1('JasaRenovasiPerbaikanFasilitas');

	// hapus elemen id Semua Sub JasaRenovasiPerbaikanStruktur
	removeCondition1('JasaPerbaikanStrukturBeton');
	  				removeCondition1('JasaPerbaikanGedungBertingkat');
			removeCondition1('JasaPerbaikanStrukturBangunanTua');
			removeCondition1('JasaPerbaikanStrukturBangunanMiring');
	  
        removeCondition1('JasaRenovasiPerbaikanStrukturKolomBalok');
        removeCondition1('JasaRenovasiPerbaikanStrukturPondasi');
        removeCondition1('JasaRenovasiPerbaikanStrukturLantai');
	removeCondition1('JasaRenovasiPerbaikanStrukturDinding');
	removeCondition1('JasaRenovasiPerbaikanStrukturAtap');
	removeCondition1('JasaRenovasiPerbaikanRehabilitasiBeton');
       
        // hapus elemen id Semua Sub JasaRenovasiPerbaikanInfrastruktur
        removeCondition1('JasaRenovasiPerbaikanInfrastrukturJalan');
        removeCondition1('JasaRenovasiPerbaikanInfrastrukturJembatan');
        removeCondition1('JasaRenovasiPerbaikanInfrastrukturSaluran');
        removeCondition1('JasaRenovasiPerbaikanInfrastrukturTrotoar');
       
	// hapus elemen id Semua Sub JasaRenovasiPerbaikanBangunan
        removeCondition1('JasaRenovasiPerbaikanBangunanRumah');
        removeCondition1('JasaRenovasiPerbaikanBangunanKantor');
        removeCondition1('JasaRenovasiPerbaikanBangunanPabrik');
        removeCondition1('JasaRenovasiPerbaikanBangunanGedung');
        removeCondition1('JasaRenovasiPerbaikanBangunanGudang');
        removeCondition1('JasaRenovasiPerbaikanBangunanHotel');

	 // hapus elemen id Semua Sub JasaRenovasiPerbaikanInterior
       // removeCondition1('');
        removeCondition1('JasaRenovasiInteriorKantor');
        removeCondition1('JasaRenovasiInteriorApartemen');
        removeCondition1('JasaRenovasiInteriorRumah');
        removeCondition1('JasaRenovasiInteriorToko');
        removeCondition1('JasaRenovasiInteriorCustom');
        removeCondition1('JasaRenovasiInteriorRuangan');
	   
       // hapus elemen id Semua Sub JasaRenovasiPerbaikanFasadEksterior
        removeCondition1('JasaRenovasiFasadBangunan');
        removeCondition1('JasaRenovasiEksteriorBangunan');
        removeCondition1('JasaPerbaikanArsitekturEksterior');

       // hapus elemen id Semua Sub JasaRenovasiPerbaikanFasilitas
        removeCondition1('JasaRenovasiPerbaikanStadionOlahraga');
        removeCondition1('JasaRenovasiPerbaikanSekolah');
        removeCondition1('JasaRenovasiPerbaikanRumahSakit');
        removeCondition1('JasaRenovasiPerbaikanTempatIbadah');
        removeCondition1('JasaRenovasiPerbaikanTerminal');
        removeCondition1('JasaRenovasiPerbaikanHalte');
        removeCondition1('JasaRenovasiPerbaikanTamanKota');
	
        JasaKonstruksiPerbaikanLinkSub.style.visibility = 'visible';
        JasaRenovasiPerbaikanLinkSub.style.visibility = 'visible';
        JasaRenovasiPerbaikanInteriorLink.style.visibility = 'visible';

	JasaRenovasiInteriorHotelLink.style.visibility = 'visible';
        pageNameKonstruksiPerbaikan1.textContent = urlMappingPerbaikanInteriorHotel[cleanUrlJasaPerbaikanKonsSub];
    }
 
    // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingPerbaikanInteriorHotel[cleanUrlJasaPerbaikanKonsSub]) {
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
	      "name": "Jasa Renovasi Interior",
	      "item": "https://www.betonjayareadymix.com/p/jasa-renovasi-interior.html"
	    },
	   
	    {
	      "@type": "ListItem",
	      "position": 5,
	      "name": "Jasa Renovasi Interior Hotel",
	      "item": "https://www.betonjayareadymix.com/p/jasa-renovasi-interior-hotel.html"
	    },
	  {
	    "@type": "ListItem",
	     "position": 6,
	      "name": urlMappingPerbaikanInteriorHotel[cleanUrlJasaPerbaikanKonsSub],
	      "item": cleanUrlJasaPerbaikanKonsSub
	   }
	  ]
	};
	       const script = document.createElement('script');
	       script.type = 'application/ld+json';
	       script.text = JSON.stringify(jsonLDBreadcrumb);
	       document.head.appendChild(script);
     }
  if (urlMappingPerbaikanInteriorToko[cleanUrlJasaPerbaikanKonsSub]) {
        restoreCondition1('JasaKonsPerbaikan');
        restoreCondition1('JasaRenovasiPerbaikanInterior');
        restoreCondition1('JasaRenovasiInteriorToko');

	  	   removeCondition1('JasaRenovasiPerbaikanPerawatanPerbaikanBangunan');
	   restoreCondition1('JasaRenovasiPerbaikanSub');
	  
          // hapus elemen id DIV Lain
	removeCondition1('ProdukInFur');
        removeCondition1('MaterialKons');
	removeCondition1('ProdukKons');
        //removeCondition1('ProdukKonsSaluran');
        //removeCondition1('ProdukKonsPembatas');
        removeCondition1('JasaKonsPembatas');
        removeCondition1('JasaKonsJalanPerkerasan');
        removeCondition1('JasaKonsPondasiTanah');
	removeCondition1('JasaKons');
	removeCondition1('JasaKonsSub');
	removeCondition1('MenuKons');
	removeCondition1('JasaKonsFinishing');
        removeCondition1('JasaKonsStruktur');
        
       // hapus elemen JasaPerbaikanKons Lain
        		   removeCondition1('JasaPerbaikanElemenArsitekturalBangunan');
	   removeCondition1('JasaPerbaikanAtapDrainaseBangunan');
	   removeCondition1('JasaPerbaikanKebocoranWaterproofing');
        removeCondition1('JasaRenovasiPerbaikanStruktur');
	  
        removeCondition1('JasaRenovasiPerbaikanInfrastruktur');
         removeCondition1('JasaRenovasiPerbaikanBangunan');
        removeCondition1('JasaRenovasiPerbaikanFasad');
	removeCondition1('JasaRenovasiPerbaikanFasilitas');

	// hapus elemen id Semua Sub JasaRenovasiPerbaikanStruktur
	removeCondition1('JasaPerbaikanStrukturBeton');
	  				removeCondition1('JasaPerbaikanGedungBertingkat');
			removeCondition1('JasaPerbaikanStrukturBangunanTua');
			removeCondition1('JasaPerbaikanStrukturBangunanMiring');
	  
        removeCondition1('JasaRenovasiPerbaikanStrukturKolomBalok');
        removeCondition1('JasaRenovasiPerbaikanStrukturPondasi');
        removeCondition1('JasaRenovasiPerbaikanStrukturLantai');
	removeCondition1('JasaRenovasiPerbaikanStrukturDinding');
	removeCondition1('JasaRenovasiPerbaikanStrukturAtap');
	removeCondition1('JasaRenovasiPerbaikanRehabilitasiBeton');
       
        // hapus elemen id Semua Sub JasaRenovasiPerbaikanInfrastruktur
        removeCondition1('JasaRenovasiPerbaikanInfrastrukturJalan');
        removeCondition1('JasaRenovasiPerbaikanInfrastrukturJembatan');
        removeCondition1('JasaRenovasiPerbaikanInfrastrukturSaluran');
        removeCondition1('JasaRenovasiPerbaikanInfrastrukturTrotoar');
       
	// hapus elemen id Semua Sub JasaRenovasiPerbaikanBangunan
        removeCondition1('JasaRenovasiPerbaikanBangunanRumah');
        removeCondition1('JasaRenovasiPerbaikanBangunanKantor');
        removeCondition1('JasaRenovasiPerbaikanBangunanPabrik');
        removeCondition1('JasaRenovasiPerbaikanBangunanGedung');
        removeCondition1('JasaRenovasiPerbaikanBangunanGudang');
        removeCondition1('JasaRenovasiPerbaikanBangunanHotel');

	 // hapus elemen id Semua Sub JasaRenovasiPerbaikanInterior
       // removeCondition1('');
        removeCondition1('JasaRenovasiInteriorKantor');
        removeCondition1('JasaRenovasiInteriorApartemen');
        removeCondition1('JasaRenovasiInteriorHotel');
        removeCondition1('JasaRenovasiInteriorRumah');
        removeCondition1('JasaRenovasiInteriorCustom');
        removeCondition1('JasaRenovasiInteriorRuangan');
	   
       // hapus elemen id Semua Sub JasaRenovasiPerbaikanFasadEksterior
        removeCondition1('JasaRenovasiFasadBangunan');
        removeCondition1('JasaRenovasiEksteriorBangunan');
        removeCondition1('JasaPerbaikanArsitekturEksterior');

       // hapus elemen id Semua Sub JasaRenovasiPerbaikanFasilitas
        removeCondition1('JasaRenovasiPerbaikanStadionOlahraga');
        removeCondition1('JasaRenovasiPerbaikanSekolah');
        removeCondition1('JasaRenovasiPerbaikanRumahSakit');
        removeCondition1('JasaRenovasiPerbaikanTempatIbadah');
        removeCondition1('JasaRenovasiPerbaikanTerminal');
        removeCondition1('JasaRenovasiPerbaikanHalte');
        removeCondition1('JasaRenovasiPerbaikanTamanKota');
	
        JasaKonstruksiPerbaikanLinkSub.style.visibility = 'visible';
        JasaRenovasiPerbaikanLinkSub.style.visibility = 'visible';
        JasaRenovasiPerbaikanInteriorLink.style.visibility = 'visible';

	JasaRenovasiInteriorTokoLink.style.visibility = 'visible';
        pageNameKonstruksiPerbaikan1.textContent = urlMappingPerbaikanInteriorToko[cleanUrlJasaPerbaikanKonsSub];
    }
    // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingPerbaikanInteriorToko[cleanUrlJasaPerbaikanKonsSub]) {
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
	      "name": "Jasa Renovasi Interior",
	      "item": "https://www.betonjayareadymix.com/p/jasa-renovasi-interior.html"
	    },
	   
	    {
	      "@type": "ListItem",
	      "position": 5,
	      "name": "Jasa Renovasi Interior Toko",
	      "item": "https://www.betonjayareadymix.com/p/jasa-renovasi-interior-toko.html"
	    },
	  {
	    "@type": "ListItem",
	     "position": 6,
	      "name": urlMappingPerbaikanInteriorToko[cleanUrlJasaPerbaikanKonsSub],
	      "item": cleanUrlJasaPerbaikanKonsSub
	   }
	  ]
	};
	       const script = document.createElement('script');
	       script.type = 'application/ld+json';
	       script.text = JSON.stringify(jsonLDBreadcrumb);
	       document.head.appendChild(script);
     }
  if (urlMappingPerbaikanInteriorCustom[cleanUrlJasaPerbaikanKonsSub]) {
        restoreCondition1('JasaKonsPerbaikan');
        restoreCondition1('JasaRenovasiPerbaikanInterior');
        restoreCondition1('JasaRenovasiInteriorCustom');

	  	   removeCondition1('JasaRenovasiPerbaikanPerawatanPerbaikanBangunan');
	   restoreCondition1('JasaRenovasiPerbaikanSub');
	  
          // hapus elemen id DIV Lain
	removeCondition1('ProdukInFur');
        removeCondition1('MaterialKons');
	removeCondition1('ProdukKons');
        //removeCondition1('ProdukKonsSaluran');
        //removeCondition1('ProdukKonsPembatas');
        removeCondition1('JasaKonsPembatas');
        removeCondition1('JasaKonsJalanPerkerasan');
        removeCondition1('JasaKonsPondasiTanah');
	removeCondition1('JasaKons');
	removeCondition1('JasaKonsSub');
	removeCondition1('MenuKons');
	removeCondition1('JasaKonsFinishing');
        removeCondition1('JasaKonsStruktur');
        
       // hapus elemen JasaPerbaikanKons Lain
        		   removeCondition1('JasaPerbaikanElemenArsitekturalBangunan');
	   removeCondition1('JasaPerbaikanAtapDrainaseBangunan');
	   removeCondition1('JasaPerbaikanKebocoranWaterproofing');
        removeCondition1('JasaRenovasiPerbaikanStruktur');
	  
        removeCondition1('JasaRenovasiPerbaikanInfrastruktur');
         removeCondition1('JasaRenovasiPerbaikanBangunan');
        removeCondition1('JasaRenovasiPerbaikanFasad');
	removeCondition1('JasaRenovasiPerbaikanFasilitas');

	// hapus elemen id Semua Sub JasaRenovasiPerbaikanStruktur
	removeCondition1('JasaPerbaikanStrukturBeton');
	  				removeCondition1('JasaPerbaikanGedungBertingkat');
			removeCondition1('JasaPerbaikanStrukturBangunanTua');
			removeCondition1('JasaPerbaikanStrukturBangunanMiring');
	  
        removeCondition1('JasaRenovasiPerbaikanStrukturKolomBalok');
        removeCondition1('JasaRenovasiPerbaikanStrukturPondasi');
        removeCondition1('JasaRenovasiPerbaikanStrukturLantai');
	removeCondition1('JasaRenovasiPerbaikanStrukturDinding');
	removeCondition1('JasaRenovasiPerbaikanStrukturAtap');
	removeCondition1('JasaRenovasiPerbaikanRehabilitasiBeton');
       
        // hapus elemen id Semua Sub JasaRenovasiPerbaikanInfrastruktur
        removeCondition1('JasaRenovasiPerbaikanInfrastrukturJalan');
        removeCondition1('JasaRenovasiPerbaikanInfrastrukturJembatan');
        removeCondition1('JasaRenovasiPerbaikanInfrastrukturSaluran');
        removeCondition1('JasaRenovasiPerbaikanInfrastrukturTrotoar');
       
	// hapus elemen id Semua Sub JasaRenovasiPerbaikanBangunan
        removeCondition1('JasaRenovasiPerbaikanBangunanRumah');
        removeCondition1('JasaRenovasiPerbaikanBangunanKantor');
        removeCondition1('JasaRenovasiPerbaikanBangunanPabrik');
        removeCondition1('JasaRenovasiPerbaikanBangunanGedung');
        removeCondition1('JasaRenovasiPerbaikanBangunanGudang');
        removeCondition1('JasaRenovasiPerbaikanBangunanHotel');

	 // hapus elemen id Semua Sub JasaRenovasiPerbaikanInterior
       // removeCondition1('');
        removeCondition1('JasaRenovasiInteriorKantor');
        removeCondition1('JasaRenovasiInteriorApartemen');
        removeCondition1('JasaRenovasiInteriorHotel');
        removeCondition1('JasaRenovasiInteriorToko');
        removeCondition1('JasaRenovasiInteriorRumah');
        removeCondition1('JasaRenovasiInteriorRuangan');
	   
       // hapus elemen id Semua Sub JasaRenovasiPerbaikanFasadEksterior
        removeCondition1('JasaRenovasiFasadBangunan');
        removeCondition1('JasaRenovasiEksteriorBangunan');
        removeCondition1('JasaPerbaikanArsitekturEksterior');

       // hapus elemen id Semua Sub JasaRenovasiPerbaikanFasilitas
        removeCondition1('JasaRenovasiPerbaikanStadionOlahraga');
        removeCondition1('JasaRenovasiPerbaikanSekolah');
        removeCondition1('JasaRenovasiPerbaikanRumahSakit');
        removeCondition1('JasaRenovasiPerbaikanTempatIbadah');
        removeCondition1('JasaRenovasiPerbaikanTerminal');
        removeCondition1('JasaRenovasiPerbaikanHalte');
        removeCondition1('JasaRenovasiPerbaikanTamanKota');
	
        JasaKonstruksiPerbaikanLinkSub.style.visibility = 'visible';
        JasaRenovasiPerbaikanLinkSub.style.visibility = 'visible';
        JasaRenovasiPerbaikanInteriorLink.style.visibility = 'visible';

	JasaRenovasiInteriorCustomLink.style.visibility = 'visible';
        pageNameKonstruksiPerbaikan1.textContent = urlMappingPerbaikanInteriorCustom[cleanUrlJasaPerbaikanKonsSub];
    }
// ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingPerbaikanInteriorCustom[cleanUrlJasaPerbaikanKonsSub]) {
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
	      "name": "Jasa Renovasi Interior",
	      "item": "https://www.betonjayareadymix.com/p/jasa-renovasi-interior.html"
	    },
	   
	    {
	      "@type": "ListItem",
	      "position": 5,
	      "name": "Jasa Renovasi Interior Custome",
	      "item": "https://www.betonjayareadymix.com/p/jasa-renovasi-interior-custom.html"
	    },
	  {
	    "@type": "ListItem",
	     "position": 6,
	      "name": urlMappingPerbaikanInteriorCustom[cleanUrlJasaPerbaikanKonsSub],
	      "item": cleanUrlJasaPerbaikanKonsSub
	   }
	  ]
	};
	       const script = document.createElement('script');
	       script.type = 'application/ld+json';
	       script.text = JSON.stringify(jsonLDBreadcrumb);
	       document.head.appendChild(script);
     }

  if (urlMappingPerbaikanInteriorRuangan[cleanUrlJasaPerbaikanKonsSub]) {
        restoreCondition1('JasaKonsPerbaikan');
        restoreCondition1('JasaRenovasiPerbaikanInterior');
        restoreCondition1('JasaRenovasiInteriorRuangan');

	  	   removeCondition1('JasaRenovasiPerbaikanPerawatanPerbaikanBangunan');
	   restoreCondition1('JasaRenovasiPerbaikanSub');
          // hapus elemen id DIV Lain
	removeCondition1('ProdukInFur');
        removeCondition1('MaterialKons');
	removeCondition1('ProdukKons');
        //removeCondition1('ProdukKonsSaluran');
        //removeCondition1('ProdukKonsPembatas');
        removeCondition1('JasaKonsPembatas');
        removeCondition1('JasaKonsJalanPerkerasan');
        removeCondition1('JasaKonsPondasiTanah');
	removeCondition1('JasaKons');
	removeCondition1('JasaKonsSub');
	removeCondition1('MenuKons');
	removeCondition1('JasaKonsFinishing');
        removeCondition1('JasaKonsStruktur');
        
       // hapus elemen JasaPerbaikanKons Lain
       		   removeCondition1('JasaPerbaikanElemenArsitekturalBangunan');
	   removeCondition1('JasaPerbaikanAtapDrainaseBangunan');
	   removeCondition1('JasaPerbaikanKebocoranWaterproofing');
        removeCondition1('JasaRenovasiPerbaikanStruktur');
	  
        removeCondition1('JasaRenovasiPerbaikanInfrastruktur');
         removeCondition1('JasaRenovasiPerbaikanBangunan');
        removeCondition1('JasaRenovasiPerbaikanFasad');
	removeCondition1('JasaRenovasiPerbaikanFasilitas');

	// hapus elemen id Semua Sub JasaRenovasiPerbaikanStruktur
	removeCondition1('JasaPerbaikanStrukturBeton');
	  				removeCondition1('JasaPerbaikanGedungBertingkat');
			removeCondition1('JasaPerbaikanStrukturBangunanTua');
			removeCondition1('JasaPerbaikanStrukturBangunanMiring');
	  
        removeCondition1('JasaRenovasiPerbaikanStrukturKolomBalok');
        removeCondition1('JasaRenovasiPerbaikanStrukturPondasi');
        removeCondition1('JasaRenovasiPerbaikanStrukturLantai');
	removeCondition1('JasaRenovasiPerbaikanStrukturDinding');
	removeCondition1('JasaRenovasiPerbaikanStrukturAtap');
	removeCondition1('JasaRenovasiPerbaikanRehabilitasiBeton');
       
        // hapus elemen id Semua Sub JasaRenovasiPerbaikanInfrastruktur
        removeCondition1('JasaRenovasiPerbaikanInfrastrukturJalan');
        removeCondition1('JasaRenovasiPerbaikanInfrastrukturJembatan');
        removeCondition1('JasaRenovasiPerbaikanInfrastrukturSaluran');
        removeCondition1('JasaRenovasiPerbaikanInfrastrukturTrotoar');
       
	// hapus elemen id Semua Sub JasaRenovasiPerbaikanBangunan
        removeCondition1('JasaRenovasiPerbaikanBangunanRumah');
        removeCondition1('JasaRenovasiPerbaikanBangunanKantor');
        removeCondition1('JasaRenovasiPerbaikanBangunanPabrik');
        removeCondition1('JasaRenovasiPerbaikanBangunanGedung');
        removeCondition1('JasaRenovasiPerbaikanBangunanGudang');
        removeCondition1('JasaRenovasiPerbaikanBangunanHotel');

	 // hapus elemen id Semua Sub JasaRenovasiPerbaikanInterior
       // removeCondition1('');
        removeCondition1('JasaRenovasiInteriorKantor');
        removeCondition1('JasaRenovasiInteriorApartemen');
        removeCondition1('JasaRenovasiInteriorHotel');
        removeCondition1('JasaRenovasiInteriorToko');
        removeCondition1('JasaRenovasiInteriorCustom');
        removeCondition1('JasaRenovasiInteriorRumah');
	   
       // hapus elemen id Semua Sub JasaRenovasiPerbaikanFasadEksterior
        removeCondition1('JasaRenovasiFasadBangunan');
        removeCondition1('JasaRenovasiEksteriorBangunan');
        removeCondition1('JasaPerbaikanArsitekturEksterior');

       // hapus elemen id Semua Sub JasaRenovasiPerbaikanFasilitas
        removeCondition1('JasaRenovasiPerbaikanStadionOlahraga');
        removeCondition1('JasaRenovasiPerbaikanSekolah');
        removeCondition1('JasaRenovasiPerbaikanRumahSakit');
        removeCondition1('JasaRenovasiPerbaikanTempatIbadah');
        removeCondition1('JasaRenovasiPerbaikanTerminal');
        removeCondition1('JasaRenovasiPerbaikanHalte');
        removeCondition1('JasaRenovasiPerbaikanTamanKota');
	
        JasaKonstruksiPerbaikanLinkSub.style.visibility = 'visible';
        JasaRenovasiPerbaikanLinkSub.style.visibility = 'visible';
        JasaRenovasiPerbaikanInteriorLink.style.visibility = 'visible';

	JasaRenovasiInteriorRuanganLink.style.visibility = 'visible';
        pageNameKonstruksiPerbaikan1.textContent = urlMappingPerbaikanInteriorRuangan[cleanUrlJasaPerbaikanKonsSub];
    }
  // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingPerbaikanInteriorRuangan[cleanUrlJasaPerbaikanKonsSub]) {
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
	      "name": "Jasa Renovasi Interior",
	      "item": "https://www.betonjayareadymix.com/p/jasa-renovasi-interior.html"
	    },
	   
	    {
	      "@type": "ListItem",
	      "position": 5,
	      "name": "Jasa Renovasi Interior Ruangan",
	      "item": "https://www.betonjayareadymix.com/p/jasa-renovasi-interior-ruangan.html"
	    },
	  {
	    "@type": "ListItem",
	     "position": 6,
	      "name": urlMappingPerbaikanInteriorRuangan[cleanUrlJasaPerbaikanKonsSub],
	      "item": cleanUrlJasaPerbaikanKonsSub
	   }
	  ]
	};
	       const script = document.createElement('script');
	       script.type = 'application/ld+json';
	       script.text = JSON.stringify(jsonLDBreadcrumb);
	       document.head.appendChild(script);
     }
//FASAD EKSTERIOR
	
if (urlMappingPerbaikanFasadEksterior[cleanUrlJasaPerbaikanKonsSub]) {
        restoreCondition1('JasaKonsPerbaikan');
        restoreCondition1('JasaRenovasiEksteriorBangunan');

	   	   removeCondition1('JasaRenovasiPerbaikanPerawatanPerbaikanBangunan');
	   restoreCondition1('JasaRenovasiPerbaikanSub');
	
          // hapus elemen id DIV Lain
	removeCondition1('ProdukInFur');
        removeCondition1('MaterialKons');
	removeCondition1('ProdukKons');
        //removeCondition1('ProdukKonsSaluran');
        //removeCondition1('ProdukKonsPembatas');
        removeCondition1('JasaKonsPembatas');
        removeCondition1('JasaKonsJalanPerkerasan');
        removeCondition1('JasaKonsPondasiTanah');
	removeCondition1('JasaKons');
	removeCondition1('JasaKonsSub');
	removeCondition1('MenuKons');
	removeCondition1('JasaKonsFinishing');
        removeCondition1('JasaKonsStruktur');
        
       // hapus elemen JasaPerbaikanKons Lain
        		   removeCondition1('JasaPerbaikanElemenArsitekturalBangunan');
	   removeCondition1('JasaPerbaikanAtapDrainaseBangunan');
	   removeCondition1('JasaPerbaikanKebocoranWaterproofing');
        removeCondition1('JasaRenovasiPerbaikanStruktur');
	
        removeCondition1('JasaRenovasiPerbaikanInfrastruktur');
        removeCondition1('JasaRenovasiPerbaikanBangunan');
	removeCondition1('JasaRenovasiPerbaikanInterior');
	removeCondition1('JasaRenovasiPerbaikanFasilitas');

	// hapus elemen id Semua Sub JasaRenovasiPerbaikanStruktur
	removeCondition1('JasaPerbaikanStrukturBeton');
		 				removeCondition1('JasaPerbaikanGedungBertingkat');
			removeCondition1('JasaPerbaikanStrukturBangunanTua');
			removeCondition1('JasaPerbaikanStrukturBangunanMiring');
		 
        removeCondition1('JasaRenovasiPerbaikanStrukturKolomBalok');
        removeCondition1('JasaRenovasiPerbaikanStrukturPondasi');
        removeCondition1('JasaRenovasiPerbaikanStrukturLantai');
	removeCondition1('JasaRenovasiPerbaikanStrukturDinding');
	removeCondition1('JasaRenovasiPerbaikanStrukturAtap');
	removeCondition1('JasaRenovasiPerbaikanRehabilitasiBeton');
       
        // hapus elemen id Semua Sub JasaRenovasiPerbaikanInfrastruktur
        removeCondition1('JasaRenovasiPerbaikanInfrastrukturJalan');
        removeCondition1('JasaRenovasiPerbaikanInfrastrukturJembatan');
        removeCondition1('JasaRenovasiPerbaikanInfrastrukturSaluran');
        removeCondition1('JasaRenovasiPerbaikanInfrastrukturTrotoar');

	// hapus elemen id Semua Sub JasaRenovasiPerbaikanBangunan
        removeCondition1('JasaRenovasiPerbaikanBangunanRumah');
        removeCondition1('JasaRenovasiPerbaikanBangunanKantor');
        removeCondition1('JasaRenovasiPerbaikanBangunanPabrik');
        removeCondition1('JasaRenovasiPerbaikanBangunanGedung');
        removeCondition1('JasaRenovasiPerbaikanBangunanGudang');
        removeCondition1('JasaRenovasiPerbaikanBangunanHotel');

	 // hapus elemen id Semua Sub JasaRenovasiPerbaikanInterior
        removeCondition1('JasaRenovasiInteriorRumah');
        removeCondition1('JasaRenovasiInteriorKantor');
        removeCondition1('JasaRenovasiInteriorApartemen');
        removeCondition1('JasaRenovasiInteriorHotel');
        removeCondition1('JasaRenovasiInteriorToko');
        removeCondition1('JasaRenovasiInteriorCustom');
        removeCondition1('JasaRenovasiInteriorRuangan');
	     
       // hapus elemen id Semua Sub JasaRenovasiPerbaikanFasadEksterior
        removeCondition1('JasaRenovasiFasadBangunan');
        removeCondition1('JasaRenovasiPerbaikanFasad');
        removeCondition1('JasaPerbaikanArsitekturEksterior');

	// hapus elemen id Semua Sub JasaRenovasiPerbaikanFasilitas
        removeCondition1('JasaRenovasiPerbaikanStadionOlahraga');
        removeCondition1('JasaRenovasiPerbaikanSekolah');
        removeCondition1('JasaRenovasiPerbaikanRumahSakit');
        removeCondition1('JasaRenovasiPerbaikanTempatIbadah');
        removeCondition1('JasaRenovasiPerbaikanTerminal');
        removeCondition1('JasaRenovasiPerbaikanHalte');
        removeCondition1('JasaRenovasiPerbaikanTamanKota');
	

        JasaKonstruksiPerbaikanLinkSub.style.visibility = 'visible';
        JasaRenovasiPerbaikanLinkSub.style.visibility = 'visible';
        JasaRenovasiEksteriorBangunanLink.style.visibility = 'visible';
        pageNameKonstruksiPerbaikan1.textContent = urlMappingPerbaikanFasadEksterior[cleanUrlJasaPerbaikanKonsSub];
    }
 
  // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingPerbaikanFasadEksterior[cleanUrlJasaPerbaikanKonsSub]) {
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
	      "name": "Jasa Renovasi Eksterior Bangunan",
	      "item": "https://www.betonjayareadymix.com/p/jasa-renovasi-eksterior-bangunan.html"
	    },
	  {
	    "@type": "ListItem",
	     "position": 5,
	      "name": urlMappingPerbaikanFasadEksterior[cleanUrlJasaPerbaikanKonsSub],
	      "item": cleanUrlJasaPerbaikanKonsSub
	   }
	  ]
	};
	       const script = document.createElement('script');
	       script.type = 'application/ld+json';
	       script.text = JSON.stringify(jsonLDBreadcrumb);
	       document.head.appendChild(script);
     }
//SUB FASAD EKSTERIOR
if (urlMappingPerbaikanFasadEksteriorFasad[cleanUrlJasaPerbaikanKonsSub]) {
        restoreCondition1('JasaKonsPerbaikan');
        restoreCondition1('JasaRenovasiPerbaikanFasad');
        restoreCondition1('JasaRenovasiFasadBangunan');

		   removeCondition1('JasaRenovasiPerbaikanPerawatanPerbaikanBangunan');
	   restoreCondition1('JasaRenovasiPerbaikanSub');
          // hapus elemen id DIV Lain
	removeCondition1('ProdukInFur');
        removeCondition1('MaterialKons');
	removeCondition1('ProdukKons');
        //removeCondition1('ProdukKonsSaluran');
        //removeCondition1('ProdukKonsPembatas');
        removeCondition1('JasaKonsPembatas');
        removeCondition1('JasaKonsJalanPerkerasan');
        removeCondition1('JasaKonsPondasiTanah');
	removeCondition1('JasaKons');
	removeCondition1('JasaKonsSub');
	removeCondition1('MenuKons');
	removeCondition1('JasaKonsFinishing');
        removeCondition1('JasaKonsStruktur');
        
       // hapus elemen JasaPerbaikanKons Lain
        		   removeCondition1('JasaPerbaikanElemenArsitekturalBangunan');
	   removeCondition1('JasaPerbaikanAtapDrainaseBangunan');
	   removeCondition1('JasaPerbaikanKebocoranWaterproofing');
        removeCondition1('JasaRenovasiPerbaikanStruktur');
	
        removeCondition1('JasaRenovasiPerbaikanInfrastruktur');
        removeCondition1('JasaRenovasiPerbaikanBangunan');
	removeCondition1('JasaRenovasiPerbaikanInterior');
	removeCondition1('JasaRenovasiPerbaikanFasilitas');

	// hapus elemen id Semua Sub JasaRenovasiPerbaikanStruktur
					removeCondition1('JasaPerbaikanGedungBertingkat');
			removeCondition1('JasaPerbaikanStrukturBangunanTua');
			removeCondition1('JasaPerbaikanStrukturBangunanMiring');
	
	removeCondition1('JasaPerbaikanStrukturBeton');
        removeCondition1('JasaRenovasiPerbaikanStrukturKolomBalok');
        removeCondition1('JasaRenovasiPerbaikanStrukturPondasi');
        removeCondition1('JasaRenovasiPerbaikanStrukturLantai');
	removeCondition1('JasaRenovasiPerbaikanStrukturDinding');
	removeCondition1('JasaRenovasiPerbaikanStrukturBangunan');
	removeCondition1('JasaRenovasiPerbaikanStrukturAtap');
	removeCondition1('JasaRenovasiPerbaikanRehabilitasiBeton');
       
        // hapus elemen id Semua Sub JasaRenovasiPerbaikanInfrastruktur
        removeCondition1('JasaRenovasiPerbaikanInfrastrukturJalan');
        removeCondition1('JasaRenovasiPerbaikanInfrastrukturJembatan');
        removeCondition1('JasaRenovasiPerbaikanInfrastrukturSaluran');
        removeCondition1('JasaRenovasiPerbaikanInfrastrukturTrotoar');

	// hapus elemen id Semua Sub JasaRenovasiPerbaikanBangunan
        removeCondition1('JasaRenovasiPerbaikanBangunanRumah');
        removeCondition1('JasaRenovasiPerbaikanBangunanKantor');
        removeCondition1('JasaRenovasiPerbaikanBangunanPabrik');
        removeCondition1('JasaRenovasiPerbaikanBangunanGedung');
        removeCondition1('JasaRenovasiPerbaikanBangunanGudang');
        removeCondition1('JasaRenovasiPerbaikanBangunanHotel');

	 // hapus elemen id Semua Sub JasaRenovasiPerbaikanInterior
        removeCondition1('JasaRenovasiInteriorRumah');
        removeCondition1('JasaRenovasiInteriorKantor');
        removeCondition1('JasaRenovasiInteriorApartemen');
        removeCondition1('JasaRenovasiInteriorHotel');
        removeCondition1('JasaRenovasiInteriorToko');
        removeCondition1('JasaRenovasiInteriorCustom');
        removeCondition1('JasaRenovasiInteriorRuangan');
	     
       // hapus elemen id Semua Sub JasaRenovasiPerbaikanFasadEksterior
       // removeCondition1('');
        removeCondition1('JasaRenovasiEksteriorBangunan');
        removeCondition1('JasaPerbaikanArsitekturEksterior');

	// hapus elemen id Semua Sub JasaRenovasiPerbaikanFasilitas
        removeCondition1('JasaRenovasiPerbaikanStadionOlahraga');
        removeCondition1('JasaRenovasiPerbaikanSekolah');
        removeCondition1('JasaRenovasiPerbaikanRumahSakit');
        removeCondition1('JasaRenovasiPerbaikanTempatIbadah');
        removeCondition1('JasaRenovasiPerbaikanTerminal');
        removeCondition1('JasaRenovasiPerbaikanHalte');
        removeCondition1('JasaRenovasiPerbaikanTamanKota');
	

        JasaKonstruksiPerbaikanLinkSub.style.visibility = 'visible';
        JasaRenovasiPerbaikanLinkSub.style.visibility = 'visible';
        JasaRenovasiPerbaikanFasadLink.style.visibility = 'visible';

	
        JasaRenovasiFasadBangunanLink.style.visibility = 'visible';
        pageNameKonstruksiPerbaikan1.textContent = urlMappingPerbaikanFasadEksteriorFasad[cleanUrlJasaPerbaikanKonsSub];
    }
 
  // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingPerbaikanFasadEksteriorFasad[cleanUrlJasaPerbaikanKonsSub]) {
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
	      "name": "Jasa Renovasi Eksterior Bangunan",
	      "item": "https://www.betonjayareadymix.com/p/jasa-renovasi-eksterior-bangunan.html"
	    },
	    {
	      "@type": "ListItem",
	      "position": 5,
	      "name": "Jasa Renovasi Fasad Bangunan",
	      "item": "https://www.betonjayareadymix.com/p/jasa-renovasi-fasad-bangunan.html"
	    },  
	  {
	    "@type": "ListItem",
	     "position": 6,
	      "name": urlMappingPerbaikanFasadEksteriorFasad[cleanUrlJasaPerbaikanKonsSub],
	      "item": cleanUrlJasaPerbaikanKonsSub
	   }
	  ]
	};
	       const script = document.createElement('script');
	       script.type = 'application/ld+json';
	       script.text = JSON.stringify(jsonLDBreadcrumb);
	       document.head.appendChild(script);
     }

/*
if (urlMappingPerbaikanFasadEksteriorEksterior[cleanUrlJasaPerbaikanKonsSub]) {
        restoreCondition1('JasaKonsPerbaikan');
        restoreCondition1('JasaRenovasiPerbaikanFasad');
        restoreCondition1('JasaRenovasiEksteriorBangunan');
	
          // hapus elemen id DIV Lain
	removeCondition1('ProdukInFur');
        removeCondition1('MaterialKons');
	removeCondition1('ProdukKons');
        //removeCondition1('ProdukKonsSaluran');
        //removeCondition1('ProdukKonsPembatas');
        removeCondition1('JasaKonsPembatas');
        removeCondition1('JasaKonsJalanPerkerasan');
        removeCondition1('JasaKonsPondasiTanah');
	removeCondition1('JasaKons');
	removeCondition1('JasaKonsSub');
	removeCondition1('MenuKons');
	removeCondition1('JasaKonsFinishing');
        removeCondition1('JasaKonsStruktur');
        
       // hapus elemen JasaPerbaikanKons Lain
        removeCondition1('JasaRenovasiPerbaikanStruktur');
        removeCondition1('JasaRenovasiPerbaikanInfrastruktur');
        removeCondition1('JasaRenovasiPerbaikanBangunan');
	removeCondition1('JasaRenovasiPerbaikanInterior');
	removeCondition1('JasaRenovasiPerbaikanFasilitas');

	// hapus elemen id Semua Sub JasaRenovasiPerbaikanStruktur
	removeCondition1('JasaPerbaikanStrukturBeton');
					removeCondition1('JasaPerbaikanGedungBertingkat');
			removeCondition1('JasaPerbaikanStrukturBangunanTua');
			removeCondition1('JasaPerbaikanStrukturBangunanMiring');
	
        removeCondition1('JasaRenovasiPerbaikanStrukturKolomBalok');
        removeCondition1('JasaRenovasiPerbaikanStrukturPondasi');
        removeCondition1('JasaRenovasiPerbaikanStrukturLantai');
	removeCondition1('JasaRenovasiPerbaikanStrukturDinding');
	removeCondition1('JasaRenovasiPerbaikanStrukturAtap');
	removeCondition1('JasaRenovasiPerbaikanRehabilitasiBeton');
       
        // hapus elemen id Semua Sub JasaRenovasiPerbaikanInfrastruktur
        removeCondition1('JasaRenovasiPerbaikanInfrastrukturJalan');
        removeCondition1('JasaRenovasiPerbaikanInfrastrukturJembatan');
        removeCondition1('JasaRenovasiPerbaikanInfrastrukturSaluran');
        removeCondition1('JasaRenovasiPerbaikanInfrastrukturTrotoar');

	// hapus elemen id Semua Sub JasaRenovasiPerbaikanBangunan
        removeCondition1('JasaRenovasiPerbaikanBangunanRumah');
        removeCondition1('JasaRenovasiPerbaikanBangunanKantor');
        removeCondition1('JasaRenovasiPerbaikanBangunanPabrik');
        removeCondition1('JasaRenovasiPerbaikanBangunanGedung');
        removeCondition1('JasaRenovasiPerbaikanBangunanGudang');
        removeCondition1('JasaRenovasiPerbaikanBangunanHotel');

	 // hapus elemen id Semua Sub JasaRenovasiPerbaikanInterior
        removeCondition1('JasaRenovasiInteriorRumah');
        removeCondition1('JasaRenovasiInteriorKantor');
        removeCondition1('JasaRenovasiInteriorApartemen');
        removeCondition1('JasaRenovasiInteriorHotel');
        removeCondition1('JasaRenovasiInteriorToko');
        removeCondition1('JasaRenovasiInteriorCustom');
        removeCondition1('JasaRenovasiInteriorRuangan');
	     
       // hapus elemen id Semua Sub JasaRenovasiPerbaikanFasadEksterior
       // removeCondition1('');
        removeCondition1('JasaPerbaikanArsitekturEksterior');
        //removeCondition1('JasaRenovasiEksteriorBangunan');
        removeCondition1('JasaRenovasiFasadBangunan');

	// hapus elemen id Semua Sub JasaRenovasiPerbaikanFasilitas
        removeCondition1('JasaRenovasiPerbaikanStadionOlahraga');
        removeCondition1('JasaRenovasiPerbaikanSekolah');
        removeCondition1('JasaRenovasiPerbaikanRumahSakit');
        removeCondition1('JasaRenovasiPerbaikanTempatIbadah');
        removeCondition1('JasaRenovasiPerbaikanTerminal');
        removeCondition1('JasaRenovasiPerbaikanHalte');
        removeCondition1('JasaRenovasiPerbaikanTamanKota');
	

        JasaKonstruksiPerbaikanLinkSub.style.visibility = 'visible';
        JasaRenovasiPerbaikanLinkSub.style.visibility = 'visible';
        JasaRenovasiPerbaikanFasadLink.style.visibility = 'visible';

	
        JasaRenovasiEksteriorBangunanLink.style.visibility = 'visible';
        pageNameKonstruksiPerbaikan1.textContent = urlMappingPerbaikanFasadEksteriorEksterior[cleanUrlJasaPerbaikanKonsSub];
    }
  
  // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingPerbaikanFasadEksteriorEksterior[cleanUrlJasaPerbaikanKonsSub]) {
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
	      "name": "Jasa Renovasi Fasad Eksterior",
	      "item": "https://www.betonjayareadymix.com/p/jasa-renovasi-fasad-eksterior.html"
	    },
	    {
	      "@type": "ListItem",
	      "position": 5,
	      "name": "Jasa Renovasi Eksterior Bangunan",
	      "item": "https://www.betonjayareadymix.com/p/jasa-renovasi-eksterior-bangunan.html"
	    },  
	  {
	    "@type": "ListItem",
	     "position": 6,
	      "name": urlMappingPerbaikanFasadEksteriorEksterior[cleanUrlJasaPerbaikanKonsSub],
	      "item": cleanUrlJasaPerbaikanKonsSub
	   }
	  ]
	};
	       const script = document.createElement('script');
	       script.type = 'application/ld+json';
	       script.text = JSON.stringify(jsonLDBreadcrumb);
	       document.head.appendChild(script);
     }
	*/
if (urlMappingPerbaikanFasadEksteriorArsitektur[cleanUrlJasaPerbaikanKonsSub]) {
        restoreCondition1('JasaKonsPerbaikan');
        restoreCondition1('JasaRenovasiPerbaikanFasad');
        restoreCondition1('JasaPerbaikanArsitekturEksterior');

		   removeCondition1('JasaRenovasiPerbaikanPerawatanPerbaikanBangunan');
	   restoreCondition1('JasaRenovasiPerbaikanSub');
	
          // hapus elemen id DIV Lain
	removeCondition1('ProdukInFur');
        removeCondition1('MaterialKons');
	removeCondition1('ProdukKons');
        //removeCondition1('ProdukKonsSaluran');
        //removeCondition1('ProdukKonsPembatas');
        removeCondition1('JasaKonsPembatas');
        removeCondition1('JasaKonsJalanPerkerasan');
        removeCondition1('JasaKonsPondasiTanah');
	removeCondition1('JasaKons');
	removeCondition1('JasaKonsSub');
	removeCondition1('MenuKons');
	removeCondition1('JasaKonsFinishing');
        removeCondition1('JasaKonsStruktur');
        
       // hapus elemen JasaPerbaikanKons Lain
       		   removeCondition1('JasaPerbaikanElemenArsitekturalBangunan');
	   removeCondition1('JasaPerbaikanAtapDrainaseBangunan');
	   removeCondition1('JasaPerbaikanKebocoranWaterproofing');
        removeCondition1('JasaRenovasiPerbaikanStruktur');
	
        removeCondition1('JasaRenovasiPerbaikanInfrastruktur');
        removeCondition1('JasaRenovasiPerbaikanBangunan');
	removeCondition1('JasaRenovasiPerbaikanInterior');
	removeCondition1('JasaRenovasiPerbaikanFasilitas');

	// hapus elemen id Semua Sub JasaRenovasiPerbaikanStruktur
	removeCondition1('JasaPerbaikanStrukturBeton');
					removeCondition1('JasaPerbaikanGedungBertingkat');
			removeCondition1('JasaPerbaikanStrukturBangunanTua');
			removeCondition1('JasaPerbaikanStrukturBangunanMiring');
	
        removeCondition1('JasaRenovasiPerbaikanStrukturKolomBalok');
        removeCondition1('JasaRenovasiPerbaikanStrukturPondasi');
        removeCondition1('JasaRenovasiPerbaikanStrukturLantai');
	removeCondition1('JasaRenovasiPerbaikanStrukturDinding');
	removeCondition1('JasaRenovasiPerbaikanStrukturAtap');
	removeCondition1('JasaRenovasiPerbaikanRehabilitasiBeton');
       
        // hapus elemen id Semua Sub JasaRenovasiPerbaikanInfrastruktur
        removeCondition1('JasaRenovasiPerbaikanInfrastrukturJalan');
        removeCondition1('JasaRenovasiPerbaikanInfrastrukturJembatan');
        removeCondition1('JasaRenovasiPerbaikanInfrastrukturSaluran');
        removeCondition1('JasaRenovasiPerbaikanInfrastrukturTrotoar');

	// hapus elemen id Semua Sub JasaRenovasiPerbaikanBangunan
        removeCondition1('JasaRenovasiPerbaikanBangunanRumah');
        removeCondition1('JasaRenovasiPerbaikanBangunanKantor');
        removeCondition1('JasaRenovasiPerbaikanBangunanPabrik');
        removeCondition1('JasaRenovasiPerbaikanBangunanGedung');
        removeCondition1('JasaRenovasiPerbaikanBangunanGudang');
        removeCondition1('JasaRenovasiPerbaikanBangunanHotel');

	 // hapus elemen id Semua Sub JasaRenovasiPerbaikanInterior
        removeCondition1('JasaRenovasiInteriorRumah');
        removeCondition1('JasaRenovasiInteriorKantor');
        removeCondition1('JasaRenovasiInteriorApartemen');
        removeCondition1('JasaRenovasiInteriorHotel');
        removeCondition1('JasaRenovasiInteriorToko');
        removeCondition1('JasaRenovasiInteriorCustom');
        removeCondition1('JasaRenovasiInteriorRuangan');
	     
       // hapus elemen id Semua Sub JasaRenovasiPerbaikanFasadEksterior
       // removeCondition1('');
        removeCondition1('JasaRenovasiEksteriorBangunan');
        removeCondition1('JasaRenovasiFasadBangunan');

	// hapus elemen id Semua Sub JasaRenovasiPerbaikanFasilitas
        removeCondition1('JasaRenovasiPerbaikanStadionOlahraga');
        removeCondition1('JasaRenovasiPerbaikanSekolah');
        removeCondition1('JasaRenovasiPerbaikanRumahSakit');
        removeCondition1('JasaRenovasiPerbaikanTempatIbadah');
        removeCondition1('JasaRenovasiPerbaikanTerminal');
        removeCondition1('JasaRenovasiPerbaikanHalte');
        removeCondition1('JasaRenovasiPerbaikanTamanKota');
	

        JasaKonstruksiPerbaikanLinkSub.style.visibility = 'visible';
        JasaRenovasiPerbaikanLinkSub.style.visibility = 'visible';
        JasaRenovasiPerbaikanFasadLink.style.visibility = 'visible';

	
        JasaPerbaikanArsitekturEksteriorLink.style.visibility = 'visible';
        pageNameKonstruksiPerbaikan1.textContent = urlMappingPerbaikanFasadEksteriorArsitektur[cleanUrlJasaPerbaikanKonsSub];
    }

  // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingPerbaikanFasadEksteriorArsitektur[cleanUrlJasaPerbaikanKonsSub]) {
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
	      "name": "Jasa Renovasi Eksterior Bangunan",
	      "item": "https://www.betonjayareadymix.com/p/jasa-renovasi-eksterior-bangunan.html"
	    },
	    {
	      "@type": "ListItem",
	      "position": 5,
	      "name": "Jasa Renovasi Arsitektur Eksterior",
	      "item": "https://www.betonjayareadymix.com/p/jasa-renovasi-arsitektur-eksterior.html"
	    },  
	  {
	    "@type": "ListItem",
	     "position": 6,
	      "name": urlMappingPerbaikanFasadEksteriorArsitektur[cleanUrlJasaPerbaikanKonsSub],
	      "item": cleanUrlJasaPerbaikanKonsSub
	   }
	  ]
	};
	       const script = document.createElement('script');
	       script.type = 'application/ld+json';
	       script.text = JSON.stringify(jsonLDBreadcrumb);
	       document.head.appendChild(script);
     }
  //FASILITAS UMUM
   if (urlMappingPerbaikanFasilitasUmum[cleanUrlJasaPerbaikanKonsSub]) {
        restoreCondition1('JasaKonsPerbaikan');
        restoreCondition1('JasaRenovasiPerbaikanFasilitas');

	   	   removeCondition1('JasaRenovasiPerbaikanPerawatanPerbaikanBangunan');
	   restoreCondition1('JasaRenovasiPerbaikanSub');
          // hapus elemen id DIV Lain
	removeCondition1('ProdukInFur');
        removeCondition1('MaterialKons');
	removeCondition1('ProdukKons');
        //removeCondition1('ProdukKonsSaluran');
        //removeCondition1('ProdukKonsPembatas');
        removeCondition1('JasaKonsPembatas');
        removeCondition1('JasaKonsJalanPerkerasan');
        removeCondition1('JasaKonsPondasiTanah');
	removeCondition1('JasaKons');
	removeCondition1('JasaKonsSub');
	removeCondition1('MenuKons');
	removeCondition1('JasaKonsFinishing');
        removeCondition1('JasaKonsStruktur');
	
       // hapus elemen JasaPerbaikanKons Lain
        		   removeCondition1('JasaPerbaikanElemenArsitekturalBangunan');
	   removeCondition1('JasaPerbaikanAtapDrainaseBangunan');
	   removeCondition1('JasaPerbaikanKebocoranWaterproofing');
        removeCondition1('JasaRenovasiPerbaikanStruktur');
	   
        removeCondition1('JasaRenovasiPerbaikanInfrastruktur');
         removeCondition1('JasaRenovasiPerbaikanBangunan');
	 removeCondition1('JasaRenovasiPerbaikanInterior');
	removeCondition1('JasaRenovasiPerbaikanFasad');

      // hapus elemen id Semua Sub JasaRenovasiPerbaikanStruktur
	removeCondition1('JasaPerbaikanStrukturBeton');
	   				removeCondition1('JasaPerbaikanGedungBertingkat');
			removeCondition1('JasaPerbaikanStrukturBangunanTua');
			removeCondition1('JasaPerbaikanStrukturBangunanMiring');
	   
        removeCondition1('JasaRenovasiPerbaikanStrukturKolomBalok');
        removeCondition1('JasaRenovasiPerbaikanStrukturPondasi');
        removeCondition1('JasaRenovasiPerbaikanStrukturLantai');
	removeCondition1('JasaRenovasiPerbaikanStrukturDinding');
	removeCondition1('JasaRenovasiPerbaikanStrukturAtap');
	removeCondition1('JasaRenovasiPerbaikanRehabilitasiBeton');
       
        // hapus elemen id Semua Sub JasaRenovasiPerbaikanInfrastruktur
        removeCondition1('JasaRenovasiPerbaikanInfrastrukturJalan');
        removeCondition1('JasaRenovasiPerbaikanInfrastrukturJembatan');
        removeCondition1('JasaRenovasiPerbaikanInfrastrukturSaluran');
        removeCondition1('JasaRenovasiPerbaikanInfrastrukturTrotoar');

	// hapus elemen id Semua Sub JasaRenovasiPerbaikanBangunan
        removeCondition1('JasaRenovasiPerbaikanBangunanRumah');
        removeCondition1('JasaRenovasiPerbaikanBangunanKantor');
        removeCondition1('JasaRenovasiPerbaikanBangunanPabrik');
        removeCondition1('JasaRenovasiPerbaikanBangunanGedung');
        removeCondition1('JasaRenovasiPerbaikanBangunanGudang');
        removeCondition1('JasaRenovasiPerbaikanBangunanHotel');

	 // hapus elemen id Semua Sub JasaRenovasiPerbaikanInterior
        removeCondition1('JasaRenovasiInteriorRumah');
        removeCondition1('JasaRenovasiInteriorKantor');
        removeCondition1('JasaRenovasiInteriorApartemen');
        removeCondition1('JasaRenovasiInteriorHotel');
        removeCondition1('JasaRenovasiInteriorToko');
        removeCondition1('JasaRenovasiInteriorCustom');
        removeCondition1('JasaRenovasiInteriorRuangan');
	   
       // hapus elemen id Semua Sub JasaRenovasiPerbaikanFasadEksterior
        removeCondition1('JasaRenovasiFasadBangunan');
        removeCondition1('JasaRenovasiEksteriorBangunan');
        removeCondition1('JasaPerbaikanArsitekturEksterior');

	// hapus elemen id Semua Sub JasaRenovasiPerbaikanFasilitas
        removeCondition1('JasaRenovasiPerbaikanStadionOlahraga');
        removeCondition1('JasaRenovasiPerbaikanSekolah');
        removeCondition1('JasaRenovasiPerbaikanRumahSakit');
        removeCondition1('JasaRenovasiPerbaikanTempatIbadah');
        removeCondition1('JasaRenovasiPerbaikanTerminal');
        removeCondition1('JasaRenovasiPerbaikanHalte');
        removeCondition1('JasaRenovasiPerbaikanTamanKota');
	

        JasaKonstruksiPerbaikanLinkSub.style.visibility = 'visible';
        JasaRenovasiPerbaikanLinkSub.style.visibility = 'visible';
        JasaRenovasiPerbaikanFasilitasLink.style.visibility = 'visible';
        pageNameKonstruksiPerbaikan1.textContent = urlMappingPerbaikanFasilitasUmum[cleanUrlJasaPerbaikanKonsSub];
    }
// ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingPerbaikanFasilitasUmum[cleanUrlJasaPerbaikanKonsSub]) {
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
	      "name": "Jasa Renovasi Fasilitas Umum",
	      "item": "https://www.betonjayareadymix.com/p/jasa-renovasi-fasilitas-umum.html"
	    },
	   {
	    "@type": "ListItem",
	     "position": 5,
	      "name": urlMappingPerbaikanFasilitasUmum[cleanUrlJasaPerbaikanKonsSub],
	      "item": cleanUrlJasaPerbaikanKonsSub
	   }
	  ]
	};
	       const script = document.createElement('script');
	       script.type = 'application/ld+json';
	       script.text = JSON.stringify(jsonLDBreadcrumb);
	       document.head.appendChild(script);
     }
 
  //SUB PAGE FASILITAS UMUM
  if (urlMappingPerbaikanFasilitasUmumTaman[cleanUrlJasaPerbaikanKonsSub]) {
        restoreCondition1('JasaKonsPerbaikan');
        restoreCondition1('JasaRenovasiPerbaikanFasilitas');
        restoreCondition1('JasaRenovasiPerbaikanTamanKota');

	  	   removeCondition1('JasaRenovasiPerbaikanPerawatanPerbaikanBangunan');
	   restoreCondition1('JasaRenovasiPerbaikanSub');
          // hapus elemen id DIV Lain
	removeCondition1('ProdukInFur');
        removeCondition1('MaterialKons');
	removeCondition1('ProdukKons');
        //removeCondition1('ProdukKonsSaluran');
        //removeCondition1('ProdukKonsPembatas');
        removeCondition1('JasaKonsPembatas');
        removeCondition1('JasaKonsJalanPerkerasan');
        removeCondition1('JasaKonsPondasiTanah');
	removeCondition1('JasaKons');
	removeCondition1('JasaKonsSub');
	removeCondition1('MenuKons');
	removeCondition1('JasaKonsFinishing');
        removeCondition1('JasaKonsStruktur');
	
       // hapus elemen JasaPerbaikanKons Lain
        		   removeCondition1('JasaPerbaikanElemenArsitekturalBangunan');
	   removeCondition1('JasaPerbaikanAtapDrainaseBangunan');
	   removeCondition1('JasaPerbaikanKebocoranWaterproofing');
        removeCondition1('JasaRenovasiPerbaikanStruktur');
	  
        removeCondition1('JasaRenovasiPerbaikanInfrastruktur');
         removeCondition1('JasaRenovasiPerbaikanBangunan');
	 removeCondition1('JasaRenovasiPerbaikanInterior');
	removeCondition1('JasaRenovasiPerbaikanFasad');
      
	// hapus elemen id Semua Sub JasaRenovasiPerbaikanFasilitas
        removeCondition1('JasaRenovasiPerbaikanStadionOlahraga');
        removeCondition1('JasaRenovasiPerbaikanSekolah');
        removeCondition1('JasaRenovasiPerbaikanRumahSakit');
        removeCondition1('JasaRenovasiPerbaikanTempatIbadah');
        removeCondition1('JasaRenovasiPerbaikanTerminal');
        removeCondition1('JasaRenovasiPerbaikanHalte');
        //removeCondition1('');
	   
      // hapus elemen id Semua Sub JasaRenovasiPerbaikanStruktur
	removeCondition1('JasaPerbaikanStrukturBeton');
	  				removeCondition1('JasaPerbaikanGedungBertingkat');
			removeCondition1('JasaPerbaikanStrukturBangunanTua');
			removeCondition1('JasaPerbaikanStrukturBangunanMiring');
	  
        removeCondition1('JasaRenovasiPerbaikanStrukturKolomBalok');
        removeCondition1('JasaRenovasiPerbaikanStrukturPondasi');
        removeCondition1('JasaRenovasiPerbaikanStrukturLantai');
	removeCondition1('JasaRenovasiPerbaikanStrukturDinding');
	removeCondition1('JasaRenovasiPerbaikanStrukturAtap');
	removeCondition1('JasaRenovasiPerbaikanRehabilitasiBeton');
       
        // hapus elemen id Semua Sub JasaRenovasiPerbaikanInfrastruktur
        removeCondition1('JasaRenovasiPerbaikanInfrastrukturJalan');
        removeCondition1('JasaRenovasiPerbaikanInfrastrukturJembatan');
        removeCondition1('JasaRenovasiPerbaikanInfrastrukturSaluran');
        removeCondition1('JasaRenovasiPerbaikanInfrastrukturTrotoar');

	// hapus elemen id Semua Sub JasaRenovasiPerbaikanBangunan
        removeCondition1('JasaRenovasiPerbaikanBangunanRumah');
        removeCondition1('JasaRenovasiPerbaikanBangunanKantor');
        removeCondition1('JasaRenovasiPerbaikanBangunanPabrik');
        removeCondition1('JasaRenovasiPerbaikanBangunanGedung');
        removeCondition1('JasaRenovasiPerbaikanBangunanGudang');
        removeCondition1('JasaRenovasiPerbaikanBangunanHotel');

	 // hapus elemen id Semua Sub JasaRenovasiPerbaikanInterior
        removeCondition1('JasaRenovasiInteriorRumah');
        removeCondition1('JasaRenovasiInteriorKantor');
        removeCondition1('JasaRenovasiInteriorApartemen');
        removeCondition1('JasaRenovasiInteriorHotel');
        removeCondition1('JasaRenovasiInteriorToko');
        removeCondition1('JasaRenovasiInteriorCustom');
        removeCondition1('JasaRenovasiInteriorRuangan');
	   
       // hapus elemen id Semua Sub JasaRenovasiPerbaikanFasadEksterior
        removeCondition1('JasaRenovasiFasadBangunan');
        removeCondition1('JasaRenovasiEksteriorBangunan');
        removeCondition1('JasaPerbaikanArsitekturEksterior');
	

        JasaKonstruksiPerbaikanLinkSub.style.visibility = 'visible';
        JasaRenovasiPerbaikanLinkSub.style.visibility = 'visible';
        JasaRenovasiPerbaikanFasilitasLink.style.visibility = 'visible';
	   
        JasaRenovasiPerbaikanTamanKotaLink.style.visibility = 'visible';
        pageNameKonstruksiPerbaikan1.textContent = urlMappingPerbaikanFasilitasUmumTaman [cleanUrlJasaPerbaikanKonsSub];
    }
// ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingPerbaikanFasilitasUmumTaman[cleanUrlJasaPerbaikanKonsSub]) {
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
	      "name": "Jasa Renovasi Fasilitas Umum",
	      "item": "https://www.betonjayareadymix.com/p/jasa-renovasi-fasilitas-umum.html"
	    },
	     {
	      "@type": "ListItem",
	      "position": 5,
	      "name": "Jasa Renovasi Taman Kota",
	      "item": "https://www.betonjayareadymix.com/p/jasa-renovasi-taman-kota.html"
	    },
	   {
	    "@type": "ListItem",
	     "position": 6,
	      "name": urlMappingPerbaikanFasilitasUmumTaman[cleanUrlJasaPerbaikanKonsSub],
	      "item": cleanUrlJasaPerbaikanKonsSub
	   }
	  ]
	};
	       const script = document.createElement('script');
	       script.type = 'application/ld+json';
	       script.text = JSON.stringify(jsonLDBreadcrumb);
	       document.head.appendChild(script);
     }
   if (urlMappingPerbaikanFasilitasUmumSekolah[cleanUrlJasaPerbaikanKonsSub]) {
        restoreCondition1('JasaKonsPerbaikan');
        restoreCondition1('JasaRenovasiPerbaikanFasilitas');
        restoreCondition1('JasaRenovasiPerbaikanSekolah');

	   	   removeCondition1('JasaRenovasiPerbaikanPerawatanPerbaikanBangunan');
	   restoreCondition1('JasaRenovasiPerbaikanSub');
          // hapus elemen id DIV Lain
	removeCondition1('ProdukInFur');
        removeCondition1('MaterialKons');
	removeCondition1('ProdukKons');
        //removeCondition1('ProdukKonsSaluran');
        //removeCondition1('ProdukKonsPembatas');
        removeCondition1('JasaKonsPembatas');
        removeCondition1('JasaKonsJalanPerkerasan');
        removeCondition1('JasaKonsPondasiTanah');
	removeCondition1('JasaKons');
	removeCondition1('JasaKonsSub');
	removeCondition1('MenuKons');
	removeCondition1('JasaKonsFinishing');
        removeCondition1('JasaKonsStruktur');
	
       // hapus elemen JasaPerbaikanKons Lain
        		   removeCondition1('JasaPerbaikanElemenArsitekturalBangunan');
	   removeCondition1('JasaPerbaikanAtapDrainaseBangunan');
	   removeCondition1('JasaPerbaikanKebocoranWaterproofing');
        removeCondition1('JasaRenovasiPerbaikanStruktur');
	   
        removeCondition1('JasaRenovasiPerbaikanInfrastruktur');
         removeCondition1('JasaRenovasiPerbaikanBangunan');
	 removeCondition1('JasaRenovasiPerbaikanInterior');
	removeCondition1('JasaRenovasiPerbaikanFasad');
      
	// hapus elemen id Semua Sub JasaRenovasiPerbaikanFasilitas
        removeCondition1('JasaRenovasiPerbaikanStadionOlahraga');
        removeCondition1('JasaRenovasiPerbaikanTamanKota');
        removeCondition1('JasaRenovasiPerbaikanRumahSakit');
        removeCondition1('JasaRenovasiPerbaikanTempatIbadah');
        removeCondition1('JasaRenovasiPerbaikanTerminal');
        removeCondition1('JasaRenovasiPerbaikanHalte');
        //removeCondition1('');
	   
      // hapus elemen id Semua Sub JasaRenovasiPerbaikanStruktur
	removeCondition1('JasaPerbaikanStrukturBeton');
	   				removeCondition1('JasaPerbaikanGedungBertingkat');
			removeCondition1('JasaPerbaikanStrukturBangunanTua');
			removeCondition1('JasaPerbaikanStrukturBangunanMiring');
	   
        removeCondition1('JasaRenovasiPerbaikanStrukturKolomBalok');
        removeCondition1('JasaRenovasiPerbaikanStrukturPondasi');
        removeCondition1('JasaRenovasiPerbaikanStrukturLantai');
	removeCondition1('JasaRenovasiPerbaikanStrukturDinding');
	removeCondition1('JasaRenovasiPerbaikanStrukturAtap');
	removeCondition1('JasaRenovasiPerbaikanRehabilitasiBeton');
       
        // hapus elemen id Semua Sub JasaRenovasiPerbaikanInfrastruktur
        removeCondition1('JasaRenovasiPerbaikanInfrastrukturJalan');
        removeCondition1('JasaRenovasiPerbaikanInfrastrukturJembatan');
        removeCondition1('JasaRenovasiPerbaikanInfrastrukturSaluran');
        removeCondition1('JasaRenovasiPerbaikanInfrastrukturTrotoar');

	// hapus elemen id Semua Sub JasaRenovasiPerbaikanBangunan
        removeCondition1('JasaRenovasiPerbaikanBangunanRumah');
        removeCondition1('JasaRenovasiPerbaikanBangunanKantor');
        removeCondition1('JasaRenovasiPerbaikanBangunanPabrik');
        removeCondition1('JasaRenovasiPerbaikanBangunanGedung');
        removeCondition1('JasaRenovasiPerbaikanBangunanGudang');
        removeCondition1('JasaRenovasiPerbaikanBangunanHotel');

	 // hapus elemen id Semua Sub JasaRenovasiPerbaikanInterior
        removeCondition1('JasaRenovasiInteriorRumah');
        removeCondition1('JasaRenovasiInteriorKantor');
        removeCondition1('JasaRenovasiInteriorApartemen');
        removeCondition1('JasaRenovasiInteriorHotel');
        removeCondition1('JasaRenovasiInteriorToko');
        removeCondition1('JasaRenovasiInteriorCustom');
        removeCondition1('JasaRenovasiInteriorRuangan');
	   
       // hapus elemen id Semua Sub JasaRenovasiPerbaikanFasadEksterior
        removeCondition1('JasaRenovasiFasadBangunan');
        removeCondition1('JasaRenovasiEksteriorBangunan');
        removeCondition1('JasaPerbaikanArsitekturEksterior');
	

        JasaKonstruksiPerbaikanLinkSub.style.visibility = 'visible';
        JasaRenovasiPerbaikanLinkSub.style.visibility = 'visible';
        JasaRenovasiPerbaikanFasilitasLink.style.visibility = 'visible';
	   
        JasaRenovasiPerbaikanSekolahLink.style.visibility = 'visible';
        pageNameKonstruksiPerbaikan1.textContent = urlMappingPerbaikanFasilitasUmumSekolah [cleanUrlJasaPerbaikanKonsSub];
    }
  // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingPerbaikanFasilitasUmumSekolah[cleanUrlJasaPerbaikanKonsSub]) {
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
	      "name": "Jasa Renovasi Fasilitas Umum",
	      "item": "https://www.betonjayareadymix.com/p/jasa-renovasi-fasilitas-umum.html"
	    },
	     {
	      "@type": "ListItem",
	      "position": 5,
	      "name": "Jasa Renovasi Sekolah",
	      "item": "https://www.betonjayareadymix.com/p/jasa-renovasi-sekolah.html"
	    },
	   {
	    "@type": "ListItem",
	     "position": 6,
	      "name": urlMappingPerbaikanFasilitasUmumSekolah[cleanUrlJasaPerbaikanKonsSub],
	      "item": cleanUrlJasaPerbaikanKonsSub
	   }
	  ]
	};
	       const script = document.createElement('script');
	       script.type = 'application/ld+json';
	       script.text = JSON.stringify(jsonLDBreadcrumb);
	       document.head.appendChild(script);
     }
if (urlMappingPerbaikanFasilitasUmumStadion[cleanUrlJasaPerbaikanKonsSub]) {
        restoreCondition1('JasaKonsPerbaikan');
        restoreCondition1('JasaRenovasiPerbaikanFasilitas');
        restoreCondition1('JasaRenovasiPerbaikanStadionOlahraga');

	   removeCondition1('JasaRenovasiPerbaikanPerawatanPerbaikanBangunan');
	   restoreCondition1('JasaRenovasiPerbaikanSub');	
          // hapus elemen id DIV Lain
	removeCondition1('ProdukInFur');
        removeCondition1('MaterialKons');
	removeCondition1('ProdukKons');
        //removeCondition1('ProdukKonsSaluran');
        //removeCondition1('ProdukKonsPembatas');
        removeCondition1('JasaKonsPembatas');
        removeCondition1('JasaKonsJalanPerkerasan');
        removeCondition1('JasaKonsPondasiTanah');
	removeCondition1('JasaKons');
	removeCondition1('JasaKonsSub');
	removeCondition1('MenuKons');
	removeCondition1('JasaKonsFinishing');
        removeCondition1('JasaKonsStruktur');
	
       // hapus elemen JasaPerbaikanKons Lain
       		   removeCondition1('JasaPerbaikanElemenArsitekturalBangunan');
	   removeCondition1('JasaPerbaikanAtapDrainaseBangunan');
	   removeCondition1('JasaPerbaikanKebocoranWaterproofing');
        removeCondition1('JasaRenovasiPerbaikanStruktur');
	
        removeCondition1('JasaRenovasiPerbaikanInfrastruktur');
         removeCondition1('JasaRenovasiPerbaikanBangunan');
	 removeCondition1('JasaRenovasiPerbaikanInterior');
	removeCondition1('JasaRenovasiPerbaikanFasad');
      
	// hapus elemen id Semua Sub JasaRenovasiPerbaikanFasilitas
        removeCondition1('JasaRenovasiPerbaikanTamanKota');
        removeCondition1('JasaRenovasiPerbaikanSekolah');
        removeCondition1('JasaRenovasiPerbaikanRumahSakit');
        removeCondition1('JasaRenovasiPerbaikanTempatIbadah');
        removeCondition1('JasaRenovasiPerbaikanTerminal');
        removeCondition1('JasaRenovasiPerbaikanHalte');
        //removeCondition1('');
	   
      // hapus elemen id Semua Sub JasaRenovasiPerbaikanStruktur
	removeCondition1('JasaPerbaikanStrukturBeton');
					removeCondition1('JasaPerbaikanGedungBertingkat');
			removeCondition1('JasaPerbaikanStrukturBangunanTua');
			removeCondition1('JasaPerbaikanStrukturBangunanMiring');
	
        removeCondition1('JasaRenovasiPerbaikanStrukturKolomBalok');
        removeCondition1('JasaRenovasiPerbaikanStrukturPondasi');
        removeCondition1('JasaRenovasiPerbaikanStrukturLantai');
	removeCondition1('JasaRenovasiPerbaikanStrukturDinding');
	removeCondition1('JasaRenovasiPerbaikanStrukturAtap');
	removeCondition1('JasaRenovasiPerbaikanRehabilitasiBeton');
       
        // hapus elemen id Semua Sub JasaRenovasiPerbaikanInfrastruktur
        removeCondition1('JasaRenovasiPerbaikanInfrastrukturJalan');
        removeCondition1('JasaRenovasiPerbaikanInfrastrukturJembatan');
        removeCondition1('JasaRenovasiPerbaikanInfrastrukturSaluran');
        removeCondition1('JasaRenovasiPerbaikanInfrastrukturTrotoar');

	// hapus elemen id Semua Sub JasaRenovasiPerbaikanBangunan
        removeCondition1('JasaRenovasiPerbaikanBangunanRumah');
        removeCondition1('JasaRenovasiPerbaikanBangunanKantor');
        removeCondition1('JasaRenovasiPerbaikanBangunanPabrik');
        removeCondition1('JasaRenovasiPerbaikanBangunanGedung');
        removeCondition1('JasaRenovasiPerbaikanBangunanGudang');
        removeCondition1('JasaRenovasiPerbaikanBangunanHotel');

	 // hapus elemen id Semua Sub JasaRenovasiPerbaikanInterior
        removeCondition1('JasaRenovasiInteriorRumah');
        removeCondition1('JasaRenovasiInteriorKantor');
        removeCondition1('JasaRenovasiInteriorApartemen');
        removeCondition1('JasaRenovasiInteriorHotel');
        removeCondition1('JasaRenovasiInteriorToko');
        removeCondition1('JasaRenovasiInteriorCustom');
        removeCondition1('JasaRenovasiInteriorRuangan');
	   
       // hapus elemen id Semua Sub JasaRenovasiPerbaikanFasadEksterior
        removeCondition1('JasaRenovasiFasadBangunan');
        removeCondition1('JasaRenovasiEksteriorBangunan');
        removeCondition1('JasaPerbaikanArsitekturEksterior');
	

        JasaKonstruksiPerbaikanLinkSub.style.visibility = 'visible';
        JasaRenovasiPerbaikanLinkSub.style.visibility = 'visible';
        JasaRenovasiPerbaikanFasilitasLink.style.visibility = 'visible';
	   
        JasaRenovasiPerbaikanStadionOlahragaLink.style.visibility = 'visible';
        pageNameKonstruksiPerbaikan1.textContent = urlMappingPerbaikanFasilitasUmumStadion[cleanUrlJasaPerbaikanKonsSub];
    }
  // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingPerbaikanFasilitasUmumStadion[cleanUrlJasaPerbaikanKonsSub]) {
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
	      "name": "Jasa Renovasi Fasilitas Umum",
	      "item": "https://www.betonjayareadymix.com/p/jasa-renovasi-fasilitas-umum.html"
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
	      "name": urlMappingPerbaikanFasilitasUmumStadion[cleanUrlJasaPerbaikanKonsSub],
	      "item": cleanUrlJasaPerbaikanKonsSub
	   }
	  ]
	};
	       const script = document.createElement('script');
	       script.type = 'application/ld+json';
	       script.text = JSON.stringify(jsonLDBreadcrumb);
	       document.head.appendChild(script);
     }
if (urlMappingPerbaikanFasilitasIbadah[cleanUrlJasaPerbaikanKonsSub]) {
        restoreCondition1('JasaKonsPerbaikan');
        restoreCondition1('JasaRenovasiPerbaikanFasilitas');
        restoreCondition1('JasaRenovasiPerbaikanTempatIbadah');

		   removeCondition1('JasaRenovasiPerbaikanPerawatanPerbaikanBangunan');
	   restoreCondition1('JasaRenovasiPerbaikanSub');
          // hapus elemen id DIV Lain
	removeCondition1('ProdukInFur');
        removeCondition1('MaterialKons');
	removeCondition1('ProdukKons');
        //removeCondition1('ProdukKonsSaluran');
        //removeCondition1('ProdukKonsPembatas');
        removeCondition1('JasaKonsPembatas');
        removeCondition1('JasaKonsJalanPerkerasan');
        removeCondition1('JasaKonsPondasiTanah');
	removeCondition1('JasaKons');
	removeCondition1('JasaKonsSub');
	removeCondition1('MenuKons');
	removeCondition1('JasaKonsFinishing');
        removeCondition1('JasaKonsStruktur');
	
       // hapus elemen JasaPerbaikanKons Lain
        		   removeCondition1('JasaPerbaikanElemenArsitekturalBangunan');
	   removeCondition1('JasaPerbaikanAtapDrainaseBangunan');
	   removeCondition1('JasaPerbaikanKebocoranWaterproofing');
        removeCondition1('JasaRenovasiPerbaikanStruktur');
	
        removeCondition1('JasaRenovasiPerbaikanInfrastruktur');
         removeCondition1('JasaRenovasiPerbaikanBangunan');
	 removeCondition1('JasaRenovasiPerbaikanInterior');
	removeCondition1('JasaRenovasiPerbaikanFasad');
      
	// hapus elemen id Semua Sub JasaRenovasiPerbaikanFasilitas
        removeCondition1('JasaRenovasiPerbaikanStadionOlahraga');
        removeCondition1('JasaRenovasiPerbaikanSekolah');
        removeCondition1('JasaRenovasiPerbaikanRumahSakit');
        removeCondition1('JasaRenovasiPerbaikanTamanKota');
        removeCondition1('JasaRenovasiPerbaikanTerminal');
        removeCondition1('JasaRenovasiPerbaikanHalte');
        //removeCondition1('');
	   
      // hapus elemen id Semua Sub JasaRenovasiPerbaikanStruktur
	removeCondition1('JasaPerbaikanStrukturBeton');
					removeCondition1('JasaPerbaikanGedungBertingkat');
			removeCondition1('JasaPerbaikanStrukturBangunanTua');
			removeCondition1('JasaPerbaikanStrukturBangunanMiring');
	
        removeCondition1('JasaRenovasiPerbaikanStrukturKolomBalok');
        removeCondition1('JasaRenovasiPerbaikanStrukturPondasi');
        removeCondition1('JasaRenovasiPerbaikanStrukturLantai');
	removeCondition1('JasaRenovasiPerbaikanStrukturDinding');
	removeCondition1('JasaRenovasiPerbaikanStrukturAtap');
	removeCondition1('JasaRenovasiPerbaikanRehabilitasiBeton');
       
        // hapus elemen id Semua Sub JasaRenovasiPerbaikanInfrastruktur
        removeCondition1('JasaRenovasiPerbaikanInfrastrukturJalan');
        removeCondition1('JasaRenovasiPerbaikanInfrastrukturJembatan');
        removeCondition1('JasaRenovasiPerbaikanInfrastrukturSaluran');
        removeCondition1('JasaRenovasiPerbaikanInfrastrukturTrotoar');

	// hapus elemen id Semua Sub JasaRenovasiPerbaikanBangunan
        removeCondition1('JasaRenovasiPerbaikanBangunanRumah');
        removeCondition1('JasaRenovasiPerbaikanBangunanKantor');
        removeCondition1('JasaRenovasiPerbaikanBangunanPabrik');
        removeCondition1('JasaRenovasiPerbaikanBangunanGedung');
        removeCondition1('JasaRenovasiPerbaikanBangunanGudang');
        removeCondition1('JasaRenovasiPerbaikanBangunanHotel');

	 // hapus elemen id Semua Sub JasaRenovasiPerbaikanInterior
        removeCondition1('JasaRenovasiInteriorRumah');
        removeCondition1('JasaRenovasiInteriorKantor');
        removeCondition1('JasaRenovasiInteriorApartemen');
        removeCondition1('JasaRenovasiInteriorHotel');
        removeCondition1('JasaRenovasiInteriorToko');
        removeCondition1('JasaRenovasiInteriorCustom');
        removeCondition1('JasaRenovasiInteriorRuangan');
	   
       // hapus elemen id Semua Sub JasaRenovasiPerbaikanFasadEksterior
        removeCondition1('JasaRenovasiFasadBangunan');
        removeCondition1('JasaRenovasiEksteriorBangunan');
        removeCondition1('JasaPerbaikanArsitekturEksterior');
	

        JasaKonstruksiPerbaikanLinkSub.style.visibility = 'visible';
        JasaRenovasiPerbaikanLinkSub.style.visibility = 'visible';
        JasaRenovasiPerbaikanFasilitasLink.style.visibility = 'visible';
	   
        JasaRenovasiPerbaikanTempatIbadahLink.style.visibility = 'visible';
        pageNameKonstruksiPerbaikan1.textContent = urlMappingPerbaikanFasilitasIbadah[cleanUrlJasaPerbaikanKonsSub];
    }
  // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingPerbaikanFasilitasIbadah[cleanUrlJasaPerbaikanKonsSub]) {
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
	      "name": "Jasa Renovasi Fasilitas Umum",
	      "item": "https://www.betonjayareadymix.com/p/jasa-renovasi-fasilitas-umum.html"
	    },
	     {
	      "@type": "ListItem",
	      "position": 5,
	      "name": "Jasa Renovasi Tempat Ibadah",
	      "item": "https://www.betonjayareadymix.com/p/jasa-renovasi-tempat-ibadah.html"
	    },
	   {
	    "@type": "ListItem",
	     "position": 6,
	      "name": urlMappingPerbaikanFasilitasIbadah[cleanUrlJasaPerbaikanKonsSub],
	      "item": cleanUrlJasaPerbaikanKonsSub
	   }
	  ]
	};
	       const script = document.createElement('script');
	       script.type = 'application/ld+json';
	       script.text = JSON.stringify(jsonLDBreadcrumb);
	       document.head.appendChild(script);
     }

if (urlMappingPerbaikanFasilitasUmumTerminal[cleanUrlJasaPerbaikanKonsSub]) {
        restoreCondition1('JasaKonsPerbaikan');
        restoreCondition1('JasaRenovasiPerbaikanFasilitas');
        restoreCondition1('JasaRenovasiPerbaikanTerminal');

	 	   removeCondition1('JasaRenovasiPerbaikanPerawatanPerbaikanBangunan');
	   restoreCondition1('JasaRenovasiPerbaikanSub');
          // hapus elemen id DIV Lain
	removeCondition1('ProdukInFur');
        removeCondition1('MaterialKons');
	removeCondition1('ProdukKons');
        //removeCondition1('ProdukKonsSaluran');
        //removeCondition1('ProdukKonsPembatas');
        removeCondition1('JasaKonsPembatas');
        removeCondition1('JasaKonsJalanPerkerasan');
        removeCondition1('JasaKonsPondasiTanah');
	removeCondition1('JasaKons');
	removeCondition1('JasaKonsSub');
	removeCondition1('MenuKons');
	removeCondition1('JasaKonsFinishing');
        removeCondition1('JasaKonsStruktur');
	
       // hapus elemen JasaPerbaikanKons Lain
      		   removeCondition1('JasaPerbaikanElemenArsitekturalBangunan');
	   removeCondition1('JasaPerbaikanAtapDrainaseBangunan');
	   removeCondition1('JasaPerbaikanKebocoranWaterproofing');
        removeCondition1('JasaRenovasiPerbaikanStruktur');
	
        removeCondition1('JasaRenovasiPerbaikanInfrastruktur');
         removeCondition1('JasaRenovasiPerbaikanBangunan');
	 removeCondition1('JasaRenovasiPerbaikanInterior');
	removeCondition1('JasaRenovasiPerbaikanFasad');
      
	// hapus elemen id Semua Sub JasaRenovasiPerbaikanFasilitas
        removeCondition1('JasaRenovasiPerbaikanStadionOlahraga');
        removeCondition1('JasaRenovasiPerbaikanSekolah');
        removeCondition1('JasaRenovasiPerbaikanRumahSakit');
        removeCondition1('JasaRenovasiPerbaikanTempatIbadah');
        removeCondition1('JasaRenovasiPerbaikanTamanKota');
        removeCondition1('JasaRenovasiPerbaikanHalte');
        //removeCondition1('');
	   
      // hapus elemen id Semua Sub JasaRenovasiPerbaikanStruktur
	removeCondition1('JasaPerbaikanStrukturBeton');
					removeCondition1('JasaPerbaikanGedungBertingkat');
			removeCondition1('JasaPerbaikanStrukturBangunanTua');
			removeCondition1('JasaPerbaikanStrukturBangunanMiring');
	
        removeCondition1('JasaRenovasiPerbaikanStrukturKolomBalok');
        removeCondition1('JasaRenovasiPerbaikanStrukturPondasi');
        removeCondition1('JasaRenovasiPerbaikanStrukturLantai');
	removeCondition1('JasaRenovasiPerbaikanStrukturDinding');
	removeCondition1('JasaRenovasiPerbaikanStrukturAtap');
	removeCondition1('JasaRenovasiPerbaikanRehabilitasiBeton');
       
        // hapus elemen id Semua Sub JasaRenovasiPerbaikanInfrastruktur
        removeCondition1('JasaRenovasiPerbaikanInfrastrukturJalan');
        removeCondition1('JasaRenovasiPerbaikanInfrastrukturJembatan');
        removeCondition1('JasaRenovasiPerbaikanInfrastrukturSaluran');
        removeCondition1('JasaRenovasiPerbaikanInfrastrukturTrotoar');

	// hapus elemen id Semua Sub JasaRenovasiPerbaikanBangunan
        removeCondition1('JasaRenovasiPerbaikanBangunanRumah');
        removeCondition1('JasaRenovasiPerbaikanBangunanKantor');
        removeCondition1('JasaRenovasiPerbaikanBangunanPabrik');
        removeCondition1('JasaRenovasiPerbaikanBangunanGedung');
        removeCondition1('JasaRenovasiPerbaikanBangunanGudang');
        removeCondition1('JasaRenovasiPerbaikanBangunanHotel');

	 // hapus elemen id Semua Sub JasaRenovasiPerbaikanInterior
        removeCondition1('JasaRenovasiInteriorRumah');
        removeCondition1('JasaRenovasiInteriorKantor');
        removeCondition1('JasaRenovasiInteriorApartemen');
        removeCondition1('JasaRenovasiInteriorHotel');
        removeCondition1('JasaRenovasiInteriorToko');
        removeCondition1('JasaRenovasiInteriorCustom');
        removeCondition1('JasaRenovasiInteriorRuangan');
	   
       // hapus elemen id Semua Sub JasaRenovasiPerbaikanFasadEksterior
        removeCondition1('JasaRenovasiFasadBangunan');
        removeCondition1('JasaRenovasiEksteriorBangunan');
        removeCondition1('JasaPerbaikanArsitekturEksterior');
	

        JasaKonstruksiPerbaikanLinkSub.style.visibility = 'visible';
        JasaRenovasiPerbaikanLinkSub.style.visibility = 'visible';
        JasaRenovasiPerbaikanFasilitasLink.style.visibility = 'visible';
	   
        JasaRenovasiPerbaikanTerminalLink.style.visibility = 'visible';
        pageNameKonstruksiPerbaikan1.textContent = urlMappingPerbaikanFasilitasUmumTerminal[cleanUrlJasaPerbaikanKonsSub];
    }
  // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingPerbaikanFasilitasUmumTerminal[cleanUrlJasaPerbaikanKonsSub]) {
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
	      "name": "Jasa Renovasi Fasilitas Umum",
	      "item": "https://www.betonjayareadymix.com/p/jasa-renovasi-fasilitas-umum.html"
	    },
	     {
	      "@type": "ListItem",
	      "position": 5,
	      "name": "Jasa Renovasi Terminal",
	      "item": "https://www.betonjayareadymix.com/p/jasa-renovasi-terminal.html"
	    },
	   {
	    "@type": "ListItem",
	     "position": 6,
	      "name": urlMappingPerbaikanFasilitasUmumTerminal[cleanUrlJasaPerbaikanKonsSub],
	      "item": cleanUrlJasaPerbaikanKonsSub
	   }
	  ]
	};
	       const script = document.createElement('script');
	       script.type = 'application/ld+json';
	       script.text = JSON.stringify(jsonLDBreadcrumb);
	       document.head.appendChild(script);
     }
if (urlMappingPerbaikanFasilitasUmumHalte[cleanUrlJasaPerbaikanKonsSub]) {
        restoreCondition1('JasaKonsPerbaikan');
        restoreCondition1('JasaRenovasiPerbaikanFasilitas');
        restoreCondition1('JasaRenovasiPerbaikanHalte');

		   removeCondition1('JasaRenovasiPerbaikanPerawatanPerbaikanBangunan');
	   restoreCondition1('JasaRenovasiPerbaikanSub');
          // hapus elemen id DIV Lain
	removeCondition1('ProdukInFur');
        removeCondition1('MaterialKons');
	removeCondition1('ProdukKons');
        //removeCondition1('ProdukKonsSaluran');
        //removeCondition1('ProdukKonsPembatas');
        removeCondition1('JasaKonsPembatas');
        removeCondition1('JasaKonsJalanPerkerasan');
        removeCondition1('JasaKonsPondasiTanah');
	removeCondition1('JasaKons');
	removeCondition1('JasaKonsSub');
	removeCondition1('MenuKons');
	removeCondition1('JasaKonsFinishing');
        removeCondition1('JasaKonsStruktur');
	
       // hapus elemen JasaPerbaikanKons Lain
        		   removeCondition1('JasaPerbaikanElemenArsitekturalBangunan');
	   removeCondition1('JasaPerbaikanAtapDrainaseBangunan');
	   removeCondition1('JasaPerbaikanKebocoranWaterproofing');
        removeCondition1('JasaRenovasiPerbaikanStruktur');
	
        removeCondition1('JasaRenovasiPerbaikanInfrastruktur');
         removeCondition1('JasaRenovasiPerbaikanBangunan');
	 removeCondition1('JasaRenovasiPerbaikanInterior');
	removeCondition1('JasaRenovasiPerbaikanFasad');
      
	// hapus elemen id Semua Sub JasaRenovasiPerbaikanFasilitas
        removeCondition1('JasaRenovasiPerbaikanStadionOlahraga');
        removeCondition1('JasaRenovasiPerbaikanSekolah');
        removeCondition1('JasaRenovasiPerbaikanRumahSakit');
        removeCondition1('JasaRenovasiPerbaikanTempatIbadah');
        removeCondition1('JasaRenovasiPerbaikanTerminal');
        removeCondition1('JasaRenovasiPerbaikanTamanKota');
        //removeCondition1('');
	   
      // hapus elemen id Semua Sub JasaRenovasiPerbaikanStruktur
	removeCondition1('JasaPerbaikanStrukturBeton');
					removeCondition1('JasaPerbaikanGedungBertingkat');
			removeCondition1('JasaPerbaikanStrukturBangunanTua');
			removeCondition1('JasaPerbaikanStrukturBangunanMiring');
	
        removeCondition1('JasaRenovasiPerbaikanStrukturKolomBalok');
        removeCondition1('JasaRenovasiPerbaikanStrukturPondasi');
        removeCondition1('JasaRenovasiPerbaikanStrukturLantai');
	removeCondition1('JasaRenovasiPerbaikanStrukturDinding');
	removeCondition1('JasaRenovasiPerbaikanStrukturAtap');
	removeCondition1('JasaRenovasiPerbaikanRehabilitasiBeton');
       
        // hapus elemen id Semua Sub JasaRenovasiPerbaikanInfrastruktur
        removeCondition1('JasaRenovasiPerbaikanInfrastrukturJalan');
        removeCondition1('JasaRenovasiPerbaikanInfrastrukturJembatan');
        removeCondition1('JasaRenovasiPerbaikanInfrastrukturSaluran');
        removeCondition1('JasaRenovasiPerbaikanInfrastrukturTrotoar');

	// hapus elemen id Semua Sub JasaRenovasiPerbaikanBangunan
        removeCondition1('JasaRenovasiPerbaikanBangunanRumah');
        removeCondition1('JasaRenovasiPerbaikanBangunanKantor');
        removeCondition1('JasaRenovasiPerbaikanBangunanPabrik');
        removeCondition1('JasaRenovasiPerbaikanBangunanGedung');
        removeCondition1('JasaRenovasiPerbaikanBangunanGudang');
        removeCondition1('JasaRenovasiPerbaikanBangunanHotel');

	 // hapus elemen id Semua Sub JasaRenovasiPerbaikanInterior
        removeCondition1('JasaRenovasiInteriorRumah');
        removeCondition1('JasaRenovasiInteriorKantor');
        removeCondition1('JasaRenovasiInteriorApartemen');
        removeCondition1('JasaRenovasiInteriorHotel');
        removeCondition1('JasaRenovasiInteriorToko');
        removeCondition1('JasaRenovasiInteriorCustom');
        removeCondition1('JasaRenovasiInteriorRuangan');
	   
       // hapus elemen id Semua Sub JasaRenovasiPerbaikanFasadEksterior
        removeCondition1('JasaRenovasiFasadBangunan');
        removeCondition1('JasaRenovasiEksteriorBangunan');
        removeCondition1('JasaPerbaikanArsitekturEksterior');
	

        JasaKonstruksiPerbaikanLinkSub.style.visibility = 'visible';
        JasaRenovasiPerbaikanLinkSub.style.visibility = 'visible';
        JasaRenovasiPerbaikanFasilitasLink.style.visibility = 'visible';
	   
        JasaRenovasiPerbaikanHalteLink.style.visibility = 'visible';
        pageNameKonstruksiPerbaikan1.textContent = urlMappingPerbaikanFasilitasUmumHalte[cleanUrlJasaPerbaikanKonsSub];
    }
  // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingPerbaikanFasilitasUmumHalte[cleanUrlJasaPerbaikanKonsSub]) {
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
	      "name": "Jasa Renovasi Fasilitas Umum",
	      "item": "https://www.betonjayareadymix.com/p/jasa-renovasi-fasilitas-umum.html"
	    },
	     {
	      "@type": "ListItem",
	      "position": 5,
	      "name": "Jasa Renovasi Halter",
	      "item": "https://www.betonjayareadymix.com/p/jasa-renovasi-halte.html"
	    },
	   {
	    "@type": "ListItem",
	     "position": 6,
	      "name": urlMappingPerbaikanFasilitasUmumHalte[cleanUrlJasaPerbaikanKonsSub],
	      "item": cleanUrlJasaPerbaikanKonsSub
	   }
	  ]
	};
	       const script = document.createElement('script');
	       script.type = 'application/ld+json';
	       script.text = JSON.stringify(jsonLDBreadcrumb);
	       document.head.appendChild(script);
     }
// SUB JASA RENOVASI PERBAIKAN BANGUNAN
if (urlMappingRenovasiBangunanRumah[cleanUrlJasaPerbaikanKonsSub]) {
        restoreCondition1('JasaKonsPerbaikan');
        restoreCondition1('JasaRenovasiPerbaikanFasilitas');
        restoreCondition1('JasaRenovasiPerbaikanHalte');

	   	   removeCondition1('JasaRenovasiPerbaikanPerawatanPerbaikanBangunan');
	   restoreCondition1('JasaRenovasiPerbaikanSub');
          // hapus elemen id DIV Lain
	removeCondition1('ProdukInFur');
        removeCondition1('MaterialKons');
	removeCondition1('ProdukKons');
        //removeCondition1('ProdukKonsSaluran');
        //removeCondition1('ProdukKonsPembatas');
        removeCondition1('JasaKonsPembatas');
        removeCondition1('JasaKonsJalanPerkerasan');
        removeCondition1('JasaKonsPondasiTanah');
	removeCondition1('JasaKons');
	removeCondition1('JasaKonsSub');
	removeCondition1('MenuKons');
	removeCondition1('JasaKonsFinishing');
        removeCondition1('JasaKonsStruktur');
	
       // hapus elemen JasaPerbaikanKons Lain kecuali JasaRenovasiPerbaikanBangunan
		   removeCondition1('JasaPerbaikanElemenArsitekturalBangunan');
	   removeCondition1('JasaPerbaikanAtapDrainaseBangunan');
	   removeCondition1('JasaPerbaikanKebocoranWaterproofing');
        removeCondition1('JasaRenovasiPerbaikanStruktur');
	
        removeCondition1('JasaRenovasiPerbaikanInfrastruktur');
        removeCondition1('JasaRenovasiPerbaikanFasilitas');
	 removeCondition1('JasaRenovasiPerbaikanInterior');
	removeCondition1('JasaRenovasiPerbaikanFasad');
      
	// hapus elemen id Semua Sub JasaRenovasiPerbaikanFasilitas
        removeCondition1('JasaRenovasiPerbaikanStadionOlahraga');
        removeCondition1('JasaRenovasiPerbaikanSekolah');
        removeCondition1('JasaRenovasiPerbaikanRumahSakit');
        removeCondition1('JasaRenovasiPerbaikanTempatIbadah');
        removeCondition1('JasaRenovasiPerbaikanTerminal');
        removeCondition1('JasaRenovasiPerbaikanTamanKota');
        removeCondition1('JasaRenovasiPerbaikanHalte');
	   
      // hapus elemen id Semua Sub JasaRenovasiPerbaikanStruktur
	removeCondition1('JasaPerbaikanStrukturBeton');
					removeCondition1('JasaPerbaikanGedungBertingkat');
			removeCondition1('JasaPerbaikanStrukturBangunanTua');
			removeCondition1('JasaPerbaikanStrukturBangunanMiring');
	
        removeCondition1('JasaRenovasiPerbaikanStrukturKolomBalok');
        removeCondition1('JasaRenovasiPerbaikanStrukturPondasi');
        removeCondition1('JasaRenovasiPerbaikanStrukturLantai');
	removeCondition1('JasaRenovasiPerbaikanStrukturDinding');
	removeCondition1('JasaRenovasiPerbaikanStrukturAtap');
	removeCondition1('JasaRenovasiPerbaikanRehabilitasiBeton');
       
        // hapus elemen id Semua Sub JasaRenovasiPerbaikanInfrastruktur
        removeCondition1('JasaRenovasiPerbaikanInfrastrukturJalan');
        removeCondition1('JasaRenovasiPerbaikanInfrastrukturJembatan');
        removeCondition1('JasaRenovasiPerbaikanInfrastrukturSaluran');
        removeCondition1('JasaRenovasiPerbaikanInfrastrukturTrotoar');

	// hapus elemen id Semua Sub JasaRenovasiPerbaikanBangunan KECUALI JasaRenovasiPerbaikanBangunanRumah
        //removeCondition1('');
        removeCondition1('JasaRenovasiPerbaikanBangunanKantor');
        removeCondition1('JasaRenovasiPerbaikanBangunanPabrik');
        removeCondition1('JasaRenovasiPerbaikanBangunanGedung');
        removeCondition1('JasaRenovasiPerbaikanBangunanGudang');
        removeCondition1('JasaRenovasiPerbaikanBangunanHotel');

	 // hapus elemen id Semua Sub JasaRenovasiPerbaikanInterior
        removeCondition1('JasaRenovasiInteriorRumah');
        removeCondition1('JasaRenovasiInteriorKantor');
        removeCondition1('JasaRenovasiInteriorApartemen');
        removeCondition1('JasaRenovasiInteriorHotel');
        removeCondition1('JasaRenovasiInteriorToko');
        removeCondition1('JasaRenovasiInteriorCustom');
        removeCondition1('JasaRenovasiInteriorRuangan');
	   
       // hapus elemen id Semua Sub JasaRenovasiPerbaikanFasadEksterior
        removeCondition1('JasaRenovasiFasadBangunan');
        removeCondition1('JasaRenovasiEksteriorBangunan');
        removeCondition1('JasaPerbaikanArsitekturEksterior');
	

        JasaKonstruksiPerbaikanLinkSub.style.visibility = 'visible';
        JasaRenovasiPerbaikanLinkSub.style.visibility = 'visible';
        //removeCondition1('JasaRenovasiPerbaikanFasilitas');
        JasaRenovasiPerbaikanBangunanLink.style.visibility = 'visible';
	   
        JasaRenovasiPerbaikanBangunanRumahLink.style.visibility = 'visible';
        pageNameKonstruksiPerbaikan1.textContent = urlMappingRenovasiBangunanRumah[cleanUrlJasaPerbaikanKonsSub];
    }
    // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingRenovasiBangunanRumah[cleanUrlJasaPerbaikanKonsSub]) {
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
	      "name": "Jasa Renovasi Bangunan",
	      "item": "https://betonjayareadymix.com/p/jasa-renovasi-bangunan.html"
	    },
	     {
	      "@type": "ListItem",
	      "position": 5,
	      "name": "Jasa Renovasi Rumah",
	      "item": "https://www.betonjayareadymix.com/p/jasa-renovasi-rumah.html"
	    },
	   {
	    "@type": "ListItem",
	     "position": 6,
	      "name": urlMappingRenovasiBangunanRumah[cleanUrlJasaPerbaikanKonsSub],
	      "item": cleanUrlJasaPerbaikanKonsSub
	   }
	  ]
	};
	       const script = document.createElement('script');
	       script.type = 'application/ld+json';
	       script.text = JSON.stringify(jsonLDBreadcrumb);
	       document.head.appendChild(script);
     }
  }
	
   });
