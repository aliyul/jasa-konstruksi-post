
const urlMappingStruktur = {
"https://www.betonjayareadymix.com/p/jasa-struktur-konstruksi.html": "Jasa Struktur Konstruksi",
  "https://www.betonjayareadymix.com/p/jasa-plester-acian.html": "Jasa Plester Acian",
  "https://www.betonjayareadymix.com/p/jasa-pembuatan-kolam-renang.html": "Jasa Pembuatan Kolam Renang",
  "https://www.betonjayareadymix.com/p/jasa-pembuatan-kolam-ikan-koi.html": "Jasa Pembuatan Kolam Ikan Koi",
  "https://www.betonjayareadymix.com/p/jasa-pembuatan-lapangan-olahraga.html": "Jasa Pembuatan Lapangan Olahraga",
  "https://www.betonjayareadymix.com/p/jasa-pengecoran-struktur-beton.html": "Jasa Pengecoran Struktur Beton"
};

// Menyimpan elemen yang dihapus dalam variabel
let removedElementsJasaPerbaikanKons1 = {};
function removeCondition1(conditionId) {
    const conditionElement1 = document.getElementById(conditionId);

    if (conditionElement1) {
        // Menyimpan elemen yang dihapus dalam objek untuk bisa dikembalikan
        removedElementsJasaPerbaikanKons1[conditionId] = conditionElement1;
        conditionElement1.remove(); // Menghapus elemen tersebut
    }
}

// Fungsi untuk mengembalikan elemen yang telah dihapus
function restoreCondition1(conditionId) {
    const breadcrumb1 = document.querySelector('.breadcrumb');
    const elementToRestore1 = removedElementsJasaPerbaikanKons1[conditionId]; // Mendapatkan elemen yang disimpan

    if (elementToRestore1) {
        breadcrumb1.appendChild(elementToRestore); // Menambahkan elemen kembali ke dalam breadcrumb
        delete removedElementsJasaPerbaikanKons1[conditionId]; // Menghapus elemen dari objek setelah dikembalikan
    } else {
        console.log(`Elemen dengan ID ${conditionId} tidak ditemukan di removedElementsJasaJasaKonsStruktur.`);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    // var currentUrl = window.location.href;
     //const cleanUrl = currentUrl.split('?')[0]; // Menghapus parameter seperti ?m=1
    const cleanUrlJasaJasaKonsStruktur = window.location.href.split(/[?#]/)[0]; // Menghilangkan parameter seperti ?m=1

     // Menemukan elemen menggunakan Id
    //var JasaKonsPerbaikan = document.getElementById("JasaKonsPerbaikan");
    var JasaKonsStruktur = document.getElementById("JasaKonsStruktur");

if (!JasaKonsStruktur) {
console.error("elemen Id JasaKonsPerbaikanSub kondisi terhapus");
        return;
}
if (!JasaKonsStruktur) {
     console.error("elemen Id JasaKonsPerbaikanSub kondisi terhapus");	
} else {
     var JasaKonstruksiPerbaikanLinkSub = document.getElementById("JasaKonstruksiPerbaikanSub");
     var JasaRenovasiPerbaikanLinkSub = document.getElementById("JasaRenovasiPerbaikanSub");
     var JasaRenovasiPerbaikanStrukturLink = document.getElementById("JasaRenovasiPerbaikanStruktur");
     var JasaRenovasiPerbaikanInfrastrukturLink = document.getElementById("JasaRenovasiPerbaikanInfrastruktur");
     var JasaRenovasiPerbaikanAtapLink = document.getElementById("JasaRenovasiPerbaikanAtap");
     var JasaRenovasiPerbaikanInteriorLink = document.getElementById("JasaRenovasiPerbaikanInterior");
     var JasaRenovasiPerbaikanFasadLink = document.getElementById("JasaRenovasiPerbaikanFasad");
	
     var pageNameKonstruksiPerbaikan1 = document.getElementById("pageNameKonstruksiPerbaikan1");
    
     // Default untuk menyembunyikan elemen
     JasaKonstruksiPerbaikanLinkSub.style.visibility = 'hidden';
     JasaRenovasiPerbaikanLinkSub.style.visibility = 'hidden';
     JasaRenovasiPerbaikanStrukturLink.style.visibility = 'hidden';
     JasaRenovasiPerbaikanInfrastrukturLink.style.visibility = 'hidden';
     JasaRenovasiPerbaikanAtapLink.style.visibility = 'hidden';
     JasaRenovasiPerbaikanInteriorLink.style.visibility = 'hidden';
     JasaRenovasiPerbaikanFasadLink.style.visibility = 'hidden';
     pageNameKonstruksiPerbaikan1.textContent = "";

    if (urlMappingPerbaikanStruktur[cleanUrlJasaPerbaikanKonsSub]) {
        restoreCondition1('JasaKonsPerbaikanSub');
        restoreCondition1('JasaRenovasiPerbaikanStruktur');
           // hapus elemen id DIV Lain
        removeCondition1('materialKonsReadymix');
        removeCondition1('ProdukKonsSaluran');
        removeCondition1('ProdukKonsPembatas');
        removeCondition1('JasaKonsPembatas');
	removeCondition1('JasaKons');
	
        removeCondition1('JasaRenovasiPerbaikanInfrastruktur');
        removeCondition1('JasaRenovasiPerbaikanAtap');
        removeCondition1('JasaRenovasiPerbaikanInterior');
	removeCondition1('JasaRenovasiPerbaikanFasad');
       
        JasaKonstruksiPerbaikanLinkSub.style.visibility = 'visible';
        JasaRenovasiPerbaikanLinkSub.style.visibility = 'visible';
        JasaRenovasiPerbaikanStrukturLink.style.visibility = 'visible';
        pageNameKonstruksiPerbaikan1.textContent = urlMappingPerbaikanStruktur[cleanUrlJasaPerbaikanKonsSub];
    }
}
	
   });
