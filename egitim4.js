//sorular
//s-1 : girilen 3 sayısının ortalamsını hesapla
/*
let sayiBir = parseInt(prompt("birinci sayıyı giriniz"))
let sayiIki = parseInt(prompt("ikinci sayıyı giriniz"))
let sayiUc = parseInt(prompt("üçüncü sayıyı giriniz"))
let ortalama = ((sayiBir + sayiIki + sayiUc)/3)
alert("ortalama :" + ortalama)*/

//s-2 : klavyeden kenarları girilen bir üçgenin çeşidini veren uygulama
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
*/ 

// s-3 :klavyeden girilen vize ve final notlarına göre öğrencinin dersi geçip geçmediğini söyleyen bir uygulama (geçme notu 50. vizenin %40ı , finalin %60ı geçerlidir)
/*let vize = parseInt(prompt("vize notunu giriniz","100"))
let final = parseInt(prompt("final notunu giriniz","100"))
let puan = ((vize * 40/100) + (final * 60/100))
if(puan < 50){
    alert("maalesef sınıfta kaldınız : "+ puan)
}else {
    alert("tebrikler, sınıfı geçtiniz. notunuz :" + puan)
}*/




















