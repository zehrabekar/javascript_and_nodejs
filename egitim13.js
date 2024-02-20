// Event kavramı ve mouse eventleri
/* event : JavaScript'te bir olay (event), bir web sayfasında gerçekleşen herhangi bir etkinliği temsil eder.
Kullanıcı bir düğmeye tıkladığında, fareyi hareket ettirdiğinde, bir form gönderildiğinde veya sayfa yüklendiğinde gibi birçok etkinlik bir 
JavaScript olayı olabilir.*/

/*document.querySelector().addEventListener("olay", function(){
    olay gerçekleştiğinde yapılması istenen şeyler
})*/
/*
document.querySelector(".link").addEventListener("click", function(e){
    console.log("click event");
});
 burada link sınıfına sahip elemanı seçtik ve bu elemanın üzerine her tıkladığımızda google sayfası başka sekmede açıldı,consoleda click event yazdı.

 eğer başka sekmede açılmasını istemiyorsak :
document.querySelector(".link").addEventListener("click", function(e){
    console.log("click event, yeni sekme açılmıyor");
    e.preventDefault(); //  bir tarayıcı olayı sırasında varsayılan davranışın engellenmesini sağlar. yani burada varsayılan davranış olarak yeni sekmenin açılmasını engeller
});

tıklanma olayının gerçekleştiği elemanı bulmak için :
document.querySelector(".link").addEventListener("click", function(e){
    let deger = e.target;
    console.log(deger);
    e.preventDefault();
});
 <a href="https://www.google.com.tr/?hl=tr" target="_blank" class="link"> Google</a> . sayfadaki google yazısına tıkladığımızda bu yazının ait olduüu elemanı gösterdi
 let deger = e.type; ile tıklanma olayının türünü bulabiliriz (click)

*/

// yukarıdaki yapıyı isimli fonksiyon haline getirerek kullanma :

document.querySelector(".link").addEventListener("click", tiklanma);

function tiklanma (e){
    console.log("tıklandı");
    e.preventDefault();
};

// addEventListener("click", tiklanma()); , tiklanma() kullanımı yanlıştır. eğer bu şekilde yazılırsa click olayı gerçekleşmeden tiklanma fonksiyonu çağırılır

function tiklama (e){
    let deger = e.type;
    console.log(deger);
    e.preventDefault();
};

document.querySelector(".link").addEventListener("dblclick", tiklama); // bir kez çift tıklama yaptım . consoleda 2 tıklandı ve dblclick yazdı

document.querySelector(".link").addEventListener("mousedown", tiklama); // yazı üstüne basılı tutmak : mousedown (bırakınca consoleda mousedown ve click yazdı)
document.querySelector(".link").addEventListener("mouseup", tiklama); // yazı üstüne basılı tutmayı bırakmak : mouseup (bırakınca consoleda mousedown,mouseup ve click yazdı)

document.querySelector(".link").addEventListener("mouseenter", tiklama); // seçili elemanın üzerine mouse ile gelmek mouseenter (google yazısının üztüne geldim consoleda mouseenter yazdı)
document.querySelector(".link").addEventListener("mouseleave", tiklama); // seçili elemanın üzerinden ayrılmak mouseleave 

//document.querySelector(".container").addEventListener("mouseover", tiklama); // Fare imleci, belirli bir HTML öğesinin sınırları içine girdiğinde mouseover olayı gerçekleşir.
document.querySelector(".container").addEventListener("mouseout", tiklama); // Fare imleci, belirli bir HTML öğesinin sınırları dışına çıktığında mouseout olayı gerçekleşir. 

/*mouseenter olayında imleç bir öğenin sınırlarına girdikten sonra o öğenin alt öğesine girince tetiklenmez fakat mouseover olayında imleç sınırlarına girdiği öğenin 
alt öğesine girdiğinde her seferinde tetiklenir*/

/*mouseleave: Fare imleci bir öğenin sınırları dışına çıktığında tetiklenir. Ancak, fare imleci bu öğenin dışına çıktığında alt öğelerin sınırlarına girdiğinde mouseleave 
olayı tekrar tetiklenmez. Yani, yalnızca belirli bir öğenin sınırları dışına çıkıldığında bir kez tetiklenir 

mouseout: Fare imleci bir öğenin sınırları dışına çıktığında her zaman tetiklenir, ancak bir alt öğenin sınırlarına girdiğinde tekrar tetiklenir. Yani, fare imleci bir 
öğenin üzerinden çıktığında veya bu öğenin altındaki bir başka öğenin üzerine geldiğinde sürekli olarak tetiklenebilir.

Özetle, mouseleave olayı yalnızca belirli bir öğenin sınırları dışına çıkıldığında bir kez tetiklenirken, mouseout olayı her çıkışta tekrar tetiklenebilir.
*/
document.querySelector(".container").addEventListener("mousemove", tiklama); // mouse hareket ettiği sürece tetiklenir

document.querySelector(".container").addEventListener("mouseover", arkaPlanRengiDegistir);

function arkaPlanRengiDegistir(e){
    document.querySelector(".yazi").textContent = `X:${e.clientX} Y:${e.clientY}`; // mouse hareket ettikçe konuma göre Merhaba yazısının yerine mouse bulunduğu yerin x ve y koordinatlarını yazdı.
    document.querySelector(".yazi").textContent = `R:${e.clientX%255} Y:${e.clientY%255} B:${(e.clientX + e.clientY) % 255}`;
    document.querySelector(".container").style.backgroundColor= `rgb(${e.clientX % 255},${e.clientY % 255},${(e.clientX + e.clientY) % 255})` // mouse konumuna göre arkaplan rengi değişiyor
};
// burada mouse ile container adlı divin içine grdiğimizde x ve y koordinatlarına göre rgb değeri belirleniyor ve divin arkaplan rengi buna göre ayarlanıyor.