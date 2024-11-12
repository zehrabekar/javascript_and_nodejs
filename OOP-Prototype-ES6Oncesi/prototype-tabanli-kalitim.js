//Prototype Tabanlı Kalıtım
//JavaScript, nesne tabanlı programlamada kalıtım (inheritance) işlemlerini prototype yapısı üzerinden gerçekleştirir. 
//Bu yapıyı kullanarak bir nesne başka bir nesneden özellik ve metotları devralabilir.

//Kalıtım (Inheritance) : Kalıtım, bir nesnenin başka bir nesneden özelliklerini ve metotlarını miras alması işlemidir. 
//JavaScript’te kalıtım genellikle kod tekrarını azaltmak ve nesneler arasında ortak özellik ve metotları paylaşmak için kullanılır. 

function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.showInfos = function() {
    console.log("İsim: " + this.name + " Yaş: " + this.age);
}

//Bu kodda Person adında bir yapıcı fonksiyon ve bu fonksiyonun prototipine showInfos adında bir metot tanımlanmıştır.

const person = new Person("Ayşe", 20);
console.log(person);

//Employee Nesnesinin Oluşturulması
function Employee(name, age, salary) {
    // `Person.call(this, name, age);` ile `Person` yapıcı fonksiyonunu çağırıyoruz.
    Person.call(this, name, age);
    this.salary = salary;
}

//Bu kodda Employee fonksiyonu, Person'un özelliklerini miras alır. Person.call(this, name, age); satırı, this.name = name; this.age = age; işlemlerini tek satırda yapar. 
//Böylece Employee nesnesi, Person'un name ve age gibi özelliklerini devralır.

//Prototype Mirası ve Metot Ekleme
//Employee nesnesinin, Person'ın prototipinde tanımlı metotları da kullanabilmesi için prototip bağlantısını kurarız:

Employee.prototype = Object.create(Person.prototype);
//Bu satırda yapılan işlem, Employee'ın prototype'ını Person'un prototype'ını temel alarak oluşturmaktır.
//Bu sayede Employee, Person'ın prototipindeki metotlara erişebilir.

//Overriding (Geçersiz Kılma)
//showInfos metodunu Employee üzerinde yeniden tanımlayarak Person'daki tanımı geçersiz kılabiliriz.

Employee.prototype.showInfos = function() {
    console.log("İsim: " + this.name + " Yaş: " + this.age + " Maaş: " + this.salary);
};
//Bu işlem overriding olarak adlandırılır. Employee'ın showInfos metodu artık Person'un metodu yerine çalışır.

//toString() Metodu
//toString metodu, bir nesneyi temsil eden bir string döndürür. JavaScript’te nesneler genellikle kendi toString() metodlarını yazıp çıktıları kişiselleştirir.
Employee.prototype.toString = function() {
    console.log("Employee");
}

// Özet
// Kalıtım, nesneler arasında özellik ve metotları paylaşmak için kullanılır. Object.create ile prototip mirası sağlayabilir, metotları override ederek nesneye özel davranışlar tanımlayabiliriz.