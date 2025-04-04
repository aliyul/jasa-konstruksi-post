 // Cek URL saat ini dan sesuaikan dengan kondisi yang diinginkan
const urlMappingPerbaikan = {
"https://www.betonjayareadymix.com/p/jasa-perbaikan-dan-renovasi-pagar.html": "Jasa Perbaikan dan Renovasi Pagar",
    "https://www.betonjayareadymix.com/p/jasa-perbaikan-dan-renovasi-interior.html": "Jasa Perbaikan dan Renovasi Interior",
    "https://www.betonjayareadymix.com/p/jasa-perbaikan-dan-renovasi-fasad.html": "Jasa Perbaikan dan Renovasi Fasad",
    "https://www.betonjayareadymix.com/p/jasa-renovasi-tempat-ibadah.html": "Jasa Renovasi Tempat Ibadah",
    "https://www.betonjayareadymix.com/p/jasa-renovasi-atap.html": "Jasa Renovasi Atap",
 "https://www.betonjayareadymix.com/p/jasa-renovasi-gedung-kantor.html": "Jasa Renovasi Gedung Kantor",
    "https://www.betonjayareadymix.com/p/jasa-perbaikan-saluran-dan-drainase.html": "Jasa Perbaikan Saluran dan Drainase",
    "https://www.betonjayareadymix.com/p/jasa-renovasi-fasilitas-umum.html": "Jasa Renovasi Fasilitas Umum",
    "https://www.betonjayareadymix.com/p/jasa-perbaikan-dan-renovasi-pabrik.html": "Jasa Perbaikan dan Renovasi Pabrik",
    "https://www.betonjayareadymix.com/p/jasa-renovasi-dan-perbaikan-kolam-renang.html": "Jasa Renovasi dan Perbaikan Kolam Renang",
    "https://www.betonjayareadymix.com/p/jasa-perbaikan-dan-renovasi-sekolah.html": "Jasa Perbaikan dan Renovasi Sekolah",
    "https://www.betonjayareadymix.com/p/jasa-renovasi-hotel-apartemen.html": "Jasa Renovasi Hotel Apartemen",
 "https://www.betonjayareadymix.com/p/jasa-renovasi-rumah.html": "Jasa Renovasi Rumah",
    "https://www.betonjayareadymix.com/p/jasa-perbaikan-infrastruktur.html": "Jasa Perbaikan Infrastruktur",
 "https://www.betonjayareadymix.com/p/jasa-renovasi-perbaikan-struktur.html": "Jasa Renovasi Perbaikan Struktur",
    "https://www.betonjayareadymix.com/p/jasa-renovasi-perbaikan-dinding.html": "Jasa Renovasi Perbaikan Dinding"

};

const urlMappingPerbaikanStruktur = {
//Jasa Perbaikan Struktur
   "https://www.betonjayareadymix.com/p/jasa-perbaikan-retak-struktur.html": "Jasa Perbaikan Retak Struktur",
     "https://www.betonjayareadymix.com/p/jasa-perbaikan-pondasi-bangunan.html": "Jasa Perbaikan Pondasi Bangunan",
     "https://www.betonjayareadymix.com/p/jasa-perbaikan-kolom-balok-beton.html": "Jasa Perbaikan Kolom & Balok Beton",
     "https://www.betonjayareadymix.com/p/jasa-perbaikan-lantai-struktur.html": "Jasa Perbaikan Lantai Struktur",
     "https://www.betonjayareadymix.com/p/jasa-perbaikan-struktur-jembatan.html": "Jasa Perbaikan Struktur Jembatan",
     "https://www.betonjayareadymix.com/p/jasa-perbaikan-struktur-gedung.html": "Jasa Perbaikan Struktur Gedung Bertingkat",
//Jasa Renovasi Struktur
   "https://www.betonjayareadymix.com/p/jasa-penguatan-struktur-bangunan.html": "Jasa Renovasi Penguatan Struktur Bangunan",
     "https://www.betonjayareadymix.com/p/jasa-renovasi-pondasi.html": "Jasa Renovasi Pondasi",
     "https://www.betonjayareadymix.com/p/jasa-renovasi-lantai-beton-bertulang.html": "Jasa Renovasi Lantai Beton Bertulang",
     "https://www.betonjayareadymix.com/p/jasa-renovasi-kolom-balok.html": "Jasa Renovasi Kolom & Balok",
     "https://www.betonjayareadymix.com/p/jasa-renovasi-atap-beton.html": "Jasa Renovasi Atap Beton",
     "https://www.betonjayareadymix.com/p/jasa-jacketing-kolom-balok.html": "Jasa Jacketing Kolom & Balok",
     "https://www.betonjayareadymix.com/p/jasa-perkuatan-struktur-cfrp.html": "Jasa Perkuatan Struktur dengan CFRP",
 
     //Jasa Perbaikan Struktur Beton
     "https://www.betonjayareadymix.com/p/jasa-chipping-beton.html": "Jasa Chipping Beton",
    "https://www.betonjayareadymix.com/p/harga-chipping-beton-per-m2.html": "Harga Chipping Beton Per M2",
      "https://www.betonjayareadymix.com/p/jasa-bobok-beton.html": "Jasa Bobok Beton",

    "https://www.betonjayareadymix.com/p/jasa-injeksi-beton-retak.html": "Jasa Injeksi Beton",
    "https://www.betonjayareadymix.com/p/jasa-borongan-injeksi-beton-retak.html": "Jasa Borongan Injeksi Beton Retak",
   "https://www.betonjayareadymix.com/p/jasa-shotcrete-beton.html": "Jasa Shotcrete Beton",
   "https://www.betonjayareadymix.com/p/harga-jasa-shotcrete-beton.html": "Harga Jasa Shotcrete Beton",
   "https://www.betonjayareadymix.com/p/jasa-borongan-shotcrete-beton.html": "Jasa Borongan Shotcrete Beton",
   "https://www.betonjayareadymix.com/p/jasa-grouting-struktur-beton.html": "Jasa Grouting Beton",

    "https://www.betonjayareadymix.com/p/jasa-perbaikan-retak-beton.html": "Jasa Perbaikan Retak Beton",
    "https://www.betonjayareadymix.com/p/jasa-repair-struktur-beton.html": "Jasa Repair Struktur Beton",
    "https://www.betonjayareadymix.com/p/jasa-renovasi-balok-beton.html": "Jasa Renovasi Balok Beton",
    "https://www.betonjayareadymix.com/p/jasa-perbaikan-balok-gantung.html": "Jasa Perbaikan Balok Gantung",
    "https://www.betonjayareadymix.com/p/jasa-beton-karbonasi.html": "Jasa Beton Karbonasi",
 
 //Renovasi & Perbaikan Lantai
  "https://www.betonjayareadymix.com/p/harga-bobok-lantai-beton-per-m2.html": "Harga Bobok Lantai Beton Per M2",  
 "https://www.betonjayareadymix.com/p/harga-borongan-bobok-lantai-beton.html": "Harga Borongan Bobok Lantai Beton",

 "https://www.betonjayareadymix.com/p/jasa-bobok-lantai-beton.html": "Jasa Bobok Lantai Beton",  
 "https://www.betonjayareadymix.com/p/jasa-perbaikan-lantai.html": "Jasa Perbaikan Lantai",  
 "https://www.betonjayareadymix.com/p/jasa-lantai-ambles.html": "Jasa Lantai Ambles",  
 "https://www.betonjayareadymix.com/p/jasa-renovasi-lantai.html": "Jasa Renovasi Lantai",  
 "https://www.betonjayareadymix.com/p/jasa-perbaikan-lantai.html": "Jasa Perbaikan Lantai",  
 "https://www.betonjayareadymix.com/p/jasa-perbaikan-lantai.html": "Jasa Perbaikan Lantai",  
 "https://www.betonjayareadymix.com/p/jasa-perbaikan-lantai.html": "Jasa Perbaikan Lantai",  
 "https://www.betonjayareadymix.com/p/jasa-perbaikan-lantai.html": "Jasa Perbaikan Lantai",

 
 
};

const urlMappingPerbaikanDinding = {
  "https://www.betonjayareadymix.com/p/jasa-bobok-tembok.html": "Jasa Bobok Tembok",
 "https://www.betonjayareadymix.com/p/harga-jasa-bobok-tembok.html": "Harga Jasa Bobok Tembok",
 "https://www.betonjayareadymix.com/p/jasa-tukang-bobok-tembok.html": "Jasa Tukang Bobok Tembok",

 
 "https://www.betonjayareadymix.com/p/jasa-renovasi-perbaikan-dinding-retak.html": "Jasa Renovasi Perbaikan Dinding Retak",
 "https://www.betonjayareadymix.com/p/jasa-renovasi-perbaikan-dinding-lembab.html": "Jasa Renovasi Perbaikan Dinding Lembab",
 "https://www.betonjayareadymix.com/p/jasa-bobok-dinding-instalasi.html": "Jasa Bobok Dinding Instalasi",
 "https://www.betonjayareadymix.com/p/jasa-renovasi-penggantian-dinding-bata.html": "Jasa Renovasi Penggantian Dinding Bata",
 "https://www.betonjayareadymix.com/p/jasa-perbaikan-penggantian-dinding-bata.html": "Jasa Perbaikan Penggantian Dinding Bata",
 "https://www.betonjayareadymix.com/p/jasa-renovasi-dinding-plester-acian.html": "Jasa Renovasi Dinding Plester Acian",
 "https://www.betonjayareadymix.com/p/jasa-perbaikan-dinding-plester-acian.html": "Jasa Perbaikan Dinding Plester Acian",

 
 
 "https://www.betonjayareadymix.com/p/jasa-renovasi-perbaikan-dinding-jakarta.html": "Jasa Renovasi Perbaikan Dinding  Jakarta",
 "https://www.betonjayareadymix.com/p/jasa-renovasi-perbaikan-dinding-bogor.html": "Jasa Renovasi Perbaikan Dinding Bogor",
 "https://www.betonjayareadymix.com/p/jasa-renovasi-perbaikan-dinding-depok.html": "Jasa Renovasi Perbaikan Dinding Depok",
 "https://www.betonjayareadymix.com/p/jasa-perbaikan-dinding-tangerang.html": "Jasa Renovasi Perbaikan Dinding Tangerang",
 "https://www.betonjayareadymix.com/p/jasa-renovasi-perbaikan-dinding-bekasi.html": "Jasa Renovasi Perbaikan Dinding Bekasi",
 "https://www.betonjayareadymix.com/p/jasa-perbaikan-dinding-karawang.html": "Jasa Renovasi Perbaikan Dinding Karawang"



 
 
};
/*
const urlMappingBobokTembok = {
   

};
const urlMappingBobokBeton = {
    "https://www.betonjayareadymix.com/2019/06/harga-bongkar-beton.html": "Harga Bongkar Beton",
    "https://www.betonjayareadymix.com/2019/06/harga-bobok-beton-per-m2.html":  "Harga Bobok Beton Per M2"


};
const urlMappingBongkarKeramik = {
    "https://www.betonjayareadymix.com/2019/06/biaya-bongkar-lantai-keramik.html": "Biaya Bongkar Lantai Keramik",
    "https://www.betonjayareadymix.com/2019/06/harga-bongkar-lantai-keramik.html": "Harga Bongkar Lantai Keramik"

};

*/

// Menyimpan elemen yang dihapus dalam variabel
let removedElementsJasaPerbaikanKons = {};
// Fungsi untuk menghapus elemen berdasarkan ID
function removeCondition(conditionId) {
    const conditionElement = document.getElementById(conditionId);

    if (conditionElement) {
        // Menyimpan elemen yang dihapus dalam objek untuk bisa dikembalikan
        removedElementsJasaPerbaikanKons[conditionId] = conditionElement;
        conditionElement.remove(); // Menghapus elemen tersebut
    }
}

// Fungsi untuk mengembalikan elemen yang telah dihapus
function restoreCondition(conditionId) {
    const breadcrumb = document.querySelector('.breadcrumb');
    const elementToRestore = removedElementsJasaPerbaikanKons[conditionId]; // Mendapatkan elemen yang disimpan

    if (elementToRestore) {
        breadcrumb.appendChild(elementToRestore); // Menambahkan elemen kembali ke dalam breadcrumb
        delete removedElementsJasaPerbaikanKons[conditionId]; // Menghapus elemen dari objek setelah dikembalikan
    } else {
        console.log(`Elemen dengan ID ${conditionId} tidak ditemukan di removedElementsJasaPerbaikanKons.`);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    // var currentUrl = window.location.href;
     //const cleanUrl = currentUrl.split('?')[0]; // Menghapus parameter seperti ?m=1
    const cleanUrlJasaPerbaikanKons = window.location.href.split(/[?#]/)[0]; // Menghilangkan parameter seperti ?m=1

     // Menemukan elemen menggunakan Id
    var JasaKonsPerbaikan = document.getElementById("JasaKonsPerbaikan");
    if (!JasaKonsPerbaikan) {
        console.error("elemen Id JasaKonsPerbaikan kondisi terhapus");
        return;
    }
     var JasaKonstruksiPerbaikanLink = document.getElementById("JasaKonstruksiPerbaikan");
     var JasaRenovasiPerbaikanLink = document.getElementById("JasaRenovasiPerbaikan");
     var JasaChippingBetonLink = document.getElementById("JasaChippingBeton");
     var JasaChippingBetonLink = document.getElementById("JasaChippingBeton");
     var JasaBobokTembokLink = document.getElementById("JasaBobokTembok");
     var JasaBobokBetonLink = document.getElementById("JasaBobokBeton");
     var JasaBongkarKeramikLink = document.getElementById("JasaBongkarKeramik");
     var pageNameKonstruksiPerbaikan = document.getElementById("pageNameKonstruksiPerbaikan");
    

     // Default untuk menyembunyikan elemen
     JasaKonstruksiPerbaikanLink.style.visibility = 'hidden';
     JasaRenovasiPerbaikanLink.style.visibility = 'hidden';
     JasaChippingBetonLink.style.visibility = 'hidden';
     JasaBobokTembokLink.style.visibility = 'hidden';
     JasaBobokBetonLink.style.visibility = 'hidden';
     JasaBongkarKeramikLink.style.visibility = 'hidden';
     pageNameKonstruksiPerbaikan.textContent = "";

    if (urlMappingChippingBeton[cleanUrlJasaPerbaikanKons]) {
        restoreCondition('JasaKonsPerbaikan');
        restoreCondition('JasaChippingBeton');
           // hapus elemen id DIV Lain
        removeCondition('materialKonsReadymix');
        removeCondition('ProdukKonsSaluran');
        removeCondition('ProdukKonsPembatas');
        removeCondition('JasaKonsPembatas');
       
        removeCondition('JasaBobokTembok');
        removeCondition('JasaBongkarKeramik');
        removeCondition('JasaBobokBeton');
       
        JasaKonstruksiPerbaikanLink.style.visibility = 'visible';
        JasaRenovasiPerbaikanLink.style.visibility = 'visible';
        JasaChippingBetonLink.style.visibility = 'visible';
        pageNameKonstruksiPerbaikan.textContent = urlMappingChippingBeton[cleanUrlJasaPerbaikanKons];
    }
    if (urlMappingBobokTembok[cleanUrlJasaPerbaikanKons]) {
        restoreCondition('JasaKonsPerbaikan');
        restoreCondition('JasaBobokTembok');
     
       // hapus elemen id DIV Lain
        removeCondition('materialKonsReadymix');
        removeCondition('ProdukKonsSaluran');
        removeCondition('ProdukKonsPembatas');
        removeCondition('JasaKonsPembatas');
        
        // hapus elemen JasaPerbaikanKons Lain
        removeCondition('JasaChippingBeton');
        removeCondition('JasaBongkarKeramik');
        removeCondition('JasaBobokBeton');
     
        JasaKonstruksiPerbaikanLink.style.visibility = 'visible';
        JasaRenovasiPerbaikanLink.style.visibility = 'visible';
        JasaBobokTembokLink.style.visibility = 'visible';
        pageNameKonstruksiPerbaikan.textContent = urlMappingBobokTembok[cleanUrlJasaPerbaikanKons];
    }
   if (urlMappingBobokBeton[cleanUrlJasaPerbaikanKons]) {
       restoreCondition('JasaKonsPerbaikan');
       restoreCondition('JasaBobokBeton');

         // hapus elemen id DIV Lain
       removeCondition('materialKonsReadymix');
       removeCondition('ProdukKonsSaluran');
       removeCondition('ProdukKonsPembatas');
       removeCondition('JasaKonsPembatas');
    
        // hapus elemen JasaPerbaikanKons Lain
        removeCondition('JasaChippingBeton');
        removeCondition('JasaBongkarKeramik');
        removeCondition('JasaBobokTembok');
       
        JasaKonstruksiPerbaikanLink.style.visibility = 'visible';
        JasaRenovasiPerbaikanLink.style.visibility = 'visible';
        JasaBobokBetonLink.style.visibility = 'visible';
        pageNameKonstruksiPerbaikan.textContent = urlMappingBobokBeton[cleanUrlJasaPerbaikanKons];
    }
   if (urlMappingBongkarKeramik[cleanUrlJasaPerbaikanKons]) {
        restoreCondition('JasaKonsPerbaikan');
        restoreCondition('JasaBongkarKeramik');
          // hapus elemen id DIV Lain
        removeCondition('materialKonsReadymix');
        removeCondition('ProdukKonsSaluran');
        removeCondition('ProdukKonsPembatas');
        removeCondition('JasaKonsPembatas');
        
       // hapus elemen JasaPerbaikanKons Lain
        removeCondition('JasaChippingBeton');
        removeCondition('JasaBobokTembok');
         removeCondition('JasaBobokBeton');
       
        JasaKonstruksiPerbaikanLink.style.visibility = 'visible';
        JasaRenovasiPerbaikanLink.style.visibility = 'visible';
        JasaBongkarKeramikLink.style.visibility = 'visible';
        pageNameKonstruksiPerbaikan.textContent = urlMappingBongkarKeramik[cleanUrlJasaPerbaikanKons];
    }

   });
