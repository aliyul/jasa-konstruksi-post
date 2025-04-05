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
 "https://www.betonjayareadymix.com/p/jasa-renovasi-perbaikan-struktur.html": "Jasa Renovasi Perbaikan Struktur"
  //  "https://www.betonjayareadymix.com/p/jasa-renovasi-perbaikan-dinding.html": "Jasa Renovasi Perbaikan Dinding"

};

const urlMappingFinishing = {
 "https://www.betonjayareadymix.com/p/jasa-finishing-dinding.html": "Jasa Finishing Dinding",
 "https://www.betonjayareadymix.com/p/jasa-finishing-lantai.html": "Jasa Finishing Lantai",
 "https://www.betonjayareadymix.com/p/jasa-finishing-atap.html": "Jasa Finishing Atap",
 "https://www.betonjayareadymix.com/p/jasa-finishing-plafon.html": "Jasa Finishing Plafon",
 "https://www.betonjayareadymix.com/p/jasa-finishing-kusen-pintu-jendela.html": "Jasa Finishing Kusen Pintu Jendela",
 "https://www.betonjayareadymix.com/p/jasa-finishing-kamar-mandi.html": "Jasa Finishing Kamar Mandi",
 "https://www.betonjayareadymix.com/p/jasa-finishing-interior.html": "Jasa Finishing Interior",
 "https://www.betonjayareadymix.com/p/jasa-finishing-eksterior.html": "Jasa Finishing Eksterior",
 "https://www.betonjayareadymix.com/p/jasa-finishing-infrastruktur.html": "Jasa Finishing Infrastruktur",
 "https://www.betonjayareadymix.com/p/jasa-finishing-pintu-keamanan.html": "Jasa Finishing Pintu Keamanan Otomatisasi",
 "https://www.betonjayareadymix.com/p/jasa-finishing-akustik-peredam.html": "Jasa Finishing Akustik Peredam"
	
};

const urlMappingStruktur = {

};

const urlMappingPondasi = {

};

const urlMappingSaluran = {

};

const urlMappingJalan = {

};

const urlMappingPembatas = {

};

const urlMappingCustom = {

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
    const cleanUrlJasaKons = window.location.href.split(/[?#]/)[0]; // Menghilangkan parameter seperti ?m=1

     // Menemukan elemen menggunakan Id
    var JasaKons = document.getElementById("JasaKons");
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
	
if (!JasaKons) {
console.error("elemen Id JasaKons kondisi terhapus");
        return;
}

     var JasaKonstruksiLink = document.getElementById("JasaKonstruksi");
	var JasaRenovasiPerbaikanLink = document.getElementById("JasaRenovasiPerbaikan");
        var JasaStrukturKonstruksiLink = document.getElementById("JasaStrukturKonstruksi");
	var JasaFinishingLink = document.getElementById("JasaFinishing");
	var JasaPondasiPerkuatanLink = document.getElementById("JasaPondasiPerkuatan");
	var JasaSaluranDrainaseLink = document.getElementById("JasaSaluranDrainase");
	var JasaJalanPerkerasanLink = document.getElementById("JasaJalanPerkerasan");
	var JasaPembatasPengamanLink = document.getElementById("JasaPembatasPengaman");
	var JasaKonstruksiCustomLink = document.getElementById("JasaKonstruksiCustom");
	
     var pageNameKonstruksi = document.getElementById("pageNameKonstruksi");
    

     // Default untuk menyembunyikan elemen
     JasaKonstruksiLink.style.visibility = 'hidden';
     	JasaRenovasiPerbaikanLink.style.visibility = 'hidden';
	JasaStrukturKonstruksiLink.style.visibility = 'hidden';
	JasaFinishingLink.style.visibility = 'hidden';
	JasaPondasiPerkuatanLink.style.visibility = 'hidden';
	JasaSaluranDrainaseLink.style.visibility = 'hidden';
	JasaJalanPerkerasanLink.style.visibility = 'hidden';
	JasaPembatasPengamanLink.style.visibility = 'hidden';
	JasaKonstruksiCustomLink.style.visibility = 'hidden';
     pageNameKonstruksi.textContent = "";

    if (urlMappingPerbaikan[cleanUrlJasaKons]) {
        restoreCondition('JasaKons');
	//restoreCondition('JasaKonstruksi');
	restoreCondition('JasaRenovasiPerbaikan');
           // hapus elemen id DIV Lain
        removeCondition('materialKonsReadymix');
        removeCondition('ProdukKonsSaluran');
        removeCondition('ProdukKonsPembatas');
        removeCondition('JasaKonsPembatas');
        removeCondition('JasaKonsPerbaikanSub');

	// hapus elemen id DIV Lain
	removeCondition('JasaStrukturKonstruksi');
        removeCondition('JasaFinishing');
        removeCondition('JasaPondasiPerkuatan');
        removeCondition('JasaSaluranDrainase');
        removeCondition('JasaJalanPerkerasan');
        removeCondition('JasaPembatasPengaman');
        removeCondition('JasaKonstruksiCustom');

        JasaKonstruksiLink.style.visibility = 'visible';
        JasaRenovasiPerbaikanLink.style.visibility = 'visible';
	    
        pageNameKonstruksi.textContent = urlMappingPerbaikan[cleanUrlJasaKons];
    }
    if (urlMappingStruktur[cleanUrlJasaPerbaikanKons]) {
        restoreCondition('JasaKons');
	restoreCondition('JasaStrukturKonstruksi');
           // hapus elemen id DIV Lain
        removeCondition('materialKonsReadymix');
        removeCondition('ProdukKonsSaluran');
        removeCondition('ProdukKonsPembatas');
        removeCondition('JasaKonsPembatas');
        removeCondition('JasaKonsPerbaikanSub');

	// hapus elemen id DIV Lain
	removeCondition('JasaRenovasiPerbaikan');
        removeCondition('JasaFinishing');
        removeCondition('JasaPondasiPerkuatan');
        removeCondition('JasaSaluranDrainase');
        removeCondition('JasaJalanPerkerasan');
        removeCondition('JasaPembatasPengaman');
        removeCondition('JasaKonstruksiCustom');

        JasaKonstruksiLink.style.visibility = 'visible';
        JasaStrukturKonstruksiLink.style.visibility = 'visible';
        pageNameKonstruksi.textContent = urlMappingStruktur[cleanUrlJasaKons];
    }
    if (urlMappingFinishing[cleanUrlJasaKons]) {
        restoreCondition('JasaKons');
	restoreCondition('JasaFinishing');
           // hapus elemen id DIV Lain
        removeCondition('materialKonsReadymix');
        removeCondition('ProdukKonsSaluran');
        removeCondition('ProdukKonsPembatas');
        removeCondition('JasaKonsPembatas');
        removeCondition('JasaKonsPerbaikanSub');

	// hapus elemen id DIV Lain
	removeCondition('JasaRenovasiPerbaikan');
        removeCondition('JasaStrukturKonstruksi');
        removeCondition('JasaPondasiPerkuatan');
        removeCondition('JasaSaluranDrainase');
        removeCondition('JasaJalanPerkerasan');
        removeCondition('JasaPembatasPengaman');
        removeCondition('JasaKonstruksiCustom');

        JasaKonstruksiLink.style.visibility = 'visible';
        JasaFinishingLink.style.visibility = 'visible';
        pageNameKonstruksi.textContent = urlMappingFinishing[cleanUrlJasaKons];
    }
    if (urlMappingPondasi[cleanUrlJasaKons]) {
        restoreCondition('JasaKons');
	restoreCondition('JasaPondasiPerkuatan');
           // hapus elemen id DIV Lain
        removeCondition('materialKonsReadymix');
        removeCondition('ProdukKonsSaluran');
        removeCondition('ProdukKonsPembatas');
        removeCondition('JasaKonsPembatas');
        removeCondition('JasaKonsPerbaikanSub');
       // hapus elemen id DIV Lain
	removeCondition('JasaRenovasiPerbaikan');
        removeCondition('JasaStrukturKonstruksi');
        removeCondition('JasaFinishing');
        removeCondition('JasaSaluranDrainase');
        removeCondition('JasaJalanPerkerasan');
        removeCondition('JasaPembatasPengaman');
        removeCondition('JasaKonstruksiCustom');

        JasaKonstruksiLink.style.visibility = 'visible';
        JasaPondasiPerkuatanLink.style.visibility = 'visible';
        pageNameKonstruksi.textContent = urlMappingPondasi[cleanUrlJasaKons];
    }
    if (urlMappingSaluran[cleanUrlJasaPerbaikanKons]) {
        restoreCondition('JasaKons');
	 restoreCondition('JasaSaluranDrainase');
           // hapus elemen id DIV Lain
        removeCondition('materialKonsReadymix');
        removeCondition('ProdukKonsSaluran');
        removeCondition('ProdukKonsPembatas');
        removeCondition('JasaKonsPembatas');
        removeCondition('JasaKonsPerbaikanSub');
       // hapus elemen id DIV Lain
	removeCondition('JasaRenovasiPerbaikan');
        removeCondition('JasaStrukturKonstruksi');
        removeCondition('JasaFinishing');
        removeCondition('JasaPondasiPerkuatan');
        removeCondition('JasaJalanPerkerasan');
        removeCondition('JasaPembatasPengaman');
        removeCondition('JasaKonstruksiCustom');

        JasaKonstruksiLink.style.visibility = 'visible';
        JasaSaluranDrainaseLink.style.visibility = 'visible';
        pageNameKonstruksi.textContent = urlMappingSaluran[cleanUrlJasaKons];
    }
    if (urlMappingJalan[cleanUrlJasaKons]) {
        restoreCondition('JasaKons');
	restoreCondition('JasaJalanPerkerasan');
           // hapus elemen id DIV Lain
        removeCondition('materialKonsReadymix');
        removeCondition('ProdukKonsSaluran');
        removeCondition('ProdukKonsPembatas');
        removeCondition('JasaKonsPembatas');
        removeCondition('JasaKonsPerbaikanSub');
       // hapus elemen id DIV Lain
	removeCondition('JasaRenovasiPerbaikan');
        removeCondition('JasaStrukturKonstruksi');
        removeCondition('JasaFinishing');
        removeCondition('JasaPondasiPerkuatan');
        removeCondition('JasaSaluranDrainase');
        removeCondition('JasaPembatasPengaman');
        removeCondition('JasaKonstruksiCustom');

        JasaKonstruksiLink.style.visibility = 'visible';
        JasaJalanPerkerasanLink.style.visibility = 'visible';
        pageNameKonstruksi.textContent = urlMappingJalan[cleanUrlJasaKons];
    }
    if (urlMappingPembatas[cleanUrlJasaKons]) {
        restoreCondition('JasaKons');
	restoreCondition('JasaPembatasPengaman');
           // hapus elemen id DIV Lain
        removeCondition('materialKonsReadymix');
        removeCondition('ProdukKonsSaluran');
        removeCondition('ProdukKonsPembatas');
        removeCondition('JasaKonsPembatas');
        removeCondition('JasaKonsPerbaikanSub');
       // hapus elemen id DIV Lain
	removeCondition('JasaRenovasiPerbaikan');
        removeCondition('JasaStrukturKonstruksi');
        removeCondition('JasaFinishing');
        removeCondition('JasaPondasiPerkuatan');
        removeCondition('JasaSaluranDrainase');
        removeCondition('JasaJalanPerkerasan');
        removeCondition('JasaKonstruksiCustom');

        JasaKonstruksiLink.style.visibility = 'visible';
        JasaPembatasPengamanLink.style.visibility = 'visible';
        pageNameKonstruksi.textContent = urlMappingPembatas[cleanUrlJasaKons];
    }

    if (urlMappingCustome[cleanUrlJasaKons]) {
        restoreCondition('JasaKons');
	restoreCondition('JasaKonstruksiCustom');
           // hapus elemen id DIV Lain
        removeCondition('materialKonsReadymix');
        removeCondition('ProdukKonsSaluran');
        removeCondition('ProdukKonsPembatas');
        removeCondition('JasaKonsPembatas');
        removeCondition('JasaKonsPerbaikanSub');
       // hapus elemen id DIV Lain
	removeCondition('JasaRenovasiPerbaikan');
        removeCondition('JasaStrukturKonstruksi');
        removeCondition('JasaFinishing');
        removeCondition('JasaPondasiPerkuatan');
        removeCondition('JasaSaluranDrainase');
        removeCondition('JasaJalanPerkerasan');
        removeCondition('JasaPembatasPengaman');

        JasaKonstruksiLink.style.visibility = 'visible';
        JasaKonstruksiCustomLink.style.visibility = 'visible';
        pageNameKonstruksi.textContent = urlMappingCustome[cleanUrlJasaKons];
    }
   });
