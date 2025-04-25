/*
const urlMappingStrukturBajaRangka = {
"https://www.betonjayareadymix.com/p/jasa-rangka-atap-baja-ringan.html": "Jasa Rangka Atap Baja Ringan",
  "https://www.betonjayareadymix.com/p/jasa-konstruksi-baja-konvensional.html": "Jasa Konstruksi Baja Konvensional",
  "https://www.betonjayareadymix.com/p/jasa-kanopi-baja-dan-besi.html": "Jasa Kanopi Baja dan Besi",
  "https://www.betonjayareadymix.com/p/jasa-struktur-baja-gudang.html": "Jasa Struktur Baja Gudang"

};
*/
//SUB JasaStrukturBajadanRangkaRinganPost
const urlMappingJasaRangkaAtapBajaRingan = {

};
const urlMappingJasaKonstruksiBajaKonvensional = {

};
const urlMappingJasaKanopiBajadanBesi = {

};
const urlMappingJasaStrukturBajaGudang = {

};

// Menyimpan elemen yang dihapus dalam variabel
let removedElementsJasakonstruksistrukturPost = {};
function removeCondition(conditionId) {
    const conditionElement = document.getElementById(conditionId);

    if (conditionElement) {
        // Menyimpan elemen yang dihapus dalam objek untuk bisa dikembalikan
        removedElementsJasakonstruksistrukturPost[conditionId] = conditionElement1;
        conditionElement.remove(); // Menghapus elemen tersebut
    }
}

// Fungsi untuk mengembalikan elemen yang telah dihapus
function restoreCondition(conditionId) {
    const breadcrumb = document.querySelector('.breadcrumb');
    const elementToRestore = removedElementsJasakonstruksistrukturPost[conditionId]; // Mendapatkan elemen yang disimpan

    if (elementToRestore) {
        breadcrumb.appendChild(elementToRestore); // Menambahkan elemen kembali ke dalam breadcrumb
        delete removedElementsJasakonstruksistrukturPost[conditionId]; // Menghapus elemen dari objek setelah dikembalikan
    } else {
        console.log(`Elemen dengan ID ${conditionId} tidak ditemukan di removedElementsJasakonstruksistrukturPost.`);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    // var currentUrl = window.location.href;
     //const cleanUrl = currentUrl.split('?')[0]; // Menghapus parameter seperti ?m=1
    const cleanUrlJasaJasaKonsStrukturPost = window.location.href.split(/[?#]/)[0]; // Menghilangkan parameter seperti ?m=1

     // Menemukan elemen menggunakan Id
    //var JasaKonsPerbaikan = document.getElementById("JasaKonsPerbaikan");
    var JasaKonsStrukturPost = document.getElementById("JasaKonsStrukturPost");

if (!JasaKonsStruktur) {
     console.error("elemen Id JasaKonsPerbaikanPost kondisi terhapus");	
} else {
	
     var JasaKonstruksiStrukturPostLink = document.getElementById("JasaKonstruksiStrukturPost");
     var JasaStrukturKonstruksiPostLink = document.getElementById("JasaStrukturKonstruksiPost");
    //SUB JasaStrukturKonstruksi
     var JasaKonstruksiGedungdanHunianPostLink = document.getElementById("JasaKonstruksiGedungdanHunianPost");
     var JasaKonstruksiIndustridanGudangPostLink = document.getElementById("JasaKonstruksiIndustridanGudangPost");
     var JasaStrukturBajadanRangkaRinganPostLink = document.getElementById("JasaStrukturBajadanRangkaRinganPost");
     var JasaStrukturKhususPostLink = document.getElementById("JasaStrukturKhususPost");
     var JasaKonstruksiLapanganOlahragaPostLink = document.getElementById("JasaKonstruksiLapanganOlahragaPost");
     var JasaKonstruksiModulardanPrecastPostLink = document.getElementById("JasaKonstruksiModulardanPrecastPost");
     var JasaStrukturBetondanPengecoranPostLink = document.getElementById("JasaStrukturBetondanPengecoranPost");
	
     //SUB JasaKonstruksiStrukturPost
     var JasaRangkaAtapBajaRinganPostLink = document.getElementById("JasaRangkaAtapBajaRinganPost");
     var JasaKonstruksiBajaKonvensionalPostLink = document.getElementById("JasaKonstruksiBajaKonvensionalPost");
     var JasaKanopiBajadanBesiPostLink = document.getElementById("JasaKanopiBajadanBesiPost");
     var JasaStrukturBajaGudangPostLink = document.getElementById("JasaStrukturBajaGudangPost");
    	
     var pageNameJasaKonsStrukturPost = document.getElementById("pageNameJasaKonsStrukturPost");

    
     //hide SUB JasaKonstruksiStrukturPost     
      JasaRangkaAtapBajaRinganPostLink.style.visibility = 'hidden';
      JasaKonstruksiBajaKonvensionalPostLink.style.visibility = 'hidden';
      JasaKanopiBajadanBesiPostLink.style.visibility = 'hidden';
      JasaStrukturBajaGudangPostLink.style.visibility = 'hidden';

	
     // Default untuk menyembunyikan elemen
     JasaKonstruksiStrukturPostLink.style.visibility = 'hidden';
     JasaStrukturKonstruksiPostLink.style.visibility = 'hidden';
    
     //Hide SUB JasaStrukturKonstruksi
     JasaKonstruksiGedungdanHunianPostLink.style.visibility = 'hidden';
     JasaKonstruksiIndustridanGudangPostLink.style.visibility = 'hidden';
     JasaStrukturBajadanRangkaRinganPostLink.style.visibility = 'hidden';
     JasaStrukturKhususPostLink.style.visibility = 'hidden';
     JasaKonstruksiLapanganOlahragaPostLink.style.visibility = 'hidden';
     JasaKonstruksiModulardanPrecastPostLink.style.visibility = 'hidden';
     JasaStrukturBetondanPengecoranPostLink.style.visibility = 'hidden';
	
     pageNameJasaKonsStrukturPost.textContent = "";
	
if (urlMappingJasaRangkaAtapBajaRingan[cleanUrlJasaJasaKonsStrukturPost]) {
        restoreCondition('JasaKonsStrukturPost');
        restoreCondition('JasaStrukturBajadanRangkaRinganPost');
        restoreCondition('JasaRangkaAtapBajaRinganPost');

       //hapus elemen div id lain
        removeCondition('ProdukKonsPembatasPost');
        removeCondition('MaterialKonsStukturPost');
        removeCondition('JasaKonsPerkuatanTanahLongsorPost');
        removeCondition('JasaKonsPondasiTanahPost');
        removeCondition('JasaKonsPembatasPost');
        removeCondition('JasaKonsPerbaikanPost');
	removeCondition('JasaKonsBongkarBangunanPost');
        removeCondition('JasaKonsPengeboranPost'); 
	removeCondition('JasaKonsFinishingPost');
        removeCondition('ProdukKonsSaluranPost');

	 //hapus elemen id JasaStrukturBajadanRangkaRinganPost SELAIN JasaRangkaAtapBajaRinganPost
        removeCondition('JasaKonstruksiBajaKonvensionalPost');
        removeCondition('JasaKanopiBajadanBesiPost');
        removeCondition('JasaStrukturBajaGudangPost');
      
	/*
JasaKonstruksiGedungdanHunianPost
JasaKonstruksiIndustridanGudangPost
JasaStrukturBajadanRangkaRinganPost
JasaStrukturKhusus
JasaKonstruksiLapanganOlahragaPost
JasaKonstruksiModulardanPrecastPost
JasaStrukturBetondanPengecoranPost
*/
       //HAPUS ELEMEN LAIN DI JasaKonsStruktur SELAIN JasaStrukturBajadanRangkaRinganPost
        removeCondition('JasaKonstruksiIndustridanGudangPost');
        removeCondition('JasaKonstruksiGedungdanHunianPost');
        removeCondition('JasaStrukturKhususPost');
	removeCondition('JasaKonstruksiLapanganOlahragaPost');
	removeCondition('JasaKonstruksiModulardanPrecastPost');
	removeCondition('JasaStrukturBetondanPengecoranPost');
       
        JasaKonstruksiStrukturPostLink.style.visibility = 'visible';
        JasaStrukturKonstruksiPostLink.style.visibility = 'visible';
	//TAMPILKAN JasaStrukturBajadanRangkaRinganPostLink
        JasaStrukturBajadanRangkaRinganPostLink.style.visibility = 'visible';
	//TAMPILKAN JasaRangkaAtapBajaRinganPostLink
        JasaRangkaAtapBajaRinganPostLink.style.visibility = 'visible';
        pageNameJasaKonsStrukturPost.textContent = urlMappingJasaRangkaAtapBajaRingan[cleanUrlJasaJasaKonsStrukturPost];
    }

}
	
   });
