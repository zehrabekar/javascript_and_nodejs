// map fonksiyonu : bir diziyi döngü içinde gezerek her bir elemanı belirli bir işlemden geçirip yeni bir dizi oluşturan fonksiyondur. 
const sayilar_ = [1,2,3,4,5,6];
sayilar_.push(7);
console.log("sayilar_ : " + sayilar_);
/*burada const ile tanımlanmış bir diziye sonradan eleman ekledik ve hata vermedi, çünkü dizinin bellekte tutulduğu adres değişmedi, aynı
 adreste bulunan diziye eleman eklendi
tekrar "sayilar_ ="" yazıp yeni değerler verirsek o zaman yeni bir bellek adresi oluşur ve const değişkene yeni atama yaptığımız için hata verir */

console.log("******************");

const sayilar = [1,2,3,4,5,6]; 
const yeniSayilar = sayilar.map(function(sayi){ 
    return sayi * 2;
});

/*
Burada function(sayi) ifadesi, her bir elemana uygulanacak olan fonksiyonu temsil eder. Bu fonksiyonun parametresi sayi, dizideki her bir 
elemanı temsil eder.
Burada map fonksiyonu, dizi elemanları üzerinde bu fonksiyonu çağırır ve her bir elemanı iki katına çıkaran yeni bir dizi oluşturur. 
 */

console.log("sayilar :" + sayilar); //sayilar :1,2,3,4,5,6
console.log("yeni sayılar : "+ yeniSayilar); //yeni sayılar : 2,4,6,8,10,12
// sayilar dizisindeki her bir elemanı 2 ile çarptı ve  sonuçlar ile yeniSayilar dizisi oluşturuldu.

const kitaplar = [
    {adi : "1", sayfaSayisi : "10"},
    {adi : "2", sayfaSayisi : "20"},
    {adi : "3", sayfaSayisi : "30"}
]

const sayfaSayilari = kitaplar.map(function(kitap){
    return kitap.sayfaSayisi;
})
console.log(sayfaSayilari); // (3) ['10', '20', '30']

const kisiler =[
    {adi : "hüseyin" , soyadi : "bekar"},
    {adi : "kadir" , soyadi : "bekar"},
    {adi : "zehra" , soyadi : "bekar"}
]
const yeniIsimler = kisiler.map((kisi) => kisi.adi + " " + kisi.soyadi);
console.log(yeniIsimler); // (3) ['hüseyin bekar', 'kadir bekar', 'zehra bekar']

// kendi map yapımızı oluşturalım
 function kendiMapYapim(sayilar, islem) {
     const islemdenSonrakiDizi =[];
     for(let i=0; i<sayilar.length; i++){
         islemdenSonrakiDizi.push(islem(sayilar[i]));
     }
     /*burada sayilar dizisine gidiliyor sırayla her eleman alınıp islem(sayilar[i]) kodu sayesinde alttaki
     function(sayi){
   return sayi * 5;
}); işleminden geçiyor ve return ile islemdenSonrakiDizi'ye ekleniyor(push). yeni elemanlar ile yeni dizi oluşuyor */
     return islemdenSonrakiDizi;
 };

const islemdenSonraOlusanYeniDizi = kendiMapYapim(sayilar,function(sayi){
   return sayi * 5;
});
 console.log(islemdenSonraOlusanYeniDizi); //(6) [5, 10, 15, 20, 25, 30]
