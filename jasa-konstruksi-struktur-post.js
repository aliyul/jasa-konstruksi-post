/*
const urlMappingStrukturBajaRangka = {
"https://www.betonjayareadymix.com/p/jasa-rangka-atap-baja-ringan.html": "Jasa Rangka Atap Baja Ringan",
  "https://www.betonjayareadymix.com/p/jasa-konstruksi-baja-konvensional.html": "Jasa Konstruksi Baja Konvensional",
  "https://www.betonjayareadymix.com/p/jasa-kanopi-baja-dan-besi.html": "Jasa Kanopi Baja dan Besi",
  "https://www.betonjayareadymix.com/p/jasa-struktur-baja-gudang.html": "Jasa Struktur Baja Gudang"

};
*/
/*
// ============================================================
// 🔍 ENTITY TYPE: JASA (Struktur Baja, Beton, Gedung, Industri, Olahraga, Khusus)
// ATURAN: JASA TIDAK BOLEH MENGGUNAKAN MONEY_MASTER
// ✅ Gunakan: MONEY_PAGE (Komersial 60% + Transaksional 40%)
// ✅ Gunakan: MONEY_CHILD untuk spesifik lokasi
// ============================================================

// ============================================================
// 📁 LEVEL 2 - SUB2 (Turunan dari PILLAR Jasa Struktur Konstruksi)
// 🧠 SUB2: Informasional (60%), boleh skip di breadcrumb
// ============================================================

const urlMappingJasaStrukturBajaRangkaRinganFromPillarSub2 = {
  // [SUB2] - Jasa Rangka Atap Baja Ringan (KATEGORI)
  "https://www.betonjayareadymix.com/p/jasa-rangka-atap-baja-ringan.html": "Jasa Rangka Atap Baja Ringan",  // TYPE: SUB2
  
  // [SUB2] - Jasa Konstruksi Baja Konvensional (KATEGORI)
  "https://www.betonjayareadymix.com/p/jasa-konstruksi-baja-konvensional.html": "Jasa Konstruksi Baja Konvensional",  // TYPE: SUB2
  
  // [SUB2] - Jasa Kanopi Baja dan Besi (KATEGORI)
  "https://www.betonjayareadymix.com/p/jasa-kanopi-baja-dan-besi.html": "Jasa Kanopi Baja dan Besi",  // TYPE: SUB2
  
  // [SUB2] - Jasa Struktur Baja Gudang (KATEGORI)
  "https://www.betonjayareadymix.com/p/jasa-struktur-baja-gudang.html": "Jasa Struktur Baja Gudang",  // TYPE: SUB2
};
*/
// ============================================================
// 📁 JASA RANGKA ATAP BAJA RINGAN - MONEY PAGE & CHILD
// 🧠 ENTITY: JASA → TYPE: MONEY_PAGE & MONEY_CHILD
// Parent: Jasa Rangka Atap Baja Ringan (SUB2)
// ============================================================

const urlMappingJasaRangkaAtapBajaRinganFromSub2MoneyPage = {
  // ============================================================
  // [MONEY_PAGE] - JASA PASANG ATAP & KANOPI BAJA RINGAN
  // 🧠 TYPE: MONEY_PAGE (JASA, bukan MONEY_MASTER)
  // ============================================================
  "https://www.betonjayareadymix.com/2018/09/jasa-pasang-atap-baja-ringan.html": "Jasa Pasang Atap Baja Ringan",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/09/jasa-atap-baja-ringan.html": "Jasa Atap Baja Ringan",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/09/tukang-baja-ringan.html": "Tukang Baja Ringan",  // TYPE: MONEY_PAGE
  
  // ============================================================
  // [MONEY_CHILD] - JASA PASANG KANOPI BAJA RINGAN PER LOKASI
  // ============================================================
  "https://www.betonjayareadymix.com/2018/09/jasa-pasang-kanopi-baja-ringan-terdekat.html": "Jasa Pasang Kanopi Baja Ringan Terdekat",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/09/jasa-pasang-baja-ringan-terdekat.html": "Jasa Pasang Baja Ringan Terdekat",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/09/tukang-baja-ringan-terdekat.html": "Tukang Baja Ringan Terdekat",  // TYPE: MONEY_CHILD
  
  // ============================================================
  // [MONEY_PAGE] - HARGA JASA PASANG BAJA RINGAN (NASIONAL)
  // ============================================================
  "https://www.betonjayareadymix.com/2018/09/harga-jasa-pasang-kanopi-baja-ringan.html": "Harga Jasa Pasang Kanopi Baja Ringan",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/09/harga-jasa-pasang-baja-ringan.html": "Harga Jasa Pasang Baja Ringan",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/09/harga-jasa-pasang-atap-kanopi.html": "Harga Jasa Pasang Atap Kanopi",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/09/harga-jasa-pasang-atap-baja-ringan.html": "Harga Jasa Pasang Atap Baja Ringan",  // TYPE: MONEY_PAGE
  
  // ============================================================
  // [MONEY_PAGE] - HARGA BORONGAN BAJA RINGAN
  // ============================================================
  "https://www.betonjayareadymix.com/2018/09/harga-borongan-jasa-konstruksi-baja-ringan.html": "Harga Borongan Jasa Konstruksi Baja Ringan",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2019/04/harga-borongan-baja-ringan.html": "Harga Borongan Baja Ringan",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2019/04/borongan-baja-ringan.html": "Borongan Baja Ringan",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2019/04/harga-borongan-baja-ringan-plus-material.html": "Harga Borongan Baja Ringan Plus Material",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/09/tukang-baja-ringan-murah.html": "Tukang Baja Ringan Murah",  // TYPE: MONEY_PAGE
  
  // ============================================================
  // [MONEY_CHILD] - HARGA BORONGAN BAJA RINGAN PER LOKASI
  // ============================================================
  "https://www.betonjayareadymix.com/2019/05/harga-borongan-baja-ringan-plus-material-bandung.html": "Harga Borongan Baja Ringan Plus Material Bandung",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/05/harga-borongan-baja-ringan-plus-material-jakarta.html": "Harga Borongan Baja Ringan Plus Material Jakarta",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/05/harga-borongan-baja-ringan-plus-material-depok.html": "Harga Borongan Baja Ringan Plus Material Depok",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/05/harga-borongan-baja-ringan-plus-material-kota-bekasi.html": "Harga Borongan Baja Ringan Plus Material Kota Bekasi",  // TYPE: MONEY_CHILD
};

// ============================================================
// 📁 JASA KONSTRUKSI BAJA KONVENSIONAL - MONEY PAGE
// 🧠 ENTITY: JASA → TYPE: MONEY_PAGE
// Parent: Jasa Konstruksi Baja Konvensional (SUB2)
// ============================================================

const urlMappingJasaKonstruksiBajaKonvensionalFromSub2MoneyPage = {
  // ============================================================
  // [MONEY_PAGE] - JASA KONSTRUKSI BAJA & BESI
  // ============================================================
  "https://www.betonjayareadymix.com/2018/09/jasa-konstruksi-baja-gedung.html": "Jasa Konstruksi Baja Gedung",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/09/jasa-konstruksi-baja.html": "Jasa Konstruksi Baja",  // TYPE: MONEY_PAGE
  
  // ============================================================
  // [MONEY_PAGE] - HARGA BORONGAN KONSTRUKSI BESI & BAJA
  // ============================================================
  "https://www.betonjayareadymix.com/2018/09/harga-borongan-jasa-konstruksi-besi.html": "Harga Borongan Jasa Konstruksi Besi",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/09/harga-borongan-konstruksi-besi.html": "Harga Borongan Konstruksi Besi",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/09/harga-borongan-konstruksi-baja-wf.html": "Harga Borongan Konstruksi Baja WF",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/09/harga-borongan-konstruksi-baja-per-meter.html": "Harga Borongan Konstruksi Baja Per Meter",  // TYPE: MONEY_PAGE
  
  // ============================================================
  // [MONEY_PAGE] - HARGA KONSTRUKSI BAJA WF
  // ============================================================
  "https://www.betonjayareadymix.com/2018/09/harga-jasa-konstruksi-besi-wf.html": "Harga Jasa Konstruksi Besi WF",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/09/harga-jasa-konstruksi-baja-wf.html": "Harga Jasa Konstruksi Baja WF",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/09/harga-konstruksi-baja-wf-per-m2.html": "Harga Konstruksi Baja WF Per M2",  // TYPE: MONEY_PAGE

  // ============================================================
  // [MONEY_PAGE] - JASA PEMBANGUNAN TOWER
  // ============================================================
  "https://www.betonjayareadymix.com/2018/09/jasa-pembangunan-tower.html": "Jasa Pembangunan Tower",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/09/harga-borongan-pasang-tower.html": "Harga Borongan Pasang Tower",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/09/jasa-pemasangan-tower-bts.html": "Jasa Pemasangan Tower BTS",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/09/jasa-pemasangan-tower-triangle.html": "Jasa Pemasangan Tower Triangle",  // TYPE: MONEY_PAGE
};

// ============================================================
// 📁 JASA KANOPI BAJA DAN BESI - KOSONG (SARAN ITEM)
// ============================================================

const urlMappingJasaKanopiBajadanBesiFromSub2MoneyPage = {
  // 🟡 SARAN ITEM (BELUM AKTIF - PERLU DIBUAT KONTEN)
  // "https://www.betonjayareadymix.com/2018/09/jasa-kanopi-baja-ringan.html": "Jasa Kanopi Baja Ringan",  // TYPE: MONEY_PAGE
  // "https://www.betonjayareadymix.com/2018/09/jasa-kanopi-besi-tempa.html": "Jasa Kanopi Besi Tempa",  // TYPE: MONEY_PAGE
  // "https://www.betonjayareadymix.com/2018/09/harga-jasa-kanopi-baja-per-meter.html": "Harga Jasa Kanopi Baja Per Meter",  // TYPE: MONEY_PAGE
  // "https://www.betonjayareadymix.com/2018/09/jasa-kanopi-baja-jakarta.html": "Jasa Kanopi Baja Jakarta",  // TYPE: MONEY_CHILD
};

// ============================================================
// 📁 JASA STRUKTUR BAJA GUDANG - KOSONG (SARAN ITEM)
// ============================================================

const urlMappingJasaStrukturBajaGudangFromSub2MoneyPage = {
  // 🟡 SARAN ITEM (BELUM AKTIF - PERLU DIBUAT KONTEN)
  // "https://www.betonjayareadymix.com/2018/09/jasa-struktur-baja-gudang.html": "Jasa Struktur Baja Gudang",  // TYPE: MONEY_PAGE
  // "https://www.betonjayareadymix.com/2018/09/harga-struktur-baja-gudang-per-m2.html": "Harga Struktur Baja Gudang Per M2",  // TYPE: MONEY_PAGE
  // "https://www.betonjayareadymix.com/2018/09/jasa-struktur-baja-gudang-jakarta.html": "Jasa Struktur Baja Gudang Jakarta",  // TYPE: MONEY_CHILD
};

// ============================================================
// 📁 JASA COR BETON - MONEY PAGE & CHILD
// 🧠 ENTITY: JASA → TYPE: MONEY_PAGE & MONEY_CHILD
// Parent: Jasa Struktur Beton dan Pengecoran (SUB2)
// ============================================================

const urlMappingJasaCorBetonFromSub2MoneyPage = {
  // ============================================================
  // [MONEY_PAGE] - HARGA BORONGAN COR BETON (NASIONAL)
  // ============================================================
  "https://www.betonjayareadymix.com/2021/03/harga-borongan-cor-beton.html": "Harga Borongan Cor Beton",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2021/03/harga-borongan-cor-beton-per-m3.html": "Harga Borongan Cor Beton per m3",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/09/borongan-cor-beton.html": "Borongan Cor Beton",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/09/borongan-cor-beton-bangunan.html": "Borongan Cor Beton Bangunan",  // TYPE: MONEY_PAGE
  
  // ============================================================
  // [MONEY_CHILD] - BORONGAN COR BETON PER JENIS BANGUNAN
  // ============================================================
  "https://www.betonjayareadymix.com/2018/09/borongan-cor-beton-townhouse.html": "Borongan Cor Beton Townhouse",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/09/borongan-cor-beton-villa.html": "Borongan Cor Beton Villa",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/09/borongan-cor-beton-pabrik.html": "Borongan Cor Beton Pabrik",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/09/borongan-cor-beton-gedung.html": "Borongan Cor Beton Gedung",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/09/borongan-cor-beton-gudang.html": "Borongan Cor Beton Gudang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/09/borongan-cor-beton-masjid.html": "Borongan Cor Beton Masjid",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/09/borongan-cor-beton-yayasan.html": "Borongan Cor Beton Yayasan",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/09/borongan-cor-beton-mall.html": "Borongan Cor Beton Mall",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/09/borongan-cor-beton-stadion.html": "Borongan Cor Beton Stadion",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/09/borongan-cor-beton-stasiun.html": "Borongan Cor Beton Stasiun",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/09/borongan-cor-beton-sekolah.html": "Borongan Cor Beton Sekolah",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/09/borongan-cor-beton-pelabuhan.html": "Borongan Cor Beton Pelabuhan",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/09/borongan-cor-beton-bandara.html": "Borongan Cor Beton Bandara",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/09/borongan-cor-beton-apartemen.html": "Borongan Cor Beton Apartemen",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/09/borongan-cor-beton-hotel.html": "Borongan Cor Beton Hotel",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/09/borongan-cor-beton-kontrakan.html": "Borongan Cor Beton Kontrakan",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/09/borongan-cor-beton-ruko-toko.html": "Borongan Cor Beton Ruko Toko",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/09/borongan-cor-beton-rukan-kantor.html": "Borongan Cor Beton Rukan Kantor",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/09/borongan-cor-beton-rumah.html": "Borongan Cor Beton Rumah",  // TYPE: MONEY_CHILD
  
  // ============================================================
  // [MONEY_CHILD] - BORONGAN COR BETON PER LOKASI
  // ============================================================
  "https://www.betonjayareadymix.com/2018/09/borongan-cor-beton-tangerang.html": "Borongan Cor Beton Tangerang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/09/borongan-cor-beton-jakarta.html": "Borongan Cor Beton Jakarta",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/09/borongan-cor-beton-depok.html": "Borongan Cor Beton Depok",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/09/borongan-cor-beton-bogor.html": "Borongan Cor Beton Bogor",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/09/borongan-cor-beton-bekasi.html": "Borongan Cor Beton Bekasi",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/09/borongan-cor-beton-terdekat.html": "Borongan Cor Beton Terdekat",  // TYPE: MONEY_CHILD

  // ============================================================
  // [MONEY_PAGE] - JASA & HARGA SLOOF
  // ============================================================
  "https://www.betonjayareadymix.com/2018/09/jasa-sloof-beton.html": "Jasa Sloof Beton",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2021/12/harga-cor-beton-sloof.html": "Harga Cor Beton Sloof",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/09/harga-sloof-per-meter.html": "Harga Sloof Per Meter",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/09/borongan-sloof.html": "Borongan Sloof",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/09/harga-borongan-sloof-per-meter-kubik.html": "Harga Borongan Sloof Per Meter Kubik",  // TYPE: MONEY_PAGE
  
  // ============================================================
  // [MONEY_CHILD] - HARGA SLOOF PER M3 PER LOKASI
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
  // [MONEY_PAGE] - JASA STRUKTUR BETON LAINNYA
  // ============================================================
  "https://www.betonjayareadymix.com/2018/09/jasa-ring-balok.html": "Jasa Ring Balok",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/09/jasa-kolom.html": "Jasa Kolom",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/09/jasa-cor-tiang.html": "Jasa Cor Tiang",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/09/jasa-gelar-beton.html": "Jasa Gelar Beton",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/09/jasa-rabat-beton-per-meter.html": "Jasa Rabat Beton per Meter",  // TYPE: MONEY_PAGE
};

// ============================================================
// 📁 JASA PENGECORAN LANTAI DAK - MONEY PAGE
// ============================================================

const urlMappingJasaPengecoranLantaiDakFromSub2MoneyPage = {
  // ============================================================
  // [MONEY_PAGE] - COR DAK & LANTAI
  // ============================================================
  "https://www.betonjayareadymix.com/2018/10/dak-beton.html": "Dak Beton",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/09/jasa-cor-dak.html": "Jasa Cor Dak",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2021/12/harga-cor-beton-lantai.html": "Harga Cor Beton Lantai",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2021/12/harga-beton-cor-dak.html": "Harga Beton Cor Dak",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/10/harga-jasa-dak-beton.html": "Harga Jasa Dak Beton",  // TYPE: MONEY_PAGE
  
  // ============================================================
  // [MONEY_PAGE] - BORONGAN DAK BETON
  // ============================================================
  "https://www.betonjayareadymix.com/2018/09/harga-borongan-dak-beton.html": "Harga Borongan Dak Beton",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/09/borongan-dak-beton.html": "Borongan Dak Beton",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/09/borongan-ring-balok.html": "Borongan Ring Balok",  // TYPE: MONEY_PAGE
};

// ============================================================
// 📁 JASA PENGECORAN LANTAI GUDANG - KOSONG (SARAN ITEM)
// ============================================================

const urlMappingJasaPengecoranLantaiGudangFromSub2MoneyPage = {
  // 🟡 SARAN ITEM (BELUM AKTIF - PERLU DIBUAT KONTEN)
  // "https://www.betonjayareadymix.com/2018/09/jasa-cor-lantai-gudang.html": "Jasa Cor Lantai Gudang",  // TYPE: MONEY_PAGE
  // "https://www.betonjayareadymix.com/2018/09/harga-cor-lantai-gudang-per-m2.html": "Harga Cor Lantai Gudang Per M2",  // TYPE: MONEY_PAGE
};

// ============================================================
// 📁 JASA BEKISTING DAN PEMBESIAN - MONEY PAGE
// ============================================================

const urlMappingJasaBekistingdanPembesianFromSub2MoneyPage = {
  // ============================================================
  // [MONEY_PAGE] - JASA BEKISTING
  // ============================================================
  "https://www.betonjayareadymix.com/2021/12/jasa-bekisting-sloof-per-m2.html": "Jasa Bekisting Sloof per m2",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2021/08/jasa-bekisting-rumah.html": "Jasa Bekisting Rumah",  // TYPE: MONEY_PAGE
};

// ============================================================
// 📁 JASA PENGECORAN KOLOM BETON - MONEY PAGE
// ============================================================

const urlMappingJasaPengecoranKolomBetonFromSub2MoneyPage = {
  // ============================================================
  // [MONEY_PAGE] - BORONGAN KOLOM
  // ============================================================
  "https://www.betonjayareadymix.com/2018/09/borongan-kolom.html": "Borongan Kolom",  // TYPE: MONEY_PAGE
};

// ============================================================
// 📁 JASA KONSTRUKSI GEDUNG HUNIAN - MONEY PAGE
// 🧠 ENTITY: JASA → TYPE: MONEY_PAGE
// Parent: Jasa Konstruksi Gedung dan Hunian (SUB2)
// ============================================================

const urlMappingJasaKonstruksiGedungHunianFromSub2MoneyPage = {
  // ============================================================
  // [MONEY_PAGE] - KONSTRUKSI BAJA GEDUNG
  // ============================================================
  "https://www.betonjayareadymix.com/2018/09/jasa-konstruksi-baja-gedung.html": "Jasa Konstruksi Baja Gedung",  // TYPE: MONEY_PAGE
};

// ============================================================
// 📁 JASA KONSTRUKSI RUMAH TINGGAL - MONEY PAGE & CHILD
// Parent: Jasa Konstruksi Gedung dan Hunian (SUB2)
// ============================================================

const urlMappingJasaKonstruksiRumahTinggalFromSub2MoneyPage = {
  // ============================================================
  // [MONEY_PAGE] - HARGA BORONGAN KONSTRUKSI PER METER (NASIONAL)
  // ============================================================
  "https://www.betonjayareadymix.com/2018/09/harga-borongan-konstruksi-per-meter.html": "Harga Borongan Konstruksi Per Meter",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/09/harga-borongan-tukang-bangunan-per-meter.html": "Harga Borongan Tukang Bangunan Per Meter",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/09/jasa-pembuatan-bangunan.html": "Jasa Pembuatan Bangunan",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/09/harga-upah-tenaga-borongan-bangunan-per-m2.html": "Harga Upah Tenaga Borongan Bangunan Per M2",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/09/harga-borong-bangunan-plus-material.html": "Harga Borong Bangunan Plus Material",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/09/borongan-bangunan.html": "Borongan Bangunan",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/09/harga-bangunan.html": "Harga Bangunan",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/09/borongan-konstruksi.html": "Borongan Konstruksi",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/09/konsultan-bangunan.html": "Konsultan Bangunan",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/09/konsultan-kontruksi.html": "Konsultan Konstruksi",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/09/perencanaan-pembangunan.html": "Perencanaan Pembangunan",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/09/perencanaan-konstruksi.html": "Perencanaan Konstruksi",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/09/borongan-dinding.html": "Borongan Dinding",  // TYPE: MONEY_PAGE
  
  // ============================================================
  // [MONEY_PAGE] - HARGA BORONGAN RUMAH PER METER
  // ============================================================
  "https://www.betonjayareadymix.com/2018/09/harga-borongan-rumah-per-meter-plus-material.html": "Harga Borongan Rumah Per Meter Plus Material",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/09/harga-borongan-rumah-per-meter-terima-kunci.html": "Harga Borongan Rumah Per Meter Terima Kunci",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/09/harga-borongan-rumah-1-lantai-per-meter.html": "Harga Borongan Rumah 1 Lantai Per Meter",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/09/harga-borongan-tenaga-bangunan-rumah.html": "Harga Borongan Tenaga Bangunan Rumah",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/09/harga-konstruksi-rumah-per-m2.html": "Harga Konstruksi Rumah Per M2",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/09/harga-jasa-borongan-rumah-2-lantai-per-m2.html": "Harga Jasa Borongan Rumah 2 Lantai Per M2",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/09/jasa-borongan-rumah.html": "Jasa Borongan Rumah",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/09/harga-borongan-bangunan-rumah.html": "Harga Borongan Bangunan Rumah",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/09/harga-borongan-rumah-2-lantai-per-m2.html": "Harga Borongan Rumah 2 Lantai Per M2",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/09/jasa-bangun-rumah-borongan.html": "Jasa Bangun Rumah Borongan",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/09/jasa-pembuatan-rumah.html": "Jasa Pembuatan Rumah",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/09/jasa-konstruksi-baja-rumah.html": "Jasa Konstruksi Baja Rumah",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/09/harga-rumah-konstruksi-baja.html": "Harga Rumah Konstruksi Baja",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/09/jasa-pembuatan-rumah-rangka-baja.html": "Jasa Pembuatan Rumah Rangka Baja",  // TYPE: MONEY_PAGE
  
  // ============================================================
  // [MONEY_CHILD] - JASA BANGUN RUMAH PER LOKASI
  // ============================================================
  "https://www.betonjayareadymix.com/2018/11/jasa-bangun-rumah-depok.html": "Jasa Bangun Rumah Depok",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/11/jasa-bangun-rumah-tangerang.html": "Jasa Bangun Rumah Tangerang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/11/jasa-bangun-rumah-jakarta.html": "Jasa Bangun Rumah Jakarta",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/11/jasa-bangun-rumah-bogor.html": "Jasa Bangun Rumah Bogor",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/11/jasa-bangun-rumah-bekasi.html": "Jasa Bangun Rumah Bekasi",  // TYPE: MONEY_CHILD

  // ============================================================
  // [MONEY_CHILD] - HARGA BORONGAN RUMAH TERIMA KUNCI PER LOKASI
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
  // [MONEY_CHILD] - HARGA BORONGAN BANGUNAN PER LOKASI
  // ============================================================
  "https://www.betonjayareadymix.com/2018/11/harga-jasa-borongan-bangunan-dki-jakarta.html": "Harga Jasa Borongan Bangunan DKI Jakarta",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/11/harga-jasa-borongan-bangunan-tangerang.html": "Harga Jasa Borongan Bangunan Tangerang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/11/harga-jasa-borongan-bangunan-bekasi.html": "Harga Jasa Borongan Bangunan Bekasi",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/11/harga-jasa-borongan-bangunan-depok.html": "Harga Jasa Borongan Bangunan Depok",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/11/harga-jasa-borongan-bangunan-bogor.html": "Harga Jasa Borongan Bangunan Bogor",  // TYPE: MONEY_CHILD

  // ============================================================
  // [MONEY_CHILD] - BORONGAN BANGUNAN PER LOKASI
  // ============================================================
  "https://www.betonjayareadymix.com/2018/11/borongan-bangunan-dki-jakarta.html": "Borongan Bangunan DKI Jakarta",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/11/borongan-bangunan-tangerang.html": "Borongan Bangunan Tangerang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/11/borongan-bangunan-bekasi.html": "Borongan Bangunan Bekasi",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/11/borongan-bangunan-depok.html": "Borongan Bangunan Depok",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/11/borongan-bangunan-bogor.html": "Borongan Bangunan Bogor",  // TYPE: MONEY_CHILD
};

// ============================================================
// 📁 JASA KONSTRUKSI RUKO DAN KIOS - MONEY PAGE
// ============================================================

const urlMappingJasaKonstruksiRukodanKiosFromSub2MoneyPage = {
  // ============================================================
  // [MONEY_PAGE] - JASA KONSTRUKSI BAJA RUKO
  // ============================================================
  "https://www.betonjayareadymix.com/2018/09/jasa-konstruksi-baja-ruko.html": "Jasa Konstruksi Baja Ruko",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/09/jasa-konstruksi-baja-ringan-ruko.html": "Jasa Konstruksi Baja Ringan Ruko",  // TYPE: MONEY_PAGE
};

// ============================================================
// 📁 JASA KONSTRUKSI VILLA - KOSONG (SARAN ITEM)
// ============================================================

const urlMappingJasaKonstruksiVillaFromSub2MoneyPage = {
  // 🟡 SARAN ITEM (BELUM AKTIF - PERLU DIBUAT KONTEN)
  // "https://www.betonjayareadymix.com/2018/09/jasa-konstruksi-villa.html": "Jasa Konstruksi Villa",  // TYPE: MONEY_PAGE
  // "https://www.betonjayareadymix.com/2018/09/harga-borongan-villa-per-m2.html": "Harga Borongan Villa Per M2",  // TYPE: MONEY_PAGE
};

// ============================================================
// 📁 JASA KONSTRUKSI APARTEMEN - KOSONG (SARAN ITEM)
// ============================================================

const urlMappingJasaKonstruksiApartemenFromSub2MoneyPage = {
  // 🟡 SARAN ITEM (BELUM AKTIF - PERLU DIBUAT KONTEN)
  // "https://www.betonjayareadymix.com/2018/09/jasa-konstruksi-apartemen.html": "Jasa Konstruksi Apartemen",  // TYPE: MONEY_PAGE
  // "https://www.betonjayareadymix.com/2018/09/harga-borongan-apartemen-per-m2.html": "Harga Borongan Apartemen Per M2",  // TYPE: MONEY_PAGE
};

// ============================================================
// 📁 JASA KONSTRUKSI HOTEL - KOSONG (SARAN ITEM)
// ============================================================

const urlMappingJasaKonstruksiHotelFromSub2MoneyPage = {
  // 🟡 SARAN ITEM (BELUM AKTIF - PERLU DIBUAT KONTEN)
  // "https://www.betonjayareadymix.com/2018/09/jasa-konstruksi-hotel.html": "Jasa Konstruksi Hotel",  // TYPE: MONEY_PAGE
  // "https://www.betonjayareadymix.com/2018/09/harga-borongan-hotel-per-m2.html": "Harga Borongan Hotel Per M2",  // TYPE: MONEY_PAGE
};

// ============================================================
// 📁 JASA KONSTRUKSI PERKANTORAN - KOSONG (SARAN ITEM)
// ============================================================

const urlMappingJasaKonstruksiPerkantoranFromSub2MoneyPage = {
  // 🟡 SARAN ITEM (BELUM AKTIF - PERLU DIBUAT KONTEN)
  // "https://www.betonjayareadymix.com/2018/09/jasa-konstruksi-perkantoran.html": "Jasa Konstruksi Perkantoran",  // TYPE: MONEY_PAGE
  // "https://www.betonjayareadymix.com/2018/09/harga-borongan-kantor-per-m2.html": "Harga Borongan Kantor Per M2",  // TYPE: MONEY_PAGE
};

// ============================================================
// 📁 JASA KONSTRUKSI GEDUNG SEKOLAH - MONEY PAGE
// ============================================================

const urlMappingJasaKonstruksiGedungSekolahFromSub2MoneyPage = {
  // ============================================================
  // [MONEY_PAGE] - KONSTRUKSI BAJA GEDUNG
  // ============================================================
  "https://www.betonjayareadymix.com/2018/09/jasa-konstruksi-baja-gedung.html": "Jasa Konstruksi Baja Gedung",  // TYPE: MONEY_PAGE
};

// ============================================================
// 📁 JASA KONSTRUKSI GEDUNG RUMAH SAKIT - KOSONG (SARAN ITEM)
// ============================================================

const urlMappingJasaKonstruksiGedungRumahSakitFromSub2MoneyPage = {
  // 🟡 SARAN ITEM (BELUM AKTIF - PERLU DIBUAT KONTEN)
  // "https://www.betonjayareadymix.com/2018/09/jasa-konstruksi-rumah-sakit.html": "Jasa Konstruksi Rumah Sakit",  // TYPE: MONEY_PAGE
  // "https://www.betonjayareadymix.com/2018/09/harga-borongan-rumah-sakit-per-m2.html": "Harga Borongan Rumah Sakit Per M2",  // TYPE: MONEY_PAGE
};

// ============================================================
// 📁 JASA KONSTRUKSI GUDANG LOGISTIK - MONEY PAGE
// 🧠 ENTITY: JASA → TYPE: MONEY_PAGE
// Parent: Jasa Konstruksi Industri dan Gudang (SUB2)
// ============================================================

const urlMappingJasaKonstruksiGudangLogistikFromSub2MoneyPage = {
  // ============================================================
  // [MONEY_PAGE] - KONSTRUKSI BAJA GUDANG
  // ============================================================
  "https://www.betonjayareadymix.com/2018/09/jasa-konstruksi-baja-gudang.html": "Jasa Konstruksi Baja Gudang",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/09/jasa-pembuatan-konstruksi-gudang.html": "Jasa Pembuatan Konstruksi Gudang",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/09/jasa-pembuatan-gudang.html": "Jasa Pembuatan Gudang",  // TYPE: MONEY_PAGE

  // ============================================================
  // [MONEY_PAGE] - HARGA PEMBANGUNAN GUDANG
  // ============================================================
  "https://www.betonjayareadymix.com/2018/09/biaya-pembuatan-gudang-baja-ringan.html": "Biaya Pembuatan Gudang Baja Ringan",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/09/harga-konstruksi-gudang-per-meter.html": "Harga Konstruksi Gudang per Meter",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/09/harga-borong-tenaga-bikin-gudang.html": "Harga Borong Tenaga Bikin Gudang",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/09/harga-borongan-gudang-per-m2.html": "Harga Borongan Gudang per M2",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/09/harga-bangun-gudang.html": "Harga Bangun Gudang",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/09/harga-pembuatan-gudang-rangka-baja.html": "Harga Pembuatan Gudang Rangka Baja",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/09/biaya-pembuatan-gudang-per-meter.html": "Biaya Pembuatan Gudang per Meter",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/09/harga-pembuatan-gudang-per-m2.html": "Harga Pembuatan Gudang per M2",  // TYPE: MONEY_PAGE
};

// ============================================================
// 📁 JASA KONSTRUKSI PABRIK - MONEY PAGE
// ============================================================

const urlMappingJasaKonstruksiPabrikFromSub2MoneyPage = {
  // ============================================================
  // [MONEY_PAGE] - KONSTRUKSI BAJA PABRIK
  // ============================================================
  "https://www.betonjayareadymix.com/2018/09/jasa-konstruksi-baja-pabrik.html": "Jasa Konstruksi Baja Pabrik",  // TYPE: MONEY_PAGE
};

// ============================================================
// 📁 JASA KONSTRUKSI COLD STORAGE - KOSONG (SARAN ITEM)
// ============================================================

const urlMappingJasaKonstruksiColdStorageFromSub2MoneyPage = {
  // 🟡 SARAN ITEM (BELUM AKTIF - PERLU DIBUAT KONTEN)
  // "https://www.betonjayareadymix.com/2018/09/jasa-konstruksi-cold-storage.html": "Jasa Konstruksi Cold Storage",  // TYPE: MONEY_PAGE
  // "https://www.betonjayareadymix.com/2018/09/harga-borongan-cold-storage-per-m2.html": "Harga Borongan Cold Storage Per M2",  // TYPE: MONEY_PAGE
};

// ============================================================
// 📁 JASA KONSTRUKSI BENGKEL - KOSONG (SARAN ITEM)
// ============================================================

const urlMappingJasaKonstruksiBengkelFromSub2MoneyPage = {
  // 🟡 SARAN ITEM (BELUM AKTIF - PERLU DIBUAT KONTEN)
  // "https://www.betonjayareadymix.com/2018/09/jasa-konstruksi-bengkel.html": "Jasa Konstruksi Bengkel",  // TYPE: MONEY_PAGE
  // "https://www.betonjayareadymix.com/2018/09/harga-borongan-bengkel-per-m2.html": "Harga Borongan Bengkel Per M2",  // TYPE: MONEY_PAGE
};

// ============================================================
// 📁 JASA KONSTRUKSI WORKSHOP - KOSONG (SARAN ITEM)
// ============================================================

const urlMappingJasaKonstruksiWorkshopFromSub2MoneyPage = {
  // 🟡 SARAN ITEM (BELUM AKTIF - PERLU DIBUAT KONTEN)
  // "https://www.betonjayareadymix.com/2018/09/jasa-konstruksi-workshop.html": "Jasa Konstruksi Workshop",  // TYPE: MONEY_PAGE
  // "https://www.betonjayareadymix.com/2018/09/harga-borongan-workshop-per-m2.html": "Harga Borongan Workshop Per M2",  // TYPE: MONEY_PAGE
};

// ============================================================
// 📁 JASA PEMBUATAN LAPANGAN OLAHRAGA - MONEY PAGE
// 🧠 ENTITY: JASA → TYPE: MONEY_PAGE
// Parent: Jasa Konstruksi Lapangan Olahraga (SUB2)
// ============================================================

const urlMappingJasaPembuatanLapanganOlahRagaFromSub2MoneyPage = {
  // ============================================================
  // [MONEY_PAGE] - JASA PEMBUATAN LAPANGAN OLAHRAGA
  // ============================================================
  "https://www.betonjayareadymix.com/2018/09/jasa-pembuatan-lapangan-olah-raga.html": "Jasa Pembuatan Lapangan Olah Raga",  // TYPE: MONEY_PAGE
};

// ============================================================
// 📁 JASA PEMBUATAN LAPANGAN FUTSAL - MONEY PAGE & CHILD
// ============================================================

const urlMappingJasaPembuatanLapanganFutsalFromSub2MoneyPage = {
  // ============================================================
  // [MONEY_PAGE] - HARGA BUAT LAPANGAN FUTSAL
  // ============================================================
  "https://www.betonjayareadymix.com/2018/09/harga-buat-lapangan-futsal.html": "Harga Buat Lapangan Futsal",  // TYPE: MONEY_PAGE

  // ============================================================
  // [MONEY_CHILD] - JASA PEMBUATAN LAPANGAN FUTSAL PER LOKASI
  // ============================================================
  "https://www.betonjayareadymix.com/2018/11/jasa-pembuatan-lapangan-futsal-bekasi.html": "Jasa Pembuatan Lapangan Futsal Bekasi",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/11/jasa-pembuatan-lapangan-futsal-depok.html": "Jasa Pembuatan Lapangan Futsal Depok",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/11/jasa-pembuatan-lapangan-futsal-jakarta.html": "Jasa Pembuatan Lapangan Futsal Jakarta",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/11/jasa-pembuatan-lapangan-futsal-tangerang.html": "Jasa Pembuatan Lapangan Futsal Tangerang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/11/jasa-pembuatan-lapangan-futsal-bogor.html": "Jasa Pembuatan Lapangan Futsal Bogor",  // TYPE: MONEY_CHILD
};

// ============================================================
// 📁 JASA PEMBUATAN LAPANGAN BASKET - MONEY PAGE
// ============================================================

const urlMappingJasaPembuatanLapanganBasketFromSub2MoneyPage = {
  // ============================================================
  // [MONEY_PAGE] - JASA & HARGA LAPANGAN BASKET
  // ============================================================
  "https://www.betonjayareadymix.com/2018/09/harga-buat-lapangan-basket.html": "Harga Buat Lapangan Basket",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/09/jasa-pembuatan-lapangan-basket.html": "Jasa Pembuatan Lapangan Basket",  // TYPE: MONEY_PAGE
};

// ============================================================
// 📁 JASA PEMBUATAN LAPANGAN SEPAKBOLA - MONEY PAGE
// ============================================================

const urlMappingJasaPembuatanLapanganSepakbolaFromSub2MoneyPage = {
  // ============================================================
  // [MONEY_PAGE] - JASA & HARGA LAPANGAN MINI SOCCER
  // ============================================================
  "https://www.betonjayareadymix.com/2018/09/harga-buat-lapangan-mini-soccer.html": "Harga Buat Lapangan Mini Soccer",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/09/jasa-pembuatan-lapangan-mini-soccer.html": "Jasa Pembuatan Lapangan Mini Soccer",  // TYPE: MONEY_PAGE
};

// ============================================================
// 📁 JASA PEMBUATAN LAPANGAN TENIS - MONEY PAGE
// ============================================================

const urlMappingJasaPembuatanLapanganTenisFromSub2MoneyPage = {
  // ============================================================
  // [MONEY_PAGE] - HARGA BUAT LAPANGAN TENIS
  // ============================================================
  "https://www.betonjayareadymix.com/2018/09/harga-buat-lapangan-tenis.html": "Harga Buat Lapangan Tenis",  // TYPE: MONEY_PAGE
};

// ============================================================
// 📁 JASA PEMBUATAN LAPANGAN BADMINTON - MONEY PAGE
// ============================================================

const urlMappingJasaPembuatanLapanganBadmintonFromSub2MoneyPage = {
  // ============================================================
  // [MONEY_PAGE] - HARGA BUAT LAPANGAN BADMINTON
  // ============================================================
  "https://www.betonjayareadymix.com/2018/09/harga-buat-lapangan-badminton.html": "Harga Buat Lapangan Badminton",  // TYPE: MONEY_PAGE
};

// ============================================================
// 📁 JASA PEMBUATAN LAPANGAN VOLI - MONEY PAGE & CHILD
// ============================================================

const urlMappingJasaPembuatanLapanganVoliFromSub2MoneyPage = {
  // ============================================================
  // [MONEY_PAGE] - JASA & HARGA LAPANGAN VOLI
  // ============================================================
  "https://www.betonjayareadymix.com/2018/09/harga-buat-lapangan-voli.html": "Harga Buat Lapangan Voli",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/09/jasa-pembuatan-lapangan-voli.html": "Jasa Pembuatan Lapangan Voli",  // TYPE: MONEY_PAGE

  // ============================================================
  // [MONEY_CHILD] - JASA PEMBUATAN LAPANGAN VOLI PER LOKASI
  // ============================================================
  "https://www.betonjayareadymix.com/2018/11/jasa-pembuatan-lapangan-voli-depok.html": "Jasa Pembuatan Lapangan Voli Depok",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/11/jasa-pembuatan-lapangan-voli-tangerang.html": "Jasa Pembuatan Lapangan Voli Tangerang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/11/jasa-pembuatan-lapangan-voli-jakarta.html": "Jasa Pembuatan Lapangan Voli Jakarta",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/11/jasa-pembuatan-lapangan-voli-bekasi.html": "Jasa Pembuatan Lapangan Voli Bekasi",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/11/jasa-pembuatan-lapangan-voli-bogor.html": "Jasa Pembuatan Lapangan Voli Bogor",  // TYPE: MONEY_CHILD
};

// ============================================================
// 📁 JASA PEMBUATAN LAPANGAN SERBAGUNA - KOSONG (SARAN ITEM)
// ============================================================

const urlMappingJasaPembuatanLapanganSerbagunaFromSub2MoneyPage = {
  // 🟡 SARAN ITEM (BELUM AKTIF - PERLU DIBUAT KONTEN)
  // "https://www.betonjayareadymix.com/2018/09/jasa-pembuatan-lapangan-serbaguna.html": "Jasa Pembuatan Lapangan Serbaguna",  // TYPE: MONEY_PAGE
  // "https://www.betonjayareadymix.com/2018/09/harga-buat-lapangan-serbaguna.html": "Harga Buat Lapangan Serbaguna",  // TYPE: MONEY_PAGE
};

// ============================================================
// 📁 JASA PEMBUATAN KOLAM RENANG - MONEY PAGE & CHILD
// 🧠 ENTITY: JASA → TYPE: MONEY_PAGE & MONEY_CHILD
// Parent: Jasa Struktur Khusus (SUB2)
// ============================================================

const urlMappingJasaPembuatanKolamRenangFromSub2MoneyPage = {
  // ============================================================
  // [MONEY_PAGE] - JASA & KONTRAKTOR KOLAM RENANG
  // ============================================================
  "https://www.betonjayareadymix.com/2018/09/kontraktor-kolam-renang.html": "Kontraktor Kolam Renang",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/09/jasa-kolam-renang.html": "Jasa Kolam Renang",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/09/kontraktor-waterpark-indonesia.html": "Kontraktor Waterpark Indonesia",  // TYPE: MONEY_PAGE

  // ============================================================
  // [MONEY_PAGE] - HARGA PEMBUATAN KOLAM RENANG
  // ============================================================
  "https://www.betonjayareadymix.com/2018/09/biaya-bangun-kolam-renang-per-meter.html": "Biaya Bangun Kolam Renang Per Meter",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/09/harga-jasa-pembuatan-waterpark-kolam-renang.html": "Harga Jasa Pembuatan Waterpark Kolam Renang",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/09/harga-jasa-pembuatan-wahana-kolam-renang.html": "Harga Jasa Pembuatan Wahana Kolam Renang",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/09/harga-pembuatan-kolam-renang-per-m2.html": "Harga Pembuatan Kolam Renang Per M2",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/09/harga-jasa-borongan-tenaga-bikin-kolam-renang.html": "Harga Jasa Borongan Tenaga Bikin Kolam Renang",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/09/harga-jasa-pembuatan-kolam-renang.html": "Harga Jasa Pembuatan Kolam Renang",  // TYPE: MONEY_PAGE

  // ============================================================
  // [MONEY_CHILD] - JASA KOLAM RENANG PER LOKASI
  // ============================================================
  "https://www.betonjayareadymix.com/2018/11/jasa-kolam-renang-ciamis.html": "Jasa Kolam Renang Ciamis",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/11/jasa-kolam-renang-kuningan.html": "Jasa Kolam Renang Kuningan",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/11/jasa-kolam-renang-cirebon.html": "Jasa Kolam Renang Cirebon",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/11/jasa-kolam-renang-garut.html": "Jasa Kolam Renang Garut",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/11/jasa-kolam-renang-purwakarta.html": "Jasa Kolam Renang Purwakarta",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/11/jasa-kolam-renang-sukabumi.html": "Jasa Kolam Renang Sukabumi",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/11/jasa-kolam-renang-cianjur.html": "Jasa Kolam Renang Cianjur",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/11/jasa-kolam-renang-bandung.html": "Jasa Kolam Renang Bandung",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/11/jasa-kolam-renang-depok.html": "Jasa Kolam Renang Depok",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/11/jasa-kolam-renang-tangerang.html": "Jasa Kolam Renang Tangerang",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/11/jasa-kolam-renang-jakarta.html": "Jasa Kolam Renang Jakarta",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/11/jasa-kolam-renang-bekasi.html": "Jasa Kolam Renang Bekasi",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/11/jasa-kolam-renang-bogor.html": "Jasa Kolam Renang Bogor",  // TYPE: MONEY_CHILD
};

// ============================================================
// 📁 JASA PEMBUATAN KOLAM IKAN - KOSONG (SARAN ITEM)
// ============================================================

const urlMappingJasaPembuatanKolamIkanFromSub2MoneyPage = {
  // 🟡 SARAN ITEM (BELUM AKTIF - PERLU DIBUAT KONTEN)
  // "https://www.betonjayareadymix.com/2018/09/jasa-pembuatan-kolam-ikan.html": "Jasa Pembuatan Kolam Ikan",  // TYPE: MONEY_PAGE
  // "https://www.betonjayareadymix.com/2018/09/harga-buat-kolam-ikan-per-meter.html": "Harga Buat Kolam Ikan Per Meter",  // TYPE: MONEY_PAGE
};

// ============================================================
// 📁 JASA SEPTIC TANK BETON - KOSONG (SARAN ITEM)
// ============================================================

const urlMappingJasaSepticTankBetonFromSub2MoneyPage = {
  // 🟡 SARAN ITEM (BELUM AKTIF - PERLU DIBUAT KONTEN)
  // "https://www.betonjayareadymix.com/2018/09/jasa-septic-tank-beton.html": "Jasa Septic Tank Beton",  // TYPE: MONEY_PAGE
  // "https://www.betonjayareadymix.com/2018/09/harga-buat-septic-tank-beton.html": "Harga Buat Septic Tank Beton",  // TYPE: MONEY_PAGE
};

// ============================================================
// 📁 JASA PEMBUATAN TANGKI AIR - KOSONG (SARAN ITEM)
// ============================================================

const urlMappingJasaPembuatanTangkiAirFromSub2MoneyPage = {
  // 🟡 SARAN ITEM (BELUM AKTIF - PERLU DIBUAT KONTEN)
  // "https://www.betonjayareadymix.com/2018/09/jasa-pembuatan-tangki-air.html": "Jasa Pembuatan Tangki Air",  // TYPE: MONEY_PAGE
  // "https://www.betonjayareadymix.com/2018/09/harga-buat-tangki-air-beton.html": "Harga Buat Tangki Air Beton",  // TYPE: MONEY_PAGE
};

// ============================================================
// 📁 JASA PEMBUATAN BAK PENAMPUNGAN - KOSONG (SARAN ITEM)
// ============================================================

const urlMappingJasaPembuatanBakPenampunganFromSub2MoneyPage = {
  // 🟡 SARAN ITEM (BELUM AKTIF - PERLU DIBUAT KONTEN)
  // "https://www.betonjayareadymix.com/2018/09/jasa-pembuatan-bak-penampungan.html": "Jasa Pembuatan Bak Penampungan",  // TYPE: MONEY_PAGE
  // "https://www.betonjayareadymix.com/2018/09/harga-buat-bak-penampungan-beton.html": "Harga Buat Bak Penampungan Beton",  // TYPE: MONEY_PAGE
};

// ============================================================
// 📁 JASA KONSTRUKSI MENARA AIR - KOSONG (SARAN ITEM)
// ============================================================

const urlMappingJasaKonstruksiMenaraAirFromSub2MoneyPage = {
  // 🟡 SARAN ITEM (BELUM AKTIF - PERLU DIBUAT KONTEN)
  // "https://www.betonjayareadymix.com/2018/09/jasa-konstruksi-menara-air.html": "Jasa Konstruksi Menara Air",  // TYPE: MONEY_PAGE
  // "https://www.betonjayareadymix.com/2018/09/harga-buat-menara-air-beton.html": "Harga Buat Menara Air Beton",  // TYPE: MONEY_PAGE
};

// ============================================================
// 🔴 BREADCRUMB SKIP LEVEL NOTES
// ============================================================
/*
📌 BREADCRUMB SKIP LEVEL YANG DIPERBOLEHKAN:

Untuk semua MONEY_PAGE, MONEY_CHILD di atas:
- Skip: Jasa Struktur Konstruksi (SUB2)
- Skip: Jasa Konstruksi Gedung dan Hunian (SUB2)
- Skip: Jasa Konstruksi Industri dan Gudang (SUB2)

Breadcrumb yang benar:
Home > Jasa Struktur Baja > Harga Borongan Baja Ringan (3 level)
Home > Jasa Beton > Harga Borongan Cor Beton Jakarta (3 level)
Home > Jasa Gedung > Jasa Bangun Rumah Depok (3 level)

✅ SEMUA URL di atas sudah valid sebagai MONEY_PAGE / MONEY_CHILD
✅ Tidak ada duplikasi konten berisiko tinggi
✅ Aman untuk SEO
*/

// ============================================================
// 📋 RINGKASAN TYPE YANG DIGUNAKAN
// ============================================================
/*
Type            Jumlah Item   Keterangan
SUB2             4            Halaman kategori (Jasa Struktur Baja, Beton, dll)
MONEY_PAGE       ~80          Halaman jasa transaksional umum
MONEY_CHILD      ~70          Halaman jasa spesifik lokasi
KOSONG (saran)   ~15          Perlu dibuat kontennya

✅ ENTITY TYPE: JASA - semua MONEY_PAGE dan MONEY_CHILD VALID
❌ Tidak ada MONEY_MASTER (JASA tidak boleh pakai MONEY_MASTER)
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
		urlMappingJasaRangkaAtapBajaRinganFromSub2MoneyPage,
		urlMappingJasaKonstruksiBajaKonvensionalFromSub2MoneyPage,
		urlMappingJasaKanopiBajadanBesiFromSub2MoneyPage,
		urlMappingJasaStrukturBajaGudangFromSub2MoneyPage,
		urlMappingJasaCorBetonFromSub2MoneyPage,
		urlMappingJasaPengecoranLantaiDakFromSub2MoneyPage,
		urlMappingJasaPengecoranLantaiGudangFromSub2MoneyPage,
		urlMappingJasaBekistingdanPembesianFromSub2MoneyPage,
		urlMappingJasaPengecoranKolomBetonFromSub2MoneyPage,
		urlMappingJasaKonstruksiGedungHunianFromSub2MoneyPage,
		urlMappingJasaKonstruksiRumahTinggalFromSub2MoneyPage,
		urlMappingJasaKonstruksiRukodanKiosFromSub2MoneyPage,
		urlMappingJasaKonstruksiVillaFromSub2MoneyPage,
		urlMappingJasaKonstruksiApartemenFromSub2MoneyPage,
		urlMappingJasaKonstruksiHotelFromSub2MoneyPage,
		urlMappingJasaKonstruksiPerkantoranFromSub2MoneyPage,
		urlMappingJasaKonstruksiGedungSekolahFromSub2MoneyPage,
		urlMappingJasaKonstruksiGedungRumahSakitFromSub2MoneyPage,
		urlMappingJasaKonstruksiGudangLogistikFromSub2MoneyPage,
		urlMappingJasaKonstruksiPabrikFromSub2MoneyPage,
		urlMappingJasaKonstruksiColdStorageFromSub2MoneyPage,
		urlMappingJasaKonstruksiBengkelFromSub2MoneyPage,
		urlMappingJasaKonstruksiWorkshopFromSub2MoneyPage,
		urlMappingJasaPembuatanLapanganOlahRagaFromSub2MoneyPage,
		urlMappingJasaPembuatanLapanganFutsalFromSub2MoneyPage,
		urlMappingJasaPembuatanLapanganBasketFromSub2MoneyPage,
		urlMappingJasaPembuatanLapanganSepakbolaFromSub2MoneyPage,
		urlMappingJasaPembuatanLapanganTenisFromSub2MoneyPage,
		urlMappingJasaPembuatanLapanganBadmintonFromSub2MoneyPage,
		urlMappingJasaPembuatanLapanganVoliFromSub2MoneyPage,
		urlMappingJasaPembuatanLapanganSerbagunaFromSub2MoneyPage,
		urlMappingJasaPembuatanKolamRenangFromSub2MoneyPage,
		urlMappingJasaPembuatanKolamIkanFromSub2MoneyPage,
		urlMappingJasaSepticTankBetonFromSub2MoneyPage,
		urlMappingJasaPembuatanTangkiAirFromSub2MoneyPage,
		urlMappingJasaPembuatanBakPenampunganFromSub2MoneyPage,
		urlMappingJasaKonstruksiMenaraAirFromSub2MoneyPage
		
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
if (urlMappingJasaRangkaAtapBajaRinganFromSub2MoneyPage[cleanUrlJasaJasaKonsStrukturPost]) {
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
        pageNameJasaKonsStrukturPost.textContent = urlMappingJasaRangkaAtapBajaRinganFromSub2MoneyPage[cleanUrlJasaJasaKonsStrukturPost];
    }
// ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaRangkaAtapBajaRinganFromSub2MoneyPage[cleanUrlJasaJasaKonsStrukturPost]) {
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
                   "name": urlMappingJasaRangkaAtapBajaRinganFromSub2MoneyPage[cleanUrlJasaJasaKonsStrukturPost],
                   "item": cleanUrlJasaJasaKonsStrukturPost
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
	
if (urlMappingJasaKonstruksiBajaKonvensionalFromSub2MoneyPage[cleanUrlJasaJasaKonsStrukturPost]) {
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
        pageNameJasaKonsStrukturPost.textContent = urlMappingJasaKonstruksiBajaKonvensionalFromSub2MoneyPage[cleanUrlJasaJasaKonsStrukturPost];
    }

// ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaKonstruksiBajaKonvensionalFromSub2MoneyPage[cleanUrlJasaJasaKonsStrukturPost]) {
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
                   "name": urlMappingJasaKonstruksiBajaKonvensionalFromSub2MoneyPage[cleanUrlJasaJasaKonsStrukturPost],
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
if (urlMappingJasaCorBetonFromSub2MoneyPage[cleanUrlJasaJasaKonsStrukturPost]) {
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
        pageNameJasaKonsStrukturPost.textContent = urlMappingJasaCorBetonFromSub2MoneyPage[cleanUrlJasaJasaKonsStrukturPost];
    } 
// ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaCorBetonFromSub2MoneyPage[cleanUrlJasaJasaKonsStrukturPost]) {
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
                   "name": urlMappingJasaCorBetonFromSub2MoneyPage[cleanUrlJasaJasaKonsStrukturPost],
                   "item": cleanUrlJasaJasaKonsStrukturPost
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }

if (urlMappingJasaPengecoranLantaiDakFromSub2MoneyPage[cleanUrlJasaJasaKonsStrukturPost]) {
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
        pageNameJasaKonsStrukturPost.textContent = urlMappingJasaPengecoranLantaiDakFromSub2MoneyPage[cleanUrlJasaJasaKonsStrukturPost];
    } 

// ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaPengecoranLantaiDakFromSub2MoneyPage[cleanUrlJasaJasaKonsStrukturPost]) {
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
                   "name": urlMappingJasaPengecoranLantaiDakFromSub2MoneyPage[cleanUrlJasaJasaKonsStrukturPost],
                   "item": cleanUrlJasaJasaKonsStrukturPost
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
if (urlMappingJasaPengecoranKolomBetonFromSub2MoneyPage[cleanUrlJasaJasaKonsStrukturPost]) {
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
        pageNameJasaKonsStrukturPost.textContent = urlMappingJasaPengecoranKolomBetonFromSub2MoneyPage[cleanUrlJasaJasaKonsStrukturPost];
    } 
// ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaPengecoranKolomBetonFromSub2MoneyPage[cleanUrlJasaJasaKonsStrukturPost]) {
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
                   "name": urlMappingJasaPengecoranKolomBetonFromSub2MoneyPage[cleanUrlJasaJasaKonsStrukturPost],
                   "item": cleanUrlJasaJasaKonsStrukturPost
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
if (urlMappingJasaBekistingdanPembesianFromSub2MoneyPage[cleanUrlJasaJasaKonsStrukturPost]) {
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
        pageNameJasaKonsStrukturPost.textContent = urlMappingJasaBekistingdanPembesianFromSub2MoneyPage[cleanUrlJasaJasaKonsStrukturPost];
    } 

// ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaBekistingdanPembesianFromSub2MoneyPage[cleanUrlJasaJasaKonsStrukturPost]) {
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
                   "name": urlMappingJasaBekistingdanPembesianFromSub2MoneyPage[cleanUrlJasaJasaKonsStrukturPost],
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

if (urlMappingJasaKonstruksiGedungHunianFromSub2MoneyPage[cleanUrlJasaJasaKonsStrukturPost]) {
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
        pageNameJasaKonsStrukturPost.textContent = urlMappingJasaKonstruksiGedungHunianFromSub2MoneyPage[cleanUrlJasaJasaKonsStrukturPost];
    }
// ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaKonstruksiGedungHunianFromSub2MoneyPage[cleanUrlJasaJasaKonsStrukturPost]) {
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
                   "name": urlMappingJasaKonstruksiGedungHunianFromSub2MoneyPage[cleanUrlJasaJasaKonsStrukturPost],
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
if (urlMappingJasaKonstruksiRumahTinggalFromSub2MoneyPage[cleanUrlJasaJasaKonsStrukturPost]) {
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
        pageNameJasaKonsStrukturPost.textContent = urlMappingJasaKonstruksiRumahTinggalFromSub2MoneyPage[cleanUrlJasaJasaKonsStrukturPost];
    }
// ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaKonstruksiRumahTinggalFromSub2MoneyPage[cleanUrlJasaJasaKonsStrukturPost]) {
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
                   "name": urlMappingJasaKonstruksiRumahTinggalFromSub2MoneyPage[cleanUrlJasaJasaKonsStrukturPost],
                   "item": cleanUrlJasaJasaKonsStrukturPost
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
if (urlMappingJasaKonstruksiRukodanKiosFromSub2MoneyPage[cleanUrlJasaJasaKonsStrukturPost]) {
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
        pageNameJasaKonsStrukturPost.textContent = urlMappingJasaKonstruksiRukodanKiosFromSub2MoneyPage[cleanUrlJasaJasaKonsStrukturPost];
    }

// ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaKonstruksiRukodanKiosFromSub2MoneyPage[cleanUrlJasaJasaKonsStrukturPost]) {
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
                   "name": urlMappingJasaKonstruksiRukodanKiosFromSub2MoneyPage[cleanUrlJasaJasaKonsStrukturPost],
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
if (urlMappingJasaKonstruksiGudangLogistikFromSub2MoneyPage[cleanUrlJasaJasaKonsStrukturPost]) {
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
        pageNameJasaKonsStrukturPost.textContent = urlMappingJasaKonstruksiGudangLogistikFromSub2MoneyPage[cleanUrlJasaJasaKonsStrukturPost];
    }
// ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaKonstruksiGudangLogistikFromSub2MoneyPage[cleanUrlJasaJasaKonsStrukturPost]) {
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
                   "name": urlMappingJasaKonstruksiGudangLogistikFromSub2MoneyPage[cleanUrlJasaJasaKonsStrukturPost],
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
if (urlMappingJasaKonstruksiPabrikFromSub2MoneyPage[cleanUrlJasaJasaKonsStrukturPost]) {
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
        pageNameJasaKonsStrukturPost.textContent = urlMappingJasaKonstruksiPabrikFromSub2MoneyPage[cleanUrlJasaJasaKonsStrukturPost];
    }
// ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaKonstruksiPabrikFromSub2MoneyPage[cleanUrlJasaJasaKonsStrukturPost]) {
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
                   "name": urlMappingJasaKonstruksiPabrikFromSub2MoneyPage[cleanUrlJasaJasaKonsStrukturPost],
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
if (urlMappingJasaPembuatanLapanganOlahRagaFromSub2MoneyPage[cleanUrlJasaJasaKonsStrukturPost]) {
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
        pageNameJasaKonsStrukturPost.textContent = urlMappingJasaPembuatanLapanganOlahRagaFromSub2MoneyPage[cleanUrlJasaJasaKonsStrukturPost];
    }

// ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaPembuatanLapanganOlahRagaFromSub2MoneyPage[cleanUrlJasaJasaKonsStrukturPost]) {
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
                   "name": urlMappingJasaPembuatanLapanganOlahRagaFromSub2MoneyPage[cleanUrlJasaJasaKonsStrukturPost],
                   "item": cleanUrlJasaJasaKonsStrukturPost
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
if (urlMappingJasaPembuatanLapanganFutsalFromSub2MoneyPage[cleanUrlJasaJasaKonsStrukturPost]) {
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
        pageNameJasaKonsStrukturPost.textContent = urlMappingJasaPembuatanLapanganFutsalFromSub2MoneyPage[cleanUrlJasaJasaKonsStrukturPost];
    }
// ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaPembuatanLapanganFutsalFromSub2MoneyPage[cleanUrlJasaJasaKonsStrukturPost]) {
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
                   "name": urlMappingJasaPembuatanLapanganFutsalFromSub2MoneyPage[cleanUrlJasaJasaKonsStrukturPost],
                   "item": cleanUrlJasaJasaKonsStrukturPost
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
if (urlMappingJasaPembuatanLapanganTenisFromSub2MoneyPage[cleanUrlJasaJasaKonsStrukturPost]) {
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
        pageNameJasaKonsStrukturPost.textContent = urlMappingJasaPembuatanLapanganTenisFromSub2MoneyPage[cleanUrlJasaJasaKonsStrukturPost];
    }

// ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaPembuatanLapanganTenisFromSub2MoneyPage[cleanUrlJasaJasaKonsStrukturPost]) {
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
                   "name": urlMappingJasaPembuatanLapanganTenisFromSub2MoneyPage[cleanUrlJasaJasaKonsStrukturPost],
                   "item": cleanUrlJasaJasaKonsStrukturPost
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
if (urlMappingJasaPembuatanLapanganBadmintonFromSub2MoneyPage[cleanUrlJasaJasaKonsStrukturPost]) {
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
        pageNameJasaKonsStrukturPost.textContent = urlMappingJasaPembuatanLapanganBadmintonFromSub2MoneyPage[cleanUrlJasaJasaKonsStrukturPost];
    }
// ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaPembuatanLapanganBadmintonFromSub2MoneyPage[cleanUrlJasaJasaKonsStrukturPost]) {
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
                   "name": urlMappingJasaPembuatanLapanganBadmintonFromSub2MoneyPage[cleanUrlJasaJasaKonsStrukturPost],
                   "item": cleanUrlJasaJasaKonsStrukturPost
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
if (urlMappingJasaPembuatanLapanganBasketFromSub2MoneyPage[cleanUrlJasaJasaKonsStrukturPost]) {
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
        pageNameJasaKonsStrukturPost.textContent = urlMappingJasaPembuatanLapanganBasketFromSub2MoneyPage[cleanUrlJasaJasaKonsStrukturPost];
    }

// ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaPembuatanLapanganBasketFromSub2MoneyPage[cleanUrlJasaJasaKonsStrukturPost]) {
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
                   "name": urlMappingJasaPembuatanLapanganBasketFromSub2MoneyPage[cleanUrlJasaJasaKonsStrukturPost],
                   "item": cleanUrlJasaJasaKonsStrukturPost
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
if (urlMappingJasaPembuatanLapanganSepakbolaFromSub2MoneyPage[cleanUrlJasaJasaKonsStrukturPost]) {
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
        pageNameJasaKonsStrukturPost.textContent = urlMappingJasaPembuatanLapanganSepakbolaFromSub2MoneyPage[cleanUrlJasaJasaKonsStrukturPost];
    }
// ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaPembuatanLapanganSepakbolaFromSub2MoneyPage[cleanUrlJasaJasaKonsStrukturPost]) {
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
                   "name": urlMappingJasaPembuatanLapanganSepakbolaFromSub2MoneyPage[cleanUrlJasaJasaKonsStrukturPost],
                   "item": cleanUrlJasaJasaKonsStrukturPost
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
if (urlMappingJasaPembuatanLapanganVoliFromSub2MoneyPage[cleanUrlJasaJasaKonsStrukturPost]) {
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
        pageNameJasaKonsStrukturPost.textContent = urlMappingJasaPembuatanLapanganVoliFromSub2MoneyPage[cleanUrlJasaJasaKonsStrukturPost];
    }

// ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaPembuatanLapanganVoliFromSub2MoneyPage[cleanUrlJasaJasaKonsStrukturPost]) {
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
                   "name": urlMappingJasaPembuatanLapanganVoliFromSub2MoneyPage[cleanUrlJasaJasaKonsStrukturPost],
                   "item": cleanUrlJasaJasaKonsStrukturPost
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }
if (urlMappingJasaPembuatanLapanganSerbagunaFromSub2MoneyPage[cleanUrlJasaJasaKonsStrukturPost]) {
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
        pageNameJasaKonsStrukturPost.textContent = urlMappingJasaPembuatanLapanganSerbagunaFromSub2MoneyPage[cleanUrlJasaJasaKonsStrukturPost];
    }
// ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaPembuatanLapanganSerbagunaFromSub2MoneyPage[cleanUrlJasaJasaKonsStrukturPost]) {
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
                   "name": urlMappingJasaPembuatanLapanganSerbagunaFromSub2MoneyPage[cleanUrlJasaJasaKonsStrukturPost],
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
if (urlMappingJasaPembuatanKolamRenangFromSub2MoneyPage[cleanUrlJasaJasaKonsStrukturPost]) {
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
        pageNameJasaKonsStrukturPost.textContent = urlMappingJasaPembuatanKolamRenangFromSub2MoneyPage[cleanUrlJasaJasaKonsStrukturPost];
    }

// ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingJasaPembuatanKolamRenangFromSub2MoneyPage[cleanUrlJasaJasaKonsStrukturPost]) {
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
                   "name": urlMappingJasaPembuatanKolamRenangFromSub2MoneyPage[cleanUrlJasaJasaKonsStrukturPost],
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
