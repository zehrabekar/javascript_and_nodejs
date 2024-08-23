// Klavye Eventleri

//keypress : bir klavyedeki sayı ve harf tuşlarına basıldığında tetiklenen bir olaydır. . Özel tuşlar (yön tuşları, Shift, Ctrl) genellikle bu olayla yakalanmaz.

// document.addEventListener("keypress", run);

// function run(e){
//     console.log(e.which); // basılan karakterin ascii tablodaki değerini verir
//     console.log(e.key); // basılan tuşu yazdırır
//     console.log("keypress eventi");
// };


//keydown : Klavyedeki herhangi bir tuşa basıldığında tetiklenen olaydır. Tüm tuşlar için çalışır.

// document.addEventListener("keydown", run);

// function run(e){
//     console.log(e.key);
//     console.log("keydown eventi");
// };


//keyup : Basılı olan tuşun bırakıldığı an tetiklenen olaydır. Bu da tüm tuşlar için çalışır.

// document.addEventListener("keyup", run);

// function run(e){
//     console.log(e.key); 
//     console.log("keyup eventi");
// };

//Todo List başlıklı input alanına girilen değerin Todo List başlığı yerine yazılması :

//başlığı ve input alanını seçiyoruz
const header = document.querySelector(".card-header");
const todoInput = document.querySelector("#todo");

//todoInput'a bir event atıyoruz. tuşa basmayı bıraktıktan sonra input alanındai değer header alanındaki değerin yerine yazılması için keyup kullanıyoruz
todoInput.addEventListener("keyup",changeText);

function changeText(e){
    header.textContent = e.target.value; // input alanına girilen değeri alır ve header alanına yazar
    //console.log(e.target.value); 
}