// Ana sınıf (Base Class)
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }

// Person.prototype.showInfos = function() {
//     console.log("İsim: " + this.name + " Yaş: " + this.age);
// }

// Alt sınıf (Derived Class)
// function Employee(name, age, salary) {
    // Person yapıcı fonksiyonunu çağırarak name ve age özelliklerini miras alır
//     Person.call(this, name, age);
//     this.salary = salary;
// }

// Employee, Person'ın prototype'ını miras alır
// Employee.prototype = Object.create(Person.prototype);

// Yeni bir metot tanımlar (Employee'ye özel)
// Employee.prototype.toString = function() {
//     console.log("Employee");
// }

// showInfos metodunu geçersiz kılar (Overriding)
// Employee.prototype.showInfos = function() {
//     console.log("İsim: " + this.name + " Yaş: " + this.age + " Maaş: " + this.salary);
// };
// const emp = new Employee("Mustafa",25,2000);

// ES6 ile Kalıtım (Inheritance) 

class Person{ //Superclass, BaseClass 
    constructor(name,age){
        this.name = name;
        this.age= age;
    }

    showInfos(){
        console.log("İsim: " + this.name + " Yaş: " + this.age);
    }
}

class Employee extends Person{ //DerivedClass , Subclass,ChildClass
    constructor(name,age,salary){
        // this.name = name;
        // this.age= age; yerine :
        super(name,age);
        this.salary = salary;
        //super.showInfos(); yazarak person classının fonksiyonunu kullanabiliriz
    }
    showInfos(){ //overriding - showInfos metodunu alt sınıfta tekrar tanımladık
        console.log("İsim: " + this.name + " Yaş: " + this.age + " Maaş: " + this.salary);
    }
    toString(){ //overriding
        console.log("Employee");
    }
    raiseSalary(amount){ // Ekstra bir metot: Maaş artırma
        this.salary +=amount;
    }
}
//extends, Person sınıfının tüm özelliklerini ve metotlarını Employee'ye miras verir.

const emp = new Employee("mustafa",25,2000);
console.log(emp);
//Employee {name: 'mustafa', age: 25, salary: 2000}
//age: 25
//name: "mustafa"
//salary: 2000
//[[Prototype]]: Person
//constructor: class Employee
//[[Prototype]]: Object
//constructor: class Person
//showInfos: ƒ showInfos()
//[[Prototype]]: Object

emp.raiseSalary(500);
emp.showInfos(); //İsim: mustafa Yaş: 25 Maaş: 2500 (miras alınan fonksiyon değil employeenin kendi fonksiyonu kullanıldı)
emp.toString(); //Employee

//extends, ES6'da bir sınıfın başka bir sınıftan kalıtım (inheritance) yapmasını sağlamak için kullanılan anahtar kelimedir. Bu sayede bir sınıf, başka bir sınıfın özelliklerini ve metotlarını doğrudan miras alabilir.
//super anahtar kelimesi, üst sınıfın (superclass) yapıcı fonksiyonuna veya başka bir metoduna erişmek için kullanılır.
//Superclass/Base Class: Üst sınıf. Diğer sınıfların türetildiği ana sınıf (ES6'daki Person).
//Subclass/Derived Class: Alt sınıf. Üst sınıftan özellikleri ve metotları miras alan sınıf (ES6'daki Employee).
//Inheritance (Kalıtım): Bir sınıfın başka bir sınıftan özellikleri ve metotları miras almasıdır.
//Overriding (Geçersiz Kılma): Alt sınıfta bir metodu yeniden tanımlayarak, üst sınıftaki versiyonunu geçersiz kılmak.
//super: Üst sınıfa erişim sağlayan anahtar kelime. Yapıcı fonksiyon çağrısı veya metot çağrısı için kullanılır.