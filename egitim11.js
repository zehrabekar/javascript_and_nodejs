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

