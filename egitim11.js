/* DOM (Document Object Model) Kavramı : Web tarayıcılarının HTML veya XML belgelerini programlar arası bir arabirimle temsil etmelerini 
yani web tarayıcıları ve programlama dilleri arasında bir köprü görevi görmesini sağlayan bir standarttır. Bu model, belgeleri bir ağaç 
yapısı olarak düşünür ve her öğeyi bir nesne olarak ele alarak programcılara belgelerle etkileşim kurma yeteneği sunar.*/

let deger;
deger= window;
/* window JavaScript'de, tarayıcı penceresini temsil eden bir global nesnedir. Tarayıcı özelliklerine, sayfa adresine ve tarayıcı penceresinin 
boyutlarına erişim sağlar. Örneğin, window.alert() ile uyarı penceresi gösterilebilir.*/
console.log(deger);// window nesnesine ait metodlar ve özellikler çıktı.(alert, prompt...)
/* çıktısı tarayıcı penceresini temsil eden window nesnesinin bir gösterimidir.bu nesnenin özellikleri ve metodları sayesinde tarayıcı penceresi 
ve çeşitli tarayıcı özelliklerine erişim sağlanabilir.*/

deger = window.document; // deger = document; bu şekilde de documente ulaşabiliriz
console.log(deger);// #document çıktısını verdi içinde bu js dosyasının çalıştığı html yapısını çıktı olarak gösterdi (js.html dosyasının html head body... etiketlerini)
// bizim web sayfamız bir document ise oradaki yapıları (html, head, body...) object şeklinde modelleyen yapıya dom denir.
// dom sayesinde js kullanarak buradaki elemanları okuyabilir,değiştirebilir veya farklı işlemler yapabiliriz.

deger = document.all; 
console.log(deger);
// html dosyamda kullandığım etiketleri gösterdi ([html, head, meta, meta, meta, title, script, body, h1, script, script, viewport: meta])

deger = document.all[5]; 
console.log(deger);// <title>Document</title> . (5. sırada kullandığım etiket ve içeriğini getirdi)

deger = document.all.length; 
console.log(deger); // 11. (kullandığım etiket sayısını verdi)

// içindeki tüm yapılara erişmek için :
 let dizi = Array.from(deger);
// dizi.forEach(function(item){
//     console.log(item);
// });
// deger dizi olmadığı için forEach çalışmadı bu yüzden deger'i diziye çevirdik.
// console.log(deger);
// hocada dosyadaki html etiketi içinde bulunan her şeyi gösterdi ama bende çalışmadı

deger = document.head;
console.log(deger);
// head etiketinin içeriğine ulaştık.

deger = document.domain;
console.log(deger);// 127.0.0.1

deger = document.URL;
console.log(deger);
//http://127.0.0.1:5500/js.html

deger = document.contentType;
console.log(deger); // text/html

// sayfamda bir form varsa buna ulaşmak için :
//deger = document.forms[0].id; 
// getirilen form elemanının id'sini gösterir
//console.log(deger);

deger= document.links;
console.log(deger); // sayfadaki linkleri getirir

//deger = document.links[1].className; // indexi 1 olan linkin class adını verir
// deger = document.images[0];  resimlere ulaşır
// deger = document.images[0].src;  resmin adresine ulaşır   
// deger = document.images[0].getAttribute("src");  resmin adresine ulaşır  

console.clear();

// tek element seçiciler
//document.getElementById(); dökümana git idye göre elemanı getir
console.log(document.getElementById("baslik")); // <h1 id="baslik" class="baslikSinif">DOM Kavramı</h1>

console.log(document.getElementById("baslik").id); // baslik 

console.log(document.getElementById("baslik").className); // baslikSinif

const baslik = document.getElementById("baslik");
console.log(baslik.id);// baslik

// seçilen elemanın stilini değiştirme
baslik.style.backgroundColor = "red"; // dom kavramı başlığının arka planı kırmızı oldu
baslik.style.color = "white"; // dom kavramı yazısı beyaz oldu
baslik.style.padding= "2rem"; // 4 taraftan 2rem'lik padding verildi

// seçilen elemanın içeriğini değiştirme
baslik.textContent = "yeni başlık"; // dom kavramı başlığı yerine yeni başlık isimli başlık yazıldı
const test = baslik.textContent;
console.log(test); // yeni baslik

baslik.innerText = "daha yeni başlık"; // textContent ile işlevi aynıdır. yeni başlık başlığını değiştirdi ve daha yeni başlık başlığını atadı.
baslik.innerHTML = '<img src="https://source.unsplash.com/100x100" alt="">';
// başlık yerine fotoğraf koydu. baslik.innerText ile koymaya çalışsaydık başlık kısmında fotoğraf değil img etiketini yazacaktı.

console.log(document.querySelector("h2")); // <h2>Document Object Model</h2>
console.log(document.querySelector("#liste")); // <ul id="liste" class="liste">...</ul>
console.log(document.querySelector(".liste-item")); //  <li class="liste-item">Sakarya</li> . liste-item classına ait ilk elemanı getirdi
console.log(document.querySelector("ul li"));// <li class="liste-item">Sakarya</li> ul içindeki ilk li etiketini getirdi.
console.log(document.querySelector(".link.link-google")); //<a class="link link-google" href="www.google.com">Google</a>

const myList = document.querySelector(".liste-item")
console.log(myList);//<li class="liste-item">Sakarya</li>

const myListe = document.querySelector("li"); 
myListe.style.color = "blue"; // ilk li elemanını mavi yaptı
document.querySelector("li:last-child").style.color = "yellow"; // son li elemanını sarı yaptı
document.querySelector("li:nth-child(2)").style.color = "pink"; // 2. eleman pembe oldu
document.querySelector("li:nth-child(3)").style.color = "purple"; // 3. eleman mor oldu
document.querySelector("li:nth-child(odd)").style.color = "black"; // tek sıradaki ilk elemanı siyah yaptı
document.querySelector("li:nth-child(even)").style.color = "orange"; // çift sıradaki ilk elemanı turuncu yaptı

console.clear();

//çoklu eleman seçiciler
const linkler = document.getElementsByClassName("link"); // birden fazla elemanı sınıf adına göre çağırır
console.log(linkler);
// HTMLCollection(3) [a.link.link-google, a.link.link-facebook, a.link.link-instagram]
// elemanlara tek tek ulaşmak için:
console.log(linkler[1]); // <a class="link link-facebook" href="www.facebook.com">Facebook</a>

linkler[0].style.color = "red"; // google linki kırmızı oldu
linkler[1].style.backgroundColor = "pink"; // facebook arkaplan rengi pembe oldu
linkler[2].textContent = "instagram linki"; // "instagram" yazılı link instagram linki" olarak değiştirildi

console.log(document.getElementsByClassName("liste-item")); // HTMLCollection(5) [li.liste-item, li.liste-item, li.liste-item, li.liste-item, div.liste-item]

//sadee ul içindeki liste-item classına sahip elemanları getirmek için :
console.log(document.querySelector("ul").getElementsByClassName("liste-item"));
// HTMLCollection(4) [li.liste-item, li.liste-item, li.liste-item, li.liste-item]

const listeElemanlarim = document.getElementsByTagName("li"); // li etiketlerini getir
console.log(listeElemanlarim);// HTMLCollection(4) [li.liste-item, li.liste-item, li.liste-item, li.liste-item]

const linkListe = document.querySelectorAll("a"); 
console.log(linkListe); // NodeList(3) [a.link.link-google, a.link.link-facebook, a.link.link-instagram]

const sehirlerTek = document.querySelectorAll("li:nth-child(odd)");
const sehirlerCift = document.querySelectorAll("li:nth-child(even)");

sehirlerTek.forEach(item => {
    item.style.backgroundColor = "pink";
});

sehirlerCift.forEach(item => {
    item.style.backgroundColor = "#96de6d";
});

// querySelector kullandığımızda dizi metotlarını direkt kullanabiliriz. örnek olarak sehirlerTek'i array.from() ile diziye çevirmemize gerek yok