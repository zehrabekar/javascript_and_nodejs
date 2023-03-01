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

let ismim= "zehra"
if (ismim === "zehra") 
    console.log("merhaba zehra")
// bu şekilde tek satır varsa {} kullanmaya gerek yok

let ismim1= "zehra"
if (ismim1 === "zehra") {
    console.log("merhaba zehra")
    console.log("nasılsın")
}

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