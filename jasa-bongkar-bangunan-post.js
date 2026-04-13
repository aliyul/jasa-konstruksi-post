//SUB MAPPING JASA BONGKAR BANGUNAN
// ============================================================
// JASA BONGKAR BANGUNAN (SUB2) - DENGAN MASTER HARGA
// ============================================================

const urlMappingJasaBongkarBangunan = {
  // [SUB2] - MASTER PAGE
  //"https://www.betonjayareadymix.com/p/jasa-bongkar-bangunan.html": "Jasa Bongkar Bangunan",
  
  // [MONEY PAGE - MASTER] - HARGA BONGKAR BANGUNAN
  "https://www.betonjayareadymix.com/2018/09/harga-jasa-bongkar-bangunan.html": "Harga Jasa Bongkar Bangunan"
};


// ============================================================
// JASA BONGKAR TOWER - BLOG POST
// ============================================================
// 🧠 SEO NOTE: Halaman ini adalah MONEY PAGE dengan intent transaksional.
// Konten: Harga bongkar tower berdasarkan jenis dan tinggi, layanan profesional.
// Parent: Jasa Bongkar Tower (SUB2 - /p/jasa-bongkar-tower.html)
// Breadcrumb: Home > Jasa Konstruksi > Jasa Bongkar Bangunan > Jasa Bongkar Tower (4 level)
// ============================================================

const urlMappingJasaBongkarTower = {
  // ============================================================
  // [MONEY PAGE] - BONGKAR TOWER
  // ============================================================
  "https://www.betonjayareadymix.com/2018/09/harga-jasa-bongkar-tower.html": "Harga Jasa Bongkar Tower",
  "https://www.betonjayareadymix.com/2018/09/jasa-bongkar-tower-triangle.html": "Jasa Bongkar Tower Triangle"
};

// ============================================================
// 🟡 SARAN TAMBAHAN URL (OPTIONAL - PERLU DIBUAT)
// ============================================================
/*
📌 URL YANG DISARANKAN UNTUK DITAMBAHKAN (JIKA KONTEN MEMADAI):

| URL | Nama Halaman | Status | Parent | Alasan SEO |
|-----|--------------|--------|--------|------------|
| /2019/08/harga-bongkar-tower-bts.html | Harga Bongkar Tower BTS | ⚠️ PERLU DIBUAT (404) | Jasa Bongkar Tower | Menarget keyword spesifik tower BTS |

📌 BREADCRUMB (jika halaman dibuat):
Home > Jasa Konstruksi > Jasa Bongkar Bangunan > Jasa Bongkar Tower > Harga Bongkar Tower BTS
⚠️ PERHATIAN: Ini akan menjadi 5 level! Solusi: skip "Jasa Bongkar Tower" di breadcrumb.

📌 BREADCRUMB YANG BENAR UNTUK MONEY PAGE (SKIP SUB2):
Home > Jasa Konstruksi > Jasa Bongkar Bangunan > Harga Bongkar Tower BTS (4 level)

✅ AMAN - TIDAK PERLU REDIRECT untuk URL yang sudah ada
*/

// ============================================================
// JASA BONGKAR RUMAH - SARAN ITEM BARU
// ============================================================

const urlMappingJasaBongkarRumah = {
  // [SUB2] - JASA BONGKAR RUMAH (PAGE)
  //"https://www.betonjayareadymix.com/p/jasa-bongkar-rumah.html": "Jasa Bongkar Rumah [SUB2]",
  
  // ============================================================
  // SARAN ITEM BARU (MONEY PAGE) - LANGSUNG DI BAWAH RUMAH
  // ============================================================
  // "https://www.betonjayareadymix.com/2019/08/harga-bongkar-rumah-tinggal.html": "Harga Bongkar Rumah Tinggal [MONEY PAGE]",
  // "https://www.betonjayareadymix.com/2019/08/jasa-bongkar-rumah-2-lantai.html": "Jasa Bongkar Rumah 2 Lantai [MONEY PAGE]",
  // "https://www.betonjayareadymix.com/2019/08/jasa-bongkar-rumah-permanen.html": "Jasa Bongkar Rumah Permanen [MONEY PAGE]",
  // "https://www.betonjayareadymix.com/2019/08/jasa-bongkar-rumah-semi-permanen.html": "Jasa Bongkar Rumah Semi Permanen [MONEY PAGE]"
};
// ============================================================
// 🟡 SEO NOTE - JASA BONGKAR RUMAH
// ============================================================
/*
📌 BREADCRUMB:
Home > Jasa Konstruksi > Jasa Bongkar Bangunan > Harga Jasa Bongkar Bangunan (4 level)

📌 SARAN ITEM BARU:
// "https://www.betonjayareadymix.com/2019/08/jasa-bongkar-rumah-tinggal.html": "Jasa Bongkar Rumah Tinggal",
// Status: [MONEY PAGE] - di bawah Jasa Bongkar Rumah

✅ AMAN - TIDAK PERLU REDIRECT
*/
// ============================================================
// JASA BONGKAR BETON - BLOG POST
// ============================================================
// 🧠 SEO NOTE: Halaman ini adalah MONEY PAGE dengan intent transaksional.
// Breadcrumb: Home > Jasa Konstruksi > Jasa Bongkar Bangunan > Harga Bongkar Beton (4 level)
// ============================================================

const urlMappingJasaBongkarBeton = {
  // [MONEY PAGE] - HARGA BONGKAR BETON
  "https://www.betonjayareadymix.com/2019/06/harga-bongkar-beton.html": "Harga Bongkar Beton",
  "https://www.betonjayareadymix.com/2019/06/harga-bongkar-beton-per-m3.html": "Harga Bongkar Beton Per m3",
  "https://www.betonjayareadymix.com/2019/06/harga-bobok-beton-per-m2.html": "Harga Bobok Beton per m2",
  "https://www.betonjayareadymix.com/2018/06/harga-jasa-bobok-beton.html": "Harga Jasa Bobok Beton"
};

// ============================================================
// 🟡 SEO NOTE - JASA BONGKAR BETON
// ============================================================
/*
📌 BREADCRUMB:
Home > Jasa Konstruksi > Jasa Bongkar Bangunan > Harga Bongkar Beton (4 level)

⚠️ PERHATIAN: Ada potensi cannibal antar keempat URL ini karena keyword mirip.
Rekomendasi: Pilih 1 master page, redirect 3 lainnya.

📌 REDIRECT PLAN:
| From | To | Type |
|------|-----|------|
| /2019/06/harga-bongkar-beton-per-m3.html | /2019/06/harga-bongkar-beton.html | 301 |
| /2019/06/harga-bobok-beton-per-m2.html | /2019/06/harga-bongkar-beton.html | 301 |
| /2018/06/harga-jasa-bobok-beton.html | /2019/06/harga-bongkar-beton.html | 301 |
*/
// ============================================================
// JASA BONGKAR TEMBOK - BLOG POST
// ============================================================
// 🧠 SEO NOTE: Halaman ini adalah MONEY PAGE dengan intent transaksional.
// Breadcrumb: Home > Jasa Konstruksi > Jasa Bongkar Bangunan > Jasa Bobok Tembok (4 level)
// ============================================================

const urlMappingJasaBongkarTembok = {
  // [MONEY PAGE] - JASA BOBOK TEMBOK
  "https://www.betonjayareadymix.com/2019/06/jasa-bobok-tembok-per-meter.html": "Jasa Bobok Tembok Per Meter",
  "https://www.betonjayareadymix.com/2019/06/harga-jasa-bobok-tembok.html": "Harga Jasa Bobok Tembok",
  "https://www.betonjayareadymix.com/2019/06/jasa-tukang-bobok-tembok.html": "Jasa Tukang Bobok Tembok"
};

// ============================================================
// 🟡 SEO NOTE - JASA BONGKAR TEMBOK
// ============================================================
/*
📌 BREADCRUMB:
Home > Jasa Konstruksi > Jasa Bongkar Bangunan > Jasa Bobok Tembok (4 level)

⚠️ PERHATIAN: Overlap dengan urlMappingJasaBongkarDinding ("tembok" vs "dinding").
Rekomendasi: Gabungkan atau bedakan angle dengan jelas.

✅ AMAN - TIDAK PERLU REDIRECT (jika konten dibedakan)
*/
// ============================================================
// JASA BONGKAR DINDING - BLOG POST
// ============================================================
// 🧠 SEO NOTE: Halaman ini adalah MONEY PAGE dengan intent transaksional.
// Breadcrumb: Home > Jasa Konstruksi > Jasa Bongkar Bangunan > Harga Jasa Bongkar Dinding (4 level)
// ============================================================

const urlMappingJasaBongkarDinding = {
  // [MONEY PAGE] - HARGA BONGKAR DINDING
  "https://www.betonjayareadymix.com/2019/06/harga-jasa-bongkar-dinding.html": "Harga Jasa Bongkar Dinding",
  "https://www.betonjayareadymix.com/2019/06/harga-bongkar-dinding-bata-per-m2.html": "Harga Jasa Bongkar Dinding Bata Per M2"
};

// ============================================================
// 🟡 SEO NOTE - JASA BONGKAR DINDING
// ============================================================
/*
📌 BREADCRUMB:
Home > Jasa Konstruksi > Jasa Bongkar Bangunan > Harga Jasa Bongkar Dinding (4 level)

⚠️ PERHATIAN: Overlap dengan urlMappingJasaBongkarTembok.
Rekomendasi: Bedakan angle - "tembok" fokus ke dinding luar/struktural, "dinding" fokus ke partisi dalam.

✅ AMAN - TIDAK PERLU REDIRECT (jika angle dibedakan)
*/
// ============================================================
// CONST KOSONG - SARAN ITEM BARU (PERLU DIBUAT)
// ============================================================

// 1. JASA BONGKAR ATAP
const urlMappingJasaBongkarAtap = {
  // SARAN: Buat halaman untuk bongkar atap
  // "https://www.betonjayareadymix.com/2019/06/harga-bongkar-atap-rumah.html": "Harga Bongkar Atap Rumah",
  // Status: [MONEY PAGE] - di bawah Jasa Bongkar Bangunan
  // "https://www.betonjayareadymix.com/2019/06/jasa-bongkar-atap-baja-ringan.html": "Jasa Bongkar Atap Baja Ringan",
  // Status: [MONEY PAGE] - di bawah Jasa Bongkar Bangunan
};

// 2. JASA BONGKAR KERAMIK
const urlMappingJasaBongkarKeramik = {
  // SARAN: Buat halaman untuk bongkar keramik
  // "https://www.betonjayareadymix.com/2019/06/harga-bongkar-keramik-per-m2.html": "Harga Bongkar Keramik per M2",
  // Status: [MONEY PAGE] - di bawah Jasa Bongkar Lantai
};

// 3. JASA BONGKAR PAGAR
const urlMappingJasaBongkarPagar = {
  // SARAN: Buat halaman untuk bongkar pagar
  // "https://www.betonjayareadymix.com/2019/06/harga-bongkar-pagar-beton.html": "Harga Bongkar Pagar Beton",
  // Status: [MONEY PAGE] - di bawah Jasa Bongkar Bangunan
  // "https://www.betonjayareadymix.com/2019/06/jasa-bongkar-pagar-besi.html": "Jasa Bongkar Pagar Besi",
  // Status: [MONEY PAGE] - di bawah Jasa Bongkar Bangunan
};

// 4. JASA BONGKAR PLAFON
const urlMappingJasaBongkarPlafon = {
  // SARAN: Buat halaman untuk bongkar plafon
  // "https://www.betonjayareadymix.com/2019/06/harga-bongkar-plafon-gypsum.html": "Harga Bongkar Plafon Gypsum",
  // Status: [MONEY PAGE] - di bawah Jasa Bongkar Bangunan
};

// 5. JASA BONGKAR PARTISI
const urlMappingJasaBongkarPartisi = {
  // SARAN: Buat halaman untuk bongkar partisi
  // "https://www.betonjayareadymix.com/2019/06/harga-bongkar-partisi-gypsum.html": "Harga Bongkar Partisi Gypsum",
  // Status: [MONEY PAGE] - di bawah Jasa Bongkar Bangunan
};

// ============================================================
// CATATAN: ITEM DI ATAS HANYA SARAN, BELUM AKTIF
// ============================================================
// ============================================================
// JASA BONGKAR LANTAI - BLOG POST
// ============================================================
// 🧠 SEO NOTE: Halaman ini adalah MONEY PAGE dengan intent transaksional.
// Breadcrumb: Home > Jasa Konstruksi > Jasa Bongkar Bangunan > Harga Bongkar Lantai (4 level)
// ============================================================

const urlMappingJasaBongkarLantai = {
  // [MONEY PAGE] - BONGKAR LANTAI
  "https://www.betonjayareadymix.com/2019/06/jasa-bobok-lantai-beton.html": "Jasa Bobok Lantai Beton",
  "https://www.betonjayareadymix.com/2019/06/jasa-bobok-lantai-lama.html": "Jasa Bobok Lantai Lama",
  "https://www.betonjayareadymix.com/2019/06/biaya-bongkar-lantai-keramik.html": "Biaya Bongkar Lantai Keramik",
  "https://www.betonjayareadymix.com/2019/06/harga-bongkar-lantai-keramik.html": "Harga Bongkar Lantai Keramik",
  "https://www.betonjayareadymix.com/2019/06/harga-borongan-bongkar-keramik-lantai.html": "Harga Borongan Bongkar Keramik Lantai",
  "https://www.betonjayareadymix.com/2019/06/harga-bobok-lantai-keramik.html": "Harga Bobok Lantai Keramik",
  "https://www.betonjayareadymix.com/2019/06/harga-bobok-lantai.html": "Harga Bobok Lantai",
  "https://www.betonjayareadymix.com/2019/06/harga-bobok-lantai-beton-per-m2.html": "Harga Bobok Lantai Beton per M2",
  "https://www.betonjayareadymix.com/2019/06/harga-jasa-bobok-lantai-beton.html": "Harga Jasa Bobok Lantai Beton",
  "https://www.betonjayareadymix.com/2019/06/harga-borongan-bobok-lantai-beton.html": "Harga Borongan Bobok Lantai Beton",
  "https://www.betonjayareadymix.com/2018/06/harga-upah-bobok-lantai-beton.html": "Harga Upah Bobok Lantai Beton",
  "https://www.betonjayareadymix.com/2019/06/harga-jasa-bongkar-lantai.html": "Harga Jasa Bongkar Lantai",
  "https://www.betonjayareadymix.com/2019/06/harga-bongkar-lantai-beton.html": "Harga Bongkar Lantai Beton"
};

// ============================================================
// 🔴 REDIRECT NOTES - JASA BONGKAR LANTAI
// ============================================================
/*
🧠 SEO CANNIBAL FIX - REDIRECT PLAN:

| No | From URL | To URL | Type | Alasan SEO |
|----|----------|--------|------|------------|
| 1 | /2019/06/harga-bongkar-lantai-keramik.html | /2019/06/harga-jasa-bongkar-lantai.html | 301 | Duplikasi intent |
| 2 | /2019/06/harga-borongan-bongkar-keramik-lantai.html | /2019/06/harga-jasa-bongkar-lantai.html | 301 | Duplikasi intent |
| 3 | /2019/06/harga-bobok-lantai-keramik.html | /2019/06/harga-jasa-bobok-lantai-beton.html | 301 | Duplikasi intent |
| 4 | /2019/06/harga-bobok-lantai.html | /2019/06/harga-jasa-bobok-lantai-beton.html | 301 | Terlalu umum |
| 5 | /2019/06/harga-borongan-bobok-lantai-beton.html | /2019/06/harga-jasa-bobok-lantai-beton.html | 301 | Duplikasi |
| 6 | /2018/06/harga-upah-bobok-lantai-beton.html | /2019/06/harga-jasa-bobok-lantai-beton.html | 301 | Duplikasi |

📌 PERTAHANKAN SEBAGAI MASTER:
- /2019/06/harga-jasa-bongkar-lantai.html (untuk bongkar lantai umum)
- /2019/06/harga-jasa-bobok-lantai-beton.html (untuk bobok lantai beton)
*/

// ============================================================
// JASA BUANG PUING - BLOG POST
// ============================================================
// 🧠 SEO NOTE: Halaman ini adalah MONEY PAGE dengan intent transaksional (lokasi).
// Breadcrumb: Home > Jasa Konstruksi > Jasa Buang Puing > [Lokasi] (4 level)
// ============================================================

const urlMappingJasaBuangPuing = {
  // [MONEY PAGE] - JASA BUANG PUING PER LOKASI
  "https://www.betonjayareadymix.com/2019/10/jasa-buang-puing-surabaya.html": "Jasa Buang Puing Surabaya",
  "https://www.betonjayareadymix.com/2019/10/jasa-buang-puing-karawang.html": "Jasa Buang Puing Karawang",
  "https://www.betonjayareadymix.com/2019/10/jasa-buang-puing-bekasi.html": "Jasa Buang Puing Bekasi",
  "https://www.betonjayareadymix.com/2019/10/jasa-buang-puing-tangerang.html": "Jasa Buang Puing Tangerang",
  "https://www.betonjayareadymix.com/2019/10/jasa-buang-puing-depok.html": "Jasa Buang Puing Depok",
  "https://www.betonjayareadymix.com/2019/10/jasa-buang-puing-bogor.html": "Jasa Buang Puing Bogor",
  "https://www.betonjayareadymix.com/2019/10/jasa-buang-puing-jakarta.html": "Jasa Buang Puing Jakarta",
  "https://www.betonjayareadymix.com/2019/10/jasa-buang-puing-terdekat.html": "Jasa Buang Puing Terdekat"
};

// ============================================================
// 🟡 SEO NOTE - JASA BUANG PUING
// ============================================================
/*
📌 BREADCRUMB:
Home > Jasa Konstruksi > Jasa Buang Puing > Jasa Buang Puing Jakarta (4 level)

📌 SARAN ITEM BARU:
// "https://www.betonjayareadymix.com/2019/10/harga-buang-puing-per-truk.html": "Harga Buang Puing Per Truk",
// Status: [MONEY PAGE] - master page untuk harga buang puing

✅ AMAN - TIDAK PERLU REDIRECT
*/

//SUB MAPPING JASA PERAWATAN & PERBAIKAN BANGUNAN
// ============================================================
// JASA PERAWATAN & PERBAIKAN BANGUNAN - CONST KOSONG
// ============================================================
// 🧠 SEO NOTE: Const berikut masih kosong, perlu ditambahkan item URL.

const urlMappingJasaPerbaikanAtapBocor = {
  // SARAN: Buat halaman untuk perbaikan atap bocor
  // "https://www.betonjayareadymix.com/2019/07/harga-perbaikan-atap-bocor.html": "Harga Perbaikan Atap Bocor",
  // Status: [MONEY PAGE] - di bawah Jasa Perawatan Perbaikan Bangunan
};

const urlMappingJasaPerbaikanDindingRetak = {
  // SARAN: Buat halaman untuk perbaikan dinding retak
  // "https://www.betonjayareadymix.com/2019/07/harga-perbaikan-dinding-retak.html": "Harga Perbaikan Dinding Retak",
  // Status: [MONEY PAGE] - di bawah Jasa Perawatan Perbaikan Bangunan
};

const urlMappingJasaPerbaikanRembesanAir = {
  // SARAN: Buat halaman untuk perbaikan rembesan air
  // "https://www.betonjayareadymix.com/2019/07/jasa-perbaikan-rembesan-air.html": "Jasa Perbaikan Rembesan Air",
  // Status: [MONEY PAGE] - di bawah Jasa Perbaikan Kebocoran Waterproofing
};

const urlMappingJasaPerbaikanPlafonRusak = {
  // SARAN: Buat halaman untuk perbaikan plafon rusak
  // "https://www.betonjayareadymix.com/2019/07/harga-perbaikan-plafon-rusak.html": "Harga Perbaikan Plafon Rusak",
  // Status: [MONEY PAGE] - di bawah Jasa Perawatan Perbaikan Bangunan
};

const urlMappingJasaPerbaikanDakBetonBocor = {
  // SARAN: Buat halaman untuk perbaikan dak beton bocor
  // "https://www.betonjayareadymix.com/2019/07/jasa-perbaikan-dak-beton-bocor.html": "Jasa Perbaikan Dak Beton Bocor",
  // Status: [MONEY PAGE] - di bawah Jasa Perbaikan Kebocoran Waterproofing
};

const urlMappingJasaPerbaikanTalangBocor = {
  // SARAN: Buat halaman untuk perbaikan talang bocor
  // "https://www.betonjayareadymix.com/2019/07/harga-perbaikan-talang-bocor.html": "Harga Perbaikan Talang Bocor",
  // Status: [MONEY PAGE] - di bawah Jasa Perbaikan Atap Drainase Bangunan
};

// ============================================================
// CATATAN: ITEM DI ATAS HANYA SARAN, BELUM AKTIF
// ============================================================

// Menyimpan elemen yang dihapus dalam variabel
let removedElementsJasaKonsBongkarBangunanPost = {};
// Fungsi untuk menghapus elemen berdasarkan ID
function removeCondition(conditionId) {
    const conditionElement = document.getElementById(conditionId);

    if (conditionElement) {
        // Menyimpan elemen yang dihapus dalam objek untuk bisa dikembalikan
        removedElementsJasaKonsBongkarBangunanPost[conditionId] = conditionElement;
        conditionElement.remove(); // Menghapus elemen tersebut
    }
}

// Fungsi untuk mengembalikan elemen yang telah dihapus
function restoreCondition(conditionId) {
    const breadcrumb = document.querySelector('.breadcrumb');
    const elementToRestore = removedElementsJasaKonsBongkarBangunanPost[conditionId]; // Mendapatkan elemen yang disimpan

    if (elementToRestore) {
        breadcrumb.appendChild(elementToRestore); // Menambahkan elemen kembali ke dalam breadcrumb
        delete removedElementsJasaKonsBongkarBangunanPost[conditionId]; // Menghapus elemen dari objek setelah dikembalikan
    } else {
        console.log(`Elemen dengan ID ${conditionId} tidak ditemukan di removedElementsJasaKonsBongkarBangunanPost.`);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    // var currentUrl = window.location.href;
     //const cleanUrl = currentUrl.split('?')[0]; // Menghapus parameter seperti ?m=1
    const cleanUrlJasaKonsBongkarBangunanPost = window.location.href.split(/[?#]/)[0]; // Menghilangkan parameter seperti ?m=1

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

	    // ✅ Anti Spam GitHack (session based)
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
		,
		urlMappingJasaBongkarRumah,
		urlMappingJasaBongkarBeton,
		urlMappingJasaBongkarAtap,
		urlMappingJasaBongkarKeramik,
		urlMappingJasaBongkarTembok,
		urlMappingJasaBongkarDinding,
		urlMappingJasaBongkarPlafon,
		urlMappingJasaBongkarPartisi,
		urlMappingJasaBongkarPagar,
		urlMappingJasaBongkarLantai
	
    );

    // --- validasi URL terdaftar ---
    if (!urlMappingGabungan[cleanUrlJasaKonsBongkarBangunanPost]) {
      console.log(`[HybridDateModified] URL tidak terdaftar: ${cleanUrlJasaKonsBongkarBangunanPost}`);
      return;
    }
	  
  // === Tanggal nextUpdate1 global ===
	const globalNextUpdate1 = "2026-02-15T00:00:00.000Z";
	console.log(`🌐 [AutoMeta] Detected jasa-bongkar-bangunan-post: ${cleanUrlJasaKonsBongkarBangunanPost}`);

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
    // ✅ Load evergreen JS (anti 429)
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

    const hash = stableHash(cleanUrlJasaKonsBongkarBangunanPost);
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
	
	console.log("✅ AEDMetaDates updated jasa-bongkar-bangunan-post:", window.AEDMetaDates);

    console.log(`✅ [HybridDateModified v2.5] ${cleanUrlJasaKonsBongkarBangunanPost} → ${isoDate} | type=${type || "-"}`);

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
		urlMappingJasaBongkarBangunan,
		urlMappingJasaBongkarTower,
		urlMappingJasaBongkarRumah,
		urlMappingJasaBongkarBeton,
		urlMappingJasaBongkarAtap,
		urlMappingJasaBongkarKeramik,
		urlMappingJasaBongkarTembok,
		urlMappingJasaBongkarDinding,
		urlMappingJasaBongkarPlafon,
		urlMappingJasaBongkarPartisi,
		urlMappingJasaBongkarPagar,
		urlMappingJasaBongkarLantai,
		urlMappingJasaBuangPuing,
		urlMappingJasaPerbaikanAtapBocor,
		urlMappingJasaPerbaikanDindingRetak,
		urlMappingJasaPerbaikanRembesanAir,
		urlMappingJasaPerbaikanPlafonRusak,
		urlMappingJasaPerbaikanDakBetonBocor,
		urlMappingJasaPerbaikanTalangBocor
	
    );

    // --- validasi URL terdaftar ---
    if (!urlMappingGabungan[cleanUrlJasaKonsBongkarBangunanPost]) {
      console.log(`[HybridDateModified] URL tidak terdaftar: ${cleanUrlJasaKonsBongkarBangunanPost}`);
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
		    await loadEvergreenScript("2026-01-14T10:30:00+07:00");
		
		    // ✔ AUTO MODE
		    // await loadEvergreenScript();
		
		  } catch (err) {
		    console.error("[HybridDateModified] Fatal:", err);
		  }
		})();
     // Menemukan elemen menggunakan Id
    var JasaKonsBongkarBangunanPost = document.getElementById("JasaKonsBongkarBangunanPost");

    if (!JasaKonsBongkarBangunanPost) {
        console.error("elemen Id JasaKonsBongkarBangunanPost kondisi terhapus");
        return;
    }
	
     var JasaKonstruksiBongkarBangunanPostLink = document.getElementById("JasaKonstruksiBongkarBangunanPost");
     var JasaBongkarBangunanPostLink = document.getElementById("JasaBongkarBangunanPost");
	 var JasaBuangPuingPostLink = document.getElementById("JasaBuangPuingPost");
	 var JasaPerawatanPerbaikanBangunanPostLink = document.getElementById("JasaPerawatanPerbaikanBangunanPost");
     
     //SUB JasaKonsBongkarBangunanPost
    var JasaBongkarTowerPostLink = document.getElementById("JasaBongkarTowerPost");
     var JasaBongkarRumahPostLink = document.getElementById("JasaBongkarRumahPost");
     var JasaBongkarBetonPostLink = document.getElementById("JasaBongkarBetonPost");
     var JasaBongkarAtapPostLink = document.getElementById("JasaBongkarAtapPost");
     var JasaBongkarKeramikPostLink = document.getElementById("JasaBongkarKeramikPost");
     var JasaBongkarTembokPostLink = document.getElementById("JasaBongkarTembokPost");
     var JasaBongkarDindingPostLink = document.getElementById("JasaBongkarDindingPost");
     var JasaBongkarPlafonPostLink = document.getElementById("JasaBongkarPlafonPost");
     var JasaBongkarPartisiPostLink = document.getElementById("JasaBongkarPartisiPost");
     var JasaBongkarPagarPostLink = document.getElementById("JasaBongkarPagarPost");
     var JasaBongkarLantaiPostLink = document.getElementById("JasaBongkarLantaiPost");

	//SUB JasaPerawatanPerbaikanBangunanPost
	var JasaPerbaikanAtapDrainaseBangunanPostLink = document.getElementById("JasaPerbaikanAtapDrainaseBangunanPost");
     var JasaPerbaikanElemenArsitekturalPostLink = document.getElementById("JasaPerbaikanElemenArsitekturalPost");
     var JasaPerbaikanKebocoranWaterproofingPostLink = document.getElementById("JasaPerbaikanKebocoranWaterproofingPost");
    var JasaPerbaikanAtapBocorPostLink = document.getElementById("JasaPerbaikanAtapBocorPost");
     var JasaPerbaikanDindingRetakPostLink = document.getElementById("JasaPerbaikanDindingRetakPost");
     var JasaPerbaikanRembesanAirPostLink = document.getElementById("JasaPerbaikanRembesanAirPost");
     var JasaPerbaikanPlafonRusakPostLink = document.getElementById("JasaPerbaikanPlafonRusakPost");
     var JasaPerbaikanDakBetonBocorPostLink = document.getElementById("JasaPerbaikanDakBetonBocorPost");
     var JasaPerbaikanTalangBocorPostLink = document.getElementById("JasaPerbaikanTalangBocorPost");
    
     // Default untuk menyembunyikan elemen
     JasaKonstruksiBongkarBangunanPostLink.style.visibility = 'hidden';
     JasaBongkarBangunanPostLink.style.visibility = 'hidden';
	 JasaBuangPuingPostLink.style.visibility = 'hidden';
	 JasaPerawatanPerbaikanBangunanPostLink.style.visibility = 'hidden';
	
     //SUB JasaBongkarBangunanPost
     JasaBongkarTowerPostLink.style.visibility = 'hidden';
     JasaBongkarRumahPostLink.style.visibility = 'hidden';
     JasaBongkarBetonPostLink.style.visibility = 'hidden';
     JasaBongkarAtapPostLink.style.visibility = 'hidden';
     JasaBongkarKeramikPostLink.style.visibility = 'hidden';
     JasaBongkarTembokPostLink.style.visibility = 'hidden';
     JasaBongkarDindingPostLink.style.visibility = 'hidden';
     JasaBongkarPlafonPostLink.style.visibility = 'hidden';
     JasaBongkarPartisiPostLink.style.visibility = 'hidden';
     JasaBongkarPagarPostLink.style.visibility = 'hidden';
     JasaBongkarLantaiPostLink.style.visibility = 'hidden';

	 //SUB JasaPerawatanPerbaikanBangunanPost
	JasaPerbaikanAtapDrainaseBangunanPostLink.style.visibility = 'hidden';
	JasaPerbaikanElemenArsitekturalPostLink.style.visibility = 'hidden';
	JasaPerbaikanKebocoranWaterproofingPostLink.style.visibility = 'hidden';
	
     JasaPerbaikanAtapBocorPostLink.style.visibility = 'hidden';
     JasaPerbaikanDindingRetakPostLink.style.visibility = 'hidden';
     JasaPerbaikanRembesanAirPostLink.style.visibility = 'hidden';
     JasaPerbaikanPlafonRusakPostLink.style.visibility = 'hidden';
     JasaPerbaikanDakBetonBocorPostLink.style.visibility = 'hidden';
     JasaPerbaikanTalangBocorPostLink.style.visibility = 'hidden';
	
     pageNameJasaKonsBongkarBangunanPost.textContent = "";
	
//SUB urlMappingJasaKonsBongkarBangunanPost
if (urlMappingJasaBongkarBangunan[cleanUrlJasaKonsBongkarBangunanPost]) {
	  // ============================================================
    // 1. SEMBUNYIKAN ELEMEN YANG TIDAK DIPERLUKAN (REMOVE)
    // ============================================================
    
    // HIDE PILLAR & GRANDPARENT (jangan hapus container!)
    removeCondition('JasaBongkarRumahPost'); 
        
        //hapus elemen div id lain
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
        removeCondition('JasaKonsFinishingPost');
        removeCondition('JasaKonsStrukturPost');
        removeCondition('JasaKonsAlatKonstruksiPost');
        removeCondition('JasaKonsJalanPerkerasanPost');
	
	
	
        //hapus elemen SUB jasa JasaBongkarBangunanPost semua hapus juga JasaBongkarRumahPost
        removeCondition('JasaBongkarRumahPost');
        removeCondition('JasaBongkarTowerPost');
        removeCondition('JasaBongkarBetonPost');
        removeCondition('JasaBongkarAtapPost');
        removeCondition('JasaBongkarKeramikPost');
        removeCondition('JasaBongkarTembokPost');
        removeCondition('JasaBongkarDindingPost');
        removeCondition('JasaBongkarPlafonPost');
        removeCondition('JasaBongkarPartisiPost');
        removeCondition('JasaBongkarPagarPost');
        removeCondition('JasaBongkarLantaiPost');

		//hapus JasaBuangPuingPost
	removeCondition('JasaBuangPuingPost');
	
//hapus SEMUA elemen SUB jasa JasaPerawatanPerbaikanBangunanPost
        removeCondition('JasaPerawatanPerbaikanBangunanPost');
	    	    removeCondition('JasaPerbaikanAtapDrainaseBangunanPost');
	   removeCondition('JasaPerbaikanElemenArsitekturalPost');
	    removeCondition('JasaPerbaikanKebocoranWaterproofingPost');
	
        removeCondition('JasaPerbaikanAtapBocorPost');
        removeCondition('JasaPerbaikanDindingRetakPost');
        removeCondition('JasaPerbaikanRembesanAirPost');
        removeCondition('JasaPerbaikanPlafonRusakPost');
        removeCondition('JasaPerbaikanDakBetonBocorPost');
        removeCondition('JasaPerbaikanTalangBocorPost');
    /*
        JasaKonstruksiBongkarBangunanPostLink.style.visibility = 'visible';
	//TAMPILKAN JasaBongkarBangunanPost
        JasaBongkarBangunanPostLink.style.visibility = 'visible';
	//TAMPILKAN JasaBongkarRumahPost
	//skip level 4 JasaBongkarRumahPostLink.style.visibility = 'visible';
	
	pageNameJasaKonsBongkarBangunanPost.textContent = urlMappingJasaBongkarBangunan[cleanUrlJasaKonsBongkarBangunanPost];
	*/
	 // ============================================================
    // 2. TAMPILKAN ELEMEN YANG DIPERLUKAN (RESTORE JIKA PERLU)
    // ============================================================
    
    // Pastikan container utama visible
    const container = document.getElementById('JasaKonsBongkarBangunanPost');
    if (container) {
        container.style.display = 'inline';
        container.style.visibility = 'visible';
     } else {
        // Jika sudah di-remove, restore
        restoreCondition('JasaKonsBongkarBangunanPost');
    }
    
    let jasaVariable1 = document.getElementById('JasaKonstruksiBongkarBangunanPost');
    if (jasaVariable1) {
        jasaVariable1.style.display = 'inline';
        jasaVariable1.style.visibility = 'visible';
    } else {
        // Jika sudah di-remove, restore
        restoreCondition('JasaKonstruksiBongkarBangunanPost');
    }
    
    // Tampilkan Jasa Finishing Dak Beton (parent terdekat)
    let jasaVariable2 = document.getElementById('JasaBongkarBangunanPost');
    if (jasaVariable2) {
        jasaVariable2.style.display = 'inline';
        jasaVariable2.style.visibility = 'visible';
    } else {
        restoreCondition('JasaBongkarBangunanPost');
    }
    
    // Update page name
    const pageNameElement = document.getElementById("pageNameJasaKonsBongkarBangunanPost");
    if (pageNameElement) {
        pageNameElement.textContent = urlMappingJasaBongkarBangunan[cleanUrlJasaKonsBongkarBangunanPost];
        pageNameElement.style.display = 'inline';
    }
}
  // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaBongkarBangunan[cleanUrlJasaKonsBongkarBangunanPost]) {
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
                   "name": "Jasa Bongkar Bangunan",
                   "item": "https://www.betonjayareadymix.com/p/jasa-bongkar-bangunan.html"
               },
			   /*
               {
                   "@type": "ListItem",
                   "position": 4,
                   "name": "Jasa Bongkar Rumah",
                   "item": "https://www.betonjayareadymix.com/p/jasa-bongkar-rumah.html"
               },
			   */
               {
                   "@type": "ListItem",
                   "position": 4,
                   "name": urlMappingJasaBongkarBangunan[cleanUrlJasaKonsBongkarBangunanPost],
                   "item": cleanUrlJasaKonsBongkarBangunanPost
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
	
if (urlMappingJasaBongkarTower[cleanUrlJasaKonsBongkarBangunanPost]) {
	   // ============================================================
    // 1. SEMBUNYIKAN ELEMEN YANG TIDAK DIPERLUKAN (REMOVE)
    // ============================================================
    
    // HIDE PILLAR & GRANDPARENT (jangan hapus container!)
    removeCondition('JasaKonstruksiBongkarBangunanPost');  // PILLAR (Jasa Konstruksi)

     
        //hapus elemen div id lain
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
        removeCondition('JasaKonsFinishingPost');
        removeCondition('JasaKonsStrukturPost');
        removeCondition('JasaKonsAlatKonstruksiPost');
        removeCondition('JasaKonsJalanPerkerasanPost');

	    
        //hapus elemen SUB jasa JasaBongkarBangunanPost semua JasaBongkarTowerPost hapus juga
        //removeCondition('JasaBongkarTowerPost');
        removeCondition('JasaBongkarRumahPost');
        removeCondition('JasaBongkarBetonPost');
        removeCondition('JasaBongkarAtapPost');
        removeCondition('JasaBongkarKeramikPost');
        removeCondition('JasaBongkarTembokPost');
        removeCondition('JasaBongkarDindingPost');
        removeCondition('JasaBongkarPlafonPost');
        removeCondition('JasaBongkarPartisiPost');
        removeCondition('JasaBongkarPagarPost');
        removeCondition('JasaBongkarLantaiPost');

	//hapus JasaBuangPuingPost
	removeCondition('JasaBuangPuingPost');
	//hapus SEMUA elemen SUB jasa JasaPerawatanPerbaikanBangunanPost
        removeCondition('JasaPerawatanPerbaikanBangunanPost');
	    removeCondition('JasaPerbaikanAtapDrainaseBangunanPost');
	   removeCondition('JasaPerbaikanElemenArsitekturalPost');
	    removeCondition('JasaPerbaikanKebocoranWaterproofingPost');
        removeCondition('JasaPerbaikanAtapBocorPost');
        removeCondition('JasaPerbaikanDindingRetakPost');
        removeCondition('JasaPerbaikanRembesanAirPost');
        removeCondition('JasaPerbaikanPlafonRusakPost');
        removeCondition('JasaPerbaikanDakBetonBocorPost');
        removeCondition('JasaPerbaikanTalangBocorPost');
       /*
        JasaKonstruksiBongkarBangunanPostLink.style.visibility = 'visible';
	//TAMPILKAN JasaBongkarBangunanPost
        JasaBongkarBangunanPostLink.style.visibility = 'visible';
	//TAMPILKAN JasaBongkarTowerPost
	//JasaBongkarTowerPostLink.style.visibility = 'visible';
	
	pageNameJasaKonsBongkarBangunanPost.textContent = urlMappingJasaBongkarTower[cleanUrlJasaKonsBongkarBangunanPost];
	*/
	 // ============================================================
    // 2. TAMPILKAN ELEMEN YANG DIPERLUKAN (RESTORE JIKA PERLU)
    // ============================================================
    
    // Pastikan container utama visible
    const container = document.getElementById('JasaKonsBongkarBangunanPost');
    if (container) {
        container.style.display = 'inline';
        container.style.visibility = 'visible';
     } else {
        // Jika sudah di-remove, restore
        restoreCondition('JasaKonsBongkarBangunanPost');
    }
    
    // Tampilkan Jasa Finishing (level 2)
    let jasaVariable1 = document.getElementById('JasaBongkarBangunanPost');
    if (jasaVariable1) {
        jasaVariable1.style.display = 'inline';
        jasaVariable1.style.visibility = 'visible';
    } else {
        // Jika sudah di-remove, restore
        restoreCondition('JasaBongkarBangunanPost');
    }
    
    // Tampilkan Jasa Finishing Dak Beton (parent terdekat)
    let jasaVariable2 = document.getElementById('JasaBongkarTowerPost');
    if (jasaVariable2) {
        jasaVariable2.style.display = 'inline';
        jasaVariable2.style.visibility = 'visible';
    } else {
        restoreCondition('JasaBongkarTowerPost');
    }
    
    // Update page name
    const pageNameElement = document.getElementById("pageNameJasaKonsBongkarBangunanPost");
    if (pageNameElement) {
        pageNameElement.textContent = urlMappingJasaBongkarTower[cleanUrlJasaKonsBongkarBangunanPost];
        pageNameElement.style.display = 'inline';
    }
}
      // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaBongkarTower[cleanUrlJasaKonsBongkarBangunanPost]) {
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
			   /*
               {
                   "@type": "ListItem",
                   "position": 2,
                   "name": "Jasa Konstruksi",
                   "item": "https://www.betonjayareadymix.com/p/jasa-konstruksi.html"
               },*/
               {
                   "@type": "ListItem",
                   "position": 2,
                   "name": "Jasa Bongkar Bangunan",
                   "item": "https://www.betonjayareadymix.com/p/jasa-bongkar-bangunan.html"
               },
			
               {
                   "@type": "ListItem",
                   "position": 3,
                   "name": "Jasa Bongkar Tower",
                   "item": "https://www.betonjayareadymix.com/p/jasa-bongkar-tower.html"
               },
			
               {
                   "@type": "ListItem",
                   "position": 4,
                   "name": urlMappingJasaBongkarTower[cleanUrlJasaKonsBongkarBangunanPost],
                   "item": cleanUrlJasaKonsBongkarBangunanPost
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }

if (urlMappingJasaBongkarRumah[cleanUrlJasaKonsBongkarBangunanPost]) {
	  // ============================================================
    // 1. SEMBUNYIKAN ELEMEN YANG TIDAK DIPERLUKAN (REMOVE)
    // ============================================================
    
    // HIDE PILLAR & GRANDPARENT (jangan hapus container!)
    removeCondition('JasaKonstruksiBongkarBangunanPost');  // PILLAR (Jasa Konstruksi)
        
        //hapus elemen div id lain
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
        removeCondition('JasaKonsFinishingPost');
        removeCondition('JasaKonsStrukturPost');
        removeCondition('JasaKonsAlatKonstruksiPost');
        removeCondition('JasaKonsJalanPerkerasanPost');
	
	
	
        //hapus elemen SUB jasa JasaBongkarBangunanPost semua hapus juga JasaBongkarRumahPost
        //removeCondition('JasaBongkarRumahPost');
	
        removeCondition('JasaBongkarTowerPost');
        removeCondition('JasaBongkarBetonPost');
        removeCondition('JasaBongkarAtapPost');
        removeCondition('JasaBongkarKeramikPost');
        removeCondition('JasaBongkarTembokPost');
        removeCondition('JasaBongkarDindingPost');
        removeCondition('JasaBongkarPlafonPost');
        removeCondition('JasaBongkarPartisiPost');
        removeCondition('JasaBongkarPagarPost');
        removeCondition('JasaBongkarLantaiPost');

		//hapus JasaBuangPuingPost
	removeCondition('JasaBuangPuingPost');
	
//hapus SEMUA elemen SUB jasa JasaPerawatanPerbaikanBangunanPost
        removeCondition('JasaPerawatanPerbaikanBangunanPost');
	    	    removeCondition('JasaPerbaikanAtapDrainaseBangunanPost');
	   removeCondition('JasaPerbaikanElemenArsitekturalPost');
	    removeCondition('JasaPerbaikanKebocoranWaterproofingPost');
	
        removeCondition('JasaPerbaikanAtapBocorPost');
        removeCondition('JasaPerbaikanDindingRetakPost');
        removeCondition('JasaPerbaikanRembesanAirPost');
        removeCondition('JasaPerbaikanPlafonRusakPost');
        removeCondition('JasaPerbaikanDakBetonBocorPost');
        removeCondition('JasaPerbaikanTalangBocorPost');
    /*
        JasaKonstruksiBongkarBangunanPostLink.style.visibility = 'visible';
	//TAMPILKAN JasaBongkarBangunanPost
        JasaBongkarBangunanPostLink.style.visibility = 'visible';
	//TAMPILKAN JasaBongkarRumahPost
	//skip level 4 JasaBongkarRumahPostLink.style.visibility = 'visible';
	
	pageNameJasaKonsBongkarBangunanPost.textContent = urlMappingJasaBongkarRumah[cleanUrlJasaKonsBongkarBangunanPost];
	*/
	 // ============================================================
    // 2. TAMPILKAN ELEMEN YANG DIPERLUKAN (RESTORE JIKA PERLU)
    // ============================================================
    
    // Pastikan container utama visible
    const container = document.getElementById('JasaKonsBongkarBangunanPost');
    if (container) {
        container.style.display = 'inline';
        container.style.visibility = 'visible';
     } else {
        // Jika sudah di-remove, restore
        restoreCondition('JasaKonsBongkarBangunanPost');
    }
    
    // Tampilkan Jasa Finishing (level 2)
    let jasaVariable1 = document.getElementById('JasaBongkarBangunanPost');
    if (jasaVariable1) {
        jasaVariable1.style.display = 'inline';
        jasaVariable1.style.visibility = 'visible';
    } else {
        // Jika sudah di-remove, restore
        restoreCondition('JasaBongkarBangunanPost');
    }
    
    // Tampilkan Jasa Finishing Dak Beton (parent terdekat)
    let jasaVariable2 = document.getElementById('JasaBongkarRumahPost');
    if (jasaVariable2) {
        jasaVariable2.style.display = 'inline';
        jasaVariable2.style.visibility = 'visible';
    } else {
        restoreCondition('JasaBongkarRumahPost');
    }
    
    // Update page name
    const pageNameElement = document.getElementById("pageNameJasaKonsBongkarBangunanPost");
    if (pageNameElement) {
        pageNameElement.textContent = urlMappingJasaBongkarRumah[cleanUrlJasaKonsBongkarBangunanPost];
        pageNameElement.style.display = 'inline';
    }
}
  // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaBongkarRumah[cleanUrlJasaKonsBongkarBangunanPost]) {
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
			   /*
               {
                   "@type": "ListItem",
                   "position": 2,
                   "name": "Jasa Konstruksi",
                   "item": "https://www.betonjayareadymix.com/p/jasa-konstruksi.html"
               },*/
               {
                   "@type": "ListItem",
                   "position": 2,
                   "name": "Jasa Bongkar Bangunan",
                   "item": "https://www.betonjayareadymix.com/p/jasa-bongkar-bangunan.html"
               },
               {
                   "@type": "ListItem",
                   "position": 3,
                   "name": "Jasa Bongkar Rumah",
                   "item": "https://www.betonjayareadymix.com/p/jasa-bongkar-rumah.html"
               },
               {
                   "@type": "ListItem",
                   "position": 4,
                   "name": urlMappingJasaBongkarRumah[cleanUrlJasaKonsBongkarBangunanPost],
                   "item": cleanUrlJasaKonsBongkarBangunanPost
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
	
if (urlMappingJasaBongkarBeton[cleanUrlJasaKonsBongkarBangunanPost]) {
	   // ============================================================
    // 1. SEMBUNYIKAN ELEMEN YANG TIDAK DIPERLUKAN (REMOVE)
    // ============================================================
    
    // HIDE PILLAR & GRANDPARENT (jangan hapus container!)
    removeCondition('JasaKonstruksiBongkarBangunanPost');  // PILLAR (Jasa Konstruksi)

        //hapus elemen div id lain
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
        removeCondition('JasaKonsFinishingPost');
        removeCondition('JasaKonsStrukturPost');
        removeCondition('JasaKonsAlatKonstruksiPost');
        removeCondition('JasaKonsJalanPerkerasanPost');

			//hapus JasaBuangPuingPost
	removeCondition('JasaBuangPuingPost');
		
        //hapus elemen SUB jasa JasaBongkarBangunanPost semua skip dg hapus JasaBongkarBetonPost
	//removeCondition('JasaBongkarBetonPost');
	removeCondition('JasaBongkarTowerPost');
        removeCondition('JasaBongkarRumahPost');
        removeCondition('JasaBongkarAtapPost');
        removeCondition('JasaBongkarKeramikPost');
        removeCondition('JasaBongkarTembokPost');
        removeCondition('JasaBongkarDindingPost');
        removeCondition('JasaBongkarPlafonPost');
        removeCondition('JasaBongkarPartisiPost');
        removeCondition('JasaBongkarPagarPost');
        removeCondition('JasaBongkarLantaiPost');

		//hapus SEMUA elemen SUB jasa JasaPerawatanPerbaikanBangunanPost
        removeCondition('JasaPerawatanPerbaikanBangunanPost');
	     	    removeCondition('JasaPerbaikanAtapDrainaseBangunanPost');
	   removeCondition('JasaPerbaikanElemenArsitekturalPost');
	    removeCondition('JasaPerbaikanKebocoranWaterproofingPost');
		
        removeCondition('JasaPerbaikanAtapBocorPost');
        removeCondition('JasaPerbaikanDindingRetakPost');
        removeCondition('JasaPerbaikanRembesanAirPost');
        removeCondition('JasaPerbaikanPlafonRusakPost');
        removeCondition('JasaPerbaikanDakBetonBocorPost');
        removeCondition('JasaPerbaikanTalangBocorPost');

	 /*
        JasaKonstruksiBongkarBangunanPostLink.style.visibility = 'visible';
	//TAMPILKAN JasaBongkarBangunanPost
        JasaBongkarBangunanPostLink.style.visibility = 'visible';
	//TAMPILKAN JasaBongkarBetonPost
	//skip level 4 JasaBongkarBetonPostLink.style.visibility = 'visible';
	
	pageNameJasaKonsBongkarBangunanPost.textContent = urlMappingJasaBongkarBeton[cleanUrlJasaKonsBongkarBangunanPost];
	*/
	 // ============================================================
    // 2. TAMPILKAN ELEMEN YANG DIPERLUKAN (RESTORE JIKA PERLU)
    // ============================================================
    
    // Pastikan container utama visible
    const container = document.getElementById('JasaKonsBongkarBangunanPost');
    if (container) {
        container.style.display = 'inline';
        container.style.visibility = 'visible';
     } else {
        // Jika sudah di-remove, restore
        restoreCondition('JasaKonsBongkarBangunanPost');
    }
    
   
    let jasaVariable1 = document.getElementById('JasaBongkarBangunanPost');
    if (jasaVariable1) {
        jasaVariable1.style.display = 'inline';
        jasaVariable1.style.visibility = 'visible';
    } else {
        // Jika sudah di-remove, restore
        restoreCondition('JasaBongkarBangunanPost');
    }
    
    // Tampilkan Jasa Finishing Dak Beton (parent terdekat)
    let jasaVariable2 = document.getElementById('JasaBongkarBetonPost');
    if (jasaVariable2) {
        jasaVariable2.style.display = 'inline';
        jasaVariable2.style.visibility = 'visible';
    } else {
        restoreCondition('JasaBongkarBetonPost');
    }
    
    // Update page name
    const pageNameElement = document.getElementById("pageNameJasaKonsBongkarBangunanPost");
    if (pageNameElement) {
        pageNameElement.textContent = urlMappingJasaBongkarBeton[cleanUrlJasaKonsBongkarBangunanPost];
        pageNameElement.style.display = 'inline';
    }
}
  // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaBongkarBeton[cleanUrlJasaKonsBongkarBangunanPost]) {
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
			   /*
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
                   "name": "Jasa Bongkar Bangunan",
                   "item": "https://www.betonjayareadymix.com/p/jasa-bongkar-bangunan.html"
               },
               {
                   "@type": "ListItem",
                   "position": 3,
                   "name": "Jasa Bongkar Beton",
                   "item": "https://www.betonjayareadymix.com/p/jasa-bongkar-beton.html"
               },
               {
                   "@type": "ListItem",
                   "position": 4,
                   "name": urlMappingJasaBongkarBeton[cleanUrlJasaKonsBongkarBangunanPost],
                   "item": cleanUrlJasaKonsBongkarBangunanPost
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
if (urlMappingJasaBongkarAtap[cleanUrlJasaKonsBongkarBangunanPost]) {
 // 1. SEMBUNYIKAN ELEMEN YANG TIDAK DIPERLUKAN (REMOVE)
    // ============================================================
    
    // HIDE PILLAR & GRANDPARENT (jangan hapus container!)
    removeCondition('JasaKonstruksiBongkarBangunanPost');  // PILLAR (Jasa Konstruksi)
	
        //hapus elemen div id lain
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
        removeCondition('JasaKonsFinishingPost');
        removeCondition('JasaKonsStrukturPost');
        removeCondition('JasaKonsAlatKonstruksiPost');
        removeCondition('JasaKonsJalanPerkerasanPost');

		//hapus JasaBuangPuingPost
	removeCondition('JasaBuangPuingPost');
	
        //hapus elemen SUB jasa JasaBongkarBangunanPost semua SELAIN JasaBongkarAtapPost
	removeCondition('JasaBongkarTowerPost');
        removeCondition('JasaBongkarBetonPost');
        removeCondition('JasaBongkarRumahPost');
        removeCondition('JasaBongkarKeramikPost');
        removeCondition('JasaBongkarTembokPost');
        removeCondition('JasaBongkarDindingPost');
        removeCondition('JasaBongkarPlafonPost');
        removeCondition('JasaBongkarPartisiPost');
        removeCondition('JasaBongkarPagarPost');
        removeCondition('JasaBongkarLantaiPost');

	//hapus SEMUA elemen SUB jasa JasaPerawatanPerbaikanBangunanPost
        removeCondition('JasaPerawatanPerbaikanBangunanPost');
	    	    removeCondition('JasaPerbaikanAtapDrainaseBangunanPost');
	   removeCondition('JasaPerbaikanElemenArsitekturalPost');
	    removeCondition('JasaPerbaikanKebocoranWaterproofingPost');
	
        removeCondition('JasaPerbaikanAtapBocorPost');
        removeCondition('JasaPerbaikanDindingRetakPost');
        removeCondition('JasaPerbaikanRembesanAirPost');
        removeCondition('JasaPerbaikanPlafonRusakPost');
        removeCondition('JasaPerbaikanDakBetonBocorPost');
        removeCondition('JasaPerbaikanTalangBocorPost');

	/*
        JasaKonstruksiBongkarBangunanPostLink.style.visibility = 'visible';
	//TAMPILKAN JasaBongkarBangunanPost
        JasaBongkarBangunanPostLink.style.visibility = 'visible';
	//TAMPILKAN JasaBongkarAtapPost
	JasaBongkarAtapPostLink.style.visibility = 'visible';
	
	pageNameJasaKonsBongkarBangunanPost.textContent = urlMappingJasaBongkarAtap[cleanUrlJasaKonsBongkarBangunanPost];
	*/
	// ============================================================
    // 2. TAMPILKAN ELEMEN YANG DIPERLUKAN (RESTORE JIKA PERLU)
    // ============================================================
    
    // Pastikan container utama visible
    const container = document.getElementById('JasaKonsBongkarBangunanPost');
    if (container) {
        container.style.display = 'inline';
        container.style.visibility = 'visible';
     } else {
        // Jika sudah di-remove, restore
        restoreCondition('JasaKonsBongkarBangunanPost');
    }
    
    // Tampilkan Jasa Finishing (level 2)
    let jasaVariable1 = document.getElementById('JasaBongkarBangunanPost');
    if (jasaVariable1) {
        jasaVariable1.style.display = 'inline';
        jasaVariable1.style.visibility = 'visible';
    } else {
        // Jika sudah di-remove, restore
        restoreCondition('JasaBongkarBangunanPost');
    }
    
    // Tampilkan (parent terdekat)
    let jasaVariable2 = document.getElementById('JasaBongkarAtapPost');
    if (jasaVariable2) {
        jasaVariable2.style.display = 'inline';
        jasaVariable2.style.visibility = 'visible';
    } else {
        restoreCondition('JasaBongkarAtapPost');
    }
    
    // Update page name
    const pageNameElement = document.getElementById("pageNameJasaKonsBongkarBangunanPost");
    if (pageNameElement) {
        pageNameElement.textContent = urlMappingJasaBongkarAtap[cleanUrlJasaKonsBongkarBangunanPost];
        pageNameElement.style.display = 'inline';
    }
}

  // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaBongkarAtap[cleanUrlJasaKonsBongkarBangunanPost]) {
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
			   /*
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
                   "name": "Jasa Bongkar Bangunan",
                   "item": "https://www.betonjayareadymix.com/p/jasa-bongkar-bangunan.html"
               },
               {
                   "@type": "ListItem",
                   "position": 3,
                   "name": "Jasa Bongkar Atap",
                   "item": "https://www.betonjayareadymix.com/p/jasa-bongkar-atap.html"
               },
               {
                   "@type": "ListItem",
                   "position": 4,
                   "name": urlMappingJasaBongkarAtap[cleanUrlJasaKonsBongkarBangunanPost],
                   "item": cleanUrlJasaKonsBongkarBangunanPost
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
if (urlMappingJasaBongkarKeramik[cleanUrlJasaKonsBongkarBangunanPost]) {
 // 1. SEMBUNYIKAN ELEMEN YANG TIDAK DIPERLUKAN (REMOVE)
    // ============================================================
    
    // HIDE PILLAR & GRANDPARENT (jangan hapus container!)
    removeCondition('JasaKonstruksiBongkarBangunanPost');  // PILLAR (Jasa Konstruksi)

     
        //hapus elemen div id lain
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
        removeCondition('JasaKonsFinishingPost');
        removeCondition('JasaKonsStrukturPost');
        removeCondition('JasaKonsAlatKonstruksiPost');
        removeCondition('JasaKonsJalanPerkerasanPost');
	
        //hapus elemen SUB jasa JasaBongkarBangunanPost semua SELAIN JasaBongkarKeramikPost
	removeCondition('JasaBongkarTowerPost');
        removeCondition('JasaBongkarBetonPost');
        removeCondition('JasaBongkarAtapPost');
        removeCondition('JasaBongkarRumahPost');
        removeCondition('JasaBongkarTembokPost');
        removeCondition('JasaBongkarDindingPost');
        removeCondition('JasaBongkarPlafonPost');
        removeCondition('JasaBongkarPartisiPost');
        removeCondition('JasaBongkarPagarPost');
        removeCondition('JasaBongkarLantaiPost');

		//hapus JasaBuangPuingPost
	removeCondition('JasaBuangPuingPost');
	
	//hapus SEMUA elemen SUB jasa JasaPerawatanPerbaikanBangunanPost
        removeCondition('JasaPerawatanPerbaikanBangunanPost');
	    	    removeCondition('JasaPerbaikanAtapDrainaseBangunanPost');
	   removeCondition('JasaPerbaikanElemenArsitekturalPost');
	    removeCondition('JasaPerbaikanKebocoranWaterproofingPost');
	
        removeCondition('JasaPerbaikanAtapBocorPost');
        removeCondition('JasaPerbaikanDindingRetakPost');
        removeCondition('JasaPerbaikanRembesanAirPost');
        removeCondition('JasaPerbaikanPlafonRusakPost');
        removeCondition('JasaPerbaikanDakBetonBocorPost');
        removeCondition('JasaPerbaikanTalangBocorPost');

	/*
        JasaKonstruksiBongkarBangunanPostLink.style.visibility = 'visible';
	//TAMPILKAN JasaBongkarBangunanPost
        JasaBongkarBangunanPostLink.style.visibility = 'visible';
	//TAMPILKAN JasaBongkarKeramikPost
	JasaBongkarKeramikPostLink.style.visibility = 'visible';
	
	pageNameJasaKonsBongkarBangunanPost.textContent = urlMappingJasaBongkarKeramik[cleanUrlJasaKonsBongkarBangunanPost];
	*/
		// ============================================================
    // 2. TAMPILKAN ELEMEN YANG DIPERLUKAN (RESTORE JIKA PERLU)
    // ============================================================
    
    // Pastikan container utama visible
    const container = document.getElementById('JasaKonsBongkarBangunanPost');
    if (container) {
        container.style.display = 'inline';
        container.style.visibility = 'visible';
     } else {
        // Jika sudah di-remove, restore
        restoreCondition('JasaKonsBongkarBangunanPost');
    }
    
    // Tampilkan Jasa Finishing (level 2)
    let jasaVariable1 = document.getElementById('JasaBongkarBangunanPost');
    if (jasaVariable1) {
        jasaVariable1.style.display = 'inline';
        jasaVariable1.style.visibility = 'visible';
    } else {
        // Jika sudah di-remove, restore
        restoreCondition('JasaBongkarBangunanPost');
    }
    
    // Tampilkan (parent terdekat)
    let jasaVariable2 = document.getElementById('JasaBongkarKeramikPost');
    if (jasaVariable2) {
        jasaVariable2.style.display = 'inline';
        jasaVariable2.style.visibility = 'visible';
    } else {
        restoreCondition('JasaBongkarKeramikPost');
    }
    
    // Update page name
    const pageNameElement = document.getElementById("pageNameJasaKonsBongkarBangunanPost");
    if (pageNameElement) {
        pageNameElement.textContent = urlMappingJasaBongkarKeramik[cleanUrlJasaKonsBongkarBangunanPost];
        pageNameElement.style.display = 'inline';
    }
	
}
 // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaBongkarKeramik[cleanUrlJasaKonsBongkarBangunanPost]) {
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
			   /*
               {
                   "@type": "ListItem",
                   "position": 2,
                   "name": "Jasa Konstruksi",
                   "item": "https://www.betonjayareadymix.com/p/jasa-konstruksi.html"
               },*/
			   
               {
                   "@type": "ListItem",
                   "position": 2,
                   "name": "Jasa Bongkar Bangunan",
                   "item": "https://www.betonjayareadymix.com/p/jasa-bongkar-bangunan.html"
               },
               {
                   "@type": "ListItem",
                   "position": 3,
                   "name": "Jasa Bongkar Keramik",
                   "item": "https://www.betonjayareadymix.com/p/jasa-bongkar-keramik.html"
               },
               {
                   "@type": "ListItem",
                   "position": 4,
                   "name": urlMappingJasaBongkarKeramik[cleanUrlJasaKonsBongkarBangunanPost],
                   "item": cleanUrlJasaKonsBongkarBangunanPost
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
if (urlMappingJasaBongkarTembok[cleanUrlJasaKonsBongkarBangunanPost]) {
 // 1. SEMBUNYIKAN ELEMEN YANG TIDAK DIPERLUKAN (REMOVE)
    // ============================================================
    
    // HIDE PILLAR & GRANDPARENT (jangan hapus container!)
    removeCondition('JasaKonstruksiBongkarBangunanPost');  // PILLAR (Jasa Konstruksi)

     
        //hapus elemen div id lain
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
        removeCondition('JasaKonsFinishingPost');
        removeCondition('JasaKonsStrukturPost');
        removeCondition('JasaKonsAlatKonstruksiPost');
        removeCondition('JasaKonsJalanPerkerasanPost');
	
        //hapus elemen SUB jasa JasaBongkarBangunanPost semua SELAIN JasaBongkarTembokPost
	removeCondition('JasaBongkarTowerPost');
        removeCondition('JasaBongkarBetonPost');
        removeCondition('JasaBongkarAtapPost');
        removeCondition('JasaBongkarKeramikPost');
        removeCondition('JasaBongkarRumahPost');
        removeCondition('JasaBongkarDindingPost');
        removeCondition('JasaBongkarPlafonPost');
        removeCondition('JasaBongkarPartisiPost');
        removeCondition('JasaBongkarPagarPost');
        removeCondition('JasaBongkarLantaiPost');

		//hapus JasaBuangPuingPost
	removeCondition('JasaBuangPuingPost');
	
	//hapus SEMUA elemen SUB jasa JasaPerawatanPerbaikanBangunanPost
        removeCondition('JasaPerawatanPerbaikanBangunanPost');
	    	    removeCondition('JasaPerbaikanAtapDrainaseBangunanPost');
	   removeCondition('JasaPerbaikanElemenArsitekturalPost');
	    removeCondition('JasaPerbaikanKebocoranWaterproofingPost');
	
        removeCondition('JasaPerbaikanAtapBocorPost');
        removeCondition('JasaPerbaikanDindingRetakPost');
        removeCondition('JasaPerbaikanRembesanAirPost');
        removeCondition('JasaPerbaikanPlafonRusakPost');
        removeCondition('JasaPerbaikanDakBetonBocorPost');
        removeCondition('JasaPerbaikanTalangBocorPost');
    /*
        JasaKonstruksiBongkarBangunanPostLink.style.visibility = 'visible';
	//TAMPILKAN JasaBongkarBangunanPost
        JasaBongkarBangunanPostLink.style.visibility = 'visible';
	//TAMPILKAN JasaBongkarTembokPost
	JasaBongkarTembokPostLink.style.visibility = 'visible';
	
	pageNameJasaKonsBongkarBangunanPost.textContent = urlMappingJasaBongkarTembok[cleanUrlJasaKonsBongkarBangunanPost];
	*/
			// ============================================================
    // 2. TAMPILKAN ELEMEN YANG DIPERLUKAN (RESTORE JIKA PERLU)
    // ============================================================
    
    // Pastikan container utama visible
    const container = document.getElementById('JasaKonsBongkarBangunanPost');
    if (container) {
        container.style.display = 'inline';
        container.style.visibility = 'visible';
     } else {
        // Jika sudah di-remove, restore
        restoreCondition('JasaKonsBongkarBangunanPost');
    }
    
    // Tampilkan Jasa Finishing (level 2)
    let jasaVariable1 = document.getElementById('JasaBongkarBangunanPost');
    if (jasaVariable1) {
        jasaVariable1.style.display = 'inline';
        jasaVariable1.style.visibility = 'visible';
    } else {
        // Jika sudah di-remove, restore
        restoreCondition('JasaBongkarBangunanPost');
    }
    
    // Tampilkan (parent terdekat)
    let jasaVariable2 = document.getElementById('JasaBongkarTembokPost');
    if (jasaVariable2) {
        jasaVariable2.style.display = 'inline';
        jasaVariable2.style.visibility = 'visible';
    } else {
        restoreCondition('JasaBongkarTembokPost');
    }
    
    // Update page name
    const pageNameElement = document.getElementById("pageNameJasaKonsBongkarBangunanPost");
    if (pageNameElement) {
        pageNameElement.textContent = urlMappingJasaBongkarTembok[cleanUrlJasaKonsBongkarBangunanPost];
        pageNameElement.style.display = 'inline';
    }
}
// ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaBongkarTembok[cleanUrlJasaKonsBongkarBangunanPost]) {
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
			   /*
               {
                   "@type": "ListItem",
                   "position": 2,
                   "name": "Jasa Konstruksi",
                   "item": "https://www.betonjayareadymix.com/p/jasa-konstruksi.html"
               },*/
               {
                   "@type": "ListItem",
                   "position": 2,
                   "name": "Jasa Bongkar Bangunan",
                   "item": "https://www.betonjayareadymix.com/p/jasa-bongkar-bangunan.html"
               },
               {
                   "@type": "ListItem",
                   "position": 3,
                   "name": "Jasa Bongkar Tembok",
                   "item": "https://www.betonjayareadymix.com/p/jasa-bongkar-tembok.html"
               },
               {
                   "@type": "ListItem",
                   "position": 4,
                   "name": urlMappingJasaBongkarTembok[cleanUrlJasaKonsBongkarBangunanPost],
                   "item": cleanUrlJasaKonsBongkarBangunanPost
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
if (urlMappingJasaBongkarDinding[cleanUrlJasaKonsBongkarBangunanPost]) {
 // 1. SEMBUNYIKAN ELEMEN YANG TIDAK DIPERLUKAN (REMOVE)
    // ============================================================
    
    // HIDE PILLAR & GRANDPARENT (jangan hapus container!)
    removeCondition('JasaKonstruksiBongkarBangunanPost');  // PILLAR (Jasa Konstruksi)

     
        //hapus elemen div id lain
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
        removeCondition('JasaKonsFinishingPost');
        removeCondition('JasaKonsStrukturPost');
        removeCondition('JasaKonsAlatKonstruksiPost');
        removeCondition('JasaKonsJalanPerkerasanPost');

		//hapus JasaBuangPuingPost
	removeCondition('JasaBuangPuingPost');
	
        //hapus elemen SUB jasa JasaBongkarBangunanPost semua SELAIN JasaBongkarDindingPost
	removeCondition('JasaBongkarTowerPost');
        removeCondition('JasaBongkarBetonPost');
        removeCondition('JasaBongkarAtapPost');
        removeCondition('JasaBongkarKeramikPost');
        removeCondition('JasaBongkarTembokPost');
        removeCondition('JasaBongkarRumahPost');
        removeCondition('JasaBongkarPlafonPost');
        removeCondition('JasaBongkarPartisiPost');
        removeCondition('JasaBongkarPagarPost');
        removeCondition('JasaBongkarLantaiPost');

	//hapus SEMUA elemen SUB jasa JasaPerawatanPerbaikanBangunanPost
        removeCondition('JasaPerawatanPerbaikanBangunanPost');
	    	    removeCondition('JasaPerbaikanAtapDrainaseBangunanPost');
	   removeCondition('JasaPerbaikanElemenArsitekturalPost');
	    removeCondition('JasaPerbaikanKebocoranWaterproofingPost');
	
        removeCondition('JasaPerbaikanAtapBocorPost');
        removeCondition('JasaPerbaikanDindingRetakPost');
        removeCondition('JasaPerbaikanRembesanAirPost');
        removeCondition('JasaPerbaikanPlafonRusakPost');
        removeCondition('JasaPerbaikanDakBetonBocorPost');
        removeCondition('JasaPerbaikanTalangBocorPost');
    /*
        JasaKonstruksiBongkarBangunanPostLink.style.visibility = 'visible';
	//TAMPILKAN JasaBongkarBangunanPost
        JasaBongkarBangunanPostLink.style.visibility = 'visible';
	//TAMPILKAN JasaBongkarDindingPost
	JasaBongkarDindingPostLink.style.visibility = 'visible';
	
	pageNameJasaKonsBongkarBangunanPost.textContent = urlMappingJasaBongkarDinding[cleanUrlJasaKonsBongkarBangunanPost];
	*/
			// ============================================================
    // 2. TAMPILKAN ELEMEN YANG DIPERLUKAN (RESTORE JIKA PERLU)
    // ============================================================
    
    // Pastikan container utama visible
    const container = document.getElementById('JasaKonsBongkarBangunanPost');
    if (container) {
        container.style.display = 'inline';
        container.style.visibility = 'visible';
     } else {
        // Jika sudah di-remove, restore
        restoreCondition('JasaKonsBongkarBangunanPost');
    }
    
    // Tampilkan Jasa Finishing (level 2)
    let jasaVariable1 = document.getElementById('JasaBongkarBangunanPost');
    if (jasaVariable1) {
        jasaVariable1.style.display = 'inline';
        jasaVariable1.style.visibility = 'visible';
    } else {
        // Jika sudah di-remove, restore
        restoreCondition('JasaBongkarBangunanPost');
    }
    
    // Tampilkan (parent terdekat)
    let jasaVariable2 = document.getElementById('JasaBongkarDindingPost');
    if (jasaVariable2) {
        jasaVariable2.style.display = 'inline';
        jasaVariable2.style.visibility = 'visible';
    } else {
        restoreCondition('JasaBongkarDindingPost');
    }
    
    // Update page name
    const pageNameElement = document.getElementById("pageNameJasaKonsBongkarBangunanPost");
    if (pageNameElement) {
        pageNameElement.textContent = urlMappingJasaBongkarDinding[cleanUrlJasaKonsBongkarBangunanPost];
        pageNameElement.style.display = 'inline';
    }
}
// ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaBongkarDinding[cleanUrlJasaKonsBongkarBangunanPost]) {
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
			   /*
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
                   "name": "Jasa Bongkar Bangunan",
                   "item": "https://www.betonjayareadymix.com/p/jasa-bongkar-bangunan.html"
               },
               {
                   "@type": "ListItem",
                   "position": 3,
                   "name": "Jasa Bongkar Dinding",
                   "item": "https://www.betonjayareadymix.com/p/jasa-bongkar-dinding.html"
               },
               {
                   "@type": "ListItem",
                   "position": 4,
                   "name": urlMappingJasaBongkarDinding[cleanUrlJasaKonsBongkarBangunanPost],
                   "item": cleanUrlJasaKonsBongkarBangunanPost
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
if (urlMappingJasaBongkarPlafon[cleanUrlJasaKonsBongkarBangunanPost]) {
 // 1. SEMBUNYIKAN ELEMEN YANG TIDAK DIPERLUKAN (REMOVE)
    // ============================================================
    
    // HIDE PILLAR & GRANDPARENT (jangan hapus container!)
    removeCondition('JasaKonstruksiBongkarBangunanPost');  // PILLAR (Jasa Konstruksi)

     
        //hapus elemen div id lain
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
        removeCondition('JasaKonsFinishingPost');
        removeCondition('JasaKonsStrukturPost');
        removeCondition('JasaKonsAlatKonstruksiPost');
        removeCondition('JasaKonsJalanPerkerasanPost');
	
        //hapus elemen SUB jasa JasaBongkarBangunanPost semua SELAIN JasaBongkarPlafonPost
	removeCondition('JasaBongkarTowerPost');
        removeCondition('JasaBongkarBetonPost');
        removeCondition('JasaBongkarAtapPost');
        removeCondition('JasaBongkarKeramikPost');
        removeCondition('JasaBongkarTembokPost');
        removeCondition('JasaBongkarDindingPost');
        removeCondition('JasaBongkarRumahPost');
        removeCondition('JasaBongkarPartisiPost');
        removeCondition('JasaBongkarPagarPost');
        removeCondition('JasaBongkarLantaiPost');

		//hapus JasaBuangPuingPost
	removeCondition('JasaBuangPuingPost');
	
	//hapus SEMUA elemen SUB jasa JasaPerawatanPerbaikanBangunanPost
        removeCondition('JasaPerawatanPerbaikanBangunanPost');
	    	    removeCondition('JasaPerbaikanAtapDrainaseBangunanPost');
	   removeCondition('JasaPerbaikanElemenArsitekturalPost');
	    removeCondition('JasaPerbaikanKebocoranWaterproofingPost');
	
        removeCondition('JasaPerbaikanAtapBocorPost');
        removeCondition('JasaPerbaikanDindingRetakPost');
        removeCondition('JasaPerbaikanRembesanAirPost');
        removeCondition('JasaPerbaikanPlafonRusakPost');
        removeCondition('JasaPerbaikanDakBetonBocorPost');
        removeCondition('JasaPerbaikanTalangBocorPost');
    /*
        JasaKonstruksiBongkarBangunanPostLink.style.visibility = 'visible';
	//TAMPILKAN JasaBongkarBangunanPost
        JasaBongkarBangunanPostLink.style.visibility = 'visible';
	//TAMPILKAN JasaBongkarPlafonPost
	JasaBongkarPlafonPostLink.style.visibility = 'visible';
	
	pageNameJasaKonsBongkarBangunanPost.textContent = urlMappingJasaBongkarPlafon[cleanUrlJasaKonsBongkarBangunanPost];
	*/
			// ============================================================
    // 2. TAMPILKAN ELEMEN YANG DIPERLUKAN (RESTORE JIKA PERLU)
    // ============================================================
    
    // Pastikan container utama visible
    const container = document.getElementById('JasaKonsBongkarBangunanPost');
    if (container) {
        container.style.display = 'inline';
        container.style.visibility = 'visible';
     } else {
        // Jika sudah di-remove, restore
        restoreCondition('JasaKonsBongkarBangunanPost');
    }
    
    // Tampilkan Jasa Finishing (level 2)
    let jasaVariable1 = document.getElementById('JasaBongkarBangunanPost');
    if (jasaVariable1) {
        jasaVariable1.style.display = 'inline';
        jasaVariable1.style.visibility = 'visible';
    } else {
        // Jika sudah di-remove, restore
        restoreCondition('JasaBongkarBangunanPost');
    }
    
    // Tampilkan (parent terdekat)
    let jasaVariable2 = document.getElementById('JasaBongkarPlafonPost');
    if (jasaVariable2) {
        jasaVariable2.style.display = 'inline';
        jasaVariable2.style.visibility = 'visible';
    } else {
        restoreCondition('JasaBongkarPlafonPost');
    }
    
    // Update page name
    const pageNameElement = document.getElementById("pageNameJasaKonsBongkarBangunanPost");
    if (pageNameElement) {
        pageNameElement.textContent = urlMappingJasaBongkarPlafon[cleanUrlJasaKonsBongkarBangunanPost];
        pageNameElement.style.display = 'inline';
    }
}
// ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaBongkarPlafon[cleanUrlJasaKonsBongkarBangunanPost]) {
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
			   /*
               {
                   "@type": "ListItem",
                   "position": 2,
                   "name": "Jasa Konstruksi",
                   "item": "https://www.betonjayareadymix.com/p/jasa-konstruksi.html"
               },*/
               {
                   "@type": "ListItem",
                   "position": 2,
                   "name": "Jasa Bongkar Bangunan",
                   "item": "https://www.betonjayareadymix.com/p/jasa-bongkar-bangunan.html"
               },
               {
                   "@type": "ListItem",
                   "position": 3,
                   "name": "Jasa Bongkar Plafon",
                   "item": "https://www.betonjayareadymix.com/p/jasa-bongkar-plafon.html"
               },
               {
                   "@type": "ListItem",
                   "position": 4,
                   "name": urlMappingJasaBongkarPlafon[cleanUrlJasaKonsBongkarBangunanPost],
                   "item": cleanUrlJasaKonsBongkarBangunanPost
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
if (urlMappingJasaBongkarPartisi[cleanUrlJasaKonsBongkarBangunanPost]) {
 // 1. SEMBUNYIKAN ELEMEN YANG TIDAK DIPERLUKAN (REMOVE)
    // ============================================================
    
    // HIDE PILLAR & GRANDPARENT (jangan hapus container!)
    removeCondition('JasaKonstruksiBongkarBangunanPost');  // PILLAR (Jasa Konstruksi)

     
        //hapus elemen div id lain
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
        removeCondition('JasaKonsFinishingPost');
        removeCondition('JasaKonsStrukturPost');
        removeCondition('JasaKonsAlatKonstruksiPost');
        removeCondition('JasaKonsJalanPerkerasanPost');

		//hapus JasaBuangPuingPost
	removeCondition('JasaBuangPuingPost');
	
        //hapus elemen SUB jasa JasaBongkarBangunanPost semua SELAIN JasaBongkarPartisiPost
	removeCondition('JasaBongkarTowerPost');
        removeCondition('JasaBongkarBetonPost');
        removeCondition('JasaBongkarAtapPost');
        removeCondition('JasaBongkarKeramikPost');
        removeCondition('JasaBongkarTembokPost');
        removeCondition('JasaBongkarDindingPost');
        removeCondition('JasaBongkarPlafonPost');
        removeCondition('JasaBongkarRumahPost');
        removeCondition('JasaBongkarPagarPost');
        removeCondition('JasaBongkarLantaiPost');

	//hapus SEMUA elemen SUB jasa JasaPerawatanPerbaikanBangunanPost
        removeCondition('JasaPerawatanPerbaikanBangunanPost');
	    	    removeCondition('JasaPerbaikanAtapDrainaseBangunanPost');
	   removeCondition('JasaPerbaikanElemenArsitekturalPost');
	    removeCondition('JasaPerbaikanKebocoranWaterproofingPost');
	
        removeCondition('JasaPerbaikanAtapBocorPost');
        removeCondition('JasaPerbaikanDindingRetakPost');
        removeCondition('JasaPerbaikanRembesanAirPost');
        removeCondition('JasaPerbaikanPlafonRusakPost');
        removeCondition('JasaPerbaikanDakBetonBocorPost');
        removeCondition('JasaPerbaikanTalangBocorPost');
    /*
        JasaKonstruksiBongkarBangunanPostLink.style.visibility = 'visible';
	//TAMPILKAN JasaBongkarBangunanPost
        JasaBongkarBangunanPostLink.style.visibility = 'visible';
	//TAMPILKAN JasaBongkarPartisiPost
	JasaBongkarPartisiPostLink.style.visibility = 'visible';
	
	pageNameJasaKonsBongkarBangunanPost.textContent = urlMappingJasaBongkarPartisi[cleanUrlJasaKonsBongkarBangunanPost];
	*/
			// ============================================================
    // 2. TAMPILKAN ELEMEN YANG DIPERLUKAN (RESTORE JIKA PERLU)
    // ============================================================
    
    // Pastikan container utama visible
    const container = document.getElementById('JasaKonsBongkarBangunanPost');
    if (container) {
        container.style.display = 'inline';
        container.style.visibility = 'visible';
     } else {
        // Jika sudah di-remove, restore
        restoreCondition('JasaKonsBongkarBangunanPost');
    }
    
    // Tampilkan Jasa Finishing (level 2)
    let jasaVariable1 = document.getElementById('JasaBongkarBangunanPost');
    if (jasaVariable1) {
        jasaVariable1.style.display = 'inline';
        jasaVariable1.style.visibility = 'visible';
    } else {
        // Jika sudah di-remove, restore
        restoreCondition('JasaBongkarBangunanPost');
    }
    
    // Tampilkan (parent terdekat)
    let jasaVariable2 = document.getElementById('JasaBongkarPartisiPost');
    if (jasaVariable2) {
        jasaVariable2.style.display = 'inline';
        jasaVariable2.style.visibility = 'visible';
    } else {
        restoreCondition('JasaBongkarPartisiPost');
    }
    
    // Update page name
    const pageNameElement = document.getElementById("pageNameJasaKonsBongkarBangunanPost");
    if (pageNameElement) {
        pageNameElement.textContent = urlMappingJasaBongkarPartisi[cleanUrlJasaKonsBongkarBangunanPost];
        pageNameElement.style.display = 'inline';
    }
}
// ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaBongkarPartisi[cleanUrlJasaKonsBongkarBangunanPost]) {
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
			   /*
               {
                   "@type": "ListItem",
                   "position": 2,
                   "name": "Jasa Konstruksi",
                   "item": "https://www.betonjayareadymix.com/p/jasa-konstruksi.html"
               },*/
               {
                   "@type": "ListItem",
                   "position": 2,
                   "name": "Jasa Bongkar Bangunan",
                   "item": "https://www.betonjayareadymix.com/p/jasa-bongkar-bangunan.html"
               },
               {
                   "@type": "ListItem",
                   "position": 3,
                   "name": "Jasa Bongkar Partisi",
                   "item": "https://www.betonjayareadymix.com/p/jasa-bongkar-partisi.html"
               },
               {
                   "@type": "ListItem",
                   "position": 4,
                   "name": urlMappingJasaBongkarPartisi[cleanUrlJasaKonsBongkarBangunanPost],
                   "item": cleanUrlJasaKonsBongkarBangunanPost
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
if (urlMappingJasaBongkarPagar[cleanUrlJasaKonsBongkarBangunanPost]) {
 // 1. SEMBUNYIKAN ELEMEN YANG TIDAK DIPERLUKAN (REMOVE)
    // ============================================================
    
    // HIDE PILLAR & GRANDPARENT (jangan hapus container!)
    removeCondition('JasaKonstruksiBongkarBangunanPost');  // PILLAR (Jasa Konstruksi)

     
        //hapus elemen div id lain
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
        removeCondition('JasaKonsFinishingPost');
        removeCondition('JasaKonsStrukturPost');
        removeCondition('JasaKonsAlatKonstruksiPost');
        removeCondition('JasaKonsJalanPerkerasanPost');

		//hapus JasaBuangPuingPost
	removeCondition('JasaBuangPuingPost');
	
        //hapus elemen SUB jasa JasaBongkarBangunanPost semua SELAIN JasaBongkarPagarPost
	removeCondition('JasaBongkarTowerPost');
        removeCondition('JasaBongkarBetonPost');
        removeCondition('JasaBongkarAtapPost');
        removeCondition('JasaBongkarKeramikPost');
        removeCondition('JasaBongkarTembokPost');
        removeCondition('JasaBongkarDindingPost');
        removeCondition('JasaBongkarPlafonPost');
        removeCondition('JasaBongkarPartisiPost');
        removeCondition('JasaBongkarRumahPost');
        removeCondition('JasaBongkarLantaiPost');

	//hapus SEMUA elemen SUB jasa JasaPerawatanPerbaikanBangunanPost
        removeCondition('JasaPerawatanPerbaikanBangunanPost');
	    	    removeCondition('JasaPerbaikanAtapDrainaseBangunanPost');
	   removeCondition('JasaPerbaikanElemenArsitekturalPost');
	    removeCondition('JasaPerbaikanKebocoranWaterproofingPost');
	
        removeCondition('JasaPerbaikanAtapBocorPost');
        removeCondition('JasaPerbaikanDindingRetakPost');
        removeCondition('JasaPerbaikanRembesanAirPost');
        removeCondition('JasaPerbaikanPlafonRusakPost');
        removeCondition('JasaPerbaikanDakBetonBocorPost');
        removeCondition('JasaPerbaikanTalangBocorPost');
    /*
        JasaKonstruksiBongkarBangunanPostLink.style.visibility = 'visible';
	//TAMPILKAN JasaBongkarBangunanPost
        JasaBongkarBangunanPostLink.style.visibility = 'visible';
	//TAMPILKAN JasaBongkarPagarPost
	JasaBongkarPagarPostLink.style.visibility = 'visible';
	
	pageNameJasaKonsBongkarBangunanPost.textContent = urlMappingJasaBongkarPagar[cleanUrlJasaKonsBongkarBangunanPost];
	*/
   		// ============================================================
    // 2. TAMPILKAN ELEMEN YANG DIPERLUKAN (RESTORE JIKA PERLU)
    // ============================================================
    
    // Pastikan container utama visible
    const container = document.getElementById('JasaKonsBongkarBangunanPost');
    if (container) {
        container.style.display = 'inline';
        container.style.visibility = 'visible';
     } else {
        // Jika sudah di-remove, restore
        restoreCondition('JasaKonsBongkarBangunanPost');
    }
    
    // Tampilkan Jasa Finishing (level 2)
    let jasaVariable1 = document.getElementById('JasaBongkarBangunanPost');
    if (jasaVariable1) {
        jasaVariable1.style.display = 'inline';
        jasaVariable1.style.visibility = 'visible';
    } else {
        // Jika sudah di-remove, restore
        restoreCondition('JasaBongkarBangunanPost');
    }
    
    // Tampilkan (parent terdekat)
    let jasaVariable2 = document.getElementById('JasaBongkarPagarPost');
    if (jasaVariable2) {
        jasaVariable2.style.display = 'inline';
        jasaVariable2.style.visibility = 'visible';
    } else {
        restoreCondition('JasaBongkarPagarPost');
    }
    
    // Update page name
    const pageNameElement = document.getElementById("pageNameJasaKonsBongkarBangunanPost");
    if (pageNameElement) {
        pageNameElement.textContent = urlMappingJasaBongkarPagar[cleanUrlJasaKonsBongkarBangunanPost];
        pageNameElement.style.display = 'inline';
    }	
}
// ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaBongkarPagar[cleanUrlJasaKonsBongkarBangunanPost]) {
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
			   /*
               {
                   "@type": "ListItem",
                   "position": 2,
                   "name": "Jasa Konstruksi",
                   "item": "https://www.betonjayareadymix.com/p/jasa-konstruksi.html"
               },*/
               {
                   "@type": "ListItem",
                   "position": 2,
                   "name": "Jasa Bongkar Bangunan",
                   "item": "https://www.betonjayareadymix.com/p/jasa-bongkar-bangunan.html"
               },
               {
                   "@type": "ListItem",
                   "position": 3,
                   "name": "Jasa Bongkar Pagar",
                   "item": "https://www.betonjayareadymix.com/p/jasa-bongkar-pagar.html"
               },
               {
                   "@type": "ListItem",
                   "position": 4,
                   "name": urlMappingJasaBongkarPagar[cleanUrlJasaKonsBongkarBangunanPost],
                   "item": cleanUrlJasaKonsBongkarBangunanPost
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
if (urlMappingJasaBongkarLantai[cleanUrlJasaKonsBongkarBangunanPost]) {
 // 1. SEMBUNYIKAN ELEMEN YANG TIDAK DIPERLUKAN (REMOVE)
    // ============================================================
    
    // HIDE PILLAR & GRANDPARENT (jangan hapus container!)
    removeCondition('JasaKonstruksiBongkarBangunanPost');  // PILLAR (Jasa Konstruksi)

     
        //hapus elemen div id lain
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
        removeCondition('JasaKonsFinishingPost');
        removeCondition('JasaKonsStrukturPost');
        removeCondition('JasaKonsAlatKonstruksiPost');
        removeCondition('JasaKonsJalanPerkerasanPost');
	
        //hapus elemen SUB jasa JasaBongkarBangunanPost semua SELAIN JasaBongkarLantaiPost
	removeCondition('JasaBongkarTowerPost');
        removeCondition('JasaBongkarBetonPost');
        removeCondition('JasaBongkarAtapPost');
        removeCondition('JasaBongkarKeramikPost');
        removeCondition('JasaBongkarTembokPost');
        removeCondition('JasaBongkarDindingPost');
        removeCondition('JasaBongkarPlafonPost');
        removeCondition('JasaBongkarPartisiPost');
        removeCondition('JasaBongkarPagarPost');
        removeCondition('JasaBongkarRumahPost');

		//hapus JasaBuangPuingPost
	removeCondition('JasaBuangPuingPost');
	
	//hapus SEMUA elemen SUB jasa JasaPerawatanPerbaikanBangunanPost
        removeCondition('JasaPerawatanPerbaikanBangunanPost');
	    	    removeCondition('JasaPerbaikanAtapDrainaseBangunanPost');
	   removeCondition('JasaPerbaikanElemenArsitekturalPost');
	    removeCondition('JasaPerbaikanKebocoranWaterproofingPost');
	
        removeCondition('JasaPerbaikanAtapBocorPost');
        removeCondition('JasaPerbaikanDindingRetakPost');
        removeCondition('JasaPerbaikanRembesanAirPost');
        removeCondition('JasaPerbaikanPlafonRusakPost');
        removeCondition('JasaPerbaikanDakBetonBocorPost');
        removeCondition('JasaPerbaikanTalangBocorPost');
    /*
        JasaKonstruksiBongkarBangunanPostLink.style.visibility = 'visible';
	//TAMPILKAN JasaBongkarBangunanPost
        JasaBongkarBangunanPostLink.style.visibility = 'visible';
	//TAMPILKAN JasaBongkarLantaiPost
	JasaBongkarLantaiPostLink.style.visibility = 'visible';
	
	pageNameJasaKonsBongkarBangunanPost.textContent = urlMappingJasaBongkarLantai[cleanUrlJasaKonsBongkarBangunanPost];
	*/
			// ============================================================
    // 2. TAMPILKAN ELEMEN YANG DIPERLUKAN (RESTORE JIKA PERLU)
    // ============================================================
    
    // Pastikan container utama visible
    const container = document.getElementById('JasaKonsBongkarBangunanPost');
    if (container) {
        container.style.display = 'inline';
        container.style.visibility = 'visible';
     } else {
        // Jika sudah di-remove, restore
        restoreCondition('JasaKonsBongkarBangunanPost');
    }
    
    // Tampilkan Jasa Finishing (level 2)
    let jasaVariable1 = document.getElementById('JasaBongkarBangunanPost');
    if (jasaVariable1) {
        jasaVariable1.style.display = 'inline';
        jasaVariable1.style.visibility = 'visible';
    } else {
        // Jika sudah di-remove, restore
        restoreCondition('JasaBongkarBangunanPost');
    }
    
    // Tampilkan (parent terdekat)
    let jasaVariable2 = document.getElementById('JasaBongkarLantaiPost');
    if (jasaVariable2) {
        jasaVariable2.style.display = 'inline';
        jasaVariable2.style.visibility = 'visible';
    } else {
        restoreCondition('JasaBongkarLantaiPost');
    }
    
    // Update page name
    const pageNameElement = document.getElementById("pageNameJasaKonsBongkarBangunanPost");
    if (pageNameElement) {
        pageNameElement.textContent = urlMappingJasaBongkarLantai[cleanUrlJasaKonsBongkarBangunanPost];
        pageNameElement.style.display = 'inline';
    }
}
// ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaBongkarLantai[cleanUrlJasaKonsBongkarBangunanPost]) {
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
			   /*
               {
                   "@type": "ListItem",
                   "position": 2,
                   "name": "Jasa Konstruksi",
                   "item": "https://www.betonjayareadymix.com/p/jasa-konstruksi.html"
               },*/
               {
                   "@type": "ListItem",
                   "position": 2,
                   "name": "Jasa Bongkar Bangunan",
                   "item": "https://www.betonjayareadymix.com/p/jasa-bongkar-bangunan.html"
               },
               {
                   "@type": "ListItem",
                   "position": 3,
                   "name": "Jasa Bongkar Lantai",
                   "item": "https://www.betonjayareadymix.com/p/jasa-bongkar-lantai.html"
               },
               {
                   "@type": "ListItem",
                   "position": 4,
                   "name": urlMappingJasaBongkarLantai[cleanUrlJasaKonsBongkarBangunanPost],
                   "item": cleanUrlJasaKonsBongkarBangunanPost
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }

//SUB urlMappingJasaBuangPuing
if (urlMappingJasaBuangPuing[cleanUrlJasaKonsBongkarBangunanPost]) {

        //hapus elemen div id lain
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
        removeCondition('JasaKonsFinishingPost');
        removeCondition('JasaKonsStrukturPost');
        removeCondition('JasaKonsAlatKonstruksiPost');
        removeCondition('JasaKonsJalanPerkerasanPost');

	//hapus SEMUA elemen SUB jasa JasaPerawatanPerbaikanBangunanPost 
        removeCondition('JasaPerawatanPerbaikanBangunanPost');
	   	removeCondition('JasaPerbaikanAtapDrainaseBangunanPost');
	   removeCondition('JasaPerbaikanElemenArsitekturalPost');
	    removeCondition('JasaPerbaikanKebocoranWaterproofingPost');
        removeCondition('JasaPerbaikanAtapBocorPost');
        removeCondition('JasaPerbaikanDindingRetakPost');
        removeCondition('JasaPerbaikanRembesanAirPost');
        removeCondition('JasaPerbaikanPlafonRusakPost');
        removeCondition('JasaPerbaikanDakBetonBocorPost');
        removeCondition('JasaPerbaikanTalangBocorPost');
	
        //hapus elemen SUB jasa JasaBongkarBangunanPost semua 
        removeCondition('JasaBongkarBangunanPost');
	
        removeCondition('JasaBongkarRumahPost');
        removeCondition('JasaBongkarTowerPost');
        removeCondition('JasaBongkarBetonPost');
        removeCondition('JasaBongkarAtapPost');
        removeCondition('JasaBongkarKeramikPost');
        removeCondition('JasaBongkarTembokPost');
        removeCondition('JasaBongkarDindingPost');
        removeCondition('JasaBongkarPlafonPost');
        removeCondition('JasaBongkarPartisiPost');
        removeCondition('JasaBongkarPagarPost');
        removeCondition('JasaBongkarLantaiPost');

	/*
        JasaKonstruksiBongkarBangunanPostLink.style.visibility = 'visible';
	//TAMPILKAN JasaBongkarBangunanPost
      JasaBuangPuingPostLink.style.visibility = 'visible';

	pageNameJasaKonsBongkarBangunanPost.textContent = urlMappingJasaBuangPuing[cleanUrlJasaKonsBongkarBangunanPost];
	*/
	// ============================================================
    // 2. TAMPILKAN ELEMEN YANG DIPERLUKAN (RESTORE JIKA PERLU)
    // ============================================================
    
    // Pastikan container utama visible
    const container = document.getElementById('JasaKonsBongkarBangunanPost');
    if (container) {
        container.style.display = 'inline';
        container.style.visibility = 'visible';
     } else {
        // Jika sudah di-remove, restore
        restoreCondition('JasaKonsBongkarBangunanPost');
    }
    

    let jasaVariable1 = document.getElementById('JasaKonstruksiBongkarBangunanPost');
    if (jasaVariable1) {
        jasaVariable1.style.display = 'inline';
        jasaVariable1.style.visibility = 'visible';
    } else {
        // Jika sudah di-remove, restore
        restoreCondition('JasaKonstruksiBongkarBangunanPost');
    }
     let jasaVariable2 = document.getElementById('JasaBuangPuingPost');
    if (jasaVariable2) {
        jasaVariable2.style.display = 'inline';
        jasaVariable2.style.visibility = 'visible';
    } else {
        // Jika sudah di-remove, restore
        restoreCondition('JasaBuangPuingPost');
    }
    // Update page name
    const pageNameElement = document.getElementById("pageNameJasaKonsBongkarBangunanPost");
    if (pageNameElement) {
        pageNameElement.textContent = urlMappingJasaBongkarRumah[cleanUrlJasaKonsBongkarBangunanPost];
        pageNameElement.style.display = 'inline';
    }
}
      // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaBuangPuing[cleanUrlJasaKonsBongkarBangunanPost]) {
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
                   "name": "Jasa Buang Puing",
                   "item": "https://www.betonjayareadymix.com/p/jasa-buang-puing.html"
               },
               {
                   "@type": "ListItem",
                   "position": 4,
                   "name": urlMappingJasaBuangPuing[cleanUrlJasaKonsBongkarBangunanPost],
                   "item": cleanUrlJasaKonsBongkarBangunanPost
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }

//SUB urlMappingJasaPerawatanPerbaikanBangunanPost
//JasaPerbaikanAtapBocorPost
if (urlMappingJasaPerbaikanAtapBocor[cleanUrlJasaKonsBongkarBangunanPost]) {
        restoreCondition('JasaKonsBongkarBangunanPost');
	
        restoreCondition('JasaPerawatanPerbaikanBangunanPost');
	    restoreCondition('JasaPerbaikanAtapDrainaseBangunanPost');
	    
        restoreCondition('JasaPerbaikanAtapBocorPost');
     
        //hapus elemen div id lain
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
        removeCondition('JasaKonsFinishingPost');
        removeCondition('JasaKonsStrukturPost');
        removeCondition('JasaKonsAlatKonstruksiPost');
        removeCondition('JasaKonsJalanPerkerasanPost');

		//hapus JasaBuangPuingPost
	removeCondition('JasaBuangPuingPost');
	
	//hapus SEMUA elemen SUB jasa JasaPerawatanPerbaikanBangunanPost SELAIN JasaPerbaikanAtapBocorPost
        //removeCondition('JasaPerawatanPerbaikanBangunanPost');
	   	    //removeCondition('JasaPerbaikanAtapDrainaseBangunanPost');
	   removeCondition('JasaPerbaikanElemenArsitekturalPost');
	    removeCondition('JasaPerbaikanKebocoranWaterproofingPost');
        //removeCondition('JasaPerbaikanAtapBocorPost');
        removeCondition('JasaPerbaikanDindingRetakPost');
        removeCondition('JasaPerbaikanRembesanAirPost');
        removeCondition('JasaPerbaikanPlafonRusakPost');
        removeCondition('JasaPerbaikanDakBetonBocorPost');
        removeCondition('JasaPerbaikanTalangBocorPost');
	
        //hapus elemen SUB jasa JasaBongkarBangunanPost semua 
        removeCondition('JasaBongkarBangunanPost');
	
        removeCondition('JasaBongkarRumahPost');
        removeCondition('JasaBongkarTowerPost');
        removeCondition('JasaBongkarBetonPost');
        removeCondition('JasaBongkarAtapPost');
        removeCondition('JasaBongkarKeramikPost');
        removeCondition('JasaBongkarTembokPost');
        removeCondition('JasaBongkarDindingPost');
        removeCondition('JasaBongkarPlafonPost');
        removeCondition('JasaBongkarPartisiPost');
        removeCondition('JasaBongkarPagarPost');
        removeCondition('JasaBongkarLantaiPost');

	
       
        JasaKonstruksiBongkarBangunanPostLink.style.visibility = 'visible';
	//TAMPILKAN JasaBongkarBangunanPost
     JasaPerawatanPerbaikanBangunanPostLink.style.visibility = 'visible';
	//TAMPILKAN JasaJasaPerbaikanAtapBocorPost
	JasaPerbaikanAtapBocorPostLink.style.visibility = 'visible';
	
	pageNameJasaKonsBongkarBangunanPost.textContent = urlMappingJasaPerbaikanAtapBocor[cleanUrlJasaKonsBongkarBangunanPost];
    }
      // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaPerbaikanAtapBocor[cleanUrlJasaKonsBongkarBangunanPost]) {
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
                   "name": "Jasa Perbaikan Atap Bocor",
                   "item": "https://www.betonjayareadymix.com/p/jasa-perbaikan-atap-bocor.html"
               },
               {
                   "@type": "ListItem",
                   "position": 6,
                   "name": urlMappingJasaPerbaikanAtapBocor[cleanUrlJasaKonsBongkarBangunanPost],
                   "item": cleanUrlJasaKonsBongkarBangunanPost
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }

	//JasaPerbaikanDindingRetakPost
 if (urlMappingJasaPerbaikanDindingRetak[cleanUrlJasaKonsBongkarBangunanPost]) {
        restoreCondition('JasaKonsBongkarBangunanPost');
	
        restoreCondition('JasaPerawatanPerbaikanBangunanPost');
        restoreCondition('JasaPerbaikanDindingRetakPost');
     
        //hapus elemen div id lain
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
        removeCondition('JasaKonsFinishingPost');
        removeCondition('JasaKonsStrukturPost');
        removeCondition('JasaKonsAlatKonstruksiPost');
        removeCondition('JasaKonsJalanPerkerasanPost');

	 	//hapus JasaBuangPuingPost
	removeCondition('JasaBuangPuingPost');
	 
	//hapus SEMUA elemen SUB jasa JasaPerawatanPerbaikanBangunanPost SELAIN JasaPerbaikanAtapBocorPost
        //removeCondition('JasaPerawatanPerbaikanBangunanPost');
	    removeCondition('JasaPerbaikanAtapDrainaseBangunanPost');
	     //removeCondition('JasaPerbaikanElemenArsitekturalPost');
	    removeCondition('JasaPerbaikanKebocoranWaterproofingPost');
        //removeCondition('JasaPerbaikanAtapBocorPost');
        removeCondition('JasaPerbaikanAtapBocorPost');
        removeCondition('JasaPerbaikanRembesanAirPost');
        removeCondition('JasaPerbaikanPlafonRusakPost');
        removeCondition('JasaPerbaikanDakBetonBocorPost');
        removeCondition('JasaPerbaikanTalangBocorPost');
	
        //hapus elemen SUB jasa JasaBongkarBangunanPost semua 
        removeCondition('JasaBongkarBangunanPost');
	
        removeCondition('JasaBongkarRumahPost');
        removeCondition('JasaBongkarTowerPost');
        removeCondition('JasaBongkarBetonPost');
        removeCondition('JasaBongkarAtapPost');
        removeCondition('JasaBongkarKeramikPost');
        removeCondition('JasaBongkarTembokPost');
        removeCondition('JasaBongkarDindingPost');
        removeCondition('JasaBongkarPlafonPost');
        removeCondition('JasaBongkarPartisiPost');
        removeCondition('JasaBongkarPagarPost');
        removeCondition('JasaBongkarLantaiPost');

	
       
        JasaKonstruksiBongkarBangunanPostLink.style.visibility = 'visible';
	//TAMPILKAN JasaBongkarBangunanPost
      JasaPerawatanPerbaikanBangunanPostLink.style.visibility = 'visible';
	//TAMPILKAN JasaBongkarTowerPost
	JasaPerbaikanDindingRetakPostLink.style.visibility = 'visible';
	
	pageNameJasaKonsBongkarBangunanPost.textContent = urlMappingJasaPerbaikanDindingRetak[cleanUrlJasaKonsBongkarBangunanPost];
    }
      // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaPerbaikanDindingRetak[cleanUrlJasaKonsBongkarBangunanPost]) {
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
                   "name": "Jasa Perbaikan Dinding Retak",
                   "item": "https://www.betonjayareadymix.com/p/jasa-perbaikan-dinding-retak.html"
               },
               {
                   "@type": "ListItem",
                   "position": 6,
                   "name": urlMappingJasaPerbaikanDindingRetak[cleanUrlJasaKonsBongkarBangunanPost],
                   "item": cleanUrlJasaKonsBongkarBangunanPost
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }

 //JasaPerbaikanRembesanAirPost
 if (urlMappingJasaPerbaikanRembesanAir[cleanUrlJasaKonsBongkarBangunanPost]) {
        restoreCondition('JasaKonsBongkarBangunanPost');
	
        restoreCondition('JasaPerawatanPerbaikanBangunanPost');
        restoreCondition('JasaPerbaikanRembesanAirPost');
     
        //hapus elemen div id lain
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
        removeCondition('JasaKonsFinishingPost');
        removeCondition('JasaKonsStrukturPost');
        removeCondition('JasaKonsAlatKonstruksiPost');
        removeCondition('JasaKonsJalanPerkerasanPost');

	 	//hapus JasaBuangPuingPost
	removeCondition('JasaBuangPuingPost');
	 
	//hapus SEMUA elemen SUB jasa JasaPerawatanPerbaikanBangunanPost SELAIN JasaPerbaikanAtapBocorPost
        //removeCondition('JasaPerawatanPerbaikanBangunanPost');
	    	    removeCondition('JasaPerbaikanAtapDrainaseBangunanPost');
	     removeCondition('JasaPerbaikanElemenArsitekturalPost');
	    //removeCondition('JasaPerbaikanKebocoranWaterproofingPost');
	 
        //removeCondition('JasaPerbaikanAtapBocorPost');
        removeCondition('JasaPerbaikanAtapBocorPost');
        removeCondition('JasaPerbaikanDindingRetakPost');
        removeCondition('JasaPerbaikanPlafonRusakPost');
        removeCondition('JasaPerbaikanDakBetonBocorPost');
        removeCondition('JasaPerbaikanTalangBocorPost');
	
        //hapus elemen SUB jasa JasaBongkarBangunanPost semua 
        removeCondition('JasaBongkarBangunanPost');
	
        removeCondition('JasaBongkarRumahPost');
        removeCondition('JasaBongkarTowerPost');
        removeCondition('JasaBongkarBetonPost');
        removeCondition('JasaBongkarAtapPost');
        removeCondition('JasaBongkarKeramikPost');
        removeCondition('JasaBongkarTembokPost');
        removeCondition('JasaBongkarDindingPost');
        removeCondition('JasaBongkarPlafonPost');
        removeCondition('JasaBongkarPartisiPost');
        removeCondition('JasaBongkarPagarPost');
        removeCondition('JasaBongkarLantaiPost');

	
       
        JasaKonstruksiBongkarBangunanPostLink.style.visibility = 'visible';
	//TAMPILKAN JasaBongkarBangunanPost
       JasaPerawatanPerbaikanBangunanPostLink.style.visibility = 'visible';
	//TAMPILKAN JasaBongkarTowerPost
	JasaPerbaikanRembesanAirPostLink.style.visibility = 'visible';
	
	pageNameJasaKonsBongkarBangunanPost.textContent = urlMappingJasaPerbaikanRembesanAir[cleanUrlJasaKonsBongkarBangunanPost];
    }
      // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaPerbaikanRembesanAir[cleanUrlJasaKonsBongkarBangunanPost]) {
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
                   "name": "Jasa Perbaikan Rembesan Air",
                   "item": "https://www.betonjayareadymix.com/p/jasa-perbaikan-rembesan-air.html"
               },
               {
                   "@type": "ListItem",
                   "position": 6,
                   "name": urlMappingJasaPerbaikanRembesanAir[cleanUrlJasaKonsBongkarBangunanPost],
                   "item": cleanUrlJasaKonsBongkarBangunanPost
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }

	 //JasaPerbaikanRembesanAirPost
 if (urlMappingJasaPerbaikanPlafonRusak[cleanUrlJasaKonsBongkarBangunanPost]) {
        restoreCondition('JasaKonsBongkarBangunanPost');
	
        restoreCondition('JasaPerawatanPerbaikanBangunanPost');
        restoreCondition('JasaPerbaikanPlafonRusakPost');
     
        //hapus elemen div id lain
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
        removeCondition('JasaKonsFinishingPost');
        removeCondition('JasaKonsStrukturPost');
        removeCondition('JasaKonsAlatKonstruksiPost');
        removeCondition('JasaKonsJalanPerkerasanPost');

	 	//hapus JasaBuangPuingPost
	removeCondition('JasaBuangPuingPost');
	 
	//hapus SEMUA elemen SUB jasa JasaPerawatanPerbaikanBangunanPost SELAIN JasaPerbaikanAtapBocorPost
        //removeCondition('JasaPerawatanPerbaikanBangunanPost');
	    removeCondition('JasaPerbaikanAtapDrainaseBangunanPost');
	      //removeCondition('JasaPerbaikanElemenArsitekturalPost');
	   removeCondition('JasaPerbaikanKebocoranWaterproofingPost');
        //removeCondition('JasaPerbaikanAtapBocorPost');
        removeCondition('JasaPerbaikanAtapBocorPost');
        removeCondition('JasaPerbaikanDindingRetakPost');
        removeCondition('JasaPerbaikanRembesanAirPost');
        removeCondition('JasaPerbaikanDakBetonBocorPost');
        removeCondition('JasaPerbaikanTalangBocorPost');
	
        //hapus elemen SUB jasa JasaBongkarBangunanPost semua 
        removeCondition('JasaBongkarBangunanPost');
	
        removeCondition('JasaBongkarRumahPost');
        removeCondition('JasaBongkarTowerPost');
        removeCondition('JasaBongkarBetonPost');
        removeCondition('JasaBongkarAtapPost');
        removeCondition('JasaBongkarKeramikPost');
        removeCondition('JasaBongkarTembokPost');
        removeCondition('JasaBongkarDindingPost');
        removeCondition('JasaBongkarPlafonPost');
        removeCondition('JasaBongkarPartisiPost');
        removeCondition('JasaBongkarPagarPost');
        removeCondition('JasaBongkarLantaiPost');

	
       
        JasaKonstruksiBongkarBangunanPostLink.style.visibility = 'visible';
	//TAMPILKAN JasaBongkarBangunanPost
     JasaPerawatanPerbaikanBangunanPostLink.style.visibility = 'visible';
	//TAMPILKAN JasaPerbaikanPlafonRusakPost
	JasaPerbaikanPlafonRusakPostLink.style.visibility = 'visible';
	
	pageNameJasaKonsBongkarBangunanPost.textContent = urlMappingJasaPerbaikanPlafonRusak[cleanUrlJasaKonsBongkarBangunanPost];
    }
      // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaPerbaikanPlafonRusak[cleanUrlJasaKonsBongkarBangunanPost]) {
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
                   "name": "Jasa Perbaikan Elemen Arsitektural",
                   "item": "https://www.betonjayareadymix.com/p/jasa-perbaikan-elemen-arsitektural.html"
               },
               {
                   "@type": "ListItem",
                   "position": 5,
                   "name": "Jasa Perbaikan Plafon Rusak",
                   "item": "https://www.betonjayareadymix.com/p/jasa-perbaikan-plafon-rusak.html"
               },
               {
                   "@type": "ListItem",
                   "position": 6,
                   "name": urlMappingJasaPerbaikanPlafonRusak[cleanUrlJasaKonsBongkarBangunanPost],
                   "item": cleanUrlJasaKonsBongkarBangunanPost
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }

	 //JasaPerbaikanDakBetonBocor
 if (urlMappingJasaPerbaikanDakBetonBocor[cleanUrlJasaKonsBongkarBangunanPost]) {
        restoreCondition('JasaKonsBongkarBangunanPost');
	
        restoreCondition('JasaPerawatanPerbaikanBangunanPost');
        restoreCondition('JasaPerbaikanDakBetonBocorPost');
     
        //hapus elemen div id lain
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
        removeCondition('JasaKonsFinishingPost');
        removeCondition('JasaKonsStrukturPost');
        removeCondition('JasaKonsAlatKonstruksiPost');
        removeCondition('JasaKonsJalanPerkerasanPost');

	 	//hapus JasaBuangPuingPost
	removeCondition('JasaBuangPuingPost');
	 
	//hapus SEMUA elemen SUB jasa JasaPerawatanPerbaikanBangunanPost SELAIN JasaPerbaikanAtapBocorPost
        //removeCondition('JasaPerawatanPerbaikanBangunanPost');
	   	    removeCondition('JasaPerbaikanAtapDrainaseBangunanPost');
	      removeCondition('JasaPerbaikanElemenArsitekturalPost');
	   //removeCondition('JasaPerbaikanKebocoranWaterproofingPost');
        //removeCondition('JasaPerbaikanAtapBocorPost');
        removeCondition('JasaPerbaikanAtapBocorPost');
        removeCondition('JasaPerbaikanDindingRetakPost');
        removeCondition('JasaPerbaikanRembesanAirPost');
        removeCondition('JasaPerbaikanPlafonRusakPost');
        removeCondition('JasaPerbaikanTalangBocorPost');
	
        //hapus elemen SUB jasa JasaBongkarBangunanPost semua 
        removeCondition('JasaBongkarBangunanPost');
	
        removeCondition('JasaBongkarRumahPost');
        removeCondition('JasaBongkarTowerPost');
        removeCondition('JasaBongkarBetonPost');
        removeCondition('JasaBongkarAtapPost');
        removeCondition('JasaBongkarKeramikPost');
        removeCondition('JasaBongkarTembokPost');
        removeCondition('JasaBongkarDindingPost');
        removeCondition('JasaBongkarPlafonPost');
        removeCondition('JasaBongkarPartisiPost');
        removeCondition('JasaBongkarPagarPost');
        removeCondition('JasaBongkarLantaiPost');
  
        JasaKonstruksiBongkarBangunanPostLink.style.visibility = 'visible';
	//TAMPILKAN JasaBongkarBangunanPost
    JasaPerawatanPerbaikanBangunanPostLink.style.visibility = 'visible';
	//TAMPILKAN JasaPerbaikanPlafonRusakPost
	JasaPerbaikanDakBetonBocorPostLink.style.visibility = 'visible';
	
	pageNameJasaKonsBongkarBangunanPost.textContent = urlMappingJasaPerbaikanDakBetonBocor[cleanUrlJasaKonsBongkarBangunanPost];
    }
      // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaPerbaikanDakBetonBocor[cleanUrlJasaKonsBongkarBangunanPost]) {
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
                   "name": "Jasa Perbaikan Kebocoran Waterproofing",
                   "item": "https://www.betonjayareadymix.com/p/jasa-perbaikan-kebocoran-waterproofing.html"
               },
               {
                   "@type": "ListItem",
                   "position": 5,
                   "name": "Jasa Perbaikan Dak Beton Bocor",
                   "item": "https://www.betonjayareadymix.com/p/jasa-perbaikan-dak-beton-bocor.html"
               },
               {
                   "@type": "ListItem",
                   "position": 6,
                   "name": urlMappingJasaPerbaikanDakBetonBocor[cleanUrlJasaKonsBongkarBangunanPost],
                   "item": cleanUrlJasaKonsBongkarBangunanPost
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }

	 //JasaPerbaikanTalangBocorPost
 if (urlMappingJasaPerbaikanTalangBocor[cleanUrlJasaKonsBongkarBangunanPost]) {
        restoreCondition('JasaKonsBongkarBangunanPost');
	
        restoreCondition('JasaPerawatanPerbaikanBangunanPost');
        restoreCondition('JasaPerbaikanTalangBocorPost');
     
        //hapus elemen div id lain
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
        removeCondition('JasaKonsFinishingPost');
        removeCondition('JasaKonsStrukturPost');
        removeCondition('JasaKonsAlatKonstruksiPost');
        removeCondition('JasaKonsJalanPerkerasanPost');

	 	//hapus JasaBuangPuingPost
	removeCondition('JasaBuangPuingPost');
	 
	//hapus SEMUA elemen SUB jasa JasaPerawatanPerbaikanBangunanPost SELAIN JasaPerbaikanAtapBocorPost
        //removeCondition('JasaPerawatanPerbaikanBangunanPost');
	  	   	    removeCondition('JasaPerbaikanAtapDrainaseBangunanPost');
	      removeCondition('JasaPerbaikanElemenArsitekturalPost');
	   //removeCondition('JasaPerbaikanKebocoranWaterproofingPost');
	 
        //removeCondition('JasaPerbaikanAtapBocorPost');
        removeCondition('JasaPerbaikanAtapBocorPost');
        removeCondition('JasaPerbaikanDindingRetakPost');
        removeCondition('JasaPerbaikanRembesanAirPost');
        removeCondition('JasaPerbaikanPlafonRusakPost');
        removeCondition('JasaPerbaikanDakBetonBocorPost');
	
        //hapus elemen SUB jasa JasaBongkarBangunanPost semua 
        removeCondition('JasaBongkarBangunanPost');
	
        removeCondition('JasaBongkarRumahPost');
        removeCondition('JasaBongkarTowerPost');
        removeCondition('JasaBongkarBetonPost');
        removeCondition('JasaBongkarAtapPost');
        removeCondition('JasaBongkarKeramikPost');
        removeCondition('JasaBongkarTembokPost');
        removeCondition('JasaBongkarDindingPost');
        removeCondition('JasaBongkarPlafonPost');
        removeCondition('JasaBongkarPartisiPost');
        removeCondition('JasaBongkarPagarPost');
        removeCondition('JasaBongkarLantaiPost');

	
       
        JasaKonstruksiBongkarBangunanPostLink.style.visibility = 'visible';
	//TAMPILKAN JasaBongkarBangunanPost
     JasaPerawatanPerbaikanBangunanPostLink.style.visibility = 'visible';
	//TAMPILKAN JasaPerbaikanTalangBocorPost
	JasaPerbaikanTalangBocorPostLink.style.visibility = 'visible';
	
	pageNameJasaKonsBongkarBangunanPost.textContent = urlMappingJasaPerbaikanTalangBocor[cleanUrlJasaKonsBongkarBangunanPost];
    }
      // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaPerbaikanTalangBocor[cleanUrlJasaKonsBongkarBangunanPost]) {
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
                   "name": "Jasa Perbaikan Kebocoran Waterproofing",
                   "item": "https://www.betonjayareadymix.com/p/jasa-perbaikan-kebocoran-waterproofing.html"
               },
			{
                   "@type": "ListItem",
                   "position": 5,
                   "name": "Jasa Perbaikan Talang Bocor",
                   "item": "https://www.betonjayareadymix.com/p/jasa-perbaikan-talang-bocor.html"
               },
               {
                   "@type": "ListItem",
                   "position": 6,
                   "name": urlMappingJasaPerbaikanTalangBocor[cleanUrlJasaKonsBongkarBangunanPost],
                   "item": cleanUrlJasaKonsBongkarBangunanPost
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }

   });
