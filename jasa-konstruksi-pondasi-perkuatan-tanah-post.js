//SUB urlMappingPembuatanPagarDinding
const urlMappingJasaPagarBetonPrecast = {

};
const urlMappingJasaPagarPanelBeton = {

};
const urlMappingPagarBesi = {

};
const urlMappingDindingBata = {

};
const urlMappingPagarKawat = {

};
const urlMappingPagarBRC = {

};
const urlMappingJasaPagarRumah = {
 
};
const urlMappingPagarBangunan = {

};
// Menyimpan elemen yang dihapus dalam variabel
let removedElementsJasaPembatasKonsPost = {};
// Fungsi untuk menghapus elemen berdasarkan ID
function removeCondition(conditionId) {
    const conditionElement = document.getElementById(conditionId);

    if (conditionElement) {
        // Menyimpan elemen yang dihapus dalam objek untuk bisa dikembalikan
        removedElementsJasaPembatasKonsPost[conditionId] = conditionElement;
        conditionElement.remove(); // Menghapus elemen tersebut
    }
}

// Fungsi untuk mengembalikan elemen yang telah dihapus
function restoreCondition(conditionId) {
    const breadcrumb = document.querySelector('.breadcrumb');
    const elementToRestore = removedElementsJasaPembatasKonsPost[conditionId]; // Mendapatkan elemen yang disimpan

    if (elementToRestore) {
        breadcrumb.appendChild(elementToRestore); // Menambahkan elemen kembali ke dalam breadcrumb
        delete removedElementsJasaPembatasKonsPost[conditionId]; // Menghapus elemen dari objek setelah dikembalikan
    } else {
        console.log(`Elemen dengan ID ${conditionId} tidak ditemukan di removedElementsJasaPembatasKonsPost.`);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    // var currentUrl = window.location.href;
     //const cleanUrl = currentUrl.split('?')[0]; // Menghapus parameter seperti ?m=1
    const cleanUrlJasaPembatasKonsPost = window.location.href.split(/[?#]/)[0]; // Menghilangkan parameter seperti ?m=1

     // Menemukan elemen menggunakan Id
    var JasaKonsPembatasPost = document.getElementById("JasaKonsPembatasPost");

    if (!JasaKonsPembatasPost) {
        console.error("elemen Id JasaKonsPembatasPost kondisi terhapus");
        return;
    }
  
	
     var JasaKonstruksiPembatasPostLink = document.getElementById("JasaKonstruksiPembatasPost");
     var JasaPembatasPostLink = document.getElementById("JasaPembatasPost");

     //SUB JASA PEMBATAS
     var JasaPembuatanPagarDindingPembatasPostLink = document.getElementById("JasaPembuatanPagarDindingPembatasPost");
     var JasaPengamanSisiJalanInfrastrukturPostLink = document.getElementById("JasaPengamanSisiJalanInfrastrukturPost");
     var JasaRambudanSistemKeamananVisualPostLink = document.getElementById("JasaRambudanSistemKeamananVisualPost");
     var JasaPengamananAreaProyekPostLink = document.getElementById("JasaPengamananAreaProyekPost");

    //SUB JasaPembuatanPagarDindingPembatas
     var JasaPagarBetonPrecastPostLink = document.getElementById("JasaPagarBetonPrecastPost");
     var JasaPagarPanelBetonPostLink = document.getElementById("JasaPagarPanelBetonPost");
     var JasaPagarBesiHollowWiremeshPostLink = document.getElementById("JasaPagarBesiHollowWiremeshPost");
     var JasaDindingPembatasBataBatakoPostLink = document.getElementById("JasaDindingPembatasBataBatakoPost");
     var JasaPagarKawatHarmonikaPostLink = document.getElementById("JasaPagarKawatHarmonikaPost");
     var JasaPagarBrcPostLink = document.getElementById("JasaPagarBrcPost");
     var JasaPagarRumahPostLink = document.getElementById("JasaPagarRumahPost");
     var JasaPagarBangunanPostLink = document.getElementById("JasaPagarBangunanPost");
	
     var pageNameJasaPembatasPost = document.getElementById("pageNameJasaPembatasPost");
    

     // Default untuk menyembunyikan elemen
     JasaKonstruksiPembatasPostLink.style.visibility = 'hidden';
     JasaPembatasPostLink.style.visibility = 'hidden';
	
     //SUB JASA PEMBATAS
     JasaPembuatanPagarDindingPembatasPostLink.style.visibility = 'hidden';
     JasaPengamanSisiJalanInfrastrukturPostLink.style.visibility = 'hidden';
     JasaRambudanSistemKeamananVisualPostLink.style.visibility = 'hidden';
     JasaPengamananAreaProyekPostLink.style.visibility = 'hidden';

    //SUB JasaPembuatanPagarDindingPembatas
     JasaPagarBetonPrecastPostLink.style.visibility = 'hidden';
     JasaPagarPanelBetonPostLink.style.visibility = 'hidden';
     JasaPagarBesiHollowWiremeshPostLink.style.visibility = 'hidden';
     JasaDindingPembatasBataBatakoPostLink.style.visibility = 'hidden';
     JasaPagarKawatHarmonikaPostLink.style.visibility = 'hidden';
     JasaPagarBrcPostLink.style.visibility = 'hidden';
     JasaPagarRumahPostLink.style.visibility = 'hidden';
     JasaPagarBangunanPostLink.style.visibility = 'hidden';
	
     pageNameJasaPembatasPost.textContent = "";
	
    //SUB urlMappingPembuatanPagarDinding

       if (urlMappingJasaPagarPanelBeton[cleanUrlJasaPembatasKonsPost]) {
        restoreCondition('JasaKonsPembatasPost');
        restoreCondition('JasaPembuatanPagarDindingPembatasPost');
        restoreCondition('JasaPagarPanelBetonPost');
	       
     
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
        removeCondition('JasaKonsPembatas');


        //hapus elemen SUB jasa pembatas lain
        removeCondition('JasaPengamanSisiJalanInfrastrukturPost');
        removeCondition('JasaRambudanSistemKeamananVisualPost');
        removeCondition('JasaPengamananAreaProyekPost');

	 //hapus elemen sub JasaPembuatanPagarDindingPembatas SELAIN JasaPagarPanelBeton
        removeCondition('JasaPagarBetonPrecastPost');
       // removeCondition('JasaPagarPanelBetonPost');
        removeCondition('JasaPagarBesiHollowWiremeshPost'); 
	removeCondition('JasaDindingPembatasBataBatakoPost');
	removeCondition('JasaPagarKawatHarmonikaPost');
	removeCondition('JasaPagarBrcPost');
	removeCondition('JasaPagarRumahPost');
	removeCondition('JasaPagarBangunanPost');
       
        JasaKonstruksiPembatasPostLink.style.visibility = 'visible';
        JasaPembatasPostLink.style.visibility = 'visible';
        JasaPembuatanPagarDindingPembatasPostLink.style.visibility = 'visible';
	//TAMPILKAN JasaPagarPanelBeton
        JasaPagarPanelBetonPostLink.style.visibility = 'visible';
        pageNameJasaPembatasPost.textContent = urlMappingJasaPagarPanelBeton[cleanUrlJasaPembatasKonsPost];
    }
    
	
    if (urlMappingJasaPagarBetonPrecast[cleanUrlJasaPembatasKonsPost]) {
        restoreCondition('JasaKonsPembatasPost');
        restoreCondition('JasaPembuatanPagarDindingPembatasPost');
        restoreCondition('JasaPagarBetonPrecastPost');
	       
     
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
	removeCondition('JasaKonsPembatas');


        //hapus elemen SUB jasa pembatas lain
        removeCondition('JasaPengamanSisiJalanInfrastrukturPost');
        removeCondition('JasaRambudanSistemKeamananVisualPost');
        removeCondition('JasaPengamananAreaProyekPost');

	 //hapus elemen sub JasaPembuatanPagarDindingPembatas SELAIN JasaPagarPanelBeton
        //removeCondition('JasaPagarBetonPrecastPost');
        removeCondition('JasaPagarPanelBetonPost');
        removeCondition('JasaPagarBesiHollowWiremeshPost'); 
	removeCondition('JasaDindingPembatasBataBatakoPost');
	removeCondition('JasaPagarKawatHarmonikaPost');
	removeCondition('JasaPagarBrcPost');
	removeCondition('JasaPagarRumahPost');
	removeCondition('JasaPagarBangunanPost');
       
        JasaKonstruksiPembatasPostLink.style.visibility = 'visible';
        JasaPembatasPostLink.style.visibility = 'visible';
        JasaPembuatanPagarDindingPembatasPostLink.style.visibility = 'visible';
	//TAMPILKAN JasaPagarPanelBeton
        JasaPagarBetonPrecastPostLink.style.visibility = 'visible';
        pageNameJasaPembatasPost.textContent = urlMappingJasaPagarBetonPrecast[cleanUrlJasaPembatasKonsPost];
    }

   if (urlMappingJasaPagarRumah[cleanUrlJasaPembatasKonsPost]) {
        restoreCondition('JasaKonsPembatasPost');
        restoreCondition('JasaPembuatanPagarDindingPembatasPost');
        restoreCondition('JasaPagarRumahPost');
	       
     
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
	removeCondition('JasaKonsPembatas');


        //hapus elemen SUB jasa pembatas lain
        removeCondition('JasaPengamanSisiJalanInfrastrukturPost');
        removeCondition('JasaRambudanSistemKeamananVisualPost');
        removeCondition('JasaPengamananAreaProyekPost');

	 //hapus elemen sub JasaPembuatanPagarDindingPembatas SELAIN JasaPagarPanelBeton
        removeCondition('JasaPagarBetonPrecastPost');
        removeCondition('JasaPagarPanelBetonPost');
        removeCondition('JasaPagarBesiHollowWiremeshPost'); 
	removeCondition('JasaDindingPembatasBataBatakoPost');
	removeCondition('JasaPagarKawatHarmonikaPost');
	removeCondition('JasaPagarBrcPost');
	//removeCondition('JasaPagarRumahPost');
	removeCondition('JasaPagarBangunanPost');
       
        JasaKonstruksiPembatasPostLink.style.visibility = 'visible';
        JasaPembatasPostLink.style.visibility = 'visible';
        JasaPembuatanPagarDindingPembatasPostLink.style.visibility = 'visible';
	//TAMPILKAN JasaPagarPanelBeton
        JasaPagarRumahPostLink.style.visibility = 'visible';
        pageNameJasaPembatasPost.textContent = urlMappingJasaPagarRumah[cleanUrlJasaPembatasKonsPost];
   }

   });
