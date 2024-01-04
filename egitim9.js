// find metodu : bir dizi içinde belirli bir koşulu sağlayan ilk elemanı bulmak için kullanılır. Kullanımı: dizi.find(fonksiyon)
//Dönüş Değeri: Belirtilen koşulu sağlayan ilk eleman ya da eğer hiçbir eleman koşulu sağlamazsa undefined .

const kayitlar = [
    {id: 1, isim : "zehra"},
    {id: 2, isim : "kadir"},
    {id: 3, isim : "hüseyin"}
];

const kayit = kayitlar.find(function(kisi){
    return kisi.id === 1;
});
console.log(kayit); //{id: 1, isim: 'zehra'}

const kayit2 = kayitlar.find(function(kisi){
    return kisi.id === 12;
});
console.log(kayit2); // undefined

function findMethod(kayitlar){
    for(let i=0; i< kayitlar.length; i++){
        if(kayitlar[i].id === 1){
            return kayitlar[i];
        }
    }
};
console.log(findMethod(kayitlar)); // {id: 1, isim: 'zehra'}

// kendi find metodum :
function kendiFindMetodum(kayitlar, aranilanDeger){
    let bulunanKisi = undefined;
    for (let i=0; i<kayitlar.length; i++){
        if(aranilanDeger(kayitlar[i])){
            return kayitlar[i];
        }
    }
    return bulunanKisi;
}

const sonuc = kendiFindMetodum(kayitlar,function(kayit){
    return kayit.id===1;
});

console.log(sonuc); //{id: 1, isim: 'zehra'}    

const sonuc2 = kendiFindMetodum(kayitlar,function(kayit){
    return kayit.id===5;
});

console.log(sonuc2); // böyle bir kayit olmadığı için undefined

/* every metodu : bir dizi içindeki tüm elemanların belirli bir koşulu sağlayıp sağlamadığını kontrol eder, eğer tüm elemanlar şartı sağlıyorsa
true değerini verir.*/

const sayilar = [1,2,3,4];

const cevap = sayilar.every(function(sayi){
    return sayi < 5;
}); 
console.log(cevap); // true

// kendi every metodum :
function kendiEvery(dizi, kontrolFonksiyon) {
    for (let i = 0; i < dizi.length; i++) {
      if (!kontrolFonksiyon(dizi[i])) {
        return false; // Koşulu sağlamayan bir eleman bulundu, false döndür
      }
    }
    return true; // Tüm elemanlar koşulu sağlıyor, true döndür
  }
  
  const hepsiCiftMi = kendiEvery(sayilar, function(eleman) {
    return eleman % 2 === 0;
  });
  
  console.log("çift mi :" + hepsiCiftMi); // false

//some metodu :bir dizi içinde en az bir elemanın belirli bir koşulu sağlayıp sağlamadığını kontrol eder.
const cevap2 = sayilar.some(function(sayi){
    return sayi > 3;
});
console.log(cevap2); // true . tüm elemanlar şartı sağlamasa bile en az biri sağladığı sürece true değer verir.

//kendi some methodum:
function kendiSome(dizi, kontrolFonksiyon) {
    for (let i = 0; i < dizi.length; i++) {
      if (kontrolFonksiyon(dizi[i])) {
        return true;
      }
    }
    return false;
  }
  
  const buyukMu= kendiEvery(sayilar, function(eleman) {
    return eleman > 5 ;
  });
  
  console.log("5ten büyük mü :" + buyukMu ); // 5ten büyük mü :false