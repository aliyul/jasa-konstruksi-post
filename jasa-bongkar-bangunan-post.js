//SUB MAPPING JASA BONGKAR BANGUNAN
// JasaBongkarRumah
const urlMappingJasaBongkarRumah = {

};
const urlMappingJasaBongkarBeton = {
"https://www.betonjayareadymix.com/2019/06/harga-bongkar-beton.html": "Harga Bongkar Beton"

};
const urlMappingJasaBongkarAtap = {

};
const urlMappingJasaBongkarKeramik = {
  "https://www.betonjayareadymix.com/2019/06/biaya-bongkar-lantai-keramik.html": "Biaya Bongkar Lantai Keramik",
  "https://www.betonjayareadymix.com/2019/06/harga-bongkar-lantai-keramik.html": "Harga Bongkar Lantai Keramik"
};
const urlMappingJasaBongkarTembok = {

};
const urlMappingJasaBongkarDinding = {
"https://www.betonjayareadymix.com/2019/06/harga-jasa-bongkar-dinding.html": "Harga Jasa Bongkar Dinding",
 "https://www.betonjayareadymix.com/2019/06/harga-bongkar-dinding-bata-per-m2.html": "Harga Jasa Bongkar Dinding Bata Per M2"
};
const urlMappingJasaBongkarPlafon = {

};
const urlMappingJasaBongkarPartisi = {

};
const urlMappingJasaBongkarPagar = {

};
const urlMappingJasaBongkarLantai = {

};

// Menyimpan elemen yang dihapus dalam variabel
let removedElementsJasaKonsBongkarBangunanPost = {};
// Fungsi untuk menghapus elemen berdasarkan ID
function removeCondition(conditionId) {
    const conditionElement = document.getElementById(conditionId);

    if (conditionElement) {
        // Menyimpan elemen yang dihapus dalam objek untuk bisa dikembalikan
        removedElementsJasaKonsBongkarBangunanPost[conditionId] = conditionElement;
        conditionElement.remove(); // Menghapus elemen tersebut
    }
}

// Fungsi untuk mengembalikan elemen yang telah dihapus
function restoreCondition(conditionId) {
    const breadcrumb = document.querySelector('.breadcrumb');
    const elementToRestore = removedElementsJasaKonsBongkarBangunanPost[conditionId]; // Mendapatkan elemen yang disimpan

    if (elementToRestore) {
        breadcrumb.appendChild(elementToRestore); // Menambahkan elemen kembali ke dalam breadcrumb
        delete removedElementsJasaKonsBongkarBangunanPost[conditionId]; // Menghapus elemen dari objek setelah dikembalikan
    } else {
        console.log(`Elemen dengan ID ${conditionId} tidak ditemukan di removedElementsJasaKonsBongkarBangunanPost.`);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    // var currentUrl = window.location.href;
     //const cleanUrl = currentUrl.split('?')[0]; // Menghapus parameter seperti ?m=1
    const cleanUrlJasaKonsBongkarBangunanPost = window.location.href.split(/[?#]/)[0]; // Menghilangkan parameter seperti ?m=1

     // Menemukan elemen menggunakan Id
    var JasaKonsBongkarBangunanPost = document.getElementById("JasaKonsBongkarBangunanPost");

    if (!JasaKonsBongkarBangunanPost) {
        console.error("elemen Id JasaKonsBongkarBangunanPost kondisi terhapus");
        return;
    }
    
     var JasaKonstruksiBongkarBangunanPostLink = document.getElementById("JasaKonstruksiBongkarBangunanPost");
     var JasaBongkarBangunanPostLink = document.getElementById("JasaBongkarBangunanPost");

     //SUB JasaKonsBongkarBangunanPost
     var JasaBongkarRumahPostLink = document.getElementById("JasaBongkarRumahPost");
     var JasaBongkarBetonPostLink = document.getElementById("JasaBongkarBetonPost");
     var JasaBongkarAtapPostLink = document.getElementById("JasaBongkarAtapPost");
     var JasaBongkarKeramikPostLink = document.getElementById("JasaBongkarKeramikPost");
     var JasaBongkarTembokPostLink = document.getElementById("JasaBongkarTembokPost");
     var JasaBongkarDindingPostLink = document.getElementById("JasaBongkarDindingPost");
     var JasaBongkarPlafonPostLink = document.getElementById("JasaBongkarPlafonPost");
     var JasaBongkarPartisiPostLink = document.getElementById("JasaBongkarPartisiPost");
     var JasaBongkarPagarPostLink = document.getElementById("JasaBongkarPagarPost");
     var JasaBongkarLantaiPostLink = document.getElementById("JasaBongkarLantaiPost");
	
     var pageNameJasaKonsBongkarBangunanPost = document.getElementById("pageNameJasaKonsBongkarBangunanPost");
    

     // Default untuk menyembunyikan elemen
     JasaKonstruksiBongkarBangunanPostLink.style.visibility = 'hidden';
     JasaBongkarBangunanPostLink.style.visibility = 'hidden';
	
     //SUB JasaBongkarBangunanPost
     JasaBongkarRumahPostLink.style.visibility = 'hidden';
     JasaBongkarBetonPostLink.style.visibility = 'hidden';
     JasaBongkarAtapPostLink.style.visibility = 'hidden';
     JasaBongkarKeramikPostLink.style.visibility = 'hidden';
     JasaBongkarTembokPostLink.style.visibility = 'hidden';
     JasaBongkarDindingPostLink.style.visibility = 'hidden';
     JasaBongkarPlafonPostLink.style.visibility = 'hidden';
     JasaBongkarPartisiPostLink.style.visibility = 'hidden';
     JasaBongkarPagarPostLink.style.visibility = 'hidden';
     JasaBongkarLantaiPostLink.style.visibility = 'hidden';
	
     pageNameJasaKonsBongkarBangunanPost.textContent = "";
	
//SUB urlMappingJasaKonsBongkarBangunanPost
if (urlMappingJasaBongkarRumah[cleanUrlJasaKonsBongkarBangunanPost]) {
        restoreCondition('JasaKonsBongkarBangunanPost');
	
        restoreCondition('JasaBongkarBangunanPost');
        restoreCondition('JasaBongkarRumahPost');
     
        //hapus elemen div id lain
	removeCondition('ProdukKonsSaluranPost');
        removeCondition('ProdukKonsPembatasPost');
        removeCondition('MaterialKonsStukturPost');
        removeCondition('JasaKonsPerkuatanTanahLongsorPost');
        removeCondition('JasaKonsPondasiTanahPost');
        removeCondition('JasaKonsPembatasPost');
        removeCondition('JasaKonsPerbaikanPost');
        removeCondition('JasaKonsPengeboranPost');
	
        //hapus elemen SUB jasa JasaBongkarBangunanPost semua SELAIN JasaBongkarRumahPost
        removeCondition('JasaBongkarBetonPost');
        removeCondition('JasaBongkarAtapPost');
        removeCondition('JasaBongkarKeramikPost');
        removeCondition('JasaBongkarTembokPost');
        removeCondition('JasaBongkarDindingPost');
        removeCondition('JasaBongkarPlafonPost');
        removeCondition('JasaBongkarPartisiPost');
        removeCondition('JasaBongkarPagarPost');
        removeCondition('JasaBongkarLantaiPost');
       
        JasaKonstruksiBongkarBangunanPostLink.style.visibility = 'visible';
	//TAMPILKAN JasaBongkarBangunanPost
        JasaBongkarBangunanPostLink.style.visibility = 'visible';
	//TAMPILKAN JasaBongkarRumahPost
	JasaBongkarRumahPostLink.style.visibility = 'visible';
	
	pageNameJasaKonsBongkarBangunanPost.textContent = urlMappingJasaBongkarRumah[cleanUrlJasaKonsBongkarBangunanPost];
    }
    if (urlMappingJasaBongkarBeton[cleanUrlJasaKonsBongkarBangunanPost]) {
        restoreCondition('JasaKonsBongkarBangunanPost');
	
        restoreCondition('JasaBongkarBangunanPost');
        restoreCondition('JasaBongkarBetonPost');
     
        //hapus elemen div id lain
	removeCondition('ProdukKonsSaluranPost');
        removeCondition('ProdukKonsPembatasPost');
        removeCondition('MaterialKonsStukturPost');
        removeCondition('JasaKonsPerkuatanTanahLongsorPost');
        removeCondition('JasaKonsPondasiTanahPost');
        removeCondition('JasaKonsPembatasPost');
        removeCondition('JasaKonsPerbaikanPost');
        removeCondition('JasaKonsPengeboranPost');
	
        //hapus elemen SUB jasa JasaBongkarBangunanPost semua SELAIN JasaBongkarBetonPost
        removeCondition('JasaBongkarRumahPost');
        removeCondition('JasaBongkarAtapPost');
        removeCondition('JasaBongkarKeramikPost');
        removeCondition('JasaBongkarTembokPost');
        removeCondition('JasaBongkarDindingPost');
        removeCondition('JasaBongkarPlafonPost');
        removeCondition('JasaBongkarPartisiPost');
        removeCondition('JasaBongkarPagarPost');
        removeCondition('JasaBongkarLantaiPost');
       
        JasaKonstruksiBongkarBangunanPostLink.style.visibility = 'visible';
	//TAMPILKAN JasaBongkarBangunanPost
        JasaBongkarBangunanPostLink.style.visibility = 'visible';
	//TAMPILKAN JasaBongkarBetonPost
	JasaBongkarBetonPostLink.style.visibility = 'visible';
	
	pageNameJasaKonsBongkarBangunanPost.textContent = urlMappingJasaBongkarBeton[cleanUrlJasaKonsBongkarBangunanPost];
    }
if (urlMappingJasaBongkarAtap[cleanUrlJasaKonsBongkarBangunanPost]) {
        restoreCondition('JasaKonsBongkarBangunanPost');
	
        restoreCondition('JasaBongkarBangunanPost');
        restoreCondition('JasaBongkarAtapPost');
     
        //hapus elemen div id lain
	removeCondition('ProdukKonsSaluranPost');
        removeCondition('ProdukKonsPembatasPost');
        removeCondition('MaterialKonsStukturPost');
        removeCondition('JasaKonsPerkuatanTanahLongsorPost');
        removeCondition('JasaKonsPondasiTanahPost');
        removeCondition('JasaKonsPembatasPost');
        removeCondition('JasaKonsPerbaikanPost');
        removeCondition('JasaKonsPengeboranPost');
	
        //hapus elemen SUB jasa JasaBongkarBangunanPost semua SELAIN JasaBongkarAtapPost
        removeCondition('JasaBongkarBetonPost');
        removeCondition('JasaBongkarRumahPost');
        removeCondition('JasaBongkarKeramikPost');
        removeCondition('JasaBongkarTembokPost');
        removeCondition('JasaBongkarDindingPost');
        removeCondition('JasaBongkarPlafonPost');
        removeCondition('JasaBongkarPartisiPost');
        removeCondition('JasaBongkarPagarPost');
        removeCondition('JasaBongkarLantaiPost');
       
        JasaKonstruksiBongkarBangunanPostLink.style.visibility = 'visible';
	//TAMPILKAN JasaBongkarBangunanPost
        JasaBongkarBangunanPostLink.style.visibility = 'visible';
	//TAMPILKAN JasaBongkarAtapPost
	JasaBongkarAtapPostLink.style.visibility = 'visible';
	
	pageNameJasaKonsBongkarBangunanPost.textContent = urlMappingJasaBongkarAtap[cleanUrlJasaKonsBongkarBangunanPost];
    }
if (urlMappingJasaBongkarKeramik[cleanUrlJasaKonsBongkarBangunanPost]) {
        restoreCondition('JasaKonsBongkarBangunanPost');
	
        restoreCondition('JasaBongkarBangunanPost');
        restoreCondition('JasaBongkarKeramikPost');
     
        //hapus elemen div id lain
	removeCondition('ProdukKonsSaluranPost');
        removeCondition('ProdukKonsPembatasPost');
        removeCondition('MaterialKonsStukturPost');
        removeCondition('JasaKonsPerkuatanTanahLongsorPost');
        removeCondition('JasaKonsPondasiTanahPost');
        removeCondition('JasaKonsPembatasPost');
        removeCondition('JasaKonsPerbaikanPost');
        removeCondition('JasaKonsPengeboranPost');
	
        //hapus elemen SUB jasa JasaBongkarBangunanPost semua SELAIN JasaBongkarKeramikPost
        removeCondition('JasaBongkarBetonPost');
        removeCondition('JasaBongkarAtapPost');
        removeCondition('JasaBongkarRumahPost');
        removeCondition('JasaBongkarTembokPost');
        removeCondition('JasaBongkarDindingPost');
        removeCondition('JasaBongkarPlafonPost');
        removeCondition('JasaBongkarPartisiPost');
        removeCondition('JasaBongkarPagarPost');
        removeCondition('JasaBongkarLantaiPost');
       
        JasaKonstruksiBongkarBangunanPostLink.style.visibility = 'visible';
	//TAMPILKAN JasaBongkarBangunanPost
        JasaBongkarBangunanPostLink.style.visibility = 'visible';
	//TAMPILKAN JasaBongkarKeramikPost
	JasaBongkarKeramikPostLink.style.visibility = 'visible';
	
	pageNameJasaKonsBongkarBangunanPost.textContent = urlMappingJasaBongkarKeramik[cleanUrlJasaKonsBongkarBangunanPost];
    }
if (urlMappingJasaBongkarTembok[cleanUrlJasaKonsBongkarBangunanPost]) {
        restoreCondition('JasaKonsBongkarBangunanPost');
	
        restoreCondition('JasaBongkarBangunanPost');
        restoreCondition('JasaBongkarTembokPost');
     
        //hapus elemen div id lain
	removeCondition('ProdukKonsSaluranPost');
        removeCondition('ProdukKonsPembatasPost');
        removeCondition('MaterialKonsStukturPost');
        removeCondition('JasaKonsPerkuatanTanahLongsorPost');
        removeCondition('JasaKonsPondasiTanahPost');
        removeCondition('JasaKonsPembatasPost');
        removeCondition('JasaKonsPerbaikanPost');
        removeCondition('JasaKonsPengeboranPost');
	
        //hapus elemen SUB jasa JasaBongkarBangunanPost semua SELAIN JasaBongkarTembokPost
        removeCondition('JasaBongkarBetonPost');
        removeCondition('JasaBongkarAtapPost');
        removeCondition('JasaBongkarKeramikPost');
        removeCondition('JasaBongkarRumahPost');
        removeCondition('JasaBongkarDindingPost');
        removeCondition('JasaBongkarPlafonPost');
        removeCondition('JasaBongkarPartisiPost');
        removeCondition('JasaBongkarPagarPost');
        removeCondition('JasaBongkarLantaiPost');
       
        JasaKonstruksiBongkarBangunanPostLink.style.visibility = 'visible';
	//TAMPILKAN JasaBongkarBangunanPost
        JasaBongkarBangunanPostLink.style.visibility = 'visible';
	//TAMPILKAN JasaBongkarTembokPost
	JasaBongkarTembokPostLink.style.visibility = 'visible';
	
	pageNameJasaKonsBongkarBangunanPost.textContent = urlMappingJasaBongkarTembok[cleanUrlJasaKonsBongkarBangunanPost];
    }
if (urlMappingJasaBongkarDinding[cleanUrlJasaKonsBongkarBangunanPost]) {
        restoreCondition('JasaKonsBongkarBangunanPost');
	
        restoreCondition('JasaBongkarBangunanPost');
        restoreCondition('JasaBongkarDindingPost');
     
        //hapus elemen div id lain
	removeCondition('ProdukKonsSaluranPost');
        removeCondition('ProdukKonsPembatasPost');
        removeCondition('MaterialKonsStukturPost');
        removeCondition('JasaKonsPerkuatanTanahLongsorPost');
        removeCondition('JasaKonsPondasiTanahPost');
        removeCondition('JasaKonsPembatasPost');
        removeCondition('JasaKonsPerbaikanPost');
        removeCondition('JasaKonsPengeboranPost');
	
        //hapus elemen SUB jasa JasaBongkarBangunanPost semua SELAIN JasaBongkarDindingPost
        removeCondition('JasaBongkarBetonPost');
        removeCondition('JasaBongkarAtapPost');
        removeCondition('JasaBongkarKeramikPost');
        removeCondition('JasaBongkarTembokPost');
        removeCondition('JasaBongkarRumahPost');
        removeCondition('JasaBongkarPlafonPost');
        removeCondition('JasaBongkarPartisiPost');
        removeCondition('JasaBongkarPagarPost');
        removeCondition('JasaBongkarLantaiPost');
       
        JasaKonstruksiBongkarBangunanPostLink.style.visibility = 'visible';
	//TAMPILKAN JasaBongkarBangunanPost
        JasaBongkarBangunanPostLink.style.visibility = 'visible';
	//TAMPILKAN JasaBongkarDindingPost
	JasaBongkarDindingPostLink.style.visibility = 'visible';
	
	pageNameJasaKonsBongkarBangunanPost.textContent = urlMappingJasaBongkarDinding[cleanUrlJasaKonsBongkarBangunanPost];
    }
if (urlMappingJasaBongkarPlafon[cleanUrlJasaKonsBongkarBangunanPost]) {
        restoreCondition('JasaKonsBongkarBangunanPost');
	
        restoreCondition('JasaBongkarBangunanPost');
        restoreCondition('JasaBongkarPlafonPost');
     
        //hapus elemen div id lain
	removeCondition('ProdukKonsSaluranPost');
        removeCondition('ProdukKonsPembatasPost');
        removeCondition('MaterialKonsStukturPost');
        removeCondition('JasaKonsPerkuatanTanahLongsorPost');
        removeCondition('JasaKonsPondasiTanahPost');
        removeCondition('JasaKonsPembatasPost');
        removeCondition('JasaKonsPerbaikanPost');
        removeCondition('JasaKonsPengeboranPost');
	
        //hapus elemen SUB jasa JasaBongkarBangunanPost semua SELAIN JasaBongkarPlafonPost
        removeCondition('JasaBongkarBetonPost');
        removeCondition('JasaBongkarAtapPost');
        removeCondition('JasaBongkarKeramikPost');
        removeCondition('JasaBongkarTembokPost');
        removeCondition('JasaBongkarDindingPost');
        removeCondition('JasaBongkarRumahPost');
        removeCondition('JasaBongkarPartisiPost');
        removeCondition('JasaBongkarPagarPost');
        removeCondition('JasaBongkarLantaiPost');
       
        JasaKonstruksiBongkarBangunanPostLink.style.visibility = 'visible';
	//TAMPILKAN JasaBongkarBangunanPost
        JasaBongkarBangunanPostLink.style.visibility = 'visible';
	//TAMPILKAN JasaBongkarPlafonPost
	JasaBongkarPlafonPostLink.style.visibility = 'visible';
	
	pageNameJasaKonsBongkarBangunanPost.textContent = urlMappingJasaBongkarPlafon[cleanUrlJasaKonsBongkarBangunanPost];
    }
if (urlMappingJasaBongkarPartisi[cleanUrlJasaKonsBongkarBangunanPost]) {
        restoreCondition('JasaKonsBongkarBangunanPost');
	
        restoreCondition('JasaBongkarBangunanPost');
        restoreCondition('JasaBongkarPartisiPost');
     
        //hapus elemen div id lain
	removeCondition('ProdukKonsSaluranPost');
        removeCondition('ProdukKonsPembatasPost');
        removeCondition('MaterialKonsStukturPost');
        removeCondition('JasaKonsPerkuatanTanahLongsorPost');
        removeCondition('JasaKonsPondasiTanahPost');
        removeCondition('JasaKonsPembatasPost');
        removeCondition('JasaKonsPerbaikanPost');
        removeCondition('JasaKonsPengeboranPost');
	
        //hapus elemen SUB jasa JasaBongkarBangunanPost semua SELAIN JasaBongkarPartisiPost
        removeCondition('JasaBongkarBetonPost');
        removeCondition('JasaBongkarAtapPost');
        removeCondition('JasaBongkarKeramikPost');
        removeCondition('JasaBongkarTembokPost');
        removeCondition('JasaBongkarDindingPost');
        removeCondition('JasaBongkarPlafonPost');
        removeCondition('JasaBongkarRumahPost');
        removeCondition('JasaBongkarPagarPost');
        removeCondition('JasaBongkarLantaiPost');
       
        JasaKonstruksiBongkarBangunanPostLink.style.visibility = 'visible';
	//TAMPILKAN JasaBongkarBangunanPost
        JasaBongkarBangunanPostLink.style.visibility = 'visible';
	//TAMPILKAN JasaBongkarPartisiPost
	JasaBongkarPartisiPostLink.style.visibility = 'visible';
	
	pageNameJasaKonsBongkarBangunanPost.textContent = urlMappingJasaBongkarPartisi[cleanUrlJasaKonsBongkarBangunanPost];
    }
if (urlMappingJasaBongkarPagar[cleanUrlJasaKonsBongkarBangunanPost]) {
        restoreCondition('JasaKonsBongkarBangunanPost');
	
        restoreCondition('JasaBongkarBangunanPost');
        restoreCondition('JasaBongkarPagarPost');
     
        //hapus elemen div id lain
	removeCondition('ProdukKonsSaluranPost');
        removeCondition('ProdukKonsPembatasPost');
        removeCondition('MaterialKonsStukturPost');
        removeCondition('JasaKonsPerkuatanTanahLongsorPost');
        removeCondition('JasaKonsPondasiTanahPost');
        removeCondition('JasaKonsPembatasPost');
        removeCondition('JasaKonsPerbaikanPost');
        removeCondition('JasaKonsPengeboranPost');
	
        //hapus elemen SUB jasa JasaBongkarBangunanPost semua SELAIN JasaBongkarPagarPost
        removeCondition('JasaBongkarBetonPost');
        removeCondition('JasaBongkarAtapPost');
        removeCondition('JasaBongkarKeramikPost');
        removeCondition('JasaBongkarTembokPost');
        removeCondition('JasaBongkarDindingPost');
        removeCondition('JasaBongkarPlafonPost');
        removeCondition('JasaBongkarPartisiPost');
        removeCondition('JasaBongkarRumahPost');
        removeCondition('JasaBongkarLantaiPost');
       
        JasaKonstruksiBongkarBangunanPostLink.style.visibility = 'visible';
	//TAMPILKAN JasaBongkarBangunanPost
        JasaBongkarBangunanPostLink.style.visibility = 'visible';
	//TAMPILKAN JasaBongkarPagarPost
	JasaBongkarPagarPostLink.style.visibility = 'visible';
	
	pageNameJasaKonsBongkarBangunanPost.textContent = urlMappingJasaBongkarPagar[cleanUrlJasaKonsBongkarBangunanPost];
    }
if (urlMappingJasaBongkarLantai[cleanUrlJasaKonsBongkarBangunanPost]) {
        restoreCondition('JasaKonsBongkarBangunanPost');
	
        restoreCondition('JasaBongkarBangunanPost');
        restoreCondition('JasaBongkarLantaiPost');
     
        //hapus elemen div id lain
	removeCondition('ProdukKonsSaluranPost');
        removeCondition('ProdukKonsPembatasPost');
        removeCondition('MaterialKonsStukturPost');
        removeCondition('JasaKonsPerkuatanTanahLongsorPost');
        removeCondition('JasaKonsPondasiTanahPost');
        removeCondition('JasaKonsPembatasPost');
        removeCondition('JasaKonsPerbaikanPost');
        removeCondition('JasaKonsPengeboranPost');
	
        //hapus elemen SUB jasa JasaBongkarBangunanPost semua SELAIN JasaBongkarLantaiPost
        removeCondition('JasaBongkarBetonPost');
        removeCondition('JasaBongkarAtapPost');
        removeCondition('JasaBongkarKeramikPost');
        removeCondition('JasaBongkarTembokPost');
        removeCondition('JasaBongkarDindingPost');
        removeCondition('JasaBongkarPlafonPost');
        removeCondition('JasaBongkarPartisiPost');
        removeCondition('JasaBongkarPagarPost');
        removeCondition('JasaBongkarRumahPost');
       
        JasaKonstruksiBongkarBangunanPostLink.style.visibility = 'visible';
	//TAMPILKAN JasaBongkarBangunanPost
        JasaBongkarBangunanPostLink.style.visibility = 'visible';
	//TAMPILKAN JasaBongkarLantaiPost
	JasaBongkarLantaiPostLink.style.visibility = 'visible';
	
	pageNameJasaKonsBongkarBangunanPost.textContent = urlMappingJasaBongkarLantai[cleanUrlJasaKonsBongkarBangunanPost];
    }

   });
