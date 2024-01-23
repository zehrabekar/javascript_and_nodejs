// sort metodu : dizilerde sıralama işlemleri için kullanılır.
const isimler = ["hasan", "ayşe", "ahmet", "zehra"];

const sayilar = [12,56,53,2,95,84,36,1,3,7,54];

const kisiler = [
    {id:1 , isim: "ayşe", yas:12},
    {id:12 , isim: "ayşenur", yas:22},
    {id:15 , isim: "ayşegül", yas:32},
    {id:16 , isim: "ayşen", yas:52},
    {id:13 , isim: "ayla", yas:62},
    {id:18 , isim: "aygül", yas:2},
    {id:20 , isim: "aylin", yas:9}
];

// isimler dizisini a'dan z'ye sıralama :
const siraliDizi = isimler.sort();
console.log(isimler); // ['ahmet', 'ayşe', 'hasan', 'zehra']
console.log(siraliDizi); // ['ahmet', 'ayşe', 'hasan', 'zehra']
// sort metodu uygulandıktan sonra ana dizi bozuldu ve ana dizideki elemanlar sıralanmış şekilde geldi

// z'den a'ya sıralamak için :
const terstenSiraliDizi = siraliDizi.reverse();
console.log(terstenSiraliDizi); //['zehra', 'hasan', 'ayşe', 'ahmet']
// reverse metodunun çalışması için dizideki elemanların a'dan z'ye sıralanmış olması gereklidir.

// reverse metodu için kısa kullanım :
const kisaReverse = isimler.sort().reverse();
console.log(kisaReverse);//['zehra', 'hasan', 'ayşe', 'ahmet']

console.clear();

//sayıları küçükten büyüğe sıralamak için :
const siraliSayilar = sayilar.sort(function(a,b){
        return a-b;
});
console.log(siraliSayilar);// [1, 2, 3, 7, 12, 36, 53, 54, 56, 84, 95]
/* burada ilk elemana a bir sonrakine b karşılık gelir ve a-b negatifse a b'nin soluna yazılır ve bu şekilde tüm elemanlar gezilerek küçükten 
büyüğe sıralanır.*/

// sayıları büyükten küçüğe sıralamak için :
const buyuktenKucugeSayilar = sayilar.sort(function(a,b){
    return b-a;
});
console.log(buyuktenKucugeSayilar); // [95, 84, 56, 54, 53, 36, 12, 7, 3, 2, 1]
// bu sefer büyük olan sola yazılır ve büyükten küçüğe sıralanır

//kisiler dizisindeki objeleri id ve yas alanına göre sıralama :
kisiler.sort(function(a,b){
    return a.id - b.id; // id'yi küçükten büyüğe sıralar 
    //return b.id - a.id; id'yi büyükten küçüğe sıralar
});
console.log(kisiler);
/*
0: {id: 1, isim: 'ayşe', yaş: 12}
1: {id: 12, isim: 'ayşenur', yaş: 22}
2: {id: 13, isim: 'ayla', yaş: 62}
3: {id: 15, isim: 'ayşegül', yaş: 32}
4: {id: 16, isim: 'ayşen', yaş: 52}
5: {id: 18, isim: 'aygül', yaş: 2}
6: {id: 20, isim: 'aylin', yaş: 9}*/

kisiler.sort(function(a,b){
    return a.yas - b.yas; // yasi küçükten büyüğe sıralar 
    //return b.yas - a.yas; yasi büyükten küçüğe sıralar
});
console.log(kisiler);
/*
0: {id: 18, isim: 'aygül', yas: 2}
1: {id: 20, isim: 'aylin', yas: 9}
2: {id: 1, isim: 'ayşe', yas: 12}
3: {id: 12, isim: 'ayşenur', yas: 22}
4: {id: 15, isim: 'ayşegül', yas: 32}
5: {id: 16, isim: 'ayşen', yas: 52}
6: {id: 13, isim: 'ayla', yas: 62}*/

// objeleri isim alanına göre sıralama :
kisiler.sort(function(a,b){
    if(a.isim < b.isim){
        return -1;
    }
    else if (a.isim > b.isim){
        return 1;
    } else return 0;
});
console.log(kisiler);
/* a'dan z'ye sıralar , z'den a'ya istersek - ve 1i yer değiştirmemiz gerekir
0: {id: 18, isim: 'aygül', yas: 2}
1: {id: 13, isim: 'ayla', yas: 62}
2: {id: 20, isim: 'aylin', yas: 9}
3: {id: 1, isim: 'ayşe', yas: 12}
4: {id: 15, isim: 'ayşegül', yas: 32}
5: {id: 16, isim: 'ayşen', yas: 52}
6: {id: 12, isim: 'ayşenur', yas: 22}*/ 
console.clear();

/*spread operatörü: bir dizi veya nesnenin elemanlarını veya özelliklerini başka bir dizi veya nesneye eklemek veya birleştirmek için kullanılan
bir özelliktir.  
dizileri sıralarken kullandığımız sort metodunda ana dizi bozulur. ana dizinin bozulmasını istemediğimiz durumlarda ana dizideki elemanları 
başka bir diziye kopyalamak için spread yöntemini kullanabiliriz.*/

const adlar = ["hasan", "ayşe", "ahmet", "zehra"];

/* for döngüsü ile dizi kopyalama :
let kopya = [];
for (let ad of adlar){
    kopya.push(ad);
};
kopya.sort();

console.log("kopyalanmış dizi : " + kopya); 
kopyalanmış dizi : ahmet,ayşe,hasan,zehra
console.log("ad dizisi : " + adlar); 
ad dizisi : hasan,ayşe,ahmet,zehra 
ana dizi bozulmadan dizideki elemanlar sıralandı */

//kopya = adlar; yazarak kopyalamaya çalışırsak burada değerleri değil referans adresini atadığımız için değişiklikler her iki dizide de olur.

// kopya = Array.from(adlar); isimler dizisindeki elemanlar ile kopya dizisini oluşturur. dizi kopyalarken bu yöntem de kullanılabilir.

// spread operator ile kopyalama :
kopya = [...adlar];
// adlar dizisindeki elemanları kopya dizisine ggönderir ve yeni dizi oluşturur.
kopya.sort();
console.log(kopya);// (4) ['ahmet', 'ayşe', 'hasan', 'zehra']. önce adlar dizisindeki elemanlar kopya dizisine kopyalandı sonra sort ile sıralandı
console.log(adlar);//(4) ['hasan', 'ayşe', 'ahmet', 'zehra']. adlar dizisi bozulmadı, sort ile sıralanmadı

const kisi = ["ayşe","fatma","merve"];
const rakamlar = [1,2,3,4];

kopyalanmisDizi = [...kisi, ...kisi];
console.log(kopyalanmisDizi); //['ayşe', 'fatma', 'merve', 'ayşe', 'fatma', 'merve']
// burada kisi dizisindeki elemanlar kopyalanmisDizi dizisine iki kez kopyalandı

kopyaDizi = [...adlar, ...rakamlar];
console.log(kopyaDizi);// ['hasan', 'ayşe', 'ahmet', 'zehra', 1, 2, 3, 4]
// iki dizinin elemanları kopyaDizi'de birleştirildi ve yeni dizi oluştu

const adim = "zehra bekar";

const adimiAyir = adim.split(" "); // boşluğa kadar olan ifadeyi 1 eleman ondan sonrasını 1 eleman olacak şekilde böler
console.log(adimiAyir);//  ['zehra', 'bekar']


let  adimdakiHarfler = adim.split("");
console.log(adimdakiHarfler);// ['z', 'e', 'h', 'r', 'a', ' ', 'b', 'e', 'k', 'a', 'r'] 

adimdakiHarfler = [...adim]
console.log(adimdakiHarfler);// ['z', 'e', 'h', 'r', 'a', ' ', 'b', 'e', 'k', 'a', 'r']
/*
JavaScript'deki spread operatörü, bir diziyi veya bir stringi elemanlarına ayırmak için kullanılabilir. Bu durumda, adimdakiHarfler adlı dizi, 
adim string'inin her bir harfini içerecek şekilde oluşturuluyor. Yani, her bir karakter bir dizi elemanına dönüşüyor.*/

// fonksiyonlar için örnek :
function sayilariTopla(s1,s2){
    console.log(s1+s2);
};
sayilariTopla(1,4);// 5

// parametre sayısı çok olan ya da belli olmayan fonksiyonlar için :
function sayilarinToplami(...parametreler){
    let toplam = 0;
    for (let s of parametreler){
        toplam = toplam + s;
    }
    console.log(toplam);
};
sayilarinToplami(1,6,5,6);// 18