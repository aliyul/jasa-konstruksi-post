
const urlMappingJasaPondasiBangunan = {
//"https://www.betonjayareadymix.com/p/jasa-borongan-pondasi.html": "Jasa Borongan Pondasi",
"https://www.betonjayareadymix.com/p/jasa-pondasi-cakar-ayam.html": "Jasa Pondasi Cakar Ayam",
  "https://www.betonjayareadymix.com/p/jasa-pondasi-tapak.html": "Jasa Pondasi Tapak",
  "https://www.betonjayareadymix.com/p/jasa-pondasi-bore-pile.html": "Jasa Pondasi Bore Pile",
  "https://www.betonjayareadymix.com/p/jasa-pondasi-tiang-pancang.html": "Jasa Pondasi Tiang Pancang",
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

    if (urlMappingJasaPondasiBangunan[cleanUrlJasaPondasiPerkuatanTanahKons]) {
        restoreCondition('JasaKonsPondasiTanah');
        restoreCondition('JasaPondasiBangunanSub');
     
        //hapus elemen div id lain
	removeCondition('ProdukInFur');
        removeCondition('MaterialKons');
	removeCondition('ProdukKons');
        //removeCondition('ProdukKonsSaluran');
        //removeCondition('ProdukKonsPembatas');
        removeCondition('JasaKonsPerbaikan');
       	removeCondition('JasaKons');
       	removeCondition('JasaKonsSub');
       	removeCondition('MenuKons');
       	removeCondition('JasaKonsFinishing');
        removeCondition('JasaKonsStruktur');
        removeCondition('JasaKonsPembatas');
        removeCondition('JasaKonsJalanPerkerasan');


        //hapus elemen SUB jasa pembatas lain
        removeCondition('JasaPemadatanPersiapanPondasiSub');
        removeCondition('JasaPerkuatanTanahSub');
        removeCondition('JasaRetrofittingPondasiSub');
/*
	JasaPondasiBangunanSubLink.style.visibility = 'hidden';
     JasaPemadatanPersiapanPondasiSubLink.style.visibility = 'hidden';
     JasaPerkuatanTanahSubLink.style.visibility = 'hidden';
     JasaRetrofittingPondasiSubLink.style.visibility = 'hidden';
	*/
        JasaKonstruksiPondasiTanahSubLink.style.visibility = 'visible';
        JasaPondasiTanahSub.style.visibility = 'visible';
        JasaPondasiBangunanSubLink.style.visibility = 'visible';
        pageNameJasaKonsPondasiTanah.textContent = urlMappingJasaPondasiBangunan[cleanUrlJasaPondasiPerkuatanTanahKons];
    }
// ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaPondasiBangunan[cleanUrlJasaPondasiPerkuatanTanahKons]) {
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
                   "name": urlMappingJasaPondasiBangunan[cleanUrlJasaPondasiPerkuatanTanahKons],
                   "item": cleanUrlJasaPondasiPerkuatanTanahKons
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }	
   if (urlMappingJasaPemadatanPersiapanPondasi[cleanUrlJasaPondasiPerkuatanTanahKons]) {
        restoreCondition('JasaKonsPondasiTanah');
        restoreCondition('JasaPemadatanPersiapanPondasiSub');
     
        //hapus elemen div id lain
	removeCondition('ProdukInFur');
        removeCondition('MaterialKons');
	removeCondition('ProdukKons');
        //removeCondition('ProdukKonsSaluran');
        //removeCondition('ProdukKonsPembatas');
        removeCondition('JasaKonsPerbaikan');
       	removeCondition('JasaKons');
       	removeCondition('JasaKonsSub');
       	removeCondition('MenuKons');
       	removeCondition('JasaKonsFinishing');
        removeCondition('JasaKonsStruktur');
        removeCondition('JasaKonsPembatas');
        removeCondition('JasaKonsJalanPerkerasan');


        //hapus elemen SUB jasa pembatas lain
        removeCondition('JasaPondasiBangunanSub');
        removeCondition('JasaPerkuatanTanahSub');
        removeCondition('JasaRetrofittingPondasiSub');
/*
	JasaPondasiBangunanSubLink.style.visibility = 'hidden';
     JasaPemadatanPersiapanPondasiSubLink.style.visibility = 'hidden';
     JasaPerkuatanTanahSubLink.style.visibility = 'hidden';
     JasaRetrofittingPondasiSubLink.style.visibility = 'hidden';
	*/
        JasaKonstruksiPondasiTanahSubLink.style.visibility = 'visible';
        JasaPondasiTanahSub.style.visibility = 'visible';
        JasaPemadatanPersiapanPondasiSubLink.style.visibility = 'visible';
        pageNameJasaKonsPondasiTanah.textContent = urlMappingJasaPemadatanPersiapanPondasi[cleanUrlJasaPondasiPerkuatanTanahKons];
    }
    if (urlMappingJasaPerkuatanTanah[cleanUrlJasaPondasiPerkuatanTanahKons]) {
        restoreCondition('JasaKonsPondasiTanah');
        restoreCondition('JasaPerkuatanTanahSub');
     
        //hapus elemen div id lain
	removeCondition('ProdukInFur');
        removeCondition('MaterialKons');
	removeCondition('ProdukKons');
        //removeCondition('ProdukKonsSaluran');
        //removeCondition('ProdukKonsPembatas');
        removeCondition('JasaKonsPerbaikan');
       	removeCondition('JasaKons');
       	removeCondition('JasaKonsSub');
       	removeCondition('MenuKons');
       	removeCondition('JasaKonsFinishing');
        removeCondition('JasaKonsStruktur');
        removeCondition('JasaKonsPembatas');
        removeCondition('JasaKonsJalanPerkerasan');


        //hapus elemen SUB jasa pembatas lain
        removeCondition('JasaPemadatanPersiapanPondasiSub');
        removeCondition('JasaPondasiBangunanSub');
        removeCondition('JasaRetrofittingPondasiSub');
/*
	JasaPondasiBangunanSubLink.style.visibility = 'hidden';
     JasaPemadatanPersiapanPondasiSubLink.style.visibility = 'hidden';
     JasaPerkuatanTanahSubLink.style.visibility = 'hidden';
     JasaRetrofittingPondasiSubLink.style.visibility = 'hidden';
	*/
        JasaKonstruksiPondasiTanahSubLink.style.visibility = 'visible';
        JasaPondasiTanahSub.style.visibility = 'visible';
        JasaPerkuatanTanahSubLink.style.visibility = 'visible';
	pageNameJasaKonsPondasiTanah.textContent = urlMappingJasaPerkuatanTanah[cleanUrlJasaPondasiPerkuatanTanahKons];
    }

// ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaPerkuatanTanah[cleanUrlJasaPondasiPerkuatanTanahKons]) {
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
                   "name": "Jasa Perkuatan Tanah",
                   "item": "https://www.betonjayareadymix.com/p/jasa-perkuatan-tanah.html"
               },
               {
                   "@type": "ListItem",
                   "position": 5,
                   "name": urlMappingJasaPerkuatanTanah[cleanUrlJasaPondasiPerkuatanTanahKons],
                   "item": cleanUrlJasaPondasiPerkuatanTanahKons
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
   if (urlMappingJasaRetrofittingPondasi[cleanUrlJasaPondasiPerkuatanTanahKons]) {
        restoreCondition('JasaKonsPondasiTanah');
        restoreCondition('JasaRetrofittingPondasiSub');
     
        //hapus elemen div id lain
	removeCondition('ProdukInFur');
        removeCondition('MaterialKons');
	removeCondition('ProdukKons');
        //removeCondition('ProdukKonsSaluran');
        //removeCondition('ProdukKonsPembatas');
        removeCondition('JasaKonsPerbaikan');
       	removeCondition('JasaKons');
       	removeCondition('JasaKonsSub');
       	removeCondition('MenuKons');
       	removeCondition('JasaKonsFinishing');
        removeCondition('JasaKonsStruktur');
        removeCondition('JasaKonsPembatas');
        removeCondition('JasaKonsJalanPerkerasan');


        //hapus elemen SUB jasa pembatas lain
        removeCondition('JasaPemadatanPersiapanPondasiSub');
        removeCondition('JasaPerkuatanTanahSub');
        removeCondition('JasaPondasiBangunanSub');
/*
	JasaPondasiBangunanSubLink.style.visibility = 'hidden';
     JasaPemadatanPersiapanPondasiSubLink.style.visibility = 'hidden';
     JasaPerkuatanTanahSubLink.style.visibility = 'hidden';
     JasaRetrofittingPondasiSubLink.style.visibility = 'hidden';
	*/
        JasaKonstruksiPondasiTanahSubLink.style.visibility = 'visible';
        JasaPondasiTanahSub.style.visibility = 'visible';
        JasaRetrofittingPondasiSubLink.style.visibility = 'visible';
        pageNameJasaKonsPondasiTanah.textContent = urlMappingJasaRetrofittingPondasi[cleanUrlJasaPondasiPerkuatanTanahKons];
    }
// ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaRetrofittingPondasi[cleanUrlJasaPondasiPerkuatanTanahKons]) {
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
                   "name": "Jasa Retrofitting Pondasi",
                   "item": "https://www.betonjayareadymix.com/p/jasa-retrofitting-pondasi.html"
               },
               {
                   "@type": "ListItem",
                   "position": 5,
                   "name": urlMappingJasaRetrofittingPondasi[cleanUrlJasaPondasiPerkuatanTanahKons],
                   "item": cleanUrlJasaPondasiPerkuatanTanahKons
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
