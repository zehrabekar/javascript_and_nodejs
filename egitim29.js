// Local Storage : web tarayıcısında kullanıcıya ait verileri kalıcı olarak saklamak için kullanılan bir depolama alanıdır. 
//Buraya kaydedilen veriler, tarayıcı kapatılsa bile silinmez ve web sitesine tekrar girildiğinde erişilebilir.

//setItem(key, value): Belirli bir anahtar (key) ve değeri (value) tarayıcıda saklar.
//getItem(key): Önceden kaydedilmiş bir anahtarın (key) değerini geri alır. 

//JSON : Verileri saklamak veya paylaşmak için kullanılan bir biçimdir.Mesela, bir kişiyi temsil eden bir bilgi kümesi:
//örnek :
// {
//     "isim": "Ahmet",
//     "yas": 30,
//     "sehir": "İstanbul"
//   }
  
//JSON.stringify: JavaScript'te bir nesneyi (örneğin bir insanın bilgilerini) JSON formatına dönüştüren bir fonksiyondur.Örneğin, bir JavaScript nesnesi şöyle olsun:
//const insan = { isim: "Ahmet", yas: 30, sehir: "İstanbul" };
//Bunu JSON formatına dönüştürmek için JSON.stringify kullanılır:
//const jsonString = JSON.stringify(insan);
//Sonuç:
//'{"isim":"Ahmet","yas":30,"sehir":"İstanbul"}' Bu çıktı, bir metin (string) olarak JSON formatında saklanır veya paylaşılır.

// Local Storage değer atama ( SetItem) :
// localStorage.setItem("hareket","burpee");
// localStorage.setItem("tekrar","50");
// eklediğimiz bu değerler local storageda string olarak kaydedilir

// const value = localStorage.getItem("tekrar");
// console.log(value); //50
// console.log(typeof value); //string

// Local Storage Temizlemek için : localStorage.Clear();

// console.log(localStorage.getItem("sport")); // böyle bir key değeri olmadığı için null sonucunu verdi

// if (localStorage.getItem("tekrar") === null){
//     console.log("veri bulunmuyor");
// }
// else{
//     console.log("veri bulunuyor");
// }

// Local Storage'a array yazma:
// const todos = ["Todo 1", "Todo 2", "Todo 3"];

// localStorage.setItem("todos",todos); // local storageda array gibi değil string olarak yazıldı
//console.log(localStorage.getItem("todos"));
// array gibi yazılması için JSON fonksiyonu kullanacağız

// localStorage.setItem("todos",JSON.stringify(todos)); // array olarak yazıldı

// değeri alırken array olarak alma
// const value = localStorage.getItem( "todos");
// console.log(value); // string olarak geldi

// const value = JSON.parse(localStorage.getItem( "todos"));
// console.log(value); // array olarak çıktı

// örnek (todolist projesinde eklediğimiz değerleri array'a atayıp local stragea kaydedeceğiz buna benzer bir örnek ) :
const form =document.getElementById("todo-form"); //formu seçtik
const todoInput = document.getElementById("todo"); // input alanını seçtik

form.addEventListener("submit",addTodo);

function addTodo(e){
    const value = todoInput.value; //inputtan değeri almak için 

    let todos;

    if(localStorage.getItem("todos")=== null){
        todos =[];
    }
    //localStorage'da "todos" adında bir liste var mı kontrol eder
    //Eğer yoksa (null), boş bir liste (todos = [];) oluşturur.
    else{
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    //Eğer varsa, mevcut listeyi JSON.parse ile alır.

    todos.push(value); // Yeni yapılacak işi (value) bu listeye ekler

    localStorage.setItem("todos", JSON.stringify(todos)); //Güncellenmiş listeyi tekrar localStorage'a JSON formatında kaydeder

    e.preventDefault();
};