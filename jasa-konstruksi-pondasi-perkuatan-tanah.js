
const urlMappingJasaPondasiBangunan= {


};

const urlMappingJasaPemadatanPersiapanPondasi = {


};

const urlMappingJasaPerkuatanTanah = {

};

const urlMappingJasaRetrofittingPondasi = {



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

    //SUB JasaPembuatanPagarDindingPembatas
  /*
     var JasaPagarBetonPrecastLink = document.getElementById("JasaPagarBetonPrecast");
     var JasaPagarPanelBetonLink = document.getElementById("JasaPagarPanelBeton");
     var JasaPagarBesiHollowWiremeshLink = document.getElementById("JasaPagarBesiHollowWiremesh");
     var JasaDindingPembatasBataBatakoLink = document.getElementById("JasaDindingPembatasBataBatako");
     var JasaPagarKawatHarmonikaLink = document.getElementById("JasaPagarKawatHarmonika");
     var JasaPagarBrcLink = document.getElementById("JasaPagarBrc");
     var JasaPagarRumahLink = document.getElementById("JasaPagarRumah");
     var JasaPagarBangunanLink = document.getElementById("JasaPagarBangunan");
*/
	
     var pageNameJasaPembatas = document.getElementById("pageNameJasaPembatas");
    

     // Default untuk menyembunyikan elemen
     JasaKonstruksiPembatasLink.style.visibility = 'hidden';
     JasaPembatasLink.style.visibility = 'hidden';
	
     //SUB JASA PEMBATAS
     JasaPembuatanPagarDindingPembatasLink.style.visibility = 'hidden';
     JasaPengamanSisiJalanInfrastrukturLink.style.visibility = 'hidden';
     JasaRambudanSistemKeamananVisualLink.style.visibility = 'hidden';
     JasaPengamananAreaProyekLink.style.visibility = 'hidden';

    //SUB JasaPembuatanPagarDindingPembatas
    /*
     JasaPagarBetonPrecastLink.style.visibility = 'hidden';
     JasaPagarPanelBetonLink.style.visibility = 'hidden';
     JasaPagarBesiHollowWiremeshLink.style.visibility = 'hidden';
     JasaDindingPembatasBataBatakoLink.style.visibility = 'hidden';
     JasaPagarKawatHarmonikaLink.style.visibility = 'hidden';
     JasaPagarBrcLink.style.visibility = 'hidden';
     JasaPagarRumahLink.style.visibility = 'hidden';
     JasaPagarBangunanLink.style.visibility = 'hidden';
  */
	
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

	 //hapus elemen sub JasaPembuatanPagarDindingPembatas SEMUA NYA
	/*
        removeCondition('JasaPagarBetonPrecast');
        removeCondition('JasaPagarPanelBeton');
        removeCondition('JasaPagarBesiHollowWiremesh'); 
	removeCondition('JasaDindingPembatasBataBatako');
	removeCondition('JasaPagarKawatHarmonika');
	removeCondition('JasaPagarBrc');
	removeCondition('JasaPagarRumah');
	removeCondition('JasaPagarBangunan');
       */
	
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

	 //hapus elemen sub JasaPembuatanPagarDindingPembatas SEMUA NYA
        /*
        removeCondition('JasaPagarBetonPrecast');
        removeCondition('JasaPagarPanelBeton');
        removeCondition('JasaPagarBesiHollowWiremesh'); 
	removeCondition('JasaDindingPembatasBataBatako');
	removeCondition('JasaPagarKawatHarmonika');
	removeCondition('JasaPagarBrc');
	removeCondition('JasaPagarRumah');
	removeCondition('JasaPagarBangunan');
       */
	
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

	 //hapus elemen sub JasaPembuatanPagarDindingPembatas SEMUA NYA
	/*
        removeCondition('JasaPagarBetonPrecast');
        removeCondition('JasaPagarPanelBeton');
        removeCondition('JasaPagarBesiHollowWiremesh'); 
	removeCondition('JasaDindingPembatasBataBatako');
	removeCondition('JasaPagarKawatHarmonika');
	removeCondition('JasaPagarBrc');
	removeCondition('JasaPagarRumah');
	removeCondition('JasaPagarBangunan');
       */
	
       
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

	 //hapus elemen sub JasaPembuatanPagarDindingPembatas SEMUA NYA
	/*
        removeCondition('JasaPagarBetonPrecast');
        removeCondition('JasaPagarPanelBeton');
        removeCondition('JasaPagarBesiHollowWiremesh'); 
	removeCondition('JasaDindingPembatasBataBatako');
	removeCondition('JasaPagarKawatHarmonika');
	removeCondition('JasaPagarBrc');
	removeCondition('JasaPagarRumah');
	removeCondition('JasaPagarBangunan');
      */
	
        JasaKonstruksiPembatasLink.style.visibility = 'visible';
        JasaPembatasLink.style.visibility = 'visible';
        JasaPengamananAreaProyekLink.style.visibility = 'visible';
        pageNameJasaPembatas.textContent = urlMappingPengamananAreaProyek[cleanUrlJasaPembatasKons];
    }
	
    //SUB urlMappingPembuatanPagarDinding
   
   });
