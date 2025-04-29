
// SUB JasaAlatKonstruksi
const urlMappingSewaAlatBerat = {

};
const urlMappingSewaAlatKonstruksiRingan = {

};

// Menyimpan elemen yang dihapus dalam variabel
let removedElementsJasaKonsAlatKonstruksiPost = {};
// Fungsi untuk menghapus elemen berdasarkan ID
function removeCondition(conditionId) {
    const conditionElement = document.getElementById(conditionId);

    if (conditionElement) {
        // Menyimpan elemen yang dihapus dalam objek untuk bisa dikembalikan
        removedElementsJasaKonsAlatKonstruksiPost[conditionId] = conditionElement;
        conditionElement.remove(); // Menghapus elemen tersebut
    }
}

// Fungsi untuk mengembalikan elemen yang telah dihapus
function restoreCondition(conditionId) {
    const breadcrumb = document.querySelector('.breadcrumb');
    const elementToRestore = removedElementsJasaKonsAlatKonstruksiPost[conditionId]; // Mendapatkan elemen yang disimpan

    if (elementToRestore) {
        breadcrumb.appendChild(elementToRestore); // Menambahkan elemen kembali ke dalam breadcrumb
        delete removedElementsJasaKonsAlatKonstruksiPost[conditionId]; // Menghapus elemen dari objek setelah dikembalikan
    } else {
        console.log(`Elemen dengan ID ${conditionId} tidak ditemukan di removedElementsJasaKonsAlatKonstruksiPost.`);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    // var currentUrl = window.location.href;
     //const cleanUrl = currentUrl.split('?')[0]; // Menghapus parameter seperti ?m=1
    const cleanUrlJasaKonsAlatKonstruksiPost = window.location.href.split(/[?#]/)[0]; // Menghilangkan parameter seperti ?m=1
     // Menemukan elemen menggunakan Id
    var JasaKonsAlatKonstruksiPost = document.getElementById("JasaKonsAlatKonstruksiPost");

    if (!JasaKonsAlatKonstruksiPost) {
        console.error("elemen Id JasaKonsAlatKonstruksiPost kondisi terhapus");
        return;
    }

     var JasaKonstruksiAlatKonstruksiPostLink = document.getElementById("JasaKonstruksiAlatKonstruksiPost");
     var JasaAlatKonstruksiPostLink = document.getElementById("JasaAlatKonstruksiPost");
     var SewaAlatKonstruksiPostLink = document.getElementById("SewaAlatKonstruksiPost");
     var SewaAlatBeratPostLink = document.getElementById("SewaAlatBeratPost");
     var SewaAlatKonstruksiRinganPostLink = document.getElementById("SewaAlatKonstruksiRinganPost");

     var pageNameJasaKonsAlatKonstruksiPost = document.getElementById("pageNameJasaKonsAlatKonstruksiPost");
    

     // Default untuk menyembunyikan elemen
     JasaKonstruksiAlatKonstruksiPostLink.style.visibility = 'hidden';
     JasaAlatKonstruksiPostLink.style.visibility = 'hidden';
     SewaAlatKonstruksiPostLink.style.visibility = 'hidden';
     SewaAlatBeratPostLink.style.visibility = 'hidden';
     SewaAlatKonstruksiRinganPostLink.style.visibility = 'hidden';
	
     pageNameJasaKonsAlatKonstruksiPost.textContent = "";
	
    //SUB urlMappingPembuatanPagarDinding

if (urlMappingSewaAlatBerat[cleanUrlJasaKonsAlatKonstruksiPost]) {
        restoreCondition('JasaKonsAlatKonstruksiPost');
       // restoreCondition('JasaAlatKonstruksiPost');
        restoreCondition('SewaAlatBeratPost');
	       
     
        //hapus elemen div id lain
	      removeCondition('ProdukKonsSaluranPost');
        removeCondition('ProdukKonsPembatasPost');
        removeCondition('ProdukKonsPost');
        removeCondition('MaterialKonsStukturPost');
        removeCondition('MaterialKonsFasadPelapisEksteriorPost');
	      removeCondition('MaterialKonsAtapPenutupPost');
        removeCondition('JasaKonsPondasiTanahPost');
        removeCondition('JasaKonsPerkuatanTanahLongsorPost');
        removeCondition('JasaKonsPerbaikanPost');
        removeCondition('JasaKonsBongkarBangunanPost');
        removeCondition('JasaKonsPengeboranPost');
        removeCondition('JasaKonsFinishingPost');
        removeCondition('JasaKonsStrukturPost');
        removeCondition('JasaKonsPembatasPost');
	
        //hapus elemen SUB JasaAlatKonstruksiPost lain selain SewaAlatBeratPost
        //removeCondition('SewaAlatBeratPost');
        removeCondition('SewaAlatKonstruksiRinganPost');
    
        JasaKonstruksiAlatKonstruksiPostLink.style.visibility = 'visible';
        JasaAlatKonstruksiPostLink.style.visibility = 'visible';
        SewaAlatKonstruksiPostLink.style.visibility = 'visible';
	//TAMPILKAN SewaAlatBeratPost
        SewaAlatBeratPostLink.style.visibility = 'visible';
        pageNameJasaKonsAlatKonstruksiPost.textContent = urlMappingSewaAlatBerat[cleanUrlJasaKonsAlatKonstruksiPost];
    }
if (urlMappingSewaAlatKonstruksiRingan[cleanUrlJasaKonsAlatKonstruksiPost]) {
        restoreCondition('JasaKonsAlatKonstruksiPost');
       // restoreCondition('JasaAlatKonstruksiPost');
        restoreCondition('SewaAlatKonstruksiRinganPost');
	       
     
        //hapus elemen div id lain
	      removeCondition('ProdukKonsSaluranPost');
        removeCondition('ProdukKonsPembatasPost');
        removeCondition('ProdukKonsPost');
        removeCondition('MaterialKonsStukturPost');
        removeCondition('MaterialKonsFasadPelapisEksteriorPost');
	      removeCondition('MaterialKonsAtapPenutupPost');
        removeCondition('JasaKonsPondasiTanahPost');
        removeCondition('JasaKonsPerkuatanTanahLongsorPost');
        removeCondition('JasaKonsPerbaikanPost');
        removeCondition('JasaKonsBongkarBangunanPost');
        removeCondition('JasaKonsPengeboranPost');
        removeCondition('JasaKonsFinishingPost');
        removeCondition('JasaKonsStrukturPost');
        removeCondition('JasaKonsPembatasPost');
	
        //hapus elemen SUB JasaAlatKonstruksiPost lain selain SewaAlatBeratPost
        //removeCondition('SewaAlatBeratPost');
        removeCondition('SewaAlatBeratPost');
    
        JasaKonstruksiAlatKonstruksiPostLink.style.visibility = 'visible';
        JasaAlatKonstruksiPostLink.style.visibility = 'visible';
        SewaAlatKonstruksiPostLink.style.visibility = 'visible';
	//TAMPILKAN SewaAlatBeratPost
        SewaAlatKonstruksiRinganPostLink.style.visibility = 'visible';
        pageNameJasaKonsAlatKonstruksiPost.textContent = urlMappingSewaAlatKonstruksiRingan[cleanUrlJasaKonsAlatKonstruksiPost];
    }
    
   });
