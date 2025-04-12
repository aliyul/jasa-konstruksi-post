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
    var JasaKonsPondasiTanahPost = document.getElementById("JasaKonsPondasiTanahPost");

    if (!JasaKonsPondasiTanahPost) {
        console.error("elemen Id JasaKonsPondasiTanahPost kondisi terhapus");
        return;
    }
    
     var JasaKonstruksiPondasiTanahSubLink = document.getElementById("JasaKonstruksiPondasiTanahSubPost");
     var JasaPondasiTanahSub = document.getElementById("JasaPondasiTanahSubPost");

     //SUB Jasa Pondasi Tanah
     var JasaPondasiBangunanSubPostLink = document.getElementById("JasaPondasiBangunanSubPost");
     var JasaPemadatanPersiapanPondasiSubPostLink = document.getElementById("JasaPemadatanPersiapanPondasiSubPost");
     var JasaPerkuatanTanahSubPostLink = document.getElementById("JasaPerkuatanTanahSubPost");
     var JasaRetrofittingPondasiSubPostLink = document.getElementById("JasaRetrofittingPondasiSubPost");
	
    //SUB JasaPondasiBangunanSubPost
     var JasaPondasiCakarAyamPostLink = document.getElementById("JasaPondasiCakarAyamPost");
     var JasaPondasiTapakPostLink = document.getElementById("JasaPondasiTapakPost");
     var JasaPondasiBoredPilePostLink = document.getElementById("JasaPondasiBoredPilePost");
     var JasaPondasiTiangPancangPostLink = document.getElementById("JasaPondasiTiangPancangPost");
     var JasaPondasiSumuranPostLink = document.getElementById("JasaPondasiSumuranPost");
	
     var pageNameJasaKonsPondasiTanahPost = document.getElementById("pageNameJasaKonsPondasiTanahPost");
    

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
