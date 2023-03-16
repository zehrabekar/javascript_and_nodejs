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