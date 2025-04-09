 // Cek URL saat ini dan sesuaikan dengan kondisi yang diinginkan
const urlMappingJasaKons = {
//aplikasi nya
"https://www.betonjayareadymix.com/p/jasa-alat-konstruksi.html": "Jasa Alat Konstruksi",
"https://www.betonjayareadymix.com/p/jasa-struktur-konstruksi.html": "Jasa Struktur Konstruksi",
"https://www.betonjayareadymix.com/p/jasa-pondasi-perkuatan-tanah.html": "Jasa Pondasi Perkuatan Tanah",
  "https://www.betonjayareadymix.com/p/jasa-saluran-drainase.html": "Jasa Saluran Drainase",
  "https://www.betonjayareadymix.com/p/jasa-jalan-perkerasan.html": "Jasa Jalan Perkerasan",
  "https://www.betonjayareadymix.com/p/jasa-pembatas-pengaman.html": "Jasa Pembatas Pengaman",
  "https://www.betonjayareadymix.com/p/jasa-renovasi-perbaikan.html": "Jasa Renovasi Perbaikan",
  "https://www.betonjayareadymix.com/p/jasa-finishing.html": "Jasa Finishing",
	
  //"https://www.betonjayareadymix.com/p/jasa-konstruksi-custom.html": "Jasa Konstruksi Custom",

//jasa secara umum
/*
 "https://www.betonjayareadymix.com/p/jasa-alat-konstruksi.html": "Jasa Alat Konstruksi",
 "https://www.betonjayareadymix.com/p/jasa-konstruksi-bangunan.html": "Jasa Konstruksi Bangunan",
  "https://www.betonjayareadymix.com/p/jasa-konstruksi-infrastruktur.html": "Jasa Konstruksi Infrastruktur",
  "https://www.betonjayareadymix.com/p/jasa-konstruksi-indonesia.html": "Jasa Konstruksi Indonesia",
  */
//panduan jasa konstruksi
  "https://www.betonjayareadymix.com/p/panduan-membangun-bangunan.html": "Panduan Membangun Bangunan",
  "https://www.betonjayareadymix.com/p/panduan-renovasi-bangunan.html": "Panduan Renovasi Bangunan",
  "https://www.betonjayareadymix.com/p/panduan-perbaikan-bangunan.html": "Panduan Perbaikan Bangunan",
  "https://www.betonjayareadymix.com/p/panduan-finishing-bangunan.html": "Panduan Finishing Bangunan",

  "https://www.betonjayareadymix.com/p/panduan-pembuatan-infrastruktur.html": "Panduan Pembuatan Infrastruktur",
  "https://www.betonjayareadymix.com/p/panduan-renovasi-infrastruktur.html": "Panduan Renovasi Infrastruktur",
  "https://www.betonjayareadymix.com/p/panduan-perbaikan-infrastruktur.html": "Panduan Perbaikan Infrastruktur",
  "https://www.betonjayareadymix.com/p/panduan-finishing-infrastruktur.html": "Panduan Finishing Infrastruktur"

};

const urlMappingPerbaikan = {	
	"https://www.betonjayareadymix.com/p/jasa-renovasi-perbaikan-fasilitas-umum.html": "Jasa Renovasi Perbaikan Fasilitas Umum",
	"https://www.betonjayareadymix.com/p/jasa-renovasi-perbaikan-bangunan.html": "Jasa Renovasi Perbaikan Bangunan",
	 "https://www.betonjayareadymix.com/p/jasa-renovasi-dan-perbaikan-interior.html": "Jasa Renovasi dan Perbaikan Interior",
	"https://www.betonjayareadymix.com/p/jasa-renovasi-perbaikan-fasad-eksterior.html": "Jasa Renovasi Perbaikan Fasad Eksterior",
	"https://www.betonjayareadymix.com/p/jasa-renovasi-perbaikan-infrastruktur.html": "Jasa Renovasi Perbaikan Infrastruktur",
	"https://www.betonjayareadymix.com/p/jasa-renovasi-perbaikan-struktur.html": "Jasa Renovasi Perbaikan Struktur"
  //  "https://www.betonjayareadymix.com/p/jasa-renovasi-perbaikan-dinding.html": "Jasa Renovasi Perbaikan Dinding"

};

const urlMappingFinishing = {
"https://www.betonjayareadymix.com/p/jasa-finishing-interior.html": "Jasa Finishing Interior",
  "https://www.betonjayareadymix.com/p/jasa-finishing-eksterior.html": "Jasa Finishing Eksterior",
  "https://www.betonjayareadymix.com/p/jasa-finishing-struktur.html": "Jasa Finishing Struktur"
/*
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
*/
};

const urlMappingStruktur = {
"https://www.betonjayareadymix.com/p/jasa-konstruksi-gedung-dan-hunian.html": "Jasa Konstruksi Gedung dan Hunian",
  "https://www.betonjayareadymix.com/p/jasa-konstruksi-industri-dan-gudang.html": "Jasa Konstruksi Industri dan Gudang",
  "https://www.betonjayareadymix.com/p/jasa-struktur-baja-dan-rangka-ringan.html": "Jasa Struktur Baja dan Rangka Ringan",
  "https://www.betonjayareadymix.com/p/jasa-struktur-khusus.html": "Jasa Struktur Khusus",
  "https://www.betonjayareadymix.com/p/jasa-konstruksi-lapangan-olahraga.html": "Jasa Konstruksi Lapangan Olahraga",
  "https://www.betonjayareadymix.com/p/jasa-konstruksi-modular-dan-precast.html": "Jasa Konstruksi Modular dan Precast",
  "https://www.betonjayareadymix.com/p/jasa-struktur-pengecoran-beton.html": "Jasa Struktur Pengecoran Beton"

};

const urlMappingPondasi = {
"https://www.betonjayareadymix.com/p/jasa-pondasi-bangunan.html": "Jasa Pondasi Bangunan",
//Jasa Perkuatan dan Stabilisasi Tanah tidak di masukkan karna sudah ada di artikel lain yaitu
//Jasa Perkuatan Tanah dan Jasa Pemadatan dan Persiapan Lahan yang kedua nya bisa mencakup
 //"https://www.betonjayareadymix.com/p/jasa-perkuatan-dan-stabilisasi-tanah.html": "Jasa Perkuatan dan Stabilisasi Tanah",
  "https://www.betonjayareadymix.com/p/jasa-pemadatan-dan-persiapan-lahan.html": "Jasa Pemadatan dan Persiapan Lahan",
  "https://www.betonjayareadymix.com/p/jasa-perkuatan-tanah.html": "Jasa Perkuatan Tanah",
  "https://www.betonjayareadymix.com/p/jasa-retrofitting-pondasi.html": "Jasa Retrofitting Pondasi"

};

const urlMappingSaluran = {

};

const urlMappingJalan = {
"https://www.betonjayareadymix.com/p/jasa-pembangunan-infrastruktur-jalan.html": "Jasa Pembangunan Infrastruktur Jalan",
"https://www.betonjayareadymix.com/p/jasa-pemadatan-dan-persiapan-tanah-jalan.html": "Jasa Pemadatan dan Persiapan Tanah Jalan",
"https://www.betonjayareadymix.com/p/jasa-perkerasan-jalan.html": "Jasa Perkerasan Jalan"
/*
"https://www.betonjayareadymix.com/p/jasa-pengecoran-jalan-beton.html": "Jasa Pengecoran Jalan Beton",
  "https://www.betonjayareadymix.com/p/jasa-pengaspalan-jalan.html": "Jasa Pengaspalan Jalan",
  "https://www.betonjayareadymix.com/p/jasa-pemadatan-tanah.html": "Jasa Pemadatan Tanah",
  "https://www.betonjayareadymix.com/p/jasa-pembuatan-jalan-setapak-dan-trotoar.html": "Jasa Pembuatan Jalan Setapak dan Trotoar",
  "https://www.betonjayareadymix.com/p/jasa-pemasangan-paving-block.html": "Jasa Pemasangan Paving Block",
  "https://www.betonjayareadymix.com/p/jasa-pembangunan-infrastruktur-jalan.html": "Jasa Pembangunan Infrastruktur Jalan"
*/
};

const urlMappingPembatas = {
"https://www.betonjayareadymix.com/p/jasa-pengamanan-area-proyek.html": "Jasa Pengamanan Area Proyek",
  "https://www.betonjayareadymix.com/p/jasa-rambu-dan-sistem-keamanan-visual.html": "Jasa Rambu dan Sistem Keamanan Visual",
  "https://www.betonjayareadymix.com/p/jasa-pengaman-sisi-jalan-infrastruktur.html": "Jasa Pengaman Sisi Jalan Infrastruktur",
  "https://www.betonjayareadymix.com/p/jasa-pembuatan-pagar-dinding-pembatas.html": "Jasa Pembuatan Pagar Dinding Pembatas"

};
/*
const urlMappingCustom = {

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
    const cleanUrlJasaKons = window.location.href.split(/[?#]/)[0]; // Menghilangkan parameter seperti ?m=1

     // Menemukan elemen menggunakan Id
    var JasaKons = document.getElementById("JasaKons");
    var JasaKonsSub = document.getElementById("JasaKonsSub");
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
	
if (!JasaKons && !JasaKons) {
console.error("elemen Id JasaKons dan Id JasaKonsSub kondisi terhapus");
        return;
}
if (!JasaKons || !JasaKonsSub) {
	if (!JasaKons) {
	console.error("elemen Id JasaKons kondisi terhapus");
	}
	if (!JasaKonsSub) {
	console.error("elemen Id JasaKonsSub kondisi terhapus");
}
}
	//bagian2 dari jasa konstruksi umum dan panduan
	var JasaKonstruksiLink = document.getElementById("JasaKonstruksi");
     	var JasaKonstruksiSubLink = document.getElementById("JasaKonstruksiSub");
	
	//bagian2 dari jasa konstruksi aplikasi
	var JasaRenovasiPerbaikanLink = document.getElementById("JasaRenovasiPerbaikan");
        var JasaStrukturKonstruksiLink = document.getElementById("JasaStrukturKonstruksi");
	var JasaFinishingLink = document.getElementById("JasaFinishing");
	var JasaPondasiPerkuatanLink = document.getElementById("JasaPondasiPerkuatan");
	var JasaSaluranDrainaseLink = document.getElementById("JasaSaluranDrainase");
	var JasaJalanPerkerasanLink = document.getElementById("JasaJalanPerkerasan");
	var JasaPembatasPengamanLink = document.getElementById("JasaPembatasPengaman");
	//var JasaKonstruksiCustomLink = document.getElementById("JasaKonstruksiCustom");
	
     var pageNameKonstruksi = document.getElementById("pageNameKonstruksi");
     var pageNameKonstruksiSub = document.getElementById("pageNameKonstruksiSub");
    

     // Default untuk menyembunyikan elemen
     JasaKonstruksiLink.style.visibility = 'hidden';
     JasaKonstruksiSubLink.style.visibility = 'hidden';
     	JasaRenovasiPerbaikanLink.style.visibility = 'hidden';
	JasaStrukturKonstruksiLink.style.visibility = 'hidden';
	JasaFinishingLink.style.visibility = 'hidden';
	JasaPondasiPerkuatanLink.style.visibility = 'hidden';
	JasaSaluranDrainaseLink.style.visibility = 'hidden';
	JasaJalanPerkerasanLink.style.visibility = 'hidden';
	JasaPembatasPengamanLink.style.visibility = 'hidden';
	//JasaKonstruksiCustomLink.style.visibility = 'hidden';
     pageNameKonstruksi.textContent = "";
      pageNameKonstruksiSub.textContent = "";
	
    if (urlMappingJasaKons[cleanUrlJasaKons]) {
        restoreCondition('JasaKons');
	restoreCondition('JasaKonstruksi');
           // hapus elemen id DIV Lain
        removeCondition('materialKonsReadymix');
        removeCondition('ProdukKonsSaluran');
        removeCondition('ProdukKonsPembatas');
        removeCondition('JasaKonsPembatas');
        removeCondition('JasaKonsPerbaikanSub');
	removeCondition('JasaKonsSub');
	    
       // hapus elemen id DIV Lain

        JasaKonstruksiLink.style.visibility = 'visible';
        pageNameKonstruksi.textContent = urlMappingJasaKons[cleanUrlJasaKons];
    }

    if (urlMappingPerbaikan[cleanUrlJasaKons]) {
        restoreCondition('JasaKonsSub');
	//restoreCondition('JasaKonstruksi');
	restoreCondition('JasaRenovasiPerbaikan');
           // hapus elemen id DIV Lain
        removeCondition('materialKonsReadymix');
        removeCondition('ProdukKonsSaluran');
        removeCondition('ProdukKonsPembatas');
        removeCondition('JasaKonsPembatas');
        removeCondition('JasaKonsPerbaikanSub');
	removeCondition('JasaKons');

	// hapus elemen id DIV Lain
	removeCondition('JasaStrukturKonstruksi');
        removeCondition('JasaFinishing');
        removeCondition('JasaPondasiPerkuatan');
        removeCondition('JasaSaluranDrainase');
        removeCondition('JasaJalanPerkerasan');
        removeCondition('JasaPembatasPengaman');

        JasaKonstruksiSubLink.style.visibility = 'visible';
        JasaRenovasiPerbaikanLink.style.visibility = 'visible';
	    
        pageNameKonstruksiSub.textContent = urlMappingPerbaikan[cleanUrlJasaKons];
    }
    if (urlMappingStruktur[cleanUrlJasaKons]) {
        restoreCondition('JasaKonsSub');
	restoreCondition('JasaStrukturKonstruksi');
           // hapus elemen id DIV Lain
        removeCondition('materialKonsReadymix');
        removeCondition('ProdukKonsSaluran');
        removeCondition('ProdukKonsPembatas');
        removeCondition('JasaKonsPembatas');
        removeCondition('JasaKonsPerbaikanSub');
	removeCondition('JasaKons');

	// hapus elemen id DIV Lain
	removeCondition('JasaRenovasiPerbaikan');
        removeCondition('JasaFinishing');
        removeCondition('JasaPondasiPerkuatan');
        removeCondition('JasaSaluranDrainase');
        removeCondition('JasaJalanPerkerasan');
        removeCondition('JasaPembatasPengaman');
       // removeCondition('JasaKonstruksiCustom');

        JasaKonstruksiSubLink.style.visibility = 'visible';
        JasaStrukturKonstruksiLink.style.visibility = 'visible';
        pageNameKonstruksiSub.textContent = urlMappingStruktur[cleanUrlJasaKons];
    }
    if (urlMappingFinishing[cleanUrlJasaKons]) {
        restoreCondition('JasaKonsSub');
	restoreCondition('JasaFinishing');
           // hapus elemen id DIV Lain
        removeCondition('materialKonsReadymix');
        removeCondition('ProdukKonsSaluran');
        removeCondition('ProdukKonsPembatas');
        removeCondition('JasaKonsPembatas');
        removeCondition('JasaKonsPerbaikanSub');
	removeCondition('JasaKons');

	// hapus elemen id DIV Lain
	removeCondition('JasaRenovasiPerbaikan');
        removeCondition('JasaStrukturKonstruksi');
        removeCondition('JasaPondasiPerkuatan');
        removeCondition('JasaSaluranDrainase');
        removeCondition('JasaJalanPerkerasan');
        removeCondition('JasaPembatasPengaman');
       // removeCondition('JasaKonstruksiCustom');

        JasaKonstruksiSubLink.style.visibility = 'visible';
        JasaFinishingLink.style.visibility = 'visible';
        pageNameKonstruksiSub.textContent = urlMappingFinishing[cleanUrlJasaKons];
    }
    if (urlMappingPondasi[cleanUrlJasaKons]) {
        restoreCondition('JasaKonsSub');
	restoreCondition('JasaPondasiPerkuatan');
           // hapus elemen id DIV Lain
        removeCondition('materialKonsReadymix');
        removeCondition('ProdukKonsSaluran');
        removeCondition('ProdukKonsPembatas');
        removeCondition('JasaKonsPembatas');
        removeCondition('JasaKonsPerbaikanSub');
	removeCondition('JasaKons');
	    
       // hapus elemen id DIV Lain
	removeCondition('JasaRenovasiPerbaikan');
        removeCondition('JasaStrukturKonstruksi');
        removeCondition('JasaFinishing');
        removeCondition('JasaSaluranDrainase');
        removeCondition('JasaJalanPerkerasan');
        removeCondition('JasaPembatasPengaman');
       // removeCondition('JasaKonstruksiCustom');

        JasaKonstruksiSubLink.style.visibility = 'visible';
        JasaPondasiPerkuatanLink.style.visibility = 'visible';
        pageNameKonstruksiSub.textContent = urlMappingPondasi[cleanUrlJasaKons];
    }
    if (urlMappingSaluran[cleanUrlJasaKons]) {
        restoreCondition('JasaKonsSub');
	 restoreCondition('JasaSaluranDrainase');
           // hapus elemen id DIV Lain
        removeCondition('materialKonsReadymix');
        removeCondition('ProdukKonsSaluran');
        removeCondition('ProdukKonsPembatas');
        removeCondition('JasaKonsPembatas');
        removeCondition('JasaKonsPerbaikanSub');
	removeCondition('JasaKons');
       // hapus elemen id DIV Lain
	removeCondition('JasaRenovasiPerbaikan');
        removeCondition('JasaStrukturKonstruksi');
        removeCondition('JasaFinishing');
        removeCondition('JasaPondasiPerkuatan');
        removeCondition('JasaJalanPerkerasan');
        removeCondition('JasaPembatasPengaman');
       // removeCondition('JasaKonstruksiCustom');

        JasaKonstruksiSubLink.style.visibility = 'visible';
        JasaSaluranDrainaseLink.style.visibility = 'visible';
        pageNameKonstruksiSub.textContent = urlMappingSaluran[cleanUrlJasaKons];
    }
    if (urlMappingJalan[cleanUrlJasaKons]) {
        restoreCondition('JasaKonsSub');
	restoreCondition('JasaJalanPerkerasan');
           // hapus elemen id DIV Lain
        removeCondition('materialKonsReadymix');
        removeCondition('ProdukKonsSaluran');
        removeCondition('ProdukKonsPembatas');
        removeCondition('JasaKonsPembatas');
        removeCondition('JasaKonsPerbaikanSub');
	removeCondition('JasaKons');
       // hapus elemen id DIV Lain
	removeCondition('JasaRenovasiPerbaikan');
        removeCondition('JasaStrukturKonstruksi');
        removeCondition('JasaFinishing');
        removeCondition('JasaPondasiPerkuatan');
        removeCondition('JasaSaluranDrainase');
        removeCondition('JasaPembatasPengaman');
        //removeCondition('JasaKonstruksiCustom');

        JasaKonstruksiSubLink.style.visibility = 'visible';
        JasaJalanPerkerasanLink.style.visibility = 'visible';
        pageNameKonstruksiSub.textContent = urlMappingJalan[cleanUrlJasaKons];
    }
    if (urlMappingPembatas[cleanUrlJasaKons]) {
        restoreCondition('JasaKonsSub');
	restoreCondition('JasaPembatasPengaman');
           // hapus elemen id DIV Lain
        removeCondition('materialKonsReadymix');
        removeCondition('ProdukKonsSaluran');
        removeCondition('ProdukKonsPembatas');
        removeCondition('JasaKonsPembatas');
        removeCondition('JasaKonsPerbaikanSub');
	removeCondition('JasaKons');
       // hapus elemen id DIV Lain
	removeCondition('JasaRenovasiPerbaikan');
        removeCondition('JasaStrukturKonstruksi');
        removeCondition('JasaFinishing');
        removeCondition('JasaPondasiPerkuatan');
        removeCondition('JasaSaluranDrainase');
        removeCondition('JasaJalanPerkerasan');
       // removeCondition('JasaKonstruksiCustom');

        JasaKonstruksiSubLink.style.visibility = 'visible';
        JasaPembatasPengamanLink.style.visibility = 'visible';
        pageNameKonstruksiSub.textContent = urlMappingPembatas[cleanUrlJasaKons];
    }
/*
    if (urlMappingCustom[cleanUrlJasaKons]) {
        restoreCondition('JasaKonsSub');
	restoreCondition('JasaKonstruksiCustom');
           // hapus elemen id DIV Lain
        removeCondition('materialKonsReadymix');
        removeCondition('ProdukKonsSaluran');
        removeCondition('ProdukKonsPembatas');
        removeCondition('JasaKonsPembatas');
        removeCondition('JasaKonsPerbaikanSub');
	removeCondition('JasaKons');
       // hapus elemen id DIV Lain
	removeCondition('JasaRenovasiPerbaikan');
        removeCondition('JasaStrukturKonstruksi');
        removeCondition('JasaFinishing');
        removeCondition('JasaPondasiPerkuatan');
        removeCondition('JasaSaluranDrainase');
        removeCondition('JasaJalanPerkerasan');
        removeCondition('JasaPembatasPengaman');

        JasaKonstruksiSubLink.style.visibility = 'visible';
        JasaKonstruksiCustomLink.style.visibility = 'visible';
        pageNameKonstruksiSub.textContent = urlMappingCustom[cleanUrlJasaKons];
    }
    */
   });
