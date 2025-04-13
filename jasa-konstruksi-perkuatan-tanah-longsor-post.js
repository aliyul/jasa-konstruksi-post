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
        restoreCondition('JasaKonsPerkuatanTanahLongsor');
        restoreCondition('JasaBronjongPenahanLongsorPost');
/*
	    JasaKonsPerkuatanTanahLongsor
JasaKonstruksiPerkuatanTanahLongsorSubPost
JasaPerkuatanTanahLongsorPost

*/
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
        removeCondition('JasaKonsPembatasPost');
        removeCondition('JasaKonsPondasiTanahPost');


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
        pageNameJasaKonsPerkuatanTanahLongsorPost.textContent = urlMappingJasaSoilNailingLongsor[cleanUrlJasaPerkuatanTanahLongsorKonsPost];
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
        pageNameJasaKonsPerkuatanTanahLongsorPost.textContent = urlMappingJasaDindingPenahanLongsor[cleanUrlJasaPerkuatanTanahLongsorKonsPost];
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
        pageNameJasaKonsPerkuatanTanahLongsorPost.textContent = urlMappingJasaGeotextileLongsor[cleanUrlJasaPerkuatanTanahLongsorKonsPost];
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
        pageNameJasaKonsPerkuatanTanahLongsorPost.textContent = urlMappingJasaSheetPileLongsor[cleanUrlJasaPerkuatanTanahLongsorKonsPost];
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
        pageNameJasaKonsPerkuatanTanahLongsorPost.textContent = urlMappingJasaStabilisasiLongsor[cleanUrlJasaPerkuatanTanahLongsorKonsPost];
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
        pageNameJasaKonsPerkuatanTanahLongsorPost.textContent = urlMappingJasaPerkuatanRumahLongsor[cleanUrlJasaPerkuatanTanahLongsorKonsPost];
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
        pageNameJasaKonsPerkuatanTanahLongsorPost.textContent = urlMappingJasaPerkuatanTebingLongsor[cleanUrlJasaPerkuatanTanahLongsorKonsPost];
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
        pageNameJasaKonsPerkuatanTanahLongsorPost.textContent = urlMappingJasaPerkuatanPerkebunanLongsor[cleanUrlJasaPerkuatanTanahLongsorKonsPost];
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
        pageNameJasaKonsPerkuatanTanahLongsorPost.textContent = urlMappingJasaDrainaseAntiLongsor[cleanUrlJasaPerkuatanTanahLongsorKonsPost];
    }
	
    //SUB urlMappingPembuatanPagarDinding
   
   });
