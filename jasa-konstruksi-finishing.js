 // Cek URL saat ini dan sesuaikan dengan kondisi yang diinginkan
const urlMappingFinishingBangunan = {
 "https://www.betonjayareadymix.com/p/jasa-finishing-interior.html": "Jasa Finishing Interior",
  "https://www.betonjayareadymix.com/p/jasa-finishing-eksterior.html": "Jasa Finishing Eksterior",
  "https://www.betonjayareadymix.com/p/jasa-finishing-struktur.html": "Jasa Finishing Struktur"

 /*
 "https://www.betonjayareadymix.com/p/jasa-renovasi-dinding-plester-acian.html": "Jasa Renovasi Dinding Plester Acian",
 "https://www.betonjayareadymix.com/p/jasa-plester-acian.html": "Jasa Plester Acian",
*/
};

const urlMappingFinishingBangunanInterior = {

};

const urlMappingFinishingBangunanEksterior = {

};

const urlMappingFinishingBangunanStruktur = {
 
};


const urlMappingFinishingInfrastruktur = {
  "https://www.betonjayareadymix.com/p/jasa-finishing-jalan-jembatan.html": "Jasa Finishing Jalan Jembatan",
  "https://www.betonjayareadymix.com/p/jasa-finishing-trotoar-area-publik.html": "Jasa Finishing Trotoar Area Publik",
  "https://www.betonjayareadymix.com/p/jasa-finishing-saluran-drainase.html": "Jasa Finishing Saluran Drainase",
  "https://www.betonjayareadymix.com/p/jasa-finishing-struktur-utilitas.html": "Jasa Finishing Struktur Utilitas",
  "https://www.betonjayareadymix.com/p/jasa-finishing-proteksi-beton.html": "Jasa Finishing Proteksi Beton"
};

const urlMappingFinishingInfrastrukturJalan = {
 
};

const urlMappingFinishingInfrastrukturTrotoar = {
 
};

const urlMappingFinishingInfrastrukturSaluran = {
  
};

const urlMappingFinishingInfrastrukturStruktur = {
 
};

const urlMappingFinishingInfrastrukturProteksi = {
 
};

// Menyimpan elemen yang dihapus dalam variabel
let removedElementsJasaKonsFinishing = {};
// Fungsi untuk menghapus elemen berdasarkan ID
function removeCondition(conditionId) {
    const conditionElement = document.getElementById(conditionId);

    if (conditionElement) {
        // Menyimpan elemen yang dihapus dalam objek untuk bisa dikembalikan
        removedElementsJasaKonsFinishing[conditionId] = conditionElement;
        conditionElement.remove(); // Menghapus elemen tersebut
    }
}

// Fungsi untuk mengembalikan elemen yang telah dihapus
function restoreCondition(conditionId) {
    const breadcrumb = document.querySelector('.breadcrumb');
    const elementToRestore = removedElementsJasaKonsFinishing[conditionId]; // Mendapatkan elemen yang disimpan

    if (elementToRestore) {
        breadcrumb.appendChild(elementToRestore); // Menambahkan elemen kembali ke dalam breadcrumb
        delete removedElementsJasaKonsFinishing[conditionId]; // Menghapus elemen dari objek setelah dikembalikan
    } else {
        console.log(`Elemen dengan ID ${conditionId} tidak ditemukan di removedElementsJasaKonsFinishing.`);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    // var currentUrl = window.location.href;
     //const cleanUrl = currentUrl.split('?')[0]; // Menghapus parameter seperti ?m=1
    const cleanUrlJasaKonsFinishing = window.location.href.split(/[?#]/)[0]; // Menghilangkan parameter seperti ?m=1

     // Menemukan elemen menggunakan Id
    var JasaKonsFinishing = document.getElementById("JasaKonsFinishing");
    if (!JasaKonsFinishing) {
        console.error("elemen Id JasaKonsFinishing kondisi terhapus");
        return;
    }
     var JasaKonstruksiFinishingSubLink = document.getElementById("JasaKonstruksiFinishingSub");
     var JasaFinishingSubLink = document.getElementById("JasaFinishingSub");
     var JasaFinishingBangunanLink = document.getElementById("JasaFinishingBangunan");
     var JasaFinishingInfrastrukturLink = document.getElementById("JasaFinishingInfrastruktur");
     var pageNameJasaKonsFinishing = document.getElementById("pageNameJasaKonsFinishing");
    

     // Default untuk menyembunyikan elemen
     JasaKonstruksiFinishingSubLink.style.visibility = 'hidden';
     JasaFinishingSubLink.style.visibility = 'hidden';
     JasaFinishingBangunanLink.style.visibility = 'hidden';
     JasaFinishingInfrastrukturLink.style.visibility = 'hidden';
     pageNameJasaKonsFinishing.textContent = "";

    if (urlMappingFinishingBangunan[cleanUrlJasaKonsFinishing]) {
        restoreCondition('JasaFinishingBangunan');
        //restoreCondition('JasaChippingBeton');
           // hapus elemen id DIV Lain
        removeCondition('materialKonsReadymix');
        removeCondition('ProdukKonsSaluran');
        removeCondition('ProdukKonsPembatas');
        removeCondition('JasaKonsPembatas');
        removeCondition('JasaKonsPerbaikan');
       	removeCondition('JasaKons');
        removeCondition('JasaKonsSub');
        removeCondition('MenuKons');
     
       
         // hapus elemen id 
        removeCondition('JasaFinishingInfrastruktur');
       
        JasaKonstruksiFinishingSubLink.style.visibility = 'visible';
        JasaFinishingSubLink.style.visibility = 'visible';
        JasaFinishingBangunanLink.style.visibility = 'visible';
        pageNameJasaKonsFinishing.textContent = urlMappingFinishingBangunan[cleanUrlJasaKonsFinishing];
    }
    if (urlMappingFinishingInfrastruktur[cleanUrlJasaKonsFinishing]) {
        restoreCondition('JasaFinishingInfrastruktur');
          // hapus elemen id DIV Lain
        removeCondition('materialKonsReadymix');
        removeCondition('ProdukKonsSaluran');
        removeCondition('ProdukKonsPembatas');
        removeCondition('JasaKonsPembatas');
        removeCondition('JasaKonsPerbaikan');
       	removeCondition('JasaKons');
        removeCondition('JasaKonsSub');
        removeCondition('MenuKons');
     
       
         // hapus elemen id 
        removeCondition('JasaFinishingBangunan');
       
        JasaKonstruksiFinishingSubLink.style.visibility = 'visible';
        JasaFinishingSubLink.style.visibility = 'visible';
        JasaFinishingInfrastrukturLink.style.visibility = 'visible';
        pageNameJasaKonsFinishing.textContent = urlMappingFinishingInfrastruktur[cleanUrlJasaKonsFinishing];

    }
//Sub FinishingBangunan
   if (urlMappingFinishingBangunanInterior[cleanUrlJasaKonsFinishing]) {
        restoreCondition('JasaFinishingBangunan');
        //restoreCondition('JasaChippingBeton');
           // hapus elemen id DIV Lain
        removeCondition('materialKonsReadymix');
        removeCondition('ProdukKonsSaluran');
        removeCondition('ProdukKonsPembatas');
        removeCondition('JasaKonsPembatas');
        removeCondition('JasaKonsPerbaikan');
       	removeCondition('JasaKons');
        removeCondition('JasaKonsSub');
        removeCondition('MenuKons');
     
       
         // hapus elemen id 
        removeCondition('JasaFinishingInfrastruktur');
       
        JasaKonstruksiFinishingSubLink.style.visibility = 'visible';
        JasaFinishingSubLink.style.visibility = 'visible';
        JasaFinishingBangunanLink.style.visibility = 'visible';
        pageNameJasaKonsFinishing.textContent = urlMappingFinishingBangunanInterior[cleanUrlJasaKonsFinishing];
    }
   if (urlMappingFinishingBangunanEksterior[cleanUrlJasaKonsFinishing]) {
        restoreCondition('JasaFinishingBangunan');
        //restoreCondition('JasaChippingBeton');
           // hapus elemen id DIV Lain
        removeCondition('materialKonsReadymix');
        removeCondition('ProdukKonsSaluran');
        removeCondition('ProdukKonsPembatas');
        removeCondition('JasaKonsPembatas');
        removeCondition('JasaKonsPerbaikan');
       	removeCondition('JasaKons');
        removeCondition('JasaKonsSub');
        removeCondition('MenuKons');
     
       
         // hapus elemen id 
        removeCondition('JasaFinishingInfrastruktur');
       
        JasaKonstruksiFinishingSubLink.style.visibility = 'visible';
        JasaFinishingSubLink.style.visibility = 'visible';
        JasaFinishingBangunanLink.style.visibility = 'visible';
        pageNameJasaKonsFinishing.textContent = urlMappingFinishingBangunanEksterior[cleanUrlJasaKonsFinishing];
    }
   if (urlMappingFinishingBangunanStruktur[cleanUrlJasaKonsFinishing]) {
        restoreCondition('JasaFinishingBangunan');
        //restoreCondition('JasaChippingBeton');
           // hapus elemen id DIV Lain
        removeCondition('materialKonsReadymix');
        removeCondition('ProdukKonsSaluran');
        removeCondition('ProdukKonsPembatas');
        removeCondition('JasaKonsPembatas');
        removeCondition('JasaKonsPerbaikan');
       	removeCondition('JasaKons');
        removeCondition('JasaKonsSub');
        removeCondition('MenuKons');
     
       
         // hapus elemen id 
        removeCondition('JasaFinishingInfrastruktur');
       
        JasaKonstruksiFinishingSubLink.style.visibility = 'visible';
        JasaFinishingSubLink.style.visibility = 'visible';
        JasaFinishingBangunanLink.style.visibility = 'visible';
        pageNameJasaKonsFinishing.textContent = urlMappingFinishingBangunanStruktur[cleanUrlJasaKonsFinishing];
    }

 //Sub Finishing Infrastruktur
    if (urlMappingFinishingInfrastrukturJalan[cleanUrlJasaKonsFinishing]) {
        restoreCondition('JasaFinishingInfrastruktur');
          // hapus elemen id DIV Lain
        removeCondition('materialKonsReadymix');
        removeCondition('ProdukKonsSaluran');
        removeCondition('ProdukKonsPembatas');
        removeCondition('JasaKonsPembatas');
        removeCondition('JasaKonsPerbaikan');
       	removeCondition('JasaKons');
        removeCondition('JasaKonsSub');
        removeCondition('MenuKons');
     
       
         // hapus elemen id 
        removeCondition('JasaFinishingBangunan');
       
        JasaKonstruksiFinishingSubLink.style.visibility = 'visible';
        JasaFinishingSubLink.style.visibility = 'visible';
        JasaFinishingInfrastrukturLink.style.visibility = 'visible';
        pageNameJasaKonsFinishing.textContent = urlMappingFinishingInfrastrukturJalan[cleanUrlJasaKonsFinishing];

    }
   if (urlMappingFinishingInfrastrukturTrotoar[cleanUrlJasaKonsFinishing]) {
        restoreCondition('JasaFinishingInfrastruktur');
          // hapus elemen id DIV Lain
        removeCondition('materialKonsReadymix');
        removeCondition('ProdukKonsSaluran');
        removeCondition('ProdukKonsPembatas');
        removeCondition('JasaKonsPembatas');
        removeCondition('JasaKonsPerbaikan');
       	removeCondition('JasaKons');
        removeCondition('JasaKonsSub');
        removeCondition('MenuKons');
     
       
         // hapus elemen id 
        removeCondition('JasaFinishingBangunan');
       
        JasaKonstruksiFinishingSubLink.style.visibility = 'visible';
        JasaFinishingSubLink.style.visibility = 'visible';
        JasaFinishingInfrastrukturLink.style.visibility = 'visible';
        pageNameJasaKonsFinishing.textContent = urlMappingFinishingInfrastrukturTrotoar[cleanUrlJasaKonsFinishing];

    }
   if (urlMappingFinishingInfrastrukturSaluran[cleanUrlJasaKonsFinishing]) {
        restoreCondition('JasaFinishingInfrastruktur');
          // hapus elemen id DIV Lain
        removeCondition('materialKonsReadymix');
        removeCondition('ProdukKonsSaluran');
        removeCondition('ProdukKonsPembatas');
        removeCondition('JasaKonsPembatas');
        removeCondition('JasaKonsPerbaikan');
       	removeCondition('JasaKons');
        removeCondition('JasaKonsSub');
        removeCondition('MenuKons');
     
       
         // hapus elemen id 
        removeCondition('JasaFinishingBangunan');
       
        JasaKonstruksiFinishingSubLink.style.visibility = 'visible';
        JasaFinishingSubLink.style.visibility = 'visible';
        JasaFinishingInfrastrukturLink.style.visibility = 'visible';
        pageNameJasaKonsFinishing.textContent = urlMappingFinishingInfrastrukturSaluran[cleanUrlJasaKonsFinishing];

    }
  if (urlMappingFinishingInfrastrukturStruktur[cleanUrlJasaKonsFinishing]) {
        restoreCondition('JasaFinishingInfrastruktur');
          // hapus elemen id DIV Lain
        removeCondition('materialKonsReadymix');
        removeCondition('ProdukKonsSaluran');
        removeCondition('ProdukKonsPembatas');
        removeCondition('JasaKonsPembatas');
        removeCondition('JasaKonsPerbaikan');
       	removeCondition('JasaKons');
        removeCondition('JasaKonsSub');
        removeCondition('MenuKons');
     
       
         // hapus elemen id 
        removeCondition('JasaFinishingBangunan');
       
        JasaKonstruksiFinishingSubLink.style.visibility = 'visible';
        JasaFinishingSubLink.style.visibility = 'visible';
        JasaFinishingInfrastrukturLink.style.visibility = 'visible';
        pageNameJasaKonsFinishing.textContent = urlMappingFinishingInfrastrukturStruktur[cleanUrlJasaKonsFinishing];

    }
  if (urlMappingFinishingInfrastrukturProteksi[cleanUrlJasaKonsFinishing]) {
        restoreCondition('JasaFinishingInfrastruktur');
          // hapus elemen id DIV Lain
        removeCondition('materialKonsReadymix');
        removeCondition('ProdukKonsSaluran');
        removeCondition('ProdukKonsPembatas');
        removeCondition('JasaKonsPembatas');
        removeCondition('JasaKonsPerbaikan');
       	removeCondition('JasaKons');
        removeCondition('JasaKonsSub');
        removeCondition('MenuKons');
     
       
         // hapus elemen id 
        removeCondition('JasaFinishingBangunan');
       
        JasaKonstruksiFinishingSubLink.style.visibility = 'visible';
        JasaFinishingSubLink.style.visibility = 'visible';
        JasaFinishingInfrastrukturLink.style.visibility = 'visible';
        pageNameJasaKonsFinishing.textContent = urlMappingFinishingInfrastrukturProteksi[cleanUrlJasaKonsFinishing];

    }

   });
