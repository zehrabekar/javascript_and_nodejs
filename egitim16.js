/* DOM : web tarayıcıları ve programlama dilleri arasında köprü görevi gören bir standarttır.Bu model, belgeleri bir ağaç yapısı olarak düşünür ve her öğeyi bir nesne 
olarak ele alarak programcılara belgelerle etkileşim kurma yeteneği sunar. Programcılar, JavaScript veya diğer diller aracılığıyla DOM'a erişebilir,  içeriğini değiştirmek 
veya yeni bir öğe eklemek gibi işlemler yapılabilir. */

// window object

//console.log(this); 
//Global bağlamda (this), global nesneyi temsil eder. Tarayıcıda bu genellikle window nesnesidir.
// çıktı olarak window nesnesini gösterdi.
//window nesnesi : bir tarayıcı penceresini veya sekmesini temsil eder. Tarayıcıda tanımlanan tüm global değişkenler ve fonksiyonlar, window nesnesinin özellikleri olarak bulunur.
//Örnek : Metodlar: alert(), setTimeout(), fetch(), vb. Özellikler: location, document, innerWidth, innerHeight, vb.
// window nesnesi içinde #document özelliği vardır . #document özelliği bir nesnedir. document nesnesi, tarayıcıda yüklü olan web sayfasını temsil eder ve sayfanın içeriklerine erişim ve bu içeriklerin manipülasyonunu sağlar. 

//console.log(this.document); // console.log(document); bu şekilde de document nesnesi konsola yazdırılır
//window.document'e eşittir ve geçerli web sayfasını temsil eden document nesnesini konsola yazdırır.

let value;
value = document;
value = document.all; // tüm html elementleri html collection olarak consoleda yazdırıldı. HTMLCollection js'de bir nesnedir 
value = document.all.length; // html sayfamızda toplam kaç eleman olduğunu gösterdi (44)
value = document.all[0]; // indexi 0 olan html elementini getirdi (html)
value = document.all[document.all.length-1]; //html sayfamızdaki son elementi verdi (script)
//console.log(value);

const elements =document.all;

// html collection içindeki tüm elementler for döngüsü ile consoleda yazdırıldı
// for(let i=0; i<elements.length; i++){
//     console.log(elements[i]);
// }

//elements(html collection) üzerinde forEach metodunu kullanabilmek için elements'i array'a çeviriyoruz
// const collections = Array.from(document.all);
// console.log(typeof collections); //object

// collections.forEach(function(collection){
//     console.log(collection);
// });
//for döngüsü ile aldığımız sonucun aynısını aldık. html collection içindeki tüm elementler for döngüsü ile consoleda yazdırıldı

//document içindeki herhangi bir etikete ulaşma (örnek body)
value = document.body;
//console.log(value); // etiketi içeriğiyle verdi

value = document.location; // mevcut sayfanın URL'sini temsil eden bir nesnedir
value = document.location.hostname; 
value = document.location.port; 
value = document.URL;
value = document.characterSet; // UTF-8 (meta charset)

//scriptler:
value = document.scripts; // html collection olarak 4 script elementini verdi 
// ek bilgi: html sayfamızda kendi yazdığımız script dosyamızın adresini diğer script etiketlerinin en altına yazmamız gerekiyor. 
//eğer ben egitim16.js dosyasının script etiketini diğer script etiketlerinden önce yazsaydım value = document.scripts; bana sadece egitim16.js sonucunu verirdi ve diğerlerini göstermezdi
value = document.scripts.length; //4
value = document.scripts[0]; //<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>

// linkler:
value = document.links; // sayfadaki tüm linkleri gösterdi html collection olarak
value = document.links[0];// 1. link geldi
value = document.links[document.links.length-1]; //son linki getirdi 
value = document.links[document.links.length-1].getAttribute("class"); //son link üzerinde getAttribute fonksiyonunu kullanarak linkin classlarına ulaştık
value = document.links[document.links.length-1].className; // bu şekilde de son linkin classlarına ulaşabilirirz
value = document.links[document.links.length-1].classList; //linkde birden fazla class varsa classList sayesinde ayrı ayrı yazdırabiliriz bu classları

//formlar:
value = document.forms; 
value = document.forms.length; 
value = document.forms["form"]; // name özelliğine sahip formu bu şekilde de seçebiliriz. parantez içindeki form name özelliğinin değeridir
value = document.forms[0].id; // 1.formun id özelliğine ulaştık. getAttribute ile de ulaşabiliriz
value = document.forms[0].method; // formumuza özellikle bir method eklemediğimiz için  varsayılan olarak get methodu gösterdi.


console.log(value); 