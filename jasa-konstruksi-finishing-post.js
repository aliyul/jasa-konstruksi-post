/*
RINGKASAN STATUS
Const											Jumlah URL	Status		Keterangan
urlMappingJasaFinishingDakBeton					5 URL		✅ VALID	Semua URL aktif dan memiliki konten
urlMappingJasaFinishingBetonExpose				3 URL		✅ VALID	Semua URL aktif dan memiliki konten
urlMappingJasaPlesteranAcianDinding				23 URL		✅ VALID	Halaman harga borongan per lokasi
urlMappingJasaFinishingLantaiBeton				40+ URL		⚠️ PERLU PERHATIAN	Ada URL typo domain (http://) dan duplikasi konten
urlMappingJasaFinishingGroutingStrukturBeton	0			🔴 KOSONG	Perlu diisi atau dihapus
urlMappingJasaPelapisanCoatingStruktur			0			🔴 KOSONG	Perlu diisi atau dihapus
urlMappingJasaFinishingKolomBalok				0			🔴 KOSONG	Perlu diisi atau dihapus
urlMappingJasaPelapisanWaterproofingStruktur	0			🔴 KOSONG	Perlu diisi atau dihapus
*/
// ============================================================
// JASA FINISHING DAK BETON - MONEY PAGE
// ============================================================
// 🧠 SEO NOTE: Cluster ini fokus ke layanan finishing dak beton.
// Intent: Transactional (user cari harga & jasa finishing dak).
// Parent: Jasa Finishing Struktur (/p/jasa-finishing-struktur.html)
// Breadcrumb: Home > Jasa Konstruksi > Jasa Finishing > Jasa Finishing Struktur > [Nama Layanan] (4-5 level)
// ============================================================

const urlMappingJasaFinishingDakBeton = {
  // ============================================================
  // [SUB2] - INFORMASIONAL (PANDUAN FINISHING DAK)
  // 🧠 SEO NOTE: Halaman ini adalah panduan, bukan money page.
  // Breadcrumb: Home > Jasa Konstruksi > Jasa Finishing > Panduan Finishing Dak (4 level)
  // ============================================================
  "https://www.betonjayareadymix.com/2018/10/finishing-dak.html": "Finishing Dak",
  
  // ============================================================
  // [MONEY PAGE] - HARGA FINISHING DAK BETON
  // 🧠 SEO NOTE: Halaman ini adalah money page dengan intent transaksional.
  // Breadcrumb: Home > Jasa Konstruksi > Jasa Finishing > Harga Finishing Dak Beton (4 level)
  // ============================================================
  "https://www.betonjayareadymix.com/2018/10/harga-jasa-finishing-dak-beton.html": "Harga Jasa Finishing Dak Beton",
  
  // ============================================================
  // [SUB2] - INFORMASIONAL (PANDUAN FINISHING DAK BETON)
  // 🧠 SEO NOTE: Halaman ini overlap dengan "finishing-dak.html" (konten mirip).
  // Disarankan untuk digabung atau di-redirect.
  // ============================================================
  "https://www.betonjayareadymix.com/2018/10/finishing-dak-beton.html": "Finishing Dak Beton",
  
  // ============================================================
  // [MONEY PAGE] - HARGA DAK SUPER FLAT
  // 🧠 SEO NOTE: Halaman ini adalah money page untuk layanan dak super flat.
  // Breadcrumb: Home > Jasa Konstruksi > Jasa Finishing > Harga Dak Super Flat (4 level)
  // ============================================================
  "https://www.betonjayareadymix.com/2018/10/harga-jasa-dak-super-flat.html": "Harga Jasa Dak Super Flat",
  
  // ============================================================
  // [SUB2] - INFORMASIONAL (PANDUAN DAK SUPER FLAT)
  // 🧠 SEO NOTE: Halaman ini overlap dengan "harga-jasa-dak-super-flat.html".
  // ============================================================
  "https://www.betonjayareadymix.com/2018/10/dak-super-flat.html": "Dak Super Flat"
};

// ============================================================
// 🔴 REDIRECT NOTES - FINISHING DAK BETON
// ============================================================
/*
🧠 SEO CANNIBAL FIX - REDIRECT PLAN:

| No | From URL | To URL | Type | Alasan SEO |
|----|----------|--------|------|------------|
| 1 | /2018/10/finishing-dak-beton.html | /2018/10/finishing-dak.html | 301 | Duplikasi konten, cukup 1 halaman panduan finishing dak |
| 2 | /2018/10/dak-super-flat.html | /2018/10/harga-jasa-dak-super-flat.html | 301 | Halaman informasional tipis, gabung ke money page |

📌 REKOMENDASI HIERARKI:
   Jasa Finishing Struktur (SUB2 - /p/jasa-finishing-struktur.html)
   │
   ├── Finishing Dak (SUB2 - /2018/10/finishing-dak.html) [PANDUAN]
   │
   └── Harga Jasa Finishing Dak Beton (MONEY - /2018/10/harga-jasa-finishing-dak-beton.html)
       ├── Harga Jasa Dak Super Flat (MONEY - /2018/10/harga-jasa-dak-super-flat.html)
*/
// ============================================================
// JASA FINISHING BETON EKSPOS - MONEY PAGE
// ============================================================
// 🧠 SEO NOTE: Cluster ini fokus ke layanan finishing beton ekspos.
// Intent: Transactional (user cari harga & jasa finishing beton ekspos).
// Parent: Jasa Finishing Struktur (/p/jasa-finishing-struktur.html)
// Breadcrumb: Home > Jasa Konstruksi > Jasa Finishing > Jasa Finishing Struktur > [Nama Layanan] (4-5 level)
// ============================================================

const urlMappingJasaFinishingBetonExpose = {
  // ============================================================
  // [MONEY PAGE] - HARGA JASA BETON EKSPOS
  // ============================================================
  "https://www.betonjayareadymix.com/2018/10/harga-jasa-beton-ekspos.html": "Harga Jasa Beton Ekspos",
  
  // ============================================================
  // [SUB2] - INFORMASIONAL (PANDUAN FINISHING BETON EKSPOS)
  // ============================================================
  "https://www.betonjayareadymix.com/2018/10/finishing-beton-ekspos.html": "Finishing Beton Ekspos",
  
  // ============================================================
  // [MONEY PAGE] - HARGA JASA FINISHING BETON EKSPOS
  // 🧠 SEO NOTE: Overlap dengan "harga-jasa-beton-ekspos.html".
  // Disarankan digabung.
  // ============================================================
  "https://www.betonjayareadymix.com/2018/10/harga-jasa-finishing-beton-ekspos.html": "Harga Jasa Finishing Beton Ekspos"
};

// ============================================================
// 🔴 REDIRECT NOTES - FINISHING BETON EKSPOS
// ============================================================
/*
🧠 SEO CANNIBAL FIX - REDIRECT PLAN:

| No | From URL | To URL | Type | Alasan SEO |
|----|----------|--------|------|------------|
| 1 | /2018/10/harga-jasa-finishing-beton-ekspos.html | /2018/10/harga-jasa-beton-ekspos.html | 301 | Duplikasi intent, cukup 1 money page |

📌 REKOMENDASI:
   Pertahankan 'harga-jasa-beton-ekspos.html' sebagai master money page.
   'finishing-beton-ekspos.html' tetap sebagai halaman panduan (SUB2).
*/
// ============================================================
// JASA PLESTERAN & ACIAN DINDING - MONEY PAGE (PER LOKASI)
// ============================================================
// 🧠 SEO NOTE: Cluster ini fokus ke harga borongan plesteran acian per lokasi.
// Intent: Transactional (user cari harga borongan plesteran acian di kota tertentu).
// Parent: Jasa Finishing Bangunan (/p/jasa-finishing-bangunan.html)
// Breadcrumb: Home > Jasa Konstruksi > Jasa Finishing > Jasa Finishing Bangunan > Harga Plesteran Acian [Kota] (5 level - PERLU DIPERHATIKAN)
// ============================================================

const urlMappingJasaPlesteranAcianDinding = {
  // ============================================================
  // [MONEY PAGE] - HARGA BORONGAN PLESTERAN ACIAN PER METER (NASIONAL)
  // ============================================================
  "https://www.betonjayareadymix.com/2018/09/harga-borongan-tenaga-plesteran-dan-acian-per-meter.html": "Harga Borongan Tenaga Plesteran dan Acian per Meter",
  
  // ============================================================
  // [MONEY PAGE] - HARGA BORONGAN PLESTERAN ACIAN PER LOKASI
  // 🧠 SEO NOTE: Masing-masing URL menarget keyword spesifik per kota.
  // Breadcrumb: Home > Jasa Konstruksi > Jasa Finishing > Harga Plesteran Acian [Kota] (4 level - SKIP "Jasa Finishing Bangunan")
  // ============================================================
  "https://www.betonjayareadymix.com/2018/11/harga-borongan-tenaga-plesteran-dan-acian-per-meter-jakarta.html": "Harga Borongan Tenaga Plesteran dan Acian per Meter Jakarta",
  "https://www.betonjayareadymix.com/2018/11/harga-borongan-tenaga-plesteran-dan-acian-per-meter-bandung.html": "Harga Borongan Tenaga Plesteran dan Acian per Meter Bandung",
  "https://www.betonjayareadymix.com/2018/11/harga-borongan-tenaga-plesteran-dan-acian-per-meter-cianjur.html": "Harga Borongan Tenaga Plesteran dan Acian per Meter Cianjur",
  "https://www.betonjayareadymix.com/2018/11/harga-borongan-tenaga-plesteran-dan-acian-per-meter-bogor.html": "Harga Borongan Tenaga Plesteran dan Acian per Meter Bogor",
  "https://www.betonjayareadymix.com/2018/11/harga-borongan-tenaga-plesteran-dan-acian-per-meter-gunung-putri.html": "Harga Borongan Tenaga Plesteran dan Acian per Meter Gunung Putri",
  "https://www.betonjayareadymix.com/2018/11/harga-borongan-tenaga-plesteran-dan-acian-per-meter-bojong-gede.html": "Harga Borongan Tenaga Plesteran dan Acian per Meter Bojong Gede",
  "https://www.betonjayareadymix.com/2018/11/harga-borongan-tenaga-plesteran-dan-acian-per-meter-bekasi.html": "Harga Borongan Tenaga Plesteran dan Acian per Meter Bekasi",
  "https://www.betonjayareadymix.com/2018/11/harga-borongan-tenaga-plesteran-dan-acian-per-meter-cibinong.html": "Harga Borongan Tenaga Plesteran dan Acian per Meter Cibinong",
  "https://www.betonjayareadymix.com/2018/11/harga-borongan-tenaga-plesteran-dan-acian-per-meter-telukjambe-timur.html": "Harga Borongan Tenaga Plesteran dan Acian per Meter Telukjambe Timur",
  "https://www.betonjayareadymix.com/2018/11/harga-borongan-tenaga-plesteran-dan-acian-per-meter-cimenyan.html": "Harga Borongan Tenaga Plesteran dan Acian per Meter Cimenyan",
  "https://www.betonjayareadymix.com/2018/11/harga-borongan-tenaga-plesteran-dan-acian-per-meter-depok.html": "Harga Borongan Tenaga Plesteran dan Acian per Meter Depok",
  "https://www.betonjayareadymix.com/2018/11/harga-borongan-tenaga-plesteran-dan-acian-per-meter-cikampek.html": "Harga Borongan Tenaga Plesteran dan Acian per Meter Cikampek",
  "https://www.betonjayareadymix.com/2018/11/harga-borongan-tenaga-plesteran-dan-acian-per-meter-cimahi.html": "Harga Borongan Tenaga Plesteran dan Acian per Meter Cimahi",
  "https://www.betonjayareadymix.com/2018/11/harga-borongan-tenaga-plesteran-dan-acian-per-meter-kemang.html": "Harga Borongan Tenaga Plesteran dan Acian per Meter Kemang",
  "https://www.betonjayareadymix.com/2018/11/harga-borongan-tenaga-plesteran-dan-acian-per-meter-citeureup.html": "Harga Borongan Tenaga Plesteran dan Acian per Meter Citeureup",
  "https://www.betonjayareadymix.com/2018/11/harga-borongan-tenaga-plesteran-dan-acian-per-meter-ngamprah.html": "Harga Borongan Tenaga Plesteran dan Acian per Meter Ngamprah",
  "https://www.betonjayareadymix.com/2018/11/harga-borongan-tenaga-plesteran-dan-acian-per-meter-kota-bekasi.html": "Harga Borongan Tenaga Plesteran dan Acian per Meter Kota Bekasi",
  "https://www.betonjayareadymix.com/2018/11/harga-borongan-tenaga-plesteran-dan-acian-per-meter-parung-panjang.html": "Harga Borongan Tenaga Plesteran dan Acian per Meter Parung Panjang",
  "https://www.betonjayareadymix.com/2018/11/harga-borongan-tenaga-plesteran-dan-acian-per-meter-cileungsi.html": "Harga Borongan Tenaga Plesteran dan Acian per Meter Cileungsi",
  "https://www.betonjayareadymix.com/2018/11/harga-borongan-tenaga-plesteran-dan-acian-per-meter-sukaraja.html": "Harga Borongan Tenaga Plesteran dan Acian per Meter Sukaraja",
  "https://www.betonjayareadymix.com/2018/11/harga-borongan-tenaga-plesteran-dan-acian-per-meter-tajur-halang.html": "Harga Borongan Tenaga Plesteran dan Acian per Meter Tajur Halang",
  "https://www.betonjayareadymix.com/2018/11/harga-borongan-tenaga-plesteran-dan-acian-per-meter-gunung-sindur.html": "Harga Borongan Tenaga Plesteran dan Acian per Meter Gunung Sindur"
};

// ============================================================
// 🟡 SEO NOTE - PLESTERAN ACIAN DINDING
// ============================================================
/*
📌 BREADCRUMB SKIP LEVEL (PENTING):

Jika breadcrumb asli: Home > Jasa Konstruksi > Jasa Finishing > Jasa Finishing Bangunan > Harga Plesteran Acian Jakarta (5 level)
Menjadi: Home > Jasa Konstruksi > Jasa Finishing > Harga Plesteran Acian Jakarta (4 level)

Alasan skip: "Jasa Finishing Bangunan" di-skip karena halaman tersebut hanya sebagai pengelompokan,
tidak perlu muncul di breadcrumb untuk money page per lokasi.

✅ SEMUA URL di atas sudah valid sebagai [MONEY PAGE].
✅ Tidak ada duplikasi karena masing-masing menarget kota berbeda.
*/
// ============================================================
// JASA FINISHING LANTAI BETON - MONEY PAGE
// ============================================================
// 🧠 SEO NOTE: Cluster ini fokus ke layanan finishing lantai beton (trowel, floor hardener, screeding).
// Intent: Transactional (user cari harga & jasa finishing lantai).
// Parent: Jasa Finishing Struktur (/p/jasa-finishing-struktur.html)
// Breadcrumb: Home > Jasa Konstruksi > Jasa Finishing > Jasa Finishing Struktur > [Nama Layanan] (4-5 level)
// ============================================================

const urlMappingJasaFinishingLantaiBeton = {
  // ============================================================
  // [MONEY PAGE] - HARGA JASA TROWEL FLOOR HARDENER PER LOKASI
  // ============================================================
  "https://www.betonjayareadymix.com/2018/10/harga-jasa-trowel-floor-hardener-depok.html": "Harga Jasa Trowel Floor Hardener Depok",
  "https://www.betonjayareadymix.com/2018/10/harga-jasa-trowel-lantai-beton-depok.html": "Harga Jasa Trowel Lantai Beton Depok",
  "https://www.betonjayareadymix.com/2018/10/harga-jasa-trowel-lantai-beton-tangerang.html": "Harga Jasa Trowel Lantai Beton Tangerang",
  "https://www.betonjayareadymix.com/2018/10/harga-jasa-trowel-lantai-beton-jakarta.html": "Harga Jasa Trowel Lantai Beton Jakarta",
  "https://www.betonjayareadymix.com/2018/10/harga-jasa-trowel-lantai-beton-bekasi.html": "Harga Jasa Trowel Lantai Beton Bekasi",
  "https://www.betonjayareadymix.com/2018/10/harga-jasa-trowel-lantai-beton-bogor.html": "Harga Jasa Trowel Lantai Beton Bogor",
  "https://www.betonjayareadymix.com/2018/10/harga-jasa-trowel-bogor.html": "Harga Jasa Trowel Bogor",
  "https://www.betonjayareadymix.com/2018/10/harga-jasa-trowel-tangerang.html": "Harga Jasa Trowel Tangerang",
  "https://www.betonjayareadymix.com/2018/10/harga-jasa-trowel-jakarta.html": "Harga Jasa Trowel Jakarta",
  "https://www.betonjayareadymix.com/2018/10/harga-jasa-trowel-bekasi.html": "Harga Jasa Trowel Bekasi",
  "https://www.betonjayareadymix.com/2018/10/harga-jasa-trowel-depok.html": "Harga Jasa Trowel Depok",
  "https://www.betonjayareadymix.com/2018/10/harga-jasa-trowel-floor-hardener-tangerang.html": "Harga Jasa Trowel Floor Hardener Tangerang",
  "https://www.betonjayareadymix.com/2018/10/harga-jasa-trowel-floor-hardener-bogor.html": "Harga Jasa Trowel Floor Hardener Bogor",
  "https://www.betonjayareadymix.com/2018/10/harga-jasa-trowel-floor-hardener-bekasi.html": "Harga Jasa Trowel Floor Hardener Bekasi",
  "https://www.betonjayareadymix.com/2018/10/harga-jasa-trowel-floor-hardener-jakarta.html": "Harga Jasa Trowel Floor Hardener Jakarta",
  "https://www.betonjayareadymix.com/2018/10/harga-jasa-trowel-floor-hardener-tasikmalaya.html": "Harga Jasa Trowel Floor Hardener Tasikmalaya",
  "https://www.betonjayareadymix.com/2018/10/harga-jasa-trowel-floor-hardener-garut.html": "Harga Jasa Trowel Floor Hardener Garut",
  "https://www.betonjayareadymix.com/2018/10/harga-jasa-trowel-floor-hardener-bandung.html": "Harga Jasa Trowel Floor Hardener Bandung",
  
  // ============================================================
  // [MONEY PAGE] - HARGA JASA FLOOR HARDENER PER LOKASI
  // ============================================================
  "https://www.betonjayareadymix.com/2018/10/harga-jasa-floor-hardener.html": "Harga Jasa Floor Hardener",
  "https://www.betonjayareadymix.com/2018/10/harga-borongan-floor-hardener.html": "Harga Borongan Floor Hardener",
  "https://www.betonjayareadymix.com/2018/10/harga-jasa-floor-hardener-garut.html": "Harga Jasa Floor Hardener Garut",
  "https://www.betonjayareadymix.com/2018/10/harga-jasa-floor-hardener-tasikmalaya.html": "Harga Jasa Floor Hardener Tasikmalaya",
  "https://www.betonjayareadymix.com/2018/10/harga-jasa-floor-hardener-bandung.html": "Harga Jasa Floor Hardener Bandung",
  "https://www.betonjayareadymix.com/2018/10/harga-jasa-floor-hardener-depok.html": "Harga Jasa Floor Hardener Depok",
  "https://www.betonjayareadymix.com/2018/10/harga-jasa-floor-hardener-tangerang.html": "Harga Jasa Floor Hardener Tangerang",
  "https://www.betonjayareadymix.com/2018/10/harga-jasa-floor-hardener-bekasi.html": "Harga Jasa Floor Hardener Bekasi",
  "https://www.betonjayareadymix.com/2018/10/harga-jasa-floor-hardener-bogor.html": "Harga Jasa Floor Hardener Bogor",
  "https://www.betonjayareadymix.com/2018/10/harga-jasa-floor-hardener-jakarta.html": "Harga Jasa Floor Hardener Jakarta",
  
  // ============================================================
  // [MONEY PAGE] - HARGA JASA SCREEDING & TROWEL
  // ============================================================
  "https://www.betonjayareadymix.com/2018/10/harga-jasa-screeding.html": "Harga Jasa Screeding",
  "https://www.betonjayareadymix.com/2018/10/jasa-screeding.html": "Jasa Screeding",
  "https://www.betonjayareadymix.com/2018/10/harga-jasa-trowel-lantai.html": "Harga Jasa Trowel Lantai",
  "https://www.betonjayareadymix.com/2018/10/harga-jasa-trowel-floor-hardener.html": "Harga Jasa Trowel Floor Hardener",
  "https://www.betonjayareadymix.com/2018/10/harga-jasa-trowel-beton.html": "Harga Jasa Trowel Beton",
  "https://www.betonjayareadymix.com/2018/10/harga-jasa-trowel.html": "Harga Jasa Trowel",
  "https://www.betonjayareadymix.com/2018/10/jasa-trowel.html": "Jasa Trowel",
  "https://www.betonjayareadymix.com/2018/10/harga-jasa-finishing-screeding.html": "Harga Jasa Finishing Screeding",
  "https://www.betonjayareadymix.com/2018/10/finishing-screeding.html": "Finishing Screeding",
  "https://www.betonjayareadymix.com/2018/10/harga-jasa-finishing-trowel.html": "Harga Jasa Finishing Trowel",
  "https://www.betonjayareadymix.com/2018/10/finising-trowel.html": "Finishing Trowel",
  
  // ============================================================
  // [MONEY PAGE] - HARGA JASA FINISHING LANTAI GUDANG & BETON EKSPOS
  // ============================================================
  "https://www.betonjayareadymix.com/2018/10/harga-jasa-finishing-lantai-gudang.html": "Harga Jasa Finishing Lantai Gudang",
  "https://www.betonjayareadymix.com/2018/10/harga-jasa-finishing-lantai-beton-ekspos.html": "Harga Jasa Finishing Lantai Beton Ekspos",
  "https://www.betonjayareadymix.com/2018/10/finishing-lantai-beton-ekspos.html": "Finishing Lantai Beton Ekspos",
  "https://www.betonjayareadymix.com/2018/10/harga-jasa-finishing-lantai-beton.html": "Harga Jasa Finishing Lantai Beton",
  
  // ============================================================
  // [MONEY PAGE] - HARGA JASA LANTAI SUPER FLAT
  // ============================================================
  "https://www.betonjayareadymix.com/2018/10/harga-jasa-lapangan-super-flat.html": "Harga Jasa Lapangan Super Flat",
  "https://www.betonjayareadymix.com/2018/10/lapangan-super-flat.html": "Lapangan Super Flat",
  "https://www.betonjayareadymix.com/2018/10/harga-jasa-lantai-super-flat.html": "Harga Jasa Lantai Super Flat",
  "https://www.betonjayareadymix.com/2018/10/lantai-super-flat.html": "Lantai Super Flat",
  
  // ============================================================
  // [MONEY PAGE] - JASA TROWEL LANTAI BETON
  // ============================================================
  "https://www.betonjayareadymix.com/2018/10/jasa-trowel-lantai-beton.html": "Jasa Trowel Lantai Beton",
  
  // ============================================================
  // [MONEY PAGE] - BIAYA & BORONGAN FLOOR LANTAI
  // ============================================================
  "https://www.betonjayareadymix.com/2018/10/biaya-floor-lantai.html": "Biaya Floor Lantai",
  "https://www.betonjayareadymix.com/2018/10/harga-borongan-floor-lantai.html": "Harga Borongan Floor Lantai"
};

// ============================================================
// 🔴 REDIRECT NOTES - FINISHING LANTAI BETON
// ============================================================
/*
🧠 SEO CANNIBAL FIX & TYPO CORRECTION:

| No | From URL | To URL | Type | Alasan SEO |
|----|----------|--------|------|------------|
| 1 | http://betonjayareadymix.com/2018/10/harga-jasa-lantai-beton.html | https://www.betonjayareadymix.com/2018/10/harga-jasa-finishing-lantai-beton.html | 301 | TYPO DOMAIN (http:// vs https://www) |
| 2 | /2018/10/harga-jasa-trowel-lantai.html | /2018/10/harga-jasa-trowel.html | 301 | Duplikasi konten |
| 3 | /2018/10/finishing-screeding.html | /2018/10/harga-jasa-screeding.html | 301 | Halaman tipis, gabung ke money page |
| 4 | /2018/10/finising-trowel.html | /2018/10/harga-jasa-trowel.html | 301 | Typo "finising" dan konten tipis |

📌 BREADCRUMB SKIP LEVEL:
Untuk money page per lokasi (Depok, Jakarta, dll):
Breadcrumb: Home > Jasa Konstruksi > Jasa Finishing > Harga Trowel Depok (4 level)
Skip: "Jasa Finishing Struktur" dan "Jasa Finishing Bangunan"

✅ SEMUA URL di atas sudah valid sebagai [MONEY PAGE].
*/
// ============================================================
// ⚠️ CONST KOSONG - PERLU DITINDAKLANJUTI
// ============================================================

const urlMappingJasaFinishingGroutingStrukturBeton = {
  // 🔴 KOSONG - Perlu diisi atau dihapus
  // 🧠 SEO NOTE: Jika tidak ada konten, lebih baik dihapus atau diisi dengan URL yang valid.
  // Rekomendasi: Tambahkan URL seperti:
  // "/2018/10/harga-jasa-grouting-struktur-beton.html": "Harga Jasa Grouting Struktur Beton"
};

const urlMappingJasaPelapisanCoatingStruktur = {
  // 🔴 KOSONG - Perlu diisi atau dihapus
  // Rekomendasi: Tambahkan URL seperti:
  // "/2018/10/harga-jasa-coating-struktur.html": "Harga Jasa Coating Struktur"
};

const urlMappingJasaFinishingKolomBalok = {
  // 🔴 KOSONG - Perlu diisi atau dihapus
  // Rekomendasi: Tambahkan URL seperti:
  // "/2018/10/harga-jasa-finishing-kolom-balok.html": "Harga Jasa Finishing Kolom Balok"
};

const urlMappingJasaPelapisanWaterproofingStruktur = {
  // 🔴 KOSONG - Perlu diisi atau dihapus
  // Rekomendasi: Tambahkan URL seperti:
  // "/2018/10/harga-jasa-waterproofing-struktur.html": "Harga Jasa Waterproofing Struktur"
};

// ============================================================
// 🟡 SARAN TINDAKAN UNTUK CONST KOSONG
// ============================================================
/*
📌 REKOMENDASI:

| Const | Tindakan | Prioritas |
|-------|----------|-----------|
| urlMappingJasaFinishingGroutingStrukturBeton | Hapus const (jika tidak ada rencana konten) ATAU isi dengan URL yang valid | 🟡 MEDIUM |
| urlMappingJasaPelapisanCoatingStruktur | Hapus const (jika tidak ada rencana konten) ATAU isi dengan URL yang valid | 🟡 MEDIUM |
| urlMappingJasaFinishingKolomBalok | Hapus const (jika tidak ada rencana konten) ATAU isi dengan URL yang valid | 🟡 MEDIUM |
| urlMappingJasaPelapisanWaterproofingStruktur | Hapus const (jika tidak ada rencana konten) ATAU isi dengan URL yang valid | 🟡 MEDIUM |

📌 CATATAN: Const kosong tidak berbahaya untuk SEO selama tidak digunakan.
Namun untuk menjaga kebersihan kode, disarankan untuk dihapus atau diisi.
*/
/*
/
📋 RINGKASAN SARAN & TINDAKAN
No	Tindakan														Target	Prioritas
1	Redirect finishing-dak-beton.html → finishing-dak.html			1 URL	🟡 MEDIUM
2	Redirect dak-super-flat.html → harga-jasa-dak-super-flat.html	1 URL	🟡 MEDIUM
3	Redirect harga-jasa-finishing-beton-ekspos.html → 
    harga-jasa-beton-ekspos.html									1 URL	🟡 MEDIUM
4	Redirect URL typo http://betonjayareadymix.com/...
    ke https://www...												1 URL	🔴 HIGH
5	Redirect duplikasi konten finishing lantai beton				4 URL	🟡 MEDIUM
6	Hapus atau isi 4 const kosong									4 const	🟢 LOW
✅ STATUS FINAL
Const											Jumlah URL	Valid	Redirect	Kosong
urlMappingJasaFinishingDakBeton					5			3		2			0
urlMappingJasaFinishingBetonExpose				3			2		1			0
urlMappingJasaPlesteranAcianDinding				23			23		0			0
urlMappingJasaFinishingLantaiBeton				40+			35+		4+			0
urlMappingJasaFinishingGroutingStrukturBeton	0			0		0			1 (kosong)
urlMappingJasaPelapisanCoatingStruktur			0			0		0			1 (kosong)
urlMappingJasaFinishingKolomBalok				0			0		0			1 (kosong)
urlMappingJasaPelapisanWaterproofingStruktur	0			0		0			1 (kosong)
*/

/*

📊 RINGKASAN STATUS
Const									Jumlah 	URL	Status	Keterangan
urlMappingJasaEpoxyDinding				1 URL	✅ VALID	Harga jasa epoxy dinding
urlMappingJasaEpoxyLantai				6 URL	⚠️ PERLU PERHATIAN	Overlap konten antar URL
urlMappingJasaPelindungRetakStruktur	0		🔴 KOSONG	Perlu diisi atau dihapus
*/
// ============================================================
// JASA EPOXY DINDING - MONEY PAGE
// ============================================================
// 🧠 SEO NOTE: Cluster ini fokus ke layanan epoxy dinding.
// Intent: Transactional (user cari harga & jasa epoxy dinding).
// Parent: Jasa Finishing Bangunan (/p/jasa-finishing-bangunan.html)
// Breadcrumb: Home > Jasa Konstruksi > Jasa Finishing > Jasa Finishing Bangunan > Harga Jasa Epoxy Dinding (5 level)
// ============================================================

const urlMappingJasaEpoxyDinding = {
  // ============================================================
  // [MONEY PAGE] - HARGA JASA EPOXY DINDING
  // 🧠 SEO NOTE: Halaman ini adalah money page dengan intent transaksional.
  // Breadcrumb: Home > Jasa Konstruksi > Jasa Finishing > Harga Jasa Epoxy Dinding (4 level - SKIP "Jasa Finishing Bangunan")
  // ============================================================
  "https://www.betonjayareadymix.com/2018/10/harga-jasa-epoxy-dinding.html": "Harga Jasa Epoxy Dinding"
};

// ============================================================
// 🟢 SEO NOTE - JASA EPOXY DINDING
// ============================================================
/*
📌 BREADCRUMB SKIP LEVEL:
Jika breadcrumb asli: Home > Jasa Konstruksi > Jasa Finishing > Jasa Finishing Bangunan > Harga Jasa Epoxy Dinding (5 level)
Menjadi: Home > Jasa Konstruksi > Jasa Finishing > Harga Jasa Epoxy Dinding (4 level)

Alasan skip: "Jasa Finishing Bangunan" di-skip karena halaman tersebut hanya sebagai pengelompokan.

✅ URL sudah valid sebagai [MONEY PAGE].
*/
// ============================================================
// JASA EPOXY LANTAI - MONEY PAGE
// ============================================================
// 🧠 SEO NOTE: Cluster ini fokus ke layanan epoxy lantai (finishing epoxy).
// Intent: Transactional (user cari harga & jasa epoxy lantai).
// Parent: Jasa Finishing Bangunan (/p/jasa-finishing-bangunan.html)
// Breadcrumb: Home > Jasa Konstruksi > Jasa Finishing > Jasa Finishing Bangunan > [Nama Layanan] (5 level)
// ============================================================

const urlMappingJasaEpoxyLantai = {
  // ============================================================
  // [MONEY PAGE] - MASTER HARGA JASA FINISHING EPOXY
  // 🧠 SEO NOTE: Halaman ini adalah master money page untuk epoxy lantai.
  // Breadcrumb: Home > Jasa Konstruksi > Jasa Finishing > Harga Jasa Finishing Epoxy (4 level)
  // ============================================================
  "https://www.betonjayareadymix.com/2018/10/harga-jasa-finishing-epoxy.html": "Harga Jasa Finishing Epoxy",
  
  // ============================================================
  // [SUB2] - INFORMASIONAL (PANDUAN FINISHING EPOXY)
  // 🧠 SEO NOTE: Halaman ini adalah panduan, bukan money page.
  // Breadcrumb: Home > Jasa Konstruksi > Jasa Finishing > Panduan Finishing Epoxy (4 level)
  // ============================================================
  "https://www.betonjayareadymix.com/2018/10/finishing-epoxy.html": "Finishing Epoxy",
  
  // ============================================================
  // [MONEY PAGE] - HARGA JASA EPOXY (GENERAL)
  // 🧠 SEO NOTE: Overlap dengan "harga-jasa-finishing-epoxy.html".
  // Disarankan untuk di-redirect ke master.
  // ============================================================
  "https://www.betonjayareadymix.com/2018/10/harga-jasa-epoxy.html": "Harga Jasa Epoxy",
  
  // ============================================================
  // [MONEY PAGE] - HARGA JASA EPOXY LANTAI
  // 🧠 SEO NOTE: Overlap dengan master.
  // ============================================================
  "https://www.betonjayareadymix.com/2018/10/harga-jasa-epoxy-lantai.html": "Harga Jasa Epoxy Lantai",
  
  // ============================================================
  // [SUB2] - INFORMASIONAL (JASA EPOXY)
  // 🧠 SEO NOTE: Halaman informasional, bukan money page.
  // ============================================================
  "https://www.betonjayareadymix.com/2018/10/jasa-epoxy.html": "Jasa Epoxy",
  
  // ============================================================
  // [MONEY PAGE] - HARGA JASA LANTAI EPOXY
  // 🧠 SEO NOTE: Overlap dengan master.
  // ============================================================
  "https://www.betonjayareadymix.com/2018/10/harga-jasa-lantai-epoxy.html": "Harga Jasa Lantai Epoxy"
};

// ============================================================
// 🔴 REDIRECT NOTES - JASA EPOXY LANTAI
// ============================================================
/*
🧠 SEO CANNIBAL FIX - REDIRECT PLAN:

| No | From URL | To URL | Type | Alasan SEO |
|----|----------|--------|------|------------|
| 1 | /2018/10/harga-jasa-epoxy.html | /2018/10/harga-jasa-finishing-epoxy.html | 301 | Duplikasi intent, cukup 1 master money page |
| 2 | /2018/10/harga-jasa-epoxy-lantai.html | /2018/10/harga-jasa-finishing-epoxy.html | 301 | Duplikasi intent, gabung ke master |
| 3 | /2018/10/harga-jasa-lantai-epoxy.html | /2018/10/harga-jasa-finishing-epoxy.html | 301 | Duplikasi intent, gabung ke master |

📌 REKOMENDASI HIERARKI:
   Jasa Finishing Bangunan (SUB2 - /p/jasa-finishing-bangunan.html)
   │
   ├── Finishing Epoxy (SUB2 - /2018/10/finishing-epoxy.html) [PANDUAN]
   │
   └── Harga Jasa Finishing Epoxy (MONEY - /2018/10/harga-jasa-finishing-epoxy.html) [MASTER]
       ├── Harga Jasa Epoxy (redirect)
       ├── Harga Jasa Epoxy Lantai (redirect)
       └── Harga Jasa Lantai Epoxy (redirect)

📌 BREADCRUMB SKIP LEVEL:
Untuk money page master:
Breadcrumb: Home > Jasa Konstruksi > Jasa Finishing > Harga Jasa Finishing Epoxy (4 level)
Skip: "Jasa Finishing Bangunan"

✅ 'jasa-epoxy.html' dan 'finishing-epoxy.html' tetap sebagai halaman informasional (SUB2).
*/
// ============================================================
// ⚠️ CONST KOSONG - PERLU DITINDAKLANJUTI
// ============================================================

const urlMappingJasaPelindungRetakStruktur = {
  // 🔴 KOSONG - Perlu diisi atau dihapus
  // 🧠 SEO NOTE: Jika tidak ada konten, lebih baik dihapus atau diisi dengan URL yang valid.
  // Rekomendasi: Tambahkan URL seperti:
  // "/2018/10/harga-jasa-pelindung-retak-struktur.html": "Harga Jasa Pelindung Retak Struktur"
  // ATAU
  // "/2018/10/jasa-injeksi-retak-struktur.html": "Jasa Injeksi Retak Struktur"
};

// ============================================================
// 🟡 SARAN TINDAKAN UNTUK CONST KOSONG
// ============================================================
/*
📌 REKOMENDASI:

| Const | Tindakan | Prioritas |
|-------|----------|-----------|
| urlMappingJasaPelindungRetakStruktur | Hapus const (jika tidak ada rencana konten) ATAU isi dengan URL yang valid | 🟡 MEDIUM |

📌 CATATAN: Const kosong tidak berbahaya untuk SEO selama tidak digunakan.
Namun untuk menjaga kebersihan kode, disarankan untuk dihapus atau diisi.

📌 SARAN URL YANG BISA DITAMBAHKAN (JIKA ADA KONTEN):
| URL | Nama Halaman | Parent |
|-----|--------------|--------|
| /2018/10/harga-jasa-injeksi-retak-struktur.html | Harga Jasa Injeksi Retak Struktur | Jasa Perbaikan Struktur |
| /2018/10/jasa-perkuatan-struktur-retak.html | Jasa Perkuatan Struktur Retak | Jasa Perbaikan Struktur |
| /2018/10/harga-jasa-grouting-retak-struktur.html | Harga Jasa Grouting Retak Struktur | Jasa Perbaikan Struktur |
*/
/*
📋 RINGKASAN SARAN & TINDAKAN
No	Tindakan	Target	Prioritas
1	Redirect harga-jasa-epoxy.html → harga-jasa-finishing-epoxy.html	1 URL	🟡 MEDIUM
2	Redirect harga-jasa-epoxy-lantai.html → harga-jasa-finishing-epoxy.html	1 URL	🟡 MEDIUM
3	Redirect harga-jasa-lantai-epoxy.html → harga-jasa-finishing-epoxy.html	1 URL	🟡 MEDIUM
4	Pertahankan finishing-epoxy.html sebagai halaman panduan (SUB2)	1 URL	✅
5	Pertahankan jasa-epoxy.html sebagai halaman informasional (SUB2)	1 URL	✅
6	Hapus atau isi const urlMappingJasaPelindungRetakStruktur	1 const	🟢 LOW
📊 STATUS FINAL
Const	Jumlah URL	Valid	Redirect	Kosong
urlMappingJasaEpoxyDinding	1	1	0	0
urlMappingJasaEpoxyLantai	6	2	3	0
urlMappingJasaPelindungRetakStruktur	0	0	0	1 (kosong)
🧠 HIERARKI YANG DISARANKAN
text
Jasa Finishing Bangunan (SUB2 - /p/jasa-finishing-bangunan.html)
│
├── Jasa Epoxy Dinding (MONEY - /2018/10/harga-jasa-epoxy-dinding.html)
│
├── Jasa Epoxy Lantai (MONEY - /2018/10/harga-jasa-finishing-epoxy.html) [MASTER]
│   ├── Harga Jasa Epoxy (redirect)
│   ├── Harga Jasa Epoxy Lantai (redirect)
│   └── Harga Jasa Lantai Epoxy (redirect)
│
├── Finishing Epoxy (SUB2 - /2018/10/finishing-epoxy.html) [PANDUAN]
│
└── Jasa Epoxy (SUB2 - /2018/10/jasa-epoxy.html) [INFORMASIONAL]

*/
//AKHIR SUB FinishingBangunanStruktur

/*
const urlMappingFinishingBangunanInterior = {
"https://www.betonjayareadymix.com/p/jasa-interior-dan-furniture-custom.html": "Jasa Interior dan Furniture Custome",
"https://www.betonjayareadymix.com/p/jasa-ganti-keramik-lantai.html": "Jasa Ganti Keramik Lantai",
  "https://www.betonjayareadymix.com/p/jasa-cat-interior-rumah.html": "Jasa Cat Interior Rumah",
  "https://www.betonjayareadymix.com/p/jasa-pasang-wallpaper-dinding.html": "Jasa Pasang Wallpaper Dinding",
  "https://www.betonjayareadymix.com/p/jasa-pasang-lantai-vinyl.html": "Jasa Pasang Lantai Vinyl",
  "https://www.betonjayareadymix.com/p/jasa-pasang-plafon-gypsum.html": "Jasa Pasang Plafon Gypsum",
  "https://www.betonjayareadymix.com/p/jasa-ganti-lampu-interior.html": "Jasa Ganti Lampu Interior",
  "https://www.betonjayareadymix.com/p/jasa-ganti-kitchen-set.html": "Jasa Ganti Kitchen Set",
  "https://www.betonjayareadymix.com/p/jasa-finishing-interior-minimalis.html": "Jasa Finishing Interior Minimalis",
  "https://www.betonjayareadymix.com/p/jasa-finishing-interior-klasik.html": "Jasa Finishing Interior Klasik",
  "https://www.betonjayareadymix.com/p/jasa-finishing-interior-modern.html": "Jasa Finishing Interior Modern"
};
*/

//SUB JasaFinishingBangunanInteriorPost
/*
📊 RINGKASAN STATUS
Const										Jumlah URL	Status	Keterangan
urlMappingJasaInteriordanFurnitureCustome	0			🔴 KOSONG	Perlu diisi atau dihapus
urlMappingJasaKeramikLantai					0			🔴 KOSONG	Perlu diisi atau dihapus
urlMappingJasaCatInteriorRumah				0			🔴 KOSONG	Perlu diisi atau dihapus
urlMappingJasaPasangWallpaperDinding		0			🔴 KOSONG	Perlu diisi atau dihapus
urlMappingJasaLampuInterior					0			🔴 KOSONG	Perlu diisi atau dihapus
urlMappingJasaFinishingInteriorKlasik		11			✅ VALID	Semua URL aktif
urlMappingJasaFinishingInteriorMinimalis	16			✅ VALID	Semua URL aktif
urlMappingJasaInteriorFurnitureCustome		25			✅ VALID	Semua URL aktif
urlMappingJasaFinishingInteriorModern		4			✅ VALID	Semua URL aktif
urlMappingJasaFinishingInteriorModernWpc	12			✅ VALID	Semua URL aktif
urlMappingJasaFinishingInteriorModernVinyl	20			✅ VALID	Semua URL aktif
urlMappingJasaFinishingInteriorModernPvc	18			✅ VALID	Semua URL aktif
urlMappingJasaFinishingInteriorModernPlafon	22			✅ VALID	Semua URL aktif
urlMappingJasaKitchenSet					25			✅ VALID	Semua URL aktif
*/
// ============================================================
// 🟡 CONST KOSONG - PERLU TINDAKAN
// ============================================================

const urlMappingJasaInteriordanFurnitureCustome = {
  // ============================================================
  // 🧠 SEO NOTE: Const ini kosong. Berdasarkan parent "Jasa Interior dan Furniture Custom",
  // seharusnya berisi URL layanan interior & furniture custom.
  // SARAN: Isi dengan URL berikut (jika sudah ada konten) atau HAPUS const ini.
  // ============================================================
  
  // [MONEY PAGE] - SARAN URL YANG DAPAT DITAMBAHKAN:
  // "https://www.betonjayareadymix.com/p/jasa-interior-custom-rumah.html": "Jasa Interior Custom Rumah",
  // "https://www.betonjayareadymix.com/p/jasa-interior-custom-kantor.html": "Jasa Interior Custom Kantor",
  // "https://www.betonjayareadymix.com/p/jasa-furniture-custom-jepara.html": "Jasa Furniture Custom Jepara",
  
  // 📌 CATATAN: Jika tidak ada konten, const ini sebaiknya DIHAPUS untuk menghindari kebingungan mapping.
};

const urlMappingJasaKeramikLantai = {
  // ============================================================
  // 🧠 SEO NOTE: Const ini kosong. Berdasarkan nama, seharusnya berisi URL jasa pasang keramik lantai.
  // SARAN: Isi dengan URL berikut (jika sudah ada konten) atau HAPUS const ini.
  // ============================================================
  
  // [MONEY PAGE] - SARAN URL YANG DAPAT DITAMBAHKAN:
  // "https://www.betonjayareadymix.com/p/jasa-pasang-keramik-lantai.html": "Jasa Pasang Keramik Lantai",
  // "https://www.betonjayareadymix.com/p/harga-jasa-pasang-keramik-per-meter.html": "Harga Jasa Pasang Keramik per Meter",
  // "https://www.betonjayareadymix.com/p/jasa-ganti-keramik-lantai.html": "Jasa Ganti Keramik Lantai",
  
  // 📌 CATATAN: Jika tidak ada konten, const ini sebaiknya DIHAPUS.
};

const urlMappingJasaCatInteriorRumah = {
  // ============================================================
  // 🧠 SEO NOTE: Const ini kosong. Berdasarkan nama, seharusnya berisi URL jasa cat interior rumah.
  // SARAN: Isi dengan URL berikut (jika sudah ada konten) atau HAPUS const ini.
  // ============================================================
  
  // [MONEY PAGE] - SARAN URL YANG DAPAT DITAMBAHKAN:
  // "https://www.betonjayareadymix.com/p/jasa-cat-interior-rumah-jakarta.html": "Jasa Cat Interior Rumah Jakarta",
  // "https://www.betonjayareadymix.com/p/harga-jasa-cat-interior-per-meter.html": "Harga Jasa Cat Interior per Meter",
  // "https://www.betonjayareadymix.com/p/jasa-cat-dinding-interior.html": "Jasa Cat Dinding Interior",
  
  // 📌 CATATAN: Jika tidak ada konten, const ini sebaiknya DIHAPUS.
  // Catatan: Ada URL /p/jasa-cat-interior-rumah.html di const FinishingBangunanInterior
  // Mungkin ini duplikasi, perlu dicek.
};

const urlMappingJasaPasangWallpaperDinding = {
  // ============================================================
  // 🧠 SEO NOTE: Const ini kosong. Berdasarkan nama, seharusnya berisi URL jasa pasang wallpaper.
  // SARAN: Isi dengan URL berikut (jika sudah ada konten) atau HAPUS const ini.
  // ============================================================
  
  // [MONEY PAGE] - SARAN URL YANG DAPAT DITAMBAHKAN:
  // "https://www.betonjayareadymix.com/p/jasa-pasang-wallpaper-dinding-jakarta.html": "Jasa Pasang Wallpaper Dinding Jakarta",
  // "https://www.betonjayareadymix.com/p/harga-jasa-pasang-wallpaper-per-meter.html": "Harga Jasa Pasang Wallpaper per Meter",
  
  // 📌 CATATAN: Jika tidak ada konten, const ini sebaiknya DIHAPUS.
};

const urlMappingJasaLampuInterior = {
  // ============================================================
  // 🧠 SEO NOTE: Const ini kosong. Berdasarkan nama, seharusnya berisi URL jasa pemasangan lampu interior.
  // SARAN: Isi dengan URL berikut (jika sudah ada konten) atau HAPUS const ini.
  // ============================================================
  
  // [MONEY PAGE] - SARAN URL YANG DAPAT DITAMBAHKAN:
  // "https://www.betonjayareadymix.com/p/jasa-pasang-lampu-interior.html": "Jasa Pasang Lampu Interior",
  // "https://www.betonjayareadymix.com/p/jasa-instalasi-lampu-downlight.html": "Jasa Instalasi Lampu Downlight",
  
  // 📌 CATATAN: Jika tidak ada konten, const ini sebaiknya DIHAPUS.
};
// ============================================================
// JASA FINISHING INTERIOR KLASIK - MONEY PAGE & SUB2
// ============================================================
// 🧠 SEO NOTE: Cluster ini fokus ke layanan finishing interior gaya klasik.
// Parent: Jasa Finishing Interior (/p/jasa-finishing-interior.html)
// Breadcrumb: Home > Jasa Konstruksi > Jasa Finishing Interior > [Nama Layanan] (4 level)
// ============================================================

const urlMappingJasaFinishingInteriorKlasik = {
  // ============================================================
  // [MONEY PAGE] - LAYANAN FINISHING INTERIOR KLASIK
  // 🧠 SEO NOTE: Masing-masing URL menarget keyword spesifik finishing klasik.
  // Breadcrumb: Home > Jasa Konstruksi > Jasa Finishing Interior > Jasa Finishing Kayu Eksotis Ukiran
  // ============================================================
  "https://www.betonjayareadymix.com/2020/02/jasa-finishing-kayu-eksotis-ukiran.html": "Jasa Finishing Kayu Eksotis Ukiran",
  "https://www.betonjayareadymix.com/2020/02/jasa-finishing-interior-klasik-gypsum.html": "Jasa Finishing Interior Klasik Gypsum",
  "https://www.betonjayareadymix.com/2020/02/jasa-finishing-interior-klasik-kayu.html": "Jasa Finishing Interior Klasik Kayu",
  "https://www.betonjayareadymix.com/2020/02/jasa-finishing-interior-klasik-gedung.html": "Jasa Finishing Interior Klasik Gedung",
  "https://www.betonjayareadymix.com/2020/02/jasa-finishing-interior-klasik-rumah-mewah.html": "Jasa Finishing Interior Klasik Rumah Mewah",
  "https://www.betonjayareadymix.com/2020/02/jasa-finishing-interior-klasik-kamar-tidur.html": "Jasa Finishing Interior Klasik Kamar Tidur",
  "https://www.betonjayareadymix.com/2020/02/jasa-finishing-interior-klasik-ruang-tamu.html": "Jasa Finishing Interior Klasik Ruang Tamu",
  "https://www.betonjayareadymix.com/2020/02/jasa-finishing-wall-panel-moulding-klasik.html": "Jasa Finishing Wall Panel & Moulding Klasik",
  "https://www.betonjayareadymix.com/2020/02/jasa-finishing-cat-interior-klasik.html": "Jasa Finishing Cat Interior Klasik",
  "https://www.betonjayareadymix.com/2020/02/jasa-finishing-plafon-interior-klasik.html": "Jasa Finishing Plafon Interior Klasik",
  "https://www.betonjayareadymix.com/2020/02/jasa-finishing-dinding-interior-klasik.html": "Jasa Finishing Dinding Interior Klasik"
};

// ============================================================
// 🟢 SEO NOTE - STATUS SEMUA URL
// ============================================================
/*
✅ SEMUA URL di atas sudah valid dengan status [MONEY PAGE].
✅ Masing-masing menarget keyword spesifik finishing klasik.
✅ Tidak ada duplikasi intent karena jenis finishing berbeda.
✅ Breadcrumb maksimal 4 level.

📌 REKOMENDASI:
1. Pastikan setiap halaman memiliki CTA ke form konsultasi/pemesanan
2. Tambahkan internal link antar sesama finishing klasik
*/
// ============================================================
// JASA FINISHING INTERIOR MINIMALIS - MONEY PAGE & SUB2
// ============================================================
// 🧠 SEO NOTE: Cluster ini fokus ke layanan finishing interior gaya minimalis.
// Parent: Jasa Finishing Interior (/p/jasa-finishing-interior.html)
// Breadcrumb: Home > Jasa Konstruksi > Jasa Finishing Interior > [Nama Layanan] (4 level)
// ============================================================

const urlMappingJasaFinishingInteriorMinimalis = {
  // ============================================================
  // [MONEY PAGE] - LAYANAN FINISHING INTERIOR MINIMALIS
  // ============================================================
  "https://www.betonjayareadymix.com/2020/02/jasa-finishing-interior-minimalis-built-in.html": "Jasa Finishing Interior Minimalis Built In",
  "https://www.betonjayareadymix.com/2020/02/jasa-finishing-interior-minimalis-gypsum.html": "Jasa Finishing Interior Minimalis Gypsum",
  "https://www.betonjayareadymix.com/2020/02/jasa-finishing-interior-minimalis-kayu-hpl.html": "Jasa Finishing Interior Minimalis Kayu HPL",
  "https://www.betonjayareadymix.com/2020/02/jasa-finishing-interior-minimalis-toko.html": "Jasa Finishing Interior Minimalis Toko",
  "https://www.betonjayareadymix.com/2020/02/jasa-finishing-interior-minimalis-kantor.html": "Jasa Finishing Interior Minimalis Kantor",
  "https://www.betonjayareadymix.com/2020/02/jasa-finishing-interior-minimalis-apartemen.html": "Jasa Finishing Interior Minimalis Apartemen",
  "https://www.betonjayareadymix.com/2020/02/jasa-finishing-interior-minimalis-rumah.html": "Jasa Finishing Interior Minimalis Rumah",
  "https://www.betonjayareadymix.com/2020/02/jasa-finishing-interior-minimalis-kamar-mandi.html": "Jasa Finishing Interior Minimalis Kamar Mandi",
  "https://www.betonjayareadymix.com/2020/02/jasa-finishing-interior-minimalis-dapur.html": "Jasa Finishing Interior Minimalis Dapur",
  "https://www.betonjayareadymix.com/2020/02/jasa-finishing-interior-minimalis-kamar-tidur.html": "Jasa Finishing Interior Minimalis Kamar Tidur",
  "https://www.betonjayareadymix.com/2020/02/jasa-finishing-interior-minimalis-ruang-tamu.html": "Jasa Finishing Interior Minimalis Ruang Tamu",
  "https://www.betonjayareadymix.com/2020/02/jasa-finishing-partisi-sekat-minimalis.html": "Jasa Finishing Partisi Sekat Minimalis",
  "https://www.betonjayareadymix.com/2020/02/jasa-finishing-cat-interior-minimalis.html": "Jasa Finishing Cat Interior Minimalis",
  "https://www.betonjayareadymix.com/2020/02/jasa-finishing-lantai-interior-minimalis.html": "Jasa Finishing Lantai Interior Minimalis",
  "https://www.betonjayareadymix.com/2020/02/jasa-finishing-plafon-minimalis.html": "Jasa Finishing Plafon Minimalis",
  "https://www.betonjayareadymix.com/2020/02/jasa-finishing-dinding-interior-minimalis.html": "Jasa Finishing Dinding Interior Minimalis"
};

// ============================================================
// 🟢 SEO NOTE - STATUS SEMUA URL
// ============================================================
/*
✅ SEMUA URL di atas sudah valid dengan status [MONEY PAGE].
✅ Masing-masing menarget keyword spesifik finishing minimalis.
✅ Tidak ada duplikasi intent.

📌 REKOMENDASI: Sama dengan finishing klasik.
*/
// ============================================================
// JASA INTERIOR & FURNITURE CUSTOM - MONEY PAGE
// ============================================================
// 🧠 SEO NOTE: Cluster ini fokus ke layanan interior dan furniture custom.
// Parent: Jasa Finishing Interior (/p/jasa-finishing-interior.html) atau Jasa Interior dan Furniture Custom
// Breadcrumb: Home > Jasa Konstruksi > Jasa Interior Furniture > [Nama Layanan] (4 level)
// ============================================================

const urlMappingJasaInteriorFurnitureCustome = {
  // ============================================================
  // [MONEY PAGE] - JASA INTERIOR FURNITURE PER LOKASI
  // ============================================================
  "https://www.betonjayareadymix.com/2018/11/jasa-interior-furniture-tangerang.html": "Jasa Interior Furniture Tangerang",
  "https://www.betonjayareadymix.com/2018/11/jasa-interior-furniture-jakarta.html": "Jasa Interior Furniture Jakarta",
  "https://www.betonjayareadymix.com/2018/11/jasa-interior-furniture-bekasi.html": "Jasa Interior Furniture Bekasi",
  "https://www.betonjayareadymix.com/2018/11/jasa-interior-furniture-depok.html": "Jasa Interior Furniture Depok",
  "https://www.betonjayareadymix.com/2018/11/jasa-interior-furniture-bogor.html": "Jasa Interior Furniture Bogor",
  
  // ============================================================
  // [MONEY PAGE] - JASA PEMBUATAN FURNITURE
  // ============================================================
  "https://www.betonjayareadymix.com/2018/09/jasa-pembuatan-kamar-set.html": "Jasa Pembuatan Kamar Set",
  "https://www.betonjayareadymix.com/2018/11/jasa-pembuatan-furniture-bekasi.html": "Jasa Pembuatan Furniture Bekasi",
  "https://www.betonjayareadymix.com/2018/11/jasa-pembuatan-furniture-depok.html": "Jasa Pembuatan Furniture Depok",
  "https://www.betonjayareadymix.com/2018/11/jasa-pembuatan-furniture-bogor.html": "Jasa Pembuatan Furniture Bogor",
  "https://www.betonjayareadymix.com/2018/11/jasa-pembuatan-furniture-jakarta.html": "Jasa Pembuatan Furniture Jakarta",
  "https://www.betonjayareadymix.com/2018/11/jasa-pembuatan-furniture-tangerang.html": "Jasa Pembuatan Furniture Tangerang",
  
  // ============================================================
  // [MONEY PAGE] - JASA CUSTOM FURNITURE PER LOKASI
  // ============================================================
  "https://www.betonjayareadymix.com/2018/11/jasa-custom-furniture-jakarta.html": "Jasa Custom Furniture Jakarta",
  "https://www.betonjayareadymix.com/2018/11/jasa-custom-furniture-bekasi.html": "Jasa Custom Furniture Bekasi",
  "https://www.betonjayareadymix.com/2018/11/jasa-custom-furniture-tangerang.html": "Jasa Custom Furniture Tangerang",
  "https://www.betonjayareadymix.com/2018/11/jasa-custom-furniture-depok.html": "Jasa Custom Furniture Depok",
  "https://www.betonjayareadymix.com/2018/11/jasa-custom-furniture-bogor.html": "Jasa Custom Furniture Bogor",
  
  // ============================================================
  // [MONEY PAGE] - JASA FURNITURE UMUM & CUSTOM
  // ============================================================
  "https://www.betonjayareadymix.com/2018/09/jasa-furniture-interior-exterior.html": "Jasa Furniture Interior Exterior",
  "https://www.betonjayareadymix.com/2018/09/jasa-furniture-custom.html": "Jasa Furniture Custom",
  "https://www.betonjayareadymix.com/2018/09/jasa-pembuatan-furniture-custom.html": "Jasa Pembuatan Furniture Custom",
  
  // ============================================================
  // [MONEY PAGE] - HARGA INTERIOR & FURNITURE
  // ============================================================
  "https://www.betonjayareadymix.com/2018/09/harga-interior-kamar-tidur.html": "Harga Interior Kamar Tidur",
  "https://www.betonjayareadymix.com/2018/09/harga-interior-kamar.html": "Harga Interior Kamar",
  "https://www.betonjayareadymix.com/2018/09/harga-interior-ruang-tamu.html": "Harga Interior Ruang Tamu",
  "https://www.betonjayareadymix.com/2018/09/harga-interior-per-meter.html": "Harga Interior Per Meter",
  "https://www.betonjayareadymix.com/2018/09/harga-borongan-interior.html": "Harga Borongan Interior",
  "https://www.betonjayareadymix.com/2018/09/harga-interior-kamar-tidur-minimalis.html": "Harga Interior Kamar Tidur Minimalis",
  "https://www.betonjayareadymix.com/2018/09/harga-custom-furniture-per-meter.html": "Harga Custom Furniture Per Meter"
};

// ============================================================
// 🟢 SEO NOTE - STATUS SEMUA URL
// ============================================================
/*
✅ SEMUA URL di atas sudah valid dengan status [MONEY PAGE].
✅ Masing-masing menarget keyword spesifik (per lokasi, per jenis, harga).
✅ Breadcrumb: Home > Jasa Konstruksi > Jasa Interior Furniture > [Nama Layanan] (4 level)

📌 REKOMENDASI:
1. Pastikan ada internal link dari halaman induk ke semua URL ini
2. Kelompokkan berdasarkan kategori (lokasi, jenis, harga) untuk memudahkan navigasi
*/
// ============================================================
// JASA FINISHING INTERIOR MODERN - SUB2 (KATEGORI UTAMA)
// ============================================================
// 🧠 SEO NOTE: Halaman ini adalah SUB2 yang mengelompokkan layanan finishing modern.
// Breadcrumb: Home > Jasa Konstruksi > Jasa Finishing Interior > Jasa Finishing Interior Modern (4 level)
// ============================================================

const urlMappingJasaFinishingInteriorModern = {
  // [SUB2] - KATEGORI UTAMA FINISHING MODERN
  "https://www.betonjayareadymix.com/2020/02/jasa-pasang-wpc.html": "Jasa Pasang WPC",
  "https://www.betonjayareadymix.com/2020/02/jasa-pasang-vinyl.html": "Jasa Pasang Vinyl",
  "https://www.betonjayareadymix.com/2020/02/jasa-pasang-pvc.html": "Jasa Pasang PVC",
  "https://www.betonjayareadymix.com/2020/02/jasa-pasang-plafon.html": "Jasa Pasang Plafon"
};

// ============================================================
// JASA FINISHING INTERIOR MODERN - WPC (TURUNAN)
// ============================================================

const urlMappingJasaFinishingInteriorModernWpc = {
  // [MONEY PAGE] - LAYANAN PASANG WPC
  "https://www.betonjayareadymix.com/2020/02/harga-jasa-pasang-wpc-lantai.html": "Harga Jasa Pasang WPC Lantai",
  "https://www.betonjayareadymix.com/2020/02/jasa-pasang-panel-dinding-wpc.html": "Jasa Pasang Panel Dinding WPC",
  "https://www.betonjayareadymix.com/2020/02/harga-jasa-pasang-dinding-wpc.html": "Harga Jasa Pasang Dinding WPC",
  "https://www.betonjayareadymix.com/2020/02/harga-jasa-pasang-wall-panel-wpc.html": "Harga Jasa Pasang Wall Panel WPC",
  "https://www.betonjayareadymix.com/2020/02/jasa-pasang-wall-panel-wpc-terdekat.html": "Jasa Pasang Wall Panel WPC Terdekat",
  "https://www.betonjayareadymix.com/2020/02/jasa-pasang-wpc-dinding-per-meter.html": "Jasa Pasang WPC Dinding Per Meter",
  "https://www.betonjayareadymix.com/2020/02/jasa-pasang-wpc-wall-panel-bogor.html": "Jasa Pasang WPC Wall Panel Bogor",
  "https://www.betonjayareadymix.com/2020/02/jasa-pasang-wpc-wall-panel-bekasi.html": "Jasa Pasang WPC Wall Panel Bekasi",
  "https://www.betonjayareadymix.com/2020/02/jasa-pasang-wpc-wall-panel-jakarta.html": "Jasa Pasang WPC Wall Panel Jakarta",
  "https://www.betonjayareadymix.com/2020/02/jasa-pasang-wpc-wall-panel-tangerang.html": "Jasa Pasang WPC Wall Panel Tangerang",
  "https://www.betonjayareadymix.com/2020/02/jasa-pasang-wpc-wall-panel-depok.html": "Jasa Pasang WPC Wall Panel Depok",
  "https://www.betonjayareadymix.com/2020/02/jasa-pasang-wpc-wall-panel-karawang.html": "Jasa Pasang WPC Wall Panel Karawang"
};

// ============================================================
// JASA FINISHING INTERIOR MODERN - VINYL (TURUNAN)
// ============================================================

const urlMappingJasaFinishingInteriorModernVinyl = {
  // [MONEY PAGE] - LAYANAN PASANG VINYL
  "https://www.betonjayareadymix.com/2020/02/jasa-pasang-vinyl-lantai-karawang.html": "Jasa Pasang Vinyl Lantai Karawang",
  "https://www.betonjayareadymix.com/2020/02/jasa-pasang-vinyl-lantai-tangerang.html": "Jasa Pasang Vinyl Lantai Tangerang",
  "https://www.betonjayareadymix.com/2020/02/jasa-pasang-vinyl-lantai-depok.html": "Jasa Pasang Vinyl Lantai Depok",
  "https://www.betonjayareadymix.com/2020/02/jasa-pasang-vinyl-lantai-bogor.html": "Jasa Pasang Vinyl Lantai Bogor",
  "https://www.betonjayareadymix.com/2020/02/jasa-pasang-vinyl-lantai-bekasi.html": "Jasa Pasang Vinyl Lantai Bekasi",
  "https://www.betonjayareadymix.com/2020/02/jasa-pasang-vinyl-lantai-jakarta.html": "Jasa Pasang Vinyl Lantai Jakarta",
  "https://www.betonjayareadymix.com/2020/02/jasa-tenaga-pasang-vinyl-lantai-per-meter.html": "Jasa Tenaga Pasang Vinyl Lantai per Meter",
  "https://www.betonjayareadymix.com/2020/02/jasa-borong-pasang-vinyl-lantai-per-meter.html": "Jasa Borong Pasang Vinyl Lantai per Meter",
  "https://www.betonjayareadymix.com/2020/02/harga-jasa-pasang-vinyl-lantai-per-meter.html": "Harga Jasa Pasang Vinyl Lantai per Meter",
  "https://www.betonjayareadymix.com/2020/02/harga-jasa-pasang-vinyl-lantai.html": "Harga Jasa Pasang Vinyl Lantai",
  "https://www.betonjayareadymix.com/2020/02/harga-jasa-pemasangan-vinyl-lantai.html": "Harga Jasa Pemasangan Vinyl Lantai",
  "https://www.betonjayareadymix.com/2020/02/harga-jasa-vinyl.html": "Harga Jasa Vinyl",
  "https://www.betonjayareadymix.com/2020/02/harga-jasa-pemasangan-vinyl.html": "Harga Jasa Pemasangan Vinyl",
  "https://www.betonjayareadymix.com/2020/02/harga-jasa-pasang-vinyl-per-meter.html": "Harga Jasa Pasang Vinyl per Meter",
  "https://www.betonjayareadymix.com/2020/02/jasa-pasang-vinyl-tangga.html": "Jasa Pasang Vinyl Tangga",
  "https://www.betonjayareadymix.com/2020/02/jasa-pasang-vinyl-lantai-terdekat.html": "Jasa Pasang Vinyl Lantai Terdekat",
  "https://www.betonjayareadymix.com/2020/02/jasa-pasang-vinyl-terdekat.html": "Jasa Pasang Vinyl Terdekat",
  "https://www.betonjayareadymix.com/2020/02/jasa-vinyl-lantai.html": "Jasa Vinyl Lantai",
  "https://www.betonjayareadymix.com/2020/02/jasa-pasang-vinyl-lantai.html": "Jasa Pasang Vinyl Lantai",
  "https://www.betonjayareadymix.com/2020/02/jasa-vinyl-lantai-terdekat.html": "Jasa Vinyl Lantai Terdekat"
};

// ============================================================
// JASA FINISHING INTERIOR MODERN - PVC (TURUNAN)
// ============================================================

const urlMappingJasaFinishingInteriorModernPvc = {
  // [MONEY PAGE] - LAYANAN PASANG PVC
  "https://www.betonjayareadymix.com/2020/02/jasa-pasang-pvc-lantai.html": "Jasa Pasang Pvc Lantai",
  "https://www.betonjayareadymix.com/2020/02/jasa-pasang-dinding-pvc-surabaya.html": "Jasa Pasang Dinding PVC Surabaya",
  "https://www.betonjayareadymix.com/2020/02/jasa-pasang-dinding-pvc-karawang.html": "Jasa Pasang Dinding PVC Karawang",
  "https://www.betonjayareadymix.com/2020/02/jasa-pasang-dinding-pvc-depok.html": "Jasa Pasang Dinding PVC Depok",
  "https://www.betonjayareadymix.com/2020/02/jasa-pasang-dinding-pvc-tangerang.html": "Jasa Pasang Dinding PVC Tangerang",
  "https://www.betonjayareadymix.com/2020/02/jasa-pasang-dinding-pvc-jakarta.html": "Jasa Pasang Dinding PVC Jakarta",
  "https://www.betonjayareadymix.com/2020/02/jasa-pasang-dinding-pvc-bekasi.html": "Jasa Pasang Dinding PVC Bekasi",
  "https://www.betonjayareadymix.com/2020/02/jasa-pasang-dinding-pvc-bogor.html": "Jasa Pasang Dinding PVC Bogor",
  "https://www.betonjayareadymix.com/2020/02/harga-jasa-pasang-pvc-dinding.html": "Harga Jasa Pasang PVC Dinding",
  "https://www.betonjayareadymix.com/2020/02/harga-jasa-pasang-pvc-per-meter.html": "Harga Jasa Pasang PVC Per Meter",
  "https://www.betonjayareadymix.com/2020/02/jasa-pasang-pvc-dinding-per-meter.html": "Jasa Pasang PVC Dinding Per Meter",
  "https://www.betonjayareadymix.com/2020/02/jasa-pasang-pvc-dinding-terdekat.html": "Jasa Pasang PVC Dinding Terdekat",
  "https://www.betonjayareadymix.com/2020/02/jasa-pasang-pvc-dinding.html": "Jasa Pasang PVC Dinding",
  "https://www.betonjayareadymix.com/2020/02/jasa-pasang-pvc-per-meter.html": "Jasa Pasang PVC Per Meter",
  "https://www.betonjayareadymix.com/2020/02/jasa-pasang-pvc-board.html": "Jasa Pasang PVC Board",
  "https://www.betonjayareadymix.com/2020/02/jasa-pasang-pvc-terdekat.html": "Jasa Pasang PVC Terdekat",
  "https://www.betonjayareadymix.com/2020/02/harga-jasa-pasang-wall-panel-pvc.html": "Harga Jasa Pasang Wall Panel PVC",
  "https://www.betonjayareadymix.com/2020/02/jasa-pasang-wall-panel-pvc.html": "Jasa Pasang Wall Panel PVC"
};

// ============================================================
// JASA FINISHING INTERIOR MODERN - PLAFON (TURUNAN)
// ============================================================

const urlMappingJasaFinishingInteriorModernPlafon = {
  // [MONEY PAGE] - LAYANAN PASANG PLAFON
  "https://www.betonjayareadymix.com/2020/02/jasa-pasang-plafon-wpc-premium.html": "Jasa Pasang Plafon WPC Premium",
  "https://www.betonjayareadymix.com/2020/02/harga-jasa-pasang-plafon-wpc.html": "Harga Jasa Pasang Plafon WPC",
  "https://www.betonjayareadymix.com/2020/02/jasa-pasang-plafon-wpc.html": "Jasa Pasang Plafon WPC",
  "https://www.betonjayareadymix.com/2020/02/jasa-pasang-plafon-gypsum.html": "Jasa Pasang Plafon Gypsum",
  "https://www.betonjayareadymix.com/2020/02/jasa-pasang-plafon-per-meter.html": "Jasa Pasang Plafon Per Meter",
  "https://www.betonjayareadymix.com/2020/02/jasa-pasang-plafon-terdekat.html": "Jasa Pasang Plafon Terdekat",
  "https://www.betonjayareadymix.com/2020/02/jasa-pasang-plafon-pvc.html": "Jasa Pasang Plafon PVC",
  "https://www.betonjayareadymix.com/2020/02/jasa-pasang-plafon-grc.html": "Jasa Pasang Plafon GRC",
  "https://www.betonjayareadymix.com/2020/02/jasa-pasang-plafon-akustik.html": "Jasa Pasang Plafon Akustik",
  "https://www.betonjayareadymix.com/2020/02/jasa-pasang-plafon-upvc.html": "Jasa Pasang Plafon UPVC",
  "https://www.betonjayareadymix.com/2020/02/jasa-pasang-plafon-gypsum-per-meter.html": "Jasa Pasang Plafon Gypsum Per Meter",
  "https://www.betonjayareadymix.com/2020/02/jasa-pasang-plafon-gypsum-terdekat.html": "Jasa Pasang Plafon Gypsum Terdekat",
  "https://www.betonjayareadymix.com/2020/02/jasa-pasang-plafon-akustik-per-meter.html": "Jasa Pasang Plafon Akustik Per Meter",
  "https://www.betonjayareadymix.com/2020/02/jasa-pasang-plafon-pvc-per-meter.html": "Jasa Pasang Plafon PVC Per Meter",
  "https://www.betonjayareadymix.com/2020/02/jasa-pasang-plafon-pvc-terdekat.html": "Jasa Pasang Plafon PVC Terdekat",
  "https://www.betonjayareadymix.com/2020/02/jasa-pasang-plafon-bogor.html": "Jasa Pasang Plafon Bogor",
  "https://www.betonjayareadymix.com/2020/02/jasa-pasang-plafon-bekasi.html": "Jasa Pasang Plafon Bekasi",
  "https://www.betonjayareadymix.com/2020/02/jasa-pasang-plafon-jakarta.html": "Jasa Pasang Plafon Jakarta",
  "https://www.betonjayareadymix.com/2020/02/jasa-pasang-plafon-depok.html": "Jasa Pasang Plafon Depok",
  "https://www.betonjayareadymix.com/2020/02/jasa-pasang-plafon-tangerang.html": "Jasa Pasang Plafon Tangerang",
  "https://www.betonjayareadymix.com/2020/02/jasa-pasang-plafon-karawang.html": "Jasa Pasang Plafon Karawang",
  "https://www.betonjayareadymix.com/2020/02/jasa-pasang-plafon-surabaya.html": "Jasa Pasang Plafon Surabaya"
};

// ============================================================
// 🟢 SEO NOTE - FINISHING MODERN & TURUNAN
// ============================================================
/*
✅ SEMUA URL di atas sudah valid.
✅ `urlMappingJasaFinishingInteriorModern` berisi [SUB2] - kategori utama.
✅ URL lainnya adalah [MONEY PAGE] dengan intent transaksional.

📌 REKOMENDASI:
1. Pastikan `jasa-pasang-wpc.html` (SUB2) memiliki internal link ke semua URL WPC
2. Pastikan `jasa-pasang-vinyl.html` (SUB2) memiliki internal link ke semua URL Vinyl
3. Pastikan `jasa-pasang-pvc.html` (SUB2) memiliki internal link ke semua URL PVC
4. Pastikan `jasa-pasang-plafon.html` (SUB2) memiliki internal link ke semua URL Plafon
*/
// ============================================================
// JASA KITCHEN SET - MONEY PAGE
// ============================================================
// 🧠 SEO NOTE: Cluster ini fokus ke layanan kitchen set.
// Parent: Jasa Finishing Interior (/p/jasa-finishing-interior.html)
// Breadcrumb: Home > Jasa Konstruksi > Jasa Finishing Interior > Jasa Kitchen Set (4 level)
// ============================================================

const urlMappingJasaKitchenSet = {
  // ============================================================
  // [MONEY PAGE] - HARGA & JASA KITCHEN SET
  // ============================================================
  "https://www.betonjayareadymix.com/2018/09/kabinet-dapur.html": "Kabinet Dapur",
  "https://www.betonjayareadymix.com/2018/09/harga-kitchen-set-interior.html": "Harga Kitchen Set Interior",
  "https://www.betonjayareadymix.com/2018/09/harga-jasa-pembuatan-kitchen-set.html": "Harga Jasa Pembuatan Kitchen Set",
  "https://www.betonjayareadymix.com/2018/09/harga-borongan-tenaga-bikin-kitchen-set.html": "Harga Borongan Tenaga Bikin Kitchen Set",
  "https://www.betonjayareadymix.com/2018/09/harga-jasa-desain-kitchen-set.html": "Harga Jasa Desain Kitchen Set",
  "https://www.betonjayareadymix.com/2018/09/harga-kitchen-set-per-meter-kayu-jati.html": "Harga Kitchen Set Per Meter Kayu Jati",
  "https://www.betonjayareadymix.com/2018/09/harga-jasa-pembuatan-kitchen-set-per-meter.html": "Harga Jasa Pembuatan Kitchen Set Per Meter",
  "https://www.betonjayareadymix.com/2018/09/jasa-kitchen-set-murah.html": "Jasa Kitchen Set Murah",
  "https://www.betonjayareadymix.com/2018/09/jasa-kitchen-set-terdekat.html": "Jasa Kitchen Set Terdekat",
  
  // ============================================================
  // [MONEY PAGE] - JASA KITCHEN SET PER JENIS BANGUNAN
  // ============================================================
  "https://www.betonjayareadymix.com/2020/02/jasa-kitchen-set-kafe-restoran.html": "Jasa Kitchen Set Kafe & Restoran",
  "https://www.betonjayareadymix.com/2020/02/jasa-kitchen-set-rumah-tinggal.html": "Jasa Kitchen Set Rumah Tinggal",
  "https://www.betonjayareadymix.com/2020/02/jasa-kitchen-set-apartemen.html": "Jasa Kitchen Set Apartemen",
  "https://www.betonjayareadymix.com/2020/02/jasa-kitchen-set-dapur-kecil-sempit.html": "Jasa Kitchen Set Dapur Kecil & Sempit",
  
  // ============================================================
  // [MONEY PAGE] - JASA KITCHEN SET PER MATERIAL
  // ============================================================
  "https://www.betonjayareadymix.com/2020/02/jasa-kitchen-set-aluminium.html": "Jasa Kitchen Set Aluminium",
  "https://www.betonjayareadymix.com/2020/02/jasa-kitchen-set-kayu-solid.html": "Jasa Kitchen Set Kayu Solid",
  "https://www.betonjayareadymix.com/2020/02/jasa-kitchen-set-multiplek-plywood.html": "Jasa Kitchen Set Multiplek / Plywood",
  "https://www.betonjayareadymix.com/2020/02/jasa-kitchen-set-hpl.html": "Jasa Kitchen Set HPL",
  
  // ============================================================
  // [MONEY PAGE] - JASA KITCHEN SET PER DESAIN
  // ============================================================
  "https://www.betonjayareadymix.com/2020/02/jasa-kitchen-set-letter-l-u-island.html": "Jasa Kitchen Set Letter L, U & Island",
  "https://www.betonjayareadymix.com/2020/02/jasa-kitchen-set-per-meter.html": "Jasa Kitchen Set Per Meter",
  "https://www.betonjayareadymix.com/2020/02/jasa-kitchen-set-custom.html": "Jasa Kitchen Set Custom",
  "https://www.betonjayareadymix.com/2020/02/jasa-kitchen-set-industrial.html": "Jasa Kitchen Set Industrial",
  "https://www.betonjayareadymix.com/2020/02/jasa-kitchen-set-klasik-elegan.html": "Jasa Kitchen Set Klasik Elegan",
  "https://www.betonjayareadymix.com/2020/02/jasa-kitchen-set-modern.html": "Jasa Kitchen Set Modern",
  "https://www.betonjayareadymix.com/2020/02/jasa-kitchen-set-minimalis.html": "Jasa Kitchen Set Minimalis"
};

// ============================================================
// 🟢 SEO NOTE - JASA KITCHEN SET
// ============================================================
/*
✅ SEMUA URL di atas sudah valid dengan status [MONEY PAGE].
✅ Masing-masing menarget keyword spesifik (harga, jenis bangunan, material, desain).
✅ Breadcrumb: Home > Jasa Konstruksi > Jasa Finishing Interior > Jasa Kitchen Set (4 level)

📌 REKOMENDASI:
1. Buat halaman SUB2 `jasa-kitchen-set.html` sebagai parent/katalog
2. Pastikan setiap URL memiliki internal link ke halaman SUB2 dan sebaliknya
3. Kelompokkan berdasarkan kategori untuk memudahkan navigasi user
*/
/*
/
📋 RINGKASAN SARAN & TINDAKAN
No	Tindakan																	Target	Prioritas
1	Isi atau hapus const kosong	urlMappingJasaInteriordanFurnitureCustome, 
urlMappingJasaKeramikLantai, urlMappingJasaCatInteriorRumah, 
urlMappingJasaPasangWallpaperDinding, urlMappingJasaLampuInterior				🔴 HIGH
2	Buat halaman SUB2 untuk Kitchen Set	jasa-kitchen-set.html sebagai parent	🟡 MEDIUM
3	Pastikan internal link dari SUB2 ke semua MONEY page	
    Semua URL di urlMappingJasaKitchenSet										🟡 MEDIUM
4	Pastikan internal link dari jasa-finishing-interior.html ke semua 
    SUB2	WPC, Vinyl, PVC, Plafon, Klasik, Minimalis, Modern					🟡 MEDIUM
5	Cek duplikasi dengan const FinishingBangunanInterior	
jasa-cat-interior-rumah.html mungkin muncul di dua tempat						🟡 MEDIUM
✅ STATUS FINAL
Const											Jumlah URL	Valid	Perlu Perhatian	Saran
urlMappingJasaInteriordanFurnitureCustome		0	-	🔴 KOSONG	Isi atau hapus
urlMappingJasaKeramikLantai						0	-	🔴 KOSONG	Isi atau hapus
urlMappingJasaCatInteriorRumah					0	-	🔴 KOSONG	Isi atau hapus
urlMappingJasaPasangWallpaperDinding			0	-	🔴 KOSONG	Isi atau hapus
urlMappingJasaLampuInterior						0	-	🔴 KOSONG	Isi atau hapus
urlMappingJasaFinishingInteriorKlasik			11	✅	0	-
urlMappingJasaFinishingInteriorMinimalis		16	✅	0	-
urlMappingJasaInteriorFurnitureCustome			25	✅	0	-
urlMappingJasaFinishingInteriorModern			4	✅	0	-
urlMappingJasaFinishingInteriorModernWpc		12	✅	0	-
urlMappingJasaFinishingInteriorModernVinyl		20	✅	0	-
urlMappingJasaFinishingInteriorModernPvc		18	✅	0	-
urlMappingJasaFinishingInteriorModernPlafon		22	✅	0	-
urlMappingJasaKitchenSet						25	✅	0	-
*/
//AKHIR SUB JasaFinishingBangunanInteriorPost

//SUB JasaFinishingBangunanEksteriorPost
/*
📊 RINGKASAN STATUS
Const										Jumlah URL	Status				Keterangan
urlMappingJasaCatEksteriorRumah				0			⚠️ KOSONG			Perlu diisi atau dihapus
urlMappingJasaFinishingFasadEksterior		25+ URL		⚠️ PERLU REDIRECT	Banyak duplikasi intent (harga vs jasa, per lokasi)
urlMappingJasaPelapisanAntiCuaca			0			⚠️ KOSONG			Perlu diisi atau dihapus
urlMappingJasaPelapisanDindingLuar			0			⚠️ KOSONG			Perlu diisi atau dihapus
urlMappingJasaFinishingTamanRumah			8 URL		✅ VALID			Semua valid, intent berbeda
urlMappingJasaFinishingKanopiTeras			0			⚠️ KOSONG			Perlu diisi atau dihapus
urlMappingJasaPelapisanBatuAlamEksterior	0			⚠️ KOSONG			Perlu diisi atau dihapus
urlMappingJasaPelapisanGentengDak			0			⚠️ KOSONG			Perlu diisi atau dihapus
*/
// ============================================================
// JASA CAT EKSTERIOR RUMAH - KOSONG
// ============================================================
// 🧠 SEO NOTE: Const ini kosong. Disarankan untuk diisi atau dihapus.
// ============================================================

const urlMappingJasaCatEksteriorRumah = {
  // ============================================================
  // 🟡 SARAN: TAMBAHKAN URL BERIKUT (JIKA KONTEN MEMADAI)
  // ============================================================
  // "https://www.betonjayareadymix.com/p/jasa-cat-eksterior-rumah.html": "Jasa Cat Eksterior Rumah",
  // "https://www.betonjayareadymix.com/p/harga-cat-eksterior-rumah-per-meter.html": "Harga Cat Eksterior Rumah per Meter"
};

// ============================================================
// 🟡 SARAN UNTUK CONST KOSONG
// ============================================================
/*
📌 REKOMENDASI:

| Const | Status | Solusi | Prioritas |
|-------|--------|--------|-----------|
| urlMappingJasaCatEksteriorRumah | KOSONG | ⚠️ OPSI A: Isi dengan URL yang relevan ⚠️ OPSI B: Hapus const jika tidak digunakan | 🟢 LOW |

📌 URL YANG DISARANKAN (jika ingin diisi):
1. /p/jasa-cat-eksterior-rumah.html → [SUB2] - Jasa Cat Eksterior Rumah
2. /p/harga-cat-eksterior-rumah.html → [MONEY PAGE] - Harga Cat Eksterior Rumah
3. /p/jasa-cat-eksterior-rumah-jakarta.html → [MONEY PAGE] - Jasa Cat Eksterior Rumah Jakarta
*/
// ============================================================
// JASA FINISHING FASAD EKSTERIOR - BLOG POST
// ============================================================
// 🧠 SEO NOTE: Cluster ini fokus ke jasa profil beton, GRC, gypsum, dan ACP.
// Parent: Jasa Finishing Eksterior (/p/jasa-finishing-eksterior.html)
// ============================================================

const urlMappingJasaFinishingFasadEksterior = {
  // ============================================================
  // [MONEY PAGE] - HARGA PROFIL BETON (TRANSACTIONAL)
  // 🧠 SEO NOTE: Halaman ini berisi daftar harga jasa profil beton.
  // Breadcrumb: Home > Jasa Konstruksi > Jasa Finishing Eksterior > Harga Profil Beton (4 level)
  // ============================================================
  "https://www.betonjayareadymix.com/2018/09/harga-jasa-profil-beton.html": "Harga Jasa Profil Beton",
  "https://www.betonjayareadymix.com/2018/09/harga-jasa-profil-bangunan.html": "Harga Jasa Profil Bangunan",
  "https://www.betonjayareadymix.com/2018/09/harga-jasa-profil-rumah.html": "Harga Jasa Profil Rumah",
  
  // ============================================================
  // [MONEY PAGE] - HARGA & JASA ACP (TRANSACTIONAL)
  // 🧠 SEO NOTE: Halaman ini berisi informasi harga dan jasa pasang ACP.
  // ============================================================
  "https://www.betonjayareadymix.com/2020/01/harga-jasa-pasang-acp.html": "Harga Jasa Pasang ACP",
  "https://www.betonjayareadymix.com/2020/01/harga-jasa-pasang-acp-per-meter.html": "Harga Jasa Pasang ACP Per Meter",
  "https://www.betonjayareadymix.com/2020/01/harga-jasa-laser-cutting-acp.html": "Harga Jasa Laser Cutting ACP",
  "https://www.betonjayareadymix.com/2020/01/jasa-pasang-acp.html": "Jasa Pasang ACP",
  "https://www.betonjayareadymix.com/2020/01/jasa-pasang-acp-per-meter.html": "Jasa Pasang ACP per Meter",
  
  // ============================================================
  // [MONEY PAGE] - JASA ACP PER LOKASI (TRANSACTIONAL)
  // ============================================================
  "https://www.betonjayareadymix.com/2020/01/jasa-pasang-acp-jakarta.html": "Jasa Pasang ACP Jakarta",
  "https://www.betonjayareadymix.com/2020/01/jasa-pasang-acp-bogor.html": "Jasa Pasang ACP Bogor",
  "https://www.betonjayareadymix.com/2020/01/jasa-pasang-acp-depok.html": "Jasa Pasang ACP Depok",
  "https://www.betonjayareadymix.com/2020/01/jasa-pasang-acp-tangerang.html": "Jasa Pasang ACP Tangerang",
  "https://www.betonjayareadymix.com/2020/01/jasa-pasang-acp-bekasi.html": "Jasa Pasang ACP Bekasi",
  
  // ============================================================
  // [MONEY PAGE] - HARGA JASA ACP PER LOKASI (TRANSACTIONAL)
  // ============================================================
  "https://www.betonjayareadymix.com/2020/01/harga-jasa-pasang-acp-jakarta.html": "Harga Jasa Pasang ACP Jakarta",
  "https://www.betonjayareadymix.com/2020/01/harga-jasa-pasang-acp-bogor.html": "Harga Jasa Pasang ACP Bogor",
  "https://www.betonjayareadymix.com/2020/01/harga-jasa-pasang-acp-depok.html": "Harga Jasa Pasang ACP Depok",
  "https://www.betonjayareadymix.com/2020/01/harga-jasa-pasang-acp-tangerang.html": "Harga Jasa Pasang ACP Tangerang",
  "https://www.betonjayareadymix.com/2020/01/harga-jasa-pasang-acp-bekasi.html": "Harga Jasa Pasang ACP Bekasi",
  
  // ============================================================
  // [MONEY PAGE] - JASA ACP PER METER PER LOKASI (TRANSACTIONAL)
  // ============================================================
  "https://www.betonjayareadymix.com/2020/01/jasa-pasang-acp-per-meter-jakarta.html": "Jasa Pasang ACP per Meter Jakarta",
  "https://www.betonjayareadymix.com/2020/01/jasa-pasang-acp-per-meter-bogor.html": "Jasa Pasang ACP per Meter Bogor",
  "https://www.betonjayareadymix.com/2020/01/jasa-pasang-acp-per-meter-depok.html": "Jasa Pasang ACP per Meter Depok",
  "https://www.betonjayareadymix.com/2020/01/jasa-pasang-acp-per-meter-tangerang.html": "Jasa Pasang ACP per Meter Tangerang",
  "https://www.betonjayareadymix.com/2020/01/jasa-pasang-acp-per-meter-bekasi.html": "Jasa Pasang ACP per Meter Bekasi",
  
  // ============================================================
  // [SUB2] - JASA RELIEF DINDING (INFORMASIONAL)
  // 🧠 SEO NOTE: Halaman ini informasional, bukan transaksional.
  // Breadcrumb: Home > Jasa Konstruksi > Jasa Finishing Eksterior > Jasa Relief Dinding (4 level)
  // ============================================================
  "https://www.betonjayareadymix.com/2018/09/jasa-relief-dinding.html": "Jasa Relief Dinding",
  "https://www.betonjayareadymix.com/2018/09/jasa-pembuatan-relief-dinding.html": "Jasa Pembuatan Relief Dinding",
  
  // ============================================================
  // [MONEY PAGE] - JASA LASER CUTTING ACP (TRANSACTIONAL)
  // ============================================================
  "https://www.betonjayareadymix.com/2020/01/jasa-laser-cutting-acp.html": "Jasa Laser Cutting ACP"
};

// ============================================================
// 🔴 REDIRECT NOTES - DUPLIKASI INTENT
// ============================================================
/*
🧠 SEO CANNIBAL FIX - REDIRECT PLAN:

| No | From URL | To URL | Type | Alasan SEO |
|----|----------|--------|------|------------|
| 1 | /2020/01/jasa-pasang-acp.html | /2020/01/harga-jasa-pasang-acp.html | 301 | Duplikasi intent (jasa vs harga), cukup 1 harga master |
| 2 | /2020/01/jasa-pasang-acp-per-meter.html | /2020/01/harga-jasa-pasang-acp-per-meter.html | 301 | Duplikasi intent |
| 3 | /2020/01/jasa-laser-cutting-acp.html | /2020/01/harga-jasa-laser-cutting-acp.html | 301 | Duplikasi intent |

📌 CATATAN: 
- Halaman "harga-jasa-profil-beton.html", "harga-jasa-profil-bangunan.html", "harga-jasa-profil-rumah.html"
  TETAP dipertahankan karena masing-masing menarget keyword berbeda (beton, bangunan, rumah).
- Halaman ACP per lokasi TETAP dipertahankan karena menarget keyword spesifik per kota.
*/
// ============================================================
// JASA FINISHING TAMAN RUMAH - BLOG POST
// ============================================================
// 🧠 SEO NOTE: Cluster ini fokus ke jasa pembuatan taman.
// Parent: Jasa Finishing Eksterior (/p/jasa-finishing-eksterior.html)
// ============================================================

const urlMappingJasaFinishingTamanRumah = {
  // ============================================================
  // [MONEY PAGE] - JASA TAMAN (TRANSACTIONAL)
  // 🧠 SEO NOTE: Masing-masing halaman menarget keyword berbeda.
  // Breadcrumb: Home > Jasa Konstruksi > Jasa Finishing Eksterior > Jasa Taman (4 level)
  // ============================================================
  "https://www.betonjayareadymix.com/2018/09/jasa-relief-taman.html": "Jasa Relief Taman",
  "https://www.betonjayareadymix.com/2018/09/jasa-tukang-taman.html": "Jasa Tukang Taman",
  "https://www.betonjayareadymix.com/2018/09/jasa-taman-terdekat.html": "Jasa Taman Terdekat",
  "https://www.betonjayareadymix.com/2018/09/jasa-taman-murah.html": "Jasa Taman Murah",
  "https://www.betonjayareadymix.com/2018/09/jasa-pembuatan-taman.html": "Jasa Pembuatan Taman",
  "https://www.betonjayareadymix.com/2018/09/jasa-taman.html": "Jasa Taman",
  "https://www.betonjayareadymix.com/2018/09/jasa-pembuatan-taman-terdekat.html": "Jasa Pembuatan Taman Terdekat",
  "https://www.betonjayareadymix.com/2018/09/jasa-pembuatan-taman-rumah.html": "Jasa Pembuatan Taman Rumah"
};

// ============================================================
// 🟢 SEO NOTE - JASA TAMAN
// ============================================================
/*
✅ SEMUA URL di atas sudah valid dengan intent transaksional (MONEY PAGE).
✅ Masing-masing menarget keyword spesifik (taman terdekat, taman murah, dll).
✅ Tidak ada duplikasi intent yang signifikan.

📌 REKOMENDASI:
1. Pastikan setiap halaman memiliki konten minimal 500 kata
2. Tambahkan internal link antar sesama halaman taman
3. Pastikan ada CTA ke form pemesanan jasa taman
*/
// ============================================================
// CONST KOSONG - SARAN PERBAIKAN
// ============================================================

const urlMappingJasaPelapisanAntiCuaca = {
  // ============================================================
  // 🟡 SARAN: TAMBAHKAN URL BERIKUT (JIKA KONTEN MEMADAI)
  // ============================================================
  // "https://www.betonjayareadymix.com/p/jasa-pelapisan-anti-cuaca.html": "Jasa Pelapisan Anti Cuaca",
  // "https://www.betonjayareadymix.com/p/harga-pelapisan-anti-cuaca.html": "Harga Pelapisan Anti Cuaca"
};

const urlMappingJasaPelapisanDindingLuar = {
  // ============================================================
  // 🟡 SARAN: TAMBAHKAN URL BERIKUT (JIKA KONTEN MEMADAI)
  // ============================================================
  // "https://www.betonjayareadymix.com/p/jasa-pelapisan-dinding-luar.html": "Jasa Pelapisan Dinding Luar",
  // "https://www.betonjayareadymix.com/p/harga-pelapisan-dinding-luar.html": "Harga Pelapisan Dinding Luar"
};

const urlMappingJasaFinishingKanopiTeras = {
  // ============================================================
  // 🟡 SARAN: TAMBAHKAN URL BERIKUT (JIKA KONTEN MEMADAI)
  // ============================================================
  // "https://www.betonjayareadymix.com/p/jasa-finishing-kanopi-teras.html": "Jasa Finishing Kanopi Teras",
  // "https://www.betonjayareadymix.com/p/harga-finishing-kanopi-teras.html": "Harga Finishing Kanopi Teras"
};

const urlMappingJasaPelapisanBatuAlamEksterior = {
  // ============================================================
  // 🟡 SARAN: TAMBAHKAN URL BERIKUT (JIKA KONTEN MEMADAI)
  // ============================================================
  // "https://www.betonjayareadymix.com/p/jasa-pelapisan-batu-alam-eksterior.html": "Jasa Pelapisan Batu Alam Eksterior",
  // "https://www.betonjayareadymix.com/p/harga-pelapisan-batu-alam-eksterior.html": "Harga Pelapisan Batu Alam Eksterior"
};

const urlMappingJasaPelapisanGentengDak = {
  // ============================================================
  // 🟡 SARAN: TAMBAHKAN URL BERIKUT (JIKA KONTEN MEMADAI)
  // ============================================================
  // "https://www.betonjayareadymix.com/p/jasa-pelapisan-genteng-dak.html": "Jasa Pelapisan Genteng Dak",
  // "https://www.betonjayareadymix.com/p/harga-pelapisan-genteng-dak.html": "Harga Pelapisan Genteng Dak"
};

// ============================================================
// 🟡 SARAN UNTUK CONST KOSONG
// ============================================================
/*
📌 REKOMENDASI UNTUK KEEMPAT CONST KOSONG:

| Const | Status | Solusi | Prioritas |
|-------|--------|--------|-----------|
| urlMappingJasaPelapisanAntiCuaca | KOSONG | ⚠️ OPSI A: Isi dengan URL relevan ⚠️ OPSI B: Hapus const | 🟢 LOW |
| urlMappingJasaPelapisanDindingLuar | KOSONG | ⚠️ OPSI A: Isi dengan URL relevan ⚠️ OPSI B: Hapus const | 🟢 LOW |
| urlMappingJasaFinishingKanopiTeras | KOSONG | ⚠️ OPSI A: Isi dengan URL relevan ⚠️ OPSI B: Hapus const | 🟢 LOW |
| urlMappingJasaPelapisanBatuAlamEksterior | KOSONG | ⚠️ OPSI A: Isi dengan URL relevan ⚠️ OPSI B: Hapus const | 🟢 LOW |
| urlMappingJasaPelapisanGentengDak | KOSONG | ⚠️ OPSI A: Isi dengan URL relevan ⚠️ OPSI B: Hapus const | 🟢 LOW |

📌 CATATAN: Jika tidak memiliki konten untuk layanan ini, lebih baik hapus const
daripada membiarkan kosong. Const kosong tidak mempengaruhi SEO secara langsung,
tetapi dapat membingungkan developer/maintainer.
*/
/*
📋 RINGKASAN SARAN & TINDAKAN
No	Tindakan											Target	Prioritas
1	Redirect duplikasi ACP (jasa → harga)				3 URL	🟡 MEDIUM
2	Isi atau hapus const kosong							6 const	🟢 LOW
3	Pertahankan semua URL taman (sudah valid)			8 URL	✅
4	Pertahankan semua URL profil beton (sudah valid)	3 URL	✅
5	Pertahankan URL ACP per lokasi (spesifik)			15 URL	✅
✅ STATUS FINAL
Const										Jumlah URL	Valid	Perlu Redirect	Kosong
urlMappingJasaCatEksteriorRumah				0			0		0				⚠️ 1
urlMappingJasaFinishingFasadEksterior		25+			22		3				0
urlMappingJasaPelapisanAntiCuaca			0			0		0				⚠️ 1
urlMappingJasaPelapisanDindingLuar			0			0		0				⚠️ 1
urlMappingJasaFinishingTamanRumah			8			8		0				0
urlMappingJasaFinishingKanopiTeras			0			0		0				⚠️ 1
urlMappingJasaPelapisanBatuAlamEksterior	0			0		0				⚠️ 1
urlMappingJasaPelapisanGentengDak			0			0		0				⚠️ 1

*/
//AKHIR SUB JasaFinishingBangunanEksteriorPost

/*
const urlMappingFinishingInfrastruktur = {

  "https://www.betonjayareadymix.com/p/jasa-finishing-jalan-jembatan.html": "Jasa Finishing Jalan Jembatan",
  "https://www.betonjayareadymix.com/p/jasa-finishing-trotoar-area-publik.html": "Jasa Finishing Trotoar Area Publik",
  "https://www.betonjayareadymix.com/p/jasa-finishing-saluran-drainase.html": "Jasa Finishing Saluran Drainase",
  "https://www.betonjayareadymix.com/p/jasa-finishing-struktur-utilitas.html": "Jasa Finishing Struktur Utilitas",
  "https://www.betonjayareadymix.com/p/jasa-finishing-proteksi-beton.html": "Jasa Finishing Proteksi Beton"

};

const urlMappingFinishingInfrastrukturJalan = {

 "https://www.betonjayareadymix.com/p/jasa-finishing-jembatan-beton.html": "Jasa Finishing Jembatan Beton",
  "https://www.betonjayareadymix.com/p/jasa-finishing-jalan-beton.html": "Jasa Finishing Jalan Beton",
  "https://www.betonjayareadymix.com/p/jasa-pengecatan-marking-jalan.html": "Jasa Pengecatan Marking Jalan",
  "https://www.betonjayareadymix.com/p/jasa-pelapisan-jalan-tol.html": "Jasa Pelapisan Jalan Tol",
  "https://www.betonjayareadymix.com/p/jasa-coating-jembatan.html": "Jasa Coating Jembatan"
};

const urlMappingFinishingInfrastrukturTrotoar = {
 "https://www.betonjayareadymix.com/p/jasa-finishing-trotoar.html": "Jasa Finishing Trotoar",
  "https://www.betonjayareadymix.com/p/jasa-penataan-trotoar-beton.html": "Jasa Penataan Trotoar Beton",
  "https://www.betonjayareadymix.com/p/jasa-epoxy-area-publik.html": "Jasa Epoxy Area Publik",
  "https://www.betonjayareadymix.com/p/jasa-pelapisan-area-pejalan-kaki.html": "Jasa Pelapisan Area Pejalan Kaki"
};

const urlMappingFinishingInfrastrukturSaluran = {
  "https://www.betonjayareadymix.com/p/jasa-coating-gorong-gorong.html": "Jasa Coating Gorong Gorong",
  "https://www.betonjayareadymix.com/p/jasa-pelapisan-saluran-beton.html": "Jasa Pelapisan Saluran Beton",
  "https://www.betonjayareadymix.com/p/jasa-waterproofing-saluran-air.html": "Jasa Waterproofing Saluran Air",
  "https://www.betonjayareadymix.com/p/jasa-finishing-penutup-saluran.html": "Jasa Finishing Penutup Saluran"

};

const urlMappingFinishingInfrastrukturStruktur = {
 "https://www.betonjayareadymix.com/p/jasa-finishing-rumah-pompa.html": "Jasa Finishing Rumah Pompa",
  "https://www.betonjayareadymix.com/p/jasa-pelapisan-box-utilitas.html": "Jasa Pelapisan Box Utilitas",
  "https://www.betonjayareadymix.com/p/jasa-epoxy-struktur-publik.html": "Jasa Epoxy Struktur Publik",
  "https://www.betonjayareadymix.com/p/jasa-finishing-penutup-kabel-beton.html": "Jasa Finishing Penutup Kabel Beton"

};

const urlMappingFinishingInfrastrukturProteksi = {
 "https://www.betonjayareadymix.com/p/jasa-pelapisan-anti-karat-beton.html": "Jasa Pelapisan Anti Karat Beton",
  "https://www.betonjayareadymix.com/p/jasa-epoxy-beton-luar-ruang.html": "Jasa Epoxy Beton Luar Ruang",
  "https://www.betonjayareadymix.com/p/jasa-proteksi-struktur-beton-luar.html": "Jasa Proteksi Struktur Beton Luar",
  "https://www.betonjayareadymix.com/p/jasa-finishing-khusus-cuaca-ekstrem.html": "Jasa Finishing Khusus Cuaca Ekstrem"

};
*/

// Menyimpan elemen yang dihapus dalam variabel
let removedElementsJasaKonsFinishingPost = {};
// Fungsi untuk menghapus elemen berdasarkan ID
function removeCondition(conditionId) {
    const conditionElement = document.getElementById(conditionId);

    if (conditionElement) {
        // Menyimpan elemen yang dihapus dalam objek untuk bisa dikembalikan
        removedElementsJasaKonsFinishingPost[conditionId] = conditionElement;
        conditionElement.remove(); // Menghapus elemen tersebut
    }
}

// Fungsi untuk mengembalikan elemen yang telah dihapus
function restoreCondition(conditionId) {
    const breadcrumb = document.querySelector('.breadcrumb');
    const elementToRestore = removedElementsJasaKonsFinishingPost[conditionId]; // Mendapatkan elemen yang disimpan

    if (elementToRestore) {
        breadcrumb.appendChild(elementToRestore); // Menambahkan elemen kembali ke dalam breadcrumb
        delete removedElementsJasaKonsFinishingPost[conditionId]; // Menghapus elemen dari objek setelah dikembalikan
    } else {
        console.log(`Elemen dengan ID ${conditionId} tidak ditemukan di removedElementsJasaKonsFinishingPost.`);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    // var currentUrl = window.location.href;
     //const cleanUrl = currentUrl.split('?')[0]; // Menghapus parameter seperti ?m=1
    const cleanUrlJasaKonsFinishingPost = window.location.href.split(/[?#]/)[0]; // Menghilangkan parameter seperti ?m=1

	
   const urlMappingGabungan = Object.assign(
    {},
    urlMappingJasaFinishingDakBeton,
    urlMappingJasaFinishingBetonExpose,
    urlMappingJasaPlesteranAcianDinding,
    urlMappingJasaFinishingGroutingStrukturBeton,
    urlMappingJasaPelapisanCoatingStruktur,
    urlMappingJasaFinishingKolomBalok,
    urlMappingJasaPelapisanWaterproofingStruktur,
    urlMappingJasaFinishingLantaiBeton,
    urlMappingJasaEpoxyDinding,
    urlMappingJasaEpoxyLantai,
    urlMappingJasaPelindungRetakStruktur,
    urlMappingJasaInteriordanFurnitureCustome,
    urlMappingJasaKeramikLantai,
    urlMappingJasaCatInteriorRumah,
    urlMappingJasaPasangWallpaperDinding,
    urlMappingJasaLampuInterior,
    urlMappingJasaFinishingInteriorKlasik,
    urlMappingJasaFinishingInteriorMinimalis,
    urlMappingJasaInteriorFurnitureCustome,
    urlMappingJasaFinishingInteriorModern,
    urlMappingJasaFinishingInteriorModernWpc,
    urlMappingJasaFinishingInteriorModernVinyl,
    urlMappingJasaFinishingInteriorModernPvc,
    urlMappingJasaFinishingInteriorModernPlafon,
    urlMappingJasaKitchenSet,
    urlMappingJasaCatEksteriorRumah,
    urlMappingJasaFinishingFasadEksterior,
    urlMappingJasaPelapisanAntiCuaca,
    urlMappingJasaPelapisanDindingLuar,
    urlMappingJasaFinishingTamanRumah,
    urlMappingJasaFinishingKanopiTeras,
    urlMappingJasaPelapisanBatuAlamEksterior,
    urlMappingJasaPelapisanGentengDak
);

// --- validasi URL terdaftar ---
if (!urlMappingGabungan[cleanUrlJasaKonsFinishingPost]) {
    console.log(`[HybridDateModified] URL tidak terdaftar: ${cleanUrlJasaKonsFinishingPost}`);
    return;
}
		/* ==========================================================
   🧩 HybridDateModified v2.5 — StableHash + Safe Load Order
   Fitur:
   - Menjamin detect-evergreen.js dimuat lebih dulu
   - Update <meta dateModified> hanya jika URL terdaftar
   - Stable hash → hasil dateModified konsisten
   ========================================================== */	  
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
		    await loadEvergreenScript("2026-01-16T10:30:00+07:00");
		
		    // ✔ AUTO MODE
		    // await loadEvergreenScript();
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
			
			    const hash = stableHash(cleanUrlJasaKonsFinishingPost);
			    const offsetSeconds = hash % 86400;
			    const finalDate = new Date(new Date(dateModified).getTime() + offsetSeconds * 1000);
			    const isoDate = toISOWithTimezoneLocal(finalDate);
			
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
				
				console.log("✅ AEDMetaDates updated jasa-pengeboran-post:", window.AEDMetaDates);
			    console.log(`✅ [HybridDateModified v2.5] ${cleanUrlJasaKonsFinishingPost} → ${isoDate} | type=${type || "-"}`);
			
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
		    console.error("[HybridDateModified] Fatal:", err);
		  }
		})();

     // Menemukan elemen menggunakan Id
    var JasaKonsFinishingPost = document.getElementById("JasaKonsFinishingPost");
    if (!JasaKonsFinishingPost) {
        console.log("elemen Id JasaKonsFinishing kondisi terhapus");
        return;
    }

     var JasaKonstruksiFinishingPostLink = document.getElementById("JasaKonstruksiFinishingPost");
     var JasaFinishingPostLink = document.getElementById("JasaFinishingPost");
     var JasaFinishingBangunanPostLink = document.getElementById("JasaFinishingBangunanPost");
     var JasaFinishingInfrastrukturPostLink = document.getElementById("JasaFinishingInfrastrukturPost");
    //sub finishing bangunan
	
    var JasaFinishingInteriorPostLink = document.getElementById("JasaFinishingBangunanInteriorPost");
    var JasaFinishingBangunanEksteriorPostLink = document.getElementById("JasaFinishingBangunanEksteriorPost");
    var JasaFinishingStrukturPostLink = document.getElementById("JasaFinishingBangunanStrukturPost");
	
   //SUB JasaFinishingBangunanInteriorPosT
   //var JasaBoronganLantaiPostLink = document.getElementById("JasaBoronganLantaiPost");
   var JasaEpoxyDindingPostLink = document.getElementById("JasaEpoxyDindingPost");
   var JasaEpoxyLantaiPostLink = document.getElementById("JasaEpoxyLantaiPost");
   var JasaFinishingDakBetonPostLink = document.getElementById("JasaFinishingDakBetonPost");
   var JasaInteriorFurnitureCustomePostLink = document.getElementById("JasaInteriorFurnitureCustomePost");
   var JasaGantiKeramikLantaiPostLink = document.getElementById("JasaGantiKeramikLantaiPost");
   var JasaCatInteriorRumahPostLink = document.getElementById("JasaCatInteriorRumahPost");
   var JasaPasangWallpaperDindingPostLink = document.getElementById("JasaPasangWallpaperDindingPost");
   //var JasaPasangLantaiVinylPostLink = document.getElementById("JasaPasangLantaiVinylPost");
   //var JasaPasangPlafonGypsumPostLink = document.getElementById("JasaPasangPlafonGypsumPost");
   var JasaGantiLampuInteriorPostLink = document.getElementById("JasaGantiLampuInteriorPost");
   var JasaGantiKitchenSetPostLink = document.getElementById("JasaGantiKitchenSetPost");
   var JasaFinishingInteriorMinimalisPostLink = document.getElementById("JasaFinishingInteriorMinimalisPost");
   var JasaFinishingInteriorKlasikPostLink = document.getElementById("JasaFinishingInteriorKlasikPost");
   var JasaFinishingInteriorModernPostLink = document.getElementById("JasaFinishingInteriorModernPost");
	   	var JasaFinishingInteriorModernWpcPostLink = document.getElementById("JasaFinishingInteriorModernWpcPost");
		var JasaFinishingInteriorModernVinylPostLink = document.getElementById("JasaFinishingInteriorModernVinylPost");
		var JasaFinishingInteriorModernPlafonPostLink = document.getElementById("JasaFinishingInteriorModernPlafonPost");
		var JasaFinishingInteriorModernPvcPostLink = document.getElementById("JasaFinishingInteriorModernPvcPost");
   //SUB JasaFinishingBangunanStrukturPost
   var JasaFinishingBetonExposePostLink = document.getElementById("JasaFinishingBetonExposePost");
   var JasaPlesteranAcianDindingPostLink = document.getElementById("JasaPlesteranAcianDindingPost");
   var JasaFinishingGroutingStrukturBetonPostLink = document.getElementById("JasaFinishingGroutingStrukturBetonPost");
   var JasaPelapisanCoatingStrukturPostLink = document.getElementById("JasaPelapisanCoatingStrukturPost");
   var JasaFinishingKolomdanBalokPostLink = document.getElementById("JasaFinishingKolomdanBalokPost");
   var JasaPelapisanWaterproofingStrukturPostLink = document.getElementById("JasaPelapisanWaterproofingStrukturPost");
   var JasaFinishingLantaiBetonPostLink = document.getElementById("JasaFinishingLantaiBetonPost");
   var JasaPelindungRetakStrukturPostLink = document.getElementById("JasaPelindungRetakStrukturPost");
   //SUB JasaFinishingBangunanEksteriorPost
   var JasaCatEksteriorRumahPostLink = document.getElementById("JasaCatEksteriorRumahPost");
   var JasaFinishingFasadEksteriorPostLink = document.getElementById("JasaFinishingFasadEksteriorPost");
   var JasaPelapisanAntiCuacaPostLink = document.getElementById("JasaPelapisanAntiCuacaPost");
   var JasaPelapisanDindingLuarPostLink = document.getElementById("JasaPelapisanDindingLuarPost");
   var JasaFinishingTamanRumahPostLink = document.getElementById("JasaFinishingTamanRumahPost");
   var JasaPelapisanBatuAlamEksteriorPostLink = document.getElementById("JasaPelapisanBatuAlamEksteriorPost");
   var JasaPelapisanGentengDakPostLink = document.getElementById("JasaPelapisanGentengDakPost");
	
    //sub finishing infrastruktur
    var JasaFinishingJalanPostLink = document.getElementById("JasaFinishingInfrastrukturJalanPost");
    var JasaFinishingTrotoarPostLink = document.getElementById("JasaFinishingInfrastrukturTrotoarPost");
    var JasaFinishingSaluranPostLink = document.getElementById("JasaFinishingInfrastrukturSaluranPost");
    var JasaFinishingStrukturPostLink = document.getElementById("JasaFinishingInfrastrukturStrukturPost");
    var JasaFinishingProteksiPostLink = document.getElementById("JasaFinishingInfrastrukturProteksiPost");

   //HIDE sub JasaFinishingBangunanInteriorPost
	//JasaBoronganLantaiPostLink.style.visibility = 'hidden';
	JasaEpoxyDindingPostLink.style.visibility = 'hidden';
	JasaEpoxyLantaiPostLink.style.visibility = 'hidden';
    JasaInteriorFurnitureCustomePostLink.style.visibility = 'hidden';
    JasaGantiKeramikLantaiPostLink.style.visibility = 'hidden';
    JasaCatInteriorRumahPostLink.style.visibility = 'hidden';
    JasaPasangWallpaperDindingPostLink.style.visibility = 'hidden';
   // JasaPasangLantaiVinylPostLink.style.visibility = 'hidden';
    //JasaPasangPlafonGypsumPostLink.style.visibility = 'hidden';
    JasaGantiLampuInteriorPostLink.style.visibility = 'hidden';
    JasaGantiKitchenSetPostLink.style.visibility = 'hidden';
    JasaFinishingInteriorMinimalisPostLink.style.visibility = 'hidden';
    JasaFinishingInteriorKlasikPostLink.style.visibility = 'hidden';
    JasaFinishingInteriorModernPostLink.style.visibility = 'hidden';
   		JasaFinishingInteriorModernWpcPostLink.style.visibility = 'hidden';
		JasaFinishingInteriorModernVinylPostLink.style.visibility = 'hidden';
		JasaFinishingInteriorModernPlafonPostLink.style.visibility = 'hidden';
		JasaFinishingInteriorModernPvcPostLink.style.visibility = 'hidden';
	
     //HIDE sub JasaFinishingBangunanStrukturPost
    JasaPlesteranAcianDindingPostLink.style.visibility = 'hidden';
    JasaFinishingBetonExposePostLink.style.visibility = 'hidden';
    JasaFinishingGroutingStrukturBetonPostLink.style.visibility = 'hidden';
    JasaPelapisanCoatingStrukturPostLink.style.visibility = 'hidden';
    JasaFinishingKolomdanBalokPostLink.style.visibility = 'hidden';
    JasaPelapisanWaterproofingStrukturPostLink.style.visibility = 'hidden';
    JasaFinishingLantaiBetonPostLink.style.visibility = 'hidden';
    JasaPelindungRetakStrukturPostLink.style.visibility = 'hidden';

    //HIDE sub JasaFinishingBangunanEksteriorPost
    JasaCatEksteriorRumahPostLink.style.visibility = 'hidden';
    JasaFinishingFasadEksteriorPostLink.style.visibility = 'hidden';
    JasaPelapisanAntiCuacaPostLink.style.visibility = 'hidden';
    JasaPelapisanDindingLuarPostLink.style.visibility = 'hidden';
    JasaFinishingTamanRumahPostLink.style.visibility = 'hidden';
    JasaPelapisanBatuAlamEksteriorPostLink.style.visibility = 'hidden';
    JasaPelapisanGentengDakPostLink.style.visibility = 'hidden';
   
    var pageNameJasaKonsFinishingPostLink = document.getElementById("pageNameJasaKonsFinishingPost");
	
     // Default untuk menyembunyikan elemen
     JasaKonstruksiFinishingPostLink.style.visibility = 'hidden';
     JasaFinishingPostLink.style.visibility = 'hidden';
     JasaFinishingBangunanPostLink.style.visibility = 'hidden';
     JasaFinishingInfrastrukturPostLink.style.visibility = 'hidden';
     pageNameJasaKonsFinishingPostLink.textContent = "";

    //SUB FINISHING BANGUNAN
	//FINISHING STRUKTUR
if (urlMappingJasaFinishingDakBeton[cleanUrlJasaKonsFinishingPost]) {
        //restoreCondition('JasaFinishingBangunanPost');
        //restoreCondition('JasaFinishingBangunanStrukturPost');
         restoreCondition('JasaFinishingSubPost');
        restoreCondition('JasaFinishingDakBetonPost');
           
	// hapus elemen id DIV Lain SELAIN JasaKonsFinishingPost
	removeCondition('JasaDesInPost');
        removeCondition('ProdukInFurPost');
        removeCondition('ProdukKonsSaluranPost');
        removeCondition('ProdukKonsPembatasPost');
        removeCondition('ProdukKonsDindingModularPost');
        removeCondition('ProdukKonsPost');
        removeCondition('MaterialKonsStukturPost');
        removeCondition('MaterialKonsFasadPelapisEksteriorPost');
	removeCondition('MaterialKonsAtapPenutupPost');
        removeCondition('JasaKonsPerkuatanTanahLongsorPost');
        removeCondition('JasaKonsPondasiTanahPost');
        removeCondition('JasaKonsPembatasPost');
        removeCondition('JasaKonsPerbaikanPost');
        removeCondition('JasaKonsCuttingBetonPost');
        removeCondition('JasaKonsPengeboranPost');
        removeCondition('JasaKonsBongkarBangunanPost');
        removeCondition('JasaKonsStrukturPost');
        removeCondition('JasaKonsAlatKonstruksiPost');
        removeCondition('JasaKonsJalanPerkerasanPost');
	    
     //   removeCondition('JasaKonsFinishingPost');

	 // hapus elemen id FINISHING STRUKTUR lain NYA SELAIN JasaFinishingBetonExposePost
	removeCondition('JasaFinishingBetonExposePost');
        removeCondition('JasaFinishingLantaiBetonPost');
        //removeCondition('JasaPlesteranAcianDindingPost');
        removeCondition('JasaFinishingGroutingStrukturBetonPost');
        removeCondition('JasaPelapisanCoatingStrukturPost');
        removeCondition('JasaFinishingKolomdanBalokPost');
        removeCondition('JasaPelapisanWaterproofingStrukturPost');
        removeCondition('JasaPlesteranAcianDindingPost');
        removeCondition('JasaPelindungRetakStrukturPost');
         // hapus elemen id sub JasaFinishingBangunanInteriorPost Semua
	    
	    removeCondition('JasaEpoxyDindingPost');
		removeCondition('JasaEpoxyLantaiPost');
		
        removeCondition('JasaInteriorFurnitureCustomePost');
	removeCondition('JasaInteriorFurniturePost');
        removeCondition('JasaGantiKeramikLantaiPost');
        removeCondition('JasaCatInteriorRumahPost');
        removeCondition('JasaPasangWallpaperDindingPost');
        //removeCondition('JasaPasangLantaiVinylPost');
        //removeCondition('JasaPasangPlafonGypsumPost');
        removeCondition('JasaGantiLampuInteriorPost');
        removeCondition('JasaGantiKitchenSetPost');
        removeCondition('JasaFinishingInteriorMinimalisPost');
        removeCondition('JasaFinishingInteriorKlasikPost');
        removeCondition('JasaFinishingInteriorModernPost');
         // hapus elemen id sub JasaFinishingBangunanEksteriorPost Semua
        removeCondition('JasaCatEksteriorRumahPost');
        removeCondition('JasaFinishingFasadEksteriorPost');
        removeCondition('JasaPelapisanAntiCuacaPost');
        removeCondition('JasaPelapisanDindingLuarPost');
        removeCondition('JasaFinishingTamanRumahPost');
        removeCondition('JasaPelapisanBatuAlamEksteriorPost');
        removeCondition('JasaPelapisanGentengDakPost');

	    //skip level pillar utama buat money
        removeCondition('JasaKonstruksiFinishingPostLink');
	  //skip juga
        removeCondition('JasaFinishingStrukturPost');
        removeCondition('JasaFinishingBangunanPost');
	   
         // hapus elemen id FINISHING UTAMA lain NYA
        removeCondition('JasaFinishingBangunanEksteriorPost');
        removeCondition('JasaFinishingBangunanInteriorPost');

          // hapus elemen id Infrastruktur Semua
        removeCondition('JasaFinishingInfrastrukturPost');
        removeCondition('JasaFinishingInfrastrukturJalanPost');
        removeCondition('JasaFinishingInfrastrukturTrotoarPost');
        removeCondition('JasaFinishingInfrastrukturSaluranPost');
        removeCondition('JasaFinishingInfrastrukturStrukturPost');
        removeCondition('JasaFinishingInfrastrukturProteksiPost');

	   // hapus SEMUA SUB JASA FINSING INTERIOR MODERN 
	   removeCondition('JasaFinishingInteriorModernWpcPost');
	   removeCondition('JasaFinishingInteriorModernVinylPost');
	   removeCondition('JasaFinishingInteriorModernPlafonPost');
	   removeCondition('JasaFinishingInteriorModernPvcPost');
	
        JasaKonstruksiFinishingPostLink.style.visibility = 'visible';
        JasaFinishingPostLink.style.visibility = 'visible';
        //JasaFinishingBangunanPostLink.style.visibility = 'visible';
        //sub finishing bangunan
        //JasaFinishingStrukturPostLink.style.visibility = 'visible';
        //sub finishing STRUKKTUR
        JasaFinishingDakBetonPostLink.style.visibility = 'visible';
        pageNameJasaKonsFinishingPostLink.textContent = urlMappingJasaFinishingDakBeton[cleanUrlJasaKonsFinishingPost];
    }
// ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaFinishingDakBeton[cleanUrlJasaKonsFinishingPost]) {
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
			   /*skip level pillar buat money
               {
                   "@type": "ListItem",
                   "position": 2,
                   "name": "Jasa Konstruksi",
                   "item": "https://www.betonjayareadymix.com/p/jasa-konstruksi.html"
               },
			   */
               {
                   "@type": "ListItem",
                   "position": 2,
                   "name": "Jasa Finishing",
                   "item": "https://www.betonjayareadymix.com/p/jasa-finishing.html"
               },
			   /*skip level
               {
                   "@type": "ListItem",
                   "position": 4,
                   "name": "Jasa Finishing Bangunan",
                   "item": "https://www.betonjayareadymix.com/p/jasa-finishing-bangunan.html"
               },
               {
                   "@type": "ListItem",
                   "position": 5,
                   "name": "Jasa Finishing Struktur",
                   "item": "https://www.betonjayareadymix.com/p/jasa-finishing-struktur.html"
               },
			   */
               {
                   "@type": "ListItem",
                   "position": 3,
                   "name": "Jasa Finishing Dak Beton",
                   "item": "https://www.betonjayareadymix.com/p/jasa-finishing-dak-beton.html"
               },
               {
                   "@type": "ListItem",
                   "position": 4,
                   "name": urlMappingJasaFinishingDakBeton[cleanUrlJasaKonsFinishingPost],
                   "item": cleanUrlJasaKonsFinishingPost
               }
           ]
       };
   	const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
	
    if (urlMappingJasaFinishingBetonExpose[cleanUrlJasaKonsFinishingPost]) {
        restoreCondition('JasaFinishingBangunanPost');
        restoreCondition('JasaFinishingBangunanStrukturPost');
    
        restoreCondition('JasaFinishingBetonExposePost');
           
	// hapus elemen id DIV Lain SELAIN JasaKonsFinishingPost
	removeCondition('JasaDesInPost');
        removeCondition('ProdukInFurPost');
        removeCondition('ProdukKonsSaluranPost');
        removeCondition('ProdukKonsPembatasPost');
        removeCondition('ProdukKonsDindingModularPost');
        removeCondition('ProdukKonsPost');
        removeCondition('MaterialKonsStukturPost');
        removeCondition('MaterialKonsFasadPelapisEksteriorPost');
	removeCondition('MaterialKonsAtapPenutupPost');
        removeCondition('JasaKonsPerkuatanTanahLongsorPost');
        removeCondition('JasaKonsPondasiTanahPost');
        removeCondition('JasaKonsPembatasPost');
        removeCondition('JasaKonsPerbaikanPost');
        removeCondition('JasaKonsCuttingBetonPost');
        removeCondition('JasaKonsPengeboranPost');
        removeCondition('JasaKonsBongkarBangunanPost');
        removeCondition('JasaKonsStrukturPost');
        removeCondition('JasaKonsAlatKonstruksiPost');
        removeCondition('JasaKonsJalanPerkerasanPost');
     //   removeCondition('JasaKonsFinishingPost');

	 // hapus elemen id FINISHING STRUKTUR lain NYA SELAIN JasaFinishingBetonExposePost
	removeCondition('JasaFinishingDakBetonPost');
        removeCondition('JasaFinishingLantaiBetonPost');
        //removeCondition('JasaPlesteranAcianDindingPost');
        removeCondition('JasaFinishingGroutingStrukturBetonPost');
        removeCondition('JasaPelapisanCoatingStrukturPost');
        removeCondition('JasaFinishingKolomdanBalokPost');
        removeCondition('JasaPelapisanWaterproofingStrukturPost');
        removeCondition('JasaPlesteranAcianDindingPost');
        removeCondition('JasaPelindungRetakStrukturPost');
         // hapus elemen id sub JasaFinishingBangunanInteriorPost Semua
		
		removeCondition('JasaEpoxyDindingPost');
		removeCondition('JasaEpoxyLantaiPost');
        removeCondition('JasaInteriorFurnitureCustomePost');
        removeCondition('JasaGantiKeramikLantaiPost');
        removeCondition('JasaCatInteriorRumahPost');
        removeCondition('JasaPasangWallpaperDindingPost');
        //removeCondition('JasaPasangLantaiVinylPost');
        //removeCondition('JasaPasangPlafonGypsumPost');
        removeCondition('JasaGantiLampuInteriorPost');
        removeCondition('JasaGantiKitchenSetPost');
        removeCondition('JasaFinishingInteriorMinimalisPost');
        removeCondition('JasaFinishingInteriorKlasikPost');
        removeCondition('JasaFinishingInteriorModernPost');
         // hapus elemen id sub JasaFinishingBangunanEksteriorPost Semua
        removeCondition('JasaCatEksteriorRumahPost');
        removeCondition('JasaFinishingFasadEksteriorPost');
        removeCondition('JasaPelapisanAntiCuacaPost');
        removeCondition('JasaPelapisanDindingLuarPost');
        removeCondition('JasaFinishingTamanRumahPost');
        removeCondition('JasaPelapisanBatuAlamEksteriorPost');
        removeCondition('JasaPelapisanGentengDakPost');
      
         // hapus elemen id FINISHING UTAMA lain NYA
        removeCondition('JasaFinishingBangunanEksteriorPost');
        removeCondition('JasaFinishingBangunanInteriorPost');

          // hapus elemen id Infrastruktur Semua
        removeCondition('JasaFinishingInfrastrukturPost');
        removeCondition('JasaFinishingInfrastrukturJalanPost');
        removeCondition('JasaFinishingInfrastrukturTrotoarPost');
        removeCondition('JasaFinishingInfrastrukturSaluranPost');
        removeCondition('JasaFinishingInfrastrukturStrukturPost');
        removeCondition('JasaFinishingInfrastrukturProteksiPost');

		// hapus SEMUA SUB JASA FINSING INTERIOR MODERN 
	   removeCondition('JasaFinishingInteriorModernWpcPost');
	   removeCondition('JasaFinishingInteriorModernVinylPost');
	   removeCondition('JasaFinishingInteriorModernPlafonPost');
	   removeCondition('JasaFinishingInteriorModernPvcPost');
		
        JasaKonstruksiFinishingPostLink.style.visibility = 'visible';
        JasaFinishingPostLink.style.visibility = 'visible';
        JasaFinishingBangunanPostLink.style.visibility = 'visible';
        //sub finishing bangunan
        JasaFinishingStrukturPostLink.style.visibility = 'visible';
        //sub finishing STRUKKTUR
        JasaFinishingBetonExposePostLink.style.visibility = 'visible';
        pageNameJasaKonsFinishingPostLink.textContent = urlMappingJasaFinishingBetonExpose[cleanUrlJasaKonsFinishingPost];
    }

// ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaFinishingBetonExpose[cleanUrlJasaKonsFinishingPost]) {
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
                   "name": "Jasa Finishing",
                   "item": "https://www.betonjayareadymix.com/p/jasa-finishing.html"
               },
               {
                   "@type": "ListItem",
                   "position": 4,
                   "name": "Jasa Finishing Bangunan",
                   "item": "https://www.betonjayareadymix.com/p/jasa-finishing-bangunan.html"
               },
               {
                   "@type": "ListItem",
                   "position": 5,
                   "name": "Jasa Finishing Struktur",
                   "item": "https://www.betonjayareadymix.com/p/jasa-finishing-struktur.html"
               },
               {
                   "@type": "ListItem",
                   "position": 6,
                   "name": "Jasa Finishing Beton Expose",
                   "item": "https://www.betonjayareadymix.com/p/jasa-finishing-beton-expose.html"
               },
               {
                   "@type": "ListItem",
                   "position": 7,
                   "name": urlMappingJasaFinishingBetonExpose[cleanUrlJasaKonsFinishingPost],
                   "item": cleanUrlJasaKonsFinishingPost
               }
           ]
       };
       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
  if (urlMappingJasaFinishingLantaiBeton[cleanUrlJasaKonsFinishingPost]) {
        restoreCondition('JasaFinishingBangunanPost');
        restoreCondition('JasaFinishingBangunanStrukturPost');
    
        restoreCondition('JasaFinishingLantaiBetonPost');
           
	// hapus elemen id DIV Lain SELAIN JasaKonsFinishingPost
	removeCondition('JasaDesInPost');
        removeCondition('ProdukInFurPost');
        removeCondition('ProdukKonsSaluranPost');
        removeCondition('ProdukKonsPembatasPost');
        removeCondition('ProdukKonsDindingModularPost');
        removeCondition('ProdukKonsPost');
        removeCondition('MaterialKonsStukturPost');
        removeCondition('MaterialKonsFasadPelapisEksteriorPost');
	removeCondition('MaterialKonsAtapPenutupPost');
        removeCondition('JasaKonsPerkuatanTanahLongsorPost');
        removeCondition('JasaKonsPondasiTanahPost');
        removeCondition('JasaKonsPembatasPost');
        removeCondition('JasaKonsPerbaikanPost');
        removeCondition('JasaKonsCuttingBetonPost');
        removeCondition('JasaKonsPengeboranPost');
        removeCondition('JasaKonsBongkarBangunanPost');
        removeCondition('JasaKonsStrukturPost');
        removeCondition('JasaKonsAlatKonstruksiPost');
        removeCondition('JasaKonsJalanPerkerasanPost');
     //   removeCondition('JasaKonsFinishingPost');

	 // hapus elemen id FINISHING STRUKTUR lain NYA SELAIN JasaPlesteranAcianDindingPost
	removeCondition('JasaFinishingDakBetonPost');
        removeCondition('JasaFinishingBetonExposePost');
        //removeCondition('JasaPlesteranAcianDindingPost');
        removeCondition('JasaFinishingGroutingStrukturBetonPost');
        removeCondition('JasaPelapisanCoatingStrukturPost');
        removeCondition('JasaFinishingKolomdanBalokPost');
        removeCondition('JasaPelapisanWaterproofingStrukturPost');
        removeCondition('JasaPlesteranAcianDindingPost');
        removeCondition('JasaPelindungRetakStrukturPost');
         // hapus elemen id sub JasaFinishingBangunanInteriorPost Semua
	  
	   removeCondition('JasaEpoxyDindingPost');
	  removeCondition('JasaEpoxyLantaiPost');
        removeCondition('JasaInteriorFurnitureCustomePost');
        removeCondition('JasaGantiKeramikLantaiPost');
        removeCondition('JasaCatInteriorRumahPost');
        removeCondition('JasaPasangWallpaperDindingPost');
        //removeCondition('JasaPasangLantaiVinylPost');
        //removeCondition('JasaPasangPlafonGypsumPost');
        removeCondition('JasaGantiLampuInteriorPost');
        removeCondition('JasaGantiKitchenSetPost');
        removeCondition('JasaFinishingInteriorMinimalisPost');
        removeCondition('JasaFinishingInteriorKlasikPost');
        removeCondition('JasaFinishingInteriorModernPost');
         // hapus elemen id sub JasaFinishingBangunanEksteriorPost Semua
        removeCondition('JasaCatEksteriorRumahPost');
        removeCondition('JasaFinishingFasadEksteriorPost');
        removeCondition('JasaPelapisanAntiCuacaPost');
        removeCondition('JasaPelapisanDindingLuarPost');
        removeCondition('JasaFinishingTamanRumahPost');
        removeCondition('JasaPelapisanBatuAlamEksteriorPost');
        removeCondition('JasaPelapisanGentengDakPost');
      
         // hapus elemen id FINISHING UTAMA lain NYA
        removeCondition('JasaFinishingBangunanEksteriorPost');
        removeCondition('JasaFinishingBangunanInteriorPost');

          // hapus elemen id Infrastruktur Semua
        removeCondition('JasaFinishingInfrastrukturPost');
        removeCondition('JasaFinishingInfrastrukturJalanPost');
        removeCondition('JasaFinishingInfrastrukturTrotoarPost');
        removeCondition('JasaFinishingInfrastrukturSaluranPost');
        removeCondition('JasaFinishingInfrastrukturStrukturPost');
        removeCondition('JasaFinishingInfrastrukturProteksiPost');

	  // hapus SEMUA SUB JASA FINSING INTERIOR MODERN 
	   removeCondition('JasaFinishingInteriorModernWpcPost');
	   removeCondition('JasaFinishingInteriorModernVinylPost');
	   removeCondition('JasaFinishingInteriorModernPlafonPost');
	   removeCondition('JasaFinishingInteriorModernPvcPost');
	  
        JasaKonstruksiFinishingPostLink.style.visibility = 'visible';
        JasaFinishingPostLink.style.visibility = 'visible';
        JasaFinishingBangunanPostLink.style.visibility = 'visible';
        //sub finishing bangunan
        JasaFinishingStrukturPostLink.style.visibility = 'visible';
        //sub finishing STRUKKTUR
        JasaFinishingLantaiBetonPostLink.style.visibility = 'visible';
        pageNameJasaKonsFinishingPostLink.textContent = urlMappingJasaFinishingLantaiBeton[cleanUrlJasaKonsFinishingPost];
    }
// ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaFinishingLantaiBeton[cleanUrlJasaKonsFinishingPost]) {
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
                   "name": "Jasa Finishing",
                   "item": "https://www.betonjayareadymix.com/p/jasa-finishing.html"
               },
               {
                   "@type": "ListItem",
                   "position": 4,
                   "name": "Jasa Finishing Bangunan",
                   "item": "https://www.betonjayareadymix.com/p/jasa-finishing-bangunan.html"
               },
               {
                   "@type": "ListItem",
                   "position": 5,
                   "name": "Jasa Finishing Struktur",
                   "item": "https://www.betonjayareadymix.com/p/jasa-finishing-struktur.html"
               },
               {
                   "@type": "ListItem",
                   "position": 6,
                   "name": "Jasa Finishing Lantai Beton",
                   "item": "https://www.betonjayareadymix.com/p/jasa-finishing-lantai-beton.html"
               },
               {
                   "@type": "ListItem",
                   "position": 7,
                   "name": urlMappingJasaFinishingLantaiBeton[cleanUrlJasaKonsFinishingPost],
                   "item": cleanUrlJasaKonsFinishingPost
               }
           ]
       };
       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
   if (urlMappingJasaPlesteranAcianDinding[cleanUrlJasaKonsFinishingPost]) {
        restoreCondition('JasaFinishingBangunanPost');
        restoreCondition('JasaFinishingBangunanStrukturPost');
    
        restoreCondition('JasaPlesteranAcianDindingPost');
           
	// hapus elemen id DIV Lain SELAIN JasaKonsFinishingPost
	removeCondition('JasaDesInPost');
        removeCondition('ProdukInFurPost');
        removeCondition('ProdukKonsSaluranPost');
        removeCondition('ProdukKonsPembatasPost');
        removeCondition('ProdukKonsDindingModularPost');
        removeCondition('ProdukKonsPost');
        removeCondition('MaterialKonsStukturPost');
        removeCondition('MaterialKonsFasadPelapisEksteriorPost');
	removeCondition('MaterialKonsAtapPenutupPost');
        removeCondition('JasaKonsPerkuatanTanahLongsorPost');
        removeCondition('JasaKonsPondasiTanahPost');
        removeCondition('JasaKonsPembatasPost');
        removeCondition('JasaKonsPerbaikanPost');
        removeCondition('JasaKonsCuttingBetonPost');
        removeCondition('JasaKonsPengeboranPost');
        removeCondition('JasaKonsBongkarBangunanPost');
        removeCondition('JasaKonsStrukturPost');
        removeCondition('JasaKonsAlatKonstruksiPost');
        removeCondition('JasaKonsJalanPerkerasanPost');
     //   removeCondition('JasaKonsFinishingPost');

	 // hapus elemen id FINISHING STRUKTUR lain NYA SELAIN JasaPlesteranAcianDindingPost
	removeCondition('JasaFinishingDakBetonPost');
        removeCondition('JasaFinishingBetonExposePost');
        //removeCondition('JasaPlesteranAcianDindingPost');
        removeCondition('JasaFinishingGroutingStrukturBetonPost');
        removeCondition('JasaPelapisanCoatingStrukturPost');
        removeCondition('JasaFinishingKolomdanBalokPost');
        removeCondition('JasaPelapisanWaterproofingStrukturPost');
        removeCondition('JasaFinishingLantaiBetonPost');
        removeCondition('JasaPelindungRetakStrukturPost');
         // hapus elemen id sub JasaFinishingBangunanInteriorPost Semua
	   
	   removeCondition('JasaEpoxyDindingPost');
	   removeCondition('JasaEpoxyLantaiPost');
        removeCondition('JasaInteriorFurnitureCustomePost');
        removeCondition('JasaGantiKeramikLantaiPost');
        removeCondition('JasaCatInteriorRumahPost');
        removeCondition('JasaPasangWallpaperDindingPost');
        //removeCondition('JasaPasangLantaiVinylPost');
        //removeCondition('JasaPasangPlafonGypsumPost');
        removeCondition('JasaGantiLampuInteriorPost');
        removeCondition('JasaGantiKitchenSetPost');
        removeCondition('JasaFinishingInteriorMinimalisPost');
        removeCondition('JasaFinishingInteriorKlasikPost');
        removeCondition('JasaFinishingInteriorModernPost');
         // hapus elemen id sub JasaFinishingBangunanEksteriorPost Semua
        removeCondition('JasaCatEksteriorRumahPost');
        removeCondition('JasaFinishingFasadEksteriorPost');
        removeCondition('JasaPelapisanAntiCuacaPost');
        removeCondition('JasaPelapisanDindingLuarPost');
        removeCondition('JasaFinishingTamanRumahPost');
        removeCondition('JasaPelapisanBatuAlamEksteriorPost');
        removeCondition('JasaPelapisanGentengDakPost');
      
         // hapus elemen id FINISHING UTAMA lain NYA
        removeCondition('JasaFinishingBangunanEksteriorPost');
        removeCondition('JasaFinishingBangunanInteriorPost');

          // hapus elemen id Infrastruktur Semua
        removeCondition('JasaFinishingInfrastrukturPost');
        removeCondition('JasaFinishingInfrastrukturJalanPost');
        removeCondition('JasaFinishingInfrastrukturTrotoarPost');
        removeCondition('JasaFinishingInfrastrukturSaluranPost');
        removeCondition('JasaFinishingInfrastrukturStrukturPost');
        removeCondition('JasaFinishingInfrastrukturProteksiPost');

	   // hapus SEMUA SUB JASA FINSING INTERIOR MODERN 
	   removeCondition('JasaFinishingInteriorModernWpcPost');
	   removeCondition('JasaFinishingInteriorModernVinylPost');
	   removeCondition('JasaFinishingInteriorModernPlafonPost');
	   removeCondition('JasaFinishingInteriorModernPvcPost');
	   
        JasaKonstruksiFinishingPostLink.style.visibility = 'visible';
        JasaFinishingPostLink.style.visibility = 'visible';
        JasaFinishingBangunanPostLink.style.visibility = 'visible';
        //sub finishing bangunan
        JasaFinishingStrukturPostLink.style.visibility = 'visible';
        //sub finishing STRUKKTUR
        JasaPlesteranAcianDindingPostLink.style.visibility = 'visible';
        pageNameJasaKonsFinishingPostLink.textContent = urlMappingJasaPlesteranAcianDinding[cleanUrlJasaKonsFinishingPost];
    }
  // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaPlesteranAcianDinding[cleanUrlJasaKonsFinishingPost]) {
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
                   "name": "Jasa Finishing",
                   "item": "https://www.betonjayareadymix.com/p/jasa-finishing.html"
               },
               {
                   "@type": "ListItem",
                   "position": 4,
                   "name": "Jasa Finishing Bangunan",
                   "item": "https://www.betonjayareadymix.com/p/jasa-finishing-bangunan.html"
               },
               {
                   "@type": "ListItem",
                   "position": 5,
                   "name": "Jasa Finishing Struktur",
                   "item": "https://www.betonjayareadymix.com/p/jasa-finishing-struktur.html"
               },
               {
                   "@type": "ListItem",
                   "position": 6,
                   "name": "Jasa Plesteran Acian Dinding",
                   "item": "https://www.betonjayareadymix.com/p/jasa-plesteran-acian-dinding.html"
               },
               {
                   "@type": "ListItem",
                   "position": 7,
                   "name": urlMappingJasaPlesteranAcianDinding[cleanUrlJasaKonsFinishingPost],
                   "item": cleanUrlJasaKonsFinishingPost
               }
           ]
       };
       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
//AKHIR FINISHING STRUKTUR

//FINISHING INTERIOR
    if (urlMappingJasaEpoxyDinding[cleanUrlJasaKonsFinishingPost]) {
        restoreCondition('JasaFinishingBangunanPost');
        restoreCondition('JasaFinishingBangunanInteriorPost');
    
        restoreCondition('JasaEpoxyDindingPost');
           
	// hapus elemen id DIV Lain SELAIN JasaKonsFinishingPost
	removeCondition('JasaDesInPost');
        removeCondition('ProdukInFurPost');
        removeCondition('ProdukKonsSaluranPost');
        removeCondition('ProdukKonsPembatasPost');
        removeCondition('ProdukKonsDindingModularPost');
        removeCondition('ProdukKonsPost');
        removeCondition('MaterialKonsStukturPost');
        removeCondition('MaterialKonsFasadPelapisEksteriorPost');
	removeCondition('MaterialKonsAtapPenutupPost');
        removeCondition('JasaKonsPerkuatanTanahLongsorPost');
        removeCondition('JasaKonsPondasiTanahPost');
        removeCondition('JasaKonsPembatasPost');
        removeCondition('JasaKonsPerbaikanPost');
        removeCondition('JasaKonsCuttingBetonPost');
        removeCondition('JasaKonsPengeboranPost');
        removeCondition('JasaKonsBongkarBangunanPost');
        removeCondition('JasaKonsStrukturPost');
        removeCondition('JasaKonsAlatKonstruksiPost');
        removeCondition('JasaKonsJalanPerkerasanPost');
     //   removeCondition('JasaKonsFinishingPost');

	 // hapus elemen id FINISHING STRUKTUR SEMUA NYA
	removeCondition('JasaFinishingDakBetonPost');
        removeCondition('JasaFinishingBetonExposePost');
        removeCondition('JasaPlesteranAcianDindingPost');
        removeCondition('JasaFinishingGroutingStrukturBetonPost');
        removeCondition('JasaPelapisanCoatingStrukturPost');
        removeCondition('JasaFinishingKolomdanBalokPost');
        removeCondition('JasaPelapisanWaterproofingStrukturPost');
        removeCondition('JasaFinishingLantaiBetonPost');
        removeCondition('JasaPelindungRetakStrukturPost'); 
	// hapus elemen id sub JasaFinishingBangunanEksteriorPost Semua
        removeCondition('JasaCatEksteriorRumahPost');
        removeCondition('JasaFinishingFasadEksteriorPost');
        removeCondition('JasaPelapisanAntiCuacaPost');
        removeCondition('JasaPelapisanDindingLuarPost');
        removeCondition('JasaFinishingTamanRumahPost');
        removeCondition('JasaPelapisanBatuAlamEksteriorPost');
        removeCondition('JasaPelapisanGentengDakPost');
      
         // hapus elemen id sub JasaFinishingBangunanInteriorPost Semua selain JasaEpoxyDinding
		
		removeCondition('JasaEpoxyLantaiPost');
		removeCondition('JasaGantiKitchenSetPost');
        removeCondition('JasaInteriorFurnitureCustomePost');
        removeCondition('JasaGantiKeramikLantaiPost');
        removeCondition('JasaCatInteriorRumahPost');
        removeCondition('JasaPasangWallpaperDindingPost');
        //removeCondition('JasaPasangLantaiVinylPost');
        //removeCondition('JasaPasangPlafonGypsumPost');
        removeCondition('JasaGantiLampuInteriorPost');
        
        removeCondition('JasaFinishingInteriorMinimalisPost');
        removeCondition('JasaFinishingInteriorKlasikPost');
        removeCondition('JasaFinishingInteriorModernPost');
       
         // hapus elemen id FINISHING UTAMA lain NYA
        removeCondition('JasaFinishingBangunanEksteriorPost');
        removeCondition('JasaFinishingBangunanStrukturPost');

          // hapus elemen id Infrastruktur Semua
        removeCondition('JasaFinishingInfrastrukturPost');
        removeCondition('JasaFinishingInfrastrukturJalanPost');
        removeCondition('JasaFinishingInfrastrukturTrotoarPost');
        removeCondition('JasaFinishingInfrastrukturSaluranPost');
        removeCondition('JasaFinishingInfrastrukturStrukturPost');
        removeCondition('JasaFinishingInfrastrukturProteksiPost');

		// hapus SEMUA SUB JASA FINSING INTERIOR MODERN 
	   removeCondition('JasaFinishingInteriorModernWpcPost');
	   removeCondition('JasaFinishingInteriorModernVinylPost');
	   removeCondition('JasaFinishingInteriorModernPlafonPost');
	   removeCondition('JasaFinishingInteriorModernPvcPost');
		
        JasaKonstruksiFinishingPostLink.style.visibility = 'visible';
        JasaFinishingPostLink.style.visibility = 'visible';
        JasaFinishingBangunanPostLink.style.visibility = 'visible';
        //sub finishing bangunan
        JasaFinishingInteriorPostLink.style.visibility = 'visible';
        //sub finishing JasaGantiKitchenSetPost
        JasaEpoxyDindingPostLink.style.visibility = 'visible';
        pageNameJasaKonsFinishingPostLink.textContent = urlMappingJasaEpoxyDinding[cleanUrlJasaKonsFinishingPost];
    }
  // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaEpoxyDinding[cleanUrlJasaKonsFinishingPost]) {
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
                   "name": "Jasa Finishing",
                   "item": "https://www.betonjayareadymix.com/p/jasa-finishing.html"
               },
               {
                   "@type": "ListItem",
                   "position": 4,
                   "name": "Jasa Finishing Bangunan",
                   "item": "https://www.betonjayareadymix.com/p/jasa-finishing-bangunan.html"
               },
               {
                   "@type": "ListItem",
                   "position": 5,
                   "name": "Jasa Finishing Interior",
                   "item": "https://www.betonjayareadymix.com/p/jasa-finishing-interior.html"
               },
               {
                   "@type": "ListItem",
                   "position": 6,
                   "name": "Jasa Epoxy Dinding",
                   "item": "https://www.betonjayareadymix.com/p/jasa-epoxy-dinding.html"
               },
               {
                   "@type": "ListItem",
                   "position": 7,
                   "name": urlMappingJasaEpoxyDinding[cleanUrlJasaKonsFinishingPost],
                   "item": cleanUrlJasaKonsFinishingPost
               }
           ]
       };
       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }

	if (urlMappingJasaEpoxyLantai[cleanUrlJasaKonsFinishingPost]) {
        restoreCondition('JasaFinishingBangunanPost');
        restoreCondition('JasaFinishingBangunanInteriorPost');
    
        restoreCondition('JasaEpoxyLantaiPost');
           
	// hapus elemen id DIV Lain SELAIN JasaKonsFinishingPost
	removeCondition('JasaDesInPost');
        removeCondition('ProdukInFurPost');
        removeCondition('ProdukKonsSaluranPost');
        removeCondition('ProdukKonsPembatasPost');
        removeCondition('ProdukKonsDindingModularPost');
        removeCondition('ProdukKonsPost');
        removeCondition('MaterialKonsStukturPost');
        removeCondition('MaterialKonsFasadPelapisEksteriorPost');
	removeCondition('MaterialKonsAtapPenutupPost');
        removeCondition('JasaKonsPerkuatanTanahLongsorPost');
        removeCondition('JasaKonsPondasiTanahPost');
        removeCondition('JasaKonsPembatasPost');
        removeCondition('JasaKonsPerbaikanPost');
        removeCondition('JasaKonsCuttingBetonPost');
        removeCondition('JasaKonsPengeboranPost');
        removeCondition('JasaKonsBongkarBangunanPost');
        removeCondition('JasaKonsStrukturPost');
        removeCondition('JasaKonsAlatKonstruksiPost');
        removeCondition('JasaKonsJalanPerkerasanPost');
     //   removeCondition('JasaKonsFinishingPost');

	 // hapus elemen id FINISHING STRUKTUR SEMUA NYA
	removeCondition('JasaFinishingDakBetonPost');
        removeCondition('JasaFinishingBetonExposePost');
        removeCondition('JasaPlesteranAcianDindingPost');
        removeCondition('JasaFinishingGroutingStrukturBetonPost');
        removeCondition('JasaPelapisanCoatingStrukturPost');
        removeCondition('JasaFinishingKolomdanBalokPost');
        removeCondition('JasaPelapisanWaterproofingStrukturPost');
        removeCondition('JasaFinishingLantaiBetonPost');
        removeCondition('JasaPelindungRetakStrukturPost'); 
	// hapus elemen id sub JasaFinishingBangunanEksteriorPost Semua
        removeCondition('JasaCatEksteriorRumahPost');
        removeCondition('JasaFinishingFasadEksteriorPost');
        removeCondition('JasaPelapisanAntiCuacaPost');
        removeCondition('JasaPelapisanDindingLuarPost');
        removeCondition('JasaFinishingTamanRumahPost');
        removeCondition('JasaPelapisanBatuAlamEksteriorPost');
        removeCondition('JasaPelapisanGentengDakPost');
      
         // hapus elemen id sub JasaFinishingBangunanInteriorPost Semua selain JasaEpoxyDinding
		
		removeCondition('JasaEpoxyDindingPost');
		removeCondition('JasaGantiKitchenSetPost');
        removeCondition('JasaInteriorFurnitureCustomePost');
        removeCondition('JasaGantiKeramikLantaiPost');
        removeCondition('JasaCatInteriorRumahPost');
        removeCondition('JasaPasangWallpaperDindingPost');
        //removeCondition('JasaPasangLantaiVinylPost');
        //removeCondition('JasaPasangPlafonGypsumPost');
        removeCondition('JasaGantiLampuInteriorPost');
        
        removeCondition('JasaFinishingInteriorMinimalisPost');
        removeCondition('JasaFinishingInteriorKlasikPost');
        removeCondition('JasaFinishingInteriorModernPost');
       
         // hapus elemen id FINISHING UTAMA lain NYA
        removeCondition('JasaFinishingBangunanEksteriorPost');
        removeCondition('JasaFinishingBangunanStrukturPost');

          // hapus elemen id Infrastruktur Semua
        removeCondition('JasaFinishingInfrastrukturPost');
        removeCondition('JasaFinishingInfrastrukturJalanPost');
        removeCondition('JasaFinishingInfrastrukturTrotoarPost');
        removeCondition('JasaFinishingInfrastrukturSaluranPost');
        removeCondition('JasaFinishingInfrastrukturStrukturPost');
        removeCondition('JasaFinishingInfrastrukturProteksiPost');

		// hapus SEMUA SUB JASA FINSING INTERIOR MODERN 
	   removeCondition('JasaFinishingInteriorModernWpcPost');
	   removeCondition('JasaFinishingInteriorModernVinylPost');
	   removeCondition('JasaFinishingInteriorModernPlafonPost');
	   removeCondition('JasaFinishingInteriorModernPvcPost');
		
        JasaKonstruksiFinishingPostLink.style.visibility = 'visible';
        JasaFinishingPostLink.style.visibility = 'visible';
        JasaFinishingBangunanPostLink.style.visibility = 'visible';
        //sub finishing bangunan
        JasaFinishingInteriorPostLink.style.visibility = 'visible';
        //sub finishing JasaGantiKitchenSetPost
        JasaEpoxyLantaiPostLink.style.visibility = 'visible';
        pageNameJasaKonsFinishingPostLink.textContent = urlMappingJasaEpoxyLantai[cleanUrlJasaKonsFinishingPost];
    }
  // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaEpoxyLantai[cleanUrlJasaKonsFinishingPost]) {
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
                   "name": "Jasa Finishing",
                   "item": "https://www.betonjayareadymix.com/p/jasa-finishing.html"
               },
               {
                   "@type": "ListItem",
                   "position": 4,
                   "name": "Jasa Finishing Bangunan",
                   "item": "https://www.betonjayareadymix.com/p/jasa-finishing-bangunan.html"
               },
               {
                   "@type": "ListItem",
                   "position": 5,
                   "name": "Jasa Finishing Interior",
                   "item": "https://www.betonjayareadymix.com/p/jasa-finishing-interior.html"
               },
               {
                   "@type": "ListItem",
                   "position": 6,
                   "name": "Jasa Epoxy Lantai",
                   "item": "https://www.betonjayareadymix.com/p/jasa-epoxy-lantai.html"
               },
               {
                   "@type": "ListItem",
                   "position": 7,
                   "name": urlMappingJasaEpoxyLantai[cleanUrlJasaKonsFinishingPost],
                   "item": cleanUrlJasaKonsFinishingPost
               }
           ]
       };
       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
/*
  if (urlMappingJasaBoronganLantai[cleanUrlJasaKonsFinishingPost]) {
        restoreCondition('JasaFinishingBangunanPost');
        restoreCondition('JasaFinishingBangunanInteriorPost');
    
        restoreCondition('JasaBoronganLantaiPost');
           
	// hapus elemen id DIV Lain SELAIN JasaKonsFinishingPost
	removeCondition('JasaDesInPost');
        removeCondition('ProdukInFurPost');
        removeCondition('ProdukKonsSaluranPost');
        removeCondition('ProdukKonsPembatasPost');
        removeCondition('ProdukKonsDindingModularPost');
        removeCondition('ProdukKonsPost');
        removeCondition('MaterialKonsStukturPost');
        removeCondition('MaterialKonsFasadPelapisEksteriorPost');
	removeCondition('MaterialKonsAtapPenutupPost');
        removeCondition('JasaKonsPerkuatanTanahLongsorPost');
        removeCondition('JasaKonsPondasiTanahPost');
        removeCondition('JasaKonsPembatasPost');
        removeCondition('JasaKonsPerbaikanPost');
        removeCondition('JasaKonsCuttingBetonPost');
        removeCondition('JasaKonsPengeboranPost');
        removeCondition('JasaKonsBongkarBangunanPost');
        removeCondition('JasaKonsStrukturPost');
        removeCondition('JasaKonsAlatKonstruksiPost');
        removeCondition('JasaKonsJalanPerkerasanPost');
     //   removeCondition('JasaKonsFinishingPost');

	 // hapus elemen id FINISHING STRUKTUR SEMUA NYA
	removeCondition('JasaFinishingDakBetonPost');
        removeCondition('JasaFinishingBetonExposePost');
        removeCondition('JasaPlesteranAcianDindingPost');
        removeCondition('JasaFinishingGroutingStrukturBetonPost');
        removeCondition('JasaPelapisanCoatingStrukturPost');
        removeCondition('JasaFinishingKolomdanBalokPost');
        removeCondition('JasaPelapisanWaterproofingStrukturPost');
        removeCondition('JasaFinishingLantaiBetonPost');
        removeCondition('JasaPelindungRetakStrukturPost'); 
	// hapus elemen id sub JasaFinishingBangunanEksteriorPost Semua
        removeCondition('JasaCatEksteriorRumahPost');
        removeCondition('JasaFinishingFasadEksteriorPost');
        removeCondition('JasaPelapisanAntiCuacaPost');
        removeCondition('JasaPelapisanDindingLuarPost');
        removeCondition('JasaFinishingTamanRumahPost');
        removeCondition('JasaPelapisanBatuAlamEksteriorPost');
        removeCondition('JasaPelapisanGentengDakPost');
      
         // hapus elemen id sub JasaFinishingBangunanInteriorPost Semua selain JasaEpoxyDinding
		removeCondition('JasaEpoxyLantaiPost');
		removeCondition('JasaEpoxyDindingPost');
		removeCondition('JasaGantiKitchenSetPost');
        removeCondition('JasaInteriorFurnitureCustomePost');
        removeCondition('JasaGantiKeramikLantaiPost');
        removeCondition('JasaCatInteriorRumahPost');
        removeCondition('JasaPasangWallpaperDindingPost');
        //removeCondition('JasaPasangLantaiVinylPost');
        //removeCondition('JasaPasangPlafonGypsumPost');
        removeCondition('JasaGantiLampuInteriorPost');
        
        removeCondition('JasaFinishingInteriorMinimalisPost');
        removeCondition('JasaFinishingInteriorKlasikPost');
        removeCondition('JasaFinishingInteriorModernPost');
       
         // hapus elemen id FINISHING UTAMA lain NYA
        removeCondition('JasaFinishingBangunanEksteriorPost');
        removeCondition('JasaFinishingBangunanStrukturPost');

          // hapus elemen id Infrastruktur Semua
        removeCondition('JasaFinishingInfrastrukturPost');
        removeCondition('JasaFinishingInfrastrukturJalanPost');
        removeCondition('JasaFinishingInfrastrukturTrotoarPost');
        removeCondition('JasaFinishingInfrastrukturSaluranPost');
        removeCondition('JasaFinishingInfrastrukturStrukturPost');
        removeCondition('JasaFinishingInfrastrukturProteksiPost');
       
        JasaKonstruksiFinishingPostLink.style.visibility = 'visible';
        JasaFinishingPostLink.style.visibility = 'visible';
        JasaFinishingBangunanPostLink.style.visibility = 'visible';
        //sub finishing bangunan
        JasaFinishingInteriorPostLink.style.visibility = 'visible';
        //sub finishing JasaGantiKitchenSetPost
        JasaBoronganLantaiPostLink.style.visibility = 'visible';
        pageNameJasaKonsFinishingPostLink.textContent = urlMappingJasaBoronganLantai[cleanUrlJasaKonsFinishingPost];
    }
  // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaBoronganLantai[cleanUrlJasaKonsFinishingPost]) {
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
                   "name": "Jasa Finishing",
                   "item": "https://www.betonjayareadymix.com/p/jasa-finishing.html"
               },
               {
                   "@type": "ListItem",
                   "position": 4,
                   "name": "Jasa Finishing Bangunan",
                   "item": "https://www.betonjayareadymix.com/p/jasa-finishing-bangunan.html"
               },
               {
                   "@type": "ListItem",
                   "position": 5,
                   "name": "Jasa Finishing Interior",
                   "item": "https://www.betonjayareadymix.com/p/jasa-finishing-interior.html"
               },
               {
                   "@type": "ListItem",
                   "position": 6,
                   "name": "Jasa Borongan Lantai",
                   "item": "https://www.betonjayareadymix.com/p/jasa-borongan-lantai.html"
               },
               {
                   "@type": "ListItem",
                   "position": 7,
                   "name": urlMappingJasaBoronganLantai[cleanUrlJasaKonsFinishingPost],
                   "item": cleanUrlJasaKonsFinishingPost
               }
           ]
       };
       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
	*/
	if (urlMappingJasaKitchenSet[cleanUrlJasaKonsFinishingPost]) {
        restoreCondition('JasaFinishingBangunanPost');
        restoreCondition('JasaFinishingBangunanInteriorPost');
    
        restoreCondition('JasaGantiKitchenSetPost');
           
	// hapus elemen id DIV Lain SELAIN JasaKonsFinishingPost
	removeCondition('JasaDesInPost');
        removeCondition('ProdukInFurPost');
        removeCondition('ProdukKonsSaluranPost');
        removeCondition('ProdukKonsPembatasPost');
        removeCondition('ProdukKonsDindingModularPost');
        removeCondition('ProdukKonsPost');
        removeCondition('MaterialKonsStukturPost');
        removeCondition('MaterialKonsFasadPelapisEksteriorPost');
	removeCondition('MaterialKonsAtapPenutupPost');
        removeCondition('JasaKonsPerkuatanTanahLongsorPost');
        removeCondition('JasaKonsPondasiTanahPost');
        removeCondition('JasaKonsPembatasPost');
        removeCondition('JasaKonsPerbaikanPost');
        removeCondition('JasaKonsCuttingBetonPost');
        removeCondition('JasaKonsPengeboranPost');
        removeCondition('JasaKonsBongkarBangunanPost');
        removeCondition('JasaKonsStrukturPost');
        removeCondition('JasaKonsAlatKonstruksiPost');
        removeCondition('JasaKonsJalanPerkerasanPost');
     //   removeCondition('JasaKonsFinishingPost');

	 // hapus elemen id FINISHING STRUKTUR SEMUA NYA
	removeCondition('JasaFinishingDakBetonPost');
        removeCondition('JasaFinishingBetonExposePost');
        removeCondition('JasaPlesteranAcianDindingPost');
        removeCondition('JasaFinishingGroutingStrukturBetonPost');
        removeCondition('JasaPelapisanCoatingStrukturPost');
        removeCondition('JasaFinishingKolomdanBalokPost');
        removeCondition('JasaPelapisanWaterproofingStrukturPost');
        removeCondition('JasaFinishingLantaiBetonPost');
        removeCondition('JasaPelindungRetakStrukturPost'); 
	// hapus elemen id sub JasaFinishingBangunanEksteriorPost Semua
        removeCondition('JasaCatEksteriorRumahPost');
        removeCondition('JasaFinishingFasadEksteriorPost');
        removeCondition('JasaPelapisanAntiCuacaPost');
        removeCondition('JasaPelapisanDindingLuarPost');
        removeCondition('JasaFinishingTamanRumahPost');
        removeCondition('JasaPelapisanBatuAlamEksteriorPost');
        removeCondition('JasaPelapisanGentengDakPost');
      
         // hapus elemen id sub JasaFinishingBangunanInteriorPost Semua selain JasaDesainInteriorPost
		
		removeCondition('JasaEpoxyDindingPost');
		removeCondition('JasaEpoxyLantaiPost');
        removeCondition('JasaInteriorFurnitureCustomePost');
        removeCondition('JasaGantiKeramikLantaiPost');
        removeCondition('JasaCatInteriorRumahPost');
        removeCondition('JasaPasangWallpaperDindingPost');
        //removeCondition('JasaPasangLantaiVinylPost');
        //removeCondition('JasaPasangPlafonGypsumPost');
        removeCondition('JasaGantiLampuInteriorPost');
        
        removeCondition('JasaFinishingInteriorMinimalisPost');
        removeCondition('JasaFinishingInteriorKlasikPost');
        removeCondition('JasaFinishingInteriorModernPost');
       
         // hapus elemen id FINISHING UTAMA lain NYA
        removeCondition('JasaFinishingBangunanEksteriorPost');
        removeCondition('JasaFinishingBangunanStrukturPost');

          // hapus elemen id Infrastruktur Semua
        removeCondition('JasaFinishingInfrastrukturPost');
        removeCondition('JasaFinishingInfrastrukturJalanPost');
        removeCondition('JasaFinishingInfrastrukturTrotoarPost');
        removeCondition('JasaFinishingInfrastrukturSaluranPost');
        removeCondition('JasaFinishingInfrastrukturStrukturPost');
        removeCondition('JasaFinishingInfrastrukturProteksiPost');

		// hapus SEMUA SUB JASA FINSING INTERIOR MODERN 
	   removeCondition('JasaFinishingInteriorModernWpcPost');
	   removeCondition('JasaFinishingInteriorModernVinylPost');
	   removeCondition('JasaFinishingInteriorModernPlafonPost');
	   removeCondition('JasaFinishingInteriorModernPvcPost');
		
        JasaKonstruksiFinishingPostLink.style.visibility = 'visible';
        JasaFinishingPostLink.style.visibility = 'visible';
        JasaFinishingBangunanPostLink.style.visibility = 'visible';
        //sub finishing bangunan
        JasaFinishingInteriorPostLink.style.visibility = 'visible';
        //sub finishing JasaGantiKitchenSetPost
        JasaGantiKitchenSetPostLink.style.visibility = 'visible';
        pageNameJasaKonsFinishingPostLink.textContent = urlMappingJasaKitchenSet[cleanUrlJasaKonsFinishingPost];
    }
  // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaKitchenSet[cleanUrlJasaKonsFinishingPost]) {
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
                   "name": "Jasa Finishing",
                   "item": "https://www.betonjayareadymix.com/p/jasa-finishing.html"
               },
               {
                   "@type": "ListItem",
                   "position": 4,
                   "name": "Jasa Finishing Bangunan",
                   "item": "https://www.betonjayareadymix.com/p/jasa-finishing-bangunan.html"
               },
               {
                   "@type": "ListItem",
                   "position": 5,
                   "name": "Jasa Finishing Interior",
                   "item": "https://www.betonjayareadymix.com/p/jasa-finishing-interior.html"
               },
               {
                   "@type": "ListItem",
                   "position": 6,
                   "name": "Jasa Kithen Set",
                   "item": "https://www.betonjayareadymix.com/p/jasa-kitchen-set.html"
               },
               {
                   "@type": "ListItem",
                   "position": 7,
                   "name": urlMappingJasaKitchenSet[cleanUrlJasaKonsFinishingPost],
                   "item": cleanUrlJasaKonsFinishingPost
               }
           ]
       };
       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
	
  if (urlMappingJasaInteriorFurnitureCustome[cleanUrlJasaKonsFinishingPost]) {
        restoreCondition('JasaFinishingBangunanPost');
        restoreCondition('JasaFinishingBangunanInteriorPost');
    
        restoreCondition('JasaInteriorFurnitureCustomePost');
           
	// hapus elemen id DIV Lain SELAIN JasaKonsFinishingPost
	removeCondition('JasaDesInPost');
        removeCondition('ProdukInFurPost');
        removeCondition('ProdukKonsSaluranPost');
        removeCondition('ProdukKonsPembatasPost');
        removeCondition('ProdukKonsDindingModularPost');
        removeCondition('ProdukKonsPost');
        removeCondition('MaterialKonsStukturPost');
        removeCondition('MaterialKonsFasadPelapisEksteriorPost');
	removeCondition('MaterialKonsAtapPenutupPost');
        removeCondition('JasaKonsPerkuatanTanahLongsorPost');
        removeCondition('JasaKonsPondasiTanahPost');
        removeCondition('JasaKonsPembatasPost');
        removeCondition('JasaKonsPerbaikanPost');
        removeCondition('JasaKonsCuttingBetonPost');
        removeCondition('JasaKonsPengeboranPost');
        removeCondition('JasaKonsBongkarBangunanPost');
        removeCondition('JasaKonsStrukturPost');
        removeCondition('JasaKonsAlatKonstruksiPost');
        removeCondition('JasaKonsJalanPerkerasanPost');
     //   removeCondition('JasaKonsFinishingPost');

	 // hapus elemen id FINISHING STRUKTUR SEMUA NYA
	removeCondition('JasaFinishingDakBetonPost');
        removeCondition('JasaFinishingBetonExposePost');
        removeCondition('JasaPlesteranAcianDindingPost');
        removeCondition('JasaFinishingGroutingStrukturBetonPost');
        removeCondition('JasaPelapisanCoatingStrukturPost');
        removeCondition('JasaFinishingKolomdanBalokPost');
        removeCondition('JasaPelapisanWaterproofingStrukturPost');
        removeCondition('JasaFinishingLantaiBetonPost');
        removeCondition('JasaPelindungRetakStrukturPost'); 
	// hapus elemen id sub JasaFinishingBangunanEksteriorPost Semua
        removeCondition('JasaCatEksteriorRumahPost');
        removeCondition('JasaFinishingFasadEksteriorPost');
        removeCondition('JasaPelapisanAntiCuacaPost');
        removeCondition('JasaPelapisanDindingLuarPost');
        removeCondition('JasaFinishingTamanRumahPost');
        removeCondition('JasaPelapisanBatuAlamEksteriorPost');
        removeCondition('JasaPelapisanGentengDakPost');
      
         // hapus elemen id sub JasaFinishingBangunanInteriorPost Semua selain JasaDesainInteriorPost
        //removeCondition('');
	   
	    removeCondition('JasaEpoxyDindingPost');
	removeCondition('JasaEpoxyLantaiPost');
        removeCondition('JasaGantiKeramikLantaiPost');
        removeCondition('JasaCatInteriorRumahPost');
        removeCondition('JasaPasangWallpaperDindingPost');
        //removeCondition('JasaPasangLantaiVinylPost');
        //removeCondition('JasaPasangPlafonGypsumPost');
        removeCondition('JasaGantiLampuInteriorPost');
        removeCondition('JasaGantiKitchenSetPost');
        removeCondition('JasaFinishingInteriorMinimalisPost');
        removeCondition('JasaFinishingInteriorKlasikPost');
        removeCondition('JasaFinishingInteriorModernPost');
       
         // hapus elemen id FINISHING UTAMA lain NYA
        removeCondition('JasaFinishingBangunanEksteriorPost');
        removeCondition('JasaFinishingBangunanStrukturPost');

          // hapus elemen id Infrastruktur Semua
        removeCondition('JasaFinishingInfrastrukturPost');
        removeCondition('JasaFinishingInfrastrukturJalanPost');
        removeCondition('JasaFinishingInfrastrukturTrotoarPost');
        removeCondition('JasaFinishingInfrastrukturSaluranPost');
        removeCondition('JasaFinishingInfrastrukturStrukturPost');
        removeCondition('JasaFinishingInfrastrukturProteksiPost');

	  // hapus SEMUA SUB JASA FINSING INTERIOR MODERN 
	   removeCondition('JasaFinishingInteriorModernWpcPost');
	   removeCondition('JasaFinishingInteriorModernVinylPost');
	   removeCondition('JasaFinishingInteriorModernPlafonPost');
	   removeCondition('JasaFinishingInteriorModernPvcPost');
	  
        JasaKonstruksiFinishingPostLink.style.visibility = 'visible';
        JasaFinishingPostLink.style.visibility = 'visible';
        JasaFinishingBangunanPostLink.style.visibility = 'visible';
        //sub finishing bangunan
        JasaFinishingInteriorPostLink.style.visibility = 'visible';
        //sub finishing STRUKKTUR
        JasaInteriorFurnitureCustomePostLink.style.visibility = 'visible';
        pageNameJasaKonsFinishingPostLink.textContent = urlMappingJasaInteriorFurnitureCustome[cleanUrlJasaKonsFinishingPost];
    }

  // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaInteriorFurnitureCustome[cleanUrlJasaKonsFinishingPost]) {
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
                   "name": "Jasa Finishing",
                   "item": "https://www.betonjayareadymix.com/p/jasa-finishing.html"
               },
               {
                   "@type": "ListItem",
                   "position": 4,
                   "name": "Jasa Finishing Bangunan",
                   "item": "https://www.betonjayareadymix.com/p/jasa-finishing-bangunan.html"
               },
               {
                   "@type": "ListItem",
                   "position": 5,
                   "name": "Jasa Finishing Interior",
                   "item": "https://www.betonjayareadymix.com/p/jasa-finishing-interior.html"
               },
               {
                   "@type": "ListItem",
                   "position": 6,
                   "name": "Jasa Interior dan Furniture Custom",
                   "item": "https://www.betonjayareadymix.com/p/jasa-interior-dan-furniture-custom.html"
               },
               {
                   "@type": "ListItem",
                   "position": 7,
                   "name": urlMappingJasaInteriorFurnitureCustome[cleanUrlJasaKonsFinishingPost],
                   "item": cleanUrlJasaKonsFinishingPost
               }
           ]
       };
       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
  
   if (urlMappingJasaFinishingInteriorMinimalis[cleanUrlJasaKonsFinishingPost]) {
        restoreCondition('JasaFinishingBangunanPost');
        restoreCondition('JasaFinishingBangunanInteriorPost');
    
        restoreCondition('JasaFinishingInteriorMinimalisPost');
           
	// hapus elemen id DIV Lain SELAIN JasaKonsFinishingPost
	removeCondition('JasaDesInPost');
        removeCondition('ProdukInFurPost');
        removeCondition('ProdukKonsSaluranPost');
        removeCondition('ProdukKonsPembatasPost');
        removeCondition('ProdukKonsDindingModularPost');
        removeCondition('ProdukKonsPost');
        removeCondition('MaterialKonsStukturPost');
        removeCondition('MaterialKonsFasadPelapisEksteriorPost');
	removeCondition('MaterialKonsAtapPenutupPost');
        removeCondition('JasaKonsPerkuatanTanahLongsorPost');
        removeCondition('JasaKonsPondasiTanahPost');
        removeCondition('JasaKonsPembatasPost');
        removeCondition('JasaKonsPerbaikanPost');
        removeCondition('JasaKonsCuttingBetonPost');
        removeCondition('JasaKonsPengeboranPost');
        removeCondition('JasaKonsBongkarBangunanPost');
        removeCondition('JasaKonsStrukturPost');
        removeCondition('JasaKonsAlatKonstruksiPost');
        removeCondition('JasaKonsJalanPerkerasanPost');
     //   removeCondition('JasaKonsFinishingPost');

	 // hapus elemen id FINISHING STRUKTUR SEMUA NYA
	removeCondition('JasaFinishingDakBetonPost');
        removeCondition('JasaFinishingBetonExposePost');
        removeCondition('JasaPlesteranAcianDindingPost');
        removeCondition('JasaFinishingGroutingStrukturBetonPost');
        removeCondition('JasaPelapisanCoatingStrukturPost');
        removeCondition('JasaFinishingKolomdanBalokPost');
        removeCondition('JasaPelapisanWaterproofingStrukturPost');
        removeCondition('JasaFinishingLantaiBetonPost');
        removeCondition('JasaPelindungRetakStrukturPost'); 
	// hapus elemen id sub JasaFinishingBangunanEksteriorPost Semua
        removeCondition('JasaCatEksteriorRumahPost');
        removeCondition('JasaFinishingFasadEksteriorPost');
        removeCondition('JasaPelapisanAntiCuacaPost');
        removeCondition('JasaPelapisanDindingLuarPost');
        removeCondition('JasaFinishingTamanRumahPost');
        removeCondition('JasaPelapisanBatuAlamEksteriorPost');
        removeCondition('JasaPelapisanGentengDakPost');
      
         // hapus elemen id sub JasaFinishingBangunanInteriorPost Semua selain JasaDesainInteriorPost
	  
	    removeCondition('JasaEpoxyDindingPost');
	  removeCondition('JasaEpoxyLantaiPost');
        removeCondition('JasaInteriorFurnitureCustomePost');
        removeCondition('JasaInteriorFurniturePost');
        removeCondition('JasaGantiKeramikLantaiPost');
        removeCondition('JasaCatInteriorRumahPost');
        removeCondition('JasaPasangWallpaperDindingPost');
        //removeCondition('JasaPasangLantaiVinylPost');
        //removeCondition('JasaPasangPlafonGypsumPost');
        removeCondition('JasaGantiLampuInteriorPost');
        removeCondition('JasaGantiKitchenSetPost');
        removeCondition('JasaFinishingInteriorModernPost');
        removeCondition('JasaFinishingInteriorKlasikPost');
        
       
         // hapus elemen id FINISHING UTAMA lain NYA
        removeCondition('JasaFinishingBangunanEksteriorPost');
        removeCondition('JasaFinishingBangunanStrukturPost');

          // hapus elemen id Infrastruktur Semua
        removeCondition('JasaFinishingInfrastrukturPost');
        removeCondition('JasaFinishingInfrastrukturJalanPost');
        removeCondition('JasaFinishingInfrastrukturTrotoarPost');
        removeCondition('JasaFinishingInfrastrukturSaluranPost');
        removeCondition('JasaFinishingInfrastrukturStrukturPost');
        removeCondition('JasaFinishingInfrastrukturProteksiPost');

	   // hapus SEMUA SUB JASA FINSING INTERIOR MODERN 
	   removeCondition('JasaFinishingInteriorModernWpcPost');
	   removeCondition('JasaFinishingInteriorModernVinylPost');
	   removeCondition('JasaFinishingInteriorModernPlafonPost');
	   removeCondition('JasaFinishingInteriorModernPvcPost');
	   
        JasaKonstruksiFinishingPostLink.style.visibility = 'visible';
        JasaFinishingPostLink.style.visibility = 'visible';
        JasaFinishingBangunanPostLink.style.visibility = 'visible';
        //sub finishing bangunan
        JasaFinishingInteriorPostLink.style.visibility = 'visible';
        //sub finishing STRUKKTUR
        JasaFinishingInteriorMinimalisPostLink.style.visibility = 'visible';
        pageNameJasaKonsFinishingPostLink.textContent = urlMappingJasaFinishingInteriorMinimalis[cleanUrlJasaKonsFinishingPost];
    }
  // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaFinishingInteriorMinimalis[cleanUrlJasaKonsFinishingPost]) {
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
                   "name": "Jasa Finishing",
                   "item": "https://www.betonjayareadymix.com/p/jasa-finishing.html"
               },
               {
                   "@type": "ListItem",
                   "position": 4,
                   "name": "Jasa Finishing Bangunan",
                   "item": "https://www.betonjayareadymix.com/p/jasa-finishing-bangunan.html"
               },
               {
                   "@type": "ListItem",
                   "position": 5,
                   "name": "Jasa Finishing Interior",
                   "item": "https://www.betonjayareadymix.com/p/jasa-finishing-interior.html"
               },
               {
                   "@type": "ListItem",
                   "position": 6,
                   "name": "Jasa Finishing Interior Minimalis",
                   "item": "https://www.betonjayareadymix.com/p/jasa-finishing-interior-minimalis.html"
               },
               {
                   "@type": "ListItem",
                   "position": 7,
                   "name": urlMappingJasaFinishingInteriorMinimalis[cleanUrlJasaKonsFinishingPost],
                   "item": cleanUrlJasaKonsFinishingPost
               }
           ]
       };
       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
if (urlMappingJasaFinishingInteriorKlasik[cleanUrlJasaKonsFinishingPost]) {
        restoreCondition('JasaFinishingBangunanPost');
        restoreCondition('JasaFinishingBangunanInteriorPost');
    
        restoreCondition('JasaFinishingInteriorKlasikPost');
           
	// hapus elemen id DIV Lain SELAIN JasaKonsFinishingPost
	removeCondition('JasaDesInPost');
        removeCondition('ProdukInFurPost');
        removeCondition('ProdukKonsSaluranPost');
        removeCondition('ProdukKonsPembatasPost');
        removeCondition('ProdukKonsDindingModularPost');
        removeCondition('ProdukKonsPost');
        removeCondition('MaterialKonsStukturPost');
        removeCondition('MaterialKonsFasadPelapisEksteriorPost');
	removeCondition('MaterialKonsAtapPenutupPost');
        removeCondition('JasaKonsPerkuatanTanahLongsorPost');
        removeCondition('JasaKonsPondasiTanahPost');
        removeCondition('JasaKonsPembatasPost');
        removeCondition('JasaKonsPerbaikanPost');
        removeCondition('JasaKonsCuttingBetonPost');
        removeCondition('JasaKonsPengeboranPost');
        removeCondition('JasaKonsBongkarBangunanPost');
        removeCondition('JasaKonsStrukturPost');
        removeCondition('JasaKonsAlatKonstruksiPost');
        removeCondition('JasaKonsJalanPerkerasanPost');
     //   removeCondition('JasaKonsFinishingPost');

	 // hapus elemen id FINISHING STRUKTUR SEMUA NYA
	removeCondition('JasaFinishingDakBetonPost');
        removeCondition('JasaFinishingBetonExposePost');
        removeCondition('JasaPlesteranAcianDindingPost');
        removeCondition('JasaFinishingGroutingStrukturBetonPost');
        removeCondition('JasaPelapisanCoatingStrukturPost');
        removeCondition('JasaFinishingKolomdanBalokPost');
        removeCondition('JasaPelapisanWaterproofingStrukturPost');
        removeCondition('JasaFinishingLantaiBetonPost');
        removeCondition('JasaPelindungRetakStrukturPost'); 
	// hapus elemen id sub JasaFinishingBangunanEksteriorPost Semua
        removeCondition('JasaCatEksteriorRumahPost');
        removeCondition('JasaFinishingFasadEksteriorPost');
        removeCondition('JasaPelapisanAntiCuacaPost');
        removeCondition('JasaPelapisanDindingLuarPost');
        removeCondition('JasaFinishingTamanRumahPost');
        removeCondition('JasaPelapisanBatuAlamEksteriorPost');
        removeCondition('JasaPelapisanGentengDakPost');
      
         // hapus elemen id sub JasaFinishingBangunanInteriorPost Semua selain JasaDesainInteriorPost
	  
	    removeCondition('JasaEpoxyDindingPost');
	  removeCondition('JasaEpoxyLantaiPost');
        removeCondition('JasaInteriorFurnitureCustomePost');
        removeCondition('JasaInteriorFurniturePost');
        removeCondition('JasaGantiKeramikLantaiPost');
        removeCondition('JasaCatInteriorRumahPost');
        removeCondition('JasaPasangWallpaperDindingPost');
        //removeCondition('JasaPasangLantaiVinylPost');
        //removeCondition('JasaPasangPlafonGypsumPost');
        removeCondition('JasaGantiLampuInteriorPost');
        removeCondition('JasaGantiKitchenSetPost');
        removeCondition('JasaFinishingInteriorMinimalisPost');
        removeCondition('JasaFinishingInteriorModernPost');
        
       
         // hapus elemen id FINISHING UTAMA lain NYA
        removeCondition('JasaFinishingBangunanEksteriorPost');
        removeCondition('JasaFinishingBangunanStrukturPost');

          // hapus elemen id Infrastruktur Semua
        removeCondition('JasaFinishingInfrastrukturPost');
        removeCondition('JasaFinishingInfrastrukturJalanPost');
        removeCondition('JasaFinishingInfrastrukturTrotoarPost');
        removeCondition('JasaFinishingInfrastrukturSaluranPost');
        removeCondition('JasaFinishingInfrastrukturStrukturPost');
        removeCondition('JasaFinishingInfrastrukturProteksiPost');

	 // hapus SEMUA SUB JASA FINSING INTERIOR MODERN 
	   removeCondition('JasaFinishingInteriorModernWpcPost');
	   removeCondition('JasaFinishingInteriorModernVinylPost');
	   removeCondition('JasaFinishingInteriorModernPlafonPost');
	   removeCondition('JasaFinishingInteriorModernPvcPost');
	
        JasaKonstruksiFinishingPostLink.style.visibility = 'visible';
        JasaFinishingPostLink.style.visibility = 'visible';
        JasaFinishingBangunanPostLink.style.visibility = 'visible';
        //sub finishing bangunan
        JasaFinishingInteriorPostLink.style.visibility = 'visible';
        //sub finishing STRUKKTUR
        JasaFinishingInteriorKlasikPostLink.style.visibility = 'visible';
        pageNameJasaKonsFinishingPostLink.textContent = urlMappingJasaFinishingInteriorKlasik[cleanUrlJasaKonsFinishingPost];
    }
  // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaFinishingInteriorKlasik[cleanUrlJasaKonsFinishingPost]) {
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
                   "name": "Jasa Finishing",
                   "item": "https://www.betonjayareadymix.com/p/jasa-finishing.html"
               },
               {
                   "@type": "ListItem",
                   "position": 4,
                   "name": "Jasa Finishing Bangunan",
                   "item": "https://www.betonjayareadymix.com/p/jasa-finishing-bangunan.html"
               },
               {
                   "@type": "ListItem",
                   "position": 5,
                   "name": "Jasa Finishing Interior",
                   "item": "https://www.betonjayareadymix.com/p/jasa-finishing-interior.html"
               },
               {
                   "@type": "ListItem",
                   "position": 6,
                   "name": "Jasa Finishing Interior Klasik",
                   "item": "https://www.betonjayareadymix.com/p/jasa-finishing-interior-klasik.html"
               },
               {
                   "@type": "ListItem",
                   "position": 7,
                   "name": urlMappingJasaFinishingInteriorKlasik[cleanUrlJasaKonsFinishingPost],
                   "item": cleanUrlJasaKonsFinishingPost
               }
           ]
       };
       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }

if (urlMappingJasaLampuInterior[cleanUrlJasaKonsFinishingPost]) {
        restoreCondition('JasaFinishingBangunanPost');
        restoreCondition('JasaFinishingBangunanInteriorPost');
    
        restoreCondition('JasaGantiLampuInteriorPost');
           
	// hapus elemen id DIV Lain SELAIN JasaKonsFinishingPost
	removeCondition('JasaDesInPost');
        removeCondition('ProdukInFurPost');
        removeCondition('ProdukKonsSaluranPost');
        removeCondition('ProdukKonsPembatasPost');
        removeCondition('ProdukKonsDindingModularPost');
        removeCondition('ProdukKonsPost');
        removeCondition('MaterialKonsStukturPost');
        removeCondition('MaterialKonsFasadPelapisEksteriorPost');
	removeCondition('MaterialKonsAtapPenutupPost');
        removeCondition('JasaKonsPerkuatanTanahLongsorPost');
        removeCondition('JasaKonsPondasiTanahPost');
        removeCondition('JasaKonsPembatasPost');
        removeCondition('JasaKonsPerbaikanPost');
        removeCondition('JasaKonsCuttingBetonPost');
        removeCondition('JasaKonsPengeboranPost');
        removeCondition('JasaKonsBongkarBangunanPost');
        removeCondition('JasaKonsStrukturPost');
        removeCondition('JasaKonsAlatKonstruksiPost');
        removeCondition('JasaKonsJalanPerkerasanPost');
     //   removeCondition('JasaKonsFinishingPost');

	 // hapus elemen id FINISHING STRUKTUR SEMUA NYA
	removeCondition('JasaFinishingDakBetonPost');
        removeCondition('JasaFinishingBetonExposePost');
        removeCondition('JasaPlesteranAcianDindingPost');
        removeCondition('JasaFinishingGroutingStrukturBetonPost');
        removeCondition('JasaPelapisanCoatingStrukturPost');
        removeCondition('JasaFinishingKolomdanBalokPost');
        removeCondition('JasaPelapisanWaterproofingStrukturPost');
        removeCondition('JasaFinishingLantaiBetonPost');
        removeCondition('JasaPelindungRetakStrukturPost'); 
	// hapus elemen id sub JasaFinishingBangunanEksteriorPost Semua
        removeCondition('JasaCatEksteriorRumahPost');
        removeCondition('JasaFinishingFasadEksteriorPost');
        removeCondition('JasaPelapisanAntiCuacaPost');
        removeCondition('JasaPelapisanDindingLuarPost');
        removeCondition('JasaFinishingTamanRumahPost');
        removeCondition('JasaPelapisanBatuAlamEksteriorPost');
        removeCondition('JasaPelapisanGentengDakPost');
      
         // hapus elemen id sub JasaFinishingBangunanInteriorPost Semua selain JasaDesainInteriorPost
	  
	    removeCondition('JasaEpoxyDindingPost');
	  removeCondition('JasaEpoxyLantaiPost');
        removeCondition('JasaInteriorFurnitureCustomePost');
        removeCondition('JasaInteriorFurniturePost');
        removeCondition('JasaGantiKeramikLantaiPost');
        removeCondition('JasaCatInteriorRumahPost');
        removeCondition('JasaPasangWallpaperDindingPost');
        //removeCondition('JasaPasangLantaiVinylPost');
        //removeCondition('JasaPasangPlafonGypsumPost');
        removeCondition('');
        removeCondition('JasaGantiKitchenSetPost');
        removeCondition('JasaFinishingInteriorMinimalisPost');
        removeCondition('JasaFinishingInteriorKlasikPost');
        
       
         // hapus elemen id FINISHING UTAMA lain NYA
        removeCondition('JasaFinishingBangunanEksteriorPost');
        removeCondition('JasaFinishingBangunanStrukturPost');

          // hapus elemen id Infrastruktur Semua
        removeCondition('JasaFinishingInfrastrukturPost');
        removeCondition('JasaFinishingInfrastrukturJalanPost');
        removeCondition('JasaFinishingInfrastrukturTrotoarPost');
        removeCondition('JasaFinishingInfrastrukturSaluranPost');
        removeCondition('JasaFinishingInfrastrukturStrukturPost');
        removeCondition('JasaFinishingInfrastrukturProteksiPost');

	 // hapus SEMUA SUB JASA FINSING INTERIOR MODERN 
	   removeCondition('JasaFinishingInteriorModernWpcPost');
	   removeCondition('JasaFinishingInteriorModernVinylPost');
	   removeCondition('JasaFinishingInteriorModernPlafonPost');
	   removeCondition('JasaFinishingInteriorModernPvcPost');
	
        JasaKonstruksiFinishingPostLink.style.visibility = 'visible';
        JasaFinishingPostLink.style.visibility = 'visible';
        JasaFinishingBangunanPostLink.style.visibility = 'visible';
        //sub finishing bangunan
        JasaFinishingInteriorPostLink.style.visibility = 'visible';
        //sub finishing STRUKKTUR
        JasaGantiLampuInteriorPostLink.style.visibility = 'visible';
        pageNameJasaKonsFinishingPostLink.textContent = urlMappingJasaLampuInterior[cleanUrlJasaKonsFinishingPost];
    }
  // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaLampuInterior[cleanUrlJasaKonsFinishingPost]) {
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
                   "name": "Jasa Finishing",
                   "item": "https://www.betonjayareadymix.com/p/jasa-finishing.html"
               },
               {
                   "@type": "ListItem",
                   "position": 4,
                   "name": "Jasa Finishing Bangunan",
                   "item": "https://www.betonjayareadymix.com/p/jasa-finishing-bangunan.html"
               },
               {
                   "@type": "ListItem",
                   "position": 5,
                   "name": "Jasa Finishing Interior",
                   "item": "https://www.betonjayareadymix.com/p/jasa-finishing-interior.html"
               },
               {
                   "@type": "ListItem",
                   "position": 6,
                   "name": "Jasa Lampu Interior",
                   "item": "https://www.betonjayareadymix.com/p/jasa-lampu-interior.html"
               },
               {
                   "@type": "ListItem",
                   "position": 7,
                   "name": urlMappingJasaLampuInterior[cleanUrlJasaKonsFinishingPost],
                   "item": cleanUrlJasaKonsFinishingPost
               }
           ]
       };
       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
if (urlMappingJasaPasangWallpaperDinding[cleanUrlJasaKonsFinishingPost]) {
        restoreCondition('JasaFinishingBangunanPost');
        restoreCondition('JasaFinishingBangunanInteriorPost');
    
        restoreCondition('JasaFinishingInteriorModernPost');
           
	// hapus elemen id DIV Lain SELAIN JasaKonsFinishingPost
	removeCondition('JasaDesInPost');
        removeCondition('ProdukInFurPost');
        removeCondition('ProdukKonsSaluranPost');
        removeCondition('ProdukKonsPembatasPost');
        removeCondition('ProdukKonsDindingModularPost');
        removeCondition('ProdukKonsPost');
        removeCondition('MaterialKonsStukturPost');
        removeCondition('MaterialKonsFasadPelapisEksteriorPost');
	removeCondition('MaterialKonsAtapPenutupPost');
        removeCondition('JasaKonsPerkuatanTanahLongsorPost');
        removeCondition('JasaKonsPondasiTanahPost');
        removeCondition('JasaKonsPembatasPost');
        removeCondition('JasaKonsPerbaikanPost');
        removeCondition('JasaKonsCuttingBetonPost');
        removeCondition('JasaKonsPengeboranPost');
        removeCondition('JasaKonsBongkarBangunanPost');
        removeCondition('JasaKonsStrukturPost');
        removeCondition('JasaKonsAlatKonstruksiPost');
        removeCondition('JasaKonsJalanPerkerasanPost');
     //   removeCondition('JasaKonsFinishingPost');

	 // hapus elemen id FINISHING STRUKTUR SEMUA NYA
	removeCondition('JasaFinishingDakBetonPost');
        removeCondition('JasaFinishingBetonExposePost');
        removeCondition('JasaPlesteranAcianDindingPost');
        removeCondition('JasaFinishingGroutingStrukturBetonPost');
        removeCondition('JasaPelapisanCoatingStrukturPost');
        removeCondition('JasaFinishingKolomdanBalokPost');
        removeCondition('JasaPelapisanWaterproofingStrukturPost');
        removeCondition('JasaFinishingLantaiBetonPost');
        removeCondition('JasaPelindungRetakStrukturPost'); 
	// hapus elemen id sub JasaFinishingBangunanEksteriorPost Semua
        removeCondition('JasaCatEksteriorRumahPost');
        removeCondition('JasaFinishingFasadEksteriorPost');
        removeCondition('JasaPelapisanAntiCuacaPost');
        removeCondition('JasaPelapisanDindingLuarPost');
        removeCondition('JasaFinishingTamanRumahPost');
        removeCondition('JasaPelapisanBatuAlamEksteriorPost');
        removeCondition('JasaPelapisanGentengDakPost');
      
         // hapus elemen id sub JasaFinishingBangunanInteriorPost Semua selain JasaDesainInteriorPost
	  
	    removeCondition('JasaEpoxyDindingPost');
	  removeCondition('JasaEpoxyLantaiPost');
        removeCondition('JasaInteriorFurnitureCustomePost');
        removeCondition('JasaInteriorFurniturePost');
        removeCondition('JasaGantiKeramikLantaiPost');
        removeCondition('JasaCatInteriorRumahPost');
        removeCondition('JasaPasangWallpaperDindingPost');
        //removeCondition('JasaPasangLantaiVinylPost');
        //removeCondition('JasaPasangPlafonGypsumPost');
        removeCondition('JasaGantiLampuInteriorPost');
        removeCondition('JasaGantiKitchenSetPost');
        removeCondition('JasaFinishingInteriorMinimalisPost');
        removeCondition('JasaFinishingInteriorKlasikPost');
        
       
         // hapus elemen id FINISHING UTAMA lain NYA
        removeCondition('JasaFinishingBangunanEksteriorPost');
        removeCondition('JasaFinishingBangunanStrukturPost');

          // hapus elemen id Infrastruktur Semua
        removeCondition('JasaFinishingInfrastrukturPost');
        removeCondition('JasaFinishingInfrastrukturJalanPost');
        removeCondition('JasaFinishingInfrastrukturTrotoarPost');
        removeCondition('JasaFinishingInfrastrukturSaluranPost');
        removeCondition('JasaFinishingInfrastrukturStrukturPost');
        removeCondition('JasaFinishingInfrastrukturProteksiPost');

	 // hapus SEMUA SUB JASA FINSING INTERIOR MODERN 
	   removeCondition('JasaFinishingInteriorModernWpcPost');
	   removeCondition('JasaFinishingInteriorModernVinylPost');
	   removeCondition('JasaFinishingInteriorModernPlafonPost');
	   removeCondition('JasaFinishingInteriorModernPvcPost');
	
        JasaKonstruksiFinishingPostLink.style.visibility = 'visible';
        JasaFinishingPostLink.style.visibility = 'visible';
        JasaFinishingBangunanPostLink.style.visibility = 'visible';
        //sub finishing bangunan
        JasaFinishingInteriorPostLink.style.visibility = 'visible';
        //sub finishing STRUKKTUR
        JasaFinishingInteriorModernPostLink.style.visibility = 'visible';
        pageNameJasaKonsFinishingPostLink.textContent = urlMappingJasaPasangWallpaperDinding[cleanUrlJasaKonsFinishingPost];
    }
  // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaPasangWallpaperDinding[cleanUrlJasaKonsFinishingPost]) {
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
                   "name": "Jasa Finishing",
                   "item": "https://www.betonjayareadymix.com/p/jasa-finishing.html"
               },
               {
                   "@type": "ListItem",
                   "position": 4,
                   "name": "Jasa Finishing Bangunan",
                   "item": "https://www.betonjayareadymix.com/p/jasa-finishing-bangunan.html"
               },
               {
                   "@type": "ListItem",
                   "position": 5,
                   "name": "Jasa Finishing Interior",
                   "item": "https://www.betonjayareadymix.com/p/jasa-finishing-interior.html"
               },
               {
                   "@type": "ListItem",
                   "position": 6,
                   "name": "Jasa Pasang Wallpaper Dinding",
                   "item": "https://www.betonjayareadymix.com/p/jasa-pasang-wallpaper-dinding.html"
               },
               {
                   "@type": "ListItem",
                   "position": 7,
                   "name": urlMappingJasaPasangWallpaperDinding[cleanUrlJasaKonsFinishingPost],
                   "item": cleanUrlJasaKonsFinishingPost
               }
           ]
       };
       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
if (urlMappingJasaCatInteriorRumah[cleanUrlJasaKonsFinishingPost]) {
        restoreCondition('JasaFinishingBangunanPost');
        restoreCondition('JasaFinishingBangunanInteriorPost');
    
        restoreCondition('JasaCatInteriorRumahPost');
           
	// hapus elemen id DIV Lain SELAIN JasaKonsFinishingPost
	removeCondition('JasaDesInPost');
        removeCondition('ProdukInFurPost');
        removeCondition('ProdukKonsSaluranPost');
        removeCondition('ProdukKonsPembatasPost');
        removeCondition('ProdukKonsDindingModularPost');
        removeCondition('ProdukKonsPost');
        removeCondition('MaterialKonsStukturPost');
        removeCondition('MaterialKonsFasadPelapisEksteriorPost');
	removeCondition('MaterialKonsAtapPenutupPost');
        removeCondition('JasaKonsPerkuatanTanahLongsorPost');
        removeCondition('JasaKonsPondasiTanahPost');
        removeCondition('JasaKonsPembatasPost');
        removeCondition('JasaKonsPerbaikanPost');
        removeCondition('JasaKonsCuttingBetonPost');
        removeCondition('JasaKonsPengeboranPost');
        removeCondition('JasaKonsBongkarBangunanPost');
        removeCondition('JasaKonsStrukturPost');
        removeCondition('JasaKonsAlatKonstruksiPost');
        removeCondition('JasaKonsJalanPerkerasanPost');
     //   removeCondition('JasaKonsFinishingPost');

	 // hapus elemen id FINISHING STRUKTUR SEMUA NYA
	removeCondition('JasaFinishingDakBetonPost');
        removeCondition('JasaFinishingBetonExposePost');
        removeCondition('JasaPlesteranAcianDindingPost');
        removeCondition('JasaFinishingGroutingStrukturBetonPost');
        removeCondition('JasaPelapisanCoatingStrukturPost');
        removeCondition('JasaFinishingKolomdanBalokPost');
        removeCondition('JasaPelapisanWaterproofingStrukturPost');
        removeCondition('JasaFinishingLantaiBetonPost');
        removeCondition('JasaPelindungRetakStrukturPost'); 
	// hapus elemen id sub JasaFinishingBangunanEksteriorPost Semua
        removeCondition('JasaCatEksteriorRumahPost');
        removeCondition('JasaFinishingFasadEksteriorPost');
        removeCondition('JasaPelapisanAntiCuacaPost');
        removeCondition('JasaPelapisanDindingLuarPost');
        removeCondition('JasaFinishingTamanRumahPost');
        removeCondition('JasaPelapisanBatuAlamEksteriorPost');
        removeCondition('JasaPelapisanGentengDakPost');
      
         // hapus elemen id sub JasaFinishingBangunanInteriorPost Semua selain JasaDesainInteriorPost
	  
	    removeCondition('JasaEpoxyDindingPost');
	  removeCondition('JasaEpoxyLantaiPost');
        removeCondition('JasaInteriorFurnitureCustomePost');
        removeCondition('JasaInteriorFurniturePost');
        removeCondition('JasaGantiKeramikLantaiPost');
        removeCondition('JasaFinishingInteriorModernPost');
        removeCondition('JasaPasangWallpaperDindingPost');
        //removeCondition('JasaPasangLantaiVinylPost');
        //removeCondition('JasaPasangPlafonGypsumPost');
        removeCondition('JasaGantiLampuInteriorPost');
        removeCondition('JasaGantiKitchenSetPost');
        removeCondition('JasaFinishingInteriorMinimalisPost');
        removeCondition('JasaFinishingInteriorKlasikPost');
        
       
         // hapus elemen id FINISHING UTAMA lain NYA
        removeCondition('JasaFinishingBangunanEksteriorPost');
        removeCondition('JasaFinishingBangunanStrukturPost');

          // hapus elemen id Infrastruktur Semua
        removeCondition('JasaFinishingInfrastrukturPost');
        removeCondition('JasaFinishingInfrastrukturJalanPost');
        removeCondition('JasaFinishingInfrastrukturTrotoarPost');
        removeCondition('JasaFinishingInfrastrukturSaluranPost');
        removeCondition('JasaFinishingInfrastrukturStrukturPost');
        removeCondition('JasaFinishingInfrastrukturProteksiPost');

	// hapus SEMUA SUB JASA FINSING INTERIOR MODERN 
	   removeCondition('JasaFinishingInteriorModernWpcPost');
	   removeCondition('JasaFinishingInteriorModernVinylPost');
	   removeCondition('JasaFinishingInteriorModernPlafonPost');
	   removeCondition('JasaFinishingInteriorModernPvcPost');
	
        JasaKonstruksiFinishingPostLink.style.visibility = 'visible';
        JasaFinishingPostLink.style.visibility = 'visible';
        JasaFinishingBangunanPostLink.style.visibility = 'visible';
        //sub finishing bangunan
        JasaFinishingInteriorPostLink.style.visibility = 'visible';
        //sub finishing STRUKKTUR
        JasaCatInteriorRumahPostLink.style.visibility = 'visible';
        pageNameJasaKonsFinishingPostLink.textContent = urlMappingJasaCatInteriorRumah[cleanUrlJasaKonsFinishingPost];
    }
  // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaCatInteriorRumah[cleanUrlJasaKonsFinishingPost]) {
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
                   "name": "Jasa Finishing",
                   "item": "https://www.betonjayareadymix.com/p/jasa-finishing.html"
               },
               {
                   "@type": "ListItem",
                   "position": 4,
                   "name": "Jasa Finishing Bangunan",
                   "item": "https://www.betonjayareadymix.com/p/jasa-finishing-bangunan.html"
               },
               {
                   "@type": "ListItem",
                   "position": 5,
                   "name": "Jasa Finishing Interior",
                   "item": "https://www.betonjayareadymix.com/p/jasa-finishing-interior.html"
               },
               {
                   "@type": "ListItem",
                   "position": 6,
                   "name": "Jasa Cat Interior Rumah",
                   "item": "https://www.betonjayareadymix.com/p/jasa-cat-interior-rumah.html"
               },
               {
                   "@type": "ListItem",
                   "position": 7,
                   "name": urlMappingJasaCatInteriorRumah[cleanUrlJasaKonsFinishingPost],
                   "item": cleanUrlJasaKonsFinishingPost
               }
           ]
       };
       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
	
if (urlMappingJasaKeramikLantai[cleanUrlJasaKonsFinishingPost]) {
        restoreCondition('JasaFinishingBangunanPost');
        restoreCondition('JasaFinishingBangunanInteriorPost');
    
        restoreCondition('JasaGantiKeramikLantaiPost');
           
	// hapus elemen id DIV Lain SELAIN JasaKonsFinishingPost
	removeCondition('JasaDesInPost');
        removeCondition('ProdukInFurPost');
        removeCondition('ProdukKonsSaluranPost');
        removeCondition('ProdukKonsPembatasPost');
        removeCondition('ProdukKonsDindingModularPost');
        removeCondition('ProdukKonsPost');
        removeCondition('MaterialKonsStukturPost');
        removeCondition('MaterialKonsFasadPelapisEksteriorPost');
	removeCondition('MaterialKonsAtapPenutupPost');
        removeCondition('JasaKonsPerkuatanTanahLongsorPost');
        removeCondition('JasaKonsPondasiTanahPost');
        removeCondition('JasaKonsPembatasPost');
        removeCondition('JasaKonsPerbaikanPost');
        removeCondition('JasaKonsCuttingBetonPost');
        removeCondition('JasaKonsPengeboranPost');
        removeCondition('JasaKonsBongkarBangunanPost');
        removeCondition('JasaKonsStrukturPost');
        removeCondition('JasaKonsAlatKonstruksiPost');
        removeCondition('JasaKonsJalanPerkerasanPost');
     //   removeCondition('JasaKonsFinishingPost');

	 // hapus elemen id FINISHING STRUKTUR SEMUA NYA
	removeCondition('JasaFinishingDakBetonPost');
        removeCondition('JasaFinishingBetonExposePost');
        removeCondition('JasaPlesteranAcianDindingPost');
        removeCondition('JasaFinishingGroutingStrukturBetonPost');
        removeCondition('JasaPelapisanCoatingStrukturPost');
        removeCondition('JasaFinishingKolomdanBalokPost');
        removeCondition('JasaPelapisanWaterproofingStrukturPost');
        removeCondition('JasaFinishingLantaiBetonPost');
        removeCondition('JasaPelindungRetakStrukturPost'); 
	// hapus elemen id sub JasaFinishingBangunanEksteriorPost Semua
        removeCondition('JasaCatEksteriorRumahPost');
        removeCondition('JasaFinishingFasadEksteriorPost');
        removeCondition('JasaPelapisanAntiCuacaPost');
        removeCondition('JasaPelapisanDindingLuarPost');
        removeCondition('JasaFinishingTamanRumahPost');
        removeCondition('JasaPelapisanBatuAlamEksteriorPost');
        removeCondition('JasaPelapisanGentengDakPost');
      
         // hapus elemen id sub JasaFinishingBangunanInteriorPost Semua selain JasaDesainInteriorPost
	  
	    removeCondition('JasaEpoxyDindingPost');
	  removeCondition('JasaEpoxyLantaiPost');
        removeCondition('JasaInteriorFurnitureCustomePost');
        removeCondition('JasaInteriorFurniturePost');
        removeCondition('JasaFinishingInteriorModernPost');
        removeCondition('JasaCatInteriorRumahPost');
        removeCondition('JasaPasangWallpaperDindingPost');
        //removeCondition('JasaPasangLantaiVinylPost');
        //removeCondition('JasaPasangPlafonGypsumPost');
        removeCondition('JasaGantiLampuInteriorPost');
        removeCondition('JasaGantiKitchenSetPost');
        removeCondition('JasaFinishingInteriorMinimalisPost');
        removeCondition('JasaFinishingInteriorKlasikPost');
        
       
         // hapus elemen id FINISHING UTAMA lain NYA
        removeCondition('JasaFinishingBangunanEksteriorPost');
        removeCondition('JasaFinishingBangunanStrukturPost');

          // hapus elemen id Infrastruktur Semua
        removeCondition('JasaFinishingInfrastrukturPost');
        removeCondition('JasaFinishingInfrastrukturJalanPost');
        removeCondition('JasaFinishingInfrastrukturTrotoarPost');
        removeCondition('JasaFinishingInfrastrukturSaluranPost');
        removeCondition('JasaFinishingInfrastrukturStrukturPost');
        removeCondition('JasaFinishingInfrastrukturProteksiPost');

	 // hapus SEMUA SUB JASA FINSING INTERIOR MODERN 
	   removeCondition('JasaFinishingInteriorModernWpcPost');
	   removeCondition('JasaFinishingInteriorModernVinylPost');
	   removeCondition('JasaFinishingInteriorModernPlafonPost');
	   removeCondition('JasaFinishingInteriorModernPvcPost');
	
        JasaKonstruksiFinishingPostLink.style.visibility = 'visible';
        JasaFinishingPostLink.style.visibility = 'visible';
        JasaFinishingBangunanPostLink.style.visibility = 'visible';
        //sub finishing bangunan
        JasaFinishingInteriorPostLink.style.visibility = 'visible';
        //sub finishing STRUKKTUR
        JasaGantiKeramikLantaiPostLink.style.visibility = 'visible';
        pageNameJasaKonsFinishingPostLink.textContent = urlMappingJasaKeramikLantai[cleanUrlJasaKonsFinishingPost];
    }
  // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaKeramikLantai[cleanUrlJasaKonsFinishingPost]) {
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
                   "name": "Jasa Finishing",
                   "item": "https://www.betonjayareadymix.com/p/jasa-finishing.html"
               },
               {
                   "@type": "ListItem",
                   "position": 4,
                   "name": "Jasa Finishing Bangunan",
                   "item": "https://www.betonjayareadymix.com/p/jasa-finishing-bangunan.html"
               },
               {
                   "@type": "ListItem",
                   "position": 5,
                   "name": "Jasa Finishing Interior",
                   "item": "https://www.betonjayareadymix.com/p/jasa-finishing-interior.html"
               },
               {
                   "@type": "ListItem",
                   "position": 6,
                   "name": "Jasa Keramik Lantai",
                   "item": "https://www.betonjayareadymix.com/p/jasa-keramik-lantai.html"
               },
               {
                   "@type": "ListItem",
                   "position": 7,
                   "name": urlMappingJasaKeramikLantai[cleanUrlJasaKonsFinishingPost],
                   "item": cleanUrlJasaKonsFinishingPost
               }
           ]
       };
       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }

	if (urlMappingJasaInteriordanFurnitureCustome[cleanUrlJasaKonsFinishingPost]) {
        restoreCondition('JasaFinishingBangunanPost');
        restoreCondition('JasaFinishingBangunanInteriorPost');
    
        restoreCondition('JasaInteriorFurnitureCustomePost');
           
	// hapus elemen id DIV Lain SELAIN JasaKonsFinishingPost
	removeCondition('JasaDesInPost');
        removeCondition('ProdukInFurPost');
        removeCondition('ProdukKonsSaluranPost');
        removeCondition('ProdukKonsPembatasPost');
        removeCondition('ProdukKonsDindingModularPost');
        removeCondition('ProdukKonsPost');
        removeCondition('MaterialKonsStukturPost');
        removeCondition('MaterialKonsFasadPelapisEksteriorPost');
	removeCondition('MaterialKonsAtapPenutupPost');
        removeCondition('JasaKonsPerkuatanTanahLongsorPost');
        removeCondition('JasaKonsPondasiTanahPost');
        removeCondition('JasaKonsPembatasPost');
        removeCondition('JasaKonsPerbaikanPost');
        removeCondition('JasaKonsCuttingBetonPost');
        removeCondition('JasaKonsPengeboranPost');
        removeCondition('JasaKonsBongkarBangunanPost');
        removeCondition('JasaKonsStrukturPost');
        removeCondition('JasaKonsAlatKonstruksiPost');
        removeCondition('JasaKonsJalanPerkerasanPost');
     //   removeCondition('JasaKonsFinishingPost');

	 // hapus elemen id FINISHING STRUKTUR SEMUA NYA
	removeCondition('JasaFinishingDakBetonPost');
        removeCondition('JasaFinishingBetonExposePost');
        removeCondition('JasaPlesteranAcianDindingPost');
        removeCondition('JasaFinishingGroutingStrukturBetonPost');
        removeCondition('JasaPelapisanCoatingStrukturPost');
        removeCondition('JasaFinishingKolomdanBalokPost');
        removeCondition('JasaPelapisanWaterproofingStrukturPost');
        removeCondition('JasaFinishingLantaiBetonPost');
        removeCondition('JasaPelindungRetakStrukturPost'); 
	// hapus elemen id sub JasaFinishingBangunanEksteriorPost Semua
        removeCondition('JasaCatEksteriorRumahPost');
        removeCondition('JasaFinishingFasadEksteriorPost');
        removeCondition('JasaPelapisanAntiCuacaPost');
        removeCondition('JasaPelapisanDindingLuarPost');
        removeCondition('JasaFinishingTamanRumahPost');
        removeCondition('JasaPelapisanBatuAlamEksteriorPost');
        removeCondition('JasaPelapisanGentengDakPost');
      
         // hapus elemen id sub JasaFinishingBangunanInteriorPost Semua selain JasaDesainInteriorPost
	  
	    removeCondition('JasaEpoxyDindingPost');
	  removeCondition('JasaEpoxyLantaiPost');
        removeCondition('JasaFinishingInteriorModernPost');
        //removeCondition('JasaInteriorFurniturePost');
        removeCondition('JasaGantiKeramikLantaiPost');
        removeCondition('JasaCatInteriorRumahPost');
        removeCondition('JasaPasangWallpaperDindingPost');
        //removeCondition('JasaPasangLantaiVinylPost');
        //removeCondition('JasaPasangPlafonGypsumPost');
        removeCondition('JasaGantiLampuInteriorPost');
        removeCondition('JasaGantiKitchenSetPost');
        removeCondition('JasaFinishingInteriorMinimalisPost');
        removeCondition('JasaFinishingInteriorKlasikPost');
        
       
         // hapus elemen id FINISHING UTAMA lain NYA
        removeCondition('JasaFinishingBangunanEksteriorPost');
        removeCondition('JasaFinishingBangunanStrukturPost');

          // hapus elemen id Infrastruktur Semua
        removeCondition('JasaFinishingInfrastrukturPost');
        removeCondition('JasaFinishingInfrastrukturJalanPost');
        removeCondition('JasaFinishingInfrastrukturTrotoarPost');
        removeCondition('JasaFinishingInfrastrukturSaluranPost');
        removeCondition('JasaFinishingInfrastrukturStrukturPost');
        removeCondition('JasaFinishingInfrastrukturProteksiPost');

		// hapus SEMUA SUB JASA FINSING INTERIOR MODERN 
	   removeCondition('JasaFinishingInteriorModernWpcPost');
	   removeCondition('JasaFinishingInteriorModernVinylPost');
	   removeCondition('JasaFinishingInteriorModernPlafonPost');
	   removeCondition('JasaFinishingInteriorModernPvcPost');
		
        JasaKonstruksiFinishingPostLink.style.visibility = 'visible';
        JasaFinishingPostLink.style.visibility = 'visible';
        JasaFinishingBangunanPostLink.style.visibility = 'visible';
        //sub finishing bangunan
        JasaFinishingInteriorPostLink.style.visibility = 'visible';
        //sub finishing STRUKKTUR
        JasaInteriorFurnitureCustomePostLink.style.visibility = 'visible';
        pageNameJasaKonsFinishingPostLink.textContent = urlMappingJasaInteriordanFurnitureCustome[cleanUrlJasaKonsFinishingPost];
    }
  // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaInteriordanFurnitureCustome[cleanUrlJasaKonsFinishingPost]) {
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
                   "name": "Jasa Finishing",
                   "item": "https://www.betonjayareadymix.com/p/jasa-finishing.html"
               },
               {
                   "@type": "ListItem",
                   "position": 4,
                   "name": "Jasa Finishing Bangunan",
                   "item": "https://www.betonjayareadymix.com/p/jasa-finishing-bangunan.html"
               },
               {
                   "@type": "ListItem",
                   "position": 5,
                   "name": "Jasa Finishing Interior",
                   "item": "https://www.betonjayareadymix.com/p/jasa-finishing-interior.html"
               },
               {
                   "@type": "ListItem",
                   "position": 6,
                   "name": "Jasa Interior dan Furniture Custome",
                   "item": "https://www.betonjayareadymix.com/p/jasa-interior-dan-furniture-custom.html"
               },
               {
                   "@type": "ListItem",
                   "position": 7,
                   "name": urlMappingJasaInteriordanFurnitureCustome[cleanUrlJasaKonsFinishingPost],
                   "item": cleanUrlJasaKonsFinishingPost
               }
           ]
       };
       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
	
  if (urlMappingJasaFinishingInteriorModern[cleanUrlJasaKonsFinishingPost]) {
        restoreCondition('JasaFinishingBangunanPost');
        restoreCondition('JasaFinishingBangunanInteriorPost');
    
        restoreCondition('JasaFinishingInteriorModernPost');
           
	// hapus elemen id DIV Lain SELAIN JasaKonsFinishingPost
	removeCondition('JasaDesInPost');
        removeCondition('ProdukInFurPost');
        removeCondition('ProdukKonsSaluranPost');
        removeCondition('ProdukKonsPembatasPost');
        removeCondition('ProdukKonsDindingModularPost');
        removeCondition('ProdukKonsPost');
        removeCondition('MaterialKonsStukturPost');
        removeCondition('MaterialKonsFasadPelapisEksteriorPost');
	removeCondition('MaterialKonsAtapPenutupPost');
        removeCondition('JasaKonsPerkuatanTanahLongsorPost');
        removeCondition('JasaKonsPondasiTanahPost');
        removeCondition('JasaKonsPembatasPost');
        removeCondition('JasaKonsPerbaikanPost');
        removeCondition('JasaKonsCuttingBetonPost');
        removeCondition('JasaKonsPengeboranPost');
        removeCondition('JasaKonsBongkarBangunanPost');
        removeCondition('JasaKonsStrukturPost');
        removeCondition('JasaKonsAlatKonstruksiPost');
        removeCondition('JasaKonsJalanPerkerasanPost');
     //   removeCondition('JasaKonsFinishingPost');

	 // hapus elemen id FINISHING STRUKTUR SEMUA NYA
	removeCondition('JasaFinishingDakBetonPost');
        removeCondition('JasaFinishingBetonExposePost');
        removeCondition('JasaPlesteranAcianDindingPost');
        removeCondition('JasaFinishingGroutingStrukturBetonPost');
        removeCondition('JasaPelapisanCoatingStrukturPost');
        removeCondition('JasaFinishingKolomdanBalokPost');
        removeCondition('JasaPelapisanWaterproofingStrukturPost');
        removeCondition('JasaFinishingLantaiBetonPost');
        removeCondition('JasaPelindungRetakStrukturPost'); 
	// hapus elemen id sub JasaFinishingBangunanEksteriorPost Semua
        removeCondition('JasaCatEksteriorRumahPost');
        removeCondition('JasaFinishingFasadEksteriorPost');
        removeCondition('JasaPelapisanAntiCuacaPost');
        removeCondition('JasaPelapisanDindingLuarPost');
        removeCondition('JasaFinishingTamanRumahPost');
        removeCondition('JasaPelapisanBatuAlamEksteriorPost');
        removeCondition('JasaPelapisanGentengDakPost');
      
         // hapus elemen id sub JasaFinishingBangunanInteriorPost Semua selain JasaDesainInteriorPost
	  
	    removeCondition('JasaEpoxyDindingPost');
	  removeCondition('JasaEpoxyLantaiPost');
        removeCondition('JasaInteriorFurnitureCustomePost');
        removeCondition('JasaInteriorFurniturePost');
        removeCondition('JasaGantiKeramikLantaiPost');
        removeCondition('JasaCatInteriorRumahPost');
        removeCondition('JasaPasangWallpaperDindingPost');
        //removeCondition('JasaPasangLantaiVinylPost');
        //removeCondition('JasaPasangPlafonGypsumPost');
        removeCondition('JasaGantiLampuInteriorPost');
        removeCondition('JasaGantiKitchenSetPost');
        removeCondition('JasaFinishingInteriorMinimalisPost');
        removeCondition('JasaFinishingInteriorKlasikPost');
        
       
         // hapus elemen id FINISHING UTAMA lain NYA
        removeCondition('JasaFinishingBangunanEksteriorPost');
        removeCondition('JasaFinishingBangunanStrukturPost');

          // hapus elemen id Infrastruktur Semua
        removeCondition('JasaFinishingInfrastrukturPost');
        removeCondition('JasaFinishingInfrastrukturJalanPost');
        removeCondition('JasaFinishingInfrastrukturTrotoarPost');
        removeCondition('JasaFinishingInfrastrukturSaluranPost');
        removeCondition('JasaFinishingInfrastrukturStrukturPost');
        removeCondition('JasaFinishingInfrastrukturProteksiPost');

	   // hapus SEMUA SUB JASA FINSING INTERIOR MODERN 
	   removeCondition('JasaFinishingInteriorModernWpcPost');
	   removeCondition('JasaFinishingInteriorModernVinylPost');
	   removeCondition('JasaFinishingInteriorModernPlafonPost');
	   removeCondition('JasaFinishingInteriorModernPvcPost');
	  
        JasaKonstruksiFinishingPostLink.style.visibility = 'visible';
        JasaFinishingPostLink.style.visibility = 'visible';
        JasaFinishingBangunanPostLink.style.visibility = 'visible';
        //sub finishing bangunan
        JasaFinishingInteriorPostLink.style.visibility = 'visible';
        //sub finishing STRUKKTUR
        JasaFinishingInteriorModernPostLink.style.visibility = 'visible';
        pageNameJasaKonsFinishingPostLink.textContent = urlMappingJasaFinishingInteriorModern[cleanUrlJasaKonsFinishingPost];
    }
  // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaFinishingInteriorModern[cleanUrlJasaKonsFinishingPost]) {
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
                   "name": "Jasa Finishing",
                   "item": "https://www.betonjayareadymix.com/p/jasa-finishing.html"
               },
               {
                   "@type": "ListItem",
                   "position": 4,
                   "name": "Jasa Finishing Bangunan",
                   "item": "https://www.betonjayareadymix.com/p/jasa-finishing-bangunan.html"
               },
               {
                   "@type": "ListItem",
                   "position": 5,
                   "name": "Jasa Finishing Interior",
                   "item": "https://www.betonjayareadymix.com/p/jasa-finishing-interior.html"
               },
               {
                   "@type": "ListItem",
                   "position": 6,
                   "name": "Jasa Finishing Interior Modern",
                   "item": "https://www.betonjayareadymix.com/p/jasa-finishing-interior-modern.html"
               },
               {
                   "@type": "ListItem",
                   "position": 7,
                   "name": urlMappingJasaFinishingInteriorModern[cleanUrlJasaKonsFinishingPost],
                   "item": cleanUrlJasaKonsFinishingPost
               }
           ]
       };
       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
  //Sub JASA FINISHING INTERIOR MODERN
   if (urlMappingJasaFinishingInteriorModernWpc[cleanUrlJasaKonsFinishingPost]) {
        restoreCondition('JasaFinishingBangunanPost');
        restoreCondition('JasaFinishingBangunanInteriorPost');
    
        restoreCondition('JasaFinishingInteriorModernPost');
        restoreCondition('JasaFinishingInteriorModernWpcPost');
          
	// hapus elemen id DIV Lain SELAIN JasaKonsFinishingPost
	removeCondition('JasaDesInPost');
        removeCondition('ProdukInFurPost');
        removeCondition('ProdukKonsSaluranPost');
        removeCondition('ProdukKonsPembatasPost');
        removeCondition('ProdukKonsDindingModularPost');
        removeCondition('ProdukKonsPost');
        removeCondition('MaterialKonsStukturPost');
        removeCondition('MaterialKonsFasadPelapisEksteriorPost');
	removeCondition('MaterialKonsAtapPenutupPost');
        removeCondition('JasaKonsPerkuatanTanahLongsorPost');
        removeCondition('JasaKonsPondasiTanahPost');
        removeCondition('JasaKonsPembatasPost');
        removeCondition('JasaKonsPerbaikanPost');
        removeCondition('JasaKonsCuttingBetonPost');
        removeCondition('JasaKonsPengeboranPost');
        removeCondition('JasaKonsBongkarBangunanPost');
        removeCondition('JasaKonsStrukturPost');
        removeCondition('JasaKonsAlatKonstruksiPost');
        removeCondition('JasaKonsJalanPerkerasanPost');
     //   removeCondition('JasaKonsFinishingPost');

	// hapus SEMUA SUB JASA FINSING INTERIOR MODERN KECUALI JasaFinishingInteriorModernWpcPost
	   //removeCondition('JasaFinishingInteriorModernWpcPost');
	   removeCondition('JasaFinishingInteriorModernVinylPost');
	   removeCondition('JasaFinishingInteriorModernPlafonPost');
	   removeCondition('JasaFinishingInteriorModernPvcPost');
	   
	 // hapus elemen id FINISHING STRUKTUR SEMUA NYA
	removeCondition('JasaFinishingDakBetonPost');
        removeCondition('JasaFinishingBetonExposePost');
        removeCondition('JasaPlesteranAcianDindingPost');
        removeCondition('JasaFinishingGroutingStrukturBetonPost');
        removeCondition('JasaPelapisanCoatingStrukturPost');
        removeCondition('JasaFinishingKolomdanBalokPost');
        removeCondition('JasaPelapisanWaterproofingStrukturPost');
        removeCondition('JasaFinishingLantaiBetonPost');
        removeCondition('JasaPelindungRetakStrukturPost'); 
	// hapus elemen id sub JasaFinishingBangunanEksteriorPost Semua
        removeCondition('JasaCatEksteriorRumahPost');
        removeCondition('JasaFinishingFasadEksteriorPost');
        removeCondition('JasaPelapisanAntiCuacaPost');
        removeCondition('JasaPelapisanDindingLuarPost');
        removeCondition('JasaFinishingTamanRumahPost');
        removeCondition('JasaPelapisanBatuAlamEksteriorPost');
        removeCondition('JasaPelapisanGentengDakPost');
      
         // hapus elemen id sub JasaFinishingBangunanInteriorPost Semua selain JasaDesainInteriorPost
	  
	    removeCondition('JasaEpoxyDindingPost');
	  removeCondition('JasaEpoxyLantaiPost');
        removeCondition('JasaInteriorFurnitureCustomePost');
        removeCondition('JasaInteriorFurniturePost');
        removeCondition('JasaGantiKeramikLantaiPost');
        removeCondition('JasaCatInteriorRumahPost');
        removeCondition('JasaPasangWallpaperDindingPost');
        //removeCondition('JasaPasangLantaiVinylPost');
        //removeCondition('JasaPasangPlafonGypsumPost');
        removeCondition('JasaGantiLampuInteriorPost');
        removeCondition('JasaGantiKitchenSetPost');
        removeCondition('JasaFinishingInteriorMinimalisPost');
        removeCondition('JasaFinishingInteriorKlasikPost');
        
       
         // hapus elemen id FINISHING UTAMA lain NYA
        removeCondition('JasaFinishingBangunanEksteriorPost');
        removeCondition('JasaFinishingBangunanStrukturPost');

          // hapus elemen id Infrastruktur Semua
        removeCondition('JasaFinishingInfrastrukturPost');
        removeCondition('JasaFinishingInfrastrukturJalanPost');
        removeCondition('JasaFinishingInfrastrukturTrotoarPost');
        removeCondition('JasaFinishingInfrastrukturSaluranPost');
        removeCondition('JasaFinishingInfrastrukturStrukturPost');
        removeCondition('JasaFinishingInfrastrukturProteksiPost');
       
        JasaKonstruksiFinishingPostLink.style.visibility = 'visible';
        JasaFinishingPostLink.style.visibility = 'visible';
        JasaFinishingBangunanPostLink.style.visibility = 'visible';
        //sub finishing bangunan
        JasaFinishingInteriorPostLink.style.visibility = 'visible';
        //sub finishing STRUKKTUR
        JasaFinishingInteriorModernPostLink.style.visibility = 'visible';
	    JasaFinishingInteriorModernWpcPostLink.style.visibility = 'visible';
        pageNameJasaKonsFinishingPostLink.textContent = urlMappingJasaFinishingInteriorModernWpc[cleanUrlJasaKonsFinishingPost];
    }
  // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaFinishingInteriorModernWpc[cleanUrlJasaKonsFinishingPost]) {
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
                   "name": "Jasa Finishing",
                   "item": "https://www.betonjayareadymix.com/p/jasa-finishing.html"
               },
               {
                   "@type": "ListItem",
                   "position": 4,
                   "name": "Jasa Finishing Bangunan",
                   "item": "https://www.betonjayareadymix.com/p/jasa-finishing-bangunan.html"
               },
               {
                   "@type": "ListItem",
                   "position": 5,
                   "name": "Jasa Finishing Interior",
                   "item": "https://www.betonjayareadymix.com/p/jasa-finishing-interior.html"
               },
               {
                   "@type": "ListItem",
                   "position": 6,
                   "name": "Jasa Finishing Interior Modern",
                   "item": "https://www.betonjayareadymix.com/p/jasa-finishing-interior-modern.html"
               },
			   {
                   "@type": "ListItem",
                   "position": 7,
                   "name": "Jasa Pasang WPC",
                   "item": "https://www.betonjayareadymix.com/2020/02/jasa-pasang-wpc.html"
               },
               {
                   "@type": "ListItem",
                   "position": 8,
                   "name": urlMappingJasaFinishingInteriorModernWpc[cleanUrlJasaKonsFinishingPost],
                   "item": cleanUrlJasaKonsFinishingPost
               }
           ]
       };
       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
	
    if (urlMappingJasaFinishingInteriorModernVinyl[cleanUrlJasaKonsFinishingPost]) {
        restoreCondition('JasaFinishingBangunanPost');
        restoreCondition('JasaFinishingBangunanInteriorPost');
    
        restoreCondition('JasaFinishingInteriorModernPost');
        restoreCondition('JasaFinishingInteriorModernVinylPost');
          
	// hapus elemen id DIV Lain SELAIN JasaKonsFinishingPost
	removeCondition('JasaDesInPost');
        removeCondition('ProdukInFurPost');
        removeCondition('ProdukKonsSaluranPost');
        removeCondition('ProdukKonsPembatasPost');
        removeCondition('ProdukKonsDindingModularPost');
        removeCondition('ProdukKonsPost');
        removeCondition('MaterialKonsStukturPost');
        removeCondition('MaterialKonsFasadPelapisEksteriorPost');
	removeCondition('MaterialKonsAtapPenutupPost');
        removeCondition('JasaKonsPerkuatanTanahLongsorPost');
        removeCondition('JasaKonsPondasiTanahPost');
        removeCondition('JasaKonsPembatasPost');
        removeCondition('JasaKonsPerbaikanPost');
        removeCondition('JasaKonsCuttingBetonPost');
        removeCondition('JasaKonsPengeboranPost');
        removeCondition('JasaKonsBongkarBangunanPost');
        removeCondition('JasaKonsStrukturPost');
        removeCondition('JasaKonsAlatKonstruksiPost');
        removeCondition('JasaKonsJalanPerkerasanPost');
     //   removeCondition('JasaKonsFinishingPost');

	// hapus SEMUA SUB JASA FINSING INTERIOR MODERN KECUALI JasaFinishingInteriorModernWpcPost
	   removeCondition('JasaFinishingInteriorModernWpcPost');
	   //removeCondition('JasaFinishingInteriorModernVinylPost');
	   removeCondition('JasaFinishingInteriorModernPlafonPost');
	   removeCondition('JasaFinishingInteriorModernPvcPost');
	   
	 // hapus elemen id FINISHING STRUKTUR SEMUA NYA
	removeCondition('JasaFinishingDakBetonPost');
        removeCondition('JasaFinishingBetonExposePost');
        removeCondition('JasaPlesteranAcianDindingPost');
        removeCondition('JasaFinishingGroutingStrukturBetonPost');
        removeCondition('JasaPelapisanCoatingStrukturPost');
        removeCondition('JasaFinishingKolomdanBalokPost');
        removeCondition('JasaPelapisanWaterproofingStrukturPost');
        removeCondition('JasaFinishingLantaiBetonPost');
        removeCondition('JasaPelindungRetakStrukturPost'); 
	// hapus elemen id sub JasaFinishingBangunanEksteriorPost Semua
        removeCondition('JasaCatEksteriorRumahPost');
        removeCondition('JasaFinishingFasadEksteriorPost');
        removeCondition('JasaPelapisanAntiCuacaPost');
        removeCondition('JasaPelapisanDindingLuarPost');
        removeCondition('JasaFinishingTamanRumahPost');
        removeCondition('JasaPelapisanBatuAlamEksteriorPost');
        removeCondition('JasaPelapisanGentengDakPost');
      
         // hapus elemen id sub JasaFinishingBangunanInteriorPost Semua selain JasaDesainInteriorPost
	  
	    removeCondition('JasaEpoxyDindingPost');
	  removeCondition('JasaEpoxyLantaiPost');
        removeCondition('JasaInteriorFurnitureCustomePost');
        removeCondition('JasaInteriorFurniturePost');
        removeCondition('JasaGantiKeramikLantaiPost');
        removeCondition('JasaCatInteriorRumahPost');
        removeCondition('JasaPasangWallpaperDindingPost');
        //removeCondition('JasaPasangLantaiVinylPost');
        //removeCondition('JasaPasangPlafonGypsumPost');
        removeCondition('JasaGantiLampuInteriorPost');
        removeCondition('JasaGantiKitchenSetPost');
        removeCondition('JasaFinishingInteriorMinimalisPost');
        removeCondition('JasaFinishingInteriorKlasikPost');
        
       
         // hapus elemen id FINISHING UTAMA lain NYA
        removeCondition('JasaFinishingBangunanEksteriorPost');
        removeCondition('JasaFinishingBangunanStrukturPost');

          // hapus elemen id Infrastruktur Semua
        removeCondition('JasaFinishingInfrastrukturPost');
        removeCondition('JasaFinishingInfrastrukturJalanPost');
        removeCondition('JasaFinishingInfrastrukturTrotoarPost');
        removeCondition('JasaFinishingInfrastrukturSaluranPost');
        removeCondition('JasaFinishingInfrastrukturStrukturPost');
        removeCondition('JasaFinishingInfrastrukturProteksiPost');
       
        JasaKonstruksiFinishingPostLink.style.visibility = 'visible';
        JasaFinishingPostLink.style.visibility = 'visible';
        JasaFinishingBangunanPostLink.style.visibility = 'visible';
        //sub finishing bangunan
        JasaFinishingInteriorPostLink.style.visibility = 'visible';
        //sub finishing STRUKKTUR
        JasaFinishingInteriorModernPostLink.style.visibility = 'visible';
	    JasaFinishingInteriorModernVinylPostLink.style.visibility = 'visible';
        pageNameJasaKonsFinishingPostLink.textContent = urlMappingJasaFinishingInteriorModernVinyl[cleanUrlJasaKonsFinishingPost];
    }
  // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaFinishingInteriorModernVinyl[cleanUrlJasaKonsFinishingPost]) {
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
                   "name": "Jasa Finishing",
                   "item": "https://www.betonjayareadymix.com/p/jasa-finishing.html"
               },
               {
                   "@type": "ListItem",
                   "position": 4,
                   "name": "Jasa Finishing Bangunan",
                   "item": "https://www.betonjayareadymix.com/p/jasa-finishing-bangunan.html"
               },
               {
                   "@type": "ListItem",
                   "position": 5,
                   "name": "Jasa Finishing Interior",
                   "item": "https://www.betonjayareadymix.com/p/jasa-finishing-interior.html"
               },
               {
                   "@type": "ListItem",
                   "position": 6,
                   "name": "Jasa Finishing Interior Modern",
                   "item": "https://www.betonjayareadymix.com/p/jasa-finishing-interior-modern.html"
               },
			   {
                   "@type": "ListItem",
                   "position": 7,
                   "name": "Jasa Pasang Vinyl",
                   "item": "https://www.betonjayareadymix.com/2020/02/jasa-pasang-vinyl.html"
               },
               {
                   "@type": "ListItem",
                   "position": 8,
                   "name": urlMappingJasaFinishingInteriorModernVinyl[cleanUrlJasaKonsFinishingPost],
                   "item": cleanUrlJasaKonsFinishingPost
               }
           ]
       };
       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
	
   if (urlMappingJasaFinishingInteriorModernPlafon[cleanUrlJasaKonsFinishingPost]) {
        restoreCondition('JasaFinishingBangunanPost');
        restoreCondition('JasaFinishingBangunanInteriorPost');
    
        restoreCondition('JasaFinishingInteriorModernPost');
        restoreCondition('JasaFinishingInteriorModernPlafonPost');
          
	// hapus elemen id DIV Lain SELAIN JasaKonsFinishingPost
	removeCondition('JasaDesInPost');
        removeCondition('ProdukInFurPost');
        removeCondition('ProdukKonsSaluranPost');
        removeCondition('ProdukKonsPembatasPost');
        removeCondition('ProdukKonsDindingModularPost');
        removeCondition('ProdukKonsPost');
        removeCondition('MaterialKonsStukturPost');
        removeCondition('MaterialKonsFasadPelapisEksteriorPost');
	removeCondition('MaterialKonsAtapPenutupPost');
        removeCondition('JasaKonsPerkuatanTanahLongsorPost');
        removeCondition('JasaKonsPondasiTanahPost');
        removeCondition('JasaKonsPembatasPost');
        removeCondition('JasaKonsPerbaikanPost');
        removeCondition('JasaKonsCuttingBetonPost');
        removeCondition('JasaKonsPengeboranPost');
        removeCondition('JasaKonsBongkarBangunanPost');
        removeCondition('JasaKonsStrukturPost');
        removeCondition('JasaKonsAlatKonstruksiPost');
        removeCondition('JasaKonsJalanPerkerasanPost');
     //   removeCondition('JasaKonsFinishingPost');

	// hapus SEMUA SUB JASA FINSING INTERIOR MODERN KECUALI JasaFinishingInteriorModernPlafonPost
	   removeCondition('JasaFinishingInteriorModernWpcPost');
	   removeCondition('JasaFinishingInteriorModernVinylPost');
	   //removeCondition('JasaFinishingInteriorModernPlafonPost');
	   removeCondition('JasaFinishingInteriorModernPvcPost');
	   
	 // hapus elemen id FINISHING STRUKTUR SEMUA NYA
	removeCondition('JasaFinishingDakBetonPost');
        removeCondition('JasaFinishingBetonExposePost');
        removeCondition('JasaPlesteranAcianDindingPost');
        removeCondition('JasaFinishingGroutingStrukturBetonPost');
        removeCondition('JasaPelapisanCoatingStrukturPost');
        removeCondition('JasaFinishingKolomdanBalokPost');
        removeCondition('JasaPelapisanWaterproofingStrukturPost');
        removeCondition('JasaFinishingLantaiBetonPost');
        removeCondition('JasaPelindungRetakStrukturPost'); 
	// hapus elemen id sub JasaFinishingBangunanEksteriorPost Semua
        removeCondition('JasaCatEksteriorRumahPost');
        removeCondition('JasaFinishingFasadEksteriorPost');
        removeCondition('JasaPelapisanAntiCuacaPost');
        removeCondition('JasaPelapisanDindingLuarPost');
        removeCondition('JasaFinishingTamanRumahPost');
        removeCondition('JasaPelapisanBatuAlamEksteriorPost');
        removeCondition('JasaPelapisanGentengDakPost');
      
         // hapus elemen id sub JasaFinishingBangunanInteriorPost Semua selain JasaDesainInteriorPost
	  
	    removeCondition('JasaEpoxyDindingPost');
	  removeCondition('JasaEpoxyLantaiPost');
        removeCondition('JasaInteriorFurnitureCustomePost');
        removeCondition('JasaInteriorFurniturePost');
        removeCondition('JasaGantiKeramikLantaiPost');
        removeCondition('JasaCatInteriorRumahPost');
        removeCondition('JasaPasangWallpaperDindingPost');
        //removeCondition('JasaPasangLantaiVinylPost');
        //removeCondition('JasaPasangPlafonGypsumPost');
        removeCondition('JasaGantiLampuInteriorPost');
        removeCondition('JasaGantiKitchenSetPost');
        removeCondition('JasaFinishingInteriorMinimalisPost');
        removeCondition('JasaFinishingInteriorKlasikPost');
        
       
         // hapus elemen id FINISHING UTAMA lain NYA
        removeCondition('JasaFinishingBangunanEksteriorPost');
        removeCondition('JasaFinishingBangunanStrukturPost');

          // hapus elemen id Infrastruktur Semua
        removeCondition('JasaFinishingInfrastrukturPost');
        removeCondition('JasaFinishingInfrastrukturJalanPost');
        removeCondition('JasaFinishingInfrastrukturTrotoarPost');
        removeCondition('JasaFinishingInfrastrukturSaluranPost');
        removeCondition('JasaFinishingInfrastrukturStrukturPost');
        removeCondition('JasaFinishingInfrastrukturProteksiPost');
       
        JasaKonstruksiFinishingPostLink.style.visibility = 'visible';
        JasaFinishingPostLink.style.visibility = 'visible';
        JasaFinishingBangunanPostLink.style.visibility = 'visible';
        //sub finishing bangunan
        JasaFinishingInteriorPostLink.style.visibility = 'visible';
        //sub finishing STRUKKTUR
        JasaFinishingInteriorModernPostLink.style.visibility = 'visible';
	    JasaFinishingInteriorModernPlafonPostLink.style.visibility = 'visible';
        pageNameJasaKonsFinishingPostLink.textContent = urlMappingJasaFinishingInteriorModernPlafon[cleanUrlJasaKonsFinishingPost];
    }
  // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaFinishingInteriorModernPlafon[cleanUrlJasaKonsFinishingPost]) {
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
                   "name": "Jasa Finishing",
                   "item": "https://www.betonjayareadymix.com/p/jasa-finishing.html"
               },
               {
                   "@type": "ListItem",
                   "position": 4,
                   "name": "Jasa Finishing Bangunan",
                   "item": "https://www.betonjayareadymix.com/p/jasa-finishing-bangunan.html"
               },
               {
                   "@type": "ListItem",
                   "position": 5,
                   "name": "Jasa Finishing Interior",
                   "item": "https://www.betonjayareadymix.com/p/jasa-finishing-interior.html"
               },
               {
                   "@type": "ListItem",
                   "position": 6,
                   "name": "Jasa Finishing Interior Modern",
                   "item": "https://www.betonjayareadymix.com/p/jasa-finishing-interior-modern.html"
               },
			   {
                   "@type": "ListItem",
                   "position": 7,
                   "name": "Jasa Pasang Plafon",
                   "item": "https://www.betonjayareadymix.com/2020/02/jasa-pasang-plafon.html"
               },
               {
                   "@type": "ListItem",
                   "position": 8,
                   "name": urlMappingJasaFinishingInteriorModernPlafon[cleanUrlJasaKonsFinishingPost],
                   "item": cleanUrlJasaKonsFinishingPost
               }
           ]
       };
       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
	
   if (urlMappingJasaFinishingInteriorModernPvc[cleanUrlJasaKonsFinishingPost]) {
        restoreCondition('JasaFinishingBangunanPost');
        restoreCondition('JasaFinishingBangunanInteriorPost');
    
        restoreCondition('JasaFinishingInteriorModernPost');
        restoreCondition('JasaFinishingInteriorModernPvcPost');
          
	// hapus elemen id DIV Lain SELAIN JasaKonsFinishingPost
	removeCondition('JasaDesInPost');
        removeCondition('ProdukInFurPost');
        removeCondition('ProdukKonsSaluranPost');
        removeCondition('ProdukKonsPembatasPost');
        removeCondition('ProdukKonsDindingModularPost');
        removeCondition('ProdukKonsPost');
        removeCondition('MaterialKonsStukturPost');
        removeCondition('MaterialKonsFasadPelapisEksteriorPost');
	removeCondition('MaterialKonsAtapPenutupPost');
        removeCondition('JasaKonsPerkuatanTanahLongsorPost');
        removeCondition('JasaKonsPondasiTanahPost');
        removeCondition('JasaKonsPembatasPost');
        removeCondition('JasaKonsPerbaikanPost');
        removeCondition('JasaKonsCuttingBetonPost');
        removeCondition('JasaKonsPengeboranPost');
        removeCondition('JasaKonsBongkarBangunanPost');
        removeCondition('JasaKonsStrukturPost');
        removeCondition('JasaKonsAlatKonstruksiPost');
        removeCondition('JasaKonsJalanPerkerasanPost');
     //   removeCondition('JasaKonsFinishingPost');

	// hapus SEMUA SUB JASA FINSING INTERIOR MODERN KECUALI JasaFinishingInteriorModernPvcPost
	   removeCondition('JasaFinishingInteriorModernWpcPost');
	   removeCondition('JasaFinishingInteriorModernVinylPost');
	   removeCondition('JasaFinishingInteriorModernPlafonPost');
	   //removeCondition('JasaFinishingInteriorModernPvcPost');
	   
	 // hapus elemen id FINISHING STRUKTUR SEMUA NYA
	removeCondition('JasaFinishingDakBetonPost');
        removeCondition('JasaFinishingBetonExposePost');
        removeCondition('JasaPlesteranAcianDindingPost');
        removeCondition('JasaFinishingGroutingStrukturBetonPost');
        removeCondition('JasaPelapisanCoatingStrukturPost');
        removeCondition('JasaFinishingKolomdanBalokPost');
        removeCondition('JasaPelapisanWaterproofingStrukturPost');
        removeCondition('JasaFinishingLantaiBetonPost');
        removeCondition('JasaPelindungRetakStrukturPost'); 
	// hapus elemen id sub JasaFinishingBangunanEksteriorPost Semua
        removeCondition('JasaCatEksteriorRumahPost');
        removeCondition('JasaFinishingFasadEksteriorPost');
        removeCondition('JasaPelapisanAntiCuacaPost');
        removeCondition('JasaPelapisanDindingLuarPost');
        removeCondition('JasaFinishingTamanRumahPost');
        removeCondition('JasaPelapisanBatuAlamEksteriorPost');
        removeCondition('JasaPelapisanGentengDakPost');
      
         // hapus elemen id sub JasaFinishingBangunanInteriorPost Semua selain JasaDesainInteriorPost
	  
	    removeCondition('JasaEpoxyDindingPost');
	  removeCondition('JasaEpoxyLantaiPost');
        removeCondition('JasaInteriorFurnitureCustomePost');
        removeCondition('JasaInteriorFurniturePost');
        removeCondition('JasaGantiKeramikLantaiPost');
        removeCondition('JasaCatInteriorRumahPost');
        removeCondition('JasaPasangWallpaperDindingPost');
        //removeCondition('JasaPasangLantaiVinylPost');
        //removeCondition('JasaPasangPlafonGypsumPost');
        removeCondition('JasaGantiLampuInteriorPost');
        removeCondition('JasaGantiKitchenSetPost');
        removeCondition('JasaFinishingInteriorMinimalisPost');
        removeCondition('JasaFinishingInteriorKlasikPost');
        
       
         // hapus elemen id FINISHING UTAMA lain NYA
        removeCondition('JasaFinishingBangunanEksteriorPost');
        removeCondition('JasaFinishingBangunanStrukturPost');

          // hapus elemen id Infrastruktur Semua
        removeCondition('JasaFinishingInfrastrukturPost');
        removeCondition('JasaFinishingInfrastrukturJalanPost');
        removeCondition('JasaFinishingInfrastrukturTrotoarPost');
        removeCondition('JasaFinishingInfrastrukturSaluranPost');
        removeCondition('JasaFinishingInfrastrukturStrukturPost');
        removeCondition('JasaFinishingInfrastrukturProteksiPost');
       
        JasaKonstruksiFinishingPostLink.style.visibility = 'visible';
        JasaFinishingPostLink.style.visibility = 'visible';
        JasaFinishingBangunanPostLink.style.visibility = 'visible';
        //sub finishing bangunan
        JasaFinishingInteriorPostLink.style.visibility = 'visible';
        //sub finishing STRUKKTUR
        JasaFinishingInteriorModernPostLink.style.visibility = 'visible';
	    JasaFinishingInteriorModernPvcPostLink.style.visibility = 'visible';
        pageNameJasaKonsFinishingPostLink.textContent = urlMappingJasaFinishingInteriorModernPvc[cleanUrlJasaKonsFinishingPost];
    }
  // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaFinishingInteriorModernPvc[cleanUrlJasaKonsFinishingPost]) {
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
                   "name": "Jasa Finishing",
                   "item": "https://www.betonjayareadymix.com/p/jasa-finishing.html"
               },
               {
                   "@type": "ListItem",
                   "position": 4,
                   "name": "Jasa Finishing Bangunan",
                   "item": "https://www.betonjayareadymix.com/p/jasa-finishing-bangunan.html"
               },
               {
                   "@type": "ListItem",
                   "position": 5,
                   "name": "Jasa Finishing Interior",
                   "item": "https://www.betonjayareadymix.com/p/jasa-finishing-interior.html"
               },
               {
                   "@type": "ListItem",
                   "position": 6,
                   "name": "Jasa Finishing Interior Modern",
                   "item": "https://www.betonjayareadymix.com/p/jasa-finishing-interior-modern.html"
               },
			   {
                   "@type": "ListItem",
                   "position": 7,
                   "name": "Jasa Pasang Pvc",
                   "item": "https://www.betonjayareadymix.com/2020/02/jasa-pasang-pvc.html"
               },
               {
                   "@type": "ListItem",
                   "position": 8,
                   "name": urlMappingJasaFinishingInteriorModernPvc[cleanUrlJasaKonsFinishingPost],
                   "item": cleanUrlJasaKonsFinishingPost
               }
           ]
       };
       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
	
	// AKHIR SUB FINISHING INTERIOR MODERN
//AKHIR FINISHING INTERIOR

//SUB JasaFinishingBangunanEksteriorPost
if (urlMappingJasaFinishingFasadEksterior[cleanUrlJasaKonsFinishingPost]) {
        restoreCondition('JasaFinishingBangunanPost');
        restoreCondition('JasaFinishingBangunanEksteriorPost');
    
        restoreCondition('JasaFinishingFasadEksteriorPost');
           
	// hapus elemen id DIV Lain SELAIN JasaKonsFinishingPost
	removeCondition('JasaDesInPost');
        removeCondition('ProdukInFurPost');
        removeCondition('ProdukKonsSaluranPost');
        removeCondition('ProdukKonsPembatasPost');
        removeCondition('ProdukKonsDindingModularPost');
        removeCondition('ProdukKonsPost');
        removeCondition('MaterialKonsStukturPost');
        removeCondition('MaterialKonsFasadPelapisEksteriorPost');
	removeCondition('MaterialKonsAtapPenutupPost');
        removeCondition('JasaKonsPerkuatanTanahLongsorPost');
        removeCondition('JasaKonsPondasiTanahPost');
        removeCondition('JasaKonsPembatasPost');
        removeCondition('JasaKonsPerbaikanPost');
        removeCondition('JasaKonsCuttingBetonPost');
        removeCondition('JasaKonsPengeboranPost');
        removeCondition('JasaKonsBongkarBangunanPost');
        removeCondition('JasaKonsStrukturPost');
        removeCondition('JasaKonsAlatKonstruksiPost');
        removeCondition('JasaKonsJalanPerkerasanPost');
     //   removeCondition('JasaKonsFinishingPost');

	 // hapus elemen id FINISHING STRUKTUR SEMUA NYA
	removeCondition('JasaFinishingDakBetonPost');
        removeCondition('JasaFinishingBetonExposePost');
        removeCondition('JasaPlesteranAcianDindingPost');
        removeCondition('JasaFinishingGroutingStrukturBetonPost');
        removeCondition('JasaPelapisanCoatingStrukturPost');
        removeCondition('JasaFinishingKolomdanBalokPost');
        removeCondition('JasaPelapisanWaterproofingStrukturPost');
        removeCondition('JasaFinishingLantaiBetonPost');
        removeCondition('JasaPelindungRetakStrukturPost'); 
	// hapus elemen id sub JasaFinishingBangunanEksteriorPost Semua KECUALI JasaFinishingFasadEksteriorPost
        removeCondition('JasaCatEksteriorRumahPost');
        //removeCondition('');
        removeCondition('JasaPelapisanAntiCuacaPost');
        removeCondition('JasaPelapisanDindingLuarPost');
        removeCondition('JasaFinishingTamanRumahPost');
        removeCondition('JasaPelapisanBatuAlamEksteriorPost');
        removeCondition('JasaPelapisanGentengDakPost');
      
         // hapus elemen id sub JasaFinishingBangunanInteriorPost SEMUA
	   
	    removeCondition('JasaEpoxyDindingPost');
	removeCondition('JasaEpoxyLantaiPost');
        removeCondition('JasaInteriorFurnitureCustomePost');
        removeCondition('JasaGantiKeramikLantaiPost');
        removeCondition('JasaCatInteriorRumahPost');
        removeCondition('JasaPasangWallpaperDindingPost');
        //removeCondition('JasaPasangLantaiVinylPost');
        //removeCondition('JasaPasangPlafonGypsumPost');
        removeCondition('JasaGantiLampuInteriorPost');
        removeCondition('JasaGantiKitchenSetPost');
        removeCondition('JasaFinishingInteriorMinimalisPost');
        removeCondition('JasaFinishingInteriorKlasikPost');
        removeCondition('JasaFinishingInteriorModernPost');
       
         // hapus elemen id FINISHING UTAMA lain NYA
        removeCondition('JasaFinishingBangunanInteriorPost');
        removeCondition('JasaFinishingBangunanStrukturPost');

          // hapus elemen id Infrastruktur Semua
        removeCondition('JasaFinishingInfrastrukturPost');
        removeCondition('JasaFinishingInfrastrukturJalanPost');
        removeCondition('JasaFinishingInfrastrukturTrotoarPost');
        removeCondition('JasaFinishingInfrastrukturSaluranPost');
        removeCondition('JasaFinishingInfrastrukturStrukturPost');
        removeCondition('JasaFinishingInfrastrukturProteksiPost');

	 // hapus SEMUA SUB JASA FINSING INTERIOR MODERN 
	   removeCondition('JasaFinishingInteriorModernWpcPost');
	   removeCondition('JasaFinishingInteriorModernVinylPost');
	   removeCondition('JasaFinishingInteriorModernPlafonPost');
	   removeCondition('JasaFinishingInteriorModernPvcPost');
	
        JasaKonstruksiFinishingPostLink.style.visibility = 'visible';
        JasaFinishingPostLink.style.visibility = 'visible';
        JasaFinishingBangunanPostLink.style.visibility = 'visible';
        //JasaFinishingBangunanEksteriorPost
        JasaFinishingBangunanEksteriorPostLink.style.visibility = 'visible';
        //JasaFinishingFasadEksteriorPost
        JasaFinishingFasadEksteriorPostLink.style.visibility = 'visible';
	//pageNameJasaKonsFinishingPostLink.style.visibility = 'visible';
        pageNameJasaKonsFinishingPostLink.textContent = urlMappingJasaFinishingFasadEksterior[cleanUrlJasaKonsFinishingPost];
    }

  // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaFinishingFasadEksterior[cleanUrlJasaKonsFinishingPost]) {
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
                   "name": "Jasa Finishing",
                   "item": "https://www.betonjayareadymix.com/p/jasa-finishing.html"
               },
               {
                   "@type": "ListItem",
                   "position": 4,
                   "name": "Jasa Finishing Bangunan",
                   "item": "https://www.betonjayareadymix.com/p/jasa-finishing-bangunan.html"
               },
               {
                   "@type": "ListItem",
                   "position": 5,
                   "name": "Jasa Finishing Eksterior",
                   "item": "https://www.betonjayareadymix.com/p/jasa-finishing-eksterior.html"
               },
               {
                   "@type": "ListItem",
                   "position": 6,
                   "name": "Jasa Finishing Fasad Eksterior",
                   "item": "https://www.betonjayareadymix.com/p/jasa-finishing-fasad-eksterior.html"
               },
               {
                   "@type": "ListItem",
                   "position": 7,
                   "name": urlMappingJasaFinishingFasadEksterior[cleanUrlJasaKonsFinishingPost],
                   "item": cleanUrlJasaKonsFinishingPost
               }
           ]
       };
       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
if (urlMappingJasaFinishingTamanRumah[cleanUrlJasaKonsFinishingPost]) {
        restoreCondition('JasaFinishingBangunanPost');
        restoreCondition('JasaFinishingBangunanEksteriorPost');
    
        restoreCondition('JasaFinishingTamanRumahPost');
           
	// hapus elemen id DIV Lain SELAIN JasaKonsFinishingPost
	removeCondition('JasaDesInPost');
        removeCondition('ProdukInFurPost');
        removeCondition('ProdukKonsSaluranPost');
        removeCondition('ProdukKonsPembatasPost');
        removeCondition('ProdukKonsDindingModularPost');
        removeCondition('ProdukKonsPost');
        removeCondition('MaterialKonsStukturPost');
        removeCondition('MaterialKonsFasadPelapisEksteriorPost');
	removeCondition('MaterialKonsAtapPenutupPost');
        removeCondition('JasaKonsPerkuatanTanahLongsorPost');
        removeCondition('JasaKonsPondasiTanahPost');
        removeCondition('JasaKonsPembatasPost');
        removeCondition('JasaKonsPerbaikanPost');
        removeCondition('JasaKonsCuttingBetonPost');
        removeCondition('JasaKonsPengeboranPost');
        removeCondition('JasaKonsBongkarBangunanPost');
        removeCondition('JasaKonsStrukturPost');
        removeCondition('JasaKonsAlatKonstruksiPost');
        removeCondition('JasaKonsJalanPerkerasanPost');
     //   removeCondition('JasaKonsFinishingPost');

	 // hapus elemen id FINISHING STRUKTUR SEMUA NYA
	removeCondition('JasaFinishingDakBetonPost');
        removeCondition('JasaFinishingBetonExposePost');
        removeCondition('JasaPlesteranAcianDindingPost');
        removeCondition('JasaFinishingGroutingStrukturBetonPost');
        removeCondition('JasaPelapisanCoatingStrukturPost');
        removeCondition('JasaFinishingKolomdanBalokPost');
        removeCondition('JasaPelapisanWaterproofingStrukturPost');
        removeCondition('JasaFinishingLantaiBetonPost');
        removeCondition('JasaPelindungRetakStrukturPost'); 
	// hapus elemen id sub JasaFinishingBangunanEksteriorPost Semua KECUALI JasaFinishingFasadEksteriorPost
        removeCondition('JasaCatEksteriorRumahPost');
        //removeCondition('');
        removeCondition('JasaPelapisanAntiCuacaPost');
        removeCondition('JasaPelapisanDindingLuarPost');
        removeCondition('JasaFinishingFasadEksteriorPost');
        removeCondition('JasaPelapisanBatuAlamEksteriorPost');
        removeCondition('JasaPelapisanGentengDakPost');
      
         // hapus elemen id sub JasaFinishingBangunanInteriorPost SEMUA
	  
        removeCondition('JasaEpoxyDindingPost');
	removeCondition('JasaEpoxyLantaiPost');
        removeCondition('JasaInteriorFurnitureCustomePost');
        removeCondition('JasaGantiKeramikLantaiPost');
        removeCondition('JasaCatInteriorRumahPost');
        removeCondition('JasaPasangWallpaperDindingPost');
        //removeCondition('JasaPasangLantaiVinylPost');
        //removeCondition('JasaPasangPlafonGypsumPost');
        removeCondition('JasaGantiLampuInteriorPost');
        removeCondition('JasaGantiKitchenSetPost');
        removeCondition('JasaFinishingInteriorMinimalisPost');
        removeCondition('JasaFinishingInteriorKlasikPost');
        removeCondition('JasaFinishingInteriorModernPost');
       
         // hapus elemen id FINISHING UTAMA lain NYA
        removeCondition('JasaFinishingBangunanInteriorPost');
        removeCondition('JasaFinishingBangunanStrukturPost');

          // hapus elemen id Infrastruktur Semua
        removeCondition('JasaFinishingInfrastrukturPost');
        removeCondition('JasaFinishingInfrastrukturJalanPost');
        removeCondition('JasaFinishingInfrastrukturTrotoarPost');
        removeCondition('JasaFinishingInfrastrukturSaluranPost');
        removeCondition('JasaFinishingInfrastrukturStrukturPost');
        removeCondition('JasaFinishingInfrastrukturProteksiPost');

	  // hapus SEMUA SUB JASA FINSING INTERIOR MODERN 
	   removeCondition('JasaFinishingInteriorModernWpcPost');
	   removeCondition('JasaFinishingInteriorModernVinylPost');
	   removeCondition('JasaFinishingInteriorModernPlafonPost');
	   removeCondition('JasaFinishingInteriorModernPvcPost');
	
        JasaKonstruksiFinishingPostLink.style.visibility = 'visible';
        JasaFinishingPostLink.style.visibility = 'visible';
        JasaFinishingBangunanPostLink.style.visibility = 'visible';
        //JasaFinishingBangunanEksteriorPost
        JasaFinishingBangunanEksteriorPostLink.style.visibility = 'visible';
        //JasaFinishingTamanRumahPost
        JasaFinishingTamanRumahPostLink.style.visibility = 'visible';
        pageNameJasaKonsFinishingPostLink.textContent = urlMappingJasaFinishingTamanRumah[cleanUrlJasaKonsFinishingPost];
    }
 // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaFinishingTamanRumah[cleanUrlJasaKonsFinishingPost]) {
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
                   "name": "Jasa Finishing",
                   "item": "https://www.betonjayareadymix.com/p/jasa-finishing.html"
               },
               {
                   "@type": "ListItem",
                   "position": 4,
                   "name": "Jasa Finishing Bangunan",
                   "item": "https://www.betonjayareadymix.com/p/jasa-finishing-bangunan.html"
               },
               {
                   "@type": "ListItem",
                   "position": 5,
                   "name": "Jasa Finishing Eksterior",
                   "item": "https://www.betonjayareadymix.com/p/jasa-finishing-eksterior.html"
               },
               {
                   "@type": "ListItem",
                   "position": 6,
                   "name": "Jasa Finishing Taman Rumah",
                   "item": "https://www.betonjayareadymix.com/p/jasa-finishing-taman-rumah.html"
               },
               {
                   "@type": "ListItem",
                   "position": 7,
                   "name": urlMappingJasaFinishingTamanRumah[cleanUrlJasaKonsFinishingPost],
                   "item": cleanUrlJasaKonsFinishingPost
               }
           ]
       };
       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
//AKHIR SUB JasaFinishingBangunanEksteriorPost
 //Sub Finishing Infrastruktur
	/*
    if (urlMappingFinishingInfrastrukturJalan[cleanUrlJasaKonsFinishingPost]) {
        restoreCondition('JasaFinishingInfrastrukturPost');
       restoreCondition('JasaFinishingInfrastrukturJalanPost');
     
          // hapus elemen id DIV Lain
        removeCondition('MaterialKons');
	       removeCondition('ProdukKons');
        //removeCondition('ProdukKonsSaluran');
        //removeCondition('ProdukKonsPembatas');
        removeCondition('JasaKonsPembatas');
        removeCondition('JasaKonsJalanPerkerasan');
        removeCondition('JasaKonsPondasiTanah');
        removeCondition('JasaKonsPerbaikan');
        removeCondition('JasaKonsStruktur');
       	removeCondition('JasaKons');
        removeCondition('JasaKonsPost');
        removeCondition('MenuKons');
     
     
            // hapus elemen id lain nya
        removeCondition('JasaFinishingInfrastrukturProteksiPost');
        removeCondition('JasaFinishingInfrastrukturTrotoarPost');
        removeCondition('JasaFinishingInfrastrukturSaluranPost');
        removeCondition('JasaFinishingInfrastrukturStrukturPost');
       //hapus elemen id bangunan
        removeCondition('JasaFinishingBangunanPost');
        removeCondition('JasaFinishingBangunanInterior');
        removeCondition('JasaFinishingBangunanEksterior');
        removeCondition('JasaFinishingBangunanStruktur');
    
        JasaKonstruksiFinishingPostLink.style.visibility = 'visible';
        JasaFinishingPostLink.style.visibility = 'visible';
        JasaFinishingInfrastrukturLink.style.visibility = 'visible';
       //sub finish infrastruktur
        JasaFinishingJalanLink.style.visibility = 'visible';
     
        pageNameJasaKonsFinishing.textContent = urlMappingFinishingInfrastrukturJalan[cleanUrlJasaKonsFinishingPost];

    }
   if (urlMappingFinishingInfrastrukturTrotoar[cleanUrlJasaKonsFinishingPost]) {
        restoreCondition('JasaFinishingInfrastrukturPost');
        restoreCondition('JasaFinishingTrotoar');
    
          // hapus elemen id DIV Lain
        removeCondition('MaterialKons');
	       removeCondition('ProdukKons');
        //removeCondition('ProdukKonsSaluran');
        //removeCondition('ProdukKonsPembatas');
        removeCondition('JasaKonsPembatas');
        removeCondition('JasaKonsJalanPerkerasan');
        removeCondition('JasaKonsPondasiTanah');
        removeCondition('JasaKonsPerbaikan');
        removeCondition('JasaKonsStruktur');
       	removeCondition('JasaKons');
        removeCondition('JasaKonsPost');
        removeCondition('MenuKons');
       
  
            // hapus elemen id lain nya
        removeCondition('JasaFinishingInfrastrukturJalanPost');
        removeCondition('JasaFinishingInfrastrukturProteksiPost');
        removeCondition('JasaFinishingInfrastrukturSaluranPost');
        removeCondition('JasaFinishingInfrastrukturStrukturPost');
       //hapus elemen id bangunan
        removeCondition('JasaFinishingBangunanPost');
        removeCondition('JasaFinishingBangunanInterior');
        removeCondition('JasaFinishingBangunanEksterior');
        removeCondition('JasaFinishingBangunanStruktur');
    
        JasaKonstruksiFinishingPostLink.style.visibility = 'visible';
        JasaFinishingPostLink.style.visibility = 'visible';
        JasaFinishingInfrastrukturLink.style.visibility = 'visible';
       //sub finish infrastruktur
        JasaFinishingTrotoarLink.style.visibility = 'visible';
    
        pageNameJasaKonsFinishing.textContent = urlMappingFinishingInfrastrukturTrotoar[cleanUrlJasaKonsFinishingPost];

    }
   if (urlMappingFinishingInfrastrukturSaluran[cleanUrlJasaKonsFinishingPost]) {
        restoreCondition('JasaFinishingInfrastrukturPost');
        restoreCondition('JasaFinishingSaluran');
    
          // hapus elemen id DIV Lain
        removeCondition('MaterialKons');
	       removeCondition('ProdukKons');
        //removeCondition('ProdukKonsSaluran');
        //removeCondition('ProdukKonsPembatas');
        removeCondition('JasaKonsJalanPerkerasan');
        removeCondition('JasaKonsPondasiTanah');
        removeCondition('JasaKonsPembatas');
        removeCondition('JasaKonsPerbaikan');
        removeCondition('JasaKonsStruktur');
       	removeCondition('JasaKons');
        removeCondition('JasaKonsPost');
        removeCondition('MenuKons');

  
       
            // hapus elemen id lain nya
        removeCondition('JasaFinishingInfrastrukturJalanPost');
        removeCondition('JasaFinishingInfrastrukturTrotoarPost');
        removeCondition('JasaFinishingInfrastrukturProteksiPost');
        removeCondition('JasaFinishingInfrastrukturStrukturPost');
       //hapus elemen id bangunan
        removeCondition('JasaFinishingBangunanPost');
        removeCondition('JasaFinishingBangunanInterior');
        removeCondition('JasaFinishingBangunanEksterior');
        removeCondition('JasaFinishingBangunanStruktur');
    
        JasaKonstruksiFinishingPostLink.style.visibility = 'visible';
        JasaFinishingPostLink.style.visibility = 'visible';
        JasaFinishingInfrastrukturLink.style.visibility = 'visible';
       //sub finish infrastruktur
        JasaFinishingSaluranLink.style.visibility = 'visible';
   
        pageNameJasaKonsFinishing.textContent = urlMappingFinishingInfrastrukturSaluran[cleanUrlJasaKonsFinishingPost];

    }
  if (urlMappingFinishingInfrastrukturStruktur[cleanUrlJasaKonsFinishingPost]) {
        restoreCondition('JasaFinishingInfrastrukturPost');
        restoreCondition('JasaFinishingInfrastrukturStrukturPost');
          // hapus elemen id DIV Lain
        removeCondition('MaterialKons');
	       removeCondition('ProdukKons');
        //removeCondition('ProdukKonsSaluran');
        //removeCondition('ProdukKonsPembatas');
        removeCondition('JasaKonsPembatas');
        removeCondition('JasaKonsJalanPerkerasan');
        removeCondition('JasaKonsPondasiTanah');
        removeCondition('JasaKonsPerbaikan');
        removeCondition('JasaKonsStruktur');
       	removeCondition('JasaKons');
        removeCondition('JasaKonsPost');
        removeCondition('MenuKons');

             // hapus elemen id lain nya
        removeCondition('JasaFinishingInfrastrukturJalanPost');
        removeCondition('JasaFinishingInfrastrukturTrotoarPost');
        removeCondition('JasaFinishingInfrastrukturSaluranPost');
        removeCondition('JasaFinishingInfrastrukturProteksiPost');
       //hapus elemen id bangunan
        removeCondition('JasaFinishingBangunanPost');
        removeCondition('JasaFinishingBangunanInterior');
        removeCondition('JasaFinishingBangunanEksterior');
        removeCondition('JasaFinishingBangunanStruktur');
     
        JasaKonstruksiFinishingPostLink.style.visibility = 'visible';
        JasaFinishingPostLink.style.visibility = 'visible';
        JasaFinishingInfrastrukturLink.style.visibility = 'visible';
        //sub finish infrastruktur
        JasaFinishingStrukturLink.style.visibility = 'visible';
   
        pageNameJasaKonsFinishing.textContent = urlMappingFinishingInfrastrukturStruktur[cleanUrlJasaKonsFinishingPost];

    }
  if (urlMappingFinishingInfrastrukturProteksi[cleanUrlJasaKonsFinishingPost]) {
        restoreCondition('JasaFinishingInfrastrukturPost');
        restoreCondition('JasaFinishingInfrastrukturProteksiPost');
       
          // hapus elemen id DIV Lain
        removeCondition('MaterialKons');
	       removeCondition('ProdukKons');
        //removeCondition('ProdukKonsSaluran');
        //removeCondition('ProdukKonsPembatas');
        removeCondition('JasaKonsPembatas');
        removeCondition('JasaKonsJalanPerkerasan');
        removeCondition('JasaKonsPondasiTanah');
        removeCondition('JasaKonsPerbaikan');
        removeCondition('JasaKonsStruktur');
       	removeCondition('JasaKons');
        removeCondition('JasaKonsPost');
        removeCondition('MenuKons');
     
       
        // hapus elemen id lain nya
        removeCondition('JasaFinishingInfrastrukturJalanPost');
        removeCondition('JasaFinishingInfrastrukturTrotoarPost');
        removeCondition('JasaFinishingInfrastrukturSaluranPost');
        removeCondition('JasaFinishingInfrastrukturStrukturPost');
       //hapus elemen id bangunan
        removeCondition('JasaFinishingBangunanPost');
        removeCondition('JasaFinishingBangunanInterior');
        removeCondition('JasaFinishingBangunanEksterior');
        removeCondition('JasaFinishingBangunanStruktur');
       
        JasaKonstruksiFinishingPostLink.style.visibility = 'visible';
        JasaFinishingPostLink.style.visibility = 'visible';
        JasaFinishingInfrastrukturLink.style.visibility = 'visible';
       //sub finish infrastruktur
        JasaFinishingProteksiLink.style.visibility = 'visible';
   
        pageNameJasaKonsFinishing.textContent = urlMappingFinishingInfrastrukturProteksi[cleanUrlJasaKonsFinishingPost];

    }
    */

   });
