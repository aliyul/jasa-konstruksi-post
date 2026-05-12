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

const urlMappingStrukturPostFromSub1MoneyPage = {
  // ============================================================
  // [MONEY_PAGE] - JASA PASANG ATAP & KANOPI BAJA RINGAN
  // 🧠 TYPE: MONEY_PAGE (JASA, bukan MONEY_MASTER)
  // ============================================================
  "https://www.betonjayareadymix.com/2018/09/jasa-pasang-atap-baja-ringan.html": "Jasa Pasang Atap Baja Ringan",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/09/jasa-atap-baja-ringan.html": "Jasa Atap Baja Ringan",  // TYPE: MONEY_PAGE
  "https://www.betonjayareadymix.com/2018/09/tukang-baja-ringan.html": "Tukang Baja Ringan",  // TYPE: MONEY_PAGE
  
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
  "https://www.betonjayareadymix.com/2018/09/tukang-baja-ringan-murah.html": "Tukang Baja Ringan Murah"  // TYPE: MONEY_PAGE
};
const urlMappingJasaRangkaAtapBajaRinganFromSub2MoneyPageMoneyChild = {
  // ============================================================
  // [MONEY_PAGE] - JASA PASANG ATAP & KANOPI BAJA RINGAN
  
  // ============================================================
  // [MONEY_CHILD] - JASA PASANG KANOPI BAJA RINGAN PER LOKASI
  // ============================================================
  "https://www.betonjayareadymix.com/2018/09/jasa-pasang-kanopi-baja-ringan-terdekat.html": "Jasa Pasang Kanopi Baja Ringan Terdekat",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/09/jasa-pasang-baja-ringan-terdekat.html": "Jasa Pasang Baja Ringan Terdekat",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2018/09/tukang-baja-ringan-terdekat.html": "Tukang Baja Ringan Terdekat",  // TYPE: MONEY_CHILD

  // ============================================================
  // [MONEY_CHILD] - HARGA BORONGAN BAJA RINGAN PER LOKASI
  // ============================================================
  "https://www.betonjayareadymix.com/2019/05/harga-borongan-baja-ringan-plus-material-bandung.html": "Harga Borongan Baja Ringan Plus Material Bandung",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/05/harga-borongan-baja-ringan-plus-material-jakarta.html": "Harga Borongan Baja Ringan Plus Material Jakarta",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/05/harga-borongan-baja-ringan-plus-material-depok.html": "Harga Borongan Baja Ringan Plus Material Depok",  // TYPE: MONEY_CHILD
  "https://www.betonjayareadymix.com/2019/05/harga-borongan-baja-ringan-plus-material-kota-bekasi.html": "Harga Borongan Baja Ringan Plus Material Kota Bekasi"  // TYPE: MONEY_CHILD
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
/**
 * generateBreadcrumbForMapping v5.6 — COMPLETE PHASE SYSTEM WITH ENTITY PILLAR EXACT MATCH
 * ✅ FIX: ENTITY PILLAR hanya EXACT MATCH (BUKAN partial match)
 * ✅ FIX: "jasa konstruksi" → PILLAR (L1)
 * ✅ FIX: "jasa konstruksi gedung sekolah" → MONEY_PAGE (L5) BUKAN pillar
 * ✅ FIX: "Sewa Alat Konstruksi" → PILLAR (L1)
 * ✅ FIX: "Produk Konstruksi", "Produk Interior" → PILLAR (L1)
 * ✅ FIX: "Material Konstruksi" → PILLAR (L1)
 * ✅ ENTITY PILLAR KEYWORDS untuk setiap entity type (EXACT MATCH)
 * ✅ SINKRON DENGAN Page Level Detector v18.5 dan AUTO-SCHEMA v5.7
 * ✅ PRIORITAS DETEKSI:
 *    0. HOMEPAGE
 *    1. ENTITY PILLAR (EXACT MATCH) 🔥
 *    2. INFORMASIONAL (panduan, cara, tips) → PILLAR
 *    3. PERBANDINGAN (vs, versus) → SP1
 *    4. JENIS/MACAM/DAFTAR (jenis, macam, daftar) → SP2
 *    5. KEYWORD HARGA/SEWA → MONEY (dengan cek lokasi terlebih dahulu)
 *    6. JASA/SEWA (tanpa keyword harga & bukan entity pillar) → MONEY_PAGE
 *    7. SUB-VARIANT
 *    8. VARIANT
 *    9. DEFAULT → PILLAR
 * 
 * @version 5.6.0
 * @date 2026-01-15
 */

function generateBreadcrumbJasaKonstruksiStrukturPost(mappingObj, currentUrl, breadcrumbItems = [], entityType = 'PRODUK_INTERIOR') {
    
    // ============================================================
    // 1. KONSTANTA & VALIDASI
    // ============================================================
    const MAX_LEVEL = 4;
    const DOMAIN = 'https://www.betonjayareadymix.com';
    const CURRENT_YEAR = new Date().getFullYear();
    
    const validEntityTypes = [
        'PRODUK_KONSTRUKSI', 'PRODUK_INTERIOR', 'PRODUK',
        'MATERIAL_KONSTRUKSI', 'MATERIAL',
        'JASA_KONSTRUKSI', 'JASA_DESAIN_INTERIOR', 'JASA',
        'SEWA', 'RENTAL', 'SEWA_RENTAL', 'SEWA_ALAT', 'RENTAL_ALAT',
        'ARTIKEL'
    ];
    
    if (!validEntityTypes.includes(entityType)) {
        console.error(`❌ ERROR: "${entityType}" BUKAN ENTITY TYPE yang valid!`);
        console.error(`   Gunakan: ${validEntityTypes.join(', ')}`);
        return null;
    }
    
    // HIERARKI LEVEL (9 level termasuk Home)
    const VALID_PAGE_TYPES = [
        'home',                      // Level 0 - HOMEPAGE
        'pillar',                    // Level 1 - PILLAR
        'sub-pillar-tipe-2',         // Level 2 - JENIS/MACAM/DAFTAR
        'sub-pillar-tipe-1',         // Level 3 - PERBANDINGAN
        'money-master',              // Level 4 - HARGA NASIONAL
        'money-page',                // Level 5 - HARGA PRODUK SPESIFIK / JASA
        'money-child',               // Level 6 - HARGA + LOKASI
        'variant',                   // Level 7 - SPESIFIKASI
        'sub-variant'                // Level 8 - DETAIL TEKNIS
    ];
    
    const TYPE_LEVEL_MAP = {
        'home': 0,
        'pillar': 1,
        'sub-pillar-tipe-2': 2,
        'sub-pillar-tipe-1': 3,
        'money-master': 4,
        'money-page': 5,
        'money-child': 6,
        'variant': 7,
        'sub-variant': 8
    };
    
    // ============================================================
    // 2. ENTITY TYPE HELPERS
    // ============================================================
    function isJasaEntity() {
        return ['JASA_KONSTRUKSI', 'JASA_DESAIN_INTERIOR', 'JASA'].includes(entityType);
    }
    
    function isSewaEntity() {
        return ['SEWA', 'RENTAL', 'SEWA_RENTAL', 'SEWA_ALAT', 'RENTAL_ALAT'].includes(entityType);
    }
    
    function isProdukEntity() {
        return ['PRODUK_KONSTRUKSI', 'PRODUK_INTERIOR', 'PRODUK'].includes(entityType);
    }
    
    function isMaterialEntity() {
        return ['MATERIAL_KONSTRUKSI', 'MATERIAL'].includes(entityType);
    }
    
    // ============================================================
    // 3. FUNGSI GET CLEAN PAGE NAME FROM URL 🔥
    // ============================================================
    function getCleanPageNameFromUrl(url) {
        if (!url) return '';
        
        let path = url;
        
        // Hapus domain jika ada
        path = path.replace(/^https?:\/\/[^\/]+/, '');
        
        // Hapus parameter query
        path = path.split('?')[0];
        
        // Hapus ekstensi .html, .php, .asp, .jsp
        path = path.replace(/\.(html|php|asp|jsp)$/i, '');
        
        // Hapus /p/ prefix (blogspot style)
        path = path.replace(/^\/p\//, '');
        
        // Hapus pola tanggal (tahun/bulan) seperti /2025/03/ atau /2025/
        path = path.replace(/\/\d{4}\/\d{2}\/\d{2}\//g, '/');
        path = path.replace(/\/\d{4}\/\d{2}\//g, '/');
        path = path.replace(/\/\d{4}\//g, '/');
        path = path.replace(/\/\d{2}\//g, '/');
        
        // Split path dan filter
        const pathParts = path.split('/');
        const cleanedParts = pathParts.filter(part => {
            // Hapus angka tahun (4 digit)
            if (/^\d{4}$/.test(part)) return false;
            // Hapus angka bulan (2 digit)
            if (/^\d{2}$/.test(part)) return false;
            // Hapus part kosong atau index
            if (part === '' || part === 'index') return false;
            return true;
        });
        
        // Ambil bagian terakhir dari path (nama halaman)
        let pageName = cleanedParts.pop() || '';
        
        // Konversi tanda hubung ke spasi
        pageName = pageName.replace(/-/g, ' ');
        
        // Hapus karakter yang tidak perlu (hanya huruf, angka, spasi)
        pageName = pageName.replace(/[^a-z0-9\s]/gi, '');
        
        // Hapus multiple spaces
        pageName = pageName.replace(/\s+/g, ' ').trim();
        
        return pageName;
    }
    
    // ============================================================
    // 4. ENTITY PILLAR KEYWORDS (EXACT MATCH ONLY) 🔥
    // ============================================================
    const ENTITY_PILLAR_KEYWORDS = {
        'JASA_KONSTRUKSI': ['jasa konstruksi', 'layanan konstruksi', 'jasa bangunan', 'jasa kontraktor', 'jasa pemborong', 'jasa renovasi'],
        'JASA_DESAIN_INTERIOR': ['jasa desain interior', 'jasa interior', 'desain interior'],
        'JASA': ['jasa konstruksi', 'layanan konstruksi', 'jasa bangunan', 'jasa kontraktor', 'jasa pemborong', 'jasa renovasi'],
        
        'SEWA': ['sewa alat konstruksi', 'sewa alat berat', 'rental alat berat', 'sewa alat bangunan', 'rental konstruksi', 'sewa excavator'],
        'RENTAL': ['rental alat berat', 'sewa alat konstruksi'],
        'SEWA_RENTAL': ['sewa alat konstruksi', 'rental alat berat'],
        'SEWA_ALAT': ['sewa alat konstruksi', 'sewa alat berat'],
        'RENTAL_ALAT': ['rental alat berat', 'sewa alat konstruksi'],
        
        'PRODUK_KONSTRUKSI': ['produk konstruksi', 'produk bangunan', 'produk interior'],
        'PRODUK_INTERIOR': ['produk interior', 'furniture', 'perabot rumah', 'perabot interior'],
        'PRODUK': ['produk konstruksi', 'produk bangunan'],
        
        'MATERIAL_KONSTRUKSI': ['material konstruksi', 'bahan bangunan', 'material bangunan'],
        'MATERIAL': ['material konstruksi', 'bahan bangunan', 'material bangunan'],
        
        'ARTIKEL': ['artikel konstruksi', 'tips konstruksi', 'info bangunan']
    };
    
    // ============================================================
    // 5. FUNGSI DETEKSI ENTITY PILLAR (EXACT MATCH ONLY) 🔥
    // ============================================================
    function isEntityPillarExactMatch(pageName, entityTypeParam) {
        const useEntityType = entityTypeParam || entityType;
        const lowerName = pageName.toLowerCase().trim();
        const pillarKeywords = ENTITY_PILLAR_KEYWORDS[useEntityType] || [];
        
        for (const kw of pillarKeywords) {
            // 🔥 EXACT MATCH (tanpa tambahan kata apapun)
            if (lowerName === kw) {
                console.log(`  🏛️ ENTITY PILLAR detected (exact match): "${kw}" → pillar (L1)`);
                return true;
            }
        }
        return false;
    }
    
    // ============================================================
    // 6. KEYWORD CIRI PER LEVEL
    // ============================================================
    
    // LEVEL 0: HOMEPAGE
    const HOME_KEYWORDS = ['beranda', 'home', 'halaman utama', 'homepage', 'index'];
    
    // LEVEL 1: PILLAR (Informasional 90%) - untuk konten edukasi umum
    const PILLAR_INFORMATIONAL_KEYWORDS = [
        'panduan', 'panduan lengkap', 'cara', 'tips', 'tips dan trik',
        'apa itu', 'pengertian', 'definisi', 'edukasi', 'belajar', 
        'tutorial', 'materi', 'penjelasan', 'kenapa', 'mengapa',
        'bagaimana', 'contoh', 'rekomendasi', 'lengkap', 'komprehensif'
    ];
    
    // LEVEL 2: SUB-PILLAR TIPE 2 (Jenis/Macam/Daftar)
    const SP2_KEYWORDS = [
        'jenis', 'jenis-jenis', 'macam', 'macam-macam', 'tipe', 
        'kategori', 'ragam', 'berbagai', 'klasifikasi', 'golongan',
        'daftar', 'list', 'koleksi', 'varian'
    ];
    
    // LEVEL 3: SUB-PILLAR TIPE 1 (Perbandingan)
    const SP1_KEYWORDS = [
        'vs', 'versus', 'perbandingan', 'bandingkan', 'dibanding',
        'lebih baik', 'mana yang', 'kelebihan', 'kekurangan',
        'perbedaan', 'beda', 'persamaan', 'sama', 'unggul',
        'lebih unggul', 'lebih bagus', 'lebih tahan', 'lebih awet',
        'lebih murah', 'lebih mahal', 'lebih hemat', 'lebih efisien'
    ];
    
    // LEVEL 4-6: MONEY KEYWORDS
    const MONEY_KEYWORDS = ['harga', 'biaya', 'tarif', 'sewa', 'rental'];
    
    // LEVEL 7: VARIANT
    const VARIANT_KEYWORDS = [
        'spesifikasi', 'ukuran', 'tipe', 'type', 'model', 
        'varian', 'warna', 'merk', 'brand', 'kapasitas', 
        'dimensi', 'bahan', 'material', 'finishing', 'grade',
        'seri', 'serie', 'versi', 'generasi', 'detail teknis'
    ];
    
    // ============================================================
    // 7. LOCATION WHITELIST
    // ============================================================
    const LOCATION_WHITELIST = new Set([
        'jakarta', 'bogor', 'depok', 'tangerang', 'bekasi', 'jabodetabek',
        'jakpus', 'jakbar', 'jaksel', 'jakut', 'jaktim', 'tangsel',
        'bandung', 'cimahi', 'cirebon', 'tasikmalaya', 'sukabumi', 'garut',
        'semarang', 'solo', 'surakarta', 'yogyakarta', 'jogja', 'magelang',
        'surabaya', 'malang', 'kediri', 'blitar', 'madiun', 'gresik', 'sidoarjo',
        'medan', 'binjai', 'deli serdang', 'padang', 'pekanbaru', 'batam',
        'palembang', 'bandar lampung', 'pontianak', 'balikpapan', 'samarinda',
        'banjarmasin', 'makassar', 'manado', 'palu', 'denpasar', 'bali', 'mataram'
    ]);
    
    const PRODUCT_BLACKLIST = new Set([
        'baja', 'ringan', 'galvalum', 'spandek', 'bondek', 'hebel', 'bata',
        'pasang', 'service', 'kontraktor', 'renovasi', 'borongan',
        'kayu', 'besi', 'aluminium', 'kaca', 'semen', 'pasir', 'batu',
        'hpl', 'mdf', 'jati', 'mahoni', 'multiplek', 'triplek'
    ]);
    
    function isLocation(text) {
        const lowerText = text.toLowerCase();
        const words = lowerText.split(/[\s,-]+/);
        
        for (const word of words) {
            if (LOCATION_WHITELIST.has(word)) return true;
            if (PRODUCT_BLACKLIST.has(word)) return false;
        }
        
        const hasIndicator = /di |ke |kota |wilayah |daerah /.test(lowerText);
        if (!hasIndicator) return false;
        
        for (const word of words) {
            if (word.length >= 4 && word.length <= 12 && /[aiueo]{2,}/.test(word)) {
                if (!PRODUCT_BLACKLIST.has(word)) return true;
            }
        }
        return false;
    }
    
    // ============================================================
    // 8. SPECIFIC PRODUCT & SUB-VARIANT DETECTION
    // ============================================================
    const SPECIFIC_PRODUCTS = new Set([
        'galvalum', 'spandek', 'bondek', 'hebel', 'bata ringan',
        'excavator', 'bulldozer', 'crane', 'dump truck',
        'hpl', 'mdf', 'jati', 'mahoni', 'multiplek', 'triplek'
    ]);
    
    function isSpecificProduct(text, wordCountAfterPrice = null) {
        const lowerText = text.toLowerCase();
        if (wordCountAfterPrice !== null && wordCountAfterPrice <= 2) return false;
        
        for (const product of SPECIFIC_PRODUCTS) {
            if (lowerText.includes(product)) return true;
        }
        if (/\d+(\.\d+)?\s*(mm|cm|m|inch)/.test(lowerText)) return true;
        return false;
    }
    
    function isSubVariant(text) {
        const lowerText = text.toLowerCase();
        let score = 0;
        
        if (/(\d+(\.\d+)?\s*mm\s*x\s*\d+(\.\d+)?\s*mm\s*x\s*\d+(\.\d+)?\s*mm)/i.test(lowerText)) score++;
        if (/(\d+(\.\d+)?\s*cm\s*x\s*\d+(\.\d+)?\s*cm\s*x\s*\d+(\.\d+)?\s*cm)/i.test(lowerText)) score++;
        if (lowerText.includes('tebal') && lowerText.includes('panjang') && lowerText.includes('lebar')) score++;
        
        const dimensions = lowerText.match(/\d+(\.\d+)?\s*(mm|cm|m|ton|kg|liter)/gi) || [];
        if (dimensions.length >= 3) score++;
        if (lowerText.includes('kapasitas') && dimensions.length >= 2) score++;
        
        const hasMultipleX = (lowerText.match(/x/g) || []).length >= 2;
        const hasManyNumbers = (lowerText.match(/\d+/g) || []).length >= 3;
        if (hasMultipleX && hasManyNumbers) score++;
        
        return score >= 2;
    }
    
    // ============================================================
    // 9. INTENT VALIDATION (PHASE 1.5)
    // ============================================================
    function getRequiredIntent(pageType) {
        if (pageType === 'home') {
            return { primary: 'navigasional', secondary: 'transaksional', dominance: 70 };
        }
        
        const intentMap = {
            'pillar': { primary: 'informasional', secondary: null, dominance: 90 },
            'sub-pillar-tipe-2': { primary: 'informasional', secondary: 'komersial', dominance: 60 },
            'sub-pillar-tipe-1': { primary: 'komersial', secondary: 'informasional', dominance: 70 },
            'variant': { primary: 'komersial', secondary: 'informasional', dominance: 80 },
            'sub-variant': { primary: 'komersial', secondary: 'informasional', dominance: 70 }
        };
        
        if (intentMap[pageType]) return intentMap[pageType];
        
        if (pageType === 'money-master') {
            if (isJasaEntity()) return { primary: 'komersial', secondary: 'transaksional', dominance: 60 };
            return { primary: 'transaksional', secondary: 'komersial', dominance: 80 };
        }
        
        if (pageType === 'money-page') {
            if (isJasaEntity() || isSewaEntity()) return { primary: 'komersial', secondary: 'transaksional', dominance: 60 };
            return { primary: 'transaksional', secondary: 'komersial', dominance: 85 };
        }
        
        if (pageType === 'money-child') {
            if (isJasaEntity() || isSewaEntity()) return { primary: 'komersial', secondary: 'transaksional', dominance: 60 };
            return { primary: 'transaksional', secondary: 'komersial', dominance: 90 };
        }
        
        return { primary: 'informasional', secondary: null, dominance: 50 };
    }
    
    function detectIntentFromText(text) {
        const lowerText = text.toLowerCase();
        
        for (const kw of MONEY_KEYWORDS) {
            if (lowerText.includes(kw)) return 'transaksional';
        }
        for (const kw of SP1_KEYWORDS) {
            if (lowerText.includes(kw)) return 'komersial';
        }
        for (const kw of VARIANT_KEYWORDS) {
            if (lowerText.includes(kw)) return 'komersial';
        }
        return 'informasional';
    }
    
    function validateIntent(pageType, intentDetected) {
        const required = getRequiredIntent(pageType);
        if (required.primary === intentDetected) return { valid: true };
        if (required.secondary === intentDetected) return { valid: true, isSecondary: true };
        return { valid: false, message: `${pageType} harusnya ${required.primary}` };
    }
    
    // ============================================================
    // 10. EVERGREEN STATUS (STEP 6.2)
    // ============================================================
    function getEvergreenStatus(pageType) {
        if (pageType === 'home') {
            return { evergreen: true, wajibTahun: false };
        }
        if (['pillar', 'sub-pillar-tipe-2', 'variant', 'sub-variant'].includes(pageType)) {
            return { evergreen: true, wajibTahun: false };
        }
        if (pageType === 'sub-pillar-tipe-1') {
            return { evergreen: false, wajibTahun: false };
        }
        if (pageType === 'money-master') {
            if (isJasaEntity()) return { evergreen: false, wajibTahun: false };
            if (isSewaEntity()) return { evergreen: false, wajibTahun: false };
            return { evergreen: false, wajibTahun: true };
        }
        if (['money-page', 'money-child'].includes(pageType)) {
            if (isJasaEntity() || isSewaEntity()) return { evergreen: false, wajibTahun: false };
            return { evergreen: false, wajibTahun: true };
        }
        return { evergreen: true, wajibTahun: false };
    }
    
    // ============================================================
    // 11. DETEKSI HOMEPAGE
    // ============================================================
    function isHomePage() {
        const url = window.location.href.toLowerCase();
        const path = url.replace(/https?:\/\/[^\/]+/, '');
        const isRoot = path === '' || path === '/' || path === '/index.html' || path === '/home';
        
        if (isRoot) return true;
        
        const h1 = (document.querySelector("h1")?.innerText || "").toLowerCase();
        const title = document.title.toLowerCase();
        
        return HOME_KEYWORDS.some(kw => h1 === kw || title === kw);
    }
    
    // ============================================================
    // 12. PAGE TYPE DETECTION (PRIORITAS LENGKAP) 🔥
    // ============================================================
    function detectPageType(pageName, isHome = false, entityTypeParam = null, isFromUrl = false) {
        const useEntityType = entityTypeParam || entityType;
        let lowerName = pageName.toLowerCase();
        
        // PRIORITAS 0: HOMEPAGE
        if (isHome || HOME_KEYWORDS.includes(lowerName)) {
            console.log(`  🏠 HOMEPAGE detected → home (L0)`);
            return 'home';
        }
        
        // ============================================================
        // PRIORITAS 1: ENTITY PILLAR (EXACT MATCH ONLY) 🔥
        // ============================================================
        if (isEntityPillarExactMatch(pageName, useEntityType)) {
            return 'pillar';
        }
        
        // ============================================================
        // PRIORITAS 2: INFORMASIONAL KEYWORDS → PILLAR atau SP2
        // ============================================================
        for (const kw of PILLAR_INFORMATIONAL_KEYWORDS) {
            if (lowerName.includes(kw)) {
                for (const sp2kw of SP2_KEYWORDS) {
                    if (lowerName.includes(sp2kw)) {
                        console.log(`  📚 SP2 detected (${kw} + ${sp2kw}) → sub-pillar-tipe-2 (L2)`);
                        return 'sub-pillar-tipe-2';
                    }
                }
                console.log(`  🏛️ PILLAR detected (${kw}) → pillar (L1)`);
                return 'pillar';
            }
        }
        
        // ============================================================
        // PRIORITAS 3: PERBANDINGAN (SP1)
        // ============================================================
        for (const kw of SP1_KEYWORDS) {
            if (lowerName.includes(kw)) {
                console.log(`  ⚖️ SP1 detected (${kw}) → sub-pillar-tipe-1 (L3)`);
                return 'sub-pillar-tipe-1';
            }
        }
        
        // ============================================================
        // PRIORITAS 4: JENIS/MACAM/DAFTAR (SP2)
        // ============================================================
        for (const kw of SP2_KEYWORDS) {
            if (lowerName.startsWith(kw) || lowerName.includes(kw + ' ') || lowerName.includes(kw + '-')) {
                console.log(`  📚 SP2 detected (${kw}) → sub-pillar-tipe-2 (L2)`);
                return 'sub-pillar-tipe-2';
            }
        }
        
        // ============================================================
        // PRIORITAS 5: MONEY LEVEL (HARGA/SEWA) - DENGAN CEK LOKASI DULU 🔥
        // ============================================================
        for (const kw of MONEY_KEYWORDS) {
            if (lowerName.includes(kw)) {
                console.log(`  💰 Money keyword detected: ${kw} (from ${isFromUrl ? 'URL' : 'title/H1'})`);
                
                // Ekstrak setelah keyword (maksimal 5 kata pertama)
                let afterKw = '';
                const kwIndex = lowerName.indexOf(kw);
                afterKw = lowerName.substring(kwIndex + kw.length).trim();
                
                // Bersihkan dari tahun dan karakter khusus
                afterKw = afterKw.replace(/\b\d{4}\b/g, '').replace(/[-–—]/g, ' ').replace(/\s+/g, ' ').trim();
                const words = afterKw.split(/\s+/).filter(w => w.length > 0);
                const first5Words = words.slice(0, 5);
                afterKw = first5Words.join(' ');
                const wordCount = first5Words.length;
                
                console.log(`  → After keyword (first 5 words): "${afterKw}" | Words: ${wordCount}`);
                
                // 🔥 PRIORITAS: CEK LOKASI DULU (UNTUK SEMUA ENTITY TYPE)
                if (isLocation(afterKw)) {
                    console.log(`  → Location detected → money-child (L6)`);
                    return 'money-child';
                }
                
                // JIKA JASA DAN TIDAK ADA LOKASI → money-page
                if (isJasaEntity()) {
                    console.log(`  → JASA + harga (no location) → money-page (L5)`);
                    return 'money-page';
                }
                
                // CEK SPESIFISITAS PRODUK
                const isSpecific = isSpecificProduct(afterKw, wordCount);
                
                // MONEY_MASTER: 1-2 kata ATAU 3 kata tapi masih umum
                if (wordCount <= 2 || (wordCount === 3 && !isSpecific)) {
                    console.log(`  → money-master (${wordCount} kata) → money-master (L4)`);
                    return 'money-master';
                }
                
                // MONEY_PAGE: 4+ kata ATAU 3 kata tapi spesifik
                console.log(`  → money-page (${wordCount} kata, specific=${isSpecific}) → money-page (L5)`);
                return 'money-page';
            }
        }
        
        // ============================================================
        // PRIORITAS 6: JASA/SEWA (tanpa keyword harga & bukan entity pillar)
        // ============================================================
        if (isJasaEntity()) {
            const jasaKeywords = ['jasa', 'pasang', 'service', 'kontraktor', 'borongan', 
                                   'renovasi', 'bangun', 'konsultasi', 'survey', 'estimasi'];
            for (const kw of jasaKeywords) {
                if (lowerName.includes(kw)) {
                    // Double-check SP2
                    for (const sp2kw of SP2_KEYWORDS) {
                        if (lowerName.includes(sp2kw)) {
                            console.log(`  📚 JASA + SP2 (${sp2kw}) → sub-pillar-tipe-2 (L2)`);
                            return 'sub-pillar-tipe-2';
                        }
                    }
                    // Double-check perbandingan
                    for (const cmp of SP1_KEYWORDS) {
                        if (lowerName.includes(cmp)) {
                            console.log(`  ⚖️ JASA + perbandingan → sub-pillar-tipe-1 (L3)`);
                            return 'sub-pillar-tipe-1';
                        }
                    }
                    if (isLocation(lowerName)) {
                        console.log(`  → JASA + location → money-child (L6)`);
                        return 'money-child';
                    }
                    console.log(`  → JASA detected (specific service) → money-page (L5)`);
                    return 'money-page';
                }
            }
        }
        
        if (isSewaEntity()) {
            const sewaKeywords = ['sewa', 'rental', 'alat berat', 'excavator', 'bulldozer', 'crane'];
            for (const kw of sewaKeywords) {
                if (lowerName.includes(kw)) {
                    for (const sp2kw of SP2_KEYWORDS) {
                        if (lowerName.includes(sp2kw)) {
                            console.log(`  📚 SEWA + SP2 (${sp2kw}) → sub-pillar-tipe-2 (L2)`);
                            return 'sub-pillar-tipe-2';
                        }
                    }
                    for (const cmp of SP1_KEYWORDS) {
                        if (lowerName.includes(cmp)) {
                            console.log(`  ⚖️ SEWA + perbandingan → sub-pillar-tipe-1 (L3)`);
                            return 'sub-pillar-tipe-1';
                        }
                    }
                    if (isLocation(lowerName)) {
                        console.log(`  → SEWA + location → money-child (L6)`);
                        return 'money-child';
                    }
                    console.log(`  → SEWA detected → money-page (L5)`);
                    return 'money-page';
                }
            }
        }
        
        // ============================================================
        // PRIORITAS 7: SUB-VARIANT (Level 8)
        // ============================================================
        if (isSubVariant(lowerName)) {
            console.log(`  🔬 SUB-VARIANT detected → sub-variant (L8)`);
            return 'sub-variant';
        }
        
        // ============================================================
        // PRIORITAS 8: VARIANT (Level 7)
        // ============================================================
        for (const kw of VARIANT_KEYWORDS) {
            if (lowerName.includes(kw)) {
                console.log(`  🔧 VARIANT detected (${kw}) → variant (L7)`);
                return 'variant';
            }
        }
        
        if (/\d+(\.\d+)?\s*(mm|cm|m|kg|ton)/.test(lowerName) && !lowerName.includes('x')) {
            console.log(`  🔧 VARIANT detected (single dimension) → variant (L7)`);
            return 'variant';
        }
        
        // ============================================================
        // DEFAULT: PILLAR
        // ============================================================
        console.log(`  🏛️ PILLAR (default) → pillar (L1)`);
        return 'pillar';
    }
    
    // ============================================================
    // 13. BUILD LEVELS FROM BREADCRUMB ITEMS
    // ============================================================
    function slugify(text) {
        return text.toLowerCase()
            .replace(/[^\w\s-]/g, '')
            .replace(/\s+/g, '-')
            .replace(/--+/g, '-')
            .trim();
    }
    
    const allLevels = [];
    
    for (let i = 0; i < breadcrumbItems.length; i++) {
        const item = breadcrumbItems[i];
        
        let name, url;
        if (typeof item === 'object' && item !== null) {
            name = item.name;
            url = item.url || null;
        } else {
            name = item;
            url = null;
        }
        
        const isHomePageName = (name.toLowerCase() === 'beranda' || name.toLowerCase() === 'home');
        const pageType = detectPageType(name, isHomePageName, entityType, false);
        const intentDetected = detectIntentFromText(name);
        const intentValidation = validateIntent(pageType, intentDetected);
        const evergreenData = getEvergreenStatus(pageType);
        
        allLevels.push({
            name: name,
            url: url,
            type: pageType,
            level: TYPE_LEVEL_MAP[pageType] || 99,
            intentDetected: intentDetected,
            intentValid: intentValidation.valid,
            intentRequired: getRequiredIntent(pageType),
            evergreen: evergreenData,
            position: i
        });
    }
    
    // ============================================================
    // 14. VALIDASI HIERARKI (TIDAK BOLEH LONCAT LEVEL)
    // ============================================================
    for (let i = 0; i < allLevels.length - 1; i++) {
        const current = allLevels[i];
        const next = allLevels[i + 1];
        
        if (current.level === 0) continue;
        
        if (next.level - current.level > 1) {
            console.warn(`⚠️ LEVEL JUMP: ${current.name}(${current.type} L${current.level}) → ${next.name}(${next.type} L${next.level})`);
            
            const correctedIndex = Math.min(current.level + 1, 8);
            const correctedType = VALID_PAGE_TYPES[correctedIndex];
            const correctedIntent = detectIntentFromText(next.name);
            
            next.type = correctedType;
            next.level = correctedIndex;
            next.intentDetected = correctedIntent;
            next.intentValid = validateIntent(correctedType, correctedIntent).valid;
            next.intentRequired = getRequiredIntent(correctedType);
            next.evergreen = getEvergreenStatus(correctedType);
            
            console.log(`✅ DIPERBAIKI: ${next.name} → ${next.type} L${next.level}`);
        }
    }
    
    // ============================================================
    // 15. JASA TIDAK BOLEH MONEY_MASTER
    // ============================================================
    for (const level of allLevels) {
        if (isJasaEntity() && level.type === 'money-master') {
            console.warn(`⚠️ JASA cannot be money-master: ${level.name} → forced to money-page`);
            level.type = 'money-page';
            level.level = 5;
            level.intentDetected = detectIntentFromText(level.name);
            level.intentValid = validateIntent('money-page', level.intentDetected).valid;
            level.intentRequired = getRequiredIntent('money-page');
            level.evergreen = getEvergreenStatus('money-page');
        }
    }
    
    // ============================================================
    // 16. FALLBACK URL
    // ============================================================
    for (const level of allLevels) {
        if (!level.url) {
            let foundUrl = null;
            if (mappingObj) {
                for (const [url, name] of Object.entries(mappingObj)) {
                    if (name === level.name) {
                        foundUrl = url.startsWith('http') ? url : DOMAIN + url;
                        break;
                    }
                }
            }
            if (!foundUrl) {
                const slug = slugify(level.name);
                foundUrl = `${DOMAIN}/p/${slug}.html`;
            }
            level.url = foundUrl;
        } else if (!level.url.startsWith('http')) {
            level.url = DOMAIN + level.url;
        }
    }
    
    // ============================================================
    // 17. SELECT LEVELS FOR BREADCRUMB (MAX 4 LEVELS)
    // ============================================================
    const selectedLevels = [];
    
    // Home (WAJIB) - Level 0
    selectedLevels.push({ 
        name: 'Beranda', 
        url: DOMAIN, 
        isHome: true,
        type: 'home',
        level: 0,
        intentDetected: 'navigasional',
        intentValid: true,
        intentRequired: getRequiredIntent('home'),
        evergreen: getEvergreenStatus('home')
    });
    
    let remainingSlots = MAX_LEVEL - 2;
    
    console.log(`\n📊 ========================================`);
    console.log(`📊 Breadcrumb Generator v5.6 — ENTITY PILLAR EXACT MATCH`);
    console.log(`📊 Entity Type: ${entityType}`);
    console.log(`📊 JASA Entity: ${isJasaEntity() ? 'YES' : 'NO'}`);
    console.log(`📊 SEWA Entity: ${isSewaEntity() ? 'YES' : 'NO'}`);
    console.log(`📊 ========================================`);
    
    // Parent terdekat (WAJIB)
    let parentTerdekat = null;
    const nonHomeLevels = allLevels.filter(l => l.type !== 'home');
    if (nonHomeLevels.length > 0) {
        parentTerdekat = nonHomeLevels[nonHomeLevels.length - 1];
        selectedLevels.push(parentTerdekat);
        remainingSlots--;
        console.log(`✅ WAJIB: "${parentTerdekat.name}" → ${parentTerdekat.type} (L${parentTerdekat.level})`);
        if (parentTerdekat.evergreen.wajibTahun) {
            console.log(`   📅 WAJIB mengandung tahun ${CURRENT_YEAR} di H1`);
        }
    }
    
    // Level lainnya (prioritaskan level tertinggi yang unik)
    const otherLevels = [...nonHomeLevels]
        .slice(0, nonHomeLevels.length - 1)
        .sort((a, b) => b.level - a.level)
        .filter((v, i, self) => self.findIndex(t => t.name === v.name) === i);
    
    for (const level of otherLevels) {
        if (remainingSlots <= 0) break;
        if (selectedLevels.some(s => s.name === level.name)) continue;
        
        selectedLevels.splice(1, 0, level);
        remainingSlots--;
        console.log(`✅ TAMBAH: "${level.name}" → ${level.type} (L${level.level})`);
    }
    
    // ============================================================
    // 18. CURRENT PAGE - DETEKSI DARI URL CLEAN 🔥
    // ============================================================
    const currentFullUrl = currentUrl.startsWith('http') ? currentUrl : DOMAIN + currentUrl;
    
    // PRIORITAS: URL clean > mappingObj > parentTerdekat
    let currentPageTitle = getCleanPageNameFromUrl(currentFullUrl);
    
    if (!currentPageTitle || currentPageTitle === '') {
        if (mappingObj && mappingObj[currentUrl]) {
            currentPageTitle = mappingObj[currentUrl];
        } else if (parentTerdekat) {
            currentPageTitle = parentTerdekat.name;
        } else {
            currentPageTitle = 'Halaman';
        }
    }
    
    console.log(`\n🔍 CURRENT PAGE DETECTION:`);
    console.log(`   URL: ${currentFullUrl}`);
    console.log(`   Clean URL: "${currentPageTitle}"`);
    
    const isCurrentHome = (currentPageTitle.toLowerCase() === 'beranda' || currentPageTitle.toLowerCase() === 'home');
    // Deteksi dari URL clean (isFromUrl = true)
    const currentPageType = detectPageType(currentPageTitle, isCurrentHome, entityType, true);
    const currentIntentDetected = detectIntentFromText(currentPageTitle);
    const currentIntentValidation = validateIntent(currentPageType, currentIntentDetected);
    const currentEvergreen = getEvergreenStatus(currentPageType);
    
    selectedLevels.push({
        name: currentPageTitle,
        url: currentFullUrl,
        isCurrent: true,
        type: currentPageType,
        level: TYPE_LEVEL_MAP[currentPageType] || 99,
        intentDetected: currentIntentDetected,
        intentValid: currentIntentValidation.valid,
        intentRequired: getRequiredIntent(currentPageType),
        evergreen: currentEvergreen,
        fromUrl: true
    });
    
    // Update position
    for (let i = 0; i < selectedLevels.length; i++) {
        selectedLevels[i].position = i + 1;
    }
    
    console.log(`\n✅ FINAL BREADCRUMB (${selectedLevels.length} level):`);
    selectedLevels.forEach((l, i) => {
        const icon = l.type === 'home' ? '🏠' : 
                    (l.type === 'pillar' ? '🏛️' : 
                    (l.type === 'sub-pillar-tipe-1' ? '⚖️' :
                    (l.type === 'sub-pillar-tipe-2' ? '📚' :
                    (l.type.includes('money') ? '💰' :
                    (l.type === 'variant' ? '🔧' : '🔬')))));
        console.log(`   ${i+1}. ${icon} ${l.name} → ${l.type} (L${l.level})${l.fromUrl ? ' [from URL]' : ''}`);
    });
    
    console.log(`\n📊 CURRENT PAGE SUMMARY:`);
    console.log(`   Source: URL Clean`);
    console.log(`   Name: "${currentPageTitle}"`);
    console.log(`   Type: ${currentPageType} (L${TYPE_LEVEL_MAP[currentPageType] || '?'})`);
    console.log(`   Intent Detected: ${currentIntentDetected}`);
    console.log(`   Intent Valid: ${currentIntentValidation.valid ? '✅' : '❌'}`);
    console.log(`   Wajib Tahun di H1: ${currentEvergreen.wajibTahun ? `✅ WAJIB ${CURRENT_YEAR}` : '❌ TIDAK'}`);
    console.log(`📊 ========================================\n`);
    
    // ============================================================
    // 19. GENERATE HTML BREADCRUMB + JSON-LD
    // ============================================================
    let breadcrumbHtml = `<div class="breadcrumbs" itemscope itemtype="https://schema.org/BreadcrumbList">\n`;
    
    for (let i = 0; i < selectedLevels.length; i++) {
        const level = selectedLevels[i];
        const isLast = (i === selectedLevels.length - 1);
        const position = i + 1;
        
        if (!isLast) {
            breadcrumbHtml += `<span itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">\n`;
            breadcrumbHtml += `<a href="${level.url}" itemprop="item" title="${level.name}">\n`;
            breadcrumbHtml += `<span itemprop="name">${level.name}</span>\n`;
            breadcrumbHtml += `</a>\n`;
            breadcrumbHtml += `<meta itemprop="position" content="${position}" />\n`;
            breadcrumbHtml += `</span>\n`;
            breadcrumbHtml += `<span class="separator"> › </span>\n`;
        } else {
            breadcrumbHtml += `<span itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">\n`;
            breadcrumbHtml += `<span itemprop="name">${level.name}</span>\n`;
            breadcrumbHtml += `<meta itemprop="position" content="${position}" />\n`;
            breadcrumbHtml += `</span>\n`;
        }
    }
    
    breadcrumbHtml += `</div>\n`;
    
    // JSON-LD Schema
    const jsonLdItems = selectedLevels.map((level, idx) => ({
        "@type": "ListItem",
        "position": idx + 1,
        "name": level.name,
        "item": level.url
    }));
    
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": jsonLdItems
    };
    
    // Inject ke DOM
    const oldBreadcrumbs = document.querySelectorAll('.breadcrumbs, .breadcrumb-nav, [aria-label="Breadcrumb"]');
    oldBreadcrumbs.forEach(el => el.remove());
    
    const oldJsonLd = document.querySelector('script[data-breadcrumb="true"]');
    if (oldJsonLd) oldJsonLd.remove();
    
    const targetElement = document.querySelector('main, article, .content, #main-content, .post-content');
    if (targetElement && targetElement.firstChild) {
        targetElement.insertAdjacentHTML('afterbegin', breadcrumbHtml);
    } else {
        const container = document.querySelector('.container, #content, .wrapper');
        if (container && container.firstChild) {
            container.insertAdjacentHTML('afterbegin', breadcrumbHtml);
        } else {
            document.body.insertAdjacentHTML('afterbegin', breadcrumbHtml);
        }
    }
    
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-breadcrumb', 'true');
    script.textContent = JSON.stringify(jsonLd, null, 2);
    document.head.appendChild(script);
    
    console.log(`✅ Breadcrumb injected for entity: ${entityType}`);
    
    // ============================================================
    // 20. RETURN LENGKAP
    // ============================================================
    return {
        html: breadcrumbHtml,
        jsonLd: jsonLd,
        selectedLevels: selectedLevels,
        currentPageType: currentPageType,
        currentIntent: {
            required: getRequiredIntent(currentPageType),
            detected: currentIntentDetected,
            valid: currentIntentValidation.valid,
            message: currentIntentValidation.message
        },
        currentEvergreen: currentEvergreen,
        currentYear: CURRENT_YEAR,
        entityType: entityType,
        isValidType: true,
        version: '5.6'
    };
}

// ============================================================
// RINGKASAN HASIL DETEKSI v5.6
// ============================================================
/*
| Keyword | Entity Type | Hasil Deteksi | Level |
|---------|-------------|---------------|-------|
| jasa konstruksi | JASA_KONSTRUKSI | pillar | L1 ✅ |
| jasa konstruksi gedung sekolah | JASA_KONSTRUKSI | money-page | L5 ✅ |
| sewa alat konstruksi | SEWA | pillar | L1 ✅ |
| sewa alat konstruksi jakarta | SEWA | money-child | L6 ✅ |
| produk konstruksi | PRODUK_KONSTRUKSI | pillar | L1 ✅ |
| produk konstruksi terbaru | PRODUK_KONSTRUKSI | money-page | L5 ✅ |
| produk interior | PRODUK_INTERIOR | pillar | L1 ✅ |
| material konstruksi | MATERIAL_KONSTRUKSI | pillar | L1 ✅ |
| harga sewa alat proyek | SEWA | money-master | L4 ✅ |
| harga jasa cutting beton jakarta | JASA_KONSTRUKSI | money-child | L6 ✅ |
| jenis jasa konstruksi | JASA_KONSTRUKSI | sub-pillar-tipe-2 | L2 ✅ |
| perbandingan jasa konstruksi | JASA_KONSTRUKSI | sub-pillar-tipe-1 | L3 ✅ |
*/
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
		urlMappingStrukturPostFromSub1MoneyPage,
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

	/* ============================================================
 🔥 Hybrid Date Modified v7.1 — UNTUK betonjayareadymix.com
    Custom date berdasarkan hasil deteksi page level
    ✅ Support MONEY_LEADGEN
============================================================ */

(async function runHybridDateModified() {
  try {
    const CURRENT_DOMAIN = window.location.hostname;
    
    // Khusus untuk betonjayareadymix.com
    if (CURRENT_DOMAIN !== 'www.betonjayareadymix.com' && !CURRENT_DOMAIN.includes('localhost')) {
      console.log(`⏸️ Domain ${CURRENT_DOMAIN} not targeted. Script skipped.`);
      return;
    }

    // ============================================================
    // 📌 FUNGSI LOAD EXTERNAL JS
    // ============================================================
    function loadExternalJS(src) {
      return new Promise((resolve) => {
        if (document.querySelector(`script[src="${src}"]`)) {
          resolve();
          return;
        }
        const s = document.createElement("script");
        s.src = src;
        s.defer = true;
        s.onload = resolve;
        s.onerror = () => {
          console.warn("[Evergreen] Gagal load:", src);
          resolve();
        };
        document.head.appendChild(s);
      });
    }

    // ============================================================
    // 📌 TUNGGU PAGE LEVEL DETECTOR READY
    // ============================================================
    function waitForPageLevelDetector() {
      return new Promise((resolve) => {
        if (window.__pageLevelDetectorReady && window.pageLevelDetector) {
          resolve(true);
        } else {
          window.addEventListener("pageLevelDetectorReady", () => resolve(true), { once: true });
        }
      });
    }

    // ============================================================
    // 📌 TUNGGU DETECT EVERGREEN READY
    // ============================================================
    function waitForDetectEvergreen() {
      return new Promise((resolve) => {
        if (window.__detectEvergreenReady && typeof window.detectEvergreen === "function") {
          resolve(true);
        } else {
          window.addEventListener("detectEvergreenReady", () => resolve(true), { once: true });
        }
      });
    }

    // ============================================================
    // 📌 LOAD ALL SCRIPTS
    // ============================================================
    async function loadAllScripts() {
      const PAGE_LEVEL_DETECTOR_URL = "https://raw.githack.com/aliyul/solution-blogger/main/PageLevelDetector.js";
      const EVERGREEN_DETECTOR_URL = "https://raw.githack.com/aliyul/solution-blogger/main/SmartEvergreenDetector.js";
      
      if (typeof window.pageLevelDetector === "undefined") {
        console.log("⏳ Loading Page Level Detector v15.0...");
        await loadExternalJS(PAGE_LEVEL_DETECTOR_URL);
        await waitForPageLevelDetector();
        console.log("✅ Page Level Detector v15.0 READY");
      }
      
      if (typeof window.detectEvergreen !== "function") {
        console.log("⏳ Loading Smart Evergreen Detector v13.0...");
        await loadExternalJS(EVERGREEN_DETECTOR_URL);
        await waitForDetectEvergreen();
        console.log("✅ Smart Evergreen Detector v13.0 READY");
      }
    }

    // ============================================================
    // 📌 TO ISO WITH TIMEZONE LOCAL
    // ============================================================
    function toISOWithTimezoneLocal(date, offset = "+07:00") {
      if (!date) return null;
      const d = new Date(date);
      if (isNaN(d.getTime())) return null;
      const pad = (n) => n.toString().padStart(2, "0");
      const yyyy = d.getFullYear();
      const mm = pad(d.getMonth() + 1);
      const dd = pad(d.getDate());
      const hh = pad(d.getHours());
      const min = pad(d.getMinutes());
      const ss = pad(d.getSeconds());
      return `${yyyy}-${mm}-${dd}T${hh}:${min}:${ss}${offset}`;
    }

    // ============================================================
    // 📌 STABLE HASH
    // ============================================================
    function stableHash(str) {
      let hash = 0;
      for (let i = 0; i < str.length; i++) {
        hash = (hash << 5) - hash + str.charCodeAt(i);
        hash |= 0;
      }
      return Math.abs(hash);
    }

    // ============================================================
    // 📌 UPDATE META DATE MODIFIED
    // ============================================================
    function updateMetaDateModified(isoDate) {
      const selectors = [
        ['meta[itemprop="dateModified"]', 'itemprop', 'dateModified'],
        ['meta[name="dateModified"]', 'name', 'dateModified'],
        ['meta[property="article:modified_time"]', 'property', 'article:modified_time']
      ];
      
      selectors.forEach(([selector, attr, val]) => {
        let meta = document.querySelector(selector);
        if (!meta) {
          meta = document.createElement("meta");
          meta.setAttribute(attr, val);
          document.head.appendChild(meta);
        }
        meta.setAttribute("content", isoDate);
      });
    }

    // ============================================================
    // 📌 DAFTAR EVERGREEN LEVELS & MONEY LEVELS (LENGKAP)
    // ============================================================
    const EVERGREEN_LEVELS = ['pillar', 'sub-pillar-tipe-2', 'sub-pillar-tipe-1', 'variant', 'sub-variant'];
    const MONEY_LEVELS = ['money-master', 'money-page', 'money-child', 'money-leadgen'];

    // ============================================================
    // 📌 FUNGSI MENENTUKAN CUSTOM DATE BERDASARKAN PAGE LEVEL
    // ============================================================
    function getCustomDateByPageLevel(pageLevel, entityType) {
      // ============================================================
      // LEVEL 1: EVERGREEN (tidak perlu update sering)
      // ============================================================
      if (EVERGREEN_LEVELS.includes(pageLevel)) {
        // Pillar (level tertinggi) - paling stabil
        if (pageLevel === 'pillar') {
          return "2026-04-01T10:30:00+07:00";
        }
        // Sub-Pillar Tipe 2, Sub-Pillar Tipe 1, Variant, Sub-Variant
        //return "2026-04-02T00:00:00+07:00";
		  		  // JASA KONSTRUKSI STRUKTUR POST: Sub-Pillar Tipe 2, Sub-Pillar Tipe 1, Variant, Sub-Variant 
        return "2026-04-10T00:00:00+07:00";
        /*
		        // JASA ALAT KONSTRUKSI POST : Sub-Pillar Tipe 2, Sub-Pillar Tipe 1, Variant, Sub-Variant 
        return "2026-04-03T00:00:00+07:00";
		          // JASA KONSTRUKSI STRUKTUR: Sub-Pillar Tipe 2, Sub-Pillar Tipe 1, Variant, Sub-Variant 
        return "2026-04-04T00:00:00+07:00";
		          // JASA KONSTRUKSI PERBAIKAN: Sub-Pillar Tipe 2, Sub-Pillar Tipe 1, Variant, Sub-Variant 
        return "2026-04-05T00:00:00+07:00";
		          // JASA KONSTRUKSI PEMBATAS: Sub-Pillar Tipe 2, Sub-Pillar Tipe 1, Variant, Sub-Variant 
        return "2026-04-06T00:00:00+07:00";
		          // JASA KONSTRUKSI FINISHING: Sub-Pillar Tipe 2, Sub-Pillar Tipe 1, Variant, Sub-Variant 
        return "2026-04-07T00:00:00+07:00";
		          // JASA KONSTRUKSI PONDASI PERKUATAN TANAH: Sub-Pillar Tipe 2, Sub-Pillar Tipe 1, Variant, Sub-Variant 
        return "2026-04-08T00:00:00+07:00";
		  // JASA KONSTRUKSI JALAN PERKERASAN: Sub-Pillar Tipe 2, Sub-Pillar Tipe 1, Variant, Sub-Variant 
        return "2026-04-09T00:00:00+07:00";

		  // JASA KONSTRUKSI PONDASI PERKUATAN TANAH POST: Sub-Pillar Tipe 2, Sub-Pillar Tipe 1, Variant, Sub-Variant 
        return "2026-04-11T00:00:00+07:00";
		  // JASA KONSTRUKSI PERBAIKAN POST: Sub-Pillar Tipe 2, Sub-Pillar Tipe 1, Variant, Sub-Variant 
        return "2026-04-12T00:00:00+07:00";
		  // JASA KONSTRUKSI PEMBATAS POST: Sub-Pillar Tipe 2, Sub-Pillar Tipe 1, Variant, Sub-Variant 
        return "2026-04-13T00:00:00+07:00";
		  // JASA KONSTRUKSI JALAN PERKERASAN POST: Sub-Pillar Tipe 2, Sub-Pillar Tipe 1, Variant, Sub-Variant 
        return "2026-04-14T00:00:00+07:00";
		  // JASA KONSTRUKSI FINISHING POST: Sub-Pillar Tipe 2, Sub-Pillar Tipe 1, Variant, Sub-Variant 
        return "2026-04-15T00:00:00+07:00";
		  // JASA KONSTRUKSI CUTTING BETON POST: Sub-Pillar Tipe 2, Sub-Pillar Tipe 1, Variant, Sub-Variant 
        return "2026-04-16T00:00:00+07:00";
		  // JASA KONSTRUKSI BONGKAR BANGUNAN POST: Sub-Pillar Tipe 2, Sub-Pillar Tipe 1, Variant, Sub-Variant 
        return "2026-04-17T00:00:00+07:00";
		  */
      }
      
      // ============================================================
      // LEVEL 2: MONEY PAGES (perlu update berkala)
      // Kembalikan null agar SmartEvergreenDetector menghitung otomatis
      // money-master, money-page, money-child, money-leadgen
      // ============================================================
      if (MONEY_LEVELS.includes(pageLevel)) {
        return null; // AUTO mode
      }
      
      // ============================================================
      // DEFAULT: AUTO mode
      // ============================================================
      return null;
    }

    // ============================================================
    // 📌 EKSEKUSI UTAMA
    // ============================================================
    
    await loadAllScripts();
    
    // Tunggu sebentar agar pageLevelDetector selesai deteksi
    await new Promise(resolve => setTimeout(resolve, 100));
    
    // Dapatkan page level dan entity type dari detector yang sudah ready
    let pageLevel = 'pillar'; // default
    let entityType = 'produk'; // default
    
    if (window.pageLevelDetector) {
      pageLevel = window.pageLevelDetector.detect();
      entityType = window.pageLevelDetector.detectEntityType();
      console.log(`📌 Detected Page Level: ${pageLevel}, Entity Type: ${entityType}`);
    } else {
      console.warn("⚠️ PageLevelDetector not ready, using defaults");
    }
    
    // ============================================================
    // 🔥 STEP 2: TENTUKAN CUSTOM DATE BERDASARKAN HASIL DETEKSI
    // ============================================================
    let customDate = getCustomDateByPageLevel(pageLevel, entityType);
    let manualMode = customDate !== null;
    
    if (manualMode) {
      console.log(`📌 [CUSTOM DATE] PageLevel=${pageLevel}, EntityType=${entityType} → Using custom date: ${customDate}`);
    } else {
      console.log(`📌 [AUTO MODE] PageLevel=${pageLevel}, EntityType=${entityType} → No custom date, using auto calculation`);
    }
    
    // ============================================================
    // 🔥 STEP 3: JALANKAN DETEKTOR DENGAN ATAU TANPA CUSTOM DATE
    // ============================================================
    if (manualMode && customDate) {
      await window.detectEvergreen({ customDateModified: customDate });
      console.log(`✅ MANUAL mode executed with custom date: ${customDate}`);
    } else {
      await window.detectEvergreen();
      console.log(`✅ AUTO mode executed`);
    }
    
    // ============================================================
    // 📌 PASTIKAN AEDMetaDates TERSEDIA
    // ============================================================
    if (!window.AEDMetaDates || !window.AEDMetaDates.dateModified) {
      console.warn("[HybridDateModified] AEDMetaDates tidak ditemukan, skip update.");
      return;
    }

    const { dateModified, nextUpdate, type, entityType: detectedEntityType, pageLevel: detectedPageLevel } = window.AEDMetaDates;

    console.log(`📊 betonjayareadymix.com Page Info:`);
    console.log(`   - type: ${type}`);
    console.log(`   - entityType: ${detectedEntityType}`);
    console.log(`   - pageLevel: ${detectedPageLevel}`);
    console.log(`   - dateModified: ${dateModified}`);
    console.log(`   - nextUpdate: ${nextUpdate}`);

    // ============================================================
    // 📌 HITUNG VARIASI TANGGAL
    // ============================================================
    const uniquePageIdentifier = window.location.pathname;
    let hashSource = uniquePageIdentifier;
    
    if (EVERGREEN_LEVELS.includes(detectedPageLevel)) {
      hashSource = 'evergreen-' + hashSource;
      console.log(`📌 Evergreen content (${detectedPageLevel}) → using evergreen hash prefix`);
    } else if (detectedEntityType === 'jasa') {
      hashSource = 'jasa-' + hashSource;
      console.log(`📌 Jasa content (${detectedPageLevel}) → using jasa hash prefix`);
    } else if (MONEY_LEVELS.includes(detectedPageLevel)) {
      hashSource = 'money-' + hashSource;
      console.log(`📌 Money page (${detectedPageLevel}) → using money hash prefix`);
    }
    
    const hash = stableHash(hashSource);
    const offsetSeconds = hash % 86400;
    const finalDate = new Date(new Date(dateModified).getTime() + offsetSeconds * 1000);
    const isoDate = toISOWithTimezoneLocal(finalDate);

    // ============================================================
    // 📌 UPDATE META DATEMODIFIED
    // ============================================================
    updateMetaDateModified(isoDate);

    window.AEDMetaDates = {
      ...window.AEDMetaDates,
      dateModified: isoDate,
      hashOffset: offsetSeconds
    };

    console.log(`✅ [HybridDateModified] ${uniquePageIdentifier} → ${isoDate}`);
    console.log(`   - offsetSeconds: ${offsetSeconds} detik`);
    console.log(`   - Mode: ${manualMode ? 'MANUAL (custom date based on page level)' : 'AUTO'}`);
    console.log(`📋 Custom config for betonjayareadymix.com applied successfully`);

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
if (urlMappingStrukturPostFromSub1MoneyPage[cleanUrlJasaJasaKonsStrukturPost]) {
	/*
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

	
      
	
JasaKonstruksiGedungdanHunianPost
JasaKonstruksiIndustridanGudangPost
JasaStrukturBajadanRangkaRinganPost
JasaStrukturKhusus
JasaKonstruksiLapanganOlahragaPost
JasaKonstruksiModulardanPrecastPost
JasaStrukturBetondanPengecoranPost

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
        pageNameJasaKonsStrukturPost.textContent = urlMappingStrukturPostFromSub1MoneyPage[cleanUrlJasaJasaKonsStrukturPost];
	   */
	generateBreadcrumbJasaKonstruksiStrukturPost(
        urlMappingStrukturPostFromSub1MoneyPage,
        cleanUrlJasaJasaKonsStrukturPost,
        [
            //{ name: 'Beton Jaya Readymix', url: 'https://www.betonjayareadymix.com/' },
            { name: 'Jasa Konstruksi', url: 'https://www.betonjayareadymix.com/p/jasa-konstruksi.html'},
            { name: 'Daftar Jasa Struktur Konstruksi', url: 'https://www.betonjayareadymix.com/p/daftar-jasa-struktur-konstruksi.html'},
            { name: 'Perbandingan Jasa Struktur Konstruksi', url: 'https://www.betonjayareadymix.com/p/perbandingan-jasa-struktur-konstruksi.html'}
        ],
        'JASA_KONSTRUKSI'
    );
    }
	/*
// ✅ Tambahkan JSON-LD Breadcrumb otomatis
   if (urlMappingStrukturPostFromSub1MoneyPage[cleanUrlJasaJasaKonsStrukturPost]) {
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
                   "name": urlMappingStrukturPostFromSub1MoneyPage[cleanUrlJasaJasaKonsStrukturPost],
                   "item": cleanUrlJasaJasaKonsStrukturPost
               }
           ]
       };

       const script = document.createElement('script');
       script.type = 'application/ld+json';
       script.text = JSON.stringify(jsonLDBreadcrumb);
       document.head.appendChild(script);
   }*/
	
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
