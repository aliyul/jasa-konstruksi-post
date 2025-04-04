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

const urlMappingPerbaikanStruktur = {
//Jasa Penguatan & Perbaikan Pondasi
   "https://www.betonjayareadymix.com/p/jasa-perbaikan-retak-struktur.html": "Jasa Perbaikan Retak Struktur",
     "https://www.betonjayareadymix.com/p/jasa-perbaikan-pondasi-bangunan.html": "Jasa Perbaikan Pondasi Bangunan",
     "https://www.betonjayareadymix.com/p/jasa-perbaikan-lantai-struktur.html": "Jasa Perbaikan Lantai Struktur",
     "https://www.betonjayareadymix.com/p/jasa-perbaikan-struktur-jembatan.html": "Jasa Perbaikan Struktur Jembatan",
     "https://www.betonjayareadymix.com/p/jasa-perbaikan-struktur-gedung.html": "Jasa Perbaikan Struktur Gedung Bertingkat",
      "https://www.betonjayareadymix.com/p/jasa-perbaikan-struktur-gedung.html": "Jasa Perbaikan Struktur Gedung Bertingkat",
 
//Jasa Renovasi Struktur
   "https://www.betonjayareadymix.com/p/jasa-penguatan-struktur-bangunan.html": "Jasa Penguatan Struktur Bangunan",
    "https://www.betonjayareadymix.com/p/jasa-penguatan-pondasi-bangunan.html": "Jasa Penguatan Pondasi Bangunan",
     "https://www.betonjayareadymix.com/p/jasa-renovasi-perbaikan-fondasi-rumah.html": "Jasa Renovasi Perbaikan fondasi Rumah",
    "https://www.betonjayareadymix.com/p/jasa-renovasi-perbaikan-bangunan-miring.html": "Jasa Renovasi Perbaikan Bangunan Miring",    
    "https://www.betonjayareadymix.com/p/jasa-renovasi-perbaikan-tiangan-beton.html": "Jasa Renovasi Perbaikan Tiang Beton",
 
    "https://www.betonjayareadymix.com/p/jasa-renovasi-pondasi.html": "Jasa Renovasi Pondasi",
     "https://www.betonjayareadymix.com/p/jasa-renovasi-lantai-beton-bertulang.html": "Jasa Renovasi Lantai Beton Bertulang",
     "https://www.betonjayareadymix.com/p/jasa-renovasi-kolom-balok.html": "Jasa Renovasi Kolom & Balok",
     "https://www.betonjayareadymix.com/p/jasa-renovasi-atap-beton.html": "Jasa Renovasi Atap Beton",
     "https://www.betonjayareadymix.com/p/jasa-jacketing-kolom-balok.html": "Jasa Jacketing Kolom & Balok",
     "https://www.betonjayareadymix.com/p/jasa-perkuatan-struktur-cfrp.html": "Jasa Perkuatan Struktur dengan CFRP",
   "https://www.betonjayareadymix.com/p/jasa-renovasi-perbaikan-retak-struktur.html": "Jasa Renovasi Retak Struktur",
    
 
     //Perbaikan Struktur Retak & Kerusakan Beton
     "https://www.betonjayareadymix.com/p/jasa-chipping-beton.html": "Jasa Chipping Beton",
    "https://www.betonjayareadymix.com/p/harga-chipping-beton-per-m2.html": "Harga Chipping Beton Per M2",
      "https://www.betonjayareadymix.com/p/jasa-bobok-beton.html": "Jasa Bobok Beton",

    "https://www.betonjayareadymix.com/p/jasa-injeksi-beton-retak.html": "Jasa Injeksi Beton Retak",
     "https://www.betonjayareadymix.com/p/jasa-injeksi-retak-beton.html": "Jasa Injeksi Retak Beton",
    "https://www.betonjayareadymix.com/p/jasa-borongan-injeksi-beton-retak.html": "Jasa Borongan Injeksi Beton Retak",
   "https://www.betonjayareadymix.com/p/jasa-shotcrete-beton.html": "Jasa Shotcrete Beton",
   "https://www.betonjayareadymix.com/p/harga-jasa-shotcrete-beton.html": "Harga Jasa Shotcrete Beton",
   "https://www.betonjayareadymix.com/p/jasa-borongan-shotcrete-beton.html": "Jasa Borongan Shotcrete Beton",
   "https://www.betonjayareadymix.com/p/jasa-grouting-struktur-beton.html": "Jasa Grouting Struktur Beton",
   "https://www.betonjayareadymix.com/p/jasa-perbaikan-beton-mengelupas.html": "Jasa Perbaikan Beton Mengelupas",
   "https://www.betonjayareadymix.com/p/jasa-perbaikan-beton-keropos.html": "Jasa Perbaikan Beton Keropos",
   "https://www.betonjayareadymix.com/p/jasa-pengecoran-ulang-struktur.html": "Jasa Pengecoran Ulang Struktur",

   "https://www.betonjayareadymix.com/p/jasa-perbaikan-kolom-beton.html": "Jasa Perbaikan Kolom Beton",
   "https://www.betonjayareadymix.com/p/jasa-perbaikan-balok-beton.html": "Jasa Perbaikan Balok Beton",
    "https://www.betonjayareadymix.com/p/jasa-perbaikan-kolom-balok-beton.html": "Jasa Perbaikan Kolom & Balok Beton",
    "https://www.betonjayareadymix.com/p/jasa-perbaikan-retak-beton.html": "Jasa Perbaikan Retak Beton",
    "https://www.betonjayareadymix.com/p/jasa-repair-struktur-beton.html": "Jasa Repair Struktur Beton",
    "https://www.betonjayareadymix.com/p/jasa-renovasi-struktur-beton.html": "Jasa Renovasi Struktur Beton",
    "https://www.betonjayareadymix.com/p/jasa-renovasi-balok-beton.html": "Jasa Renovasi Balok Beton",
    "https://www.betonjayareadymix.com/p/jasa-renovasi-kolom-beton.html": "Jasa Renovasi Kolom Beton",
    "https://www.betonjayareadymix.com/p/jasa-perbaikan-balok-gantung.html": "Jasa Perbaikan Balok Gantung",
    "https://www.betonjayareadymix.com/p/jasa-beton-karbonasi.html": "Jasa Beton Karbonasi",
 
 //Perbaikan & Penguatan Lantai
  "https://www.betonjayareadymix.com/p/harga-bobok-lantai-beton-per-m2.html": "Harga Bobok Lantai Beton Per M2",  
 "https://www.betonjayareadymix.com/p/harga-borongan-bobok-lantai-beton.html": "Harga Borongan Bobok Lantai Beton",

 "https://www.betonjayareadymix.com/p/jasa-bobok-lantai-beton.html": "Jasa Bobok Lantai Beton",  
 "https://www.betonjayareadymix.com/p/jasa-perbaikan-lantai.html": "Jasa Perbaikan Lantai",  
 "https://www.betonjayareadymix.com/p/jasa-lantai-ambles.html": "Jasa Lantai Ambles",  
 "https://www.betonjayareadymix.com/p/jasa-renovasi-lantai.html": "Jasa Renovasi Lantai",  
 "https://www.betonjayareadymix.com/p/jasa-perbaikan-lantai-rusak.html": "Jasa Perbaikan Lantai Rusak",  
 "https://www.betonjayareadymix.com/p/jasa-renovasi-lantai-rusak.html": "Jasa Renovasi Lantai Rusak",  
 "https://www.betonjayareadymix.com/p/jasa-bobok-lantai-lama.html": "Jasa Bobok Lantai Lama",  
 "https://www.betonjayareadymix.com/p/jasa-ganti-lantai-ambles.html": "Jasa Ganti Lantai Ambles",
 "https://www.betonjayareadymix.com/p/jasa-perbaikan-lantai-ambles.html": "Jasa Perbaikan Lantai Ambles",

 //Perbaikan Struktur Dinding dan Kolom
 "https://www.betonjayareadymix.com/p/jasa-perbaikan-dinding-retak-struktur.html": "Jasa Perbaikan Dinding Retak Struktur",
 "https://www.betonjayareadymix.com/p/jasa-perbaikan-kolom-struktur.html": "Jasa Perbaikan Kolom Struktur",
 "https://www.betonjayareadymix.com/p/jasa-injeksi-dinding-retak.html": "Jasa Injeksi Dinding Retak",
 "https://www.betonjayareadymix.com/p/jasa-penggantian-dinding-bata.html": "Jasa Penggantian Dinding Bata",
 "https://www.betonjayareadymix.com/p/jasa-perbaikan-dinding-lembab.html": "Jasa Perbaikan Dinding Lembab",
 "https://www.betonjayareadymix.com/p/jasa-perbaikan-struktur-bangunan-tua.html": "Jasa Perbaikan Struktur Bangunan Tua",
 "https://www.betonjayareadymix.com/p/jasa-renovasi-dinding-bangunan.html": "Jasa Renovasi Dinding Bangunan",

"https://www.betonjayareadymix.com/p/jasa-bobok-tembok.html": "Jasa Bobok Tembok",
 "https://www.betonjayareadymix.com/p/harga-jasa-bobok-tembok.html": "Harga Jasa Bobok Tembok",
 "https://www.betonjayareadymix.com/p/jasa-tukang-bobok-tembok.html": "Jasa Tukang Bobok Tembok",

 
 "https://www.betonjayareadymix.com/p/jasa-renovasi-perbaikan-dinding-retak.html": "Jasa Renovasi Perbaikan Dinding Retak",
 "https://www.betonjayareadymix.com/p/jasa-renovasi-perbaikan-dinding-lembab.html": "Jasa Renovasi Perbaikan Dinding Lembab",
 "https://www.betonjayareadymix.com/p/jasa-bobok-dinding-instalasi.html": "Jasa Bobok Dinding Instalasi",
 "https://www.betonjayareadymix.com/p/jasa-renovasi-penggantian-dinding-bata.html": "Jasa Renovasi Penggantian Dinding Bata",
 "https://www.betonjayareadymix.com/p/jasa-perbaikan-penggantian-dinding-bata.html": "Jasa Perbaikan Penggantian Dinding Bata",
 
 "https://www.betonjayareadymix.com/p/jasa-renovasi-perbaikan-dinding-jakarta.html": "Jasa Renovasi Perbaikan Dinding  Jakarta",
 "https://www.betonjayareadymix.com/p/jasa-renovasi-perbaikan-dinding-bogor.html": "Jasa Renovasi Perbaikan Dinding Bogor",
 "https://www.betonjayareadymix.com/p/jasa-renovasi-perbaikan-dinding-depok.html": "Jasa Renovasi Perbaikan Dinding Depok",
 "https://www.betonjayareadymix.com/p/jasa-perbaikan-dinding-tangerang.html": "Jasa Perbaikan Dinding Tangerang",
"https://www.betonjayareadymix.com/p/jasa-renovasi-dinding-tangerang.html": "Jasa Renovasi Dinding Tangerang",
 "https://www.betonjayareadymix.com/p/jasa-renovasi-perbaikan-dinding-bekasi.html": "Jasa Renovasi Perbaikan Dinding Bekasi",
 "https://www.betonjayareadymix.com/p/jasa-perbaikan-dinding-karawang.html": "Jasa Perbaikan Dinding Karawang",
 "https://www.betonjayareadymix.com/p/jasa-renovasi-dinding-karawang.html": "Jasa Renovasi Dinding Karawang"
 
};
const urlMappingPerbaikanInfrastruktur = {

 "https://www.betonjayareadymix.com/p/jasa-perbaikan-dan-perawatan-jalan.html": "Jasa Perbaikan dan Perawatan Jalan"
};

const urlMappingPerbaikanAtap = {
 "https://www.betonjayareadymix.com/p/jasa-perbaikan-plafon.html": "Jasa Perbaikan Plafon",
 "https://www.betonjayareadymix.com/p/jasa-perbaikan-atap-bocor.html": "Jasa Perbaikan Atap Bocor",
  "https://www.betonjayareadymix.com/p/jasa-renovasi-perbaikan-atap-gudang.html": "Jasa Renovasi Perbaikan Atap Gudang",
  "https://www.betonjayareadymix.com/p/jasa-renovasi-perbaikan-atap-kanopi.html": "Jasa Renovasi Perbaikan Atap Kanopi",
  "https://www.betonjayareadymix.com/p/jasa-renovasi-perbaikan-atap-baja-ringan.html": "Jasa Renovasi Perbaikan Atap Baja Ringan",
  "https://www.betonjayareadymix.com/p/jasa-renovasi-perbaikan-rangka-atap.html": "Jasa Renovasi Perbaikan Rangka Atap",
  "https://www.betonjayareadymix.com/p/jasa-renovasi-perbaikan-talang-air.html": "Jasa Renovasi Perbaikan Talang Air"
};

const urlMappingPerbaikanInterior = {

 "https://www.betonjayareadymix.com/p/jasa-bongkar-keramik.html": "Jasa Bongkar Keramik"
};
// Menyimpan elemen yang dihapus dalam variabel
let removedElementsJasaPerbaikanKons = {};
let removedElementsJasaPerbaikanKons1 = {};
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
        console.log(`Elemen dengan ID ${conditionId} tidak ditemukan di removedElementsJasaPerbaikanKons1.`);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    // var currentUrl = window.location.href;
     //const cleanUrl = currentUrl.split('?')[0]; // Menghapus parameter seperti ?m=1
    const cleanUrlJasaPerbaikanKons = window.location.href.split(/[?#]/)[0]; // Menghilangkan parameter seperti ?m=1

     // Menemukan elemen menggunakan Id
    var JasaKonsPerbaikan = document.getElementById("JasaKonsPerbaikan");
    var JasaKonsPerbaikan1 = document.getElementById("JasaKonsPerbaikan1");
    if (JasaKonsPerbaikan) {
	if (JasaKonsPerbaikan1) {
		
    	} else {
       	console.error("elemen Id JasaKonsPerbaikan1 kondisi terhapus");
        return;
	}
    } else if (JasaKonsPerbaikan1) {
	console.error("elemen Id JasaKonsPerbaikan kondisi terhapus");
    } else {
     	console.error("elemen Id JasaKonsPerbaikan kondisi terhapus");
       	console.error("elemen Id JasaKonsPerbaikan1 kondisi terhapus");
        return;
    }

if (JasaKonsPerbaikan) {
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
        removeCondition1('JasaKonsPerbaikan1');
       
        JasaKonstruksiPerbaikanLink.style.visibility = 'visible';
        JasaRenovasiPerbaikanLink.style.visibility = 'visible';
        pageNameKonstruksiPerbaikan.textContent = urlMappingPerbaikan[cleanUrlJasaPerbaikanKons];
    }
}
if (JasaKonsPerbaikan1) {
     var JasaKonstruksiPerbaikanLink1 = document.getElementById("JasaKonstruksiPerbaikan1");
     var JasaRenovasiPerbaikanLink1 = document.getElementById("JasaRenovasiPerbaikan1");
     var JasaRenovasiPerbaikanStrukturLink = document.getElementById("JasaRenovasiPerbaikanStruktur");
     var JasaRenovasiPerbaikanInfrastrukturLink = document.getElementById("JasaRenovasiPerbaikanInfrastruktur");
     var JasaRenovasiPerbaikanAtapLink = document.getElementById("JasaRenovasiPerbaikanAtap");
     var JasaRenovasiPerbaikanInteriorLink = document.getElementById("JasaRenovasiPerbaikanInterior");
     var pageNameKonstruksiPerbaikan1 = document.getElementById("pageNameKonstruksiPerbaikan1");
    
     // Default untuk menyembunyikan elemen
     JasaKonstruksiPerbaikanLink1.style.visibility = 'hidden';
     JasaRenovasiPerbaikanLink1.style.visibility = 'hidden';
     JasaRenovasiPerbaikanStrukturLink.style.visibility = 'hidden';
     JasaRenovasiPerbaikanInfrastrukturLink.style.visibility = 'hidden';
     JasaRenovasiPerbaikanAtapLink.style.visibility = 'hidden';
     JasaRenovasiPerbaikanInteriorLink.style.visibility = 'hidden';
     pageNameKonstruksiPerbaikan1.textContent = "";

    if (urlMappingPerbaikanStruktur[cleanUrlJasaPerbaikanKons]) {
        restoreCondition('JasaKonsPerbaikan1');
        restoreCondition('JasaRenovasiPerbaikanStruktur');
           // hapus elemen id DIV Lain
        removeCondition('materialKonsReadymix');
        removeCondition('ProdukKonsSaluran');
        removeCondition('ProdukKonsPembatas');
        removeCondition('JasaKonsPembatas');
	removeCondition('JasaKonsPerbaikan');
	
        removeCondition('JasaRenovasiPerbaikanInfrastruktur');
        removeCondition('JasaRenovasiPerbaikanAtap');
        removeCondition('JasaRenovasiPerbaikanInterior');
       
        JasaKonstruksiPerbaikanLink1.style.visibility = 'visible';
        JasaRenovasiPerbaikanLink1.style.visibility = 'visible';
        JasaRenovasiPerbaikanStrukturLink.style.visibility = 'visible';
        pageNameKonstruksiPerbaikan1.textContent = urlMappingPerbaikanStruktur[cleanUrlJasaPerbaikanKons];
    }
    if (urlMappingPerbaikanInfrastruktur[cleanUrlJasaPerbaikanKons]) {
        restoreCondition('JasaKonsPerbaikan1');
        restoreCondition('JasaRenovasiPerbaikanInfrastruktur');
     
       // hapus elemen id DIV Lain
        removeCondition('materialKonsReadymix');
        removeCondition('ProdukKonsSaluran');
        removeCondition('ProdukKonsPembatas');
        removeCondition('JasaKonsPembatas');
	removeCondition('JasaKonsPerbaikan');

        // hapus elemen JasaPerbaikanKons Lain
        removeCondition('JasaRenovasiPerbaikanStruktur');
        removeCondition('JasaRenovasiPerbaikanAtap');
        removeCondition('JasaRenovasiPerbaikanInterior');
     
        JasaKonstruksiPerbaikanLink1.style.visibility = 'visible';
        JasaRenovasiPerbaikanLink1.style.visibility = 'visible';
        JasaRenovasiPerbaikanInfrastrukturLink.style.visibility = 'visible';
        pageNameKonstruksiPerbaikan1.textContent = urlMappingPerbaikanInfrastruktur[cleanUrlJasaPerbaikanKons];
    }
   if (urlMappingPerbaikanAtap[cleanUrlJasaPerbaikanKons]) {
       restoreCondition('JasaKonsPerbaikan1');
       restoreCondition('JasaRenovasiPerbaikanAtap');

         // hapus elemen id DIV Lain
       removeCondition('materialKonsReadymix');
       removeCondition('ProdukKonsSaluran');
       removeCondition('ProdukKonsPembatas');
       removeCondition('JasaKonsPembatas');
       removeCondition('JasaKonsPerbaikan');
    
        // hapus elemen JasaPerbaikanKons Lain
        removeCondition('JasaRenovasiPerbaikanStruktur');
        removeCondition('JasaRenovasiPerbaikanInfrastruktur');
        removeCondition('JasaRenovasiPerbaikanInterior');
       
        JasaKonstruksiPerbaikanLink1.style.visibility = 'visible';
        JasaRenovasiPerbaikanLink1.style.visibility = 'visible';
        JasaRenovasiPerbaikanAtapLink.style.visibility = 'visible';
        pageNameKonstruksiPerbaikan1.textContent = urlMappingPerbaikanAtap[cleanUrlJasaPerbaikanKons];
    }
   if (urlMappingPerbaikanInterior [cleanUrlJasaPerbaikanKons]) {
        restoreCondition('JasaKonsPerbaikan1');
        restoreCondition('JasaRenovasiPerbaikanInterior');
          // hapus elemen id DIV Lain
        removeCondition('materialKonsReadymix');
        removeCondition('ProdukKonsSaluran');
        removeCondition('ProdukKonsPembatas');
        removeCondition('JasaKonsPembatas');
	removeCondition('JasaKonsPerbaikan');
        
       // hapus elemen JasaPerbaikanKons Lain
        removeCondition('JasaRenovasiPerbaikanStruktur');
        removeCondition('JasaRenovasiPerbaikanInfrastruktur');
         removeCondition('JasaRenovasiPerbaikanAtap');

        JasaKonstruksiPerbaikanLink1.style.visibility = 'visible';
        JasaRenovasiPerbaikanLink1.style.visibility = 'visible';
        JasaRenovasiPerbaikanInteriorLink.style.visibility = 'visible';
        pageNameKonstruksiPerbaikan1.textContent = urlMappingPerbaikanInterior[cleanUrlJasaPerbaikanKons];
    }
}
	
   });
