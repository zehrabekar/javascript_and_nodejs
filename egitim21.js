//Elementleri Değiştirme ( Replace)

// card-body sınıfına sahip 2. div içindeki h5 elementi yerine h3 elementi koyacağız
//<h5 class="card-title" id = "tasks-title">Todolar</h5>

const cardbody = document.querySelectorAll(".card-body")[1]; // card-body sınıfına sahip 2. divi seçtik (değiştirmek istediğimiz h5 elementinin bulunduğu yer)

//yeni element oluşturma
const newElement = document.createElement("h3");
newElement.className = "card-title";
newElement.id = "tasks-title";
newElement.textContent = "Yeni Todolar";

// eski element
const oldElement = document.querySelector("#tasks-title");

// replace 
cardbody.replaceChild(newElement,oldElement);

console.log(newElement);