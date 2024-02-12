// eleman ekleme, silme, değiştirme

// şehirler listesine yeni eleman ekleme :
const yeniListeElemani= document.createElement("li"); // önce yeni li elemanı oluşturuyoruz (boş bir <li></li> etiketi oluştu)
yeniListeElemani.className = "liste-item"; // li etiketine sınıf ekledik
yeniListeElemani.textContent = "Eskişehir"; // li etiketine değer atadık (<li class="liste-item">eskişehir</li>)
yeniListeElemani.id= "yeni-id"; // istersek bu elemana id ekleyebiliriz
yeniListeElemani.setAttribute("deger","yeni-deger"); // ile elemana attribute ekleyebiliriz

// oluşan bu li etiketini ul etiketinin içine ekliyoruz :
document.querySelector("ul").appendChild(yeniListeElemani); // dökümandaki ul etiketini bulduk (querySelector("ul")) ve yeni elemanı listeye sondan ekledik (appendChild(yeniListeElemani))

console.log(yeniListeElemani);// <li class="liste-item" id="yeni-id" deger="yeni-deger">Eskişehir</li>

// replace (yer değiştirme)
// h2 etiketi le bulunan başlığın yerine yeni eleman koyacağız

const yeniKucukBaslik = document.createElement("h6"); // bo h6 etiketi oluşturduk
yeniKucukBaslik.id = "h6ID"; // id ekledik . <h6 id="h6ID"></h6>
yeniKucukBaslik.textContent = "yeni başlık"; // elemana değer atadık

// dökümandaki h2 başlığı yerine oluşturduğumuz bu yeni başlığı koyacağız. bunun için eski eleman, yeni eleman ve parent'a ihtiyacımız var
//h2'nin parent'i body

const eskiBaslik = document.querySelector("h2"); // eski eleman

const baslikParent = document.querySelector("body"); // eski elemanın parent'i

baslikParent.replaceChild(yeniKucukBaslik,eskiBaslik); // yer değiştirme işlemi

console.log(yeniKucukBaslik);

// remove (silme)

//şehirler listesinden sakaryayı sileceğiz
const listeItem = document.querySelector("li"); // ilk liste elemanını seçti.
listeItem.remove(); // listeden silindi

// li elemanlarını index ile silme 
document.querySelector("ul").removeChild(document.querySelectorAll("li")[1]);
console.log(listeItem);

//document.querySelector("form").removeChild(document.querySelector("input")); // input alanı silindi

// input alanını değişkene atayarak silme :
const inputAlani = document.querySelector("input");
document.querySelector("form").remove(inputAlani);








let renkler = ["kırmızı","yeşil"];
let yeniRenkler = renkler;

console.log(renkler, yeniRenkler); // (2) ['kırmızı', 'yeşil'] (2) ['kırmızı', 'yeşil']

renkler.push("mavi");

console.log(renkler, yeniRenkler); //  ['kırmızı', 'yeşil', 'mavi'] (3) ['kırmızı', 'yeşil', 'mavi']
// burada yeniRenkler dizisi renkler dizisindeki değerleri değil bu değerlerin bellekte bulunduğu adresi tuttuğu için yapılan değişiklikten etkilenir.

renkler = ["kırmızı","pembe"];
renkler.push("sarı");
console.log(renkler, yeniRenkler);
// ['kırmızı', 'pembe', 'sarı'] (3) ['kırmızı', 'yeşil', 'mavi']
//burada renkler = dedikten sonra yeni bir atama işlemi yaptığımızda renklerin tuttuğu adres değişir fakat yeniRenkler hala eski adresi tutmaya devam eder.

