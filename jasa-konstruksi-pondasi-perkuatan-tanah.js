/*
const urlMappingJasaPondasiBangunan = {
//"https://www.betonjayareadymix.com/p/jasa-borongan-pondasi.html": "Jasa Borongan Pondasi",
"https://www.betonjayareadymix.com/p/jasa-pondasi-cakar-ayam.html": "Jasa Pondasi Cakar Ayam",
  "https://www.betonjayareadymix.com/p/jasa-pondasi-tapak.html": "Jasa Pondasi Tapak",
  //ga usah karna udah ada di jasa pengeboran 
  //"https://www.betonjayareadymix.com/p/jasa-pondasi-bore-pile.html": "Jasa Pondasi Bore Pile",
  "https://www.betonjayareadymix.com/p/jasa-tiang-pancang.html": "Jasa Tiang Pancang",
  "https://www.betonjayareadymix.com/p/jasa-pondasi-sumuran.html": "Jasa Pondasi Sumuran"

};

const urlMappingJasaPemadatanPersiapanPondasi = {
"https://www.betonjayareadymix.com/p/jasa-pemadatan-pondasi-bangunan.html": "Jasa pemadatan pondasi bangunan",
  "https://www.betonjayareadymix.com/p/jasa-cut-and-fill-pondasi.html": "Jasa cut and fill pondasi",
  "https://www.betonjayareadymix.com/p/jasa-leveling-tanah-proyek-gedung.html": "Jasa leveling tanah proyek gedung",
  "https://www.betonjayareadymix.com/p/jasa-pembersihan-lahan-konstruksi.html": "Jasa pembersihan lahan konstruksi",
  "https://www.betonjayareadymix.com/p/jasa-uji-kepadatan-tanah-pondasi.html": "Jasa uji kepadatan tanah pondasi"

};

const urlMappingJasaPerkuatanTanah = {
"https://www.betonjayareadymix.com/p/jasa-soil-improvement.html": "Jasa Soil Improvement",
  "https://www.betonjayareadymix.com/p/jasa-perkuatan-tanah-geotextile.html": "Jasa Perkuatan Tanah Geotextile",
  "https://www.betonjayareadymix.com/p/jasa-perkuatan-tanah-stone-column.html": "Jasa Perkuatan Tanah Stone Column",
  "https://www.betonjayareadymix.com/p/jasa-vertical-drain.html": "Jasa Vertical Drain",
  "https://www.betonjayareadymix.com/p/jasa-soil-nailing.html": "Jasa Soil Nailing"

};

const urlMappingJasaRetrofittingPondasi = {
"https://www.betonjayareadymix.com/p/jasa-perkuatan-pondasi-bangunan-lama.html": "Jasa Perkuatan Pondasi Bangunan Lama",
  "https://www.betonjayareadymix.com/p/jasa-pondasi-untuk-penurunan-tanah.html": "Jasa Pondasi Untuk Penurunan Tanah",
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-pondasi-penurunan-tanah.html": "Jasa Perbaikan Pondasi Penurunan Tanah",
  "https://www.betonjayareadymix.com/p/retrofitting-pondasi-penambahan-lantai.html": "Retrofitting Pondasi Penambahan Lantai",
  "https://www.betonjayareadymix.com/p/jasa-underpinning-pondasi.html": "Jasa Underpinning Pondasi",
  "https://www.betonjayareadymix.com/p/jasa-grouting-pondasi.html": "Jasa Grouting Pondasi"
	
};
*/
// ============================================================
// 🔍 ENTITY TYPE: JASA (Pondasi & Perkuatan Tanah)
// ATURAN: JASA TIDAK BOLEH MENGGUNAKAN MONEY_MASTER
// ✅ Gunakan: SUB2 (Informasional 60%) atau MONEY_PAGE (Komersial+Transaksional)
// ✅ Gunakan: VARIANT (Komersial 80%) UNTUK SPESIFIKASI TEKNIS YANG SANGAT DETAIL
// ❌ Dilarang: MONEY_MASTER untuk JASA

const urlMappingJasaPondasiFromMoneyMasterMoneyMaster1 = {
// ============================================================
// 📌 MM - JASA PONDASI (LEVEL 4) - INDUK UTAMA
// ============================================================
//"https://www.betonjayareadymix.com/p/jasa-pondasi.html": "Jasa Pondasi",  // ✅ MM (L4)
// ============================================================
// 📌 MM - JASA PONDASI CAKAR AYAM (LEVEL 4)
// ============================================================
"https://www.betonjayareadymix.com/p/jasa-cakar-ayam.html": "Jasa Cakar Ayam",  // ✅ MM (L4)
// ============================================================
// 📌 MM - JASA PONDASI TAPAK (LEVEL 4)
// ============================================================
"https://www.betonjayareadymix.com/p/jasa-pondasi-tapak.html": "Jasa Pondasi Tapak",  // ✅ MM (L4)
	// ============================================================
// 📌 MM - JASA PONDASI TIANG PANCANG (LEVEL 4)
// ============================================================
"https://www.betonjayareadymix.com/p/jasa-tiang-pancang.html": "Jasa Tiang Pancang",  // ✅ MM (L4)
// ============================================================
// 📌 MM - JASA PONDASI SUMURAN (LEVEL 4)
// ============================================================
"https://www.betonjayareadymix.com/p/jasa-pondasi-sumuran.html": "Jasa Pondasi Sumuran",  // ✅ MM (L4)

// ============================================================
// 📌 MP LANGSUNG DI BAWAH JASA PONDASI (LEVEL 5)
// ============================================================
 "https://www.betonjayareadymix.com/p/jasa-persiapan-pondasi.html": "Jasa Persiapan Pondasi",
 "https://www.betonjayareadymix.com/p/jasa-pemadatan-pondasi.html": "Jasa Pemadatan Pondasi",
"https://www.betonjayareadymix.com/p/jasa-pondasi-tanah.html": "Jasa Pondasi Tanah",  
"https://www.betonjayareadymix.com/p/jasa-pondasi-bangunan.html": "Jasa Pondasi Bangunan", 
"https://www.betonjayareadymix.com/p/jasa-borongan-pondasi.html": "Jasa Borongan Pondasi"  
//"https://www.betonjayareadymix.com/p/borongan-pondasi.html": "Borongan Pondasi"
};
const urlMappingJasaBoronganPondasiFromMoneyMaster1MoneyPage = {
// MP (L5)
"https://www.betonjayareadymix.com/p/harga-jasa-borongan-pondasi.html": "Harga Jasa Borongan Pondasi"
};
const urlMappingJasaPondasiTanahFromMoneyMaster1MoneyPage = {

"https://www.betonjayareadymix.com/p/jasa-borongan-pondasi-tanah.html": "Jasa Borongan Pondasi Tanah",  // MP (L5)
"https://www.betonjayareadymix.com/p/harga-borongan-pondasi-tanah.html": "Harga Borongan Pondasi Tanah"
};
const urlMappingJasaPondasiBangunanFromMoneyMaster1MoneyPage = {
"https://www.betonjayareadymix.com/p/jasa-pondasi-bangunan-rumah.html": "Jasa Pondasi Bangunan Rumah"  // MP (L5)

};
const urlMappingJasaCakarAyamFromMoneyMaster1MoneyPage = {
"https://www.betonjayareadymix.com/p/jasa-pondasi-cakar-ayam.html": "Jasa Pondasi Cakar Ayam"  // MP
};
const urlMappingJasaPondasiCakarAyamFromMoneyPageMoneyPage1 = {
 "https://www.betonjayareadymix.com/p/harga-jasa-pondasi-cakar-ayam.html": "Harga Jasa Pondasi Cakar Ayam",  
  "https://www.betonjayareadymix.com/p/jasa-pondasi-cakar-ayam-per-meter.html": "Jasa Pondasi Cakar Ayam Per Meter"
};
const urlMappingHargaJasaPondasiCakarAyamFromMoneyPage1MoneyPage2 = {
 "https://www.betonjayareadymix.com/p/harga-jasa-pondasi-cakar-ayam-per-meter.html": "Jasa Pondasi Cakar Ayam Per Meter"
};
const urlMappingJasaPondasiTapakFromMoneyMaster1MoneyPage = {
 "https://www.betonjayareadymix.com/p/harga-jasa-pondasi-tapak.html": "Harga Jasa Pondasi Tapak",  
 "https://www.betonjayareadymix.com/p/jasa-pondasi-tapak-per-meter.html": "Jasa Pondasi Tapak Per Meter"
};
const urlMappingHargaJasaPondasiTapakFromMoneyPageMoneyPage1 = {
  "https://www.betonjayareadymix.com/p/harga-jasa-pondasi-tapak-per-meter.html": "Harga Jasa Pondasi Tapak Per Meter"
};

const urlMappingJasaTiangPancangFromMoneyMaster1MoneyPage = {
"https://www.betonjayareadymix.com/p/jasa-pondasi-tiang-pancang.html": "Jasa Pondasi Tiang Pancang"
};
const urlMappingJasaPondasiTiangPancangFromMoneyPageMoneyPage1 = {
"https://www.betonjayareadymix.com/p/harga-jasa-pondasi-tiang-pancang.html": "Harga Jasa Pondasi Tiang Pancang"
};

const urlMappingJasaPondasiSumuranFromMoneyMaster1MoneyPage = {
"https://www.betonjayareadymix.com/2019/08/harga-jasa-pondasi-sumuran.html": "Harga Jasa Pondasi Sumuran",  
"https://www.betonjayareadymix.com/2019/08/jasa-pondasi-sumuran-per-meter.html": "Jasa Pondasi Sumuran Per Meter"

};
const urlMappingJasaPemadatanPondasiFromMoneyMaster1MoneyPage = {
  "https://www.betonjayareadymix.com/p/jasa-pemadatan-pondasi-bangunan.html": "Jasa Pemadatan Pondasi Bangunan",  
 "https://www.betonjayareadymix.com/p/jasa-uji-kepadatan-tanah-pondasi.html": "Jasa Uji Kepadatan Tanah Pondasi"  
};
const urlMappingJasaPersiapanPondasiFromMoneyMaster1MoneyPage = {
  "https://www.betonjayareadymix.com/p/jasa-cut-and-fill-pondasi.html": "Jasa Cut and Fill Pondasi",  
  "https://www.betonjayareadymix.com/p/jasa-leveling-tanah-proyek-gedung.html": "Jasa Leveling Tanah Proyek Gedung",  
  "https://www.betonjayareadymix.com/p/jasa-pembersihan-lahan-konstruksi.html": "Jasa Pembersihan Lahan Konstruksi"  
};
const urlMappingJasaPerkuatanTanahFromMoneyMasterMoneyPage = {
  "https://www.betonjayareadymix.com/p/jasa-perkuatan-tanah-longsor.html": "Jasa Perkuatan Tanah Longsor" 
};
const urlMappingPerkuatanTanahLongsorFromMoneyPageMoneyPage1 = {
  "https://www.betonjayareadymix.com/p/jasa-bronjong-penahan-longsor.html": "Jasa Bronjong Penahan Longsor",  
  "https://www.betonjayareadymix.com/p/jasa-soil-nailing-tebing.html": "Jasa Soil Nailing Tebing",  
  "https://www.betonjayareadymix.com/p/jasa-dinding-penahan-tanah-longsor.html": "Jasa Dinding Penahan Tanah Longsor",  
  "https://www.betonjayareadymix.com/p/jasa-geotextile-perkuatan-lereng.html": "Jasa Geotextile Perkuatan Lereng",  
  "https://www.betonjayareadymix.com/p/jasa-sheet-pile-penahan-longsor.html": "Jasa Sheet Pile Penahan Longsor",  
  "https://www.betonjayareadymix.com/p/jasa-stabilisasi-tanah-labil.html": "Jasa Stabilisasi Tanah Labil",  
  "https://www.betonjayareadymix.com/p/jasa-perkuatan-tanah-longsor-rumah.html": "Jasa Perkuatan Tanah Longsor Rumah",  
  "https://www.betonjayareadymix.com/p/jasa-perkuatan-tebing-jalan.html": "Jasa Perkuatan Tebing Jalan",  
  "https://www.betonjayareadymix.com/p/jasa-perkuatan-longsor-perkebunan.html": "Jasa Perkuatan Longsor Perkebunan",  
  "https://www.betonjayareadymix.com/p/jasa-drainase-anti-longsor.html": "Jasa Drainase Anti Longsor"  
};

const urlMappingJasaPerkuatanTanahFromMoneyMasterMoneyMaster1 = {
 "https://www.betonjayareadymix.com/p/jasa-soil-improvement.html": "Jasa Soil Improvement",
 "https://www.betonjayareadymix.com/p/jasa-retrofitting-pondasi.html": "Jasa Retrofitting Pondasi",
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-tanah.html": "Jasa Perbaikan Tanah", 
  "https://www.betonjayareadymix.com/p/jasa-geotextile.html": "Jasa Geotextile", 
  "https://www.betonjayareadymix.com/p/jasa-stone-column.html": "Jasa Stone Column", 
  "https://www.betonjayareadymix.com/p/jasa-vertical-drain.html": "Jasa Vertical Drain",  
  "https://www.betonjayareadymix.com/p/jasa-soil-nailing.html": "Jasa Soil Nailing" 
};

const urlMappingJasaRetrofittingPondasiFromMoneyMaster1MoneyPage = {
  "https://www.betonjayareadymix.com/p/jasa-perkuatan-pondasi-bangunan-lama.html": "Jasa Perkuatan Pondasi Bangunan Lama",  
  "https://www.betonjayareadymix.com/p/jasa-pondasi-untuk-penurunan-tanah.html": "Jasa Pondasi Untuk Penurunan Tanah",  
  "https://www.betonjayareadymix.com/p/jasa-perbaikan-pondasi-penurunan-tanah.html": "Jasa Perbaikan Pondasi Penurunan Tanah",  

  // ============================================================
  "https://www.betonjayareadymix.com/p/retrofitting-pondasi-penambahan-lantai.html": "Retrofitting Pondasi Penambahan Lantai", 
  "https://www.betonjayareadymix.com/p/jasa-underpinning-pondasi-bangunan.html": "Jasa Underpinning Pondasi Bangunan",  
  "https://www.betonjayareadymix.com/p/jasa-grouting-pondasi-beton.html": "Jasa Grouting Pondasi Beton"  
};

// ============================================================
// 📁 LEVEL 5 - MONEY_PAGE (Harga Jasa) - BRIDGE antara SUB2 dan VARIANT
// 🧠 TYPE: MONEY_PAGE (Komersial 60% + Transaksional 40%)
// 🟡 STATUS: SEMUA URL BELUM AKTIF (404 atau perlu dibuat)
// ============================================================

const urlMappingHargaPondasiFromSub2MoneyPage = {
  // ============================================================
  // [MONEY_PAGE] - HARGA PONDASI CAKAR AYAM
  // 🟡 STATUS: PERLU DIBUAT KONTEN
  // ============================================================
  // "https://www.betonjayareadymix.com/2019/08/harga-pondasi-cakar-ayam.html": "Harga Pondasi Cakar Ayam",  
  
  // ============================================================
  // [MONEY_PAGE] - HARGA PONDASI TAPAK
  // ============================================================
  // "https://www.betonjayareadymix.com/2019/08/harga-pondasi-tapak.html": "Harga Pondasi Tapak",  
  
  // ============================================================
  // [MONEY_PAGE] - HARGA TIANG PANCANG
  // ============================================================
  // "https://www.betonjayareadymix.com/2019/08/harga-tiang-pancang.html": "Harga Tiang Pancang",  
  
  // ============================================================
  // [MONEY_PAGE] - HARGA PEMADATAN TANAH
  // ============================================================
  // "https://www.betonjayareadymix.com/2019/08/harga-pemadatan-tanah.html": "Harga Pemadatan Tanah",  
  
  // ============================================================
  // [MONEY_PAGE] - HARGA SOIL IMPROVEMENT
  // ============================================================
  // "https://www.betonjayareadymix.com/2019/08/harga-soil-improvement.html": "Harga Soil Improvement",  
  
  // ============================================================
  // [MONEY_PAGE] - HARGA STONE COLUMN
  // ============================================================
  // "https://www.betonjayareadymix.com/2019/08/harga-stone-column.html": "Harga Stone Column",  
  
  // ============================================================
  // [MONEY_PAGE] - HARGA RETROFITTING PONDASI
  // ⚠️ STATUS: URL 404 - PERLU DIBUAT KONTEN (jika diperlukan)
  // ============================================================
  // "https://www.betonjayareadymix.com/2019/08/harga-retrofitting-pondasi.html": "Harga Retrofitting Pondasi",   (URL 404)
  
  // ============================================================
  // [MONEY_PAGE] - HARGA UNDERPINNING PONDASI
  // ⚠️ STATUS: URL 404 - PERLU DIBUAT KONTEN (jika diperlukan)
  // ============================================================
  // "https://www.betonjayareadymix.com/2019/08/harga-underpinning-pondasi.html": "Harga Underpinning Pondasi",   (URL 404)
  
  // ============================================================
  // [MONEY_PAGE] - HARGA GROUTING PONDASI
  // ⚠️ STATUS: URL 404 - PERLU DIBUAT KONTEN (jika diperlukan)
  // ============================================================
  // "https://www.betonjayareadymix.com/2019/08/harga-grouting-pondasi.html": "Harga Grouting Pondasi",   (URL 404)
};

// ============================================================
// 📁 LEVEL 7 - VARIANT (Spesifikasi Teknis Detail)
// 🧠 TYPE: VARIANT (Komersial 80%)
// ⚠️ HANYA untuk halaman dengan SPESIFIKASI TEKNIS YANG SANGAT DETAIL
// Contoh: "Spesifikasi Pondasi Cakar Ayam untuk Rumah 2 Lantai" (VARIANT)
// ============================================================

const urlMappingPondasiVariantFromMoneyPageVariant = {
  // 🟡 SARAN ITEM VARIANT (jika diperlukan - BELUM AKTIF)
  // "https://www.betonjayareadymix.com/p/spesifikasi-pondasi-cakar-ayam-2-lantai.html": "Spesifikasi Pondasi Cakar Ayam untuk Rumah 2 Lantai",  // TYPE: VARIANT
  // "https://www.betonjayareadymix.com/p/metode-soil-improvement-vacuum-consolidation.html": "Metode Soil Improvement Vacuum Consolidation",  // TYPE: VARIANT
};

// ============================================================
// 🔴 BREADCRUMB YANG BENAR (SETELAH KOREKSI)
// ============================================================

/*
📌 BREADCRUMB UNTUK HALAMAN SUB2 (LEVEL 2)

Halaman: Jasa Pondasi & Perkuatan Tanah
Breadcrumb (3 level):
Home > Jasa Konstruksi > Jasa Pondasi & Perkuatan Tanah

📌 BREADCRUMB UNTUK HALAMAN SUB2 (LEVEL 3)

Halaman: Jasa Pondasi Cakar Ayam, Jasa Soil Improvement, dll
Breadcrumb (4 level):
Home > Jasa Konstruksi > Jasa Pondasi & Perkuatan Tanah > Jasa Pondasi Cakar Ayam

📌 BREADCRUMB UNTUK HALAMAN MONEY_PAGE (jika dibuat nanti)

Halaman: Harga Pondasi Cakar Ayam
Breadcrumb (4 level):
Home > Jasa Konstruksi > Jasa Pondasi & Perkuatan Tanah > Harga Pondasi Cakar Ayam

📌 BREADCRUMB UNTUK HALAMAN VARIANT (jika dibuat nanti)

Halaman: Spesifikasi Pondasi Cakar Ayam untuk Rumah 2 Lantai
Breadcrumb (5 level - skip MONEY_PAGE jika perlu):
Home > Jasa Konstruksi > Jasa Pondasi & Perkuatan Tanah > Jasa Pondasi Cakar Ayam > Spesifikasi Pondasi Cakar Ayam 2 Lantai
*/

// ============================================================
// 📋 RINGKASAN KOREKSI TYPE
// ============================================================

/*
SEBELUM (SALAH)                    | SESUDAH (BENAR)
------------------------------------|-------------------------------------
TYPE: VARIANT untuk semua halaman   | TYPE: SUB2 untuk konten edukasi
Parent: SUB2 (Level 2) → VARIANT    | Parent: SUB2 (Level 2) → SUB2 (Level 3)
Loncat 5 level                      | Turun 1 level (sesuai aturan)
MONEY_MASTER dalam saran item       | MONEY_PAGE dalam saran item (karena JASA)

✅ KESIMPULAN:
1. Semua halaman dengan konten INFORMASIONAL/EDUKASI → TYPE: SUB2
2. VARIANT hanya untuk SPESIFIKASI TEKNIS YANG SANGAT DETAIL
3. MONEY_PAGE untuk harga JASA (bukan MONEY_MASTER)
4. SUB2 → MONEY_PAGE → VARIANT (jika VARIANT diperlukan nanti)
*/

// ============================================================
// 🔴 STATUS KONTEN YANG PERLU DIPERHATIKAN
// ============================================================

/*
| URL | Status | Rekomendasi |
|-----|--------|--------------|
| /p/jasa-pondasi-cakar-ayam.html | AKTIF ✅ | SUB2 - sudah benar |
| /p/jasa-pondasi-tapak.html | AKTIF ✅ | SUB2 - sudah benar |
| /p/jasa-perkuatan-tanah.html | AKTIF ✅ | SUB2 - sudah benar |
| /p/jasa-soil-improvement.html | Perlu dicek ⚠️ | Pastikan konten cukup sebagai SUB2 |
| /p/retrofitting-pondasi-penambahan-lantai.html | Konten tipis ⚠️ | Perbaiki konten atau redirect |
| /p/jasa-underpinning-pondasi.html | Konten tipis ⚠️ | Perbaiki konten atau redirect |
| /p/jasa-grouting-pondasi.html | Konten tipis ⚠️ | Perbaiki konten atau redirect |
| /2019/08/harga-*.html | 404 ❌ | Buat konten MONEY_PAGE jika diperlukan |
*/


// Menyimpan elemen yang dihapus dalam variabel
let removedElementsJasapondasiPerkuatanTanahKons = {};
// Fungsi untuk menghapus elemen berdasarkan ID
function removeCondition(conditionId) {
    const conditionElement = document.getElementById(conditionId);

    if (conditionElement) {
        // Menyimpan elemen yang dihapus dalam objek untuk bisa dikembalikan
        removedElementsJasapondasiPerkuatanTanahKons[conditionId] = conditionElement;
        conditionElement.remove(); // Menghapus elemen tersebut
    }
}

// Fungsi untuk mengembalikan elemen yang telah dihapus
function restoreCondition(conditionId) {
    const breadcrumb = document.querySelector('.breadcrumb');
    const elementToRestore = removedElementsJasapondasiPerkuatanTanahKons[conditionId]; // Mendapatkan elemen yang disimpan

    if (elementToRestore) {
        breadcrumb.appendChild(elementToRestore); // Menambahkan elemen kembali ke dalam breadcrumb
        delete removedElementsJasapondasiPerkuatanTanahKons[conditionId]; // Menghapus elemen dari objek setelah dikembalikan
    } else {
        console.log(`Elemen dengan ID ${conditionId} tidak ditemukan di removedElementsJasapondasiPerkuatanTanahKons.`);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    // var currentUrl = window.location.href;
     //const cleanUrl = currentUrl.split('?')[0]; // Menghapus parameter seperti ?m=1
    const cleanUrlJasaPondasiPerkuatanTanahKons = window.location.href.split(/[?#]/)[0]; // Menghilangkan parameter seperti ?m=1

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
		urlMappingJasaPondasiBangunan,
		urlMappingJasaPemadatanPersiapanPondasi,
		urlMappingJasaPerkuatanTanah,
		urlMappingJasaRetrofittingPondasi
    );

    // --- validasi URL terdaftar ---
    if (!urlMappingGabungan[cleanUrlJasaPondasiPerkuatanTanahKons]) {
      console.log(`[HybridDateModified] URL tidak terdaftar: ${cleanUrlJasaPondasiPerkuatanTanahKons}`);
      return;
    }

  // === Tanggal nextUpdate1 global ===
		const globalNextUpdate1 = "2026-01-31T00:00:00.000Z";
	console.log(`🌐 [AutoMeta] Detected jasa-konstruksi-pondasi-perkuatan-tanah: ${cleanUrlJasaPondasiPerkuatanTanahKons}`);

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

    const hash = stableHash(cleanUrlJasaPondasiPerkuatanTanahKons);
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
	
	console.log("✅ AEDMetaDates updated jasa-konstruksi-pondasi-perkuatan-tanah:", window.AEDMetaDates);
    console.log(`✅ [HybridDateModified v2.5] ${cleanUrlJasaPondasiPerkuatanTanahKons} → ${isoDate} | type=${type || "-"}`);

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
		urlMappingJasaPerkuatanTanahFromMoneyMasterMoneyMaster1,
		urlMappingJasaRetrofittingPondasiFromMoneyMaster1MoneyPage,
		urlMappingJasaPerkuatanTanahFromMoneyMasterMoneyPage,
		urlMappingPerkuatanTanahLongsorFromMoneyPageMoneyPage1,
		urlMappingJasaPondasiFromMoneyMasterMoneyMaster1,
		urlMappingJasaBoronganPondasiFromMoneyMaster1MoneyPage,
		urlMappingJasaPondasiTanahFromMoneyMaster1MoneyPage,
		urlMappingJasaPondasiBangunanFromMoneyMaster1MoneyPage,
		urlMappingJasaCakarAyamFromMoneyMaster1MoneyPage,
		urlMappingJasaPondasiCakarAyamFromMoneyPageMoneyPage1,
		urlMappingHargaJasaPondasiCakarAyamFromMoneyPage1MoneyPage2,
		urlMappingJasaPondasiTapakFromMoneyMaster1MoneyPage,
		urlMappingHargaJasaPondasiTapakFromMoneyPageMoneyPage1,
		urlMappingJasaTiangPancangFromMoneyMaster1MoneyPage,
		urlMappingJasaPondasiTiangPancangFromMoneyPageMoneyPage1,
		
		urlMappingJasaPondasiSumuranFromMoneyMaster1MoneyPage,
		urlMappingJasaPemadatanPondasiFromMoneyMaster1MoneyPage,
		urlMappingJasaPersiapanPondasiFromMoneyMaster1MoneyPage
		
    );

    // --- validasi URL terdaftar ---
    if (!urlMappingGabungan[cleanUrlJasaPondasiPerkuatanTanahKons]) {
      console.log(`[HybridDateModified] URL tidak terdaftar: ${cleanUrlJasaPondasiPerkuatanTanahKons}`);
      return;
    }
	
     // Menemukan elemen menggunakan Id
    var JasaKonsPondasiTanah = document.getElementById("JasaKonsPondasiTanah");

    if (!JasaKonsPondasiTanah) {
        console.error("elemen Id JasaKonsPondasiTanah kondisi terhapus");
        return;
    }

     var JasaKonstruksiPondasiTanahSubLink = document.getElementById("JasaKonstruksiPondasiTanahSub");
     var JasaPondasiTanahSub = document.getElementById("JasaPondasiTanahSub");

     //SUB Jasa Pondasi Tanah
     var JasaPondasiBangunanSubLink = document.getElementById("JasaPondasiBangunanSub");
     var JasaPemadatanPersiapanPondasiSubLink = document.getElementById("JasaPemadatanPersiapanPondasiSub");
     var JasaPerkuatanTanahSubLink = document.getElementById("JasaPerkuatanTanahSub");
     var JasaRetrofittingPondasiSubLink = document.getElementById("JasaRetrofittingPondasiSub");

	
     var pageNameJasaKonsPondasiTanah = document.getElementById("pageNameJasaKonsPondasiTanah");
    

     // Default untuk menyembunyikan elemen
     JasaKonstruksiPondasiTanahSubLink.style.visibility = 'hidden';
     JasaPondasiTanahSub.style.visibility = 'hidden';
	
     //SUB JASA PEMBATAS
     JasaPondasiBangunanSubLink.style.visibility = 'hidden';
     JasaPemadatanPersiapanPondasiSubLink.style.visibility = 'hidden';
     JasaPerkuatanTanahSubLink.style.visibility = 'hidden';
     JasaRetrofittingPondasiSubLink.style.visibility = 'hidden';

     pageNameJasaKonsPondasiTanah.textContent = "";

	if (urlMappingJasaPerkuatanTanahFromMoneyMasterMoneyPage[cleanUrlJasaPondasiPerkuatanTanahKons]) {
        generateBreadcrumbShared(
        urlMappingJasaPerkuatanTanahFromMoneyMasterMoneyPage,
        cleanUrlJasaPondasiPerkuatanTanahKons,
        [
           // { name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
             { name: 'Daftar Jasa Perkuatan Tanah', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-perkuatan-tanah.html' },
			{ name: 'Perbandingan Jasa Perkuatan Tanah', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-perkuatan-tanah.html' },
			{ name: 'Jasa Perkuatan Tanah', url: 'https://www.betonjayareadymix.com/p/jasa-perkuatan-tanah.html' }
        ],
        'JASA_KONSTRUKSI'
    );
}
if (urlMappingPerkuatanTanahLongsorFromMoneyPageMoneyPage1[cleanUrlJasaPondasiPerkuatanTanahKons]) {
        generateBreadcrumbShared(
        urlMappingPerkuatanTanahLongsorFromMoneyPageMoneyPage1,
        cleanUrlJasaPondasiPerkuatanTanahKons,
        [
           // { name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
             { name: 'Daftar Jasa Perkuatan Tanah', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-perkuatan-tanah.html' },
			{ name: 'Perbandingan Jasa Perkuatan Tanah', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-perkuatan-tanah.html' },
			{ name: 'Jasa Perkuatan Tanah', url: 'https://www.betonjayareadymix.com/p/jasa-perkuatan-tanah.html' },
			{ name: 'Jasa Perkuatan Tanah Longsor', url: 'https://www.betonjayareadymix.com/p/jasa-perkuatan-tanah-longsor.html' }
        ],
        'JASA_KONSTRUKSI'
    );
}

if (urlMappingJasaPerkuatanTanahFromMoneyMasterMoneyMaster1[cleanUrlJasaPondasiPerkuatanTanahKons]) {
       generateBreadcrumbShared(
        urlMappingJasaPerkuatanTanahFromMoneyMasterMoneyMaster1,
        cleanUrlJasaPondasiPerkuatanTanahKons,
        [
           // { name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
             { name: 'Daftar Jasa Perkuatan Tanah', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-perkuatan-tanah.html' },
			{ name: 'Perbandingan Jasa Perkuatan Tanah', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-perkuatan-tanah.html' },
			{ name: 'Jasa Perkuatan Tanah', url: 'https://www.betonjayareadymix.com/p/jasa-perkuatan-tanah.html' }
        ],
        'JASA_KONSTRUKSI'
    );
    }
	  if (urlMappingJasaRetrofittingPondasiFromMoneyMaster1MoneyPage[cleanUrlJasaPondasiPerkuatanTanahKons]) {
        generateBreadcrumbShared(
        urlMappingJasaRetrofittingPondasiFromMoneyMaster1MoneyPage,
        cleanUrlJasaPondasiPerkuatanTanahKons,
        [
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
             { name: 'Daftar Jasa Perkuatan Tanah', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-perkuatan-tanah.html' },
			{ name: 'Perbandingan Jasa Perkuatan Tanah', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-perkuatan-tanah.html' },
			{ name: 'Jasa Perkuatan Tanah', url: 'https://www.betonjayareadymix.com/p/jasa-perkuatan-tanah.html' },
			{ name: 'Jasa Retrofitting Pondasi', url: 'https://www.betonjayareadymix.com/p/jasa-retrofitting-pondasi.html' }
        ],
        'JASA_KONSTRUKSI'
    );
    }

	
	if (urlMappingJasaPondasiFromMoneyMasterMoneyMaster1[cleanUrlJasaPondasiPerkuatanTanahKons]) {
        generateBreadcrumbShared(
        urlMappingJasaPondasiFromMoneyMasterMoneyMaster1,
        cleanUrlJasaPondasiPerkuatanTanahKons,
        [
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
             { name: 'Daftar Jasa Pondasi', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-pondasi.html' },
			{ name: 'Perbandingan Jasa Pondasi', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-pondasi.html' },
			{ name: 'Jasa Pondasi', url: 'https://www.betonjayareadymix.com/p/jasa-pondasi.html' }
        ],
        'JASA_KONSTRUKSI'
    );
}
if (urlMappingJasaBoronganPondasiFromMoneyMaster1MoneyPage[cleanUrlJasaPondasiPerkuatanTanahKons]) {
        generateBreadcrumbShared(
        urlMappingJasaBoronganPondasiFromMoneyMaster1MoneyPage,
        cleanUrlJasaPondasiPerkuatanTanahKons,
        [
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
             { name: 'Daftar Jasa Pondasi', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-pondasi.html' },
			{ name: 'Perbandingan Jasa Pondasi', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-pondasi.html' },
			{ name: 'Jasa Pondasi', url: 'https://www.betonjayareadymix.com/p/jasa-pondasi.html' },
			{ name: 'Jasa Borongan Pondasi', url: 'https://www.betonjayareadymix.com/p/jasa-borongan-pondasi.html' }
        ],
        'JASA_KONSTRUKSI'
    );

}
if (urlMappingJasaPondasiTanahFromMoneyMaster1MoneyPage[cleanUrlJasaPondasiPerkuatanTanahKons]) {
        generateBreadcrumbShared(
        urlMappingJasaPondasiTanahFromMoneyMaster1MoneyPage,
        cleanUrlJasaPondasiPerkuatanTanahKons,
        [
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
             { name: 'Daftar Jasa Pondasi', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-pondasi.html' },
			{ name: 'Perbandingan Jasa Pondasi', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-pondasi.html' },
			{ name: 'Jasa Pondasi', url: 'https://www.betonjayareadymix.com/p/jasa-pondasi.html' },
			{ name: 'Jasa Pondasi Tanah', url: 'https://www.betonjayareadymix.com/p/jasa-pondasi-tanah.html' }
        ],
        'JASA_KONSTRUKSI'
    );
}
if (urlMappingJasaPondasiBangunanFromMoneyMaster1MoneyPage[cleanUrlJasaPondasiPerkuatanTanahKons]) {
        generateBreadcrumbShared(
        urlMappingJasaPondasiBangunanFromMoneyMaster1MoneyPage,
        cleanUrlJasaPondasiPerkuatanTanahKons,
        [
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
             { name: 'Daftar Jasa Pondasi', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-pondasi.html' },
			{ name: 'Perbandingan Jasa Pondasi', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-pondasi.html' },
			{ name: 'Jasa Pondasi', url: 'https://www.betonjayareadymix.com/p/jasa-pondasi.html' },
			{ name: 'Jasa Pondasi Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-pondasi-bangunan.html' }
        ],
        'JASA_KONSTRUKSI'
    );
}
if (urlMappingJasaCakarAyamFromMoneyMaster1MoneyPage[cleanUrlJasaPondasiPerkuatanTanahKons]) {
        generateBreadcrumbShared(
        urlMappingJasaCakarAyamFromMoneyMaster1MoneyPage,
        cleanUrlJasaPondasiPerkuatanTanahKons,
        [
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
             { name: 'Daftar Jasa Pondasi', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-pondasi.html' },
			{ name: 'Perbandingan Jasa Pondasi', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-pondasi.html' },
			{ name: 'Jasa Pondasi', url: 'https://www.betonjayareadymix.com/p/jasa-pondasi.html' },
			{ name: 'Jasa Cakar Ayam', url: 'https://www.betonjayareadymix.com/p/jasa-cakar-ayam.html' }
        ],
        'JASA_KONSTRUKSI'
    );
}
if (urlMappingJasaPondasiCakarAyamFromMoneyPageMoneyPage1[cleanUrlJasaPondasiPerkuatanTanahKons]) {
        generateBreadcrumbShared(
        urlMappingJasaPondasiCakarAyamFromMoneyPageMoneyPage1,
        cleanUrlJasaPondasiPerkuatanTanahKons,
        [
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
             { name: 'Daftar Jasa Pondasi', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-pondasi.html' },
			{ name: 'Perbandingan Jasa Pondasi', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-pondasi.html' },
			{ name: 'Jasa Pondasi', url: 'https://www.betonjayareadymix.com/p/jasa-pondasi.html' },
			{ name: 'Jasa Cakar Ayam', url: 'https://www.betonjayareadymix.com/p/jasa-cakar-ayam.html' },
			{ name: 'Jasa Pondasi Cakar Ayam', url: 'https://www.betonjayareadymix.com/p/jasa-pondasi-cakar-ayam.html' }
        ],
        'JASA_KONSTRUKSI'
    );
}
if (urlMappingHargaJasaPondasiCakarAyamFromMoneyPage1MoneyPage2[cleanUrlJasaPondasiPerkuatanTanahKons]) {
        generateBreadcrumbShared(
        urlMappingHargaJasaPondasiCakarAyamFromMoneyPage1MoneyPage2,
        cleanUrlJasaPondasiPerkuatanTanahKons,
        [
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
             { name: 'Daftar Jasa Pondasi', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-pondasi.html' },
			{ name: 'Perbandingan Jasa Pondasi', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-pondasi.html' },
			{ name: 'Jasa Pondasi', url: 'https://www.betonjayareadymix.com/p/jasa-pondasi.html' },
			{ name: 'Jasa Cakar Ayam', url: 'https://www.betonjayareadymix.com/p/jasa-cakar-ayam.html' },
			{ name: 'Jasa Pondasi Cakar Ayam', url: 'https://www.betonjayareadymix.com/p/jasa-pondasi-cakar-ayam.html' },
			{ name: 'Harga Jasa Pondasi Cakar Ayam', url: 'https://www.betonjayareadymix.com/p/harga-jasa-pondasi-cakar-ayam.html' }
        ],
        'JASA_KONSTRUKSI'
    );
}
	
	
if (urlMappingJasaPondasiTapakFromMoneyMaster1MoneyPage[cleanUrlJasaPondasiPerkuatanTanahKons]) {
        generateBreadcrumbShared(
        urlMappingJasaPondasiTapakFromMoneyMaster1MoneyPage,
        cleanUrlJasaPondasiPerkuatanTanahKons,
        [
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
             { name: 'Daftar Jasa Pondasi', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-pondasi.html' },
			{ name: 'Perbandingan Jasa Pondasi', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-pondasi.html' },
			{ name: 'Jasa Pondasi', url: 'https://www.betonjayareadymix.com/p/jasa-pondasi.html' },
			{ name: 'Jasa Pondasi Tapak', url: 'https://www.betonjayareadymix.com/p/jasa-pondasi-tapak.html' }
        ],
        'JASA_KONSTRUKSI'
    );
}	
if (urlMappingHargaJasaPondasiTapakFromMoneyPageMoneyPage1[cleanUrlJasaPondasiPerkuatanTanahKons]) {
        generateBreadcrumbShared(
        urlMappingHargaJasaPondasiTapakFromMoneyPageMoneyPage1,
        cleanUrlJasaPondasiPerkuatanTanahKons,
        [
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
             { name: 'Daftar Jasa Pondasi', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-pondasi.html' },
			{ name: 'Perbandingan Jasa Pondasi', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-pondasi.html' },
			{ name: 'Jasa Pondasi', url: 'https://www.betonjayareadymix.com/p/jasa-pondasi.html' },
			{ name: 'Jasa Pondasi Tapak', url: 'https://www.betonjayareadymix.com/p/jasa-pondasi-tapak.html' },
			{ name: 'Harga Jasa Pondasi Tapak', url: 'https://www.betonjayareadymix.com/p/harga-jasa-pondasi-tapak.html' }
        ],
        'JASA_KONSTRUKSI'
    );
}
if (urlMappingJasaTiangPancangFromMoneyMaster1MoneyPage[cleanUrlJasaPondasiPerkuatanTanahKons]) {
        generateBreadcrumbShared(
        urlMappingJasaTiangPancangFromMoneyMaster1MoneyPage,
        cleanUrlJasaPondasiPerkuatanTanahKons,
        [
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
             { name: 'Daftar Jasa Pondasi', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-pondasi.html' },
			{ name: 'Perbandingan Jasa Pondasi', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-pondasi.html' },
			{ name: 'Jasa Pondasi', url: 'https://www.betonjayareadymix.com/p/jasa-pondasi.html' },
			{ name: 'Jasa Tiang Pancang', url: 'https://www.betonjayareadymix.com/p/jasa-tiang-pancang.html' }
        ],
        'JASA_KONSTRUKSI'
    );
}
if (urlMappingJasaPondasiTiangPancangFromMoneyPageMoneyPage1[cleanUrlJasaPondasiPerkuatanTanahKons]) {
        generateBreadcrumbShared(
        urlMappingJasaPondasiTiangPancangFromMoneyPageMoneyPage1,
        cleanUrlJasaPondasiPerkuatanTanahKons,
        [
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
             { name: 'Daftar Jasa Pondasi', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-pondasi.html' },
			{ name: 'Perbandingan Jasa Pondasi', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-pondasi.html' },
			{ name: 'Jasa Pondasi', url: 'https://www.betonjayareadymix.com/p/jasa-pondasi.html' },
			{ name: 'Jasa Tiang Pancang', url: 'https://www.betonjayareadymix.com/p/jasa-tiang-pancang.html' },
			{ name: 'Jasa Pondasi Tiang Pancang', url: 'https://www.betonjayareadymix.com/p/jasa-pondasi-tiang-pancang.html' }
        ],
        'JASA_KONSTRUKSI'
    );
}
	
if (urlMappingJasaPondasiSumuranFromMoneyMaster1MoneyPage[cleanUrlJasaPondasiPerkuatanTanahKons]) {
        generateBreadcrumbShared(
        urlMappingJasaPondasiSumuranFromMoneyMaster1MoneyPage,
        cleanUrlJasaPondasiPerkuatanTanahKons,
        [
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
             { name: 'Daftar Jasa Pondasi', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-pondasi.html' },
			{ name: 'Perbandingan Jasa Pondasi', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-pondasi.html' },
			{ name: 'Jasa Pondasi', url: 'https://www.betonjayareadymix.com/p/jasa-pondasi.html' },
			{ name: 'Jasa Pondasi Sumuran', url: 'https://www.betonjayareadymix.com/p/jasa-pondasi-sumuran.html' }
        ],
        'JASA_KONSTRUKSI'
    );
}
   if (urlMappingJasaPemadatanPondasiFromMoneyMaster1MoneyPage[cleanUrlJasaPondasiPerkuatanTanahKons]) {
	     generateBreadcrumbShared(
        urlMappingJasaPemadatanPondasiFromMoneyMaster1MoneyPage,
        cleanUrlJasaPondasiPerkuatanTanahKons,
        [
           { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
             { name: 'Daftar Jasa Pondasi', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-pondasi.html' },
			{ name: 'Perbandingan Jasa Pondasi', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-pondasi.html' },
			{ name: 'Jasa Pondasi', url: 'https://www.betonjayareadymix.com/p/jasa-pondasi.html' },
			{ name: 'Jasa Pemadatan Pondasi', url: 'https://www.betonjayareadymix.com/p/jasa-pemadatan-pondasi.html' }
        ],
        'JASA_KONSTRUKSI'
    );
    }
if (urlMappingJasaPersiapanPondasiFromMoneyMaster1MoneyPage[cleanUrlJasaPondasiPerkuatanTanahKons]) {
        generateBreadcrumbShared(
        urlMappingJasaPersiapanPondasiFromMoneyMaster1MoneyPage,
        cleanUrlJasaPondasiPerkuatanTanahKons,
        [
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
             { name: 'Daftar Jasa Pondasi', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-pondasi.html' },
			{ name: 'Perbandingan Jasa Pondasi', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-pondasi.html' },
			{ name: 'Jasa Pondasi', url: 'https://www.betonjayareadymix.com/p/jasa-pondasi.html' },
			{ name: 'Jasa Persiapan Pondasi', url: 'https://www.betonjayareadymix.com/p/jasa-persiapan-pondasi.html' }
        ],
        'JASA_KONSTRUKSI'
    );
}
   
   });
