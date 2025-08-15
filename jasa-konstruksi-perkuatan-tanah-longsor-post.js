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
