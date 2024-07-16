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