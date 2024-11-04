//Object.create Metodu : Object.create, JavaScript'te bir nesne oluştururken onun prototipini belirlemek için kullanılan bir metottur. 
//Bu metot, yeni oluşturulan nesnenin belirtilen prototip nesnesini miras almasını sağlar ve prototip tabanlı kalıtımı oluşturmanın basit bir yoludur.

const obj = {
    test1: function() {
        console.log("test 1");
    },
    test2: function() {
        console.log("test 2");
    }
};

const emp = Object.create(obj);
emp.name = "Ali";
emp.age = 20;

console.log(emp); // {name: 'Ali', age: 20}
// emp nesnesinin [[Prototype]]'ı obj nesnesine işaret eder, böylece test1 ve test2 metodlarını miras alır.
emp.test1(); // "test 1" çıktısını verir

//emp nesnesi, obj nesnesini prototip olarak alır ve onun metodlarını kullanabilir.

//Object.create ile Kalıtımın Daha İleri Kullanımı : 
//Prototip zincirinin nasıl genişletileceğini görmek için Object.create metoduyla nesne prototipini bir başka fonksiyon prototipine bağlayabiliriz.

//Prototip Zinciri Örneği:
function Person() {}

Person.prototype.deneme1 = function() {
    console.log("deneme1");
};
Person.prototype.deneme2 = function() {
    console.log("deneme2");
};

function Employee(name, age) {
    this.name = name;
    this.age = age;
}

// Employee nesnesinin prototipini Person prototipinden türetmek
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.myTest = function() {
    console.log("MyTest");
};

const emp2 = new Employee("Ayşe", 22);

console.log(emp2); // Employee {name: "Ayşe", age: 22}
// emp2 nesnesi hem Person prototipindeki metotlara (deneme1 ve deneme2) hem de kendi prototipindeki myTest metoduna erişebilir
emp2.deneme1(); // "deneme1"
emp2.myTest();  // "MyTest"

//Employee yapıcı fonksiyonu ise Person prototipinden türetilmiştir, bu sayede Employee nesneleri hem Person metotlarına (deneme1, deneme2) hem de kendi metodlarına (myTest) erişebilir.

//Özet:
//Object.create ile bir nesneye özel bir prototip atayabiliriz.
//Prototip zinciri, nesnelerin farklı nesnelerden metod ve özellikleri miras almasını sağlar.