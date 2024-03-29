// map fonksiyonu : bir diziyi döngü içinde gezerek her bir elemanı belirli bir işlemden geçirip yeni bir dizi oluşturan fonksiyondur. 
const sayilar_ = [1,2,3,4,5,6];
sayilar_.push(7);
console.log("sayilar_ : " + sayilar_);
/*burada const ile tanımlanmış bir diziye sonradan eleman ekledik ve hata vermedi, çünkü dizinin bellekte tutulduğu adres değişmedi, aynı
 adreste bulunan diziye eleman eklendi
tekrar "sayilar_ ="" yazıp yeni değerler verirsek o zaman yeni bir bellek adresi oluşur ve const değişkene yeni atama yaptığımız için hata verir */

console.log("******************");

const sayilar = [1,2,3,4,5,6]; 
const yeniSayilar = sayilar.map(function(sayi){ 
    return sayi * 2;
});

/*
Burada function(sayi) ifadesi, her bir elemana uygulanacak olan fonksiyonu temsil eder. Bu fonksiyonun parametresi sayi, dizideki her bir 
elemanı temsil eder.
Burada map fonksiyonu, dizi elemanları üzerinde bu fonksiyonu çağırır ve her bir elemanı iki katına çıkaran yeni bir dizi oluşturur. 
 */

console.log("sayilar :" + sayilar); //sayilar :1,2,3,4,5,6
console.log("yeni sayılar : "+ yeniSayilar); //yeni sayılar : 2,4,6,8,10,12
// sayilar dizisindeki her bir elemanı 2 ile çarptı ve  sonuçlar ile yeniSayilar dizisi oluşturuldu.

const kitaplar = [
    {adi : "1", sayfaSayisi : "10"},
    {adi : "2", sayfaSayisi : "20"},
    {adi : "3", sayfaSayisi : "30"}
]

const sayfaSayilari = kitaplar.map(function(kitap){
    return kitap.sayfaSayisi;
})
console.log(sayfaSayilari); // (3) ['10', '20', '30']

const kisiler =[
    {adi : "hüseyin" , soyadi : "bekar"},
    {adi : "kadir" , soyadi : "bekar"},
    {adi : "zehra" , soyadi : "bekar"}
]
const yeniIsimler = kisiler.map((kisi) => kisi.adi + " " + kisi.soyadi);
console.log(yeniIsimler); // (3) ['hüseyin bekar', 'kadir bekar', 'zehra bekar']

// kendi map yapımızı oluşturalım
 function kendiMapYapim(sayilar, islem) {
     const islemdenSonrakiDizi =[];
     for(let i=0; i<sayilar.length; i++){
         islemdenSonrakiDizi.push(islem(sayilar[i]));
     }
     /*burada sayilar dizisine gidiliyor sırayla her eleman alınıp islem(sayilar[i]) kodu sayesinde alttaki
     function(sayi){
   return sayi * 5;
}); işleminden geçiyor ve return ile islemdenSonrakiDizi'ye ekleniyor(push). yeni elemanlar ile yeni dizi oluşuyor */
     return islemdenSonrakiDizi;
 };

const islemdenSonraOlusanYeniDizi = kendiMapYapim(sayilar,function(sayi){
   return sayi * 5;
});
 console.log(islemdenSonraOlusanYeniDizi); //(6) [5, 10, 15, 20, 25, 30]

console.clear();

// filter metodu :  bir dizi üzerinde belirli bir koşulu sağlayan elemanları filtrelemek için kullanılır. 
//filter metodunu bilmeden önce diziden türü meyve olanları bulmak için :
const yiyecekler = [
    { adi: 'Elma', turu: 'meyve' },
    { adi: 'Havuç', turu: 'sebze' },
    { adi: 'Muz', turu: 'meyve' },
    { adi: 'Domates', turu: 'sebze' },
    { adi: 'Çilek', turu: 'meyve' },
  ];
  
  function meyveleriBul(){
    let meyvelerDizisi = [];
    for(let i=0; i<yiyecekler.length; i++){
        if(yiyecekler[i].turu==="meyve"){
            meyvelerDizisi.push(yiyecekler[i]);
        }
    }

    return meyvelerDizisi;
  };

  console.log(meyveleriBul());
  /*
  (3) [{…}, {…}, {…}]
0: {adi: 'Elma', turu: 'meyve'}
1: {adi: 'Muz', turu: 'meyve'}
2: {adi: 'Çilek', turu: 'meyve'}
length: 3
[[Prototype]]: Array(0) */

// filter metodu ile :

const sebzeler = yiyecekler.filter(function(yiyecek){
    return yiyecek.turu === "sebze";
});
console.log(sebzeler);
/*
(2) [{…}, {…}]
0: {adi: 'Havuç', turu: 'sebze'}
1: {adi: 'Domates', turu: 'sebze'
 */

const rakamlar =[1,2,3,4,5,6,7,8,9];

const buyukRakamlar = rakamlar.filter(function(rakam){
    return rakam > 5 ;
})
console.log(buyukRakamlar); // (4) [6, 7, 8, 9]

// kendi filter metodumuzu yazalım :
function kendiFilterYapim(dizi, filtreSartlari){
    const filtrelenmisDizi = [];
    for(i=0; i<dizi.length; i++){
        const sonuc = filtreSartlari(dizi[i], "meyve");
        if(sonuc){
            filtrelenmisDizi.push(dizi[i]);
        }
    }

    return filtrelenmisDizi;
}

function filtre(yiyecek,sart){
    return yiyecek.turu === sart;
}

const meyveler =kendiFilterYapim(yiyecekler, filtre);

console.log(meyveler);
/*
(3) [{…}, {…}, {…}]
0: {adi: 'Elma', turu: 'meyve'}
1: {adi: 'Muz', turu: 'meyve'}
2: {adi: 'Çilek', turu: 'meyve'}
 */

/*kendi filter yapimizi oluştururken parametre olarak bir dizi ve bir de filtreSartlari adında bir fonksiyon geçtik. daha sonra filtrelenmiş
sonucların bir dizide toplanması için filtrelenmisDizi adında boş bir dizi oluşturduk. sonra for döngüsü ile dizideki elemanları tek tek gezdik
sonuc isimli bir değişken oluşturduk ve bu değişkende şartın sonucunu yani doğru yanlış olma durumunu (yukarıdaki örnek için sebze olma şartı)
tuttuk ve if ile sonuc doğruysa kontrol edilen o anki elemanın filtrelenmisDiziye eklenmesini sağladık.

daha sonra yukarıdaki yiyecekler dizisi çin bir örnek yaptık ve bu dizideki meyveleri seçmek için :
const meyveler =kendiFilterYapim(yiyecekler, filtre); yazdık.
yiyecekler : dizi ismi
filtre : filtreSartlari isimli parametre yerine yazılan fonksiyon. bu fonksiyon filtrelemek için gerekli şarta uyup uymadığını kontrol eder 
mesela yukarıda sonuc değişkenindeki "sebze" filtre fonksiyonundaki şarta denk geliyor.
*/

/*farklı kullanımı :
function kendiFilterYapim(dizi, filtreSartlari){
    const filtrelenmisDizi = [];
    for(i=0; i<dizi.length; i++){
        const sonuc = filtreSartlari(dizi[i],);
        if(sonuc){
            filtrelenmisDizi.push(dizi[i]);
        }
    }

    return filtrelenmisDizi;
}

function filtre(yiyecek,sart){
    return yiyecek.turu === sart;
}

const meyveler =kendiFilterYapim(yiyecekler, function(yiyecek){
    return yiyecek.turu === "meyve";
});

console.log(meyveler);

buradaki farklılık kendifilteryapimda filtre adındaki fonksiyon yerine isimsiz bir fonksiyon yazıp sartı bu şekilde de kontrol edebiliriz.
 */


// kendi filter yapıma kendi örneğim :
const renkler = [
    {renk : "açık mavi", ton : "açık"},
    {renk : "açık pembe", ton : "açık"},
    {renk : "koyu mavi", ton : "koyu"},
    {renk : "koyu pembe", ton : "koyu"},
];

function benimFilterYapim(dizi, sartlar){
    let filtrelenmisRenkDizisi = [];
    for (let i=0; i< dizi.length; i++){
        const renk = sartlar(dizi[i]);
        if (renk){
            filtrelenmisRenkDizisi.push(dizi[i]);
        }
    }
    return filtrelenmisRenkDizisi;
};

const acikRenkler = benimFilterYapim(renkler, function(renk){
    return renk.ton === "açık";
});

console.log(acikRenkler);
/*
0: {renk: 'açık mavi', ton: 'açık'}
1: {renk: 'açık pembe', ton: 'açık'}
length: 2
[[Prototype]]: Array(0) */