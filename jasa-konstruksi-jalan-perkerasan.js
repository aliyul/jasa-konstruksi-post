
const urlMappingJasaPembangunanInfrastrukturJalan = {
"https://www.betonjayareadymix.com/p/jasa-pembangunan-jalan-akses-proyek.html": "Jasa Pembangunan Jalan Akses Proyek",
  "https://www.betonjayareadymix.com/p/jasa-pembangunan-jalan-trotoar.html": "Jasa Pembangunan Jalan Trotoar",
  "https://www.betonjayareadymix.com/p/jasa-pembangunan-jalan-setapak.html": "Jasa Pembangunan Jalan Setapak",
  "https://www.betonjayareadymix.com/p/jasa-pembangunan-jalan-setapak-trotoar.html": "Jasa Pembangunan Jalan Setapak Trotoar",
  "https://www.betonjayareadymix.com/p/jasa-pembangunan-area-pejalan-kaki.html": "Jasa Pembangunan Area Pejalan Kaki",
  "https://www.betonjayareadymix.com/p/jasa-pembangunan-jalan-lingkungan.html": "Jasa Pembangunan Jalan Lingkungan",
  "https://www.betonjayareadymix.com/p/jasa-pembangunan-jalan-perdesaan.html": "Jasa Pembangunan Jalan Perdesaan",
  "https://www.betonjayareadymix.com/p/jasa-pembangunan-jalan-raya.html": "Jasa Pembangunan Jalan Raya",
  "https://www.betonjayareadymix.com/p/jasa-pembangunan-jalan-kawasan-industri.html": "Jasa Pembangunan Jalan Kawasan Industri",
  "https://www.betonjayareadymix.com/p/jasa-pembangunan-jalan-perumahan.html": "Jasa Pembangunan Jalan Perumahan"

};

const urlMappingJasaPemadatanPersiapanTanahJalan = {
"https://www.betonjayareadymix.com/p/jasa-pengupasan-lahan-jalan.html": "Jasa Pengupasan Lahan Jalan",
  "https://www.betonjayareadymix.com/p/jasa-cut-and-fill-jalan.html": "Jasa Cut and Fill Jalan",
  "https://www.betonjayareadymix.com/p/jasa-urugan-tanah-jalan.html": "Jasa Urugan Tanah Jalan",
  "https://www.betonjayareadymix.com/p/jasa-pemadatan-tanah-jalan.html": "Jasa Pemadatan Tanah Jalan",
  "https://www.betonjayareadymix.com/p/jasa-stabilisasi-tanah-jalan.html": "Jasa Stabilisasi Tanah Jalan",
  "https://www.betonjayareadymix.com/p/jasa-perkerasan-tanah-subgrade.html": "Jasa Perkerasan Tanah Subgrade"

};

const urlMappingJasaPerkerasanJalan = {
"https://www.betonjayareadymix.com/p/jasa-timbunan-subbase-jalan.html": "Jasa Timbunan Subbase Jalan",
  "https://www.betonjayareadymix.com/p/jasa-perkerasan-base-course-jalan.html": "Jasa Perkerasan Base Course Jalan",
  "https://www.betonjayareadymix.com/p/jasa-perkerasan-jalan-kerikil.html": "Jasa Perkerasan Jalan Kerikil",
  "https://www.betonjayareadymix.com/p/jasa-perkuatan-dasar-tanah-jalan.html": "Jasa Perkuatan Dasar Tanah Jalan",
  "https://www.betonjayareadymix.com/p/jasa-perkerasan-jalan-beton.html": "Jasa Perkerasan Jalan Beton",
  "https://www.betonjayareadymix.com/p/jasa-perkerasan-jalan-aspal.html": "Jasa Perkerasan Jalan Aspal",
  "https://www.betonjayareadymix.com/p/jasa-perkerasan-jalan-semi-rigid.html": "Jasa Perkerasan Jalan Semi Rigid",
  "https://www.betonjayareadymix.com/p/jasa-perkerasan-jalan-komposit.html": "Jasa Perkerasan Jalan Komposit",
/* jadi sub page Jasa Perkerasan Jalan Beton
  "https://www.betonjayareadymix.com/p/jasa-perkerasan-jalan-rabat-beton.html": "Jasa Perkerasan Jalan Rabat Beton"
  */
/* jadi sub page Jasa Perkerasan Jalan Aspal
  "https://www.betonjayareadymix.com/p/jasa-perkerasan-jalan-aspal-hotmix.html": "Jasa Perkerasan Jalan Aspal Hotmix"
  */
  "https://www.betonjayareadymix.com/p/jasa-perkerasan-agregat-jalan.html": "Jasa Perkerasan Agregat Jalan",
  "https://www.betonjayareadymix.com/p/jasa-pengerasan-jalan.html": "Jasa Pengerasan Jalan",
  "https://www.betonjayareadymix.com/p/jasa-pengecoran-jalan-beton.html": "Jasa Pengecoran Jalan Beton",
  "https://www.betonjayareadymix.com/p/jasa-pengaspalan-jalan.html": "Jasa Pengaspalan Jalan",
  "https://www.betonjayareadymix.com/p/jasa-paving-block-jalan.html": "Jasa Paving Block Jalan"
/*  jadi sub page Jasa Paving Block Jalan
  "https://www.betonjayareadymix.com/p/jasa-pemasangan-paving-block.html": "Jasa Pemasangan Paving Block" */

};

// Menyimpan elemen yang dihapus dalam variabel
let removedElementsJasaJalanPerkerasanKons = {};
// Fungsi untuk menghapus elemen berdasarkan ID
function removeCondition(conditionId) {
    const conditionElement = document.getElementById(conditionId);

    if (conditionElement) {
        // Menyimpan elemen yang dihapus dalam objek untuk bisa dikembalikan
        removedElementsJasaJalanPerkerasanKons[conditionId] = conditionElement;
        conditionElement.remove(); // Menghapus elemen tersebut
    }
}

// Fungsi untuk mengembalikan elemen yang telah dihapus
function restoreCondition(conditionId) {
    const breadcrumb = document.querySelector('.breadcrumb');
    const elementToRestore = removedElementsJasaJalanPerkerasanKons[conditionId]; // Mendapatkan elemen yang disimpan

    if (elementToRestore) {
        breadcrumb.appendChild(elementToRestore); // Menambahkan elemen kembali ke dalam breadcrumb
        delete removedElementsJasaJalanPerkerasanKons[conditionId]; // Menghapus elemen dari objek setelah dikembalikan
    } else {
        console.log(`Elemen dengan ID ${conditionId} tidak ditemukan di removedElementsJasaJalanPerkerasanKons.`);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    // var currentUrl = window.location.href;
     //const cleanUrl = currentUrl.split('?')[0]; // Menghapus parameter seperti ?m=1
    const cleanUrlJasaJalanPerkerasanKons = window.location.href.split(/[?#]/)[0]; // Menghilangkan parameter seperti ?m=1

     // Menemukan elemen menggunakan Id
    var JasaKonsJalanPerkerasan = document.getElementById("JasaKonsJalanPerkerasan");

    if (!JasaKonsJalanPerkerasan) {
        console.error("elemen Id JasaKonsJalanPerkerasan kondisi terhapus");
        return;
    }
    
	
     var JasaKonstruksiJalanPerkerasanSubLink = document.getElementById("JasaKonstruksiJalanPerkerasanSub");
     var JasaJalanPerkerasanSubLink = document.getElementById("JasaJalanPerkerasanSub");

     //SUB JASA JALAN & PERKERASAN
     var JasaPembangunanInfrastrukturJalanSubLink = document.getElementById("JasaPembangunanInfrastrukturJalanSub");
     var JasaPemadatanPersiapanTanahJalanSubLink = document.getElementById("JasaPemadatanPersiapanTanahJalanSub");
     var JasaPerkerasanJalanSubLink = document.getElementById("JasaPerkerasanJalanSub");

	
     var pageNameJasaKonsJalanPerkerasan = document.getElementById("pageNameJasaKonsJalanPerkerasan");
    

     // Default untuk menyembunyikan elemen
     JasaKonstruksiJalanPerkerasanSubLink.style.visibility = 'hidden';
     JasaJalanPerkerasanSubLink.style.visibility = 'hidden';
	
     //SUB JASA JALAN & PERKERASAN
     JasaPembangunanInfrastrukturJalanSubLink.style.visibility = 'hidden';
     JasaPemadatanPersiapanTanahJalanSubLink.style.visibility = 'hidden';
     JasaPerkerasanJalanSubLink.style.visibility = 'hidden';

     pageNameJasaKonsJalanPerkerasan.textContent = "";

    if (urlMappingJasaPembangunanInfrastrukturJalan[cleanUrlJasaJalanPerkerasanKons]) {
        restoreCondition('JasaKonsJalanPerkerasan');
        restoreCondition('JasaPembangunanInfrastrukturJalanSub');
     
        //hapus elemen div id lain
        removeCondition('materialKonsReadymix');
        removeCondition('ProdukKonsSaluran');
        removeCondition('ProdukKonsPembatasPost');
        removeCondition('JasaKonsPerbaikan');
       	removeCondition('JasaKons');
       	removeCondition('JasaKonsSub');
       	removeCondition('MenuKons');
       	removeCondition('JasaKonsFinishing');
        removeCondition('JasaKonsStruktur');
        removeCondition('JasaKonsPondasiTanah');
        removeCondition('JasaKonsPembatas');
/*
JasaKonsJalanPerkerasan
JasaKonstruksiJalanPerkerasanSub
JasaJalanPerkerasanSub


JasaPembangunanInfrastrukturJalanSub
JasaPemadatanPersiapanTanahJalanSub
JasaPerkerasanJalanSub
*/

        //hapus elemen SUB jasa pembatas lain
        removeCondition('JasaPemadatanPersiapanTanahJalanSub');
        removeCondition('JasaPerkerasanJalanSub');
	
        JasaKonstruksiJalanPerkerasanSubLink.style.visibility = 'visible';
        JasaJalanPerkerasanSubLink.style.visibility = 'visible';
	    
        JasaPembangunanInfrastrukturJalanSubLink.style.visibility = 'visible';
        pageNameJasaKonsJalanPerkerasan.textContent = urlMappingJasaPembangunanInfrastrukturJalan[cleanUrlJasaJalanPerkerasanKons];
    }
       
   if (urlMappingJasaPemadatanPersiapanTanahJalan[cleanUrlJasaJalanPerkerasanKons]) {
        restoreCondition('JasaKonsJalanPerkerasan');
        restoreCondition('JasaPemadatanPersiapanTanahJalanSub');
     
        //hapus elemen div id lain
        removeCondition('materialKonsReadymix');
        removeCondition('ProdukKonsSaluran');
        removeCondition('ProdukKonsPembatasPost');
        removeCondition('JasaKonsPerbaikan');
       	removeCondition('JasaKons');
       	removeCondition('JasaKonsSub');
       	removeCondition('MenuKons');
       	removeCondition('JasaKonsFinishing');
        removeCondition('JasaKonsStruktur');
        removeCondition('JasaKonsPondasiTanah');
        removeCondition('JasaKonsPembatas');

        //hapus elemen SUB jasa pembatas lain
        removeCondition('JasaPembangunanInfrastrukturJalanSub');
        removeCondition('JasaPerkerasanJalanSub');
	
        JasaKonstruksiJalanPerkerasanSubLink.style.visibility = 'visible';
        JasaJalanPerkerasanSubLink.style.visibility = 'visible';
	    
        JasaPemadatanPersiapanTanahJalanSubLink.style.visibility = 'visible';
        pageNameJasaKonsJalanPerkerasan.textContent = urlMappingJasaPemadatanPersiapanTanahJalan[cleanUrlJasaJalanPerkerasanKons];
    }
       
   if (urlMappingJasaPerkerasanJalan[cleanUrlJasaJalanPerkerasanKons]) {
        restoreCondition('JasaKonsJalanPerkerasan');
        restoreCondition('JasaPerkerasanJalanSub');
     
        //hapus elemen div id lain
        removeCondition('materialKonsReadymix');
        removeCondition('ProdukKonsSaluran');
        removeCondition('ProdukKonsPembatasPost');
        removeCondition('JasaKonsPerbaikan');
       	removeCondition('JasaKons');
       	removeCondition('JasaKonsSub');
       	removeCondition('MenuKons');
       	removeCondition('JasaKonsFinishing');
        removeCondition('JasaKonsStruktur');
        removeCondition('JasaKonsPondasiTanah');
        removeCondition('JasaKonsPembatas');

        //hapus elemen SUB jasa pembatas lain
        removeCondition('JasaPemadatanPersiapanTanahJalanSub');
        removeCondition('JasaPembangunanInfrastrukturJalanSub');
	
        JasaKonstruksiJalanPerkerasanSubLink.style.visibility = 'visible';
        JasaJalanPerkerasanSubLink.style.visibility = 'visible';
	    
        JasaPerkerasanJalanSubLink.style.visibility = 'visible';
        pageNameJasaKonsJalanPerkerasan.textContent = urlMappingJasaPerkerasanJalan[cleanUrlJasaJalanPerkerasanKons];
    }
       
   });
