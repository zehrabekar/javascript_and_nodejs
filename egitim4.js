//sorular

//s-1 : girilen 3 sayısının ortalamsını hesapla
/*
let sayiBir = parseInt(prompt("birinci sayıyı giriniz"))
let sayiIki = parseInt(prompt("ikinci sayıyı giriniz"))
let sayiUc = parseInt(prompt("üçüncü sayıyı giriniz"))
let ortalama = ((sayiBir + sayiIki + sayiUc)/3)
alert("ortalama :" + ortalama)

-----------------------------------------------------------------------------*/

//s-2 : klavyeden kenarları girilen bir üçgenin çeşidini veren uygulama

//benim çözümüm 
/*
let kenarBir = parseInt(prompt("birinci kenarı giriniz","5"))
let kenarIki = parseInt(prompt("ikinci kenarı giriniz","5"))
let kenarUc = parseInt(prompt("ucuncu kenarı giriniz","5"))

if((kenarBir===kenarIki)&& (kenarIki===kenarUc)){ 
    alert("bu eşkenar bir üçgendir")
}else if ((kenarBir===kenarIki && kenarBir!==kenarUc) || (kenarBir===kenarUc && kenarBir!==kenarIki) || (kenarIki===kenarUc && kenarIki!==kenarBir)) {
    alert("bu ikizkenar bir üçgendir")
} else {
    alert("bu çeşitkenar bir üçgendir")
}

2.yol
let kenarBir = parseInt(prompt("birinci kenarı giriniz","5"))
let kenarIki = parseInt(prompt("ikinci kenarı giriniz","5"))
let kenarUc = parseInt(prompt("ucuncu kenarı giriniz","5"))

if((kenarBir===kenarIki)&& (kenarIki===kenarUc)){ 
    alert("bu eşkenar bir üçgendir")
}else if (kenarBir !== kenarIki && kenarBir !== kenarUc && kenarIki !== kenarUc){
    alert("bu çeşitkenar bir üçgendir")
} else {
    alert("bu ikizkenar bir üçgendir")
}

-----------------------------------------------------------------------------*/

/* s-3 :klavyeden girilen vize ve final notlarına göre öğrencinin dersi geçip geçmediğini söyleyen bir uygulama (geçme notu 50. vizenin %40ı , finalin %60ı geçerlidir)

let enteredValue
let vize
let final
let totalPoint
let propmtMessage

while (vize == undefined || final == undefined) {
    
    if(vize == undefined) {
        propmtMessage = "Vize notunuzu 0 - 100 arasında giriniz"
    } else {
        propmtMessage = "Final notunuzu 0 - 100 arasında giriniz"
    }

    enteredValue = parseInt(prompt(propmtMessage,"100"))
    if(enteredValue < 0 || enteredValue > 100) {
        continue
    }

    if(vize == undefined) {
        vize = enteredValue
    } else {
        final = enteredValue
    }
}

totalPoint = ((vize * 40/100) + (final * 60/100))
alert(`Ortalamanız ${totalPoint}`) 
*/


/*
 let vize = parseInt(prompt("vize notunu giriniz","100"))
let final = parseInt(prompt("final notunu giriniz","100"))
 let puan = ((vize * 40/100) + (final * 60/100))
 if(puan < 50){
     alert("maalesef sınıfta kaldınız : "+ puan)
 }else {
     alert("tebrikler, sınıfı geçtiniz. notunuz :" + puan)
 }*/

//-----------------------------------------------------------------------------

//s-4 : adınızı ekranda 5 kere gösteren ugulamayı her döngüyle yapınız.

for(let i=0 ; i<5 ; i++) {
    console.log((i+1) + " Zehra Bekar for döngüsü")
}

sayac1=0;
while(sayac1 < 5) {
    console.log((sayac1+1) + " Zehra Bekar while döngüsü")
    sayac1++;
}

sayac2=0;
do{
    console.log((sayac2+1)+" Zehra Bekar do while döngüsü")
    sayac2++;
}while(sayac2 < 5)
console.clear();

//s-5 : 1de 100'e kadar olan sayıların toplamını bulan uygulamayı yazınız(100 dahil değildir).

toplam = 0;
for (let i=1; i<100 ; i++){
    toplam = toplam + i;
    //toplam+=i;
}
console.log("1den 100'e kadar olan sayıların toplamı : " + toplam)

//s-6 : 1den 10'a kadar olan sayıları aralarında virgl olacak şekilde yanyana yazdıran uygulamayı for döngüsü ile yazınız(10 dahil).

let yazdirilacakMetin = "";
for (i=1 ; i<=10 ; i++) {
    if (i!==10){
        yazdirilacakMetin = yazdirilacakMetin + i + ",";
    } else {
        yazdirilacakMetin = yazdirilacakMetin + i 
    }
}
console.log(yazdirilacakMetin)// console.log'u döngü içine yazarsak yazdırılacakmetin değişkenine atanan her değeri ekrana her defasında yazdırdığından 1, / 1,2 / 1,2,3... şeklinde 10 satır çıktı yazar

//s-7 : klavyeden girilen değerin faktöriyelini hesaplayan uygulamayı yazınız.

/*let sayi = parseInt(prompt("faktöriyeli alınacak bir değer giriniz","5"));
let faktoriyel=1;
for (let i=1 ; i<=sayi ; i++){
    faktoriyel = faktoriyel * i;
}
console.log(`girdiğiniz ${sayi} sayısının faktöriyeli : ${faktoriyel}`); 

let sayiniz = parseInt(prompt("faktöriyeli alınacak bir değer giriniz","5"));
let faktoriyell=1;
let a=1;
while(a<=sayiniz){
    faktoriyell = faktoriyell * a;
    a++;
}
console.log(`girdiğiniz ${sayiniz} sayısının while döngüsü ile faktöriyeli : ${faktoriyell} ` ); */

/*s-8 : Aşağıda tanımı verilen f(x,y) fonksiyonunu klavyeden girilen x ve y değerleri için hesaplayınız
x>0, y<0 ise f(x,y) = 4x+2y+4
x>0, y=0 ise f(x,y) = 2x-y+3
x<0, y>0 ise f(x,y) = 3x+4y+3 
let xDegeri = parseInt(prompt("x değeri giriniz","2"))
let yDegeri = parseInt(prompt("y değeri giriniz","2"))

 let islemSonucu = 0;

if (xDegeri > 0 && yDegeri < 0){
    islemSonucu = 4 *xDegeri + 2 * yDegeri + 4;
} else if (xDegeri > 0 && yDegeri == 0){
    islemSonucu = 2 * xDegeri - yDegeri +3;
}else if (xDegeri<0 && y>0){
    islemSonucu=3*xDegeri + 4*yDegeri + 3;
}
console.log (`x : ${xDegeri} , y : ${yDegeri} ve islem sonucunuz : ${islemSonucu}`)*/

//s-9 : yüzlük sistemde verilen notları harfli sistemde gösteren uygulama yazınız.
/*
let yuzlukSistemdekiNot = parseInt(prompt("not giriniz","85"))
let notSiniri = parseInt(yuzlukSistemdekiNot / 10)
console.log("yüzlük sistemdeki not : " + yuzlukSistemdekiNot +" , " + "not sınırınız : "+ notSiniri)

switch(notSiniri){
    case 10 : console.log("notunuz AA"); break;
    case 9 : console.log("notunuz AA"); break;
    case 8 : console.log("notunuz BA"); break;
    case 7 : console.log("notunuz BB"); break;
    case 6 : console.log("notunuz BC"); break;
    case 5 : console.log("notunuz CC"); break;
}*/

//s-10 : çarpım tablosunu oluşturan bir uygulama yazınız.
let yazdirilacakMetin2 = "";
for(let i=1; i<=10 ; i++)//soldaki rakamları değiştiren döngü
{
    
    for(let j=1; j<=10; j++)//sağdaki rakaları değiştiren döngü
    {
        yazdirilacakMetin2 = yazdirilacakMetin2 + (i + "*" + j + "=" + (i*j)) + "\t";

    }

    console.log(yazdirilacakMetin2);
    yazdirilacakMetin2="";

}





















