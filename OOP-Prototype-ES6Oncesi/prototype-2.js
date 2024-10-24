// Prototype Özeti : 
//JavaScript'te her nesnenin içinde bir prototype özelliği bulunur. 
//Bu prototype özelliği, en temel obje olan Object constructor'ın prototipine bağlıdır. 
//Bu sayede nesneler, Object constructor'da tanımlanmış metotları miras alabilirler.

//Constructor İçinde Metot Tanımlamak
//Eğer bir constructor fonksiyonu içinde metot tanımlarsak, her yeni oluşturulan obje için bu metot bellekte ayrı ayrı yer kaplar. Örneğin:

function Employee(name, age) {
    this.name = name;
    this.age = age;
    this.showInfos = function() {
        console.log("İsim: " + this.name + ", Yaş: " + this.age);
    };
}

const emp1 = new Employee("ayşe", 5);
const emp2 = new Employee("ali", 5);

console.log(emp1); // Employee {name: 'ayşe', age: 5, showInfos: ƒ}
console.log(emp2); // Employee {name: 'ali', age: 5, showInfos: ƒ}

//Burada showInfos metodu her bir Employee nesnesi için ayrı ayrı bellekte yer tutar. Eğer çok sayıda nesne oluşturursak, bu nesneler bellekte gereksiz yer kaplar.

//Prototype İçinde Metot Tanımlamak
//Bellek kullanımı daha verimli hale getirmek için, bu metodu constructor içinde değil, prototype üzerinde tanımlayabiliriz. 
//Bu sayede metot sadece bir kez bellekte yer alır ve tüm nesneler bu metodu kullanabilir:

function Employee2(name, age) {
    this.name = name;
    this.age = age;
}

Employee2.prototype.showInfos = function() {
    console.log("İsim: " + this.name + ", Yaş: " + this.age);
};

const emp3 = new Employee2("fatma", 5);
const emp4 = new Employee2("ahmet", 5);

emp3.showInfos(); // Çıktı: İsim: fatma, Yaş: 5
console.log(emp3); // Employee2 {name: 'fatma', age: 5}
console.log(emp4); // Employee2 {name: 'ahmet', age: 5}

//Bu yöntemde, showInfos metodu prototype içinde tanımlandığı için sadece bir kez bellekte tutulur. 
//Böylece yeni oluşturulan nesneler, bu metodu ortak olarak kullanır ve bellekte verimli bir kullanım sağlanır.

//Sonuç : 
//Prototype, metotların bir kez tanımlanarak tüm nesneler arasında paylaşılmasını sağlar. Bu, bellek kullanımını optimize eder.
//Eğer bir metot constructor içinde tanımlanırsa, her bir nesne için ayrı ayrı bellek kullanılır. Ancak metot prototype üzerinde tanımlanırsa, bellek sadece bir kez kullanılır ve nesneler bu metodu ortak kullanır.