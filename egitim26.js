//DOMContentLoaded : HTML belgesinin tamamen yüklendiğini belirten bir olaydır.

// document.addEventListener("DOMContentLoaded",load);
// function load(e){
//     console.log("sayfa yüklendi");
// };


// input eventleri 

const filter = document.getElementById("filter");
console.log(filter); // input alanını seçtik

//focus : bir elementin kullanıcı tarafından odaklandığında tetiklenen bir olaydır.
//filter.addEventListener("focus",run);

//blur : bir elementin odağını kaybettiğinde (başka bir elemente geçildiğinde) tetiklenen bir olaydır.
//filter.addEventListener("blur",run);

//paste : bir elemente yapıştırma işlemi gerçekleştiğinde tetiklenen bir olaydır.
//filter.addEventListener("paste",run);

//copy :  bir elementten kopyalama işlemi yapıldığında tetiklenen bir olaydır.
//filter.addEventListener("copy",run);

//cut : bir elementten kesme işlemi yapıldığında tetiklenen bir olaydır.
//filter.addEventListener("cut",run);

//select : bir metin kutusunda (input veya textarea) kullanıcı metin seçtiğinde tetiklenen bir olaydır.
filter.addEventListener("select",run);

function run(e){
    console.log(e.type);
};