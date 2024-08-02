//Dinamik Element Silme

//todoların bulunduğu ul etiektini seçiyoruz :

const todoList = document.querySelector("ul.list-group");
const todos = document.querySelectorAll("li.list-group-item");  // NodeList(4) (todo 1 todo 2 ... olan li etiketlerini seçtik)

//remove metodu ile element silme
todos[0].remove(); // 1. element Todo 1 silindi

//remove child 
todoList.removeChild(todoList.lastElementChild);// 4. element silindi
todoList.removeChild(todos[2]); //3. element silindi

console.log(todos);
console.log(todoList);