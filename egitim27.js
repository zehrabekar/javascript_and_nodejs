//Event Bubbling, bir olayın en içteki elementten başlayarak dışa doğru yayılmasıdır. Örneğin, input elementine tıkladığınızda, önce input elementinde olay tetiklenir, ardından bu olay sırasıyla dıştaki (parent) elementlere yayılır.

// card-body'ye tıklama olayını dinleyelim
document.querySelectorAll(".card-body")[1].addEventListener("click", function(){
    console.log("Card Body");
});

// card-row'ya tıklama olayını dinleyelim
document.querySelector(".card.row").addEventListener("click", function(){
    console.log("Card Row");
});

// container'a tıklama olayını dinleyelim
document.querySelector(".container").addEventListener("click", function(){
    console.log("Div Container");
});
//input'a tıkladığınızda, önce Card Body, sonra Card Row ve en son Div Container'a ait mesajlar konsola yazılır. Bu, Event Bubbling'in bir örneğidir. Olay, içten dışa doğru yayılır.




//Event Capturing, Event Bubbling'in tersidir. Yani olay, en dıştaki elementten içe doğru yayılır. Normalde tarayıcılar bu davranışı varsayılan olarak kullanmaz, ancak ek bir parametreyle bunu etkinleştirebiliriz.

// card-body'ye capturing modunda tıklama olayını dinleyelim
document.querySelectorAll(".card-body")[1].addEventListener("click", function(){
    console.log("Card Body (Capturing)");
}, true);

// card-row'ya capturing modunda tıklama olayını dinleyelim
document.querySelector(".card.row").addEventListener("click", function(){
    console.log("Card Row (Capturing)");
}, true);

// container'a capturing modunda tıklama olayını dinleyelim
document.querySelector(".container").addEventListener("click", function(){
    console.log("Div Container (Capturing)");
}, true);
//input'a tıkladığınızda, bu sefer önce Div Container, sonra Card Row ve en son Card Body mesajları konsola yazılır. Bu, Event Capturing'in bir örneğidir. Olay, dıştan içe doğru yayılır.



//Event Delegation, birden fazla alt elementte olay dinleyicisi eklemek yerine, üst elemente (parent) bir olay dinleyicisi ekleyip alt elemanların olaylarını bu dinleyiciyle yönetme tekniğidir.

// card-body'ye tıklama olayını dinleyelim (Event Delegation)
const cardbody = document.querySelectorAll(".card-body")[1];
cardbody.addEventListener("click", function(e){
    if (e.target.className === "fa fa-remove"){
        console.log("Silme işlemi");
    }
    if (e.target.id === "filter"){
        console.log("Filtreleme işlemi");
    }
    if( e.target.id === "clear-todos"){
        console.log("Tüm taskları silme işlemi");
    }
    console.log(e.target); // nereye tıkladığımızı gösterir
});
//Bu örnekte, card-body'nin altındaki tüm elemanların (örneğin, silme ikonları, arama inputu ve tüm taskları temizleme butonu) tıklama olaylarını tek bir dinleyici ile yönetiyoruz. Event Delegation sayesinde, her alt elemente ayrı ayrı olay dinleyicisi eklemek yerine, tek bir card-body üzerinde olayları merkezi olarak yönetiyoruz.