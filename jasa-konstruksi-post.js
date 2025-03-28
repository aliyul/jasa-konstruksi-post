 // Cek URL saat ini dan sesuaikan dengan kondisi yang diinginkan
     const urlMapping = {
    "https://www.betonjayareadymix.com/2021/08/jayamix-pangandaran.html": "Jayamix Pangandaran"


};
document.addEventListener("DOMContentLoaded", function() {
    // var currentUrl = window.location.href;
     //const cleanUrl = currentUrl.split('?')[0]; // Menghapus parameter seperti ?m=1
    const cleanUrl = window.location.href.split(/[?#]/)[0]; // Menghilangkan parameter seperti ?m=1

     // Menemukan elemen menggunakan ID
      var materialKonstruksiLink = document.getElementById("materialKonstruksi");
     var readyMixLink = document.getElementById("readyMix");
     var pageNameSpan = document.getElementById("pageNameSpan");

     // Default untuk menyembunyikan elemen
     materialKonstruksiLink.style.visibility = 'hidden';
     readyMixLink.style.visibility = 'hidden';
     pageNameSpan.textContent = "";
  
    console.log('Material Konstruksi:', materialKonstruksiLink);
    console.log('Ready Mix:', readyMixLink);
    console.log('Page Name Span:', pageNameSpan);

    if (!materialKonstruksiLink || !readyMixLink || !pageNameSpan) {
        console.error("Salah satu elemen tidak ditemukan!");
        return;
    }

    if (urlMapping[cleanUrl]) {
        materialKonstruksiLink.style.visibility = 'visible';
        readyMixLink.style.visibility = 'visible';
        pageNameSpan.textContent = urlMapping[cleanUrl];
    }

   });
