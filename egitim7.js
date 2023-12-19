//higher order ve callback functions
/*
higher order function : parametre olarak fonksiyon alan ve/veya return olarak fonksiyon döndüren fonksiyonlardır
callback fonksiyonlar : bir fonksiyon parametre olarak geçilebiliyorsa bu fonksiyon callback fonksiyondur. 
*/
let myDizi = [1,2,3]
const diziyiKopyalaVeIkiyleCarp = function (dizi) {
    let geciciDizi = [];
    for(let i=0; i < dizi.length; i++) {
        geciciDizi[i] = dizi[i] * 2;
    }
   console.log(geciciDizi);
}
const diziyiKopyalaVeIkiyleBol = function (dizi) {
    let geciciDizi = [];
    for(let i=0; i < dizi.length; i++) {
        geciciDizi[i] = dizi[i] / 2;
    }
   console.log(geciciDizi);
}
const diziyiKopyalaVeUcEkle = function (dizi) {
    let geciciDizi = [];
    for(let i=0; i < dizi.length; i++) {
        geciciDizi[i] = dizi[i] + 3;
    }
   console.log(geciciDizi);
}
console.log(myDizi);
diziyiKopyalaVeIkiyleCarp(myDizi);
diziyiKopyalaVeIkiyleBol(myDizi);
diziyiKopyalaVeUcEkle(myDizi);
/*burada oluşturduğumuz fonksiyonlar fonksiyonun kod tekrarını önleme , kısayol oluşturma vb gibi amaçlarıyla çelişir
çünkü yukarıdaki fonksiyonlar ufak bir değişiklik haricinde aynı kod satırlarından oluşur.
kod tekrarını önlemek, pratiklik vb. için daha genel bir fonksiyon oluşturmalıyız*/

//first class function
const ikiyleCarp = function (sayi) {
    return sayi * 2
}

const ikiyleBol = function (sayi) {
    return sayi / 2
}

const UcEkle = function (sayi) {
    return sayi + 3
}

const diziIslemleri = function (dizi,islem) {
    let geciciDizi = [];
    for(let i=0; i < dizi.length; i++) {
        geciciDizi[i] =islem(dizi[i])
    }
   console.log(geciciDizi);
}
//diziIslemleri higher order fonksiyondur çünkü islem adında bir fonksiyonu parametre olarak alır.
//ikiyleCarp, ikiyleBol callback fonksiyonlardır
diziIslemleri(myDizi,ikiyleBol);
diziIslemleri(myDizi,ikiyleCarp);
diziIslemleri(myDizi,UcEkle);

console.log(myDizi);

//örnekler
function adim(ad,soyad) {
    console.log("merhaba " + ad +" " + soyad);
}
adim("zehra","bekar") // merhaba zehra bekar 

function adimiSoyle(ad,soyad) {
    const mesaj = "MERHABA " + ad.toUpperCase() + " " + soyad.toUpperCase();
    console.log(mesaj);
}   
adimiSoyle("zehra","bekar") // MERHABA ZEHRA BEKAR
//ya da
function adimiSoylee(ad,soyad,callback) {
    const mesaj = "MERHABA " + ad.toUpperCase() + " " + soyad.toUpperCase();
   callback(mesaj)
}   
adimiSoyle("zehra","bekar",mesajGoster); // MERHABA ZEHRA BEKAR

function mesajGoster(mesaj) {
    console.log(mesaj);
}