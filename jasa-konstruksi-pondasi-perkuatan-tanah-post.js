// ============================================================
// 🔍 ENTITY TYPE: JASA (Pondasi Bangunan)
// ATURAN: JASA TIDAK BOLEH MENGGUNAKAN MONEY_MASTER
// ✅ Gunakan: MONEY_PAGE (Komersial 60% + Transaksional 40%)
// ✅ Gunakan: MONEY_CHILD (spesifik lokasi)
// ❌ Dilarang: MONEY_MASTER
// ============================================================

// ============================================================
// 📁 LEVEL 2 - SUB2 (Turunan dari PILLAR Jasa Konstruksi)
// Parent: Jasa Pondasi & Perkuatan Tanah (/p/jasa-pondasi-perkuatan-tanah.html)
// ============================================================

const urlMappingJasaPondasiFromPillarSub2 = {
  // [SUB2] - Jasa Pondasi Bangunan
  "https://www.betonjayareadymix.com/p/jasa-pondasi-bangunan.html": "Jasa Pondasi Bangunan",  // TYPE: SUB2
};

// ============================================================
// 📁 JASA PONDASI (BORONGAN PONDASI) - MONEY PAGE & CHILD
// 🧠 ENTITY: JASA → TYPE: MONEY_PAGE & MONEY_CHILD
// Parent: Jasa Pondasi Bangunan (SUB2)
// Breadcrumb: Home > Jasa Konstruksi > Jasa Pondasi Bangunan > [Nama Layanan] (4 level)
// ============================================================

const urlMappingJasaPondasiFromSub2MoneyPage = {
  // ============================================================
  // [MONEY_PAGE] - BORONGAN PONDASI (LAYANAN UMUM)
  // 🧠 TYPE: MONEY_PAGE (JASA, bukan MONEY_MASTER)
  // Intent: Komersial (60%) + Transaksional (40%)
  // ============================================================
  "https://www.betonjayareadymix.com/2018/09/borongan-pondasi.html": "Borongan Pondasi",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2019/08/jasa-borongan-pondasi.html": "Jasa Borongan Pondasi",  // TYPE: MONEY_PAGE
  
  // ============================================================
  // [MONEY_PAGE] - HARGA JASA BORONGAN PONDASI
  // ============================================================
  "https://www.betonjayareadymix.com/2019/08/harga-jasa-borongan-pondasi.html": "Harga Jasa Borongan Pondasi",  // TYPE: MONEY_PAGE
  
  // ============================================================
  // [MONEY_CHILD] - JASA BORONGAN PONDASI PER LOKASI (TERDEKAT & MURAH)
  // 🧠 TYPE: MONEY_CHILD (spesifik lokasi)
  // ============================================================
  "https://www.betonjayareadymix.com/2019/08/jasa-borongan-pondasi-terdekat.html": "Jasa Borongan Pondasi Terdekat",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/08/jasa-borongan-pondasi-murah.html": "Jasa Borongan Pondasi Murah",  // TYPE: MONEY_CHILD
  
  // ============================================================
  // [MONEY_CHILD] - JASA BORONGAN PONDASI PER LOKASI (JAWA BARAT)
  // ============================================================
  "https://www.betonjayareadymix.com/2019/08/jasa-borongan-pondasi-sumedang.html": "Jasa Borongan Pondasi Sumedang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/08/jasa-borongan-pondasi-subang.html": "Jasa Borongan Pondasi Subang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/08/jasa-borongan-pondasi-purwakarta.html": "Jasa Borongan Pondasi Purwakarta",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/08/jasa-borongan-pondasi-pangandaran.html": "Jasa Borongan Pondasi Pangandaran",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/08/jasa-borongan-pondasi-majalengka.html": "Jasa Borongan Pondasi Majalengka",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/08/jasa-borongan-pondasi-kuningan.html": "Jasa Borongan Pondasi Kuningan",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/08/jasa-borongan-pondasi-indramayu.html": "Jasa Borongan Pondasi Indramayu",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/08/jasa-borongan-pondasi-cirebon.html": "Jasa Borongan Pondasi Cirebon",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/08/jasa-borongan-pondasi-cianjur.html": "Jasa Borongan Pondasi Cianjur",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/08/jasa-borongan-pondasi-ciamis.html": "Jasa Borongan Pondasi Ciamis",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/08/jasa-borongan-pondasi-garut.html": "Jasa Borongan Pondasi Garut",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/08/jasa-borongan-pondasi-tasikmalaya.html": "Jasa Borongan Pondasi Tasikmalaya",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/08/jasa-borongan-pondasi-sukabumi.html": "Jasa Borongan Pondasi Sukabumi",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/08/jasa-borongan-pondasi-bandung.html": "Jasa Borongan Pondasi Bandung",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/08/jasa-borongan-pondasi-karawang.html": "Jasa Borongan Pondasi Karawang",  // TYPE: MONEY_CHILD
  
  // ============================================================
  // [MONEY_CHILD] - JASA BORONGAN PONDASI PER LOKASI (JABODETABEK)
  // ============================================================
  "https://www.betonjayareadymix.com/2019/08/jasa-borongan-pondasi-bekasi.html": "Jasa Borongan Pondasi Bekasi",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/08/jasa-borongan-pondasi-tangerang.html": "Jasa Borongan Pondasi Tangerang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/08/jasa-borongan-pondasi-depok.html": "Jasa Borongan Pondasi Depok",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/08/jasa-borongan-pondasi-bogor.html": "Jasa Borongan Pondasi Bogor",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/08/jasa-borongan-pondasi-jakarta.html": "Jasa Borongan Pondasi Jakarta",  // TYPE: MONEY_CHILD
};

// ============================================================
// 📁 JASA PONDASI CAKAR AYAM - KOSONG (SARAN ITEM)
// 🧠 ENTITY: JASA → TYPE: MONEY_PAGE & MONEY_CHILD
// Parent: Jasa Pondasi Bangunan (SUB2)
// ============================================================

const urlMappingJasaPondasiCakarAyamFromSub2MoneyPage = {
  // 🟡 SARAN ITEM (BELUM AKTIF - PERLU DIBUAT KONTEN)
  // "https://www.betonjayareadymix.com/2019/08/jasa-pondasi-cakar-ayam.html": "Jasa Pondasi Cakar Ayam",  // TYPE: MONEY_PAGE
  // "https://www.betonjayareadymix.com/2019/08/harga-jasa-pondasi-cakar-ayam.html": "Harga Jasa Pondasi Cakar Ayam",  // TYPE: MONEY_PAGE
  // "https://www.betonjayareadymix.com/2019/08/jasa-pondasi-cakar-ayam-per-meter.html": "Jasa Pondasi Cakar Ayam Per Meter",  // TYPE: MONEY_CHILD
  // "https://www.betonjayareadymix.com/2019/08/jasa-pondasi-cakar-ayam-jakarta.html": "Jasa Pondasi Cakar Ayam Jakarta",  // TYPE: MONEY_CHILD
  // "https://www.betonjayareadymix.com/2019/08/jasa-pondasi-cakar-ayam-bandung.html": "Jasa Pondasi Cakar Ayam Bandung",  // TYPE: MONEY_CHILD
  // "https://www.betonjayareadymix.com/2019/08/jasa-pondasi-cakar-ayam-terdekat.html": "Jasa Pondasi Cakar Ayam Terdekat",  // TYPE: MONEY_CHILD
};

// ============================================================
// 📁 JASA PONDASI TAPAK - KOSONG (SARAN ITEM)
// 🧠 ENTITY: JASA → TYPE: MONEY_PAGE & MONEY_CHILD
// Parent: Jasa Pondasi Bangunan (SUB2)
// ============================================================

const urlMappingJasaPondasiTapakFromSub2MoneyPage = {
  // 🟡 SARAN ITEM (BELUM AKTIF - PERLU DIBUAT KONTEN)
  // "https://www.betonjayareadymix.com/2019/08/jasa-pondasi-tapak.html": "Jasa Pondasi Tapak",  // TYPE: MONEY_PAGE
  // "https://www.betonjayareadymix.com/2019/08/harga-jasa-pondasi-tapak.html": "Harga Jasa Pondasi Tapak",  // TYPE: MONEY_PAGE
  // "https://www.betonjayareadymix.com/2019/08/jasa-pondasi-tapak-per-meter.html": "Jasa Pondasi Tapak Per Meter",  // TYPE: MONEY_CHILD
  // "https://www.betonjayareadymix.com/2019/08/jasa-pondasi-tapak-jakarta.html": "Jasa Pondasi Tapak Jakarta",  // TYPE: MONEY_CHILD
  // "https://www.betonjayareadymix.com/2019/08/jasa-pondasi-tapak-bandung.html": "Jasa Pondasi Tapak Bandung",  // TYPE: MONEY_CHILD
};

// ============================================================
// 📁 JASA PONDASI TIANG PANCANG - MONEY PAGE & CHILD
// 🧠 ENTITY: JASA → TYPE: MONEY_PAGE & MONEY_CHILD
// Parent: Jasa Pondasi Bangunan (SUB2)
// ============================================================

const urlMappingJasaPondasiTiangPancangFromSub2MoneyPage = {
  // ============================================================
  // [MONEY_PAGE] - HARGA JASA PANCANG (BERBAGAI METODE)
  // 🧠 TYPE: MONEY_PAGE (JASA, bukan MONEY_MASTER)
  // ============================================================
  "https://www.betonjayareadymix.com/2019/08/harga-jasa-pancang-drop-hammer.html": "Harga Jasa Pancang Drop Hammer",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2019/08/harga-jasa-pancang-spun-pile.html": "Harga Jasa Pancang Spun Pile",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2019/08/harga-jasa-pancang-mini-pile.html": "Harga Jasa Pancang Mini Pile",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2019/08/harga-jasa-pemasangan-mini-pile.html": "Harga Jasa Pemasangan Mini Pile",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2019/08/harga-jasa-pancang-hidrolik.html": "Harga Jasa Pancang Hidrolik",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2019/08/harga-jasa-pemasangan-tiang-pancang.html": "Harga Jasa Pemasangan Tiang Pancang",  // TYPE: MONEY_PAGE
  
  // ============================================================
  // [MONEY_PAGE] - HARGA JASA PONDASI TIANG PANCANG
  // ============================================================
  "https://www.betonjayareadymix.com/2019/08/harga-jasa-pondasi-tiang-pancang.html": "Harga Jasa Pondasi Tiang Pancang",  // TYPE: MONEY_PAGE
  
  // ============================================================
  // [MONEY_CHILD] - JASA PONDASI TIANG PANCANG PER LOKASI
  // 🧠 TYPE: MONEY_CHILD (spesifik lokasi)
  // ============================================================
  "https://www.betonjayareadymix.com/2019/08/harga-jasa-pondasi-tiang-pancang-terdekat.html": "Harga Jasa Pondasi Tiang Pancang Terdekat",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/08/harga-jasa-pondasi-tiang-pancang-murah.html": "Harga Jasa Pondasi Tiang Pancang Murah",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/08/harga-jasa-pondasi-tiang-pancang-karawang.html": "Harga Jasa Pondasi Tiang Pancang Karawang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/08/harga-jasa-pondasi-tiang-pancang-bekasi.html": "Harga Jasa Pondasi Tiang Pancang Bekasi",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/08/harga-jasa-pondasi-tiang-pancang-tangerang.html": "Harga Jasa Pondasi Tiang Pancang Tangerang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/08/harga-jasa-pondasi-tiang-pancang-depok.html": "Harga Jasa Pondasi Tiang Pancang Depok",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/08/harga-jasa-pondasi-tiang-pancang-bogor.html": "Harga Jasa Pondasi Tiang Pancang Bogor",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/08/harga-jasa-pondasi-tiang-pancang-jakarta.html": "Harga Jasa Pondasi Tiang Pancang Jakarta",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/08/harga-jasa-pondasi-tiang-pancang-surabaya.html": "Harga Jasa Pondasi Tiang Pancang Surabaya",  // TYPE: MONEY_CHILD
};

// ============================================================
// 📁 JASA PONDASI SUMURAN - KOSONG (SARAN ITEM)
// 🧠 ENTITY: JASA → TYPE: MONEY_PAGE & MONEY_CHILD
// Parent: Jasa Pondasi Bangunan (SUB2)
// ============================================================

const urlMappingJasaPondasiSumuranFromSub2MoneyPage = {
  // 🟡 SARAN ITEM (BELUM AKTIF - PERLU DIBUAT KONTEN)
  // "https://www.betonjayareadymix.com/2019/08/jasa-pondasi-sumuran.html": "Jasa Pondasi Sumuran",  // TYPE: MONEY_PAGE
  // "https://www.betonjayareadymix.com/2019/08/harga-jasa-pondasi-sumuran.html": "Harga Jasa Pondasi Sumuran",  // TYPE: MONEY_PAGE
  // "https://www.betonjayareadymix.com/2019/08/jasa-pondasi-sumuran-per-meter.html": "Jasa Pondasi Sumuran Per Meter",  // TYPE: MONEY_CHILD
  // "https://www.betonjayareadymix.com/2019/08/jasa-pondasi-sumuran-jakarta.html": "Jasa Pondasi Sumuran Jakarta",  // TYPE: MONEY_CHILD
  // "https://www.betonjayareadymix.com/2019/08/jasa-pondasi-sumuran-bandung.html": "Jasa Pondasi Sumuran Bandung",  // TYPE: MONEY_CHILD
  // "https://www.betonjayareadymix.com/2019/08/jasa-pondasi-sumuran-terdekat.html": "Jasa Pondasi Sumuran Terdekat",  // TYPE: MONEY_CHILD
};

// ============================================================
// 📁 CATATAN: JASA PONDASI BORED PILE
// 🧠 SUDAH ADA DI PENGEBORAN (urlMappingJasaPengeboranFromSub2MoneyPage)
// Tidak perlu duplikasi di sini
// ============================================================

// ============================================================
// 🔴 BREADCRUMB SKIP LEVEL NOTES
// ============================================================
/*
📌 BREADCRUMB SKIP LEVEL YANG DIPERBOLEHKAN:

Untuk semua MONEY_PAGE dan MONEY_CHILD di atas:
- Skip: "Jasa Pondasi & Perkuatan Tanah" (SUB2)
- Karena halaman tersebut hanya sebagai pengelompokan

Breadcrumb yang benar:
Home > Jasa Konstruksi > Jasa Pondasi Bangunan > Borongan Pondasi (4 level)
Home > Jasa Konstruksi > Jasa Pondasi Bangunan > Borongan Pondasi Jakarta (4 level)
Home > Jasa Konstruksi > Jasa Pondasi Bangunan > Harga Jasa Pancang Mini Pile (4 level)

✅ SEMUA URL di atas sudah valid sebagai MONEY_PAGE / MONEY_CHILD
✅ Tidak ada MONEY_MASTER (karena ENTITY JASA)
✅ Tidak ada duplikasi konten berisiko tinggi
✅ Aman untuk SEO
*/

// ============================================================
// 📋 RINGKASAN TYPE YANG DIGUNAKAN
// ============================================================
/*
Type			Jumlah Item	Keterangan
SUB2			1			Jasa Pondasi Bangunan (kategori)
MONEY_PAGE		~10			Harga & layanan jasa pondasi umum
MONEY_CHILD		~30			Jasa pondasi per lokasi (Jakarta, Bandung, dll)

✅ ENTITY TYPE: JASA - semua MONEY_PAGE dan MONEY_CHILD VALID
❌ MONEY_MASTER - TIDAK ADA (karena JASA tidak boleh)
*/

// ============================================================
// 🟡 REKOMENDASI URL TAMBAHAN (GLOBAL)
// ============================================================
/*
🧠 URL YANG DISARANKAN UNTUK DITAMBAHKAN:

| No | URL Saran | Type | Prioritas | Keterangan |
|----|-----------|------|-----------|-------------|
| 1 | /2019/08/jasa-borongan-pondasi-surabaya.html | MONEY_CHILD | 🟡 MEDIUM | Lokasi Surabaya |
| 2 | /2019/08/jasa-borongan-pondasi-semarang.html | MONEY_CHILD | 🟡 MEDIUM | Lokasi Semarang |
| 3 | /2019/08/jasa-borongan-pondasi-medan.html | MONEY_CHILD | 🟡 MEDIUM | Lokasi Medan |
| 4 | /2019/08/jasa-borongan-pondasi-makassar.html | MONEY_CHILD | 🟡 MEDIUM | Lokasi Makassar |
| 5 | /2019/08/jasa-pondasi-cakar-ayam.html | MONEY_PAGE | 🔴 HIGH | Perlu dibuat konten |
| 6 | /2019/08/jasa-pondasi-tapak.html | MONEY_PAGE | 🔴 HIGH | Perlu dibuat konten |
| 7 | /2019/08/jasa-pondasi-sumuran.html | MONEY_PAGE | 🔴 HIGH | Perlu dibuat konten |
| 8 | /2019/08/jasa-pondasi-batu-kali.html | MONEY_PAGE | 🟡 MEDIUM | Pondasi batu kali |
| 9 | /2019/08/harga-borongan-pondasi-per-meter.html | MONEY_PAGE | 🟡 MEDIUM | Harga per meter |
| 10 | /2019/08/jasa-pondasi-rumah-2-lantai.html | MONEY_CHILD | 🟡 MEDIUM | Spesifikasi rumah 2 lantai |
*/ 
// Menyimpan elemen yang dihapus dalam variabel
let removedElementsJasaPondasiPerkuatanTanahKonsPost = {};
// Fungsi untuk menghapus elemen berdasarkan ID
function removeCondition(conditionId) {
    const conditionElement = document.getElementById(conditionId);

    if (conditionElement) {
        // Menyimpan elemen yang dihapus dalam objek untuk bisa dikembalikan
        removedElementsJasaPondasiPerkuatanTanahKonsPost[conditionId] = conditionElement;
        conditionElement.remove(); // Menghapus elemen tersebut
    }
}

// Fungsi untuk mengembalikan elemen yang telah dihapus
function restoreCondition(conditionId) {
    const breadcrumb = document.querySelector('.breadcrumb');
    const elementToRestore = removedElementsJasaPondasiPerkuatanTanahKonsPost[conditionId]; // Mendapatkan elemen yang disimpan

    if (elementToRestore) {
        breadcrumb.appendChild(elementToRestore); // Menambahkan elemen kembali ke dalam breadcrumb
        delete removedElementsJasaPondasiPerkuatanTanahKonsPost[conditionId]; // Menghapus elemen dari objek setelah dikembalikan
    } else {
        console.log(`Elemen dengan ID ${conditionId} tidak ditemukan di removedElementsJasaPondasiPerkuatanTanahKonsPost.`);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    // var currentUrl = window.location.href;
     //const cleanUrl = currentUrl.split('?')[0]; // Menghapus parameter seperti ?m=1
    const cleanUrlJasaPondasiPerkuatanTanahKonsPost = window.location.href.split(/[?#]/)[0]; // Menghilangkan parameter seperti ?m=1

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
		urlMappingJasaPondasi,
		urlMappingJasaPondasiCakarAyam,
		urlMappingJasaPondasiTapak,
		urlMappingJasaPondasiTiangPancang,
		urlMappingJasaPondasiSumuran		
    );
   
    // --- validasi URL terdaftar ---
    if (!urlMappingGabungan[cleanUrlJasaPondasiPerkuatanTanahKonsPost]) {
      console.log(`[HybridDateModified] URL tidak terdaftar: ${cleanUrlJasaPondasiPerkuatanTanahKonsPost}`);
      return;
    }

  // === Tanggal nextUpdate1 global ===
		const globalNextUpdate1 = "2026-02-08T00:00:00.000Z";
	console.log(`🌐 [AutoMeta] Detected jasa-konstruksi-pondasi-perkuatan-tanah-post : ${cleanUrlJasaPondasiPerkuatanTanahKonsPost}`);

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

    const hash = stableHash(cleanUrlJasaPondasiPerkuatanTanahKonsPost);
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
	
	console.log("✅ AEDMetaDates updated jasa-konstruksi-pondasi-perkuatan-tanah-post:", window.AEDMetaDates);
    console.log(`✅ [HybridDateModified v2.5] ${cleanUrlJasaPondasiPerkuatanTanahKonsPost} → ${isoDate} | type=${type || "-"}`);

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
		urlMappingJasaPondasi,
		urlMappingJasaPondasiCakarAyam,
		urlMappingJasaPondasiTapak,
		urlMappingJasaPondasiTiangPancang,
		urlMappingJasaPondasiSumuran		
    );
   
    // --- validasi URL terdaftar ---
    if (!urlMappingGabungan[cleanUrlJasaPondasiPerkuatanTanahKonsPost]) {
      console.log(`[HybridDateModified] URL tidak terdaftar: ${cleanUrlJasaPondasiPerkuatanTanahKonsPost}`);
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
		    await loadEvergreenScript("2026-01-21T10:30:00+07:00");
		
		    // ✔ AUTO MODE
		    // await loadEvergreenScript();
		
		  } catch (err) {
		    console.error("[HybridDateModified] Fatal:", err);
		  }
		})();
     // Menemukan elemen menggunakan Id
    var JasaKonsPondasiTanahPost = document.getElementById("JasaKonsPondasiTanahPost");

    if (!JasaKonsPondasiTanahPost) {
        console.error("elemen Id JasaKonsPondasiTanahPost kondisi terhapus");
        return;
    }
    
     var JasaKonstruksiPondasiTanahSubPostLink = document.getElementById("JasaKonstruksiPondasiTanahSubPost");
     var JasaPondasiTanahSubPostLink = document.getElementById("JasaPondasiTanahSubPost");

     //SUB Jasa Pondasi Tanah
     var JasaPondasiBangunanSubPostLink = document.getElementById("JasaPondasiBangunanSubPost");
     var JasaPemadatanPersiapanPondasiSubPostLink = document.getElementById("JasaPemadatanPersiapanPondasiSubPost");
     var JasaPerkuatanTanahSubPostLink = document.getElementById("JasaPerkuatanTanahSubPost");
     var JasaRetrofittingPondasiSubPostLink = document.getElementById("JasaRetrofittingPondasiSubPost");
	
    //SUB JasaPondasiBangunanSubPost
     var JasaPondasiCakarAyamPostLink = document.getElementById("JasaPondasiCakarAyamPost");
     var JasaPondasiTapakPostLink = document.getElementById("JasaPondasiTapakPost");
    // var JasaPondasiBoredPilePostLink = document.getElementById("JasaPondasiBoredPilePost");
     var JasaPondasiTiangPancangPostLink = document.getElementById("JasaPondasiTiangPancangPost");
     var JasaPondasiSumuranPostLink = document.getElementById("JasaPondasiSumuranPost");
	
     var pageNameJasaKonsPondasiTanahPost = document.getElementById("pageNameJasaKonsPondasiTanahPost");
    

     // Default untuk menyembunyikan elemen
     JasaKonstruksiPondasiTanahSubPostLink.style.visibility = 'hidden';
     JasaPondasiTanahSubPost.style.visibility = 'hidden';
	
     //SUB PONDASI TANAH
     JasaPondasiBangunanSubPostLink.style.visibility = 'hidden';
     JasaPemadatanPersiapanPondasiSubPostLink.style.visibility = 'hidden';
     JasaPerkuatanTanahSubPostLink.style.visibility = 'hidden';
     JasaRetrofittingPondasiSubPostLink.style.visibility = 'hidden';

    //SUB JasaPondasiBangunanSubPost
     JasaPondasiCakarAyamPostLink.style.visibility = 'hidden';
     JasaPondasiTapakPostLink.style.visibility = 'hidden';
     //JasaPondasiBoredPilePostLink.style.visibility = 'hidden';
     JasaPondasiTiangPancangPostLink.style.visibility = 'hidden';
     JasaPondasiSumuranPostLink.style.visibility = 'hidden';
	
     pageNameJasaKonsPondasiTanahPost.textContent = "";
	
    //SUB urlMappingBangunan
if (urlMappingJasaPondasi[cleanUrlJasaPondasiPerkuatanTanahKonsPost]) {
        restoreCondition('JasaKonsPondasiTanahPost');
        restoreCondition('JasaPondasiBangunanSubPost');
        //restoreCondition('JasaPondasiCakarAyamPost');
     
        //hapus elemen div id lain
	removeCondition('JasaDesInPost');
	removeCondition('ProdukInFurPost');
	removeCondition('ProdukKonsSaluranPost');
        removeCondition('ProdukKonsPembatasPost');
	    removeCondition('ProdukKonsDindingModularPost');
        removeCondition('ProdukKonsPost');
        removeCondition('MaterialKonsStukturPost');
        removeCondition('MaterialKonsFasadPelapisEksteriorPost');
        removeCondition('JasaKonsPerkuatanTanahLongsorPost');
	removeCondition('MaterialKonsAtapPenutupPost');
        removeCondition('JasaKonsPembatasPost');
        removeCondition('JasaKonsPerbaikanPost');
	removeCondition('JasaKonsCuttingBetonPost');
	removeCondition('JasaKonsBongkarBangunanPost');
        removeCondition('JasaKonsPengeboranPost');
        removeCondition('JasaKonsFinishingPost');
        removeCondition('JasaKonsStrukturPost');
        removeCondition('JasaKonsAlatKonstruksiPost');
        removeCondition('JasaKonsJalanPerkerasanPost');
	
	/*
        removeCondition('materialKonsReadymix');
        removeCondition('ProdukKonsSaluranPost');
        removeCondition('ProdukKonsPembatasPost');
        removeCondition('JasaKonsPerbaikan');
       	removeCondition('JasaKons');
       	removeCondition('JasaKonsSub');
       	removeCondition('MenuKons');
       	removeCondition('JasaKonsFinishing');
        removeCondition('JasaKonsStruktur');
        removeCondition('JasaKonsPembatas');
        removeCondition('JasaKonsPembatasPost');
        removeCondition('JasaKonsPerkuatanTanahLongsorPost');
*/

        //hapus elemen SUB jasa pembatas lain selain JasaPondasiBangunanSubPost
        removeCondition('JasaPemadatanPersiapanPondasiSubPost');
        removeCondition('JasaPerkuatanTanahSubPost');
        removeCondition('JasaRetrofittingPondasiSubPost');

	 //hapus elemen sub JasaPembuatanPagarDindingPembatas SEMUA
	removeCondition('JasaPondasiCakarAyamPost');
        removeCondition('JasaPondasiTapakPost');
        
	removeCondition('JasaPondasiTiangPancangPost');
	removeCondition('JasaPondasiSumuranPost');
	/*
 JasaPondasiBangunanSubPostLink.style.visibility = 'hidden';
     JasaPemadatanPersiapanPondasiSubPostLink.style.visibility = 'hidden';
     JasaPerkuatanTanahSubPostLink.style.visibility = 'hidden';
     JasaRetrofittingPondasiSubPostLink.style.visibility = 'hidden';
*/
       
        JasaKonstruksiPondasiTanahSubPostLink.style.visibility = 'visible';
        JasaPondasiTanahSubPostLink.style.visibility = 'visible';
	//TAMPILKAN PONDASI BANGUNAN
        JasaPondasiBangunanSubPostLink.style.visibility = 'visible';
	//TAMPILKAN JasaPondasiCakarAyam
       // JasaPondasiCakarAyamPostLink.style.visibility = 'visible';
        pageNameJasaKonsPondasiTanahPost.textContent = urlMappingJasaPondasi[cleanUrlJasaPondasiPerkuatanTanahKonsPost];
    }
// ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaPondasi[cleanUrlJasaPondasiPerkuatanTanahKonsPost]) {
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
                   "name": "Jasa Pondasi & Perkuatan Tanah",
                   "item": "https://www.betonjayareadymix.com/p/jasa-pondasi-perkuatan-tanah.html"
               },
		{
                   "@type": "ListItem",
                   "position": 4,
                   "name": "Jasa Pondasi Bangunan",
                   "item": "https://www.betonjayareadymix.com/p/jasa-pondasi-bangunan.html"
               },
               {
                   "@type": "ListItem",
                   "position": 5,
                   "name": urlMappingJasaPondasi[cleanUrlJasaPondasiPerkuatanTanahKonsPost],
                   "item": cleanUrlJasaPondasiPerkuatanTanahKonsPost
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
if (urlMappingJasaPondasiCakarAyam[cleanUrlJasaPondasiPerkuatanTanahKonsPost]) {
        restoreCondition('JasaKonsPondasiTanahPost');
        restoreCondition('JasaPondasiBangunanSubPost');
        restoreCondition('JasaPondasiCakarAyamPost');
     
        //hapus elemen div id lain
	removeCondition('JasaDesInPost');
	removeCondition('ProdukInFurPost');
	removeCondition('ProdukKonsSaluranPost');
        removeCondition('ProdukKonsPembatasPost');
	    removeCondition('ProdukKonsDindingModularPost');
        removeCondition('ProdukKonsPost');
        removeCondition('MaterialKonsStukturPost');
        removeCondition('MaterialKonsFasadPelapisEksteriorPost');
        removeCondition('JasaKonsPerkuatanTanahLongsorPost');
	removeCondition('MaterialKonsAtapPenutupPost');
        removeCondition('JasaKonsPembatasPost');
        removeCondition('JasaKonsPerbaikanPost');
	removeCondition('JasaKonsCuttingBetonPost');
	removeCondition('JasaKonsBongkarBangunanPost');
        removeCondition('JasaKonsPengeboranPost');
        removeCondition('JasaKonsFinishingPost');
        removeCondition('JasaKonsStrukturPost');
        removeCondition('JasaKonsAlatKonstruksiPost');
        removeCondition('JasaKonsJalanPerkerasanPost');
	
	/*
        removeCondition('materialKonsReadymix');
        removeCondition('ProdukKonsSaluranPost');
        removeCondition('ProdukKonsPembatasPost');
        removeCondition('JasaKonsPerbaikan');
       	removeCondition('JasaKons');
       	removeCondition('JasaKonsSub');
       	removeCondition('MenuKons');
       	removeCondition('JasaKonsFinishing');
        removeCondition('JasaKonsStruktur');
        removeCondition('JasaKonsPembatas');
        removeCondition('JasaKonsPembatasPost');
        removeCondition('JasaKonsPerkuatanTanahLongsorPost');
*/

        //hapus elemen SUB jasa pembatas lain selain JasaPondasiBangunanSubPost
        removeCondition('JasaPemadatanPersiapanPondasiSubPost');
        removeCondition('JasaPerkuatanTanahSubPost');
        removeCondition('JasaRetrofittingPondasiSubPost');

	 //hapus elemen sub JasaPembuatanPagarDindingPembatas SELAIN JasaPondasiCakarAyamPost
        removeCondition('JasaPondasiTapakPost');
         
	removeCondition('JasaPondasiTiangPancangPost');
	removeCondition('JasaPondasiSumuranPost');
	/*
 JasaPondasiBangunanSubPostLink.style.visibility = 'hidden';
     JasaPemadatanPersiapanPondasiSubPostLink.style.visibility = 'hidden';
     JasaPerkuatanTanahSubPostLink.style.visibility = 'hidden';
     JasaRetrofittingPondasiSubPostLink.style.visibility = 'hidden';
*/
       
        JasaKonstruksiPondasiTanahSubPostLink.style.visibility = 'visible';
        JasaPondasiTanahSubPostLink.style.visibility = 'visible';
	//TAMPILKAN PONDASI BANGUNAN
        JasaPondasiBangunanSubPostLink.style.visibility = 'visible';
	//TAMPILKAN JasaPondasiCakarAyam
        JasaPondasiCakarAyamPostLink.style.visibility = 'visible';
        pageNameJasaKonsPondasiTanahPost.textContent = urlMappingJasaPondasiCakarAyam[cleanUrlJasaPondasiPerkuatanTanahKonsPost];
    }
    
// ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaPondasiCakarAyam[cleanUrlJasaPondasiPerkuatanTanahKonsPost]) {
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
                   "name": "Jasa Pondasi & Perkuatan Tanah",
                   "item": "https://www.betonjayareadymix.com/p/jasa-pondasi-perkuatan-tanah.html"
               },
		{
                   "@type": "ListItem",
                   "position": 4,
                   "name": "Jasa Pondasi Bangunan",
                   "item": "https://www.betonjayareadymix.com/p/jasa-pondasi-bangunan.html"
               },
	       {
                   "@type": "ListItem",
                   "position": 5,
                   "name": "Jasa Pondasi Cakar Ayam",
                   "item": "https://www.betonjayareadymix.com/p/jasa-pondasi-cakar-ayam.html"
               },
               {
                   "@type": "ListItem",
                   "position": 6,
                   "name": urlMappingJasaPondasiCakarAyam[cleanUrlJasaPondasiPerkuatanTanahKonsPost],
                   "item": cleanUrlJasaPondasiPerkuatanTanahKonsPost
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
	
    if (urlMappingJasaPondasiTapak[cleanUrlJasaPondasiPerkuatanTanahKonsPost]) {
        restoreCondition('JasaKonsPondasiTanahPost');
        restoreCondition('JasaPondasiBangunanSubPost');
        restoreCondition('JasaPondasiTapakPost');
     
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
        removeCondition('JasaKonsPembatasPost');
        removeCondition('JasaKonsPerbaikanPost');
	removeCondition('JasaKonsCuttingBetonPost');
	removeCondition('JasaKonsBongkarBangunanPost');
        removeCondition('JasaKonsPengeboranPost');
        removeCondition('JasaKonsFinishingPost');
        removeCondition('JasaKonsStrukturPost');
        removeCondition('JasaKonsAlatKonstruksiPost');
        removeCondition('JasaKonsJalanPerkerasanPost');

        //hapus elemen SUB jasa pembatas lain
        removeCondition('JasaPemadatanPersiapanPondasiSubPost');
        removeCondition('JasaPerkuatanTanahSubPost');
        removeCondition('JasaRetrofittingPondasiSubPost');

	 //hapus elemen sub JasaPembuatanPagarDindingPembatas SELAIN JasaPagarPanelBeton
        removeCondition('JasaPondasiCakarAyamPost');
         
	removeCondition('JasaPondasiTiangPancangPost');
	removeCondition('JasaPondasiSumuranPost');
	/*
 JasaPondasiBangunanSubPostLink.style.visibility = 'hidden';
     JasaPemadatanPersiapanPondasiSubPostLink.style.visibility = 'hidden';
     JasaPerkuatanTanahSubPostLink.style.visibility = 'hidden';
     JasaRetrofittingPondasiSubPostLink.style.visibility = 'hidden';
*/
       
        JasaKonstruksiPondasiTanahSubPostLink.style.visibility = 'visible';
        JasaPondasiTanahSubPostLink.style.visibility = 'visible';
	//TAMPILKAN PONDASI BANGUNAN
        JasaPondasiBangunanSubPostLink.style.visibility = 'visible';
	//TAMPILKAN JasaPondasiCakarAyam
        JasaPondasiTapakPostLink.style.visibility = 'visible';
        pageNameJasaKonsPondasiTanahPost.textContent = urlMappingJasaPondasiTapak[cleanUrlJasaPondasiPerkuatanTanahKonsPost];
    }

// ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaPondasiTapak[cleanUrlJasaPondasiPerkuatanTanahKonsPost]) {
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
                   "name": "Jasa Pondasi & Perkuatan Tanah",
                   "item": "https://www.betonjayareadymix.com/p/jasa-pondasi-perkuatan-tanah.html"
               },
		{
                   "@type": "ListItem",
                   "position": 4,
                   "name": "Jasa Pondasi Bangunan",
                   "item": "https://www.betonjayareadymix.com/p/jasa-pondasi-bangunan.html"
               },
	       {
                   "@type": "ListItem",
                   "position": 5,
                   "name": "Jasa Pondasi Tapak",
                   "item": "https://www.betonjayareadymix.com/p/jasa-pondasi-tapak.html"
               },
               {
                   "@type": "ListItem",
                   "position": 6,
                   "name": urlMappingJasaPondasiTapak[cleanUrlJasaPondasiPerkuatanTanahKonsPost],
                   "item": cleanUrlJasaPondasiPerkuatanTanahKonsPost
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
 
if (urlMappingJasaPondasiTiangPancang[cleanUrlJasaPondasiPerkuatanTanahKonsPost]) {
        restoreCondition('JasaKonsPondasiTanahPost');
        restoreCondition('JasaPondasiBangunanSubPost');
        restoreCondition('JasaPondasiTiangPancangPost');
     
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
        removeCondition('JasaKonsPembatasPost');
        removeCondition('JasaKonsPerbaikanPost');
	removeCondition('JasaKonsCuttingBetonPost');
	removeCondition('JasaKonsBongkarBangunanPost');
        removeCondition('JasaKonsPengeboranPost');
        removeCondition('JasaKonsFinishingPost');
        removeCondition('JasaKonsStrukturPost');
        removeCondition('JasaKonsAlatKonstruksiPost');
        removeCondition('JasaKonsJalanPerkerasanPost');
	
        //hapus elemen SUB jasa pembatas lain
        removeCondition('JasaPemadatanPersiapanPondasiSubPost');
        removeCondition('JasaPerkuatanTanahSubPost');
        removeCondition('JasaRetrofittingPondasiSubPost');

	 //hapus elemen sub JasaPembuatanPagarDindingPembatas SELAIN JasaPagarPanelBeton
        removeCondition('JasaPondasiTapakPost');
         
	removeCondition('JasaPondasiCakarAyamPost');
	removeCondition('JasaPondasiSumuranPost');
	/*
 JasaPondasiBangunanSubPostLink.style.visibility = 'hidden';
     JasaPemadatanPersiapanPondasiSubPostLink.style.visibility = 'hidden';
     JasaPerkuatanTanahSubPostLink.style.visibility = 'hidden';
     JasaRetrofittingPondasiSubPostLink.style.visibility = 'hidden';
*/
       
        JasaKonstruksiPondasiTanahSubPostLink.style.visibility = 'visible';
        JasaPondasiTanahSubPostLink.style.visibility = 'visible';
	//TAMPILKAN PONDASI BANGUNAN
        JasaPondasiBangunanSubPostLink.style.visibility = 'visible';
	//TAMPILKAN JasaPondasiCakarAyam
        JasaPondasiTiangPancangPostLink.style.visibility = 'visible';
        pageNameJasaKonsPondasiTanahPost.textContent = urlMappingJasaPondasiTiangPancang[cleanUrlJasaPondasiPerkuatanTanahKonsPost];
   }
// ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaPondasiTiangPancang[cleanUrlJasaPondasiPerkuatanTanahKonsPost]) {
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
                   "name": "Jasa Pondasi & Perkuatan Tanah",
                   "item": "https://www.betonjayareadymix.com/p/jasa-pondasi-perkuatan-tanah.html"
               },
		{
                   "@type": "ListItem",
                   "position": 4,
                   "name": "Jasa Pondasi Bangunan",
                   "item": "https://www.betonjayareadymix.com/p/jasa-pondasi-bangunan.html"
               },
	       {
                   "@type": "ListItem",
                   "position": 5,
                   "name": "Jasa Pondasi Tiang Pancang",
                   "item": "https://www.betonjayareadymix.com/p/jasa-pondasi-tiang-pancang.html"
               },
               {
                   "@type": "ListItem",
                   "position": 6,
                   "name": urlMappingJasaPondasiTiangPancang[cleanUrlJasaPondasiPerkuatanTanahKonsPost],
                   "item": cleanUrlJasaPondasiPerkuatanTanahKonsPost
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
   if (urlMappingJasaPondasiSumuran[cleanUrlJasaPondasiPerkuatanTanahKonsPost]) {
        restoreCondition('JasaKonsPondasiTanahPost');
        restoreCondition('JasaPondasiBangunanSubPost');
        restoreCondition('JasaPondasiSumuranPost');
     
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
        removeCondition('JasaKonsPembatasPost');
        removeCondition('JasaKonsPerbaikanPost');
	removeCondition('JasaKonsCuttingBetonPost');
	removeCondition('JasaKonsBongkarBangunanPost');
        removeCondition('JasaKonsPengeboranPost');
        removeCondition('JasaKonsFinishingPost');
        removeCondition('JasaKonsStrukturPost');
        removeCondition('JasaKonsAlatKonstruksiPost');
        removeCondition('JasaKonsJalanPerkerasanPost');
	
        //hapus elemen SUB jasa pembatas lain
        removeCondition('JasaPemadatanPersiapanPondasiSubPost');
        removeCondition('JasaPerkuatanTanahSubPost');
        removeCondition('JasaRetrofittingPondasiSubPost');

	 //hapus elemen sub JasaPembuatanPagarDindingPembatas SELAIN JasaPagarPanelBeton
        removeCondition('JasaPondasiTapakPost');
         
	removeCondition('JasaPondasiTiangPancangPost');
	removeCondition('JasaPondasiCakarAyamPost');
	/*
 JasaPondasiBangunanSubPostLink.style.visibility = 'hidden';
     JasaPemadatanPersiapanPondasiSubPostLink.style.visibility = 'hidden';
     JasaPerkuatanTanahSubPostLink.style.visibility = 'hidden';
     JasaRetrofittingPondasiSubPostLink.style.visibility = 'hidden';
*/
       
        JasaKonstruksiPondasiTanahSubPostLink.style.visibility = 'visible';
        JasaPondasiTanahSubPostLink.style.visibility = 'visible';
	//TAMPILKAN PONDASI BANGUNAN
        JasaPondasiBangunanSubPostLink.style.visibility = 'visible';
	//TAMPILKAN JasaPondasiCakarAyam
        JasaPondasiSumuranPostLink.style.visibility = 'visible';
        pageNameJasaKonsPondasiTanahPost.textContent = urlMappingJasaPondasiSumuran[cleanUrlJasaPondasiPerkuatanTanahKonsPost];
   }

// ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaPondasiSumuran[cleanUrlJasaPondasiPerkuatanTanahKonsPost]) {
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
                   "name": "Jasa Pondasi & Perkuatan Tanah",
                   "item": "https://www.betonjayareadymix.com/p/jasa-pondasi-perkuatan-tanah.html"
               },
		{
                   "@type": "ListItem",
                   "position": 4,
                   "name": "Jasa Pondasi Bangunan",
                   "item": "https://www.betonjayareadymix.com/p/jasa-pondasi-bangunan.html"
               },
	       {
                   "@type": "ListItem",
                   "position": 5,
                   "name": "Jasa Pondasi Sumuran",
                   "item": "https://www.betonjayareadymix.com/p/jasa-pondasi-sumuran.html"
               },
               {
                   "@type": "ListItem",
                   "position": 6,
                   "name": urlMappingJasaPondasiSumuran[cleanUrlJasaPondasiPerkuatanTanahKonsPost],
                   "item": cleanUrlJasaPondasiPerkuatanTanahKonsPost
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }

   });
