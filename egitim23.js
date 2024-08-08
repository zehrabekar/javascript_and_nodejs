//Event Listeners ve Event Objesi Kullanma

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
    console.log(e.type); //focus
    console.log(e.target); //<input class="form-control" type="text" name="filter" id="filter" placeholder="Bir Todo Arayın">
   console.log(e.target.placeholder); //Bir Todo Arayın
   console.log(e.target.className); //form-control
});

//submit event
const todoForm = document.getElementById("todo-form");
todoForm.addEventListener("submit",submitForm);

function submitForm(e){
    console.log("submit eventi");
    e.preventDefault();
};

//e.preventDefault eklemeden önce submit eventi çıktısını butona basıp bıraktığımız o kısa sürede görüyorduk ve kayboluyordu.
// e.preventDefault ile sayfanın butona basıldıktan sonra default olarak yenilenmesi davranışını engelledik ve çıktı sayfa yenilenmediği için kaybolmadı.