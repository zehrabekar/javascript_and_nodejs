//mouse eventleri

const cardBody = document.querySelectorAll(".card-body")[1]; //2.cardbody alanını seçtik
const title = document.querySelector("#tasks-title"); // todolar başlığı

// console.log(title);
// console.log(cardBody);

// click eventi :  bir öğeye tıklandığında tetiklenen bir JavaScript olayıdır.
//title.addEventListener("click",run);

function run(e){
    console.log(e.type);
};

//Double Click (çift tıklama)
//title.addEventListener("dblclick",run);

//Mouse Down : fareye basılıp ancak henüz serbest bırakılmadan önce tetiklenen bir JavaScript olayıdır.
//title.addEventListener("mousedown",run);

//Mouse Up : fare düğmesi serbest bırakıldığında tetiklenen bir JavaScript olayıdır.
//title.addEventListener("mouseup",run);

//Mouse Over :  fare imlecinin bir öğenin üzerine geldiğinde tetiklenen bir JavaScript olayıdır.
// eğer içine girdiğimiz elemanın içinde başka alt elemanlar varsa o alt elemanlara girdiğimizde mouse over tekrar tetiklenir.
//cardBody.addEventListener("mouseover",run);

//Mouse Out : fare imlecinin bir öğenin üzerinden ayrıldığında tetiklenen bir JavaScript olayıdır. mouse over gibi öğenin içindeki başka bir alt öğeye geçiş yaptığımızda da tetiklenir.
//cardBody.addEventListener("mouseout",run);

// Mouse Enter : fare imlecinin bir öğenin sınırları içine girdiğinde tetiklenen bir JavaScript olayıdır.
cardBody.addEventListener("mouseenter",run);

// Mouse Leave :fare imlecinin bir öğenin sınırları dışına çıktığında tetiklenen bir JavaScript olayıdır.
cardBody.addEventListener("mouseleave",run);

//mouse enter ve mouse leave , mouse over ve mouse out gibi alt öğelerde tetiklenmez.