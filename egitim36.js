// ES6 Setler (Kümeler) : Birden fazla değeri depolamak için kullanılır.Tekrar eden değerler olmaz, sıralı olur, herhangi bir veri türünü saklayabilir.
// Set, tekrar eden verileri filtrelemek, benzersiz değerler saklamak ve hızlı arama işlemleri yapmak için kullanılabilir.

//set oluşturma
const myset = new Set();

//set'e eleman ekleme 

//1.yol :
myset.add(100);
myset.add(100);
myset.add("zehra");
myset.add(3.14);
myset.add(true);
myset.add([1,2,3]);
myset.add({a:1,b:2});

console.log(myset); //Set(6) {100, 'zehra', 3.14, true, Array(3), …} (100 elemanını 1 kez ekledi )

//2.yol:
const myset2 = new Set([100,3.14,"zehra"]);

console.log(myset2); //Set(3) {100, 3.14, 'zehra'}

//size
console.log(myset.size); // 6

//delete metodu
myset.delete(3.14);
console.log(myset); //Set(5) {100, 'zehra', true, Array(3), {…}}

// has metodu (sorgulanan değer set içinde var mı diye kontrol eder)
console.log(myset.has("zehra")); //true
console.log(myset.has(100)); //true
console.log(myset.has(2000)); //false
console.log(myset.has([1,2,3])); //false
// burada myset.has([1,2,3]) ifadesinin false dönmesinin nedeni, JavaScript'te referans tiplerin karşılaştırılmasıdır.
// myset içinde [1, 2, 3] dizisi yalnızca bir kez eklendi. Ancak myset.has([1, 2, 3]) ifadesi, yeni bir [1, 2, 3] dizisi oluşturuyor. Bu yeni dizinin bellekteki adresi, daha önce eklenen dizinin adresiyle aynı değildir. Dolayısıyla, has metodu bu yeni dizinin myset içinde olmadığını düşündüğü için false döner.

// For Each ile set üzerinde gezinme
myset.forEach(function(value){
    console.log(value);
});
// Çıktı : 
//100
// zehra
// true
// (3) [1, 2, 3]
// {a: 1, b: 2}

// For Of

for (let value of myset){
    console.log(value);
};
// Çıktı : 
//100
// zehra
// true
// (3) [1, 2, 3]
// {a: 1, b: 2}

// setlerden array oluşturma
const array = Array.from(myset);
console.log(array); // (5) [100, 'zehra', true, Array(3), {…}]