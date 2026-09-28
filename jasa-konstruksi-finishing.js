// ============================================================
// JASA KONSTRUKSI FINISHING — POST
// v2.2.0 — Early Exit v2.0.0 + Fix v2.1.0 + Pendekatan C
// ============================================================

console.log('[jasa-konstruksi-finishing] 📄 File loaded, waiting for DOM...');

// ═══════════════════════════════════════════════════════════
// [BAGIAN 1] DEFINISI SEMUA MAPPING
// ═══════════════════════════════════════════════════════════

const urlMappingJasaPasangLantaiVinylFromMoneyPageMoneyPage1 = {
  "https://www.betonjayareadymix.com/p/jasa-pasang-vinyl-tangga.html": "Jasa Pasang Vinyl Tangga"
};

const urlMappingHargaJasaPasangLantaiVinylFromMoneyPageMoneyPage1 = {
  "https://www.betonjayareadymix.com/p/harga-jasa-pasang-vinyl-per-meter.html": "Harga Jasa Pasang Vinyl Per Meter"
};

const urlMappingJasaPasangPVCFromMoneyMaster1MoneyPage = {
  "https://www.betonjayareadymix.com/p/jasa-pasang-pvc-dinding.html": "Jasa Pasang PVC Dinding",
  "https://www.betonjayareadymix.com/p/jasa-pasang-pvc-lantai.html": "Jasa Pasang PVC Lantai"
};

const urlMappingJasaPasangPlafonFromMoneyMaster1MoneyPage = {
  "https://www.betonjayareadymix.com/p/jasa-pasang-plafon-wpc-premium.html": "Jasa Pasang Plafon WPC Premium",
  "https://www.betonjayareadymix.com/p/jasa-pasang-plafon-wpc.html": "Jasa Pasang Plafon WPC",
  "https://www.betonjayareadymix.com/p/jasa-pasang-plafon-gypsum.html": "Jasa Pasang Plafon Gypsum",
  "https://www.betonjayareadymix.com/p/jasa-pasang-plafon-pvc.html": "Jasa Pasang Plafon PVC",
  "https://www.betonjayareadymix.com/p/jasa-pasang-plafon-grc.html": "Jasa Pasang Plafon GRC",
  "https://www.betonjayareadymix.com/p/jasa-pasang-plafon-akustik.html": "Jasa Pasang Plafon Akustik",
  "https://www.betonjayareadymix.com/p/jasa-pasang-plafon-upvc.html": "Jasa Pasang Plafon UPVC"
};

const urlMappingFinishingBangunanFromMoneyMaster1MoneyPage = {
  "https://www.betonjayareadymix.com/p/jasa-finishing-rumah.html": "Jasa Finishing Rumah",
  "https://www.betonjayareadymix.com/p/jasa-finishing-gedung.html": "Jasa Finishing Gedung",
  "https://www.betonjayareadymix.com/p/jasa-finishing-ruko.html": "Jasa Finishing Ruko",
  "https://www.betonjayareadymix.com/p/jasa-finishing-pabrik.html": "Jasa Finishing Pabrik",
  "https://www.betonjayareadymix.com/p/jasa-finishing-bangunan-modern.html": "Jasa Finishing Bangunan Modern",
  "https://www.betonjayareadymix.com/p/jasa-finishing-bangunan-minimalis.html": "Jasa Finishing Bangunan Minimalis",
  "https://www.betonjayareadymix.com/p/jasa-finishing-kantor.html": "Jasa Finishing Kantor",
  "https://www.betonjayareadymix.com/p/jasa-finishing-toko.html": "Jasa Finishing Toko",
  "https://www.betonjayareadymix.com/p/jasa-finishing-hotel.html": "Jasa Finishing Hotel",
  "https://www.betonjayareadymix.com/p/jasa-finishing-apartemen.html": "Jasa Finishing Apartemen",
  "https://www.betonjayareadymix.com/p/jasa-finishing-mewah.html": "Jasa Finishing Mewah"
};

const urlMappingHargaJasaPembuatanFurnitureFromMoneyPageMoneyPage1 = {
  "https://www.betonjayareadymix.com/p/harga-custom-furniture-per-meter.html": "Harga Custom Furniture Per Meter"
};

const urlMappingFinishingDindingFromMoneyMaster1MoneyPage = {
  "https://www.betonjayareadymix.com/p/jasa-finishing-dinding-wallpaper.html": "Jasa Finishing Dinding Wallpaper",
  "https://www.betonjayareadymix.com/p/jasa-finishing-epoxy-dinding.html": "Jasa Finishing Epoxy Dinding",
  "https://www.betonjayareadymix.com/p/jasa-plesteran-acian-dinding.html": "Jasa Plesteran & Acian Dinding",
  "https://www.betonjayareadymix.com/p/jasa-finishing-dinding-ekspos.html": "Jasa Finishing Dinding Ekspos",
  "https://www.betonjayareadymix.com/p/jasa-finishing-wpc-dinding.html": "Jasa Finishing WPC Dinding",
  "https://www.betonjayareadymix.com/p/jasa-finishing-pvc-dinding.html": "Jasa Finishing PVC Dinding",
  "https://www.betonjayareadymix.com/p/jasa-finishing-wall-moulding.html": "Jasa Finishing Wall Moulding",
  "https://www.betonjayareadymix.com/p/jasa-finishing-dinding-rumah.html": "Jasa Finishing Dinding Rumah",
  "https://www.betonjayareadymix.com/p/jasa-finishing-dinding-kantor.html": "Jasa Finishing Dinding Kantor",
  "https://www.betonjayareadymix.com/p/jasa-finishing-dinding-hotel.html": "Jasa Finishing Dinding Hotel",
  "https://www.betonjayareadymix.com/p/jasa-finishing-dinding-restoran.html": "Jasa Finishing Dinding Restoran"
};

const urlMappingJasaPasangWallpaperDindingFromMoneyPageMoneyPage1 = {
  "https://www.betonjayareadymix.com/p/harga-jasa-pasang-wallpaper-per-meter.html": "Harga Jasa Pasang Wallpaper per Meter",
  "https://www.betonjayareadymix.com/p/jasa-pasang-wallpaper-3d.html": "Jasa Pasang Wallpaper 3D",
  "https://www.betonjayareadymix.com/p/jasa-pasang-wallpaper-custom.html": "Jasa Pasang Wallpaper Custom",
  "https://www.betonjayareadymix.com/p/jasa-pasang-wallpaper-kamar-tidur.html": "Jasa Pasang Wallpaper Kamar Tidur",
  "https://www.betonjayareadymix.com/p/jasa-pasang-wallpaper-ruang-tamu.html": "Jasa Pasang Wallpaper Ruang Tamu"
};

const urlMappingJasaFinishingEpoxyDindingFromMoneyPageMoneyPage1 = {
  "https://www.betonjayareadymix.com/p/harga-jasa-epoxy-dinding-per-meter.html": "Harga Jasa Finishing Epoxy Dinding Per Meter"
};

const urlMappingJasaPlesteranAcianDindingFromMoneyPageMoneyPage1 = {
  "https://www.betonjayareadymix.com/p/harga-jasa-plesteran-acian.html": "Harga Jasa Plesteran & Acian"
};

const urlMappingHargaJasaPlesteranAcianFromMoneyPage1MoneyPage2 = {
  "https://www.betonjayareadymix.com/p/harga-jasa-plesteran-acian-per-meter.html": "Harga Jasa Plesteran & Acian Per Meter",
  "https://www.betonjayareadymix.com/p/harga-jasa-borongan-plesteran-acian.html": "Harga Jasa Borongan Plesteran & Acian"
};

const urlMappingJasaPasangWpcFromMoneyMaster1MoneyPage = {
  "https://www.betonjayareadymix.com/p/harga-jasa-pasang-wpc.html": "Harga Jasa Pasang WPC",
  "https://www.betonjayareadymix.com/p/jasa-pasang-wpc-lantai.html": "Jasa Pasang WPC Lantai",
  "https://www.betonjayareadymix.com/p/jasa-pasang-wpc-dinding.html": "Jasa Pasang WPC Dinding"
};

const urlMappingJasaPasangWPCDindingFromMoneyPageMoneyPage1 = {
  "https://www.betonjayareadymix.com/p/jasa-pasang-wpc-dinding-per-meter.html": "Jasa Pasang WPC Dinding Per Meter",
  "https://www.betonjayareadymix.com/p/harga-jasa-pasang-wpc-dinding.html": "Harga Jasa Pasang WPC Dinding"
};

const urlMappingJasaPasangWPCLantaiFromMoneyPageMoneyPage1 = {
  "https://www.betonjayareadymix.com/p/harga-jasa-pasang-wpc-lantai.html": "Harga Jasa Pasang WPC Lantai"
};

const urlMappingFinishingLantaiFromMoneyMasterMoneyPage = {
  "https://www.betonjayareadymix.com/p/harga-jasa-finishing-lantai.html": "Harga Jasa Finishing Lantai",
  "https://www.betonjayareadymix.com/p/jasa-finishing-lantai-beton.html": "Jasa Finishing Lantai Beton",
  "https://www.betonjayareadymix.com/p/jasa-finishing-lantai-keramik.html": "Jasa Finishing Lantai Keramik",
  "https://www.betonjayareadymix.com/p/jasa-finishing-lantai-marmer.html": "Jasa Finishing Lantai Marmer",
  "https://www.betonjayareadymix.com/p/jasa-finishing-lantai-granit.html": "Jasa Finishing Lantai Granit",
  "https://www.betonjayareadymix.com/p/jasa-finishing-lantai-kayu.html": "Jasa Finishing Lantai Kayu",
  "https://www.betonjayareadymix.com/p/jasa-finishing-lantai-epoxy.html": "Jasa Finishing Lantai Epoxy"
};

const urlMappingHargaJasaFinishingLantaiFromMoneyPageMoneyPage1 = {
  "https://www.betonjayareadymix.com/p/harga-jasa-finishing-lantai-gudang.html": "Harga Jasa Finishing Lantai Gudang"
};

const urlMappingJasaFinishingLantaiBetonFromMoneyPageMoneyPage1 = {
  "https://www.betonjayareadymix.com/p/harga-jasa-finishing-lantai-beton.html": "Harga Jasa Finishing Lantai Beton",
  "https://www.betonjayareadymix.com/p/jasa-poles-lantai-beton.html": "Jasa Poles Lantai Beton",
  "https://www.betonjayareadymix.com/p/jasa-finishing-lantai-beton-ekspos.html": "Jasa Finishing Lantai Beton Ekspos",
  "https://www.betonjayareadymix.com/p/jasa-waterproofing-lantai-beton-baru.html": "Jasa Waterproofing Lantai Beton Baru",
  "https://www.betonjayareadymix.com/p/jasa-lantai-super-flat.html": "Jasa Lantai Super Flat",
  "https://www.betonjayareadymix.com/p/jasa-lapangan-super-flat.html": "Jasa Lapangan Super Flat",
  "https://www.betonjayareadymix.com/p/jasa-trowel-lantai-beton.html": "Jasa Trowel Lantai Beton",
  "https://www.betonjayareadymix.com/p/jasa-screeding-lantai-beton.html": "Jasa Screeding Lantai Beton",
  "https://www.betonjayareadymix.com/p/jasa-perataan-lantai-beton.html": "Jasa Perataan Lantai Beton",
  "https://www.betonjayareadymix.com/p/jasa-floor-hardener-lantai.html": "Jasa Floor Hardener Lantai",
  "https://www.betonjayareadymix.com/p/jasa-self-leveling-lantai.html": "Jasa Self Leveling Lantai",
  "https://www.betonjayareadymix.com/p/jasa-coating-lantai-beton.html": "Jasa Coating Lantai Beton",
  "https://www.betonjayareadymix.com/p/jasa-pelapisan-lantai-beton.html": "Jasa Pelapisan Lantai Beton",
  "https://www.betonjayareadymix.com/p/jasa-grinding-lantai-beton.html": "Jasa Grinding Lantai Beton"
};

const urlMappingJasaFinishingLantaiKayuFromMoneyPageMoneyPage1 = {};

const urlMappingJasaFinishingLantaiMarmerFromMoneyPageMoneyPage1 = {
  "https://www.betonjayareadymix.com/p/jasa-poles-lantai-marmer.html": "Jasa Poles Lantai Marmer"
};

const urlMappingJasaPolesLantaiGranitFromMoneyPageMoneyPage1 = {
  "https://www.betonjayareadymix.com/p/jasa-poles-lantai-granit.html": "Jasa Poles Lantai Granit"
};

const urlMappingJasaPasangKeramikLantaiFromMoneyPageMoneyPage1 = {
  "https://www.betonjayareadymix.com/p/harga-jasa-pasang-keramik-lantai.html": "Harga Jasa Pasang Keramik Lantai",
  "https://www.betonjayareadymix.com/p/jasa-pasang-keramik-lantai-24-jam.html": "Jasa Pasang Keramik Lantai 24 Jam",
  "https://www.betonjayareadymix.com/p/jasa-pasang-keramik-lantai-rumah.html": "Jasa Pasang Keramik Lantai Rumah",
  "https://www.betonjayareadymix.com/p/jasa-pasang-keramik-lantai-kantor.html": "Jasa Pasang Keramik Lantai Kantor",
  "https://www.betonjayareadymix.com/p/jasa-pasang-keramik-lantai-gudang.html": "Jasa Pasang Keramik Lantai Gudang"
};

const urlMappingHargaJasaPasangKeramikLantaiFromMoneyPage1MoneyPage2 = {
  "https://www.betonjayareadymix.com/p/harga-jasa-pasang-keramik-per-meter.html": "Harga Jasa Pasang Keramik per Meter",
  "https://www.betonjayareadymix.com/p/harga-borongan-pasang-keramik-per-meter.html": "Harga Borongan Pasang Keramik per Meter",
  "https://www.betonjayareadymix.com/p/jasa-pasang-keramik-lantai-murah.html": "Jasa Pasang Keramik Lantai Murah"
};

const urlMappingJasaLantaiSuperFlatFromMoneyPage1MoneyPage2 = {
  "https://www.betonjayareadymix.com/p/harga-jasa-lapangan-super-flat.html": "Harga Jasa Lapangan Super Flat",
  "https://www.betonjayareadymix.com/p/harga-jasa-lantai-super-flat.html": "Harga Jasa Lantai Super Flat"
};

const urlMappingJasaTrowelLantaiBetonFromMoneyPage1MoneyPage2 = {
  "https://www.betonjayareadymix.com/p/harga-jasa-trowel-lantai.html": "Harga Jasa Trowel Lantai",
  "https://www.betonjayareadymix.com/p/harga-jasa-trowel-floor-hardener.html": "Harga Jasa Trowel Floor Hardener",
  "https://www.betonjayareadymix.com/p/harga-jasa-finishing-trowel.html": "Harga Jasa finishing Trowel"
};

const urlMappingJasaScreedingLantaiBetonFromMoneyPage1MoneyPage2 = {
  "https://www.betonjayareadymix.com/p/harga-jasa-screeding-per-meter.html": "Harga Jasa Screeding Per Meter",
  "https://www.betonjayareadymix.com/p/harga-jasa-screeding-lantai.html": "Harga Jasa Screeding Lantai"
};

const urlMappingJasaFloorHardenerLantaiFromMoneyPage1MoneyPage2 = {
  "https://www.betonjayareadymix.com/p/harga-jasa-floor-hardener.html": "Harga Jasa Floor Hardener"
};

const urlMappingJasaFinishingLantaiEpoxyFromMoneyPageMoney1Page2 = {
  "https://www.betonjayareadymix.com/p/harga-jasa-epoxy-lantai-per-meter.html": "Harga Jasa Finishing Epoxy Lantai Per Meter"
};

const urlMappingFinishingInteriorFromMoneyMasterMoneyPage = {
  "https://www.betonjayareadymix.com/p/jasa-finishing-interior-kantor.html": "Jasa Finishing Interior Kantor",
  "https://www.betonjayareadymix.com/p/jasa-finishing-interior-apartemen.html": "Jasa Finishing Interior Apartemen",
  "https://www.betonjayareadymix.com/p/jasa-finishing-interior-rumah.html": "Jasa Finishing Interior Rumah",
  "https://www.betonjayareadymix.com/p/jasa-finishing-interior-minimalis.html": "Jasa Finishing Interior Minimalis",
  "https://www.betonjayareadymix.com/p/jasa-finishing-interior-klasik.html": "Jasa Finishing Interior Klasik",
  "https://www.betonjayareadymix.com/p/jasa-finishing-interior-modern.html": "Jasa Finishing Interior Modern"
};

const urlMappingJasaInteriorFromMoneyMasterMoneyPage = {
  "https://www.betonjayareadymix.com/p/harga-jasa-interior.html": "Harga Jasa Interior"
};

const urlMappingHargaJasaInteriorFromMoneyPageMoneyPage = {
  "https://www.betonjayareadymix.com/p/harga-jasa-interior-per-meter.html": "Harga Jasa Interior Per Meter",
  "https://www.betonjayareadymix.com/p/harga-jasa-borongan-interior.html": "Harga Jasa Borongan Interior",
  "https://www.betonjayareadymix.com/p/harga-jasa-interior-kamar-tidur.html": "Harga Jasa Interior Kamar Tidur",
  "https://www.betonjayareadymix.com/p/harga-jasa-interior-ruang-tamu.html": "Harga Jasa Interior Ruang Tamu"
};

const urlMappingJasaPasangLampuFromMoneyMaster1MoneyPage = {
  "https://www.betonjayareadymix.com/p/jasa-pasang-lampu-smart-home.html": "Jasa Pasang Lampu Smart Home",
  "https://www.betonjayareadymix.com/p/jasa-pasang-lampu-downlight.html": "Jasa Pasang Lampu Downlight",
  "https://www.betonjayareadymix.com/p/jasa-pasang-lampu-led.html": "Jasa Pasang Lampu LED",
  "https://www.betonjayareadymix.com/p/jasa-pasang-lampu-track.html": "Jasa Pasang Lampu Track",
  "https://www.betonjayareadymix.com/p/jasa-pasang-lampu-gantung.html": "Jasa Pasang Lampu Gantung",
  "https://www.betonjayareadymix.com/p/jasa-pasang-lampu-tembak.html": "Jasa Pasang Lampu Tembak",
  "https://www.betonjayareadymix.com/p/jasa-pasang-lampu-interior.html": "Jasa Pasang Lampu Interior",
  "https://www.betonjayareadymix.com/p/jasa-pasang-lampu-eksterior.html": "Jasa Pasang Lampu Eksterior",
  "https://www.betonjayareadymix.com/p/jasa-pasang-lampu-taman.html": "Jasa Pasang Lampu Taman"
};

const urlMappingJasaPasangLampuInteriorFromMoneyPageMoneyPage1 = {
  "https://www.betonjayareadymix.com/p/harga-jasa-pasang-lampu-interior.html": "Harga Jasa Pasang Lampu Interior",
  "https://www.betonjayareadymix.com/p/harga-borongan-pasang-lampu-interior.html": "Harga Borongan Pasang Lampu Interior",
  "https://www.betonjayareadymix.com/p/jasa-pasang-lampu-interior-modern.html": "Jasa Pasang Lampu Interior Modern",
  "https://www.betonjayareadymix.com/p/jasa-pasang-lampu-interior-minimalis.html": "Jasa Pasang Lampu Interior Minimalis",
  "https://www.betonjayareadymix.com/p/jasa-pasang-lampu-interior-rumah.html": "Jasa Pasang Lampu Interior Rumah",
  "https://www.betonjayareadymix.com/p/jasa-pasang-lampu-interior-gedung.html": "Jasa Pasang Lampu Interior Gedung",
  "https://www.betonjayareadymix.com/p/jasa-pasang-lampu-kamar-tidur.html": "Jasa Pasang Lampu Kamar Tidur",
  "https://www.betonjayareadymix.com/p/jasa-pasang-lampu-ruang-tamu.html": "Jasa Pasang Lampu Ruang Tamu",
  "https://www.betonjayareadymix.com/p/jasa-pasang-lampu-dapur.html": "Jasa Pasang Lampu Dapur",
  "https://www.betonjayareadymix.com/p/jasa-pasang-lampu-kantor.html": "Jasa Pasang Lampu Kantor"
};

const urlMappingJasaPasangLampuEksteriorFromMoneyPageMoneyPage1 = {
  "https://www.betonjayareadymix.com/p/harga-jasa-pasang-lampu-eksterior.html": "Harga Jasa Pasang Lampu Eksterior"
};

const urlMappingJasaPasangLampuTamanFromMoneyPageMoneyPage1 = {
  "https://www.betonjayareadymix.com/p/harga-jasa-pasang-lampu-taman.html": "Harga Jasa Pasang Lampu Taman"
};

const urlMappingJasaFinishingLampuFromMoneyMaster1MoneyPage = {
  "https://www.betonjayareadymix.com/p/jasa-finishing-lampu-taman.html": "Jasa Finishing Lampu Taman",
  "https://www.betonjayareadymix.com/p/jasa-finishing-lampu-cafe.html": "Jasa Finishing Lampu Cafe",
  "https://www.betonjayareadymix.com/p/jasa-finishing-lampu-hotel.html": "Jasa Finishing Lampu Hotel",
  "https://www.betonjayareadymix.com/p/jasa-finishing-lampu-kantor.html": "Jasa Finishing Lampu Kantor"
};

const urlMappingJasaFinishingLampuCafeFromMoneyPageMoneyPage = {
  "https://www.betonjayareadymix.com/p/harga-jasa-finishing-lampu-cafe.html": "Harga Jasa Finishing Lampu Cafe"
};

const urlMappingJasaFinishingLampuHotelFromMoneyPageMoneyPage = {
  "https://www.betonjayareadymix.com/p/harga-jasa-finishing-lampu-hotel.html": "Harga Jasa Finishing Lampu Hotel"
};

const urlMappingJasaFinishingLampuKantorFromMoneyPageMoneyPage = {
  "https://www.betonjayareadymix.com/p/harga-jasa-finishing-lampu-kantor.html": "Harga Jasa Finishing Lampu Kantor"
};

const urlMappingJasaCatFromMoneyMaster1MoneyPage = {
  "https://www.betonjayareadymix.com/p/harga-jasa-cat.html": "Harga Jasa Cat",
  "https://www.betonjayareadymix.com/p/jasa-cat-permukaan-khusus.html": "Jasa Cat Permukaan Khusus",
  "https://www.betonjayareadymix.com/p/jasa-cat-dinding.html": "Jasa Cat Dinding",
  "https://www.betonjayareadymix.com/p/jasa-finishing-cat.html": "Jasa Finishing Cat",
  "https://www.betonjayareadymix.com/p/jasa-cat-interior.html": "Jasa Cat Interior",
  "https://www.betonjayareadymix.com/p/jasa-cat-eksterior.html": "Jasa Cat Eksterior"
};

const urlMappingHargaJasaCatFromMoneyPageMoneyPage1 = {
  "https://www.betonjayareadymix.com/p/harga-jasa-cat-interior-per-meter.html": "Harga Jasa Cat Interior Per Meter",
  "https://www.betonjayareadymix.com/p/harga-borongan-cat-interior-per-meter.html": "Harga Borongan Cat Interior Per Meter",
  "https://www.betonjayareadymix.com/p/harga-jasa-cat-eksterior-per-meter.html": "Harga Jasa Cat Eksterior Per Meter",
  "https://www.betonjayareadymix.com/p/harga-borongan-cat-eksterior-per-meter.html": "Harga Borongan Cat Eksterior Per Meter"
};

const urlMappingJasaCatPermukaanKhususFromMoneyPageMoneyPage1 = {
  "https://www.betonjayareadymix.com/p/jasa-cat-plafon-eksterior.html": "Jasa Cat Plafon Eksterior",
  "https://www.betonjayareadymix.com/p/jasa-cat-kayu-eksterior.html": "Jasa Cat Kayu Eksterior",
  "https://www.betonjayareadymix.com/p/jasa-cat-besi-interior.html": "Jasa Cat Besi Interior",
  "https://www.betonjayareadymix.com/p/jasa-cat-besi-eksterior.html": "Jasa Cat Besi Eksterior",
  "https://www.betonjayareadymix.com/p/jasa-cat-genteng.html": "Jasa Cat Genteng",
  "https://www.betonjayareadymix.com/p/jasa-cat-atap.html": "Jasa Cat Atap",
  "https://www.betonjayareadymix.com/p/jasa-cat-pagar.html": "Jasa Cat Pagar",
  "https://www.betonjayareadymix.com/p/jasa-cat-kolam-renang.html": "Jasa Cat Kolam Renang",
  "https://www.betonjayareadymix.com/p/jasa-cat-lantai.html": "Jasa Cat Lantai",
  "https://www.betonjayareadymix.com/p/jasa-cat-beton.html": "Jasa Cat Beton",
  "https://www.betonjayareadymix.com/p/jasa-cat-paving-block.html": "Jasa Cat Paving Block",
  "https://www.betonjayareadymix.com/p/jasa-cat-keramik.html": "Jasa Cat Keramik"
};

const urlMappingJasaCatDindingFromMoneyPageMoneyPage1 = {
  "https://www.betonjayareadymix.com/p/jasa-cat-dinding-interior.html": "Jasa Cat Dinding Interior",
  "https://www.betonjayareadymix.com/p/jasa-cat-dinding-eksterior.html": "Jasa Cat Dinding Eksterior"
};

const urlMappingJasaFinishingCatFromMoneyPageMoneyPage1 = {
  "https://www.betonjayareadymix.com/p/jasa-finishing-cat-interior.html": "Jasa Finishing Cat Interior",
  "https://www.betonjayareadymix.com/p/jasa-finishing-cat-eksterior.html": "Jasa Finishing Cat Eksterior",
  "https://www.betonjayareadymix.com/p/jasa-finishing-cat-dinding.html": "Jasa Finishing Cat Dinding",
  "https://www.betonjayareadymix.com/p/jasa-finishing-cat-kayu.html": "Jasa Finishing Cat Kayu",
  "https://www.betonjayareadymix.com/p/jasa-finishing-cat-besi.html": "Jasa Finishing Cat Besi",
  "https://www.betonjayareadymix.com/p/jasa-finishing-cat-modern.html": "Jasa Finishing Cat Modern",
  "https://www.betonjayareadymix.com/p/jasa-finishing-cat-minimalis.html": "Jasa Finishing Cat Minimalis",
  "https://www.betonjayareadymix.com/p/jasa-finishing-cat-mewah.html": "Jasa Finishing Cat Mewah",
  "https://www.betonjayareadymix.com/p/jasa-finishing-cat-tahan-lama.html": "Jasa Finishing Cat Tahan Lama",
  "https://www.betonjayareadymix.com/p/jasa-finishing-cat-anti-bocor.html": "Jasa Finishing Cat Anti Bocor",
  "https://www.betonjayareadymix.com/p/jasa-finishing-cat-epoxy.html": "Jasa Finishing Cat Epoxy"
};

const urlMappingJasaCatInteriorFromMoneyPageMoneyPage1 = {
  "https://www.betonjayareadymix.com/p/jasa-cat-interior-rumah.html": "Jasa Cat Interior Rumah",
  "https://www.betonjayareadymix.com/p/jasa-cat-interior-modern.html": "Jasa Cat Interior Modern",
  "https://www.betonjayareadymix.com/p/jasa-cat-interior-minimalis.html": "Jasa Cat Interior Minimalis",
  "https://www.betonjayareadymix.com/p/jasa-cat-interior-apartemen.html": "Jasa Cat Interior Apartemen",
  "https://www.betonjayareadymix.com/p/jasa-cat-interior-gedung.html": "Jasa Cat Interior Gedung",
  "https://www.betonjayareadymix.com/p/jasa-cat-interior-kantor.html": "Jasa Cat Interior Kantor"
};

const urlMappingJasaCatEksteriorFromMoneyPageMoneyPage1 = {
  "https://www.betonjayareadymix.com/p/jasa-cat-eksterior-rumah.html": "Jasa Cat Eksterior Rumah",
  "https://www.betonjayareadymix.com/p/jasa-cat-eksterior-gedung.html": "Jasa Cat Eksterior Gedung",
  "https://www.betonjayareadymix.com/p/jasa-cat-eksterior-kantor.html": "Jasa Cat Eksterior Kantor",
  "https://www.betonjayareadymix.com/p/jasa-cat-eksterior-modern.html": "Jasa Cat Eksterior Modern",
  "https://www.betonjayareadymix.com/p/jasa-cat-eksterior-minimalis.html": "Jasa Cat Eksterior Minimalis",
  "https://www.betonjayareadymix.com/p/jasa-cat-eksterior-klasik.html": "Jasa Cat Eksterior Klasik"
};

const urlMappingJasaCatInteriorRumahFromMoneyPage1MoneyPage2 = {
  "https://www.betonjayareadymix.com/p/jasa-cat-interior-kamar-tidur.html": "Jasa Cat Interior Kamar Tidur",
  "https://www.betonjayareadymix.com/p/jasa-cat-interior-ruang-tamu.html": "Jasa Cat Interior Ruang Tamu",
  "https://www.betonjayareadymix.com/p/jasa-cat-interior-dapur.html": "Jasa Cat Interior Dapur"
};

const urlMappingJasaCatInteriorKantorFromMoneyPage1MoneyPage2 = {
  "https://www.betonjayareadymix.com/p/jasa-cat-interior-ruang-kantor.html": "Jasa Cat Interior Ruang Kantor"
};

const urlMappingFinishingEksteriorFromMoneyMaster1MoneyPage = {
  "https://www.betonjayareadymix.com/p/jasa-finishing-fasad-eksterior.html": "Jasa Finishing Fasad Eksterior",
  "https://www.betonjayareadymix.com/p/jasa-pelapisan-genteng-dak.html": "Jasa Pelapisan Genteng Dak",
  "https://www.betonjayareadymix.com/p/jasa-pelapisan-anti-cuaca.html": "Jasa Pelapisan Anti Cuaca",
  "https://www.betonjayareadymix.com/p/jasa-pelapisan-dinding-luar.html": "Jasa Pelapisan Dinding Luar",
  "https://www.betonjayareadymix.com/p/jasa-pelapisan-batu-alam-eksterior.html": "Jasa Pelapisan Batu Alam Eksterior",
  "https://www.betonjayareadymix.com/p/jasa-finishing-eksterior-rumah.html": "Jasa Finishing Eksterior Rumah",
  "https://www.betonjayareadymix.com/p/jasa-finishing-eksterior-gedung.html": "Jasa Finishing Eksterior Gedung",
  "https://www.betonjayareadymix.com/p/jasa-finishing-eksterior-ruko.html": "Jasa Finishing Eksterior Ruko",
  "https://www.betonjayareadymix.com/p/jasa-finishing-eksterior-pabrik.html": "Jasa Finishing Eksterior Pabrik",
  "https://www.betonjayareadymix.com/p/jasa-finishing-eksterior-kantor.html": "Jasa Finishing Eksterior Kantor",
  "https://www.betonjayareadymix.com/p/jasa-finishing-eksterior-hotel.html": "Jasa Finishing Eksterior Hotel",
  "https://www.betonjayareadymix.com/p/jasa-finishing-eksterior-cafe.html": "Jasa Finishing Eksterior Cafe",
  "https://www.betonjayareadymix.com/p/jasa-finishing-eksterior-restoran.html": "Jasa Finishing Eksterior Restoran",
  "https://www.betonjayareadymix.com/p/jasa-finishing-eksterior-sekolah.html": "Jasa Finishing Eksterior Sekolah",
  "https://www.betonjayareadymix.com/p/jasa-finishing-eksterior-rumah-sakit.html": "Jasa Finishing Eksterior Rumah Sakit",
  "https://www.betonjayareadymix.com/p/jasa-finishing-eksterior-modern.html": "Jasa Finishing Eksterior Modern",
  "https://www.betonjayareadymix.com/p/jasa-finishing-eksterior-minimalis.html": "Jasa Finishing Eksterior Minimalis",
  "https://www.betonjayareadymix.com/p/jasa-finishing-eksterior-klasik.html": "Jasa Finishing Eksterior Klasik",
  "https://www.betonjayareadymix.com/p/jasa-finishing-eksterior-mewah.html": "Jasa Finishing Eksterior Mewah",
  "https://www.betonjayareadymix.com/p/jasa-finishing-eksterior-industrial.html": "Jasa Finishing Eksterior Industrial",
  "https://www.betonjayareadymix.com/p/jasa-finishing-eksterior-skandinavian.html": "Jasa Finishing Eksterior Skandinavian",
  "https://www.betonjayareadymix.com/p/jasa-finishing-eksterior-kontemporer.html": "Jasa Finishing Eksterior Kontemporer",
  "https://www.betonjayareadymix.com/p/jasa-finishing-eksterior-dinding.html": "Jasa Finishing Eksterior Dinding",
  "https://www.betonjayareadymix.com/p/jasa-finishing-eksterior-pagar.html": "Jasa Finishing Eksterior Pagar",
  "https://www.betonjayareadymix.com/p/jasa-finishing-eksterior-balkon.html": "Jasa Finishing Eksterior Balkon",
  "https://www.betonjayareadymix.com/p/jasa-finishing-eksterior-teras.html": "Jasa Finishing Eksterior Teras",
  "https://www.betonjayareadymix.com/p/jasa-finishing-eksterior-kanopi.html": "Jasa Finishing Eksterior Kanopi",
  "https://www.betonjayareadymix.com/p/jasa-finishing-eksterior-kolam-renang.html": "Jasa Finishing Eksterior Kolam Renang",
  "https://www.betonjayareadymix.com/p/jasa-finishing-eksterior-plafon-terbuka.html": "Jasa Finishing Eksterior Plafon Terbuka",
  "https://www.betonjayareadymix.com/p/jasa-finishing-eksterior-tangga-luar.html": "Jasa Finishing Eksterior Tangga Luar",
  "https://www.betonjayareadymix.com/p/jasa-finishing-eksterior-gazebo.html": "Jasa Finishing Eksterior Gazebo",
  "https://www.betonjayareadymix.com/p/jasa-finishing-eksterior-toko.html": "Jasa Finishing Eksterior Toko",
  "https://www.betonjayareadymix.com/p/jasa-finishing-eksterior-showroom.html": "Jasa Finishing Eksterior Showroom",
  "https://www.betonjayareadymix.com/p/jasa-finishing-eksterior-gudang.html": "Jasa Finishing Eksterior Gudang",
  "https://www.betonjayareadymix.com/p/jasa-finishing-eksterior-mushola.html": "Jasa Finishing Eksterior Mushola",
  "https://www.betonjayareadymix.com/p/jasa-finishing-eksterior-masjid.html": "Jasa Finishing Eksterior Masjid"
};

const urlMappingJasaEksteriorFromMoneyMasterMoneyMaster1 = {
  "https://www.betonjayareadymix.com/p/harga-jasa-eksterior.html": "Harga Jasa Eksterior",
  "https://www.betonjayareadymix.com/p/jasa-fasad-rumah.html": "Jasa Fasad Rumah",
  "https://www.betonjayareadymix.com/p/jasa-taman.html": "Jasa Taman"
};

const urlMappingHargaJasaEksteriorFromMoneyMaster1MoneyPage = {};

const urlMappingJasaFasadRumahFromMoneyMaster1MoneyPage = {
  "https://www.betonjayareadymix.com/p/harga-jasa-fasad-rumah.html": "Harga Jasa Fasad Rumah"
};

const urlMappingJasaTamanFromMoneyMaster2MoneyMaster3 = {
  "https://www.betonjayareadymix.com/p/jasa-pembuatan-taman.html": "Jasa Pembuatan Taman",
  "https://www.betonjayareadymix.com/p/jasa-tukang-taman.html": "Jasa Tukang Taman",
  "https://www.betonjayareadymix.com/p/jasa-relief-taman.html": "Jasa Relief Taman",
  "https://www.betonjayareadymix.com/p/jasa-perawatan-taman.html": "Jasa Perawatan Taman",
  "https://www.betonjayareadymix.com/p/jasa-taman-murah.html": "Jasa Taman Murah"
};

const urlMappingJasaPembuatanTamanFromMoneyMaster3MoneyPage = {
  "https://www.betonjayareadymix.com/p/jasa-pembuatan-taman-rumah.html": "Jasa Pembuatan Taman Rumah",
  "https://www.betonjayareadymix.com/p/jasa-pembuatan-taman-relief.html": "Jasa Pembuatan Taman Relief"
};

const urlMappingJasaPasangACPFasadFromMoneyPageMoneyPage1 = {};

const urlMappingJasaPelapisanBatuAlamEksteriorFromMoneyPageMoneyPage1 = {
  "https://www.betonjayareadymix.com/p/harga-pelapisan-batu-alam-eksterior.html": "Harga Pelapisan Batu Alam Eksterior"
};

const urlMappingJasaPelapisanGentengDakFromMoneyPageMoneyPage1 = {
  "https://www.betonjayareadymix.com/p/harga-pelapisan-genteng-dak.html": "Harga Pelapisan Genteng Dak",
  "https://www.betonjayareadymix.com/p/jasa-pelapisan-genteng-dak-murah.html": "Jasa Pelapisan Genteng Dak Murah"
};

const urlMappingJasaFinishingStrukturFromMoneyMaster1MoneyPage = {
  "https://www.betonjayareadymix.com/p/harga-jasa-finishing-struktur.html": "Harga Jasa Finishing Struktur",
  "https://www.betonjayareadymix.com/p/jasa-waterproofing-dak-beton-baru.html": "Jasa Waterproofing Dak Beton Baru",
  "https://www.betonjayareadymix.com/p/jasa-finishing-dak-beton.html": "Jasa Finishing Dak Beton",
  "https://www.betonjayareadymix.com/p/jasa-finishing-struktur-beton-ekspos.html": "Jasa Finishing Struktur Beton Ekspos",
  "https://www.betonjayareadymix.com/p/jasa-pelapisan-coating-struktur.html": "Jasa Pelapisan Coating Struktur",
  "https://www.betonjayareadymix.com/p/jasa-finishing-kolom-dan-balok.html": "Jasa Finishing Kolom dan Balok"
};

const urlMappingJasaFinishingDakBetonFromMoneyPageMoneyPage1 = {
  "https://www.betonjayareadymix.com/p/harga-jasa-finishing-dak-beton.html": "Harga Jasa Finishing Dak Beton"
};

const urlMappingJasaFinishingStrukturBetonEksposFromMoneyPageMoneyPage1 = {
  "https://www.betonjayareadymix.com/p/harga-jasa-struktur-beton-ekspos.html": "Harga Jasa Struktur Beton Ekspos"
};

const urlMappingJasaFinishingKolomdanBalokFromMoneyPageMoneyPage1 = {
  "https://www.betonjayareadymix.com/p/harga-jasa-finishing-kolom-balok.html": "Harga Jasa Finishing Kolom Balok"
};

const urlMappingJasaPelapisanCoatingStrukturFromMoneyPageMoneyPage1 = {
  "https://www.betonjayareadymix.com/p/harga-jasa-coating-struktur-beton.html": "Harga Jasa Coating Struktur Beton",
  "https://www.betonjayareadymix.com/p/jasa-coating-anti-karat-beton.html": "Jasa Coating Anti Karat Beton",
  "https://www.betonjayareadymix.com/p/jasa-pelapisan-waterproofing-struktur.html": "Jasa Pelapisan Waterproofing Struktur"
};

const urlMappingJasaPelapisanWaterproofingStrukturFromMoneyPage1MoneyPage2 = {
  "https://www.betonjayareadymix.com/p/harga-jasa-waterproofing-struktur.html": "Harga Jasa Waterproofing Struktur"
};

const urlMappingFinishingInfrastrukturFromMoneyMaster1MoneyPage = {
  "https://www.betonjayareadymix.com/p/jasa-finishing-rumah-pompa.html": "Jasa Finishing Rumah Pompa",
  "https://www.betonjayareadymix.com/p/jasa-pelapisan-box-utilitas.html": "Jasa Pelapisan Box Utilitas",
  "https://www.betonjayareadymix.com/p/jasa-epoxy-struktur-publik.html": "Jasa Epoxy Struktur Publik",
  "https://www.betonjayareadymix.com/p/jasa-finishing-penutup-kabel-beton.html": "Jasa Finishing Penutup Kabel Beton",
  "https://www.betonjayareadymix.com/p/jasa-pelapisan-anti-karat-beton.html": "Jasa Pelapisan Anti Karat Beton",
  "https://www.betonjayareadymix.com/p/jasa-epoxy-beton-luar-ruang.html": "Jasa Epoxy Beton Luar Ruang",
  "https://www.betonjayareadymix.com/p/jasa-proteksi-struktur-beton-luar.html": "Jasa Proteksi Struktur Beton Luar",
  "https://www.betonjayareadymix.com/p/jasa-finishing-jalan-jembatan.html": "Jasa Finishing Jalan Jembatan",
  "https://www.betonjayareadymix.com/p/jasa-finishing-jembatan-beton.html": "Jasa Finishing Jembatan Beton",
  "https://www.betonjayareadymix.com/p/jasa-finishing-jalan-beton.html": "Jasa Finishing Jalan Beton",
  "https://www.betonjayareadymix.com/p/jasa-pengecatan-marking-jalan.html": "Jasa Pengecatan Marking Jalan",
  "https://www.betonjayareadymix.com/p/jasa-pelapisan-jalan-tol.html": "Jasa Pelapisan Jalan Tol",
  "https://www.betonjayareadymix.com/p/jasa-coating-jembatan.html": "Jasa Coating Jembatan",
  "https://www.betonjayareadymix.com/p/jasa-finishing-trotoar-area-publik.html": "Jasa Finishing Trotoar Area Publik",
  "https://www.betonjayareadymix.com/p/jasa-finishing-trotoar.html": "Jasa Finishing Trotoar",
  "https://www.betonjayareadymix.com/p/jasa-penataan-trotoar-beton.html": "Jasa Penataan Trotoar Beton",
  "https://www.betonjayareadymix.com/p/jasa-epoxy-area-publik.html": "Jasa Epoxy Area Publik",
  "https://www.betonjayareadymix.com/p/jasa-pelapisan-area-pejalan-kaki.html": "Jasa Pelapisan Area Pejalan Kaki",
  "https://www.betonjayareadymix.com/p/jasa-finishing-saluran-drainase.html": "Jasa Finishing Saluran Drainase",
  "https://www.betonjayareadymix.com/p/jasa-coating-gorong-gorong.html": "Jasa Coating Gorong Gorong",
  "https://www.betonjayareadymix.com/p/jasa-pelapisan-saluran-beton.html": "Jasa Pelapisan Saluran Beton",
  "https://www.betonjayareadymix.com/p/jasa-waterproofing-saluran-air.html": "Jasa Waterproofing Saluran Air",
  "https://www.betonjayareadymix.com/p/jasa-finishing-penutup-saluran.html": "Jasa Finishing Penutup Saluran",
  "https://www.betonjayareadymix.com/p/jasa-finishing-struktur-utilitas.html": "Jasa Finishing Struktur Utilitas",
  "https://www.betonjayareadymix.com/p/jasa-finishing-proteksi-beton.html": "Jasa Finishing Proteksi Beton"
};

console.log('═══════════════════════════════════════════════════════════');
console.log('📦 PART 1 SELESAI — Lanjut ke PART 2 (Early Exit + Fungsi Utama)');
console.log('═══════════════════════════════════════════════════════════');

// ═══════════════════════════════════════════════════════════
// [BAGIAN 2] FUNGSI HELPER
// ═══════════════════════════════════════════════════════════

var removedElementsJasaKonsFinishing = {};

function removeCondition(conditionId) {
    // ✅ GUARD: Jangan hapus container utama
    if (conditionId === 'JasaKonsFinishing') {
        console.warn('[jasa-konstruksi-finishing] ⚠️ Tidak boleh menghapus container utama: ' + conditionId);
        return;
    }
    
    var conditionElement = document.getElementById(conditionId);
    if (conditionElement) {
        removedElementsJasaKonsFinishing[conditionId] = conditionElement;
        conditionElement.remove();
        console.log('[jasa-konstruksi-finishing] 🔧 Removed: ' + conditionId);
    }
}

function restoreCondition(conditionId) {
    var breadcrumb = document.querySelector('.breadcrumb');
    var elementToRestore = removedElementsJasaKonsFinishing[conditionId];
    
    if (elementToRestore) {
        breadcrumb.appendChild(elementToRestore);
        delete removedElementsJasaKonsFinishing[conditionId];
        console.log('[jasa-konstruksi-finishing] 🔧 Restored: ' + conditionId);
    } else {
        console.warn('[jasa-konstruksi-finishing] ⚠️ Elemen ' + conditionId + ' tidak ditemukan');
    }
}

// ═══════════════════════════════════════════════════════════
// [BAGIAN 3] EARLY EXIT v2.0.0 — PENDEKATAN C
// ═══════════════════════════════════════════════════════════
// STRATEGI:
//   - Loop + foundIndex + foundMappingName + break (paling cepat)
//   - TIDAK bikin MERGED_MAP (hemat memori ~10KB)
//   - Simpan ALL_MAPPINGS + foundIndex + foundMappingName untuk debug
// ═══════════════════════════════════════════════════════════

(function() {
  'use strict';
  
  var cleanUrl = window.location.href.split(/[?#]/)[0];
  console.log('[jasa-konstruksi-finishing] 🔍 Check URL: ' + cleanUrl);
  
  // Kumpulkan SEMUA mapping ke array (TANPA Object.assign)
  var ALL_MAPPINGS = [
    urlMappingJasaPasangLantaiVinylFromMoneyPageMoneyPage1,
    urlMappingHargaJasaPasangLantaiVinylFromMoneyPageMoneyPage1,
    urlMappingJasaPasangPVCFromMoneyMaster1MoneyPage,
    urlMappingJasaPasangPlafonFromMoneyMaster1MoneyPage,
    urlMappingFinishingBangunanFromMoneyMaster1MoneyPage,
    urlMappingFinishingInteriorFromMoneyMasterMoneyPage,
    urlMappingJasaInteriorFromMoneyMasterMoneyPage,
    urlMappingHargaJasaInteriorFromMoneyPageMoneyPage,
    urlMappingJasaPasangLampuFromMoneyMaster1MoneyPage,
    urlMappingJasaPasangLampuInteriorFromMoneyPageMoneyPage1,
    urlMappingJasaPasangLampuEksteriorFromMoneyPageMoneyPage1,
    urlMappingJasaPasangLampuTamanFromMoneyPageMoneyPage1,
    urlMappingJasaFinishingLampuFromMoneyMaster1MoneyPage,
    urlMappingJasaFinishingLampuCafeFromMoneyPageMoneyPage,
    urlMappingJasaFinishingLampuHotelFromMoneyPageMoneyPage,
    urlMappingJasaFinishingLampuKantorFromMoneyPageMoneyPage,
    urlMappingJasaCatFromMoneyMaster1MoneyPage,
    urlMappingHargaJasaCatFromMoneyPageMoneyPage1,
    urlMappingJasaCatPermukaanKhususFromMoneyPageMoneyPage1,
    urlMappingJasaCatDindingFromMoneyPageMoneyPage1,
    urlMappingJasaFinishingCatFromMoneyPageMoneyPage1,
    urlMappingJasaCatInteriorFromMoneyPageMoneyPage1,
    urlMappingJasaCatEksteriorFromMoneyPageMoneyPage1,
    urlMappingJasaCatInteriorRumahFromMoneyPage1MoneyPage2,
    urlMappingJasaCatInteriorKantorFromMoneyPage1MoneyPage2,
    urlMappingHargaJasaPembuatanFurnitureFromMoneyPageMoneyPage1,
    urlMappingFinishingDindingFromMoneyMaster1MoneyPage,
    urlMappingJasaPasangWallpaperDindingFromMoneyPageMoneyPage1,
    urlMappingJasaFinishingEpoxyDindingFromMoneyPageMoneyPage1,
    urlMappingJasaPlesteranAcianDindingFromMoneyPageMoneyPage1,
    urlMappingHargaJasaPlesteranAcianFromMoneyPage1MoneyPage2,
    urlMappingJasaPasangWpcFromMoneyMaster1MoneyPage,
    urlMappingJasaPasangWPCDindingFromMoneyPageMoneyPage1,
    urlMappingJasaPasangWPCLantaiFromMoneyPageMoneyPage1,
    urlMappingFinishingLantaiFromMoneyMasterMoneyPage,
    urlMappingHargaJasaFinishingLantaiFromMoneyPageMoneyPage1,
    urlMappingJasaFinishingLantaiBetonFromMoneyPageMoneyPage1,
    urlMappingJasaFinishingLantaiKayuFromMoneyPageMoneyPage1,
    urlMappingJasaFinishingLantaiMarmerFromMoneyPageMoneyPage1,
    urlMappingJasaPolesLantaiGranitFromMoneyPageMoneyPage1,
    urlMappingJasaPasangKeramikLantaiFromMoneyPageMoneyPage1,
    urlMappingHargaJasaPasangKeramikLantaiFromMoneyPage1MoneyPage2,
    urlMappingJasaLantaiSuperFlatFromMoneyPage1MoneyPage2,
    urlMappingJasaTrowelLantaiBetonFromMoneyPage1MoneyPage2,
    urlMappingJasaScreedingLantaiBetonFromMoneyPage1MoneyPage2,
    urlMappingJasaFloorHardenerLantaiFromMoneyPage1MoneyPage2,
    urlMappingJasaFinishingLantaiEpoxyFromMoneyPageMoney1Page2,
    urlMappingFinishingEksteriorFromMoneyMaster1MoneyPage,
    urlMappingJasaEksteriorFromMoneyMasterMoneyMaster1,
    urlMappingHargaJasaEksteriorFromMoneyMaster1MoneyPage,
    urlMappingJasaFasadRumahFromMoneyMaster1MoneyPage,
    urlMappingJasaPasangACPFasadFromMoneyPageMoneyPage1,
    urlMappingJasaPelapisanBatuAlamEksteriorFromMoneyPageMoneyPage1,
    urlMappingJasaPelapisanGentengDakFromMoneyPageMoneyPage1,
    urlMappingJasaTamanFromMoneyMaster2MoneyMaster3,
    urlMappingJasaPembuatanTamanFromMoneyMaster3MoneyPage,
    urlMappingJasaFinishingStrukturFromMoneyMaster1MoneyPage,
    urlMappingJasaFinishingDakBetonFromMoneyPageMoneyPage1,
    urlMappingJasaFinishingStrukturBetonEksposFromMoneyPageMoneyPage1,
    urlMappingJasaFinishingKolomdanBalokFromMoneyPageMoneyPage1,
    urlMappingJasaPelapisanCoatingStrukturFromMoneyPageMoneyPage1,
    urlMappingJasaPelapisanWaterproofingStrukturFromMoneyPage1MoneyPage2,
    urlMappingFinishingInfrastrukturFromMoneyMaster1MoneyPage
  ];
  
  // ✅ PENDEKATAN C: Loop + foundIndex + foundMappingName + break
  var foundIndex = -1;
  var foundMappingName = '';
  
  for (var i = 0; i < ALL_MAPPINGS.length; i++) {
    if (!ALL_MAPPINGS[i] || typeof ALL_MAPPINGS[i] !== 'object') {
      console.warn('[jasa-konstruksi-finishing] ⚠️ Mapping #' + (i + 1) + ' bukan object — skip');
      continue;
    }
    if (ALL_MAPPINGS[i][cleanUrl]) {
      foundIndex = i;
      foundMappingName = ALL_MAPPINGS[i][cleanUrl];
      break;
    }
  }
  
  if (foundIndex === -1) {
    console.log('[jasa-konstruksi-finishing] ⏭️ SKIP — URL tidak cocok di semua cluster');
    window.__jasaKonsFinishingActive = false;
    return;
  }
  
  // ✅ Cocok — set flag + simpan info untuk debug
  window.__jasaKonsFinishingActive = true;
  window.__jasaKonsFinishingMatchIndex = foundIndex;
  window.__jasaKonsFinishingMatchMappingName = foundMappingName;
  window.__jasaKonsFinishingMappings = ALL_MAPPINGS;
  
  console.log(
    '[jasa-konstruksi-finishing] ✅ Match di mapping #' + (foundIndex + 1) +
    ' — Label: "' + foundMappingName + '"' +
    ' — EXECUTE flag set'
  );
})();

console.log('═══════════════════════════════════════════════════════════');
console.log('📦 PART 2 SELESAI — Lanjut ke PART 3 (Fungsi Utama + If Breadcrumb)');
console.log('═══════════════════════════════════════════════════════════');

// ═══════════════════════════════════════════════════════════
// [BAGIAN 4] FUNGSI UTAMA — Semua logic breadcrumb
// ═══════════════════════════════════════════════════════════

function initJasaKonsFinishing() {
    // ⚡ Guard flag
    if (!window.__jasaKonsFinishingActive) {
        console.log('[jasa-konstruksi-finishing] ⏭️ Execute SKIP — URL tidak cocok');
        return;
    }
    
    console.log('[jasa-konstruksi-finishing] 🚀 Execute — URL cocok');
    
    var cleanUrlJasaKonsFinishing = window.location.href.split(/[?#]/)[0];
    
    // ✅ Guard elemen DOM
    var JasaKonsFinishing = document.getElementById("JasaKonsFinishing");
    if (!JasaKonsFinishing) {
        console.error("[jasa-konstruksi-finishing] ❌ elemen Id JasaKonsFinishing kondisi terhapus");
        return;
    }

    var JasaKonstruksiFinishingSubLink = document.getElementById("JasaKonstruksiFinishingSub");
    var JasaFinishingSubLink = document.getElementById("JasaFinishingSub");
    var JasaFinishingBangunanLink = document.getElementById("JasaFinishingBangunanSub");
    var JasaFinishingInfrastrukturLink = document.getElementById("JasaFinishingInfrastrukturSub");
    
    // Sub finishing bangunan
    var JasaFinishingInteriorLink = document.getElementById("JasaFinishingBangunanInterior");
    var JasaFinishingEksteriorLink = document.getElementById("JasaFinishingBangunanEksterior");
    var JasaFinishingStrukturLink = document.getElementById("JasaFinishingBangunanStruktur");

    // Sub finishing infrastruktur
    var JasaFinishingJalanLink = document.getElementById("JasaFinishingInfrastrukturJalan");
    var JasaFinishingTrotoarLink = document.getElementById("JasaFinishingInfrastrukturTrotoar");
    var JasaFinishingSaluranLink = document.getElementById("JasaFinishingInfrastrukturSaluran");
    var JasaFinishingInfraStrukturLink = document.getElementById("JasaFinishingInfrastrukturStruktur");
    var JasaFinishingProteksiLink = document.getElementById("JasaFinishingInfrastrukturProteksi");

    var pageNameJasaKonsFinishing = document.getElementById("pageNameJasaKonsFinishing");
    
    // Default: sembunyikan semua elemen
    if (JasaKonstruksiFinishingSubLink) JasaKonstruksiFinishingSubLink.style.visibility = 'hidden';
    if (JasaFinishingSubLink) JasaFinishingSubLink.style.visibility = 'hidden';
    if (JasaFinishingBangunanLink) JasaFinishingBangunanLink.style.visibility = 'hidden';
    if (JasaFinishingInfrastrukturLink) JasaFinishingInfrastrukturLink.style.visibility = 'hidden';
    if (pageNameJasaKonsFinishing) pageNameJasaKonsFinishing.textContent = "";
	
    // ═══════════════════════════════════════════════════════
    // [BLOK 1] JASA PASANG LANTAI VINYL
    // ═══════════════════════════════════════════════════════
    
    if (urlMappingJasaPasangLantaiVinylFromMoneyPageMoneyPage1[cleanUrlJasaKonsFinishing]) {
        generateBreadcrumbShared(
            urlMappingJasaPasangLantaiVinylFromMoneyPageMoneyPage1,
            cleanUrlJasaKonsFinishing,
            [
                { name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Pasang', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-pasang.html' },
                { name: 'Perbandingan Jasa Pasang', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-pasang.html' },
                { name: 'Jasa Pasang Lantai', url: 'https://www.betonjayareadymix.com/p/jasa-pasang-lantai.html' },
                { name: 'Jasa Pasang Lantai Vinyl', url: 'https://www.betonjayareadymix.com/p/jasa-pasang-lantai-vinyl.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }
    
    if (urlMappingHargaJasaPasangLantaiVinylFromMoneyPageMoneyPage1[cleanUrlJasaKonsFinishing]) {
        generateBreadcrumbShared(
            urlMappingHargaJasaPasangLantaiVinylFromMoneyPageMoneyPage1,
            cleanUrlJasaKonsFinishing,
            [
                { name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Pasang', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-pasang.html' },
                { name: 'Perbandingan Jasa Pasang', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-pasang.html' },
                { name: 'Harga Jasa Pasang Lantai', url: 'https://www.betonjayareadymix.com/p/harga-jasa-pasang-lantai.html' },
                { name: 'Harga Jasa Pasang Lantai Vinyl', url: 'https://www.betonjayareadymix.com/p/harga-jasa-pasang-lantai-vinyl.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }
	
    // ═══════════════════════════════════════════════════════
    // [BLOK 2] JASA PASANG PVC
    // ═══════════════════════════════════════════════════════
    
    if (urlMappingJasaPasangPVCFromMoneyMaster1MoneyPage[cleanUrlJasaKonsFinishing]) {
        generateBreadcrumbShared(
            urlMappingJasaPasangPVCFromMoneyMaster1MoneyPage,
            cleanUrlJasaKonsFinishing,
            [
                { name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Pasang', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-pasang.html' },
                { name: 'Perbandingan Jasa Pasang', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-pasang.html' },
                { name: 'Jasa Pasang PVC', url: 'https://www.betonjayareadymix.com/p/jasa-pasang-pvc.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }	
	
    // ═══════════════════════════════════════════════════════
    // [BLOK 3] JASA PASANG PLAFON
    // ═══════════════════════════════════════════════════════
    
    if (urlMappingJasaPasangPlafonFromMoneyMaster1MoneyPage[cleanUrlJasaKonsFinishing]) {
        generateBreadcrumbShared(
            urlMappingJasaPasangPlafonFromMoneyMaster1MoneyPage,
            cleanUrlJasaKonsFinishing,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Pasang', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-pasang.html' },
                { name: 'Perbandingan Jasa Pasang', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-pasang.html' },
                { name: 'Jasa Pasang Plafon', url: 'https://www.betonjayareadymix.com/p/jasa-pasang-plafon.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }	

    // ═══════════════════════════════════════════════════════
    // [BLOK 4] JASA FINISHING BANGUNAN
    // ═══════════════════════════════════════════════════════
    
    if (urlMappingFinishingBangunanFromMoneyMaster1MoneyPage[cleanUrlJasaKonsFinishing]) {
        generateBreadcrumbShared(
            urlMappingFinishingBangunanFromMoneyMaster1MoneyPage,
            cleanUrlJasaKonsFinishing,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Finishing', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-finishing.html' },
                { name: 'Perbandingan Jasa Finishing', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-finishing.html' },
                { name: 'Jasa Finishing', url: 'https://www.betonjayareadymix.com/p/jasa-finishing.html' },
                { name: 'Jasa Finishing Bangunan', url: 'https://www.betonjayareadymix.com/p/jasa-finishing-bangunan.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }
    
    // ═══════════════════════════════════════════════════════
    // [BLOK 5] JASA FINISHING INTERIOR
    // ═══════════════════════════════════════════════════════
    
    if (urlMappingFinishingInteriorFromMoneyMasterMoneyPage[cleanUrlJasaKonsFinishing]) {
        generateBreadcrumbShared(
            urlMappingFinishingInteriorFromMoneyMasterMoneyPage,
            cleanUrlJasaKonsFinishing,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Finishing', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-finishing.html' },
                { name: 'Perbandingan Jasa Finishing', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-finishing.html' },
                { name: 'Jasa Finishing', url: 'https://www.betonjayareadymix.com/p/jasa-finishing.html' },
                { name: 'Jasa Finishing Interior', url: 'https://www.betonjayareadymix.com/p/jasa-finishing-interior.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }

    // ═══════════════════════════════════════════════════════
    // [BLOK 6] JASA INTERIOR
    // ═══════════════════════════════════════════════════════
    
    if (urlMappingJasaInteriorFromMoneyMasterMoneyPage[cleanUrlJasaKonsFinishing]) {
        generateBreadcrumbShared(
            urlMappingJasaInteriorFromMoneyMasterMoneyPage,
            cleanUrlJasaKonsFinishing,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Interior', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-interior.html' },
                { name: 'Perbandingan Jasa Interior', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-interior.html' },
                { name: 'Jasa Interior', url: 'https://www.betonjayareadymix.com/p/jasa-interior.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }
    
    if (urlMappingHargaJasaInteriorFromMoneyPageMoneyPage[cleanUrlJasaKonsFinishing]) {
        generateBreadcrumbShared(
            urlMappingHargaJasaInteriorFromMoneyPageMoneyPage,
            cleanUrlJasaKonsFinishing,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Interior', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-interior.html' },
                { name: 'Perbandingan Jasa Interior', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-interior.html' },
                { name: 'Jasa Interior', url: 'https://www.betonjayareadymix.com/p/jasa-interior.html' },
                { name: 'Harga Jasa Interior', url: 'https://www.betonjayareadymix.com/p/harga-jasa-interior.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }

    // ═══════════════════════════════════════════════════════
    // [BLOK 7] JASA PASANG LAMPU
    // ═══════════════════════════════════════════════════════
    
    if (urlMappingJasaPasangLampuFromMoneyMaster1MoneyPage[cleanUrlJasaKonsFinishing]) {
        generateBreadcrumbShared(
            urlMappingJasaPasangLampuFromMoneyMaster1MoneyPage,
            cleanUrlJasaKonsFinishing,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Pasang', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-pasang.html' },
                { name: 'Perbandingan Jasa Pasang', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-pasang.html' },
                { name: 'Jasa Pasang', url: 'https://www.betonjayareadymix.com/p/jasa-pasang.html' },
                { name: 'Jasa Pasang Lampu', url: 'https://www.betonjayareadymix.com/p/jasa-pasang-lampu.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }

    // ═══════════════════════════════════════════════════════
    // [BLOK 8] JASA FINISHING LAMPU
    // ═══════════════════════════════════════════════════════
    
    if (urlMappingJasaFinishingLampuFromMoneyMaster1MoneyPage[cleanUrlJasaKonsFinishing]) {
        generateBreadcrumbShared(
            urlMappingJasaFinishingLampuFromMoneyMaster1MoneyPage,
            cleanUrlJasaKonsFinishing,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Finishing', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-finishing.html' },
                { name: 'Perbandingan Jasa Finishing', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-finishing.html' },
                { name: 'Jasa Finishing', url: 'https://www.betonjayareadymix.com/p/jasa-finishing.html' },
                { name: 'Jasa Finishing Lampu', url: 'https://www.betonjayareadymix.com/p/jasa-finishing-lampu.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }
    
    if (urlMappingJasaFinishingLampuCafeFromMoneyPageMoneyPage[cleanUrlJasaKonsFinishing]) {
        generateBreadcrumbShared(
            urlMappingJasaFinishingLampuCafeFromMoneyPageMoneyPage,
            cleanUrlJasaKonsFinishing,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Finishing', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-finishing.html' },
                { name: 'Perbandingan Jasa Finishing', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-finishing.html' },
                { name: 'Jasa Finishing', url: 'https://www.betonjayareadymix.com/p/jasa-finishing.html' },
                { name: 'Jasa Finishing Lampu', url: 'https://www.betonjayareadymix.com/p/jasa-finishing-lampu.html' },
                { name: 'Jasa Finishing Lampu Cafe', url: 'https://www.betonjayareadymix.com/p/jasa-finishing-lampu-cafe.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }
    
    if (urlMappingJasaFinishingLampuHotelFromMoneyPageMoneyPage[cleanUrlJasaKonsFinishing]) {
        generateBreadcrumbShared(
            urlMappingJasaFinishingLampuHotelFromMoneyPageMoneyPage,
            cleanUrlJasaKonsFinishing,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Finishing', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-finishing.html' },
                { name: 'Perbandingan Jasa Finishing', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-finishing.html' },
                { name: 'Jasa Finishing', url: 'https://www.betonjayareadymix.com/p/jasa-finishing.html' },
                { name: 'Jasa Finishing Lampu', url: 'https://www.betonjayareadymix.com/p/jasa-finishing-lampu.html' },
                { name: 'Jasa Finishing Lampu Hotel', url: 'https://www.betonjayareadymix.com/p/jasa-finishing-lampu-hotel.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }
	
    if (urlMappingJasaFinishingLampuKantorFromMoneyPageMoneyPage[cleanUrlJasaKonsFinishing]) {
        generateBreadcrumbShared(
            urlMappingJasaFinishingLampuKantorFromMoneyPageMoneyPage,
            cleanUrlJasaKonsFinishing,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Finishing', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-finishing.html' },
                { name: 'Perbandingan Jasa Finishing', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-finishing.html' },
                { name: 'Jasa Finishing', url: 'https://www.betonjayareadymix.com/p/jasa-finishing.html' },
                { name: 'Jasa Finishing Lampu', url: 'https://www.betonjayareadymix.com/p/jasa-finishing-lampu.html' },
                { name: 'Jasa Finishing Lampu Kantor', url: 'https://www.betonjayareadymix.com/p/jasa-finishing-lampu-kantor.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }	

    // ═══════════════════════════════════════════════════════
    // [BLOK 9] JASA PASANG LAMPU INTERIOR / EKSTERIOR / TAMAN
    // ═══════════════════════════════════════════════════════
    
    if (urlMappingJasaPasangLampuInteriorFromMoneyPageMoneyPage1[cleanUrlJasaKonsFinishing]) {
        generateBreadcrumbShared(
            urlMappingJasaPasangLampuInteriorFromMoneyPageMoneyPage1,
            cleanUrlJasaKonsFinishing,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Pasang', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-pasang.html' },
                { name: 'Perbandingan Jasa Pasang', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-pasang.html' },
                { name: 'Jasa Pasang', url: 'https://www.betonjayareadymix.com/p/jasa-pasang.html' },
                { name: 'Jasa Pasang Lampu', url: 'https://www.betonjayareadymix.com/p/jasa-pasang-lampu.html' },
                { name: 'Jasa Pasang Lampu Interior', url: 'https://www.betonjayareadymix.com/p/jasa-pasang-lampu-interior.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }
    
    // ✅ FIX: URL Eksterior (sebelumnya salah ke interior)
    if (urlMappingJasaPasangLampuEksteriorFromMoneyPageMoneyPage1[cleanUrlJasaKonsFinishing]) {
        generateBreadcrumbShared(
            urlMappingJasaPasangLampuEksteriorFromMoneyPageMoneyPage1,
            cleanUrlJasaKonsFinishing,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Pasang', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-pasang.html' },
                { name: 'Perbandingan Jasa Pasang', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-pasang.html' },
                { name: 'Jasa Pasang', url: 'https://www.betonjayareadymix.com/p/jasa-pasang.html' },
                { name: 'Jasa Pasang Lampu', url: 'https://www.betonjayareadymix.com/p/jasa-pasang-lampu.html' },
                { name: 'Jasa Pasang Lampu Eksterior', url: 'https://www.betonjayareadymix.com/p/jasa-pasang-lampu-eksterior.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }
	
    if (urlMappingJasaPasangLampuTamanFromMoneyPageMoneyPage1[cleanUrlJasaKonsFinishing]) {
        generateBreadcrumbShared(
            urlMappingJasaPasangLampuTamanFromMoneyPageMoneyPage1,
            cleanUrlJasaKonsFinishing,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Pasang', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-pasang.html' },
                { name: 'Perbandingan Jasa Pasang', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-pasang.html' },
                { name: 'Jasa Pasang', url: 'https://www.betonjayareadymix.com/p/jasa-pasang.html' },
                { name: 'Jasa Pasang Lampu', url: 'https://www.betonjayareadymix.com/p/jasa-pasang-lampu.html' },
                { name: 'Jasa Pasang Lampu Taman', url: 'https://www.betonjayareadymix.com/p/jasa-pasang-lampu-taman.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }

    // ═══════════════════════════════════════════════════════
    // [BLOK 10] JASA CAT
    // ═══════════════════════════════════════════════════════
	
    if (urlMappingJasaCatFromMoneyMaster1MoneyPage[cleanUrlJasaKonsFinishing]) {
        generateBreadcrumbShared(
            urlMappingJasaCatFromMoneyMaster1MoneyPage,
            cleanUrlJasaKonsFinishing,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Finishing', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-finishing.html' },
                { name: 'Perbandingan Jasa Finishing', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-finishing.html' },
                { name: 'Jasa Finishing', url: 'https://www.betonjayareadymix.com/p/jasa-finishing.html' },
                { name: 'Jasa Cat', url: 'https://www.betonjayareadymix.com/p/jasa-cat.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }
    
    if (urlMappingHargaJasaCatFromMoneyPageMoneyPage1[cleanUrlJasaKonsFinishing]) {
        generateBreadcrumbShared(
            urlMappingHargaJasaCatFromMoneyPageMoneyPage1,
            cleanUrlJasaKonsFinishing,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Finishing', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-finishing.html' },
                { name: 'Perbandingan Jasa Finishing', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-finishing.html' },
                { name: 'Jasa Finishing', url: 'https://www.betonjayareadymix.com/p/jasa-finishing.html' },
                { name: 'Jasa Cat', url: 'https://www.betonjayareadymix.com/p/jasa-cat.html' },
                { name: 'Harga Jasa Cat', url: 'https://www.betonjayareadymix.com/p/harga-jasa-cat.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }
    
    if (urlMappingJasaCatPermukaanKhususFromMoneyPageMoneyPage1[cleanUrlJasaKonsFinishing]) {
        generateBreadcrumbShared(
            urlMappingJasaCatPermukaanKhususFromMoneyPageMoneyPage1,
            cleanUrlJasaKonsFinishing,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Finishing', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-finishing.html' },
                { name: 'Perbandingan Jasa Finishing', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-finishing.html' },
                { name: 'Jasa Finishing', url: 'https://www.betonjayareadymix.com/p/jasa-finishing.html' },
                { name: 'Jasa Cat', url: 'https://www.betonjayareadymix.com/p/jasa-cat.html' },
                { name: 'Jasa Cat Permukaan Khusus', url: 'https://www.betonjayareadymix.com/p/jasa-cat-permukaan-khusus.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }
    
    if (urlMappingJasaCatDindingFromMoneyPageMoneyPage1[cleanUrlJasaKonsFinishing]) {
        generateBreadcrumbShared(
            urlMappingJasaCatDindingFromMoneyPageMoneyPage1,
            cleanUrlJasaKonsFinishing,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Finishing', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-finishing.html' },
                { name: 'Perbandingan Jasa Finishing', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-finishing.html' },
                { name: 'Jasa Finishing', url: 'https://www.betonjayareadymix.com/p/jasa-finishing.html' },
                { name: 'Jasa Cat', url: 'https://www.betonjayareadymix.com/p/jasa-cat.html' },
                { name: 'Jasa Cat Dinding', url: 'https://www.betonjayareadymix.com/p/jasa-cat-dinding.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }
    
    if (urlMappingJasaFinishingCatFromMoneyPageMoneyPage1[cleanUrlJasaKonsFinishing]) {
        generateBreadcrumbShared(
            urlMappingJasaFinishingCatFromMoneyPageMoneyPage1,
            cleanUrlJasaKonsFinishing,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Finishing', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-finishing.html' },
                { name: 'Perbandingan Jasa Finishing', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-finishing.html' },
                { name: 'Jasa Finishing', url: 'https://www.betonjayareadymix.com/p/jasa-finishing.html' },
                { name: 'Jasa Cat', url: 'https://www.betonjayareadymix.com/p/jasa-cat.html' },
                { name: 'Jasa Finishing Cat', url: 'https://www.betonjayareadymix.com/p/jasa-finishing-cat.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }
    
    if (urlMappingJasaCatInteriorFromMoneyPageMoneyPage1[cleanUrlJasaKonsFinishing]) {
        generateBreadcrumbShared(
            urlMappingJasaCatInteriorFromMoneyPageMoneyPage1,
            cleanUrlJasaKonsFinishing,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Finishing', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-finishing.html' },
                { name: 'Perbandingan Jasa Finishing', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-finishing.html' },
                { name: 'Jasa Finishing', url: 'https://www.betonjayareadymix.com/p/jasa-finishing.html' },
                { name: 'Jasa Cat', url: 'https://www.betonjayareadymix.com/p/jasa-cat.html' },
                { name: 'Jasa Cat Interior', url: 'https://www.betonjayareadymix.com/p/jasa-cat-interior.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }
    
    if (urlMappingJasaCatEksteriorFromMoneyPageMoneyPage1[cleanUrlJasaKonsFinishing]) {
        generateBreadcrumbShared(
            urlMappingJasaCatEksteriorFromMoneyPageMoneyPage1,
            cleanUrlJasaKonsFinishing,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Finishing', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-finishing.html' },
                { name: 'Perbandingan Jasa Finishing', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-finishing.html' },
                { name: 'Jasa Finishing', url: 'https://www.betonjayareadymix.com/p/jasa-finishing.html' },
                { name: 'Jasa Cat', url: 'https://www.betonjayareadymix.com/p/jasa-cat.html' },
                { name: 'Jasa Cat Eksterior', url: 'https://www.betonjayareadymix.com/p/jasa-cat-eksterior.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }
    
    if (urlMappingJasaCatInteriorRumahFromMoneyPage1MoneyPage2[cleanUrlJasaKonsFinishing]) {
        generateBreadcrumbShared(
            urlMappingJasaCatInteriorRumahFromMoneyPage1MoneyPage2,
            cleanUrlJasaKonsFinishing,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Finishing', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-finishing.html' },
                { name: 'Perbandingan Jasa Finishing', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-finishing.html' },
                { name: 'Jasa Finishing', url: 'https://www.betonjayareadymix.com/p/jasa-finishing.html' },
                { name: 'Jasa Cat', url: 'https://www.betonjayareadymix.com/p/jasa-cat.html' },
                { name: 'Jasa Cat Interior', url: 'https://www.betonjayareadymix.com/p/jasa-cat-interior.html' },
                { name: 'Jasa Cat Interior Rumah', url: 'https://www.betonjayareadymix.com/p/jasa-cat-interior-rumah.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }
    
    if (urlMappingJasaCatInteriorKantorFromMoneyPage1MoneyPage2[cleanUrlJasaKonsFinishing]) {
        generateBreadcrumbShared(
            urlMappingJasaCatInteriorKantorFromMoneyPage1MoneyPage2,
            cleanUrlJasaKonsFinishing,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Finishing', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-finishing.html' },
                { name: 'Perbandingan Jasa Finishing', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-finishing.html' },
                { name: 'Jasa Finishing', url: 'https://www.betonjayareadymix.com/p/jasa-finishing.html' },
                { name: 'Jasa Cat', url: 'https://www.betonjayareadymix.com/p/jasa-cat.html' },
                { name: 'Jasa Cat Interior', url: 'https://www.betonjayareadymix.com/p/jasa-cat-interior.html' },
                { name: 'Jasa Cat Interior Kantor', url: 'https://www.betonjayareadymix.com/p/jasa-cat-interior-kantor.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }

    // ═══════════════════════════════════════════════════════
    // [BLOK 11] HARGA JASA PEMBUATAN FURNITURE
    // ═══════════════════════════════════════════════════════
	
    if (urlMappingHargaJasaPembuatanFurnitureFromMoneyPageMoneyPage1[cleanUrlJasaKonsFinishing]) {
        generateBreadcrumbShared(
            urlMappingHargaJasaPembuatanFurnitureFromMoneyPageMoneyPage1,
            cleanUrlJasaKonsFinishing,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Pembuatan', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-pembuatan.html' },
                { name: 'Perbandingan Jasa Pembuatan', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-pembuatan.html' },
                { name: 'Jasa Pembuatan', url: 'https://www.betonjayareadymix.com/p/jasa-pembuatan.html' },
                { name: 'Jasa Pembuatan Furniture', url: 'https://www.betonjayareadymix.com/p/jasa-pembuatan-furniture.html' },
                { name: 'Harga Jasa Pembuatan Furniture', url: 'https://www.betonjayareadymix.com/p/harga-jasa-pembuatan-furniture.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }
	
    // ═══════════════════════════════════════════════════════
    // [BLOK 12] JASA FINISHING DINDING
    // ═══════════════════════════════════════════════════════
    
    if (urlMappingFinishingDindingFromMoneyMaster1MoneyPage[cleanUrlJasaKonsFinishing]) {
        generateBreadcrumbShared(
            urlMappingFinishingDindingFromMoneyMaster1MoneyPage,
            cleanUrlJasaKonsFinishing,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Finishing', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-finishing.html' },
                { name: 'Perbandingan Jasa Finishing', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-finishing.html' },
                { name: 'Jasa Finishing', url: 'https://www.betonjayareadymix.com/p/jasa-finishing.html' },
                { name: 'Jasa Finishing Dinding', url: 'https://www.betonjayareadymix.com/p/jasa-finishing-dinding.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }
	
    // ═══════════════════════════════════════════════════════
    // [BLOK 13] JASA PASANG WALLPAPER DINDING
    // ═══════════════════════════════════════════════════════
	
    if (urlMappingJasaPasangWallpaperDindingFromMoneyPageMoneyPage1[cleanUrlJasaKonsFinishing]) {
        generateBreadcrumbShared(
            urlMappingJasaPasangWallpaperDindingFromMoneyPageMoneyPage1,
            cleanUrlJasaKonsFinishing,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Pasang', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-pasang.html' },
                { name: 'Perbandingan Jasa Pasang', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-pasang.html' },
                { name: 'Jasa Pasang Dinding', url: 'https://www.betonjayareadymix.com/p/jasa-pasang-dinding.html' },
                { name: 'Jasa Pasang Wallpaper Dinding', url: 'https://www.betonjayareadymix.com/p/jasa-pasang-wallpaper-dinding.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }
    
    // ═══════════════════════════════════════════════════════
    // [BLOK 14] JASA FINISHING EPOXY DINDING
    // ═══════════════════════════════════════════════════════
	
    if (urlMappingJasaFinishingEpoxyDindingFromMoneyPageMoneyPage1[cleanUrlJasaKonsFinishing]) {
        generateBreadcrumbShared(
            urlMappingJasaFinishingEpoxyDindingFromMoneyPageMoneyPage1,
            cleanUrlJasaKonsFinishing,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Finishing', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-finishing.html' },
                { name: 'Perbandingan Jasa Finishing', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-finishing.html' },
                { name: 'Jasa Finishing', url: 'https://www.betonjayareadymix.com/p/jasa-finishing.html' },
                { name: 'Jasa Finishing Dinding', url: 'https://www.betonjayareadymix.com/p/jasa-finishing-dinding.html' },
                { name: 'Jasa Finishing Epoxy Dinding', url: 'https://www.betonjayareadymix.com/p/jasa-finishing-epoxy-dinding.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }
    
    // ═══════════════════════════════════════════════════════
    // [BLOK 15] JASA PLESTERAN ACIAN DINDING
    // ═══════════════════════════════════════════════════════
	
    if (urlMappingJasaPlesteranAcianDindingFromMoneyPageMoneyPage1[cleanUrlJasaKonsFinishing]) {
        generateBreadcrumbShared(
            urlMappingJasaPlesteranAcianDindingFromMoneyPageMoneyPage1,
            cleanUrlJasaKonsFinishing,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Finishing', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-finishing.html' },
                { name: 'Perbandingan Jasa Finishing', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-finishing.html' },
                { name: 'Jasa Finishing', url: 'https://www.betonjayareadymix.com/p/jasa-finishing.html' },
                { name: 'Jasa Finishing Dinding', url: 'https://www.betonjayareadymix.com/p/jasa-finishing-dinding.html' },
                { name: 'Jasa Plesteran Acian Dinding', url: 'https://www.betonjayareadymix.com/p/jasa-plesteran-acian-dinding.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }
    
    if (urlMappingHargaJasaPlesteranAcianFromMoneyPage1MoneyPage2[cleanUrlJasaKonsFinishing]) {
        generateBreadcrumbShared(
            urlMappingHargaJasaPlesteranAcianFromMoneyPage1MoneyPage2,
            cleanUrlJasaKonsFinishing,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Finishing', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-finishing.html' },
                { name: 'Perbandingan Jasa Finishing', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-finishing.html' },
                { name: 'Jasa Finishing', url: 'https://www.betonjayareadymix.com/p/jasa-finishing.html' },
                { name: 'Jasa Finishing Dinding', url: 'https://www.betonjayareadymix.com/p/jasa-finishing-dinding.html' },
                { name: 'Jasa Plesteran Acian Dinding', url: 'https://www.betonjayareadymix.com/p/jasa-plesteran-acian-dinding.html' },
                { name: 'Harga Jasa Plesteran & Acian', url: 'https://www.betonjayareadymix.com/p/harga-jasa-plesteran-acian.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }

    // ═══════════════════════════════════════════════════════
    // [BLOK 16] JASA PASANG WPC
    // ═══════════════════════════════════════════════════════
	
    if (urlMappingJasaPasangWpcFromMoneyMaster1MoneyPage[cleanUrlJasaKonsFinishing]) {
        generateBreadcrumbShared(
            urlMappingJasaPasangWpcFromMoneyMaster1MoneyPage,
            cleanUrlJasaKonsFinishing,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Pasang', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-pasang.html' },
                { name: 'Perbandingan Jasa Pasang', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-pasang.html' },
                { name: 'Jasa Pasang', url: 'https://www.betonjayareadymix.com/p/jasa-pasang.html' },
                { name: 'Jasa Pasang WPC', url: 'https://www.betonjayareadymix.com/p/jasa-pasang-wpc.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }
    
    if (urlMappingJasaPasangWPCDindingFromMoneyPageMoneyPage1[cleanUrlJasaKonsFinishing]) {
        generateBreadcrumbShared(
            urlMappingJasaPasangWPCDindingFromMoneyPageMoneyPage1,
            cleanUrlJasaKonsFinishing,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Pasang', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-pasang.html' },
                { name: 'Perbandingan Jasa Pasang', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-pasang.html' },
                { name: 'Jasa Pasang', url: 'https://www.betonjayareadymix.com/p/jasa-pasang.html' },
                { name: 'Jasa Pasang WPC', url: 'https://www.betonjayareadymix.com/p/jasa-pasang-wpc.html' },
                { name: 'Jasa Pasang WPC Dinding', url: 'https://www.betonjayareadymix.com/p/jasa-pasang-wpc-dinding.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }
	
    if (urlMappingJasaPasangWPCLantaiFromMoneyPageMoneyPage1[cleanUrlJasaKonsFinishing]) {
        generateBreadcrumbShared(
            urlMappingJasaPasangWPCLantaiFromMoneyPageMoneyPage1,
            cleanUrlJasaKonsFinishing,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Pasang', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-pasang.html' },
                { name: 'Perbandingan Jasa Pasang', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-pasang.html' },
                { name: 'Jasa Pasang WPC', url: 'https://www.betonjayareadymix.com/p/jasa-pasang-wpc.html' },
                { name: 'Jasa Pasang WPC Lantai', url: 'https://www.betonjayareadymix.com/p/jasa-pasang-wpc-lantai.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }

    // ═══════════════════════════════════════════════════════
    // [BLOK 17] JASA FINISHING INFRASTRUKTUR
    // ═══════════════════════════════════════════════════════
	
    if (urlMappingFinishingInfrastrukturFromMoneyMaster1MoneyPage[cleanUrlJasaKonsFinishing]) {
        generateBreadcrumbShared(
            urlMappingFinishingInfrastrukturFromMoneyMaster1MoneyPage,
            cleanUrlJasaKonsFinishing,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Finishing', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-finishing.html' },
                { name: 'Perbandingan Jasa Finishing', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-finishing.html' },
                { name: 'Jasa Finishing', url: 'https://www.betonjayareadymix.com/p/jasa-finishing.html' },
                { name: 'Jasa Finishing Infrastruktur', url: 'https://www.betonjayareadymix.com/p/jasa-finishing-infrastruktur.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }

    // ═══════════════════════════════════════════════════════
    // [BLOK 18] JASA FINISHING LANTAI
    // ═══════════════════════════════════════════════════════
	
    if (urlMappingFinishingLantaiFromMoneyMasterMoneyPage[cleanUrlJasaKonsFinishing]) {
        generateBreadcrumbShared(
            urlMappingFinishingLantaiFromMoneyMasterMoneyPage,
            cleanUrlJasaKonsFinishing,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Finishing', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-finishing.html' },
                { name: 'Perbandingan Jasa Finishing', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-finishing.html' },
                { name: 'Jasa Finishing', url: 'https://www.betonjayareadymix.com/p/jasa-finishing.html' },
                { name: 'Jasa Finishing Lantai', url: 'https://www.betonjayareadymix.com/p/jasa-finishing-lantai.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }
    
    if (urlMappingHargaJasaFinishingLantaiFromMoneyPageMoneyPage1[cleanUrlJasaKonsFinishing]) {
        generateBreadcrumbShared(
            urlMappingHargaJasaFinishingLantaiFromMoneyPageMoneyPage1,
            cleanUrlJasaKonsFinishing,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Finishing', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-finishing.html' },
                { name: 'Perbandingan Jasa Finishing', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-finishing.html' },
                { name: 'Jasa Finishing', url: 'https://www.betonjayareadymix.com/p/jasa-finishing.html' },
                { name: 'Jasa Finishing Lantai', url: 'https://www.betonjayareadymix.com/p/jasa-finishing-lantai.html' },
                { name: 'Harga Jasa Finishing Lantai', url: 'https://www.betonjayareadymix.com/p/harga-jasa-finishing-lantai.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }

    if (urlMappingJasaFinishingLantaiBetonFromMoneyPageMoneyPage1[cleanUrlJasaKonsFinishing]) {
        generateBreadcrumbShared(
            urlMappingJasaFinishingLantaiBetonFromMoneyPageMoneyPage1,
            cleanUrlJasaKonsFinishing,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Finishing', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-finishing.html' },
                { name: 'Perbandingan Jasa Finishing', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-finishing.html' },
                { name: 'Jasa Finishing', url: 'https://www.betonjayareadymix.com/p/jasa-finishing.html' },
                { name: 'Jasa Finishing Lantai', url: 'https://www.betonjayareadymix.com/p/jasa-finishing-lantai.html' },
                { name: 'Jasa Finishing Lantai Beton', url: 'https://www.betonjayareadymix.com/p/jasa-finishing-lantai-beton.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }
    
    if (urlMappingJasaFinishingLantaiKayuFromMoneyPageMoneyPage1[cleanUrlJasaKonsFinishing]) {
        generateBreadcrumbShared(
            urlMappingJasaFinishingLantaiKayuFromMoneyPageMoneyPage1,
            cleanUrlJasaKonsFinishing,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Finishing', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-finishing.html' },
                { name: 'Perbandingan Jasa Finishing', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-finishing.html' },
                { name: 'Jasa Finishing', url: 'https://www.betonjayareadymix.com/p/jasa-finishing.html' },
                { name: 'Jasa Finishing Lantai', url: 'https://www.betonjayareadymix.com/p/jasa-finishing-lantai.html' },
                { name: 'Jasa Finishing Lantai Kayu', url: 'https://www.betonjayareadymix.com/p/jasa-finishing-lantai-kayu.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }
    
    if (urlMappingJasaFinishingLantaiMarmerFromMoneyPageMoneyPage1[cleanUrlJasaKonsFinishing]) {
        generateBreadcrumbShared(
            urlMappingJasaFinishingLantaiMarmerFromMoneyPageMoneyPage1,
            cleanUrlJasaKonsFinishing,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Finishing', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-finishing.html' },
                { name: 'Perbandingan Jasa Finishing', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-finishing.html' },
                { name: 'Jasa Finishing', url: 'https://www.betonjayareadymix.com/p/jasa-finishing.html' },
                { name: 'Jasa Finishing Lantai', url: 'https://www.betonjayareadymix.com/p/jasa-finishing-lantai.html' },
                { name: 'Jasa Finishing Lantai Marmer', url: 'https://www.betonjayareadymix.com/p/jasa-finishing-lantai-marmer.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }
    
    if (urlMappingJasaPolesLantaiGranitFromMoneyPageMoneyPage1[cleanUrlJasaKonsFinishing]) {
        generateBreadcrumbShared(
            urlMappingJasaPolesLantaiGranitFromMoneyPageMoneyPage1,
            cleanUrlJasaKonsFinishing,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Finishing', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-finishing.html' },
                { name: 'Perbandingan Jasa Finishing', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-finishing.html' },
                { name: 'Jasa Finishing', url: 'https://www.betonjayareadymix.com/p/jasa-finishing.html' },
                { name: 'Jasa Finishing Lantai', url: 'https://www.betonjayareadymix.com/p/jasa-finishing-lantai.html' },
                { name: 'Jasa Finishing Lantai Granit', url: 'https://www.betonjayareadymix.com/p/jasa-finishing-lantai-granit.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }

    // ═══════════════════════════════════════════════════════
    // [BLOK 19] JASA PASANG KERAMIK LANTAI
    // ═══════════════════════════════════════════════════════
	
    if (urlMappingJasaPasangKeramikLantaiFromMoneyPageMoneyPage1[cleanUrlJasaKonsFinishing]) {
        generateBreadcrumbShared(
            urlMappingJasaPasangKeramikLantaiFromMoneyPageMoneyPage1,
            cleanUrlJasaKonsFinishing,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Pasang', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-pasang.html' },
                { name: 'Perbandingan Jasa Pasang', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-pasang.html' },
                { name: 'Jasa Pasang', url: 'https://www.betonjayareadymix.com/p/jasa-pasang.html' },
                { name: 'Jasa Pasang Lantai', url: 'https://www.betonjayareadymix.com/p/jasa-pasang-lantai.html' },
                { name: 'Jasa Pasang Keramik Lantai', url: 'https://www.betonjayareadymix.com/p/jasa-pasang-keramik-lantai.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }
    
    if (urlMappingHargaJasaPasangKeramikLantaiFromMoneyPage1MoneyPage2[cleanUrlJasaKonsFinishing]) {
        generateBreadcrumbShared(
            urlMappingHargaJasaPasangKeramikLantaiFromMoneyPage1MoneyPage2,
            cleanUrlJasaKonsFinishing,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Pasang', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-pasang.html' },
                { name: 'Perbandingan Jasa Pasang', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-pasang.html' },
                { name: 'Jasa Pasang', url: 'https://www.betonjayareadymix.com/p/jasa-pasang.html' },
                { name: 'Jasa Pasang Lantai', url: 'https://www.betonjayareadymix.com/p/jasa-pasang-lantai.html' },
                { name: 'Jasa Pasang Keramik Lantai', url: 'https://www.betonjayareadymix.com/p/jasa-pasang-keramik-lantai.html' },
                { name: 'Harga Jasa Pasang Keramik Lantai', url: 'https://www.betonjayareadymix.com/p/harga-jasa-pasang-keramik-lantai.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }

    // ═══════════════════════════════════════════════════════
    // [BLOK 20] JASA LANTAI SUPER FLAT + TROWEL + SCREEDING + FLOOR HARDENER + EPOXY
    // ═══════════════════════════════════════════════════════

    if (urlMappingJasaLantaiSuperFlatFromMoneyPage1MoneyPage2[cleanUrlJasaKonsFinishing]) {
        generateBreadcrumbShared(
            urlMappingJasaLantaiSuperFlatFromMoneyPage1MoneyPage2,
            cleanUrlJasaKonsFinishing,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Finishing', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-finishing.html' },
                { name: 'Perbandingan Jasa Finishing', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-finishing.html' },
                { name: 'Jasa Finishing', url: 'https://www.betonjayareadymix.com/p/jasa-finishing.html' },
                { name: 'Jasa Finishing Lantai', url: 'https://www.betonjayareadymix.com/p/jasa-finishing-lantai.html' },
                { name: 'Jasa Finishing Lantai Beton', url: 'https://www.betonjayareadymix.com/p/jasa-finishing-lantai-beton.html' },
                { name: 'Jasa Lantai Super Flat', url: 'https://www.betonjayareadymix.com/p/jasa-lantai-super-flat.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }
    
    if (urlMappingJasaTrowelLantaiBetonFromMoneyPage1MoneyPage2[cleanUrlJasaKonsFinishing]) {
        generateBreadcrumbShared(
            urlMappingJasaTrowelLantaiBetonFromMoneyPage1MoneyPage2,
            cleanUrlJasaKonsFinishing,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Finishing', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-finishing.html' },
                { name: 'Perbandingan Jasa Finishing', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-finishing.html' },
                { name: 'Jasa Finishing', url: 'https://www.betonjayareadymix.com/p/jasa-finishing.html' },
                { name: 'Jasa Finishing Lantai', url: 'https://www.betonjayareadymix.com/p/jasa-finishing-lantai.html' },
                { name: 'Jasa Finishing Lantai Beton', url: 'https://www.betonjayareadymix.com/p/jasa-finishing-lantai-beton.html' },
                { name: 'Jasa Trowel Lantai Beton', url: 'https://www.betonjayareadymix.com/p/jasa-trowel-lantai-beton.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }
    
    if (urlMappingJasaScreedingLantaiBetonFromMoneyPage1MoneyPage2[cleanUrlJasaKonsFinishing]) {
        generateBreadcrumbShared(
            urlMappingJasaScreedingLantaiBetonFromMoneyPage1MoneyPage2,
            cleanUrlJasaKonsFinishing,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Finishing', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-finishing.html' },
                { name: 'Perbandingan Jasa Finishing', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-finishing.html' },
                { name: 'Jasa Finishing', url: 'https://www.betonjayareadymix.com/p/jasa-finishing.html' },
                { name: 'Jasa Finishing Lantai', url: 'https://www.betonjayareadymix.com/p/jasa-finishing-lantai.html' },
                { name: 'Jasa Finishing Lantai Beton', url: 'https://www.betonjayareadymix.com/p/jasa-finishing-lantai-beton.html' },
                { name: 'Jasa Screeding Lantai Beton', url: 'https://www.betonjayareadymix.com/p/jasa-screeding-lantai-beton.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }
    
    if (urlMappingJasaFloorHardenerLantaiFromMoneyPage1MoneyPage2[cleanUrlJasaKonsFinishing]) {
        generateBreadcrumbShared(
            urlMappingJasaFloorHardenerLantaiFromMoneyPage1MoneyPage2,
            cleanUrlJasaKonsFinishing,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Finishing', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-finishing.html' },
                { name: 'Perbandingan Jasa Finishing', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-finishing.html' },
                { name: 'Jasa Finishing', url: 'https://www.betonjayareadymix.com/p/jasa-finishing.html' },
                { name: 'Jasa Finishing Lantai', url: 'https://www.betonjayareadymix.com/p/jasa-finishing-lantai.html' },
                { name: 'Jasa Finishing Lantai Beton', url: 'https://www.betonjayareadymix.com/p/jasa-finishing-lantai-beton.html' },
                { name: 'Jasa Floor Hardener Lantai', url: 'https://www.betonjayareadymix.com/p/jasa-floor-hardener-lantai.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }
    
    if (urlMappingJasaFinishingLantaiEpoxyFromMoneyPageMoney1Page2[cleanUrlJasaKonsFinishing]) {
        generateBreadcrumbShared(
            urlMappingJasaFinishingLantaiEpoxyFromMoneyPageMoney1Page2,
            cleanUrlJasaKonsFinishing,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Finishing', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-finishing.html' },
                { name: 'Perbandingan Jasa Finishing', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-finishing.html' },
                { name: 'Jasa Finishing', url: 'https://www.betonjayareadymix.com/p/jasa-finishing.html' },
                { name: 'Jasa Finishing Lantai', url: 'https://www.betonjayareadymix.com/p/jasa-finishing-lantai.html' },
                { name: 'Jasa Finishing Lantai Beton', url: 'https://www.betonjayareadymix.com/p/jasa-finishing-lantai-beton.html' },
                { name: 'Jasa Finishing Lantai Epoxy', url: 'https://www.betonjayareadymix.com/p/jasa-finishing-lantai-epoxy.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }

    // ═══════════════════════════════════════════════════════
    // [BLOK 21] JASA FINISHING EKSTERIOR
    // ═══════════════════════════════════════════════════════
    
    if (urlMappingFinishingEksteriorFromMoneyMaster1MoneyPage[cleanUrlJasaKonsFinishing]) {
        generateBreadcrumbShared(
            urlMappingFinishingEksteriorFromMoneyMaster1MoneyPage,
            cleanUrlJasaKonsFinishing,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Finishing', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-finishing.html' },
                { name: 'Perbandingan Jasa Finishing', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-finishing.html' },
                { name: 'Jasa Finishing', url: 'https://www.betonjayareadymix.com/p/jasa-finishing.html' },
                { name: 'Jasa Finishing Eksterior', url: 'https://www.betonjayareadymix.com/p/jasa-finishing-eksterior.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }
    
    // ═══════════════════════════════════════════════════════
    // [BLOK 22] JASA EKSTERIOR + FASAD
    // ═══════════════════════════════════════════════════════
    
    if (urlMappingJasaEksteriorFromMoneyMasterMoneyMaster1[cleanUrlJasaKonsFinishing]) {
        generateBreadcrumbShared(
            urlMappingJasaEksteriorFromMoneyMasterMoneyMaster1,
            cleanUrlJasaKonsFinishing,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Eksterior', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-eksterior.html' },
                { name: 'Perbandingan Jasa Eksterior', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-eksterior.html' },
                { name: 'Jasa Eksterior', url: 'https://www.betonjayareadymix.com/p/jasa-eksterior.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }
    
    if (urlMappingHargaJasaEksteriorFromMoneyMaster1MoneyPage[cleanUrlJasaKonsFinishing]) {
        generateBreadcrumbShared(
            urlMappingHargaJasaEksteriorFromMoneyMaster1MoneyPage,
            cleanUrlJasaKonsFinishing,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Eksterior', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-eksterior.html' },
                { name: 'Perbandingan Jasa Eksterior', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-eksterior.html' },
                { name: 'Jasa Eksterior', url: 'https://www.betonjayareadymix.com/p/jasa-eksterior.html' },
                { name: 'Harga Jasa Eksterior', url: 'https://www.betonjayareadymix.com/p/harga-jasa-eksterior.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }
    
    if (urlMappingJasaFasadRumahFromMoneyMaster1MoneyPage[cleanUrlJasaKonsFinishing]) {
        generateBreadcrumbShared(
            urlMappingJasaFasadRumahFromMoneyMaster1MoneyPage,
            cleanUrlJasaKonsFinishing,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Eksterior', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-eksterior.html' },
                { name: 'Perbandingan Jasa Eksterior', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-eksterior.html' },
                { name: 'Jasa Eksterior', url: 'https://www.betonjayareadymix.com/p/jasa-eksterior.html' },
                { name: 'Jasa Fasad Rumah', url: 'https://www.betonjayareadymix.com/p/jasa-fasad-rumah.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }
    
    if (urlMappingJasaPasangACPFasadFromMoneyPageMoneyPage1[cleanUrlJasaKonsFinishing]) {
        generateBreadcrumbShared(
            urlMappingJasaPasangACPFasadFromMoneyPageMoneyPage1,
            cleanUrlJasaKonsFinishing,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Eksterior', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-eksterior.html' },
                { name: 'Perbandingan Jasa Eksterior', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-eksterior.html' },
                { name: 'Jasa Eksterior', url: 'https://www.betonjayareadymix.com/p/jasa-eksterior.html' },
                { name: 'Jasa Fasad Rumah', url: 'https://www.betonjayareadymix.com/p/jasa-fasad-rumah.html' },
                { name: 'Jasa Pasang ACP Fasad', url: 'https://www.betonjayareadymix.com/p/jasa-pasang-acp-fasad.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }

    // ═══════════════════════════════════════════════════════
    // [BLOK 23] JASA PELAPISAN BATU ALAM EKSTERIOR + GENTENG DAK
    // ═══════════════════════════════════════════════════════
	
    if (urlMappingJasaPelapisanBatuAlamEksteriorFromMoneyPageMoneyPage1[cleanUrlJasaKonsFinishing]) {
        generateBreadcrumbShared(
            urlMappingJasaPelapisanBatuAlamEksteriorFromMoneyPageMoneyPage1,
            cleanUrlJasaKonsFinishing,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Finishing', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-finishing.html' },
                { name: 'Perbandingan Jasa Finishing', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-finishing.html' },
                { name: 'Jasa Finishing', url: 'https://www.betonjayareadymix.com/p/jasa-finishing.html' },
                { name: 'Jasa Finishing Eksterior', url: 'https://www.betonjayareadymix.com/p/jasa-finishing-eksterior.html' },
                { name: 'Jasa Pelapisan Batu Alam Eksterior', url: 'https://www.betonjayareadymix.com/p/jasa-pelapisan-batu-alam-eksterior.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }

    if (urlMappingJasaPelapisanGentengDakFromMoneyPageMoneyPage1[cleanUrlJasaKonsFinishing]) {
        generateBreadcrumbShared(
            urlMappingJasaPelapisanGentengDakFromMoneyPageMoneyPage1,
            cleanUrlJasaKonsFinishing,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Finishing', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-finishing.html' },
                { name: 'Perbandingan Jasa Finishing', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-finishing.html' },
                { name: 'Jasa Finishing', url: 'https://www.betonjayareadymix.com/p/jasa-finishing.html' },
                { name: 'Jasa Finishing Eksterior', url: 'https://www.betonjayareadymix.com/p/jasa-finishing-eksterior.html' },
                { name: 'Jasa Pelapisan Genteng Dak', url: 'https://www.betonjayareadymix.com/p/jasa-pelapisan-genteng-dak.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }
	
    // ═══════════════════════════════════════════════════════
    // [BLOK 24] JASA TAMAN
    // ═══════════════════════════════════════════════════════
	
    if (urlMappingJasaTamanFromMoneyMaster2MoneyMaster3[cleanUrlJasaKonsFinishing]) {
        generateBreadcrumbShared(
            urlMappingJasaTamanFromMoneyMaster2MoneyMaster3,
            cleanUrlJasaKonsFinishing,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Eksterior', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-eksterior.html' },
                { name: 'Perbandingan Jasa Eksterior', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-eksterior.html' },
                { name: 'Jasa Eksterior', url: 'https://www.betonjayareadymix.com/p/jasa-eksterior.html' },
                { name: 'Jasa Taman', url: 'https://www.betonjayareadymix.com/p/jasa-taman.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }
    
    if (urlMappingJasaPembuatanTamanFromMoneyMaster3MoneyPage[cleanUrlJasaKonsFinishing]) {
        generateBreadcrumbShared(
            urlMappingJasaPembuatanTamanFromMoneyMaster3MoneyPage,
            cleanUrlJasaKonsFinishing,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Eksterior', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-eksterior.html' },
                { name: 'Perbandingan Jasa Eksterior', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-eksterior.html' },
                { name: 'Jasa Eksterior', url: 'https://www.betonjayareadymix.com/p/jasa-eksterior.html' },
                { name: 'Jasa Taman', url: 'https://www.betonjayareadymix.com/p/jasa-taman.html' },
                { name: 'Jasa Pembuatan Taman', url: 'https://www.betonjayareadymix.com/p/jasa-pembuatan-taman.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }

    // ═══════════════════════════════════════════════════════
    // [BLOK 25] JASA FINISHING STRUKTUR
    // ═══════════════════════════════════════════════════════
	
    if (urlMappingJasaFinishingStrukturFromMoneyMaster1MoneyPage[cleanUrlJasaKonsFinishing]) {
        generateBreadcrumbShared(
            urlMappingJasaFinishingStrukturFromMoneyMaster1MoneyPage,
            cleanUrlJasaKonsFinishing,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Finishing', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-finishing.html' },
                { name: 'Perbandingan Jasa Finishing', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-finishing.html' },
                { name: 'Jasa Finishing', url: 'https://www.betonjayareadymix.com/p/jasa-finishing.html' },
                { name: 'Jasa Finishing Struktur', url: 'https://www.betonjayareadymix.com/p/jasa-finishing-struktur.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }
    
    if (urlMappingJasaFinishingDakBetonFromMoneyPageMoneyPage1[cleanUrlJasaKonsFinishing]) {
        generateBreadcrumbShared(
            urlMappingJasaFinishingDakBetonFromMoneyPageMoneyPage1,
            cleanUrlJasaKonsFinishing,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Finishing', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-finishing.html' },
                { name: 'Perbandingan Jasa Finishing', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-finishing.html' },
                { name: 'Jasa Finishing', url: 'https://www.betonjayareadymix.com/p/jasa-finishing.html' },
                { name: 'Jasa Finishing Struktur', url: 'https://www.betonjayareadymix.com/p/jasa-finishing-struktur.html' },
                { name: 'Jasa Finishing Dak Beton', url: 'https://www.betonjayareadymix.com/p/jasa-finishing-dak-beton.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }
    
    if (urlMappingJasaFinishingStrukturBetonEksposFromMoneyPageMoneyPage1[cleanUrlJasaKonsFinishing]) {
        generateBreadcrumbShared(
            urlMappingJasaFinishingStrukturBetonEksposFromMoneyPageMoneyPage1,
            cleanUrlJasaKonsFinishing,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Finishing', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-finishing.html' },
                { name: 'Perbandingan Jasa Finishing', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-finishing.html' },
                { name: 'Jasa Finishing', url: 'https://www.betonjayareadymix.com/p/jasa-finishing.html' },
                { name: 'Jasa Finishing Struktur', url: 'https://www.betonjayareadymix.com/p/jasa-finishing-struktur.html' },
                { name: 'Jasa Finishing Struktur Beton Ekspos', url: 'https://www.betonjayareadymix.com/p/jasa-finishing-struktur-beton-ekspos.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }
    
    if (urlMappingJasaFinishingKolomdanBalokFromMoneyPageMoneyPage1[cleanUrlJasaKonsFinishing]) {
        generateBreadcrumbShared(
            urlMappingJasaFinishingKolomdanBalokFromMoneyPageMoneyPage1,
            cleanUrlJasaKonsFinishing,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Finishing', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-finishing.html' },
                { name: 'Perbandingan Jasa Finishing', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-finishing.html' },
                { name: 'Jasa Finishing', url: 'https://www.betonjayareadymix.com/p/jasa-finishing.html' },
                { name: 'Jasa Finishing Struktur', url: 'https://www.betonjayareadymix.com/p/jasa-finishing-struktur.html' },
                { name: 'Jasa Finishing Kolom dan Balok', url: 'https://www.betonjayareadymix.com/p/jasa-finishing-kolom-dan-balok.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }
    
    if (urlMappingJasaPelapisanCoatingStrukturFromMoneyPageMoneyPage1[cleanUrlJasaKonsFinishing]) {
        generateBreadcrumbShared(
            urlMappingJasaPelapisanCoatingStrukturFromMoneyPageMoneyPage1,
            cleanUrlJasaKonsFinishing,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Finishing', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-finishing.html' },
                { name: 'Perbandingan Jasa Finishing', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-finishing.html' },
                { name: 'Jasa Finishing', url: 'https://www.betonjayareadymix.com/p/jasa-finishing.html' },
                { name: 'Jasa Finishing Struktur', url: 'https://www.betonjayareadymix.com/p/jasa-finishing-struktur.html' },
                { name: 'Jasa Pelapisan Coating Struktur', url: 'https://www.betonjayareadymix.com/p/jasa-pelapisan-coating-struktur.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }
    
    if (urlMappingJasaPelapisanWaterproofingStrukturFromMoneyPage1MoneyPage2[cleanUrlJasaKonsFinishing]) {
        generateBreadcrumbShared(
            urlMappingJasaPelapisanWaterproofingStrukturFromMoneyPage1MoneyPage2,
            cleanUrlJasaKonsFinishing,
            [
                { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html' },
                { name: 'Daftar Jasa Finishing', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-finishing.html' },
                { name: 'Perbandingan Jasa Finishing', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-finishing.html' },
                { name: 'Jasa Finishing', url: 'https://www.betonjayareadymix.com/p/jasa-finishing.html' },
                { name: 'Jasa Finishing Struktur', url: 'https://www.betonjayareadymix.com/p/jasa-finishing-struktur.html' },
                { name: 'Jasa Pelapisan Coating Struktur', url: 'https://www.betonjayareadymix.com/p/jasa-pelapisan-coating-struktur.html' },
                { name: 'Jasa Pelapisan Waterproofing Struktur', url: 'https://www.betonjayareadymix.com/p/jasa-pelapisan-waterproofing-struktur.html' }
            ],
            'JASA_KONSTRUKSI'
        );
    }

    console.log('[jasa-konstruksi-finishing] ✅ Semua breadcrumb selesai diproses');
}

console.log('═══════════════════════════════════════════════════════════');
console.log('📦 PART 3 SELESAI — Lanjut ke PART 4 (Fix v2.1.0 + Penutup)');
console.log('═══════════════════════════════════════════════════════════');

// ═══════════════════════════════════════════════════════════
// [BAGIAN 5] FIX v2.1.0 — Handle DOMContentLoaded race condition
// ═══════════════════════════════════════════════════════════
// MASALAH: kalau script di-load SETELAH DOMContentLoaded fire
// (misal pakai defer/async), maka addEventListener tidak dipanggil.
// SOLUSI: cek document.readyState — kalau sudah siap, langsung
// panggil handler tanpa tunggu event.
// ═══════════════════════════════════════════════════════════

if (document.readyState === 'loading') {
    console.log('[jasa-konstruksi-finishing] ⏳ DOM loading, tunggu event');
    document.addEventListener('DOMContentLoaded', initJasaKonsFinishing);
} else {
    console.log('[jasa-konstruksi-finishing] ⚡ DOM ready, langsung execute');
    initJasaKonsFinishing();
}

// ============================================================
// AKHIR FILE — TIDAK ADA KARAKTER TAMBAHAN
// ============================================================
