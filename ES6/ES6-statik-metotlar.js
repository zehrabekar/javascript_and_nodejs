//Statik Metotlar :
//Statik metotlar, bir sınıfın örneği (objesi) oluşturulmadan doğrudan sınıf üzerinden çağrılabilen metotlardır. 
//Statik metotlar, genellikle sınıfa ait işlemleri tanımlamak için kullanılır ve sınıfın örneği üzerinden değil, sınıfın kendisi üzerinden erişilir.

//Statik Olmayan Metotlar
class Matematik {
    // Normal bir metot: Küp alma
    cube(x) {
        console.log(x * x * x); // x'in küpünü alır
    }
}

const math = new Matematik();
math.cube(3); // 27

//Bu örnekte, cube metodu normal bir metottur ve sınıfın bir örneği (obje) üzerinden çağrılır.

//Statik Metotlar
//Statik metotlar, obje oluşturulmadan doğrudan sınıf üzerinden çağrılabilir. Statik metotlar static anahtar kelimesiyle tanımlanır.

class Matematik2 {
    // Normal metot: Karekök alma
    sqrt(x) {
        console.log(Math.sqrt(x)); // x'in karekökünü alır
    }

    // Statik metot: Küp alma
    static cube(x) {
        console.log(x * x * x); // x'in küpü alınır
    }
}

// Statik metodu sınıf üzerinden çağırabiliriz
Matematik2.cube(3); // 27

// Ancak, statik metot bir obje üzerinden çağrılamaz
const math2 = new Matematik2();
// math2.cube(3); // TypeError: math2.cube is not a function

//Statik metotlara yalnızca sınıf üzerinden erişilebilir. Örnek üzerinden erişmeye çalışırsak, hata alırız çünkü statik metotlar sınıfın prototipinde yer almaz.

//Statik metotlar, obje üzerinden değil, sınıfın kendisi üzerinden çağrılır.
//Statik olmayan metotlar, obje üzerinden çağrılır.
//Statik metotlar static anahtar kelimesiyle tanımlanır.
//Statik metotlar sınıfın prototipinde bulunmaz, bu yüzden örnek üzerinden erişilemez.