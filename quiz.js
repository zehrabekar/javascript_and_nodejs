/*1- For, while döngüsü ile dışarıdan girilen bir sayının faktöriyelini alma
 girilen sayı: 6
 çıktı: 720*/

/*
let girilenSayi = parseInt(prompt("faktöriyeli hesaplanacak bir sayı giriniz","6"))
let carpim = 1;
for (let i=1; i<=girilenSayi; i++){
    carpim = carpim * i;
}
console.log("for döngüsü ile girdiğiniz sayının faktöriyeli : " + carpim)*/

/*
let girilecekSayi = parseInt(prompt("faktöriyeli hesaplanacak bir sayı giriniz","6"))
let i=1;
let carpim2=1;
while(i<=girilecekSayi){
    carpim2 = carpim2 * i;
    i++;
}
console.log("while döngüsü ile girdiğiniz sayının faktöriyeli : " + carpim2) */


/*2- For, while döngüsü ile dışarıdan girilen bir sayıya kadar sadece 3 e tam bölünen sayıların yazdırılması 
 girilen sayı - 104 : 
 çıktı: 3, 6, 9 …. 102*/

 /*
let kullaniciSayisi = parseInt(prompt("bir sayı giriniz","104"))
let sonuc = "";

for( let i=1; i<=kullaniciSayisi; i++) {

    if(i%3==0){
        sonuc = sonuc + i + " , "
    }
}
console.log("for döngüsü ile sonuc : " + sonuc)*/

/*
let kullaniciSayisi2 = parseInt(prompt("bir sayı giriniz","104"))
let sonucc = "";
let i=1;
while(i<=kullaniciSayisi2){
    if(i%3==0){
        sonucc = sonucc + i + " , "
    }
    i++
}
console.log("while döngüsü ile sonuc : " + sonucc)*/


/*3- If else , switch-case kullanarak 12 ye kadar girilen sayıların ay karşılığının yazılması
 girilen sayı: 5
 çıktı: mayıs*/
 /*
let aylar = parseInt(prompt("12ye kadar bir sayı giriniz","5"))

if(aylar==1){
    console.log("ocak")
}else if (aylar==2) {
    console.log("şubat")
}else if (aylar==3) {
    console.log("mart")
}else if (aylar==4) {
    console.log("nisan")
}else if (aylar==5) {
    console.log("mayıs")
}else if (aylar==6) {
    console.log("haziran")
}else if (aylar==7) {
    console.log("temmuz")
}else if (aylar==8) {
    console.log("ağustos")
}else if (aylar==9) {
    console.log("eylül")
}else if (aylar==10) {
    console.log("ekim")
}else if (aylar==11) {
    console.log("kasım")
}else if (aylar==12) {
    console.log("aralık")
}else {
    console.log("girdiğiniz sayının ay karşılığı yoktur")
}
*/
/*
let hangiAy = parseInt(prompt("12ye kadar bir sayı giriniz","5"))
switch(hangiAy) {
    case 1 : console.log("ocak") ;break;
    case 2 : console.log("şubat"); break;
    case 3 : console.log("mart"); break;
    case 4 : console.log("nisan") ;break;
    case 5 : console.log("mayıs"); break;
    case 6 : console.log("haziran"); break;
    case 7 : console.log("temmuz"); break;
    case 8 : console.log("ağustos"); break;
    case 9 : console.log("eylül"); break;
    case 10 : console.log("ekim"); break;
    case 11: console.log("kasım"); break;
    case 12: console.log("aralık"); break;
    default : console.log ("geçersiz değer girdiniz"); break;
 }
*/

/*4- For, while döngüsü ile girilen sayıyı tersten yazdırma
 girilen sayı: 6
 çıktı: 6,5,4,3,2,1*/

 /*
let tersSayi = parseInt(prompt("tersten yazdırılacak bir sayı giriniz ","6"))
yazdirilacakCikti="";
for(let i=tersSayi; i>=1; i--){
    if(i!=1){
    yazdirilacakCikti = yazdirilacakCikti + i + " , "
   } else {
    yazdirilacakCikti = yazdirilacakCikti + i 
   }
}
console.log("for döngüsü ile sonuç :" + yazdirilacakCikti)*/

/*
let yazdirilacakCikti2 = "";
let tersSayi2 = parseInt(prompt("tersten yazdırılacak bir sayı giriniz ","6"))
let i=1;
while(tersSayi2>=i){
    yazdirilacakCikti2 = yazdirilacakCikti2 + tersSayi2 + ","
    tersSayi2--
}
console.log("while döngüsü ile sonuç :" + yazdirilacakCikti2 )
*/


/*5- For, while döngüsü ile girilen sayıya kadar sadece çift sayıların toplamını alan bir program
 girilen sayı: 35
 toplam: 2 + 4 + 6. ……. 34 = …*/
 
 /*
 let ciftSayilar = parseInt(prompt("bir sayı giriniz ","35"))
 let toplamm=0;
 yazdirilacakMetin="";

for(let i=0; i<=ciftSayilar; i++){

    if(i%2 == 0){
        toplamm = toplamm +i
    }
}
console.log(toplamm)*/

/*
let ciftSayiToplam = parseInt(prompt("bir sayı giriniz ","35"))
let toplami=0;
toplamsonucu="";
let i=0;
while(i<=ciftSayiToplam){
    
    if(i%2 == 0){
        toplami = toplami +i
       
    }
    i++;
}
console.log(toplami)*/





