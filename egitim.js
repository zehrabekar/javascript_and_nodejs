/*1.bölüm*/
/*
console.log("Merhaba from egitim.js")*/

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

// bir değişken oluştururken let veya const kullanmadan da oluşturulur fakat doğru değildir kullanılmaması gerekir
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

//aritmetik operatörler + - * / %
let sayi5 = 10
let sayi6 = 10

let sonuc = sayi5 + sayi6
sonuc = sayi5 - sayi6
sonuc = sayi5 * sayi6
sonuc = sayi5 / sayi6
console.log(sonuc)

// % mod demektir, bölümünden kalanı gösterir
sonuc = sayi5 % sayi6
console.log(sonuc)

let isim1 = "zehra"
let soyisim1 = 'bekar'
let tamisimm = isim1 - soyisim1
console.log(tamisimm) // sonuç olarak NaN geldi. bu not a number demektir

// string ifadelerde operatörlerden sadece + kullanmak işe yarar diğerlerinin bir önemi yoktur

let yas3 = 30
let metinOlarakYas = '30'
console.log(yas3+100)// çıktı = 130
console.log(metinOlarakYas+100) // çıktı= 30100, toplama işlemi yapmadı çünkü '30' string bir ifade

console.log(metinOlarakYas - 10) // cevap = 20
console.log(metinOlarakYas * 10)// cevap = 300
console.log(metinOlarakYas / 10)// cevap = 3
console.clear()
// - * / de '30' string bir ifade olmasına rağmen + dan farklı olarak '30'u number çevirip matematiksel işlem yaptı 

// arttırma-azaltma operatörleri
sayi = sayi + 1
console.log(sayi) //çıktı = 90
// sayi++ = (sayi = sayi + 1)
sayi++ // sayi+1
sayi-- // sayi-1  

sayi++; // önce sayıyı kullan sonra sayiyi 1 arttır
++sayi; //  önce sayiyi 1 arttır sonra sayıyı kullan
--sayi; //  önce sayiyi 1 azalt sonra sayıyı kullan
sayi--; // önce sayıyı kullan sonra sayiyi 1 azalt

console.log( "Sayı :" + sayi)// sonuç 90
console.log( "Sayı :" + sayi++) // yine 90 önce sayıyı kullandı sonra , 
console.log(sayi)// sayiya bir ekledi sayinin değeri 91 oldu
console.log("Sayı :" +  (++sayi)) //91 değerinin üzerine önce bir ekledi sonra sayıyı kullandı sonuç 92


/* Aritmetik ortalama operatörleri:
+= -= *= /= %= */
let sayim = 10;
let sayim1 = 4;
sayim1 += sayim // sayim1 = sayim1 + sayim
console.log(sayim1) //14
sayim1 -= sayim // sayim1 = sayim1 - sayim
console.log(sayim1) //sayim1'in değeri önceki şlemle 14 olmuştu. 14-sayim(10)= 4 

//karşılaştırma operatörleri
console.log(sayim1 > sayim) // false
console.log(sayim1 < sayim) // true
console.log(sayim1 <= sayim) // true
console.log(sayim1 >= sayim) // false
console.log(sayim1 != sayim) // true (eşit değil midir? değildir)
console.log(sayim1 == sayim) // false (eşit midir? değildir)
console.clear()

let kalem = 30
let metinOlarakKalemAdedi = '30'

console.log(kalem == metinOlarakKalemAdedi) // true dedi. normalde biri string biri number fakat çift eşittirde karşılaştırma işlemi sadece değerlere bakarak yapılır veri tiplerine göre yapılmaz
console.log(kalem === metinOlarakKalemAdedi) // cevap false çünkü veri tipleri farklı
console.log(kalem !== metinOlarakKalemAdedi)// true . eşit değil mi? değil

// mantıksal operatörler ve, veya
console.log((sayim > 5 ) && (sayim1 <10)) //true
console.log((sayim < 5 ) || (sayim1 <10)) //true

let sonucc = 4*2/4-1*5; // işlem önceliği
console.log(sonucc) // -3

//ödev soruları çözümleri
//1.ödev 
/*
let saniye = 130
console.log( "130 saniye :" + saniye/60 +  ' '+  "dakika" + ' ' + saniye%60 + ' '+ "saniye") 

let saniyeString = prompt("saniye değeri giriniz","130") //buradaki 100 varsayılan değerdir, kullanıcı değer girmezse 100 kabul edilir
//prompt ile girilen değerler string olarak kabul dildiğinden number yapıyoruz
let saniyee = parseInt(saniyeString) 

let dakika = parseInt((saniyee/60),10) //buradaki 10 dakikanın küsürrlü yazılmaması için sayının onluk sisteme göre yazılmasını sağlar
let kalanSaniye = saniyee % 60

console.log(typeof saniyee)
console.log( `Girdiğiniz ${saniyee} değeri : ${dakika} dakika ve ${kalanSaniye} saniyedir`);
*/
//2.ödev
let fahrenheit = 100
let celcius = 5/9 * (fahrenheit - 32)
console.log(fahrenheit +' '+ "fahrenheit" + ' '+ celcius.toFixed(2)+ ' '+ "celcius"+ ' '+ "derecedir") // normalde 37.77777777777778 değerini verdi. noktadan sonra iki basamak olması için toFixed(2) yazdık ve 37.78 değerini verdi

//3.ödev
let artikYilMi = 2088
console.log((artikYilMi%400==0) || (artikYilMi%4==0) && (artikYilMi%100==0))












