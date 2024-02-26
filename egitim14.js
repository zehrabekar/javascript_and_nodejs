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

// event bubbling : bir olayın bir öğede başlamasına ve daha sonra o öğeden üst öğelere doğru yayılmasına dayanan bir olay işleme modelidir.
/*Örneğin, bir düğmeye tıkladığınızda, bu tıklama olayı önce tıkladığınız butonda yakalanır. 
Daha sonra, eğer bu düğüm bir başka öğenin içinde ise, olay üst öğelere doğru yükseltilir.
 Örneğin, düğme bir div içindeyse, önce buton sonra div sonra body işlenir.
*/

// Outer div üzerine tıklama işleyicisi
    document.querySelector('.outer').addEventListener('click', function() {
        console.log('Outer Div\'e tıklandı');
    });

    // Inner div üzerine tıklama işleyicisi
    document.querySelector('.inner').addEventListener('click', function() {
        console.log('Inner Div\'e tıklandı');
    });

    // Button üzerine tıklama işleyicisi
    document.querySelector('.button').addEventListener('click', function() {
        console.log('Button\'a tıklandı');
    });

//ekranda görünen tıkla butonuna tıkladığımda consoleda sırasıyla Button'a tıklandı Inner Div'e tıklandı  Outer Div'e tıklandı yazdı.

// event delegation : Olay işleyicisinin öğenin üst öğesine eklenmesi ve olayın bu üst öğe üzerinde işlenmesidir.

    document.getElementById('liste').addEventListener('click', function(event) {
        // Tıklanan öğenin etiket adını ve metnini konsola yazdıralım
        if (event.target.tagName === 'LI') {
            console.log('Tıklanan öğe:', event.target.tagName);
            console.log('İçerik:', event.target.textContent);
        }
    });
// örnek olarak ekrandaki 3. öüee tıkladığımda Tıklanan öğe: LI İçerik: Öğe 3 çıktısını aldım.
/* buradaki olay her liste öğesi için ayrı ayrı tıklama işleyicisi eklemek yerine, listeyi içeren ana öğeye bir tıklama işleyicisi ekliyoruz.
daha sonra event.target.tagName ve event.target.textContent kullanarak tıkladığımız etiketi ve ve içeriğine ulaşıyoruz.
Bu yaklaşım, özellikle çok sayıda öğenin dinamik olarak eklendiği durumlarda kodun daha temiz ve daha az tekrar eden olmasını sağlar.*/