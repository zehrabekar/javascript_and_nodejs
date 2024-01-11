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

  console.clear();

//reduce(azaltmak) metodu :  bir dizi (array) üzerinde döngü yaparak her elemanı birleştirmek, toplamak veya başka bir şekilde işlemek için kullanılan bir dizi metodudur.
/*
sayilar_.reduce(function(accumulator, currentValue, index, array){
  Akümülatör üzerinde belirli bir işlem yapılır
 return yeniAkumulatorDegeri;
},initialValue);

akümülatör :reduce işlemi sırasında bir önceki adımda dönüşen değeri temsil eder. Previous value ile aynı şeydir.
*/
const sayilar_ =[1,2,3,4,5,6];

// reduce'den önce dizideki elemanların toplamını bulma:
function toplaminiBul(){
  let toplam =0;
  for(let i=0; i<sayilar_.length; i++){
    toplam = toplam + sayilar_[i];
  }
  console.log(toplam);
};
toplaminiBul(); // 21

//reduce ile aynı işlem :
const reduceIleToplam = sayilar_.reduce(function(toplam,currentValue,index){
  return toplam = toplam + currentValue;
},0);
console.log(reduceIleToplam); // 21
/*buradaki çalışma mantığı : initial değer olarak girilen 0 ile önce dizideki 1 toplanır ve sonuc olan 1 alınır. daha sonra 1 ile ikinci değer 2
toplanır ve 3 alınır derken tüm elemanlar bitene kadar işlem devam eder ve 21 sonucu elde edilir.
toplam buradaki previousValue'e (ya da accumulator), currentValue o an işlem yapılan elemana index ise initial sayı ile ilk elemanı 
topladığımızda 0, çıkan değer ile ikinci elemanı topladığımızda 1 vs şeklinde ilerler.*/

//map kullanımı hatırlatma :
const yeniDizi = sayilar_.map(function(sayi){
  return sayi *2;
});

console.log(yeniDizi); // [2, 4, 6, 8, 10, 12]

//reduce kullanarak aynı yapıyı oluşturma :
const reduceIleYeniDizi = sayilar_.reduce(function(dizininOncekiHali,oAnkiSayi){
    dizininOncekiHali.push(oAnkiSayi*2);
    return dizininOncekiHali;
},[]);
console.log(reduceIleYeniDizi);// [2, 4, 6, 8, 10, 12]
/* burada map ile aldığımız sonuca ulaşmak için initial değer olarak boş bir dizi verdik. sonrasında normalde reduce ile tek bir sonuc almamak
map gibi dizi halinde yapmak için işlem yaptığımız elemanların yeni değerini push ile diziye ekledik*/

//filter fonksiyonun hatırlatma :
const filtrelenmisDizi = sayilar_.filter(function(sayi,index){
  return sayi > 3;
});
console.log(filtrelenmisDizi); //(3) [4, 5, 6]

//reduce kullanarak aynı yapıyı oluşturma:
const reduceIleFiltrelenmisDizi = sayilar_.reduce(function(pre,sayi,index){
  if (sayi > 3){
    pre.push(sayi);
  }
  return pre;
}, []);
// initial value olarak [] göndermemizin sebebi filter fonksiyonunda aranan değer bulunamazsa geriye [] değer döndürülmesi.
console.log(reduceIleFiltrelenmisDizi); //(3) [4, 5, 6]
/* burada gerçekleşen olay sayilar_ dizisindeki elemanlar ilk değerden başlayarak şarta uyup uymadığı kontrol edildikten sonra uyan değerler 
pre.push(sayi) kodu ile [] içine eklenir . burada pre değeri yani ilk durumda [] değerine sayi değeri yani ilk durumda uyan eleman 4 push ile
eklenir ve [4] olur. daha sonra 5 ve 6 değerleri de kontrol edildikten sonra şarta uyduğu için sonuc [4,5,6] olur. */

// find fonksiyonun hatırlatma :
const bulunanEleman = sayilar_.find(function(sayi,index){
  return sayi === 2;
});
console.log(bulunanEleman); // 2

// reduce ile find yapısını oluşturma :
const reduceIleBulunanEleman = sayilar_.reduce(function(pre,sayi,index){
  if(sayi === 2){
    return sayi;
  }else {
    return pre;
  }
},undefined);
console.log(reduceIleBulunanEleman); // 2
//find metodunda eleman bulunamazsa undefined yazdırdığı için initial value olarak undefined yazdık