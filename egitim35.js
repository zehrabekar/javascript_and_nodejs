// Primitive ve Referans Veri Tipleri
// Primitive Tipler : Primitive Tipler: Değerleri doğrudan bellekte saklanır ve kopyalanırken değerleri aktarılır. Örnekler: string, number, boolean, null, undefined, symbol, bigint.
//Referans Tipler : JavaScript'te object, array, ve function gibi kompleks veri tipleri referans tiplerdir. Bu tür değişkenler bellekte doğrudan değerleri değil, o değerlere işaret eden bellek adresini tutar.

//Primitive Tipler
let a = "Ayşe";
let b = "Ayşe";

if (a===b){
    console.log("eşit");
};
//çıktı : eşit. çünkü a ve b değişkenleri primitive tip olduğu için içindeki değerler karşılaştırıldı.

//Referans Tipler
const array1 = [1,2,3];
const array2 = [1,2,3];

if (array1 === array2){
    console.log("eşit");
}else{
    console.log("eşit değil");
};
// Çıktı : eşit değil. çünkü burada kontrol edilen eşitlik dizilerin içerikleri değil dizilerin bellekte tutulduğu adreslerdir.
// Bu nedenle, aynı değerlere sahip olsalar bile farklı adreslerde bulunduklarından array1 === array2 ifadesi false döner ve "eşit değil" çıktısını alırız.

const cities = new Map();

cities.set("Sakarya",5);
cities.set("İstanbul",15);
cities.set([1,2,3],"Array"); 

console.log(cities.get("Sakarya")); // 5
// burada 5 sonucunu almamızın nedeni aradığımız değerin string yani primitive tip olması

console.log(cities.get([1,2,3])); // undefined
// burada undefined sonucunu aldık çünkü Map'e eklediğiniz [1,2,3] bir referans tip (array) olarak eklendi.Fakat JavaScript'te yeni bir dizi oluşturup ([1,2,3]) get metoduna verdiğinizde, bu dizinin bellek adresi, set sırasında eklenen [1,2,3] dizisinin adresiyle aynı değil.

// Aynı referansa sahip olsalardı sonuç alabilirdik . Örnek :
const key = [1,2,3,4];
cities.set(key,"Array");
console.log(cities.get(key)); // Array