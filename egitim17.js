// elementleri seçme 

// ID'e göre element seçme :
let element;
element = document.getElementById("todo-form"); //<form id="todo-form" name="form">...</form>
element = document.getElementById("tasks-title"); // id değeri tasks-title olan h5 elementini getirdi

// Class'a göre element seçme :
element = document.getElementsByClassName("list-group-item"); // html collection içinde 4 li elementini verdi
element = document.getElementsByClassName("list-group-item")[0]; // ilk li elementini getirdi
element = document.getElementsByClassName("card-header"); // html collection içinde card-header sınıfına sahip div elementi geldi

//Tag'e göre element seçme :
element = document.getElementsByTagName("li"); // sayfadaki li elementlerini getirdi

//Query Selector - CSS Selector - Sayfadaki tek elementi seçer (örnek olarak li elementini seçmek istersek query selector ile sayfadaki ilk li elementini seçebiliriz) :
element = document.querySelector("#todo-form"); // id değeri todo-form olan elementi seçti
element = document.querySelector(".list-group-item"); // sayfadaki ilk li elementini seçer
element = document.querySelector("li"); // sayfadaki ilk li elementini seçer

//QuerySelectorAll - Tüm elementleri seçme
element = document.querySelectorAll(".list-group-item"); // NodeList olarak list-group-item classına sahip 4 elementi seçti

//NodeList, DOM içinde bir grup düğümü (node) temsil eden bir nesnedir. Genellikle birden fazla element üzerinde işlem yapmak için kullanılır.
/* HTML Collection- NodeList
Benzerlikler: Hem HTMLCollection hem de NodeList, DOM'daki bir grup elemanı temsil eden yapılar olup, indeksleme ile erişilebilirler.
Farklılıklar: HTMLCollection genellikle canlıdır ve getElementsBy* metodlarıyla elde edilirken, NodeList çoğunlukla statik olup querySelectorAll ile alınır. Ayrıca, NodeList forEach gibi dizi metodlarını desteklerken, HTMLCollection bu metodları desteklemez. */

console.log(element);

console.clear();


//Elementleri seçme ve stil özelliklerini değiştirme

// tüm taskları temizleyin yazılı buton üzerinde çalışacağız
const element2 = document.querySelector("#clear-todos"); //<a id = "clear-todos" class="btn btn-dark" href="#">Tüm Taskları Temizleyin</a>  

//element özellikleri
//console.log(element2.id); //clear-todos
//console.log(element2.className); // btn btn-dark
//console.log(element2.classList); // DOMTokenList(2) ["btn","btn-dark", value : "btn btn-dark"]
//console.log(element2.classList[0]); // btn
//console.log(element2.textContent); // Tüm Taskları Temizleyin (element içindeki yazıları seçer. elementin içinde başka bir etiket varsa bunları göstermez)
//console.log(element2.innerHTML); // elementi içindeki yazı ve etiketlerle birlikte seçer
//console.log(element2.href);

//console.log(element2.style); // element2nin tüm css özellikleri geldi(elementin doğrudan HTML'de tanımlanan stillerini yazdırır.)

//style ve element özelliklerini değiştirme
//element2.className = "btn btn-primary"; // buton mavi oldu
//element2.style.color = "#000"; // buton içindeki yazı rengi siyah oldu
//element2.style.marginLeft = "50px"; 
//element2.href = "https://www.google.com.tr" 
//element2.target = "_blank"; // butona bastığımızda yeni sekme açılarak linki olan siteye gideriz

//element2.textContent = "Tümünü Sil"; // buton içindeki yazı değiştirildi
//element2.textContent = "<span style='color:green'>Tümünü Sil</span>"; // bu şekilde span etiketleri yazı olarak göründü etiket olarak kullanılmadı
//element2.innerHTML = "<span style='color:green'>Tümünü Sil</span>"; // buton içindeki yazı yeşil oldu
//console.log(element2);

// const elements = document.querySelectorAll(".list-group-item"); 
// elements.forEach(function(elementler){
//     elementler.style.color = "red";
//     elementler.style.background = "#eee";
// })
// burada list-group-item sınıfına sahip li etiketlerini seçtik ve forEach metodu ile etiketlerin renk ve arkaplan özelliklerini değiştirdik
//console.log(elements);

let elementSecim = document.querySelector("li");// 1. li etiketini seçer
elementSecim = document.querySelector("li:first-child");// 1. li etiketini seçer
elementSecim = document.querySelector("li:last-child");// sonuncu li etiketini seçer
elementSecim = document.querySelector("li:nth-child(2)");// 2. li etiketini seçer
elementSecim = document.querySelectorAll("li:nth-child(odd)");// tek sayılı sırdaki elementleri seçer (1,3,5...)
elementSecim = document.querySelectorAll("li:nth-child(even)");// çift sayılı sırdaki elementleri seçer (2,4,6...)

elementSecim.forEach(function(elementler){
    elementler.style.background = "#ccc";
    elementler.style.color = "red"; 
});
// en son 2. ve 4. elementleri seçmiştik. daha sonra bu elementler üzerinde forEach metodu ile değişiklikler yaptık

console.log(elementSecim);