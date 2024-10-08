//Spread Operator

const langs = ["Python","C++","Java","PHP"];

console.log(langs); //(4) ['Python', 'C++', 'Java', 'PHP']

// array şeklinde değil de yan yana yazdırmak istersek:
console.log(langs[0],langs[1],langs[2],langs[3]); //Python C++ Java PHP

// bu işlemi spread operatörü ile şu şekilde yaparız:
console.log(...langs); //Python C++ Java PHP

//Spread operatörü, bir dizinin elemanlarını tek tek alarak başka bir diziye dahil etmeyi sağlar.
const langs2 = ["Javascript","C#",...langs]; // langs dizisinin içeriğini ...langs ile iangs2'ye ekledik
console.log(langs2); //['Javascript', 'C#', 'Python', 'C++', 'Java', 'PHP']

const numbers = [1,2,3,4,5,6,7,8,9];
const [a,b,...numbers2] = numbers;
console.log(a,b); //1,2
console.log(numbers2); //[3, 4, 5, 6, 7, 8, 9]
// ilk iki sayıya harf atadık, geri kalan rakamlar ile başka dizi (numbers2) oluşturduk.

const addNumbers = (a,b,c) => console.log(a+b+c);
const numbers3 = [100,200,300];

//eski yöntem :
addNumbers(numbers3[0],numbers3[1],numbers3[2]); //600

//spread operator ile :
addNumbers(...numbers3); //600