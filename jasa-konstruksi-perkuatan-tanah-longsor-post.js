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

     pageNameJasaKonsPerkuatanTanahLongsor.textContent = "";

    if (urlMappingJasaBronjong[cleanUrlJasaPerkuatanTanahLongsorKonsPost]) {
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
        pageNameJasaKonsPerkuatanTanahLongsor.textContent = urlMappingJasaBronjong[cleanUrlJasaPerkuatanTanahLongsorKonsPost];
    }
       if (urlMappingJasaSoilNailingLongsor[cleanUrlJasaPerkuatanTanahLongsorKonsPost]) {
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
        pageNameJasaKonsPerkuatanTanahLongsor.textContent = urlMappingJasaSoilNailingLongsor[cleanUrlJasaPerkuatanTanahLongsorKonsPost];
    }
       if (urlMappingJasaDindingPenahanLongsor[cleanUrlJasaPerkuatanTanahLongsorKonsPost]) {
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
        pageNameJasaKonsPerkuatanTanahLongsor.textContent = urlMappingJasaDindingPenahanLongsor[cleanUrlJasaPerkuatanTanahLongsorKonsPost];
    }
    if (urlMappingJasaGeotextileLongsor[cleanUrlJasaPerkuatanTanahLongsorKonsPost]) {
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
        pageNameJasaKonsPerkuatanTanahLongsor.textContent = urlMappingJasaGeotextileLongsor[cleanUrlJasaPerkuatanTanahLongsorKonsPost];
    }
if (urlMappingJasaSheetPileLongsor[cleanUrlJasaPerkuatanTanahLongsorKonsPost]) {
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
        pageNameJasaKonsPerkuatanTanahLongsor.textContent = urlMappingJasaSheetPileLongsor[cleanUrlJasaPerkuatanTanahLongsorKonsPost];
    }
if (urlMappingJasaStabilisasiLongsor[cleanUrlJasaPerkuatanTanahLongsorKonsPost]) {
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
        pageNameJasaKonsPerkuatanTanahLongsor.textContent = urlMappingJasaStabilisasiLongsor[cleanUrlJasaPerkuatanTanahLongsorKonsPost];
    }
if (urlMappingJasaPerkuatanRumahLongsor[cleanUrlJasaPerkuatanTanahLongsorKonsPost]) {
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
        pageNameJasaKonsPerkuatanTanahLongsor.textContent = urlMappingJasaPerkuatanRumahLongsor[cleanUrlJasaPerkuatanTanahLongsorKonsPost];
    }
if (urlMappingJasaPerkuatanTebingLongsor[cleanUrlJasaPerkuatanTanahLongsorKonsPost]) {
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
        pageNameJasaKonsPerkuatanTanahLongsor.textContent = urlMappingJasaPerkuatanTebingLongsor[cleanUrlJasaPerkuatanTanahLongsorKonsPost];
    }
if (urlMappingJasaPerkuatanPerkebunanLongsor[cleanUrlJasaPerkuatanTanahLongsorKonsPost]) {
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
        pageNameJasaKonsPerkuatanTanahLongsor.textContent = urlMappingJasaPerkuatanPerkebunanLongsor[cleanUrlJasaPerkuatanTanahLongsorKonsPost];
    }
if (urlMappingJasaDrainaseAntiLongsor[cleanUrlJasaPerkuatanTanahLongsorKonsPost]) {
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
        pageNameJasaKonsPerkuatanTanahLongsor.textContent = urlMappingJasaDrainaseAntiLongsor[cleanUrlJasaPerkuatanTanahLongsorKonsPost];
    }
	
    //SUB urlMappingPembuatanPagarDinding
   
   });
