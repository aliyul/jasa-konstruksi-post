
// SUB JasaAlatKonstruksi
const urlMappingSewaAlatBerat = {

};
const urlMappingSewaAlatKonstruksiRingan = {
  "https://www.betonjayareadymix.com/2019/02/jasa-sewa-alat-cleaning.html": "Jasa Sewa Alat Cleaning",
  "https://www.betonjayareadymix.com/2019/02/sewa-mesin-polisher.html": "Sewa Mesin Polisher",

  "https://www.betonjayareadymix.com/2019/02/harga-sewa-concrete-cutter.html": "Harga Sewa Concrete Cutter",
  "https://www.betonjayareadymix.com/2019/02/harga-sewa-jack-hammer.html": "Harga Sewa Jack Hammer",
  "https://www.betonjayareadymix.com/2019/02/sewa-jack-hammer.html": "Sewa Jack Hammer",
  "https://www.betonjayareadymix.com/2019/02/harga-sewa-mesin-vibrator-beton.html": "Harga Sewa Mesin Vibrator Beton",
  "https://www.betonjayareadymix.com/2019/02/sewa-mesin-vibrator-beton.html": "Sewa Mesin Vibrator Beton",

  "https://www.betonjayareadymix.com/2019/02/harga-sewa-mesin-molen.html": "Harga Sewa Mesin Molen",
  "https://www.betonjayareadymix.com/2019/02/sewa-mesin-molen.html": "Sewa Mesin Molen",

  "https://www.betonjayareadymix.com/2019/02/harga-sewa-mesin-genset.html": "Harga Sewa Mesin Genset",
  "https://www.betonjayareadymix.com/2019/02/sewa-mesin-genset.html": "Sewa Mesin Genset",
  "https://www.betonjayareadymix.com/2019/02/harga-sewa-mesin-compressor.html": "Harga Sewa Mesin Compressor",
  "https://www.betonjayareadymix.com/2019/02/sewa-mesin-compressor.html": "Sewa Mesin Compressor",

  "https://www.betonjayareadymix.com/2019/02/harga-sewa-mesin-cutting-beton.html": "Harga Sewa Mesin Cutting Beton",
  "https://www.betonjayareadymix.com/2019/02/sewa-cutting-beton-terdekat.html": "Sewa Cutting Beton Terdekat",

  "https://www.betonjayareadymix.com/2019/02/harga-sewa-mesin-potong-rumput.html": "Harga Sewa Mesin Potong Rumput",
  "https://www.betonjayareadymix.com/2019/02/sewa-mesin-potong-rumput.html": "Sewa Mesin Potong Rumput",

  "https://www.betonjayareadymix.com/2019/02/sewa-alat-bor-sumur.html": "Sewa Alat Bor Sumur",

  "https://www.betonjayareadymix.com/2019/02/harga-sewa-mesin-trowel.html": "Harga Sewa Mesin Trowel",
  "https://www.betonjayareadymix.com/2019/02/harga-sewa-mesin-screed.html": "Harga Sewa Mesin Screed",

  "https://www.betonjayareadymix.com/2019/02/harga-sewa-pompa-air.html": "Harga Sewa Pompa Air",

  "https://www.betonjayareadymix.com/2019/02/harga-sewa-stamper.html": "Harga Sewa Stamper",

  "https://www.betonjayareadymix.com/2019/02/sewa-screed.html": "Sewa Screed",
  "https://www.betonjayareadymix.com/2019/02/sewa-trowel.html": "Sewa Trowel"
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
