/*
const urlMappingStrukturBajaRangka = {
"https://www.betonjayareadymix.com/p/jasa-rangka-atap-baja-ringan.html": "Jasa Rangka Atap Baja Ringan",
  "https://www.betonjayareadymix.com/p/jasa-konstruksi-baja-konvensional.html": "Jasa Konstruksi Baja Konvensional",
  "https://www.betonjayareadymix.com/p/jasa-kanopi-baja-dan-besi.html": "Jasa Kanopi Baja dan Besi",
  "https://www.betonjayareadymix.com/p/jasa-struktur-baja-gudang.html": "Jasa Struktur Baja Gudang"

};
*/
// ============================================================
// SUB JASA RANGKA ATAP BAJA RINGAN
// Parent: Jasa Struktur Baja dan Rangka Ringan
// ============================================================

const urlMappingJasaRangkaAtapBajaRingan = {
  // ============================================================
  // [MONEY_MASTER] - JASA PASANG ATAP BAJA RINGAN
  // 🧠 TYPE: MONEY_MASTER (dimulai dengan "jasa pasang")
  // Breadcrumb: Home > Jasa Struktur Konstruksi > Jasa Struktur Baja dan Rangka Ringan > Jasa Pasang Atap Baja Ringan
  // ============================================================
  "https://www.betonjayareadymix.com/2018/09/jasa-pasang-atap-baja-ringan.html": "Jasa Pasang Atap Baja Ringan",  // TYPE: MONEY_MASTER
  
  // ============================================================
  // [MONEY_MASTER] - JASA PASANG KANOPI BAJA RINGAN TERDEKAT
  // 🧠 TYPE: MONEY_MASTER (dimulai dengan "jasa pasang")
  // ============================================================
  "https://www.betonjayareadymix.com/2018/09/jasa-pasang-kanopi-baja-ringan-terdekat.html": "Jasa Pasang Kanopi Baja Ringan Terdekat",  // TYPE: MONEY_MASTER
  
  // ============================================================
  // [MONEY_MASTER] - HARGA JASA PASANG KANOPI BAJA RINGAN
  // 🧠 TYPE: MONEY_MASTER (dimulai dengan "harga")
  // ============================================================
  "https://www.betonjayareadymix.com/2018/09/harga-jasa-pasang-kanopi-baja-ringan.html": "Harga Jasa Pasang Kanopi Baja Ringan",  // TYPE: MONEY_MASTER
  
  // ============================================================
  // [MONEY_MASTER] - HARGA JASA PASANG BAJA RINGAN
  // 🧠 TYPE: MONEY_MASTER (dimulai dengan "harga")
  // ============================================================
  "https://www.betonjayareadymix.com/2018/09/harga-jasa-pasang-baja-ringan.html": "Harga Jasa Pasang Baja Ringan",  // TYPE: MONEY_MASTER
  
  // ============================================================
  // [MONEY_MASTER] - JASA PASANG BAJA RINGAN TERDEKAT
  // 🧠 TYPE: MONEY_MASTER (dimulai dengan "jasa pasang")
  // ============================================================
  "https://www.betonjayareadymix.com/2018/09/jasa-pasang-baja-ringan-terdekat.html": "Jasa Pasang Baja Ringan Terdekat",  // TYPE: MONEY_MASTER
  
  // ============================================================
  // [SUB2] - JASA ATAP BAJA RINGAN
  // 🧠 TYPE: SUB2 (nama umum kategori, tanpa kata transaksi)
  // ============================================================
  "https://www.betonjayareadymix.com/2018/09/jasa-atap-baja-ringan.html": "Jasa Atap Baja Ringan",  // TYPE: SUB2
  
  // ============================================================
  // [MONEY_MASTER] - HARGA JASA PASANG ATAP KANOPI
  // 🧠 TYPE: MONEY_MASTER (dimulai dengan "harga")
  // ============================================================
  "https://www.betonjayareadymix.com/2018/09/harga-jasa-pasang-atap-kanopi.html": "Harga Jasa Pasang Atap Kanopi",  // TYPE: MONEY_MASTER
  
  // ============================================================
  // [MONEY_MASTER] - HARGA JASA PASANG ATAP BAJA RINGAN
  // 🧠 TYPE: MONEY_MASTER (dimulai dengan "harga")
  // ============================================================
  "https://www.betonjayareadymix.com/2018/09/harga-jasa-pasang-atap-baja-ringan.html": "Harga Jasa Pasang Atap Baja Ringan",  // TYPE: MONEY_MASTER
  
  // ============================================================
  // [SUB1] - TUKANG BAJA RINGAN (PANDUAN)
  // 🧠 TYPE: SUB1 (berfungsi sebagai bridge/panduan)
  // ============================================================
  "https://www.betonjayareadymix.com/2018/09/tukang-baja-ringan.html": "Tukang Baja Ringan",  // TYPE: SUB1
  "https://www.betonjayareadymix.com/2018/09/tukang-baja-ringan-murah.html": "Tukang Baja Ringan Murah",  // TYPE: SUB1
  "https://www.betonjayareadymix.com/2018/09/tukang-baja-ringan-terdekat.html": "Tukang Baja Ringan Terdekat",  // TYPE: SUB1
  
  // ============================================================
  // [MONEY_MASTER] - HARGA BORONGAN
  // 🧠 TYPE: MONEY_MASTER (dimulai dengan "harga")
  // ============================================================
  "https://www.betonjayareadymix.com/2018/09/harga-borongan-jasa-konstruksi-baja-ringan.html": "Harga Borongan Jasa Konstruksi Baja Ringan",  // TYPE: MONEY_MASTER
  
  // ============================================================
  // [MONEY_CHILD] - HARGA BORONGAN PER KOTA (ada nama kota)
  // 🧠 TYPE: MONEY_CHILD (mengandung nama kota: Bandung, Jakarta, Depok, Bekasi)
  // ============================================================
  "https://www.betonjayareadymix.com/2019/05/harga-borongan-baja-ringan-plus-material-bandung.html": "Harga Borongan Baja Ringan Plus Material Bandung",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/05/harga-borongan-baja-ringan-plus-material-jakarta.html": "Harga Borongan Baja Ringan Plus Material Jakarta",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/05/harga-borongan-baja-ringan-plus-material-depok.html": "Harga Borongan Baja Ringan Plus Material Depok",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/05/harga-borongan-baja-ringan-plus-material-kota-bekasi.html": "Harga Borongan Baja Ringan Plus Material Kota Bekasi",  // TYPE: MONEY_CHILD
  
  // ============================================================
  // [MONEY_MASTER] - HARGA BORONGAN BAJA RINGAN
  // 🧠 TYPE: MONEY_MASTER (dimulai dengan "harga")
  // ============================================================
  "https://www.betonjayareadymix.com/2019/04/harga-borongan-baja-ringan-plus-material.html": "Harga Borongan Baja Ringan Plus Material",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/2019/04/harga-borongan-baja-ringan.html": "Harga Borongan Baja Ringan",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/2019/04/borongan-baja-ringan.html": "Borongan Baja Ringan"  // TYPE: MONEY_MASTER
};
// ============================================================
// SUB JASA KONSTRUKSI BAJA KONVENSIONAL
// Parent: Jasa Struktur Baja dan Rangka Ringan
// ============================================================

const urlMappingJasaKonstruksiBajaKonvensional = {
  // ============================================================
  // [MONEY_MASTER] - HARGA BORONGAN JASA KONSTRUKSI BESI
  // 🧠 TYPE: MONEY_MASTER (dimulai dengan "harga")
  // ============================================================
  "https://www.betonjayareadymix.com/2018/09/harga-borongan-jasa-konstruksi-besi.html": "Harga Borongan Jasa Konstruksi Besi",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/2018/09/harga-borongan-konstruksi-besi.html": "Harga Borongan Konstruksi Besi",  // TYPE: MONEY_MASTER
  
  // ============================================================
  // [MONEY_MASTER] - HARGA KONSTRUKSI BAJA WF
  // 🧠 TYPE: MONEY_MASTER (dimulai dengan "harga")
  // ============================================================
  "https://www.betonjayareadymix.com/2018/09/harga-jasa-konstruksi-besi-wf.html": "Harga Jasa Konstruksi Besi WF",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/2018/09/harga-jasa-konstruksi-baja-wf.html": "Harga Jasa Konstruksi Baja WF",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/2018/09/harga-konstruksi-baja-wf-per-m2.html": "Harga Konstruksi Baja WF Per M2",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/2018/09/harga-borongan-konstruksi-baja-wf.html": "Harga Borongan Konstruksi Baja WF",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/2018/09/harga-borongan-konstruksi-baja-per-meter.html": "Harga Borongan Konstruksi Baja Per Meter",  // TYPE: MONEY_MASTER
  
  // ============================================================
  // [SUB2] - JASA KONSTRUKSI BAJA (nama umum)
  // 🧠 TYPE: SUB2 (tanpa kata transaksi di awal)
  // ============================================================
  "https://www.betonjayareadymix.com/2018/09/harga-jasa-konstruksi-baja.html": "Harga Jasa Konstruksi Baja",  // TYPE: MONEY_MASTER (ada "harga")
  "https://www.betonjayareadymix.com/2018/09/jasa-konstruksi-baja-gedung.html": "Jasa Konstruksi Baja Gedung",  // TYPE: SUB2
  
  // ============================================================
  // [MONEY_MASTER] - JASA PEMBANGUNAN TOWER
  // 🧠 TYPE: MONEY_MASTER (ada kata "harga")
  // ============================================================
  "https://www.betonjayareadymix.com/2018/09/jasa-pembangunan-tower.html": "Jasa Pembangunan Tower",  // TYPE: SUB2 (tanpa kata transaksi)
  "https://www.betonjayareadymix.com/2018/09/harga-borongan-pasang-tower.html": "Harga Borongan Pasang Tower",  // TYPE: MONEY_MASTER
  
  // ============================================================
  // [VARIANT] - JASA PEMASANGAN TOWER (spesifik jenis)
  // 🧠 TYPE: VARIANT (ada spesifikasi "BTS", "Triangle")
  // ============================================================
  "https://www.betonjayareadymix.com/2018/09/jasa-pemasangan-tower-bts.html": "Jasa Pemasangan Tower BTS",  // TYPE: VARIANT
  "https://www.betonjayareadymix.com/2018/09/jasa-pemasangan-tower-triangle.html": "Jasa Pemasangan Tower Triangle"  // TYPE: VARIANT
};
const urlMappingJasaKanopiBajadanBesi = {

};
const urlMappingJasaStrukturBajaGudang = {

};
// ============================================================
// [SUB2] - JASA COR BETON (MASTER)
// Parent: Jasa Struktur Beton & Pengecoran
// ============================================================

const urlMappingJasaCorBeton = {
  // ============================================================
  // [MONEY_MASTER] - HARGA BORONGAN COR BETON
  // 🧠 TYPE: MONEY_MASTER (dimulai dengan "harga")
  // ============================================================
  "https://www.betonjayareadymix.com/2021/03/harga-borongan-cor-beton.html": "Harga Borongan Cor Beton",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/2021/03/harga-borongan-cor-beton-per-m3.html": "Harga Borongan Cor Beton per m3",  // TYPE: MONEY_MASTER
  
  // ============================================================
  // [VARIANT] - BORONGAN COR BETON [JENIS BANGUNAN]
  // 🧠 TYPE: VARIANT (spesifik jenis bangunan: townhouse, villa, pabrik, dll)
  // ============================================================
  "https://www.betonjayareadymix.com/2018/09/borongan-cor-beton-townhouse.html": "Borongan Cor Beton Townhouse",  // TYPE: VARIANT
  "https://www.betonjayareadymix.com/2018/09/borongan-cor-beton-villa.html": "Borongan Cor Beton Villa",  // TYPE: VARIANT
  "https://www.betonjayareadymix.com/2018/09/borongan-cor-beton-pabrik.html": "Borongan Cor Beton Pabrik",  // TYPE: VARIANT
  "https://www.betonjayareadymix.com/2018/09/borongan-cor-beton-gedung.html": "Borongan Cor Beton Gedung",  // TYPE: VARIANT
  "https://www.betonjayareadymix.com/2018/09/borongan-cor-beton-gudang.html": "Borongan Cor Beton Gudang",  // TYPE: VARIANT
  "https://www.betonjayareadymix.com/2018/09/borongan-cor-beton-masjid.html": "Borongan Cor Beton Masjid",  // TYPE: VARIANT
  "https://www.betonjayareadymix.com/2018/09/borongan-cor-beton-yayasan.html": "Borongan Cor Beton Yayasan",  // TYPE: VARIANT
  "https://www.betonjayareadymix.com/2018/09/borongan-cor-beton-mall.html": "Borongan Cor Beton Mall",  // TYPE: VARIANT
  "https://www.betonjayareadymix.com/2018/09/borongan-cor-beton-stadion.html": "Borongan Cor Beton Stadion",  // TYPE: VARIANT
  "https://www.betonjayareadymix.com/2018/09/borongan-cor-beton-stasiun.html": "Borongan Cor Beton Stasiun",  // TYPE: VARIANT
  "https://www.betonjayareadymix.com/2018/09/borongan-cor-beton-sekolah.html": "Borongan Cor Beton Sekolah",  // TYPE: VARIANT
  "https://www.betonjayareadymix.com/2018/09/borongan-cor-beton-pelabuhan.html": "Borongan Cor Beton Pelabuhan",  // TYPE: VARIANT
  "https://www.betonjayareadymix.com/2018/09/borongan-cor-beton-bandara.html": "Borongan Cor Beton Bandara",  // TYPE: VARIANT
  "https://www.betonjayareadymix.com/2018/09/borongan-cor-beton-apartemen.html": "Borongan Cor Beton Apartemen",  // TYPE: VARIANT
  "https://www.betonjayareadymix.com/2018/09/borongan-cor-beton-hotel.html": "Borongan Cor Beton Hotel",  // TYPE: VARIANT
  "https://www.betonjayareadymix.com/2018/09/borongan-cor-beton-kontrakan.html": "Borongan Cor Beton Kontrakan",  // TYPE: VARIANT
  "https://www.betonjayareadymix.com/2018/09/borongan-cor-beton-ruko-toko.html": "Borongan Cor Beton Ruko Toko",  // TYPE: VARIANT
  "https://www.betonjayareadymix.com/2018/09/borongan-cor-beton-rukan-kantor.html": "Borongan Cor Beton Rukan Kantor",  // TYPE: VARIANT
  "https://www.betonjayareadymix.com/2018/09/borongan-cor-beton-rumah.html": "Borongan Cor Beton Rumah",  // TYPE: VARIANT
  "https://www.betonjayareadymix.com/2018/09/borongan-cor-beton.html": "Borongan Cor Beton",  // TYPE: MONEY_MASTER (bisa juga SUB2)
  "https://www.betonjayareadymix.com/2018/09/borongan-cor-beton-bangunan.html": "Borongan Cor Beton Bangunan",  // TYPE: VARIANT
  
  // ============================================================
  // [MONEY_CHILD] - BORONGAN COR BETON [LOKASI]
  // 🧠 TYPE: MONEY_CHILD (ada nama kota: Tangerang, Jakarta, Depok, Bogor, Bekasi)
  // ============================================================
  "https://www.betonjayareadymix.com/2018/09/borongan-cor-beton-tangerang.html": "Borongan Cor Beton Tangerang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/09/borongan-cor-beton-jakarta.html": "Borongan Cor Beton Jakarta",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/09/borongan-cor-beton-depok.html": "Borongan Cor Beton Depok",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/09/borongan-cor-beton-bogor.html": "Borongan Cor Beton Bogor",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/09/borongan-cor-beton-bekasi.html": "Borongan Cor Beton Bekasi",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/09/borongan-cor-beton-terdekat.html": "Borongan Cor Beton Terdekat",  // TYPE: MONEY_CHILD
  
  // ============================================================
  // [SUB2] - JASA SLOOF BETON
  // 🧠 TYPE: SUB2 (nama umum)
  // ============================================================
  "https://www.betonjayareadymix.com/2018/09/jasa-sloof-beton.html": "Jasa Sloof Beton",  // TYPE: SUB2
  
  // ============================================================
  // [MONEY_MASTER] - HARGA COR BETON SLOOF
  // 🧠 TYPE: MONEY_MASTER (dimulai dengan "harga")
  // ============================================================
  "https://www.betonjayareadymix.com/2021/12/harga-cor-beton-sloof.html": "Harga Cor Beton Sloof",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/2018/09/harga-sloof-per-meter.html": "Harga Sloof Per Meter",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/2018/09/borongan-sloof.html": "Borongan Sloof",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/2018/09/harga-borongan-sloof-per-meter-kubik.html": "Harga Borongan Sloof Per Meter Kubik",  // TYPE: MONEY_MASTER
  
  // ============================================================
  // [MONEY_CHILD] - HARGA SLOOF PER M3 [LOKASI]
  // 🧠 TYPE: MONEY_CHILD (ada nama kota)
  // ============================================================
  "https://www.betonjayareadymix.com/2019/01/harga-sloof-per-m3-kuningan.html": "Harga Sloof Per m3 Kuningan",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/01/harga-sloof-per-m3-ciamis.html": "Harga Sloof Per m3 Ciamis",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/01/harga-sloof-per-m3-cianjur.html": "Harga Sloof Per m3 Cianjur",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/01/harga-sloof-per-m3-cirebon.html": "Harga Sloof Per m3 Cirebon",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/01/harga-sloof-per-m3-indramayu.html": "Harga Sloof Per m3 Indramayu",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/01/harga-sloof-per-m3-bandung.html": "Harga Sloof Per m3 Bandung",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/01/harga-sloof-per-m3-sukabumi.html": "Harga Sloof Per m3 Sukabumi",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/01/harga-sloof-per-m3-sumedang.html": "Harga Sloof Per m3 Sumedang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/01/harga-sloof-per-m3-tasikmalaya.html": "Harga Sloof Per m3 Tasikmalaya",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/01/harga-sloof-per-m3-garut.html": "Harga Sloof Per m3 Garut",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/01/harga-sloof-per-m3-karawang.html": "Harga Sloof Per m3 Karawang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/01/harga-sloof-per-m3-majalengka.html": "Harga Sloof Per m3 Majalengka",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/01/harga-sloof-per-m3-purwakarta.html": "Harga Sloof Per m3 Purwakarta",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/01/harga-sloof-per-m3-subang.html": "Harga Sloof Per m3 Subang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/01/harga-sloof-per-m3-depok.html": "Harga Sloof Per m3 Depok",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/01/harga-sloof-per-m3-tangerang.html": "Harga Sloof Per m3 Tangerang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/01/harga-sloof-per-m3-jakarta.html": "Harga Sloof Per m3 Jakarta",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/01/harga-sloof-per-m3-bekasi.html": "Harga Sloof Per m3 Bekasi",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/01/harga-sloof-per-m3-bogor.html": "Harga Sloof Per m3 Bogor",  // TYPE: MONEY_CHILD
  
  // ============================================================
  // [SUB2] - JASA RING BALOK, KOLOM, COR TIANG, GELAR BETON
  // 🧠 TYPE: SUB2 (nama umum)
  // ============================================================
  "https://www.betonjayareadymix.com/2018/09/jasa-ring-balok.html": "Jasa Ring Balok",  // TYPE: SUB2
  "https://www.betonjayareadymix.com/2018/09/jasa-kolom.html": "Jasa Kolom",  // TYPE: SUB2
  "https://www.betonjayareadymix.com/2018/09/jasa-cor-tiang.html": "Jasa Cor Tiang",  // TYPE: SUB2
  "https://www.betonjayareadymix.com/2018/09/jasa-gelar-beton.html": "Jasa Gelar Beton",  // TYPE: SUB2
  "https://www.betonjayareadymix.com/2018/09/jasa-rabat-beton-per-meter.html": "Jasa Rabat Beton per Meter"  // TYPE: MONEY_MASTER
};/*
Jenis TYPE yang digunakan:

[MONEY PAGE] — halaman transaksional (harga, borongan, jual, beli, sewa)

[VARIANT - POST] — halaman turunan dengan konten spesifik

[SUB2] — halaman di bawah PILLAR (parent untuk cluster ini)

Status yang digunakan:

AKTIF — halaman memiliki konten lengkap

KOSONG — const belum memiliki URL (perlu dibuat)

PERLU DICEK KONTEN — URL ada, tapi perlu verifikasi kualitas konten
*/



/*const urlMappingStrukturGedungHunian = {
"https://www.betonjayareadymix.com/p/jasa-konstruksi-rumah-tinggal.html": "Jasa Konstruksi Rumah Tinggal",
  "https://www.betonjayareadymix.com/p/jasa-konstruksi-ruko-dan-kios.html": "Jasa Konstruksi Ruko dan Kios",
  "https://www.betonjayareadymix.com/p/jasa-konstruksi-villa.html": "Jasa Konstruksi Villa",
  "https://www.betonjayareadymix.com/p/jasa-konstruksi-apartemen.html": "Jasa Konstruksi Apartemen",
  "https://www.betonjayareadymix.com/p/jasa-konstruksi-hotel.html": "Jasa Konstruksi Hotel",
  "https://www.betonjayareadymix.com/p/jasa-konstruksi-perkantoran.html": "Jasa Konstruksi Perkantoran",
  "https://www.betonjayareadymix.com/p/jasa-konstruksi-gedung-sekolah.html": "Jasa Konstruksi Gedung Sekolah",
  "https://www.betonjayareadymix.com/p/jasa-konstruksi-gedung-rs.html": "Jasa Konstruksi Gedung Rumah Sakit"
};
*/

// ============================================================
// JASA KONSTRUKSI GEDUNG DAN HUNIAN (SUB2)
// Parent: Jasa Struktur Konstruksi (/p/jasa-struktur-konstruksi.html)
// ============================================================

// ============================================================
// [SUB2] - JASA KONSTRUKSI GEDUNG HUNIAN (MASTER)
// 🧠 TYPE: SUB2 (boleh skip di breadcrumb)
// Breadcrumb: Home > Jasa Struktur Konstruksi > Jasa Konstruksi Gedung & Hunian
// ============================================================

const urlMappingJasaKonstruksiGedungHunian = {
  // ============================================================
  // [VARIANT] - JASA KONSTRUKSI BAJA GEDUNG
  // 🧠 TYPE: VARIANT (WAJIB tampil di breadcrumb)
  // Breadcrumb: Home > Jasa Struktur Konstruksi > Jasa Konstruksi Gedung & Hunian > Jasa Konstruksi Baja Gedung
  // ============================================================
  "https://www.betonjayareadymix.com/2018/09/jasa-konstruksi-baja-gedung.html": "Jasa Konstruksi Baja Gedung"  // TYPE: VARIANT
};

// ============================================================
// [SUB2] - JASA KONSTRUKSI RUMAH TINGGAL
// 🧠 TYPE: SUB2 (boleh skip di breadcrumb)
// Parent: Jasa Konstruksi Gedung & Hunian
// Breadcrumb: Home > Jasa Struktur Konstruksi > Jasa Konstruksi Gedung & Hunian > Jasa Konstruksi Rumah Tinggal
// ============================================================

const urlMappingJasaKonstruksiRumahTinggal = {
  // ============================================================
  // [MONEY PAGE] - HARGA BORONGAN KONSTRUKSI PER METER
  // 🧠 TYPE: MONEY_MASTER (WAJIB tampil)
  // ============================================================
  "https://www.betonjayareadymix.com/2018/09/harga-borongan-konstruksi-per-meter.html": "Harga Borongan Konstruksi Per Meter",  // TYPE: MONEY_MASTER
  
  // ============================================================
  // [MONEY PAGE] - HARGA BORONGAN TUKANG BANGUNAN PER METER
  // 🧠 TYPE: MONEY_MASTER (WAJIB tampil)
  // ============================================================
  "https://www.betonjayareadymix.com/2018/09/harga-borongan-tukang-bangunan-per-meter.html": "Harga Borongan Tukang Bangunan Per Meter",  // TYPE: MONEY_MASTER
  
  // ============================================================
  // [VARIANT] - JASA PEMBUATAN BANGUNAN
  // 🧠 TYPE: VARIANT (WAJIB tampil)
  // ============================================================
  "https://www.betonjayareadymix.com/2018/09/jasa-pembuatan-bangunan.html": "Jasa Pembuatan Bangunan",  // TYPE: VARIANT
  
  // ============================================================
  // [MONEY PAGE] - HARGA UPAH TENAGA BORONGAN BANGUNAN PER M2
  // 🧠 TYPE: MONEY_MASTER (WAJIB tampil)
  // ============================================================
  "https://www.betonjayareadymix.com/2018/09/harga-upah-tenaga-borongan-bangunan-per-m2.html": "Harga Upah Tenaga Borongan Bangunan Per M2",  // TYPE: MONEY_MASTER
  
  // ============================================================
  // [MONEY PAGE] - HARGA BORONG BANGUNAN PLUS MATERIAL
  // 🧠 TYPE: MONEY_MASTER (WAJIB tampil)
  // ============================================================
  "https://www.betonjayareadymix.com/2018/09/harga-borong-bangunan-plus-material.html": "Harga Borong Bangunan Plus Material",  // TYPE: MONEY_MASTER
  
  // ============================================================
  // [VARIANT] - BORONGAN BANGUNAN
  // 🧠 TYPE: VARIANT (WAJIB tampil)
  // ============================================================
  "https://www.betonjayareadymix.com/2018/09/borongan-bangunan.html": "Borongan Bangunan",  // TYPE: VARIANT
  
  // ============================================================
  // [MONEY PAGE] - HARGA BANGUNAN
  // 🧠 TYPE: MONEY_MASTER (WAJIB tampil)
  // ============================================================
  "https://www.betonjayareadymix.com/2018/09/harga-bangunan.html": "Harga Bangunan",  // TYPE: MONEY_MASTER
  
  // ============================================================
  // [VARIANT] - BORONGAN KONSTRUKSI
  // 🧠 TYPE: VARIANT (WAJIB tampil)
  // ============================================================
  "https://www.betonjayareadymix.com/2018/09/borongan-konstruksi.html": "Borongan Konstruksi",  // TYPE: VARIANT
  
  // ============================================================
  // [VARIANT] - KONSULTAN BANGUNAN
  // 🧠 TYPE: VARIANT (WAJIB tampil)
  // ============================================================
  "https://www.betonjayareadymix.com/2018/09/konsultan-bangunan.html": "Konsultan Bangunan",  // TYPE: VARIANT
  
  // ============================================================
  // [VARIANT] - KONSULTAN KONSTRUKSI
  // 🧠 TYPE: VARIANT (WAJIB tampil)
  // ============================================================
  "https://www.betonjayareadymix.com/2018/09/konsultan-kontruksi.html": "Konsultan Kontruksi",  // TYPE: VARIANT
  
  // ============================================================
  // [VARIANT] - PERENCANAAN PEMBANGUNAN
  // 🧠 TYPE: VARIANT (WAJIB tampil)
  // ============================================================
  "https://www.betonjayareadymix.com/2018/09/perencanaan-pembangunan.html": "Perencanaan Pembangunan",  // TYPE: VARIANT
  
  // ============================================================
  // [VARIANT] - PERENCANAAN KONSTRUKSI
  // 🧠 TYPE: VARIANT (WAJIB tampil)
  // ============================================================
  "https://www.betonjayareadymix.com/2018/09/perencanaan-konstruksi.html": "Perencanaan Konstruksi",  // TYPE: VARIANT
  
  // ============================================================
  // [VARIANT] - BORONGAN DINDING
  // 🧠 TYPE: VARIANT (WAJIB tampil)
  // ============================================================
  "https://www.betonjayareadymix.com/2018/09/borongan-dinding.html": "Borongan Dinding",  // TYPE: VARIANT
  
  // ============================================================
  // [MONEY CHILD] - HARGA BORONGAN RUMAH PER METER (BERBAGAI LOKASI)
  // 🧠 TYPE: MONEY_CHILD (WAJIB tampil, spesifik lokasi)
  // ============================================================
  "https://www.betonjayareadymix.com/2018/11/harga-borongan-rumah-per-meter-terima-kunci-cirebon.html": "Harga Borongan Rumah Per Meter Terima Kunci Cirebon",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/11/harga-borongan-rumah-per-meter-terima-kunci-dramaga.html": "Harga Borongan Rumah Per Meter Terima Kunci Dramaga",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/11/harga-borongan-rumah-per-meter-terima-kunci-cianjur.html": "Harga Borongan Rumah Per Meter Terima Kunci Cianjur",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/11/harga-borongan-rumah-per-meter-terima-kunci-cibinong.html": "Harga Borongan Rumah Per Meter Terima Kunci Cibinong",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/11/harga-borongan-rumah-per-meter-terima-kunci-depok.html": "Harga Borongan Rumah Per Meter Terima Kunci Depok",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/11/harga-borongan-rumah-per-meter-terima-kunci-bogor.html": "Harga Borongan Rumah Per Meter Terima Kunci Bogor",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/11/harga-borongan-rumah-per-meter-terima-kunci-telukjambe.html": "Harga Borongan Rumah Per Meter Terima Kunci Telukjambe",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/11/harga-borongan-rumah-per-meter-terima-kunci-bojonggede.html": "Harga Borongan Rumah Per Meter Terima Kunci Bojonggede",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/11/harga-borongan-rumah-per-meter-terima-kunci-bekasi.html": "Harga Borongan Rumah Per Meter Terima Kunci Bekasi",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/11/harga-borongan-rumah-per-meter-terima-kunci-cikampek.html": "Harga Borongan Rumah Per Meter Terima Kunci Cikampek",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/11/harga-borongan-rumah-per-meter-terima-kunci-ngamprah.html": "Harga Borongan Rumah Per Meter Terima Kunci Ngamprah",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/11/harga-borongan-rumah-per-meter-terima-kunci-cimahi.html": "Harga Borongan Rumah Per Meter Terima Kunci Cimahi",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/11/harga-borongan-rumah-per-meter-terima-kunci-kota-bekasi.html": "Harga Borongan Rumah Per Meter Terima Kunci Kota Bekasi",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/11/harga-borongan-rumah-per-meter-terima-kunci-citereup.html": "Harga Borongan Rumah Per Meter Terima Kunci Citereup",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/11/harga-borongan-rumah-per-meter-terima-kunci-batujajar.html": "Harga Borongan Rumah Per Meter Terima Kunci Batujajar",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/11/harga-borongan-rumah-per-meter-terima-kunci-kemang.html": "Harga Borongan Rumah Per Meter Terima Kunci Kemang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/11/harga-borongan-rumah-per-meter-terima-kunci-parung-panjang.html": "Harga Borongan Rumah Per Meter Terima Kunci Parung Panjang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/11/harga-borongan-rumah-per-meter-terima-tajur-halang.html": "Harga Borongan Rumah Per Meter Terima Tajur Halang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/11/harga-borongan-rumah-per-meter-terima-kunci-cileungsi.html": "Harga Borongan Rumah Per Meter Terima Kunci Cileungsi",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/11/harga-borongan-rumah-per-meter-terima-kunci-gunung-sindur.html": "Harga Borongan Rumah Per Meter Terima Kunci Gunung Sindur",  // TYPE: MONEY_CHILD
  
  // ============================================================
  // [VARIANT] - JASA BANGUN RUMAH (BERBAGAI LOKASI)
  // 🧠 TYPE: VARIANT (WAJIB tampil, spesifik lokasi)
  // ============================================================
  "https://www.betonjayareadymix.com/2018/11/jasa-bangun-rumah-depok.html": "Jasa Bangun Rumah Depok",  // TYPE: VARIANT
  "https://www.betonjayareadymix.com/2018/11/jasa-bangun-rumah-tangerang.html": "Jasa Bangun Rumah Tangerang",  // TYPE: VARIANT
  "https://www.betonjayareadymix.com/2018/11/jasa-bangun-rumah-jakarta.html": "Jasa Bangun Rumah Jakarta",  // TYPE: VARIANT
  "https://www.betonjayareadymix.com/2018/11/jasa-bangun-rumah-bogor.html": "Jasa Bangun Rumah Bogor",  // TYPE: VARIANT
  "https://www.betonjayareadymix.com/2018/11/jasa-bangun-rumah-bekasi.html": "Jasa Bangun Rumah Bekasi",  // TYPE: VARIANT
  
  // ============================================================
  // [MONEY CHILD] - HARGA JASA BORONGAN BANGUNAN (BERBAGAI LOKASI)
  // 🧠 TYPE: MONEY_CHILD (WAJIB tampil, spesifik lokasi)
  // ============================================================
  "https://www.betonjayareadymix.com/2018/11/harga-jasa-borongan-bangunan-dki-jakarta.html": "Harga Jasa Borongan Bangunan DKI Jakarta",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/11/harga-jasa-borongan-bangunan-tangerang.html": "Harga Jasa Borongan Bangunan Tangerang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/11/harga-jasa-borongan-bangunan-bekasi.html": "Harga Jasa Borongan Bangunan Bekasi",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/11/harga-jasa-borongan-bangunan-depok.html": "Harga Jasa Borongan Bangunan Depok",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/11/harga-jasa-borongan-bangunan-bogor.html": "Harga Jasa Borongan Bangunan Bogor",  // TYPE: MONEY_CHILD
  
  // ============================================================
  // [VARIANT] - BORONGAN BANGUNAN (BERBAGAI LOKASI)
  // 🧠 TYPE: VARIANT (WAJIB tampil, spesifik lokasi)
  // ============================================================
  "https://www.betonjayareadymix.com/2018/11/borongan-bangunan-dki-jakarta.html": "Borongan Bangunan DKI Jakarta",  // TYPE: VARIANT
  "https://www.betonjayareadymix.com/2018/11/borongan-bangunan-tangerang.html": "Borongan Bangunan Tangerang",  // TYPE: VARIANT
  "https://www.betonjayareadymix.com/2018/11/borongan-bangunan-bekasi.html": "Borongan Bangunan Bekasi",  // TYPE: VARIANT
  "https://www.betonjayareadymix.com/2018/11/borongan-bangunan-depok.html": "Borongan Bangunan Depok",  // TYPE: VARIANT
  "https://www.betonjayareadymix.com/2018/11/borongan-bangunan-bogor.html": "Borongan Bangunan Bogor",  // TYPE: VARIANT
  
  // ============================================================
  // [MONEY PAGE] - HARGA BORONGAN RUMAH (BERBAGAI TIPE)
  // 🧠 TYPE: MONEY_MASTER (WAJIB tampil)
  // ============================================================
  "https://www.betonjayareadymix.com/2018/09/harga-borongan-rumah-per-meter-plus-material.html": "Harga Borongan Rumah Per Meter Plus Material",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/2018/09/harga-borongan-rumah-per-meter-terima-kunci.html": "Harga Borongan Rumah Per Meter Terima Kunci",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/2018/09/harga-borongan-rumah-1-lantai-per-meter.html": "Harga Borongan Rumah 1 Lantai Per Meter",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/2018/09/harga-borongan-tenaga-bangunan-rumah.html": "Harga Borongan Tenaga Bangunan Rumah",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/2018/09/harga-konstruksi-rumah-per-m2.html": "Harga Konstruksi Rumah Per M2",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/2018/09/harga-jasa-borongan-rumah-2-lantai-per-m2.html": "Harga Jasa Borongan Rumah 2 Lantai Per M2",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/2018/09/jasa-borongan-rumah.html": "Jasa Borongan Rumah",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/2018/09/harga-borongan-bangunan-rumah.html": "Harga Borongan Bangunan Rumah",  // TYPE: MONEY_MASTER
  "https://www.betonjayareadymix.com/2018/09/harga-borongan-rumah-2-lantai-per-m2.html": "Harga Borongan Rumah 2 Lantai Per M2",  // TYPE: MONEY_MASTER
  
  // ============================================================
  // [VARIANT] - KONSTRUKSI BAJA UNTUK RUMAH
  // 🧠 TYPE: VARIANT (WAJIB tampil)
  // ============================================================
  "https://www.betonjayareadymix.com/2018/09/harga-rumah-konstruksi-baja.html": "Harga Rumah Konstruksi Baja",  // TYPE: VARIANT
  "https://www.betonjayareadymix.com/2018/09/jasa-pembuatan-rumah-rangka-baja.html": "Jasa Pembuatan Rumah Rangka Baja",  // TYPE: VARIANT
  
  // ============================================================
  // [VARIANT] - JASA BANGUN RUMAH BORONGAN
  // 🧠 TYPE: VARIANT (WAJIB tampil)
  // ============================================================
  "https://www.betonjayareadymix.com/2018/09/jasa-bangun-rumah-borongan.html": "Jasa Bangun Rumah Borongan",  // TYPE: VARIANT
  "https://www.betonjayareadymix.com/2018/09/jasa-pembuatan-rumah.html": "Jasa Pembuatan Rumah",  // TYPE: VARIANT
  
  // ============================================================
  // [VARIANT] - JASA KONSTRUKSI BAJA RUMAH
  // 🧠 TYPE: VARIANT (WAJIB tampil)
  // ============================================================
  "https://www.betonjayareadymix.com/2018/09/jasa-konstruksi-baja-rumah.html": "Jasa Konstruksi Baja Rumah"  // TYPE: VARIANT
};

// ============================================================
// [SUB2] - JASA KONSTRUKSI RUKO DAN KIOS
// 🧠 TYPE: SUB2 (boleh skip di breadcrumb)
// Parent: Jasa Konstruksi Gedung & Hunian
// Breadcrumb: Home > Jasa Struktur Konstruksi > Jasa Konstruksi Gedung & Hunian > Jasa Konstruksi Ruko dan Kios
// ============================================================

const urlMappingJasaKonstruksiRukodanKios = {
  // ============================================================
  // [VARIANT] - JASA KONSTRUKSI BAJA RUKO
  // 🧠 TYPE: VARIANT (WAJIB tampil)
  // ============================================================
  "https://www.betonjayareadymix.com/2018/09/jasa-konstruksi-baja-ruko.html": "Jasa Konstruksi Baja Ruko",  // TYPE: VARIANT
  
  // ============================================================
  // [VARIANT] - JASA KONSTRUKSI BAJA RINGAN RUKO
  // 🧠 TYPE: VARIANT (WAJIB tampil)
  // ============================================================
  "https://www.betonjayareadymix.com/2018/09/jasa-konstruksi-baja-ringan-ruko.html": "Jasa Konstruksi Baja Ringan Ruko",  // TYPE: VARIANT
  
  // ============================================================
  // SARAN ITEM BARU (DIKOMMENT)
  // ============================================================
  // "https://www.betonjayareadymix.com/2019/08/harga-borongan-bangun-ruko.html": "Harga Borongan Bangun Ruko",  // TYPE: MONEY_MASTER
  // "https://www.betonjayareadymix.com/2019/08/jasa-renovasi-ruko.html": "Jasa Renovasi Ruko"  // TYPE: VARIANT
};

// ============================================================
// [SUB2] - JASA KONSTRUKSI VILLA (KOSONG)
// 🧠 TYPE: SUB2 (boleh skip di breadcrumb) - PERLU DIBUAT
// Parent: Jasa Konstruksi Gedung & Hunian
// ============================================================

const urlMappingJasaKonstruksiVilla = {
  // SARAN ITEM BARU (DIKOMMENT)
  // "https://www.betonjayareadymix.com/p/jasa-konstruksi-villa.html": "Jasa Konstruksi Villa",  // TYPE: SUB2
  // "https://www.betonjayareadymix.com/2019/08/harga-borongan-bangun-villa.html": "Harga Borongan Bangun Villa",  // TYPE: MONEY_MASTER
  // "https://www.betonjayareadymix.com/2019/08/kontraktor-villa-modern.html": "Kontraktor Villa Modern"  // TYPE: VARIANT
};

// ============================================================
// [SUB2] - JASA KONSTRUKSI APARTEMEN (KOSONG)
// 🧠 TYPE: SUB2 (boleh skip di breadcrumb) - PERLU DIBUAT
// Parent: Jasa Konstruksi Gedung & Hunian
// ============================================================

const urlMappingJasaKonstruksiApartemen = {
  // SARAN ITEM BARU (DIKOMMENT)
  // "https://www.betonjayareadymix.com/p/jasa-konstruksi-apartemen.html": "Jasa Konstruksi Apartemen",  // TYPE: SUB2
  // "https://www.betonjayareadymix.com/2019/08/harga-borongan-bangun-apartemen.html": "Harga Borongan Bangun Apartemen",  // TYPE: MONEY_MASTER
  // "https://www.betonjayareadymix.com/2019/08/kontraktor-apartemen-tinggi.html": "Kontraktor Apartemen Tinggi"  // TYPE: VARIANT
};

// ============================================================
// [SUB2] - JASA KONSTRUKSI HOTEL (KOSONG)
// 🧠 TYPE: SUB2 (boleh skip di breadcrumb) - PERLU DIBUAT
// Parent: Jasa Konstruksi Gedung & Hunian
// ============================================================

const urlMappingJasaKonstruksiHotel = {
  // SARAN ITEM BARU (DIKOMMENT)
  // "https://www.betonjayareadymix.com/p/jasa-konstruksi-hotel.html": "Jasa Konstruksi Hotel",  // TYPE: SUB2
  // "https://www.betonjayareadymix.com/2019/08/harga-borongan-bangun-hotel.html": "Harga Borongan Bangun Hotel",  // TYPE: MONEY_MASTER
  // "https://www.betonjayareadymix.com/2019/08/kontraktor-hotel-berbintang.html": "Kontraktor Hotel Berbintang"  // TYPE: VARIANT
};

// ============================================================
// [SUB2] - JASA KONSTRUKSI PERKANTORAN (KOSONG)
// 🧠 TYPE: SUB2 (boleh skip di breadcrumb) - PERLU DIBUAT
// Parent: Jasa Konstruksi Gedung & Hunian
// ============================================================

const urlMappingJasaKonstruksiPerkantoran = {
  // SARAN ITEM BARU (DIKOMMENT)
  // "https://www.betonjayareadymix.com/p/jasa-konstruksi-perkantoran.html": "Jasa Konstruksi Perkantoran",  // TYPE: SUB2
  // "https://www.betonjayareadymix.com/2019/08/harga-borongan-bangun-kantor.html": "Harga Borongan Bangun Kantor",  // TYPE: MONEY_MASTER
  // "https://www.betonjayareadymix.com/2019/08/jasa-renovasi-kantor.html": "Jasa Renovasi Kantor"  // TYPE: VARIANT
};

// ============================================================
// [SUB2] - JASA KONSTRUKSI GEDUNG SEKOLAH
// 🧠 TYPE: SUB2 (boleh skip di breadcrumb)
// Parent: Jasa Konstruksi Gedung & Hunian
// ============================================================

const urlMappingJasaKonstruksiGedungSekolah = {
  // ============================================================
  // [VARIANT] - JASA KONSTRUKSI BAJA GEDUNG (digunakan untuk gedung sekolah)
  // 🧠 TYPE: VARIANT (WAJIB tampil)
  // ============================================================
  "https://www.betonjayareadymix.com/2018/09/jasa-konstruksi-baja-gedung.html": "Jasa Konstruksi Baja Gedung",  // TYPE: VARIANT
  
  // SARAN ITEM BARU (DIKOMMENT)
  // "https://www.betonjayareadymix.com/2019/08/harga-borongan-bangun-sekolah.html": "Harga Borongan Bangun Sekolah",  // TYPE: MONEY_MASTER
  // "https://www.betonjayareadymix.com/2019/08/jasa-konstruksi-gedung-sekolah.html": "Jasa Konstruksi Gedung Sekolah"  // TYPE: VARIANT
};

// ============================================================
// [SUB2] - JASA KONSTRUKSI GEDUNG RUMAH SAKIT (KOSONG)
// 🧠 TYPE: SUB2 (boleh skip di breadcrumb) - PERLU DIBUAT
// Parent: Jasa Konstruksi Gedung & Hunian
// ============================================================

const urlMappingJasaKonstruksiGedungRumahSakit = {
  // SARAN ITEM BARU (DIKOMMENT)
  // "https://www.betonjayareadymix.com/p/jasa-konstruksi-rumah-sakit.html": "Jasa Konstruksi Gedung Rumah Sakit",  // TYPE: SUB2
  // "https://www.betonjayareadymix.com/2019/08/harga-borongan-bangun-rumah-sakit.html": "Harga Borongan Bangun Rumah Sakit",  // TYPE: MONEY_MASTER
  // "https://www.betonjayareadymix.com/2019/08/kontraktor-rumah-sakit.html": "Kontraktor Rumah Sakit"  // TYPE: VARIANT
};

/*
============================================================
📋 RINGKASAN TYPE YANG DIGUNAKAN
============================================================

[SUB2]         — Halaman kategori (boleh skip di breadcrumb)
[VARIANT]      — Halaman turunan spesifik (WAJIB tampil)
[MONEY MASTER] — Halaman transaksi utama (WAJIB tampil)
[MONEY CHILD]  — Halaman transaksi spesifik lokasi (WAJIB tampil)

============================================================
🎯 ATURAN SKIP BREADCRUMB
============================================================

Type yang BOLEH SKIP: SUB2
Type yang WAJIB TAMPIL: VARIANT, MONEY_MASTER, MONEY_CHILD
*/
/*const urlMappingStrukturIndustriGudang = {
"https://www.betonjayareadymix.com/p/jasa-konstruksi-gudang-logistik.html": "Jasa Konstruksi Gudang Logistik",
  "https://www.betonjayareadymix.com/p/jasa-konstruksi-pabrik.html": "Jasa Konstruksi Pabrik",
  "https://www.betonjayareadymix.com/p/jasa-konstruksi-cold-storage.html": "Jasa Konstruksi Cold Storage",
  "https://www.betonjayareadymix.com/p/jasa-konstruksi-bengkel.html": "Jasa Konstruksi Bengkel",
  "https://www.betonjayareadymix.com/p/jasa-konstruksi-workshop.html": "Jasa Konstruksi Workshop"
};*/

// ============================================================
// JASA KONSTRUKSI INDUSTRI & GUDANG (SUB2)
// Parent: Jasa Konstruksi
// ============================================================

// ============================================================
// JASA KONSTRUKSI GUDANG LOGISTIK (VARIANT)
// Parent: Jasa Konstruksi Industri & Gudang
// ============================================================

const urlMappingJasaKonstruksiGudangLogistik = {
  // ============================================================
  // [MONEY PAGE] - JASA KONSTRUKSI BAJA GUDANG
  // 🧠 STATUS: AKTIF (konten ada)
  // Breadcrumb: Home > Jasa Konstruksi > Jasa Konstruksi Industri & Gudang > Jasa Konstruksi Gudang Logistik > Jasa Konstruksi Baja Gudang
  // ============================================================
  "https://www.betonjayareadymix.com/2018/09/jasa-konstruksi-baja-gudang.html": "Jasa Konstruksi Baja Gudang",  // TYPE: MONEY PAGE
  
  // ============================================================
  // [MONEY PAGE] - BIAYA PEMBUATAN GUDANG BAJA RINGAN
  // 🧠 STATUS: AKTIF (konten ada)
  // Breadcrumb: Home > Jasa Konstruksi > Jasa Konstruksi Industri & Gudang > Jasa Konstruksi Gudang Logistik > Biaya Pembuatan Gudang Baja Ringan
  // ============================================================
  "https://www.betonjayareadymix.com/2018/09/biaya-pembuatan-gudang-baja-ringan.html": "Biaya Pembuatan Gudang Baja Ringan",  // TYPE: MONEY PAGE
  
  // ============================================================
  // [MONEY PAGE] - HARGA BORONG TENAGA BIKIN GUDANG
  // 🧠 STATUS: PERLU DICEK KONTEN
  // Breadcrumb: Home > Jasa Konstruksi > Jasa Konstruksi Industri & Gudang > Jasa Konstruksi Gudang Logistik > Harga Borong Tenaga Bikin Gudang
  // ============================================================
  "https://www.betonjayareadymix.com/2018/09/harga-borong-tenaga-bikin-gudang.html": "Harga Borong Tenaga Bikin Gudang",  // TYPE: MONEY PAGE
  
  // ============================================================
  // [MONEY PAGE] - HARGA BORONGAN GUDANG PER M2
  // 🧠 STATUS: PERLU DICEK KONTEN
  // Breadcrumb: Home > Jasa Konstruksi > Jasa Konstruksi Industri & Gudang > Jasa Konstruksi Gudang Logistik > Harga Borongan Gudang per M2
  // ============================================================
  "https://www.betonjayareadymix.com/2018/09/harga-borongan-gudang-per-m2.html": "Harga Borongan Gudang per M2",  // TYPE: MONEY PAGE
  
  // ============================================================
  // [MONEY PAGE] - HARGA BANGUN GUDANG
  // 🧠 STATUS: PERLU DICEK KONTEN
  // Breadcrumb: Home > Jasa Konstruksi > Jasa Konstruksi Industri & Gudang > Jasa Konstruksi Gudang Logistik > Harga Bangun Gudang
  // ============================================================
  "https://www.betonjayareadymix.com/2018/09/harga-bangun-gudang.html": "Harga Bangun Gudang",  // TYPE: MONEY PAGE
  
  // ============================================================
  // [MONEY PAGE] - HARGA PEMBUATAN GUDANG RANGKA BAJA
  // 🧠 STATUS: PERLU DICEK KONTEN
  // Breadcrumb: Home > Jasa Konstruksi > Jasa Konstruksi Industri & Gudang > Jasa Konstruksi Gudang Logistik > Harga Pembuatan Gudang Rangka Baja
  // ============================================================
  "https://www.betonjayareadymix.com/2018/09/harga-pembuatan-gudang-rangka-baja.html": "Harga Pembuatan Gudang Rangka Baja",  // TYPE: MONEY PAGE
  
  // ============================================================
  // [MONEY PAGE] - BIAYA PEMBUATAN GUDANG PER METER
  // 🧠 STATUS: PERLU DICEK KONTEN
  // Breadcrumb: Home > Jasa Konstruksi > Jasa Konstruksi Industri & Gudang > Jasa Konstruksi Gudang Logistik > Biaya Pembuatan Gudang per Meter
  // ============================================================
  "https://www.betonjayareadymix.com/2018/09/biaya-pembuatan-gudang-per-meter.html": "Biaya Pembuatan Gudang per Meter",  // TYPE: MONEY PAGE
  
  // ============================================================
  // [MONEY PAGE] - JASA PEMBUATAN KONSTRUKSI GUDANG
  // 🧠 STATUS: PERLU DICEK KONTEN
  // Breadcrumb: Home > Jasa Konstruksi > Jasa Konstruksi Industri & Gudang > Jasa Konstruksi Gudang Logistik > Jasa Pembuatan Konstruksi Gudang
  // ============================================================
  "https://www.betonjayareadymix.com/2018/09/jasa-pembuatan-konstruksi-gudang.html": "Jasa Pembuatan Konstruksi Gudang",  // TYPE: MONEY PAGE
  
  // ============================================================
  // [MONEY PAGE] - JASA PEMBUATAN GUDANG
  // 🧠 STATUS: PERLU DICEK KONTEN
  // Breadcrumb: Home > Jasa Konstruksi > Jasa Konstruksi Industri & Gudang > Jasa Konstruksi Gudang Logistik > Jasa Pembuatan Gudang
  // ============================================================
  "https://www.betonjayareadymix.com/2018/09/jasa-pembuatan-gudang.html": "Jasa Pembuatan Gudang",  // TYPE: MONEY PAGE
  
  // ============================================================
  // [MONEY PAGE] - HARGA PEMBUATAN GUDANG PER M2
  // 🧠 STATUS: PERLU DICEK KONTEN
  // Breadcrumb: Home > Jasa Konstruksi > Jasa Konstruksi Industri & Gudang > Jasa Konstruksi Gudang Logistik > Harga Pembuatan Gudang per M2
  // ============================================================
  "https://www.betonjayareadymix.com/2018/09/harga-pembuatan-gudang-per-m2.html": "Harga Pembuatan Gudang per M2"  // TYPE: MONEY PAGE
};

// ============================================================
// JASA KONSTRUKSI PABRIK (VARIANT)
// Parent: Jasa Konstruksi Industri & Gudang
// ============================================================

const urlMappingJasaKonstruksiPabrik = {
  // ============================================================
  // [MONEY PAGE] - JASA KONSTRUKSI BAJA PABRIK
  // 🧠 STATUS: AKTIF (konten ada)
  // Breadcrumb: Home > Jasa Konstruksi > Jasa Konstruksi Industri & Gudang > Jasa Konstruksi Pabrik > Jasa Konstruksi Baja Pabrik
  // ============================================================
  "https://www.betonjayareadymix.com/2018/09/jasa-konstruksi-baja-pabrik.html": "Jasa Konstruksi Baja Pabrik",  // TYPE: MONEY PAGE
};

// ============================================================
// JASA KONSTRUKSI COLD STORAGE (VARIANT - PERLU DIBUAT)
// Parent: Jasa Konstruksi Industri & Gudang
// ============================================================

const urlMappingJasaKonstruksiColdStorage = {
  // ============================================================
  // SARAN ITEM BARU (PERLU DIBUAT)
  // 🧠 STATUS: KOSONG - PERLU DIBUAT
  // ============================================================
  // "https://www.betonjayareadymix.com/p/jasa-konstruksi-cold-storage.html": "Jasa Konstruksi Cold Storage",  // TYPE: VARIANT
  // "https://www.betonjayareadymix.com/2019/08/harga-konstruksi-cold-storage.html": "Harga Konstruksi Cold Storage",  // TYPE: MONEY PAGE
  // "https://www.betonjayareadymix.com/2019/08/biaya-pembangunan-cold-storage.html": "Biaya Pembangunan Cold Storage"  // TYPE: MONEY PAGE
};

// ============================================================
// JASA KONSTRUKSI BENGKEL (VARIANT - PERLU DIBUAT)
// Parent: Jasa Konstruksi Industri & Gudang
// ============================================================

const urlMappingJasaKonstruksiBengkel = {
  // ============================================================
  // SARAN ITEM BARU (PERLU DIBUAT)
  // 🧠 STATUS: KOSONG - PERLU DIBUAT
  // ============================================================
  // "https://www.betonjayareadymix.com/p/jasa-konstruksi-bengkel.html": "Jasa Konstruksi Bengkel",  // TYPE: VARIANT
  // "https://www.betonjayareadymix.com/2019/08/harga-konstruksi-bengkel-per-m2.html": "Harga Konstruksi Bengkel per M2",  // TYPE: MONEY PAGE
  // "https://www.betonjayareadymix.com/2019/08/biaya-pembangunan-bengkel.html": "Biaya Pembangunan Bengkel"  // TYPE: MONEY PAGE
};

// ============================================================
// JASA KONSTRUKSI WORKSHOP (VARIANT - PERLU DIBUAT)
// Parent: Jasa Konstruksi Industri & Gudang
// ============================================================

const urlMappingJasaKonstruksiWorkshop = {
  // ============================================================
  // SARAN ITEM BARU (PERLU DIBUAT)
  // 🧠 STATUS: KOSONG - PERLU DIBUAT
  // ============================================================
  // "https://www.betonjayareadymix.com/p/jasa-konstruksi-workshop.html": "Jasa Konstruksi Workshop",  // TYPE: VARIANT
  // "https://www.betonjayareadymix.com/2019/08/harga-konstruksi-workshop.html": "Harga Konstruksi Workshop",  // TYPE: MONEY PAGE (404 - perlu dibuat)
  // "https://www.betonjayareadymix.com/2019/08/biaya-pembangunan-workshop.html": "Biaya Pembangunan Workshop"  // TYPE: MONEY PAGE
};

// ============================================================
// JASA KONSTRUKSI LAPANGAN OLAHRAGA (SUB2)
// Parent: Jasa Struktur Konstruksi (/p/jasa-struktur-konstruksi.html)
// ============================================================

// ============================================================
// [SUB2] - JASA PEMBUATAN LAPANGAN OLAHRAGA (HALAMAN KATEGORI)
// 🧠 TYPE: SUB2 (boleh skip di breadcrumb)
// Breadcrumb: Home > Jasa Struktur Konstruksi > Jasa Konstruksi Lapangan Olahraga
// ============================================================

const urlMappingJasaPembuatanLapanganOlahRaga = {
  // ============================================================
  // [MONEY PAGE] - JASA PEMBUATAN LAPANGAN OLAHRAGA
  // 🧠 TYPE: MONEY_MASTER (WAJIB tampil, halaman transaksi)
  // Breadcrumb: Home > Jasa Struktur Konstruksi > Jasa Konstruksi Lapangan Olahraga > Jasa Pembuatan Lapangan Olahraga
  // ============================================================
  "https://www.betonjayareadymix.com/2018/09/jasa-pembuatan-lapangan-olah-raga.html": "Jasa Pembuatan Lapangan Olahraga"  // TYPE: MONEY_MASTER
};

// ============================================================
// [SUB2] - JASA PEMBUATAN LAPANGAN FUTSAL
// ============================================================

const urlMappingJasaPembuatanLapanganFutsal = {
  // ============================================================
  // [MONEY PAGE] - HARGA BUAT LAPANGAN FUTSAL
  // 🧠 TYPE: MONEY_MASTER (WAJIB tampil)
  // Breadcrumb: Home > Jasa Struktur Konstruksi > Jasa Konstruksi Lapangan Olahraga > Harga Buat Lapangan Futsal
  // ============================================================
  "https://www.betonjayareadymix.com/2018/09/harga-buat-lapangan-futsal.html": "Harga Buat Lapangan Futsal",  // TYPE: MONEY_MASTER
  
  // ============================================================
  // [MONEY PAGE] - JASA PEMBUATAN LAPANGAN FUTSAL BEKASI
  // 🧠 TYPE: MONEY_CHILD (spesifik lokasi)
  // Breadcrumb: Home > Jasa Struktur Konstruksi > Jasa Konstruksi Lapangan Olahraga > Jasa Pembuatan Lapangan Futsal Bekasi
  // ============================================================
  "https://www.betonjayareadymix.com/2018/11/jasa-pembuatan-lapangan-futsal-bekasi.html": "Jasa Pembuatan Lapangan Futsal Bekasi",  // TYPE: MONEY_CHILD
  
  // ============================================================
  // [MONEY PAGE] - JASA PEMBUATAN LAPANGAN FUTSAL DEPOK
  // 🧠 TYPE: MONEY_CHILD (spesifik lokasi)
  // Breadcrumb: Home > Jasa Struktur Konstruksi > Jasa Konstruksi Lapangan Olahraga > Jasa Pembuatan Lapangan Futsal Depok
  // ============================================================
  "https://www.betonjayareadymix.com/2018/11/jasa-pembuatan-lapangan-futsal-depok.html": "Jasa Pembuatan Lapangan Futsal Depok",  // TYPE: MONEY_CHILD
  
  // ============================================================
  // [MONEY PAGE] - JASA PEMBUATAN LAPANGAN FUTSAL JAKARTA
  // 🧠 TYPE: MONEY_CHILD (spesifik lokasi)
  // Breadcrumb: Home > Jasa Struktur Konstruksi > Jasa Konstruksi Lapangan Olahraga > Jasa Pembuatan Lapangan Futsal Jakarta
  // ============================================================
  "https://www.betonjayareadymix.com/2018/11/jasa-pembuatan-lapangan-futsal-jakarta.html": "Jasa Pembuatan Lapangan Futsal Jakarta",  // TYPE: MONEY_CHILD
  
  // ============================================================
  // [MONEY PAGE] - JASA PEMBUATAN LAPANGAN FUTSAL TANGERANG
  // 🧠 TYPE: MONEY_CHILD (spesifik lokasi)
  // Breadcrumb: Home > Jasa Struktur Konstruksi > Jasa Konstruksi Lapangan Olahraga > Jasa Pembuatan Lapangan Futsal Tangerang
  // ============================================================
  "https://www.betonjayareadymix.com/2018/11/jasa-pembuatan-lapangan-futsal-tangerang.html": "Jasa Pembuatan Lapangan Futsal Tangerang",  // TYPE: MONEY_CHILD
  
  // ============================================================
  // [MONEY PAGE] - JASA PEMBUATAN LAPANGAN FUTSAL BOGOR
  // 🧠 TYPE: MONEY_CHILD (spesifik lokasi)
  // Breadcrumb: Home > Jasa Struktur Konstruksi > Jasa Konstruksi Lapangan Olahraga > Jasa Pembuatan Lapangan Futsal Bogor
  // ============================================================
  "https://www.betonjayareadymix.com/2018/11/jasa-pembuatan-lapangan-futsal-bogor.html": "Jasa Pembuatan Lapangan Futsal Bogor"  // TYPE: MONEY_CHILD
};

// ============================================================
// [SUB2] - JASA PEMBUATAN LAPANGAN BASKET
// ============================================================

const urlMappingJasaPembuatanLapanganBasket = {
  // ============================================================
  // [MONEY PAGE] - HARGA BUAT LAPANGAN BASKET
  // 🧠 TYPE: MONEY_MASTER (WAJIB tampil)
  // Breadcrumb: Home > Jasa Struktur Konstruksi > Jasa Konstruksi Lapangan Olahraga > Harga Buat Lapangan Basket
  // ============================================================
  "https://www.betonjayareadymix.com/2018/09/harga-buat-lapangan-basket.html": "Harga Buat Lapangan Basket",  // TYPE: MONEY_MASTER
  
  // ============================================================
  // [MONEY PAGE] - JASA PEMBUATAN LAPANGAN BASKET
  // 🧠 TYPE: MONEY_MASTER (WAJIB tampil)
  // Breadcrumb: Home > Jasa Struktur Konstruksi > Jasa Konstruksi Lapangan Olahraga > Jasa Pembuatan Lapangan Basket
  // ============================================================
  "https://www.betonjayareadymix.com/2018/09/jasa-pembuatan-lapangan-basket.html": "Jasa Pembuatan Lapangan Basket"  // TYPE: MONEY_MASTER
};

// ============================================================
// [SUB2] - JASA PEMBUATAN LAPANGAN SEPAKBOLA (MINI SOCCER)
// ============================================================

const urlMappingJasaPembuatanLapanganSepakbola = {
  // ============================================================
  // [MONEY PAGE] - HARGA BUAT LAPANGAN MINI SOCCER
  // 🧠 TYPE: MONEY_MASTER (WAJIB tampil)
  // Breadcrumb: Home > Jasa Struktur Konstruksi > Jasa Konstruksi Lapangan Olahraga > Harga Buat Lapangan Mini Soccer
  // ============================================================
  "https://www.betonjayareadymix.com/2018/09/harga-buat-lapangan-mini-soccer.html": "Harga Buat Lapangan Mini Soccer",  // TYPE: MONEY_MASTER
  
  // ============================================================
  // [MONEY PAGE] - JASA PEMBUATAN LAPANGAN MINI SOCCER
  // 🧠 TYPE: MONEY_MASTER (WAJIB tampil)
  // Breadcrumb: Home > Jasa Struktur Konstruksi > Jasa Konstruksi Lapangan Olahraga > Jasa Pembuatan Lapangan Mini Soccer
  // ============================================================
  "https://www.betonjayareadymix.com/2018/09/jasa-pembuatan-lapangan-mini-soccer.html": "Jasa Pembuatan Lapangan Mini Soccer"  // TYPE: MONEY_MASTER
};

// ============================================================
// [SUB2] - JASA PEMBUATAN LAPANGAN TENIS
// ============================================================

const urlMappingJasaPembuatanLapanganTenis = {
  // ============================================================
  // [MONEY PAGE] - HARGA BUAT LAPANGAN TENIS
  // 🧠 TYPE: MONEY_MASTER (WAJIB tampil)
  // Breadcrumb: Home > Jasa Struktur Konstruksi > Jasa Konstruksi Lapangan Olahraga > Harga Buat Lapangan Tenis
  // ============================================================
  "https://www.betonjayareadymix.com/2018/09/harga-buat-lapangan-tenis.html": "Harga Buat Lapangan Tenis"  // TYPE: MONEY_MASTER
};

// ============================================================
// [SUB2] - JASA PEMBUATAN LAPANGAN BADMINTON
// ============================================================

const urlMappingJasaPembuatanLapanganBadminton = {
  // ============================================================
  // [MONEY PAGE] - HARGA BUAT LAPANGAN BADMINTON
  // 🧠 TYPE: MONEY_MASTER (WAJIB tampil)
  // Breadcrumb: Home > Jasa Struktur Konstruksi > Jasa Konstruksi Lapangan Olahraga > Harga Buat Lapangan Badminton
  // ============================================================
  "https://www.betonjayareadymix.com/2018/09/harga-buat-lapangan-badminton.html": "Harga Buat Lapangan Badminton"  // TYPE: MONEY_MASTER
};

// ============================================================
// [SUB2] - JASA PEMBUATAN LAPANGAN VOLI
// ============================================================

const urlMappingJasaPembuatanLapanganVoli = {
  // ============================================================
  // [MONEY PAGE] - HARGA BUAT LAPANGAN VOLI
  // 🧠 TYPE: MONEY_MASTER (WAJIB tampil)
  // Breadcrumb: Home > Jasa Struktur Konstruksi > Jasa Konstruksi Lapangan Olahraga > Harga Buat Lapangan Voli
  // ============================================================
  "https://www.betonjayareadymix.com/2018/09/harga-buat-lapangan-voli.html": "Harga Buat Lapangan Voli",  // TYPE: MONEY_MASTER
  
  // ============================================================
  // [MONEY PAGE] - JASA PEMBUATAN LAPANGAN VOLI
  // 🧠 TYPE: MONEY_MASTER (WAJIB tampil)
  // Breadcrumb: Home > Jasa Struktur Konstruksi > Jasa Konstruksi Lapangan Olahraga > Jasa Pembuatan Lapangan Voli
  // ============================================================
  "https://www.betonjayareadymix.com/2018/09/jasa-pembuatan-lapangan-voli.html": "Jasa Pembuatan Lapangan Voli",  // TYPE: MONEY_MASTER
  
  // ============================================================
  // [MONEY PAGE] - JASA PEMBUATAN LAPANGAN VOLI DEPOK
  // 🧠 TYPE: MONEY_CHILD (spesifik lokasi)
  // Breadcrumb: Home > Jasa Struktur Konstruksi > Jasa Konstruksi Lapangan Olahraga > Jasa Pembuatan Lapangan Voli Depok
  // ============================================================
  "https://www.betonjayareadymix.com/2018/11/jasa-pembuatan-lapangan-voli-depok.html": "Jasa Pembuatan Lapangan Voli Depok",  // TYPE: MONEY_CHILD
  
  // ============================================================
  // [MONEY PAGE] - JASA PEMBUATAN LAPANGAN VOLI TANGERANG
  // 🧠 TYPE: MONEY_CHILD (spesifik lokasi)
  // Breadcrumb: Home > Jasa Struktur Konstruksi > Jasa Konstruksi Lapangan Olahraga > Jasa Pembuatan Lapangan Voli Tangerang
  // ============================================================
  "https://www.betonjayareadymix.com/2018/11/jasa-pembuatan-lapangan-voli-tangerang.html": "Jasa Pembuatan Lapangan Voli Tangerang",  // TYPE: MONEY_CHILD
  
  // ============================================================
  // [MONEY PAGE] - JASA PEMBUATAN LAPANGAN VOLI JAKARTA
  // 🧠 TYPE: MONEY_CHILD (spesifik lokasi)
  // Breadcrumb: Home > Jasa Struktur Konstruksi > Jasa Konstruksi Lapangan Olahraga > Jasa Pembuatan Lapangan Voli Jakarta
  // ============================================================
  "https://www.betonjayareadymix.com/2018/11/jasa-pembuatan-lapangan-voli-jakarta.html": "Jasa Pembuatan Lapangan Voli Jakarta",  // TYPE: MONEY_CHILD
  
  // ============================================================
  // [MONEY PAGE] - JASA PEMBUATAN LAPANGAN VOLI BEKASI
  // 🧠 TYPE: MONEY_CHILD (spesifik lokasi)
  // Breadcrumb: Home > Jasa Struktur Konstruksi > Jasa Konstruksi Lapangan Olahraga > Jasa Pembuatan Lapangan Voli Bekasi
  // ============================================================
  "https://www.betonjayareadymix.com/2018/11/jasa-pembuatan-lapangan-voli-bekasi.html": "Jasa Pembuatan Lapangan Voli Bekasi",  // TYPE: MONEY_CHILD
  
  // ============================================================
  // [MONEY PAGE] - JASA PEMBUATAN LAPANGAN VOLI BOGOR
  // 🧠 TYPE: MONEY_CHILD (spesifik lokasi)
  // Breadcrumb: Home > Jasa Struktur Konstruksi > Jasa Konstruksi Lapangan Olahraga > Jasa Pembuatan Lapangan Voli Bogor
  // ============================================================
  "https://www.betonjayareadymix.com/2018/11/jasa-pembuatan-lapangan-voli-bogor.html": "Jasa Pembuatan Lapangan Voli Bogor"  // TYPE: MONEY_CHILD
};

// ============================================================
// [SUB2] - JASA PEMBUATAN LAPANGAN SERBAGUNA
// 🧠 STATUS: KOSONG - PERLU DIBUAT
// ============================================================

const urlMappingJasaPembuatanLapanganSerbaguna = {
  // ============================================================
  // SARAN ITEM BARU - JASA PEMBUATAN LAPANGAN SERBAGUNA
  // 🧠 TYPE: MONEY_MASTER (jika dibuat)
  // Breadcrumb: Home > Jasa Struktur Konstruksi > Jasa Konstruksi Lapangan Olahraga > Jasa Pembuatan Lapangan Serbaguna
  // ============================================================
  // "https://www.betonjayareadymix.com/2018/09/jasa-pembuatan-lapangan-serbaguna.html": "Jasa Pembuatan Lapangan Serbaguna",  // TYPE: MONEY_MASTER
  // "https://www.betonjayareadymix.com/2018/09/harga-buat-lapangan-serbaguna.html": "Harga Buat Lapangan Serbaguna"  // TYPE: MONEY_MASTER
};

/*
================================================================
RINGKASAN TYPE YANG DIGUNAKAN:
================================================================

| TYPE | Boleh Skip? | Keterangan |
|------|-------------|-------------|
| SUB2 | ✅ BOLEH | Halaman kategori di bawah PILLAR |
| MONEY_MASTER | ❌ TIDAK | Halaman transaksi utama (harga, jasa pembuatan) |
| MONEY_CHILD | ❌ TIDAK | Halaman transaksi spesifik lokasi (Jakarta, Bekasi, dll) |

================================================================
HIERARCHY BREADCRUMB:
================================================================

Home > Jasa Struktur Konstruksi (SUB2) > Jasa Konstruksi Lapangan Olahraga (SUB2) > [MONEY PAGE]

Contoh:
Home > Jasa Struktur Konstruksi > Jasa Konstruksi Lapangan Olahraga > Harga Buat Lapangan Futsal
Home > Jasa Struktur Konstruksi > Jasa Konstruksi Lapangan Olahraga > Jasa Pembuatan Lapangan Voli Bekasi
*/

/*const urlMappingStrukturKhusus= {
"https://www.betonjayareadymix.com/p/jasa-pembuatan-kolam-renang.html": "Jasa Pembuatan Kolam Renang",
  "https://www.betonjayareadymix.com/p/jasa-pembuatan-kolam-ikan.html": "Jasa Pembuatan Kolam Ikan",
  "https://www.betonjayareadymix.com/p/jasa-septic-tank-beton.html": "Jasa Septic Tank Beton",
  "https://www.betonjayareadymix.com/p/jasa-pembuatan-tangki-air.html": "Jasa Pembuatan Tangki Air",
  "https://www.betonjayareadymix.com/p/jasa-pembuatan-bak-penampungan.html": "Jasa Pembuatan Bak Penampungan",
  "https://www.betonjayareadymix.com/p/jasa-konstruksi-menara-air.html": "Jasa Konstruksi Menara Air"

};*/
// ============================================================
// JASA STRUKTUR KHUSUS (SUB2)
// Parent: Jasa Struktur Konstruksi (/p/jasa-struktur-konstruksi.html)
// ============================================================

// ============================================================
// [SUB2] - JASA PEMBUATAN KOLAM RENANG
// ============================================================

const urlMappingJasaPembuatanKolamRenang = {
  // ============================================================
  // [MONEY_CHILD] - SPESIFIK LOKASI (CIAMIS)
  // 🧠 TYPE: MONEY_CHILD (WAJIB tampil, parent: SUB2)
  // Breadcrumb: Home > Jasa Struktur Konstruksi > Jasa Struktur Khusus > Jasa Kolam Renang Ciamis
  // ============================================================
  "https://www.betonjayareadymix.com/2018/11/jasa-kolam-renang-ciamis.html": "Jasa Kolam Renang Ciamis",  // TYPE: MONEY_CHILD
  
  // ============================================================
  // [MONEY_CHILD] - SPESIFIK LOKASI (KUNINGAN)
  // ============================================================
  "https://www.betonjayareadymix.com/2018/11/jasa-kolam-renang-kuningan.html": "Jasa Kolam Renang Kuningan",  // TYPE: MONEY_CHILD
  
  // ============================================================
  // [MONEY_CHILD] - SPESIFIK LOKASI (CIREBON)
  // ============================================================
  "https://www.betonjayareadymix.com/2018/11/jasa-kolam-renang-cirebon.html": "Jasa Kolam Renang Cirebon",  // TYPE: MONEY_CHILD
  
  // ============================================================
  // [MONEY_CHILD] - SPESIFIK LOKASI (GARUT)
  // ============================================================
  "https://www.betonjayareadymix.com/2018/11/jasa-kolam-renang-garut.html": "Jasa Kolam Renang Garut",  // TYPE: MONEY_CHILD
  
  // ============================================================
  // [MONEY_CHILD] - SPESIFIK LOKASI (PURWAKARTA)
  // ============================================================
  "https://www.betonjayareadymix.com/2018/11/jasa-kolam-renang-purwakarta.html": "Jasa Kolam Renang Purwakarta",  // TYPE: MONEY_CHILD
  
  // ============================================================
  // [MONEY_CHILD] - SPESIFIK LOKASI (SUKABUMI)
  // ============================================================
  "https://www.betonjayareadymix.com/2018/11/jasa-kolam-renang-sukabumi.html": "Jasa Kolam Renang Sukabumi",  // TYPE: MONEY_CHILD
  
  // ============================================================
  // [MONEY_CHILD] - SPESIFIK LOKASI (CIANJUR)
  // ============================================================
  "https://www.betonjayareadymix.com/2018/11/jasa-kolam-renang-cianjur.html": "Jasa Kolam Renang Cianjur",  // TYPE: MONEY_CHILD
  
  // ============================================================
  // [MONEY_CHILD] - SPESIFIK LOKASI (BANDUNG)
  // ============================================================
  "https://www.betonjayareadymix.com/2018/11/jasa-kolam-renang-bandung.html": "Jasa Kolam Renang Bandung",  // TYPE: MONEY_CHILD
  
  // ============================================================
  // [MONEY_CHILD] - SPESIFIK LOKASI (DEPOK)
  // ============================================================
  "https://www.betonjayareadymix.com/2018/11/jasa-kolam-renang-depok.html": "Jasa Kolam Renang Depok",  // TYPE: MONEY_CHILD
  
  // ============================================================
  // [MONEY_CHILD] - SPESIFIK LOKASI (TANGERANG)
  // ============================================================
  "https://www.betonjayareadymix.com/2018/11/jasa-kolam-renang-tangerang.html": "Jasa Kolam Renang Tangerang",  // TYPE: MONEY_CHILD
  
  // ============================================================
  // [MONEY_CHILD] - SPESIFIK LOKASI (JAKARTA)
  // ============================================================
  "https://www.betonjayareadymix.com/2018/11/jasa-kolam-renang-jakarta.html": "Jasa Kolam Renang Jakarta",  // TYPE: MONEY_CHILD
  
  // ============================================================
  // [MONEY_CHILD] - SPESIFIK LOKASI (BEKASI)
  // ============================================================
  "https://www.betonjayareadymix.com/2018/11/jasa-kolam-renang-bekasi.html": "Jasa Kolam Renang Bekasi",  // TYPE: MONEY_CHILD
  
  // ============================================================
  // [MONEY_CHILD] - SPESIFIK LOKASI (BOGOR)
  // ============================================================
  "https://www.betonjayareadymix.com/2018/11/jasa-kolam-renang-bogor.html": "Jasa Kolam Renang Bogor",  // TYPE: MONEY_CHILD
  
  // ============================================================
  // [MONEY_MASTER] - KONTRAKTOR KOLAM RENANG
  // 🧠 TYPE: MONEY_MASTER (WAJIB tampil, parent: SUB2)
  // Breadcrumb: Home > Jasa Struktur Konstruksi > Jasa Struktur Khusus > Kontraktor Kolam Renang
  // ============================================================
  "https://www.betonjayareadymix.com/2018/09/kontraktor-kolam-renang.html": "Kontraktor Kolam Renang",  // TYPE: MONEY_MASTER
  
  // ============================================================
  // [MONEY_MASTER] - JASA KOLAM RENANG (UMUM)
  // ============================================================
  "https://www.betonjayareadymix.com/2018/09/jasa-kolam-renang.html": "Jasa Kolam Renang",  // TYPE: MONEY_MASTER
  
  // ============================================================
  // [MONEY_MASTER] - BIAYA BANGUN KOLAM RENANG PER METER
  // ============================================================
  "https://www.betonjayareadymix.com/2018/09/biaya-bangun-kolam-renang-per-meter.html": "Biaya Bangun Kolam Renang Per Meter",  // TYPE: MONEY_MASTER
  
  // ============================================================
  // [MONEY_MASTER] - KONTRAKTOR WATERPARK INDONESIA
  // ============================================================
  "https://www.betonjayareadymix.com/2018/09/kontraktor-waterpark-indonesia.html": "Kontraktor Waterpark Indonesia",  // TYPE: MONEY_MASTER
  
  // ============================================================
  // [MONEY_MASTER] - HARGA JASA PEMBUATAN WATERPARK KOLAM RENANG
  // ============================================================
  "https://www.betonjayareadymix.com/2018/09/harga-jasa-pembuatan-waterpark-kolam-renang.html": "Harga Jasa Pembuatan Waterpark Kolam Renang",  // TYPE: MONEY_MASTER
  
  // ============================================================
  // [MONEY_MASTER] - HARGA JASA PEMBUATAN WAHANA KOLAM RENANG
  // ============================================================
  "https://www.betonjayareadymix.com/2018/09/harga-jasa-pembuatan-wahana-kolam-renang.html": "Harga Jasa Pembuatan Wahana Kolam Renang",  // TYPE: MONEY_MASTER
  
  // ============================================================
  // [MONEY_MASTER] - HARGA PEMBUATAN KOLAM RENANG PER M2
  // ============================================================
  "https://www.betonjayareadymix.com/2018/09/harga-pembuatan-kolam-renang-per-m2.html": "Harga Pembuatan Kolam Renang Per M2",  // TYPE: MONEY_MASTER
  
  // ============================================================
  // [MONEY_MASTER] - HARGA JASA BORONGAN TENAGA BIKIN KOLAM RENANG
  // ============================================================
  "https://www.betonjayareadymix.com/2018/09/harga-jasa-borongan-tenaga-bikin-kolam-renang.html": "Harga Jasa Borongan Tenaga Bikin Kolam Renang",  // TYPE: MONEY_MASTER
  
  // ============================================================
  // [MONEY_MASTER] - HARGA JASA PEMBUATAN KOLAM RENANG
  // ============================================================
  "https://www.betonjayareadymix.com/2018/09/harga-jasa-pembuatan-kolam-renang.html": "Harga Jasa Pembuatan Kolam Renang"  // TYPE: MONEY_MASTER
};

// ============================================================
// [SUB2] - JASA PEMBUATAN KOLAM IKAN (KOSONG - PERLU DIBUAT)
// ============================================================

const urlMappingJasaPembuatanKolamIkan = {
  // ============================================================
  // SARAN ITEM BARU - JASA PEMBUATAN KOLAM IKAN
  // 🧠 TYPE: MONEY_MASTER (di bawah Jasa Struktur Khusus)
  // Breadcrumb: Home > Jasa Struktur Konstruksi > Jasa Struktur Khusus > Jasa Pembuatan Kolam Ikan
  // ============================================================
  // "https://www.betonjayareadymix.com/2018/09/jasa-pembuatan-kolam-ikan.html": "Jasa Pembuatan Kolam Ikan",  // TYPE: MONEY_MASTER
  // "https://www.betonjayareadymix.com/2018/09/harga-buat-kolam-ikan.html": "Harga Buat Kolam Ikan"  // TYPE: MONEY_MASTER
};

// ============================================================
// [SUB2] - JASA SEPTIC TANK BETON (KOSONG - PERLU DIBUAT)
// ============================================================

const urlMappingJasaSepticTankBeton = {
  // ============================================================
  // SARAN ITEM BARU - JASA SEPTIC TANK BETON
  // 🧠 TYPE: MONEY_MASTER (di bawah Jasa Struktur Khusus)
  // Breadcrumb: Home > Jasa Struktur Konstruksi > Jasa Struktur Khusus > Jasa Septic Tank Beton
  // ============================================================
  // "https://www.betonjayareadymix.com/2018/09/jasa-septic-tank-beton.html": "Jasa Septic Tank Beton",  // TYPE: MONEY_MASTER
  // "https://www.betonjayareadymix.com/2018/09/harga-septic-tank-beton.html": "Harga Septic Tank Beton"  // TYPE: MONEY_MASTER
};

// ============================================================
// [SUB2] - JASA PEMBUATAN TANGKI AIR (KOSONG - PERLU DIBUAT)
// ============================================================

const urlMappingJasaPembuatanTangkiAir = {
  // ============================================================
  // SARAN ITEM BARU - JASA PEMBUATAN TANGKI AIR
  // 🧠 TYPE: MONEY_MASTER (di bawah Jasa Struktur Khusus)
  // Breadcrumb: Home > Jasa Struktur Konstruksi > Jasa Struktur Khusus > Jasa Pembuatan Tangki Air
  // ============================================================
  // "https://www.betonjayareadymix.com/2018/09/jasa-pembuatan-tangki-air.html": "Jasa Pembuatan Tangki Air",  // TYPE: MONEY_MASTER
  // "https://www.betonjayareadymix.com/2018/09/harga-tangki-air-beton.html": "Harga Tangki Air Beton"  // TYPE: MONEY_MASTER
};

// ============================================================
// [SUB2] - JASA PEMBUATAN BAK PENAMPUNGAN (KOSONG - PERLU DIBUAT)
// ============================================================

const urlMappingJasaPembuatanBakPenampungan = {
  // ============================================================
  // SARAN ITEM BARU - JASA PEMBUATAN BAK PENAMPUNGAN
  // 🧠 TYPE: MONEY_MASTER (di bawah Jasa Struktur Khusus)
  // Breadcrumb: Home > Jasa Struktur Konstruksi > Jasa Struktur Khusus > Jasa Pembuatan Bak Penampungan
  // ============================================================
  // "https://www.betonjayareadymix.com/2018/09/jasa-pembuatan-bak-penampungan.html": "Jasa Pembuatan Bak Penampungan",  // TYPE: MONEY_MASTER
  // "https://www.betonjayareadymix.com/2018/09/harga-bak-penampungan-beton.html": "Harga Bak Penampungan Beton"  // TYPE: MONEY_MASTER
};

// ============================================================
// [SUB2] - JASA KONSTRUKSI MENARA AIR (KOSONG - PERLU DIBUAT)
// ============================================================

const urlMappingJasaKonstruksiMenaraAir = {
  // ============================================================
  // SARAN ITEM BARU - JASA KONSTRUKSI MENARA AIR
  // 🧠 TYPE: MONEY_MASTER (di bawah Jasa Struktur Khusus)
  // Breadcrumb: Home > Jasa Struktur Konstruksi > Jasa Struktur Khusus > Jasa Konstruksi Menara Air
  // ============================================================
  // "https://www.betonjayareadymix.com/2018/09/jasa-konstruksi-menara-air.html": "Jasa Konstruksi Menara Air",  // TYPE: MONEY_MASTER
  // "https://www.betonjayareadymix.com/2018/09/harga-menara-air-beton.html": "Harga Menara Air Beton"  // TYPE: MONEY_MASTER
};
/*
📋 RINGKASAN TYPE YANG DIGUNAKAN
Type	Jumlah Item	Keterangan
MONEY_CHILD	13 item	Spesifik lokasi (Ciamis, Kuningan, Cirebon, dll)
MONEY_MASTER	10 item	Halaman umum (kontraktor, biaya, harga)
SUB2	6 item (dalam comment)	Jasa Pembuatan Kolam Ikan, Septic Tank, dll (belum aktif)
📊 BREADCRUMB YANG BENAR (4 LEVEL, SKIP PILLAR)
Halaman	Breadcrumb
Jasa Kolam Renang Ciamis	Home > Jasa Struktur Konstruksi > Jasa Struktur Khusus > Jasa Kolam Renang Ciamis
Jasa Kolam Renang Kuningan	Home > Jasa Struktur Konstruksi > Jasa Struktur Khusus > Jasa Kolam Renang Kuningan
Kontraktor Kolam Renang	Home > Jasa Struktur Konstruksi > Jasa Struktur Khusus > Kontraktor Kolam Renang
Biaya Bangun Kolam Renang Per Meter	Home > Jasa Struktur Konstruksi > Jasa Struktur Khusus > Biaya Bangun Kolam Renang Per Meter
Harga Jasa Pembuatan Kolam Renang	Home > Jasa Struktur Konstruksi > Jasa Struktur Khusus > Harga Jasa Pembuatan Kolam Renang


*/
// ============================================================
// FUNGSI GENERATE BREADCRUMB - VERSI FINAL
// UNTUK SEMUA PILLAR (PRODUK, MATERIAL, JASA, INTERIOR, DLL)
// MAX_LEVEL = 4 (TERMASUK HOME)
// SKIP LEVEL BEKERJA UNTUK PILLAR & SUB2
// ============================================================

function generateBreadcrumbForMapping(mappingObj, currentUrl, breadcrumbItems = [], pillarType = 'JASA_KONSTRUKSI') {
    
    const MAX_LEVEL = 4;
    const DOMAIN = 'https://www.betonjayareadymix.com';
    
    // ============================================================
    // 1. VALIDASI PILLAR TYPE
    // ============================================================
    const validPillarTypes = ['PRODUK_KONSTRUKSI', 'MATERIAL_KONSTRUKSI', 'JASA_KONSTRUKSI', 
                               'PRODUK_INTERIOR', 'JASA_DESAIN_INTERIOR'];
    if (!validPillarTypes.includes(pillarType)) {
        console.error(`❌ ERROR: "${pillarType}" BUKAN PILLAR TYPE yang valid!`);
        console.error(`   Gunakan salah satu dari: ${validPillarTypes.join(', ')}`);
        return null;
    }
    
    const pageTitle = mappingObj[currentUrl];
    if (!pageTitle) {
        console.error(`❌ ERROR: URL "${currentUrl}" tidak ditemukan di mapping`);
        return null;
    }
    
    // ============================================================
    // 2. KUMPULKAN SEMUA NAMA HALAMAN DARI MAPPING (UNTUK REFERENSI)
    // ============================================================
    const knownPages = [];
    for (const [url, name] of Object.entries(mappingObj)) {
        if (name && typeof name === 'string') {
            knownPages.push(name.toLowerCase());
        }
    }
    
    // ============================================================
    // 3. DETEKSI TYPE OTOMATIS
    // ============================================================
    function detectPageType(pageName, position, totalLevels) {
        const lowerName = pageName.toLowerCase();
        const parts = pageName.split(' ');
        const lastWord = parts[parts.length - 1].toLowerCase();
        const firstWord = parts[0].toLowerCase();
        const wordCount = parts.length;
        
        // PILLAR: posisi pertama
        if (position === 0) return 'PILLAR';
        
        // MONEY_LEADGEN
        if (lowerName.startsWith('konsultasi')) return 'MONEY_LEADGEN';
        
        // MONEY_MASTER (deteksi transaksi)
        const transactionWords = ['harga', 'sewa', 'jual', 'beli', 'pesan', 'booking', 'order', 'rental',
            'biaya', 'tarif', 'rate', 'cost', 'price', 'fee', 'charge', 'promo', 'diskon', 'obral',
            'gratis', 'voucher', 'cashback', 'cicilan', 'kredit', 'dp', 'angsuran', 'quote', 'penawaran', 'estimasi'];
        
        for (const word of transactionWords) {
            if (lowerName.startsWith(word + ' ') || lowerName.includes(' ' + word + ' ') || lowerName.endsWith(' ' + word)) {
                return 'MONEY_MASTER';
            }
        }
        
        // SUB1 (deteksi panduan)
        const guideWords = ['panduan', 'cara', 'tips', 'tutorial', 'langkah', 'petunjuk', 'pedoman', 'instruksi',
            'guide', 'how to', 'step by step', 'strategi', 'metode', 'teknik', 'rahasia', 'kunci sukses',
            'wajib tahu', 'perlu diketahui', 'edukasi', 'belajar', 'mempelajari', 'pemahaman', 'solusi', 'jawaban'];
        
        for (const word of guideWords) {
            if (lowerName.startsWith(word + ' ') || lowerName.includes(' ' + word + ' ')) {
                return 'SUB1';
            }
        }
        
        // VARIANT (deteksi angka atau kata kunci)
        if (/\d/.test(lowerName)) return 'VARIANT';
        
        const variantWords = ['tipe', 'type', 'ukuran', 'model', 'varian', 'warna', 'bentuk', 'seri', 'versi',
            'grade', 'kelas', 'standar', 'jenis', 'macam', 'ragam', 'kategori', 'spesifikasi', 'detail', 'rinci',
            'kapasitas', 'volume', 'berat', 'panjang', 'lebar', 'tinggi', 'tebal', 'diameter', 'radius', 'luas',
            'bahan', 'material', 'komposisi', 'kualitas', 'mutu', 'kode', 'plus', 'minus', 'kelebihan', 'kekurangan',
            'baru', 'lama', 'bekas', 'second', 'original', 'kw', 'putih', 'hitam', 'merah', 'biru', 'hijau',
            'kecil', 'besar', 'sedang', 'mini', 'maxi', 'jumbo', 'extra', 'super'];
        
        for (const word of variantWords) {
            if (lowerName.includes(' ' + word + ' ') || lowerName.endsWith(' ' + word)) {
                return 'VARIANT';
            }
        }
        
        // MONEY_CHILD (deteksi lokasi)
        function isLikelyLocation(word) {
            if (word.length < 3 || word.length > 25) return false;
            if (!/^[a-zA-Z]+$/.test(word)) return false;
            if (word === firstWord) return false;
            
            const notLocationWords = ['mini', 'maxi', 'super', 'extra', 'plus', 'pro', 'max', 'ultra',
                'baru', 'lama', 'bekas', 'second', 'original', 'kw', 'grade', 'murah', 'mahal', 'hemat',
                'premium', 'standar', 'ekonomis', 'kecil', 'besar', 'sedang', 'panjang', 'pendek', 'tebal', 'tipis',
                'putih', 'hitam', 'merah', 'biru', 'hijau', 'kuning', 'ungu', 'abu', 'coklat'];
            if (notLocationWords.includes(word)) return false;
            
            const isKnownProduct = knownPages.some(known => known === word || (known.includes(word) && word.length > 3));
            if (isKnownProduct) return false;
            
            if (word.length >= 4 && word.length <= 12) return true;
            if (/[aiueo]$/.test(word) && word.length >= 4) return true;
            
            const locationPatterns = ['ang', 'ung', 'eng', 'ong', 'an', 'in', 'un', 'en', 
                'ap', 'ip', 'op', 'ar', 'ur', 'er', 'or', 'karta', 'jaya', 'pura', 'sari', 'mulya', 'agung', 'asih', 'ayem'];
            for (const pattern of locationPatterns) {
                if (word.endsWith(pattern) && word.length >= 4) return true;
            }
            
            if (word.length >= 5 && /[aiueo].*[aiueo]/.test(word)) return true;
            return false;
        }
        
        if (wordCount >= 2 && isLikelyLocation(lastWord)) return 'MONEY_CHILD';
        
        return 'SUB2';
    }
    
    // ============================================================
    // 4. FUNGSI BANTUAN
    // ============================================================
    function generateIdFromName(name) {
        return name.replace(/[^a-zA-Z0-9]/g, '') + 'Post';
    }
    
    // ============================================================
    // 5. BANGUN LEVELS DARI ARRAY OBJECT (NAMA + URL)
    // ============================================================
    const allLevels = [];
    for (let i = 0; i < breadcrumbItems.length; i++) {
        const item = breadcrumbItems[i];
        const name = typeof item === 'string' ? item : item.name;
        const url = typeof item === 'string' ? null : item.url;
        
        allLevels.push({
            name: name,
            url: url,
            type: detectPageType(name, i, breadcrumbItems.length),
            id: generateIdFromName(name),
            position: i
        });
    }
    
    // ============================================================
    // 6. VALIDASI & FALLBACK URL
    // ============================================================
    for (const level of allLevels) {
        if (!level.url) {
            let foundUrl = null;
            for (const [url, name] of Object.entries(mappingObj)) {
                if (name === level.name) {
                    foundUrl = url.startsWith('http') ? url : DOMAIN + url;
                    break;
                }
            }
            if (!foundUrl) {
                const slug = level.name.toLowerCase().replace(/ /g, '-');
                foundUrl = `${DOMAIN}/p/${slug}.html`;
            }
            level.url = foundUrl;
        } else if (!level.url.startsWith('http')) {
            level.url = DOMAIN + level.url;
        }
    }
    
    // ============================================================
    // 7. TENTUKAN LEVEL YANG AKAN DITAMPILKAN (MAX 4 LEVEL)
    // ============================================================
    const selectedLevels = [];
    
    // Level 1: Home (WAJIB)
    selectedLevels.push({ name: 'BJR', url: DOMAIN, isHome: true });
    
    // Hitung slot tersisa (MAX_LEVEL - 1 untuk home - 1 untuk halaman saat ini)
    let remainingSlots = MAX_LEVEL - 2;
    
    console.log(`📊 ========================================`);
    console.log(`📊 Breadcrumb Generator - SEO Tercanggih`);
    console.log(`📊 Max level: ${MAX_LEVEL}, slot untuk parent: ${remainingSlots}`);
    console.log(`📊 Breadcrumb items: ${allLevels.map(l => l.name).join(' → ')}`);
    console.log(`📊 ========================================`);
    
    // Parent terdekat (level terakhir) - WAJIB tampil
    let parentTerdekat = null;
    if (allLevels.length > 0) {
        parentTerdekat = allLevels[allLevels.length - 1];
        selectedLevels.push(parentTerdekat);
        remainingSlots--;
        console.log(`✅ WAJIB: "${parentTerdekat.name}" (${parentTerdekat.type}) - sisa slot: ${remainingSlots}`);
    }
    
    // Level lainnya (dari awal sampai sebelum parent terdekat)
    const otherLevels = [...allLevels.slice(0, allLevels.length - 1)].reverse();
    const canSkipTypes = ['PILLAR', 'SUB2'];
    
    for (const level of otherLevels) {
        if (remainingSlots <= 0) {
            console.log(`📌 SKIP: "${level.name}" (${level.type}) - tidak ada slot tersisa`);
            continue;
        }
        
        if (canSkipTypes.includes(level.type)) {
            console.log(`📌 SKIP: "${level.name}" (${level.type}) - type boleh skip`);
            continue;
        }
        
        selectedLevels.splice(1, 0, level);
        remainingSlots--;
        console.log(`✅ TAMBAH: "${level.name}" (${level.type}) - sisa slot: ${remainingSlots}`);
    }
    
    // Halaman saat ini (WAJIB)
    const currentFullUrl = currentUrl.startsWith('http') ? currentUrl : DOMAIN + currentUrl;
    selectedLevels.push({
        name: pageTitle,
        url: currentFullUrl,
        isCurrent: true
    });
    
    // Update position
    for (let i = 0; i < selectedLevels.length; i++) {
        selectedLevels[i].position = i + 1;
    }
    
    console.log(`✅ FINAL (${selectedLevels.length} level): ${selectedLevels.map(l => l.name).join(' → ')}`);
    
    // ============================================================
    // 8. GENERATE HTML BREADCRUMB
    // ============================================================
    let breadcrumbHtml = `<div class="breadcrumbs">\n<span>\n`;
    breadcrumbHtml += `<a href="${DOMAIN}/" itemprop="item" title="Beton Jaya Readymix">`;
    breadcrumbHtml += `<meta content="1" itemprop="position">`;
    breadcrumbHtml += `<span itemprop="name">BJR</span></a>\n`;
    breadcrumbHtml += `</span>\n &nbsp;›&nbsp;\n\n`;
    breadcrumbHtml += `<span>\n<div id="breadcrumbContainer" style="display: inline;">\n`;
    
    for (let i = 1; i < selectedLevels.length; i++) {
        const level = selectedLevels[i];
        const isLast = (i === selectedLevels.length - 1);
        
        if (!isLast) {
            breadcrumbHtml += `<a href="${level.url}" id="${level.id}" title="${level.name.toUpperCase()}" style="visibility: visible;">`;
            breadcrumbHtml += `<span id="${level.id}Name">${level.name}</span>&nbsp;›&nbsp;\n`;
            breadcrumbHtml += `</a>\n`;
        } else {
            breadcrumbHtml += `<span id="pageNameBreadcrumb">${level.name}</span>\n`;
        }
    }
    
    breadcrumbHtml += `</div>\n</span>\n</div>`;
    
    // ============================================================
    // 9. GENERATE JSON-LD SCHEMA
    // ============================================================
    const jsonLdItems = [];
    jsonLdItems.push({ "@type": "ListItem", "position": 1, "name": "Beton Jaya Readymix", "item": DOMAIN });
    
    for (let i = 1; i < selectedLevels.length; i++) {
        jsonLdItems.push({
            "@type": "ListItem",
            "position": i + 1,
            "name": selectedLevels[i].name,
            "item": selectedLevels[i].url
        });
    }
    
    // ============================================================
    // 10. HAPUS BREADCRUMB LAMA & INJECT YANG BARU
    // ============================================================
    // Hapus semua breadcrumb lama (manual)
    const oldBreadcrumbs = document.querySelectorAll('.breadcrumbs, .breadcrumb-nav, [aria-label="Breadcrumb"]');
    oldBreadcrumbs.forEach(el => el.remove());
    
    // Hapus JSON-LD lama
    const oldJsonLd = document.querySelector('script[data-breadcrumb="true"]');
    if (oldJsonLd) oldJsonLd.remove();
    
    // Inject HTML breadcrumb baru
    const mainContent = document.querySelector('main, article, .content, #main-content, .post-content');
    if (mainContent?.firstChild) {
        mainContent.insertAdjacentHTML('afterbegin', breadcrumbHtml);
    } else {
        document.body.insertAdjacentHTML('afterbegin', breadcrumbHtml);
    }
    
    // Inject JSON-LD baru
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-breadcrumb', 'true');
    script.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": jsonLdItems
    });
    document.head.appendChild(script);
    
    console.log(`✅ Breadcrumb injected ke DOM`);
    return breadcrumbHtml;
}
// Menyimpan elemen yang dihapus dalam variabel
let removedElementsJasakonstruksistrukturPost = {};
function removeCondition(conditionId) {
    const conditionElement = document.getElementById(conditionId);

    if (conditionElement) {
        // Menyimpan elemen yang dihapus dalam objek untuk bisa dikembalikan
        removedElementsJasakonstruksistrukturPost[conditionId] = conditionElement;
        conditionElement.remove(); // Menghapus elemen tersebut
    }
}

// Fungsi untuk mengembalikan elemen yang telah dihapus
function restoreCondition(conditionId) {
    const breadcrumb = document.querySelector('.breadcrumb');
    const elementToRestore = removedElementsJasakonstruksistrukturPost[conditionId]; // Mendapatkan elemen yang disimpan

    if (elementToRestore) {
        breadcrumb.appendChild(elementToRestore); // Menambahkan elemen kembali ke dalam breadcrumb
        delete removedElementsJasakonstruksistrukturPost[conditionId]; // Menghapus elemen dari objek setelah dikembalikan
    } else {
        console.log(`Elemen dengan ID ${conditionId} tidak ditemukan di removedElementsJasakonstruksistrukturPost.`);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    // var currentUrl = window.location.href;
     //const cleanUrl = currentUrl.split('?')[0]; // Menghapus parameter seperti ?m=1
    const cleanUrlJasaJasaKonsStrukturPost = window.location.href.split(/[?#]/)[0]; // Menghilangkan parameter seperti ?m=1

		/* ==========================================================
   🧩 HybridDateModified v2.5 — StableHash + Safe Load Order
   Fitur:
   - Menjamin detect-evergreen.js dimuat lebih dulu
   - Update <meta dateModified> hanya jika URL terdaftar
   - Stable hash → hasil dateModified konsisten
   ========================================================== */
/*
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
		urlMappingJasaRangkaAtapBajaRingan,
		urlMappingJasaKonstruksiBajaKonvensional,
		urlMappingJasaKanopiBajadanBesi,
		urlMappingJasaStrukturBajaGudang,
		urlMappingJasaCorBeton,
		urlMappingJasaPengecoranLantaiDak,
		urlMappingJasaPengecoranLantaiGudang,
		urlMappingJasaBekistingdanPembesian,
		urlMappingJasaPengecoranKolomBeton,
		urlMappingJasaKonstruksiGedungHunian,
		urlMappingJasaKonstruksiRumahTinggal,
		urlMappingJasaKonstruksiRukodanKios,
		urlMappingJasaKonstruksiVilla,
		urlMappingJasaKonstruksiApartemen,
		urlMappingJasaKonstruksiHotel,
		urlMappingJasaKonstruksiPerkantoran,
		urlMappingJasaKonstruksiGedungSekolah,
		urlMappingJasaKonstruksiGedungRumahSakit,
		urlMappingJasaKonstruksiGudangLogistik,
		urlMappingJasaKonstruksiPabrik,
		urlMappingJasaKonstruksiColdStorage,
		urlMappingJasaKonstruksiBengkel,
		urlMappingJasaKonstruksiWorkshop,
		urlMappingJasaPembuatanLapanganOlahRaga,
		urlMappingJasaPembuatanLapanganFutsal,
		urlMappingJasaPembuatanLapanganBasket,
		urlMappingJasaPembuatanLapanganSepakbola,
		urlMappingJasaPembuatanLapanganTenis,
		urlMappingJasaPembuatanLapanganBadminton,
		urlMappingJasaPembuatanLapanganVoli,
		urlMappingJasaPembuatanLapanganSerbaguna,
		urlMappingJasaPembuatanKolamRenang,
		urlMappingJasaPembuatanKolamIkan,
		urlMappingJasaSepticTankBeton,
		urlMappingJasaPembuatanTangkiAir,
		urlMappingJasaPembuatanBakPenampungan,
		urlMappingJasaKonstruksiMenaraAir
		
    );

    // --- validasi URL terdaftar ---
    if (!urlMappingGabungan[cleanUrlJasaJasaKonsStrukturPost]) {
      console.log(`[HybridDateModified] URL tidak terdaftar: ${cleanUrlJasaJasaKonsStrukturPost}`);
      return;
    }
  
  // === Tanggal nextUpdate1 global ===
		const globalNextUpdate1 = "2026-02-07T00:00:00.000Z";
	console.log(`🌐 [AutoMeta] Detected jasa-konstruksi-struktur-post : ${cleanUrlJasaJasaKonsStrukturPost}`);

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

    const hash = stableHash(cleanUrlJasaJasaKonsStrukturPost);
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
	
	console.log("✅ AEDMetaDates updated jasa-konstruksi-struktur-post:", window.AEDMetaDates);
    console.log(`✅ [HybridDateModified v2.5] ${cleanUrlJasaJasaKonsStrukturPost} → ${isoDate} | type=${type || "-"}`);

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
*/

	// --- gabungkan semua mapping ---
    const urlMappingGabungan = Object.assign(
      {},
		urlMappingJasaRangkaAtapBajaRingan,
		urlMappingJasaKonstruksiBajaKonvensional,
		urlMappingJasaKanopiBajadanBesi,
		urlMappingJasaStrukturBajaGudang,
		urlMappingJasaCorBeton,
		urlMappingJasaPengecoranLantaiDak,
		urlMappingJasaPengecoranLantaiGudang,
		urlMappingJasaBekistingdanPembesian,
		urlMappingJasaPengecoranKolomBeton,
		urlMappingJasaKonstruksiGedungHunian,
		urlMappingJasaKonstruksiRumahTinggal,
		urlMappingJasaKonstruksiRukodanKios,
		urlMappingJasaKonstruksiVilla,
		urlMappingJasaKonstruksiApartemen,
		urlMappingJasaKonstruksiHotel,
		urlMappingJasaKonstruksiPerkantoran,
		urlMappingJasaKonstruksiGedungSekolah,
		urlMappingJasaKonstruksiGedungRumahSakit,
		urlMappingJasaKonstruksiGudangLogistik,
		urlMappingJasaKonstruksiPabrik,
		urlMappingJasaKonstruksiColdStorage,
		urlMappingJasaKonstruksiBengkel,
		urlMappingJasaKonstruksiWorkshop,
		urlMappingJasaPembuatanLapanganOlahRaga,
		urlMappingJasaPembuatanLapanganFutsal,
		urlMappingJasaPembuatanLapanganBasket,
		urlMappingJasaPembuatanLapanganSepakbola,
		urlMappingJasaPembuatanLapanganTenis,
		urlMappingJasaPembuatanLapanganBadminton,
		urlMappingJasaPembuatanLapanganVoli,
		urlMappingJasaPembuatanLapanganSerbaguna,
		urlMappingJasaPembuatanKolamRenang,
		urlMappingJasaPembuatanKolamIkan,
		urlMappingJasaSepticTankBeton,
		urlMappingJasaPembuatanTangkiAir,
		urlMappingJasaPembuatanBakPenampungan,
		urlMappingJasaKonstruksiMenaraAir
		
    );

    // --- validasi URL terdaftar ---
    if (!urlMappingGabungan[cleanUrlJasaJasaKonsStrukturPost]) {
      console.log(`[HybridDateModified] URL tidak terdaftar: ${cleanUrlJasaJasaKonsStrukturPost}`);
      return;
    }

	(async function runHybridDateModified() {
		  try {
		
		    function loadExternalJS(src) {
		      return new Promise((resolve) => {
		        if (document.querySelector(`script[src="${src}"]`)) {
		          resolve();
		          return;
		        }
		
		        const s = document.createElement("script");
		        s.src = src;
		        s.defer = true; // 🔥 PENTING
		        s.onload = resolve;
		        s.onerror = () => {
		          console.warn("[Evergreen] Gagal load:", src);
		          resolve(); // ❗ jangan reject
		        };
		        document.head.appendChild(s);
		      });
		    }
		
		    function waitForDetectEvergreen() {
		      return new Promise((resolve) => {
		        if (
		          window.__detectEvergreenReady &&
		          typeof window.detectEvergreen === "function"
		        ) {
		          resolve(true);
		        } else {
		          window.addEventListener(
		            "detectEvergreenReady",
		            () => resolve(true),
		            { once: true }
		          );
		        }
		      });
		    }
		
		    async function loadEvergreenScript(manualDate = null) {
		
		      if (typeof window.detectEvergreen !== "function") {
		        console.log("⏳ Loading detectEvergreen...");
		
		        await loadExternalJS(
		          "https://raw.githack.com/aliyul/solution-blogger/main/detect-evergreen.js"
		        );
		
		        await waitForDetectEvergreen();
		        console.log("✅ detectEvergreen READY");
		      } else {
		        console.log("⚡ detectEvergreen already available");
		      }
		
		      const config = manualDate
		        ? { customDateModified: manualDate }
		        : {};
		
		      console.log("🧠 detectEvergreen config:", config);
		
		      try {
		        window.detectEvergreen(config);
		      } catch (e) {
		        console.error("[Evergreen] Execution failed:", e);
		      }
		    }
		
		    // =============================
		    // MODE PEMANGGILAN
		    // =============================
		
		    // ✔ MANUAL (ONCE UPDATE EVERGREEN)
		    await loadEvergreenScript("2026-01-22T10:30:00+07:00");
		
		    // ✔ AUTO MODE
		    // await loadEvergreenScript();
		
		  } catch (err) {
		    console.error("[HybridDateModified] Fatal:", err);
		  }
		})();
	
     // Menemukan elemen menggunakan Id
    //var JasaKonsPerbaikan = document.getElementById("JasaKonsPerbaikan");
    var JasaKonsStrukturPost = document.getElementById("JasaKonsStrukturPost");

if (!JasaKonsStrukturPost) {
     console.error("elemen Id JasaKonsPerbaikanPost kondisi terhapus");	
} else {


     var JasaKonstruksiStrukturPostLink = document.getElementById("JasaKonstruksiStrukturPost");
     var JasaStrukturKonstruksiPostLink = document.getElementById("JasaStrukturKonstruksiPost");
    //SUB JasaStrukturKonstruksi
     var JasaKonstruksiGedungdanHunianPostLink = document.getElementById("JasaKonstruksiGedungdanHunianPost");
     var JasaKonstruksiIndustridanGudangPostLink = document.getElementById("JasaKonstruksiIndustridanGudangPost");
     var JasaStrukturBajadanRangkaRinganPostLink = document.getElementById("JasaStrukturBajadanRangkaRinganPost");
     var JasaStrukturKhususPostLink = document.getElementById("JasaStrukturKhususPost");
     var JasaKonstruksiLapanganOlahragaPostLink = document.getElementById("JasaKonstruksiLapanganOlahragaPost");
     var JasaKonstruksiModulardanPrecastPostLink = document.getElementById("JasaKonstruksiModulardanPrecastPost");
     var JasaStrukturBetondanPengecoranPostLink = document.getElementById("JasaStrukturBetondanPengecoranPost");
	
     //SUB JasaKonstruksiStrukturPost
     var JasaRangkaAtapBajaRinganPostLink = document.getElementById("JasaRangkaAtapBajaRinganPost");
     var JasaKonstruksiBajaKonvensionalPostLink = document.getElementById("JasaKonstruksiBajaKonvensionalPost");
     var JasaKanopiBajadanBesiPostLink = document.getElementById("JasaKanopiBajadanBesiPost");
     var JasaStrukturBajaGudangPostLink = document.getElementById("JasaStrukturBajaGudangPost");
     //SUB JasaStrukturBetondanPengecoranPost
     var JasaCorBetonPostLink = document.getElementById("JasaCorBetonPost");
     var JasaPengecoranLantaiDakPostLink = document.getElementById("JasaPengecoranLantaiDakPost");
     var JasaPengecoranKolomBetonPostLink = document.getElementById("JasaPengecoranKolomBetonPost");
     var JasaPengecoranLantaiGudangPostLink = document.getElementById("JasaPengecoranLantaiGudangPost");
     var JasaBekistingdanPembesianPostLink = document.getElementById("JasaBekistingdanPembesianPost");
   //SUB JasaKonstruksiGedungdanHunianPost
     var JasaKonstruksiRumahTinggalPostLink = document.getElementById("JasaKonstruksiRumahTinggalPost");
     var JasaKonstruksiRukodanKiosPostLink = document.getElementById("JasaKonstruksiRukodanKiosPost");
     var JasaKonstruksiVillaPostLink = document.getElementById("JasaKonstruksiVillaPost");
     var JasaKonstruksiApartemenPostLink = document.getElementById("JasaKonstruksiApartemenPost");
     var JasaKonstruksiHotelPostLink = document.getElementById("JasaKonstruksiHotelPost");
     var JasaKonstruksiPerkantoranPostLink = document.getElementById("JasaKonstruksiPerkantoranPost");
     var JasaKonstruksiGedungSekolahPostLink = document.getElementById("JasaKonstruksiGedungSekolahPost");
     var JasaKonstruksiGedungRumahSakitPostLink = document.getElementById("JasaKonstruksiGedungRumahSakitPost");
	//SUB JasaKonstruksiIndustridanGudangPost
     var JasaKonstruksiGudangLogistikPostLink = document.getElementById("JasaKonstruksiGudangLogistikPost");
     var JasaKonstruksiPabrikPostLink = document.getElementById("JasaKonstruksiPabrikPost");
     var JasaKonstruksiColdStoragePostLink = document.getElementById("JasaKonstruksiColdStoragePost");
     var JasaKonstruksiBengkelPostLink = document.getElementById("JasaKonstruksiBengkelPost");
     var JasaKonstruksiWorkshopPostLink = document.getElementById("JasaKonstruksiWorkshopPost");
     var JasaKonstruksiPabrikPostLink = document.getElementById("JasaKonstruksiPabrikPost");
	//SUB JasaKonstruksiLapanganOlahragaPost
     var JasaPembuatanLapanganFutsalPostLink = document.getElementById("JasaPembuatanLapanganFutsalPost");
     var JasaPembuatanLapanganTenisPostLink = document.getElementById("JasaPembuatanLapanganTenisPost");
     var JasaPembuatanLapanganBadmintonPostLink = document.getElementById("JasaPembuatanLapanganBadmintonPost");
     var JasaPembuatanLapanganBasketPostLink = document.getElementById("JasaPembuatanLapanganBasketPost");
     var JasaPembuatanLapanganSepakbolaPostLink = document.getElementById("JasaPembuatanLapanganSepakbolaPost");
     var JasaPembuatanLapanganVoliPostLink = document.getElementById("JasaPembuatanLapanganVoliPost");
     var JasaPembuatanLapanganSerbagunaPostLink = document.getElementById("JasaPembuatanLapanganSerbagunaPost");
    //SUB JasaStrukturKhususPost
     var JasaPembuatanKolamRenangPostLink = document.getElementById("JasaPembuatanKolamRenangPost");
     var JasaPembuatanKolamIkanPostLink = document.getElementById("JasaPembuatanKolamIkanPost");
     var JasaSepticTankBetonPostLink = document.getElementById("JasaSepticTankBetonPost");
     var JasaPembuatanTangkiAirPostLink = document.getElementById("JasaPembuatanTangkiAirPost");
     var JasaPembuatanBakPenampunganPostLink = document.getElementById("JasaPembuatanBakPenampunganPost");
     var JasaKonstruksiMenaraAirPostLink = document.getElementById("JasaKonstruksiMenaraAirPost");
    	
     var pageNameJasaKonsStrukturPost = document.getElementById("pageNameJasaKonsStrukturPost");
    
     //hide SUB JasaKonstruksiStrukturPost     
      JasaRangkaAtapBajaRinganPostLink.style.visibility = 'hidden';
      JasaKonstruksiBajaKonvensionalPostLink.style.visibility = 'hidden';
      JasaKanopiBajadanBesiPostLink.style.visibility = 'hidden';
      JasaStrukturBajaGudangPostLink.style.visibility = 'hidden';
      //hide SUB JasaStrukturBetondanPengecoranPost  
      JasaCorBetonPostLink.style.visibility = 'hidden';
      JasaPengecoranLantaiDakPostLink.style.visibility = 'hidden';
      JasaPengecoranKolomBetonPostLink.style.visibility = 'hidden';
      JasaPengecoranLantaiGudangPostLink.style.visibility = 'hidden';
      JasaBekistingdanPembesianPostLink.style.visibility = 'hidden';
     //hide SUB JasaKonstruksiGedungdanHunianPost
      JasaKonstruksiRumahTinggalPostLink.style.visibility = 'hidden';
      JasaKonstruksiRukodanKiosPostLink.style.visibility = 'hidden';
      JasaKonstruksiVillaPostLink.style.visibility = 'hidden';
      JasaKonstruksiApartemenPostLink.style.visibility = 'hidden';
      JasaKonstruksiHotelPostLink.style.visibility = 'hidden';
      JasaKonstruksiPerkantoranPostLink.style.visibility = 'hidden';
      JasaKonstruksiGedungSekolahPostLink.style.visibility = 'hidden';
      JasaKonstruksiGedungRumahSakitPostLink.style.visibility = 'hidden';
    //hide SUB JasaKonstruksiIndustridanGudangPost
     JasaKonstruksiGudangLogistikPostLink.style.visibility = 'hidden';
     JasaKonstruksiPabrikPostLink.style.visibility = 'hidden';
     JasaKonstruksiColdStoragePostLink.style.visibility = 'hidden';
     JasaKonstruksiBengkelPostLink.style.visibility = 'hidden';
     JasaKonstruksiWorkshopPostLink.style.visibility = 'hidden';
     JasaKonstruksiPabrikPostLink.style.visibility = 'hidden';

      //SUB JasaKonstruksiLapanganOlahragaPost
    JasaPembuatanLapanganFutsalPostLink.style.visibility = 'hidden';
    JasaPembuatanLapanganTenisPostLink.style.visibility = 'hidden';
   JasaPembuatanLapanganBadmintonPostLink.style.visibility = 'hidden';
    JasaPembuatanLapanganBasketPostLink.style.visibility = 'hidden';
    JasaPembuatanLapanganSepakbolaPostLink.style.visibility = 'hidden';
    JasaPembuatanLapanganVoliPostLink.style.visibility = 'hidden';
    JasaPembuatanLapanganSerbagunaPostLink.style.visibility = 'hidden';
      //SUB JasaStrukturKhususPost
    JasaPembuatanKolamRenangPostLink.style.visibility = 'hidden';
    JasaPembuatanKolamIkanPostLink.style.visibility = 'hidden';
    JasaSepticTankBetonPostLink.style.visibility = 'hidden';
    JasaPembuatanTangkiAirPostLink.style.visibility = 'hidden';
    JasaPembuatanBakPenampunganPostLink.style.visibility = 'hidden';
    JasaKonstruksiMenaraAirPostLink.style.visibility = 'hidden';
      
	
     // Default untuk menyembunyikan elemen
     JasaKonstruksiStrukturPostLink.style.visibility = 'hidden';
     JasaStrukturKonstruksiPostLink.style.visibility = 'hidden';
    
     //Hide SUB JasaStrukturKonstruksi
     JasaKonstruksiGedungdanHunianPostLink.style.visibility = 'hidden';
     JasaKonstruksiIndustridanGudangPostLink.style.visibility = 'hidden';
     JasaStrukturBajadanRangkaRinganPostLink.style.visibility = 'hidden';
     JasaStrukturKhususPostLink.style.visibility = 'hidden';
     JasaKonstruksiLapanganOlahragaPostLink.style.visibility = 'hidden';
     JasaKonstruksiModulardanPrecastPostLink.style.visibility = 'hidden';
     JasaStrukturBetondanPengecoranPostLink.style.visibility = 'hidden';
	
     pageNameJasaKonsStrukturPost.textContent = "";


//SUB JasaStrukturBajadanRangkaRinganPost
if (urlMappingJasaRangkaAtapBajaRingan[cleanUrlJasaJasaKonsStrukturPost]) {
        restoreCondition('JasaKonsStrukturPost');
        restoreCondition('JasaStrukturBajadanRangkaRinganPost');
        restoreCondition('JasaRangkaAtapBajaRinganPost');

       //hapus elemen div id lain
	removeCondition('JasaDesInPost');
	removeCondition('ProdukInFurPost');
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
	removeCondition('JasaKonsBongkarBangunanPost');
        removeCondition('JasaKonsPengeboranPost'); 
	removeCondition('JasaKonsFinishingPost');
        removeCondition('ProdukKonsSaluranPost');
        removeCondition('JasaKonsAlatKonstruksiPost');
        removeCondition('JasaKonsJalanPerkerasanPost');

	 //hapus elemen id JasaStrukturBajadanRangkaRinganPost SELAIN JasaRangkaAtapBajaRinganPost
        removeCondition('JasaKonstruksiBajaKonvensionalPost');
        removeCondition('JasaKanopiBajadanBesiPost');
        removeCondition('JasaStrukturBajaGudangPost');
      //hapus elemen id JasaStrukturBetondanPengecoranPost SEMUA
        removeCondition('JasaCorBetonPost');
        removeCondition('JasaPengecoranLantaiDakPost');
        removeCondition('JasaPengecoranLantaiGudangPost');
        removeCondition('JasaBekistingdanPembesianPost');
        removeCondition('JasaPengecoranKolomBetonPost');
      //hapus elemen id JasaKonstruksiGedungdanHunianPost SEMUA
        removeCondition('JasaKonstruksiRumahTinggalPost');
        removeCondition('JasaKonstruksiRukodanKiosPost');
        removeCondition('JasaKonstruksiVillaPost');
        removeCondition('JasaKonstruksiApartemenPost');
        removeCondition('JasaKonstruksiHotelPost');
        removeCondition('JasaKonstruksiPerkantoranPost');
        removeCondition('JasaKonstruksiGedungSekolahPost');
        removeCondition('JasaKonstruksiGedungRumahSakitPost');
	//hapus elemen id JasaKonstruksiIndustridanGudangPost SEMUA
        removeCondition('JasaKonstruksiGudangLogistikPost');
        removeCondition('JasaKonstruksiPabrikPost');
        removeCondition('JasaKonstruksiColdStoragePost');
        removeCondition('JasaKonstruksiBengkelPost');
        removeCondition('JasaKonstruksiWorkshopPost');
        removeCondition('JasaKonstruksiPabrikPost');
	
	// hapus elemen id JasaKonstruksiLapanganOlahragaPost SEMUA
	
        removeCondition('JasaPembuatanLapanganBadmintonPost');
        removeCondition('JasaPembuatanLapanganFutsalPost');
	removeCondition('JasaPembuatanLapanganTenisPost');
        removeCondition('JasaPembuatanLapanganBasketPost');
        removeCondition('JasaPembuatanLapanganSepakbolaPost');
        removeCondition('JasaPembuatanLapanganVoliPost');
        removeCondition('JasaPembuatanLapanganSerbagunaPost');
	//hapus elemen id JasaStrukturKhususPost SEMUA 
        removeCondition('JasaPembuatanKolamRenangPost');
        removeCondition('JasaPembuatanKolamIkanPost');
        removeCondition('JasaSepticTankBetonPost');
        removeCondition('JasaPembuatanTangkiAirPost');
        removeCondition('JasaPembuatanBakPenampunganPost');
        removeCondition('JasaKonstruksiMenaraAirPost');

	
      
	/*
JasaKonstruksiGedungdanHunianPost
JasaKonstruksiIndustridanGudangPost
JasaStrukturBajadanRangkaRinganPost
JasaStrukturKhusus
JasaKonstruksiLapanganOlahragaPost
JasaKonstruksiModulardanPrecastPost
JasaStrukturBetondanPengecoranPost
*/
       //HAPUS ELEMEN LAIN DI JasaKonsStruktur SELAIN JasaStrukturBajadanRangkaRinganPost
        removeCondition('JasaKonstruksiIndustridanGudangPost');
        removeCondition('JasaKonstruksiGedungdanHunianPost');
        removeCondition('JasaStrukturKhususPost');
	removeCondition('JasaKonstruksiLapanganOlahragaPost');
	removeCondition('JasaKonstruksiModulardanPrecastPost');
	removeCondition('JasaStrukturBetondanPengecoranPost');
       
        JasaKonstruksiStrukturPostLink.style.visibility = 'visible';
        JasaStrukturKonstruksiPostLink.style.visibility = 'visible';
	//TAMPILKAN JasaStrukturBajadanRangkaRinganPostLink
        JasaStrukturBajadanRangkaRinganPostLink.style.visibility = 'visible';
	//TAMPILKAN JasaRangkaAtapBajaRinganPostLink
        JasaRangkaAtapBajaRinganPostLink.style.visibility = 'visible';
        pageNameJasaKonsStrukturPost.textContent = urlMappingJasaRangkaAtapBajaRingan[cleanUrlJasaJasaKonsStrukturPost];
    }
// ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaRangkaAtapBajaRingan[cleanUrlJasaJasaKonsStrukturPost]) {
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
                   "name": "Jasa Struktur Baja dan Rangka Ringan",
                   "item": "https://www.betonjayareadymix.com/p/jasa-struktur-baja-dan-rangka-ringan.html"
               },
		{
                   "@type": "ListItem",
                   "position": 5,
                   "name": "Jasa Rangka Atap Baja Ringan",
                   "item": "https://www.betonjayareadymix.com/p/jasa-rangka-atap-baja-ringan.html"
               },
               {
                   "@type": "ListItem",
                   "position": 6,
                   "name": urlMappingJasaRangkaAtapBajaRingan[cleanUrlJasaJasaKonsStrukturPost],
                   "item": cleanUrlJasaJasaKonsStrukturPost
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
if (urlMappingJasaKonstruksiBajaKonvensional[cleanUrlJasaJasaKonsStrukturPost]) {
        restoreCondition('JasaKonsStrukturPost');
        restoreCondition('JasaStrukturBajadanRangkaRinganPost');
        restoreCondition('JasaKonstruksiBajaKonvensionalPost');

       //hapus elemen div id lain
	removeCondition('JasaDesInPost');
	removeCondition('ProdukInFurPost');
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
	removeCondition('JasaKonsBongkarBangunanPost');
        removeCondition('JasaKonsPengeboranPost'); 
	removeCondition('JasaKonsFinishingPost');
        removeCondition('ProdukKonsSaluranPost');
        removeCondition('JasaKonsAlatKonstruksiPost');
        removeCondition('JasaKonsJalanPerkerasanPost');

	 //hapus elemen id JasaStrukturBajadanRangkaRinganPost SELAIN JasaKonstruksiBajaKonvensionalPost
        removeCondition('JasaRangkaAtapBajaRinganPost');
        removeCondition('JasaKanopiBajadanBesiPost');
        removeCondition('JasaStrukturBajaGudangPost');
      //hapus elemen id JasaStrukturBetondanPengecoranPost SEMUA
        removeCondition('JasaCorBetonPost');
        removeCondition('JasaPengecoranLantaiDakPost');
        removeCondition('JasaPengecoranLantaiGudangPost');
        removeCondition('JasaBekistingdanPembesianPost');
        removeCondition('JasaPengecoranKolomBetonPost');
      //hapus elemen id JasaKonstruksiGedungdanHunianPost SEMUA
        removeCondition('JasaKonstruksiRumahTinggalPost');
        removeCondition('JasaKonstruksiRukodanKiosPost');
        removeCondition('JasaKonstruksiVillaPost');
        removeCondition('JasaKonstruksiApartemenPost');
        removeCondition('JasaKonstruksiHotelPost');
        removeCondition('JasaKonstruksiPerkantoranPost');
        removeCondition('JasaKonstruksiGedungSekolahPost');
        removeCondition('JasaKonstruksiGedungRumahSakitPost');
	//hapus elemen id JasaKonstruksiIndustridanGudangPost SEMUA
        removeCondition('JasaKonstruksiGudangLogistikPost');
        removeCondition('JasaKonstruksiPabrikPost');
        removeCondition('JasaKonstruksiColdStoragePost');
        removeCondition('JasaKonstruksiBengkelPost');
        removeCondition('JasaKonstruksiWorkshopPost');
        removeCondition('JasaKonstruksiPabrikPost');
	
	// hapus elemen id JasaKonstruksiLapanganOlahragaPost SEMUA
	
        removeCondition('JasaPembuatanLapanganBadmintonPost');
        removeCondition('JasaPembuatanLapanganFutsalPost');
	removeCondition('JasaPembuatanLapanganTenisPost');
        removeCondition('JasaPembuatanLapanganBasketPost');
        removeCondition('JasaPembuatanLapanganSepakbolaPost');
        removeCondition('JasaPembuatanLapanganVoliPost');
        removeCondition('JasaPembuatanLapanganSerbagunaPost');
	//hapus elemen id JasaStrukturKhususPost SEMUA 
        removeCondition('JasaPembuatanKolamRenangPost');
        removeCondition('JasaPembuatanKolamIkanPost');
        removeCondition('JasaSepticTankBetonPost');
        removeCondition('JasaPembuatanTangkiAirPost');
        removeCondition('JasaPembuatanBakPenampunganPost');
        removeCondition('JasaKonstruksiMenaraAirPost');

	
      
	/*
JasaKonstruksiGedungdanHunianPost
JasaKonstruksiIndustridanGudangPost
JasaStrukturBajadanRangkaRinganPost
JasaStrukturKhusus
JasaKonstruksiLapanganOlahragaPost
JasaKonstruksiModulardanPrecastPost
JasaStrukturBetondanPengecoranPost
*/
       //HAPUS ELEMEN LAIN DI JasaKonsStruktur SELAIN JasaStrukturBajadanRangkaRinganPost
        removeCondition('JasaKonstruksiIndustridanGudangPost');
        removeCondition('JasaKonstruksiGedungdanHunianPost');
        removeCondition('JasaStrukturKhususPost');
	removeCondition('JasaKonstruksiLapanganOlahragaPost');
	removeCondition('JasaKonstruksiModulardanPrecastPost');
	removeCondition('JasaStrukturBetondanPengecoranPost');
       
        JasaKonstruksiStrukturPostLink.style.visibility = 'visible';
        JasaStrukturKonstruksiPostLink.style.visibility = 'visible';
	//TAMPILKAN JasaStrukturBajadanRangkaRinganPostLink
        JasaStrukturBajadanRangkaRinganPostLink.style.visibility = 'visible';
	//TAMPILKAN JasaKonstruksiBajaKonvensionalPostLink
        JasaKonstruksiBajaKonvensionalPostLink.style.visibility = 'visible';
        pageNameJasaKonsStrukturPost.textContent = urlMappingJasaKonstruksiBajaKonvensional[cleanUrlJasaJasaKonsStrukturPost];
    }

// ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaKonstruksiBajaKonvensional[cleanUrlJasaJasaKonsStrukturPost]) {
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
                   "name": "Jasa Struktur Baja dan Rangka Ringan",
                   "item": "https://www.betonjayareadymix.com/p/jasa-struktur-baja-dan-rangka-ringan.html"
               },
		{
                   "@type": "ListItem",
                   "position": 5,
                   "name": "Jasa Konstruksi Baja Konvensional",
                   "item": "https://www.betonjayareadymix.com/p/jasa-konstruksi-baja-konvensional.html"
               },
               {
                   "@type": "ListItem",
                   "position": 6,
                   "name": urlMappingJasaKonstruksiBajaKonvensional[cleanUrlJasaJasaKonsStrukturPost],
                   "item": cleanUrlJasaJasaKonsStrukturPost
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
//AKHIR SUB JasaStrukturBajadanRangkaRinganPost
	
//SUB JasaStrukturBetondanPengecoranPost
if (urlMappingJasaCorBeton[cleanUrlJasaJasaKonsStrukturPost]) {
        restoreCondition('JasaKonsStrukturPost');
        restoreCondition('JasaStrukturBetondanPengecoranPost');
        restoreCondition('JasaCorBetonPost');

       //hapus elemen div id lain
	removeCondition('JasaDesInPost');
	removeCondition('ProdukInFurPost');
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
	removeCondition('JasaKonsBongkarBangunanPost');
        removeCondition('JasaKonsPengeboranPost'); 
	removeCondition('JasaKonsFinishingPost');
        removeCondition('ProdukKonsSaluranPost');
        removeCondition('JasaKonsAlatKonstruksiPost');
        removeCondition('JasaKonsJalanPerkerasanPost');

	 //hapus elemen id JasaStrukturBajadanRangkaRinganPost SEMUA
        removeCondition('JasaKonstruksiBajaKonvensionalPost');
        removeCondition('JasaKanopiBajadanBesiPost');
        removeCondition('JasaStrukturBajaGudangPost');
        removeCondition('JasaRangkaAtapBajaRinganPost');
	 //hapus elemen id JasaKonstruksiGedungdanHunianPost SEMUA
        removeCondition('JasaKonstruksiRumahTinggalPost');
        removeCondition('JasaKonstruksiRukodanKiosPost');
        removeCondition('JasaKonstruksiVillaPost');
        removeCondition('JasaKonstruksiApartemenPost');
        removeCondition('JasaKonstruksiHotelPost');
        removeCondition('JasaKonstruksiPerkantoranPost');
        removeCondition('JasaKonstruksiGedungSekolahPost');
        removeCondition('JasaKonstruksiGedungRumahSakitPost');
	//hapus elemen id JasaKonstruksiIndustridanGudangPost SEMUA
        removeCondition('JasaKonstruksiGudangLogistikPost');
        removeCondition('JasaKonstruksiPabrikPost');
        removeCondition('JasaKonstruksiColdStoragePost');
        removeCondition('JasaKonstruksiBengkelPost');
        removeCondition('JasaKonstruksiWorkshopPost');
        removeCondition('JasaKonstruksiPabrikPost');
	
	// hapus elemen id JasaKonstruksiLapanganOlahragaPost SEMUA
	removeCondition('JasaPembuatanLapanganBadmintonPost');
        removeCondition('JasaPembuatanLapanganFutsalPost');
	removeCondition('JasaPembuatanLapanganTenisPost');
        removeCondition('JasaPembuatanLapanganBasketPost');
        removeCondition('JasaPembuatanLapanganSepakbolaPost');
        removeCondition('JasaPembuatanLapanganVoliPost');
        removeCondition('JasaPembuatanLapanganSerbagunaPost');
	//hapus elemen id JasaStrukturKhususPost SEMUA 
        removeCondition('JasaPembuatanKolamRenangPost');
        removeCondition('JasaPembuatanKolamIkanPost');
        removeCondition('JasaSepticTankBetonPost');
        removeCondition('JasaPembuatanTangkiAirPost');
        removeCondition('JasaPembuatanBakPenampunganPost');
        removeCondition('JasaKonstruksiMenaraAirPost');

	
      //hapus elemen id JasaStrukturBetondanPengecoranPost SEMUA selain JasaPengecoranLantaiDakPost
        removeCondition('JasaPengecoranLantaiGudangPost');
        removeCondition('JasaBekistingdanPembesianPost');
        removeCondition('JasaPengecoranKolomBetonPost');
        removeCondition('JasaPengecoranLantaiDakPost');
      
	/*
JasaKonstruksiGedungdanHunianPost
JasaKonstruksiIndustridanGudangPost
JasaStrukturBajadanRangkaRinganPost
JasaStrukturKhusus
JasaKonstruksiLapanganOlahragaPost
JasaKonstruksiModulardanPrecastPost
JasaStrukturBetondanPengecoranPost
*/
       //HAPUS ELEMEN LAIN DI JasaKonsStruktur SELAIN JasaStrukturBetondanPengecoranPost
        removeCondition('JasaKonstruksiIndustridanGudangPost');
        removeCondition('JasaKonstruksiGedungdanHunianPost');
        removeCondition('JasaStrukturKhususPost');
	removeCondition('JasaKonstruksiLapanganOlahragaPost');
	removeCondition('JasaKonstruksiModulardanPrecastPost');
	removeCondition('JasaStrukturBajadanRangkaRinganPost');
       
        JasaKonstruksiStrukturPostLink.style.visibility = 'visible';
        JasaStrukturKonstruksiPostLink.style.visibility = 'visible';
	//TAMPILKAN JasaStrukturBetondanPengecoranPostLink
        JasaStrukturBetondanPengecoranPostLink.style.visibility = 'visible';
	//TAMPILKAN JasaPengecoranLantaiDakPostLink
        JasaCorBetonPostLink.style.visibility = 'visible';
        pageNameJasaKonsStrukturPost.textContent = urlMappingJasaCorBeton[cleanUrlJasaJasaKonsStrukturPost];
    } 
// ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaCorBeton[cleanUrlJasaJasaKonsStrukturPost]) {
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
                   "name": "Jasa Struktur Beton dan Pengecoran",
                   "item": "https://www.betonjayareadymix.com/p/jasa-struktur-beton-dan-pengecoran.html"
               },
		{
                   "@type": "ListItem",
                   "position": 5,
                   "name": "Jasa Cor Beton",
                   "item": "https://www.betonjayareadymix.com/p/jasa-cor-beton.html"
               },
               {
                   "@type": "ListItem",
                   "position": 6,
                   "name": urlMappingJasaCorBeton[cleanUrlJasaJasaKonsStrukturPost],
                   "item": cleanUrlJasaJasaKonsStrukturPost
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }

if (urlMappingJasaPengecoranLantaiDak[cleanUrlJasaJasaKonsStrukturPost]) {
        restoreCondition('JasaKonsStrukturPost');
        restoreCondition('JasaStrukturBetondanPengecoranPost');
        restoreCondition('JasaPengecoranLantaiDakPost');
        removeCondition('JasaPengecoranKolomBetonPost');

       //hapus elemen div id lain
	removeCondition('JasaDesInPost');
	removeCondition('ProdukInFurPost');
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
	removeCondition('JasaKonsBongkarBangunanPost');
        removeCondition('JasaKonsPengeboranPost'); 
	removeCondition('JasaKonsFinishingPost');
        removeCondition('ProdukKonsSaluranPost');
        removeCondition('JasaKonsAlatKonstruksiPost');
        removeCondition('JasaKonsJalanPerkerasanPost');

	 //hapus elemen id JasaStrukturBajadanRangkaRinganPost SEMUA
        removeCondition('JasaKonstruksiBajaKonvensionalPost');
        removeCondition('JasaKanopiBajadanBesiPost');
        removeCondition('JasaStrukturBajaGudangPost');
        removeCondition('JasaRangkaAtapBajaRinganPost');
	 //hapus elemen id JasaKonstruksiGedungdanHunianPost SEMUA
        removeCondition('JasaKonstruksiRumahTinggalPost');
        removeCondition('JasaKonstruksiRukodanKiosPost');
        removeCondition('JasaKonstruksiVillaPost');
        removeCondition('JasaKonstruksiApartemenPost');
        removeCondition('JasaKonstruksiHotelPost');
        removeCondition('JasaKonstruksiPerkantoranPost');
        removeCondition('JasaKonstruksiGedungSekolahPost');
        removeCondition('JasaKonstruksiGedungRumahSakitPost');
	//hapus elemen id JasaKonstruksiIndustridanGudangPost SEMUA
        removeCondition('JasaKonstruksiGudangLogistikPost');
        removeCondition('JasaKonstruksiPabrikPost');
        removeCondition('JasaKonstruksiColdStoragePost');
        removeCondition('JasaKonstruksiBengkelPost');
        removeCondition('JasaKonstruksiWorkshopPost');
        removeCondition('JasaKonstruksiPabrikPost');
	
	// hapus elemen id JasaKonstruksiLapanganOlahragaPost SEMUA
	removeCondition('JasaPembuatanLapanganBadmintonPost');
        removeCondition('JasaPembuatanLapanganFutsalPost');
	removeCondition('JasaPembuatanLapanganTenisPost');
        removeCondition('JasaPembuatanLapanganBasketPost');
        removeCondition('JasaPembuatanLapanganSepakbolaPost');
        removeCondition('JasaPembuatanLapanganVoliPost');
        removeCondition('JasaPembuatanLapanganSerbagunaPost');
	//hapus elemen id JasaStrukturKhususPost SEMUA 
        removeCondition('JasaPembuatanKolamRenangPost');
        removeCondition('JasaPembuatanKolamIkanPost');
        removeCondition('JasaSepticTankBetonPost');
        removeCondition('JasaPembuatanTangkiAirPost');
        removeCondition('JasaPembuatanBakPenampunganPost');
        removeCondition('JasaKonstruksiMenaraAirPost');

	
      //hapus elemen id JasaStrukturBetondanPengecoranPost SEMUA selain JasaPengecoranLantaiDakPost
        removeCondition('JasaPengecoranLantaiGudangPost');
        removeCondition('JasaBekistingdanPembesianPost');
        removeCondition('JasaPengecoranKolomBetonPost');
        removeCondition('JasaCorBetonPost');
      
	/*
JasaKonstruksiGedungdanHunianPost
JasaKonstruksiIndustridanGudangPost
JasaStrukturBajadanRangkaRinganPost
JasaStrukturKhusus
JasaKonstruksiLapanganOlahragaPost
JasaKonstruksiModulardanPrecastPost
JasaStrukturBetondanPengecoranPost
*/
       //HAPUS ELEMEN LAIN DI JasaKonsStruktur SELAIN JasaStrukturBetondanPengecoranPost
        removeCondition('JasaKonstruksiIndustridanGudangPost');
        removeCondition('JasaKonstruksiGedungdanHunianPost');
        removeCondition('JasaStrukturKhususPost');
	removeCondition('JasaKonstruksiLapanganOlahragaPost');
	removeCondition('JasaKonstruksiModulardanPrecastPost');
	removeCondition('JasaStrukturBajadanRangkaRinganPost');
       
        JasaKonstruksiStrukturPostLink.style.visibility = 'visible';
        JasaStrukturKonstruksiPostLink.style.visibility = 'visible';
	//TAMPILKAN JasaStrukturBetondanPengecoranPostLink
        JasaStrukturBetondanPengecoranPostLink.style.visibility = 'visible';
	//TAMPILKAN JasaPengecoranLantaiDakPostLink
        JasaPengecoranLantaiDakPostLink.style.visibility = 'visible';
        pageNameJasaKonsStrukturPost.textContent = urlMappingJasaPengecoranLantaiDak[cleanUrlJasaJasaKonsStrukturPost];
    } 

// ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaPengecoranLantaiDak[cleanUrlJasaJasaKonsStrukturPost]) {
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
                   "name": "Jasa Struktur Beton dan Pengecoran",
                   "item": "https://www.betonjayareadymix.com/p/jasa-struktur-beton-dan-pengecoran.html"
               },
		{
                   "@type": "ListItem",
                   "position": 5,
                   "name": "Jasa Pengecoran Lantai Beton",
                   "item": "https://www.betonjayareadymix.com/p/jasa-pengecoran-lantai-dak.html"
               },
               {
                   "@type": "ListItem",
                   "position": 6,
                   "name": urlMappingJasaPengecoranLantaiDak[cleanUrlJasaJasaKonsStrukturPost],
                   "item": cleanUrlJasaJasaKonsStrukturPost
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
if (urlMappingJasaPengecoranKolomBeton[cleanUrlJasaJasaKonsStrukturPost]) {
        restoreCondition('JasaKonsStrukturPost');
        restoreCondition('JasaStrukturBetondanPengecoranPost');
        restoreCondition('JasaPengecoranKolomBetonPost');

       //hapus elemen div id lain
	removeCondition('JasaDesInPost');
	removeCondition('ProdukInFurPost');
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
	removeCondition('JasaKonsBongkarBangunanPost');
        removeCondition('JasaKonsPengeboranPost'); 
	removeCondition('JasaKonsFinishingPost');
        removeCondition('ProdukKonsSaluranPost');
        removeCondition('JasaKonsAlatKonstruksiPost');
        removeCondition('JasaKonsJalanPerkerasanPost');

	 //hapus elemen id JasaStrukturBajadanRangkaRinganPost SEMUA
        removeCondition('JasaKonstruksiBajaKonvensionalPost');
        removeCondition('JasaKanopiBajadanBesiPost');
        removeCondition('JasaStrukturBajaGudangPost');
        removeCondition('JasaRangkaAtapBajaRinganPost');
	 //hapus elemen id JasaKonstruksiGedungdanHunianPost SEMUA
        removeCondition('JasaKonstruksiRumahTinggalPost');
        removeCondition('JasaKonstruksiRukodanKiosPost');
        removeCondition('JasaKonstruksiVillaPost');
        removeCondition('JasaKonstruksiApartemenPost');
        removeCondition('JasaKonstruksiHotelPost');
        removeCondition('JasaKonstruksiPerkantoranPost');
        removeCondition('JasaKonstruksiGedungSekolahPost');
        removeCondition('JasaKonstruksiGedungRumahSakitPost');
	//hapus elemen id JasaKonstruksiIndustridanGudangPost SEMUA
        removeCondition('JasaKonstruksiGudangLogistikPost');
        removeCondition('JasaKonstruksiPabrikPost');
        removeCondition('JasaKonstruksiColdStoragePost');
        removeCondition('JasaKonstruksiBengkelPost');
        removeCondition('JasaKonstruksiWorkshopPost');
        removeCondition('JasaKonstruksiPabrikPost');
	
	// hapus elemen id JasaKonstruksiLapanganOlahragaPost SEMUA
	removeCondition('JasaPembuatanLapanganBadmintonPost');
        removeCondition('JasaPembuatanLapanganFutsalPost');
	removeCondition('JasaPembuatanLapanganTenisPost');
        removeCondition('JasaPembuatanLapanganBasketPost');
        removeCondition('JasaPembuatanLapanganSepakbolaPost');
        removeCondition('JasaPembuatanLapanganVoliPost');
        removeCondition('JasaPembuatanLapanganSerbagunaPost');
	//hapus elemen id JasaStrukturKhususPost SEMUA 
        removeCondition('JasaPembuatanKolamRenangPost');
        removeCondition('JasaPembuatanKolamIkanPost');
        removeCondition('JasaSepticTankBetonPost');
        removeCondition('JasaPembuatanTangkiAirPost');
        removeCondition('JasaPembuatanBakPenampunganPost');
        removeCondition('JasaKonstruksiMenaraAirPost');

	
      //hapus elemen id JasaStrukturBetondanPengecoranPost SEMUA selain JasaPengecoranKolomBetonPost
        removeCondition('JasaPengecoranLantaiGudangPost');
        removeCondition('JasaBekistingdanPembesianPost');        
	removeCondition('JasaPengecoranLantaiDakPost'); 
        removeCondition('JasaCorBetonPost');
	
      
	/*
JasaKonstruksiGedungdanHunianPost
JasaKonstruksiIndustridanGudangPost
JasaStrukturBajadanRangkaRinganPost
JasaStrukturKhusus
JasaKonstruksiLapanganOlahragaPost
JasaKonstruksiModulardanPrecastPost
JasaStrukturBetondanPengecoranPost
*/
       //HAPUS ELEMEN LAIN DI JasaKonsStruktur SELAIN JasaStrukturBetondanPengecoranPost
        removeCondition('JasaKonstruksiIndustridanGudangPost');
        removeCondition('JasaKonstruksiGedungdanHunianPost');
        removeCondition('JasaStrukturKhususPost');
	removeCondition('JasaKonstruksiLapanganOlahragaPost');
	removeCondition('JasaKonstruksiModulardanPrecastPost');
	removeCondition('JasaStrukturBajadanRangkaRinganPost');
       
        JasaKonstruksiStrukturPostLink.style.visibility = 'visible';
        JasaStrukturKonstruksiPostLink.style.visibility = 'visible';
	//TAMPILKAN JasaStrukturBetondanPengecoranPostLink
        JasaStrukturBetondanPengecoranPostLink.style.visibility = 'visible';
	//TAMPILKAN JasaPengecoranKolomBetonPostLink
        JasaPengecoranKolomBetonPostLink.style.visibility = 'visible';
        pageNameJasaKonsStrukturPost.textContent = urlMappingJasaPengecoranKolomBeton[cleanUrlJasaJasaKonsStrukturPost];
    } 
// ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaPengecoranKolomBeton[cleanUrlJasaJasaKonsStrukturPost]) {
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
                   "name": "Jasa Struktur Beton dan Pengecoran",
                   "item": "https://www.betonjayareadymix.com/p/jasa-struktur-beton-dan-pengecoran.html"
               },
		{
                   "@type": "ListItem",
                   "position": 5,
                   "name": "Jasa Pengecoran Kolom Beton",
                   "item": "https://www.betonjayareadymix.com/p/jasa-pengecoran-kolom-beton.html"
               },
               {
                   "@type": "ListItem",
                   "position": 6,
                   "name": urlMappingJasaPengecoranKolomBeton[cleanUrlJasaJasaKonsStrukturPost],
                   "item": cleanUrlJasaJasaKonsStrukturPost
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
if (urlMappingJasaBekistingdanPembesian[cleanUrlJasaJasaKonsStrukturPost]) {
        restoreCondition('JasaKonsStrukturPost');
        restoreCondition('JasaStrukturBetondanPengecoranPost');
        restoreCondition('JasaBekistingdanPembesianPost');

       //hapus elemen div id lain
	removeCondition('JasaDesInPost');
	removeCondition('ProdukInFurPost');
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
	removeCondition('JasaKonsBongkarBangunanPost');
        removeCondition('JasaKonsPengeboranPost'); 
	removeCondition('JasaKonsFinishingPost');
        removeCondition('ProdukKonsSaluranPost');
        removeCondition('JasaKonsAlatKonstruksiPost');
        removeCondition('JasaKonsJalanPerkerasanPost');

	 //hapus elemen id JasaStrukturBajadanRangkaRinganPost SEMUA
        removeCondition('JasaKonstruksiBajaKonvensionalPost');
        removeCondition('JasaKanopiBajadanBesiPost');
        removeCondition('JasaStrukturBajaGudangPost');
        removeCondition('JasaRangkaAtapBajaRinganPost');
	 //hapus elemen id JasaKonstruksiGedungdanHunianPost SEMUA
        removeCondition('JasaKonstruksiRumahTinggalPost');
        removeCondition('JasaKonstruksiRukodanKiosPost');
        removeCondition('JasaKonstruksiVillaPost');
        removeCondition('JasaKonstruksiApartemenPost');
        removeCondition('JasaKonstruksiHotelPost');
        removeCondition('JasaKonstruksiPerkantoranPost');
        removeCondition('JasaKonstruksiGedungSekolahPost');
        removeCondition('JasaKonstruksiGedungRumahSakitPost');
	//hapus elemen id JasaKonstruksiIndustridanGudangPost SEMUA
        removeCondition('JasaKonstruksiGudangLogistikPost');
        removeCondition('JasaKonstruksiPabrikPost');
        removeCondition('JasaKonstruksiColdStoragePost');
        removeCondition('JasaKonstruksiBengkelPost');
        removeCondition('JasaKonstruksiWorkshopPost');
        removeCondition('JasaKonstruksiPabrikPost');
	
	// hapus elemen id JasaKonstruksiLapanganOlahragaPost SEMUA
	removeCondition('JasaPembuatanLapanganBadmintonPost');
        removeCondition('JasaPembuatanLapanganFutsalPost');
        removeCondition('JasaPembuatanLapanganTenisPost');
        removeCondition('JasaPembuatanLapanganBasketPost');
        removeCondition('JasaPembuatanLapanganSepakbolaPost');
        removeCondition('JasaPembuatanLapanganVoliPost');
        removeCondition('JasaPembuatanLapanganSerbagunaPost');
	//hapus elemen id JasaStrukturKhususPost SEMUA 
        removeCondition('JasaPembuatanKolamRenangPost');
        removeCondition('JasaPembuatanKolamIkanPost');
        removeCondition('JasaSepticTankBetonPost');
        removeCondition('JasaPembuatanTangkiAirPost');
        removeCondition('JasaPembuatanBakPenampunganPost');
        removeCondition('JasaKonstruksiMenaraAirPost');

	
      //hapus elemen id JasaStrukturBetondanPengecoranPost SEMUA selain JasaPengecoranKolomBetonPost
        removeCondition('JasaPengecoranLantaiGudangPost');
        removeCondition('JasaPengecoranKolomBetonPost');        
	removeCondition('JasaPengecoranLantaiDakPost'); 
        removeCondition('JasaCorBetonPost');
	
      
	/*
JasaKonstruksiGedungdanHunianPost
JasaKonstruksiIndustridanGudangPost
JasaStrukturBajadanRangkaRinganPost
JasaStrukturKhusus
JasaKonstruksiLapanganOlahragaPost
JasaKonstruksiModulardanPrecastPost
JasaStrukturBetondanPengecoranPost
*/
       //HAPUS ELEMEN LAIN DI JasaKonsStruktur SELAIN JasaStrukturBetondanPengecoranPost
        removeCondition('JasaKonstruksiIndustridanGudangPost');
        removeCondition('JasaKonstruksiGedungdanHunianPost');
        removeCondition('JasaStrukturKhususPost');
	removeCondition('JasaKonstruksiLapanganOlahragaPost');
	removeCondition('JasaKonstruksiModulardanPrecastPost');
	removeCondition('JasaStrukturBajadanRangkaRinganPost');
       
        JasaKonstruksiStrukturPostLink.style.visibility = 'visible';
        JasaStrukturKonstruksiPostLink.style.visibility = 'visible';
	//TAMPILKAN JasaStrukturBetondanPengecoranPostLink
        JasaStrukturBetondanPengecoranPostLink.style.visibility = 'visible';
	//TAMPILKAN JasaBekistingdanPembesianPost
        JasaBekistingdanPembesianPostLink.style.visibility = 'visible';
        pageNameJasaKonsStrukturPost.textContent = urlMappingJasaBekistingdanPembesian[cleanUrlJasaJasaKonsStrukturPost];
    } 

// ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaBekistingdanPembesian[cleanUrlJasaJasaKonsStrukturPost]) {
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
                   "name": "Jasa Struktur Beton dan Pengecoran",
                   "item": "https://www.betonjayareadymix.com/p/jasa-struktur-beton-dan-pengecoran.html"
               },
		{
                   "@type": "ListItem",
                   "position": 5,
                   "name": "Jasa Bekisting dan Pembesian",
                   "item": "https://www.betonjayareadymix.com/p/jasa-bekisting-dan-pembesian.html"
               },
               {
                   "@type": "ListItem",
                   "position": 6,
                   "name": urlMappingJasaBekistingdanPembesian[cleanUrlJasaJasaKonsStrukturPost],
                   "item": cleanUrlJasaJasaKonsStrukturPost
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
//akhir SUB JasaStrukturBetondanPengecoranPost

if (urlMappingJasaKonstruksiGedungHunian[cleanUrlJasaJasaKonsStrukturPost]) {
        restoreCondition('JasaKonsStrukturPost');
        restoreCondition('JasaKonstruksiGedungdanHunianPost');
        //restoreCondition('JasaKonstruksiRumahTinggalPost');

       //hapus elemen div id lain
	removeCondition('JasaDesInPost');
	removeCondition('ProdukInFurPost');
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
	removeCondition('JasaKonsBongkarBangunanPost');
        removeCondition('JasaKonsPengeboranPost'); 
	removeCondition('JasaKonsFinishingPost');
        removeCondition('ProdukKonsSaluranPost');
        removeCondition('JasaKonsAlatKonstruksiPost');
        removeCondition('JasaKonsJalanPerkerasanPost');

	 //hapus elemen id JasaStrukturBajadanRangkaRinganPost SEMUA
        removeCondition('JasaKonstruksiBajaKonvensionalPost');
        removeCondition('JasaKanopiBajadanBesiPost');
        removeCondition('JasaStrukturBajaGudangPost');
        removeCondition('JasaRangkaAtapBajaRinganPost');
	// hapus elemen id JasaKonstruksiLapanganOlahragaPost SEMUA
	removeCondition('JasaPembuatanLapanganBadmintonPost');
	removeCondition('JasaPembuatanLapanganTenisPost');
        removeCondition('JasaPembuatanLapanganFutsalPost');
        removeCondition('JasaPembuatanLapanganBasketPost');
        removeCondition('JasaPembuatanLapanganSepakbolaPost');
        removeCondition('JasaPembuatanLapanganVoliPost');
        removeCondition('JasaPembuatanLapanganSerbagunaPost');
	
	 //hapus elemen id JasaKonstruksiGedungdanHunianPost SEMUA selain JasaKonstruksiRumahTinggalPost
        removeCondition('JasaKonstruksiRumahTinggalPost');
        removeCondition('JasaKonstruksiRukodanKiosPost');
        removeCondition('JasaKonstruksiVillaPost');
        removeCondition('JasaKonstruksiApartemenPost');
        removeCondition('JasaKonstruksiHotelPost');
        removeCondition('JasaKonstruksiPerkantoranPost');
        removeCondition('JasaKonstruksiGedungSekolahPost');
        removeCondition('JasaKonstruksiGedungRumahSakitPost');
	//hapus elemen id JasaKonstruksiIndustridanGudangPost SEMUA
        removeCondition('JasaKonstruksiGudangLogistikPost');
        removeCondition('JasaKonstruksiPabrikPost');
        removeCondition('JasaKonstruksiColdStoragePost');
        removeCondition('JasaKonstruksiBengkelPost');
        removeCondition('JasaKonstruksiWorkshopPost');
        removeCondition('JasaKonstruksiPabrikPost');
	
      //hapus elemen id JasaStrukturBetondanPengecoranPost SEMUA 
        removeCondition('JasaPengecoranLantaiGudangPost');
        removeCondition('JasaBekistingdanPembesianPost');
        removeCondition('JasaPengecoranLantaiDakPost');
        removeCondition('JasaPengecoranKolomBetonPost');
        removeCondition('JasaCorBetonPost');
	
	//hapus elemen id JasaStrukturKhususPost SEMUA 
        removeCondition('JasaPembuatanKolamRenangPost');
        removeCondition('JasaPembuatanKolamIkanPost');
        removeCondition('JasaSepticTankBetonPost');
        removeCondition('JasaPembuatanTangkiAirPost');
        removeCondition('JasaPembuatanBakPenampunganPost');
        removeCondition('JasaKonstruksiMenaraAirPost');

	
      
	/*
JasaKonstruksiGedungdanHunianPost
JasaKonstruksiIndustridanGudangPost
JasaStrukturBajadanRangkaRinganPost
JasaStrukturKhusus
JasaKonstruksiLapanganOlahragaPost
JasaKonstruksiModulardanPrecastPost
JasaStrukturBetondanPengecoranPost
*/
       //HAPUS ELEMEN LAIN DI JasaKonsStruktur SELAIN JasaKonstruksiGedungdanHunianPost
        removeCondition('JasaKonstruksiIndustridanGudangPost');
        removeCondition('JasaStrukturBetondanPengecoranPost');
        removeCondition('JasaStrukturKhususPost');
	removeCondition('JasaKonstruksiLapanganOlahragaPost');
	removeCondition('JasaKonstruksiModulardanPrecastPost');
	removeCondition('JasaStrukturBajadanRangkaRinganPost');
       
        JasaKonstruksiStrukturPostLink.style.visibility = 'visible';
        JasaStrukturKonstruksiPostLink.style.visibility = 'visible';
	//TAMPILKAN JasaKonstruksiGedungdanHunianPost
        JasaKonstruksiGedungdanHunianPostLink.style.visibility = 'visible';
	//TAMPILKAN JasaKonstruksiRumahTinggalPost
        //JasaKonstruksiRumahTinggalPostLink.style.visibility = 'visible';
        pageNameJasaKonsStrukturPost.textContent = urlMappingJasaKonstruksiGedungHunian[cleanUrlJasaJasaKonsStrukturPost];
    }
// ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaKonstruksiGedungHunian[cleanUrlJasaJasaKonsStrukturPost]) {
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
                   "name": "Jasa Konstruksi Gedung dan Hunian",
                   "item": "https://www.betonjayareadymix.com/p/jasa-konstruksi-gedung-dan-hunian.html"
               },	
               {
                   "@type": "ListItem",
                   "position": 5,
                   "name": urlMappingJasaKonstruksiGedungHunian[cleanUrlJasaJasaKonsStrukturPost],
                   "item": cleanUrlJasaJasaKonsStrukturPost
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
//SUB JasaKonstruksiGedungdanHunianPost
if (urlMappingJasaKonstruksiRumahTinggal[cleanUrlJasaJasaKonsStrukturPost]) {
        restoreCondition('JasaKonsStrukturPost');
        restoreCondition('JasaKonstruksiGedungdanHunianPost');
        restoreCondition('JasaKonstruksiRumahTinggalPost');

       //hapus elemen div id lain
	removeCondition('JasaDesInPost');
	removeCondition('ProdukInFurPost');
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
	removeCondition('JasaKonsBongkarBangunanPost');
        removeCondition('JasaKonsPengeboranPost'); 
	removeCondition('JasaKonsFinishingPost');
        removeCondition('ProdukKonsSaluranPost');
        removeCondition('JasaKonsAlatKonstruksiPost');
        removeCondition('JasaKonsJalanPerkerasanPost');

	 //hapus elemen id JasaStrukturBajadanRangkaRinganPost SEMUA
        removeCondition('JasaKonstruksiBajaKonvensionalPost');
        removeCondition('JasaKanopiBajadanBesiPost');
        removeCondition('JasaStrukturBajaGudangPost');
        removeCondition('JasaRangkaAtapBajaRinganPost');
	// hapus elemen id JasaKonstruksiLapanganOlahragaPost SEMUA
	removeCondition('JasaPembuatanLapanganBadmintonPost');
	removeCondition('JasaPembuatanLapanganTenisPost');
        removeCondition('JasaPembuatanLapanganFutsalPost');
        removeCondition('JasaPembuatanLapanganBasketPost');
        removeCondition('JasaPembuatanLapanganSepakbolaPost');
        removeCondition('JasaPembuatanLapanganVoliPost');
        removeCondition('JasaPembuatanLapanganSerbagunaPost');
	
	 //hapus elemen id JasaKonstruksiGedungdanHunianPost SEMUA selain JasaKonstruksiRumahTinggalPost
       // removeCondition('');
        removeCondition('JasaKonstruksiRukodanKiosPost');
        removeCondition('JasaKonstruksiVillaPost');
        removeCondition('JasaKonstruksiApartemenPost');
        removeCondition('JasaKonstruksiHotelPost');
        removeCondition('JasaKonstruksiPerkantoranPost');
        removeCondition('JasaKonstruksiGedungSekolahPost');
        removeCondition('JasaKonstruksiGedungRumahSakitPost');
	//hapus elemen id JasaKonstruksiIndustridanGudangPost SEMUA
        removeCondition('JasaKonstruksiGudangLogistikPost');
        removeCondition('JasaKonstruksiPabrikPost');
        removeCondition('JasaKonstruksiColdStoragePost');
        removeCondition('JasaKonstruksiBengkelPost');
        removeCondition('JasaKonstruksiWorkshopPost');
        removeCondition('JasaKonstruksiPabrikPost');
	
      //hapus elemen id JasaStrukturBetondanPengecoranPost SEMUA 
        removeCondition('JasaPengecoranLantaiGudangPost');
        removeCondition('JasaBekistingdanPembesianPost');
        removeCondition('JasaPengecoranLantaiDakPost');
        removeCondition('JasaPengecoranKolomBetonPost');
        removeCondition('JasaCorBetonPost');
	
	//hapus elemen id JasaStrukturKhususPost SEMUA 
        removeCondition('JasaPembuatanKolamRenangPost');
        removeCondition('JasaPembuatanKolamIkanPost');
        removeCondition('JasaSepticTankBetonPost');
        removeCondition('JasaPembuatanTangkiAirPost');
        removeCondition('JasaPembuatanBakPenampunganPost');
        removeCondition('JasaKonstruksiMenaraAirPost');

	
      
	/*
JasaKonstruksiGedungdanHunianPost
JasaKonstruksiIndustridanGudangPost
JasaStrukturBajadanRangkaRinganPost
JasaStrukturKhusus
JasaKonstruksiLapanganOlahragaPost
JasaKonstruksiModulardanPrecastPost
JasaStrukturBetondanPengecoranPost
*/
       //HAPUS ELEMEN LAIN DI JasaKonsStruktur SELAIN JasaKonstruksiGedungdanHunianPost
        removeCondition('JasaKonstruksiIndustridanGudangPost');
        removeCondition('JasaStrukturBetondanPengecoranPost');
        removeCondition('JasaStrukturKhususPost');
	removeCondition('JasaKonstruksiLapanganOlahragaPost');
	removeCondition('JasaKonstruksiModulardanPrecastPost');
	removeCondition('JasaStrukturBajadanRangkaRinganPost');
       
        JasaKonstruksiStrukturPostLink.style.visibility = 'visible';
        JasaStrukturKonstruksiPostLink.style.visibility = 'visible';
	//TAMPILKAN JasaKonstruksiGedungdanHunianPost
        JasaKonstruksiGedungdanHunianPostLink.style.visibility = 'visible';
	//TAMPILKAN JasaKonstruksiRumahTinggalPost
        JasaKonstruksiRumahTinggalPostLink.style.visibility = 'visible';
        pageNameJasaKonsStrukturPost.textContent = urlMappingJasaKonstruksiRumahTinggal[cleanUrlJasaJasaKonsStrukturPost];
    }
// ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaKonstruksiRumahTinggal[cleanUrlJasaJasaKonsStrukturPost]) {
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
                   "name": "Jasa Konstruksi Gedung dan Hunian",
                   "item": "https://www.betonjayareadymix.com/p/jasa-konstruksi-gedung-dan-hunian.html"
               },
		{
                   "@type": "ListItem",
                   "position": 5,
                   "name": "Jasa Konstruksi Rumah Tinggal",
                   "item": "https://www.betonjayareadymix.com/p/jasa-konstruksi-rumah-tinggal.html"
               },
               {
                   "@type": "ListItem",
                   "position": 6,
                   "name": urlMappingJasaKonstruksiRumahTinggal[cleanUrlJasaJasaKonsStrukturPost],
                   "item": cleanUrlJasaJasaKonsStrukturPost
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
if (urlMappingJasaKonstruksiRukodanKios[cleanUrlJasaJasaKonsStrukturPost]) {
        restoreCondition('JasaKonsStrukturPost');
        restoreCondition('JasaKonstruksiGedungdanHunianPost');
        restoreCondition('JasaKonstruksiRukodanKiosPost');

       //hapus elemen div id lain
	removeCondition('JasaDesInPost');
	removeCondition('ProdukInFurPost');
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
	removeCondition('JasaKonsBongkarBangunanPost');
        removeCondition('JasaKonsPengeboranPost'); 
	removeCondition('JasaKonsFinishingPost');
        removeCondition('ProdukKonsSaluranPost');
        removeCondition('JasaKonsAlatKonstruksiPost');
        removeCondition('JasaKonsJalanPerkerasanPost');

	 //hapus elemen id JasaStrukturBajadanRangkaRinganPost SEMUA
        removeCondition('JasaKonstruksiBajaKonvensionalPost');
        removeCondition('JasaKanopiBajadanBesiPost');
        removeCondition('JasaStrukturBajaGudangPost');
        removeCondition('JasaRangkaAtapBajaRinganPost');
	// hapus elemen id JasaKonstruksiLapanganOlahragaPost SEMUA
	removeCondition('JasaPembuatanLapanganBadmintonPost');
	removeCondition('JasaPembuatanLapanganTenisPost');
        removeCondition('JasaPembuatanLapanganFutsalPost');
        removeCondition('JasaPembuatanLapanganBasketPost');
        removeCondition('JasaPembuatanLapanganSepakbolaPost');
        removeCondition('JasaPembuatanLapanganVoliPost');
        removeCondition('JasaPembuatanLapanganSerbagunaPost');
	
	 //hapus elemen id JasaKonstruksiGedungdanHunianPost SEMUA selain JasaKonstruksiRumahTinggalPost
       // removeCondition('');
        removeCondition('JasaKonstruksiRumahTinggalPost');
        removeCondition('JasaKonstruksiVillaPost');
        removeCondition('JasaKonstruksiApartemenPost');
        removeCondition('JasaKonstruksiHotelPost');
        removeCondition('JasaKonstruksiPerkantoranPost');
        removeCondition('JasaKonstruksiGedungSekolahPost');
        removeCondition('JasaKonstruksiGedungRumahSakitPost');
	//hapus elemen id JasaKonstruksiIndustridanGudangPost SEMUA
        removeCondition('JasaKonstruksiGudangLogistikPost');
        removeCondition('JasaKonstruksiPabrikPost');
        removeCondition('JasaKonstruksiColdStoragePost');
        removeCondition('JasaKonstruksiBengkelPost');
        removeCondition('JasaKonstruksiWorkshopPost');
        removeCondition('JasaKonstruksiPabrikPost');
	
      //hapus elemen id JasaStrukturBetondanPengecoranPost SEMUA 
        removeCondition('JasaPengecoranLantaiGudangPost');
        removeCondition('JasaBekistingdanPembesianPost');
        removeCondition('JasaPengecoranLantaiDakPost');
        removeCondition('JasaPengecoranKolomBetonPost');
        removeCondition('JasaCorBetonPost');
	
	//hapus elemen id JasaStrukturKhususPost SEMUA 
        removeCondition('JasaPembuatanKolamRenangPost');
        removeCondition('JasaPembuatanKolamIkanPost');
        removeCondition('JasaSepticTankBetonPost');
        removeCondition('JasaPembuatanTangkiAirPost');
        removeCondition('JasaPembuatanBakPenampunganPost');
        removeCondition('JasaKonstruksiMenaraAirPost');

	
      
	/*
JasaKonstruksiGedungdanHunianPost
JasaKonstruksiIndustridanGudangPost
JasaStrukturBajadanRangkaRinganPost
JasaStrukturKhusus
JasaKonstruksiLapanganOlahragaPost
JasaKonstruksiModulardanPrecastPost
JasaStrukturBetondanPengecoranPost
*/
       //HAPUS ELEMEN LAIN DI JasaKonsStruktur SELAIN JasaKonstruksiGedungdanHunianPost
        removeCondition('JasaKonstruksiIndustridanGudangPost');
        removeCondition('JasaStrukturBetondanPengecoranPost');
        removeCondition('JasaStrukturKhususPost');
	removeCondition('JasaKonstruksiLapanganOlahragaPost');
	removeCondition('JasaKonstruksiModulardanPrecastPost');
	removeCondition('JasaStrukturBajadanRangkaRinganPost');
       
        JasaKonstruksiStrukturPostLink.style.visibility = 'visible';
        JasaStrukturKonstruksiPostLink.style.visibility = 'visible';
	//TAMPILKAN JasaKonstruksiGedungdanHunianPost
        JasaKonstruksiGedungdanHunianPostLink.style.visibility = 'visible';
	//TAMPILKAN JasaKonstruksiRukodanKiosPost
        JasaKonstruksiRukodanKiosPostLink.style.visibility = 'visible';
        pageNameJasaKonsStrukturPost.textContent = urlMappingJasaKonstruksiRukodanKios[cleanUrlJasaJasaKonsStrukturPost];
    }

// ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaKonstruksiRukodanKios[cleanUrlJasaJasaKonsStrukturPost]) {
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
                   "name": "Jasa Konstruksi Gedung dan Hunian",
                   "item": "https://www.betonjayareadymix.com/p/jasa-konstruksi-gedung-dan-hunian.html"
               },
		{
                   "@type": "ListItem",
                   "position": 5,
                   "name": "Jasa Konstruksi Ruko dan Kios",
                   "item": "https://www.betonjayareadymix.com/p/jasa-konstruksi-ruko-dan-kios.html"
               },
               {
                   "@type": "ListItem",
                   "position": 6,
                   "name": urlMappingJasaKonstruksiRukodanKios[cleanUrlJasaJasaKonsStrukturPost],
                   "item": cleanUrlJasaJasaKonsStrukturPost
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
//AKHIR SUB JasaKonstruksiGedungdanHunianPost

//SUB JasaKonstruksiGudangLogistikPost
if (urlMappingJasaKonstruksiGudangLogistik[cleanUrlJasaJasaKonsStrukturPost]) {
        restoreCondition('JasaKonsStrukturPost');
        restoreCondition('JasaKonstruksiIndustridanGudangPost');
        restoreCondition('JasaKonstruksiGudangLogistikPost');
/*
    JasaKonstruksiGudangLogistikPost
     JasaKonstruksiPabrikPost
     JasaKonstruksiColdStoragePost
     JasaKonstruksiBengkelPost
     JasaKonstruksiWorkshopPost
     JasaKonstruksiPabrikPost
*/
       //hapus elemen div id lain
	removeCondition('JasaDesInPost');
	removeCondition('ProdukInFurPost');
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
	removeCondition('JasaKonsBongkarBangunanPost');
        removeCondition('JasaKonsPengeboranPost'); 
	removeCondition('JasaKonsFinishingPost');
        removeCondition('ProdukKonsSaluranPost');
        removeCondition('JasaKonsAlatKonstruksiPost');
        removeCondition('JasaKonsJalanPerkerasanPost');

	 //hapus elemen id JasaStrukturBajadanRangkaRinganPost SEMUA
        removeCondition('JasaKonstruksiBajaKonvensionalPost');
        removeCondition('JasaKanopiBajadanBesiPost');
        removeCondition('JasaStrukturBajaGudangPost');
        removeCondition('JasaRangkaAtapBajaRinganPost');
	// hapus elemen id JasaKonstruksiLapanganOlahragaPost SEMUA
	removeCondition('JasaPembuatanLapanganBadmintonPost');
	removeCondition('JasaPembuatanLapanganTenisPost');
        removeCondition('JasaPembuatanLapanganFutsalPost');
        removeCondition('JasaPembuatanLapanganBasketPost');
        removeCondition('JasaPembuatanLapanganSepakbolaPost');
        removeCondition('JasaPembuatanLapanganVoliPost');
        removeCondition('JasaPembuatanLapanganSerbagunaPost');
	//hapus elemen id JasaKonstruksiIndustridanGudangPost SEMUA selain JasaKonstruksiGudangLogistikPost
        //removeCondition('');
        removeCondition('JasaKonstruksiPabrikPost');
        removeCondition('JasaKonstruksiColdStoragePost');
        removeCondition('JasaKonstruksiBengkelPost');
        removeCondition('JasaKonstruksiWorkshopPost');
        removeCondition('JasaKonstruksiPabrikPost');
	
	 //hapus elemen id JasaKonstruksiGedungdanHunianPost
        removeCondition('JasaKonstruksiRumahTinggalPost');
        removeCondition('JasaKonstruksiRukodanKiosPost');
        removeCondition('JasaKonstruksiVillaPost');
        removeCondition('JasaKonstruksiApartemenPost');
        removeCondition('JasaKonstruksiHotelPost');
        removeCondition('JasaKonstruksiPerkantoranPost');
        removeCondition('JasaKonstruksiGedungSekolahPost');
        removeCondition('JasaKonstruksiGedungRumahSakitPost');
	
      //hapus elemen id JasaStrukturBetondanPengecoranPost SEMUA 
        removeCondition('JasaPengecoranLantaiGudangPost');
        removeCondition('JasaBekistingdanPembesianPost');
        removeCondition('JasaPengecoranLantaiDakPost');
        removeCondition('JasaPengecoranKolomBetonPost');
        removeCondition('JasaCorBetonPost');
	
	//hapus elemen id JasaStrukturKhususPost SEMUA 
        removeCondition('JasaPembuatanKolamRenangPost');
        removeCondition('JasaPembuatanKolamIkanPost');
        removeCondition('JasaSepticTankBetonPost');
        removeCondition('JasaPembuatanTangkiAirPost');
        removeCondition('JasaPembuatanBakPenampunganPost');
        removeCondition('JasaKonstruksiMenaraAirPost');

	
      
	/*
JasaKonstruksiGedungdanHunianPost
JasaKonstruksiIndustridanGudangPost
JasaStrukturBajadanRangkaRinganPost
JasaStrukturKhusus
JasaKonstruksiLapanganOlahragaPost
JasaKonstruksiModulardanPrecastPost
JasaStrukturBetondanPengecoranPost
*/
       //HAPUS ELEMEN LAIN DI JasaKonsStruktur SELAIN JasaKonstruksiIndustridanGudangPost
        removeCondition('JasaKonstruksiGedungdanHunianPost');
        removeCondition('JasaStrukturBetondanPengecoranPost');
        removeCondition('JasaStrukturKhususPost');
	removeCondition('JasaKonstruksiLapanganOlahragaPost');
	removeCondition('JasaKonstruksiModulardanPrecastPost');
	removeCondition('JasaStrukturBajadanRangkaRinganPost');
       
        JasaKonstruksiStrukturPostLink.style.visibility = 'visible';
        JasaStrukturKonstruksiPostLink.style.visibility = 'visible';
	//TAMPILKAN JasaKonstruksiGedungdanHunianPost
        JasaKonstruksiIndustridanGudangPostLink.style.visibility = 'visible';
	//TAMPILKAN JasaKonstruksiGudangLogistikPost
        JasaKonstruksiGudangLogistikPostLink.style.visibility = 'visible';
        pageNameJasaKonsStrukturPost.textContent = urlMappingJasaKonstruksiGudangLogistik[cleanUrlJasaJasaKonsStrukturPost];
    }
// ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaKonstruksiGudangLogistik[cleanUrlJasaJasaKonsStrukturPost]) {
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
                   "name": "Jasa Konstruksi Industri dan Gudung",
                   "item": "https://www.betonjayareadymix.com/p/jasa-konstruksi-industri-dan-gudang.html"
               },
		{
                   "@type": "ListItem",
                   "position": 5,
                   "name": "Jasa Konstruksi Gudang Logistik",
                   "item": "https://www.betonjayareadymix.com/p/jasa-konstruksi-gudang-logistik.html"
               },
               {
                   "@type": "ListItem",
                   "position": 6,
                   "name": urlMappingJasaKonstruksiGudangLogistik[cleanUrlJasaJasaKonsStrukturPost],
                   "item": cleanUrlJasaJasaKonsStrukturPost
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
//AKHIR SUB JasaKonstruksiGudangLogistikPost

//SUB JasaKonstruksiPabrikPost
if (urlMappingJasaKonstruksiPabrik[cleanUrlJasaJasaKonsStrukturPost]) {
        restoreCondition('JasaKonsStrukturPost');
        restoreCondition('JasaKonstruksiIndustridanGudangPost');
        restoreCondition('JasaKonstruksiPabrikPost');
/*
    JasaKonstruksiGudangLogistikPost
     JasaKonstruksiPabrikPost
     JasaKonstruksiColdStoragePost
     JasaKonstruksiBengkelPost
     JasaKonstruksiWorkshopPost
     JasaKonstruksiPabrikPost
*/
       //hapus elemen div id lain
	removeCondition('JasaDesInPost');
	removeCondition('ProdukInFurPost');
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
	removeCondition('JasaKonsBongkarBangunanPost');
        removeCondition('JasaKonsPengeboranPost'); 
	removeCondition('JasaKonsFinishingPost');
        removeCondition('ProdukKonsSaluranPost');
        removeCondition('JasaKonsAlatKonstruksiPost');
        removeCondition('JasaKonsJalanPerkerasanPost');

	 //hapus elemen id JasaStrukturBajadanRangkaRinganPost SEMUA
        removeCondition('JasaKonstruksiBajaKonvensionalPost');
        removeCondition('JasaKanopiBajadanBesiPost');
        removeCondition('JasaStrukturBajaGudangPost');
        removeCondition('JasaRangkaAtapBajaRinganPost');
	// hapus elemen id JasaKonstruksiLapanganOlahragaPost SEMUA
	removeCondition('JasaPembuatanLapanganBadmintonPost');
	removeCondition('JasaPembuatanLapanganTenisPost');
        removeCondition('JasaPembuatanLapanganFutsalPost');
        removeCondition('JasaPembuatanLapanganBasketPost');
        removeCondition('JasaPembuatanLapanganSepakbolaPost');
        removeCondition('JasaPembuatanLapanganVoliPost');
        removeCondition('JasaPembuatanLapanganSerbagunaPost');
	//hapus elemen id JasaKonstruksiIndustridanGudangPost SEMUA selain JasaKonstruksiGudangLogistikPost
        //removeCondition('');
        removeCondition('');
        removeCondition('JasaKonstruksiColdStoragePost');
        removeCondition('JasaKonstruksiBengkelPost');
        removeCondition('JasaKonstruksiWorkshopPost');
        removeCondition('JasaKonstruksiGudangLogistikPost');
	
	 //hapus elemen id JasaKonstruksiGedungdanHunianPost
        removeCondition('JasaKonstruksiRumahTinggalPost');
        removeCondition('JasaKonstruksiRukodanKiosPost');
        removeCondition('JasaKonstruksiVillaPost');
        removeCondition('JasaKonstruksiApartemenPost');
        removeCondition('JasaKonstruksiHotelPost');
        removeCondition('JasaKonstruksiPerkantoranPost');
        removeCondition('JasaKonstruksiGedungSekolahPost');
        removeCondition('JasaKonstruksiGedungRumahSakitPost');
	
      //hapus elemen id JasaStrukturBetondanPengecoranPost SEMUA 
        removeCondition('JasaPengecoranLantaiGudangPost');
        removeCondition('JasaBekistingdanPembesianPost');
        removeCondition('JasaPengecoranLantaiDakPost');
        removeCondition('JasaPengecoranKolomBetonPost');
        removeCondition('JasaCorBetonPost');
	
	//hapus elemen id JasaStrukturKhususPost SEMUA 
        removeCondition('JasaPembuatanKolamRenangPost');
        removeCondition('JasaPembuatanKolamIkanPost');
        removeCondition('JasaSepticTankBetonPost');
        removeCondition('JasaPembuatanTangkiAirPost');
        removeCondition('JasaPembuatanBakPenampunganPost');
        removeCondition('JasaKonstruksiMenaraAirPost');

	
      
	/*
JasaKonstruksiGedungdanHunianPost
JasaKonstruksiIndustridanGudangPost
JasaStrukturBajadanRangkaRinganPost
JasaStrukturKhusus
JasaKonstruksiLapanganOlahragaPost
JasaKonstruksiModulardanPrecastPost
JasaStrukturBetondanPengecoranPost
*/
       //HAPUS ELEMEN LAIN DI JasaKonsStruktur SELAIN JasaKonstruksiIndustridanGudangPost
        removeCondition('JasaKonstruksiGedungdanHunianPost');
        removeCondition('JasaStrukturBetondanPengecoranPost');
        removeCondition('JasaStrukturKhususPost');
	removeCondition('JasaKonstruksiLapanganOlahragaPost');
	removeCondition('JasaKonstruksiModulardanPrecastPost');
	removeCondition('JasaStrukturBajadanRangkaRinganPost');
       
        JasaKonstruksiStrukturPostLink.style.visibility = 'visible';
        JasaStrukturKonstruksiPostLink.style.visibility = 'visible';
	//TAMPILKAN JasaKonstruksiGedungdanHunianPost
        JasaKonstruksiIndustridanGudangPostLink.style.visibility = 'visible';
	//TAMPILKAN JasaKonstruksiGudangLogistikPost
        JasaKonstruksiPabrikPostLink.style.visibility = 'visible';
        pageNameJasaKonsStrukturPost.textContent = urlMappingJasaKonstruksiPabrik[cleanUrlJasaJasaKonsStrukturPost];
    }
// ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaKonstruksiPabrik[cleanUrlJasaJasaKonsStrukturPost]) {
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
                   "name": "Jasa Konstruksi Industri dan Gudung",
                   "item": "https://www.betonjayareadymix.com/p/jasa-konstruksi-industri-dan-gudang.html"
               },
		{
                   "@type": "ListItem",
                   "position": 5,
                   "name": "Jasa Konstruksi Pabrik",
                   "item": "https://www.betonjayareadymix.com/p/jasa-konstruksi-pabrik.html"
               },
               {
                   "@type": "ListItem",
                   "position": 6,
                   "name": urlMappingJasaKonstruksiPabrik[cleanUrlJasaJasaKonsStrukturPost],
                   "item": cleanUrlJasaJasaKonsStrukturPost
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
//AKHIR SUB JasaKonstruksiPabrikPost

//SUB JasaKonstruksiLapanganOlahragaPost
if (urlMappingJasaPembuatanLapanganOlahRaga[cleanUrlJasaJasaKonsStrukturPost]) {
        restoreCondition('JasaKonsStrukturPost');
        restoreCondition('JasaKonstruksiLapanganOlahragaPost');
        //restoreCondition('JasaPembuatanLapanganFutsalPost');

       //hapus elemen div id lain
	removeCondition('JasaDesInPost');
	removeCondition('ProdukInFurPost');
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
	removeCondition('JasaKonsBongkarBangunanPost');
        removeCondition('JasaKonsPengeboranPost'); 
	removeCondition('JasaKonsFinishingPost');
        removeCondition('ProdukKonsSaluranPost');
        removeCondition('JasaKonsAlatKonstruksiPost');
        removeCondition('JasaKonsJalanPerkerasanPost');

	 //hapus elemen id JasaStrukturBajadanRangkaRinganPost SEMUA
        removeCondition('JasaKonstruksiBajaKonvensionalPost');
        removeCondition('JasaKanopiBajadanBesiPost');
        removeCondition('JasaStrukturBajaGudangPost');
        removeCondition('JasaRangkaAtapBajaRinganPost');
	// hapus elemen id JasaKonstruksiLapanganOlahragaPost SEMUA selain JasaPembuatanLapanganFutsalPost
        //removeCondition('');
	removeCondition('JasaPembuatanLapanganTenisPost');
	removeCondition('JasaPembuatanLapanganBadmintonPost');
        removeCondition('JasaPembuatanLapanganFutsalPost');
        removeCondition('JasaPembuatanLapanganBasketPost');
        removeCondition('JasaPembuatanLapanganSepakbolaPost');
        removeCondition('JasaPembuatanLapanganVoliPost');
        removeCondition('JasaPembuatanLapanganSerbagunaPost');
	
	 //hapus elemen id JasaKonstruksiGedungdanHunianPost SEMUA
       removeCondition('JasaKonstruksiRumahTinggalPost');
        removeCondition('JasaKonstruksiRukodanKiosPost');
        removeCondition('JasaKonstruksiVillaPost');
        removeCondition('JasaKonstruksiApartemenPost');
        removeCondition('JasaKonstruksiHotelPost');
        removeCondition('JasaKonstruksiPerkantoranPost');
        removeCondition('JasaKonstruksiGedungSekolahPost');
        removeCondition('JasaKonstruksiGedungRumahSakitPost');
	//hapus elemen id JasaKonstruksiIndustridanGudangPost SEMUA
        removeCondition('JasaKonstruksiGudangLogistikPost');
        removeCondition('JasaKonstruksiPabrikPost');
        removeCondition('JasaKonstruksiColdStoragePost');
        removeCondition('JasaKonstruksiBengkelPost');
        removeCondition('JasaKonstruksiWorkshopPost');
        removeCondition('JasaKonstruksiPabrikPost');
	
      //hapus elemen id JasaStrukturBetondanPengecoranPost SEMUA 
        removeCondition('JasaPengecoranLantaiGudangPost');
        removeCondition('JasaBekistingdanPembesianPost');
        removeCondition('JasaPengecoranLantaiDakPost');
        removeCondition('JasaPengecoranKolomBetonPost');
        removeCondition('JasaCorBetonPost');
	//hapus elemen id JasaStrukturKhususPost SEMUA 
        removeCondition('JasaPembuatanKolamRenangPost');
        removeCondition('JasaPembuatanKolamIkanPost');
        removeCondition('JasaSepticTankBetonPost');
        removeCondition('JasaPembuatanTangkiAirPost');
        removeCondition('JasaPembuatanBakPenampunganPost');
        removeCondition('JasaKonstruksiMenaraAirPost');

	
      
	/*
JasaKonstruksiGedungdanHunianPost
JasaKonstruksiIndustridanGudangPost
JasaStrukturBajadanRangkaRinganPost
JasaStrukturKhusus
JasaKonstruksiLapanganOlahragaPost
JasaKonstruksiModulardanPrecastPost
JasaStrukturBetondanPengecoranPost
*/
       //HAPUS ELEMEN LAIN DI JasaKonsStruktur SELAIN JasaKonstruksiLapanganOlahragaPost
        removeCondition('JasaKonstruksiIndustridanGudangPost');
        removeCondition('JasaStrukturBetondanPengecoranPost');
        removeCondition('JasaStrukturKhususPost');
	removeCondition('JasaKonstruksiGedungdanHunianPost');
	removeCondition('JasaKonstruksiModulardanPrecastPost');
	removeCondition('JasaStrukturBajadanRangkaRinganPost');
       
        JasaKonstruksiStrukturPostLink.style.visibility = 'visible';
        JasaStrukturKonstruksiPostLink.style.visibility = 'visible';
	//TAMPILKAN JasaKonstruksiLapanganOlahragaPost
        JasaKonstruksiLapanganOlahragaPostLink.style.visibility = 'visible';
	//TAMPILKAN JasaPembuatanLapanganFutsalPost
        //JasaPembuatanLapanganFutsalPostLink.style.visibility = 'visible';
        pageNameJasaKonsStrukturPost.textContent = urlMappingJasaPembuatanLapanganOlahRaga[cleanUrlJasaJasaKonsStrukturPost];
    }

// ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaPembuatanLapanganOlahRaga[cleanUrlJasaJasaKonsStrukturPost]) {
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
                   "name": "Jasa Konstruksi Lapangan Olahraga",
                   "item": "https://www.betonjayareadymix.com/p/jasa-konstruksi-lapangan-olahraga.html"
               },
               {
                   "@type": "ListItem",
                   "position": 5,
                   "name": urlMappingJasaPembuatanLapanganOlahRaga[cleanUrlJasaJasaKonsStrukturPost],
                   "item": cleanUrlJasaJasaKonsStrukturPost
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
if (urlMappingJasaPembuatanLapanganFutsal[cleanUrlJasaJasaKonsStrukturPost]) {
        restoreCondition('JasaKonsStrukturPost');
        restoreCondition('JasaKonstruksiLapanganOlahragaPost');
        restoreCondition('JasaPembuatanLapanganFutsalPost');

       //hapus elemen div id lain
	removeCondition('JasaDesInPost');
	removeCondition('ProdukInFurPost');
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
	removeCondition('JasaKonsBongkarBangunanPost');
        removeCondition('JasaKonsPengeboranPost'); 
	removeCondition('JasaKonsFinishingPost');
        removeCondition('ProdukKonsSaluranPost');
        removeCondition('JasaKonsAlatKonstruksiPost');
        removeCondition('JasaKonsJalanPerkerasanPost');

	 //hapus elemen id JasaStrukturBajadanRangkaRinganPost SEMUA
        removeCondition('JasaKonstruksiBajaKonvensionalPost');
        removeCondition('JasaKanopiBajadanBesiPost');
        removeCondition('JasaStrukturBajaGudangPost');
        removeCondition('JasaRangkaAtapBajaRinganPost');
	// hapus elemen id JasaKonstruksiLapanganOlahragaPost SEMUA selain JasaPembuatanLapanganFutsalPost
        removeCondition('JasaPembuatanLapanganTenisPost');
	removeCondition('JasaPembuatanLapanganBadmintonPost');
        removeCondition('JasaPembuatanLapanganBasketPost');
        removeCondition('JasaPembuatanLapanganSepakbolaPost');
        removeCondition('JasaPembuatanLapanganVoliPost');
        removeCondition('JasaPembuatanLapanganSerbagunaPost');
	
	 //hapus elemen id JasaKonstruksiGedungdanHunianPost SEMUA
       removeCondition('JasaKonstruksiRumahTinggalPost');
        removeCondition('JasaKonstruksiRukodanKiosPost');
        removeCondition('JasaKonstruksiVillaPost');
        removeCondition('JasaKonstruksiApartemenPost');
        removeCondition('JasaKonstruksiHotelPost');
        removeCondition('JasaKonstruksiPerkantoranPost');
        removeCondition('JasaKonstruksiGedungSekolahPost');
        removeCondition('JasaKonstruksiGedungRumahSakitPost');
	//hapus elemen id JasaKonstruksiIndustridanGudangPost SEMUA
        removeCondition('JasaKonstruksiGudangLogistikPost');
        removeCondition('JasaKonstruksiPabrikPost');
        removeCondition('JasaKonstruksiColdStoragePost');
        removeCondition('JasaKonstruksiBengkelPost');
        removeCondition('JasaKonstruksiWorkshopPost');
        removeCondition('JasaKonstruksiPabrikPost');
	
      //hapus elemen id JasaStrukturBetondanPengecoranPost SEMUA 
        removeCondition('JasaPengecoranLantaiGudangPost');
        removeCondition('JasaBekistingdanPembesianPost');
        removeCondition('JasaPengecoranLantaiDakPost');
        removeCondition('JasaPengecoranKolomBetonPost');
        removeCondition('JasaCorBetonPost');
	//hapus elemen id JasaStrukturKhususPost SEMUA 
        removeCondition('JasaPembuatanKolamRenangPost');
        removeCondition('JasaPembuatanKolamIkanPost');
        removeCondition('JasaSepticTankBetonPost');
        removeCondition('JasaPembuatanTangkiAirPost');
        removeCondition('JasaPembuatanBakPenampunganPost');
        removeCondition('JasaKonstruksiMenaraAirPost');

	
      
	/*
JasaKonstruksiGedungdanHunianPost
JasaKonstruksiIndustridanGudangPost
JasaStrukturBajadanRangkaRinganPost
JasaStrukturKhusus
JasaKonstruksiLapanganOlahragaPost
JasaKonstruksiModulardanPrecastPost
JasaStrukturBetondanPengecoranPost
*/
       //HAPUS ELEMEN LAIN DI JasaKonsStruktur SELAIN JasaKonstruksiLapanganOlahragaPost
        removeCondition('JasaKonstruksiIndustridanGudangPost');
        removeCondition('JasaStrukturBetondanPengecoranPost');
        removeCondition('JasaStrukturKhususPost');
	removeCondition('JasaKonstruksiGedungdanHunianPost');
	removeCondition('JasaKonstruksiModulardanPrecastPost');
	removeCondition('JasaStrukturBajadanRangkaRinganPost');
       
        JasaKonstruksiStrukturPostLink.style.visibility = 'visible';
        JasaStrukturKonstruksiPostLink.style.visibility = 'visible';
	//TAMPILKAN JasaKonstruksiLapanganOlahragaPost
        JasaKonstruksiLapanganOlahragaPostLink.style.visibility = 'visible';
	//TAMPILKAN JasaPembuatanLapanganFutsalPost
        JasaPembuatanLapanganFutsalPostLink.style.visibility = 'visible';
        pageNameJasaKonsStrukturPost.textContent = urlMappingJasaPembuatanLapanganFutsal[cleanUrlJasaJasaKonsStrukturPost];
    }
// ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaPembuatanLapanganFutsal[cleanUrlJasaJasaKonsStrukturPost]) {
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
                   "name": "Jasa Konstruksi Lapangan Olahraga",
                   "item": "https://www.betonjayareadymix.com/p/jasa-konstruksi-lapangan-olahraga.html"
               },
		{
                   "@type": "ListItem",
                   "position": 5,
                   "name": "Jasa Pembuatan Lapangan Futsal",
                   "item": "https://www.betonjayareadymix.com/p/jasa-pembuatan-lapangan-futsal.html"
               },
               {
                   "@type": "ListItem",
                   "position": 6,
                   "name": urlMappingJasaPembuatanLapanganFutsal[cleanUrlJasaJasaKonsStrukturPost],
                   "item": cleanUrlJasaJasaKonsStrukturPost
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
if (urlMappingJasaPembuatanLapanganTenis[cleanUrlJasaJasaKonsStrukturPost]) {
        restoreCondition('JasaKonsStrukturPost');
        restoreCondition('JasaKonstruksiLapanganOlahragaPost');
        restoreCondition('JasaPembuatanLapanganTenisPost');

       //hapus elemen div id lain
	removeCondition('JasaDesInPost');
	removeCondition('ProdukInFurPost');
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
	removeCondition('JasaKonsBongkarBangunanPost');
        removeCondition('JasaKonsPengeboranPost'); 
	removeCondition('JasaKonsFinishingPost');
        removeCondition('ProdukKonsSaluranPost');
        removeCondition('JasaKonsAlatKonstruksiPost');
        removeCondition('JasaKonsJalanPerkerasanPost');

	 //hapus elemen id JasaStrukturBajadanRangkaRinganPost SEMUA
        removeCondition('JasaKonstruksiBajaKonvensionalPost');
        removeCondition('JasaKanopiBajadanBesiPost');
        removeCondition('JasaStrukturBajaGudangPost');
        removeCondition('JasaRangkaAtapBajaRinganPost');
	// hapus elemen id JasaKonstruksiLapanganOlahragaPost SEMUA selain JasaPembuatanLapanganTenisPost
        removeCondition('JasaPembuatanLapanganFutsalPost');
	removeCondition('JasaPembuatanLapanganBadmintonPost');
        removeCondition('JasaPembuatanLapanganBasketPost');
        removeCondition('JasaPembuatanLapanganSepakbolaPost');
        removeCondition('JasaPembuatanLapanganVoliPost');
        removeCondition('JasaPembuatanLapanganSerbagunaPost');
	
	 //hapus elemen id JasaKonstruksiGedungdanHunianPost SEMUA
       removeCondition('JasaKonstruksiRumahTinggalPost');
        removeCondition('JasaKonstruksiRukodanKiosPost');
        removeCondition('JasaKonstruksiVillaPost');
        removeCondition('JasaKonstruksiApartemenPost');
        removeCondition('JasaKonstruksiHotelPost');
        removeCondition('JasaKonstruksiPerkantoranPost');
        removeCondition('JasaKonstruksiGedungSekolahPost');
        removeCondition('JasaKonstruksiGedungRumahSakitPost');
	//hapus elemen id JasaKonstruksiIndustridanGudangPost SEMUA
        removeCondition('JasaKonstruksiGudangLogistikPost');
        removeCondition('JasaKonstruksiPabrikPost');
        removeCondition('JasaKonstruksiColdStoragePost');
        removeCondition('JasaKonstruksiBengkelPost');
        removeCondition('JasaKonstruksiWorkshopPost');
        removeCondition('JasaKonstruksiPabrikPost');
	
      //hapus elemen id JasaStrukturBetondanPengecoranPost SEMUA 
        removeCondition('JasaPengecoranLantaiGudangPost');
        removeCondition('JasaBekistingdanPembesianPost');
        removeCondition('JasaPengecoranLantaiDakPost');
        removeCondition('JasaPengecoranKolomBetonPost');
        removeCondition('JasaCorBetonPost');
	//hapus elemen id JasaStrukturKhususPost SEMUA 
        removeCondition('JasaPembuatanKolamRenangPost');
        removeCondition('JasaPembuatanKolamIkanPost');
        removeCondition('JasaSepticTankBetonPost');
        removeCondition('JasaPembuatanTangkiAirPost');
        removeCondition('JasaPembuatanBakPenampunganPost');
        removeCondition('JasaKonstruksiMenaraAirPost');

	
      
	/*
JasaKonstruksiGedungdanHunianPost
JasaKonstruksiIndustridanGudangPost
JasaStrukturBajadanRangkaRinganPost
JasaStrukturKhusus
JasaKonstruksiLapanganOlahragaPost
JasaKonstruksiModulardanPrecastPost
JasaStrukturBetondanPengecoranPost
*/
       //HAPUS ELEMEN LAIN DI JasaKonsStruktur SELAIN JasaKonstruksiLapanganOlahragaPost
        removeCondition('JasaKonstruksiIndustridanGudangPost');
        removeCondition('JasaStrukturBetondanPengecoranPost');
        removeCondition('JasaStrukturKhususPost');
	removeCondition('JasaKonstruksiGedungdanHunianPost');
	removeCondition('JasaKonstruksiModulardanPrecastPost');
	removeCondition('JasaStrukturBajadanRangkaRinganPost');
       
        JasaKonstruksiStrukturPostLink.style.visibility = 'visible';
        JasaStrukturKonstruksiPostLink.style.visibility = 'visible';
	//TAMPILKAN JasaKonstruksiLapanganOlahragaPost
        JasaKonstruksiLapanganOlahragaPostLink.style.visibility = 'visible';
	//TAMPILKAN JasaPembuatanLapanganTenisPost
        JasaPembuatanLapanganTenisPostLink.style.visibility = 'visible';
        pageNameJasaKonsStrukturPost.textContent = urlMappingJasaPembuatanLapanganTenis[cleanUrlJasaJasaKonsStrukturPost];
    }

// ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaPembuatanLapanganTenis[cleanUrlJasaJasaKonsStrukturPost]) {
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
                   "name": "Jasa Konstruksi Lapangan Olahraga",
                   "item": "https://www.betonjayareadymix.com/p/jasa-konstruksi-lapangan-olahraga.html"
               },
		{
                   "@type": "ListItem",
                   "position": 5,
                   "name": "Jasa Pembuatan Lapangan Tenis",
                   "item": "https://www.betonjayareadymix.com/p/jasa-pembuatan-lapangan-tenis.html"
               },
               {
                   "@type": "ListItem",
                   "position": 6,
                   "name": urlMappingJasaPembuatanLapanganTenis[cleanUrlJasaJasaKonsStrukturPost],
                   "item": cleanUrlJasaJasaKonsStrukturPost
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
if (urlMappingJasaPembuatanLapanganBadminton[cleanUrlJasaJasaKonsStrukturPost]) {
        restoreCondition('JasaKonsStrukturPost');
        restoreCondition('JasaKonstruksiLapanganOlahragaPost');
        restoreCondition('JasaPembuatanLapanganBadmintonPost');

       //hapus elemen div id lain
	removeCondition('JasaDesInPost');
	removeCondition('ProdukInFurPost');
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
	removeCondition('JasaKonsBongkarBangunanPost');
        removeCondition('JasaKonsPengeboranPost'); 
	removeCondition('JasaKonsFinishingPost');
        removeCondition('ProdukKonsSaluranPost');
        removeCondition('JasaKonsAlatKonstruksiPost');
        removeCondition('JasaKonsJalanPerkerasanPost');

	 //hapus elemen id JasaStrukturBajadanRangkaRinganPost SEMUA
        removeCondition('JasaKonstruksiBajaKonvensionalPost');
        removeCondition('JasaKanopiBajadanBesiPost');
        removeCondition('JasaStrukturBajaGudangPost');
        removeCondition('JasaRangkaAtapBajaRinganPost');
	// hapus elemen id JasaKonstruksiLapanganOlahragaPost SEMUA selain JasaPembuatanLapanganBadmintonPost
        removeCondition('JasaPembuatanLapanganTenisPost');
	removeCondition('JasaPembuatanLapanganFutsalPost');
        removeCondition('JasaPembuatanLapanganBasketPost');
        removeCondition('JasaPembuatanLapanganSepakbolaPost');
        removeCondition('JasaPembuatanLapanganVoliPost');
        removeCondition('JasaPembuatanLapanganSerbagunaPost');
	
	 //hapus elemen id JasaKonstruksiGedungdanHunianPost SEMUA
       removeCondition('JasaKonstruksiRumahTinggalPost');
        removeCondition('JasaKonstruksiRukodanKiosPost');
        removeCondition('JasaKonstruksiVillaPost');
        removeCondition('JasaKonstruksiApartemenPost');
        removeCondition('JasaKonstruksiHotelPost');
        removeCondition('JasaKonstruksiPerkantoranPost');
        removeCondition('JasaKonstruksiGedungSekolahPost');
        removeCondition('JasaKonstruksiGedungRumahSakitPost');
	//hapus elemen id JasaKonstruksiIndustridanGudangPost SEMUA
        removeCondition('JasaKonstruksiGudangLogistikPost');
        removeCondition('JasaKonstruksiPabrikPost');
        removeCondition('JasaKonstruksiColdStoragePost');
        removeCondition('JasaKonstruksiBengkelPost');
        removeCondition('JasaKonstruksiWorkshopPost');
        removeCondition('JasaKonstruksiPabrikPost');
	
      //hapus elemen id JasaStrukturBetondanPengecoranPost SEMUA 
        removeCondition('JasaPengecoranLantaiGudangPost');
        removeCondition('JasaBekistingdanPembesianPost');
        removeCondition('JasaPengecoranLantaiDakPost');
        removeCondition('JasaPengecoranKolomBetonPost');
        removeCondition('JasaCorBetonPost');
	//hapus elemen id JasaStrukturKhususPost SEMUA 
        removeCondition('JasaPembuatanKolamRenangPost');
        removeCondition('JasaPembuatanKolamIkanPost');
        removeCondition('JasaSepticTankBetonPost');
        removeCondition('JasaPembuatanTangkiAirPost');
        removeCondition('JasaPembuatanBakPenampunganPost');
        removeCondition('JasaKonstruksiMenaraAirPost');

	
      
	/*
JasaKonstruksiGedungdanHunianPost
JasaKonstruksiIndustridanGudangPost
JasaStrukturBajadanRangkaRinganPost
JasaStrukturKhusus
JasaKonstruksiLapanganOlahragaPost
JasaKonstruksiModulardanPrecastPost
JasaStrukturBetondanPengecoranPost
*/
       //HAPUS ELEMEN LAIN DI JasaKonsStruktur SELAIN JasaKonstruksiLapanganOlahragaPost
        removeCondition('JasaKonstruksiIndustridanGudangPost');
        removeCondition('JasaStrukturBetondanPengecoranPost');
        removeCondition('JasaStrukturKhususPost');
	removeCondition('JasaKonstruksiGedungdanHunianPost');
	removeCondition('JasaKonstruksiModulardanPrecastPost');
	removeCondition('JasaStrukturBajadanRangkaRinganPost');
       
        JasaKonstruksiStrukturPostLink.style.visibility = 'visible';
        JasaStrukturKonstruksiPostLink.style.visibility = 'visible';
	//TAMPILKAN JasaKonstruksiLapanganOlahragaPost
        JasaKonstruksiLapanganOlahragaPostLink.style.visibility = 'visible';
	//TAMPILKAN JasaPembuatanLapanganFutsalPost
        JasaPembuatanLapanganBadmintonPostLink.style.visibility = 'visible';
        pageNameJasaKonsStrukturPost.textContent = urlMappingJasaPembuatanLapanganBadminton[cleanUrlJasaJasaKonsStrukturPost];
    }
// ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaPembuatanLapanganBadminton[cleanUrlJasaJasaKonsStrukturPost]) {
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
                   "name": "Jasa Konstruksi Lapangan Olahraga",
                   "item": "https://www.betonjayareadymix.com/p/jasa-konstruksi-lapangan-olahraga.html"
               },
		{
                   "@type": "ListItem",
                   "position": 5,
                   "name": "Jasa Pembuatan Lapangan Badminton",
                   "item": "https://www.betonjayareadymix.com/p/jasa-pembuatan-lapangan-badminton.html"
               },
               {
                   "@type": "ListItem",
                   "position": 6,
                   "name": urlMappingJasaPembuatanLapanganBadminton[cleanUrlJasaJasaKonsStrukturPost],
                   "item": cleanUrlJasaJasaKonsStrukturPost
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
if (urlMappingJasaPembuatanLapanganBasket[cleanUrlJasaJasaKonsStrukturPost]) {
        restoreCondition('JasaKonsStrukturPost');
        restoreCondition('JasaKonstruksiLapanganOlahragaPost');
        restoreCondition('JasaPembuatanLapanganBasketPost');

       //hapus elemen div id lain
	removeCondition('JasaDesInPost');
	removeCondition('ProdukInFurPost');
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
	removeCondition('JasaKonsBongkarBangunanPost');
        removeCondition('JasaKonsPengeboranPost'); 
	removeCondition('JasaKonsFinishingPost');
        removeCondition('ProdukKonsSaluranPost');
        removeCondition('JasaKonsAlatKonstruksiPost');
        removeCondition('JasaKonsJalanPerkerasanPost');

	 //hapus elemen id JasaStrukturBajadanRangkaRinganPost SEMUA
        removeCondition('JasaKonstruksiBajaKonvensionalPost');
        removeCondition('JasaKanopiBajadanBesiPost');
        removeCondition('JasaStrukturBajaGudangPost');
        removeCondition('JasaRangkaAtapBajaRinganPost');
	// hapus elemen id JasaKonstruksiLapanganOlahragaPost SEMUA selain JasaPembuatanLapanganBasketPost
        //removeCondition('');
	removeCondition('JasaPembuatanLapanganTenisPost');
	removeCondition('JasaPembuatanLapanganBadmintonPost');
        removeCondition('JasaPembuatanLapanganFutsalPost');
        removeCondition('JasaPembuatanLapanganSepakbolaPost');
        removeCondition('JasaPembuatanLapanganVoliPost');
        removeCondition('JasaPembuatanLapanganSerbagunaPost');
	
	 //hapus elemen id JasaKonstruksiGedungdanHunianPost SEMUA
       removeCondition('JasaKonstruksiRumahTinggalPost');
        removeCondition('JasaKonstruksiRukodanKiosPost');
        removeCondition('JasaKonstruksiVillaPost');
        removeCondition('JasaKonstruksiApartemenPost');
        removeCondition('JasaKonstruksiHotelPost');
        removeCondition('JasaKonstruksiPerkantoranPost');
        removeCondition('JasaKonstruksiGedungSekolahPost');
        removeCondition('JasaKonstruksiGedungRumahSakitPost');
	//hapus elemen id JasaKonstruksiIndustridanGudangPost SEMUA
        removeCondition('JasaKonstruksiGudangLogistikPost');
        removeCondition('JasaKonstruksiPabrikPost');
        removeCondition('JasaKonstruksiColdStoragePost');
        removeCondition('JasaKonstruksiBengkelPost');
        removeCondition('JasaKonstruksiWorkshopPost');
        removeCondition('JasaKonstruksiPabrikPost');
	
      //hapus elemen id JasaStrukturBetondanPengecoranPost SEMUA 
        removeCondition('JasaPengecoranLantaiGudangPost');
        removeCondition('JasaBekistingdanPembesianPost');
        removeCondition('JasaPengecoranLantaiDakPost');
        removeCondition('JasaPengecoranKolomBetonPost');
        removeCondition('JasaCorBetonPost');
	//hapus elemen id JasaStrukturKhususPost SEMUA 
        removeCondition('JasaPembuatanKolamRenangPost');
        removeCondition('JasaPembuatanKolamIkanPost');
        removeCondition('JasaSepticTankBetonPost');
        removeCondition('JasaPembuatanTangkiAirPost');
        removeCondition('JasaPembuatanBakPenampunganPost');
        removeCondition('JasaKonstruksiMenaraAirPost');

	
      
	/*
JasaKonstruksiGedungdanHunianPost
JasaKonstruksiIndustridanGudangPost
JasaStrukturBajadanRangkaRinganPost
JasaStrukturKhusus
JasaKonstruksiLapanganOlahragaPost
JasaKonstruksiModulardanPrecastPost
JasaStrukturBetondanPengecoranPost
*/
       //HAPUS ELEMEN LAIN DI JasaKonsStruktur SELAIN JasaKonstruksiLapanganOlahragaPost
        removeCondition('JasaKonstruksiIndustridanGudangPost');
        removeCondition('JasaStrukturBetondanPengecoranPost');
        removeCondition('JasaStrukturKhususPost');
	removeCondition('JasaKonstruksiGedungdanHunianPost');
	removeCondition('JasaKonstruksiModulardanPrecastPost');
	removeCondition('JasaStrukturBajadanRangkaRinganPost');
       
        JasaKonstruksiStrukturPostLink.style.visibility = 'visible';
        JasaStrukturKonstruksiPostLink.style.visibility = 'visible';
	//TAMPILKAN JasaKonstruksiLapanganOlahragaPost
        JasaKonstruksiLapanganOlahragaPostLink.style.visibility = 'visible';
	//TAMPILKAN JasaPembuatanLapanganBasketPost
        JasaPembuatanLapanganBasketPostLink.style.visibility = 'visible';
        pageNameJasaKonsStrukturPost.textContent = urlMappingJasaPembuatanLapanganBasket[cleanUrlJasaJasaKonsStrukturPost];
    }

// ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaPembuatanLapanganBasket[cleanUrlJasaJasaKonsStrukturPost]) {
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
                   "name": "Jasa Konstruksi Lapangan Olahraga",
                   "item": "https://www.betonjayareadymix.com/p/jasa-konstruksi-lapangan-olahraga.html"
               },
		{
                   "@type": "ListItem",
                   "position": 5,
                   "name": "Jasa Pembuatan Lapangan Basket",
                   "item": "https://www.betonjayareadymix.com/p/jasa-pembuatan-lapangan-basket.html"
               },
               {
                   "@type": "ListItem",
                   "position": 6,
                   "name": urlMappingJasaPembuatanLapanganBasket[cleanUrlJasaJasaKonsStrukturPost],
                   "item": cleanUrlJasaJasaKonsStrukturPost
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
if (urlMappingJasaPembuatanLapanganSepakbola[cleanUrlJasaJasaKonsStrukturPost]) {
        restoreCondition('JasaKonsStrukturPost');
        restoreCondition('JasaKonstruksiLapanganOlahragaPost');
        restoreCondition('JasaPembuatanLapanganSepakbolaPost');

       //hapus elemen div id lain
	removeCondition('JasaDesInPost');
	removeCondition('ProdukInFurPost');
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
	removeCondition('JasaKonsBongkarBangunanPost');
        removeCondition('JasaKonsPengeboranPost'); 
	removeCondition('JasaKonsFinishingPost');
        removeCondition('ProdukKonsSaluranPost');
        removeCondition('JasaKonsAlatKonstruksiPost');
        removeCondition('JasaKonsJalanPerkerasanPost');

	 //hapus elemen id JasaStrukturBajadanRangkaRinganPost SEMUA
        removeCondition('JasaKonstruksiBajaKonvensionalPost');
        removeCondition('JasaKanopiBajadanBesiPost');
        removeCondition('JasaStrukturBajaGudangPost');
        removeCondition('JasaRangkaAtapBajaRinganPost');
	// hapus elemen id JasaKonstruksiLapanganOlahragaPost SEMUA selain JasaPembuatanLapanganSepakbolaPost
        //removeCondition('');
	removeCondition('JasaPembuatanLapanganTenisPost');
        removeCondition('JasaPembuatanLapanganBasketPost');
	removeCondition('JasaPembuatanLapanganBadmintonPost');
        removeCondition('JasaPembuatanLapanganFutsalPost');
        removeCondition('JasaPembuatanLapanganVoliPost');
        removeCondition('JasaPembuatanLapanganSerbagunaPost');
	
	 //hapus elemen id JasaKonstruksiGedungdanHunianPost SEMUA
       removeCondition('JasaKonstruksiRumahTinggalPost');
        removeCondition('JasaKonstruksiRukodanKiosPost');
        removeCondition('JasaKonstruksiVillaPost');
        removeCondition('JasaKonstruksiApartemenPost');
        removeCondition('JasaKonstruksiHotelPost');
        removeCondition('JasaKonstruksiPerkantoranPost');
        removeCondition('JasaKonstruksiGedungSekolahPost');
        removeCondition('JasaKonstruksiGedungRumahSakitPost');
	//hapus elemen id JasaKonstruksiIndustridanGudangPost SEMUA
        removeCondition('JasaKonstruksiGudangLogistikPost');
        removeCondition('JasaKonstruksiPabrikPost');
        removeCondition('JasaKonstruksiColdStoragePost');
        removeCondition('JasaKonstruksiBengkelPost');
        removeCondition('JasaKonstruksiWorkshopPost');
        removeCondition('JasaKonstruksiPabrikPost');
	
      //hapus elemen id JasaStrukturBetondanPengecoranPost SEMUA 
        removeCondition('JasaPengecoranLantaiGudangPost');
        removeCondition('JasaBekistingdanPembesianPost');
        removeCondition('JasaPengecoranLantaiDakPost');
        removeCondition('JasaPengecoranKolomBetonPost');
        removeCondition('JasaCorBetonPost');
	//hapus elemen id JasaStrukturKhususPost SEMUA 
        removeCondition('JasaPembuatanKolamRenangPost');
        removeCondition('JasaPembuatanKolamIkanPost');
        removeCondition('JasaSepticTankBetonPost');
        removeCondition('JasaPembuatanTangkiAirPost');
        removeCondition('JasaPembuatanBakPenampunganPost');
        removeCondition('JasaKonstruksiMenaraAirPost');

	
      
	/*
JasaKonstruksiGedungdanHunianPost
JasaKonstruksiIndustridanGudangPost
JasaStrukturBajadanRangkaRinganPost
JasaStrukturKhusus
JasaKonstruksiLapanganOlahragaPost
JasaKonstruksiModulardanPrecastPost
JasaStrukturBetondanPengecoranPost
*/
       //HAPUS ELEMEN LAIN DI JasaKonsStruktur SELAIN JasaKonstruksiLapanganOlahragaPost
        removeCondition('JasaKonstruksiIndustridanGudangPost');
        removeCondition('JasaStrukturBetondanPengecoranPost');
        removeCondition('JasaStrukturKhususPost');
	removeCondition('JasaKonstruksiGedungdanHunianPost');
	removeCondition('JasaKonstruksiModulardanPrecastPost');
	removeCondition('JasaStrukturBajadanRangkaRinganPost');
       
        JasaKonstruksiStrukturPostLink.style.visibility = 'visible';
        JasaStrukturKonstruksiPostLink.style.visibility = 'visible';
	//TAMPILKAN JasaKonstruksiLapanganOlahragaPost
        JasaKonstruksiLapanganOlahragaPostLink.style.visibility = 'visible';
	//TAMPILKAN JasaPembuatanLapanganSepakbolaPost
        JasaPembuatanLapanganSepakbolaPostLink.style.visibility = 'visible';
        pageNameJasaKonsStrukturPost.textContent = urlMappingJasaPembuatanLapanganSepakbola[cleanUrlJasaJasaKonsStrukturPost];
    }
// ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaPembuatanLapanganSepakbola[cleanUrlJasaJasaKonsStrukturPost]) {
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
                   "name": "Jasa Konstruksi Lapangan Olahraga",
                   "item": "https://www.betonjayareadymix.com/p/jasa-konstruksi-lapangan-olahraga.html"
               },
		{
                   "@type": "ListItem",
                   "position": 5,
                   "name": "Jasa Pembuatan Lapangan Sepakbola",
                   "item": "https://www.betonjayareadymix.com/p/jasa-pembuatan-lapangan-sepakbola.html"
               },
               {
                   "@type": "ListItem",
                   "position": 6,
                   "name": urlMappingJasaPembuatanLapanganSepakbola[cleanUrlJasaJasaKonsStrukturPost],
                   "item": cleanUrlJasaJasaKonsStrukturPost
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
if (urlMappingJasaPembuatanLapanganVoli[cleanUrlJasaJasaKonsStrukturPost]) {
        restoreCondition('JasaKonsStrukturPost');
        restoreCondition('JasaKonstruksiLapanganOlahragaPost');
        restoreCondition('JasaPembuatanLapanganVoliPost');

       //hapus elemen div id lain
	removeCondition('JasaDesInPost');
	removeCondition('ProdukInFurPost');
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
	removeCondition('JasaKonsBongkarBangunanPost');
        removeCondition('JasaKonsPengeboranPost'); 
	removeCondition('JasaKonsFinishingPost');
        removeCondition('ProdukKonsSaluranPost');
        removeCondition('JasaKonsAlatKonstruksiPost');
        removeCondition('JasaKonsJalanPerkerasanPost');

	 //hapus elemen id JasaStrukturBajadanRangkaRinganPost SEMUA
        removeCondition('JasaKonstruksiBajaKonvensionalPost');
        removeCondition('JasaKanopiBajadanBesiPost');
        removeCondition('JasaStrukturBajaGudangPost');
        removeCondition('JasaRangkaAtapBajaRinganPost');
	// hapus elemen id JasaKonstruksiLapanganOlahragaPost SEMUA selain JasaPembuatanLapanganVoliPost
        //removeCondition('');
	removeCondition('JasaPembuatanLapanganTenisPost');
        removeCondition('JasaPembuatanLapanganBasketPost');
        removeCondition('JasaPembuatanLapanganSepakbolaPost');
        removeCondition('JasaPembuatanLapanganFutsalPost');
        removeCondition('JasaPembuatanLapanganSerbagunaPost');
	
	 //hapus elemen id JasaKonstruksiGedungdanHunianPost SEMUA
       removeCondition('JasaKonstruksiRumahTinggalPost');
        removeCondition('JasaKonstruksiRukodanKiosPost');
        removeCondition('JasaKonstruksiVillaPost');
        removeCondition('JasaKonstruksiApartemenPost');
        removeCondition('JasaKonstruksiHotelPost');
        removeCondition('JasaKonstruksiPerkantoranPost');
        removeCondition('JasaKonstruksiGedungSekolahPost');
        removeCondition('JasaKonstruksiGedungRumahSakitPost');
	//hapus elemen id JasaKonstruksiIndustridanGudangPost SEMUA
        removeCondition('JasaKonstruksiGudangLogistikPost');
        removeCondition('JasaKonstruksiPabrikPost');
        removeCondition('JasaKonstruksiColdStoragePost');
        removeCondition('JasaKonstruksiBengkelPost');
        removeCondition('JasaKonstruksiWorkshopPost');
        removeCondition('JasaKonstruksiPabrikPost');
	
      //hapus elemen id JasaStrukturBetondanPengecoranPost SEMUA 
        removeCondition('JasaPengecoranLantaiGudangPost');
        removeCondition('JasaBekistingdanPembesianPost');
        removeCondition('JasaPengecoranLantaiDakPost');
        removeCondition('JasaPengecoranKolomBetonPost');
        removeCondition('JasaCorBetonPost');
	//hapus elemen id JasaStrukturKhususPost SEMUA 
        removeCondition('JasaPembuatanKolamRenangPost');
        removeCondition('JasaPembuatanKolamIkanPost');
        removeCondition('JasaSepticTankBetonPost');
        removeCondition('JasaPembuatanTangkiAirPost');
        removeCondition('JasaPembuatanBakPenampunganPost');
        removeCondition('JasaKonstruksiMenaraAirPost');

	/*
JasaKonstruksiGedungdanHunianPost
JasaKonstruksiIndustridanGudangPost
JasaStrukturBajadanRangkaRinganPost
JasaStrukturKhusus
JasaKonstruksiLapanganOlahragaPost
JasaKonstruksiModulardanPrecastPost
JasaStrukturBetondanPengecoranPost
*/
       //HAPUS ELEMEN LAIN DI JasaKonsStruktur SELAIN JasaKonstruksiLapanganOlahragaPost
        removeCondition('JasaKonstruksiIndustridanGudangPost');
        removeCondition('JasaStrukturBetondanPengecoranPost');
        removeCondition('JasaStrukturKhususPost');
	removeCondition('JasaKonstruksiGedungdanHunianPost');
	removeCondition('JasaKonstruksiModulardanPrecastPost');
	removeCondition('JasaStrukturBajadanRangkaRinganPost');
       
        JasaKonstruksiStrukturPostLink.style.visibility = 'visible';
        JasaStrukturKonstruksiPostLink.style.visibility = 'visible';
	//TAMPILKAN JasaKonstruksiLapanganOlahragaPost
        JasaKonstruksiLapanganOlahragaPostLink.style.visibility = 'visible';
	//TAMPILKAN JasaPembuatanLapanganVoliPost
        JasaPembuatanLapanganVoliPostLink.style.visibility = 'visible';
        pageNameJasaKonsStrukturPost.textContent = urlMappingJasaPembuatanLapanganVoli[cleanUrlJasaJasaKonsStrukturPost];
    }

// ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaPembuatanLapanganVoli[cleanUrlJasaJasaKonsStrukturPost]) {
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
                   "name": "Jasa Konstruksi Lapangan Olahraga",
                   "item": "https://www.betonjayareadymix.com/p/jasa-konstruksi-lapangan-olahraga.html"
               },
		{
                   "@type": "ListItem",
                   "position": 5,
                   "name": "Jasa Pembuatan Lapangan Voli",
                   "item": "https://www.betonjayareadymix.com/p/jasa-pembuatan-lapangan-voli.html"
               },
               {
                   "@type": "ListItem",
                   "position": 6,
                   "name": urlMappingJasaPembuatanLapanganVoli[cleanUrlJasaJasaKonsStrukturPost],
                   "item": cleanUrlJasaJasaKonsStrukturPost
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
if (urlMappingJasaPembuatanLapanganSerbaguna[cleanUrlJasaJasaKonsStrukturPost]) {
        restoreCondition('JasaKonsStrukturPost');
        restoreCondition('JasaKonstruksiLapanganOlahragaPost');
        restoreCondition('JasaPembuatanLapanganSerbagunaPost');

       //hapus elemen div id lain
	removeCondition('JasaDesInPost');
	removeCondition('ProdukInFurPost');
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
	removeCondition('JasaKonsBongkarBangunanPost');
        removeCondition('JasaKonsPengeboranPost'); 
	removeCondition('JasaKonsFinishingPost');
        removeCondition('ProdukKonsSaluranPost');
        removeCondition('JasaKonsAlatKonstruksiPost');
        removeCondition('JasaKonsJalanPerkerasanPost');

	 //hapus elemen id JasaStrukturBajadanRangkaRinganPost SEMUA
        removeCondition('JasaKonstruksiBajaKonvensionalPost');
        removeCondition('JasaKanopiBajadanBesiPost');
        removeCondition('JasaStrukturBajaGudangPost');
        removeCondition('JasaRangkaAtapBajaRinganPost');
	// hapus elemen id JasaKonstruksiLapanganOlahragaPost SEMUA selain JasaPembuatanLapanganSerbagunaPost
        //removeCondition('');
	removeCondition('JasaPembuatanLapanganTenisPost');
	removeCondition('JasaPembuatanLapanganBadmintonPost');
        removeCondition('JasaPembuatanLapanganBasketPost');
        removeCondition('JasaPembuatanLapanganSepakbolaPost');
        removeCondition('JasaPembuatanLapanganFutsalPost');
        removeCondition('JasaPembuatanLapanganVoliPost');
	
	 //hapus elemen id JasaKonstruksiGedungdanHunianPost SEMUA
       removeCondition('JasaKonstruksiRumahTinggalPost');
        removeCondition('JasaKonstruksiRukodanKiosPost');
        removeCondition('JasaKonstruksiVillaPost');
        removeCondition('JasaKonstruksiApartemenPost');
        removeCondition('JasaKonstruksiHotelPost');
        removeCondition('JasaKonstruksiPerkantoranPost');
        removeCondition('JasaKonstruksiGedungSekolahPost');
        removeCondition('JasaKonstruksiGedungRumahSakitPost');
	//hapus elemen id JasaKonstruksiIndustridanGudangPost SEMUA
        removeCondition('JasaKonstruksiGudangLogistikPost');
        removeCondition('JasaKonstruksiPabrikPost');
        removeCondition('JasaKonstruksiColdStoragePost');
        removeCondition('JasaKonstruksiBengkelPost');
        removeCondition('JasaKonstruksiWorkshopPost');
        removeCondition('JasaKonstruksiPabrikPost');
	
      //hapus elemen id JasaStrukturBetondanPengecoranPost SEMUA 
        removeCondition('JasaPengecoranLantaiGudangPost');
        removeCondition('JasaBekistingdanPembesianPost');
        removeCondition('JasaPengecoranLantaiDakPost');
        removeCondition('JasaPengecoranKolomBetonPost');
        removeCondition('JasaCorBetonPost');
	//hapus elemen id JasaStrukturKhususPost SEMUA 
        removeCondition('JasaPembuatanKolamRenangPost');
        removeCondition('JasaPembuatanKolamIkanPost');
        removeCondition('JasaSepticTankBetonPost');
        removeCondition('JasaPembuatanTangkiAirPost');
        removeCondition('JasaPembuatanBakPenampunganPost');
        removeCondition('JasaKonstruksiMenaraAirPost');
      
	
      
	/*
JasaKonstruksiGedungdanHunianPost
JasaKonstruksiIndustridanGudangPost
JasaStrukturBajadanRangkaRinganPost
JasaStrukturKhusus
JasaKonstruksiLapanganOlahragaPost
JasaKonstruksiModulardanPrecastPost
JasaStrukturBetondanPengecoranPost
*/
       //HAPUS ELEMEN LAIN DI JasaKonsStruktur SELAIN JasaKonstruksiLapanganOlahragaPost
        removeCondition('JasaKonstruksiIndustridanGudangPost');
        removeCondition('JasaStrukturBetondanPengecoranPost');
        removeCondition('JasaStrukturKhususPost');
	removeCondition('JasaKonstruksiGedungdanHunianPost');
	removeCondition('JasaKonstruksiModulardanPrecastPost');
	removeCondition('JasaStrukturBajadanRangkaRinganPost');
       
        JasaKonstruksiStrukturPostLink.style.visibility = 'visible';
        JasaStrukturKonstruksiPostLink.style.visibility = 'visible';
	//TAMPILKAN JasaKonstruksiLapanganOlahragaPost
        JasaKonstruksiLapanganOlahragaPostLink.style.visibility = 'visible';
	//TAMPILKAN JasaPembuatanLapanganVoliPost
        JasaPembuatanLapanganSerbagunaPostLink.style.visibility = 'visible';
        pageNameJasaKonsStrukturPost.textContent = urlMappingJasaPembuatanLapanganSerbaguna[cleanUrlJasaJasaKonsStrukturPost];
    }
// ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaPembuatanLapanganSerbaguna[cleanUrlJasaJasaKonsStrukturPost]) {
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
                   "name": "Jasa Konstruksi Lapangan Olahraga",
                   "item": "https://www.betonjayareadymix.com/p/jasa-konstruksi-lapangan-olahraga.html"
               },
		{
                   "@type": "ListItem",
                   "position": 5,
                   "name": "Jasa Pembuatan Lapangan Serbaguna",
                   "item": "https://www.betonjayareadymix.com/p/jasa-pembuatan-lapangan-serbaguna.html"
               },
               {
                   "@type": "ListItem",
                   "position": 6,
                   "name": urlMappingJasaPembuatanLapanganSerbaguna[cleanUrlJasaJasaKonsStrukturPost],
                   "item": cleanUrlJasaJasaKonsStrukturPost
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
//AKHIR SUB JasaKonstruksiLapanganOlahragaPost

//SUB Jasa Struktur Khusus
if (urlMappingJasaPembuatanKolamRenang[cleanUrlJasaJasaKonsStrukturPost]) {
        restoreCondition('JasaKonsStrukturPost');
        restoreCondition('JasaStrukturKhususPost');
        restoreCondition('JasaPembuatanKolamRenangPost');

       //hapus elemen div id lain
	removeCondition('JasaDesInPost');
	removeCondition('ProdukInFurPost');
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
	removeCondition('JasaKonsBongkarBangunanPost');
        removeCondition('JasaKonsPengeboranPost'); 
	removeCondition('JasaKonsFinishingPost');
        removeCondition('ProdukKonsSaluranPost');
        removeCondition('JasaKonsAlatKonstruksiPost');
        removeCondition('JasaKonsJalanPerkerasanPost');

	 //hapus elemen id JasaStrukturBajadanRangkaRinganPost SEMUA
        removeCondition('JasaKonstruksiBajaKonvensionalPost');
        removeCondition('JasaKanopiBajadanBesiPost');
        removeCondition('JasaStrukturBajaGudangPost');
        removeCondition('JasaRangkaAtapBajaRinganPost');
	// hapus elemen id JasaKonstruksiLapanganOlahragaPost SEMUA
        removeCondition('JasaPembuatanLapanganSerbagunaPost');
	removeCondition('JasaPembuatanLapanganTenisPost');
        removeCondition('JasaPembuatanLapanganBadmintonPost');
        removeCondition('JasaPembuatanLapanganBasketPost');
        removeCondition('JasaPembuatanLapanganSepakbolaPost');
        removeCondition('JasaPembuatanLapanganFutsalPost');
        removeCondition('JasaPembuatanLapanganVoliPost');
	
	 //hapus elemen id JasaKonstruksiGedungdanHunianPost SEMUA
       removeCondition('JasaKonstruksiRumahTinggalPost');
        removeCondition('JasaKonstruksiRukodanKiosPost');
        removeCondition('JasaKonstruksiVillaPost');
        removeCondition('JasaKonstruksiApartemenPost');
        removeCondition('JasaKonstruksiHotelPost');
        removeCondition('JasaKonstruksiPerkantoranPost');
        removeCondition('JasaKonstruksiGedungSekolahPost');
        removeCondition('JasaKonstruksiGedungRumahSakitPost');
	//hapus elemen id JasaKonstruksiIndustridanGudangPost SEMUA
        removeCondition('JasaKonstruksiGudangLogistikPost');
        removeCondition('JasaKonstruksiPabrikPost');
        removeCondition('JasaKonstruksiColdStoragePost');
        removeCondition('JasaKonstruksiBengkelPost');
        removeCondition('JasaKonstruksiWorkshopPost');
        removeCondition('JasaKonstruksiPabrikPost');
	
      //hapus elemen id JasaStrukturBetondanPengecoranPost SEMUA 
        removeCondition('JasaPengecoranLantaiGudangPost');
        removeCondition('JasaBekistingdanPembesianPost');
        removeCondition('JasaPengecoranLantaiDakPost');
        removeCondition('JasaPengecoranKolomBetonPost');
        removeCondition('JasaCorBetonPost');
      //hapus elemen id JasaStrukturKhususPost SEMUA kecuali JasaPembuatanKolamRenangPost
        //removeCondition('');
        removeCondition('JasaPembuatanKolamIkanPost');
        removeCondition('JasaSepticTankBetonPost');
        removeCondition('JasaPembuatanTangkiAirPost');
        removeCondition('JasaPembuatanBakPenampunganPost');
        removeCondition('JasaKonstruksiMenaraAirPost');
      
	/*
JasaKonstruksiGedungdanHunianPost
JasaKonstruksiIndustridanGudangPost
JasaStrukturBajadanRangkaRinganPost
JasaStrukturKhusus
JasaKonstruksiLapanganOlahragaPost
JasaKonstruksiModulardanPrecastPost
JasaStrukturBetondanPengecoranPost
*/
       //HAPUS ELEMEN LAIN DI JasaKonsStruktur SELAIN JasaStrukturKhususPost
        removeCondition('JasaKonstruksiIndustridanGudangPost');
        removeCondition('JasaStrukturBetondanPengecoranPost');
        removeCondition('JasaKonstruksiLapanganOlahragaPost');
	removeCondition('JasaKonstruksiGedungdanHunianPost');
	removeCondition('JasaKonstruksiModulardanPrecastPost');
	removeCondition('JasaStrukturBajadanRangkaRinganPost');
       
        JasaKonstruksiStrukturPostLink.style.visibility = 'visible';
        JasaStrukturKonstruksiPostLink.style.visibility = 'visible';
	//TAMPILKAN JasaStrukturKhususPost
        JasaStrukturKhususPostLink.style.visibility = 'visible';
	//TAMPILKAN JasaPembuatanKolamRenangPost
        JasaPembuatanKolamRenangPostLink.style.visibility = 'visible';
        pageNameJasaKonsStrukturPost.textContent = urlMappingJasaPembuatanKolamRenang[cleanUrlJasaJasaKonsStrukturPost];
    }

// ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaPembuatanKolamRenang[cleanUrlJasaJasaKonsStrukturPost]) {
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
                   "name": "Jasa Struktur Khusus",
                   "item": "https://www.betonjayareadymix.com/p/jasa-struktur-khusus.html"
               },
		{
                   "@type": "ListItem",
                   "position": 5,
                   "name": "Jasa Pembuatan Kolam Renang",
                   "item": "https://www.betonjayareadymix.com/p/jasa-pembuatan-kolam-renang.html"
               },
               {
                   "@type": "ListItem",
                   "position": 6,
                   "name": urlMappingJasaPembuatanKolamRenang[cleanUrlJasaJasaKonsStrukturPost],
                   "item": cleanUrlJasaJasaKonsStrukturPost
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }	
//AKHIR SUB Jasa Struktur Khusus
}
   });
