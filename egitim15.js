// Local Storage ve Session Storage

/*Session Storage : bir tarayıcı oturumu (session) boyunca verilerin saklanmasını sağlar. Oturum sona erdiğinde (tarayıcı kapatıldığında), 
bu veriler otomatik olarak silinir. */

/* Local Storage :  tarayıcıda kalıcı olarak veri saklamak için kullanılır. Veriler, tarayıcı kapatıldıktan sonra bile korunur ve 
tarayıcı tarafından silinene kadar kalır.*/

//local storage eleman ekleme (sadece string veriler saklanabilir):
//localStorage.setItem("ad","zehra");
// f12ye basıp application kısmına geldiğiizde local storage altında key ad value zehra olarak göründü

//sessionStorage.setItem("il","sakarya");
// application kısmında session storage altında aynı şekilde göründü

/* tarayıcıyı kapatıp her iki eleman ekleme satırını yorum satırına çevirdikten sonra dökümanı tekrar tarayıcıda açtığımızda local storagedaki
değerler görünüyor, fakat session storagedaki görünmüyor*/

// bu değerleri okumak için :
//console.log(localStorage.getItem("ad")); // consoleda zehra göründü

// bu değerleri silmek için :
//console.log(localStorage.removeItem("ad"));  

// birden fazla eleman eklemişsek hepsini bir silmek için:
//localStorage.clear();

// Formun submit olayını dinle
document.querySelector("#form").addEventListener("submit", function(e){
    e.preventDefault(); // Formun submit olayının varsayılan davranışını engelle

    // Input'tan isim bilgisini al
    const yeniIsim = document.querySelector(".isim").value;

    // Local Storage'a isim bilgisini kaydet
    localStorage.setItem("isim", yeniIsim);

    // Çıktı bölgesine isim bilgisini yazdır
    document.querySelector("#output").innerText = "Kaydedilen isim: " + yeniIsim;
});

// aynı örneği session storage ile yaparsak tarayıcı kapatılıp tekrar açıldığında bilgiler silinmiş olacaktı.

let items = document.querySelectorAll("li");

items.forEach(function(item, index) {
    item.style.color = "blue";
    console.log(`Item ${index + 1}: ${item.innerText}`);
});