 // Cek URL saat ini dan sesuaikan dengan kondisi yang diinginkan
const urlMappingJasaKons = {
//aplikasi nya
"https://www.betonjayareadymix.com/p/jasa-alat-konstruksi.html": "Jasa Alat Konstruksi",
"https://www.betonjayareadymix.com/p/jasa-struktur-konstruksi.html": "Jasa Struktur Konstruksi",
"https://www.betonjayareadymix.com/p/jasa-pondasi-perkuatan-tanah.html": "Jasa Pondasi & Perkuatan Tanah",
  "https://www.betonjayareadymix.com/p/jasa-saluran-drainase.html": "Jasa Saluran & Drainase",
  "https://www.betonjayareadymix.com/p/jasa-jalan-perkerasan.html": "Jasa Jalan & Perkerasan",
 "https://www.betonjayareadymix.com/p/jasa-pematangan-lahan.html": "Jasa Pematangan Lahan",
 "https://www.betonjayareadymix.com/p/jasa-uji-tanah.html": "Jasa Uji Tanah",
 "https://www.betonjayareadymix.com/p/jasa-cutting-beton.html": "Jasa Cutting Beton",
 "https://www.betonjayareadymix.com/p/jasa-bongkar-bangunan.html": "Jasa Bongkar Bangunan",
 "https://www.betonjayareadymix.com/p/jasa-buang-puing.html": "Jasa Buang Puing",
  "https://www.betonjayareadymix.com/p/jasa-pengeboran.html": "Jasa Pengeboran",
 "https://www.betonjayareadymix.com/p/jasa-perkuatan-tanah-longsor.html": "Jasa Perkuatan Tanah Longsor",
  "https://www.betonjayareadymix.com/p/jasa-pembatas-pengaman.html": "Jasa Pembatas Pengaman",
  "https://www.betonjayareadymix.com/p/jasa-renovasi.html": "Jasa Renovasi",
  "https://www.betonjayareadymix.com/p/jasa-finishing.html": "Jasa Finishing",  
  "https://www.betonjayareadymix.com/p/jasa-instalasi-listrik.html": "Jasa Instalasi Listrik",

	
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

const urlMappingJasaAlatKonstruksi = {	
"https://www.betonjayareadymix.com/p/sewa-alat-konstruksi.html": "Sewa Alat Konstruksi"
}
const urlMappingJasaSewaAlatKonstruksi = {	
"https://www.betonjayareadymix.com/p/sewa-alat-proyek.html": "Sewa Alat Proyek",
"https://www.betonjayareadymix.com/p/sewa-alat-berat.html": "Sewa Alat Berat",
"https://www.betonjayareadymix.com/p/sewa-alat-konstruksi-ringan.html": "Sewa Alat Konstruksi Ringan"
}
const urlMappingJasaSewaAlatBerat = {	
"https://www.betonjayareadymix.com/p/sewa-forklift.html": "Sewa Forklift",
  "https://www.betonjayareadymix.com/p/sewa-crane.html": "Sewa Crane",
  "https://www.betonjayareadymix.com/p/sewa-self-loader.html": "Sewa Self Loader",
  "https://www.betonjayareadymix.com/p/sewa-wheel-loader.html": "Sewa Wheel Loader",
  "https://www.betonjayareadymix.com/p/sewa-vibro-roller.html": "Sewa Vibro Roller",
  "https://www.betonjayareadymix.com/p/sewa-wales-stoom.html": "Sewa Wales Stoom",
  "https://www.betonjayareadymix.com/p/sewa-tandem-roller.html": "Sewa Tandem Roller",
  "https://www.betonjayareadymix.com/p/sewa-bulldozer.html": "Sewa Bulldozer",
  "https://www.betonjayareadymix.com/p/sewa-excavator.html": "Sewa Excavator",
  "https://www.betonjayareadymix.com/p/sewa-backhoe-loader.html": "Sewa Backhoe Loader",
  "https://www.betonjayareadymix.com/p/sewa-trencher.html": "Sewa Trencher",
  "https://www.betonjayareadymix.com/p/sewa-concrete-paver.html": "Sewa Concrete Paver",
  "https://www.betonjayareadymix.com/p/sewa-baby-roller.html": "Sewa Baby Roller",
  "https://www.betonjayareadymix.com/p/sewa-motor-grader.html": "Sewa Motor Grader",
  "https://www.betonjayareadymix.com/p/sewa-alat-pancang.html": "Sewa Alat Pancang"
}
const urlMappingJasaSewaAlatKonstruksiRingan = {	

}

const urlMappingPerbaikan = {	
	"https://www.betonjayareadymix.com/p/jasa-renovasi-fasilitas-umum.html": "Jasa Renovasi Fasilitas Umum",
	"https://www.betonjayareadymix.com/p/jasa-renovasi-bangunan.html": "Jasa Renovasi Bangunan",
	 "https://www.betonjayareadymix.com/p/jasa-renovasi-interior.html": "Jasa Renovasi Interior",
	"https://www.betonjayareadymix.com/p/jasa-renovasi-fasad-eksterior.html": "Jasa Renovasi Fasad Eksterior",
	"https://www.betonjayareadymix.com/p/jasa-perbaikan-infrastruktur.html": "Jasa Perbaikan Infrastruktur",
	"https://www.betonjayareadymix.com/p/jasa-perbaikan-struktur.html": "Jasa Perbaikan Struktur"
  //  "https://www.betonjayareadymix.com/p/jasa-renovasi-perbaikan-dinding.html": "Jasa Renovasi Perbaikan Dinding"

};

const urlMappingFinishing = {
"https://www.betonjayareadymix.com/p/jasa-finishing-bangunan.html": "Jasa Finishing Bangunan",
"https://www.betonjayareadymix.com/p/jasa-finishing-infrastruktur.html": "Jasa Finishing Infrastruktur"
/*
"https://www.betonjayareadymix.com/p/jasa-finishing-interior.html": "Jasa Finishing Interior",
  "https://www.betonjayareadymix.com/p/jasa-finishing-eksterior.html": "Jasa Finishing Eksterior",
  "https://www.betonjayareadymix.com/p/jasa-finishing-struktur.html": "Jasa Finishing Struktur"
  */
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
  "https://www.betonjayareadymix.com/p/jasa-struktur-beton-dan-pengecoran.html": "Jasa Struktur Beton dan Pengecoran"

};

const urlMappingPondasi = {
"https://www.betonjayareadymix.com/p/jasa-pondasi-bangunan.html": "Jasa Pondasi Bangunan",
//Jasa Pemadatan dan Persiapan Lahan ini terlalu UMUM ga FKS ke pondasi
  //"https://www.betonjayareadymix.com/p/jasa-pemadatan-dan-persiapan-lahan.html": "Jasa Pemadatan dan Persiapan Lahan",
"https://www.betonjayareadymix.com/p/jasa-pemadatan-persiapan-pondasi.html": "Jasa Pemadatan & Persiapan Pondasi",
  "https://www.betonjayareadymix.com/p/jasa-perkuatan-tanah.html": "Jasa Perkuatan Tanah",
  "https://www.betonjayareadymix.com/p/jasa-retrofitting-pondasi.html": "Jasa Retrofitting Pondasi"

};

const urlMappingSaluran = {
"https://www.betonjayareadymix.com/p/jasa-saluran-air-hujan.html": "Jasa Saluran Air Hujan",
"https://www.betonjayareadymix.com/p/jasa-pemasangan-u-ditch.html": "Jasa Pemasangan U ditch",
"https://www.betonjayareadymix.com/p/jasa-pemasangan-box-culvert.html": "Jasa Pemasangan Box Culvert",
"https://www.betonjayareadymix.com/p/jasa-saluran-irigasi-air-limbah.html": "Jasa Saluran irigasi & air limbah",
"https://www.betonjayareadymix.com/p/jasa-pembuatan-sumur-resapan.html": "Jasa Pembuatan Sumur Resapan"
};

const urlMappingJalan = {
"https://www.betonjayareadymix.com/p/jasa-pembangunan-infrastruktur-jalan.html": "Jasa Pembangunan Infrastruktur Jalan",
"https://www.betonjayareadymix.com/p/jasa-pemadatan-dan-persiapan-tanah-jalan.html": "Jasa Pemadatan dan Persiapan Tanah Jalan",
"https://www.betonjayareadymix.com/p/jasa-perkerasan-jalan.html": "Jasa Perkerasan Jalan"
//finishing dan perbaikkan sengaja tidak dimasukkan 
};

const urlMappingPematanganLahan = {
"https://www.betonjayareadymix.com/p/jasa-pengupasan-lahan-tanah.html": "Jasa Pengupasan Lahan Tanah",
  "https://www.betonjayareadymix.com/p/jasa-pembersihan-lahan.html": "Jasa Pembersihan Lahan",
  "https://www.betonjayareadymix.com/p/jasa-perataan-dan-grading-lahan.html": "Jasa Perataan dan Grading Lahan",
  "https://www.betonjayareadymix.com/p/jasa-elevasi-lahan.html": "Jasa Elevasi Lahan",
  "https://www.betonjayareadymix.com/p/jasa-badan-lahan.html": "Jasa Badan Lahan",
  "https://www.betonjayareadymix.com/p/jasa-cut-and-fill-lahan.html": "Jasa Cut and Fill Lahan",
  "https://www.betonjayareadymix.com/p/jasa-pemotongan-bukit-lahan.html": "Jasa Pemotongan Bukit Lahan",
  "https://www.betonjayareadymix.com/p/jasa-urugan-tanah-lahan.html": "Jasa Urugan Tanah Lahan",
  "https://www.betonjayareadymix.com/p/jasa-pemadatan-tanah-lahan.html": "Jasa Pemadatan Tanah Lahan",
 //ga usah karna ini untuk umum dan ga fokus ke lahan pematangan
  //"https://www.betonjayareadymix.com/p/jasa-pemadatan-tanah-bangunan.html": "Jasa Pemadatan Tanah Bangunan",
  "https://www.betonjayareadymix.com/p/jasa-base-course-lahan.html": "Jasa Base Course Lahan",
  "https://www.betonjayareadymix.com/p/jasa-stabilisasi-tanah-lahan.html": "Jasa Stabilisasi Tanah Lahan",
  "https://www.betonjayareadymix.com/p/jasa-drainase-lahan.html": "Jasa Drainase Lahan",
  "https://www.betonjayareadymix.com/p/jasa-geotekstil-lahan.html": "Jasa Geotekstil Lahan",
  "https://www.betonjayareadymix.com/p/jasa-persiapan-pondasi-lahan.html": "Jasa Persiapan Pondasi Lahan"

};

const urlMappingUjiTanah = {
"https://www.betonjayareadymix.com/p/jasa-sondir.html": "Jasa Sondir",
  "https://www.betonjayareadymix.com/p/jasa-cpt.html": "Jasa CPT",
  "https://www.betonjayareadymix.com/p/jasa-lab-tanah.html": "Jasa Lab Tanah",
  "https://www.betonjayareadymix.com/p/jasa-boring-tanah.html": "Jasa Boring Tanah",
  "https://www.betonjayareadymix.com/p/jasa-uji-penetrasi.html": "Jasa Uji Penetrasi"

};

const urlMappingPerkuatanTanahLongsor = {
  "https://www.betonjayareadymix.com/p/jasa-bronjong-penahan-longsor.html": "Jasa Bronjong Penahan Longsor",
  "https://www.betonjayareadymix.com/p/jasa-soil-nailing-tebing.html": "Jasa Soil Nailing Tebing",
  "https://www.betonjayareadymix.com/p/jasa-dinding-penahan-tanah-longsor.html": "Jasa Dinding Penahan Tanah Longsor",
  "https://www.betonjayareadymix.com/p/jasa-geotextile-perkuatan-lereng.html": "Jasa Geotextile Perkuatan Lereng",
  "https://www.betonjayareadymix.com/p/jasa-sheet-pile-penahan-longsor.html": "Jasa Sheet Pile Penahan Longsor",
  "https://www.betonjayareadymix.com/p/jasa-stabilisasi-tanah-labil.html": "Jasa Stabilisasi Tanah Labil",
  "https://www.betonjayareadymix.com/p/jasa-perkuatan-tanah-longsor-rumah.html": "Jasa Perkuatan Tanah Longsor Rumah",
  "https://www.betonjayareadymix.com/p/jasa-perkuatan-tebing-jalan.html": "Jasa Perkuatan Tebing Jalan",
  "https://www.betonjayareadymix.com/p/jasa-perkuatan-longsor-perkebunan.html": "Jasa Perkuatan Longsor Perkebunan",
  "https://www.betonjayareadymix.com/p/jasa-drainase-anti-longsor.html": "Jasa Drainase Anti Longsor"

};
const urlMappingBongkarBangunan = {
"https://www.betonjayareadymix.com/p/jasa-bongkar-tower.html": "Jasa Bongkar Tower",
"https://www.betonjayareadymix.com/p/jasa-bongkar-rumah.html": "Jasa Bongkar Rumah",
  "https://www.betonjayareadymix.com/p/jasa-bongkar-beton.html": "Jasa Bongkar Beton",
  "https://www.betonjayareadymix.com/p/jasa-bongkar-atap.html": "Jasa Bongkar Atap",
  "https://www.betonjayareadymix.com/p/jasa-bongkar-keramik.html": "Jasa Bongkar Keramik",
  "https://www.betonjayareadymix.com/p/jasa-bongkar-tembok.html": "Jasa Bongkar Tembok",
  "https://www.betonjayareadymix.com/p/jasa-bongkar-dinding.html": "Jasa Bongkar Dinding",
  "https://www.betonjayareadymix.com/p/jasa-bongkar-plafon.html": "Jasa Bongkar Plafon",
  "https://www.betonjayareadymix.com/p/jasa-bongkar-partisi.html": "Jasa Bongkar Partisi",
  "https://www.betonjayareadymix.com/p/jasa-bongkar-pagar.html": "Jasa Bongkar Pagar",
  "https://www.betonjayareadymix.com/p/jasa-bongkar-lantai.html": "Jasa Bongkar Lantai"
};
const urlMappingPengeboran = {
"https://www.betonjayareadymix.com/p/jasa-bor-teknik.html": "Jasa Bor Teknik",
"https://www.betonjayareadymix.com/p/jasa-bor-air.html": "Jasa Bor Air",
  "https://www.betonjayareadymix.com/p/jasa-bore-pile.html": "Jasa Bore Pile",
  "https://www.betonjayareadymix.com/p/jasa-coring-beton.html": "Jasa Coring Beton",
  "https://www.betonjayareadymix.com/p/jasa-bor-beton.html": "Jasa Bor Beton",
  "https://www.betonjayareadymix.com/p/jasa-bor-tanah.html": "Jasa Bor Tanah",
  "https://www.betonjayareadymix.com/p/jasa-bor-horizontal.html": "Jasa Bor Horizontal",
 "https://www.betonjayareadymix.com/p/jasa-bor-tembok.html": "Jasa Bor Tembok"
};
const urlMappingJasaBorAir = {
  "https://www.betonjayareadymix.com/p/jasa-bor-air-sumur.html": "Jasa Bor Air Sumur",
  //"https://www.betonjayareadymix.com/p/jasa-bor-air-teknik.html": "Jasa Bor Air Teknik",
  "https://www.betonjayareadymix.com/p/jasa-bor-air-kebutuhan.html": "Jasa Bor Air Kebutuhan",
  "https://www.betonjayareadymix.com/p/jasa-bor-air-lokasi.html": "Jasa Bor Air Lokasi",
  //"https://www.betonjayareadymix.com/p/biaya-jasa-bor-air.html": "Biaya Jasa Bor Air",
  "https://www.betonjayareadymix.com/p/peralatan-jasa-bor-air.html": "Peralatan Jasa Bor Air"
};

const urlMappingPembatas = {
"https://www.betonjayareadymix.com/p/jasa-pengamanan-area-proyek.html": "Jasa Pengamanan Area Proyek",
  "https://www.betonjayareadymix.com/p/jasa-rambu-dan-sistem-keamanan-visual.html": "Jasa Rambu dan Sistem Keamanan Visual",
  "https://www.betonjayareadymix.com/p/jasa-pengaman-sisi-jalan-infrastruktur.html": "Jasa Pengaman Sisi Jalan Infrastruktur",
  "https://www.betonjayareadymix.com/p/jasa-pembuatan-pagar-dinding-pembatas.html": "Jasa Pembuatan Pagar Dinding Pembatas"

};

const urlMappingJasaInstalasiListrik = {	
    "https://www.betonjayareadymix.com/p/jasa-instalasi-listrik-rumah.html": "Jasa Instalasi Listrik Rumah",
  "https://www.betonjayareadymix.com/p/jasa-instalasi-listrik-komersial.html": "Jasa Instalasi Listrik Komersial",
  "https://www.betonjayareadymix.com/p/jasa-pemasangan-panel-listrik.html": "Jasa Pemasangan Panel Listrik",
  "https://www.betonjayareadymix.com/p/jasa-keamanan-proteksi-listrik.html": "Jasa Keamanan & Proteksi Listrik",
  "https://www.betonjayareadymix.com/p/jasa-maintenance-perbaikan-listrik.html": "Jasa Maintenance & Perbaikan Listrik",
  "https://www.betonjayareadymix.com/p/jasa-konsultasi-listrik.html": "Jasa Konsultasi Listrik"

}
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



	/* ==========================================================
   🧩 HybridDateModified v2.5 — StableHash + Safe Load Order
   Fitur:
   - Menjamin detect-evergreen.js dimuat lebih dulu
   - Update <meta dateModified> hanya jika URL terdaftar
   - Stable hash → hasil dateModified konsisten
   ========================================================== */
(async function runHybridDateModified() {
  try {
    // --- helper untuk load eksternal JS secara promise ---
    function loadExternalJSAsync(src) {
      return new Promise((resolve, reject) => {
        const s = document.createElement("script");
        s.src = src;
        s.async = true;
        s.onload = () => resolve(src);
        s.onerror = () => reject(new Error("Gagal load " + src));
        document.head.appendChild(s);
      });
    }

	
     // --- loader evergreen JS dengan sessionStorage (anti 429) ---
    async function loadEvergreenScript() {
      const KEY = "evergreenScriptLoaded";

      const needReload =
        !sessionStorage.getItem(KEY) ||
        !window.AEDMetaDates ||
        !window.detectEvergreenReady;

      if (!needReload) {
        console.log("⚡ detect-evergreen.js sudah aktif & variable ready — SKIP load");
      } else {
        console.log("⏳ load detect-evergreen.js dari GitHack…");
        try {
          await loadExternalJSAsync(
            "https://raw.githack.com/aliyul/solution-blogger/main/detect-evergreen.js"
          );
          window.detectEvergreenReady = true;
          sessionStorage.setItem(KEY, "true");
          console.log("✅ detect-evergreen.js LOADED & READY");
        } catch (err) {
          console.error("❌ Gagal load detect-evergreen.js", err);
          sessionStorage.removeItem(KEY);
        }
      }

      // --- ALWAYS run evergreen check tiap halaman ---
      if (typeof window.runEvergreenCheck === "function") {
        console.log("🔁 Running evergreen check for this page...");
        window.runEvergreenCheck();
      } else {
        console.warn("⚠️ runEvergreenCheck tidak ditemukan!");
      }
    }
	  
    // --- gabungkan semua mapping ---
    const urlMappingGabungan = Object.assign(
      {},
		urlMappingJasaKons,
		urlMappingJasaAlatKonstruksi,
		urlMappingJasaSewaAlatKonstruksi,
		urlMappingJasaSewaAlatBerat,
		urlMappingJasaSewaAlatKonstruksiRingan,
		urlMappingPerbaikan,
		urlMappingFinishing,
		urlMappingStruktur,
		urlMappingPondasi,
		urlMappingSaluran,
		urlMappingJalan,
		urlMappingPematanganLahan,
		urlMappingUjiTanah,
		urlMappingPerkuatanTanahLongsor,
		urlMappingBongkarBangunan,
		urlMappingPengeboran,
		urlMappingJasaBorAir,
		urlMappingPembatas,
		urlMappingJasaInstalasiListrik
    );

    // --- validasi URL terdaftar ---
    if (!urlMappingGabungan[cleanUrlJasaKons]) {
      console.log(`[HybridDateModified] URL tidak terdaftar: ${cleanUrlJasaKons}`);
      return;
    }

  // === Tanggal nextUpdate1 global ===
		const globalNextUpdate1 = "2026-01-29T00:00:00.000Z";
	console.log(`🌐 [AutoMeta] Detected jasa-konstruksi: ${cleanUrlJasaKons}`);

    // --- pastikan meta nextUpdate1 ada ---
    let metaNextUpdate1 = document.querySelector('meta[name="nextUpdate1"]');
    if (!metaNextUpdate1) {
      metaNextUpdate1 = document.createElement("meta");
      metaNextUpdate1.setAttribute("name", "nextUpdate1");
      metaNextUpdate1.setAttribute("content", globalNextUpdate1);
      document.head.appendChild(metaNextUpdate1);
      console.log(`🆕 [AutoMeta] Meta nextUpdate1 ditambahkan → ${globalNextUpdate1}`);
    } else {
      console.log("✅ [AutoMeta] Meta nextUpdate1 sudah ada, tidak dibuat ulang.");
    }

    // --- pastikan detect-evergreen.js selesai dimuat ---
    await loadEvergreenScript();
    console.log("✅ detect-evergreen.js selesai dimuat.");

    // --- pastikan AEDMetaDates sudah tersedia ---
    if (!window.AEDMetaDates || !window.AEDMetaDates.dateModified) {
      console.warn("[HybridDateModified] AEDMetaDates tidak ditemukan, skip update.");
      return;
    }

    const { dateModified, nextUpdate, type } = window.AEDMetaDates;

    // 🔒 Stable hash untuk variasi waktu stabil
    function stableHash(str) {
      let hash = 0;
      for (let i = 0; i < str.length; i++) {
        hash = (hash << 5) - hash + str.charCodeAt(i);
        hash |= 0;
      }
      return Math.abs(hash);
    }

    const hash = stableHash(cleanUrlJasaKons);
    const offsetSeconds = hash % 86400;
    const finalDate = new Date(new Date(dateModified).getTime() + offsetSeconds * 1000);
    const isoDate = finalDate.toISOString();

    // 🧱 Update meta dateModified
    [
      ['meta[itemprop="dateModified"]', 'itemprop', 'dateModified'],
      ['meta[name="dateModified"]', 'name', 'dateModified'],
      ['meta[property="article:modified_time"]', 'property', 'article:modified_time']
    ].forEach(([selector, attr, val]) => {
      let meta = document.querySelector(selector);
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute(attr, val);
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", isoDate);
    });

	
				// Pastikan AEDMetaDates sudah ada minimal sebagai objek kosong
	window.AEDMetaDates = window.AEDMetaDates || {};
	
	// Update hanya properti dateModified tanpa menghapus lainnya
	window.AEDMetaDates = {
	  ...window.AEDMetaDates,
	  dateModified: isoDate
	};
	
	console.log("✅ AEDMetaDates updated jasa-konstruksi:", window.AEDMetaDates);
    console.log(`✅ [HybridDateModified v2.5] ${cleanUrlJasaKons} → ${isoDate} | type=${type || "-"}`);

    // 🧩 Perbarui schema jika ada
    const schemaEl = document.querySelector('script[data-schema="evergreen-maintenance"]');
    if (schemaEl) {
      try {
        const data = JSON.parse(schemaEl.textContent.trim());
        data.dateModified = isoDate;
        if (data.maintenanceSchedule) data.maintenanceSchedule.scheduledTime = nextUpdate;
        schemaEl.textContent = JSON.stringify(data, null, 2);
        console.log(`🔄 Schema maintenance diperbarui → dateModified: ${isoDate}`);
      } catch (err) {
        console.error("❌ Gagal update schema:", err);
      }
    }

  } catch (err) {
    console.error("[HybridDateModified] Fatal error:", err);
  }
})();


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
	
if (!JasaKons && !JasaKonsSub) {
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
	
	var JasaAlatKonstruksiLink = document.getElementById("JasaAlatKonstruksi");

	var SewaAlatKonstruksiLink = document.getElementById("SewaAlatKonstruksi");
	var SewaAlatBeratLink = document.getElementById("SewaAlatBerat");
	var SewaAlatKonstruksiRinganLink = document.getElementById("SewaAlatKonstruksiRingan");
	
	var JasaInstalasiListrikLink = document.getElementById("JasaInstalasiListrik");
	var JasaRenovasiPerbaikanLink = document.getElementById("JasaRenovasiPerbaikan");
        var JasaStrukturKonstruksiLink = document.getElementById("JasaStrukturKonstruksi");
	var JasaFinishingLink = document.getElementById("JasaFinishing");
	var JasaPondasiPerkuatanLink = document.getElementById("JasaPondasiPerkuatan");
	var JasaSaluranDrainaseLink = document.getElementById("JasaSaluranDrainase");
	var JasaJalanPerkerasanLink = document.getElementById("JasaJalanPerkerasan");
	var JasaPematanganLahanLink = document.getElementById("JasaPematanganLahan");
	var JasaUjiTanahLink = document.getElementById("JasaUjiTanah");
	var JasaPembatasPengamanLink = document.getElementById("JasaPembatasPengaman");
	var JasaBongkarBangunanLink = document.getElementById("JasaBongkarBangunan");
	var JasaPengeboranLink = document.getElementById("JasaPengeboran");
	    var JasaBorTeknikLink = document.getElementById("JasaBorTeknik");
		var JasaBorAirLink = document.getElementById("JasaBorAir");
		var JasaBorPileLink = document.getElementById("JasaBorPile");
		var JasaCoringBetonLink = document.getElementById("JasaCoringBeton");
		var JasaBorBetonLink = document.getElementById("JasaBorBeton");
		var JasaBorTanahLink = document.getElementById("JasaBorTanah");
		var JasaBorHorizontalLink = document.getElementById("JasaBorHorizontal");
		var JasaBorTembokLink = document.getElementById("JasaBorTembok");
		
	//var JasaKonstruksiCustomLink = document.getElementById("JasaKonstruksiCustom");
	
     var pageNameKonstruksi = document.getElementById("pageNameKonstruksi");
     var pageNameKonstruksiSub = document.getElementById("pageNameKonstruksiSub");
    	
     // Default untuk menyembunyikan elemen
     JasaKonstruksiLink.style.visibility = 'hidden';
     JasaKonstruksiSubLink.style.visibility = 'hidden';
	JasaAlatKonstruksiLink.style.visibility = 'hidden';
	SewaAlatKonstruksiLink.style.visibility = 'hidden';
	SewaAlatBeratLink.style.visibility = 'hidden';
	SewaAlatKonstruksiRinganLink.style.visibility = 'hidden';

	JasaInstalasiListrikLink.style.visibility = 'hidden';
     	JasaRenovasiPerbaikanLink.style.visibility = 'hidden';
	JasaStrukturKonstruksiLink.style.visibility = 'hidden';
	JasaFinishingLink.style.visibility = 'hidden';
	JasaPondasiPerkuatanLink.style.visibility = 'hidden';
	JasaSaluranDrainaseLink.style.visibility = 'hidden';
	JasaJalanPerkerasanLink.style.visibility = 'hidden';
	JasaPematanganLahanLink.style.visibility = 'hidden';
	JasaUjiTanahLink.style.visibility = 'hidden';
	JasaPembatasPengamanLink.style.visibility = 'hidden';
	JasaBongkarBangunanLink.style.visibility = 'hidden';
	JasaPengeboranLink.style.visibility = 'hidden';
		JasaBorAirLink.style.visibility = 'hidden';
	    JasaBorTeknikLink.style.visibility = 'hidden';
		JasaBorPileLink.style.visibility = 'hidden';
		JasaCoringBetonLink.style.visibility = 'hidden';
		JasaBorBetonLink.style.visibility = 'hidden';
		JasaBorTanahLink.style.visibility = 'hidden';
		JasaBorHorizontalLink.style.visibility = 'hidden';
		JasaBorTembokLink.style.visibility = 'hidden';
	
	//JasaKonstruksiCustomLink.style.visibility = 'hidden';
    pageNameKonstruksi.textContent = "";
    pageNameKonstruksiSub.textContent = "";
	
    if (urlMappingJasaKons[cleanUrlJasaKons]) {
        restoreCondition('JasaKons');
	restoreCondition('JasaKonstruksi');
           // hapus elemen id DIV Lain
	removeCondition('ProdukInFur');
        removeCondition('MaterialKons');
	removeCondition('ProdukKons');
        //removeCondition('ProdukKonsSaluran');
        //removeCondition('ProdukKonsPembatasPost');
        removeCondition('JasaKonsPondasiTanah');
        removeCondition('JasaKonsJalanPerkerasan');
        removeCondition('JasaKonsPembatas');
        removeCondition('JasaKonsPerbaikan');
        removeCondition('JasaKonsFinishing');
        removeCondition('JasaKonsStruktur');
	removeCondition('JasaKonsSub');
	removeCondition('MenuKons');
	
	    
       // hapus elemen id DIV Lain

        JasaKonstruksiLink.style.visibility = 'visible';
        pageNameKonstruksi.textContent = urlMappingJasaKons[cleanUrlJasaKons];
    }
   // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaKons[cleanUrlJasaKons]) {
       const jsonLDBreadcrumb = {
           "@context": "https://schema.org",
           "@type": "BreadcrumbList",
           "itemListElement": [
	    {
	      "@type": "ListItem",
	      "position": 1,
	      "name": "Beton Jaya Readymix",
	      "item": "https://www.betonjayareadymix.com/"
	    },
               {
                   "@type": "ListItem",
                   "position": 2,
                   "name": "Jasa Konstruksi",
                   "item": "https://www.betonjayareadymix.com/p/jasa-konstruksi.html"
               },
               {
                   "@type": "ListItem",
                   "position": 3,
                   "name": urlMappingJasaKons[cleanUrlJasaKons],
                   "item": cleanUrlJasaKons
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
  //AWAL JASA KONTRUKSI ALAT
if (urlMappingJasaAlatKonstruksi[cleanUrlJasaKons]) {
        restoreCondition('JasaKonsSub');
	restoreCondition('JasaAlatKonstruksi');
           // hapus elemen id DIV Lain
	removeCondition('ProdukInFur');
        removeCondition('MaterialKons');
	removeCondition('ProdukKons');
        //removeCondition('ProdukKonsSaluran');
        //removeCondition('ProdukKonsPembatas');
        removeCondition('JasaKonsPondasiTanah');
        removeCondition('JasaKonsPembatas');
        removeCondition('JasaKonsJalanPerkerasan');
        removeCondition('JasaKonsPerbaikan');
	removeCondition('JasaKonsFinishing');
        removeCondition('JasaKonsStruktur');
	removeCondition('JasaKons');
	removeCondition('MenuKons');

	// hapus elemen id DIV Lain
	removeCondition('SewaAlatKonstruksi');
	removeCondition('SewaAlatBerat');
	removeCondition('SewaAlatKonstruksiRingan');

		removeCondition('JasaInstalasiListrik');
	removeCondition('JasaRenovasiPerbaikan');
	removeCondition('JasaStrukturKonstruksi');
        removeCondition('JasaFinishing');
        removeCondition('JasaPondasiPerkuatan');
        removeCondition('JasaSaluranDrainase');
        removeCondition('JasaJalanPerkerasan');
	removeCondition('JasaPematanganLahan');
	removeCondition('JasaUjiTanah');
        removeCondition('JasaPembatasPengaman');
	removeCondition('JasaPerkuatanTanahLongsor');
	removeCondition('JasaBongkarBangunan');
	removeCondition('JasaPengeboran');
	    removeCondition('JasaBorTeknik');
		removeCondition('JasaBorAir');
		removeCondition('JasaBorPile');
		removeCondition('JasaCoringBeton');
		removeCondition('JasaBorBeton');
		removeCondition('JasaBorTanah');
		removeCondition('JasaBorHorizontal');
		removeCondition('JasaBorTembok');

        JasaKonstruksiSubLink.style.visibility = 'visible';
        JasaAlatKonstruksiLink.style.visibility = 'visible';
	    
        pageNameKonstruksiSub.textContent = urlMappingJasaAlatKonstruksi[cleanUrlJasaKons];
    }
// ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaAlatKonstruksi[cleanUrlJasaKons]) {
       const jsonLDBreadcrumb = {
           "@context": "https://schema.org",
           "@type": "BreadcrumbList",
           "itemListElement": [
	    {
	      "@type": "ListItem",
	      "position": 1,
	      "name": "Beton Jaya Readymix",
	      "item": "https://www.betonjayareadymix.com/"
	    },
               {
                   "@type": "ListItem",
                   "position": 2,
                   "name": "Jasa Konstruksi",
                   "item": "https://www.betonjayareadymix.com/p/jasa-konstruksi.html"
               },
               {
                   "@type": "ListItem",
                   "position": 3,
                   "name": "Jasa Alat Konstruksi",
                   "item": "https://www.betonjayareadymix.com/p/jasa-alat-konstruksi.html"
               },
               {
                   "@type": "ListItem",
                   "position": 4,
                   "name": urlMappingJasaAlatKonstruksi[cleanUrlJasaKons],
                   "item": cleanUrlJasaKons
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }

   if (urlMappingJasaSewaAlatKonstruksi[cleanUrlJasaKons]) {
        restoreCondition('JasaKonsSub');
	//restoreCondition('JasaKonstruksi');
	restoreCondition('JasaAlatKonstruksi');
	restoreCondition('SewaAlatKonstruksi');
	   
           // hapus elemen id DIV Lain
	removeCondition('ProdukInFur');
        removeCondition('MaterialKons');
	removeCondition('ProdukKons');
        //removeCondition('ProdukKonsSaluran');
        //removeCondition('ProdukKonsPembatas');
        removeCondition('JasaKonsPondasiTanah');
        removeCondition('JasaKonsPembatas');
        removeCondition('JasaKonsJalanPerkerasan');
        removeCondition('JasaKonsPerbaikan');
	removeCondition('JasaKonsFinishing');
        removeCondition('JasaKonsStruktur');
	removeCondition('JasaKons');
	removeCondition('MenuKons');

	// hapus elemen id DIV Lain selain SewaAlatKonstruksi dan JasaAlatKonstruksi
	removeCondition('SewaAlatBerat');
	removeCondition('SewaAlatKonstruksiRingan');

	   	removeCondition('JasaInstalasiListrik');
	removeCondition('JasaRenovasiPerbaikan');
	removeCondition('JasaStrukturKonstruksi');
        removeCondition('JasaFinishing');
        removeCondition('JasaPondasiPerkuatan');
        removeCondition('JasaSaluranDrainase');
        removeCondition('JasaJalanPerkerasan');
	removeCondition('JasaPematanganLahan');
	removeCondition('JasaUjiTanah');
        removeCondition('JasaPembatasPengaman');
	removeCondition('JasaPerkuatanTanahLongsor');
	removeCondition('JasaBongkarBangunan');
	removeCondition('JasaPengeboran');
	    removeCondition('JasaBorTeknik');
		removeCondition('JasaBorAir');
		removeCondition('JasaBorPile');
		removeCondition('JasaCoringBeton');
		removeCondition('JasaBorBeton');
		removeCondition('JasaBorTanah');
		removeCondition('JasaBorHorizontal');
		removeCondition('JasaBorTembok');

        JasaKonstruksiSubLink.style.visibility = 'visible';
        JasaAlatKonstruksiLink.style.visibility = 'visible';
        SewaAlatKonstruksiLink.style.visibility = 'visible';
	    
        pageNameKonstruksiSub.textContent = urlMappingJasaSewaAlatKonstruksi[cleanUrlJasaKons];
    }
 // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaSewaAlatKonstruksi[cleanUrlJasaKons]) {
       const jsonLDBreadcrumb = {
           "@context": "https://schema.org",
           "@type": "BreadcrumbList",
           "itemListElement": [
	    {
	      "@type": "ListItem",
	      "position": 1,
	      "name": "Beton Jaya Readymix",
	      "item": "https://www.betonjayareadymix.com/"
	    },
               {
                   "@type": "ListItem",
                   "position": 2,
                   "name": "Jasa Konstruksi",
                   "item": "https://www.betonjayareadymix.com/p/jasa-konstruksi.html"
               },
               {
                   "@type": "ListItem",
                   "position": 3,
                   "name": "Jasa Alat Konstruksi",
                   "item": "https://www.betonjayareadymix.com/p/jasa-alat-konstruksi.html"
               },
	      {
                   "@type": "ListItem",
                   "position": 4,
                   "name": "Sewa Alat Konstruksi",
                   "item": "https://www.betonjayareadymix.com/p/sewa-alat-konstruksi.html"
               },
               {
                   "@type": "ListItem",
                   "position": 5,
                   "name": urlMappingJasaSewaAlatKonstruksi[cleanUrlJasaKons],
                   "item": cleanUrlJasaKons
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }

  if (urlMappingJasaSewaAlatBerat[cleanUrlJasaKons]) {
        restoreCondition('JasaKonsSub');
	//restoreCondition('JasaKonstruksi');
	restoreCondition('JasaAlatKonstruksi');
	restoreCondition('SewaAlatKonstruksi');
	restoreCondition('SewaAlatBerat');
	  
	   
           // hapus elemen id DIV Lain
	removeCondition('ProdukInFur');
        removeCondition('MaterialKons');
	removeCondition('ProdukKons');
        //removeCondition('ProdukKonsSaluran');
        //removeCondition('ProdukKonsPembatas');
        removeCondition('JasaKonsPondasiTanah');
        removeCondition('JasaKonsPembatas');
        removeCondition('JasaKonsJalanPerkerasan');
        removeCondition('JasaKonsPerbaikan');
	removeCondition('JasaKonsFinishing');
        removeCondition('JasaKonsStruktur');
	removeCondition('JasaKons');
	removeCondition('MenuKons');

	// hapus elemen id DIV Lain selain SewaAlatKonstruksi dan JasaAlatKonstruksi dan SewaAlatBerat
	removeCondition('SewaAlatKonstruksiRingan');

	  	removeCondition('JasaInstalasiListrik');
	removeCondition('JasaRenovasiPerbaikan');
	removeCondition('JasaStrukturKonstruksi');
        removeCondition('JasaFinishing');
        removeCondition('JasaPondasiPerkuatan');
        removeCondition('JasaSaluranDrainase');
        removeCondition('JasaJalanPerkerasan');
	removeCondition('JasaPematanganLahan');
	removeCondition('JasaUjiTanah');
        removeCondition('JasaPembatasPengaman');
	removeCondition('JasaPerkuatanTanahLongsor');
	removeCondition('JasaBongkarBangunan');
	removeCondition('JasaPengeboran');
	    removeCondition('JasaBorTeknik');
		removeCondition('JasaBorAir');
		removeCondition('JasaBorPile');
		removeCondition('JasaCoringBeton');
		removeCondition('JasaBorBeton');
		removeCondition('JasaBorTanah');
		removeCondition('JasaBorHorizontal');
		removeCondition('JasaBorTembok');

        JasaKonstruksiSubLink.style.visibility = 'visible';
        JasaAlatKonstruksiLink.style.visibility = 'visible';
        SewaAlatKonstruksiLink.style.visibility = 'visible';

	
        SewaAlatBeratLink.style.visibility = 'visible';
        pageNameKonstruksiSub.textContent = urlMappingJasaSewaAlatBerat[cleanUrlJasaKons];
    }
 // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaSewaAlatBerat[cleanUrlJasaKons]) {
       const jsonLDBreadcrumb = {
           "@context": "https://schema.org",
           "@type": "BreadcrumbList",
           "itemListElement": [
	    {
	      "@type": "ListItem",
	      "position": 1,
	      "name": "Beton Jaya Readymix",
	      "item": "https://www.betonjayareadymix.com/"
	    },
               {
                   "@type": "ListItem",
                   "position": 2,
                   "name": "Jasa Konstruksi",
                   "item": "https://www.betonjayareadymix.com/p/jasa-konstruksi.html"
               },
               {
                   "@type": "ListItem",
                   "position": 3,
                   "name": "Jasa Alat Konstruksi",
                   "item": "https://www.betonjayareadymix.com/p/jasa-alat-konstruksi.html"
               },
	      {
                   "@type": "ListItem",
                   "position": 4,
                   "name": "Sewa Alat Konstruksi",
                   "item": "https://www.betonjayareadymix.com/p/sewa-alat-konstruksi.html"
               },
	      {
                   "@type": "ListItem",
                   "position": 5,
                   "name": "Sewa Alat Konstruksi",
                   "item": "https://www.betonjayareadymix.com/p/sewa-alat-berat.html"
               },
               {
                   "@type": "ListItem",
                   "position": 6,
                   "name": urlMappingJasaSewaAlatBerat[cleanUrlJasaKons],
                   "item": cleanUrlJasaKons
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
 if (urlMappingJasaSewaAlatKonstruksiRingan[cleanUrlJasaKons]) {
        restoreCondition('JasaKonsSub');
	//restoreCondition('JasaKonstruksi');
	restoreCondition('JasaAlatKonstruksi');
	restoreCondition('SewaAlatKonstruksi');
	restoreCondition('SewaAlatKonstruksiRingan');
	   
           // hapus elemen id DIV Lain
	removeCondition('ProdukInFur');
        removeCondition('MaterialKons');
	removeCondition('ProdukKons');
        //removeCondition('ProdukKonsSaluran');
        //removeCondition('ProdukKonsPembatas');
        removeCondition('JasaKonsPondasiTanah');
        removeCondition('JasaKonsPembatas');
        removeCondition('JasaKonsJalanPerkerasan');
        removeCondition('JasaKonsPerbaikan');
	removeCondition('JasaKonsFinishing');
        removeCondition('JasaKonsStruktur');
	removeCondition('JasaKons');
	removeCondition('MenuKons');

	// hapus elemen id DIV Lain selain SewaAlatKonstruksi dan JasaAlatKonstruksi dan SewaAlatKonstruksiRingan
	removeCondition('SewaAlatBerat');

	 	removeCondition('JasaInstalasiListrik');
	removeCondition('JasaRenovasiPerbaikan');
	removeCondition('JasaStrukturKonstruksi');
        removeCondition('JasaFinishing');
        removeCondition('JasaPondasiPerkuatan');
        removeCondition('JasaSaluranDrainase');
        removeCondition('JasaJalanPerkerasan');
	removeCondition('JasaPematanganLahan');
	removeCondition('JasaUjiTanah');
        removeCondition('JasaPembatasPengaman');
	removeCondition('JasaPerkuatanTanahLongsor');
	removeCondition('JasaBongkarBangunan');
	removeCondition('JasaPengeboran');
	    removeCondition('JasaBorTeknik');
		removeCondition('JasaBorAir');
		removeCondition('JasaBorPile');
		removeCondition('JasaCoringBeton');
		removeCondition('JasaBorBeton');
		removeCondition('JasaBorTanah');
		removeCondition('JasaBorHorizontal');
		removeCondition('JasaBorTembok');

        JasaKonstruksiSubLink.style.visibility = 'visible';
        JasaAlatKonstruksiLink.style.visibility = 'visible';
        SewaAlatKonstruksiLink.style.visibility = 'visible';

	
        SewaAlatKonstruksiRinganLink.style.visibility = 'visible';
        pageNameKonstruksiSub.textContent = urlMappingJasaSewaAlatKonstruksiRingan[cleanUrlJasaKons];
    }
 // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaSewaAlatKonstruksiRingan[cleanUrlJasaKons]) {
       const jsonLDBreadcrumb = {
           "@context": "https://schema.org",
           "@type": "BreadcrumbList",
           "itemListElement": [
	    {
	      "@type": "ListItem",
	      "position": 1,
	      "name": "Beton Jaya Readymix",
	      "item": "https://www.betonjayareadymix.com/"
	    },
               {
                   "@type": "ListItem",
                   "position": 2,
                   "name": "Jasa Konstruksi",
                   "item": "https://www.betonjayareadymix.com/p/jasa-konstruksi.html"
               },
               {
                   "@type": "ListItem",
                   "position": 3,
                   "name": "Jasa Alat Konstruksi",
                   "item": "https://www.betonjayareadymix.com/p/jasa-alat-konstruksi.html"
               },
	      {
                   "@type": "ListItem",
                   "position": 4,
                   "name": "Sewa Alat Konstruksi",
                   "item": "https://www.betonjayareadymix.com/p/sewa-alat-konstruksi.html"
               },
	      {
                   "@type": "ListItem",
                   "position": 5,
                   "name": "Sewa Alat Konstruksi Ringan",
                   "item": "https://www.betonjayareadymix.com/p/sewa-alat-konstruksi-ringan.html"
               },
               {
                   "@type": "ListItem",
                   "position": 6,
                   "name": urlMappingJasaSewaAlatKonstruksiRingan[cleanUrlJasaKons],
                   "item": cleanUrlJasaKons
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
  //AKHIR JASA KONTRUKSI ALAT
	
    if (urlMappingPerbaikan[cleanUrlJasaKons]) {
        restoreCondition('JasaKonsSub');
	//restoreCondition('JasaKonstruksi');
	restoreCondition('JasaRenovasiPerbaikan');
           // hapus elemen id DIV Lain
	removeCondition('ProdukInFur');
        removeCondition('MaterialKons');
	removeCondition('ProdukKons');
        //removeCondition('ProdukKonsSaluran');
        //removeCondition('ProdukKonsPembatas');
        removeCondition('JasaKonsPondasiTanah');
        removeCondition('JasaKonsPembatas');
        removeCondition('JasaKonsJalanPerkerasan');
        removeCondition('JasaKonsPerbaikan');
	removeCondition('JasaKonsFinishing');
        removeCondition('JasaKonsStruktur');
	removeCondition('JasaKons');
	removeCondition('MenuKons');

	// hapus elemen id DIV Lain
	removeCondition('JasaAlatKonstruksi');
	removeCondition('SewaAlatKonstruksi');
	removeCondition('SewaAlatBerat');
	removeCondition('SewaAlatKonstruksiRingan');
	
	 	removeCondition('JasaInstalasiListrik');   
	removeCondition('JasaStrukturKonstruksi');
        removeCondition('JasaFinishing');
        removeCondition('JasaPondasiPerkuatan');
        removeCondition('JasaSaluranDrainase');
        removeCondition('JasaJalanPerkerasan');
	removeCondition('JasaPematanganLahan');
	removeCondition('JasaUjiTanah');
        removeCondition('JasaPembatasPengaman');
	removeCondition('JasaPerkuatanTanahLongsor');
	removeCondition('JasaBongkarBangunan');
	removeCondition('JasaPengeboran');
		  removeCondition('JasaBorTeknik');
		removeCondition('JasaBorAir');
		removeCondition('JasaBorPile');
		removeCondition('JasaCoringBeton');
		removeCondition('JasaBorBeton');
		removeCondition('JasaBorTanah');
		removeCondition('JasaBorHorizontal');
		removeCondition('JasaBorTembok');

        JasaKonstruksiSubLink.style.visibility = 'visible';
        JasaRenovasiPerbaikanLink.style.visibility = 'visible';
	    
        pageNameKonstruksiSub.textContent = urlMappingPerbaikan[cleanUrlJasaKons];
    }
 // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingPerbaikan[cleanUrlJasaKons]) {
       const jsonLDBreadcrumb = {
           "@context": "https://schema.org",
           "@type": "BreadcrumbList",
           "itemListElement": [
	    {
	      "@type": "ListItem",
	      "position": 1,
	      "name": "Beton Jaya Readymix",
	      "item": "https://www.betonjayareadymix.com/"
	    },
               {
                   "@type": "ListItem",
                   "position": 2,
                   "name": "Jasa Konstruksi",
                   "item": "https://www.betonjayareadymix.com/p/jasa-konstruksi.html"
               },
               {
                   "@type": "ListItem",
                   "position": 3,
                   "name": "Jasa Renovasi",
                   "item": "https://www.betonjayareadymix.com/p/jasa-renovasi.html"
               },
	       {
                   "@type": "ListItem",
                   "position": 4,
                   "name": urlMappingPerbaikan[cleanUrlJasaKons],
                   "item": cleanUrlJasaKons
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
    if (urlMappingStruktur[cleanUrlJasaKons]) {
        restoreCondition('JasaKonsSub');
	restoreCondition('JasaStrukturKonstruksi');
           // hapus elemen id DIV Lain
	removeCondition('ProdukInFur');
        removeCondition('MaterialKons');
	removeCondition('ProdukKons');
        //removeCondition('ProdukKonsSaluran');
        //removeCondition('ProdukKonsPembatas');
        removeCondition('JasaKonsPondasiTanah');
        removeCondition('JasaKonsJalanPerkerasan');
        removeCondition('JasaKonsPembatas');
        removeCondition('JasaKonsPerbaikan');
	removeCondition('JasaKonsFinishing');
        removeCondition('JasaKonsStruktur');
	removeCondition('JasaKons');
	removeCondition('MenuKons');

	// hapus elemen id DIV Lain
	removeCondition('JasaAlatKonstruksi');
	removeCondition('SewaAlatKonstruksi');
	removeCondition('SewaAlatBerat');
	removeCondition('SewaAlatKonstruksiRingan');
	
		removeCondition('JasaInstalasiListrik');    
	removeCondition('JasaRenovasiPerbaikan');
        removeCondition('JasaFinishing');
        removeCondition('JasaPondasiPerkuatan');
        removeCondition('JasaSaluranDrainase');
        removeCondition('JasaJalanPerkerasan');
	removeCondition('JasaPematanganLahan');
	removeCondition('JasaUjiTanah');
        removeCondition('JasaPembatasPengaman');
	removeCondition('JasaPerkuatanTanahLongsor');
	removeCondition('JasaBongkarBangunan');
	removeCondition('JasaPengeboran');
		 removeCondition('JasaBorTeknik');
		removeCondition('JasaBorAir');
		removeCondition('JasaBorPile');
		removeCondition('JasaCoringBeton');
		removeCondition('JasaBorBeton');
		removeCondition('JasaBorTanah');
		removeCondition('JasaBorHorizontal');
		removeCondition('JasaBorTembok');
       // removeCondition('JasaKonstruksiCustom');

        JasaKonstruksiSubLink.style.visibility = 'visible';
        JasaStrukturKonstruksiLink.style.visibility = 'visible';
        pageNameKonstruksiSub.textContent = urlMappingStruktur[cleanUrlJasaKons];
    }
   // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingStruktur[cleanUrlJasaKons]) {
       const jsonLDBreadcrumb = {
           "@context": "https://schema.org",
           "@type": "BreadcrumbList",
           "itemListElement": [
	    {
	      "@type": "ListItem",
	      "position": 1,
	      "name": "Beton Jaya Readymix",
	      "item": "https://www.betonjayareadymix.com/"
	    },
               {
                   "@type": "ListItem",
                   "position": 2,
                   "name": "Jasa Konstruksi",
                   "item": "https://www.betonjayareadymix.com/p/jasa-konstruksi.html"
               },
               {
                   "@type": "ListItem",
                   "position": 3,
                   "name": "Jasa Struktur Konstruksi",
                   "item": "https://www.betonjayareadymix.com/p/jasa-struktur-konstruksi.html"
               },
	       {
                   "@type": "ListItem",
                   "position": 4,
                   "name": urlMappingStruktur[cleanUrlJasaKons],
                   "item": cleanUrlJasaKons
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
    if (urlMappingFinishing[cleanUrlJasaKons]) {
        restoreCondition('JasaKonsSub');
	restoreCondition('JasaFinishing');
           // hapus elemen id DIV Lain
	removeCondition('ProdukInFur');
        removeCondition('MaterialKons');
	removeCondition('ProdukKons');
        //removeCondition('ProdukKonsSaluran');
        //removeCondition('ProdukKonsPembatas');
        removeCondition('JasaKonsPondasiTanah');
        removeCondition('JasaKonsJalanPerkerasan');
        removeCondition('JasaKonsPembatas');
        removeCondition('JasaKonsPerbaikan');
	removeCondition('JasaKonsFinishing');
        removeCondition('JasaKonsStruktur');
	removeCondition('JasaKons');
	removeCondition('MenuKons');

	// hapus elemen id DIV Lain
	removeCondition('JasaAlatKonstruksi');
	removeCondition('SewaAlatKonstruksi');
	removeCondition('SewaAlatBerat');
	removeCondition('SewaAlatKonstruksiRingan');
	
	 	removeCondition('JasaInstalasiListrik');   
	removeCondition('JasaRenovasiPerbaikan');
        removeCondition('JasaStrukturKonstruksi');
        removeCondition('JasaPondasiPerkuatan');
        removeCondition('JasaSaluranDrainase');
        removeCondition('JasaJalanPerkerasan');
	removeCondition('JasaPematanganLahan');
	removeCondition('JasaUjiTanah');
        removeCondition('JasaPembatasPengaman');
	removeCondition('JasaPerkuatanTanahLongsor');
	removeCondition('JasaBongkarBangunan');
	removeCondition('JasaPengeboran');
		 removeCondition('JasaBorTeknik');
		removeCondition('JasaBorAir');
		removeCondition('JasaBorPile');
		removeCondition('JasaCoringBeton');
		removeCondition('JasaBorBeton');
		removeCondition('JasaBorTanah');
		removeCondition('JasaBorHorizontal');
		removeCondition('JasaBorTembok');
       // removeCondition('JasaKonstruksiCustom');

        JasaKonstruksiSubLink.style.visibility = 'visible';
        JasaFinishingLink.style.visibility = 'visible';
        pageNameKonstruksiSub.textContent = urlMappingFinishing[cleanUrlJasaKons];
    }
  // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingFinishing[cleanUrlJasaKons]) {
       const jsonLDBreadcrumb = {
           "@context": "https://schema.org",
           "@type": "BreadcrumbList",
           "itemListElement": [
	    {
	      "@type": "ListItem",
	      "position": 1,
	      "name": "Beton Jaya Readymix",
	      "item": "https://www.betonjayareadymix.com/"
	    },
               {
                   "@type": "ListItem",
                   "position": 2,
                   "name": "Jasa Konstruksi",
                   "item": "https://www.betonjayareadymix.com/p/jasa-konstruksi.html"
               },
               {
                   "@type": "ListItem",
                   "position": 3,
                   "name": "Jasa Finishing",
                   "item": "https://www.betonjayareadymix.com/p/jasa-finishing.html"
               },
	       {
                   "@type": "ListItem",
                   "position": 4,
                   "name": urlMappingFinishing[cleanUrlJasaKons],
                   "item": cleanUrlJasaKons
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
    if (urlMappingPondasi[cleanUrlJasaKons]) {
        restoreCondition('JasaKonsSub');
	restoreCondition('JasaPondasiPerkuatan');
           // hapus elemen id DIV Lain
	removeCondition('ProdukInFur');
        removeCondition('MaterialKons');
	removeCondition('ProdukKons');
        //removeCondition('ProdukKonsSaluran');
        //removeCondition('ProdukKonsPembatas');
        removeCondition('JasaKonsPondasiTanah');
        removeCondition('JasaKonsJalanPerkerasan');
        removeCondition('JasaKonsPembatas');
        removeCondition('JasaKonsPerbaikan');
	removeCondition('JasaKonsFinishing');
        removeCondition('JasaKonsStruktur');
	removeCondition('JasaKons');
	removeCondition('MenuKons');
	    
       // hapus elemen id DIV Lain
	removeCondition('JasaAlatKonstruksi');
	removeCondition('SewaAlatKonstruksi');
	removeCondition('SewaAlatBerat');
	removeCondition('SewaAlatKonstruksiRingan');
	
	 	removeCondition('JasaInstalasiListrik');   
	removeCondition('JasaRenovasiPerbaikan');
        removeCondition('JasaStrukturKonstruksi');
        removeCondition('JasaFinishing');
        removeCondition('JasaSaluranDrainase');
        removeCondition('JasaJalanPerkerasan');
	removeCondition('JasaPematanganLahan');
	removeCondition('JasaUjiTanah');
        removeCondition('JasaPembatasPengaman');
	removeCondition('JasaPerkuatanTanahLongsor');
	removeCondition('JasaBongkarBangunan');
	removeCondition('JasaPengeboran');
		 removeCondition('JasaBorTeknik');
		removeCondition('JasaBorAir');
		removeCondition('JasaBorPile');
		removeCondition('JasaCoringBeton');
		removeCondition('JasaBorBeton');
		removeCondition('JasaBorTanah');
		removeCondition('JasaBorHorizontal');
		removeCondition('JasaBorTembok');

       // removeCondition('JasaKonstruksiCustom');

        JasaKonstruksiSubLink.style.visibility = 'visible';
        JasaPondasiPerkuatanLink.style.visibility = 'visible';
        pageNameKonstruksiSub.textContent = urlMappingPondasi[cleanUrlJasaKons];
    }
  // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingPondasi[cleanUrlJasaKons]) {
       const jsonLDBreadcrumb = {
           "@context": "https://schema.org",
           "@type": "BreadcrumbList",
           "itemListElement": [
	    {
	      "@type": "ListItem",
	      "position": 1,
	      "name": "Beton Jaya Readymix",
	      "item": "https://www.betonjayareadymix.com/"
	    },
               {
                   "@type": "ListItem",
                   "position": 2,
                   "name": "Jasa Konstruksi",
                   "item": "https://www.betonjayareadymix.com/p/jasa-konstruksi.html"
               },
               {
                   "@type": "ListItem",
                   "position": 3,
                   "name": "Jasa Pondasi & Perkuatan Tanah",
                   "item": "https://www.betonjayareadymix.com/p/jasa-pondasi-perkuatan-tanah.html"
               },
	       {
                   "@type": "ListItem",
                   "position": 4,
                   "name": urlMappingPondasi[cleanUrlJasaKons],
                   "item": cleanUrlJasaKons
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
    if (urlMappingSaluran[cleanUrlJasaKons]) {
        restoreCondition('JasaKonsSub');
	 restoreCondition('JasaSaluranDrainase');
           // hapus elemen id DIV Lain
	removeCondition('ProdukInFur');
        removeCondition('MaterialKons');
	removeCondition('ProdukKons');
        //removeCondition('ProdukKonsSaluran');
        //removeCondition('ProdukKonsPembatas');
        removeCondition('JasaKonsPondasiTanah');
        removeCondition('JasaKonsJalanPerkerasan');
        removeCondition('JasaKonsPembatas');
        removeCondition('JasaKonsPerbaikan');
	removeCondition('JasaKonsFinishing');
        removeCondition('JasaKonsStruktur');
	removeCondition('JasaKons');
	removeCondition('MenuKons');
	    
       // hapus elemen id DIV Lain
	removeCondition('JasaAlatKonstruksi');
	removeCondition('SewaAlatKonstruksi');
	removeCondition('SewaAlatBerat');
	removeCondition('SewaAlatKonstruksiRingan');
	
	  	removeCondition('JasaInstalasiListrik');  
	removeCondition('JasaRenovasiPerbaikan');
        removeCondition('JasaStrukturKonstruksi');
        removeCondition('JasaFinishing');
        removeCondition('JasaPondasiPerkuatan');
        removeCondition('JasaJalanPerkerasan');
	removeCondition('JasaPematanganLahan');
	removeCondition('JasaUjiTanah');
        removeCondition('JasaPembatasPengaman');
	removeCondition('JasaPerkuatanTanahLongsor');
	removeCondition('JasaBongkarBangunan');
	removeCondition('JasaPengeboran');
		 removeCondition('JasaBorTeknik');
		removeCondition('JasaBorAir');
		removeCondition('JasaBorPile');
		removeCondition('JasaCoringBeton');
		removeCondition('JasaBorBeton');
		removeCondition('JasaBorTanah');
		removeCondition('JasaBorHorizontal');
		removeCondition('JasaBorTembok');

       // removeCondition('JasaKonstruksiCustom');

        JasaKonstruksiSubLink.style.visibility = 'visible';
        JasaSaluranDrainaseLink.style.visibility = 'visible';
        pageNameKonstruksiSub.textContent = urlMappingSaluran[cleanUrlJasaKons];
    }
  
  // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingSaluran[cleanUrlJasaKons]) {
       const jsonLDBreadcrumb = {
           "@context": "https://schema.org",
           "@type": "BreadcrumbList",
           "itemListElement": [
	    {
	      "@type": "ListItem",
	      "position": 1,
	      "name": "Beton Jaya Readymix",
	      "item": "https://www.betonjayareadymix.com/"
	    },
               {
                   "@type": "ListItem",
                   "position": 2,
                   "name": "Jasa Konstruksi",
                   "item": "https://www.betonjayareadymix.com/p/jasa-konstruksi.html"
               },
               {
                   "@type": "ListItem",
                   "position": 3,
                   "name": "Jasa Saluran & Drainase",
                   "item": "https://www.betonjayareadymix.com/p/jasa-saluran-drainase.html"
               },
	       {
                   "@type": "ListItem",
                   "position": 4,
                   "name": urlMappingSaluran[cleanUrlJasaKons],
                   "item": cleanUrlJasaKons
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
    if (urlMappingJalan[cleanUrlJasaKons]) {
        restoreCondition('JasaKonsSub');
	restoreCondition('JasaJalanPerkerasan');
           // hapus elemen id DIV Lain
	removeCondition('ProdukInFur');
        removeCondition('MaterialKons');
	removeCondition('ProdukKons');
        //removeCondition('ProdukKonsSaluran');
        //removeCondition('ProdukKonsPembatas');
        removeCondition('JasaKonsPondasiTanah');
        removeCondition('JasaKonsJalanPerkerasan');
        removeCondition('JasaKonsPembatas');
        removeCondition('JasaKonsPerbaikan');
	removeCondition('JasaKonsFinishing');
        removeCondition('JasaKonsStruktur');
	removeCondition('JasaKons');
	removeCondition('MenuKons');
	    
       // hapus elemen id DIV Lain
	removeCondition('JasaAlatKonstruksi');
	removeCondition('SewaAlatKonstruksi');
	removeCondition('SewaAlatBerat');
	removeCondition('SewaAlatKonstruksiRingan');
	
	  	removeCondition('JasaInstalasiListrik');  
	removeCondition('JasaRenovasiPerbaikan');
        removeCondition('JasaStrukturKonstruksi');
        removeCondition('JasaFinishing');
        removeCondition('JasaPondasiPerkuatan');
        removeCondition('JasaSaluranDrainase');
        removeCondition('JasaPembatasPengaman');
	removeCondition('JasaPematanganLahan');
	removeCondition('JasaUjiTanah');
	removeCondition('JasaPerkuatanTanahLongsor');
	removeCondition('JasaBongkarBangunan');
	removeCondition('JasaPengeboran');
		 removeCondition('JasaBorTeknik');
		removeCondition('JasaBorAir');
		removeCondition('JasaBorPile');
		removeCondition('JasaCoringBeton');
		removeCondition('JasaBorBeton');
		removeCondition('JasaBorTanah');
		removeCondition('JasaBorHorizontal');
		removeCondition('JasaBorTembok');
        //removeCondition('JasaKonstruksiCustom');

        JasaKonstruksiSubLink.style.visibility = 'visible';
        JasaJalanPerkerasanLink.style.visibility = 'visible';
        pageNameKonstruksiSub.textContent = urlMappingJalan[cleanUrlJasaKons];
    }
  // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJalan[cleanUrlJasaKons]) {
       const jsonLDBreadcrumb = {
           "@context": "https://schema.org",
           "@type": "BreadcrumbList",
           "itemListElement": [
	    {
	      "@type": "ListItem",
	      "position": 1,
	      "name": "Beton Jaya Readymix",
	      "item": "https://www.betonjayareadymix.com/"
	    },
               {
                   "@type": "ListItem",
                   "position": 2,
                   "name": "Jasa Konstruksi",
                   "item": "https://www.betonjayareadymix.com/p/jasa-konstruksi.html"
               },
               {
                   "@type": "ListItem",
                   "position": 3,
                   "name": "Jasa Jalan & Perkerasan",
                   "item": "https://www.betonjayareadymix.com/p/jasa-jalan-perkerasan.html"
               },
	       {
                   "@type": "ListItem",
                   "position": 4,
                   "name": urlMappingJalan[cleanUrlJasaKons],
                   "item": cleanUrlJasaKons
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
    if (urlMappingPembatas[cleanUrlJasaKons]) {
        restoreCondition('JasaKonsSub');
	restoreCondition('JasaPembatasPengaman');
           // hapus elemen id DIV Lain
	removeCondition('ProdukInFur');
        removeCondition('MaterialKons');
	removeCondition('ProdukKons');
        //removeCondition('ProdukKonsSaluran');
        //removeCondition('ProdukKonsPembatas');
        removeCondition('JasaKonsPondasiTanah');
        removeCondition('JasaKonsJalanPerkerasan');
        removeCondition('JasaKonsPembatas');
        removeCondition('JasaKonsPerbaikan');
	removeCondition('JasaKonsFinishing');
        removeCondition('JasaKonsStruktur');
	removeCondition('JasaKons');
	removeCondition('MenuKons');
	    
       // hapus elemen id DIV Lain
	removeCondition('JasaAlatKonstruksi');
	removeCondition('SewaAlatKonstruksi');
	removeCondition('SewaAlatBerat');
	removeCondition('SewaAlatKonstruksiRingan');
	
	 	removeCondition('JasaInstalasiListrik');   
	removeCondition('JasaRenovasiPerbaikan');
        removeCondition('JasaStrukturKonstruksi');
        removeCondition('JasaFinishing');
        removeCondition('JasaPondasiPerkuatan');
        removeCondition('JasaSaluranDrainase');
        removeCondition('JasaJalanPerkerasan');
	removeCondition('JasaPematanganLahan');
	removeCondition('JasaUjiTanah');
	removeCondition('JasaPerkuatanTanahLongsor');
	removeCondition('JasaBongkarBangunan');
	removeCondition('JasaPengeboran');
		 removeCondition('JasaBorTeknik');
		removeCondition('JasaBorAir');
		removeCondition('JasaBorPile');
		removeCondition('JasaCoringBeton');
		removeCondition('JasaBorBeton');
		removeCondition('JasaBorTanah');
		removeCondition('JasaBorHorizontal');
		removeCondition('JasaBorTembok');

       // removeCondition('JasaKonstruksiCustom');

        JasaKonstruksiSubLink.style.visibility = 'visible';
        JasaPembatasPengamanLink.style.visibility = 'visible';
        pageNameKonstruksiSub.textContent = urlMappingPembatas[cleanUrlJasaKons];
    }
  // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingPembatas[cleanUrlJasaKons]) {
       const jsonLDBreadcrumb = {
           "@context": "https://schema.org",
           "@type": "BreadcrumbList",
           "itemListElement": [
	    {
	      "@type": "ListItem",
	      "position": 1,
	      "name": "Beton Jaya Readymix",
	      "item": "https://www.betonjayareadymix.com/"
	    },
               {
                   "@type": "ListItem",
                   "position": 2,
                   "name": "Jasa Konstruksi",
                   "item": "https://www.betonjayareadymix.com/p/jasa-konstruksi.html"
               },
               {
                   "@type": "ListItem",
                   "position": 3,
                   "name": "Jasa Pembatas & Pengaman",
                   "item": "https://www.betonjayareadymix.com/p/jasa-pembatas-pengaman.html"
               },
	       {
                   "@type": "ListItem",
                   "position": 4,
                   "name": urlMappingPembatas[cleanUrlJasaKons],
                   "item": cleanUrlJasaKons
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
	
  if (urlMappingPematanganLahan[cleanUrlJasaKons]) {
        restoreCondition('JasaKonsSub');
	restoreCondition('JasaPematanganLahan');
           // hapus elemen id DIV Lain
	removeCondition('ProdukInFur');
        removeCondition('MaterialKons');
	removeCondition('ProdukKons');
        //removeCondition('ProdukKonsSaluran');
        //removeCondition('ProdukKonsPembatas');
        removeCondition('JasaKonsPondasiTanah');
        removeCondition('JasaKonsJalanPerkerasan');
        removeCondition('JasaKonsPembatas');
        removeCondition('JasaKonsPerbaikan');
	removeCondition('JasaKonsFinishing');
        removeCondition('JasaKonsStruktur');
	removeCondition('JasaKons');
	removeCondition('MenuKons');
	    
       // hapus elemen id DIV Lain
	removeCondition('JasaAlatKonstruksi');
	removeCondition('SewaAlatKonstruksi');
	removeCondition('SewaAlatBerat');
	removeCondition('SewaAlatKonstruksiRingan');

	  	removeCondition('JasaInstalasiListrik');
	removeCondition('JasaRenovasiPerbaikan');
        removeCondition('JasaStrukturKonstruksi');
        removeCondition('JasaFinishing');
        removeCondition('JasaPondasiPerkuatan');
        removeCondition('JasaSaluranDrainase');
        removeCondition('JasaJalanPerkerasan');
	removeCondition('JasaPembatasPengaman');
	removeCondition('JasaUjiTanah');
	removeCondition('JasaPerkuatanTanahLongsor');
	removeCondition('JasaBongkarBangunan');
	removeCondition('JasaPengeboran');
		 removeCondition('JasaBorTeknik');
		removeCondition('JasaBorAir');
		removeCondition('JasaBorPile');
		removeCondition('JasaCoringBeton');
		removeCondition('JasaBorBeton');
		removeCondition('JasaBorTanah');
		removeCondition('JasaBorHorizontal');
		removeCondition('JasaBorTembok');

       // removeCondition('JasaKonstruksiCustom');

        JasaKonstruksiSubLink.style.visibility = 'visible';
        JasaPematanganLahanLink.style.visibility = 'visible';
        pageNameKonstruksiSub.textContent = urlMappingPematanganLahan[cleanUrlJasaKons];
    }

  // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingPematanganLahan[cleanUrlJasaKons]) {
       const jsonLDBreadcrumb = {
           "@context": "https://schema.org",
           "@type": "BreadcrumbList",
           "itemListElement": [
	    {
	      "@type": "ListItem",
	      "position": 1,
	      "name": "Beton Jaya Readymix",
	      "item": "https://www.betonjayareadymix.com/"
	    },
               {
                   "@type": "ListItem",
                   "position": 2,
                   "name": "Jasa Konstruksi",
                   "item": "https://www.betonjayareadymix.com/p/jasa-konstruksi.html"
               },
               {
                   "@type": "ListItem",
                   "position": 3,
                   "name": "Jasa Pematangan Lahan",
                   "item": "https://www.betonjayareadymix.com/p/jasa-pematangan-lahan.html"
               },
	       {
                   "@type": "ListItem",
                   "position": 4,
                   "name": urlMappingPematanganLahan[cleanUrlJasaKons],
                   "item": cleanUrlJasaKons
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
	
   if (urlMappingUjiTanah[cleanUrlJasaKons]) {
        restoreCondition('JasaKonsSub');
	restoreCondition('JasaUjiTanah');
           // hapus elemen id DIV Lain
	removeCondition('ProdukInFur');
        removeCondition('MaterialKons');
	removeCondition('ProdukKons');
        //removeCondition('ProdukKonsSaluran');
        //removeCondition('ProdukKonsPembatas');
        removeCondition('JasaKonsPondasiTanah');
        removeCondition('JasaKonsJalanPerkerasan');
        removeCondition('JasaKonsPembatas');
        removeCondition('JasaKonsPerbaikan');
	removeCondition('JasaKonsFinishing');
        removeCondition('JasaKonsStruktur');
	removeCondition('JasaKons');
	removeCondition('MenuKons');
	   
       // hapus elemen id DIV Lain
	removeCondition('JasaAlatKonstruksi');
	removeCondition('SewaAlatKonstruksi');
	removeCondition('SewaAlatBerat');
	removeCondition('SewaAlatKonstruksiRingan');

	   	removeCondition('JasaInstalasiListrik');
	removeCondition('JasaRenovasiPerbaikan');
        removeCondition('JasaStrukturKonstruksi');
        removeCondition('JasaFinishing');
        removeCondition('JasaPondasiPerkuatan');
        removeCondition('JasaSaluranDrainase');
        removeCondition('JasaJalanPerkerasan');
	removeCondition('JasaPembatasPengaman');
	removeCondition('JasaPematanganLahan');
	removeCondition('JasaPerkuatanTanahLongsor');
	removeCondition('JasaBongkarBangunan');
	removeCondition('JasaPengeboran');
	    removeCondition('JasaBorTeknik');
		removeCondition('JasaBorAir');
		removeCondition('JasaBorPile');
		removeCondition('JasaCoringBeton');
		removeCondition('JasaBorBeton');
		removeCondition('JasaBorTanah');
		removeCondition('JasaBorHorizontal');
		removeCondition('JasaBorTembok');

       // removeCondition('JasaKonstruksiCustom');

        JasaKonstruksiSubLink.style.visibility = 'visible';
        JasaUjiTanahLink.style.visibility = 'visible';
        pageNameKonstruksiSub.textContent = urlMappingUjiTanah[cleanUrlJasaKons];
    }
   
  // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingUjiTanah[cleanUrlJasaKons]) {
       const jsonLDBreadcrumb = {
           "@context": "https://schema.org",
           "@type": "BreadcrumbList",
           "itemListElement": [
	    {
	      "@type": "ListItem",
	      "position": 1,
	      "name": "Beton Jaya Readymix",
	      "item": "https://www.betonjayareadymix.com/"
	    },
               {
                   "@type": "ListItem",
                   "position": 2,
                   "name": "Jasa Konstruksi",
                   "item": "https://www.betonjayareadymix.com/p/jasa-konstruksi.html"
               },
               {
                   "@type": "ListItem",
                   "position": 3,
                   "name": "Jasa Uji Tanah",
                   "item": "https://www.betonjayareadymix.com/p/jasa-uji-tanah.html"
               },
	       {
                   "@type": "ListItem",
                   "position": 4,
                   "name": urlMappingUjiTanah[cleanUrlJasaKons],
                   "item": cleanUrlJasaKons
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
   if (urlMappingPerkuatanTanahLongsor[cleanUrlJasaKons]) {
        restoreCondition('JasaKonsSub');
	restoreCondition('JasaPerkuatanTanahLongsor');
           // hapus elemen id DIV Lain
	removeCondition('ProdukInFur');
        removeCondition('MaterialKons');
	removeCondition('ProdukKons');
        //removeCondition('ProdukKonsSaluran');
        //removeCondition('ProdukKonsPembatas');
        removeCondition('JasaKonsPondasiTanah');
        removeCondition('JasaKonsJalanPerkerasan');
        removeCondition('JasaKonsPembatas');
        removeCondition('JasaKonsPerbaikan');
	removeCondition('JasaKonsFinishing');
        removeCondition('JasaKonsStruktur');
	removeCondition('JasaKons');
	removeCondition('MenuKons');
	   
       // hapus elemen id DIV Lain
	removeCondition('JasaAlatKonstruksi');
	removeCondition('SewaAlatKonstruksi');
	removeCondition('SewaAlatBerat');
	removeCondition('SewaAlatKonstruksiRingan');

	   	removeCondition('JasaInstalasiListrik');
	removeCondition('JasaRenovasiPerbaikan');
        removeCondition('JasaStrukturKonstruksi');
        removeCondition('JasaFinishing');
        removeCondition('JasaPondasiPerkuatan');
        removeCondition('JasaSaluranDrainase');
        removeCondition('JasaJalanPerkerasan');
	removeCondition('JasaPembatasPengaman');
	removeCondition('JasaPematanganLahan');
	removeCondition('JasaUjiTanah');
	removeCondition('JasaBongkarBangunan');
	removeCondition('JasaPengeboran');
	    removeCondition('JasaBorTeknik');
		removeCondition('JasaBorAir');
		removeCondition('JasaBorPile');
		removeCondition('JasaCoringBeton');
		removeCondition('JasaBorBeton');
		removeCondition('JasaBorTanah');
		removeCondition('JasaBorHorizontal');
		removeCondition('JasaBorTembok');

       // removeCondition('JasaKonstruksiCustom');

        JasaKonstruksiSubLink.style.visibility = 'visible';
        JasaUjiTanahLink.style.visibility = 'visible';
        pageNameKonstruksiSub.textContent = urlMappingPerkuatanTanahLongsor[cleanUrlJasaKons];
    }
  
  // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingPerkuatanTanahLongsor[cleanUrlJasaKons]) {
       const jsonLDBreadcrumb = {
           "@context": "https://schema.org",
           "@type": "BreadcrumbList",
           "itemListElement": [
	    {
	      "@type": "ListItem",
	      "position": 1,
	      "name": "Beton Jaya Readymix",
	      "item": "https://www.betonjayareadymix.com/"
	    },
               {
                   "@type": "ListItem",
                   "position": 2,
                   "name": "Jasa Konstruksi",
                   "item": "https://www.betonjayareadymix.com/p/jasa-konstruksi.html"
               },
               {
                   "@type": "ListItem",
                   "position": 3,
                   "name": "Jasa Perkuatan Tanah Longsor",
                   "item": "https://www.betonjayareadymix.com/p/jasa-perkuatan-tanah-longsor.html"
               },
	       {
                   "@type": "ListItem",
                   "position": 4,
                   "name": urlMappingPerkuatanTanahLongsor[cleanUrlJasaKons],
                   "item": cleanUrlJasaKons
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
   if (urlMappingBongkarBangunan[cleanUrlJasaKons]) {
        restoreCondition('JasaKonsSub');
	restoreCondition('JasaBongkarBangunan');
           // hapus elemen id DIV Lain
	removeCondition('ProdukInFur');
        removeCondition('MaterialKons');
	removeCondition('ProdukKons');
        //removeCondition('ProdukKonsSaluran');
        //removeCondition('ProdukKonsPembatas');
        removeCondition('JasaKonsPondasiTanah');
        removeCondition('JasaKonsJalanPerkerasan');
        removeCondition('JasaKonsPembatas');
        removeCondition('JasaKonsPerbaikan');
	removeCondition('JasaKonsFinishing');
        removeCondition('JasaKonsStruktur');
	removeCondition('JasaKons');
	removeCondition('MenuKons');
	   
       // hapus elemen id DIV Lain
	removeCondition('JasaAlatKonstruksi');
	removeCondition('SewaAlatKonstruksi');
	removeCondition('SewaAlatBerat');
	removeCondition('SewaAlatKonstruksiRingan');

		removeCondition('JasaInstalasiListrik');
	removeCondition('JasaRenovasiPerbaikan');
        removeCondition('JasaStrukturKonstruksi');
        removeCondition('JasaFinishing');
        removeCondition('JasaPondasiPerkuatan');
        removeCondition('JasaSaluranDrainase');
        removeCondition('JasaJalanPerkerasan');
	removeCondition('JasaPembatasPengaman');
	removeCondition('JasaPematanganLahan');
	removeCondition('JasaUjiTanah');
	removeCondition('JasaPerkuatanTanahLongsor');
	removeCondition('JasaPengeboran');
	    removeCondition('JasaBorTeknik');
		removeCondition('JasaBorAir');
		removeCondition('JasaBorPile');
		removeCondition('JasaCoringBeton');
		removeCondition('JasaBorBeton');
		removeCondition('JasaBorTanah');
		removeCondition('JasaBorHorizontal');
		removeCondition('JasaBorTembok');

       // removeCondition('JasaKonstruksiCustom');
        JasaKonstruksiSubLink.style.visibility = 'visible';
        JasaBongkarBangunanLink.style.visibility = 'visible';
        pageNameKonstruksiSub.textContent = urlMappingBongkarBangunan[cleanUrlJasaKons];
    }
 
  // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingBongkarBangunan[cleanUrlJasaKons]) {
       const jsonLDBreadcrumb = {
           "@context": "https://schema.org",
           "@type": "BreadcrumbList",
           "itemListElement": [
	    {
	      "@type": "ListItem",
	      "position": 1,
	      "name": "Beton Jaya Readymix",
	      "item": "https://www.betonjayareadymix.com/"
	    },
               {
                   "@type": "ListItem",
                   "position": 2,
                   "name": "Jasa Konstruksi",
                   "item": "https://www.betonjayareadymix.com/p/jasa-konstruksi.html"
               },
               {
                   "@type": "ListItem",
                   "position": 3,
                   "name": "Jasa Bongkar Bangunan",
                   "item": "https://www.betonjayareadymix.com/p/jasa-bongkar-bangunan.html"
               },
	       {
                   "@type": "ListItem",
                   "position": 4,
                   "name": urlMappingBongkarBangunan[cleanUrlJasaKons],
                   "item": cleanUrlJasaKons
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
   if (urlMappingPengeboran[cleanUrlJasaKons]) {
        restoreCondition('JasaKonsSub');
	restoreCondition('JasaPengeboran');
           // hapus elemen id DIV Lain
	removeCondition('ProdukInFur');
        removeCondition('MaterialKons');
	removeCondition('ProdukKons');
        //removeCondition('ProdukKonsSaluran');
        //removeCondition('ProdukKonsPembatas');
        removeCondition('JasaKonsPondasiTanah');
        removeCondition('JasaKonsJalanPerkerasan');
        removeCondition('JasaKonsPembatas');
        removeCondition('JasaKonsPerbaikan');
	removeCondition('JasaKonsFinishing');
        removeCondition('JasaKonsStruktur');
	removeCondition('JasaKons');
	removeCondition('MenuKons');
	   
       // hapus elemen id DIV Lain
	removeCondition('JasaAlatKonstruksi');
	removeCondition('SewaAlatKonstruksi');
	removeCondition('SewaAlatBerat');
	removeCondition('SewaAlatKonstruksiRingan');
	   
		removeCondition('JasaInstalasiListrik');
	removeCondition('JasaRenovasiPerbaikan');
        removeCondition('JasaStrukturKonstruksi');
        removeCondition('JasaFinishing');
        removeCondition('JasaPondasiPerkuatan');
        removeCondition('JasaSaluranDrainase');
        removeCondition('JasaJalanPerkerasan');
	removeCondition('JasaPembatasPengaman');
	removeCondition('JasaPematanganLahan');
	removeCondition('JasaUjiTanah');
	removeCondition('JasaPerkuatanTanahLongsor');
	removeCondition('JasaBongkarBangunan');
    //SUB JASA PENGEBORAN
	    removeCondition('JasaBorTeknik');
		removeCondition('JasaBorAir');
		removeCondition('JasaBorPile');
		removeCondition('JasaCoringBeton');
		removeCondition('JasaBorBeton');
		removeCondition('JasaBorTanah');
		removeCondition('JasaBorHorizontal');
		removeCondition('JasaBorTembok');

       // removeCondition('JasaKonstruksiCustom');
	JasaPengeboranLink.style.visibility = 'hidden';
	
        JasaKonstruksiSubLink.style.visibility = 'visible';
        JasaPengeboranLink.style.visibility = 'visible';
        pageNameKonstruksiSub.textContent = urlMappingPengeboran[cleanUrlJasaKons];
    }
   // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingPengeboran[cleanUrlJasaKons]) {
       const jsonLDBreadcrumb = {
           "@context": "https://schema.org",
           "@type": "BreadcrumbList",
           "itemListElement": [
	    {
	      "@type": "ListItem",
	      "position": 1,
	      "name": "Beton Jaya Readymix",
	      "item": "https://www.betonjayareadymix.com/"
	    },
               {
                   "@type": "ListItem",
                   "position": 2,
                   "name": "Jasa Konstruksi",
                   "item": "https://www.betonjayareadymix.com/p/jasa-konstruksi.html"
               },
               {
                   "@type": "ListItem",
                   "position": 3,
                   "name": "Jasa Pengeboran",
                   "item": "https://www.betonjayareadymix.com/p/jasa-pengeboran.html"
               },
	       {
                   "@type": "ListItem",
                   "position": 4,
                   "name": urlMappingPengeboran[cleanUrlJasaKons],
                   "item": cleanUrlJasaKons
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }

//SUB JASA PENGEBORAN
if (urlMappingJasaBorAir[cleanUrlJasaKons]) {
        restoreCondition('JasaKonsSub');
	restoreCondition('JasaPengeboran');
	
	restoreCondition('JasaBorAir');
           // hapus elemen id DIV Lain
	removeCondition('ProdukInFur');
        removeCondition('MaterialKons');
	removeCondition('ProdukKons');
        //removeCondition('ProdukKonsSaluran');
        //removeCondition('ProdukKonsPembatas');
        removeCondition('JasaKonsPondasiTanah');
        removeCondition('JasaKonsJalanPerkerasan');
        removeCondition('JasaKonsPembatas');
        removeCondition('JasaKonsPerbaikan');
	removeCondition('JasaKonsFinishing');
        removeCondition('JasaKonsStruktur');
	removeCondition('JasaKons');
	removeCondition('MenuKons');
	   
       // hapus elemen id DIV Lain
	removeCondition('JasaAlatKonstruksi');
	removeCondition('SewaAlatKonstruksi');
	removeCondition('SewaAlatBerat');
	removeCondition('SewaAlatKonstruksiRingan');
	   
	removeCondition('JasaInstalasiListrik');
	removeCondition('JasaRenovasiPerbaikan');
        removeCondition('JasaStrukturKonstruksi');
        removeCondition('JasaFinishing');
        removeCondition('JasaPondasiPerkuatan');
        removeCondition('JasaSaluranDrainase');
        removeCondition('JasaJalanPerkerasan');
	removeCondition('JasaPembatasPengaman');
	removeCondition('JasaPematanganLahan');
	removeCondition('JasaUjiTanah');
	removeCondition('JasaPerkuatanTanahLongsor');
	removeCondition('JasaBongkarBangunan');

	//SUB JASA PENGEBORAN selain JasaBorAir
		//removeCondition('JasaBorAir');
	     removeCondition('JasaBorTeknik');
		removeCondition('JasaBorPile');
		removeCondition('JasaCoringBeton');
		removeCondition('JasaBorBeton');
		removeCondition('JasaBorTanah');
		removeCondition('JasaBorHorizontal');
		removeCondition('JasaBorTembok');
       // removeCondition('JasaKonstruksiCustom');
	
        JasaKonstruksiSubLink.style.visibility = 'visible';
        JasaPengeboranLink.style.visibility = 'visible';
	     
        JasaBorAirLink.style.visibility = 'visible';
        pageNameKonstruksiSub.textContent = urlMappingJasaBorAir[cleanUrlJasaKons];
    }
   // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaBorAir[cleanUrlJasaKons]) {
       const jsonLDBreadcrumb = {
           "@context": "https://schema.org",
           "@type": "BreadcrumbList",
           "itemListElement": [
	    {
	      "@type": "ListItem",
	      "position": 1,
	      "name": "Beton Jaya Readymix",
	      "item": "https://www.betonjayareadymix.com/"
	    },
               {
                   "@type": "ListItem",
                   "position": 2,
                   "name": "Jasa Konstruksi",
                   "item": "https://www.betonjayareadymix.com/p/jasa-konstruksi.html"
               },
               {
                   "@type": "ListItem",
                   "position": 3,
                   "name": "Jasa Pengeboran",
                   "item": "https://www.betonjayareadymix.com/p/jasa-pengeboran.html"
               },
			   {
                   "@type": "ListItem",
                   "position": 4,
                   "name": "Jasa Bor Air",
                   "item": "https://www.betonjayareadymix.com/p/jasa-bor-air.html"
               },
	       {
                   "@type": "ListItem",
                   "position": 5,
                   "name": urlMappingJasaBorAir[cleanUrlJasaKons],
                   "item": cleanUrlJasaKons
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }

//JASA INSTALASI LISTRIK
if (urlMappingJasaInstalasiListrik[cleanUrlJasaKons]) {
        restoreCondition('JasaKonsSub');
	restoreCondition('JasaInstalasiListrik');
           // hapus elemen id DIV Lain
	removeCondition('ProdukInFur');
        removeCondition('MaterialKons');
	removeCondition('ProdukKons');
        //removeCondition('ProdukKonsSaluran');
        //removeCondition('ProdukKonsPembatas');
        removeCondition('JasaKonsPondasiTanah');
        removeCondition('JasaKonsJalanPerkerasan');
        removeCondition('JasaKonsPembatas');
        removeCondition('JasaKonsPerbaikan');
	removeCondition('JasaKonsFinishing');
        removeCondition('JasaKonsStruktur');
	removeCondition('JasaKons');
	removeCondition('MenuKons');
	    
       // hapus elemen id DIV Lain
	removeCondition('JasaAlatKonstruksi');
	removeCondition('SewaAlatKonstruksi');
	removeCondition('SewaAlatBerat');
	removeCondition('SewaAlatKonstruksiRingan');

	removeCondition('JasaPematanganLahan');
	removeCondition('JasaRenovasiPerbaikan');
        removeCondition('JasaStrukturKonstruksi');
        removeCondition('JasaFinishing');
        removeCondition('JasaPondasiPerkuatan');
        removeCondition('JasaSaluranDrainase');
        removeCondition('JasaJalanPerkerasan');
	removeCondition('JasaPembatasPengaman');
	removeCondition('JasaUjiTanah');
	removeCondition('JasaPerkuatanTanahLongsor');
	removeCondition('JasaBongkarBangunan');
	removeCondition('JasaPengeboran');
		 removeCondition('JasaBorTeknik');
		removeCondition('JasaBorAir');
		removeCondition('JasaBorPile');
		removeCondition('JasaCoringBeton');
		removeCondition('JasaBorBeton');
		removeCondition('JasaBorTanah');
		removeCondition('JasaBorHorizontal');
		removeCondition('JasaBorTembok');

       // removeCondition('JasaKonstruksiCustom');

        JasaKonstruksiSubLink.style.visibility = 'visible';
        JasaInstalasiListrikLink.style.visibility = 'visible';
        pageNameKonstruksiSub.textContent = urlMappingJasaInstalasiListrik[cleanUrlJasaKons];
    }

  // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaInstalasiListrik[cleanUrlJasaKons]) {
       const jsonLDBreadcrumb = {
           "@context": "https://schema.org",
           "@type": "BreadcrumbList",
           "itemListElement": [
	    {
	      "@type": "ListItem",
	      "position": 1,
	      "name": "Beton Jaya Readymix",
	      "item": "https://www.betonjayareadymix.com/"
	    },
               {
                   "@type": "ListItem",
                   "position": 2,
                   "name": "Jasa Konstruksi",
                   "item": "https://www.betonjayareadymix.com/p/jasa-konstruksi.html"
               },
               {
                   "@type": "ListItem",
                   "position": 3,
                   "name": "Jasa Instalasi Listrik",
                   "item": "https://www.betonjayareadymix.com/p/jasa-instalasi-listrik.html"
               },
	       {
                   "@type": "ListItem",
                   "position": 4,
                   "name": urlMappingJasaInstalasiListrik[cleanUrlJasaKons],
                   "item": cleanUrlJasaKons
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
/*
    if (urlMappingCustom[cleanUrlJasaKons]) {
        restoreCondition('JasaKonsSub');
	restoreCondition('JasaKonstruksiCustom');
           // hapus elemen id DIV Lain
        removeCondition('MaterialKons');
        //removeCondition('ProdukKonsSaluran');
        //removeCondition('ProdukKonsPembatas');
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
