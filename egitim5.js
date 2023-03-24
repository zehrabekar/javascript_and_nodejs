//fonksiyonlar : belli bir işi yapmak için yazılan kodların tutulduğu yer. fonksiyonlar kod tekrarını önler, işlemleri kolaylaştırır.

let toplam = 0;
let toplam2 = 0;

for (let i=0; i<=10; i++){
    toplam = toplam + i;
}

for (let i=30; i<=60; i++){
    toplam2 = toplam2 + i;
}

/* yukarıda 1den 10a kadar ve 30dan 60a kadar olan sayıları for döngüsü ile topladık. ve bu işlemleri yapabilmek için ayni işlemi yapan döngüyü iki 
kez yazarak sadece değerlerini değiştirdik. bu hem zamanımızı aldı hem de kod tekrarına girmiş oldu. ayrıca bu kullanım okunurluğu ve kontrol 
edilirliği zorlaştırır.*/

//fonksiyon tanımlama : function fonksiyonAdı

function selamVer() {
    console.log("merhaba")
}
// bu işlemden sonra console kısmında merhaba çıktısı görünmedi çünkü selamVer fonksiyonunu herhangi bir yerde çağırmadık

selamVer(); // şimdi console kısmında göründü.

//fonksiyon çağırma işlemini fonksiyonu tanımlanmadan önce bile yapsak çalışır. çünkü js çalışırken yukarıdan aşağı kodları tarar ve fonksiyonu kaydeder.
// önce console.log() ile değişkeni yazdırıp sonra let ile değişken tanımlayınca hata veriyordu çünkü tanımlanmayan bir değişkeni yazdırmaya çalışıyorduk. fakat fonksiyonlarda bu problem yok.

//iki sayıyı toplamak istiyoruz. değişen değerlerle sürekli toplama işlemi yapmaktansa bu işlemi fonksiyon ile yapacağız : 

 let toplam1 = sayilariTopla(10,20); 
 console.log("toplam : " + toplam1)
// parantez içine toplanmasını istediğimiz iki sayıyı (argümanlar) yazdık. bu sayede fonksiyon hangi değerler için çalışacağını bilir.

// parametre alan fonksiyon (sayi1, sayi2)
function sayilariTopla(sayi1, sayi2) {

    console.log("sayıların toplamı : " + (sayi1+sayi2))
    return sayi1+sayi2
}
// fonksiyondan çalışan yere ( sayilariTopla(10,20); )değer döndürmek istediğimizde return kullanırız.
// yukarıdaki return işlemi işlem sonucunu sayilariTopla(10,20); atar . bu değeri tutabilmek için toplam1 değişkenini tanımladık.
// returnden sonra yazılan kodların işlevi yoktur. returnden sonra o fonksiyondan çıkılır.

console.log(typeof sayilariTopla); // veri türü function

// en üstteki for döngüsünü fonksiyon ile yapma : 

 let sonuc1 = belliAraliktakiSayilariTopla(40,60)
 let sonuc2 = belliAraliktakiSayilariTopla(0,10)

 console.log("sonuç 1  :" + sonuc1 + " sonuç 2 : " + sonuc2);

function belliAraliktakiSayilariTopla(baslangicSayisi, bitisSayisi){

        let toplam = 0;
        for(let i=baslangicSayisi; i<=bitisSayisi; i++) {
            toplam = toplam + i;
        }

    console.log("belli aralıktaki sayıların toplamı : " + toplam);
    return toplam;
}


//global scope : bütün dosya boyunca bilinen değişkenlerdir. tanımlandığı alan bir döngü içi ya da fonksiyon içi ile sınırlı değildir.
// local scope : tanımı bir fonksiyon ya da döngü içinde yapılan ve bu alanda sınırlı kalan değişkenlerdir

let isim = "zehra" // global scope

function selam() {
    let yas = 22; // bu değişkenin sınırı bu süslü parantez arasıdır. parantez dışında bu değişkeni kullanamayız (local scope)
    console.log("merhaba "+isim + " yaş :"+yas);// merhaba zehra yaş 22 yazdı
}
selam() // consoleda merhaba zehra yazdı

/*ben dışarıda yas adında bir değişken tanımlayabilirim çünkü üstteki yas değişkeni local değişkendir ama isim adında yeni değişken oluşturamam çünkü yukarıda isim
adında global değişken zaten tanımladım.*/
//console.log("yaş :" + yas); - yas local değişken olduğu için yas is not defined uyarısı verdi

function favoriRenginNe(renk) {
    console.log("favori rengim : " + renk);
}
favoriRenginNe("mor")

/* yukarıdakini yazmanın farklı yolu
let renk = "mor"
function favoriRenginNe(renk) {
    console.log("favori rengim : " + renk); }
*/

let favRengim = "mor";
function favoriRenginNe(renk) {
    let favRengim  = "sarı";
    console.log("favori rengim : " + favRengim); //fonksiyon içindeki yazdırma işleminde renk olarak sarı verdi
  }
  console.log("fonksiyon dışında favori rengim : " + favRengim); //fonksiyon dışındaki yazdırma işleminde renk olarak mor verdi

// fonksiyon içinde tanımlanan favRengim değişkeni sadece o alanda var olduğu için  favrengim adında global değişken olmasına rağmen tanımlanmasında bir sıkıntı yoktur.
//burada hem global olarak hem de local olarak aynı isimde favRengim değişkeini oluşturduk. ekrana local değişkenin adını (favori rengim : sarı) yazdırdı
// scopeları farklı aynı isimdeki değişkenlere shadowed variable denir.

/*
let favRengim = "mor";
function favoriRenginNe(renk) {
    favRengim  = "sarı"; // burada favrengimi değerini değiştirdik . let ile yeni bir değişken tanımlamadık bu yüzden fonksiyon dışındaki console da rengi sarı olarak yazdırır
    console.log("favori rengim : " + favRengim); //fonksiyon içindeki yazdırma işleminde renk olarak sarı verdi
  }
  console.log("fonksiyon dışında favori rengim : " + favRengim);
  */

//es6 fatArrow kullanımı
//es6 : kodların yazımıyla ilgili bazı standartları belirleyen bir yapıdır

//normal fonksiyon tanımlayıp çağırma : 
function selam() {
    console.log("selam");
}
selam(); // consoleda selam yazdı

// bir fonksiyonu bir değişkene atayabiliriz. isimsiz bir fonksiyon oluşturup selamDegisken değişkenine atadık :
const selamDegisken = function () {
    console.log("selam selamDegisken")
}

console.log(selamDegisken); // bu şekilde yazınca :
/*ƒ () {
    console.log("selam selamDegisken")
} göründü */

selamDegisken(); // böyle yazınca selam selamDegisken yazdı

// es6
const fatArrow = () => {
    console.log("selam fatArrow")
}
fatArrow();
/*()-> parametre yazılacak yer
=> -> function kelimesinden kutulmak için */

/* eğer parametre listemiz boşsa () yerine _ koyabiliriz
_'nin anlamı : bu bir fonksiyon fakat herhangi bir parametre almıyor
const fatArrow = _ => {
    console.log("selam fatArrow")
}*/

// parametre alan, geriye değer döndüren fonksiyonlarda :
// sayını karesini alan fonksiyon
function karesiniAl (sayi) {
    return sayi * sayi ;
}

const karesiniAlDegisken = function (sayi) // bunlara isimsiz fonksiyon (anonymous) denir
 {
    return sayi * sayi ;
}
console.log(karesiniAl(5)); 
console.log(karesiniAlDegisken(8)); 

// fat arrow ile :
const fatArrowParametreli = (sayi) => {
    return sayi*sayi;
}
console.log(fatArrowParametreli(9));

const fatArrowParametreliKisa = (sayi) => {
    return sayi*sayi;
}
console.log(fatArrowParametreliKisa(7));
// bizim tek parametremiz varsa parantez kullanmak zorunda değiliz
/* eğer => (fatarrow)dan sonra süslü parantez içine tek satır kod yazacaksak yani ekstra console.log ifadesi vs yoksa {} kullanmayabiliriz 
ve eğer süslü parantezi kaldırırsak return yazamiyoruz sadece sayi*sayi; yazıyoruz */
const fatArrowParametreliKisa2 = sayi => sayi*sayi;
// üstteki fonksiyon 1 parametre alır ve sayi*sayi bu işlemin sonucunu return eder
console.log(fatArrowParametreliKisa2(10));

const sayilariToplayalim = (s1,s2) => s1 + s2;

console.log(sayilariToplayalim(5,10));
console.clear();


//array : verileri bir arada tutan yapılara dizi denir.
//araba markalarını tutan dizi oluşturma :
let arabaMarkalari = ["Mercedes ", "BMW " ,"Audi "];
console.log("araba dizisi : " + arabaMarkalari);
console.log(arabaMarkalari);
/* yukarıdaki iki yazdırma işleminin çıktıları farklıdır. birinci yazdırma işleminde :
araba dizisi : Mercedes ,BMW ,Audi şeklinde , 
ikincide :
(3) ['Mercedes ', 'BMW ', 'Audi ']
0: "Mercedes "
1: "BMW "
2: "Audi "
length: 3
[[Prototype]]: Array(0) 
şeklinde çıktısı oldu. 
bunun sebebi ilk yazdırma işlemine (console.log("araba dizisi : " + arabaMarkalari);) otomatik toString() methodu uygulanmasıdır(console.log("araba dizisi : " + arabaMarkalari.toString());).*/

/* yukarıda ikinci çıktıdaki 3 kaç eleman olduğunu, 0 1 2 de index no gösterir.
dizilerde elemanlara ulaşırken indexleri kullanırız.
index sayısı = eleman sayısı - 1
20 elemanlı bir dizide 19 index vardır çünkü indexler 0dan başlar */

// 2.indexdeki elemana ulaşmak için :
console.log(arabaMarkalari[2])

// bu dizide 3.indexi isteseydik olmadığı için console kısmına undefined yazdıracaktı

// diziye yeni eleman eklemek istersek :
arabaMarkalari[3] = "honda"

// var olan elemanı güncelleme/değiştirme :
arabaMarkalari[1] = "citroen"

// 4 elemanlı bir dizide olmayan 20.indexe değer verme işlemi yaparsak 3. index ile 20. index arasına virgülle ile ayırarak boş değerer verir
arabaMarkalari[20] = "suzuki"
console.log("araba dizisi : " + arabaMarkalari); //Mercedes ,citroen,Audi ,honda,,,,,,,,,,,,,,,,,suzuki çıktısını verdi

//dizide kaç eleman olduğunu bulma :
console.log("araba dizisi uzunluğu : " + arabaMarkalari.length); // 21

// dizideki elemanları tek tek ekrana bastırmak için for döngüsünü kullanabilirm:
for( let i=0; i< arabaMarkalari.length;i++){

    console.log(arabaMarkalari[i]);

}
console.log("****************************")
// ya da 

for (let oankidizielemani of arabaMarkalari) {
    console.log(oankidizielemani);
}

// bir dizide farklı türdeki verileri de tutabiliriz :
let yeniDizi = [1 , "zehra" , true];
for (let oankidizielemani of yeniDizi) {
    console.log(oankidizielemani)
}

// önemli array metotları
let isimler = ["zehra","melike","hacer"];
console.log(isimler.toString()); // toString() dizi içerğini metin olarak gösterir

console.log(isimler.join(" | "));// join("istediğimiz ayırma ifadesi")
// zehra | melike | hacer -> varsayılan olarak gelen virgül yerine elemanları join içine yazdığımız eleman ayırır

let diziElemanSayisi = isimler.push("esma")
console.log(isimler.toString() + " ; dizinin eleman sayısı :" + diziElemanSayisi); // diziye esma elemanını sondan ekledi
// push() metodu diziye sondan eleman ekler ve yeni dizinin eleman sayısını söyler

let dizidenCikarilanEleman = isimler.pop();
console.log(isimler + " ; çıkarılan eleman : " + dizidenCikarilanEleman); // sondaki elemanı siler ve çıkarılan elemanı gösterir

isimler.shift();
console.log(isimler.toString());
// diziyi sola kaydırarak ilk elemanı diziden atmış olur ve ilk eleman silinmiş olur.

isimler.unshift("zehraa");
console.log(isimler.toString());
// diziyi sağa kaydırarak ilk elemanın yeri boş kalır ve oraya yeni elemanı ekler

delete isimler[1];
console.log(isimler.toString() + " " + isimler[1]);// çıktı : zehraa,,hacer undefined
// dizinin 1.indexindeki elemanı sildi ve orası boş kaldı. hacer değerini sola kaydırmadı

let sayilar = [1,2,3,4,5,6,7,8]
sayilar.splice(8,0,9,10);// (hangi indexden başlayacak, kaç eleman silinecek , geriye string değer döndürür )
console.log(sayilar.toString());//çıktı : 1,2,3,4,5,6,7,9,10,8
// (8,0,9,10) -> 8. indexden başla, hiçbir elemanı silme ,sonuncu elemanın sağına 9 ve 10 ekle

let silinenler = sayilar.splice(0,4,15,20,25);// 0. indexden başladı, 4 eleman sildi.en baştan 15 20 25 elemanlarını ekledi
console.log(sayilar.toString()); // 15,20,25,5,6,7,8,9,10
console.log(silinenler);// splice metodu silinen elemanlardan yeni bir dizi oluşturur. [1, 2, 3, 4]

let tekSayilar = [1,3,5];
let ciftSayilar = [2,4,6];

let sayilarim = tekSayilar.concat(ciftSayilar);
console.log(sayilarim); // [1, 3, 5, 2, 4, 6]
// dizileri birleştirdi ve yeni dizi oluştu

let yeniDizim = sayilarim.slice(2,4)
console.log(yeniDizim.toString()+ " " + sayilarim.toString()); // 2.elemandan başla 4. elemana kadar yeni dşzş oluştur. çıktı : 5,2  1, 3, 5, 2, 4, 6 (kaynak dizi bozulmadan yeni dizi oluşturur)















