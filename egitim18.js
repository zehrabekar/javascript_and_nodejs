// DOM elementleri üzerinde gezinme

let value;
//ul elementini seçme 
const todoList = document.querySelector(".list-group");
const todo = document.querySelector(".list-group-item:nth-child(2)");
const cardrow = document.querySelector(".card.row");

value = todoList; 
value = todo;
value = cardrow;

// Child Nodes (todoList'in çocuklarını seçeceğiz)
value = todoList.childNodes; // NodeList(9) 
value = todoList.childNodes[0]; // text 

//seçtiğimiz ul etiketinde 4 element var fakat bize 9 tane gösterdi. bunun sebebi html sayfasında yaptığımız satır atlamaları da çocuk olarak sayıyor.

// sadece elementleri seçmek ve satır atlamaları seçmemek için children özelliğini kullanacağız
value = todoList.children; // HTMLCollection(4)
value = todoList.children[0]; // ilk elementi seçer
value = todoList.children[todoList.children.length-1]; // son elementi seçer
value = todoList.children[2].textContent = "yeni Todo 3";


value = cardrow;
value = cardrow.children; // HTMLCollection(3) [div.card-header, div.card-body, div.card-body]
value = cardrow.children[2].children; // card-body'nin çocukları HTMLCollection(7)
value = cardrow.children[2].children[1].textContent = "Yeni Todolar Başlığı";

value = todoList;
value = todoList.firstElementChild;
value = todoList.lastElementChild;
value = todoList.children.length; //4
value = todoList.childElementCount;//4 /todoList child sayısı

value = cardrow;
value = cardrow.parentElement; // cardrowun parent elementi (container)
value = cardrow.parentElement.parentElement; // body (containerin parenti)

// element kardeşleri

value = todo; // 2. çocuk olarak seçmiştik
value = todo.previousElementSibling; // 1. çocuğu seçtik
value = todo.nextElementSibling; // 3.çocuk
value = todo.nextElementSibling.nextElementSibling; //4.çocuk

value =todo.previousElementSibling.previousElementSibling; // null, çünkü 2.çocuğa todo adını verdik ve tododan önce 1 tane çocuk var 2 tane yok

console.log(value);