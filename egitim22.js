// Dinamik attribute ekleme, silme, değiştirme
//<input class="form-control" type="text" name="filter" id = "filter" placeholder="Bir Todo Arayın">

const todoInput = document.getElementById("todo");
let element;
element = todoInput;
element = todoInput.classList; // classlarına baktık

// todoInput.classList.add("newClass"); //yeni class ekledik
// todoInput.classList.add("newClass2"); //yeni class ekledik
// todoInput.classList.remove("form-control"); // var olan classı sildik

element = todoInput;
element = todoInput.placeholder; // bir todo girin (placeholder değrine baktık)
element = todoInput.getAttribute("placeholder"); // bir todo girin (placeholder değrine baktık)

todoInput.setAttribute("placeholder","yeni placeholder değeri"); // placeholder değerini değiştirdik
element = todoInput;

todoInput.setAttribute("title","Input"); // elemente yeni attribute ekledik
element = todoInput;

element = todoInput.hasAttribute("required"); // required attribute var mı bu elementte? (false)
element = todoInput.hasAttribute("name"); // true

todoInput.removeAttribute("name"); // name özelliğini sildik
element = todoInput;

console.log(element);