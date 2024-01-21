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