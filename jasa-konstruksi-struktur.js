
const urlMappingStrukturGedungHunian = {
"https://www.betonjayareadymix.com/p/jasa-konstruksi-rumah-tinggal.html": "Jasa Konstruksi Rumah Tinggal",
  "https://www.betonjayareadymix.com/p/jasa-konstruksi-ruko-dan-kios.html": "Jasa Konstruksi Ruko dan Kios",
  "https://www.betonjayareadymix.com/p/jasa-konstruksi-villa.html": "Jasa Konstruksi Villa",
  "https://www.betonjayareadymix.com/p/jasa-konstruksi-apartemen.html": "Jasa Konstruksi Apartemen",
  "https://www.betonjayareadymix.com/p/jasa-konstruksi-hotel.html": "Jasa Konstruksi Hotel",
  "https://www.betonjayareadymix.com/p/jasa-konstruksi-perkantoran.html": "Jasa Konstruksi Perkantoran",
  "https://www.betonjayareadymix.com/p/jasa-konstruksi-gedung-sekolah.html": "Jasa Konstruksi Gedung Sekolah",
  "https://www.betonjayareadymix.com/p/jasa-konstruksi-gedung-rs.html": "Jasa Konstruksi Gedung Rumah Sakit"
};
const urlMappingStrukturIndustriGudang = {
"https://www.betonjayareadymix.com/p/jasa-konstruksi-gudang-logistik.html": "Jasa Konstruksi Gudang Logistik",
  "https://www.betonjayareadymix.com/p/jasa-konstruksi-pabrik.html": "Jasa Konstruksi Pabrik",
  "https://www.betonjayareadymix.com/p/jasa-konstruksi-cold-storage.html": "Jasa Konstruksi Cold Storage",
  "https://www.betonjayareadymix.com/p/jasa-konstruksi-bengkel.html": "Jasa Konstruksi Bengkel",
  "https://www.betonjayareadymix.com/p/jasa-konstruksi-workshop.html": "Jasa Konstruksi Workshop"
};
const urlMappingStrukturBajaRangka = {
"https://www.betonjayareadymix.com/p/jasa-rangka-atap-baja-ringan.html": "Jasa Rangka Atap Baja Ringan",
  "https://www.betonjayareadymix.com/p/jasa-konstruksi-baja-konvensional.html": "Jasa Konstruksi Baja Konvensional",
  "https://www.betonjayareadymix.com/p/jasa-kanopi-baja-dan-besi.html": "Jasa Kanopi Baja dan Besi",
  "https://www.betonjayareadymix.com/p/jasa-struktur-baja-gudang.html": "Jasa Struktur Baja Gudang"

};
const urlMappingStrukturKhusus= {
"https://www.betonjayareadymix.com/p/jasa-pembuatan-kolam-renang.html": "Jasa Pembuatan Kolam Renang",
  "https://www.betonjayareadymix.com/p/jasa-pembuatan-kolam-ikan.html": "Jasa Pembuatan Kolam Ikan",
  "https://www.betonjayareadymix.com/p/jasa-septic-tank-beton.html": "Jasa Septic Tank Beton",
  "https://www.betonjayareadymix.com/p/jasa-pembuatan-tangki-air.html": "Jasa Pembuatan Tangki Air",
  "https://www.betonjayareadymix.com/p/jasa-pembuatan-bak-penampungan.html": "Jasa Pembuatan Bak Penampungan",
  "https://www.betonjayareadymix.com/p/jasa-konstruksi-menara-air.html": "Jasa Konstruksi Menara Air"

};
const urlMappingStrukturLapangan = {
"https://www.betonjayareadymix.com/p/jasa-pembuatan-lapangan-futsal.html": "Jasa Pembuatan Lapangan Futsal",
  "https://www.betonjayareadymix.com/p/jasa-pembuatan-lapangan-basket.html": "Jasa Pembuatan Lapangan Basket",
  "https://www.betonjayareadymix.com/p/jasa-pembuatan-lapangan-sepakbola.html": "Jasa Pembuatan Lapangan Sepakbola",
  "https://www.betonjayareadymix.com/p/jasa-pembuatan-lapangan-voli.html": "Jasa Pembuatan Lapangan Voli",
  "https://www.betonjayareadymix.com/p/jasa-pembuatan-lapangan-serbaguna.html": "Jasa Pembuatan Lapangan Serbaguna"

};
const urlMappingStrukturModularPrecast = {
"https://www.betonjayareadymix.com/p/jasa-panel-beton-precast.html": "Jasa Panel Beton Precast",
  "https://www.betonjayareadymix.com/p/jasa-dinding-precast-bangunan.html": "Jasa Dinding Precast Bangunan",
  "https://www.betonjayareadymix.com/p/jasa-tangga-beton-precast.html": "Jasa Tangga Beton Precast",
  "https://www.betonjayareadymix.com/p/jasa-balok-dan-sloof-precast.html": "Jasa Balok dan Sloof Precast",
  "https://www.betonjayareadymix.com/p/jasa-toilet-modular-prefab.html": "Jasa Toilet Modular Prefab",
  "https://www.betonjayareadymix.com/p/jasa-rumah-modular-prefab.html": "Jasa Rumah Modular Prefab"

};
const urlMappingStrukturBetonPengecoran = {
"https://www.betonjayareadymix.com/p/jasa-pengecoran-lantai-dak.html": "Jasa Pengecoran Lantai Dak",
  "https://www.betonjayareadymix.com/p/jasa-pengecoran-lantai-gudang.html": "Jasa Pengecoran Lantai Gudang",
  "https://www.betonjayareadymix.com/p/jasa-bekisting-dan-pembesian.html": "Jasa Bekisting dan Pembesian"

};

// Menyimpan elemen yang dihapus dalam variabel
let removedElementsJasakonstruksistruktur = {};
function removeCondition(conditionId) {
    const conditionElement = document.getElementById(conditionId);

    if (conditionElement) {
        // Menyimpan elemen yang dihapus dalam objek untuk bisa dikembalikan
        removedElementsJasakonstruksistruktur[conditionId] = conditionElement1;
        conditionElement.remove(); // Menghapus elemen tersebut
    }
}

// Fungsi untuk mengembalikan elemen yang telah dihapus
function restoreCondition(conditionId) {
    const breadcrumb = document.querySelector('.breadcrumb');
    const elementToRestore = removedElementsJasakonstruksistruktur[conditionId]; // Mendapatkan elemen yang disimpan

    if (elementToRestore) {
        breadcrumb.appendChild(elementToRestore); // Menambahkan elemen kembali ke dalam breadcrumb
        delete removedElementsJasakonstruksistruktur[conditionId]; // Menghapus elemen dari objek setelah dikembalikan
    } else {
        console.log(`Elemen dengan ID ${conditionId} tidak ditemukan di removedElementsJasakonstruksistruktur.`);
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
} else {
	
     var JasaKonstruksiStrukturSubLink = document.getElementById("JasaKonstruksiStrukturSub");
     var JasaStrukturKonstruksiSubLink = document.getElementById("JasaStrukturKonstruksiSub");
    //SUB JasaStrukturKonstruksi
     var JasaKonstruksiGedungdanHunianSubLink = document.getElementById("JasaKonstruksiGedungdanHunianSub");
     var JasaKonstruksiIndustridanGudangSubLink = document.getElementById("JasaKonstruksiIndustridanGudangSub");
     var JasaStrukturBajadanRangkaRinganSubLink = document.getElementById("JasaStrukturBajadanRangkaRinganSub");
     var JasaStrukturKhususLink = document.getElementById("JasaStrukturKhususSub");
     var JasaKonstruksiLapanganOlahragaSubLink = document.getElementById("JasaKonstruksiLapanganOlahragaSub");
     var JasaKonstruksiModulardanPrecastSubLink = document.getElementById("JasaKonstruksiModulardanPrecastSub");
     var JasaStrukturBetondanPengecoranSubLink = document.getElementById("JasaStrukturBetondanPengecoranSub");
	
     var pageNameJasaKonsStruktur = document.getElementById("pageNameJasaKonsStruktur");
    
     // Default untuk menyembunyikan elemen
     JasaKonstruksiStrukturSubLink.style.visibility = 'hidden';
     JasaStrukturKonstruksiSubLink.style.visibility = 'hidden';
    
     //Hide SUB JasaStrukturKonstruksi
     JasaKonstruksiGedungdanHunianSubLink.style.visibility = 'hidden';
     JasaKonstruksiIndustridanGudangSubLink.style.visibility = 'hidden';
     JasaStrukturBajadanRangkaRinganSubLink.style.visibility = 'hidden';
     JasaStrukturKhususLink.style.visibility = 'hidden';
     JasaKonstruksiLapanganOlahragaSubLink.style.visibility = 'hidden';
     JasaKonstruksiModulardanPrecastSubLink.style.visibility = 'hidden';
     JasaStrukturBetondanPengecoranSubLink.style.visibility = 'hidden';
	
     pageNameJasaKonsStruktur.textContent = "";
	
    if (urlMappingStrukturGedungHunian[cleanUrlJasaJasaKonsStruktur]) {
        restoreCondition('JasaKonsStruktur');
        restoreCondition('JasaKonstruksiGedungdanHunianSub');
           // hapus elemen id DIV Lain
        removeCondition('MaterialKons');
        removeCondition('ProdukKonsSaluran');
        removeCondition('ProdukKonsPembatas');
        removeCondition('JasaKonsPerbaikan');
       	removeCondition('JasaKons');
       	removeCondition('JasaKonsSub');
       	removeCondition('MenuKons');
       	removeCondition('JasaKonsFinishing');
        removeCondition('JasaKonsPembatas');
        removeCondition('JasaKonsJalanPerkerasan');
        removeCondition('JasaKonsPondasiTanah');
/*
JasaKonstruksiGedungdanHunianSub
JasaKonstruksiIndustridanGudangSub
JasaStrukturBajadanRangkaRinganSub
JasaStrukturKhusus
JasaKonstruksiLapanganOlahragaSub
JasaKonstruksiModulardanPrecastSub
JasaStrukturBetondanPengecoranSub
*/
       //HAPUS ELEMEN LAIN DI JasaKonsStruktur SELAIN JasaKonstruksiGedungdanHunian
        removeCondition1('JasaKonstruksiIndustridanGudangSub');
        removeCondition1('JasaStrukturBajadanRangkaRinganSub');
        removeCondition1('JasaStrukturKhususSub');
	removeCondition1('JasaKonstruksiLapanganOlahragaSub');
	removeCondition1('JasaKonstruksiModulardanPrecastSub');
	removeCondition1('JasaStrukturBetondanPengecoranSub');
       
        JasaKonstruksiStrukturSubLink.style.visibility = 'visible';
        JasaStrukturKonstruksiSubLink.style.visibility = 'visible';
	//TAMPILKAN JasaKonstruksiGedungdanHunianSubLink
        JasaKonstruksiGedungdanHunianSubLink.style.visibility = 'visible';
        pageNameJasaKonsStruktur.textContent = urlMappingStrukturGedungHunian[cleanUrlJasaJasaKonsStruktur];
    }

if (urlMappingStrukturIndustriGudang[cleanUrlJasaJasaKonsStruktur]) {
        restoreCondition('JasaKonsStruktur');
        restoreCondition('JasaKonstruksiIndustridanGudangSub');
           // hapus elemen id DIV Lain
        removeCondition('MaterialKons');
        removeCondition('ProdukKonsSaluran');
        removeCondition('ProdukKonsPembatas');
        removeCondition('JasaKonsPerbaikan');
       	removeCondition('JasaKons');
       	removeCondition('JasaKonsSub');
       	removeCondition('MenuKons');
       	removeCondition('JasaKonsFinishing');
        removeCondition('JasaKonsPembatas');
        removeCondition('JasaKonsJalanPerkerasan');
        removeCondition('JasaKonsPondasiTanah');

       //HAPUS ELEMEN LAIN DI JasaKonsStruktur SELAIN JasaKonstruksiGedungdanHunian
        removeCondition1('JasaKonstruksiGedungdanHunianSub');
        removeCondition1('JasaStrukturBajadanRangkaRinganSub');
        removeCondition1('JasaStrukturKhususSub');
	removeCondition1('JasaKonstruksiLapanganOlahragaSub');
	removeCondition1('JasaKonstruksiModulardanPrecastSub');
	removeCondition1('JasaStrukturBetondanPengecoranSub');
       
        JasaKonstruksiStrukturSubLink.style.visibility = 'visible';
        JasaStrukturKonstruksiSubLink.style.visibility = 'visible';
	//TAMPILKAN urlMappingStrukturIndustriGudang
        urlMappingStrukturIndustriGudangSubLink.style.visibility = 'visible';
        pageNameJasaKonsStruktur.textContent = urlMappingStrukturIndustriGudang[cleanUrlJasaJasaKonsStruktur];
    }
if (urlMappingStrukturBajaRangka[cleanUrlJasaJasaKonsStruktur]) {
        restoreCondition('JasaKonsStruktur');
        restoreCondition('JasaStrukturBajadanRangkaRinganSub');
           // hapus elemen id DIV Lain
        removeCondition('MaterialKons');
        removeCondition('ProdukKonsSaluran');
        removeCondition('ProdukKonsPembatas');
        removeCondition('JasaKonsPerbaikan');
       	removeCondition('JasaKons');
       	removeCondition('JasaKonsSub');
       	removeCondition('MenuKons');
       	removeCondition('JasaKonsFinishing');
        removeCondition('JasaKonsPembatas');
        removeCondition('JasaKonsJalanPerkerasan');
        removeCondition('JasaKonsPondasiTanah');

       //HAPUS ELEMEN LAIN DI JasaKonsStruktur SELAIN JasaKonstruksiGedungdanHunian
        removeCondition1('JasaKonstruksiIndustridanGudangSub');
        removeCondition1('JasaKonstruksiGedungdanHunianSub');
        removeCondition1('JasaStrukturKhususSub');
	removeCondition1('JasaKonstruksiLapanganOlahragaSub');
	removeCondition1('JasaKonstruksiModulardanPrecastSub');
	removeCondition1('JasaStrukturBetondanPengecoranSub');
       
        JasaKonstruksiStrukturSubLink.style.visibility = 'visible';
        JasaStrukturKonstruksiSubLink.style.visibility = 'visible';
	//TAMPILKAN JasaKonstruksiGedungdanHunianSubLink
        JasaStrukturBajadanRangkaRinganSubLink.style.visibility = 'visible';
        pageNameJasaKonsStruktur.textContent = urlMappingStrukturBajaRangka[cleanUrlJasaJasaKonsStruktur];
    }
if (urlMappingStrukturKhusus[cleanUrlJasaJasaKonsStruktur]) {
        restoreCondition('JasaKonsStruktur');
        restoreCondition('JasaStrukturKhususSub');
           // hapus elemen id DIV Lain
        removeCondition('MaterialKons');
        removeCondition('ProdukKonsSaluran');
        removeCondition('ProdukKonsPembatas');
        removeCondition('JasaKonsPerbaikan');
       	removeCondition('JasaKons');
       	removeCondition('JasaKonsSub');
       	removeCondition('MenuKons');
       	removeCondition('JasaKonsFinishing');
        removeCondition('JasaKonsPembatas');
        removeCondition('JasaKonsJalanPerkerasan');
        removeCondition('JasaKonsPondasiTanah');

       //HAPUS ELEMEN LAIN DI JasaKonsStruktur SELAIN JasaKonstruksiGedungdanHunian
        removeCondition1('JasaKonstruksiIndustridanGudangSub');
        removeCondition1('JasaStrukturBajadanRangkaRinganSub');
        removeCondition1('JasaKonstruksiGedungdanHunianSub');
	removeCondition1('JasaKonstruksiLapanganOlahragaSub');
	removeCondition1('JasaKonstruksiModulardanPrecastSub');
	removeCondition1('JasaStrukturBetondanPengecoranSub');
       
        JasaKonstruksiStrukturSubLink.style.visibility = 'visible';
        JasaStrukturKonstruksiSubLink.style.visibility = 'visible';
	//TAMPILKAN JasaStrukturKhususLink
        JasaStrukturKhususLink.style.visibility = 'visible';
        pageNameJasaKonsStruktur.textContent = urlMappingStrukturKhusus[cleanUrlJasaJasaKonsStruktur];
    }
if (urlMappingStrukturLapangan[cleanUrlJasaJasaKonsStruktur]) {
        restoreCondition('JasaKonsStruktur');
        restoreCondition('JasaKonstruksiLapanganOlahragaSub');
           // hapus elemen id DIV Lain
        removeCondition('MaterialKons');
        removeCondition('ProdukKonsSaluran');
        removeCondition('ProdukKonsPembatas');
        removeCondition('JasaKonsPerbaikan');
       	removeCondition('JasaKons');
       	removeCondition('JasaKonsSub');
       	removeCondition('MenuKons');
       	removeCondition('JasaKonsFinishing');
        removeCondition('JasaKonsPembatas');
        removeCondition('JasaKonsJalanPerkerasan');
        removeCondition('JasaKonsPondasiTanah');

       //HAPUS ELEMEN LAIN DI JasaKonsStruktur SELAIN JasaKonstruksiGedungdanHunian
        removeCondition1('JasaKonstruksiIndustridanGudangSub');
        removeCondition1('JasaStrukturBajadanRangkaRinganSub');
        removeCondition1('JasaStrukturKhususSub');
	removeCondition1('JasaKonstruksiGedungdanHunianSub');
	removeCondition1('JasaKonstruksiModulardanPrecastSub');
	removeCondition1('JasaStrukturBetondanPengecoranSub');
       
        JasaKonstruksiStrukturSubLink.style.visibility = 'visible';
        JasaStrukturKonstruksiSubLink.style.visibility = 'visible';
	//TAMPILKAN JasaKonstruksiLapanganOlahragaSubLink
        JasaKonstruksiLapanganOlahragaSubLink.style.visibility = 'visible';
        pageNameJasaKonsStruktur.textContent = urlMappingStrukturLapangan[cleanUrlJasaJasaKonsStruktur];
    }
if (urlMappingStrukturModularPrecast[cleanUrlJasaJasaKonsStruktur]) {
        restoreCondition('JasaKonsStruktur');
        restoreCondition('JasaKonstruksiModulardanPrecastSub');
           // hapus elemen id DIV Lain
        removeCondition('MaterialKons');
        removeCondition('ProdukKonsSaluran');
        removeCondition('ProdukKonsPembatas');
        removeCondition('JasaKonsPerbaikan');
       	removeCondition('JasaKons');
       	removeCondition('JasaKonsSub');
       	removeCondition('MenuKons');
       	removeCondition('JasaKonsFinishing');
        removeCondition('JasaKonsPembatas');
        removeCondition('JasaKonsJalanPerkerasan');
        removeCondition('JasaKonsPondasiTanah');

       //HAPUS ELEMEN LAIN DI JasaKonsStruktur SELAIN JasaKonstruksiGedungdanHunian
        removeCondition1('JasaKonstruksiIndustridanGudangSub');
        removeCondition1('JasaStrukturBajadanRangkaRinganSub');
        removeCondition1('JasaStrukturKhususSub');
	removeCondition1('JasaKonstruksiLapanganOlahragaSub');
	removeCondition1('JasaKonstruksiGedungdanHunianSub');
	removeCondition1('JasaStrukturBetondanPengecoranSub');
       
        JasaKonstruksiStrukturSubLink.style.visibility = 'visible';
        JasaStrukturKonstruksiSubLink.style.visibility = 'visible';
	//TAMPILKAN JasaKonstruksiModulardanPrecastSubLink
        JasaKonstruksiModulardanPrecastSubLink.style.visibility = 'visible';
        pageNameJasaKonsStruktur.textContent = urlMappingStrukturModularPrecast[cleanUrlJasaJasaKonsStruktur];
    }
if (urlMappingStrukturBetonPengecoran[cleanUrlJasaJasaKonsStruktur]) {
        restoreCondition('JasaKonsStruktur');
        restoreCondition('JasaStrukturBetondanPengecoranSub');
           // hapus elemen id DIV Lain
        removeCondition('MaterialKons');
        removeCondition('ProdukKonsSaluran');
        removeCondition('ProdukKonsPembatas');
        removeCondition('JasaKonsPerbaikan');
       	removeCondition('JasaKons');
       	removeCondition('JasaKonsSub');
       	removeCondition('MenuKons');
       	removeCondition('JasaKonsFinishing');
        removeCondition('JasaKonsPembatas');
        removeCondition('JasaKonsJalanPerkerasan');
        removeCondition('JasaKonsPondasiTanah');

       //HAPUS ELEMEN LAIN DI JasaKonsStruktur SELAIN JasaKonstruksiGedungdanHunian
        removeCondition1('JasaKonstruksiIndustridanGudangSub');
        removeCondition1('JasaStrukturBajadanRangkaRinganSub');
        removeCondition1('JasaStrukturKhususSub');
	removeCondition1('JasaKonstruksiLapanganOlahragaSub');
	removeCondition1('JasaKonstruksiModulardanPrecastSub');
	removeCondition1('JasaKonstruksiGedungdanHunianSub');
       
        JasaKonstruksiStrukturSubLink.style.visibility = 'visible';
        JasaStrukturKonstruksiSubLink.style.visibility = 'visible';
	//TAMPILKAN JasaStrukturBetondanPengecoranSubLink
        JasaStrukturBetondanPengecoranSubLink.style.visibility = 'visible';
        pageNameJasaKonsStruktur.textContent = urlMappingStrukturBetonPengecoran[cleanUrlJasaJasaKonsStruktur];
    }
}
	
   });
