//Destructing : bir dizi veya nesneden değerleri kolayca almayı sağlayan bir özelliktir. Bu özellik sayesinde, bir nesnenin veya dizinin elemanlarını doğrudan değişkenlere atayabiliriz.

let number1,number2;

arr =[100,200,300,400];

//number1'e 100 number2'ye 200 değerini atamak için :
// number1 = arr[0];
// number2 = arr[1];

//ya da destructing yöntemi ile :
[number1,number2] = arr; // [100,200,300,400]; burada number1 0. indexe number2 1. indexe eşitlenir

// tek satırla :
// let [number1,number2] = arr;

console.log(number1,number2); // 100 200 

// obje destructing :

const numbers = {
    a:10,
    b:20,
    c:30,
    d:40,
    e:50
};

const {a:n1,c:n2,e:n3} = numbers;
console.log(n1,n2,n3); // 10 30 50 
// a'ya n1, c'ye n2 ve e'ye n3 isimleriyle kullandık

// function destructing 

const getLangs = () => ["Python","Java","C++"];

const [lang1,lang2,lang3] = getLangs();

console.log(lang1,lang2,lang3); //Python Java C++

//obje
const person = {
    name : "ayşe",
    year : 1990,
    salary : 1000,
    showInfos :() => console.log("bilgier gösteriliyor...")
};

const {name:isim, year:yil,salary:maas,showInfos:bilgileriGoster} = person;
//  örnek : name değişkenini isim olarak adlandırarak kullandık.

console.log(isim,yil,maas,bilgileriGoster); // ayşe 1990 1000 () => console.log("bilgier gösteriliyor...")