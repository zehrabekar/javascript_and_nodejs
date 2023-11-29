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


alert('merhaba'); //tarayıcı açıldığında küçük pencerede merhaba mesajı çıkar

let rakam = 9;
alert(rakam);

let girilenSayi = prompt("bir sayı giriniz");
console.log(girilenSayi); 
//prompt : tarayıcı açıldığında gelen küçük pencere ile kullanıcıdan veri alırken kullanılır. 


/* Js primitives vs. reference types

-primitive type (ilkel tip):
number, string, boolean, undefined, null, symbol, BigInt

-reference type(referans tipler):
object, array, functions
*/

