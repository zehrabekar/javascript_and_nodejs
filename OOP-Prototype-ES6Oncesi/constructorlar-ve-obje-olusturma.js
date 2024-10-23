//window Nesnesi : window, tarayıcıda açık olan bir sekmenin en üst düzey nesnesidir. Tüm global değişkenler ve fonksiyonlar window nesnesinin birer özelliğidir.
console.log(window); // Tarayıcı penceresini gösterir

//this Anahtar Kelimesi : this, mevcut bağlamda hangi nesneyi temsil ettiğini gösterir ve bağlama göre değişir.

//Global Bağlamda: Global bir bağlamda this, genellikle global nesne olan window'u (tarayıcıda) temsil eder.
console.log(this); // Tarayıcıda: Window

//Fonksiyon İçinde: Normal bir fonksiyon çağrısında this, global nesneyi gösterir.
function test() {
    console.log(this);
}
test(); // Tarayıcıda: Window

//Nesne Metodu Olarak: Bir nesnenin metodu içinde this, o nesneyi gösterir.
const nesne = {
    isim: 'JavaScript',
    yaz: function() {
        console.log(this);
    }
};
nesne.yaz(); // nesne objesini gösterir ({isim: 'JavaScript', yaz: ƒ})

//Sınıf İçinde: Bir sınıfın içinde this, o sınıfın bir örneğini temsil eder.
function Insan(isim, yas) {
    this.isim = isim;
    this.yas = yas;
    
    this.tanit = function() {
        console.log(`Benim adım ${this.isim} ve yaşım ${this.yas}.`);
    };
}

const kisi1 = new Insan("Ali", 30);
const kisi2 = new Insan("Mehmet", 25);

kisi1.tanit(); // Konsolda: Benim adım Ali ve yaşım 30.
kisi2.tanit(); // Konsolda: Benim adım Mehmet ve yaşım 25.

//Bu örnek, sınıf yerine bir fonksiyon kullanarak daha basit bir yapı sunuyor. this, her yeni oluşturulan Insan nesnesini temsil eder ve tanit fonksiyonu bu nesnenin bilgilerini ekrana yazdırır. 


//Yapıcı Fonksiyon (Constructor) : Yapıcı fonksiyon, bir sınıftan (class) yeni bir nesne oluşturmak için kullanılan özel bir fonksiyondur.

function Employee(name, age, salary) {
    this.name = name;
    this.age = age;
    this.salary = salary;

    this.showInfos = function() {
        console.log(this.name, this.age, this.salary);
    }
}

const emp1 = new Employee("ayşe", 22, 1000);
const emp2 = new Employee("merve", 22, 2000);

emp1.showInfos(); // ayşe 22 1000
emp2.showInfos(); // merve 22 2000

//Burada Employee yapıcı fonksiyonu, name, age ve salary parametrelerini alarak yeni bir Employee nesnesi oluşturur.