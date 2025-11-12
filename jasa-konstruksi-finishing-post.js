 // Cek URL saat ini dan sesuaikan dengan kondisi yang diinginkan
//SUB FinishingBangunanStruktur
const urlMappingJasaFinishingDakBeton = {
  "https://www.betonjayareadymix.com/2018/10/finishing-dak.html": "Finishing Dak",
  "https://www.betonjayareadymix.com/2018/10/harga-jasa-finishing-dak-beton.html": "Harga Jasa Finishing Dak Beton",
  "https://www.betonjayareadymix.com/2018/10/finishing-dak-beton.html": "Finishing Dak Beton",
  "https://www.betonjayareadymix.com/2018/10/harga-jasa-dak-super-flat.html": "Harga Jasa Dak Super Flat",
  "https://www.betonjayareadymix.com/2018/10/dak-super-flat.html": "Dak Super Flat"
};

const urlMappingJasaFinishingBetonExpose = {
  "https://www.betonjayareadymix.com/2018/10/harga-jasa-beton-ekspos.html": "Harga Jasa Beton Ekspos",
  "https://www.betonjayareadymix.com/2018/10/finishing-beton-ekspos.html": "Finishing Beton Ekspos",
  "https://www.betonjayareadymix.com/2018/10/harga-jasa-finishing-beton-ekspos.html": "Harga Jasa Finishing Beton Ekspos"

};
const urlMappingJasaPlesteranAcianDinding = {
"https://www.betonjayareadymix.com/2018/09/harga-borongan-tenaga-plesteran-dan-acian-per-meter.html": "Harga Borongan Tenaga Plesteran dan Acian per Meter",
"https://www.betonjayareadymix.com/2018/11/harga-borongan-tenaga-plesteran-dan-acian-per-meter-jakarta.html": "Harga Borongan Tenaga Plesteran dan Acian per Meter Jakarta",
  "https://www.betonjayareadymix.com/2018/11/harga-borongan-tenaga-plesteran-dan-acian-per-meter-bandung.html": "Harga Borongan Tenaga Plesteran dan Acian per Meter Bandung",
  "https://www.betonjayareadymix.com/2018/11/harga-borongan-tenaga-plesteran-dan-acian-per-meter-cianjur.html": "Harga Borongan Tenaga Plesteran dan Acian per Meter Cianjur",
  "https://www.betonjayareadymix.com/2018/11/harga-borongan-tenaga-plesteran-dan-acian-per-meter-bogor.html": "Harga Borongan Tenaga Plesteran dan Acian per Meter Bogor",
  "https://www.betonjayareadymix.com/2018/11/harga-borongan-tenaga-plesteran-dan-acian-per-meter-gunung-putri.html": "Harga Borongan Tenaga Plesteran dan Acian per Meter Gunung Putri",
  "https://www.betonjayareadymix.com/2018/11/harga-borongan-tenaga-plesteran-dan-acian-per-meter-bojong-gede.html": "Harga Borongan Tenaga Plesteran dan Acian per Meter Bojong Gede",
  "https://www.betonjayareadymix.com/2018/11/harga-borongan-tenaga-plesteran-dan-acian-per-meter-bekasi.html": "Harga Borongan Tenaga Plesteran dan Acian per Meter Bekasi",
  "https://www.betonjayareadymix.com/2018/11/harga-borongan-tenaga-plesteran-dan-acian-per-meter-cibinong.html": "Harga Borongan Tenaga Plesteran dan Acian per Meter Cibinong",
  "https://www.betonjayareadymix.com/2018/11/harga-borongan-tenaga-plesteran-dan-acian-per-meter-telukjambe-timur.html": "Harga Borongan Tenaga Plesteran dan Acian per Meter Telukjambe Timur",
  "https://www.betonjayareadymix.com/2018/11/harga-borongan-tenaga-plesteran-dan-acian-per-meter-cimenyan.html": "Harga Borongan Tenaga Plesteran dan Acian per Meter Cimenyan",
  "https://www.betonjayareadymix.com/2018/11/harga-borongan-tenaga-plesteran-dan-acian-per-meter-depok.html": "Harga Borongan Tenaga Plesteran dan Acian per Meter Depok",
  "https://www.betonjayareadymix.com/2018/11/harga-borongan-tenaga-plesteran-dan-acian-per-meter-cikampek.html": "Harga Borongan Tenaga Plesteran dan Acian per Meter Cikampek",
  "https://www.betonjayareadymix.com/2018/11/harga-borongan-tenaga-plesteran-dan-acian-per-meter-cimahi.html": "Harga Borongan Tenaga Plesteran dan Acian per Meter Cimahi",
  "https://www.betonjayareadymix.com/2018/11/harga-borongan-tenaga-plesteran-dan-acian-per-meter-kemang.html": "Harga Borongan Tenaga Plesteran dan Acian per Meter Kemang",
  "https://www.betonjayareadymix.com/2018/11/harga-borongan-tenaga-plesteran-dan-acian-per-meter-citeureup.html": "Harga Borongan Tenaga Plesteran dan Acian per Meter Citeureup",
  "https://www.betonjayareadymix.com/2018/11/harga-borongan-tenaga-plesteran-dan-acian-per-meter-ngamprah.html": "Harga Borongan Tenaga Plesteran dan Acian per Meter Ngamprah",
  "https://www.betonjayareadymix.com/2018/11/harga-borongan-tenaga-plesteran-dan-acian-per-meter-kota-bekasi.html": "Harga Borongan Tenaga Plesteran dan Acian per Meter Kota Bekasi",
  "https://www.betonjayareadymix.com/2018/11/harga-borongan-tenaga-plesteran-dan-acian-per-meter-parung-panjang.html": "Harga Borongan Tenaga Plesteran dan Acian per Meter Parung Panjang",
  "https://www.betonjayareadymix.com/2018/11/harga-borongan-tenaga-plesteran-dan-acian-per-meter-cileungsi.html": "Harga Borongan Tenaga Plesteran dan Acian per Meter Cileungsi",
  "https://www.betonjayareadymix.com/2018/11/harga-borongan-tenaga-plesteran-dan-acian-per-meter-sukaraja.html": "Harga Borongan Tenaga Plesteran dan Acian per Meter Sukaraja",
  "https://www.betonjayareadymix.com/2018/11/harga-borongan-tenaga-plesteran-dan-acian-per-meter-tajur-halang.html": "Harga Borongan Tenaga Plesteran dan Acian per Meter Tajur Halang",
  "https://www.betonjayareadymix.com/2018/11/harga-borongan-tenaga-plesteran-dan-acian-per-meter-gunung-sindur.html": "Harga Borongan Tenaga Plesteran dan Acian per Meter Gunung Sindur"

};
const urlMappingJasaFinishingGroutingStrukturBeton = {
	
};
const urlMappingJasaPelapisanCoatingStruktur = {
	
};
const urlMappingJasaFinishingKolomBalok = {
	
};
const urlMappingJasaPelapisanWaterproofingStruktur = {
	
};
const urlMappingJasaFinishingLantaiBeton = {
  "https://www.betonjayareadymix.com/2018/12/harga-jasa-trowel-floor-hardener-depok.html": "Harga Jasa Trowel Floor Hardener Depok",
  "https://www.betonjayareadymix.com/2018/10/harga-jasa-floor-hardener.html": "Harga Jasa Floor Hardener",
  "https://www.betonjayareadymix.com/2018/10/harga-borongan-floor-hardener.html": "Harga Borongan Floor Hardener",
	
"https://www.betonjayareadymix.com/2018/10/harga-jasa-lapangan-super-flat.html": "Harga Jasa Lapangan Super Flat",
    "https://www.betonjayareadymix.com/2018/10/lapangan-super-flat.html": "Lapangan Super Flat",
    "https://www.betonjayareadymix.com/2018/10/harga-jasa-lantai-epoxy.html": "Harga Jasa Lantai Epoxy",
    "https://www.betonjayareadymix.com/2018/10/harga-jasa-lantai-super-flat.html": "Harga Jasa Lantai Super Flat",
    "https://www.betonjayareadymix.com/2018/10/harga-jasa-screeding.html": "Harga Jasa Screeding",
    "https://www.betonjayareadymix.com/2018/10/jasa-screeding.html": "Jasa Screeding",
    "https://www.betonjayareadymix.com/2018/10/harga-jasa-trowel-lantai.html": "Harga Jasa Trowel Lantai",
    "https://www.betonjayareadymix.com/2018/10/harga-jasa-trowel-floor-hardener.html": "Harga Jasa Trowel Floor Hardener",
    "https://www.betonjayareadymix.com/2018/10/harga-jasa-trowel-beton.html": "Harga Jasa Trowel Beton",
    "https://www.betonjayareadymix.com/2018/10/harga-jasa-trowel.html": "Harga Jasa Trowel",
    "https://www.betonjayareadymix.com/2018/10/jasa-trowel.html": "Jasa Trowel",
    "https://www.betonjayareadymix.com/2018/10/harga-jasa-finishing-screeding.html": "Harga Jasa Finishing Screeding",
    "https://www.betonjayareadymix.com/2018/10/finishing-screeding.html": "Finishing Screeding",
    "https://www.betonjayareadymix.com/2018/10/harga-jasa-finishing-trowel.html": "Harga Jasa Finishing Trowel",
    "https://www.betonjayareadymix.com/2018/10/finising-trowel.html": "Finishing Trowel",
    "https://www.betonjayareadymix.com/2018/10/harga-jasa-finishing-epoxy.html": "Harga Jasa Finishing Epoxy",
    "https://www.betonjayareadymix.com/2018/10/finishing-epoxy.html": "Finishing Epoxy",
    "https://www.betonjayareadymix.com/2018/10/harga-jasa-epoxy.html": "Harga Jasa Epoxy",
    "https://www.betonjayareadymix.com/2018/10/harga-jasa-epoxy-lantai.html": "Harga Jasa Epoxy Lantai",
    //"https://www.betonjayareadymix.com/2018/10/jasa-epoxy.html": "Jasa Epoxy",
    "https://www.betonjayareadymix.com/2018/10/harga-jasa-finishing-lantai-gudang.html": "Harga Jasa Finishing Lantai Gudang",
    "https://www.betonjayareadymix.com/2018/10/harga-jasa-finishing-lantai-beton-ekspos.html": "Harga Jasa Finishing Lantai Beton Ekspos",
    "https://www.betonjayareadymix.com/2018/10/finishing-lantai-beton-ekspos.html": "Finishing Lantai Beton Ekspos",
    "https://www.betonjayareadymix.com/2018/10/harga-jasa-finishing-lantai-beton.html": "Harga Jasa Finishing Lantai Beton",
    "https://www.betonjayareadymix.com/2018/10/finishing-lantai.html": "Finishing Lantai",
 "https://www.betonjayareadymix.com/2018/09/borongan-lantai.html": "Borongan Lantai",

"https://www.betonjayareadymix.com/2018/10/jasa-trowel-lantai-beton.html": "Jasa Trowel Lantai Beton",
"https://www.betonjayareadymix.com/2018/12/harga-jasa-trowel-lantai-beton-depok.html": "Harga Jasa Trowel Lantai Beton Depok",
    "https://www.betonjayareadymix.com/2018/12/harga-jasa-trowel-lantai-beton-tangerang.html": "Harga Jasa Trowel Lantai Beton Tangerang",
    "https://www.betonjayareadymix.com/2018/12/harga-jasa-trowel-lantai-beton-jakarta.html": "Harga Jasa Trowel Lantai Beton Jakarta",
    "https://www.betonjayareadymix.com/2018/12/harga-jasa-trowel-lantai-beton-bekasi.html": "Harga Jasa Trowel Lantai Beton Bekasi",
    "https://www.betonjayareadymix.com/2018/12/harga-jasa-trowel-lantai-beton-bogor.html": "Harga Jasa Trowel Lantai Beton Bogor",
    "https://www.betonjayareadymix.com/2018/12/harga-jasa-trowel-bogor.html": "Harga Jasa Trowel Bogor",
    "https://www.betonjayareadymix.com/2018/12/harga-jasa-trowel-tangerang.html": "Harga Jasa Trowel Tangerang",
    "https://www.betonjayareadymix.com/2018/12/harga-jasa-trowel-jakarta.html": "Harga Jasa Trowel Jakarta",
    "https://www.betonjayareadymix.com/2018/12/harga-jasa-trowel-bekasi.html": "Harga Jasa Trowel Bekasi",
    "https://www.betonjayareadymix.com/2018/12/harga-jasa-trowel-depok.html": "Harga Jasa Trowel Depok",
    "https://www.betonjayareadymix.com/2018/12/harga-jasa-trowel-floor-hardener-tangerang.html": "Harga Jasa Trowel Floor Hardener Tangerang",
    "https://www.betonjayareadymix.com/2018/12/harga-jasa-trowel-floor-hardener-bogor.html": "Harga Jasa Trowel Floor Hardener Bogor",
    "https://www.betonjayareadymix.com/2018/12/harga-jasa-trowel-floor-hardener-bekasi.html": "Harga Jasa Trowel Floor Hardener Bekasi",
    "https://www.betonjayareadymix.com/2018/12/harga-jasa-trowel-floor-hardener-jakarta.html": "Harga Jasa Trowel Floor Hardener Jakarta",
    "https://www.betonjayareadymix.com/2018/12/harga-jasa-trowel-floor-hardener-tasikmalaya.html": "Harga Jasa Trowel Floor Hardener Tasikmalaya",
    "https://www.betonjayareadymix.com/2018/12/harga-jasa-trowel-floor-hardener-garut.html": "Harga Jasa Trowel Floor Hardener Garut",
    "https://www.betonjayareadymix.com/2018/12/harga-jasa-trowel-floor-hardener-bandung.html": "Harga Jasa Trowel Floor Hardener Bandung",
    "https://www.betonjayareadymix.com/2018/12/harga-jasa-floor-hardener-garut.html": "Harga Jasa Floor Hardener Garut",
    "https://www.betonjayareadymix.com/2018/12/harga-jasa-floor-hardener-tasikmalaya.html": "Harga Jasa Floor Hardener Tasikmalaya",
    "https://www.betonjayareadymix.com/2018/12/harga-jasa-floor-hardener-bandung.html": "Harga Jasa Floor Hardener Bandung",
    "https://www.betonjayareadymix.com/2018/12/harga-jasa-floor-hardener-depok.html": "Harga Jasa Floor Hardener Depok",
    "https://www.betonjayareadymix.com/2018/12/harga-jasa-floor-hardener-tangerang.html": "Harga Jasa Floor Hardener Tangerang",
    "https://www.betonjayareadymix.com/2018/12/harga-jasa-floor-hardener-bekasi.html": "Harga Jasa Floor Hardener Bekasi",
    "https://www.betonjayareadymix.com/2018/12/harga-jasa-floor-hardener-bogor.html": "Harga Jasa Floor Hardener Bogor",
    "https://www.betonjayareadymix.com/2018/12/harga-jasa-floor-hardener-jakarta.html": "Harga Jasa Floor Hardener Jakarta",
    "https://www.betonjayareadymix.com/2018/10/biaya-floor-lantai.html": "Biaya Floor Lantai",
    "https://www.betonjayareadymix.com/2018/10/harga-borongan-floor-lantai.html": "Harga Borongan Floor Lantai",

   
};

const urlMappingJasaEpoxyDinding = {
  "https://www.betonjayareadymix.com/2018/10/harga-jasa-epoxy-dinding.html": "Harga Jasa Epoxy Dinding"
};

const urlMappingJasaPelindungRetakStruktur = {
	
};
//AKHIR SUB FinishingBangunanStruktur

/*
const urlMappingFinishingBangunanInterior = {
"https://www.betonjayareadymix.com/p/jasa-interior-dan-furniture-custom.html": "Jasa Interior dan Furniture Custome",
"https://www.betonjayareadymix.com/p/jasa-ganti-keramik-lantai.html": "Jasa Ganti Keramik Lantai",
  "https://www.betonjayareadymix.com/p/jasa-cat-interior-rumah.html": "Jasa Cat Interior Rumah",
  "https://www.betonjayareadymix.com/p/jasa-pasang-wallpaper-dinding.html": "Jasa Pasang Wallpaper Dinding",
  "https://www.betonjayareadymix.com/p/jasa-pasang-lantai-vinyl.html": "Jasa Pasang Lantai Vinyl",
  "https://www.betonjayareadymix.com/p/jasa-pasang-plafon-gypsum.html": "Jasa Pasang Plafon Gypsum",
  "https://www.betonjayareadymix.com/p/jasa-ganti-lampu-interior.html": "Jasa Ganti Lampu Interior",
  "https://www.betonjayareadymix.com/p/jasa-ganti-kitchen-set.html": "Jasa Ganti Kitchen Set",
  "https://www.betonjayareadymix.com/p/jasa-finishing-interior-minimalis.html": "Jasa Finishing Interior Minimalis",
  "https://www.betonjayareadymix.com/p/jasa-finishing-interior-klasik.html": "Jasa Finishing Interior Klasik",
  "https://www.betonjayareadymix.com/p/jasa-finishing-interior-modern.html": "Jasa Finishing Interior Modern"
};
*/

//SUB JasaFinishingBangunanInteriorPost

const urlMappingJasaInteriorFurnitureCustome = {
   "https://www.betonjayareadymix.com/2018/11/jasa-interior-furniture-tangerang.html": "Jasa Interior Furniture Tangerang",
  "https://www.betonjayareadymix.com/2018/11/jasa-interior-furniture-jakarta.html": "Jasa Interior Furniture Jakarta",
  "https://www.betonjayareadymix.com/2018/11/jasa-interior-furniture-bekasi.html": "Jasa Interior Furniture Bekasi",
  "https://www.betonjayareadymix.com/2018/11/jasa-interior-furniture-depok.html": "Jasa Interior Furniture Depok",
  "https://www.betonjayareadymix.com/2018/11/jasa-interior-furniture-bogor.html": "Jasa Interior Furniture Bogor",

  "https://www.betonjayareadymix.com/2018/09/jasa-pembuatan-kamar-set.html": "Jasa Pembuatan Kamar Set",
 "https://www.betonjayareadymix.com/2018/09/harga-interior-kamar-tidur.html": "Harga Interior Kamar Tidur",
  "https://www.betonjayareadymix.com/2018/09/harga-interior-kamar.html": "Harga Interior Kamar",
  "https://www.betonjayareadymix.com/2018/09/harga-interior-ruang-tamu.html": "Harga Interior Ruang Tamu",
  "https://www.betonjayareadymix.com/2018/09/harga-interior-per-meter.html": "Harga Interior Per Meter",
  "https://www.betonjayareadymix.com/2018/09/harga-borongan-interior.html": "Harga Borongan Interior",
  "https://www.betonjayareadymix.com/2018/09/harga-interior-kamar-tidur-minimalis.html": "Harga Interior Kamar Tidur Minimalis",
  
  "https://www.betonjayareadymix.com/2018/11/jasa-pembuatan-furniture-bekasi.html": "Jasa Pembuatan Furniture Bekasi",
  "https://www.betonjayareadymix.com/2018/11/jasa-pembuatan-furniture-depok.html": "Jasa Pembuatan Furniture Depok",
  "https://www.betonjayareadymix.com/2018/11/jasa-pembuatan-furniture-bogor.html": "Jasa Pembuatan Furniture Bogor",
  "https://www.betonjayareadymix.com/2018/11/jasa-pembuatan-furniture-jakarta.html": "Jasa Pembuatan Furniture Jakarta",
  "https://www.betonjayareadymix.com/2018/11/jasa-pembuatan-furniture-tangerang.html": "Jasa Pembuatan Furniture Tangerang",

  
  "https://www.betonjayareadymix.com/2018/11/jasa-custom-furniture-jakarta.html": "Jasa Custom Furniture Jakarta",
  "https://www.betonjayareadymix.com/2018/11/jasa-custom-furniture-bekasi.html": "Jasa Custom Furniture Bekasi",
  "https://www.betonjayareadymix.com/2018/11/jasa-custom-furniture-tangerang.html": "Jasa Custom Furniture Tangerang",
  "https://www.betonjayareadymix.com/2018/11/jasa-custom-furniture-depok.html": "Jasa Custom Furniture Depok",
  "https://www.betonjayareadymix.com/2018/11/jasa-custom-furniture-bogor.html": "Jasa Custom Furniture Bogor",
	 
  "https://www.betonjayareadymix.com/2018/09/jasa-furniture-interior-exterior.html": "Jasa Furniture Interior Exterior",
  "https://www.betonjayareadymix.com/2018/09/jasa-furniture-custom.html": "Jasa Furniture Custom",

  "https://www.betonjayareadymix.com/2018/09/jasa-pembuatan-furniture-custom.html": "Jasa Pembuatan Furniture Custom",
  "https://www.betonjayareadymix.com/2018/09/harga-custom-furniture-per-meter.html": "Harga Custom Furniture Per Meter" 
};

const urlMappingJasaFinishingInteriorModern = {
  "https://www.betonjayareadymix.com/2020/02/jasa-pasang-plafon-wpc-premium.html": "Jasa Pasang Plafon WPC Premium",
  "https://www.betonjayareadymix.com/2020/02/harga-jasa-pasang-plafon-wpc.html": "Harga Jasa Pasang Plafon WPC",
  "https://www.betonjayareadymix.com/2020/02/jasa-pasang-plafon-wpc.html": "Jasa Pasang Plafon WPC",
	
 "https://www.betonjayareadymix.com/2020/02/harga-jasa-pasang-wpc-lantai.html": "Harga Jasa Pasang WPC Lantai",
  "https://www.betonjayareadymix.com/2020/02/jasa-pasang-wpc-panel-dinding.html": "Jasa Pasang WPC Panel Dinding",
     "https://www.betonjayareadymix.com/2020/02/harga-jasa-pasang-wpc-dinding.html": "Harga Jasa Pasang WPC Dinding",
  "https://www.betonjayareadymix.com/2020/02/harga-jasa-pasang-wall-panel-wpc.html": "Harga Jasa Pasang Wall Panel WPC",
  "https://www.betonjayareadymix.com/2020/02/jasa-pasang-wall-panel-wpc-terdekat.html": "Jasa Pasang Wall Panel WPC Terdekat",
  "https://www.betonjayareadymix.com/2020/02/jasa-pasang-wpc-dinding-per-meter.html": "Jasa Pasang WPC Dinding Per Meter",
  "https://www.betonjayareadymix.com/2020/02/jasa-pasang-wpc-wall-panel-bogor.html": "Jasa Pasang WPC Wall Panel Bogor",
  "https://www.betonjayareadymix.com/2020/02/jasa-pasang-wpc-wall-panel-bekasi.html": "Jasa Pasang WPC Wall Panel Bekasi",
  "https://www.betonjayareadymix.com/2020/02/jasa-pasang-wpc-wall-panel-jakarta.html": "Jasa Pasang WPC Wall Panel Jakarta",
  "https://www.betonjayareadymix.com/2020/02/jasa-pasang-wpc-wall-panel-tangerang.html": "Jasa Pasang WPC Wall Panel Tangerang",
  "https://www.betonjayareadymix.com/2020/02/jasa-pasang-wpc-wall-panel-depok.html": "Jasa Pasang WPC Wall Panel Depok",
  "https://www.betonjayareadymix.com/2020/02/jasa-pasang-wpc-wall-panel-karawang.html": "Jasa Pasang WPC Wall Panel Karawang"
};
const urlMappingFinishingInteriorKitchenSet = {
  "https://www.betonjayareadymix.com/2018/09/kabinet-dapur.html": "Kabinet Dapur",
  "https://www.betonjayareadymix.com/2018/09/harga-kitchen-set-interior.html": "Harga Kitchen Set Interior",
  "https://www.betonjayareadymix.com/2018/09/harga-jasa-pembuatan-kitchen-set.html": "Harga Jasa Pembuatan Kitchen Set",
	
"https://www.betonjayareadymix.com/2018/09/harga-borongan-tenaga-bikin-kitchen-set.html": "Harga Borongan Tenaga Bikin Kitchen Set",
"https://www.betonjayareadymix.com/2018/09/harga-jasa-desain-kitchen-set.html": "Harga Jasa Desain Kitchen Set",
"https://www.betonjayareadymix.com/2018/09/harga-kitchen-set-per-meter-kayu-jati.html": "Harga Kitchen Set Per Meter Kayu Jati",
"https://www.betonjayareadymix.com/2018/09/harga-jasa-pembuatan-kitchen-set-per-meter.html": "Harga Jasa Pembuatan Kitchen Set Per Meter",
"https://www.betonjayareadymix.com/2018/09/jasa-kitchen-set-murah.html": "Jasa Kitchen Set Murah",
"https://www.betonjayareadymix.com/2018/09/jasa-kitchen-set-terdekat.html": "Jasa Kitchen Set Terdekat"
};

//AKHIR SUB JasaFinishingBangunanInteriorPost
/*
const urlMappingFinishingBangunanEksterior = {

"https://www.betonjayareadymix.com/p/jasa-cat-eksterior-rumah.html": "Jasa Cat Eksterior Rumah",
  "https://www.betonjayareadymix.com/p/jasa-finishing-fasad-eksterior.html": "Jasa Finishing Fasad Eksterior",
  "https://www.betonjayareadymix.com/p/jasa-pelapisan-anti-cuaca.html": "Jasa Pelapisan Anti Cuaca",
  "https://www.betonjayareadymix.com/p/jasa-pelapisan-dinding-luar.html": "Jasa Pelapisan Dinding Luar",
  "https://www.betonjayareadymix.com/p/jasa-finishing-taman-rumah.html": "Jasa Finishing Taman Rumah",
  "https://www.betonjayareadymix.com/p/jasa-finishing-kanopi-teras.html": "Jasa Finishing Kanopi Teras",
  "https://www.betonjayareadymix.com/p/jasa-pelapisan-batu-alam-eksterior.html": "Jasa Pelapisan Batu Alam Eksterior",
  "https://www.betonjayareadymix.com/p/jasa-pelapisan-genteng-dak.html": "Jasa Pelapisan Genteng Dak"

};
*/
//SUB JasaFinishingBangunanEksteriorPost
const urlMappingJasaCatEksteriorRumah = {
  
};
const urlMappingJasaFinishingFasadEksterior = {
  "https://www.betonjayareadymix.com/2018/09/harga-jasa-profil-beton.html": "Harga Jasa Profil Beton",
  "https://www.betonjayareadymix.com/2018/09/harga-jasa-profil-bangunan.html": "Harga Jasa Profil Bangunan",
  "https://www.betonjayareadymix.com/2018/09/harga-jasa-profil-rumah.html": "Harga Jasa Profil Rumah",
	
  "https://www.betonjayareadymix.com/2020/01/harga-jasa-pasang-acp.html": "Harga Jasa Pasang ACP",
  "https://www.betonjayareadymix.com/2020/01/harga-jasa-pasang-acp-per-meter.html": "Harga Jasa Pasang ACP Per Meter",
  "https://www.betonjayareadymix.com/2020/01/harga-jasa-laser-cutting-acp.html": "Harga Jasa Laser Cutting ACP",
  "https://www.betonjayareadymix.com/2020/01/jasa-laser-cutting-acp.html": "Jasa Laser Cutting ACP",
    "https://www.betonjayareadymix.com/2020/01/jasa-pasang-acp.html": "Jasa Pasang ACP",
  "https://www.betonjayareadymix.com/2020/01/jasa-pasang-acp-per-meter.html": "Jasa Pasang ACP per Meter",
  "https://www.betonjayareadymix.com/2020/01/jasa-pasang-acp-jakarta.html": "Jasa Pasang ACP Jakarta",
    "https://www.betonjayareadymix.com/2020/01/jasa-pasang-acp-bogor.html": "Jasa Pasang ACP Bogor",
  "https://www.betonjayareadymix.com/2020/01/jasa-pasang-acp-depok.html": "Jasa Pasang ACP Depok",
  "https://www.betonjayareadymix.com/2020/01/jasa-pasang-acp-tangerang.html": "Jasa Pasang ACP Tangerang",
  "https://www.betonjayareadymix.com/2020/01/jasa-pasang-acp-bekasi.html": "Jasa Pasang ACP Bekasi",
    "https://www.betonjayareadymix.com/2020/01/harga-jasa-pasang-acp-jakarta.html": "Harga Jasa Pasang ACP Jakarta",
  "https://www.betonjayareadymix.com/2020/01/harga-jasa-pasang-acp-bogor.html": "Harga Jasa Pasang ACP Bogor",
  "https://www.betonjayareadymix.com/2020/01/harga-jasa-pasang-acp-depok.html": "Harga Jasa Pasang ACP Depok",
  "https://www.betonjayareadymix.com/2020/01/harga-jasa-pasang-acp-tangerang.html": "Harga Jasa Pasang ACP Tangerang",
  "https://www.betonjayareadymix.com/2020/01/harga-jasa-pasang-acp-bekasi.html": "Harga Jasa Pasang ACP Bekasi",

  "https://www.betonjayareadymix.com/2020/01/jasa-pasang-acp-per-meter-jakarta.html": "Jasa Pasang ACP per Meter Jakarta",
  "https://www.betonjayareadymix.com/2020/01/jasa-pasang-acp-per-meter-bogor.html": "Jasa Pasang ACP per Meter Bogor",
  "https://www.betonjayareadymix.com/2020/01/jasa-pasang-acp-per-meter-depok.html": "Jasa Pasang ACP per Meter Depok",
  "https://www.betonjayareadymix.com/2020/01/jasa-pasang-acp-per-meter-tangerang.html": "Jasa Pasang ACP per Meter Tangerang",
  "https://www.betonjayareadymix.com/2020/01/jasa-pasang-acp-per-meter-bekasi.html": "Jasa Pasang ACP per Meter Bekasi",
	
"https://www.betonjayareadymix.com/2018/09/jasa-relief-dinding.html": "Jasa Relief Dinding",
"https://www.betonjayareadymix.com/2018/09/jasa-pembuatan-relief-dinding.html": "Jasa Pembuatan Relief Dinding"

};
const urlMappingJasaPelapisanAntiCuaca = {
  
};
const urlMappingJasaPelapisanDindingLuar = {
  
};
const urlMappingJasaFinishingTamanRumah = {
  "https://www.betonjayareadymix.com/2018/09/jasa-relief-taman.html": "Jasa Relief Taman",
  "https://www.betonjayareadymix.com/2018/09/jasa-tukang-taman.html": "Jasa Tukang Taman",
  "https://www.betonjayareadymix.com/2018/09/jasa-taman-terdekat.html": "Jasa Taman Terdekat",
  "https://www.betonjayareadymix.com/2018/09/jasa-taman-murah.html": "Jasa Taman Murah",
  "https://www.betonjayareadymix.com/2018/09/jasa-pembuatan-taman.html": "Jasa Pembuatan Taman",
  "https://www.betonjayareadymix.com/2018/09/jasa-taman.html": "Jasa Taman",
  "https://www.betonjayareadymix.com/2018/09/jasa-pembuatan-taman-terdekat.html": "Jasa Pembuatan Taman Terdekat",
  "https://www.betonjayareadymix.com/2018/09/jasa-pembuatan-taman-rumah.html": "Jasa Pembuatan Taman Rumah"

};
const urlMappingJasaFinishingKanopiTeras = {
  
};
const urlMappingJasaPelapisanBatuAlamEksterior = {
  
};
const urlMappingJasaPelapisanGentengDak = {
  
};


//AKHIR SUB JasaFinishingBangunanEksteriorPost

/*
const urlMappingFinishingInfrastruktur = {

  "https://www.betonjayareadymix.com/p/jasa-finishing-jalan-jembatan.html": "Jasa Finishing Jalan Jembatan",
  "https://www.betonjayareadymix.com/p/jasa-finishing-trotoar-area-publik.html": "Jasa Finishing Trotoar Area Publik",
  "https://www.betonjayareadymix.com/p/jasa-finishing-saluran-drainase.html": "Jasa Finishing Saluran Drainase",
  "https://www.betonjayareadymix.com/p/jasa-finishing-struktur-utilitas.html": "Jasa Finishing Struktur Utilitas",
  "https://www.betonjayareadymix.com/p/jasa-finishing-proteksi-beton.html": "Jasa Finishing Proteksi Beton"

};

const urlMappingFinishingInfrastrukturJalan = {

 "https://www.betonjayareadymix.com/p/jasa-finishing-jembatan-beton.html": "Jasa Finishing Jembatan Beton",
  "https://www.betonjayareadymix.com/p/jasa-finishing-jalan-beton.html": "Jasa Finishing Jalan Beton",
  "https://www.betonjayareadymix.com/p/jasa-pengecatan-marking-jalan.html": "Jasa Pengecatan Marking Jalan",
  "https://www.betonjayareadymix.com/p/jasa-pelapisan-jalan-tol.html": "Jasa Pelapisan Jalan Tol",
  "https://www.betonjayareadymix.com/p/jasa-coating-jembatan.html": "Jasa Coating Jembatan"
};

const urlMappingFinishingInfrastrukturTrotoar = {
 "https://www.betonjayareadymix.com/p/jasa-finishing-trotoar.html": "Jasa Finishing Trotoar",
  "https://www.betonjayareadymix.com/p/jasa-penataan-trotoar-beton.html": "Jasa Penataan Trotoar Beton",
  "https://www.betonjayareadymix.com/p/jasa-epoxy-area-publik.html": "Jasa Epoxy Area Publik",
  "https://www.betonjayareadymix.com/p/jasa-pelapisan-area-pejalan-kaki.html": "Jasa Pelapisan Area Pejalan Kaki"
};

const urlMappingFinishingInfrastrukturSaluran = {
  "https://www.betonjayareadymix.com/p/jasa-coating-gorong-gorong.html": "Jasa Coating Gorong Gorong",
  "https://www.betonjayareadymix.com/p/jasa-pelapisan-saluran-beton.html": "Jasa Pelapisan Saluran Beton",
  "https://www.betonjayareadymix.com/p/jasa-waterproofing-saluran-air.html": "Jasa Waterproofing Saluran Air",
  "https://www.betonjayareadymix.com/p/jasa-finishing-penutup-saluran.html": "Jasa Finishing Penutup Saluran"

};

const urlMappingFinishingInfrastrukturStruktur = {
 "https://www.betonjayareadymix.com/p/jasa-finishing-rumah-pompa.html": "Jasa Finishing Rumah Pompa",
  "https://www.betonjayareadymix.com/p/jasa-pelapisan-box-utilitas.html": "Jasa Pelapisan Box Utilitas",
  "https://www.betonjayareadymix.com/p/jasa-epoxy-struktur-publik.html": "Jasa Epoxy Struktur Publik",
  "https://www.betonjayareadymix.com/p/jasa-finishing-penutup-kabel-beton.html": "Jasa Finishing Penutup Kabel Beton"

};

const urlMappingFinishingInfrastrukturProteksi = {
 "https://www.betonjayareadymix.com/p/jasa-pelapisan-anti-karat-beton.html": "Jasa Pelapisan Anti Karat Beton",
  "https://www.betonjayareadymix.com/p/jasa-epoxy-beton-luar-ruang.html": "Jasa Epoxy Beton Luar Ruang",
  "https://www.betonjayareadymix.com/p/jasa-proteksi-struktur-beton-luar.html": "Jasa Proteksi Struktur Beton Luar",
  "https://www.betonjayareadymix.com/p/jasa-finishing-khusus-cuaca-ekstrem.html": "Jasa Finishing Khusus Cuaca Ekstrem"

};
*/

// Menyimpan elemen yang dihapus dalam variabel
let removedElementsJasaKonsFinishingPost = {};
// Fungsi untuk menghapus elemen berdasarkan ID
function removeCondition(conditionId) {
    const conditionElement = document.getElementById(conditionId);

    if (conditionElement) {
        // Menyimpan elemen yang dihapus dalam objek untuk bisa dikembalikan
        removedElementsJasaKonsFinishingPost[conditionId] = conditionElement;
        conditionElement.remove(); // Menghapus elemen tersebut
    }
}

// Fungsi untuk mengembalikan elemen yang telah dihapus
function restoreCondition(conditionId) {
    const breadcrumb = document.querySelector('.breadcrumb');
    const elementToRestore = removedElementsJasaKonsFinishingPost[conditionId]; // Mendapatkan elemen yang disimpan

    if (elementToRestore) {
        breadcrumb.appendChild(elementToRestore); // Menambahkan elemen kembali ke dalam breadcrumb
        delete removedElementsJasaKonsFinishingPost[conditionId]; // Menghapus elemen dari objek setelah dikembalikan
    } else {
        console.log(`Elemen dengan ID ${conditionId} tidak ditemukan di removedElementsJasaKonsFinishingPost.`);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    // var currentUrl = window.location.href;
     //const cleanUrl = currentUrl.split('?')[0]; // Menghapus parameter seperti ?m=1
    const cleanUrlJasaKonsFinishingPost = window.location.href.split(/[?#]/)[0]; // Menghilangkan parameter seperti ?m=1

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
		urlMappingJasaFinishingDakBeton,
		urlMappingJasaFinishingBetonExpose,
		urlMappingJasaPlesteranAcianDinding,
		urlMappingJasaFinishingGroutingStrukturBeton,
                urlMappingJasaPelapisanCoatingStruktur,
		urlMappingJasaFinishingKolomBalok,
		urlMappingJasaPelapisanWaterproofingStruktur,
		urlMappingJasaFinishingLantaiBeton,
		urlMappingJasaPelindungRetakStruktur,
		urlMappingJasaInteriorFurnitureCustome,
		urlMappingJasaFinishingInteriorModern,
		urlMappingFinishingInteriorKitchenSet,
		urlMappingJasaCatEksteriorRumah,
		urlMappingJasaFinishingFasadEksterior,
		urlMappingJasaPelapisanAntiCuaca,
		urlMappingJasaPelapisanDindingLuar,
		urlMappingJasaFinishingTamanRumah,
		urlMappingJasaFinishingKanopiTeras,
		urlMappingJasaPelapisanBatuAlamEksterior,
		urlMappingJasaPelapisanGentengDak
	
    );

    // --- validasi URL terdaftar ---
    if (!urlMappingGabungan[cleanUrlJasaKonsFinishingPost]) {
      console.log(`[HybridDateModified] URL tidak terdaftar: ${cleanUrlJasaKonsFinishingPost}`);
      return;
    }
  
	/* ==========================================================
 🧩 Auto DatePublished Normalizer v1.0
 🔧 Fungsi:
 - Deteksi <meta itemprop="datePublished">
 - Jika lebih tua dari batas minimum (2020-08-03T00:00:00.000Z),
   otomatis diperbarui ke tanggal tersebut
 - Tetap mempertahankan format ISO 8601 untuk SEO & schema JSON-LD
 ========================================================== */
	try {
    const minDateStr = "2020-08-03T00:00:00.000Z"; // batas minimal yang valid
    const minDate = new Date(minDateStr);

    // cari meta datePublished
    const metaPublished = document.querySelector('meta[itemprop="datePublished"]');
    if (!metaPublished) return; // tidak ada, keluar

    const currentStr = metaPublished.getAttribute("content");
    if (!currentStr) return;

    const currentDate = new Date(currentStr);

    // cek apakah tanggal lebih tua dari batas
    if (currentDate < minDate) {
      // update meta content
      metaPublished.setAttribute("content", minDateStr);
      console.log("🧩 [Normalizer] datePublished diperbarui →", minDateStr);
    } else {
      console.log("✅ [Normalizer] datePublished valid →", currentStr);
    }

    // 🔄 opsional: jika ada JSON-LD schema di <script type="application/ld+json">
    document.querySelectorAll('script[type="application/ld+json"]').forEach((el) => {
      try {
        const data = JSON.parse(el.textContent.trim());
        if (data && data.datePublished && new Date(data.datePublished) < minDate) {
          data.datePublished = minDateStr;
          el.textContent = JSON.stringify(data, null, 2);
          console.log("🧩 [Normalizer] Schema datePublished diperbarui →", minDateStr);
        }
      } catch (e) {}
    });
  } catch (err) {
    console.warn("⚠️ Auto DatePublished Normalizer error:", err);
  }
	  
  // === Tanggal nextUpdate1 global ===
	const globalNextUpdate1 = "2026-02-13T00:00:00.000Z";
	console.log(`🌐 [AutoMeta] Detected jasa-konstruksi-finishing-post: ${cleanUrlJasaKonsFinishingPost}`);

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

    const hash = stableHash(cleanUrlJasaKonsFinishingPost);
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
	
	console.log("✅ AEDMetaDates updated jasa-konstruksi-finishing-post:", window.AEDMetaDates);

    console.log(`✅ [HybridDateModified v2.5] ${cleanUrlJasaKonsFinishingPost} → ${isoDate} | type=${type || "-"}`);

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
    var JasaKonsFinishingPost = document.getElementById("JasaKonsFinishingPost");
    if (!JasaKonsFinishingPost) {
        console.log("elemen Id JasaKonsFinishing kondisi terhapus");
        return;
    }
     var JasaKonstruksiFinishingPostLink = document.getElementById("JasaKonstruksiFinishingPost");
     var JasaFinishingPostLink = document.getElementById("JasaFinishingPost");
     var JasaFinishingBangunanPostLink = document.getElementById("JasaFinishingBangunanPost");
     var JasaFinishingInfrastrukturPostLink = document.getElementById("JasaFinishingInfrastrukturPost");
    //sub finishing bangunan
	
    var JasaFinishingInteriorPostLink = document.getElementById("JasaFinishingBangunanInteriorPost");
    var JasaFinishingBangunanEksteriorPostLink = document.getElementById("JasaFinishingBangunanEksteriorPost");
    var JasaFinishingStrukturPostLink = document.getElementById("JasaFinishingBangunanStrukturPost");
	
   //SUB JasaFinishingBangunanInteriorPosT
   var JasaEpoxyDindingPostLink = document.getElementById("JasaEpoxyDindingPost");
   var JasaFinishingDakBetonPostLink = document.getElementById("JasaFinishingDakBetonPost");
   var JasaInteriorFurnitureCustomePostLink = document.getElementById("JasaInteriorFurnitureCustomePost");
   var JasaGantiKeramikLantaiPostLink = document.getElementById("JasaGantiKeramikLantaiPost");
   var JasaCatInteriorRumahPostLink = document.getElementById("JasaCatInteriorRumahPost");
   var JasaPasangWallpaperDindingPostLink = document.getElementById("JasaPasangWallpaperDindingPost");
   var JasaPasangLantaiVinylPostLink = document.getElementById("JasaPasangLantaiVinylPost");
   var JasaPasangPlafonGypsumPostLink = document.getElementById("JasaPasangPlafonGypsumPost");
   var JasaGantiLampuInteriorPostLink = document.getElementById("JasaGantiLampuInteriorPost");
   var JasaGantiKitchenSetPostLink = document.getElementById("JasaGantiKitchenSetPost");
   var JasaFinishingInteriorMinimalisPostLink = document.getElementById("JasaFinishingInteriorMinimalisPost");
   var JasaFinishingInteriorKlasikPostLink = document.getElementById("JasaFinishingInteriorKlasikPost");
   var JasaFinishingInteriorModernPostLink = document.getElementById("JasaFinishingInteriorModernPost");
   //SUB JasaFinishingBangunanStrukturPost
   var JasaFinishingBetonExposePostLink = document.getElementById("JasaFinishingBetonExposePost");
   var JasaPlesteranAcianDindingPostLink = document.getElementById("JasaPlesteranAcianDindingPost");
   var JasaFinishingGroutingStrukturBetonPostLink = document.getElementById("JasaFinishingGroutingStrukturBetonPost");
   var JasaPelapisanCoatingStrukturPostLink = document.getElementById("JasaPelapisanCoatingStrukturPost");
   var JasaFinishingKolomdanBalokPostLink = document.getElementById("JasaFinishingKolomdanBalokPost");
   var JasaPelapisanWaterproofingStrukturPostLink = document.getElementById("JasaPelapisanWaterproofingStrukturPost");
   var JasaFinishingLantaiBetonPostLink = document.getElementById("JasaFinishingLantaiBetonPost");
   var JasaPelindungRetakStrukturPostLink = document.getElementById("JasaPelindungRetakStrukturPost");
   //SUB JasaFinishingBangunanEksteriorPost
   var JasaCatEksteriorRumahPostLink = document.getElementById("JasaCatEksteriorRumahPost");
   var JasaFinishingFasadEksteriorPostLink = document.getElementById("JasaFinishingFasadEksteriorPost");
   var JasaPelapisanAntiCuacaPostLink = document.getElementById("JasaPelapisanAntiCuacaPost");
   var JasaPelapisanDindingLuarPostLink = document.getElementById("JasaPelapisanDindingLuarPost");
   var JasaFinishingTamanRumahPostLink = document.getElementById("JasaFinishingTamanRumahPost");
   var JasaPelapisanBatuAlamEksteriorPostLink = document.getElementById("JasaPelapisanBatuAlamEksteriorPost");
   var JasaPelapisanGentengDakPostLink = document.getElementById("JasaPelapisanGentengDakPost");
	
    //sub finishing infrastruktur
    var JasaFinishingJalanPostLink = document.getElementById("JasaFinishingInfrastrukturJalanPost");
    var JasaFinishingTrotoarPostLink = document.getElementById("JasaFinishingInfrastrukturTrotoarPost");
    var JasaFinishingSaluranPostLink = document.getElementById("JasaFinishingInfrastrukturSaluranPost");
    var JasaFinishingStrukturPostLink = document.getElementById("JasaFinishingInfrastrukturStrukturPost");
    var JasaFinishingProteksiPostLink = document.getElementById("JasaFinishingInfrastrukturProteksiPost");

   //HIDE sub JasaFinishingBangunanInteriorPost
	JasaEpoxyDindingPostLink.style.visibility = 'hidden';
    JasaInteriorFurnitureCustomePostLink.style.visibility = 'hidden';
    JasaGantiKeramikLantaiPostLink.style.visibility = 'hidden';
    JasaCatInteriorRumahPostLink.style.visibility = 'hidden';
    JasaPasangWallpaperDindingPostLink.style.visibility = 'hidden';
    JasaPasangLantaiVinylPostLink.style.visibility = 'hidden';
    JasaPasangPlafonGypsumPostLink.style.visibility = 'hidden';
    JasaGantiLampuInteriorPostLink.style.visibility = 'hidden';
    JasaGantiKitchenSetPostLink.style.visibility = 'hidden';
    JasaFinishingInteriorMinimalisPostLink.style.visibility = 'hidden';
    JasaFinishingInteriorKlasikPostLink.style.visibility = 'hidden';
    JasaFinishingInteriorModernPostLink.style.visibility = 'hidden';
   
     //HIDE sub JasaFinishingBangunanStrukturPost
    JasaPlesteranAcianDindingPostLink.style.visibility = 'hidden';
    JasaFinishingBetonExposePostLink.style.visibility = 'hidden';
    JasaFinishingGroutingStrukturBetonPostLink.style.visibility = 'hidden';
    JasaPelapisanCoatingStrukturPostLink.style.visibility = 'hidden';
    JasaFinishingKolomdanBalokPostLink.style.visibility = 'hidden';
    JasaPelapisanWaterproofingStrukturPostLink.style.visibility = 'hidden';
    JasaFinishingLantaiBetonPostLink.style.visibility = 'hidden';
    JasaPelindungRetakStrukturPostLink.style.visibility = 'hidden';

    //HIDE sub JasaFinishingBangunanEksteriorPost
    JasaCatEksteriorRumahPostLink.style.visibility = 'hidden';
    JasaFinishingFasadEksteriorPostLink.style.visibility = 'hidden';
    JasaPelapisanAntiCuacaPostLink.style.visibility = 'hidden';
    JasaPelapisanDindingLuarPostLink.style.visibility = 'hidden';
    JasaFinishingTamanRumahPostLink.style.visibility = 'hidden';
    JasaPelapisanBatuAlamEksteriorPostLink.style.visibility = 'hidden';
    JasaPelapisanGentengDakPostLink.style.visibility = 'hidden';
   
    var pageNameJasaKonsFinishingPostLink = document.getElementById("pageNameJasaKonsFinishingPost");
	
     // Default untuk menyembunyikan elemen
     JasaKonstruksiFinishingPostLink.style.visibility = 'hidden';
     JasaFinishingPostLink.style.visibility = 'hidden';
     JasaFinishingBangunanPostLink.style.visibility = 'hidden';
     JasaFinishingInfrastrukturPostLink.style.visibility = 'hidden';
     pageNameJasaKonsFinishingPostLink.textContent = "";

    //SUB FINISHING BANGUNAN
	//FINISHING STRUKTUR
    if (urlMappingJasaFinishingDakBeton[cleanUrlJasaKonsFinishingPost]) {
        restoreCondition('JasaFinishingBangunanPost');
        restoreCondition('JasaFinishingBangunanStrukturPost');
    
        restoreCondition('JasaFinishingDakBetonPost');
           
	// hapus elemen id DIV Lain SELAIN JasaKonsFinishingPost
	removeCondition('JasaDesInPost');
        removeCondition('ProdukInFurPost');
        removeCondition('ProdukKonsSaluranPost');
        removeCondition('ProdukKonsPembatasPost');
        removeCondition('ProdukKonsDindingModularPost');
        removeCondition('ProdukKonsPost');
        removeCondition('MaterialKonsStukturPost');
        removeCondition('MaterialKonsFasadPelapisEksteriorPost');
	removeCondition('MaterialKonsAtapPenutupPost');
        removeCondition('JasaKonsPerkuatanTanahLongsorPost');
        removeCondition('JasaKonsPondasiTanahPost');
        removeCondition('JasaKonsPembatasPost');
        removeCondition('JasaKonsPerbaikanPost');
        removeCondition('JasaKonsCuttingBetonPost');
        removeCondition('JasaKonsPengeboranPost');
        removeCondition('JasaKonsBongkarBangunanPost');
        removeCondition('JasaKonsStrukturPost');
        removeCondition('JasaKonsAlatKonstruksiPost');
        removeCondition('JasaKonsJalanPerkerasanPost');
	    
     //   removeCondition('JasaKonsFinishingPost');

	 // hapus elemen id FINISHING STRUKTUR lain NYA SELAIN JasaFinishingBetonExposePost
	removeCondition('JasaFinishingBetonExposePost');
        removeCondition('JasaFinishingLantaiBetonPost');
        //removeCondition('JasaPlesteranAcianDindingPost');
        removeCondition('JasaFinishingGroutingStrukturBetonPost');
        removeCondition('JasaPelapisanCoatingStrukturPost');
        removeCondition('JasaFinishingKolomdanBalokPost');
        removeCondition('JasaPelapisanWaterproofingStrukturPost');
        removeCondition('JasaPlesteranAcianDindingPost');
        removeCondition('JasaPelindungRetakStrukturPost');
         // hapus elemen id sub JasaFinishingBangunanInteriorPost Semua
	    removeCondition('JasaEpoxyDindingPost');
        removeCondition('JasaInteriorFurnitureCustomePost');
	removeCondition('JasaInteriorFurniturePost');
        removeCondition('JasaGantiKeramikLantaiPost');
        removeCondition('JasaCatInteriorRumahPost');
        removeCondition('JasaPasangWallpaperDindingPost');
        removeCondition('JasaPasangLantaiVinylPost');
        removeCondition('JasaPasangPlafonGypsumPost');
        removeCondition('JasaGantiLampuInteriorPost');
        removeCondition('JasaGantiKitchenSetPost');
        removeCondition('JasaFinishingInteriorMinimalisPost');
        removeCondition('JasaFinishingInteriorKlasikPost');
        removeCondition('JasaFinishingInteriorModernPost');
         // hapus elemen id sub JasaFinishingBangunanEksteriorPost Semua
        removeCondition('JasaCatEksteriorRumahPost');
        removeCondition('JasaFinishingFasadEksteriorPost');
        removeCondition('JasaPelapisanAntiCuacaPost');
        removeCondition('JasaPelapisanDindingLuarPost');
        removeCondition('JasaFinishingTamanRumahPost');
        removeCondition('JasaPelapisanBatuAlamEksteriorPost');
        removeCondition('JasaPelapisanGentengDakPost');
      
         // hapus elemen id FINISHING UTAMA lain NYA
        removeCondition('JasaFinishingBangunanEksteriorPost');
        removeCondition('JasaFinishingBangunanInteriorPost');

          // hapus elemen id Infrastruktur Semua
        removeCondition('JasaFinishingInfrastrukturPost');
        removeCondition('JasaFinishingInfrastrukturJalanPost');
        removeCondition('JasaFinishingInfrastrukturTrotoarPost');
        removeCondition('JasaFinishingInfrastrukturSaluranPost');
        removeCondition('JasaFinishingInfrastrukturStrukturPost');
        removeCondition('JasaFinishingInfrastrukturProteksiPost');
       
        JasaKonstruksiFinishingPostLink.style.visibility = 'visible';
        JasaFinishingPostLink.style.visibility = 'visible';
        JasaFinishingBangunanPostLink.style.visibility = 'visible';
        //sub finishing bangunan
        JasaFinishingStrukturPostLink.style.visibility = 'visible';
        //sub finishing STRUKKTUR
        JasaFinishingDakBetonPostLink.style.visibility = 'visible';
        pageNameJasaKonsFinishingPostLink.textContent = urlMappingJasaFinishingDakBeton[cleanUrlJasaKonsFinishingPost];
    }
// ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaFinishingDakBeton[cleanUrlJasaKonsFinishingPost]) {
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
                   "name": "Jasa Finishing Bangunan",
                   "item": "https://www.betonjayareadymix.com/p/jasa-finishing-bangunan.html"
               },
               {
                   "@type": "ListItem",
                   "position": 5,
                   "name": "Jasa Finishing Struktur",
                   "item": "https://www.betonjayareadymix.com/p/jasa-finishing-struktur.html"
               },
               {
                   "@type": "ListItem",
                   "position": 6,
                   "name": "Jasa Finishing Dak Beton",
                   "item": "https://www.betonjayareadymix.com/p/jasa-finishing-dak-beton.html"
               },
               {
                   "@type": "ListItem",
                   "position": 7,
                   "name": urlMappingJasaFinishingDakBeton[cleanUrlJasaKonsFinishingPost],
                   "item": cleanUrlJasaKonsFinishingPost
               }
           ]
       };
   	const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
    if (urlMappingJasaFinishingBetonExpose[cleanUrlJasaKonsFinishingPost]) {
        restoreCondition('JasaFinishingBangunanPost');
        restoreCondition('JasaFinishingBangunanStrukturPost');
    
        restoreCondition('JasaFinishingBetonExposePost');
           
	// hapus elemen id DIV Lain SELAIN JasaKonsFinishingPost
	removeCondition('JasaDesInPost');
        removeCondition('ProdukInFurPost');
        removeCondition('ProdukKonsSaluranPost');
        removeCondition('ProdukKonsPembatasPost');
        removeCondition('ProdukKonsDindingModularPost');
        removeCondition('ProdukKonsPost');
        removeCondition('MaterialKonsStukturPost');
        removeCondition('MaterialKonsFasadPelapisEksteriorPost');
	removeCondition('MaterialKonsAtapPenutupPost');
        removeCondition('JasaKonsPerkuatanTanahLongsorPost');
        removeCondition('JasaKonsPondasiTanahPost');
        removeCondition('JasaKonsPembatasPost');
        removeCondition('JasaKonsPerbaikanPost');
        removeCondition('JasaKonsCuttingBetonPost');
        removeCondition('JasaKonsPengeboranPost');
        removeCondition('JasaKonsBongkarBangunanPost');
        removeCondition('JasaKonsStrukturPost');
        removeCondition('JasaKonsAlatKonstruksiPost');
        removeCondition('JasaKonsJalanPerkerasanPost');
     //   removeCondition('JasaKonsFinishingPost');

	 // hapus elemen id FINISHING STRUKTUR lain NYA SELAIN JasaFinishingBetonExposePost
	removeCondition('JasaFinishingDakBetonPost');
        removeCondition('JasaFinishingLantaiBetonPost');
        //removeCondition('JasaPlesteranAcianDindingPost');
        removeCondition('JasaFinishingGroutingStrukturBetonPost');
        removeCondition('JasaPelapisanCoatingStrukturPost');
        removeCondition('JasaFinishingKolomdanBalokPost');
        removeCondition('JasaPelapisanWaterproofingStrukturPost');
        removeCondition('JasaPlesteranAcianDindingPost');
        removeCondition('JasaPelindungRetakStrukturPost');
         // hapus elemen id sub JasaFinishingBangunanInteriorPost Semua
		removeCondition('JasaEpoxyDindingPost');
        removeCondition('JasaInteriorFurnitureCustomePost');
        removeCondition('JasaGantiKeramikLantaiPost');
        removeCondition('JasaCatInteriorRumahPost');
        removeCondition('JasaPasangWallpaperDindingPost');
        removeCondition('JasaPasangLantaiVinylPost');
        removeCondition('JasaPasangPlafonGypsumPost');
        removeCondition('JasaGantiLampuInteriorPost');
        removeCondition('JasaGantiKitchenSetPost');
        removeCondition('JasaFinishingInteriorMinimalisPost');
        removeCondition('JasaFinishingInteriorKlasikPost');
        removeCondition('JasaFinishingInteriorModernPost');
         // hapus elemen id sub JasaFinishingBangunanEksteriorPost Semua
        removeCondition('JasaCatEksteriorRumahPost');
        removeCondition('JasaFinishingFasadEksteriorPost');
        removeCondition('JasaPelapisanAntiCuacaPost');
        removeCondition('JasaPelapisanDindingLuarPost');
        removeCondition('JasaFinishingTamanRumahPost');
        removeCondition('JasaPelapisanBatuAlamEksteriorPost');
        removeCondition('JasaPelapisanGentengDakPost');
      
         // hapus elemen id FINISHING UTAMA lain NYA
        removeCondition('JasaFinishingBangunanEksteriorPost');
        removeCondition('JasaFinishingBangunanInteriorPost');

          // hapus elemen id Infrastruktur Semua
        removeCondition('JasaFinishingInfrastrukturPost');
        removeCondition('JasaFinishingInfrastrukturJalanPost');
        removeCondition('JasaFinishingInfrastrukturTrotoarPost');
        removeCondition('JasaFinishingInfrastrukturSaluranPost');
        removeCondition('JasaFinishingInfrastrukturStrukturPost');
        removeCondition('JasaFinishingInfrastrukturProteksiPost');
       
        JasaKonstruksiFinishingPostLink.style.visibility = 'visible';
        JasaFinishingPostLink.style.visibility = 'visible';
        JasaFinishingBangunanPostLink.style.visibility = 'visible';
        //sub finishing bangunan
        JasaFinishingStrukturPostLink.style.visibility = 'visible';
        //sub finishing STRUKKTUR
        JasaFinishingBetonExposePostLink.style.visibility = 'visible';
        pageNameJasaKonsFinishingPostLink.textContent = urlMappingJasaFinishingBetonExpose[cleanUrlJasaKonsFinishingPost];
    }

// ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaFinishingBetonExpose[cleanUrlJasaKonsFinishingPost]) {
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
                   "name": "Jasa Finishing Bangunan",
                   "item": "https://www.betonjayareadymix.com/p/jasa-finishing-bangunan.html"
               },
               {
                   "@type": "ListItem",
                   "position": 5,
                   "name": "Jasa Finishing Struktur",
                   "item": "https://www.betonjayareadymix.com/p/jasa-finishing-struktur.html"
               },
               {
                   "@type": "ListItem",
                   "position": 6,
                   "name": "Jasa Finishing Beton Expose",
                   "item": "https://www.betonjayareadymix.com/p/jasa-finishing-beton-expose.html"
               },
               {
                   "@type": "ListItem",
                   "position": 7,
                   "name": urlMappingJasaFinishingBetonExpose[cleanUrlJasaKonsFinishingPost],
                   "item": cleanUrlJasaKonsFinishingPost
               }
           ]
       };
       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
  if (urlMappingJasaFinishingLantaiBeton[cleanUrlJasaKonsFinishingPost]) {
        restoreCondition('JasaFinishingBangunanPost');
        restoreCondition('JasaFinishingBangunanStrukturPost');
    
        restoreCondition('JasaFinishingLantaiBetonPost');
           
	// hapus elemen id DIV Lain SELAIN JasaKonsFinishingPost
	removeCondition('JasaDesInPost');
        removeCondition('ProdukInFurPost');
        removeCondition('ProdukKonsSaluranPost');
        removeCondition('ProdukKonsPembatasPost');
        removeCondition('ProdukKonsDindingModularPost');
        removeCondition('ProdukKonsPost');
        removeCondition('MaterialKonsStukturPost');
        removeCondition('MaterialKonsFasadPelapisEksteriorPost');
	removeCondition('MaterialKonsAtapPenutupPost');
        removeCondition('JasaKonsPerkuatanTanahLongsorPost');
        removeCondition('JasaKonsPondasiTanahPost');
        removeCondition('JasaKonsPembatasPost');
        removeCondition('JasaKonsPerbaikanPost');
        removeCondition('JasaKonsCuttingBetonPost');
        removeCondition('JasaKonsPengeboranPost');
        removeCondition('JasaKonsBongkarBangunanPost');
        removeCondition('JasaKonsStrukturPost');
        removeCondition('JasaKonsAlatKonstruksiPost');
        removeCondition('JasaKonsJalanPerkerasanPost');
     //   removeCondition('JasaKonsFinishingPost');

	 // hapus elemen id FINISHING STRUKTUR lain NYA SELAIN JasaPlesteranAcianDindingPost
	removeCondition('JasaFinishingDakBetonPost');
        removeCondition('JasaFinishingBetonExposePost');
        //removeCondition('JasaPlesteranAcianDindingPost');
        removeCondition('JasaFinishingGroutingStrukturBetonPost');
        removeCondition('JasaPelapisanCoatingStrukturPost');
        removeCondition('JasaFinishingKolomdanBalokPost');
        removeCondition('JasaPelapisanWaterproofingStrukturPost');
        removeCondition('JasaPlesteranAcianDindingPost');
        removeCondition('JasaPelindungRetakStrukturPost');
         // hapus elemen id sub JasaFinishingBangunanInteriorPost Semua
	   removeCondition('JasaEpoxyDindingPost');
        removeCondition('JasaInteriorFurnitureCustomePost');
        removeCondition('JasaGantiKeramikLantaiPost');
        removeCondition('JasaCatInteriorRumahPost');
        removeCondition('JasaPasangWallpaperDindingPost');
        removeCondition('JasaPasangLantaiVinylPost');
        removeCondition('JasaPasangPlafonGypsumPost');
        removeCondition('JasaGantiLampuInteriorPost');
        removeCondition('JasaGantiKitchenSetPost');
        removeCondition('JasaFinishingInteriorMinimalisPost');
        removeCondition('JasaFinishingInteriorKlasikPost');
        removeCondition('JasaFinishingInteriorModernPost');
         // hapus elemen id sub JasaFinishingBangunanEksteriorPost Semua
        removeCondition('JasaCatEksteriorRumahPost');
        removeCondition('JasaFinishingFasadEksteriorPost');
        removeCondition('JasaPelapisanAntiCuacaPost');
        removeCondition('JasaPelapisanDindingLuarPost');
        removeCondition('JasaFinishingTamanRumahPost');
        removeCondition('JasaPelapisanBatuAlamEksteriorPost');
        removeCondition('JasaPelapisanGentengDakPost');
      
         // hapus elemen id FINISHING UTAMA lain NYA
        removeCondition('JasaFinishingBangunanEksteriorPost');
        removeCondition('JasaFinishingBangunanInteriorPost');

          // hapus elemen id Infrastruktur Semua
        removeCondition('JasaFinishingInfrastrukturPost');
        removeCondition('JasaFinishingInfrastrukturJalanPost');
        removeCondition('JasaFinishingInfrastrukturTrotoarPost');
        removeCondition('JasaFinishingInfrastrukturSaluranPost');
        removeCondition('JasaFinishingInfrastrukturStrukturPost');
        removeCondition('JasaFinishingInfrastrukturProteksiPost');
       
        JasaKonstruksiFinishingPostLink.style.visibility = 'visible';
        JasaFinishingPostLink.style.visibility = 'visible';
        JasaFinishingBangunanPostLink.style.visibility = 'visible';
        //sub finishing bangunan
        JasaFinishingStrukturPostLink.style.visibility = 'visible';
        //sub finishing STRUKKTUR
        JasaFinishingLantaiBetonPostLink.style.visibility = 'visible';
        pageNameJasaKonsFinishingPostLink.textContent = urlMappingJasaFinishingLantaiBeton[cleanUrlJasaKonsFinishingPost];
    }
// ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaFinishingLantaiBeton[cleanUrlJasaKonsFinishingPost]) {
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
                   "name": "Jasa Finishing Bangunan",
                   "item": "https://www.betonjayareadymix.com/p/jasa-finishing-bangunan.html"
               },
               {
                   "@type": "ListItem",
                   "position": 5,
                   "name": "Jasa Finishing Struktur",
                   "item": "https://www.betonjayareadymix.com/p/jasa-finishing-struktur.html"
               },
               {
                   "@type": "ListItem",
                   "position": 6,
                   "name": "Jasa Finishing Lantai Beton",
                   "item": "https://www.betonjayareadymix.com/p/jasa-finishing-lantai-beton.html"
               },
               {
                   "@type": "ListItem",
                   "position": 7,
                   "name": urlMappingJasaFinishingLantaiBeton[cleanUrlJasaKonsFinishingPost],
                   "item": cleanUrlJasaKonsFinishingPost
               }
           ]
       };
       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
   if (urlMappingJasaPlesteranAcianDinding[cleanUrlJasaKonsFinishingPost]) {
        restoreCondition('JasaFinishingBangunanPost');
        restoreCondition('JasaFinishingBangunanStrukturPost');
    
        restoreCondition('JasaPlesteranAcianDindingPost');
           
	// hapus elemen id DIV Lain SELAIN JasaKonsFinishingPost
	removeCondition('JasaDesInPost');
        removeCondition('ProdukInFurPost');
        removeCondition('ProdukKonsSaluranPost');
        removeCondition('ProdukKonsPembatasPost');
        removeCondition('ProdukKonsDindingModularPost');
        removeCondition('ProdukKonsPost');
        removeCondition('MaterialKonsStukturPost');
        removeCondition('MaterialKonsFasadPelapisEksteriorPost');
	removeCondition('MaterialKonsAtapPenutupPost');
        removeCondition('JasaKonsPerkuatanTanahLongsorPost');
        removeCondition('JasaKonsPondasiTanahPost');
        removeCondition('JasaKonsPembatasPost');
        removeCondition('JasaKonsPerbaikanPost');
        removeCondition('JasaKonsCuttingBetonPost');
        removeCondition('JasaKonsPengeboranPost');
        removeCondition('JasaKonsBongkarBangunanPost');
        removeCondition('JasaKonsStrukturPost');
        removeCondition('JasaKonsAlatKonstruksiPost');
        removeCondition('JasaKonsJalanPerkerasanPost');
     //   removeCondition('JasaKonsFinishingPost');

	 // hapus elemen id FINISHING STRUKTUR lain NYA SELAIN JasaPlesteranAcianDindingPost
	removeCondition('JasaFinishingDakBetonPost');
        removeCondition('JasaFinishingBetonExposePost');
        //removeCondition('JasaPlesteranAcianDindingPost');
        removeCondition('JasaFinishingGroutingStrukturBetonPost');
        removeCondition('JasaPelapisanCoatingStrukturPost');
        removeCondition('JasaFinishingKolomdanBalokPost');
        removeCondition('JasaPelapisanWaterproofingStrukturPost');
        removeCondition('JasaFinishingLantaiBetonPost');
        removeCondition('JasaPelindungRetakStrukturPost');
         // hapus elemen id sub JasaFinishingBangunanInteriorPost Semua
	   removeCondition('JasaEpoxyDindingPost');
        removeCondition('JasaInteriorFurnitureCustomePost');
        removeCondition('JasaGantiKeramikLantaiPost');
        removeCondition('JasaCatInteriorRumahPost');
        removeCondition('JasaPasangWallpaperDindingPost');
        removeCondition('JasaPasangLantaiVinylPost');
        removeCondition('JasaPasangPlafonGypsumPost');
        removeCondition('JasaGantiLampuInteriorPost');
        removeCondition('JasaGantiKitchenSetPost');
        removeCondition('JasaFinishingInteriorMinimalisPost');
        removeCondition('JasaFinishingInteriorKlasikPost');
        removeCondition('JasaFinishingInteriorModernPost');
         // hapus elemen id sub JasaFinishingBangunanEksteriorPost Semua
        removeCondition('JasaCatEksteriorRumahPost');
        removeCondition('JasaFinishingFasadEksteriorPost');
        removeCondition('JasaPelapisanAntiCuacaPost');
        removeCondition('JasaPelapisanDindingLuarPost');
        removeCondition('JasaFinishingTamanRumahPost');
        removeCondition('JasaPelapisanBatuAlamEksteriorPost');
        removeCondition('JasaPelapisanGentengDakPost');
      
         // hapus elemen id FINISHING UTAMA lain NYA
        removeCondition('JasaFinishingBangunanEksteriorPost');
        removeCondition('JasaFinishingBangunanInteriorPost');

          // hapus elemen id Infrastruktur Semua
        removeCondition('JasaFinishingInfrastrukturPost');
        removeCondition('JasaFinishingInfrastrukturJalanPost');
        removeCondition('JasaFinishingInfrastrukturTrotoarPost');
        removeCondition('JasaFinishingInfrastrukturSaluranPost');
        removeCondition('JasaFinishingInfrastrukturStrukturPost');
        removeCondition('JasaFinishingInfrastrukturProteksiPost');
       
        JasaKonstruksiFinishingPostLink.style.visibility = 'visible';
        JasaFinishingPostLink.style.visibility = 'visible';
        JasaFinishingBangunanPostLink.style.visibility = 'visible';
        //sub finishing bangunan
        JasaFinishingStrukturPostLink.style.visibility = 'visible';
        //sub finishing STRUKKTUR
        JasaPlesteranAcianDindingPostLink.style.visibility = 'visible';
        pageNameJasaKonsFinishingPostLink.textContent = urlMappingJasaPlesteranAcianDinding[cleanUrlJasaKonsFinishingPost];
    }
  // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaPlesteranAcianDinding[cleanUrlJasaKonsFinishingPost]) {
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
                   "name": "Jasa Finishing Bangunan",
                   "item": "https://www.betonjayareadymix.com/p/jasa-finishing-bangunan.html"
               },
               {
                   "@type": "ListItem",
                   "position": 5,
                   "name": "Jasa Finishing Struktur",
                   "item": "https://www.betonjayareadymix.com/p/jasa-finishing-struktur.html"
               },
               {
                   "@type": "ListItem",
                   "position": 6,
                   "name": "Jasa Plesteran Acian Dinding",
                   "item": "https://www.betonjayareadymix.com/p/jasa-plesteran-acian-dinding.html"
               },
               {
                   "@type": "ListItem",
                   "position": 7,
                   "name": urlMappingJasaPlesteranAcianDinding[cleanUrlJasaKonsFinishingPost],
                   "item": cleanUrlJasaKonsFinishingPost
               }
           ]
       };
       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
//AKHIR FINISHING STRUKTUR

//FINISHING INTERIOR
    if (urlMappingJasaEpoxyDinding[cleanUrlJasaKonsFinishingPost]) {
        restoreCondition('JasaFinishingBangunanPost');
        restoreCondition('JasaFinishingBangunanInteriorPost');
    
        restoreCondition('JasaEpoxyDindingPost');
           
	// hapus elemen id DIV Lain SELAIN JasaKonsFinishingPost
	removeCondition('JasaDesInPost');
        removeCondition('ProdukInFurPost');
        removeCondition('ProdukKonsSaluranPost');
        removeCondition('ProdukKonsPembatasPost');
        removeCondition('ProdukKonsDindingModularPost');
        removeCondition('ProdukKonsPost');
        removeCondition('MaterialKonsStukturPost');
        removeCondition('MaterialKonsFasadPelapisEksteriorPost');
	removeCondition('MaterialKonsAtapPenutupPost');
        removeCondition('JasaKonsPerkuatanTanahLongsorPost');
        removeCondition('JasaKonsPondasiTanahPost');
        removeCondition('JasaKonsPembatasPost');
        removeCondition('JasaKonsPerbaikanPost');
        removeCondition('JasaKonsCuttingBetonPost');
        removeCondition('JasaKonsPengeboranPost');
        removeCondition('JasaKonsBongkarBangunanPost');
        removeCondition('JasaKonsStrukturPost');
        removeCondition('JasaKonsAlatKonstruksiPost');
        removeCondition('JasaKonsJalanPerkerasanPost');
     //   removeCondition('JasaKonsFinishingPost');

	 // hapus elemen id FINISHING STRUKTUR SEMUA NYA
	removeCondition('JasaFinishingDakBetonPost');
        removeCondition('JasaFinishingBetonExposePost');
        removeCondition('JasaPlesteranAcianDindingPost');
        removeCondition('JasaFinishingGroutingStrukturBetonPost');
        removeCondition('JasaPelapisanCoatingStrukturPost');
        removeCondition('JasaFinishingKolomdanBalokPost');
        removeCondition('JasaPelapisanWaterproofingStrukturPost');
        removeCondition('JasaFinishingLantaiBetonPost');
        removeCondition('JasaPelindungRetakStrukturPost'); 
	// hapus elemen id sub JasaFinishingBangunanEksteriorPost Semua
        removeCondition('JasaCatEksteriorRumahPost');
        removeCondition('JasaFinishingFasadEksteriorPost');
        removeCondition('JasaPelapisanAntiCuacaPost');
        removeCondition('JasaPelapisanDindingLuarPost');
        removeCondition('JasaFinishingTamanRumahPost');
        removeCondition('JasaPelapisanBatuAlamEksteriorPost');
        removeCondition('JasaPelapisanGentengDakPost');
      
         // hapus elemen id sub JasaFinishingBangunanInteriorPost Semua selain JasaEpoxyDinding
		removeCondition('JasaGantiKitchenSetPost');
        removeCondition('JasaInteriorFurnitureCustomePost');
        removeCondition('JasaGantiKeramikLantaiPost');
        removeCondition('JasaCatInteriorRumahPost');
        removeCondition('JasaPasangWallpaperDindingPost');
        removeCondition('JasaPasangLantaiVinylPost');
        removeCondition('JasaPasangPlafonGypsumPost');
        removeCondition('JasaGantiLampuInteriorPost');
        
        removeCondition('JasaFinishingInteriorMinimalisPost');
        removeCondition('JasaFinishingInteriorKlasikPost');
        removeCondition('JasaFinishingInteriorModernPost');
       
         // hapus elemen id FINISHING UTAMA lain NYA
        removeCondition('JasaFinishingBangunanEksteriorPost');
        removeCondition('JasaFinishingBangunanStrukturPost');

          // hapus elemen id Infrastruktur Semua
        removeCondition('JasaFinishingInfrastrukturPost');
        removeCondition('JasaFinishingInfrastrukturJalanPost');
        removeCondition('JasaFinishingInfrastrukturTrotoarPost');
        removeCondition('JasaFinishingInfrastrukturSaluranPost');
        removeCondition('JasaFinishingInfrastrukturStrukturPost');
        removeCondition('JasaFinishingInfrastrukturProteksiPost');
       
        JasaKonstruksiFinishingPostLink.style.visibility = 'visible';
        JasaFinishingPostLink.style.visibility = 'visible';
        JasaFinishingBangunanPostLink.style.visibility = 'visible';
        //sub finishing bangunan
        JasaFinishingInteriorPostLink.style.visibility = 'visible';
        //sub finishing JasaGantiKitchenSetPost
        JasaEpoxyDindingPostLink.style.visibility = 'visible';
        pageNameJasaKonsFinishingPostLink.textContent = urlMappingJasaEpoxyDinding[cleanUrlJasaKonsFinishingPost];
    }
  // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaEpoxyDinding[cleanUrlJasaKonsFinishingPost]) {
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
                   "name": "Jasa Finishing Bangunan",
                   "item": "https://www.betonjayareadymix.com/p/jasa-finishing-bangunan.html"
               },
               {
                   "@type": "ListItem",
                   "position": 5,
                   "name": "Jasa Finishing Interior",
                   "item": "https://www.betonjayareadymix.com/p/jasa-finishing-interior.html"
               },
               {
                   "@type": "ListItem",
                   "position": 6,
                   "name": "Jasa Epoxy Dinding",
                   "item": "https://www.betonjayareadymix.com/p/jasa-epoxy-dinding.html"
               },
               {
                   "@type": "ListItem",
                   "position": 7,
                   "name": urlMappingJasaEpoxyDinding[cleanUrlJasaKonsFinishingPost],
                   "item": cleanUrlJasaKonsFinishingPost
               }
           ]
       };
       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }

	if (urlMappingFinishingInteriorKitchenSet[cleanUrlJasaKonsFinishingPost]) {
        restoreCondition('JasaFinishingBangunanPost');
        restoreCondition('JasaFinishingBangunanInteriorPost');
    
        restoreCondition('JasaGantiKitchenSetPost');
           
	// hapus elemen id DIV Lain SELAIN JasaKonsFinishingPost
	removeCondition('JasaDesInPost');
        removeCondition('ProdukInFurPost');
        removeCondition('ProdukKonsSaluranPost');
        removeCondition('ProdukKonsPembatasPost');
        removeCondition('ProdukKonsDindingModularPost');
        removeCondition('ProdukKonsPost');
        removeCondition('MaterialKonsStukturPost');
        removeCondition('MaterialKonsFasadPelapisEksteriorPost');
	removeCondition('MaterialKonsAtapPenutupPost');
        removeCondition('JasaKonsPerkuatanTanahLongsorPost');
        removeCondition('JasaKonsPondasiTanahPost');
        removeCondition('JasaKonsPembatasPost');
        removeCondition('JasaKonsPerbaikanPost');
        removeCondition('JasaKonsCuttingBetonPost');
        removeCondition('JasaKonsPengeboranPost');
        removeCondition('JasaKonsBongkarBangunanPost');
        removeCondition('JasaKonsStrukturPost');
        removeCondition('JasaKonsAlatKonstruksiPost');
        removeCondition('JasaKonsJalanPerkerasanPost');
     //   removeCondition('JasaKonsFinishingPost');

	 // hapus elemen id FINISHING STRUKTUR SEMUA NYA
	removeCondition('JasaFinishingDakBetonPost');
        removeCondition('JasaFinishingBetonExposePost');
        removeCondition('JasaPlesteranAcianDindingPost');
        removeCondition('JasaFinishingGroutingStrukturBetonPost');
        removeCondition('JasaPelapisanCoatingStrukturPost');
        removeCondition('JasaFinishingKolomdanBalokPost');
        removeCondition('JasaPelapisanWaterproofingStrukturPost');
        removeCondition('JasaFinishingLantaiBetonPost');
        removeCondition('JasaPelindungRetakStrukturPost'); 
	// hapus elemen id sub JasaFinishingBangunanEksteriorPost Semua
        removeCondition('JasaCatEksteriorRumahPost');
        removeCondition('JasaFinishingFasadEksteriorPost');
        removeCondition('JasaPelapisanAntiCuacaPost');
        removeCondition('JasaPelapisanDindingLuarPost');
        removeCondition('JasaFinishingTamanRumahPost');
        removeCondition('JasaPelapisanBatuAlamEksteriorPost');
        removeCondition('JasaPelapisanGentengDakPost');
      
         // hapus elemen id sub JasaFinishingBangunanInteriorPost Semua selain JasaDesainInteriorPost
		removeCondition('JasaEpoxyDindingPost');
        removeCondition('JasaInteriorFurnitureCustomePost');
        removeCondition('JasaGantiKeramikLantaiPost');
        removeCondition('JasaCatInteriorRumahPost');
        removeCondition('JasaPasangWallpaperDindingPost');
        removeCondition('JasaPasangLantaiVinylPost');
        removeCondition('JasaPasangPlafonGypsumPost');
        removeCondition('JasaGantiLampuInteriorPost');
        
        removeCondition('JasaFinishingInteriorMinimalisPost');
        removeCondition('JasaFinishingInteriorKlasikPost');
        removeCondition('JasaFinishingInteriorModernPost');
       
         // hapus elemen id FINISHING UTAMA lain NYA
        removeCondition('JasaFinishingBangunanEksteriorPost');
        removeCondition('JasaFinishingBangunanStrukturPost');

          // hapus elemen id Infrastruktur Semua
        removeCondition('JasaFinishingInfrastrukturPost');
        removeCondition('JasaFinishingInfrastrukturJalanPost');
        removeCondition('JasaFinishingInfrastrukturTrotoarPost');
        removeCondition('JasaFinishingInfrastrukturSaluranPost');
        removeCondition('JasaFinishingInfrastrukturStrukturPost');
        removeCondition('JasaFinishingInfrastrukturProteksiPost');
       
        JasaKonstruksiFinishingPostLink.style.visibility = 'visible';
        JasaFinishingPostLink.style.visibility = 'visible';
        JasaFinishingBangunanPostLink.style.visibility = 'visible';
        //sub finishing bangunan
        JasaFinishingInteriorPostLink.style.visibility = 'visible';
        //sub finishing JasaGantiKitchenSetPost
        JasaGantiKitchenSetPostLink.style.visibility = 'visible';
        pageNameJasaKonsFinishingPostLink.textContent = urlMappingFinishingInteriorKitchenSet[cleanUrlJasaKonsFinishingPost];
    }
  // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingFinishingInteriorKitchenSet[cleanUrlJasaKonsFinishingPost]) {
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
                   "name": "Jasa Finishing Bangunan",
                   "item": "https://www.betonjayareadymix.com/p/jasa-finishing-bangunan.html"
               },
               {
                   "@type": "ListItem",
                   "position": 5,
                   "name": "Jasa Finishing Interior",
                   "item": "https://www.betonjayareadymix.com/p/jasa-finishing-interior.html"
               },
               {
                   "@type": "ListItem",
                   "position": 6,
                   "name": "Jasa Kithen Set",
                   "item": "https://www.betonjayareadymix.com/p/jasa-kitchen-set.html"
               },
               {
                   "@type": "ListItem",
                   "position": 7,
                   "name": urlMappingFinishingInteriorKitchenSet[cleanUrlJasaKonsFinishingPost],
                   "item": cleanUrlJasaKonsFinishingPost
               }
           ]
       };
       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
if (urlMappingJasaInteriorFurnitureCustome[cleanUrlJasaKonsFinishingPost]) {
        restoreCondition('JasaFinishingBangunanPost');
        restoreCondition('JasaFinishingBangunanInteriorPost');
    
        restoreCondition('JasaInteriorFurnitureCustomePost');
           
	// hapus elemen id DIV Lain SELAIN JasaKonsFinishingPost
	removeCondition('JasaDesInPost');
        removeCondition('ProdukInFurPost');
        removeCondition('ProdukKonsSaluranPost');
        removeCondition('ProdukKonsPembatasPost');
        removeCondition('ProdukKonsDindingModularPost');
        removeCondition('ProdukKonsPost');
        removeCondition('MaterialKonsStukturPost');
        removeCondition('MaterialKonsFasadPelapisEksteriorPost');
	removeCondition('MaterialKonsAtapPenutupPost');
        removeCondition('JasaKonsPerkuatanTanahLongsorPost');
        removeCondition('JasaKonsPondasiTanahPost');
        removeCondition('JasaKonsPembatasPost');
        removeCondition('JasaKonsPerbaikanPost');
        removeCondition('JasaKonsCuttingBetonPost');
        removeCondition('JasaKonsPengeboranPost');
        removeCondition('JasaKonsBongkarBangunanPost');
        removeCondition('JasaKonsStrukturPost');
        removeCondition('JasaKonsAlatKonstruksiPost');
        removeCondition('JasaKonsJalanPerkerasanPost');
     //   removeCondition('JasaKonsFinishingPost');

	 // hapus elemen id FINISHING STRUKTUR SEMUA NYA
	removeCondition('JasaFinishingDakBetonPost');
        removeCondition('JasaFinishingBetonExposePost');
        removeCondition('JasaPlesteranAcianDindingPost');
        removeCondition('JasaFinishingGroutingStrukturBetonPost');
        removeCondition('JasaPelapisanCoatingStrukturPost');
        removeCondition('JasaFinishingKolomdanBalokPost');
        removeCondition('JasaPelapisanWaterproofingStrukturPost');
        removeCondition('JasaFinishingLantaiBetonPost');
        removeCondition('JasaPelindungRetakStrukturPost'); 
	// hapus elemen id sub JasaFinishingBangunanEksteriorPost Semua
        removeCondition('JasaCatEksteriorRumahPost');
        removeCondition('JasaFinishingFasadEksteriorPost');
        removeCondition('JasaPelapisanAntiCuacaPost');
        removeCondition('JasaPelapisanDindingLuarPost');
        removeCondition('JasaFinishingTamanRumahPost');
        removeCondition('JasaPelapisanBatuAlamEksteriorPost');
        removeCondition('JasaPelapisanGentengDakPost');
      
         // hapus elemen id sub JasaFinishingBangunanInteriorPost Semua selain JasaDesainInteriorPost
        //removeCondition('');
	    removeCondition('JasaEpoxyDindingPost');
        removeCondition('JasaGantiKeramikLantaiPost');
        removeCondition('JasaCatInteriorRumahPost');
        removeCondition('JasaPasangWallpaperDindingPost');
        removeCondition('JasaPasangLantaiVinylPost');
        removeCondition('JasaPasangPlafonGypsumPost');
        removeCondition('JasaGantiLampuInteriorPost');
        removeCondition('JasaGantiKitchenSetPost');
        removeCondition('JasaFinishingInteriorMinimalisPost');
        removeCondition('JasaFinishingInteriorKlasikPost');
        removeCondition('JasaFinishingInteriorModernPost');
       
         // hapus elemen id FINISHING UTAMA lain NYA
        removeCondition('JasaFinishingBangunanEksteriorPost');
        removeCondition('JasaFinishingBangunanStrukturPost');

          // hapus elemen id Infrastruktur Semua
        removeCondition('JasaFinishingInfrastrukturPost');
        removeCondition('JasaFinishingInfrastrukturJalanPost');
        removeCondition('JasaFinishingInfrastrukturTrotoarPost');
        removeCondition('JasaFinishingInfrastrukturSaluranPost');
        removeCondition('JasaFinishingInfrastrukturStrukturPost');
        removeCondition('JasaFinishingInfrastrukturProteksiPost');
       
        JasaKonstruksiFinishingPostLink.style.visibility = 'visible';
        JasaFinishingPostLink.style.visibility = 'visible';
        JasaFinishingBangunanPostLink.style.visibility = 'visible';
        //sub finishing bangunan
        JasaFinishingInteriorPostLink.style.visibility = 'visible';
        //sub finishing STRUKKTUR
        JasaInteriorFurnitureCustomePostLink.style.visibility = 'visible';
        pageNameJasaKonsFinishingPostLink.textContent = urlMappingJasaInteriorFurnitureCustome[cleanUrlJasaKonsFinishingPost];
    }

  // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaInteriorFurnitureCustome[cleanUrlJasaKonsFinishingPost]) {
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
                   "name": "Jasa Finishing Bangunan",
                   "item": "https://www.betonjayareadymix.com/p/jasa-finishing-bangunan.html"
               },
               {
                   "@type": "ListItem",
                   "position": 5,
                   "name": "Jasa Finishing Interior",
                   "item": "https://www.betonjayareadymix.com/p/jasa-finishing-interior.html"
               },
               {
                   "@type": "ListItem",
                   "position": 6,
                   "name": "Jasa Interior dan Furniture Custom",
                   "item": "https://www.betonjayareadymix.com/p/jasa-interior-dan-furniture-custom.html"
               },
               {
                   "@type": "ListItem",
                   "position": 7,
                   "name": urlMappingJasaInteriorFurnitureCustome[cleanUrlJasaKonsFinishingPost],
                   "item": cleanUrlJasaKonsFinishingPost
               }
           ]
       };
       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
  if (urlMappingJasaFinishingInteriorModern[cleanUrlJasaKonsFinishingPost]) {
        restoreCondition('JasaFinishingBangunanPost');
        restoreCondition('JasaFinishingBangunanInteriorPost');
    
        restoreCondition('JasaFinishingInteriorModernPost');
           
	// hapus elemen id DIV Lain SELAIN JasaKonsFinishingPost
	removeCondition('JasaDesInPost');
        removeCondition('ProdukInFurPost');
        removeCondition('ProdukKonsSaluranPost');
        removeCondition('ProdukKonsPembatasPost');
        removeCondition('ProdukKonsDindingModularPost');
        removeCondition('ProdukKonsPost');
        removeCondition('MaterialKonsStukturPost');
        removeCondition('MaterialKonsFasadPelapisEksteriorPost');
	removeCondition('MaterialKonsAtapPenutupPost');
        removeCondition('JasaKonsPerkuatanTanahLongsorPost');
        removeCondition('JasaKonsPondasiTanahPost');
        removeCondition('JasaKonsPembatasPost');
        removeCondition('JasaKonsPerbaikanPost');
        removeCondition('JasaKonsCuttingBetonPost');
        removeCondition('JasaKonsPengeboranPost');
        removeCondition('JasaKonsBongkarBangunanPost');
        removeCondition('JasaKonsStrukturPost');
        removeCondition('JasaKonsAlatKonstruksiPost');
        removeCondition('JasaKonsJalanPerkerasanPost');
     //   removeCondition('JasaKonsFinishingPost');

	 // hapus elemen id FINISHING STRUKTUR SEMUA NYA
	removeCondition('JasaFinishingDakBetonPost');
        removeCondition('JasaFinishingBetonExposePost');
        removeCondition('JasaPlesteranAcianDindingPost');
        removeCondition('JasaFinishingGroutingStrukturBetonPost');
        removeCondition('JasaPelapisanCoatingStrukturPost');
        removeCondition('JasaFinishingKolomdanBalokPost');
        removeCondition('JasaPelapisanWaterproofingStrukturPost');
        removeCondition('JasaFinishingLantaiBetonPost');
        removeCondition('JasaPelindungRetakStrukturPost'); 
	// hapus elemen id sub JasaFinishingBangunanEksteriorPost Semua
        removeCondition('JasaCatEksteriorRumahPost');
        removeCondition('JasaFinishingFasadEksteriorPost');
        removeCondition('JasaPelapisanAntiCuacaPost');
        removeCondition('JasaPelapisanDindingLuarPost');
        removeCondition('JasaFinishingTamanRumahPost');
        removeCondition('JasaPelapisanBatuAlamEksteriorPost');
        removeCondition('JasaPelapisanGentengDakPost');
      
         // hapus elemen id sub JasaFinishingBangunanInteriorPost Semua selain JasaDesainInteriorPost
	    removeCondition('JasaEpoxyDindingPost');
        removeCondition('JasaInteriorFurnitureCustomePost');
        removeCondition('JasaInteriorFurniturePost');
        removeCondition('JasaGantiKeramikLantaiPost');
        removeCondition('JasaCatInteriorRumahPost');
        removeCondition('JasaPasangWallpaperDindingPost');
        removeCondition('JasaPasangLantaiVinylPost');
        removeCondition('JasaPasangPlafonGypsumPost');
        removeCondition('JasaGantiLampuInteriorPost');
        removeCondition('JasaGantiKitchenSetPost');
        removeCondition('JasaFinishingInteriorMinimalisPost');
        removeCondition('JasaFinishingInteriorKlasikPost');
        
       
         // hapus elemen id FINISHING UTAMA lain NYA
        removeCondition('JasaFinishingBangunanEksteriorPost');
        removeCondition('JasaFinishingBangunanStrukturPost');

          // hapus elemen id Infrastruktur Semua
        removeCondition('JasaFinishingInfrastrukturPost');
        removeCondition('JasaFinishingInfrastrukturJalanPost');
        removeCondition('JasaFinishingInfrastrukturTrotoarPost');
        removeCondition('JasaFinishingInfrastrukturSaluranPost');
        removeCondition('JasaFinishingInfrastrukturStrukturPost');
        removeCondition('JasaFinishingInfrastrukturProteksiPost');
       
        JasaKonstruksiFinishingPostLink.style.visibility = 'visible';
        JasaFinishingPostLink.style.visibility = 'visible';
        JasaFinishingBangunanPostLink.style.visibility = 'visible';
        //sub finishing bangunan
        JasaFinishingInteriorPostLink.style.visibility = 'visible';
        //sub finishing STRUKKTUR
        JasaFinishingInteriorModernPostLink.style.visibility = 'visible';
        pageNameJasaKonsFinishingPostLink.textContent = urlMappingJasaFinishingInteriorModern[cleanUrlJasaKonsFinishingPost];
    }
  // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaFinishingInteriorModern[cleanUrlJasaKonsFinishingPost]) {
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
                   "name": "Jasa Finishing Bangunan",
                   "item": "https://www.betonjayareadymix.com/p/jasa-finishing-bangunan.html"
               },
               {
                   "@type": "ListItem",
                   "position": 5,
                   "name": "Jasa Finishing Interior",
                   "item": "https://www.betonjayareadymix.com/p/jasa-finishing-interior.html"
               },
               {
                   "@type": "ListItem",
                   "position": 6,
                   "name": "Jasa Finishing Interior Modern",
                   "item": "https://www.betonjayareadymix.com/p/jasa-finishing-interior-modern.html"
               },
               {
                   "@type": "ListItem",
                   "position": 7,
                   "name": urlMappingJasaFinishingInteriorModern[cleanUrlJasaKonsFinishingPost],
                   "item": cleanUrlJasaKonsFinishingPost
               }
           ]
       };
       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
//AKHIR FINISHING INTERIOR

//SUB JasaFinishingBangunanEksteriorPost
if (urlMappingJasaFinishingFasadEksterior[cleanUrlJasaKonsFinishingPost]) {
        restoreCondition('JasaFinishingBangunanPost');
        restoreCondition('JasaFinishingBangunanEksteriorPost');
    
        restoreCondition('JasaFinishingFasadEksteriorPost');
           
	// hapus elemen id DIV Lain SELAIN JasaKonsFinishingPost
	removeCondition('JasaDesInPost');
        removeCondition('ProdukInFurPost');
        removeCondition('ProdukKonsSaluranPost');
        removeCondition('ProdukKonsPembatasPost');
        removeCondition('ProdukKonsDindingModularPost');
        removeCondition('ProdukKonsPost');
        removeCondition('MaterialKonsStukturPost');
        removeCondition('MaterialKonsFasadPelapisEksteriorPost');
	removeCondition('MaterialKonsAtapPenutupPost');
        removeCondition('JasaKonsPerkuatanTanahLongsorPost');
        removeCondition('JasaKonsPondasiTanahPost');
        removeCondition('JasaKonsPembatasPost');
        removeCondition('JasaKonsPerbaikanPost');
        removeCondition('JasaKonsCuttingBetonPost');
        removeCondition('JasaKonsPengeboranPost');
        removeCondition('JasaKonsBongkarBangunanPost');
        removeCondition('JasaKonsStrukturPost');
        removeCondition('JasaKonsAlatKonstruksiPost');
        removeCondition('JasaKonsJalanPerkerasanPost');
     //   removeCondition('JasaKonsFinishingPost');

	 // hapus elemen id FINISHING STRUKTUR SEMUA NYA
	removeCondition('JasaFinishingDakBetonPost');
        removeCondition('JasaFinishingBetonExposePost');
        removeCondition('JasaPlesteranAcianDindingPost');
        removeCondition('JasaFinishingGroutingStrukturBetonPost');
        removeCondition('JasaPelapisanCoatingStrukturPost');
        removeCondition('JasaFinishingKolomdanBalokPost');
        removeCondition('JasaPelapisanWaterproofingStrukturPost');
        removeCondition('JasaFinishingLantaiBetonPost');
        removeCondition('JasaPelindungRetakStrukturPost'); 
	// hapus elemen id sub JasaFinishingBangunanEksteriorPost Semua KECUALI JasaFinishingFasadEksteriorPost
        removeCondition('JasaCatEksteriorRumahPost');
        //removeCondition('');
        removeCondition('JasaPelapisanAntiCuacaPost');
        removeCondition('JasaPelapisanDindingLuarPost');
        removeCondition('JasaFinishingTamanRumahPost');
        removeCondition('JasaPelapisanBatuAlamEksteriorPost');
        removeCondition('JasaPelapisanGentengDakPost');
      
         // hapus elemen id sub JasaFinishingBangunanInteriorPost SEMUA
	    removeCondition('JasaEpoxyDindingPost');
        removeCondition('JasaInteriorFurnitureCustomePost');
        removeCondition('JasaGantiKeramikLantaiPost');
        removeCondition('JasaCatInteriorRumahPost');
        removeCondition('JasaPasangWallpaperDindingPost');
        removeCondition('JasaPasangLantaiVinylPost');
        removeCondition('JasaPasangPlafonGypsumPost');
        removeCondition('JasaGantiLampuInteriorPost');
        removeCondition('JasaGantiKitchenSetPost');
        removeCondition('JasaFinishingInteriorMinimalisPost');
        removeCondition('JasaFinishingInteriorKlasikPost');
        removeCondition('JasaFinishingInteriorModernPost');
       
         // hapus elemen id FINISHING UTAMA lain NYA
        removeCondition('JasaFinishingBangunanInteriorPost');
        removeCondition('JasaFinishingBangunanStrukturPost');

          // hapus elemen id Infrastruktur Semua
        removeCondition('JasaFinishingInfrastrukturPost');
        removeCondition('JasaFinishingInfrastrukturJalanPost');
        removeCondition('JasaFinishingInfrastrukturTrotoarPost');
        removeCondition('JasaFinishingInfrastrukturSaluranPost');
        removeCondition('JasaFinishingInfrastrukturStrukturPost');
        removeCondition('JasaFinishingInfrastrukturProteksiPost');
       
        JasaKonstruksiFinishingPostLink.style.visibility = 'visible';
        JasaFinishingPostLink.style.visibility = 'visible';
        JasaFinishingBangunanPostLink.style.visibility = 'visible';
        //JasaFinishingBangunanEksteriorPost
        JasaFinishingBangunanEksteriorPostLink.style.visibility = 'visible';
        //JasaFinishingFasadEksteriorPost
        JasaFinishingFasadEksteriorPostLink.style.visibility = 'visible';
	//pageNameJasaKonsFinishingPostLink.style.visibility = 'visible';
        pageNameJasaKonsFinishingPostLink.textContent = urlMappingJasaFinishingFasadEksterior[cleanUrlJasaKonsFinishingPost];
    }

  // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaFinishingFasadEksterior[cleanUrlJasaKonsFinishingPost]) {
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
                   "name": "Jasa Finishing Bangunan",
                   "item": "https://www.betonjayareadymix.com/p/jasa-finishing-bangunan.html"
               },
               {
                   "@type": "ListItem",
                   "position": 5,
                   "name": "Jasa Finishing Eksterior",
                   "item": "https://www.betonjayareadymix.com/p/jasa-finishing-eksterior.html"
               },
               {
                   "@type": "ListItem",
                   "position": 6,
                   "name": "Jasa Finishing Fasad Eksterior",
                   "item": "https://www.betonjayareadymix.com/p/jasa-finishing-fasad-eksterior.html"
               },
               {
                   "@type": "ListItem",
                   "position": 7,
                   "name": urlMappingJasaFinishingFasadEksterior[cleanUrlJasaKonsFinishingPost],
                   "item": cleanUrlJasaKonsFinishingPost
               }
           ]
       };
       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
if (urlMappingJasaFinishingTamanRumah[cleanUrlJasaKonsFinishingPost]) {
        restoreCondition('JasaFinishingBangunanPost');
        restoreCondition('JasaFinishingBangunanEksteriorPost');
    
        restoreCondition('JasaFinishingTamanRumahPost');
           
	// hapus elemen id DIV Lain SELAIN JasaKonsFinishingPost
	removeCondition('JasaDesInPost');
        removeCondition('ProdukInFurPost');
        removeCondition('ProdukKonsSaluranPost');
        removeCondition('ProdukKonsPembatasPost');
        removeCondition('ProdukKonsDindingModularPost');
        removeCondition('ProdukKonsPost');
        removeCondition('MaterialKonsStukturPost');
        removeCondition('MaterialKonsFasadPelapisEksteriorPost');
	removeCondition('MaterialKonsAtapPenutupPost');
        removeCondition('JasaKonsPerkuatanTanahLongsorPost');
        removeCondition('JasaKonsPondasiTanahPost');
        removeCondition('JasaKonsPembatasPost');
        removeCondition('JasaKonsPerbaikanPost');
        removeCondition('JasaKonsCuttingBetonPost');
        removeCondition('JasaKonsPengeboranPost');
        removeCondition('JasaKonsBongkarBangunanPost');
        removeCondition('JasaKonsStrukturPost');
        removeCondition('JasaKonsAlatKonstruksiPost');
        removeCondition('JasaKonsJalanPerkerasanPost');
     //   removeCondition('JasaKonsFinishingPost');

	 // hapus elemen id FINISHING STRUKTUR SEMUA NYA
	removeCondition('JasaFinishingDakBetonPost');
        removeCondition('JasaFinishingBetonExposePost');
        removeCondition('JasaPlesteranAcianDindingPost');
        removeCondition('JasaFinishingGroutingStrukturBetonPost');
        removeCondition('JasaPelapisanCoatingStrukturPost');
        removeCondition('JasaFinishingKolomdanBalokPost');
        removeCondition('JasaPelapisanWaterproofingStrukturPost');
        removeCondition('JasaFinishingLantaiBetonPost');
        removeCondition('JasaPelindungRetakStrukturPost'); 
	// hapus elemen id sub JasaFinishingBangunanEksteriorPost Semua KECUALI JasaFinishingFasadEksteriorPost
        removeCondition('JasaCatEksteriorRumahPost');
        //removeCondition('');
        removeCondition('JasaPelapisanAntiCuacaPost');
        removeCondition('JasaPelapisanDindingLuarPost');
        removeCondition('JasaFinishingFasadEksteriorPost');
        removeCondition('JasaPelapisanBatuAlamEksteriorPost');
        removeCondition('JasaPelapisanGentengDakPost');
      
         // hapus elemen id sub JasaFinishingBangunanInteriorPost SEMUA
        removeCondition('JasaEpoxyDindingPost');
        removeCondition('JasaInteriorFurnitureCustomePost');
        removeCondition('JasaGantiKeramikLantaiPost');
        removeCondition('JasaCatInteriorRumahPost');
        removeCondition('JasaPasangWallpaperDindingPost');
        removeCondition('JasaPasangLantaiVinylPost');
        removeCondition('JasaPasangPlafonGypsumPost');
        removeCondition('JasaGantiLampuInteriorPost');
        removeCondition('JasaGantiKitchenSetPost');
        removeCondition('JasaFinishingInteriorMinimalisPost');
        removeCondition('JasaFinishingInteriorKlasikPost');
        removeCondition('JasaFinishingInteriorModernPost');
       
         // hapus elemen id FINISHING UTAMA lain NYA
        removeCondition('JasaFinishingBangunanInteriorPost');
        removeCondition('JasaFinishingBangunanStrukturPost');

          // hapus elemen id Infrastruktur Semua
        removeCondition('JasaFinishingInfrastrukturPost');
        removeCondition('JasaFinishingInfrastrukturJalanPost');
        removeCondition('JasaFinishingInfrastrukturTrotoarPost');
        removeCondition('JasaFinishingInfrastrukturSaluranPost');
        removeCondition('JasaFinishingInfrastrukturStrukturPost');
        removeCondition('JasaFinishingInfrastrukturProteksiPost');
       
        JasaKonstruksiFinishingPostLink.style.visibility = 'visible';
        JasaFinishingPostLink.style.visibility = 'visible';
        JasaFinishingBangunanPostLink.style.visibility = 'visible';
        //JasaFinishingBangunanEksteriorPost
        JasaFinishingBangunanEksteriorPostLink.style.visibility = 'visible';
        //JasaFinishingTamanRumahPost
        JasaFinishingTamanRumahPostLink.style.visibility = 'visible';
        pageNameJasaKonsFinishingPostLink.textContent = urlMappingJasaFinishingTamanRumah[cleanUrlJasaKonsFinishingPost];
    }
 // ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaFinishingTamanRumah[cleanUrlJasaKonsFinishingPost]) {
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
                   "name": "Jasa Finishing Bangunan",
                   "item": "https://www.betonjayareadymix.com/p/jasa-finishing-bangunan.html"
               },
               {
                   "@type": "ListItem",
                   "position": 5,
                   "name": "Jasa Finishing Eksterior",
                   "item": "https://www.betonjayareadymix.com/p/jasa-finishing-eksterior.html"
               },
               {
                   "@type": "ListItem",
                   "position": 6,
                   "name": "Jasa Finishing Taman Rumah",
                   "item": "https://www.betonjayareadymix.com/p/jasa-finishing-taman-rumah.html"
               },
               {
                   "@type": "ListItem",
                   "position": 7,
                   "name": urlMappingJasaFinishingTamanRumah[cleanUrlJasaKonsFinishingPost],
                   "item": cleanUrlJasaKonsFinishingPost
               }
           ]
       };
       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
//AKHIR SUB JasaFinishingBangunanEksteriorPost
 //Sub Finishing Infrastruktur
	/*
    if (urlMappingFinishingInfrastrukturJalan[cleanUrlJasaKonsFinishingPost]) {
        restoreCondition('JasaFinishingInfrastrukturPost');
       restoreCondition('JasaFinishingInfrastrukturJalanPost');
     
          // hapus elemen id DIV Lain
        removeCondition('MaterialKons');
	       removeCondition('ProdukKons');
        //removeCondition('ProdukKonsSaluran');
        //removeCondition('ProdukKonsPembatas');
        removeCondition('JasaKonsPembatas');
        removeCondition('JasaKonsJalanPerkerasan');
        removeCondition('JasaKonsPondasiTanah');
        removeCondition('JasaKonsPerbaikan');
        removeCondition('JasaKonsStruktur');
       	removeCondition('JasaKons');
        removeCondition('JasaKonsPost');
        removeCondition('MenuKons');
     
     
            // hapus elemen id lain nya
        removeCondition('JasaFinishingInfrastrukturProteksiPost');
        removeCondition('JasaFinishingInfrastrukturTrotoarPost');
        removeCondition('JasaFinishingInfrastrukturSaluranPost');
        removeCondition('JasaFinishingInfrastrukturStrukturPost');
       //hapus elemen id bangunan
        removeCondition('JasaFinishingBangunanPost');
        removeCondition('JasaFinishingBangunanInterior');
        removeCondition('JasaFinishingBangunanEksterior');
        removeCondition('JasaFinishingBangunanStruktur');
    
        JasaKonstruksiFinishingPostLink.style.visibility = 'visible';
        JasaFinishingPostLink.style.visibility = 'visible';
        JasaFinishingInfrastrukturLink.style.visibility = 'visible';
       //sub finish infrastruktur
        JasaFinishingJalanLink.style.visibility = 'visible';
     
        pageNameJasaKonsFinishing.textContent = urlMappingFinishingInfrastrukturJalan[cleanUrlJasaKonsFinishingPost];

    }
   if (urlMappingFinishingInfrastrukturTrotoar[cleanUrlJasaKonsFinishingPost]) {
        restoreCondition('JasaFinishingInfrastrukturPost');
        restoreCondition('JasaFinishingTrotoar');
    
          // hapus elemen id DIV Lain
        removeCondition('MaterialKons');
	       removeCondition('ProdukKons');
        //removeCondition('ProdukKonsSaluran');
        //removeCondition('ProdukKonsPembatas');
        removeCondition('JasaKonsPembatas');
        removeCondition('JasaKonsJalanPerkerasan');
        removeCondition('JasaKonsPondasiTanah');
        removeCondition('JasaKonsPerbaikan');
        removeCondition('JasaKonsStruktur');
       	removeCondition('JasaKons');
        removeCondition('JasaKonsPost');
        removeCondition('MenuKons');
       
  
            // hapus elemen id lain nya
        removeCondition('JasaFinishingInfrastrukturJalanPost');
        removeCondition('JasaFinishingInfrastrukturProteksiPost');
        removeCondition('JasaFinishingInfrastrukturSaluranPost');
        removeCondition('JasaFinishingInfrastrukturStrukturPost');
       //hapus elemen id bangunan
        removeCondition('JasaFinishingBangunanPost');
        removeCondition('JasaFinishingBangunanInterior');
        removeCondition('JasaFinishingBangunanEksterior');
        removeCondition('JasaFinishingBangunanStruktur');
    
        JasaKonstruksiFinishingPostLink.style.visibility = 'visible';
        JasaFinishingPostLink.style.visibility = 'visible';
        JasaFinishingInfrastrukturLink.style.visibility = 'visible';
       //sub finish infrastruktur
        JasaFinishingTrotoarLink.style.visibility = 'visible';
    
        pageNameJasaKonsFinishing.textContent = urlMappingFinishingInfrastrukturTrotoar[cleanUrlJasaKonsFinishingPost];

    }
   if (urlMappingFinishingInfrastrukturSaluran[cleanUrlJasaKonsFinishingPost]) {
        restoreCondition('JasaFinishingInfrastrukturPost');
        restoreCondition('JasaFinishingSaluran');
    
          // hapus elemen id DIV Lain
        removeCondition('MaterialKons');
	       removeCondition('ProdukKons');
        //removeCondition('ProdukKonsSaluran');
        //removeCondition('ProdukKonsPembatas');
        removeCondition('JasaKonsJalanPerkerasan');
        removeCondition('JasaKonsPondasiTanah');
        removeCondition('JasaKonsPembatas');
        removeCondition('JasaKonsPerbaikan');
        removeCondition('JasaKonsStruktur');
       	removeCondition('JasaKons');
        removeCondition('JasaKonsPost');
        removeCondition('MenuKons');

  
       
            // hapus elemen id lain nya
        removeCondition('JasaFinishingInfrastrukturJalanPost');
        removeCondition('JasaFinishingInfrastrukturTrotoarPost');
        removeCondition('JasaFinishingInfrastrukturProteksiPost');
        removeCondition('JasaFinishingInfrastrukturStrukturPost');
       //hapus elemen id bangunan
        removeCondition('JasaFinishingBangunanPost');
        removeCondition('JasaFinishingBangunanInterior');
        removeCondition('JasaFinishingBangunanEksterior');
        removeCondition('JasaFinishingBangunanStruktur');
    
        JasaKonstruksiFinishingPostLink.style.visibility = 'visible';
        JasaFinishingPostLink.style.visibility = 'visible';
        JasaFinishingInfrastrukturLink.style.visibility = 'visible';
       //sub finish infrastruktur
        JasaFinishingSaluranLink.style.visibility = 'visible';
   
        pageNameJasaKonsFinishing.textContent = urlMappingFinishingInfrastrukturSaluran[cleanUrlJasaKonsFinishingPost];

    }
  if (urlMappingFinishingInfrastrukturStruktur[cleanUrlJasaKonsFinishingPost]) {
        restoreCondition('JasaFinishingInfrastrukturPost');
        restoreCondition('JasaFinishingInfrastrukturStrukturPost');
          // hapus elemen id DIV Lain
        removeCondition('MaterialKons');
	       removeCondition('ProdukKons');
        //removeCondition('ProdukKonsSaluran');
        //removeCondition('ProdukKonsPembatas');
        removeCondition('JasaKonsPembatas');
        removeCondition('JasaKonsJalanPerkerasan');
        removeCondition('JasaKonsPondasiTanah');
        removeCondition('JasaKonsPerbaikan');
        removeCondition('JasaKonsStruktur');
       	removeCondition('JasaKons');
        removeCondition('JasaKonsPost');
        removeCondition('MenuKons');

             // hapus elemen id lain nya
        removeCondition('JasaFinishingInfrastrukturJalanPost');
        removeCondition('JasaFinishingInfrastrukturTrotoarPost');
        removeCondition('JasaFinishingInfrastrukturSaluranPost');
        removeCondition('JasaFinishingInfrastrukturProteksiPost');
       //hapus elemen id bangunan
        removeCondition('JasaFinishingBangunanPost');
        removeCondition('JasaFinishingBangunanInterior');
        removeCondition('JasaFinishingBangunanEksterior');
        removeCondition('JasaFinishingBangunanStruktur');
     
        JasaKonstruksiFinishingPostLink.style.visibility = 'visible';
        JasaFinishingPostLink.style.visibility = 'visible';
        JasaFinishingInfrastrukturLink.style.visibility = 'visible';
        //sub finish infrastruktur
        JasaFinishingStrukturLink.style.visibility = 'visible';
   
        pageNameJasaKonsFinishing.textContent = urlMappingFinishingInfrastrukturStruktur[cleanUrlJasaKonsFinishingPost];

    }
  if (urlMappingFinishingInfrastrukturProteksi[cleanUrlJasaKonsFinishingPost]) {
        restoreCondition('JasaFinishingInfrastrukturPost');
        restoreCondition('JasaFinishingInfrastrukturProteksiPost');
       
          // hapus elemen id DIV Lain
        removeCondition('MaterialKons');
	       removeCondition('ProdukKons');
        //removeCondition('ProdukKonsSaluran');
        //removeCondition('ProdukKonsPembatas');
        removeCondition('JasaKonsPembatas');
        removeCondition('JasaKonsJalanPerkerasan');
        removeCondition('JasaKonsPondasiTanah');
        removeCondition('JasaKonsPerbaikan');
        removeCondition('JasaKonsStruktur');
       	removeCondition('JasaKons');
        removeCondition('JasaKonsPost');
        removeCondition('MenuKons');
     
       
        // hapus elemen id lain nya
        removeCondition('JasaFinishingInfrastrukturJalanPost');
        removeCondition('JasaFinishingInfrastrukturTrotoarPost');
        removeCondition('JasaFinishingInfrastrukturSaluranPost');
        removeCondition('JasaFinishingInfrastrukturStrukturPost');
       //hapus elemen id bangunan
        removeCondition('JasaFinishingBangunanPost');
        removeCondition('JasaFinishingBangunanInterior');
        removeCondition('JasaFinishingBangunanEksterior');
        removeCondition('JasaFinishingBangunanStruktur');
       
        JasaKonstruksiFinishingPostLink.style.visibility = 'visible';
        JasaFinishingPostLink.style.visibility = 'visible';
        JasaFinishingInfrastrukturLink.style.visibility = 'visible';
       //sub finish infrastruktur
        JasaFinishingProteksiLink.style.visibility = 'visible';
   
        pageNameJasaKonsFinishing.textContent = urlMappingFinishingInfrastrukturProteksi[cleanUrlJasaKonsFinishingPost];

    }
    */

   });
