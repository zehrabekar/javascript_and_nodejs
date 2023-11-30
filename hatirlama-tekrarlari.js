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