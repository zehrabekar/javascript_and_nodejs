//Event Listeners ve Event Objesi Kullanma

//Event Listeners : bir olayın gerçekleşmesini bekleyen ve bu olay gerçekleştiğinde belirli bir işlevi (fonksiyonu) çalıştıran mekanizmalardır. 
//Olaylar, bir kullanıcı tıklaması, klavyede bir tuşa basılması, fare hareketi, sayfa yüklemesi gibi şeyler olabilir.

//DOM Eventleri web site üzerinde mouse, klavye gibi kullanıcı etkileşimiyle ortaya çıkan olaylardır. Bu olaylar, Javascript ile belirli olaylar 
//gerçekleştiğinde gerekli kodların çalışmasını sağlayan etkileşimli web sayfaları oluşturmak için kullanılır.

//addEventListener() DOM nesnesine event eklemek için kullanılır. 

// focus event
//input alanını seçiyoruz
const filterInput = document.getElementById("filter"); // <input class="form-control" type="text" name="filter" id="filter" placeholder="Bir Todo Arayın">

// filterInput.onfocus = function(){
//     console.log("focus event");
// };
// burada input alanına tıkladığımızda filterInput onfocus özelliği harekete geçiyor ve fonksiyonu çalıştırıyor. her odaklanmada focus event yazdırdık

// filterInput.addEventListener("focus",function(){
//     console.log("focus event");
// });

filterInput.addEventListener("focus",function(e){
    console.log(e); //FocusEvent {isTrusted: true, relatedTarget: null, view: Window, detail: 0, sourceCapabilities: InputDeviceCapabilities, …}
    console.log(e.type); //focus (olay tipi)
    console.log(e.target); //<input class="form-control" type="text" name="filter" id="filter" placeholder="Bir Todo Arayın">  (olayın meydana geldiği HTML elementi)
   console.log(e.target.placeholder); //Bir Todo Arayın (olayın meydana geldiği HTML elementinin placeholder değeri)
   console.log(e.target.className); //form-control (olayın meydana geldiği HTML elementinin className'i)
});

//function(e), e event objesidir. e, "focus" olayı tetiklendiğinde tarayıcı tarafından otomatik olarak oluşturulan bir nesnedir.
//e, fonksiyonun içinde bir parametre olarak kullanılır ve bu sayede olayla ilgili bilgilere erişebiliriz.


//submit event
const todoForm = document.getElementById("todo-form");
todoForm.addEventListener("submit",submitForm);

function submitForm(e){
    console.log("submit eventi");
    e.preventDefault();
};

//e.preventDefault eklemeden önce submit eventi çıktısını butona basıp bıraktığımız o kısa sürede görüyorduk ve kayboluyordu.
// e.preventDefault ile sayfanın butona basıldıktan sonra default olarak yenilenmesi davranışını engelledik ve çıktı sayfa yenilenmediği için kaybolmadı.