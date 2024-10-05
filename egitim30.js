//Arrow Function : JavaScript'te fonksiyon tanımlamanın daha kısa ve sade bir yolunu sunan bir yapıdır.

//normal fonksiyon yazımı
const merhaba = function(){
    console.log("Merhaba");
};
merhaba(); // Merhaba

//arrow function ile fonksiyon yazımları :

const selam = () => {
    console.log("Selam");
};
selam(); // Selam

const naber = (firstName) => {
    console.log("Naber",firstName);
};
naber("Zehra"); // Naber Zehra

// eğer fonksiyon tek parametre alıyorsa parametreyi parantez içinde yazmaya gerek yok (hiç parametre almıyorsa boş parantez koymamız gerekiyor)
//eğer fonksiyon içinde yapılacak tek işlem varsa işlemi süslü parantez içine yazmaya gerek yok

const naber2 = firstName => console.log("Naber",firstName);
naber2("Zehraa"); // Naber Zehraa

const iyiGunler=(firstName,lastName) => console.log("İyi günler",firstName,lastName);
iyiGunler("Zehra","Bekar"); //İyi günler Zehra Bekar

//uzun fonksiyon yazımı
const cube = function(x){
    return x*x*x;
};
console.log(cube(4)); // 64

// arrow function ile :
const cube2 = x => x*x*x;
console.log(cube(4)); // 64
// fonksiyon içinde tek işlem olduğu için return yazılmasa da olur