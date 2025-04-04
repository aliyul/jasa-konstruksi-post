 // Cek URL saat ini dan sesuaikan dengan kondisi yang diinginkan
const urlMappingPerbaikan = {
"https://www.betonjayareadymix.com/p/jasa-perbaikan-dan-renovasi-pagar.html": "Jasa Perbaikan dan Renovasi Pagar",
    "https://www.betonjayareadymix.com/p/jasa-perbaikan-dan-renovasi-interior.html": "Jasa Perbaikan dan Renovasi Interior",
    "https://www.betonjayareadymix.com/p/jasa-perbaikan-dan-renovasi-fasad.html": "Jasa Perbaikan dan Renovasi Fasad",
    "https://www.betonjayareadymix.com/p/jasa-renovasi-tempat-ibadah.html": "Jasa Renovasi Tempat Ibadah",
    "https://www.betonjayareadymix.com/p/jasa-renovasi-perbaikan-atap.html": "Jasa Renovasi Perbaikan Atap",
 "https://www.betonjayareadymix.com/p/jasa-renovasi-gedung-kantor.html": "Jasa Renovasi Gedung Kantor",
    "https://www.betonjayareadymix.com/p/jasa-perbaikan-saluran-dan-drainase.html": "Jasa Perbaikan Saluran dan Drainase",
    "https://www.betonjayareadymix.com/p/jasa-renovasi-fasilitas-umum.html": "Jasa Renovasi Fasilitas Umum",
    "https://www.betonjayareadymix.com/p/jasa-perbaikan-dan-renovasi-pabrik.html": "Jasa Perbaikan dan Renovasi Pabrik",
    "https://www.betonjayareadymix.com/p/jasa-renovasi-dan-perbaikan-kolam-renang.html": "Jasa Renovasi dan Perbaikan Kolam Renang",
    "https://www.betonjayareadymix.com/p/jasa-perbaikan-dan-renovasi-sekolah.html": "Jasa Perbaikan dan Renovasi Sekolah",
    "https://www.betonjayareadymix.com/p/jasa-renovasi-hotel-apartemen.html": "Jasa Renovasi Hotel Apartemen",
 "https://www.betonjayareadymix.com/p/jasa-renovasi-rumah.html": "Jasa Renovasi Rumah",
    "https://www.betonjayareadymix.com/p/jasa-renovasi-perbaikan-infrastruktur.html": "Jasa Renovasi Perbaikan Infrastruktur",
 "https://www.betonjayareadymix.com/p/jasa-renovasi-perbaikan-struktur.html": "Jasa Renovasi Perbaikan Struktur",
    "https://www.betonjayareadymix.com/p/jasa-renovasi-perbaikan-dinding.html": "Jasa Renovasi Perbaikan Dinding"

};

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
    //var JasaKonsPerbaikanSub = document.getElementById("JasaKonsPerbaikanSub");
/*
    if (!JasaKonsPerbaikan) {
	if (!JasaKonsPerbaikanSub) {
	console.error("elemen Id JasaKonsPerbaikan kondisi terhapus");
	console.error("elemen Id JasaKonsPerbaikanSub kondisi terhapus");
        return;
    	} else {
       	console.error("elemen Id JasaKonsPerbaikanSub kondisi terhapus");
	}
    } else if (!JasaKonsPerbaikanSub) {
	console.error("elemen Id JasaKonsPerbaikan kondisi terhapus");
    } else {
    
    }
    */
	
if (!JasaKonsPerbaikan) {
console.error("elemen Id JasaKonsPerbaikan kondisi terhapus");
        return;
}

     var JasaKonstruksiPerbaikanLink = document.getElementById("JasaKonstruksiPerbaikan");
     var JasaRenovasiPerbaikanLink = document.getElementById("JasaRenovasiPerbaikan");
     var pageNameKonstruksiPerbaikan = document.getElementById("pageNameKonstruksiPerbaikan");
    

     // Default untuk menyembunyikan elemen
     JasaKonstruksiPerbaikanLink.style.visibility = 'hidden';
     JasaRenovasiPerbaikanLink.style.visibility = 'hidden';
     pageNameKonstruksiPerbaikan.textContent = "";

    if (urlMappingPerbaikan[cleanUrlJasaPerbaikanKons]) {
        restoreCondition('JasaKonsPerbaikan');
           // hapus elemen id DIV Lain
        removeCondition('materialKonsReadymix');
        removeCondition('ProdukKonsSaluran');
        removeCondition('ProdukKonsPembatas');
        removeCondition('JasaKonsPembatas');
        removeCondition('JasaKonsPerbaikanSub');
       
        JasaKonstruksiPerbaikanLink.style.visibility = 'visible';
        JasaRenovasiPerbaikanLink.style.visibility = 'visible';
        pageNameKonstruksiPerbaikan.textContent = urlMappingPerbaikan[cleanUrlJasaPerbaikanKons];
    }
	
   });
