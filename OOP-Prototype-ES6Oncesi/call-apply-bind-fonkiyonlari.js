//Call, Apply, Bind Fonksiyonları 
//JavaScript’te call, apply ve bind fonksiyonları, bir fonksiyonun içinde kullanılan this ifadesinin bağlamını (context) değiştirmemizi sağlar. 
//Bu sayede, bir nesneye ait bir fonksiyonu başka bir nesneye aitmiş gibi çalıştırabiliriz.

//Call : Bir fonksiyonu çağırırken, ilk parametre olarak this bağlamını, ardından fonksiyonun aldığı diğer parametreleri ayrı ayrı belirtmemize olanak tanır.
const obj1 = {
    number1 :10,
    number2 :20
};

const obj2 = {
    number1 :30,
    number2 :40
};

function addNumbers(number3,number4){
    console.log(this.number1 + this.number2 + number3+number4);
};

addNumbers(100,200); // NaN 
//Burada NaN sonucunu almamızın sebebi this nesnesinin window nesnesini göstermesidir.
//`window` nesnesinde `number1` ve `number2` gibi özellikler bulunmadığı için `undefined + undefined + 100 + 200` ifadesi NaN döner.

addNumbers.call(obj1,100,200); // 330
// burada call fonksiyonu ile this bağlamını window olarak değil obj1 olarak belirledik ve number1 ve number2 değerlerine erişebildik.

addNumbers.call(obj2,100,200); // 370

//Apply : call ile aynı işi yapar, ancak fonksiyon parametrelerini bir dizi (array) olarak alır.
addNumbers.apply(obj1,[100,200]); //330
addNumbers.apply(obj2,[100,200]); //370

//Bind : this bağlamını belirleyip, yeni bir fonksiyon kopyası döndürür. Fonksiyon hemen çalıştırılmaz; ileride çağırılabilir.
function getNumbersTotal(number3,number4){
    return this.number1 + this.number2 + number3 +number4 ;
};

const copyFunc1  = getNumbersTotal.bind(obj1);
console.log(copyFunc1);
// ƒ getNumbersTotal(number3,number4){
//     return this.number1 + this.number2 + number3 +number4 ;
// }

// Burada `bind` fonksiyonu ile `getNumbersTotal` fonksiyonunun `this` bağlamını `obj1` olarak belirleyip ,yeni bir kopyasını oluşturduk (`copyFunc1`). 
//Artık `copyFunc1` çağrıldığında `this` her zaman `obj1` nesnesini gösterecek. 
//Bu nedenle, `this.number1` ve `this.number2` ifadeleri `obj1`'deki değerleri kullanacak.

const copyFunc2  = getNumbersTotal.bind(obj2);
console.dir(copyFunc2); // ƒ bound getNumbersTotal()
//bound ifadesi: console.dir(copyFunc2) çıktısında bound getNumbersTotal ifadesini görürsünüz. Bu, bind ile this bağlamı obj2’ye sabitlenmiş getNumbersTotal fonksiyonunun yeni bir kopyasıdır. Artık this bağlamı değiştirilemez; kopya fonksiyon hep obj2 ile çalışır.
//console.dir :  Bir nesnenin detaylı yapısını görüntülemek için kullanılır, özellikle fonksiyon ve nesnelerin özelliklerini görsellemekte faydalıdır.

console.log(copyFunc1(100,200)); // 330
console.log(copyFunc2(100,200)); // 370