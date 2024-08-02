//Dinamik Element Oluşturma
//tüm taskları temizleyin butonunun yanına yeni buton ekleme

//<a id = "clear-todos" class="btn btn-dark" href="#">Tüm Taskları Temizleyin</a> bu link 2. card-body divi içinde 

// oluşturduğumuz elementi card-bodye eklemek için 2.card-body divini seçtik :
const cardbody = document.getElementsByClassName("card-body")[1];

//yeni element oluşturma :
const newLink = document.createElement("a"); // <a></a>
newLink.id = "clear-todos";
newLink.className = "btn btn-danger";
newLink.href =  "https://www.google.com.tr";
newLink.target = "_blank";

//link içine text ekleme
newLink.appendChild(document.createTextNode("farklı sayfaya git"));

//cardbody'e ekleme :
cardbody.appendChild(newLink);

console.log(newLink); 