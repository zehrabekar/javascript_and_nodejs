// if-else
let ayseninYasi = 30, fatmaninYasi=25;

if (ayseninYasi < fatmaninYasi) {
    console.log("Ayşe Fatma'dan küçük")
}
else {
    console.log("Ayşe Fatma'dan büyük.")//eğer ayşe ve fatmanın yaşı eşit olsaydı yine else kısmı çalışırdı çünkü ayşenin fatmadan küçük olmadığı her urumda çalışır. else çalıştı
}
// doğru ise if yanlış ise else çalışır

fatmaninYasi = 30;
if (ayseninYasi < fatmaninYasi) {
    console.log("Ayşe Fatma'dan küçük")
}

else if(ayseninYasi===fatmaninYasi) {
    console.log("yaşıtlar")
}

else {
    console.log("Ayşe Fatma'dan büyük.")
} // else if çalıştı

// if (ayseninYasi < fatmaninYasi) -> bundan sonra ; kullanılmamalı
/*
let ismim= "zehra"
if (ismim === "zehra") 
    console.log("merhaba zehra")*/
// bu şekilde tek satır varsa {} kullanmaya gerek yok
/*
let ismim1= "zehra"
if (ismim1 === "zehra") {
    console.log("merhaba zehra")
    console.log("nasılsın")
}
*/
let rakam = 5, rakam1 = 6
    if(rakam > rakam1) {
        if (rakam <0)
        console.log("if çalıştı")
    }
    else {
        console.log("else çalıştı")
    }
/*
let asalSayiMi = true
 if (asalSayiMi == true) = if (asalSayiMi) 
 asalSayiMi değişkenine true değerini verdikten sonra tekrar  if (asalSayiMi == true) yazmamıza gerek yoktur. onun yerine direkt if (asalSayiMi) yazdığımızda zaten true 
 algılanır*/

 // (ternary  kısa if kullanımı)
 
 let a = 10, b=5, c=0;
 if (a > b) {
    c = a+b
 }
else {
    c = a-b
}
console.log("c sayısı :"+c)

// yukarıdaki if işleminin kısa yolu : 
c = (a > b) ? (a + b) : (a - b)
console.log("c'nin yeni değeri :" +c)

/* buradaki ?'nin anlamı : "eğer a b'en büyük ise" cümlesindeki ise'nin karşılığıdır
: 'nın anlamı ise else'e karşılık gelir. */

//---------------------------------------------------------------------------------------

// switch-case
/*
let haftaninKacinciGunu = 3;

if (haftaninKacinciGunu ===1) {
    console.log("pazartesi")

} else if (haftaninKacinciGunu === 2) {
    console.log("salı")

}else if (haftaninKacinciGunu === 3) {
    console.log("çarşamba")

}else if (haftaninKacinciGunu === 4) {
        console.log("perşembe")

}else if (haftaninKacinciGunu === 5) {
            console.log("cuma")

}else if (haftaninKacinciGunu === 6) {
    console.log("cumartesi")

} else (haftaninKacinciGunu === 7) {
    console.log("pazar")}
 ard arda if else kullanak yerine switch-case kullanmak daha okunaklı*/

 let  haftaninKacinciGunuu = 7;

 switch(haftaninKacinciGunuu) {
    case 1 : console.log("pazartesi") ;break;
    case 2 : console.log("salı"); break;
    case 3 : console.log("çarşamba"); break;
    case 4 : console.log("perşembe") ;break;
    case 5 : console.log("cuma"); break;
    case 6 : console.log("cumartesi"); break;
    case 7 : console.log("pazar"); break;
    default : console.log ("geçersiz değer girdiniz"); break;
 }
 console.log("switch'den çıkıldı");
/*
-switch yazdıktan sonra bakılacak değişkeni yazıyoruz (haftaninKacinciGunuu).
-her caseden sonra break koymazsak değer case 1de karşılansa dahi diğer değerleri bitene kadar yazdırmaya devam eder.
-default değeri değişkene verilen değerin karşılığı yoksa çalışır (mesela 10 yazarsak).
-değişkenin değerine göre çalışan caseden sonra break çalışınca switchden çıkılır (bunu göstermek için
console.log("switch'den çıkıldı"); yazdık ) 
*/
console.clear();
//---------------------------------------------------------------------------------------

//truthy - falsey
// FALSE, 0 , "" , null , undefined, NaN -> falsey ; diğer her şey (yani içinde veri olanlar) truthy

const yasi = 32;
if (yasi > 20) {
    console.log( "bu true ifadedir");
}
else {
    console.log( "bu false ifadedir");
}
// bunun yerine
const yasi1 = 32;
if (yasi1) {
    console.log( "bu true ifadedir");
}
else {
    console.log( "bu false ifadedir");
}
// sonuc olarak : bu true ifadedir yazdı. içinde FALSE, 0 , "" , null , undefined, NaN harici şeyler yazdığı zaman true olur.

if (false) {
    console.log( "bu true ifadedir");
}
else {
    console.log( "bu false ifadedir");
}
//çıktı : bu false ifadedir. değişken olarak false yerine true yazınca bu true ifadedir yazdı

let kitap = 15;
kitap = 0;
if (kitap) {
    console.log("true ifade")
}
else {
    console.log("false ifade")
}
// değer olarak 0 verdiğimiz için false ifade çıktısını verdi

let hacer="melike"
if (hacer) {
    console.log("true ifade")
}
else {
    console.log("false ifade")
}
console.clear()
// true ifade.hacer değişkeninde herhangi bir veri var mı? var (falsey yapanlar harici) o zaman true ifadedir çıktısını verir.
// melike değeri yerine ( '', null , undefined ) verseydik false ifade çıktısını verirdi.

let dogumSene = 2001;
if (dogumSene) {
    console.log("true ifade")
}
else {
    console.log("false ifade")
}
//true ifade

let dogumSenee = 2001;
dogumSenee="ben"
if (dogumSenee) {
    console.log("true ifade")
}
else {
    console.log("false ifade")
}
//true ifade

let dogumSenem = 2001;
dogumSenem="ben"
if (dogumSenem + 99) {
    console.log("true ifade")
}
else {
    console.log("false ifade")
}
/* true ifade . stringlerde + birleştirme demektir . ben99 haline getirdi ve yine string bir ifade olduğundan hata almadık fakat *99 yaptığımızda NaN olacağından false
sonucunu alacağız*/

let dogumSenemm = 2001;
dogumSenemm="ben"
if (dogumSenemm * 99) {
    console.log("true ifade")
}
else {
    console.log("false ifade")
}
// false ifadedir sonucu çıktı
console.clear();























