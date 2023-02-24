// if-else
let ayseninYasi = 30, fatmaninYasi=25;

if (ayseninYasi < fatmaninYasi) {
    console.log("Ayşe Fatma'dan küçük")
}
else {
    console.log("Ayşe Fatma'dan büyük.")//eğer ayşe ve fatmanın yaşı eşit olsaydı yine else kısmı çalışırdı çünkü ayşenin fatmadan küçük olmadığı her urumda çalışır. else çalıştı
}
// doğru ise if yanlış ise else çalışır

fatmaninYasi = 30;
if (ayseninYasi < fatmaninYasi) {
    console.log("Ayşe Fatma'dan küçük")
}

else if(ayseninYasi===fatmaninYasi) {
    console.log("yaşıtlar")
}

else {
    console.log("Ayşe Fatma'dan büyük.")
} // else if çalıştı

// if (ayseninYasi < fatmaninYasi) -> bundan sonra ; kullanılmamalı

let ismim= "zehra"
if (ismim === "zehra") 
    console.log("merhaba zehra")
// bu şekilde tek satır varsa {} kullanmaya gerek yok

let ismim1= "zehra"
if (ismim1 === "zehra") {
    console.log("merhaba zehra")
    console.log("nasılsın")
}

let rakam = 5, rakam1 = 6
    if(rakam > rakam1) {
        if (rakam <0)
        console.log("if çalıştı")
    }
    else {
        console.log("else çalıştı")
    }

let asalSayiMi = true
// if (asalSayiMi == true) = if (asalSayiMi)



