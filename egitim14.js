//form ve klavye eventleri

// submit :
const myform = document.querySelector("#form");

//myform.addEventListener("submit", eventiYakala);

function eventiYakala(e){

    e.preventDefault(); // bu sayede gönder butonuna bastığımızda formun gönderilesi ve sayfanin yenilenmesi engellendi
    console.log("event adı :" + e.type);
    //console.log(isim.value);
    console.log(e.target.value);
    
    //document.querySelector(".link").textContent = isim.value; // gönder butonuna basıldığında form alanına girilen değer google linki yerine yazılır

};
// gönder butonuna bastığımızda event adı : submit yazdı

//form alanına girilen değeri gönder tuşuna bastığımda görmek istiyorsak :

const isim = document.querySelector("#ad"); // console.log(isim.value); ile form alanına girdiğim değer console kısmında göründü

// sitedeki google linkinin bulunduğu yere form alanına girdiğim değerin yazılmasını sağlamak için document.querySelector(".link").textContent = isim.value; satırını ekledik

//isim.addEventListener("keydown", eventiYakala);// form alanında her klavyeye basışımda tetikleniyor ve console kısmında bastığım sayı kadar (x) x event adı : keydown yazıyor
//isim.addEventListener("keyup", eventiYakala); // tuşa basmayı her bıraktığımızda tetiklenir
//isim.addEventListener("keypress", eventiYakala); //tuşa her bastığımızda tetiklenir
//isim.addEventListener("focus", eventiYakala); // değer yazmak için kutuya tıkladığımızda focus olayı tetiklenir
//isim.addEventListener("blur", eventiYakala); // focus olayının tersi.
//isim.addEventListener("cut", eventiYakala); // form alanındaki değeri kestiğimizde tetiklenir
//isim.addEventListener("paste", eventiYakala); // form alanına bir değer yapıştırdığımızda tetiklenir
//isim.addEventListener("input", eventiYakala); //her eleman girdiğimizde bu değeri kesip yapıstırdığımızda tetiklenir
// function içinde console.log(e.target.value); ya da console.log(isim.value); yazarsak her yazdığımız harf console kısmında görünür

const sehirler = document.querySelector("#sehir");
sehirler.addEventListener("change", eventiYakala);
//consoleda event adı: change ve seçilen şehrin value geldi mesela sakarya için 1