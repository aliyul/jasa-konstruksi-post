 // Cek URL saat ini dan sesuaikan dengan kondisi yang diinginkan
const urlMappingChippingBeton = {
    "https://www.betonjayareadymix.com/2019/06/harga-chipping-beton-per-m2.html": "Harga Chipping Beton Per M2"
};
const urlMappingBobokTembok = {
    "https://www.betonjayareadymix.com/2019/06/jasa-tukang-bobok-tembok.html": "Jasa Tukang Bobok Tembok"


};
const urlMappingBobokBeton = {
    "https://www.betonjayareadymix.com/2019/06/harga-bongkar-beton.html": "Harga Bongkar Beton",
    "https://www.betonjayareadymix.com/2019/06/harga-bobok-beton-per-m2.html":  "Harga Bobok Beton Per M2"


};
const urlMappingBongkarKeramik = {
    "https://www.betonjayareadymix.com/2019/06/biaya-bongkar-lantai-keramik.html": "Biaya Bongkar Lantai Keramik",
    "https://www.betonjayareadymix.com/2019/06/harga-bongkar-lantai-keramik.html": "Harga Bongkar Lantai Keramik"

};

// Menyimpan elemen yang dihapus dalam variabel
let removedElements = {};
// Fungsi untuk menghapus elemen berdasarkan ID
function removeCondition(conditionId) {
    const conditionElement = document.getElementById(conditionId);

    if (conditionElement) {
        // Menyimpan elemen yang dihapus dalam objek untuk bisa dikembalikan
        removedElements[conditionId] = conditionElement;
        conditionElement.remove(); // Menghapus elemen tersebut
    }
}

// Fungsi untuk mengembalikan elemen yang telah dihapus
function restoreCondition(conditionId) {
    const breadcrumb = document.querySelector('.breadcrumb');
    const elementToRestore = removedElements[conditionId]; // Mendapatkan elemen yang disimpan

    if (elementToRestore) {
        breadcrumb.appendChild(elementToRestore); // Menambahkan elemen kembali ke dalam breadcrumb
        delete removedElements[conditionId]; // Menghapus elemen dari objek setelah dikembalikan
    } else {
        console.log(`Elemen dengan ID ${conditionId} tidak ditemukan di removedElements.`);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    // var currentUrl = window.location.href;
     //const cleanUrl = currentUrl.split('?')[0]; // Menghapus parameter seperti ?m=1
    const cleanUrl = window.location.href.split(/[?#]/)[0]; // Menghilangkan parameter seperti ?m=1

     // Menemukan elemen menggunakan Id
     var JasaKonstruksiLink = document.getElementById("JasaKonstruksi");
     var JasaRenovasiPerbaikanLink = document.getElementById("JasaRenovasiPerbaikan");
     var JasaChippingBetonLink = document.getElementById("JasaChippingBeton");
     var JasaBobokTembokLink = document.getElementById("JasaBobokTembok");
     var JasaBobokBetonLink = document.getElementById("JasaBobokBeton");
     var JasaBongkarKeramikLink = document.getElementById("JasaBongkarKeramik");
     var pageNameSpan = document.getElementById("pageNameKonstruksi");

     // Default untuk menyembunyikan elemen
     JasaKonstruksiLink.style.visibility = 'hidden';
     JasaRenovasiPerbaikanLink.style.visibility = 'hidden';
     JasaChippingBetonLink.style.visibility = 'hidden';
     JasaBobokTembokLink.style.visibility = 'hidden';
     JasaBobokBetonLink.style.visibility = 'hidden';
     JasaBongkarKeramikLink.style.visibility = 'hidden';
     pageNameSpan.textContent = "";

    if (urlMappingChippingBeton[cleanUrl]) {
       removeCondition('materialKons');
       restoreCondition('JasaKons');
        removeCondition('JasaBobokTembok');
         removeCondition('JasaBongkarKeramik');
       removeCondition('JasaBobokBeton');
        restoreCondition('JasaChippingBeton');
        JasaKonstruksiLink.style.visibility = 'visible';
        JasaRenovasiPerbaikanLink.style.visibility = 'visible';
        JasaChippingBetonLink.style.visibility = 'visible';
        pageNameSpan.textContent = urlMappingChippingBeton[cleanUrl];
    }
    if (urlMappingBobokTembok[cleanUrl]) {
        removeCondition('materialKons');
        restoreCondition('JasaKons');
     
        removeCondition('JasaChippingBeton');
        removeCondition('JasaBongkarKeramik');
       removeCondition('JasaBobokBeton');
        restoreCondition('JasaBobokTembok');
        JasaKonstruksiLink.style.visibility = 'visible';
        JasaRenovasiPerbaikanLink.style.visibility = 'visible';
        JasaBobokTembokLink.style.visibility = 'visible';
        pageNameSpan.textContent = urlMappingBobokTembok[cleanUrl];
    }
   if (urlMappingBobokBeton[cleanUrl]) {
       removeCondition('materialKons');
       restoreCondition('JasaKons');
    
        removeCondition('JasaChippingBeton');
        removeCondition('JasaBongkarKeramik');
       removeCondition('JasaBobokTembok');
        restoreCondition('JasaBobokBeton');
        JasaKonstruksiLink.style.visibility = 'visible';
        JasaRenovasiPerbaikanLink.style.visibility = 'visible';
        JasaBobokBetonLink.style.visibility = 'visible';
        pageNameSpan.textContent = urlMappingBobokBeton[cleanUrl];
    }
   if (urlMappingBongkarKeramik[cleanUrl]) {
        removeCondition('materialKons');
        restoreCondition('JasaKons');
    
        removeCondition('JasaChippingBeton');
        removeCondition('JasaBobokTembok');
         removeCondition('JasaBobokBeton');
        restoreCondition('JasaBongkarKeramik');
        JasaKonstruksiLink.style.visibility = 'visible';
        JasaRenovasiPerbaikanLink.style.visibility = 'visible';
        JasaBongkarKeramikLink.style.visibility = 'visible';
        pageNameSpan.textContent = urlMappingBongkarKeramik[cleanUrl];
    }

   });
