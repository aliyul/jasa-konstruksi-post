
const urlMappingJasaPondasiBangunan= {
"https://www.betonjayareadymix.com/p/jasa-pondasi-cakar-ayam.html": "Jasa Pondasi Cakar Ayam",
  "https://www.betonjayareadymix.com/p/jasa-pondasi-tapak.html": "Jasa Pondasi Tapak",
  "https://www.betonjayareadymix.com/p/jasa-pondasi-bored-pile.html": "Jasa Pondasi Bored Pile",
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
let removedElementsJasaPembatasKons = {};
// Fungsi untuk menghapus elemen berdasarkan ID
function removeCondition(conditionId) {
    const conditionElement = document.getElementById(conditionId);

    if (conditionElement) {
        // Menyimpan elemen yang dihapus dalam objek untuk bisa dikembalikan
        removedElementsJasaPembatasKons[conditionId] = conditionElement;
        conditionElement.remove(); // Menghapus elemen tersebut
    }
}

// Fungsi untuk mengembalikan elemen yang telah dihapus
function restoreCondition(conditionId) {
    const breadcrumb = document.querySelector('.breadcrumb');
    const elementToRestore = removedElementsJasaPembatasKons[conditionId]; // Mendapatkan elemen yang disimpan

    if (elementToRestore) {
        breadcrumb.appendChild(elementToRestore); // Menambahkan elemen kembali ke dalam breadcrumb
        delete removedElementsJasaPembatasKons[conditionId]; // Menghapus elemen dari objek setelah dikembalikan
    } else {
        console.log(`Elemen dengan ID ${conditionId} tidak ditemukan di removedElementsJasaPembatasKons.`);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    // var currentUrl = window.location.href;
     //const cleanUrl = currentUrl.split('?')[0]; // Menghapus parameter seperti ?m=1
    const cleanUrlJasaPembatasKons = window.location.href.split(/[?#]/)[0]; // Menghilangkan parameter seperti ?m=1

     // Menemukan elemen menggunakan Id
    var JasaKonsPembatas = document.getElementById("JasaKonsPembatas");

    if (!JasaKonsPembatas) {
        console.error("elemen Id JasaKonsPembatas kondisi terhapus");
        return;
    }
    
	
     var JasaKonstruksiPembatasLink = document.getElementById("JasaKonstruksiPembatas");
     var JasaPembatasLink = document.getElementById("JasaPembatas");

     //SUB JASA PEMBATAS
     var JasaPembuatanPagarDindingPembatasLink = document.getElementById("JasaPembuatanPagarDindingPembatas");
     var JasaPengamanSisiJalanInfrastrukturLink = document.getElementById("JasaPengamanSisiJalanInfrastruktur");
     var JasaRambudanSistemKeamananVisualLink = document.getElementById("JasaRambudanSistemKeamananVisual");
     var JasaPengamananAreaProyekLink = document.getElementById("JasaPengamananAreaProyek");

	
     var pageNameJasaPembatas = document.getElementById("pageNameJasaPembatas");
    

     // Default untuk menyembunyikan elemen
     JasaKonstruksiPembatasLink.style.visibility = 'hidden';
     JasaPembatasLink.style.visibility = 'hidden';
	
     //SUB JASA PEMBATAS
     JasaPembuatanPagarDindingPembatasLink.style.visibility = 'hidden';
     JasaPengamanSisiJalanInfrastrukturLink.style.visibility = 'hidden';
     JasaRambudanSistemKeamananVisualLink.style.visibility = 'hidden';
     JasaPengamananAreaProyekLink.style.visibility = 'hidden';

     pageNameJasaPembatas.textContent = "";

    if (urlMappingPembuatanPagarDinding[cleanUrlJasaPembatasKons]) {
        restoreCondition('JasaKonsPembatas');
        restoreCondition('JasaPembuatanPagarDindingPembatas');
     
        //hapus elemen div id lain
        removeCondition('materialKonsReadymix');
        removeCondition('ProdukKonsSaluran');
        removeCondition('ProdukKonsPembatas');
        removeCondition('JasaKonsPerbaikan');
       	removeCondition('JasaKons');
       	removeCondition('JasaKonsSub');
       	removeCondition('MenuKons');
       	removeCondition('JasaKonsFinishing');
        removeCondition('JasaKonsStruktur');


        //hapus elemen SUB jasa pembatas lain
        removeCondition('JasaPengamanSisiJalanInfrastruktur');
        removeCondition('JasaRambudanSistemKeamananVisual');
        removeCondition('JasaPengamananAreaProyek');

	
        JasaKonstruksiPembatasLink.style.visibility = 'visible';
        JasaPembatasLink.style.visibility = 'visible';
        JasaPembuatanPagarDindingPembatasLink.style.visibility = 'visible';
        pageNameJasaPembatas.textContent = urlMappingPembuatanPagarDinding[cleanUrlJasaPembatasKons];
    }
       if (urlMappingPengamananSisiJalan[cleanUrlJasaPembatasKons]) {
        restoreCondition('JasaKonsPembatas');
        restoreCondition('JasaPengamanSisiJalanInfrastruktur');
     
        //hapus elemen div id lain
        removeCondition('materialKonsReadymix');
        removeCondition('ProdukKonsSaluran');
        removeCondition('ProdukKonsPembatas');
        removeCondition('JasaKonsPerbaikan');
       	removeCondition('JasaKons');
       	removeCondition('JasaKonsSub');
       	removeCondition('MenuKons');
       	removeCondition('JasaKonsFinishing');
        removeCondition('JasaKonsStruktur');


        //hapus elemen SUB jasa pembatas lain SELAIN JasaPengamanSisiJalanInfrastruktur
        removeCondition('JasaPembuatanPagarDindingPembatas');
        removeCondition('JasaRambudanSistemKeamananVisual');
        removeCondition('JasaPengamananAreaProyek');
	
        JasaKonstruksiPembatasLink.style.visibility = 'visible';
        JasaPembatasLink.style.visibility = 'visible';
        JasaPengamanSisiJalanInfrastrukturLink.style.visibility = 'visible';
        pageNameJasaPembatas.textContent = urlMappingPengamananSisiJalan[cleanUrlJasaPembatasKons];
    }
       if (urlMappingRambuSistemKeamananVisual[cleanUrlJasaPembatasKons]) {
        restoreCondition('JasaKonsPembatas');
        restoreCondition('JasaRambudanSistemKeamananVisual');
     
        //hapus elemen div id lain
        removeCondition('materialKonsReadymix');
        removeCondition('ProdukKonsSaluran');
        removeCondition('ProdukKonsPembatas');
        removeCondition('JasaKonsPerbaikan');
       	removeCondition('JasaKons');
       	removeCondition('JasaKonsSub');
       	removeCondition('MenuKons');
       	removeCondition('JasaKonsFinishing');
        removeCondition('JasaKonsStruktur');


        //hapus elemen SUB jasa pembatas lain
        removeCondition('JasaPengamanSisiJalanInfrastruktur');
        removeCondition('JasaPembuatanPagarDindingPembatas');
        removeCondition('JasaPengamananAreaProyek');
       
        JasaKonstruksiPembatasLink.style.visibility = 'visible';
        JasaPembatasLink.style.visibility = 'visible';
        JasaRambudanSistemKeamananVisualLink.style.visibility = 'visible';
        pageNameJasaPembatas.textContent = urlMappingRambuSistemKeamananVisual[cleanUrlJasaPembatasKons];
    }
       if (urlMappingPengamananAreaProyek[cleanUrlJasaPembatasKons]) {
        restoreCondition('JasaKonsPembatas');
        restoreCondition('JasaPengamananAreaProyek');
     
        //hapus elemen div id lain
        removeCondition('materialKonsReadymix');
        removeCondition('ProdukKonsSaluran');
        removeCondition('ProdukKonsPembatas');
        removeCondition('JasaKonsPerbaikan');
       	removeCondition('JasaKons');
       	removeCondition('JasaKonsSub');
       	removeCondition('MenuKons');
       	removeCondition('JasaKonsFinishing');
        removeCondition('JasaKonsStruktur');


        //hapus elemen SUB jasa pembatas lain
        removeCondition('JasaPengamanSisiJalanInfrastruktur');
        removeCondition('JasaRambudanSistemKeamananVisual');
        removeCondition('JasaPembuatanPagarDindingPembatas');

	
	
        JasaKonstruksiPembatasLink.style.visibility = 'visible';
        JasaPembatasLink.style.visibility = 'visible';
        JasaPengamananAreaProyekLink.style.visibility = 'visible';
        pageNameJasaPembatas.textContent = urlMappingPengamananAreaProyek[cleanUrlJasaPembatasKons];
    }
	
    //SUB urlMappingPembuatanPagarDinding
   
   });
