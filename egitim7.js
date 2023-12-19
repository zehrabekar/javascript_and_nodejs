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

console.clear();

// foeEach array helper fonksiyonu , kendi forEach fonksiyonumuzu yazalım
let sayilar =[1,2,3,4,5,6];
for (let i= 0 ; i<sayilar.length; i++ ){
    console.log(sayilar[i]);
};

console.log("**************");

for(let item of sayilar) { 
    console.log(item);
}   

console.log("**************");

sayilar.forEach(function(sayi) {
    console.log(sayi);
});
console.log("**************");
/* burada foreach kullanıldığında dizideki her bir eleman için fonksiyon tetiklenir. bu fonksiyona o an okunan sayi parametre olarak gelir ve 
okunan o sayi ekrana yazdırılır.
çıktı olarak alt alta sıralanmış şekilde 1 2 3 4 5 6 gelir
*/
// aynı zamanda indexini de yazdırmak istersek :
sayilar.forEach(function(sayi,i) {
    console.log(sayi,i);
});
console.log("**************");
/*burada foreach bir fonksiyondur ve parametre olarak bir fonksiyon almış 
foreach bir higher order fonksiyon
(function(sayi,i) {
    console.log(sayi,i);
}); kısmı ise callback fonksiyondur
 */

function IkiParametreAlanFonksiyon(sayi,index){
    console.log("iki parametre alan fonksiyon ile yazdır : " + sayi,index);
};
sayilar.forEach(IkiParametreAlanFonksiyon);// sonuç olarak yine dizi elemanlarını ve index numaralarını verdix

// kendi forEach fonksiyonumuz :
function diziyiYazdir(dizi,callback) {

    for (let i =0; i<dizi.length; i++) {
       // console.log(dizi[i],i); yerine :
       callback(dizi[i],i); // yazacağız
    }

}

diziyiYazdir (sayilar, function(deger,index){
console.log("değer : " + deger + " index no : "+ index);
}); 
/*çıktı :
değer : 1 index no : 0
 değer : 2 index no : 1
 değer : 3 index no : 2
 değer : 4 index no : 3
 değer : 5 index no : 4
 değer : 6 index no : 5
 */