// Session Storage : Session Storage, bir web tarayıcısında geçici veri depolamak için kullanılan bir mekanizmadır. 
//Veriler, kullanıcının web sitesini ziyaret ettiği süre boyunca saklanır ve tarayıcı penceresi veya sekmesi kapatıldığında otomatik olarak silinir.

// butonları seçiyoruz
const add = document.querySelector("#add");
const del = document.querySelector("#delete");
const clear = document.querySelector("#clear");

// inputları seçiyoruz
const addkey = document.querySelector("#addkey");
const addvalue = document.querySelector("#addvalue");
const deletekey = document.querySelector("#deletekey");

// butonlara event ekliyoruz
add.addEventListener("click",addItem);
del.addEventListener("click",deleteItem);
clear.addEventListener("click",clearItem);

function addItem(e){
    sessionStorage.setItem(addkey.value, addvalue.value); // session storagea anahtar ve değer verileri ekledik
};

function deleteItem(e){
    sessionStorage.removeItem(deletekey.value); // removeItem metodu ile deletekey inputuna girilen key ile session storagedan girilen key ve value değerlerini sildik
};

function clearItem(e){
    sessionStorage.clear(); // session storagedaki tüm verileri siler
};

// session storageda h1 (key) burpee (değer) verileri var . biz var olan h1'in değerini değiştirmek istersek direkt anahtar ve değer ekleme yerine h1 ve yeni değeri yazarak güncelleyebiliriz
// kaydettiğimiz veriler sekme kapanınca silinir