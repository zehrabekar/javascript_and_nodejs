// değişken oluşturma, ekrana değişkeni ve türünü yazdırma
let degisken1 = "zehra";
let degisken2 = 5;
let degisken3 = true;
const derece = 100; // const ile değişkene sabit bir değer verilir ve başka bir değer verilmeye çalışılırsa hata alırız.

console.log(degisken1,degisken2,degisken3,derece); // sonuç : zehra 5 true 100
console.log(typeof degisken1, typeof degisken2, typeof degisken3, typeof derece); // sonuç : string number boolean number
//typeof ile veri türünü öğreniriz
//sayılarda negatif, ondalık, pozitif farketmeksizin hepsinin türü number

/* değişken isimlendirme kuralları :
-değişken isimleri js anahtar sözcüklerinden olamaz,
-harfle , _ ile ya da $ ile başlamalı (sayi ile başlayamaz fakat isim içinde sayı kullanılabilir),
-isim içinde boşluk bulunamaz,
-özel karakterler bulunmamalı (+ , - , * gibi),
-js büyük küçük harf duyarlıdır, a ve A farklı değişkenlerdir,
örnek : $sayi , _sayi , sayi , Sayi , sayi1 
*/

// bir değişkene birden fazla değer atanırsa son verilen değer ekranda görünür :
let isim = "zehra";
isim = "kadir";
isim = "hüseyin";
console.log(isim); // sonuç : hüseyin

// değer verilmeyen değişken yazdırılmak istenirse undefined (tanımsız) olarak görünür.
let gun;
console.log(gun); // undefined
gun = "cuma";
console.log(gun); // cuma

console.clear() // kendinden önce var olan tüm kodları siler, bu kodu yazdıktan sonra üstte console kısmına yazdırılan isim gun vb. gibi değerler artık görünmüyor.

/*
alert('merhaba'); //tarayıcı açıldığında küçük pencerede merhaba mesajı çıkar

let rakam = 9;
alert(rakam);

let girilenSayi = prompt("bir sayı giriniz");
console.log(girilenSayi); */
//prompt : tarayıcı açıldığında gelen küçük pencere ile kullanıcıdan veri alırken kullanılır. 


/* Js primitives vs. reference types

-primitive type (ilkel tip):
number, string, boolean, undefined, null, symbol, BigInt

-reference type(referans tipler):
object, array, functions
*/

//if-else

let yas1= 10;
let yas2=12;
let sonuc;

if(yas1>yas2) {
    console.log(yas1+yas2)
}
else {
    console.log(yas1-yas2)
} // sonuç -2

// bu döngünün ternary if kullanılarak yapılması :

sonuc = (yas1>yas2) ? (yas1+yas2) : (yas1-yas2)
console.log("sonuc : " + sonuc)

console.clear();

//switch-case 
let hangiGun=2;

switch(hangiGun) {
    case 1 :  console.log("pzt"); break; 
    case 2 :  console.log("salı"); break; 
    case 3 :  console.log("çrş"); break; 
}
console.log("döngüden çıkıldı");

/*truthy-falsy :

bu kavramlar bir değerin bir koşul ifadesinde boolean bir değere dönüştürüldüğünde nasıl davrandığını ifade eder.

if (deger) {
   Bu blok, "deger" true olarak değerlendirildiğinde çalışır.
} else {
   Bu blok, "deger" false olarak değerlendirildiğinde çalışır.
}
Burada deger ifadesi, bir koşul ifadesinde kullanıldığında, otomatik olarak bir boolean değere dönüşür. Eğer deger truthy bir değerse,
if bloğu çalışır; eğer deger falsy bir değerse, else bloğu çalışır.

-true, bir sayı (sıfır olmayan herhangi bir sayı), bir dize (boş olmayan herhangi bir dize) truthy değerlere örnektir.
-false, null, undefined, 0, NaN, ve boş bir dize ("") falsy değerlere örnektir.
*/
//Örnekler :

let deger=0;

if(deger) {
    console.log("bu true ifade")
}
else {
    console.log("bu false ifade")
}
/* çıktı olarak bu false ifade yazdırdı çünkü deger değişkenine verdiğimiz değer 0 ve biz değişkenlere false, null, undefined, 0, NaN, ve 
boş bir dize("") verirsek bize falsy değerler olduğundan if bloğu değil else bloğu çalışır.*/

let adim = "zehra";
if (adim) {
    console.log("truthy")
}
else {
    console.log("falsy")
}
//çıktı : truthy

//for döngüsü
// for(ilk atama; döngü çalıştırma şartı; her çalışma sonrası ne olacağı)

for(let i=0, j=0; (i+j) < 20 ; i=i+5, j=j+2) {
    console.log("döngü çalıştı") 
    console.log("i değeri:" +i+ " j değeri:" + j + " i+j değeri : " +(i+j))
 }
/* burada i ve j adında iki deişken oluşturup her ikine 0 değeri verdik. sonra bu iki değişkenin toplamı 20den küçük olduğu durumlarda döngünün 
çalışmasını sağladık (i+j <20 ) ve her çalışma sonrasında i'ye 5 j'ye 2 eklenerek yeni değerlerle işlem yapılmasını sağladık. */
/* sonuç :
döngü çalıştı
i değeri:0 j değeri:0 i+j değeri : 0
döngü çalıştı
i değeri:5 j değeri:2 i+j değeri : 7
döngü çalıştı
i değeri:10 j değeri:4 i+j değeri : 14
*/

// tekrar sayısı belli olan durumlarda for döngüsü kullanırız
// i değişkenini birden fazla kez tanımlayabiliyoruz çünkü tanımlanan i değişkeni o for döngüsü içindir. Döngü içinde tanımlanan değişken döngü dışında kullanılamaz.
//döngü dışında tanımlanan değşken döngü içinde kullanılabilir

console.clear();

//while:
let say = 5
while (say < 15) {
   console.log(" while döngüsü çalıştı")
   say++
}
   console.log(" while döngüsü çalıştı")
// say değişkeninin 15'ten küçük olduğu durumlarda döngü çalıştı ve ekrana 10 kez while döngüsü çalıştı yazdırdı.

//do-while
let yasimm =22
do {
   console.log("do-while döngüsü")
} while(yasimm > 30);
/*do-while döngüsündeki şart sağlanmasa bile döngü bir kez çalıştırılır. mesela burada yasimm değişkeni 30dan büyük olmadığı halde ekrana bir kez  
"do-while döngüsü" yazdırıldı*/

//break
for(let i=0; i<20 ; i++) {
    if (i==12) {
       break;
    }
    console.log("break kullanımı")
 }
 /* break komutu döngünün çalışmasını durdurur. burada i değişkeninin 20den küçük olduğu durumlarda çalışması fakat i değişkeni 12ye eşit olduğunda döngünün durması istenmiş.
 değişken 1 artarak 12 olduğunda döngü çalışmaı bırakmıs ve ekrana 12 kez break kullanımı yazdırılmıştır*/

//iterasyon : İterasyon, bir döngünün bir kez çalıştırılması veya bir döngü içinde bir defa dönülmesi anlamına gelir.

/*continue :
bir döngünün içinde bulunduğu bloğun geri kalanını atlayarak döngünün bir sonraki iterasyonuna geçmesini sağlar. Bu, döngü içindeki belirli bir 
durumu kontrol etmek ve sadece belirli koşullar altında bazı kodu çalıştırmak için kullanışlıdır.*/

for (let i = 0; i < 5; i++) {
    if (i === 2) {
      // i'nin değeri 2 olduğunda bu iterasyonu atla
      continue;
    }
    console.log(i);
  }
//çıktı: 0 1 3 4 

 //return
/*for içinde return kullanımı sadece fonksiyon içindeyse olur, yoksa illegal return statement hatası alınır*/
/*for (let i=0; i<10; i++) {
   if (i==5) { 
      return
   }
 console.log("return kullanımı"+ i)} // üsteki hatayı verdi*/

//fonksiyonlar
//fonksiyon tanımlama : function fonksiyonAdı
function selamver() {
    console.log("Merhaba")
}
// fonskiyon çağırma :
selamver(); // consoleda merhaba yazdı

function sayilariCarp (sayi1,sayi2) {
    console.log("sayıların çarpımı : " + (sayi1*sayi2));
    return sayi1*sayi2
}

sayilariCarp(2,3);

console.clear();

// global ve local scope, shadowed variable
/*
global scope : bütün dosya boyunca bilinen değişkenlerdir.
local scope : tanımı bir döngü ya da fonksion içinde yapılan , tüm dosya boyunca bilinmeyen değişkenlerdir.
shadowed variable : scopeları farklı aynı isimli değişkenlere denir. 
örnekler:
*/
let ay = "aralik"; // global scope

function renkler() {
    let renk = "mor"; // local scope. sadece fonksiyon içinde var olan bir değişken
    console.log(renk);
}
renkler(); // fonksiyonu çağırınca mor çıktısını verdi.
 // console.log(renk); -> fonksiyon dışında renk değişkenini yazdıramadım, renk is not defined hatası verdi.

merhaba();
function merhaba() {
    let yas3 = 22;
    console.log("fonksiyon içinde yaş : " + yas3); //22
}
let yas3 = 12;
console.log("fonksiyon dışında yaş : " + yas3); // 12

// aynı isimli değişkeni farklı scopelarda tanımladığım için problem çıkmadı. (yas3 -> shadowed variable)

// fat arrow kullanımı 
// normal fonksiyon oluşturma
function selamVer() {
    console.log("selam");
};
selamVer(); //selam

// fonksiyonu değişkene atama :
let merhabaDegisken = function merhaba(){
    console.log("değişkene atanmış fonksiyon ile merhaba");
}
console.log(merhabaDegisken);
/* çıktısı : 
ƒ merhaba(){
    console.log("değişkene atanmış fonksiyon ile merhaba");
}*/

merhabaDegisken(); // değişkene atanmış fonksiyon ile merhaba

// fat arrow ile yazım :
const merhabaa = () => {
    console.log("merhabaa fat arrow");
}
merhabaa(); //merhabaa fat arrow

// parametre alan geriye değer döndüren fonksiyonlara örnek :
const sayilariTopla= function (s1,s2) {
    return s1 + s2 ;
}
console.log(sayilariTopla(5,6));

//fat arrow ile :

const sayilarinToplami = (s1,s2) => s1 + s2;

console.log(sayilarinToplami(3,5));

console.clear();

//array

//dizi oluşturma
let renkler_ = ["sarı","yeşil","mavi","mor"];
console.log("renkler :" + renkler_); // sari,yeşil,mavi,mor

//dizizde 2. indexteki elemana ulaşma
console.log(renkler_[2]); // mavi

// diziye yeni eleman ekleme 
renkler_[4] = "pembe";
console.log(renkler_[4]); // pembe

// 1. indexteki elemanı değiştirme
renkler_[1]="beyaz";
console.log("yeni renkler_ dizisinin elemanları : " + renkler_); // yeni renkler_ dizisinin elemanları : sarı,beyaz,mavi,mor,pembe

//dizideki eleman sayısını bulma 
console.log(renkler_.length); // 5

// for döngüsü ile dizideki elemanları ekrana tek tek yazdırma
for( let i=0; i< renkler_.length; i++) {
    console.log(renkler_[i]);
}; // alt alta sarı beyaz mavi mor pembe yazdırdı

//For/Of döngüsü ile diziler üzerindeki tüm elemanlara kolaylıkla ulaşabiliriz.

for (let oankidizielemani of renkler_) {
    console.log(oankidizielemani);
}
// çıktı olarak alt alta dizi elemanlarını verdi.

console.clear();

//object
let ben = {
    adi : "zehra",
    soyAdi : "bekar",
    dogumYili : 2001,
    sevdigiRenkler : ["yeşil", "pembe"],
    yasHesapla : function (dogumYili) {
        return 2023 - dogumYili;
    }
    
};

console.log(ben);
console.log(ben.adi);
console.log(ben["soyAdi"]);

let yasi = ben.yasHesapla(2001);
console.log(yasi); //22
console.log(ben.yasHesapla(2001)); //22

let ayse = {
    ad : "ayşe",
    gozRengi : "kahverengi",
    dogumYili : 1999,
    yasiniHesapla : function() {
        return 2023 - this.dogumYili;
        /*burada fonksiyona parametre olarak dogumYilini yazmadan kullanmaya kalktığımızda dugumYilini tanımadığı için hata veriyor bu yüzden
        oluşturduğumuz nesnedeki istediğimiz o alanı kullanabilmek için this kelimesini kullanırız */
    }
}

let yas = ayse.yasiniHesapla(2001);
console.log("aysenin yasi : " + yas);

let fatma = {
    adi : "fatma",
    boy : 170,
    dogumYili : 1995,
    yasiHesapla : function () {
        this.yas = 2023 - this.dogumYili;
        /*normalde bu nesne içinde yas diye bir alan yok fakat fonksiyon tetiklendiği an yas adlı key değeri ekleniyor*/
    }
};
// yas değerine ulaşmak için önce fonksiyon çalışmalı :
fatma.yasiHesapla();
// fonksiyon tetiklendikten sonra yas değerine erişebiliriz
console.log("fatmanın yaşı : " + fatma.yas);

// bu objeleri dizi içinde saklayabiliriz :
let kisiler = [ben, ayse , fatma]
console.log(kisiler[1].ad); // ayşe

ben.soyAdi = "bekarr";
console.log(ben.soyAdi); // bekarr
