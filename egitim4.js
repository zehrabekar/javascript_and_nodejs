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

//soru-4 : kendi adınızı ekranda 5 kere yazdıran uygulamayı tüm döngülerle yapınız.
//for
/*
let adim ="zehra"
for(let i=0; i<5 ; i++) { 
    console.log(adim)
}

//while
let i=0;
while(i<5){
    console.log(adim)
    i++
}

//do-while
let z=0
do{
    console.log("zehra")
    z++
} while(z<5)

//s-5 : 1den 100e kadar olan sayıların toplamını bulan uygulamayı yazınız
let toplam = 0;
for ( let i=1; i<100 ; i++){
    toplam = toplam + i;
}console.log("1den 100e kadar olan sayıların toplamı : " +toplam)

//s-6 : 1den 10a kadar olan sayıları sırayla ve aralarında virgül olacak şekilde olan uygulamayı for döngüsü ile yazdırınız
yazdirilacakMetin = "";
for(let i=1 ; i<=10 ; i++){
 if (i!=10){
 yazdirilacakMetin = yazdirilacakMetin + i + ", "}
 else {
    yazdirilacakMetin = yazdirilacakMetin + i 
 }
}
console.log(yazdirilacakMetin)

//s-7 : klavyeden girilen bir değerin faktöriyelini alan bir uygulama yazınız
let faktoriyel=parseInt(prompt("faktöriyel almak için bir değer giriniz","3"))
let islemSonucu = 1;
for(let i =1; i<=faktoriyel; i++){
   islemSonucu= islemSonucu*i
}
console.log("girdiğiniz sayının faktöriyeli : " + islemSonucu)

*/













