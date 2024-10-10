//Maps : JavaScript'te Map, anahtar-değer çiftlerini depolayan ve eklenme sırasını koruyan bir veri yapısıdır.
//Map'te, her anahtar herhangi bir türde olabilir (string, number, object, vs.).

//Map Oluşturma
let myMap = new Map(); // Boş bir Map oluşturur
console.log(typeof myMap); // object
console.log(myMap); // Map(0) {size: 0}

//Map’e Değer Ekleme (set fonksiyonu) : set fonksiyonu, Map’e anahtar-değer çifti eklemek için kullanılır.
// map için 3 key oluşturacağız
const key1 = "zehra";
const key2 = {a:10, b:20};
const key3 = () => 2;

// oluşturduğumuz keyleri map'e set fonksiyonu ile ekliyoruz
myMap.set(key1,"String Değer");
myMap.set(key2,"Object Literal Değer");
myMap.set(key3,"Function Değer");


//Map’ten Değer Alma (get fonksiyonu) : get fonksiyonu, belirtilen anahtarın karşılık geldiği değeri döndürür.
console.log(myMap.get(key1)); //String Değer
console.log(myMap.get(key2)); //Object Literal Değer
console.log(myMap.get(key3)); //Function Değer

console.log(myMap); //Map(3) {'zehra' => 'String Değer', {…} => 'Object Literal Değer', ƒ => 'Function Değer'}

//Map’in Boyutunu Alma (size özelliği) : size özelliği, Map’teki eleman sayısını döndürür.
console.log(myMap.size); // 3

//Map Üzerinde Döngüler

//ForEach ile Tüm Elemanları Dolaşma
const cities = new Map();
cities.set("Sakarya",5);
cities.set("İstanbul",15);
cities.set("Ankara",6);

cities.forEach(function(value,key){
    console.log(key,value);
});
//Çıktı :
// Sakarya 5
// İstanbul 15
// Ankara 6

//For Of ile Tüm Elemanları Dolaşma
for(let [key,value] of cities){ //Destructing
    console.log(key,value);
};
//Burada destructig işlemi var. cities Map'inin her bir [key, value] çifti otomatik olarak key ve value değişkenlerine atanır. Böylece, key ve value değişkenlerini doğrudan kullanabiliriz.
// Sakarya 5
// İstanbul 15
// Ankara 6

//Anahtarları (keys) ve Değerleri (values) Dolaşma
for (let key of cities.keys()){
    console.log(key);
};
//Sakarya
// İstanbul
// Ankara

for (let value of cities.values()){
    console.log(value);
};
//5
//15
//6

//Map ve Array Dönüşümleri
//Array'den map oluşturma
const array = [["key1","value1"],["key2","value2"]];

const lastMap = new Map(array);
console.log(lastMap); // Map(2) {'key1' => 'value1', 'key2' => 'value2'}

//Map'ten array oluşturma
const cities2 = new Map();
cities2.set("Sakarya",5);
cities2.set("İstanbul",15);
cities2.set("Ankara",6);

const array2 = Array.from(cities2);
console.log(array2); //(3) [Array(2), Array(2), Array(2)]
//[["Sakarya",5],["İstanbul",15],["Ankara",6]]