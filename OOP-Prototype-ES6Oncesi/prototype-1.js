//Prototype : JavaScript'te prototype, her nesnenin üzerinde bulunan ve o nesnenin miras aldığı özellikleri ve metotları tanımlayan bir yapıdır. 
//Bu mekanizma sayesinde JavaScript nesneleri arasında özellik ve metot paylaşımı sağlanır.

//JavaScript, class tabanlı değil, prototype tabanlı bir programlama dilidir. Yani, JavaScript'te nesneler, özelliklerini ve metotlarını diğer nesnelerden prototype aracılığıyla miras alır. 
//ES6 ile gelen class sözdizimi sadece prototip tabanlı yapıyı daha okunabilir hale getiren bir "şekerleme"dir (syntactic sugar). Ancak, arka planda JavaScript hâlâ prototiplerle çalışır.

//Object Prototype Mirası
const object = new Object();
const object2 = new Object();
object.name = "zehra";
console.log(object); 
// Çıktı: {name: 'zehra'}
// [[Prototype]] : Object

//Her nesne, Object.prototype'dan miras alır. Bu sayede her nesne, toString(), hasOwnProperty() gibi Object.prototype'da tanımlı metotlara erişebilir.

//Custom Constructor (Yapıcı Fonksiyon)
function Employee(name, age) {
    this.name = name;
    this.age = age;
    this.showInfos = function() {
        console.log("Bilgiler gösteriliyor");
    };
}

const emp1 = new Employee("ali", 6);
console.log(emp1);
// Çıktı: Employee {name: 'ali', age: 6, showInfos: ƒ}

//Burada Employee isimli bir constructor fonksiyon oluşturarak her bir Employee nesnesi için name, age ve showInfos özelliklerini belirliyoruz. 
//Her nesne kendi showInfos fonksiyonuna sahip olacak, ancak bu yöntemle fazladan bellek kullanımı gerçekleşebilir (her nesneye ayrı ayrı fonksiyon tanımlandığı için).

//Object Prototype'tan Miras Alma
console.log(emp1.toString()); 
// Çıktı: [object Object]
//toString() metodu, Object.prototype'tan miras alınır. Her JavaScript nesnesi, Object.prototype’tan gelen özellikleri kullanabilir. 
//Eğer bir metot nesneye ait değilse, JavaScript prototype zinciri (prototype chain) üzerinden bu metodu arar ve bulur.


//Prototype Zinciri ve Metot Overriding : Eğer bir nesneye prototype zinciri boyunca bir metodun tanımını eklersek, JavaScript önce nesnenin kendi özelliklerine bakar, ardından prototype zincirinde ilerleyerek miras alınan özelliklere ulaşır.
function Employee2(name, age) {
    this.name = name;
    this.age = age;
    this.showInfos = function() {
        console.log("Bilgiler gösteriliyor");
    };
    this.toString = function() {
        console.log("Bu bir Employee2 objesi");
    };
}

const emp2 = new Employee2("ahmet", 6);
console.log(emp2.toString()); 
// Çıktı: Bu bir Employee2 objesi
//Burada toString() metodu, Employee2 içinde tanımlanmış. Bu nedenle emp2 nesnesi, Object.prototype'taki toString() metodunu değil, kendi metodunu çalıştırır. JavaScript önce nesnenin kendisinde toString() metodunu bulur, bu yüzden prototype zincirine inmez.

//Prototype Üzerinde Olmayan Bir Metot
//console.log(emp1.deneme()); 
// Hata: Uncaught TypeError: emp1.deneme is not a function
//Eğer bir nesneye ait olmayan bir metodu çağırırsanız ve prototype zincirinde de bulunmuyorsa, JavaScript bir hata verir.

//Prototype, JavaScript’te kalıtım ve özellik paylaşımı sağlayan temel yapıdır.
//Her nesne, Object.prototype'tan miras alır ve bu sayede nesneler ortak metotlara (örneğin toString()) erişebilir.
//Constructor fonksiyonları ile yeni nesneler oluşturabilir ve her nesneye özel metotlar tanımlayabiliriz. Aynı metodu birden fazla nesne için tanımlamak yerine prototype zincirini kullanarak belleği daha verimli kullanabiliriz.