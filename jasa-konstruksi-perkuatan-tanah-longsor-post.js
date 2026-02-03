// sub jasa-perkuatan-tanah-longsor-post
const urlMappingJasaBronjong = {


};

const urlMappingJasaSoilNailingLongsor = {


};

const urlMappingJasaDindingPenahanLongsor = {

};

const urlMappingJasaGeotextileLongsor = {



};

const urlMappingJasaSheetPileLongsor = {



};

const urlMappingJasaStabilisasiLongsor = {



};

const urlMappingJasaPerkuatanRumahLongsor = {



};

const urlMappingJasaPerkuatanTebingLongsor = {



};

const urlMappingJasaPerkuatanPerkebunanLongsor  = {



};


const urlMappingJasaDrainaseAntiLongsor  = {



};


// Menyimpan elemen yang dihapus dalam variabel
let removedElementsPerkuatanTanahLongsorKonsPost = {};
// Fungsi untuk menghapus elemen berdasarkan ID
function removeCondition(conditionId) {
    const conditionElement = document.getElementById(conditionId);

    if (conditionElement) {
        // Menyimpan elemen yang dihapus dalam objek untuk bisa dikembalikan
        removedElementsPerkuatanTanahLongsorKonsPost[conditionId] = conditionElement;
        conditionElement.remove(); // Menghapus elemen tersebut
    }
}

// Fungsi untuk mengembalikan elemen yang telah dihapus
function restoreCondition(conditionId) {
    const breadcrumb = document.querySelector('.breadcrumb');
    const elementToRestore = removedElementsPerkuatanTanahLongsorKonsPost[conditionId]; // Mendapatkan elemen yang disimpan

    if (elementToRestore) {
        breadcrumb.appendChild(elementToRestore); // Menambahkan elemen kembali ke dalam breadcrumb
        delete removedElementsPerkuatanTanahLongsorKonsPost[conditionId]; // Menghapus elemen dari objek setelah dikembalikan
    } else {
        console.log(`Elemen dengan ID ${conditionId} tidak ditemukan di removedElementsPerkuatanTanahLongsorKonsPost.`);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    // var currentUrl = window.location.href;
     //const cleanUrl = currentUrl.split('?')[0]; // Menghapus parameter seperti ?m=1
    const cleanUrlJasaPerkuatanTanahLongsorKonsPost = window.location.href.split(/[?#]/)[0]; // Menghilangkan parameter seperti ?m=1

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
		urlMappingJasaBronjong,
		urlMappingJasaSoilNailingLongsor,
		urlMappingJasaDindingPenahanLongsor,
		urlMappingJasaGeotextileLongsor,
		urlMappingJasaSheetPileLongsor,
		urlMappingJasaStabilisasiLongsor,
		urlMappingJasaPerkuatanRumahLongsor,
		urlMappingJasaPerkuatanTebingLongsor,
		urlMappingJasaPerkuatanPerkebunanLongsor,
		urlMappingJasaDrainaseAntiLongsor		
    );

    // --- validasi URL terdaftar ---
    if (!urlMappingGabungan[cleanUrlJasaPerkuatanTanahLongsorKonsPost]) {
      console.log(`[HybridDateModified] URL tidak terdaftar: ${cleanUrlJasaPerkuatanTanahLongsorKonsPost}`);
      return;
    }

  // === Tanggal nextUpdate1 global ===
		const globalNextUpdate1 = "2026-02-09T00:00:00.000Z";
	console.log(`🌐 [AutoMeta] Detected jasa-konstruksi: ${cleanUrlJasaPerkuatanTanahLongsorKonsPost}`);

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

    const hash = stableHash(cleanUrlJasaPerkuatanTanahLongsorKonsPost);
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
	
	console.log("✅ AEDMetaDates updated jasa-konstruksi-perkuatan-tanah-longsor-post:", window.AEDMetaDates);
    console.log(`✅ [HybridDateModified v2.5] ${cleanUrlJasaPerkuatanTanahLongsorKonsPost} → ${isoDate} | type=${type || "-"}`);

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
		urlMappingJasaBronjong,
		urlMappingJasaSoilNailingLongsor,
		urlMappingJasaDindingPenahanLongsor,
		urlMappingJasaGeotextileLongsor,
		urlMappingJasaSheetPileLongsor,
		urlMappingJasaStabilisasiLongsor,
		urlMappingJasaPerkuatanRumahLongsor,
		urlMappingJasaPerkuatanTebingLongsor,
		urlMappingJasaPerkuatanPerkebunanLongsor,
		urlMappingJasaDrainaseAntiLongsor		
    );

    // --- validasi URL terdaftar ---
    if (!urlMappingGabungan[cleanUrlJasaPerkuatanTanahLongsorKonsPost]) {
      console.log(`[HybridDateModified] URL tidak terdaftar: ${cleanUrlJasaPerkuatanTanahLongsorKonsPost}`);
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
		    await loadEvergreenScript("2026-01-20T10:30:00+07:00");
		
		    // ✔ AUTO MODE
		    // await loadEvergreenScript();
		
		  } catch (err) {
		    console.error("[HybridDateModified] Fatal:", err);
		  }
		})();
	
     // Menemukan elemen menggunakan Id
    var JasaKonsPerkuatanTanahLongsorPost = document.getElementById("JasaKonsPerkuatanTanahLongsorPost");

    if (!JasaKonsPerkuatanTanahLongsorPost) {
        console.error("elemen Id JasaKonsPerkuatanTanahLongsorPost kondisi terhapus");
        return;
    }


     var JasaKonstruksiPerkuatanTanahLongsorSubPostLink = document.getElementById("JasaKonstruksiPerkuatanTanahLongsorSubPost");
     var JasaPerkuatanTanahLongsorPostLink = document.getElementById("JasaPerkuatanTanahLongsorPost");

     //SUB JasaPerkuatanTanahLongsor
     var JasaBronjongPenahanLongsorPostLink = document.getElementById("JasaBronjongPenahanLongsorPost");
     var JasaSoilNailingTebingPostLink = document.getElementById("JasaSoilNailingTebingPost");
     var JasaDindingPenahanTanahLongsorPostLink = document.getElementById("JasaDindingPenahanTanahLongsorPost");
     var JasaGeotextilePerkuatanLerengPostLink = document.getElementById("JasaGeotextilePerkuatanLerengPost");
     var JasaSheetPilePenahanLongsorPostLink = document.getElementById("JasaSheetPilePenahanLongsorPost");
     var JasaStabilisasiTanahLabilPostLink = document.getElementById("JasaStabilisasiTanahLabilPost");
     var JasaPerkuatanTanahLongsorRumahPostLink = document.getElementById("JasaPerkuatanTanahLongsorRumahPost");
     var JasaPerkuatanTebingJalanPostLink = document.getElementById("JasaPerkuatanTebingJalanPost");
     var JasaPerkuatanLongsorPerkebunanPostLink = document.getElementById("JasaPerkuatanLongsorPerkebunanPost");
     var JasaDrainaseAntiLongsorPostLink = document.getElementById("JasaDrainaseAntiLongsorPost");

	
     var pageNameJasaKonsPerkuatanTanahLongsorPost = document.getElementById("pageNameJasaKonsPerkuatanTanahLongsorPost");
    

     // Default untuk menyembunyikan elemen
     JasaKonstruksiPerkuatanTanahLongsorSubPostLink.style.visibility = 'hidden';
     JasaPerkuatanTanahLongsorPostLink.style.visibility = 'hidden';
	
     //SUB JASA PERKUATAN TANAH LONGSOR
     JasaBronjongPenahanLongsorPostLink.style.visibility = 'hidden';
     JasaSoilNailingTebingPostLink.style.visibility = 'hidden';
     JasaDindingPenahanTanahLongsorPostLink.style.visibility = 'hidden';
     JasaGeotextilePerkuatanLerengPostLink.style.visibility = 'hidden';
     JasaSheetPilePenahanLongsorPostLink.style.visibility = 'hidden';
     JasaStabilisasiTanahLabilPostLink.style.visibility = 'hidden';
     JasaPerkuatanTanahLongsorRumahPostLink.style.visibility = 'hidden';
     JasaPerkuatanTebingJalanPostLink.style.visibility = 'hidden';
     JasaPerkuatanLongsorPerkebunanPostLink.style.visibility = 'hidden';
     JasaDrainaseAntiLongsorPostLink.style.visibility = 'hidden';

     pageNameJasaKonsPerkuatanTanahLongsorPost.textContent = "";

if (urlMappingJasaBronjong[cleanUrlJasaPerkuatanTanahLongsorKonsPost]) {
        restoreCondition('JasaKonsPerkuatanTanahLongsorPost');
        restoreCondition('JasaBronjongPenahanLongsorPost');
/*
	    JasaKonsPerkuatanTanahLongsor
JasaKonstruksiPerkuatanTanahLongsorSubPost
JasaPerkuatanTanahLongsorPost

*/
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
        removeCondition('JasaKonsPondasiTanahPost');
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
        removeCondition('JasaKonsPembatasPost');
        removeCondition('JasaKonsPondasiTanahPost');
*/

        //hapus elemen SUB jasa pembatas lain
        removeCondition('JasaSoilNailingTebingPost');
        removeCondition('JasaDindingPenahanTanahLongsorPost');
        removeCondition('JasaGeotextilePerkuatanLerengPost');
        removeCondition('JasaSheetPilePenahanLongsorPost');
        removeCondition('JasaStabilisasiTanahLabilPost');
        removeCondition('JasaPerkuatanTanahLongsorRumahPost');
        removeCondition('JasaPerkuatanTebingJalanPost');
        removeCondition('JasaPerkuatanLongsorPerkebunanPost');
        removeCondition('JasaDrainaseAntiLongsorPost');
/*
JasaBronjongPenahanLongsorPost
JasaSoilNailingTebingPost
JasaDindingPenahanTanahLongsorPost
JasaGeotextilePerkuatanLerengPost
JasaSheetPilePenahanLongsorPost
JasaStabilisasiTanahLabilPost
JasaPerkuatanTanahLongsorRumahPost
JasaPerkuatanTebingJalanPost
JasaPerkuatanLongsorPerkebunanPost
JasaDrainaseAntiLongsorPost
*/
        JasaKonstruksiPerkuatanTanahLongsorSubPostLink.style.visibility = 'visible';
        JasaPerkuatanTanahLongsorPostLink.style.visibility = 'visible';
	
        JasaBronjongPenahanLongsorPostLink.style.visibility = 'visible';
        pageNameJasaKonsPerkuatanTanahLongsorPost.textContent = urlMappingJasaBronjong[cleanUrlJasaPerkuatanTanahLongsorKonsPost];
    }
// ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaBronjong[cleanUrlJasaPerkuatanTanahLongsorKonsPost]) {
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
                   "name": "Jasa Perkuatan Tanah Longsor",
                   "item": "https://www.betonjayareadymix.com/p/jasa-perkuatan-tanah-longsor.html"
               },
               {
                   "@type": "ListItem",
                   "position": 4,
                   "name": "Jasa Bronjong Penahan Longsor",
                   "item": "https://www.betonjayareadymix.com/p/jasa-bronjong-penahan-longsor.html"
               },
               {
                   "@type": "ListItem",
                   "position": 5,
                   "name": urlMappingJasaBronjong[cleanUrlJasaPerkuatanTanahLongsorKonsPost],
                   "item": cleanUrlJasaPerkuatanTanahLongsorKonsPost
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
if (urlMappingJasaSoilNailingLongsor[cleanUrlJasaPerkuatanTanahLongsorKonsPost]) {
        restoreCondition('JasaKonsPerkuatanTanahLongsorPost');
        restoreCondition('JasaSoilNailingTebingPost');

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
        removeCondition('JasaKonsPondasiTanahPost');
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
        removeCondition('JasaBronjongPenahanLongsorPost');
        removeCondition('JasaDindingPenahanTanahLongsorPost');
        removeCondition('JasaGeotextilePerkuatanLerengPost');
        removeCondition('JasaSheetPilePenahanLongsorPost');
        removeCondition('JasaStabilisasiTanahLabilPost');
        removeCondition('JasaPerkuatanTanahLongsorRumahPost');
        removeCondition('JasaPerkuatanTebingJalanPost');
        removeCondition('JasaPerkuatanLongsorPerkebunanPost');
        removeCondition('JasaDrainaseAntiLongsorPost');

        JasaKonstruksiPerkuatanTanahLongsorSubPostLink.style.visibility = 'visible';
        JasaPerkuatanTanahLongsorPostLink.style.visibility = 'visible';
	
        JasaSoilNailingTebingPostLink.style.visibility = 'visible';
        pageNameJasaKonsPerkuatanTanahLongsorPost.textContent = urlMappingJasaSoilNailingLongsor[cleanUrlJasaPerkuatanTanahLongsorKonsPost];
    }
// ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaSoilNailingLongsor[cleanUrlJasaPerkuatanTanahLongsorKonsPost]) {
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
                   "name": "Jasa Perkuatan Tanah Longsor",
                   "item": "https://www.betonjayareadymix.com/p/jasa-perkuatan-tanah-longsor.html"
               },
               {
                   "@type": "ListItem",
                   "position": 4,
                   "name": "Jasa Soil Nailing Tebing",
                   "item": "https://www.betonjayareadymix.com/p/jasa-soil-nailing-tebing.html"
               },
               {
                   "@type": "ListItem",
                   "position": 5,
                   "name": urlMappingJasaSoilNailingLongsor[cleanUrlJasaPerkuatanTanahLongsorKonsPost],
                   "item": cleanUrlJasaPerkuatanTanahLongsorKonsPost
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }

   if (urlMappingJasaDindingPenahanLongsor[cleanUrlJasaPerkuatanTanahLongsorKonsPost]) {
        restoreCondition('JasaKonsPerkuatanTanahLongsorPost');
        restoreCondition('JasaDindingPenahanTanahLongsorPost');

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
        removeCondition('JasaKonsPondasiTanahPost');
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
        removeCondition('JasaSoilNailingTebingPost');
        removeCondition('JasaBronjongPenahanLongsorPost');
        removeCondition('JasaGeotextilePerkuatanLerengPost');
        removeCondition('JasaSheetPilePenahanLongsorPost');
        removeCondition('JasaStabilisasiTanahLabilPost');
        removeCondition('JasaPerkuatanTanahLongsorRumahPost');
        removeCondition('JasaPerkuatanTebingJalanPost');
        removeCondition('JasaPerkuatanLongsorPerkebunanPost');
        removeCondition('JasaDrainaseAntiLongsorPost');

        JasaKonstruksiPerkuatanTanahLongsorSubPostLink.style.visibility = 'visible';
        JasaPerkuatanTanahLongsorPostLink.style.visibility = 'visible';
	
        JasaDindingPenahanTanahLongsorPostLink.style.visibility = 'visible';
	pageNameJasaKonsPerkuatanTanahLongsorPost.textContent = urlMappingJasaDindingPenahanLongsor[cleanUrlJasaPerkuatanTanahLongsorKonsPost];
    }

// ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaDindingPenahanLongsor[cleanUrlJasaPerkuatanTanahLongsorKonsPost]) {
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
                   "name": "Jasa Perkuatan Tanah Longsor",
                   "item": "https://www.betonjayareadymix.com/p/jasa-perkuatan-tanah-longsor.html"
               },
               {
                   "@type": "ListItem",
                   "position": 4,
                   "name": "Jasa Dinding Penahan Longsor",
                   "item": "https://www.betonjayareadymix.com/p/jasa-dinding-penahan-tanah-longsor.html"
               },
               {
                   "@type": "ListItem",
                   "position": 5,
                   "name": urlMappingJasaDindingPenahanLongsor[cleanUrlJasaPerkuatanTanahLongsorKonsPost],
                   "item": cleanUrlJasaPerkuatanTanahLongsorKonsPost
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
    if (urlMappingJasaGeotextileLongsor[cleanUrlJasaPerkuatanTanahLongsorKonsPost]) {
        restoreCondition('JasaKonsPerkuatanTanahLongsorPost');
        restoreCondition('JasaGeotextilePerkuatanLerengPost');

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
        removeCondition('JasaKonsPondasiTanahPost');
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
        removeCondition('JasaSoilNailingTebingPost');
        removeCondition('JasaDindingPenahanTanahLongsorPost');
        removeCondition('JasaBronjongPenahanLongsorPost');
        removeCondition('JasaSheetPilePenahanLongsorPost');
        removeCondition('JasaStabilisasiTanahLabilPost');
        removeCondition('JasaPerkuatanTanahLongsorRumahPost');
        removeCondition('JasaPerkuatanTebingJalanPost');
        removeCondition('JasaPerkuatanLongsorPerkebunanPost');
        removeCondition('JasaDrainaseAntiLongsorPost');

        JasaKonstruksiPerkuatanTanahLongsorSubPostLink.style.visibility = 'visible';
        JasaPerkuatanTanahLongsorPostLink.style.visibility = 'visible';
	
        JasaGeotextilePerkuatanLerengPostLink.style.visibility = 'visible';
        pageNameJasaKonsPerkuatanTanahLongsorPost.textContent = urlMappingJasaGeotextileLongsor[cleanUrlJasaPerkuatanTanahLongsorKonsPost];
    }
// ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaGeotextileLongsor[cleanUrlJasaPerkuatanTanahLongsorKonsPost]) {
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
                   "name": "Jasa Perkuatan Tanah Longsor",
                   "item": "https://www.betonjayareadymix.com/p/jasa-perkuatan-tanah-longsor.html"
               },
               {
                   "@type": "ListItem",
                   "position": 4,
                   "name": "Jasa Geotextile Perkuatan Lereng",
                   "item": "https://www.betonjayareadymix.com/p/jasa-geotextile-perkuatan-lereng.html"
               },
               {
                   "@type": "ListItem",
                   "position": 5,
                   "name": urlMappingJasaGeotextileLongsor[cleanUrlJasaPerkuatanTanahLongsorKonsPost],
                   "item": cleanUrlJasaPerkuatanTanahLongsorKonsPost
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
if (urlMappingJasaSheetPileLongsor[cleanUrlJasaPerkuatanTanahLongsorKonsPost]) {
        restoreCondition('JasaKonsPerkuatanTanahLongsorPost');
        restoreCondition('JasaSheetPilePenahanLongsorPost');

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
        removeCondition('JasaKonsPondasiTanahPost');
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
        removeCondition('JasaSoilNailingTebingPost');
        removeCondition('JasaDindingPenahanTanahLongsorPost');
        removeCondition('JasaGeotextilePerkuatanLerengPost');
        removeCondition('JasaBronjongPenahanLongsorPost');
        removeCondition('JasaStabilisasiTanahLabilPost');
        removeCondition('JasaPerkuatanTanahLongsorRumahPost');
        removeCondition('JasaPerkuatanTebingJalanPost');
        removeCondition('JasaPerkuatanLongsorPerkebunanPost');
        removeCondition('JasaDrainaseAntiLongsorPost');

        JasaKonstruksiPerkuatanTanahLongsorSubPostLink.style.visibility = 'visible';
        JasaPerkuatanTanahLongsorPostLink.style.visibility = 'visible';
	
        JasaSheetPilePenahanLongsorPostLink.style.visibility = 'visible';
        pageNameJasaKonsPerkuatanTanahLongsorPost.textContent = urlMappingJasaSheetPileLongsor[cleanUrlJasaPerkuatanTanahLongsorKonsPost];
    }

// ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaSheetPileLongsor[cleanUrlJasaPerkuatanTanahLongsorKonsPost]) {
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
                   "name": "Jasa Perkuatan Tanah Longsor",
                   "item": "https://www.betonjayareadymix.com/p/jasa-perkuatan-tanah-longsor.html"
               },
               {
                   "@type": "ListItem",
                   "position": 4,
                   "name": "Jasa Sheet Pile Penahan Longsor",
                   "item": "https://www.betonjayareadymix.com/p/jasa-sheet-pile-penahan-longsor.html"
               },
               {
                   "@type": "ListItem",
                   "position": 5,
                   "name": urlMappingJasaSheetPileLongsor[cleanUrlJasaPerkuatanTanahLongsorKonsPost],
                   "item": cleanUrlJasaPerkuatanTanahLongsorKonsPost
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
if (urlMappingJasaStabilisasiLongsor[cleanUrlJasaPerkuatanTanahLongsorKonsPost]) {
        restoreCondition('JasaKonsPerkuatanTanahLongsorPost');
        restoreCondition('JasaStabilisasiTanahLabilPost');

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
        removeCondition('JasaKonsPondasiTanahPost');
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
        removeCondition('JasaSoilNailingTebingPost');
        removeCondition('JasaDindingPenahanTanahLongsorPost');
        removeCondition('JasaGeotextilePerkuatanLerengPost');
        removeCondition('JasaSheetPilePenahanLongsorPost');
        removeCondition('JasaBronjongPenahanLongsorPost');
        removeCondition('JasaPerkuatanTanahLongsorRumahPost');
        removeCondition('JasaPerkuatanTebingJalanPost');
        removeCondition('JasaPerkuatanLongsorPerkebunanPost');
        removeCondition('JasaDrainaseAntiLongsorPost');

        JasaKonstruksiPerkuatanTanahLongsorSubPostLink.style.visibility = 'visible';
        JasaPerkuatanTanahLongsorPostLink.style.visibility = 'visible';
	
        JasaStabilisasiTanahLabilPostPostLink.style.visibility = 'visible';
        pageNameJasaKonsPerkuatanTanahLongsorPost.textContent = urlMappingJasaStabilisasiLongsor[cleanUrlJasaPerkuatanTanahLongsorKonsPost];
    }
// ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaStabilisasiLongsor[cleanUrlJasaPerkuatanTanahLongsorKonsPost]) {
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
                   "name": "Jasa Perkuatan Tanah Longsor",
                   "item": "https://www.betonjayareadymix.com/p/jasa-perkuatan-tanah-longsor.html"
               },
               {
                   "@type": "ListItem",
                   "position": 4,
                   "name": "Jasa Stabilisasi Tanah Labil",
                   "item": "https://www.betonjayareadymix.com/p/jasa-stabilisasi-tanah-labil.html"
               },
               {
                   "@type": "ListItem",
                   "position": 5,
                   "name": urlMappingJasaStabilisasiLongsor[cleanUrlJasaPerkuatanTanahLongsorKonsPost],
                   "item": cleanUrlJasaPerkuatanTanahLongsorKonsPost
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
if (urlMappingJasaPerkuatanRumahLongsor[cleanUrlJasaPerkuatanTanahLongsorKonsPost]) {
        restoreCondition('JasaKonsPerkuatanTanahLongsorPost');
        restoreCondition('JasaPerkuatanTanahLongsorRumahPost');

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
        removeCondition('JasaKonsPondasiTanahPost');
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
        removeCondition('JasaSoilNailingTebingPost');
        removeCondition('JasaDindingPenahanTanahLongsorPost');
        removeCondition('JasaGeotextilePerkuatanLerengPost');
        removeCondition('JasaSheetPilePenahanLongsorPost');
        removeCondition('JasaStabilisasiTanahLabilPost');
        removeCondition('JasaBronjongPenahanLongsorPost');
        removeCondition('JasaPerkuatanTebingJalanPost');
        removeCondition('JasaPerkuatanLongsorPerkebunanPost');
        removeCondition('JasaDrainaseAntiLongsorPost');

        JasaKonstruksiPerkuatanTanahLongsorSubPostLink.style.visibility = 'visible';
        JasaPerkuatanTanahLongsorPostLink.style.visibility = 'visible';
	
        JasaPerkuatanTanahLongsorRumahPostLink.style.visibility = 'visible';
        pageNameJasaKonsPerkuatanTanahLongsorPost.textContent = urlMappingJasaPerkuatanRumahLongsor[cleanUrlJasaPerkuatanTanahLongsorKonsPost];
    }

// ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaPerkuatanRumahLongsor[cleanUrlJasaPerkuatanTanahLongsorKonsPost]) {
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
                   "name": "Jasa Perkuatan Tanah Longsor",
                   "item": "https://www.betonjayareadymix.com/p/jasa-perkuatan-tanah-longsor.html"
               },
               {
                   "@type": "ListItem",
                   "position": 4,
                   "name": "Jasa Perkuatan Tanah Longsor Rumah",
                   "item": "https://www.betonjayareadymix.com/p/jasa-perkuatan-tanah-longsor-rumah.html"
               },
               {
                   "@type": "ListItem",
                   "position": 5,
                   "name": urlMappingJasaPerkuatanRumahLongsor[cleanUrlJasaPerkuatanTanahLongsorKonsPost],
                   "item": cleanUrlJasaPerkuatanTanahLongsorKonsPost
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
if (urlMappingJasaPerkuatanTebingLongsor[cleanUrlJasaPerkuatanTanahLongsorKonsPost]) {
        restoreCondition('JasaKonsPerkuatanTanahLongsorPost');
        restoreCondition('JasaPerkuatanTebingJalanPost');

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
        removeCondition('JasaKonsPondasiTanahPost');
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
        removeCondition('JasaSoilNailingTebingPost');
        removeCondition('JasaDindingPenahanTanahLongsorPost');
        removeCondition('JasaGeotextilePerkuatanLerengPost');
        removeCondition('JasaSheetPilePenahanLongsorPost');
        removeCondition('JasaStabilisasiTanahLabilPost');
        removeCondition('JasaPerkuatanTanahLongsorRumahPost');
        removeCondition('JasaBronjongPenahanLongsorPost');
        removeCondition('JasaPerkuatanLongsorPerkebunanPost');
        removeCondition('JasaDrainaseAntiLongsorPost');

        JasaKonstruksiPerkuatanTanahLongsorSubPostLink.style.visibility = 'visible';
        JasaPerkuatanTanahLongsorPostLink.style.visibility = 'visible';
	
        JasaPerkuatanTebingJalanPostLink.style.visibility = 'visible';
        pageNameJasaKonsPerkuatanTanahLongsorPost.textContent = urlMappingJasaPerkuatanTebingLongsor[cleanUrlJasaPerkuatanTanahLongsorKonsPost];
    }
// ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaPerkuatanTebingLongsor[cleanUrlJasaPerkuatanTanahLongsorKonsPost]) {
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
                   "name": "Jasa Perkuatan Tanah Longsor",
                   "item": "https://www.betonjayareadymix.com/p/jasa-perkuatan-tanah-longsor.html"
               },
               {
                   "@type": "ListItem",
                   "position": 4,
                   "name": "Jasa Perkuatan Tebing Jalan",
                   "item": "https://www.betonjayareadymix.com/p/jasa-perkuatan-tebing-jalan.html"
               },
               {
                   "@type": "ListItem",
                   "position": 5,
                   "name": urlMappingJasaPerkuatanTebingLongsor[cleanUrlJasaPerkuatanTanahLongsorKonsPost],
                   "item": cleanUrlJasaPerkuatanTanahLongsorKonsPost
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
if (urlMappingJasaPerkuatanPerkebunanLongsor[cleanUrlJasaPerkuatanTanahLongsorKonsPost]) {
        restoreCondition('JasaKonsPerkuatanTanahLongsorPost');
        restoreCondition('JasaPerkuatanLongsorPerkebunanPost');

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
        removeCondition('JasaKonsPondasiTanahPost');
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
        removeCondition('JasaSoilNailingTebingPost');
        removeCondition('JasaDindingPenahanTanahLongsorPost');
        removeCondition('JasaGeotextilePerkuatanLerengPost');
        removeCondition('JasaSheetPilePenahanLongsorPost');
        removeCondition('JasaStabilisasiTanahLabilPost');
        removeCondition('JasaPerkuatanTanahLongsorRumahPost');
        removeCondition('JasaPerkuatanTebingJalanPost');
        removeCondition('JasaBronjongPenahanLongsorPost');
        removeCondition('JasaDrainaseAntiLongsorPost');

        JasaKonstruksiPerkuatanTanahLongsorSubPostLink.style.visibility = 'visible';
        JasaPerkuatanTanahLongsorPostLink.style.visibility = 'visible';
	
        JasaPerkuatanLongsorPerkebunanPostLink.style.visibility = 'visible';
        pageNameJasaKonsPerkuatanTanahLongsorPost.textContent = urlMappingJasaPerkuatanPerkebunanLongsor[cleanUrlJasaPerkuatanTanahLongsorKonsPost];
    }

// ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaPerkuatanPerkebunanLongsor[cleanUrlJasaPerkuatanTanahLongsorKonsPost]) {
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
                   "name": "Jasa Perkuatan Tanah Longsor",
                   "item": "https://www.betonjayareadymix.com/p/jasa-perkuatan-tanah-longsor.html"
               },
               {
                   "@type": "ListItem",
                   "position": 4,
                   "name": "Jasa Perkuatan Longsor Perkebunan",
                   "item": "https://www.betonjayareadymix.com/p/jasa-perkuatan-longsor-perkebunan.html"
               },
               {
                   "@type": "ListItem",
                   "position": 5,
                   "name": urlMappingJasaPerkuatanPerkebunanLongsor[cleanUrlJasaPerkuatanTanahLongsorKonsPost],
                   "item": cleanUrlJasaPerkuatanTanahLongsorKonsPost
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
if (urlMappingJasaDrainaseAntiLongsor[cleanUrlJasaPerkuatanTanahLongsorKonsPost]) {
        restoreCondition('JasaKonsPerkuatanTanahLongsorPost');
        restoreCondition('JasaDrainaseAntiLongsorPost');

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
        removeCondition('JasaKonsPondasiTanahPost');
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
        removeCondition('JasaSoilNailingTebingPost');
        removeCondition('JasaDindingPenahanTanahLongsorPost');
        removeCondition('JasaGeotextilePerkuatanLerengPost');
        removeCondition('JasaSheetPilePenahanLongsorPost');
        removeCondition('JasaStabilisasiTanahLabilPost');
        removeCondition('JasaPerkuatanTanahLongsorRumahPost');
        removeCondition('JasaPerkuatanTebingJalanPost');
        removeCondition('JasaPerkuatanLongsorPerkebunanPost');
        removeCondition('JasaBronjongPenahanLongsorPost');

        JasaKonstruksiPerkuatanTanahLongsorSubPostLink.style.visibility = 'visible';
        JasaPerkuatanTanahLongsorPostLink.style.visibility = 'visible';
	
        JasaDrainaseAntiLongsorPostLink.style.visibility = 'visible';
        pageNameJasaKonsPerkuatanTanahLongsorPost.textContent = urlMappingJasaDrainaseAntiLongsor[cleanUrlJasaPerkuatanTanahLongsorKonsPost];
    }
// ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaDrainaseAntiLongsor[cleanUrlJasaPerkuatanTanahLongsorKonsPost]) {
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
                   "name": "Jasa Perkuatan Tanah Longsor",
                   "item": "https://www.betonjayareadymix.com/p/jasa-perkuatan-tanah-longsor.html"
               },
               {
                   "@type": "ListItem",
                   "position": 4,
                   "name": "Jasa Drainase Anti Longsor",
                   "item": "https://www.betonjayareadymix.com/p/jasa-drainase-anti-longsor.html"
               },
               {
                   "@type": "ListItem",
                   "position": 5,
                   "name": urlMappingJasaDrainaseAntiLongsor[cleanUrlJasaPerkuatanTanahLongsorKonsPost],
                   "item": cleanUrlJasaPerkuatanTanahLongsorKonsPost
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
    //SUB urlMappingPembuatanPagarDinding
   
   });
