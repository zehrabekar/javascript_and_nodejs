//For In ve For Of Döngüleri :
//for...in ve for...of döngüleri, JavaScript'te diziler ve nesneler üzerinde gezinmek için kullanılır. Aralarındaki temel fark, for...in döngüsünün anahtarları (indeksleri), for...of döngüsünün ise değerleri almasıdır.

//For In Döngüsü :
// Genellikle nesneler üzerinde gezinmek için kullanılır ve nesnenin tüm anahtarlarını (özellik isimlerini) iter. 
//Nesnelerde: Özellik isimlerini (anahtarları) döndürür. Dizilerde: İndeksleri döndürür.

//Object Üzerinde for...in Kullanımı:
const person = {
    name: "Fatma",
    age: 30,
    salary: 1000
};

for (let prop in person) {
    console.log(prop, person[prop]);
}
// Çıktı:
// name Fatma
// age 30
// salary 1000

//for...in döngüsü person nesnesindeki her bir özelliğin anahtarını prop değişkenine atar ve person[prop] ifadesi ile her anahtarın değerine erişir.

//Array Üzerinde for...in Kullanımı:
const langs = ["Python", "Java", "C++", "PHP"];

for (let index in langs) {
    console.log(index, langs[index]);
}
// Çıktı:
// 0 Python
// 1 Java
// 2 C++
// 3 PHP

//Bu döngü dizinin indekslerini döndürür ve langs[index] ile ilgili değerlere ulaşır.

//String Üzerinde for...in Kullanımı:

const name = "Fatma";

for (let index in name) {
    console.log(index, name[index]);
}
// Çıktı:
// 0 F
// 1 a
// 2 t
// 3 m
// 4 a

//for...in döngüsü, name stringinin indekslerini ve bu indekslerdeki karakterleri sırayla ekrana basar.

// For Of Döngüsü :
//for...of döngüsü değerleri almak için kullanılır ve iterable (yinelenebilir) yapılar, özellikle diziler ve stringler üzerinde çalışır. Nesneler üzerinde çalışmaz.

//Object Üzerinde for...of Kullanımı:
// Nesneler iterable olmadığı için `for...of` ile gezinemeyiz.
// const person = {
//     name: "Fatma",
//     age: 30,
//     salary: 1000
// };

// for (let value of person) {
//     console.log(value);
// }
// Çıktı: Uncaught TypeError: person is not iterable

//for...of nesnelerde çalışmadığından, yalnızca iterable veri tipleri ile kullanılır.

//Array Üzerinde for...of Kullanımı:
//const langs = ["Python", "Java", "C++", "PHP"];

for (let value of langs) {
    console.log(value);
}
// Çıktı:
// Python
// Java
// C++
// PHP

//Bu döngü, langs dizisinin değerlerini teker teker alır.

//String Üzerinde for...of Kullanımı:
//const name = "Fatma";

for (let character of name) {
    console.log(character);
}
// Çıktı:
// F
// a
// t
// m
// a

//Bu döngü, name stringinin her bir karakterini sırayla alır ve ekrana basar.

//İterasyon: Bir döngü veya işlemde, belirli adımların tekrarlı şekilde yürütülmesi sürecidir. Her tekrara bir iterasyon denir ve bu işlem genellikle veri yapılarındaki her bir elemanı sırasıyla işlemek için kullanılır.