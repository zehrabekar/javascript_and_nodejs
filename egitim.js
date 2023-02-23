/*1.bölüm*/
console.log("Merhaba from egitim.js")

/* 2.bölüm*/
//temeller
var plaka = 54
console.log(plaka)
console.log(plaka)
console.log(plaka)
console.log(plaka)
console.log(plaka)

let _sayi = 123
let $sayi =456
let sayi11 = 458
let benim_kimlik_numaram = 123456

let sayi2;
console.log(sayi2);
// bu şekilde sayi2'ye değer vermeden yazdırma işlemi yaptırdığımızda undefined olarak göründü

sayi2=50;
console.log(sayi2);
//şimdi sayi2 ile ekranda 50 değeri göründü

sayi2=60;
sayi2=70;
console.log(sayi2);
// sayi2'ye iki değer verdim, ekranda verilen son değer göründü

// const ile değişken tanımladığımda o değişkene verdiğimiz değer sabit kalır ve sayi2de yaptığım gibi sonradan eklediğim değer kabul edilmez
/*const piSayisi = 3.14
piSayisi=3.15
console.log(piSayisi)
sabit değişkene tekrar değer atama işlemi yapmaya çalıştığım için hata verdi*/

const piSayisi = 3.14
console.log(piSayisi)

// bir değişken oluştururken let veya const kullanmadan da oluşturulur fakat doğru değilir kullanılmaması gerekir
notum = 100;
console.log(notum)

// ekrana yazdırma 
let yas = 1
console.log(yas) //inspect -> console kısmında yas değişkeninin değerini yazdırır
console.error("yanlış işlem") // hata mesajı
console.warn("şifre daha uzun olmalı") //uyarı mesajı
console.clear() // kendinden önce var olan tüm kodları siler
console.table({ ad : "zehra", yas : 22}); //tablo görünümü

console.time("id")
console.log(1)
console.log(1)
console.log(1)
console.log(1)
console.timeEnd("id")
console.clear()
// time ve timeEnd (ikisinde de id yazıyor) arasında yazılanların kaç saniyede çalıştırıldığı gösterilir

/*
alert("merhaba")//tarayıcı açıldığında küçük pencerede merhaba mesajı çıkar

let sayii=60
alert(sayii) //  açılan küçük ekranda sayii değişkeninin değerini gösterir

prompt("bir sayı giriniz") //tarayıcı açıldığında gelen küçük pencere ile kullanıcıdan veri alırken kullanılır. buraya girilen değer nereye gidiyor bilmiyoruz

let girilenDeger = prompt("bir sayı giriniz") 
console.log(girilenDeger)*/
//girdiğimiz değer girilenDeger adlı değişkene aktarılır ve console.log ile o değeri console kısmında görebiliriz.

//veri tipleri
let sayi=89;
console.log(sayi)
console.log(typeof sayi) // typeof ile verinin türünü öğreniriz

let ondalikSayi = 2.35;
console.log(ondalikSayi)
console.log(typeof ondalikSayi) 

let negatifSayi = -25
console.log(negatifSayi)
console.log(typeof negatifSayi)
//negatif, ondalık, pozitif farketmeksizin hepsinin türü number.

let isim = "zehra"
let soyisim = 'bekar'
console.log(isim)
console.log(typeof isim)

let tamisim = isim + ' ' + soyisim //boşluk için tırnak arasına boşluk koy
console.log(tamisim)

//template literal - backtick
let tamisim2 = `${isim} ${soyisim}` // alt gr + virgüle basarak yan tırnakları yaptık
console.log("template literal : " + tamisim2)
console.log(`template literal ile yazdır : ${tamisim2}`)

let cumle = 'zehra\'nın bilgisayarı' //tek tırnak içinde kesme işareti kullanabilmek için işaretten önce \ kullanmak gerekir.
let cumle2 = "zehra'nın bilgisayarı"
console.log(cumle)
console.log(cumle2)

let asalSayiMi = true;
console.log("veri türümüzün değeri : " + asalSayiMi + " veri tipi : " + typeof asalSayiMi)
console.log(`veri türümüzün değeri ${asalSayiMi} veri tipi : ${typeof asalSayiMi}` ); // template literal ile

let renk;
console.log(renk)//çıktı olarak undefined geldi, yani değişken tanımlanmış ama değer verilmemiş
console.log(typeof renk)// veri tipi undefined 
renk ="sarı" 
console.log(renk)
console.log(typeof renk)//string

let yas1 = null ;
console.log("değer :" + yas1 + " veri tipi :" + typeof yas1) // veri tipi object olarak göründü fakar null primitive tiptir referans tip değildir
//null boş değer demektir.

// bunların dışında kalanlar referans veri tipidir(object, array, ...)























